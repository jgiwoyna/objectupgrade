var atticus = new Person ("Atticus", "2405", "47000", 3);
var jem = new Person ("Jem", "62347", "63500", 4);
var boo = new Person ("Boo", "11435", "54000", 3);
var scout = new Person ("Scout", "6243", "74750", 5);
var robert = new Person ("Robert", "26835", "66000", 1);
var mayella = new Person ("Mayella", "89068", "35000", 2);

function Person(name, employeeNum, employeeSal, rating) {
  this.name = name;
  this.employeeNum = employeeNum;
  this.employeeSal = employeeSal;
  this.rating = rating;
}

var employees = [atticus, jem, boo, scout, robert, mayella];


 function bonusCalculation(employee){
   var employeeBonus = {};
   var bonus = 0;
   employeeBonus.name = employee.name;
 switch(employee.rating) {
   case 1:
     bonus = 0;
     break;
   case 2:
     bonus = 0;
     break;
   case 3:
     bonus = .04;
     break;
   case 4:
     bonus = .06;
    break;
  case 5:
    bonus = .10;
    break;
  default: return false;
  }
  if (employee.employeeNum.length == 4) {
    bonus += .05;
  }
  if (employee.employeeSal > 65000) {
    bonus -= .01;
  }
  if (bonus > .13) {
    bonus = .13;
  }
  if (bonus < 0) {
    bonus = 0;
  }
  var bonusPercent = bonus * 100;
  employeeBonus.bonusPercent = bonusPercent;
  employeeBonus.totalCompensation = employee.employeeSal * (1 + bonus);
  employeeBonus.bonus = Math.round(employee.employeeSal * bonus);
  return employeeBonus;
  }

var newArray = [];

for (var i = 0; i < employees.length; i++) {
   newArray.push(bonusCalculation(employees[i]));
 }
 console.log(newArray);
