/*! (c) Andrea Giammarchi - ISC */var lighterhtml=function(e){"use strict";var t=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(e?t[1]:n),o.setEndAfter(r),o.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,o=0,a=r.length;o<a;o++)t.appendChild(r[o]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice);const{isArray:n}=Array,r=t.prototype.nodeType;var o=function(e){var t="fragment";return function(e,r){return("svg"===r?function(e){var r=n(t),o=n("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",function(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}(r,o.firstChild.childNodes),r}:function(e){var t=n("template");return t.innerHTML=e,t.content})(e)};function n(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(document);const a=(e,t,n,r,o,a)=>{if(o-r<2)t.insertBefore(e(n[r],1),a);else{const i=t.ownerDocument.createDocumentFragment();for(;r<o;)i.appendChild(e(n[r++],1));t.insertBefore(i,a)}},i=(e,t)=>e==t,s=e=>e,c=(e,t,n,r,o,a,i)=>{const s=a-o;if(s<1)return-1;for(;n-t>=s;){let s=t,c=o;for(;s<n&&c<a&&i(e[s],r[c]);)s++,c++;if(c===a)return t;t=s+1}return-1},l=(e,t,n,r,o)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o,u=(e,t,n,r,o)=>{if(o-r<2)t.removeChild(e(n[r],-1));else{const a=t.ownerDocument.createRange();a.setStartBefore(e(n[r],-1)),a.setEndAfter(e(n[o-1],-1)),a.deleteContents()}},f=(e,t,n)=>{let r=1,o=t;for(;r<o;){const t=(r+o)/2>>>0;n<e[t]?o=t:r=t+1}return r},p=(e,t,n,r,o,i,s,c,l,p,d,h,m)=>{((e,t,n,r,o,i,s,c,l)=>{const f=new Map,p=e.length;let d=s,h=0;for(;h<p;)switch(e[h++]){case 0:o++,d++;break;case 1:f.set(r[o],1),a(t,n,r,o++,o,d<c?t(i[d],0):l);break;case-1:d++}for(h=0;h<p;)switch(e[h++]){case 0:s++;break;case-1:f.has(i[s])?s++:u(t,n,i,s++,s)}})(((e,t,n,r,o,a,i)=>{const s=n+a,c=[];let l,u,f,p,d,h,m;e:for(l=0;l<=s;l++){if(l>50)return null;for(m=l-1,d=l?c[l-1]:[0,0],h=c[l]=[],u=-l;u<=l;u+=2){for(f=(p=u===-l||u!==l&&d[m+u-1]<d[m+u+1]?d[m+u+1]:d[m+u-1]+1)-u;p<a&&f<n&&i(r[o+p],e[t+f]);)p++,f++;if(p===a&&f===n)break e;h[l+u]=p}}const g=Array(l/2+s/2);let v=g.length-1;for(l=c.length-1;l>=0;l--){for(;p>0&&f>0&&i(r[o+p-1],e[t+f-1]);)g[v--]=0,p--,f--;if(!l)break;m=l-1,d=l?c[l-1]:[0,0],(u=p-f)==-l||u!==l&&d[m+u-1]<d[m+u+1]?(f--,g[v--]=1):(p--,g[v--]=-1)}return g})(n,r,i,s,c,p,h)||((e,t,n,r,o,a,i,s)=>{let c=0,l=r<s?r:s;const u=Array(l++),p=Array(l);p[0]=-1;for(let e=1;e<l;e++)p[e]=i;const d=new Map;for(let e=a;e<i;e++)d.set(o[e],e);for(let r=t;r<n;r++){const t=d.get(e[r]);null!=t&&-1<(c=f(p,l,t))&&(p[c]=t,u[c]={newi:r,oldi:t,prev:u[c-1]})}for(c=--l,--i;p[c]>i;)--c;l=s+r-c;const h=Array(l);let m=u[c];for(--n;m;){const{newi:e,oldi:t}=m;for(;n>e;)h[--l]=1,--n;for(;i>t;)h[--l]=-1,--i;h[--l]=0,--n,--i,m=m.prev}for(;n>=t;)h[--l]=1,--n;for(;i>=a;)h[--l]=-1,--i;return h})(n,r,o,i,s,c,l,p),e,t,n,r,s,c,d,m)},d=(e,t,n,r)=>{r||(r={});const o=r.compare||i,f=r.node||s,d=null==r.before?null:f(r.before,0),h=t.length;let m=h,g=0,v=n.length,w=0;for(;g<m&&w<v&&o(t[g],n[w]);)g++,w++;for(;g<m&&w<v&&o(t[m-1],n[v-1]);)m--,v--;const y=g===m,b=w===v;if(y&&b)return n;if(y&&w<v)return a(f,e,n,w,v,l(f,t,g,h,d)),n;if(b&&g<m)return u(f,e,t,g,m),n;const N=m-g,x=v-w;let C=-1;if(N<x){if(-1<(C=c(n,w,v,t,g,m,o)))return a(f,e,n,w,C,f(t[g],0)),a(f,e,n,C+N,v,l(f,t,m,h,d)),n}else if(x<N&&-1<(C=c(t,g,m,n,w,v,o)))return u(f,e,t,g,C),u(f,e,t,C+x,m),n;return N<2||x<2?(a(f,e,n,w,v,f(t[g],0)),u(f,e,t,g,m),n):N===x&&((e,t,n,r,o,a)=>{for(;r<o&&a(n[r],e[t-1]);)r++,t--;return 0===t})(n,v,t,g,m,o)?(a(f,e,n,w,v,l(f,t,m,h,d)),n):(p(f,e,n,w,v,x,t,g,m,N,h,o,d),n)};var h,m="-"+Math.random().toFixed(6)+"%";"content"in(h=document.createElement("template"))&&(h.innerHTML='<p tabindex="'+m+'"></p>',h.content.childNodes[0].getAttribute("tabindex")==m)||(m="_dt: "+m.slice(1,-1)+";");var g="\x3c!--"+m+"--\x3e",v=8,w=1,y=3,b=/^(?:style|textarea)$/i,N=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var x=" \\f\\n\\r\\t",C="[ "+x+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",k="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",E="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",A=new RegExp(k+C+E+"+)([ "+x+"]*/?>)","g"),j=new RegExp(k+C+E+"*)([ "+x+"]*/>)","g"),S=new RegExp("("+C+"\\s*=\\s*)(['\"]?)"+g+"\\2","gi");function $(e,t,n,r){return"<"+t+n.replace(S,T)+r}function T(e,t,n){return t+(n||'"')+m+(n||'"')}function M(e,t,n){return N.test(t)?e:"<"+t+n+"></"+t+">"}var D=String.prototype.trim;function L(e,t,n,r){return{name:r,node:t,path:n,type:e}}function _(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function O(e,t,n,r){for(var o=new Map,a=e.attributes,i=[],s=i.slice.call(a,0),c=s.length,l=0;l<c;){var u=s[l++];if(u.value===m){var f=u.name;if(!o.has(f)){var p=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),d=a[p]||a[p.toLowerCase()];o.set(f,d),t.push(L("attr",d,r,p))}i.push(u)}}for(c=i.length,l=0;l<c;){var h=i[l++];/^id$/i.test(h.name)?e.removeAttribute(h.name):e.removeAttributeNode(h)}var g=e.nodeName;if(/^script$/i.test(g)){var v=document.createElement(g);for(c=a.length,l=0;l<c;)v.setAttributeNode(a[l++].cloneNode(!0));v.textContent=e.textContent,e.parentNode.replaceChild(v,e)}}var R=document.importNode,G=String.prototype.trim,V=new WeakMap,W=new WeakMap;function B(e,t){var n=function(e){return e.join(g).replace(j,M).replace(A,$)}(t),r=e.transform;r&&(n=r(n));var a=o(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===G.call(r.textContent).length&&e.removeChild(r)}}(a);var i=[];!function e(t,n,r,o){for(var a=t.childNodes,i=a.length,s=0;s<i;){var c=a[s];switch(c.nodeType){case w:var l=o.concat(s);O(c,n,r,l),e(c,n,r,l);break;case v:c.textContent===m&&(r.shift(),n.push(b.test(t.nodeName)?L("text",t,o):L("any",c,o.concat(s))));break;case y:b.test(t.nodeName)&&D.call(c.textContent)===g&&(r.shift(),n.push(L("text",t,o)))}s++}}(a,i,t.slice(0),[]);var s={content:a,updates:function(n){for(var r=[],o=i.length,a=0;a<o;){var s=i[a++],c=_(n,s.path);switch(s.type){case"any":r.push(e.any(c,[]));break;case"attr":r.push(e.attribute(c,s.name,s.node));break;case"text":r.push(e.text(c)),c.textContent=""}}return function(){var e=arguments.length,a=e-1,i=1;if(o!==a)throw new Error(a+" values instead of "+o+"\n"+t.join(", "));for(;i<e;)r[i-1](arguments[i++]);return n}}};return V.set(t,s),s}function F(e){return function(t){var n=W.get(e);return null!=n&&n.template===t||(n=function(e,t){var n=V.get(t)||B(e,t),r=R.call(document,n.content,!0),o={content:r,template:t,updates:n.updates(r)};return W.set(e,o),o}(e,t)),n.updates.apply(null,arguments),n.content}}var Z=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var a,i;return function(s){var c,l,u,f;switch(typeof s){case"object":if(s){if("object"===a){if(!o&&i!==s)for(l in i)l in s||(r[l]="")}else o?r.value="":r.cssText="";for(l in c=o?{}:r,s)u="number"!=typeof(f=s[l])||e.test(l)?f:f+"px",!o&&/^--/.test(l)?c.setProperty(l,u):c[l]=u;a="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(i=c):i=s;break}default:i!=s&&(a="string",i=s,o?r.value=s||"":r.cssText=s||"")}}}}();const z=(e,t)=>e.nodeType===r?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e,H=(e,t)=>{let n,r=!1;const o=t.cloneNode(!0);return t=>{n!==t&&(n=t,o.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(o)),o.value=t):(o.value=t,r||(r=!0,e.setAttributeNode(o)))))}},P=(e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(e[t]=r,null==r&&e.removeAttribute(t)))}},U=/^(?:form|list)$/i,q=[].slice,I=(e,t)=>e.ownerDocument.createTextNode(t);function J(e){return this.type=e,F(this)}function K(e){return e(this)}J.prototype={attribute(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return H(e,n);t="className";case"data":case"props":return P(e,t);case"style":return Z(e,n,"ownerSVGElement"in e);case"ref":return(e=>t=>{t.current=e})(e);default:return"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}})(e,t):t in e&&!("ownerSVGElement"in e||U.test(t))?P(e,t):H(e,n)}},any(e,t){const r={node:z,before:e},a="ownerSVGElement"in e?"svg":"html";let i,s=!1;const c=l=>{switch(typeof l){case"string":case"number":case"boolean":s?i!==l&&(i=l,t[0].textContent=l):(s=!0,i=l,t=d(e.parentNode,t,[I(e,l)],r));break;case"function":c(l(e));break;case"object":case"undefined":if(null==l){s=!1,t=d(e.parentNode,t,[],r);break}default:if(s=!1,i=l,n(l))if(0===l.length)t.length&&(t=d(e.parentNode,t,[],r));else switch(typeof l[0]){case"string":case"number":case"boolean":c(String(l));break;case"function":c(l.map(K,e));break;case"object":n(l[0])&&(l=l.concat.apply([],l));default:t=d(e.parentNode,t,l,r)}else(e=>"ELEMENT_NODE"in e)(l)?t=d(e.parentNode,t,11===l.nodeType?q.call(l.childNodes):[l],r):"text"in l?c(String(l.text)):"any"in l?c(l.any):"html"in l?t=d(e.parentNode,t,q.call(o([].concat(l.html).join(""),a).childNodes),r):"length"in l&&c(q.call(l))}};return c},text(e){let t;const n=r=>{if(t!==r){t=r;const o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(q.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}};return n}};const Q=new WeakMap,X=new WeakMap;let Y=null;function ee(e,t){const n=function(e,t){const n=Y;(Y=Q.get(e)||function(e){const t={i:0,length:0,stack:[],update:!1};return Q.set(e,t),t}(e)).i=0;const r=t.call(this);let o;if(r instanceof se){o=re(ae(r,0),Y.update);const{i:e,length:t,stack:n,update:a}=Y;e<t&&n.splice(Y.length=e),a&&(Y.update=!1)}else o=re(r,!1);return Y=n,o}.call(this,e,t);return X.get(e)!==n&&(X.set(e,n),function(e,t){e.textContent="",e.appendChild(t)}(e,n)),e}const te=oe("html"),ne=oe("svg");function re(e,t){return e.nodeType===r?e.valueOf(t):e}function oe(e){const t=new WeakMap;return n.for=((n,r)=>{const o=t.get(n)||function(e){const n={$:null};return t.set(e,n),n}(n);return null==r&&(r="$"),o[r]||function(t,n){let r=null;const o=new J(e);return t[n]=function(){const e=o.apply(null,arguments);return r||(r=ie(e))}}(o,r)}),n;function n(){const t=arguments;return Y?new se(e,t):new J(e).apply(null,t)}}function ae(e,t){const{i:r,length:o,stack:a}=Y,{type:i,args:s}=e,c=r<o;Y.i++,c||(Y.length=a.push({l:t,kind:i,tag:null,tpl:s[0],wire:null})),function e(t,r,o){for(const{length:a}=t;r<a;r++){const a=t[r];"object"==typeof a&&a&&(a instanceof se?t[r]=ae(a,o-1):n(a)&&(t[r]=e(a,0,o++)))}return t}(s,1,t+1);const l=a[r];if(c){const{l:e,kind:n,tag:r,tpl:o,wire:a}=l;if(e===t&&i===n&&o===s[0])return r.apply(null,s),a}const u=new J(i),f=ie(u.apply(null,s));return l.l=t,l.kind=i,l.tag=u,l.tpl=s[0],l.wire=f,r<1&&(Y.update=!0),f}function ie(e){const n=e.childNodes,{length:r}=n;return 1===r?n[0]:r?new t(n):e}function se(e,t){this.type=e,this.args=t}const ce={},le=(e,t)=>(...n)=>ee(e,()=>t(...n));let ue=null;return e.define=(e=>{const{name:t,tagName:n}=e;if(!t)throw"Undefined class name";if(!n)throw`Undefined ${t} static tagName`;const r=t.toLowerCase()+"-heresy";customElements.define(r,e,{extends:n}),ce[t]={tagName:n,is:r},ue||(e=>{const{transform:t}=J.prototype;J.prototype.transform=t?n=>e(t(n)):e})(e=>e.replace(ue,(e,t,n,r)=>{const{tagName:o,is:a}=ce[n];return t?`</${o}>`:`<${o} is="${a}"${r}`}));const o=Object.keys(ce).join("|");ue=new RegExp(`<(/)?(${o})([ \\f\\n\\r\\t>])`,"g"),Object.defineProperties(e.prototype,{html:{get(){return le(this,te)}},svg:{get(){return le(this,ne)}}})}),e.html=te,e.render=ee,e.svg=ne,e}({});
