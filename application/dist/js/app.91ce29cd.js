(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],u=0,v=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},o=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0a09":function(t,e,a){"use strict";var n=a("1168"),i=a.n(n);i.a},1168:function(t,e,a){},"3e9a":function(t,e,a){"use strict";var n=a("ad5c"),i=a.n(n);i.a},4960:function(t,e,a){"use strict";var n=a("6a2a"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("router-view")],1)},o=[],r={name:"App",components:{}},s=r,c=a("2877"),l=a("6544"),d=a.n(l),u=a("7496"),v=Object(c["a"])(s,i,o,!1,null,null,null),f=v.exports;d()(v,{VApp:u["a"]});var p=a("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var m=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin"},[a("Panel"),a("v-divider")],1)},b=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",[a("v-app",[a("v-main",[a("AppHeader"),a("AdminSidebar"),a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8"}},[[a("v-data-table",{staticClass:"main--table elevation-1",attrs:{headers:t.headers,items:t.books,"sort-by":"id"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[t._v("Libros")]),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"success",dark:""}},"v-btn",i,!1),n),[a("v-icon",{attrs:{left:""}},[t._v(" mdi-plus ")]),t._v(" Nuevo Registro ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Nombre"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancelar ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Guardar ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v("¿Estás seguro de que deseas borrar este elemento?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancelar")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("Aceptar")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var n=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"blue"},on:{click:function(e){return t.editItem(n)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:"",color:"red"},on:{click:function(e){return t.deleteItem(n)}}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v(" Reiniciar ")])]},proxy:!0}])})]],2)],1)],1),a("AdminBottom")],1)],1)],1)],1)},k=[],x=(a("c975"),a("a434"),a("d3b7"),a("ac1f"),a("841c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"sidebar mx-auto",attrs:{height:"94%",width:"200"}},[a("v-navigation-drawer",{staticClass:"darken-4",attrs:{color:"#254394",dark:"",permanent:""}},[a("v-list",t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)}),_=[],y={data:function(){return{items:[{title:"Usuarios",icon:"mdi-account-group"},{title:"Libros",icon:"mdi-bookshelf"},{title:"Categorias",icon:"mdi-shape"}]}}},I=y,C=(a("3e9a"),a("b0af")),w=a("132d"),V=a("8860"),O=a("da13"),j=a("5d23"),T=a("34c3"),S=a("f774"),A=Object(c["a"])(I,x,_,!1,null,null,null),D=A.exports;d()(A,{VCard:C["a"],VIcon:w["a"],VList:V["a"],VListItem:O["a"],VListItemContent:j["a"],VListItemIcon:T["a"],VListItemTitle:j["b"],VNavigationDrawer:S["a"]});var $=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-bottom-navigation",{staticClass:"bottomNavigation",attrs:{"background-color":t.color,dark:"",shift:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("v-btn",{staticClass:"icon--bottom"},[a("span",[t._v("Usuarios")]),a("br"),a("v-icon",[t._v("mdi-account-group")])],1),a("v-btn",{staticClass:"icon--bottom"},[a("span",[t._v("libros")]),a("br"),a("v-icon",[t._v("mdi-bookshelf")])],1),a("v-btn",{staticClass:"icon--bottom"},[a("span",[t._v("Categorias")]),a("br"),a("v-icon",[t._v("mdi-shape")])],1)],1)},E=[],N={data:function(){return{value:1}},computed:{color:function(){switch(this.value){case 0:return"indigo darken-4";case 1:return"deep-purple darken-4";case 2:return"blue darken-4";default:return"blue-grey"}}}},P=N,B=(a("4960"),a("b81c")),F=a("8336"),L=Object(c["a"])(P,$,E,!1,null,null,null),M=L.exports;d()(L,{VBottomNavigation:B["a"],VBtn:F["a"],VIcon:w["a"]});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header--principal"},[a("v-app-bar",{staticClass:"mx-auto",attrs:{height:"60",color:"primary",dark:"",permanent:""}},[a("v-toolbar-title",{staticClass:"text-h5"},[a("strong",[t._v("SICOBO")])]),a("v-spacer"),a("v-switch",{staticClass:"mt-5",attrs:{color:"#FFFFFF"},model:{value:t.$vuetify.theme.dark,callback:function(e){t.$set(t.$vuetify.theme,"dark",e)},expression:"$vuetify.theme.dark"}})],1)],1)},J=[],z={},H=z,U=(a("0a09"),a("40dc")),q=a("2fa4"),G=a("b73d"),K=a("2a7f"),Q=Object(c["a"])(H,R,J,!1,null,null,null),W=Q.exports;d()(Q,{VAppBar:U["a"],VSpacer:q["a"],VSwitch:G["a"],VToolbarTitle:K["a"]});var X={props:{source:String},components:{AdminSidebar:D,AdminBottom:M,AppHeader:W},data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"Identificador",align:"start",sortable:!0,value:"id"},{text:"Nombre",value:"name"},{text:"Acciones",value:"actions",sortable:!1}],desserts:[],books:[],id:0,editedIndex:-1,editedItem:{id:"",name:""},defaultItem:{id:"",name:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Nuevo Registro":"Editar Registro"}},watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},created:function(){this.initialize(),this.search()},methods:{initialize:function(){this.desserts=[{name:"Papas",calories:159,fat:6,carbs:24,protein:4}]},search:function(){var t=this;fetch("http://localhost:8080/api/books",{credentials:"same-origin"}).then((function(t){return t.json()})).then((function(e){return t.books=e}))},editItem:function(t){this.editedIndex=this.books.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){this.desserts.splice(this.editedIndex,1),fetch("http://localhost:8080/api/books/".concat(this.editedItem.id),{credentials:"same-origin",method:"DELETE"}),this.closeDelete(),location.reload()},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){this.editedIndex>-1?(Object.assign(this.desserts[this.editedIndex],this.editedItem),fetch("http://localhost:8080/api/books/".concat(this.editedItem.id),{method:"PUT",body:JSON.stringify(this.editedItem),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}))):fetch("http://localhost:8080/api/books/addBook",{method:"POST",body:JSON.stringify(this.editedItem),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})),this.close(),location.reload()}}},Y=X,Z=(a("cedf"),a("99d9")),tt=a("62ad"),et=a("a523"),at=a("8fea"),nt=a("169a"),it=a("f6c4"),ot=a("0fd9"),rt=a("8654"),st=a("71d9"),ct=Object(c["a"])(Y,g,k,!1,null,null,null),lt=ct.exports;d()(ct,{VApp:u["a"],VBtn:F["a"],VCard:C["a"],VCardActions:Z["a"],VCardText:Z["b"],VCardTitle:Z["c"],VCol:tt["a"],VContainer:et["a"],VDataTable:at["a"],VDialog:nt["a"],VIcon:w["a"],VMain:it["a"],VRow:ot["a"],VSpacer:q["a"],VTextField:rt["a"],VToolbar:st["a"],VToolbarTitle:K["a"]});var dt={name:"Admin",components:{Panel:lt}},ut=dt,vt=a("ce7e"),ft=Object(c["a"])(ut,h,b,!1,null,"889ecb34",null),pt=ft.exports;d()(ft,{VDivider:vt["a"]}),n["a"].use(m["a"]);var mt=[{path:"/",name:"Home",component:pt}],ht=new m["a"]({mode:"history",base:"/",routes:mt}),bt=ht,gt=a("2f62");n["a"].use(gt["a"]);var kt=new gt["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),xt=a("f309");n["a"].use(xt["a"]);var _t=new xt["a"]({}),yt=a("bc3a"),It=a.n(yt),Ct=a("2106"),wt=a.n(Ct);n["a"].use(wt.a,It.a),n["a"].config.productionTip=!1,new n["a"]({router:bt,store:kt,vuetify:_t,render:function(t){return t(f)}}).$mount("#app")},"6a2a":function(t,e,a){},ad5c:function(t,e,a){},cedf:function(t,e,a){"use strict";var n=a("e53d"),i=a.n(n);i.a},e53d:function(t,e,a){}});
//# sourceMappingURL=app.91ce29cd.js.map