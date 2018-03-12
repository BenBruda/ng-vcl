webpackJsonp([29],{1065:function(l,n){l.exports='<h1 id="vcl-icogram">vcl-icogram</h1>\n<p>Combination of icon and text of which both are optional and can be permuted.<br>Icons can be prepended or appended to a textual label and can be sourced from icon<br>fonts or directly from file based imagery.<br>The component takes care of accessibility aspects such rendering appropriate aria<br>attributes.<br>It also renders accessability labels for icons if no label for the icogram is<br>provided.</p>\n<h2 id="usage-">Usage:</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;some label&quot;</span> <span class="hljs-attr">prepIcon</span>=<span class="hljs-string">&quot;fa:chevron-right&quot;</span> <span class="hljs-attr">flexLabel</span>=<span class="hljs-string">true</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;fa:close&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="properties-">Properties:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>label</code> <em>(1)</em></td>\n<td>string</td>\n<td></td>\n<td>The textual label </td>\n</tr>\n<tr>\n<td><code>flexLabel</code></td>\n<td>boolean</td>\n<td></td>\n<td>the label gets a <code>vclLayoutFlex</code> class if true</td>\n</tr>\n<tr>\n<td><code>prepIcon</code></td>\n<td>string</td>\n<td></td>\n<td>Icon as defined by the icon component</td>\n</tr>\n<tr>\n<td><code>appIcon</code></td>\n<td>string</td>\n<td></td>\n<td>Same as <code>prepIcon</code> but appended</td>\n</tr>\n<tr>\n<td><code>prepIconSrc</code></td>\n<td>string</td>\n<td></td>\n<td>Image as defined by the icon component</td>\n</tr>\n<tr>\n<td><code>appIconSrc</code></td>\n<td>string</td>\n<td></td>\n<td>Same as <code>prepIconSrc</code> but appended</td>\n</tr>\n</tbody>\n</table>\n<p><em>(1) Supports l10n</em></p>\n'},1066:function(l,n){l.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"some label"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"icogram with accessible link"</span> <span class="hljs-attr">prepIcon</span>=<span class="hljs-string">"fa:chevron-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"prep/app icons"</span> <span class="hljs-attr">prepIcon</span>=<span class="hljs-string">"fa:chevron-right"</span> <span class="hljs-attr">appIcon</span>=<span class="hljs-string">"fa:chevron-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"flex label"</span> <span class="hljs-attr">appIcon</span>=<span class="hljs-string">"fa:chevron-right"</span> <span class="hljs-attr">flexLabel</span>=<span class="hljs-string">true</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclLayoutHorizontal"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icogram</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"centered flex label"</span> <span class="hljs-attr">appIcon</span>=<span class="hljs-string">"fa:chevron-right"</span> <span class="hljs-attr">flexLabel</span>=<span class="hljs-string">true</span> <span class="hljs-attr">flexLabelCentered</span>=<span class="hljs-string">true</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclLayoutHorizontal"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icogram</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\nThis is <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-icogram</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"an inline"</span> <span class="hljs-attr">prepIcon</span>=<span class="hljs-string">"fa:chevron-right"</span> <span class="hljs-attr">appIcon</span>=<span class="hljs-string">"fa:chevron-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> icogram\n'},1067:function(l,n){l.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> IcogramDemoComponent {\n\n}\n'},388:function(l,n,a){"use strict";function s(){return{label:"Icogram",tabs:{Demo:c,"README.md":{type:"md",content:a(1065)},"demo.component.html":{type:"pre",content:a(1066)},"demo.component.ts":{type:"pre",content:a(1067)}}}}function t(l){return e._29(0,[(l()(),e._6(0,0,null,null,1,"vcl-icogram",[["label","some label"]],[[2,"vclIcogram",null],[1,"role",0],[2,"vclHorizontal",null],[4,"display",null]],null,null,h.b,h.a)),e._5(1,49152,null,0,i.a,[e.k],{label:[0,"label"]},null),(l()(),e._27(-1,null,["\n"])),(l()(),e._6(3,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._6(4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._27(-1,null,["\n"])),(l()(),e._6(6,0,null,null,1,"vcl-icogram",[["label","icogram with accessible link"],["prepIcon","fa:chevron-right"]],[[2,"vclIcogram",null],[1,"role",0],[2,"vclHorizontal",null],[4,"display",null]],null,null,h.b,h.a)),e._5(7,49152,null,0,i.a,[e.k],{label:[0,"label"],prepIcon:[1,"prepIcon"]},null),(l()(),e._27(-1,null,["\n"])),(l()(),e._6(9,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._6(10,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._27(-1,null,["\n"])),(l()(),e._6(12,0,null,null,1,"vcl-icogram",[["appIcon","fa:chevron-right"],["label","prep/app icons"],["prepIcon","fa:chevron-right"]],[[2,"vclIcogram",null],[1,"role",0],[2,"vclHorizontal",null],[4,"display",null]],null,null,h.b,h.a)),e._5(13,49152,null,0,i.a,[e.k],{label:[0,"label"],prepIcon:[1,"prepIcon"],appIcon:[2,"appIcon"]},null),(l()(),e._27(-1,null,["\n"])),(l()(),e._6(15,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._6(16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._27(-1,null,["\n"])),(l()(),e._6(18,0,null,null,1,"vcl-icogram",[["appIcon","fa:chevron-right"],["class","vclLayoutHorizontal"],["flexLabel","true"],["label","flex label"]],[[2,"vclIcogram",null],[1,"role",0],[2,"vclHorizontal",null],[4,"display",null]],null,null,h.b,h.a)),e._5(19,49152,null,0,i.a,[e.k],{label:[0,"label"],flexLabel:[1,"flexLabel"],appIcon:[2,"appIcon"]},null),(l()(),e._27(-1,null,["\n"])),(l()(),e._6(21,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._6(22,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._27(-1,null,["\n"])),(l()(),e._6(24,0,null,null,1,"vcl-icogram",[["appIcon","fa:chevron-right"],["class","vclLayoutHorizontal"],["flexLabel","true"],["flexLabelCentered","true"],["label","centered flex label"]],[[2,"vclIcogram",null],[1,"role",0],[2,"vclHorizontal",null],[4,"display",null]],null,null,h.b,h.a)),e._5(25,49152,null,0,i.a,[e.k],{label:[0,"label"],flexLabel:[1,"flexLabel"],flexLabelCentered:[2,"flexLabelCentered"],appIcon:[3,"appIcon"]},null),(l()(),e._27(-1,null,["\n"])),(l()(),e._6(27,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._6(28,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e._27(-1,null,["\nThis is "])),(l()(),e._6(30,0,null,null,1,"span",[["appIcon","fa:chevron-right"],["label","an inline"],["prepIcon","fa:chevron-right"],["vcl-icogram",""]],[[2,"vclIcogram",null],[1,"role",0],[2,"vclHorizontal",null],[4,"display",null]],null,null,h.b,h.a)),e._5(31,49152,null,0,i.a,[e.k],{label:[0,"label"],prepIcon:[1,"prepIcon"],appIcon:[2,"appIcon"]},null),(l()(),e._27(-1,null,[" icogram\n"]))],function(l,n){l(n,1,0,"some label");l(n,7,0,"icogram with accessible link","fa:chevron-right");l(n,13,0,"prep/app icons","fa:chevron-right","fa:chevron-right");l(n,19,0,"flex label","true","fa:chevron-right");l(n,25,0,"centered flex label","true","true","fa:chevron-right");l(n,31,0,"an inline","fa:chevron-right","fa:chevron-right")},function(l,n){l(n,0,0,!0,e._20(n,1).img,e._20(n,1).flexLabel,e._20(n,1).block);l(n,6,0,!0,e._20(n,7).img,e._20(n,7).flexLabel,e._20(n,7).block);l(n,12,0,!0,e._20(n,13).img,e._20(n,13).flexLabel,e._20(n,13).block);l(n,18,0,!0,e._20(n,19).img,e._20(n,19).flexLabel,e._20(n,19).block);l(n,24,0,!0,e._20(n,25).img,e._20(n,25).flexLabel,e._20(n,25).block);l(n,30,0,!0,e._20(n,31).img,e._20(n,31).flexLabel,e._20(n,31).block)})}function p(l){return e._29(0,[(l()(),e._6(0,0,null,null,1,"ng-component",[],null,null,null,t,d)),e._5(1,49152,null,0,c,[],null,null)],null,null)}Object.defineProperty(n,"__esModule",{value:!0});var e=a(4),c=function(){function l(){}return l}(),r={demo:s},o=function(){function l(){}return l}(),u=a(407),h=a(110),i=a(73),g=[],d=e._4({encapsulation:2,styles:g,data:{}}),b=e._2("ng-component",c,p,{},{},[]),m=a(21),j=a(43),f=a(174),_=a(71),v=a(406),I=a(408),x=a(175),y=a(176),L=a(42),k=a(405);a.d(n,"IcogramDemoModuleNgFactory",function(){return w});var w=e._3(o,[],function(l){return e._17([e._18(512,e.j,e.Z,[[8,[u.a,b]],[3,e.j],e.w]),e._18(4608,m.n,m.m,[e.t,[2,m.v]]),e._18(4608,j.a,j.a,[]),e._18(512,m.c,m.c,[]),e._18(512,f.a,f.a,[]),e._18(512,_.d,_.d,[]),e._18(512,v.a,v.a,[]),e._18(512,I.a,I.a,[]),e._18(512,x.a,x.a,[]),e._18(512,y.a,y.a,[]),e._18(512,L.m,L.m,[[2,L.r],[2,L.l]]),e._18(512,o,o,[]),e._18(1024,L.j,function(){return[[{path:"",component:k.a,data:r}]]},[])])})}});