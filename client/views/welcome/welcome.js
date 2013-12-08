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
<<<<<<< HEAD
		// $("a#btnGetStarted").bind("click", function(e, sender) {
		// 	var minutes = $("#txtMinutes").val();
		// 	console.log("Start working out for " + minutes);
		// 	setCookie("minutes", minutes);
		// 	window.location = "/innout?min=" + minutes;
		// 	//return true;
		// });
=======
		$("a#btnGetStarted").bind("click", function(e, sender) {
			var minutes = $("#txtMinutes").val();
			console.log("Start working out for " + minutes);
			Session.set("minutes", minutes);
			window.location = "/innout"
			//return true;
		});
>>>>>>> 37c230f4d86b6d0a64e57829f663cf5ef34ac05b
	}
});