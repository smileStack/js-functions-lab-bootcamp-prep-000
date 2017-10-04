// write your code below!
var string = happyHolidays();
var name = "Joe";
var holiday = "July4th"
var days = 4;

happyHolidaysTo(name);
happyHolidaysTo(name, holiday);
holidayCountdown(days);


function happyHolidays(){
  return "Happy holidays!";
}

function happyHolidaysTo(name){
  return 'Happy holidays' + name + '!';
}

function happyHolidaysTo(name, holiday){
  return 'Happy' + holiday + ',' + name +'!';
}

function holidayCountdown(days){
  return `It's ${days} days until ${holiday}!`;
}
