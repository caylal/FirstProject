// var a = 2;
// (function IIFE(){
//     var a = 3;
//     console.log(a);
// })();
//  console.log(a);

 //函数调用并传参

//  var a = 2;
//  (function(global){
//      var a = 3;
//      console.log(a);
//      console.log(global.a);
//  })(window);
//  console.log(a);

//UMD模式
// var a = 2;
// (function IIEF(def){
//     def(window);
// })(function def(global){
//     var a = 3;
//     console.log(a);
//     console.log(global.a);
// })

//块作用域

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }
// console.log(i);

//变量提升
// a = 2;
// var a;
// console.log(a);

//闭包
// for(let i = 1; i <= 5; i++){
//     // (function(){
//     //     setTimeout(function timer(){
//     //         console.log(i);
//     //     },i * 1000);
//     // })();
//     // (function(){
//     //     var j = i;
//     //     setTimeout(function() {
//     //         console.log(j)
//     //     }, j * 1000);
//     // })()
//     (function(j){
//         setTimeout(function() {
//             console.log(j)
//         }, j * 1000);
//     })(i);
    
// }

// function CoolModule(){
//     var something = "cool";
//     var another = [1,2,3];
//     function doSomething(){
//         console.log(something);
//     }
//     function doAnother(){
//         console.log(another.join(","));
//     }
//     return{
//         doSomething: doSomething,
//         doAnother: doAnother
//     };
// }
// var foo = CoolModule();
// foo.doSomething();
// foo.doAnother();

// function CoolModule(id){
//     function identify(){
//         console.log(id);
//     }
//     return {
//         identify:identify
//     };
// }

// var foo1 = CoolModule("foo 1");
// var foo2 = CoolModule("foo 2");
// foo1.identify();
// foo2.identify();

// var foo = (function coolModule(id){
//     function change(){
//         publicAPI.identify = identify2;
//     }
//     function identify1(){
//         console.log(id);
//     }
//     function identify2(){
//         console.log(id.toUpperCase());
//     }
//     var publicAPI = {
//         change:change,
//         identify:identify1
//     };
//     return publicAPI;
// })("foo module");
//  foo.identify();
//  foo.change();
//  foo.identify();

// function foo(){
//     console.log(a);
// }
// function bar(){
//     var a = 3;
//     foo();
// }
// var a = 2;
// bar();

// var obj = {
//     id: "awesome",
//     cool: function coolFn(){
//         console.log(this.id);
//     }
// };
// var id = "not awesome";
// obj.cool();
// setTimeout(obj.cool, 100);

// var obj = {
//     count: 0,
//     cool:function coolFn(){
//         var self = this;
//         if(self.count < 1){
//             setTimeout(function() {
//                 self.count++;
//                 console.log("awesome");
//             }, 100);
//         }
//     }
// }
// obj.cool();

// var obj = {
//     count: 0,
//     cool: function coolFn(){
//         if(this.count < 1){
//             setTimeout(()=>{
//                 this.count++;
//                 console.log("awesome?");
//             },100);
//         }
//     }
// }
// obj.cool();

// var obj = {
//     count: 0,
//     cool: function coolFn(){
//         if(this.count < 1){
//             setTimeout(function timer(){
//                 this.count++;
//                 console.log("more awesome");
//             }.bind(this),100)
//         }
//     }
// }
// obj.cool();


// function identify(){
//     return this.name.toUpperCase();
// }
// function speak(){
//     var greeting = "Hello, I'm " + identify.call(this);
//     console.log(greeting);
// }
// var me = {
//     name: "Kyle"
// };
// var you = {
//     name: " Reader"
// };

// identify.call(me);
// identify.call(you);

// speak.call(me);
// speak.call(you);

// function foo(args){
//     this.a = args;
// }
// var obj1 = {};
// var bar = foo.bind(obj1);
// bar(2);
// console.log(obj1.a);

// var baz = new bar(3);
// console.log(obj1.a);
// console.log(baz.a);

// 箭头函数的绑定无法被修改
// function foo(){
//     return (a)=>{
//         // 返回一个箭头函数
//         console.log(this.a);
//     };
// }

// var obj1 = {
//     a: 2
// };
// var obj2 = {
//     a: 3
// };

// var bar = foo.call(obj1);
// bar.call(obj2);

// function foo(){
//     setTimeout(()=>{
//         // 这里的this在此法上继承自foo()
//         console.log(this.a);
//     },100);
// }
// var obj = {
//     a: 2
// };

// foo.call(obj);

