(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{135:function(e,t,n){e.exports={gallery:"Gallery_gallery__3bepQ",gallery__img:"Gallery_gallery__img__36WGm"}},143:function(e,t,n){},144:function(e,t,n){},147:function(e,t){},152:function(e,t){},154:function(e,t){},164:function(e,t){},166:function(e,t){},193:function(e,t){},195:function(e,t){},196:function(e,t){},201:function(e,t){},203:function(e,t){},222:function(e,t){},234:function(e,t){},237:function(e,t){},246:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(38),r=n(53),a=n.n(r),i=(n(143),n(2)),l=(n(144),n(133)),o=n.n(l),_=n(5),u=n.n(_),j=n(10),h=n(8),b=n(44),d=n.n(b),p=n.p+"static/media/Unsplash.42d1254f.svg",f=n(81),m=n.n(f),x=n(3),O=function(){return Object(x.jsx)("form",{className:m.a.form,children:Object(x.jsx)("input",{type:"search",className:m.a.input,placeholder:"Search high-resolution images"})})},v=function(){return Object(x.jsx)("header",{className:d.a.header,children:Object(x.jsxs)("div",{className:d.a.container,children:[Object(x.jsx)("div",{children:Object(x.jsx)(s.b,{to:"/",className:d.a.img__container,children:Object(x.jsx)("img",{src:p,className:d.a.img,alt:"Unsplash home link"})})}),Object(x.jsx)(O,{})]})})},g=n(45),y=n.n(g),N=n(82),S=n.n(N),k=function(){return Object(x.jsx)("form",{className:S.a.form,children:Object(x.jsx)("input",{type:"search",className:S.a.input,placeholder:"Search high-resolution images"})})},w=function(){return Object(x.jsx)("div",{className:y.a.search,children:Object(x.jsxs)("div",{className:y.a.search__content,children:[Object(x.jsx)("div",{children:Object(x.jsx)("h1",{className:y.a.search__title,children:"Unsplash"})}),Object(x.jsx)("div",{className:y.a.search__description,children:Object(x.jsxs)("p",{children:["The internet's source for visuals.",Object(x.jsx)("br",{}),"Powered by creators everywhere."]})}),Object(x.jsx)(k,{})]})})},E=n(7),G=n(134),H=n.n(G),I=n(30),T=n.n(I),R=function(e){var t=e.options,n=e.selectedOption,s=e.onChange,r=Object(c.useState)(!1),a=Object(h.a)(r,2),i=a[0],l=a[1],o=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=function(e){var t;!(null===(t=o.current)||void 0===t?void 0:t.contains(e.target))&&l(!1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]),Object(x.jsxs)("div",{ref:o,className:T.a.select,children:[Object(x.jsx)("button",{type:"button",className:T.a.select__button,onClick:function(){l((function(e){return!e}))},children:n.label}),Object(x.jsx)("ul",{className:H()(T.a.select__list,Object(E.a)({},T.a["select__list--open"],i)),children:t.map((function(e){return Object(x.jsx)("li",{className:T.a.select__item,onClick:function(){return function(e){s(e),l(!1)}(e)},children:e.label},e.value)}))})]})},A=n(83),C=n.n(A),J="https://api.unsplash.com/";var U=function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"};return t&&(n.body=JSON.stringify(t),n.headers={"Content-Type":"application/json; charset=UTF-8"}),fetch(J+e,n).then((function(e){if(!e.ok)throw new Error;return e.json()}))}(e)},W="photos/random?client_id=".concat("A0HW69BTG2A3ATGz32VP3wAK_X8JsVygQhRA5ZTcVIE"),D=n(258),F=n(135),K=n.n(F),P=function(e){var t=e.photos,n=e.column;return Object(x.jsx)("div",{className:K.a.gallery,children:Object(x.jsx)(D.a,{columns:n.value,spacing:2,children:t.map((function(e){return Object(x.jsx)("img",{src:e.urls.regular,alt:e.alt_description},e.slug)}))})})},Z=function(){var e=[{value:5,label:"5"},{value:3,label:"3"}],t=Object(c.useState)([]),n=Object(h.a)(t,2),s=n[0],r=n[1],a=Object(c.useState)(e[0]),i=Object(h.a)(a,2),l=i[0],o=i[1],_=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U("".concat(W,"&count=10"));case 3:t=e.sent,r(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){_()}),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)(w,{}),Object(x.jsx)("div",{className:C.a.select__container,children:Object(x.jsx)("div",{className:C.a.select__content,children:Object(x.jsx)(R,{selectedOption:l,options:e,onChange:function(e){o(e)}})})}),Object(x.jsx)(P,{column:l,photos:s})]})},B=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("h2",{children:"Explore"})})},L=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("h2",{children:"Page Not Found"})})};o.a.config();var Q=function(){return Object(x.jsx)("div",{className:"starter",children:Object(x.jsxs)(i.d,{children:[Object(x.jsx)(i.b,{path:"/",element:Object(x.jsx)(Z,{})}),Object(x.jsx)(i.b,{path:"/home",element:Object(x.jsx)(i.a,{to:"/",replace:!0})}),Object(x.jsx)(i.b,{path:"/photos",children:Object(x.jsx)(i.b,{index:!0,element:Object(x.jsx)(Z,{})})}),Object(x.jsx)(i.b,{path:"/explore",element:Object(x.jsx)(B,{})}),Object(x.jsx)(i.b,{path:"*",element:Object(x.jsx)(L,{})})]})})};a.a.render(Object(x.jsx)(s.a,{children:Object(x.jsx)(Q,{})}),document.getElementById("root"))},30:function(e,t,n){e.exports={select:"Select_select__3H9tu",select__label:"Select_select__label__3vubG",select__button:"Select_select__button__2IkyD",select__list:"Select_select__list__2x_h6","select__list--open":"Select_select__list--open__wde0W",select__item:"Select_select__item__2RDZN"}},44:function(e,t,n){e.exports={header:"Header_header__yfRMG",container:"Header_container__3E9Zj",img:"Header_img__3KyQK",img__container:"Header_img__container__2GTFx"}},45:function(e,t,n){e.exports={search:"Search_search__1Zpx3",search__content:"Search_search__content__1FRH9",search__title:"Search_search__title__G1RPf",search__description:"Search_search__description__1SAWa"}},81:function(e,t,n){e.exports={form:"Input_form__3Yz-_",input:"Input_input__1kvTD"}},82:function(e,t,n){e.exports={form:"InputSearch_form__1IYDx",input:"InputSearch_input__3LWUO"}},83:function(e,t,n){e.exports={select__container:"Home_select__container__R5HJf",select__content:"Home_select__content__1BIKj"}}},[[246,1,2]]]);
//# sourceMappingURL=main.1d305264.chunk.js.map