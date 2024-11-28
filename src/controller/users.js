const userModel = require('../model/users.js');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await userModel.getAllUsers();

        res.json({
            message: "get all users success",
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }
};

const createNewUser = async (req, res) => {
    const body = req.body;
    try {
        await userModel.createNewUser(body);
        res.status(201).json({
            message: "create new user success",
            data: body
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }
};

const updateUser = async (req, res) => {
    const idUser = req.params.id;
    const {body} = req;
    console.log(body);
    console.log(idUser);
    

    try {
        await userModel.updateUser(body, idUser);   
        res.json({
            message: 'update user success',
            data: {
                id:idUser,
                ...body
            }
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }
}

const deleteUser = async (req, res) => {
    const idUser = req.params.id;
    
    try {
        await userModel.deleteUser(idUser);
        res.json({
            message: "delete user success",
            data: {}
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }
}

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser }