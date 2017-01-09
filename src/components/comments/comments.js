import angular from 'angular';
import commentsComponent from './comments.component';
import commentsService from './comments.service';
import commentForm from './commentForm/commentForm';

const module = angular
  .module('comments', [commentForm])
  .service('commentsService', commentsService)
  .component('commentsComponent', commentsComponent)
  .name;

export default module;
