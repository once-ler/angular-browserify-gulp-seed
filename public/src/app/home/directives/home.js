export default () => ({
  //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
  restrict: 'A',

  replace: true,

  //scope is not inherited, scope is same as parent
  scope: false,

  template: '<h3>I am a home directive</h3>'
});