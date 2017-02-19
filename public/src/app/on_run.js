/**
 * @ngInject
 */
function OnRun($rootScope, $state, $location, Auth) {
  
  //componentHandler.upgradeAllRegistered();

  $rootScope.$on("$stateChangeStart", (event, toState, toParams, fromState, fromParams) => {
      
    if(!('data' in toState) || !('access' in toState.data)){
      $rootScope.error = "Access undefined for this state";
      event.preventDefault();
    }
    else if (!Auth.authorize(toState.data.access)) {
      $rootScope.error = "Seems like you tried accessing a route you don't have access to...";
      event.preventDefault();

      if (fromState.url === '^') {
        if (Auth.isLoggedIn()) {
          $state.go('user.home');          
        } else {
          $rootScope.error = null;
          $state.go('anon.home');
        }
      }
    }
  });
}

export default OnRun;

/**
  Detect <= IE 10; If it's IE 11, that's OK

  Reference:
  this.device.ie9 = /MSIE 9/i.test(navigator.userAgent);
  this.device.ie10 = /MSIE 10/i.test(navigator.userAgent);
  this.device.ie11 = /rv:11.0/i.test(navigator.userAgent);
**/
((() => {
  const isIE = (navigator.userAgent.indexOf("MSIE") != -1);
  if (isIE) {
    $('#ie-warning').removeClass('hidden');
  }
}))();

//http://stackoverflow.com/questions/3326650/console-is-undefined-error-for-internet-explorer
/**
 * Protect window.console method calls, e.g. console is not defined on IE
 * unless dev tools are open, and IE doesn't define console.debug
 * 
 * Chrome 41.0.2272.118: debug,error,info,log,warn,dir,dirxml,table,trace,assert,count,markTimeline,profile,profileEnd,time,timeEnd,timeStamp,timeline,timelineEnd,group,groupCollapsed,groupEnd,clear
 * Firefox 37.0.1: log,info,warn,error,exception,debug,table,trace,dir,group,groupCollapsed,groupEnd,time,timeEnd,profile,profileEnd,assert,count
 * Internet Explorer 11: select,log,info,warn,error,debug,assert,time,timeEnd,timeStamp,group,groupCollapsed,groupEnd,trace,clear,dir,dirxml,count,countReset,cd
 * Safari 6.2.4: debug,error,log,info,warn,clear,dir,dirxml,table,trace,assert,count,profile,profileEnd,time,timeEnd,timeStamp,group,groupCollapsed,groupEnd
 * Opera 28.0.1750.48: debug,error,info,log,warn,dir,dirxml,table,trace,assert,count,markTimeline,profile,profileEnd,time,timeEnd,timeStamp,timeline,timelineEnd,group,groupCollapsed,groupEnd,clear
 */
((() => {
  // Union of Chrome, Firefox, IE, Opera, and Safari console methods
  const methods = ["assert", "assert", "cd", "clear", "count", "countReset",
    "debug", "dir", "dirxml", "dirxml", "dirxml", "error", "error", "exception",
    "group", "group", "groupCollapsed", "groupCollapsed", "groupEnd", "info",
    "info", "log", "log", "markTimeline", "profile", "profileEnd", "profileEnd",
    "select", "table", "table", "time", "time", "timeEnd", "timeEnd", "timeEnd",
    "timeEnd", "timeEnd", "timeStamp", "timeline", "timelineEnd", "trace",
    "trace", "trace", "trace", "trace", "warn"];
  let length = methods.length;
  const console = (window.console = window.console || {});
  let method;
  const noop = () => {};
  while (length--) {
    method = methods[length];
    // define undefined methods as noops to prevent errors
    if (!console[method])
      console[method] = noop;
  }
}))();