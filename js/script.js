const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.classList.add('show');
        }, 10);
    } else {
        mobileMenu.classList.remove('show');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 500);
    }
});
