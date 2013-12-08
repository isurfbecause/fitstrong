var searchJS = {

    init: function(){

        this.getExercises();

    },

    addEventHandlers: function(){

    },

    getActivity: function(){
        return utilJS.getURLParameter('activity');
    },

    getExercises: function(){

        var url = 'https://service.livestrong.com/service/fitness/exercises/?query=' + this.getActivity();

        url = 'https://service.livestrong.com/service/fitness/exercises/?query=run&jsonp=';

        $.ajax({
          type: "GET",
          url: url,
          dataType: 'jsonp',
          jsonp: false,
          error: function(res) {
            if (res.status === 200) {
                console.log(res);

                res.success( function(data){
                    console.log(data);

                });

            }
            else {
                alert('email fail')
            }
          }
        });

    }


};


(function (){
    'use strict';
    //searchJS.init();
})();