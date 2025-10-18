// This file contains JavaScript for toggling between light and dark themes.

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');
        const newTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
    });
});