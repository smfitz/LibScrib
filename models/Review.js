// taking the Model and DataTypes (so we know the data type is a string/integer) object sequelize gives out; destructuring
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

class Review extends Model {
  // extra methods will go here
}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    }
  },
  {
    sequelize,
    timestamps: true,
    // when the table name is pluralized, it leads to some issues in sequelize, so the table name must be "frozen"
    freezeTableName: true,
    underscored: true,
    modelName: "review",
  }
);

module.exports = Review;
