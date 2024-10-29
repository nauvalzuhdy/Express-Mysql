
const express = require('express');

const UserController = require('../controller/users.js');

const router = express.Router();

//READ - GET
router.get('/', UserController.getAllUsers);

//READ - GET by id
router.get('/:idUser', UserController.getUser);


//CREATE - POST
router.post('/', UserController.createNewUser);

//UPDATE - PATCH
router.patch('/:userId', UserController.updateUser );
//params with ":"

//DELETE - DELETE
router.delete('/:userId', UserController.deleteUser);

module.exports = router;