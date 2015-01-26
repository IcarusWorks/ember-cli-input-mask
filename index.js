/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-input-mask',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/moment/moment.js');
    app.import(app.bowerDirectory + '/jquery.inputmask/dist/jquery.inputmask.bundle.js');
  }
};
