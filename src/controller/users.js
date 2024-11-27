const getAllUsers = (req, res) => {
    const data = {
        id: 1,
        name: "Dikri Fauzan Amrulloh",
        email: "dikri@test.com",
        adress: "Kuningan"
    }
    res.json({
        message: "get all users success",
        data: data
    });
};

const createNewUser = (req, res) => {
    res.json({
        message: "create new user success",
        data: req.body
    });
};

const updateUser = (req, res) => {
    const id = req.params.id;

    res.json({
        message: 'update user success',
        data: req.body
    });
}

const deleteUser = (req, res) => {
    const { idUser } = req.params;
    res.json({
        message: "delete user success",
        data: {
            id: idUser,
            name: "Dikri Fauzan Amrulloh",
            email: "dikri@test.com",
            address: "Kuningan"
        }
    });
}

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser }