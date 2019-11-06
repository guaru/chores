import {create as createComment,findByTask as findCommentsByTask,deleteComment,findOne as findOneComment} from  '../repository/taskCommentRepository';
import {findOne,editTask} from '../repository/taskRepository';

export async function createCommet(req,res)
{
    try
    {
        let _comment  = req.body;
         _comment =  await createComment(_comment);
         let  comments =  await findCommentsByTask(_comment.taskId);
         updateComplements(_comment.taskId,true);
         res.json(comments);
    }catch(e)
    {   console.log(e);
        res.status(500).json({ error: 'ERROR INTERNO' });
    }
}

export async function findComments(req,res){
    try
    {
        const {taskId} =  req.params;
        let  comments =  await findCommentsByTask(taskId);
        res.json(comments);
    }catch(e)
    {   console.log(e);
        res.status(500).json({ error: 'ERROR INTERNO' });
    }
}


export async function deleteTaskComment(req,res){
    try
    {
        const {commentId} =  req.params;
        const _comment =  await findOneComment(commentId);
        let  comments =  await deleteComment(commentId);
        updateComplements(_comment.taskId,false);
        res.json(comments);
    }catch(e)
    {   console.log(e);
        res.status(500).json({ error: 'ERROR INTERNO' });
    }
}

function updateComplements(taskId,push)
{
    findOne(taskId).then(task=>{
        if(push)
          task.complements +=  1;
         else 
          task.complements -=  1;

        editTask(task).then(data=>{

        });
    });
}