//数组去重
// const number = [1,2,2,3,4,6,9,4,5,7,0];
// const num1 = [...new Set(number)];
// const num2 = Array.from(new Set(number));
// console.log(num1);
// console.log(num2);

// 通过某种计算产生一个新数组
// const initial = [{id: 1, score: 1}, {id: 2, score: 2}, {id: 3, score: 4}];
// const newValue = {id: 3, score: 3};
// const updated = initial.map(x => x.id === newValue.id ? newValue : x);

// const abc = initial.map(function(x){
//     return x.id === newValue.id ? newValue : x;
// })
// console.log(updated);
// // 删除数组中的对象
// const removeid = 3;
// const without = initial.filter(x => x.id !== removeid);
// console.log(without);


// var myObect = {
//     a: 2,
// };

// Object.preventExtensions(myObect);
// myObect.b = 3;
// console.log(myObect.b);

// var myObject = {
//     get a(){
//         return this._a_;
//     },
//     set a(val){
//         this._a_ = val * 2; 
//     }
// }
//  myObject.a = 2;
//  console.log(myObject.a);


// var myArray = [1,2,3];
// var it = myArray[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// 工厂模式
// function creatObj(name, age, sex, home){
//     var o = new Object();
//     o.name = name;
//     o.age = age;
//     o.sex = sex;
//     o.home = home ;
//     o.growUp = function(){
//         this.age++;
//     }
//     return o;
// }
// var a = creatObj("a", 4, "boy", "shanghai");
// var b =  creatObj("b", 5, "girl", "shenzhen");
// var c = creatObj("c", 6, "boy", "shanghai");
// console.log(a);
// console.log(b);
// console.log(c);

// // 构造函数模式

// function FamilyMember(name, age, sex, home){
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
//     this.home = home;
//     this.growUp = function(){
//         this.age++;
//     }
// }
// var d = new FamilyMember("d", 6, "girl", "shenzhen");
// var e = new FamilyMember("e", 7, "boy", "shenzhen");
// console.log(d);
// console.log(e);

// // 原型对象模式
// function FamilyObect(){}
// FamilyObect.prototype.home = "shanghai";
// FamilyObect.prototype.moveNewHome = function(newHome){
//     this.home = newHome;
// }
// var f = new FamilyObect();
// var g = new FamilyObect();
// console.log(f.home);
// console.log(g.home);
// FamilyObect.prototype.home = "hangzhou";
// console.log(f.home);
// console.log(g.home);

// // 组合模式
//  function FamilyObject1(name){ //构造函数
//      this.name = name;
//  }
//  FamilyObject1.prototype = { // 原型
//      constructor: FamilyObject1,
//      home: "shanghai",
//      moveNewHome: function(newHome){
//          this.home = newHome;
//      }

//  }



// function Foo(){}
// Foo.prototype={} // 创建一个新原型对象
//  var a1 = new Foo();
//  console.log(a1.constructor === Foo) //fasle
//  console.log(a1.constructor === Object); // true

//  function Foo(){}
//  Foo().prototype = {} 

//  Object.defineProperty(Foo.prototype, "constructor",{
//      enumerable: false,
//      writable:true,
//      configurable:true,
//      value: Foo //让 .constructor指向Foo
//  })

// function Foo(name){
//     this.name = name;
// }
// Foo.prototype.myName = function(){
//     return this.name;
// }

// function Bar(name, label){
//     Foo.call(this, name);
//     this.label = label;
// }
// // 创建一个新的Bar.prototype对象并关联到Foo.prototype
// Bar.prototype = Object.create(Foo.prototype);
// Bar.prototype.Label = function(){
//     return this.label;
// }

// var a = new Bar("a", "obj a");
// console.log(a.myName);
// console.log(a.label);

// var foo = {
//     something: function(){
//         console.log("Tell me something good...");
//     }
// }
// var bar = Object.create(foo);
// bar.something();

// function Foo(){};
// var a1 = new Foo();

// Foo.prototype.constructor = function Gotcha(){};
// console.log(a1.constructor);
// console.log(a1.constructor.name);
// console.log(a1);

// var Foo = {};

// var a1 = Object.create(Foo);
// console.log(a1);
// Object.defineProperty(Foo, "constructor", {
//     enumerable: false,
//     value: function Gotcha(){}
// })
// console.log(a1)

// con
// console.log(a);
// a();
// var a = 3;
// function a(){
//   console.log(10);
// };
// console.log(a);
// a = 6;
// console.log(window);
// a();

