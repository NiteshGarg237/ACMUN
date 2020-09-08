var app = angular.module("myApp", []); 

app.run(function($rootScope) {
    $rootScope.form = false;
    $rootScope.events = [];
});

app.controller("eventCtrl", function($scope,$rootScope) {
   $scope.select = function(event) {
        event.target.classList.toggle("select");
   };

   $scope.register = function() {
       window.scrollTo(700,700);
       document.querySelectorAll('.event-tick').forEach(function(el) {
          if(el.classList.contains('select'))
          {
            $rootScope.events.push(el.parentElement.firstElementChild.textContent);
          }
       });
      console.log($rootScope.events);
       $rootScope.form = true;
   };
});


app.controller('signupCtrl', function($scope) {

});