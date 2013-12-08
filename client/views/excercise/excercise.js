if (Meteor.isClient) {
    Meteor.call("getExcerciseData", function(error, results) {
        //console.log(results.content); //results.data should be a JSON object
    });
}

$(document).ready(function() {
	//alert("Lets Excercise")
  //minutes = Session.get("minutes");
  //alert(minutes);
  isExcercisePage = $("div#page-excercise").length > 0;
  if(isExcercisePage) {
    minutes = Session.get("minutes");
    if(!minutes) { console.log("ERROR: Minutes not set"); minutes = 7;}
  	Program.start(minutes, isIndoors());
  	window.paused = false;
  	$("a#btnPause").bind("click", function(e, target) {
  		if(window.paused) {
  			window.paused = false;
  			Program.unpause();
  		}
  		else {
  			window.paused = true;
  			Program.pause();
  		}
  	});
  }
})

var isIndoors = function() {
  var queryString = window.location.search.replace(/^[^\?]+\??/,'');
  var params = parseQuery(queryString);
  return (params && params.type == "inside");
}

var Program = (function(){
	var _minutes;
	var _exc_duration_seconds;
	var _excercises = [];
	var _current_excercise = null;
	var _cycles;
	var _cycles_run;
	var _interval = null;
  var _start = function(minutes, isIndoor) {
		this._minutes = minutes;
		this._exc_duration_seconds = 5;
		this._excercises = (isIndoor) ? INDOOR_EXCERCISES : OUTDOOR_EXCERCISES;
		this._cycles = (this._minutes * 60) / this._exc_duration_seconds;
		this._cycles_run = 0;
		_getExcercise();
  }

  var _continue = function() {
  	this._cycles_run = this._cycles_run + 1;
    console.log("Ran " + this._cycles_run + " of " + this._cycles + " cycles.")
  	if(this._cycles_run >=  this._cycles) { 
  		//Time to stop
  		alert("Alert ur done WoW Good Job")
  	}
  	else {
  		_rest();
  		//_getExcercise();
  	}

  }

  var _rest = function() {
  	var rest_duration = 3;
  	var rest_excercise = {id: "9001", name: "REST"}
  	Excercise.init(rest_duration, rest_excercise, _getExcercise);
  }

  var _getExcercise = function() {
  	var num_excercises = this._excercises.length;
  	var num = Math.floor((Math.random()*num_excercises)+1);
  	var excercise = this._excercises[num - 1];
  	this._current_excercise = Excercise.init(this._exc_duration_seconds, excercise, _continue);
    //_whistle()
  }

  var _pause = function() {
  	this._current_excercise.pause();
  }

  var _unpause = function() {
  	this._current_excercise.unpause();
  }

  var _whistle = function() {
    var snd = new Audio("whistle.mp3"); // buffers automatically when created
    snd.play();
  }

  return {
    start: function(minutes, isIndoor) {
      _start(minutes, isIndoor);
    },
    pause: function() {
    	_pause();
    },
    unpause: function() {
    	_unpause();
    }
  }
})();

var Excercise = (function() {
	var _seconds;
  var _privateVariable = {};
  var _timer_interval = null;
  var _start = function(seconds, excercise, onDone) {
		this._seconds = seconds;
		this._onDone = onDone;
		$("div#title h1").text(excercise.name);
		this._timer_interval = window.setInterval(_tick, 1000);
		return true;
  }

  var _tick = function() {
  	//console.log("tick " + this._seconds);
  	if (this._seconds > 0) {
  		var countdown = $("div#countdown");
  		this._seconds = this._seconds - 1;
  		countdown.text(this._seconds)
  	}
  	else {
  		clearInterval(this._timer_interval);
  		if (this._onDone) {
  			this._onDone();
  		}
  		else {
  			console.log("ERROR: onDone not defined")
  		}
  	}
  	
  }

  var _pause = function() {
  	clearInterval(this._timer_interval)
  }

  var _unpause = function() {
  	this._timer_interval = window.setInterval(_tick, 1000);
  }

  return {
    init: function(seconds, excercise, onDone) {
      _start(seconds, excercise, onDone);
      return this;
      //alert(seconds)
    },
    pause: function() {
    	_pause();
    },
    unpause: function() {
    	_unpause();
    }
  }
})();
