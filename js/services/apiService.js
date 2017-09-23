/**
 * Created by rishabhdev on 15/09/17.
 */

angular.module("gitapp").factory('apiService',function($http,API_URL,moment){

    var apiService = {};

    apiService.getAdRequests = function(dateRange){
        return $http({
            method:"GET",
            url:API_URL+'adrequests?from='+dateRange.startDate+"&to="+dateRange.endDate
        })
    };
    return apiService;
});
