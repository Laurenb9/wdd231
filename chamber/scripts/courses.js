// Course List Array (edit `completed` to true for courses you've done)
const courses = [
  { subject: 'WDD', code: 130, title: 'Web Fundamentals', credits: 3, completed: true  },
  { subject: 'WDD', code: 131, title: 'Dynamic Web Fundamentals', credits: 3, completed: true  },
  { subject: 'WDD', code: 231, title: 'Frontend Web Development I', credits: 3, completed: false },
  { subject: 'CSE', code: 110, title: 'Programming Building Blocks', credits: 2, completed: true  },
  { subject: 'CSE', code: 111, title: 'Programming with Functions', credits: 2, completed: false },
  { subject: 'CSE', code: 210, title: 'Programming with Classes', credits: 2, completed: false },
];

// DOM elements
const list = document.getElementById('course-list');
const creditOut = document.getElementById('credit-total');
const chips = Array.from(document.querySelectorAll('.chip'));

// Render helpers
function render(items){
  list.innerHTML = '';
  items.forEach(c => {
    const el = document.createElement('article');
    el.className = `course${c.completed ? ' completed' : ''}`;
    el.innerHTML = `
      <span class="code">${c.subject} ${c.code}</span>
      <span class="title">${c.title}</span>
      <span class="credits" aria-label="Credits">${c.credits}</span>
    `;
    list.appendChild(el);
  });

  const total = items.reduce((sum, c) => sum + (c.credits || 0), 0);
  creditOut.value = total;
  creditOut.textContent = total;
}

function filterCourses(key){
  switch(key){
    case 'wdd': return courses.filter(c => c.subject === 'WDD');
    case 'cse': return courses.filter(c => c.subject === 'CSE');
    default:    return courses.slice();
  }
}

// Init: default to All
render(courses);

// Chip interactions (wayfinding + aria-pressed)
chips.forEach(btn => {
  btn.addEventListener('click', () => {
    chips.forEach(b => { b.classList.remove('is-active'); b.setAttribute('aria-pressed','false'); });
    btn.classList.add('is-active'); btn.setAttribute('aria-pressed','true');
    const key = btn.dataset.filter;
    render(filterCourses(key));
  });
});
