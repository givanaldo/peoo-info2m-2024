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
    let dataNascimento = document.querySelector("#data1").value;
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

function calcularIdade2() {
    let dataNascimento = new Date(document.querySelector("#data2").value);
    let diaNascimento = dataNascimento.getDate();
    let mesNascimento = dataNascimento.getMonth() + 1;
    let anoNascimento = dataNascimento.getFullYear();

    let hoje = new Date();
    let diaAtual = hoje.getDate();
    let mesAtual = hoje.getMonth() + 1;
    let anoAtual = hoje.getFullYear();

    let idade = anoAtual - anoNascimento;

    if (mesAtual < mesNascimento || 
       (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }
    document.querySelector("#idade").innerHTML = `Idade: ${idade}`;
}