webpackJsonp([20],{1065:function(n,s){n.exports='<h1 id="vcl-notifier">vcl-notifier</h1>\n<p>Growl-style notifiers</p>\n<h2 id="usage-">Usage:</h2>\n<pre class="hljs"><span class="hljs-meta">@Component</span>({ ... })\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> MyComponent {\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> notifier: NotifierService</span>) {}\n\n  info() {\n    <span class="hljs-keyword">this</span>.notifier.info(<span class="hljs-string">&apos;An info message&apos;</span>);\n  }\n  success() {\n    <span class="hljs-keyword">this</span>.notifier.success(<span class="hljs-string">&apos;A success message&apos;</span>, {\n      position: NotifierPosition.BottomRight\n    });\n  }\n  warning() {\n    <span class="hljs-keyword">this</span>.notifier.warning(<span class="hljs-string">&apos;A warning&apos;</span>, {\n      showCloseButton: <span class="hljs-literal">false</span>,\n      timeout: <span class="hljs-number">10000</span>\n    });\n  }\n  error() {\n    <span class="hljs-keyword">this</span>.notifier.error(<span class="hljs-string">&apos;An error message&apos;</span>, {\n      timeout: <span class="hljs-literal">false</span>\n    });\n  }\n  custom() {\n    <span class="hljs-keyword">this</span>.notifier.show(<span class="hljs-string">&apos;&lt;b&gt;A &lt;i&gt;custom&lt;/i&gt; message&lt;/b&gt;&apos;</span>, {\n      html: <span class="hljs-literal">true</span>,\n      backgroundColor: <span class="hljs-string">&apos;black&apos;</span>,\n      textColor: <span class="hljs-string">&apos;white&apos;</span>,\n      position: NotifierPosition.TopLeft,\n      showCloseButton: <span class="hljs-literal">false</span>,\n      timeout: <span class="hljs-number">10000</span>\n    });\n  }\n}\n</pre>\n<h3 id="api">API</h3>\n<pre class="hljs"><span class="hljs-keyword">export</span> <span class="hljs-keyword">enum</span> NotifierType {\n  None,\n  Info,\n  Success,\n  Warning,\n  <span class="hljs-built_in">Error</span>\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">enum</span> NotifierPosition {\n  TopRight,\n  Top,\n  TopLeft,\n  BottomRight,\n  Bottom,\n  BottomLeft,\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> NotifierOptions {\n  text?: <span class="hljs-built_in">string</span>; \n  html?: <span class="hljs-built_in">boolean</span>;\n  <span class="hljs-keyword">type</span>?: NotifierType;\n  showCloseButton?: <span class="hljs-built_in">boolean</span>;\n  position?: NotifierPosition;\n  timeout?: <span class="hljs-built_in">number</span> | <span class="hljs-built_in">boolean</span>;\n  backgroundColor?: <span class="hljs-built_in">string</span>;\n  textColor?: <span class="hljs-built_in">string</span>;\n}\n</pre>\n'},1066:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-button-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"position"</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">"single"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Top Right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Top"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Top Left"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Bottom Right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Bottom"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"Bottom Left"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-button-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"info()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"An info message"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"success()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"A success message"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"warning()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"A warning"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"error()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"An error message"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"custom()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"A custom message"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"componentAsContent()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"A custom component message"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n'},1067:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NotifierPosition, NotifierService } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ng-vcl/ng-vcl\'</span>;\n<span class="hljs-keyword">import</span> { Component, Input } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-keyword">let</span> cnt = <span class="hljs-number">1</span>;\n\n<span class="hljs-meta">@Component</span>({selector: <span class="hljs-string">\'notifier-content-component\'</span>, template: <span class="hljs-string">\'&lt;button class="vclButton"&gt;{{text}}&lt;/button&gt;\'</span>})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> NotifierContentComponent {\n  <span class="hljs-meta">@Input</span>()text;\n}\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> NotifierDemoComponent {\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> notifier: NotifierService</span>) {}\n\n  position: NotifierPosition = NotifierPosition.TopRight;\n\n  info() {\n    <span class="hljs-keyword">this</span>.notifier.info(<span class="hljs-string">\'An info message \'</span> + cnt++, {\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  success() {\n    <span class="hljs-keyword">this</span>.notifier.success(<span class="hljs-string">\'A success message \'</span> + cnt++, {\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  warning() {\n    <span class="hljs-keyword">this</span>.notifier.warning(<span class="hljs-string">\'A warning \'</span> + cnt++, {\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  error() {\n    <span class="hljs-keyword">this</span>.notifier.error(<span class="hljs-string">\'An error message \'</span> + cnt++, {\n      position: <span class="hljs-keyword">this</span>.position\n    });\n  }\n  custom() {\n    <span class="hljs-keyword">this</span>.notifier.show(<span class="hljs-string">\'&lt;b&gt;A &lt;i&gt;custom&lt;/i&gt; message&lt;/b&gt;\'</span>, {\n      html: <span class="hljs-literal">true</span>,\n      backgroundColor: <span class="hljs-string">\'black\'</span>,\n      textColor: <span class="hljs-string">\'white\'</span>,\n      position: <span class="hljs-keyword">this</span>.position,\n      showCloseButton: <span class="hljs-literal">false</span>,\n      timeout: <span class="hljs-number">10000</span>\n    });\n  }\n  componentAsContent() {\n    <span class="hljs-keyword">this</span>.notifier.info(<span class="hljs-string">\'\'</span>, {\n      position: <span class="hljs-keyword">this</span>.position,\n      contentComponentDetails: {contentComponentClass: NotifierContentComponent, attributes: {text: <span class="hljs-string">`notifier content custom component button <span class="hljs-subst">${cnt++}</span>`</span>}}\n    });\n  }\n\n}\n'},387:function(n,s,l){"use strict";function a(){return{label:"Notifiers",tabs:{Demo:h,"README.md":{type:"md",content:l(1065)},"demo.component.html":{type:"pre",content:l(1066)},"demo.component.ts":{type:"pre",content:l(1067)}}}}function t(n){return u._29(0,[(n()(),u._6(0,0,null,null,1,"button",[["class","vclButton"]],null,null,null,null,null)),(n()(),u._27(1,null,["",""]))],null,function(n,s){n(s,1,0,s.component.text)})}function e(n){return u._29(0,[(n()(),u._6(0,0,null,null,1,"notifier-content-component",[],null,null,null,t,A)),u._5(1,49152,null,0,r,[],null,null)],null,null)}function o(n){return u._29(0,[(n()(),u._6(0,0,null,null,31,"vcl-button-group",[["mode","single"]],[[2,"vclButtonGroup",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(n,s,l){var a=!0,t=n.component;if("ngModelChange"===s){a=!1!==(t.position=l)&&a}return a},f.b,f.a)),u._5(1,1228800,null,1,d.a,[],{mode:[0,"mode"]},null),u._25(603979776,1,{buttons:1}),u._24(1024,null,v.j,function(n){return[n]},[d.a]),u._5(4,671744,null,0,v.o,[[8,null],[8,null],[8,null],[2,v.j]],{model:[0,"model"]},{update:"ngModelChange"}),u._24(2048,null,v.k,null,[v.o]),u._5(6,16384,null,0,v.l,[v.k],null,null),(n()(),u._27(-1,0,["\n  "])),(n()(),u._6(8,0,null,0,2,"button",[["label","Top Right"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"tap"],[null,"click"]],function(n,s,l){var a=!0;if("keypress"===s){a=!1!==u._20(n,9).onKeypress(l)&&a}if("mouseenter"===s){a=!1!==u._20(n,9).onMouseEnter(l)&&a}if("mouseleave"===s){a=!1!==u._20(n,9).onMouseLeave(l)&&a}if("tap"===s){a=!1!==u._20(n,9).onTap(l)&&a}if("click"===s){a=!1!==u._20(n,9).onClick(l)&&a}return a},k.b,k.a)),u._5(9,4898816,[[1,4]],1,y.a,[u.k],{label:[0,"label"]},null),u._25(603979776,2,{buttonContent:1}),(n()(),u._27(-1,0,["\n  "])),(n()(),u._6(12,0,null,0,2,"button",[["label","Top"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"tap"],[null,"click"]],function(n,s,l){var a=!0;if("keypress"===s){a=!1!==u._20(n,13).onKeypress(l)&&a}if("mouseenter"===s){a=!1!==u._20(n,13).onMouseEnter(l)&&a}if("mouseleave"===s){a=!1!==u._20(n,13).onMouseLeave(l)&&a}if("tap"===s){a=!1!==u._20(n,13).onTap(l)&&a}if("click"===s){a=!1!==u._20(n,13).onClick(l)&&a}return a},k.b,k.a)),u._5(13,4898816,[[1,4]],1,y.a,[u.k],{label:[0,"label"]},null),u._25(603979776,3,{buttonContent:1}),(n()(),u._27(-1,0,["\n  "])),(n()(),u._6(16,0,null,0,2,"button",[["label","Top Left"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"tap"],[null,"click"]],function(n,s,l){var a=!0;if("keypress"===s){a=!1!==u._20(n,17).onKeypress(l)&&a}if("mouseenter"===s){a=!1!==u._20(n,17).onMouseEnter(l)&&a}if("mouseleave"===s){a=!1!==u._20(n,17).onMouseLeave(l)&&a}if("tap"===s){a=!1!==u._20(n,17).onTap(l)&&a}if("click"===s){a=!1!==u._20(n,17).onClick(l)&&a}return a},k.b,k.a)),u._5(17,4898816,[[1,4]],1,y.a,[u.k],{label:[0,"label"]},null),u._25(603979776,4,{buttonContent:1}),(n()(),u._27(-1,0,["\n  "])),(n()(),u._6(20,0,null,0,2,"button",[["label","Bottom Right"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"tap"],[null,"click"]],function(n,s,l){var a=!0;if("keypress"===s){a=!1!==u._20(n,21).onKeypress(l)&&a}if("mouseenter"===s){a=!1!==u._20(n,21).onMouseEnter(l)&&a}if("mouseleave"===s){a=!1!==u._20(n,21).onMouseLeave(l)&&a}if("tap"===s){a=!1!==u._20(n,21).onTap(l)&&a}if("click"===s){a=!1!==u._20(n,21).onClick(l)&&a}return a},k.b,k.a)),u._5(21,4898816,[[1,4]],1,y.a,[u.k],{label:[0,"label"]},null),u._25(603979776,5,{buttonContent:1}),(n()(),u._27(-1,0,["\n  "])),(n()(),u._6(24,0,null,0,2,"button",[["label","Bottom"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"tap"],[null,"click"]],function(n,s,l){var a=!0;if("keypress"===s){a=!1!==u._20(n,25).onKeypress(l)&&a}if("mouseenter"===s){a=!1!==u._20(n,25).onMouseEnter(l)&&a}if("mouseleave"===s){a=!1!==u._20(n,25).onMouseLeave(l)&&a}if("tap"===s){a=!1!==u._20(n,25).onTap(l)&&a}if("click"===s){a=!1!==u._20(n,25).onClick(l)&&a}return a},k.b,k.a)),u._5(25,4898816,[[1,4]],1,y.a,[u.k],{label:[0,"label"]},null),u._25(603979776,6,{buttonContent:1}),(n()(),u._27(-1,0,["\n  "])),(n()(),u._6(28,0,null,0,2,"button",[["label","Bottom Left"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"tap"],[null,"click"]],function(n,s,l){var a=!0;if("keypress"===s){a=!1!==u._20(n,29).onKeypress(l)&&a}if("mouseenter"===s){a=!1!==u._20(n,29).onMouseEnter(l)&&a}if("mouseleave"===s){a=!1!==u._20(n,29).onMouseLeave(l)&&a}if("tap"===s){a=!1!==u._20(n,29).onTap(l)&&a}if("click"===s){a=!1!==u._20(n,29).onClick(l)&&a}return a},k.b,k.a)),u._5(29,4898816,[[1,4]],1,y.a,[u.k],{label:[0,"label"]},null),u._25(603979776,7,{buttonContent:1}),(n()(),u._27(-1,0,["\n"])),(n()(),u._27(-1,null,["\n\n"])),(n()(),u._6(33,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u._6(34,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u._27(-1,null,["\n\n"])),(n()(),u._6(36,0,null,null,2,"button",[["label","An info message"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"tap"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(n,s,l){var a=!0,t=n.component;if("keypress"===s){a=!1!==u._20(n,37).onKeypress(l)&&a}if("mouseenter"===s){a=!1!==u._20(n,37).onMouseEnter(l)&&a}if("mouseleave"===s){a=!1!==u._20(n,37).onMouseLeave(l)&&a}if("tap"===s){a=!1!==u._20(n,37).onTap(l)&&a}if("click"===s){a=!1!==u._20(n,37).onClick(l)&&a}if("tap"===s){a=!1!==t.info()&&a}return a},k.b,k.a)),u._5(37,4898816,null,1,y.a,[u.k],{label:[0,"label"]},null),u._25(603979776,8,{buttonContent:1}),(n()(),u._6(39,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u._6(40,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u._27(-1,null,["\n"])),(n()(),u._6(42,0,null,null,2,"button",[["label","A success message"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"tap"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(n,s,l){var a=!0,t=n.component;if("keypress"===s){a=!1!==u._20(n,43).onKeypress(l)&&a}if("mouseenter"===s){a=!1!==u._20(n,43).onMouseEnter(l)&&a}if("mouseleave"===s){a=!1!==u._20(n,43).onMouseLeave(l)&&a}if("tap"===s){a=!1!==u._20(n,43).onTap(l)&&a}if("click"===s){a=!1!==u._20(n,43).onClick(l)&&a}if("tap"===s){a=!1!==t.success()&&a}return a},k.b,k.a)),u._5(43,4898816,null,1,y.a,[u.k],{label:[0,"label"]},null),u._25(603979776,9,{buttonContent:1}),(n()(),u._6(45,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u._6(46,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u._27(-1,null,["\n"])),(n()(),u._6(48,0,null,null,2,"button",[["label","A warning"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"tap"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(n,s,l){var a=!0,t=n.component;if("keypress"===s){a=!1!==u._20(n,49).onKeypress(l)&&a}if("mouseenter"===s){a=!1!==u._20(n,49).onMouseEnter(l)&&a}if("mouseleave"===s){a=!1!==u._20(n,49).onMouseLeave(l)&&a}if("tap"===s){a=!1!==u._20(n,49).onTap(l)&&a}if("click"===s){a=!1!==u._20(n,49).onClick(l)&&a}if("tap"===s){a=!1!==t.warning()&&a}return a},k.b,k.a)),u._5(49,4898816,null,1,y.a,[u.k],{label:[0,"label"]},null),u._25(603979776,10,{buttonContent:1}),(n()(),u._6(51,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u._6(52,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u._27(-1,null,["\n"])),(n()(),u._6(54,0,null,null,2,"button",[["label","An error message"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"tap"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(n,s,l){var a=!0,t=n.component;if("keypress"===s){a=!1!==u._20(n,55).onKeypress(l)&&a}if("mouseenter"===s){a=!1!==u._20(n,55).onMouseEnter(l)&&a}if("mouseleave"===s){a=!1!==u._20(n,55).onMouseLeave(l)&&a}if("tap"===s){a=!1!==u._20(n,55).onTap(l)&&a}if("click"===s){a=!1!==u._20(n,55).onClick(l)&&a}if("tap"===s){a=!1!==t.error()&&a}return a},k.b,k.a)),u._5(55,4898816,null,1,y.a,[u.k],{label:[0,"label"]},null),u._25(603979776,11,{buttonContent:1}),(n()(),u._6(57,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u._6(58,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u._27(-1,null,["\n"])),(n()(),u._6(60,0,null,null,2,"button",[["label","A custom message"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"tap"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(n,s,l){var a=!0,t=n.component;if("keypress"===s){a=!1!==u._20(n,61).onKeypress(l)&&a}if("mouseenter"===s){a=!1!==u._20(n,61).onMouseEnter(l)&&a}if("mouseleave"===s){a=!1!==u._20(n,61).onMouseLeave(l)&&a}if("tap"===s){a=!1!==u._20(n,61).onTap(l)&&a}if("click"===s){a=!1!==u._20(n,61).onClick(l)&&a}if("tap"===s){a=!1!==t.custom()&&a}return a},k.b,k.a)),u._5(61,4898816,null,1,y.a,[u.k],{label:[0,"label"]},null),u._25(603979776,12,{buttonContent:1}),(n()(),u._6(63,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u._6(64,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u._27(-1,null,["\n"])),(n()(),u._6(66,0,null,null,2,"button",[["label","A custom component message"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"tap"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(n,s,l){var a=!0,t=n.component;if("keypress"===s){a=!1!==u._20(n,67).onKeypress(l)&&a}if("mouseenter"===s){a=!1!==u._20(n,67).onMouseEnter(l)&&a}if("mouseleave"===s){a=!1!==u._20(n,67).onMouseLeave(l)&&a}if("tap"===s){a=!1!==u._20(n,67).onTap(l)&&a}if("click"===s){a=!1!==u._20(n,67).onClick(l)&&a}if("tap"===s){a=!1!==t.componentAsContent()&&a}return a},k.b,k.a)),u._5(67,4898816,null,1,y.a,[u.k],{label:[0,"label"]},null),u._25(603979776,13,{buttonContent:1}),(n()(),u._6(69,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u._6(70,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u._27(-1,null,["\n"]))],function(n,s){var l=s.component;n(s,1,0,"single"),n(s,4,0,l.position);n(s,9,0,"Top Right");n(s,13,0,"Top");n(s,17,0,"Top Left");n(s,21,0,"Bottom Right");n(s,25,0,"Bottom");n(s,29,0,"Bottom Left");n(s,37,0,"An info message");n(s,43,0,"A success message");n(s,49,0,"A warning");n(s,55,0,"An error message");n(s,61,0,"A custom message");n(s,67,0,"A custom component message")},function(n,s){n(s,0,0,!0,u._20(s,6).ngClassUntouched,u._20(s,6).ngClassTouched,u._20(s,6).ngClassPristine,u._20(s,6).ngClassDirty,u._20(s,6).ngClassValid,u._20(s,6).ngClassInvalid,u._20(s,6).ngClassPending);n(s,8,0,!0,u._20(s,9).hovered,u._20(s,9).isDisabled,u._20(s,9).selected,u._20(s,9).title);n(s,12,0,!0,u._20(s,13).hovered,u._20(s,13).isDisabled,u._20(s,13).selected,u._20(s,13).title);n(s,16,0,!0,u._20(s,17).hovered,u._20(s,17).isDisabled,u._20(s,17).selected,u._20(s,17).title);n(s,20,0,!0,u._20(s,21).hovered,u._20(s,21).isDisabled,u._20(s,21).selected,u._20(s,21).title);n(s,24,0,!0,u._20(s,25).hovered,u._20(s,25).isDisabled,u._20(s,25).selected,u._20(s,25).title);n(s,28,0,!0,u._20(s,29).hovered,u._20(s,29).isDisabled,u._20(s,29).selected,u._20(s,29).title);n(s,36,0,!0,u._20(s,37).hovered,u._20(s,37).isDisabled,u._20(s,37).selected,u._20(s,37).title);n(s,42,0,!0,u._20(s,43).hovered,u._20(s,43).isDisabled,u._20(s,43).selected,u._20(s,43).title);n(s,48,0,!0,u._20(s,49).hovered,u._20(s,49).isDisabled,u._20(s,49).selected,u._20(s,49).title);n(s,54,0,!0,u._20(s,55).hovered,u._20(s,55).isDisabled,u._20(s,55).selected,u._20(s,55).title);n(s,60,0,!0,u._20(s,61).hovered,u._20(s,61).isDisabled,u._20(s,61).selected,u._20(s,61).title);n(s,66,0,!0,u._20(s,67).hovered,u._20(s,67).isDisabled,u._20(s,67).selected,u._20(s,67).title)})}function p(n){return u._29(0,[(n()(),u._6(0,0,null,null,1,"ng-component",[],null,null,null,o,T)),u._5(1,49152,null,0,h,[w.a],null,null)],null,null)}Object.defineProperty(s,"__esModule",{value:!0});var u=l(4),i=l(490),c=1,r=function(){function n(){}return n}(),h=function(){function n(n){this.notifier=n,this.position=i.f.TopRight}return n.prototype.info=function(){this.notifier.info("An info message "+c++,{position:this.position})},n.prototype.success=function(){this.notifier.success("A success message "+c++,{position:this.position})},n.prototype.warning=function(){this.notifier.warning("A warning "+c++,{position:this.position})},n.prototype.error=function(){this.notifier.error("An error message "+c++,{position:this.position})},n.prototype.custom=function(){this.notifier.show("<b>A <i>custom</i> message</b>",{html:!0,backgroundColor:"black",textColor:"white",position:this.position,showCloseButton:!1,timeout:1e4})},n.prototype.componentAsContent=function(){this.notifier.info("",{position:this.position,contentComponentDetails:{contentComponentClass:r,attributes:{text:"notifier content custom component button "+c++}}})},n}(),b={demo:a},_=function(){function n(){}return n}(),m=l(183),g=l(558),j=l(410),f=l(494),d=l(455),v=l(105),k=l(177),y=l(106),w=l(475),C=[],A=u._4({encapsulation:2,styles:C,data:{}}),B=u._2("notifier-content-component",r,e,{text:"text"},{},[]),M=[],T=u._4({encapsulation:2,styles:M,data:{}}),x=u._2("ng-component",h,p,{},{},[]),L=l(21),N=l(43),D=l(108),S=l(109),E=l(174),H=l(71),K=l(409),R=l(411),P=l(175),I=l(176),U=l(178),q=l(181),G=l(476),O=l(519),F=l(456),J=l(42),V=l(408);l.d(s,"NotifierDemoModuleNgFactory",function(){return W});var W=u._3(_,[],function(n){return u._17([u._18(512,u.j,u.Z,[[8,[m.a,g.a,j.a,x,B]],[3,u.j],u.w]),u._18(4608,L.n,L.m,[u.t,[2,L.v]]),u._18(4608,v.u,v.u,[]),u._18(4608,N.a,N.a,[]),u._18(4608,D.a,D.a,[S.a,u.q]),u._18(4608,w.a,w.a,[D.a]),u._18(512,L.c,L.c,[]),u._18(512,v.r,v.r,[]),u._18(512,v.i,v.i,[]),u._18(512,E.a,E.a,[]),u._18(512,H.d,H.d,[]),u._18(512,K.a,K.a,[]),u._18(512,R.a,R.a,[]),u._18(512,P.a,P.a,[]),u._18(512,I.a,I.a,[]),u._18(512,U.a,U.a,[]),u._18(1024,q.a,function(){return[void 0]},[]),u._18(512,q.d,q.d,[q.a,S.a,u.q]),u._18(512,G.a,G.a,[]),u._18(512,O.b,O.b,[]),u._18(512,F.a,F.a,[]),u._18(512,J.m,J.m,[[2,J.r],[2,J.l]]),u._18(512,_,_,[]),u._18(1024,J.j,function(){return[[{path:"",component:V.a,data:b}]]},[])])})}});