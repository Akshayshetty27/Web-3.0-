// properties of class

class Circle {
  constructor(radious) {
    this.radious = radious;
  }

  area() {
    console.log(3.14 * Math.pow(this.radious, 2));
  }

  circumference() {
    console.log(2 * 3.14 * this.radious);
  }
}

c1 = new Circle(5);
c1.area();
c1.circumference();
