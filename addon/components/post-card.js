import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/post-card';

export default Component.extend({
  layout,
  tagName: '',
  computedStyle: computed('post.image', function() {
    if(!this.post.image) {
      return;
    }

    return;
  })
});
