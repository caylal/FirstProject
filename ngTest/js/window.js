    var winStack = [];
    var modalStack = [];
    var activeWin = undefined;
    var windowParent = $('.content'); 
    var screenHeight = windowParent.height();
    var screenWidth = windowParent.width();
    var dragminWidth = 250, dragminHeight = 120;
    var okbtn = '<button class="dialogs-close regbtn">关闭</button>';
    var cancel = '<button class="dialogs-cancel regbtn" >取消</button>';
    var textarea = '<textarea class="form-control" rows="2" id="prompt-msg" style="resize:none;"></textarea>'
    var count = 0;
    function TemplateEngine(html, options){
        var re = /<%([^<%]+)?%>/g;
        var reExp = /(^()?(if|for|else|switch|case|break|{|}))(.*)?/g;
        var code = 'var r=[];\n', cursor = 0, match;
        var add = function(line, js){
            js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
                (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
            return add;
        }
        while(match = re.exec(html)){
            add(html.slice(cursor, match.index))(match[1], true);
            cursor = match.index + match[0].length;
        }
        add(html.substr(cursor, html.length - cursor ));
        code += 'return r.join("");';
        return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
    }
    function FormatModel(str,model){
        for(var k in model){
            var re = new RegExp("{"+k+"}","g");
            str = str.replace(re,model[k]);
        }
        return str;
    }
    function winDialog(){}
    winDialog.prototype = {
        constructor: winDialog,
        error: function(title,msg,options,callback){              
            createWin({
                url:"error",
                style: "glyphicon glyphicon-warning-sign",
                isModal: true,
                title:title,
                data: msg,
                width: options.width || 350,
                height: options.height || 150,
                button: options.button || 'YN',
                backbody: options.backbody,            
            });
            btn_OK(callback);
        },
        notify: function(title, msg, options, callback){      
            createWin({
                url: "notify",
                style: "glyphicon glyphicon-info-sign",
                isModal: true,
                title: title,
                data: msg,
                width: options.width || 350,
                height: options.height || 150,
                button: options.button || 'YN',
                backbody: options.backbody,
            });
            btn_OK(callback);
        },
        confirm: function(title, msg, options, ok_callback, cancel_callback){       
            createWin({
                url: "confirm",
                style: "glyphicon glyphicon-check",
                isModal: true,
                title: title,
                data: msg,
                width: options.width || 350,
                height: options.height || 150,
                button: options.button || 'YN',
                backbody: options.backbody,
            });
            btn_OK(ok_callback);
            btn_Cancel(cancel_callback);    
        },
        prompt: function(title, value, options, ok_callback, cancel_callback){
            createWin({
                url: "prompt",
                style: "glyphicon glyphicon-info-sign",
                isModal: true,
                title: title,
                value: value,
                width: options.width || 350,
                height: options.height || 150,
                button: options.button || 'YN',
                backbody: options.backbody,
            });
            btn_OK(ok_callback);
            btn_Cancel(cancel_callback);
        },
        create: function(url, callback, data, options, rcallback){
            createWin({
                url: url,
                isModal: (options.isModal == false) ? false : true,
                data: data,
                width: options.width || 600,
                height: options.height || 450,
                title: options.title || '',
                button: options.button || 'YN',
                backbody: options.backbody,
            });
            btn_Cancel(rcallback);
        },
        openWindow: function(url,callback,data,option){
            var opt = {
                url: url,
                data: data,
                size: option.size,
                title: option.title,
                img: option.img
            };
            createWin(opt);
        }
    }
    function getTopModal(show){
        if(winStack.length > 0){
            var result = undefined;
            $.each(winStack, function(index,obj){
                if(!show || obj.isShow === show){
                    if(!result){
                        result = obj;
                    }
                    else{
                        if(ojb.index > result.index){
                            result = obj;
                        }
                    }
                }
            });
            return result;
        }
    }
    function winModal(options, index){
        $.extend(this,options);    
        this.id = "windows_" + count++,
        this.isActive = true;
        this.isShow = true;  
        this.width = options.width || 900;
        this.height = options.height || 650;   
        this.button = options.button;
        this.index = index || 100;   
    }
    
    function createWin(options){   
        var modal = undefined;
        var winContant = undefined;
        if(activeWin){
            winContant = $('#'+activeWin.id);
        }    
        if(!options.isModal){
            if(options.isModal == false){
               
            }
            else{
                modal = getModal(options.url);
                if(modal){
                    activeModal(modal); 
                    winContant = $('#'+activeWin.id);              
                    var taskBar = $('.task-window li[window="'+activeWin.id+'"]');
                    setActiveWin(winContant, taskBar);
                }
            }
        }   
       
        if(!modal){             
            var index = undefined;
            if(options.isModal || options.isModal === false){
                index = 100000;
            }
            else{           
                var topwin = getTopModal();
                index = topwin ? topwin.index + 10 : 100;
            }       
            modal = new winModal(options, index);
           if(options.isModal || options.isModal === false){
               var bakwidth = options.backbody.width() / 2;
               if(!modal.position){
                   modal.position = {
                       left: bakwidth - modal.width / 2,
                       top: 100
                   }
               }
                var args = {
                   "id": modal.id,
                   "url": modal.url,
                   "index": modal.index,
                   "title": modal.title,
                   "msg": modal.data || '',
                   "width": modal.width,
                   "height": modal.height,
                   "left": modal.position.left,
                   "top": modal.position.top,                             
                }           
                var eleBack = FormatModel(backdrop, args);
                var elebak = winContant.find('.window-frame');
                var eleBody = options.backbody || elebak; 
                if(options.isModal){
                    eleBody.append(eleBack);
                }           
                var eleConten = FormatModel(tmp_dialogs, args);
                eleBody.append(eleConten);
                var thisDialog=$('#'+modal.id);
                var icon = thisDialog.find('.dialog-icon');
                 switch(modal.button){
                    case "Y": thisDialog.find('.dialog-btn').append(okbtn);
                        break;
                    case "N": thisDialog.find('.dialog-btn').append(cancel);
                        break;
                    default: thisDialog.find('.dialog-btn').append(cancel,okbtn);
                        break;
                }
                switch(modal.url){
                    case "error" : 
                        icon.addClass('error');
                        thisDialog.removeClass('dialog-regbk').addClass('dialog-errorbk');
                        thisDialog.find('.dialog-btn button').removeClass('regbtn').addClass('errorbtn');
                        break;
                    case "notify":icon.addClass('notify');
                        break;
                    case "confirm":icon.addClass('confirm');
                        break;
                    case "prompt":
                        icon.addClass('prompt');
                        thisDialog.find('.dialog-content').append(textarea);
                        thisDialog.find('#prompt-msg').val(options.value);
                    default:
                        $('.dialog-header').addClass('notify-header');
                        var dialog_content = $('.dialog-content');
                        dialog_content.load(options.url,function(){
                            console.log("加载完成！");
                             dialog_content.mCustomScrollbar({
                                  theme: "minimal-dark"
                             })
                        });
    
               }           
               modalStack.push(modal);         
               bindDragDialog(thisDialog, modal);
           }
            else{
                var t = getTopModal(true);
                if(t && !modal.position){
                    modal.position = {
                        left: t.position.left + 50,
                        top: t.position.top + 100,
                    };
                }
                else{
                    modal.position = {left:350, top:100}
                }
                var wintpl = {
                    "id":modal.id,
                    "url":modal.url,
                    "width": modal.width,
                    "height": modal.height,
                    "top": modal.position.top,
                    "left": modal.position.left,           
                    "index": index,
                    "title": modal.name,
                    "img": modal.img,
                }
                
                winStack.push(modal);
                var container = $('.desk-content');
                var winHtml = FormatModel(windowTemp, wintpl);
    
                var taskBar = $('.task-window');
                var taskHtml = FormatModel(taskTemp, wintpl);       
                taskBar.children().removeClass('isActive').addClass('noActive');
                taskBar.append(taskHtml);        
                container.append(winHtml);
                activeModal(modal);
                winContant = $('#' + modal.id);       
                var content = winContant.find('.window-url');
                    
                content.load(options.url,function(){
                    console.log("Load was performed");
                    winContant.find('.window-frame').mCustomScrollbar({
                        theme: "minimal-dark"
                    })
                });
                bindDragWindow(winContant,modal);
                bindResizeEvent(winContant);
            }
            
        }   
       
    }
    function btn_OK(callback){
        $('.dialogs-close').on('click',function(){
            var _this = $(this);
            var value = $('#prompt-msg').val();        
            closeDialog(_this);
            if(typeof(callback) == 'function'){
                if(value){
                    callback(value);
                }
                else{
                    callback();
                }
                
            }
        })
    }
    function btn_Cancel(callback){
        $('.dialogs-cancel').on('click',function(){
            var _this = $(this);
            closeDialog(_this);
            if(typeof(callback) == 'function'){
                callback();
            }
        })
        
    
    }
    function closeDialog(btn) {
        var $this = btn;
        var parent = $this.parents('.dialog');
        var prev = parent.prev('.backdrop');
        parent.remove();
        if(prev.length > 0){
            prev.remove();
        }    
    }
    // 当前窗口
    function activeWindow(data){
        var modal = getWindow(data[0].id);
        var taskbar = $('.task-window li[window="'+data.attr('window')+'"]');    
        activeModal(modal);
        setActiveWin(data, taskbar);
        
    }
    // 任务栏点击
    function taskWindow(data){
        var winContant = $('#'+data.attr('window'));
        var isOpen = winContant.css('display');
        if(isOpen === "none"){
            winContant.css('display','block');
        }    
        var modal = getWindow(winContant[0].id);
        activeModal(modal);
        setActiveWin(winContant, data);
    }
    // 设置当前窗口，任务栏样式
    function setActiveWin(win, bar){
        win.css('z-index', activeWin.index);
        bar.siblings().removeClass('isActive').addClass('noActive');
        bar.addClass('isActive').removeClass('noActive');
    }
    function getTopModal(show){
        if(winStack.length > 0){
            var result = undefined;
            $.each(winStack, function(index,obj){
                if(!show || obj.isShow === show){
                    if(!result){
                        result = obj;
                    }
                    else{
                        if(obj.index > result.index){
                            result = obj;
                        }
                    }
                }
            });
            return result;
        }
    }
    function activeModal(modal){
        if(activeWin){
            activeWin.isActive = false;
            if(modal){
                modal.index = activeWin.index + 20;
            }
        }
        if(modal){
            modal.isActive = true;
        }
        activeWin = modal;
    }
    function getWindow(id){
        if(winStack.length > 0){
            var result = undefined;
            $.each(winStack,function(index,obj){
                if(obj.id == id){
                    result = obj;                
                }
            })
            return result;
        }
    }
    function getModal(url){
        if(winStack.length > 0){
            for(let i = 0; i < winStack.length; i++){
                if(url === winStack[i].url){
                    return winStack[i];
                }
            }
        }
    }
    function removeWinStack(modal){
        for(let i = 0; i<winStack.length; i++){
            if(modal.url === winStack[i].url){
                winStack.splice(i,1);
                break;
            }
        }
    }
    // 窗口拖拽
    function bindDragWindow(drag, modal){
        var starX = 0,starY = 0;   
        var min = drag.find('.min');
        var max = drag.find('.max');
        var revert = drag.find('.revert');
        var close = drag.find('.win-close');
        var titleBar = drag.find('.title-bar');         
        titleBar.css('cursor', 'move');
        // 鼠标按下
        bindDragEvent(titleBar, drag, modal,screenHeight,screenWidth);
        min.click(function (e) {
            e.stopPropagation();
             drag.hide();
            var taskBar = $('.task-window li[window="'+drag[0].id+'"]');
            taskBar.addClass('noActive').removeClass('isActive');
            modal.index = 100;
            var topWin = getTopModal(true);
            activeWin = topWin;
            if(topWin){
                var activeBar = $('.task-window li[window="'+topWin.id+'"]');
                activeBar.addClass('isActive').removeClass('noActive');
            }            
        });
    
        close.click(function (e) {
            // 阻止冒泡
            e.stopPropagation();
            removeWinStack(modal);
            drag.remove();
            var taskBar = $('.task-window li[window="'+drag[0].id+'"]');            
            taskBar.remove();
            var topWin = getTopModal(true);
            activeModal(topWin);
            if(topWin){
                var activeBar = $('.task-window li[window="'+topWin.id+'"]');
                activeBar.addClass('isActive').removeClass('noActive');
            }
        });
    
        max.click(function () {
            var $this = $(this);            
            var width = windowParent.width() - 2;
            var height = windowParent.height() - 2;
            drag.css({
                'width': width + 'px',
                'height': height + 'px',
                'top': '0px',
                'left': '0px'
            });
            $this.css('display', 'none');
            revert.css('display', 'block');
        });
    
        revert.click(function () {
            var $this = $(this);             
            drag.css({
                'width': modal.width + 'px',
                'height': modal.height + 'px',
                'top': modal.position.top + 'px',
                'left': modal.position.left + 'px'
            });
            $this.css('display', 'none');
            max.css('display', 'block');
        });
    
        min.mousedown(function(event){
            return false;
        });
        max.mousedown(function(event){
            return false;
        })
        close.mousedown(function(event){ 
            return false;
        })
        revert.mousedown(function(event){
            return false;
        })
            
    };
    // 重置窗口大小
    function bindResizeEvent(win){
        var r = win.find('.resizeR'),
            t = win.find('.resizeT'),
            l = win.find('.resizeL'),
            b = win.find('.resizeB'),
            rb = win.find('.resizeBR'),
            rt = win.find('.resizeTR'),
            lt = win.find('.resizeLT'),
            lb = win.find('.resizeLB');
        //四角
        resize(win, lt, true, true, false, false);
        resize(win, rt, false, true, false, false);
        resize(win, rb, false, false, false, false);
        resize(win, lb, true, false, false, false);
        //四边
        resize(win, l, true, false, false, true);
        resize(win, t, false, true, true, false);
        resize(win, r, false, false, false, true);
        resize(win, b, false, false, true, false);
    }
    function resize(oParent, handle, isLeft, isTop, lockX, lockY){
        var drag = false
        handle.mousedown(function(evt){
            var event = evt || window.event;
            var disX =  event.clientX - handle[0].offsetLeft;
            var disY = event.clientY - handle[0].offsetTop;
            var iParentTop = oParent[0].offsetTop;
            var iParentLeft = oParent[0].offsetLeft;
            var iParentWidth = oParent[0].offsetWidth;
            var iParentHeight = oParent[0].offsetHeight;
                
            drag = true;
            $(document).bind('mousemove', function(evt) {
                if (drag) {
                    var e = evt || window.event;
                    var iL = e.clientX <= 10 ? -iParentLeft : e.clientX - disX;                
                    var iT = e.clientY <= 72 ? -iParentTop : e.clientY - disY;                            
                    var maxW = screenWidth - oParent[0].offsetLeft - 2;
                    var maxH = screenHeight - oParent[0].offsetTop - 2;
                    var iW = isLeft ? iParentWidth - iL : handle[0].offsetWidth + iL;
                    var iH = isTop ? iParentHeight - iT : handle[0].offsetHeight + iT; 
                      
                    iW < dragminWidth ? (iW = dragminWidth) : (isLeft && oParent.css('left',iParentLeft + iL + "px"));
                    iW > maxW && (iW = maxW);
                    lockX || oParent.css('width', iW + "px" );
                    iH < dragminHeight ? (iH = dragminHeight) : (isTop && oParent.css('top', iParentTop + iT + "px"));
                    iH > maxH && (iH = maxH);                 
                    lockY || oParent.css('height', iH + "px" );
    
                    //if((isLeft && iW == dragminWidth) || (isTop && iH == dragminHeight))  $(document).unbind('mousemove');
    
                }
            });
            $(document).bind('mouseup', function() {
                drag = false;
                $(document).unbind('mousemove');
                $(document).unbind('mouseup');
            });
        });
    }
    function bindDragEvent(bar, win, modal, s_height, s_width){
         var isDraging = false;
         bar.mousedown(function (e) {
            var e = e || window.event;
            starX = e.pageX - win[0].offsetLeft;
            starY = e.pageY - win[0].offsetTop;
            isDraging = true;
    
            $(document).mousemove(function (e) {
                var e = e || window.event;
                var moveX = e.pageX - starX;
                var moveY = e.pageY - starY;
                // 设置可拖动范围
                var maxX = s_width - win[0].offsetWidth;
                var maxY = s_height - win[0].offsetHeight;
                if (isDraging) {
                    moveX <= 0 && (moveX = 0);
                    moveY <= 0 && (moveY = 0);
                    moveX >= maxX && (moveX = maxX);
                    moveY >= maxY && (moveY = maxY);
                    win.css({
                        'left': moveX + 'px',
                        'top': moveY + 'px'
                    });
                    modal.position.left = moveX;
                    modal.position.top = moveY;
                };
            });
            $(document).mouseup(function () {
                    isDraging = false;               
            });
        });
    }
    function bindDragDialog(dialog,modal){
        var starX = 0, starY = 0;   
        var titleBar = dialog.find('.dialog-header');
        var backdiv = dialog.parents('.window-frame');
        var screen_height = backdiv.height();
        var screen_width = backdiv.width();
        titleBar.css('cursor','move');
        bindDragEvent(titleBar, dialog, modal, screen_height, screen_width);
    }     
    function init(){ 
        var json=[
            {group:"坐席管理",type: "0", menus:[
                {name: "话务作业", img: "menu-calling", url:"ng/home.html"},
                {name: "地图导航" , img: "menu-amap", url:"/CallCenter/PhoneCall/Index1"},
                {name: "通讯录", img: "menu-contact", url:"/CallCenter/PhoneCall/Index2"},
                {name: "配置管理", img: "menu-config", url:"/CallCenter/PhoneCall/Index3"},
                {name: "短信管理", img: "menu-shortmsg", url:"/CallCenter/PhoneCall/Index4"},
                {name: "车主管理", img: "menu-carowner", url:"/CallCenter/PhoneCall/Index5"},
                {name: "话务列表", img: "menu-callinglist", url:"/CallCenter/PhoneCall/Index6"},
                {name: "沟通记录", img: "menu-commurecord", url:"/CallCenter/PhoneCall/Index7"},
                {name: "我的派单", img: "menu-mytelorder", url:"/CallCenter/PhoneCall/Index8"},
                {name: "派单列表", img: "menu-telorder", url:"/CallCenter/PhoneCall/Index9"},
                {name: "会员查询", img: "menu-vip", url:"/CallCenter/PhoneCall/Index25"},
                {name: "天气查询", img: "menu-weather", url:"/CallCenter/PhoneCall/Index26"},           
                                
            ]},
            {group:"工单管理", type: "0", menus:[
                {name: "工单类型", img: "menu-business", url:"/CallCenter/PhoneCall/Index11"},
                {name: "模板配置", img: "menu-template", url:"/CallCenter/PhoneCall/Index12"},
                {name: "我的工单", img: "menu-workorder", url:"/CallCenter/PhoneCall/Index13"},
                {name: "工单列表", img: "menu-workorderlist", url:"/CallCenter/PhoneCall/Index14"}
            ]},
            {group: "知识库与公告", type: "0", menus:[
                {name: "知识库分类", img: "menu-category", url:"/CallCenter/PhoneCall/Index15"},
                {name: "知识库管理", img: "menu-knowledge", url:"/CallCenter/PhoneCall/Index16"},
                {name: "知识库搜索", img: "menu-search", url:"/CallCenter/PhoneCall/Index17"},
                {name: "公告管理", img: "menu-notice", url:"/CallCenter/PhoneCall/Index18"},
                
            ]},
            {group: "报表中心", type: "0", menus:[
                {name: "报表统计", img: "menu-report", url:"/CallCenter/PhoneCall/Index19"},           
            ]},
            {group: "第三方应用", type: "1", menus:[
                {name: "尊享车管家", img: "menu-carsteward", url:"/CallCenter/PhoneCall/Index20"}, 
                {name: "安车管家", img: "menu-carsteward", url:"/CallCenter/PhoneCall/Index21"}, 
                {name: "别克商城", img: "menu-buick", url:"/CallCenter/PhoneCall/Index22"},           
            ]},
            {group: "系统设置", type: "2", menus:[
                {name: "权限管理", img: "menu-authority", url:"/CallCenter/PhoneCall/Index23"}, 
                {name: "编码规则", img: "menu-coderules", url:"/CallCenter/PhoneCall/Index24"},                  
            ]}
        ]; 
        
        let home=[];
        let third=[];
        let setting=[];
        for(let i = 0; i<json.length; i++){
            if(json[i].type == "0"){
                home.push(json[i]);
            }
            else if(json[i].type == "1")
            {
                third.push(json[i]);
            }else{
                setting.push(json[i]);
            }
        }
        var home_html = TemplateEngine(iconTemp, home);
        $("#menu-home").append(home_html);
        var third_html = TemplateEngine(iconTemp, third);
        $('#menu-thirdpart').append(third_html);
        var setting_html = TemplateEngine(iconTemp, setting);
        $('#menu-setting').append(setting_html);   
    }

   
    



