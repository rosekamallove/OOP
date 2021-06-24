function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = () => {
    return defaultLocation;
  };

  this.draw = () => {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: () => {
      return defaultLocation;
    },
    set: (value) => {
      if (!value.x || !value.y) throw new Error("Invalid location.");
      defaultLocation = value;
    },
  });
}
const circle = new Circle(10);
console.log(circle.getDefaultLocation());
console.log(circle.defaultLocation);
circle.draw();
