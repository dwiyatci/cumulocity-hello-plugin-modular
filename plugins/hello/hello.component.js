/**
 * Created by glenn on 08.01.17.
 */

(() => {
  'use strict';

  angular.module('helloApp.hello').component('c8yHello', {
    template: '<div>{{vm.text}}</div>',
    bindings: {
      text: '@'
    },
    controllerAs: 'vm',
    controller: Controller
  });

  function Controller() {
    const vm = this;

    _.assign(vm, { $onInit });

    ////////////

    function $onInit() {
      vm.text = vm.text || 'hello, world';
    }
  }
})();
