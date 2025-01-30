//complete this code
class Rectangle {
	constructor(width,height){
		this._width=width;
		this.height=height;
	}
	get getArea(){
		return this._width * this._height;
	}
	
}

class Square extends Rectangle {
	constructor(side){
		this._side=side;
	}
	get getPerimeter(){
		return 4 * this._side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
