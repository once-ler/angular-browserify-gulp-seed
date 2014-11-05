'use strict';

var _ = require('lodash');

/**
 * Helper function(s)
 */

exports.getBowerPackageIds = function () {
  // read bower.json and get dependencies' package ids
  var bowerManifest = {};
  try {
    bowerManifest = require('../../bower.json');
  } catch (e) {
    // does not have a bower.json manifest
  }
  /**
    metro-bootstrap is strictly a less package
  **/
  return _(_.keys(bowerManifest.dependencies)).without('metro-bootstrap') || [];

}

exports.getNPMPackageIds = function () {
  // read package.json and get dependencies' package ids
  var packageManifest = {};
  try {
    packageManifest = require('../../package.json');
  } catch (e) {
    // does not have a package.json manifest
  }
  return _.keys(packageManifest.dependencies) || [];

}