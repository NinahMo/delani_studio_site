//business logic
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "KWaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Yaa"];


//user-interface logic
function(getNames){
  var day = document.getElementById("day").value;
  var month = document.getElementByid("month").value;
  var year = document.getElementById("year").value;
  var male = document.getElementById("male").value;
  var female = document.getElementById("female").value;

  if(day <=0 || day>31){
    alert("Invalid input")
  }
  else if(month <=0 || month >12){
    alert("Invalid input")
  }
  if(male.selected == true)
  else if(female.selected == true)
