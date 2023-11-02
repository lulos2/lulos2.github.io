const canvas = document.getElementById('canvasGame');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1920;
const CANVAS_HEIGHT = canvas.height = 800;
import {Token} from'./fourInLine/Token.js';
import {Table} from'./fourInLine/Table.js';


document.addEventListener('DOMContentLoaded', () => {
    let board = new Table(4,canvas,ctx);
    board.draw();
})

document.getElementById("canvasGame").addEventListener("click", (e)=>{
    console.log(canvas.clientWidth);
    let reac = canvas.getBoundingClientRect();
    new Token('/TP2/images/4inline/alien.png', 30, null,e.clientX-reac.left, e.clientY-reac.top,ctx).draw();
    drawCircle(e.clientX-reac.left, e.clientY-reac.top);
});


console.log(ctx)


function drawCircle(x,y){

}
    