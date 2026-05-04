// =============================================
//   DADOS DAS ATIVIDADES
// =============================================

let TASKS = [
  {
    id: 2,
    priority: 2,
    subject: "Portfólio Estágio Supervisionado",
    title: "Portfólio — Thiago",
    deadline: "2026-05-09",
    deadlineLabel: "09/05/2026",
    note: "Fazer urgente, ainda está no prazo",
    done: false
  },
  {
    id: 27,
    priority: 27,
    subject: "Estágio Supervisionado de Observação e Diagnóstico do Contexto Escolar",
    title: "Portfólio Individual",
    deadline: "2026-05-09",
    deadlineLabel: "09/05/2026",
    note: "Período: 02/02 a 09/05 — entregar urgente",
    done: false
  },
  {
    id: 3,
    priority: 3,
    subject: "Fisiologia Vegetal",
    title: "Fórum Semana 02",
    deadline: "2026-05-10",
    deadlineLabel: "10/05/2026",
    note: "Fazer esta semana",
    done: false
  },
  {
    id: 28,
    priority: 28,
    subject: "Gilberto",
    title: "Envio do PPS2 - O",
    deadline: "2026-05-12",
    deadlineLabel: "12/05/2026, 23:59",
    note: "Nova prioridade 4 — enviar até 23:59",
    done: false
  },
  {
    id: 4,
    priority: 4,
    subject: "Fisiologia Vegetal",
    title: "Atividade Prática",
    deadline: "2026-05-15",
    deadlineLabel: "15/05/2026",
    note: "Preparar logo depois do portfólio",
    done: false
  },
  {
    id: 5,
    priority: 5,
    subject: "Fisiologia Vegetal",
    title: "Fórum Semana 03",
    deadline: "2026-05-17",
    deadlineLabel: "17/05/2026",
    note: "Fazer na semana que vem",
    done: false
  },
  {
    id: 6,
    priority: 6,
    subject: "Fisiologia Vegetal",
    title: "Fórum Semana 04",
    deadline: "2026-05-24",
    deadlineLabel: "24/05/2026",
    note: "Fazer até 24/05",
    done: false
  },
  {
    id: 7,
    priority: 7,
    subject: "Fisiologia Vegetal",
    title: "Atividade de Aprendizagem AA",
    deadline: "2026-05-24",
    deadlineLabel: "24/05/2026",
    note: "Mesmo prazo do fórum da semana 04",
    done: false
  },
  {
    id: 29,
    priority: 29,
    subject: "Epidemiologia — Cleude",
    title: "Avaliação 1 (Av1)",
    deadline: "2026-05-24",
    deadlineLabel: "24/05/2026",
    note: "Prova — Cleude",
    done: false
  },
  {
    id: 8,
    priority: 8,
    subject: "Metodologia da Pesquisa em Ensino de Ciências e Biologia",
    title: "Autoavaliação / Avaliação On-line",
    deadline: "2026-05-25",
    deadlineLabel: "25/05/2026",
    note: "Fazer antes de virar acúmulo",
    done: false
  },
  {
    id: 30,
    priority: 30,
    subject: "Estágio III — Cleude",
    title: "Avaliação 1 (Av1)",
    deadline: "2026-05-25",
    deadlineLabel: "25/05/2026",
    note: "Prova — Cleude",
    done: false
  },
  {
    id: 9,
    priority: 9,
    subject: "Fisiologia Vegetal",
    title: "Seminário",
    deadline: "2026-05-25",
    deadlineLabel: "25/05/2026",
    note: "Entregar junto da semana final",
    done: false
  },
  {
    id: 10,
    priority: 10,
    subject: "Estágio Curricular Supervisionado II",
    title: "Autoavaliação",
    deadline: "2026-05-28",
    deadlineLabel: "28/05/2026",
    note: "Simples, mas não deixar pro fim",
    done: false
  },
  {
    id: 11,
    priority: 11,
    subject: "UCE IV",
    title: "Autoavaliação",
    deadline: "2026-05-28",
    deadlineLabel: "28/05/2026",
    note: "Fazer junto com a autoavaliação do estágio",
    done: false
  },
  {
    id: 12,
    priority: 12,
    subject: "Projeto de Extensão II — Pedagogia / Thiago",
    title: "Recuperação",
    deadline: "2026-05-30",
    deadlineLabel: "Recuperação 23/05 a 30/05",
    note: "Deixar pronto antes do dia 23",
    done: false
  },
  {
    id: 13,
    priority: 13,
    subject: "UCE IV",
    title: "Primeira versão do Projeto",
    deadline: "2026-05-31",
    deadlineLabel: "31/05/2026",
    note: "Trabalho importante de maio",
    done: false
  },
  {
    id: 14,
    priority: 14,
    subject: "Fisiologia Vegetal",
    title: "Autoavaliação",
    deadline: "2026-05-31",
    deadlineLabel: "31/05/2026",
    note: "Fazer no fim do mês, mas não esquecer",
    done: false
  },
  {
    id: 15,
    priority: 15,
    subject: "UCE IV",
    title: "Fórum Mês 02",
    deadline: "2026-05-31",
    deadlineLabel: "31/05/2026",
    note: "Maio inteiro; precisa postar até 31/05",
    done: false
  },
  {
    id: 31,
    priority: 31,
    subject: "Epidemiologia — Cleude",
    title: "MAPA",
    deadline: "2026-05-31",
    deadlineLabel: "31/05/2026",
    note: "MAPA — Cleude",
    done: false
  },
  {
    id: 16,
    priority: 16,
    subject: "EJA",
    title: "Avaliação Substitutiva 1",
    deadline: "2026-06-06",
    deadlineLabel: "02/06 a 06/06",
    note: "Junho",
    done: false
  },
  {
    id: 17,
    priority: 17,
    subject: "EJA",
    title: "Avaliação Substitutiva 2",
    deadline: "2026-06-06",
    deadlineLabel: "02/06 a 06/06",
    note: "Junho",
    done: false
  },
  {
    id: 18,
    priority: 18,
    subject: "Gestão Educacional",
    title: "Avaliação Substitutiva 1",
    deadline: "2026-06-06",
    deadlineLabel: "02/06 a 06/06",
    note: "Junho",
    done: false
  },
  {
    id: 19,
    priority: 19,
    subject: "Gestão Educacional",
    title: "Avaliação Substitutiva 2",
    deadline: "2026-06-06",
    deadlineLabel: "Provavelmente 02/06 a 06/06",
    note: "Conferir no portal",
    done: false
  },
  {
    id: 20,
    priority: 20,
    subject: "Estágio Thiago",
    title: "Recuperação do Portfólio",
    deadline: "2026-06-06",
    deadlineLabel: "30/05 a 06/06",
    note: "Só usar se não entregar até 09/05",
    done: false
  },
  {
    id: 21,
    priority: 21,
    subject: "UCE IV",
    title: "Fórum Mês 03",
    deadline: "2026-06-30",
    deadlineLabel: "30/06/2026",
    note: "Junho",
    done: false
  },
  {
    id: 22,
    priority: 22,
    subject: "UCE IV",
    title: "Fórum Mês 04",
    deadline: "2026-07-31",
    deadlineLabel: "31/07/2026",
    note: "Julho",
    done: false
  },
  {
    id: 23,
    priority: 23,
    subject: "Estágio Curricular Supervisionado II",
    title: "Relatório de Estágio",
    deadline: "2026-08-28",
    deadlineLabel: "28/08/2026",
    note: "Longo prazo, começar em agosto ou antes",
    done: false
  },
  {
    id: 24,
    priority: 24,
    subject: "UCE IV",
    title: "Atividade Prática",
    deadline: "2026-08-29",
    deadlineLabel: "29/08/2026",
    note: "Longo prazo",
    done: false
  },
  {
    id: 25,
    priority: 25,
    subject: "UCE IV",
    title: "Seminário",
    deadline: "2026-08-29",
    deadlineLabel: "29/08/2026",
    note: "Longo prazo",
    done: false
  },
  {
    id: 26,
    priority: 26,
    subject: "UCE IV",
    title: "Versão final do Projeto",
    deadline: "2026-08-31",
    deadlineLabel: "31/08/2026",
    note: "Longo prazo",
    done: false
  }
];

