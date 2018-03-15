var iconTemp = '<%for(let i in this) {%>'+
            '<div class="desk-menu-item">'+
                '<div class="desk-menu-header">'+
                    '<span><%this[i].group%></span>'+
                '</div>'+
                '<ul class="desk-menu-content">'+
                    '<%for(let j in this[i].menus) {%>'+
                        '<li class="desk-menu-list" data-obj=\'<%JSON.stringify(this[i].menus[j])%>\'>'+
                            '<div class="menu-img <%this[i].menus[j].img%>"><span class="img-hover"></span></div>'+
                           '<div class="menu-name"> <span><%this[i].menus[j].name%></span></div>'+
                        '</li>'+
                        '<%}%>'+
                '</ul>'+
            '</div>'+
            '<%}%>';


var windowTemp = ' <div id="{id}" window="{id}" class="window-container" style="width:{width}px; height:{height}px; top: {top}px; left: {left}px; z-index: {index}">'+
                    '<div style="height: 100%">'+
                        '<div class="title-bar">'+
                            '<div class="title-banner"><div class="title-img {img}"></div><p>{title}</p></div>'+
                            '<div class="title-handle">'+
                                '<a class="min" href="javascript:;" title="最小化" ></a>'+
                                '<a class="max" href="javascript:;" title="最大化" ></a>'+
                                '<a class="revert" href="javascript:;" title="还原" ></a>'+
                                '<a class="win-close" href="javascript:;" title="关闭" ></a>'+
                            '</div>'+
                        '</div>'+
                        '<div class="window-frame" window="{id}">'+
                            '<div class="window-url">'+
                                // '<div ng-include="\'{url}\'"></div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="resizeL"></div>'+
                        '<div class="resizeT"></div>'+
                        '<div class="resizeR"></div>'+
                        '<div class="resizeB"></div>'+
                        '<div class="resizeLT"></div>'+
                        '<div class="resizeTR"></div>'+
                        '<div class="resizeBR"></div>'+
                        '<div class="resizeLB"></div>'+
                    '</div>'+
                '</div>';

var taskTemp = '<li window="{id}" class="task-win-style isActive"><div class="task-win-info"><div class="task-img {img}"></div><p class="task-win-p">{title}</p><div></li>';

var backdrop = '<div class="backdrop" style="z-index:{index}"><iframe frameborder="0" scrolling="no" style="background-color: transparent; position: absolute; z-index: -1; width: 100%; height: 100%; top: 0; left: 0;"></iframe></div>';
   
var tmp_error =  '<div id="{id}" class="dialog dialog-regbk" style="z-index:{index}; width:{width}px; height:{height}px;top:{top}px;left:{left}px">' +
                    '<div class="dialog-header"><span><i class="{style}"></i>{title}</span></div>' +
                    '<div class="dialog-body">{msg}</div>' +
                    '<div class="dialog-footer"></div>' +
                '</div>';

var tmp_dialogs= '<div id="{id}" class="dialog dialog-regbk" style="z-index:{index};width:{width}px; height:{height}px;top:{top}px;left:{left}px">' +
                    '<div class="dialog-header "><p><i class="dialog-icon"></i> {title}</p></div>'+
                    '<div class="dialog-bg">'+
                        '<div class="dialog-body">'+
                            '<div class="dialog-content">{msg}</div>'+
                            '<div class="dialog-btn"></div>'+
                        '</div>'+
                    '</div>'+                    
                '</div>';  
                
var tmp_confirm = '<div class="dialog" style="z-index:{index}">' +
                    '<div class="dialog-header confirm-header"><span><i class="glyphicon glyphicon-check"></i> {title}</span></div>' +
                    '<div class="dialog-body">{msg}</div>' +
                    '<div class="dialog-footer"><button class="dialogs-cancel btn btn-warning" >取消</button><button class="dialogs-close btn btn-primary">关闭</button></div>' +
                '</div>'; 
                
var tmp_prompt = '<div class="dialog" style="z-index:{index}">' +
                    '<div class="dialog-header prompt-header"><span><i class="glyphicon glyphicon-info-sign"></i> {title}</span></div>' +
                    '<div class="dialog-body"><textarea class="form-control" rows="2" id="prompt-msg" style="resize:none;"></textarea></div>' +
                    '<div class="dialog-footer"><button class="dialogs-cancle btn btn-warning">取消</button><button class="dialogs-close btn btn-primary">关闭</button></div>' +
                '</div>';                 