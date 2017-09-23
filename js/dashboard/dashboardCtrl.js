/**
 * Created by rishabhdev on 15/09/17.
 */

angular.module("gitapp").controller('dashboardCtrl',function($scope,apiService,API_URL){

    $scope.API_URL = API_URL;
    $scope.bucket = {};

    $scope.loadIssues = function(){
        apiService.getBoundryIssues1($scope.bucket.repoName,true)
            .then(function(res){
                $scope.oldest = res.data.items[0];
                $scope.totalCount  = res.data.total_count;
               return apiService.getBoundryIssues($scope.bucket.repoName,false)
            })
            .then(function(res){
                $scope.recent = res.data[0];
                return  $scope.fetchIssues()

            })
    }
    $scope.fetchIssues = function(){
        return apiService.getIssues({repoName:$scope.bucket.repoName,sortBy:$scope.bucket.singleSelect})
            .then(function(res){
                $scope.issues = res.data;
            })

    }
});
