require('angular');
require('angular-ui-router')

import services from './services';
import controllers from './controllers';
import directives from './directives';

const app = angular.module('app.auth', [ 'ui.router', services.name, controllers.name, directives.name ]);

export default app;
