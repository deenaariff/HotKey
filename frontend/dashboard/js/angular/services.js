var Services = angular.module('Services',[])

Services.factory('RESTapi', function($scope, $http) {

	var services = function(user_id) {
        var services;
        $http.get('https://localhost:5000/myServices/' + user_id, function(data) {    
            services = data; 
         }       
    }

	var users = {};

	return {
    	getServices : function () {
    		return services;
   		},
   	    getExperience : function () {
    		return experience;
   	    }
   	};
};
