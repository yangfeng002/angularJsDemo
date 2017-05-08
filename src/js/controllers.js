/**
 * Created by fengyang on 2017/4/26.
 */
//console.log(angular); angular对象
var app = angular.module('web',[]);
//console.log(app);
angular.module('web',[])
    .controller('MsgCtrl', function ($scope) {
        //model层
        $scope.msg = "angular";

    }).controller("demoController", function ($http, $scope) {
       $scope.getAjaxUser = function(){
           //ajax请求
           // $http.get({url:"../xxx.action"}).success(function(data){
          //    $scope.user= data;
             // });
           $scope.user = {"name":"从JOSN中获取的名称","age":22};
       }
    });

/*声明module*/
angular.module('yourApp',[])
    .controller('myCtrl', function ($scope) {
        //要想使用作用域，必须注入进来
       $scope.colors=['red','green','blue'];
        //点击按钮的值输入到页面中
        $scope.result = "";
        $scope.choose = function (color) {
           this.result = color;
        }
    })

/*显示或者隐藏*/
angular.module('myApp',[])
       .controller('myCtrl', function ($scope) {
           $scope.isShowPage = true;
           $scope.togglePage = function (isShowPage) {
               this.isShowPage = isShowPage;
           }
       })
       .controller('myFilterCtrl', function ($scope,$filter) {
           $scope.colors = {
               red:'红',
               green:'绿',
               blue:[1,2,3]
           }
           $scope.price = 68;
           $scope.num = $filter('currency')(12345);
           $scope.datetime = new Date();
       })