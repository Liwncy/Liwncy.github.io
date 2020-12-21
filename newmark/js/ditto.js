var ditto = {
    // page element ids
    content_id: "#content",
    sidebar_id: "#sidebar",
    edit_id: "#edit",
    back_to_top_id: "#back_to_top",
    loading_id: "#loading",
    error_id: "#error",

    // display elements
    sidebar: true,
    edit_button: true,
    back_to_top_button: true,
    save_progress: true, // 保存阅读进度
    search_bar: true,

    // initialize function
    run: initialize&getMenu
};
var disqusCode = '<h3>留言</h3><div id="disqus_thread"></div>';
var menu = [];

function initialize() {
    // initialize sidebar and buttons
    if (ditto.sidebar) {
        init_sidebar_section();
    }

    if (ditto.back_to_top_button) {
        init_back_to_top_button();
    }

    if (ditto.edit_button) {
        init_edit_button();
    }

    // page router
    router();
    $(window).on('hashchange', router);
}

/**
 * 获取菜单
 */
function getMenu() {
    $.getJSON('json/menu.json', function(json){
        console.log("json",json);
        menu = json;
    });
}
function normalize_paths() {
    // images
    $(ditto.content_id + " img").map(function() {
        var src = $(this).attr("src").replace("./", "");
        if ($(this).attr("src").slice(0, 4) !== "http") {
            var pathname = location.pathname.substr(0, location.pathname.length - 1);
            var url = location.hash.replace("#", "");

            // split and extract base dir
            url = url.split("/");
            var base_dir = url.slice(0, url.length - 1).toString();

            // normalize the path (i.e. make it absolute)
            $(this).attr("src", pathname + base_dir + "/" + src);
        }
    });
}
function show_error() {
    console.log("SHOW ERORR!");
    $(ditto.error_id).show();
}

function show_loading() {
    $(ditto.loading_id).show();
    $(ditto.content_id).html('');  // clear content

    // infinite loop until clearInterval() is called on loading
    var loading = setInterval(function() {
        $(ditto.loading_id).fadeIn(1000).fadeOut(1000);
    }, 2000);

    return loading;
}
/**
 * 获取md地址并渲染
 */
function router(id) {
    var path = location.hash.replace(/#([^#]*)(#.*)?/, '/$1');

    var hashArr = location.hash.split('#');
    var sectionId;
    if (hashArr.length > 2 && !(/^comment-/.test(hashArr[2]))) {
        sectionId = hashArr[2];
    }

    if (ditto.save_progress && store.get('menu-progress') !== location.hash) {
        store.set('menu-progress', location.hash);
        store.set('page-progress', 0);
    }

    // default page if hash is empty
    // 默认显示首页readme.md
    if (location.pathname === "/index.html") {
        path = location.pathname.replace("index.html", ditto.index);
        normalize_paths();
    } else if (path === "") {
        path = location.pathname + ditto.index;
        normalize_paths();
    } else {
        // 拼接仓库名和地址
        path = ditto.fast_path + "/" + ditto.github_user + "/" + ditto.github_repo + path + ".md";
    }
    /////////////////////////////////////////////////////////////////////////////////
    console.log(id);
    path = 'https://cdn.jsdelivr.net/gh/Liwncy/onenotes/js/ECMAScript%206%20%E5%85%A5%E9%97%A8/04-%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%89%A9%E5%B1%95.md';
    path = 'https://cdn.jsdelivr.net/gh/Liwncy/onenotes/js/ECMAScript%206%20%E5%85%A5%E9%97%A8/13-Set%20%E5%92%8C%20Map%20%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.md';

    // 取消scroll事件的监听函数
    // 防止改变下面的变量perc的值
    $(window).off('scroll');

    // otherwise get the markdown and render it
    // 除此以外获得Markdown并渲染它
    var loading = show_loading();
    $.get(path, function (data) {
        $(ditto.error_id).hide();
        $(ditto.content_id).html(marked(data) + disqusCode);
        if ($(ditto.content_id + " h1").text() === ditto.document_title) {
            document.title = ditto.document_title;
        } else {
            document.title = $(ditto.content_id + " h1").text() + " - " + ditto.document_title;
        }
        normalize_paths();
        // create_page_anchors();

        // 完成代码高亮
        $('#content code').map(function () {
            Prism.highlightElement(this);
        });
    }).fail(function () {
        show_error();
    }).always(function () {
        clearInterval(loading);
        $(ditto.loading_id).hide();
    });
}
