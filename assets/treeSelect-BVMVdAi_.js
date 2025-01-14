import{r as l,n as R,b as s,w as a,g as t,k as d,a as G,ak as e,al as k,f as n,t as H}from"./index-GZr1U6D_.js";const J={class:"markdown-body"},K=t("div",{class:"describe-plugin"},[t("p",null,"树形组件一般用于展示具有层级关系的数据")],-1),O=t("p",null,[n("使用 "),t("code",null,"lay-tree-select"),n(" 标签, 创建下拉树组件。")],-1),P=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lay-tree-select")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data1"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("lay-tree-select")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n("ref"),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},'"vue"'),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" value1 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" data1 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

data1`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级1"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"name1"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-1 可允许跳转"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"name11"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"https://www.layui.com/"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-3"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"23"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-3-1"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"24"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"五级1-1-3-1-1"'),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"30"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"五级1-1-3-1-2"'),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"31"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"7"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-1-1 可允许跳转"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"15"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"https://www.layui.com/doc/"'),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"8"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-2-1"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"32"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"9"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-3"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"20"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-3-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"21"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-3-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"22"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级2"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级2-1"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"5"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"11"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"12"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级2-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"6"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"13"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"14"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级3"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"16"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级3-1"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"17"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"fixed"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"19"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级3-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"27"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"28"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"29"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token function"},"handleClick"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"node"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
  console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),Q=t("p",null,[n("通过 "),t("code",null,"multiple"),n(" 标签, 开启下拉树多选。")],-1),W=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lay-tree-select")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value2"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data2"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"multiple"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("lay-tree-select")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},'"vue"'),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" value2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"23"),t("span",{class:"token punctuation"},","),t("span",{class:"token number"},"5555"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" data2 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级1"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"name1"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"checked"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-1 可允许跳转"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"name11"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"https://www.layui.com/"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-3"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"23"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-3-1"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"24"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"五级1-1-3-1-1"'),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"30"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"五级1-1-3-1-2"'),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"31"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"7"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-1-1 可允许跳转"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"15"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"https://www.layui.com/doc/"'),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"8"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-2-1"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"32"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"9"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-3"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"20"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-3-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"21"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-3-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"22"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级2"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级2-1"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"5"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"11"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"12"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级2-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"6"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"13"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"14"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级3"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"16"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级3-1"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"17"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"fixed"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"19"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级3-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"27"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"28"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"29"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),X=t("p",null,[n("通过 "),t("code",null,"disabled"),n(" 属性, 禁止选择。")],-1),Y=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lay-tree-select")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value3"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data3"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"disabled"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("lay-tree-select")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},'"vue"'),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" value3 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" data3 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级1"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"name1"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"checked"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-1 可允许跳转"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"name11"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"https://www.layui.com/"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-3"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"23"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-3-1"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"24"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"五级1-1-3-1-1"'),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"30"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"五级1-1-3-1-2"'),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"31"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"7"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-1-1 可允许跳转"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"15"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"https://www.layui.com/doc/"'),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"8"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-2-1"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"32"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"9"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-3"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"20"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-3-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"21"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-3-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"22"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级2"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级2-1"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"5"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"11"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"12"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级2-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"6"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"13"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"14"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"disabled"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级3"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"16"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级3-1"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"17"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"fixed"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"19"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级3-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"27"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"28"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"29"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),Z=t("p",null,[n("通过 "),t("code",null,"allow-clear"),n(" 属性开启清空操作。")],-1),$=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lay-tree-select")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value4"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data4"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("请选择"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":allow-clear"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"default-expand-all"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("lay-tree-select")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},'"vue"'),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" value4 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" data4 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级1"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"name1"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-1 可允许跳转"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"name11"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"https://www.layui.com/"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-3"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"23"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-3-1"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"24"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"五级1-1-3-1-1"'),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"30"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"五级1-1-3-1-2"'),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"31"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"7"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-1-1 可允许跳转"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"15"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"https://www.layui.com/doc/"'),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"8"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-2-1"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"32"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"9"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-3"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"20"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-3-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"21"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-3-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"22"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级2"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级2-1"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"5"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"11"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"12"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级2-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"6"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"13"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"14"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级3"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"16"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级3-1"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"17"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"fixed"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"19"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级3-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"27"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"28"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"29"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),tt=t("p",null,[n("通过 "),t("code",null,"search"),n(" 属性开启搜索，"),t("code",null,"searchNodeMethod"),n(" 设置对树过滤方法")],-1),nt=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lay-space")]),t("span",{class:"token punctuation"},">")]),n(`
  	`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lay-tree-select")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value9"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data8"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("请选择"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":allow-clear"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":search"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"multiple"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("lay-tree-select")]),t("span",{class:"token punctuation"},">")]),n(`
	`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("lay-space")]),t("span",{class:"token punctuation"},">")]),n(`
	`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lay-space")]),t("span",{class:"token punctuation"},">")]),n(`
		`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lay-tree-select")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value8"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data8"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("请选择 searchNodeMethod"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":allow-clear"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":search"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":searchNodeMethod"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("searchNodeMethod"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("lay-tree-select")]),t("span",{class:"token punctuation"},">")]),n(`
	`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("lay-space")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},'"vue"'),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" value8 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"const"),n(" value9 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"searchNodeMethod"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("node"),t("span",{class:"token punctuation"},","),n(" value")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
	console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},","),n(" value"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'node, value'"),t("span",{class:"token punctuation"},")"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" node"),t("span",{class:"token punctuation"},"."),n("title"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"includes"),t("span",{class:"token punctuation"},"("),n("value"),t("span",{class:"token punctuation"},")"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token keyword"},"const"),n(" data8 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级1"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"name1"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-1 可允许跳转"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"name11"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"https://www.layui.com/"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-3"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"23"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-3-1"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"24"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"五级1-1-3-1-1"'),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"30"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"五级1-1-3-1-2"'),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"31"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"7"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-1-1 可允许跳转"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"15"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"https://www.layui.com/doc/"'),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"8"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-2-1"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"32"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"9"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-3"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"20"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-3-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"21"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-3-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"22"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级2"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级2-1"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"5"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"11"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"12"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级2-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"6"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"13"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"14"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级3"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"16"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级3-1"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"17"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"fixed"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"19"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级3-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"27"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"28"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"29"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),st=t("p",null,[n("通过 "),t("code",null,"change"),n(" 属性开启清空操作。")],-1),at=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lay-tree-select")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value5"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data5"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("请选择"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@change"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("change"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":multiple"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("lay-tree-select")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},'"vue"'),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" value5 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"change"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"value"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
	console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),n("value"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" data5 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级1"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"name1"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-1 可允许跳转"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"name11"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"https://www.layui.com/"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-3"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"23"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-3-1"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"24"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"五级1-1-3-1-1"'),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"30"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"五级1-1-3-1-2"'),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"31"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"7"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-1-1 可允许跳转"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"15"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"https://www.layui.com/doc/"'),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"8"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-2-1"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"32"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"9"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-3"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"20"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-3-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"21"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-3-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"22"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级2"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级2-1"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"5"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"11"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"12"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级2-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"6"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"13"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"14"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级3"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"16"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级3-1"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"17"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"fixed"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"19"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级3-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"27"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"28"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"29"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),pt=t("p",null,"异步加载子节点",-1),ot=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lay-tree-select")]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value1"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data10"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"lazy"),n(`
    `),t("span",{class:"token attr-name"},":load"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("handleLoad"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("lay-tree-select")]),t("span",{class:"token punctuation"},">")]),n(`
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

