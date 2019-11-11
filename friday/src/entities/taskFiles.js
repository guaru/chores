import Sequelize from 'sequelize';
import {db} from '../database/database';

const TaskFile =  db.define('taskfiles',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    createdate:
    {
          type:Sequelize.DATE
    },
    pathfile:{
         type:Sequelize.TEXT
    },
    namefile:{
        type:Sequelize.STRING
    },
    taskId:{
          type: Sequelize.INTEGER
    }

},{
    freezeTableName:true,
    timestamps:false

});

export default TaskFile; 