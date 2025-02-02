const pool = require('./config/database');

async function inserirUsuario(nome, email, telefone) {
  const sql = `INSERT INTO usuarios (nome, email, telefone) VALUES (?, ?, ?)`;
  try {
    const [result] = await pool.execute(sql, [nome, email, telefone]);
    console.log(`Usuário inserido com ID: ${result.insertId}`);
    return result.insertId;
  } catch (err) {
    console.error('Erro ao inserir usuário:', err.message);
  }
}

async function inserirPedido(usuario_id, data, valor) {
  const sql = `INSERT INTO pedidos (usuario_id, data, valor) VALUES (?, ?, ?)`;
  try {
    const [result] = await pool.execute(sql, [usuario_id, data, valor]);
    console.log(`Pedido inserido com ID: ${result.insertId}`);
  } catch (err) {
    console.error('Erro ao inserir pedido:', err.message);
  }
}

async function consultarUsuarios() {
  const sql = `SELECT * FROM usuarios`;
  try {
    const [rows] = await pool.execute(sql);
    console.log('Usuários:', rows);
  } catch (err) {
    console.error('Erro ao consultar usuários:', err.message);
  }
}

async function consultarPedidosPorUsuario(usuario_id) {
  const sql = `SELECT * FROM pedidos WHERE usuario_id = ?`;
  try {
    const [rows] = await pool.execute(sql, [usuario_id]);
    console.log(`Pedidos do usuário ${usuario_id}:`, rows);
  } catch (err) {
    console.error('Erro ao consultar pedidos:', err.message);
  }
}

async function atualizarUsuario(id, novoNome, novoEmail, novoTelefone) {
  const sql = `UPDATE usuarios SET nome = ?, email = ?, telefone = ? WHERE id = ?`;
  try {
    const [result] = await pool.execute(sql, [novoNome, novoEmail, novoTelefone, id]);
    console.log(`Usuário com ID ${id} atualizado. Linhas afetadas: ${result.affectedRows}`);
  } catch (err) {
    console.error('Erro ao atualizar usuário:', err.message);
  }
}

async function deletarPedido(id) {
  const sql = `DELETE FROM pedidos WHERE id = ?`;
  try {
    const [result] = await pool.execute(sql, [id]);
    console.log(`Pedido com ID ${id} deletado. Linhas afetadas: ${result.affectedRows}`);
  } catch (err) {
    console.error('Erro ao deletar pedido:', err.message);
  }
}


async function main() {
  const usuarioId = await inserirUsuario('João Silva', 'joao@example.com', '11987654321');

  // O campo data pode ser informado ou deixado para o padrão (CURRENT_TIMESTAMP)
  await inserirPedido(usuarioId, '2025-01-15 10:30:00', 150.75);
  await inserirPedido(usuarioId, '2025-01-16 15:45:00', 320.50);

  await consultarUsuarios();
  await consultarPedidosPorUsuario(usuarioId);

  await atualizarUsuario(usuarioId, 'João A. Silva', 'joao.a.silva@example.com', '11912345678');

  await deletarPedido(1);

  await consultarPedidosPorUsuario(usuarioId);

  await pool.end();
}

main();