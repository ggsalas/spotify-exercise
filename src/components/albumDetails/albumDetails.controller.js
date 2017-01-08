class AlbumDetailsController {
  constructor(albumDetailsService, $state, $stateParams) {
    'ngInject';
    this.albumDetailsService = albumDetailsService;
    this.state = $state;
    this.albumId = $stateParams.albumId;
  }

  $onInit() {
    this.albumDetailsService.getAlbumById('7xl50xr9NDkd3i2kBbzsNZ').then((res) => {
      console.log(res);
    });
  }

  goToSearch($event) {
    if($event.query) {
      this.state.go('search', {searchTxt: $event.query});
    }
  }
}

export default AlbumDetailsController;
