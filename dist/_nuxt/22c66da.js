(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{400:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d}));var r=n(401),o=n(0),c=Object(o.g)("v-card__actions"),l=Object(o.g)("v-card__subtitle"),f=Object(o.g)("v-card__text"),d=Object(o.g)("v-card__title");r.a},420:function(t,e,n){var content=n(423);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("23d3cfde",content,!0,{sourceMap:!1})},421:function(t,e,n){"use strict";n.r(e);n(127);var r=n(16),o=n(27),c=n(26),l=n(23),f=n(12),d=n(9),h=n(44);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"processList",get:function(){return[{itemNo:"01",title:this.$t("label.gatheringInformation"),points:[this.$t("label.projectObjective"),this.$t("label.mainGoals"),this.$t("label.currentIssues")]},{itemNo:"02",title:this.$t("label.projectPlanning"),points:[this.$t("label.createSitemapSketch"),this.$t("label.createWireframeAndMockup"),this.$t("label.chooseTechStack"),this.$t("label.finalizeScope"),this.$t("label.determineTimeline")]},{itemNo:"03",title:this.$t("label.design"),points:[this.$t("label.pageLayouts"),this.$t("label.review"),this.$t("label.approvalCycle")]},{itemNo:"04",title:this.$t("label.contentAssembly"),points:[this.$t("label.createNewContent"),this.$t("label.migrateExistingContent")]},{itemNo:"05",title:this.$t("label.development"),points:[this.$t("label.developAndDeploy"),this.$t("label.seoForWebsites")]},{itemNo:"06",title:this.$t("label.testingAndLaunch"),points:[this.$t("label.internalTesting"),this.$t("label.userAcceptanceTest"),this.$t("label.crossBrowserCompatibility"),this.$t("label.productLaunch")]}]}}]),n}(h.Vue),x=y=m([h.Component],y),_=(n(422),n(43)),w=n(49),j=n.n(w),O=n(401),C=n(452),R=n(184),k=n(185),$=n(114),P=n(100),S=n(97),component=Object(_.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components__listProcess full-width bg--gradient",attrs:{id:"dev-process"}},[n("v-container",{staticClass:"list-process-container"},[n("p",{staticClass:"mb-5 mb-sm-10 text-h5 text-sm-h4 font-weight-bold text-center primary--text"},[t._v("\n      "+t._s(t.$t("label.devProcess"))+"\n    ")]),t._v(" "),n("div",{staticClass:"slider-container minimal-scroller"},t._l(t.processList,(function(e,r){return n("v-card",{key:r,staticClass:"pa-5 pa-md-8 mr-3 d-flex flex-column",attrs:{flat:"",tile:"","min-width":"300","max-width":"400"}},[n("div",{staticClass:"d-inline-flex align-end"},[n("p",{staticClass:"text-h4 mb-0 text-md-h3 font-weight-black primary--text mr-2"},[t._v("\n            "+t._s(e.itemNo)+"\n          ")]),t._v(" "),n("p",{staticClass:"mb-0 font-weight-bold"},[t._v("\n            "+t._s(e.title)+"\n          ")])]),t._v(" "),n("v-list",t._l(e.points,(function(e,r){return n("v-list-item",{key:r},[n("v-list-item-icon",[n("v-icon",{attrs:{color:"warning",size:"small"}},[t._v("\n                mdi-checkbox-blank-circle\n              ")])],1),t._v(" "),n("v-list-item-content",{staticClass:"pa-0"},[n("p",{staticClass:"mb-0 text-subtitle-2"},[t._v(t._s(e))])])],1)})),1)],1)})),1)])],1)}),[],!1,null,"5d3b3a44",null);e.default=component.exports;j()(component,{VCard:O.a,VContainer:C.a,VIcon:R.a,VList:k.a,VListItem:$.a,VListItemContent:P.a,VListItemIcon:S.a})},422:function(t,e,n){"use strict";n(420)},423:function(t,e,n){(e=n(10)(!1)).push([t.i,".components__listProcess .list-process-container[data-v-5d3b3a44]{padding:48px 24px;display:flex;flex-direction:column;justify-content:center;align-items:center}@media only screen and (min-width:960px){.components__listProcess .list-process-container[data-v-5d3b3a44]{padding:100px 24px}}.components__listProcess .slider-container[data-v-5d3b3a44]{overflow-y:auto;display:inline-flex;scroll-behavior:smooth}@media only screen and (min-width:600px)and (max-width:959px){.components__listProcess .slider-container[data-v-5d3b3a44]{width:90vw}}@media only screen and (min-width:960px)and (max-width:1263px){.components__listProcess .slider-container[data-v-5d3b3a44]{width:90vw}}@media only screen and (min-width:1264px){.components__listProcess .slider-container[data-v-5d3b3a44]{width:1200px}}@media only screen and (max-width:599px){.components__listProcess .slider-container[data-v-5d3b3a44]{width:90vw}}",""]),t.exports=e},424:function(t,e,n){var content=n(439);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("495bbf65",content,!0,{sourceMap:!1})},425:function(t,e,n){var content=n(441);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("de9a32a6",content,!0,{sourceMap:!1})},426:function(t,e,n){var content=n(443);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("a3b69612",content,!0,{sourceMap:!1})},427:function(t,e,n){var content=n(445);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("129a17fa",content,!0,{sourceMap:!1})},428:function(t,e,n){var content=n(447);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("d7cd20d6",content,!0,{sourceMap:!1})},429:function(t,e,n){var content=n(449);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("8605e8a6",content,!0,{sourceMap:!1})},430:function(t,e,n){var content=n(451);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("09c48f06",content,!0,{sourceMap:!1})},431:function(t,e,n){"use strict";n.r(e);n(127);var r=n(16),o=n(27),c=n(26),l=n(23),f=n(12),d=n(9),h=n(44);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"description",get:function(){return[{title:"Professional",description:"We are a team professional web developers. Our main goal is to provide you a seamless transition to a new web experience for you and your business."},{title:"Experience",description:"We have experience in numerous web technologies including E-commerce, cloud-based solutions and modern web application frameworks. We have the ability customize your solutions to your tiniest requirements."},{title:"Affordable",description:"We focus on providing solutions to small and medium businesses. Hence our pricing packages are set to ensure affordability for our prospects and clients."}]}}]),n}(h.Vue),x=y=m([h.Component],y),_=(n(438),n(43)),w=n(49),j=n.n(w),O=n(184),component=Object(_.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components__aboutUsContainer center-all",attrs:{id:"about-us"}},[n("div",{staticClass:"aboutUs"},[n("p",{staticClass:"text-h5 text-sm-h4 font-weight-bold primary--text text-left"},[t._v("\n      "+t._s(t.$t("label.getToKnowUs"))+"\n    ")]),t._v(" "),t._l(t.description,(function(e,r){return[n("div",{key:r,staticClass:"mb-2"},[n("div",{staticClass:"d-inline-flex align-end mb-3"},[n("v-icon",{staticClass:"mr-2",attrs:{large:"",color:"success darken-1"}},[t._v("\n            mdi-checkbox-marked-circle-outline\n          ")]),t._v(" "),n("p",{staticClass:"text-h6 mb-0"},[t._v(t._s(e.title))])],1),t._v(" "),n("p",{staticClass:"text-subtitle-2",staticStyle:{"max-width":"400px"}},[t._v("\n          "+t._s(e.description)+"\n        ")])])]}))],2)])}),[],!1,null,"aab6f45c",null);e.default=component.exports;j()(component,{VIcon:O.a})},432:function(t,e,n){"use strict";n.r(e);n(127);var r=n(16),o=n(27),c=n(26),l=n(23),f=n(12),d=n(9),h=n(44),v=n(435),m=n(436);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var x=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){Object(c.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"vectorSize",get:function(){return this.$vuetify.breakpoint.smAndDown?150:700}}]),n}(h.Vue),w=_=x([Object(h.Component)({components:{HeroMessage:v.default,ListServicesHero:m.default}})],_),j=(n(444),n(43)),O=n(49),C=n.n(O),R=n(154),component=Object(j.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"components__heroContainer center-all flex-column bg--gradient",attrs:{id:"hero-container"}},[e("hero-message"),this._v(" "),this.$vuetify.breakpoint.xsOnly?e("v-img",{staticClass:"mb-10",attrs:{src:"/vector-2.svg",width:"80%","max-width":"80%"}}):this._e(),this._v(" "),e("list-services-hero")],1)}),[],!1,null,"4c5c9d8e",null);e.default=component.exports;C()(component,{HeroMessage:n(435).default,ListServicesHero:n(436).default}),C()(component,{VImg:R.a})},433:function(t,e,n){"use strict";n.r(e);n(127);var r=n(16),o=n(27),c=n(26),l=n(23),f=n(12),d=n(9),h=n(44);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"services",get:function(){return[{title:this.$t("label.webDevelopment"),image:"/vector-6.svg",description:"We develop websites with a wide range of functionalities from a static informative website to a full web application with front and back end configurations. The tech stack for your website will be advised according to the requirements that you have."},{title:this.$t("label.ecommerce"),image:"/vector-3.svg",description:"We have experience with various modern e-commerce platforms like Shopify, Wix, EasyStore and many more. We provide setup, custom design, migrations and flow enhancement services for your new or current platforms. We are also an official Shopify Partner."},{title:this.$t("label.cloudSolutions"),image:"/cloud.svg",description:"We believe that cloud is the best way to store data for your business as it provides the best accessibility and security. We have a cloud storage service that will enable you to store your files and access it anywhere. Different from other service providers, our pricing packages are based on storage size instead of number of users. "}]}}]),n}(h.Vue),x=y=m([h.Component],y),_=(n(446),n(43)),w=n(49),j=n.n(w),O=n(401),C=n(400),R=n(452),component=Object(_.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components__listServices py-5 py-sm-10 center-all",attrs:{id:"our-services"}},[n("v-container",{staticClass:"service-container",attrs:{fluid:""}},[n("p",{staticClass:"mb-10 text-h5 text-sm-h4 font-weight-bold primary--text text-center"},[t._v("\n      "+t._s(t.$t("label.ourServices"))+"\n    ")]),t._v(" "),t._l(t.services,(function(e,r){return[n("v-card",{key:r,staticClass:"mb-4",attrs:{tile:"",flat:"",width:"100%"}},[n("v-card-title",{staticClass:"mb-0 text-h6 text-sm-h5"},[t._v(t._s(e.title))]),t._v(" "),n("v-card-subtitle",[t._v("\n          "+t._s(e.description)+"\n        ")])],1)]}))],2)],1)}),[],!1,null,"77f66812",null);e.default=component.exports;j()(component,{VCard:O.a,VCardSubtitle:C.a,VCardTitle:C.b,VContainer:R.a})},434:function(t,e,n){"use strict";n.r(e);n(127);var r=n(16),o=n(26),c=n(23),l=n(12),f=n(9),d=n(44),h=n(437);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(o.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(d.Vue),x=y=m([Object(d.Component)({components:{ListClients:h.default}})],y),_=(n(450),n(43)),w=n(49),j=n.n(w),O=n(411),C=n(452),R=n(154),k=n(412),component=Object(_.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"components__sliderLogo bg--gradient py-12"},[e("v-container",{staticClass:"logo-container"},[e("p",{staticClass:"text-h5 text-sm-h4 font-weight-bold primary--text text-center"},[this._v("\n      "+this._s(this.$t("label.techWeUse"))+"\n    ")]),this._v(" "),e("v-row",{staticClass:"ma-0"},[this._l(11,(function(t,n){return[e("v-col",{key:n,attrs:{cols:"4"}},[e("v-img",{attrs:{src:"/techList/"+t+".png",height:"100",width:"100",contain:""}})],1)]}))],2)],1),this._v(" "),e("list-clients")],1)}),[],!1,null,"9b8e17f6",null);e.default=component.exports;j()(component,{ListClients:n(437).default}),j()(component,{VCol:O.a,VContainer:C.a,VImg:R.a,VRow:k.a})},435:function(t,e,n){"use strict";n.r(e);n(127);var r=n(16),o=n(27),c=n(26),l=n(23),f=n(12),d=n(9),h=n(44);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"scrollDown",value:function(){var t=document.getElementById("about-us");this.$vuetify.goTo(t)}}]),n}(h.Vue),x=y=m([h.Component],y),_=(n(440),n(43)),w=n(49),j=n.n(w),O=n(255),C=n(184),component=Object(_.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components__heroMessage"},[n("div",{staticClass:"primary--text"},[n("p",{staticClass:"font-weight-black mb-0",class:t.$vuetify.breakpoint.mdAndUp?"text-h3":"text-h5"},[t._v("\n      "+t._s(t.$t("label.connecting"))+"\n    ")]),t._v(" "),n("p",{staticClass:"font-weight-bold mb-0",class:t.$vuetify.breakpoint.mdAndUp?"text-h4":null},[t._v("\n      "+t._s(t.$t("message.yourBusinessToTheWorld"))+"\n    ")]),t._v(" "),n("p",{staticClass:"secondary--text text-body-2 mb-10",staticStyle:{"max-width":"400px"}},[t._v("\n      "+t._s(t.$t("message.weOfferVariousItSolutions"))+"\n    ")])]),t._v(" "),n("v-btn",{staticClass:"mr-auto",attrs:{rounded:"",depressed:"",color:"primary",append:""},on:{click:function(e){return e.preventDefault(),t.scrollDown(e)}}},[t._v("\n    "+t._s(t.$t("label.moreAboutUs"))+"\n    "),n("v-icon",{staticClass:"ml-2"},[t._v("mdi-chevron-down")])],1)],1)}),[],!1,null,"7dcfab7e",null);e.default=component.exports;j()(component,{VBtn:O.a,VIcon:C.a})},436:function(t,e,n){"use strict";n.r(e);n(127);var r=n(16),o=n(27),c=n(26),l=n(23),f=n(12),d=n(9),h=n(44);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"services",get:function(){return[{title:"Web Services",description:"Static websites and full web applications development.",icon:"mdi-web"},{title:"E-Commerce",description:"Consultation, setup, and migration services for your online business.",icon:"mdi-cash-multiple"},{title:"Cloud Solutions",description:"Affordable cloud solutions for small to medium business needs.",icon:"mdi-cloud-outline"}]}}]),n}(h.Vue),x=y=m([h.Component],y),_=(n(442),n(43)),w=n(49),j=n.n(w),O=n(401),C=n(184),component=Object(_.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components__listServicesHero center-all flex-wrap"},[t._l(t.services,(function(e,r){return[n("v-card",{key:r,staticClass:"pa-5 mb-3 mx-2 text-center center-all",attrs:{rounded:"lg",width:"300",height:"180",color:"white"}},[n("div",{staticClass:"full-height d-flex justify-start align-start flex-column"},[n("v-icon",{staticClass:"mb-4",attrs:{color:"accent",large:""}},[t._v(t._s(e.icon))]),t._v(" "),n("p",{staticClass:"mb-0 text-left text-h6"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("p",{staticClass:"mb-0 text-left text-caption"},[t._v("\n          "+t._s(e.description)+"\n        ")])],1)])]}))],2)}),[],!1,null,"327dbb30",null);e.default=component.exports;j()(component,{VCard:O.a,VIcon:C.a})},437:function(t,e,n){"use strict";n.r(e);n(127);var r=n(16),o=n(27),c=n(26),l=n(23),f=n(12),d=n(9),h=n(44);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"goToClient",value:function(link){window.open(link)}},{key:"clients",get:function(){return[{name:"Studio Kittuco",logo:"/clients/kittuco.svg",link:"http://www.kittuco.com"},{name:"One Plus Two Thrift Store",logo:"/clients/opt.png",link:"http://www.oneplustwo.my"},{name:"DD Plastic Sdn Bhd",logo:"/clients/dd-plastic.png",link:"https://ddplastic.com.my"}]}}]),n}(h.Vue),x=y=m([h.Component],y),_=(n(448),n(43)),w=n(49),j=n.n(w),O=n(411),C=n(452),R=n(154),k=n(412),component=Object(_.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components__listClients"},[n("v-container",{staticClass:"client-container"},[n("p",{staticClass:"text-h5 text-sm-h4 font-weight-bold primary--text text-center"},[t._v("\n      "+t._s(t.$t("label.ourClients"))+"\n    ")]),t._v(" "),n("v-row",{staticClass:"ma-0"},[t._l(t.clients,(function(e,r){return[n("v-col",{key:r,attrs:{cols:"4"}},[n("v-img",{staticClass:"cursor-pointer",attrs:{src:e.logo,height:"150",width:"150",contain:""},on:{click:function(n){return n.preventDefault(),t.goToClient(e.link)}}})],1)]}))],2)],1)],1)}),[],!1,null,"73d43048",null);e.default=component.exports;j()(component,{VCol:O.a,VContainer:C.a,VImg:R.a,VRow:k.a})},438:function(t,e,n){"use strict";n(424)},439:function(t,e,n){(e=n(10)(!1)).push([t.i,".components__aboutUsContainer .aboutUs[data-v-aab6f45c]{background-image:url(/vector-4.svg);background-repeat:no-repeat;background-position:100%}@media only screen and (min-width:600px)and (max-width:959px){.components__aboutUsContainer .aboutUs[data-v-aab6f45c]{padding-left:48px;display:flex;justify-content:center;flex-direction:column;height:700px;width:100vw;background-size:400px}}@media only screen and (min-width:960px)and (max-width:1263px){.components__aboutUsContainer .aboutUs[data-v-aab6f45c]{padding-left:48px;display:flex;justify-content:center;flex-direction:column;height:700px;width:100vw;background-size:600px}}@media only screen and (min-width:1264px){.components__aboutUsContainer .aboutUs[data-v-aab6f45c]{display:flex;justify-content:center;flex-direction:column;height:700px;width:1200px;background-size:600px}}@media only screen and (max-width:599px){.components__aboutUsContainer .aboutUs[data-v-aab6f45c]{padding:0 34px;width:100vw;height:800px;margin-top:50px;margin-bottom:30px!important;background-position:bottom}}",""]),t.exports=e},440:function(t,e,n){"use strict";n(425)},441:function(t,e,n){(e=n(10)(!1)).push([t.i,".components__heroMessage[data-v-7dcfab7e]{background-image:url(/vector-2.svg);background-repeat:no-repeat;background-position:100%}@media only screen and (min-width:600px){.components__heroMessage[data-v-7dcfab7e]{display:flex;justify-content:center;flex-direction:column;width:700px;height:400px;background-size:300px}}@media only screen and (min-width:1264px){.components__heroMessage[data-v-7dcfab7e]{display:flex;justify-content:center;flex-direction:column;width:1000px;height:700px;background-size:550px}}@media only screen and (max-width:599px){.components__heroMessage[data-v-7dcfab7e]{max-width:300px;margin-top:100px;margin-bottom:30px!important;background-image:none!important}}",""]),t.exports=e},442:function(t,e,n){"use strict";n(426)},443:function(t,e,n){(e=n(10)(!1)).push([t.i,"@media only screen and (min-width:960px){.components__listServicesHero[data-v-327dbb30]{margin-bottom:120px!important}}@media only screen and (max-width:959px){.components__listServicesHero[data-v-327dbb30]{margin-bottom:50px!important}}",""]),t.exports=e},444:function(t,e,n){"use strict";n(427)},445:function(t,e,n){(e=n(10)(!1)).push([t.i,".components__heroContainer[data-v-4c5c9d8e]{width:100vw;min-height:600px!important}",""]),t.exports=e},446:function(t,e,n){"use strict";n(428)},447:function(t,e,n){(e=n(10)(!1)).push([t.i,".components__listServices .service-container[data-v-77f66812]{display:flex;justify-content:center;align-items:center;flex-direction:column}@media only screen and (min-width:600px)and (max-width:959px){.components__listServices .service-container[data-v-77f66812]{width:90vw}}@media only screen and (min-width:960px)and (max-width:1263px){.components__listServices .service-container[data-v-77f66812]{width:90vw}}@media only screen and (min-width:1264px){.components__listServices .service-container[data-v-77f66812]{padding:100px 0;width:1200px}}@media only screen and (max-width:599px){.components__listServices .service-container[data-v-77f66812]{padding:0 24px;width:100vw;margin-top:50px;margin-bottom:30px!important}}",""]),t.exports=e},448:function(t,e,n){"use strict";n(429)},449:function(t,e,n){(e=n(10)(!1)).push([t.i,".components__listClients .client-container[data-v-73d43048]{max-width:500px;padding:0 36px;margin:auto;display:flex;flex-direction:column}",""]),t.exports=e},450:function(t,e,n){"use strict";n(430)},451:function(t,e,n){(e=n(10)(!1)).push([t.i,".components__sliderLogo .logo-container[data-v-9b8e17f6]{max-width:500px;padding:0 36px;margin:auto;display:flex;flex-direction:column}",""]),t.exports=e},452:function(t,e,n){"use strict";n(24),n(65),n(66),n(67),n(257),n(193),n(81),n(68);var r=n(1);var o,c=n(52);e.a=(o="container",r.default.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},453:function(t,e,n){"use strict";n.r(e);n(127);var r=n(16),o=n(26),c=n(23),l=n(12),f=n(9),d=n(44),h=n(431);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(o.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(d.Vue),x=y=m([d.Component],y),_=n(43),w=n(49),j=n.n(w),O=n(154),component=Object(_.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"components__featuredServiceItem full-width"},[e("v-img",{attrs:{src:"https://source.unsplash.com/weekly","aspect-ratio":"6"}})],1)}),[],!1,null,null,null),C=component.exports;j()(component,{VImg:O.a});var R=n(432),k=n(421),$=n(433),P=n(434);function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var D=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},V=function(t){Object(o.a)(n,t);var e=S(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(d.Vue),L=V=D([Object(d.Component)({components:{HeroContainer:R.default,AboutUsContainer:h.default,FeaturedServiceItem:C,SliderLogo:P.default,ListProcess:k.default,ListServices:$.default},head:function(){return{title:this.$t("pageTitle.home")}}})],V),U=Object(_.a)(L,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pages__index"},[e("hero-container"),this._v(" "),e("about-us-container"),this._v(" "),e("list-process"),this._v(" "),e("list-services"),this._v(" "),e("slider-logo")],1)}),[],!1,null,null,null);e.default=U.exports;installComponents(U,{HeroContainer:n(432).default,AboutUsContainer:n(431).default,ListProcess:n(421).default,ListServices:n(433).default,SliderLogo:n(434).default})}}]);