(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{217:function(t,a,e){"use strict";var n=e(94);e.n(n).a},269:function(t,a,e){"use strict";e(159),e(113),e(114),e(116),e(118);var n,s=e(119),o=e(112),r=e(138),i=e.n(r),l={components:{NavLink:o.a},data:function(){return{tagName:"",browserDownloadUrl:""}},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}},mounted:(n=Object(s.a)(regeneratorRuntime.mark((function t(){var a,e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://api.github.com/repos/inorichi/tachiyomi/releases/latest");case 2:a=t.sent,e=a.data,n=e.assets.find((function(t){return t.name.includes(".apk")})),this.$data.tagName=e.tag_name,this.$data.browserDownloadUrl=n.browser_download_url;case 7:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},c=(e(217),e(0)),u=Object(c.a)(l,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),e("p",{staticClass:"description"},[t._v("\n\t\t\t"+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n\t\t")]),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("a",{staticClass:"action-button",attrs:{rel:"noopener noreferrer",href:t.browserDownloadUrl||null,title:"Download latest release",download:""}},[e("font-awesome-icon",{attrs:{icon:"download"}}),t._v(" "),e("span",[t._v("Download "+t._s(t.tagName||"vX.X.X"))])],1),t._v(" "),e("NavLink",{staticClass:"action-button secundary",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,n){return e("div",{key:n,staticClass:"feature"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("footer",{staticClass:"footer"},[t._v("\n\t\t"+t._s(t.data.footer)+"\n\t")]):t._e()],1)}),[],!1,null,null,null);a.a=u.exports},94:function(t,a,e){}}]);