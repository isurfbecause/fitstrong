Meteor.methods({
    getExcerciseData: function (cb) {
        //this.unblock();
        Meteor.http.call("GET", 
        	"https://service.livestrong.com/service/fitness/exercises/?fitnessId=3236",
        	function(error, results) {
        		//console.log(results)
        		cb(error, results);
        	}
        );
        //return "derp"
    }
});

//"https://graph.facebook.com/carloslorenzocervantes",