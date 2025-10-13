"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("Motorbikes", {
    idMotorbike: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    purpose: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    brand: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    model: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    modelImg: {
      type: Sequelize.STRING(250),
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    pricePEN: {
      type: Sequelize.FLOAT(10, 2),
      allowNull: false,
    },
    priceUSD: {
      type: Sequelize.FLOAT(10, 2),
      allowNull: false,
    },
    tankCapacity: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    displacement: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    engineStrokes: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    engineCylindres: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    engineValves: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    engineHP: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    engineRPM: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    torqueNm: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    torqueRPM: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    engineImg: {
      type: Sequelize.STRING(250),
      allowNull: false,
    },
    engineDescription: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    transmissionSpeeds: {
      type: Sequelize.STRING(25),
      allowNull: false,
    },
    designImg: {
      type: Sequelize.STRING(250),
      allowNull: false,
    },
    designDescription: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    technologyImg: {
      type: Sequelize.STRING(250),
      allowNull: false,
    },
    technologyDescription: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    safetyImg: {
      type: Sequelize.STRING(250),
      allowNull: false,
    },
    safetyDescription: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    stock: {
      type: Sequelize.FLOAT(10, 2),
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
  await queryInterface.dropTable("Motorbikes");
}

export { up, down };
