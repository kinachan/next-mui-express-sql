import express from 'express';
import post from './post/router';
const router = express.Router();

router.use('/post', post);

export default router;