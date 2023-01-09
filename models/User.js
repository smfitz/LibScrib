const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connect');
const bcrypt = require('bcrypt')

class User extends Model {
    checkPassword(passwordAttempt) {
        return bcrypt.compareSync(passwordAttempt, this.password)
    }
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        hooks: {
            beforeCreate: async (userData) => {
                userData.password = await bcrypt.hash(userData.password, 11)
                return userData
            },
            beforeUpdate: async (userData) => {
                userData.password = await bcrypt.hash(userData.password, 11)
                return userData
            }
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "user"
    }
);

module.exports = User;