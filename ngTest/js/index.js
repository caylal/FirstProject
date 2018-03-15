$().ready(function(){
        document.body.onselectstart = document.body.ondrag = function(){return false;}
        init();
        $(document).on('click', '.desk-menu-ul li', function(e){
            e.stopPropagation();
            var _this = $(this);
            var index = _this.index();
            _this.addClass('active').siblings().removeClass('active');
            var tab = $('.desk-nav').find("section").eq(index);
            tab.addClass('focus').siblings().removeClass('focus');            
        })
        // 展开导航
        $('#js-nav-btn').click(function(e){
            openNav();
            event.stopPropagation();
        }); 
        
        $(document).click(function(){
            var div = $('.desk-nav');
            var isOpen = div.css('display');
            if(isOpen == "block") {
                div.removeClass('focus');
                $('.nav-btn').addClass('btn-focus').removeClass('btn-focused') 
            }
        });
   

        $(document).on('mouseover','.desk-menu-content li',function(){
            $(this).find('.img-hover').addClass('isHover').siblings().removeClass('isHover');
        });
        $(document).on('mouseout','.desk-menu-content li',function(){
            $('.img-hover').removeClass('isHover');
        });
        //  点击菜单
        $(document).on('click', '.desk-menu-content li', function () {
           
            var data = $(this).data("obj");           
            createWin(data);                    
        })
    
        function openNav() {
            var div = $('.desk-nav');
            var isOpen = div.css('display');
            (isOpen == "none") ? div.addClass('focus') : div.removeClass('focus');
            (isOpen == "none") ? $('.nav-btn').addClass('btn-focused').removeClass('btn-focus') : $('.nav-btn').addClass('btn-focus').removeClass('btn-focused');
        }
        // 窗口点击
        $(document).on('click','.window-container',function(){           
            var $this = $(this);
            activeWindow($this);           
        });
        // 任务栏点击
        $(document).on('click', '.task-window li', function(){
            var $this = $(this);

            taskWindow($this);
        });        

        $(".scrollbar").mCustomScrollbar({
            theme: "minimal-dark"
        });      
        var dialogs = new winDialog();
        $(document).on('click','#notify',function(){
            var _this = $(this);
            var eleBack = _this.parents('.window-frame');
             dialogs.notify("消息", "提示消息", {button:"Y", backbody: eleBack},function(){
                console.log("提示消息");
            })
        });
        $(document).on('click','#error',function(){
            var _this = $(this);
            var eleBack = _this.parents('.window-frame');
            dialogs.error("错误", "错误消息",{button:"Y", backbody: eleBack},function(){
                console.log("错误消息！");
            })
        });
        $(document).on('click','#confirm',function(){
            var _this = $(this);
            var eleBack = _this.parents('.window-frame');
            dialogs.confirm("消息", "是否确认", {button:"YN", backbody: eleBack},function(){
                console.log("确认消息");
            },function(){
                console.log("取消消息");
            });
        });
        $(document).on('click','#prompt',function(){
            var _this = $(this);
            var eleBack = _this.parents('.window-frame');
            dialogs.prompt("输入内容","我是输入的内容",{button:"YN", backbody: eleBack},function(result){                
                console.log(result);
            },function(){
                console.log("取消输入");
            });
        });
        $(document).on('click','#openwindow1',function(){
            var _this = $(this);
            var eleBack = _this.parents('.window-frame');
            dialogs.create("ng/home.html",function(result){
                console.log("模态窗口");
            },undefined,{title:"弹出窗口", isModal:true, button:"YN", backbody: eleBack});
        });
        $(document).on('click','#openwindow2',function(){
            var _this = $(this);
            var eleBack = _this.parents('.window-frame');
            dialogs.create("ng/home.html",function(result){
                console.log("模态窗口");
            },undefined,{title:"弹出窗口", isModal:false, button:"YN", backbody: eleBack});
        });
        $(document).on('click','#openwindow4',function(){
            var _this = $(this);
            var eleBack = _this.parents('.window-frame');
            dialogs.openWindow("login.html",function(result){
                console.log("模态窗口");
            },undefined,{title:"弹出窗口"});
            return false;
        });

 });







    



