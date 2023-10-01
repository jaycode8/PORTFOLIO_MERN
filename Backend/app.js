const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const routes = require('./Routes/routes');
require('./Model/connDB');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: "*",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    Credential: true,
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.listen(PORT, () => { console.info(`App running on port ${PORT}`) });