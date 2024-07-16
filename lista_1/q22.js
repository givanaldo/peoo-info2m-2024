let jogador = 'X';
let jogo = [['', '', ''], ['', '', ''], ['', '', '']];
let gameOver = false;

function marcar(celula, linha, coluna) {
    if (gameOver || jogo[linha][coluna])
        return;

    celula.textContent = jogador;
    jogo[linha][coluna] = jogador;

    if (checarVitoria(jogador)) {
        document.getElementById('resultado').textContent = 'Jogador ' + jogador + ' venceu!';
        gameOver = true;
        return;
    }

    jogador = jogador === 'X' ? 'O' : 'X';

    console.table(jogo);
}

function checarVitoria(jog) {
    for (let i = 0; i < 3; i++) {
        if (jogo[i][0] === jog && jogo[i][1] === jog && jogo[i][2] === jog) return true;
        if (jogo[0][i] === jog && jogo[1][i] === jog && jogo[2][i] === jog) return true;
    }
    if (jogo[0][0] === jog && jogo[1][1] === jog && jogo[2][2] === jog) return true;
    if (jogo[0][2] === jog && jogo[1][1] === jog && jogo[2][0] === jog) return true;
    return false;
}
