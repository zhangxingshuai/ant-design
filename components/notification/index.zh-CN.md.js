webpackJsonp([166],{1641:function(t,n){t.exports={content:["section",["p","\u5168\u5c40\u5c55\u793a\u901a\u77e5\u63d0\u9192\u4fe1\u606f\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["p","\u5728\u7cfb\u7edf\u56db\u4e2a\u89d2\u663e\u793a\u901a\u77e5\u63d0\u9192\u4fe1\u606f\u3002\u7ecf\u5e38\u7528\u4e8e\u4ee5\u4e0b\u60c5\u51b5\uff1a"],["ul",["li",["p","\u8f83\u4e3a\u590d\u6742\u7684\u901a\u77e5\u5185\u5bb9\u3002"]],["li",["p","\u5e26\u6709\u4ea4\u4e92\u7684\u901a\u77e5\uff0c\u7ed9\u51fa\u7528\u6237\u4e0b\u4e00\u6b65\u7684\u884c\u52a8\u70b9\u3002"]],["li",["p","\u7cfb\u7edf\u4e3b\u52a8\u63a8\u9001\u3002"]]]],meta:{category:"Components",type:"Feedback",noinstant:!0,title:"Notification",subtitle:"\u901a\u77e5\u63d0\u9192\u6846",filename:"components/notification/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f55\u65f6\u4f7f\u7528",title:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["ul",["li",["p",["code","notification.success(config)"]]],["li",["p",["code","notification.error(config)"]]],["li",["p",["code","notification.info(config)"]]],["li",["p",["code","notification.warning(config)"]]],["li",["p",["code","notification.warn(config)"]]],["li",["p",["code","notification.close(key: String)"]]],["li",["p",["code","notification.destroy()"]]]],["p","config \u53c2\u6570\u5982\u4e0b\uff1a"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","btn"],["td","\u81ea\u5b9a\u4e49\u5173\u95ed\u6309\u94ae"],["td","ReactNode"],["td","-"]],["tr",["td","className"],["td","\u81ea\u5b9a\u4e49 CSS class"],["td","string"],["td","-"]],["tr",["td","description"],["td","\u901a\u77e5\u63d0\u9192\u5185\u5bb9\uff0c\u5fc5\u9009"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","duration"],["td","\u9ed8\u8ba4 4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\uff0c\u914d\u7f6e\u4e3a null \u5219\u4e0d\u81ea\u52a8\u5173\u95ed"],["td","number"],["td","4.5"]],["tr",["td","icon"],["td","\u81ea\u5b9a\u4e49\u56fe\u6807"],["td","ReactNode"],["td","-"]],["tr",["td","key"],["td","\u5f53\u524d\u901a\u77e5\u552f\u4e00\u6807\u5fd7"],["td","string"],["td","-"]],["tr",["td","message"],["td","\u901a\u77e5\u63d0\u9192\u6807\u9898\uff0c\u5fc5\u9009"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","placement"],["td","\u5f39\u51fa\u4f4d\u7f6e\uff0c\u53ef\u9009 ",["code","topLeft"]," ",["code","topRight"]," ",["code","bottomLeft"]," ",["code","bottomRight"]],["td","string"],["td","topRight"]],["tr",["td","style"],["td","\u81ea\u5b9a\u4e49\u5185\u8054\u6837\u5f0f"],["td",["a",{title:null,href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794"},"React.CSSProperties"]],["td","-"]],["tr",["td","onClose"],["td","\u70b9\u51fb\u9ed8\u8ba4\u5173\u95ed\u6309\u94ae\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"],["td","Function"],["td","-"]]]],["p","\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5168\u5c40\u914d\u7f6e\u65b9\u6cd5\uff0c\u5728\u8c03\u7528\u524d\u63d0\u524d\u914d\u7f6e\uff0c\u5168\u5c40\u4e00\u6b21\u751f\u6548\u3002"],["ul",["li",["p",["code","notification.config(options)"]]]],["pre",{lang:"js",highlighted:'notification<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  placement<span class="token punctuation">:</span> <span class="token string">\'bottomRight\'</span><span class="token punctuation">,</span>\n  bottom<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span>\n  duration<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","notification.config({\n  placement: 'bottomRight',\n  bottom: 50,\n  duration: 3,\n});"]],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","bottom"],["td","\u6d88\u606f\u4ece\u5e95\u90e8\u5f39\u51fa\u65f6\uff0c\u8ddd\u79bb\u5e95\u90e8\u7684\u4f4d\u7f6e\uff0c\u5355\u4f4d\u50cf\u7d20\u3002"],["td","number"],["td","24"]],["tr",["td","duration"],["td","\u9ed8\u8ba4\u81ea\u52a8\u5173\u95ed\u5ef6\u65f6\uff0c\u5355\u4f4d\u79d2"],["td","number"],["td","4.5"]],["tr",["td","getContainer"],["td","\u914d\u7f6e\u6e32\u67d3\u8282\u70b9\u7684\u8f93\u51fa\u4f4d\u7f6e"],["td","() => HTMLNode"],["td","() => document.body"]],["tr",["td","placement"],["td","\u5f39\u51fa\u4f4d\u7f6e\uff0c\u53ef\u9009 ",["code","topLeft"]," ",["code","topRight"]," ",["code","bottomLeft"]," ",["code","bottomRight"]],["td","string"],["td","topRight"]],["tr",["td","top"],["td","\u6d88\u606f\u4ece\u9876\u90e8\u5f39\u51fa\u65f6\uff0c\u8ddd\u79bb\u9876\u90e8\u7684\u4f4d\u7f6e\uff0c\u5355\u4f4d\u50cf\u7d20\u3002"],["td","number"],["td","24"]]]]]}}});