import { Router } from 'express';
import user from '../controller/userController.js';

const router = Router();

router.post('/', user.criar);
router.get('/', user.listar);
router.get('/:id', user.buscarPorId);
router.put('/:id', user.atualizar);
router.delete('/:id', user.deletar);

router.get('/:id/endereco', usuarioController.buscarEndereco);
router.get('/:id/experiencias', usuarioController.buscarExperiencias);
router.get('/:id/habilidades', usuarioController.buscarHabilidades);

router.get('/:id/completo', usuarioController.buscarCompleto);
export default router;