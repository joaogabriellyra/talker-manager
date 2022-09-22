const talkAndWatchedAtValidation = (req, res, next) => {
    const { talk } = req.body;
    if (talk === undefined) {
        return res.status(400).json({
            message: 'O campo "talk" é obrigatório',
          });
    }
    const { talk: { watchedAt } } = req.body;
    if (watchedAt === undefined) {
        return res.status(400).json({
            message: 'O campo "watchedAt" é obrigatório',
          });
    }
    if (!watchedAt.match('[0-9][0-9]/[[0-9][0-9]/[0-9][0-9][0-9][0-9]')) {
        return res.status(400).json({
            message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
          });
    }
    next();
};

const rateValidation = (req, res, next) => {
    const { talk: { rate } } = req.body;
    if (rate === undefined) {
        return res.status(400).json({
            message: 'O campo "rate" é obrigatório',
          });
    }
    if (rate < 1 || rate > 5) {
        return res.status(400).json({
            message: 'O campo "rate" deve ser um inteiro de 1 à 5',
          });
    }
    next();
};

module.exports = { 
    talkAndWatchedAtValidation,
    rateValidation,
};