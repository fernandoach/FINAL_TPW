'use strict';
import { Model }  from 'sequelize'


const motorbikeModel = (sequelize, DataTypes) => {
  class Motorbike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Motorbike.init({
    idMotorbike: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    purpose: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    bran: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    model: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    modelImg: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    pricePEN: {
      type: DataTypes.FLOAT(10, 2),
      allowNull: false
    },
    priceUSD: {
      type: DataTypes.FLOAT(10, 2),
      allowNull: false
    },
    tankCapacity: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    displacement: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    engineStrokes: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    engineCylindres: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    engineValves: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    engineHP: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    engineRPM: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    torqueNm: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    torqueRPM: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    engineImg: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    engineDescription: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    transmissionSpeeds:{
      type: DataTypes.STRING(25),
      allowNull: false
    },
    designImg: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    designDescription: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    technologyImg: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    technologyDescription: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    safetyImg:{
      type: DataTypes.STRING(250),
      allowNull: false
    },
    safetyDescription: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    stock: {
      type: DataTypes.FLOAT(10, 2),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Motorbike',
    tableName: 'motorbikes',
    timestamps: true
  });
  return Motorbike;
};

export { motorbikeModel }