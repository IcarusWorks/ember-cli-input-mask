/* global moment */

import Ember from 'ember';

export default Ember.TextField.extend({


  initializeMask: Ember.on('didInsertElement', function() {
    var mask = this.get('mask');

    this.$().inputmask(mask, {
      onBeforeMask: function(value) {
        if (mask === 'mm/dd/yyyy') {
          return moment(new Date(value)).format('L');
        }
      }
    });

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
