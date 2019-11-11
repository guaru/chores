import TaskFile from  '../entities/taskFiles';

export async  function create(_file)
{
    const {pathfile,namefile,taskId} = _file;

    return  TaskFile.create({
          pathfile,
          namefile,
          taskId
    },{
        fields : ['pathfile','namefile','taskId']
    });
}

export async function findByTask(taskId){
    return TaskFile.findAll({
        where:{ taskId},
        order:[
            ['id','DESC'],
        ],
    });
}

export async function findOne(id){
    return TaskFile.findOne({
        where:{id},
    });
}


export async function deleteTask(id){
  return TaskFile.destroy({
       where:{
            id
       }
  });
}