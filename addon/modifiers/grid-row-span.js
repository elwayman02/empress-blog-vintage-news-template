import { modifier } from 'ember-modifier';

export default modifier(function gridRowSpan(element, params, hash) {
  let contentHeight = element.getElementsByClassName('post-card-content')[0].offsetHeight;
  if (hash.image) {
    let imageWrapper = element.getElementsByClassName('post-card-image')[0];
    let image = imageWrapper.getElementsByTagName('img')[0];
    if (image.complete) {
      let imageHeight = imageWrapper.offsetHeight;
      let numRows = Math.ceil((contentHeight + imageHeight) / (25 + 5));

      element.style.gridRowEnd = `span ${numRows}`;
    } else {
      image.addEventListener('load', function () {
        let loadedImageWrapper = element.getElementsByClassName('post-card-image')[0];
        let imageHeight = loadedImageWrapper.offsetHeight;
        let numRows = Math.ceil((contentHeight + imageHeight) / (25 + 5));

        element.style.gridRowEnd = `span ${numRows}`;
      });
    }
  } else {
    let numRows = Math.ceil(contentHeight / (25 + 5));

    element.style.gridRowEnd = `span ${numRows}`;
  }
});
