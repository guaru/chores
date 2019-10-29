import Sequelize from 'sequelize';
import {db} from '../database/database';
import Task from './tasks';
import Status from './status';

 const  Project = db.define('projects',{
    id : {
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    name: {
        type: Sequelize.TEXT
    },
    priority:{
        type : Sequelize.INTEGER
    },
    description:{
        type: Sequelize.TEXT
    },
    deliverydate:{
         type : Sequelize.DATE
    }
},{
    freezeTableName:true,
    timestamps:false

});

Project.hasMany(Task,{foreingKey:'projectId',sourceKey: 'id'});
Task.belongsTo(Project,{foreingKey:'projectId',sourceKey:'id'});

Project.hasMany(Status,{foreingKey: 'projectId',sourceKey:'id'});
Status.belongsTo(Project,{foreingKey:'projectId',sourceKey:'id'});

export default Project;