
import ProjectUser from '../entities/projectUsers';
import User from '../entities/users';

export async function findUsersByProject(projectId) {
    return  ProjectUser.findAll({
       where: {
          projectId
       }
       ,
       include:[
         {
             model:User
         }
       ]
    });
 }
 