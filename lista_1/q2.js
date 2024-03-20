function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function converter() {
    const celsius = document.querySelector("#celsius").value;
    const fahrenheit = celsiusToFahrenheit(celsius);
    document.querySelector("#resultado").innerHTML = 
        `Resultado: ${celsius}&#176; C equivale a ${fahrenheit} F`;
}