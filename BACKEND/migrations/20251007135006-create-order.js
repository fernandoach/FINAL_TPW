"use strict";

/** @type {import('sequelize-cli').Migration} */

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Orders", {
    idOrder: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    paymentStatus: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    orderDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    deliveryDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    destination: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    total: {
      type: Sequelize.FLOAT(10, 2),
      allowNull: false,
    },
    deliveryStatus: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    notes: {
      type: Sequelize.STRING(200),
      allowNull: true,
    },
    idCustomer: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: "idUser",
      },
    },
    idSeller: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: "idUser",
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
}

async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("Orders");
}

export { up, down };
