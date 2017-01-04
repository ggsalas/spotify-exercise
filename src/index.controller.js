class indexController {
  constructor(indexService) {
    'ngInject';
    this.indexService = indexService;
  }

  $onInit() {
      this.indexService.getSearch('elvis').then((res) => {
          console.log(res);
      });
  }
}

export default indexController;

