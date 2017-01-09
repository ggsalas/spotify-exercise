class AlbumDetailsController {
  constructor(albumDetailsService, $state, $stateParams) {
    'ngInject';
    this.albumDetailsService = albumDetailsService;
    this.state = $state;
    this.albumId = $stateParams.albumId;
    this.album = '';
  }

  $onInit() {
    this.albumDetailsService.getAlbumById(this.albumId)
    .then((res) => this.album = res.data);
  }

  goToSearch($event) {
    if($event.query) {
      this.state.go('search', {searchTxt: $event.query});
    }
  }

  goBackToSearch() {
    //TODO get previus state if exist
    this.state.go('search');
  }
}

export default AlbumDetailsController;
