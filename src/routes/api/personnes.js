import express from 'express';
import personnesController from '#src/controllers/personnesController'

const router = express.Router();

router.post('/', personnesController.createPersonne);
router.get('/', personnesController.getAllPersonnes);
router.get('/:id', personnesController.getOnePersonne);
router.put('/:id', personnesController.updatePersonne);
router.post('/:id/competences', personnesController.setPersonneCompetences);
router.delete('/:id', personnesController.deletePersonne);


export default router;