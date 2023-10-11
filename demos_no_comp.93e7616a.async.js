(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"/7QA":function(e,t,n){"use strict";n.r(t),n.d(t,"useBlobToBase64",(function(){return r})),n.d(t,"useUrlToBase64",(function(){return a})),n.d(t,"useLocalStorage",(function(){return o})),n.d(t,"useMount",(function(){return f})),n.d(t,"useUnmount",(function(){return g})),n.d(t,"useLatest",(function(){return d})),n.d(t,"useToggle",(function(){return E})),n.d(t,"useBoolean",(function(){return O})),n.d(t,"useSetState",(function(){return S})),n.d(t,"useUpdateEffect",(function(){return y})),n.d(t,"useUpdate",(function(){return h}));var r=e=>new Promise(((t,n)=>{var r=new FileReader;r.onload=e=>{t(e.target.result)},r.readAsDataURL(e),r.onerror=()=>{n(new Error("useBlobToBase64 error"))}})),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"image/png",n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;return new Promise(((a,l)=>{var u=["image/jpeg","image/webp"],o=new Image;o.setAttribute("crossOrigin","anonymous"),o.src=e+"?"+(new Date).getTime(),o.onload=function(){var e=document.createElement("canvas"),l=e.getContext("2d");e.width=o.width,e.height=o.height,l.fillStyle=n||"white",l.fillRect(0,0,e.width,e.height),l.drawImage(o,0,0);var c=u.includes(t)?e.toDataURL(t,r||.96):e.toDataURL(t);a(c)},o.onerror=()=>{l(new Error("urlToBase64 error"))}}))},l=n("k1fw"),u=e=>"undefined"===typeof e||null===e||""===e,o=()=>{var e=e=>{var t=JSON.parse(window.localStorage.getItem(e));if(console.log("value",t),t){var n=t.expires,r=t.nowDate;return n&&Number.isFinite(Number(n))?(console.log("eeeeeeeee",n),Date.now()-r>n?(a.deleteLocalStorage(e),null):t):t}return null},t=e=>{var t=e.key,n=e.prefix,r=e.expires,a=n?n+t:"__"+t,o=e;return o=r&&Number.isFinite(Number(r))?Object(l["default"])(Object(l["default"])({},e),{},{nowDate:Date.now()}):Object(l["default"])(Object(l["default"])({},e),{},{expires:void 0}),o.prefix=n||"__",window.localStorage.getItem(a)?[a,JSON.parse(window.localStorage.getItem(a)||"{}")]:(Object.keys(o).forEach((e=>{u(o[e])&&delete o[e]})),window.localStorage.setItem(a,JSON.stringify(o)),[a,JSON.parse(JSON.stringify(o))])},n=e=>{window.localStorage.removeItem(e)},r=()=>{window.localStorage.clear()},a={getLocalStorage:e,setLocalStorage:t,deleteLocalStorage:n,clearLocalStorage:r};return a},c=n("q1tI"),i=e=>"function"===typeof e,s=e=>{i(e)||console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(typeof e,'".')),Object(c["useEffect"])((()=>{null===e||void 0===e||e()}),[])},f=s;function b(e){var t=Object(c["useRef"])(e);return t.current=e,t}var d=b,m=e=>{i(e)||console.error("useUnmount expected parameter is a function, got ".concat(typeof e));var t=d(e);Object(c["useEffect"])((()=>()=>{t.current()}),[])},g=m,p=n("tJVT");function v(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=Object(c["useState"])(e),r=Object(p["default"])(n,2),a=r[0],l=r[1],u=Object(c["useMemo"])((()=>{var n=void 0===t?!e:t,r=()=>l((t=>t===e?n:e)),a=e=>l(e),u=()=>l(e),o=()=>l(n);return{toggle:r,set:a,setLeft:u,setRight:o}}),[]);return[a,u]}var E=v;function O(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=E(e),n=Object(p["default"])(t,2),r=n[0],a=n[1],l=a.toggle,u=a.set,o=Object(c["useMemo"])((()=>{var e=()=>u(!0),t=()=>u(!1);return{toggle:l,set:e=>u(!!e),setTrue:e,setFalse:t}}),[]);return[r,o]}var j=e=>{var t=Object(c["useState"])(e),n=Object(p["default"])(t,2),r=n[0],a=n[1],u=Object(c["useCallback"])((e=>{a((t=>{var n=i(e)?e(t):e;return n?Object(l["default"])(Object(l["default"])({},t),n):t}))}),[]);return[r,u]},S=j,w=e=>(t,n)=>{var r=Object(c["useRef"])(!1);e((()=>()=>{r.current=!1}),[]),e((()=>{if(r.current)return t();r.current=!0}),n)},y=w(c["useEffect"]),T=()=>{var e=Object(c["useState"])({}),t=Object(p["default"])(e,2),n=t[1];return Object(c["useCallback"])((()=>n({})),[])},h=T},"2oRC":function(e,t,n){"use strict";n.r(t);var r=n("tJVT"),a=n("q1tI"),l=n.n(a),u=n("/7QA");t["default"]=()=>{var e=Object(u["useToggle"])(),t=Object(r["default"])(e,2),n=t[0],a=t[1],o=a.toggle,c=a.setLeft,i=a.setRight;return l.a.createElement("div",null,l.a.createElement("p",null,"Effects\uff1a","".concat(n)),l.a.createElement("p",null,l.a.createElement("button",{type:"button",onClick:o},"Toggle"),l.a.createElement("button",{type:"button",onClick:c,style:{margin:"0 8px"}},"Toggle False"),l.a.createElement("button",{type:"button",onClick:i},"Toggle True")))}},FqU5:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),l=n("/7QA");t["default"]=()=>{var e=Object(l["useUpdate"])();return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,"Time: ",Date.now()),a.a.createElement("button",{type:"button",onClick:e,style:{marginTop:8}},"update"))}},Ggvu:function(e,t,n){"use strict";n.r(t);var r=n("tJVT"),a=n("q1tI"),l=n.n(a),u=n("/7QA");t["default"]=()=>{var e=Object(u["useBoolean"])(!0),t=Object(r["default"])(e,2),n=t[0],a=t[1],o=a.toggle,c=a.setTrue,i=a.setFalse;return l.a.createElement("div",null,l.a.createElement("p",null,"Effects\uff1a",JSON.stringify(n)),l.a.createElement("p",null,l.a.createElement("button",{type:"button",onClick:o},"Toggle"),l.a.createElement("button",{type:"button",onClick:i,style:{margin:"0 16px"}},"Set false"),l.a.createElement("button",{type:"button",onClick:c},"Set true")))}},HEG8:function(e,t,n){"use strict";n.r(t);var r=n("tJVT"),a=n("q1tI"),l=n.n(a),u=n("/7QA");t["default"]=()=>{var e=Object(a["useState"])(0),t=Object(r["default"])(e,2),n=t[0],o=t[1],c=Object(a["useState"])(0),i=Object(r["default"])(c,2),s=i[0],f=i[1],b=Object(a["useState"])(0),d=Object(r["default"])(b,2),m=d[0],g=d[1];return Object(a["useEffect"])((()=>{f((e=>e+1))}),[n]),Object(u["useUpdateEffect"])((()=>(g((e=>e+1)),()=>{})),[n]),l.a.createElement("div",null,l.a.createElement("p",null,"effectCount: ",s),l.a.createElement("p",null,"updateEffectCount: ",m),l.a.createElement("p",null,l.a.createElement("button",{type:"button",onClick:()=>o((e=>e+1))},"reRender")))}},TZCN:function(e,t,n){"use strict";n.r(t);var r=n("tJVT"),a=n("/7QA"),l=n("q1tI"),u=n.n(l),o=n("tsqr"),c=()=>(Object(a["useMount"])((()=>{o["a"].info("mount")})),u.a.createElement("div",null,"Hello World"));t["default"]=()=>{var e=Object(l["useState"])(),t=Object(r["default"])(e,2),n=t[0],a=t[1],o=()=>a(!n);return u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{type:"button",onClick:o},n?"unmount":"mount"),n&&u.a.createElement(c,null))}},eUzH:function(e,t,n){"use strict";n.r(t);var r=n("tJVT"),a=n("q1tI"),l=n.n(a),u=n("/7QA");t["default"]=()=>{var e=Object(a["useState"])(0),t=Object(r["default"])(e,2),n=t[0],o=t[1],c=Object(u["useLatest"])(n);return Object(a["useEffect"])((()=>{var e=setInterval((()=>{o(c.current+1)}),1e3);return()=>clearInterval(e)}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"count: ",n))}},qjrR:function(e,t,n){"use strict";n.r(t);var r=n("tJVT"),a=n("q1tI"),l=n.n(a),u=n("/7QA");t["default"]=()=>{var e=Object(u["useToggle"])("Hello","World"),t=Object(r["default"])(e,2),n=t[0],a=t[1],o=a.toggle,c=a.set,i=a.setLeft,s=a.setRight;return l.a.createElement("div",null,l.a.createElement("p",null,"Effects\uff1a",n),l.a.createElement("p",null,l.a.createElement("button",{type:"button",onClick:o},"Toggle"),l.a.createElement("button",{type:"button",onClick:()=>c("Hello"),style:{margin:"0 8px"}},"Set Hello"),l.a.createElement("button",{type:"button",onClick:()=>c("World")},"Set World"),l.a.createElement("button",{type:"button",onClick:i,style:{margin:"0 8px"}},"Set Left"),l.a.createElement("button",{type:"button",onClick:s},"Set Right")))}},"r/vg":function(e,t,n){"use strict";n.r(t);var r=n("tJVT"),a=n("/7QA"),l=n("tsqr"),u=n("q1tI"),o=n.n(u),c=()=>(Object(a["useUnmount"])((()=>{l["a"].info("unmount")})),o.a.createElement("p",null,"Hello World!"));t["default"]=()=>{var e=Object(u["useState"])(),t=Object(r["default"])(e,2),n=t[0],a=t[1],l=()=>a(!n);return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{type:"button",onClick:l},n?"unmount":"mount"),n&&o.a.createElement(c,null))}},s8Bn:function(e,t,n){"use strict";n.r(t);var r=n("tJVT"),a=n("q1tI"),l=n.n(a),u=n("/7QA");t["default"]=()=>{var e=Object(u["useSetState"])({hello:""}),t=Object(r["default"])(e,2),n=t[0],a=t[1];return l.a.createElement("div",null,l.a.createElement("pre",null,JSON.stringify(n,null,2)),l.a.createElement("p",null,l.a.createElement("button",{type:"button",onClick:()=>a({hello:"world"})},"set hello"),l.a.createElement("button",{type:"button",onClick:()=>a({foo:"bar"}),style:{margin:"0 8px"}},"set foo")))}},urVC:function(e,t,n){"use strict";n.r(t);var r=n("tJVT"),a=n("q1tI"),l=n.n(a),u=n("/7QA");t["default"]=()=>{var e=Object(u["useSetState"])({hello:"world",count:0}),t=Object(r["default"])(e,2),n=t[0],a=t[1];return l.a.createElement("div",null,l.a.createElement("pre",null,JSON.stringify(n,null,2)),l.a.createElement("p",null,l.a.createElement("button",{type:"button",onClick:()=>a((e=>({count:e.count+1})))},"count + 1")))}}}]);