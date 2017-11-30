$(document).ready(function() {

$('#search').keypress(function(e){

        if(e.which == 13){   //Enter key pressed
        	btnFunction();
            
        }
    });
function btnFunction(){
var v=$("#search").val();
		if(v.includes("http")){
			location.href = v;
		}
		else{
       location.href = "http://"+v;
        }
	
}

	$("#bb").click(function(){
		var v=$("#search").val();
		if(v.includes("http")){
			location.href = v;
		}
		else{
       location.href = "http://"+v;
        }
   
	});

$('#password').keyup(function() {
$('#result').html(checkStrength($('#password').val()))
});
function checkStrength(password) {
var strength = 0
if (password.length < 6) {
$('#result').removeClass()
$('#result').addClass('short')
return 'Too short'
}
if (password.length > 7) strength += 1
// If password contains both lower and uppercase characters, increase strength value.
if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
// If it has numbers and characters, increase strength value.
if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
// If it has one special character, increase strength value.
if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
// If it has two special characters, increase strength value.
if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
// Calculated strength value, we can return messages
// If value is less than 2
if (strength < 2) {
$('#result').removeClass()
$('#result').addClass('weak')
return 'Weak'
} else if (strength == 2) {
$('#result').removeClass()
$('#result').addClass('good')
return 'Good'
} else {
$('#result').removeClass()
$('#result').addClass('strong')
return 'Strong'
}
}

$('#button').click(function(){


if($('#result').hasClass('strong')){     //also .attr(class) can be used but needs to compare again
 

var order = {
	username: $('#username').val(),
	password: $('#password').val(),
};
 //alert($('#password').val());
 myFunc();
function myFunc(){
	
		$.ajax({
  type: 'POST',
  url: 'http://rest.learncode.academy/api/ramvai/friends',
  data: order,
  success: function(data) {
    console.log("Friend added!", data); //the new item is returned with an ID
  
var $orders= $('#orders');
 
    $orders.append('<li>username: '+data.username+', password: '+ data.password + '</li>');

  }
});
	

}

}
	else{

		alert("nope");
	}
});
});
