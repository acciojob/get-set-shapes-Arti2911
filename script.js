//complete this code
class Rectangle {
	constructor(width,height){
		this._width=width;
		this._height=height;
	}
	get height(){
		return this._height;
	}
	get width(){
		return this._width;
	}
	getArea(){
		let area= this._width * this._height;
		return area;
	}
	
}

class Square extends Rectangle {
	constructor(side){
		super(side, side);
	}
	get getPerimeter(){
		let per=4 * this._width;
		return per;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
