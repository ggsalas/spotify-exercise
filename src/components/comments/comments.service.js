class commentsService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  getComments(albumId) {
    return this.$http.get(`/comments/${albumId}`);
  }

  addComment(formData) {
    return this.$http.post('/comments', {formData});
  }
}

export default commentsService;


