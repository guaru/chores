import Sequelize from 'sequelize';
import {db} from '../database/database';
import User from './users';
const ProjectUser = db.define('projectusers',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    projectId:{
          type:Sequelize.INTEGER
    },
    userId:{
        type : Sequelize.INTEGER
    }
},
{
    freezeTableName:true,
    timestamps:false

});
ProjectUser.belongsTo(User,{foreingKey:'userId',sourceKey:'id'});
export default ProjectUser;