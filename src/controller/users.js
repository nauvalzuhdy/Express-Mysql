const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    //capture error in the database
    try {
        const [data] = await UsersModel.getAllUsers();

        res.json ({
            message: 'GET all users success',
            data: data
        })

    } catch (error) {
        res.status(500).json ({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const getUser = (req, res) => {
    //dummy data
    const {idUser} = req.params;
    console.log('idUser: ', idUser);
    res.json ({
        message: 'GET user success',
        data: req.body,
    })
}

const createNewUser = async (req, res) => {
    const {body} = req;

    if(!body.username || !body.email || !body.kata_sandi || !body.status_paket) {
        res.status(400).json ({
            message: 'incorrect data not processed',
            data: null
        })
    }

    try {
        await UsersModel.createNewUser(body);
        res.status(201).json ({
            message: 'CREATE new user success',
            data: body
        })

    } catch (error) {
        res.status(500).json ({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const updateUser = async (req, res) => {
    //get idUser from req params
    const {userId} = req.params;
    const {body} = req; 
    try {
        await UsersModel.updateUser(body, userId);
        res.json ({
            message: 'UPDATE user success',
            data: {
                id: userId,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json ({
            message: 'Server Error',
            serverMessage: error,
        })   
    }
}

const deleteUser = async (req, res) => {
    const {userId} = req.params;
    try {
        await UsersModel.deleteUser(userId);
        res.json ({
            message: 'DELETE user success',
            data: null
        })
    } catch (error) {
        res.status(500).json ({
            message: 'Server Error',
            serverMessage: error,
        })   
    }
}


module.exports = {
    getAllUsers,
    getUser,
    createNewUser,
    updateUser,
    deleteUser,
};