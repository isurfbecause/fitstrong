Template.welcome.events({
	'click #btnGetStarted': function () {
		var minutes = $("#txtMinutes").val();
		console.log("Start working out for " + minutes);
		setCookie("minutes", minutes);
		window.location = "/innout?min=" + minutes;
  }
});