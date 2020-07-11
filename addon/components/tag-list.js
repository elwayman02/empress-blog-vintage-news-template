import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../templates/components/tag-list';

export default Component.extend({
  layout,
  tagName: '',

  store: service('store'),

  init() {
    this._super(...arguments);

    this.store.findAll('tag').then((tags) => {
      this.set('tags', tags);
    });
  }
});