// =============================================
//   STATE
// =============================================

let currentFilter = 'all';
let currentSubject = 'all';
let searchQuery = '';

// Load done state from localStorage
function loadDoneState() {
  try {
    const saved = localStorage.getItem('agenda-done-tasks');
    if (saved) {
      const doneIds = JSON.parse(saved);
      TASKS.forEach(t => {
        if (doneIds.includes(t.id)) t.done = true;
      });
    }
  } catch (e) { /* ignore */ }
}

function saveDoneState() {
  const doneIds = TASKS.filter(t => t.done).map(t => t.id);
  localStorage.setItem('agenda-done-tasks', JSON.stringify(doneIds));
}

// Load deleted state from localStorage
function loadDeletedState() {
  try {
    const saved = localStorage.getItem('agenda-deleted-tasks');
    if (saved) {
      const deletedIds = JSON.parse(saved);
      TASKS = TASKS.filter(t => !deletedIds.includes(t.id));
    }
  } catch (e) { /* ignore */ }
}

function saveDeletedId(taskId) {
  try {
    const saved = localStorage.getItem('agenda-deleted-tasks');
    const deletedIds = saved ? JSON.parse(saved) : [];
    deletedIds.push(taskId);
    localStorage.setItem('agenda-deleted-tasks', JSON.stringify(deletedIds));
  } catch (e) { /* ignore */ }
}

