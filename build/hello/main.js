!function(){"use strict";angular.module("helloapp.hello",[])}(),function(){"use strict";function a(a,b){a.addNavigation({name:"hello",icon:"cube",priority:1e5,path:"hello"}),b.when("/hello",{templateUrl:"/apps/helloapp/hello/views/hello.html",controller:"HelloController",controllerAs:"vm"})}angular.module("helloapp.hello").config(a),a.$inject=["c8yNavigatorProvider","c8yViewsProvider"]}(),function(){"use strict";function a(){var a=this;a.text="hello, world"}angular.module("helloapp.hello").controller("HelloController",a)}(),function(){"use strict";function a(a){a.getUIVersion().then(function(a){console.log(a)})}angular.module("helloapp.hello").run(a),a.$inject=["c8ySystem"]}(),angular.module("helloapp.hello").run(["$templateCache",function(a){"use strict";a.put("/apps/helloapp/hello/views/hello.html","<div>{{vm.text}}</div>")}]);