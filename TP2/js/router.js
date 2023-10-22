window.addEventListener('DOMContentLoaded',function(){changeRoute("logIn")})

document.getElementById("logo").addEventListener("click",()=>{
    fetchFile("home");
    routUrl("home");
});

document.getElementById("loginButton").addEventListener("click",()=>{
    fetchFile("logIn");
    routUrl("logIn");
});


async function fetchFile(ruta){ 
    let promise = await fetch("TP2/html/"+ruta+".html");
    let contenedor = document.getElementById("index");
    contenedor.innerHTML = await promise.text();
    contenedor.append(inyectionJs(ruta));
}

function inyectionJs(route){
    let script = document.createElement("script");
    script.src = "js/"+route+".js";
    script.async = true;
    return script;
}

function routUrl(ruta){
    let currentURL = window.location.href;
    updateBreadcrumbs(ruta);
    ruta = currentURL.includes("/TP2/") ? "/" + ruta : "/TP2/" + ruta;
    history.pushState({page: ruta + ".html"}, "index", ruta);
}

function changeRoute(ruta){
    ruta = ruta.replace("TP2/","");
    fetchFile(ruta);
    routUrl(ruta);
}

window.addEventListener('popstate', function(){
    changeRoute(history.state.page);
    updateBreadcrumbs(history.state.page);

});

document.querySelector('.hamburger-button').addEventListener('click', deployMenu);

function deployMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
window.onclick = function(event) {
  if (!event.target.matches('.hamburger-button')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function updateBreadcrumbs(actualRoute) {
    let breadCrumb = document.getElementById("breadcrumbs");
    let breadcrumbItems = Array.from(breadCrumb.querySelectorAll("li"));
    let index = breadcrumbItems.findIndex((item) => item.textContent === actualRoute);

    if (index === -1) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.innerText = actualRoute;
        li.appendChild(a);
        breadCrumb.appendChild(li);
    } else {
        for (let i = breadcrumbItems.length - 1; i > index; i--) {
            breadCrumb.removeChild(breadcrumbItems[i]);
        }
    }
}