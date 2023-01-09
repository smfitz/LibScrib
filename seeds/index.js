const sequelize = require('../config/connect');
const seedBooks = require('./book-seeds');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedBooks();

    process.exit(0);
} 

seedDatabase();