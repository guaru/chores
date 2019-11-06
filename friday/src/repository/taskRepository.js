import Task from '../entities/tasks';
import User from '../entities/users';
export async function createTask(_task){
    const {id,name,status,project} = _task;
    let task =  Task.create({
          id,
          name,
          statusId:status.id,
          projectId:project.id
    },{
        fields : ['name','statusId','projectId']
    });

    return task;
}



export async function editTask(_task){
    const {id,name,statusId,enddate,owneruserId,devuserId,complements} = _task;
    let task =  Task.update({
        name,
        statusId,
        enddate,
        owneruserId,
        devuserId,
        complements
    },
    {
        where:{id:id}
    });
    return task;
}

export async function findOne(id){
    let task = await Task.findOne({
       where: {
            id
         },
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

    });

    return task;
}