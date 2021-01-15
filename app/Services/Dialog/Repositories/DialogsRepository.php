<?php

namespace App\Services\Dialog\Repositories;

use App\Models\Message;
use App\Models\Dialog;
use App\Services\User\UserService;
use Illuminate\Mail\Events\MessageSent;
use Illuminate\Support\Facades\DB;

class DialogsRepository
{
    private $Message;
    private $UserService;
    private $Dialog;
    public function __construct(Message $message, UserService $userService, Dialog $dialog)
    {
        $this->Message = $message;
        $this->UserService = $userService;
        $this->Dialog = $dialog;
    }
    public function getDialogsByUserId($id)
    {
        return $this->Dialog
                    ->where(['user_a' => $id])
                    ->orWhere(['user_b' => $id])
                    ->orderByDesc('id')
                    ->get();
    }
    public function getDialogs($token)
    {
        $id = $this->UserService->getIdByToken($token);
        if(!$id)
            return response()->json(['success' => false, 'errors' => ['msg' => 'пользователь не найден']], 400);
        $dialogs = $this->getDialogsByUserId($id);
        if (!$dialogs)
            return response()->json(['success' => false, 'errors' => ['msg' => 'Диалоги не найдены']], 400);

        $result = [];

        foreach($dialogs as $dialog)
        {
            $mainUser = ($dialog->user_a == $id)?$dialog->getUserA : $dialog->getUserB;
            $otherUser = ($dialog->user_b == $mainUser->id) ? $dialog->getUserA : $dialog->getUserB;
            $lastDialog = $this->Message->where(['dialog_id' => $dialog->id])->orderByDesc('id')->limit(1)->get()[0];
            $name = ($lastDialog->sender === $id) ? 'Вы' : $otherUser->name;
            if(strlen($lastDialog->message) > 100)
                $lastDialog->message = mb_substr($lastDialog->message,0,150)."...";
            $result[]=[
                'img'=> '/storage/' .$otherUser->avatar_dir,
                'name' => $name,
                'mainUser' => $mainUser->id,
                'otherUser' => $otherUser->id,
                'message' => $lastDialog->message,
                'dialogId'=> $dialog->id
            ];
        }
        if(count($result) > 0)
        {
            return response()->json(['success' => true, 'dialogs' => $result], 200);
        }
        else
        {
            return response()->json(['success' => false, 'errors' => ['msg' => 'Диалоги не найдены']], 400);
        };
    }
    public function getDialog($request)
    {
        $token = $request->input('token');
        $dialogId = $request->input('dialogId');

        $id = $this->UserService->getIdByToken($token);
        if (!$id)
            return response()->json(['success' => false, 'errors' => ['msg' => 'пользователь не найден']], 400);

        $messages = $this->Message->where(['dialog_id' => $dialogId])->get();
        if (!$messages)
            return response()->json(['success' => false, 'errors' => ['msg' => 'Сообщения не найдены']], 400);

        $result = [];
        foreach ($messages as $message)
        {
            $user = $message->getSender;
            $result[]=[
                'id'=> $message->id,
                'avatar_dir'=> '/storage/'. $user->avatar_dir,
                'name' => $user->name,
                'message' => $message->message,
                'right'=> $id == $message->sender
            ];
        }

        $otherUserId = ($id == $messages[0]->sender) ? $messages[0]->recipient : $messages[0]->sender;

        if (count($result) > 0)
        {
            return response()->json(['success' => true, 'messages' => $result,'mainUserId'=> $id,'otherUserId' => $otherUserId], 200);
        }
        else
        {
            return response()->json(['success' => false, 'errors' => ['msg' => 'Диалоги не найдены']], 400);
        };
    }
}
