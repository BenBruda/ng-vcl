webpackJsonp([9],{378:function(n,s,t){"use strict";function l(){return{label:"Token",tabs:{Demo:c,"README.md":{type:"md",content:t(720)},"demo.component.html":{type:"pre",content:t(721)},"demo.component.ts":{type:"pre",content:t(722)}}}}function a(n){return o._29(0,[(n()(),o._6(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o._27(-1,null,["single tokens:"])),(n()(),o._27(-1,null,["\n"])),(n()(),o._6(3,0,null,null,1,"vcl-token",[["label","my token"]],[[2,"vclToken",null],[40,"@checkState",0],[2,"vclSelected",null],[2,"vclDisabled",null]],[[null,"tap"]],function(n,s,t){var l=!0;if("tap"===s){l=!1!==o._20(n,4).onTap(t)&&l}return l},r.b,r.a)),o._5(4,49152,null,0,u.a,[o.h],{label:[0,"label"]},null),(n()(),o._27(-1,null,["\n"])),(n()(),o._6(6,0,null,null,1,"vcl-token",[["label","my selected token"]],[[2,"vclToken",null],[40,"@checkState",0],[2,"vclSelected",null],[2,"vclDisabled",null]],[[null,"tap"]],function(n,s,t){var l=!0;if("tap"===s){l=!1!==o._20(n,7).onTap(t)&&l}return l},r.b,r.a)),o._5(7,49152,null,0,u.a,[o.h],{label:[0,"label"],selected:[1,"selected"]},null),(n()(),o._27(-1,null,["\n"])),(n()(),o._6(9,0,null,null,1,"vcl-token",[["label","my removable token"]],[[2,"vclToken",null],[40,"@checkState",0],[2,"vclSelected",null],[2,"vclDisabled",null]],[[null,"remove"],[null,"tap"]],function(n,s,t){var l=!0,a=n.component;if("tap"===s){l=!1!==o._20(n,10).onTap(t)&&l}if("remove"===s){l=!1!==a.onRemove(t)&&l}return l},r.b,r.a)),o._5(10,49152,null,0,u.a,[o.h],{label:[0,"label"],removable:[1,"removable"]},{remove:"remove"}),(n()(),o._27(-1,null,["\n\n"])),(n()(),o._6(12,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o._27(-1,null,["\n\n"])),(n()(),o._6(14,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o._27(-1,null,["tokenlist:"])),(n()(),o._27(-1,null,["\n"])),(n()(),o._6(17,0,null,null,10,"vcl-token-list",[],[[2,"vclTokenList",null],[2,"vclTokenContainer",null]],[[null,"change"]],function(n,s,t){var l=!0,a=n.component;if("change"===s){l=!1!==a.onListChange(t)&&l}return l},i.b,i.a)),o._24(5120,null,g.j,function(n){return[n]},[j.a]),o._5(19,1753088,null,1,j.a,[o.h],{selectable:[0,"selectable"]},{change:"change"}),o._25(603979776,1,{tokens:1}),(n()(),o._27(-1,0,["\n  "])),(n()(),o._6(22,0,null,0,1,"vcl-token",[["label","my token 1"],["value","1"]],[[2,"vclToken",null],[40,"@checkState",0],[2,"vclSelected",null],[2,"vclDisabled",null]],[[null,"tap"]],function(n,s,t){var l=!0;if("tap"===s){l=!1!==o._20(n,23).onTap(t)&&l}return l},r.b,r.a)),o._5(23,49152,[[1,4]],0,u.a,[o.h],{label:[0,"label"]},null),(n()(),o._27(-1,0,["\n  "])),(n()(),o._6(25,0,null,0,1,"vcl-token",[["label","my token 2"],["value","2"]],[[2,"vclToken",null],[40,"@checkState",0],[2,"vclSelected",null],[2,"vclDisabled",null]],[[null,"tap"]],function(n,s,t){var l=!0;if("tap"===s){l=!1!==o._20(n,26).onTap(t)&&l}return l},r.b,r.a)),o._5(26,49152,[[1,4]],0,u.a,[o.h],{label:[0,"label"],selected:[1,"selected"]},null),(n()(),o._27(-1,0,["\n"])),(n()(),o._27(-1,null,["\n\n"])),(n()(),o._6(29,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o._27(-1,null,["\n\n"])),(n()(),o._6(31,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o._27(-1,null,["tokeninput:"])),(n()(),o._27(-1,null,["\n"])),(n()(),o._6(34,0,null,null,4,"vcl-token-input",[],[[2,"vclInput",null],[2,"vclTokenInput",null],[2,"vclLayoutHorizontal",null],[2,"vclLayoutWrap",null],[1,"tabindex",0],[2,"vclDisabled",null],[2,"vclFocused",null]],[[null,"change"],[null,"focus"],[null,"keydown"]],function(n,s,t){var l=!0,a=n.component;if("focus"===s){l=!1!==o._20(n,36).onFocus(t)&&l}if("keydown"===s){l=!1!==o._20(n,36).onKeydown(t)&&l}if("change"===s){l=!1!==a.onInputChange(t)&&l}return l},k.b,k.a)),o._24(5120,null,g.j,function(n){return[n]},[m.a]),o._5(36,49152,null,2,m.a,[o.h],null,{change:"change"}),o._25(335544320,2,{labelPre:0}),o._25(335544320,3,{labelPost:0}),(n()(),o._27(-1,null,["\n"]))],function(n,s){n(s,4,0,"my token");n(s,7,0,"my selected token",!0);n(s,10,0,"my removable token",!0);n(s,19,0,!0);n(s,23,0,"my token 1");n(s,26,0,"my token 2",!0)},function(n,s){n(s,3,0,!0,o._20(s,4).selected,o._20(s,4).selected,o._20(s,4).isDisabled);n(s,6,0,!0,o._20(s,7).selected,o._20(s,7).selected,o._20(s,7).isDisabled);n(s,9,0,!0,o._20(s,10).selected,o._20(s,10).selected,o._20(s,10).isDisabled);n(s,17,0,!0,!0);n(s,22,0,!0,o._20(s,23).selected,o._20(s,23).selected,o._20(s,23).isDisabled);n(s,25,0,!0,o._20(s,26).selected,o._20(s,26).selected,o._20(s,26).isDisabled);n(s,34,0,!0,!0,!0,!0,-1,o._20(s,36).disabled,o._20(s,36).focused)})}function e(n){return o._29(0,[(n()(),o._6(0,0,null,null,1,"ng-component",[],null,null,null,a,b)),o._5(1,49152,null,0,c,[],null,null)],null,null)}Object.defineProperty(s,"__esModule",{value:!0});var o=t(4),c=function(){function n(){}return n.prototype.onRemove=function(n){console.log("onRemove",n)},n.prototype.onListChange=function(n){console.log("onListChange",n)},n.prototype.onInputChange=function(n){console.log("onInputChange",n)},n}(),p={demo:l},d=function(){function n(){}return n}(),h=t(410),r=t(502),u=t(462),i=t(546),g=t(71),j=t(503),k=t(548),m=t(507),v=[],b=o._4({encapsulation:2,styles:v,data:{}}),_=o._2("ng-component",c,e,{},{},[]),f=t(21),y=t(43),T=t(174),q=t(72),D=t(409),C=t(411),w=t(420),L=t(175),S=t(176),x=t(178),I=t(441),M=t(42),N=t(408);t.d(s,"TokenDemoModuleNgFactory",function(){return R});var R=o._3(d,[],function(n){return o._17([o._18(512,o.j,o.Z,[[8,[h.a,_]],[3,o.j],o.w]),o._18(4608,f.n,f.m,[o.t,[2,f.v]]),o._18(4608,g.u,g.u,[]),o._18(4608,y.a,y.a,[]),o._18(512,f.c,f.c,[]),o._18(512,g.r,g.r,[]),o._18(512,g.i,g.i,[]),o._18(512,T.a,T.a,[]),o._18(512,q.d,q.d,[]),o._18(512,D.a,D.a,[]),o._18(512,C.a,C.a,[]),o._18(512,w.a,w.a,[]),o._18(512,L.a,L.a,[]),o._18(512,S.a,S.a,[]),o._18(512,x.a,x.a,[]),o._18(512,I.a,I.a,[]),o._18(512,M.m,M.m,[[2,M.r],[2,M.l]]),o._18(512,d,d,[]),o._18(1024,M.j,function(){return[[{path:"",component:N.a,data:p}]]},[])])})},720:function(n,s){n.exports='<h1 id="vcl-token">vcl-token</h1>\n<h2 id="usage-">Usage:</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLTokenModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLTokenModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}\n</pre>\n<h2 id="single-token-">single token:</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;mytoken&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n</pre>\n<h2 id="single-selected-token-">single selected token:</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;mytoken&quot;</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n</pre>\n<h2 id="single-removable-token-">single removable token:</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;mytoken&quot;</span> [<span class="hljs-attr">removable</span>]=<span class="hljs-string">&quot;true&quot;</span> (<span class="hljs-attr">remove</span>)=<span class="hljs-string">&quot;onRemove()&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n</pre>\n<h2 id="token-list-">token-list:</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-list</span> [<span class="hljs-attr">selectable</span>]=<span class="hljs-string">&quot;true&quot;</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">&quot;changed($event);&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;mytoken 1&quot;</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;mytoken 2&quot;</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">&quot;false&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-list</span>&gt;</span>\n</pre>\n<h2 id="token-insert">token-insert</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-input</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">&quot;changed($event);&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-input</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-token-attributes-">vcl-token attributes:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>label</code></td>\n<td>string</td>\n<td></td>\n<td>label-text inside of the token</td>\n</tr>\n<tr>\n<td><code>selected</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true, the token is highlighted</td>\n</tr>\n<tr>\n<td><code>removable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true, the remove-cross is shown</td>\n</tr>\n<tr>\n<td><code>icon</code></td>\n<td>string</td>\n<td>fa:remove</td>\n<td>remove icon</td>\n</tr>\n</tbody>\n</table>\n<h4 id="vcl-token-events-">vcl-token events:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>remove</code></td>\n<td></td>\n<td>called when the remove-button is pressed</td>\n</tr>\n</tbody>\n</table>\n<h4 id="token-list-attributes-">token-list attributes:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>ngModel</code></td>\n<td>string[]</td>\n<td>string[]</td>\n<td>The labels of the selected tokens</td>\n</tr>\n<tr>\n<td><code>selectable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>tokens are selectable if true</td>\n</tr>\n</tbody>\n</table>\n<h4 id="token-list-events-">token-list events:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>change</code></td>\n<td>string[]</td>\n<td>called when the selection of token changes</td>\n</tr>\n</tbody>\n</table>\n<h4 id="token-input-attributes-">token-input attributes:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>ngModel</code></td>\n<td>Token[]</td>\n<td>[]</td>\n<td>List of tokens</td>\n</tr>\n<tr>\n<td><code>selectable</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>tokens are selectable if true</td>\n</tr>\n<tr>\n<td><code>selectedAfterAdd</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>tokens are selected after being added if true</td>\n</tr>\n<tr>\n<td><code>tokenClass</code></td>\n<td>string</td>\n<td></td>\n<td>additional css class for tokens</td>\n</tr>\n<tr>\n<td><code>placeholder</code></td>\n<td>string</td>\n<td>&apos;Type to add tokens&apos;</td>\n<td>placeholder for the input element</td>\n</tr>\n<tr>\n<td><code>inputClass</code></td>\n<td>string</td>\n<td></td>\n<td>additional css class for the input element</td>\n</tr>\n<tr>\n<td><code>icon</code></td>\n<td>string</td>\n<td>fa:remove</td>\n<td>remove icon</td>\n</tr>\n<tr>\n<td><code>tabindex</code></td>\n<td>number</td>\n<td>0</td>\n<td>The tabindex of the token-input</td>\n</tr>\n</tbody>\n</table>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>change</code></td>\n<td>Token[]</td>\n<td>called after tokens are added/removed or the selection of token changes</td>\n</tr>\n<tr>\n<td><code>add</code></td>\n<td>Token</td>\n<td>called after a token is added</td>\n</tr>\n<tr>\n<td><code>remove</code></td>\n<td>Token</td>\n<td>called after a token is removed</td>\n</tr>\n<tr>\n<td><code>confirm</code></td>\n<td>Token[]</td>\n<td>called after <code>enter</code> is pressed when input element is empty</td>\n</tr>\n</tbody>\n</table>\n<h4 id="interfaces">interfaces</h4>\n<pre class="hljs"><span class="hljs-keyword">interface</span> Token {\n  label: <span class="hljs-built_in">string</span>;\n  selected?: <span class="hljs-built_in">boolean</span>;\n  removable?: <span class="hljs-built_in">boolean</span>;\n}\n</pre>\n'},721:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>single tokens:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"my token"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"my selected token"</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">"true"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"my removable token"</span> [<span class="hljs-attr">removable</span>]=<span class="hljs-string">"true"</span> (<span class="hljs-attr">remove</span>)=<span class="hljs-string">"onRemove($event)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>tokenlist:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-list</span> [<span class="hljs-attr">selectable</span>]=<span class="hljs-string">"true"</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">"onListChange($event);"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"my token 1"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-token</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"my token 2"</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">"true"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-list</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>tokeninput:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-token-input</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">"onInputChange($event);"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-token-input</span>&gt;</span>\n'},722:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> TokenDemoComponent {\n\n  onRemove(token) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onRemove\'</span>, token);\n  }\n\n  onListChange(value) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onListChange\'</span>, value);\n  }\n\n  onInputChange(value) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onInputChange\'</span>, value);\n  }\n}\n'}});