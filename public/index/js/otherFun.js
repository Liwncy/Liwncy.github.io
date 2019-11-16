/**
 * Created by Liwncy on 2019/3/6.
 */
layui.define(["element","jquery"],function(exports){
    var element = layui.element,
        $ = layui.$;
    //封装时间格式
    function format(time, format) {
        var t = new Date(time);
        var tf = function (i) {
            return (i < 10 ? '0' : '') + i
        };
        return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
            switch (a) {
                case 'yyyy':
                    return tf(t.getFullYear());
                    break;
                case 'MM':
                    return tf(t.getMonth() + 1);
                    break;
                case 'mm':
                    return tf(t.getMinutes());
                    break;
                case 'dd':
                    return tf(t.getDate());
                    break;
                case 'HH':
                    return tf(t.getHours());
                    break;
                case 'ss':
                    return tf(t.getSeconds());
                    break;
            }
        })
    }
    //设置状态栏时间
    setInterval(function() {
        //var getDate = (new Date()).toLocaleString();
        var getDate = new Date();
        //console.log(now);
        var nowDay = format(getDate,"yyyy年MM月dd日");
        $("#myDay").html(nowDay);
        var nowDate = format(getDate,"HH:mm:ss");
        $("#myDate").html(nowDate);
        var hour = format(getDate,"HH");
        var mimutes = format(getDate,"mm");
        if(hour == 12 || (hour ==1&&mimutes<30)){
            $("#work").html("休");
        }
        if(hour<12){
            var bfb = (8-(18-2-hour))/8;
        }else {
            var bfb = (8-(18-hour))/8;
        }
        if(bfb <= 1 && bfb >= 0){
            $("#work").html(bfb*100+"%");
        }else {
            $("#work").html("撤");
        }
    }, 1000);

    exports("otherFun");
});