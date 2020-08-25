layui.use(['form','element','layer','jquery'],function(){
    var form = layui.form,
        element = layui.element;
    $ = layui.$;
    $.get('https://github.com/Liwncy/onenotes',function(data,status){
        console.log("数据: " + data + "\n状态: " + status);
    })
    //用于创建XMLHttpRequest对象
    function createXmlHttp() {
        //根据window.XMLHttpRequest对象是否存在使用不同的创建方式
        if (window.XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest(); //FireFox、Opera等浏览器支持的创建方式
        } else {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); //IE浏览器支持的创建方式
        }
    }
    //直接通过XMLHttpRequest对象获取远程网页源代码
    function getSource() {
        var url = document.getElementById("url").value; //获取目标地址信息
        //地址为空时提示用户输入
        if (url == "") {
            alert("请输入网页地址。");
            return;
        }
        document.getElementById("source").value = "正在加载……"; //提示正在加载
        createXmlHttp(); //创建XMLHttpRequest对象
        xmlHttp.onreadystatechange = writeSource; //设置回调函数
        xmlHttp.open("GET", url, true);
        xmlHttp.send(null);
    }
    //将远程网页源代码写入页面文字区域
    function writeSource() {
        if (xmlHttp.readyState == 4) {
            document.getElementById("source").value = xmlHttp.responseText;
        }
    }

    $(function() {
        //获取远程代码
        getSource();
    });

})
