// Theme handling
const themeButtons = {
    light: document.getElementById('lightTheme'),
    dark: document.getElementById('darkTheme'),
    system: document.getElementById('systemTheme')
};

let currentTheme = localStorage.getItem('theme') || 'system';

function setTheme(theme) {
    const root = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Remove active class from all buttons
    Object.values(themeButtons).forEach(btn => btn.classList.remove('active'));
    
    // Add active class to current theme button
    themeButtons[theme].classList.add('active');
    
    if (theme === 'system') {
        if (prefersDark) {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.setAttribute('data-theme', 'light');
        }
    } else {
        root.setAttribute('data-theme', theme);
    }
    
    localStorage.setItem('theme', theme);
    currentTheme = theme;
}

// Theme button event listeners
themeButtons.light.addEventListener('click', () => setTheme('light'));
themeButtons.dark.addEventListener('click', () => setTheme('dark'));
themeButtons.system.addEventListener('click', () => setTheme('system'));

// Initialize theme
setTheme(currentTheme);

// System theme change detection
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (currentTheme === 'system') {
        setTheme('system');
    }
});

// Smooth scroll function
function scrollToPrograms() {
    document.getElementById('programs').scrollIntoView({ behavior: 'smooth' });
}

// Intersection Observer for fade-in animations
const fadeElements = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 1s forwards';
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => fadeObserver.observe(element));

// Download buttons
document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Here you can add the actual download logic
        alert('Скачивание начнется автоматически...');
    });
});