/**
 * Created by rishabhdev on 15/09/17.
 */

angular.module("gitapp").factory('apiService',function($http,API_URL){

    var apiService = {};
    apiService.getIssues = function(filter){

        var url = API_URL+"repos/"+filter.repoName+'/issues';

        console.log(filter);
        if(filter.sortBy){
            url+="?sort="+filter.sortBy
        }
       return  $http({
            method:"GET",
            url:url
        })
    }

    apiService.getBoundryIssues = function (repoName, old) {
        var order;
        if(old){
            order = 'asc';
        }
        else{
          order = 'desc';
        }
        var url = API_URL+"repos/"+repoName+'/issues?page=1&per_page=1&state=open&sort=created-'+order;
        return  $http({
            method:"GET",
            url:url
        })
    }

    apiService.getBoundryIssues1 = function (repoName, old) {
        var order;
        if(old){
            order = 'asc';
        }
        else{
            order = 'desc';
        }
        var url = API_URL+"search/issues?q=state:open+repo:"+encodeURIComponent(repoName)+'&page=1&per_page=1&sort=created&order='+order;
        return  $http({
            method:"GET",
            url:url
        })
    }
    return apiService;
});
