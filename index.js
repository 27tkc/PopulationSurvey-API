var app = angular.module("myApp", ["ngRoute"]);

app.factory("myFactory", function ($http) {
  return {
    apiData: function () {
      let display = {};
      $http({
        method: "GET",
        url: "https://datausa.io/api/data?drilldowns=Nation&measures=Population",
      }).then(
        function mySuccess(response) {
          angular.copy(response.data, display);
        },
        function myError(response) {
          display = response.statusText;
        }
      );
      return display;
    },
  };
});

app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/thirteen", {
        templateUrl: "thirteen.html",
        controller: "myController",
      })

      .when("/fourteen", {
        templateUrl: "fourteen.html",
        controller: "myController",
      })
      .when("/fifteen", {
        templateUrl: "fifteen.html",
        controller: "myController",
      })
      .when("/sixteen", {
        templateUrl: "sixteen.html",
        controller: "myController",
      })
      .when("/seventeen", {
        templateUrl: "seventeen.html",
        controller: "myController",
      })
      .when("/eighteen", {
        templateUrl: "eighteen.html",
        controller: "myController",
      })

      .otherwise({ redirectTo: "/thirteen" });
  },
]);

app.controller("myController", function ($scope, myFactory) {
  $scope.data = myFactory.apiData();
});