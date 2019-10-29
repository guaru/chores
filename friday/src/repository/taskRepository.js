import Task from '../entities/tasks';

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
    const {id,name,status,project,statusId,enddate,owneruserId,devuserId} = _task;
    let task =  Task.update({
        name,
        statusId,
        enddate,
        owneruserId,
        devuserId
    },
    {
        where:{id:id}
    });
    return task;
}