import { Router } from 'express';
import user from '../controller/userController.js';

const router = Router();

router.post('/', user.criar);
router.get('/', user.listar);
router.get('/:id', user.buscarPorId);
router.put('/:id', user.atualizar);
router.delete('/:id', user.deletar);

export default router;