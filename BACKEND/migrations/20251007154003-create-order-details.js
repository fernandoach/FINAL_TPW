"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("OrderDetails", {
    idOrderDetails: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    idOrder: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "orders",
        key: "idOrder",
      },
    },
    idMotorbike: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "motorbikes",
        key: "idMotorbike",
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
  await queryInterface.dropTable("OrderDetails");
}

export { up, down }