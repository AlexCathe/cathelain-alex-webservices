import express from 'express';
import rolesController from '#src/controllers/rolesControllers';

const router = express.Router();

router.get('/', rolesController.getAllRoles);
export default router;