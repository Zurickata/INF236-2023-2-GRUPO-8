const {Router} = require('express');
const router = Router();

const {getUsers, updateUser, deleteUser} = require('../Controllers/users.controller');

router.route('/')
    .get(getUsers)
    .post(createUser)
    

router.route('/:id')
    .delete(deleteUser)
    .put(updateUser)

module.exports = router;