//典型的（原型）面向对象风格
//  function Foo(who){
//    this.me = who;
//  }
//  Foo.prototype.identify = function(){
//    return "I am " + this.me;
//  }
// function Bar(who){
//   Foo.call(this, who);
// }
// Bar.prototype = Object.create(Foo.prototype);
// Bar.prototype.speak = function(){
//   alert("Hello, " + this.identify() + ".");
// }

// var b1 = new Bar("b1");
// var b2 = new Bar("b2");
// b1.speak();

// b2.speak();

//对象关联风格
// Foo = {
//   init: function(who){
//     this.me = who;
//   },
//   identify: function(){
//     return "I am" + this.me;
//   }
// };
// Bar = Object.create(Foo);
// Bar.speak = function(){
//   alert("Hello, " + this.identify() + ".");
// };

// var b1 = Object.create(Bar);
// b1.init("b1");
// var b2 = Object.create(Bar);
// b2.init();
// b1.speak();
// b2.speak();


//父类
// function Widget(width, height){
//   this.width = width || 50;
//   this.height = height || 50;
//   this.$elem = null;
// }

// Widget.prototype.render = function($where){
//   if(this.$elem){
//     this.$elem.css({
//       width: this.width + 'px',
//       height: this.height + 'px',
//     }).appendTo($where);
//   }
// };

// //子类
// function Button(width, height, label){
//   //调用“super”构造函数
//   Widget.call(this, width, height);
//   this.label = label || "Defualt";
//   this.$elem = $('<button>').text(this.label);
// }

// //让Button继承Widget
// Button.prototype = Object.create(Widget.prototype);
// //重写render
// Button.prototype.render = function($where){
//   Widget.prototype.render.call(this, $where);
//   this.$elem.click(this.Onclick.bind(this));
// };
// Button.prototype.Onclick = function(evt){
//   console.log("Button '" + this.label + "'clicked!");
// }

// $(document).ready(function(){
//   var $body = $(document.body);
//   var btn1 = new Button(125, 30, "Hello");
//   var btn2 = new Button(150, 30, "World!");

//   btn1.render($body);
//   btn2.render($body);
// })

// class Widget{
//   constructor(width, height){
//     this.width = width || 50;
//     this.height = height || 50;
//     this.$elem = null;
//   }
//   render($where){
//     if(this.$elem){
//       this.$elem.css({
//         width: this.width + 'px',
//         height: this.height + 'px',
//       }).appendTo($where);
//     }
//   }
// }

// class Button extends Widget{
//   constructor(width, height, label){
//     super(width, height);
//     this.label = label || "Default";
//     this.$elem = $("<button>").text(this.label);
//   }
//   render($where){
//     super($where);
//     this.$elem.click(this.onClick.bind(this));
//   }
//   onClick(evt){
//     console.log("Button '", +this.label+ "'clicked!")
//   }
// }
// $(document).ready(function(){
//   var $body = $(document.body);
//   var btn1 = new Button(125, 30, "Hello");
//   var btn2 = new Button(150, 30, "World!");

//   btn1.render($body);
//   btn2.render($body);
// })


//对象关联风格委托
// var Widget = {
//   init: function(width, height){
//     this.width = width || 50;
//     this.height = height || 50;
//     this.$elem = null;
//   },
//   insert: function($where){
//     if(this.$elem){
//       this.$elem.css({
//         width: this.width + 'px',
//         height: this.height + 'px'        
//       }).appendTo($where);
//     }
//   }
// };

// var Button = Object.create(Widget);
// Button.setup = function(width, height, label){
//   //委托调用
//   this.init(width, height);
//   this.label = label || "Default";
//   this.$elem = $("<button>").text(this.label);
// };
// Button.build = function($where){
//   //委托调用
//   this.insert($where);
//   this.$elem.click(this.onClick.bind(this));
// }

// Button.onClick = function(evt){
//   console.log("Button'" +this.label +"'clicked!" );
// }

// $(document).ready(function(){
//   var $body = $(document.body);
//   var btn1 = Object.create(Button);
//   btn1.setup(125,30,"Hello");
//   var btn2 = Object.create(Button);
//   btn2.setup(150,30,"World!");
//   btn1.build($body);
//   btn2.build($body);

// })

//父类
// function Controller(){
//   this.errors = [];
// }
// Controller.prototype.showDialog = function(title, msg) {
//   //给用户显示标题和消息
// };
// Controller.prototype.success = function(msg){
//   this.showDialog("Success", msg);
// };
// Controller.prototype.failure = function(err){
//   this.errors.push(err);
//   this.showDialog("Error", err);
// }
// //子类
// function LoginController(){
//   Controller.call(this);
// }
// //把子类关联到父类

