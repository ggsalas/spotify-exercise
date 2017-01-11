class AlbumDetailsController {
  constructor(albumDetailsService, $state, $stateParams) {
    'ngInject';
    this.albumDetailsService = albumDetailsService;
    this.state = $state;
    this.albumId = $stateParams.albumId;
    this.searchTxt = $stateParams.searchTxt;
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

  goBackToSearch(searchTxt) {
    if(searchTxt) {
      this.state.go('search', {searchTxt});
    }else{
      this.state.go('search');
    } 
  }
}

export default AlbumDetailsController;
