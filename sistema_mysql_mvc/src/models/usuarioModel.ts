import pool from '../config/database';

export interface Usuario {
  id?: number;
  nome: string;
  email: string;
  telefone: string;
}

export async function getAllUsuarios(): Promise<Usuario[]> {
  const [rows] = await pool.execute('SELECT * FROM usuarios');
  return rows as Usuario[];
}

export async function getUsuarioById(id: number): Promise<Usuario | null> {
  const [rows] = await pool.execute('SELECT * FROM usuarios WHERE id = ?', [id]);
  const usuarios = rows as Usuario[];
  return usuarios.length > 0 ? usuarios[0] : null;
}

export async function createUsuario(usuario: Usuario): Promise<number> {
  const { nome, email, telefone } = usuario;
  const [result]: any = await pool.execute(
    'INSERT INTO usuarios (nome, email, telefone) VALUES (?, ?, ?)',
    [nome, email, telefone]
  );
  return result.insertId;
}

export async function updateUsuario(usuario: Usuario): Promise<boolean> {
  if (!usuario.id) return false;
  const { id, nome, email, telefone } = usuario;
  const [result]: any = await pool.execute(
    'UPDATE usuarios SET nome = ?, email = ?, telefone = ? WHERE id = ?',
    [nome, email, telefone, id]
  );
  return result.affectedRows > 0;
}

export async function deleteUsuario(id: number): Promise<boolean> {
  const [result]: any = await pool.execute('DELETE FROM usuarios WHERE id = ?', [id]);
  return result.affectedRows > 0;
}