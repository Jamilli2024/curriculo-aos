import { Router } from 'express';
import habilidades from '../controller/habilidadesController.js';

const router = Router();

router.post('/', habilidades.criar);
router.get('/', habilidades.listar);
router.get('/:id', habilidades.buscarPorId);
router.put('/:id', habilidades.atualizar);
router.delete('/:id', habilidades.deletar);

export default router;