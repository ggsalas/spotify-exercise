import angular from 'angular';
import search from './search/search';
import albumDetails from './albumDetails/albumDetails';

const ComponentsModule = angular
  .module('spotifyzier.components', [
    search,
    albumDetails
  ])
  .name;

export default ComponentsModule;
