import pool from './config/database';

interface Usuario {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  data_criacao: Date;
}

interface Pedido {
  id: number;
  usuario_id: number;
  data: Date;
  valor: number;
}

async function inserirUsuario(nome: string, email: string, telefone: string): Promise<number | null> {
  const sql = `INSERT INTO usuarios (nome, email, telefone) VALUES (?, ?, ?)`;
  try {
    const [result]: any = await pool.execute(sql, [nome, email, telefone]);
    console.log(`Usuário inserido com ID: ${result.insertId}`);
    return result.insertId;
  } catch (err: any) {
    console.error('Erro ao inserir usuário:', err.message);
    return null;
  }
}

async function inserirPedido(usuario_id: number, data: string, valor: number): Promise<void> {
  const sql = `INSERT INTO pedidos (usuario_id, data, valor) VALUES (?, ?, ?)`;
  try {
    const [result]: any = await pool.execute(sql, [usuario_id, data, valor]);
    console.log(`Pedido inserido com ID: ${result.insertId}`);
  } catch (err: any) {
    console.error('Erro ao inserir pedido:', err.message);
  }
}

async function consultarUsuarios(): Promise<void> {
  const sql = `SELECT * FROM usuarios`;
  try {
    const [rows] = await pool.execute(sql);
    console.log('Usuários:', rows);
  } catch (err: any) {
    console.error('Erro ao consultar usuários:', err.message);
  }
}

async function consultarPedidosPorUsuario(usuario_id: number): Promise<void> {
  const sql = `SELECT * FROM pedidos WHERE usuario_id = ?`;
  try {
    const [rows] = await pool.execute(sql, [usuario_id]);
    console.log(`Pedidos do usuário ${usuario_id}:`, rows);
  } catch (err: any) {
    console.error('Erro ao consultar pedidos:', err.message);
  }
}

async function atualizarUsuario(id: number, novoNome: string, novoEmail: string, novoTelefone: string): Promise<void> {
  const sql = `UPDATE usuarios SET nome = ?, email = ?, telefone = ? WHERE id = ?`;
  try {
    const [result]: any = await pool.execute(sql, [novoNome, novoEmail, novoTelefone, id]);
    console.log(`Usuário com ID ${id} atualizado. Linhas afetadas: ${result.affectedRows}`);
  } catch (err: any) {
    console.error('Erro ao atualizar usuário:', err.message);
  }
}

async function deletarPedido(id: number): Promise<void> {
  const sql = `DELETE FROM pedidos WHERE id = ?`;
  try {
    const [result]: any = await pool.execute(sql, [id]);
    console.log(`Pedido com ID ${id} deletado. Linhas afetadas: ${result.affectedRows}`);
  } catch (err: any) {
    console.error('Erro ao deletar pedido:', err.message);
  }
}


// Exemplo de uso 
async function main(): Promise<void> {

  const usuarioId = await inserirUsuario('Ana Oliveira', 'ana@example.com', '21987654321');
  if (usuarioId === null)
	  return;

  await inserirPedido(usuarioId, '2025-02-01 09:00:00', 250.00);
  await inserirPedido(usuarioId, '2025-02-02 14:30:00', 450.50);

  await consultarUsuarios();
  await consultarPedidosPorUsuario(usuarioId);

  await atualizarUsuario(usuarioId, 'Ana Paula Oliveira', 'ana.paula@example.com', '21912345678');

  await deletarPedido(1);

  await consultarPedidosPorUsuario(usuarioId);

  await pool.end();
}

main();