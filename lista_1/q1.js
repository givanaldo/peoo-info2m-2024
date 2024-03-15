function calcularIdade(dataNascimento) {
    let partesData = dataNascimento.split("/");
    let diaNascimento = parseInt(partesData[0]);
    let mesNascimento = parseInt(partesData[1]);
    let anoNascimento = parseInt(partesData[2]);

    let hoje = new Date();
    let anoAtual = hoje.getFullYear();
    let mesAtual = hoje.getMonth() + 1;
    let diaAtual = hoje.getDate();

    let idade = anoAtual - anoNascimento;

    if (mesAtual < mesNascimento || 
       (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }
    return idade;
}

//console.log(calcularIdade("08/06/1980"));

function calcularIdade1() {
    let dataNascimento = document.querySelector("#data").value;
    let partesData = dataNascimento.split("/");
    let diaNascimento = parseInt(partesData[0]);
    let mesNascimento = parseInt(partesData[1]);
    let anoNascimento = parseInt(partesData[2]);

    let hoje = new Date();
    let anoAtual = hoje.getFullYear();
    let mesAtual = hoje.getMonth() + 1;
    let diaAtual = hoje.getDate();

    let idade = anoAtual - anoNascimento;

    if (mesAtual < mesNascimento || 
       (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }
    document.querySelector("#idade").innerHTML = `Idade: ${idade}`;
}

function calcularIdade1() {
    let dataNascimento = document.querySelector("#data").value;
    let partesData = dataNascimento.split("/");
    let diaNascimento = parseInt(partesData[0]);
    let mesNascimento = parseInt(partesData[1]);
    let anoNascimento = parseInt(partesData[2]);

    let hoje = new Date();
    let anoAtual = hoje.getFullYear();
    let mesAtual = hoje.getMonth() + 1;
    let diaAtual = hoje.getDate();

    let idade = anoAtual - anoNascimento;

    if (mesAtual < mesNascimento || 
       (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }
    document.querySelector("#idade").innerHTML = `Idade: ${idade}`;
}