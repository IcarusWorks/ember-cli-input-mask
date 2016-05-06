/* global moment */

import Ember from 'ember';

export default Ember.TextField.extend({
  initializeMask: function() {
    var mask = this.get('mask');
    let params = {};
    let self = this;

    let passedParams = this.attrs;

    for (let i in passedParams) {
      if(typeof passedParams[i] !== 'undefined' && passedParams[i] !== null) {
        if(typeof Inputmask.prototype.defaults[i] === 'function'){
          params[i] = function() {
            self.sendAction(i,...arguments);
          }
        }else {
          params[i] = passedParams[i];
        }
      }
    }

    params.onBeforeMask = function(value) {
      if (mask === 'mm/dd/yyyy') {
        return moment(new Date(value)).format('L');
      }
    };

    this.$().inputmask(mask, params);

    // The input mask changes the value of the input from the original to a
    // formatted version. We need to manually send that change back to the
    // controller.
    this.set('value', this.$().val());
  }.on('didInsertElement'),

  removeMask: function() {
    this.$().inputmask('remove');
  }.on('willDestroyElement')
});
