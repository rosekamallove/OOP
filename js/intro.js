/* The Procedural Way : */
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

/* The Object Oriented Way */
let employee = {
  /* Props: */
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function (/* No Params because everything is highly related */) {
    return this.baseSalary + this.overtime * this.rate;
  },
};
employee.getWage();
