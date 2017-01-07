import angular from 'angular';
import uiRouter from 'angular-ui-router';
import indexComponent from './index.component';
import service from './index.service';
import ComponentsModule from './components/components';

angular
  .module('spotifyzier', [uiRouter, ComponentsModule])
  .component('indexComponent', indexComponent)
  .service('indexService', service)
  .config(($urlRouterProvider) => {
    'ngInject';
    $urlRouterProvider.otherwise('/');
  });
