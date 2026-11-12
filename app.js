const express    = require('express');
const app        = express();
const db         = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// db connection
db
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

// routes
app.get('/', (req, res) => {
  res.send('Está funcionando!');
});

// jobs routes
app.use('/jobs', require('./routes/jobs'));

// inicia o servidor por último
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});