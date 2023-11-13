const { Schema, model } = require('mongoose');

const horaSchema = new Schema({
    paciente: String,
    rutP: Number,
    dvP: String,
    fecha: Date,
    horario: Date,
    tipo_hora: String,
    creador: String
});

module.exports = model('Hora', horaSchema);