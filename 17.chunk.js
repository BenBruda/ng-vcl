webpackJsonp([17],{1056:function(s,n){s.exports='<h1 id="vcl-popover">vcl-popover</h1>\n<p>A popover is a dom-element which &apos;floats&apos; at the position of the target element.</p>\n<h2 id="usage-">Usage:</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> #<span class="hljs-attr">myTarget</span>&gt;</span>any dom-element which is the target<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-popover</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">&quot;myTarget&quot;</span> [(<span class="hljs-attr">open</span>)]=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">targetX</span>=<span class="hljs-string">&quot;right&quot;</span> <span class="hljs-attr">attachmentX</span>=<span class="hljs-string">&quot;left&quot;</span> <span class="hljs-attr">targetY</span>=<span class="hljs-string">&quot;top&quot;</span> <span class="hljs-attr">attachmentY</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>\n  Popover-Content\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-popover</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="attributes-">Attributes:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>visible</code> <em>(1)</em></td>\n<td>boolean</td>\n<td>true</td>\n<td>the popover is hidden if false</td>\n</tr>\n<tr>\n<td><code>target</code></td>\n<td>any</td>\n<td></td>\n<td>the target can be a selector, element or ElementRef instance</td>\n</tr>\n<tr>\n<td><code>targetX</code></td>\n<td>string</td>\n<td>&apos;left&apos;</td>\n<td>position of the target-side</td>\n</tr>\n<tr>\n<td><code>attachmentX</code></td>\n<td>string</td>\n<td>&apos;left&apos;</td>\n<td>position of the popover-side</td>\n</tr>\n<tr>\n<td><code>targetY</code></td>\n<td>string</td>\n<td>&apos;bottom&apos;</td>\n<td>position of the target-vertical</td>\n</tr>\n<tr>\n<td><code>attachmentY</code></td>\n<td>string</td>\n<td>&apos;top&apos;</td>\n<td>position of the popover-vertical</td>\n</tr>\n</tbody>\n</table>\n<h4 id="methods-">Methods:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Attributes</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>open</code></td>\n<td></td>\n<td>will show the popover</td>\n</tr>\n<tr>\n<td><code>close</code></td>\n<td></td>\n<td>will hide the popover</td>\n</tr>\n<tr>\n<td><code>reposition</code></td>\n<td></td>\n<td>re-positions the popover, use this if the popover changes its content-size</td>\n</tr>\n</tbody>\n</table>\n<p><em>(1) Supports Two-way binding</em></p>\n'},1057:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"min-height:500px; width: 100%;"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"popover1.toggle()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"toggle popover"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> #<span class="hljs-attr">target</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"position: absolute; top: 300px; left: 200px; padding: 10px; border: 3px double green"</span>&gt;</span>\n    this is the target\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-popover</span>\n  #<span class="hljs-attr">popover1</span>\n  [<span class="hljs-attr">target</span>]=<span class="hljs-string">"target"</span>\n  [<span class="hljs-attr">style</span>]=<span class="hljs-string">"style"</span>\n  (<span class="hljs-attr">willClose</span>)=<span class="hljs-string">"popover2.close()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> #<span class="hljs-attr">target2</span>&gt;</span>\n    popover text goes here <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"popover2.open()"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"show popover2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"popover1.close();"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"close popover"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-popover</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-popover</span>\n  #<span class="hljs-attr">popover2</span>\n  [<span class="hljs-attr">target</span>]=<span class="hljs-string">"target2"</span>\n  <span class="hljs-attr">targetX</span>=<span class="hljs-string">"right"</span>\n  <span class="hljs-attr">attachmentX</span>=<span class="hljs-string">"left"</span>\n  <span class="hljs-attr">targetY</span>=<span class="hljs-string">"top"</span>\n  <span class="hljs-attr">attachmentY</span>=<span class="hljs-string">"top"</span>&gt;</span>\n  popover 2 text goes here <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-popover</span>&gt;</span>\n'},1058:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> PopoverDemoComponent {\n  style = {\n    border: <span class="hljs-string">\'3px double red\'</span>,\n    padding: <span class="hljs-string">\'20px\'</span>,\n    overflow: <span class="hljs-string">\'hidden\'</span>\n  };\n}\n'},388:function(s,n,t){"use strict";function l(){return{label:"Popover",tabs:{Demo:o,"README.md":{type:"md",content:t(1056)},"demo.component.html":{type:"pre",content:t(1057)},"demo.component.ts":{type:"pre",content:t(1058)}}}}function a(s){return p._29(0,[(s()(),p._6(0,0,null,null,8,"div",[["style","min-height:500px; width: 100%;"]],null,null,null,null,null)),(s()(),p._27(-1,null,["\n  "])),(s()(),p._6(2,0,null,null,2,"button",[["label","toggle popover"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"tap"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(s,n,t){var l=!0;if("keypress"===n){l=!1!==p._20(s,3).onKeypress(t)&&l}if("mouseenter"===n){l=!1!==p._20(s,3).onMouseEnter(t)&&l}if("mouseleave"===n){l=!1!==p._20(s,3).onMouseLeave(t)&&l}if("tap"===n){l=!1!==p._20(s,3).onTap(t)&&l}if("click"===n){l=!1!==p._20(s,3).onClick(t)&&l}if("tap"===n){l=!1!==p._20(s,11).toggle()&&l}return l},u.b,u.a)),p._5(3,4898816,null,1,h.a,[p.k],{label:[0,"label"]},null),p._25(603979776,1,{buttonContent:1}),(s()(),p._27(-1,null,["\n  "])),(s()(),p._6(6,0,[["target",1]],null,1,"div",[["style","position: absolute; top: 300px; left: 200px; padding: 10px; border: 3px double green"]],null,null,null,null,null)),(s()(),p._27(-1,null,["\n    this is the target\n  "])),(s()(),p._27(-1,null,["\n"])),(s()(),p._27(-1,null,["\n\n"])),(s()(),p._6(10,0,null,null,15,"vcl-popover",[],[[8,"style",2],[2,"vclPopOver",null],[4,"position",null],[2,"vclLayoutHidden",null],[4,"visibility",null],[4,"transform",null]],[[null,"willClose"],["window","resize"]],function(s,n,t){var l=!0;if("window:resize"===n){l=!1!==p._20(s,11).onWindowResize(t)&&l}if("willClose"===n){l=!1!==p._20(s,28).close()&&l}return l},d.b,d.a)),p._5(11,4964352,[["popover1",4]],0,g.b,[p.k,v.b,p.h,[2,g.a]],{target:[0,"target"]},{willClose:"willClose"}),(s()(),p._27(-1,0,["\n  "])),(s()(),p._6(13,0,[["target2",1]],0,11,"div",[],null,null,null,null,null)),(s()(),p._27(-1,null,["\n    popover text goes here "])),(s()(),p._6(15,0,null,null,0,"br",[],null,null,null,null,null)),(s()(),p._27(-1,null,["\n    "])),(s()(),p._6(17,0,null,null,2,"button",[["label","show popover2"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"tap"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(s,n,t){var l=!0;if("keypress"===n){l=!1!==p._20(s,18).onKeypress(t)&&l}if("mouseenter"===n){l=!1!==p._20(s,18).onMouseEnter(t)&&l}if("mouseleave"===n){l=!1!==p._20(s,18).onMouseLeave(t)&&l}if("tap"===n){l=!1!==p._20(s,18).onTap(t)&&l}if("click"===n){l=!1!==p._20(s,18).onClick(t)&&l}if("tap"===n){l=!1!==p._20(s,28).open()&&l}return l},u.b,u.a)),p._5(18,4898816,null,1,h.a,[p.k],{label:[0,"label"]},null),p._25(603979776,2,{buttonContent:1}),(s()(),p._27(-1,null,["\n    "])),(s()(),p._6(21,0,null,null,2,"button",[["label","close popover"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"tap"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(s,n,t){var l=!0;if("keypress"===n){l=!1!==p._20(s,22).onKeypress(t)&&l}if("mouseenter"===n){l=!1!==p._20(s,22).onMouseEnter(t)&&l}if("mouseleave"===n){l=!1!==p._20(s,22).onMouseLeave(t)&&l}if("tap"===n){l=!1!==p._20(s,22).onTap(t)&&l}if("click"===n){l=!1!==p._20(s,22).onClick(t)&&l}if("tap"===n){l=!1!==p._20(s,11).close()&&l}return l},u.b,u.a)),p._5(22,4898816,null,1,h.a,[p.k],{label:[0,"label"]},null),p._25(603979776,3,{buttonContent:1}),(s()(),p._27(-1,null,["\n  "])),(s()(),p._27(-1,0,["\n"])),(s()(),p._27(-1,null,["\n\n"])),(s()(),p._6(27,0,null,null,4,"vcl-popover",[["attachmentX","left"],["attachmentY","top"],["targetX","right"],["targetY","top"]],[[2,"vclPopOver",null],[4,"position",null],[2,"vclLayoutHidden",null],[4,"visibility",null],[4,"transform",null]],[["window","resize"]],function(s,n,t){var l=!0;if("window:resize"===n){l=!1!==p._20(s,28).onWindowResize(t)&&l}return l},d.b,d.a)),p._5(28,4964352,[["popover2",4]],0,g.b,[p.k,v.b,p.h,[2,g.a]],{target:[0,"target"],targetX:[1,"targetX"],targetY:[2,"targetY"],attachmentX:[3,"attachmentX"],attachmentY:[4,"attachmentY"]},null),(s()(),p._27(-1,0,["\n  popover 2 text goes here "])),(s()(),p._6(30,0,null,0,0,"br",[],null,null,null,null,null)),(s()(),p._27(-1,0,["\n"])),(s()(),p._27(-1,null,["\n"]))],function(s,n){s(n,3,0,"toggle popover"),s(n,11,0,p._20(n,6));s(n,18,0,"show popover2");s(n,22,0,"close popover");s(n,28,0,p._20(n,13),"right","top","left","top")},function(s,n){var t=n.component;s(n,2,0,!0,p._20(n,3).hovered,p._20(n,3).isDisabled,p._20(n,3).selected,p._20(n,3).title);s(n,10,0,t.style,!0,"absolute",p._20(n,11).classHidden,p._20(n,11).styleVisibility,p._20(n,11).transform);s(n,17,0,!0,p._20(n,18).hovered,p._20(n,18).isDisabled,p._20(n,18).selected,p._20(n,18).title);s(n,21,0,!0,p._20(n,22).hovered,p._20(n,22).isDisabled,p._20(n,22).selected,p._20(n,22).title);s(n,27,0,!0,"absolute",p._20(n,28).classHidden,p._20(n,28).styleVisibility,p._20(n,28).transform)})}function e(s){return p._29(0,[(s()(),p._6(0,0,null,null,1,"ng-component",[],null,null,null,a,_)),p._5(1,49152,null,0,o,[],null,null)],null,null)}Object.defineProperty(n,"__esModule",{value:!0});var p=t(4),o=function(){function s(){this.style={border:"3px double red",padding:"20px",overflow:"hidden"}}return s}(),r={demo:l},c=function(){function s(){}return s}(),i=t(410),u=t(177),h=t(106),d=t(496),g=t(181),v=t(31),j=[],_=p._4({encapsulation:2,styles:j,data:{}}),m=p._2("ng-component",o,e,{},{},[]),b=t(21),f=t(43),y=t(174),w=t(72),k=t(409),x=t(411),C=t(423),q=t(429),X=t(175),Y=t(176),D=t(178),M=t(42),P=t(408);t.d(n,"PopoverDemoModuleNgFactory",function(){return z});var z=p._3(c,[],function(s){return p._17([p._18(512,p.j,p.Z,[[8,[i.a,m]],[3,p.j],p.w]),p._18(4608,b.n,b.m,[p.t,[2,b.v]]),p._18(4608,f.a,f.a,[]),p._18(512,b.c,b.c,[]),p._18(512,y.a,y.a,[]),p._18(512,w.d,w.d,[]),p._18(512,k.a,k.a,[]),p._18(512,x.a,x.a,[]),p._18(512,C.a,C.a,[]),p._18(512,q.a,q.a,[]),p._18(512,X.a,X.a,[]),p._18(512,Y.a,Y.a,[]),p._18(512,D.a,D.a,[]),p._18(512,M.m,M.m,[[2,M.r],[2,M.l]]),p._18(512,c,c,[]),p._18(1024,M.j,function(){return[[{path:"",component:P.a,data:r}]]},[])])})}});