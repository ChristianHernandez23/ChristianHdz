document.getElementById('year').textContent = new Date().getFullYear();

const projects = [
  {
    title: 'MONITOR_SDN',
    desc: 'Monitoring and ML-based congestion detection with Ryu and Jupyter workflows.',
    url: 'https://github.com/ChristianHernandez23/MONITOR_SDN',
    tags: ['Python', 'ML', 'Ryu']
  },
  {
    title: 'Inventario-de-Productos',
    desc: 'CRUD inventory app in Python with Flask and SQLite.',
    url: 'https://github.com/ChristianHernandez23/Inventario-de-Productos',
    tags: ['Python', 'Flask', 'SQLite']
  },
  {
    title: 'Carro_ESP_Vigilancia',
    desc: 'Embedded/C++ exploration for surveillance car.',
    url: 'https://github.com/ChristianHernandez23/Carro_ESP_Vigilancia',
    tags: ['C++', 'Embedded']
  }
];

const grid = document.getElementById('projectGrid');
projects.forEach(p => {
  const col = document.createElement('div');
  col.className = 'col-12 col-md-6 col-lg-4';
  col.innerHTML = `
    <div class="card project-card h-100">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${p.title}</h5>
        <p class="card-text small text-secondary flex-grow-1">${p.desc}</p>
        <div class="mb-2">
          ${p.tags.map(t => `<span class="badge bg-light text-dark border">${t}</span>`).join(' ')}
        </div>
        <a href="${p.url}" class="btn btn-sm btn-outline-primary mt-auto" target="_blank">
          <i class="bi bi-box-arrow-up-right"></i> View
        </a>
      </div>
    </div>
  `;
  grid.appendChild(col);
});
