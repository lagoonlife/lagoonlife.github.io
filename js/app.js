'use strict';

var paypal = window.paypal;

angular.module('app', []);

angular.module('app').controller('AppCtrl', [
  '$http', '$window',
  function ($http) {

    var app = this;

    app.paypalEmail = '';
    app.products = [];

    $http.get('data.json').success(function (response) {
      app.paypalEmail = response.paypalEmail;
      app.products = response.products;
      paypal.minicart.render();
    });

  }
]);