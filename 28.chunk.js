webpackJsonp([28],{1062:function(n,s){n.exports='<h1 id="vcl-icon">vcl-icon</h1>\n<p>Icon which can be based on glyphs from icon fonts, inline svg and bitmaps.</p>\n<p>The <code>label</code> is never displayed, it is only for accessibility with screen<br>readers.<br>The <code>hidden</code> attribute is only reflected in the <code>aria-hidden</code> property which<br>allows to hide the icon to screen readers, if it is only of presentational character.<br>See <a href="http://www.filamentgroup.com/lab/bulletproof_icon_fonts.html">http://www.filamentgroup.com/lab/bulletproof_icon_fonts.html</a> for details.</p>\n<h2 id="usage-">Usage:</h2>\n<p>As a component</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;...&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;chevron right&quot;</span> <span class="hljs-attr">hidden</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n</pre>\n<p>or via an attribute</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">vcl-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;...&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\nWith image resource\n```html\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;...&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n</pre>\n<p>With SVG</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">svguse</span>=<span class="hljs-string">&quot;...&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="properties-">Properties:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>icon</code></td>\n<td>string</td>\n<td></td>\n<td>Icon generator lookup via icon class provider</td>\n</tr>\n<tr>\n<td><code>src</code></td>\n<td>string</td>\n<td></td>\n<td>URL of a graphics resource</td>\n</tr>\n<tr>\n<td><code>svguse</code></td>\n<td>string</td>\n<td></td>\n<td>Generates an SVG <code>use</code> tag referencing the value</td>\n</tr>\n<tr>\n<td><code>iconClass</code></td>\n<td>string</td>\n<td></td>\n<td>Additional class</td>\n</tr>\n<tr>\n<td><code>label</code> <em>(1)</em></td>\n<td>string</td>\n<td></td>\n<td><code>aria-label</code> </td>\n</tr>\n<tr>\n<td><code>ariaRole</code></td>\n<td>string</td>\n<td></td>\n<td><code>aria-role</code></td>\n</tr>\n</tbody>\n</table>\n<p><em>(1) Supports l10n</em></p>\n'},1063:function(n,s){n.exports='Custom icon (from the <span class="hljs-tag">&lt;<span class="hljs-name">i</span>&gt;</span>Font Awesome<span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span> icon font):\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">iconClass</span>=<span class="hljs-string">"vclIconSize2"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fa fa-cog fa-2x"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\nIcon provider based (from the <span class="hljs-tag">&lt;<span class="hljs-name">i</span>&gt;</span>Font Awesome<span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span> icon font):\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> <span class="hljs-attr">iconClass</span>=<span class="hljs-string">"vclIconSize2"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"fa:cog:2x"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\nPNG image resource based:\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> [<span class="hljs-attr">src</span>]=<span class="hljs-string">"\'http://materialdesignicons.com/api/download/icon/png/E4A14909-3821-4DB1-A739-4DA464ABEEB7/36\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\nSVG image resource based:\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> [<span class="hljs-attr">src</span>]=<span class="hljs-string">"\'http://materialdesignicons.com/api/download/icon/png/E4A14909-3821-4DB1-A739-4DA464ABEEB7\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\nSVG use ref based:\n<span class="hljs-tag">&lt;<span class="hljs-name">svg</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"25"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"25"</span> <span class="hljs-attr">viewBox</span>=<span class="hljs-string">"0 0 1792 1792"</span> <span class="hljs-attr">xmlns</span>=<span class="hljs-string">"http://www.w3.org/2000/svg"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">path</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"mysvg"</span> <span class="hljs-attr">d</span>=<span class="hljs-string">"M1792 896q0 26-19 45l-256 256q-19 19-45 19t-45-19-19-45v-128h-384v384h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-384h-384v128q0 26-19 45t-45 19-45-19l-256-256q-19-19-19-45t19-45l256-256q19-19 45-19t45 19 19 45v128h384v-384h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45t-19 45-45 19h-128v384h384v-128q0-26 19-45t45-19 45 19l256 256q19 19 19 45z"</span>/&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-icon</span> [<span class="hljs-attr">svguse</span>]=<span class="hljs-string">"\'#mysvg\'"</span> [<span class="hljs-attr">class</span>]=<span class="hljs-string">"\'vclIconSize1\'"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-icon</span>&gt;</span>\n '},1064:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> IconDemoComponent {\n\n}\n'},387:function(n,s,l){"use strict";function a(){return{label:"Icon",tabs:{Demo:e,"README.md":{type:"md",content:l(1062)},"demo.component.html":{type:"pre",content:l(1063)},"demo.component.ts":{type:"pre",content:l(1064)}}}}function t(n){return p._29(0,[(n()(),p._27(-1,null,["Custom icon (from the "])),(n()(),p._6(1,0,null,null,1,"i",[],null,null,null,null,null)),(n()(),p._27(-1,null,["Font Awesome"])),(n()(),p._27(-1,null,[" icon font):\n"])),(n()(),p._6(4,0,null,null,1,"vcl-icon",[["icon","fa fa-cog fa-2x"],["iconClass","vclIconSize2"]],[[2,"vclIcon",null],[1,"aria-label",0],[1,"role",0],[8,"className",0],[1,"aria-hidden",0]],null,null,u.b,u.a)),p._5(5,49152,null,0,h.a,[d.a],{iconClass:[0,"iconClass"],icon:[1,"icon"]},null),(n()(),p._27(-1,null,["\n\n"])),(n()(),p._6(7,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),p._6(8,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),p._27(-1,null,["\n\nIcon provider based (from the "])),(n()(),p._6(10,0,null,null,1,"i",[],null,null,null,null,null)),(n()(),p._27(-1,null,["Font Awesome"])),(n()(),p._27(-1,null,[" icon font):\n"])),(n()(),p._6(13,0,null,null,1,"vcl-icon",[["icon","fa:cog:2x"],["iconClass","vclIconSize2"]],[[2,"vclIcon",null],[1,"aria-label",0],[1,"role",0],[8,"className",0],[1,"aria-hidden",0]],null,null,u.b,u.a)),p._5(14,49152,null,0,h.a,[d.a],{iconClass:[0,"iconClass"],icon:[1,"icon"]},null),(n()(),p._27(-1,null,["\n\n"])),(n()(),p._6(16,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),p._6(17,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),p._27(-1,null,["\n\nPNG image resource based:\n"])),(n()(),p._6(19,0,null,null,1,"vcl-icon",[],[[2,"vclIcon",null],[1,"aria-label",0],[1,"role",0],[8,"className",0],[1,"aria-hidden",0]],null,null,u.b,u.a)),p._5(20,49152,null,0,h.a,[d.a],{src:[0,"src"]},null),(n()(),p._27(-1,null,["\n\n"])),(n()(),p._6(22,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),p._6(23,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),p._27(-1,null,["\n\nSVG image resource based:\n"])),(n()(),p._6(25,0,null,null,1,"vcl-icon",[],[[2,"vclIcon",null],[1,"aria-label",0],[1,"role",0],[8,"className",0],[1,"aria-hidden",0]],null,null,u.b,u.a)),p._5(26,49152,null,0,h.a,[d.a],{src:[0,"src"]},null),(n()(),p._27(-1,null,["\n\n"])),(n()(),p._6(28,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),p._6(29,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),p._27(-1,null,["\n\nSVG use ref based:\n"])),(n()(),p._6(31,0,null,null,1,":svg:svg",[["height","25"],["viewBox","0 0 1792 1792"],["width","25"],["xmlns","http://www.w3.org/2000/svg"]],null,null,null,null,null)),(n()(),p._6(32,0,null,null,0,":svg:path",[["d","M1792 896q0 26-19 45l-256 256q-19 19-45 19t-45-19-19-45v-128h-384v384h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-384h-384v128q0 26-19 45t-45 19-45-19l-256-256q-19-19-19-45t19-45l256-256q19-19 45-19t45 19 19 45v128h384v-384h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45t-19 45-45 19h-128v384h384v-128q0-26 19-45t45-19 45 19l256 256q19 19 19 45z"],["id","mysvg"]],null,null,null,null,null)),(n()(),p._27(-1,null,["\n\n"])),(n()(),p._6(34,0,null,null,1,"vcl-icon",[],[[8,"className",0],[2,"vclIcon",null],[1,"aria-label",0],[1,"role",0],[8,"className",0],[1,"aria-hidden",0]],null,null,u.b,u.a)),p._5(35,49152,null,0,h.a,[d.a],{svguse:[0,"svguse"]},null),(n()(),p._27(-1,null,["\n "]))],function(n,s){n(s,5,0,"vclIconSize2","fa fa-cog fa-2x");n(s,14,0,"vclIconSize2","fa:cog:2x");n(s,20,0,"http://materialdesignicons.com/api/download/icon/png/E4A14909-3821-4DB1-A739-4DA464ABEEB7/36");n(s,26,0,"http://materialdesignicons.com/api/download/icon/png/E4A14909-3821-4DB1-A739-4DA464ABEEB7");n(s,35,0,"#mysvg")},function(n,s){n(s,4,0,!0,p._20(s,5).label,p._20(s,5).ariaRole,p._20(s,5).mergedIconClass,p._20(s,5).isAriaHidden);n(s,13,0,!0,p._20(s,14).label,p._20(s,14).ariaRole,p._20(s,14).mergedIconClass,p._20(s,14).isAriaHidden);n(s,19,0,!0,p._20(s,20).label,p._20(s,20).ariaRole,p._20(s,20).mergedIconClass,p._20(s,20).isAriaHidden);n(s,25,0,!0,p._20(s,26).label,p._20(s,26).ariaRole,p._20(s,26).mergedIconClass,p._20(s,26).isAriaHidden);n(s,34,0,"vclIconSize1",!0,p._20(s,35).label,p._20(s,35).ariaRole,p._20(s,35).mergedIconClass,p._20(s,35).isAriaHidden)})}function c(n){return p._29(0,[(n()(),p._6(0,0,null,null,1,"ng-component",[],null,null,null,t,j)),p._5(1,49152,null,0,e,[],null,null)],null,null)}Object.defineProperty(s,"__esModule",{value:!0});var p=l(4),e=function(){function n(){}return n}(),o={demo:a},i=function(){function n(){}return n}(),r=l(407),u=l(111),h=l(72),d=l(43),g=[],j=p._4({encapsulation:2,styles:g,data:{}}),m=p._2("ng-component",e,c,{},{},[]),v=l(21),_=l(174),b=l(71),f=l(406),q=l(408),w=l(175),A=l(42),I=l(405);l.d(s,"IconDemoModuleNgFactory",function(){return y});var y=p._3(i,[],function(n){return p._17([p._18(512,p.j,p.Z,[[8,[r.a,m]],[3,p.j],p.w]),p._18(4608,v.n,v.m,[p.t,[2,v.v]]),p._18(4608,d.a,d.a,[]),p._18(512,v.c,v.c,[]),p._18(512,_.a,_.a,[]),p._18(512,b.d,b.d,[]),p._18(512,f.a,f.a,[]),p._18(512,q.a,q.a,[]),p._18(512,w.a,w.a,[]),p._18(512,A.m,A.m,[[2,A.r],[2,A.l]]),p._18(512,i,i,[]),p._18(1024,A.j,function(){return[[{path:"",component:I.a,data:o}]]},[])])})}});