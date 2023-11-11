const {Schema, deleteModel} = require('mongoose')

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    rol: String,
    email: String
});

module.exports = model('User', userSchema);