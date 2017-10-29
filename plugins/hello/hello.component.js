/**
 * Created by glenn on 08.01.17.
 */

(function () {
  'use strict';

  angular
    .module('helloApp.hello')
    .component('c8yHello', {
      templateUrl: ':::PLUGIN_PATH:::/hello.html',
      bindings: {
        text: '@',
      },
      controllerAs: 'vm',
      controller: Controller,
    });

  function Controller() {
    const vm = this;

    _.assign(vm, { $onInit });

    ////////////

    function $onInit() {
      vm.text = vm.text || 'hello, world';
    }
  }
}());
