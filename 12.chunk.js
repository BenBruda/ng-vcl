webpackJsonp([12],{448:function(n,s,l){"use strict";function a(n,s){return void 0===n&&(n=p),s instanceof i?{loading:!0,books:n.books.slice(),error:null}:s instanceof h?{loading:!1,books:s.books.slice(),error:null}:s instanceof d?{loading:!1,books:[],error:s.error}:n}function t(){return{label:"Store",tabs:{Demo:w,"README.md":{type:"md",content:l(908)},"demo.component.html":{type:"pre",content:l(909)},"demo.component.ts":{type:"pre",content:l(910)},"books.reducers.ts":{type:"pre",content:l(911)},"books.service.ts":{type:"pre",content:l(912)}}}}function e(n){return C._41(0,[(n()(),C._19(0,null,null,2,"div",[],null,null,null,null,null)),(n()(),C._39(null,["",""])),C._35(131072,I.b,[C.i])],null,function(n,s){var l=s.component;n(s,1,0,C._40(s,1,0,C._33(s,2).transform(l.error$)))})}function o(n){return C._41(0,[(n()(),C._19(0,null,null,1,"li",[],null,null,null,null,null)),(n()(),C._39(null,["",""]))],null,function(n,s){n(s,1,0,s.context.$implicit)})}function r(n){return C._41(0,[(n()(),C._19(0,null,null,5,"ul",[],null,null,null,null,null)),(n()(),C._39(null,["\n    "])),(n()(),C._13(16777216,null,null,2,null,o)),C._17(802816,null,0,I.k,[C._1,C.Y,C.y],{ngForOf:[0,"ngForOf"]},null),C._35(131072,I.b,[C.i]),(n()(),C._39(null,["\n  "]))],function(n,s){var l=s.component;n(s,3,0,C._40(s,3,0,C._33(s,4).transform(l.books$)))},null)}function c(n){return C._41(0,[(n()(),C._19(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),C._39(null,["Books"])),(n()(),C._39(null,["\n"])),(n()(),C._19(0,null,null,29,"div",[["style","min-height: 8em"]],[[2,"vclLoadingLayerContainer",null]],null,null,x.b,x.a)),C._17(49152,null,0,B.a,[],{busy:[0,"busy"]},null),C._35(131072,I.b,[C.i]),(n()(),C._39(0,["\n  "])),(n()(),C._19(0,null,0,16,"div",[["class","vclInputGroup"]],null,null,null,null,null)),(n()(),C._39(null,["\n    "])),(n()(),C._19(0,null,null,6,"input",[["vcl-input",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"vclInput",null],[2,"vclDisabled",null],[1,"disabled",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(n,s,l){var a=!0,t=n.component;if("input"===s){a=!1!==C._33(n,10)._handleInput(l.target.value)&&a}if("blur"===s){a=!1!==C._33(n,10).onTouched()&&a}if("compositionstart"===s){a=!1!==C._33(n,10)._compositionStart()&&a}if("compositionend"===s){a=!1!==C._33(n,10)._compositionEnd(l.target.value)&&a}if("focus"===s){a=!1!==C._33(n,15).onFocus()&&a}if("ngModelChange"===s){a=!1!==(t.query=l)&&a}return a},null,null)),C._17(16384,null,0,$.c,[C.P,C.n,[2,$.a]],null,null),C._36(1024,null,$.j,function(n){return[n]},[$.c]),C._17(671744,null,0,$.n,[[8,null],[8,null],[8,null],[2,$.j]],{model:[0,"model"]},{update:"ngModelChange"}),C._36(2048,null,$.k,null,[$.n]),C._17(16384,null,0,$.l,[$.k],null,null),C._17(81920,null,0,A.a,[C.n],null,null),(n()(),C._39(null,["\n    "])),(n()(),C._19(0,null,null,5,"span",[["class","vclInputGroupButton"]],null,null,null,null,null)),(n()(),C._39(null,["\n      "])),(n()(),C._19(0,null,null,2,"button",[["appIcon","fa:search"],["class","vclSquare"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"tap"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(n,s,l){var a=!0,t=n.component;if("keypress"===s){a=!1!==C._33(n,20).onKeypress(l)&&a}if("mouseenter"===s){a=!1!==C._33(n,20).onMouseEnter(l)&&a}if("mouseleave"===s){a=!1!==C._33(n,20).onMouseLeave(l)&&a}if("tap"===s){a=!1!==C._33(n,20).onTap(l)&&a}if("click"===s){a=!1!==C._33(n,20).onClick(l)&&a}if("tap"===s){a=!1!==t.search()&&a}return a},T.b,T.a)),C._17(4898816,null,1,O.a,[C.n],{appIcon:[0,"appIcon"]},null),C._37(603979776,1,{buttonContent:1}),(n()(),C._39(null,["\n    "])),(n()(),C._39(null,["\n  "])),(n()(),C._39(0,["\n\n  "])),(n()(),C._13(16777216,null,0,2,null,e)),C._17(16384,null,0,I.l,[C._1,C.Y],{ngIf:[0,"ngIf"]},null),C._35(131072,I.b,[C.i]),(n()(),C._39(0,["\n  "])),(n()(),C._13(16777216,null,0,2,null,r)),C._17(16384,null,0,I.l,[C._1,C.Y],{ngIf:[0,"ngIf"]},null),C._35(131072,I.b,[C.i]),(n()(),C._39(0,["\n"])),(n()(),C._39(null,["\n"]))],function(n,s){var l=s.component;n(s,4,0,C._40(s,4,0,C._33(s,5).transform(l.loading$))),n(s,12,0,l.query),n(s,15,0);n(s,20,0,"fa:search"),n(s,26,0,C._40(s,26,0,C._33(s,27).transform(l.error$))),n(s,30,0,C._40(s,30,0,C._33(s,31).transform(l.books$)))},function(n,s){n(s,3,0,C._33(s,4).busy);n(s,9,0,C._33(s,14).ngClassUntouched,C._33(s,14).ngClassTouched,C._33(s,14).ngClassPristine,C._33(s,14).ngClassDirty,C._33(s,14).ngClassValid,C._33(s,14).ngClassInvalid,C._33(s,14).ngClassPending,!0,C._33(s,15).disabled,C._33(s,15).attrDisabled);n(s,19,0,!0,C._33(s,20).hovered,C._33(s,20).isDisabled,C._33(s,20).selected,C._33(s,20).title)})}function u(n){return C._41(0,[(n()(),C._19(0,null,null,1,"ng-component",[],null,null,null,c,q)),C._17(49152,null,0,w,[g,E.d],null,null)],null,null)}Object.defineProperty(s,"__esModule",{value:!0});var p={loading:!1,books:[],error:null},i=function(){function n(n){this.query=n}return n}(),h=function(){function n(n){this.books=n}return n}(),d=function(){function n(n){this.error=n}return n}(),f=l(1),j=(l.n(f),l(200)),_=l(205),b=this&&this.__decorate||function(n,s,l,a){var t,e=arguments.length,o=e<3?s:null===a?a=Object.getOwnPropertyDescriptor(s,l):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,s,l,a);else for(var r=n.length-1;r>=0;r--)(t=n[r])&&(o=(e<3?t(o):e>3?t(s,l,o):t(s,l))||o);return e>3&&o&&Object.defineProperty(s,l,o),o},y=this&&this.__metadata||function(n,s){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,s)},k="https://www.googleapis.com/books/v1/volumes",m=function(){function n(n,s){var l=this;this.actions$=n,this.http=s,this.search=this.actions$.ofType(i).switchMap(function(n){var s=n.query;return l.http.get(k+"?q="+(s||"")).map(function(n){return n.json()}).map(function(n){return n.items}).map(function(n){return new h(n)}).catch(function(n){return f.Observable.of(new d(n))})})}return n.ctorParameters=function(){return[{type:_.d},{type:j.d}]},b([Object(_.a)(),y("design:type",Object)],n.prototype,"search",void 0),n}(),g=function(){function n(n){this.store=n,this.search$=this.store.select(function(n){return n.books})}return n.prototype.search=function(n){this.store.dispatch(new i(n))},n.ctorParameters=function(){return[{type:_.c}]},n}(),v=l(205),w=function(){function n(n,s){this.books=n,this.store=s,this.loading$=this.books.search$.select(function(n){return n.loading}),this.books$=this.books.search$.select(function(n){return n.books}).map(function(n){return n.map(function(n){return n.volumeInfo.title})}),this.error$=this.books.search$.select(function(n){return n.error})}return n.prototype.search=function(){this.books.search(this.query)},n.ctorParameters=function(){return[{type:g},{type:v.c}]},n}(),S=function(){function n(){}return n}(),C=l(2),I=l(21),x=l(568),B=l(485),$=l(185),A=l(463),T=l(188),O=l(80),E=l(51),R=[],q=C._16({encapsulation:2,styles:R,data:{}}),P=C._14("ng-component",w,u,{},{},[]);l.d(s,"StoreDemoModuleNgFactory",function(){return tn});var L=l(2),M=l(456),D=l(21),F=l(185),Y=l(40),H=l(52),N=l(200),U=l(51),G=l(114),z=l(59),K=l(453),W=l(457),J=l(187),V=l(189),Q=l(190),X=l(467),Z=l(508),nn=l(68),sn=l(205),ln=l(27),an=l(451),tn=L._15(S,[],function(n){return L._30([L._31(512,L.k,L._11,[[8,[M.a,P]],[3,L.k],L.E]),L._31(4608,D.n,D.m,[L.A]),L._31(4608,F.t,F.t,[]),L._31(4608,Y.a,Y.a,[]),L._31(4608,m,m,[H.a,N.d]),L._31(4608,g,g,[U.d]),L._31(512,D.c,D.c,[]),L._31(512,F.q,F.q,[]),L._31(512,F.i,F.i,[]),L._31(512,G.a,G.a,[]),L._31(512,z.d,z.d,[]),L._31(512,K.a,K.a,[]),L._31(512,W.a,W.a,[]),L._31(512,J.a,J.a,[]),L._31(512,V.a,V.a,[]),L._31(512,Q.a,Q.a,[]),L._31(512,X.a,X.a,[]),L._31(512,Z.a,Z.a,[]),L._31(1024,U.b,function(){return[[{books:a}]]},[]),L._31(1024,nn.c,function(){return[[m]]},[]),L._31(131584,nn.b,nn.b,[U.d,[2,nn.c],L.w]),L._31(512,sn.e,sn.e,[[2,sn.b],U.d,U.b,nn.b]),L._31(512,ln.m,ln.m,[[2,ln.r],[2,ln.l]]),L._31(512,S,S,[]),L._31(1024,ln.j,function(){return[[{path:"",component:an.a,data:{demo:t}}]]},[])])})},450:function(n,s,l){"use strict";l.d(s,"b",function(){return a}),l.d(s,"a",function(){return t});var a=function(){function n(){}return n}(),t=function(){function n(){this.disabled=!1,this.tabClass=""}return n}()},451:function(n,s,l){"use strict";l.d(s,"a",function(){return e});var a=l(27),t=l(28),e=function(){function n(n,s){this.activatedRoute=n,this.sanitizer=s,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,s=this.activatedRoute.snapshot.data.demo();s?(this.title=s.label,s.tabs?this.tabs=Object.keys(s.tabs).map(function(l){var a,t;return"object"==typeof s.tabs[l]&&s.tabs[l]?(a=s.tabs[l].type,t="pre"===a||"html"===a||"md"===a?n.sanitizer.bypassSecurityTrustHtml(s.tabs[l].content):s.tabs[l].content):"function"==typeof s.tabs[l]&&(a="component",t=s.tabs[l]),{name:l,content:t,type:a}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n.ctorParameters=function(){return[{type:a.a},{type:t.c}]},n}()},452:function(n,s,l){"use strict";l.d(s,"a",function(){return o});var a=l(59),t=l(2),e=l(450),o=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new t.p}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){this.wormholeHost=new a.e(n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){var s,l,a=this.tabs.toArray();n instanceof e.a?(s=a.indexOf(n),l=n):"number"==typeof n&&a[n]?(s=n,l=a[s]):(s=-1,l=null),s>=0&&l instanceof e.a&&!l.disabled&&(this.wormholeHost.clearWormholes(),this.selectedTabIndex=s,this.selectedTabIndexChange$.emit(s),this.wormholeHost.connectWormhole(l.content))},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost.clearWormholes()},n}()},453:function(n,s,l){"use strict";l.d(s,"a",function(){return a});var a=function(){function n(){}return n}()},454:function(n,s,l){"use strict";function a(n){return o._41(0,[o._32(null,0),(n()(),o._13(0,null,null,0))],null,null)}function t(n){return o._41(0,[o._37(402653184,1,{content:0}),(n()(),o._13(0,[[1,2]],null,0,null,a))],null,null)}function e(n){return o._41(0,[(n()(),o._19(0,null,null,2,"vcl-tab",[],null,null,null,t,u)),o._17(49152,null,1,r.a,[],null,null),o._37(335544320,1,{label:0})],null,null)}l.d(s,"a",function(){return u}),s.b=t;var o=l(2),r=l(450),c=[],u=o._16({encapsulation:2,styles:c,data:{}});o._14("vcl-tab",r.a,e,{disabled:"disabled",tabClass:"tabClass"},{},["*"])},455:function(n,s,l){"use strict";function a(n){return o._41(0,[(n()(),o._19(0,null,null,7,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"tap"]],function(n,s,l){var a=!0,t=n.component;if("tap"===s){a=!1!==t.selectTab(n.context.$implicit)&&a}return a},null,null)),(n()(),o._39(null,["\n        "])),(n()(),o._19(0,null,null,4,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),o._39(null,[" \n          "])),(n()(),o._19(16777216,null,null,1,"wormhole",[],null,null,null,null,null)),o._17(671744,null,0,r.a,[o._1],{target:[0,"target"]},null),(n()(),o._39(null,["\n        "])),(n()(),o._39(null,["\n    "]))],function(n,s){n(s,5,0,s.context.$implicit.label)},function(n,s){var l=s.component;n(s,0,0,o._22(1,"vclTab ",s.context.$implicit.tabClass,""),s.context.$implicit.disabled,l.selectedTabIndex===s.context.index,l.selectedTabIndex===s.context.index)})}function t(n){return o._41(0,[o._37(402653184,1,{tabContent:0}),(n()(),o._19(0,null,null,20,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),o._39(null,["\n  "])),(n()(),o._19(0,null,null,4,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),o._39(null,["\n    "])),(n()(),o._13(16777216,null,null,1,null,a)),o._17(802816,null,0,c.k,[o._1,o.Y,o.y],{ngForOf:[0,"ngForOf"]},null),(n()(),o._39(null,["\n  "])),(n()(),o._39(null,["\n  "])),(n()(),o._19(0,null,null,11,"div",[],[[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),o._39(null,["\n    "])),(n()(),o._19(0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),o._39(null,["\n      "])),(n()(),o._19(16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),o._39(null,["\n    "])),(n()(),o._39(null,["\n    "])),(n()(),o._19(0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),o._39(null,["\n      "])),o._32(null,0),(n()(),o._39(null,["\n    "])),(n()(),o._39(null,["\n  "])),(n()(),o._39(null,["\n"])),(n()(),o._39(null,["\n"]))],function(n,s){n(s,6,0,s.component.tabs)},function(n,s){var l=s.component;n(s,1,0,o._22(1,"vclTabbable ",l.tabbableClass,""),"left"===l.layout,"right"===l.layout),n(s,3,0,o._22(1,"vclTabs ",l.tabsClass,""),!!l.borders),n(s,9,0,o._22(1,"vclTabContent ",l.tabContentClass,""),!l.borders)})}function e(n){return o._41(0,[(n()(),o._19(0,null,null,2,"vcl-tab-nav",[],null,null,null,t,i)),o._17(1228800,null,1,u.a,[],null,null),o._37(603979776,1,{tabs:1})],null,null)}l.d(s,"a",function(){return i}),s.b=t;var o=l(2),r=l(186),c=l(21),u=l(452),p=[],i=o._16({encapsulation:2,styles:p,data:{}});o._14("vcl-tab-nav",u.a,e,{layout:"layout",tabbableClass:"tabbableClass",tabsClass:"tabsClass",tabContentClass:"tabContentClass",borders:"borders",selectedTabIndex:"selectedTabIndex"},{selectedTabIndexChange:"selectedTabIndexChange"},["*"])},456:function(n,s,l){"use strict";function a(n){return d._41(0,[(n()(),d._39(null,["",""]))],null,function(n,s){n(s,0,0,s.parent.context.$implicit.name)})}function t(n){return d._41(0,[(n()(),d._19(16777216,null,null,1,"wormhole",[],null,null,null,null,null)),d._17(671744,null,0,f.a,[d._1],{target:[0,"target"]},null),(n()(),d._13(0,null,null,0))],function(n,s){n(s,1,0,s.parent.context.$implicit.content)},null)}function e(n){return d._41(0,[(n()(),d._19(0,null,null,2,"div",[],null,null,null,null,null)),(n()(),d._19(0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),d._39(null,["",""]))],null,function(n,s){n(s,2,0,s.parent.context.$implicit.content)})}function o(n){return d._41(0,[(n()(),d._19(0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,s){n(s,0,0,s.parent.context.$implicit.content)})}function r(n){return d._41(0,[(n()(),d._19(0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,s){n(s,0,0,s.parent.context.$implicit.content)})}function c(n){return d._41(0,[(n()(),d._19(0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,s){n(s,0,0,s.parent.context.$implicit.content)})}function u(n){return d._41(0,[(n()(),d._19(0,null,null,21,"vcl-tab",[],null,null,null,j.b,j.a)),d._17(49152,[[1,4]],1,_.a,[],null,null),d._37(335544320,2,{label:0}),(n()(),d._39(0,["\n      "])),(n()(),d._13(0,[[2,2]],0,1,null,a)),d._17(16384,null,0,_.b,[],null,null),(n()(),d._39(0,["\n      "])),(n()(),d._13(16777216,null,0,1,null,t)),d._17(16384,null,0,b.l,[d._1,d.Y],{ngIf:[0,"ngIf"]},null),(n()(),d._39(0,["\n      "])),(n()(),d._13(16777216,null,0,1,null,e)),d._17(16384,null,0,b.l,[d._1,d.Y],{ngIf:[0,"ngIf"]},null),(n()(),d._39(0,["\n      "])),(n()(),d._13(16777216,null,0,1,null,o)),d._17(16384,null,0,b.l,[d._1,d.Y],{ngIf:[0,"ngIf"]},null),(n()(),d._39(0,["\n      "])),(n()(),d._13(16777216,null,0,1,null,r)),d._17(16384,null,0,b.l,[d._1,d.Y],{ngIf:[0,"ngIf"]},null),(n()(),d._39(0,["\n      "])),(n()(),d._13(16777216,null,0,1,null,c)),d._17(16384,null,0,b.l,[d._1,d.Y],{ngIf:[0,"ngIf"]},null),(n()(),d._39(0,["\n    "]))],function(n,s){n(s,8,0,"component"===s.context.$implicit.type),n(s,11,0,"text"===s.context.$implicit.type),n(s,14,0,"html"===s.context.$implicit.type),n(s,17,0,"md"===s.context.$implicit.type),n(s,20,0,"pre"===s.context.$implicit.type)},null)}function p(n){return d._41(0,[(n()(),d._19(0,null,null,9,"div",[],null,null,null,null,null)),(n()(),d._39(null,["\n  "])),(n()(),d._19(0,null,null,6,"vcl-tab-nav",[["borders","true"]],null,null,null,y.b,y.a)),d._17(1228800,null,1,k.a,[],{borders:[0,"borders"]},null),d._37(603979776,1,{tabs:1}),(n()(),d._39(0,["\n    "])),(n()(),d._13(16777216,null,0,1,null,u)),d._17(802816,null,0,b.k,[d._1,d.Y,d.y],{ngForOf:[0,"ngForOf"]},null),(n()(),d._39(0,["\n  "])),(n()(),d._39(null,["\n"]))],function(n,s){var l=s.component;n(s,3,0,"true"),n(s,7,0,l.tabs)},null)}function i(n){return d._41(0,[(n()(),d._19(0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),d._39(null,[" ",""])),(n()(),d._39(null,["\n"])),(n()(),d._13(16777216,null,null,1,null,p)),d._17(16384,null,0,b.l,[d._1,d.Y],{ngIf:[0,"ngIf"]},null),(n()(),d._39(null,["\n"]))],function(n,s){n(s,4,0,s.component.tabs.length>0)},function(n,s){n(s,1,0,s.component.title)})}function h(n){return d._41(0,[(n()(),d._19(0,null,null,1,"ng-component",[],null,null,null,i,S)),d._17(114688,null,0,m.a,[g.a,v.c],null,null)],function(n,s){n(s,1,0)},null)}l.d(s,"a",function(){return C});var d=l(2),f=l(186),j=l(454),_=l(450),b=l(21),y=l(455),k=l(452),m=l(451),g=l(27),v=l(28),w=[],S=d._16({encapsulation:2,styles:w,data:{}}),C=d._14("ng-component",m.a,h,{},{},[])},457:function(n,s,l){"use strict";l.d(s,"a",function(){return a});var a=(l(451),function(){function n(){}return n}())},463:function(n,s,l){"use strict";l.d(s,"a",function(){return e});var a=l(2),t=["button","checkbox","color","file","hidden","image","radio","range","reset","submit"],e=function(){function n(n){this.elRef=n,this.type="text",this.selectOnFocus=!1,this.disabled=!1}return n.prototype.ngOnInit=function(){if(t.includes(this.type))throw new Error("type not allowed for vcl-input: "+this.type)},Object.defineProperty(n.prototype,"value",{get:function(){return this.elRef?this.elRef.nativeElement.value:""},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"attrDisabled",{get:function(){return!!this.disabled||null},enumerable:!0,configurable:!0}),n.prototype.clear=function(){this.elRef&&(this.elRef.nativeElement.value="")},n.prototype.focus=function(){this.elRef&&this.elRef.nativeElement.focus()},n.prototype.onFocus=function(){this.selectOnFocus&&this.elRef&&this.elRef.nativeElement.select()},n.ctorParameters=function(){return[{type:a.n}]},n}()},467:function(n,s,l){"use strict";l.d(s,"a",function(){return a});var a=(l(463),function(){function n(){}return n}())},482:function(n,s,l){"use strict";l.d(s,"a",function(){return a});var a=function(){function n(){this.type="circular"}return Object.defineProperty(n.prototype,"indicatorClass",{get:function(){return"straight"===this.type?"vclBusy-busyIndStraight":"vclBusy-busyIndCircular"},enumerable:!0,configurable:!0}),n}()},485:function(n,s,l){"use strict";l.d(s,"a",function(){return a});var a=function(){function n(){this.busy=!1}return n}()},508:function(n,s,l){"use strict";l.d(s,"a",function(){return a});var a=(l(482),l(485),function(){function n(){}return n}())},557:function(n,s,l){"use strict";function a(n){return e._41(2,[(n()(),e._19(0,null,null,9,"div",[["class","vclLayoutVertical vclLayoutCenterJustified"]],null,null,null,null,null)),(n()(),e._39(null,["\n  "])),(n()(),e._19(0,null,null,6,"div",[["class","vclBusyIndicator"],["role","status"]],null,null,null,null,null)),(n()(),e._39(null,["\n    "])),(n()(),e._19(0,null,null,1,"i",[],null,null,null,null,null)),e._17(278528,null,0,o.j,[e.y,e.z,e.n,e.O],{ngClass:[0,"ngClass"]},null),(n()(),e._39(null,["\n    "])),e._32(null,0),(n()(),e._39(null,["\n  "])),(n()(),e._39(null,["\n"])),(n()(),e._39(null,["\n"]))],function(n,s){n(s,5,0,s.component.indicatorClass)},null)}function t(n){return e._41(0,[(n()(),e._19(0,null,null,1,"vcl-busy-indicator",[],null,null,null,a,u)),e._17(49152,null,0,r.a,[],null,null)],null,null)}l.d(s,"a",function(){return u}),s.b=a;var e=l(2),o=l(21),r=l(482),c=[],u=e._16({encapsulation:2,styles:c,data:{}});e._14("vcl-busy-indicator",r.a,t,{type:"type"},{},["*"])},568:function(n,s,l){"use strict";function a(n){return r._41(0,[(n()(),r._19(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),r._39(null,["",""]))],null,function(n,s){n(s,1,0,s.component.busyLabel)})}function t(n){return r._41(0,[(n()(),r._19(0,null,null,11,"div",[["class","vclLoadingLayer"],["tabindex","-1"]],null,null,null,null,null)),(n()(),r._39(null,["\n  "])),(n()(),r._19(0,null,null,8,"div",[["class","vclLoadingLayerContent"]],null,null,null,null,null)),(n()(),r._39(null,["\n    "])),(n()(),r._19(0,null,null,5,"vcl-busy-indicator",[],null,null,null,c.b,c.a)),r._17(49152,null,0,u.a,[],{type:[0,"type"]},null),(n()(),r._39(0,["\n      "])),(n()(),r._13(16777216,null,0,1,null,a)),r._17(16384,null,0,p.l,[r._1,r.Y],{ngIf:[0,"ngIf"]},null),(n()(),r._39(0,["\n    "])),(n()(),r._39(null,["\n  "])),(n()(),r._39(null,["\n"]))],function(n,s){var l=s.component;n(s,5,0,l.busyIndicatorType),n(s,8,0,l.busyLabel)},null)}function e(n){return r._41(2,[r._32(null,0),(n()(),r._39(null,["\n"])),(n()(),r._13(16777216,null,null,1,null,t)),r._17(16384,null,0,p.l,[r._1,r.Y],{ngIf:[0,"ngIf"]},null),(n()(),r._39(null,["\n"]))],function(n,s){n(s,3,0,s.component.busy)},null)}function o(n){return r._41(0,[(n()(),r._19(0,null,null,1,"div",[["vclBusy",""]],[[2,"vclLoadingLayerContainer",null]],null,null,e,d)),r._17(49152,null,0,i.a,[],{busy:[0,"busy"]},null)],function(n,s){n(s,1,0,"")},function(n,s){n(s,0,0,r._33(s,1).busy)})}l.d(s,"a",function(){return d}),s.b=e;var r=l(2),c=l(557),u=l(482),p=l(21),i=l(485),h=[],d=r._16({encapsulation:2,styles:h,data:{}});r._14("[vclBusy]",i.a,o,{busy:"vclBusy",busyIndicatorType:"busyIndicatorType",busyLabel:"busyLabel"},{},["*"])},908:function(n,s){n.exports='<h1 id="store">Store</h1>\n<h2 id="installation">Installation</h2>\n<pre class="hljs">npm install @ng-vcl/store --save\n</pre>\n<h2 id="usage">Usage</h2>\n<pre class="hljs">\n<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@angular/core&apos;</span>;\n<span class="hljs-keyword">import</span> { StoreModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./app.component&apos;</span>;\n<span class="hljs-keyword">import</span> { REDUCERS } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./reducers&apos;</span>;\n<span class="hljs-keyword">import</span> { EFFECTS } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./effects&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [\n    StoreModule.forRoot({\n      <span class="hljs-attr">enableRouter</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// enables the StoreRouter </span>\n      reducers: [ ... ],  <span class="hljs-comment">// optional - Your reducers</span>\n      effects: [ ... ]    <span class="hljs-comment">// optional - Effect classes</span>\n    })\n  ],\n  <span class="hljs-attr">declarations</span>: [ AppComponent ],\n  <span class="hljs-attr">bootstrap</span>: [ AppComponent ]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppModule</span> </span>{ }\n</pre>\n<h3 id="reducers">Reducers</h3>\n<pre class="hljs">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> initialState: BooksState = {\n  <span class="hljs-attr">loading</span>: <span class="hljs-literal">false</span>,\n  <span class="hljs-attr">books</span>: [],\n  <span class="hljs-attr">error</span>: <span class="hljs-literal">null</span>\n};\n\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">SearchBooksAction</span> </span>{\n  <span class="hljs-keyword">constructor</span>(public query: string) {}\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">SearchBooksCompleteAction</span> </span>{\n  <span class="hljs-keyword">constructor</span>(public books: any[]) {}\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">SearchBooksErrorAction</span> </span>{\n  <span class="hljs-keyword">constructor</span>(public error: any) {}\n}\n\n<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bookReducer</span>(<span class="hljs-params">state = initialState, action: SearchBooksAction | SearchBooksCompleteAction | SearchBooksErrorAction</span>) </span>{\n  <span class="hljs-keyword">if</span> (action <span class="hljs-keyword">instanceof</span> SearchBooksAction) {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">loading</span>: <span class="hljs-literal">true</span>,\n      <span class="hljs-attr">books</span>: [],\n      <span class="hljs-attr">error</span>: <span class="hljs-literal">null</span>\n    };\n  } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (action <span class="hljs-keyword">instanceof</span> SearchBooksCompleteAction) {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">loading</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">books</span>: [...action.books],\n      <span class="hljs-attr">error</span>: <span class="hljs-literal">null</span>\n    };\n  } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (action <span class="hljs-keyword">instanceof</span> SearchBooksErrorAction) {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">loading</span>: <span class="hljs-literal">false</span>,\n      <span class="hljs-attr">books</span>: [],\n      <span class="hljs-attr">error</span>: action.error\n    };\n  }\n  <span class="hljs-keyword">return</span> state;\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> BOOK_REDUCERS = {\n  <span class="hljs-attr">books</span>: bookReducer\n}\n</pre>\n<h3 id="store">Store</h3>\n<pre class="hljs">@Injectable()\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">BooksService</span> </span>{\n\n  <span class="hljs-keyword">constructor</span>(\n    private store: Store,\n  ) { }\n\n  books$ = <span class="hljs-keyword">this</span>.store.select&lt;BooksState&gt;(<span class="hljs-function"><span class="hljs-params">state</span> =&gt;</span> state.books);\n\n  public search(query: string) {\n    <span class="hljs-keyword">this</span>.store.dispatch(<span class="hljs-keyword">new</span> SearchBooksAction(query));\n  }\n}\n</pre>\n<h3 id="effects">Effects</h3>\n<pre class="hljs">@Injectable()\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">BooksEffects</span> </span>{\n  <span class="hljs-keyword">constructor</span>(\n    private actions$: StoreActions,\n    private http: Http\n  ) { }\n\n  @Effect()\n  search = <span class="hljs-keyword">this</span>.actions$\n               .ofType(SearchBooksAction)\n               .switchMap( <span class="hljs-function">(<span class="hljs-params">{query}</span>) =&gt;</span> {\n                <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.http.get(<span class="hljs-string">`<span class="hljs-subst">${API}</span>?q=<span class="hljs-subst">${query || <span class="hljs-string">&apos;&apos;</span>}</span>`</span>)\n                            .map(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> res.json())\n                            .map(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> result.items)\n                            .map(<span class="hljs-function"><span class="hljs-params">items</span> =&gt;</span> {\n                              <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> SearchBooksCompleteAction(items);\n                            })\n                            .catch(<span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {\n                              <span class="hljs-keyword">return</span> Observable.of(<span class="hljs-keyword">new</span> SearchBooksErrorAction(err));\n                            });\n              });\n}\n</pre>\n'},909:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Books<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">vclBusy</span>]=<span class="hljs-string">\'loading$ | async\'</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"min-height: 8em"</span> &gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclInputGroup"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">vcl-input</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"query"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclInputGroupButton"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"search()"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"vclSquare"</span> <span class="hljs-attr">appIcon</span>=<span class="hljs-string">"fa:search"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"error$ | async"</span>&gt;</span>{{error$ | async}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"books$ | async"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let book of books$ | async "</span>&gt;</span>{{book}}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n'},910:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { Store } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ng-vcl/store\'</span>;\n\n<span class="hljs-keyword">import</span> { BooksService } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./books.service\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> StoreDemoComponent  {\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">private</span> books: BooksService, <span class="hljs-keyword">private</span> store: Store</span>) { }\n\n  loading$ = <span class="hljs-keyword">this</span>.books.search$.select(<span class="hljs-function"><span class="hljs-params">search</span> =&gt;</span> search.loading);\n  books$ = <span class="hljs-keyword">this</span>.books.search$.select(<span class="hljs-function"><span class="hljs-params">search</span> =&gt;</span> search.books).map(<span class="hljs-function"><span class="hljs-params">books</span> =&gt;</span> books.map(<span class="hljs-function"><span class="hljs-params">book</span> =&gt;</span> book.volumeInfo.title));\n  error$ = <span class="hljs-keyword">this</span>.books.search$.select(<span class="hljs-function"><span class="hljs-params">search</span> =&gt;</span> search.error);\n\n  query: <span class="hljs-built_in">string</span>;\n\n  search() {\n    <span class="hljs-keyword">this</span>.books.search(<span class="hljs-keyword">this</span>.query);\n  }\n}\n'},911:function(n,s){n.exports='<span class="hljs-keyword">export</span> <span class="hljs-keyword">interface</span> BooksState {\n  loading: <span class="hljs-built_in">boolean</span>;\n  books: <span class="hljs-built_in">any</span>[];\n  error: <span class="hljs-built_in">any</span>;\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> initialState: BooksState = {\n  loading: <span class="hljs-literal">false</span>,\n  books: [],\n  error: <span class="hljs-literal">null</span>\n};\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> SearchBooksAction {\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">public</span> query: <span class="hljs-built_in">string</span></span>) {}\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> SearchBooksCompleteAction {\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">public</span> books: <span class="hljs-built_in">any</span>[]</span>) {}\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> SearchBooksErrorAction {\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">public</span> error: <span class="hljs-built_in">any</span></span>) {}\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">reducer</span>(<span class="hljs-params">state = initialState, action: SearchBooksAction | SearchBooksCompleteAction | SearchBooksErrorAction</span>) </span>{\n  <span class="hljs-keyword">if</span> (action <span class="hljs-keyword">instanceof</span> SearchBooksAction) {\n    <span class="hljs-keyword">return</span> {\n      loading: <span class="hljs-literal">true</span>,\n      books: [...state.books],\n      error: <span class="hljs-literal">null</span>\n    };\n  } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (action <span class="hljs-keyword">instanceof</span> SearchBooksCompleteAction) {\n    <span class="hljs-keyword">return</span> {\n      loading: <span class="hljs-literal">false</span>,\n      books: [...action.books],\n      error: <span class="hljs-literal">null</span>\n    };\n  } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (action <span class="hljs-keyword">instanceof</span> SearchBooksErrorAction) {\n    <span class="hljs-keyword">return</span> {\n      loading: <span class="hljs-literal">false</span>,\n      books: [],\n      error: action.error\n    };\n  }\n  <span class="hljs-keyword">return</span> state;\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> BOOKS_REDUCERS = {\n  books: reducer\n};\n'},912:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Observable } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/Observable\'</span>;\n<span class="hljs-keyword">import</span> { Injectable } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { Http } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/http\'</span>;\n<span class="hljs-keyword">import</span> { Store, StoreActions, Effect } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ng-vcl/store\'</span>;\n\n<span class="hljs-keyword">import</span> { BooksState, SearchBooksAction, SearchBooksCompleteAction, SearchBooksErrorAction } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./books.reducers\'</span>;\n\n<span class="hljs-keyword">const</span> API = <span class="hljs-string">\'https://www.googleapis.com/books/v1/volumes\'</span>;\n\n<span class="hljs-meta">@Injectable</span>()\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> BooksEffects {\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params">\n    <span class="hljs-keyword">private</span> actions$: StoreActions,\n    <span class="hljs-keyword">private</span> http: Http\n  </span>) { }\n\n  <span class="hljs-meta">@Effect</span>()\n  search = <span class="hljs-keyword">this</span>.actions$\n               .ofType(SearchBooksAction)\n               .switchMap( <span class="hljs-function">(<span class="hljs-params">{query}</span>) =&gt;</span> {\n                <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.http.get(<span class="hljs-string">`<span class="hljs-subst">${API}</span>?q=<span class="hljs-subst">${query || \'\'}</span>`</span>)\n                            .map(<span class="hljs-function"><span class="hljs-params">res</span> =&gt;</span> res.json())\n                            .map(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> result.items)\n                            .map(<span class="hljs-function"><span class="hljs-params">items</span> =&gt;</span> {\n                              <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> SearchBooksCompleteAction(items);\n                            })\n                            .catch(<span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {\n                              <span class="hljs-keyword">return</span> Observable.of(<span class="hljs-keyword">new</span> SearchBooksErrorAction(err));\n                            });\n              });\n}\n\n<span class="hljs-meta">@Injectable</span>()\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> BooksService {\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params">\n    <span class="hljs-keyword">private</span> store: Store,\n  </span>) { }\n\n  search$ = <span class="hljs-keyword">this</span>.store.select&lt;BooksState&gt;(<span class="hljs-function"><span class="hljs-params">state</span> =&gt;</span> state.books);\n\n  <span class="hljs-keyword">public</span> search(query: <span class="hljs-built_in">string</span>) {\n    <span class="hljs-keyword">this</span>.store.dispatch(<span class="hljs-keyword">new</span> SearchBooksAction(query));\n  }\n}\n\n'}});