class SearchController {
  search() {
    this.onSearch({
      $event: {
        query: this.query
      }
    });
  }
};

export default SearchController;
