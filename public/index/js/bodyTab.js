var tabFilter,menu=[],liIndex,curNav,delMenu,
    changeRefreshStr = window.sessionStorage.getItem("changeRefresh");
layui.define(["element","jquery"],function(exports){
	var element = layui.element,
		$ = layui.$,
		Tab = function(){
			this.tabConfig = {
				openTabNum : undefined,  //最大可打开窗口数量
				tabFilter : "bodyTab",  //添加窗口的filter
				url : undefined  //获取菜单json地址
			}
		};
    //生成左侧菜单
    Tab.prototype.navBar = function(strData){
        var data;
        if(typeof(strData) == "string"){
            var data = JSON.parse(strData);
        }else{
            data = strData;
        }
        var ulHtml = '';
		var num = 1;
		//拼接菜单
        for(var i=0;i<data.length;i++){
			if(data[i].iconImg != "" && data[i].iconImg != undefined){
				ulHtml += '<li class="'+data[i].iconImg+'">';
			}else {
				ulHtml += '<li class="dash">'
			}
            if(data[i].children != undefined && data[i].children.length > 0){
                ulHtml += '<a href="#" title="" class="exp" onclick="fold('+num+')">';
				ulHtml += '<span>'+data[i].title+'</span>';
				ulHtml += '<strong>'+data[i].children.length+'</strong>';
                ulHtml += '</a>';
                ulHtml += '<ul class="sub" id="fold'+num+'" hidden>';
				num++;
                for(var j=0;j<data[i].children.length;j++){
					if(j!=data[i].children.length-1){
						if(data[i].children[j].target != "_blank"){
							ulHtml += '<li><a href="'+data[i].children[j].href+'" title="" target="frame">';
						}else{
							ulHtml += '<li><a href="'+data[i].children[j].href+'" title=""  target="_blank">';
						}
					}else {
						if(data[i].children[j].target != "_blank"){
							ulHtml += '<li class="last"><a href="'+data[i].children[j].href+'" title="" target="frame">';
						}else{
							ulHtml += '<li class="last"><a href="'+data[i].children[j].href+'" title=""  target="_blank">';
						}
					}
                    ulHtml += data[i].children[j].title + '</a></li>';
                }
                ulHtml += "</ul>";
            }else{
                if(data[i].target != "_blank"){
                    ulHtml += '<a href="'+data[i].href+'" title="" target="frame">';
                }else{
                    ulHtml += '<a href="'+data[i].href+'" title=""  target="_blank">';
                }
                ulHtml += '<span>'+data[i].title+'</span></a>';
            }
            ulHtml += '</li>';
        }
        return ulHtml;
    };

	//获取菜单数据
	Tab.prototype.render = function() {
		//显示左侧菜单
		var _this = this;
		$("#navBar ul").html('<li class="dash"><a href="public/index/welcome.html" title="" class="active" target="frame"><span>My 首页</span></a></li>').append(_this.navBar(dataStr));
		element.init();  //初始化页面元素
	};

	//参数设置
	Tab.prototype.set = function(option) {
		var _this = this;
		$.extend(true, _this.tabConfig, option);
		//console.log(_this);
		return _this;
	};

	var bodyTab = new Tab();
	exports("bodyTab",function(option){
		return bodyTab.set(option);
	});
});
