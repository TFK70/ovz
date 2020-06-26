import { Server } from "http";
import { Socket } from "dgram";
import { Request, Response } from "express";
const express = require('express');
const config = require('config');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser')
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const { db_connect, db } = require('./db');
let { FeedbackSchema } = require('./models/Feedback');

const PORT: number = config.get('port') || 4000;

const app = express();
const server: Server = http.createServer(app);
const io: Socket = socketIo(server);

let Feedback = mongoose.model('Feedback', FeedbackSchema);

app.use(cors());
app.use(bodyParser.json());

app.get('/getcards', (req: Request,res: Response) => {
    Feedback.find((err: Error,fbs: object) => {
        if (err) {
            console.error(err);
        } else {
            res.json(fbs);
        }
    })
})

app.post('/deletefeedback/:id', (req: Request,res: Response) => {
    let id = req.params.id;
    Feedback.deleteOne({ _id: id }, (err) => {err ? console.error(err) : null})
})

app.get('/getcard/:id', (req: Request,res: Response) => {
    let id = req.params.id;
    Feedback.findById(id, (err: Error,fb: object) => {
        res.json(fb);
    })
})

app.post('/sendfeedback', (req: Request,res: Response) => {
    let feedback = new Feedback(req.body);
    feedback.save()
    .then(fback => {
        res.status(200).json({'feedback': 'success'});
    })
    .catch(e => res.status(400).send('Fail'));
})

io.on('connection', (socket: any) => {
    socket.on('join', (room: string, cb: CallableFunction) => {
        socket.join(room);

        socket.on('newVal', (val: string) => {
            socket.broadcast.to(room).emit('updateVal', val);
        })
        socket.on('newLink',(link: string) => {
            socket.broadcast.to(room).emit('updateLink', link);
        })
    })
    socket.on('disconnect', () => {
        
    })
})

db_connect();
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to db');
})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
})