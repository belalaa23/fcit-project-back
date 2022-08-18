const express = require("express");
const app = express();
const fs = require('fs');
var bodyParser = require("body-parser");
const apiRouter = require("./Routes/api");
const HttpError = require("./Util/http-error");
const logger = require("./Util/logger");
const cors=require('cors')

try {
  logger.createFile()

}
catch(error){
console.log("erreur lors de la création du fichier log ", error)
}



// logger.createFile("fares.txt")

// @Sam (2022-04-09): Added support for CORS
// Specified list of allowedOrigins: localhost for testing and the live server IP Adress
// var cors = require('cors'); // 
// var allowedOrigins = ['http://localhost','http://194.163.162.17']; 
// app.use(cors({ origin: function(origin, callback){
//     if(!origin) return callback(null, true);
//     if(allowedOrigins.indexOf(origin) === -1){
//       var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// })); 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

// ---------------------------
// Getting Environment Data
// ---------------------------
let PORT = process.env.PORT;

// Starting Server at specified port
app.listen(PORT, function () {
  console.log("Server running on port", PORT);
});

// console.log("\nFile Contents of file before append:",
//   fs.readFileSync("example_file.txt", "utf8"));
  
// fs.appendFileSync("example_file.txt", " - Geeks For Geeks");
  
// // Get the file contents after the append operation
// console.log("\nFile Contents of file after append:",
//        fs.readFileSync("example_file.txt", "utf8"));
// Main Route
app.use("/", apiRouter);

// Router Expection Handling
app.use((req, res, next) => {
  const error = new HttpError();
  res.status(404).send("Route introuvable!");
  //throw error;
});
