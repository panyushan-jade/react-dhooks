(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4,22,23],{"/7QA":function(e,t,r){"use strict";r.r(t),r.d(t,"useBlobToBase64",(function(){return n})),r.d(t,"useUrlToBase64",(function(){return o})),r.d(t,"useLocalStorage",(function(){return c})),r.d(t,"useMount",(function(){return f})),r.d(t,"useUnmount",(function(){return w})),r.d(t,"useLatest",(function(){return d})),r.d(t,"useToggle",(function(){return v})),r.d(t,"useBoolean",(function(){return m}));var n=e=>new Promise(((t,r)=>{var n=new FileReader;n.onload=e=>{t(e.target.result)},n.readAsDataURL(e),n.onerror=()=>{r(new Error("useBlobToBase64 error"))}})),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"image/png",r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;return new Promise(((o,a)=>{var u=["image/jpeg","image/webp"],c=new Image;c.setAttribute("crossOrigin","anonymous"),c.src=e+"?"+(new Date).getTime(),c.onload=function(){var e=document.createElement("canvas"),a=e.getContext("2d");e.width=c.width,e.height=c.height,a.fillStyle=r||"white",a.fillRect(0,0,e.width,e.height),a.drawImage(c,0,0);var i=u.includes(t)?e.toDataURL(t,n||.96):e.toDataURL(t);o(i)},c.onerror=()=>{a(new Error("urlToBase64 error"))}}))},a=r("k1fw"),u=e=>"undefined"===typeof e||null===e||""===e,c=()=>{var e=e=>{var t=JSON.parse(window.localStorage.getItem(e));if(console.log("value",t),t){var r=t.expires,n=t.nowDate;return r&&Number.isFinite(Number(r))?(console.log("eeeeeeeee",r),Date.now()-n>r?(o.deleteLocalStorage(e),null):t):t}return null},t=e=>{var t=e.key,r=e.prefix,n=e.expires,o=r?r+t:"__"+t,c=e;return c=n&&Number.isFinite(Number(n))?Object(a["default"])(Object(a["default"])({},e),{},{nowDate:Date.now()}):Object(a["default"])(Object(a["default"])({},e),{},{expires:void 0}),c.prefix=r||"__",window.localStorage.getItem(o)?[o,JSON.parse(window.localStorage.getItem(o)||"{}")]:(Object.keys(c).forEach((e=>{u(c[e])&&delete c[e]})),window.localStorage.setItem(o,JSON.stringify(c)),[o,JSON.parse(JSON.stringify(c))])},r=e=>{window.localStorage.removeItem(e)},n=()=>{window.localStorage.clear()},o={getLocalStorage:e,setLocalStorage:t,deleteLocalStorage:r,clearLocalStorage:n};return o},i=r("q1tI"),l=e=>"function"===typeof e,s=e=>{l(e)||console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(typeof e,'".')),Object(i["useEffect"])((()=>{null===e||void 0===e||e()}),[])},f=s;function g(e){var t=Object(i["useRef"])(e);return t.current=e,t}var d=g,b=e=>{l(e)||console.error("useUnmount expected parameter is a function, got ".concat(typeof e));var t=d(e);Object(i["useEffect"])((()=>()=>{t.current()}),[])},w=b,p=r("tJVT");function O(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,r=Object(i["useState"])(e),n=Object(p["default"])(r,2),o=n[0],a=n[1],u=Object(i["useMemo"])((()=>{var r=void 0===t?!e:t,n=()=>a((t=>t===e?r:e)),o=e=>a(e),u=()=>a(e),c=()=>a(r);return{toggle:n,set:o,setLeft:u,setRight:c}}),[]);return[o,u]}var v=O;function m(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=v(e),r=Object(p["default"])(t,2),n=r[0],o=r[1],a=o.toggle,u=o.set,c=Object(i["useMemo"])((()=>{var e=()=>u(!0),t=()=>u(!1);return{toggle:a,set:e=>u(!!e),setTrue:e,setFalse:t}}),[]);return[n,c]}},jrin:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,"default",(function(){return n}))},k1fw:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return a}));var n=r("jrin");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(n["default"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}}}]);