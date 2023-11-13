const horasCtrl = {};

const Hora = require('../Models/Horas');

//Conseguir las horas
horasCtrl.getHs = async (req, res) => {
    const horas = await Hora.find();
    res.json(horas);
}

//Conseguir una hora
horasCtrl.getH = async (req, res) => {
    const hora = await Hora.findById(req.params.id);
    res.json(hora);
}

//Crear las horas
horasCtrl.createH = async (req, res) => {
    const { paciente, rutP, dvP, fecha, horario, tipo_hora, creador }= req.body;
    const newHora = new Hora({ //Aqui guardamos la nota
        paciente,
        rutP,
        dvP,
        fecha,
        horario,
        tipo_hora,
        creader
    });
    await newHora.save();
}

//Actualizar una hora
horasCtrl.updateH = async (req, res) =>{
    const { paciente, rutP, dvP, fecha, horario, tipo_hora, creador }= req.body;
    await Hora.findByIdAndUpdate(req.params.id, {
        paciente,
        rutP,
        dvP,
        fecha,
        horario,
        tipo_hora,
        creador
    });
}

//Eliminar una hora
horasCtrl.deleteH = async (req, res) =>{
    await Hora.findOneAndDelete(req.params.id);
}

module.exports = horasCtrl;