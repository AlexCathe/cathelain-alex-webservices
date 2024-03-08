import express from 'express';
import authenticationController from '#src/controllers/authenticationController'
const router = express.Router();


// router.get('/',usersController.allUsers);

router.post('/login', authenticationController.login);
router.post('/refresh', authenticationController.refreshToken);

export default router;