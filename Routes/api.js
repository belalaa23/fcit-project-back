var express = require("express");
var app = express();
var userRoutes = require("./userRoutes");
var formationRoutes=require("./formationsRoutes");
var participant=require("./participant");
const evaluation = require("./evaluation");

// -----------------
// Using all Routes 
// -----------------
app.use("/users/", userRoutes);
//app.use("/nouvelleRoute/", nouvelleRoutes);
app.use("/formation",formationRoutes)
app.use("/participant",participant)
app.use('/evaluation',evaluation)
// Add other routes here ..


// ---------------------
// Exporting all routes 
// ---------------------
module.exports = app;
