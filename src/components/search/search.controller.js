class SearchController {
  constructor($state) {
    'ngInject';
    this.state = $state;
  }

  search() {
    this.onSearch({
      $event: {
        query: this.query
      }
    });
    this.state.go('search', {searchTxt: this.query});
  }
};

export default SearchController;
