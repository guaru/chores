import Sequelize from  'sequelize';
import {db} from '../database/database';
import Task from  './tasks';

const Status =  db.define('status',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
         type :Sequelize.STRING,
         
    },
    colorId :  {
         type: Sequelize.INTEGER,
     
    },
    projectId : {
        type : Sequelize.INTEGER,
         name: 'projectId'
    },
    position:{
        type:Sequelize.INTEGER
    }
   
}, {
    freezeTableName:true,
    timestamps:false
});

Status.hasMany(Task,{foreingKey:'statusId',sourceKey: 'id'});
Task.belongsTo(Status,{foreingKey:'statusId',sourceKey: 'id'});

export default Status;