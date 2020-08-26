layui.use(['form','element','layer','jquery'],function(){
    var form = layui.form,
        element = layui.element;
    $ = layui.$;
    var notesJson = [];
    var urls = [];
    //最新笔记列表
    function getNotes() {
        $.get("../../../static/base/markdown/json/notes.json",function(data){
            notesJson = data;
            filterNote(data);
        })
    }
    $("#randomNote").click(function(){
        let num = Math.floor(Math.random() * (urls.length-1) + 1);
        // let url = "https://cdn.jsdelivr.net/gh/liwncy/onenotes/java/stream.md";
        let url = urls[num];
        console.log(url);
        $.get(url+"?t="+Math.random(),function(data,status){
            console.log("数据: " + data + "\n状态: " + status);
            document.getElementById('content').innerHTML = marked(data);
        });
    })
    function filterNote(data){
        console.log(data);
        data.forEach((o,i)=>{
            if(o.isFile === "1"){
                urls.push(o.fastUrl);
            } else {
                filterNote(o.children);
            }
        })
    }
    $(function() {
        //获取笔记json
        getNotes();
    });

})
