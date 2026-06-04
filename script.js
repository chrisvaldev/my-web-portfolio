// 1. CHOOSE & RENDER THEME MODE AUTOMATICALLY
const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlElement = document.documentElement;

// Read cached theme parameters or fall back to native system choice
let isDarkMode = localStorage.getItem('theme') === 'dark' || 
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

function applyTheme(dark) {
  if (dark) {
    htmlElement.classList.add('dark');
    themeIcon.className = 'fa-solid fa-sun text-amber-400';
    localStorage.setItem('theme', 'dark');
  } else {
    htmlElement.classList.remove('dark');
    themeIcon.className = 'fa-solid fa-moon text-indigo-600';
    localStorage.setItem('theme', 'light');
  }
}

// Fire theme instantiation adjustments
applyTheme(isDarkMode);

// Handle manual theme click switch state overrides
themeToggleBtn.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  applyTheme(isDarkMode);
});

// 2. COMPACT FRONTEND DATA STORES (Simulating Future Backend Collections)
const technicalSkills = [
  { name: 'JavaScript', icon: 'fa-brands fa-js text-yellow-500' },
  { name: 'TypeScript', icon: 'fa-solid fa-code text-blue-500' },
  { name: 'React', icon: 'fa-brands fa-react text-cyan-400' },
  { name: 'Next.js', icon: 'fa-solid fa-layer-group text-slate-400' },
  { name: 'Node.js', icon: 'fa-brands fa-node-js text-green-500' },
  { name: 'Express.js', icon: 'fa-solid fa-server text-gray-400' },
  { name: 'AWS', icon: 'fa-brands fa-aws text-orange-400' },
  { name: 'Docker', icon: 'fa-brands fa-docker text-blue-400' },
  { name: 'PostgreSQL', icon: 'fa-solid fa-database text-blue-300' },
  { name: 'MongoDB', icon: 'fa-solid fa-leaf text-emerald-500' },
  { name: 'Git', icon: 'fa-brands fa-git-alt text-orange-600' },
  { name: 'Tailwind CSS', icon: 'fa-solid fa-palette text-cyan-500' }
];

const featuredProjects = [
  {
    title: 'DevConnect',
    desc: 'A developer social platform to connect, share knowledge, and grow together.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL']
  },
  {
    title: 'TaskFlow',
    desc: 'A productivity app for teams to manage tasks, projects, and deadlines efficiently.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io']
  },
  {
    title: 'CodeSnippet',
    desc: 'A code snippet manager and organizer with syntax highlighting and tags.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS']
  }
];

// 3. FRONTEND INJECTION LOOPS (Renders components automatically)
function renderSkills() {
  const container = document.getElementById('skillsGrid');
  container.innerHTML = technicalSkills.map(skill => `
    <div class="flex items-center gap-3 p-3 bg-white dark:bg-darkCard border border-lightBorder dark:border-darkBorder rounded-lg text-sm font-medium hover:border-indigo-500/50 transition duration-200">
      <span class="w-6 h-6 bg-slate-100 dark:bg-[#131625] rounded flex items-center justify-center">
        <i class="${skill.icon}"></i>
      </span>
      <span class="text-slate-800 dark:text-slate-300">${skill.name}</span>
    </div>
  `).join('');
}

function renderProjects() {
  const container = document.getElementById('projectsGrid');
  container.innerHTML = featuredProjects.map(proj => `
    <div class="bg-white dark:bg-darkCard border border-lightBorder dark:border-darkBorder rounded-xl overflow-hidden flex flex-col group hover:border-indigo-500/40 transition duration-300 shadow-sm">
      <div class="h-40 bg-slate-200 dark:bg-[#131625] p-4 flex items-center justify-center text-slate-400 text-xs font-mono">
        [Image: ${proj.title}]
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 class="font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition duration-200">${proj.title}</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">${proj.desc}</p>
        </div>
        <div class="flex flex-wrap gap-1.5 pt-2">
          ${proj.tags.map(tag => `<span class="text-[10px] font-semibold bg-slate-100 dark:bg-[#131625] text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// Fire frontend population events
renderSkills();
renderProjects();