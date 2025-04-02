/* code for dynamic header and footer */
function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data);
}

loadComponent("Header", "Header.html");
loadComponent("Footer", "Footer.html");

/*  function to redirection */

function redirectTo(link){
    window.location.href=link
}