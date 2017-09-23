/**
 * Created by rishabhdev on 15/09/17.
 */
var app = angular.module("gitapp",['ui.bootstrap', 'ui.router','angularMoment','daterangepicker','angularMoment','angular-loading-bar']);
app.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

    $stateProvider.state('dashboard', {
        url: '/dashboard',
        templateUrl: 'js/dashboard/dashboard.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/dashboard');


});

app.constant("API_URL","http://104.197.128.152/data/");
