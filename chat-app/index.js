const express = require('express');
const app = express();
const cors = require('cors');
const port = 8888;

const corsOptions = {
    credentials: true,
    origin: 'http://dating:'+port,  // сменил на http://<имя моего домена>
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const axios = require('axios');
const querystring = require('querystring');
const server = app.listen(port,()=>{
    console.log(`Example app listening at http://dating:${port}`)
})

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection',(socket)=>{

    socket.on('ROOM:JOIN',({dialogId})=>{
        socket.join(dialogId);
    })

    socket.on('ROOM:NEW_MESSAGE', ({ dialogId, token, otherUserId, avatar_dir, name,message }) => {
        const data = querystring.stringify({ token, otherUserId, name, message, dialogId });
        axios.post('http://dating/api/sendMessage',
            data,
            {
                headers:
                {
                    'accept': 'application/json',
                    "X-Requested-With": "XMLHttpRequest",
                }
            }
        ).then((response)=>
            {
                console.log(response.data);
                const { messageId, myId } = response.data;
                const obj = { messageId, dialogId, myId, otherUserId, avatar_dir, name, message };
                io.sockets.in(dialogId).emit('ROOM:NEW_MESSAGE', obj);
            }
        )
        .catch(err =>{
            console.log(err);
        })
    });

})
