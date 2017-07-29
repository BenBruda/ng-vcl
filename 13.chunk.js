webpackJsonp([13],{417:function(n,l,t){"use strict";function s(){return{label:"Input Control Group",tabs:{Demo:p,"README.md":{type:"md",content:t(606)},"demo.component.html":{type:"pre",content:t(607)},"demo.component.ts":{type:"pre",content:t(608)}}}}function e(n){return b._41(0,[(n()(),b._19(0,null,null,4,"vcl-input-control-group",[],[[2,"vclInputInlineControlGroup",null],[2,"vclInputControlGroup",null]],null,null,h.b,h.a)),b._17(49152,null,0,_.a,[],{type:[0,"type"],label:[1,"label"]},null),(n()(),b._39(0,["\n  "])),(n()(),b._19(0,null,0,0,"input",[["type","text"],["vcl-input",""]],null,null,null,null,null)),(n()(),b._39(0,["\n"])),(n()(),b._39(null,["\n"]))],function(n,l){var t=l.component;n(l,1,0,t.type,t.label)},function(n,l){n(l,0,0,b._33(l,1).inline,b._33(l,1).notInline)})}function a(n){return b._41(0,[(n()(),b._19(0,null,null,1,"ng-component",[],null,null,null,e,m)),b._17(49152,null,0,p,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var u=t(1),r=(t.n(u),t(494)),o=(t.n(r),t(208)),c=(t.n(o),t(42)),i=(t.n(c),t(16)),p=(t.n(i),function(){function n(){var n=this;this.message=new i.Subject,this.obs=u.Observable.interval(2e3).scan(function(n,l){return n++,n>3&&(n=0),n}).map(function(n){return 0==n?"error":1==n?"warning":2==n?"success":void 0}).map(function(l){return n.type=l,n.label="my custom "+l,{type:l,value:"my custom "+l}}).subscribe(function(l){return n.message.next(l)})}return n}()),d=function(){function n(){}return n}(),b=t(2),h=t(559),_=t(548),f=[],m=b._16({encapsulation:2,styles:f,data:{}}),y=b._14("ng-component",p,a,{},{},[]);t.d(l,"InputControlGroupDemoModuleNgFactory",function(){return $});var v=t(2),g=t(456),j=t(21),x=t(114),w=t(59),I=t(453),C=t(457),k=t(495),T=t(27),O=t(451),$=v._15(d,[],function(n){return v._30([v._31(512,v.k,v._11,[[8,[g.a,y]],[3,v.k],v.E]),v._31(4608,j.n,j.m,[v.A]),v._31(512,j.c,j.c,[]),v._31(512,x.a,x.a,[]),v._31(512,w.d,w.d,[]),v._31(512,I.a,I.a,[]),v._31(512,C.a,C.a,[]),v._31(512,k.a,k.a,[]),v._31(512,T.m,T.m,[[2,T.r],[2,T.l]]),v._31(512,d,d,[]),v._31(1024,T.j,function(){return[[{path:"",component:O.a,data:{demo:s}}]]},[])])})},450:function(n,l,t){"use strict";t.d(l,"b",function(){return s}),t.d(l,"a",function(){return e});var s=function(){function n(){}return n}(),e=function(){function n(){this.disabled=!1,this.tabClass=""}return n}()},451:function(n,l,t){"use strict";t.d(l,"a",function(){return a});var s=t(27),e=t(28),a=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(t){var s,e;return"object"==typeof l.tabs[t]&&l.tabs[t]?(s=l.tabs[t].type,e="pre"===s||"html"===s||"md"===s?n.sanitizer.bypassSecurityTrustHtml(l.tabs[t].content):l.tabs[t].content):"function"==typeof l.tabs[t]&&(s="component",e=l.tabs[t]),{name:t,content:e,type:s}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n.ctorParameters=function(){return[{type:s.a},{type:e.c}]},n}()},452:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var s=t(59),e=t(2),a=t(450),u=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new e.p}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){this.wormholeHost=new s.e(n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){var l,t,s=this.tabs.toArray();n instanceof a.a?(l=s.indexOf(n),t=n):"number"==typeof n&&s[n]?(l=n,t=s[l]):(l=-1,t=null),l>=0&&t instanceof a.a&&!t.disabled&&(this.wormholeHost.clearWormholes(),this.selectedTabIndex=l,this.selectedTabIndexChange$.emit(l),this.wormholeHost.connectWormhole(t.content))},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost.clearWormholes()},n}()},453:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){function n(){}return n}()},454:function(n,l,t){"use strict";function s(n){return u._41(0,[u._32(null,0),(n()(),u._13(0,null,null,0))],null,null)}function e(n){return u._41(0,[u._37(402653184,1,{content:0}),(n()(),u._13(0,[[1,2]],null,0,null,s))],null,null)}function a(n){return u._41(0,[(n()(),u._19(0,null,null,2,"vcl-tab",[],null,null,null,e,c)),u._17(49152,null,1,r.a,[],null,null),u._37(335544320,1,{label:0})],null,null)}t.d(l,"a",function(){return c}),l.b=e;var u=t(2),r=t(450),o=[],c=u._16({encapsulation:2,styles:o,data:{}});u._14("vcl-tab",r.a,a,{disabled:"disabled",tabClass:"tabClass"},{},["*"])},455:function(n,l,t){"use strict";function s(n){return u._41(0,[(n()(),u._19(0,null,null,7,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"tap"]],function(n,l,t){var s=!0,e=n.component;if("tap"===l){s=!1!==e.selectTab(n.context.$implicit)&&s}return s},null,null)),(n()(),u._39(null,["\n        "])),(n()(),u._19(0,null,null,4,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),u._39(null,[" \n          "])),(n()(),u._19(16777216,null,null,1,"wormhole",[],null,null,null,null,null)),u._17(671744,null,0,r.a,[u._1],{target:[0,"target"]},null),(n()(),u._39(null,["\n        "])),(n()(),u._39(null,["\n    "]))],function(n,l){n(l,5,0,l.context.$implicit.label)},function(n,l){var t=l.component;n(l,0,0,u._22(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,t.selectedTabIndex===l.context.index,t.selectedTabIndex===l.context.index)})}function e(n){return u._41(0,[u._37(402653184,1,{tabContent:0}),(n()(),u._19(0,null,null,20,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),u._39(null,["\n  "])),(n()(),u._19(0,null,null,4,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),u._39(null,["\n    "])),(n()(),u._13(16777216,null,null,1,null,s)),u._17(802816,null,0,o.k,[u._1,u.Y,u.y],{ngForOf:[0,"ngForOf"]},null),(n()(),u._39(null,["\n  "])),(n()(),u._39(null,["\n  "])),(n()(),u._19(0,null,null,11,"div",[],[[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),u._39(null,["\n    "])),(n()(),u._19(0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),u._39(null,["\n      "])),(n()(),u._19(16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),u._39(null,["\n    "])),(n()(),u._39(null,["\n    "])),(n()(),u._19(0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),u._39(null,["\n      "])),u._32(null,0),(n()(),u._39(null,["\n    "])),(n()(),u._39(null,["\n  "])),(n()(),u._39(null,["\n"])),(n()(),u._39(null,["\n"]))],function(n,l){n(l,6,0,l.component.tabs)},function(n,l){var t=l.component;n(l,1,0,u._22(1,"vclTabbable ",t.tabbableClass,""),"left"===t.layout,"right"===t.layout),n(l,3,0,u._22(1,"vclTabs ",t.tabsClass,""),!!t.borders),n(l,9,0,u._22(1,"vclTabContent ",t.tabContentClass,""),!t.borders)})}function a(n){return u._41(0,[(n()(),u._19(0,null,null,2,"vcl-tab-nav",[],null,null,null,e,p)),u._17(1228800,null,1,c.a,[],null,null),u._37(603979776,1,{tabs:1})],null,null)}t.d(l,"a",function(){return p}),l.b=e;var u=t(2),r=t(186),o=t(21),c=t(452),i=[],p=u._16({encapsulation:2,styles:i,data:{}});u._14("vcl-tab-nav",c.a,a,{layout:"layout",tabbableClass:"tabbableClass",tabsClass:"tabsClass",tabContentClass:"tabContentClass",borders:"borders",selectedTabIndex:"selectedTabIndex"},{selectedTabIndexChange:"selectedTabIndexChange"},["*"])},456:function(n,l,t){"use strict";function s(n){return b._41(0,[(n()(),b._39(null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function e(n){return b._41(0,[(n()(),b._19(16777216,null,null,1,"wormhole",[],null,null,null,null,null)),b._17(671744,null,0,h.a,[b._1],{target:[0,"target"]},null),(n()(),b._13(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function a(n){return b._41(0,[(n()(),b._19(0,null,null,2,"div",[],null,null,null,null,null)),(n()(),b._19(0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),b._39(null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function u(n){return b._41(0,[(n()(),b._19(0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function r(n){return b._41(0,[(n()(),b._19(0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function o(n){return b._41(0,[(n()(),b._19(0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function c(n){return b._41(0,[(n()(),b._19(0,null,null,21,"vcl-tab",[],null,null,null,_.b,_.a)),b._17(49152,[[1,4]],1,f.a,[],null,null),b._37(335544320,2,{label:0}),(n()(),b._39(0,["\n      "])),(n()(),b._13(0,[[2,2]],0,1,null,s)),b._17(16384,null,0,f.b,[],null,null),(n()(),b._39(0,["\n      "])),(n()(),b._13(16777216,null,0,1,null,e)),b._17(16384,null,0,m.l,[b._1,b.Y],{ngIf:[0,"ngIf"]},null),(n()(),b._39(0,["\n      "])),(n()(),b._13(16777216,null,0,1,null,a)),b._17(16384,null,0,m.l,[b._1,b.Y],{ngIf:[0,"ngIf"]},null),(n()(),b._39(0,["\n      "])),(n()(),b._13(16777216,null,0,1,null,u)),b._17(16384,null,0,m.l,[b._1,b.Y],{ngIf:[0,"ngIf"]},null),(n()(),b._39(0,["\n      "])),(n()(),b._13(16777216,null,0,1,null,r)),b._17(16384,null,0,m.l,[b._1,b.Y],{ngIf:[0,"ngIf"]},null),(n()(),b._39(0,["\n      "])),(n()(),b._13(16777216,null,0,1,null,o)),b._17(16384,null,0,m.l,[b._1,b.Y],{ngIf:[0,"ngIf"]},null),(n()(),b._39(0,["\n    "]))],function(n,l){n(l,8,0,"component"===l.context.$implicit.type),n(l,11,0,"text"===l.context.$implicit.type),n(l,14,0,"html"===l.context.$implicit.type),n(l,17,0,"md"===l.context.$implicit.type),n(l,20,0,"pre"===l.context.$implicit.type)},null)}function i(n){return b._41(0,[(n()(),b._19(0,null,null,9,"div",[],null,null,null,null,null)),(n()(),b._39(null,["\n  "])),(n()(),b._19(0,null,null,6,"vcl-tab-nav",[["borders","true"]],null,null,null,y.b,y.a)),b._17(1228800,null,1,v.a,[],{borders:[0,"borders"]},null),b._37(603979776,1,{tabs:1}),(n()(),b._39(0,["\n    "])),(n()(),b._13(16777216,null,0,1,null,c)),b._17(802816,null,0,m.k,[b._1,b.Y,b.y],{ngForOf:[0,"ngForOf"]},null),(n()(),b._39(0,["\n  "])),(n()(),b._39(null,["\n"]))],function(n,l){var t=l.component;n(l,3,0,"true"),n(l,7,0,t.tabs)},null)}function p(n){return b._41(0,[(n()(),b._19(0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),b._39(null,[" ",""])),(n()(),b._39(null,["\n"])),(n()(),b._13(16777216,null,null,1,null,i)),b._17(16384,null,0,m.l,[b._1,b.Y],{ngIf:[0,"ngIf"]},null),(n()(),b._39(null,["\n"]))],function(n,l){n(l,4,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}function d(n){return b._41(0,[(n()(),b._19(0,null,null,1,"ng-component",[],null,null,null,p,I)),b._17(114688,null,0,g.a,[j.a,x.c],null,null)],function(n,l){n(l,1,0)},null)}t.d(l,"a",function(){return C});var b=t(2),h=t(186),_=t(454),f=t(450),m=t(21),y=t(455),v=t(452),g=t(451),j=t(27),x=t(28),w=[],I=b._16({encapsulation:2,styles:w,data:{}}),C=b._14("ng-component",g.a,d,{},{},[])},457:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=(t(451),function(){function n(){}return n}())},460:function(n,l,t){"use strict";var s=t(192),e=t(193);l.async=new e.AsyncScheduler(s.AsyncAction)},468:function(n,l,t){"use strict";function s(n){return!e.isArray(n)&&n-parseFloat(n)+1>=0}var e=t(48);l.isNumeric=s},494:function(n,l,t){"use strict";var s=t(1),e=t(503);s.Observable.interval=e.interval},495:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){function n(){}return n}()},503:function(n,l,t){"use strict";var s=t(504);l.interval=s.IntervalObservable.create},504:function(n,l,t){"use strict";var s=this&&this.__extends||function(n,l){function t(){this.constructor=n}for(var s in l)l.hasOwnProperty(s)&&(n[s]=l[s]);n.prototype=null===l?Object.create(l):(t.prototype=l.prototype,new t)},e=t(468),a=t(1),u=t(460),r=function(n){function l(l,t){void 0===l&&(l=0),void 0===t&&(t=u.async),n.call(this),this.period=l,this.scheduler=t,(!e.isNumeric(l)||l<0)&&(this.period=0),t&&"function"==typeof t.schedule||(this.scheduler=u.async)}return s(l,n),l.create=function(n,t){return void 0===n&&(n=0),void 0===t&&(t=u.async),new l(n,t)},l.dispatch=function(n){var l=n.index,t=n.subscriber,s=n.period;t.next(l),t.closed||(n.index+=1,this.schedule(n,s))},l.prototype._subscribe=function(n){var t=this.period,s=this.scheduler;n.add(s.schedule(l.dispatch,t,{index:0,subscriber:n,period:t}))},l}(a.Observable);l.IntervalObservable=r},548:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var s=function(){function n(){this.inline=!1}return Object.defineProperty(n.prototype,"notInline",{get:function(){return!this.inline},enumerable:!0,configurable:!0}),n}()},559:function(n,l,t){"use strict";function s(n){return u._41(0,[(n()(),u._19(0,null,null,1,"div",[["class","vclFormControlHint"]],[[2,"vclError",null],[2,"vclWarning",null],[2,"vclSuccess",null]],null,null,null,null)),(n()(),u._39(null,["\n  ","\n"]))],null,function(n,l){var t=l.component;n(l,0,0,"error"==t.type,"warning"==t.type,"success"==t.type),n(l,1,0,t.label)})}function e(n){return u._41(2,[u._32(null,0),(n()(),u._39(null,["\n\n"])),(n()(),u._13(16777216,null,null,1,null,s)),u._17(16384,null,0,r.l,[u._1,u.Y],{ngIf:[0,"ngIf"]},null),(n()(),u._39(null,["\n"]))],function(n,l){var t=l.component;n(l,3,0,null!==t.type&&null!==t.label&&""!==t.label)},null)}function a(n){return u._41(0,[(n()(),u._19(0,null,null,1,"vcl-input-control-group",[],[[2,"vclInputInlineControlGroup",null],[2,"vclInputControlGroup",null]],null,null,e,i)),u._17(49152,null,0,o.a,[],null,null)],null,function(n,l){n(l,0,0,u._33(l,1).inline,u._33(l,1).notInline)})}t.d(l,"a",function(){return i}),l.b=e;var u=t(2),r=t(21),o=t(548),c=[],i=u._16({encapsulation:2,styles:c,data:{}});u._14("vcl-input-control-group, [vcl-input-control-group]",o.a,a,{type:"type",label:"label",inline:"inline"},{},["*"])},606:function(n,l){n.exports='<h1 id="vcl-input-control-group">vcl-input-control-group</h1>\n<p>Input-Control-Group to handle the error-state of any object.</p>\n<h2 id="usage-">Usage:</h2>\n<pre class="hljs">\n</pre>\n<h3 id="api">API</h3>\n<h4 id="properties-">Properties:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>selectAllOnFocus</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>Selects</td>\n</tr>\n<tr>\n<td><code>typedValue</code> <em>(1)</em></td>\n<td>any</td>\n<td></td>\n<td>The current value of the input element. Type is converted as specified in <code>valueType</code>  </td>\n</tr>\n<tr>\n<td><code>valueType</code></td>\n<td>string</td>\n<td>string</td>\n<td><code>string</code> or <code>number</code>. Type to use in <code>typedValue</code></td>\n</tr>\n</tbody>\n</table>\n<p><em>(1) Supports Two-way binding</em></p>\n'},607:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-input-control-group</span> [<span class="hljs-attr">type</span>]=<span class="hljs-string">"type"</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">"label"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">input</span>  <span class="hljs-attr">vcl-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-input-control-group</span>&gt;</span>\n'},608:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { Observable } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/Observable\'</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'rxjs/add/observable/interval\'</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'rxjs/add/operator/scan\'</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'rxjs/add/operator/map\'</span>;\n<span class="hljs-keyword">import</span> { Subject } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/Subject\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> InputControlGroupDemoComponent {\n\n  <span class="hljs-keyword">type</span>: <span class="hljs-built_in">string</span> | <span class="hljs-literal">undefined</span>;\n  label: <span class="hljs-built_in">string</span>;\n\n  message = <span class="hljs-keyword">new</span> Subject();\n  <span class="hljs-comment">// emit messages over time</span>\n  obs = Observable\n    .interval(<span class="hljs-number">2000</span>)\n    .scan(<span class="hljs-function">(<span class="hljs-params">s, x</span>) =&gt;</span> {\n      s++;\n      <span class="hljs-keyword">if</span> (s &gt; <span class="hljs-number">3</span>) s = <span class="hljs-number">0</span>;\n      <span class="hljs-keyword">return</span> s;\n    })\n    .map(<span class="hljs-function"><span class="hljs-params">s</span> =&gt;</span> {\n      <span class="hljs-keyword">if</span> (s == <span class="hljs-number">0</span>) <span class="hljs-keyword">return</span> <span class="hljs-string">\'error\'</span>;\n      <span class="hljs-keyword">if</span> (s == <span class="hljs-number">1</span>) <span class="hljs-keyword">return</span> <span class="hljs-string">\'warning\'</span>;\n      <span class="hljs-keyword">if</span> (s == <span class="hljs-number">2</span>) <span class="hljs-keyword">return</span> <span class="hljs-string">\'success\'</span>;\n      <span class="hljs-keyword">if</span> (s == <span class="hljs-number">3</span>) <span class="hljs-keyword">return</span> <span class="hljs-literal">undefined</span>;\n    })\n    .map(<span class="hljs-function"><span class="hljs-params">type</span> =&gt;</span> {\n\n      <span class="hljs-keyword">this</span>.type = <span class="hljs-keyword">type</span>;\n      <span class="hljs-keyword">this</span>.label = <span class="hljs-string">\'my custom \'</span> + <span class="hljs-keyword">type</span>;\n\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-keyword">type</span>,\n        value: <span class="hljs-string">\'my custom \'</span> + <span class="hljs-keyword">type</span>\n      };\n    })\n    .subscribe(<span class="hljs-function"><span class="hljs-params">msg</span> =&gt;</span> <span class="hljs-keyword">this</span>.message.next(msg));\n\n}\n'}});