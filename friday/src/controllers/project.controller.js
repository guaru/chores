import {findUsersByProject} from '../repository/projectUserRepository';
import { findStatusByProject } from '../repository/statusRepository';

export async function findUsers(req,res)
{
    const {projectId} =  req.params;
    let users  = await findUsersByProject(projectId);
    res.json(users);
}

export async function findStatus(req,res){
    const {projectId} =  req.params;
    console.log('project id',projectId);
    let status  = await findStatusByProject(projectId);
    res.json(status);
}

