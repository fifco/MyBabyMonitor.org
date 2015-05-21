$(document).ready(function() {
	$('#t--main').waypoint(function() {
		$('header .logo').addClass("active");
		$('.home h1').addClass("active");
	});
	$('#t--thatiswhy').waypoint(function() {
		$('.ordered').addClass("active");
	}, {offset: '50%'});
	$('#t--web').waypoint(function() {
		$('.web img').addClass("active");
	}, {offset: '50%'});
	$('#t--mit').waypoint(function() {
		$('.mit').addClass("active");
	}, {offset: '75%'});
	
	var b = "info";
	var g = "mybabymonitor.org";
	$('.emailgrizly').attr("href","mailto:" + b + "@" + g);
	$('.emailgrizly').html(b + "@" + g);
	
	$('body').css("padding-bottom",$('footer').height());
	
	$('header').localScroll();
});
