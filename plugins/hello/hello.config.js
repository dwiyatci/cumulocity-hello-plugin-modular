/**
 * Created by glenn on 29.07.16.
 */

(function () {
  'use strict';

  angular
    .module('helloApp.hello')
    .config(configure);

  /* @ngInject */
  function configure(
    c8yNavigatorProvider,
    c8yViewsProvider,
  ) {
    c8yNavigatorProvider.addNavigation({
      name: 'hello',
      icon: 'cube',
      priority: 100000,
      path: 'hello',
    });

    c8yViewsProvider.when('/hello', {
      templateUrl: ':::PLUGIN_PATH:::/main.html',
    });
  }
}());
