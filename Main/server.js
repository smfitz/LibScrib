const path = require('path');
const express = require('express');
const mysql = require('mysql2');
const sequelize = require('./config/connect')

const routes = require('./controllers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const port = process.env.PORT || 3000;

// set Handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
// sets up the routes
app.use(routes);

app.get('/', (req, res) => {
    res.send("The server is live");
});

sequelize.sync().then(() => {
    app.listen(port);
    console.log(`Server listening on port ${port}`)
})
