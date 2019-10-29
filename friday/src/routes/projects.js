import {Router} from 'express';
import {findUsers} from  '../controllers/project.controller';
const router =  Router();
router.get('/:projectId',findUsers);
export default router;
