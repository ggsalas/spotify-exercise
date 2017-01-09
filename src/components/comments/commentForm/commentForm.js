import angular from 'angular';
import commentFormComponent from './commentForm.component';

const module = angular
  .module('commentForm', [])
  .component('commentFormComponent', commentFormComponent)
  .name;

export default module;
