webpackJsonp([15],{414:function(n,l,t){"use strict";function e(){return{name:"Flip-Switch",tabs:{Demo:s,"README.md":{type:"md",content:t(594)},"demo.component.html":{type:"pre",content:t(595)},"demo.component.ts":{type:"pre",content:t(596)}}}}function u(n){return o._41(0,[(n()(),o._19(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o._39(null,["2-way-binding"])),(n()(),o._39(null,["\n"])),(n()(),o._19(0,null,null,2,"vcl-flip-switch",[["offLabel","Off"],["onLabel","On"]],[[2,"vclFlipSwitch",null],[2,"vclFlipSwitchPressed",null],[1,"role",0],[1,"aria-pressed",0],[1,"touch-action",0],[8,"tabIndex",0]],[[null,"valueChange"],[null,"tap"],[null,"keydown"]],function(n,l,t){var e=!0,u=n.component;if("tap"===l){e=!1!==o._33(n,5).onTap(t)&&e}if("keydown"===l){e=!1!==o._33(n,5).keydown(t)&&e}if("valueChange"===l){e=!1!==(u.value=t)&&e}return e},c.b,c.a)),o._36(5120,null,r.j,function(n){return[n]},[p.a]),o._17(49152,null,0,p.a,[o.i],{onLabel:[0,"onLabel"],offLabel:[1,"offLabel"],value:[2,"value"]},{valueChange:"valueChange"}),(n()(),o._19(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o._39(null,["\nCurrent value: ","\n\n"])),(n()(),o._19(0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o._39(null,['Preset "on"'])),(n()(),o._39(null,["\n"])),(n()(),o._19(0,null,null,2,"vcl-flip-switch",[["offLabel","Off"],["onLabel","On"],["value","true"]],[[2,"vclFlipSwitch",null],[2,"vclFlipSwitchPressed",null],[1,"role",0],[1,"aria-pressed",0],[1,"touch-action",0],[8,"tabIndex",0]],[[null,"change"],[null,"tap"],[null,"keydown"]],function(n,l,t){var e=!0,u=n.component;if("tap"===l){e=!1!==o._33(n,13).onTap(t)&&e}if("keydown"===l){e=!1!==o._33(n,13).keydown(t)&&e}if("change"===l){e=!1!==u.onChange(t)&&e}return e},c.b,c.a)),o._36(5120,null,r.j,function(n){return[n]},[p.a]),o._17(49152,null,0,p.a,[o.i],{onLabel:[0,"onLabel"],offLabel:[1,"offLabel"],value:[2,"value"]},null),(n()(),o._39(null,["\n"]))],function(n,l){n(l,5,0,"On","Off",l.component.value);n(l,13,0,"On","Off","true")},function(n,l){var t=l.component;n(l,3,0,!0,o._33(l,5).value,"button",o._33(l,5).value,"pan-y",o._33(l,5).tabindex),n(l,7,0,t.value);n(l,11,0,!0,o._33(l,13).value,"button",o._33(l,13).value,"pan-y",o._33(l,13).tabindex)})}function a(n){return o._41(0,[(n()(),o._19(0,null,null,1,"ng-component",[],null,null,null,u,h)),o._17(49152,null,0,s,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var s=function(){function n(){this.value=!1}return n.prototype.onChange=function(n){console.log("changed:"),console.dir(n)},n}(),i=function(){function n(){}return n}(),o=t(2),c=t(544),r=t(185),p=t(538),f=[],h=o._16({encapsulation:2,styles:f,data:{}}),d=o._14("ng-component",s,a,{},{},[]);t.d(l,"FlipSwitchDemoModuleNgFactory",function(){return T});var b=t(2),_=t(455),v=t(21),m=t(185),g=t(114),y=t(59),j=t(452),C=t(456),w=t(458),k=t(489),x=t(27),I=t(450),T=b._15(i,[],function(n){return b._30([b._31(512,b.k,b._11,[[8,[_.a,d]],[3,b.k],b.E]),b._31(4608,v.n,v.m,[b.A]),b._31(4608,m.t,m.t,[]),b._31(512,v.c,v.c,[]),b._31(512,m.q,m.q,[]),b._31(512,m.i,m.i,[]),b._31(512,g.a,g.a,[]),b._31(512,y.d,y.d,[]),b._31(512,j.a,j.a,[]),b._31(512,C.a,C.a,[]),b._31(512,w.b,w.b,[]),b._31(512,k.a,k.a,[]),b._31(512,x.m,x.m,[[2,x.r],[2,x.l]]),b._31(512,i,i,[]),b._31(1024,x.j,function(){return[[{path:"",component:I.a,data:{demo:e}}]]},[])])})},449:function(n,l,t){"use strict";t.d(l,"b",function(){return e}),t.d(l,"a",function(){return u});var e=function(){function n(){}return n}(),u=function(){function n(){this.disabled=!1,this.tabClass=""}return n}()},450:function(n,l,t){"use strict";t.d(l,"a",function(){return a});var e=t(27),u=t(28),a=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(t){var e,u;return"object"==typeof l.tabs[t]&&l.tabs[t]?(e=l.tabs[t].type,u="pre"===e||"html"===e||"md"===e?n.sanitizer.bypassSecurityTrustHtml(l.tabs[t].content):l.tabs[t].content):"function"==typeof l.tabs[t]&&(e="component",u=l.tabs[t]),{name:t,content:u,type:e}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n.ctorParameters=function(){return[{type:e.a},{type:u.c}]},n}()},451:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var e=t(59),u=t(2),a=t(449),s=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new u.p}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){this.wormholeHost=new e.e(n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){var l,t,e=this.tabs.toArray();n instanceof a.a?(l=e.indexOf(n),t=n):"number"==typeof n&&e[n]?(l=n,t=e[l]):(l=-1,t=null),l>=0&&t instanceof a.a&&!t.disabled&&(this.wormholeHost.clearWormholes(),this.selectedTabIndex=l,this.selectedTabIndexChange$.emit(l),this.wormholeHost.connectWormhole(t.content))},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost.clearWormholes()},n}()},452:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){}return n}()},453:function(n,l,t){"use strict";function e(n){return s._41(0,[s._32(null,0),(n()(),s._13(0,null,null,0))],null,null)}function u(n){return s._41(0,[s._37(402653184,1,{content:0}),(n()(),s._13(0,[[1,2]],null,0,null,e))],null,null)}function a(n){return s._41(0,[(n()(),s._19(0,null,null,2,"vcl-tab",[],null,null,null,u,c)),s._17(49152,null,1,i.a,[],null,null),s._37(335544320,1,{label:0})],null,null)}t.d(l,"a",function(){return c}),l.b=u;var s=t(2),i=t(449),o=[],c=s._16({encapsulation:2,styles:o,data:{}});s._14("vcl-tab",i.a,a,{disabled:"disabled",tabClass:"tabClass"},{},["*"])},454:function(n,l,t){"use strict";function e(n){return s._41(0,[(n()(),s._19(0,null,null,7,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"tap"]],function(n,l,t){var e=!0,u=n.component;if("tap"===l){e=!1!==u.selectTab(n.context.$implicit)&&e}return e},null,null)),(n()(),s._39(null,["\n        "])),(n()(),s._19(0,null,null,4,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),s._39(null,[" \n          "])),(n()(),s._19(16777216,null,null,1,"wormhole",[],null,null,null,null,null)),s._17(671744,null,0,i.a,[s._1],{target:[0,"target"]},null),(n()(),s._39(null,["\n        "])),(n()(),s._39(null,["\n    "]))],function(n,l){n(l,5,0,l.context.$implicit.label)},function(n,l){var t=l.component;n(l,0,0,s._22(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,t.selectedTabIndex===l.context.index,t.selectedTabIndex===l.context.index)})}function u(n){return s._41(0,[s._37(402653184,1,{tabContent:0}),(n()(),s._19(0,null,null,20,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),s._39(null,["\n  "])),(n()(),s._19(0,null,null,4,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),s._39(null,["\n    "])),(n()(),s._13(16777216,null,null,1,null,e)),s._17(802816,null,0,o.k,[s._1,s.Y,s.y],{ngForOf:[0,"ngForOf"]},null),(n()(),s._39(null,["\n  "])),(n()(),s._39(null,["\n  "])),(n()(),s._19(0,null,null,11,"div",[],[[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),s._39(null,["\n    "])),(n()(),s._19(0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),s._39(null,["\n      "])),(n()(),s._19(16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),s._39(null,["\n    "])),(n()(),s._39(null,["\n    "])),(n()(),s._19(0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),s._39(null,["\n      "])),s._32(null,0),(n()(),s._39(null,["\n    "])),(n()(),s._39(null,["\n  "])),(n()(),s._39(null,["\n"])),(n()(),s._39(null,["\n"]))],function(n,l){n(l,6,0,l.component.tabs)},function(n,l){var t=l.component;n(l,1,0,s._22(1,"vclTabbable ",t.tabbableClass,""),"left"===t.layout,"right"===t.layout),n(l,3,0,s._22(1,"vclTabs ",t.tabsClass,""),!!t.borders),n(l,9,0,s._22(1,"vclTabContent ",t.tabContentClass,""),!t.borders)})}function a(n){return s._41(0,[(n()(),s._19(0,null,null,2,"vcl-tab-nav",[],null,null,null,u,p)),s._17(1228800,null,1,c.a,[],null,null),s._37(603979776,1,{tabs:1})],null,null)}t.d(l,"a",function(){return p}),l.b=u;var s=t(2),i=t(186),o=t(21),c=t(451),r=[],p=s._16({encapsulation:2,styles:r,data:{}});s._14("vcl-tab-nav",c.a,a,{layout:"layout",tabbableClass:"tabbableClass",tabsClass:"tabsClass",tabContentClass:"tabContentClass",borders:"borders",selectedTabIndex:"selectedTabIndex"},{selectedTabIndexChange:"selectedTabIndexChange"},["*"])},455:function(n,l,t){"use strict";function e(n){return h._41(0,[(n()(),h._39(null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function u(n){return h._41(0,[(n()(),h._19(16777216,null,null,1,"wormhole",[],null,null,null,null,null)),h._17(671744,null,0,d.a,[h._1],{target:[0,"target"]},null),(n()(),h._13(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function a(n){return h._41(0,[(n()(),h._19(0,null,null,2,"div",[],null,null,null,null,null)),(n()(),h._19(0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),h._39(null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function s(n){return h._41(0,[(n()(),h._19(0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function i(n){return h._41(0,[(n()(),h._19(0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function o(n){return h._41(0,[(n()(),h._19(0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function c(n){return h._41(0,[(n()(),h._19(0,null,null,21,"vcl-tab",[],null,null,null,b.b,b.a)),h._17(49152,[[1,4]],1,_.a,[],null,null),h._37(335544320,2,{label:0}),(n()(),h._39(0,["\n      "])),(n()(),h._13(0,[[2,2]],0,1,null,e)),h._17(16384,null,0,_.b,[],null,null),(n()(),h._39(0,["\n      "])),(n()(),h._13(16777216,null,0,1,null,u)),h._17(16384,null,0,v.l,[h._1,h.Y],{ngIf:[0,"ngIf"]},null),(n()(),h._39(0,["\n      "])),(n()(),h._13(16777216,null,0,1,null,a)),h._17(16384,null,0,v.l,[h._1,h.Y],{ngIf:[0,"ngIf"]},null),(n()(),h._39(0,["\n      "])),(n()(),h._13(16777216,null,0,1,null,s)),h._17(16384,null,0,v.l,[h._1,h.Y],{ngIf:[0,"ngIf"]},null),(n()(),h._39(0,["\n      "])),(n()(),h._13(16777216,null,0,1,null,i)),h._17(16384,null,0,v.l,[h._1,h.Y],{ngIf:[0,"ngIf"]},null),(n()(),h._39(0,["\n      "])),(n()(),h._13(16777216,null,0,1,null,o)),h._17(16384,null,0,v.l,[h._1,h.Y],{ngIf:[0,"ngIf"]},null),(n()(),h._39(0,["\n    "]))],function(n,l){n(l,8,0,"component"===l.context.$implicit.type),n(l,11,0,"text"===l.context.$implicit.type),n(l,14,0,"html"===l.context.$implicit.type),n(l,17,0,"md"===l.context.$implicit.type),n(l,20,0,"pre"===l.context.$implicit.type)},null)}function r(n){return h._41(0,[(n()(),h._19(0,null,null,9,"div",[],null,null,null,null,null)),(n()(),h._39(null,["\n  "])),(n()(),h._19(0,null,null,6,"vcl-tab-nav",[["borders","true"]],null,null,null,m.b,m.a)),h._17(1228800,null,1,g.a,[],{borders:[0,"borders"]},null),h._37(603979776,1,{tabs:1}),(n()(),h._39(0,["\n    "])),(n()(),h._13(16777216,null,0,1,null,c)),h._17(802816,null,0,v.k,[h._1,h.Y,h.y],{ngForOf:[0,"ngForOf"]},null),(n()(),h._39(0,["\n  "])),(n()(),h._39(null,["\n"]))],function(n,l){var t=l.component;n(l,3,0,"true"),n(l,7,0,t.tabs)},null)}function p(n){return h._41(0,[(n()(),h._19(0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),h._39(null,[" ",""])),(n()(),h._39(null,["\n"])),(n()(),h._13(16777216,null,null,1,null,r)),h._17(16384,null,0,v.l,[h._1,h.Y],{ngIf:[0,"ngIf"]},null),(n()(),h._39(null,["\n"]))],function(n,l){n(l,4,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}function f(n){return h._41(0,[(n()(),h._19(0,null,null,1,"ng-component",[],null,null,null,p,k)),h._17(114688,null,0,y.a,[j.a,C.c],null,null)],function(n,l){n(l,1,0)},null)}t.d(l,"a",function(){return x});var h=t(2),d=t(186),b=t(453),_=t(449),v=t(21),m=t(454),g=t(451),y=t(450),j=t(27),C=t(28),w=[],k=h._16({encapsulation:2,styles:w,data:{}}),x=h._14("ng-component",y.a,f,{},{},[])},456:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=(t(450),function(){function n(){}return n}())},457:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){this.disabled=!1,this.marked=!1,this.selected=!1}return n}()},458:function(n,l,t){"use strict";t.d(l,"b",function(){return u});var e=(t(457),t(460));t.d(l,"a",function(){return e.b});var u=function(){function n(){}return n}()},460:function(n,l,t){"use strict";t.d(l,"b",function(){return e}),t.d(l,"a",function(){return i});var e,u=t(2),a=t(185),s=t(457);!function(n){n[n.Multiple=0]="Multiple",n[n.Single=1]="Single"}(e||(e={}));var i=(a.j,Object(u._6)(function(){return i}),function(){function n(n){this.cdRef=n,this.selectionMode=e.Single,this.maxSelectableItems=1/0,this.change=new u.p,this.onChange=function(){},this.onTouched=function(){}}return Object.defineProperty(n.prototype,"mode",{get:function(){return this.selectionMode===e.Multiple?"multiple":"single"},set:function(n){this.selectionMode="multiple"===n?e.Multiple:e.Single},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedItem",{get:function(){return this.selectedItems[0]||void 0},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedItems",{get:function(){return(this.items||[]).filter(function(n){return n.selected})},enumerable:!0,configurable:!0}),n.prototype.syncItems=function(){var n=this.value;this.selectionMode===e.Multiple&&Array.isArray(n)?(this.items||[]).forEach(function(l){l.selected=n.includes(l.value)}):(this.items||[]).forEach(function(l){l.selected=l.value===n}),this.cdRef.markForCheck()},n.prototype.syncValue=function(){var n=this.selectedItems.map(function(n){return n.value});this.value=this.selectionMode===e.Single?n[0]:n},n.prototype.triggerChange=function(){this.change.emit(this.value),this.onChange(this.value)},n.prototype.ngAfterContentInit=function(){var n=this;this.items.changes.subscribe(function(){Promise.resolve(null).then(function(){n.syncItems()})})},n.prototype.select=function(n){if("number"==typeof n&&(n=this.items.toArray()[n]),n instanceof s.a){if(n.disabled)return;if(this.selectionMode===e.Multiple){var l=(this.items||[]).filter(function(n){return n.selected});this.selectionMode===e.Multiple&&!n.selected&&l.length>=this.maxSelectableItems||(n.selected=!n.selected)}else this.items.forEach(function(l){return l.selected=l===n});this.syncValue(),this.triggerChange(),this.cdRef.markForCheck()}},n.prototype.deselect=function(n){"number"==typeof n&&(n=this.items.toArray()[n]),n instanceof s.a&&(n.selected=!1,this.syncValue(),this.triggerChange(),this.cdRef.markForCheck())},n.prototype.determineMarkedIndex=function(){var n=this.items.toArray().findIndex(function(n){return n.marked});return n>=0?n:this.items.toArray().findIndex(function(n){return n.selected})},n.prototype.markNext=function(){var n=this.items.toArray(),l=this.determineMarkedIndex()+1;l>=n.length&&(l=n.length-1),n.every(function(n,t){var e=t>=l;return n.marked=!n.disabled&&e,!n.marked}),this.cdRef.markForCheck()},n.prototype.markPrev=function(){var n=this.items.toArray().reverse(),l=this.determineMarkedIndex()-1;l<=0&&n.length>0&&(l=0),l=n.length-1-l,n.every(function(n,t){var e=t>=l;return n.marked=!n.disabled&&e,!n.marked}),this.cdRef.markForCheck()},n.prototype.selectMarked=function(){var n=this.items.toArray().find(function(n){return!0===n.marked&&!n.disabled});n&&(this.select(n),this.cdRef.markForCheck())},n.prototype.setValue=function(n){this.value=n,this.syncItems()},n.prototype.writeValue=function(n){this.setValue(n)},n.prototype.registerOnChange=function(n){this.onChange=n},n.prototype.registerOnTouched=function(n){this.onTouched=n},n.ctorParameters=function(){return[{type:u.i}]},n}())},489:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){}return n}()},538:function(n,l,t){"use strict";t.d(l,"a",function(){return a});var e=t(2),u=t(185),a=(u.j,Object(e._6)(function(){return a}),function(){function n(n){this.cdRef=n,this.tabindex=0,this.onLabel="On",this.offLabel="Off",this.value=!1,this.valueChange=new e.p}return n.prototype.onTap=function(){this.toggle()},n.prototype.keydown=function(n){switch(n.code){case"Space":n.preventDefault(),this.toggle();break;case"ArrowLeft":n.preventDefault(),this.value||this.toggle();break;case"ArrowRight":n.preventDefault(),this.value&&this.toggle()}},n.prototype.toggle=function(){this.value=!this.value,this.valueChange.emit(this.value),this.onChangeCallback&&this.onChangeCallback(this.value)},n.prototype.writeValue=function(n){this.value=n,this.cdRef.markForCheck()},n.prototype.registerOnChange=function(n){this.onChangeCallback=n},n.prototype.registerOnTouched=function(n){this.onTouchedCallback=n},n.ctorParameters=function(){return[{type:e.i}]},n}())},544:function(n,l,t){"use strict";function e(n){return a._41(2,[(n()(),a._19(0,null,null,12,"label",[["class","vclFlipSwitchLabel"]],null,null,null,null,null)),(n()(),a._39(null,["\n  "])),(n()(),a._19(0,null,null,7,"div",[["class","vclFlipSwitchTrack"]],null,null,null,null,null)),(n()(),a._39(null,["\n    "])),(n()(),a._19(0,null,null,1,"div",[["class","vclFlipSwitchActive"]],[[1,"aria-hidden",0]],null,null,null,null)),(n()(),a._39(null,["",""])),(n()(),a._39(null,["\n    "])),(n()(),a._19(0,null,null,1,"div",[["class","vclFlipSwitchInactive"]],[[1,"aria-hidden",0]],null,null,null,null)),(n()(),a._39(null,["",""])),(n()(),a._39(null,["\n  "])),(n()(),a._39(null,["\n  "])),(n()(),a._19(0,null,null,0,"div",[["class","vclFlipSwitchKnob"]],null,null,null,null,null)),(n()(),a._39(null,["\n"])),(n()(),a._39(null,["\n"]))],null,function(n,l){var t=l.component;n(l,4,0,!t.value),n(l,5,0,t.onLabel),n(l,7,0,t.value),n(l,8,0,t.offLabel)})}function u(n){return a._41(0,[(n()(),a._19(0,null,null,2,"vcl-flip-switch",[],[[2,"vclFlipSwitch",null],[2,"vclFlipSwitchPressed",null],[1,"role",0],[1,"aria-pressed",0],[1,"touch-action",0],[8,"tabIndex",0]],[[null,"tap"],[null,"keydown"]],function(n,l,t){var e=!0;if("tap"===l){e=!1!==a._33(n,2).onTap(t)&&e}if("keydown"===l){e=!1!==a._33(n,2).keydown(t)&&e}return e},e,c)),a._36(5120,null,i.j,function(n){return[n]},[s.a]),a._17(49152,null,0,s.a,[a.i],null,null)],null,function(n,l){n(l,0,0,!0,a._33(l,2).value,"button",a._33(l,2).value,"pan-y",a._33(l,2).tabindex)})}t.d(l,"a",function(){return c}),l.b=e;var a=t(2),s=t(538),i=t(185),o=[],c=a._16({encapsulation:2,styles:o,data:{}});a._14("vcl-flip-switch",s.a,u,{onLabel:"onLabel",offLabel:"offLabel",value:"value"},{valueChange:"valueChange"},[])},594:function(n,l){n.exports='<h1 id="vcl-flip-switch">vcl-flip-switch</h1>\n<h2 id="usage-">Usage:</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-flip-switch</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">onLabel</span>=<span class="hljs-string">&quot;On&quot;</span> <span class="hljs-attr">offLabel</span>=<span class="hljs-string">&quot;Off&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-flip-switch</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="properties-">Properties:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>value</code> <em>(1)</em></td>\n<td>boolean</td>\n<td>false</td>\n<td>set the value</td>\n</tr>\n<tr>\n<td><code>onLabel</code></td>\n<td>string</td>\n<td>&apos;On&apos;</td>\n<td>The label for &quot;on&quot;</td>\n</tr>\n<tr>\n<td><code>offLabel</code></td>\n<td>string</td>\n<td>&apos;Off&apos;</td>\n<td>The label for &quot;off&quot;</td>\n</tr>\n</tbody>\n</table>\n<p><em>(1) Supports Two-way binding</em></p>\n'},595:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>2-way-binding<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-flip-switch</span> <span class="hljs-attr">onLabel</span>=<span class="hljs-string">"On"</span> <span class="hljs-attr">offLabel</span>=<span class="hljs-string">"Off"</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">"value"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-flip-switch</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\nCurrent value: {{value}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Preset "on"<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-flip-switch</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">onLabel</span>=<span class="hljs-string">"On"</span> <span class="hljs-attr">offLabel</span>=<span class="hljs-string">"Off"</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">"onChange($event)"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-flip-switch</span>&gt;</span>\n'},596:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> FlipSwitchDemoComponent {\n\n  selectedItem: <span class="hljs-built_in">any</span>;\n\n  value: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">false</span>;\n\n  onChange(ev) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'changed:\'</span>);\n    <span class="hljs-built_in">console</span>.dir(ev);\n  }\n}\n'}});