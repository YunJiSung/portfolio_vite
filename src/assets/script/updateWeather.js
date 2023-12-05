export function updateWeather() {
    const apiKey = '49ed9a83b2db5f0ad7930c320ae90df4'; // 여기에 실제 API 키를 넣으세요.
    const city = 'Seoul'; // 원하는 도시명으로 변경 가능
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temp = Math.round(data.main.temp);
            const weatherDescription = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            document.querySelector('.weather-temp').textContent = `${temp}°C`;
            document.querySelector('.weather-desc').textContent = weatherDescription;
            document.querySelector('.weather-icon').src = iconUrl; // 아이콘 URL을 업데이트합니다.
        })
        .catch(error => console.error('An error occurred:', error));
}
