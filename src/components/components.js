import angular from 'angular';
import search from './search/search';
import albumDetails from './albumDetails/albumDetails';
import comments from './comments/comments';

const ComponentsModule = angular
  .module('spotifyzier.components', [
    search,
    albumDetails,
    comments
  ])
  .name;

export default ComponentsModule;
