import * as angular from 'angular';

export default angular.module("myJsApp", []);

angular.module("myJsApp").component("jsApp", {
    template: "<p>Hello {{'AngularJS'}}</p>",
    controller: function() {
      console.log("jsApp component started");
    }
});

window.angular = angular;
debugger;