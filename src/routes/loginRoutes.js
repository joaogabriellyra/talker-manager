const express = require('express');
const generateToken = require('../utils/generateToken');
const emailValidation = require('../middlewares/emailValidation');
const passwordValidation = require('../middlewares/passwordValidation');

const loginRoutes = express.Router();

loginRoutes.post('/', emailValidation, passwordValidation, async (_req, res) => {
    res.status(200).json({
            token: generateToken(),
        });
});

module.exports = loginRoutes;
