async function fetchTimezones() {
    const response = await fetch('https://worldtimeapi.org/api/timezone');
    const timezones = await response.json();
    const select = document.getElementById('timezoneSelect');

    timezones.forEach(timezone => {
        const option = document.createElement('option');
        option.value = timezone;
        option.textContent = timezone;
        select.appendChild(option);
    });
}

async function displayTime() {
    const select = document.getElementById('timezoneSelect');
    const timeDisplay = document.getElementById('timeDisplay');

    const timezone = select.value;
    const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
    const data = await response.json();

    const dateTime = new Date(data.datetime);
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: timezone, // Configurando o fuso horário corretamente
    };
    
    const formattedTime = dateTime.toLocaleString('pt-BR', options);

    const timeParagraph = document.createElement('p');
    timeParagraph.textContent = `${timezone}: ${formattedTime}`;
    timeDisplay.appendChild(timeParagraph);
}

document.getElementById('timezoneSelect').addEventListener('change', displayTime);

fetchTimezones();
