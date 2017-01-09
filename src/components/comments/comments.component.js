import template from './comments.template.html';
import controller from './comments.controller';

const commentsComponent = {
  controller,
  template,
  bindings: {
    albumId: '<',
    idAlbum: '&',
  }
};

export default commentsComponent;
