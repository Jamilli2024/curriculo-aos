import { Router } from 'express';
import experiencia from '../controller/experienciaController.js';

const router = Router();

router.post('/', experiencia.criar);
router.get('/', experiencia.listar);
router.get('/:id', experiencia.buscarPorId);
router.put('/:id', experiencia.atualizar);
router.delete('/:id', experiencia.deletar);

export default router;