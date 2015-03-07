module.exports = function() {
  return {
    restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
    replace: true,
    scope: false, //scope is not inherited, scope is same as parent
    template: '<h3>I am a home directive</h3>'
  }
};