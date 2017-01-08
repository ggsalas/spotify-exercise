class AlbumDetailsService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  getAlbumById(albumId) {
    return this.$http.get(`/album/${albumId}`);
  }
}

export default AlbumDetailsService;
