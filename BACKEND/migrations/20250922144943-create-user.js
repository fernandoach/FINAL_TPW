"use strict";
/** @type {import('sequelize-cli').Migration} */

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Users", {
    idUser: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    birthday: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    gender: {
      type: Sequelize.CHAR(1),
      allowNull: false,
    },
    role: {
      type: Sequelize.CHAR(1),
      allowNull: false,
    },
    phone: {
      type: Sequelize.CHAR(9),
      allowNull: false,
      unique: true,
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING(60),
      allowNull: false,
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
  await queryInterface.dropTable("Users");
}

export { down, up };
