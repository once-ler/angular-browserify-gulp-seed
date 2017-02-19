export default $location => ({
  restrict: 'A',

  link(scope, element, attrs) {
    let anchor = element[0];
    if (element[0].tagName.toUpperCase() != 'A')
      anchor = element.find('a')[0];
    let path = anchor.href;

    scope.location = $location;
    scope.$watch('location.absUrl()', newPath => {
      path = normalizeUrl(path);
      newPath = normalizeUrl(newPath);

      if (path === newPath ||
        (attrs.activeNav === 'nestedTop' && newPath.indexOf(path) === 0)) {
        element.addClass('active');
      } else {
        element.removeClass('active');
      }
    });
  }
});
