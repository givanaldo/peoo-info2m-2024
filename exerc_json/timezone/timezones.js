const url = 'http://worldtimeapi.org/api/timezone';
const timezonesSelect = document.getElementById('timezones');
const resultado = document.getElementById('resultado');

fetch(url)
    .then(response => response.json())
    .then(timezones => {
        timezones.forEach(timezone => {
            const option = document.createElement('option');
            option.value = timezone;
            option.textContent = timezone;
            timezonesSelect.appendChild(option);
        });
    });

timezonesSelect.addEventListener('change', () => {
    const selectedOptions = Array.from(timezonesSelect.selectedOptions);
    selectedOptions.forEach(option => exibir_horarios(option.value));
});

function exibir_horarios(timezone) {
    fetch(`http://worldtimeapi.org/api/timezone/${timezone}`)
        .then(response => response.json())
        .then(data => {
            const dateTimeString = data.datetime;
            const [date, time] = dateTimeString.split('T');
            const [ano, mes, dia] = date.split('-');
            const formattedDate = `${dia}/${mes}/${ano}`;
            const formattedTime = time.split('.')[0];

            const timezoneDiv = document.createElement('div');
            timezoneDiv.classList.add('timezone');
            timezoneDiv.id = timezone;
            timezoneDiv.innerHTML = `<strong>${timezone}:</strong> ${formattedDate} - ${formattedTime} (${data.datetime})`;

            if (!document.getElementById(timezone)) {
                resultado.appendChild(timezoneDiv);
            }
        });
    }
