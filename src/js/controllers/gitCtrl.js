var GitCtrl = function(data, gitApiFactory) {       
    
    var vm = this;
    vm.data = data;

    if(vm.data.repoType === 'github'){
        gitApiFactory.gitHub(data.gitUsername, data.gitRepoName).then(function(gitData){
            console.log(gitData);
            vm.gitData = gitData;
        });
    }
    
};

GitCtrl.resolve = {
    data: function(dataFactory){
        return dataFactory.getData();
    }
}

angular.module('app')
    .controller('GitCtrl', [
    'data',
    'gitApiFactory',
    GitCtrl
]);