(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},M5IV:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("dEAq"),o=a("Zxc8"),c=a("H1Ra"),i=a("dMo/"),u=l.a.memo((e=>{var t=e.demos,a=t["useBlobToBase64-demo"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"useblobtobase64"},l.a.createElement(r["AnchorLink"],{to:"#useblobtobase64","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useBlobToBase64"),l.a.createElement("p",null,"\u7528\u6765\u5c06 Blob \u6216 File \u5bf9\u8c61\u8f6c\u6362\u6210 base64 \u683c\u5f0f"),l.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),l.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),l.a.createElement(o["default"],t["useBlobToBase64-demo"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(c["a"],{code:"import { useBlobToBase64 } from 'react-dhooks';\n\nconst toBase64 = useBlobToBase64(file);",lang:"tsx"}),l.a.createElement("h2",{id:"params"},l.a.createElement(r["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Params"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"file",l.a.createElement("code",null,"*")),l.a.createElement("td",null,"\u4e00\u4e2a\u6587\u4ef6\u5bf9\u8c61\u6216 Blob",l.a.createElement("code",null,"\uff08file \u7ee7\u627f Blob\uff09")),l.a.createElement("td",null,l.a.createElement("code",null,"file")),l.a.createElement("td",null,"--")))),l.a.createElement("h2",{id:"result"},l.a.createElement(r["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Result"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u8fd4\u56de\u503c"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"promise"),l.a.createElement("td",null,"\u8fd4\u56de\u4e00\u4e2a promise"),l.a.createElement("td",null,l.a.createElement("code",null,"Promise")),l.a.createElement("td",null,"--")))),l.a.createElement("p",null,"More skills for writing demo: ",l.a.createElement(r["Link"],{to:"https://github.com/panyushan-jade/dHooks"},"https://github.com/panyushan-jade/dHooks")))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(u,{demos:a})}},WpQk:function(e,t,a){},"dMo/":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("hKI/"),o=a.n(r);a("WpQk");function c(e,t){return d(e)||s(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function s(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],o=!0,c=!1;try{for(a=a.call(e);!(o=(n=a.next()).done);o=!0)if(r.push(n.value),t&&r.length===t)break}catch(i){c=!0,l=i}finally{try{o||null==a["return"]||a["return"]()}finally{if(c)throw l}}return r}}function d(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),i=c(r,2),u=i[0],m=i[1],s=Object(n["useState"])(!1),d=c(s,2),E=d[0],h=d[1];return Object(n["useEffect"])((function(){var e=a.current,t=o()((function(){m(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":u||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E}}]);