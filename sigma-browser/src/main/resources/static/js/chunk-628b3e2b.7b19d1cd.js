(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-628b3e2b"],{1838:function(e,t,s){},2017:function(e,t,s){"use strict";var r=s("b12d"),n=s.n(r);n.a},"9b23":function(e,t,s){"use strict";var r=s("1838"),n=s.n(r);n.a},"9ed6":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",class:e.registerType?"animated zoomInRight":"animated zoomInLeft",attrs:{model:e.loginForm,rules:e.loginRules,"label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("Sigma "+e._s(e.todoInfo))])]),e._v(" "),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),s("el-input",{ref:"username",attrs:{placeholder:e.registerType?"请输入用户名":"Username",name:"username",type:"text",tabindex:"1",autocomplete:"off"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:e.registerType?"请输入密码（不少于6位）":"Password",name:"password",tabindex:"2",autocomplete:"new-password"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("svg-icon",{attrs:{"icon-class":e.registerType?"eye":"eye-open"}})],1)],1),e._v(" "),s("el-button",{staticStyle:{width:"100%","margin-bottom":"10px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("\n      "+e._s(e.todoInfo)+"\n    ")]),e._v(" "),s("div",{class:[e.registerType?"center":"","register"]},[e.registerType?[s("span",{staticClass:"clcikRegister",on:{click:e.handleRegister}},[e._v("已有账号登录")])]:[e._v("\n        没有账号？\n        "),s("span",{staticClass:"clcikRegister",on:{click:e.handleRegister}},[e._v("注册")]),e._v(" "),s("a",{staticClass:"right clcikRegister",attrs:{href:"#"}},[e._v("忘记密码")])]],2)],1)],1)},n=[],o=s("c24f"),i=s("5f87"),a={name:"Login",data:function(){var e=this,t=function(t,s,r){s.length<4?r(new Error("请输入用户名")):"Register"===e.todoInfo?(Object(o["i"])({value:e.loginForm.username}),r()):r()},s=function(e,t,s){t.length<4?s(new Error("请输入用户密码（不得少于6位）")):s()};return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:s}]},loading:!1,passwordType:"password",redirect:void 0,todoInfo:"Login",registerModel:{avatar:"string",birthday:"2019-08-03T06:33:34.161Z",email:"string",enabled:!0,gender:0,nickname:"string",password:"",mobile:"1360312313",roleDTOS:[{code:"ROLE_USER"}],username:""}}},computed:{registerType:function(){return"Register"===this.todoInfo}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;if(e.loading=!0,e.registerType){var s=Object.assign(e.registerModel,e.loginForm);Object(o["h"])(s).then((function(t){e.$message({message:"恭喜你，注册成功！快去登录吧！",type:"success"}),e.todoInfo="Login",e.loading=!1}))}else Object(o["e"])(e.loginForm).then((function(t){Object(i["c"])(t.data.principal.password),e.$router.push({path:e.redirect||"/"}),e.loading=!1})).catch((function(t){e.loading=!1}))}))},handleRegister:function(){this.todoInfo=this.registerType?"Login":"Register",this.$refs["loginForm"].resetFields()}}},l=a,c=(s("2017"),s("9b23"),s("2877")),d=Object(c["a"])(l,r,n,!1,null,"6540b064",null);t["default"]=d.exports},b12d:function(e,t,s){}}]);