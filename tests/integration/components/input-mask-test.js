import {
  moduleForComponent,
  test,
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('input-mask', {
    integration: true
});

test('is an input element', function(assert) {

  this.render(hbs`{{input-mask}}`);

  assert.equal('INPUT', this.$().find(' > *').prop('tagName'));
});

test('updates the value with the masked value', function(assert) {
  var mask = '9-99-999',
      enteredValue = '0123456789',
      maskedValue = '0-12-345';

  this.set('mask', mask);
  this.set('value', enteredValue);

  this.render(hbs`{{input-mask mask=mask value=value}}`);

  // We need a test that calls `this.$()` so the component is rendered.
  assert.equal(this.$().find('input').val(), maskedValue);
  assert.equal(this.get('value'), maskedValue);
});

test('handles dates correctly', function(assert) {
  var mask = 'mm/dd/yyyy',
      date = new Date(),
      day = ('0' + date.getDate()).slice(-2),
      month = ('0' + (date.getMonth() + 1)).slice(-2),
      year = date.getFullYear(),
      dateString = month + '/' + day + '/' + year;

  this.set('mask', mask);
  this.set('value', date);

  this.render(hbs`{{input-mask mask=mask value=value}}`);

  assert.equal(this.$().find('input').val(), dateString);
});

test('does not change null value', function(assert) {
  var mask = 'mm/dd/yyyy';

  this.set('mask', mask);
  this.set('value', null);

  this.render(hbs`{{input-mask mask=mask value=value}}`);

  assert.equal(this.get('value'), null);
});
