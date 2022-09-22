const express = require('express');
const { readContent, getTalkerById } = require('../utils/readAndWrite');
const idValidation = require('../middlewares/idValidation');

const talkerRoutes = express.Router();

talkerRoutes.get('/', async (_req, res) => {
    const data = await readContent();
    res.status(200).json(data);
});

talkerRoutes.get('/:id', idValidation, async (req, res) => {
    const { id } = req.params;

    const data = await getTalkerById(id);
    res.status(200).json(data);
});

module.exports = talkerRoutes;