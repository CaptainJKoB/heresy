/*! (c) Andrea Giammarchi - ISC */var heresy=function(e){"use strict";var t,n="-"+Math.random().toFixed(6)+"%",r=!1;
/*! (c) Andrea Giammarchi - ISC */try{"content"in(t=document.createElement("template"))&&(t.innerHTML='<p tabindex="'+n+'"></p>',t.content.childNodes[0].getAttribute("tabindex")==n)||(n="_dt: "+n.slice(1,-1)+";",r=!0)}catch(e){}/*! (c) Andrea Giammarchi - ISC */var o="\x3c!--"+n+"--\x3e",s=8,a=1,i=3,c=/^(?:style|textarea)$/i,l=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
/*! (c) Andrea Giammarchi - ISC */
function u(e){return e.join(o).replace(m,k).replace(v,b)}/*! (c) Andrea Giammarchi - ISC */var f=" \\f\\n\\r\\t",h="[^"+f+"\\/>\"'=]+",p="["+f+"]+"+h,d="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",g="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+h.replace("\\/","")+"))?)",v=new RegExp(d+p+g+"+)(["+f+"]*/?>)","g"),m=new RegExp(d+p+g+"*)(["+f+"]*/>)","g"),y=new RegExp("("+p+"\\s*=\\s*)(['\"]?)"+o+"\\2","gi");function b(e,t,n,r){return"<"+t+n.replace(y,w)+r}function w(e,t,r){return t+(r||'"')+n+(r||'"')}function k(e,t,n){return l.test(t)?e:"<"+t+n+"></"+t+">"}var E=(...e)=>e,x=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(e?t[1]:n),o.setEndAfter(r),o.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,o=0,s=r.length;o<s;o++)t.appendChild(r[o]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice);
/*! (c) Andrea Giammarchi - ISC */const{isArray:N}=Array,A=x.prototype.nodeType;function C(e,t){this.type=e,this.args=t}Object.freeze(C);const $=e=>document.createElementNS("http://www.w3.org/1999/xhtml",e),M=(e,t)=>("svg"===t?j:S)(e),S=e=>{const t=$("template");return t.innerHTML=e,t.content},j=e=>{const{content:t}=$("template"),n=$("div");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>";const{childNodes:r}=n.firstChild;let{length:o}=r;for(;o--;)t.appendChild(r[0]);return t},{indexOf:T}=[],O=(e,t,n,r,o,s)=>{const a="selectedIndex"in t;let i=a;for(;r<o;){const o=e(n[r],1);if(t.insertBefore(o,s),a&&i&&o.selected){i=!i;let{selectedIndex:e}=t;t.selectedIndex=e<0?r:T.call(t.querySelectorAll("option"),o)}r++}},W=(e,t)=>e==t,L=e=>e,_=(e,t,n,r,o,s,a)=>{const i=s-o;if(i<1)return-1;for(;n-t>=i;){let i=t,c=o;for(;i<n&&c<s&&a(e[i],r[c]);)i++,c++;if(c===s)return t;t=i+1}return-1},Z=(e,t,n,r,o)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o,R=(e,t,n,r,o)=>{for(;r<o;)P(e(n[r++],-1),t)},z=(e,t,n)=>{let r=1,o=t;for(;r<o;){const t=(r+o)/2>>>0;n<e[t]?o=t:r=t+1}return r},D=(e,t,n,r,o,s,a,i,c,l,u,f,h)=>{((e,t,n,r,o,s,a,i,c)=>{const l=new Map,u=e.length;let f=a,h=0;for(;h<u;)switch(e[h++]){case 0:o++,f++;break;case 1:l.set(r[o],1),O(t,n,r,o++,o,f<i?t(s[f],0):c);break;case-1:f++}for(h=0;h<u;)switch(e[h++]){case 0:a++;break;case-1:l.has(s[a])?a++:R(t,n,s,a++,a)}})(((e,t,n,r,o,s,a)=>{const i=n+s,c=[];let l,u,f,h,p,d,g;e:for(l=0;l<=i;l++){if(l>50)return null;for(g=l-1,p=l?c[l-1]:[0,0],d=c[l]=[],u=-l;u<=l;u+=2){for(f=(h=u===-l||u!==l&&p[g+u-1]<p[g+u+1]?p[g+u+1]:p[g+u-1]+1)-u;h<s&&f<n&&a(r[o+h],e[t+f]);)h++,f++;if(h===s&&f===n)break e;d[l+u]=h}}const v=Array(l/2+i/2);let m=v.length-1;for(l=c.length-1;l>=0;l--){for(;h>0&&f>0&&a(r[o+h-1],e[t+f-1]);)v[m--]=0,h--,f--;if(!l)break;g=l-1,p=l?c[l-1]:[0,0],(u=h-f)===-l||u!==l&&p[g+u-1]<p[g+u+1]?(f--,v[m--]=1):(h--,v[m--]=-1)}return v})(n,r,s,a,i,l,f)||((e,t,n,r,o,s,a,i)=>{let c=0,l=r<i?r:i;const u=Array(l++),f=Array(l);f[0]=-1;for(let e=1;e<l;e++)f[e]=a;const h=new Map;for(let e=s;e<a;e++)h.set(o[e],e);for(let r=t;r<n;r++){const t=h.get(e[r]);null!=t&&-1<(c=z(f,l,t))&&(f[c]=t,u[c]={newi:r,oldi:t,prev:u[c-1]})}for(c=--l,--a;f[c]>a;)--c;l=i+r-c;const p=Array(l);let d=u[c];for(--n;d;){const{newi:e,oldi:t}=d;for(;n>e;)p[--l]=1,--n;for(;a>t;)p[--l]=-1,--a;p[--l]=0,--n,--a,d=d.prev}for(;n>=t;)p[--l]=1,--n;for(;a>=s;)p[--l]=-1,--a;return p})(n,r,o,s,a,i,c,l),e,t,n,r,a,i,u,h)};let P=(e,t)=>{(P="remove"in e?e=>{e.remove()}:(e,t)=>{e.parentNode===t&&t.removeChild(e)})(e,t)};
/*! (c) 2018 Andrea Giammarchi (ISC) */const V=(e,t,n,r)=>{r||(r={});const o=r.compare||W,s=r.node||L,a=null==r.before?null:s(r.before,0),i=t.length;let c=i,l=0,u=n.length,f=0;for(;l<c&&f<u&&o(t[l],n[f]);)l++,f++;for(;l<c&&f<u&&o(t[c-1],n[u-1]);)c--,u--;const h=l===c,p=f===u;if(h&&p)return n;if(h&&f<u)return O(s,e,n,f,u,Z(s,t,l,i,a)),n;if(p&&l<c)return R(s,e,t,l,c),n;const d=c-l,g=u-f;let v=-1;if(d<g){if(-1<(v=_(n,f,u,t,l,c,o)))return O(s,e,n,f,v,s(t[l],0)),O(s,e,n,v+d,u,Z(s,t,c,i,a)),n}else if(g<d&&-1<(v=_(t,l,c,n,f,u,o)))return R(s,e,t,l,v),R(s,e,t,v+g,c),n;return d<2||g<2?(O(s,e,n,f,u,s(t[l],0)),R(s,e,t,l,c),n):d===g&&((e,t,n,r,o,s)=>{for(;r<o&&s(n[r],e[t-1]);)r++,t--;return 0===t})(n,u,t,l,c,o)?(O(s,e,n,f,u,Z(s,t,c,i,a)),n):(D(s,e,n,f,u,g,t,l,c,d,i,o,a),n)};/*! (c) Andrea Giammarchi - ISC */var G=document.importNode,H="".trim;function F(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function I(e,t,s,a){for(var i=new Map,c=e.attributes,l=[],u=l.slice.call(c,0),f=u.length,h=0;h<f;){var p,d=u[h++],g=d.value===n;if(g||1<(p=d.value.split(o)).length){var v=d.name;if(!i.has(v)){var m=s.shift().replace(g?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+v+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),y=c[m]||c[m.toLowerCase()];if(i.set(v,y),g)t.push(q(y,a,m,null));else{for(var b=p.length-2;b--;)s.shift();t.push(q(y,a,m,p))}}l.push(d)}}h=0;for(var w=(0<(f=l.length)&&r&&!("ownerSVGElement"in e));h<f;){var k=l[h++];w&&(k.value=""),e.removeAttribute(k.name)}var E=e.nodeName;if(/^script$/i.test(E)){var x=document.createElement(E);for(f=c.length,h=0;h<f;)x.setAttributeNode(c[h++].cloneNode(!0));x.textContent=e.textContent,e.parentNode.replaceChild(x,e)}}function B(e,t){return{type:"any",node:e,path:t}}function q(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function U(e,t){return{type:"text",node:e,path:t}}var J=new WeakMap,K=new WeakMap;function Q(e,t){var r=(e.convert||u)(t),l=e.transform;l&&(r=l(r));var f=M(r,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===H.call(r.textContent).length&&e.removeChild(r)}}
/*! (c) Andrea Giammarchi - ISC */(f);/*! (c) Andrea Giammarchi - ISC */var h=[];!function e(t,r,l,u){for(var f=t.childNodes,h=f.length,p=0;p<h;){var d=f[p];switch(d.nodeType){case a:var g=u.concat(p);I(d,r,l,g),e(d,r,l,g);break;case s:var v=d.textContent;if(v===n)l.shift(),r.push(c.test(t.nodeName)?U(t,u):B(d,u.concat(p)));else switch(v.slice(0,2)){case"/*":if("*/"!==v.slice(-2))break;case"👻":t.removeChild(d),p--,h--}break;case i:c.test(t.nodeName)&&H.call(d.textContent)===o&&(l.shift(),r.push(U(t,u)))}p++}}(f,h,t.slice(0),[]);var p={content:f,updates:function(n){for(var r=[],o=h.length,s=0,a=0;s<o;){var i=h[s++],c=F(n,i.path);switch(i.type){case"any":r.push({fn:e.any(c,[]),sparse:!1});break;case"attr":var l=i.sparse,u=e.attribute(c,i.name,i.node);null===l?r.push({fn:u,sparse:!1}):(a+=l.length-2,r.push({fn:u,sparse:!0,values:l}));break;case"text":r.push({fn:e.text(c),sparse:!1}),c.textContent=""}}return o+=a,function(){var e=arguments.length;if(o!==e-1)throw new Error(e-1+" values instead of "+o+"\n"+t.join("${value}"));for(var s=1,a=1;s<e;){var i=r[s-a];if(i.sparse){var c=i.values,l=c[0],u=1,f=c.length;for(a+=f-2;u<f;)l+=arguments[s++]+c[u++];i.fn(l)}else i.fn(arguments[s++])}return n}}};return J.set(t,p),p}function X(e,t){var n=J.get(t)||Q(e,t),r=G.call(document,n.content,!0),o={content:r,template:t,updates:n.updates(r)};return K.set(e,o),o}var Y=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var s,a;return function(i){var c,l,u,f;switch(typeof i){case"object":if(i){if("object"===s){if(!o&&a!==i)for(l in a)l in i||(r[l]="")}else o?r.value="":r.cssText="";for(l in c=o?{}:r,i)u="number"!=typeof(f=i[l])||e.test(l)?f:f+"px",!o&&/^--/.test(l)?c.setProperty(l,u):c[l]=u;s="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(a=c):a=i;break}default:a!=i&&(s="string",a=i,o?r.value=i||"":r.cssText=i||"")}}}}();const ee=(e,t)=>e.nodeType===A?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e,te=(e,t)=>{let n,r=!1;const o=t.cloneNode(!0);return t=>{n!==t&&(n=t,o.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(o)),o.value=t):(o.value=t,r||(r=!0,e.setAttributeNode(o)))))}},ne=(e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},re=/^(?:form|list)$/i,oe=[].slice,se=(e,t)=>e.ownerDocument.createTextNode(t);function ae(e){return this.type=e,t=this,function(e){var n=K.get(t);return null!=n&&n.template===e||(n=X(t,e)),n.updates.apply(null,arguments),n.content};var t}function ie(e){return e(this)}ae.prototype={attribute(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return te(e,n);t="className";case"data":case"props":return ne(e,t);case"style":return Y(e,n,"ownerSVGElement"in e);case"ref":return(e=>t=>{t.current=e})(e);default:return"."===t.slice(0,1)?((e,t,n)=>n?n=>{try{e[t]=n}catch(r){e.setAttribute(t,n)}}:n=>{e[t]=n})(e,t.slice(1),"ownerSVGElement"in e):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}})(e,t):t in e&&!("ownerSVGElement"in e||re.test(t))?ne(e,t):te(e,n)}},any(e,t){const n={node:ee,before:e},r="ownerSVGElement"in e?"svg":"html";let o,s=!1;const a=i=>{switch(typeof i){case"string":case"number":case"boolean":s?o!==i&&(o=i,t[0].textContent=i):(s=!0,o=i,t=V(e.parentNode,t,[se(e,i)],n));break;case"function":a(i(e));break;case"object":case"undefined":if(null==i){s=!1,t=V(e.parentNode,t,[],n);break}default:if(s=!1,o=i,N(i))if(0===i.length)t.length&&(t=V(e.parentNode,t,[],n));else switch(typeof i[0]){case"string":case"number":case"boolean":a(String(i));break;case"function":a(i.map(ie,e));break;case"object":N(i[0])&&(i=i.concat.apply([],i));default:t=V(e.parentNode,t,i,n)}else(e=>"ELEMENT_NODE"in e)(i)?t=V(e.parentNode,t,11===i.nodeType?oe.call(i.childNodes):[i],n):"text"in i?a(String(i.text)):"any"in i?a(i.any):"html"in i?t=V(e.parentNode,t,oe.call(M([].concat(i.html).join(""),r).childNodes),n):"length"in i&&a(oe.call(i))}};return a},text(e){let t;const n=r=>{if(t!==r){t=r;const o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(oe.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}};return n}};const{create:ce,keys:le}=Object,ue=new WeakMap,fe=new WeakMap,he=ae.prototype;let pe=null;const de=e=>{const t=xe("html",e),n=xe("svg",e),r={html:Ee("html",e,!0),svg:Ee("svg",e,!0)};return{html:t,svg:n,inner:r,hook:e=>({html:ke(e,t),svg:ke(e,n),inner:r}),render(t,n){const r=Ne.call(this,t,n,e);return fe.get(t)!==r&&(fe.set(t,r),function(e,t){e.textContent="",e.appendChild(t)}(t,r)),t}}},{html:ge,svg:ve,inner:me,render:ye,hook:be}=de(ae);function we(e,t){return e.nodeType===A?e.valueOf(t):e}function ke(e,t){return function(){const n=e(null);return null===n.current&&(n.current=t.for(n)),we(n.current.apply(null,arguments),!1)}}function Ee(e,t,n){return function(){const r=E.apply(null,arguments);return n||pe?new C(e,r):new t(e).apply(null,r)}}function xe(e,t){const n=new WeakMap,r=Ee(e,t,!1);return r.for=(r,o)=>{const s=n.get(r)||function(e){const t={$:null};return n.set(e,t),t}(r);return null==o&&(o="$"),s[o]||function(n,r){let o=[],s=null;const a=new t(e),i=()=>a.apply(null,Ce(o,1,1,t));return n[r]=function(){o=E.apply(null,arguments);const e=Ne(a,i,t);return s||(s=$e(e))}}(s,o)},r}function Ne(e,t,n){const r=pe;(pe=ue.get(e)||function(e){const t={i:0,length:0,stack:[],update:!1};return ue.set(e,t),t}(e)).i=0;const o=t.call(this);let s;if(o instanceof C){s=we(Ae(o,0,n),pe.update);const{i:e,length:t,stack:r,update:a}=pe;e<t&&r.splice(pe.length=e),a&&(pe.update=!1)}else s=we(o,!1);return pe=r,s}function Ae(e,t,n){const{i:r,length:o,stack:s}=pe,{type:a,args:i}=e,c=r<o;pe.i++,c||(pe.length=s.push({l:t,kind:a,tag:null,tpl:i[0],wire:null})),Ce(i,1,t+1,n);const l=s[r];if(c){const{l:e,kind:n,tag:r,tpl:o,wire:s}=l;if(e===t&&a===n&&o===i[0])return r.apply(null,i),s}const u=new n(a),f=$e(u.apply(null,i));return l.l=t,l.kind=a,l.tag=u,l.tpl=i[0],l.wire=f,r<1&&(pe.update=!0),f}function Ce(e,t,n,r){for(const{length:o}=e;t<o;t++){const o=e[t];"object"==typeof o&&o&&(o instanceof C?e[t]=Ae(o,n-1,r):N(o)&&(e[t]=Ce(o,0,n++,r)))}return e}function $e(e){const t=e.childNodes,{length:n}=t;return 1===n?t[0]:n?new x(t):e}
/*! (c) Andrea Giammarchi - ISC */let Me=null;const Se=e=>{e()},je=()=>Me;function Te(e,t){return e!==this[t]}/*! (c) Andrea Giammarchi - ISC */var Oe="function"==typeof cancelAnimationFrame,We=Oe?cancelAnimationFrame:clearTimeout,Le=Oe?requestAnimationFrame:setTimeout;function _e(e){var t,n,r,o,s;return i(),function(e,i,l){return r=e,o=i,s=l,n||(n=Le(a)),--t<0&&c(!0),c};function a(){i(),r.apply(o,s||[])}function i(){t=e||1/0,n=Oe?0:null}function c(e){var t=!!n;return t&&(We(n),e&&a()),t}}
/*! (c) Andrea Giammarchi - ISC */const Ze=new WeakMap,Re=e=>{const{hook:t,args:n,stack:r,index:o}=je();return r.length<=o&&(r[o]=e,Ze.has(t)||Ze.set(t,_e())),[r[o],e=>{r[o]=e,Ze.get(t)(t,null,n)}]},ze=new WeakMap,De=({hook:e,args:t})=>{e.apply(null,t)};function Pe(e){this.value!==e&&(this.value=e,ze.get(this).forEach(De))}function Ve({hook:e}){return e===this.hook}
/*! (c) Andrea Giammarchi - ISC */const Ge=new WeakMap,He=()=>{},Fe=e=>(t,n)=>{const{hook:r,stack:o,index:s,after:a}=je();if(s<o.length){const t=o[s],{clean:r,invoke:i,update:c,values:l}=t;n&&!n.some(Te,l)||(t.values=n,r&&(t.clean=null,r()),e?a.push(i):c(i))}else{const i=()=>{l.clean=t()};Ge.has(r)||Ge.set(r,{stack:[],update:_e()});const c=Ge.get(r),l={clean:null,invoke:i,stop:He,update:c.update,values:n};o[s]=l,c.stack.push(l),e?a.push(i):l.stop=c.update(i)}},Ie=Fe(!1),Be=Fe(!0),qe=e=>{Ge.has(e)&&Ge.get(e).stack.forEach(e=>{const{clean:t,stop:n}=e;n(),t&&(e.clean=null,t())})},Ue=(e,t)=>{const{stack:n,index:r}=je();return(!t||n.length<=r||t.some(Te,n[r].values))&&(n[r]={current:e(),values:t}),n[r].current};let Je=null;try{Je=new{o(){}}.o}catch(e){}let Ke=e=>(class extends e{});if(Je){const{getPrototypeOf:e,setPrototypeOf:t}=Object,{construct:n}="object"==typeof Reflect?Reflect:{construct(e,n,r){const o=[null];for(let e=0;e<n.length;e++)o.push(n[e]);const s=e.bind.apply(e,o);return t(new s,r.prototype)}};Ke=function(r,o){function s(){return n(o?e(r):r,arguments,s)}return t(s.prototype,r.prototype),t(s,r)}}const Qe={map:{},re:null},Xe=e=>new RegExp(`<(/)?(${e.join("|")})([^A-Za-z0-9:._-])`,"g");let Ye=null;const et=(e,t)=>{const{map:n,re:r}=Ye||t;return e.replace(r,(e,t,r,o)=>{const{tagName:s,is:a,element:i}=n[r];return i?t?`</${a}>`:`<${a}${o}`:t?`</${s}>`:`<${s} is="${a}"${o}`})},tt=({tagName:e,is:t,element:n})=>n?t:`${e}[is="${t}"]`,nt=()=>Ye,rt=e=>{Ye=e},ot={useCallback:(e,t)=>Ue(()=>e,t),useContext:e=>{const{hook:t,args:n}=je(),r=ze.get(e),o={hook:t,args:n};return r.some(Ve,o)||r.push(o),e.value},useEffect:Ie,useLayoutEffect:Be,useMemo:Ue,useReducer:(e,t,n)=>{const r=Re(n?n(t):t);return[r[0],t=>{r[1](e(r[0],t))}]},useRef:e=>{const{stack:t,index:n}=je();return n<t.length?t[n]:t[n]={current:e}},useState:Re},{render:st,html:at,svg:it}=(e=>{const t=ce(he);return le(e).forEach(n=>{t[n]=e[n](t[n]||("convert"===n?u:String))}),n.prototype=t,de(n);function n(){return ae.apply(this,arguments)}})({transform:()=>e=>et(e,Qe)}),ct="_🔥",{defineProperties:lt}=Object,ut=new WeakMap,ft=new WeakMap,ht=new WeakMap,pt=new WeakSet,dt="attributeChangedCallback",gt="connectedCallback",vt=`dis${gt}`,mt=(e,t,n)=>{if(n in e){const r=e[n];t[n]={configurable:!0,value(){return St.call(this),r.apply(this,arguments)}}}else t[n]={configurable:!0,value:St}},yt=e=>{const{prototype:t}=e,n=[],r={html:{configurable:!0,get:Ct},svg:{configurable:!0,get:$t}};if(r[ct]={value:{events:n,info:null}},"handleEvent"in t||(r.handleEvent={configurable:!0,value:Mt}),"render"in t&&t.render.length){const{oninit:e}=t;lt(t,{oninit:{configurable:!0,value(){const t=(e=>{const t=[];return function n(){const r=Me,o=[];let s=0;Me={hook:n,args:arguments,stack:t,get index(){return s++},after:o};try{return e.apply(null,arguments)}finally{Me=r,o.forEach(Se)}}})(this.render.bind(this,ot));this.render=t,this.addEventListener("disconnected",qe.bind(null,t),!1),e&&e.apply(this,arguments)}}})}"oninit"in t&&(n.push("init"),mt(t,r,"render")),mt(t,r,dt),mt(t,r,gt),mt(t,r,vt),[[dt,"onattributechanged",jt],[gt,"onconnected",Tt],[vt,"ondisconnected",Wt],[gt,"render",Ot]].forEach(([e,o,s])=>{if(!(e in t)&&o in t)if("render"!==o&&n.push(o.slice(2)),e in r){const t=r[e].value;r[e]={configurable:!0,value(){return t.apply(this,arguments),s.apply(this,arguments)}}}else r[e]={configurable:!0,value:s}});const o=e.booleanAttributes||[];o.forEach(e=>{e in t||(r[e]={configurable:!0,get(){return this.hasAttribute(e)},set(t){t&&"false"!==t?this.setAttribute(e,t):this.removeAttribute(e)}})});const s=e.observedAttributes||[];s.forEach(e=>{e in t||(r[e]={configurable:!0,get(){return this.getAttribute(e)},set(t){null==t?this.removeAttribute(e):this.setAttribute(e,t)}})}),(e.mappedAttributes||[]).forEach(e=>{const o=new WeakMap,s="on"+e in t;s&&n.push(e),r[e]={configurable:!0,get(){return o.get(this)},set(t){if(o.set(this,t),s){const n=bt(e);if(n.detail=t,pt.has(this))this.dispatchEvent(n);else{const e=ht.get(this);e?e.push(n):ht.set(this,[n])}}}}}),lt(t,r);const a=o.concat(s);return a.length?lt(e,{observedAttributes:{configurable:!0,get:()=>a}}):e},bt=e=>new Event(e),wt=(...e)=>new C("html",e);wt.for=at.for;const kt=(...e)=>new C("svg",e);kt.for=it.for;const Et=(e,t,n)=>{const r=xt(e,t,new WeakMap);return n.set(e,r),r},xt=(e,t,n)=>(r,...o)=>{const s=(e=>e)(r),a=n.get(s)||((e,t,{info:n})=>{const r=n?et(t.join(ct),n).split(ct):t;return e.set(t,r),r})(n,s,e[ct]);return st(e,()=>t(a,...o))};function Nt(e){this.addEventListener(e,this)}function At(e){this.dispatchEvent(e)}function Ct(){return ut.get(this)||Et(this,wt,ut)}function $t(){return ft.get(this)||Et(this,kt,ft)}function Mt(e){this[`on${e.type}`](e)}function St(){if(!pt.has(this)){pt.add(this),this[ct].events.forEach(Nt,this),this.dispatchEvent(bt("init"));const e=ht.get(this);e&&(ht.delete(this),e.forEach(At,this))}}function jt(e,t,n){const r=bt("attributechanged");r.attributeName=e,r.oldValue=t,r.newValue=n,this.dispatchEvent(r)}function Tt(){this.dispatchEvent(bt("connected"))}function Ot(){this.render()}function Wt(){this.dispatchEvent(bt("disconnected"))}const{create:Lt,defineProperty:_t,defineProperties:Zt,getOwnPropertyNames:Rt,getOwnPropertySymbols:zt,getOwnPropertyDescriptor:Dt,keys:Pt}=Object,Vt={element:HTMLElement},Gt=new WeakMap,Ht=new WeakMap,Ft=new WeakMap,It=e=>{const{render:t}=e;_t(e,"render",{configurable:!0,value(){if(t&&t.apply(this,arguments),this.parentNode){const e=document.createRange();e.setStartBefore(this.firstChild),e.setEndAfter(this.lastChild),this.parentNode.replaceChild(e.extractContents(),this)}}})},Bt=(e,t)=>("string"==typeof e?Ut(e,t,""):Ut(e.name,e,"")).Class,qt=e=>{const t=Lt(null),n=Lt(null),r={prototype:n,statics:t};return Rt(e).concat(zt(e)).forEach(r=>{const o=Dt(e,r);switch(o.enumerable=!1,r){case"extends":r="tagName";case"contains":case"includes":case"name":case"booleanAttributes":case"mappedAttributes":case"observedAttributes":case"style":case"tagName":t[r]=o;break;default:n[r]=o}}),r},Ut=(e,t,n)=>{if(!/^([A-Z][A-Za-z0-9_]*)(<([A-Za-z0-9:._-]+)>|:([A-Za-z0-9:._-]+))?$/.test(e))throw"Invalid name";const{$1:r,$3:o,$4:s}=RegExp;let a=o||s||t.tagName||t.extends||"element";const i="fragment"===a;if(i)a="element";else if(!/^[A-Za-z0-9:._-]+$/.test(a))throw"Invalid tag";let c="",l="";a.indexOf("-")<0?(c=function(e,t){return e.replace(/([A-Z])([A-Z][a-z])/g,t="$1"+(t||"-")+"$2").replace(/([a-z])([A-Z])/g,t).toLowerCase()}(r)+n).indexOf("-")<0&&(l="-heresy"):(c=a+n,a="element");const u=c+l;if(customElements.get(u))throw`Duplicated ${u} definition`;const f=Ke("object"==typeof t?Ft.get(t)||((e,t,n)=>{const{statics:r,prototype:o}=qt(e),s=Ke(Vt[t]||(Vt[t]=document.createElement(t).constructor),!1);return Zt(s.prototype,o),Zt(s,r),n&&It(s.prototype),Ft.set(e,yt(s)),s})(t,a,i):Gt.get(t)||((e,t)=>{const n=Ke(e,!1);return t&&It(n.prototype),Gt.set(e,yt(n)),n})(t,i),!0),h="element"===a;if(_t(f,"new",{value:h?()=>document.createElement(u):()=>document.createElement(a,{is:u})}),_t(f.prototype,"is",{value:u}),""===n){const e=(e=>{const{length:t}=e;let n=0,r=0;for(;r<t;)n=(n<<5)-n+e.charCodeAt(r++),n&=n;return n.toString(36)})(c.toUpperCase());Qe.map[r]=Qt(f,a,u,{id:e,i:0}),Qe.re=Xe(Pt(Qe.map))}const p=[u,f];return h||p.push({extends:a}),customElements.define(...p),{Class:f,is:u,name:r,tagName:a}};let Jt=Math.random();const Kt=e=>{let t=Ht.get(e);if(!t){const n=("Heresy"+ ++Jt).replace(/[^He-y0-9]/g,"");Ht.set(e,t=Bt(n,e))}return()=>t.new()},Qt=(e,t,n,r)=>{const{prototype:o}=e,s=((e,t)=>({tagName:e,is:t,element:"element"===e}))(t,n),a=[tt(s)],i=e.includes||e.contains;if(i){const e={};Pt(i).forEach(t=>{const n=`-${r.id}-${r.i++}`,{Class:o,is:s,name:c,tagName:l}=Ut(t,i[t],n);a.push(tt(e[c]=Qt(o,l,s,r)))});const t=Xe(Pt(e)),{events:n}=o[ct],s={events:n,info:{map:e,re:t}};if(_t(o,ct,{value:s}),"render"in o){const{render:e}=o,{info:t}=s;_t(o,"render",{configurable:!0,value(){const n=nt();rt(t);const r=e.apply(this,arguments);return rt(n),r}})}}return"style"in e&&(e=>{if((e||"").length){const t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e));const n=document.head||document.querySelector("head");n.insertBefore(t,n.lastChild)}})(e.style(...a)),s};return e.createContext=e=>{const t={value:e,provide:Pe};return ze.set(t,[]),t},e.define=Bt,e.html=wt,e.ref=(e,t)=>e?e[t]||(e[t]={current:null}):{current:null},e.render=(e,t)=>st(e,"function"==typeof t?t:t instanceof C?()=>t:Kt(t)),e.svg=kt,e}({});
