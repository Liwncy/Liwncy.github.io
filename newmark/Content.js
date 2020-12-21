// Vue组件侧边栏
const Sidebar = Vue.extend({
    template: '<div>\n' +
        '    <el-menu default-active="2">' +
        '      <template v-for="(item, index) in menuList">' +
        '        <el-submenu v-if="item.child&&item.child.length>0" :key="item.id" :index="item.id">' +
        '          <template slot="title">' +
        '            <i class="el-icon-menu"></i>' +
        '            <span>{{item.name}}</span>' +
        '          </template>' +
        '            <sidebar @menuChange="regionMenuChanage" style="padding-left:25px" :menuList="item.child"/>' +
        '        </el-submenu>' +
        '        <el-menu-item @click="menuClick(item.id)" v-else :key="item.id" :index="item.id">{{item.name}}</el-menu-item>' +
        '      </template>' +
        '    </el-menu>' +
        '  </div>',
    name: "Sidebar",
    props: {
        menuList: {
            // 模拟数据
            default: [
                {
                    name: "一级菜单1",
                    id: "1",
                    child: [{ name: "二级菜单1-1", id: "1-1" }]
                },
                {
                    name: "一级菜单2",
                    id: "2",
                    child: [
                        { name: "二级菜单2-1", id: "2-1" },
                        {
                            name: "二级菜单2-2",
                            id: "2-2",
                            child: [{ name: "三级菜单1", id: "2-2-1" }]
                        },
                        {
                            name: "二级菜单2-3",
                            id: "2-3",
                            child: [{ name: "三级菜单1", id: "2-3-1" }]
                        }
                    ]
                },
                {
                    name: "一级菜单3",
                    id: "3",
                    child: [
                        {
                            name: "二级菜单3-1",
                            id: "3-1",
                            child: [
                                {
                                    name: "三级菜单",
                                    id: "3-1-1",
                                    child: [{ name: "四级菜单", id: "3-1-1-1" }]
                                },
                                { name: "三级菜单", id: "3-1-2" }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        // 原始引入页面的回调
        menuClick(id) {
            console.log(id);
            this.$emit("menuChange", id);
        },
        // 组件本身使用的回调（无限递归的子组件会通过这个一级一级回传到原始引入页面）
        regionMenuChanage(id) {
            this.$emit("menuChange", id);
        }
    }
});

