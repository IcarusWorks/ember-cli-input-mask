/* global moment */

import Ember from 'ember';

export default Ember.TextField.extend({


  initializeMask: Ember.on('didInsertElement', function() {
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
    // But do this only if initial value is not null/undefined, otherwise
    if (Ember.isPresent(this.get('value'))) {
      Ember.run.scheduleOnce('afterRender', this, function(){
        this.set('value',this.$().val());
      });
   }
  }),

  removeMask: Ember.on('willDestroyElement', function() {
    this.$().inputmask('remove');
  })
});
