module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var _this = this;

    return this.addBowerPackageToProject('jquery.inputmask').then(function() {
      return _this.addBowerPackageToProject('moment');
    });
  }
};
