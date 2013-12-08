Template.welcome.events({
	'click #btnGetStarted': function () {
		var minutes = $("#txtMinutes").val();
		console.log("Start working out for " + minutes);
		setCookie("minutes", minutes);
		window.location = "/innout?min=" + minutes;
  }
});

jQuery(document).ready(function($) {
	var isWelcomePage = $("div#page-welcome").length > 0;
	if(isWelcomePage) {
		document.getElementById('txtMinutes').focus();
		// $("a#btnGetStarted").bind("click", function(e, sender) {
		// 	var minutes = $("#txtMinutes").val();
		// 	console.log("Start working out for " + minutes);
		// 	setCookie("minutes", minutes);
		// 	window.location = "/innout?min=" + minutes;
		// 	//return true;
		// });
	}
});