// JavaScript to be added

// var mailingListButton = document.querySelector('#button-yellow');
// var email;


window.onload = function() {
  var mailingListButton = document.getElementById('button-yellow');

  mailingListButton.addEventListener("click", function(e){
    var email = window.prompt("Please Enter Your Email");
    console.log(mailingListButton);

    mailingListButton.innerHTML = "Thanks for your email";
    	
   
  });
    

};
