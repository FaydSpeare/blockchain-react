(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{206:function(e,t,n){},220:function(e,t){},229:function(e,t){},247:function(e,t){},249:function(e,t){},265:function(e,t){},266:function(e,t){},331:function(e,t){},333:function(e,t){},365:function(e,t){},367:function(e,t){},368:function(e,t){},373:function(e,t){},375:function(e,t){},381:function(e,t){},383:function(e,t){},396:function(e,t){},408:function(e,t){},411:function(e,t){},416:function(e,t){},427:function(e,t){},430:function(e,t){},484:function(e,t,n){"use strict";n.r(t);var c=n(17),l=n.n(c),s=n(194),a=n.n(s),r=(n(206),n(27)),i=n.n(r),d=n(195),x=n(25),o=n(196),u=n.n(o),j=n(9);function b(e){var t=e.token,n=e.nativeBalance,l=Object(c.useState)(0),s=Object(x.a)(l,2),a=(s[0],s[1],Object(c.useState)(0)),r=Object(x.a)(a,2),i=r[0],d=(r[1],Object(c.useState)(0)),o=Object(x.a)(d,2),u=o[0],b=(o[1],Object(c.useState)(0)),f=Object(x.a)(b,2),p=f[0],m=(f[1],Object(c.useState)(0)),h=Object(x.a)(m,2),O=h[0];h[1];return Object(j.jsxs)("div",{className:"flex flex-col items-center m-5 bg-blue-200 rounded-3xl gap-y-5 w-10/12 sm:w-96 py-10 shadow-2xl",children:[Object(j.jsxs)("div",{className:"flex flex-col justify-center items-center flex-grow bg-white rounded-2xl gap-y-2 w-5/6 p-3",children:[Object(j.jsxs)("b",{className:"text-2xl",children:[t," Vault"]}),Object(j.jsxs)("div",{className:"grid grid-cols-2 divide-x-2 divide-purple-400 w-full",children:[Object(j.jsxs)("div",{className:"flex flex-col text-center divide-x",children:[Object(j.jsx)("p",{className:"text-purple-400 text-md",children:"APR:"}),Object(j.jsxs)("p",{children:[p.toFixed(2),"%"]})]}),Object(j.jsxs)("div",{className:"flex flex-col text-center",children:[Object(j.jsx)("p",{className:"text-purple-400 text-md",children:"TVL:"}),Object(j.jsxs)("p",{children:[O," ",t]})]})]})]}),Object(j.jsxs)("div",{className:"flex flex-col items-center flex-grow bg-white rounded-2xl gap-y-3 w-5/6 py-3",children:[Object(j.jsxs)("div",{className:"px-5 truncate max-w-full text-gray-400",children:["Available: ",n.toFixed(5)]}),Object(j.jsx)("input",{className:"w-5/6 pl-3 border-2 rounded-2xl border-black outline-none",type:"text",inputMode:"numeric",placeholder:"0"}),Object(j.jsx)("div",{className:"bg-purple-300 w-10/12 py-1 rounded-2xl text-center",children:"Deposit"})]}),Object(j.jsxs)("div",{className:"flex flex-col items-center flex-grow bg-white rounded-2xl gap-y-3 w-5/6 py-3",children:[Object(j.jsxs)("div",{className:"px-5 truncate max-w-full text-gray-400",children:["Available: ",i.toFixed(5)]}),Object(j.jsx)("input",{className:"w-5/6 pl-3 border-2 rounded-2xl border-black outline-none",type:"text",inputMode:"numeric",placeholder:"0"}),Object(j.jsx)("div",{className:"bg-purple-300 w-10/12 py-1 rounded-2xl text-center",children:"Withdraw & Harvest"})]}),Object(j.jsx)("div",{className:"flex-grow bg-gradient-to-r from-purple-300 to-red-300 rounded-full w-5/6",children:Object(j.jsx)("div",{className:"flex flex-col justify-center items-center bg-white m-1 rounded-full gap-y-2",children:Object(j.jsxs)("div",{className:"px-5 py-2 truncate max-w-full",children:["Rewards: ",u]})})})]})}var f=function(){var e=Object(c.useState)(!1),t=Object(x.a)(e,2),n=(t[0],t[1],Object(c.useState)(null)),l=Object(x.a)(n,2),s=l[0],a=l[1],r=Object(c.useState)(0),o=Object(x.a)(r,2),f=o[0],p=o[1],m=function(){var e=Object(d.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=13;break}return t=new u.a(window.ethereum),e.next=4,window.ethereum.enable();case 4:return e.next=6,t.eth.getAccounts();case 6:return n=e.sent,a(n[0]),e.next=10,t.eth.getBalance(n[0]);case 10:c=e.sent,c=parseFloat(t.utils.fromWei(c)),p(c);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"bg-gray-600 h-screen w-screen",children:[Object(j.jsxs)("div",{className:"flex bg-white h-16 p-4 items-center sticky top-0",children:[Object(j.jsx)("p",{className:"flex-none rounded-2xl text-xl sm:text-2xl",children:" WyanToken "}),Object(j.jsx)("div",{className:"flex-grow w-full"}),null==s&&Object(j.jsx)("button",{className:"p-2 flex-none rounded-3xl bg-red-300 text-white text-lg border-8 border-white",onClick:m,children:" Connect Wallet "}),null!=s&&Object(j.jsx)("div",{className:"ml-4 px-4 truncate rounded-3xl bg-red-300 text-white text-lg w-96 md:w-1/6",children:s})]}),Object(j.jsxs)("div",{className:"flex flex-row flex-wrap bg-gray-600 justify-evenly py-10",children:[Object(j.jsx)(b,{token:"WYN",nativeBalance:f}),Object(j.jsx)(b,{token:"BNB",nativeBalance:f}),Object(j.jsx)(b,{token:"API3",nativeBalance:f})]})]})};a.a.render(Object(j.jsx)(l.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[484,1,2]]]);
//# sourceMappingURL=main.632cb677.chunk.js.map