// LoginController.prototype = Object.create(Controller.prototype);
// LoginController.prototype.getUser = function(){
//   return document.getElementById("login_username").value;
// };
// LoginController.prototype.getPassword = function(){
//   return document.getElementById("login_password").value;
// }
// LoginController.prototype.validateEntry  = function(user, pw){
//   user = user || this.getUser();
//   pw = pw || this.getPassword();
//   if(!(user && pw)){
//     return this.failure("Please enter a username & password!");
//   }else if(user.length < 5){
//     return this.failure("Please must be 5 + characters");
//   }
//   //如果执行到这里说明通过验证
//   return true;
// };
// //重写基础的failure()
// LoginController.prototype.failure = function(err){
//   //super调用
//   Controller.prototype.failure.call(this, "Login invalid:" +err);  
// }
// //子类
// function AuthController(login){
//   Controller.call(this);
//   //合成
//   this.login = login;
// }

// //把父类关联到子类
// AuthController.prototype = Object.create(Controller.prototype);

// AuthController.prototype.server = function(url, data){
//   return $.ajax({
//     url:url,
//     data:data
//   });
// }

// AuthController.prototype.checkAuth = function(){
//   var user = this.login.getUser();
//   var pw = this.login.getPassword();

//   if(this.login.validateEntry(user, pw)){
//     this.server("/check-auth",{
//       user:user,
//       pw:pw
//     })
//     .thien(this.success.bind(this))
//     .fail(this.failure.bind(this));
//   }
// };
// //重写基础的success()
// AuthController.prototype.success = function(){
//   //super调用
//   Controller.prototype.success.call(this, "Authenticated");
// };
// //重写failure()
// AuthController.prototype.failure = function(){
//   //super调用
//   Controller.prototype.failure.call(this, "Auth Failed:" + err);
// }

// var auth = new AuthController();
// auth.checkAuth(
//   //除了继承，我们还需要合成
//   new LoginController()
// );
// var LoginController = {
//   errors:[],
//   getUser: function(){
//     return document.getElementById("login_username").value;
//   },
//   getPassword: function(){
//     return document.getElementById("login_password").value;
//   },
//   validateEntry: function(user, pw){
//     user = user || this.getUser();
//     pw = pw || this.getPassword();
//     if(!(user && pw)){
//       return this.failure("Password must be 5+ characters");
//     }
//     // 如果执行到这里说明通过验证
//     return true;
//   },
//   showDialog: function(title, msg){
//     //给用户显示标题和消息
//   },
//   failure: function(err){
//     this.errors.push(err);
//     this.showDialog("Error", "Login invalid:" + err);
//   }

// };
// //让AuthController委托LoginController
// var AuthController = Object.create(LoginController);
// AuthController.errors = [];
// AuthController.checkAuth = function(){
//   var user = this.getUser();
//   var pw = this.getPassword();
//   if(this.validateEntry(user, pw)){
//     this.server("/check-auth", {
//       user: user,
//       pw:pw
//     })
//     .then(this.accepted.bind(this))
//     .fail(this.rejected.bind(this));
//   }
// };
// AuthController.server = function(url, data){
//   return $.ajax({
//     url: url,
//     data: data
//   });
// };
// AuthController.accepted = function(){
//   this.showDialog("Success", "Authenticated!")
// };
// AuthController.rejected = function(err){
//   this.failure("Auth Failed: " + err);
// };

// function Foo(){
  
// }
// Foo.prototype.something = function(){
//   console.log("b");
// }

// var a1 = new Foo();
// if(a1 instanceof Foo){
//   a1.something();
// }


//设计模式

// var CheckObject = function(){};
// CheckObject.prototype = {
//   checkName: function(){
//     return this;
//   },
//   checkPassword: function(){
//     return this;
//   },
//   checkEmail: function(){
//     return this;
//   }
// }

// var a = new CheckObject();
// a.checkName().checkPassword().checkEmail();

// var Book = function(id, name, price){
//   //私有属性
//   var num = 1;
//   //私有方法
//   function checkId(){};
//   //特权方法
//   this.getName = function(){};
//   this.getPrice = function(){};
//   this.setName = function(){};
//   this.setPrice = function(){};

//   //对象公有属性
//   this.id = id;
//   //对象公有方法
//   this.copy = function(){};
//   //构造器
//   this.setName(name);
//   this.setPrice(price);
// }
// //类静态公有属性（对象不能访问）
// Book.isChinese = true;
// //类静态公有方法（对象不能访问）
// Book.resetTime = function(){
//   console.log('new Time');
// }
// Book.prototype = {
//   //公有属性
//   isJSBook: false,
//   //公有方法
//   display:function(){}
// }

