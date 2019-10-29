import Sequelize from 'sequelize';
import {db} from '../database/database';
import Status from  './status';

const Color =   db.define('colors',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    text:{
        type:Sequelize.STRING
    },
    background : {
        type:Sequelize.STRING
    }
}, {
    freezeTableName:true,
    timestamps:false

});

Color.hasMany(Status,{foreingKey:'colorId',sourceKey: 'id'});
Status.belongsTo(Color,{foreingKey:'colorId',sourceKey: 'id'})

export default Color;