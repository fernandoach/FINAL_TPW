'use strict';

import { Model } from 'sequelize';

const orderDetailsModel = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
      // Define associations here
      // Example:
      // OrderDetail.belongsTo(models.Order, { foreignKey: 'id' });
      
    }
  }

  OrderDetails.init(
    {
      idOrderDetails: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      idOrder: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { 
          model: 'orders',
          key: 'idOrder'
        },
      },      
      idMotorbike: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { 
          model: 'motorbikes',
          key: 'idMotorbike'
        },
      },      
    },
    {
      sequelize,
      modelName: 'OrderDetail',
      tableName: 'orderdetails',
      timestamps: true,
    }
  );

  return OrderDetails;
};

export { orderDetailsModel };