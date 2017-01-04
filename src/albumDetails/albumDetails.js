import angular from 'angular';
import uiRouter from 'angular-ui-router';
import service from './albumDetails.service';
import component from './albumDetails.component';

const module = angular
    .module('spotify.albumDetails', [uiRouter])
    .service('albumDetailsService', service)
    .component('albumDetails', component)
    .config(($stateProvider) => {
        $stateProvider.state('albumDetails', {
            url: '/details/:albumId',
            template: '<album-details></album-details>>'
        });
    })
    .name;

export default module;

