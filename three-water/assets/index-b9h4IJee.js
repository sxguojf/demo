var Fp=Object.defineProperty;var Np=(n,t,e)=>t in n?Fp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var V=(n,t,e)=>Np(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Me={},Xs=[],ti=()=>{},If=()=>!1,da=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),pa=n=>n.startsWith("onUpdate:"),Le=Object.assign,Hc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Op=Object.prototype.hasOwnProperty,ue=(n,t)=>Op.call(n,t),Vt=Array.isArray,Ys=n=>$r(n)==="[object Map]",sr=n=>$r(n)==="[object Set]",Uu=n=>$r(n)==="[object Date]",Zt=n=>typeof n=="function",we=n=>typeof n=="string",Vn=n=>typeof n=="symbol",fe=n=>n!==null&&typeof n=="object",Uf=n=>(fe(n)||Zt(n))&&Zt(n.then)&&Zt(n.catch),Ff=Object.prototype.toString,$r=n=>Ff.call(n),Bp=n=>$r(n).slice(8,-1),Nf=n=>$r(n)==="[object Object]",kc=n=>we(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Tr=Vc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},zp=/-\w/g,Bn=ma(n=>n.replace(zp,t=>t.slice(1).toUpperCase())),Vp=/\B([A-Z])/g,Ms=ma(n=>n.replace(Vp,"-$1").toLowerCase()),Of=ma(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ua=ma(n=>n?`on${Of(n)}`:""),Kn=(n,t)=>!Object.is(n,t),Oo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Bf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},ga=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Hp=n=>{const t=we(n)?Number(n):NaN;return isNaN(t)?n:t};let Fu;const _a=()=>Fu||(Fu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gc(n){if(Vt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=we(i)?Xp(i):Gc(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(we(n)||fe(n))return n}const kp=/;(?![^(]*\))/g,Gp=/:([^]+)/,Wp=/\/\*[^]*?\*\//g;function Xp(n){const t={};return n.replace(Wp,"").split(kp).forEach(e=>{if(e){const i=e.split(Gp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Fn(n){let t="";if(we(n))t=n;else if(Vt(n))for(let e=0;e<n.length;e++){const i=Fn(n[e]);i&&(t+=i+" ")}else if(fe(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Yp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qp=Vc(Yp);function zf(n){return!!n||n===""}function jp(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=rr(n[i],t[i]);return e}function rr(n,t){if(n===t)return!0;let e=Uu(n),i=Uu(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Vn(n),i=Vn(t),e||i)return n===t;if(e=Vt(n),i=Vt(t),e||i)return e&&i?jp(n,t):!1;if(e=fe(n),i=fe(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!rr(n[o],t[o]))return!1}}return String(n)===String(t)}function Wc(n,t){return n.findIndex(e=>rr(e,t))}const Vf=n=>!!(n&&n.__v_isRef===!0),$t=n=>we(n)?n:n==null?"":Vt(n)||fe(n)&&(n.toString===Ff||!Zt(n.toString))?Vf(n)?$t(n.value):JSON.stringify(n,Hf,2):String(n),Hf=(n,t)=>Vf(t)?Hf(n,t.value):Ys(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Fa(i,r)+" =>"]=s,e),{})}:sr(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Fa(e))}:Vn(t)?Fa(t):fe(t)&&!Vt(t)&&!Nf(t)?String(t):t,Fa=(n,t="")=>{var e;return Vn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ke;class $p{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&ke&&(ke.active?(this.parent=ke,this.index=(ke.scopes||(ke.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=ke;try{return ke=this,t()}finally{ke=e}}}on(){++this._on===1&&(this.prevScope=ke,ke=this)}off(){if(this._on>0&&--this._on===0){if(ke===this)ke=this.prevScope;else{let t=ke;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Zp(){return ke}let be;const Na=new WeakSet;class kf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ke&&(ke.active?ke.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Na.has(this)&&(Na.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Nu(this),Xf(this);const t=be,e=zn;be=this,zn=!0;try{return this.fn()}finally{Yf(this),be=t,zn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)qc(t);this.deps=this.depsTail=void 0,Nu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Na.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Il(this)&&this.run()}get dirty(){return Il(this)}}let Gf=0,wr,Ar;function Wf(n,t=!1){if(n.flags|=8,t){n.next=Ar,Ar=n;return}n.next=wr,wr=n}function Xc(){Gf++}function Yc(){if(--Gf>0)return;if(Ar){let t=Ar;for(Ar=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;wr;){let t=wr;for(wr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Xf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Yf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),qc(i),Kp(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Il(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(qf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function qf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ur)||(n.globalVersion=Ur,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Il(n))))return;n.flags|=2;const t=n.dep,e=be,i=zn;be=n,zn=!0;try{Xf(n);const s=n.fn(n._value);(t.version===0||Kn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{be=e,zn=i,Yf(n),n.flags&=-3}}function qc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)qc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Kp(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let zn=!0;const jf=[];function Ei(){jf.push(zn),zn=!1}function Ti(){const n=jf.pop();zn=n===void 0?!0:n}function Nu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=be;be=void 0;try{t()}finally{be=e}}}let Ur=0;class Jp{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!be||!zn||be===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==be)e=this.activeLink=new Jp(be,this),be.deps?(e.prevDep=be.depsTail,be.depsTail.nextDep=e,be.depsTail=e):be.deps=be.depsTail=e,$f(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=be.depsTail,e.nextDep=void 0,be.depsTail.nextDep=e,be.depsTail=e,be.deps===e&&(be.deps=i)}return e}trigger(t){this.version++,Ur++,this.notify(t)}notify(t){Xc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Yc()}}}function $f(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)$f(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Ul=new WeakMap,gs=Symbol(""),Fl=Symbol(""),Fr=Symbol("");function $e(n,t,e){if(zn&&be){let i=Ul.get(n);i||Ul.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new jc),s.map=i,s.key=e),s.track()}}function _i(n,t,e,i,s,r){const o=Ul.get(n);if(!o){Ur++;return}const a=l=>{l&&l.trigger()};if(Xc(),t==="clear")o.forEach(a);else{const l=Vt(n),c=l&&kc(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Fr||!Vn(f)&&f>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Fr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(gs)),Ys(n)&&a(o.get(Fl)));break;case"delete":l||(a(o.get(gs)),Ys(n)&&a(o.get(Fl)));break;case"set":Ys(n)&&a(o.get(gs));break}}Yc()}function As(n){const t=le(n);return t===n?t:($e(t,"iterate",Fr),An(n)?t:t.map(Hn))}function va(n){return $e(n=le(n),"iterate",Fr),n}function jn(n,t){return wi(n)?Js(_s(n)?Hn(t):t):Hn(t)}const Qp={__proto__:null,[Symbol.iterator](){return Oa(this,Symbol.iterator,n=>jn(this,n))},concat(...n){return As(this).concat(...n.map(t=>Vt(t)?As(t):t))},entries(){return Oa(this,"entries",n=>(n[1]=jn(this,n[1]),n))},every(n,t){return oi(this,"every",n,t,void 0,arguments)},filter(n,t){return oi(this,"filter",n,t,e=>e.map(i=>jn(this,i)),arguments)},find(n,t){return oi(this,"find",n,t,e=>jn(this,e),arguments)},findIndex(n,t){return oi(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return oi(this,"findLast",n,t,e=>jn(this,e),arguments)},findLastIndex(n,t){return oi(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return oi(this,"forEach",n,t,void 0,arguments)},includes(...n){return Ba(this,"includes",n)},indexOf(...n){return Ba(this,"indexOf",n)},join(n){return As(this).join(n)},lastIndexOf(...n){return Ba(this,"lastIndexOf",n)},map(n,t){return oi(this,"map",n,t,void 0,arguments)},pop(){return cr(this,"pop")},push(...n){return cr(this,"push",n)},reduce(n,...t){return Ou(this,"reduce",n,t)},reduceRight(n,...t){return Ou(this,"reduceRight",n,t)},shift(){return cr(this,"shift")},some(n,t){return oi(this,"some",n,t,void 0,arguments)},splice(...n){return cr(this,"splice",n)},toReversed(){return As(this).toReversed()},toSorted(n){return As(this).toSorted(n)},toSpliced(...n){return As(this).toSpliced(...n)},unshift(...n){return cr(this,"unshift",n)},values(){return Oa(this,"values",n=>jn(this,n))}};function Oa(n,t,e){const i=va(n),s=i[t]();return i!==n&&!An(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const tm=Array.prototype;function oi(n,t,e,i,s,r){const o=va(n),a=o!==n&&!An(n),l=o[t];if(l!==tm[t]){const h=l.apply(n,r);return a?Hn(h):h}let c=e;o!==n&&(a?c=function(h,f){return e.call(this,jn(n,h),f,n)}:e.length>2&&(c=function(h,f){return e.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Ou(n,t,e,i){const s=va(n),r=s!==n&&!An(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=jn(n,c)),e.call(this,c,jn(n,u),h,n)}):e.length>3&&(o=function(c,u,h){return e.call(this,c,u,h,n)}));const l=s[t](o,...i);return a?jn(n,l):l}function Ba(n,t,e){const i=le(n);$e(i,"iterate",Fr);const s=i[t](...e);return(s===-1||s===!1)&&Kc(e[0])?(e[0]=le(e[0]),i[t](...e)):s}function cr(n,t,e=[]){Ei(),Xc();const i=le(n)[t].apply(n,e);return Yc(),Ti(),i}const em=Vc("__proto__,__v_isRef,__isVue"),Zf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Vn));function nm(n){Vn(n)||(n=String(n));const t=le(this);return $e(t,"has",n),t.hasOwnProperty(n)}class Kf{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?fm:ed:r?td:Qf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Vt(t);if(!s){let l;if(o&&(l=Qp[e]))return l;if(e==="hasOwnProperty")return nm}const a=Reflect.get(t,e,Je(t)?t:i);if((Vn(e)?Zf.has(e):em(e))||(s||$e(t,"get",e),r))return a;if(Je(a)){const l=o&&kc(e)?a:a.value;return s&&fe(l)?Ol(l):l}return fe(a)?s?Ol(a):$i(a):a}}class Jf extends Kf{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Vt(t)&&kc(e);if(!this._isShallow){const c=wi(r);if(!An(i)&&!wi(i)&&(r=le(r),i=le(i)),!o&&Je(r)&&!Je(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:ue(t,e),l=Reflect.set(t,e,i,Je(t)?t:s);return t===le(s)&&l&&(a?Kn(i,r)&&_i(t,"set",e,i):_i(t,"add",e,i)),l}deleteProperty(t,e){const i=ue(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&_i(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Vn(e)||!Zf.has(e))&&$e(t,"has",e),i}ownKeys(t){return $e(t,"iterate",Vt(t)?"length":gs),Reflect.ownKeys(t)}}class im extends Kf{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const sm=new Jf,rm=new im,om=new Jf(!0);const Nl=n=>n,ro=n=>Reflect.getPrototypeOf(n);function am(n,t,e){return function(...i){const s=this.__v_raw,r=le(s),o=Ys(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Nl:t?Js:Hn;return!t&&$e(r,"iterate",l?Fl:gs),Le(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function oo(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function lm(n,t){const e={get(s){const r=this.__v_raw,o=le(r),a=le(s);n||(Kn(s,a)&&$e(o,"get",s),$e(o,"get",a));const{has:l}=ro(o),c=t?Nl:n?Js:Hn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&$e(le(s),"iterate",gs),s.size},has(s){const r=this.__v_raw,o=le(r),a=le(s);return n||(Kn(s,a)&&$e(o,"has",s),$e(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=le(a),c=t?Nl:n?Js:Hn;return!n&&$e(l,"iterate",gs),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Le(e,n?{add:oo("add"),set:oo("set"),delete:oo("delete"),clear:oo("clear")}:{add(s){const r=le(this),o=ro(r),a=le(s),l=!t&&!An(s)&&!wi(s)?a:s;return o.has.call(r,l)||Kn(s,l)&&o.has.call(r,s)||Kn(a,l)&&o.has.call(r,a)||(r.add(l),_i(r,"add",l,l)),this},set(s,r){!t&&!An(r)&&!wi(r)&&(r=le(r));const o=le(this),{has:a,get:l}=ro(o);let c=a.call(o,s);c||(s=le(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Kn(r,u)&&_i(o,"set",s,r):_i(o,"add",s,r),this},delete(s){const r=le(this),{has:o,get:a}=ro(r);let l=o.call(r,s);l||(s=le(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&_i(r,"delete",s,void 0),c},clear(){const s=le(this),r=s.size!==0,o=s.clear();return r&&_i(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=am(s,n,t)}),e}function $c(n,t){const e=lm(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ue(e,s)&&s in i?e:i,s,r)}const cm={get:$c(!1,!1)},um={get:$c(!1,!0)},hm={get:$c(!0,!1)};const Qf=new WeakMap,td=new WeakMap,ed=new WeakMap,fm=new WeakMap;function dm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $i(n){return wi(n)?n:Zc(n,!1,sm,cm,Qf)}function pm(n){return Zc(n,!1,om,um,td)}function Ol(n){return Zc(n,!0,rm,hm,ed)}function Zc(n,t,e,i,s){if(!fe(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=dm(Bp(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function _s(n){return wi(n)?_s(n.__v_raw):!!(n&&n.__v_isReactive)}function wi(n){return!!(n&&n.__v_isReadonly)}function An(n){return!!(n&&n.__v_isShallow)}function Kc(n){return n?!!n.__v_raw:!1}function le(n){const t=n&&n.__v_raw;return t?le(t):n}function mm(n){return!ue(n,"__v_skip")&&Object.isExtensible(n)&&Bf(n,"__v_skip",!0),n}const Hn=n=>fe(n)?$i(n):n,Js=n=>fe(n)?Ol(n):n;function Je(n){return n?n.__v_isRef===!0:!1}function or(n){return gm(n,!1)}function gm(n,t){return Je(n)?n:new _m(n,t)}class _m{constructor(t,e){this.dep=new jc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:le(t),this._value=e?t:Hn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||An(t)||wi(t);t=i?t:le(t),Kn(t,e)&&(this._rawValue=t,this._value=i?t:Hn(t),this.dep.trigger())}}function ct(n){return Je(n)?n.value:n}const vm={get:(n,t,e)=>t==="__v_raw"?n:ct(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Je(s)&&!Je(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function nd(n){return _s(n)?n:new Proxy(n,vm)}class xm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new jc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ur-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&be!==this)return Wf(this,!0),!0}get value(){const t=this.dep.track();return qf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Sm(n,t,e=!1){let i,s;return Zt(n)?i=n:(i=n.get,s=n.set),new xm(i,s,e)}const ao={},jo=new WeakMap;let us;function Mm(n,t=!1,e=us){if(e){let i=jo.get(e);i||jo.set(e,i=[]),i.push(n)}}function ym(n,t,e=Me){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=y=>s?y:An(y)||s===!1||s===0?vi(y,1):vi(y);let u,h,f,p,g=!1,v=!1;if(Je(n)?(h=()=>n.value,g=An(n)):_s(n)?(h=()=>c(n),g=!0):Vt(n)?(v=!0,g=n.some(y=>_s(y)||An(y)),h=()=>n.map(y=>{if(Je(y))return y.value;if(_s(y))return c(y);if(Zt(y))return l?l(y,2):y()})):Zt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){Ei();try{f()}finally{Ti()}}const y=us;us=u;try{return l?l(n,3,[p]):n(p)}finally{us=y}}:h=ti,t&&s){const y=h,A=s===!0?1/0:s;h=()=>vi(y(),A)}const m=Zp(),d=()=>{u.stop(),m&&m.active&&Hc(m.effects,u)};if(r&&t){const y=t;t=(...A)=>{const C=y(...A);return d(),C}}let x=v?new Array(n.length).fill(ao):ao;const E=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(t){const A=u.run();if(y||s||g||(v?A.some((C,L)=>Kn(C,x[L])):Kn(A,x))){f&&f();const C=us;us=u;try{const L=[A,x===ao?void 0:v&&x[0]===ao?[]:x,p];x=A,l?l(t,3,L):t(...L)}finally{us=C}}}else u.run()};return a&&a(E),u=new kf(h),u.scheduler=o?()=>o(E,!1):E,p=y=>Mm(y,!1,u),f=u.onStop=()=>{const y=jo.get(u);if(y){if(l)l(y,4);else for(const A of y)A();jo.delete(u)}},t?i?E(!0):x=u.run():o?o(E.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function vi(n,t=1/0,e){if(t<=0||!fe(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Je(n))vi(n.value,t,e);else if(Vt(n))for(let i=0;i<n.length;i++)vi(n[i],t,e);else if(sr(n)||Ys(n))n.forEach(i=>{vi(i,t,e)});else if(Nf(n)){for(const i in n)vi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&vi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zr(n,t,e,i){try{return i?n(...i):n()}catch(s){xa(s,t,e)}}function Pn(n,t,e,i){if(Zt(n)){const s=Zr(n,t,e,i);return s&&Uf(s)&&s.catch(r=>{xa(r,t,e)}),s}if(Vt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Pn(n[r],t,e,i));return s}}function xa(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Me;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){Ei(),Zr(r,null,10,[n,l,c]),Ti();return}}bm(n,e,s,i,o)}function bm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const en=[];let qn=-1;const qs=[];let zi=null,ks=0;const id=Promise.resolve();let $o=null;function sd(n){const t=$o||id;return n?t.then(this?n.bind(this):n):t}function Em(n){let t=qn+1,e=en.length;for(;t<e;){const i=t+e>>>1,s=en[i],r=Nr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Jc(n){if(!(n.flags&1)){const t=Nr(n),e=en[en.length-1];!e||!(n.flags&2)&&t>=Nr(e)?en.push(n):en.splice(Em(t),0,n),n.flags|=1,rd()}}function rd(){$o||($o=id.then(ad))}function Tm(n){if(!Vt(n))zi&&n.id===-1?zi.splice(ks+1,0,n):n.flags&1||(qs.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)qs.push(n[t]);rd()}function Bu(n,t,e=qn+1){for(;e<en.length;e++){const i=en[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;en.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function od(n){if(qs.length){const t=[...new Set(qs)].sort((e,i)=>Nr(e)-Nr(i));if(qs.length=0,zi){for(let e=0;e<t.length;e++)zi.push(t[e]);return}for(zi=t,ks=0;ks<zi.length;ks++){const e=zi[ks];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}zi=null,ks=0}}const Nr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ad(n){try{for(qn=0;qn<en.length;qn++){const t=en[qn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Zr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;qn<en.length;qn++){const t=en[qn];t&&(t.flags&=-2)}qn=-1,en.length=0,od(),$o=null,(en.length||qs.length)&&ad()}}let Ke=null,ld=null;function Zo(n){const t=Ke;return Ke=n,ld=n&&n.type.__scopeId||null,t}function di(n,t=Ke,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&ta(-1);const r=Zo(t),o=Mi.length;let a;try{a=n(...s)}finally{for(let l=Mi.length;l>o;l--)nu();Zo(r),i._d&&ta(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ie(n,t){if(Ke===null)return n;const e=wa(Ke),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=Me]=t[s];r&&(Zt(r)&&(r={mounted:r,updated:r}),r.deep&&vi(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Qi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ei(),Pn(l,e,8,[n.el,a,n,t]),Ti())}}function wm(n,t){if(nn){let e=nn.provides;const i=nn.parent&&nn.parent.provides;i===e&&(e=nn.provides=Object.create(i)),e[n]=t}}function Bo(n,t,e=!1){const i=zd();if(i||$s){let s=$s?$s._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Zt(t)?t.call(i&&i.proxy):t}}const Am=Symbol.for("v-scx"),Cm=()=>Bo(Am);function Cr(n,t,e){return cd(n,t,e)}function cd(n,t,e=Me){const{immediate:i,deep:s,flush:r,once:o}=e,a=Le({},e),l=t&&i||!t&&r!=="post";let c;if(kr){if(r==="sync"){const p=Cm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ti,p.resume=ti,p.pause=ti,p}}const u=nn;a.call=(p,g,v)=>Pn(p,u,g,v);let h=!1;r==="post"?a.scheduler=p=>{ln(p,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,g)=>{g?p():Jc(p)}),a.augmentJob=p=>{t&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=ym(n,t,a);return kr&&(c?c.push(f):l&&f()),f}function Rm(n,t,e){const i=this.proxy,s=we(n)?n.includes(".")?ud(i,n):()=>i[n]:n.bind(i,i);let r;Zt(t)?r=t:(r=t.handler,e=t);const o=Kr(this),a=cd(s,r.bind(i),e);return o(),a}function ud(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Pm=Symbol("_vte"),Sa=n=>n.__isTeleport,Tn=Symbol("_leaveCb"),ur=Symbol("_enterCb");function Dm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ba(()=>{n.isMounted=!0}),vd(()=>{n.isUnmounting=!0}),n}const yn=[Function,Array],hd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yn,onEnter:yn,onAfterEnter:yn,onEnterCancelled:yn,onBeforeLeave:yn,onLeave:yn,onAfterLeave:yn,onLeaveCancelled:yn,onBeforeAppear:yn,onAppear:yn,onAfterAppear:yn,onAppearCancelled:yn},fd=n=>{const t=n.subTree;return t.component?fd(t.component):t},Lm={name:"BaseTransition",props:hd,setup(n,{slots:t}){const e=zd(),i=Dm();return()=>{const s=t.default&&md(t.default(),!0),r=s&&s.length?dd(s):e.subTree?Vr():void 0;if(!r)return;const o=le(n),{mode:a}=o;if(i.isLeaving)return za(r);const l=Ko(r);if(!l)return za(r);let c=Bl(l,o,i,e,h=>c=h);l.type!==Ze&&Or(l,c);let u=e.subTree&&Ko(e.subTree);if(u&&u.type!==Ze&&!hs(u,l)&&fd(e).type!==Ze){let h=Bl(u,o,i,e);if(Or(u,h),a==="out-in"&&l.type!==Ze)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete h.afterLeave,u=void 0},za(r);a==="in-out"&&l.type!==Ze?h.delayLeave=(f,p,g)=>{const v=pd(i,u);v[String(u.key)]=u,f[Tn]=()=>{p(),f[Tn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function dd(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Ze){t=e;break}}return t}const Im=Lm;function pd(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Bl(n,t,e,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:m,onAppear:d,onAfterAppear:x,onAppearCancelled:E}=t,y=String(n.key),A=pd(e,n),C=(T,Y)=>{T&&Pn(T,i,9,Y)},L=(T,Y)=>{const D=Y[1];C(T,Y),Vt(T)?T.every(F=>F.length<=1)&&D():T.length<=1&&D()},S={mode:o,persisted:a,beforeEnter(T){let Y=l;if(!e.isMounted)if(r)Y=m||l;else return;T[Tn]&&T[Tn](!0);const D=A[y];D&&hs(n,D)&&D.el[Tn]&&D.el[Tn](),C(Y,[T])},enter(T){if(A[y]===n)return;let Y=c,D=u,F=h;if(!e.isMounted)if(r)Y=d||c,D=x||u,F=E||h;else return;let z=!1;T[ur]=G=>{z||(z=!0,G?C(F,[T]):C(D,[T]),S.delayedLeave&&S.delayedLeave(),T[ur]=void 0)};const q=T[ur].bind(null,!1);Y?L(Y,[T,q]):q()},leave(T,Y){const D=String(n.key);if(T[ur]&&T[ur](!0),e.isUnmounting)return Y();C(f,[T]);let F=!1;T[Tn]=q=>{F||(F=!0,Y(),q?C(v,[T]):C(g,[T]),T[Tn]=void 0,A[D]===n&&delete A[D])};const z=T[Tn].bind(null,!1);A[D]=n,p?L(p,[T,z]):z()},clone(T){const Y=Bl(T,t,e,i,s);return s&&s(Y),Y}};return S}function za(n){if(Ma(n))return n=Yi(n),n.children=null,n}function Ko(n){if(!Ma(n))return Sa(n.type)&&n.children?dd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Zt(e.default))return e.default()}}function Or(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;Or(Sa(e.type)&&Ko(e)||e,t)}else n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function md(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:r);o.type===Ge?(o.patchFlag&128&&s++,i=i.concat(md(o.children,t,a))):(t||o.type!==Ze)&&i.push(a!=null?Yi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Zi(n,t){return Zt(n)?Le({name:n.name},t,{setup:n}):n}function gd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function zu(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Jo=new WeakMap;function Rr(n,t,e,i,s=!1){if(Vt(n)){n.forEach((v,m)=>Rr(v,t&&(Vt(t)?t[m]:t),e,i,s));return}if(js(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Rr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?wa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===Me?a.refs={}:a.refs,h=a.setupState,f=le(h),p=h===Me?If:v=>zu(u,v)?!1:ue(f,v),g=(v,m)=>!(m&&zu(u,m));if(c!=null&&c!==l){if(Vu(t),we(c))u[c]=null,p(c)&&(h[c]=null);else if(Je(c)){const v=t;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(Zt(l))Zr(l,a,12,[o,u]);else{const v=we(l),m=Je(l);if(v||m){const d=()=>{if(n.f){const x=v?p(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Vt(x)&&Hc(x,r);else if(Vt(x))x.includes(r)||x.push(r);else if(v)u[l]=[r],p(l)&&(h[l]=u[l]);else{const E=[r];g(l,n.k)&&(l.value=E),n.k&&(u[n.k]=E)}}else v?(u[l]=o,p(l)&&(h[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const x=()=>{d(),Jo.delete(n)};x.id=-1,Jo.set(n,x),ln(x,e)}else Vu(n),d()}}}function Vu(n){const t=Jo.get(n);t&&(t.flags|=8,Jo.delete(n))}_a().requestIdleCallback;_a().cancelIdleCallback;const js=n=>!!n.type.__asyncLoader,Ma=n=>n.type.__isKeepAlive;function Um(n,t){_d(n,"a",t)}function Fm(n,t){_d(n,"da",t)}function _d(n,t,e=nn){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ya(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Ma(s.parent.vnode)&&Nm(i,t,e,s),s=s.parent}}function Nm(n,t,e,i){const s=ya(t,n,i,!0);Qc(()=>{Hc(i[t],s)},e)}function ya(n,t,e=nn,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Ei();const a=Kr(e),l=Pn(t,e,n,o);return a(),Ti(),l});return i?s.unshift(r):s.push(r),r}}const Ri=n=>(t,e=nn)=>{(!kr||n==="sp")&&ya(n,(...i)=>t(...i),e)},Om=Ri("bm"),ba=Ri("m"),Bm=Ri("bu"),zm=Ri("u"),vd=Ri("bum"),Qc=Ri("um"),Vm=Ri("sp"),Hm=Ri("rtg"),km=Ri("rtc");function Gm(n,t=nn){ya("ec",n,t)}const Wm=Symbol.for("v-ndc");function Va(n,t,e,i){let s;const r=e,o=Vt(n);if(o||we(n)){const a=o&&_s(n);let l=!1,c=!1;a&&(l=!An(n),c=wi(n),n=va(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=t(l?c?Js(Hn(n[u])):Hn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(fe(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}function Xm(n,t,e,i,s,r){if(e==null&&(e={}),Ke.ce||Ke.parent&&js(Ke.parent)&&Ke.parent.ce){const c=e,u=Object.keys(c).length>0;return Be(),ea(Ge,null,[xe("slot",c,i)],u?-2:64)}let o=n[t];o&&o._c&&(o._d=!1);const a=Mi.length;Be();let l;try{const c=o&&xd(o(e)),u=e.key||r||c&&c.key;l=ea(Ge,{key:(u&&!Vn(u)?u:`_${t}`)+(!c&&i?"_fb":"")},c||(i?i():[]),c&&n._===1?64:-2)}catch(c){for(let u=Mi.length;u>a;u--)nu();throw c}finally{o&&o._c&&(o._d=!0)}return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function xd(n){return n.some(t=>zr(t)?!(t.type===Ze||t.type===Ge&&!xd(t.children)):!0)?n:null}const zl=n=>n?Vd(n)?wa(n):zl(n.parent):null,Pr=Le(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>zl(n.parent),$root:n=>zl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Md(n),$forceUpdate:n=>n.f||(n.f=()=>{Jc(n.update)}),$nextTick:n=>n.n||(n.n=sd.bind(n.proxy)),$watch:n=>Rm.bind(n)}),Ha=(n,t)=>n!==Me&&!n.__isScriptSetup&&ue(n,t),Ym={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ha(i,t))return o[t]=1,i[t];if(s!==Me&&ue(s,t))return o[t]=2,s[t];if(ue(r,t))return o[t]=3,r[t];if(e!==Me&&ue(e,t))return o[t]=4,e[t];Vl&&(o[t]=0)}}const c=Pr[t];let u,h;if(c)return t==="$attrs"&&$e(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Me&&ue(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,ue(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Ha(s,t)?(s[t]=e,!0):i!==Me&&ue(i,t)?(i[t]=e,!0):ue(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==Me&&a[0]!=="$"&&ue(n,a)||Ha(t,a)||ue(r,a)||ue(i,a)||ue(Pr,a)||ue(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ue(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Hu(n){return Vt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Vl=!0;function qm(n){const t=Md(n),e=n.proxy,i=n.ctx;Vl=!1,t.beforeCreate&&ku(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:d,beforeUnmount:x,destroyed:E,unmounted:y,render:A,renderTracked:C,renderTriggered:L,errorCaptured:S,serverPrefetch:T,expose:Y,inheritAttrs:D,components:F,directives:z,filters:q}=t;if(c&&jm(c,i,null),o)for(const B in o){const rt=o[B];Zt(rt)&&(i[B]=rt.bind(e))}if(s){const B=s.call(e,e);fe(B)&&(n.data=$i(B))}if(Vl=!0,r)for(const B in r){const rt=r[B],ht=Zt(rt)?rt.bind(e,e):Zt(rt.get)?rt.get.bind(e,e):ti,yt=!Zt(rt)&&Zt(rt.set)?rt.set.bind(e):ti,bt=cn({get:ht,set:yt});Object.defineProperty(i,B,{enumerable:!0,configurable:!0,get:()=>bt.value,set:St=>bt.value=St})}if(a)for(const B in a)Sd(a[B],i,e,B);if(l){const B=Zt(l)?l.call(e):l;Reflect.ownKeys(B).forEach(rt=>{wm(rt,B[rt])})}u&&ku(u,n,"c");function X(B,rt){Vt(rt)?rt.forEach(ht=>B(ht.bind(e))):rt&&B(rt.bind(e))}if(X(Om,h),X(ba,f),X(Bm,p),X(zm,g),X(Um,v),X(Fm,m),X(Gm,S),X(km,C),X(Hm,L),X(vd,x),X(Qc,y),X(Vm,T),Vt(Y))if(Y.length){const B=n.exposed||(n.exposed={});Y.forEach(rt=>{Object.defineProperty(B,rt,{get:()=>e[rt],set:ht=>e[rt]=ht,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===ti&&(n.render=A),D!=null&&(n.inheritAttrs=D),F&&(n.components=F),z&&(n.directives=z),T&&gd(n)}function jm(n,t,e=ti){Vt(n)&&(n=Hl(n));for(const i in n){const s=n[i];let r;fe(s)?"default"in s?r=Bo(s.from||i,s.default,!0):r=Bo(s.from||i):r=Bo(s),Je(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function ku(n,t,e){Pn(Vt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Sd(n,t,e,i){let s=i.includes(".")?ud(e,i):()=>e[i];if(we(n)){const r=t[n];Zt(r)&&Cr(s,r)}else if(Zt(n))Cr(s,n.bind(e));else if(fe(n))if(Vt(n))n.forEach(r=>Sd(r,t,e,i));else{const r=Zt(n.handler)?n.handler.bind(e):t[n.handler];Zt(r)&&Cr(s,r,n)}}function Md(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Qo(l,c,o,!0)),Qo(l,t,o)),fe(t)&&r.set(t,l),l}function Qo(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Qo(n,r,e,!0),s&&s.forEach(o=>Qo(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=$m[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const $m={data:Gu,props:Wu,emits:Wu,methods:Mr,computed:Mr,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:Mr,directives:Mr,watch:Km,provide:Gu,inject:Zm};function Gu(n,t){return t?n?function(){return Le(Zt(n)?n.call(this,this):n,Zt(t)?t.call(this,this):t)}:t:n}function Zm(n,t){return Mr(Hl(n),Hl(t))}function Hl(n){if(Vt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Qe(n,t){return n?[...new Set([].concat(n,t))]:t}function Mr(n,t){return n?Le(Object.create(null),n,t):t}function Wu(n,t){return n?Vt(n)&&Vt(t)?[...new Set([...n,...t])]:Le(Object.create(null),Hu(n),Hu(t??{})):t}function Km(n,t){if(!n)return t;if(!t)return n;const e=Le(Object.create(null),n);for(const i in t)e[i]=Qe(n[i],t[i]);return e}function yd(){return{app:null,config:{isNativeTag:If,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jm=0;function Qm(n,t){return function(i,s=null){Zt(i)||(i=Le({},i)),s!=null&&!fe(s)&&(s=null);const r=yd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Jm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:D0,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Zt(u.install)?(o.add(u),u.install(c,...h)):Zt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const p=c._ceVNode||xe(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,wa(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Pn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=$s;$s=c;try{return u()}finally{$s=h}}};return c}}let $s=null;const t0=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Bn(t)}Modifiers`]||n[`${Ms(t)}Modifiers`];function e0(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Me;let s=e;const r=t.startsWith("update:"),o=r&&t0(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>we(u)?u.trim():u)),o.number&&(s=e.map(ga)));let a,l=i[a=Ua(t)]||i[a=Ua(Bn(t))];!l&&r&&(l=i[a=Ua(Ms(t))]),l&&Pn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Pn(c,n,6,s)}}const n0=new WeakMap;function bd(n,t,e=!1){const i=e?n0:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Zt(n)){const l=c=>{const u=bd(c,t,!0);u&&(a=!0,Le(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(fe(n)&&i.set(n,null),null):(Vt(r)?r.forEach(l=>o[l]=null):Le(o,r),fe(n)&&i.set(n,o),o)}function Ea(n,t){return!n||!da(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ue(n,t[0].toLowerCase()+t.slice(1))||ue(n,Ms(t))||ue(n,t))}function Xu(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:p,ctx:g,inheritAttrs:v}=n,m=Zo(n);let d,x;try{if(e.shapeFlag&4){const y=s||i,A=y;d=$n(c.call(A,y,u,h,p,f,g)),x=a}else{const y=t;d=$n(y.length>1?y(h,{attrs:a,slots:o,emit:l}):y(h,null)),x=t.props?a:i0(a)}}catch(y){Mi.length=0,xa(y,n,1),d=xe(Ze)}let E=d;if(x&&v!==!1){const y=Object.keys(x),{shapeFlag:A}=E;y.length&&A&7&&(r&&y.some(pa)&&(x=s0(x,r)),E=Yi(E,x,!1,!0))}if(e.dirs&&(E=Yi(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(e.dirs):e.dirs),e.transition){const y=Sa(E.type)&&Ko(E)||E;Or(y,e.transition)}return d=E,Zo(m),d}const i0=n=>{let t;for(const e in n)(e==="class"||e==="style"||da(e))&&((t||(t={}))[e]=n[e]);return t},s0=(n,t)=>{const e={};for(const i in n)(!pa(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function r0(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Yu(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(Ed(o,i,f)&&!Ea(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Yu(i,o,c):!0:!!o;return!1}function Yu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Ed(t,n,r)&&!Ea(e,r))return!0}return!1}function Ed(n,t,e){const i=n[e],s=t[e];return e==="style"&&fe(i)&&fe(s)?!rr(i,s):i!==s}function o0({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Td={},wd=()=>Object.create(Td),Ad=n=>Object.getPrototypeOf(n)===Td;function a0(n,t,e,i=!1){const s={},r=wd();n.propsDefaults=Object.create(null),Cd(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:pm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function l0(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=le(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ea(n.emitsOptions,f))continue;const p=t[f];if(l)if(ue(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const g=Bn(f);s[g]=kl(l,a,g,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{Cd(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!ue(t,h)&&((u=Ms(h))===h||!ue(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=kl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!ue(t,h))&&(delete r[h],c=!0)}c&&_i(n.attrs,"set","")}function Cd(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Tr(l))continue;const c=t[l];let u;s&&ue(s,u=Bn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Ea(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=le(e),c=a||Me;for(let u=0;u<r.length;u++){const h=r[u];e[h]=kl(s,l,h,c[h],n,!ue(c,h))}}return o}function kl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=ue(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Zt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Kr(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ms(e))&&(i=!0))}return i}const c0=new WeakMap;function Rd(n,t,e=!1){const i=e?c0:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Zt(n)){const u=h=>{l=!0;const[f,p]=Rd(h,t,!0);Le(o,f),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return fe(n)&&i.set(n,Xs),Xs;if(Vt(r))for(let u=0;u<r.length;u++){const h=Bn(r[u]);qu(h)&&(o[h]=Me)}else if(r)for(const u in r){const h=Bn(u);if(qu(h)){const f=r[u],p=o[h]=Vt(f)||Zt(f)?{type:f}:Le({},f),g=p.type;let v=!1,m=!0;if(Vt(g))for(let d=0;d<g.length;++d){const x=g[d],E=Zt(x)&&x.name;if(E==="Boolean"){v=!0;break}else E==="String"&&(m=!1)}else v=Zt(g)&&g.name==="Boolean";p[0]=v,p[1]=m,(v||ue(p,"default"))&&a.push(h)}}const c=[o,a];return fe(n)&&i.set(n,c),c}function qu(n){return n[0]!=="$"&&!Tr(n)}const tu=n=>n==="_"||n==="_ctx"||n==="$stable",eu=n=>Vt(n)?n.map($n):[$n(n)],u0=(n,t,e)=>{if(t._n)return t;const i=di((...s)=>eu(t(...s)),e);return i._c=!1,i},Pd=(n,t,e)=>{const i=n._ctx;for(const s in n){if(tu(s))continue;const r=n[s];if(Zt(r))t[s]=u0(s,r,i);else if(r!=null){const o=eu(r);t[s]=()=>o}}},Dd=(n,t)=>{const e=eu(t);n.slots.default=()=>e},Ld=(n,t,e)=>{for(const i in t)(e||!tu(i))&&(n[i]=t[i])},h0=(n,t,e)=>{const i=n.slots=wd();if(n.vnode.shapeFlag&32){const s=t._;s?(Ld(i,t,e),e&&Bf(i,"_",s,!0)):Pd(t,i)}else t&&Dd(n,t)},f0=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=Me;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Ld(s,t,e):(r=!t.$stable,Pd(t,s)),o=t}else t&&(Dd(n,t),o={default:1});if(r)for(const a in s)!tu(a)&&o[a]==null&&delete s[a]},ln=_0;function d0(n){return p0(n)}function p0(n,t){const e=_a();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=ti,insertStaticContent:g}=n,v=(R,U,W,ot=null,Q=null,st=null,w=void 0,ut=null,nt=!!U.dynamicChildren)=>{if(R===U)return;R&&!hs(R,U)&&(ot=mt(R),St(R,Q,st,!0),R=null),U.patchFlag===-2&&(nt=!1,U.dynamicChildren=null);const{type:J,ref:it,shapeFlag:M}=U;switch(J){case Ta:m(R,U,W,ot);break;case Ze:d(R,U,W,ot);break;case zo:R==null&&x(U,W,ot,w);break;case Ge:F(R,U,W,ot,Q,st,w,ut,nt);break;default:M&1?A(R,U,W,ot,Q,st,w,ut,nt):M&6?z(R,U,W,ot,Q,st,w,ut,nt):(M&64||M&128)&&J.process(R,U,W,ot,Q,st,w,ut,nt,Ot)}it!=null&&Q?Rr(it,R&&R.ref,st,U||R,!U):it==null&&R&&R.ref!=null&&Rr(R.ref,null,st,R,!0)},m=(R,U,W,ot)=>{if(R==null)i(U.el=a(U.children),W,ot);else{const Q=U.el=R.el;U.children!==R.children&&c(Q,U.children)}},d=(R,U,W,ot)=>{R==null?i(U.el=l(U.children||""),W,ot):U.el=R.el},x=(R,U,W,ot)=>{[R.el,R.anchor]=g(R.children,U,W,ot,R.el,R.anchor)},E=({el:R,anchor:U},W,ot)=>{let Q;for(;R&&R!==U;)Q=f(R),i(R,W,ot),R=Q;i(U,W,ot)},y=({el:R,anchor:U})=>{let W;for(;R&&R!==U;)W=f(R),s(R),R=W;s(U)},A=(R,U,W,ot,Q,st,w,ut,nt)=>{if(U.type==="svg"?w="svg":U.type==="math"&&(w="mathml"),R==null)C(U,W,ot,Q,st,w,ut,nt);else{const J=R.el&&R.el._isVueCE?R.el:null;try{J&&J._beginPatch(),T(R,U,Q,st,w,ut,nt)}finally{J&&J._endPatch()}}},C=(R,U,W,ot,Q,st,w,ut)=>{let nt,J;const{props:it,shapeFlag:M,transition:_,dirs:P}=R;if(nt=R.el=o(R.type,st,it&&it.is,it),M&8?u(nt,R.children):M&16&&S(R.children,nt,null,ot,Q,ka(R,st),w,ut),P&&Qi(R,null,ot,"created"),L(nt,R,R.scopeId,w,ot),it){for(const et in it)et!=="value"&&!Tr(et)&&r(nt,et,null,it[et],st,ot);"value"in it&&r(nt,"value",null,it.value,st),(J=it.onVnodeBeforeMount)&&Gn(J,ot,R)}P&&Qi(R,null,ot,"beforeMount");const j=m0(Q,_);j&&_.beforeEnter(nt),i(nt,U,W),((J=it&&it.onVnodeMounted)||j||P)&&ln(()=>{try{J&&Gn(J,ot,R),j&&_.enter(nt),P&&Qi(R,null,ot,"mounted")}finally{}},Q)},L=(R,U,W,ot,Q)=>{if(W&&p(R,W),ot)for(let st=0;st<ot.length;st++)p(R,ot[st]);if(Q){let st=Q.subTree;if(U===st||Nd(st.type)&&(st.ssContent===U||st.ssFallback===U)){const w=Q.vnode;L(R,w,w.scopeId,w.slotScopeIds,Q.parent)}}},S=(R,U,W,ot,Q,st,w,ut,nt=0)=>{for(let J=nt;J<R.length;J++){const it=R[J]=ut?gi(R[J]):$n(R[J]);v(null,it,U,W,ot,Q,st,w,ut)}},T=(R,U,W,ot,Q,st,w)=>{const ut=U.el=R.el;let{patchFlag:nt,dynamicChildren:J,dirs:it}=U;nt|=R.patchFlag&16;const M=R.props||Me,_=U.props||Me;let P;if(W&&ts(W,!1),(P=_.onVnodeBeforeUpdate)&&Gn(P,W,U,R),it&&Qi(U,R,W,"beforeUpdate"),W&&ts(W,!0),J&&(!R.dynamicChildren||R.dynamicChildren.length!==J.length)&&(nt=0,w=!1,J=null),(M.innerHTML&&_.innerHTML==null||M.textContent&&_.textContent==null)&&u(ut,""),J?Y(R.dynamicChildren,J,ut,W,ot,ka(U,Q),st):w||rt(R,U,ut,null,W,ot,ka(U,Q),st,!1),nt>0){if(nt&16)D(ut,M,_,W,Q);else if(nt&2&&M.class!==_.class&&r(ut,"class",null,_.class,Q),nt&4&&r(ut,"style",M.style,_.style,Q),nt&8){const j=U.dynamicProps;for(let et=0;et<j.length;et++){const Z=j[et],xt=M[Z],ft=_[Z];(ft!==xt||Z==="value")&&r(ut,Z,xt,ft,Q,W)}}nt&1&&R.children!==U.children&&u(ut,U.children)}else!w&&J==null&&D(ut,M,_,W,Q);((P=_.onVnodeUpdated)||it)&&ln(()=>{P&&Gn(P,W,U,R),it&&Qi(U,R,W,"updated")},ot)},Y=(R,U,W,ot,Q,st,w)=>{for(let ut=0;ut<U.length;ut++){const nt=R[ut],J=U[ut],it=nt.el&&(nt.type===Ge||!hs(nt,J)||nt.shapeFlag&198)?h(nt.el):W;v(nt,J,it,null,ot,Q,st,w,!0)}},D=(R,U,W,ot,Q)=>{if(U!==W){if(U!==Me)for(const st in U)!Tr(st)&&!(st in W)&&r(R,st,U[st],null,Q,ot);for(const st in W){if(Tr(st))continue;const w=W[st],ut=U[st];w!==ut&&st!=="value"&&r(R,st,ut,w,Q,ot)}"value"in W&&r(R,"value",U.value,W.value,Q)}},F=(R,U,W,ot,Q,st,w,ut,nt)=>{const J=U.el=R?R.el:a(""),it=U.anchor=R?R.anchor:a("");let{patchFlag:M,dynamicChildren:_,slotScopeIds:P}=U;P&&(ut=ut?ut.concat(P):P),R==null?(i(J,W,ot),i(it,W,ot),S(U.children||[],W,it,Q,st,w,ut,nt)):M>0&&M&64&&_&&R.dynamicChildren&&R.dynamicChildren.length===_.length?(Y(R.dynamicChildren,_,W,Q,st,w,ut),(U.key!=null||Q&&U===Q.subTree)&&Id(R,U,!0)):rt(R,U,W,it,Q,st,w,ut,nt)},z=(R,U,W,ot,Q,st,w,ut,nt)=>{U.slotScopeIds=ut,R==null?U.shapeFlag&512?Q.ctx.activate(U,W,ot,w,nt):q(U,W,ot,Q,st,w,nt):G(R,U,nt)},q=(R,U,W,ot,Q,st,w)=>{const ut=R.component=E0(R,ot,Q);if(Ma(R)&&(ut.ctx.renderer=Ot),T0(ut,!1,w),ut.asyncDep){if(Q&&Q.registerDep(ut,X,w),!R.el){const nt=ut.subTree=xe(Ze);d(null,nt,U,W),R.placeholder=nt.el}}else X(ut,R,U,W,Q,st,w)},G=(R,U,W)=>{const ot=U.component=R.component;if(r0(R,U,W))if(ot.asyncDep&&!ot.asyncResolved){B(ot,U,W);return}else ot.next=U,ot.update();else U.el=R.el,ot.vnode=U},X=(R,U,W,ot,Q,st,w)=>{const ut=()=>{if(R.isMounted){let{next:M,bu:_,u:P,parent:j,vnode:et}=R;{const Ft=Ud(R);if(Ft){M&&(M.el=et.el,B(R,M,w)),Ft.asyncDep.then(()=>{ln(()=>{R.isUnmounted||J()},Q)});return}}let Z=M,xt;ts(R,!1),M?(M.el=et.el,B(R,M,w)):M=et,_&&Oo(_),(xt=M.props&&M.props.onVnodeBeforeUpdate)&&Gn(xt,j,M,et),ts(R,!0);const ft=Xu(R),Dt=R.subTree;R.subTree=ft,v(Dt,ft,h(Dt.el),mt(Dt),R,Q,st),M.el=ft.el,Z===null&&o0(R,ft.el),P&&ln(P,Q),(xt=M.props&&M.props.onVnodeUpdated)&&ln(()=>Gn(xt,j,M,et),Q)}else{let M;const{el:_,props:P}=U,{bm:j,m:et,parent:Z,root:xt,type:ft}=R,Dt=js(U);ts(R,!1),j&&Oo(j),!Dt&&(M=P&&P.onVnodeBeforeMount)&&Gn(M,Z,U),ts(R,!0);{xt.ce&&xt.ce._hasShadowRoot()&&xt.ce._injectChildStyle(ft,R.parent?R.parent.type:void 0);const Ft=R.subTree=Xu(R);v(null,Ft,W,ot,R,Q,st),U.el=Ft.el}if(et&&ln(et,Q),!Dt&&(M=P&&P.onVnodeMounted)){const Ft=U;ln(()=>Gn(M,Z,Ft),Q)}(U.shapeFlag&256||Z&&js(Z.vnode)&&Z.vnode.shapeFlag&256)&&R.a&&ln(R.a,Q),R.isMounted=!0,U=W=ot=null}};R.scope.on();const nt=R.effect=new kf(ut);R.scope.off();const J=R.update=nt.run.bind(nt),it=R.job=nt.runIfDirty.bind(nt);it.i=R,it.id=R.uid,nt.scheduler=()=>Jc(it),ts(R,!0),J()},B=(R,U,W)=>{U.component=R;const ot=R.vnode.props;R.vnode=U,R.next=null,l0(R,U.props,ot,W),f0(R,U.children,W),Ei(),Bu(R),Ti()},rt=(R,U,W,ot,Q,st,w,ut,nt=!1)=>{const J=R&&R.children,it=R?R.shapeFlag:0,M=U.children,{patchFlag:_,shapeFlag:P}=U;if(_>0){if(_&128){yt(J,M,W,ot,Q,st,w,ut,nt);return}else if(_&256){ht(J,M,W,ot,Q,st,w,ut,nt);return}}P&8?(it&16&&lt(J,Q,st),M!==J&&u(W,M)):it&16?P&16?yt(J,M,W,ot,Q,st,w,ut,nt):lt(J,Q,st,!0):(it&8&&u(W,""),P&16&&S(M,W,ot,Q,st,w,ut,nt))},ht=(R,U,W,ot,Q,st,w,ut,nt)=>{R=R||Xs,U=U||Xs;const J=R.length,it=U.length,M=Math.min(J,it);let _;for(_=0;_<M;_++){const P=U[_]=nt?gi(U[_]):$n(U[_]);v(R[_],P,W,null,Q,st,w,ut,nt)}J>it?lt(R,Q,st,!0,!1,M):S(U,W,ot,Q,st,w,ut,nt,M)},yt=(R,U,W,ot,Q,st,w,ut,nt)=>{let J=0;const it=U.length;let M=R.length-1,_=it-1;for(;J<=M&&J<=_;){const P=R[J],j=U[J]=nt?gi(U[J]):$n(U[J]);if(hs(P,j))v(P,j,W,null,Q,st,w,ut,nt);else break;J++}for(;J<=M&&J<=_;){const P=R[M],j=U[_]=nt?gi(U[_]):$n(U[_]);if(hs(P,j))v(P,j,W,null,Q,st,w,ut,nt);else break;M--,_--}if(J>M){if(J<=_){const P=_+1,j=P<it?U[P].el:ot;for(;J<=_;)v(null,U[J]=nt?gi(U[J]):$n(U[J]),W,j,Q,st,w,ut,nt),J++}}else if(J>_)for(;J<=M;)St(R[J],Q,st,!0),J++;else{const P=J,j=J,et=new Map;for(J=j;J<=_;J++){const Tt=U[J]=nt?gi(U[J]):$n(U[J]);Tt.key!=null&&et.set(Tt.key,J)}let Z,xt=0;const ft=_-j+1;let Dt=!1,Ft=0;const dt=new Array(ft);for(J=0;J<ft;J++)dt[J]=0;for(J=P;J<=M;J++){const Tt=R[J];if(xt>=ft){St(Tt,Q,st,!0);continue}let Ct;if(Tt.key!=null)Ct=et.get(Tt.key);else for(Z=j;Z<=_;Z++)if(dt[Z-j]===0&&hs(Tt,U[Z])){Ct=Z;break}Ct===void 0?St(Tt,Q,st,!0):(dt[Ct-j]=J+1,Ct>=Ft?Ft=Ct:Dt=!0,v(Tt,U[Ct],W,null,Q,st,w,ut,nt),xt++)}const gt=Dt?g0(dt):Xs;for(Z=gt.length-1,J=ft-1;J>=0;J--){const Tt=j+J,Ct=U[Tt],Rt=U[Tt+1],Kt=Tt+1<it?Rt.el||Fd(Rt):ot;dt[J]===0?v(null,Ct,W,Kt,Q,st,w,ut,nt):Dt&&(Z<0||J!==gt[Z]?bt(Ct,W,Kt,2):Z--)}}},bt=(R,U,W,ot,Q=null)=>{const{el:st,type:w,transition:ut,children:nt,shapeFlag:J}=R;if(J&6){bt(R.component.subTree,U,W,ot);return}if(J&128){R.suspense.move(U,W,ot);return}if(J&64){w.move(R,U,W,Ot);return}if(w===Ge){i(st,U,W);for(let M=0;M<nt.length;M++)bt(nt[M],U,W,ot);i(R.anchor,U,W);return}if(w===zo){E(R,U,W);return}if(ot!==2&&J&1&&ut)if(ot===0)ut.persisted&&!st[Tn]?i(st,U,W):(ut.beforeEnter(st),i(st,U,W),ln(()=>ut.enter(st),Q));else{const{leave:M,delayLeave:_,afterLeave:P}=ut,j=()=>{R.ctx.isUnmounted?s(st):i(st,U,W)},et=()=>{const Z=st._isLeaving||!!st[Tn];st._isLeaving&&st[Tn](!0),ut.persisted&&!Z?j():M(st,()=>{j(),P&&P()})};_?_(st,j,et):et()}else i(st,U,W)},St=(R,U,W,ot=!1,Q=!1)=>{const{type:st,props:w,ref:ut,children:nt,dynamicChildren:J,shapeFlag:it,patchFlag:M,dirs:_,cacheIndex:P,memo:j}=R;if(M===-2&&(Q=!1),ut!=null&&(Ei(),Rr(ut,null,W,R,!0),Ti()),P!=null&&(U.renderCache[P]=void 0),it&256){U.ctx.deactivate(R);return}const et=it&1&&_,Z=!js(R);let xt;if(Z&&(xt=w&&w.onVnodeBeforeUnmount)&&Gn(xt,U,R),it&6)ae(R.component,W,ot);else{if(it&128){R.suspense.unmount(W,ot);return}et&&Qi(R,null,U,"beforeUnmount"),it&64?R.type.remove(R,U,W,Ot,ot):J&&!J.hasOnce&&(st!==Ge||M>0&&M&64)?lt(J,U,W,!1,!0):(st===Ge&&M&384||!Q&&it&16)&&lt(nt,U,W),ot&&Yt(R)}const ft=j!=null&&P==null;(Z&&(xt=w&&w.onVnodeUnmounted)||et||ft)&&ln(()=>{xt&&Gn(xt,U,R),et&&Qi(R,null,U,"unmounted"),ft&&(R.el=null)},W)},Yt=R=>{const{type:U,el:W,anchor:ot,transition:Q}=R;if(U===Ge){ce(W,ot);return}if(U===zo){y(R);return}const st=()=>{s(W),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(R.shapeFlag&1&&Q&&!Q.persisted){const{leave:w,delayLeave:ut}=Q,nt=()=>w(W,st);ut?ut(R.el,st,nt):nt()}else st()},ce=(R,U)=>{let W;for(;R!==U;)W=f(R),s(R),R=W;s(U)},ae=(R,U,W)=>{const{bum:ot,scope:Q,job:st,subTree:w,um:ut,m:nt,a:J}=R;ju(nt),ju(J),ot&&Oo(ot),Q.stop(),st&&(st.flags|=8,St(w,R,U,W)),ut&&ln(ut,U),ln(()=>{R.isUnmounted=!0},U)},lt=(R,U,W,ot=!1,Q=!1,st=0)=>{for(let w=st;w<R.length;w++)St(R[w],U,W,ot,Q)},mt=R=>{if(R.shapeFlag&6)return mt(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const U=f(R.anchor||R.el),W=U&&U[Pm];return W?f(W):U};let _t=!1;const Wt=(R,U,W)=>{let ot;R==null?U._vnode&&(St(U._vnode,null,null,!0),ot=U._vnode.component):v(U._vnode||null,R,U,null,null,null,W),U._vnode=R,_t||(_t=!0,Bu(ot),od(),_t=!1)},Ot={p:v,um:St,m:bt,r:Yt,mt:q,mc:S,pc:rt,pbc:Y,n:mt,o:n};return{render:Wt,hydrate:void 0,createApp:Qm(Wt)}}function ka({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ts({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function m0(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Id(n,t,e=!1){const i=n.children,s=t.children;if(Vt(i)&&Vt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=gi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Id(o,a)),a.type===Ta&&(a.patchFlag===-1&&(a=s[r]=gi(a)),a.el=o.el),a.type===Ze&&!a.el&&(a.el=o.el)}}function g0(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Ud(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ud(t)}function ju(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Fd(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Fd(t.subTree):null}const Nd=n=>n.__isSuspense;function _0(n,t){t&&t.pendingBranch?Vt(n)?t.effects.push(...n):t.effects.push(n):Tm(n)}const Ge=Symbol.for("v-fgt"),Ta=Symbol.for("v-txt"),Ze=Symbol.for("v-cmt"),zo=Symbol.for("v-stc"),Mi=[];let Sn=null;function Be(n=!1){Mi.push(Sn=n?null:[])}function nu(){Mi.pop(),Sn=Mi[Mi.length-1]||null}let Br=1;function ta(n,t=!1){Br+=n,n<0&&Sn&&t&&(Sn.hasOnce=!0)}function Od(n){return n.dynamicChildren=Br>0?Sn||Xs:null,nu(),Br>0&&Sn&&Sn.push(n),n}function hn(n,t,e,i,s,r){return Od(I(n,t,e,i,s,r,!0))}function ea(n,t,e,i,s){return Od(xe(n,t,e,i,s,!0))}function zr(n){return n?n.__v_isVNode===!0:!1}function hs(n,t){return n.type===t.type&&n.key===t.key}const Bd=({key:n})=>n??null,Vo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?we(n)||Je(n)||Zt(n)?{i:Ke,r:n,k:t,f:!!e}:n:null);function I(n,t=null,e=null,i=0,s=null,r=n===Ge?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Bd(t),ref:t&&Vo(t),scopeId:ld,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ke};return a?(na(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=we(e)?8:16),Br>0&&!o&&Sn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Sn.push(l),l}const xe=v0;function v0(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Wm)&&(n=Ze),zr(n)){const a=Yi(n,t,!0);return e&&na(a,e),Br>0&&!r&&Sn&&(a.shapeFlag&6?Sn[Sn.indexOf(n)]=a:Sn.push(a)),a.patchFlag=-2,a}if(R0(n)&&(n=n.__vccOpts),t){t=x0(t);let{class:a,style:l}=t;a&&!we(a)&&(t.class=Fn(a)),fe(l)&&(Kc(l)&&!Vt(l)&&(l=Le({},l)),t.style=Gc(l))}const o=we(n)?1:Nd(n)?128:Sa(n)?64:fe(n)?4:Zt(n)?2:0;return I(n,t,e,i,s,o,r,!0)}function x0(n){return n?Kc(n)||Ad(n)?Le({},n):n:null}function Yi(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?M0(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Bd(c),ref:t&&t.ref?e&&r?Vt(r)?r.concat(Vo(t)):[r,Vo(t)]:Vo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Ge?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Yi(n.ssContent),ssFallback:n.ssFallback&&Yi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Or(u,l.clone(u)),u}function Dr(n=" ",t=0){return xe(Ta,null,n,t)}function S0(n,t){const e=xe(zo,null,n);return e.staticCount=t,e}function Vr(n="",t=!1){return t?(Be(),ea(Ze,null,n)):xe(Ze,null,n)}function $n(n){return n==null||typeof n=="boolean"?xe(Ze):Vt(n)?xe(Ge,null,n.slice()):zr(n)?gi(n):xe(Ta,null,String(n))}function gi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Yi(n)}function na(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Vt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),na(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Ad(t)?t._ctx=Ke:s===3&&Ke&&(Ke.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Zt(t)){if(i&65){na(n,{default:t});return}t={default:t,_ctx:Ke},e=32}else t=String(t),i&64?(e=16,t=[Dr(t)]):e=8;n.children=t,n.shapeFlag|=e}function M0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Fn([t.class,i.class]));else if(s==="style")t.style=Gc([t.style,i.style]);else if(da(s)){const r=t[s],o=i[s];o&&r!==o&&!(Vt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!pa(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Gn(n,t,e,i=null){Pn(n,t,7,[e,i])}const y0=yd();let b0=0;function E0(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||y0,r={uid:b0++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $p(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rd(i,s),emitsOptions:bd(i,s),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:i.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=e0.bind(null,r),n.ce&&n.ce(r),r}let nn=null;const zd=()=>nn||Ke;let ia,Hr;{const n=_a(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ia=t("__VUE_INSTANCE_SETTERS__",e=>nn=e),Hr=t("__VUE_SSR_SETTERS__",e=>kr=e)}const Kr=n=>{const t=nn;return ia(n),n.scope.on(),()=>{n.scope.off(),ia(t)}},$u=()=>{nn&&nn.scope.off(),ia(null)};function Vd(n){return n.vnode.shapeFlag&4}let kr=!1;function T0(n,t=!1,e=!1){t&&Hr(t);const{props:i,children:s}=n.vnode,r=Vd(n);a0(n,i,r,t),h0(n,s,e||t);const o=r?w0(n,t):void 0;return t&&Hr(!1),o}function w0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ym);const{setup:i}=e;if(i){Ei();const s=n.setupContext=i.length>1?C0(n):null,r=Kr(n),o=Zr(i,n,0,[n.props,s]),a=Uf(o);if(Ti(),r(),(a||n.sp)&&!js(n)&&gd(n),a){if(o.then($u,$u),t)return o.then(l=>{Hr(!0);try{Zu(n,l,t)}finally{Hr(!1)}}).catch(l=>{xa(l,n,0)});n.asyncDep=o}else Zu(n,o)}else Hd(n)}function Zu(n,t,e){Zt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:fe(t)&&(n.setupState=nd(t)),Hd(n)}function Hd(n,t,e){const i=n.type;n.render||(n.render=i.render||ti);{const s=Kr(n);Ei();try{qm(n)}finally{Ti(),s()}}}const A0={get(n,t){return $e(n,"get",""),n[t]}};function C0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,A0),slots:n.slots,emit:n.emit,expose:t}}function wa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(nd(mm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Pr)return Pr[e](n)},has(t,e){return e in t||e in Pr}})):n.proxy}function R0(n){return Zt(n)&&"__vccOpts"in n}const cn=(n,t)=>Sm(n,t,kr);function P0(n,t,e){try{ta(-1);const i=arguments.length;return i===2?fe(t)&&!Vt(t)?zr(t)?xe(n,null,[t]):xe(n,t):xe(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&zr(e)&&(e=[e]),xe(n,t,e))}finally{ta(1)}}const D0="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gl;const Ku=typeof window<"u"&&window.trustedTypes;if(Ku)try{Gl=Ku.createPolicy("vue",{createHTML:n=>n})}catch{}const kd=Gl?n=>Gl.createHTML(n):n=>n,L0="http://www.w3.org/2000/svg",I0="http://www.w3.org/1998/Math/MathML",pi=typeof document<"u"?document:null,Ju=pi&&pi.createElement("template"),U0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?pi.createElementNS(L0,n):t==="mathml"?pi.createElementNS(I0,n):e?pi.createElement(n,{is:e}):pi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>pi.createTextNode(n),createComment:n=>pi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>pi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Ju.innerHTML=kd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Ju.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Li="transition",hr="animation",Gr=Symbol("_vtc"),Gd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F0=Le({},hd,Gd),N0=n=>(n.displayName="Transition",n.props=F0,n),O0=N0((n,{slots:t})=>P0(Im,B0(n),t)),es=(n,t=[])=>{Vt(n)?n.forEach(e=>e(...t)):n&&n(...t)},Qu=n=>n?Vt(n)?n.some(t=>t.length>1):n.length>1:!1;function B0(n){const t={};for(const F in n)F in Gd||(t[F]=n[F]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${e}-leave-from`,leaveActiveClass:f=`${e}-leave-active`,leaveToClass:p=`${e}-leave-to`}=n,g=z0(s),v=g&&g[0],m=g&&g[1],{onBeforeEnter:d,onEnter:x,onEnterCancelled:E,onLeave:y,onLeaveCancelled:A,onBeforeAppear:C=d,onAppear:L=x,onAppearCancelled:S=E}=t,T=(F,z,q,G)=>{F._enterCancelled=G,ns(F,z?u:a),ns(F,z?c:o),q&&q()},Y=(F,z)=>{F._isLeaving=!1,ns(F,h),ns(F,p),ns(F,f),z&&z()},D=F=>(z,q)=>{const G=F?L:x,X=()=>T(z,F,q);es(G,[z,X]),th(()=>{ns(z,F?l:r),ai(z,F?u:a),Qu(G)||eh(z,i,v,X)})};return Le(t,{onBeforeEnter(F){es(d,[F]),ai(F,r),ai(F,o)},onBeforeAppear(F){es(C,[F]),ai(F,l),ai(F,c)},onEnter:D(!1),onAppear:D(!0),onLeave(F,z){F._isLeaving=!0;const q=()=>Y(F,z);ai(F,h),F._enterCancelled?(ai(F,f),sh(F)):(sh(F),ai(F,f)),th(()=>{F._isLeaving&&(ns(F,h),ai(F,p),Qu(y)||eh(F,i,m,q))}),es(y,[F,q])},onEnterCancelled(F){T(F,!1,void 0,!0),es(E,[F])},onAppearCancelled(F){T(F,!0,void 0,!0),es(S,[F])},onLeaveCancelled(F){Y(F),es(A,[F])}})}function z0(n){if(n==null)return null;if(fe(n))return[Ga(n.enter),Ga(n.leave)];{const t=Ga(n);return[t,t]}}function Ga(n){return Hp(n)}function ai(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[Gr]||(n[Gr]=new Set)).add(t)}function ns(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[Gr];e&&(e.delete(t),e.size||(n[Gr]=void 0))}function th(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let V0=0;function eh(n,t,e,i){const s=n._endId=++V0,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:o,timeout:a,propCount:l}=H0(n,t);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=p=>{p.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function H0(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),s=i(`${Li}Delay`),r=i(`${Li}Duration`),o=nh(s,r),a=i(`${hr}Delay`),l=i(`${hr}Duration`),c=nh(a,l);let u=null,h=0,f=0;t===Li?o>0&&(u=Li,h=o,f=r.length):t===hr?c>0&&(u=hr,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?Li:hr:null,f=u?u===Li?r.length:l.length:0);const p=u===Li&&/\b(?:transform|all)(?:,|$)/.test(i(`${Li}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:p}}function nh(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>ih(e)+ih(n[i])))}function ih(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function sh(n){return(n?n.ownerDocument:document).body.offsetHeight}function k0(n,t,e){const i=n[Gr];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const sa=Symbol("_vod"),Wd=Symbol("_vsh"),G0={name:"show",beforeMount(n,{value:t},{transition:e}){n[sa]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):fr(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),fr(n,!0),i.enter(n)):i.leave(n,()=>{fr(n,!1)}):fr(n,t))},beforeUnmount(n,{value:t}){fr(n,t)}};function fr(n,t){n.style.display=t?n[sa]:"none",n[Wd]=!t}const W0=Symbol(""),X0=/(?:^|;)\s*display\s*:/;function Y0(n,t,e){const i=n.style,s=we(e);let r=!1;if(e&&!s){if(t)if(we(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&yr(i,a,"")}else for(const o in t)e[o]==null&&yr(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?j0(n,o,!we(t)&&t?t[o]:void 0,a)||yr(i,o,a):yr(i,o,"")}}else if(s){if(t!==e){const o=i[W0];o&&(e+=";"+o),i.cssText=e,r=X0.test(e)}}else t&&n.removeAttribute("style");sa in n&&(n[sa]=r?i.display:"",n[Wd]&&(i.display="none"))}const rh=/\s*!important$/;function yr(n,t,e){if(Vt(e))e.forEach(i=>yr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=q0(n,t);rh.test(e)?n.setProperty(Ms(i),e.replace(rh,""),"important"):n[i]=e}}const oh=["Webkit","Moz","ms"],Wa={};function q0(n,t){const e=Wa[t];if(e)return e;let i=Bn(t);if(i!=="filter"&&i in n)return Wa[t]=i;i=Of(i);for(let s=0;s<oh.length;s++){const r=oh[s]+i;if(r in n)return Wa[t]=r}return t}function j0(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&we(i)&&e===i}const ah="http://www.w3.org/1999/xlink";function lh(n,t,e,i,s,r=qp(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(ah,t.slice(6,t.length)):n.setAttributeNS(ah,t,e):e==null||r&&!zf(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Vn(e)?String(e):e)}function ch(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?kd(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=zf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function Hi(n,t,e,i){n.addEventListener(t,e,i)}function $0(n,t,e,i){n.removeEventListener(t,e,i)}const uh=Symbol("_vei");function Z0(n,t,e,i,s=null){const r=n[uh]||(n[uh]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=Q0(t);if(i){const c=r[t]=ng(i,s);Hi(n,a,c,l)}else o&&($0(n,a,o,l),r[t]=void 0)}}const K0=/(Once|Passive|Capture)$/,J0=/^on:?(?:Once|Passive|Capture)$/;function Q0(n){let t,e;for(;(e=n.match(K0))&&!J0.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Ms(n.slice(2)),t]}let Xa=0;const tg=Promise.resolve(),eg=()=>Xa||(tg.then(()=>Xa=0),Xa=Date.now());function ng(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Vt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Pn(c,t,5,a)}}else Pn(s,t,5,[i])};return e.value=n,e.attached=eg(),e}const hh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ig=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?k0(n,i,o):t==="style"?Y0(n,e,i):da(t)?pa(t)||Z0(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):sg(n,t,i,o))?(ch(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&lh(n,t,i,o,r,t!=="value")):n._isVueCE&&(rg(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!we(i)))?ch(n,Bn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),lh(n,t,i,o))};function sg(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&hh(t)&&Zt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return hh(t)&&we(e)?!1:t in n}function rg(n,t){const e=n._def.props;if(!e)return!1;const i=Bn(t);return Array.isArray(e)?e.some(s=>Bn(s)===i):Object.keys(e).some(s=>Bn(s)===i)}const Qs=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Vt(t)?e=>Oo(t,e):t};function og(n){n.target.composing=!0}function fh(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Jn=Symbol("_assign"),lo=Symbol("_initialValue");function Ya(n,t,e){return t&&(n=n.trim()),e&&(n=ga(n)),n}const Ce={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[lo]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[lo]=n.defaultValue.replace(/\r\n?/g,`
`))),n[Jn]=Qs(s);const r=i||s.props&&s.props.type==="number";Hi(n,t?"change":"input",o=>{o.target.composing||n[Jn](Ya(n.value,e,r))}),(e||r)&&Hi(n,"change",()=>{n.value=Ya(n.value,e,r)}),t||(Hi(n,"compositionstart",og),Hi(n,"compositionend",fh),Hi(n,"change",fh))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[lo];delete n[lo],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[Jn](Ya(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Jn]=Qs(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?ga(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},Wn={deep:!0,created(n,t,e){n[Jn]=Qs(e),Hi(n,"change",()=>{const i=n._modelValue,s=Wr(n),r=n.checked,o=n[Jn];if(Vt(i)){const a=Wc(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(sr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Xd(n,r))})},mounted:dh,beforeUpdate(n,t,e){n[Jn]=Qs(e),dh(n,t,e)}};function dh(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(Vt(t))s=Wc(t,i.props.value)>-1;else if(sr(t))s=t.has(i.props.value);else{if(t===e)return;s=rr(t,Xd(n,!0))}n.checked!==s&&(n.checked=s)}const ag={deep:!0,created(n,{value:t,modifiers:{number:e}},i){n._modelValue=t,Hi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,r=>r.selected).map(r=>e?ga(Wr(r)):Wr(r));n[Jn](n.multiple?sr(n._modelValue)?new Set(s):s:s[0]),n._assigning=!0,sd(()=>{n._assigning=!1})}),n[Jn]=Qs(i)},mounted(n,{value:t}){ph(n,t)},beforeUpdate(n,{value:t},e){n._modelValue=t,n[Jn]=Qs(e)},updated(n,{value:t}){n._assigning||ph(n,t)}};function ph(n,t){const e=n.multiple,i=Vt(t);if(!(e&&!i&&!sr(t))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Wr(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=Wc(t,a)>-1}else o.selected=t.has(a);else if(rr(Wr(o),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Wr(n){return"_value"in n?n._value:n.value}function Xd(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const lg=Le({patchProp:ig},U0);let mh;function cg(){return mh||(mh=d0(lg))}const ug=((...n)=>{const t=cg().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=fg(i);if(!s)return;const r=t._component;!Zt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,hg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function hg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function fg(n){return we(n)?document.querySelector(n):n}const dg={class:"titlebar"},pg={class:"tb-left"},mg=["title"],gg={class:"tb-right"},_g={key:0,class:"tb-counter",title:"访问量"},vg="https://countapi.mileshilliard.com/api/v1",xg=Zi({__name:"AppHeader",props:{sidebarVisible:{type:Boolean}},emits:["toggle-sidebar"],setup(n){const t=or(null);function e(){return`three-water-flood-sim-${(window.location.hostname||"unknown-host").replace(/[^a-zA-Z0-9_-]/g,"_")}`}return ba(async()=>{try{const i=new AbortController,s=setTimeout(()=>i.abort(),5e3),r=await fetch(`${vg}/hit/${e()}`,{signal:i.signal});if(clearTimeout(s),!r.ok)return;const o=await r.json(),a=Number(o.value??NaN);Number.isFinite(a)&&(t.value=a)}catch{}}),(i,s)=>(Be(),hn("header",dg,[I("div",pg,[I("button",{class:"tb-btn",title:n.sidebarVisible?"隐藏侧边栏":"显示侧边栏",onClick:s[0]||(s[0]=r=>i.$emit("toggle-sidebar"))},[...s[1]||(s[1]=[I("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor"},[I("path",{d:"M1 2h14v12H1V2zm1 1v10h12V3H2zm3 1h1v8H5V4zm4 0h1v8H9V4z"})],-1)])],8,mg),s[2]||(s[2]=S0('<div class="tb-logo" data-v-ccf03ba1><svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-ccf03ba1><path d="M3 18L8 10L12 14L16 6L21 12" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" data-v-ccf03ba1></path><path d="M3 18C3 18 5.5 20.5 8 20.5C10.5 20.5 12 18 12 18C12 18 13.5 20.5 16 20.5C18.5 20.5 21 18 21 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.9" data-v-ccf03ba1></path></svg></div><div class="tb-title" data-v-ccf03ba1><span class="tb-app" data-v-ccf03ba1>三维地形-洪水仿真推演</span><span class="tb-sep" data-v-ccf03ba1>·</span><span class="tb-desc" data-v-ccf03ba1>TERRAIN FLOODING SIMULATION</span></div>',2))]),I("div",gg,[t.value!==null?(Be(),hn("span",_g," 访问 "+$t(t.value)+" 次 ",1)):Vr("",!0),s[3]||(s[3]=I("a",{class:"tb-link",href:"https://sxguojf.github.io/demo/",target:"_blank",rel:"noopener"},"three-tile",-1))])]))}}),ys=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},Sg=ys(xg,[["__scopeId","data-v-ccf03ba1"]]);function Mg(){return{vertExag:2,rampBlend:.15,wireframe:!1,showBounds:!0,mode:"gpu",simNx:256,simNz:256,gravity:9.8,friction:.2,maxSpeed:26,timeScale:60,rain:1e3,infiltration:!1,infilF0:120,infilFc:15,infilK:3,drainBoundary:!1,tool:"orbit",waterRadius:20,fillRadius:20,pushRadius:60,brushRainRate:10,fillVolume:2e6,pushStrength:2e3,waterOpacity:.9,showTerrain:!0,globalBrightness:1,waterShallowColor:"#6E8CA0",waterDeepColor:"#416482",particles:!1,particleCount:600,particleSize:6,showArrows:!1,showWaves:!0,waveScale:200,alphaToCoverage:!1,windParticles:!1,windSpeed:150,windParticleCount:1200,windOrigin:"west"}}const N=$i(Mg()),je=$i({fps:0,volume:0,infiltratedVolume:0,maxWater:0,simTime:0,terrainMin:0,terrainMax:0,terrainRange:0}),yg=35e6,Yd=1060,Ht=$i({x:5e3,z:5e3}),Lr={current:null},xi=$i({lon:0,lat:0,elevation:0,waterDepth:0}),un=$i({west:0,east:0,south:0,north:0}),ra=or(!1);function bg(n){n!=null&&n.West&&(n!=null&&n.East)&&(n!=null&&n.South)&&(n!=null&&n.North)&&(un.west=parseFloat(n.West),un.east=parseFloat(n.East),un.south=parseFloat(n.South),un.north=parseFloat(n.North),ra.value=!0)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const iu="183",Zs={ROTATE:0,DOLLY:1,PAN:2},Gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Eg=0,gh=1,Tg=2,Ho=1,wg=2,br=3,qi=0,fn=1,Nn=2,yi=0,vs=1,oa=2,_h=3,vh=4,Ag=5,fs=100,Cg=101,Rg=102,Pg=103,Dg=104,Lg=200,Ig=201,Ug=202,Fg=203,Wl=204,Xl=205,Ng=206,Og=207,Bg=208,zg=209,Vg=210,Hg=211,kg=212,Gg=213,Wg=214,Yl=0,ql=1,jl=2,tr=3,$l=4,Zl=5,Kl=6,Jl=7,su=0,Xg=1,Yg=2,ei=0,qd=1,jd=2,$d=3,ru=4,Zd=5,Kd=6,Jd=7,Qd=300,xs=301,er=302,qa=303,ja=304,Aa=306,aa=1e3,Si=1001,Ql=1002,Te=1003,qg=1004,co=1005,ze=1006,$a=1007,ps=1008,xn=1009,tp=1010,ep=1011,Xr=1012,ou=1013,ni=1014,sn=1015,Ai=1016,au=1017,lu=1018,Yr=1020,np=35902,ip=35899,sp=1021,rp=1022,rn=1023,Ci=1026,ms=1027,cu=1028,uu=1029,nr=1030,hu=1031,fu=1033,ko=33776,Go=33777,Wo=33778,Xo=33779,tc=35840,ec=35841,nc=35842,ic=35843,sc=36196,rc=37492,oc=37496,ac=37488,lc=37489,cc=37490,uc=37491,hc=37808,fc=37809,dc=37810,pc=37811,mc=37812,gc=37813,_c=37814,vc=37815,xc=37816,Sc=37817,Mc=37818,yc=37819,bc=37820,Ec=37821,Tc=36492,wc=36494,Ac=36495,Cc=36283,Rc=36284,Pc=36285,Dc=36286,jg=3200,op=0,$g=1,ki="",vn="srgb",Ss="srgb-linear",la="linear",pe="srgb",Cs=7680,xh=519,Zg=512,Kg=513,Jg=514,du=515,Qg=516,t_=517,pu=518,e_=519,Sh=35044,Mh="300 es",Qn=2e3,qr=2001;function n_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ca(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function i_(){const n=ca("canvas");return n.style.display="block",n}const yh={};function bh(...n){const t="THREE."+n.shift();console.log(t,...n)}function ap(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Xt(...n){n=ap(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function se(...n){n=ap(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ua(...n){const t=n.join(" ");t in yh||(yh[t]=!0,Xt(...n))}function s_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const r_={[Yl]:ql,[jl]:Kl,[$l]:Jl,[tr]:Zl,[ql]:Yl,[Kl]:jl,[Jl]:$l,[Zl]:tr};class bs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yo=Math.PI/180,Lc=180/Math.PI;function Jr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function ne(n,t,e){return Math.max(t,Math.min(e,n))}function o_(n,t){return(n%t+t)%t}function Za(n,t,e){return(1-e)*n+e*t}function dr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const a_={DEG2RAD:Yo};class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ji{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(h!==v||l!==f||c!==p||u!==g){let m=l*f+c*p+u*g+h*v;m<0&&(f=-f,p=-p,g=-g,v=-v,m=-m);let d=1-a;if(m<.9995){const x=Math.acos(m),E=Math.sin(x);d=Math.sin(d*x)/E,a=Math.sin(a*x)/E,l=l*d+f*a,c=c*d+p*a,u=u*d+g*a,h=h*d+v*a}else{l=l*d+f*a,c=c*d+p*a,u=u*d+g*a,h=h*d+v*a;const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-a*p,t[e+2]=c*g+u*p+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,i=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Eh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Eh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ka.copy(this).projectOnVector(t),this.sub(Ka)}reflect(t){return this.sub(Ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ne(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ka=new k,Eh=new ji;class Qt{constructor(t,e,i,s,r,o,a,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],v=s[0],m=s[3],d=s[6],x=s[1],E=s[4],y=s[7],A=s[2],C=s[5],L=s[8];return r[0]=o*v+a*x+l*A,r[3]=o*m+a*E+l*C,r[6]=o*d+a*y+l*L,r[1]=c*v+u*x+h*A,r[4]=c*m+u*E+h*C,r[7]=c*d+u*y+h*L,r[2]=f*v+p*x+g*A,r[5]=f*m+p*E+g*C,r[8]=f*d+p*y+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=e*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*c-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ja.makeScale(t,e)),this}rotate(t){return this.premultiply(Ja.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ja=new Qt,Th=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wh=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function l_(){const n={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ki?la:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ua("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ua("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ss]:{primaries:t,whitePoint:i,transfer:la,toXYZ:Th,fromXYZ:wh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:Th,fromXYZ:wh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),n}const re=l_();function bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Rs;class c_{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Rs===void 0&&(Rs=ca("canvas")),Rs.width=t.width,Rs.height=t.height;const s=Rs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Rs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ca("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(bi(e[i]/255)*255):e[i]=bi(e[i]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let u_=0;class mu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Jr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qa(s[o].image)):r.push(Qa(s[o]))}else r=Qa(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?c_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}let h_=0;const tl=new k;class We extends bs{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,i=Si,s=Si,r=ze,o=ps,a=rn,l=xn,c=We.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=Jr(),this.name="",this.source=new mu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(tl).x}get height(){return this.source.getSize(tl).y}get depth(){return this.source.getSize(tl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case aa:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case Ql:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case aa:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case Ql:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Qd;We.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,i=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,y=(p+1)/2,A=(d+1)/2,C=(u+f)/4,L=(h+v)/4,S=(g+m)/4;return E>y&&E>A?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=C/i,r=L/i):y>A?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=S/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=L/r,s=S/r),this.set(i,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-v)/x,this.z=(f-u)/x,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ne(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class f_ extends bs{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new We(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new mu(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends f_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class lp extends We{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class d_ extends We{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class me{constructor(t,e,i,s,r,o,a,l,c,u,h,f,p,g,v,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,p,g,v,m)}set(t,e,i,s,r,o,a,l,c,u,h,f,p,g,v,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Ps.setFromMatrixColumn(t,0).length(),r=1/Ps.setFromMatrixColumn(t,1).length(),o=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,p=o*h,g=a*u,v=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,v=c*h;e[0]=f+v*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,v=c*h;e[0]=f-v*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*h,g=a*u,v=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+v,e[1]=l*h,e[5]=v*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=v-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-v*h}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+v,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(p_,t,m_)}lookAt(t,e,i){const s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ii.crossVectors(i,mn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ii.crossVectors(i,mn)),Ii.normalize(),uo.crossVectors(mn,Ii),s[0]=Ii.x,s[4]=uo.x,s[8]=mn.x,s[1]=Ii.y,s[5]=uo.y,s[9]=mn.y,s[2]=Ii.z,s[6]=uo.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],x=i[3],E=i[7],y=i[11],A=i[15],C=s[0],L=s[4],S=s[8],T=s[12],Y=s[1],D=s[5],F=s[9],z=s[13],q=s[2],G=s[6],X=s[10],B=s[14],rt=s[3],ht=s[7],yt=s[11],bt=s[15];return r[0]=o*C+a*Y+l*q+c*rt,r[4]=o*L+a*D+l*G+c*ht,r[8]=o*S+a*F+l*X+c*yt,r[12]=o*T+a*z+l*B+c*bt,r[1]=u*C+h*Y+f*q+p*rt,r[5]=u*L+h*D+f*G+p*ht,r[9]=u*S+h*F+f*X+p*yt,r[13]=u*T+h*z+f*B+p*bt,r[2]=g*C+v*Y+m*q+d*rt,r[6]=g*L+v*D+m*G+d*ht,r[10]=g*S+v*F+m*X+d*yt,r[14]=g*T+v*z+m*B+d*bt,r[3]=x*C+E*Y+y*q+A*rt,r[7]=x*L+E*D+y*G+A*ht,r[11]=x*S+E*F+y*X+A*yt,r[15]=x*T+E*z+y*B+A*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],v=t[7],m=t[11],d=t[15],x=l*p-c*f,E=a*p-c*h,y=a*f-l*h,A=o*p-c*u,C=o*f-l*u,L=o*h-a*u;return e*(v*x-m*E+d*y)-i*(g*x-m*A+d*C)+s*(g*E-v*A+d*L)-r*(g*y-v*C+m*L)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],v=t[13],m=t[14],d=t[15],x=e*a-i*o,E=e*l-s*o,y=e*c-r*o,A=i*l-s*a,C=i*c-r*a,L=s*c-r*l,S=u*v-h*g,T=u*m-f*g,Y=u*d-p*g,D=h*m-f*v,F=h*d-p*v,z=f*d-p*m,q=x*z-E*F+y*D+A*Y-C*T+L*S;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/q;return t[0]=(a*z-l*F+c*D)*G,t[1]=(s*F-i*z-r*D)*G,t[2]=(v*L-m*C+d*A)*G,t[3]=(f*C-h*L-p*A)*G,t[4]=(l*Y-o*z-c*T)*G,t[5]=(e*z-s*Y+r*T)*G,t[6]=(m*y-g*L-d*E)*G,t[7]=(u*L-f*y+p*E)*G,t[8]=(o*F-a*Y+c*S)*G,t[9]=(i*Y-e*F-r*S)*G,t[10]=(g*C-v*y+d*x)*G,t[11]=(h*y-u*C-p*x)*G,t[12]=(a*T-o*D-l*S)*G,t[13]=(e*D-i*T+s*S)*G,t[14]=(v*E-g*A-m*x)*G,t[15]=(u*A-h*E+f*x)*G,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,v=o*u,m=o*h,d=a*h,x=l*c,E=l*u,y=l*h,A=i.x,C=i.y,L=i.z;return s[0]=(1-(v+d))*A,s[1]=(p+y)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(p-y)*C,s[5]=(1-(f+d))*C,s[6]=(m+x)*C,s[7]=0,s[8]=(g+E)*L,s[9]=(m-x)*L,s[10]=(1-(f+v))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Ps.set(s[0],s[1],s[2]).length();const a=Ps.set(s[4],s[5],s[6]).length(),l=Ps.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ln.copy(this);const c=1/o,u=1/a,h=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,e.setFromRotationMatrix(Ln),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=Qn,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),p=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===Qn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===qr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Qn,l=!1){const c=this.elements,u=2/(e-t),h=2/(i-s),f=-(e+t)/(e-t),p=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===Qn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===qr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ps=new k,Ln=new me,p_=new k(0,0,0),m_=new k(1,1,1),Ii=new k,uo=new k,mn=new k,Ah=new me,Ch=new ji;class ii{constructor(t=0,e=0,i=0,s=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ah,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class gu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let g_=0;const Rh=new k,Ds=new ji,li=new me,ho=new k,pr=new k,__=new k,v_=new ji,Ph=new k(1,0,0),Dh=new k(0,1,0),Lh=new k(0,0,1),Ih={type:"added"},x_={type:"removed"},Ls={type:"childadded",child:null},el={type:"childremoved",child:null};class Ve extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=Jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new k,e=new ii,i=new ji,s=new k(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Qt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(Ph,t)}rotateY(t){return this.rotateOnAxis(Dh,t)}rotateZ(t){return this.rotateOnAxis(Lh,t)}translateOnAxis(t,e){return Rh.copy(t).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ph,t)}translateY(t){return this.translateOnAxis(Dh,t)}translateZ(t){return this.translateOnAxis(Lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ho.copy(t):ho.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(pr,ho,this.up):li.lookAt(ho,pr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(li),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ih),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(x_),el.child=t,this.dispatchEvent(el),el.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ih),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,__),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,v_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new k(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gi extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S_={type:"move"};class nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(S_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Gi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},fo={h:0,s:0,l:0};function il(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=re.workingColorSpace){if(t=o_(t,1),e=ne(e,0,1),i=ne(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=il(o,r,t+1/3),this.g=il(o,r,t),this.b=il(o,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=vn){function i(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vn){const i=cp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vn){return re.workingToColorSpace(qe.copy(this),t),Math.round(ne(qe.r*255,0,255))*65536+Math.round(ne(qe.g*255,0,255))*256+Math.round(ne(qe.b*255,0,255))}getHexString(t=vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(qe.copy(this),e);const i=qe.r,s=qe.g,r=qe.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=vn){re.workingToColorSpace(qe.copy(this),t);const e=qe.r,i=qe.g,s=qe.b;return t!==vn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(fo);const i=Za(Ui.h,fo.h,e),s=Za(Ui.s,fo.s,e),r=Za(Ui.l,fo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new qt;qt.NAMES=cp;class _u{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=i}clone(){return new _u(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class up extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const In=new k,ci=new k,sl=new k,ui=new k,Is=new k,Us=new k,Uh=new k,rl=new k,ol=new k,al=new k,ll=new Ee,cl=new Ee,ul=new Ee;class On{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),In.subVectors(t,e),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){In.subVectors(s,e),ci.subVectors(i,e),sl.subVectors(t,e);const o=In.dot(In),a=In.dot(ci),l=In.dot(sl),c=ci.dot(ci),u=ci.dot(sl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return ll.setScalar(0),cl.setScalar(0),ul.setScalar(0),ll.fromBufferAttribute(t,e),cl.fromBufferAttribute(t,i),ul.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ll,r.x),o.addScaledVector(cl,r.y),o.addScaledVector(ul,r.z),o}static isFrontFacing(t,e,i,s){return In.subVectors(i,e),ci.subVectors(t,e),In.cross(ci).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),In.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return On.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return On.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return On.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return On.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return On.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Is.subVectors(s,i),Us.subVectors(r,i),rl.subVectors(t,i);const l=Is.dot(rl),c=Us.dot(rl);if(l<=0&&c<=0)return e.copy(i);ol.subVectors(t,s);const u=Is.dot(ol),h=Us.dot(ol);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Is,o);al.subVectors(t,r);const p=Is.dot(al),g=Us.dot(al);if(g>=0&&p<=g)return e.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Us,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Uh.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(Uh,a);const d=1/(m+v+f);return o=v*d,a=f*d,e.copy(i).addScaledVector(Is,o).addScaledVector(Us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Qr{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),po.copy(i.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),mo.subVectors(this.max,mr),Fs.subVectors(t.a,mr),Ns.subVectors(t.b,mr),Os.subVectors(t.c,mr),Fi.subVectors(Ns,Fs),Ni.subVectors(Os,Ns),is.subVectors(Fs,Os);let e=[0,-Fi.z,Fi.y,0,-Ni.z,Ni.y,0,-is.z,is.y,Fi.z,0,-Fi.x,Ni.z,0,-Ni.x,is.z,0,-is.x,-Fi.y,Fi.x,0,-Ni.y,Ni.x,0,-is.y,is.x,0];return!hl(e,Fs,Ns,Os,mo)||(e=[1,0,0,0,1,0,0,0,1],!hl(e,Fs,Ns,Os,mo))?!1:(go.crossVectors(Fi,Ni),e=[go.x,go.y,go.z],hl(e,Fs,Ns,Os,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const hi=[new k,new k,new k,new k,new k,new k,new k,new k],Un=new k,po=new Qr,Fs=new k,Ns=new k,Os=new k,Fi=new k,Ni=new k,is=new k,mr=new k,mo=new k,go=new k,ss=new k;function hl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ss.fromArray(n,r);const a=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),l=t.dot(ss),c=e.dot(ss),u=i.dot(ss);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Pe=new k,_o=new Gt;let M_=0;class he{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Sh,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)_o.fromBufferAttribute(this,e),_o.applyMatrix3(t),this.setXY(e,_o.x,_o.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=dr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=on(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dr(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dr(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dr(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),i=on(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),i=on(i,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),i=on(i,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sh&&(t.usage=this.usage),t}}class hp extends he{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class fp extends he{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Rn extends he{constructor(t,e,i){super(new Float32Array(t),e,i)}}const y_=new Qr,gr=new k,fl=new k;class to{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):y_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);const e=gr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(gr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(fl)),this.expandByPoint(gr.copy(t.center).sub(fl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let b_=0;const bn=new me,dl=new Ve,Bs=new k,gn=new Qr,_r=new Qr,Oe=new k;class Ie extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(n_(t)?fp:hp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,i){return bn.makeTranslation(t,e,i),this.applyMatrix4(bn),this}scale(t,e,i){return bn.makeScale(t,e,i),this.applyMatrix4(bn),this}lookAt(t){return dl.lookAt(t),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rn(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];_r.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(gn.min,_r.min),gn.expandByPoint(Oe),Oe.addVectors(gn.max,_r.max),gn.expandByPoint(Oe)):(gn.expandByPoint(_r.min),gn.expandByPoint(_r.max))}gn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Oe.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(t,c),Oe.add(Bs)),s=Math.max(s,i.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new he(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new k,l[S]=new k;const c=new k,u=new k,h=new k,f=new Gt,p=new Gt,g=new Gt,v=new k,m=new k;function d(S,T,Y){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,Y),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,Y),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),a[S].add(v),a[T].add(v),a[Y].add(v),l[S].add(m),l[T].add(m),l[Y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let S=0,T=x.length;S<T;++S){const Y=x[S],D=Y.start,F=Y.count;for(let z=D,q=D+F;z<q;z+=3)d(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const E=new k,y=new k,A=new k,C=new k;function L(S){A.fromBufferAttribute(s,S),C.copy(A);const T=a[S];E.copy(T),E.sub(A.multiplyScalar(A.dot(T))).normalize(),y.crossVectors(C,T);const D=y.dot(l[S])<0?-1:1;o.setXYZW(S,E.x,E.y,E.z,D)}for(let S=0,T=x.length;S<T;++S){const Y=x[S],D=Y.start,F=Y.count;for(let z=D,q=D+F;z<q;z+=3)L(t.getX(z+0)),L(t.getX(z+1)),L(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new he(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new he(f,u,h)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let E_=0;class Es extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=Jr(),this.name="",this.type="Material",this.blending=vs,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wl&&(i.blendSrc=this.blendSrc),this.blendDst!==Xl&&(i.blendDst=this.blendDst),this.blendEquation!==fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const fi=new k,pl=new k,vo=new k,Oi=new k,ml=new k,xo=new k,gl=new k;class eo{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){pl.copy(t).add(e).multiplyScalar(.5),vo.copy(e).sub(t).normalize(),Oi.copy(this.origin).sub(pl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(vo),a=Oi.dot(this.direction),l=-Oi.dot(vo),c=Oi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(pl).addScaledVector(vo,f),p}intersectSphere(t,e){fi.subVectors(t.center,this.origin);const i=fi.dot(this.direction),s=fi.dot(fi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,i,s,r){ml.subVectors(e,t),xo.subVectors(i,t),gl.crossVectors(ml,xo);let o=this.direction.dot(gl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,t);const l=a*this.direction.dot(xo.crossVectors(Oi,xo));if(l<0)return null;const c=a*this.direction.dot(ml.cross(Oi));if(c<0||l+c>o)return null;const u=-a*Oi.dot(gl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vu extends Es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fh=new me,rs=new eo,So=new to,Nh=new k,Mo=new k,yo=new k,bo=new k,_l=new k,Eo=new k,Oh=new k,To=new k;class dn extends Ve{constructor(t=new Ie,e=new vu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Eo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(_l.fromBufferAttribute(h,t),o?Eo.addScaledVector(_l,u):Eo.addScaledVector(_l.sub(e),u))}e.add(Eo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(r),rs.copy(t.ray).recast(t.near),!(So.containsPoint(rs.origin)===!1&&(rs.intersectSphere(So,Nh)===null||rs.origin.distanceToSquared(Nh)>(t.far-t.near)**2))&&(Fh.copy(r).invert(),rs.copy(t.ray).applyMatrix4(Fh),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,A=E;y<A;y+=3){const C=a.getX(y),L=a.getX(y+1),S=a.getX(y+2);s=wo(this,d,t,i,c,u,h,C,L,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const x=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);s=wo(this,o,t,i,c,u,h,x,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,A=E;y<A;y+=3){const C=y,L=y+1,S=y+2;s=wo(this,d,t,i,c,u,h,C,L,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const x=m,E=m+1,y=m+2;s=wo(this,o,t,i,c,u,h,x,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function T_(n,t,e,i,s,r,o,a){let l;if(t.side===fn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===qi,a),l===null)return null;To.copy(a),To.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(To);return c<e.near||c>e.far?null:{distance:c,point:To.clone(),object:n}}function wo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Mo),n.getVertexPosition(l,yo),n.getVertexPosition(c,bo);const u=T_(n,t,e,i,Mo,yo,bo,Oh);if(u){const h=new k;On.getBarycoord(Oh,Mo,yo,bo,h),s&&(u.uv=On.getInterpolatedAttribute(s,a,l,c,h,new Gt)),r&&(u.uv1=On.getInterpolatedAttribute(r,a,l,c,h,new Gt)),o&&(u.normal=On.getInterpolatedAttribute(o,a,l,c,h,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};On.getNormal(Mo,yo,bo,f.normal),u.face=f,u.barycoord=h}return u}class Ir extends We{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Te,u=Te,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vl=new k,w_=new k,A_=new Qt;class Vi{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=vl.subVectors(i,e).cross(w_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(vl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||A_.getNormalMatrix(t),s=this.coplanarPoint(vl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const os=new to,C_=new Gt(.5,.5),Ao=new k;class xu{constructor(t=new Vi,e=new Vi,i=new Vi,s=new Vi,r=new Vi,o=new Vi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Qn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],p=r[7],g=r[8],v=r[9],m=r[10],d=r[11],x=r[12],E=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-o,p-u,d-g,A-x).normalize(),s[1].setComponents(c+o,p+u,d+g,A+x).normalize(),s[2].setComponents(c+a,p+h,d+v,A+E).normalize(),s[3].setComponents(c-a,p-h,d-v,A-E).normalize(),i)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,p-f,d-m,A-y).normalize();else if(s[4].setComponents(c-l,p-f,d-m,A-y).normalize(),e===Qn)s[5].setComponents(c+l,p+f,d+m,A+y).normalize();else if(e===qr)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(t){os.center.set(0,0,0);const e=C_.distanceTo(t.center);return os.radius=.7071067811865476+e,os.applyMatrix4(t.matrixWorld),this.intersectsSphere(os)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Ao.x=s.normal.x>0?t.max.x:t.min.x,Ao.y=s.normal.y>0?t.max.y:t.min.y,Ao.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ca extends Es{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ha=new k,fa=new k,Bh=new me,vr=new eo,Co=new to,xl=new k,zh=new k;class R_ extends Ve{constructor(t=new Ie,e=new Ca){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ha.fromBufferAttribute(e,s-1),fa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ha.distanceTo(fa);t.setAttribute("lineDistance",new Rn(i,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(s),Co.radius+=r,t.ray.intersectsSphere(Co)===!1)return;Bh.copy(s).invert(),vr.copy(t.ray).applyMatrix4(Bh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const d=u.getX(v),x=u.getX(v+1),E=Ro(this,t,vr,l,d,x,v);E&&e.push(E)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),d=Ro(this,t,vr,l,v,m,g-1);d&&e.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const d=Ro(this,t,vr,l,v,v+1,v);d&&e.push(d)}if(this.isLineLoop){const v=Ro(this,t,vr,l,g-1,p,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ro(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(ha.fromBufferAttribute(a,s),fa.fromBufferAttribute(a,r),e.distanceSqToSegment(ha,fa,xl,zh)>i)return;xl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(xl);if(!(c<t.near||c>t.far))return{distance:c,point:zh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Vh=new k,Hh=new k;class Su extends R_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Vh.fromBufferAttribute(e,s),Hh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Vh.distanceTo(Hh);t.setAttribute("lineDistance",new Rn(i,1))}else Xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mu extends Es{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const kh=new me,Ic=new eo,Po=new to,Do=new k;class dp extends Ve{constructor(t=new Ie,e=new Mu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(s),Po.radius+=r,t.ray.intersectsSphere(Po)===!1)return;kh.copy(s).invert(),Ic.copy(t.ray).applyMatrix4(kh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,v=p;g<v;g++){const m=c.getX(g);Do.fromBufferAttribute(h,m),Gh(Do,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,v=p;g<v;g++)Do.fromBufferAttribute(h,g),Gh(Do,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Gh(n,t,e,i,s,r,o){const a=Ic.distanceSqToPoint(n);if(a<e){const l=new k;Ic.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class pp extends We{constructor(t=[],e=xs,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yu extends We{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jr extends We{constructor(t,e,i=ni,s,r,o,a=Te,l=Te,c,u=Ci,h=1){if(u!==Ci&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class P_ extends jr{constructor(t,e=ni,i=xs,s,r,o=Te,a=Te,l,c=Ci){const u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class mp extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class no extends Ie{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Rn(c,3)),this.setAttribute("normal",new Rn(u,3)),this.setAttribute("uv",new Rn(h,2));function g(v,m,d,x,E,y,A,C,L,S,T){const Y=y/L,D=A/S,F=y/2,z=A/2,q=C/2,G=L+1,X=S+1;let B=0,rt=0;const ht=new k;for(let yt=0;yt<X;yt++){const bt=yt*D-z;for(let St=0;St<G;St++){const Yt=St*Y-F;ht[v]=Yt*x,ht[m]=bt*E,ht[d]=q,c.push(ht.x,ht.y,ht.z),ht[v]=0,ht[m]=0,ht[d]=C>0?1:-1,u.push(ht.x,ht.y,ht.z),h.push(St/L),h.push(1-yt/S),B+=1}}for(let yt=0;yt<S;yt++)for(let bt=0;bt<L;bt++){const St=f+bt+G*yt,Yt=f+bt+G*(yt+1),ce=f+(bt+1)+G*(yt+1),ae=f+(bt+1)+G*yt;l.push(St,Yt,ae),l.push(Yt,ce,ae),rt+=6}a.addGroup(p,rt,T),p+=rt,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ar extends Ie{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const x=d*f-o;for(let E=0;E<c;E++){const y=E*h-r;g.push(y,-x,0),v.push(0,0,1),m.push(E/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const E=x+c*d,y=x+c*(d+1),A=x+1+c*(d+1),C=x+1+c*d;p.push(E,y,C),p.push(y,A,C)}this.setIndex(p),this.setAttribute("position",new Rn(g,3)),this.setAttribute("normal",new Rn(v,3)),this.setAttribute("uv",new Rn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.width,t.height,t.widthSegments,t.heightSegments)}}function ir(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function tn(n){const t={};for(let e=0;e<n.length;e++){const i=ir(n[e]);for(const s in i)t[s]=i[s]}return t}function D_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function gp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const _p={clone:ir,merge:tn};var L_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends Es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L_,this.fragmentShader=I_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=D_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class U_ extends Mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class F_ extends Es{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qt(16777215),this.specular=new qt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=op,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=su,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class N_ extends Es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class O_ extends Es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class vp extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Sl=new me,Wh=new k,Xh=new k;class B_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xu,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wh),Xh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xh),e.updateMatrixWorld(),Sl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===qr||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Lo=new k,Io=new ji,Xn=new k;class xp extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Lo,Io,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,Io,Xn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Lo,Io,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lo,Io,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new k,Yh=new Gt,qh=new Gt;class wn extends xp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Lc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lc*2*Math.atan(Math.tan(Yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z)}getViewSize(t,e){return this.getViewBounds(t,Yh,qh),e.subVectors(qh,Yh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Yo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Ra extends xp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class z_ extends B_{constructor(){super(new Ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class V_ extends vp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new z_}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class H_ extends vp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const zs=-90,Vs=1;class k_ extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(zs,Vs,t,e);s.layers=this.layers,this.add(s);const r=new wn(zs,Vs,t,e);r.layers=this.layers,this.add(r);const o=new wn(zs,Vs,t,e);o.layers=this.layers,this.add(o);const a=new wn(zs,Vs,t,e);a.layers=this.layers,this.add(a);const l=new wn(zs,Vs,t,e);l.layers=this.layers,this.add(l);const c=new wn(zs,Vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class G_ extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class W_{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=X_.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function X_(){this._document.hidden===!1&&this.reset()}const jh=new me;class Y_{constructor(t,e,i=0,s=1/0){this.ray=new eo(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new gu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jh),this}intersectObject(t,e=!0,i=[]){return Uc(t,this,i,e),i.sort($h),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Uc(t[s],this,i,e);return i.sort($h),i}}function $h(n,t){return n.distance-t.distance}function Uc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Uc(r[o],t,e,!0)}}class Zh{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ne(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class q_ extends Su{constructor(t,e=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ie;r.setIndex(new he(i,1)),r.setAttribute("position",new Rn(s,3)),super(r,new Ca({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class j_ extends bs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Xt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Kh(n,t,e,i){const s=$_(i);switch(e){case sp:return n*t;case cu:return n*t/s.components*s.byteLength;case uu:return n*t/s.components*s.byteLength;case nr:return n*t*2/s.components*s.byteLength;case hu:return n*t*2/s.components*s.byteLength;case rp:return n*t*3/s.components*s.byteLength;case rn:return n*t*4/s.components*s.byteLength;case fu:return n*t*4/s.components*s.byteLength;case ko:case Go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wo:case Xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ec:case ic:return Math.max(n,16)*Math.max(t,8)/4;case tc:case nc:return Math.max(n,8)*Math.max(t,8)/2;case sc:case rc:case ac:case lc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case oc:case cc:case uc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case dc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case pc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case mc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case _c:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case vc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case xc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case yc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case bc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Tc:case wc:case Ac:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Cc:case Rc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Pc:case Dc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $_(n){switch(n){case xn:case tp:return{byteLength:1,components:1};case Xr:case ep:case Ai:return{byteLength:2,components:1};case au:case lu:return{byteLength:2,components:4};case ni:case ou:case sn:return{byteLength:4,components:1};case np:case ip:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:iu}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=iu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Z_(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var K_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Q_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ev=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ov=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,av=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_v=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Sv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ev=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Av="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Pv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ov=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$v=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ix=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ox=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ux=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ex=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ox=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,oS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_S=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,MS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:K_,alphahash_pars_fragment:J_,alphamap_fragment:Q_,alphamap_pars_fragment:tv,alphatest_fragment:ev,alphatest_pars_fragment:nv,aomap_fragment:iv,aomap_pars_fragment:sv,batching_pars_vertex:rv,batching_vertex:ov,begin_vertex:av,beginnormal_vertex:lv,bsdfs:cv,iridescence_fragment:uv,bumpmap_pars_fragment:hv,clipping_planes_fragment:fv,clipping_planes_pars_fragment:dv,clipping_planes_pars_vertex:pv,clipping_planes_vertex:mv,color_fragment:gv,color_pars_fragment:_v,color_pars_vertex:vv,color_vertex:xv,common:Sv,cube_uv_reflection_fragment:Mv,defaultnormal_vertex:yv,displacementmap_pars_vertex:bv,displacementmap_vertex:Ev,emissivemap_fragment:Tv,emissivemap_pars_fragment:wv,colorspace_fragment:Av,colorspace_pars_fragment:Cv,envmap_fragment:Rv,envmap_common_pars_fragment:Pv,envmap_pars_fragment:Dv,envmap_pars_vertex:Lv,envmap_physical_pars_fragment:Gv,envmap_vertex:Iv,fog_vertex:Uv,fog_pars_vertex:Fv,fog_fragment:Nv,fog_pars_fragment:Ov,gradientmap_pars_fragment:Bv,lightmap_pars_fragment:zv,lights_lambert_fragment:Vv,lights_lambert_pars_fragment:Hv,lights_pars_begin:kv,lights_toon_fragment:Wv,lights_toon_pars_fragment:Xv,lights_phong_fragment:Yv,lights_phong_pars_fragment:qv,lights_physical_fragment:jv,lights_physical_pars_fragment:$v,lights_fragment_begin:Zv,lights_fragment_maps:Kv,lights_fragment_end:Jv,logdepthbuf_fragment:Qv,logdepthbuf_pars_fragment:tx,logdepthbuf_pars_vertex:ex,logdepthbuf_vertex:nx,map_fragment:ix,map_pars_fragment:sx,map_particle_fragment:rx,map_particle_pars_fragment:ox,metalnessmap_fragment:ax,metalnessmap_pars_fragment:lx,morphinstance_vertex:cx,morphcolor_vertex:ux,morphnormal_vertex:hx,morphtarget_pars_vertex:fx,morphtarget_vertex:dx,normal_fragment_begin:px,normal_fragment_maps:mx,normal_pars_fragment:gx,normal_pars_vertex:_x,normal_vertex:vx,normalmap_pars_fragment:xx,clearcoat_normal_fragment_begin:Sx,clearcoat_normal_fragment_maps:Mx,clearcoat_pars_fragment:yx,iridescence_pars_fragment:bx,opaque_fragment:Ex,packing:Tx,premultiplied_alpha_fragment:wx,project_vertex:Ax,dithering_fragment:Cx,dithering_pars_fragment:Rx,roughnessmap_fragment:Px,roughnessmap_pars_fragment:Dx,shadowmap_pars_fragment:Lx,shadowmap_pars_vertex:Ix,shadowmap_vertex:Ux,shadowmask_pars_fragment:Fx,skinbase_vertex:Nx,skinning_pars_vertex:Ox,skinning_vertex:Bx,skinnormal_vertex:zx,specularmap_fragment:Vx,specularmap_pars_fragment:Hx,tonemapping_fragment:kx,tonemapping_pars_fragment:Gx,transmission_fragment:Wx,transmission_pars_fragment:Xx,uv_pars_fragment:Yx,uv_pars_vertex:qx,uv_vertex:jx,worldpos_vertex:$x,background_vert:Zx,background_frag:Kx,backgroundCube_vert:Jx,backgroundCube_frag:Qx,cube_vert:tS,cube_frag:eS,depth_vert:nS,depth_frag:iS,distance_vert:sS,distance_frag:rS,equirect_vert:oS,equirect_frag:aS,linedashed_vert:lS,linedashed_frag:cS,meshbasic_vert:uS,meshbasic_frag:hS,meshlambert_vert:fS,meshlambert_frag:dS,meshmatcap_vert:pS,meshmatcap_frag:mS,meshnormal_vert:gS,meshnormal_frag:_S,meshphong_vert:vS,meshphong_frag:xS,meshphysical_vert:SS,meshphysical_frag:MS,meshtoon_vert:yS,meshtoon_frag:bS,points_vert:ES,points_frag:TS,shadow_vert:wS,shadow_frag:AS,sprite_vert:CS,sprite_frag:RS},Et={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Zn={basic:{uniforms:tn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:tn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:tn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:tn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:tn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new qt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:tn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:tn([Et.points,Et.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:tn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:tn([Et.common,Et.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:tn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:tn([Et.sprite,Et.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:tn([Et.common,Et.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:tn([Et.lights,Et.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Zn.physical={uniforms:tn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Uo={r:0,b:0,g:0},as=new ii,PS=new me;function DS(n,t,e,i,s,r){const o=new qt(0);let a=s===!0?0:1,l,c,u=null,h=0,f=null;function p(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){const y=x.backgroundBlurriness>0;E=t.get(E,y)}return E}function g(x){let E=!1;const y=p(x);y===null?m(o,a):y&&y.isColor&&(m(y,1),E=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(x,E){const y=p(E);y&&(y.isCubeTexture||y.mapping===Aa)?(c===void 0&&(c=new dn(new no(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:ir(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),as.copy(E.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(PS.makeRotationFromEuler(as)),c.material.toneMapped=re.getTransfer(y.colorSpace)!==pe,(u!==y||h!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new dn(new ar(2,2),new Mn({name:"BackgroundMaterial",uniforms:ir(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=re.getTransfer(y.colorSpace)!==pe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,E){x.getRGB(Uo,gp(n)),e.buffers.color.setClear(Uo.r,Uo.g,Uo.b,E,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,E=1){o.set(x),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:g,addToRenderList:v,dispose:d}}function LS(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(D,F,z,q,G){let X=!1;const B=h(D,q,z,F);r!==B&&(r=B,c(r.object)),X=p(D,q,z,G),X&&g(D,q,z,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(D,F,z,q),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function h(D,F,z,q){const G=q.wireframe===!0;let X=i[F.id];X===void 0&&(X={},i[F.id]=X);const B=D.isInstancedMesh===!0?D.id:0;let rt=X[B];rt===void 0&&(rt={},X[B]=rt);let ht=rt[z.id];ht===void 0&&(ht={},rt[z.id]=ht);let yt=ht[G];return yt===void 0&&(yt=f(l()),ht[G]=yt),yt}function f(D){const F=[],z=[],q=[];for(let G=0;G<e;G++)F[G]=0,z[G]=0,q[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:q,object:D,attributes:{},index:null}}function p(D,F,z,q){const G=r.attributes,X=F.attributes;let B=0;const rt=z.getAttributes();for(const ht in rt)if(rt[ht].location>=0){const bt=G[ht];let St=X[ht];if(St===void 0&&(ht==="instanceMatrix"&&D.instanceMatrix&&(St=D.instanceMatrix),ht==="instanceColor"&&D.instanceColor&&(St=D.instanceColor)),bt===void 0||bt.attribute!==St||St&&bt.data!==St.data)return!0;B++}return r.attributesNum!==B||r.index!==q}function g(D,F,z,q){const G={},X=F.attributes;let B=0;const rt=z.getAttributes();for(const ht in rt)if(rt[ht].location>=0){let bt=X[ht];bt===void 0&&(ht==="instanceMatrix"&&D.instanceMatrix&&(bt=D.instanceMatrix),ht==="instanceColor"&&D.instanceColor&&(bt=D.instanceColor));const St={};St.attribute=bt,bt&&bt.data&&(St.data=bt.data),G[ht]=St,B++}r.attributes=G,r.attributesNum=B,r.index=q}function v(){const D=r.newAttributes;for(let F=0,z=D.length;F<z;F++)D[F]=0}function m(D){d(D,0)}function d(D,F){const z=r.newAttributes,q=r.enabledAttributes,G=r.attributeDivisors;z[D]=1,q[D]===0&&(n.enableVertexAttribArray(D),q[D]=1),G[D]!==F&&(n.vertexAttribDivisor(D,F),G[D]=F)}function x(){const D=r.newAttributes,F=r.enabledAttributes;for(let z=0,q=F.length;z<q;z++)F[z]!==D[z]&&(n.disableVertexAttribArray(z),F[z]=0)}function E(D,F,z,q,G,X,B){B===!0?n.vertexAttribIPointer(D,F,z,G,X):n.vertexAttribPointer(D,F,z,q,G,X)}function y(D,F,z,q){v();const G=q.attributes,X=z.getAttributes(),B=F.defaultAttributeValues;for(const rt in X){const ht=X[rt];if(ht.location>=0){let yt=G[rt];if(yt===void 0&&(rt==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),rt==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor)),yt!==void 0){const bt=yt.normalized,St=yt.itemSize,Yt=t.get(yt);if(Yt===void 0)continue;const ce=Yt.buffer,ae=Yt.type,lt=Yt.bytesPerElement,mt=ae===n.INT||ae===n.UNSIGNED_INT||yt.gpuType===ou;if(yt.isInterleavedBufferAttribute){const _t=yt.data,Wt=_t.stride,Ot=yt.offset;if(_t.isInstancedInterleavedBuffer){for(let kt=0;kt<ht.locationSize;kt++)d(ht.location+kt,_t.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let kt=0;kt<ht.locationSize;kt++)m(ht.location+kt);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let kt=0;kt<ht.locationSize;kt++)E(ht.location+kt,St/ht.locationSize,ae,bt,Wt*lt,(Ot+St/ht.locationSize*kt)*lt,mt)}else{if(yt.isInstancedBufferAttribute){for(let _t=0;_t<ht.locationSize;_t++)d(ht.location+_t,yt.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let _t=0;_t<ht.locationSize;_t++)m(ht.location+_t);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let _t=0;_t<ht.locationSize;_t++)E(ht.location+_t,St/ht.locationSize,ae,bt,St*lt,St/ht.locationSize*_t*lt,mt)}}else if(B!==void 0){const bt=B[rt];if(bt!==void 0)switch(bt.length){case 2:n.vertexAttrib2fv(ht.location,bt);break;case 3:n.vertexAttrib3fv(ht.location,bt);break;case 4:n.vertexAttrib4fv(ht.location,bt);break;default:n.vertexAttrib1fv(ht.location,bt)}}}}x()}function A(){T();for(const D in i){const F=i[D];for(const z in F){const q=F[z];for(const G in q){const X=q[G];for(const B in X)u(X[B].object),delete X[B];delete q[G]}}delete i[D]}}function C(D){if(i[D.id]===void 0)return;const F=i[D.id];for(const z in F){const q=F[z];for(const G in q){const X=q[G];for(const B in X)u(X[B].object),delete X[B];delete q[G]}}delete i[D.id]}function L(D){for(const F in i){const z=i[F];for(const q in z){const G=z[q];if(G[D.id]===void 0)continue;const X=G[D.id];for(const B in X)u(X[B].object),delete X[B];delete G[D.id]}}}function S(D){for(const F in i){const z=i[F],q=D.isInstancedMesh===!0?D.id:0,G=z[q];if(G!==void 0){for(const X in G){const B=G[X];for(const rt in B)u(B[rt].object),delete B[rt];delete G[X]}delete z[q],Object.keys(z).length===0&&delete i[F]}}}function T(){Y(),o=!0,r!==s&&(r=s,c(r.object))}function Y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:Y,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfObject:S,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function IS(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function US(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==rn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const S=L===Ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==xn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==sn&&!S)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Xt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:y,maxSamples:A,samples:C}}function FS(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Vi,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:i,E=x*4;let y=d.clippingState||null;l.value=y,y=u(g,f,E,p);for(let A=0;A!==E;++A)y[A]=e[A];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,y=p;E!==v;++E,y+=4)o.copy(h[E]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}const Wi=4,Jh=[.125,.215,.35,.446,.526,.582],ds=20,NS=256,xr=new Ra,Qh=new qt;let Ml=null,yl=0,bl=0,El=!1;const OS=new k;class tf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=OS}=r;Ml=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ml,yl,bl),this._renderer.xr.enabled=El,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xs||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ml=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:Ai,format:rn,colorSpace:Ss,depthBuffer:!1},s=ef(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=BS(r)),this._blurMaterial=VS(r,t,e),this._ggxMaterial=zS(r,t,e)}return s}_compileMaterial(t){const e=new dn(new Ie,t);this._renderer.compile(e,xr)}_sceneToCubeUV(t,e,i,s,r){const l=new wn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Qh),h.toneMapping=ei,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dn(new no,new vu({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let d=!1;const x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,d=!0):(m.color.copy(Qh),d=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const A=this._cubeSize;Hs(s,y*A,E>2?A:0,A,A),h.setRenderTarget(s),d&&h.render(v,l),h.render(t,l)}h.toneMapping=p,h.autoClear=f,t.background=x}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===xs||t.mapping===er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Hs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,xr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Wi?i-g+Wi:0),d=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,Hs(r,m,d,3*v,2*v),s.setRenderTarget(r),s.render(a,xr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Hs(t,m,d,3*v,2*v),s.setRenderTarget(t),s.render(a,xr)}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&se("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ds-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):ds;m>ds&&Xt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ds}`);const d=[];let x=0;for(let L=0;L<ds;++L){const S=L/v,T=Math.exp(-S*S/2);d.push(T),L===0?x+=T:L<m&&(x+=2*T)}for(let L=0;L<d.length;L++)d[L]=d[L]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const y=this._sizeLods[s],A=3*y*(s>E-Wi?s-E+Wi:0),C=4*(this._cubeSize-y);Hs(e,A,C,3*y,2*y),l.setRenderTarget(e),l.render(h,xr)}}function BS(n){const t=[],e=[],i=[];let s=n;const r=n-Wi+1+Jh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Wi?l=Jh[o-n+Wi-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,x=new Float32Array(v*g*p),E=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let C=0;C<p;C++){const L=C%3*2/3-1,S=C>2?0:-1,T=[L,S,0,L+2/3,S,0,L+2/3,S+1,0,L,S,0,L+2/3,S+1,0,L,S+1,0];x.set(T,v*g*C),E.set(f,m*g*C);const Y=[C,C,C,C,C,C];y.set(Y,d*g*C)}const A=new Ie;A.setAttribute("position",new he(x,v)),A.setAttribute("uv",new he(E,m)),A.setAttribute("faceIndex",new he(y,d)),i.push(new dn(A,null)),s>Wi&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function ef(n,t,e){const i=new Cn(n,t,e);return i.texture.mapping=Aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function zS(n,t,e){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:NS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function VS(n,t,e){const i=new Float32Array(ds),s=new k(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function nf(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function sf(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Pa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Mp extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new pp(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new no(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:yi});r.uniforms.tEquirect.value=e;const o=new dn(s,r),a=e.minFilter;return e.minFilter===ps&&(e.minFilter=ze),new k_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}function HS(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,p=!1){return f==null?null:p?o(f):r(f)}function r(f){if(f&&f.isTexture){const p=f.mapping;if(p===qa||p===ja)if(t.has(f)){const g=t.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const v=new Mp(g.height);return v.fromEquirectangularTexture(n,f),t.set(f,v),f.addEventListener("dispose",c),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const p=f.mapping,g=p===qa||p===ja,v=p===xs||p===er;if(g||v){let m=e.get(f);const d=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new tf(n)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const x=f.image;return g&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new tf(n)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,p){return p===qa?f.mapping=xs:p===ja&&(f.mapping=er),f}function l(f){let p=0;const g=6;for(let v=0;v<g;v++)f[v]!==void 0&&p++;return p===g}function c(f){const p=f.target;p.removeEventListener("dispose",c);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function kS(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ua("WebGLRenderer: "+i+" extension not supported."),s}}}function GS(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)t.update(f[p],n.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(g===void 0)return;if(p!==null){const x=p.array;v=p.version;for(let E=0,y=x.length;E<y;E+=3){const A=x[E+0],C=x[E+1],L=x[E+2];f.push(A,C,C,L,L,A)}}else{const x=g.array;v=g.version;for(let E=0,y=x.length/3-1;E<y;E+=3){const A=E+0,C=E+1,L=E+2;f.push(A,C,C,L,L,A)}}const m=new(g.count>=65535?fp:hp)(f,1);m.version=v;const d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function WS(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),e.update(p,i,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function h(f,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,v,0,g);let d=0;for(let x=0;x<g;x++)d+=p[x]*v[x];e.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function XS(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:se("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function YS(n,t,e){const i=new WeakMap,s=new Ee;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let Y=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",Y)};var p=Y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let A=a.attributes.position.count*y,C=1;A>t.maxTextureSize&&(C=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const L=new Float32Array(A*C*4*h),S=new lp(L,A,C,h);S.type=sn,S.needsUpdate=!0;const T=y*4;for(let D=0;D<h;D++){const F=d[D],z=x[D],q=E[D],G=A*C*4*D;for(let X=0;X<F.count;X++){const B=X*T;g===!0&&(s.fromBufferAttribute(F,X),L[G+B+0]=s.x,L[G+B+1]=s.y,L[G+B+2]=s.z,L[G+B+3]=0),v===!0&&(s.fromBufferAttribute(z,X),L[G+B+4]=s.x,L[G+B+5]=s.y,L[G+B+6]=s.z,L[G+B+7]=0),m===!0&&(s.fromBufferAttribute(q,X),L[G+B+8]=s.x,L[G+B+9]=s.y,L[G+B+10]=s.z,L[G+B+11]=q.itemSize===4?s.w:1)}}f={count:h,texture:S,size:new Gt(A,C)},i.set(a,f),a.addEventListener("dispose",Y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function qS(n,t,e,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const jS={[qd]:"LINEAR_TONE_MAPPING",[jd]:"REINHARD_TONE_MAPPING",[$d]:"CINEON_TONE_MAPPING",[ru]:"ACES_FILMIC_TONE_MAPPING",[Kd]:"AGX_TONE_MAPPING",[Jd]:"NEUTRAL_TONE_MAPPING",[Zd]:"CUSTOM_TONE_MAPPING"};function $S(n,t,e,i,s){const r=new Cn(t,e,{type:n,depthBuffer:i,stencilBuffer:s}),o=new Cn(t,e,{type:Ai,depthBuffer:!1,stencilBuffer:!1}),a=new Ie;a.setAttribute("position",new Rn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Rn([0,2,0,0,2,0],2));const l=new U_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new dn(a,l),u=new Ra(-1,1,1,-1,0,1);let h=null,f=null,p=!1,g,v=null,m=[],d=!1;this.setSize=function(x,E){r.setSize(x,E),o.setSize(x,E);for(let y=0;y<m.length;y++){const A=m[y];A.setSize&&A.setSize(x,E)}},this.setEffects=function(x){m=x,d=m.length>0&&m[0].isRenderPass===!0;const E=r.width,y=r.height;for(let A=0;A<m.length;A++){const C=m[A];C.setSize&&C.setSize(E,y)}},this.begin=function(x,E){if(p||x.toneMapping===ei&&m.length===0)return!1;if(v=E,E!==null){const y=E.width,A=E.height;(r.width!==y||r.height!==A)&&this.setSize(y,A)}return d===!1&&x.setRenderTarget(r),g=x.toneMapping,x.toneMapping=ei,!0},this.hasRenderPass=function(){return d},this.end=function(x,E){x.toneMapping=g,p=!0;let y=r,A=o;for(let C=0;C<m.length;C++){const L=m[C];if(L.enabled!==!1&&(L.render(x,A,y,E),L.needsSwap!==!1)){const S=y;y=A,A=S}}if(h!==x.outputColorSpace||f!==x.toneMapping){h=x.outputColorSpace,f=x.toneMapping,l.defines={},re.getTransfer(h)===pe&&(l.defines.SRGB_TRANSFER="");const C=jS[f];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(v),x.render(c,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const yp=new We,Fc=new jr(1,1),bp=new lp,Ep=new d_,Tp=new pp,rf=[],of=[],af=new Float32Array(16),lf=new Float32Array(9),cf=new Float32Array(4);function lr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=rf[s];if(r===void 0&&(r=new Float32Array(s),rf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ue(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Fe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Da(n,t){let e=of[t];e===void 0&&(e=new Int32Array(t),of[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ZS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function KS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2fv(this.addr,t),Fe(e,t)}}function JS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;n.uniform3fv(this.addr,t),Fe(e,t)}}function QS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4fv(this.addr,t),Fe(e,t)}}function tM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,i))return;cf.set(i),n.uniformMatrix2fv(this.addr,!1,cf),Fe(e,i)}}function eM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,i))return;lf.set(i),n.uniformMatrix3fv(this.addr,!1,lf),Fe(e,i)}}function nM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,i))return;af.set(i),n.uniformMatrix4fv(this.addr,!1,af),Fe(e,i)}}function iM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function sM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2iv(this.addr,t),Fe(e,t)}}function rM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3iv(this.addr,t),Fe(e,t)}}function oM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4iv(this.addr,t),Fe(e,t)}}function aM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function lM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2uiv(this.addr,t),Fe(e,t)}}function cM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3uiv(this.addr,t),Fe(e,t)}}function uM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4uiv(this.addr,t),Fe(e,t)}}function hM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Fc.compareFunction=e.isReversedDepthBuffer()?pu:du,r=Fc):r=yp,e.setTexture2D(t||r,s)}function fM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ep,s)}function dM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Tp,s)}function pM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||bp,s)}function mM(n){switch(n){case 5126:return ZS;case 35664:return KS;case 35665:return JS;case 35666:return QS;case 35674:return tM;case 35675:return eM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return sM;case 35668:case 35672:return rM;case 35669:case 35673:return oM;case 5125:return aM;case 36294:return lM;case 36295:return cM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return hM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return dM;case 36289:case 36303:case 36311:case 36292:return pM}}function gM(n,t){n.uniform1fv(this.addr,t)}function _M(n,t){const e=lr(t,this.size,2);n.uniform2fv(this.addr,e)}function vM(n,t){const e=lr(t,this.size,3);n.uniform3fv(this.addr,e)}function xM(n,t){const e=lr(t,this.size,4);n.uniform4fv(this.addr,e)}function SM(n,t){const e=lr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function MM(n,t){const e=lr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function yM(n,t){const e=lr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function bM(n,t){n.uniform1iv(this.addr,t)}function EM(n,t){n.uniform2iv(this.addr,t)}function TM(n,t){n.uniform3iv(this.addr,t)}function wM(n,t){n.uniform4iv(this.addr,t)}function AM(n,t){n.uniform1uiv(this.addr,t)}function CM(n,t){n.uniform2uiv(this.addr,t)}function RM(n,t){n.uniform3uiv(this.addr,t)}function PM(n,t){n.uniform4uiv(this.addr,t)}function DM(n,t,e){const i=this.cache,s=t.length,r=Da(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Fc:o=yp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function LM(n,t,e){const i=this.cache,s=t.length,r=Da(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ep,r[o])}function IM(n,t,e){const i=this.cache,s=t.length,r=Da(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Tp,r[o])}function UM(n,t,e){const i=this.cache,s=t.length,r=Da(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||bp,r[o])}function FM(n){switch(n){case 5126:return gM;case 35664:return _M;case 35665:return vM;case 35666:return xM;case 35674:return SM;case 35675:return MM;case 35676:return yM;case 5124:case 35670:return bM;case 35667:case 35671:return EM;case 35668:case 35672:return TM;case 35669:case 35673:return wM;case 5125:return AM;case 36294:return CM;case 36295:return RM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return DM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return IM;case 36289:case 36303:case 36311:case 36292:return UM}}class NM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=mM(e.type)}}class OM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=FM(e.type)}}class BM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function uf(n,t){n.seq.push(t),n.map[t.id]=t}function zM(n,t,e){const i=n.name,s=i.length;for(Tl.lastIndex=0;;){const r=Tl.exec(i),o=Tl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){uf(e,c===void 0?new NM(a,n,t):new OM(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new BM(a),uf(e,h)),e=h}}}class qo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);zM(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function hf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const VM=37297;let HM=0;function kM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const ff=new Qt;function GM(n){re._getMatrix(ff,re.workingColorSpace,n);const t=`mat3( ${ff.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(n)){case la:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function df(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+kM(n.getShaderSource(t),a)}else return r}function WM(n,t){const e=GM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const XM={[qd]:"Linear",[jd]:"Reinhard",[$d]:"Cineon",[ru]:"ACESFilmic",[Kd]:"AgX",[Jd]:"Neutral",[Zd]:"Custom"};function YM(n,t){const e=XM[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fo=new k;function qM(){re.getLuminanceCoefficients(Fo);const n=Fo.x.toFixed(4),t=Fo.y.toFixed(4),e=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function $M(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ZM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Er(n){return n!==""}function pf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const KM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(n){return n.replace(KM,QM)}const JM=new Map;function QM(n,t){let e=te[t];if(e===void 0){const i=JM.get(t);if(i!==void 0)e=te[i],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Nc(e)}const ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gf(n){return n.replace(ty,ey)}function ey(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _f(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const ny={[Ho]:"SHADOWMAP_TYPE_PCF",[br]:"SHADOWMAP_TYPE_VSM"};function iy(n){return ny[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sy={[xs]:"ENVMAP_TYPE_CUBE",[er]:"ENVMAP_TYPE_CUBE",[Aa]:"ENVMAP_TYPE_CUBE_UV"};function ry(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":sy[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const oy={[er]:"ENVMAP_MODE_REFRACTION"};function ay(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":oy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ly={[su]:"ENVMAP_BLENDING_MULTIPLY",[Xg]:"ENVMAP_BLENDING_MIX",[Yg]:"ENVMAP_BLENDING_ADD"};function cy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ly[n.combine]||"ENVMAP_BLENDING_NONE"}function uy(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function hy(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=iy(e),c=ry(e),u=ay(e),h=cy(e),f=uy(e),p=jM(e),g=$M(r),v=s.createProgram();let m,d,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Er).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Er).join(`
`),d.length>0&&(d+=`
`)):(m=[_f(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),d=[_f(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?te.tonemapping_pars_fragment:"",e.toneMapping!==ei?YM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,WM("linearToOutputTexel",e.outputColorSpace),qM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Er).join(`
`)),o=Nc(o),o=pf(o,e),o=mf(o,e),a=Nc(a),a=pf(a,e),a=mf(a,e),o=gf(o),a=gf(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=x+m+o,y=x+d+a,A=hf(s,s.VERTEX_SHADER,E),C=hf(s,s.FRAGMENT_SHADER,y);s.attachShader(v,A),s.attachShader(v,C),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(D){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(A)||"",q=s.getShaderInfoLog(C)||"",G=F.trim(),X=z.trim(),B=q.trim();let rt=!0,ht=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,A,C);else{const yt=df(s,A,"vertex"),bt=df(s,C,"fragment");se("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+yt+`
`+bt)}else G!==""?Xt("WebGLProgram: Program Info Log:",G):(X===""||B==="")&&(ht=!1);ht&&(D.diagnostics={runnable:rt,programLog:G,vertexShader:{log:X,prefix:m},fragmentShader:{log:B,prefix:d}})}s.deleteShader(A),s.deleteShader(C),S=new qo(s,v),T=ZM(s,v)}let S;this.getUniforms=function(){return S===void 0&&L(this),S};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let Y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=s.getProgramParameter(v,VM)),Y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=HM++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=C,this}let fy=0;class dy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new py(t),e.set(t,i)),i}}class py{constructor(t){this.id=fy++,this.code=t,this.usedTimes=0}}function my(n,t,e,i,s,r){const o=new gu,a=new dy,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function v(S,T,Y,D,F){const z=D.fog,q=F.geometry,G=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,X=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,B=t.get(S.envMap||G,X),rt=B&&B.mapping===Aa?B.image.height:null,ht=p[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&Xt("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const yt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,bt=yt!==void 0?yt.length:0;let St=0;q.morphAttributes.position!==void 0&&(St=1),q.morphAttributes.normal!==void 0&&(St=2),q.morphAttributes.color!==void 0&&(St=3);let Yt,ce,ae,lt;if(ht){const de=Zn[ht];Yt=de.vertexShader,ce=de.fragmentShader}else Yt=S.vertexShader,ce=S.fragmentShader,a.update(S),ae=a.getVertexShaderID(S),lt=a.getFragmentShaderID(S);const mt=n.getRenderTarget(),_t=n.state.buffers.depth.getReversed(),Wt=F.isInstancedMesh===!0,Ot=F.isBatchedMesh===!0,kt=!!S.map,R=!!S.matcap,U=!!B,W=!!S.aoMap,ot=!!S.lightMap,Q=!!S.bumpMap,st=!!S.normalMap,w=!!S.displacementMap,ut=!!S.emissiveMap,nt=!!S.metalnessMap,J=!!S.roughnessMap,it=S.anisotropy>0,M=S.clearcoat>0,_=S.dispersion>0,P=S.iridescence>0,j=S.sheen>0,et=S.transmission>0,Z=it&&!!S.anisotropyMap,xt=M&&!!S.clearcoatMap,ft=M&&!!S.clearcoatNormalMap,Dt=M&&!!S.clearcoatRoughnessMap,Ft=P&&!!S.iridescenceMap,dt=P&&!!S.iridescenceThicknessMap,gt=j&&!!S.sheenColorMap,Tt=j&&!!S.sheenRoughnessMap,Ct=!!S.specularMap,Rt=!!S.specularColorMap,Kt=!!S.specularIntensityMap,O=et&&!!S.transmissionMap,Mt=et&&!!S.thicknessMap,vt=!!S.gradientMap,Lt=!!S.alphaMap,pt=S.alphaTest>0,at=!!S.alphaHash,It=!!S.extensions;let jt=ei;S.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(jt=n.toneMapping);const ye={shaderID:ht,shaderType:S.type,shaderName:S.name,vertexShader:Yt,fragmentShader:ce,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:lt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&F._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&F.instanceColor!==null,instancingMorph:Wt&&F.morphTexture!==null,outputColorSpace:mt===null?n.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Ss,alphaToCoverage:!!S.alphaToCoverage,map:kt,matcap:R,envMap:U,envMapMode:U&&B.mapping,envMapCubeUVHeight:rt,aoMap:W,lightMap:ot,bumpMap:Q,normalMap:st,displacementMap:w,emissiveMap:ut,normalMapObjectSpace:st&&S.normalMapType===$g,normalMapTangentSpace:st&&S.normalMapType===op,metalnessMap:nt,roughnessMap:J,anisotropy:it,anisotropyMap:Z,clearcoat:M,clearcoatMap:xt,clearcoatNormalMap:ft,clearcoatRoughnessMap:Dt,dispersion:_,iridescence:P,iridescenceMap:Ft,iridescenceThicknessMap:dt,sheen:j,sheenColorMap:gt,sheenRoughnessMap:Tt,specularMap:Ct,specularColorMap:Rt,specularIntensityMap:Kt,transmission:et,transmissionMap:O,thicknessMap:Mt,gradientMap:vt,opaque:S.transparent===!1&&S.blending===vs&&S.alphaToCoverage===!1,alphaMap:Lt,alphaTest:pt,alphaHash:at,combine:S.combine,mapUv:kt&&g(S.map.channel),aoMapUv:W&&g(S.aoMap.channel),lightMapUv:ot&&g(S.lightMap.channel),bumpMapUv:Q&&g(S.bumpMap.channel),normalMapUv:st&&g(S.normalMap.channel),displacementMapUv:w&&g(S.displacementMap.channel),emissiveMapUv:ut&&g(S.emissiveMap.channel),metalnessMapUv:nt&&g(S.metalnessMap.channel),roughnessMapUv:J&&g(S.roughnessMap.channel),anisotropyMapUv:Z&&g(S.anisotropyMap.channel),clearcoatMapUv:xt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ft&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&g(S.sheenRoughnessMap.channel),specularMapUv:Ct&&g(S.specularMap.channel),specularColorMapUv:Rt&&g(S.specularColorMap.channel),specularIntensityMapUv:Kt&&g(S.specularIntensityMap.channel),transmissionMapUv:O&&g(S.transmissionMap.channel),thicknessMapUv:Mt&&g(S.thicknessMap.channel),alphaMapUv:Lt&&g(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(st||it),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(kt||Lt),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||q.attributes.normal===void 0&&st===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_t,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:St,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:jt,decodeVideoTexture:kt&&S.map.isVideoTexture===!0&&re.getTransfer(S.map.colorSpace)===pe,decodeVideoTextureEmissive:ut&&S.emissiveMap.isVideoTexture===!0&&re.getTransfer(S.emissiveMap.colorSpace)===pe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Nn,flipSided:S.side===fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:It&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&S.extensions.multiDraw===!0||Ot)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function m(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const Y in S.defines)T.push(Y),T.push(S.defines[Y]);return S.isRawShaderMaterial===!1&&(d(T,S),x(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function d(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function x(S,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const T=p[S.type];let Y;if(T){const D=Zn[T];Y=_p.clone(D.uniforms)}else Y=S.uniforms;return Y}function y(S,T){let Y=u.get(T);return Y!==void 0?++Y.usedTimes:(Y=new hy(n,T,S,s),c.push(Y),u.set(T,Y)),Y}function A(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function C(S){a.remove(S)}function L(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:E,acquireProgram:y,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:L}}function gy(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function _y(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function vf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function xf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,g,v,m,d){let x=n[t];return x===void 0?(x={id:f.id,object:f,geometry:p,material:g,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:d},n[t]=x):(x.id=f.id,x.object=f,x.geometry=p,x.material=g,x.materialVariant=o(f),x.groupOrder=v,x.renderOrder=f.renderOrder,x.z=m,x.group=d),t++,x}function l(f,p,g,v,m,d){const x=a(f,p,g,v,m,d);g.transmission>0?i.push(x):g.transparent===!0?s.push(x):e.push(x)}function c(f,p,g,v,m,d){const x=a(f,p,g,v,m,d);g.transmission>0?i.unshift(x):g.transparent===!0?s.unshift(x):e.unshift(x)}function u(f,p){e.length>1&&e.sort(f||_y),i.length>1&&i.sort(p||vf),s.length>1&&s.sort(p||vf)}function h(){for(let f=t,p=n.length;f<p;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function vy(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new xf,n.set(i,[o])):s>=r.length?(o=new xf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function xy(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new qt};break;case"SpotLight":e={position:new k,direction:new k,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function Sy(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let My=0;function yy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function by(n){const t=new xy,e=Sy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new me,o=new me;function a(c){let u=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,x=0,E=0,y=0,A=0,C=0,L=0;c.sort(yy);for(let T=0,Y=c.length;T<Y;T++){const D=c[T],F=D.color,z=D.intensity,q=D.distance;let G=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===nr?G=D.shadow.map.texture:G=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=F.r*z,h+=F.g*z,f+=F.b*z;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],z);L++}else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const B=D.shadow,rt=e.get(D);rt.shadowIntensity=B.intensity,rt.shadowBias=B.bias,rt.shadowNormalBias=B.normalBias,rt.shadowRadius=B.radius,rt.shadowMapSize=B.mapSize,i.directionalShadow[p]=rt,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=D.shadow.matrix,x++}i.directional[p]=X,p++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(F).multiplyScalar(z),X.distance=q,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[v]=X;const B=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,B.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[v]=B.matrix,D.castShadow){const rt=e.get(D);rt.shadowIntensity=B.intensity,rt.shadowBias=B.bias,rt.shadowNormalBias=B.normalBias,rt.shadowRadius=B.radius,rt.shadowMapSize=B.mapSize,i.spotShadow[v]=rt,i.spotShadowMap[v]=G,y++}v++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(F).multiplyScalar(z),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=X,m++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const B=D.shadow,rt=e.get(D);rt.shadowIntensity=B.intensity,rt.shadowBias=B.bias,rt.shadowNormalBias=B.normalBias,rt.shadowRadius=B.radius,rt.shadowMapSize=B.mapSize,rt.shadowCameraNear=B.camera.near,rt.shadowCameraFar=B.camera.far,i.pointShadow[g]=rt,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=D.shadow.matrix,E++}i.point[g]=X,g++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(z),X.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[d]=X,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==p||S.pointLength!==g||S.spotLength!==v||S.rectAreaLength!==m||S.hemiLength!==d||S.numDirectionalShadows!==x||S.numPointShadows!==E||S.numSpotShadows!==y||S.numSpotMaps!==A||S.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=L,S.directionalLength=p,S.pointLength=g,S.spotLength=v,S.rectAreaLength=m,S.hemiLength=d,S.numDirectionalShadows=x,S.numPointShadows=E,S.numSpotShadows=y,S.numSpotMaps=A,S.numLightProbes=L,i.version=My++)}function l(c,u){let h=0,f=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){const E=c[d];if(E.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(E.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Sf(n){const t=new by(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ey(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Sf(n),t.set(s,[a])):r>=o.length?(a=new Sf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const Ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ay=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Cy=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Mf=new me,Sr=new k,wl=new k;function Ry(n,t,e){let i=new xu;const s=new Gt,r=new Gt,o=new Ee,a=new N_,l=new O_,c={},u=e.maxTextureSize,h={[qi]:fn,[fn]:qi,[Nn]:Nn},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:Ty,fragmentShader:wy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ie;g.setAttribute("position",new he(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new dn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ho;let d=this.type;this.render=function(C,L,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;this.type===wg&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ho);const T=n.getRenderTarget(),Y=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),F=n.state;F.setBlending(yi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=d!==this.type;z&&L.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(G=>G.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,G=C.length;q<G;q++){const X=C[q],B=X.shadow;if(B===void 0){Xt("WebGLShadowMap:",X,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const rt=B.getFrameExtents();s.multiply(rt),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/rt.x),s.x=r.x*rt.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/rt.y),s.y=r.y*rt.y,B.mapSize.y=r.y));const ht=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=ht,B.map===null||z===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===br){if(X.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Cn(s.x,s.y,{format:nr,type:Ai,minFilter:ze,magFilter:ze,generateMipmaps:!1}),B.map.texture.name=X.name+".shadowMap",B.map.depthTexture=new jr(s.x,s.y,sn),B.map.depthTexture.name=X.name+".shadowMapDepth",B.map.depthTexture.format=Ci,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Te,B.map.depthTexture.magFilter=Te}else X.isPointLight?(B.map=new Mp(s.x),B.map.depthTexture=new P_(s.x,ni)):(B.map=new Cn(s.x,s.y),B.map.depthTexture=new jr(s.x,s.y,ni)),B.map.depthTexture.name=X.name+".shadowMap",B.map.depthTexture.format=Ci,this.type===Ho?(B.map.depthTexture.compareFunction=ht?pu:du,B.map.depthTexture.minFilter=ze,B.map.depthTexture.magFilter=ze):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Te,B.map.depthTexture.magFilter=Te);B.camera.updateProjectionMatrix()}const yt=B.map.isWebGLCubeRenderTarget?6:1;for(let bt=0;bt<yt;bt++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,bt),n.clear();else{bt===0&&(n.setRenderTarget(B.map),n.clear());const St=B.getViewport(bt);o.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),F.viewport(o)}if(X.isPointLight){const St=B.camera,Yt=B.matrix,ce=X.distance||St.far;ce!==St.far&&(St.far=ce,St.updateProjectionMatrix()),Sr.setFromMatrixPosition(X.matrixWorld),St.position.copy(Sr),wl.copy(St.position),wl.add(Ay[bt]),St.up.copy(Cy[bt]),St.lookAt(wl),St.updateMatrixWorld(),Yt.makeTranslation(-Sr.x,-Sr.y,-Sr.z),Mf.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Mf,St.coordinateSystem,St.reversedDepth)}else B.updateMatrices(X);i=B.getFrustum(),y(L,S,B.camera,X,this.type)}B.isPointLightShadow!==!0&&this.type===br&&x(B,S),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(T,Y,D)};function x(C,L){const S=t.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Cn(s.x,s.y,{format:nr,type:Ai})),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(L,null,S,f,v,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(L,null,S,p,v,null)}function E(C,L,S,T){let Y=null;const D=S.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)Y=D;else if(Y=S.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const F=Y.uuid,z=L.uuid;let q=c[F];q===void 0&&(q={},c[F]=q);let G=q[z];G===void 0&&(G=Y.clone(),q[z]=G,L.addEventListener("dispose",A)),Y=G}if(Y.visible=L.visible,Y.wireframe=L.wireframe,T===br?Y.side=L.shadowSide!==null?L.shadowSide:L.side:Y.side=L.shadowSide!==null?L.shadowSide:h[L.side],Y.alphaMap=L.alphaMap,Y.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,Y.map=L.map,Y.clipShadows=L.clipShadows,Y.clippingPlanes=L.clippingPlanes,Y.clipIntersection=L.clipIntersection,Y.displacementMap=L.displacementMap,Y.displacementScale=L.displacementScale,Y.displacementBias=L.displacementBias,Y.wireframeLinewidth=L.wireframeLinewidth,Y.linewidth=L.linewidth,S.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const F=n.properties.get(Y);F.light=S}return Y}function y(C,L,S,T,Y){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&Y===br)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,C.matrixWorld);const z=t.update(C),q=C.material;if(Array.isArray(q)){const G=z.groups;for(let X=0,B=G.length;X<B;X++){const rt=G[X],ht=q[rt.materialIndex];if(ht&&ht.visible){const yt=E(C,ht,T,Y);C.onBeforeShadow(n,C,L,S,z,yt,rt),n.renderBufferDirect(S,null,z,yt,C,rt),C.onAfterShadow(n,C,L,S,z,yt,rt)}}}else if(q.visible){const G=E(C,q,T,Y);C.onBeforeShadow(n,C,L,S,z,G,null),n.renderBufferDirect(S,null,z,G,C,null),C.onAfterShadow(n,C,L,S,z,G,null)}}const F=C.children;for(let z=0,q=F.length;z<q;z++)y(F[z],L,S,T,Y)}function A(C){C.target.removeEventListener("dispose",A);for(const S in c){const T=c[S],Y=C.target.uuid;Y in T&&(T[Y].dispose(),delete T[Y])}}}function Py(n,t){function e(){let O=!1;const Mt=new Ee;let vt=null;const Lt=new Ee(0,0,0,0);return{setMask:function(pt){vt!==pt&&!O&&(n.colorMask(pt,pt,pt,pt),vt=pt)},setLocked:function(pt){O=pt},setClear:function(pt,at,It,jt,ye){ye===!0&&(pt*=jt,at*=jt,It*=jt),Mt.set(pt,at,It,jt),Lt.equals(Mt)===!1&&(n.clearColor(pt,at,It,jt),Lt.copy(Mt))},reset:function(){O=!1,vt=null,Lt.set(-1,0,0,0)}}}function i(){let O=!1,Mt=!1,vt=null,Lt=null,pt=null;return{setReversed:function(at){if(Mt!==at){const It=t.get("EXT_clip_control");at?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),Mt=at;const jt=pt;pt=null,this.setClear(jt)}},getReversed:function(){return Mt},setTest:function(at){at?mt(n.DEPTH_TEST):_t(n.DEPTH_TEST)},setMask:function(at){vt!==at&&!O&&(n.depthMask(at),vt=at)},setFunc:function(at){if(Mt&&(at=r_[at]),Lt!==at){switch(at){case Yl:n.depthFunc(n.NEVER);break;case ql:n.depthFunc(n.ALWAYS);break;case jl:n.depthFunc(n.LESS);break;case tr:n.depthFunc(n.LEQUAL);break;case $l:n.depthFunc(n.EQUAL);break;case Zl:n.depthFunc(n.GEQUAL);break;case Kl:n.depthFunc(n.GREATER);break;case Jl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Lt=at}},setLocked:function(at){O=at},setClear:function(at){pt!==at&&(pt=at,Mt&&(at=1-at),n.clearDepth(at))},reset:function(){O=!1,vt=null,Lt=null,pt=null,Mt=!1}}}function s(){let O=!1,Mt=null,vt=null,Lt=null,pt=null,at=null,It=null,jt=null,ye=null;return{setTest:function(de){O||(de?mt(n.STENCIL_TEST):_t(n.STENCIL_TEST))},setMask:function(de){Mt!==de&&!O&&(n.stencilMask(de),Mt=de)},setFunc:function(de,si,ri){(vt!==de||Lt!==si||pt!==ri)&&(n.stencilFunc(de,si,ri),vt=de,Lt=si,pt=ri)},setOp:function(de,si,ri){(at!==de||It!==si||jt!==ri)&&(n.stencilOp(de,si,ri),at=de,It=si,jt=ri)},setLocked:function(de){O=de},setClear:function(de){ye!==de&&(n.clearStencil(de),ye=de)},reset:function(){O=!1,Mt=null,vt=null,Lt=null,pt=null,at=null,It=null,jt=null,ye=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,x=null,E=null,y=null,A=null,C=null,L=new qt(0,0,0),S=0,T=!1,Y=null,D=null,F=null,z=null,q=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,B=0;const rt=n.getParameter(n.VERSION);rt.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(rt)[1]),X=B>=1):rt.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),X=B>=2);let ht=null,yt={};const bt=n.getParameter(n.SCISSOR_BOX),St=n.getParameter(n.VIEWPORT),Yt=new Ee().fromArray(bt),ce=new Ee().fromArray(St);function ae(O,Mt,vt,Lt){const pt=new Uint8Array(4),at=n.createTexture();n.bindTexture(O,at),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<vt;It++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,Lt,0,n.RGBA,n.UNSIGNED_BYTE,pt):n.texImage2D(Mt+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pt);return at}const lt={};lt[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),lt[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),lt[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(n.DEPTH_TEST),o.setFunc(tr),Q(!1),st(gh),mt(n.CULL_FACE),W(yi);function mt(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function _t(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function Wt(O,Mt){return h[O]!==Mt?(n.bindFramebuffer(O,Mt),h[O]=Mt,O===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Mt),O===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Ot(O,Mt){let vt=p,Lt=!1;if(O){vt=f.get(Mt),vt===void 0&&(vt=[],f.set(Mt,vt));const pt=O.textures;if(vt.length!==pt.length||vt[0]!==n.COLOR_ATTACHMENT0){for(let at=0,It=pt.length;at<It;at++)vt[at]=n.COLOR_ATTACHMENT0+at;vt.length=pt.length,Lt=!0}}else vt[0]!==n.BACK&&(vt[0]=n.BACK,Lt=!0);Lt&&n.drawBuffers(vt)}function kt(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const R={[fs]:n.FUNC_ADD,[Cg]:n.FUNC_SUBTRACT,[Rg]:n.FUNC_REVERSE_SUBTRACT};R[Pg]=n.MIN,R[Dg]=n.MAX;const U={[Lg]:n.ZERO,[Ig]:n.ONE,[Ug]:n.SRC_COLOR,[Wl]:n.SRC_ALPHA,[Vg]:n.SRC_ALPHA_SATURATE,[Bg]:n.DST_COLOR,[Ng]:n.DST_ALPHA,[Fg]:n.ONE_MINUS_SRC_COLOR,[Xl]:n.ONE_MINUS_SRC_ALPHA,[zg]:n.ONE_MINUS_DST_COLOR,[Og]:n.ONE_MINUS_DST_ALPHA,[Hg]:n.CONSTANT_COLOR,[kg]:n.ONE_MINUS_CONSTANT_COLOR,[Gg]:n.CONSTANT_ALPHA,[Wg]:n.ONE_MINUS_CONSTANT_ALPHA};function W(O,Mt,vt,Lt,pt,at,It,jt,ye,de){if(O===yi){v===!0&&(_t(n.BLEND),v=!1);return}if(v===!1&&(mt(n.BLEND),v=!0),O!==Ag){if(O!==m||de!==T){if((d!==fs||y!==fs)&&(n.blendEquation(n.FUNC_ADD),d=fs,y=fs),de)switch(O){case vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oa:n.blendFunc(n.ONE,n.ONE);break;case _h:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:se("WebGLState: Invalid blending: ",O);break}else switch(O){case vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case oa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case _h:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vh:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",O);break}x=null,E=null,A=null,C=null,L.set(0,0,0),S=0,m=O,T=de}return}pt=pt||Mt,at=at||vt,It=It||Lt,(Mt!==d||pt!==y)&&(n.blendEquationSeparate(R[Mt],R[pt]),d=Mt,y=pt),(vt!==x||Lt!==E||at!==A||It!==C)&&(n.blendFuncSeparate(U[vt],U[Lt],U[at],U[It]),x=vt,E=Lt,A=at,C=It),(jt.equals(L)===!1||ye!==S)&&(n.blendColor(jt.r,jt.g,jt.b,ye),L.copy(jt),S=ye),m=O,T=!1}function ot(O,Mt){O.side===Nn?_t(n.CULL_FACE):mt(n.CULL_FACE);let vt=O.side===fn;Mt&&(vt=!vt),Q(vt),O.blending===vs&&O.transparent===!1?W(yi):W(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Lt=O.stencilWrite;a.setTest(Lt),Lt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ut(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?mt(n.SAMPLE_ALPHA_TO_COVERAGE):_t(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(O){Y!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),Y=O)}function st(O){O!==Eg?(mt(n.CULL_FACE),O!==D&&(O===gh?n.cullFace(n.BACK):O===Tg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_t(n.CULL_FACE),D=O}function w(O){O!==F&&(X&&n.lineWidth(O),F=O)}function ut(O,Mt,vt){O?(mt(n.POLYGON_OFFSET_FILL),(z!==Mt||q!==vt)&&(z=Mt,q=vt,o.getReversed()&&(Mt=-Mt),n.polygonOffset(Mt,vt))):_t(n.POLYGON_OFFSET_FILL)}function nt(O){O?mt(n.SCISSOR_TEST):_t(n.SCISSOR_TEST)}function J(O){O===void 0&&(O=n.TEXTURE0+G-1),ht!==O&&(n.activeTexture(O),ht=O)}function it(O,Mt,vt){vt===void 0&&(ht===null?vt=n.TEXTURE0+G-1:vt=ht);let Lt=yt[vt];Lt===void 0&&(Lt={type:void 0,texture:void 0},yt[vt]=Lt),(Lt.type!==O||Lt.texture!==Mt)&&(ht!==vt&&(n.activeTexture(vt),ht=vt),n.bindTexture(O,Mt||lt[O]),Lt.type=O,Lt.texture=Mt)}function M(){const O=yt[ht];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(O){se("WebGLState:",O)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(O){se("WebGLState:",O)}}function j(){try{n.texSubImage2D(...arguments)}catch(O){se("WebGLState:",O)}}function et(){try{n.texSubImage3D(...arguments)}catch(O){se("WebGLState:",O)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(O){se("WebGLState:",O)}}function xt(){try{n.compressedTexSubImage3D(...arguments)}catch(O){se("WebGLState:",O)}}function ft(){try{n.texStorage2D(...arguments)}catch(O){se("WebGLState:",O)}}function Dt(){try{n.texStorage3D(...arguments)}catch(O){se("WebGLState:",O)}}function Ft(){try{n.texImage2D(...arguments)}catch(O){se("WebGLState:",O)}}function dt(){try{n.texImage3D(...arguments)}catch(O){se("WebGLState:",O)}}function gt(O){Yt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Yt.copy(O))}function Tt(O){ce.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ce.copy(O))}function Ct(O,Mt){let vt=c.get(Mt);vt===void 0&&(vt=new WeakMap,c.set(Mt,vt));let Lt=vt.get(O);Lt===void 0&&(Lt=n.getUniformBlockIndex(Mt,O.name),vt.set(O,Lt))}function Rt(O,Mt){const Lt=c.get(Mt).get(O);l.get(Mt)!==Lt&&(n.uniformBlockBinding(Mt,Lt,O.__bindingPointIndex),l.set(Mt,Lt))}function Kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ht=null,yt={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,x=null,E=null,y=null,A=null,C=null,L=new qt(0,0,0),S=0,T=!1,Y=null,D=null,F=null,z=null,q=null,Yt.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:mt,disable:_t,bindFramebuffer:Wt,drawBuffers:Ot,useProgram:kt,setBlending:W,setMaterial:ot,setFlipSided:Q,setCullFace:st,setLineWidth:w,setPolygonOffset:ut,setScissorTest:nt,activeTexture:J,bindTexture:it,unbindTexture:M,compressedTexImage2D:_,compressedTexImage3D:P,texImage2D:Ft,texImage3D:dt,updateUBOMapping:Ct,uniformBlockBinding:Rt,texStorage2D:ft,texStorage3D:Dt,texSubImage2D:j,texSubImage3D:et,compressedTexSubImage2D:Z,compressedTexSubImage3D:xt,scissor:gt,viewport:Tt,reset:Kt}}function Dy(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return p?new OffscreenCanvas(M,_):ca("canvas")}function v(M,_,P){let j=1;const et=it(M);if((et.width>P||et.height>P)&&(j=P/Math.max(et.width,et.height)),j<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const Z=Math.floor(j*et.width),xt=Math.floor(j*et.height);h===void 0&&(h=g(Z,xt));const ft=_?g(Z,xt):h;return ft.width=Z,ft.height=xt,ft.getContext("2d").drawImage(M,0,0,Z,xt),Xt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+xt+")."),ft}else return"data"in M&&Xt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),M;return M}function m(M){return M.generateMipmaps}function d(M){n.generateMipmap(M)}function x(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(M,_,P,j,et=!1){if(M!==null){if(n[M]!==void 0)return n[M];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Z=_;if(_===n.RED&&(P===n.FLOAT&&(Z=n.R32F),P===n.HALF_FLOAT&&(Z=n.R16F),P===n.UNSIGNED_BYTE&&(Z=n.R8)),_===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&(Z=n.R8UI),P===n.UNSIGNED_SHORT&&(Z=n.R16UI),P===n.UNSIGNED_INT&&(Z=n.R32UI),P===n.BYTE&&(Z=n.R8I),P===n.SHORT&&(Z=n.R16I),P===n.INT&&(Z=n.R32I)),_===n.RG&&(P===n.FLOAT&&(Z=n.RG32F),P===n.HALF_FLOAT&&(Z=n.RG16F),P===n.UNSIGNED_BYTE&&(Z=n.RG8)),_===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&(Z=n.RG8UI),P===n.UNSIGNED_SHORT&&(Z=n.RG16UI),P===n.UNSIGNED_INT&&(Z=n.RG32UI),P===n.BYTE&&(Z=n.RG8I),P===n.SHORT&&(Z=n.RG16I),P===n.INT&&(Z=n.RG32I)),_===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),P===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),P===n.UNSIGNED_INT&&(Z=n.RGB32UI),P===n.BYTE&&(Z=n.RGB8I),P===n.SHORT&&(Z=n.RGB16I),P===n.INT&&(Z=n.RGB32I)),_===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),P===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),P===n.UNSIGNED_INT&&(Z=n.RGBA32UI),P===n.BYTE&&(Z=n.RGBA8I),P===n.SHORT&&(Z=n.RGBA16I),P===n.INT&&(Z=n.RGBA32I)),_===n.RGB&&(P===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),P===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),_===n.RGBA){const xt=et?la:re.getTransfer(j);P===n.FLOAT&&(Z=n.RGBA32F),P===n.HALF_FLOAT&&(Z=n.RGBA16F),P===n.UNSIGNED_BYTE&&(Z=xt===pe?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(M,_){let P;return M?_===null||_===ni||_===Yr?P=n.DEPTH24_STENCIL8:_===sn?P=n.DEPTH32F_STENCIL8:_===Xr&&(P=n.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ni||_===Yr?P=n.DEPTH_COMPONENT24:_===sn?P=n.DEPTH_COMPONENT32F:_===Xr&&(P=n.DEPTH_COMPONENT16),P}function A(M,_){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Te&&M.minFilter!==ze?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function C(M){const _=M.target;_.removeEventListener("dispose",C),S(_),_.isVideoTexture&&u.delete(_)}function L(M){const _=M.target;_.removeEventListener("dispose",L),Y(_)}function S(M){const _=i.get(M);if(_.__webglInit===void 0)return;const P=M.source,j=f.get(P);if(j){const et=j[_.__cacheKey];et.usedTimes--,et.usedTimes===0&&T(M),Object.keys(j).length===0&&f.delete(P)}i.remove(M)}function T(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const P=M.source,j=f.get(P);delete j[_.__cacheKey],o.memory.textures--}function Y(M){const _=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let et=0;et<_.__webglFramebuffer[j].length;et++)n.deleteFramebuffer(_.__webglFramebuffer[j][et]);else n.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)n.deleteFramebuffer(_.__webglFramebuffer[j]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const P=M.textures;for(let j=0,et=P.length;j<et;j++){const Z=i.get(P[j]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(P[j])}i.remove(M)}let D=0;function F(){D=0}function z(){const M=D;return M>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),D+=1,M}function q(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function G(M,_){const P=i.get(M);if(M.isVideoTexture&&nt(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&P.__version!==M.version){const j=M.image;if(j===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(P,M,_);return}}else M.isExternalTexture&&(P.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+_)}function X(M,_){const P=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&P.__version!==M.version){lt(P,M,_);return}else M.isExternalTexture&&(P.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+_)}function B(M,_){const P=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&P.__version!==M.version){lt(P,M,_);return}e.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+_)}function rt(M,_){const P=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&P.__version!==M.version){mt(P,M,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+_)}const ht={[aa]:n.REPEAT,[Si]:n.CLAMP_TO_EDGE,[Ql]:n.MIRRORED_REPEAT},yt={[Te]:n.NEAREST,[qg]:n.NEAREST_MIPMAP_NEAREST,[co]:n.NEAREST_MIPMAP_LINEAR,[ze]:n.LINEAR,[$a]:n.LINEAR_MIPMAP_NEAREST,[ps]:n.LINEAR_MIPMAP_LINEAR},bt={[Zg]:n.NEVER,[e_]:n.ALWAYS,[Kg]:n.LESS,[du]:n.LEQUAL,[Jg]:n.EQUAL,[pu]:n.GEQUAL,[Qg]:n.GREATER,[t_]:n.NOTEQUAL};function St(M,_){if(_.type===sn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===ze||_.magFilter===$a||_.magFilter===co||_.magFilter===ps||_.minFilter===ze||_.minFilter===$a||_.minFilter===co||_.minFilter===ps)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,ht[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ht[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ht[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,yt[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,yt[_.minFilter]),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,bt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Te||_.minFilter!==co&&_.minFilter!==ps||_.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const P=t.get("EXT_texture_filter_anisotropic");n.texParameterf(M,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Yt(M,_){let P=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",C));const j=_.source;let et=f.get(j);et===void 0&&(et={},f.set(j,et));const Z=q(_);if(Z!==M.__cacheKey){et[Z]===void 0&&(et[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),et[Z].usedTimes++;const xt=et[M.__cacheKey];xt!==void 0&&(et[M.__cacheKey].usedTimes--,xt.usedTimes===0&&T(_)),M.__cacheKey=Z,M.__webglTexture=et[Z].texture}return P}function ce(M,_,P){return Math.floor(Math.floor(M/P)/_)}function ae(M,_,P,j){const Z=M.updateRanges;if(Z.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,P,j,_.data);else{Z.sort((dt,gt)=>dt.start-gt.start);let xt=0;for(let dt=1;dt<Z.length;dt++){const gt=Z[xt],Tt=Z[dt],Ct=gt.start+gt.count,Rt=ce(Tt.start,_.width,4),Kt=ce(gt.start,_.width,4);Tt.start<=Ct+1&&Rt===Kt&&ce(Tt.start+Tt.count-1,_.width,4)===Rt?gt.count=Math.max(gt.count,Tt.start+Tt.count-gt.start):(++xt,Z[xt]=Tt)}Z.length=xt+1;const ft=n.getParameter(n.UNPACK_ROW_LENGTH),Dt=n.getParameter(n.UNPACK_SKIP_PIXELS),Ft=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let dt=0,gt=Z.length;dt<gt;dt++){const Tt=Z[dt],Ct=Math.floor(Tt.start/4),Rt=Math.ceil(Tt.count/4),Kt=Ct%_.width,O=Math.floor(Ct/_.width),Mt=Rt,vt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Kt),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),e.texSubImage2D(n.TEXTURE_2D,0,Kt,O,Mt,vt,P,j,_.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ft),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Dt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ft)}}function lt(M,_,P){let j=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=n.TEXTURE_3D);const et=Yt(M,_),Z=_.source;e.bindTexture(j,M.__webglTexture,n.TEXTURE0+P);const xt=i.get(Z);if(Z.version!==xt.__version||et===!0){e.activeTexture(n.TEXTURE0+P);const ft=re.getPrimaries(re.workingColorSpace),Dt=_.colorSpace===ki?null:re.getPrimaries(_.colorSpace),Ft=_.colorSpace===ki||ft===Dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let dt=v(_.image,!1,s.maxTextureSize);dt=J(_,dt);const gt=r.convert(_.format,_.colorSpace),Tt=r.convert(_.type);let Ct=E(_.internalFormat,gt,Tt,_.colorSpace,_.isVideoTexture);St(j,_);let Rt;const Kt=_.mipmaps,O=_.isVideoTexture!==!0,Mt=xt.__version===void 0||et===!0,vt=Z.dataReady,Lt=A(_,dt);if(_.isDepthTexture)Ct=y(_.format===ms,_.type),Mt&&(O?e.texStorage2D(n.TEXTURE_2D,1,Ct,dt.width,dt.height):e.texImage2D(n.TEXTURE_2D,0,Ct,dt.width,dt.height,0,gt,Tt,null));else if(_.isDataTexture)if(Kt.length>0){O&&Mt&&e.texStorage2D(n.TEXTURE_2D,Lt,Ct,Kt[0].width,Kt[0].height);for(let pt=0,at=Kt.length;pt<at;pt++)Rt=Kt[pt],O?vt&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,Rt.width,Rt.height,gt,Tt,Rt.data):e.texImage2D(n.TEXTURE_2D,pt,Ct,Rt.width,Rt.height,0,gt,Tt,Rt.data);_.generateMipmaps=!1}else O?(Mt&&e.texStorage2D(n.TEXTURE_2D,Lt,Ct,dt.width,dt.height),vt&&ae(_,dt,gt,Tt)):e.texImage2D(n.TEXTURE_2D,0,Ct,dt.width,dt.height,0,gt,Tt,dt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){O&&Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Lt,Ct,Kt[0].width,Kt[0].height,dt.depth);for(let pt=0,at=Kt.length;pt<at;pt++)if(Rt=Kt[pt],_.format!==rn)if(gt!==null)if(O){if(vt)if(_.layerUpdates.size>0){const It=Kh(Rt.width,Rt.height,_.format,_.type);for(const jt of _.layerUpdates){const ye=Rt.data.subarray(jt*It/Rt.data.BYTES_PER_ELEMENT,(jt+1)*It/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,jt,Rt.width,Rt.height,1,gt,ye)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,0,Rt.width,Rt.height,dt.depth,gt,Rt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pt,Ct,Rt.width,Rt.height,dt.depth,0,Rt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?vt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,0,Rt.width,Rt.height,dt.depth,gt,Tt,Rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,pt,Ct,Rt.width,Rt.height,dt.depth,0,gt,Tt,Rt.data)}else{O&&Mt&&e.texStorage2D(n.TEXTURE_2D,Lt,Ct,Kt[0].width,Kt[0].height);for(let pt=0,at=Kt.length;pt<at;pt++)Rt=Kt[pt],_.format!==rn?gt!==null?O?vt&&e.compressedTexSubImage2D(n.TEXTURE_2D,pt,0,0,Rt.width,Rt.height,gt,Rt.data):e.compressedTexImage2D(n.TEXTURE_2D,pt,Ct,Rt.width,Rt.height,0,Rt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?vt&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,Rt.width,Rt.height,gt,Tt,Rt.data):e.texImage2D(n.TEXTURE_2D,pt,Ct,Rt.width,Rt.height,0,gt,Tt,Rt.data)}else if(_.isDataArrayTexture)if(O){if(Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Lt,Ct,dt.width,dt.height,dt.depth),vt)if(_.layerUpdates.size>0){const pt=Kh(dt.width,dt.height,_.format,_.type);for(const at of _.layerUpdates){const It=dt.data.subarray(at*pt/dt.data.BYTES_PER_ELEMENT,(at+1)*pt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,at,dt.width,dt.height,1,gt,Tt,It)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,gt,Tt,dt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ct,dt.width,dt.height,dt.depth,0,gt,Tt,dt.data);else if(_.isData3DTexture)O?(Mt&&e.texStorage3D(n.TEXTURE_3D,Lt,Ct,dt.width,dt.height,dt.depth),vt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,gt,Tt,dt.data)):e.texImage3D(n.TEXTURE_3D,0,Ct,dt.width,dt.height,dt.depth,0,gt,Tt,dt.data);else if(_.isFramebufferTexture){if(Mt)if(O)e.texStorage2D(n.TEXTURE_2D,Lt,Ct,dt.width,dt.height);else{let pt=dt.width,at=dt.height;for(let It=0;It<Lt;It++)e.texImage2D(n.TEXTURE_2D,It,Ct,pt,at,0,gt,Tt,null),pt>>=1,at>>=1}}else if(Kt.length>0){if(O&&Mt){const pt=it(Kt[0]);e.texStorage2D(n.TEXTURE_2D,Lt,Ct,pt.width,pt.height)}for(let pt=0,at=Kt.length;pt<at;pt++)Rt=Kt[pt],O?vt&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,gt,Tt,Rt):e.texImage2D(n.TEXTURE_2D,pt,Ct,gt,Tt,Rt);_.generateMipmaps=!1}else if(O){if(Mt){const pt=it(dt);e.texStorage2D(n.TEXTURE_2D,Lt,Ct,pt.width,pt.height)}vt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,Tt,dt)}else e.texImage2D(n.TEXTURE_2D,0,Ct,gt,Tt,dt);m(_)&&d(j),xt.__version=Z.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function mt(M,_,P){if(_.image.length!==6)return;const j=Yt(M,_),et=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+P);const Z=i.get(et);if(et.version!==Z.__version||j===!0){e.activeTexture(n.TEXTURE0+P);const xt=re.getPrimaries(re.workingColorSpace),ft=_.colorSpace===ki?null:re.getPrimaries(_.colorSpace),Dt=_.colorSpace===ki||xt===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const Ft=_.isCompressedTexture||_.image[0].isCompressedTexture,dt=_.image[0]&&_.image[0].isDataTexture,gt=[];for(let at=0;at<6;at++)!Ft&&!dt?gt[at]=v(_.image[at],!0,s.maxCubemapSize):gt[at]=dt?_.image[at].image:_.image[at],gt[at]=J(_,gt[at]);const Tt=gt[0],Ct=r.convert(_.format,_.colorSpace),Rt=r.convert(_.type),Kt=E(_.internalFormat,Ct,Rt,_.colorSpace),O=_.isVideoTexture!==!0,Mt=Z.__version===void 0||j===!0,vt=et.dataReady;let Lt=A(_,Tt);St(n.TEXTURE_CUBE_MAP,_);let pt;if(Ft){O&&Mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,Kt,Tt.width,Tt.height);for(let at=0;at<6;at++){pt=gt[at].mipmaps;for(let It=0;It<pt.length;It++){const jt=pt[It];_.format!==rn?Ct!==null?O?vt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,0,0,jt.width,jt.height,Ct,jt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,Kt,jt.width,jt.height,0,jt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,0,0,jt.width,jt.height,Ct,Rt,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,Kt,jt.width,jt.height,0,Ct,Rt,jt.data)}}}else{if(pt=_.mipmaps,O&&Mt){pt.length>0&&Lt++;const at=it(gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Lt,Kt,at.width,at.height)}for(let at=0;at<6;at++)if(dt){O?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,gt[at].width,gt[at].height,Ct,Rt,gt[at].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Kt,gt[at].width,gt[at].height,0,Ct,Rt,gt[at].data);for(let It=0;It<pt.length;It++){const ye=pt[It].image[at].image;O?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,0,0,ye.width,ye.height,Ct,Rt,ye.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,Kt,ye.width,ye.height,0,Ct,Rt,ye.data)}}else{O?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ct,Rt,gt[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Kt,Ct,Rt,gt[at]);for(let It=0;It<pt.length;It++){const jt=pt[It];O?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,0,0,Ct,Rt,jt.image[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,Kt,Ct,Rt,jt.image[at])}}}m(_)&&d(n.TEXTURE_CUBE_MAP),Z.__version=et.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function _t(M,_,P,j,et,Z){const xt=r.convert(P.format,P.colorSpace),ft=r.convert(P.type),Dt=E(P.internalFormat,xt,ft,P.colorSpace),Ft=i.get(_),dt=i.get(P);if(dt.__renderTarget=_,!Ft.__hasExternalTextures){const gt=Math.max(1,_.width>>Z),Tt=Math.max(1,_.height>>Z);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,Dt,gt,Tt,_.depth,0,xt,ft,null):e.texImage2D(et,Z,Dt,gt,Tt,0,xt,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),ut(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,et,dt.__webglTexture,0,w(_)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,et,dt.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(M,_,P){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer){const j=_.depthTexture,et=j&&j.isDepthTexture?j.type:null,Z=y(_.stencilBuffer,et),xt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ut(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,w(_),Z,_.width,_.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,w(_),Z,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Z,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,M)}else{const j=_.textures;for(let et=0;et<j.length;et++){const Z=j[et],xt=r.convert(Z.format,Z.colorSpace),ft=r.convert(Z.type),Dt=E(Z.internalFormat,xt,ft,Z.colorSpace);ut(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,w(_),Dt,_.width,_.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,w(_),Dt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Dt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ot(M,_,P){const j=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=i.get(_.depthTexture);if(et.__renderTarget=_,(!et.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j){if(et.__webglInit===void 0&&(et.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),et.__webglTexture===void 0){et.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),St(n.TEXTURE_CUBE_MAP,_.depthTexture);const Ft=r.convert(_.depthTexture.format),dt=r.convert(_.depthTexture.type);let gt;_.depthTexture.format===Ci?gt=n.DEPTH_COMPONENT24:_.depthTexture.format===ms&&(gt=n.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,gt,_.width,_.height,0,Ft,dt,null)}}else G(_.depthTexture,0);const Z=et.__webglTexture,xt=w(_),ft=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+P:n.TEXTURE_2D,Dt=_.depthTexture.format===ms?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ci)ut(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Dt,ft,Z,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,Dt,ft,Z,0);else if(_.depthTexture.format===ms)ut(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Dt,ft,Z,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,Dt,ft,Z,0);else throw new Error("Unknown depthTexture format")}function kt(M){const _=i.get(M),P=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const j=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){const et=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",et)};j.addEventListener("dispose",et),_.__depthDisposeCallback=et}_.__boundDepthTexture=j}if(M.depthTexture&&!_.__autoAllocateDepthBuffer)if(P)for(let j=0;j<6;j++)Ot(_.__webglFramebuffer[j],M,j);else{const j=M.texture.mipmaps;j&&j.length>0?Ot(_.__webglFramebuffer[0],M,0):Ot(_.__webglFramebuffer,M,0)}else if(P){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=n.createRenderbuffer(),Wt(_.__webglDepthbuffer[j],M,!1);else{const et=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,Z)}}else{const j=M.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Wt(_.__webglDepthbuffer,M,!1);else{const et=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,Z)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function R(M,_,P){const j=i.get(M);_!==void 0&&_t(j.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&kt(M)}function U(M){const _=M.texture,P=i.get(M),j=i.get(_);M.addEventListener("dispose",L);const et=M.textures,Z=M.isWebGLCubeRenderTarget===!0,xt=et.length>1;if(xt||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=_.version,o.memory.textures++),Z){P.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer[ft]=[];for(let Dt=0;Dt<_.mipmaps.length;Dt++)P.__webglFramebuffer[ft][Dt]=n.createFramebuffer()}else P.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer=[];for(let ft=0;ft<_.mipmaps.length;ft++)P.__webglFramebuffer[ft]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(xt)for(let ft=0,Dt=et.length;ft<Dt;ft++){const Ft=i.get(et[ft]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&ut(M)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ft=0;ft<et.length;ft++){const Dt=et[ft];P.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[ft]);const Ft=r.convert(Dt.format,Dt.colorSpace),dt=r.convert(Dt.type),gt=E(Dt.internalFormat,Ft,dt,Dt.colorSpace,M.isXRRenderTarget===!0),Tt=w(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,gt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,P.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),Wt(P.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),St(n.TEXTURE_CUBE_MAP,_);for(let ft=0;ft<6;ft++)if(_.mipmaps&&_.mipmaps.length>0)for(let Dt=0;Dt<_.mipmaps.length;Dt++)_t(P.__webglFramebuffer[ft][Dt],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Dt);else _t(P.__webglFramebuffer[ft],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(_)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ft=0,Dt=et.length;ft<Dt;ft++){const Ft=et[ft],dt=i.get(Ft);let gt=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(gt=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(gt,dt.__webglTexture),St(gt,Ft),_t(P.__webglFramebuffer,M,Ft,n.COLOR_ATTACHMENT0+ft,gt,0),m(Ft)&&d(gt)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ft=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,j.__webglTexture),St(ft,_),_.mipmaps&&_.mipmaps.length>0)for(let Dt=0;Dt<_.mipmaps.length;Dt++)_t(P.__webglFramebuffer[Dt],M,_,n.COLOR_ATTACHMENT0,ft,Dt);else _t(P.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,ft,0);m(_)&&d(ft),e.unbindTexture()}M.depthBuffer&&kt(M)}function W(M){const _=M.textures;for(let P=0,j=_.length;P<j;P++){const et=_[P];if(m(et)){const Z=x(M),xt=i.get(et).__webglTexture;e.bindTexture(Z,xt),d(Z),e.unbindTexture()}}}const ot=[],Q=[];function st(M){if(M.samples>0){if(ut(M)===!1){const _=M.textures,P=M.width,j=M.height;let et=n.COLOR_BUFFER_BIT;const Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(M),ft=_.length>1;if(ft)for(let Ft=0;Ft<_.length;Ft++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);const Dt=M.texture.mipmaps;Dt&&Dt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Ft=0;Ft<_.length;Ft++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Ft]);const dt=i.get(_[Ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,dt,0)}n.blitFramebuffer(0,0,P,j,0,0,P,j,et,n.NEAREST),l===!0&&(ot.length=0,Q.length=0,ot.push(n.COLOR_ATTACHMENT0+Ft),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ot.push(Z),Q.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let Ft=0;Ft<_.length;Ft++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Ft]);const dt=i.get(_[Ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,dt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const _=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function w(M){return Math.min(s.maxSamples,M.samples)}function ut(M){const _=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function nt(M){const _=o.render.frame;u.get(M)!==_&&(u.set(M,_),M.update())}function J(M,_){const P=M.colorSpace,j=M.format,et=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||P!==Ss&&P!==ki&&(re.getTransfer(P)===pe?(j!==rn||et!==xn)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",P)),_}function it(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=B,this.setTextureCube=rt,this.rebindTextures=R,this.setupRenderTarget=U,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=ut,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ly(n,t){function e(i,s=ki){let r;const o=re.getTransfer(s);if(i===xn)return n.UNSIGNED_BYTE;if(i===au)return n.UNSIGNED_SHORT_4_4_4_4;if(i===lu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===np)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ip)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===tp)return n.BYTE;if(i===ep)return n.SHORT;if(i===Xr)return n.UNSIGNED_SHORT;if(i===ou)return n.INT;if(i===ni)return n.UNSIGNED_INT;if(i===sn)return n.FLOAT;if(i===Ai)return n.HALF_FLOAT;if(i===sp)return n.ALPHA;if(i===rp)return n.RGB;if(i===rn)return n.RGBA;if(i===Ci)return n.DEPTH_COMPONENT;if(i===ms)return n.DEPTH_STENCIL;if(i===cu)return n.RED;if(i===uu)return n.RED_INTEGER;if(i===nr)return n.RG;if(i===hu)return n.RG_INTEGER;if(i===fu)return n.RGBA_INTEGER;if(i===ko||i===Go||i===Wo||i===Xo)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tc||i===ec||i===nc||i===ic)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===uc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===sc||i===rc)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===oc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ac)return r.COMPRESSED_R11_EAC;if(i===lc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===cc)return r.COMPRESSED_RG11_EAC;if(i===uc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===hc||i===fc||i===dc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===Sc||i===Mc||i===yc||i===bc||i===Ec)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===hc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_c)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ec)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Tc||i===wc||i===Ac)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Tc)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cc||i===Rc||i===Pc||i===Dc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Cc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Yr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Iy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Fy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new mp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Mn({vertexShader:Iy,fragmentShader:Uy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new dn(new ar(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ny extends bs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Fy,d={},x=e.getContextAttributes();let E=null,y=null;const A=[],C=[],L=new Gt;let S=null;const T=new wn;T.viewport=new Ee;const Y=new wn;Y.viewport=new Ee;const D=[T,Y],F=new G_;let z=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let mt=A[lt];return mt===void 0&&(mt=new nl,A[lt]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(lt){let mt=A[lt];return mt===void 0&&(mt=new nl,A[lt]=mt),mt.getGripSpace()},this.getHand=function(lt){let mt=A[lt];return mt===void 0&&(mt=new nl,A[lt]=mt),mt.getHandSpace()};function G(lt){const mt=C.indexOf(lt.inputSource);if(mt===-1)return;const _t=A[mt];_t!==void 0&&(_t.update(lt.inputSource,lt.frame,c||o),_t.dispatchEvent({type:lt.type,data:lt.inputSource}))}function X(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",B);for(let lt=0;lt<A.length;lt++){const mt=C[lt];mt!==null&&(C[lt]=null,A[lt].disconnect(mt))}z=null,q=null,m.reset();for(const lt in d)delete d[lt];t.setRenderTarget(E),p=null,f=null,h=null,s=null,y=null,ae.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){r=lt,i.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){a=lt,i.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(lt){c=lt},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",X),s.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Wt=null,Ot=null;x.depth&&(Ot=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=x.stencil?ms:Ci,Wt=x.stencil?Yr:ni);const kt={colorFormat:e.RGBA8,depthFormat:Ot,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(kt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Cn(f.textureWidth,f.textureHeight,{format:rn,type:xn,depthTexture:new jr(f.textureWidth,f.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _t={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Cn(p.framebufferWidth,p.framebufferHeight,{format:rn,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ae.setContext(s),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(lt){for(let mt=0;mt<lt.removed.length;mt++){const _t=lt.removed[mt],Wt=C.indexOf(_t);Wt>=0&&(C[Wt]=null,A[Wt].disconnect(_t))}for(let mt=0;mt<lt.added.length;mt++){const _t=lt.added[mt];let Wt=C.indexOf(_t);if(Wt===-1){for(let kt=0;kt<A.length;kt++)if(kt>=C.length){C.push(_t),Wt=kt;break}else if(C[kt]===null){C[kt]=_t,Wt=kt;break}if(Wt===-1)break}const Ot=A[Wt];Ot&&Ot.connect(_t)}}const rt=new k,ht=new k;function yt(lt,mt,_t){rt.setFromMatrixPosition(mt.matrixWorld),ht.setFromMatrixPosition(_t.matrixWorld);const Wt=rt.distanceTo(ht),Ot=mt.projectionMatrix.elements,kt=_t.projectionMatrix.elements,R=Ot[14]/(Ot[10]-1),U=Ot[14]/(Ot[10]+1),W=(Ot[9]+1)/Ot[5],ot=(Ot[9]-1)/Ot[5],Q=(Ot[8]-1)/Ot[0],st=(kt[8]+1)/kt[0],w=R*Q,ut=R*st,nt=Wt/(-Q+st),J=nt*-Q;if(mt.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(J),lt.translateZ(nt),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),Ot[10]===-1)lt.projectionMatrix.copy(mt.projectionMatrix),lt.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const it=R+nt,M=U+nt,_=w-J,P=ut+(Wt-J),j=W*U/M*it,et=ot*U/M*it;lt.projectionMatrix.makePerspective(_,P,j,et,it,M),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function bt(lt,mt){mt===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(mt.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let mt=lt.near,_t=lt.far;m.texture!==null&&(m.depthNear>0&&(mt=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),F.near=Y.near=T.near=mt,F.far=Y.far=T.far=_t,(z!==F.near||q!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,q=F.far),F.layers.mask=lt.layers.mask|6,T.layers.mask=F.layers.mask&-5,Y.layers.mask=F.layers.mask&-3;const Wt=lt.parent,Ot=F.cameras;bt(F,Wt);for(let kt=0;kt<Ot.length;kt++)bt(Ot[kt],Wt);Ot.length===2?yt(F,T,Y):F.projectionMatrix.copy(T.projectionMatrix),St(lt,F,Wt)};function St(lt,mt,_t){_t===null?lt.matrix.copy(mt.matrixWorld):(lt.matrix.copy(_t.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(mt.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(mt.projectionMatrix),lt.projectionMatrixInverse.copy(mt.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=Lc*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(lt){l=lt,f!==null&&(f.fixedFoveation=lt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=lt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(lt){return d[lt]};let Yt=null;function ce(lt,mt){if(u=mt.getViewerPose(c||o),g=mt,u!==null){const _t=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Wt=!1;_t.length!==F.cameras.length&&(F.cameras.length=0,Wt=!0);for(let U=0;U<_t.length;U++){const W=_t[U];let ot=null;if(p!==null)ot=p.getViewport(W);else{const st=h.getViewSubImage(f,W);ot=st.viewport,U===0&&(t.setRenderTargetTextures(y,st.colorTexture,st.depthStencilTexture),t.setRenderTarget(y))}let Q=D[U];Q===void 0&&(Q=new wn,Q.layers.enable(U),Q.viewport=new Ee,D[U]=Q),Q.matrix.fromArray(W.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(W.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ot.x,ot.y,ot.width,ot.height),U===0&&(F.matrix.copy(Q.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Wt===!0&&F.cameras.push(Q)}const Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const U=h.getDepthInformation(_t[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(Ot&&Ot.includes("camera-access")&&v){t.state.unbindTexture(),h=i.getBinding();for(let U=0;U<_t.length;U++){const W=_t[U].camera;if(W){let ot=d[W];ot||(ot=new mp,d[W]=ot);const Q=h.getCameraImage(W);ot.sourceTexture=Q}}}}for(let _t=0;_t<A.length;_t++){const Wt=C[_t],Ot=A[_t];Wt!==null&&Ot!==void 0&&Ot.update(Wt,mt,c||o)}Yt&&Yt(lt,mt),mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:mt}),g=null}const ae=new Sp;ae.setAnimationLoop(ce),this.setAnimationLoop=function(lt){Yt=lt},this.dispose=function(){}}}const ls=new ii,Oy=new me;function By(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,gp(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,x,E,y){d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,x,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===fn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===fn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=t.get(d),E=x.envMap,y=x.envMapRotation;E&&(m.envMap.value=E,ls.copy(y),ls.x*=-1,ls.y*=-1,ls.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),m.envMapRotation.value.setFromMatrix4(Oy.makeRotationFromEuler(ls)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===fn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const x=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function zy(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const y=E.program;i.uniformBlockBinding(x,y)}function c(x,E){let y=s[x.id];y===void 0&&(g(x),y=u(x),s[x.id]=y,x.addEventListener("dispose",m));const A=E.program;i.updateUBOMapping(x,A);const C=t.render.frame;r[x.id]!==C&&(f(x),r[x.id]=C)}function u(x){const E=h();x.__bindingPointIndex=E;const y=n.createBuffer(),A=x.__size,C=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const E=s[x.id],y=x.uniforms,A=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let C=0,L=y.length;C<L;C++){const S=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,Y=S.length;T<Y;T++){const D=S[T];if(p(D,C,T,A)===!0){const F=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let G=0;G<z.length;G++){const X=z[G],B=v(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,F+q,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,q),q+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,E,y,A){const C=x.value,L=E+"_"+y;if(A[L]===void 0)return typeof C=="number"||typeof C=="boolean"?A[L]=C:A[L]=C.clone(),!0;{const S=A[L];if(typeof C=="number"||typeof C=="boolean"){if(S!==C)return A[L]=C,!0}else if(S.equals(C)===!1)return S.copy(C),!0}return!1}function g(x){const E=x.uniforms;let y=0;const A=16;for(let L=0,S=E.length;L<S;L++){const T=Array.isArray(E[L])?E[L]:[E[L]];for(let Y=0,D=T.length;Y<D;Y++){const F=T[Y],z=Array.isArray(F.value)?F.value:[F.value];for(let q=0,G=z.length;q<G;q++){const X=z[q],B=v(X),rt=y%A,ht=rt%B.boundary,yt=rt+ht;y+=ht,yt!==0&&A-yt<B.storage&&(y+=A-yt),F.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=B.storage}}}const C=y%A;return C>0&&(y+=A-C),x.__size=y,x.__cache={},this}function v(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xt("WebGLRenderer: Unsupported uniform value type.",x),E}function m(x){const E=x.target;E.removeEventListener("dispose",m);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}const Vy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yn=null;function Hy(){return Yn===null&&(Yn=new Ir(Vy,16,16,nr,Ai),Yn.name="DFG_LUT",Yn.minFilter=ze,Yn.magFilter=ze,Yn.wrapS=Si,Yn.wrapT=Si,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}class ky{constructor(t={}){const{canvas:e=i_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=xn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=p,m=new Set([fu,hu,uu]),d=new Set([xn,ni,Xr,Yr,au,lu]),x=new Uint32Array(4),E=new Int32Array(4);let y=null,A=null;const C=[],L=[];let S=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let Y=!1;this._outputColorSpace=vn;let D=0,F=0,z=null,q=-1,G=null;const X=new Ee,B=new Ee;let rt=null;const ht=new qt(0);let yt=0,bt=e.width,St=e.height,Yt=1,ce=null,ae=null;const lt=new Ee(0,0,bt,St),mt=new Ee(0,0,bt,St);let _t=!1;const Wt=new xu;let Ot=!1,kt=!1;const R=new me,U=new k,W=new Ee,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function st(){return z===null?Yt:1}let w=i;function ut(b,H){return e.getContext(b,H)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${iu}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",jt,!1),e.addEventListener("webglcontextcreationerror",ye,!1),w===null){const H="webgl2";if(w=ut(H,b),w===null)throw ut(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw se("WebGLRenderer: "+b.message),b}let nt,J,it,M,_,P,j,et,Z,xt,ft,Dt,Ft,dt,gt,Tt,Ct,Rt,Kt,O,Mt,vt,Lt;function pt(){nt=new kS(w),nt.init(),Mt=new Ly(w,nt),J=new US(w,nt,t,Mt),it=new Py(w,nt),J.reversedDepthBuffer&&f&&it.buffers.depth.setReversed(!0),M=new XS(w),_=new gy,P=new Dy(w,nt,it,_,J,Mt,M),j=new HS(T),et=new Z_(w),vt=new LS(w,et),Z=new GS(w,et,M,vt),xt=new qS(w,Z,et,vt,M),Rt=new YS(w,J,P),gt=new FS(_),ft=new my(T,j,nt,J,vt,gt),Dt=new By(T,_),Ft=new vy,dt=new Ey(nt),Ct=new DS(T,j,it,xt,g,l),Tt=new Ry(T,xt,J),Lt=new zy(w,M,J,it),Kt=new IS(w,nt,M),O=new WS(w,nt,M),M.programs=ft.programs,T.capabilities=J,T.extensions=nt,T.properties=_,T.renderLists=Ft,T.shadowMap=Tt,T.state=it,T.info=M}pt(),v!==xn&&(S=new $S(v,e.width,e.height,s,r));const at=new Ny(T,w);this.xr=at,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const b=nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Yt},this.setPixelRatio=function(b){b!==void 0&&(Yt=b,this.setSize(bt,St,!1))},this.getSize=function(b){return b.set(bt,St)},this.setSize=function(b,H,tt=!0){if(at.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}bt=b,St=H,e.width=Math.floor(b*Yt),e.height=Math.floor(H*Yt),tt===!0&&(e.style.width=b+"px",e.style.height=H+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(bt*Yt,St*Yt).floor()},this.setDrawingBufferSize=function(b,H,tt){bt=b,St=H,Yt=tt,e.width=Math.floor(b*tt),e.height=Math.floor(H*tt),this.setViewport(0,0,b,H)},this.setEffects=function(b){if(v===xn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let H=0;H<b.length;H++)if(b[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(X)},this.getViewport=function(b){return b.copy(lt)},this.setViewport=function(b,H,tt,K){b.isVector4?lt.set(b.x,b.y,b.z,b.w):lt.set(b,H,tt,K),it.viewport(X.copy(lt).multiplyScalar(Yt).round())},this.getScissor=function(b){return b.copy(mt)},this.setScissor=function(b,H,tt,K){b.isVector4?mt.set(b.x,b.y,b.z,b.w):mt.set(b,H,tt,K),it.scissor(B.copy(mt).multiplyScalar(Yt).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(b){it.setScissorTest(_t=b)},this.setOpaqueSort=function(b){ce=b},this.setTransparentSort=function(b){ae=b},this.getClearColor=function(b){return b.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,tt=!0){let K=0;if(b){let $=!1;if(z!==null){const wt=z.texture.format;$=m.has(wt)}if($){const wt=z.texture.type,Pt=d.has(wt),At=Ct.getClearColor(),Ut=Ct.getClearAlpha(),Bt=At.r,Jt=At.g,ee=At.b;Pt?(x[0]=Bt,x[1]=Jt,x[2]=ee,x[3]=Ut,w.clearBufferuiv(w.COLOR,0,x)):(E[0]=Bt,E[1]=Jt,E[2]=ee,E[3]=Ut,w.clearBufferiv(w.COLOR,0,E))}else K|=w.COLOR_BUFFER_BIT}H&&(K|=w.DEPTH_BUFFER_BIT),tt&&(K|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&w.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",ye,!1),Ct.dispose(),Ft.dispose(),dt.dispose(),_.dispose(),j.dispose(),xt.dispose(),vt.dispose(),Lt.dispose(),ft.dispose(),at.dispose(),at.removeEventListener("sessionstart",wu),at.removeEventListener("sessionend",Au),Ki.stop()};function It(b){b.preventDefault(),bh("WebGLRenderer: Context Lost."),Y=!0}function jt(){bh("WebGLRenderer: Context Restored."),Y=!1;const b=M.autoReset,H=Tt.enabled,tt=Tt.autoUpdate,K=Tt.needsUpdate,$=Tt.type;pt(),M.autoReset=b,Tt.enabled=H,Tt.autoUpdate=tt,Tt.needsUpdate=K,Tt.type=$}function ye(b){se("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function de(b){const H=b.target;H.removeEventListener("dispose",de),si(H)}function si(b){ri(b),_.remove(b)}function ri(b){const H=_.get(b).programs;H!==void 0&&(H.forEach(function(tt){ft.releaseProgram(tt)}),b.isShaderMaterial&&ft.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,tt,K,$,wt){H===null&&(H=ot);const Pt=$.isMesh&&$.matrixWorld.determinant()<0,At=Rp(b,H,tt,K,$);it.setMaterial(K,Pt);let Ut=tt.index,Bt=1;if(K.wireframe===!0){if(Ut=Z.getWireframeAttribute(tt),Ut===void 0)return;Bt=2}const Jt=tt.drawRange,ee=tt.attributes.position;let zt=Jt.start*Bt,ge=(Jt.start+Jt.count)*Bt;wt!==null&&(zt=Math.max(zt,wt.start*Bt),ge=Math.min(ge,(wt.start+wt.count)*Bt)),Ut!==null?(zt=Math.max(zt,0),ge=Math.min(ge,Ut.count)):ee!=null&&(zt=Math.max(zt,0),ge=Math.min(ge,ee.count));const Re=ge-zt;if(Re<0||Re===1/0)return;vt.setup($,K,At,tt,Ut);let Ae,_e=Kt;if(Ut!==null&&(Ae=et.get(Ut),_e=O,_e.setIndex(Ae)),$.isMesh)K.wireframe===!0?(it.setLineWidth(K.wireframeLinewidth*st()),_e.setMode(w.LINES)):_e.setMode(w.TRIANGLES);else if($.isLine){let Xe=K.linewidth;Xe===void 0&&(Xe=1),it.setLineWidth(Xe*st()),$.isLineSegments?_e.setMode(w.LINES):$.isLineLoop?_e.setMode(w.LINE_LOOP):_e.setMode(w.LINE_STRIP)}else $.isPoints?_e.setMode(w.POINTS):$.isSprite&&_e.setMode(w.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)ua("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))_e.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Xe=$._multiDrawStarts,Nt=$._multiDrawCounts,pn=$._multiDrawCount,oe=Ut?et.get(Ut).bytesPerElement:1,Dn=_.get(K).currentProgram.getUniforms();for(let kn=0;kn<pn;kn++)Dn.setValue(w,"_gl_DrawID",kn),_e.render(Xe[kn]/oe,Nt[kn])}else if($.isInstancedMesh)_e.renderInstances(zt,Re,$.count);else if(tt.isInstancedBufferGeometry){const Xe=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Nt=Math.min(tt.instanceCount,Xe);_e.renderInstances(zt,Re,Nt)}else _e.render(zt,Re)};function Tu(b,H,tt){b.transparent===!0&&b.side===Nn&&b.forceSinglePass===!1?(b.side=fn,b.needsUpdate=!0,so(b,H,tt),b.side=qi,b.needsUpdate=!0,so(b,H,tt),b.side=Nn):so(b,H,tt)}this.compile=function(b,H,tt=null){tt===null&&(tt=b),A=dt.get(tt),A.init(H),L.push(A),tt.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(A.pushLight($),$.castShadow&&A.pushShadow($))}),b!==tt&&b.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(A.pushLight($),$.castShadow&&A.pushShadow($))}),A.setupLights();const K=new Set;return b.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const wt=$.material;if(wt)if(Array.isArray(wt))for(let Pt=0;Pt<wt.length;Pt++){const At=wt[Pt];Tu(At,tt,$),K.add(At)}else Tu(wt,tt,$),K.add(wt)}),A=L.pop(),K},this.compileAsync=function(b,H,tt=null){const K=this.compile(b,H,tt);return new Promise($=>{function wt(){if(K.forEach(function(Pt){_.get(Pt).currentProgram.isReady()&&K.delete(Pt)}),K.size===0){$(b);return}setTimeout(wt,10)}nt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let La=null;function Cp(b){La&&La(b)}function wu(){Ki.stop()}function Au(){Ki.start()}const Ki=new Sp;Ki.setAnimationLoop(Cp),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(b){La=b,at.setAnimationLoop(b),b===null?Ki.stop():Ki.start()},at.addEventListener("sessionstart",wu),at.addEventListener("sessionend",Au),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;const tt=at.enabled===!0&&at.isPresenting===!0,K=S!==null&&(z===null||tt)&&S.begin(T,z);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(H),H=at.getCamera()),b.isScene===!0&&b.onBeforeRender(T,b,H,z),A=dt.get(b,L.length),A.init(H),L.push(A),R.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Wt.setFromProjectionMatrix(R,Qn,H.reversedDepth),kt=this.localClippingEnabled,Ot=gt.init(this.clippingPlanes,kt),y=Ft.get(b,C.length),y.init(),C.push(y),at.enabled===!0&&at.isPresenting===!0){const Pt=T.xr.getDepthSensingMesh();Pt!==null&&Ia(Pt,H,-1/0,T.sortObjects)}Ia(b,H,0,T.sortObjects),y.finish(),T.sortObjects===!0&&y.sort(ce,ae),Q=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Q&&Ct.addToRenderList(y,b),this.info.render.frame++,Ot===!0&&gt.beginShadows();const $=A.state.shadowsArray;if(Tt.render($,b,H),Ot===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&S.hasRenderPass())===!1){const Pt=y.opaque,At=y.transmissive;if(A.setupLights(),H.isArrayCamera){const Ut=H.cameras;if(At.length>0)for(let Bt=0,Jt=Ut.length;Bt<Jt;Bt++){const ee=Ut[Bt];Ru(Pt,At,b,ee)}Q&&Ct.render(b);for(let Bt=0,Jt=Ut.length;Bt<Jt;Bt++){const ee=Ut[Bt];Cu(y,b,ee,ee.viewport)}}else At.length>0&&Ru(Pt,At,b,H),Q&&Ct.render(b),Cu(y,b,H)}z!==null&&F===0&&(P.updateMultisampleRenderTarget(z),P.updateRenderTargetMipmap(z)),K&&S.end(T),b.isScene===!0&&b.onAfterRender(T,b,H),vt.resetDefaultState(),q=-1,G=null,L.pop(),L.length>0?(A=L[L.length-1],Ot===!0&&gt.setGlobalState(T.clippingPlanes,A.state.camera)):A=null,C.pop(),C.length>0?y=C[C.length-1]:y=null};function Ia(b,H,tt,K){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)tt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Wt.intersectsSprite(b)){K&&W.setFromMatrixPosition(b.matrixWorld).applyMatrix4(R);const Pt=xt.update(b),At=b.material;At.visible&&y.push(b,Pt,At,tt,W.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Wt.intersectsObject(b))){const Pt=xt.update(b),At=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),W.copy(b.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),W.copy(Pt.boundingSphere.center)),W.applyMatrix4(b.matrixWorld).applyMatrix4(R)),Array.isArray(At)){const Ut=Pt.groups;for(let Bt=0,Jt=Ut.length;Bt<Jt;Bt++){const ee=Ut[Bt],zt=At[ee.materialIndex];zt&&zt.visible&&y.push(b,Pt,zt,tt,W.z,ee)}}else At.visible&&y.push(b,Pt,At,tt,W.z,null)}}const wt=b.children;for(let Pt=0,At=wt.length;Pt<At;Pt++)Ia(wt[Pt],H,tt,K)}function Cu(b,H,tt,K){const{opaque:$,transmissive:wt,transparent:Pt}=b;A.setupLightsView(tt),Ot===!0&&gt.setGlobalState(T.clippingPlanes,tt),K&&it.viewport(X.copy(K)),$.length>0&&io($,H,tt),wt.length>0&&io(wt,H,tt),Pt.length>0&&io(Pt,H,tt),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function Ru(b,H,tt,K){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[K.id]===void 0){const zt=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[K.id]=new Cn(1,1,{generateMipmaps:!0,type:zt?Ai:xn,minFilter:ps,samples:Math.max(4,J.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace})}const wt=A.state.transmissionRenderTarget[K.id],Pt=K.viewport||X;wt.setSize(Pt.z*T.transmissionResolutionScale,Pt.w*T.transmissionResolutionScale);const At=T.getRenderTarget(),Ut=T.getActiveCubeFace(),Bt=T.getActiveMipmapLevel();T.setRenderTarget(wt),T.getClearColor(ht),yt=T.getClearAlpha(),yt<1&&T.setClearColor(16777215,.5),T.clear(),Q&&Ct.render(tt);const Jt=T.toneMapping;T.toneMapping=ei;const ee=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),A.setupLightsView(K),Ot===!0&&gt.setGlobalState(T.clippingPlanes,K),io(b,tt,K),P.updateMultisampleRenderTarget(wt),P.updateRenderTargetMipmap(wt),nt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let ge=0,Re=H.length;ge<Re;ge++){const Ae=H[ge],{object:_e,geometry:Xe,material:Nt,group:pn}=Ae;if(Nt.side===Nn&&_e.layers.test(K.layers)){const oe=Nt.side;Nt.side=fn,Nt.needsUpdate=!0,Pu(_e,tt,K,Xe,Nt,pn),Nt.side=oe,Nt.needsUpdate=!0,zt=!0}}zt===!0&&(P.updateMultisampleRenderTarget(wt),P.updateRenderTargetMipmap(wt))}T.setRenderTarget(At,Ut,Bt),T.setClearColor(ht,yt),ee!==void 0&&(K.viewport=ee),T.toneMapping=Jt}function io(b,H,tt){const K=H.isScene===!0?H.overrideMaterial:null;for(let $=0,wt=b.length;$<wt;$++){const Pt=b[$],{object:At,geometry:Ut,group:Bt}=Pt;let Jt=Pt.material;Jt.allowOverride===!0&&K!==null&&(Jt=K),At.layers.test(tt.layers)&&Pu(At,H,tt,Ut,Jt,Bt)}}function Pu(b,H,tt,K,$,wt){b.onBeforeRender(T,H,tt,K,$,wt),b.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(T,H,tt,K,b,wt),$.transparent===!0&&$.side===Nn&&$.forceSinglePass===!1?($.side=fn,$.needsUpdate=!0,T.renderBufferDirect(tt,H,K,$,b,wt),$.side=qi,$.needsUpdate=!0,T.renderBufferDirect(tt,H,K,$,b,wt),$.side=Nn):T.renderBufferDirect(tt,H,K,$,b,wt),b.onAfterRender(T,H,tt,K,$,wt)}function so(b,H,tt){H.isScene!==!0&&(H=ot);const K=_.get(b),$=A.state.lights,wt=A.state.shadowsArray,Pt=$.state.version,At=ft.getParameters(b,$.state,wt,H,tt),Ut=ft.getProgramCacheKey(At);let Bt=K.programs;K.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,K.fog=H.fog;const Jt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;K.envMap=j.get(b.envMap||K.environment,Jt),K.envMapRotation=K.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Bt===void 0&&(b.addEventListener("dispose",de),Bt=new Map,K.programs=Bt);let ee=Bt.get(Ut);if(ee!==void 0){if(K.currentProgram===ee&&K.lightsStateVersion===Pt)return Lu(b,At),ee}else At.uniforms=ft.getUniforms(b),b.onBeforeCompile(At,T),ee=ft.acquireProgram(At,Ut),Bt.set(Ut,ee),K.uniforms=At.uniforms;const zt=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(zt.clippingPlanes=gt.uniform),Lu(b,At),K.needsLights=Dp(b),K.lightsStateVersion=Pt,K.needsLights&&(zt.ambientLightColor.value=$.state.ambient,zt.lightProbe.value=$.state.probe,zt.directionalLights.value=$.state.directional,zt.directionalLightShadows.value=$.state.directionalShadow,zt.spotLights.value=$.state.spot,zt.spotLightShadows.value=$.state.spotShadow,zt.rectAreaLights.value=$.state.rectArea,zt.ltc_1.value=$.state.rectAreaLTC1,zt.ltc_2.value=$.state.rectAreaLTC2,zt.pointLights.value=$.state.point,zt.pointLightShadows.value=$.state.pointShadow,zt.hemisphereLights.value=$.state.hemi,zt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,zt.spotLightMatrix.value=$.state.spotLightMatrix,zt.spotLightMap.value=$.state.spotLightMap,zt.pointShadowMatrix.value=$.state.pointShadowMatrix),K.currentProgram=ee,K.uniformsList=null,ee}function Du(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=qo.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function Lu(b,H){const tt=_.get(b);tt.outputColorSpace=H.outputColorSpace,tt.batching=H.batching,tt.batchingColor=H.batchingColor,tt.instancing=H.instancing,tt.instancingColor=H.instancingColor,tt.instancingMorph=H.instancingMorph,tt.skinning=H.skinning,tt.morphTargets=H.morphTargets,tt.morphNormals=H.morphNormals,tt.morphColors=H.morphColors,tt.morphTargetsCount=H.morphTargetsCount,tt.numClippingPlanes=H.numClippingPlanes,tt.numIntersection=H.numClipIntersection,tt.vertexAlphas=H.vertexAlphas,tt.vertexTangents=H.vertexTangents,tt.toneMapping=H.toneMapping}function Rp(b,H,tt,K,$){H.isScene!==!0&&(H=ot),P.resetTextureUnits();const wt=H.fog,Pt=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?H.environment:null,At=z===null?T.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ss,Ut=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Bt=j.get(K.envMap||Pt,Ut),Jt=K.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ee=!!tt.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),zt=!!tt.morphAttributes.position,ge=!!tt.morphAttributes.normal,Re=!!tt.morphAttributes.color;let Ae=ei;K.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ae=T.toneMapping);const _e=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Xe=_e!==void 0?_e.length:0,Nt=_.get(K),pn=A.state.lights;if(Ot===!0&&(kt===!0||b!==G)){const Ne=b===G&&K.id===q;gt.setState(K,b,Ne)}let oe=!1;K.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==pn.state.version||Nt.outputColorSpace!==At||$.isBatchedMesh&&Nt.batching===!1||!$.isBatchedMesh&&Nt.batching===!0||$.isBatchedMesh&&Nt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Nt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Nt.instancing===!1||!$.isInstancedMesh&&Nt.instancing===!0||$.isSkinnedMesh&&Nt.skinning===!1||!$.isSkinnedMesh&&Nt.skinning===!0||$.isInstancedMesh&&Nt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Nt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Nt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Nt.instancingMorph===!1&&$.morphTexture!==null||Nt.envMap!==Bt||K.fog===!0&&Nt.fog!==wt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==gt.numPlanes||Nt.numIntersection!==gt.numIntersection)||Nt.vertexAlphas!==Jt||Nt.vertexTangents!==ee||Nt.morphTargets!==zt||Nt.morphNormals!==ge||Nt.morphColors!==Re||Nt.toneMapping!==Ae||Nt.morphTargetsCount!==Xe)&&(oe=!0):(oe=!0,Nt.__version=K.version);let Dn=Nt.currentProgram;oe===!0&&(Dn=so(K,H,$));let kn=!1,Ji=!1,Ts=!1;const Se=Dn.getUniforms(),He=Nt.uniforms;if(it.useProgram(Dn.program)&&(kn=!0,Ji=!0,Ts=!0),K.id!==q&&(q=K.id,Ji=!0),kn||G!==b){it.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Se.setValue(w,"projectionMatrix",b.projectionMatrix),Se.setValue(w,"viewMatrix",b.matrixWorldInverse);const Di=Se.map.cameraPosition;Di!==void 0&&Di.setValue(w,U.setFromMatrixPosition(b.matrixWorld)),J.logarithmicDepthBuffer&&Se.setValue(w,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Se.setValue(w,"isOrthographic",b.isOrthographicCamera===!0),G!==b&&(G=b,Ji=!0,Ts=!0)}if(Nt.needsLights&&(pn.state.directionalShadowMap.length>0&&Se.setValue(w,"directionalShadowMap",pn.state.directionalShadowMap,P),pn.state.spotShadowMap.length>0&&Se.setValue(w,"spotShadowMap",pn.state.spotShadowMap,P),pn.state.pointShadowMap.length>0&&Se.setValue(w,"pointShadowMap",pn.state.pointShadowMap,P)),$.isSkinnedMesh){Se.setOptional(w,$,"bindMatrix"),Se.setOptional(w,$,"bindMatrixInverse");const Ne=$.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),Se.setValue(w,"boneTexture",Ne.boneTexture,P))}$.isBatchedMesh&&(Se.setOptional(w,$,"batchingTexture"),Se.setValue(w,"batchingTexture",$._matricesTexture,P),Se.setOptional(w,$,"batchingIdTexture"),Se.setValue(w,"batchingIdTexture",$._indirectTexture,P),Se.setOptional(w,$,"batchingColorTexture"),$._colorsTexture!==null&&Se.setValue(w,"batchingColorTexture",$._colorsTexture,P));const Pi=tt.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&Rt.update($,tt,Dn),(Ji||Nt.receiveShadow!==$.receiveShadow)&&(Nt.receiveShadow=$.receiveShadow,Se.setValue(w,"receiveShadow",$.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&H.environment!==null&&(He.envMapIntensity.value=H.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=Hy()),Ji&&(Se.setValue(w,"toneMappingExposure",T.toneMappingExposure),Nt.needsLights&&Pp(He,Ts),wt&&K.fog===!0&&Dt.refreshFogUniforms(He,wt),Dt.refreshMaterialUniforms(He,K,Yt,St,A.state.transmissionRenderTarget[b.id]),qo.upload(w,Du(Nt),He,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(qo.upload(w,Du(Nt),He,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Se.setValue(w,"center",$.center),Se.setValue(w,"modelViewMatrix",$.modelViewMatrix),Se.setValue(w,"normalMatrix",$.normalMatrix),Se.setValue(w,"modelMatrix",$.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ne=K.uniformsGroups;for(let Di=0,ws=Ne.length;Di<ws;Di++){const Iu=Ne[Di];Lt.update(Iu,Dn),Lt.bind(Iu,Dn)}}return Dn}function Pp(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function Dp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(b,H,tt){const K=_.get(b);K.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),_.get(b.texture).__webglTexture=H,_.get(b.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:tt,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){const tt=_.get(b);tt.__webglFramebuffer=H,tt.__useDefaultFramebuffer=H===void 0};const Lp=w.createFramebuffer();this.setRenderTarget=function(b,H=0,tt=0){z=b,D=H,F=tt;let K=null,$=!1,wt=!1;if(b){const At=_.get(b);if(At.__useDefaultFramebuffer!==void 0){it.bindFramebuffer(w.FRAMEBUFFER,At.__webglFramebuffer),X.copy(b.viewport),B.copy(b.scissor),rt=b.scissorTest,it.viewport(X),it.scissor(B),it.setScissorTest(rt),q=-1;return}else if(At.__webglFramebuffer===void 0)P.setupRenderTarget(b);else if(At.__hasExternalTextures)P.rebindTextures(b,_.get(b.texture).__webglTexture,_.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Jt=b.depthTexture;if(At.__boundDepthTexture!==Jt){if(Jt!==null&&_.has(Jt)&&(b.width!==Jt.image.width||b.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(b)}}const Ut=b.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(wt=!0);const Bt=_.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Bt[H])?K=Bt[H][tt]:K=Bt[H],$=!0):b.samples>0&&P.useMultisampledRTT(b)===!1?K=_.get(b).__webglMultisampledFramebuffer:Array.isArray(Bt)?K=Bt[tt]:K=Bt,X.copy(b.viewport),B.copy(b.scissor),rt=b.scissorTest}else X.copy(lt).multiplyScalar(Yt).floor(),B.copy(mt).multiplyScalar(Yt).floor(),rt=_t;if(tt!==0&&(K=Lp),it.bindFramebuffer(w.FRAMEBUFFER,K)&&it.drawBuffers(b,K),it.viewport(X),it.scissor(B),it.setScissorTest(rt),$){const At=_.get(b.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+H,At.__webglTexture,tt)}else if(wt){const At=H;for(let Ut=0;Ut<b.textures.length;Ut++){const Bt=_.get(b.textures[Ut]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Ut,Bt.__webglTexture,tt,At)}}else if(b!==null&&tt!==0){const At=_.get(b.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,At.__webglTexture,tt)}q=-1},this.readRenderTargetPixels=function(b,H,tt,K,$,wt,Pt,At=0){if(!(b&&b.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=_.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ut=Ut[Pt]),Ut){it.bindFramebuffer(w.FRAMEBUFFER,Ut);try{const Bt=b.textures[At],Jt=Bt.format,ee=Bt.type;if(b.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+At),!J.textureFormatReadable(Jt)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(ee)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-K&&tt>=0&&tt<=b.height-$&&w.readPixels(H,tt,K,$,Mt.convert(Jt),Mt.convert(ee),wt)}finally{const Bt=z!==null?_.get(z).__webglFramebuffer:null;it.bindFramebuffer(w.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(b,H,tt,K,$,wt,Pt,At=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=_.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ut=Ut[Pt]),Ut)if(H>=0&&H<=b.width-K&&tt>=0&&tt<=b.height-$){it.bindFramebuffer(w.FRAMEBUFFER,Ut);const Bt=b.textures[At],Jt=Bt.format,ee=Bt.type;if(b.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+At),!J.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const zt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,zt),w.bufferData(w.PIXEL_PACK_BUFFER,wt.byteLength,w.STREAM_READ),w.readPixels(H,tt,K,$,Mt.convert(Jt),Mt.convert(ee),0);const ge=z!==null?_.get(z).__webglFramebuffer:null;it.bindFramebuffer(w.FRAMEBUFFER,ge);const Re=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await s_(w,Re,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,zt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,wt),w.deleteBuffer(zt),w.deleteSync(Re),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,tt=0){const K=Math.pow(2,-tt),$=Math.floor(b.image.width*K),wt=Math.floor(b.image.height*K),Pt=H!==null?H.x:0,At=H!==null?H.y:0;P.setTexture2D(b,0),w.copyTexSubImage2D(w.TEXTURE_2D,tt,0,0,Pt,At,$,wt),it.unbindTexture()};const Ip=w.createFramebuffer(),Up=w.createFramebuffer();this.copyTextureToTexture=function(b,H,tt=null,K=null,$=0,wt=0){let Pt,At,Ut,Bt,Jt,ee,zt,ge,Re;const Ae=b.isCompressedTexture?b.mipmaps[wt]:b.image;if(tt!==null)Pt=tt.max.x-tt.min.x,At=tt.max.y-tt.min.y,Ut=tt.isBox3?tt.max.z-tt.min.z:1,Bt=tt.min.x,Jt=tt.min.y,ee=tt.isBox3?tt.min.z:0;else{const He=Math.pow(2,-$);Pt=Math.floor(Ae.width*He),At=Math.floor(Ae.height*He),b.isDataArrayTexture?Ut=Ae.depth:b.isData3DTexture?Ut=Math.floor(Ae.depth*He):Ut=1,Bt=0,Jt=0,ee=0}K!==null?(zt=K.x,ge=K.y,Re=K.z):(zt=0,ge=0,Re=0);const _e=Mt.convert(H.format),Xe=Mt.convert(H.type);let Nt;H.isData3DTexture?(P.setTexture3D(H,0),Nt=w.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(P.setTexture2DArray(H,0),Nt=w.TEXTURE_2D_ARRAY):(P.setTexture2D(H,0),Nt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,H.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,H.unpackAlignment);const pn=w.getParameter(w.UNPACK_ROW_LENGTH),oe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Dn=w.getParameter(w.UNPACK_SKIP_PIXELS),kn=w.getParameter(w.UNPACK_SKIP_ROWS),Ji=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ae.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ae.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Bt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Jt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ee);const Ts=b.isDataArrayTexture||b.isData3DTexture,Se=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const He=_.get(b),Pi=_.get(H),Ne=_.get(He.__renderTarget),Di=_.get(Pi.__renderTarget);it.bindFramebuffer(w.READ_FRAMEBUFFER,Ne.__webglFramebuffer),it.bindFramebuffer(w.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let ws=0;ws<Ut;ws++)Ts&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_.get(b).__webglTexture,$,ee+ws),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,_.get(H).__webglTexture,wt,Re+ws)),w.blitFramebuffer(Bt,Jt,Pt,At,zt,ge,Pt,At,w.DEPTH_BUFFER_BIT,w.NEAREST);it.bindFramebuffer(w.READ_FRAMEBUFFER,null),it.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if($!==0||b.isRenderTargetTexture||_.has(b)){const He=_.get(b),Pi=_.get(H);it.bindFramebuffer(w.READ_FRAMEBUFFER,Ip),it.bindFramebuffer(w.DRAW_FRAMEBUFFER,Up);for(let Ne=0;Ne<Ut;Ne++)Ts?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,He.__webglTexture,$,ee+Ne):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,He.__webglTexture,$),Se?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Pi.__webglTexture,wt,Re+Ne):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Pi.__webglTexture,wt),$!==0?w.blitFramebuffer(Bt,Jt,Pt,At,zt,ge,Pt,At,w.COLOR_BUFFER_BIT,w.NEAREST):Se?w.copyTexSubImage3D(Nt,wt,zt,ge,Re+Ne,Bt,Jt,Pt,At):w.copyTexSubImage2D(Nt,wt,zt,ge,Bt,Jt,Pt,At);it.bindFramebuffer(w.READ_FRAMEBUFFER,null),it.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Se?b.isDataTexture||b.isData3DTexture?w.texSubImage3D(Nt,wt,zt,ge,Re,Pt,At,Ut,_e,Xe,Ae.data):H.isCompressedArrayTexture?w.compressedTexSubImage3D(Nt,wt,zt,ge,Re,Pt,At,Ut,_e,Ae.data):w.texSubImage3D(Nt,wt,zt,ge,Re,Pt,At,Ut,_e,Xe,Ae):b.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,wt,zt,ge,Pt,At,_e,Xe,Ae.data):b.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,wt,zt,ge,Ae.width,Ae.height,_e,Ae.data):w.texSubImage2D(w.TEXTURE_2D,wt,zt,ge,Pt,At,_e,Xe,Ae);w.pixelStorei(w.UNPACK_ROW_LENGTH,pn),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,oe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Dn),w.pixelStorei(w.UNPACK_SKIP_ROWS,kn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ji),wt===0&&H.generateMipmaps&&w.generateMipmap(Nt),it.unbindTexture()},this.initRenderTarget=function(b){_.get(b).__webglFramebuffer===void 0&&P.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?P.setTextureCube(b,0):b.isData3DTexture?P.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?P.setTexture2DArray(b,0):P.setTexture2D(b,0),it.unbindTexture()},this.resetState=function(){D=0,F=0,z=null,it.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}class Gy extends Ie{constructor(t=50,e=10,i=!0,s=!0,r=!0,o=!0,a=!0){const l=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,3,16,17,18,7,19,20,21,11,22,23,24,15,25,26,27,18,28,29,30,21,31,32,33,24,34,35,36,27,37,38,39,30,40,41,0,33,42,43,4,36,44,45,8,39,46,47,12,12,13,14,15,48,49,50,51,52,53,54,55,56,57,58,59,15,25,26,27,51,60,61,62,55,63,64,65,59,66,67,68,27,37,38,39,62,69,70,71,65,72,73,74,68,75,76,77,39,46,47,12,71,78,79,48,74,80,81,52,77,82,83,56,56,57,58,59,84,85,86,87,88,89,90,91,92,93,94,95,59,66,67,68,87,96,97,98,91,99,100,101,95,102,103,104,68,75,76,77,98,105,106,107,101,108,109,110,104,111,112,113,77,82,83,56,107,114,115,84,110,116,117,88,113,118,119,92,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,123,136,137,120,127,138,139,124,131,140,141,128,135,142,143,132,132,133,134,135,144,145,146,147,148,149,150,151,68,152,153,154,135,142,143,132,147,155,156,144,151,157,158,148,154,159,160,68,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,164,177,178,161,168,179,180,165,172,181,182,169,176,183,184,173,173,174,175,176,185,186,187,188,189,190,191,192,193,194,195,196,176,183,184,173,188,197,198,185,192,199,200,189,196,201,202,193,203,203,203,203,204,205,206,207,208,208,208,208,209,210,211,212,203,203,203,203,207,213,214,215,208,208,208,208,212,216,217,218,203,203,203,203,215,219,220,221,208,208,208,208,218,222,223,224,203,203,203,203,221,225,226,204,208,208,208,208,224,227,228,209,209,210,211,212,229,230,231,232,233,234,235,236,237,238,239,240,212,216,217,218,232,241,242,243,236,244,245,246,240,247,248,249,218,222,223,224,243,250,251,252,246,253,254,255,249,256,257,258,224,227,228,209,252,259,260,229,255,261,262,233,258,263,264,237,265,265,265,265,266,267,268,269,270,271,272,273,92,119,118,113,265,265,265,265,269,274,275,276,273,277,278,279,113,112,111,104,265,265,265,265,276,280,281,282,279,283,284,285,104,103,102,95,265,265,265,265,282,286,287,266,285,288,289,270,95,94,93,92],c=[1.4,0,2.4,1.4,-.784,2.4,.784,-1.4,2.4,0,-1.4,2.4,1.3375,0,2.53125,1.3375,-.749,2.53125,.749,-1.3375,2.53125,0,-1.3375,2.53125,1.4375,0,2.53125,1.4375,-.805,2.53125,.805,-1.4375,2.53125,0,-1.4375,2.53125,1.5,0,2.4,1.5,-.84,2.4,.84,-1.5,2.4,0,-1.5,2.4,-.784,-1.4,2.4,-1.4,-.784,2.4,-1.4,0,2.4,-.749,-1.3375,2.53125,-1.3375,-.749,2.53125,-1.3375,0,2.53125,-.805,-1.4375,2.53125,-1.4375,-.805,2.53125,-1.4375,0,2.53125,-.84,-1.5,2.4,-1.5,-.84,2.4,-1.5,0,2.4,-1.4,.784,2.4,-.784,1.4,2.4,0,1.4,2.4,-1.3375,.749,2.53125,-.749,1.3375,2.53125,0,1.3375,2.53125,-1.4375,.805,2.53125,-.805,1.4375,2.53125,0,1.4375,2.53125,-1.5,.84,2.4,-.84,1.5,2.4,0,1.5,2.4,.784,1.4,2.4,1.4,.784,2.4,.749,1.3375,2.53125,1.3375,.749,2.53125,.805,1.4375,2.53125,1.4375,.805,2.53125,.84,1.5,2.4,1.5,.84,2.4,1.75,0,1.875,1.75,-.98,1.875,.98,-1.75,1.875,0,-1.75,1.875,2,0,1.35,2,-1.12,1.35,1.12,-2,1.35,0,-2,1.35,2,0,.9,2,-1.12,.9,1.12,-2,.9,0,-2,.9,-.98,-1.75,1.875,-1.75,-.98,1.875,-1.75,0,1.875,-1.12,-2,1.35,-2,-1.12,1.35,-2,0,1.35,-1.12,-2,.9,-2,-1.12,.9,-2,0,.9,-1.75,.98,1.875,-.98,1.75,1.875,0,1.75,1.875,-2,1.12,1.35,-1.12,2,1.35,0,2,1.35,-2,1.12,.9,-1.12,2,.9,0,2,.9,.98,1.75,1.875,1.75,.98,1.875,1.12,2,1.35,2,1.12,1.35,1.12,2,.9,2,1.12,.9,2,0,.45,2,-1.12,.45,1.12,-2,.45,0,-2,.45,1.5,0,.225,1.5,-.84,.225,.84,-1.5,.225,0,-1.5,.225,1.5,0,.15,1.5,-.84,.15,.84,-1.5,.15,0,-1.5,.15,-1.12,-2,.45,-2,-1.12,.45,-2,0,.45,-.84,-1.5,.225,-1.5,-.84,.225,-1.5,0,.225,-.84,-1.5,.15,-1.5,-.84,.15,-1.5,0,.15,-2,1.12,.45,-1.12,2,.45,0,2,.45,-1.5,.84,.225,-.84,1.5,.225,0,1.5,.225,-1.5,.84,.15,-.84,1.5,.15,0,1.5,.15,1.12,2,.45,2,1.12,.45,.84,1.5,.225,1.5,.84,.225,.84,1.5,.15,1.5,.84,.15,-1.6,0,2.025,-1.6,-.3,2.025,-1.5,-.3,2.25,-1.5,0,2.25,-2.3,0,2.025,-2.3,-.3,2.025,-2.5,-.3,2.25,-2.5,0,2.25,-2.7,0,2.025,-2.7,-.3,2.025,-3,-.3,2.25,-3,0,2.25,-2.7,0,1.8,-2.7,-.3,1.8,-3,-.3,1.8,-3,0,1.8,-1.5,.3,2.25,-1.6,.3,2.025,-2.5,.3,2.25,-2.3,.3,2.025,-3,.3,2.25,-2.7,.3,2.025,-3,.3,1.8,-2.7,.3,1.8,-2.7,0,1.575,-2.7,-.3,1.575,-3,-.3,1.35,-3,0,1.35,-2.5,0,1.125,-2.5,-.3,1.125,-2.65,-.3,.9375,-2.65,0,.9375,-2,-.3,.9,-1.9,-.3,.6,-1.9,0,.6,-3,.3,1.35,-2.7,.3,1.575,-2.65,.3,.9375,-2.5,.3,1.125,-1.9,.3,.6,-2,.3,.9,1.7,0,1.425,1.7,-.66,1.425,1.7,-.66,.6,1.7,0,.6,2.6,0,1.425,2.6,-.66,1.425,3.1,-.66,.825,3.1,0,.825,2.3,0,2.1,2.3,-.25,2.1,2.4,-.25,2.025,2.4,0,2.025,2.7,0,2.4,2.7,-.25,2.4,3.3,-.25,2.4,3.3,0,2.4,1.7,.66,.6,1.7,.66,1.425,3.1,.66,.825,2.6,.66,1.425,2.4,.25,2.025,2.3,.25,2.1,3.3,.25,2.4,2.7,.25,2.4,2.8,0,2.475,2.8,-.25,2.475,3.525,-.25,2.49375,3.525,0,2.49375,2.9,0,2.475,2.9,-.15,2.475,3.45,-.15,2.5125,3.45,0,2.5125,2.8,0,2.4,2.8,-.15,2.4,3.2,-.15,2.4,3.2,0,2.4,3.525,.25,2.49375,2.8,.25,2.475,3.45,.15,2.5125,2.9,.15,2.475,3.2,.15,2.4,2.8,.15,2.4,0,0,3.15,.8,0,3.15,.8,-.45,3.15,.45,-.8,3.15,0,-.8,3.15,0,0,2.85,.2,0,2.7,.2,-.112,2.7,.112,-.2,2.7,0,-.2,2.7,-.45,-.8,3.15,-.8,-.45,3.15,-.8,0,3.15,-.112,-.2,2.7,-.2,-.112,2.7,-.2,0,2.7,-.8,.45,3.15,-.45,.8,3.15,0,.8,3.15,-.2,.112,2.7,-.112,.2,2.7,0,.2,2.7,.45,.8,3.15,.8,.45,3.15,.112,.2,2.7,.2,.112,2.7,.4,0,2.55,.4,-.224,2.55,.224,-.4,2.55,0,-.4,2.55,1.3,0,2.55,1.3,-.728,2.55,.728,-1.3,2.55,0,-1.3,2.55,1.3,0,2.4,1.3,-.728,2.4,.728,-1.3,2.4,0,-1.3,2.4,-.224,-.4,2.55,-.4,-.224,2.55,-.4,0,2.55,-.728,-1.3,2.55,-1.3,-.728,2.55,-1.3,0,2.55,-.728,-1.3,2.4,-1.3,-.728,2.4,-1.3,0,2.4,-.4,.224,2.55,-.224,.4,2.55,0,.4,2.55,-1.3,.728,2.55,-.728,1.3,2.55,0,1.3,2.55,-1.3,.728,2.4,-.728,1.3,2.4,0,1.3,2.4,.224,.4,2.55,.4,.224,2.55,.728,1.3,2.55,1.3,.728,2.55,.728,1.3,2.4,1.3,.728,2.4,0,0,0,1.425,0,0,1.425,.798,0,.798,1.425,0,0,1.425,0,1.5,0,.075,1.5,.84,.075,.84,1.5,.075,0,1.5,.075,-.798,1.425,0,-1.425,.798,0,-1.425,0,0,-.84,1.5,.075,-1.5,.84,.075,-1.5,0,.075,-1.425,-.798,0,-.798,-1.425,0,0,-1.425,0,-1.5,-.84,.075,-.84,-1.5,.075,0,-1.5,.075,.798,-1.425,0,1.425,-.798,0,.84,-1.5,.075,1.5,-.84,.075];super(),e=Math.max(2,Math.floor(e));const u=1.3,f=3.15*(a?1:u)/2,p=t/f;let g=i?(8*e-4)*e:0;g+=s?(16*e-4)*e:0,g+=r?40*e*e:0;const v=new Uint32Array(g*3);let m=i?4:0;m+=s?8:0,m+=r?20:0,m*=(e+1)*(e+1);const d=new Float32Array(m*3),x=new Float32Array(m*3),E=new Float32Array(m*2),y=new me;y.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0);const A=[],C=[],L=[],S=[],T=[],Y=[],D=[],F=[],z=[],q=new k;let G,X,B,rt,ht=0,yt=0;const bt=new k,St=new me,Yt=new me,ce=new Ee,ae=new Ee,lt=new Ee,mt=new Ee,_t=new k,Wt=new k,Ot=y.clone();Ot.transpose();const kt=(nt,J,it)=>!(d[nt*3]===d[J*3]&&d[nt*3+1]===d[J*3+1]&&d[nt*3+2]===d[J*3+2]||d[nt*3]===d[it*3]&&d[nt*3+1]===d[it*3+1]&&d[nt*3+2]===d[it*3+2]||d[J*3]===d[it*3]&&d[J*3+1]===d[it*3+1]&&d[J*3+2]===d[it*3+2]);for(let nt=0;nt<3;nt++)Y[nt]=new me;const R=r?0:20,U=i?32:28,W=e+1;let ot=0,Q=0,st=0,w=0,ut=0;for(let nt=R;nt<U;nt++)if(s||nt<20||nt>=28){for(let J=0;J<3;J++){for(let it=0;it<4;it++)for(let M=0;M<4;M++)A[M*4+it]=c[l[nt*16+it*4+M]*3+J],o&&nt>=20&&nt<28&&J!==2&&(A[M*4+it]*=1.077),!a&&J===2&&(A[M*4+it]*=u);St.set(A[0],A[1],A[2],A[3],A[4],A[5],A[6],A[7],A[8],A[9],A[10],A[11],A[12],A[13],A[14],A[15]),Yt.multiplyMatrices(St,y),Y[J].multiplyMatrices(Ot,Yt)}for(let J=0;J<=e;J++){const it=J/e;for(let M=0;M<=e;M++){const _=M/e;for(rt=4,X=B=1;rt--;)C[rt]=X,L[rt]=B,X*=it,B*=_,rt===3?(S[rt]=T[rt]=0,ht=yt=1):(S[rt]=ht*(3-rt),T[rt]=yt*(3-rt),ht*=it,yt*=_);ce.fromArray(C),ae.fromArray(L),lt.fromArray(S),mt.fromArray(T);for(let P=0;P<3;P++)G=ce.clone(),G.applyMatrix4(Y[P]),D[P]=G.dot(ae),G=lt.clone(),G.applyMatrix4(Y[P]),F[P]=G.dot(ae),G=ce.clone(),G.applyMatrix4(Y[P]),z[P]=G.dot(mt);_t.fromArray(F),Wt.fromArray(z),q.crossVectors(Wt,_t),q.normalize(),D[0]===0&&D[1]===0?bt.set(0,D[2]>f?1:-1,0):bt.set(q.x,q.z,-q.y),d[Q++]=p*D[0],d[Q++]=p*(D[2]-f),d[Q++]=-p*D[1],x[st++]=bt.x,x[st++]=bt.y,x[st++]=bt.z,E[w++]=1-_,E[w++]=1-it}}for(let J=0;J<e;J++)for(let it=0;it<e;it++){const M=ot*W*W+J*W+it,_=M+1,P=_+W,j=M+W;kt(M,_,P)&&(v[ut++]=M,v[ut++]=_,v[ut++]=P),kt(M,P,j)&&(v[ut++]=M,v[ut++]=P,v[ut++]=j)}ot++}this.setIndex(new he(v,1)),this.setAttribute("position",new he(d,3)),this.setAttribute("normal",new he(x,3)),this.setAttribute("uv",new he(E,2)),this.computeBoundingSphere()}}const Oc=or("");let yf=0;function Ws(n,t=3e3){Oc.value=n,window.clearTimeout(yf),yf=window.setTimeout(()=>{Oc.value=""},t)}function Wy(){return{message:Oc,showToast:Ws}}const bf={type:"change"},bu={type:"start"},wp={type:"end"},No=new eo,Ef=new Vi,Xy=Math.cos(70*a_.DEG2RAD),De=new k,an=2*Math.PI,ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Al=1e-6;class Yy extends j_{constructor(t,e=null){super(t,e),this.state=ve.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zs.ROTATE,MIDDLE:Zs.DOLLY,RIGHT:Zs.PAN},this.touches={ONE:Gs.ROTATE,TWO:Gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new ji,this._lastTargetPosition=new k,this._quat=new ji().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zh,this._sphericalDelta=new Zh,this._scale=1,this._panOffset=new k,this._rotateStart=new Gt,this._rotateEnd=new Gt,this._rotateDelta=new Gt,this._panStart=new Gt,this._panEnd=new Gt,this._panDelta=new Gt,this._dollyStart=new Gt,this._dollyEnd=new Gt,this._dollyDelta=new Gt,this._dollyDirection=new k,this._mouse=new Gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jy.bind(this),this._onPointerDown=qy.bind(this),this._onPointerUp=$y.bind(this),this._onContextMenu=n1.bind(this),this._onMouseWheel=Jy.bind(this),this._onKeyDown=Qy.bind(this),this._onTouchStart=t1.bind(this),this._onTouchMove=e1.bind(this),this._onMouseDown=Zy.bind(this),this._onMouseMove=Ky.bind(this),this._interceptControlDown=i1.bind(this),this._interceptControlUp=s1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bf),this.update(),this.state=ve.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;De.copy(e).sub(this.target),De.applyQuaternion(this._quat),this._spherical.setFromVector3(De),this.autoRotate&&this.state===ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=an:i>Math.PI&&(i-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(De.setFromSpherical(this._spherical),De.applyQuaternion(this._quatInverse),e.copy(this.target).add(De),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=De.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=De.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(No.origin.copy(this.object.position),No.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(No.direction))<Xy?this.object.lookAt(this.target):(Ef.setFromNormalAndCoplanarPoint(this.object.up,this.target),No.intersectPlane(Ef,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Al||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Al||this._lastTargetPosition.distanceToSquared(this.target)>Al?(this.dispatchEvent(bf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?an/60*this.autoRotateSpeed*t:an/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){De.setFromMatrixColumn(e,0),De.multiplyScalar(-t),this._panOffset.add(De)}_panUp(t,e){this.screenSpacePanning===!0?De.setFromMatrixColumn(e,1):(De.setFromMatrixColumn(e,0),De.crossVectors(this.object.up,De)),De.multiplyScalar(t),this._panOffset.add(De)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;De.copy(s).sub(this.target);let r=De.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function qy(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function jy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function $y(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wp),this.state=ve.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Zy(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ve.DOLLY;break;case Zs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ve.ROTATE}break;case Zs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ve.PAN}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(bu)}function Ky(n){switch(this.state){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Jy(n){this.enabled===!1||this.enableZoom===!1||this.state!==ve.NONE||(n.preventDefault(),this.dispatchEvent(bu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(wp))}function Qy(n){this.enabled!==!1&&this._handleKeyDown(n)}function t1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ve.TOUCH_ROTATE;break;case Gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ve.TOUCH_PAN;break;default:this.state=ve.NONE}break;case 2:switch(this.touches.TWO){case Gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ve.TOUCH_DOLLY_PAN;break;case Gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ve.TOUCH_DOLLY_ROTATE;break;default:this.state=ve.NONE}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(bu)}function e1(n){switch(this._trackPointer(n),this.state){case ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ve.NONE}}function n1(n){this.enabled!==!1&&n.preventDefault()}function i1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function s1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class r1{constructor(t){V(this,"renderer");V(this,"scene");V(this,"camera");V(this,"controls");V(this,"timer");V(this,"raf",0);V(this,"container");V(this,"resizeObs");V(this,"dirLight",null);V(this,"ambientLight",null);V(this,"onBeforeRender",null);this.container=t,this.scene=new up,this.timer=new W_,this.renderer=new ky({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0,logarithmicDepthBuffer:!0}),this.camera=new wn(50,t.clientWidth/t.clientHeight,1,3e4),this.controls=new Yy(this.camera,this.renderer.domElement),this.controls.target.set(0,60,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=300,this.controls.maxDistance=16e3,this.controls.maxPolarAngle=Math.PI*.495,this.controls.update(),this.resizeObs=new ResizeObserver(()=>this.onResize())}init(){this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.toneMapping=ru,this.renderer.toneMappingExposure=1.05,this.renderer.domElement.style.touchAction="none",this.container.appendChild(this.renderer.domElement),this.scene.background=new qt("#0b1020"),this.scene.fog=new _u("#0b1020",4e3,13e3),this.camera.position.set(0,4e3,3800),this.buildLights(),this.resizeObs.observe(this.container),this.startLoop()}add(t){this.scene.add(t)}buildBasePlane(t,e){const i=new ar(t*1.1,e*1.1);i.rotateX(-Math.PI/2);const s=new vu({color:"#555",transparent:!0,opacity:.6});this.scene.add(new dn(i,s))}updateLights(){const t=N.globalBrightness*Math.PI;this.dirLight&&(this.dirLight.intensity=t),this.ambientLight&&(this.ambientLight.intensity=t)}render(){this.renderer.render(this.scene,this.camera)}dispose(){var t;cancelAnimationFrame(this.raf),(t=this.resizeObs)==null||t.disconnect(),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.parentElement===this.container&&this.container.removeChild(this.renderer.domElement))}getRenderer(){return this.renderer}getScene(){return this.scene}getCamera(){return this.camera}getControls(){return this.controls}getDirLight(){return this.dirLight}buildLights(){const t=new V_("#fff2dd");t.position.set(3e3,4e3,-2e3),this.scene.add(t),this.dirLight=t;const e=new H_("#ffffff");this.scene.add(e),this.ambientLight=e,this.updateLights()}onResize(){const t=this.container.clientWidth,e=this.container.clientHeight;t===0||e===0||(this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e))}startLoop(){const t=()=>{var i;this.raf=requestAnimationFrame(t),this.timer.update();const e=Math.min(this.timer.getDelta(),.05);(i=this.onBeforeRender)==null||i.call(this,e),this.controls.update(),this.renderer.render(this.scene,this.camera)};t()}}class o1{constructor(t=4e3,e=()=>0,i){V(this,"group",new Gi);V(this,"geo");V(this,"mat");V(this,"points");V(this,"pos");V(this,"centers");V(this,"count");V(this,"halfX");V(this,"halfZ");V(this,"surface");V(this,"speed",800);V(this,"brushMinFallHeight",50);V(this,"brushMaxFallHeight",1e3);V(this,"windDirX",.6);V(this,"windDirZ",.4);V(this,"windTilt",.4);this.count=t,this.halfX=Ht.x/2,this.halfZ=Ht.z/2,this.surface=e,this.pos=new Float32Array(t*3),this.centers=new Float32Array(t*5),this.geo=new Ie,this.geo.setAttribute("position",new he(this.pos,3)),this.mat=new Mu({color:"#cfe6ff",size:8,map:null,transparent:!0,opacity:.7,depthWrite:!1,sizeAttenuation:!1}),i&&a1(i).then(s=>{this.mat.map=s,this.mat.needsUpdate=!0}).catch(()=>{}),this.points=new dp(this.geo,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=3,this.points.visible=!1,this.group.add(this.points),this.hideAll()}hideAll(){this.centers.fill(-99999),this.pos.fill(-99999),this.markNeedsUpdate()}markNeedsUpdate(){this.geo.attributes.position.needsUpdate=!0}setMode(t){if(t===null){this.points.visible=!1;return}this.points.visible||(this.points.visible=!0,this.hideAll())}update(t,e,i,s,r){if(!this.points.visible)return;const o=this.speed*t;for(let a=0;a<this.count;a++){let l=this.centers[a*5],c=this.centers[a*5+1],u=this.centers[a*5+2],h=this.centers[a*5+3],f=this.centers[a*5+4],p=this.surface(l,u);if(c<p+1||l<-this.halfX||l>this.halfX||u<-this.halfZ||u>this.halfZ){let g;if(e==="rain")l=(Math.random()*2-1)*this.halfX,u=(Math.random()*2-1)*this.halfZ,g=300+Math.random()*500;else{const v=Math.random()*Math.PI*2,m=Math.sqrt(Math.random())*r;l=i+Math.cos(v)*m,u=s+Math.sin(v)*m,g=this.brushMinFallHeight+Math.random()*(this.brushMaxFallHeight-this.brushMinFallHeight)}if(e==="rain"){const v=1/Math.hypot(this.windDirX,this.windDirZ);h=this.windDirX*v*this.windTilt,f=this.windDirZ*v*this.windTilt,l=Math.max(-this.halfX,Math.min(this.halfX,l-h*g)),u=Math.max(-this.halfZ,Math.min(this.halfZ,u-f*g))}else h=0,f=0;p=this.surface(l,u),c=p+g}else c-=o,l+=h*o,u+=f*o;this.centers[a*5]=l,this.centers[a*5+1]=c,this.centers[a*5+2]=u,this.centers[a*5+3]=h,this.centers[a*5+4]=f,this.pos[a*3]=l,this.pos[a*3+1]=c,this.pos[a*3+2]=u}this.markNeedsUpdate()}dispose(){this.group.clear(),this.geo.dispose(),this.mat.dispose()}}function a1(n){return new Promise((t,e)=>{const i=new Image;i.crossOrigin="anonymous",i.onload=()=>{const s=new yu(i);s.colorSpace=Ss,t(s)},i.onerror=e,i.src=n})}const mi=1e-4;function l1(n,t,e){const i=n.length;if(i===0)return Number.NEGATIVE_INFINITY;const s=Float64Array.from(n);s.sort();let r=0,o=s[0];for(let a=1;a<=i&&(r+=s[a-1],o=t/(e*a)+r/a,!(a<i&&o<=s[a]));a++);return o}function En(n,t,e){return n+(t-n)*e}function Tf(n,t,e){const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)}function Cl(n,t,e,i,s){const r=n+(t-n)*i;return r+(e-r)*s}function Xi(n,t){return Math.min(Math.max(n,0),t-1)}const wf=4;function c1(n,t,e,i,s){const r=n-e,o=t-i;return Math.exp(-(r*r+o*o)/Math.max(2*s*s,1))}function Bc(n,t,e,i,s,r,o,a){const l=Ht.x/2,c=Ht.z/2,u=Math.max(e,o*wf),h=Math.max(i,o*wf),f=Xi(Math.floor((s-u+l)/e),n),p=Xi(Math.floor((s+u+l)/e),n),g=Xi(Math.floor((r-h+c)/i),t),v=Xi(Math.floor((r+h+c)/i),t);for(let m=g;m<=v;m++){const d=(m+.5)*i-c;for(let x=f;x<=p;x++){const E=(x+.5)*e-l;a(x,m,c1(E,d,s,r,o))}}}function zc(n,t,e,i,s,r,o){let a=0;return Bc(n,t,e,i,s,r,o,(l,c,u)=>{a+=u}),Math.max(1e-6,a*e*i)}const Rl={f0:.15,fc:.25,k:.8},Pl={f0:.5,fc:.6,k:1},Dl={f0:1,fc:1,k:1.2},u1=.2,h1=.45,f1=.55,d1=.8;function Ap(n,t){const e=n.length,i=new Float32Array(e),s=new Float32Array(e),r=new Float32Array(e),o=t>1e-6?1/t:0;for(let a=0;a<e;a++){const l=Math.min(1,Math.max(0,n[a]*o)),c=Tf(u1,h1,l),u=Tf(f1,d1,l);i[a]=Cl(Rl.f0,Pl.f0,Dl.f0,c,u),s[a]=Cl(Rl.fc,Pl.fc,Dl.fc,c,u),r[a]=Cl(Rl.k,Pl.k,Dl.k,c,u)}return{f0Mul:i,fcMul:s,kMul:r}}const Af=.05;class p1{constructor(t,e,i){V(this,"Nx",256);V(this,"Nz",256);V(this,"cellX",Ht.x/256);V(this,"cellZ",Ht.z/256);V(this,"u",new Float32Array(0));V(this,"v",new Float32Array(0));V(this,"uPrev",new Float32Array(0));V(this,"vPrev",new Float32Array(0));V(this,"h",new Float32Array(0));V(this,"bed",new Float32Array(0));V(this,"fluxX",new Float32Array(0));V(this,"fluxZ",new Float32Array(0));V(this,"simTime",0);V(this,"timeAccumulator",0);V(this,"maxWater",0);V(this,"fieldVersion",0);V(this,"wetTime",new Float32Array(0));V(this,"infiltratedVolume",0);V(this,"volume",0);V(this,"soil",{f0Mul:new Float32Array(0),fcMul:new Float32Array(0),kMul:new Float32Array(0)});this.sampleFn=t,this.data=e,this.params=i,this.setSize(i.simNx,i.simNz)}get N(){return this.Nx}get cell(){return this.cellX}setSize(t,e){this.Nx=t,this.Nz=e,this.cellX=Ht.x/t,this.cellZ=Ht.z/e;const i=t*e;this.u=new Float32Array(i),this.v=new Float32Array(i),this.uPrev=new Float32Array(i),this.vPrev=new Float32Array(i),this.h=new Float32Array(i),this.fluxX=new Float32Array(i),this.fluxZ=new Float32Array(i),this.bed=new Float32Array(i),this.wetTime=new Float32Array(i);const s=Ht.x/2,r=Ht.z/2;for(let o=0;o<e;o++)for(let a=0;a<t;a++){const l=(a+.5)*this.cellX-s,c=(o+.5)*this.cellZ-r;this.bed[o*t+a]=this.sampleFn(l,c)-this.data.minElev}this.soil=Ap(this.bed,this.data.maxElev-this.data.minElev),this.reset()}reset(){this.u.fill(0),this.v.fill(0),this.h.fill(0),this.wetTime.fill(0),this.infiltratedVolume=0,this.simTime=0,this.volume=0,this.maxWater=0,this.fieldVersion++}addWater(t,e,i,s,r){this.addWaterDepth(t,e,Math.max(0,i*s),r)}addVolume(t,e,i,s){if(i<=0)return;const r=zc(this.Nx,this.Nz,this.cellX,this.cellZ,t,e,s);this.addWaterDepth(t,e,i/r,s)}addWaterDepth(t,e,i,s){if(i<=0)return;const r=this.Nx,o=this.Nz;Bc(r,o,this.cellX,this.cellZ,t,e,s,(a,l,c)=>{this.h[l*r+a]+=i*c}),this.updateStatsFromArrays(),this.fieldVersion++}addPush(t,e,i,s,r,o){const a=Math.hypot(i,s);if(a<=1e-4)return;const l=Math.min(18,a*r*.7),c=this.Nx,u=this.Nz;Bc(c,u,this.cellX,this.cellZ,t,e,o,(h,f,p)=>{const g=f*c+h;this.u[g]+=i/a*l*p,this.v[g]+=s/a*l*p}),this.updateStatsFromArrays(),this.fieldVersion++}addRain(t){const e=this.params.rain;if(e<=0)return;const s=e/1e3/3600*t;this.h=this.h.map(r=>r+s)}applyInfiltration(t){if(!this.params.infiltration||t<=0)return;const{h:e,wetTime:i,soil:s}=this,r=this.params.infilF0/1e3/3600,o=this.params.infilFc/1e3/3600,a=this.params.infilK/3600;let l=0;for(let c=0;c<e.length;c++){if(e[c]<=mi)continue;const u=o*s.fcMul[c]+(r*s.f0Mul[c]-o*s.fcMul[c])*Math.exp(-a*s.kMul[c]*i[c]),h=Math.min(e[c],u*t);e[c]-=h,l+=h,e[c]>mi&&(i[c]+=t)}this.infiltratedVolume+=l*this.cellX*this.cellZ}fillToLevel(t){const{bed:e,h:i,u:s,v:r}=this;for(let o=0;o<i.length;o++){const a=t-e[o];a>i[o]&&(i[o]=a),s[o]=r[o]=0}this.updateStatsFromArrays(),this.fieldVersion++}step(t){const e=this.params,i=Math.sqrt(Math.max(1,e.gravity*Math.max(this.maxWater,1))),s=Math.min(this.cellX,this.cellZ)*.22/Math.max(1,e.maxSpeed,i);for(this.timeAccumulator+=Math.max(0,t*e.timeScale);this.timeAccumulator>=s;)this.timeAccumulator-=s,this.simTime+=s,this.applyGravity(s,e),this.advectVelocity(s),this.applyFriction(s,e),this.applyInfiltration(s),this.conservativeContinuity(s,e),this.applyBoundaryDrain(s),this.dampDryCellVelocity(),this.clampVelocity(),this.zeroBoundaryVelocity();this.updateStatsFromArrays(),this.fieldVersion++}dampDryCellVelocity(){const{h:t,u:e,v:i}=this;for(let s=0;s<t.length;s++)t[s]<=mi&&(e[s]*=.35,i[s]*=.35)}applyGravity(t,e){const{Nx:i,Nz:s,cellX:r,cellZ:o,u:a,v:l,h:c,bed:u}=this,h=e.gravity;for(let f=0;f<s;f++)for(let p=0;p<i;p++){const g=f*i+p,v=Math.max(0,p-1),m=Math.min(i-1,p+1),d=Math.max(0,f-1),x=Math.min(s-1,f+1),E=(u[f*i+m]+c[f*i+m]-u[f*i+v]-c[f*i+v])/(2*r),y=(u[x*i+p]+c[x*i+p]-u[d*i+p]-c[d*i+p])/(2*o);a[g]-=t*h*E,l[g]-=t*h*y}}advectVelocity(t){const{Nx:e,Nz:i,cellX:s,cellZ:r,u:o,v:a}=this;for(let l=0;l<i;l++)for(let c=0;c<e;c++){const u=l*e+c,h=c-t*o[u]/s,f=l-t*a[u]/r;this.uPrev[u]=Cf(o,h,f,e,i),this.vPrev[u]=Cf(a,h,f,e,i)}[this.u,this.uPrev]=[this.uPrev,this.u],[this.v,this.vPrev]=[this.vPrev,this.v]}applyFriction(t,e){const i=1/(1+t*e.friction);this.u=this.u.map(s=>s*i),this.v=this.v.map(s=>s*i)}conservativeContinuity(t,e){const{Nx:i,Nz:s,cellX:r,cellZ:o}=this,a=this.u,l=this.v,c=this.h,u=this.fluxX,h=this.fluxZ,f=e.drainBoundary,p=t/r,g=t/o;for(let v=0;v<s;v++)for(let m=0;m<i-1;m++){const d=v*i+m,x=.5*(a[d]+a[d+1]);x>0?u[d]=c[d]<mi?0:x*c[d]:u[d]=c[d+1]<mi?0:x*c[d+1]}for(let v=0;v<s-1;v++)for(let m=0;m<i;m++){const d=v*i+m,x=.5*(l[d]+l[d+i]);x>0?h[d]=c[d]<mi?0:x*c[d]:h[d]=c[d+i]<mi?0:x*c[d+i]}for(let v=0;v<s;v++)for(let m=0;m<i;m++){const d=v*i+m,x=m===0,E=m===i-1,y=v===0,A=v===s-1,C=x?0:u[d-1],L=y?0:h[d-i];let S,T;f?(S=E?Math.max(0,a[d]*c[d]):x?Math.max(0,-a[d]*c[d]):u[d],T=A?Math.max(0,l[d]*c[d]):y?Math.max(0,-l[d]*c[d]):h[d]):(S=E?0:u[d],T=A?0:h[d]),c[d]+=p*(C-S)+g*(L-T),c[d]<0&&(c[d]=0)}}clampVelocity(){const t=this.params.maxSpeed,e=t*t,{u:i,v:s}=this;for(let r=0;r<i.length;r++){const o=i[r]*i[r]+s[r]*s[r];if(o>e){const a=t/Math.sqrt(o);i[r]*=a,s[r]*=a}}}zeroBoundaryVelocity(){if(this.params.drainBoundary)return;const{Nx:t,Nz:e,u:i,v:s}=this;for(let r=0;r<e;r++)i[r*t]=0,i[r*t+t-1]=0;for(let r=0;r<t;r++)s[r]=0,s[(e-1)*t+r]=0}applyBoundaryDrain(t){if(!this.params.drainBoundary||t<=0)return;const{Nx:e,Nz:i,h:s}=this,r=Math.max(1,e*Af),o=Math.max(1,i*Af),a=Math.min(r,o);for(let l=0;l<i;l++)for(let c=0;c<e;c++){const u=Math.min(c,e-1-c),h=Math.min(l,i-1-l),f=Math.min(u,h);if(f>=a)continue;const p=f/a,g=p*p*(3-2*p);s[l*e+c]*=Math.exp(-.5*(1-g)*t)}}getVolume(){return this.volume}updateStatsFromArrays(){let t=0,e=0;for(const i of this.h)t+=i,i>e&&(e=i);this.volume=t*this.cellX*this.cellZ,this.maxWater=e}}function Cf(n,t,e,i,s){const r=Xi(Math.floor(t),i),o=Xi(Math.floor(t)+1,i),a=Xi(Math.floor(e),s),l=Xi(Math.floor(e)+1,s),c=t-Math.floor(t),u=e-Math.floor(e),h=n[a*i+r],f=n[a*i+o],p=n[l*i+r],g=n[l*i+o],v=h+(f-h)*c,m=p+(g-p)*c;return v+(m-v)*u}const m1=`varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,g1=`precision highp float;\r
\r
// 状态纹理：r=水深 h，g/b=流速 vel.xy，a=湿润时间 wetTime(供下渗积分)\r
uniform sampler2D uState;\r
// 河床高程纹理：r 通道存地形高程\r
uniform sampler2D uBed;\r
// 单个纹素尺寸(1/网格分辨率)，用于取四周邻居\r
uniform vec2 uTexel;\r
// 时间步长\r
uniform float uDt;\r
// 单个网格的世界尺寸(米)\r
uniform vec2 uCell;\r
// 世界范围(米)\r
uniform vec2 uWorldSize;\r
// 重力加速度\r
uniform float uGravity;\r
// 底床摩擦系数(线性衰减)\r
uniform float uFriction;\r
// 流速上限(数值稳定性)\r
uniform float uMaxSpeed;\r
// 降雨率(米/秒)，>0 表示均匀降雨\r
uniform float uRainRate;\r
// 边界排水开关：<0.5 为封闭边界(速度归零)，>=0.5 为开放排边界(边缘指数衰减)\r
uniform float uDrain;\r
// 下渗开关\r
uniform float uInfilOn;\r
// Horton 下渗参数：初值能力 f0 / 稳值能力 fc / 衰减系数 k\r
uniform float uInfilF0;\r
uniform float uInfilFc;\r
uniform float uInfilK;\r
// 土壤参数纹理：r=f0 乘数，g=fc 乘数，b=k 乘数\r
uniform sampler2D uSoil;\r
// 笔刷中心(世界坐标)\r
uniform vec2 uBrushCenter;\r
// 笔刷半径(世界坐标)\r
uniform float uBrushRadius;\r
// 笔刷注水量\r
uniform float uBrushWater;\r
// 笔刷推力(世界坐标方向向量)\r
uniform vec2 uBrushPush;\r
varying vec2 vUv;\r
\r
// 边界排水相关参数\r
const float BOUNDARY_DRAIN_RATE = 0.5;\r
\r
// 读取四周状态，越界则夹紧到边缘(等价于零梯度/反射边界)\r
vec4 readState(vec2 uv) {\r
  return texture2D(uState, clamp(uv, vec2(0.0), vec2(1.0)));\r
}\r
\r
// 读取河床高程，越界夹紧\r
float readBed(vec2 uv) {\r
  return texture2D(uBed, clamp(uv, vec2(0.0), vec2(1.0))).r;\r
}\r
\r
void main() {\r
  // 读取当前网格状态\r
  vec4 s = readState(vUv);\r
  float h = max(s.r, 0.0);\r
  vec2 vel = s.gb;\r
  // dt<=0 时直接透传状态(初始化/拷贝用途)，不做积分\r
  if (uDt <= 0.0) {\r
    gl_FragColor = vec4(h, vel.x, vel.y, s.a);\r
    return;\r
  }\r
\r
  // 取四周邻居(左/右/上/下)的状态与河床高程\r
  vec2 dx = vec2(uTexel.x, 0.0);\r
  vec2 dz = vec2(0.0, uTexel.y);\r
  vec4 sL = readState(vUv - dx);\r
  vec4 sR = readState(vUv + dx);\r
  vec4 sT = readState(vUv - dz);\r
  vec4 sB = readState(vUv + dz);\r
  float bL = readBed(vUv - dx);\r
  float bR = readBed(vUv + dx);\r
  float bT = readBed(vUv - dz);\r
  float bB = readBed(vUv + dz);\r
\r
  // 由水面(河床+水深)梯度计算坡度\r
  float surfaceL = bL + max(sL.r, 0.0);\r
  float surfaceR = bR + max(sR.r, 0.0);\r
  float surfaceT = bT + max(sT.r, 0.0);\r
  float surfaceB = bB + max(sB.r, 0.0);\r
  vec2 slope = vec2(surfaceR - surfaceL, surfaceB - surfaceT) / (2.0 * vec2(uCell.x, uCell.y));\r
\r
  // 半拉格朗日速度对流：先对流再施力，保证回溯使用的是前一帧自洽的速度场\r
  vec2 texSize = vec2(textureSize(uState, 0));\r
  vec2 advectUV = vUv - vel * uDt / (vec2(uCell.x, uCell.y) * texSize);\r
  vec4 sAdvect = readState(advectUV);\r
  vel = sAdvect.gb;\r
\r
  // 重力驱动加速度更新（在对流之后，避免被回溯采样覆盖）\r
  vel -= uGravity * slope * uDt;\r
\r
  // 底床摩擦：隐式衰减速度\r
  vel *= 1.0 / (1.0 + uFriction * uDt);\r
\r
  // 世界坐标与笔刷：高斯权重叠加注水与推力\r
  vec2 world = vec2(vUv.x * uWorldSize.x - uWorldSize.x * 0.5,\r
                    vUv.y * uWorldSize.y - uWorldSize.y * 0.5);\r
  float brushDist = distance(world, uBrushCenter);\r
  float brush = exp(-(brushDist * brushDist) / max(2.0 * uBrushRadius * uBrushRadius, 1.0));\r
  h += uBrushWater * brush;\r
  vel += uBrushPush * brush;\r
  // 均匀降雨\r
  h += uRainRate * uDt;\r
\r
  // Horton 下渗：f = fc + (f0 - fc)·e^(-k·wetTime)，wetTime 存于状态 alpha 通道\r
  if (uInfilOn > 0.5) {\r
    vec4 soil = texture2D(uSoil, vUv);\r
    float cap = soil.g * uInfilFc +\r
      (soil.r * uInfilF0 - soil.g * uInfilFc) *\r
      exp(-soil.b * uInfilK * s.a);\r
    h -= min(h, cap * uDt);\r
  }\r
\r
  // 用迎风格式(中央格式)计算相邻面通量：面速度取两侧平均值，水深取迎风侧；干格不提供通量\r
  float fL = 0.5 * (sL.g + vel.x);\r
  fL = fL > 0.0 ? fL * (sL.r < 0.0001 ? 0.0 : max(sL.r, 0.0))\r
                 : fL * (h < 0.0001 ? 0.0 : h);\r
  float fR = 0.5 * (vel.x + sR.g);\r
  fR = fR > 0.0 ? fR * (h < 0.0001 ? 0.0 : h)\r
                 : fR * (sR.r < 0.0001 ? 0.0 : max(sR.r, 0.0));\r
  float fT = 0.5 * (sT.b + vel.y);\r
  fT = fT > 0.0 ? fT * (sT.r < 0.0001 ? 0.0 : max(sT.r, 0.0))\r
                 : fT * (h < 0.0001 ? 0.0 : h);\r
  float fB = 0.5 * (vel.y + sB.b);\r
  fB = fB > 0.0 ? fB * (h < 0.0001 ? 0.0 : h)\r
                 : fB * (sB.r < 0.0001 ? 0.0 : max(sB.r, 0.0));\r
\r
  // 通量限幅：单面流出不超过本格可支持水量(每面 1/4 上限)，保证质量守恒且 h 不为负\r
  float maxOutX = h * uCell.x / max(uDt, 0.0001) * 0.25;\r
  float maxOutZ = h * uCell.y / max(uDt, 0.0001) * 0.25;\r
  if (fR > 0.0) fR = min(fR, maxOutX);\r
  if (fL < 0.0) fL = max(fL, -maxOutX);\r
  if (fB > 0.0) fB = min(fB, maxOutZ);\r
  if (fT < 0.0) fT = max(fT, -maxOutZ);\r
\r
  // 封闭边界处理：边界网格法向速度归零并关闭对应面通量\r
  vec2 border = step(vUv, uTexel * 0.5) + step(vec2(1.0) - uTexel * 0.5, vUv);\r
  if (uDrain < 0.5) {\r
    if (border.x > 0.0) {\r
      vel.x = 0.0;\r
      fL = 0.0;\r
      fR = 0.0;\r
    }\r
    if (border.y > 0.0) {\r
      vel.y = 0.0;\r
      fT = 0.0;\r
      fB = 0.0;\r
    }\r
  }\r
\r
  // 连续方程更新水深(流出-流入)\r
  h -= (uDt / uCell.x) * (fR - fL) + (uDt / uCell.y) * (fB - fT);\r
  h = max(h, 0.0);\r
  // 开放排边界：边缘带按距离加权做指数衰减排水\r
  if (uDrain > 0.5) {\r
    float bandX = uWorldSize.x * 0.05;\r
    float bandZ = uWorldSize.y * 0.05;\r
    float edgeDist = min(\r
      min(world.x + uWorldSize.x * 0.5, uWorldSize.x * 0.5 - world.x),\r
      min(world.y + uWorldSize.y * 0.5, uWorldSize.y * 0.5 - world.y)\r
    );\r
    float drainWeight = 1.0 - smoothstep(0.0, min(bandX, bandZ), edgeDist);\r
    h *= exp(-BOUNDARY_DRAIN_RATE * drainWeight * uDt);\r
  }\r
  // 干格减速残留速度，减少漂浮噪声\r
  if (h <= 0.0001) {\r
    vel *= 0.35;\r
  }\r
  float speed = length(vel);\r
  if (speed > uMaxSpeed) {\r
    vel *= uMaxSpeed / speed;\r
  }\r
  // 湿润时间仅在有水时积分，干格时钟冻结\r
  float wetTime = h > 0.0001 ? s.a + uDt : s.a;\r
  gl_FragColor = vec4(h, vel.x, vel.y, wetTime);\r
}\r
`,_1=3;class v1{constructor(t,e,i,s){V(this,"Nx",256);V(this,"Nz",256);V(this,"cellX",Ht.x/256);V(this,"cellZ",Ht.z/256);V(this,"h",new Float32Array(0));V(this,"u",new Float32Array(0));V(this,"v",new Float32Array(0));V(this,"bed",new Float32Array(0));V(this,"simTime",0);V(this,"timeAccumulator",0);V(this,"maxWater",0);V(this,"fieldVersion",0);V(this,"wetTime",new Float32Array(0));V(this,"infiltratedVolume",0);V(this,"volume",0);V(this,"readBuffer",new Float32Array(0));V(this,"uploadBuffer",new Float32Array(0));V(this,"bedBuffer",new Float32Array(0));V(this,"soilBuffer",new Float32Array(0));V(this,"stateTexture",null);V(this,"bedTexture",null);V(this,"soilTexture",null);V(this,"soilMul",null);V(this,"rtA",null);V(this,"rtB",null);V(this,"current",null);V(this,"next",null);V(this,"scene",new up);V(this,"camera",new Ra(-1,1,1,-1,0,1));V(this,"quad");V(this,"material");V(this,"materialUniforms");V(this,"impulses",[]);V(this,"readFrame",0);V(this,"pendingSync",!1);V(this,"conservedVolume",0);V(this,"rainRate",0);this.renderer=t,this.sampleFn=e,this.data=i,this.params=s,this.materialUniforms=this.createStepUniforms(),this.material=new Mn({depthWrite:!1,depthTest:!1,uniforms:this.materialUniforms,vertexShader:m1,fragmentShader:g1}),this.quad=new dn(new ar(2,2),this.material),this.scene.add(this.quad),this.setSize(s.simNx,s.simNz)}get N(){return this.Nx}get cell(){return this.cellX}setSize(t,e){this.Nx=t,this.Nz=e,this.cellX=Ht.x/t,this.cellZ=Ht.z/e;const i=t*e;this.h=new Float32Array(i),this.u=new Float32Array(i),this.v=new Float32Array(i),this.bed=new Float32Array(i),this.wetTime=new Float32Array(i),this.readBuffer=new Float32Array(i*4),this.uploadBuffer=new Float32Array(i*4),this.bedBuffer=new Float32Array(i*4),this.soilBuffer=new Float32Array(i*4),this.buildBed(),this.buildSoil(),this.rebuildTargets(),this.reset()}reset(){this.h.fill(0),this.u.fill(0),this.v.fill(0),this.wetTime.fill(0),this.infiltratedVolume=0,this.simTime=0,this.volume=0,this.maxWater=0,this.conservedVolume=0,this.uploadState()}addWater(t,e,i,s,r){const o=Math.max(0,i*s),a=zc(this.Nx,this.Nz,this.cellX,this.cellZ,t,e,r);this.impulses.push({x:t,z:e,radius:r,water:o,volume:o*a,pushX:0,pushZ:0})}addVolume(t,e,i,s){if(i<=0)return;const r=this.computeBrushEffectiveArea(t,e,s);this.impulses.push({x:t,z:e,radius:s,water:i/r,volume:i,pushX:0,pushZ:0})}addPush(t,e,i,s,r,o){const a=Math.hypot(i,s);if(a<=1e-4)return;const l=Math.min(18,a*r*.7);this.impulses.push({x:t,z:e,radius:o,water:0,volume:0,pushX:i/a*l,pushZ:s/a*l})}fillToLevel(t){const{h:e,bed:i,u:s,v:r}=this;for(let o=0;o<e.length;o++)e[o]=Math.max(e[o],t-i[o],0),s[o]=0,r[o]=0;this.uploadState(),this.updateStatsFromArrays(),this.conservedVolume=this.volume}addRain(t){const e=this.params.rain;if(e<=0){this.rainRate=0;return}this.rainRate=e/1e3/3600}step(t){if(!this.current||!this.next||!this.bedTexture)return;const e=Math.sqrt(Math.max(1,this.params.gravity*Math.max(this.maxWater,1))),i=Math.min(this.cellX,this.cellZ)*.22/Math.max(1,this.params.maxSpeed,e);this.timeAccumulator+=Math.max(0,t*this.params.timeScale),(this.params.tool!=="rain"||this.params.rain<=0)&&(this.rainRate=0);const s=this.consumeImpulse(),r=!!s||this.rainRate>0;let o=!0;for(;this.timeAccumulator>=i||o&&r;){const c=Math.min(this.timeAccumulator,i);this.timeAccumulator-=c,this.simTime+=c;const u=this.computeSourceVolume(o?s:null,c);if(this.conservedVolume+=u,this.params.infiltration){const g=this.estimateInfiltrationVolume(c);this.conservedVolume=Math.max(0,this.conservedVolume-g),this.infiltratedVolume+=g}this.volume=this.conservedVolume;const h=this.material,f=this.materialUniforms;h.uniforms.uState.value=this.current.texture,h.uniforms.uBed.value=this.bedTexture,f.uTexel.value.set(1/this.Nx,1/this.Nz),h.uniforms.uDt.value=c,h.uniforms.uCell.value.set(this.cellX,this.cellZ),h.uniforms.uWorldSize.value.set(Ht.x,Ht.z),h.uniforms.uGravity.value=this.params.gravity,h.uniforms.uFriction.value=this.params.friction,h.uniforms.uMaxSpeed.value=this.params.maxSpeed,h.uniforms.uDrain.value=this.params.drainBoundary?1:0,h.uniforms.uRainRate.value=this.rainRate,h.uniforms.uInfilOn.value=this.params.infiltration?1:0,h.uniforms.uInfilF0.value=this.params.infilF0/1e3/3600,h.uniforms.uInfilFc.value=this.params.infilFc/1e3/3600,h.uniforms.uInfilK.value=this.params.infilK/3600,h.uniforms.uSoil.value=this.soilTexture,f.uBrushCenter.value.set(o&&s?s.x:999999,o&&s?s.z:999999),h.uniforms.uBrushRadius.value=o&&s?s.radius:1,h.uniforms.uBrushWater.value=o&&s?s.water:0,f.uBrushPush.value.set(o&&s?s.pushX:0,o&&s?s.pushZ:0);const p=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.next),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(p),this.swapTargets(),o=!1}const a=this.params.tool==="rain"&&this.params.rain>0;!!s&&this.readFrame%_1!==0&&this.readFrame!==0?this.pendingSync=!0:(s||this.pendingSync||(a||this.maxWater>1e-4)&&this.readFrame===0)&&(this.readState(this.conservedVolume,!this.params.drainBoundary),this.pendingSync=!1),this.readFrame=(this.readFrame+1)%15}getVolume(){return this.volume}syncState(){this.readState(this.conservedVolume,!this.params.drainBoundary),this.readFrame=0}dispose(){var t,e,i,s,r;(t=this.rtA)==null||t.dispose(),(e=this.rtB)==null||e.dispose(),(i=this.stateTexture)==null||i.dispose(),(s=this.bedTexture)==null||s.dispose(),(r=this.soilTexture)==null||r.dispose(),this.quad.geometry.dispose(),this.material.dispose()}buildBed(){var u;const t=Ht.x/2,e=Ht.z/2,{Nx:i,Nz:s,cellX:r,cellZ:o,bed:a,bedBuffer:l,data:c}=this;for(let h=0;h<s;h++)for(let f=0;f<i;f++){const p=h*i+f,g=(f+.5)*r-t,v=(h+.5)*o-e;a[p]=this.sampleFn(g,v)-c.minElev,l[p*4]=a[p],l[p*4+3]=1}(u=this.bedTexture)==null||u.dispose(),this.bedTexture=new Ir(l,i,s,rn,sn),this.bedTexture.magFilter=Te,this.bedTexture.minFilter=Te,this.bedTexture.needsUpdate=!0}buildSoil(){var s;const t=Ap(this.bed,this.data.maxElev-this.data.minElev);this.soilMul=t;const{h:e,soilBuffer:i}=this;for(let r=0;r<e.length;r++)i[r*4]=t.f0Mul[r],i[r*4+1]=t.fcMul[r],i[r*4+2]=t.kMul[r],i[r*4+3]=1;(s=this.soilTexture)==null||s.dispose(),this.soilTexture=new Ir(i,this.N,this.N,rn,sn),this.soilTexture.magFilter=Te,this.soilTexture.minFilter=Te,this.soilTexture.needsUpdate=!0}rebuildTargets(){var e,i;(e=this.rtA)==null||e.dispose(),(i=this.rtB)==null||i.dispose();const t={format:rn,type:sn,depthBuffer:!1,stencilBuffer:!1,minFilter:ze,magFilter:ze};this.rtA=new Cn(this.N,this.N,t),this.rtB=new Cn(this.N,this.N,t),this.current=this.rtA,this.next=this.rtB}uploadState(){var a;const{N:t,h:e,u:i,v:s,wetTime:r,uploadBuffer:o}=this;for(let l=0;l<e.length;l++)o[l*4]=e[l],o[l*4+1]=i[l],o[l*4+2]=s[l],o[l*4+3]=r[l];(a=this.stateTexture)==null||a.dispose(),this.stateTexture=new Ir(o,t,t,rn,sn),this.stateTexture.magFilter=Te,this.stateTexture.minFilter=Te,this.stateTexture.needsUpdate=!0,this.copyTextureToTargets(this.stateTexture),this.fieldVersion++}copyTextureToTargets(t){if(!this.rtA||!this.rtB)return;const e=this.materialUniforms.uState.value;this.material.uniforms.uState.value=t,this.material.uniforms.uDt.value=0;const i=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.rtA),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(i),this.material.uniforms.uState.value=e,this.current=this.rtA,this.next=this.rtB}readState(t,e=!1){if(!this.current)return;const{N:i,h:s,u:r,v:o,wetTime:a,readBuffer:l,cell:c}=this;this.renderer.readRenderTargetPixels(this.current,0,0,i,i,l);let u=0,h=0;for(let g=0;g<s.length;g++){const v=Math.max(0,l[g*4]);s[g]=v,r[g]=l[g*4+1],o[g]=l[g*4+2],a[g]=l[g*4+3],u+=v,v>h&&(h=v)}const f=u*c*c;if(t!==void 0&&f>0&&(e||f>t)){const g=t/f;h=0;for(let v=0;v<s.length;v++)s[v]*=g,s[v]>h&&(h=s[v]);this.volume=t,this.conservedVolume=t,this.uploadState()}else this.volume=f,this.conservedVolume=f;this.maxWater=h,this.fieldVersion++}updateStatsFromArrays(){let t=0,e=0;for(const i of this.h)t+=i,i>e&&(e=i);this.volume=t*this.cellX*this.cellZ,this.maxWater=e}consumeImpulse(){if(this.impulses.length===0)return null;const t=this.impulses[this.impulses.length-1],e={x:t.x,z:t.z,radius:t.radius,water:0,volume:0,pushX:0,pushZ:0};for(const i of this.impulses)e.water+=i.water,e.volume+=i.volume,e.pushX+=i.pushX,e.pushZ+=i.pushZ;return this.impulses.length=0,e}computeSourceVolume(t,e){let i=(t==null?void 0:t.volume)??0;return this.rainRate>0&&(i+=this.rainRate*e*Ht.x*Ht.z),i}estimateInfiltrationVolume(t){if(t<=0||!this.soilMul)return 0;const{h:e,wetTime:i,soilMul:s}=this,r=this.params.infilF0/1e3/3600,o=this.params.infilFc/1e3/3600,a=this.params.infilK/3600;let l=0;for(let c=0;c<e.length;c++){if(e[c]<=mi)continue;const u=o*s.fcMul[c]+(r*s.f0Mul[c]-o*s.fcMul[c])*Math.exp(-a*s.kMul[c]*i[c]),h=Math.min(e[c],u*t);l+=h,e[c]-=h,e[c]>mi&&(i[c]+=t)}return l*this.cellX*this.cellZ}computeBrushEffectiveArea(t,e,i){return zc(this.Nx,this.Nz,this.cellX,this.cellZ,t,e,i)}swapTargets(){const t=this.current;this.current=this.next,this.next=t}createStepUniforms(){return{uState:{value:null},uBed:{value:null},uTexel:{value:new Gt(1/256,1/256)},uDt:{value:0},uCell:{value:new Gt(Ht.x/256,Ht.z/256)},uWorldSize:{value:new Gt(Ht.x,Ht.z)},uGravity:{value:9.8},uFriction:{value:.05},uMaxSpeed:{value:26},uRainRate:{value:0},uDrain:{value:0},uInfilOn:{value:0},uInfilF0:{value:0},uInfilFc:{value:0},uInfilK:{value:0},uSoil:{value:null},uBrushCenter:{value:new Gt(999999,999999)},uBrushRadius:{value:1},uBrushWater:{value:0},uBrushPush:{value:new Gt(0,0)}}}}const Ll=[137,80,78,71,13,10,26,10];async function x1(n){const t=await fetch(n);if(!t.ok)throw new Error(`图片下载失败: ${t.status}`);const e=await t.arrayBuffer(),i=M1(e),s=new Blob([e],{type:"image/png"}),r=URL.createObjectURL(s);try{return{image:await S1(r),metadata:i}}finally{URL.revokeObjectURL(r)}}function S1(n){return new Promise((t,e)=>{const i=new Image;i.onload=()=>t(i),i.onerror=e,i.src=n})}function M1(n){const t=new DataView(n);if(t.byteLength<Ll.length||!y1(t,0,Ll))return null;const e=new TextDecoder,i={};let s=Ll.length;for(;s+12<=t.byteLength;){const r=t.getUint32(s),o=s+4,a=s+8,l=a+r+4;if(l>t.byteLength)return null;if(b1(t,o,4)==="iTXt"){const u=E1(new Uint8Array(n,a,r),e);u&&(i[u.keyword]=u.value)}s=l}return Object.keys(i).length>0?i:null}function y1(n,t,e){if(t+e.length>n.byteLength)return!1;for(let i=0;i<e.length;i++)if(n.getUint8(t+i)!==e[i])return!1;return!0}function b1(n,t,e){if(t<0||t+e>n.byteLength)return"";let i="";for(let s=0;s<e;s++)i+=String.fromCharCode(n.getUint8(t+s));return i}function E1(n,t){const e=n.indexOf(0);if(e<=0||e+5>n.length)return null;const i=n[e+1],s=n[e+2];if(i!==0||s!==0)return null;const r=n.indexOf(0,e+3);if(r<0)return null;const o=n.indexOf(0,r+1);return o<0?null:{keyword:t.decode(n.subarray(0,e)),value:t.decode(n.subarray(o+1))}}function T1(n){if(n!=null&&n.West&&(n!=null&&n.East)&&(n!=null&&n.South)&&(n!=null&&n.North)){const t=parseFloat(n.West),e=parseFloat(n.East),i=parseFloat(n.South),s=parseFloat(n.North),r=(s+i)/2*Math.PI/180,o=111320,a=o*Math.cos(r);return{x:(e-t)*a,z:(s-i)*o}}return{x:1024,z:1024}}function Eu(n,t,e){const i=n.elevations,s=n.imgW,r=n.imgH,o=n.worldSize,a=(t+o.x/2)/o.x*(s-1),l=(e+o.z/2)/o.z*(r-1),c=Math.min(Math.max(Math.floor(a),0),s-2),u=Math.min(Math.max(Math.floor(l),0),r-2),h=a-c,f=l-u,p=(y,A)=>A*s+y,g=i[p(c,u)],v=i[p(c+1,u)],m=i[p(c,u+1)],d=i[p(c+1,u+1)],x=g+(v-g)*h,E=m+(d-m)*h;return x+(E-x)*f}class w1 extends Ie{constructor(t,e=256){super();const i=e,s=e,r=i+1,o=s+1,a=new Float32Array(r*o*3),l=new Float32Array(r*o*2),c=new Float32Array(r*o),{worldSize:u,minElev:h,maxElev:f}=t,p=f-h,g=u.x/i,v=u.z/s;for(let x=0;x<o;x++)for(let E=0;E<r;E++){const y=x*r+E,A=E*g-u.x/2,C=x*v-u.z/2,L=Eu(t,A,C),S=L-h;a[y*3]=A,a[y*3+1]=S,a[y*3+2]=C,l[y*2]=E/i,l[y*2+1]=1-x/s,c[y]=p>0?(L-h)/p:0}const m=new Uint32Array(i*s*6);let d=0;for(let x=0;x<s;x++)for(let E=0;E<i;E++){const y=x*r+E,A=y+1,C=y+r,L=y+r+1;m[d++]=y,m[d++]=C,m[d++]=A,m[d++]=A,m[d++]=C,m[d++]=L}this.setAttribute("position",new he(a,3)),this.setAttribute("uv",new he(l,2)),this.setAttribute("aElev",new he(c,1)),this.setIndex(new he(m,1)),this.computeVertexNormals()}}class A1{async load(t){const{image:e,metadata:i}=await x1(t),s=document.createElement("canvas");s.width=e.width,s.height=e.height;const r=s.getContext("2d",{willReadFrequently:!0});r.drawImage(e,0,0);const{data:o}=r.getImageData(0,0,e.width,e.height),a=e.width,l=e.height,c=new Float32Array(a*l),u=(i==null?void 0:i.MinElevation)!=null&&(i==null?void 0:i.MaxElevation)!=null,h=u?parseFloat(i.MinElevation):0,f=u?parseFloat(i.MaxElevation):0;let p=1/0,g=-1/0;if(u){const d=f-h;for(let x=0;x<o.length;x+=4){const E=o[x+3],y=h+E/255*d;c[x/4]=y,y<p&&(p=y),y>g&&(g=y)}}else for(let d=0;d<o.length;d+=4){const x=o[d+3];c[d/4]=x,x<p&&(p=x),x>g&&(g=x)}for(let d=0;d<a;d++)c[d]=p,c[(l-1)*a+d]=p;for(let d=0;d<l;d++)c[d*a]=p,c[d*a+a-1]=p;const v=T1(i);return{image:e,terrainData:{imgW:a,imgH:l,elevations:c,minElev:p,maxElev:g,worldSize:v,metadata:i},metadata:i}}}const C1=`#include <common>\r
attribute float aElev;\r
varying vec2 vUv;\r
varying float vElev;\r
varying vec3 vNormal;\r
varying vec3 vViewPosition;\r
varying vec3 vWorldPosition;\r
#include <logdepthbuf_pars_vertex>\r
void main() {\r
  vUv = uv;\r
  vElev = aElev;\r
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\r
  vViewPosition = -mvPosition.xyz;\r
  vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\r
  vNormal = normalize(normalMatrix * normal);\r
  gl_Position = projectionMatrix * mvPosition;\r
  #include <logdepthbuf_vertex>\r
}\r
`,R1=`#include <common>\r
#include <lights_pars_begin>\r
#include <lights_lambert_pars_fragment>\r
#include <logdepthbuf_pars_fragment>\r
\r
uniform sampler2D uMap;\r
uniform float uRampBlend;\r
\r
varying vec2 vUv;\r
varying float vElev;\r
varying vec3 vNormal;\r
varying vec3 vWorldPosition;\r
\r
vec3 ramp(float t) {\r
  vec3 c0 = vec3(0.13, 0.42, 0.63);\r
  vec3 c1 = vec3(0.30, 0.62, 0.42);\r
  vec3 c2 = vec3(0.75, 0.68, 0.42);\r
  vec3 c3 = vec3(0.93, 0.93, 0.92);\r
  vec3 c = mix(c0, c1, smoothstep(0.00, 0.30, t));\r
  c = mix(c, c2, smoothstep(0.30, 0.65, t));\r
  c = mix(c, c3, smoothstep(0.65, 1.00, t));\r
  return c;\r
}\r
\r
void main() {\r
  vec3 texCol = texture2D(uMap, vUv).rgb;\r
  vec3 elevCol = ramp(vElev);\r
  vec4 diffuseColor = vec4(mix(texCol, elevCol, uRampBlend), 1.0);\r
  float specularStrength = 0.0;\r
\r
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\r
\r
  vec3 normal = normalize(vNormal);\r
\r
  #include <lights_lambert_fragment>\r
  #include <lights_fragment_begin>\r
  #include <lights_fragment_end>\r
\r
  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\r
  gl_FragColor = vec4(col, 1.0);\r
  #include <logdepthbuf_fragment>\r
}\r
`;class Rf extends Mn{constructor(t=null){super({lights:!0,uniforms:_p.merge([Et.lights,{uMap:{value:t??new We},uRampBlend:{value:.5}}]),vertexShader:C1,fragmentShader:R1,side:Nn})}static createTextureFromImage(t){const e=new yu(t);return e.colorSpace=vn,e.wrapS=e.wrapT=aa,e.anisotropy=8,e}}class P1 extends dn{constructor(e=256){super();V(this,"terrainData");V(this,"loader",new A1);this.segments=e,this.terrainData=null}async load(e){const{image:i,terrainData:s}=await this.loader.load(e),r=Rf.createTextureFromImage(i);this.terrainData=s,this.geometry=new w1(s,this.segments),this.material=new Rf(r)}update(e){this.material.uniforms.uRampBlend.value=e.rampBlend,this.material.wireframe=e.wireframe}sampleElevation(e,i){return Eu(this.terrainData,e,i)}}const D1=`#include <common>\r
// 求解器水深场纹理(N×N, R32F, NEAREST)，由 WaterMesh 每帧上传 solver.h\r
uniform sampler2D uHeightTex;\r
// 网格边长 N(格点数)，用于 uv↔格点坐标换算\r
uniform float uGridN;\r
attribute float aSpeed;\r
varying vec2 vUv;\r
varying float vDepth;\r
varying float vEdgeDepth;\r
varying float vSpeed;\r
varying vec3 vNormal;\r
varying vec3 vWorldPosition;\r
// 对数深度缓冲支持(与片元着色器的同名 include 配对)\r
#include <logdepthbuf_pars_vertex>\r
\r
// 一维二项式卷积权重 |d|∈{0,1,2} → {6,4,1}/16(GLSL ES 1.0 无数组构造器，用函数代替)\r
float binomW(int d) {\r
  int a = d < 0 ? -d : d;\r
  return a == 0 ? 0.375 : (a == 1 ? 0.25 : 0.0625);\r
}\r
\r
void main() {\r
  vUv = uv;\r
  // 由 uv 反推整数格点；uv.y 相对网格行号 j 是翻转的(v=1-j/(N-1))，\r
  // 而 DataTexture(flipY=false) 的 t 轴直接对应数据行号，故 y 必须翻回\r
  vec2 g = floor(vec2(uv.x, 1.0 - uv.y) * (uGridN - 1.0) + 0.5);\r
  // 本格水深：精确采样 texel 中心\r
  vDepth = texture2D(uHeightTex, (g + 0.5) / uGridN).r;\r
  // 岸线专用水深：5×5 二项式核单 pass 卷积；越界 tap 跳过并按界内实际权重和归一，\r
  // 与原 CPU 两趟可分离卷积数值等价(行列独立 → 归一化分母恰为 Wx·Wy)\r
  float sum = 0.0;\r
  float wsum = 0.0;\r
  for (int dj = -2; dj <= 2; dj++) {\r
    for (int di = -2; di <= 2; di++) {\r
      vec2 c = g + vec2(float(di), float(dj));\r
      if (c.x < 0.0 || c.y < 0.0 || c.x >= uGridN || c.y >= uGridN) continue;\r
      float w = binomW(di) * binomW(dj);\r
      sum += texture2D(uHeightTex, (c + 0.5) / uGridN).r * w;\r
      wsum += w;\r
    }\r
  }\r
  // 中心 tap 必在界内，wsum > 0 恒成立\r
  vEdgeDepth = sum / wsum;\r
  vSpeed = aSpeed;\r
  vNormal = normalize(normalMatrix * normal);\r
  vec4 world = modelMatrix * vec4(position, 1.0);\r
  // 抬高水面避免z-fighting（对数深度下polygonOffset失效）\r
  world.y += 0.5;\r
  vWorldPosition = world.xyz;\r
  gl_Position = projectionMatrix * viewMatrix * world;\r
  #include <logdepthbuf_vertex>\r
}\r
`,L1=`/**\r
 * 水面片元着色器\r
 *\r
 * 渲染流程概览：\r
 *   1. 基础体色：按水深在浅水色/深水色之间插值；\r
 *   2. 不透明度：岸缘淡出 × 浅水减淡 × 全局系数；\r
 *   3. 波纹(可开关)：三层流动梯度噪声求梯度得微法线，并调制明暗斑驳；\r
 *   4. Schlick 菲涅尔按视角增益已存在水体的不透明度；\r
 *   5. 场景灯光的 Blinn-Phong 高光增强立体感。\r
 */\r
\r
// ---- 可调 uniform(由 WaterMaterial 从全局 params 同步) ----\r
uniform vec3 uShallow;       // 浅水颜色\r
uniform vec3 uDeep;          // 深水颜色\r
uniform float uOpacity;      // 全局基础不透明度\r
uniform float uTime;         // 累计时间(秒)，驱动波场滚动\r
uniform float uShowWaves;    // 波纹开关(>0.5 启用)\r
uniform float uWaveScale;    // 波场空间频率缩放(越大波纹越密)\r
\r
// ---- 灯光 uniform(由 Engine 每帧从场景灯光同步) ----\r
uniform vec3 uSunDir;        // 平行光方向(已归一化)\r
uniform vec3 uSunColor;      // 平行光颜色\r
\r
// ---- 顶点着色器插值输入 ----\r
varying vec2 vUv;\r
varying float vDepth;\r
varying float vEdgeDepth;\r
varying vec3 vNormal;\r
varying vec3 vWorldPosition;\r
\r
// 对数深度缓冲支持\r
#include <logdepthbuf_pars_fragment>\r
\r
// 梯度噪声\r
vec2 hash2(vec2 p) {\r
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));\r
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);\r
}\r
\r
float gnoise(vec2 p) {\r
    vec2 i = floor(p);\r
    vec2 f = fract(p);\r
    vec2 u = f * f * (3.0 - 2.0 * f);\r
    float a = dot(hash2(i), f);\r
    float b = dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));\r
    float c = dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));\r
    float d = dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));\r
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);\r
}\r
\r
float waveField(vec2 p, float t) {\r
    return gnoise(p * 1.0 + vec2(t * 0.62, t * 0.36)) * 0.45\r
         + gnoise(p * 2.1 - vec2(t * 0.43, t * 0.57)) * 0.28\r
         + gnoise(p * 4.3 + vec2(t * 0.27, -t * 0.49)) * 0.16\r
         + gnoise(p * 8.5 + vec2(-t * 0.31, t * 0.67)) * 0.07\r
         + gnoise(p * 16.0 - vec2(t * 0.55, -t * 0.42)) * 0.04;\r
}\r
\r
void main() {\r
    // 1) 基础体色\r
    vec3 col = mix(uShallow, uDeep, smoothstep(0.5, 6.0, vDepth));\r
    // 2) 不透明度\r
    float edgeAlpha = smoothstep(0.0, 0.16, vEdgeDepth);\r
    float depthAlpha = mix(0.6, 1.0, smoothstep(0.05, 3.0, vDepth));\r
    float alpha = uOpacity * edgeAlpha * depthAlpha;\r
\r
    // 3) 波纹\r
    vec3 n = normalize(vNormal);\r
    if (uShowWaves > 0.5) {\r
        float t = uTime;\r
        vec2 p = vUv * vec2(uWaveScale, uWaveScale * (40.0 / 60.0)) * 0.25;\r
        float e = 0.08;\r
        float h0 = waveField(p, t);\r
        float dud = (waveField(p + vec2(e, 0.0), t) - h0) / e * 0.22;\r
        float dvd = (waveField(p + vec2(0.0, e), t) - h0) / e * 0.22;\r
        vec3 wn = normalize(vec3(-dud, 1.0, -dvd));\r
        n = normalize(mix(n, wn, 0.62));\r
        col += vec3(0.10, 0.13, 0.16) * h0 * 0.9;\r
    }\r
\r
    // 4) Schlick 菲涅尔\r
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);\r
    float cosV = max(dot(n, viewDir), 0.0);\r
    float fres = 0.02 + 0.98 * pow(1.0 - cosV, 4.0);\r
    alpha = clamp(alpha * (1.0 + fres * 2.0), 0.0, 1.0);\r
\r
    // 5) 光照：仅叠加高光反射，基色完全由 uShallow/uDeep 控制\r
    vec3 sunDir = normalize(uSunDir);\r
\r
    vec3 halfDir = normalize(sunDir + viewDir);\r
    // 窄高光：锐利的太阳反射点\r
    float specTight = pow(max(dot(n, halfDir), 0.0), 64.0);\r
    // 宽高光：柔和的水面光泽\r
    float specBroad = pow(max(dot(n, halfDir), 0.0), 12.0);\r
    col += vec3(1.0, 0.98, 0.95) * specTight * 0.45;\r
    col += uSunColor * specBroad * 0.15;\r
\r
    // 太阳光斑：视线接近反射方向时的亮斑\r
    vec3 reflectDir = reflect(-viewDir, n);\r
    float sunSpot = pow(max(dot(reflectDir, sunDir), 0.0), 256.0);\r
    col += vec3(1.0, 0.95, 0.85) * sunSpot * 1.5;\r
\r
    gl_FragColor = vec4(col, alpha);\r
    #include <logdepthbuf_fragment>\r
}\r
`;class I1 extends Mn{constructor(){super({transparent:!0,depthWrite:!1,alphaToCoverage:N.alphaToCoverage,uniforms:{uShallow:{value:new qt(N.waterShallowColor)},uDeep:{value:new qt(N.waterDeepColor)},uOpacity:{value:N.waterOpacity},uTime:{value:0},uShowWaves:{value:N.showWaves?1:0},uWaveScale:{value:N.waveScale},uHeightTex:{value:null},uGridN:{value:0},uSunDir:{value:new k(.4,.85,.3).normalize()},uSunColor:{value:new qt("#fff2dd")}},vertexShader:D1,fragmentShader:L1,side:Nn,polygonOffset:!0,polygonOffsetFactor:-10,polygonOffsetUnits:-10})}update(t){this.uniforms.uTime.value+=t,this.uniforms.uShallow.value.set(N.waterShallowColor),this.uniforms.uDeep.value.set(N.waterDeepColor),this.uniforms.uOpacity.value=N.waterOpacity,this.uniforms.uShowWaves.value=N.showWaves?1:0,this.uniforms.uWaveScale.value=N.waveScale,this.alphaToCoverage=N.alphaToCoverage}}const U1=4;class F1 extends dn{constructor(e){const i=Ht.x/2,s=Ht.z/2,r=Ht.x/e,o=Ht.z/e,a=e*e,l=new Float32Array(a*3),c=new Float32Array(a),u=new Float32Array(a),h=new Float32Array(a);for(let x=0;x<e;x++)for(let E=0;E<e;E++){const y=x*e+E;l[y*3]=E*r-i,l[y*3+2]=x*o-s}const f=new Uint32Array((e-1)*(e-1)*6);let p=0;for(let x=0;x<e-1;x++)for(let E=0;E<e-1;E++){const y=x*e+E,A=y+1,C=y+e,L=y+e+1;f[p++]=y,f[p++]=C,f[p++]=A,f[p++]=A,f[p++]=C,f[p++]=L}const g=new Float32Array(a*2);for(let x=0;x<e;x++)for(let E=0;E<e;E++){const y=x*e+E;g[y*2]=E/(e-1),g[y*2+1]=1-x/(e-1)}const v=new Ie;v.setAttribute("position",new he(l,3)),v.setAttribute("uv",new he(g,2)),v.setAttribute("aSpeed",new he(c,1)),v.setIndex(new he(f,1)),v.computeVertexNormals();const m=new Ir(h,e,e,cu,sn);m.magFilter=Te,m.minFilter=Te,m.needsUpdate=!0;const d=new I1;d.uniforms.uHeightTex.value=m,d.uniforms.uGridN.value=e;super(v,d);V(this,"N");V(this,"waterPos");V(this,"waterSpeed");V(this,"smoothBuf");V(this,"heightTexture");V(this,"zeroBuf");V(this,"normalUpdateFrame",0);this.renderOrder=1,this.visible=!0,this.frustumCulled=!1,this.N=e,this.waterPos=l,this.waterSpeed=c,this.smoothBuf=u,this.heightTexture=m,this.zeroBuf=h}updateFromSolver(e,i){const s=this.N,r=e.h,o=e.bed;if(e.maxWater>5e-4){for(let a=0;a<s;a++)for(let l=0;l<s;l++){const c=a*s+l;this.smoothBuf[c]=(o[c]+r[c])*i}for(let a=0;a<s;a++)for(let l=0;l<s;l++){const c=l>0?l-1:l,u=l<s-1?l+1:l,h=a*s+l,f=a*s+c,p=a*s+u;this.waterPos[h*3+1]=(this.smoothBuf[f]+this.smoothBuf[h]+this.smoothBuf[p])/3}for(let a=0;a<s;a++)for(let l=0;l<s;l++){const c=a>0?a-1:a,u=a<s-1?a+1:a,h=a*s+l,f=c*s+l,p=u*s+l;this.waterPos[h*3+1]=(this.waterPos[f*3+1]+this.waterPos[h*3+1]+this.waterPos[p*3+1])/3}for(let a=0;a<s*s;a++)this.waterSpeed[a]=Math.hypot(e.u[a],e.v[a]);this.syncHeightSource(r),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.aSpeed.needsUpdate=!0,this.normalUpdateFrame===0&&this.geometry.computeVertexNormals(),this.normalUpdateFrame=(this.normalUpdateFrame+1)%U1}}syncHeightSource(e){const i=this.heightTexture.image;i.data!==e&&(i.data=e),this.heightTexture.needsUpdate=!0}clearWater(e,i){const s=this.N;for(let r=0;r<s*s;r++)this.waterPos[r*3+1]=e[r]*i,this.waterSpeed[r]=0;this.syncHeightSource(this.zeroBuf),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.aSpeed.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose(),this.heightTexture.dispose()}}const N1=22,Pf=[new qt("#0088ff"),new qt("#00ccff"),new qt("#1fff88"),new qt("#ffe600"),new qt("#ff3300")];class O1{constructor(t){V(this,"group",new Gi);V(this,"solver");V(this,"N",0);V(this,"particles",null);V(this,"particleMat",null);V(this,"particleGeo",null);V(this,"particlePos",new Float32Array(0));V(this,"particleCol",new Float32Array(0));V(this,"px",new Float32Array(0));V(this,"pz",new Float32Array(0));V(this,"pCool",new Float32Array(0));V(this,"arrows",null);V(this,"arrowGeo",null);V(this,"arrowPos",new Float32Array(0));V(this,"arrowCol",new Float32Array(0));V(this,"tmpColor",new qt);this.solver=t,this.rebuild()}rebuild(){this.N=this.solver.Nx,this.dispose(),this.buildParticles(),this.buildArrows()}clear(){for(let t=0;t<this.px.length;t++)this.particlePos[t*3+1]=-9999,this.pCool[t]=0;this.particleGeo&&(this.particleGeo.attributes.position.needsUpdate=!0)}update(t){this.solver.Nx!==this.N&&this.rebuild();const e=this.solver.Nx,i=this.solver.h,s=this.solver.u,r=this.solver.v,o=this.solver.bed,a=N.vertExag,l=Ht.x/2,c=Ht.z/2,u=Ht.x/e,h=Ht.z/e;this.particles&&(this.particles.visible=N.particles,this.particleMat&&(this.particleMat.size=N.particleSize),N.particles&&this.updateParticles(t,e,u,h,l,c,a,i,s,r,o)),this.arrows&&(this.arrows.visible=N.showArrows,N.showArrows&&this.updateArrows(e,u,h,l,c,a,i,s,r,o))}dispose(){var t,e,i,s,r;this.group.clear(),(t=this.particleGeo)==null||t.dispose(),(e=this.arrowGeo)==null||e.dispose(),(s=(i=this.particleMat)==null?void 0:i.map)==null||s.dispose(),(r=this.particleMat)==null||r.dispose(),this.particles=null,this.arrows=null,this.particleMat=null}buildParticles(){const t=Math.max(1,Math.floor(N.particleCount));this.particlePos=new Float32Array(t*3),this.particleCol=new Float32Array(t*3),this.px=new Float32Array(t),this.pz=new Float32Array(t),this.pCool=new Float32Array(t),this.particleGeo=new Ie,this.particleGeo.setAttribute("position",new he(this.particlePos,3)),this.particleGeo.setAttribute("color",new he(this.particleCol,3)),this.particleMat=new Mu({size:N.particleSize,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,depthTest:!1,blending:vs,sizeAttenuation:!1,map:B1(),alphaTest:.05}),this.particles=new dp(this.particleGeo,this.particleMat),this.particles.renderOrder=2,this.particles.frustumCulled=!1,this.particles.visible=N.particles,this.group.add(this.particles);for(let e=0;e<t;e++)this.px[e]=Math.random()*(this.N-1),this.pz[e]=Math.random()*(this.N-1)}updateParticles(t,e,i,s,r,o,a,l,c,u,h){const f=this.px.length,p=this.particlePos,g=this.particleCol,v=3;for(let m=0;m<f;m++){let d=this.px[m],x=this.pz[m];if(d<=0||d>=e-1||x<=0||x>=e-1){if(this.pCool[m]>0){p[m*3+1]=-9999,this.pCool[m]--;continue}if(!this.respawn(m,e,l)){p[m*3+1]=-9999,this.pCool[m]=90;continue}d=this.px[m],x=this.pz[m]}const E=Math.floor(d),y=Math.min(e-1,E+1),A=Math.floor(x),C=Math.min(e-1,A+1),L=d-E,S=x-A,T=En(En(c[A*e+E],c[A*e+y],L),En(c[C*e+E],c[C*e+y],L),S),Y=En(En(u[A*e+E],u[A*e+y],L),En(u[C*e+E],u[C*e+y],L),S),D=En(En(l[A*e+E],l[A*e+y],L),En(l[C*e+E],l[C*e+y],L),S),F=En(En(h[A*e+E],h[A*e+y],L),En(h[C*e+E],h[C*e+y],L),S),z=Math.hypot(T,Y);if(D<.02){p[m*3+1]=-9999,this.pCool[m]=30;continue}if(this.pCool[m]=0,this.px[m]+=T/i*v*t,this.pz[m]+=Y/s*v*t,d=this.px[m],x=this.pz[m],d<=0||d>=e-1||x<=0||x>=e-1){p[m*3+1]=-9999,this.respawn(m,e,l);continue}p[m*3]=d*i-r,p[m*3+1]=F*a+.3,p[m*3+2]=x*s-o,this.speedColor(z,this.tmpColor);const q=this.tmpColor;g[m*3]=q.r,g[m*3+1]=q.g,g[m*3+2]=q.b}this.particleGeo.attributes.position.needsUpdate=!0,this.particleGeo.attributes.color.needsUpdate=!0}respawn(t,e,i){for(let s=0;s<40;s++){const r=1+Math.random()*(e-2),o=1+Math.random()*(e-2),a=Math.floor(o)*e+Math.floor(r);if(i[a]>.03)return this.px[t]=r,this.pz[t]=o,!0}return this.px[t]=0,this.pz[t]=0,!1}buildArrows(){this.arrowPos=new Float32Array(400*6),this.arrowCol=new Float32Array(400*6),this.arrowGeo=new Ie,this.arrowGeo.setAttribute("position",new he(this.arrowPos,3)),this.arrowGeo.setAttribute("color",new he(this.arrowCol,3));const i=new Ca({vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1,blending:oa});this.arrows=new Su(this.arrowGeo,i),this.arrows.renderOrder=2,this.arrows.visible=N.showArrows,this.group.add(this.arrows)}updateArrows(t,e,i,s,r,o,a,l,c,u){const f=(t-1)/19,p=this.arrowPos,g=this.arrowCol,v=3.2;for(let m=0;m<20;m++)for(let d=0;d<20;d++){const x=d*f,E=m*f,y=Math.floor(x),C=Math.floor(E)*t+y,L=x*e-s,S=E*i-r,T=(u[C]+a[C])*o+.4,Y=Math.hypot(l[C],c[C]),D=l[C]/(Y+.01)*Math.min(Y,10)*v,F=c[C]/(Y+.01)*Math.min(Y,10)*v,z=(m*20+d)*6;p[z]=L,p[z+1]=T,p[z+2]=S,p[z+3]=L+D,p[z+4]=T,p[z+5]=S+F,this.speedColor(Y,this.tmpColor);const q=this.tmpColor;g[z]=q.r,g[z+1]=q.g,g[z+2]=q.b,g[z+3]=q.r,g[z+4]=q.g,g[z+5]=q.b}this.arrowGeo.attributes.position.needsUpdate=!0,this.arrowGeo.attributes.color.needsUpdate=!0}speedColor(t,e){const i=Math.min(t/N1,1),s=Math.min(Math.floor(i*4),3),r=i*4-s;e.copy(Pf[s]).lerp(Pf[s+1],r)}}function B1(){const n=document.createElement("canvas");n.width=n.height=32;const t=n.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,0.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),new yu(n)}class z1{constructor(t){V(this,"group",new Gi);V(this,"solver");V(this,"N",0);V(this,"waterMesh",null);V(this,"waterSystem",null);V(this,"lastFieldVersion",null);this.solver=t,this.rebuild()}setSolver(t){this.solver=t,this.rebuild()}rebuild(){this.N=this.solver.Nx,this.lastFieldVersion=null,this.disposeVisuals(),this.waterMesh=new F1(this.N),this.group.add(this.waterMesh),this.waterSystem=new O1(this.solver),this.group.add(this.waterSystem.group)}clear(){var t;this.lastFieldVersion=null,this.waterMesh&&(this.waterMesh.clearWater(this.solver.bed,N.vertExag),(t=this.waterSystem)==null||t.clear())}update(t){var r;this.solver.Nx!==this.N&&this.rebuild();const e=N.vertExag,i=this.solver.fieldVersion,s=i===void 0||i!==this.lastFieldVersion;this.solver.maxWater>5e-4&&s&&(this.waterMesh.updateFromSolver(this.solver,e),this.lastFieldVersion=i??null),this.waterMesh.material.update(t),(r=this.waterSystem)==null||r.update(t)}updateLights(t,e){var s;const i=(s=this.waterMesh)==null?void 0:s.material.uniforms;i&&(i.uSunDir.value.copy(t),i.uSunColor.value.copy(e))}disposeVisuals(){var t,e;this.group.clear(),(t=this.waterMesh)==null||t.dispose(),this.waterMesh=null,(e=this.waterSystem)==null||e.dispose(),this.waterSystem=null}}const V1=128,H1=35,k1=2,Df=2;class G1{constructor(t,e,i="west",s=V1){V(this,"res");V(this,"cellX");V(this,"cellZ");V(this,"halfX");V(this,"halfZ");V(this,"surface");V(this,"layerY");V(this,"origin");V(this,"solid");V(this,"u");V(this,"v");V(this,"u0");V(this,"v0");V(this,"p");V(this,"p0");V(this,"div");V(this,"curl");this.res=s,this.surface=t,this.layerY=e,this.origin=i,this.halfX=Ht.x/2,this.halfZ=Ht.z/2,this.cellX=Ht.x/s,this.cellZ=Ht.z/s;const r=s*s;this.solid=new Uint8Array(r),this.u=new Float32Array(r),this.v=new Float32Array(r),this.u0=new Float32Array(r),this.v0=new Float32Array(r),this.p=new Float32Array(r),this.p0=new Float32Array(r),this.div=new Float32Array(r),this.curl=new Float32Array(r),this.buildSolidMask()}indexOf(t,e){const i=Math.floor((t+this.halfX)/this.cellX),s=Math.floor((e+this.halfZ)/this.cellZ);return i<0||i>=this.res||s<0||s>=this.res?-1:s*this.res+i}isSolid(t,e){const i=this.indexOf(t,e);return i<0?!0:this.solid[i]===1}sample(t,e){const i=(t+this.halfX)/this.cellX-.5,s=(e+this.halfZ)/this.cellZ-.5,r=Math.max(0,Math.min(this.res-1,Math.floor(i))),o=Math.max(0,Math.min(this.res-1,Math.floor(s))),a=i-r,l=s-o,c=Math.min(this.res-1,r+1),u=Math.min(this.res-1,o+1),h=this.bilinearMix(this.u,r,o,c,u,a,l),f=this.bilinearMix(this.v,r,o,c,u,a,l);return{x:h*this.cellX,z:f*this.cellZ}}bilinearMix(t,e,i,s,r,o,a){let l=0,c=0,u=(1-o)*(1-a),h=i*this.res+e;return this.solid[h]||(l+=u*t[h],c+=u),u=o*(1-a),h=i*this.res+s,this.solid[h]||(l+=u*t[h],c+=u),u=(1-o)*a,h=r*this.res+e,this.solid[h]||(l+=u*t[h],c+=u),u=o*a,h=r*this.res+s,this.solid[h]||(l+=u*t[h],c+=u),c>1e-6?l/c:0}step(t,e){if(t<=0)return;this.applyInlet(e),this.advect(t),this.vorticityConfine(t),this.project();const i=e*4/this.cellX,s=e*4/this.cellZ;for(let r=0;r<this.solid.length;r++){if(this.solid[r]){this.u[r]=0,this.v[r]=0;continue}const o=Math.abs(this.u[r])>i?i/Math.abs(this.u[r]):1,a=Math.abs(this.v[r])>s?s/Math.abs(this.v[r]):1,l=Math.min(o,a);l<1&&(this.u[r]*=l,this.v[r]*=l)}}setOrigin(t){t!==this.origin&&(this.origin=t,this.reset())}reset(){this.u.fill(0),this.v.fill(0),this.u0.fill(0),this.v0.fill(0),this.p.fill(0),this.p0.fill(0),this.div.fill(0),this.curl.fill(0)}buildSolidMask(){const t=this.layerY();for(let e=0;e<this.res;e++){const i=-this.halfZ+(e+.5)*this.cellZ;for(let s=0;s<this.res;s++){const r=-this.halfX+(s+.5)*this.cellX;this.solid[e*this.res+s]=this.surface(r,i)>t?1:0}}}applyInlet(t){const e=this.res;if(this.origin==="west"||this.origin==="east"){const i=(this.origin==="west"?t:-t)/this.cellX,s=this.origin==="west";for(let r=0;r<e;r++){for(let l=0;l<Df;l++){const c=r*e+(s?l:e-1-l);this.solid[c]||(this.u[c]=i,this.v[c]=0)}const o=r*e+(s?e-1:0),a=r*e+(s?e-2:1);this.solid[o]||(this.u[o]=this.solid[a]?0:this.u[a],this.v[o]=this.solid[a]?0:this.v[a])}for(let r=0;r<e;r++)this.v[r]=0,this.v[(e-1)*e+r]=0}else{const i=(this.origin==="north"?t:-t)/this.cellZ,s=this.origin==="north";for(let r=0;r<e;r++){for(let l=0;l<Df;l++){const c=(s?l:e-1-l)*e+r;this.solid[c]||(this.v[c]=i,this.u[c]=0)}const o=(s?e-1:0)*e+r,a=(s?e-2:1)*e+r;this.solid[o]||(this.u[o]=this.solid[a]?0:this.u[a],this.v[o]=this.solid[a]?0:this.v[a])}for(let r=0;r<e;r++)this.u[r*e]=0,this.u[r*e+e-1]=0}}advect(t){this.u0.set(this.u),this.v0.set(this.v);const e=this.res;for(let i=0;i<e;i++)for(let s=0;s<e;s++){const r=i*e+s;if(this.solid[r])continue;const o=s-this.u0[r]*t,a=i-this.v0[r]*t;this.u[r]=this.sampleGrid(this.u0,o,a),this.v[r]=this.sampleGrid(this.v0,o,a)}}sampleGrid(t,e,i){const s=Math.max(0,Math.min(this.res-1,Math.floor(e))),r=Math.max(0,Math.min(this.res-1,Math.floor(i)));return this.bilinearMix(t,s,r,Math.min(this.res-1,s+1),Math.min(this.res-1,r+1),e-s,i-r)}masked(t,e,i){const s=i*this.res+e;return this.solid[s]?0:t[s]}vorticityConfine(t){const e=this.res;for(let s=1;s<e-1;s++)for(let r=1;r<e-1;r++){const o=s*e+r;if(this.solid[o])continue;const a=this.v[o+1]-this.v[o-1],l=this.u[o+e]-this.u[o-e];this.curl[o]=.5*(a-l)}const i=k1*t;for(let s=2;s<e-2;s++)for(let r=2;r<e-2;r++){const o=s*e+r;if(this.solid[o])continue;const a=Math.abs(this.curl[o+1])-Math.abs(this.curl[o-1]),l=Math.abs(this.curl[o+e])-Math.abs(this.curl[o-e]),c=Math.hypot(a,l)+1e-5,u=a/c,h=l/c,f=this.curl[o];this.u[o]+=i*h*f,this.v[o]-=i*u*f}}project(){const t=this.res;for(let e=1;e<t-1;e++)for(let i=1;i<t-1;i++){const s=e*t+i;if(this.solid[s]){this.div[s]=0;continue}const r=this.masked(this.u,i+1,e)-this.masked(this.u,i-1,e),o=this.masked(this.v,i,e+1)-this.masked(this.v,i,e-1);this.div[s]=-.5*(r+o)}this.p.fill(0),this.p0.fill(0);for(let e=0;e<H1;e++){const i=e%2===0?this.p:this.p0,s=e%2===0?this.p0:this.p;for(let r=1;r<t-1;r++)for(let o=1;o<t-1;o++){const a=r*t+o;if(this.solid[a])continue;const l=this.solid[a-1]?i[a]:i[a-1],c=this.solid[a+1]?i[a]:i[a+1],u=this.solid[a-t]?i[a]:i[a-t],h=this.solid[a+t]?i[a]:i[a+t];s[a]=(l+c+u+h+this.div[a])*.25}}[this.p,this.p0]=[this.p0,this.p];for(let e=1;e<t-1;e++)for(let i=1;i<t-1;i++){const s=e*t+i;if(this.solid[s])continue;const r=this.solid[s-1]?this.p[s]:this.p[s-1],o=this.solid[s+1]?this.p[s]:this.p[s+1],a=this.solid[s-t]?this.p[s]:this.p[s-t],l=this.solid[s+t]?this.p[s]:this.p[s+t];this.u[s]+=.5*(r-o),this.v[s]+=.5*(a-l)}}}const _n=14,W1=16,X1=16,Y1=20,q1=150,j1=32,$1=8,Z1=3,K1="#bfe3ff",Lf=.85;class J1{constructor(t,e,i,s="west"){V(this,"group",new Gi);V(this,"geo");V(this,"mat");V(this,"lines");V(this,"posArr");V(this,"colArr");V(this,"count");V(this,"halfX");V(this,"halfZ");V(this,"field");V(this,"layerY");V(this,"origin");V(this,"px");V(this,"pz");V(this,"stuckTime");V(this,"trail");V(this,"trailHead");V(this,"lastSampleX");V(this,"lastSampleZ");this.field=e,this.layerY=i,this.origin=s,this.halfX=Ht.x/2,this.halfZ=Ht.z/2,this.geo=new Ie,this.mat=new Ca({vertexColors:!0,transparent:!0,depthWrite:!1,blending:oa}),this.lines=new Su(this.geo,this.mat),this.lines.frustumCulled=!1,this.lines.renderOrder=3,this.lines.visible=!1,this.group.add(this.lines),this.allocate(Math.max(1,t))}setMode(t){this.lines.visible=t}setOrigin(t){t!==this.origin&&(this.origin=t,this.scatterAll())}scatterAll(){for(let t=0;t<this.count;t++)this.scatter(t)}setCount(t){t!==this.count&&this.allocate(Math.max(1,t))}update(t){if(!(!this.lines.visible||t<=0)){for(let e=0;e<this.count;e++)this.stepParticle(e,t);this.fillLineBuffers(this.layerY()),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}}getParticlePosition(t){return{x:this.px[t],z:this.pz[t]}}dispose(){this.group.clear(),this.geo.dispose(),this.mat.dispose()}allocate(t){this.count=t;const e=t*(_n-1)*2;this.posArr=new Float32Array(e*3),this.colArr=new Float32Array(e*4),this.px=new Float32Array(t),this.pz=new Float32Array(t),this.stuckTime=new Float32Array(t),this.trail=new Float32Array(t*_n*2),this.trailHead=new Int32Array(t),this.lastSampleX=new Float32Array(t),this.lastSampleZ=new Float32Array(t);for(let i=0;i<t;i++)this.scatter(i);this.geo.setAttribute("position",new he(this.posArr,3)),this.geo.setAttribute("color",new he(this.colArr,4))}stepParticle(t,e){const i=this.field.sample(this.px[t],this.pz[t]),s=i.x*e,r=i.z*e;if(this.px[t]+=s,this.pz[t]+=r,this.px[t]>this.halfX||Math.abs(this.pz[t])>this.halfZ||this.field.isSolid(this.px[t],this.pz[t])){this.respawn(t);return}if(Math.hypot(s,r)<$1*e){if(this.stuckTime[t]+=e,this.stuckTime[t]>=Z1){this.respawn(t);return}}else this.stuckTime[t]=0;Math.hypot(this.px[t]-this.lastSampleX[t],this.pz[t]-this.lastSampleZ[t])>=W1&&this.pushTrail(t)}scatter(t){for(let e=0;e<j1;e++){const i=(Math.random()*2-1)*this.halfX*.98,s=(Math.random()*2-1)*this.halfZ*.98;if(!this.field.isSolid(i,s)){this.placeAt(t,i,s);return}}this.respawn(t)}respawn(t){const e=Y1+Math.random()*q1;switch(this.origin){case"west":this.placeAt(t,-this.halfX+e,this.pickSpawnCoord(-this.halfX+e,!0));break;case"east":this.placeAt(t,this.halfX-e,this.pickSpawnCoord(this.halfX-e,!0));break;case"south":this.placeAt(t,this.pickSpawnCoord(this.halfZ-e,!1),this.halfZ-e);break;case"north":this.placeAt(t,this.pickSpawnCoord(-this.halfZ+e,!1),-this.halfZ+e);break}}placeAt(t,e,i){this.px[t]=e,this.pz[t]=i,this.stuckTime[t]=0,this.lastSampleX[t]=e,this.lastSampleZ[t]=i,this.trailHead[t]=0;const s=t*_n*2;for(let r=0;r<_n;r++)this.trail[s+r*2]=e,this.trail[s+r*2+1]=i}pickSpawnCoord(t,e){const i=(e?this.halfZ:this.halfX)*.98;for(let o=0;o<X1;o++){const a=(Math.random()*2-1)*i;if(!this.field.isSolid(e?t:a,e?a:t))return a}const s=256,r=Math.random()<.5?1:-1;for(let o=0;o<=s;o++){const a=r*(-i+2*i*o/s);if(!this.field.isSolid(e?t:a,e?a:t))return a}return(Math.random()*2-1)*i}pushTrail(t){const e=this.trailHead[t],i=t*_n*2;this.trail[i+e*2]=this.px[t],this.trail[i+e*2+1]=this.pz[t],this.trailHead[t]=(e+1)%_n,this.lastSampleX[t]=this.px[t],this.lastSampleZ[t]=this.pz[t]}fillLineBuffers(t){const e=Q1(K1);let i=0;for(let s=0;s<this.count;s++){const r=this.trailHead[s],o=s*_n*2;let a=this.px[s],l=this.pz[s];for(let c=0;c<_n-1;c++){const u=((r-c-1)%_n+_n)%_n,h=this.trail[o+u*2],f=this.trail[o+u*2+1],p=Lf*(1-c/(_n-1)),g=Lf*(1-(c+1)/(_n-1)),v=i*3,m=i*4;this.posArr[v]=a,this.posArr[v+1]=t,this.posArr[v+2]=l,this.colArr[m]=e.r,this.colArr[m+1]=e.g,this.colArr[m+2]=e.b,this.colArr[m+3]=p,i++,this.posArr[i*3]=h,this.posArr[i*3+1]=t,this.posArr[i*3+2]=f,this.colArr[i*4]=e.r,this.colArr[i*4+1]=e.g,this.colArr[i*4+2]=e.b,this.colArr[i*4+3]=g,i++,a=h,l=f}}}}function Q1(n){const t=parseInt(n.slice(1),16);return{r:(t>>16&255)/255,g:(t>>8&255)/255,b:(t&255)/255}}const tb=6;class eb{constructor(t){V(this,"fluid");V(this,"terrain",null);V(this,"terrainData",null);V(this,"solver",null);V(this,"water",null);V(this,"rainSystem",null);V(this,"windField",null);V(this,"windSystem",null);V(this,"boundsHelper",null);V(this,"raycaster",new Y_);V(this,"lastSimNx",N.simNx);V(this,"lastSimNz",N.simNz);V(this,"lastMode",N.mode);V(this,"lastTool",N.tool);V(this,"lastParticleCount",N.particleCount);V(this,"lastWindParticleCount",N.windParticleCount);V(this,"lastWindOrigin",N.windOrigin);V(this,"lastGlobalBrightness",N.globalBrightness);V(this,"teapotMesh",null);V(this,"lastPointerWorld",null);V(this,"lastBrushWorld",null);V(this,"fillDownScreen",null);V(this,"fpsAcc",0);V(this,"fpsFrames",0);V(this,"onPointerDown",t=>{N.tool==="orbit"||N.tool==="rain"||!this.solver||(this.lastPointerWorld=this.pickWorld(t),N.tool==="sprinkle"&&(this.lastBrushWorld=this.lastPointerWorld),N.tool==="fill"&&(this.fillDownScreen={x:t.clientX,y:t.clientY}))});V(this,"onPointerMove",t=>{const e=this.pickWorld(t);if(e&&ra.value&&this.terrainData){xi.lon=un.west+(e.x+Ht.x/2)/Ht.x*(un.east-un.west),xi.lat=un.south+(e.z+Ht.z/2)/Ht.z*(un.north-un.south),xi.elevation=this.terrain.sampleElevation(e.x,e.z);const s=this.solver;if(s){const r=s.Nx,o=s.Nz,a=s.cellX,l=s.cellZ,c=Math.floor((e.x+Ht.x/2)/a),u=Math.floor((e.z+Ht.z/2)/l);if(c>=0&&c<r&&u>=0&&u<o){const h=u*r+c;xi.waterDepth=Math.max(0,s.h[h])}else xi.waterDepth=0}}const i=this.solver;if(i&&!(N.tool==="orbit"||N.tool==="rain")&&e){if(N.tool==="sprinkle")this.lastBrushWorld=e;else if(N.tool==="push"){if(this.lastPointerWorld){const s=e.x-this.lastPointerWorld.x,r=e.z-this.lastPointerWorld.z,o=Math.hypot(s,r);if(o>.5){const a=Math.min(o,12)*N.pushStrength*.003;i.addPush(e.x,e.z,s/o*a,r/o*a,1,N.pushRadius)}}this.lastBrushWorld=e}this.lastPointerWorld=e}});V(this,"onPointerUp",t=>{if(N.tool==="fill"&&this.fillDownScreen&&Math.hypot(t.clientX-this.fillDownScreen.x,t.clientY-this.fillDownScreen.y)<=tb){const i=this.pickWorld(t);i&&this.addFillWater(i.x,i.z)}this.fillDownScreen=null,this.lastPointerWorld=null});this.fluid=new r1(t),Lr.current=this}async init(){this.fluid.init(),this.fluid.onBeforeRender=a=>this.onBeforeRender(a);const t="./";this.terrain=new P1,await this.terrain.load(t+"texture-terrain.png"),this.terrainData=this.terrain.terrainData,Ht.x=this.terrainData.worldSize.x,Ht.z=this.terrainData.worldSize.z,je.terrainMin=this.terrainData.minElev,je.terrainMax=this.terrainData.maxElev,je.terrainRange=this.terrainData.maxElev-this.terrainData.minElev,bg(this.terrainData.metadata);const e=(a,l)=>{const c=this.terrainData;return c?(Eu(c,a,l)-c.minElev)*N.vertExag:0};this.rainSystem=new o1(4e3,e,t+"rain.png"),this.fluid.add(this.rainSystem.group);const i=()=>{var a;return(Yd-(((a=this.terrainData)==null?void 0:a.minElev)??0))*N.vertExag};this.windField=new G1(e,i,N.windOrigin),this.windSystem=new J1(N.windParticleCount,this.windField,i,N.windOrigin),this.fluid.add(this.windSystem.group),this.fluid.add(this.terrain),this.terrain.scale.y=N.vertExag,this.terrain.geometry.computeBoundingBox();const s=this.terrain.geometry.boundingBox.clone();s.min.y=0,this.boundsHelper=new q_(s,"#ffff44"),this.fluid.add(this.boundsHelper),this.fluid.buildBasePlane(Ht.x,Ht.z),this.solver=this.createSolver(),this.water=new z1(this.solver),this.fluid.add(this.water.group);const r=new Gy(80),o=new F_({color:"#888800"});this.teapotMesh=new dn(r,o),this.teapotMesh.visible=!1,this.teapotMesh.rotation.z=-Math.PI/3,this.fluid.add(this.teapotMesh),this.bindEvents()}onBeforeRender(t){var e,i,s,r;if(N.globalBrightness!==this.lastGlobalBrightness&&(this.lastGlobalBrightness=N.globalBrightness,this.fluid.updateLights()),this.terrain&&(this.terrain.visible=N.showTerrain,this.terrain.scale.y=N.vertExag,this.boundsHelper&&this.terrain.geometry.boundingBox)){const o=this.terrain.geometry.boundingBox,a=this.boundsHelper.box;a.min.set(o.min.x,0,o.min.z),a.max.set(o.max.x,o.max.y*N.vertExag,o.max.z)}if(this.teapotMesh&&(N.tool==="sprinkle"&&this.lastBrushWorld?(this.teapotMesh.visible=!0,this.teapotMesh.position.x=this.lastBrushWorld.x-150,this.teapotMesh.position.y=this.lastBrushWorld.y+1200,this.teapotMesh.position.z=this.lastBrushWorld.z):this.teapotMesh.visible=!1),this.solver&&this.water){if(N.tool!==this.lastTool&&(this.lastTool==="rain"&&N.tool!=="rain"&&((i=(e=this.solver).syncState)==null||i.call(e)),this.lastTool=N.tool,this.lastPointerWorld=null,this.lastBrushWorld=null),N.mode!==this.lastMode?(this.lastMode=N.mode,this.lastSimNx=N.simNx,this.lastSimNz=N.simNz,this.rebuildSolver()):(N.simNx!==this.lastSimNx||N.simNz!==this.lastSimNz)&&(this.lastSimNx=N.simNx,this.lastSimNz=N.simNz,this.solver.setSize(N.simNx,N.simNz),this.water.rebuild()),N.particleCount!==this.lastParticleCount&&(this.lastParticleCount=N.particleCount,this.water.rebuild()),N.tool==="sprinkle"&&this.lastBrushWorld){const o=this.lastBrushWorld;this.solver.addWater(o.x,o.z,N.brushRainRate,t*N.timeScale,N.waterRadius)}N.tool==="rain"&&N.rain>0&&this.solver.addRain(t*N.timeScale),this.solver.step(t),this.water.update(t),je.volume=this.solver.getVolume(),je.infiltratedVolume=this.solver.infiltratedVolume??0,je.maxWater=this.solver.maxWater,je.simTime=this.solver.simTime}if(this.water&&this.water.updateLights(this.fluid.getDirLight().position,this.fluid.getDirLight().color),(r=(s=this.terrain)==null?void 0:s.material)!=null&&r.uniforms&&this.terrain.update({rampBlend:N.rampBlend,wireframe:N.wireframe}),this.boundsHelper&&(this.boundsHelper.visible=N.showBounds),this.rainSystem){const o=N.tool==="rain"&&N.rain>0?"rain":N.tool==="sprinkle"?"brush":null;if(this.rainSystem.setMode(o),o){const a=this.lastBrushWorld,l=this.fluid.getControls().target;this.rainSystem.update(t,o,o==="brush"?a?a.x:0:l.x,o==="brush"?a?a.z:0:l.z,o==="brush"?N.waterRadius:2200)}}this.windField&&this.windSystem&&(N.windParticleCount!==this.lastWindParticleCount&&(this.lastWindParticleCount=N.windParticleCount,this.windSystem.setCount(N.windParticleCount)),N.windOrigin!==this.lastWindOrigin&&(this.lastWindOrigin=N.windOrigin,this.windField.setOrigin(N.windOrigin),this.windSystem.setOrigin(N.windOrigin)),this.windSystem.setMode(N.windParticles),N.windParticles&&(this.windField.step(t,N.windSpeed),this.windSystem.update(t))),this.fpsAcc+=t,this.fpsFrames++,this.fpsAcc>=.5&&(je.fps=Math.round(this.fpsFrames/this.fpsAcc),this.fpsAcc=0,this.fpsFrames=0)}createSolver(){if(!this.terrainData)throw new Error("terrainData 尚未初始化");const t=(e,i)=>this.terrain.sampleElevation(e,i);return N.mode==="gpu"?new v1(this.fluid.getRenderer(),t,this.terrainData,N):new p1(t,this.terrainData,N)}rebuildSolver(){var t,e,i;(e=(t=this.solver)==null?void 0:t.dispose)==null||e.call(t),this.solver=this.createSolver(),(i=this.water)==null||i.setSolver(this.solver),Ws(`已切换至 ${N.mode==="gpu"?"GPU":"CPU"} 求解，水体已清空`)}bindEvents(){this.fluid.getRenderer().domElement.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp)}pickWorld(t){const e=this.fluid.getRenderer().domElement.getBoundingClientRect(),i=new Gt((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1);this.raycaster.setFromCamera(i,this.fluid.getCamera());const s=this.terrain;if(!s)return null;const r=this.raycaster.intersectObject(s,!1);if(r.length===0)return null;const o=r[0].point;return Math.abs(o.x)>Ht.x/2||Math.abs(o.z)>Ht.z/2?null:o}resetWater(){var t,e;(t=this.solver)==null||t.reset(),(e=this.water)==null||e.clear()}flood(){const t=this.solver;if(!t)return;const e=t.Nx*t.Nz,i=new Float64Array(e);for(let r=0;r<e;r++)i[r]=t.bed[r]+t.h[r];const s=l1(i,yg,t.cellX*t.cellZ);t.fillToLevel(s)}async copySceneImage(){var e;this.fluid.render();const t=this.fluid.getRenderer().domElement;if(!((e=navigator.clipboard)!=null&&e.write)||typeof ClipboardItem>"u"){window.alert("当前浏览器不支持复制图片到剪贴板");return}try{const i=await new Promise((s,r)=>{t.toBlob(o=>{o?s(o):r(new Error("场景图生成失败"))},"image/png")});await navigator.clipboard.write([new ClipboardItem({[i.type]:i})])}catch(i){console.error(i),window.alert("复制场景图失败，请检查浏览器剪贴板权限")}}dispose(){var t,e,i,s;window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this.fluid.getRenderer().domElement.removeEventListener("pointerdown",this.onPointerDown),(t=this.rainSystem)==null||t.dispose(),(e=this.windSystem)==null||e.dispose(),(s=(i=this.solver)==null?void 0:i.dispose)==null||s.call(i),this.fluid.dispose(),Lr.current=null}addFillWater(t,e){const i=this.solver;i&&i.addVolume(t,e,N.fillVolume,N.fillRadius)}}const nb={class:"map-info-overlay"},ib={class:"info-row"},sb={class:"info-val"},rb={class:"info-row"},ob={class:"info-val"},ab={class:"info-row"},lb={class:"info-val"},cb={class:"info-row"},ub={class:"info-val"},hb={class:"info-row"},fb={class:"info-val"},db={class:"info-row"},pb={class:"info-val"},mb={class:"info-row"},gb={class:"info-val"},_b=Zi({__name:"MapInfoOverlay",setup(n){const t=cn(()=>ra?`${un.west.toFixed(4)}° ~ ${un.east.toFixed(4)}°`:"--"),e=cn(()=>ra?`${un.south.toFixed(4)}° ~ ${un.north.toFixed(4)}°`:"--"),i=cn(()=>`${je.terrainMin.toFixed(0)} ~ ${je.terrainMax.toFixed(0)} m`),s=cn(()=>`${je.terrainRange.toFixed(0)} m`),r=cn(()=>`${je.maxWater.toFixed(2)} m`),o=cn(()=>`${(je.volume/1e4).toFixed(2)} 万 m³`),a=cn(()=>`${(je.infiltratedVolume/1e4).toFixed(2)} 万 m³`),l=cn(()=>{const c=je.simTime;return c>=86400?`${(c/86400).toFixed(3)} 日`:c>=3600?`${(c/3600).toFixed(3)} 时`:c>=60?`${(c/60).toFixed(3)} 分`:`${c.toFixed(3)} 秒`});return(c,u)=>(Be(),hn("div",nb,[I("div",ib,[u[0]||(u[0]=I("span",{class:"info-label"},"经度",-1)),I("span",sb,$t(t.value),1)]),I("div",rb,[u[1]||(u[1]=I("span",{class:"info-label"},"纬度",-1)),I("span",ob,$t(e.value),1)]),I("div",ab,[u[2]||(u[2]=I("span",{class:"info-label"},"高度",-1)),I("span",lb,$t(i.value)+" △ "+$t(s.value),1)]),u[7]||(u[7]=I("div",{class:"divider"},null,-1)),I("div",cb,[u[3]||(u[3]=I("span",{class:"info-label"},"推演时长",-1)),I("span",ub,$t(l.value),1)]),I("div",hb,[u[4]||(u[4]=I("span",{class:"info-label"},"地面水量",-1)),I("span",fb,$t(o.value),1)]),I("div",db,[u[5]||(u[5]=I("span",{class:"info-label"},"下渗水量",-1)),I("span",pb,$t(a.value),1)]),I("div",mb,[u[6]||(u[6]=I("span",{class:"info-label"},"最大水深",-1)),I("span",gb,$t(r.value),1)])]))}}),vb=ys(_b,[["__scopeId","data-v-221c4f82"]]),xb=Zi({__name:"SceneCanvas",setup(n){const t=or();let e=null;return ba(async()=>{e=new eb(t.value),await e.init()}),Qc(()=>{e==null||e.dispose(),e=null}),(i,s)=>(Be(),hn("div",{ref_key:"container",ref:t,class:"scene-canvas"},null,512))}}),Sb=ys(xb,[["__scopeId","data-v-008d1225"]]),Mb={class:"section"},yb={class:"section-body"},cs=Zi({__name:"Section",props:{title:{type:String,required:!0},defaultOpen:{type:Boolean,default:!0}},setup(n){const t=n,e=or(t.defaultOpen);return Cr(()=>t.defaultOpen,i=>{e.value=i}),(i,s)=>(Be(),hn("div",Mb,[I("div",{class:"section-header",onClick:s[0]||(s[0]=r=>e.value=!e.value)},[I("span",{class:Fn(["arrow",{open:e.value}])},"▶",2),I("span",null,$t(n.title),1)]),ie(I("div",yb,[Xm(i.$slots,"default")],512),[[G0,e.value]])]))}}),bb={class:"side-panel"},Eb={class:"panel-content"},Tb={class:"row"},wb={class:"val-mono"},Ab={class:"control"},Cb={class:"row"},Rb={class:"val-mono"},Pb={class:"control"},Db={class:"row"},Lb={class:"val-mono"},Ib={class:"control"},Ub={class:"row"},Fb={class:"control inline"},Nb={class:"row"},Ob={class:"control inline"},Bb={class:"row"},zb={class:"control inline"},Vb={class:"row"},Hb={class:"control"},kb={class:"vs-seg"},Gb=["onClick"],Wb={class:"row"},Xb={class:"control"},Yb=["value"],qb={class:"row"},jb={class:"val-mono"},$b={class:"control"},Zb={class:"row"},Kb={class:"val-mono"},Jb={class:"control"},Qb={class:"row"},tE={class:"val-mono"},eE={class:"control"},nE={class:"row"},iE={class:"val-mono"},sE={class:"control"},rE={class:"row"},oE={class:"val-mono"},aE={class:"control"},lE={class:"row"},cE={class:"val-mono"},uE={class:"control"},hE={class:"row"},fE={class:"val-mono"},dE={class:"control"},pE={class:"row"},mE={class:"val-mono"},gE={class:"control"},_E={class:"row"},vE={class:"control inline"},xE={class:"row"},SE={class:"control inline"},ME={class:"row"},yE={class:"val-mono"},bE={class:"control"},EE={class:"row"},TE={class:"val-mono"},wE={class:"control"},AE={class:"row"},CE={class:"val-mono"},RE={class:"control"},PE={class:"row"},DE={class:"val-mono"},LE={class:"control"},IE={class:"row"},UE={class:"control inline",style:{width:"52px"}},FE={class:"row"},NE={class:"control inline",style:{width:"52px"}},OE={class:"row"},BE={class:"control inline"},zE={class:"row"},VE={class:"val-mono"},HE={class:"control"},kE={class:"row"},GE={class:"control inline"},WE={class:"row"},XE={class:"control inline"},YE={class:"row"},qE={class:"val-mono"},jE={class:"control"},$E={class:"row"},ZE={class:"val-mono"},KE={class:"control"},JE={class:"row"},QE={class:"control inline"},tT={class:"row"},eT={class:"control inline"},nT={class:"row"},iT={class:"control"},sT={class:"vs-seg"},rT=["onClick"],oT={class:"row"},aT={class:"val-mono"},lT={class:"control"},cT={class:"row"},uT={class:"val-mono"},hT={class:"control"},fT={class:"hint-text"},dT=Zi({__name:"SidePanel",setup(n){const t=[{id:"gpu",label:"GPU"},{id:"cpu",label:"CPU"}],e=[{id:"east",label:"东"},{id:"south",label:"南"},{id:"west",label:"西"},{id:"north",label:"北"}],i={east:"自东向西",south:"自南向北",west:"自西向东",north:"自北向南"},s=[128,192,256,384,512];return Cr(()=>N.simNx,r=>{N.simNz=r}),(r,o)=>(Be(),hn("aside",bb,[I("div",Eb,[xe(cs,{title:"环境地形参数","default-open":""},{default:di(()=>[I("div",Tb,[o[33]||(o[33]=I("span",{class:"label"},"环境亮度",-1)),I("span",wb,$t((ct(N).globalBrightness*100).toFixed(0))+"%",1),I("div",Ab,[ie(I("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>ct(N).globalBrightness=a),type:"range",class:"vs-range",min:"0.5",max:"2",step:"0.1"},null,512),[[Ce,ct(N).globalBrightness,void 0,{number:!0}]])])]),I("div",Cb,[o[34]||(o[34]=I("span",{class:"label"},"垂直夸张",-1)),I("span",Rb,$t(ct(N).vertExag.toFixed(1))+"×",1),I("div",Pb,[ie(I("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>ct(N).vertExag=a),type:"range",class:"vs-range",min:"1",max:"5",step:"0.1"},null,512),[[Ce,ct(N).vertExag,void 0,{number:!0}]])])]),I("div",Db,[o[35]||(o[35]=I("span",{class:"label"},"高程混合",-1)),I("span",Lb,$t(Math.round(ct(N).rampBlend*100))+"%",1),I("div",Ib,[ie(I("input",{"onUpdate:modelValue":o[2]||(o[2]=a=>ct(N).rampBlend=a),type:"range",class:"vs-range",min:"0",max:"1",step:"0.01"},null,512),[[Ce,ct(N).rampBlend,void 0,{number:!0}]])])]),I("div",Ub,[o[36]||(o[36]=I("span",{class:"label"},"线框显示",-1)),I("div",Fb,[ie(I("input",{"onUpdate:modelValue":o[3]||(o[3]=a=>ct(N).wireframe=a),type:"checkbox",class:"vs-check"},null,512),[[Wn,ct(N).wireframe]])])]),I("div",Nb,[o[37]||(o[37]=I("span",{class:"label"},"包围框",-1)),I("div",Ob,[ie(I("input",{"onUpdate:modelValue":o[4]||(o[4]=a=>ct(N).showBounds=a),type:"checkbox",class:"vs-check"},null,512),[[Wn,ct(N).showBounds]])])]),I("div",Bb,[o[38]||(o[38]=I("span",{class:"label"},"显示地图",-1)),I("div",zb,[ie(I("input",{"onUpdate:modelValue":o[5]||(o[5]=a=>ct(N).showTerrain=a),type:"checkbox",class:"vs-check"},null,512),[[Wn,ct(N).showTerrain]])])])]),_:1}),xe(cs,{title:"流体仿真参数","default-open":""},{default:di(()=>[I("div",Vb,[o[39]||(o[39]=I("span",{class:"label"},"计算模式",-1)),I("div",Hb,[I("div",kb,[(Be(),hn(Ge,null,Va(t,a=>I("button",{key:a.id,class:Fn({active:ct(N).mode===a.id}),onClick:l=>ct(N).mode=a.id},$t(a.label),11,Gb)),64))])])]),I("div",Wb,[o[40]||(o[40]=I("span",{class:"label"},"网格分辨率",-1)),I("div",Xb,[ie(I("select",{"onUpdate:modelValue":o[6]||(o[6]=a=>ct(N).simNx=a),class:"vs-select"},[(Be(),hn(Ge,null,Va(s,a=>I("option",{key:a,value:a},$t(a)+" × "+$t(a),9,Yb)),64))],512),[[ag,ct(N).simNx,void 0,{number:!0}]])])]),I("div",qb,[o[41]||(o[41]=I("span",{class:"label"},"重力 g",-1)),I("span",jb,$t(ct(N).gravity.toFixed(1)),1),I("div",$b,[ie(I("input",{"onUpdate:modelValue":o[7]||(o[7]=a=>ct(N).gravity=a),type:"range",class:"vs-range",min:"0",max:"20",step:"0.1"},null,512),[[Ce,ct(N).gravity,void 0,{number:!0}]])])]),I("div",Zb,[o[42]||(o[42]=I("span",{class:"label"},"摩擦阻尼",-1)),I("span",Kb,$t(ct(N).friction.toFixed(2)),1),I("div",Jb,[ie(I("input",{"onUpdate:modelValue":o[8]||(o[8]=a=>ct(N).friction=a),type:"range",class:"vs-range",min:"0",max:"1",step:"0.01"},null,512),[[Ce,ct(N).friction,void 0,{number:!0}]])])]),I("div",Qb,[o[43]||(o[43]=I("span",{class:"label"},"最大流速",-1)),I("span",tE,$t(ct(N).maxSpeed.toFixed(0))+" m/s",1),I("div",eE,[ie(I("input",{"onUpdate:modelValue":o[9]||(o[9]=a=>ct(N).maxSpeed=a),type:"range",class:"vs-range",min:"2",max:"60",step:"1"},null,512),[[Ce,ct(N).maxSpeed,void 0,{number:!0}]])])]),I("div",nE,[o[44]||(o[44]=I("span",{class:"label"},"时间倍率",-1)),I("span",iE,$t(ct(N).timeScale)+"×",1),I("div",sE,[ie(I("input",{"onUpdate:modelValue":o[10]||(o[10]=a=>ct(N).timeScale=a),type:"range",class:"vs-range",min:"1",max:"1440",step:"1"},null,512),[[Ce,ct(N).timeScale,void 0,{number:!0}]])])])]),_:1}),xe(cs,{title:"降水模拟参数"},{default:di(()=>[I("div",rE,[o[45]||(o[45]=I("span",{class:"label"},"降雨强度",-1)),I("span",oE,$t(ct(N).rain.toFixed(0))+" mm/h",1),I("div",aE,[ie(I("input",{"onUpdate:modelValue":o[11]||(o[11]=a=>ct(N).rain=a),type:"range",class:"vs-range",min:"0",max:"5000",step:"10"},null,512),[[Ce,ct(N).rain,void 0,{number:!0}]])])]),I("div",lE,[o[46]||(o[46]=I("span",{class:"label"},"浇水强度",-1)),I("span",cE,$t(ct(N).brushRainRate.toFixed(1))+" m/s",1),I("div",uE,[ie(I("input",{"onUpdate:modelValue":o[12]||(o[12]=a=>ct(N).brushRainRate=a),type:"range",class:"vs-range",min:"1",max:"20",step:"0.1"},null,512),[[Ce,ct(N).brushRainRate,void 0,{number:!0}]])])]),I("div",hE,[o[47]||(o[47]=I("span",{class:"label"},"浇灌雨量",-1)),I("span",fE,$t((ct(N).fillVolume/1e4).toFixed(0))+" 万 m³",1),I("div",dE,[ie(I("input",{"onUpdate:modelValue":o[13]||(o[13]=a=>ct(N).fillVolume=a),type:"range",class:"vs-range",min:"100000",max:"10000000",step:"100000"},null,512),[[Ce,ct(N).fillVolume,void 0,{number:!0}]])])]),I("div",pE,[o[48]||(o[48]=I("span",{class:"label"},"扰动强度",-1)),I("span",mE,$t(ct(N).pushStrength.toFixed(0)),1),I("div",gE,[ie(I("input",{"onUpdate:modelValue":o[14]||(o[14]=a=>ct(N).pushStrength=a),type:"range",class:"vs-range",min:"50",max:"3000",step:"10"},null,512),[[Ce,ct(N).pushStrength,void 0,{number:!0}]])])])]),_:1}),xe(cs,{title:"排水模拟参数"},{default:di(()=>[I("div",_E,[o[49]||(o[49]=I("span",{class:"label"},"边界排水",-1)),I("div",vE,[ie(I("input",{"onUpdate:modelValue":o[15]||(o[15]=a=>ct(N).drainBoundary=a),type:"checkbox",class:"vs-check"},null,512),[[Wn,ct(N).drainBoundary]])])]),I("div",xE,[o[50]||(o[50]=I("span",{class:"label"},"地表水下渗",-1)),I("div",SE,[ie(I("input",{"onUpdate:modelValue":o[16]||(o[16]=a=>ct(N).infiltration=a),type:"checkbox",class:"vs-check"},null,512),[[Wn,ct(N).infiltration]])])]),ct(N).infiltration?(Be(),hn(Ge,{key:0},[I("div",ME,[o[51]||(o[51]=I("span",{class:"label"},"初始下渗率",-1)),I("span",yE,$t(ct(N).infilF0.toFixed(0))+" mm/h",1),I("div",bE,[ie(I("input",{"onUpdate:modelValue":o[17]||(o[17]=a=>ct(N).infilF0=a),type:"range",class:"vs-range",min:"10",max:"300",step:"5"},null,512),[[Ce,ct(N).infilF0,void 0,{number:!0}]])])]),I("div",EE,[o[52]||(o[52]=I("span",{class:"label"},"稳定下渗率",-1)),I("span",TE,$t(ct(N).infilFc.toFixed(0))+" mm/h",1),I("div",wE,[ie(I("input",{"onUpdate:modelValue":o[18]||(o[18]=a=>ct(N).infilFc=a),type:"range",class:"vs-range",min:"1",max:"100",step:"1"},null,512),[[Ce,ct(N).infilFc,void 0,{number:!0}]])])]),I("div",AE,[o[53]||(o[53]=I("span",{class:"label"},"衰减系数",-1)),I("span",CE,$t(ct(N).infilK.toFixed(1))+" 1/h",1),I("div",RE,[ie(I("input",{"onUpdate:modelValue":o[19]||(o[19]=a=>ct(N).infilK=a),type:"range",class:"vs-range",min:"0.5",max:"10",step:"0.1"},null,512),[[Ce,ct(N).infilK,void 0,{number:!0}]])])])],64)):Vr("",!0)]),_:1}),xe(cs,{title:"水面渲染参数","default-open":""},{default:di(()=>[I("div",PE,[o[54]||(o[54]=I("span",{class:"label"},"透明度",-1)),I("span",DE,$t(Math.round(ct(N).waterOpacity*100))+"%",1),I("div",LE,[ie(I("input",{"onUpdate:modelValue":o[20]||(o[20]=a=>ct(N).waterOpacity=a),type:"range",class:"vs-range",min:"0.1",max:"1",step:"0.01"},null,512),[[Ce,ct(N).waterOpacity,void 0,{number:!0}]])])]),I("div",IE,[o[55]||(o[55]=I("span",{class:"label"},"浅水色",-1)),I("div",UE,[ie(I("input",{"onUpdate:modelValue":o[21]||(o[21]=a=>ct(N).waterShallowColor=a),type:"color",class:"vs-color"},null,512),[[Ce,ct(N).waterShallowColor]])])]),I("div",FE,[o[56]||(o[56]=I("span",{class:"label"},"深水色",-1)),I("div",NE,[ie(I("input",{"onUpdate:modelValue":o[22]||(o[22]=a=>ct(N).waterDeepColor=a),type:"color",class:"vs-color"},null,512),[[Ce,ct(N).waterDeepColor]])])]),I("div",OE,[o[57]||(o[57]=I("span",{class:"label"},"波光扰动",-1)),I("div",BE,[ie(I("input",{"onUpdate:modelValue":o[23]||(o[23]=a=>ct(N).showWaves=a),type:"checkbox",class:"vs-check"},null,512),[[Wn,ct(N).showWaves]])])]),I("div",zE,[o[58]||(o[58]=I("span",{class:"label"},"扰动尺度",-1)),I("span",VE,$t(ct(N).waveScale),1),I("div",HE,[ie(I("input",{"onUpdate:modelValue":o[24]||(o[24]=a=>ct(N).waveScale=a),type:"range",class:"vs-range",min:"10",max:"500",step:"5"},null,512),[[Ce,ct(N).waveScale,void 0,{number:!0}]])])]),I("div",kE,[o[59]||(o[59]=I("span",{class:"label"},"边缘抗锯齿",-1)),I("div",GE,[ie(I("input",{"onUpdate:modelValue":o[25]||(o[25]=a=>ct(N).alphaToCoverage=a),type:"checkbox",class:"vs-check"},null,512),[[Wn,ct(N).alphaToCoverage]])])])]),_:1}),xe(cs,{title:"流场模拟参数"},{default:di(()=>[I("div",WE,[o[60]||(o[60]=I("span",{class:"label"},"流动粒子",-1)),I("div",XE,[ie(I("input",{"onUpdate:modelValue":o[26]||(o[26]=a=>ct(N).particles=a),type:"checkbox",class:"vs-check"},null,512),[[Wn,ct(N).particles]])])]),I("div",YE,[o[61]||(o[61]=I("span",{class:"label"},"粒子数量",-1)),I("span",qE,$t(ct(N).particleCount),1),I("div",jE,[ie(I("input",{"onUpdate:modelValue":o[27]||(o[27]=a=>ct(N).particleCount=a),type:"range",class:"vs-range",min:"100",max:"2000",step:"100"},null,512),[[Ce,ct(N).particleCount,void 0,{number:!0}]])])]),I("div",$E,[o[62]||(o[62]=I("span",{class:"label"},"粒子尺寸",-1)),I("span",ZE,$t(ct(N).particleSize.toFixed(0)),1),I("div",KE,[ie(I("input",{"onUpdate:modelValue":o[28]||(o[28]=a=>ct(N).particleSize=a),type:"range",class:"vs-range",min:"4",max:"48",step:"2"},null,512),[[Ce,ct(N).particleSize,void 0,{number:!0}]])])]),I("div",JE,[o[63]||(o[63]=I("span",{class:"label"},"速度场箭头",-1)),I("div",QE,[ie(I("input",{"onUpdate:modelValue":o[29]||(o[29]=a=>ct(N).showArrows=a),type:"checkbox",class:"vs-check"},null,512),[[Wn,ct(N).showArrows]])])]),o[64]||(o[64]=I("p",{class:"hint-text"},[Dr(" 粒子与箭头颜色随流速变化："),I("span",{class:"speed-blue"},"蓝"),Dr("→"),I("span",{class:"speed-green"},"绿"),Dr("→"),I("span",{class:"speed-red"},"红")],-1))]),_:1}),xe(cs,{title:"风流场可视化"},{default:di(()=>[I("div",tT,[o[65]||(o[65]=I("span",{class:"label"},"风流线",-1)),I("div",eT,[ie(I("input",{"onUpdate:modelValue":o[30]||(o[30]=a=>ct(N).windParticles=a),type:"checkbox",class:"vs-check"},null,512),[[Wn,ct(N).windParticles]])])]),I("div",nT,[o[66]||(o[66]=I("span",{class:"label"},"起始方位",-1)),I("div",iT,[I("div",sT,[(Be(),hn(Ge,null,Va(e,a=>I("button",{key:a.id,class:Fn({active:ct(N).windOrigin===a.id}),onClick:l=>ct(N).windOrigin=a.id},$t(a.label),11,rT)),64))])])]),I("div",oT,[o[67]||(o[67]=I("span",{class:"label"},"流线数量",-1)),I("span",aT,$t(ct(N).windParticleCount),1),I("div",lT,[ie(I("input",{"onUpdate:modelValue":o[31]||(o[31]=a=>ct(N).windParticleCount=a),type:"range",class:"vs-range",min:"100",max:"3000",step:"100"},null,512),[[Ce,ct(N).windParticleCount,void 0,{number:!0}]])])]),I("div",cT,[o[68]||(o[68]=I("span",{class:"label"},"风速 m/s",-1)),I("span",uT,$t(ct(N).windSpeed.toFixed(0)),1),I("div",hT,[ie(I("input",{"onUpdate:modelValue":o[32]||(o[32]=a=>ct(N).windSpeed=a),type:"range",class:"vs-range",min:"20",max:"400",step:"10"},null,512),[[Ce,ct(N).windSpeed,void 0,{number:!0}]])])]),I("p",fT," 流线位于海拔 "+$t(ct(Yd))+" 米等高面，"+$t(i[ct(N).windOrigin])+"流动，遇高山自动绕行 ",1)]),_:1})])]))}}),pT=ys(dT,[["__scopeId","data-v-7ebc26fa"]]),mT={name:"GuoJiangFeng",email:"hz_gjf@163.com"},gT={author:mT},_T={class:"statusbar"},vT={class:"sb-group"},xT={class:"sb-item"},ST={class:"sb-item"},MT={class:"sb-item"},yT={class:"sb-item"},bT={class:"sb-group"},ET={class:"sb-item"},TT={class:"sb-item"},wT=Zi({__name:"StatusBar",setup(n){const t=gT.author,e=cn(()=>`${t.name} ©2026 <${t.email}>`),i=cn(()=>xi.lon.toFixed(6)),s=cn(()=>xi.lat.toFixed(6)),r=cn(()=>xi.elevation.toFixed(1)),o=cn(()=>xi.waterDepth.toFixed(2));return(a,l)=>(Be(),hn("footer",_T,[I("div",vT,[l[0]||(l[0]=I("div",{class:"sb-item"},[I("i",{class:"dot"}),Dr("就绪")],-1)),I("div",xT,"经度 "+$t(i.value)+"°",1),I("div",ST,"纬度 "+$t(s.value)+"°",1),I("div",MT,"高程 "+$t(r.value)+" m",1),I("div",yT,"水深 "+$t(o.value)+" m",1)]),I("div",bT,[I("div",ET,"FPS "+$t(ct(je).fps),1),I("div",TT,$t(e.value),1)])]))}}),AT=ys(wT,[["__scopeId","data-v-e89fcbe3"]]),CT={class:"map-toolbar"},RT=Zi({__name:"Toolbar",setup(n){function t(e,i){const s=e==="rain"&&N.tool==="rain"?"orbit":e;N.tool=s,Ws(i)}return(e,i)=>(Be(),hn("div",CT,[I("button",{class:Fn(["tb-btn",{active:ct(N).tool==="orbit"}]),title:"浏览模式，旋转/缩放视角",onClick:i[0]||(i[0]=s=>t("orbit","浏览模式，旋转/缩放视角"))}," 浏览 ",2),I("button",{class:Fn(["tb-btn",{active:ct(N).tool==="rain"}]),title:"全域普降大雨，水体向低洼地区汇集",onClick:i[1]||(i[1]=s=>t("rain","全域普降大雨，水体向低洼地区汇集"))}," 降雨 ",2),I("button",{class:Fn(["tb-btn",{active:ct(N).tool==="sprinkle"}]),title:"局地强降雨，鼠标指哪下哪，局地内涝",onClick:i[2]||(i[2]=s=>t("sprinkle","局地强降雨，鼠标指哪下哪，局地内涝"))}," 浇水 ",2),I("button",{class:Fn(["tb-btn",{active:ct(N).tool==="fill"}]),title:"点击地图位置，按浇灌雨量倾倒水体",onClick:i[3]||(i[3]=s=>t("fill","点击地图位置，按浇灌雨量倾倒水体"))}," 浇灌 ",2),I("button",{class:Fn(["tb-btn",{active:ct(N).tool==="push"}]),title:"搅动水面，让水流动起来",onClick:i[4]||(i[4]=s=>t("push","搅动水面，让水流动起来"))}," 扰动 ",2),i[8]||(i[8]=I("div",{class:"tb-divider"},null,-1)),I("button",{class:"tb-btn",title:"直接注入3500万立方米水体，淹没低洼区域",onClick:i[5]||(i[5]=s=>{var r;(r=ct(Lr).current)==null||r.flood(),ct(Ws)("直接注入3500万立方米水体，淹没低洼区域")})}," 淹没 "),I("button",{class:"tb-btn",title:"清空当前水体",onClick:i[6]||(i[6]=s=>{var r;(r=ct(Lr).current)==null||r.resetWater(),ct(Ws)("清空当前水体")})}," 重置 "),I("button",{class:"tb-btn",title:"复制当前场景图",onClick:i[7]||(i[7]=s=>{var r;(r=ct(Lr).current)==null||r.copySceneImage(),ct(Ws)("复制当前场景图")})}," 复制 ")]))}}),PT=ys(RT,[["__scopeId","data-v-dd8a38a9"]]),DT={class:"app"},LT={class:"app-body"},IT={class:"canvas-area"},UT={key:0,class:"canvas-toast"},FT=Zi({__name:"App",setup(n){const t=or(!0),{message:e}=Wy();return(i,s)=>(Be(),hn("div",DT,[xe(ct(Sg),{"sidebar-visible":t.value,onToggleSidebar:s[0]||(s[0]=r=>t.value=!t.value)},null,8,["sidebar-visible"]),I("div",LT,[t.value?(Be(),ea(ct(pT),{key:0})):Vr("",!0),I("main",IT,[xe(ct(Sb)),xe(ct(PT)),xe(ct(vb)),xe(O0,{name:"toast"},{default:di(()=>[ct(e)?(Be(),hn("div",UT,$t(ct(e)),1)):Vr("",!0)]),_:1})])]),xe(ct(AT))]))}}),NT=ys(FT,[["__scopeId","data-v-77dc984c"]]);ug(NT).mount("#app");
