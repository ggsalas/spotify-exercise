import angular from 'angular';
import searchComponent from './search.component';

const module = angular
  .module('search', [])
  .component('searchComponent', searchComponent)
  .name;

export default module;
