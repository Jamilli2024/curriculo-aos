import { Router } from 'express';
import user from '../controller/userController.js';

const router = Router();

router.post('/', user.criar);
router.get('/', user.listar);
router.get('/:id', user.buscarPorId);
router.put('/:id', user.atualizar);
router.delete('/:id', user.deletar);

router.get('/:id/endereco', user.buscarEndereco);
router.get('/:id/experiencias', user.buscarExperiencias);
router.get('/:id/habilidades', user.buscarHabilidades);

router.get('/:id/completo', user.buscarCompleto);
export default router;