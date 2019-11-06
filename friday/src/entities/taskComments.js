import Sequelize from 'sequelize';
import {db} from '../database/database';

const TaskComment =  db.define('taskcomments',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    createdate:
    {
          type:Sequelize.DATE
    },
    description:{
         type:Sequelize.TEXT
    },
    taskId:{
          type: Sequelize.INTEGER
    }

},{
    freezeTableName:true,
    timestamps:false

});

export default TaskComment; 