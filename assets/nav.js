const menuState = document.querySelector('.hamburger-nav-menu');
const navLinks = document.querySelector('.nav-links');

menuState.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active')
            menuState.focus()
        }
    }
})
