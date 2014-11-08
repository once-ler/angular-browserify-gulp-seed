/**
 * Angular app environment settings
 */
'use strict';

module.exports = {

  foo: 'bar',

  // root application name; all ng-modules for this app will be put underneath this namespace
  appName: 'app',

  // set base template/partials dir
  baseTemplateDir: '/views/partials/',

  // helper function to get full template path
  templatePath: function (view) { return [this.baseTemplateDir, view].join(''); }

};
