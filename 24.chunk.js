webpackJsonp([24],{358:function(l,n,s){"use strict";function a(){return{label:"Link",tabs:{Demo:c,"README.md":{type:"md",content:s(673)},"demo.component.html":{type:"pre",content:s(674)},"demo.component.ts":{type:"pre",content:s(675)}}}}function t(l){return p._29(0,[(l()(),p._6(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),p._27(-1,null,["Link with action:"])),(l()(),p._27(-1,null,["\n"])),(l()(),p._6(3,0,null,null,1,"a",[["vcl-link",""]],[[2,"vclDisabled",null],[1,"title",0],[1,"aria-label",0],[4,"cursor",null],[1,"href",4],[2,"vclContentLink",null]],[[null,"tap"]],function(l,n,s){var a=!0,t=l.component;if("tap"===n){a=!1!==t.someAction(s)&&a}return a},h.b,h.a)),p._5(4,704512,null,0,i.a,[[2,d.b]],{label:[0,"label"]},null),(l()(),p._27(-1,null,["\n"])),(l()(),p._6(6,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),p._6(7,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),p._27(-1,null,["\n\n"])),(l()(),p._6(9,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),p._27(-1,null,["href attribute only (label is automatically created):"])),(l()(),p._27(-1,null,["\n"])),(l()(),p._6(12,0,null,null,1,"a",[["vcl-link",""]],[[2,"vclDisabled",null],[1,"title",0],[1,"aria-label",0],[4,"cursor",null],[1,"href",4],[2,"vclContentLink",null]],null,null,h.b,h.a)),p._5(13,704512,null,0,i.a,[[2,d.b]],{href:[0,"href"]},null),(l()(),p._27(-1,null,["\n"])),(l()(),p._6(15,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),p._6(16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),p._27(-1,null,["\n\n"])),(l()(),p._6(18,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),p._27(-1,null,["Label with an appended icon (uses vcl-icogram):"])),(l()(),p._27(-1,null,["\n"])),(l()(),p._6(21,0,null,null,1,"a",[["vcl-link",""]],[[8,"target",0],[2,"vclDisabled",null],[1,"title",0],[1,"aria-label",0],[4,"cursor",null],[1,"href",4],[2,"vclContentLink",null]],null,null,h.b,h.a)),p._5(22,704512,null,0,i.a,[[2,d.b]],{href:[0,"href"],label:[1,"label"],appIcon:[2,"appIcon"]},null),(l()(),p._27(-1,null,["\n"])),(l()(),p._6(24,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),p._6(25,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),p._27(-1,null,["\n\n"])),(l()(),p._6(27,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),p._27(-1,null,["Disabled link:"])),(l()(),p._27(-1,null,["\n"])),(l()(),p._6(30,0,null,null,1,"a",[["vcl-link",""]],[[2,"vclDisabled",null],[1,"title",0],[1,"aria-label",0],[4,"cursor",null],[1,"href",4],[2,"vclContentLink",null]],null,null,h.b,h.a)),p._5(31,704512,null,0,i.a,[[2,d.b]],{href:[0,"href"],label:[1,"label"],disabled:[2,"disabled"]},null),(l()(),p._27(-1,null,["\n"])),(l()(),p._6(33,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),p._6(34,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),p._27(-1,null,["\n\n"])),(l()(),p._6(36,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),p._27(-1,null,["Link with title and scheme:"])),(l()(),p._27(-1,null,["\n"])),(l()(),p._6(39,0,null,null,1,"a",[["vcl-link",""]],[[2,"vclDisabled",null],[1,"title",0],[1,"aria-label",0],[4,"cursor",null],[1,"href",4],[2,"vclContentLink",null]],null,null,h.b,h.a)),p._5(40,704512,null,0,i.a,[[2,d.b]],{href:[0,"href"],label:[1,"label"],title:[2,"title"],scheme:[3,"scheme"]},null),(l()(),p._27(-1,null,["\n"])),(l()(),p._6(42,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),p._6(43,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),p._27(-1,null,["\n"]))],function(l,n){l(n,4,0,"Trigger test action");l(n,13,0,"http://www.example.com");l(n,22,0,"https://github.com/ng-vcl/ng-vcl","Example external Link","fa:external-link");l(n,31,0,"this is not considered when the link is disabled","Disabled link",!0);l(n,40,0,"004971122222222","I'm a telephone number schemed link","tel link title","tel")},function(l,n){l(n,3,0,p._20(n,4).disabled,p._20(n,4).locTitle,p._20(n,4).locTitle,p._20(n,4).styleCursor,p._20(n,4).attrHref,p._20(n,4).useIcogram),l(n,12,0,p._20(n,13).disabled,p._20(n,13).locTitle,p._20(n,13).locTitle,p._20(n,13).styleCursor,p._20(n,13).attrHref,p._20(n,13).useIcogram);l(n,21,0,"_blank",p._20(n,22).disabled,p._20(n,22).locTitle,p._20(n,22).locTitle,p._20(n,22).styleCursor,p._20(n,22).attrHref,p._20(n,22).useIcogram),l(n,30,0,p._20(n,31).disabled,p._20(n,31).locTitle,p._20(n,31).locTitle,p._20(n,31).styleCursor,p._20(n,31).attrHref,p._20(n,31).useIcogram),l(n,39,0,p._20(n,40).disabled,p._20(n,40).locTitle,p._20(n,40).locTitle,p._20(n,40).styleCursor,p._20(n,40).attrHref,p._20(n,40).useIcogram)})}function e(l){return p._29(0,[(l()(),p._6(0,0,null,null,1,"ng-component",[],null,null,null,t,j)),p._5(1,49152,null,0,c,[],null,null)],null,null)}Object.defineProperty(n,"__esModule",{value:!0});var p=s(4),c=function(){function l(){}return l.prototype.someAction=function(l){console.log("Action handler, param:",l)},l}(),u={demo:a},r=function(){function l(){}return l}(),o=s(410),h=s(186),i=s(112),d=s(55),g=[],j=p._4({encapsulation:2,styles:g,data:{}}),m=p._2("ng-component",c,e,{},{},[]),_=s(21),b=s(43),f=s(174),k=s(71),v=s(409),w=s(411),y=s(175),L=s(176),x=s(182),I=s(42),D=s(408);s.d(n,"LinkDemoModuleNgFactory",function(){return C});var C=p._3(r,[],function(l){return p._17([p._18(512,p.j,p.Z,[[8,[o.a,m]],[3,p.j],p.w]),p._18(4608,_.n,_.m,[p.t,[2,_.v]]),p._18(4608,b.a,b.a,[]),p._18(512,_.c,_.c,[]),p._18(512,f.a,f.a,[]),p._18(512,k.d,k.d,[]),p._18(512,v.a,v.a,[]),p._18(512,w.a,w.a,[]),p._18(512,y.a,y.a,[]),p._18(512,L.a,L.a,[]),p._18(512,x.a,x.a,[]),p._18(512,I.m,I.m,[[2,I.r],[2,I.l]]),p._18(512,r,r,[]),p._18(1024,I.j,function(){return[[{path:"",component:D.a,data:u}]]},[])])})},673:function(l,n){l.exports='<h1 id="vcl-link">vcl-link</h1>\n<p>The anchor tag with VCL and Angular awareness.<br>Uses vcl-icogram to display a combination of text and icons if <code>appIcon</code> or <code>appIcon</code> is provided.</p>\n<h2 id="usage">Usage</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-link</span> [<span class="hljs-attr">href</span>]=<span class="hljs-string">&quot;&apos;http://www.example.com&apos;&quot;</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">&quot;&apos;Example Link&apos;&quot;</span> [<span class="hljs-attr">prepIcon</span>]=<span class="hljs-string">&quot;&apos;fa:chevron-right&apos;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="properties-">Properties:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>href</code></td>\n<td>string</td>\n<td></td>\n<td><code>href</code> attribute </td>\n</tr>\n<tr>\n<td><code>scheme</code></td>\n<td>string</td>\n<td></td>\n<td>URL scheme to be used, e. g. <code>tel</code>, <code>mailto</code> etc. </td>\n</tr>\n<tr>\n<td><code>label</code> <em>(1)</em></td>\n<td>string</td>\n<td></td>\n<td>textual label with automatic l10n lookup </td>\n</tr>\n<tr>\n<td><code>title</code> <em>(1)</em></td>\n<td>string</td>\n<td></td>\n<td>textual title with automatic l10n lookup </td>\n</tr>\n<tr>\n<td><code>prepIcon</code></td>\n<td>string</td>\n<td></td>\n<td>icon to be prepended to the label </td>\n</tr>\n<tr>\n<td><code>appIcon</code></td>\n<td>string</td>\n<td></td>\n<td>icon to be appended to the label </td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>disabled if <code>true</code> </td>\n</tr>\n</tbody>\n</table>\n<p><em>(1) Supports l10n</em></p>\n'},674:function(l,n){l.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Link with action:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-link</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"someAction($event)"</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">"\'Trigger test action\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>href attribute only (label is automatically created):<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-link</span> [<span class="hljs-attr">href</span>]=<span class="hljs-string">"\'http://www.example.com\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Label with an appended icon (uses vcl-icogram):<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-link</span>\n  [<span class="hljs-attr">label</span>]=<span class="hljs-string">"\'Example external Link\'"</span>\n  [<span class="hljs-attr">href</span>]=<span class="hljs-string">"\'https://github.com/ng-vcl/ng-vcl\'"</span>\n  [<span class="hljs-attr">appIcon</span>]=<span class="hljs-string">"\'fa:external-link\'"</span>\n  [<span class="hljs-attr">target</span>]=<span class="hljs-string">"\'_blank\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Disabled link:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-link</span>\n  [<span class="hljs-attr">label</span>]=<span class="hljs-string">"\'Disabled link\'"</span>\n  [<span class="hljs-attr">href</span>]=<span class="hljs-string">"\'this is not considered when the link is disabled\'"</span>\n  [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Link with title and scheme:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">vcl-link</span>\n  [<span class="hljs-attr">label</span>]=<span class="hljs-string">"\'I\\\'m a telephone number schemed link\'"</span>\n  [<span class="hljs-attr">title</span>]=<span class="hljs-string">"\'tel link title\'"</span>\n  [<span class="hljs-attr">scheme</span>]=<span class="hljs-string">"\'tel\'"</span>\n  [<span class="hljs-attr">href</span>]=<span class="hljs-string">"\'004971122222222\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n'},675:function(l,n){l.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> LinkDemoComponent {\n  someAction(param) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'Action handler, param:\'</span>, param);\n  }\n}\n'}});