const express = require('express');
const mysql = require('mysql2');
const sequelize = require('./config/connect')

const app = express();
const PORT = process.env.PORT || 3001;

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

sequelize.sync().then(() => {
    app.listen(port);
    console.log(`Server listening on port ${port}`)
})
