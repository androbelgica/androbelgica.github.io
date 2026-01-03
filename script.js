// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // Check on load

// Mobile Nav Toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navIcon = navToggle.querySelector('i');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Toggle icon between bars and times
    if (navLinks.classList.contains('active')) {
        navIcon.classList.remove('fa-bars');
        navIcon.classList.add('fa-times');
    } else {
        navIcon.classList.remove('fa-times');
        navIcon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navIcon.classList.remove('fa-times');
        navIcon.classList.add('fa-bars');
    });
});

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// GitHub API Integration
const GITHUB_USERNAME = 'androbelgica';
const reposContainer = document.getElementById('github-repos');

async function fetchRepos() {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
        const repos = await response.json();
        
        if (reposContainer) {
            reposContainer.innerHTML = '';
            
            repos.forEach(repo => {
                if (!repo.fork) { // Only show original projects
                    const card = document.createElement('div');
                    card.className = 'experience-card glass reveal active';
                    card.innerHTML = `
                        <div class="project-card">
                            <div>
                                ${repo.language ? `<span class="repo-lang">${repo.language}</span>` : ''}
                                <h3>${repo.name}</h3>
                                <p>${repo.description || 'No description provided.'}</p>
                            </div>
                            <div>
                                <div class="repo-stats">
                                    <span><i class="far fa-star"></i> ${repo.stargazers_count}</span>
                                    <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                                </div>
                                <a href="${repo.html_url}" target="_blank" class="repo-link">View Repository <i class="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    `;
                    reposContainer.appendChild(card);
                }
            });
        }
    } catch (error) {
        console.error('Error fetching repos:', error);
        if (reposContainer) {
            reposContainer.innerHTML = '<p class="loader">Failed to load projects. Please visit GitHub directly.</p>';
        }
    }
}

fetchRepos();
