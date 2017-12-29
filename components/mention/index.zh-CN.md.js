webpackJsonp([174],{1629:function(t,n){t.exports={content:["section",["p","\u63d0\u53ca\u7ec4\u4ef6\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["p","\u7528\u4e8e\u5728\u8f93\u5165\u4e2d\u63d0\u53ca\u67d0\u4eba\u6216\u67d0\u4e8b\uff0c\u5e38\u7528\u4e8e\u53d1\u5e03\u3001\u804a\u5929\u6216\u8bc4\u8bba\u529f\u80fd\u3002"]],meta:{category:"Components",subtitle:"\u63d0\u53ca",type:"Data Entry",title:"Mention",filename:"components/mention/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f55\u65f6\u4f7f\u7528",title:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mention</span>\n  <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>\n  <span class="token attr-name">suggestions</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'afc163\'</span><span class="token punctuation">,</span> <span class="token string">\'benjycui\'</span><span class="token punctuation">,</span> <span class="token string">\'yiminghe\'</span><span class="token punctuation">,</span> <span class="token string">\'jljsj33\'</span><span class="token punctuation">,</span> <span class="token string">\'dqaria\'</span><span class="token punctuation">,</span> <span class="token string">\'RaoHai\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>'},["code","<Mention\n  onChange={onChange}\n  suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}\n/>"]],["h3","Mention API"],["table",["thead",["tr",["th","API"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"]]],["tbody",["tr",["td","getMentions"],["td","\u83b7\u53d6\u5f53\u524d contentState \u4e2d\u63d0\u5230\u7684\u4eba\u7684\u5217\u8868"],["td","Function(contentState: ContentState): string","[","]"]],["tr",["td","toContentState"],["td","\u628a\u5b57\u7b26\u4e32\u8f6c\u6210 ContentState"],["td","Function(value: string): ContentState"]],["tr",["td","toString"],["td","\u628a ContentState \u8f6c\u6210\u5b57\u7b26\u4e32"],["td","Function(contentState: ContentState): string"]]]],["h3","Mention"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","autoFocus"],["td","\u81ea\u52a8\u83b7\u53d6\u7126\u70b9"],["td","boolean"],["td","false"]],["tr",["td","defaultValue"],["td","\u9ed8\u8ba4\u503c"],["td","ContentState, \u53ef\u4ee5\u7528 ",["code","Mention.toContentState(text)"]," \u628a\u6587\u5b57\u8f6c\u6362\u6210 ContentState"],["td","null"]],["tr",["td","disabled"],["td","\u662f\u5426\u7981\u7528\u72b6\u6001."],["td","boolean"],["td","false"]],["tr",["td","getSuggestionContainer"],["td","\u83dc\u5355\u6e32\u67d3\u7236\u8282\u70b9\u3002\u9ed8\u8ba4\u6e32\u67d3\u5230 body \u4e0a\uff0c\u5982\u679c\u4f60\u9047\u5230\u83dc\u5355\u6eda\u52a8\u5b9a\u4f4d\u95ee\u9898\uff0c\u8bd5\u8bd5\u4fee\u6539\u4e3a\u6eda\u52a8\u7684\u533a\u57df\uff0c\u5e76\u76f8\u5bf9\u5176\u5b9a\u4f4d"],["td","function()"],["td","() => document.body"]],["tr",["td","loading"],["td","\u52a0\u8f7d\u4e2d"],["td","boolean"],["td","false"]],["tr",["td","multiLines"],["td","\u591a\u884c\u6a21\u5f0f"],["td","boolean"],["td","false"]],["tr",["td","notFoundContent"],["td","\u672a\u627e\u5230\u65f6\u7684\u5185\u5bb9"],["td","string"],["td","'\u65e0\u5339\u914d\u7ed3\u679c\uff0c\u8f7b\u6572\u7a7a\u683c\u5b8c\u6210\u8f93\u5165'"]],["tr",["td","placeholder"],["td","\u8f93\u5165\u6846\u9ed8\u8ba4\u6587\u5b57"],["td","string"],["td","null"]],["tr",["td","placement"],["td","\u5efa\u8bae\u6846\u4f4d\u7f6e\uff0c\u53ef\u9009 ",["code","top"]," ",["code","bottom"]],["td","string"],["td","'bottom'"]],["tr",["td","prefix"],["td","\u89e6\u53d1\u5f39\u51fa\u4e0b\u62c9\u6846\u7684\u5b57\u7b26"],["td","string or Array",["string"]],["td","'@'"]],["tr",["td","readOnly"],["td","\u662f\u5426\u53ea\u8bfb."],["td","boolean"],["td","false"]],["tr",["td","suggestions"],["td","\u5efa\u8bae\u5185\u5bb9"],["td","Array","<","string","|","Mention.Nav>"],["td","[","]"]],["tr",["td","suggestionStyle"],["td","\u5f39\u51fa\u4e0b\u62c9\u6846\u6837\u5f0f"],["td","object"],["td","{}"]],["tr",["td","value"],["td","\u503c"],["td","ContentState"],["td","null"]],["tr",["td","onBlur"],["td","\u5931\u53bb\u7126\u70b9\u65f6\u56de\u8c03"],["td","function(e)"],["td","null"]],["tr",["td","onChange"],["td","\u8f93\u5165\u6846\u5185\u5bb9\u53d8\u5316\u65f6\u56de\u8c03"],["td","function(contentState: ContentState)"],["td","null"]],["tr",["td","onFocus"],["td","\u83b7\u5f97\u7126\u70b9\u65f6\u56de\u8c03"],["td","function(e)"],["td","null"]],["tr",["td","onSearchChange"],["td","\u8f93\u5165\u6846\u4e2d @ \u53d8\u5316\u65f6\u56de\u8c03"],["td","function(value:string, trigger: string)"],["td","[","]"]],["tr",["td","onSelect"],["td","\u4e0b\u62c9\u6846\u9009\u62e9\u5efa\u8bae\u65f6\u56de\u8c03"],["td","function(suggestion: string, data?: any)"],["td","null"]]]],["h3","Mention \u65b9\u6cd5"],["table",["thead",["tr",["th","\u540d\u79f0"],["th","\u63cf\u8ff0"]]],["tbody",["tr",["td","blur()"],["td","\u79fb\u9664\u7126\u70b9"]],["tr",["td","focus()"],["td","\u83b7\u53d6\u7126\u70b9"]]]],["h3","Nav"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","children"],["td","\u5efa\u8bae\u5185\u5bb9"],["td","object"],["td","{}"]],["tr",["td","value"],["td","\u5efa\u8bae\u503c\uff0c\u9009\u62e9\u5efa\u8bae\u65f6\uff0c\u7528\u6b64\u503c\u63d2\u5165\u5230\u8f93\u5165\u6846\u4e2d"],["td","string"],["td",'""']]]]]}}});