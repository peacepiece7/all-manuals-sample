(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{8566:function(e,t,n){"use strict";var r=n(930),o=n(5696),i=n(7980);t.default=function(e){var t,n=e.src,a=e.sizes,d=e.unoptimized,y=void 0!==d&&d,j=e.priority,k=void 0!==j&&j,S=e.loading,A=e.lazyRoot,M=void 0===A?null:A,P=e.lazyBoundary,x=void 0===P?"200px":P,_=e.className,E=e.quality,z=e.width,C=e.height,R=e.objectFit,I=e.objectPosition,D=e.onLoadingComplete,L=e.loader,q=void 0===L?O:L,H=e.placeholder,U=void 0===H?"empty":H,N=e.blurDataURL,W=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),B=c.useRef(null),F=c.useContext(f.ImageConfigContext),T=c.useMemo((function(){var e=h||F||s.imageConfigDefault,t=[].concat(i(e.deviceSizes),i(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return p({},e,{allSizes:t,deviceSizes:n})}),[F]),K=W,G=a?"responsive":"intrinsic";"layout"in K&&(K.layout&&(G=K.layout),delete K.layout);var J="";if(function(e){return"object"===typeof e&&(m(e)||function(e){return void 0!==e.src}(e))}(n)){var Q=m(n)?n.default:n;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(N=N||Q.blurDataURL,J=Q.src,(!G||"fill"!==G)&&(C=C||Q.height,z=z||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}n="string"===typeof n?n:J;var V=w(z),$=w(C),X=w(E),Y=!k&&("lazy"===S||"undefined"===typeof S);(n.startsWith("data:")||n.startsWith("blob:"))&&(y=!0,Y=!1);g.has(n)&&(Y=!1);0;var Z,ee=l.useIntersection({rootRef:M,rootMargin:x,disabled:!Y}),te=o(ee,2),ne=te[0],re=te[1],oe=!Y||re,ie={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,ue={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:R,objectPosition:I},se="blur"===U?{filter:"blur(20px)",backgroundSize:R||"cover",backgroundImage:'url("'.concat(N,'")'),backgroundPosition:I||"0% 0%"}:{};if("fill"===G)ie.display="block",ie.position="absolute",ie.top=0,ie.left=0,ie.bottom=0,ie.right=0;else if("undefined"!==typeof V&&"undefined"!==typeof $){var le=$/V,fe=isNaN(le)?"100%":"".concat(100*le,"%");"responsive"===G?(ie.display="block",ie.position="relative",ce=!0,ae.paddingTop=fe):"intrinsic"===G?(ie.display="inline-block",ie.position="relative",ie.maxWidth="100%",ce=!0,ae.maxWidth="100%",Z="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(V,"%27%20height=%27").concat($,"%27/%3e")):"fixed"===G&&(ie.display="inline-block",ie.position="relative",ie.width=V,ie.height=$)}else 0;var de={src:v,srcSet:void 0,sizes:void 0};oe&&(de=b({config:T,src:n,unoptimized:y,layout:G,width:V,quality:X,sizes:a,loader:q}));var pe=n;0;0;var he=(r(t={},"imagesrcset",de.srcSet),r(t,"imagesizes",de.sizes),t),ge=c.default.useLayoutEffect,ve=c.useRef(D);return c.useEffect((function(){ve.current=D}),[D]),ge((function(){ne(B.current)}),[ne]),c.useEffect((function(){!function(e,t,n,r,o){var i=function(){var n=e.current;n&&(n.src!==v&&("decode"in n?n.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(g.add(t),"blur"===r&&(n.style.filter="",n.style.backgroundSize="",n.style.backgroundImage="",n.style.backgroundPosition=""),o.current)){var i=n.naturalWidth,a=n.naturalHeight;o.current({naturalWidth:i,naturalHeight:a})}})))};e.current&&(e.current.complete?i():e.current.onload=i)}(B,pe,0,U,ve)}),[pe,G,U,oe]),c.default.createElement("span",{style:ie},ce?c.default.createElement("span",{style:ae},Z?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Z}):null):null,c.default.createElement("img",Object.assign({},K,de,{decoding:"async","data-nimg":G,className:_,ref:B,style:p({},ue,se)})),Y&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},K,b({config:T,src:n,unoptimized:y,layout:G,width:V,quality:X,sizes:a,loader:q}),{decoding:"async","data-nimg":G,style:ue,className:_,loading:S||"lazy"}))),k?c.default.createElement(u.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+de.src+de.srcSet+de.sizes,rel:"preload",as:"image",href:de.srcSet?void 0:de.src},he))):null)};var a,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),u=(a=n(2717))&&a.__esModule?a:{default:a},s=n(5809),l=n(639),f=n(9239);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"},g=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var y=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,i=new URL("".concat(t.path).concat(j(n))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(j(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(j(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function m(e){return void 0!==e.default}function b(e){var t=e.config,n=e.src,r=e.unoptimized,o=e.layout,a=e.width,c=e.quality,u=e.sizes,s=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var l=function(e,t,n,r){var o=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var c,u=/(^|\s)(1?\d?\d)vw/g,s=[];c=u.exec(r);c)s.push(parseInt(c[2]));if(s.length){var l=.01*Math.min.apply(Math,s);return{widths:a.filter((function(e){return e>=o[0]*l})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:o,kind:"w"}:{widths:i(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,o,u),f=l.widths,d=l.kind,p=f.length-1;return{sizes:u||"w"!==d?u:"100vw",srcSet:f.map((function(e,r){return"".concat(s({config:t,src:n,quality:c,width:e})," ").concat("w"===d?e:r+1).concat(d)})).join(", "),src:s({config:t,src:n,quality:c,width:f[p]})}}function w(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function O(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=y.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(n))}function j(e){return"/"===e[0]?e.slice(1):e}},7942:function(e,t,n){"use strict";var r=n(5696);t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(4957),c=n(9898),u=n(639);var s={};function l(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),f=i.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?a.resolveHref(o,e.as):c||i}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,g=e.replace,v=e.shallow,y=e.scroll,m=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,w=u.useIntersection({rootMargin:"200px"}),O=r(w,2),j=O[0],k=O[1],S=i.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);i.default.useEffect((function(){var e=k&&n&&a.isLocalURL(d),t="undefined"!==typeof m?m:o&&o.locale,r=s[d+"%"+p+(t?"%"+t:"")];e&&!r&&l(o,d,p,{locale:t})}),[p,d,k,m,n,o]);var A={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:c}))}(e,o,d,p,g,v,y,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(d)&&l(o,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof m?m:o&&o.locale,P=o&&o.isLocaleDomain&&a.getDomainLocale(p,M,o&&o.locales,o&&o.domainLocales);A.href=P||a.addBasePath(a.addLocale(p,M,o&&o.defaultLocale))}return i.default.cloneElement(t,A)};t.default=f},639:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!a,l=o.useRef(),f=o.useState(!1),d=r(f,2),p=d[0],h=d[1],g=o.useState(t?t.current:null),v=r(g,2),y=v[0],m=v[1],b=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),s||p||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),u.push(n));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:i,elements:o}),t}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),c.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:y,rootMargin:n}))}),[s,y,n,p]);return o.useEffect((function(){if(!a&&!p){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[p]),o.useEffect((function(){t&&m(t.current)}),[t]),[b,p]};var o=n(7294),i=n(6286),a="undefined"!==typeof IntersectionObserver;var c=new Map,u=[]},8e3:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},5646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},i=n(8e3);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},2717:function(e,t,n){"use strict";var r=n(930);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=f,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),c=(i=n(1585))&&i.__esModule?i:{default:i},u=n(8e3),s=n(5850),l=n(5646);function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var u=0,s=p.length;u<s;u++){var l=p[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var f=o.props[l],d=r[l]||new Set;"name"===l&&a||!d.has(f)?(d.add(f),r[l]=d):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,a.default.cloneElement(e,c)}return a.default.cloneElement(e,{key:i})}))}var g=function(e){var t=e.children,n=a.useContext(u.AmpStateContext),r=a.useContext(s.HeadManagerContext);return a.default.createElement(c.default,{reduceComponentsToState:h,headManager:r,inAmpMode:l.isInAmpMode(n)},t)};t.default=g},1585:function(e,t,n){"use strict";var r=n(7980),o=n(3227),i=n(8361),a=(n(2191),n(5971)),c=n(2715),u=n(1193);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var f=function(e){a(n,e);var t=s(n);function n(e){var i;return o(this,n),(i=t.call(this,e)).emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},5675:function(e,t,n){e.exports=n(8566)},1664:function(e,t,n){e.exports=n(7942)}}]);