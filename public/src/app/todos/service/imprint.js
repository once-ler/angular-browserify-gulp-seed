import fs from 'fs';

export default function() {

  const text = 'Example app for using AngularJS with Browserify - ' +
    'by Bastian Krol. Use at your own risk :P';

  this.getText = () => text;

};
