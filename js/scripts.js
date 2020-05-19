$('.main').click(function () {
    $(this).children('.hide').slideToggle(1200);
    $(this).children('.show').toggle(1500);
  });        

$(".card").hover(function () {
    $(this).children(".card-1").fadeToggle(1000, "linear");
});  

$("button").click(function (ninah) {
    var client = document.getElementById('nameDetail').value;
    alert(' Dear ' + 'customer' + ' your message has been received successfully.')
    ninah.preventDefault();
  });
                   

   falsevf

   