function injectionJs(route){
    let script = document.createElement("script");
    script.src = "js/fourInLine/"+route+".js";
    script.async = true;
    script.type = "module";
    return script;
}


let main = document.querySelector('.container');
main.appendChild(injectionJs('Figure'));
main.appendChild(injectionJs('Circle'));
main.appendChild(injectionJs('helper'));
main.appendChild(injectionJs('Ficha'));
main.appendChild(injectionJs('juego'));
main.appendChild(injectionJs('table'));
main.appendChild(injectionJs('Rect'));
main.appendChild(injectionJs('FiguraCompuesta'));