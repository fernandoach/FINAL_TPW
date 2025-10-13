'use strict';

import { Model } from 'sequelize'

const discountsModel = (sequelize, DataTypes) => {
  class Discounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Discounts.init({
    idDiscount: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(200), 
      allowNull: false
    },
    type: {
      type:DataTypes.STRING(50),
      allowNull: false
    },
    total: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Discount',
    tableName: 'discounts',
    timestamps: true
  });
  return Discounts;
};

export { discountsModel }