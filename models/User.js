// taking the Model and DataTypes (so we know the data type is a string/integer) object sequelize gives out; destructuring
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");
const bcrypt = require("bcrypt");

class User extends Model {
  checkPassword(passwordAttempt) {
    return bcrypt.compareSync(passwordAttempt, this.password);
  }
}

// calls the init method that our model inherited from sequelize
User.init(
  // describes all the different properties of User
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 24],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (userData) => {
        userData.password = await bcrypt.hash(userData.password, 7)
        return userData
      },
      beforeUpdate: async (userData) => {
        userData.password = await bcrypt.hash(userData.password, 7)
        return userData
      }
    },
    sequelize,
    timestamps: true,
    // when the table name is pluralized, it leads to some issues in sequelize
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
