import * as angular from 'angular';

export default angular.module("myJsApp", []);

angular.module("myJsApp").component("jsApp", {
    template: "<p>Hello {{'AngularJS'}}</p>",
    controller: function() {
      console.log("jsApp component started");
    }
})
.directive('itemWidget', [function() {
  return{

  link : function(scope, element, attrs){
      debugger;
      console.log(arguments);
      //Add event listener for 'click' event
      element.on('click', function(event) {
      debugger;
              //Update DOM.						
          element.html('Thanks for buying this item.');
          element.css({
          color: 'green'
          });
      });
  }
  }
}]);
declare const window: any;
window.angular = angular;
debugger;