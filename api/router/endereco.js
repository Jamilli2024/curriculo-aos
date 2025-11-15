import { Router } from 'express';
import { enderecoController } from "../controller/enderecoController.js";

const router = Router();

router.post('/', enderecoController.criar);
router.get('/', enderecoController.listar);
router.get('/:id', enderecoController.buscarPorId);
router.put('/:id', enderecoController.atualizar);
router.delete('/:id', enderecoController.deletar);

export default router;