(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,function(e,t,a){e.exports={block:"Affairs_block__Ivbvx",default:"Affairs_default__xvWV1",active:"Affairs_active__16b-R"}},function(e,t,a){e.exports={wrapper:"Greeting_wrapper__1ImdY",input:"Greeting_input__p0O8d",inputBlock:"Greeting_inputBlock__X_smL",error:"Greeting_error__5G-pM",button:"Greeting_button__2_F6U"}},,,function(e,t,a){e.exports={wrapper:"Message_wrapper__33XYt",block:"Message_block__2t78B",time:"Message_time__3pmRd",image:"Message_image__2446O",message:"Message_message__2yCkd"}},,function(e,t,a){e.exports={block:"SuperInputText_block__1AyEL",superInput:"SuperInputText_superInput__jau_Q",errorInput:"SuperInputText_errorInput__1eQQv",error:"SuperInputText_error__1qaac"}},,function(e,t,a){e.exports={default:"SuperButton_default__-0b3r",red:"SuperButton_red__3FZp6",disabled:"SuperButton_disabled__1O3ma"}},,function(e,t,a){e.exports={blue:"HW4_blue__1itO4",column:"HW4_column__2ZYY2"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__1LO1c",spanClassName:"SuperCheckbox_spanClassName__qvEco"}},,function(e,t,a){},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(15),s=a.n(r),i=(a(22),a(16)),o=a.n(i),l=a(7),j=a.n(l),u=a(0);var d=function(e){return Object(u.jsxs)("div",{className:j.a.wrapper,children:[Object(u.jsx)("img",{src:e.avatar,alt:"avatar",className:j.a.image}),Object(u.jsxs)("div",{className:j.a.block,children:[Object(u.jsx)("div",{children:e.name}),Object(u.jsx)("div",{className:j.a.message,children:e.message}),Object(u.jsx)("div",{className:j.a.time,children:e.time})]}),Object(u.jsx)("svg",{height:"0",width:"0",children:Object(u.jsx)("defs",{children:Object(u.jsx)("clipPath",{id:"left-droplet",children:Object(u.jsx)("path",{d:"M 10,0 A 10,10 0 0 1 0,10 H 16 V 0 Z"})})})})]})},b="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Some Name",O="test message",m="22:00";var x=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)(d,{avatar:b,name:h,message:O,time:m}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},p=a(2),f=a(3),_=a.n(f);var v=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:e.affair.name}),Object(u.jsx)("span",{children:e.affair.priority}),Object(u.jsx)("button",{className:_.a.default,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var g=function(e){var t=e.data.map((function(t){return Object(u.jsx)(v,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)("div",{className:_.a.block,children:[t,Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"".concat(_.a.default," ").concat("all"===e.filter?_.a.active:""),onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)("button",{className:"".concat(_.a.default," ").concat("high"===e.filter?_.a.active:""),onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)("button",{className:"".concat(_.a.default," ").concat("middle"===e.filter?_.a.active:""),onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)("button",{className:"".concat(_.a.default," ").concat("low"===e.filter?_.a.active:""),onClick:function(){e.setFilter("low")},children:"Low"})]})]})},k=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var C=function(){var e=Object(c.useState)(k),t=Object(p.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)("all"),s=Object(p.a)(r,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,i);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsx)(g,{data:l,setFilter:o,deleteAffairCallback:function(e){return n(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))},filter:i}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},N=a(17),w=a(4),y=a.n(w),S=function(e){var t=e.name,a=e.setNameCallback,c=e.addUser,n=e.error,r=e.totalUsers,s=e.onKeyPress,i=n?y.a.error:y.a.input;return Object(u.jsxs)("div",{className:y.a.wrapper,children:[Object(u.jsxs)("div",{className:y.a.inputBlock,children:[Object(u.jsx)("input",{value:t,onChange:a,className:i,onKeyPress:s}),n&&Object(u.jsx)("span",{children:n})]}),Object(u.jsx)("button",{className:y.a.button,onClick:c,children:"add"}),Object(u.jsx)("span",{children:r})]})},I=function(e){var t=e.users,a=e.addUserCallback,n=Object(c.useState)(""),r=Object(p.a)(n,2),s=r[0],i=r[1],o=Object(c.useState)(""),l=Object(p.a)(o,2),j=l[0],d=l[1],b=function(){""===s.trim()?d("title is required"):(a(s.trim()),alert("Hello ".concat(s.trim(),"!")),i(""))},h=t.length;return Object(u.jsx)("div",{className:y.a.block,children:Object(u.jsx)(S,{name:s,setNameCallback:function(e){i(e.currentTarget.value)},addUser:b,error:j,totalUsers:h,onKeyPress:function(e){d(""),13===e.charCode&&b()}})})},A=a(26);var T=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),a=t[0],n=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("hr",{}),Object(u.jsx)(I,{users:a,addUserCallback:function(e){var t={_id:Object(A.a)(),name:e};n([t].concat(Object(N.a)(a)))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},E=a(5),B=a(6),F=a(9),M=a.n(F),P=function(e){e.type;var t=e.onChange,a=e.onChangeText,c=e.onKeyPress,n=e.onEnter,r=e.setError,s=e.error,i=e.classInputName,o=(e.spanClassName,Object(B.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","setError","error","classInputName","spanClassName"])),l="".concat(s?M.a.errorInput:""," ").concat(M.a.superInput," ").concat(i);return Object(u.jsxs)("div",{className:M.a.block,children:[Object(u.jsx)("input",Object(E.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){r&&r(null),c&&c(e),n&&"Enter"===e.key&&n()},className:l},o)),s&&Object(u.jsx)("span",{className:M.a.error,children:s})]})},G=a(13),U=a.n(G),W=a(11),H=a.n(W),K=function(e){var t=e.red,a=(e.className,e.disabled),c=Object(B.a)(e,["red","className","disabled"]),n="".concat(H.a.default," ").concat(t?H.a.red:""," ").concat(a?H.a.disabled:"");return Object(u.jsx)("button",Object(E.a)({className:n},c))},Y=a(14),q=a.n(Y),L=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,c=(e.className,e.children),n=Object(B.a)(e,["type","onChange","onChangeChecked","className","children"]),r="".concat(q.a.checkbox);return Object(u.jsx)("div",{children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(E.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:r},n)),c&&Object(u.jsx)("span",{className:q.a.spanClassName,children:c})]})})};var X=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(p.a)(r,2),i=s[0],o=s[1],l=function(){""!==a.trim()?(alert(a.trim()),n("")):(alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."),o("errorka"))},j=Object(c.useState)(!1),d=Object(p.a)(j,2),b=d[0],h=d[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:U.a.column,children:[Object(u.jsx)(P,{value:a,onChangeText:n,onEnter:l,error:i,setError:o}),Object(u.jsx)(P,{className:U.a.blue}),Object(u.jsx)(K,{children:"default"}),Object(u.jsx)(K,{red:!0,onClick:l,children:"delete"}),Object(u.jsx)(K,{disabled:!0,children:"disabled"}),Object(u.jsx)(L,{onChangeChecked:h,children:"some text"}),Object(u.jsx)(L,{checked:b,onChange:function(e){return h(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var Z=function(){return Object(u.jsxs)("div",{className:o.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(x,{}),Object(u.jsx)(C,{}),Object(u.jsx)(T,{}),Object(u.jsx)(X,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(Z,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.9d76e10b.chunk.js.map