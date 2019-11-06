import Sequelize from 'sequelize';
import {db} from '../database/database';
import {User} from '../entities/users';

const Task =  db.define('tasks',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    enddate:{
        type : Sequelize.DATE
    },
    name:{
        type:Sequelize.TEXT
    },
    projectId:{
        type:Sequelize.INTEGER
    },
    statusId: {
        type:Sequelize.INTEGER
    },
    owneruserId:{
        type:Sequelize.INTEGER
    },
    devuserId:{
        type : Sequelize.INTEGER
    },
    complements:{
        type:Sequelize.INTEGER
    }
}, {
    freezeTableName:true,
    timestamps:false

});


export default Task;