const usuariosCtrl = {};

const User = require('../Models/Users');

//Conseguir las horas
usuariosCtrl.getUs = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

//Conseguir una hora
usuariosCtrl.getU = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

//Crear las horas
usuariosCtrl.createU = async (req, res) => {
    const { rut, dv, nombre, password, cargo, autorizacion }= req.body;
    const newUser = new User({
        rut, 
        dv, 
        nombre, 
        password, 
        cargo, 
        autorizacion
    });
    await newUser.save();
}

//Actualizar una hora
usuariosCtrl.updateU = async (req, res) =>{
    const { rut, dv, nombre, password, cargo, autorizacion }= req.body;
    await User.findByIdAndUpdate(req.params.id, {
        rut, 
        dv, 
        nombre, 
        password, 
        cargo, 
        autorizacion
    });
}

module.exports = usuariosCtrl;