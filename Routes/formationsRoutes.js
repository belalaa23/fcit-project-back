const express = require("express");
const router = express.Router();
const models = require("../Models/index");
const { QueryTypes, sequelize } = require("sequelize");

// Case 1 : Getting data using the ORM (Model : Users)
router.get("/orm", async (req, res) => {
  let users;
  try {
    await models.Formations.findAll().then((result) => {
      try {
        users = result;
      } catch (error) {
        console.log("Erreur", error); // true
      }
    });
  } catch (err) {
    console.log(err);
    return "Erreur";
  }
  res.send(users);
});

//get user by id using the ORM (Model : Users)

router.get( "/orm/:id" , async (req, res) => {
  try {
    console.log(req.params.id);
    const user= await models.Formations.findOne({ where: { id: req.params.id } });
    res.send(user);
  } catch (err) {
    console.log(err);
    res.send('err');
  } 
});



//inserting  data using the ORM (Model : Users)

router.post("/orm", async (req, res) => {
  
 try {
  await models.Formations.create({ id: req.body.id, done: req.body.done ,title:req.body.title,date:req.body.date,nombreparticipant:req.body.nombreparticipant})
  res.send("ok");
 } catch (err) {
  console.log(err);
  res.send("err")
 }
 
});

//updating data using the ORM (Model : Users)
router.put("/update/:id", async (req, res) => {
  
  try {
   const user=req.body;
   await models.Formations.update({ 
    id:user.id,
    mail : user.mail
    }
     ,{ where:{
        id:req.params.id
      }
     })
   res.send("ok");
  } catch (err) {
   console.log(err);
   res.send("err")
  }
  
 });
 
 // deleting a user using the ORM (Model : Users)
 router.post("/orm", async (req, res) => {
  
  try {
   await models.Formations.create({ id: req.body.id, mail : req.body.mail})
   res.send("ok");
  } catch (err) {
   console.log(err);
   res.send("err")
  }
  
 });
 
 //updating data using the ORM (Model : Users)
 router.delete("/delete/:id", async (req, res) => {
   try {
    await models.Formations.destroy({ 
     where:{
         id:req.params.id
       }
      })
    res.send("ok");
   } catch (err) {
    console.log(err);
    res.send("err")
   }
  });

// Case 2 : Getting data using queries
router.get("/query", async (req, res) => {
  const users = await models.sequelize.query("SELECT * FROM Users", {
    type: QueryTypes.SELECT,
  });
  res.send(users);
});

//insert User query 
router.post("/addUser", async (req, res) => {
  const user=req.body;
  console.log(user);
  const users = await models.sequelize.query(`insert into User value (${user.id},${user.mail});`, {
    
  }).catch(err =>{
    console.log(err)
  });
  res.send(users);
});









module.exports = router;
