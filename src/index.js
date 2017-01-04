import angular from 'angular';
import uiRouter from 'angular-ui-router';
import albumDetails from './albumDetails/albumDetails';
import indexComponent from './index.component';
import service from './index.service';

angular
  .module('spotifyzier', [uiRouter, albumDetails])
  .component('indexComponent', indexComponent)
  .service('indexService', service)
  .config(($urlRouterProvider) => {
    'ngInject';
    $urlRouterProvider.otherwise('/');
  });
