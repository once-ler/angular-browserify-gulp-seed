var fs = require('fs'),
  async = require('async'),
  exec = require('child_process').exec;

var dependencies = Object.keys(JSON.parse(fs.readFileSync('../package.json')).devDependencies);

async.concat(dependencies, function(dep, next){
  exec('npm view ' + dep + ' dependencies', function(error, stdout, stderr) {
    if (typeof stdout === 'string'){
      next(null, stdout);
    }
    else {
      next();
    }
  });
}, function(err, results) {
  var scrubbed = results.join('').replace(/\s|\n|\'|{|}/g,'').split(',');
  var dependencies = {};
  for(var k in scrubbed){
    var item = scrubbed[k];
    var dep = item.split(':')[0];
    
    if (!dependencies[dep]){
      dependencies[dep] = 1;
    }
    else {
      dependencies[dep]++;
    }    
  }
  var sortable = [];
  for (var k in dependencies){
    sortable.push([k, dependencies[k]])
  }
  sortable.sort(function(a,b){
    return -(a[1]-b[1]);
  });
  console.log(sortable)
});