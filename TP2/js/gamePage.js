
document.getElementById("canvasGame").addEventListener("click", (e)=>{
    console.log(e);
    const canvas = document.getElementById("canvasGame"); 
    reac = canvas.getBoundingClientRect();
    drawCircle(e.clientX-reac.left, e.clientY-reac.top);
});





function drawCircle(x,y){
    const canvas = document.getElementById("canvasGame");
    const ctx = canvas.getContext("2d");
    let radius = 30;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
    console.log(x,y);
}
    