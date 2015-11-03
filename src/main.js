import 'angular-material/angular-material.css'

import angular from 'angular';
import material from 'angular-material';
import uirouter from 'angular-ui-router';

import config from './config';
import main from './modules/main';

console.log("app is started!");

angular.module('app',
  [
    material,
    uirouter,
    main
  ]).config(config);
