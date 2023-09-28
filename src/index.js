const express = require('express');
const bodyParser = require('body-parser');
const talkerRoutes = require('./routes/talkerRoutes');
const loginRoutes = require('./routes/loginRoutes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use('/talker', talkerRoutes);
app.use('/login', loginRoutes);
const HTTP_OK_STATUS = 200;
const { PORT } = process.env;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
