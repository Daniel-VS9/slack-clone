require('dotenv').config();
require('./db');

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/channel', require('./routes/channels'));

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
