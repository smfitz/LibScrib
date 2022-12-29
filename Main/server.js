const express = require('express');
const mysql = require('mysql2');
const sequelize = require('./config/connect')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("The server is live");
});

sequelize.sync().then(() => {
    app.listen(port);
    console.log(`Server listening on port ${port}`)
})
