angular.module('starter.services', [])

.factory('Task', function() {
  
  var info = {
    tasks: [
      {title: "Do Shopping", added: new Date()}
      , {title: "Buy Mothers Day Gift", added: new Date()}
    ]
  };
  
    //adding new task function
  function addTask(title) {
    info.tasks.push({title: title, added: new Date()});
  }
  
  return {
    info: info
    , addTask: addTask,
       
      //removing a task function
      remove: function(d) {
        info.tasks.splice(info.tasks.indexOf(d), 1);
    }
  };
});

