const usuario = {
	nome: "João",
	preferencias: {
		tema: "escuro",
		notificacoes: true
	}
};

const usuarioJSON = JSON.stringify(usuario);

// Armazenando no localStorage do navagador
localStorage.setItem('usuario', usuarioJSON);

// Recuperando e convertendo de volta para um objeto
const usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'));
console.log(usuarioRecuperado.nome);