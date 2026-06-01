let tasks = JSON.parse(localStorage.getItem('taskflow_tasks') || '[]');
let filter = 'all';

function saveTasks() {
  localStorage.setItem('taskflow_tasks', JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (!text) { input.focus(); return; }

  tasks.unshift({
    id: Date.now(),
    text,
    done: false,
    priority: document.getElementById('prioritySelect').value,
    category: document.getElementById('catSelect').value,
    created: new Date().toISOString()
  });

  input.value = '';
  input.focus();
  saveTasks();
  render();
}

function toggleTask(id) {
  const t = tasks.find(t => t.id === id);
  if (t) { t.done = !t.done; saveTasks(); render(); }
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks();
  render();
}

function clearDone() {
  tasks = tasks.filter(t => !t.done);
  saveTasks();
  render();
}

function getCatClass(cat) {
  return { work: 'cat-work', personal: 'cat-personal', health: 'cat-health', other: 'cat-other' }[cat] || 'cat-other';
}

function getPriorityClass(p) {
  return { high: 'priority-high', medium: 'priority-medium', low: 'priority-low' }[p] || 'priority-low';
}

function getPriorityLabel(p) {
  return { high: '● High', medium: '● Medium', low: '● Low' }[p] || '';
}

function render() {
  const total = tasks.length;
  const done = tasks.filter(t => t.done).length;
  const left = total - done;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  document.getElementById('totalCount').textContent = total;
  document.getElementById('doneCount').textContent = done;
  document.getElementById('leftCount').textContent = left;
  document.getElementById('pctLabel').textContent = pct + '%';
  document.getElementById('progressFill').style.width = pct + '%';

  let visible = tasks;
  if (filter === 'active') visible = tasks.filter(t => !t.done);
  if (filter === 'done') visible = tasks.filter(t => t.done);

  const list = document.getElementById('taskList');
  const empty = document.getElementById('emptyState');

  if (visible.length === 0) {
    list.innerHTML = '';
    empty.style.display = 'block';
    empty.querySelector('p').innerHTML = filter === 'done'
      ? 'No completed tasks yet.<br>Check something off!'
      : filter === 'active'
      ? 'No active tasks.<br>You\'re all caught up! 🎉'
      : 'Nothing here yet.<br>Add a task above to get started.';
  } else {
    empty.style.display = 'none';
    list.innerHTML = visible.map(t => `
      <div class="task-item ${t.done ? 'done' : ''}" data-id="${t.id}">
        <button class="task-check" onclick="toggleTask(${t.id})" title="Mark complete">
          ${t.done ? '✓' : ''}
        </button>
        <div class="task-body">
          <div class="task-text">${escHtml(t.text)}</div>
          <div class="task-meta">
            <span class="task-cat ${getCatClass(t.category)}">${t.category}</span>
            <span class="task-priority ${getPriorityClass(t.priority)}">${getPriorityLabel(t.priority)}</span>
          </div>
        </div>
        <button class="task-delete" onclick="deleteTask(${t.id})" title="Delete task">✕</button>
      </div>
    `).join('');
  }
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Date
const now = new Date();
document.getElementById('headerDate').innerHTML =
  now.toLocaleDateString('en-US', { weekday: 'long' }) + '<br>' +
  now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

// Events
document.getElementById('addBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') addTask();
});
document.getElementById('clearDone').addEventListener('click', clearDone);

document.querySelectorAll('.filter-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filter = btn.dataset.filter;
    render();
  });
});

// Seed with sample tasks if empty
if (tasks.length === 0) {
  tasks = [
    { id: 1, text: 'Complete portfolio projects', done: false, priority: 'high', category: 'work' },
    { id: 2, text: 'Learn JavaScript fundamentals', done: false, priority: 'high', category: 'work' },
    { id: 3, text: 'Go for a 30 minute walk', done: true, priority: 'medium', category: 'health' },
    { id: 4, text: 'Buy groceries', done: false, priority: 'low', category: 'personal' },
  ];
  saveTasks();
}

render();