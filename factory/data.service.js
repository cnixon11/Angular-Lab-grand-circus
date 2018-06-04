(function () {
    angular.module('app')
    

    .factory('DataFactory', function(){
        var todos = ['Grocery shop','Laundry', 'Get gas', 'Vacuum'];

        return {
            setData: function(data){
                todos = data;
            },
            getData: function(){
                return todos;
            }
        }
    });
})();