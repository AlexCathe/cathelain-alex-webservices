import express from 'express';
import projetsController from '#src/controllers/projetsController'
import authGuard from '#src/middleware/authGuard'
const router = express.Router();


// router.get('/',usersController.allUsers);

router.post('/', authGuard.protect, projetsController.createProjet);
router.get('/', projetsController.getAllProjets);
router.get('/:id', authGuard.protect, projetsController.getOneProjetById);
router.put('/:id', authGuard.protect, projetsController.updateProjet);
router.delete('/:id', authGuard.protect, projetsController.deleteProjet);
router.post('/:id/personnes', authGuard.protect, projetsController.addPersonneToProjet);

export default router;