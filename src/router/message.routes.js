import { Router } from "express";
import { Message } from "../modules/message.schema.js";

const messageRouter = Router();

messageRouter.post('/message', (req, res) => {
    const { user, message } = req.body;
  
   
    const newMessage = new Message({ user, message });
  
    
    newMessage.save()
      .then(() => {
        console.log('Mensaje guardado en la base de datos');
        res.sendStatus(200);
      })
      .catch((err) => {
        console.error('Error al guardar el mensaje en la base de datos:', err);
        res.sendStatus(500);
      });
  });
  