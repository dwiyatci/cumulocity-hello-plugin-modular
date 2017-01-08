/**
 * Created by glenn on 1/8/17.
 */

describe('helloapp.hello: c8yHello component', function () {
  var $injector;
  var $componentController;

  beforeEach(function () {
    common.globalBeforeWithUI();
    module('helloapp.hello');

    inject(function (
      _$injector_,
      _$componentController_
    ) {
      $injector = _$injector_;
      $componentController = _$componentController_;
    });
  });

  it('component should exist', function () {
    expect($injector.has('c8yHelloDirective'))
      .toEqual(true);
  });

  describe('displaying text', function () {
    beforeEach(function () {

      //////////// stubbing dependencies
    });

    it('should display "hello, world" by default', function () {
      // given
      var textBinding;

      testDisplayingText(textBinding, 'hello, world');
    });

    it('should display text according to the text binding', function () {
      // given
      var textBinding = 'halo, dunia';

      testDisplayingText(textBinding, textBinding);
    });

    function testDisplayingText(textBinding, expectedText) {
      // when
      var controller = $componentController('c8yHello', undefined, { text: textBinding });
      controller.$onInit();

      // then
      expect(controller.text)
        .toEqual(expectedText);
    }
  });
});
