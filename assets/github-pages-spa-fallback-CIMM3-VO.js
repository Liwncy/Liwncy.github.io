import{d as r,r as l,o as g,c as m,f as t,a6 as o,w as p,a as s,g as a}from"./index-D_U-TA1C.js";const h={class:"markdown-body"},x={},v="",w=r({__name:"github-pages-spa-fallback",setup(k,{expose:u}){return u({frontmatter:{},excerpt:void 0}),(b,n)=>{const d=l("lay-anchor"),e=l("lay-field"),i=l("lay-quote"),c=l("lay-table-box");return g(),m("div",h,[t(d,{anchors:"背景说明,解决思路,手动发布步骤,一键命令,验证方式,注意事项",currindex:-1,show:!0}),t(e,{id:"背景说明",title:"背景说明",style:{"margin-top":"21px","margin-bottom":"20px"}}),n[4]||(n[4]=o(`<div class="describe-plugin"><p>GitHub Pages 不认识 Vue Router 的 history 子路由，直接访问 <code class="">/lite-video</code>、<code class="">/admin/dashboard</code> 这类路径时，会先按静态文件查找，所以容易出现 404。</p></div><p>Vue Router 使用 <code class="">history</code> 模式时，页面路径看起来像真实地址：</p><div class="language-text"><pre><code class="">/
/lite-video
/admin/dashboard
</code></pre></div><p>在本地 Vite 开发服务器里，这些路径都能正常访问。但部署到 GitHub Pages 后，直接打开子页面或刷新子页面时，GitHub Pages 会把 URL 当成真实文件路径处理。</p><p>例如访问：</p><div class="language-text"><pre><code class="">https://liwncy.github.io/lite-video
</code></pre></div><p>GitHub Pages 会尝试查找仓库里的 <code class="">lite-video</code> 文件或目录。实际静态站点里只有 <code class="">index.html</code> 和 <code class="">assets/</code>，所以服务器层面会返回 404。</p>`,7)),t(i,{style:{"margin-left":"0","margin-right":"0","margin-top":"20px","margin-bottom":"40px"}},{default:p(()=>[...n[0]||(n[0]=[s("p",null,"这个问题不是 Vue Router 配置错误，而是 GitHub Pages 静态托管的限制。",-1)])]),_:1}),t(e,{id:"解决思路",title:"解决思路",style:{"margin-top":"21px","margin-bottom":"20px"}}),n[5]||(n[5]=o('<p>把构建后的 <code class="">index.html</code> 复制一份，改名为 <code class="">404.html</code>，放在 GitHub Pages 仓库根目录。</p><p>当 GitHub Pages 找不到 <code class="">/lite-video</code> 这种真实路径时，会返回 <code class="">404.html</code>。只要 <code class="">404.html</code> 内容和 <code class="">index.html</code> 一样，浏览器仍然能加载 Vue 应用。Vue 启动后会根据当前 URL 渲染正确的路由页面。</p><div class="describe-plugin"><p>这种方式下，直接访问子页面时 HTTP 状态码仍可能是 <code class="">404</code>，但页面内容能正常渲染。这是 GitHub Pages + history 路由的常见兜底方案。</p></div>',3)),t(c,null,{default:p(()=>[...n[1]||(n[1]=[s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"文件"),s("th",null,"作用")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",{class:""},"index.html")]),s("td",null,"正常访问站点首页时加载 Vue 应用")]),s("tr",null,[s("td",null,[s("code",{class:""},"404.html")]),s("td",null,"直接访问子路由时兜底加载 Vue 应用")]),s("tr",null,[s("td",null,[s("code",{class:""},".nojekyll")]),s("td",null,"禁止 GitHub Pages 按 Jekyll 规则处理静态资源")]),s("tr",null,[s("td",null,[s("code",{class:""},"assets/")]),s("td",null,"Vite 构建后的 JS、CSS、图片等静态资源")])])],-1)])]),_:1}),t(e,{id:"手动发布步骤",title:"手动发布步骤",style:{"margin-top":"21px","margin-bottom":"20px"}}),n[6]||(n[6]=o(`<h3>1. 构建前端</h3><p>在 <code class="">mi-xian-ju-ui</code> 目录执行：</p><div class="language-powershell"><pre><code class="">pnpm build:prod
</code></pre></div><p>构建产物会生成到：</p><div class="language-text"><pre><code class="">D:\\Workspace\\mygithub\\Liwncy\\mi-xian-ju-ui\\dist
</code></pre></div><h3>2. 清空 GitHub Pages 仓库旧文件</h3><p>目标目录：</p><div class="language-text"><pre><code class="">D:\\Workspace\\mygithub\\Liwncy.github.io
</code></pre></div><p>清空该目录下除 <code class="">.git</code> 以外的旧文件和旧 <code class="">assets</code>。</p>`,9)),t(i,{style:{"margin-left":"0","margin-right":"0","margin-top":"20px","margin-bottom":"40px"}},{default:p(()=>[...n[2]||(n[2]=[s("p",null,[a("不要删除 "),s("code",{class:""},".git"),a(" 目录，否则目标仓库会丢失 Git 信息。")],-1)])]),_:1}),n[7]||(n[7]=o(`<h3>3. 复制 dist 文件</h3><p>把：</p><div class="language-text"><pre><code class="">D:\\Workspace\\mygithub\\Liwncy\\mi-xian-ju-ui\\dist\\*
</code></pre></div><p>复制到：</p><div class="language-text"><pre><code class="">D:\\Workspace\\mygithub\\Liwncy.github.io
</code></pre></div><p>复制完成后，目标目录应该类似：</p><div class="language-text"><pre><code class="">Liwncy.github.io/
├── assets/
├── index.html
└── ...
</code></pre></div><h3>4. 复制 404.html</h3><p>在 <code class="">Liwncy.github.io</code> 根目录，把 <code class="">index.html</code> 复制一份并命名为 <code class="">404.html</code>：</p><div class="language-powershell"><pre><code class=""><span class="token function">Copy-Item</span> \`
  <span class="token operator">-</span>Path <span class="token string">&quot;D:\\Workspace\\mygithub\\Liwncy.github.io\\index.html&quot;</span> \`
  <span class="token operator">-</span>Destination <span class="token string">&quot;D:\\Workspace\\mygithub\\Liwncy.github.io\\404.html&quot;</span> \`
  <span class="token operator">-</span>Force
</code></pre></div><p>最终根目录至少应该有：</p><div class="language-text"><pre><code class="">index.html
404.html
assets/
</code></pre></div><h3>5. 添加 .nojekyll</h3><p>建议保留一个空的 <code class="">.nojekyll</code> 文件：</p><div class="language-powershell"><pre><code class=""><span class="token function">New-Item</span> \`
  <span class="token operator">-</span>Path <span class="token string">&quot;D:\\Workspace\\mygithub\\Liwncy.github.io\\.nojekyll&quot;</span> \`
  <span class="token operator">-</span>ItemType File \`
  <span class="token operator">-</span>Force
</code></pre></div><h3>6. 提交并推送</h3><p>进入 <code class="">Liwncy.github.io</code> 目录：</p><div class="language-powershell"><pre><code class="">cd D:\\Workspace\\mygithub\\Liwncy<span class="token punctuation">.</span>github<span class="token punctuation">.</span>io
git add <span class="token operator">-</span>A
git commit <span class="token operator">-</span>m <span class="token string">&quot;部署更新&quot;</span>
git push
</code></pre></div><p>推送后，GitHub Pages 会自动发布。</p>`,19)),t(e,{id:"一键命令",title:"一键命令",style:{"margin-top":"21px","margin-bottom":"20px"}}),n[8]||(n[8]=o(`<p>如果确认目标仓库没有未提交内容，可以用下面的 PowerShell 命令完成复制：</p><div class="language-powershell"><pre><code class="">cd D:\\Workspace\\mygithub\\Liwncy\\<span class="token function">mi</span><span class="token operator">-</span>xian-ju-ui
pnpm build:prod

<span class="token function">Get-ChildItem</span> <span class="token operator">-</span>Force <span class="token string">&quot;D:\\Workspace\\mygithub\\Liwncy.github.io&quot;</span> <span class="token punctuation">|</span>
  <span class="token function">Where-Object</span> <span class="token punctuation">{</span> <span class="token variable">$_</span><span class="token punctuation">.</span>Name <span class="token operator">-ne</span> <span class="token string">&quot;.git&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">|</span>
  <span class="token function">Remove-Item</span> <span class="token operator">-</span>Recurse <span class="token operator">-</span>Force

<span class="token function">Copy-Item</span> \`
  <span class="token operator">-</span>Path <span class="token string">&quot;D:\\Workspace\\mygithub\\Liwncy\\mi-xian-ju-ui\\dist\\*&quot;</span> \`
  <span class="token operator">-</span>Destination <span class="token string">&quot;D:\\Workspace\\mygithub\\Liwncy.github.io&quot;</span> \`
  <span class="token operator">-</span>Recurse \`
  <span class="token operator">-</span>Force

<span class="token function">Copy-Item</span> \`
  <span class="token operator">-</span>Path <span class="token string">&quot;D:\\Workspace\\mygithub\\Liwncy.github.io\\index.html&quot;</span> \`
  <span class="token operator">-</span>Destination <span class="token string">&quot;D:\\Workspace\\mygithub\\Liwncy.github.io\\404.html&quot;</span> \`
  <span class="token operator">-</span>Force

<span class="token function">New-Item</span> \`
  <span class="token operator">-</span>Path <span class="token string">&quot;D:\\Workspace\\mygithub\\Liwncy.github.io\\.nojekyll&quot;</span> \`
  <span class="token operator">-</span>ItemType File \`
  <span class="token operator">-</span>Force

cd D:\\Workspace\\mygithub\\Liwncy<span class="token punctuation">.</span>github<span class="token punctuation">.</span>io
git add <span class="token operator">-</span>A
git commit <span class="token operator">-</span>m <span class="token string">&quot;部署更新&quot;</span>
git push
</code></pre></div>`,2)),t(e,{id:"验证方式",title:"验证方式",style:{"margin-top":"21px","margin-bottom":"20px"}}),n[9]||(n[9]=s("p",null,"发布后访问首页：",-1)),n[10]||(n[10]=s("div",{class:"language-text"},[s("pre",null,[s("code",{class:""},`https://liwncy.github.io/
`)])],-1)),n[11]||(n[11]=s("p",null,"再直接访问子页面：",-1)),n[12]||(n[12]=s("div",{class:"language-text"},[s("pre",null,[s("code",{class:""},`https://liwncy.github.io/lite-video
https://liwncy.github.io/admin/dashboard
`)])],-1)),n[13]||(n[13]=s("p",null,"如果能看到 Vue 应用正常渲染，就说明 fallback 生效。",-1)),t(e,{id:"注意事项",title:"注意事项",style:{"margin-top":"21px","margin-bottom":"20px"}}),t(c,null,{default:p(()=>[...n[3]||(n[3]=[s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"注意点"),s("th",null,"说明")])]),s("tbody",null,[s("tr",null,[s("td",null,[a("每次构建后都要重新复制 "),s("code",{class:""},"404.html")]),s("td",null,[a("Vite 资源文件名带 hash，旧 "),s("code",{class:""},"404.html"),a(" 可能引用旧资源")])]),s("tr",null,[s("td",null,"子页面直达可能仍是 HTTP 404"),s("td",null,"GitHub Pages 返回的是 404 页面，但页面内容能正常渲染")]),s("tr",null,[s("td",null,[s("code",{class:""},".nojekyll"),a(" 建议保留")]),s("td",null,"避免 GitHub Pages 对静态资源做 Jekyll 处理")]),s("tr",null,[s("td",null,"hash 路由不需要该方案"),s("td",null,[a("例如 "),s("code",{class:""},"/#/lite-video"),a("，但 URL 不如 history 模式美观")])])])],-1)])]),_:1})])}}});export{w as default,v as excerpt,x as frontmatter};
