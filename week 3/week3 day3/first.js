// class  in  js

const user = {
  user: "Akshay",
  age: 21,
};

class Rectangle {
  constructor(width, height, color) {
    console.log(" rectangle constructor called ");
    this.width = width;
    this.height = height;
    this.color = color;
  }
  area() {
    console.log("area of the rectangle : ", this.width * this.height);
  }

  paint() {
    console.log(" ", this.color);
  }
  destroy() {
    console.log(`${this} is destroyed`);
  }
}

let r1 = new Rectangle(4, 5, "blue");
r1.area();
r1.paint();

r1.destroy();

let rect = new Rectangle(7, 8);
