const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const db = require('./Database');

const app = express();

//Settings
app.set("port", process.env.PORT || 5000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

db();

app.listen(app.get("port"), () =>{
    console.log('Servidor está corriendo en el puerto:', app.get("port"));
});

//Routes
app.use('/calendario', require('./Routes/horas.js'))
//app.use('/calendario', require('./Routes/users'))

module.exports = app;