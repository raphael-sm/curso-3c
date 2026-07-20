const botao = document.getElementById("toggle")

botao.addEventListener("click", function(){
    const root = document.documentElement
    const currentScheme = getComputedStyle(root).colorScheme;
  
    if (currentScheme.includes('dark')) {
        root.classList.remove('dark');
        root.classList.add('light');
        root.style.colorScheme = 'light';
    } else {
        root.classList.remove('light');
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
    }
})