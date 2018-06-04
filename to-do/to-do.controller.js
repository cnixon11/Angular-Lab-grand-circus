(function(){
    angular.module('app')
        .controller('toDoCtrl', function(DataFactory){
            var $ctrl = this;
            $ctrl.toDoList=DataFactory.getData();
            


            

    $ctrl.addMe = function(){
        if($ctrl.newItem) {
    $ctrl.toDoList.push($ctrl.newItem);
        }
    DataFactory.setData($ctrl.toDoList);
        $ctrl.newItem = '';
        // clears the value of what was input
    }
        $ctrl.onKeyDown = function(event){
            console.log(event.key);
            if (event.key ==='Enter') {
                $ctrl.addMe();
            }
        }
    
    });
})();
