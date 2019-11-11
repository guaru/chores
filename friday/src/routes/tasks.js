import {Router} from 'express';
import {createCommet,findComments,deleteTaskComment,uploadFile,findFiles,download,getFile} from '../controllers/task.controller';
const router =  Router();

router.post('/createComment',createCommet);
router.get('/findComments/:taskId',findComments);
router.delete('/deleteComment/:commentId',deleteTaskComment);
router.post('/upload-file/:id',uploadFile);
router.get('/findFiles/:taskId',findFiles);
router.get('/download/:taskFileId',download);
router.get('/file/:taskFileId',getFile);
export default router;
