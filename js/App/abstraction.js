function Circle(radius) {
  this.radius = radius;
  /*
   * We can make certain members private by declaring
   * them as local variable instead of props
   */
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = (factor) => {
    // ...
  };
  this.draw = () => {
    computeOptimumLocation(0.1);
    console.log("draw");
  };
}
const circle = new Circle(10);
circle.draw();
