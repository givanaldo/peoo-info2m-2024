import { Request, Response } from 'express';
import * as UsuarioModel from '../models/usuarioModel';

export async function listUsuarios(req: Request, res: Response) {
  try {
    const usuarios = await UsuarioModel.getAllUsuarios();
    res.render('usuarios', { usuarios });
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function showCreateForm(req: Request, res: Response) {
  res.render('usuario-form', { action: '/usuarios/create', usuario: {} });
}

export async function createUsuario(req: Request, res: Response) {
  try {
    const { nome, email, telefone } = req.body;
    await UsuarioModel.createUsuario({ nome, email, telefone });
    res.redirect('/usuarios');
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function showEditForm(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const usuario = await UsuarioModel.getUsuarioById(id);
    if (!usuario) {
      res.status(404).send('Usuário não encontrado'); 
      return;
    }
    res.render('usuario-form', { action: `/usuarios/edit/${id}`, usuario });
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function updateUsuario(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const { nome, email, telefone } = req.body;
    await UsuarioModel.updateUsuario({ id, nome, email, telefone });
    res.redirect('/usuarios');
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function deleteUsuario(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await UsuarioModel.deleteUsuario(id);
    res.redirect('/usuarios');
  } catch (err) {
    res.status(500).send(err);
  }
}