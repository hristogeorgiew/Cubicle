const express = require('express');
const app = express();
const config = require('./config/config.js');

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`))