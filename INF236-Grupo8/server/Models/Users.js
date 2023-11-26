const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    rut: Number,
    dv: String,
    nombre: String,
    password: String,
    cargo: String,
    autorizacion: Boolean
});

module.exports = model('User', userSchema);