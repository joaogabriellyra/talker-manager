const express = require('express');
const { readContent, getTalkerById, writeTalker } = require('../utils/readAndWrite');
const idValidation = require('../middlewares/idValidation');
const tokenValidation = require('../middlewares/tokenValidation');
const nameValidation = require('../middlewares/nameValidation');
const ageValidation = require('../middlewares/ageValidation');
const { talkAndWatchedAtValidation, rateValidation } = require('../middlewares/talkValidation');

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

talkerRoutes.use(tokenValidation, nameValidation, ageValidation, talkAndWatchedAtValidation,
    rateValidation);

talkerRoutes.post('/', async (req, res) => {
    const result = await writeTalker(req.body);
    res.status(201).json(result);
});

module.exports = talkerRoutes;