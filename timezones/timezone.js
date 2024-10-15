const url = "https://worldtimeapi.org/api/timezone";
const select = document.getElementById('timezones');
const resultado = document.getElementById('resultado');

fetch(url)
.then(response => response.json())
.then(timezones => {
    timezones.forEach(timezone => {
        const option = document.createElement('option');
        option.value = timezone;
        option.textContent = timezone;
        select.appendChild(option);
    });
});

function exibir_fuso() {
    const timezone = document.getElementById('timezones').value;
    const urltimezone = `https://worldtimeapi.org/api/timezone/${timezone}`;
    
    fetch(urltimezone)
        .then(response => response.json())
        .then(fuso => {
            const datetime = fuso.datetime;
            let [data, hora] = datetime.split('T');
            const [ano, mes, dia] = data.split('-');
            data = `${dia}/${mes}/${ano}`;
            hora = hora.split('.')[0];
            resultado.innerHTML += 
               `<br><b>${timezone}</b>: ${data} ${hora} (${datetime})<br>`;
        });
}