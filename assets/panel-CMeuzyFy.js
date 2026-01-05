import{j as o,n as g,a as y,b as t,g as n,w as l,h as a}from"./index-DA7z07ap.js";const m={class:"markdown-body"},f={class:"panel-container"},v={style:{display:"flex","justify-content":"space-between","margin-top":"20px"}},b={},h={__name:"panel",setup(w,{expose:r}){return r({frontmatter:{}}),(x,s)=>{const d=o("lay-anchor"),e=o("lay-field"),p=o("lay-panel"),c=o("lay-code"),u=o("lay-table-box"),k=o("lay-icon"),i=o("router-link");return y(),g("div",m,[t(d,{anchors:"基本介绍,基础使用,边框阴影,Panel 属性,Panel 插槽",currIndex:-1,show:!0}),t(e,{id:"基本介绍",title:"基本介绍",style:{"margin-top":"21px","margin-bottom":"20px"}}),s[12]||(s[12]=n("div",{class:"describe-plugin"},[n("p",null,"面板通常是指一个独立的容器")],-1)),t(e,{id:"基础使用",title:"基础使用",style:{"margin-top":"21px","margin-bottom":"20px"}}),t(c,null,{description:l(()=>[...s[0]||(s[0]=[n("p",null,[a("使用 "),n("code",null,"lay-panel"),a(" 标签, 创建面板。")],-1)])]),code:l(()=>[...s[1]||(s[1]=[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("lay-panel")]),n("span",{class:"token punctuation"},">")]),a("面板"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("lay-panel")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])]),default:l(()=>[t(p,null,{default:l(()=>[...s[2]||(s[2]=[a("面板",-1)])]),_:1})]),_:1}),t(e,{id:"边框阴影",title:"边框阴影",style:{"margin-top":"21px","margin-bottom":"20px"}}),t(c,null,{description:l(()=>[...s[3]||(s[3]=[n("p",null,[a("通过 "),n("code",null,"shadow"),a(" 属性设置阴影出现的时机，可选值为 "),n("code",null,"always"),a(),n("code",null,"hover"),a(),n("code",null,"never"),a("， 默认为 "),n("code",null,"always"),a("。")],-1)])]),code:l(()=>[...s[4]||(s[4]=[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("panel-container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("lay-panel")]),n("span",{class:"token punctuation"},">")]),a(`
      内容
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("lay-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("lay-panel")]),a(),n("span",{class:"token attr-name"},"shadow"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("hover"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      内容
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("lay-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("lay-panel")]),a(),n("span",{class:"token attr-name"},"shadow"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("never"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      内容
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("lay-panel")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".panel-container > *"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),a(" whitesmoke"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),a(" 20px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])]),default:l(()=>[n("div",f,[t(p,null,{default:l(()=>[...s[5]||(s[5]=[a(" 内容 ",-1)])]),_:1}),t(p,{shadow:"hover"},{default:l(()=>[...s[6]||(s[6]=[a(" 内容 ",-1)])]),_:1}),t(p,{shadow:"never"},{default:l(()=>[...s[7]||(s[7]=[a(" 内容 ",-1)])]),_:1})])]),_:1}),t(e,{id:"Panel 属性",title:"Panel 属性",style:{"margin-top":"21px","margin-bottom":"20px"}}),t(u,null,{default:l(()=>[...s[8]||(s[8]=[n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"名称"),n("th",null,"描述"),n("th",null,"类型"),n("th",null,"默认值"),n("th",null,"可选值")])]),n("tbody",null,[n("tr",null,[n("td",null,"shadow"),n("td",null,"阴影"),n("td",null,[n("code",null,"string")]),n("td",null,[n("code",null,"always")]),n("td",null,[n("code",null,"always"),a(),n("code",null,"hover"),a(),n("code",null,"never")])])])],-1)])]),_:1}),t(e,{id:"Panel 插槽",title:"Panel 插槽",style:{"margin-top":"21px","margin-bottom":"20px"}}),t(u,null,{default:l(()=>[...s[9]||(s[9]=[n("table",null,[n("thead",null,[n("tr",null,[n("th",null,"名称"),n("th",null,"描述")])]),n("tbody",null,[n("tr",null,[n("td",null,"default"),n("td",null,"默认插槽")])])],-1)])]),_:1}),n("div",v,[n("div",null,[t(i,{to:"/zh-CN/components/grid",class:"lay-link",style:{display:""}},{default:l(()=>[t(k,{type:"layui-icon-left"}),s[10]||(s[10]=a("栅格",-1))]),_:1})]),n("div",null,[t(i,{to:"/zh-CN/components/card",class:"lay-link",style:{display:""}},{default:l(()=>[s[11]||(s[11]=a("卡片 ",-1)),t(k,{type:"layui-icon-right"})]),_:1})])])])}}};export{h as default,b as frontmatter};
