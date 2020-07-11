import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../templates/components/navigation';

export default Component.extend({
  blog: service(),
  router: service(),
  layout
});
