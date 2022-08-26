const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const evaluation = sequelize.define(
    "evaluation",
    {
      evaluationid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      participantid:{
        type: DataTypes.INTEGER
      },
      commentaire:{
        type: DataTypes.STRING(50)
      },
      pointfort:{
        type: DataTypes.STRING(50)
      },
      autonomie:{
        type: DataTypes.INTEGER,
      },
      assimulation_et_realistaion:{
        type: DataTypes.INTEGER,
      },
      evt_obj1:{
        type: DataTypes.INTEGER,
      },
      evt_obj2:{
        type: DataTypes.INTEGER,
      },
      evt_obj3:{
        type: DataTypes.INTEGER,
      },
      evt_obj4:{
        type: DataTypes.INTEGER,
      },
      evt_obj5:{
        type: DataTypes.INTEGER,
      },
      evc_obj1:{
        type: DataTypes.INTEGER,
      },
      evc_obj2:{
        type: DataTypes.INTEGER,
      },
      evc_obj3:{
        type: DataTypes.INTEGER,
      },
      evc_obj4:{
        type: DataTypes.INTEGER,
      },
      evc_obj5:{
        type: DataTypes.INTEGER,
      }
    },
    {
      // This needs to be false to deactivate createdAt and updatedAt when sending the query
      timestamps: false,
    }
  );
  evaluation.associate = (models) => {
    evaluation.belongsTo(models.participant,{foreignKey:"participantid"})
  };

  return evaluation;
};
