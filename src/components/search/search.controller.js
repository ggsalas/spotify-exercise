class SearchController {
  $onChanges(changes) {
    // to get search from url bar
    if(changes.value && changes.value.currentValue !== '') {
      this.query = changes.value.currentValue; 
      this.search();
    }
  }

  search() {
    this.onSearch({
      $event: { query: this.query }
    });
  }
}

export default SearchController;