`),t("span",{class:"token keyword"},"const"),n(" value1 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),n(`

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
`)])],-1),et=t("p",null,[n("通过 "),t("code",null,"change"),n(" 属性开启清空操作。")],-1),lt=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lay-tree-select")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value6"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data6"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("请选择"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@change"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("change"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":multiple"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{data}"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lay-icon")]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("layui-icon-addition"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},"/>")]),n(`
            {{ data.title }}
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("lay-tree-select")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},'"vue"'),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" value6 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"change"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"value"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
	console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),n("value"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" data6 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级1"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"name1"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-1 可允许跳转"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"3"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"name11"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"https://www.layui.com/"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-3"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"23"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-3-1"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"24"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"五级1-1-3-1-1"'),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"30"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"{"),n(`
					`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"五级1-1-3-1-2"'),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"31"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"7"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-1-1 可允许跳转"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"15"),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"href"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"https://www.layui.com/doc/"'),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"8"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"四级1-1-2-1"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"32"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"4"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"9"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级1-3"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"20"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-3-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"21"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级1-3-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"22"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级2"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级2-1"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"5"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"spread"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"11"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"12"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级2-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"6"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"13"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级2-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"14"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"一级3"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"16"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级3-1"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"17"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"fixed"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-1-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"18"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-1-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"19"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"二级3-2"'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"27"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-2-1"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"28"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
		`),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"三级3-2-2"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"29"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token literal-property property"},"field"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'""'),n(`
		`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),rt=t("p",null,[n("tree 组件 使用 "),t("code",null,"replaceFields"),n(" 替换 "),t("code",null,"data"),n(" 中的字段名")],-1),ct=t("pre",null,[t("code",{"v-pre":""},[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("lay-tree-select")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("value1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data7"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":replaceFields"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("replaceFields"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("lay-tree-select")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n("ref"),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},'"vue"'),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"const"),n(" value1 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"const"),n(" replaceFields "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token literal-property property"},"id"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'key'"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"title"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token literal-property property"},"children"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'child'"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`

