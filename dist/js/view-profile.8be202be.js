(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-profile"],{"4a0e":function(t,e,s){"use strict";var n=s("91ab"),i=s.n(n);i.a},"91ab":function(t,e,s){},"98a5":function(t,e,s){},b43e:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"heading"},[s("div",{staticClass:"heading-wrap"},[t._t("default"),s("div",{staticClass:"heading-buttons"},[t._t("buttons")],2)],2),t.message?s("Message",{attrs:{text:t.message}}):t._e()],1)},i=[],o=s("0f7d"),r={props:{message:String},components:{Message:o["a"]}},a=r,c=(s("4a0e"),s("2877")),l=Object(c["a"])(a,n,i,!1,null,null,null);e["a"]=l.exports},b903:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"view view-profile"},[s("Heading",{attrs:{message:t.message}},[t._v(t._s(t.heading))]),s("ProfileCollection",{attrs:{userId:t.userId}})],1)},i=[],o=(s("b0c0"),s("ed08")),r=s("e002"),a=s("b43e"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile-collection"},t._l(t.collection,(function(e,n){return s("ProfileCollectionItem",t._b({key:e.id,attrs:{positionId:n}},"ProfileCollectionItem",e,!1))})),1)},l=[],u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"collection-item"},[s("Icon",{staticClass:"collection-icon",attrs:{name:"checkmark"}}),s("div",{staticClass:"collection-content"},[s("div",{staticClass:"collection-title"},[t._v(t._s(t.position.title))]),t.note?s("div",{staticClass:"collection-note"},[s("Icon",{attrs:{name:"note"}}),s("div",[t._v(t._s(t.note))])],1):t._e()])],1)},d=[],p=s("cdae"),f=s("c678"),m={mixins:[f["a"]],components:{Icon:p["a"]},props:{note:String,positionId:String},computed:{position:function(){return this.$store.getters["positions/item"](this.positionId)||{}}}},v=m,h=(s("ed73"),s("2877")),g=Object(h["a"])(v,u,d,!1,null,null,null),_=g.exports,b={components:{ProfileCollectionItem:_},props:{userId:String},computed:{user:function(){return this.$store.getters["users/item"](this.userId)},collection:function(){var t;return(null===(t=this.user)||void 0===t?void 0:t.collection)||{}}}},I=b,C=Object(h["a"])(I,c,l,!1,null,null,null),w=C.exports,$={mixins:[r["a"]],components:{Heading:a["a"],ProfileCollection:w},data:function(){return{contentId:"profile"}},computed:{userId:function(){return this.$route.params.userId},user:function(){return this.$store.getters["users/item"](this.userId)||{}},heading:function(){return Object(o["e"])(this.content.heading,{"user-name":this.user.name})},messageData:function(){var t=this.user,e=t.name,s=t.website;return{"user-name":e,"user-website-link":"".concat(s)}}},created:function(){this.$store.dispatch("users/load"),this.$store.dispatch("positions/load")}},x=$,k=Object(h["a"])(x,n,i,!1,null,null,null);e["default"]=k.exports},ed73:function(t,e,s){"use strict";var n=s("98a5"),i=s.n(n);i.a}}]);
//# sourceMappingURL=view-profile.8be202be.js.map