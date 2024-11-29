import { ItemBiblioteca } from './ItemBiblioteca';
import { Usuario } from './Usuario';

export class Biblioteca {
  private itensDisponiveis: ItemBiblioteca[] = [];
  private usuarios: Usuario[] = [];

  adicionarItem(item: ItemBiblioteca): void {
    this.itensDisponiveis.push(item);
    console.log(`Item adicionado => ${item.exibirInformacoes()}`);
  }

  registrarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
    console.log(`Usuário registrado => ${usuario.nome}`);
  }

  emprestarItem(usuario: Usuario, item: ItemBiblioteca): void {
    console.log(`Item ${item.exibirInformacoes()} emprestado para ${usuario.nome}`);
  }
}