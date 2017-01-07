class SearchController {
  constructor($state) {
    'ngInject';
    this.state = $state;
  }

  $onChanges(changes) {
    if(changes.value) {
      this.query = changes.value.currentValue; 
      this.search();
    }
  }

  search() {
    this.onSearch({
      $event: {
        query: this.query
      }
    });
   // this.state.go('search', {searchTxt: this.query});
  }
};

export default SearchController;
