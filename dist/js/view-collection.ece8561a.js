(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-collection"],{"48a4":function(t,e,n){},"4a0e":function(t,e,n){"use strict";var s=n("91ab"),o=n.n(s);o.a},"8ba2":function(t,e,n){"use strict";var s=n("48a4"),o=n.n(s);o.a},"91ab":function(t,e,n){},b126:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Icon",t._g({staticClass:"icon-button",attrs:{name:t.name}},t.$listeners),[t._t("default")],2)},o=[],i=n("cdae"),c={components:{Icon:i["a"]},props:{name:String}},a=c,r=(n("e4aa"),n("2877")),l=Object(r["a"])(a,s,o,!1,null,null,null);e["a"]=l.exports},b43e:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("div",{staticClass:"heading-wrap"},[t._t("default"),n("div",{staticClass:"heading-buttons"},[t._t("buttons")],2)],2),t.message?n("Message",{attrs:{text:t.message}}):t._e()],1)},o=[],i=n("0f7d"),c={props:{message:String},components:{Message:i["a"]}},a=c,r=(n("4a0e"),n("2877")),l=Object(r["a"])(a,s,o,!1,null,null,null);e["a"]=l.exports},dfb6:function(t,e,n){},e4aa:function(t,e,n){"use strict";var s=n("dfb6"),o=n.n(s);o.a},efa3:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view view-collection"},[n("Heading",{attrs:{message:t.message}},[n("span",[t._v(t._s(t.content.heading))]),n("template",{slot:"buttons"},[n("IconButton",{attrs:{name:"share"},on:{click:function(e){return t.share()}}}),n("IconButton",{attrs:{name:"print"}}),n("IconButton",{attrs:{name:"close"},on:{click:function(e){return t.close()}}})],1)],2),n("Collection"),n("ButtonsBar",[n("a",{attrs:{slot:"right"},on:{click:t.checkout},slot:"right"},[t._v(t._s(t.content.checkout))])]),n("div",{staticClass:"view-collection-invert"})],1)},o=[],i=(n("b0c0"),n("96cf"),n("1da1")),c=n("ed08"),a=n("b126"),r=n("e002"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collection"},t._l(t.collection,(function(t){return n("CollectionItem",{key:t.id,attrs:{id:t.id}})})),1)},u=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"collection-item"},[n("Icon",{staticClass:"collection-icon",attrs:{name:"checkbox-active"}}),n("div",{staticClass:"collection-content"},[n("div",{staticClass:"collection-title"},[t._v(t._s(t.position.title))]),n("div",{staticClass:"collection-note"},[n("Icon",{attrs:{name:"note"}}),n("textarea",{attrs:{placeholder:t.content.add_note,rows:"3"},domProps:{value:t.note},on:{input:function(e){return t.setDraft("note",e.target.value)}}})],1)])],1)},f=[],m=n("cdae"),h=n("c678"),p={mixins:[h["a"]],components:{Icon:m["a"]},props:{id:{type:String,required:!0}},computed:{item:function(){return this.$store.getters["collection/item"](this.id)||{}},position:function(){return this.item.position||{}},draft:function(){return this.item.draft||{}},note:function(){var t;return null!==(t=this.draft.note)&&void 0!==t?t:this.item.note}},mounted:function(){this.setDraft("note",this.item.note)},methods:{setDraft:function(t,e){this.$store.commit("collection/setDraft",{id:this.id,key:t,value:e})}}},v=p,g=(n("8ba2"),n("2877")),b=Object(g["a"])(v,d,f,!1,null,null,null),_=b.exports,w={components:{CollectionItem:_},computed:{collection:function(){return this.$store.getters["collection/items"]}}},C=w,I=Object(g["a"])(C,l,u,!1,null,null,null),$=I.exports,k=n("b43e"),x=n("393a"),B={mixins:[r["a"]],components:{Collection:$,Heading:k["a"],ButtonsBar:x["a"],IconButton:a["a"]},provide:function(){return{contentId:this.contentId}},data:function(){return{contentId:"collection"}},computed:{collection:function(){return this.$store.getters["collection/items"]},user:function(){return this.$store.getters["users/loggedIn"]},messageData:function(){return{"user-id":Object(c["g"])(this.user.name)}}},mounted:function(){this.$route.params.sign&&this.$store.dispatch("sign")},methods:{checkout:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("collection/publish");case 2:t.$router.push({name:"Positions",params:{messageId:"checkout_successful"}});case 3:case"end":return e.stop()}}),e)})))()},share:function(){this.showMessage("share")},close:function(){this.$router.push({name:"Positions"})}}},j=B,O=Object(g["a"])(j,s,o,!1,null,null,null);e["default"]=O.exports}}]);
//# sourceMappingURL=view-collection.ece8561a.js.map