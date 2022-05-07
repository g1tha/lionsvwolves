const styleSheet = document.getElementById('stylesheet');
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.nav-toggle');
const navBurger = document.querySelector('.bi-list');
const navClose = document.querySelector('.bi-x');
const loginLink = document.querySelector('.login-link');
const loginText = loginLink.querySelector('.login-text');
const arrowRight = loginLink.querySelector('.bi-box-arrow-in-right');
const arrowLeft = loginLink.querySelector('.bi-box-arrow-left');
const themeLink =document.querySelector('.theme-link');
const lightIcon = themeLink.querySelector('.bi-sun-fill');
const darkIcon = themeLink.querySelector('.bi-moon-fill');
const loginBtn = document.querySelector('.btn-login');
const loginLbl = document.querySelector('.login-lbl');
const themeSwitch = document.querySelector('.theme-switch');
const themeLbl = document.querySelector('.theme-lbl');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
        navBurger.setAttribute('data-visible', 'false');
        navClose.setAttribute('data-visible', 'true');
    } else {
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
        navBurger.setAttribute('data-visible', 'true');
        navClose.setAttribute('data-visible', 'false');
    }
})

loginLink.addEventListener('click', loginFunc);
if (loginBtn !== null) {
    loginBtn.addEventListener('click', loginFunc);
}

function loginFunc() {
    const visibility = arrowRight.getAttribute('data-visible');
    if (visibility === 'false') {
        arrowLeft.setAttribute('data-visible', 'false');
        arrowRight.setAttribute('data-visible', 'true');
        loginText.textContent = "Log in";
        if (loginBtn !== null) {
            loginBtn.textContent = "Login";
            loginLbl.textContent = "Log in";
        }
        
    } else {
        arrowLeft.setAttribute('data-visible', 'true');
        arrowRight.setAttribute('data-visible', 'false');
        loginText.textContent = "Log out";
        if (loginBtn !== null) {
            loginBtn.textContent = "Logout";
            loginLbl.textContent = "Log out";
        }
    }
}

let lightMode = localStorage.getItem('lightMode');
themeLink.addEventListener('click', changeTheme);
if (themeSwitch !== null){
    themeSwitch.addEventListener('click', changeTheme);
}


if (lightMode === 'enabled') {
    enableLightMode();
} else {
    disableLightMode();
}

function changeTheme() {
    if (lightMode === 'enabled') {
        disableLightMode();
    } else {
        enableLightMode();
    }
}

function enableLightMode() {
    darkIcon.setAttribute('data-visible', 'true');
    lightIcon.setAttribute('data-visible', 'false');
    localStorage.setItem('lightMode', 'enabled');
    lightMode = localStorage.getItem('lightMode');
    styleSheet.setAttribute('href', 'styles-light.css');
    if (themeSwitch !== null) {
        themeLbl.textContent = "Light theme on";
        themeSwitch.checked = true;
    }
}

function disableLightMode() {
    darkIcon.setAttribute('data-visible', 'false');
    lightIcon.setAttribute('data-visible', 'true');
    localStorage.setItem('lightMode', null);
    lightMode = localStorage.getItem('lightMode');
    styleSheet.setAttribute('href', 'styles.css');;
    if (themeSwitch !== null) {
        themeLbl.textContent = "Light theme off";
        themeSwitch.checked = false;
    } 
}