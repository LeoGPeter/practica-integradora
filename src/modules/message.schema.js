import mongoose from "mongoose";

const userCollection = 'message';

const messageSchema = new mongoose.Schema({
  user: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

export const Message = mongoose.model(userCollection, messageSchema);
