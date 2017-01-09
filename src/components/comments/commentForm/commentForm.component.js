import template from './commentForm.template.html';
import controller from './commentForm.controller';

const commentFormComponent = {
  template,
  controller,
  bindings: {
    formData: '&',
    albumId: '<idAlbum'
  }
};

export default commentFormComponent;
