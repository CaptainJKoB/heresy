/*! (c) Andrea Giammarchi - ISC */var heresy=function(e){"use strict";var t,n=WeakMap,r=Event,s=WeakSet,o=(...e)=>e
/*! (c) Andrea Giammarchi - ISC */,a="-"+Math.random().toFixed(6)+"%",i=!1;try{"content"in(t=document.createElement("template"))&&(t.innerHTML='<p tabindex="'+a+'"></p>',t.content.childNodes[0].getAttribute("tabindex")==a)||(a="_dt: "+a.slice(1,-1)+";",i=!0)}catch(e){}/*! (c) Andrea Giammarchi - ISC */var c="\x3c!--"+a+"--\x3e",l=/^(?:style|textarea)$/i,u=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
/*! (c) Andrea Giammarchi - ISC */
function f(e){return e.join(c).replace(y,E).replace(m,w)}/*! (c) Andrea Giammarchi - ISC */var h=" \\f\\n\\r\\t",p="[^"+h+"\\/>\"'=]+",d="["+h+"]+"+p,g="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",v="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+p.replace("\\/","")+"))?)",m=new RegExp(g+d+v+"+)(["+h+"]*/?>)","g"),y=new RegExp(g+d+v+"*)(["+h+"]*/>)","g"),b=new RegExp("("+d+"\\s*=\\s*)(['\"]?)"+c+"\\2","gi");function w(e,t,n,r){return"<"+t+n.replace(b,x)+r}function x(e,t,n){return t+(n||'"')+a+(n||'"')}function E(e,t,n){return u.test(t)?e:"<"+t+n+"></"+t+">"}const{isArray:A}=Array,{indexOf:N,slice:k}=[];var C=e=>({get:t=>e.get(t),set:(t,n)=>(e.set(t,n),n)});const $=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const n=document.createRange();return n.setStartAfter(e),n.setEndAfter(t),n.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e,S=e=>{const{childNodes:t}=e,{length:n}=t;if(n<2)return t[0];const r=k.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf(){if(t.length!==n){let t=0;for(;t<n;)e.appendChild(r[t++])}return e}}},O=e=>document.createElementNS("http://www.w3.org/1999/xhtml",e),j=(e,t)=>("svg"===t?T:_)(e),_=e=>{const t=O("template");return t.innerHTML=e,t.content},T=e=>{const{content:t}=O("template"),n=O("div");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>";const{childNodes:r}=n.firstChild;let{length:s}=r;for(;s--;)t.appendChild(r[0]);return t},L=(e,t,n,r,s,o)=>{const a="selectedIndex"in t;let i=a;for(;r<s;){const s=e(n[r],1);if(t.insertBefore(s,o),a&&i&&s.selected){i=!i;let{selectedIndex:e}=t;t.selectedIndex=e<0?r:N.call(t.querySelectorAll("option"),s)}r++}},M=(e,t)=>e==t,Z=e=>e,R=(e,t,n,r,s,o,a)=>{const i=o-s;if(i<1)return-1;for(;n-t>=i;){let i=t,c=s;for(;i<n&&c<o&&a(e[i],r[c]);)i++,c++;if(c===o)return t;t=i+1}return-1},z=(e,t,n,r,s)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:s,P=(e,t,n,r)=>{for(;n<r;)I(e(t[n++],-1))},H=(e,t,n)=>{let r=1,s=t;for(;r<s;){const t=(r+s)/2>>>0;n<e[t]?s=t:r=t+1}return r},D=(e,t,n,r,s,o,a,i,c,l,u,f,h)=>{((e,t,n,r,s,o,a,i,c)=>{const l=[],u=e.length;let f=a,h=0;for(;h<u;)switch(e[h++]){case 0:s++,f++;break;case 1:l.push(r[s]),L(t,n,r,s++,s,f<i?t(o[f],0):c);break;case-1:f++}for(h=0;h<u;)switch(e[h++]){case 0:a++;break;case-1:-1<l.indexOf(o[a])?a++:P(t,o,a++,a)}})(((e,t,n,r,s,o,a)=>{const i=n+o,c=[];let l,u,f,h,p,d,g;e:for(l=0;l<=i;l++){if(l>50)return null;for(g=l-1,p=l?c[l-1]:[0,0],d=c[l]=[],u=-l;u<=l;u+=2){for(h=u===-l||u!==l&&p[g+u-1]<p[g+u+1]?p[g+u+1]:p[g+u-1]+1,f=h-u;h<o&&f<n&&a(r[s+h],e[t+f]);)h++,f++;if(h===o&&f===n)break e;d[l+u]=h}}const v=Array(l/2+i/2);let m=v.length-1;for(l=c.length-1;l>=0;l--){for(;h>0&&f>0&&a(r[s+h-1],e[t+f-1]);)v[m--]=0,h--,f--;if(!l)break;g=l-1,p=l?c[l-1]:[0,0],u=h-f,u===-l||u!==l&&p[g+u-1]<p[g+u+1]?(f--,v[m--]=1):(h--,v[m--]=-1)}return v})(n,r,o,a,i,l,f)||((e,t,n,r,s,o,a,i)=>{let c=0,l=r<i?r:i;const u=Array(l++),f=Array(l);f[0]=-1;for(let e=1;e<l;e++)f[e]=a;const h=s.slice(o,a);for(let r=t;r<n;r++){const t=h.indexOf(e[r]);if(-1<t){const e=t+o;c=H(f,l,e),-1<c&&(f[c]=e,u[c]={newi:r,oldi:e,prev:u[c-1]})}}for(c=--l,--a;f[c]>a;)--c;l=i+r-c;const p=Array(l);let d=u[c];for(--n;d;){const{newi:e,oldi:t}=d;for(;n>e;)p[--l]=1,--n;for(;a>t;)p[--l]=-1,--a;p[--l]=0,--n,--a,d=d.prev}for(;n>=t;)p[--l]=1,--n;for(;a>=o;)p[--l]=-1,--a;return p})(n,r,s,o,a,i,c,l),e,t,n,r,a,i,u,h)},I=e=>(e.remove||W).call(e);function W(){const{parentNode:e}=this;e&&e.removeChild(this)}
/*! (c) 2018 Andrea Giammarchi (ISC) */const F=(e,t,n,r)=>{r||(r={});const s=r.compare||M,o=r.node||Z,a=null==r.before?null:o(r.before,0),i=t.length;let c=i,l=0,u=n.length,f=0;for(;l<c&&f<u&&s(t[l],n[f]);)l++,f++;for(;l<c&&f<u&&s(t[c-1],n[u-1]);)c--,u--;const h=l===c,p=f===u;if(h&&p)return n;if(h&&f<u)return L(o,e,n,f,u,z(o,t,l,i,a)),n;if(p&&l<c)return P(o,t,l,c),n;const d=c-l,g=u-f;let v=-1;if(d<g){if(v=R(n,f,u,t,l,c,s),-1<v)return L(o,e,n,f,v,o(t[l],0)),L(o,e,n,v+d,u,z(o,t,c,i,a)),n}else if(g<d&&(v=R(t,l,c,n,f,u,s),-1<v))return P(o,t,l,v),P(o,t,v+g,c),n;return d<2||g<2?(L(o,e,n,f,u,o(t[l],0)),P(o,t,l,c),n):d===g&&((e,t,n,r,s,o)=>{for(;r<s&&o(n[r],e[t-1]);)r++,t--;return 0===t})(n,u,t,l,c,s)?(L(o,e,n,f,u,z(o,t,c,i,a)),n):(D(o,e,n,f,u,g,t,l,c,d,i,s,a),n)};/*! (c) Andrea Giammarchi - ISC */var V=document.importNode,q="".trim,B=i?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort((function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1}))}:function(e,t){return t.slice.call(e,0)};function G(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function U(e,t,n,r){for(var s=e.attributes,o=[],l=[],u=B(s,n),f=u.length,h=0;h<f;){var p,d=u[h++],g=d.value===a;if(g||1<(p=d.value.split(c)).length){var v=d.name;if(o.indexOf(v)<0){o.push(v);var m=n.shift().replace(g?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+v+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),y=s[m]||s[m.toLowerCase()];if(g)t.push(K(y,r,m,null));else{for(var b=p.length-2;b--;)n.shift();t.push(K(y,r,m,p))}}l.push(d)}}h=0;for(var w=(0<(f=l.length)&&i&&!("ownerSVGElement"in e));h<f;){var x=l[h++];w&&(x.value=""),e.removeAttribute(x.name)}var E=e.nodeName;if(/^script$/i.test(E)){var A=document.createElement(E);for(f=s.length,h=0;h<f;)A.setAttributeNode(s[h++].cloneNode(!0));A.textContent=e.textContent,e.parentNode.replaceChild(A,e)}}function J(e,t){return{type:"any",node:e,path:t}}function K(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function Q(e,t){return{type:"text",node:e,path:t}}var X=C(new n);function Y(e,t){var n=(e.convert||f)(t),r=e.transform;r&&(n=r(n));var s=j(n,e.type);ne(s);var o=[];return function e(t,n,r,s){for(var o=t.childNodes,i=o.length,u=0;u<i;){var f=o[u];switch(f.nodeType){case 1:var h=s.concat(u);U(f,n,r,h),e(f,n,r,h);break;case 8:var p=f.textContent;if(p===a)r.shift(),n.push(l.test(t.nodeName)?Q(t,s):J(f,s.concat(u)));else switch(p.slice(0,2)){case"/*":if("*/"!==p.slice(-2))break;case"👻":t.removeChild(f),u--,i--}break;case 3:l.test(t.nodeName)&&q.call(f.textContent)===c&&(r.shift(),n.push(Q(t,s)))}u++}}(s,o,t.slice(0),[]),{content:s,updates:function(n){for(var r=[],s=o.length,a=0,i=0;a<s;){var c=o[a++],l=G(n,c.path);switch(c.type){case"any":r.push({fn:e.any(l,[]),sparse:!1});break;case"attr":var u=c.sparse,f=e.attribute(l,c.name,c.node);null===u?r.push({fn:f,sparse:!1}):(i+=u.length-2,r.push({fn:f,sparse:!0,values:u}));break;case"text":r.push({fn:e.text(l),sparse:!1}),l.textContent=""}}return s+=i,function(){var e=arguments.length;if(s!==e-1)throw new Error(e-1+" values instead of "+s+"\n"+t.join("${value}"));for(var o=1,a=1;o<e;){var i=r[o-a];if(i.sparse){var c=i.values,l=c[0],u=1,f=c.length;for(a+=f-2;u<f;)l+=arguments[o++]+c[u++];i.fn(l)}else i.fn(arguments[o++])}return n}}}}function ee(e,t){var n=X.get(t)||X.set(t,Y(e,t));return n.updates(V.call(document,n.content,!0))}var te=[];function ne(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===q.call(r.textContent).length&&e.removeChild(r)}}
/*! (c) Andrea Giammarchi - ISC *//*! (c) Andrea Giammarchi - ISC */var re=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,s){var o,a;return function(i){var c,l,u,f;switch(typeof i){case"object":if(i){if("object"===o){if(!s&&a!==i)for(l in a)l in i||(r[l]="")}else s?r.value="":r.cssText="";for(l in c=s?{}:r,i)u="number"!=typeof(f=i[l])||e.test(l)?f:f+"px",!s&&/^--/.test(l)?c.setProperty(l,u):c[l]=u;o="object",s?r.value=function(e){var r,s=[];for(r in e)s.push(r.replace(t,n),":",e[r],";");return s.join("")}(a=c):a=i;break}default:a!=i&&(o="string",a=i,s?r.value=i||"":r.cssText=i||"")}}}}();const se=(e,t)=>{let n,r=!0;const s=document.createAttributeNS(null,t);return t=>{n!==t&&(n=t,null==n?r||(e.removeAttributeNode(s),r=!0):(s.value=t,r&&(e.setAttributeNodeNS(s),r=!1)))}},oe=(e,t)=>n=>{e[t]=n},ae=/^(?:form|list)$/i,ie=(e,t)=>e.ownerDocument.createTextNode(t);function ce(e){return this.type=e,function(e){var t=te,n=ne;return function(r){return t!==r&&(n=ee(e,t=r)),n.apply(null,arguments)}}(this)}function le(e){return e(this)}ce.prototype={attribute(e,t,n){const r="svg"===this.type;switch(t){case"class":if(r)return se(e,t);t="className";case"props":return oe(e,t);case"aria":return(e=>t=>{for(const n in t)e.setAttribute("role"===n?n:"aria-"+n,t[n])})(e);case"data":return(({dataset:e})=>t=>{for(const n in t)e[n]=t[n]})(e);case"style":return re(e,n,r);case"ref":return(e=>t=>{"function"==typeof t?t(e):t.current=e})(e);default:return"."===t.slice(0,1)?oe(e,t.slice(1)):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{const s=A(t)?t:[t,!1];n!==s[0]&&(n&&e.removeEventListener(r,n,s[1]),(n=s[0])&&e.addEventListener(r,n,s[1]))}})(e,t):!(t in e)||r||ae.test(t)?se(e,t):((e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}})(e,t)}},any(e,t){const n={node:$,before:e},{type:r}=this;let s,o=!1;const a=i=>{switch(typeof i){case"string":case"number":case"boolean":o?s!==i&&(s=i,t[0].textContent=i):(o=!0,s=i,t=F(e.parentNode,t,[ie(e,i)],n));break;case"function":a(i(e));break;case"object":case"undefined":if(null==i){o=!1,t=F(e.parentNode,t,[],n);break}default:if(o=!1,s=i,A(i))if(0===i.length)t.length&&(t=F(e.parentNode,t,[],n));else switch(typeof i[0]){case"string":case"number":case"boolean":a(String(i));break;case"function":a(i.map(le,e));break;case"object":A(i[0])&&(i=i.concat.apply([],i));default:t=F(e.parentNode,t,i,n)}else"ELEMENT_NODE"in i?t=F(e.parentNode,t,11===i.nodeType?k.call(i.childNodes):[i],n):"text"in i?a(String(i.text)):"any"in i?a(i.any):"html"in i?t=F(e.parentNode,t,k.call(j([].concat(i.html).join(""),r).childNodes),n):"length"in i&&a(k.call(i))}};return a},text(e){let t;const n=r=>{if(t!==r){t=r;const s=typeof r;"object"===s&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(k.call(r).join("")):"function"===s?n(r(e)):e.textContent=null==r?"":r}};return n}};const{create:ue,freeze:fe,keys:he}=Object,pe=ce.prototype,de=C(new n),ge=e=>({html:me("html",e),svg:me("svg",e),render(t,n){const r="function"==typeof n?n():n,s=de.get(t)||de.set(t,ve()),o=r instanceof we?ye(e,s,r):r;return o!==s.wire&&(s.wire=o,t.textContent="",t.appendChild(o.valueOf())),t}}),ve=()=>({stack:[],entry:null,wire:null}),me=(e,t)=>{const r=C(new n);return s.for=(e,n)=>{const o=r.get(e)||r.set(e,ue(null));return o[n]||(o[n]=(e=>function(){return ye(t,e,s.apply(null,arguments))})(ve()))},s.node=function(){return ye(t,ve(),s.apply(null,arguments)).valueOf()},s;function s(){return new we(e,o.apply(null,arguments))}},ye=(e,t,{type:n,template:r,values:s})=>{const{length:o}=s;be(e,t,s,o);let{entry:a}=t;if(a&&a.template===r&&a.type===n)a.tag(r,...s);else{const o=new e(n);t.entry=a={type:n,template:r,tag:o,wire:S(o(r,...s))}}return a.wire},be=(e,{stack:t},n,r)=>{for(let s=0;s<r;s++){const r=n[s];r instanceof xe?n[s]=ye(e,t[s]||(t[s]=ve()),r):A(r)?be(e,t[s]||(t[s]=ve()),r,r.length):t[s]=null}r<t.length&&t.splice(r)};function we(e,t){this.type=e,this.template=t.shift(),this.values=t}fe(we);const xe=we,{render:Ee,html:Ae,svg:Ne}=ge(ce);var ke="function"==typeof cancelAnimationFrame,Ce=ke?cancelAnimationFrame:clearTimeout,$e=ke?requestAnimationFrame:setTimeout;function Se(e){var t,n,r,s,o;return i(),function(e,i,l){return r=e,s=i,o=l,n||(n=$e(a)),--t<0&&c(!0),c};function a(){i(),r.apply(s,o||[])}function i(){t=e||1/0,n=ke?0:null}function c(e){var t=!!n;return t&&(Ce(n),e&&a()),t}}
/*! (c) Andrea Giammarchi - ISC */let Oe=null;const je=e=>{const t=[];return function n(){const r=Oe,s=[];Oe={hook:n,args:arguments,stack:t,i:0,length:t.length,after:s};try{return e.apply(null,arguments)}finally{Oe=r;for(let e=0,{length:t}=s;e<t;e++)s[e]()}}},_e=C(new WeakMap),Te=(e,t,n)=>{e.apply(t,n)},Le={async:!1,always:!1},Me=(e,t)=>"function"==typeof t?t(e):t,Ze=(e,t,n,r)=>{const s=Oe.i++,{hook:o,args:a,stack:i,length:c}=Oe;s===c&&(Oe.length=i.push({}));const l=i[s];if(l.args=a,s===c){const s="function"==typeof n,{async:a,always:i}=(s?r:n)||r||Le;l.$=s?n(t):Me(void 0,t),l._=a?_e.get(o)||_e.set(o,Se()):Te,l.f=t=>{const n=e(l.$,t);(i||l.$!==n)&&(l.$=n,l._(o,null,l.args))}}return[l.$,l.f]},Re=new WeakMap,ze=({hook:e,args:t})=>{e.apply(null,t)};function Pe(e){this.value!==e&&(this.value=e,Re.get(this).forEach(ze))}function He({hook:e}){return e===this.hook}const De=new WeakMap,Ie=C(De),We=()=>{},Fe=e=>(t,n)=>{const r=Oe.i++,{hook:s,after:o,stack:a,length:i}=Oe;if(r<i){const s=a[r],{update:i,values:c,stop:l}=s;if(!n||n.some(Je,c)){s.values=n,e&&l(e);const{clean:r}=s;r&&(s.clean=null,r());const a=()=>{s.clean=t()};e?i(a):o.push(a)}}else{const r=e?Se():We,i={clean:null,update:r,values:n,stop:We};Oe.length=a.push(i),(Ie.get(s)||Ie.set(s,[])).push(i);const c=()=>{i.clean=t()};e?i.stop=r(c):o.push(c)}},Ve=e=>{(De.get(e)||[]).forEach(e=>{const{clean:t,stop:n}=e;n(),t&&(e.clean=null,t())})},qe=De.has.bind(De),Be=Fe(!0),Ge=Fe(!1),Ue=(e,t)=>{const n=Oe.i++,{stack:r,length:s}=Oe;return n===s?Oe.length=r.push({$:e(),_:t}):t&&!t.some(Je,r[n]._)||(r[n]={$:e(),_:t}),r[n].$};function Je(e,t){return e!==this[t]}let Ke=null;try{Ke=new{o(){}}.o}catch(e){}let Qe=e=>class extends e{};if(Ke){const{getPrototypeOf:e,setPrototypeOf:t}=Object,{construct:n}="object"==typeof Reflect?Reflect:{construct(e,n,r){const s=[null];for(let e=0;e<n.length;e++)s.push(n[e]);const o=e.bind.apply(e,s);return t(new o,r.prototype)}};Qe=function(r,s){function o(){return n(s?e(r):r,arguments,o)}return t(o.prototype,r.prototype),t(o,r)}}const Xe={map:{},re:null},Ye=e=>new RegExp(`<(/)?(${e.join("|")})([^A-Za-z0-9:._-])`,"g");let et=null;const tt=(e,t)=>{const{map:n,re:r}=et||t;return e.replace(r,(e,t,r,s)=>{const{tagName:o,is:a,element:i}=n[r];return i?t?`</${a}>`:`<${a}${s}`:t?`</${o}>`:`<${o} is="${a}"${s}`})},nt=({tagName:e,is:t,element:n})=>n?t:`${e}[is="${t}"]`,rt=()=>et,st=e=>{et=e},ot={useCallback:(e,t)=>Ue(()=>e,t),useContext:e=>{const{hook:t,args:n}=Oe,r=Re.get(e),s={hook:t,args:n};return r.some(He,s)||r.push(s),e.value},useEffect:Be,useLayoutEffect:Ge,useMemo:Ue,useReducer:Ze,useRef:e=>{const t=Oe.i++,{stack:n,length:r}=Oe;return t===r&&(Oe.length=n.push({current:e})),n[t]},useState:(e,t)=>Ze(Me,e,void 0,t)},{render:at,html:it,svg:ct}=(e=>{const t=ue(pe);return he(e).forEach(n=>{t[n]=e[n](t[n]||("convert"===n?f:String))}),n.prototype=t,ge(n);function n(){return ce.apply(this,arguments)}})({transform:()=>e=>tt(e,Xe)}),{defineProperties:lt}=Object,ut=new n,ft=new n,ht=new n,pt=new s,dt="attributeChangedCallback",gt="connectedCallback",vt="dis"+gt,mt=(e,t,n)=>{if(n in e){const r=e[n];t[n]={configurable:!0,value(){return Ot.call(this),r.apply(this,arguments)}}}else t[n]={configurable:!0,value:Ot}},yt=e=>{const{prototype:t}=e,r=[],s={html:{configurable:!0,get:Ct},svg:{configurable:!0,get:$t}};if(s["_🔥"]={value:{events:r,info:null}},"handleEvent"in t||(s.handleEvent={configurable:!0,value:St}),"render"in t&&t.render.length){const{oninit:e}=t;lt(t,{oninit:{configurable:!0,value(){const t=je(this.render.bind(this,ot));lt(this,{render:{configurable:!0,value:t}}),this.addEventListener("disconnected",Ve.bind(null,t),!1),e&&e.apply(this,arguments)}}})}"oninit"in t&&(r.push("init"),mt(t,s,"render")),mt(t,s,dt),mt(t,s,gt),mt(t,s,vt),[[dt,"onattributechanged",jt],[gt,"onconnected",_t],[vt,"ondisconnected",Lt],[gt,"render",Tt]].forEach(([e,n,o])=>{if(!(e in t)&&n in t)if("render"!==n&&r.push(n.slice(2)),e in s){const t=s[e].value;s[e]={configurable:!0,value(){return t.apply(this,arguments),o.apply(this,arguments)}}}else s[e]={configurable:!0,value:o}});const o=e.booleanAttributes||[];o.forEach(e=>{e in t||(s[e]={configurable:!0,get(){return this.hasAttribute(e)},set(t){t&&"false"!==t?this.setAttribute(e,t):this.removeAttribute(e)}})});const a=e.observedAttributes||[];a.forEach(e=>{e in t||(s[e]={configurable:!0,get(){return this.getAttribute(e)},set(t){null==t?this.removeAttribute(e):this.setAttribute(e,t)}})}),(e.mappedAttributes||[]).forEach(e=>{const o=new n,a="on"+e in t;a&&r.push(e),s[e]={configurable:!0,get(){return o.get(this)},set(t){if(o.set(this,t),a){const n=bt(e);if(n.detail=t,pt.has(this))this.dispatchEvent(n);else{const e=ht.get(this);e?e.push(n):ht.set(this,[n])}}}}}),lt(t,s);const i=o.concat(a);return i.length?lt(e,{observedAttributes:{configurable:!0,get:()=>i}}):e},bt=e=>new r(e),wt=(...e)=>new xe("html",e);wt.for=it.for;const xt=(...e)=>new xe("svg",e);xt.for=ct.for;const Et=(e,t,r)=>{const s=At(e,t,new n);return r.set(e,s),s},At=(e,t,n)=>(r,...s)=>{const o=r,a=n.get(o)||((e,t,{info:n})=>{const r=n?tt(t.join("_🔥"),n).split("_🔥"):t;return e.set(t,r),r})(n,o,e["_🔥"]);return at(e,()=>t(a,...s))};function Nt(e){this.addEventListener(e,this)}function kt(e){this.dispatchEvent(e)}function Ct(){return ut.get(this)||Et(this,wt,ut)}function $t(){return ft.get(this)||Et(this,xt,ft)}function St(e){this["on"+e.type](e)}function Ot(){if(!pt.has(this)){pt.add(this),this["_🔥"].events.forEach(Nt,this),this.dispatchEvent(bt("init"));const e=ht.get(this);e&&(ht.delete(this),e.forEach(kt,this))}}function jt(e,t,n){const r=bt("attributechanged");r.attributeName=e,r.oldValue=t,r.newValue=n,this.dispatchEvent(r)}function _t(){this.dispatchEvent(bt("connected"))}function Tt(){this.render()}function Lt(){this.dispatchEvent(bt("disconnected"))}const{create:Mt,defineProperty:Zt,defineProperties:Rt,getOwnPropertyNames:zt,getOwnPropertySymbols:Pt,getOwnPropertyDescriptor:Ht,keys:Dt}=Object,It={element:HTMLElement},Wt=new n,Ft=new n,Vt=new n,qt=(e,t)=>("string"==typeof e?Gt(e,t,""):Gt(e.name,e,"")).Class,Bt=e=>{const t=Mt(null),n=Mt(null),r={prototype:n,statics:t};return zt(e).concat(Pt(e)).forEach(r=>{const s=Ht(e,r);switch(s.enumerable=!1,r){case"extends":r="tagName";case"contains":case"includes":case"name":case"booleanAttributes":case"mappedAttributes":case"observedAttributes":case"style":case"tagName":t[r]=s;break;default:n[r]=s}}),r},Gt=(e,t,n)=>{if(!/^([A-Z][A-Za-z0-9_]*)(<([A-Za-z0-9:._-]+)>|:([A-Za-z0-9:._-]+))?$/.test(e))throw"Invalid name";const{$1:r,$3:s,$4:o}=RegExp;let a=s||o||t.tagName||t.extends||"element";const i="fragment"===a;if(i)a="element";else if(!/^[A-Za-z0-9:._-]+$/.test(a))throw"Invalid tag";let c="",l="";a.indexOf("-")<0?(c=r.replace(/(([A-Z0-9])([A-Z0-9][a-z]))|(([a-z])([A-Z]))/g,"$2$5-$3$6").toLowerCase()+n,c.indexOf("-")<0&&(l="-heresy")):(c=a+n,a="element");const u=c+l;if(customElements.get(u))throw`Duplicated ${u} definition`;const f=Qe("object"==typeof t?Vt.get(t)||((e,t)=>{const{statics:n,prototype:r}=Bt(e),s=Qe(It[t]||(It[t]=document.createElement(t).constructor),!1);return Rt(s.prototype,r),Rt(s,n),Vt.set(e,yt(s)),s})(t,a):Wt.get(t)||(e=>{const t=Qe(e,!1);return Wt.set(e,yt(t)),t})(t),!0),h="element"===a;if(Zt(f,"new",{value:h?()=>document.createElement(u):()=>document.createElement(a,{is:u})}),Zt(f.prototype,"is",{value:u}),""===n){const e=(e=>{const{length:t}=e;let n=0,r=0;for(;r<t;)n=(n<<5)-n+e.charCodeAt(r++),n&=n;return n.toString(36)})(c.toUpperCase());Xe.map[r]=Kt(f,a,u,{id:e,i:0}),Xe.re=Ye(Dt(Xe.map))}if(i){const{render:e}=f.prototype;Zt(f.prototype,"render",{configurable:!0,value(){if(e&&e.apply(this,arguments),this.parentNode){const{firstChild:e}=this;let t=null;if(e){const n=document.createRange();n.setStartBefore(e),n.setEndAfter(this.lastChild),t=n.extractContents(),this.parentNode.replaceChild(t,this)}}}})}const p=[u,f];return h||p.push({extends:a}),customElements.define(...p),{Class:f,is:u,name:r,tagName:a}};let Ut=Math.random();const Jt=e=>{let t=Ft.get(e);if(!t){const n=("Heresy"+ ++Ut).replace(/[^He-y0-9]/g,"");Ft.set(e,t=qt(n,e))}return()=>t.new()},Kt=(e,t,n,r)=>{const{prototype:s}=e,o=((e,t)=>({tagName:e,is:t,element:"element"===e}))(t,n),a=[nt(o)],i=e.includes||e.contains;if(i){const e={};Dt(i).forEach(t=>{const n=`-${r.id}-${r.i++}`,{Class:s,is:o,name:c,tagName:l}=Gt(t,i[t],n);a.push(nt(e[c]=Kt(s,l,o,r)))});const t=Ye(Dt(e)),{events:n}=s["_🔥"],o={events:n,info:{map:e,re:t}};if(Zt(s,"_🔥",{value:o}),"render"in s){const{render:e}=s,{info:t}=o;Zt(s,"render",{configurable:!0,value(){const n=rt();st(t);const r=e.apply(this,arguments);return st(n),r}})}}return"style"in e&&(e=>{if((e||"").length){const t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e));const n=document.head||document.querySelector("head");n.insertBefore(t,n.lastChild)}})(e.style(...a)),o};return e.contextual=e=>{let t=!0,n=null;const r=je((function(){return e.apply(n,arguments)}));return function e(){const s=r.apply(n=this,arguments);return t&&(t=!t,qe(r)&&De.set(e,De.get(r))),s}},e.createContext=e=>{const t={value:e,provide:Pe};return Re.set(t,[]),t},e.define=qt,e.defineHook=(e,t)=>{if(e in ot)throw new Error("duplicated hook "+e);ot[e]=t(ot)},e.html=wt,e.ref=(e,t)=>e?e[t]||(e[t]={current:null}):{current:null},e.render=(e,t)=>at(e,"function"==typeof t?t:t instanceof xe?()=>t:Jt(t)),e.svg=xt,e}({});
