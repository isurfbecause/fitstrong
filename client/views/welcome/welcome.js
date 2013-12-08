jQuery(document).ready(function($) {
	var isWelcomePage = $("div#page-welcome").length > 0;
	if(isWelcomePage) {
		document.getElementById('txtMinutes').focus();
		$("a#btnGetStarted").bind("click", function(e, sender) {
			var minutes = $("#txtMinutes").val();
			console.log("Start working out for " + minutes);
			Session.set("minutes", minutes);
			alert(Session.get("minutes"));
			window.location = "/innout"
			//return true;
		});
	}
});