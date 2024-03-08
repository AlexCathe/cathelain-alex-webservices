import express from 'express';
import projetsController from '#src/controllers/projetsController'
import authGuard from '#src/middleware/authGuard'
import roleGuard from '#src/middleware/rbac';
const router = express.Router();


// router.get('/',usersController.allUsers);

router.get('/', projetsController.getAllProjets);
router.post('/', [authGuard.protect, roleGuard.authorizationChecker], projetsController.createProjet);
router.get('/:id', [authGuard.protect, roleGuard.authorizationChecker], projetsController.getOneProjetById);
router.put('/:id', [authGuard.protect, roleGuard.authorizationChecker], projetsController.updateProjet);
router.delete('/:id', [authGuard.protect, roleGuard.authorizationChecker], projetsController.deleteProjet);
router.post('/:id/personnes', [authGuard.protect, roleGuard.authorizationChecker], projetsController.addPersonneToProjet);

export default router;