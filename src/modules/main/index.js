import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './main.routes';
import helloService from '../../services/hello.service'
import MainController from './main.controller';

export default angular.module('app.main', [uirouter, helloService])
  .config(routing)
  .controller('MainController', MainController)
  .name;
