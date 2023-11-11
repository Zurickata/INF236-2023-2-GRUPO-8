const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const db = require("./Database");

const app = express();

//app.set("port", process.env.PORT || 5000);


//Model 
const User = require('./Models/Users.model')


//app.get('/api/user', (req, res) => res.send('<h1> HOLA MUNDO! </h1>'))

async function main(){
    await app.listen(5000);
    console.log('Server on port 5000');
}

main();

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes
app.use('/api/users',require('./Routes/users'))

db();

app.listen(app.get("port"), () =>{
    console.log(`Servidor esta corriendo en el puerto: ${app.get("port")}`);
});

module.exports = app;