function deleteTask(taskId) {
  const task = TASKS.find(t => t.id === taskId);
  if (!task) return;

  const confirmed = confirm(`Tem certeza que quer excluir?\n\n"${task.subject} — ${task.title}"\n\nEssa ação não pode ser desfeita.`);
  if (!confirmed) return;

  // Animate out
  const cardEl = document.getElementById(`task-${taskId}`);
  if (cardEl) {
    cardEl.classList.add('deleting');
    setTimeout(() => {
      TASKS = TASKS.filter(t => t.id !== taskId);
      saveDeletedId(taskId);
      renderSubjectFilter();
      renderAll();
    }, 400);
  } else {
    TASKS = TASKS.filter(t => t.id !== taskId);
    saveDeletedId(taskId);
    renderSubjectFilter();
    renderAll();
  }
}

// =============================================
//   HELPERS
// =============================================

function getToday() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function getDaysUntil(deadlineStr) {
  const today = getToday();
  const deadline = new Date(deadlineStr + 'T00:00:00');
  const diffMs = deadline - today;
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

function getTaskStatus(task) {
  if (task.done) return 'done';
  const days = getDaysUntil(task.deadline);
  if (days < 0) return 'overdue';
  if (days <= 3) return 'urgent';
  if (days <= 7) return 'thisweek';
  return 'upcoming';
}

function getCountdownText(task) {
  if (task.done) return '✓ Concluída';
  const days = getDaysUntil(task.deadline);
  if (days < 0) {
    const abs = Math.abs(days);
    return `⚠ ${abs} dia${abs !== 1 ? 's' : ''} atrasado`;
  }
  if (days === 0) return '🔥 Hoje!';
  if (days === 1) return '⏰ Amanhã';
  return `${days} dia${days !== 1 ? 's' : ''} restantes`;
}

function getMonthName(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

function getUniqueSubjects() {
  const subjects = new Set();
  TASKS.forEach(t => subjects.add(t.subject));
  return Array.from(subjects).sort();
}

// =============================================
//   RENDERING
// =============================================

function renderStats() {
  let overdue = 0, urgent = 0, thisweek = 0, upcoming = 0, done = 0;
  TASKS.forEach(t => {
    const status = getTaskStatus(t);
    switch (status) {
      case 'overdue': overdue++; break;
      case 'urgent': urgent++; break;
      case 'thisweek': thisweek++; break;
      case 'upcoming': upcoming++; break;
      case 'done': done++; break;
    }
  });

  document.getElementById('countOverdue').textContent = overdue;
  document.getElementById('countUrgent').textContent = urgent;
  document.getElementById('countThisWeek').textContent = thisweek;
  document.getElementById('countUpcoming').textContent = upcoming;
  document.getElementById('countDone').textContent = done;

  // Progress
  const total = TASKS.length;
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;
  document.getElementById('progressPercent').textContent = `${percent}%`;
  document.getElementById('progressBar').style.width = `${percent}%`;

  // Header stats
  const headerStats = document.getElementById('headerStats');
  headerStats.innerHTML = `
    <span class="header-stat-pill">${done}/${total} feitas</span>
    <span class="header-stat-pill">${overdue > 0 ? '🔴 ' + overdue + ' atrasada' + (overdue > 1 ? 's' : '') : '✅ Nenhuma atrasada'}</span>
  `;
}

function renderSubjectFilter() {
  const select = document.getElementById('filterSubject');
  const subjects = getUniqueSubjects();
  // Clear existing options (keep "all")
  select.innerHTML = '<option value="all">Todas as matérias</option>';
  subjects.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = s;
    select.appendChild(opt);
  });
}

