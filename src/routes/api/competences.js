import express from 'express';
import competencesController from '#src/controllers/competencesController'
const router = express.Router();


// router.get('/',usersController.allUsers);

router.post('/', competencesController.createCompetence);
router.get('/', competencesController.getAllCompetences);
router.get('/:id', competencesController.getOneCompetenceById);
router.put('/:id', competencesController.updateCompetence);
router.delete('/:id', competencesController.deleteCompetence);

export default router;