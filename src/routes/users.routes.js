const express = require('express');
const router = express.Router();

const { getUsers, addUser, getUser, updateUser, deleteUser} = require('../controllers/users.controller')

router.get('/user', getUsers);
router.post('/user', addUser);
router.get('/user/:id', getUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

module.exports = router;

