//everything is saved as String

localStorage.setItem('name', 'zhangsan');
localStorage.setItem('int', 123);
localStorage.setItem('arr', [1,2,3,4]); //type modified , use strigify
localStorage.setItem('arr', JSON.stringify([1,2,3,4])); //better, then parse


//DARK THEME
initTheme()
const btn = document.querySelector('.theme-btn');
const btnClear = document.querySelector('.clear-btn');
btn.addEventListener('click', () => {
    toggleTheme()

});
btnClear.addEventListener('click', () => {
    localStorage.clear();

});
function toggleTheme() {
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark');
    } else {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark');
    }
}
function initTheme(){
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

//Storage event for every tabs in browser
window.addEventListener('storage', (e) => {
    if (e.key === 'theme') {
        initTheme();
    }
});