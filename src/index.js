import angular from 'angular';
import uiRouter from 'angular-ui-router';
import indexComponent from './index.component';
import service from './index.service';
import ComponentsModule from './components/components';

angular
  .module('spotifyzier', [uiRouter, ComponentsModule])
  .component('indexComponent', indexComponent)
  .service('indexService', service)
  .config(
    ($stateProvider) => {
      $stateProvider.state('search', {
        url: '/:searchTxt',
        template: '<index-component></index-component>', 
      });
    },
    ($urlRouterProvider) => {
      'ngInject';
      $urlRouterProvider.otherwise('/');
    }
  );
