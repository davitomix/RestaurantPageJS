!function(e){var n={};function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(a,o,function(n){return e[n]}.bind(null,o));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(e,n,t){"use strict";t.r(n),n.default=t.p+"f441cb01e0dab6d3ec229a25667bfe4f.jpg"},function(e,n,t){var a=t(2),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1},i=(a(o,r),o.locals?o.locals:{});e.exports=i},function(e,n,t){"use strict";var a,o=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function s(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},a=[],o=0;o<e.length;o++){var r=e[o],c=n.base?r[0]+n.base:r[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var u=s(d),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:b(p,n),references:1}),a.push(d)}return a}function l(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var o=t.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var d,u=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function p(e,n,t,a){var o=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var r=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(r,i[n]):e.appendChild(r)}}function h(e,n,t){var a=t.css,o=t.media,r=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var m=null,f=0;function b(e,n){var t,a,o;if(n.singleton){var r=f++;t=m||(m=l(n)),a=p.bind(null,t,r,!1),o=p.bind(null,t,r,!0)}else t=l(n),a=h.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var o=s(t[a]);i[o].references--}for(var r=c(e,n),l=0;l<t.length;l++){var d=s(t[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=r}}}},function(e,n,t){var a=t(4),o=t(5),r=t(0);n=a(!1);var i=o(r);n.push([e.i,"html {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nbody {\n  background-color: black;\n  margin: 0;\n  padding: 0;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  overflow-x: hidden;\n  color: beige;\n}\n\n#header {\n  width: 90%;\n  max-width: 800px;\n  height: 20vh;\n  margin: 1vh auto ;\n  background-color: #4d3229c0;\n  box-shadow: 10px 10px 5px -6px \t#331a16;\n  border-radius: 20px;\n  text-align: center;\n}\n\n#header h1 {\n  color: #b1bec2;\n  font-size: 3rem;\n  padding: 0;\n  margin: 0;\n  line-height: 1em;\n}\n\nmain {\n  padding-top: 25vh;\n  min-width: 100vw;\n  min-height: 100vh;\n  background-image: url("+i+");\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  z-index: -1;\n}\n\nnav {\n  display: flex;\n}\n\n#menu {\n  margin: .5rem auto 2rem;\n  width: 20rem;\n  display: flex;\n  justify-content: space-evenly;\n  color: white;\n}\n\n#menu .item {\n  list-style: none;\n  display: inline-block;\n  background-color: tomato;\n  box-shadow: 2px 2px 5px 2px #2e1d18;\n  padding: .5rem 1rem;\n  border-radius: 10px;\n  cursor: pointer;\n  user-select: none;\n}\n\n#menu .item:hover {\n  box-shadow: 1px 1px 5px 0px #2e1d18;\n}\n\n.dish img {\n  height: 350px;\n  width: 500px;\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",a=e[3];if(!a)return t;if(n&&"function"==typeof btoa){var o=(i=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[t].concat(r).concat([o]).join("\n")}var i,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(a)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);a&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";t.r(n);t(1),t(0);var a=class{constructor(){this.qrySelect=document.querySelector.bind(document),this.mainContainer=this.qrySelect("#content"),this.fragment=document.createDocumentFragment()}setContent(e){e.forEach(e=>this.fragment.appendChild(e)),this.clearContent(this.mainContainer),this.mainContainer.appendChild(this.fragment)}clearContent(e){for(;e.firstChild;)e.removeChild(e.firstChild)}};var o=class{constructor(){this.contents=null,this.domMultiplexor=new a,this.aboutCtnr=document.createElement("div"),this.subtitle=document.createElement("h2"),this.aboutCtnr.id="about-container",this.subtitle.innerText="About Page.",this.aboutCtnr.appendChild(this.subtitle)}getCtnr(){return[this.aboutCtnr]}injectAboutPage(){this.contents=this.contents||this.getCtnr(),this.domMultiplexor.setContent(this.contents)}},r=t.p+"61aa5d03390ea206eb56582998c6d8af.jpg";var i=class{constructor(){this.contents=null,this.domMultiplexor=new a,this.contactCtnr=document.createElement("address"),this.imgElem=document.createElement("img"),this.header=document.createElement("h1"),this.email=document.createElement("div"),this.cellular=document.createElement("div"),this.whats=document.createElement("div"),this.contactCtnr.id="contact-container",this.imgElem.src=r,this.header.innerText="Contact",this.email.className="email",this.email.innerHTML='<a href="mailto:contact@malolarestaurant.com">contact@malolarestaurant.com</a>',this.cellular.className="cell",this.cellular.innerHTML='Cell phone: <a href="tel:4433005440">555 555 5555</a>',this.whats.className="whats",this.whats.innerHTML='whatsapp: <a href="https://api.whatsapp.com/send?phone=+525555555555">+52 555 555 5555</a>',this.contactCtnr.appendChild(this.imgElem),this.contactCtnr.appendChild(this.header),this.contactCtnr.appendChild(this.email),this.contactCtnr.appendChild(this.cellular),this.contactCtnr.appendChild(this.whats)}getCtnr(){return[this.contactCtnr]}injectContactPage(){this.contents=this.contents||this.getCtnr(),this.domMultiplexor.setContent(this.contents)}},s=t.p+"e102b451dcbe8ce32fe0ed84321e5ddd.jpg",c=t.p+"520bfc973caf7c66961d492b00413e47.jpg";let l=null;const d=new a,u=[{img:s,head:"Sopa tarasca",body:"Hecha a base de frijoles molidos, puré de jitomate y chile pasilla seco. Usualmente se sirve con tiritas de tortilla fritas, queso cotija, crema, epazote y chiles serranos picados."},{img:c,head:"Corundas",body:"Parecidas a los tamales pero de forma triangular, se sirven envueltas en hojas de maíz acompañadas con queso, crema y rajas. Cuenta la leyenda que eran el platillo favorito del emperador purépecha Caltzontzin, quien las comía en ocasiones especiales, y por esa razón también se les llama “panecillos del palacio”."},{img:s,head:"Enchiladas morelianas o placeras",body:"Lo que distingue a estas enchiladas es que la tortilla primero se pasa por la salsa (de chile guajillo) y luego se fríe – al contrario que en otras recetas en donde primero se fríe la tortilla y luego se baña en salsa. Las enchiladas morelianas se rellenan de papas y zanahorias y van acompañadas de pollo placero."},{img:c,head:"Morisqueta",body:"Platillo originario de Apatzingan, consiste en arroz blanco de grano corto cocido con frijoles de la olla y salsa guisada con queso o carne. En una de sus versiones más populares, va acompañada de costillas de cerdo."},{img:s,head:"Carnitas estilo Michoacán",body:"Es imposible hablar de la cocina michoacana sin mencionar las célebres carnitas de cerdo, especialmente famosas en el municipio de Quiroga. Tradicionalmente se preparan en grandes ollas de cobre (elaboradas en Santa Clara del Cobre) donde distintas partes del cerdo se fríen en manteca del mismo animal. Se sirven en tacos, con tortillas de maíz, cilantro, cebolla, salsas y jugo de limón."},{img:c,head:"Aporreadillo",body:"Un platillo a base de cecina de res y huevo revuelto cubierto de salsa verde o roja, o en ocasiones de ambas salsas. Se dice que el aporreadillo fue bautizado con ese nombre porque la carne, después de ser secada al sol y salada, se aporreaba hasta que quedara desmenuzada."},{img:s,head:"Uchepos",body:"Tamales de maíz tierno (elote) molido. El sabor de los uchepos es algo dulce, pero en ocasiones se sirven con salsa verde o roja, con queso cotija y crema. También pueden servirse como postre con leche condensada."},{img:c,head:"Chongos zamoranos",body:"Como su nombre lo indica, este postre es originario de la ciudad de Zamora y la receta se le atribuye a las monjas de los conventos de la época virreinal. Se trata de leche cuajada con azúcar y canela."},{img:s,head:"Ate",body:"El ate moreliano es famoso en todo el país. Este platillo es originario de España y fue importado a Morelia por las monjas dominicas. El ate se elabora extrayendo la pulpa de cualquier fruto (usualmente membrillo o guayaba) y luego cociéndolo con azúcar en una cazuela de cobre. Se suele acompañar con queso."},{img:c,head:"Nieve de pasta",body:"Es originaria de Pátzcuaro, a donde viajan los habitantes de Morelia y los alrededores sólo por la nieve. Se distingue por su consistencia cremosa y se elabora con canela, vainilla, almendras y miel de maíz."}],p=document.createElement("div");var h=class{constructor(){p.id="dish-container",u.forEach(({img:e,head:n,body:t})=>{const a=document.createElement("div");a.className="dish",p.appendChild(a);const o=document.createElement("img");o.src=e,a.appendChild(o);const r=document.createElement("h3");r.innerText=n,a.appendChild(r);const i=document.createElement("p");i.innerText=t,a.appendChild(i)})}getCtnr(){return[p]}injectMenuPage(){l=l||this.getCtnr(),d.setContent(l)}};new o;const m=new i;new h;window.onload=function(){console.log("Initializing..."),f()};const f=()=>{m.injectContactPage(),console.log("Running...")}}]);