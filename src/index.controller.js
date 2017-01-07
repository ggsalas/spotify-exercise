class indexController {
  constructor(indexService, $stateParams) {
    'ngInject';
    this.indexService = indexService;
    this.searchTxt = $stateParams.searchTxt;
  }

  $onInit() {
    this.albumns = [];  
    //this.getData();
  }

  getData($event) {
    console.log('event', $event);
    this.indexService.getSearch($event.query)
    .then(res => this.albumns = res.data.albums.items);
  }
}

export default indexController;

