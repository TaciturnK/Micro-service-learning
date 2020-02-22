(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66d187da"],{"0826":function(e,s,i){},"8ee8":function(e,s,i){"use strict";var n=function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",[i("div",{staticStyle:{"margin-bottom":"15px"}},[e._v("Your roles: "+e._s(e.roles))]),e._v("\n  Switch roles:\n  "),i("el-radio-group",{model:{value:e.switchRoles,callback:function(s){e.switchRoles=s},expression:"switchRoles"}},[i("el-radio-button",{attrs:{label:"editor"}}),e._v(" "),i("el-radio-button",{attrs:{label:"admin"}})],1)],1)},t=[],a={computed:{roles:function(){return this.$store.getters.roles},switchRoles:{get:function(){return this.roles[0]},set:function(e){var s=this;this.$store.dispatch("user/changeRoles",e).then((function(){s.$emit("change")}))}}}},r=a,o=i("2877"),l=Object(o["a"])(r,n,t,!1,null,null,null);s["a"]=l.exports},a99f:function(e,s,i){"use strict";i.r(s);var n=function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",{staticClass:"app-container"},[i("switch-roles",{on:{change:e.handleRolesChange}}),e._v(" "),i("div",{key:e.key,staticStyle:{"margin-top":"30px"}},[i("div",[i("span",{directives:[{name:"permission",rawName:"v-permission",value:["admin"],expression:"['admin']"}],staticClass:"permission-alert"},[e._v("\n        Only\n        "),i("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("admin")]),e._v(" can see\n        this\n      ")],1),e._v(" "),i("el-tag",{directives:[{name:"permission",rawName:"v-permission",value:["admin"],expression:"['admin']"}],staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v("\n        v-permission=\"['admin']\"\n      ")])],1),e._v(" "),i("div",[i("span",{directives:[{name:"permission",rawName:"v-permission",value:["editor"],expression:"['editor']"}],staticClass:"permission-alert"},[e._v("\n        Only\n        "),i("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("editor")]),e._v(" can see\n        this\n      ")],1),e._v(" "),i("el-tag",{directives:[{name:"permission",rawName:"v-permission",value:["editor"],expression:"['editor']"}],staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v("\n        v-permission=\"['editor']\"\n      ")])],1),e._v(" "),i("div",[i("span",{directives:[{name:"permission",rawName:"v-permission",value:["admin","editor"],expression:"['admin', 'editor']"}],staticClass:"permission-alert"},[e._v("\n        Both\n        "),i("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("admin")]),e._v(" and\n        "),i("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[e._v("editor")]),e._v(" can see\n        this\n      ")],1),e._v(" "),i("el-tag",{directives:[{name:"permission",rawName:"v-permission",value:["admin","editor"],expression:"['admin', 'editor']"}],staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v("\n        v-permission=\"['admin','editor']\"\n      ")])],1)]),e._v(" "),i("div",{key:"checkPermission"+e.key,staticStyle:{"margin-top":"60px"}},[e._m(0),e._v(" "),i("el-tabs",{staticStyle:{width:"550px"},attrs:{type:"border-card"}},[e.checkPermission(["admin"])?i("el-tab-pane",{attrs:{label:"Admin"}},[e._v("\n        Admin can see this\n        "),i("el-tag",{staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v("\n          v-if=\"checkPermission(['admin'])\"\n        ")])],1):e._e(),e._v(" "),e.checkPermission(["editor"])?i("el-tab-pane",{attrs:{label:"Editor"}},[e._v("\n        Editor can see this\n        "),i("el-tag",{staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v("\n          v-if=\"checkPermission(['editor'])\"\n        ")])],1):e._e(),e._v(" "),e.checkPermission(["admin","editor"])?i("el-tab-pane",{attrs:{label:"Admin-OR-Editor"}},[e._v("\n        Both admin or editor can see this\n        "),i("el-tag",{staticClass:"permission-sourceCode",attrs:{type:"info"}},[e._v("\n          v-if=\"checkPermission(['admin','editor'])\"\n        ")])],1):e._e()],1)],1)],1)},t=[function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("aside",[e._v("\n      In some cases, using v-permission will have no effect. For example:\n      Element-UI's Tab component or el-table-column and other scenes that\n      dynamically render dom. You can only do this with v-if.\n      "),i("br"),e._v("\n      e.g.\n    ")])}],a=(i("6762"),i("2fdb"),i("4360")),r={inserted:function(e,s,i){var n=s.value,t=a["a"].getters&&a["a"].getters.roles;if(!(n&&n instanceof Array&&n.length>0))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var r=n,o=t.some((function(e){return r.includes(e)}));o||e.parentNode&&e.parentNode.removeChild(e)}},o=function(e){e.directive("permission",r)};window.Vue&&(window["permission"]=r,Vue.use(o)),r.install=o;var l=r;function c(e){if(e&&e instanceof Array&&e.length>0){var s=a["a"].getters&&a["a"].getters.roles,i=e,n=s.some((function(e){return i.includes(e)}));return!!n}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}var d=i("8ee8"),m={name:"DirectivePermission",components:{SwitchRoles:d["a"]},directives:{permission:l},data:function(){return{key:1}},methods:{checkPermission:c,handleRolesChange:function(){this.key++}}},v=m,p=(i("da28"),i("2877")),u=Object(p["a"])(v,n,t,!1,null,"f67b0b78",null);s["default"]=u.exports},da28:function(e,s,i){"use strict";var n=i("0826"),t=i.n(n);t.a}}]);