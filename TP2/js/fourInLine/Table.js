export class Table {
 
    #rowToWin;
    #canvas;
    #ctx;
    #rows;
    #columns;
    #board;

    constructor (rowsToWin,canvas,ctx){
        this.#rowToWin = rowsToWin;
        this.#canvas = canvas;
        this.#ctx = ctx;

    }
    
    draw () {
        let width = this.#canvas.clientWidth;
        let height = this.#canvas.clientHeight;

        this.#ctx.fillRect(0,0,width,height);
    }


}