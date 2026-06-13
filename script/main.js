// Toggle class active
const navbarNav = document.querySelector('.nav');
// Click
document.querySelector('#menu').onclick = () =>  {
    navbarNav.classList.toggle('active');
};

// Close
const menu = document.querySelector('#menu');
document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})