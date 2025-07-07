import { Component1 } from './components/Component1/Component1.js';
import { Component2 } from './components/Component2/Component2.js';
import { Component3 } from './components/Component3/Component3.js';
import { Component4 } from './components/Component4/Component4.js';
import DataDisplay from './components/DataDisplay/DataDisplay.js';

const app = document.getElementById('app');

async function renderComponent(componentNumber: number) {
    if (!app) return;
    if (componentNumber === 1) {
        const component1 = new Component1();
        component1.render().then(html => {
            app.innerHTML = html;
            // Slider logic (same as before)
            const slides = app.querySelectorAll('.hero-slide');
            const dots = app.querySelectorAll('.hero-dot');
            const slidesContainer = app.querySelector('#hero-slides') as HTMLElement;
            let current = 0;
            function setSliderMinHeight() {
                let maxHeight = 0;
                slides.forEach(slide => {
                    (slide as HTMLElement).style.display = 'flex';
                    const h = (slide as HTMLElement).offsetHeight;
                    if (h > maxHeight) maxHeight = h;
                    if (!slide.classList.contains('active')) {
                        (slide as HTMLElement).style.display = 'none';
                    }
                });
                slidesContainer.style.minHeight = maxHeight + 'px';
            }
            function showSlide(idx: number) {
                slides.forEach((slide, i) => {
                    (slide as HTMLElement).classList.toggle('active', i === idx);
                    (dots[i] as HTMLElement).style.background = i === idx ? '#0099ff' : '#e0e0e0';
                    (slide as HTMLElement).style.display = i === idx ? 'flex' : 'none';
                });
                current = idx;
                setSliderMinHeight();
            }
            showSlide(0);
            dots.forEach((dot, i) => {
                dot.addEventListener('click', () => {
                    if (i === slides.length - 1 && current === slides.length - 1) {
                        showSlide(0);
                    } else {
                        showSlide(i);
                    }
                });
            });
            dots.forEach((dot, i) => {
                dot.addEventListener('dblclick', () => {
                    showSlide((current + 1) % slides.length);
                });
            });
            setInterval(() => {
                showSlide((current + 1) % slides.length);
            }, 7000);
            setSliderMinHeight();
            window.addEventListener('resize', setSliderMinHeight);
        });
    } else if (componentNumber === 2) {
        const component2 = new Component2();
        if (typeof component2.render === 'function') {
            const result = component2.render();
            if (result instanceof Promise) {
                result.then(html => { app.innerHTML = html; });
            } else {
                app.innerHTML = result;
            }
        }
    } else if (componentNumber === 3) {
        const component3 = new Component3();
        app.innerHTML = component3.render();
    } else if (componentNumber === 4) {
        const component4 = new Component4();
        app.innerHTML = component4.render();
    } else if (componentNumber === 5) {
        // Load DataDisplay component
        const response = await fetch('./src/components/DataDisplay/DataDisplay.html');
        const html = await response.text();
        app.innerHTML = html;
        new DataDisplay();
    }
}

// Initial render
renderComponent(1);

// Nav bar event listeners
const homeBtn = document.getElementById('home-btn');
const zawodnicyBtn = document.getElementById('zawodnicy-btn');
const sekcjaBtn = document.getElementById('sekcja-btn');
const newsyBtn = document.getElementById('newsy-btn');

const navButtons = [homeBtn, zawodnicyBtn, sekcjaBtn, newsyBtn];
function setActiveNav(idx: number) {
    navButtons.forEach((btn, i) => {
        if (btn) btn.classList.toggle('active', i === idx);
    });
}

if (homeBtn) homeBtn.onclick = async () => { setActiveNav(0); await renderComponent(1); };
if (zawodnicyBtn) zawodnicyBtn.onclick = async () => { setActiveNav(1); await renderComponent(2); };
if (sekcjaBtn) sekcjaBtn.onclick = async () => { setActiveNav(2); await renderComponent(3); };
if (newsyBtn) newsyBtn.onclick = async () => { setActiveNav(3); await renderComponent(4); };

// Set initial active nav
setActiveNav(0);