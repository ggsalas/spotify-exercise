class indexController {
  constructor(indexService, $stateParams) {
    'ngInject';
    this.indexService = indexService;
    this.searchTxt = $stateParams.searchTxt;
  }

  $onInit() {
    this.albumns = [];  
    this.getData();
  }

  getData() {
    this.indexService.getSearch(this.searchTxt)
    .then(res => this.albumns = res.data.albums.items);
  }
}

export default indexController;

