$(document).ready(function(){

var $overlay = $("<div id='overlay'></div>");

$("body").append($overlay);

var $image = $("<img>");
$overlay.append($image);

var $close = $("<img id= 'closeImage'>");

$overlay.append($close);

$("#gallery a").click(function(event){
	event.preventDefault();

	
	var imagesource = $(this).attr("href");
	console.log(imagesource);
	$image.attr("src",imagesource);
	console.log($image);
	$close.attr("src", "images/close.jpg");

	$overlay.show();
	$close.click(function(){
		$($overlay).hide();
	});

});
});