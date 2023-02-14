const toggleSwitch = document.querySelector("input[type='checkbox']");
function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute("data-theme",'dark');
    }else{
        document.documentElement.removeAttribute("data-theme");
    }
}
toggleSwitch.addEventListener("change",switchTheme);