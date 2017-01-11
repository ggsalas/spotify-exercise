class indexController {
  constructor(indexService, $state, $stateParams) {
    'ngInject';
    this.indexService = indexService;
    this.searchTxt = $stateParams.searchTxt;
    this.albumns = [];  
    this.state = $state;
  }

  $onInit() {
    this.getData(this.searchTxt);
  }

  getData(query) {
    this.indexService.getSearch(query)
    .then(res => this.albumns = res.data.albums.items);
  }

  goToSearch($event) {
    if($event.query) {
      this.state.go('search', {searchTxt: $event.query});
    }
  }

  goToAlbum(albumId) {
    this.state.go('albumDetails', {
      albumId,
      searchTxt: this.searchTxt
    });
  }
}

export default indexController;