// var b = new Book(11, "Javascript设计模式",50);
// console.log(b.num); //undefined
// console.log(b.isChinese); //undefined
// console.log(b.id); //11
// console.log(b.isJSBook); //false

//类的静态变量通过闭包实现
// var Book = (function(){
//   //静态私有变量
//   var bookNum = 0;
//   //静态私有方法
//   function checkBook(name){};
//   // 返回构造函数
//   return function(newId, newName, newPrice){
//     // 私有变量
//     var name, price;
//     //私有方法
//     function checkID(id){
//       //特权方法
//       this.getName = function(){};
//       this.getPrice = function(){};
//       this.setName = function(){};
//       this.setPrice = function(){};
//       //公有属性
//       this.id = newId;
//       //公有方法
//       this.copy = function(){};
//       bookNum ++;
//       if(bookNum > 100){
//         throw new Error("我们仅出版100本书");
//       }
//       //构造器
//       this.setName(name);
//       this.setPrice(price);
//     }
//     //构建原型
//     _book.prototype = {
//       isJSBook: false,
//       display:function(){}
//     };
//     return _book;
//   }
// })();

// Book.prototype = {
//   //静态公有属性
//   isJsBook: false,
//   //静态公有方法
//   display: function(){}
// }

//图书安全类
// var Book = function(title, time, type){
//   //判断执行过程中this是否是当前这个对象（如果是说明是用new创建的）
//   if(this instanceof Book){
//     this.title = title;
//     this.time = time;
//     this.type = type;
//   }else{
//     return new Book(title, time, type);
//   }
// }
// var book = Book('JavaScript','2014','js');
// console.log(book);
// console.log(book.title);
// console.log(book.time);
// console.log(book.type);
// console.log(window.title);
// console.log(window.time);
// console.log(window.type);

// 类式继承
// 声明父类
// function SuperClass(){
//   this.superValue = true;
// }
// // 为父类添加共有的方法
// SuperClass.prototype.getSuperValue = function(){
//   return this.superValue;
// }
// // 声明子类
// function SubClass(){
//   this.subValue = false;
// }
// // 继承父类
// SubClass.prototype = new SuperClass()
// // 为子类添加共有的方法
// SubClass.prototype.getSubValue = function(){
//   return this.subValue;
// }
// var instance = new SubClass();
// console.log(instance.getSuperValue());
// console.log(instance.getSubValue());

// console.log(instance instanceof SuperClass);
// console.log(instance instanceof  SubClass);
// console.log(SubClass instanceof SuperClass);
//缺点，实例之间相互影响，无法向父类传递参数


//构造函数继承
//声明父类
// function SuperClass(id){
//   //引用类型共有属性
//   this.books = ['JavaScript', 'html', 'css'];
//   //值类型共有属性
//   this.id = id;
// }
// //父类声明原型方法
// SuperClass.prototype.showBooks = function(){
//   console.log(this.books);
// }
// //声明子类
// function SubClass(id){
//   //继承父类
//   SuperClass.call(this, id);
// }
// //创建第一个子类的实例
// var instance1  = new SubClass(10);
// var instance2 = new SubClass(11);

// instance1.books.push("设计模式");
// console.log(instance1.books);
// console.log(instance1.id);
// console.log(instance2.books);
// console.log(instance2.id);
// instance1.showBooks();// TypeError
//缺点父类原型方法没有被子类继承


//组合是继承
//声明父类
// function SuperClass(name){
//   // 值类型共有属性
//   this.name = name;
//   // 引用类型共有属性；
//   this.books = ["html", "css", "JavaScript"];
// }
// //父类原型共有方法
// SuperClass.prototype.getName = function(){
//   console.log(this.name);
// }
// // 声明子类
// function SubClass(name, time){
//   //构造函数式继承父类name属性
//   SuperClass.call(this, name);
//   //子类中新增共有属性
//   this.time = time;
// }
// //类式继承 子类原型继承父类
// SubClass.prototype = new SuperClass();
// //子类原型方法
// SubClass.prototype.getTime = function(){
//   console.log(this.time);
// }

// var instance1 = new SubClass("js book", 2017);
// instance1.books.push("设计模式");
// console.log(instance1.books);
// instance1.getName();
// instance1.getTime();

// var instance2  = new SubClass("css book", 2016);
// console.log(instance2.books);
// instance2.getName();
// instance2.getTime(); 
//缺点调用两次父类


