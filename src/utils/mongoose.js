import {connect, connection} from "mongoose";


const conn = {
    isConnected: false
}


export const connectDB = async()=>{

    //si la coneccion existe retorna 
    if(conn.isConnected)return;

    const db = await connect('mongodb+srv://johnlb91:johnlb91@miclustercafe.kk8o4fo.mongodb.net/nextmongocrud');

    
    console.log(db.connection.db.databaseName);
    //esto devuelve un valor entre 0 o 1, si hay un valor signfica que ha conectado, si no es false
    conn.isConnected = db.connections[0].readyState
}

connection.on('connected', ()=> {
    console.log('Mongoose is connected');
})

connection.on('error', (err)=> {
    console.log('error connection', err);
})
