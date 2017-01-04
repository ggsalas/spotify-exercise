class indexController {
  constructor(indexService) {
    'ngInject';
    this.indexService = indexService;
  }

  $onInit() {
    this.albumns = [];  
    this.indexService.getSearch('elvis')
    .then(res => this.albumns = res.data.albums.items)
  }
}

export default indexController;

