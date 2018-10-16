/**
 * Created by glenn on 08.01.17.
 */

describe('helloapp.hello: c8yHello component', () => {
  'use strict';

  it('component should exist', () => {
    const { $injector } = setup();

    expect($injector.has('c8yHelloDirective')).toEqual(true);
  });

  describe('displaying text', () => {
    it('should display "hello, world" by default', () => {
      // given
      const textBinding = undefined;

      testDisplayingText(textBinding, 'hello, world');
    });

    it('should display text according to the text binding', () => {
      // given
      const textBinding = 'halo, dunia';

      testDisplayingText(textBinding, textBinding);
    });

    function testDisplayingText(textBinding, expectedText) {
      const { $componentController } = setup();

      // when
      const controller = $componentController('c8yHello', undefined, {
        text: textBinding
      });
      controller.$onInit();

      // then
      expect(controller.text).toEqual(expectedText);
    }

    it('you should compile the component instead if use case getting too complex', () => {
      // given
      const template = '<c8y-hello world="world"></c8y-hello>';
      const bindings = { world: 'world' };

      // when
      const element = createComponent(template, bindings);

      // then
      expect(element.html()).toContain('hello');
      expect(element.controller('c8yHello').text).toEqual('hello, world');
    });

    function createComponent(template, bindings) {
      const { $rootScope, $compile } = setup();
      const $scope = _.assign($rootScope.$new(), bindings);

      const element = $compile(template)($scope);
      $scope.$apply();

      return element;
    }
  });

  function setup() {
    const setupVariables = {};

    common.globalBeforeWithUI();
    angular.mock.module('helloApp.hello');

    inject(($injector) => _.assign(setupVariables, {
      $injector,
      $rootScope: $injector.get('$rootScope'),
      $compile: $injector.get('$compile'),
      $componentController: $injector.get('$componentController')
    }));

    return setupVariables;
  }
});
