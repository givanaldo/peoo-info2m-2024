"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Livro_1 = require("./Livro");
const Revista_1 = require("./Revista");
const Usuario_1 = require("./Usuario");
const Biblioteca_1 = require("./Biblioteca");
const livro1 = new Livro_1.Livro("O Senhor dos Anéis", 1954, "J.R.R. Tolkien", 1216);
const revista1 = new Revista_1.Revista("National Geographic", 2024, "NG Media", 150);
const usuario1 = new Usuario_1.Usuario("Maria Silva", 1);
const biblioteca = new Biblioteca_1.Biblioteca();
biblioteca.adicionarItem(livro1);
biblioteca.adicionarItem(revista1);
biblioteca.registrarUsuario(usuario1);
usuario1.emprestarItem(livro1);
biblioteca.emprestarItem(usuario1, revista1);
