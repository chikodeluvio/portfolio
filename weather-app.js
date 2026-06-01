let apiKey = localStorage.getItem('skycheck_apikey') || '';

if (apiKey) {
  document.getElementById('apiKeyInput').value = '••••••••' + apiKey.slice(-4);
}

function saveApiKey() {
  const val = document.getElementById('apiKeyInput').value.trim();
  if (val && !val.includes('•')) {
    apiKey = val;
    localStorage.setItem('skycheck_apikey', apiKey);
    document.getElementById('apiKeyInput').value = '••••••••' + apiKey.slice(-4);
    showMsg('✓ API key saved!', 'success');
  }
}

function setCity(city) {
  document.getElementById('cityInput').value = city;
  fetchWeather();
}

function showError(msg) {
  const el = document.getElementById('errorMsg');
  el.textContent = msg;
  el.style.display = 'block';
  setTimeout(() => el.style.display = 'none', 4000);
}

function showMsg(msg, type) {
  const el = document.getElementById('errorMsg');
  el.textContent = msg;
  el.style.background = type === 'success' ? 'rgba(100,255,150,0.15)' : 'rgba(255,100,100,0.15)';
  el.style.borderColor = type === 'success' ? 'rgba(100,255,150,0.3)' : 'rgba(255,100,100,0.3)';
  el.style.color = type === 'success' ? '#99ffbb' : '#ff9999';
  el.style.display = 'block';
  setTimeout(() => el.style.display = 'none', 3000);
}

function getWeatherIcon(code, isNight) {
  if (code >= 200 && code < 300) return '⛈️';
  if (code >= 300 && code < 400) return '🌦️';
  if (code >= 500 && code < 600) return code >= 511 ? '🌨️' : '🌧️';
  if (code >= 600 && code < 700) return '❄️';
  if (code >= 700 && code < 800) return '🌫️';
  if (code === 800) return isNight ? '🌙' : '☀️';
  if (code === 801) return isNight ? '🌙' : '🌤️';
  if (code <= 804) return '☁️';
  return '🌡️';
}

function setBodyTheme(code, isNight) {
  document.body.className = '';
  if (isNight) { document.body.classList.add('night'); return; }
  if (code >= 700 || (code >= 801 && code <= 804)) { document.body.classList.add('cloudy'); }
}

async function fetchWeather() {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) { document.getElementById('cityInput').focus(); return; }

  if (!apiKey) {
    showError('⚠ Please save your OpenWeatherMap API key first.');
    return;
  }

  document.getElementById('weatherCard').classList.remove('visible');
  document.getElementById('forecastCard').classList.remove('visible');
  document.getElementById('demoCard').style.display = 'none';
  document.getElementById('loadingState').style.display = 'block';

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
    );

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'City not found');
    }

    const d = await res.json();
    document.getElementById('loadingState').style.display = 'none';

    const isNight = d.dt > d.sys.sunset || d.dt < d.sys.sunrise;
    const icon = getWeatherIcon(d.weather[0].id, isNight);
    setBodyTheme(d.weather[0].id, isNight);

    document.getElementById('wLocation').textContent = d.name;
    document.getElementById('wCountry').textContent = d.sys.country + ' · ' + new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    document.getElementById('wIcon').textContent = icon;
    document.getElementById('wTemp').innerHTML = Math.round(d.main.temp) + '<sup>°C</sup>';
    document.getElementById('wDesc').textContent = d.weather[0].description;
    document.getElementById('wFeels').innerHTML = Math.round(d.main.feels_like) + '<span class="detail-unit">°C</span>';
    document.getElementById('wHumidity').innerHTML = d.main.humidity + '<span class="detail-unit">%</span>';
    document.getElementById('wWind').innerHTML = Math.round(d.wind.speed * 3.6) + '<span class="detail-unit"> km/h</span>';
    document.getElementById('wVis').innerHTML = d.visibility ? (d.visibility / 1000).toFixed(1) + '<span class="detail-unit"> km</span>' : 'N/A';

    document.getElementById('weatherCard').classList.add('visible');

    // Simulated 5-day forecast based on current temp
    const days = ['Today', 'Tomorrow', 'Wed', 'Thu', 'Fri'];
    const baseTemp = Math.round(d.main.temp);
    const forecastIcons = [icon, '🌤️', '🌧️', '⛅', '☀️'];
    document.getElementById('forecastRow').innerHTML = days.map((day, i) => {
      const hi = baseTemp + Math.round(Math.random() * 4 - 1);
      const lo = hi - Math.round(Math.random() * 5 + 3);
      return `
        <div class="forecast-item">
          <div class="forecast-day">${day}</div>
          <div class="forecast-icon">${forecastIcons[i]}</div>
          <div class="forecast-temp">${hi}°</div>
          <div class="forecast-low">${lo}°</div>
        </div>
      `;
    }).join('');

    document.getElementById('forecastCard').classList.add('visible');

  } catch (err) {
    document.getElementById('loadingState').style.display = 'none';
    document.getElementById('demoCard').style.display = 'block';
    showError('⚠ ' + (err.message === 'Failed to fetch' ? 'Network error — check your API key.' : err.message));
  }
}

document.getElementById('cityInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') fetchWeather();
});