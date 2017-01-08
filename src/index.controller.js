class indexController {
  constructor(indexService, $state, $stateParams) {
    'ngInject';
    this.indexService = indexService;
    this.searchTxt = $stateParams.searchTxt;
    this.albumns = [];  
    this.state = $state;
  }

  getData($event) {
    this.indexService.getSearch($event.query)
    .then(res => this.albumns = res.data.albums.items);
  }

  goToAlbum(albumId) {
    this.state.go('albumDetails', {albumId});
  }
}

export default indexController;

