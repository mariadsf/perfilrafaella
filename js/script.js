const toggleTheme = document.getElementById("toggleTheme");
const rootHtmhl = document.documentElement;

//função para alterar tema //
function changeTheme (){
    const currentTheme = rootHtmhl.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtmhl.setAttribute("data-theme", "light"): rootHtmhl.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);