/***
 * author: witoldsz
 * https://github.com/witoldsz/angular-http-auth/blob/gh-pages/app/content-mocks.js
 **/
//(function() {  
define(['angular','angularMocks'], 
  angular => {
    /**
     * This module is used to simulate backend server for this demo application.
     */
    angular.module('content-mocks',['ngMockE2E'])
    
    .run($httpBackend => {
      
      //var authorized = false;
      //$httpBackend.whenPOST('auth/login').respond(function(method, url, data) {
      $httpBackend.whenPOST('/login').respond((method, url, data) => {
        
        data = JSON.parse(data);
        if (data.username == 'admin' && data.password == '123'){
          return [200, { "role": { bitMask: 4,title:'admin' }, "username": data.username }];
        }
        if (data.username == 'user' && data.password == '123'){
          return [200, { "role": { bitMask: 2,title:'user' }, "username": data.username }];
        }

        return [401];
      });
      $httpBackend.whenPOST('/logout').respond((method, url, data) => //authorized = false;
      [200]);
      
      $httpBackend.whenPOST('/register').respond((method, url, data) => [403,`I have received and processed your data [${data}].`]);
      /*
      $httpBackend.whenPOST('data/protected').respond(function(method, url, data) {
        return authorized ? [200,'This is confidential [' + data + '].'] : [401];
      });
      */

      $httpBackend.whenGET('/users').respond((method, url, data) => [200,[{"id":1,"username":"user","role":{"bitMask":2,"title":"user"}},{"id":2,"username":"admin","role":{"bitMask":4,"title":"admin"}}]]);

      //otherwise

      $httpBackend.whenGET(/.*/).passThrough();

    });
  });

//})();