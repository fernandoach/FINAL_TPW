import { Model } from "sequelize";

const orderModel = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init({
    idOrder: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    paymentStatus: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    orderDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    deliveryDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    destination: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    total: {
      type: DataTypes.FLOAT(10, 2),
      allowNull: false
    },
    deliveryStatus: {
      type: DataTypes.STRING,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    idCustomer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'idUser'
      }
    },
    idSeller: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'idUser'
      }
    }
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
    timestamps: true
  });
  return Orders;
};

export { orderModel }