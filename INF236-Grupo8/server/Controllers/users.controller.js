const User = require("../Models/Users.model");
const Usersmodel = require('../Models/Users.model');
const UserCtrl = {};

UserCtrl.getUsers = (req,res) => res.json({username: []})

UserCtrl.createUser = async (req, res) => {
    const {username, rol , email } = req.body;
    const newUser = new User({
        username:username,
        rol:rol,
        email:email
    });
    console.log(newUser)
    await newUser.save();
};

UserCtrl.updateUser = (req, res) => res.json({username: ""})
UserCtrl.deleteUser = (req, res) => res.json({username: ""})

module.exports = UserCtrl;