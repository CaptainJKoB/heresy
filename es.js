/*! (c) Andrea Giammarchi - ISC */var heresy=function(e){"use strict";
/*! (c) Andrea Giammarchi - ISC */
let t=null;const n=e=>{e()},r=()=>t;function o(e,t){return e!==this[t]}/*! (c) Andrea Giammarchi - ISC */var s="function"==typeof cancelAnimationFrame,a=s?cancelAnimationFrame:clearTimeout,i=s?requestAnimationFrame:setTimeout;function c(e){var t,n,r,o,c;return u(),function(e,s,a){return r=e,o=s,c=a,n||(n=i(l)),--t<0&&f(!0),f};function l(){u(),r.apply(o,c||[])}function u(){t=e||1/0,n=s?0:null}function f(e){var t=!!n;return t&&(a(n),e&&l()),t}}
/*! (c) Andrea Giammarchi - ISC */const l=c(),u=e=>{const{hook:t,args:n,stack:o,index:s}=r();return o.length<=s&&(o[s]=e),[o[s],e=>{o[s]=e,l(t,null,n)}]},f=new WeakMap,h=({hook:e,args:t})=>{e.apply(null,t)};function p(e){this.value!==e&&(this.value=e,f.get(this).forEach(h))}function d({hook:e}){return e===this.hook}
/*! (c) Andrea Giammarchi - ISC */const g=new WeakMap,v=()=>{},m=e=>(t,n)=>{const{hook:s,stack:a,index:i,after:l}=r();if(i<a.length){const t=a[i],{clean:r,invoke:s,update:c,values:u}=t;n&&!n.some(o,u)||(t.values=n,r&&(t.clean=null,r()),e?l.push(s):c(s))}else{const r=()=>{u.clean=t()};g.has(s)||g.set(s,{stack:[],update:c()});const o=g.get(s),u={clean:null,invoke:r,stop:v,update:o.update,values:n};a[i]=u,o.stack.push(u),e?l.push(r):u.stop=o.update(r)}},y=m(!1),b=m(!0),w=(e,t)=>{const{stack:n,index:s}=r();return(!t||n.length<=s||t.some(o,n[s].values))&&(n[s]={current:e(),values:t}),n[s].current};
/*! (c) Andrea Giammarchi - ISC */
/*! (c) Andrea Giammarchi - ISC */var k,E="-"+Math.random().toFixed(6)+"%",x=!1;try{"content"in(k=document.createElement("template"))&&(k.innerHTML='<p tabindex="'+E+'"></p>',k.content.childNodes[0].getAttribute("tabindex")==E)||(E="_dt: "+E.slice(1,-1)+";",x=!0)}catch(e){}var N="\x3c!--"+E+"--\x3e",A=8,C=1,$=3,M=/^(?:style|textarea)$/i,S=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
/*! (c) Andrea Giammarchi - ISC */
function j(e){return e.join(N).replace(R,V).replace(Z,D)}/*! (c) Andrea Giammarchi - ISC */var T=" \\f\\n\\r\\t",O="[^"+T+"\\/>\"'=]+",L="["+T+"]+"+O,W="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",_="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+O.replace("\\/","")+"))?)",Z=new RegExp(W+L+_+"+)(["+T+"]*/?>)","g"),R=new RegExp(W+L+_+"*)(["+T+"]*/>)","g"),z=new RegExp("("+L+"\\s*=\\s*)(['\"]?)"+N+"\\2","gi");function D(e,t,n,r){return"<"+t+n.replace(z,P)+r}function P(e,t,n){return t+(n||'"')+E+(n||'"')}function V(e,t,n){return S.test(t)?e:"<"+t+n+"></"+t+">"}var G=(...e)=>e,H=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(e?t[1]:n),o.setEndAfter(r),o.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,o=0,s=r.length;o<s;o++)t.appendChild(r[o]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice);
/*! (c) Andrea Giammarchi - ISC */const{isArray:F}=Array,I=H.prototype.nodeType;function B(e,t){this.type=e,this.args=t}Object.freeze(B);const q=e=>document.createElementNS("http://www.w3.org/1999/xhtml",e),U=(e,t)=>("svg"===t?K:J)(e),J=e=>{const t=q("template");return t.innerHTML=e,t.content},K=e=>{const{content:t}=q("template"),n=q("div");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>";const{childNodes:r}=n.firstChild;let{length:o}=r;for(;o--;)t.appendChild(r[0]);return t},{indexOf:Q}=[],X=(e,t,n,r,o,s)=>{const a="selectedIndex"in t;let i=a;for(;r<o;){const o=e(n[r],1);if(t.insertBefore(o,s),a&&i&&o.selected){i=!i;let{selectedIndex:e}=t;t.selectedIndex=e<0?r:Q.call(t.querySelectorAll("option"),o)}r++}},Y=(e,t)=>e==t,ee=e=>e,te=(e,t,n,r,o,s,a)=>{const i=s-o;if(i<1)return-1;for(;n-t>=i;){let i=t,c=o;for(;i<n&&c<s&&a(e[i],r[c]);)i++,c++;if(c===s)return t;t=i+1}return-1},ne=(e,t,n,r,o)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o,re=(e,t,n,r,o)=>{for(;r<o;)ae(e(n[r++],-1),t)},oe=(e,t,n)=>{let r=1,o=t;for(;r<o;){const t=(r+o)/2>>>0;n<e[t]?o=t:r=t+1}return r},se=(e,t,n,r,o,s,a,i,c,l,u,f,h)=>{((e,t,n,r,o,s,a,i,c)=>{const l=new Map,u=e.length;let f=a,h=0;for(;h<u;)switch(e[h++]){case 0:o++,f++;break;case 1:l.set(r[o],1),X(t,n,r,o++,o,f<i?t(s[f],0):c);break;case-1:f++}for(h=0;h<u;)switch(e[h++]){case 0:a++;break;case-1:l.has(s[a])?a++:re(t,n,s,a++,a)}})(((e,t,n,r,o,s,a)=>{const i=n+s,c=[];let l,u,f,h,p,d,g;e:for(l=0;l<=i;l++){if(l>50)return null;for(g=l-1,p=l?c[l-1]:[0,0],d=c[l]=[],u=-l;u<=l;u+=2){for(f=(h=u===-l||u!==l&&p[g+u-1]<p[g+u+1]?p[g+u+1]:p[g+u-1]+1)-u;h<s&&f<n&&a(r[o+h],e[t+f]);)h++,f++;if(h===s&&f===n)break e;d[l+u]=h}}const v=Array(l/2+i/2);let m=v.length-1;for(l=c.length-1;l>=0;l--){for(;h>0&&f>0&&a(r[o+h-1],e[t+f-1]);)v[m--]=0,h--,f--;if(!l)break;g=l-1,p=l?c[l-1]:[0,0],(u=h-f)===-l||u!==l&&p[g+u-1]<p[g+u+1]?(f--,v[m--]=1):(h--,v[m--]=-1)}return v})(n,r,s,a,i,l,f)||((e,t,n,r,o,s,a,i)=>{let c=0,l=r<i?r:i;const u=Array(l++),f=Array(l);f[0]=-1;for(let e=1;e<l;e++)f[e]=a;const h=new Map;for(let e=s;e<a;e++)h.set(o[e],e);for(let r=t;r<n;r++){const t=h.get(e[r]);null!=t&&-1<(c=oe(f,l,t))&&(f[c]=t,u[c]={newi:r,oldi:t,prev:u[c-1]})}for(c=--l,--a;f[c]>a;)--c;l=i+r-c;const p=Array(l);let d=u[c];for(--n;d;){const{newi:e,oldi:t}=d;for(;n>e;)p[--l]=1,--n;for(;a>t;)p[--l]=-1,--a;p[--l]=0,--n,--a,d=d.prev}for(;n>=t;)p[--l]=1,--n;for(;a>=s;)p[--l]=-1,--a;return p})(n,r,o,s,a,i,c,l),e,t,n,r,a,i,u,h)};let ae=(e,t)=>{(ae="remove"in e?e=>{e.remove()}:(e,t)=>{e.parentNode===t&&t.removeChild(e)})(e,t)};
/*! (c) 2018 Andrea Giammarchi (ISC) */const ie=(e,t,n,r)=>{r||(r={});const o=r.compare||Y,s=r.node||ee,a=null==r.before?null:s(r.before,0),i=t.length;let c=i,l=0,u=n.length,f=0;for(;l<c&&f<u&&o(t[l],n[f]);)l++,f++;for(;l<c&&f<u&&o(t[c-1],n[u-1]);)c--,u--;const h=l===c,p=f===u;if(h&&p)return n;if(h&&f<u)return X(s,e,n,f,u,ne(s,t,l,i,a)),n;if(p&&l<c)return re(s,e,t,l,c),n;const d=c-l,g=u-f;let v=-1;if(d<g){if(-1<(v=te(n,f,u,t,l,c,o)))return X(s,e,n,f,v,s(t[l],0)),X(s,e,n,v+d,u,ne(s,t,c,i,a)),n}else if(g<d&&-1<(v=te(t,l,c,n,f,u,o)))return re(s,e,t,l,v),re(s,e,t,v+g,c),n;return d<2||g<2?(X(s,e,n,f,u,s(t[l],0)),re(s,e,t,l,c),n):d===g&&((e,t,n,r,o,s)=>{for(;r<o&&s(n[r],e[t-1]);)r++,t--;return 0===t})(n,u,t,l,c,o)?(X(s,e,n,f,u,ne(s,t,c,i,a)),n):(se(s,e,n,f,u,g,t,l,c,d,i,o,a),n)};/*! (c) Andrea Giammarchi - ISC */var ce=document.importNode,le="".trim;function ue(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function fe(e,t,n,r){for(var o=new Map,s=e.attributes,a=[],i=a.slice.call(s,0),c=i.length,l=0;l<c;){var u,f=i[l++],h=f.value===E;if(h||1<(u=f.value.split(N)).length){var p=f.name;if(!o.has(p)){var d=n.shift().replace(h?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+p+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),g=s[d]||s[d.toLowerCase()];if(o.set(p,g),h)t.push(pe(g,r,d,null));else{for(var v=u.length-2;v--;)n.shift();t.push(pe(g,r,d,u))}}a.push(f)}}l=0;for(var m=(0<(c=a.length)&&x&&!("ownerSVGElement"in e));l<c;){var y=a[l++];m&&(y.value=""),e.removeAttribute(y.name)}var b=e.nodeName;if(/^script$/i.test(b)){var w=document.createElement(b);for(c=s.length,l=0;l<c;)w.setAttributeNode(s[l++].cloneNode(!0));w.textContent=e.textContent,e.parentNode.replaceChild(w,e)}}function he(e,t){return{type:"any",node:e,path:t}}function pe(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function de(e,t){return{type:"text",node:e,path:t}}var ge=new WeakMap,ve=new WeakMap;function me(e,t){var n=(e.convert||j)(t),r=e.transform;r&&(n=r(n));var o=U(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===le.call(r.textContent).length&&e.removeChild(r)}}
/*! (c) Andrea Giammarchi - ISC */(o);/*! (c) Andrea Giammarchi - ISC */var s=[];!function e(t,n,r,o){for(var s=t.childNodes,a=s.length,i=0;i<a;){var c=s[i];switch(c.nodeType){case C:var l=o.concat(i);fe(c,n,r,l),e(c,n,r,l);break;case A:var u=c.textContent;if(u===E)r.shift(),n.push(M.test(t.nodeName)?de(t,o):he(c,o.concat(i)));else switch(u.slice(0,2)){case"/*":if("*/"!==u.slice(-2))break;case"👻":t.removeChild(c),i--,a--}break;case $:M.test(t.nodeName)&&le.call(c.textContent)===N&&(r.shift(),n.push(de(t,o)))}i++}}(o,s,t.slice(0),[]);var a={content:o,updates:function(n){for(var r=[],o=s.length,a=0,i=0;a<o;){var c=s[a++],l=ue(n,c.path);switch(c.type){case"any":r.push({fn:e.any(l,[]),sparse:!1});break;case"attr":var u=c.sparse,f=e.attribute(l,c.name,c.node);null===u?r.push({fn:f,sparse:!1}):(i+=u.length-2,r.push({fn:f,sparse:!0,values:u}));break;case"text":r.push({fn:e.text(l),sparse:!1}),l.textContent=""}}return o+=i,function(){var e=arguments.length;if(o!==e-1)throw new Error(e-1+" values instead of "+o+"\n"+t.join("${value}"));for(var s=1,a=1;s<e;){var i=r[s-a];if(i.sparse){var c=i.values,l=c[0],u=1,f=c.length;for(a+=f-2;u<f;)l+=arguments[s++]+c[u++];i.fn(l)}else i.fn(arguments[s++])}return n}}};return ge.set(t,a),a}function ye(e,t){var n=ge.get(t)||me(e,t),r=ce.call(document,n.content,!0),o={content:r,template:t,updates:n.updates(r)};return ve.set(e,o),o}var be=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var s,a;return function(i){var c,l,u,f;switch(typeof i){case"object":if(i){if("object"===s){if(!o&&a!==i)for(l in a)l in i||(r[l]="")}else o?r.value="":r.cssText="";for(l in c=o?{}:r,i)u="number"!=typeof(f=i[l])||e.test(l)?f:f+"px",!o&&/^--/.test(l)?c.setProperty(l,u):c[l]=u;s="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(a=c):a=i;break}default:a!=i&&(s="string",a=i,o?r.value=i||"":r.cssText=i||"")}}}}();const we=(e,t)=>e.nodeType===I?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e,ke=(e,t)=>{let n,r=!1;const o=t.cloneNode(!0);return t=>{n!==t&&(n=t,o.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(o)),o.value=t):(o.value=t,r||(r=!0,e.setAttributeNode(o)))))}},Ee=(e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},xe=/^(?:form|list)$/i,Ne=[].slice,Ae=(e,t)=>e.ownerDocument.createTextNode(t);function Ce(e){return this.type=e,t=this,function(e){var n=ve.get(t);return null!=n&&n.template===e||(n=ye(t,e)),n.updates.apply(null,arguments),n.content};var t}function $e(e){return e(this)}Ce.prototype={attribute(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return ke(e,n);t="className";case"data":case"props":return Ee(e,t);case"style":return be(e,n,"ownerSVGElement"in e);case"ref":return(e=>t=>{t.current=e})(e);default:return"."===t.slice(0,1)?((e,t,n)=>n?n=>{try{e[t]=n}catch(r){e.setAttribute(t,n)}}:n=>{e[t]=n})(e,t.slice(1),"ownerSVGElement"in e):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}})(e,t):t in e&&!("ownerSVGElement"in e||xe.test(t))?Ee(e,t):ke(e,n)}},any(e,t){const n={node:we,before:e},r="ownerSVGElement"in e?"svg":"html";let o,s=!1;const a=i=>{switch(typeof i){case"string":case"number":case"boolean":s?o!==i&&(o=i,t[0].textContent=i):(s=!0,o=i,t=ie(e.parentNode,t,[Ae(e,i)],n));break;case"function":a(i(e));break;case"object":case"undefined":if(null==i){s=!1,t=ie(e.parentNode,t,[],n);break}default:if(s=!1,o=i,F(i))if(0===i.length)t.length&&(t=ie(e.parentNode,t,[],n));else switch(typeof i[0]){case"string":case"number":case"boolean":a(String(i));break;case"function":a(i.map($e,e));break;case"object":F(i[0])&&(i=i.concat.apply([],i));default:t=ie(e.parentNode,t,i,n)}else(e=>"ELEMENT_NODE"in e)(i)?t=ie(e.parentNode,t,11===i.nodeType?Ne.call(i.childNodes):[i],n):"text"in i?a(String(i.text)):"any"in i?a(i.any):"html"in i?t=ie(e.parentNode,t,Ne.call(U([].concat(i.html).join(""),r).childNodes),n):"length"in i&&a(Ne.call(i))}};return a},text(e){let t;const n=r=>{if(t!==r){t=r;const o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(Ne.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}};return n}};const{create:Me,keys:Se}=Object,je=new WeakMap,Te=new WeakMap,Oe=Ce.prototype;let Le=null;const We=e=>{const t=He("html",e),n=He("svg",e),r={html:Ge("html",e,!0),svg:Ge("svg",e,!0)};return{html:t,svg:n,inner:r,hook:e=>({html:Ve(e,t),svg:Ve(e,n),inner:r}),render(t,n){const r=Fe.call(this,t,n,e);return Te.get(t)!==r&&(Te.set(t,r),function(e,t){e.textContent="",e.appendChild(t)}(t,r)),t}}},{html:_e,svg:Ze,inner:Re,render:ze,hook:De}=We(Ce);function Pe(e,t){return e.nodeType===I?e.valueOf(t):e}function Ve(e,t){return function(){const n=e(null);return null===n.current&&(n.current=t.for(n)),Pe(n.current.apply(null,arguments),!1)}}function Ge(e,t,n){return function(){const r=G.apply(null,arguments);return n||Le?new B(e,r):new t(e).apply(null,r)}}function He(e,t){const n=new WeakMap,r=Ge(e,t,!1);return r.for=(r,o)=>{const s=n.get(r)||function(e){const t={$:null};return n.set(e,t),t}(r);return null==o&&(o="$"),s[o]||function(n,r){let o=[],s=null;const a=new t(e),i=()=>a.apply(null,Be(o,1,1,t));return n[r]=function(){o=G.apply(null,arguments);const e=Fe(a,i,t);return s||(s=qe(e))}}(s,o)},r}function Fe(e,t,n){const r=Le;(Le=je.get(e)||function(e){const t={i:0,length:0,stack:[],update:!1};return je.set(e,t),t}(e)).i=0;const o=t.call(this);let s;if(o instanceof B){s=Pe(Ie(o,0,n),Le.update);const{i:e,length:t,stack:r,update:a}=Le;e<t&&r.splice(Le.length=e),a&&(Le.update=!1)}else s=Pe(o,!1);return Le=r,s}function Ie(e,t,n){const{i:r,length:o,stack:s}=Le,{type:a,args:i}=e,c=r<o;Le.i++,c||(Le.length=s.push({l:t,kind:a,tag:null,tpl:i[0],wire:null})),Be(i,1,t+1,n);const l=s[r];if(c){const{l:e,kind:n,tag:r,tpl:o,wire:s}=l;if(e===t&&a===n&&o===i[0])return r.apply(null,i),s}const u=new n(a),f=qe(u.apply(null,i));return l.l=t,l.kind=a,l.tag=u,l.tpl=i[0],l.wire=f,r<1&&(Le.update=!0),f}function Be(e,t,n,r){for(const{length:o}=e;t<o;t++){const o=e[t];"object"==typeof o&&o&&(o instanceof B?e[t]=Ie(o,n-1,r):F(o)&&(e[t]=Be(o,0,n++,r)))}return e}function qe(e){const t=e.childNodes,{length:n}=t;return 1===n?t[0]:n?new H(t):e}let Ue=null;try{Ue=new{o(){}}.o}catch(e){}let Je=e=>(class extends e{});if(Ue){const{getPrototypeOf:e,setPrototypeOf:t}=Object,{construct:n}="object"==typeof Reflect?Reflect:{construct(e,n,r){const o=[null];for(let e=0;e<n.length;e++)o.push(n[e]);const s=e.bind.apply(e,o);return t(new s,r.prototype)}};Je=function(r,o){function s(){return n(o?e(r):r,arguments,s)}return t(s.prototype,r.prototype),t(s,r)}}const Ke={map:{},re:null},Qe=e=>new RegExp(`<(/)?(${e.join("|")})([^A-Za-z0-9:._-])`,"g");let Xe=null;const Ye=(e,t)=>{const{map:n,re:r}=Xe||t;return e.replace(r,(e,t,r,o)=>{const{tagName:s,is:a,element:i}=n[r];return i?t?`</${a}>`:`<${a}${o}`:t?`</${s}>`:`<${s} is="${a}"${o}`})},et=({tagName:e,is:t,element:n})=>n?t:`${e}[is="${t}"]`,tt=()=>Xe,nt=e=>{Xe=e},{render:rt,html:ot,svg:st}=(e=>{const t=Me(Oe);return Se(e).forEach(n=>{t[n]=e[n](t[n]||("convert"===n?j:String))}),n.prototype=t,We(n);function n(){return Ce.apply(this,arguments)}})({transform:()=>e=>Ye(e,Ke)}),at="_🔥",{defineProperties:it}=Object,ct=new WeakMap,lt=new WeakMap,ut=new WeakMap,ft=new WeakSet,ht="attributeChangedCallback",pt="connectedCallback",dt=`dis${pt}`,gt=(e,t,n)=>{if(n in e){const r=e[n];t[n]={configurable:!0,value(){return $t.call(this),r.apply(this,arguments)}}}else t[n]={configurable:!0,value:$t}},vt=e=>{const{hooks:r,prototype:o}=e,s=[],a={html:{configurable:!0,get:Nt},svg:{configurable:!0,get:At}};if(a[at]={value:{events:s,info:null}},"handleEvent"in o||(a.handleEvent={configurable:!0,value:Ct}),r){const{oninit:e}=o;it(o,{oninit:{configurable:!0,value(){const r=(e=>{const r=[];return function o(){const s=t,a=[];let i=0;t={hook:o,args:arguments,stack:r,get index(){return i++},after:a};try{return e.apply(null,arguments)}finally{t=s,a.forEach(n)}}})(this.render.bind(this));this.render=r,this.addEventListener("disconnected",()=>(e=>{g.has(e)&&g.get(e).stack.forEach(e=>{const{clean:t,stop:n}=e;n(),t&&(e.clean=null,t())})})(r),!1),e&&e.apply(this,arguments)}}})}"oninit"in o&&(s.push("init"),gt(o,a,"render")),gt(o,a,ht),gt(o,a,pt),gt(o,a,dt),[[ht,"onattributechanged",Mt],[pt,"onconnected",St],[dt,"ondisconnected",Tt],[pt,"render",jt]].forEach(([e,t,n])=>{if(!(e in o)&&t in o)if("render"!==t&&s.push(t.slice(2)),e in a){const t=a[e].value;a[e]={configurable:!0,value(){return t.apply(this,arguments),n.apply(this,arguments)}}}else a[e]={configurable:!0,value:n}});const i=e.booleanAttributes||[];i.forEach(e=>{e in o||(a[e]={configurable:!0,get(){return this.hasAttribute(e)},set(t){t&&"false"!==t?this.setAttribute(e,t):this.removeAttribute(e)}})});const c=e.observedAttributes||[];c.forEach(e=>{e in o||(a[e]={configurable:!0,get(){return this.getAttribute(e)},set(t){null==t?this.removeAttribute(e):this.setAttribute(e,t)}})}),(e.mappedAttributes||[]).forEach(e=>{const t=new WeakMap,n="on"+e in o;n&&s.push(e),a[e]={configurable:!0,get(){return t.get(this)},set(r){if(t.set(this,r),n){const t=mt(e);if(t.detail=r,ft.has(this))this.dispatchEvent(t);else{const e=ut.get(this);e?e.push(t):ut.set(this,[t])}}}}}),it(o,a);const l=i.concat(c);return l.length?it(e,{observedAttributes:{configurable:!0,get:()=>l}}):e},mt=e=>new Event(e),yt=(...e)=>new B("html",e);yt.for=ot.for;const bt=(...e)=>new B("svg",e);bt.for=st.for;const wt=(e,t,n)=>{const r=kt(e,t,new WeakMap);return n.set(e,r),r},kt=(e,t,n)=>(r,...o)=>{const s=(e=>e)(r),a=n.get(s)||((e,t,{info:n})=>{const r=n?Ye(t.join(at),n).split(at):t;return e.set(t,r),r})(n,s,e[at]);return rt(e,()=>t(a,...o))};function Et(e){this.addEventListener(e,this)}function xt(e){this.dispatchEvent(e)}function Nt(){return ct.get(this)||wt(this,yt,ct)}function At(){return lt.get(this)||wt(this,bt,lt)}function Ct(e){this[`on${e.type}`](e)}function $t(){if(!ft.has(this)){ft.add(this),this[at].events.forEach(Et,this),this.dispatchEvent(mt("init"));const e=ut.get(this);e&&(ut.delete(this),e.forEach(xt,this))}}function Mt(e,t,n){const r=mt("attributechanged");r.attributeName=e,r.oldValue=t,r.newValue=n,this.dispatchEvent(r)}function St(){this.dispatchEvent(mt("connected"))}function jt(){this.render()}function Tt(){this.dispatchEvent(mt("disconnected"))}const{create:Ot,defineProperty:Lt,defineProperties:Wt,getOwnPropertyNames:_t,getOwnPropertySymbols:Zt,getOwnPropertyDescriptor:Rt,keys:zt}=Object,Dt={element:HTMLElement},Pt=new WeakMap,Vt=new WeakMap,Gt=new WeakMap,Ht=(e,t)=>("string"==typeof e?It(e,t,""):It(e.name,e,"")).Class,Ft=e=>{const t=Ot(null),n=Ot(null),r={prototype:n,statics:t};return _t(e).concat(Zt(e)).forEach(r=>{const o=Rt(e,r);switch(o.enumerable=!1,r){case"extends":r="tagName";case"contains":case"includes":case"hooks":case"name":case"booleanAttributes":case"mappedAttributes":case"observedAttributes":case"style":case"tagName":t[r]=o;break;default:n[r]=o}}),r},It=(e,t,n)=>{if(!/^([A-Z][A-Za-z0-9_]*)(<([A-Za-z0-9:._-]+)>|:([A-Za-z0-9:._-]+))?$/.test(e))throw"Invalid name";const{$1:r,$3:o,$4:s}=RegExp;let a=o||s||t.tagName||t.extends||"element";const i="fragment"===a;if(i)a="element";else if(!/^[A-Za-z0-9:._-]+$/.test(a))throw"Invalid tag";let c="",l="";a.indexOf("-")<0?(c=function(e,t){return e.replace(/([A-Z])([A-Z][a-z])/g,t="$1"+(t||"-")+"$2").replace(/([a-z])([A-Z])/g,t).toLowerCase()}(r)+n).indexOf("-")<0&&(l="-heresy"):(c=a+n,a="element");const u=c+l;if(customElements.get(u))throw`Duplicated ${u} definition`;const f=Je("object"==typeof t?Gt.get(t)||((e,t)=>{const{statics:n,prototype:r}=Ft(e),o=Je(Dt[t]||(Dt[t]=document.createElement(t).constructor),!1);return Wt(o.prototype,r),Wt(o,n),Gt.set(e,vt(o)),o})(t,a):Pt.get(t)||(e=>{const t=Je(e,!1);return Pt.set(e,vt(t)),t})(t),!0),h="element"===a;if(Lt(f,"new",{value:h?()=>document.createElement(u):()=>document.createElement(a,{is:u})}),Lt(f.prototype,"is",{value:u}),""===n){const e=(e=>{const{length:t}=e;let n=0,r=0;for(;r<t;)n=(n<<5)-n+e.charCodeAt(r++),n&=n;return n.toString(36)})(c.toUpperCase());Ke.map[r]=Ut(f,a,u,{id:e,i:0}),Ke.re=Qe(zt(Ke.map))}if(i){const{render:e}=f.prototype;Lt(f.prototype,"render",{configurable:!0,value(){if(e&&e.apply(this,arguments),this.parentNode){const e=document.createRange();e.setStartBefore(this.firstChild),e.setEndAfter(this.lastChild),this.parentNode.replaceChild(e.extractContents(),this)}}})}const p=[u,f];return h||p.push({extends:a}),customElements.define(...p),{Class:f,is:u,name:r,tagName:a}};let Bt=Math.random();const qt=e=>{let t=Vt.get(e);if(!t){const n=("Heresy"+ ++Bt).replace(/[^He-y0-9]/g,"");Vt.set(e,t=Ht(n,e))}return()=>t.new()},Ut=(e,t,n,r)=>{const{prototype:o}=e,s=((e,t)=>({tagName:e,is:t,element:"element"===e}))(t,n),a=[et(s)],i=e.includes||e.contains;if(i){const e={};zt(i).forEach(t=>{const n=`-${r.id}-${r.i++}`,{Class:o,is:s,name:c,tagName:l}=It(t,i[t],n);a.push(et(e[c]=Ut(o,l,s,r)))});const t=Qe(zt(e)),{events:n}=o[at],s={events:n,info:{map:e,re:t}};if(Lt(o,at,{value:s}),"render"in o){const{render:e}=o,{info:t}=s;Lt(o,"render",{configurable:!0,value(){const n=tt();nt(t);const r=e.apply(this,arguments);return nt(n),r}})}}return"style"in e&&(e=>{if((e||"").length){const t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e));const n=document.head||document.querySelector("head");n.insertBefore(t,n.lastChild)}})(e.style(...a)),s};return e.createContext=e=>{const t={value:e,provide:p};return f.set(t,[]),t},e.define=Ht,e.html=yt,e.ref=(e,t)=>e?e[t]||(e[t]={current:null}):{current:null},e.render=(e,t)=>rt(e,"function"==typeof t?t:t instanceof B?()=>t:qt(t)),e.svg=bt,e.useCallback=(e,t)=>w(()=>e,t),e.useContext=e=>{const{hook:t,args:n}=r(),o=f.get(e),s={hook:t,args:n};return o.some(d,s)||o.push(s),e.value},e.useEffect=y,e.useLayoutEffect=b,e.useMemo=w,e.useReducer=(e,t,n)=>{const r=u(n?n(t):t);return[r[0],t=>{r[1](e(r[0],t))}]},e.useRef=e=>{const{stack:t,index:n}=r();return n<t.length?t[n]:t[n]={current:e}},e.useState=u,e}({});
