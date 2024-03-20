function parimpar() {
    const num = document.getElementById("num").value;
    const par_impar = (num%2 === 0) ? "par" : "ímpar";
    document.getElementById("resultado").innerHTML = `O número ${num} é ${par_impar}`;
}