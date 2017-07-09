/**
 * Created by glenn on 15.08.16.
 */

(function () {
  'use strict';

  angular
    .module('helloApp.hello')
    .run(runBlock);

  /* @ngInject */
  function runBlock(
    c8ySystem
  ) {
    (async () => {
      await printUiVersion();

      // Put your fiddle code here.
      console.log('hello, world');
    })();

    async function printUiVersion() {
      const version = await c8ySystem.getUIVersion();

      console.log(`Cumulocity UI version: ${version}`);
    }
  }
}());
