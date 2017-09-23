/**
 * Created by rishabhdev on 15/09/17.
 */
var app = angular.module("gitapp",['ui.bootstrap', 'ui.router','angularMoment']);
app.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

    $httpProvider.interceptors.push('addToken');

    $stateProvider.state('dashboard', {
        url: '/dashboard',
        templateUrl: 'js/dashboard/dashboard.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/dashboard');


});

app.constant("API_URL","https://api.github.com/")
    .constant("API_TOKEN","03755843f2d5667166ec0c5e6e7d7bfa999f9b9d");
