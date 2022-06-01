const { Model, DataTypes } = require("sequelize");
const sequelize  = require("../db");

class Pets extends Model{}
Pets.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING
    }
},{
    sequelize,
    modelName: 'pets'
})

module.exports = Pets;