//原型式继承
// function inheritObject(o){
//   //声明一个过度函数对象
//   function F(){}
//   // 过度对象的原型继承父父对象
//   F.prototype = o;
//   // 返回过度对象的一个实例，该实例的原型继承了父对象
//   return new F();
// }

// var book = {
//   name: "js book",
//   alikeBook: ["css book", "html book"]
// };
// var newBook = inheritObject(book);
// newBook.name = "ajax book";
// newBook.alikeBook.push("xml book");

// var otherBook = inheritObject(book);
// otherBook.name = "flash book";
// otherBook.alikeBook.push("as book");

// console.log(newBook.name);
// console.log(newBook.alikeBook);
// console.log(otherBook.name);
// console.log(otherBook.alikeBook);

// console.log(book.name);
// console.log(book.alikeBook);
//缺点 跟类式继承一样 引用类型的属性被共用

//寄生式继承
// function inheritObject(o){
//     //声明一个过度函数对象
//     function F(){}
//     // 过度对象的原型继承父父对象
//     F.prototype = o;
//     // 返回过度对象的一个实例，该实例的原型继承了父对象
//     return new F();
//   }
// //声明基对象
// var book = {
//   name: "js book",
//   alikeBook: ["css book", "html book"]
// };
// function createBook(obj){
//   //通过原型继承方式创建新对象
//   var o = new inheritObject(obj);
//   //拓展新对象
//   o.getName = function(){
//     console.log(name);
//   };
//   //返回拓展后的新对象
//   return o;
// }

// //寄生组合式继承

// function inheritPrototype(subClass, superClass){
//   //复制一份父类的原型副本保存在变量中
//   var p = inheritObject(superClass.prototype);
//   //修正因为重写子类原型导致子类的constructor属性被修改
//   p.constructor = subClass;
//   //设置子类的原型
//   subClass.prototype = p;
// }

// //定义父类
// function SuperClass(name){
//   this.name = name;
//   this.colors = ["red", "blue", "green"];
// }
// //定义父类原型方法
// SuperClass.prototype.getName = function(){
//   console.log(this.name);
// }
// //定义子类
// function SubClass(name, time){
//   //构造函数式继承
//   SuperClass.call(this, name);
//   //子类新增属性
//   this.time = time;
// }
// //寄生式继承父类原型
// inheritPrototype(SubClass, SuperClass);
// //子类新增原型方法
// SubClass.prototype.getTime = function(){
//   console.log(this.time);
// }
// //创建两个测试方法
// var instance1 = new SubClass("js book", 2017);
// var instance2 = new SubClass("css book", 2016);

// instance1.colors.push("black");
// console.log(instance1.colors);
// console.log(instance2.colors);
// instance2.getName();
// instance2.getTime();


// //单继承 属性复制
// var extend = function(target, source){
//   //遍历源对象中的属性
//   for(var property in source){
//     //将源对象中的属性复制到目标对象中
//     target[property] = source[property];
//   }
//   return target;
// }

// var book = {
//   name:'JavaScript 设计模式',
//   alike: ['css', 'html', 'JavaScript']
// };
// var anotherBook = {color: 'blue'};

// extend(anotherBook, book);
// console.log("anotherbook:"+anotherBook.name);
// console.log("anotherbook:"+anotherBook.alike);

// anotherBook.alike.push('ajax');
// anotherBook.name = '设计模式';
// console.log("AnotherBook:"+anotherBook.name);
// console.log("AnotherBook:"+anotherBook.alike);
// console.log("Book:"+book.name);
// console.log("Book:"+book.alike);


// console.log("----多继承----");

// //多继承 属性复制
// Object.prototype.mix = function(){
//   var i = 1,                  //从第二个参数起为被继承的对象
//       len = arguments.length, //获取参数长度
//       target = arguments[0],  //第一个对象为目标对象
//       arg;                    // 缓存参数对象
//   //遍历被继承的对象
//   for(; i < len; i++){
//     //缓存当前对象
//     arg = arguments[i];
//     // 遍历被继承对象中的属性
//     for(var property in arg){
//       // 将被继承对象中的属性复制到目标对象中
//       target[property] = arg[property];
//     }   
//   }
//   return target;
// }
// var book1 = {
//   name:'JavaScript 函数式编程',
//   alike: ['a', 'b', 'c']
// };
// var book2 = {
//   name: 'THE WIND OF GONE',
//   alike: ['d', 'e', 'f']
// };
// var otherBook = {color:'yellow'};

// otherBook.mix(book1, book2);
// console.log(otherBook);


