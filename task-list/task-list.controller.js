(function(){
    angular.module('app')
        .controller('taskController', function(DataFactory){
            var $ctrl = this;
           

    $ctrl.delete = function(index) {
        $ctrl.toDoList.splice(index, 1);
        DataFactory.setData($ctrl.toDoList);
    }
    });
})();
