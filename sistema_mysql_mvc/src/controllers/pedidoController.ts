import { Request, Response } from 'express';
import * as PedidoModel from '../models/pedidoModel';
import * as UsuarioModel from '../models/usuarioModel';
import { Pedido } from '../models/pedidoModel';

export async function listPedidos(req: Request, res: Response) {
  try {
    // Obtém a lista de usuários para seleção
    const usuarios = await UsuarioModel.getAllUsuarios();
    let pedidos: Pedido[] = [];
    const selectedUsuarioId = req.query.usuario_id ? parseInt(req.query.usuario_id as string) : null;
    if (selectedUsuarioId) {
      pedidos = await PedidoModel.getPedidosByUsuario(selectedUsuarioId);
    }
    res.render('pedidos', { usuarios, pedidos, selectedUsuarioId });
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function showCreatePedidoForm(req: Request, res: Response) {
  try {
    const usuarios = await UsuarioModel.getAllUsuarios();
    res.render('pedido-form', { usuarios, action: '/pedidos/create', pedido: {} });
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function createPedido(req: Request, res: Response) {
  try {
    const { usuario_id, data, valor } = req.body;
    await PedidoModel.createPedido({ usuario_id: parseInt(usuario_id), data, valor: parseFloat(valor) });
    res.redirect(`/pedidos?usuario_id=${usuario_id}`);
  } catch (err) {
    res.status(500).send(err);
  }
}