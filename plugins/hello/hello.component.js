/**
 * Created by glenn on 1/8/17.
 */

(function () {
  'use strict';

  angular
    .module('helloapp.hello')
    .component('c8yHello', {
      templateUrl: ':::PLUGIN_PATH:::/hello.html',
      bindings: {
        text: '@'
      },
      controller: Controller,
      controllerAs: 'vm'
    });

  function Controller() {
    var vm = this;

    _.assign(vm, {
      $onInit: onInit
    });

    ////////////

    function onInit() {
      vm.text = vm.text || 'hello, world';
    }
  }
}());
