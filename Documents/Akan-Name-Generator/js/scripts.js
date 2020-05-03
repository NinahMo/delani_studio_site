//business logic
$(document).ready(function()){
  $("#Birthday").submit(function(event)){
    event.preventDefault();
    var Birthday=$("input#Date").val();
    var Gender=$("select#Gender").val();

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "KWaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Yaa"];


//user-interface logic
function getNames(){
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementByid("month").value);
  var year = parseInt(document.getElementById("year").value);
  var male = parseInt(document.getElementById("male");
  var female = parseInt(document.getElementById("female");

  if(day <=0 || day >31){
    alert("Invalid input")
  }
  else if(month <=0 || month >12){
    alert("Invalid input")
  }

  var day (d) = (((CC/4) -2*CC-1) +((5*YY/4)) + ((26*(MM+1)/10)) + DD) % 7
  var newDate = newDate(day + "/" + month + "/" + year);
  var d = newDate.getDay()

  var d = new Date(Birthday);
  var dayName = days[d.getDay()];
  var Name ="";

if(Gender == "Male") {
  switch (dayName) {
   case "Sunday" :
    Name = MaleNames[0];
    break;
   case "Monday" :
    Name = MaleNames[1];
    break;
   case "Tuesday" :
    Name = MaleNames[2];
    break;
   case "Wednesday" :
    Name = MaleNames[3];
   case "Thursday" :
    Name = MaleNames[4];
    break;
   case "Friday" :
    Name = MaleNames[5];
    break;
   case "Saturday" :
    Name = MaleNames[6];
    break;
    default:
  }
}
else {
  switch (dayName) {
   case "Sunday" :
    Name = FemaleNames[0];
    break;
   case "Monday" :
    Name = FemaleName[1];
    break;
   Case "Tuesday" :
    Name = FemaleNames[2];
    break;
   case "Wednesday" :
    Name = FemaleNames[3];
    break;
   case "Thursday" :
    Name = FemaleNames[4];
    break;
   case "Friday" :
    Name = FemaleNames[5];
    break;
   case "Saturday" :
    Name = FemaleNames[6];
    break;
    default;
  }
}
  if(male.selected == true){
    alert("You were born on" + days[d] + "and your Akan name is:" + maleNames[d]);
  }
  else if(female.selected == true){
    alert("You were born on" + days[d] + "and your Akan name is:" + femaleNames[d]);
  }
}

 document.getElementById("name").innerHTML = "Your Akan Name is" <strong>"+Name+"</strong> "+" Because you were born on "+dayName";

  });
});
