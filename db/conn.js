const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.MYSQL_DB || "consorcio",
  process.env.MYSQL_DB_USER || "root",
  process.env.MYSQL_DB_PASSWORD || "",
  {
    host: process.env.MYSQL_DB_HOST || "localhost",
    dialect: "mysql",
    logging: false,
  }
);

try {
  sequelize.authenticate;
  sequelize.sync({
    //force: true,
    alter: true,
  })();
  console.log("Sequelize connected");
} catch (err) {
  console.log("Não foi possível conectar ao Sequelize: ", err);
}
module.exports = sequelize;
