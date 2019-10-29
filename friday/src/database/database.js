import Sequelize from 'sequelize';

export const db = new Sequelize(
    'friday',
    'ufriday',
    '123456',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max:200,
            min:0,
            require:30000,
            idle:10000
        },
        logging:false,
       
    }
);