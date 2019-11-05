import {Router} from 'express';
import {findUsers,findStatus} from  '../controllers/project.controller';
const router =  Router();
router.get('/:projectId',findUsers);
router.get('/:projectId/status',findStatus);
export default router;
