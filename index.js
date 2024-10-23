const express = require('express');
const mongoose = require('mongoose');
const port = 1608;

const app = express();

app.use(express.json());

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})