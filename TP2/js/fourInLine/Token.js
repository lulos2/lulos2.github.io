export class Token {
    #image;
    #radio;
    #owner;
    #currentX;
    #currentY;
    #ctx;

    constructor (image,radio,owner,x,y,ctx){
        this.#image = image ? new Image() : image;
        this.#radio = radio;
        this.#owner = owner;
        this.#currentX = x;
        this.#currentY = y;
        this.#ctx = ctx;
        if (image) {
            this.#image.src = image;
            this.#image.width = this.#radio;
            this.#image.height = this.#radio;
        }
        console.log(image, this.#image);
    }

    draw(){
        let radius = 30;
        this.#ctx.beginPath();
        this.#ctx.arc(this.#currentX, this.#currentY, radius, 0, 2 * Math.PI);
        this.#ctx.drawImage(this.#image, this.#currentX, this.#currentY, this.#radio, this.#radio);
        console.log(this.#image);
    }
    
    setPosition(x,y){
        this.#currentX = x;
        this.#currentY = y;
    }

    getY(){
        return this.#currentY;
    }

    getX(){
        return this.#currentX;
    }

}