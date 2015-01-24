import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('input-mask');

test('is an input element', function() {
  var component = this.subject();

  equal('INPUT', this.$().prop('tagName'));

  component.removeMask();
});

test('updates the value with the masked value', function() {
  var component = this.subject(),
      mask = '9-99-999',
      enteredValue = '0123456789',
      maskedValue = '0-12-345';

  Ember.run(function() {
    component.set('mask', mask);
    component.set('value', enteredValue);
  });

  // We need a test that calls `this.$()` so the component is rendered.
  equal(this.$().val(), maskedValue);

  equal(component.get('value'), maskedValue);

  component.removeMask();
});

test('handles dates correctly', function() {
  var component = this.subject(),
      mask = 'mm/dd/yyyy',
      date = new Date(),
      day = ('0' + date.getDate()).slice(-2),
      month = ('0' + (date.getMonth() + 1)).slice(-2),
      year = date.getFullYear(),
      dateString = month + '/' + day + '/' + year;

  Ember.run(function() {
    component.set('mask', mask);
    component.set('value', date);
  });

  equal(this.$().val(), dateString);

  component.removeMask();
});

