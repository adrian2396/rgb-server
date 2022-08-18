const userCtrl = {};

const Users = require('../models/user');

userCtrl.getUsers =  async (req, res) => {
    const users = await Users.find();
    res.json(users);
};

userCtrl.addUser = async (req, res) => {
    const { name, email, password } = req.body;
    const Users = new Users({
        name,
        email,
        password
    });
    await Users.Save();
    res.json({status: 'User Save'});
};

userCtrl.getUser = async (req, res) => {
    const user = Users.findById(req.params.id);
    res.json(user);
};

userCtrl.updateUser = async (req, res) => {
    const {name, email, password} = req.body;
    const newUser = {name, email, password};
    await Users.findByIdAndUpdate(req.params.id, newUser);
    res.json({status: 'User updated'});
};

userCtrl.deleteUser = async (req, res) => {
    await Data.findByIdAndRemove(req.params.id);
    res.json({status: 'Data deleted'});
};


module.exports = userCtrl;