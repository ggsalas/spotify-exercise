import angular from 'angular';
import commentsComponent from './comments.component';
import commentsService from './comments.service';

const module = angular
  .module('comments', [])
  .service('commentsService', commentsService)
  .component('commentsComponent', commentsComponent)
  .name;

export default module;
