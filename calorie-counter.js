const STORAGE_KEY = 'nutritrack_data';
const TODAY = new Date().toDateString();

let data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

// Reset if new day
if (data.date !== TODAY) {
  data = { date: TODAY, goal: 2000, log: [] };
  saveData();
}

const quickFoods = [
  { name: 'Banana', icon: '🍌', cals: 89, protein: 1, carbs: 23, fat: 0 },
  { name: 'Egg', icon: '🥚', cals: 72, protein: 6, carbs: 0, fat: 5 },
  { name: 'Rice (1 cup)', icon: '🍚', cals: 206, protein: 4, carbs: 45, fat: 0 },
  { name: 'Coffee (black)', icon: '☕', cals: 5, protein: 0, carbs: 0, fat: 0 },
  { name: 'Chicken breast', icon: '🍗', cals: 165, protein: 31, carbs: 0, fat: 4 },
  { name: 'Apple', icon: '🍎', cals: 95, protein: 0, carbs: 25, fat: 0 },
  { name: 'Bread (1 slice)', icon: '🍞', cals: 80, protein: 3, carbs: 15, fat: 1 },
  { name: 'Milk (1 cup)', icon: '🥛', cals: 149, protein: 8, carbs: 12, fat: 8 },
];

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function addFood() {
  const name = document.getElementById('foodName').value.trim();
  const cals = parseInt(document.getElementById('foodCals').value) || 0;
  const protein = parseInt(document.getElementById('foodProtein').value) || 0;
  const carbs = parseInt(document.getElementById('foodCarbs').value) || 0;
  const fat = parseInt(document.getElementById('foodFat').value) || 0;

  if (!name || cals === 0) {
    document.getElementById('foodName').focus();
    return;
  }

  data.log.push({ id: Date.now(), name, cals, protein, carbs, fat, time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) });
  saveData();

  document.getElementById('foodName').value = '';
  document.getElementById('foodCals').value = '';
  document.getElementById('foodProtein').value = '';
  document.getElementById('foodCarbs').value = '';
  document.getElementById('foodFat').value = '';
  document.getElementById('foodName').focus();

  render();
}

function addQuick(food) {
  data.log.push({ id: Date.now(), name: food.icon + ' ' + food.name, cals: food.cals, protein: food.protein, carbs: food.carbs, fat: food.fat, time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) });
  saveData();
  render();
}

function deleteItem(id) {
  data.log = data.log.filter(i => i.id !== id);
  saveData();
  render();
}

function clearLog() {
  data.log = [];
  saveData();
  render();
}

function setGoal() {
  const val = parseInt(document.getElementById('goalInput').value);
  if (val >= 500 && val <= 5000) {
    data.goal = val;
    saveData();
    render();
    document.getElementById('goalInput').value = '';
  }
}

function render() {
  const total = data.log.reduce((s, i) => s + i.cals, 0);
  const protein = data.log.reduce((s, i) => s + i.protein, 0);
  const carbs = data.log.reduce((s, i) => s + i.carbs, 0);
  const fat = data.log.reduce((s, i) => s + i.fat, 0);
  const goal = data.goal;
  const remaining = goal - total;
  const pct = Math.min(Math.round((total / goal) * 100), 100);
  const over = total > goal;

  document.getElementById('consumedCals').textContent = total;
  document.getElementById('targetLabel').textContent = goal;
  document.getElementById('remainingNum').textContent = Math.abs(remaining);
  document.getElementById('remainingLabel').textContent = over ? 'kcal over' : 'kcal left';
  document.getElementById('goalBarFill').style.width = pct + '%';
  document.getElementById('goalBarFill').className = 'goal-bar-fill' + (over ? ' over' : '');
  document.getElementById('halfGoal').textContent = Math.round(goal / 2);
  document.getElementById('fullGoal').textContent = goal + ' kcal';
  document.getElementById('proteinTotal').textContent = protein;
  document.getElementById('carbsTotal').textContent = carbs;
  document.getElementById('fatTotal').textContent = fat;

  const logList = document.getElementById('logList');
  const logEmpty = document.getElementById('logEmpty');

  if (data.log.length === 0) {
    logList.innerHTML = '';
    logEmpty.style.display = 'block';
  } else {
    logEmpty.style.display = 'none';
    const mealIcons = ['🥗', '🍳', '🥙', '🍱', '🥘', '🍜', '🥪', '🍲'];
    logList.innerHTML = [...data.log].reverse().map(item => `
      <div class="log-item">
        <div class="log-meal-icon">${mealIcons[item.id % mealIcons.length]}</div>
        <div class="log-body">
          <div class="log-name">${escHtml(item.name)}</div>
          <div class="log-meta">
            <span>${item.time}</span>
            ${item.protein ? `<span>P: ${item.protein}g</span>` : ''}
            ${item.carbs ? `<span>C: ${item.carbs}g</span>` : ''}
            ${item.fat ? `<span>F: ${item.fat}g</span>` : ''}
          </div>
        </div>
        <div class="log-cals">${item.cals}</div>
        <button class="log-del" onclick="deleteItem(${item.id})">✕</button>
      </div>
    `).join('');
  }
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Date label
const d = new Date();
document.getElementById('todayLabel').textContent =
  d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }).toUpperCase();

// Quick add buttons
document.getElementById('quickGrid').innerHTML = quickFoods.map((f, i) => `
  <button class="quick-btn" onclick="addQuick(quickFoods[${i}])">${f.icon} ${f.name} · ${f.cals}</button>
`).join('');

// Enter key
document.getElementById('foodCals').addEventListener('keydown', e => {
  if (e.key === 'Enter') addFood();
});

document.getElementById('goalInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') setGoal();
});

render();