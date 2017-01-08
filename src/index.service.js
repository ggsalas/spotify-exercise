class indexService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  getSearch(search) {
    return this.$http.get(`/search?q=${search}`);
  }
}

export default indexService;

