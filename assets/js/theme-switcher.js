document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.getElementById('theme-switcher');
    if (!themeSwitcher) return;

    const isLight = window.location.pathname.includes('-light.html');

    themeSwitcher.innerHTML = isLight ? '🌙' : '☀️';
    themeSwitcher.title = isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode';

    themeSwitcher.addEventListener('click', function() {
        const currentPath = window.location.pathname;
        let newPath;

        if (isLight) {
            // Switch from light to dark
            if (currentPath.endsWith('/home-light.html') || currentPath.endsWith('/index-light.html')) {
                newPath = '/home.html';
            } else {
                newPath = currentPath.replace('-light.html', '.html');
            }
        } else {
            // Switch from dark to light
            if (currentPath.endsWith('/home.html') || currentPath === '/') {
                newPath = '/home-light.html';
            } else {
                newPath = currentPath.replace('.html', '-light.html');
            }
        }
        
        window.location.href = newPath;
    });
});
