const express = require('express');
const router = require('./routes');

const handleError = require('./middlewares/handleError');
// ...

const app = express();

app.use(express.json());
app.use(router);

// ...

app.use(handleError);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
