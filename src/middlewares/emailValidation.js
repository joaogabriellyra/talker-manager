const validateEmail = (email) => String(email)
      .toLowerCase()
      .match('[a-z0-9]+@email.com' && '[a-z0-9]+@gmail.com');

const emailValidation = (req, res, next) => {
    const { email } = req.body;
    if (email === undefined) {
        return res.status(400).json({
            message: 'O campo "email" é obrigatório',
        });
    }
    if (!validateEmail(email)) {
        return res.status(400).json({
            message: 'O "email" deve ter o formato "email@email.com"',
        });
    } 
    next();
};

module.exports = emailValidation;