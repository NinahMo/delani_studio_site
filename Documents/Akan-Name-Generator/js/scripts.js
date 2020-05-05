//bus// Front-end logic
var daysOfTheWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function findAkanNames(){
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var male = document.getElementById("male");
    var female = document.getElementById("female");

    if (day <= 0 || day > 31 ){
        alert("Invalid day!");
    }
     else if (month <= 0 ||  month > 12  || (month == 2 && day >29)){
        alert("Invalid month!")
    }

    var a = Math.floor((14 - month) / 12)
    var y = year - a
    var m = month + 12 * a - 2
    var d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(year / 400) + Math.floor((31 * m )/ 12)) % 7;

    if (male.checked == true){
        alert("You were born on " + daysOfTheWeek[d] +  " and your Akan name is " + maleNames[d]);
        console.log(daysOfTheWeek[d]);
        console.log(maleNames[d]);
    }
    else if (female.checked == true){
        alert("You were born on " + daysOfTheWeek[d] +  " and your Akan name is " + femaleNames[d]);
        console.log(daysOfTheWeek[d]);
        console.log(femaleNames[d]);
    }
     else {
        alert("Select gender")
    }
}

  var d = new Date(Birthday);
  var dayName = days[d.getDay()];
  var Name ="";

  if(Gender == "Male") {
    switch (dayName) {
     case "Sunday" :
      Name = maleNames[0];
      break;
     case "Monday" :
      Name = maleNames[1];
      break;
     case "Tuesday" :
      Name = maleNames[2];
      break;
     case "Wednesday" :
      Name = maleNames[3];
     case "Thursday" :
      Name = maleNames[4];
      break;
     case "Friday" :
      Name = maleNames[5];
      break;
     case "Saturday" :
      Name = maleNames[6];
      break;
      default:
    }
  }
  else {
    switch (dayName) {
     case "Sunday" :
      Name = femaleNames[0];
      break;
     case "Monday" :
      Name = femaleName[1];
      break;
     case "Tuesday" :
      Name = femaleNames[2];
      break;
     case "Wednesday" :
      Name = femaleNames[3];
      break;
     case "Thursday" :
      Name = femaleNames[4];
      break;
     case "Friday" :
      Name = femaleNames[5];
      break;
     case "Saturday" :
      Name = femaleNames[6];
      break;
      default:
    }
  }

  if(male.selected == true){
    alert("You were born on" + days[d] + "and your Akan name is:" + maleNames[d]);
  }
  else if(female.selected == true){
    alert("You were born on" + days[d] + "and your Akan name is:" + femaleNames[d]);
  }
