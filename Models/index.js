const { Sequelize } = require("sequelize");
const { QueryTypes } = require("sequelize");

const db = {};
const models = [];
require("dotenv").config();


// ---------------------------
// Getting Environment Data 
// ---------------------------
let HOST=process.env.HOST
let HOSTPORT=process.env.HOSTPORT
let BD=process.env.BD
let BDUSER=process.env.BDUSER
let PASSWORD=process.env.PASSWORD


// ---------------------------
// Connecting to the Database 
// ---------------------------

let sequelize = new Sequelize(BD, BDUSER, PASSWORD, {
        dialect: 'mssql',
        host : HOST,
        port: HOSTPORT,
});
sequelize.authenticate().then(() => console.log("Connection to Database established successfully.")).catch((err) => console.error("Unable to connect to the database:", err));



// ----------------------------------------------------------
// Requiring, pushing, associating and exporting all Modules
// ----------------------------------------------------------


sequelize
.sync()
.then((result)=>{
  console.log(result);
})
.catch((err)=>{
  console.log(err)
})


const modules = [
  require("./users"),
  //,require("nouveau model")
  require("./formations"),
  require("./participant"),
  require("./evaluation")
  // Add other modules here ..
];

modules.forEach((mod) => {
  const model = mod(sequelize, Sequelize);
  db[model.name] = model;
  models.push(model); 
});

models.forEach((model) => {
  if (db[model.name].associate) {
    db[model.name].associate(db);
  }
});

module.exports = { ...db, sequelize, Sequelize };

