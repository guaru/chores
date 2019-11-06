import {Router} from 'express';
import {createCommet,findComments,deleteTaskComment} from '../controllers/task.controller';
const router =  Router();

router.post('/createComment',createCommet);
router.get('/findComments/:taskId',findComments);
router.delete('/deleteComment/:commentId',deleteTaskComment);
export default router;
