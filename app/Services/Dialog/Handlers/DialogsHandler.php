<?php

namespace App\Services\Dialog\Handlers;

use App\Models\Dialog;
use App\Models\Message;
use App\Services\Dialog\Repositories\DialogsRepository;
use App\Services\User\UserService;

class DialogsHandler
{
    private $Dialog;
    private $Message;
    private $UserService;
    private $DialogCheckers;

    public function __construct(
        Dialog $dialog,
        Message $message,
        UserService $userService,
        DialogsRepository $dialogRepository
    )
    {
        $this->Dialog = $dialog;
        $this->Message = $message;
        $this->UserService = $userService;
        $this->DialogRepository = $dialogRepository;
    }
    public function createDialog($userA,$userB)
    {
        $this->Dialog->fill(['user_a'=>$userA, 'user_b'=>$userB])->save();
        return $this->Dialog->id;
    }
    public function createMessage($userA,$userB,$message,$dialogId)
    {
        return $this->Message
                    ->fill([
                            'sender'=> $userA,
                            'recipient'=> $userB,
                            'message'=> $message,
                            'dialog_id'=> $dialogId
                        ])->save();
    }
    public function saveMessage($request)
    {
        $message = $request->input('message');
        $otherUserId = $request->input('otherUserId');
        $myId = $this->UserService->getIdByToken($request->input('token'));
        if (!$myId)
            return response()->json(['success' => false, 'errors' => ['msg' => 'пользователь не найден']], 400);
        $dialogId = $this->DialogRepository->getDialogId($myId, $request->input('otherUserId'));

        if(!$dialogId)
        {
            $dialogId = $this->createDialog($myId,$otherUserId);
        }
        $result = $this->createMessage($myId, $otherUserId,$message,$dialogId);
        if ($result)
        {
            return response()->json(['success' => true], 200);
        }
        else
        {
            return response()->json(['success' => false, 'errors' => 'сообщение не добавленно'], 400);
        };
    }
}
