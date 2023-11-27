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
    const { nombreP, rutP, dvP, tipoH, anio, mes, dia, hora, observacion, idCreador }= req.body;
    const newHora = new Hora({ //Aqui guardamos la nota
        nombreP,
        rutP,
        dvP,
        tipoH,
        anio,
        mes,
        dia,
        hora,
        observacion,
        idCreador
    });
    await newHora.save();
}

//Actualizar una hora
horasCtrl.updateH = async (req, res) =>{
    const { nombreP, rutP, dvP, tipoH, anio, mes, dia, hora, observacion, idCreador }= req.body;
    await Hora.findByIdAndUpdate(req.params.id, {
        nombreP,
        rutP,
        dvP,
        tipoH,
        anio,
        mes,
        dia,
        hora,
        observacion,
        idCreador
    });
}

//Eliminar una hora
horasCtrl.deleteH = async (req, res) =>{
    await Hora.findOneAndDelete(req.params.id);
}

module.exports = horasCtrl;