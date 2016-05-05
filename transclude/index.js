angular.module('myApp', []).directive('hero', function () {
    return {
      restrict: 'E',
      transclude: true,
      scope: { name:'@' },
      template: '<div>' +
                  '<div>{{name}}</div><br>' +
                  '<div ng-transclude></div>' +
                '</div>',
    };
  });