`),t("span",{class:"token keyword"},"const"),n(" data7 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(`
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
`)])],-1),it=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"属性"),t("th",null,"描述"),t("th",null,"类型"),t("th",null,"可选值"),t("th",null,"默认值"),t("th",null,"版本")])]),t("tbody",null,[t("tr",null,[t("td",null,"v-model"),t("td",null,"选中值"),t("td",null,[t("code",null,"string"),n(),t("code",null,"number"),n(),t("code",null,"array")]),t("td",null,"–"),t("td",null,"–"),t("td")]),t("tr",null,[t("td",null,"data"),t("td",null,"树数据"),t("td",null,[t("code",null,"Array<{}>")]),t("td",null,"–"),t("td",null,"–"),t("td")]),t("tr",null,[t("td",null,"size"),t("td",null,"尺寸大小"),t("td",null,[t("code",null,"string")]),t("td",null,[t("code",null,"lg"),n(),t("code",null,"md"),n(),t("code",null,"sm"),n(),t("code",null,"xs")]),t("td",null,[t("code",null,"md")]),t("td")]),t("tr",null,[t("td",null,"multiple"),t("td",null,"开启多选"),t("td",null,[t("code",null,"boolean")]),t("td",null,"–"),t("td",null,[t("code",null,"false")]),t("td")]),t("tr",null,[t("td",null,"allow-clear"),t("td",null,"允许清空"),t("td",null,[t("code",null,"boolean")]),t("td",null,"–"),t("td",null,[t("code",null,"false")]),t("td")]),t("tr",null,[t("td",null,"disabled"),t("td",null,"禁用选择"),t("td",null,[t("code",null,"boolean")]),t("td",null,"–"),t("td",null,[t("code",null,"false")]),t("td")]),t("tr",null,[t("td",null,"placeholder"),t("td",null,"输入提示"),t("td",null,[t("code",null,"string")]),t("td",null,"–"),t("td",null,"–"),t("td")]),t("tr",null,[t("td",null,"check-strictly"),t("td",null,"禁用级联复选"),t("td",null,[t("code",null,"boolean")]),t("td",null,"–"),t("td",null,[t("code",null,"true")]),t("td")]),t("tr",null,[t("td",null,"collapse-tags-tooltip"),t("td",null,"折叠提示"),t("td",null,[t("code",null,"boolean")]),t("td",null,"–"),t("td",null,[t("code",null,"true")]),t("td")]),t("tr",null,[t("td",null,"min-collapsed-num"),t("td",null,"超过指定标签后开启折叠"),t("td",null,[t("code",null,"number")]),t("td",null,"–"),t("td",null,[t("code",null,"3")]),t("td")]),t("tr",null,[t("td",null,"search"),t("td",null,"是否开启搜索"),t("td",null,[t("code",null,"boolean")]),t("td",null,"–"),t("td",null,[t("code",null,"false")]),t("td")]),t("tr",null,[t("td",null,"search-node-method"),t("td",null,"对树节点进行筛选时执行的方法， 返回 false 则表示这个节点会被隐藏"),t("td",null,[t("code",null,"Fcuntion(node, value)")]),t("td",null,"–"),t("td",null,"–"),t("td")]),t("tr",null,[t("td",null,"lazy"),t("td",null,[n("是否懒加载子节点，需与 "),t("code",null,"load"),n(" 方法结合使用")]),t("td",null,[t("code",null,"boolean")]),t("td",null,"–"),t("td",null,[t("code",null,"false")]),t("td")]),t("tr",null,[t("td",null,"load"),t("td",null,[n("加载子树数据的方法，仅当 "),t("code",null,"lazy"),n(" 属性为 "),t("code",null,"true"),n(" 时生效")]),t("td",null,[t("code",null,"function(node, resolve)"),n("，node 为当前点击的节点，resolve 为数据加载完成的回调(必须调用)")]),t("td",null,"–"),t("td",null,"–"),t("td")]),t("tr",null,[t("td",null,"replace-fields"),t("td",null,[n("替换 data 中"),t("code",null,"id"),n(),t("code",null,"title"),n(),t("code",null,"children"),n(" 字段名")]),t("td",null,"–"),t("td",null,"–"),t("td",null,[t("code",null,'{id: "id", title: "title", children: "children"}')]),t("td")]),t("tr",null,[t("td",null,"default-expand-all"),t("td",null,[n("是否展开所有 "),t("code",null,"tree"),n(" 节点")]),t("td",null,[t("code",null,"boolean")]),t("td",null,"–"),t("td",null,[t("code",null,"false")]),t("td")]),t("tr",null,[t("td",null,"teleport-props"),t("td",null,[n("继承至 dropdown 组件，下拉面板 "),t("code",null,"传递"),n(" 属性")]),t("td",null,[t("code",null,"object")]),t("td",null,[t("code",null,"{to: 'body', disabled: false}")]),t("td",null,[t("code",null,"vue teleport"),n(" 组件")]),t("td",null,[t("code",null,"2.19.0")])])])],-1),ut=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"描述"),t("th",null,"参数")])]),t("tbody",null,[t("tr",null,[t("td",null,"change"),t("td",null,"选中值变化事件"),t("td",null,"–")])])],-1),kt={style:{display:"flex","justify-content":"space-between","margin-top":"20px"}},gt={},mt={__name:"treeSelect",setup(yt,{expose:U}){let r=l(1),q=l([]);q.value=[{title:"一级1",id:1,field:"name1",children:[{title:"二级1-1 可允许跳转",id:3,field:"name11",href:"https://www.layui.com/",children:[{title:"三级1-1-3",id:23,field:"",children:[{title:"四级1-1-3-1",id:24,field:"",children:[{title:"五级1-1-3-1-1",id:30},{title:"五级1-1-3-1-2",id:31}]}]},{title:"三级1-1-1",id:7,field:"",children:[{title:"四级1-1-1-1 可允许跳转",id:15,href:"https://www.layui.com/doc/"}]},{title:"三级1-1-2",id:8,field:"",children:[{title:"四级1-1-2-1",id:32}]}]},{title:"二级1-2",id:4,spread:!0,children:[{title:"三级1-2-1",id:9},{title:"三级1-2-2",id:10}]},{title:"二级1-3",id:20,field:"",children:[{title:"三级1-3-1",id:21,field:""},{title:"三级1-3-2",id:22,field:""}]}]},{title:"一级2",id:2,children:[{title:"二级2-1",id:5,spread:!0,children:[{title:"三级2-1-1",id:11},{title:"三级2-1-2",id:12}]},{title:"二级2-2",id:6,children:[{title:"三级2-2-1",id:13},{title:"三级2-2-2",id:14}]}]},{title:"一级3",id:16,field:"",children:[{title:"二级3-1",id:17,field:"",fixed:!0,children:[{title:"三级3-1-1",id:18,field:""},{title:"三级3-1-2",id:19,field:""}]},{title:"二级3-2",id:27,field:"",children:[{title:"三级3-2-1",id:28,field:""},{title:"三级3-2-2",id:29,field:""}]}]}];let g=l([23,5555]),C=l([{title:"一级1",id:1,field:"name1",checked:!0,spread:!0,children:[{title:"二级1-1 可允许跳转",id:3,field:"name11",href:"https://www.layui.com/",children:[{title:"三级1-1-3",id:23,field:"",children:[{title:"四级1-1-3-1",id:24,field:"",children:[{title:"五级1-1-3-1-1",id:30,field:""},{title:"五级1-1-3-1-2",id:31,field:""}]}]},{title:"三级1-1-1",id:7,field:"",children:[{title:"四级1-1-1-1 可允许跳转",id:15,field:"",href:"https://www.layui.com/doc/"}]},{title:"三级1-1-2",id:8,field:"",children:[{title:"四级1-1-2-1",id:32,field:""}]}]},{title:"二级1-2",id:4,spread:!0,children:[{title:"三级1-2-1",id:9,field:"",disabled:!0},{title:"三级1-2-2",id:10,field:""}]},{title:"二级1-3",id:20,field:"",children:[{title:"三级1-3-1",id:21,field:""},{title:"三级1-3-2",id:22,field:""}]}]},{title:"一级2",id:2,field:"",spread:!0,children:[{title:"二级2-1",id:5,field:"",spread:!0,children:[{title:"三级2-1-1",id:11,field:""},{title:"三级2-1-2",id:12,field:""}]},{title:"二级2-2",id:6,field:"",children:[{title:"三级2-2-1",id:13,field:""},{title:"三级2-2-2",id:14,field:"",disabled:!0}]}]},{title:"一级3",id:16,field:"",children:[{title:"二级3-1",id:17,field:"",fixed:!0,children:[{title:"三级3-1-1",id:18,field:""},{title:"三级3-1-2",id:19,field:""}]},{title:"二级3-2",id:27,field:"",children:[{title:"三级3-2-1",id:28,field:""},{title:"三级3-2-2",id:29,field:""}]}]}]),m=l([]),M=l([{title:"一级1",id:1,field:"name1",checked:!0,spread:!0,children:[{title:"二级1-1 可允许跳转",id:3,field:"name11",href:"https://www.layui.com/",children:[{title:"三级1-1-3",id:23,field:"",children:[{title:"四级1-1-3-1",id:24,field:"",children:[{title:"五级1-1-3-1-1",id:30,field:""},{title:"五级1-1-3-1-2",id:31,field:""}]}]},{title:"三级1-1-1",id:7,field:"",children:[{title:"四级1-1-1-1 可允许跳转",id:15,field:"",href:"https://www.layui.com/doc/"}]},{title:"三级1-1-2",id:8,field:"",children:[{title:"四级1-1-2-1",id:32,field:""}]}]},{title:"二级1-2",id:4,spread:!0,children:[{title:"三级1-2-1",id:9,field:"",disabled:!0},{title:"三级1-2-2",id:10,field:""}]},{title:"二级1-3",id:20,field:"",children:[{title:"三级1-3-1",id:21,field:""},{title:"三级1-3-2",id:22,field:""}]}]},{title:"一级2",id:2,field:"",spread:!0,children:[{title:"二级2-1",id:5,field:"",spread:!0,children:[{title:"三级2-1-1",id:11,field:""},{title:"三级2-1-2",id:12,field:""}]},{title:"二级2-2",id:6,field:"",children:[{title:"三级2-2-1",id:13,field:""},{title:"三级2-2-2",id:14,field:"",disabled:!0}]}]},{title:"一级3",id:16,field:"",children:[{title:"二级3-1",id:17,field:"",fixed:!0,children:[{title:"三级3-1-1",id:18,field:""},{title:"三级3-1-2",id:19,field:""}]},{title:"二级3-2",id:27,field:"",children:[{title:"三级3-2-1",id:28,field:""},{title:"三级3-2-2",id:29,field:""}]}]}]),f=l([]),F=l([{title:"一级1",id:1,field:"name1",children:[{title:"二级1-1 可允许跳转",id:3,field:"name11",href:"https://www.layui.com/",children:[{title:"三级1-1-3",id:23,field:"",children:[{title:"四级1-1-3-1",id:24,field:"",children:[{title:"五级1-1-3-1-1",id:30},{title:"五级1-1-3-1-2",id:31}]}]},{title:"三级1-1-1",id:7,field:"",children:[{title:"四级1-1-1-1 可允许跳转",id:15,href:"https://www.layui.com/doc/"}]},{title:"三级1-1-2",id:8,field:"",children:[{title:"四级1-1-2-1",id:32}]}]},{title:"二级1-2",id:4,spread:!0,children:[{title:"三级1-2-1",id:9},{title:"三级1-2-2",id:10}]},{title:"二级1-3",id:20,field:"",children:[{title:"三级1-3-1",id:21,field:""},{title:"三级1-3-2",id:22,field:""}]}]},{title:"一级2",id:2,children:[{title:"二级2-1",id:5,spread:!0,children:[{title:"三级2-1-1",id:11},{title:"三级2-1-2",id:12}]},{title:"二级2-2",id:6,children:[{title:"三级2-2-1",id:13},{title:"三级2-2-2",id:14}]}]},{title:"一级3",id:16,field:"",children:[{title:"二级3-1",id:17,field:"",fixed:!0,children:[{title:"三级3-1-1",id:18,field:""},{title:"三级3-1-2",id:19,field:""}]},{title:"二级3-2",id:27,field:"",children:[{title:"三级3-2-1",id:28,field:""},{title:"三级3-2-2",id:29,field:""}]}]}]),h=l(),b=l([]),S=(i,o)=>(console.log(i,o,"node, value"),i.title.includes(o)),V=l([{title:"一级1",id:1,field:"name1",children:[{title:"二级1-1 可允许跳转",id:3,field:"name11",href:"https://www.layui.com/",children:[{title:"三级1-1-3",id:23,field:"",children:[{title:"四级1-1-3-1",id:24,field:"",children:[{title:"五级1-1-3-1-1",id:30},{title:"五级1-1-3-1-2",id:31}]}]},{title:"三级1-1-1",id:7,field:"",children:[{title:"四级1-1-1-1 可允许跳转",id:15,href:"https://www.layui.com/doc/"}]},{title:"三级1-1-2",id:8,field:"",children:[{title:"四级1-1-2-1",id:32}]}]},{title:"二级1-2",id:4,spread:!0,children:[{title:"三级1-2-1",id:9},{title:"三级1-2-2",id:10}]},{title:"二级1-3",id:20,field:"",children:[{title:"三级1-3-1",id:21,field:""},{title:"三级1-3-2",id:22,field:""}]}]},{title:"一级2",id:2,children:[{title:"二级2-1",id:5,spread:!0,children:[{title:"三级2-1-1",id:11},{title:"三级2-1-2",id:12}]},{title:"二级2-2",id:6,children:[{title:"三级2-2-1",id:13},{title:"三级2-2-2",id:14}]}]},{title:"一级3",id:16,field:"",children:[{title:"二级3-1",id:17,field:"",fixed:!0,children:[{title:"三级3-1-1",id:18,field:""},{title:"三级3-1-2",id:19,field:""}]},{title:"二级3-2",id:27,field:"",children:[{title:"三级3-2-1",id:28,field:""},{title:"三级3-2-2",id:29,field:""}]}]}]),w=l([]),_=i=>{console.log(i)},z=l([{title:"一级1",id:1,field:"name1",children:[{title:"二级1-1 可允许跳转",id:3,field:"name11",href:"https://www.layui.com/",children:[{title:"三级1-1-3",id:23,field:"",children:[{title:"四级1-1-3-1",id:24,field:"",children:[{title:"五级1-1-3-1-1",id:30},{title:"五级1-1-3-1-2",id:31}]}]},{title:"三级1-1-1",id:7,field:"",children:[{title:"四级1-1-1-1 可允许跳转",id:15,href:"https://www.layui.com/doc/"}]},{title:"三级1-1-2",id:8,field:"",children:[{title:"四级1-1-2-1",id:32}]}]},{title:"二级1-2",id:4,spread:!0,children:[{title:"三级1-2-1",id:9},{title:"三级1-2-2",id:10}]},{title:"二级1-3",id:20,field:"",children:[{title:"三级1-3-1",id:21,field:""},{title:"三级1-3-2",id:22,field:""}]}]},{title:"一级2",id:2,children:[{title:"二级2-1",id:5,spread:!0,children:[{title:"三级2-1-1",id:11},{title:"三级2-1-2",id:12}]},{title:"二级2-2",id:6,children:[{title:"三级2-2-1",id:13},{title:"三级2-2-2",id:14}]}]},{title:"一级3",id:16,field:"",children:[{title:"二级3-1",id:17,field:"",fixed:!0,children:[{title:"三级3-1-1",id:18,field:""},{title:"三级3-1-2",id:19,field:""}]},{title:"二级3-2",id:27,field:"",children:[{title:"三级3-2-1",id:28,field:""},{title:"三级3-2-2",id:29,field:""}]}]}]),B=l([{title:"一级1",id:1},{title:"一级2",id:2,children:[{title:"一级2-1",id:21}]}]);r=l(1);let L=(i,o)=>{console.log(i),i.id===1?setTimeout(()=>{o([{title:"一级1-1",id:11},{title:"一级1-2",id:12}])},2e3):i.id===11?o([{title:"一级1-1-1",id:111},{title:"一级1-2-1",id:121}]):o([])},v=l([]);_=i=>{console.log(i)};let A=l([{title:"一级1",id:1,field:"name1",children:[{title:"二级1-1 可允许跳转",id:3,field:"name11",href:"https://www.layui.com/",children:[{title:"三级1-1-3",id:23,field:"",children:[{title:"四级1-1-3-1",id:24,field:"",children:[{title:"五级1-1-3-1-1",id:30},{title:"五级1-1-3-1-2",id:31}]}]},{title:"三级1-1-1",id:7,field:"",children:[{title:"四级1-1-1-1 可允许跳转",id:15,href:"https://www.layui.com/doc/"}]},{title:"三级1-1-2",id:8,field:"",children:[{title:"四级1-1-2-1",id:32}]}]},{title:"二级1-2",id:4,spread:!0,children:[{title:"三级1-2-1",id:9},{title:"三级1-2-2",id:10}]},{title:"二级1-3",id:20,field:"",children:[{title:"三级1-3-1",id:21,field:""},{title:"三级1-3-2",id:22,field:""}]}]},{title:"一级2",id:2,children:[{title:"二级2-1",id:5,spread:!0,children:[{title:"三级2-1-1",id:11},{title:"三级2-1-2",id:12}]},{title:"二级2-2",id:6,children:[{title:"三级2-2-1",id:13},{title:"三级2-2-2",id:14}]}]},{title:"一级3",id:16,field:"",children:[{title:"二级3-1",id:17,field:"",fixed:!0,children:[{title:"三级3-1-1",id:18,field:""},{title:"三级3-1-2",id:19,field:""}]},{title:"二级3-2",id:27,field:"",children:[{title:"三级3-2-1",id:28,field:""},{title:"三级3-2-2",id:29,field:""}]}]}]);r=l(1);let D=l({id:"key",title:"name",children:"child"}),E=l([{name:"一级1",key:1,spread:!0,child:[{name:"一级1-1",key:11,child:[{name:"一级1-1-1",key:111},{name:"一级1-1-2",key:112}]},{name:"一级1-2",key:12,child:[{name:"一级1-2-1",key:121},{name:"一级1-2-2",key:122}]}]},{name:"一级2",key:2,spread:!0,child:[{name:"一级2-1",key:21,spread:!0},{name:"一级2-2",key:22,spread:!0,child:[{name:"一级2-2-1",key:221,spread:!0}]}]}]);return U({frontmatter:{}}),(i,o)=>{const I=d("lay-anchor"),c=d("lay-field"),u=d("lay-tree-select"),y=d("lay-code"),N=d("lay-space"),x=d("lay-icon"),T=d("lay-table-box"),j=d("router-link");return G(),R("div",J,[s(I,{anchors:"基本介绍,基础使用,开启多选,禁止选择,允许清空,启用搜索,回调事件,懒加载子节点,Title 插槽,tree 自定义字段,Tree Select 属性,Tree Select 事件",currIndex:-1,show:!0}),s(c,{id:"基本介绍",title:"基本介绍",style:{"margin-top":"21px","margin-bottom":"20px"}}),K,s(c,{id:"基础使用",title:"基础使用",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(y,null,{description:a(()=>[O]),code:a(()=>[P]),default:a(()=>[s(u,{modelValue:e(r),"onUpdate:modelValue":o[0]||(o[0]=p=>k(r)?r.value=p:r=p),data:e(q)},null,8,["modelValue","data"])]),_:1}),s(c,{id:"开启多选",title:"开启多选",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(y,null,{description:a(()=>[Q]),code:a(()=>[W]),default:a(()=>[s(u,{modelValue:e(g),"onUpdate:modelValue":o[1]||(o[1]=p=>k(g)?g.value=p:g=p),data:e(C),multiple:""},null,8,["modelValue","data"])]),_:1}),s(c,{id:"禁止选择",title:"禁止选择",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(y,null,{description:a(()=>[X]),code:a(()=>[Y]),default:a(()=>[s(u,{modelValue:e(m),"onUpdate:modelValue":o[2]||(o[2]=p=>k(m)?m.value=p:m=p),data:e(M),disabled:""},null,8,["modelValue","data"])]),_:1}),s(c,{id:"允许清空",title:"允许清空",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(y,null,{description:a(()=>[Z]),code:a(()=>[$]),default:a(()=>[s(u,{modelValue:e(f),"onUpdate:modelValue":o[3]||(o[3]=p=>k(f)?f.value=p:f=p),data:e(F),placeholder:"请选择","allow-clear":!0,"default-expand-all":""},null,8,["modelValue","data"])]),_:1}),s(c,{id:"启用搜索",title:"启用搜索",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(y,null,{description:a(()=>[tt]),code:a(()=>[nt]),default:a(()=>[s(N,null,{default:a(()=>[s(u,{modelValue:e(b),"onUpdate:modelValue":o[4]||(o[4]=p=>k(b)?b.value=p:b=p),data:e(V),placeholder:"请选择","allow-clear":!0,search:!0,multiple:""},null,8,["modelValue","data"])]),_:1}),s(N,null,{default:a(()=>[s(u,{modelValue:e(h),"onUpdate:modelValue":o[5]||(o[5]=p=>k(h)?h.value=p:h=p),data:e(V),placeholder:"请选择 searchNodeMethod","allow-clear":!0,search:!0,searchNodeMethod:e(S)},null,8,["modelValue","data","searchNodeMethod"])]),_:1})]),_:1}),s(c,{id:"回调事件",title:"回调事件",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(y,null,{description:a(()=>[st]),code:a(()=>[at]),default:a(()=>[s(u,{modelValue:e(w),"onUpdate:modelValue":o[6]||(o[6]=p=>k(w)?w.value=p:w=p),data:e(z),placeholder:"请选择",onChange:e(_),multiple:!0},null,8,["modelValue","data","onChange"])]),_:1}),s(c,{id:"懒加载子节点",title:"懒加载子节点",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(y,null,{description:a(()=>[pt]),code:a(()=>[ot]),default:a(()=>[s(u,{modelValue:e(r),"onUpdate:modelValue":o[7]||(o[7]=p=>k(r)?r.value=p:r=p),data:e(B),lazy:"",load:e(L)},null,8,["modelValue","data","load"])]),_:1}),s(c,{id:"Title 插槽",title:"Title 插槽",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(y,null,{description:a(()=>[et]),code:a(()=>[lt]),default:a(()=>[s(u,{modelValue:e(v),"onUpdate:modelValue":o[8]||(o[8]=p=>k(v)?v.value=p:v=p),data:e(A),placeholder:"请选择",onChange:e(_),multiple:!0},{title:a(({data:p})=>[t("div",null,[s(x,{type:"layui-icon-addition"}),n(" "+H(p.title),1)])]),_:1},8,["modelValue","data","onChange"])]),_:1}),s(c,{id:"tree 自定义字段",title:"tree 自定义字段",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(y,null,{description:a(()=>[rt]),code:a(()=>[ct]),default:a(()=>[s(u,{modelValue:e(r),"onUpdate:modelValue":o[9]||(o[9]=p=>k(r)?r.value=p:r=p),data:e(E),replaceFields:e(D)},null,8,["modelValue","data","replaceFields"])]),_:1}),s(c,{id:"Tree Select 属性",title:"Tree Select 属性",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(T,null,{default:a(()=>[it]),_:1}),s(c,{id:"Tree Select 事件",title:"Tree Select 事件",style:{"margin-top":"21px","margin-bottom":"20px"}}),s(T,null,{default:a(()=>[ut]),_:1}),t("div",kt,[t("div",null,[s(j,{to:"/zh-CN/components/animation",class:"lay-link",style:{display:""}},{default:a(()=>[s(x,{type:"layui-icon-left"}),n("动画")]),_:1})]),t("div",null,[s(j,{to:"/zh-CN/components/fullscreen",class:"lay-link",style:{display:""}},{default:a(()=>[n("全屏 "),s(x,{type:"layui-icon-right"})]),_:1})])])])}}};export{mt as default,gt as frontmatter};