function getFilteredTasks() {
  return TASKS.filter(task => {
    // Status filter
    if (currentFilter !== 'all') {
      const status = getTaskStatus(task);
      if (status !== currentFilter) return false;
    }

    // Subject filter
    if (currentSubject !== 'all' && task.subject !== currentSubject) return false;

    // Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const match = task.title.toLowerCase().includes(q) ||
                    task.subject.toLowerCase().includes(q) ||
                    task.note.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });
}

function renderTasks() {
  const container = document.getElementById('tasksContainer');
  const tasks = getFilteredTasks();

  if (tasks.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📭</div>
        <div class="empty-state-text">Nenhuma atividade encontrada com esse filtro</div>
      </div>
    `;
    return;
  }

  let html = '';
  let currentMonth = '';

  tasks.forEach((task, index) => {
    const month = getMonthName(task.deadline);
    if (month !== currentMonth) {
      currentMonth = month;
      html += `
        <div class="month-divider">
          <span class="month-divider-text">📅 ${month}</span>
          <div class="month-divider-line"></div>
        </div>
      `;
    }

    const status = getTaskStatus(task);
    const countdown = getCountdownText(task);
    const completedClass = task.done ? 'completed' : '';

    html += `
      <div class="task-card status-${status} ${completedClass}" style="animation-delay: ${index * 0.05}s" data-id="${task.id}" id="task-${task.id}">
        <div class="task-priority">#${task.priority}</div>
        <div class="task-content">
          <div class="task-subject">${task.subject}</div>
          <div class="task-title">${task.title}</div>
          <div class="task-note">${task.note}</div>
        </div>
        <div class="task-meta">
          <div class="task-deadline">📆 ${task.deadlineLabel}</div>
          <div class="task-countdown">${countdown}</div>
          <div class="task-actions">
            <div class="task-checkbox ${task.done ? 'checked' : ''}" data-task-id="${task.id}" title="Marcar como ${task.done ? 'pendente' : 'concluída'}"></div>
            <div class="task-delete-btn" data-task-id="${task.id}" title="Excluir atividade">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;

  // Attach checkbox listeners
  container.querySelectorAll('.task-checkbox').forEach(cb => {
    cb.addEventListener('click', (e) => {
      e.stopPropagation();
      const taskId = parseInt(cb.dataset.taskId);
      const task = TASKS.find(t => t.id === taskId);
      if (task) {
        task.done = !task.done;
        saveDoneState();
        renderAll();
      }
    });
  });

  // Attach delete listeners
  container.querySelectorAll('.task-delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const taskId = parseInt(btn.dataset.taskId);
      deleteTask(taskId);
    });
  });
}

function renderAll() {
  renderStats();
  renderTasks();
}

// =============================================
//   PARTICLES
// =============================================

function createParticles() {
  const container = document.getElementById('bgParticles');
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
    particle.style.animationDelay = `${Math.random() * 10}s`;
    container.appendChild(particle);
  }
}

// =============================================
//   EVENT LISTENERS
// =============================================

function initEventListeners() {
  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderTasks();
    });
  });

  // Subject filter
  document.getElementById('filterSubject').addEventListener('change', (e) => {
    currentSubject = e.target.value;
    renderTasks();
  });

  // Search
  document.getElementById('searchInput').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderTasks();
  });

  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Stat card click = filter shortcut
  document.getElementById('statOverdue').addEventListener('click', () => setFilter('overdue'));
  document.getElementById('statUrgent').addEventListener('click', () => setFilter('urgent'));
  document.getElementById('statThisWeek').addEventListener('click', () => setFilter('thisweek'));
  document.getElementById('statUpcoming').addEventListener('click', () => setFilter('upcoming'));
  document.getElementById('statDone').addEventListener('click', () => setFilter('done'));
}

function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === filter);
  });
  renderTasks();
  // Scroll to tasks
  document.getElementById('filtersSection').scrollIntoView({ behavior: 'smooth' });
}

// =============================================
//   FOOTER DATE
// =============================================

function updateFooterDate() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  document.getElementById('footerDate').textContent = now.toLocaleDateString('pt-BR', options);
}

// =============================================
//   INIT
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  loadDeletedState();
  loadDoneState();
  createParticles();
  renderSubjectFilter();
  renderAll();
  initEventListeners();
  updateFooterDate();

  // Update countdown every minute
  setInterval(() => {
    renderAll();
    updateFooterDate();
  }, 60000);
});
