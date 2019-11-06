import TaskComment from  '../entities/taskComments';

export async  function create(_comment)
{
    const {description,taskId} = _comment;

    return  TaskComment.create({
          description,
          taskId
    },{
        fields : ['description','taskId']
    });
}

export async function findByTask(taskId){
    return TaskComment.findAll({
        where:{ taskId},
        order:[
            ['id','DESC'],
        ],
    });
}

export async function findOne(id){
    return TaskComment.findOne({
        where:{id},
    });
}


export async function deleteComment(id){
  return TaskComment.destroy({
       where:{
            id
       }
  });
}