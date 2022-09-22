const idValidation = async (req, res, next) => {
    const { id } = req.params;
    if (id > 4) {
        return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    next();
};

module.exports = idValidation;