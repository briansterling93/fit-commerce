const Sequelize = require("sequelize");

// module.exports = new Sequelize(
//   "fit_commerce",
//   "root",
//   "password",
//   {
//     host: "localhost",
//     dialect: "mysql",
//   },
//   {
//     production: {
//       use_env_variable: "DATABASE_URL",
//     },
//   }
// );

module.exports = new Sequelize(
  "mhyjxpkfzqk9o49e",
  "ainovgfiiqin5pmf",
  "bw3naoocbrnnsb9i",
  {
    host: "bqmayq5x95g1sgr9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
  },
  {
    production: {
      use_env_variable: "DATABASE_URL",
    },
  }
);
