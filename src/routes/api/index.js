import express from 'express';
import competences from '#src/routes/api/competences';
import personnes from '#src/routes/api/personnes';
import projets from '#src/routes/api/projets';
import authentication from '#src/routes/api/authentication';
import authGuard from '#src/middleware/authGuard'

const router = express.Router();

// api/v1/
router.get('/', (req, res) => {
  res.json({
    message: 'API/V1',
  });
});



// api/v1/ping 
router.use('/competences', authGuard.protect, competences);
router.use('/personnes', authGuard.protect, personnes);
router.use('/projets', projets);
router.use('/auth', authentication)


export default router;