//工厂模式
// console.log("安全的工厂方法");
// //安全模式创建的工厂类
// var Factory = function(type, content){
//   if(this instanceof Factory){
//     var s = new this[type](content);
//     return s;
//   }
//   else{
//     return new Factory(type, content);
//   }
// };
// // 工厂原型中设置穿件所有类型数据对象的基类
// Factory.prototype = {
//   Java: function(content){},
//   JavaScript: function(content){},
//   UI: function(content){
//     this.content = content;
//     (function(content){
//       var div = document.createElement('div');
//       div.innerHTML = content;
//       div.style.border = '1px solid red';
//       document.getElementById('container').appendChild(div);
//     })(content);
//   },
//   PHP: function(content){}
// }

//抽象工厂模式
//抽象工厂方法
// var VehicleFactory = function(subType, superType){
//   // 判断抽象工厂中是否有该抽象类
//   if(typeof VehicleFactory[superType] === 'function'){
//     // 缓存类
//     function F(){};
//     // 继承父类属性和方法
//     F.prototype = new VehicleFactory[superType]();
//     // 将子类constructor 指向子类
//     subType.constructor = subType;
//     // 子类原型继承父类
//     subType.prototype =  new F();
//   }else{
//     //不存在该抽象类抛出错误
//     throw new Error('未创建该抽象类');
//   }
// }
// //小汽车抽象类
// VehicleFactory.Car = function(){
//   this.type = 'Car';
// };
// VehicleFactory.Car.prototype = {
//   getPrice: function(){
//     return new Error('抽象方法不能调用');
//   },
//   getSpeed: function(){
//     return new Error('抽象方法不能调用');
//   }
// };
// //公交车抽象类
// VehicleFactory.Bus = function(){
//   this.type = 'Bus';
// }
// VehicleFactory.Bus.prototype = {
//   getPrice: function(){
//     return new Error('抽象方法不能调用');
//   },
//   getPassengerNum: function(){
//     return new Error('抽象方法不能调用');
//   }
// };
// //货车抽象类
// VehicleFactory.Truck = function(){
//   this.type = 'Truck';
// }
// VehicleFactory.Truck.prototype = {
//   getPrice: function(){
//     return new Error('抽象方法不能调用');
//   },
//   getTrainload: function(){
//     return new Error('抽象方法不能调用');
//   }
// }

// //宝马汽车子类
// var BMW = function(price, speed){
//   this.price = price;
//   this.speed = speed;
// }
// //抽象工厂实现对Car抽象类的继承
// VehicleFactory(BMW, 'Car');
// BMW.prototype.getPrice = function(){
//   return this.price;
// }
// BMW.prototype.getSpeed = function(){
//   return this.speed;
// }
// //兰博基尼汽车子类
// var Lamborghini = function(price, speed){
//   this.price = price;
//   this.speed = speed;
// }
// //抽象工厂实现对Car抽象类的继承
// VehicleFactory(Lamborghini, 'Car');
// Lamborghini.prototype.getPrice = function(){
//   return this.price;
// }
// Lamborghini.prototype.getSpeed = function(){
//   return this.speed;
// }

// //宇通汽车子类
// var YUTONG = function(price, passenger){
//   this.price = price;
//   this.passenger = passenger;
// }
// //抽象工厂实现对Bus抽象类的继承
// VehicleFactory(YUTONG, 'Bus');
// YUTONG.prototype.getPrice = function(){
//   return this.price;
// };
// YUTONG.prototype.getPassengerNum = function(){
//   return this.passenger;
// };

// //奔驰汽车子类
// var BenzTruck = function(price, trainLoad){
//   this.price = price;
//   this.trainLoad = trainLoad;
// }
// //抽象工厂实现对Truck抽象类的继承
// VehicleFactory(BenzTruck, 'Truck');
// BenzTruck.prototype.getPrice = function(){
//   return this.price;
// }
// BenzTruck.prototype.getTrainload = function(){
//   return this.trainLoad;
// }

// var truck = new BenzTruck(100000,1000);
// console.log(truck.getPrice());
// console.log(truck.type);


