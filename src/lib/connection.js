const mongoose = require("mongoose");
require('dotenv').config();
const connection = {}
export const connectToDb = async () => {
  try{
    if(connection.isconnected){
      console.log('Using existing connection');
      return;}
      if (!process.env.MONGO) {
        throw new Error('MONGO environment variable is not set.');
      }  
      const db = await mongoose.connect(process.env.MONGO);
      connection.isconnected = db.connections[0].readyState;
      console.log('connected to db')
  }catch(err){
    console.log(err)
    throw new Error(err)
  }
};