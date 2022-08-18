const fs = require ('fs');
const { DateTime } = require("luxon");

function createFile(){
    if (!fs.existsSync('./EMLOGS')){
        fs.mkdir("./EMLOGS",(err)=>{
          if (err) {
            throw err ; 
          }
      
        })
        fs.writeFileSync('./EMLOGS/logs'+ DateTime.now().toISODate()+'.txt',function (err){
            if (err){
                return console.log(err);
            }
            console.log("fichier log créé !");
        })
       
      }
      else if (fs.existsSync('/EMLOGS')){
        fs.appendFileSync('./EMLOGS/logs'+ DateTime.now().toISODate()+'.txt',"\n",function (err){
          if (err){
              return console.log(err);
          }
          console.log("fichier log existe déja !");
      })
      }
}
function ecrireLog (route,fonction,methode, req ,erreur) {
fs.appendFileSync("./EMLOGS/logs"+ DateTime.now().toISODate()+".txt","Erreur survenue le  "+DateTime.now().toISODate() + " à "+DateTime.now().toISOTime()+" au niveau du fichier route "+route+" dans la méthode  "+methode+" de la fonction " +fonction+ " avec la requete suivante : "+ req +"  \n Erreur :  "+erreur+" \r \n",function (err){
    if (err){
        return console.log(err);
    }
    
})
fs.close ; 
}
module.exports.createFile = createFile
module.exports.ecrireLog = ecrireLog

