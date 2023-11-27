const { Schema, model } = require('mongoose');

const horaSchema = new Schema({
    nombreP: String,
    rutP: Number,
    dvP: String,
    tipoH: String,
    anio: String,
    mes: String,
    dia: String,
    hora: String,
    observacion: String,
    idCreador: String
});

module.exports = model('Hora', horaSchema);