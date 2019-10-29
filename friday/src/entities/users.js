import Sequelize from 'sequelize';
import {db} from '../database/database';
import Task from '../entities/tasks';

const  User =  db.define('users',{
     id:{
         type: Sequelize.INTEGER,
         primaryKey: true
     },
     name : {
         type : Sequelize.STRING
     },
     lastname  :{
         type : Sequelize.STRING
     },
     email : {
         type : Sequelize.STRING
     }
}, {
    freezeTableName:true,
    timestamps:false

});

//User.hasMany(Task,{foreingKey:'owneruserId',sourceKey: 'id',as:'owneruserId'});
Task.belongsTo(User,{foreingKey:'owneruserId',sourceKey: 'id',as:'owneruser'});
//User.hasMany(Task,{foreingKey:'devuserId',sourceKey: 'id',as:'devuserId'});
Task.belongsTo(User,{foreingKey:'devuserId',sourceKey: 'id',as:'devuser'});

export default User;