const express = require('express');
const { readContent, getTalkerById, writeTalker, changeTalker,
     deleteTalker } = require('../utils/readAndWrite');
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

talkerRoutes.delete('/:id', tokenValidation, async (req, res) => {
    const { id } = req.params;
    await deleteTalker(id);
    res.status(204).json({});
});

talkerRoutes.use(tokenValidation, nameValidation, ageValidation, talkAndWatchedAtValidation,
    rateValidation);

talkerRoutes.post('/', async (req, res) => {
    const result = await writeTalker(req.body);
    res.status(201).json(result);
});

talkerRoutes.put('/:id', async (req, res) => {
    const { id } = req.params;
    const result = await changeTalker(id, req.body);
    res.status(200).json(result);
});

module.exports = talkerRoutes;