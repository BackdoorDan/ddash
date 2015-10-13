var HomeCtrl = function(dataFactory, gitApiFactory, data){
        
    var vm = this;
   
    vm.data = data;
    
    // I feel a little dirty having this in the controller
    // But I dont really want to make the view wait on this data
    if(data.repoType === 'github'){
        gitApiFactory.gitHub(data.gitUsername, data.gitRepoName).then(function(gitData){
            vm.data.git = gitData;
        })
    }
    
    if(data.repoType === 'github'){
        gitApiFactory.ddImages(data.gitUsername, data.gitRepoName).then(function(gitImages){
            vm.data.gitImages = gitImages;
        })
    }
    
};


HomeCtrl.resolve = {
    
    data: function(dataFactory){
        return dataFactory.getData();
    }
    
};


angular.module('app')
    .controller('HomeCtrl', [
    'dataFactory',
    'gitApiFactory',
    'data',
    HomeCtrl
]);