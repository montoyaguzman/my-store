const express = require('express');
const routerApi = require('./routes');
const { errorLog, handleError, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json())

app.listen(port, () => {
    console.log('ok en puerto: ', port)
});

routerApi(app);
app.use(errorLog);
app.use(boomErrorHandler);
app.use(handleError);