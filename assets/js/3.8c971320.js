(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{408:function(t,n,e){},409:function(t,n,e){},410:function(t,n,e){},417:function(t,n,e){"use strict";e(408)},418:function(t,n,e){"use strict";e(409)},419:function(t,n,e){"use strict";var r=e(12),i=e(5),o=e(4),a=e(136),s=e(22),u=e(13),c=e(221),p=e(40),l=e(76),f=e(220),g=e(3),m=e(77).f,v=e(41).f,h=e(15).f,d=e(420),_=e(232).trim,b=i.Number,y=b.prototype,x=i.TypeError,k=o("".slice),N=o("".charCodeAt),P=function(t){var n=f(t,"number");return"bigint"==typeof n?n:$(n)},$=function(t){var n,e,r,i,o,a,s,u,c=f(t,"number");if(l(c))throw x("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=_(c),43===(n=N(c,0))||45===n){if(88===(e=N(c,2))||120===e)return NaN}else if(48===n){switch(N(c,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(a=(o=k(c,2)).length,s=0;s<a;s++)if((u=N(o,s))<48||u>i)return NaN;return parseInt(o,r)}return+c};if(a("Number",!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var O,C=function(t){var n=arguments.length<1?0:b(P(t)),e=this;return p(y,e)&&g((function(){d(e)}))?c(Object(n),e,C):n},E=r?m(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),I=0;E.length>I;I++)u(b,O=E[I])&&!u(C,O)&&h(C,O,v(b,O));C.prototype=y,y.constructor=C,s(i,"Number",C,{constructor:!0})}},420:function(t,n,e){var r=e(4);t.exports=r(1..valueOf)},421:function(t,n,e){var r=e(230),i=e(223),o=e(422),a=e(426);t.exports=function(t,n){if(null==t)return{};var e=r(a(t),(function(t){return[t]}));return n=i(n),o(t,e,(function(t,e){return n(t,e[0])}))}},422:function(t,n,e){var r=e(142),i=e(423),o=e(133);t.exports=function(t,n,e){for(var a=-1,s=n.length,u={};++a<s;){var c=n[a],p=r(t,c);e(p,c)&&i(u,o(c,t),p)}return u}},423:function(t,n,e){var r=e(424),i=e(133),o=e(140),a=e(108),s=e(79);t.exports=function(t,n,e,u){if(!a(t))return t;for(var c=-1,p=(n=i(n,t)).length,l=p-1,f=t;null!=f&&++c<p;){var g=s(n[c]),m=e;if("__proto__"===g||"constructor"===g||"prototype"===g)return t;if(c!=l){var v=f[g];void 0===(m=u?u(v,g,f):void 0)&&(m=a(v)?v:o(n[c+1])?[]:{})}r(f,g,m),f=f[g]}return t}},424:function(t,n,e){var r=e(425),i=e(139),o=Object.prototype.hasOwnProperty;t.exports=function(t,n,e){var a=t[n];o.call(t,n)&&i(a,e)&&(void 0!==e||n in t)||r(t,n,e)}},425:function(t,n,e){var r=e(231);t.exports=function(t,n,e){"__proto__"==n&&r?r(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}},426:function(t,n,e){var r=e(224),i=e(427),o=e(429);t.exports=function(t){return r(t,o,i)}},427:function(t,n,e){var r=e(138),i=e(428),o=e(225),a=e(226),s=Object.getOwnPropertySymbols?function(t){for(var n=[];t;)r(n,o(t)),t=i(t);return n}:a;t.exports=s},428:function(t,n,e){var r=e(229)(Object.getPrototypeOf,Object);t.exports=r},429:function(t,n,e){var r=e(227),i=e(430),o=e(141);t.exports=function(t){return o(t)?r(t,!0):i(t)}},430:function(t,n,e){var r=e(108),i=e(228),o=e(431),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var n=i(t),e=[];for(var s in t)("constructor"!=s||!n&&a.call(t,s))&&e.push(s);return e}},431:function(t,n){t.exports=function(t){var n=[];if(null!=t)for(var e in Object(t))n.push(e);return n}},432:function(t,n,e){"use strict";e(410)},449:function(t,n,e){"use strict";e.r(n);e(78),e(2);var r=e(143),i=e.n(r),o=(e(9),e(19),e(23),{data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;e.e(2).then(e.t.bind(null,448,7)).then((function(n){t.comp=n.default}))},methods:{clickCallback:function(t){var n=this.$pagination.getSpecificPageLink(t-1);this.$router.push(n)}}}),a=(e(417),e(17)),s=Object(a.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.comp?e(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,u=(e(418),Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?e("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,e(419),e(110)),c=e.n(u),p=e(421),l=e.n(p),f={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return l()(this.$props,c.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},g=(Object(a.a)(f,(function(){var t=this.$createElement,n=this._self._c||t;return"vssue"===this.$service.comment.service?n("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?n("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports,{data:function(){return{paginationComponent:null}},computed:{pages:function(){return this.$pagination.pages}},created:function(){this.paginationComponent=this.getPaginationComponent()},methods:{getPaginationComponent:function(){return s},resolvePostDate:function(t){return i()(t).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvePostTags:function(t){return!t||Array.isArray(t)?t:[t]}}}),m=(e(432),Object(a.a)(g,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:""}},[e("div",{staticClass:"card-panel-content row",attrs:{itemscope:"",itemtype:"http://schema.org/Blog"}},t._l(t.pages,(function(n){return e("article",{key:n.key,staticClass:"ui-post entry col-md-4 card-container",attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[e("meta",{attrs:{itemprop:"mainEntityOfPage",content:n.path}}),t._v(" "),e("div",{staticClass:"entry card h-100"},[e("div",{staticClass:"card-header-image"},[e("NavLink",{attrs:{link:n.path}},[e("img",{attrs:{src:n.frontmatter.featuredimg}})])],1),t._v(" "),e("div",{staticClass:"card-inside"},[e("div",{staticClass:"card-subheading"},[n.frontmatter.tags?e("div",{staticClass:"ui-post-meta ui-post-tag",attrs:{itemprop:"keywords"}},t._l(t.resolvePostTags(n.frontmatter.tags),(function(n){return e("router-link",{key:n,attrs:{to:"/tag/"+n}},[t._v("\n                "+t._s(n)+"\n              ")])})),1):t._e()]),t._v(" "),e("h2",{staticClass:"heading",attrs:{itemprop:"name headline"}},[e("NavLink",{staticClass:"heading",attrs:{link:n.path}},[t._v(t._s(n.title))])],1),t._v(" "),e("p",{attrs:{itemprop:"description"}},[t._v("\n            "+t._s(n.frontmatter.summary||n.summary)+"\n          ")])])])])})),0),t._v(" "),t.$pagination.length>1&&t.paginationComponent?e(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,null,null));n.default=m.exports}}]);