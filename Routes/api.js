var express = require("express");
var app = express();
var userRoutes = require("./userRoutes");
var formationRoutes=require("./formationsRoutes");


// -----------------
// Using all Routes 
// -----------------
app.use("/users/", userRoutes);
//app.use("/nouvelleRoute/", nouvelleRoutes);
app.use("/formation",formationRoutes)
// Add other routes here ..


// ---------------------
// Exporting all routes 
// ---------------------
module.exports = app;
