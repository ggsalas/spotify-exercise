import template from './search.template.html';
import controller from './search.controller';

const searchComponent = {
  template,
  controller,
  bindings: {
    onSearch: '&',
    value: '<'
  }

}

export default searchComponent;
