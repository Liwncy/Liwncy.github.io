import{r as l,n as z,b as s,w as a,g as t,k as y,a as D,ay as p,az as m,f as n,t as F}from"./index-AaWnK9lM.js";const S={class:"markdown-body"},E=t("div",{class:"describe-plugin"},[t("p",null,"树形组件一般用于展示具有层级关系的数据")],-1),U=t("p",null,[n("使用 "),t("code",null,"lay-tree"),n(" 标签, 创建树形组件, @node-click 监听节点点击。")],-1),A=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lay-tree")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
		`),t("span",{class:"token attr-name"},":tail-node-icon"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("false"),t("span",{class:"token punctuation"},'"')]),n(`
		`),t("span",{class:"token attr-name"},":onlyIconControl"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(`
		`),t("span",{class:"token attr-name"},":default-expand-all"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(`
		`),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("selectedKey")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("selectedKey"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"@node-click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("handleClick"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("lay-tree")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" selectedKey "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'一级1'"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"checked"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级1-1'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'https://www.layui.com/'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-1-3'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"23"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'四级1-1-3-1'"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"24"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'五级1-1-3-1-1'"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"30"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"''"),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'五级1-1-3-1-2'"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"31"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-1-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"7"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'四级1-1-1-1'"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"15"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'https://www.layui.com/doc/'"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-1-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"8"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'四级1-1-2-1'"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"32"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级1-2'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-2-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"9"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-2-1-1'"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"91"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-2-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级1-3'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"20"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-3-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"21"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-3-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"22"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'一级2'"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级2-1'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"5"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级2-1-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"11"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级2-1-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"12"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级2-2'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"6"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级2-2-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"13"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级2-2-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"14"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'一级3'"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"16"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级3-1'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"17"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"fixed"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级3-1-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级3-1-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"19"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级3-2'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"27"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级3-2-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"28"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级3-2-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"29"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token function"},"handleClick"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"node"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
  console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Click Node:"'),n(),t("span",{class:"token operator"},"+"),n(),t("span",{class:"token constant"},"JSON"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"stringify"),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),I=t("p",null,[n("使用 "),t("code",null,"showCheckbox"),n(" 属性开启复选框, "),t("code",null,"checkedKeys"),n(" 属性设置选中项。")],-1),B=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lay-tree")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data2"),t("span",{class:"token punctuation"},'"')]),n(`
	`),t("span",{class:"token attr-name"},":showCheckbox"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("showCheckbox2"),t("span",{class:"token punctuation"},'"')]),n(`
	`),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("checkedKeys")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("checkedKeys2"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("lay-tree")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" checkedKeys2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"const"),n(" showCheckbox2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" data2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'一级1'"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"checked"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级1-1'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'https://www.layui.com/'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-1-3'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"23"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'四级1-1-3-1'"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"24"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'五级1-1-3-1-1'"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"30"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"''"),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'五级1-1-3-1-2'"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"31"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-1-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"7"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'四级1-1-1-1'"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"15"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'https://www.layui.com/doc/'"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-1-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"8"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'四级1-1-2-1'"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"32"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级1-2'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-2-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"9"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-2-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级1-3'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"20"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-3-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"21"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-3-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"22"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'一级2'"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级2-1'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"5"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级2-1-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"11"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级2-1-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"12"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级2-2'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"6"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级2-2-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"13"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级2-2-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"14"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'一级3'"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"16"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级3-1'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"17"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"fixed"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级3-1-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级3-1-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"19"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级3-2'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"27"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级3-2-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"28"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级3-2-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"29"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),J=t("p",null,[n("通过 "),t("code",null,"checkStrictly"),n(" 属性禁用父子关联选择, 让每个复选框都是独立的。")],-1),M=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lay-tree")]),n(`
	`),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("checkedKeys")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("checkedKeys3"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":checkStrictly"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(`
	`),t("span",{class:"token attr-name"},":showCheckbox"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(`
	`),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data3"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("lay-tree")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" data3 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'一级1'"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"checked"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级1-1'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'https://www.layui.com/'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-1-3'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"23"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'四级1-1-3-1'"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"24"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'五级1-1-3-1-1'"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"30"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"''"),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'五级1-1-3-1-2'"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"31"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-1-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"7"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'四级1-1-1-1'"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"15"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'https://www.layui.com/doc/'"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-1-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"8"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'四级1-1-2-1'"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"32"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级1-2'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-2-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"9"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-2-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级1-3'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"20"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-3-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"21"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级1-3-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"22"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'一级2'"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级2-1'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"5"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级2-1-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"11"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级2-1-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"12"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级2-2'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"6"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级2-2-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"13"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级2-2-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"14"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'一级3'"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"16"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级3-1'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"17"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"fixed"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级3-1-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级3-1-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"19"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'二级3-2'"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"27"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级3-2-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"28"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'三级3-2-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"29"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" checkedKeys3 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),O=t("p",null,[n("使用 "),t("code",null,"showLine"),n(" 属性关闭节点连线")],-1),P=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lay-tree")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
		`),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("selectedKey")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("selectedKey"),t("span",{class:"token punctuation"},'"')]),n(`
	`),t("span",{class:"token attr-name"},":showLine"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("showLine"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("lay-tree")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" showLine"),t("span",{class:"token operator"},"="),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),R=t("p",null,"使用插槽自定义节点标题",-1),G=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lay-tree")]),n(),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`	
	`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ data }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
		{{ data.title }}
	`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("lay-tree")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),H=t("p",null,"异步加载子节点",-1),Q=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lay-tree")]),n(),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data10"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"lazy"),n(),t("span",{class:"token attr-name"},":load"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("handleLoad"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"default-expand-all"),t("span",{class:"token punctuation"},">")]),n(),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("lay-tree")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" data10 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
  `),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级1"'),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级2"'),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
			`),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级2-1"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"21"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"}"),n(`
		`),t("span",{class:"token punctuation"},"]"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"handleLoad"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("node"),t("span",{class:"token punctuation"},","),n(" resolve")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
  console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},"."),n("id "),t("span",{class:"token operator"},"==="),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token function"},"setTimeout"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token function"},"resolve"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级1-1"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"11"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"{"),n(`
          `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级1-2"'),t("span",{class:"token punctuation"},","),n(`
          `),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"12"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"2000"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"else"),n(),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},"."),n("id "),t("span",{class:"token operator"},"==="),n(),t("span",{class:"token number"},"11"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token function"},"resolve"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级1-1-1"'),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"111"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级1-2-1"'),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"121"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"else"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token function"},"resolve"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),W=t("p",null,[n("使用 "),t("code",null,"replaceFields"),n(" 替换 "),t("code",null,"data"),n(" 中的字段名")],-1),X=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lay-tree")]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data9"),t("span",{class:"token punctuation"},'"')]),n(`
		`),t("span",{class:"token attr-name"},":showCheckbox"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("showCheckbox2"),t("span",{class:"token punctuation"},'"')]),n(`
		`),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("checkedKeys")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("checkedKeys2"),t("span",{class:"token punctuation"},'"')]),n(`
		`),t("span",{class:"token attr-name"},":replaceFields"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("replaceFields"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("lay-tree")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" checkedKeys2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"const"),n(" showCheckbox2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" replaceFields "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'key'"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'child'"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`

