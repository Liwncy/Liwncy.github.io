var $,tab,dataStr,layer;
layui.config({
	base : "public/index/js/"
}).extend({
	"bodyTab" : "bodyTab",
	"otherFun" : "otherFun"
});
layui.use(['bodyTab','otherFun','form','element','layer','jquery'],function(){
	var form = layui.form,
		element = layui.element;
		$ = layui.$;
    	layer = parent.layer === undefined ? layui.layer : top.layer;
		tab = layui.bodyTab({
			openTabNum : "50",  //最大可打开窗口数量
			url : "mock/index/navs.json" //获取菜单json地址
		});

	//通过顶部菜单获取左侧二三级菜单
	function getData(json){
		$.getJSON(tab.tabConfig.url,function(data){
			if(json == "base"){
				dataStr = data.base;
				tab.render();
			}else if(json == "study"){
				dataStr = data.study;
				tab.render();
			}else if(json == "play"){
				dataStr = data.play;
				tab.render();
			}else if(json == "crown"){
                dataStr = data.crown;
                tab.render();
            }else {
				dataStr = data.base;
				tab.render();
			}
		})
	}
	//
	getData("base");
	$(".taskMenu").click(function(){
		var myMenu = $(this).attr("title");
		//alert(myMenu);
		getData(myMenu);
	});
	////隐藏菜单
	$(".mHide").click(function(){
		//alert(1);
		if($("#leftSide").css('display')=='none') {
			$("#leftSide").show();
			$("body").css("background","url(plugins/crown/images/backgrounds/bodyBg.png) repeat-y 0 0");
			$("#footer .wrapper").css("padding","5px 0 5px 222px");
		}else {
			$("#leftSide").hide();
			$("body").css("background","white");
			$("#footer .wrapper").css("padding","5px 0 5px 0px");
		}
	});
	////折叠任务
	$(".dd").hover(function(){
		//$(this).children('li').css('color','red');
		if($(this).children(".userDropdown").css('display')=='none'){
			//console.log('移入');
			$(this).children(".userDropdown").show();
		}
	},function(){
		if($(this).children(".userDropdown").css('display')=='block'){
			//console.log('移出');
			setTimeout(function () {
				$(".userDropdown").hide();
			}, 2000);
		}
	});
});

//折叠菜单
function fold(x){
	//alert(x);
	if($("#fold" + x).css('display')=='none') {
		$("#menu li ul").hide();
		$("#fold" + x).show();
	}else {
		$("#fold" + x).hide();
	}
}

