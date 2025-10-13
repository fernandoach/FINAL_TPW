const sequelizeConfig = {
    developmet:{
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    dialectOptions:{
        // ssl, etc.
    },
    define:{
        timestamps: true,
        underscored: true
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
},
test: {},
production: {}
}

export { sequelizeConfig }