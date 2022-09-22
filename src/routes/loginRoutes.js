const express = require('express');
const generateToken = require('../utils/generateToken');

const loginRoutes = express.Router();

loginRoutes.post('/', async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        res.status(200).json({
            token: generateToken(),
        });
    }
});

module.exports = loginRoutes;
