!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(e,n,t){"use strict";t.r(n),n.default=t.p+"f441cb01e0dab6d3ec229a25667bfe4f.jpg"},function(e,n,t){var r=t(2),a=t(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},function(e,n,t){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function s(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],a=0;a<e.length;a++){var o=e[a],c=n.base?o[0]+n.base:o[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var h=s(d),m={css:o[1],media:o[2],sourceMap:o[3]};-1!==h?(i[h].references++,i[h].updater(m)):i.push({identifier:d,updater:f(m,n),references:1}),r.push(d)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var d,h=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function m(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=h(n,a);else{var o=document.createTextNode(a),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o)}}function u(e,n,t){var r=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,g=0;function f(e,n){var t,r,a;if(n.singleton){var o=g++;t=p||(p=l(n)),r=m.bind(null,t,o,!1),a=m.bind(null,t,o,!0)}else t=l(n),r=u.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=s(t[r]);i[a].references--}for(var o=c(e,n),l=0;l<t.length;l++){var d=s(t[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=o}}}},function(e,n,t){var r=t(4),a=t(5),o=t(0);n=r(!1);var i=a(o);n.push([e.i,"html {\n  box-sizing: border-box;\n  font-size: 16px;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nbody {\n  background-color: black;\n  margin: 0;\n  padding: 0;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  overflow-x: hidden;\n  color: rgb(31, 31, 28);\n}\n\n#header {\n  width: 90%;\n  max-width: 800px;\n  height: 20vh;\n  margin: 1vh auto ;\n  background-color: #4d3229c0;\n  box-shadow: 10px 10px 5px -6px \t#331a16;\n  border-radius: 20px;\n  text-align: center;\n}\n\n#header h1 {\n  color: #b1bec2;\n  font-size: 3rem;\n  padding: 0;\n  margin: 0;\n  line-height: 1em;\n}\n\n#content {\n  padding-top: 25vh;\n  min-width: 100vw;\n  min-height: 100vh;\n  background-image: url("+i+');\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  z-index: -1;\n}\n\nnav {\n  display: flex;\n}\n\n#menu {\n  margin: .5rem auto 2rem;\n  width: 20rem;\n  display: flex;\n  justify-content: space-evenly;\n  color: white;\n}\n\n#menu .item {\n  list-style: none;\n  display: inline-block;\n  background-color: rgb(157, 50, 31);\n  box-shadow: 2px 2px 5px 2px #2e1d18;\n  padding: .5rem 1rem;\n  border-radius: 10px;\n  cursor: pointer;\n  user-select: none;\n}\n\n#menu .item:hover {\n  box-shadow: 1px 1px 5px 0px #2e1d18;\n}\n\n#about-container, #contact-container {\n  margin: 0 auto;\n  padding: 1rem;\n  background-color: #fef6dea8;\n  box-shadow: 10px 10px 5px -6px #331a16;\n  border-radius: 20px;\n}\n\n#about-container {\n  width: 90%;\n  max-width: 800px;\n}\n\n#about-container h1 {\n  color: #213c52;\n  text-align: center;\n  font-size: 3rem;\n}\n\n#about-container h2 {\n  color: #9c6649;\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n#dish-container {\n  /* border: dotted thick red; */\n  max-width: 620px;\n  margin: 0 auto;\n  padding: 0 .5rem;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: space-between;\n  align-content: space-between;\n}\n\n.dish {\n  overflow: hidden;\n  background-color: #fef6dea8;\n  box-shadow: 10px 10px 5px -6px \t#331a16;\n  border-radius: 20px;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  display: grid;\n  grid-column-gap: 1rem;\n  grid-template-areas:\n    "img"\n    "head"\n    "desc";\n}\n\n@media only screen and (min-width: 576px) {\n  .dish {\n    overflow: hidden;\n    background-color: #fef6dea8;\n    box-shadow: 10px 10px 5px -6px \t#331a16;\n    border-radius: 20px;\n    margin-bottom: 1rem;\n    padding: .5rem;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: auto 1fr;\n    grid-column-gap: 1rem;\n    grid-template-areas:\n      "img head"\n      "img desc";\n  }\n}\n.dish img {\n  grid-area: img;\n  width: 100%;\n  border: solid thin #798488;\n  border-radius: 20px;\n}\n\n.dish h3 {\n  grid-area: head;\n  margin: 0;\n  color: #213c52;\n  font-size: 1.5em;}\n\n.dish p {\n  grid-area: desc;\n  margin: .5rem 0;\n}\n\n#contact-container {\n  max-width: 90vw;\n  text-align: center;\n  display: grid;\n  grid-column-gap: 1rem;\n  grid-template-rows: repeat(5, auto);\n  grid-template-areas:\n  "img"\n  "head"\n  "email"\n  "cell"\n  "whats";\n}\n\n@media only screen and (min-width: 576px) {\n  #contact-container {\n    max-width: 620px;\n    grid-template-columns: 200px auto;\n    grid-template-rows: repeat(4, auto);\n    grid-template-areas:\n      "img head"\n      "img email"\n      "img cell"\n      "img whats";\n    }\n}\n\n#contact-container img {\n  grid-area: img;\n  width: 200px;\n  border-radius: 50%;\n  margin: 0 auto;\n}\n\n#contact-container h1 {\n  color: #213c52;\n  font-size: 3rem;\n  margin: .8rem 0;\n}\n\n#contact-container div {\n  font-size: 1.2rem;\n  margin-bottom: .2rem;\n}\n',""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var a=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([a]).join("\n")}var i,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&a[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";t.r(n);t(1),t(0);var r=class{constructor(){this.qrySelect=document.querySelector.bind(document),this.mainContainer=this.qrySelect("#content"),this.fragment=document.createDocumentFragment()}setContent(e){e.forEach(e=>this.fragment.appendChild(e)),this.clearContent(this.mainContainer),this.mainContainer.appendChild(this.fragment)}clearContent(e){for(;e.firstChild;)e.removeChild(e.firstChild)}qrySelector(e){return document.getElementById(e)}getMainContainer(){return this.mainContainer}};var a=class{constructor(){this.contents=null,this.domMultiplexor=new r,this.aboutCtnr=document.createElement("div"),this.subtitle=document.createElement("h2"),this.aboutCtnr.id="about-container",this.subtitle.innerText="Meditation palo santo marfa cornhole brunch street art, chia copper mug jianbing heirloom asymmetrical cred kale chips direct trade. Vexillologist beard wayfarers franzen, whatever shaman four loko stumptown austin blue bottle craft beer snackwave knausgaard direct trade. Vape shabby chic cold-pressed fanny pack, scenester glossier hammock gastropub ethical cronut banh mi synth messenger bag. Normcore street art echo park green juice master cleanse blog. Tumblr farm-to-table vaporware fanny pack palo santo bicycle rights chartreuse artisan plaid tilde",this.aboutCtnr.appendChild(this.subtitle)}getCtnr(){return[this.aboutCtnr]}injectAboutPage(){this.contents=this.contents||this.getCtnr(),this.domMultiplexor.setContent(this.contents)}},o=t.p+"7b27b85577626bb1b309882a8a8a35ee.jpg";var i=class{constructor(){this.contents=null,this.domMultiplexor=new r,this.contactCtnr=document.createElement("address"),this.imgElem=document.createElement("img"),this.header=document.createElement("h1"),this.email=document.createElement("div"),this.cellular=document.createElement("div"),this.whats=document.createElement("div"),this.contactCtnr.id="contact-container",this.imgElem.src=o,this.header.innerText="Contact",this.email.className="email",this.email.innerHTML='<a href="mailto:contact@atlanticburger.com">contact@atlanticburger.com</a>',this.cellular.className="cell",this.cellular.innerHTML='Cell phone: <a href="tel:4433005440">555 555 5555</a>',this.whats.className="whats",this.whats.innerHTML='Whatsapp: <a href="https://api.whatsapp.com/send?phone=+525555555555">+52 555 555 5555</a>',this.contactCtnr.appendChild(this.imgElem),this.contactCtnr.appendChild(this.header),this.contactCtnr.appendChild(this.email),this.contactCtnr.appendChild(this.cellular),this.contactCtnr.appendChild(this.whats)}getCtnr(){return[this.contactCtnr]}injectContactPage(){this.contents=this.contents||this.getCtnr(),this.domMultiplexor.setContent(this.contents)}},s=t.p+"e102b451dcbe8ce32fe0ed84321e5ddd.jpg",c=t.p+"520bfc973caf7c66961d492b00413e47.jpg";var l=class{constructor(){this.domMultiplexor=new r,this.dishesInfo=[{img:s,head:"Big Cheese",body:"Hexagon freegan pitchfork YOLO photo booth deep v enamel pin XOXO. Sartorial thundercats next level, heirloom godard banh mi stumptown glossier jean shorts lomo raclette. Kickstarter ugh mlkshk cold-pressed everyday carry coloring book master cleanse heirloom freegan deep v enamel pin woke migas man bun."},{img:c,head:"Clasic Deal",body:"Hexagon freegan pitchfork YOLO photo booth deep v enamel pin XOXO. Sartorial thundercats next level, heirloom godard banh mi stumptown glossier jean shorts lomo raclette. Kickstarter ugh mlkshk cold-pressed everyday carry coloring book master cleanse heirloom freegan deep v enamel pin woke migas man bun."},{img:s,head:"Famous Atlantic",body:"Hexagon freegan pitchfork YOLO photo booth deep v enamel pin XOXO. Sartorial thundercats next level, heirloom godard banh mi stumptown glossier jean shorts lomo raclette. Kickstarter ugh mlkshk cold-pressed everyday carry coloring book master cleanse heirloom freegan deep v enamel pin woke migas man bun."},{img:c,head:"Famous Star with Chesse",body:"Hexagon freegan pitchfork YOLO photo booth deep v enamel pin XOXO. Sartorial thundercats next level, heirloom godard banh mi stumptown glossier jean shorts lomo raclette. Kickstarter ugh mlkshk cold-pressed everyday carry coloring book master cleanse heirloom freegan deep v enamel pin woke migas man bun."},{img:s,head:"Super Star with Chesse",body:"Hexagon freegan pitchfork YOLO photo booth deep v enamel pin XOXO. Sartorial thundercats next level, heirloom godard banh mi stumptown glossier jean shorts lomo raclette. Kickstarter ugh mlkshk cold-pressed everyday carry coloring book master cleanse heirloom freegan deep v enamel pin woke migas man bun."},{img:c,head:"Western Bacon Cheese Burger",body:"Hexagon freegan pitchfork YOLO photo booth deep v enamel pin XOXO. Sartorial thundercats next level, heirloom godard banh mi stumptown glossier jean shorts lomo raclette. Kickstarter ugh mlkshk cold-pressed everyday carry coloring book master cleanse heirloom freegan deep v enamel pin woke migas man bun."},{img:s,head:"Jalapeño",body:"Hexagon freegan pitchfork YOLO photo booth deep v enamel pin XOXO. Sartorial thundercats next level, heirloom godard banh mi stumptown glossier jean shorts lomo raclette. Kickstarter ugh mlkshk cold-pressed everyday carry coloring book master cleanse heirloom freegan deep v enamel pin woke migas man bun."},{img:c,head:"Doble Jalapeño",body:"Hexagon freegan pitchfork YOLO photo booth deep v enamel pin XOXO. Sartorial thundercats next level, heirloom godard banh mi stumptown glossier jean shorts lomo raclette. Kickstarter ugh mlkshk cold-pressed everyday carry coloring book master cleanse heirloom freegan deep v enamel pin woke migas man bun."},{img:s,head:"Teriyaki Burger",body:"Hexagon freegan pitchfork YOLO photo booth deep v enamel pin XOXO. Sartorial thundercats next level, heirloom godard banh mi stumptown glossier jean shorts lomo raclette. Kickstarter ugh mlkshk cold-pressed everyday carry coloring book master cleanse heirloom freegan deep v enamel pin woke migas man bun."},{img:c,head:"The Big Atlantic",body:"Hexagon freegan pitchfork YOLO photo booth deep v enamel pin XOXO. Sartorial thundercats next level, heirloom godard banh mi stumptown glossier jean shorts lomo raclette. Kickstarter ugh mlkshk cold-pressed everyday carry coloring book master cleanse heirloom freegan deep v enamel pin woke migas man bun."}],this.dishCtnr=document.createElement("div"),this.dishCtnr.id="dish-container",this.dishesInfo.forEach(({img:e,head:n,body:t})=>{this.dish=document.createElement("div"),this.dish.className="dish",this.dishCtnr.appendChild(this.dish),this.imgElem=document.createElement("img"),this.imgElem.src=e,this.dish.appendChild(this.imgElem),this.headElem=document.createElement("h3"),this.headElem.innerText=n,this.dish.appendChild(this.headElem),this.bodyElem=document.createElement("p"),this.bodyElem.innerText=t,this.dish.appendChild(this.bodyElem)})}getCtnr(){return[this.dishCtnr]}injectMenuPage(){this.contents=this.contents||this.getCtnr(),this.domMultiplexor.setContent(this.contents)}};var d=class{fade(e,n=100,t=0,r=10,a=1){!function o(){t+=a,e.style.opacity=t/10,t!==r&&setTimeout(o,n)}()}fadeIn(e,n=100){this.fade(e,n)}fadeSwap(e,n,t=100){let r=10,a=-1;!function o(){r+=a,e.style.opacity=r/10,0===r&&(n(),a=1),r<10&&setTimeout(o,t)}()}};const h=new a,m=new i,u=new l,p=new r,g=new d;let f;const b=(e,n,t)=>{p.qrySelector(e).addEventListener("click",((e,n)=>()=>{n!==f&&(g.fadeSwap(p.getMainContainer(),e,42),f=n)})(n,t))},v=()=>{h.injectAboutPage()},x=()=>{m.injectContactPage()},y=()=>{u.injectMenuPage()};window.onload=function(){h.injectAboutPage(),b("about",v,1),b("contact",x,2),b("dishes",y,3),g.fadeIn(document.getElementsByTagName("body")[0],50)}}]);