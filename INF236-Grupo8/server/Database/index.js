const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://ignaciotrujillo85:ignacio123@bd-1.r0bcxum.mongodb.net/?retryWrites=true&w=majority"

const db = async () => {
    try{
        const conn = await mongoose.connect(MONGO_URL);
        console.log("BD conectada", conn.connection.host)
    } catch (error){
        console.log(error);
    }
}
module.exports = db;