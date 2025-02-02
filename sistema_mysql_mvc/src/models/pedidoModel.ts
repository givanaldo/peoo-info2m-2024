import pool from '../config/database';

export interface Pedido {
  id?: number;
  usuario_id: number;
  data?: Date;
  valor: number;
}

export async function getPedidosByUsuario(usuario_id: number): Promise<Pedido[]> {
  const [rows] = await pool.execute('SELECT * FROM pedidos WHERE usuario_id = ?', [usuario_id]);
  return rows as Pedido[];
}

export async function createPedido(pedido: Pedido): Promise<number> {
  const { usuario_id, data, valor } = pedido;
  const [result]: any = await pool.execute(
    'INSERT INTO pedidos (usuario_id, data, valor) VALUES (?, ?, ?)',
    [usuario_id, data, valor]
  );
  return result.insertId;
}