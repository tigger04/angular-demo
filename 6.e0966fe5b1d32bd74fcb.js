(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Yj9t:function(t,n,e){"use strict";e.r(n),e.d(n,"authRoutes",function(){return v}),e.d(n,"AuthModule",function(){return O});var r,o=e("tyNb"),i=e("ofXK"),c=e("4Fw/"),a=e("fXoL"),b=(r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)});function u(t,n){if(1&t){var e=a.Pb();a.Ob(0,"div",6),a.Ob(1,"h5"),a.tc(2),a.Nb(),a.Ob(3,"button",7),a.Vb("click",function(){return a.mc(e),a.Xb().service.logout()}),a.Lb(4,"span",8),a.tc(5," Logout"),a.Nb(),a.Nb()}if(2&t){var r=a.Xb();a.yb(2),a.vc("You are logged in as ",r.service.user.data.email,"")}}function s(t,n){1&t&&(a.Ob(0,"div",9),a.Ob(1,"div",10),a.Ob(2,"ul",11),a.Ob(3,"li",12),a.Ob(4,"a",13),a.tc(5,"Login"),a.Nb(),a.Nb(),a.Ob(6,"li",12),a.Ob(7,"a",14),a.tc(8,"Register"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(9,"div",15),a.Lb(10,"router-outlet"),a.Nb(),a.Nb())}var f=function(t){function n(n){var e=t.call(this)||this;return e.service=n,e}return b(n,t),n.\u0275fac=function(t){return new(t||n)(a.Kb(c.f))},n.\u0275cmp=a.Eb({type:n,selectors:[["app-auth"]],features:[a.vb],decls:13,vars:2,consts:[["href","https://github.com/formio/angular-formio/wiki/User-Authentication",1,"btn","btn-primary"],[1,"fa","fa-book"],[1,"row"],[1,"col-6","offset-3"],["class","card bg-light p-3 text-center",4,"ngIf"],["class","card card-primary panel panel-default",4,"ngIf"],[1,"card","bg-light","p-3","text-center"],[1,"btn","btn-primary",3,"click"],[1,"fa","fa-sign-out"],[1,"card","card-primary","panel","panel-default"],[1,"card-header","panel-heading"],[1,"nav","nav-tabs","card-header-tabs"],["role","presentation","routerLinkActive","active",1,"nav-item"],["routerLink","login","routerLinkActive","active",1,"nav-link"],["routerLink","register","routerLinkActive","active",1,"nav-link"],[1,"card-body","panel-body"]],template:function(t,n){1&t&&(a.Ob(0,"h3"),a.tc(1,"Authentication"),a.Nb(),a.Ob(2,"p"),a.tc(3,"Authentication to your application is provided with the "),a.Ob(4,"code"),a.tc(5,"FormioAuthModule"),a.Nb(),a.Nb(),a.Ob(6,"a",0),a.Lb(7,"span",1),a.tc(8," Authentication Documentation"),a.Nb(),a.Ob(9,"div",2),a.Ob(10,"div",3),a.rc(11,u,6,1,"div",4),a.rc(12,s,11,0,"div",5),a.Nb(),a.Nb()),2&t&&(a.yb(11),a.cc("ngIf",n.service.authenticated),a.yb(1),a.cc("ngIf",!n.service.authenticated))},directives:[i.k,o.d,o.e,o.g],styles:[""]}),n}(c.b),l=e("oiZh"),p=function(){var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(n,e)};return function(n,e){function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),d=function(t){function n(n){var e=t.call(this,n)||this;return e.service=n,e}return p(n,t),n.\u0275fac=function(t){return new(t||n)(a.Kb(c.f))},n.\u0275cmp=a.Eb({type:n,selectors:[["app-login"]],features:[a.vb],decls:13,vars:1,consts:[[1,"alert","alert-info"],[3,"src","submit"]],template:function(t,n){1&t&&(a.Ob(0,"div",0),a.Ob(1,"p"),a.tc(2,"You can use the following to login."),a.Nb(),a.Ob(3,"ul"),a.Ob(4,"li"),a.Ob(5,"strong"),a.tc(6,"Email:"),a.Nb(),a.tc(7," demo@form.io"),a.Nb(),a.Ob(8,"li"),a.Ob(9,"strong"),a.tc(10,"Password:"),a.Nb(),a.tc(11," testing"),a.Nb(),a.Nb(),a.Nb(),a.Ob(12,"formio",1),a.Vb("submit",function(t){return n.service.onLoginSubmit(t)}),a.Nb()),2&t&&(a.yb(12),a.cc("src",n.service.loginForm))},directives:[l.e],styles:[""]}),n}(c.d),v=Object(c.e)({auth:f,login:d}),O=function(){function t(){}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(n){return new(n||t)},imports:[[i.b,l.g,c.a,o.f.forChild(v)]]}),t}()}}]);