// //建造者模式
// console.log("建造者模式");
// var Human = function(param){
//   //技能
//   this.skill = param && param.skill || '保密';
//   //兴趣爱好
//   this.hobby = param && param.hobby || '保密';
// }
// //类人原型方法
// Human.prototype = {
//   getSkill: function(){
//     return this.skill;
//   },
//   getHobby: function(){
//     return this.hobby;
//   }
// }
// //实例化姓名类
// var Named = function(name){
//   var that = this;
//   //构造器
//   //构造函数解析姓名的姓与名
//   (function(name, that){
//     that.wholeName = name;
//     if(name.indexOf(' ') > -1){
//       that.FirstName = name.slice(0, name.indexOf(' '));
//       that.secondName = name.slice(name.indexOf(' '));
//     }
//   })(name, that);
// }
// //实例化职位类
// var Work = function(work){
//   var that = this;
//   //构造器
//   //构造函数中通过传入的职位特征来设置相应职位以及描述
//   (function(work, that){
//     switch(work){
//       case 'code':
//             that.work = '工程师';
//             that.workDescript = '每天沉醉于编程';
//             break;
//       case 'UI':
//       case 'UE':
//             that.work = '设计师';
//             that.workDescript = '设计更似一种艺术';
//             break;
//       case 'teach':
//             that.work = '教师';
//             that.workDescript = '分享 也是一种快乐';
//             break;
//       default:
//             that.work = work;
//             that.workDescript = '对不起，我们还不清楚您所选职位的相关描述';
//     }
//   })(work, that);
// }
// //更换期望的职位
// Work.prototype.changeWork = function(work){
//   this.work = work;
// }
// Work.prototype.changeDescript = function(setence){
//   this.changeDescript = setence;
// }

// //应聘者建造者
// var Person = function(name, work){
//   //创建应聘者缓存对象
//   var _person = new Human();
//   //创建应聘者姓名解析对象
//   _person.name = new Named(name);
//   //创建应聘者期望职位
//   _person.work = new Work(work);
//   return _person;  
// }

// var person = new Person('xiao ming', 'code');
// console.log(person.skill);
// console.log(person.name.FirstName);
// console.log(person.work.work);
// console.log(person.work.workDescript);
// person.work.changeWork('UI');
// console.log(person.work.work);

//原型模式
//图片轮播类
// var LoopImages = function(imgArr, container){
//   this.imagesArray = imgArr; // 轮播图片数组
//   this.container = container; //轮播图片容器
//   this.createImage = function(){} //创建轮播图片
//   this.changeImage = function(){} //切换下一张图片
// }

// //上下滑动切换类
// var SlideLoopImg = function(imgArr, container){
//   //构造函数继承图片轮播类
//   LoopImages.call(this, imgArr, container);
//   //重写继承的切换下一张图片方法
//   this.changeImage = function(){
//     console.log('SlideLoopImg changeImage function');
//   }
// }
// //渐隐切换类
// var FadeLoopImg = function(imgArr, container, arrow){
//   LoopImages.call(this, imgArr, container);
//   //切换箭头私有变量
//   this.arrow = arrow;
//   this.changeImage = function(){
//     console.log('FadeLoopImg changeImage function');
//   }
// }

// //实例化一个渐隐切换图片类
// var fadeImg = new FadeLoopImg([
//       '01.jpg',
//       '02.jpg',
//       '03.jpg',
//       'o4.jpg'
//     ],'slide',[
//       'left.jpg',
//       'right.jpg'
//     ]);
// fadeImg.changeImage();

//图片轮播类
var LoopImages = function(imgArr, container){
  this.imagesArray = imgArr;
  this.container = container; 
}
LoopImages.prototype = {
  //创建轮播图片
  createImage: function(){
    console.log('LoopImages createImage function');
  },
  //切换下一张图片
  changeImage: function(){
    console.log('LoopImages changeImage function');
  },
  getImageLength: function(){
    return this.imagesArray.length;
  }
}
//上下滑动切换类
var SlideLoopImg = function(imgArr, container){
  //构造函数继承图片轮播类
  LoopImages.call(this, imgArr, container);
}
SlideLoopImg.prototype = new LoopImages();
//重写继承的切换下一张图片方法
SlideLoopImg.prototype.changeImage = function(){
  console.log('SlideLoopImg changeImage function');
}

//渐隐类切换
var FadeLoopImg = function(imgArr, container, arrow){
  LoopImages.call(this, imgArr, container);
  //切换箭头私有变量
  this.arrow = arrow;
}

FadeLoopImg.prototype = new LoopImages();
FadeLoopImg.prototype.changeImage = function(){
  console.log('FadeLoopImg changeImage function');
}
FadeLoopImg.prototype.getContainer = function(){
  return this.container;
}
//测试用例
var fadeImg = new FadeLoopImg([
        '01.jpg',
        '02.jpg',
        '03.jpg',
        'o4.jpg'
      ],'slide',[
        'left.jpg',
        'right.jpg'
      ]);
console.log(fadeImg.container);
console.log(fadeImg.getImageLength());
console.log(fadeImg.getContainer());
fadeImg.changeImage();

