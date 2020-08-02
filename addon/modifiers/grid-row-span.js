import { modifier } from 'ember-modifier';

export default modifier(function gridRowSpan(element/*, params, hash*/) {
  let image = element.getElementsByClassName('post-card-image')[0];
  let imageHeight = image ? image.offsetHeight : 0;
  let contentHeight = element.getElementsByClassName('post-card-content')[0].offsetHeight;
  let numRows = Math.ceil((contentHeight + imageHeight) / (25 + 5));

  element.style.gridRowEnd = `span ${numRows}`;
});
