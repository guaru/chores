import {create as createComment,findByTask as findCommentsByTask,deleteComment,findOne as findOneComment} from  '../repository/taskCommentRepository';
import {create as createFile,findByTask as findFilesByTask,findOne as findOneFile} from '../repository/taskFileRepository';
import {findOne,editTask} from '../repository/taskRepository';
const fs = require('fs');
const path = require('path');
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

/**
 * FILE TASK
 */
export async function uploadFile(req,res){
    try{
        let EDFile = req.files.file;
        const {id} = req.params;
        const pathfile = `./files/${EDFile.name}`;
        const namefile  = EDFile.name;
        EDFile.mv(pathfile,err => {
            if(err) return res.status(500).send({ message : err })      
        });
        let taskfile = await createFile({taskId:id,namefile,pathfile:path.resolve(pathfile)});
        let files  = await findFilesByTask(id);
        updateComplements(id,true);
        return res.status(200).json(files);
    }catch(e){
        return res.status(500).send({ message : 'ERROR INTERNO' });
    }


}

export async function findFiles(req,res){
    try
    {
        const {taskId} =  req.params;
        let  files =  await findFilesByTask(taskId);
        res.status(200).json(files);
    }catch(e)
    {   
        res.status(500).json({ error: 'ERROR INTERNO' });
    }
}

export async function download(req,res){
    const {taskFileId} = req.params;
    let file =  await findOneFile(taskFileId);
    const  _file =  file.pathfile; 
    res.download(_file);
}

export async function getFile(req,res){
    const {taskFileId} = req.params;
    console.log("FILE",taskFileId);
    let file =  await findOneFile(taskFileId);
    const  _file =  file.pathfile; 
    res.sendFile(_file);
    
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