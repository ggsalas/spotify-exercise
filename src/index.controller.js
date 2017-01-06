class indexController {
  constructor(indexService) {
    'ngInject';
    this.indexService = indexService;
  }

  $onInit() {
    this.albumns = [];  
  }

  getData($event) {
    this.indexService.getSearch($event.query)
    .then(res => this.albumns = res.data.albums.items);
  }
}

export default indexController;

