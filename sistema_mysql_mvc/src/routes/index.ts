import { Router } from 'express';
import * as usuarioController from '../controllers/usuarioController';
import * as pedidoController from '../controllers/pedidoController';

const router = Router();

// Rotas de Usuários
router.get('/', usuarioController.listUsuarios);
router.get('/usuarios', usuarioController.listUsuarios);
router.get('/usuarios/create', usuarioController.showCreateForm);
router.post('/usuarios/create', usuarioController.createUsuario);
router.get('/usuarios/edit/:id', usuarioController.showEditForm);
router.post('/usuarios/edit/:id', usuarioController.updateUsuario);
router.get('/usuarios/delete/:id', usuarioController.deleteUsuario);

// Rotas de Pedidos
router.get('/pedidos', pedidoController.listPedidos);
router.get('/pedidos/create', pedidoController.showCreatePedidoForm);
router.post('/pedidos/create', pedidoController.createPedido);

export default router;