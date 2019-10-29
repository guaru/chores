import {findUsersByProject} from '../repository/projectUserRepository';
export async function findUsers(req,res)
{
    console.log(req);
    const {projectId} =  req.params;
    let users  = await findUsersByProject(projectId);
    res.json(users);
}