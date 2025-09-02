class Rectangle{

    constructor(width, length){

        this.width=width;

        this.length=length;
    }

    set width(newWidth){

        if(newWidth > 0){

            this._width=newWidth;
        }else{

            console.log("width value should be greater than 0");
        }
    }

    get width(){

        return this._width;
    }

    set length(newLength){

        if(newLength > 0){

            this._length = newLength;
        }else{

            console.log("The value of the length should be greater than 0");
        }
    }

    get length(){

        return this._length;
    }
}

const rectangle = new Rectangle(3,4);

console.log(rectangle.width);

console.log(rectangle.length);