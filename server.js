// dependencies
const path = require('path');
const express = require('express');
const sequelize = require('./config/connect');
// const mysql = require('mysql2');
const { User, Review } = require('./models');
const routes = require('./controllers');
const port = process.env.PORT || 3001;

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

// express sessions
const session = require('express-session');
const sessionSequelize = require('connect-session-sequelize');
const SequelizeStore = sessionSequelize(session.Store);
const sessionOptions = {
    secret: process.env.DB_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// express function call
const app = express();


// set Handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, '/public')));
app.use(session(sessionOptions));
app.use(express.json());
app.use(routes);



// app.get('/', (req, res) => {
//     res.send("The server is live");
// });

sequelize.sync({ force:false }).then(() => {
    app.listen(port);
    console.log(`Server listening on port ${port}`)
});
