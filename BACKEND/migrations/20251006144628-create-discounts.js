"use strict";
/** @type {import('sequelize-cli').Migration} */

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Discounts", {
    idDiscount: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    code: {
      allowNull: false,
      type: Sequelize.STRING(50),
    },
    description: {
      allowNull: false,

      type: Sequelize.STRING(200),
    },
    type: {
      allowNull: false,

      type: Sequelize.STRING(50),
    },
    total: {
      allowNull: false,

      type: Sequelize.FLOAT(10, 2),
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
  await queryInterface.dropTable("Discounts");
}

export { up, down };
