(function (){
 angular.module('app', ['ngRoute'])
 .config(function($routeProvider){
    $routeProvider
        .when('/',{
            template: '<welcome-page></welcome-page>'
        })
        .when('/app',{
            template: '<todo></todo>'
        })
        .otherwise({
            // redirectTo: '/'
            template: '<h1>That Page Does Not Exist</h1>'
        });
 });

})();