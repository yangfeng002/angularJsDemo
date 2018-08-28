# angularJsDemo
angularjs框架
AngualrJs包含的模块：
ng模块---默认的模块，几乎包含了angularjs的所有核心组件  * * * * *
ngRoute模块---路由模块  * * * * *
ngMessages---AngularJS表单验证模块 * * * *
ngCookies---用于读取和写入浏览器的cookies * * * *
ngResource ---当查询和发送数据到一个REST 服务器时，使用ngResource模块。 * * *
ngSanitize ---ngSanitize模块可安全地在你的应用程序中解析和操作HTML数据。
ngTouch	---ngRoute模块提供触摸事件，方便的应用于移动触摸设备。它的实现是实现是基于jQuery移动触摸事件处理。 * * *
ngAnimate ---AngularJS的动画模块，使用ngAnimate各种核心指令能为你的应用程序提供动画效果。动画可使用css或者JavaScript回调函数。



一、angular过滤器部分
1.currency 货币过滤器

2.date 日期过滤器

3.filter(用于过滤数组的)

4.json过滤器（将json对象转换为字符串 类似 JOSN.stringify()）

5.字符串过滤器
   lowercase过滤器    小写
   uppercase过滤器  大写
   limitTo过滤器 （对字符串或者数组的截取，第一个参数表示截取的长度，第二个参数表示索引值）

6.数字过滤器 number
  比较简单 采用科学计数的方式处理，保留小数位数加参数即可
  {{num| number:4}}保留4位小数

7.orderBy过滤器（对集合数据进行排序）
   传递2个参数，第一个表示排序的标志，第二个参数表示正序或者倒序 true

8.自定义过滤器
  两个参数，第一个参数为过滤器的名称，第二个为工厂函数（
  该工厂函数没有有参数，必须有返回值返回值，并且是一个函数，返回值才是真正的过滤器）
  返回值函数可以有参数，第一个参数为过滤的数据，作用域是全局作用域，从第二个参数开始表示使用过滤器传递的参数


=================================================================================
二、angular指令部分
验证指令

ng-required 一开始就验证 非空验证
ng-maxlength ng-minlength 输入完成之后再做验证
ng-pattern：在输入的时候进行正则验证
ng-disabled 表示元素是否可用
ng-readonly 表示元素是否只读
ng-checked 表示是否选中状态

常用的事件
ng-click
ng-change  输入时触发，注意：无法获取$event 参数对象(不能访问事件对象)，必要要绑定ng-model才可以
ng-submit 提交事件，注意：要给form元素绑定;触发元素是（input type为sbumit和button的两种情况）
run方法 $rootScope,run方法只能注入根作用域$rootScope，模块运行方法

作用域
  angular作用域是基于原型式继承的，因此子作用域中如果没有该数据，会顺着原型链往上找，直到找到对应的数据。
  一旦某个父作用域更改了原型链的数据，此时子作用域就会使用该数据，不会向上找（就近原则）

ng-href 指令 这个指令为a标签提供的，这个指令可以动态渲染a标签的href属性值，避免在渲染a标签的时候href值不存在打开错误。
ng-src  指令 这个指令为img标签提供的，可以提高用户体验度
注意：使用字符串的指令有：ng-app/ng-controller/ng-href/ng-src

ng-class指令 渲染类，并且可以渲染多个类（4中情况）
      值可以是字符串（可以包含空格，此时是多个类），
      值可以是变量（变量的值可以包含空格，此时是多个类）
      值可以是对象（对象的属性名称可以包含空格，此时一个属性名称表示多个类）属性值是布尔值，true表示保留这个类，false表示删除这个类
      值可以是数组（数组成员可以包含空格，此时一个成员代表多个类）数组成员的名称就是类的名称

ng-style指令：（2种情况）
      一种是对象，对象的属性名称是css样式名称，对象的值是cssy样式值
      一种是变量，变量的值就是一个对象

ng-if指令(条件判断)  只接受布尔值，true则保留，false则不保留
ng-switch指令 :  ng-switch 通过on属性来添加一个判断的条件  ng-switch-when 相当于case,ng-switch-default相当于default

ng-repeat指令:表示循环的，该指令提供了6个变量为 $index/$first/$last/$middle(处理第一个和最后一个)/$odd/$even
           除了$index,其他的都是布尔类型
ng-include指令：异步加载模板（html页面）

自定义指令
     指令可以绑定事件，提供一些特殊的功能（指令只作用在html中），虽然angular指令很多，但是在开发中可能不够用。
     如何自定义指令：分两步
        1.在html中使用指令（这个指令名称以-分割单次，如my-directive）
        2.在js中通过directive方法来定义指令。
            第一个参数表示指令的名称（采用驼峰式命名myDirective），
            第二个参数是工厂函数(没有参数 / 作用域是全局作用域 / 返回值是描述指令的对象)
               返回值对象包括属性如下
               1）template 表示自定义模板的类型，value值是一个字符串，这里的模板会渲染到指令中
               2）replace:表示是否替换原来的容器元素
               3）restrict 表示使用哪些类型
               4）templateUrl:写一个路径（注意：必须要有一个服务器）

    angularjs一共有4种自定义指令的类型 ECMA
      E表示Element类型 例如：<my-title></my-title>  (注意：该方式默认展示内容)
      C表示（Class）类类型 例如：<div class="ng-hide"></div>
      M表示注释类型（comment）例如 <!-- directive:my-title -->(注意：这种方式使用极少)
      A表示属性类型（Attribute）例如：<div my-title></div> （注意：该方式默认展示内容）
        注意：这四个字母都是大写的可以组合使用

 自定义指令的作用域
        自定义指令的作用域通过控制器来定义，这个控制器不是定义在元素上，而是定义在自定义指令的返回对象上叫controller
        作用域是controller空对象
        参数：默认没有参数，我们想使用什么参数需要注入进来
        常用的3个服务
             $scope表示作用域
             $element表示获取的自定义指令容器元素的jqlite对象
             $attrs表示自定义指令元素属性的服务，属性元素采用驼峰式命名，除了data-*的比较特殊，取的是data后面的名称。

       作用域的关系
         自定义指令作用域是通过scope来控制的，我们可以通过这个属性来定义子作用域和父作用域的关系。
         对于自定义指令一般内容有2种：
         一种在自定义指令元素内部，<div my-title>{{msg}}</div>  (scope的值默认是false)
         一种是通过template或者templateUrl


自定义指令的修饰符
   @修饰符使用



========================================================





