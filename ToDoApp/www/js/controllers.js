angular.module('starter.controllers', [])

.controller('tasksCtrl', function($scope, Task) {
    
    /*tutorialsplane.com/ionic-get-device-current-date-time/ */
$scope.currDate = new Date();
    
    $scope.info = Task.info;
    
    //deleteing a task function
    $scope.remove = function(d){
      Task.remove(d);
    };
})

.controller('addTaskCtrl', function($scope, Task) {
    
    var info = {
    newTask: ""
 };
  
    //saving new task function
  function addTask() {
    Task.addTask(info.newTask);
    info.newTask = "";
  }
  
  $scope.info = info;
  $scope.addTask = addTask;
})
;