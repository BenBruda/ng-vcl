webpackJsonp([20],{421:function(n,l,t){"use strict";function e(){return{label:"Month Picker",tabs:{Demo:d,"demo.component.html":{type:"pre",content:t(612)},"demo.component.ts":{type:"pre",content:t(613)}}}}function a(n){return h._41(0,[(n()(),h._19(0,null,null,3,"button",[["class","vclButton vclTransparent vclSquare"],["type","button"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"click"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"tap"]],function(n,l,t){var e=!0,a=n.component;if("keypress"===l){e=!1!==h._33(n,1).onKeypress(t)&&e}if("mouseenter"===l){e=!1!==h._33(n,1).onMouseEnter(t)&&e}if("mouseleave"===l){e=!1!==h._33(n,1).onMouseLeave(t)&&e}if("tap"===l){e=!1!==h._33(n,1).onTap(t)&&e}if("click"===l){e=!1!==h._33(n,1).onClick(t)&&e}if("click"===l){e=!1!==a.onCloseBtnTap()&&e}return e},_.b,_.a)),h._17(4898816,null,1,f.a,[h.n],{appIcon:[0,"appIcon"]},null),h._37(603979776,3,{buttonContent:1}),(n()(),h._39(0,["\n        "]))],function(n,l){n(l,1,0,l.component.closeBtnIcon)},function(n,l){n(l,0,0,!0,h._33(l,1).hovered,h._33(l,1).isDisabled,h._33(l,1).selected,h._33(l,1).title)})}function s(n){return h._41(0,[(n()(),h._19(0,null,null,4,"div",[["class","vclDGCell vclCalItem"],["role","gridcell"],["tabindex","0"]],[[2,"vclAvailable",null],[2,"vclUnavailable",null],[2,"vclToday",null],[2,"vclOtherMonth",null],[2,"vclDisabled",null],[2,"vclSelected",null],[4,"background-color",null],[4,"order",null],[1,"aria-selected",0]],[[null,"click"]],function(n,l,t){var e=!0,a=n.component;if("click"===l){e=!1!==a.selectMonth(a.currentYear,n.parent.parent.context.index+n.context.index)&&e}return e},null,null)),(n()(),h._39(null,["\n            "])),(n()(),h._19(0,null,null,1,"div",[["class","vclLayoutHorizontal vclLayoutCenterJustified vclMonthPickerListItemLabel"]],null,null,null,null,null)),(n()(),h._39(null,["\n              ","\n            "])),(n()(),h._39(null,["\n        "]))],null,function(n,l){var t=l.component;n(l,0,0,!t.useAvailableMonths||t.currentMeta[l.parent.parent.context.index+l.context.index].available,t.useAvailableMonths&&!t.currentMeta[l.parent.parent.context.index+l.context.index].available,t.isCurrentMonth(l.parent.parent.context.index+l.context.index),!t.isCurrentMonth(l.parent.parent.context.index+l.context.index),t.useAvailableMonths&&!t.currentMeta[l.parent.parent.context.index+l.context.index].available,t.currentMeta[l.parent.parent.context.index+l.context.index].selected||t.currentMeta[l.parent.parent.context.index+l.context.index].preselected,t.currentMeta[l.parent.parent.context.index+l.context.index].color,l.parent.parent.context.index+l.context.index,t.currentMeta[l.parent.parent.context.index+l.context.index].selected||t.currentMeta[l.parent.parent.context.index+l.context.index].preselected),n(l,3,0,t.months[l.parent.parent.context.index+l.context.index])})}function r(n){return h._41(0,[(n()(),h._19(0,null,null,4,"div",[["class","vclLayoutFlex vclDGRow vclLayoutAuto"],["role","row"]],null,null,null,null,null)),(n()(),h._39(null,["\n        "])),(n()(),h._13(16777216,null,null,1,null,s)),h._17(802816,null,0,g.k,[h._1,h.Y,h.y],{ngForOf:[0,"ngForOf"]},null),(n()(),h._39(null,["\n      "]))],function(n,l){var t=l.component;n(l,3,0,t.months.slice(l.parent.context.index,l.parent.context.index+t.monthsPerRow>t.months.length?t.months.length:l.parent.context.index+t.monthsPerRow))},null)}function o(n){return h._41(0,[(n()(),h._39(null,["\n      "])),(n()(),h._13(16777216,null,null,1,null,r)),h._17(16384,null,0,g.l,[h._1,h.Y],{ngIf:[0,"ngIf"]},null),(n()(),h._39(null,["\n    "]))],function(n,l){var t=l.component;n(l,2,0,l.context.index%t.monthsPerRow==0)},null)}function u(n){return h._41(2,[(n()(),h._19(0,null,null,31,"div",[["class","vclDatePicker"]],[[2,"vclLayoutHidden",null]],null,null,null,null)),(n()(),h._39(null,["\n  "])),(n()(),h._19(0,null,null,28,"div",[["class","vclDataGrid vclDGVAlignMiddle vclDGAlignCentered vclCalendar vclCalInput"]],[[1,"role",0],[1,"tabindex",0],[1,"aria-multiselectable",0],[1,"aria-expanded",0]],null,null,null,null)),(n()(),h._39(null,["\n\n    "])),(n()(),h._19(0,null,null,20,"div",[["class","vclLayoutFlex vclDGRow vclLayoutAuto"]],null,null,null,null,null)),(n()(),h._39(null,["\n      "])),(n()(),h._19(0,null,null,17,"div",[["aria-level","1"],["class","vclToolbar vclLayoutFlex vclLayoutHorizontal vclLayoutJustified vclLayoutCenter"],["role","menubar"]],null,null,null,null,null)),(n()(),h._39(null,["\n        "])),(n()(),h._19(0,null,null,3,"button",[["class","vclButton vclTransparent vclSquare"],["type","button"],["vcl-button",""]],[[2,"vclDisabled",null],[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"click"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"tap"]],function(n,l,t){var e=!0,a=n.component;if("keypress"===l){e=!1!==h._33(n,9).onKeypress(t)&&e}if("mouseenter"===l){e=!1!==h._33(n,9).onMouseEnter(t)&&e}if("mouseleave"===l){e=!1!==h._33(n,9).onMouseLeave(t)&&e}if("tap"===l){e=!1!==h._33(n,9).onTap(t)&&e}if("click"===l){e=!1!==h._33(n,9).onClick(t)&&e}if("click"===l){e=!1!==a.onPrevYearTap()&&e}return e},_.b,_.a)),h._17(4898816,null,1,f.a,[h.n],{appIcon:[0,"appIcon"]},null),h._37(603979776,1,{buttonContent:1}),(n()(),h._39(0,["\n        "])),(n()(),h._39(null,["\n\n        "])),(n()(),h._19(0,null,null,1,"span",[["class","vclCalHeaderLabel"]],null,null,null,null,null)),(n()(),h._39(null,["",""])),(n()(),h._39(null,["\n\n        "])),(n()(),h._19(0,null,null,3,"button",[["class","vclButton vclTransparent vclSquare"],["type","button"],["vcl-button",""]],[[2,"vclDisabled",null],[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"click"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"tap"]],function(n,l,t){var e=!0,a=n.component;if("keypress"===l){e=!1!==h._33(n,17).onKeypress(t)&&e}if("mouseenter"===l){e=!1!==h._33(n,17).onMouseEnter(t)&&e}if("mouseleave"===l){e=!1!==h._33(n,17).onMouseLeave(t)&&e}if("tap"===l){e=!1!==h._33(n,17).onTap(t)&&e}if("click"===l){e=!1!==h._33(n,17).onClick(t)&&e}if("click"===l){e=!1!==a.onNextYearTap()&&e}return e},_.b,_.a)),h._17(4898816,null,1,f.a,[h.n],{appIcon:[0,"appIcon"]},null),h._37(603979776,2,{buttonContent:1}),(n()(),h._39(0,["\n        "])),(n()(),h._39(null,["\n\n        "])),(n()(),h._13(16777216,null,null,1,null,a)),h._17(16384,null,0,g.l,[h._1,h.Y],{ngIf:[0,"ngIf"]},null),(n()(),h._39(null,["\n      "])),(n()(),h._39(null,["\n    "])),(n()(),h._39(null,["\n\n    "])),(n()(),h._19(0,null,null,0,"div",[["class","vclSeparator"]],null,null,null,null,null)),(n()(),h._39(null,["\n\n    "])),(n()(),h._13(16777216,null,null,1,null,o)),h._17(802816,null,0,g.k,[h._1,h.Y,h.y],{ngForOf:[0,"ngForOf"]},null),(n()(),h._39(null,["\n  "])),(n()(),h._39(null,["\n"])),(n()(),h._39(null,["\n"]))],function(n,l){var t=l.component;n(l,9,0,t.prevYearBtnIcon),n(l,17,0,t.nextYearBtnIcon),n(l,22,0,t.expandable),n(l,29,0,t.months)},function(n,l){var t=l.component;n(l,0,0,!t.expanded);n(l,2,0,"grid",t.tabindex,t.maxSelectableMonths>1,t.expanded);n(l,8,0,!t.prevYearAvailable,!0,h._33(l,9).hovered,h._33(l,9).isDisabled,h._33(l,9).selected,h._33(l,9).title),n(l,14,0,t.currentYear);n(l,16,0,!t.nextYearAvailable,!0,h._33(l,17).hovered,h._33(l,17).isDisabled,h._33(l,17).selected,h._33(l,17).title)})}function i(n){return h._41(0,[(n()(),h._19(0,null,null,1,"vcl-month-picker",[],null,null,null,u,y)),h._17(638976,null,0,m.a,[h.i],null,null)],function(n,l){n(l,1,0)},null)}function c(n){return h._41(0,[h._37(402653184,1,{styledMonthPicker:0}),(n()(),h._19(0,null,null,3,"vcl-month-picker",[["id","myStyledMonthPicker"]],null,null,null,u,y)),h._17(638976,[[1,4],["myStyledMonthPicker",4]],0,m.a,[h.i],{colors:[0,"colors"],locales:[1,"locales"],dateOptions:[2,"dateOptions"],prevYearAvailable:[3,"prevYearAvailable"],nextYearAvailable:[4,"nextYearAvailable"]},null),h._34(2),(n()(),h._39(null,["\n"])),(n()(),h._39(null,["\n\n"])),(n()(),h._19(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),h._19(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),h._39(null,["\n\n"])),(n()(),h._19(0,null,null,3,"button",[["class","vclSquare"],["label","Expand"],["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"click"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"tap"]],function(n,l,t){var e=!0,a=n.component;if("keypress"===l){e=!1!==h._33(n,10).onKeypress(t)&&e}if("mouseenter"===l){e=!1!==h._33(n,10).onMouseEnter(t)&&e}if("mouseleave"===l){e=!1!==h._33(n,10).onMouseLeave(t)&&e}if("tap"===l){e=!1!==h._33(n,10).onTap(t)&&e}if("click"===l){e=!1!==h._33(n,10).onClick(t)&&e}if("click"===l){e=!1!==a.expandMonthPicker()&&e}return e},_.b,_.a)),h._17(4898816,[["target",4]],1,f.a,[h.n],{label:[0,"label"]},null),h._37(603979776,2,{buttonContent:1}),(n()(),h._39(0,["\n"])),(n()(),h._39(null,["\n\n"])),(n()(),h._19(0,null,null,6,"vcl-popover",[["attachment","top right"],["targetAttachment","bottom right"]],[[2,"vclPopOver",null],[4,"position",null],[2,"vclLayoutHidden",null],[4,"visibility",null],[4,"transform",null]],[["window","resize"]],function(n,l,t){var e=!0;if("window:resize"===l){e=!1!==h._33(n,15).onWindowResize(t)&&e}return e},Y.b,Y.a)),h._17(4964352,[["mp",4]],0,M.b,[h.n,j.b,[2,M.a]],{target:[0,"target"],visible:[1,"visible"]},null),(n()(),h._39(0,["\n  "])),(n()(),h._19(0,null,0,2,"vcl-month-picker",[],null,[[null,"expandedChange"],[null,"currentYearChange"],[null,"select"],[null,"prevYearBtnTap"],[null,"nextYearBtnTap"]],function(n,l,t){var e=!0,a=n.component;if("expandedChange"===l){e=!1!==(a.expanded=t)&&e}if("currentYearChange"===l){e=!1!==(a.currentYear=t)&&e}if("select"===l){e=!1!==a.onSelect(t)&&e}if("prevYearBtnTap"===l){e=!1!==a.onPreviousYearTap()&&e}if("nextYearBtnTap"===l){e=!1!==a.onNextYearTap()&&e}return e},u,y)),h._17(638976,null,0,m.a,[h.i],{expanded:[0,"expanded"],currentYear:[1,"currentYear"],monthsPerRow:[2,"monthsPerRow"],expandable:[3,"expandable"],prevYearAvailable:[4,"prevYearAvailable"],nextYearAvailable:[5,"nextYearAvailable"]},{expandedChange:"expandedChange",currentYearChange:"currentYearChange",prevYearBtnTap:"prevYearBtnTap",nextYearBtnTap:"nextYearBtnTap",select:"select"}),(n()(),h._39(null,["\n  "])),(n()(),h._39(0,["\n"])),(n()(),h._39(null,["\n"]))],function(n,l){var t=l.component;n(l,2,0,n(l,3,0,"#50E3C2","#FF3CE6"),t.locales,t.dateOptions,!0,!0);n(l,10,0,"Expand"),n(l,15,0,h._33(l,10),t.expanded);n(l,18,0,t.expanded,t.currentYear,4,!0,t.prevYearAvailable,t.nextYearAvailable)},function(n,l){n(l,9,0,!0,h._33(l,10).hovered,h._33(l,10).isDisabled,h._33(l,10).selected,h._33(l,10).title);n(l,14,0,!0,"absolute",h._33(l,15).classHidden,h._33(l,15).styleVisibility,h._33(l,15).transform)})}function p(n){return h._41(0,[(n()(),h._19(0,null,null,1,"month-picker",[],null,null,null,c,C)),h._17(4308992,null,0,d,[],null,null)],function(n,l){n(l,1,0)},null)}Object.defineProperty(l,"__esModule",{value:!0});var h=t(2),d=function(){function n(){this.expanded=!1,this.thisYear=(new Date).getUTCFullYear(),this.currentYear=this.thisYear,this.prevYearAvailable=!0,this.nextYearAvailable=!1,this.locales="lv-LV",this.dateOptions={month:"long"}}return n.prototype.ngOnInit=function(){},n.prototype.ngAfterViewInit=function(){var n=new Date;this.styledMonthPicker.preselectMonth(n.getFullYear(),n.getMonth(),"pink"),n.setMonth(n.getMonth()-1),this.styledMonthPicker.preselectMonth(n.getFullYear(),n.getMonth(),"black"),this.styledMonthPicker.dePreselectMonth(n.getFullYear(),n.getMonth())},n.prototype.expandMonthPicker=function(){this.expanded=!this.expanded},n.prototype.onSelect=function(n){console.log("onSelect():",n)},n.prototype.onPreviousYearTap=function(){console.log("onPreviousYearTap()"),console.log("this.currentYear:",this.currentYear),this.currentYear<this.thisYear&&(this.nextYearAvailable=!0)},n.prototype.onNextYearTap=function(){console.log("onNextYearTap()"),console.log("this.currentYear:",this.currentYear),this.currentYear===this.thisYear&&(this.nextYearAvailable=!1)},n.ctorParameters=function(){return[]},n}(),b=function(){function n(){}return n}(),v=t(459),_=t(189),f=t(81),g=t(21),m=t(508),x=[],y=h._16({encapsulation:2,styles:x,data:{}}),Y=(h._14("vcl-month-picker",m.a,i,{debug:"debug",expanded:"expanded",currentYear:"currentYear",tabindex:"tabindex",monthsPerRow:"monthsPerRow",colors:"colors",locales:"locales",dateOptions:"dateOptions",expandable:"expandable",prevYearAvailable:"prevYearAvailable",nextYearAvailable:"nextYearAvailable",useAvailableMonths:"useAvailableMonths",closeBtnIcon:"closeBtnIcon",prevYearBtnIcon:"prevYearBtnIcon",nextYearBtnIcon:"nextYearBtnIcon",maxSelectableMonths:"maxSelectableMonths",minSelectableMonths:"minSelectableMonths",minYear:"minYear",maxYear:"maxYear"},{expandedChange:"expandedChange",currentYearChange:"currentYearChange",prevYearBtnTap:"prevYearBtnTap",nextYearBtnTap:"nextYearBtnTap",select:"select",deselect:"deselect"},[]),t(563)),M=t(195),j=t(29),k=[],C=h._16({encapsulation:2,styles:k,data:{}}),w=h._14("month-picker",d,p,{},{},[]),T=t(40),I=t(115),A=t(60),P=t(456),B=t(460),S=t(188),O=t(190),D=t(191),F=t(473),L=t(484),H=t(521),E=t(26),N=t(454);t.d(l,"MonthPickerDemoModuleNgFactory",function(){return $});var $=h._15(b,[],function(n){return h._30([h._31(512,h.k,h._11,[[8,[v.a,w]],[3,h.k],h.E]),h._31(4608,g.n,g.m,[h.A]),h._31(4608,T.a,T.a,[]),h._31(512,g.c,g.c,[]),h._31(512,I.a,I.a,[]),h._31(512,A.d,A.d,[]),h._31(512,P.a,P.a,[]),h._31(512,B.a,B.a,[]),h._31(512,S.a,S.a,[]),h._31(512,O.a,O.a,[]),h._31(512,D.a,D.a,[]),h._31(512,F.a,F.a,[]),h._31(512,L.a,L.a,[]),h._31(512,H.a,H.a,[]),h._31(512,E.m,E.m,[[2,E.r],[2,E.l]]),h._31(512,b,b,[]),h._31(1024,E.j,function(){return[[{path:"",component:N.a,data:{demo:e}}]]},[])])})},453:function(n,l,t){"use strict";t.d(l,"b",function(){return e}),t.d(l,"a",function(){return a});var e=function(){function n(){}return n}(),a=function(){function n(){this.disabled=!1,this.tabClass=""}return n}()},454:function(n,l,t){"use strict";t.d(l,"a",function(){return s});var e=t(26),a=t(27),s=function(){function n(n,l){this.activatedRoute=n,this.sanitizer=l,this.tabs=[]}return n.prototype.ngOnInit=function(){var n=this,l=this.activatedRoute.snapshot.data.demo();l?(this.title=l.label,l.tabs?this.tabs=Object.keys(l.tabs).map(function(t){var e,a;return"object"==typeof l.tabs[t]&&l.tabs[t]?(e=l.tabs[t].type,a="pre"===e||"html"===e||"md"===e?n.sanitizer.bypassSecurityTrustHtml(l.tabs[t].content):l.tabs[t].content):"function"==typeof l.tabs[t]&&(e="component",a=l.tabs[t]),{name:t,content:a,type:e}}):this.tabs=[]):(this.title="ng-vcl",this.tabs=[])},n.ctorParameters=function(){return[{type:e.a},{type:a.c}]},n}()},455:function(n,l,t){"use strict";t.d(l,"a",function(){return r});var e=t(60),a=t(2),s=t(453),r=function(){function n(){this.layout="",this.tabbableClass="",this.tabsClass="",this.tabContentClass="",this.borders=!1,this.selectedTabIndex=0,this.selectedTabIndexChange$=new a.p}return Object.defineProperty(n.prototype,"tabContent",{set:function(n){this.wormholeHost=new e.e(n)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedTabIndexChange",{get:function(){return this.selectedTabIndexChange$.asObservable()},enumerable:!0,configurable:!0}),n.prototype.selectTab=function(n){var l,t,e=this.tabs.toArray();n instanceof s.a?(l=e.indexOf(n),t=n):"number"==typeof n&&e[n]?(l=n,t=e[l]):(l=-1,t=null),l>=0&&t instanceof s.a&&!t.disabled&&(this.wormholeHost.clearWormholes(),this.selectedTabIndex=l,this.selectedTabIndexChange$.emit(l),this.wormholeHost.connectWormhole(t.content))},n.prototype.ngAfterContentInit=function(){this.selectTab(this.selectedTabIndex)},n.prototype.ngOnDestroy=function(){this.wormholeHost.clearWormholes()},n}()},456:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){}return n}()},457:function(n,l,t){"use strict";function e(n){return r._41(0,[r._32(null,0),(n()(),r._13(0,null,null,0))],null,null)}function a(n){return r._41(0,[r._37(402653184,1,{content:0}),(n()(),r._13(0,[[1,2]],null,0,null,e))],null,null)}function s(n){return r._41(0,[(n()(),r._19(0,null,null,2,"vcl-tab",[],null,null,null,a,i)),r._17(49152,null,1,o.a,[],null,null),r._37(335544320,1,{label:0})],null,null)}t.d(l,"a",function(){return i}),l.b=a;var r=t(2),o=t(453),u=[],i=r._16({encapsulation:2,styles:u,data:{}});r._14("vcl-tab",o.a,s,{disabled:"disabled",tabClass:"tabClass"},{},["*"])},458:function(n,l,t){"use strict";function e(n){return r._41(0,[(n()(),r._19(0,null,null,7,"div",[["role","tab"]],[[8,"className",0],[2,"vclDisabled",null],[2,"vclSelected",null],[2,"aria-selected",null]],[[null,"tap"]],function(n,l,t){var e=!0,a=n.component;if("tap"===l){e=!1!==a.selectTab(n.context.$implicit)&&e}return e},null,null)),(n()(),r._39(null,["\n        "])),(n()(),r._19(0,null,null,4,"span",[["class","vclTabLabel"]],null,null,null,null,null)),(n()(),r._39(null,[" \n          "])),(n()(),r._19(16777216,null,null,1,"wormhole",[],null,null,null,null,null)),r._17(671744,null,0,o.a,[r._1],{target:[0,"target"]},null),(n()(),r._39(null,["\n        "])),(n()(),r._39(null,["\n    "]))],function(n,l){n(l,5,0,l.context.$implicit.label)},function(n,l){var t=l.component;n(l,0,0,r._22(1,"vclTab ",l.context.$implicit.tabClass,""),l.context.$implicit.disabled,t.selectedTabIndex===l.context.index,t.selectedTabIndex===l.context.index)})}function a(n){return r._41(0,[r._37(402653184,1,{tabContent:0}),(n()(),r._19(0,null,null,20,"div",[],[[8,"className",0],[2,"vclTabsLeft",null],[2,"vclTabsRight",null]],null,null,null,null)),(n()(),r._39(null,["\n  "])),(n()(),r._19(0,null,null,4,"div",[["role","tablist"]],[[8,"className",0],[2,"vclTabStyleUni",null]],null,null,null,null)),(n()(),r._39(null,["\n    "])),(n()(),r._13(16777216,null,null,1,null,e)),r._17(802816,null,0,u.k,[r._1,r.Y,r.y],{ngForOf:[0,"ngForOf"]},null),(n()(),r._39(null,["\n  "])),(n()(),r._39(null,["\n  "])),(n()(),r._19(0,null,null,11,"div",[],[[8,"className",0],[2,"vclNoBorder",null]],null,null,null,null)),(n()(),r._39(null,["\n    "])),(n()(),r._19(0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),r._39(null,["\n      "])),(n()(),r._19(16777216,[[1,3],["tabContent",1]],null,0,"div",[],null,null,null,null,null)),(n()(),r._39(null,["\n    "])),(n()(),r._39(null,["\n    "])),(n()(),r._19(0,null,null,3,"div",[["class","vclTabPanel"],["role","tabpanel"]],null,null,null,null,null)),(n()(),r._39(null,["\n      "])),r._32(null,0),(n()(),r._39(null,["\n    "])),(n()(),r._39(null,["\n  "])),(n()(),r._39(null,["\n"])),(n()(),r._39(null,["\n"]))],function(n,l){n(l,6,0,l.component.tabs)},function(n,l){var t=l.component;n(l,1,0,r._22(1,"vclTabbable ",t.tabbableClass,""),"left"===t.layout,"right"===t.layout),n(l,3,0,r._22(1,"vclTabs ",t.tabsClass,""),!!t.borders),n(l,9,0,r._22(1,"vclTabContent ",t.tabContentClass,""),!t.borders)})}function s(n){return r._41(0,[(n()(),r._19(0,null,null,2,"vcl-tab-nav",[],null,null,null,a,p)),r._17(1228800,null,1,i.a,[],null,null),r._37(603979776,1,{tabs:1})],null,null)}t.d(l,"a",function(){return p}),l.b=a;var r=t(2),o=t(187),u=t(21),i=t(455),c=[],p=r._16({encapsulation:2,styles:c,data:{}});r._14("vcl-tab-nav",i.a,s,{layout:"layout",tabbableClass:"tabbableClass",tabsClass:"tabsClass",tabContentClass:"tabContentClass",borders:"borders",selectedTabIndex:"selectedTabIndex"},{selectedTabIndexChange:"selectedTabIndexChange"},["*"])},459:function(n,l,t){"use strict";function e(n){return d._41(0,[(n()(),d._39(null,["",""]))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.name)})}function a(n){return d._41(0,[(n()(),d._19(16777216,null,null,1,"wormhole",[],null,null,null,null,null)),d._17(671744,null,0,b.a,[d._1],{target:[0,"target"]},null),(n()(),d._13(0,null,null,0))],function(n,l){n(l,1,0,l.parent.context.$implicit.content)},null)}function s(n){return d._41(0,[(n()(),d._19(0,null,null,2,"div",[],null,null,null,null,null)),(n()(),d._19(0,null,null,1,"pre",[],null,null,null,null,null)),(n()(),d._39(null,["",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.content)})}function r(n){return d._41(0,[(n()(),d._19(0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function o(n){return d._41(0,[(n()(),d._19(0,null,null,0,"div",[["class","markdown-body"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function u(n){return d._41(0,[(n()(),d._19(0,null,null,0,"pre",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,0,0,l.parent.context.$implicit.content)})}function i(n){return d._41(0,[(n()(),d._19(0,null,null,21,"vcl-tab",[],null,null,null,v.b,v.a)),d._17(49152,[[1,4]],1,_.a,[],null,null),d._37(335544320,2,{label:0}),(n()(),d._39(0,["\n      "])),(n()(),d._13(0,[[2,2]],0,1,null,e)),d._17(16384,null,0,_.b,[],null,null),(n()(),d._39(0,["\n      "])),(n()(),d._13(16777216,null,0,1,null,a)),d._17(16384,null,0,f.l,[d._1,d.Y],{ngIf:[0,"ngIf"]},null),(n()(),d._39(0,["\n      "])),(n()(),d._13(16777216,null,0,1,null,s)),d._17(16384,null,0,f.l,[d._1,d.Y],{ngIf:[0,"ngIf"]},null),(n()(),d._39(0,["\n      "])),(n()(),d._13(16777216,null,0,1,null,r)),d._17(16384,null,0,f.l,[d._1,d.Y],{ngIf:[0,"ngIf"]},null),(n()(),d._39(0,["\n      "])),(n()(),d._13(16777216,null,0,1,null,o)),d._17(16384,null,0,f.l,[d._1,d.Y],{ngIf:[0,"ngIf"]},null),(n()(),d._39(0,["\n      "])),(n()(),d._13(16777216,null,0,1,null,u)),d._17(16384,null,0,f.l,[d._1,d.Y],{ngIf:[0,"ngIf"]},null),(n()(),d._39(0,["\n    "]))],function(n,l){n(l,8,0,"component"===l.context.$implicit.type),n(l,11,0,"text"===l.context.$implicit.type),n(l,14,0,"html"===l.context.$implicit.type),n(l,17,0,"md"===l.context.$implicit.type),n(l,20,0,"pre"===l.context.$implicit.type)},null)}function c(n){return d._41(0,[(n()(),d._19(0,null,null,9,"div",[],null,null,null,null,null)),(n()(),d._39(null,["\n  "])),(n()(),d._19(0,null,null,6,"vcl-tab-nav",[["borders","true"]],null,null,null,g.b,g.a)),d._17(1228800,null,1,m.a,[],{borders:[0,"borders"]},null),d._37(603979776,1,{tabs:1}),(n()(),d._39(0,["\n    "])),(n()(),d._13(16777216,null,0,1,null,i)),d._17(802816,null,0,f.k,[d._1,d.Y,d.y],{ngForOf:[0,"ngForOf"]},null),(n()(),d._39(0,["\n  "])),(n()(),d._39(null,["\n"]))],function(n,l){var t=l.component;n(l,3,0,"true"),n(l,7,0,t.tabs)},null)}function p(n){return d._41(0,[(n()(),d._19(0,null,null,1,"h2",[["class","vclArticleHeader"]],null,null,null,null,null)),(n()(),d._39(null,[" ",""])),(n()(),d._39(null,["\n"])),(n()(),d._13(16777216,null,null,1,null,c)),d._17(16384,null,0,f.l,[d._1,d.Y],{ngIf:[0,"ngIf"]},null),(n()(),d._39(null,["\n"]))],function(n,l){n(l,4,0,l.component.tabs.length>0)},function(n,l){n(l,1,0,l.component.title)})}function h(n){return d._41(0,[(n()(),d._19(0,null,null,1,"ng-component",[],null,null,null,p,j)),d._17(114688,null,0,x.a,[y.a,Y.c],null,null)],function(n,l){n(l,1,0)},null)}t.d(l,"a",function(){return k});var d=t(2),b=t(187),v=t(457),_=t(453),f=t(21),g=t(458),m=t(455),x=t(454),y=t(26),Y=t(27),M=[],j=d._16({encapsulation:2,styles:M,data:{}}),k=d._14("ng-component",x.a,h,{},{},[])},460:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=(t(454),function(){function n(){}return n}())},473:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){}return n}()},484:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=(t(195),function(){function n(){}return n}())},508:function(n,l,t){"use strict";t.d(l,"a",function(){return a});var e=t(2),a=function(){function n(l){this.ref=l,this.tag=n.Tag,this.now=new Date,this.yearMeta={},this.debug=!1,this.expanded=!0,this.expandedChange=new e.p,this.currentYear=this.now.getFullYear(),this.currentYearChange=new e.p,this.prevYearBtnTap=new e.p,this.nextYearBtnTap=new e.p,this.select=new e.p,this.deselect=new e.p,this.tabindex=0,this.monthsPerRow=3,this.locales="en-US",this.dateOptions={month:"short"},this.expandable=!1,this.prevYearAvailable=!1,this.nextYearAvailable=!1,this.useAvailableMonths=!1,this.closeBtnIcon="fa:times",this.prevYearBtnIcon="fa:chevron-left",this.nextYearBtnIcon="fa:chevron-right",this.minSelectableMonths=0,this.minYear=Number.MIN_SAFE_INTEGER,this.maxYear=Number.MAX_SAFE_INTEGER}return n.prototype.ngOnInit=function(){var l=this,t=new Date(this.now.getFullYear(),0);this.months=Array(n.MonthCount).fill(0).map(function(n){var e=t.toLocaleString(l.locales,l.dateOptions);return t.setMonth(t.getMonth()+1),e}),this.maxSelectableMonths||(this.maxSelectableMonths=this.colors&&this.colors.length||1),this.availableColors=this.colors?this.colors.map(function(n){return!0}):[],this.setYearMeta(this.currentYear)},n.prototype.ngOnChanges=function(n){var l=this.tag+".ngOnChanges()";this.debug&&console.log(l,"changes:",n),n.currentYear&&!n.currentYear.isFirstChange()&&this.setYearMeta(n.currentYear.currentValue)},n.prototype.setYearMeta=function(n){this.yearMeta[n]||(this.yearMeta[n]=this.createYearMeta(n)),this.currentMeta=this.yearMeta[n]},n.prototype.createYearMeta=function(n){return this.months.map(function(n){return{}})},n.prototype.selectMonth=function(n,l){if(this.isMonthAvailable(n,l)&&!this.isMonthPreselected(n,l)){var t=this.getYearMeta(n)[l];if(t.selected){if(this.getSelectedDates().length<=this.minSelectableMonths)return;return this.deselectMonth(n,l)}1===this.maxSelectableMonths&&this.iterateMonthMetas(function(n,l,e){e.selected=e===t}),this.getSelectedDates().length<this.maxSelectableMonths&&(t.selected=!0),t.selected&&(this.setMonthBackgroundColor(n,l),this.notifySelect(n+"."+l),1===this.maxSelectableMonths&&this.expandable&&(this.expanded=!1,this.expandedChange.emit(this.expanded)))}},n.prototype.preselectMonth=function(n,l,t){var e=this.tag+".preselectMonth()";this.debug&&console.log(e,n+"."+l);var a=this.getYearMeta(n)[l];a.selected&&this.deselectMonth(n,l),a.preselected=!0,a.color=t,this.debug&&console.log(e,"monthMeta:",a),this.ref.markForCheck()},n.prototype.dePreselectMonth=function(n,l){var t=this.tag+".dePreselectMonth()";if(this.debug&&console.log(t,n+"."+l),this.isMonthPreselected(n,l)){var e=this.getYearMeta(n)[l];e.preselected=!1,delete e.color,this.debug&&console.log(t,"monthMeta:",e),this.ref.markForCheck()}},n.prototype.isMonthAvailable=function(n,l){return this.isDateInBounds(n,l)&&(!this.useAvailableMonths||this.yearMeta[n]&&this.yearMeta[n][l].available)},n.prototype.isDateInBounds=function(n,l){return this.isMonthInBounds(l)&&this.isYearInBounds(n)},n.prototype.isMonthInBounds=function(l){return l>-1&&l<n.MonthCount},n.prototype.isYearInBounds=function(n){return n>this.minYear&&n<this.maxYear},n.prototype.isMonthPreselected=function(n,l){var t=this.tag+".isMonthPreselected()";this.debug&&console.log(t,n+"."+l);var e=!!(this.isDateInBounds(n,l)&&this.yearMeta[n]&&this.yearMeta[n][l].preselected);return this.debug&&console.log(t,"isMonthPreselected:",e),e},n.prototype.getYearMeta=function(n){return this.yearMeta[n]||(this.yearMeta[n]=this.createYearMeta(n)),this.yearMeta[n]},n.prototype.iterateMonthMetas=function(n){var l=this;Object.keys(this.yearMeta).forEach(function(t){l.yearMeta[t].forEach(function(l,e){n(Number(t),e,l)})})},n.prototype.getSelectedDates=function(){var n=[];return this.iterateMonthMetas(function(l,t,e){e.selected&&n.push(l+"."+t)}),n},n.prototype.setMonthBackgroundColor=function(n,l){var t=this.getMonthBackgroundColor();if(t){this.getYearMeta(n)[l].color=t}},n.prototype.getMonthBackgroundColor=function(){var n=this.availableColors.findIndex(function(n){return n});if(-1!==n)return this.availableColors[n]=!1,this.colors[n]},n.prototype.deselectMonth=function(n,l){if(this.isMonthSelected(n,l)){this.getYearMeta(n)[l].selected=!1,this.clearMonthBackgroundColor(n,l),this.notifyDeselect(n+"."+l)}},n.prototype.isMonthSelected=function(n,l){return this.isDateInBounds(n,l)&&this.yearMeta[n]&&this.yearMeta[n][l].selected},n.prototype.clearMonthBackgroundColor=function(n,l){if(this.availableColors){var t=this.getYearMeta(n)[l];if(t.color){var e=this.colors.indexOf(t.color);this.availableColors[e]=!0,delete t.color}}},n.prototype.deselectAllMonths=function(){this.iterateMonthMetas(this.deselectMonth)},n.prototype.addAvailableMonth=function(n,l){this.isDateInBounds(n,l)&&(this.getYearMeta(n)[l].available=!0)},n.prototype.removeAvailableMonth=function(n,l){this.isDateInBounds(n,l)&&this.yearMeta[n]&&(this.yearMeta[n][l].available=!1)},n.prototype.removeAllAvailableMonths=function(){var n=this;this.iterateMonthMetas(function(l,t){n.dePreselectMonth(l,t),n.deselectMonth(l,t),n.removeAvailableMonth(l,t)})},n.prototype.onPrevYearTap=function(){this.prevYearAvailable&&(this.currentYear--,this.setYearMeta(this.currentYear),this.currentYearChange.emit(this.currentYear),this.prevYearBtnTap.emit())},n.prototype.onNextYearTap=function(){this.nextYearAvailable&&(this.currentYear++,this.setYearMeta(this.currentYear),this.currentYearChange.emit(this.currentYear),this.nextYearBtnTap.emit())},n.prototype.onCloseBtnTap=function(){this.expandable&&this.expanded&&(this.expanded=!1,this.expandedChange.emit(this.expanded))},n.prototype.notifySelect=function(n){this.select.emit(n)},n.prototype.notifyDeselect=function(n){this.deselect.emit(n)},n.prototype.isCurrentMonth=function(n,l){return this.now.getFullYear()==n&&this.now.getMonth()===l},n.prototype.getMonth=function(n,l){if(this.isDateInBounds(n,l))return Object.assign({date:n+"."+l,label:this.months[l]},this.getYearMeta(n)[l])},n.ctorParameters=function(){return[{type:e.i}]},n.Tag="MonthPickerComponent",n.MonthCount=12,n}()},521:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=(t(508),function(){function n(){}return n}())},563:function(n,l,t){"use strict";function e(n){return s._41(2,[s._32(null,0)],null,null)}function a(n){return s._41(0,[(n()(),s._19(0,null,null,1,"vcl-popover",[],[[2,"vclPopOver",null],[4,"position",null],[2,"vclLayoutHidden",null],[4,"visibility",null],[4,"transform",null]],[["window","resize"]],function(n,l,t){var e=!0;if("window:resize"===l){e=!1!==s._33(n,1).onWindowResize(t)&&e}return e},e,i)),s._17(4964352,null,0,r.b,[s.n,o.b,[2,r.a]],null,null)],function(n,l){n(l,1,0)},function(n,l){n(l,0,0,!0,"absolute",s._33(l,1).classHidden,s._33(l,1).styleVisibility,s._33(l,1).transform)})}t.d(l,"a",function(){return i}),l.b=e;var s=t(2),r=t(195),o=t(29),u=[],i=s._16({encapsulation:2,styles:u,data:{animation:[{type:7,name:"popoverState",definitions:[],options:{}}]}});s._14("vcl-popover",r.b,a,{debug:"debug",target:"target",targetX:"targetX",targetY:"targetY",attachmentX:"attachmentX",attachmentY:"attachmentY",visible:"visible"},{willClose:"willClose",willOpen:"willOpen"},["*"])},612:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">vcl-month-picker</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"myStyledMonthPicker"</span> #<span class="hljs-attr">myStyledMonthPicker</span>\n  [<span class="hljs-attr">locales</span>]=<span class="hljs-string">"locales"</span>\n  [<span class="hljs-attr">dateOptions</span>]=<span class="hljs-string">"dateOptions"</span>\n  [<span class="hljs-attr">prevYearAvailable</span>]=<span class="hljs-string">"true"</span>\n  [<span class="hljs-attr">nextYearAvailable</span>]=<span class="hljs-string">"true"</span>\n  [<span class="hljs-attr">colors</span>]=<span class="hljs-string">"[\'#50E3C2\', \'#FF3CE6\']"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-month-picker</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span>\n  #<span class="hljs-attr">target</span>\n  <span class="hljs-attr">label</span>=<span class="hljs-string">"Expand"</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">"vclSquare"</span>\n  (<span class="hljs-attr">click</span>)=<span class="hljs-string">"expandMonthPicker()"</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-popover</span> #<span class="hljs-attr">mp</span> [<span class="hljs-attr">target</span>]=<span class="hljs-string">"target"</span> <span class="hljs-attr">targetAttachment</span>=<span class="hljs-string">\'bottom right\'</span> <span class="hljs-attr">attachment</span>=<span class="hljs-string">\'top right\'</span> [<span class="hljs-attr">visible</span>]=<span class="hljs-string">"expanded"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-month-picker</span>\n    [<span class="hljs-attr">expandable</span>]=<span class="hljs-string">"true"</span>\n    [(<span class="hljs-attr">expanded</span>)]=<span class="hljs-string">"expanded"</span>\n    [(<span class="hljs-attr">currentYear</span>)]=<span class="hljs-string">"currentYear"</span>\n    [<span class="hljs-attr">monthsPerRow</span>]=<span class="hljs-string">"4"</span>\n    (<span class="hljs-attr">select</span>)=<span class="hljs-string">"onSelect($event)"</span>\n    (<span class="hljs-attr">prevYearBtnTap</span>)=<span class="hljs-string">"onPreviousYearTap()"</span>\n    [<span class="hljs-attr">prevYearAvailable</span>]=<span class="hljs-string">"prevYearAvailable"</span>\n    (<span class="hljs-attr">nextYearBtnTap</span>)=<span class="hljs-string">"onNextYearTap()"</span>\n    [<span class="hljs-attr">nextYearAvailable</span>]=<span class="hljs-string">"nextYearAvailable"</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-month-picker</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-popover</span>&gt;</span>\n'},613:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component, ViewChild } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { MonthPickerComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ng-vcl/ng-vcl\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'month-picker\'</span>,\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> MonthPickerDemoComponent {\n\n  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-string">\'myStyledMonthPicker\'</span>) styledMonthPicker: MonthPickerComponent;\n\n  expanded: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">false</span>;\n\n  thisYear: <span class="hljs-built_in">number</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().getUTCFullYear();\n\n  currentYear: <span class="hljs-built_in">number</span> = <span class="hljs-keyword">this</span>.thisYear;\n\n  prevYearAvailable: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">true</span>;\n\n  nextYearAvailable: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">false</span>;\n\n  locales: <span class="hljs-built_in">string</span> = <span class="hljs-string">\'lv-LV\'</span>;\n\n  dateOptions: <span class="hljs-built_in">any</span> = {\n    month: <span class="hljs-string">\'long\'</span>\n  };\n\n  <span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) { }\n\n  ngOnInit() { }\n\n  ngAfterViewInit() {\n    <span class="hljs-keyword">const</span> now: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n    <span class="hljs-keyword">this</span>.styledMonthPicker.preselectMonth(now.getFullYear(), now.getMonth(), <span class="hljs-string">\'pink\'</span>);\n\n    now.setMonth(now.getMonth() - <span class="hljs-number">1</span>);\n    <span class="hljs-keyword">this</span>.styledMonthPicker.preselectMonth(now.getFullYear(), now.getMonth(), <span class="hljs-string">\'black\'</span>);\n    <span class="hljs-keyword">this</span>.styledMonthPicker.dePreselectMonth(now.getFullYear(), now.getMonth());\n  }\n\n  expandMonthPicker() {\n    <span class="hljs-keyword">this</span>.expanded = !<span class="hljs-keyword">this</span>.expanded;\n  }\n\n  onSelect(date: <span class="hljs-built_in">string</span>) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onSelect():\'</span>, date);\n  }\n\n  onPreviousYearTap() {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onPreviousYearTap()\'</span>);\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'this.currentYear:\'</span>, <span class="hljs-keyword">this</span>.currentYear);\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.currentYear &lt; <span class="hljs-keyword">this</span>.thisYear) {\n      <span class="hljs-keyword">this</span>.nextYearAvailable = <span class="hljs-literal">true</span>;\n    }\n  }\n\n  onNextYearTap() {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'onNextYearTap()\'</span>);\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'this.currentYear:\'</span>, <span class="hljs-keyword">this</span>.currentYear);\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.currentYear === <span class="hljs-keyword">this</span>.thisYear) {\n      <span class="hljs-keyword">this</span>.nextYearAvailable = <span class="hljs-literal">false</span>;\n    }\n  }\n}\n\n'}});