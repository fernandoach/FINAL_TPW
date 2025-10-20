'use strict';
import { Model } from 'sequelize';

const clienteModel = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      // Aquí puedes definir relaciones con otros modelos si las hubiera
      // Ejemplo: Cliente.hasMany(models.Order, { foreignKey: 'idCliente' });
    }
  }

  Cliente.init({
    idCliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM('Masculino', 'Femenino', 'Otro'),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    role: {
      type: DataTypes.CHAR(1), // Puedes definir roles como 'A', 'U', etc.
      allowNull: false,
      defaultValue: 'U'
    }
  }, {
    sequelize,
    modelName: 'Cliente',
    tableName: 'clientes',
    timestamps: true
  });

  return Cliente;
};

export { clienteModel };
