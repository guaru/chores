import Status from '../entities/status';
import Color from '../entities/colors';
import Task from '../entities/tasks';
import Project from '../entities/projects';
import User from '../entities/users';
export async function findStatusByProject(projectid) {
    const status = await Status.findAll({
       where: {
         projectId : projectid
       },
       order:[
           ['position','ASC'],
           [Task,'id','ASC']
           
       ],
       include: [{
          model:Color
       },{
           model:Task,
           include:[
               {
                   model: User,
                   as:'owneruser'
               },
               {
                model: User,
                as:'devuser'
            }
           ]
       },
       {
        model:Project
        }]
    });
    return status;
 }

 
