/**
 * Created by glenn on 7/13/16.
 */

(function () {
  'use strict';

  angular
    .module('helloapp.hello')
    .controller('HelloController', HelloController);

  function HelloController() {
    var vm = this;

    vm.text = 'hello, world';
  }
}());
