module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "products",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