`),t("span",{class:"token keyword"},"const"),n(" data9 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'一级1'"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"child"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'一级1-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"11"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"child"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
				`),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'一级1-1-1'"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"111"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'一级1-1-2'"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"112"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'一级1-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"12"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"child"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
				`),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'一级1-2-1'"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"121"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'一级1-2-2'"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"122"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'一级2'"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"child"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'一级2-1'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"21"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'一级2-2'"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"22"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"child"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
				`),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'一级2-2-1'"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"key"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"221"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"}"),n(`
			`),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),Y=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Description"),t("th",null,"Accepted Values"),t("th",null,"Version")])]),t("tbody",null,[t("tr",null,[t("td",null,"data"),t("td",null,"树型组件数据,类型 TreeData | TreeData[]"),t("td",null,"null"),t("td")]),t("tr",null,[t("td",null,"showCheckbox"),t("td",null,"是否显示复选框"),t("td",null,"false"),t("td")]),t("tr",null,[t("td",null,"check-strictly"),t("td",null,"在显示复选框的情况下，是否严格的遵循父子不互相关联的做法"),t("td",null,"false"),t("td")]),t("tr",null,[t("td",null,"onlyIconControl"),t("td",null,"是否仅允许节点左侧图标控制展开收缩"),t("td",null,"false"),t("td")]),t("tr",null,[t("td",null,"showLine"),t("td",null,"是否开启连接线"),t("td",null,"true"),t("td")]),t("tr",null,[t("td",null,"checkedKeys(v-model:checkedKeys)"),t("td",null,"开启 showCheckbox 后, 选中的节点"),t("td",null,"[]"),t("td")]),t("tr",null,[t("td",null,"expandKeys(v-model:expandKeys)"),t("td",null,"展开的节点 key 数组"),t("td",null,"[]"),t("td",null,"1.8.7")]),t("tr",null,[t("td",null,"collapse-transition"),t("td",null,"是否开启展示收起动画"),t("td",null,"false"),t("td")]),t("tr",null,[t("td",null,"selectedKey"),t("td",null,"选中节点"),t("td",null,"–"),t("td")]),t("tr",null,[t("td",null,"tail-node-icon"),t("td",null,"尾节点图标，通过设置 false 关闭尾节点图标"),t("td",null,"图标集"),t("td")]),t("tr",null,[t("td",null,"replace-fields"),t("td",null,[n("替换 data 中"),t("code",null,"id"),n(),t("code",null,"title"),n(),t("code",null,"children"),n(" 字段名")]),t("td",null,"{id: “id”, title: “title”, children: “children”}"),t("td")]),t("tr",null,[t("td",null,"default-expand-all"),t("td",null,[n("是否默认展开所有节点，开启 "),t("code",null,"lazy"),n(" 懒加载此参数将失效")]),t("td",null,"false"),t("td")]),t("tr",null,[t("td",null,"lazy"),t("td",null,[n("是否懒加载子节点，需与 "),t("code",null,"load"),n(" 方法结合使用")]),t("td",null,"false"),t("td",null,"2.16.2")]),t("tr",null,[t("td",null,"load"),t("td",null,[n("加载子树数据的方法，仅当 "),t("code",null,"lazy"),n(" 属性为 true 时生效")]),t("td",null,"function(node, resolve)，node 为当前点击的节点，resolve 为数据加载完成的回调(必须调用)"),t("td",null,"2.16.2")]),t("tr",null,[t("td",null,"searchNodeMethod"),t("td",null,[n("过滤树节点，配合Exposes事件中的"),t("code",null,"filter"),n(" 使用")]),t("td",null,[t("code",null,"(node, value) => boolean"),n("，node 节点，value 内容")]),t("td",null,"2.17.7")])])],-1),Z=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Description"),t("th",null,"Accepted Values"),t("th",null,"Version")])]),t("tbody",null,[t("tr",null,[t("td",null,"id"),t("td",null,"唯一值"),t("td",null,"-"),t("td",null,"-")]),t("tr",null,[t("td",null,"title"),t("td",null,"节点名称"),t("td",null,"-"),t("td",null,"-")]),t("tr",null,[t("td",null,"children"),t("td",null,"子节点"),t("td",null,"[]"),t("td",null,"-")]),t("tr",null,[t("td",null,"disabled"),t("td",null,"该节点是否禁用"),t("td",null,"false"),t("td",null,"-")]),t("tr",null,[t("td",null,"spread"),t("td",null,"是否展开"),t("td",null,"false"),t("td",null,"-")])])],-1),$=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Description"),t("th",null,"Accepted Params"),t("th",null,"Version")])]),t("tbody",null,[t("tr",null,[t("td",null,"node-click"),t("td",null,"节点 click 事件"),t("td",null,"node, checked"),t("td")]),t("tr",null,[t("td",null,"check-change"),t("td",null,[t("code",null,"showCheckbox"),n("为true时，点击checkbox触发")]),t("td",null,"node, checked"),t("td",null,[t("code",null,"2.17.7")])])])],-1),tt=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Description"),t("th",null,"Accepted Params"),t("th",null,"Version")])]),t("tbody",null,[t("tr",null,[t("td",null,"filter"),t("td",null,[n("过滤树节点，配合"),t("code",null,"props.searchNodeMethod")]),t("td",null,"过滤内容"),t("td",null,[t("code",null,"2.17.7")])])])],-1),nt={style:{display:"flex","justify-content":"space-between","margin-top":"20px"}},pt={},ot={__name:"tree",setup(st,{expose:x}){let u=l(1),b=l([{title:"一级1",id:1,checked:!0,children:[{title:"二级1-1",id:3,href:"https://www.layui.com/",children:[{title:"三级1-1-3",id:23,children:[{title:"四级1-1-3-1",id:24,children:[{title:"五级1-1-3-1-1",id:30,field:""},{title:"五级1-1-3-1-2",id:31}]}]},{title:"三级1-1-1",id:7,children:[{title:"四级1-1-1-1",id:15,href:"https://www.layui.com/doc/"}]},{title:"三级1-1-2",id:8,children:[{title:"四级1-1-2-1",id:32}]}]},{title:"二级1-2",id:4,children:[{title:"三级1-2-1",id:9,disabled:!0,children:[{title:"三级1-2-1-1",id:91,disabled:!0}]},{title:"三级1-2-2",id:10}]},{title:"二级1-3",id:20,children:[{title:"三级1-3-1",id:21},{title:"三级1-3-2",id:22}]}]},{title:"一级2",id:2,children:[{title:"二级2-1",id:5,spread:!0,children:[{title:"三级2-1-1",id:11},{title:"三级2-1-2",id:12}]},{title:"二级2-2",id:6,children:[{title:"三级2-2-1",id:13},{title:"三级2-2-2",id:14,disabled:!0}]}]},{title:"一级3",id:16,children:[{title:"二级3-1",id:17,fixed:!0,children:[{title:"三级3-1-1",id:18},{title:"三级3-1-2",id:19}]},{title:"二级3-2",id:27,children:[{title:"三级3-2-1",id:28},{title:"三级3-2-2",id:29}]}]}]);function v(d){console.log("Click Node:"+JSON.stringify(d))}let r=l([]),f=l(!0),K=l([{title:"一级1",id:1,checked:!0,spread:!0,children:[{title:"二级1-1",id:3,href:"https://www.layui.com/",children:[{title:"三级1-1-3",id:23,children:[{title:"四级1-1-3-1",id:24,children:[{title:"五级1-1-3-1-1",id:30,field:""},{title:"五级1-1-3-1-2",id:31}]}]},{title:"三级1-1-1",id:7,children:[{title:"四级1-1-1-1",id:15,href:"https://www.layui.com/doc/"}]},{title:"三级1-1-2",id:8,children:[{title:"四级1-1-2-1",id:32}]}]},{title:"二级1-2",id:4,spread:!0,children:[{title:"三级1-2-1",id:9,disabled:!0},{title:"三级1-2-2",id:10}]},{title:"二级1-3",id:20,children:[{title:"三级1-3-1",id:21},{title:"三级1-3-2",id:22}]}]},{title:"一级2",id:2,spread:!0,children:[{title:"二级2-1",id:5,spread:!0,children:[{title:"三级2-1-1",id:11},{title:"三级2-1-2",id:12}]},{title:"二级2-2",id:6,children:[{title:"三级2-2-1",id:13},{title:"三级2-2-2",id:14,disabled:!0}]}]},{title:"一级3",id:16,children:[{title:"二级3-1",id:17,fixed:!0,children:[{title:"三级3-1-1",id:18},{title:"三级3-1-2",id:19}]},{title:"二级3-2",id:27,children:[{title:"三级3-2-1",id:28},{title:"三级3-2-2",id:29}]}]}]),C=l([{title:"一级1",id:1,checked:!0,spread:!0,children:[{title:"二级1-1",id:3,href:"https://www.layui.com/",children:[{title:"三级1-1-3",id:23,children:[{title:"四级1-1-3-1",id:24,children:[{title:"五级1-1-3-1-1",id:30,field:""},{title:"五级1-1-3-1-2",id:31}]}]},{title:"三级1-1-1",id:7,children:[{title:"四级1-1-1-1",id:15,href:"https://www.layui.com/doc/"}]},{title:"三级1-1-2",id:8,children:[{title:"四级1-1-2-1",id:32}]}]},{title:"二级1-2",id:4,spread:!0,children:[{title:"三级1-2-1",id:9,disabled:!0},{title:"三级1-2-2",id:10}]},{title:"二级1-3",id:20,children:[{title:"三级1-3-1",id:21},{title:"三级1-3-2",id:22}]}]},{title:"一级2",id:2,spread:!0,children:[{title:"二级2-1",id:5,spread:!0,children:[{title:"三级2-1-1",id:11},{title:"三级2-1-2",id:12}]},{title:"二级2-2",id:6,children:[{title:"三级2-2-1",id:13},{title:"三级2-2-2",id:14,disabled:!0}]}]},{title:"一级3",id:16,children:[{title:"二级3-1",id:17,fixed:!0,children:[{title:"三级3-1-1",id:18},{title:"三级3-1-2",id:19}]},{title:"二级3-2",id:27,children:[{title:"三级3-2-1",id:28},{title:"三级3-2-2",id:29}]}]}]),g=l([2,3]),q=l(!1),N=l([{title:"一级1",id:1},{title:"一级2",id:2,children:[{title:"一级2-1",id:21}]}]),L=(d,e)=>{console.log(d),d.id===1?setTimeout(()=>{e([{title:"一级1-1",id:11},{title:"一级1-2",id:12}])},2e3):d.id===11?e([{title:"一级1-1-1",id:111},{title:"一级1-2-1",id:121}]):e([])};r=l([]),f=l(!0);let T=l({id:"key",title:"name",children:"child"}),V=l([{name:"一级1",key:1,spread:!0,child:[{name:"一级1-1",key:11,child:[{name:"一级1-1-1",key:111},{name:"一级1-1-2",key:112}]},{name:"一级1-2",key:12,child:[{name:"一级1-2-1",key:121},{name:"一级1-2-2",key:122}]}]},{name:"一级2",key:2,spread:!0,child:[{name:"一级2-1",key:21,spread:!0},{name:"一级2-2",key:22,spread:!0,child:[{name:"一级2-2-1",key:221,spread:!0}]}]}]);return x({frontmatter:{}}),(d,e)=>{const j=y("lay-anchor"),c=y("lay-field"),k=y("lay-tree"),i=y("lay-code"),h=y("lay-table-box"),w=y("lay-icon"),_=y("router-link");return D(),z("div",S,[s(j,{anchors:"基本介绍,基础使用,启用多选,禁用级联,关闭连线,使用插槽,懒加载子节点,自定义字段,Tree 属性,Tree 数据,Callbacks 回调,Exposes 事件",currIndex:-1,show:!0}),s(c,{id:"基本介绍",title:"基本介绍",style:{"margin-top":"21px","margin-bottom":"20px"}}),E,s(c,{id:"基础使用",title:"基础使用",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(i,null,{description:a(()=>[U]),code:a(()=>[A]),default:a(()=>[s(k,{data:p(b),"tail-node-icon":!1,onlyIconControl:!0,"default-expand-all":!0,selectedKey:p(u),"onUpdate:selectedKey":e[0]||(e[0]=o=>m(u)?u.value=o:u=o),onNodeClick:v},null,8,["data","selectedKey"])]),_:1}),s(c,{id:"启用多选",title:"启用多选",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(i,null,{description:a(()=>[I]),code:a(()=>[B]),default:a(()=>[s(k,{data:p(K),showCheckbox:p(f),checkedKeys:p(r),"onUpdate:checkedKeys":e[1]||(e[1]=o=>m(r)?r.value=o:r=o)},null,8,["data","showCheckbox","checkedKeys"])]),_:1}),s(c,{id:"禁用级联",title:"禁用级联",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(i,null,{description:a(()=>[J]),code:a(()=>[M]),default:a(()=>[s(k,{checkedKeys:p(g),"onUpdate:checkedKeys":e[2]||(e[2]=o=>m(g)?g.value=o:g=o),checkStrictly:!0,showCheckbox:!0,data:p(C)},null,8,["checkedKeys","data"])]),_:1}),s(c,{id:"关闭连线",title:"关闭连线",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(i,null,{description:a(()=>[O]),code:a(()=>[P]),default:a(()=>[s(k,{data:p(b),selectedKey:p(u),"onUpdate:selectedKey":e[3]||(e[3]=o=>m(u)?u.value=o:u=o),showLine:p(q)},null,8,["data","selectedKey","showLine"])]),_:1}),s(c,{id:"使用插槽",title:"使用插槽",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(i,null,{description:a(()=>[R]),code:a(()=>[G]),default:a(()=>[s(k,{data:p(b)},{title:a(({data:o})=>[n(F(o.title),1)]),_:1},8,["data"])]),_:1}),s(c,{id:"懒加载子节点",title:"懒加载子节点",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(i,null,{description:a(()=>[H]),code:a(()=>[Q]),default:a(()=>[s(k,{data:p(N),lazy:"",load:p(L),"default-expand-all":""},null,8,["data","load"])]),_:1}),s(c,{id:"自定义字段",title:"自定义字段",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(i,null,{description:a(()=>[W]),code:a(()=>[X]),default:a(()=>[s(k,{data:p(V),showCheckbox:p(f),checkedKeys:p(r),"onUpdate:checkedKeys":e[4]||(e[4]=o=>m(r)?r.value=o:r=o),replaceFields:p(T)},null,8,["data","showCheckbox","checkedKeys","replaceFields"])]),_:1}),s(c,{id:"Tree 属性",title:"Tree 属性",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(h,null,{default:a(()=>[Y]),_:1}),s(c,{id:"Tree 数据",title:"Tree 数据",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(h,null,{default:a(()=>[Z]),_:1}),s(c,{id:"Callbacks 回调",title:"Callbacks 回调",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(h,null,{default:a(()=>[$]),_:1}),s(c,{id:"Exposes 事件",title:"Exposes 事件",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(h,null,{default:a(()=>[tt]),_:1}),t("div",nt,[t("div",null,[s(_,{to:"/zh-CN/components/animation",class:"lay-link",style:{display:""}},{default:a(()=>[s(w,{type:"layui-icon-left"}),n("动画")]),_:1})]),t("div",null,[s(_,{to:"/zh-CN/components/fullscreen",class:"lay-link",style:{display:""}},{default:a(()=>[n("全屏 "),s(w,{type:"layui-icon-right"})]),_:1})])])])}}};export{ot as default,pt as frontmatter};
