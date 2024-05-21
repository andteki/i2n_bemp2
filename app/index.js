const express = require('express');
const app = express();
const router = require('./router');
const port = 8000;

app.use(express.json());
app.use('/api', router);

app.listen(port, () => {
    console.log(`Listening: localhost:${port}`);
});