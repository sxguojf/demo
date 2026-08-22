var hp=Object.defineProperty;var fp=(n,t,e)=>t in n?hp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Z=(n,t,e)=>fp(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const pe={},Us=[],Wn=()=>{},mf=()=>!1,sa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ra=n=>n.startsWith("onUpdate:"),Ce=Object.assign,Sc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},dp=Object.prototype.hasOwnProperty,se=(n,t)=>dp.call(n,t),Ft=Array.isArray,Ns=n=>Br(n)==="[object Map]",Zs=n=>Br(n)==="[object Set]",fu=n=>Br(n)==="[object Date]",qt=n=>typeof n=="function",Se=n=>typeof n=="string",Un=n=>typeof n=="symbol",re=n=>n!==null&&typeof n=="object",gf=n=>(re(n)||qt(n))&&qt(n.then)&&qt(n.catch),_f=Object.prototype.toString,Br=n=>_f.call(n),pp=n=>Br(n).slice(8,-1),vf=n=>Br(n)==="[object Object]",yc=n=>Se(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,xr=Mc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oa=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},mp=/-\w/g,Ln=oa(n=>n.replace(mp,t=>t.slice(1).toUpperCase())),gp=/\B([A-Z])/g,ls=oa(n=>n.replace(gp,"-$1").toLowerCase()),xf=oa(n=>n.charAt(0).toUpperCase()+n.slice(1)),ya=oa(n=>n?`on${xf(n)}`:""),kn=(n,t)=>!Object.is(n,t),Ao=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Mf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},aa=n=>{const t=parseFloat(n);return isNaN(t)?n:t},_p=n=>{const t=Se(n)?Number(n):NaN;return isNaN(t)?n:t};let du;const la=()=>du||(du=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ec(n){if(Ft(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Se(i)?Sp(i):Ec(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Se(n)||re(n))return n}const vp=/;(?![^(]*\))/g,xp=/:([^]+)/,Mp=/\/\*[^]*?\*\//g;function Sp(n){const t={};return n.replace(Mp,"").split(vp).forEach(e=>{if(e){const i=e.split(xp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Mn(n){let t="";if(Se(n))t=n;else if(Ft(n))for(let e=0;e<n.length;e++){const i=Mn(n[e]);i&&(t+=i+" ")}else if(re(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const yp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ep=Mc(yp);function Sf(n){return!!n||n===""}function bp(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Js(n[i],t[i]);return e}function Js(n,t){if(n===t)return!0;let e=fu(n),i=fu(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Un(n),i=Un(t),e||i)return n===t;if(e=Ft(n),i=Ft(t),e||i)return e&&i?bp(n,t):!1;if(e=re(n),i=re(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Js(n[o],t[o]))return!1}}return String(n)===String(t)}function bc(n,t){return n.findIndex(e=>Js(e,t))}const yf=n=>!!(n&&n.__v_isRef===!0),Zt=n=>Se(n)?n:n==null?"":Ft(n)||re(n)&&(n.toString===_f||!qt(n.toString))?yf(n)?Zt(n.value):JSON.stringify(n,Ef,2):String(n),Ef=(n,t)=>yf(t)?Ef(n,t.value):Ns(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Ea(i,r)+" =>"]=s,e),{})}:Zs(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ea(e))}:Un(t)?Ea(t):re(t)&&!Ft(t)&&!vf(t)?String(t):t,Ea=(n,t="")=>{var e;return Un(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Le;class Tp{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Le&&(Le.active?(this.parent=Le,this.index=(Le.scopes||(Le.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Le;try{return Le=this,t()}finally{Le=e}}}on(){++this._on===1&&(this.prevScope=Le,Le=this)}off(){if(this._on>0&&--this._on===0){if(Le===this)Le=this.prevScope;else{let t=Le;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function wp(){return Le}let _e;const ba=new WeakSet;class bf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Le&&(Le.active?Le.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ba.has(this)&&(ba.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,pu(this),Af(this);const t=_e,e=In;_e=this,In=!0;try{return this.fn()}finally{Cf(this),_e=t,In=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ac(t);this.deps=this.depsTail=void 0,pu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ba.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_l(this)&&this.run()}get dirty(){return _l(this)}}let Tf=0,Mr,Sr;function wf(n,t=!1){if(n.flags|=8,t){n.next=Sr,Sr=n;return}n.next=Mr,Mr=n}function Tc(){Tf++}function wc(){if(--Tf>0)return;if(Sr){let t=Sr;for(Sr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Mr;){let t=Mr;for(Mr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Af(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Cf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Ac(i),Ap(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function _l(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Rf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Rf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===wr)||(n.globalVersion=wr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!_l(n))))return;n.flags|=2;const t=n.dep,e=_e,i=In;_e=n,In=!0;try{Af(n);const s=n.fn(n._value);(t.version===0||kn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{_e=e,In=i,Cf(n),n.flags&=-3}}function Ac(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Ac(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Ap(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let In=!0;const Pf=[];function hi(){Pf.push(In),In=!1}function fi(){const n=Pf.pop();In=n===void 0?!0:n}function pu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=_e;_e=void 0;try{t()}finally{_e=e}}}let wr=0;class Cp{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Cc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!_e||!In||_e===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==_e)e=this.activeLink=new Cp(_e,this),_e.deps?(e.prevDep=_e.depsTail,_e.depsTail.nextDep=e,_e.depsTail=e):_e.deps=_e.depsTail=e,Df(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=_e.depsTail,e.nextDep=void 0,_e.depsTail.nextDep=e,_e.depsTail=e,_e.deps===e&&(_e.deps=i)}return e}trigger(t){this.version++,wr++,this.notify(t)}notify(t){Tc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{wc()}}}function Df(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Df(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const vl=new WeakMap,is=Symbol(""),xl=Symbol(""),Ar=Symbol("");function Ve(n,t,e){if(In&&_e){let i=vl.get(n);i||vl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Cc),s.map=i,s.key=e),s.track()}}function ri(n,t,e,i,s,r){const o=vl.get(n);if(!o){wr++;return}const a=l=>{l&&l.trigger()};if(Tc(),t==="clear")o.forEach(a);else{const l=Ft(n),c=l&&yc(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,d)=>{(d==="length"||d===Ar||!Un(d)&&d>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Ar)),t){case"add":l?c&&a(o.get("length")):(a(o.get(is)),Ns(n)&&a(o.get(xl)));break;case"delete":l||(a(o.get(is)),Ns(n)&&a(o.get(xl)));break;case"set":Ns(n)&&a(o.get(is));break}}wc()}function ps(n){const t=ee(n);return t===n?t:(Ve(t,"iterate",Ar),yn(n)?t:t.map(Nn))}function ca(n){return Ve(n=ee(n),"iterate",Ar),n}function zn(n,t){return di(n)?Gs(ss(n)?Nn(t):t):Nn(t)}const Rp={__proto__:null,[Symbol.iterator](){return Ta(this,Symbol.iterator,n=>zn(this,n))},concat(...n){return ps(this).concat(...n.map(t=>Ft(t)?ps(t):t))},entries(){return Ta(this,"entries",n=>(n[1]=zn(this,n[1]),n))},every(n,t){return jn(this,"every",n,t,void 0,arguments)},filter(n,t){return jn(this,"filter",n,t,e=>e.map(i=>zn(this,i)),arguments)},find(n,t){return jn(this,"find",n,t,e=>zn(this,e),arguments)},findIndex(n,t){return jn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return jn(this,"findLast",n,t,e=>zn(this,e),arguments)},findLastIndex(n,t){return jn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return jn(this,"forEach",n,t,void 0,arguments)},includes(...n){return wa(this,"includes",n)},indexOf(...n){return wa(this,"indexOf",n)},join(n){return ps(this).join(n)},lastIndexOf(...n){return wa(this,"lastIndexOf",n)},map(n,t){return jn(this,"map",n,t,void 0,arguments)},pop(){return rr(this,"pop")},push(...n){return rr(this,"push",n)},reduce(n,...t){return mu(this,"reduce",n,t)},reduceRight(n,...t){return mu(this,"reduceRight",n,t)},shift(){return rr(this,"shift")},some(n,t){return jn(this,"some",n,t,void 0,arguments)},splice(...n){return rr(this,"splice",n)},toReversed(){return ps(this).toReversed()},toSorted(n){return ps(this).toSorted(n)},toSpliced(...n){return ps(this).toSpliced(...n)},unshift(...n){return rr(this,"unshift",n)},values(){return Ta(this,"values",n=>zn(this,n))}};function Ta(n,t,e){const i=ca(n),s=i[t]();return i!==n&&!yn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Pp=Array.prototype;function jn(n,t,e,i,s,r){const o=ca(n),a=o!==n&&!yn(n),l=o[t];if(l!==Pp[t]){const h=l.apply(n,r);return a?Nn(h):h}let c=e;o!==n&&(a?c=function(h,d){return e.call(this,zn(n,h),d,n)}:e.length>2&&(c=function(h,d){return e.call(this,h,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function mu(n,t,e,i){const s=ca(n),r=s!==n&&!yn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=zn(n,c)),e.call(this,c,zn(n,u),h,n)}):e.length>3&&(o=function(c,u,h){return e.call(this,c,u,h,n)}));const l=s[t](o,...i);return a?zn(n,l):l}function wa(n,t,e){const i=ee(n);Ve(i,"iterate",Ar);const s=i[t](...e);return(s===-1||s===!1)&&Dc(e[0])?(e[0]=ee(e[0]),i[t](...e)):s}function rr(n,t,e=[]){hi(),Tc();const i=ee(n)[t].apply(n,e);return wc(),fi(),i}const Dp=Mc("__proto__,__v_isRef,__isVue"),Lf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Un));function Lp(n){Un(n)||(n=String(n));const t=ee(this);return Ve(t,"has",n),t.hasOwnProperty(n)}class If{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?kp:Of:r?Ff:Nf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Ft(t);if(!s){let l;if(o&&(l=Rp[e]))return l;if(e==="hasOwnProperty")return Lp}const a=Reflect.get(t,e,We(t)?t:i);if((Un(e)?Lf.has(e):Dp(e))||(s||Ve(t,"get",e),r))return a;if(We(a)){const l=o&&yc(e)?a:a.value;return s&&re(l)?Sl(l):l}return re(a)?s?Sl(a):Fi(a):a}}class Uf extends If{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Ft(t)&&yc(e);if(!this._isShallow){const c=di(r);if(!yn(i)&&!di(i)&&(r=ee(r),i=ee(i)),!o&&We(r)&&!We(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:se(t,e),l=Reflect.set(t,e,i,We(t)?t:s);return t===ee(s)&&l&&(a?kn(i,r)&&ri(t,"set",e,i):ri(t,"add",e,i)),l}deleteProperty(t,e){const i=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&ri(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Un(e)||!Lf.has(e))&&Ve(t,"has",e),i}ownKeys(t){return Ve(t,"iterate",Ft(t)?"length":is),Reflect.ownKeys(t)}}class Ip extends If{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Up=new Uf,Np=new Ip,Fp=new Uf(!0);const Ml=n=>n,jr=n=>Reflect.getPrototypeOf(n);function Op(n,t,e){return function(...i){const s=this.__v_raw,r=ee(s),o=Ns(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Ml:t?Gs:Nn;return!t&&Ve(r,"iterate",l?xl:is),Ce(Object.create(c),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}}})}}function $r(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Bp(n,t){const e={get(s){const r=this.__v_raw,o=ee(r),a=ee(s);n||(kn(s,a)&&Ve(o,"get",s),Ve(o,"get",a));const{has:l}=jr(o),c=t?Ml:n?Gs:Nn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ve(ee(s),"iterate",is),s.size},has(s){const r=this.__v_raw,o=ee(r),a=ee(s);return n||(kn(s,a)&&Ve(o,"has",s),Ve(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ee(a),c=t?Ml:n?Gs:Nn;return!n&&Ve(l,"iterate",is),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Ce(e,n?{add:$r("add"),set:$r("set"),delete:$r("delete"),clear:$r("clear")}:{add(s){const r=ee(this),o=jr(r),a=ee(s),l=!t&&!yn(s)&&!di(s)?a:s;return o.has.call(r,l)||kn(s,l)&&o.has.call(r,s)||kn(a,l)&&o.has.call(r,a)||(r.add(l),ri(r,"add",l,l)),this},set(s,r){!t&&!yn(r)&&!di(r)&&(r=ee(r));const o=ee(this),{has:a,get:l}=jr(o);let c=a.call(o,s);c||(s=ee(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?kn(r,u)&&ri(o,"set",s,r):ri(o,"add",s,r),this},delete(s){const r=ee(this),{has:o,get:a}=jr(r);let l=o.call(r,s);l||(s=ee(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ri(r,"delete",s,void 0),c},clear(){const s=ee(this),r=s.size!==0,o=s.clear();return r&&ri(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Op(s,n,t)}),e}function Rc(n,t){const e=Bp(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(se(e,s)&&s in i?e:i,s,r)}const zp={get:Rc(!1,!1)},Vp={get:Rc(!1,!0)},Hp={get:Rc(!0,!1)};const Nf=new WeakMap,Ff=new WeakMap,Of=new WeakMap,kp=new WeakMap;function Gp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fi(n){return di(n)?n:Pc(n,!1,Up,zp,Nf)}function Wp(n){return Pc(n,!1,Fp,Vp,Ff)}function Sl(n){return Pc(n,!0,Np,Hp,Of)}function Pc(n,t,e,i,s){if(!re(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Gp(pp(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function ss(n){return di(n)?ss(n.__v_raw):!!(n&&n.__v_isReactive)}function di(n){return!!(n&&n.__v_isReadonly)}function yn(n){return!!(n&&n.__v_isShallow)}function Dc(n){return n?!!n.__v_raw:!1}function ee(n){const t=n&&n.__v_raw;return t?ee(t):n}function Xp(n){return!se(n,"__v_skip")&&Object.isExtensible(n)&&Mf(n,"__v_skip",!0),n}const Nn=n=>re(n)?Fi(n):n,Gs=n=>re(n)?Sl(n):n;function We(n){return n?n.__v_isRef===!0:!1}function Qs(n){return qp(n,!1)}function qp(n,t){return We(n)?n:new Yp(n,t)}class Yp{constructor(t,e){this.dep=new Cc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ee(t),this._value=e?t:Nn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||yn(t)||di(t);t=i?t:ee(t),kn(t,e)&&(this._rawValue=t,this._value=i?t:Nn(t),this.dep.trigger())}}function ct(n){return We(n)?n.value:n}const jp={get:(n,t,e)=>t==="__v_raw"?n:ct(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return We(s)&&!We(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Bf(n){return ss(n)?n:new Proxy(n,jp)}class $p{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Cc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return wf(this,!0),!0}get value(){const t=this.dep.track();return Rf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Kp(n,t,e=!1){let i,s;return qt(n)?i=n:(i=n.get,s=n.set),new $p(i,s,e)}const Kr={},zo=new WeakMap;let $i;function Zp(n,t=!1,e=$i){if(e){let i=zo.get(e);i||zo.set(e,i=[]),i.push(n)}}function Jp(n,t,e=pe){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=M=>s?M:yn(M)||s===!1||s===0?oi(M,1):oi(M);let u,h,d,m,g=!1,_=!1;if(We(n)?(h=()=>n.value,g=yn(n)):ss(n)?(h=()=>c(n),g=!0):Ft(n)?(_=!0,g=n.some(M=>ss(M)||yn(M)),h=()=>n.map(M=>{if(We(M))return M.value;if(ss(M))return c(M);if(qt(M))return l?l(M,2):M()})):qt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(d){hi();try{d()}finally{fi()}}const M=$i;$i=u;try{return l?l(n,3,[m]):n(m)}finally{$i=M}}:h=Wn,t&&s){const M=h,L=s===!0?1/0:s;h=()=>oi(M(),L)}const p=wp(),f=()=>{u.stop(),p&&p.active&&Sc(p.effects,u)};if(r&&t){const M=t;t=(...L)=>{const R=M(...L);return f(),R}}let y=_?new Array(n.length).fill(Kr):Kr;const b=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(t){const L=u.run();if(M||s||g||(_?L.some((R,P)=>kn(R,y[P])):kn(L,y))){d&&d();const R=$i;$i=u;try{const P=[L,y===Kr?void 0:_&&y[0]===Kr?[]:y,m];y=L,l?l(t,3,P):t(...P)}finally{$i=R}}}else u.run()};return a&&a(b),u=new bf(h),u.scheduler=o?()=>o(b,!1):b,m=M=>Zp(M,!1,u),d=u.onStop=()=>{const M=zo.get(u);if(M){if(l)l(M,4);else for(const L of M)L();zo.delete(u)}},t?i?b(!0):y=u.run():o?o(b.bind(null,!0),!0):u.run(),f.pause=u.pause.bind(u),f.resume=u.resume.bind(u),f.stop=f,f}function oi(n,t=1/0,e){if(t<=0||!re(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,We(n))oi(n.value,t,e);else if(Ft(n))for(let i=0;i<n.length;i++)oi(n[i],t,e);else if(Zs(n)||Ns(n))n.forEach(i=>{oi(i,t,e)});else if(vf(n)){for(const i in n)oi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&oi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zr(n,t,e,i){try{return i?n(...i):n()}catch(s){ua(s,t,e)}}function En(n,t,e,i){if(qt(n)){const s=zr(n,t,e,i);return s&&gf(s)&&s.catch(r=>{ua(r,t,e)}),s}if(Ft(n)){const s=[];for(let r=0;r<n.length;r++)s.push(En(n[r],t,e,i));return s}}function ua(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||pe;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){hi(),zr(r,null,10,[n,l,c]),fi();return}}Qp(n,e,s,i,o)}function Qp(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Ye=[];let Bn=-1;const Fs=[];let Ai=null,Ps=0;const zf=Promise.resolve();let Vo=null;function Vf(n){const t=Vo||zf;return n?t.then(this?n.bind(this):n):t}function tm(n){let t=Bn+1,e=Ye.length;for(;t<e;){const i=t+e>>>1,s=Ye[i],r=Cr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Lc(n){if(!(n.flags&1)){const t=Cr(n),e=Ye[Ye.length-1];!e||!(n.flags&2)&&t>=Cr(e)?Ye.push(n):Ye.splice(tm(t),0,n),n.flags|=1,Hf()}}function Hf(){Vo||(Vo=zf.then(Gf))}function em(n){if(!Ft(n))Ai&&n.id===-1?Ai.splice(Ps+1,0,n):n.flags&1||(Fs.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)Fs.push(n[t]);Hf()}function gu(n,t,e=Bn+1){for(;e<Ye.length;e++){const i=Ye[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ye.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function kf(n){if(Fs.length){const t=[...new Set(Fs)].sort((e,i)=>Cr(e)-Cr(i));if(Fs.length=0,Ai){for(let e=0;e<t.length;e++)Ai.push(t[e]);return}for(Ai=t,Ps=0;Ps<Ai.length;Ps++){const e=Ai[Ps];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Ai=null,Ps=0}}const Cr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Gf(n){try{for(Bn=0;Bn<Ye.length;Bn++){const t=Ye[Bn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),zr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Bn<Ye.length;Bn++){const t=Ye[Bn];t&&(t.flags&=-2)}Bn=-1,Ye.length=0,kf(),Vo=null,(Ye.length||Fs.length)&&Gf()}}let Ge=null,Wf=null;function Ho(n){const t=Ge;return Ge=n,Wf=n&&n.type.__scopeId||null,t}function Ci(n,t=Ge,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Xo(-1);const r=Ho(t),o=ci.length;let a;try{a=n(...s)}finally{for(let l=ci.length;l>o;l--)Fc();Ho(r),i._d&&Xo(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function le(n,t){if(Ge===null)return n;const e=_a(Ge),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=pe]=t[s];r&&(qt(r)&&(r={mounted:r,updated:r}),r.deep&&oi(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function zi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(hi(),En(l,e,8,[n.el,a,n,t]),fi())}}function nm(n,t){if($e){let e=$e.provides;const i=$e.parent&&$e.parent.provides;i===e&&(e=$e.provides=Object.create(i)),e[n]=t}}function Co(n,t,e=!1){const i=Sd();if(i||Bs){let s=Bs?Bs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&qt(t)?t.call(i&&i.proxy):t}}const im=Symbol.for("v-scx"),sm=()=>Co(im);function yr(n,t,e){return Xf(n,t,e)}function Xf(n,t,e=pe){const{immediate:i,deep:s,flush:r,once:o}=e,a=Ce({},e),l=t&&i||!t&&r!=="post";let c;if(Ur){if(r==="sync"){const m=sm();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Wn,m.resume=Wn,m.pause=Wn,m}}const u=$e;a.call=(m,g,_)=>En(m,u,g,_);let h=!1;r==="post"?a.scheduler=m=>{nn(m,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(m,g)=>{g?m():Lc(m)}),a.augmentJob=m=>{t&&(m.flags|=4),h&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=Jp(n,t,a);return Ur&&(c?c.push(d):l&&d()),d}function rm(n,t,e){const i=this.proxy,s=Se(n)?n.includes(".")?qf(i,n):()=>i[n]:n.bind(i,i);let r;qt(t)?r=t:(r=t.handler,e=t);const o=Vr(this),a=Xf(s,r.bind(i),e);return o(),a}function qf(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const om=Symbol("_vte"),ha=n=>n.__isTeleport,vn=Symbol("_leaveCb"),or=Symbol("_enterCb");function am(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pa(()=>{n.isMounted=!0}),td(()=>{n.isUnmounting=!0}),n}const mn=[Function,Array],Yf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mn,onEnter:mn,onAfterEnter:mn,onEnterCancelled:mn,onBeforeLeave:mn,onLeave:mn,onAfterLeave:mn,onLeaveCancelled:mn,onBeforeAppear:mn,onAppear:mn,onAfterAppear:mn,onAppearCancelled:mn},jf=n=>{const t=n.subTree;return t.component?jf(t.component):t},lm={name:"BaseTransition",props:Yf,setup(n,{slots:t}){const e=Sd(),i=am();return()=>{const s=t.default&&Zf(t.default(),!0),r=s&&s.length?$f(s):e.subTree?Lr():void 0;if(!r)return;const o=ee(n),{mode:a}=o;if(i.isLeaving)return Aa(r);const l=ko(r);if(!l)return Aa(r);let c=yl(l,o,i,e,h=>c=h);l.type!==ke&&Rr(l,c);let u=e.subTree&&ko(e.subTree);if(u&&u.type!==ke&&!Zi(u,l)&&jf(e).type!==ke){let h=yl(u,o,i,e);if(Rr(u,h),a==="out-in"&&l.type!==ke)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete h.afterLeave,u=void 0},Aa(r);a==="in-out"&&l.type!==ke?h.delayLeave=(d,m,g)=>{const _=Kf(i,u);_[String(u.key)]=u,d[vn]=()=>{m(),d[vn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function $f(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==ke){t=e;break}}return t}const cm=lm;function Kf(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function yl(n,t,e,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:m,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:p,onAppear:f,onAfterAppear:y,onAppearCancelled:b}=t,M=String(n.key),L=Kf(e,n),R=(T,S)=>{T&&En(T,i,9,S)},P=(T,S)=>{const D=S[1];R(T,S),Ft(T)?T.every(O=>O.length<=1)&&D():T.length<=1&&D()},N={mode:o,persisted:a,beforeEnter(T){let S=l;if(!e.isMounted)if(r)S=p||l;else return;T[vn]&&T[vn](!0);const D=L[M];D&&Zi(n,D)&&D.el[vn]&&D.el[vn](),R(S,[T])},enter(T){if(L[M]===n)return;let S=c,D=u,O=h;if(!e.isMounted)if(r)S=f||c,D=y||u,O=b||h;else return;let H=!1;T[or]=st=>{H||(H=!0,st?R(O,[T]):R(D,[T]),N.delayedLeave&&N.delayedLeave(),T[or]=void 0)};const Q=T[or].bind(null,!1);S?P(S,[T,Q]):Q()},leave(T,S){const D=String(n.key);if(T[or]&&T[or](!0),e.isUnmounting)return S();R(d,[T]);let O=!1;T[vn]=Q=>{O||(O=!0,S(),Q?R(_,[T]):R(g,[T]),T[vn]=void 0,L[D]===n&&delete L[D])};const H=T[vn].bind(null,!1);L[D]=n,m?P(m,[T,H]):H()},clone(T){const S=yl(T,t,e,i,s);return s&&s(S),S}};return N}function Aa(n){if(fa(n))return n=Ui(n),n.children=null,n}function ko(n){if(!fa(n))return ha(n.type)&&n.children?$f(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&qt(e.default))return e.default()}}function Rr(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;Rr(ha(e.type)&&ko(e)||e,t)}else n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Zf(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:r);o.type===He?(o.patchFlag&128&&s++,i=i.concat(Zf(o.children,t,a))):(t||o.type!==ke)&&i.push(a!=null?Ui(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Oi(n,t){return qt(n)?Ce({name:n.name},t,{setup:n}):n}function Jf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function _u(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Go=new WeakMap;function Er(n,t,e,i,s=!1){if(Ft(n)){n.forEach((_,p)=>Er(_,t&&(Ft(t)?t[p]:t),e,i,s));return}if(Os(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Er(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?_a(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===pe?a.refs={}:a.refs,h=a.setupState,d=ee(h),m=h===pe?mf:_=>_u(u,_)?!1:se(d,_),g=(_,p)=>!(p&&_u(u,p));if(c!=null&&c!==l){if(vu(t),Se(c))u[c]=null,m(c)&&(h[c]=null);else if(We(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(qt(l))zr(l,a,12,[o,u]);else{const _=Se(l),p=We(l);if(_||p){const f=()=>{if(n.f){const y=_?m(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Ft(y)&&Sc(y,r);else if(Ft(y))y.includes(r)||y.push(r);else if(_)u[l]=[r],m(l)&&(h[l]=u[l]);else{const b=[r];g(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else _?(u[l]=o,m(l)&&(h[l]=o)):p&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const y=()=>{f(),Go.delete(n)};y.id=-1,Go.set(n,y),nn(y,e)}else vu(n),f()}}}function vu(n){const t=Go.get(n);t&&(t.flags|=8,Go.delete(n))}la().requestIdleCallback;la().cancelIdleCallback;const Os=n=>!!n.type.__asyncLoader,fa=n=>n.type.__isKeepAlive;function um(n,t){Qf(n,"a",t)}function hm(n,t){Qf(n,"da",t)}function Qf(n,t,e=$e){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(da(t,i,e),e){let s=e.parent;for(;s&&s.parent;)fa(s.parent.vnode)&&fm(i,t,e,s),s=s.parent}}function fm(n,t,e,i){const s=da(t,n,i,!0);Ic(()=>{Sc(i[t],s)},e)}function da(n,t,e=$e,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{hi();const a=Vr(e),l=En(t,e,n,o);return a(),fi(),l});return i?s.unshift(r):s.push(r),r}}const gi=n=>(t,e=$e)=>{(!Ur||n==="sp")&&da(n,(...i)=>t(...i),e)},dm=gi("bm"),pa=gi("m"),pm=gi("bu"),mm=gi("u"),td=gi("bum"),Ic=gi("um"),gm=gi("sp"),_m=gi("rtg"),vm=gi("rtc");function xm(n,t=$e){da("ec",n,t)}const Mm=Symbol.for("v-ndc");function xu(n,t,e,i){let s;const r=e,o=Ft(n);if(o||Se(n)){const a=o&&ss(n);let l=!1,c=!1;a&&(l=!yn(n),c=di(n),n=ca(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=t(l?c?Gs(Nn(n[u])):Nn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(re(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}function Sm(n,t,e,i,s,r){if(e==null&&(e={}),Ge.ce||Ge.parent&&Os(Ge.parent)&&Ge.parent.ce){const c=e,u=Object.keys(c).length>0;return Ie(),qo(He,null,[me("slot",c,i)],u?-2:64)}let o=n[t];o&&o._c&&(o._d=!1);const a=ci.length;Ie();let l;try{const c=o&&ed(o(e)),u=e.key||r||c&&c.key;l=qo(He,{key:(u&&!Un(u)?u:`_${t}`)+(!c&&i?"_fb":"")},c||(i?i():[]),c&&n._===1?64:-2)}catch(c){for(let u=ci.length;u>a;u--)Fc();throw c}finally{o&&o._c&&(o._d=!0)}return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function ed(n){return n.some(t=>Dr(t)?!(t.type===ke||t.type===He&&!ed(t.children)):!0)?n:null}const El=n=>n?yd(n)?_a(n):El(n.parent):null,br=Ce(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>El(n.parent),$root:n=>El(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>id(n),$forceUpdate:n=>n.f||(n.f=()=>{Lc(n.update)}),$nextTick:n=>n.n||(n.n=Vf.bind(n.proxy)),$watch:n=>rm.bind(n)}),Ca=(n,t)=>n!==pe&&!n.__isScriptSetup&&se(n,t),ym={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ca(i,t))return o[t]=1,i[t];if(s!==pe&&se(s,t))return o[t]=2,s[t];if(se(r,t))return o[t]=3,r[t];if(e!==pe&&se(e,t))return o[t]=4,e[t];bl&&(o[t]=0)}}const c=br[t];let u,h;if(c)return t==="$attrs"&&Ve(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==pe&&se(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,se(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Ca(s,t)?(s[t]=e,!0):i!==pe&&se(i,t)?(i[t]=e,!0):se(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==pe&&a[0]!=="$"&&se(n,a)||Ca(t,a)||se(r,a)||se(i,a)||se(br,a)||se(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:se(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Mu(n){return Ft(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let bl=!0;function Em(n){const t=id(n),e=n.proxy,i=n.ctx;bl=!1,t.beforeCreate&&Su(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:g,activated:_,deactivated:p,beforeDestroy:f,beforeUnmount:y,destroyed:b,unmounted:M,render:L,renderTracked:R,renderTriggered:P,errorCaptured:N,serverPrefetch:T,expose:S,inheritAttrs:D,components:O,directives:H,filters:Q}=t;if(c&&bm(c,i,null),o)for(const it in o){const W=o[it];qt(W)&&(i[it]=W.bind(e))}if(s){const it=s.call(e,e);re(it)&&(n.data=Fi(it))}if(bl=!0,r)for(const it in r){const W=r[it],gt=qt(W)?W.bind(e,e):qt(W.get)?W.get.bind(e,e):Wn,St=!qt(W)&&qt(W.set)?W.set.bind(e):Wn,wt=sn({get:gt,set:St});Object.defineProperty(i,it,{enumerable:!0,configurable:!0,get:()=>wt.value,set:Ot=>wt.value=Ot})}if(a)for(const it in a)nd(a[it],i,e,it);if(l){const it=qt(l)?l.call(e):l;Reflect.ownKeys(it).forEach(W=>{nm(W,it[W])})}u&&Su(u,n,"c");function tt(it,W){Ft(W)?W.forEach(gt=>it(gt.bind(e))):W&&it(W.bind(e))}if(tt(dm,h),tt(pa,d),tt(pm,m),tt(mm,g),tt(um,_),tt(hm,p),tt(xm,N),tt(vm,R),tt(_m,P),tt(td,y),tt(Ic,M),tt(gm,T),Ft(S))if(S.length){const it=n.exposed||(n.exposed={});S.forEach(W=>{Object.defineProperty(it,W,{get:()=>e[W],set:gt=>e[W]=gt,enumerable:!0})})}else n.exposed||(n.exposed={});L&&n.render===Wn&&(n.render=L),D!=null&&(n.inheritAttrs=D),O&&(n.components=O),H&&(n.directives=H),T&&Jf(n)}function bm(n,t,e=Wn){Ft(n)&&(n=Tl(n));for(const i in n){const s=n[i];let r;re(s)?"default"in s?r=Co(s.from||i,s.default,!0):r=Co(s.from||i):r=Co(s),We(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Su(n,t,e){En(Ft(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function nd(n,t,e,i){let s=i.includes(".")?qf(e,i):()=>e[i];if(Se(n)){const r=t[n];qt(r)&&yr(s,r)}else if(qt(n))yr(s,n.bind(e));else if(re(n))if(Ft(n))n.forEach(r=>nd(r,t,e,i));else{const r=qt(n.handler)?n.handler.bind(e):t[n.handler];qt(r)&&yr(s,r,n)}}function id(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Wo(l,c,o,!0)),Wo(l,t,o)),re(t)&&r.set(t,l),l}function Wo(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Wo(n,r,e,!0),s&&s.forEach(o=>Wo(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Tm[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Tm={data:yu,props:Eu,emits:Eu,methods:mr,computed:mr,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:mr,directives:mr,watch:Am,provide:yu,inject:wm};function yu(n,t){return t?n?function(){return Ce(qt(n)?n.call(this,this):n,qt(t)?t.call(this,this):t)}:t:n}function wm(n,t){return mr(Tl(n),Tl(t))}function Tl(n){if(Ft(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Xe(n,t){return n?[...new Set([].concat(n,t))]:t}function mr(n,t){return n?Ce(Object.create(null),n,t):t}function Eu(n,t){return n?Ft(n)&&Ft(t)?[...new Set([...n,...t])]:Ce(Object.create(null),Mu(n),Mu(t??{})):t}function Am(n,t){if(!n)return t;if(!t)return n;const e=Ce(Object.create(null),n);for(const i in t)e[i]=Xe(n[i],t[i]);return e}function sd(){return{app:null,config:{isNativeTag:mf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cm=0;function Rm(n,t){return function(i,s=null){qt(i)||(i=Ce({},i)),s!=null&&!re(s)&&(s=null);const r=sd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Cm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:ag,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&qt(u.install)?(o.add(u),u.install(c,...h)):qt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const m=c._ceVNode||me(i,s);return m.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(m,u,d),l=!0,c._container=u,u.__vue_app__=c,_a(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(En(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Bs;Bs=c;try{return u()}finally{Bs=h}}};return c}}let Bs=null;const Pm=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Ln(t)}Modifiers`]||n[`${ls(t)}Modifiers`];function Dm(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||pe;let s=e;const r=t.startsWith("update:"),o=r&&Pm(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Se(u)?u.trim():u)),o.number&&(s=e.map(aa)));let a,l=i[a=ya(t)]||i[a=ya(Ln(t))];!l&&r&&(l=i[a=ya(ls(t))]),l&&En(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,En(c,n,6,s)}}const Lm=new WeakMap;function rd(n,t,e=!1){const i=e?Lm:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!qt(n)){const l=c=>{const u=rd(c,t,!0);u&&(a=!0,Ce(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(re(n)&&i.set(n,null),null):(Ft(r)?r.forEach(l=>o[l]=null):Ce(o,r),re(n)&&i.set(n,o),o)}function ma(n,t){return!n||!sa(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),se(n,t[0].toLowerCase()+t.slice(1))||se(n,ls(t))||se(n,t))}function bu(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:m,ctx:g,inheritAttrs:_}=n,p=Ho(n);let f,y;try{if(e.shapeFlag&4){const M=s||i,L=M;f=Vn(c.call(L,M,u,h,m,d,g)),y=a}else{const M=t;f=Vn(M.length>1?M(h,{attrs:a,slots:o,emit:l}):M(h,null)),y=t.props?a:Im(a)}}catch(M){ci.length=0,ua(M,n,1),f=me(ke)}let b=f;if(y&&_!==!1){const M=Object.keys(y),{shapeFlag:L}=b;M.length&&L&7&&(r&&M.some(ra)&&(y=Um(y,r)),b=Ui(b,y,!1,!0))}if(e.dirs&&(b=Ui(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(e.dirs):e.dirs),e.transition){const M=ha(b.type)&&ko(b)||b;Rr(M,e.transition)}return f=b,Ho(p),f}const Im=n=>{let t;for(const e in n)(e==="class"||e==="style"||sa(e))&&((t||(t={}))[e]=n[e]);return t},Um=(n,t)=>{const e={};for(const i in n)(!ra(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Nm(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Tu(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(od(o,i,d)&&!ma(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Tu(i,o,c):!0:!!o;return!1}function Tu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(od(t,n,r)&&!ma(e,r))return!0}return!1}function od(n,t,e){const i=n[e],s=t[e];return e==="style"&&re(i)&&re(s)?!Js(i,s):i!==s}function Fm({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const ad={},ld=()=>Object.create(ad),cd=n=>Object.getPrototypeOf(n)===ad;function Om(n,t,e,i=!1){const s={},r=ld();n.propsDefaults=Object.create(null),ud(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:Wp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Bm(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ee(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ma(n.emitsOptions,d))continue;const m=t[d];if(l)if(se(r,d))m!==r[d]&&(r[d]=m,c=!0);else{const g=Ln(d);s[g]=wl(l,a,g,m,n,!1)}else m!==r[d]&&(r[d]=m,c=!0)}}}else{ud(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!se(t,h)&&((u=ls(h))===h||!se(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=wl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!se(t,h))&&(delete r[h],c=!0)}c&&ri(n.attrs,"set","")}function ud(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(xr(l))continue;const c=t[l];let u;s&&se(s,u=Ln(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:ma(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ee(e),c=a||pe;for(let u=0;u<r.length;u++){const h=r[u];e[h]=wl(s,l,h,c[h],n,!se(c,h))}}return o}function wl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=se(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Vr(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ls(e))&&(i=!0))}return i}const zm=new WeakMap;function hd(n,t,e=!1){const i=e?zm:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!qt(n)){const u=h=>{l=!0;const[d,m]=hd(h,t,!0);Ce(o,d),m&&a.push(...m)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return re(n)&&i.set(n,Us),Us;if(Ft(r))for(let u=0;u<r.length;u++){const h=Ln(r[u]);wu(h)&&(o[h]=pe)}else if(r)for(const u in r){const h=Ln(u);if(wu(h)){const d=r[u],m=o[h]=Ft(d)||qt(d)?{type:d}:Ce({},d),g=m.type;let _=!1,p=!0;if(Ft(g))for(let f=0;f<g.length;++f){const y=g[f],b=qt(y)&&y.name;if(b==="Boolean"){_=!0;break}else b==="String"&&(p=!1)}else _=qt(g)&&g.name==="Boolean";m[0]=_,m[1]=p,(_||se(m,"default"))&&a.push(h)}}const c=[o,a];return re(n)&&i.set(n,c),c}function wu(n){return n[0]!=="$"&&!xr(n)}const Uc=n=>n==="_"||n==="_ctx"||n==="$stable",Nc=n=>Ft(n)?n.map(Vn):[Vn(n)],Vm=(n,t,e)=>{if(t._n)return t;const i=Ci((...s)=>Nc(t(...s)),e);return i._c=!1,i},fd=(n,t,e)=>{const i=n._ctx;for(const s in n){if(Uc(s))continue;const r=n[s];if(qt(r))t[s]=Vm(s,r,i);else if(r!=null){const o=Nc(r);t[s]=()=>o}}},dd=(n,t)=>{const e=Nc(t);n.slots.default=()=>e},pd=(n,t,e)=>{for(const i in t)(e||!Uc(i))&&(n[i]=t[i])},Hm=(n,t,e)=>{const i=n.slots=ld();if(n.vnode.shapeFlag&32){const s=t._;s?(pd(i,t,e),e&&Mf(i,"_",s,!0)):fd(t,i)}else t&&dd(n,t)},km=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=pe;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:pd(s,t,e):(r=!t.$stable,fd(t,s)),o=t}else t&&(dd(n,t),o={default:1});if(r)for(const a in s)!Uc(a)&&o[a]==null&&delete s[a]},nn=Ym;function Gm(n){return Wm(n)}function Wm(n,t){const e=la();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=Wn,insertStaticContent:g}=n,_=(A,I,w,at=null,J=null,$=null,et=void 0,ot=null,q=!!I.dynamicChildren)=>{if(A===I)return;A&&!Zi(A,I)&&(at=_t(A),Ot(A,J,$,!0),A=null),I.patchFlag===-2&&(q=!1,I.dynamicChildren=null);const{type:x,ref:v,shapeFlag:C}=I;switch(x){case ga:p(A,I,w,at);break;case ke:f(A,I,w,at);break;case Ro:A==null&&y(I,w,at,et);break;case He:O(A,I,w,at,J,$,et,ot,q);break;default:C&1?L(A,I,w,at,J,$,et,ot,q):C&6?H(A,I,w,at,J,$,et,ot,q):(C&64||C&128)&&x.process(A,I,w,at,J,$,et,ot,q,kt)}v!=null&&J?Er(v,A&&A.ref,$,I||A,!I):v==null&&A&&A.ref!=null&&Er(A.ref,null,$,A,!0)},p=(A,I,w,at)=>{if(A==null)i(I.el=a(I.children),w,at);else{const J=I.el=A.el;I.children!==A.children&&c(J,I.children)}},f=(A,I,w,at)=>{A==null?i(I.el=l(I.children||""),w,at):I.el=A.el},y=(A,I,w,at)=>{[A.el,A.anchor]=g(A.children,I,w,at,A.el,A.anchor)},b=({el:A,anchor:I},w,at)=>{let J;for(;A&&A!==I;)J=d(A),i(A,w,at),A=J;i(I,w,at)},M=({el:A,anchor:I})=>{let w;for(;A&&A!==I;)w=d(A),s(A),A=w;s(I)},L=(A,I,w,at,J,$,et,ot,q)=>{if(I.type==="svg"?et="svg":I.type==="math"&&(et="mathml"),A==null)R(I,w,at,J,$,et,ot,q);else{const x=A.el&&A.el._isVueCE?A.el:null;try{x&&x._beginPatch(),T(A,I,J,$,et,ot,q)}finally{x&&x._endPatch()}}},R=(A,I,w,at,J,$,et,ot)=>{let q,x;const{props:v,shapeFlag:C,transition:k,dirs:X}=A;if(q=A.el=o(A.type,$,v&&v.is,v),C&8?u(q,A.children):C&16&&N(A.children,q,null,at,J,Ra(A,$),et,ot),X&&zi(A,null,at,"created"),P(q,A,A.scopeId,et,at),v){for(const mt in v)mt!=="value"&&!xr(mt)&&r(q,mt,null,v[mt],$,at);"value"in v&&r(q,"value",null,v.value,$),(x=v.onVnodeBeforeMount)&&On(x,at,A)}X&&zi(A,null,at,"beforeMount");const Y=Xm(J,k);Y&&k.beforeEnter(q),i(q,I,w),((x=v&&v.onVnodeMounted)||Y||X)&&nn(()=>{try{x&&On(x,at,A),Y&&k.enter(q),X&&zi(A,null,at,"mounted")}finally{}},J)},P=(A,I,w,at,J)=>{if(w&&m(A,w),at)for(let $=0;$<at.length;$++)m(A,at[$]);if(J){let $=J.subTree;if(I===$||vd($.type)&&($.ssContent===I||$.ssFallback===I)){const et=J.vnode;P(A,et,et.scopeId,et.slotScopeIds,J.parent)}}},N=(A,I,w,at,J,$,et,ot,q=0)=>{for(let x=q;x<A.length;x++){const v=A[x]=ot?si(A[x]):Vn(A[x]);_(null,v,I,w,at,J,$,et,ot)}},T=(A,I,w,at,J,$,et)=>{const ot=I.el=A.el;let{patchFlag:q,dynamicChildren:x,dirs:v}=I;q|=A.patchFlag&16;const C=A.props||pe,k=I.props||pe;let X;if(w&&Vi(w,!1),(X=k.onVnodeBeforeUpdate)&&On(X,w,I,A),v&&zi(I,A,w,"beforeUpdate"),w&&Vi(w,!0),x&&(!A.dynamicChildren||A.dynamicChildren.length!==x.length)&&(q=0,et=!1,x=null),(C.innerHTML&&k.innerHTML==null||C.textContent&&k.textContent==null)&&u(ot,""),x?S(A.dynamicChildren,x,ot,w,at,Ra(I,J),$):et||W(A,I,ot,null,w,at,Ra(I,J),$,!1),q>0){if(q&16)D(ot,C,k,w,J);else if(q&2&&C.class!==k.class&&r(ot,"class",null,k.class,J),q&4&&r(ot,"style",C.style,k.style,J),q&8){const Y=I.dynamicProps;for(let mt=0;mt<Y.length;mt++){const ut=Y[mt],dt=C[ut],Bt=k[ut];(Bt!==dt||ut==="value")&&r(ot,ut,dt,Bt,J,w)}}q&1&&A.children!==I.children&&u(ot,I.children)}else!et&&x==null&&D(ot,C,k,w,J);((X=k.onVnodeUpdated)||v)&&nn(()=>{X&&On(X,w,I,A),v&&zi(I,A,w,"updated")},at)},S=(A,I,w,at,J,$,et)=>{for(let ot=0;ot<I.length;ot++){const q=A[ot],x=I[ot],v=q.el&&(q.type===He||!Zi(q,x)||q.shapeFlag&198)?h(q.el):w;_(q,x,v,null,at,J,$,et,!0)}},D=(A,I,w,at,J)=>{if(I!==w){if(I!==pe)for(const $ in I)!xr($)&&!($ in w)&&r(A,$,I[$],null,J,at);for(const $ in w){if(xr($))continue;const et=w[$],ot=I[$];et!==ot&&$!=="value"&&r(A,$,ot,et,J,at)}"value"in w&&r(A,"value",I.value,w.value,J)}},O=(A,I,w,at,J,$,et,ot,q)=>{const x=I.el=A?A.el:a(""),v=I.anchor=A?A.anchor:a("");let{patchFlag:C,dynamicChildren:k,slotScopeIds:X}=I;X&&(ot=ot?ot.concat(X):X),A==null?(i(x,w,at),i(v,w,at),N(I.children||[],w,v,J,$,et,ot,q)):C>0&&C&64&&k&&A.dynamicChildren&&A.dynamicChildren.length===k.length?(S(A.dynamicChildren,k,w,J,$,et,ot),(I.key!=null||J&&I===J.subTree)&&md(A,I,!0)):W(A,I,w,v,J,$,et,ot,q)},H=(A,I,w,at,J,$,et,ot,q)=>{I.slotScopeIds=ot,A==null?I.shapeFlag&512?J.ctx.activate(I,w,at,et,q):Q(I,w,at,J,$,et,q):st(A,I,q)},Q=(A,I,w,at,J,$,et)=>{const ot=A.component=tg(A,at,J);if(fa(A)&&(ot.ctx.renderer=kt),eg(ot,!1,et),ot.asyncDep){if(J&&J.registerDep(ot,tt,et),!A.el){const q=ot.subTree=me(ke);f(null,q,I,w),A.placeholder=q.el}}else tt(ot,A,I,w,J,$,et)},st=(A,I,w)=>{const at=I.component=A.component;if(Nm(A,I,w))if(at.asyncDep&&!at.asyncResolved){it(at,I,w);return}else at.next=I,at.update();else I.el=A.el,at.vnode=I},tt=(A,I,w,at,J,$,et)=>{const ot=()=>{if(A.isMounted){let{next:C,bu:k,u:X,parent:Y,vnode:mt}=A;{const Mt=gd(A);if(Mt){C&&(C.el=mt.el,it(A,C,et)),Mt.asyncDep.then(()=>{nn(()=>{A.isUnmounted||x()},J)});return}}let ut=C,dt;Vi(A,!1),C?(C.el=mt.el,it(A,C,et)):C=mt,k&&Ao(k),(dt=C.props&&C.props.onVnodeBeforeUpdate)&&On(dt,Y,C,mt),Vi(A,!0);const Bt=bu(A),ht=A.subTree;A.subTree=Bt,_(ht,Bt,h(ht.el),_t(ht),A,J,$),C.el=Bt.el,ut===null&&Fm(A,Bt.el),X&&nn(X,J),(dt=C.props&&C.props.onVnodeUpdated)&&nn(()=>On(dt,Y,C,mt),J)}else{let C;const{el:k,props:X}=I,{bm:Y,m:mt,parent:ut,root:dt,type:Bt}=A,ht=Os(I);Vi(A,!1),Y&&Ao(Y),!ht&&(C=X&&X.onVnodeBeforeMount)&&On(C,ut,I),Vi(A,!0);{dt.ce&&dt.ce._hasShadowRoot()&&dt.ce._injectChildStyle(Bt,A.parent?A.parent.type:void 0);const Mt=A.subTree=bu(A);_(null,Mt,w,at,A,J,$),I.el=Mt.el}if(mt&&nn(mt,J),!ht&&(C=X&&X.onVnodeMounted)){const Mt=I;nn(()=>On(C,ut,Mt),J)}(I.shapeFlag&256||ut&&Os(ut.vnode)&&ut.vnode.shapeFlag&256)&&A.a&&nn(A.a,J),A.isMounted=!0,I=w=at=null}};A.scope.on();const q=A.effect=new bf(ot);A.scope.off();const x=A.update=q.run.bind(q),v=A.job=q.runIfDirty.bind(q);v.i=A,v.id=A.uid,q.scheduler=()=>Lc(v),Vi(A,!0),x()},it=(A,I,w)=>{I.component=A;const at=A.vnode.props;A.vnode=I,A.next=null,Bm(A,I.props,at,w),km(A,I.children,w),hi(),gu(A),fi()},W=(A,I,w,at,J,$,et,ot,q=!1)=>{const x=A&&A.children,v=A?A.shapeFlag:0,C=I.children,{patchFlag:k,shapeFlag:X}=I;if(k>0){if(k&128){St(x,C,w,at,J,$,et,ot,q);return}else if(k&256){gt(x,C,w,at,J,$,et,ot,q);return}}X&8?(v&16&&At(x,J,$),C!==x&&u(w,C)):v&16?X&16?St(x,C,w,at,J,$,et,ot,q):At(x,J,$,!0):(v&8&&u(w,""),X&16&&N(C,w,at,J,$,et,ot,q))},gt=(A,I,w,at,J,$,et,ot,q)=>{A=A||Us,I=I||Us;const x=A.length,v=I.length,C=Math.min(x,v);let k;for(k=0;k<C;k++){const X=I[k]=q?si(I[k]):Vn(I[k]);_(A[k],X,w,null,J,$,et,ot,q)}x>v?At(A,J,$,!0,!1,C):N(I,w,at,J,$,et,ot,q,C)},St=(A,I,w,at,J,$,et,ot,q)=>{let x=0;const v=I.length;let C=A.length-1,k=v-1;for(;x<=C&&x<=k;){const X=A[x],Y=I[x]=q?si(I[x]):Vn(I[x]);if(Zi(X,Y))_(X,Y,w,null,J,$,et,ot,q);else break;x++}for(;x<=C&&x<=k;){const X=A[C],Y=I[k]=q?si(I[k]):Vn(I[k]);if(Zi(X,Y))_(X,Y,w,null,J,$,et,ot,q);else break;C--,k--}if(x>C){if(x<=k){const X=k+1,Y=X<v?I[X].el:at;for(;x<=k;)_(null,I[x]=q?si(I[x]):Vn(I[x]),w,Y,J,$,et,ot,q),x++}}else if(x>k)for(;x<=C;)Ot(A[x],J,$,!0),x++;else{const X=x,Y=x,mt=new Map;for(x=Y;x<=k;x++){const vt=I[x]=q?si(I[x]):Vn(I[x]);vt.key!=null&&mt.set(vt.key,x)}let ut,dt=0;const Bt=k-Y+1;let ht=!1,Mt=0;const Nt=new Array(Bt);for(x=0;x<Bt;x++)Nt[x]=0;for(x=X;x<=C;x++){const vt=A[x];if(dt>=Bt){Ot(vt,J,$,!0);continue}let Gt;if(vt.key!=null)Gt=mt.get(vt.key);else for(ut=Y;ut<=k;ut++)if(Nt[ut-Y]===0&&Zi(vt,I[ut])){Gt=ut;break}Gt===void 0?Ot(vt,J,$,!0):(Nt[Gt-Y]=x+1,Gt>=Mt?Mt=Gt:ht=!0,_(vt,I[Gt],w,null,J,$,et,ot,q),dt++)}const Vt=ht?qm(Nt):Us;for(ut=Vt.length-1,x=Bt-1;x>=0;x--){const vt=Y+x,Gt=I[vt],Xt=I[vt+1],oe=vt+1<v?Xt.el||_d(Xt):at;Nt[x]===0?_(null,Gt,w,oe,J,$,et,ot,q):ht&&(ut<0||x!==Vt[ut]?wt(Gt,w,oe,2):ut--)}}},wt=(A,I,w,at,J=null)=>{const{el:$,type:et,transition:ot,children:q,shapeFlag:x}=A;if(x&6){wt(A.component.subTree,I,w,at);return}if(x&128){A.suspense.move(I,w,at);return}if(x&64){et.move(A,I,w,kt);return}if(et===He){i($,I,w);for(let C=0;C<q.length;C++)wt(q[C],I,w,at);i(A.anchor,I,w);return}if(et===Ro){b(A,I,w);return}if(at!==2&&x&1&&ot)if(at===0)ot.persisted&&!$[vn]?i($,I,w):(ot.beforeEnter($),i($,I,w),nn(()=>ot.enter($),J));else{const{leave:C,delayLeave:k,afterLeave:X}=ot,Y=()=>{A.ctx.isUnmounted?s($):i($,I,w)},mt=()=>{const ut=$._isLeaving||!!$[vn];$._isLeaving&&$[vn](!0),ot.persisted&&!ut?Y():C($,()=>{Y(),X&&X()})};k?k($,Y,mt):mt()}else i($,I,w)},Ot=(A,I,w,at=!1,J=!1)=>{const{type:$,props:et,ref:ot,children:q,dynamicChildren:x,shapeFlag:v,patchFlag:C,dirs:k,cacheIndex:X,memo:Y}=A;if(C===-2&&(J=!1),ot!=null&&(hi(),Er(ot,null,w,A,!0),fi()),X!=null&&(I.renderCache[X]=void 0),v&256){I.ctx.deactivate(A);return}const mt=v&1&&k,ut=!Os(A);let dt;if(ut&&(dt=et&&et.onVnodeBeforeUnmount)&&On(dt,I,A),v&6)ft(A.component,w,at);else{if(v&128){A.suspense.unmount(w,at);return}mt&&zi(A,null,I,"beforeUnmount"),v&64?A.type.remove(A,I,w,kt,at):x&&!x.hasOnce&&($!==He||C>0&&C&64)?At(x,I,w,!1,!0):($===He&&C&384||!J&&v&16)&&At(q,I,w),at&&Jt(A)}const Bt=Y!=null&&X==null;(ut&&(dt=et&&et.onVnodeUnmounted)||mt||Bt)&&nn(()=>{dt&&On(dt,I,A),mt&&zi(A,null,I,"unmounted"),Bt&&(A.el=null)},w)},Jt=A=>{const{type:I,el:w,anchor:at,transition:J}=A;if(I===He){rt(w,at);return}if(I===Ro){M(A);return}const $=()=>{s(w),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(A.shapeFlag&1&&J&&!J.persisted){const{leave:et,delayLeave:ot}=J,q=()=>et(w,$);ot?ot(A.el,$,q):q()}else $()},rt=(A,I)=>{let w;for(;A!==I;)w=d(A),s(A),A=w;s(I)},ft=(A,I,w)=>{const{bum:at,scope:J,job:$,subTree:et,um:ot,m:q,a:x}=A;Au(q),Au(x),at&&Ao(at),J.stop(),$&&($.flags|=8,Ot(et,A,I,w)),ot&&nn(ot,I),nn(()=>{A.isUnmounted=!0},I)},At=(A,I,w,at=!1,J=!1,$=0)=>{for(let et=$;et<A.length;et++)Ot(A[et],I,w,at,J)},_t=A=>{if(A.shapeFlag&6)return _t(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const I=d(A.anchor||A.el),w=I&&I[om];return w?d(w):I};let Ut=!1;const zt=(A,I,w)=>{let at;A==null?I._vnode&&(Ot(I._vnode,null,null,!0),at=I._vnode.component):_(I._vnode||null,A,I,null,null,null,w),I._vnode=A,Ut||(Ut=!0,gu(at),kf(),Ut=!1)},kt={p:_,um:Ot,m:wt,r:Jt,mt:Q,mc:N,pc:W,pbc:S,n:_t,o:n};return{render:zt,hydrate:void 0,createApp:Rm(zt)}}function Ra({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Vi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Xm(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function md(n,t,e=!1){const i=n.children,s=t.children;if(Ft(i)&&Ft(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=si(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&md(o,a)),a.type===ga&&(a.patchFlag===-1&&(a=s[r]=si(a)),a.el=o.el),a.type===ke&&!a.el&&(a.el=o.el)}}function qm(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function gd(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:gd(t)}function Au(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function _d(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?_d(t.subTree):null}const vd=n=>n.__isSuspense;function Ym(n,t){t&&t.pendingBranch?Ft(n)?t.effects.push(...n):t.effects.push(n):em(n)}const He=Symbol.for("v-fgt"),ga=Symbol.for("v-txt"),ke=Symbol.for("v-cmt"),Ro=Symbol.for("v-stc"),ci=[];let hn=null;function Ie(n=!1){ci.push(hn=n?null:[])}function Fc(){ci.pop(),hn=ci[ci.length-1]||null}let Pr=1;function Xo(n,t=!1){Pr+=n,n<0&&hn&&t&&(hn.hasOnce=!0)}function xd(n){return n.dynamicChildren=Pr>0?hn||Us:null,Fc(),Pr>0&&hn&&hn.push(n),n}function fn(n,t,e,i,s,r){return xd(U(n,t,e,i,s,r,!0))}function qo(n,t,e,i,s){return xd(me(n,t,e,i,s,!0))}function Dr(n){return n?n.__v_isVNode===!0:!1}function Zi(n,t){return n.type===t.type&&n.key===t.key}const Md=({key:n})=>n??null,Po=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Se(n)||We(n)||qt(n)?{i:Ge,r:n,k:t,f:!!e}:n:null);function U(n,t=null,e=null,i=0,s=null,r=n===He?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Md(t),ref:t&&Po(t),scopeId:Wf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ge};return a?(Yo(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Se(e)?8:16),Pr>0&&!o&&hn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&hn.push(l),l}const me=jm;function jm(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Mm)&&(n=ke),Dr(n)){const a=Ui(n,t,!0);return e&&Yo(a,e),Pr>0&&!r&&hn&&(a.shapeFlag&6?hn[hn.indexOf(n)]=a:hn.push(a)),a.patchFlag=-2,a}if(rg(n)&&(n=n.__vccOpts),t){t=$m(t);let{class:a,style:l}=t;a&&!Se(a)&&(t.class=Mn(a)),re(l)&&(Dc(l)&&!Ft(l)&&(l=Ce({},l)),t.style=Ec(l))}const o=Se(n)?1:vd(n)?128:ha(n)?64:re(n)?4:qt(n)?2:0;return U(n,t,e,i,s,o,r,!0)}function $m(n){return n?Dc(n)||cd(n)?Ce({},n):n:null}function Ui(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?Zm(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Md(c),ref:t&&t.ref?e&&r?Ft(r)?r.concat(Po(t)):[r,Po(t)]:Po(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==He?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ui(n.ssContent),ssFallback:n.ssFallback&&Ui(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Rr(u,l.clone(u)),u}function Tr(n=" ",t=0){return me(ga,null,n,t)}function Km(n,t){const e=me(Ro,null,n);return e.staticCount=t,e}function Lr(n="",t=!1){return t?(Ie(),qo(ke,null,n)):me(ke,null,n)}function Vn(n){return n==null||typeof n=="boolean"?me(ke):Ft(n)?me(He,null,n.slice()):Dr(n)?si(n):me(ga,null,String(n))}function si(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ui(n)}function Yo(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ft(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Yo(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!cd(t)?t._ctx=Ge:s===3&&Ge&&(Ge.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(qt(t)){if(i&65){Yo(n,{default:t});return}t={default:t,_ctx:Ge},e=32}else t=String(t),i&64?(e=16,t=[Tr(t)]):e=8;n.children=t,n.shapeFlag|=e}function Zm(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Mn([t.class,i.class]));else if(s==="style")t.style=Ec([t.style,i.style]);else if(sa(s)){const r=t[s],o=i[s];o&&r!==o&&!(Ft(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!ra(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function On(n,t,e,i=null){En(n,t,7,[e,i])}const Jm=sd();let Qm=0;function tg(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Jm,r={uid:Qm++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Tp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hd(i,s),emitsOptions:rd(i,s),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:i.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Dm.bind(null,r),n.ce&&n.ce(r),r}let $e=null;const Sd=()=>$e||Ge;let jo,Ir;{const n=la(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};jo=t("__VUE_INSTANCE_SETTERS__",e=>$e=e),Ir=t("__VUE_SSR_SETTERS__",e=>Ur=e)}const Vr=n=>{const t=$e;return jo(n),n.scope.on(),()=>{n.scope.off(),jo(t)}},Cu=()=>{$e&&$e.scope.off(),jo(null)};function yd(n){return n.vnode.shapeFlag&4}let Ur=!1;function eg(n,t=!1,e=!1){t&&Ir(t);const{props:i,children:s}=n.vnode,r=yd(n);Om(n,i,r,t),Hm(n,s,e||t);const o=r?ng(n,t):void 0;return t&&Ir(!1),o}function ng(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ym);const{setup:i}=e;if(i){hi();const s=n.setupContext=i.length>1?sg(n):null,r=Vr(n),o=zr(i,n,0,[n.props,s]),a=gf(o);if(fi(),r(),(a||n.sp)&&!Os(n)&&Jf(n),a){if(o.then(Cu,Cu),t)return o.then(l=>{Ir(!0);try{Ru(n,l,t)}finally{Ir(!1)}}).catch(l=>{ua(l,n,0)});n.asyncDep=o}else Ru(n,o)}else Ed(n)}function Ru(n,t,e){qt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:re(t)&&(n.setupState=Bf(t)),Ed(n)}function Ed(n,t,e){const i=n.type;n.render||(n.render=i.render||Wn);{const s=Vr(n);hi();try{Em(n)}finally{fi(),s()}}}const ig={get(n,t){return Ve(n,"get",""),n[t]}};function sg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,ig),slots:n.slots,emit:n.emit,expose:t}}function _a(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Bf(Xp(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in br)return br[e](n)},has(t,e){return e in t||e in br}})):n.proxy}function rg(n){return qt(n)&&"__vccOpts"in n}const sn=(n,t)=>Kp(n,t,Ur);function og(n,t,e){try{Xo(-1);const i=arguments.length;return i===2?re(t)&&!Ft(t)?Dr(t)?me(n,null,[t]):me(n,t):me(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Dr(e)&&(e=[e]),me(n,t,e))}finally{Xo(1)}}const ag="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Al;const Pu=typeof window<"u"&&window.trustedTypes;if(Pu)try{Al=Pu.createPolicy("vue",{createHTML:n=>n})}catch{}const bd=Al?n=>Al.createHTML(n):n=>n,lg="http://www.w3.org/2000/svg",cg="http://www.w3.org/1998/Math/MathML",ni=typeof document<"u"?document:null,Du=ni&&ni.createElement("template"),ug={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?ni.createElementNS(lg,n):t==="mathml"?ni.createElementNS(cg,n):e?ni.createElement(n,{is:e}):ni.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ni.createTextNode(n),createComment:n=>ni.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ni.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Du.innerHTML=bd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Du.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},xi="transition",ar="animation",Nr=Symbol("_vtc"),Td={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hg=Ce({},Yf,Td),fg=n=>(n.displayName="Transition",n.props=hg,n),dg=fg((n,{slots:t})=>og(cm,pg(n),t)),Hi=(n,t=[])=>{Ft(n)?n.forEach(e=>e(...t)):n&&n(...t)},Lu=n=>n?Ft(n)?n.some(t=>t.length>1):n.length>1:!1;function pg(n){const t={};for(const O in n)O in Td||(t[O]=n[O]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${e}-leave-from`,leaveActiveClass:d=`${e}-leave-active`,leaveToClass:m=`${e}-leave-to`}=n,g=mg(s),_=g&&g[0],p=g&&g[1],{onBeforeEnter:f,onEnter:y,onEnterCancelled:b,onLeave:M,onLeaveCancelled:L,onBeforeAppear:R=f,onAppear:P=y,onAppearCancelled:N=b}=t,T=(O,H,Q,st)=>{O._enterCancelled=st,ki(O,H?u:a),ki(O,H?c:o),Q&&Q()},S=(O,H)=>{O._isLeaving=!1,ki(O,h),ki(O,m),ki(O,d),H&&H()},D=O=>(H,Q)=>{const st=O?P:y,tt=()=>T(H,O,Q);Hi(st,[H,tt]),Iu(()=>{ki(H,O?l:r),$n(H,O?u:a),Lu(st)||Uu(H,i,_,tt)})};return Ce(t,{onBeforeEnter(O){Hi(f,[O]),$n(O,r),$n(O,o)},onBeforeAppear(O){Hi(R,[O]),$n(O,l),$n(O,c)},onEnter:D(!1),onAppear:D(!0),onLeave(O,H){O._isLeaving=!0;const Q=()=>S(O,H);$n(O,h),O._enterCancelled?($n(O,d),Ou(O)):(Ou(O),$n(O,d)),Iu(()=>{O._isLeaving&&(ki(O,h),$n(O,m),Lu(M)||Uu(O,i,p,Q))}),Hi(M,[O,Q])},onEnterCancelled(O){T(O,!1,void 0,!0),Hi(b,[O])},onAppearCancelled(O){T(O,!0,void 0,!0),Hi(N,[O])},onLeaveCancelled(O){S(O),Hi(L,[O])}})}function mg(n){if(n==null)return null;if(re(n))return[Pa(n.enter),Pa(n.leave)];{const t=Pa(n);return[t,t]}}function Pa(n){return _p(n)}function $n(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[Nr]||(n[Nr]=new Set)).add(t)}function ki(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[Nr];e&&(e.delete(t),e.size||(n[Nr]=void 0))}function Iu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let gg=0;function Uu(n,t,e,i){const s=n._endId=++gg,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:o,timeout:a,propCount:l}=_g(n,t);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,d),r()},d=m=>{m.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,d)}function _g(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),s=i(`${xi}Delay`),r=i(`${xi}Duration`),o=Nu(s,r),a=i(`${ar}Delay`),l=i(`${ar}Duration`),c=Nu(a,l);let u=null,h=0,d=0;t===xi?o>0&&(u=xi,h=o,d=r.length):t===ar?c>0&&(u=ar,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?xi:ar:null,d=u?u===xi?r.length:l.length:0);const m=u===xi&&/\b(?:transform|all)(?:,|$)/.test(i(`${xi}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:m}}function Nu(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>Fu(e)+Fu(n[i])))}function Fu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Ou(n){return(n?n.ownerDocument:document).body.offsetHeight}function vg(n,t,e){const i=n[Nr];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const $o=Symbol("_vod"),wd=Symbol("_vsh"),xg={name:"show",beforeMount(n,{value:t},{transition:e}){n[$o]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):lr(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),lr(n,!0),i.enter(n)):i.leave(n,()=>{lr(n,!1)}):lr(n,t))},beforeUnmount(n,{value:t}){lr(n,t)}};function lr(n,t){n.style.display=t?n[$o]:"none",n[wd]=!t}const Mg=Symbol(""),Sg=/(?:^|;)\s*display\s*:/;function yg(n,t,e){const i=n.style,s=Se(e);let r=!1;if(e&&!s){if(t)if(Se(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&gr(i,a,"")}else for(const o in t)e[o]==null&&gr(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?bg(n,o,!Se(t)&&t?t[o]:void 0,a)||gr(i,o,a):gr(i,o,"")}}else if(s){if(t!==e){const o=i[Mg];o&&(e+=";"+o),i.cssText=e,r=Sg.test(e)}}else t&&n.removeAttribute("style");$o in n&&(n[$o]=r?i.display:"",n[wd]&&(i.display="none"))}const Bu=/\s*!important$/;function gr(n,t,e){if(Ft(e))e.forEach(i=>gr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Eg(n,t);Bu.test(e)?n.setProperty(ls(i),e.replace(Bu,""),"important"):n[i]=e}}const zu=["Webkit","Moz","ms"],Da={};function Eg(n,t){const e=Da[t];if(e)return e;let i=Ln(t);if(i!=="filter"&&i in n)return Da[t]=i;i=xf(i);for(let s=0;s<zu.length;s++){const r=zu[s]+i;if(r in n)return Da[t]=r}return t}function bg(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Se(i)&&e===i}const Vu="http://www.w3.org/1999/xlink";function Hu(n,t,e,i,s,r=Ep(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Vu,t.slice(6,t.length)):n.setAttributeNS(Vu,t,e):e==null||r&&!Sf(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Un(e)?String(e):e)}function ku(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?bd(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Sf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function Pi(n,t,e,i){n.addEventListener(t,e,i)}function Tg(n,t,e,i){n.removeEventListener(t,e,i)}const Gu=Symbol("_vei");function wg(n,t,e,i,s=null){const r=n[Gu]||(n[Gu]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=Rg(t);if(i){const c=r[t]=Lg(i,s);Pi(n,a,c,l)}else o&&(Tg(n,a,o,l),r[t]=void 0)}}const Ag=/(Once|Passive|Capture)$/,Cg=/^on:?(?:Once|Passive|Capture)$/;function Rg(n){let t,e;for(;(e=n.match(Ag))&&!Cg.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):ls(n.slice(2)),t]}let La=0;const Pg=Promise.resolve(),Dg=()=>La||(Pg.then(()=>La=0),La=Date.now());function Lg(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Ft(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&En(c,t,5,a)}}else En(s,t,5,[i])};return e.value=n,e.attached=Dg(),e}const Wu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Ig=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?vg(n,i,o):t==="style"?yg(n,e,i):sa(t)?ra(t)||wg(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ug(n,t,i,o))?(ku(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Hu(n,t,i,o,r,t!=="value")):n._isVueCE&&(Ng(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Se(i)))?ku(n,Ln(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Hu(n,t,i,o))};function Ug(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Wu(t)&&qt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wu(t)&&Se(e)?!1:t in n}function Ng(n,t){const e=n._def.props;if(!e)return!1;const i=Ln(t);return Array.isArray(e)?e.some(s=>Ln(s)===i):Object.keys(e).some(s=>Ln(s)===i)}const Ws=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Ft(t)?e=>Ao(t,e):t};function Fg(n){n.target.composing=!0}function Xu(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Gn=Symbol("_assign"),Zr=Symbol("_initialValue");function Ia(n,t,e){return t&&(n=n.trim()),e&&(n=aa(n)),n}const Te={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[Zr]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Zr]=n.defaultValue.replace(/\r\n?/g,`
`))),n[Gn]=Ws(s);const r=i||s.props&&s.props.type==="number";Pi(n,t?"change":"input",o=>{o.target.composing||n[Gn](Ia(n.value,e,r))}),(e||r)&&Pi(n,"change",()=>{n.value=Ia(n.value,e,r)}),t||(Pi(n,"compositionstart",Fg),Pi(n,"compositionend",Xu),Pi(n,"change",Xu))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[Zr];delete n[Zr],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[Gn](Ia(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Gn]=Ws(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?aa(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},Mi={deep:!0,created(n,t,e){n[Gn]=Ws(e),Pi(n,"change",()=>{const i=n._modelValue,s=Fr(n),r=n.checked,o=n[Gn];if(Ft(i)){const a=bc(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Zs(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Ad(n,r))})},mounted:qu,beforeUpdate(n,t,e){n[Gn]=Ws(e),qu(n,t,e)}};function qu(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(Ft(t))s=bc(t,i.props.value)>-1;else if(Zs(t))s=t.has(i.props.value);else{if(t===e)return;s=Js(t,Ad(n,!0))}n.checked!==s&&(n.checked=s)}const Og={deep:!0,created(n,{value:t,modifiers:{number:e}},i){n._modelValue=t,Pi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,r=>r.selected).map(r=>e?aa(Fr(r)):Fr(r));n[Gn](n.multiple?Zs(n._modelValue)?new Set(s):s:s[0]),n._assigning=!0,Vf(()=>{n._assigning=!1})}),n[Gn]=Ws(i)},mounted(n,{value:t}){Yu(n,t)},beforeUpdate(n,{value:t},e){n._modelValue=t,n[Gn]=Ws(e)},updated(n,{value:t}){n._assigning||Yu(n,t)}};function Yu(n,t){const e=n.multiple,i=Ft(t);if(!(e&&!i&&!Zs(t))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Fr(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=bc(t,a)>-1}else o.selected=t.has(a);else if(Js(Fr(o),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Fr(n){return"_value"in n?n._value:n.value}function Ad(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const Bg=Ce({patchProp:Ig},ug);let ju;function zg(){return ju||(ju=Gm(Bg))}const Vg=((...n)=>{const t=zg().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=kg(i);if(!s)return;const r=t._component;!qt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,Hg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function Hg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function kg(n){return Se(n)?document.querySelector(n):n}const Gg={class:"titlebar"},Wg={class:"tb-left"},Xg=["title"],qg={class:"tb-right"},Yg={key:0,class:"tb-counter",title:"访问量"},jg="https://countapi.mileshilliard.com/api/v1",$g=Oi({__name:"AppHeader",props:{sidebarVisible:{type:Boolean}},emits:["toggle-sidebar"],setup(n){const t=Qs(null);function e(){return`three-water-flood-sim-${(window.location.hostname||"unknown-host").replace(/[^a-zA-Z0-9_-]/g,"_")}`}return pa(async()=>{try{const i=new AbortController,s=setTimeout(()=>i.abort(),5e3),r=await fetch(`${jg}/hit/${e()}`,{signal:i.signal});if(clearTimeout(s),!r.ok)return;const o=await r.json(),a=Number(o.value??NaN);Number.isFinite(a)&&(t.value=a)}catch{}}),(i,s)=>(Ie(),fn("header",Gg,[U("div",Wg,[U("button",{class:"tb-btn",title:n.sidebarVisible?"隐藏侧边栏":"显示侧边栏",onClick:s[0]||(s[0]=r=>i.$emit("toggle-sidebar"))},[...s[1]||(s[1]=[U("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor"},[U("path",{d:"M1 2h14v12H1V2zm1 1v10h12V3H2zm3 1h1v8H5V4zm4 0h1v8H9V4z"})],-1)])],8,Xg),s[2]||(s[2]=Km('<div class="tb-logo" data-v-66868b33><svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-66868b33><path d="M3 18L8 10L12 14L16 6L21 12" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" data-v-66868b33></path><path d="M3 18C3 18 5.5 20.5 8 20.5C10.5 20.5 12 18 12 18C12 18 13.5 20.5 16 20.5C18.5 20.5 21 18 21 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.9" data-v-66868b33></path></svg></div><div class="tb-title" data-v-66868b33><span class="tb-app" data-v-66868b33>三维地形-洪水仿真推演</span><span class="tb-sep" data-v-66868b33>·</span><span class="tb-desc" data-v-66868b33>TERRAIN FLOODING SIMULATION</span></div>',2))]),U("div",qg,[t.value!==null?(Ie(),fn("span",Yg," 访问 "+Zt(t.value)+" 次 ",1)):Lr("",!0),s[3]||(s[3]=U("a",{class:"tb-link",href:"https://sxguojf.github.io/demo/",target:"_blank",rel:"noopener"},"three-tile",-1))])]))}}),cs=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},Kg=cs($g,[["__scopeId","data-v-66868b33"]]),Ko=5e3,Zg=-1e4,Jg=.1,$u=256;function Qg(){return{vertExag:2,rampBlend:.25,wireframe:!1,showBounds:!0,mode:"gpu",simNx:256,simNz:256,gravity:9.8,friction:.05,maxSpeed:26,timeScale:60,rain:1e3,infiltration:!1,infilF0:120,infilFc:15,infilK:3,drainBoundary:!1,tool:"orbit",waterRadius:20,fillRadius:20,pushRadius:60,brushRainRate:10,fillVolume:2e6,pushStrength:2e3,waterOpacity:.9,skyMode:"night",nightBrightness:2,waterShallowColor:"#6E8CA0",waterDeepColor:"#416482",particles:!1,particleCount:600,particleSize:6,showArrows:!1,showWaves:!0,waveScale:300,alphaToCoverage:!1}}const z=Fi(Qg()),ze=Fi({fps:0,volume:0,infiltratedVolume:0,maxWater:0,simTime:0,terrainMin:0,terrainMax:0,terrainRange:0}),zs={current:null},t_=35e6,It=Fi({x:Ko,z:Ko});function e_(n){if(n!=null&&n.West&&(n!=null&&n.East)&&(n!=null&&n.South)&&(n!=null&&n.North)){const t=parseFloat(n.West),e=parseFloat(n.East),i=parseFloat(n.South),s=parseFloat(n.North),r=(s+i)/2*Math.PI/180,o=111320,a=o*Math.cos(r);return{x:(e-t)*a,z:(s-i)*o}}return{x:Ko,z:Ko}}const ai=Fi({lon:0,lat:0,elevation:0,waterDepth:0}),rn=Fi({west:0,east:0,south:0,north:0}),Zo=Qs(!1);function n_(n){n!=null&&n.West&&(n!=null&&n.East)&&(n!=null&&n.South)&&(n!=null&&n.North)&&(rn.west=parseFloat(n.West),rn.east=parseFloat(n.East),rn.south=parseFloat(n.South),rn.north=parseFloat(n.North),Zo.value=!0)}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oc="170",Vs={ROTATE:0,DOLLY:1,PAN:2},Ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},i_=0,Ku=1,s_=2,Cd=1,r_=2,ei=3,Ni=0,Je=1,Pn=2,Li=0,rs=1,Cl=2,Zu=3,Ju=4,o_=5,Ji=100,a_=101,l_=102,c_=103,u_=104,h_=200,f_=201,d_=202,p_=203,Rl=204,Pl=205,m_=206,g_=207,__=208,v_=209,x_=210,M_=211,S_=212,y_=213,E_=214,Dl=0,Ll=1,Il=2,Xs=3,Ul=4,Nl=5,Fl=6,Ol=7,Bc=0,b_=1,T_=2,Ii=0,w_=1,A_=2,C_=3,Rd=4,R_=5,P_=6,D_=7,Pd=300,qs=301,Ys=302,Bl=303,zl=304,va=306,Jo=1e3,ts=1001,Vl=1002,Ee=1003,L_=1004,Jr=1005,Sn=1006,Ua=1007,es=1008,pi=1009,Dd=1010,Ld=1011,Or=1012,zc=1013,os=1014,on=1015,Hr=1016,Vc=1017,Hc=1018,js=1020,Id=35902,Ud=1021,Nd=1022,Ke=1023,Fd=1024,Od=1025,Hs=1026,$s=1027,kc=1028,Gc=1029,Bd=1030,Wc=1031,Xc=1033,Do=33776,Lo=33777,Io=33778,Uo=33779,Hl=35840,kl=35841,Gl=35842,Wl=35843,Xl=36196,ql=37492,Yl=37496,jl=37808,$l=37809,Kl=37810,Zl=37811,Jl=37812,Ql=37813,tc=37814,ec=37815,nc=37816,ic=37817,sc=37818,rc=37819,oc=37820,ac=37821,No=36492,lc=36494,cc=36495,zd=36283,uc=36284,hc=36285,fc=36286,I_=3200,U_=3201,Vd=0,N_=1,Di="",un="srgb",us="srgb-linear",xa="linear",ue="srgb",ms=7680,Qu=519,F_=512,O_=513,B_=514,Hd=515,z_=516,V_=517,H_=518,k_=519,th=35044,eh="300 es",li=2e3,Qo=2001;class hs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fo=Math.PI/180,dc=180/Math.PI;function kr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]).toLowerCase()}function je(n,t,e){return Math.max(t,Math.min(e,n))}function G_(n,t){return(n%t+t)%t}function Na(n,t,e){return(1-e)*n+e*t}function cr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const W_={DEG2RAD:Fo};class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,i,s,r,o,a,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],g=i[8],_=s[0],p=s[3],f=s[6],y=s[1],b=s[4],M=s[7],L=s[2],R=s[5],P=s[8];return r[0]=o*_+a*y+l*L,r[3]=o*p+a*b+l*R,r[6]=o*f+a*M+l*P,r[1]=c*_+u*y+h*L,r[4]=c*p+u*b+h*R,r[7]=c*f+u*M+h*P,r[2]=d*_+m*y+g*L,r[5]=d*p+m*b+g*R,r[8]=d*f+m*M+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,m=c*r-o*l,g=e*h+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Fa.makeScale(t,e)),this}rotate(t){return this.premultiply(Fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new $t;function kd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ta(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function X_(){const n=ta("canvas");return n.style.display="block",n}const nh={};function _r(n){n in nh||(nh[n]=!0,console.warn(n))}function q_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Y_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function j_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:us,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(n.r=ui(n.r),n.g=ui(n.g),n.b=ui(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(n.r=ks(n.r),n.g=ks(n.g),n.b=ks(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Di?xa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ih=[.64,.33,.3,.6,.15,.06],sh=[.2126,.7152,.0722],rh=[.3127,.329],oh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ah=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[us]:{primaries:ih,whitePoint:rh,transfer:xa,toXYZ:oh,fromXYZ:ah,luminanceCoefficients:sh,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:ih,whitePoint:rh,transfer:ue,toXYZ:oh,fromXYZ:ah,luminanceCoefficients:sh,outputColorSpaceConfig:{drawingBufferColorSpace:un}}});let gs;class $_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gs===void 0&&(gs=ta("canvas")),gs.width=t.width,gs.height=t.height;const i=gs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=gs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ta("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ui(e[i]/255)*255):e[i]=ui(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let K_=0;class Gd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=kr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Oa(s[o].image)):r.push(Oa(s[o]))}else r=Oa(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Oa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Z_=0;class Ue extends hs{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,i=ts,s=ts,r=Sn,o=es,a=Ke,l=pi,c=Ue.DEFAULT_ANISOTROPY,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=kr(),this.name="",this.source=new Gd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jo:t.x=t.x-Math.floor(t.x);break;case ts:t.x=t.x<0?0:1;break;case Vl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jo:t.y=t.y-Math.floor(t.y);break;case ts:t.y=t.y<0?0:1;break;case Vl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Pd;Ue.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,i=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,M=(m+1)/2,L=(f+1)/2,R=(u+d)/4,P=(h+_)/4,N=(g+p)/4;return b>M&&b>L?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=R/i,r=P/i):M>L?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=R/s,r=N/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=P/r,s=N/r),this.set(i,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class J_ extends hs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ue(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends J_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Wd extends Ue{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q_ extends Ue{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class as{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==m||u!==g){let p=1-a;const f=l*d+c*m+u*g+h*_,y=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const L=Math.sqrt(b),R=Math.atan2(L,f*y);p=Math.sin(p*R)/L,a=Math.sin(a*R)/L}const M=a*y;if(l=l*p+d*M,c=c*p+m*M,u=u*p+g*M,h=h*p+_*M,p===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*m-c*d,t[e+1]=l*g+u*d+c*h-a*m,t[e+2]=c*g+u*m+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,i=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ba.copy(this).projectOnVector(t),this.sub(Ba)}reflect(t){return this.sub(Ba.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ba=new G,lh=new as;class tr{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qr.copy(i.boundingBox)),Qr.applyMatrix4(t.matrixWorld),this.union(Qr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),to.subVectors(this.max,ur),_s.subVectors(t.a,ur),vs.subVectors(t.b,ur),xs.subVectors(t.c,ur),Si.subVectors(vs,_s),yi.subVectors(xs,vs),Gi.subVectors(_s,xs);let e=[0,-Si.z,Si.y,0,-yi.z,yi.y,0,-Gi.z,Gi.y,Si.z,0,-Si.x,yi.z,0,-yi.x,Gi.z,0,-Gi.x,-Si.y,Si.x,0,-yi.y,yi.x,0,-Gi.y,Gi.x,0];return!za(e,_s,vs,xs,to)||(e=[1,0,0,0,1,0,0,0,1],!za(e,_s,vs,xs,to))?!1:(eo.crossVectors(Si,yi),e=[eo.x,eo.y,eo.z],za(e,_s,vs,xs,to))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Kn=[new G,new G,new G,new G,new G,new G,new G,new G],An=new G,Qr=new tr,_s=new G,vs=new G,xs=new G,Si=new G,yi=new G,Gi=new G,ur=new G,to=new G,eo=new G,Wi=new G;function za(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Wi.fromArray(n,r);const a=s.x*Math.abs(Wi.x)+s.y*Math.abs(Wi.y)+s.z*Math.abs(Wi.z),l=t.dot(Wi),c=e.dot(Wi),u=i.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const t0=new tr,hr=new G,Va=new G;class Gr{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):t0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);const e=hr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(hr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add(Va)),this.expandByPoint(hr.copy(t.center).sub(Va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new G,Ha=new G,no=new G,Ei=new G,ka=new G,io=new G,Ga=new G;class Wr{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ha.copy(t).add(e).multiplyScalar(.5),no.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(Ha);const r=t.distanceTo(e)*.5,o=-this.direction.dot(no),a=Ei.dot(this.direction),l=-Ei.dot(no),c=Ei.lengthSq(),u=Math.abs(1-o*o);let h,d,m,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ha).addScaledVector(no,d),m}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);const i=Zn.dot(this.direction),s=Zn.dot(Zn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,i,s,r){ka.subVectors(e,t),io.subVectors(i,t),Ga.crossVectors(ka,io);let o=this.direction.dot(Ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,t);const l=a*this.direction.dot(io.crossVectors(Ei,io));if(l<0)return null;const c=a*this.direction.dot(ka.cross(Ei));if(c<0||l+c>o)return null;const u=-a*Ei.dot(Ga);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,i,s,r,o,a,l,c,u,h,d,m,g,_,p){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,d,m,g,_,p)}set(t,e,i,s,r,o,a,l,c,u,h,d,m,g,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ms.setFromMatrixColumn(t,0).length(),r=1/Ms.setFromMatrixColumn(t,1).length(),o=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,m=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,m=l*h,g=c*u,_=c*h;e[0]=d+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,m=l*h,g=c*u,_=c*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,m=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-m,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=o*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(e0,t,n0)}lookAt(t,e,i){const s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),bi.crossVectors(i,ln),bi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),bi.crossVectors(i,ln)),bi.normalize(),so.crossVectors(ln,bi),s[0]=bi.x,s[4]=so.x,s[8]=ln.x,s[1]=bi.y,s[5]=so.y,s[9]=ln.y,s[2]=bi.z,s[6]=so.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],g=i[2],_=i[6],p=i[10],f=i[14],y=i[3],b=i[7],M=i[11],L=i[15],R=s[0],P=s[4],N=s[8],T=s[12],S=s[1],D=s[5],O=s[9],H=s[13],Q=s[2],st=s[6],tt=s[10],it=s[14],W=s[3],gt=s[7],St=s[11],wt=s[15];return r[0]=o*R+a*S+l*Q+c*W,r[4]=o*P+a*D+l*st+c*gt,r[8]=o*N+a*O+l*tt+c*St,r[12]=o*T+a*H+l*it+c*wt,r[1]=u*R+h*S+d*Q+m*W,r[5]=u*P+h*D+d*st+m*gt,r[9]=u*N+h*O+d*tt+m*St,r[13]=u*T+h*H+d*it+m*wt,r[2]=g*R+_*S+p*Q+f*W,r[6]=g*P+_*D+p*st+f*gt,r[10]=g*N+_*O+p*tt+f*St,r[14]=g*T+_*H+p*it+f*wt,r[3]=y*R+b*S+M*Q+L*W,r[7]=y*P+b*D+M*st+L*gt,r[11]=y*N+b*O+M*tt+L*St,r[15]=y*T+b*H+M*it+L*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],m=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*m-i*l*m)+_*(+e*l*m-e*c*d+r*o*d-s*o*m+s*c*u-r*l*u)+p*(+e*c*h-e*a*m-r*o*h+i*o*m+r*a*u-i*c*u)+f*(-s*a*u-e*l*h+e*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],m=t[11],g=t[12],_=t[13],p=t[14],f=t[15],y=h*p*c-_*d*c+_*l*m-a*p*m-h*l*f+a*d*f,b=g*d*c-u*p*c-g*l*m+o*p*m+u*l*f-o*d*f,M=u*_*c-g*h*c+g*a*m-o*_*m-u*a*f+o*h*f,L=g*h*l-u*_*l-g*a*d+o*_*d+u*a*p-o*h*p,R=e*y+i*b+s*M+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return t[0]=y*P,t[1]=(_*d*r-h*p*r-_*s*m+i*p*m+h*s*f-i*d*f)*P,t[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*f+i*l*f)*P,t[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*m-i*l*m)*P,t[4]=b*P,t[5]=(u*p*r-g*d*r+g*s*m-e*p*m-u*s*f+e*d*f)*P,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*f-e*l*f)*P,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*m+e*l*m)*P,t[8]=M*P,t[9]=(g*h*r-u*_*r-g*i*m+e*_*m+u*i*f-e*h*f)*P,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*f+e*a*f)*P,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*m-e*a*m)*P,t[12]=L*P,t[13]=(u*_*s-g*h*s+g*i*d-e*_*d-u*i*p+e*h*p)*P,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*p-e*a*p)*P,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*d+e*a*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,m=r*u,g=r*h,_=o*u,p=o*h,f=a*h,y=l*c,b=l*u,M=l*h,L=i.x,R=i.y,P=i.z;return s[0]=(1-(_+f))*L,s[1]=(m+M)*L,s[2]=(g-b)*L,s[3]=0,s[4]=(m-M)*R,s[5]=(1-(d+f))*R,s[6]=(p+y)*R,s[7]=0,s[8]=(g+b)*P,s[9]=(p-y)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ms.set(s[0],s[1],s[2]).length();const o=Ms.set(s[4],s[5],s[6]).length(),a=Ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);const c=1/r,u=1/o,h=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,e.setFromRotationMatrix(Cn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=li){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let m,g;if(a===li)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Qo)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=li){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),d=(e+t)*c,m=(i+s)*u;let g,_;if(a===li)g=(o+r)*h,_=-2*h;else if(a===Qo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ms=new G,Cn=new ce,e0=new G(0,0,0),n0=new G(1,1,1),bi=new G,so=new G,ln=new G,ch=new ce,uh=new as;class Xn{constructor(t=0,e=0,i=0,s=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ch.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ch,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uh.setFromEuler(this),this.setFromQuaternion(uh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class qc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let i0=0;const hh=new G,Ss=new as,Jn=new ce,ro=new G,fr=new G,s0=new G,r0=new as,fh=new G(1,0,0),dh=new G(0,1,0),ph=new G(0,0,1),mh={type:"added"},o0={type:"removed"},ys={type:"childadded",child:null},Wa={type:"childremoved",child:null};class Ae extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new G,e=new Xn,i=new as,s=new G(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new $t}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(fh,t)}rotateY(t){return this.rotateOnAxis(dh,t)}rotateZ(t){return this.rotateOnAxis(ph,t)}translateOnAxis(t,e){return hh.copy(t).applyQuaternion(this.quaternion),this.position.add(hh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fh,t)}translateY(t){return this.translateOnAxis(dh,t)}translateZ(t){return this.translateOnAxis(ph,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ro.copy(t):ro.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(fr,ro,this.up):Jn.lookAt(ro,fr,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(Jn),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mh),ys.child=t,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(o0),Wa.child=t,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mh),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,s0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,r0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new G(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new G,Qn=new G,Xa=new G,ti=new G,Es=new G,bs=new G,gh=new G,qa=new G,Ya=new G,ja=new G,$a=new ve,Ka=new ve,Za=new ve;class Dn{constructor(t=new G,e=new G,i=new G){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Rn.subVectors(t,e),s.cross(Rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Rn.subVectors(s,e),Qn.subVectors(i,e),Xa.subVectors(t,e);const o=Rn.dot(Rn),a=Rn.dot(Qn),l=Rn.dot(Xa),c=Qn.dot(Qn),u=Qn.dot(Xa),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return $a.setScalar(0),Ka.setScalar(0),Za.setScalar(0),$a.fromBufferAttribute(t,e),Ka.fromBufferAttribute(t,i),Za.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector($a,r.x),o.addScaledVector(Ka,r.y),o.addScaledVector(Za,r.z),o}static isFrontFacing(t,e,i,s){return Rn.subVectors(i,e),Qn.subVectors(t,e),Rn.cross(Qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Rn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Dn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Es.subVectors(s,i),bs.subVectors(r,i),qa.subVectors(t,i);const l=Es.dot(qa),c=bs.dot(qa);if(l<=0&&c<=0)return e.copy(i);Ya.subVectors(t,s);const u=Es.dot(Ya),h=bs.dot(Ya);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Es,o);ja.subVectors(t,r);const m=Es.dot(ja),g=bs.dot(ja);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(bs,a);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return gh.subVectors(r,s),a=(h-u)/(h-u+(m-g)),e.copy(s).addScaledVector(gh,a);const f=1/(p+_+d);return o=_*f,a=d*f,e.copy(i).addScaledVector(Es,o).addScaledVector(bs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},oo={h:0,s:0,l:0};function Ja(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Dt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=G_(t,1),e=je(e,0,1),i=je(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ja(o,r,t+1/3),this.g=Ja(o,r,t),this.b=Ja(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=un){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=un){const i=Xd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return Qt.fromWorkingColorSpace(Be.copy(this),t),Math.round(je(Be.r*255,0,255))*65536+Math.round(je(Be.g*255,0,255))*256+Math.round(je(Be.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Be.copy(this),e);const i=Be.r,s=Be.g,r=Be.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=un){Qt.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,i=Be.g,s=Be.b;return t!==un?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(oo);const i=Na(Ti.h,oo.h,e),s=Na(Ti.s,oo.s,e),r=Na(Ti.l,oo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Dt;Dt.NAMES=Xd;let a0=0;class fs extends hs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=kr(),this.name="",this.blending=rs,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Pl,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rl&&(i.blendSrc=this.blendSrc),this.blendDst!==Pl&&(i.blendDst=this.blendDst),this.blendEquation!==Ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yc extends fs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new G,ao=new Ht;class fe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=th,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ao.fromBufferAttribute(this,e),ao.applyMatrix3(t),this.setXY(e,ao.x,ao.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=cr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=tn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cr(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cr(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cr(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),i=tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),i=tn(i,this.array),s=tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),i=tn(i,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==th&&(t.usage=this.usage),t}}class qd extends fe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Yd extends fe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class dn extends fe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let l0=0;const gn=new ce,Qa=new Ae,Ts=new G,cn=new tr,dr=new tr,De=new G;class Ne extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kd(t)?Yd:qd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,i){return gn.makeTranslation(t,e,i),this.applyMatrix4(gn),this}scale(t,e,i){return gn.makeScale(t,e,i),this.applyMatrix4(gn),this}lookAt(t){return Qa.lookAt(t),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dn(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(cn.min,dr.min),cn.expandByPoint(De),De.addVectors(cn.max,dr.max),cn.expandByPoint(De)):(cn.expandByPoint(dr.min),cn.expandByPoint(dr.max))}cn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)De.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(t,c),De.add(Ts)),s=Math.max(s,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new G,l[N]=new G;const c=new G,u=new G,h=new G,d=new Ht,m=new Ht,g=new Ht,_=new G,p=new G;function f(N,T,S){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),d.fromBufferAttribute(r,N),m.fromBufferAttribute(r,T),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),m.sub(d),g.sub(d);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(D),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(D),a[N].add(_),a[T].add(_),a[S].add(_),l[N].add(p),l[T].add(p),l[S].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let N=0,T=y.length;N<T;++N){const S=y[N],D=S.start,O=S.count;for(let H=D,Q=D+O;H<Q;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const b=new G,M=new G,L=new G,R=new G;function P(N){L.fromBufferAttribute(s,N),R.copy(L);const T=a[N];b.copy(T),b.sub(L.multiplyScalar(L.dot(T))).normalize(),M.crossVectors(R,T);const D=M.dot(l[N])<0?-1:1;o.setXYZW(N,b.x,b.y,b.z,D)}for(let N=0,T=y.length;N<T;++N){const S=y[N],D=S.start,O=S.count;for(let H=D,Q=D+O;H<Q;H+=3)P(t.getX(H+0)),P(t.getX(H+1)),P(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,u=new G,h=new G;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[m++]}return new fe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=t(d,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _h=new ce,Xi=new Wr,lo=new Gr,vh=new G,co=new G,uo=new G,ho=new G,tl=new G,fo=new G,xh=new G,po=new G;class Ze extends Ae{constructor(t=new Ne,e=new Yc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(tl.fromBufferAttribute(h,t),o?fo.addScaledVector(tl,u):fo.addScaledVector(tl.sub(e),u))}e.add(fo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!(lo.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(lo,vh)===null||Xi.origin.distanceToSquared(vh)>(t.far-t.near)**2))&&(_h.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(_h),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],y=Math.max(p.start,m.start),b=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=y,L=b;M<L;M+=3){const R=a.getX(M),P=a.getX(M+1),N=a.getX(M+2);s=mo(this,f,t,i,c,u,h,R,P,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const y=a.getX(p),b=a.getX(p+1),M=a.getX(p+2);s=mo(this,o,t,i,c,u,h,y,b,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],y=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=y,L=b;M<L;M+=3){const R=M,P=M+1,N=M+2;s=mo(this,f,t,i,c,u,h,R,P,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const y=p,b=p+1,M=p+2;s=mo(this,o,t,i,c,u,h,y,b,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function c0(n,t,e,i,s,r,o,a){let l;if(t.side===Je?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ni,a),l===null)return null;po.copy(a),po.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(po);return c<e.near||c>e.far?null:{distance:c,point:po.clone(),object:n}}function mo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,co),n.getVertexPosition(l,uo),n.getVertexPosition(c,ho);const u=c0(n,t,e,i,co,uo,ho,xh);if(u){const h=new G;Dn.getBarycoord(xh,co,uo,ho,h),s&&(u.uv=Dn.getInterpolatedAttribute(s,a,l,c,h,new Ht)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,a,l,c,h,new Ht)),o&&(u.normal=Dn.getInterpolatedAttribute(o,a,l,c,h,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new G,materialIndex:0};Dn.getNormal(co,uo,ho,d.normal),u.face=d,u.barycoord=h}return u}class Xr extends Ne{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(u,3)),this.setAttribute("uv",new dn(h,2));function g(_,p,f,y,b,M,L,R,P,N,T){const S=M/P,D=L/N,O=M/2,H=L/2,Q=R/2,st=P+1,tt=N+1;let it=0,W=0;const gt=new G;for(let St=0;St<tt;St++){const wt=St*D-H;for(let Ot=0;Ot<st;Ot++){const Jt=Ot*S-O;gt[_]=Jt*y,gt[p]=wt*b,gt[f]=Q,c.push(gt.x,gt.y,gt.z),gt[_]=0,gt[p]=0,gt[f]=R>0?1:-1,u.push(gt.x,gt.y,gt.z),h.push(Ot/P),h.push(1-St/N),it+=1}}for(let St=0;St<N;St++)for(let wt=0;wt<P;wt++){const Ot=d+wt+st*St,Jt=d+wt+st*(St+1),rt=d+(wt+1)+st*(St+1),ft=d+(wt+1)+st*St;l.push(Ot,Jt,ft),l.push(Jt,rt,ft),W+=6}a.addGroup(m,W,T),m+=W,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ks(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function qe(n){const t={};for(let e=0;e<n.length;e++){const i=Ks(n[e]);for(const s in i)t[s]=i[s]}return t}function u0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function jd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const h0={clone:Ks,merge:qe};var f0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends fs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f0,this.fragmentShader=d0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ks(t.uniforms),this.uniformsGroups=u0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class $d extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new G,Mh=new Ht,Sh=new Ht;class xn extends $d{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=dc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dc*2*Math.atan(Math.tan(Fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,Mh,Sh),e.subVectors(Sh,Mh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ws=-90,As=1;class p0 extends Ae{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(ws,As,t,e);s.layers=this.layers,this.add(s);const r=new xn(ws,As,t,e);r.layers=this.layers,this.add(r);const o=new xn(ws,As,t,e);o.layers=this.layers,this.add(o);const a=new xn(ws,As,t,e);a.layers=this.layers,this.add(a);const l=new xn(ws,As,t,e);l.layers=this.layers,this.add(l);const c=new xn(ws,As,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Kd extends Ue{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:qs,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class m0 extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Kd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xr(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Je,blending:Li});r.uniforms.tEquirect.value=e;const o=new Ze(s,r),a=e.minFilter;return e.minFilter===es&&(e.minFilter=Sn),new p0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const el=new G,g0=new G,_0=new $t;class Ri{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=el.subVectors(i,e).cross(g0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(el),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||_0.getNormalMatrix(t),s=this.coplanarPoint(el).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new Gr,go=new G;class jc{constructor(t=new Ri,e=new Ri,i=new Ri,s=new Ri,r=new Ri,o=new Ri){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=li){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],m=s[8],g=s[9],_=s[10],p=s[11],f=s[12],y=s[13],b=s[14],M=s[15];if(i[0].setComponents(l-r,d-c,p-m,M-f).normalize(),i[1].setComponents(l+r,d+c,p+m,M+f).normalize(),i[2].setComponents(l+o,d+u,p+g,M+y).normalize(),i[3].setComponents(l-o,d-u,p-g,M-y).normalize(),i[4].setComponents(l-a,d-h,p-_,M-b).normalize(),e===li)i[5].setComponents(l+a,d+h,p+_,M+b).normalize();else if(e===Qo)i[5].setComponents(a,h,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(go.x=s.normal.x>0?t.max.x:t.min.x,go.y=s.normal.y>0?t.max.y:t.min.y,go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function v0(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<h.length;m++){const g=h[d],_=h[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let m=0,g=h.length;m<g;m++){const _=h[m];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class er extends Ne{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,m=[],g=[],_=[],p=[];for(let f=0;f<u;f++){const y=f*d-o;for(let b=0;b<c;b++){const M=b*h-r;g.push(M,-y,0),_.push(0,0,1),p.push(b/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){const b=y+c*f,M=y+c*(f+1),L=y+1+c*(f+1),R=y+1+c*f;m.push(b,M,R),m.push(M,L,R)}this.setIndex(m),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(_,3)),this.setAttribute("uv",new dn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.width,t.height,t.widthSegments,t.heightSegments)}}var x0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M0=`#ifdef USE_ALPHAHASH
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
#endif`,S0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T0=`#ifdef USE_AOMAP
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
#endif`,w0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A0=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,C0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L0=`#ifdef USE_IRIDESCENCE
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
#endif`,I0=`#ifdef USE_BUMPMAP
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
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,k0=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,G0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,W0=`vec3 transformedNormal = objectNormal;
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
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",K0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z0=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,tv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
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
#endif`,nv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ov=`#ifdef USE_GRADIENTMAP
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
}`,av=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uv=`uniform bool receiveShadow;
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
#endif`,hv=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,fv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,_v=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vv=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,xv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ev=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cv=`#if defined( USE_POINTS_UV )
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
#endif`,Rv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uv=`#ifdef USE_MORPHTARGETS
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
#endif`,Nv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ov=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hv=`#ifdef USE_NORMALMAP
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
#endif`,kv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$v=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ix=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rx=`#ifdef USE_SKINNING
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
#endif`,ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ax=`#ifdef USE_SKINNING
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
#endif`,lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fx=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dx=`#ifdef USE_TRANSMISSION
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xx=`uniform sampler2D t2D;
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
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ex=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`#include <common>
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
}`,Tx=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wx=`#define DISTANCE
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
}`,Ax=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`uniform float scale;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Lx=`#include <common>
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
}`,Ix=`uniform vec3 diffuse;
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
}`,Ux=`#define LAMBERT
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
}`,Nx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Fx=`#define MATCAP
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
}`,Ox=`#define MATCAP
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
}`,Bx=`#define NORMAL
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
}`,zx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vx=`#define PHONG
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
}`,Hx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,kx=`#define STANDARD
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
}`,Gx=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Wx=`#define TOON
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
}`,Xx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,qx=`uniform float size;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,jx=`#include <common>
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
}`,$x=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Kx=`uniform float rotation;
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
}`,Zx=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:x0,alphahash_pars_fragment:M0,alphamap_fragment:S0,alphamap_pars_fragment:y0,alphatest_fragment:E0,alphatest_pars_fragment:b0,aomap_fragment:T0,aomap_pars_fragment:w0,batching_pars_vertex:A0,batching_vertex:C0,begin_vertex:R0,beginnormal_vertex:P0,bsdfs:D0,iridescence_fragment:L0,bumpmap_pars_fragment:I0,clipping_planes_fragment:U0,clipping_planes_pars_fragment:N0,clipping_planes_pars_vertex:F0,clipping_planes_vertex:O0,color_fragment:B0,color_pars_fragment:z0,color_pars_vertex:V0,color_vertex:H0,common:k0,cube_uv_reflection_fragment:G0,defaultnormal_vertex:W0,displacementmap_pars_vertex:X0,displacementmap_vertex:q0,emissivemap_fragment:Y0,emissivemap_pars_fragment:j0,colorspace_fragment:$0,colorspace_pars_fragment:K0,envmap_fragment:Z0,envmap_common_pars_fragment:J0,envmap_pars_fragment:Q0,envmap_pars_vertex:tv,envmap_physical_pars_fragment:hv,envmap_vertex:ev,fog_vertex:nv,fog_pars_vertex:iv,fog_fragment:sv,fog_pars_fragment:rv,gradientmap_pars_fragment:ov,lightmap_pars_fragment:av,lights_lambert_fragment:lv,lights_lambert_pars_fragment:cv,lights_pars_begin:uv,lights_toon_fragment:fv,lights_toon_pars_fragment:dv,lights_phong_fragment:pv,lights_phong_pars_fragment:mv,lights_physical_fragment:gv,lights_physical_pars_fragment:_v,lights_fragment_begin:vv,lights_fragment_maps:xv,lights_fragment_end:Mv,logdepthbuf_fragment:Sv,logdepthbuf_pars_fragment:yv,logdepthbuf_pars_vertex:Ev,logdepthbuf_vertex:bv,map_fragment:Tv,map_pars_fragment:wv,map_particle_fragment:Av,map_particle_pars_fragment:Cv,metalnessmap_fragment:Rv,metalnessmap_pars_fragment:Pv,morphinstance_vertex:Dv,morphcolor_vertex:Lv,morphnormal_vertex:Iv,morphtarget_pars_vertex:Uv,morphtarget_vertex:Nv,normal_fragment_begin:Fv,normal_fragment_maps:Ov,normal_pars_fragment:Bv,normal_pars_vertex:zv,normal_vertex:Vv,normalmap_pars_fragment:Hv,clearcoat_normal_fragment_begin:kv,clearcoat_normal_fragment_maps:Gv,clearcoat_pars_fragment:Wv,iridescence_pars_fragment:Xv,opaque_fragment:qv,packing:Yv,premultiplied_alpha_fragment:jv,project_vertex:$v,dithering_fragment:Kv,dithering_pars_fragment:Zv,roughnessmap_fragment:Jv,roughnessmap_pars_fragment:Qv,shadowmap_pars_fragment:tx,shadowmap_pars_vertex:ex,shadowmap_vertex:nx,shadowmask_pars_fragment:ix,skinbase_vertex:sx,skinning_pars_vertex:rx,skinning_vertex:ox,skinnormal_vertex:ax,specularmap_fragment:lx,specularmap_pars_fragment:cx,tonemapping_fragment:ux,tonemapping_pars_fragment:hx,transmission_fragment:fx,transmission_pars_fragment:dx,uv_pars_fragment:px,uv_pars_vertex:mx,uv_vertex:gx,worldpos_vertex:_x,background_vert:vx,background_frag:xx,backgroundCube_vert:Mx,backgroundCube_frag:Sx,cube_vert:yx,cube_frag:Ex,depth_vert:bx,depth_frag:Tx,distanceRGBA_vert:wx,distanceRGBA_frag:Ax,equirect_vert:Cx,equirect_frag:Rx,linedashed_vert:Px,linedashed_frag:Dx,meshbasic_vert:Lx,meshbasic_frag:Ix,meshlambert_vert:Ux,meshlambert_frag:Nx,meshmatcap_vert:Fx,meshmatcap_frag:Ox,meshnormal_vert:Bx,meshnormal_frag:zx,meshphong_vert:Vx,meshphong_frag:Hx,meshphysical_vert:kx,meshphysical_frag:Gx,meshtoon_vert:Wx,meshtoon_frag:Xx,points_vert:qx,points_frag:Yx,shadow_vert:jx,shadow_frag:$x,sprite_vert:Kx,sprite_frag:Zx},xt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Hn={basic:{uniforms:qe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:qe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:qe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:qe([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:qe([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:qe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:qe([xt.points,xt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:qe([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:qe([xt.common,xt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:qe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:qe([xt.sprite,xt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:qe([xt.common,xt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:qe([xt.lights,xt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Hn.physical={uniforms:qe([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const _o={r:0,b:0,g:0},Yi=new Xn,Jx=new ce;function Qx(n,t,e,i,s,r,o){const a=new Dt(0);let l=r===!0?0:1,c,u,h=null,d=0,m=null;function g(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?e:t).get(b)),b}function _(y){let b=!1;const M=g(y);M===null?f(a,l):M&&M.isColor&&(f(M,1),b=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(y,b){const M=g(b);M&&(M.isCubeTexture||M.mapping===va)?(u===void 0&&(u=new Ze(new Xr(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Ks(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Yi.copy(b.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(Yi)),u.material.toneMapped=Qt.getTransfer(M.colorSpace)!==ue,(h!==M||d!==M.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,m=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ze(new er(2,2),new bn({name:"BackgroundMaterial",uniforms:Ks(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(M.colorSpace)!==ue,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,m=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,b){y.getRGB(_o,jd(n)),i.buffers.color.setClear(_o.r,_o.g,_o.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),l=b,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:_,addToRenderList:p}}function tM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(S,D,O,H,Q){let st=!1;const tt=h(H,O,D);r!==tt&&(r=tt,c(r.object)),st=m(S,H,O,Q),st&&g(S,H,O,Q),Q!==null&&t.update(Q,n.ELEMENT_ARRAY_BUFFER),(st||o)&&(o=!1,M(S,D,O,H),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,D,O){const H=O.wireframe===!0;let Q=i[S.id];Q===void 0&&(Q={},i[S.id]=Q);let st=Q[D.id];st===void 0&&(st={},Q[D.id]=st);let tt=st[H];return tt===void 0&&(tt=d(l()),st[H]=tt),tt}function d(S){const D=[],O=[],H=[];for(let Q=0;Q<e;Q++)D[Q]=0,O[Q]=0,H[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:H,object:S,attributes:{},index:null}}function m(S,D,O,H){const Q=r.attributes,st=D.attributes;let tt=0;const it=O.getAttributes();for(const W in it)if(it[W].location>=0){const St=Q[W];let wt=st[W];if(wt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(wt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(wt=S.instanceColor)),St===void 0||St.attribute!==wt||wt&&St.data!==wt.data)return!0;tt++}return r.attributesNum!==tt||r.index!==H}function g(S,D,O,H){const Q={},st=D.attributes;let tt=0;const it=O.getAttributes();for(const W in it)if(it[W].location>=0){let St=st[W];St===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(St=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(St=S.instanceColor));const wt={};wt.attribute=St,St&&St.data&&(wt.data=St.data),Q[W]=wt,tt++}r.attributes=Q,r.attributesNum=tt,r.index=H}function _(){const S=r.newAttributes;for(let D=0,O=S.length;D<O;D++)S[D]=0}function p(S){f(S,0)}function f(S,D){const O=r.newAttributes,H=r.enabledAttributes,Q=r.attributeDivisors;O[S]=1,H[S]===0&&(n.enableVertexAttribArray(S),H[S]=1),Q[S]!==D&&(n.vertexAttribDivisor(S,D),Q[S]=D)}function y(){const S=r.newAttributes,D=r.enabledAttributes;for(let O=0,H=D.length;O<H;O++)D[O]!==S[O]&&(n.disableVertexAttribArray(O),D[O]=0)}function b(S,D,O,H,Q,st,tt){tt===!0?n.vertexAttribIPointer(S,D,O,Q,st):n.vertexAttribPointer(S,D,O,H,Q,st)}function M(S,D,O,H){_();const Q=H.attributes,st=O.getAttributes(),tt=D.defaultAttributeValues;for(const it in st){const W=st[it];if(W.location>=0){let gt=Q[it];if(gt===void 0&&(it==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),it==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor)),gt!==void 0){const St=gt.normalized,wt=gt.itemSize,Ot=t.get(gt);if(Ot===void 0)continue;const Jt=Ot.buffer,rt=Ot.type,ft=Ot.bytesPerElement,At=rt===n.INT||rt===n.UNSIGNED_INT||gt.gpuType===zc;if(gt.isInterleavedBufferAttribute){const _t=gt.data,Ut=_t.stride,zt=gt.offset;if(_t.isInstancedInterleavedBuffer){for(let kt=0;kt<W.locationSize;kt++)f(W.location+kt,_t.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let kt=0;kt<W.locationSize;kt++)p(W.location+kt);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let kt=0;kt<W.locationSize;kt++)b(W.location+kt,wt/W.locationSize,rt,St,Ut*ft,(zt+wt/W.locationSize*kt)*ft,At)}else{if(gt.isInstancedBufferAttribute){for(let _t=0;_t<W.locationSize;_t++)f(W.location+_t,gt.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let _t=0;_t<W.locationSize;_t++)p(W.location+_t);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let _t=0;_t<W.locationSize;_t++)b(W.location+_t,wt/W.locationSize,rt,St,wt*ft,wt/W.locationSize*_t*ft,At)}}else if(tt!==void 0){const St=tt[it];if(St!==void 0)switch(St.length){case 2:n.vertexAttrib2fv(W.location,St);break;case 3:n.vertexAttrib3fv(W.location,St);break;case 4:n.vertexAttrib4fv(W.location,St);break;default:n.vertexAttrib1fv(W.location,St)}}}}y()}function L(){N();for(const S in i){const D=i[S];for(const O in D){const H=D[O];for(const Q in H)u(H[Q].object),delete H[Q];delete D[O]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const O in D){const H=D[O];for(const Q in H)u(H[Q].object),delete H[Q];delete D[O]}delete i[S.id]}function P(S){for(const D in i){const O=i[D];if(O[S.id]===void 0)continue;const H=O[S.id];for(const Q in H)u(H[Q].object),delete H[Q];delete O[S.id]}}function N(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function eM(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];e.update(m,i,1)}function l(c,u,h,d){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function nM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Ke&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const N=P===Hr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==pi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==on&&!N)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:L,maxSamples:R}}function iM(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Ri,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||s;return s=d,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const y=r?0:i,b=y*4;let M=f.clippingState||null;l.value=M,M=u(g,d,b,m);for(let L=0;L!==b;++L)M[L]=e[L];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,M=m;b!==_;++b,M+=4)o.copy(h[b]).applyMatrix4(y,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function sM(n){let t=new WeakMap;function e(o,a){return a===Bl?o.mapping=qs:a===zl&&(o.mapping=Ys),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bl||a===zl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new m0(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class $c extends $d{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ls=4,yh=[.125,.215,.35,.446,.526,.582],Qi=20,nl=new $c,Eh=new Dt;let il=null,sl=0,rl=0,ol=!1;const Ki=(1+Math.sqrt(5))/2,Cs=1/Ki,bh=[new G(-Ki,Cs,0),new G(Ki,Cs,0),new G(-Cs,0,Ki),new G(Cs,0,Ki),new G(0,Ki,-Cs),new G(0,Ki,Cs),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Th{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(il,sl,rl),this._renderer.xr.enabled=ol,t.scissorTest=!1,vo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qs||t.mapping===Ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Hr,format:Ke,colorSpace:us,depthBuffer:!1},s=wh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rM(r)),this._blurMaterial=oM(r,t,e)}return s}_compileMaterial(t){const e=new Ze(this._lodPlanes[0],t);this._renderer.compile(e,nl)}_sceneToCubeUV(t,e,i,s){const a=new xn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Eh),u.toneMapping=Ii,u.autoClear=!1;const m=new Yc({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),g=new Ze(new Xr,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Eh),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const b=this._cubeSize;vo(s,y*b,f>2?b:0,b,b),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===qs||t.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ah());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;vo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,nl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bh[(s-r-1)%bh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ze(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Qi-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):Qi;p>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qi}`);const f=[];let y=0;for(let P=0;P<Qi;++P){const N=P/_,T=Math.exp(-N*N/2);f.push(T),P===0?y+=T:P<p&&(y+=2*T)}for(let P=0;P<f.length;P++)f[P]=f[P]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const M=this._sizeLods[s],L=3*M*(s>b-Ls?s-b+Ls:0),R=4*(this._cubeSize-M);vo(e,L,R,3*M,2*M),l.setRenderTarget(e),l.render(h,nl)}}function rM(n){const t=[],e=[],i=[];let s=n;const r=n-Ls+1+yh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ls?l=yh[o-n+Ls-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,f=1,y=new Float32Array(_*g*m),b=new Float32Array(p*g*m),M=new Float32Array(f*g*m);for(let R=0;R<m;R++){const P=R%3*2/3-1,N=R>2?0:-1,T=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];y.set(T,_*g*R),b.set(d,p*g*R);const S=[R,R,R,R,R,R];M.set(S,f*g*R)}const L=new Ne;L.setAttribute("position",new fe(y,_)),L.setAttribute("uv",new fe(b,p)),L.setAttribute("faceIndex",new fe(M,f)),t.push(L),s>Ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function wh(n,t,e){const i=new mi(n,t,e);return i.texture.mapping=va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function oM(n,t,e){const i=new Float32Array(Qi),s=new G(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Ah(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Ch(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Kc(){return`

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
	`}function aM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bl||l===zl,u=l===qs||l===Ys;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Th(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new Th(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function lM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&_r("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function cM(n,t,e,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)t.update(_[p],n.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let b=0,M=y.length;b<M;b+=3){const L=y[b+0],R=y[b+1],P=y[b+2];d.push(L,R,R,P,P,L)}}else if(g!==void 0){const y=g.array;_=g.version;for(let b=0,M=y.length/3-1;b<M;b+=3){const L=b+0,R=b+1,P=b+2;d.push(L,R,R,P,P,L)}}else return;const p=new(kd(d)?Yd:qd)(d,1);p.version=_;const f=r.get(h);f&&t.remove(f),r.set(h,p)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function uM(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){n.drawElements(i,m,r,d*o),e.update(m,i,1)}function c(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,d*o,g),e.update(m,i,g))}function u(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];e.update(p,i,1)}function h(d,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/o,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,d,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=m[y]*_[y];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function hM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function fM(n,t,e){const i=new WeakMap,s=new ve;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let L=a.attributes.position.count*M,R=1;L>t.maxTextureSize&&(R=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const P=new Float32Array(L*R*4*h),N=new Wd(P,L,R,h);N.type=on,N.needsUpdate=!0;const T=M*4;for(let D=0;D<h;D++){const O=f[D],H=y[D],Q=b[D],st=L*R*4*D;for(let tt=0;tt<O.count;tt++){const it=tt*T;g===!0&&(s.fromBufferAttribute(O,tt),P[st+it+0]=s.x,P[st+it+1]=s.y,P[st+it+2]=s.z,P[st+it+3]=0),_===!0&&(s.fromBufferAttribute(H,tt),P[st+it+4]=s.x,P[st+it+5]=s.y,P[st+it+6]=s.z,P[st+it+7]=0),p===!0&&(s.fromBufferAttribute(Q,tt),P[st+it+8]=s.x,P[st+it+9]=s.y,P[st+it+10]=s.z,P[st+it+11]=Q.itemSize===4?s.w:1)}}d={count:h,texture:N,size:new Ht(L,R)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function dM(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Jd extends Ue{constructor(t,e,i,s,r,o,a,l,c,u=Hs){if(u!==Hs&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Hs&&(i=os),i===void 0&&u===$s&&(i=js),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ee,this.minFilter=l!==void 0?l:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Qd=new Ue,Rh=new Jd(1,1),tp=new Wd,ep=new Q_,np=new Kd,Ph=[],Dh=[],Lh=new Float32Array(16),Ih=new Float32Array(9),Uh=new Float32Array(4);function nr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Ph[s];if(r===void 0&&(r=new Float32Array(s),Ph[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Pe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ma(n,t){let e=Dh[t];e===void 0&&(e=new Int32Array(t),Dh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function pM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function mM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Pe(e,t)}}function gM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Pe(e,t)}}function _M(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Pe(e,t)}}function vM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;Uh.set(i),n.uniformMatrix2fv(this.addr,!1,Uh),Pe(e,i)}}function xM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;Ih.set(i),n.uniformMatrix3fv(this.addr,!1,Ih),Pe(e,i)}}function MM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;Lh.set(i),n.uniformMatrix4fv(this.addr,!1,Lh),Pe(e,i)}}function SM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function yM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Pe(e,t)}}function EM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Pe(e,t)}}function bM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Pe(e,t)}}function TM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function wM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Pe(e,t)}}function AM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Pe(e,t)}}function CM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Pe(e,t)}}function RM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Rh.compareFunction=Hd,r=Rh):r=Qd,e.setTexture2D(t||r,s)}function PM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ep,s)}function DM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||np,s)}function LM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||tp,s)}function IM(n){switch(n){case 5126:return pM;case 35664:return mM;case 35665:return gM;case 35666:return _M;case 35674:return vM;case 35675:return xM;case 35676:return MM;case 5124:case 35670:return SM;case 35667:case 35671:return yM;case 35668:case 35672:return EM;case 35669:case 35673:return bM;case 5125:return TM;case 36294:return wM;case 36295:return AM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return LM}}function UM(n,t){n.uniform1fv(this.addr,t)}function NM(n,t){const e=nr(t,this.size,2);n.uniform2fv(this.addr,e)}function FM(n,t){const e=nr(t,this.size,3);n.uniform3fv(this.addr,e)}function OM(n,t){const e=nr(t,this.size,4);n.uniform4fv(this.addr,e)}function BM(n,t){const e=nr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function zM(n,t){const e=nr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function VM(n,t){const e=nr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function HM(n,t){n.uniform1iv(this.addr,t)}function kM(n,t){n.uniform2iv(this.addr,t)}function GM(n,t){n.uniform3iv(this.addr,t)}function WM(n,t){n.uniform4iv(this.addr,t)}function XM(n,t){n.uniform1uiv(this.addr,t)}function qM(n,t){n.uniform2uiv(this.addr,t)}function YM(n,t){n.uniform3uiv(this.addr,t)}function jM(n,t){n.uniform4uiv(this.addr,t)}function $M(n,t,e){const i=this.cache,s=t.length,r=Ma(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Qd,r[o])}function KM(n,t,e){const i=this.cache,s=t.length,r=Ma(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ep,r[o])}function ZM(n,t,e){const i=this.cache,s=t.length,r=Ma(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||np,r[o])}function JM(n,t,e){const i=this.cache,s=t.length,r=Ma(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||tp,r[o])}function QM(n){switch(n){case 5126:return UM;case 35664:return NM;case 35665:return FM;case 35666:return OM;case 35674:return BM;case 35675:return zM;case 35676:return VM;case 5124:case 35670:return HM;case 35667:case 35671:return kM;case 35668:case 35672:return GM;case 35669:case 35673:return WM;case 5125:return XM;case 36294:return qM;case 36295:return YM;case 36296:return jM;case 35678:case 36198:case 36298:case 36306:case 35682:return $M;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return JM}}class tS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=IM(e.type)}}class eS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=QM(e.type)}}class nS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const al=/(\w+)(\])?(\[|\.)?/g;function Nh(n,t){n.seq.push(t),n.map[t.id]=t}function iS(n,t,e){const i=n.name,s=i.length;for(al.lastIndex=0;;){const r=al.exec(i),o=al.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nh(e,c===void 0?new tS(a,n,t):new eS(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new nS(a),Nh(e,h)),e=h}}}class Oo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);iS(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Fh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const sS=37297;let rS=0;function oS(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Oh=new $t;function aS(n){Qt._getMatrix(Oh,Qt.workingColorSpace,n);const t=`mat3( ${Oh.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case xa:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Bh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+oS(n.getShaderSource(t),o)}else return s}function lS(n,t){const e=aS(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cS(n,t){let e;switch(t){case w_:e="Linear";break;case A_:e="Reinhard";break;case C_:e="Cineon";break;case Rd:e="ACESFilmic";break;case P_:e="AgX";break;case D_:e="Neutral";break;case R_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xo=new G;function uS(){Qt.getLuminanceCoefficients(xo);const n=xo.x.toFixed(4),t=xo.y.toFixed(4),e=xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function fS(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function dS(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function vr(n){return n!==""}function zh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pS=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(n){return n.replace(pS,gS)}const mS=new Map;function gS(n,t){let e=Kt[t];if(e===void 0){const i=mS.get(t);if(i!==void 0)e=Kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return pc(e)}const _S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(n){return n.replace(_S,vS)}function vS(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function xS(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Cd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===r_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function MS(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qs:case Ys:t="ENVMAP_TYPE_CUBE";break;case va:t="ENVMAP_TYPE_CUBE_UV";break}return t}function SS(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ys:t="ENVMAP_MODE_REFRACTION";break}return t}function yS(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bc:t="ENVMAP_BLENDING_MULTIPLY";break;case b_:t="ENVMAP_BLENDING_MIX";break;case T_:t="ENVMAP_BLENDING_ADD";break}return t}function ES(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function bS(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=xS(e),c=MS(e),u=SS(e),h=yS(e),d=ES(e),m=hS(e),g=fS(r),_=s.createProgram();let p,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vr).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vr).join(`
`),f.length>0&&(f+=`
`)):(p=[kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),f=[kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Ii?cS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,lS("linearToOutputTexel",e.outputColorSpace),uS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vr).join(`
`)),o=pc(o),o=zh(o,e),o=Vh(o,e),a=pc(a),a=zh(a,e),a=Vh(a,e),o=Hh(o),a=Hh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=y+p+o,M=y+f+a,L=Fh(s,s.VERTEX_SHADER,b),R=Fh(s,s.FRAGMENT_SHADER,M);s.attachShader(_,L),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(D){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(L).trim(),Q=s.getShaderInfoLog(R).trim();let st=!0,tt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(st=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,L,R);else{const it=Bh(s,L,"vertex"),W=Bh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+it+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(H===""||Q==="")&&(tt=!1);tt&&(D.diagnostics={runnable:st,programLog:O,vertexShader:{log:H,prefix:p},fragmentShader:{log:Q,prefix:f}})}s.deleteShader(L),s.deleteShader(R),N=new Oo(s,_),T=dS(s,_)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,sS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=R,this}let TS=0;class wS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new AS(t),e.set(t,i)),i}}class AS{constructor(t){this.id=TS++,this.code=t,this.usedTimes=0}}function CS(n,t,e,i,s,r,o){const a=new qc,l=new wS,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,S,D,O,H){const Q=O.fog,st=H.geometry,tt=T.isMeshStandardMaterial?O.environment:null,it=(T.isMeshStandardMaterial?e:t).get(T.envMap||tt),W=it&&it.mapping===va?it.image.height:null,gt=g[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const St=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,wt=St!==void 0?St.length:0;let Ot=0;st.morphAttributes.position!==void 0&&(Ot=1),st.morphAttributes.normal!==void 0&&(Ot=2),st.morphAttributes.color!==void 0&&(Ot=3);let Jt,rt,ft,At;if(gt){const ae=Hn[gt];Jt=ae.vertexShader,rt=ae.fragmentShader}else Jt=T.vertexShader,rt=T.fragmentShader,l.update(T),ft=l.getVertexShaderID(T),At=l.getFragmentShaderID(T);const _t=n.getRenderTarget(),Ut=n.state.buffers.depth.getReversed(),zt=H.isInstancedMesh===!0,kt=H.isBatchedMesh===!0,de=!!T.map,A=!!T.matcap,I=!!it,w=!!T.aoMap,at=!!T.lightMap,J=!!T.bumpMap,$=!!T.normalMap,et=!!T.displacementMap,ot=!!T.emissiveMap,q=!!T.metalnessMap,x=!!T.roughnessMap,v=T.anisotropy>0,C=T.clearcoat>0,k=T.dispersion>0,X=T.iridescence>0,Y=T.sheen>0,mt=T.transmission>0,ut=v&&!!T.anisotropyMap,dt=C&&!!T.clearcoatMap,Bt=C&&!!T.clearcoatNormalMap,ht=C&&!!T.clearcoatRoughnessMap,Mt=X&&!!T.iridescenceMap,Nt=X&&!!T.iridescenceThicknessMap,Vt=Y&&!!T.sheenColorMap,vt=Y&&!!T.sheenRoughnessMap,Gt=!!T.specularMap,Xt=!!T.specularColorMap,oe=!!T.specularIntensityMap,F=mt&&!!T.transmissionMap,yt=mt&&!!T.thicknessMap,nt=!!T.gradientMap,lt=!!T.alphaMap,Tt=T.alphaTest>0,Et=!!T.alphaHash,Yt=!!T.extensions;let ye=Ii;T.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ye=n.toneMapping);const Fe={shaderID:gt,shaderType:T.type,shaderName:T.name,vertexShader:Jt,fragmentShader:rt,defines:T.defines,customVertexShaderID:ft,customFragmentShaderID:At,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:kt,batchingColor:kt&&H._colorsTexture!==null,instancing:zt,instancingColor:zt&&H.instanceColor!==null,instancingMorph:zt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:_t===null?n.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:us,alphaToCoverage:!!T.alphaToCoverage,map:de,matcap:A,envMap:I,envMapMode:I&&it.mapping,envMapCubeUVHeight:W,aoMap:w,lightMap:at,bumpMap:J,normalMap:$,displacementMap:d&&et,emissiveMap:ot,normalMapObjectSpace:$&&T.normalMapType===N_,normalMapTangentSpace:$&&T.normalMapType===Vd,metalnessMap:q,roughnessMap:x,anisotropy:v,anisotropyMap:ut,clearcoat:C,clearcoatMap:dt,clearcoatNormalMap:Bt,clearcoatRoughnessMap:ht,dispersion:k,iridescence:X,iridescenceMap:Mt,iridescenceThicknessMap:Nt,sheen:Y,sheenColorMap:Vt,sheenRoughnessMap:vt,specularMap:Gt,specularColorMap:Xt,specularIntensityMap:oe,transmission:mt,transmissionMap:F,thicknessMap:yt,gradientMap:nt,opaque:T.transparent===!1&&T.blending===rs&&T.alphaToCoverage===!1,alphaMap:lt,alphaTest:Tt,alphaHash:Et,combine:T.combine,mapUv:de&&_(T.map.channel),aoMapUv:w&&_(T.aoMap.channel),lightMapUv:at&&_(T.lightMap.channel),bumpMapUv:J&&_(T.bumpMap.channel),normalMapUv:$&&_(T.normalMap.channel),displacementMapUv:et&&_(T.displacementMap.channel),emissiveMapUv:ot&&_(T.emissiveMap.channel),metalnessMapUv:q&&_(T.metalnessMap.channel),roughnessMapUv:x&&_(T.roughnessMap.channel),anisotropyMapUv:ut&&_(T.anisotropyMap.channel),clearcoatMapUv:dt&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(T.sheenRoughnessMap.channel),specularMapUv:Gt&&_(T.specularMap.channel),specularColorMapUv:Xt&&_(T.specularColorMap.channel),specularIntensityMapUv:oe&&_(T.specularIntensityMap.channel),transmissionMapUv:F&&_(T.transmissionMap.channel),thicknessMapUv:yt&&_(T.thicknessMap.channel),alphaMapUv:lt&&_(T.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&($||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!st.attributes.uv&&(de||lt),fog:!!Q,useFog:T.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ut,skinning:H.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Ot,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ye,decodeVideoTexture:de&&T.map.isVideoTexture===!0&&Qt.getTransfer(T.map.colorSpace)===ue,decodeVideoTextureEmissive:ot&&T.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(T.emissiveMap.colorSpace)===ue,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Pn,flipSided:T.side===Je,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Yt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&T.extensions.multiDraw===!0||kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function f(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)S.push(D),S.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(y(S,T),b(S,T),S.push(n.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function y(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function b(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function M(T){const S=g[T.type];let D;if(S){const O=Hn[S];D=h0.clone(O.uniforms)}else D=T.uniforms;return D}function L(T,S){let D;for(let O=0,H=u.length;O<H;O++){const Q=u[O];if(Q.cacheKey===S){D=Q,++D.usedTimes;break}}return D===void 0&&(D=new bS(n,S,T,r),u.push(D)),D}function R(T){if(--T.usedTimes===0){const S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function P(T){l.remove(T)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:L,releaseProgram:R,releaseShaderCache:P,programs:u,dispose:N}}function RS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function PS(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Gh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Wh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,d,m,g,_,p){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=p),t++,f}function a(h,d,m,g,_,p){const f=o(h,d,m,g,_,p);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(h,d,m,g,_,p){const f=o(h,d,m,g,_,p);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||PS),i.length>1&&i.sort(d||Gh),s.length>1&&s.sort(d||Gh)}function u(){for(let h=t,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function DS(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Wh,n.set(i,[o])):s>=r.length?(o=new Wh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function LS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new Dt};break;case"SpotLight":e={position:new G,direction:new G,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new G,halfWidth:new G,halfHeight:new G};break}return n[t.id]=e,e}}}function IS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let US=0;function NS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function FS(n){const t=new LS,e=IS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const s=new G,r=new ce,o=new ce;function a(c){let u=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,g=0,_=0,p=0,f=0,y=0,b=0,M=0,L=0,R=0,P=0;c.sort(NS);for(let T=0,S=c.length;T<S;T++){const D=c[T],O=D.color,H=D.intensity,Q=D.distance,st=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=O.r*H,h+=O.g*H,d+=O.b*H;else if(D.isLightProbe){for(let tt=0;tt<9;tt++)i.probe[tt].addScaledVector(D.sh.coefficients[tt],H);P++}else if(D.isDirectionalLight){const tt=t.get(D);if(tt.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const it=D.shadow,W=e.get(D);W.shadowIntensity=it.intensity,W.shadowBias=it.bias,W.shadowNormalBias=it.normalBias,W.shadowRadius=it.radius,W.shadowMapSize=it.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=st,i.directionalShadowMatrix[m]=D.shadow.matrix,y++}i.directional[m]=tt,m++}else if(D.isSpotLight){const tt=t.get(D);tt.position.setFromMatrixPosition(D.matrixWorld),tt.color.copy(O).multiplyScalar(H),tt.distance=Q,tt.coneCos=Math.cos(D.angle),tt.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),tt.decay=D.decay,i.spot[_]=tt;const it=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,it.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[_]=it.matrix,D.castShadow){const W=e.get(D);W.shadowIntensity=it.intensity,W.shadowBias=it.bias,W.shadowNormalBias=it.normalBias,W.shadowRadius=it.radius,W.shadowMapSize=it.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=st,M++}_++}else if(D.isRectAreaLight){const tt=t.get(D);tt.color.copy(O).multiplyScalar(H),tt.halfWidth.set(D.width*.5,0,0),tt.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=tt,p++}else if(D.isPointLight){const tt=t.get(D);if(tt.color.copy(D.color).multiplyScalar(D.intensity),tt.distance=D.distance,tt.decay=D.decay,D.castShadow){const it=D.shadow,W=e.get(D);W.shadowIntensity=it.intensity,W.shadowBias=it.bias,W.shadowNormalBias=it.normalBias,W.shadowRadius=it.radius,W.shadowMapSize=it.mapSize,W.shadowCameraNear=it.camera.near,W.shadowCameraFar=it.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=st,i.pointShadowMatrix[g]=D.shadow.matrix,b++}i.point[g]=tt,g++}else if(D.isHemisphereLight){const tt=t.get(D);tt.skyColor.copy(D.color).multiplyScalar(H),tt.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[f]=tt,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==m||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==p||N.hemiLength!==f||N.numDirectionalShadows!==y||N.numPointShadows!==b||N.numSpotShadows!==M||N.numSpotMaps!==L||N.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,N.directionalLength=m,N.pointLength=g,N.spotLength=_,N.rectAreaLength=p,N.hemiLength=f,N.numDirectionalShadows=y,N.numPointShadows=b,N.numSpotShadows=M,N.numSpotMaps=L,N.numLightProbes=P,i.version=US++)}function l(c,u){let h=0,d=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const b=c[f];if(b.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),h++}else if(b.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Xh(n){const t=new FS(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function OS(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Xh(n),t.set(s,[a])):r>=o.length?(a=new Xh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class BS extends fs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=I_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zS extends fs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const VS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kS(n,t,e){let i=new jc;const s=new Ht,r=new Ht,o=new ve,a=new BS({depthPacking:U_}),l=new zS,c={},u=e.maxTextureSize,h={[Ni]:Je,[Je]:Ni,[Pn]:Pn},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:VS,fragmentShader:HS}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ze(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cd;let f=this.type;this.render=function(R,P,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const T=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Li),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=f!==ei&&this.type===ei,Q=f===ei&&this.type!==ei;for(let st=0,tt=R.length;st<tt;st++){const it=R[st],W=it.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const gt=W.getFrameExtents();if(s.multiply(gt),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/gt.x),s.x=r.x*gt.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/gt.y),s.y=r.y*gt.y,W.mapSize.y=r.y)),W.map===null||H===!0||Q===!0){const wt=this.type!==ei?{minFilter:Ee,magFilter:Ee}:{};W.map!==null&&W.map.dispose(),W.map=new mi(s.x,s.y,wt),W.map.texture.name=it.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const St=W.getViewportCount();for(let wt=0;wt<St;wt++){const Ot=W.getViewport(wt);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),O.viewport(o),W.updateMatrices(it,wt),i=W.getFrustum(),M(P,N,W.camera,it,this.type)}W.isPointLightShadow!==!0&&this.type===ei&&y(W,N),W.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(T,S,D)};function y(R,P){const N=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new mi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,N,d,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,N,m,_,null)}function b(R,P,N,T){let S=null;const D=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)S=D;else if(S=N.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const O=S.uuid,H=P.uuid;let Q=c[O];Q===void 0&&(Q={},c[O]=Q);let st=Q[H];st===void 0&&(st=S.clone(),Q[H]=st,P.addEventListener("dispose",L)),S=st}if(S.visible=P.visible,S.wireframe=P.wireframe,T===ei?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:h[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=n.properties.get(S);O.light=N}return S}function M(R,P,N,T,S){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===ei)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const H=t.update(R),Q=R.material;if(Array.isArray(Q)){const st=H.groups;for(let tt=0,it=st.length;tt<it;tt++){const W=st[tt],gt=Q[W.materialIndex];if(gt&&gt.visible){const St=b(R,gt,T,S);R.onBeforeShadow(n,R,P,N,H,St,W),n.renderBufferDirect(N,null,H,St,R,W),R.onAfterShadow(n,R,P,N,H,St,W)}}}else if(Q.visible){const st=b(R,Q,T,S);R.onBeforeShadow(n,R,P,N,H,st,null),n.renderBufferDirect(N,null,H,st,R,null),R.onAfterShadow(n,R,P,N,H,st,null)}}const O=R.children;for(let H=0,Q=O.length;H<Q;H++)M(O[H],P,N,T,S)}function L(R){R.target.removeEventListener("dispose",L);for(const N in c){const T=c[N],S=R.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const GS={[Dl]:Ll,[Il]:Fl,[Ul]:Ol,[Xs]:Nl,[Ll]:Dl,[Fl]:Il,[Ol]:Ul,[Nl]:Xs};function WS(n,t){function e(){let F=!1;const yt=new ve;let nt=null;const lt=new ve(0,0,0,0);return{setMask:function(Tt){nt!==Tt&&!F&&(n.colorMask(Tt,Tt,Tt,Tt),nt=Tt)},setLocked:function(Tt){F=Tt},setClear:function(Tt,Et,Yt,ye,Fe){Fe===!0&&(Tt*=ye,Et*=ye,Yt*=ye),yt.set(Tt,Et,Yt,ye),lt.equals(yt)===!1&&(n.clearColor(Tt,Et,Yt,ye),lt.copy(yt))},reset:function(){F=!1,nt=null,lt.set(-1,0,0,0)}}}function i(){let F=!1,yt=!1,nt=null,lt=null,Tt=null;return{setReversed:function(Et){if(yt!==Et){const Yt=t.get("EXT_clip_control");yt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);const ye=Tt;Tt=null,this.setClear(ye)}yt=Et},getReversed:function(){return yt},setTest:function(Et){Et?_t(n.DEPTH_TEST):Ut(n.DEPTH_TEST)},setMask:function(Et){nt!==Et&&!F&&(n.depthMask(Et),nt=Et)},setFunc:function(Et){if(yt&&(Et=GS[Et]),lt!==Et){switch(Et){case Dl:n.depthFunc(n.NEVER);break;case Ll:n.depthFunc(n.ALWAYS);break;case Il:n.depthFunc(n.LESS);break;case Xs:n.depthFunc(n.LEQUAL);break;case Ul:n.depthFunc(n.EQUAL);break;case Nl:n.depthFunc(n.GEQUAL);break;case Fl:n.depthFunc(n.GREATER);break;case Ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}lt=Et}},setLocked:function(Et){F=Et},setClear:function(Et){Tt!==Et&&(yt&&(Et=1-Et),n.clearDepth(Et),Tt=Et)},reset:function(){F=!1,nt=null,lt=null,Tt=null,yt=!1}}}function s(){let F=!1,yt=null,nt=null,lt=null,Tt=null,Et=null,Yt=null,ye=null,Fe=null;return{setTest:function(ae){F||(ae?_t(n.STENCIL_TEST):Ut(n.STENCIL_TEST))},setMask:function(ae){yt!==ae&&!F&&(n.stencilMask(ae),yt=ae)},setFunc:function(ae,Tn,qn){(nt!==ae||lt!==Tn||Tt!==qn)&&(n.stencilFunc(ae,Tn,qn),nt=ae,lt=Tn,Tt=qn)},setOp:function(ae,Tn,qn){(Et!==ae||Yt!==Tn||ye!==qn)&&(n.stencilOp(ae,Tn,qn),Et=ae,Yt=Tn,ye=qn)},setLocked:function(ae){F=ae},setClear:function(ae){Fe!==ae&&(n.clearStencil(ae),Fe=ae)},reset:function(){F=!1,yt=null,nt=null,lt=null,Tt=null,Et=null,Yt=null,ye=null,Fe=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,m=[],g=null,_=!1,p=null,f=null,y=null,b=null,M=null,L=null,R=null,P=new Dt(0,0,0),N=0,T=!1,S=null,D=null,O=null,H=null,Q=null;const st=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,it=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(W)[1]),tt=it>=1):W.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),tt=it>=2);let gt=null,St={};const wt=n.getParameter(n.SCISSOR_BOX),Ot=n.getParameter(n.VIEWPORT),Jt=new ve().fromArray(wt),rt=new ve().fromArray(Ot);function ft(F,yt,nt,lt){const Tt=new Uint8Array(4),Et=n.createTexture();n.bindTexture(F,Et),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<nt;Yt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(yt,0,n.RGBA,1,1,lt,0,n.RGBA,n.UNSIGNED_BYTE,Tt):n.texImage2D(yt+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Tt);return Et}const At={};At[n.TEXTURE_2D]=ft(n.TEXTURE_2D,n.TEXTURE_2D,1),At[n.TEXTURE_CUBE_MAP]=ft(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[n.TEXTURE_2D_ARRAY]=ft(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),At[n.TEXTURE_3D]=ft(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_t(n.DEPTH_TEST),o.setFunc(Xs),J(!1),$(Ku),_t(n.CULL_FACE),w(Li);function _t(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function Ut(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function zt(F,yt){return h[F]!==yt?(n.bindFramebuffer(F,yt),h[F]=yt,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=yt),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=yt),!0):!1}function kt(F,yt){let nt=m,lt=!1;if(F){nt=d.get(yt),nt===void 0&&(nt=[],d.set(yt,nt));const Tt=F.textures;if(nt.length!==Tt.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,Yt=Tt.length;Et<Yt;Et++)nt[Et]=n.COLOR_ATTACHMENT0+Et;nt.length=Tt.length,lt=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,lt=!0);lt&&n.drawBuffers(nt)}function de(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const A={[Ji]:n.FUNC_ADD,[a_]:n.FUNC_SUBTRACT,[l_]:n.FUNC_REVERSE_SUBTRACT};A[c_]=n.MIN,A[u_]=n.MAX;const I={[h_]:n.ZERO,[f_]:n.ONE,[d_]:n.SRC_COLOR,[Rl]:n.SRC_ALPHA,[x_]:n.SRC_ALPHA_SATURATE,[__]:n.DST_COLOR,[m_]:n.DST_ALPHA,[p_]:n.ONE_MINUS_SRC_COLOR,[Pl]:n.ONE_MINUS_SRC_ALPHA,[v_]:n.ONE_MINUS_DST_COLOR,[g_]:n.ONE_MINUS_DST_ALPHA,[M_]:n.CONSTANT_COLOR,[S_]:n.ONE_MINUS_CONSTANT_COLOR,[y_]:n.CONSTANT_ALPHA,[E_]:n.ONE_MINUS_CONSTANT_ALPHA};function w(F,yt,nt,lt,Tt,Et,Yt,ye,Fe,ae){if(F===Li){_===!0&&(Ut(n.BLEND),_=!1);return}if(_===!1&&(_t(n.BLEND),_=!0),F!==o_){if(F!==p||ae!==T){if((f!==Ji||M!==Ji)&&(n.blendEquation(n.FUNC_ADD),f=Ji,M=Ji),ae)switch(F){case rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cl:n.blendFunc(n.ONE,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ju:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ju:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,b=null,L=null,R=null,P.set(0,0,0),N=0,p=F,T=ae}return}Tt=Tt||yt,Et=Et||nt,Yt=Yt||lt,(yt!==f||Tt!==M)&&(n.blendEquationSeparate(A[yt],A[Tt]),f=yt,M=Tt),(nt!==y||lt!==b||Et!==L||Yt!==R)&&(n.blendFuncSeparate(I[nt],I[lt],I[Et],I[Yt]),y=nt,b=lt,L=Et,R=Yt),(ye.equals(P)===!1||Fe!==N)&&(n.blendColor(ye.r,ye.g,ye.b,Fe),P.copy(ye),N=Fe),p=F,T=!1}function at(F,yt){F.side===Pn?Ut(n.CULL_FACE):_t(n.CULL_FACE);let nt=F.side===Je;yt&&(nt=!nt),J(nt),F.blending===rs&&F.transparent===!1?w(Li):w(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const lt=F.stencilWrite;a.setTest(lt),lt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ot(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?_t(n.SAMPLE_ALPHA_TO_COVERAGE):Ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(F){S!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),S=F)}function $(F){F!==i_?(_t(n.CULL_FACE),F!==D&&(F===Ku?n.cullFace(n.BACK):F===s_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ut(n.CULL_FACE),D=F}function et(F){F!==O&&(tt&&n.lineWidth(F),O=F)}function ot(F,yt,nt){F?(_t(n.POLYGON_OFFSET_FILL),(H!==yt||Q!==nt)&&(n.polygonOffset(yt,nt),H=yt,Q=nt)):Ut(n.POLYGON_OFFSET_FILL)}function q(F){F?_t(n.SCISSOR_TEST):Ut(n.SCISSOR_TEST)}function x(F){F===void 0&&(F=n.TEXTURE0+st-1),gt!==F&&(n.activeTexture(F),gt=F)}function v(F,yt,nt){nt===void 0&&(gt===null?nt=n.TEXTURE0+st-1:nt=gt);let lt=St[nt];lt===void 0&&(lt={type:void 0,texture:void 0},St[nt]=lt),(lt.type!==F||lt.texture!==yt)&&(gt!==nt&&(n.activeTexture(nt),gt=nt),n.bindTexture(F,yt||At[F]),lt.type=F,lt.texture=yt)}function C(){const F=St[gt];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function k(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Bt(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Vt(F){Jt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Jt.copy(F))}function vt(F){rt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),rt.copy(F))}function Gt(F,yt){let nt=c.get(yt);nt===void 0&&(nt=new WeakMap,c.set(yt,nt));let lt=nt.get(F);lt===void 0&&(lt=n.getUniformBlockIndex(yt,F.name),nt.set(F,lt))}function Xt(F,yt){const lt=c.get(yt).get(F);l.get(yt)!==lt&&(n.uniformBlockBinding(yt,lt,F.__bindingPointIndex),l.set(yt,lt))}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},gt=null,St={},h={},d=new WeakMap,m=[],g=null,_=!1,p=null,f=null,y=null,b=null,M=null,L=null,R=null,P=new Dt(0,0,0),N=0,T=!1,S=null,D=null,O=null,H=null,Q=null,Jt.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_t,disable:Ut,bindFramebuffer:zt,drawBuffers:kt,useProgram:de,setBlending:w,setMaterial:at,setFlipSided:J,setCullFace:$,setLineWidth:et,setPolygonOffset:ot,setScissorTest:q,activeTexture:x,bindTexture:v,unbindTexture:C,compressedTexImage2D:k,compressedTexImage3D:X,texImage2D:Mt,texImage3D:Nt,updateUBOMapping:Gt,uniformBlockBinding:Xt,texStorage2D:Bt,texStorage3D:ht,texSubImage2D:Y,texSubImage3D:mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:dt,scissor:Vt,viewport:vt,reset:oe}}function qh(n,t,e,i){const s=XS(i);switch(e){case Ud:return n*t;case Fd:return n*t;case Od:return n*t*2;case kc:return n*t/s.components*s.byteLength;case Gc:return n*t/s.components*s.byteLength;case Bd:return n*t*2/s.components*s.byteLength;case Wc:return n*t*2/s.components*s.byteLength;case Nd:return n*t*3/s.components*s.byteLength;case Ke:return n*t*4/s.components*s.byteLength;case Xc:return n*t*4/s.components*s.byteLength;case Do:case Lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Io:case Uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case kl:case Wl:return Math.max(n,16)*Math.max(t,8)/4;case Hl:case Gl:return Math.max(n,8)*Math.max(t,8)/2;case Xl:case ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case jl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case tc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ec:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ic:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case sc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case rc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case oc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case No:case lc:case cc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case zd:case uc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case hc:case fc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function XS(n){switch(n){case pi:case Dd:return{byteLength:1,components:1};case Or:case Ld:case Hr:return{byteLength:2,components:1};case Vc:case Hc:return{byteLength:2,components:4};case os:case zc:case on:return{byteLength:4,components:1};case Id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function qS(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ht,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,v){return m?new OffscreenCanvas(x,v):ta("canvas")}function _(x,v,C){let k=1;const X=q(x);if((X.width>C||X.height>C)&&(k=C/Math.max(X.width,X.height)),k<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const Y=Math.floor(k*X.width),mt=Math.floor(k*X.height);h===void 0&&(h=g(Y,mt));const ut=v?g(Y,mt):h;return ut.width=Y,ut.height=mt,ut.getContext("2d").drawImage(x,0,0,Y,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+Y+"x"+mt+")."),ut}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),x;return x}function p(x){return x.generateMipmaps}function f(x){n.generateMipmap(x)}function y(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(x,v,C,k,X=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let Y=v;if(v===n.RED&&(C===n.FLOAT&&(Y=n.R32F),C===n.HALF_FLOAT&&(Y=n.R16F),C===n.UNSIGNED_BYTE&&(Y=n.R8)),v===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(Y=n.R8UI),C===n.UNSIGNED_SHORT&&(Y=n.R16UI),C===n.UNSIGNED_INT&&(Y=n.R32UI),C===n.BYTE&&(Y=n.R8I),C===n.SHORT&&(Y=n.R16I),C===n.INT&&(Y=n.R32I)),v===n.RG&&(C===n.FLOAT&&(Y=n.RG32F),C===n.HALF_FLOAT&&(Y=n.RG16F),C===n.UNSIGNED_BYTE&&(Y=n.RG8)),v===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(Y=n.RG8UI),C===n.UNSIGNED_SHORT&&(Y=n.RG16UI),C===n.UNSIGNED_INT&&(Y=n.RG32UI),C===n.BYTE&&(Y=n.RG8I),C===n.SHORT&&(Y=n.RG16I),C===n.INT&&(Y=n.RG32I)),v===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),C===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),C===n.UNSIGNED_INT&&(Y=n.RGB32UI),C===n.BYTE&&(Y=n.RGB8I),C===n.SHORT&&(Y=n.RGB16I),C===n.INT&&(Y=n.RGB32I)),v===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),C===n.UNSIGNED_INT&&(Y=n.RGBA32UI),C===n.BYTE&&(Y=n.RGBA8I),C===n.SHORT&&(Y=n.RGBA16I),C===n.INT&&(Y=n.RGBA32I)),v===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),v===n.RGBA){const mt=X?xa:Qt.getTransfer(k);C===n.FLOAT&&(Y=n.RGBA32F),C===n.HALF_FLOAT&&(Y=n.RGBA16F),C===n.UNSIGNED_BYTE&&(Y=mt===ue?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(x,v){let C;return x?v===null||v===os||v===js?C=n.DEPTH24_STENCIL8:v===on?C=n.DEPTH32F_STENCIL8:v===Or&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===os||v===js?C=n.DEPTH_COMPONENT24:v===on?C=n.DEPTH_COMPONENT32F:v===Or&&(C=n.DEPTH_COMPONENT16),C}function L(x,v){return p(x)===!0||x.isFramebufferTexture&&x.minFilter!==Ee&&x.minFilter!==Sn?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function R(x){const v=x.target;v.removeEventListener("dispose",R),N(v),v.isVideoTexture&&u.delete(v)}function P(x){const v=x.target;v.removeEventListener("dispose",P),S(v)}function N(x){const v=i.get(x);if(v.__webglInit===void 0)return;const C=x.source,k=d.get(C);if(k){const X=k[v.__cacheKey];X.usedTimes--,X.usedTimes===0&&T(x),Object.keys(k).length===0&&d.delete(C)}i.remove(x)}function T(x){const v=i.get(x);n.deleteTexture(v.__webglTexture);const C=x.source,k=d.get(C);delete k[v.__cacheKey],o.memory.textures--}function S(x){const v=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(v.__webglFramebuffer[k]))for(let X=0;X<v.__webglFramebuffer[k].length;X++)n.deleteFramebuffer(v.__webglFramebuffer[k][X]);else n.deleteFramebuffer(v.__webglFramebuffer[k]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[k])}else{if(Array.isArray(v.__webglFramebuffer))for(let k=0;k<v.__webglFramebuffer.length;k++)n.deleteFramebuffer(v.__webglFramebuffer[k]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let k=0;k<v.__webglColorRenderbuffer.length;k++)v.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[k]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const C=x.textures;for(let k=0,X=C.length;k<X;k++){const Y=i.get(C[k]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(C[k])}i.remove(x)}let D=0;function O(){D=0}function H(){const x=D;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),D+=1,x}function Q(x){const v=[];return v.push(x.wrapS),v.push(x.wrapT),v.push(x.wrapR||0),v.push(x.magFilter),v.push(x.minFilter),v.push(x.anisotropy),v.push(x.internalFormat),v.push(x.format),v.push(x.type),v.push(x.generateMipmaps),v.push(x.premultiplyAlpha),v.push(x.flipY),v.push(x.unpackAlignment),v.push(x.colorSpace),v.join()}function st(x,v){const C=i.get(x);if(x.isVideoTexture&&et(x),x.isRenderTargetTexture===!1&&x.version>0&&C.__version!==x.version){const k=x.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(C,x,v);return}}e.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+v)}function tt(x,v){const C=i.get(x);if(x.version>0&&C.__version!==x.version){rt(C,x,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+v)}function it(x,v){const C=i.get(x);if(x.version>0&&C.__version!==x.version){rt(C,x,v);return}e.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+v)}function W(x,v){const C=i.get(x);if(x.version>0&&C.__version!==x.version){ft(C,x,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+v)}const gt={[Jo]:n.REPEAT,[ts]:n.CLAMP_TO_EDGE,[Vl]:n.MIRRORED_REPEAT},St={[Ee]:n.NEAREST,[L_]:n.NEAREST_MIPMAP_NEAREST,[Jr]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Ua]:n.LINEAR_MIPMAP_NEAREST,[es]:n.LINEAR_MIPMAP_LINEAR},wt={[F_]:n.NEVER,[k_]:n.ALWAYS,[O_]:n.LESS,[Hd]:n.LEQUAL,[B_]:n.EQUAL,[H_]:n.GEQUAL,[z_]:n.GREATER,[V_]:n.NOTEQUAL};function Ot(x,v){if(v.type===on&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Sn||v.magFilter===Ua||v.magFilter===Jr||v.magFilter===es||v.minFilter===Sn||v.minFilter===Ua||v.minFilter===Jr||v.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,gt[v.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,gt[v.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,gt[v.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,St[v.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,St[v.minFilter]),v.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,wt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ee||v.minFilter!==Jr&&v.minFilter!==es||v.type===on&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");n.texParameterf(x,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Jt(x,v){let C=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",R));const k=v.source;let X=d.get(k);X===void 0&&(X={},d.set(k,X));const Y=Q(v);if(Y!==x.__cacheKey){X[Y]===void 0&&(X[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,C=!0),X[Y].usedTimes++;const mt=X[x.__cacheKey];mt!==void 0&&(X[x.__cacheKey].usedTimes--,mt.usedTimes===0&&T(v)),x.__cacheKey=Y,x.__webglTexture=X[Y].texture}return C}function rt(x,v,C){let k=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(k=n.TEXTURE_3D);const X=Jt(x,v),Y=v.source;e.bindTexture(k,x.__webglTexture,n.TEXTURE0+C);const mt=i.get(Y);if(Y.version!==mt.__version||X===!0){e.activeTexture(n.TEXTURE0+C);const ut=Qt.getPrimaries(Qt.workingColorSpace),dt=v.colorSpace===Di?null:Qt.getPrimaries(v.colorSpace),Bt=v.colorSpace===Di||ut===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let ht=_(v.image,!1,s.maxTextureSize);ht=ot(v,ht);const Mt=r.convert(v.format,v.colorSpace),Nt=r.convert(v.type);let Vt=b(v.internalFormat,Mt,Nt,v.colorSpace,v.isVideoTexture);Ot(k,v);let vt;const Gt=v.mipmaps,Xt=v.isVideoTexture!==!0,oe=mt.__version===void 0||X===!0,F=Y.dataReady,yt=L(v,ht);if(v.isDepthTexture)Vt=M(v.format===$s,v.type),oe&&(Xt?e.texStorage2D(n.TEXTURE_2D,1,Vt,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,Vt,ht.width,ht.height,0,Mt,Nt,null));else if(v.isDataTexture)if(Gt.length>0){Xt&&oe&&e.texStorage2D(n.TEXTURE_2D,yt,Vt,Gt[0].width,Gt[0].height);for(let nt=0,lt=Gt.length;nt<lt;nt++)vt=Gt[nt],Xt?F&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,vt.width,vt.height,Mt,Nt,vt.data):e.texImage2D(n.TEXTURE_2D,nt,Vt,vt.width,vt.height,0,Mt,Nt,vt.data);v.generateMipmaps=!1}else Xt?(oe&&e.texStorage2D(n.TEXTURE_2D,yt,Vt,ht.width,ht.height),F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht.width,ht.height,Mt,Nt,ht.data)):e.texImage2D(n.TEXTURE_2D,0,Vt,ht.width,ht.height,0,Mt,Nt,ht.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xt&&oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,Vt,Gt[0].width,Gt[0].height,ht.depth);for(let nt=0,lt=Gt.length;nt<lt;nt++)if(vt=Gt[nt],v.format!==Ke)if(Mt!==null)if(Xt){if(F)if(v.layerUpdates.size>0){const Tt=qh(vt.width,vt.height,v.format,v.type);for(const Et of v.layerUpdates){const Yt=vt.data.subarray(Et*Tt/vt.data.BYTES_PER_ELEMENT,(Et+1)*Tt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,Et,vt.width,vt.height,1,Mt,Yt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,vt.width,vt.height,ht.depth,Mt,vt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,Vt,vt.width,vt.height,ht.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,vt.width,vt.height,ht.depth,Mt,Nt,vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,Vt,vt.width,vt.height,ht.depth,0,Mt,Nt,vt.data)}else{Xt&&oe&&e.texStorage2D(n.TEXTURE_2D,yt,Vt,Gt[0].width,Gt[0].height);for(let nt=0,lt=Gt.length;nt<lt;nt++)vt=Gt[nt],v.format!==Ke?Mt!==null?Xt?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,vt.width,vt.height,Mt,vt.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,Vt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?F&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,vt.width,vt.height,Mt,Nt,vt.data):e.texImage2D(n.TEXTURE_2D,nt,Vt,vt.width,vt.height,0,Mt,Nt,vt.data)}else if(v.isDataArrayTexture)if(Xt){if(oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,Vt,ht.width,ht.height,ht.depth),F)if(v.layerUpdates.size>0){const nt=qh(ht.width,ht.height,v.format,v.type);for(const lt of v.layerUpdates){const Tt=ht.data.subarray(lt*nt/ht.data.BYTES_PER_ELEMENT,(lt+1)*nt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,lt,ht.width,ht.height,1,Mt,Nt,Tt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Mt,Nt,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Vt,ht.width,ht.height,ht.depth,0,Mt,Nt,ht.data);else if(v.isData3DTexture)Xt?(oe&&e.texStorage3D(n.TEXTURE_3D,yt,Vt,ht.width,ht.height,ht.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Mt,Nt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,Vt,ht.width,ht.height,ht.depth,0,Mt,Nt,ht.data);else if(v.isFramebufferTexture){if(oe)if(Xt)e.texStorage2D(n.TEXTURE_2D,yt,Vt,ht.width,ht.height);else{let nt=ht.width,lt=ht.height;for(let Tt=0;Tt<yt;Tt++)e.texImage2D(n.TEXTURE_2D,Tt,Vt,nt,lt,0,Mt,Nt,null),nt>>=1,lt>>=1}}else if(Gt.length>0){if(Xt&&oe){const nt=q(Gt[0]);e.texStorage2D(n.TEXTURE_2D,yt,Vt,nt.width,nt.height)}for(let nt=0,lt=Gt.length;nt<lt;nt++)vt=Gt[nt],Xt?F&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,Mt,Nt,vt):e.texImage2D(n.TEXTURE_2D,nt,Vt,Mt,Nt,vt);v.generateMipmaps=!1}else if(Xt){if(oe){const nt=q(ht);e.texStorage2D(n.TEXTURE_2D,yt,Vt,nt.width,nt.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,Nt,ht)}else e.texImage2D(n.TEXTURE_2D,0,Vt,Mt,Nt,ht);p(v)&&f(k),mt.__version=Y.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function ft(x,v,C){if(v.image.length!==6)return;const k=Jt(x,v),X=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+C);const Y=i.get(X);if(X.version!==Y.__version||k===!0){e.activeTexture(n.TEXTURE0+C);const mt=Qt.getPrimaries(Qt.workingColorSpace),ut=v.colorSpace===Di?null:Qt.getPrimaries(v.colorSpace),dt=v.colorSpace===Di||mt===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Bt=v.isCompressedTexture||v.image[0].isCompressedTexture,ht=v.image[0]&&v.image[0].isDataTexture,Mt=[];for(let lt=0;lt<6;lt++)!Bt&&!ht?Mt[lt]=_(v.image[lt],!0,s.maxCubemapSize):Mt[lt]=ht?v.image[lt].image:v.image[lt],Mt[lt]=ot(v,Mt[lt]);const Nt=Mt[0],Vt=r.convert(v.format,v.colorSpace),vt=r.convert(v.type),Gt=b(v.internalFormat,Vt,vt,v.colorSpace),Xt=v.isVideoTexture!==!0,oe=Y.__version===void 0||k===!0,F=X.dataReady;let yt=L(v,Nt);Ot(n.TEXTURE_CUBE_MAP,v);let nt;if(Bt){Xt&&oe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,Gt,Nt.width,Nt.height);for(let lt=0;lt<6;lt++){nt=Mt[lt].mipmaps;for(let Tt=0;Tt<nt.length;Tt++){const Et=nt[Tt];v.format!==Ke?Vt!==null?Xt?F&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt,0,0,Et.width,Et.height,Vt,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt,Gt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt,0,0,Et.width,Et.height,Vt,vt,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt,Gt,Et.width,Et.height,0,Vt,vt,Et.data)}}}else{if(nt=v.mipmaps,Xt&&oe){nt.length>0&&yt++;const lt=q(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,Gt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ht){Xt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Mt[lt].width,Mt[lt].height,Vt,vt,Mt[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Gt,Mt[lt].width,Mt[lt].height,0,Vt,vt,Mt[lt].data);for(let Tt=0;Tt<nt.length;Tt++){const Yt=nt[Tt].image[lt].image;Xt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt+1,0,0,Yt.width,Yt.height,Vt,vt,Yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt+1,Gt,Yt.width,Yt.height,0,Vt,vt,Yt.data)}}else{Xt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Vt,vt,Mt[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Gt,Vt,vt,Mt[lt]);for(let Tt=0;Tt<nt.length;Tt++){const Et=nt[Tt];Xt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt+1,0,0,Vt,vt,Et.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Tt+1,Gt,Vt,vt,Et.image[lt])}}}p(v)&&f(n.TEXTURE_CUBE_MAP),Y.__version=X.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function At(x,v,C,k,X,Y){const mt=r.convert(C.format,C.colorSpace),ut=r.convert(C.type),dt=b(C.internalFormat,mt,ut,C.colorSpace),Bt=i.get(v),ht=i.get(C);if(ht.__renderTarget=v,!Bt.__hasExternalTextures){const Mt=Math.max(1,v.width>>Y),Nt=Math.max(1,v.height>>Y);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?e.texImage3D(X,Y,dt,Mt,Nt,v.depth,0,mt,ut,null):e.texImage2D(X,Y,dt,Mt,Nt,0,mt,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,x),$(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,X,ht.__webglTexture,0,J(v)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,X,ht.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(x,v,C){if(n.bindRenderbuffer(n.RENDERBUFFER,x),v.depthBuffer){const k=v.depthTexture,X=k&&k.isDepthTexture?k.type:null,Y=M(v.stencilBuffer,X),mt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=J(v);$(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,Y,v.width,v.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,Y,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Y,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,x)}else{const k=v.textures;for(let X=0;X<k.length;X++){const Y=k[X],mt=r.convert(Y.format,Y.colorSpace),ut=r.convert(Y.type),dt=b(Y.internalFormat,mt,ut,Y.colorSpace),Bt=J(v);C&&$(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,dt,v.width,v.height):$(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt,dt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,dt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ut(x,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,x),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(v.depthTexture);k.__renderTarget=v,(!k.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),st(v.depthTexture,0);const X=k.__webglTexture,Y=J(v);if(v.depthTexture.format===Hs)$(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else if(v.depthTexture.format===$s)$(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function zt(x){const v=i.get(x),C=x.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==x.depthTexture){const k=x.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),k){const X=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,k.removeEventListener("dispose",X)};k.addEventListener("dispose",X),v.__depthDisposeCallback=X}v.__boundDepthTexture=k}if(x.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");Ut(v.__webglFramebuffer,x)}else if(C){v.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[k]),v.__webglDepthbuffer[k]===void 0)v.__webglDepthbuffer[k]=n.createRenderbuffer(),_t(v.__webglDepthbuffer[k],x,!1);else{const X=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),_t(v.__webglDepthbuffer,x,!1);else{const k=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,X)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(x,v,C){const k=i.get(x);v!==void 0&&At(k.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&zt(x)}function de(x){const v=x.texture,C=i.get(x),k=i.get(v);x.addEventListener("dispose",P);const X=x.textures,Y=x.isWebGLCubeRenderTarget===!0,mt=X.length>1;if(mt||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=v.version,o.memory.textures++),Y){C.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[ut]=[];for(let dt=0;dt<v.mipmaps.length;dt++)C.__webglFramebuffer[ut][dt]=n.createFramebuffer()}else C.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)C.__webglFramebuffer[ut]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(mt)for(let ut=0,dt=X.length;ut<dt;ut++){const Bt=i.get(X[ut]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&$(x)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let ut=0;ut<X.length;ut++){const dt=X[ut];C.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[ut]);const Bt=r.convert(dt.format,dt.colorSpace),ht=r.convert(dt.type),Mt=b(dt.internalFormat,Bt,ht,dt.colorSpace,x.isXRRenderTarget===!0),Nt=J(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,Mt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,C.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),_t(C.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Ot(n.TEXTURE_CUBE_MAP,v);for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)At(C.__webglFramebuffer[ut][dt],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,dt);else At(C.__webglFramebuffer[ut],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);p(v)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let ut=0,dt=X.length;ut<dt;ut++){const Bt=X[ut],ht=i.get(Bt);e.bindTexture(n.TEXTURE_2D,ht.__webglTexture),Ot(n.TEXTURE_2D,Bt),At(C.__webglFramebuffer,x,Bt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),p(Bt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ut=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,k.__webglTexture),Ot(ut,v),v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)At(C.__webglFramebuffer[dt],x,v,n.COLOR_ATTACHMENT0,ut,dt);else At(C.__webglFramebuffer,x,v,n.COLOR_ATTACHMENT0,ut,0);p(v)&&f(ut),e.unbindTexture()}x.depthBuffer&&zt(x)}function A(x){const v=x.textures;for(let C=0,k=v.length;C<k;C++){const X=v[C];if(p(X)){const Y=y(x),mt=i.get(X).__webglTexture;e.bindTexture(Y,mt),f(Y),e.unbindTexture()}}}const I=[],w=[];function at(x){if(x.samples>0){if($(x)===!1){const v=x.textures,C=x.width,k=x.height;let X=n.COLOR_BUFFER_BIT;const Y=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(x),ut=v.length>1;if(ut)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[dt]);const Bt=i.get(v[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Bt,0)}n.blitFramebuffer(0,0,C,k,0,0,C,k,X,n.NEAREST),l===!0&&(I.length=0,w.length=0,I.push(n.COLOR_ATTACHMENT0+dt),x.depthBuffer&&x.resolveDepthBuffer===!1&&(I.push(Y),w.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,w)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,I))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,mt.__webglColorRenderbuffer[dt]);const Bt=i.get(v[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,Bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const v=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function J(x){return Math.min(s.maxSamples,x.samples)}function $(x){const v=i.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function et(x){const v=o.render.frame;u.get(x)!==v&&(u.set(x,v),x.update())}function ot(x,v){const C=x.colorSpace,k=x.format,X=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||C!==us&&C!==Di&&(Qt.getTransfer(C)===ue?(k!==Ke||X!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function q(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=st,this.setTexture2DArray=tt,this.setTexture3D=it,this.setTextureCube=W,this.rebindTextures=kt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=$}function YS(n,t){function e(i,s=Di){let r;const o=Qt.getTransfer(s);if(i===pi)return n.UNSIGNED_BYTE;if(i===Vc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Id)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Dd)return n.BYTE;if(i===Ld)return n.SHORT;if(i===Or)return n.UNSIGNED_SHORT;if(i===zc)return n.INT;if(i===os)return n.UNSIGNED_INT;if(i===on)return n.FLOAT;if(i===Hr)return n.HALF_FLOAT;if(i===Ud)return n.ALPHA;if(i===Nd)return n.RGB;if(i===Ke)return n.RGBA;if(i===Fd)return n.LUMINANCE;if(i===Od)return n.LUMINANCE_ALPHA;if(i===Hs)return n.DEPTH_COMPONENT;if(i===$s)return n.DEPTH_STENCIL;if(i===kc)return n.RED;if(i===Gc)return n.RED_INTEGER;if(i===Bd)return n.RG;if(i===Wc)return n.RG_INTEGER;if(i===Xc)return n.RGBA_INTEGER;if(i===Do||i===Lo||i===Io||i===Uo)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Do)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Do)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hl||i===kl||i===Gl||i===Wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xl||i===ql||i===Yl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xl||i===ql)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Yl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===jl||i===$l||i===Kl||i===Zl||i===Jl||i===Ql||i===tc||i===ec||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===jl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$l)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ql)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ec)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ic)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oc)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ac)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===No||i===lc||i===cc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===No)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zd||i===uc||i===hc||i===fc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===No)return r.COMPRESSED_RED_RGTC1_EXT;if(i===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===js?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class jS extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ns extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $S={type:"move"};class ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($S)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ns;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const KS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZS=`
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

}`;class JS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ue,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new bn({vertexShader:KS,fragmentShader:ZS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ze(new er(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QS extends hs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,g=null;const _=new JS,p=e.getContextAttributes();let f=null,y=null;const b=[],M=[],L=new Ht;let R=null;const P=new xn;P.viewport=new ve;const N=new xn;N.viewport=new ve;const T=[P,N],S=new jS;let D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let ft=b[rt];return ft===void 0&&(ft=new ll,b[rt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(rt){let ft=b[rt];return ft===void 0&&(ft=new ll,b[rt]=ft),ft.getGripSpace()},this.getHand=function(rt){let ft=b[rt];return ft===void 0&&(ft=new ll,b[rt]=ft),ft.getHandSpace()};function H(rt){const ft=M.indexOf(rt.inputSource);if(ft===-1)return;const At=b[ft];At!==void 0&&(At.update(rt.inputSource,rt.frame,c||o),At.dispatchEvent({type:rt.type,data:rt.inputSource}))}function Q(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",st);for(let rt=0;rt<b.length;rt++){const ft=M[rt];ft!==null&&(M[rt]=null,b[rt].disconnect(ft))}D=null,O=null,_.reset(),t.setRenderTarget(f),m=null,d=null,h=null,s=null,y=null,Jt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){r=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(rt){c=rt},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",st),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const ft={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new mi(m.framebufferWidth,m.framebufferHeight,{format:Ke,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ft=null,At=null,_t=null;p.depth&&(_t=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=p.stencil?$s:Hs,At=p.stencil?js:os);const Ut={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new mi(d.textureWidth,d.textureHeight,{format:Ke,type:pi,depthTexture:new Jd(d.textureWidth,d.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Jt.setContext(s),Jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function st(rt){for(let ft=0;ft<rt.removed.length;ft++){const At=rt.removed[ft],_t=M.indexOf(At);_t>=0&&(M[_t]=null,b[_t].disconnect(At))}for(let ft=0;ft<rt.added.length;ft++){const At=rt.added[ft];let _t=M.indexOf(At);if(_t===-1){for(let zt=0;zt<b.length;zt++)if(zt>=M.length){M.push(At),_t=zt;break}else if(M[zt]===null){M[zt]=At,_t=zt;break}if(_t===-1)break}const Ut=b[_t];Ut&&Ut.connect(At)}}const tt=new G,it=new G;function W(rt,ft,At){tt.setFromMatrixPosition(ft.matrixWorld),it.setFromMatrixPosition(At.matrixWorld);const _t=tt.distanceTo(it),Ut=ft.projectionMatrix.elements,zt=At.projectionMatrix.elements,kt=Ut[14]/(Ut[10]-1),de=Ut[14]/(Ut[10]+1),A=(Ut[9]+1)/Ut[5],I=(Ut[9]-1)/Ut[5],w=(Ut[8]-1)/Ut[0],at=(zt[8]+1)/zt[0],J=kt*w,$=kt*at,et=_t/(-w+at),ot=et*-w;if(ft.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(ot),rt.translateZ(et),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),Ut[10]===-1)rt.projectionMatrix.copy(ft.projectionMatrix),rt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const q=kt+et,x=de+et,v=J-ot,C=$+(_t-ot),k=A*de/x*q,X=I*de/x*q;rt.projectionMatrix.makePerspective(v,C,k,X,q,x),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function gt(rt,ft){ft===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(ft.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;let ft=rt.near,At=rt.far;_.texture!==null&&(_.depthNear>0&&(ft=_.depthNear),_.depthFar>0&&(At=_.depthFar)),S.near=N.near=P.near=ft,S.far=N.far=P.far=At,(D!==S.near||O!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,O=S.far),P.layers.mask=rt.layers.mask|2,N.layers.mask=rt.layers.mask|4,S.layers.mask=P.layers.mask|N.layers.mask;const _t=rt.parent,Ut=S.cameras;gt(S,_t);for(let zt=0;zt<Ut.length;zt++)gt(Ut[zt],_t);Ut.length===2?W(S,P,N):S.projectionMatrix.copy(P.projectionMatrix),St(rt,S,_t)};function St(rt,ft,At){At===null?rt.matrix.copy(ft.matrixWorld):(rt.matrix.copy(At.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(ft.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(ft.projectionMatrix),rt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=dc*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(rt){l=rt,d!==null&&(d.fixedFoveation=rt),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=rt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let wt=null;function Ot(rt,ft){if(u=ft.getViewerPose(c||o),g=ft,u!==null){const At=u.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let _t=!1;At.length!==S.cameras.length&&(S.cameras.length=0,_t=!0);for(let zt=0;zt<At.length;zt++){const kt=At[zt];let de=null;if(m!==null)de=m.getViewport(kt);else{const I=h.getViewSubImage(d,kt);de=I.viewport,zt===0&&(t.setRenderTargetTextures(y,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(y))}let A=T[zt];A===void 0&&(A=new xn,A.layers.enable(zt),A.viewport=new ve,T[zt]=A),A.matrix.fromArray(kt.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(kt.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(de.x,de.y,de.width,de.height),zt===0&&(S.matrix.copy(A.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_t===!0&&S.cameras.push(A)}const Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const zt=h.getDepthInformation(At[0]);zt&&zt.isValid&&zt.texture&&_.init(t,zt,s.renderState)}}for(let At=0;At<b.length;At++){const _t=M[At],Ut=b[At];_t!==null&&Ut!==void 0&&Ut.update(_t,ft,c||o)}wt&&wt(rt,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),g=null}const Jt=new Zd;Jt.setAnimationLoop(Ot),this.setAnimationLoop=function(rt){wt=rt},this.dispose=function(){}}}const ji=new Xn,ty=new ce;function ey(n,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,jd(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,y,b,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,y,b):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Je&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Je&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const y=t.get(f),b=y.envMap,M=y.envMapRotation;b&&(p.envMap.value=b,ji.copy(M),ji.x*=-1,ji.y*=-1,ji.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),p.envMapRotation.value.setFromMatrix4(ty.makeRotationFromEuler(ji)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,y,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*y,p.scale.value=b*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,y){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Je&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const y=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ny(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){const M=b.program;i.uniformBlockBinding(y,M)}function c(y,b){let M=s[y.id];M===void 0&&(g(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",p));const L=b.program;i.updateUBOMapping(y,L);const R=t.render.frame;r[y.id]!==R&&(d(y),r[y.id]=R)}function u(y){const b=h();y.__bindingPointIndex=b;const M=n.createBuffer(),L=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,L,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const b=s[y.id],M=y.uniforms,L=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,P=M.length;R<P;R++){const N=Array.isArray(M[R])?M[R]:[M[R]];for(let T=0,S=N.length;T<S;T++){const D=N[T];if(m(D,R,T,L)===!0){const O=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let Q=0;for(let st=0;st<H.length;st++){const tt=H[st],it=_(tt);typeof tt=="number"||typeof tt=="boolean"?(D.__data[0]=tt,n.bufferSubData(n.UNIFORM_BUFFER,O+Q,D.__data)):tt.isMatrix3?(D.__data[0]=tt.elements[0],D.__data[1]=tt.elements[1],D.__data[2]=tt.elements[2],D.__data[3]=0,D.__data[4]=tt.elements[3],D.__data[5]=tt.elements[4],D.__data[6]=tt.elements[5],D.__data[7]=0,D.__data[8]=tt.elements[6],D.__data[9]=tt.elements[7],D.__data[10]=tt.elements[8],D.__data[11]=0):(tt.toArray(D.__data,Q),Q+=it.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,b,M,L){const R=y.value,P=b+"_"+M;if(L[P]===void 0)return typeof R=="number"||typeof R=="boolean"?L[P]=R:L[P]=R.clone(),!0;{const N=L[P];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return L[P]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(y){const b=y.uniforms;let M=0;const L=16;for(let P=0,N=b.length;P<N;P++){const T=Array.isArray(b[P])?b[P]:[b[P]];for(let S=0,D=T.length;S<D;S++){const O=T[S],H=Array.isArray(O.value)?O.value:[O.value];for(let Q=0,st=H.length;Q<st;Q++){const tt=H[Q],it=_(tt),W=M%L,gt=W%it.boundary,St=W+gt;M+=gt,St!==0&&L-St<it.storage&&(M+=L-St),O.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=it.storage}}}const R=M%L;return R>0&&(M+=L-R),y.__size=M,y.__cache={},this}function _(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function p(y){const b=y.target;b.removeEventListener("dispose",p);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class iy{constructor(t={}){const{canvas:e=X_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,f=null;const y=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=Ii,this.toneMappingExposure=1;const M=this;let L=!1,R=0,P=0,N=null,T=-1,S=null;const D=new ve,O=new ve;let H=null;const Q=new Dt(0);let st=0,tt=e.width,it=e.height,W=1,gt=null,St=null;const wt=new ve(0,0,tt,it),Ot=new ve(0,0,tt,it);let Jt=!1;const rt=new jc;let ft=!1,At=!1;const _t=new ce,Ut=new ce,zt=new G,kt=new ve,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function I(){return N===null?W:1}let w=i;function at(E,B){return e.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oc}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),w===null){const B="webgl2";if(w=at(B,E),w===null)throw at(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let J,$,et,ot,q,x,v,C,k,X,Y,mt,ut,dt,Bt,ht,Mt,Nt,Vt,vt,Gt,Xt,oe,F;function yt(){J=new lM(w),J.init(),Xt=new YS(w,J),$=new nM(w,J,t,Xt),et=new WS(w,J),$.reverseDepthBuffer&&d&&et.buffers.depth.setReversed(!0),ot=new hM(w),q=new RS,x=new qS(w,J,et,q,$,Xt,ot),v=new sM(M),C=new aM(M),k=new v0(w),oe=new tM(w,k),X=new cM(w,k,ot,oe),Y=new dM(w,X,k,ot),Vt=new fM(w,$,x),ht=new iM(q),mt=new CS(M,v,C,J,$,oe,ht),ut=new ey(M,q),dt=new DS,Bt=new OS(J),Nt=new Qx(M,v,C,et,Y,m,l),Mt=new kS(M,Y,$),F=new ny(w,ot,$,et),vt=new eM(w,J,ot),Gt=new uM(w,J,ot),ot.programs=mt.programs,M.capabilities=$,M.extensions=J,M.properties=q,M.renderLists=dt,M.shadowMap=Mt,M.state=et,M.info=ot}yt();const nt=new QS(M,w);this.xr=nt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const E=J.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=J.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(tt,it,!1))},this.getSize=function(E){return E.set(tt,it)},this.setSize=function(E,B,j=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}tt=E,it=B,e.width=Math.floor(E*W),e.height=Math.floor(B*W),j===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(tt*W,it*W).floor()},this.setDrawingBufferSize=function(E,B,j){tt=E,it=B,W=j,e.width=Math.floor(E*j),e.height=Math.floor(B*j),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(wt)},this.setViewport=function(E,B,j,K){E.isVector4?wt.set(E.x,E.y,E.z,E.w):wt.set(E,B,j,K),et.viewport(D.copy(wt).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(Ot)},this.setScissor=function(E,B,j,K){E.isVector4?Ot.set(E.x,E.y,E.z,E.w):Ot.set(E,B,j,K),et.scissor(O.copy(Ot).multiplyScalar(W).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(E){et.setScissorTest(Jt=E)},this.setOpaqueSort=function(E){gt=E},this.setTransparentSort=function(E){St=E},this.getClearColor=function(E){return E.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(E=!0,B=!0,j=!0){let K=0;if(E){let V=!1;if(N!==null){const pt=N.texture.format;V=pt===Xc||pt===Wc||pt===Gc}if(V){const pt=N.texture.type,bt=pt===pi||pt===os||pt===Or||pt===js||pt===Vc||pt===Hc,Ct=Nt.getClearColor(),Rt=Nt.getClearAlpha(),Wt=Ct.r,jt=Ct.g,Pt=Ct.b;bt?(g[0]=Wt,g[1]=jt,g[2]=Pt,g[3]=Rt,w.clearBufferuiv(w.COLOR,0,g)):(_[0]=Wt,_[1]=jt,_[2]=Pt,_[3]=Rt,w.clearBufferiv(w.COLOR,0,_))}else K|=w.COLOR_BUFFER_BIT}B&&(K|=w.DEPTH_BUFFER_BIT),j&&(K|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),dt.dispose(),Bt.dispose(),q.dispose(),v.dispose(),C.dispose(),Y.dispose(),oe.dispose(),F.dispose(),mt.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",su),nt.removeEventListener("sessionend",ru),Bi.stop()};function lt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=ot.autoReset,B=Mt.enabled,j=Mt.autoUpdate,K=Mt.needsUpdate,V=Mt.type;yt(),ot.autoReset=E,Mt.enabled=B,Mt.autoUpdate=j,Mt.needsUpdate=K,Mt.type=V}function Et(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Yt(E){const B=E.target;B.removeEventListener("dispose",Yt),ye(B)}function ye(E){Fe(E),q.remove(E)}function Fe(E){const B=q.get(E).programs;B!==void 0&&(B.forEach(function(j){mt.releaseProgram(j)}),E.isShaderMaterial&&mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,j,K,V,pt){B===null&&(B=de);const bt=V.isMesh&&V.matrixWorld.determinant()<0,Ct=lp(E,B,j,K,V);et.setMaterial(K,bt);let Rt=j.index,Wt=1;if(K.wireframe===!0){if(Rt=X.getWireframeAttribute(j),Rt===void 0)return;Wt=2}const jt=j.drawRange,Pt=j.attributes.position;let te=jt.start*Wt,ge=(jt.start+jt.count)*Wt;pt!==null&&(te=Math.max(te,pt.start*Wt),ge=Math.min(ge,(pt.start+pt.count)*Wt)),Rt!==null?(te=Math.max(te,0),ge=Math.min(ge,Rt.count)):Pt!=null&&(te=Math.max(te,0),ge=Math.min(ge,Pt.count));const xe=ge-te;if(xe<0||xe===1/0)return;oe.setup(V,K,Ct,j,Rt);let Qe,ne=vt;if(Rt!==null&&(Qe=k.get(Rt),ne=Gt,ne.setIndex(Qe)),V.isMesh)K.wireframe===!0?(et.setLineWidth(K.wireframeLinewidth*I()),ne.setMode(w.LINES)):ne.setMode(w.TRIANGLES);else if(V.isLine){let Lt=K.linewidth;Lt===void 0&&(Lt=1),et.setLineWidth(Lt*I()),V.isLineSegments?ne.setMode(w.LINES):V.isLineLoop?ne.setMode(w.LINE_LOOP):ne.setMode(w.LINE_STRIP)}else V.isPoints?ne.setMode(w.POINTS):V.isSprite&&ne.setMode(w.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ne.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))ne.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Lt=V._multiDrawStarts,Yn=V._multiDrawCounts,ie=V._multiDrawCount,wn=Rt?k.get(Rt).bytesPerElement:1,ds=q.get(K).currentProgram.getUniforms();for(let an=0;an<ie;an++)ds.setValue(w,"_gl_DrawID",an),ne.render(Lt[an]/wn,Yn[an])}else if(V.isInstancedMesh)ne.renderInstances(te,xe,V.count);else if(j.isInstancedBufferGeometry){const Lt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Yn=Math.min(j.instanceCount,Lt);ne.renderInstances(te,xe,Yn)}else ne.render(te,xe)};function ae(E,B,j){E.transparent===!0&&E.side===Pn&&E.forceSinglePass===!1?(E.side=Je,E.needsUpdate=!0,Yr(E,B,j),E.side=Ni,E.needsUpdate=!0,Yr(E,B,j),E.side=Pn):Yr(E,B,j)}this.compile=function(E,B,j=null){j===null&&(j=E),f=Bt.get(j),f.init(B),b.push(f),j.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),E!==j&&E.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();const K=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pt=V.material;if(pt)if(Array.isArray(pt))for(let bt=0;bt<pt.length;bt++){const Ct=pt[bt];ae(Ct,j,V),K.add(Ct)}else ae(pt,j,V),K.add(pt)}),b.pop(),f=null,K},this.compileAsync=function(E,B,j=null){const K=this.compile(E,B,j);return new Promise(V=>{function pt(){if(K.forEach(function(bt){q.get(bt).currentProgram.isReady()&&K.delete(bt)}),K.size===0){V(E);return}setTimeout(pt,10)}J.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Tn=null;function qn(E){Tn&&Tn(E)}function su(){Bi.stop()}function ru(){Bi.start()}const Bi=new Zd;Bi.setAnimationLoop(qn),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(E){Tn=E,nt.setAnimationLoop(E),E===null?Bi.stop():Bi.start()},nt.addEventListener("sessionstart",su),nt.addEventListener("sessionend",ru),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(B),B=nt.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,B,N),f=Bt.get(E,b.length),f.init(B),b.push(f),Ut.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),rt.setFromProjectionMatrix(Ut),At=this.localClippingEnabled,ft=ht.init(this.clippingPlanes,At),p=dt.get(E,y.length),p.init(),y.push(p),nt.enabled===!0&&nt.isPresenting===!0){const pt=M.xr.getDepthSensingMesh();pt!==null&&Sa(pt,B,-1/0,M.sortObjects)}Sa(E,B,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(gt,St),A=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,A&&Nt.addToRenderList(p,E),this.info.render.frame++,ft===!0&&ht.beginShadows();const j=f.state.shadowsArray;Mt.render(j,E,B),ft===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=p.opaque,V=p.transmissive;if(f.setupLights(),B.isArrayCamera){const pt=B.cameras;if(V.length>0)for(let bt=0,Ct=pt.length;bt<Ct;bt++){const Rt=pt[bt];au(K,V,E,Rt)}A&&Nt.render(E);for(let bt=0,Ct=pt.length;bt<Ct;bt++){const Rt=pt[bt];ou(p,E,Rt,Rt.viewport)}}else V.length>0&&au(K,V,E,B),A&&Nt.render(E),ou(p,E,B);N!==null&&(x.updateMultisampleRenderTarget(N),x.updateRenderTargetMipmap(N)),E.isScene===!0&&E.onAfterRender(M,E,B),oe.resetDefaultState(),T=-1,S=null,b.pop(),b.length>0?(f=b[b.length-1],ft===!0&&ht.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function Sa(E,B,j,K){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||rt.intersectsSprite(E)){K&&kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ut);const bt=Y.update(E),Ct=E.material;Ct.visible&&p.push(E,bt,Ct,j,kt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||rt.intersectsObject(E))){const bt=Y.update(E),Ct=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),kt.copy(E.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),kt.copy(bt.boundingSphere.center)),kt.applyMatrix4(E.matrixWorld).applyMatrix4(Ut)),Array.isArray(Ct)){const Rt=bt.groups;for(let Wt=0,jt=Rt.length;Wt<jt;Wt++){const Pt=Rt[Wt],te=Ct[Pt.materialIndex];te&&te.visible&&p.push(E,bt,te,j,kt.z,Pt)}}else Ct.visible&&p.push(E,bt,Ct,j,kt.z,null)}}const pt=E.children;for(let bt=0,Ct=pt.length;bt<Ct;bt++)Sa(pt[bt],B,j,K)}function ou(E,B,j,K){const V=E.opaque,pt=E.transmissive,bt=E.transparent;f.setupLightsView(j),ft===!0&&ht.setGlobalState(M.clippingPlanes,j),K&&et.viewport(D.copy(K)),V.length>0&&qr(V,B,j),pt.length>0&&qr(pt,B,j),bt.length>0&&qr(bt,B,j),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function au(E,B,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[K.id]===void 0&&(f.state.transmissionRenderTarget[K.id]=new mi(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Hr:pi,minFilter:es,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const pt=f.state.transmissionRenderTarget[K.id],bt=K.viewport||D;pt.setSize(bt.z,bt.w);const Ct=M.getRenderTarget();M.setRenderTarget(pt),M.getClearColor(Q),st=M.getClearAlpha(),st<1&&M.setClearColor(16777215,.5),M.clear(),A&&Nt.render(j);const Rt=M.toneMapping;M.toneMapping=Ii;const Wt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),f.setupLightsView(K),ft===!0&&ht.setGlobalState(M.clippingPlanes,K),qr(E,j,K),x.updateMultisampleRenderTarget(pt),x.updateRenderTargetMipmap(pt),J.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Pt=0,te=B.length;Pt<te;Pt++){const ge=B[Pt],xe=ge.object,Qe=ge.geometry,ne=ge.material,Lt=ge.group;if(ne.side===Pn&&xe.layers.test(K.layers)){const Yn=ne.side;ne.side=Je,ne.needsUpdate=!0,lu(xe,j,K,Qe,ne,Lt),ne.side=Yn,ne.needsUpdate=!0,jt=!0}}jt===!0&&(x.updateMultisampleRenderTarget(pt),x.updateRenderTargetMipmap(pt))}M.setRenderTarget(Ct),M.setClearColor(Q,st),Wt!==void 0&&(K.viewport=Wt),M.toneMapping=Rt}function qr(E,B,j){const K=B.isScene===!0?B.overrideMaterial:null;for(let V=0,pt=E.length;V<pt;V++){const bt=E[V],Ct=bt.object,Rt=bt.geometry,Wt=K===null?bt.material:K,jt=bt.group;Ct.layers.test(j.layers)&&lu(Ct,B,j,Rt,Wt,jt)}}function lu(E,B,j,K,V,pt){E.onBeforeRender(M,B,j,K,V,pt),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(M,B,j,K,E,pt),V.transparent===!0&&V.side===Pn&&V.forceSinglePass===!1?(V.side=Je,V.needsUpdate=!0,M.renderBufferDirect(j,B,K,V,E,pt),V.side=Ni,V.needsUpdate=!0,M.renderBufferDirect(j,B,K,V,E,pt),V.side=Pn):M.renderBufferDirect(j,B,K,V,E,pt),E.onAfterRender(M,B,j,K,V,pt)}function Yr(E,B,j){B.isScene!==!0&&(B=de);const K=q.get(E),V=f.state.lights,pt=f.state.shadowsArray,bt=V.state.version,Ct=mt.getParameters(E,V.state,pt,B,j),Rt=mt.getProgramCacheKey(Ct);let Wt=K.programs;K.environment=E.isMeshStandardMaterial?B.environment:null,K.fog=B.fog,K.envMap=(E.isMeshStandardMaterial?C:v).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Wt===void 0&&(E.addEventListener("dispose",Yt),Wt=new Map,K.programs=Wt);let jt=Wt.get(Rt);if(jt!==void 0){if(K.currentProgram===jt&&K.lightsStateVersion===bt)return uu(E,Ct),jt}else Ct.uniforms=mt.getUniforms(E),E.onBeforeCompile(Ct,M),jt=mt.acquireProgram(Ct,Rt),Wt.set(Rt,jt),K.uniforms=Ct.uniforms;const Pt=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pt.clippingPlanes=ht.uniform),uu(E,Ct),K.needsLights=up(E),K.lightsStateVersion=bt,K.needsLights&&(Pt.ambientLightColor.value=V.state.ambient,Pt.lightProbe.value=V.state.probe,Pt.directionalLights.value=V.state.directional,Pt.directionalLightShadows.value=V.state.directionalShadow,Pt.spotLights.value=V.state.spot,Pt.spotLightShadows.value=V.state.spotShadow,Pt.rectAreaLights.value=V.state.rectArea,Pt.ltc_1.value=V.state.rectAreaLTC1,Pt.ltc_2.value=V.state.rectAreaLTC2,Pt.pointLights.value=V.state.point,Pt.pointLightShadows.value=V.state.pointShadow,Pt.hemisphereLights.value=V.state.hemi,Pt.directionalShadowMap.value=V.state.directionalShadowMap,Pt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pt.spotShadowMap.value=V.state.spotShadowMap,Pt.spotLightMatrix.value=V.state.spotLightMatrix,Pt.spotLightMap.value=V.state.spotLightMap,Pt.pointShadowMap.value=V.state.pointShadowMap,Pt.pointShadowMatrix.value=V.state.pointShadowMatrix),K.currentProgram=jt,K.uniformsList=null,jt}function cu(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Oo.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function uu(E,B){const j=q.get(E);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function lp(E,B,j,K,V){B.isScene!==!0&&(B=de),x.resetTextureUnits();const pt=B.fog,bt=K.isMeshStandardMaterial?B.environment:null,Ct=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:us,Rt=(K.isMeshStandardMaterial?C:v).get(K.envMap||bt),Wt=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,jt=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Pt=!!j.morphAttributes.position,te=!!j.morphAttributes.normal,ge=!!j.morphAttributes.color;let xe=Ii;K.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(xe=M.toneMapping);const Qe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ne=Qe!==void 0?Qe.length:0,Lt=q.get(K),Yn=f.state.lights;if(ft===!0&&(At===!0||E!==S)){const pn=E===S&&K.id===T;ht.setState(K,E,pn)}let ie=!1;K.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Yn.state.version||Lt.outputColorSpace!==Ct||V.isBatchedMesh&&Lt.batching===!1||!V.isBatchedMesh&&Lt.batching===!0||V.isBatchedMesh&&Lt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Lt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Lt.instancing===!1||!V.isInstancedMesh&&Lt.instancing===!0||V.isSkinnedMesh&&Lt.skinning===!1||!V.isSkinnedMesh&&Lt.skinning===!0||V.isInstancedMesh&&Lt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Lt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Lt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Lt.instancingMorph===!1&&V.morphTexture!==null||Lt.envMap!==Rt||K.fog===!0&&Lt.fog!==pt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==ht.numPlanes||Lt.numIntersection!==ht.numIntersection)||Lt.vertexAlphas!==Wt||Lt.vertexTangents!==jt||Lt.morphTargets!==Pt||Lt.morphNormals!==te||Lt.morphColors!==ge||Lt.toneMapping!==xe||Lt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Lt.__version=K.version);let wn=Lt.currentProgram;ie===!0&&(wn=Yr(K,B,V));let ds=!1,an=!1,ir=!1;const Me=wn.getUniforms(),Fn=Lt.uniforms;if(et.useProgram(wn.program)&&(ds=!0,an=!0,ir=!0),K.id!==T&&(T=K.id,an=!0),ds||S!==E){et.buffers.depth.getReversed()?(_t.copy(E.projectionMatrix),Y_(_t),j_(_t),Me.setValue(w,"projectionMatrix",_t)):Me.setValue(w,"projectionMatrix",E.projectionMatrix),Me.setValue(w,"viewMatrix",E.matrixWorldInverse);const _i=Me.map.cameraPosition;_i!==void 0&&_i.setValue(w,zt.setFromMatrixPosition(E.matrixWorld)),$.logarithmicDepthBuffer&&Me.setValue(w,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Me.setValue(w,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,an=!0,ir=!0)}if(V.isSkinnedMesh){Me.setOptional(w,V,"bindMatrix"),Me.setOptional(w,V,"bindMatrixInverse");const pn=V.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Me.setValue(w,"boneTexture",pn.boneTexture,x))}V.isBatchedMesh&&(Me.setOptional(w,V,"batchingTexture"),Me.setValue(w,"batchingTexture",V._matricesTexture,x),Me.setOptional(w,V,"batchingIdTexture"),Me.setValue(w,"batchingIdTexture",V._indirectTexture,x),Me.setOptional(w,V,"batchingColorTexture"),V._colorsTexture!==null&&Me.setValue(w,"batchingColorTexture",V._colorsTexture,x));const sr=j.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&Vt.update(V,j,wn),(an||Lt.receiveShadow!==V.receiveShadow)&&(Lt.receiveShadow=V.receiveShadow,Me.setValue(w,"receiveShadow",V.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Fn.envMap.value=Rt,Fn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&B.environment!==null&&(Fn.envMapIntensity.value=B.environmentIntensity),an&&(Me.setValue(w,"toneMappingExposure",M.toneMappingExposure),Lt.needsLights&&cp(Fn,ir),pt&&K.fog===!0&&ut.refreshFogUniforms(Fn,pt),ut.refreshMaterialUniforms(Fn,K,W,it,f.state.transmissionRenderTarget[E.id]),Oo.upload(w,cu(Lt),Fn,x)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Oo.upload(w,cu(Lt),Fn,x),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Me.setValue(w,"center",V.center),Me.setValue(w,"modelViewMatrix",V.modelViewMatrix),Me.setValue(w,"normalMatrix",V.normalMatrix),Me.setValue(w,"modelMatrix",V.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const pn=K.uniformsGroups;for(let _i=0,vi=pn.length;_i<vi;_i++){const hu=pn[_i];F.update(hu,wn),F.bind(hu,wn)}}return wn}function cp(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function up(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,B,j){q.get(E.texture).__webglTexture=B,q.get(E.depthTexture).__webglTexture=j;const K=q.get(E);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=j===void 0,K.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){const j=q.get(E);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,j=0){N=E,R=B,P=j;let K=!0,V=null,pt=!1,bt=!1;if(E){const Rt=q.get(E);if(Rt.__useDefaultFramebuffer!==void 0)et.bindFramebuffer(w.FRAMEBUFFER,null),K=!1;else if(Rt.__webglFramebuffer===void 0)x.setupRenderTarget(E);else if(Rt.__hasExternalTextures)x.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Pt=E.depthTexture;if(Rt.__boundDepthTexture!==Pt){if(Pt!==null&&q.has(Pt)&&(E.width!==Pt.image.width||E.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(E)}}const Wt=E.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(bt=!0);const jt=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(jt[B])?V=jt[B][j]:V=jt[B],pt=!0):E.samples>0&&x.useMultisampledRTT(E)===!1?V=q.get(E).__webglMultisampledFramebuffer:Array.isArray(jt)?V=jt[j]:V=jt,D.copy(E.viewport),O.copy(E.scissor),H=E.scissorTest}else D.copy(wt).multiplyScalar(W).floor(),O.copy(Ot).multiplyScalar(W).floor(),H=Jt;if(et.bindFramebuffer(w.FRAMEBUFFER,V)&&K&&et.drawBuffers(E,V),et.viewport(D),et.scissor(O),et.setScissorTest(H),pt){const Rt=q.get(E.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+B,Rt.__webglTexture,j)}else if(bt){const Rt=q.get(E.texture),Wt=B||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Rt.__webglTexture,j||0,Wt)}T=-1},this.readRenderTargetPixels=function(E,B,j,K,V,pt,bt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&bt!==void 0&&(Ct=Ct[bt]),Ct){et.bindFramebuffer(w.FRAMEBUFFER,Ct);try{const Rt=E.texture,Wt=Rt.format,jt=Rt.type;if(!$.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-K&&j>=0&&j<=E.height-V&&w.readPixels(B,j,K,V,Xt.convert(Wt),Xt.convert(jt),pt)}finally{const Rt=N!==null?q.get(N).__webglFramebuffer:null;et.bindFramebuffer(w.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(E,B,j,K,V,pt,bt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&bt!==void 0&&(Ct=Ct[bt]),Ct){const Rt=E.texture,Wt=Rt.format,jt=Rt.type;if(!$.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-K&&j>=0&&j<=E.height-V){et.bindFramebuffer(w.FRAMEBUFFER,Ct);const Pt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Pt),w.bufferData(w.PIXEL_PACK_BUFFER,pt.byteLength,w.STREAM_READ),w.readPixels(B,j,K,V,Xt.convert(Wt),Xt.convert(jt),0);const te=N!==null?q.get(N).__webglFramebuffer:null;et.bindFramebuffer(w.FRAMEBUFFER,te);const ge=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await q_(w,ge,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Pt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,pt),w.deleteBuffer(Pt),w.deleteSync(ge),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,j=0){E.isTexture!==!0&&(_r("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);const K=Math.pow(2,-j),V=Math.floor(E.image.width*K),pt=Math.floor(E.image.height*K),bt=B!==null?B.x:0,Ct=B!==null?B.y:0;x.setTexture2D(E,0),w.copyTexSubImage2D(w.TEXTURE_2D,j,0,0,bt,Ct,V,pt),et.unbindTexture()},this.copyTextureToTexture=function(E,B,j=null,K=null,V=0){E.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,E=arguments[1],B=arguments[2],V=arguments[3]||0,j=null);let pt,bt,Ct,Rt,Wt,jt,Pt,te,ge;const xe=E.isCompressedTexture?E.mipmaps[V]:E.image;j!==null?(pt=j.max.x-j.min.x,bt=j.max.y-j.min.y,Ct=j.isBox3?j.max.z-j.min.z:1,Rt=j.min.x,Wt=j.min.y,jt=j.isBox3?j.min.z:0):(pt=xe.width,bt=xe.height,Ct=xe.depth||1,Rt=0,Wt=0,jt=0),K!==null?(Pt=K.x,te=K.y,ge=K.z):(Pt=0,te=0,ge=0);const Qe=Xt.convert(B.format),ne=Xt.convert(B.type);let Lt;B.isData3DTexture?(x.setTexture3D(B,0),Lt=w.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(x.setTexture2DArray(B,0),Lt=w.TEXTURE_2D_ARRAY):(x.setTexture2D(B,0),Lt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,B.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,B.unpackAlignment);const Yn=w.getParameter(w.UNPACK_ROW_LENGTH),ie=w.getParameter(w.UNPACK_IMAGE_HEIGHT),wn=w.getParameter(w.UNPACK_SKIP_PIXELS),ds=w.getParameter(w.UNPACK_SKIP_ROWS),an=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,xe.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,xe.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Rt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Wt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,jt);const ir=E.isDataArrayTexture||E.isData3DTexture,Me=B.isDataArrayTexture||B.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Fn=q.get(E),sr=q.get(B),pn=q.get(Fn.__renderTarget),_i=q.get(sr.__renderTarget);et.bindFramebuffer(w.READ_FRAMEBUFFER,pn.__webglFramebuffer),et.bindFramebuffer(w.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let vi=0;vi<Ct;vi++)ir&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,q.get(E).__webglTexture,V,jt+vi),E.isDepthTexture?(Me&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,q.get(B).__webglTexture,V,ge+vi),w.blitFramebuffer(Rt,Wt,pt,bt,Pt,te,pt,bt,w.DEPTH_BUFFER_BIT,w.NEAREST)):Me?w.copyTexSubImage3D(Lt,V,Pt,te,ge+vi,Rt,Wt,pt,bt):w.copyTexSubImage2D(Lt,V,Pt,te,ge+vi,Rt,Wt,pt,bt);et.bindFramebuffer(w.READ_FRAMEBUFFER,null),et.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Me?E.isDataTexture||E.isData3DTexture?w.texSubImage3D(Lt,V,Pt,te,ge,pt,bt,Ct,Qe,ne,xe.data):B.isCompressedArrayTexture?w.compressedTexSubImage3D(Lt,V,Pt,te,ge,pt,bt,Ct,Qe,xe.data):w.texSubImage3D(Lt,V,Pt,te,ge,pt,bt,Ct,Qe,ne,xe):E.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,V,Pt,te,pt,bt,Qe,ne,xe.data):E.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,V,Pt,te,xe.width,xe.height,Qe,xe.data):w.texSubImage2D(w.TEXTURE_2D,V,Pt,te,pt,bt,Qe,ne,xe);w.pixelStorei(w.UNPACK_ROW_LENGTH,Yn),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ie),w.pixelStorei(w.UNPACK_SKIP_PIXELS,wn),w.pixelStorei(w.UNPACK_SKIP_ROWS,ds),w.pixelStorei(w.UNPACK_SKIP_IMAGES,an),V===0&&B.generateMipmaps&&w.generateMipmap(Lt),et.unbindTexture()},this.copyTextureToTexture3D=function(E,B,j=null,K=null,V=0){return E.isTexture!==!0&&(_r("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,K=arguments[1]||null,E=arguments[2],B=arguments[3],V=arguments[4]||0),_r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,j,K,V)},this.initRenderTarget=function(E){q.get(E).__webglFramebuffer===void 0&&x.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?x.setTextureCube(E,0):E.isData3DTexture?x.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?x.setTexture2DArray(E,0):x.setTexture2D(E,0),et.unbindTexture()},this.resetState=function(){R=0,P=0,N=null,et.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class ea{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=i}clone(){return new ea(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ip extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Bo extends Ue{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Ee,u=Ee,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zc extends fs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const na=new G,ia=new G,Yh=new ce,pr=new Wr,Mo=new Gr,cl=new G,jh=new G;class sy extends Ae{constructor(t=new Ne,e=new Zc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)na.fromBufferAttribute(e,s-1),ia.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=na.distanceTo(ia);t.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,t.ray.intersectsSphere(Mo)===!1)return;Yh.copy(s).invert(),pr.copy(t.ray).applyMatrix4(Yh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){const f=u.getX(_),y=u.getX(_+1),b=So(this,t,pr,l,f,y);b&&e.push(b)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(m),f=So(this,t,pr,l,_,p);f&&e.push(f)}}else{const m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){const f=So(this,t,pr,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=So(this,t,pr,l,g-1,m);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function So(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(na.fromBufferAttribute(o,s),ia.fromBufferAttribute(o,r),e.distanceSqToSegment(na,ia,cl,jh)>i)return;cl.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(cl);if(!(l<t.near||l>t.far))return{distance:l,point:jh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const $h=new G,Kh=new G;class sp extends sy{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)$h.fromBufferAttribute(e,s),Kh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+$h.distanceTo(Kh);t.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jc extends fs{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Zh=new ce,mc=new Wr,yo=new Gr,Eo=new G;class rp extends Ae{constructor(t=new Ne,e=new Jc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(s),yo.radius+=r,t.ray.intersectsSphere(yo)===!1)return;Zh.copy(s).invert(),mc.copy(t.ray).applyMatrix4(Zh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,_=m;g<_;g++){const p=c.getX(g);Eo.fromBufferAttribute(h,p),Jh(Eo,p,l,s,t,e,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=d,_=m;g<_;g++)Eo.fromBufferAttribute(h,g),Jh(Eo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jh(n,t,e,i,s,r,o){const a=mc.distanceSqToPoint(n);if(a<e){const l=new G;mc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Qc extends Ue{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tu extends Ne{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new G,d=new G,m=[],g=[],_=[],p=[];for(let f=0;f<=i;f++){const y=[],b=f/i;let M=0;f===0&&o===0?M=.5/e:f===i&&l===Math.PI&&(M=-.5/e);for(let L=0;L<=e;L++){const R=L/e;h.x=-t*Math.cos(s+R*r)*Math.sin(o+b*a),h.y=t*Math.cos(o+b*a),h.z=t*Math.sin(s+R*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),p.push(R+M,1-b),y.push(c++)}u.push(y)}for(let f=0;f<i;f++)for(let y=0;y<e;y++){const b=u[f][y+1],M=u[f][y],L=u[f+1][y],R=u[f+1][y+1];(f!==0||o>0)&&m.push(b,M,R),(f!==i-1||l<Math.PI)&&m.push(M,L,R)}this.setIndex(m),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(_,3)),this.setAttribute("uv",new dn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ry extends fs{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Dt(16777215),this.specular=new Dt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vd,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class eu extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class oy extends eu{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ul=new ce,Qh=new G,tf=new G;class ay{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jc,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qh),tf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tf),e.updateMatrixWorld(),ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ly extends ay{constructor(){super(new $c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cy extends eu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new ly}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class uy extends eu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class hy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ef(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ef();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ef(){return performance.now()}const nf=new ce;class fy{constructor(t,e,i=0,s=1/0){this.ray=new Wr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new qc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nf),this}intersectObject(t,e=!0,i=[]){return gc(t,this,i,e),i.sort(sf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)gc(t[s],this,i,e);return i.sort(sf),i}}function sf(n,t){return n.distance-t.distance}function gc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)gc(r[o],t,e,!0)}}class rf{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(je(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class of extends sp{constructor(t,e=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ne;r.setIndex(new fe(i,1)),r.setAttribute("position",new dn(s,3)),super(r,new Zc({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class dy extends hs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oc);const af={type:"change"},nu={type:"start"},op={type:"end"},bo=new Wr,lf=new Ri,py=Math.cos(70*W_.DEG2RAD),we=new G,en=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hl=1e-6;class my extends dy{constructor(t,e=null){super(t,e),this.state=he.NONE,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vs.ROTATE,MIDDLE:Vs.DOLLY,RIGHT:Vs.PAN},this.touches={ONE:Ds.ROTATE,TWO:Ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new as,this._lastTargetPosition=new G,this._quat=new as().setFromUnitVectors(t.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rf,this._sphericalDelta=new rf,this._scale=1,this._panOffset=new G,this._rotateStart=new Ht,this._rotateEnd=new Ht,this._rotateDelta=new Ht,this._panStart=new Ht,this._panEnd=new Ht,this._panDelta=new Ht,this._dollyStart=new Ht,this._dollyEnd=new Ht,this._dollyDelta=new Ht,this._dollyDirection=new G,this._mouse=new Ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_y.bind(this),this._onPointerDown=gy.bind(this),this._onPointerUp=vy.bind(this),this._onContextMenu=Ty.bind(this),this._onMouseWheel=Sy.bind(this),this._onKeyDown=yy.bind(this),this._onTouchStart=Ey.bind(this),this._onTouchMove=by.bind(this),this._onMouseDown=xy.bind(this),this._onMouseMove=My.bind(this),this._interceptControlDown=wy.bind(this),this._interceptControlUp=Ay.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(af),this.update(),this.state=he.NONE}update(t=null){const e=this.object.position;we.copy(e).sub(this.target),we.applyQuaternion(this._quat),this._spherical.setFromVector3(we),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=en:i>Math.PI&&(i-=en),s<-Math.PI?s+=en:s>Math.PI&&(s-=en),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(we.setFromSpherical(this._spherical),we.applyQuaternion(this._quatInverse),e.copy(this.target).add(we),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=we.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new G(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=we.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(bo.origin.copy(this.object.position),bo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bo.direction))<py?this.object.lookAt(this.target):(lf.setFromNormalAndCoplanarPoint(this.object.up,this.target),bo.intersectPlane(lf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>hl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hl||this._lastTargetPosition.distanceToSquared(this.target)>hl?(this.dispatchEvent(af),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?en/60*this.autoRotateSpeed*t:en/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){we.setFromMatrixColumn(e,0),we.multiplyScalar(-t),this._panOffset.add(we)}_panUp(t,e){this.screenSpacePanning===!0?we.setFromMatrixColumn(e,1):(we.setFromMatrixColumn(e,0),we.crossVectors(this.object.up,we)),we.multiplyScalar(t),this._panOffset.add(we)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;we.copy(s).sub(this.target);let r=we.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(en*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-en*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(en*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-en*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function gy(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function _y(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function vy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(op),this.state=he.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function xy(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Vs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=he.DOLLY;break;case Vs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}break;case Vs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(nu)}function My(n){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Sy(n){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(n.preventDefault(),this.dispatchEvent(nu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(op))}function yy(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Ey(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ds.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=he.TOUCH_ROTATE;break;case Ds.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case Ds.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=he.TOUCH_DOLLY_PAN;break;case Ds.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(nu)}function by(n){switch(this._trackPointer(n),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=he.NONE}}function Ty(n){this.enabled!==!1&&n.preventDefault()}function wy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ay(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Cy extends Ne{constructor(t=50,e=10,i=!0,s=!0,r=!0,o=!0,a=!0){const l=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,3,16,17,18,7,19,20,21,11,22,23,24,15,25,26,27,18,28,29,30,21,31,32,33,24,34,35,36,27,37,38,39,30,40,41,0,33,42,43,4,36,44,45,8,39,46,47,12,12,13,14,15,48,49,50,51,52,53,54,55,56,57,58,59,15,25,26,27,51,60,61,62,55,63,64,65,59,66,67,68,27,37,38,39,62,69,70,71,65,72,73,74,68,75,76,77,39,46,47,12,71,78,79,48,74,80,81,52,77,82,83,56,56,57,58,59,84,85,86,87,88,89,90,91,92,93,94,95,59,66,67,68,87,96,97,98,91,99,100,101,95,102,103,104,68,75,76,77,98,105,106,107,101,108,109,110,104,111,112,113,77,82,83,56,107,114,115,84,110,116,117,88,113,118,119,92,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,123,136,137,120,127,138,139,124,131,140,141,128,135,142,143,132,132,133,134,135,144,145,146,147,148,149,150,151,68,152,153,154,135,142,143,132,147,155,156,144,151,157,158,148,154,159,160,68,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,164,177,178,161,168,179,180,165,172,181,182,169,176,183,184,173,173,174,175,176,185,186,187,188,189,190,191,192,193,194,195,196,176,183,184,173,188,197,198,185,192,199,200,189,196,201,202,193,203,203,203,203,204,205,206,207,208,208,208,208,209,210,211,212,203,203,203,203,207,213,214,215,208,208,208,208,212,216,217,218,203,203,203,203,215,219,220,221,208,208,208,208,218,222,223,224,203,203,203,203,221,225,226,204,208,208,208,208,224,227,228,209,209,210,211,212,229,230,231,232,233,234,235,236,237,238,239,240,212,216,217,218,232,241,242,243,236,244,245,246,240,247,248,249,218,222,223,224,243,250,251,252,246,253,254,255,249,256,257,258,224,227,228,209,252,259,260,229,255,261,262,233,258,263,264,237,265,265,265,265,266,267,268,269,270,271,272,273,92,119,118,113,265,265,265,265,269,274,275,276,273,277,278,279,113,112,111,104,265,265,265,265,276,280,281,282,279,283,284,285,104,103,102,95,265,265,265,265,282,286,287,266,285,288,289,270,95,94,93,92],c=[1.4,0,2.4,1.4,-.784,2.4,.784,-1.4,2.4,0,-1.4,2.4,1.3375,0,2.53125,1.3375,-.749,2.53125,.749,-1.3375,2.53125,0,-1.3375,2.53125,1.4375,0,2.53125,1.4375,-.805,2.53125,.805,-1.4375,2.53125,0,-1.4375,2.53125,1.5,0,2.4,1.5,-.84,2.4,.84,-1.5,2.4,0,-1.5,2.4,-.784,-1.4,2.4,-1.4,-.784,2.4,-1.4,0,2.4,-.749,-1.3375,2.53125,-1.3375,-.749,2.53125,-1.3375,0,2.53125,-.805,-1.4375,2.53125,-1.4375,-.805,2.53125,-1.4375,0,2.53125,-.84,-1.5,2.4,-1.5,-.84,2.4,-1.5,0,2.4,-1.4,.784,2.4,-.784,1.4,2.4,0,1.4,2.4,-1.3375,.749,2.53125,-.749,1.3375,2.53125,0,1.3375,2.53125,-1.4375,.805,2.53125,-.805,1.4375,2.53125,0,1.4375,2.53125,-1.5,.84,2.4,-.84,1.5,2.4,0,1.5,2.4,.784,1.4,2.4,1.4,.784,2.4,.749,1.3375,2.53125,1.3375,.749,2.53125,.805,1.4375,2.53125,1.4375,.805,2.53125,.84,1.5,2.4,1.5,.84,2.4,1.75,0,1.875,1.75,-.98,1.875,.98,-1.75,1.875,0,-1.75,1.875,2,0,1.35,2,-1.12,1.35,1.12,-2,1.35,0,-2,1.35,2,0,.9,2,-1.12,.9,1.12,-2,.9,0,-2,.9,-.98,-1.75,1.875,-1.75,-.98,1.875,-1.75,0,1.875,-1.12,-2,1.35,-2,-1.12,1.35,-2,0,1.35,-1.12,-2,.9,-2,-1.12,.9,-2,0,.9,-1.75,.98,1.875,-.98,1.75,1.875,0,1.75,1.875,-2,1.12,1.35,-1.12,2,1.35,0,2,1.35,-2,1.12,.9,-1.12,2,.9,0,2,.9,.98,1.75,1.875,1.75,.98,1.875,1.12,2,1.35,2,1.12,1.35,1.12,2,.9,2,1.12,.9,2,0,.45,2,-1.12,.45,1.12,-2,.45,0,-2,.45,1.5,0,.225,1.5,-.84,.225,.84,-1.5,.225,0,-1.5,.225,1.5,0,.15,1.5,-.84,.15,.84,-1.5,.15,0,-1.5,.15,-1.12,-2,.45,-2,-1.12,.45,-2,0,.45,-.84,-1.5,.225,-1.5,-.84,.225,-1.5,0,.225,-.84,-1.5,.15,-1.5,-.84,.15,-1.5,0,.15,-2,1.12,.45,-1.12,2,.45,0,2,.45,-1.5,.84,.225,-.84,1.5,.225,0,1.5,.225,-1.5,.84,.15,-.84,1.5,.15,0,1.5,.15,1.12,2,.45,2,1.12,.45,.84,1.5,.225,1.5,.84,.225,.84,1.5,.15,1.5,.84,.15,-1.6,0,2.025,-1.6,-.3,2.025,-1.5,-.3,2.25,-1.5,0,2.25,-2.3,0,2.025,-2.3,-.3,2.025,-2.5,-.3,2.25,-2.5,0,2.25,-2.7,0,2.025,-2.7,-.3,2.025,-3,-.3,2.25,-3,0,2.25,-2.7,0,1.8,-2.7,-.3,1.8,-3,-.3,1.8,-3,0,1.8,-1.5,.3,2.25,-1.6,.3,2.025,-2.5,.3,2.25,-2.3,.3,2.025,-3,.3,2.25,-2.7,.3,2.025,-3,.3,1.8,-2.7,.3,1.8,-2.7,0,1.575,-2.7,-.3,1.575,-3,-.3,1.35,-3,0,1.35,-2.5,0,1.125,-2.5,-.3,1.125,-2.65,-.3,.9375,-2.65,0,.9375,-2,-.3,.9,-1.9,-.3,.6,-1.9,0,.6,-3,.3,1.35,-2.7,.3,1.575,-2.65,.3,.9375,-2.5,.3,1.125,-1.9,.3,.6,-2,.3,.9,1.7,0,1.425,1.7,-.66,1.425,1.7,-.66,.6,1.7,0,.6,2.6,0,1.425,2.6,-.66,1.425,3.1,-.66,.825,3.1,0,.825,2.3,0,2.1,2.3,-.25,2.1,2.4,-.25,2.025,2.4,0,2.025,2.7,0,2.4,2.7,-.25,2.4,3.3,-.25,2.4,3.3,0,2.4,1.7,.66,.6,1.7,.66,1.425,3.1,.66,.825,2.6,.66,1.425,2.4,.25,2.025,2.3,.25,2.1,3.3,.25,2.4,2.7,.25,2.4,2.8,0,2.475,2.8,-.25,2.475,3.525,-.25,2.49375,3.525,0,2.49375,2.9,0,2.475,2.9,-.15,2.475,3.45,-.15,2.5125,3.45,0,2.5125,2.8,0,2.4,2.8,-.15,2.4,3.2,-.15,2.4,3.2,0,2.4,3.525,.25,2.49375,2.8,.25,2.475,3.45,.15,2.5125,2.9,.15,2.475,3.2,.15,2.4,2.8,.15,2.4,0,0,3.15,.8,0,3.15,.8,-.45,3.15,.45,-.8,3.15,0,-.8,3.15,0,0,2.85,.2,0,2.7,.2,-.112,2.7,.112,-.2,2.7,0,-.2,2.7,-.45,-.8,3.15,-.8,-.45,3.15,-.8,0,3.15,-.112,-.2,2.7,-.2,-.112,2.7,-.2,0,2.7,-.8,.45,3.15,-.45,.8,3.15,0,.8,3.15,-.2,.112,2.7,-.112,.2,2.7,0,.2,2.7,.45,.8,3.15,.8,.45,3.15,.112,.2,2.7,.2,.112,2.7,.4,0,2.55,.4,-.224,2.55,.224,-.4,2.55,0,-.4,2.55,1.3,0,2.55,1.3,-.728,2.55,.728,-1.3,2.55,0,-1.3,2.55,1.3,0,2.4,1.3,-.728,2.4,.728,-1.3,2.4,0,-1.3,2.4,-.224,-.4,2.55,-.4,-.224,2.55,-.4,0,2.55,-.728,-1.3,2.55,-1.3,-.728,2.55,-1.3,0,2.55,-.728,-1.3,2.4,-1.3,-.728,2.4,-1.3,0,2.4,-.4,.224,2.55,-.224,.4,2.55,0,.4,2.55,-1.3,.728,2.55,-.728,1.3,2.55,0,1.3,2.55,-1.3,.728,2.4,-.728,1.3,2.4,0,1.3,2.4,.224,.4,2.55,.4,.224,2.55,.728,1.3,2.55,1.3,.728,2.55,.728,1.3,2.4,1.3,.728,2.4,0,0,0,1.425,0,0,1.425,.798,0,.798,1.425,0,0,1.425,0,1.5,0,.075,1.5,.84,.075,.84,1.5,.075,0,1.5,.075,-.798,1.425,0,-1.425,.798,0,-1.425,0,0,-.84,1.5,.075,-1.5,.84,.075,-1.5,0,.075,-1.425,-.798,0,-.798,-1.425,0,0,-1.425,0,-1.5,-.84,.075,-.84,-1.5,.075,0,-1.5,.075,.798,-1.425,0,1.425,-.798,0,.84,-1.5,.075,1.5,-.84,.075];super(),e=Math.max(2,Math.floor(e));const u=1.3,d=3.15*(a?1:u)/2,m=t/d;let g=i?(8*e-4)*e:0;g+=s?(16*e-4)*e:0,g+=r?40*e*e:0;const _=new Uint32Array(g*3);let p=i?4:0;p+=s?8:0,p+=r?20:0,p*=(e+1)*(e+1);const f=new Float32Array(p*3),y=new Float32Array(p*3),b=new Float32Array(p*2),M=new ce;M.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0);const L=[],R=[],P=[],N=[],T=[],S=[],D=[],O=[],H=[],Q=new G;let st,tt,it,W,gt=0,St=0;const wt=new G,Ot=new ce,Jt=new ce,rt=new ve,ft=new ve,At=new ve,_t=new ve,Ut=new G,zt=new G,kt=M.clone();kt.transpose();const de=(q,x,v)=>!(f[q*3]===f[x*3]&&f[q*3+1]===f[x*3+1]&&f[q*3+2]===f[x*3+2]||f[q*3]===f[v*3]&&f[q*3+1]===f[v*3+1]&&f[q*3+2]===f[v*3+2]||f[x*3]===f[v*3]&&f[x*3+1]===f[v*3+1]&&f[x*3+2]===f[v*3+2]);for(let q=0;q<3;q++)S[q]=new ce;const A=r?0:20,I=i?32:28,w=e+1;let at=0,J=0,$=0,et=0,ot=0;for(let q=A;q<I;q++)if(s||q<20||q>=28){for(let x=0;x<3;x++){for(let v=0;v<4;v++)for(let C=0;C<4;C++)L[C*4+v]=c[l[q*16+v*4+C]*3+x],o&&q>=20&&q<28&&x!==2&&(L[C*4+v]*=1.077),!a&&x===2&&(L[C*4+v]*=u);Ot.set(L[0],L[1],L[2],L[3],L[4],L[5],L[6],L[7],L[8],L[9],L[10],L[11],L[12],L[13],L[14],L[15]),Jt.multiplyMatrices(Ot,M),S[x].multiplyMatrices(kt,Jt)}for(let x=0;x<=e;x++){const v=x/e;for(let C=0;C<=e;C++){const k=C/e;for(W=4,tt=it=1;W--;)R[W]=tt,P[W]=it,tt*=v,it*=k,W===3?(N[W]=T[W]=0,gt=St=1):(N[W]=gt*(3-W),T[W]=St*(3-W),gt*=v,St*=k);rt.fromArray(R),ft.fromArray(P),At.fromArray(N),_t.fromArray(T);for(let X=0;X<3;X++)st=rt.clone(),st.applyMatrix4(S[X]),D[X]=st.dot(ft),st=At.clone(),st.applyMatrix4(S[X]),O[X]=st.dot(ft),st=rt.clone(),st.applyMatrix4(S[X]),H[X]=st.dot(_t);Ut.fromArray(O),zt.fromArray(H),Q.crossVectors(zt,Ut),Q.normalize(),D[0]===0&&D[1]===0?wt.set(0,D[2]>d?1:-1,0):wt.set(Q.x,Q.z,-Q.y),f[J++]=m*D[0],f[J++]=m*(D[2]-d),f[J++]=-m*D[1],y[$++]=wt.x,y[$++]=wt.y,y[$++]=wt.z,b[et++]=1-k,b[et++]=1-v}}for(let x=0;x<e;x++)for(let v=0;v<e;v++){const C=at*w*w+x*w+v,k=C+1,X=k+w,Y=C+w;de(C,k,X)&&(_[ot++]=C,_[ot++]=k,_[ot++]=X),de(C,X,Y)&&(_[ot++]=C,_[ot++]=X,_[ot++]=Y)}at++}this.setIndex(new fe(_,1)),this.setAttribute("position",new fe(f,3)),this.setAttribute("normal",new fe(y,3)),this.setAttribute("uv",new fe(b,2)),this.computeBoundingSphere()}}const _c=Qs("");let cf=0;function Is(n,t=3e3){_c.value=n,window.clearTimeout(cf),cf=window.setTimeout(()=>{_c.value=""},t)}function Ry(){return{message:_c,showToast:Is}}const Py=`uniform vec3 uTop;
uniform vec3 uHorizon;
varying vec3 vDir;
#include <logdepthbuf_pars_fragment>
void main() {
  float h = normalize(vDir).y;
  vec3 col = mix(uHorizon, uTop, smoothstep(0.0, 0.7, h));
  gl_FragColor = vec4(col, 1.0);
  #include <logdepthbuf_fragment>
}
`,Dy=`#include <common>
varying vec3 vDir;
#include <logdepthbuf_pars_vertex>
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #include <logdepthbuf_vertex>
}
`;class Ly{constructor(t=4e3,e=()=>0,i){Z(this,"group",new ns);Z(this,"geo");Z(this,"mat");Z(this,"points");Z(this,"pos");Z(this,"centers");Z(this,"count");Z(this,"halfX");Z(this,"halfZ");Z(this,"surface");Z(this,"speed",800);Z(this,"brushMinFallHeight",50);Z(this,"brushMaxFallHeight",1500);Z(this,"windDirX",.6);Z(this,"windDirZ",.4);Z(this,"windTilt",.4);this.count=t,this.halfX=It.x/2,this.halfZ=It.z/2,this.surface=e,this.pos=new Float32Array(t*3),this.centers=new Float32Array(t*5),this.geo=new Ne,this.geo.setAttribute("position",new fe(this.pos,3)),this.mat=new Jc({color:"#cfe6ff",size:8,map:null,transparent:!0,opacity:.7,depthWrite:!1,sizeAttenuation:!1}),i&&Iy(i).then(s=>{this.mat.map=s,this.mat.needsUpdate=!0}).catch(()=>{}),this.points=new rp(this.geo,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=3,this.points.visible=!1,this.group.add(this.points),this.hideAll()}hideAll(){this.centers.fill(-99999),this.pos.fill(-99999),this.markNeedsUpdate()}markNeedsUpdate(){this.geo.attributes.position.needsUpdate=!0}setMode(t){if(t===null){this.points.visible=!1;return}this.points.visible||(this.points.visible=!0,this.hideAll())}update(t,e,i,s,r){if(!this.points.visible)return;const o=this.speed*t;for(let a=0;a<this.count;a++){let l=this.centers[a*5],c=this.centers[a*5+1],u=this.centers[a*5+2],h=this.centers[a*5+3],d=this.centers[a*5+4],m=this.surface(l,u);if(c<m+1||l<-this.halfX||l>this.halfX||u<-this.halfZ||u>this.halfZ){let g;if(e==="rain")l=(Math.random()*2-1)*this.halfX,u=(Math.random()*2-1)*this.halfZ,g=300+Math.random()*500;else{const _=Math.random()*Math.PI*2,p=Math.sqrt(Math.random())*r;l=i+Math.cos(_)*p,u=s+Math.sin(_)*p,g=this.brushMinFallHeight+Math.random()*(this.brushMaxFallHeight-this.brushMinFallHeight)}if(e==="rain"){const _=1/Math.hypot(this.windDirX,this.windDirZ);h=this.windDirX*_*this.windTilt,d=this.windDirZ*_*this.windTilt,l=Math.max(-this.halfX,Math.min(this.halfX,l-h*g)),u=Math.max(-this.halfZ,Math.min(this.halfZ,u-d*g))}else h=0,d=0;m=this.surface(l,u),c=m+g}else c-=o,l+=h*o,u+=d*o;this.centers[a*5]=l,this.centers[a*5+1]=c,this.centers[a*5+2]=u,this.centers[a*5+3]=h,this.centers[a*5+4]=d,this.pos[a*3]=l,this.pos[a*3+1]=c,this.pos[a*3+2]=u}this.markNeedsUpdate()}dispose(){this.group.clear(),this.geo.dispose(),this.mat.dispose()}}function Iy(n){return new Promise((t,e)=>{const i=new Image;i.crossOrigin="anonymous",i.onload=()=>{const s=new Qc(i);s.colorSpace=us,t(s)},i.onerror=e,i.src=n})}const ii=1e-4;function Uy(n,t,e){const i=n.length;if(i===0)return Number.NEGATIVE_INFINITY;const s=Float64Array.from(n);s.sort();let r=0,o=s[0];for(let a=1;a<=i&&(r+=s[a-1],o=t/(e*a)+r/a,!(a<i&&o<=s[a]));a++);return o}const uf=4;function Ny(n,t,e,i,s){const r=n-e,o=t-i;return Math.exp(-(r*r+o*o)/Math.max(2*s*s,1))}function vc(n,t,e,i,s,r,o,a){const l=It.x/2,c=It.z/2,u=Math.max(e,o*uf),h=Math.max(i,o*uf),d=To(Math.floor((s-u+l)/e),n),m=To(Math.floor((s+u+l)/e),n),g=To(Math.floor((r-h+c)/i),t),_=To(Math.floor((r+h+c)/i),t);for(let p=g;p<=_;p++){const f=(p+.5)*i-c;for(let y=d;y<=m;y++){const b=(y+.5)*e-l;a(y,p,Ny(b,f,s,r,o))}}}function xc(n,t,e,i,s,r,o){let a=0;return vc(n,t,e,i,s,r,o,(l,c,u)=>{a+=u}),Math.max(1e-6,a*e*i)}function To(n,t){return Math.min(Math.max(n,0),t-1)}const fl={f0:.15,fc:.25,k:.8},dl={f0:.5,fc:.6,k:1},pl={f0:1,fc:1,k:1.2},Fy=.2,Oy=.45,By=.55,zy=.8;function ap(n,t){const e=n.length,i=new Float32Array(e),s=new Float32Array(e),r=new Float32Array(e),o=t>1e-6?1/t:0;for(let a=0;a<e;a++){const l=Math.min(1,Math.max(0,n[a]*o)),c=hf(Fy,Oy,l),u=hf(By,zy,l);i[a]=ml(fl.f0,dl.f0,pl.f0,c,u),s[a]=ml(fl.fc,dl.fc,pl.fc,c,u),r[a]=ml(fl.k,dl.k,pl.k,c,u)}return{f0Mul:i,fcMul:s,kMul:r}}function hf(n,t,e){const i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)}function ml(n,t,e,i,s){const r=n+(t-n)*i;return r+(e-r)*s}const ff=.05;class Vy{constructor(t,e){Z(this,"Nx",256);Z(this,"Nz",256);Z(this,"cellX",It.x/256);Z(this,"cellZ",It.z/256);Z(this,"u",new Float32Array(0));Z(this,"v",new Float32Array(0));Z(this,"uPrev",new Float32Array(0));Z(this,"vPrev",new Float32Array(0));Z(this,"h",new Float32Array(0));Z(this,"bed",new Float32Array(0));Z(this,"fluxX",new Float32Array(0));Z(this,"fluxZ",new Float32Array(0));Z(this,"simTime",0);Z(this,"maxWater",0);Z(this,"fieldVersion",0);Z(this,"wetTime",new Float32Array(0));Z(this,"infiltratedVolume",0);Z(this,"volume",0);Z(this,"soil",{f0Mul:new Float32Array(0),fcMul:new Float32Array(0),kMul:new Float32Array(0)});this.data=t,this.params=e,this.setSize(e.simNx,e.simNz)}get N(){return this.Nx}get cell(){return this.cellX}setSize(t,e){this.Nx=t,this.Nz=e,this.cellX=It.x/t,this.cellZ=It.z/e;const i=t*e;this.u=new Float32Array(i),this.v=new Float32Array(i),this.uPrev=new Float32Array(i),this.vPrev=new Float32Array(i),this.h=new Float32Array(i),this.fluxX=new Float32Array(i),this.fluxZ=new Float32Array(i),this.bed=new Float32Array(i),this.wetTime=new Float32Array(i);const s=It.x/2,r=It.z/2;for(let o=0;o<e;o++)for(let a=0;a<t;a++){const l=(a+.5)*this.cellX-s,c=(o+.5)*this.cellZ-r;this.bed[o*t+a]=this.data.sampleWorld(l,c)-this.data.minElev}this.soil=ap(this.bed,this.data.range),this.reset()}reset(){this.u.fill(0),this.v.fill(0),this.h.fill(0),this.wetTime.fill(0),this.infiltratedVolume=0,this.simTime=0,this.volume=0,this.maxWater=0,this.fieldVersion++}addWater(t,e,i,s,r){this.addWaterDepth(t,e,Math.max(0,i*s),r)}addVolume(t,e,i,s){if(i<=0)return;const r=xc(this.Nx,this.Nz,this.cellX,this.cellZ,t,e,s);this.addWaterDepth(t,e,i/r,s)}addWaterDepth(t,e,i,s){if(i<=0)return;const r=this.Nx,o=this.Nz;vc(r,o,this.cellX,this.cellZ,t,e,s,(a,l,c)=>{this.h[l*r+a]+=i*c}),this.updateStatsFromArrays(),this.fieldVersion++}addPush(t,e,i,s,r,o){const a=Math.hypot(i,s);if(a<=1e-4)return;const l=Math.min(18,a*r*.7),c=this.Nx,u=this.Nz;vc(c,u,this.cellX,this.cellZ,t,e,o,(h,d,m)=>{const g=d*c+h;this.u[g]+=i/a*l*m,this.v[g]+=s/a*l*m}),this.updateStatsFromArrays(),this.fieldVersion++}addRain(t){const e=this.params.rain;if(e<=0)return;const s=e/1e3/3600*t;this.h=this.h.map(r=>r+s)}applyInfiltration(t){if(!this.params.infiltration||t<=0)return;const{h:e,wetTime:i,soil:s}=this,r=this.params.infilF0/1e3/3600,o=this.params.infilFc/1e3/3600,a=this.params.infilK/3600;let l=0;for(let c=0;c<e.length;c++){if(e[c]<=ii)continue;const u=o*s.fcMul[c]+(r*s.f0Mul[c]-o*s.fcMul[c])*Math.exp(-a*s.kMul[c]*i[c]),h=Math.min(e[c],u*t);e[c]-=h,l+=h,e[c]>ii&&(i[c]+=t)}this.infiltratedVolume+=l*this.cellX*this.cellZ}fillToLevel(t){const{bed:e,h:i,u:s,v:r}=this;for(let o=0;o<i.length;o++){const a=t-e[o];a>i[o]&&(i[o]=a),s[o]=r[o]=0}this.updateStatsFromArrays(),this.fieldVersion++}step(t){const e=this.params,i=Math.sqrt(Math.max(1,e.gravity*e.vertExag*Math.max(this.maxWater,1))),s=Math.min(this.cellX,this.cellZ)*.22/Math.max(1,e.maxSpeed,i),r=Math.min(Math.max(t*e.timeScale,0),s);this.simTime+=r,this.applyGravity(r,e),this.advectVelocity(r),this.applyFriction(r,e),this.applyArtificialViscosity(r),this.applyInfiltration(r),this.conservativeContinuity(r,e),this.applyBoundaryDrain(r),this.dampDryCellVelocity(),this.clampVelocity(),this.zeroBoundaryVelocity(),this.updateStatsFromArrays(),this.fieldVersion++}dampDryCellVelocity(){const{h:t,u:e,v:i}=this;for(let s=0;s<t.length;s++)t[s]<=ii&&(e[s]*=.35,i[s]*=.35)}applyGravity(t,e){const{Nx:i,Nz:s,cellX:r,cellZ:o,u:a,v:l,h:c,bed:u}=this,h=e.gravity*e.vertExag;for(let d=0;d<s;d++)for(let m=0;m<i;m++){const g=d*i+m,_=Math.max(0,m-1),p=Math.min(i-1,m+1),f=Math.max(0,d-1),y=Math.min(s-1,d+1),b=(u[d*i+p]+c[d*i+p]-u[d*i+_]-c[d*i+_])/(2*r),M=(u[y*i+m]+c[y*i+m]-u[f*i+m]-c[f*i+m])/(2*o);a[g]-=t*h*b,l[g]-=t*h*M}}applyArtificialViscosity(t){if(t<=0)return;const{Nx:e,Nz:i,u:s,v:r}=this,o=.15,a=new Float32Array(s.length),l=new Float32Array(r.length);for(let c=0;c<i;c++)for(let u=0;u<e;u++){const h=c*e+u,d=Math.max(0,u-1),m=Math.min(e-1,u+1),g=Math.max(0,c-1),_=Math.min(i-1,c+1);a[h]=s[h]+o*(s[c*e+d]+s[c*e+m]+s[g*e+u]+s[_*e+u]-4*s[h]),l[h]=r[h]+o*(r[c*e+d]+r[c*e+m]+r[g*e+u]+r[_*e+u]-4*r[h])}s.set(a),r.set(l)}advectVelocity(t){const{Nx:e,Nz:i,cellX:s,cellZ:r,u:o,v:a}=this;for(let l=0;l<i;l++)for(let c=0;c<e;c++){const u=l*e+c,h=c-t*o[u]/s,d=l-t*a[u]/r;this.uPrev[u]=df(o,h,d,e,i),this.vPrev[u]=df(a,h,d,e,i)}[this.u,this.uPrev]=[this.uPrev,this.u],[this.v,this.vPrev]=[this.vPrev,this.v]}applyFriction(t,e){const i=1/(1+t*e.friction);this.u=this.u.map(s=>s*i),this.v=this.v.map(s=>s*i)}conservativeContinuity(t,e){const{Nx:i,Nz:s,cellX:r,cellZ:o}=this,a=this.u,l=this.v,c=this.h,u=this.fluxX,h=this.fluxZ,d=e.drainBoundary,m=t/r,g=t/o;for(let _=0;_<s;_++)for(let p=0;p<i-1;p++){const f=_*i+p,y=.5*(a[f]+a[f+1]);y>0?u[f]=c[f]<ii?0:y*c[f]:u[f]=c[f+1]<ii?0:y*c[f+1]}for(let _=0;_<s-1;_++)for(let p=0;p<i;p++){const f=_*i+p,y=.5*(l[f]+l[f+i]);y>0?h[f]=c[f]<ii?0:y*c[f]:h[f]=c[f+i]<ii?0:y*c[f+i]}for(let _=0;_<s;_++)for(let p=0;p<i;p++){const f=_*i+p,y=p===0,b=p===i-1,M=_===0,L=_===s-1,R=y?0:u[f-1],P=M?0:h[f-i];let N,T;d?(N=b?Math.max(0,a[f]*c[f]):y?Math.max(0,-a[f]*c[f]):u[f],T=L?Math.max(0,l[f]*c[f]):M?Math.max(0,-l[f]*c[f]):h[f]):(N=b?0:u[f],T=L?0:h[f]),c[f]+=m*(R-N)+g*(P-T),c[f]<0&&(c[f]=0)}}clampVelocity(){const t=this.params.maxSpeed,e=t*t,{u:i,v:s}=this;for(let r=0;r<i.length;r++){const o=i[r]*i[r]+s[r]*s[r];if(o>e){const a=t/Math.sqrt(o);i[r]*=a,s[r]*=a}}}zeroBoundaryVelocity(){if(this.params.drainBoundary)return;const{Nx:t,Nz:e,u:i,v:s}=this;for(let r=0;r<e;r++)i[r*t]=0,i[r*t+t-1]=0;for(let r=0;r<t;r++)s[r]=0,s[(e-1)*t+r]=0}applyBoundaryDrain(t){if(!this.params.drainBoundary||t<=0)return;const{Nx:e,Nz:i,h:s}=this,r=Math.max(1,e*ff),o=Math.max(1,i*ff),a=Math.min(r,o);for(let l=0;l<i;l++)for(let c=0;c<e;c++){const u=Math.min(c,e-1-c),h=Math.min(l,i-1-l),d=Math.min(u,h);if(d>=a)continue;const m=d/a,g=m*m*(3-2*m);s[l*e+c]*=Math.exp(-.5*(1-g)*t)}}getVolume(){return this.volume}updateStatsFromArrays(){let t=0,e=0;for(const i of this.h)t+=i,i>e&&(e=i);this.volume=t*this.cellX*this.cellZ,this.maxWater=e}}function df(n,t,e,i,s){const r=wo(Math.floor(t),i),o=wo(Math.floor(t)+1,i),a=wo(Math.floor(e),s),l=wo(Math.floor(e)+1,s),c=t-Math.floor(t),u=e-Math.floor(e),h=n[a*i+r],d=n[a*i+o],m=n[l*i+r],g=n[l*i+o],_=h+(d-h)*c,p=m+(g-m)*c;return _+(p-_)*u}function wo(n,t){return Math.min(Math.max(n,0),t-1)}const Hy=`varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,ky=`precision highp float;

// 状态纹理：r=水深 h，g/b=流速 vel.xy，a=湿润时间 wetTime(供下渗积分)
uniform sampler2D uState;
// 河床高程纹理：r 通道存地形高程
uniform sampler2D uBed;
// 单个纹素尺寸(1/网格分辨率)，用于取四周邻居
uniform vec2 uTexel;
// 时间步长
uniform float uDt;
// 单个网格的世界尺寸(米)
uniform vec2 uCell;
// 世界范围(米)
uniform vec2 uWorldSize;
// 重力加速度
uniform float uGravity;
// 底床摩擦系数(线性衰减)
uniform float uFriction;
// 流速上限(数值稳定性)
uniform float uMaxSpeed;
// 降雨率(米/秒)，>0 表示均匀降雨
uniform float uRainRate;
// 边界排水开关：<0.5 为封闭边界(速度归零)，>=0.5 为开放排边界(边缘指数衰减)
uniform float uDrain;
// 下渗开关
uniform float uInfilOn;
// Horton 下渗参数：初值能力 f0 / 稳值能力 fc / 衰减系数 k
uniform float uInfilF0;
uniform float uInfilFc;
uniform float uInfilK;
// 土壤参数纹理：r=f0 乘数，g=fc 乘数，b=k 乘数
uniform sampler2D uSoil;
// 笔刷中心(世界坐标)
uniform vec2 uBrushCenter;
// 笔刷半径(世界坐标)
uniform float uBrushRadius;
// 笔刷注水量
uniform float uBrushWater;
// 笔刷推力(世界坐标方向向量)
uniform vec2 uBrushPush;
varying vec2 vUv;

// 边界排水相关参数
const float BOUNDARY_DRAIN_RATE = 0.5;

// 读取四周状态，越界则夹紧到边缘(等价于零梯度/反射边界)
vec4 readState(vec2 uv) {
  return texture2D(uState, clamp(uv, vec2(0.0), vec2(1.0)));
}

// 读取河床高程，越界夹紧
float readBed(vec2 uv) {
  return texture2D(uBed, clamp(uv, vec2(0.0), vec2(1.0))).r;
}

void main() {
  // 读取当前网格状态
  vec4 s = readState(vUv);
  float h = max(s.r, 0.0);
  vec2 vel = s.gb;
  // dt<=0 时直接透传状态(初始化/拷贝用途)，不做积分
  if (uDt <= 0.0) {
    gl_FragColor = vec4(h, vel.x, vel.y, s.a);
    return;
  }

  // 取四周邻居(左/右/上/下)的状态与河床高程
  vec2 dx = vec2(uTexel.x, 0.0);
  vec2 dz = vec2(0.0, uTexel.y);
  vec4 sL = readState(vUv - dx);
  vec4 sR = readState(vUv + dx);
  vec4 sT = readState(vUv - dz);
  vec4 sB = readState(vUv + dz);
  float bL = readBed(vUv - dx);
  float bR = readBed(vUv + dx);
  float bT = readBed(vUv - dz);
  float bB = readBed(vUv + dz);

  // 由水面(河床+水深)梯度计算坡度，做重力驱动加速度更新
  float surfaceL = bL + max(sL.r, 0.0);
  float surfaceR = bR + max(sR.r, 0.0);
  float surfaceT = bT + max(sT.r, 0.0);
  float surfaceB = bB + max(sB.r, 0.0);
  vec2 slope = vec2(surfaceR - surfaceL, surfaceB - surfaceT) / (2.0 * vec2(uCell.x, uCell.y));
  vel -= uGravity * slope * uDt;

  // 半拉格朗日速度对流：沿流线回溯采样上游速度，混合平滑(与 CPU 效果对齐)
  vec2 texSize = vec2(textureSize(uState, 0));
  vec2 advectUV = vUv - vel * uDt / (vec2(uCell.x, uCell.y) * texSize);
  vec4 sAdvect = readState(advectUV);
  vel = mix(vel, sAdvect.gb, 0.5);

  // 底床摩擦：隐式衰减速度
  vel *= 1.0 / (1.0 + uFriction * uDt);

  // 世界坐标与笔刷：高斯权重叠加注水与推力
  vec2 world = vec2(vUv.x * uWorldSize.x - uWorldSize.x * 0.5,
                    vUv.y * uWorldSize.y - uWorldSize.y * 0.5);
  float brushDist = distance(world, uBrushCenter);
  float brush = exp(-(brushDist * brushDist) / max(2.0 * uBrushRadius * uBrushRadius, 1.0));
  h += uBrushWater * brush;
  vel += uBrushPush * brush;
  // 均匀降雨
  h += uRainRate * uDt;

  // Horton 下渗：f = fc + (f0 - fc)·e^(-k·wetTime)，wetTime 存于状态 alpha 通道
  if (uInfilOn > 0.5) {
    vec4 soil = texture2D(uSoil, vUv);
    float cap = soil.g * uInfilFc +
      (soil.r * uInfilF0 - soil.g * uInfilFc) *
      exp(-soil.b * uInfilK * s.a);
    h -= min(h, cap * uDt);
  }

  // 用迎风格式(中央格式)计算相邻面通量：面速度取两侧平均值，水深取迎风侧；干格不提供通量
  float fL = 0.5 * (sL.g + vel.x);
  fL = fL > 0.0 ? fL * (sL.r < 0.0001 ? 0.0 : max(sL.r, 0.0))
                 : fL * (h < 0.0001 ? 0.0 : h);
  float fR = 0.5 * (vel.x + sR.g);
  fR = fR > 0.0 ? fR * (h < 0.0001 ? 0.0 : h)
                 : fR * (sR.r < 0.0001 ? 0.0 : max(sR.r, 0.0));
  float fT = 0.5 * (sT.b + vel.y);
  fT = fT > 0.0 ? fT * (sT.r < 0.0001 ? 0.0 : max(sT.r, 0.0))
                 : fT * (h < 0.0001 ? 0.0 : h);
  float fB = 0.5 * (vel.y + sB.b);
  fB = fB > 0.0 ? fB * (h < 0.0001 ? 0.0 : h)
                 : fB * (sB.r < 0.0001 ? 0.0 : max(sB.r, 0.0));

  // 通量限幅：单面流出不超过本格可支持水量(每面 1/4 上限)，保证质量守恒且 h 不为负
  float maxOutX = h * uCell.x / max(uDt, 0.0001) * 0.25;
  float maxOutZ = h * uCell.y / max(uDt, 0.0001) * 0.25;
  if (fR > 0.0) fR = min(fR, maxOutX);
  if (fL < 0.0) fL = max(fL, -maxOutX);
  if (fB > 0.0) fB = min(fB, maxOutZ);
  if (fT < 0.0) fT = max(fT, -maxOutZ);

  // 封闭边界处理：边界网格法向速度归零并关闭对应面通量
  vec2 border = step(vUv, uTexel * 0.5) + step(vec2(1.0) - uTexel * 0.5, vUv);
  if (uDrain < 0.5) {
    if (border.x > 0.0) {
      vel.x = 0.0;
      fL = 0.0;
      fR = 0.0;
    }
    if (border.y > 0.0) {
      vel.y = 0.0;
      fT = 0.0;
      fB = 0.0;
    }
  }

  // 连续方程更新水深(流出-流入)
  h -= (uDt / uCell.x) * (fR - fL) + (uDt / uCell.y) * (fB - fT);
  h = max(h, 0.0);
  // 开放排边界：边缘带按距离加权做指数衰减排水
  if (uDrain > 0.5) {
    float bandX = uWorldSize.x * 0.05;
    float bandZ = uWorldSize.y * 0.05;
    float edgeDist = min(
      min(world.x + uWorldSize.x * 0.5, uWorldSize.x * 0.5 - world.x),
      min(world.y + uWorldSize.y * 0.5, uWorldSize.y * 0.5 - world.y)
    );
    float drainWeight = 1.0 - smoothstep(0.0, min(bandX, bandZ), edgeDist);
    h *= exp(-BOUNDARY_DRAIN_RATE * drainWeight * uDt);
  }
  // 干格减速残留速度，减少漂浮噪声
  if (h <= 0.0001) {
    vel *= 0.35;
  }
  float speed = length(vel);
  if (speed > uMaxSpeed) {
    vel *= uMaxSpeed / speed;
  }
  // 湿润时间仅在有水时积分，干格时钟冻结
  float wetTime = h > 0.0001 ? s.a + uDt : s.a;
  gl_FragColor = vec4(h, vel.x, vel.y, wetTime);
}
`,Gy=3;class Wy{constructor(t,e,i){Z(this,"Nx",256);Z(this,"Nz",256);Z(this,"cellX",It.x/256);Z(this,"cellZ",It.z/256);Z(this,"h",new Float32Array(0));Z(this,"u",new Float32Array(0));Z(this,"v",new Float32Array(0));Z(this,"bed",new Float32Array(0));Z(this,"simTime",0);Z(this,"maxWater",0);Z(this,"fieldVersion",0);Z(this,"wetTime",new Float32Array(0));Z(this,"infiltratedVolume",0);Z(this,"volume",0);Z(this,"readBuffer",new Float32Array(0));Z(this,"uploadBuffer",new Float32Array(0));Z(this,"bedBuffer",new Float32Array(0));Z(this,"soilBuffer",new Float32Array(0));Z(this,"stateTexture",null);Z(this,"bedTexture",null);Z(this,"soilTexture",null);Z(this,"soilMul",null);Z(this,"rtA",null);Z(this,"rtB",null);Z(this,"current",null);Z(this,"next",null);Z(this,"scene",new ip);Z(this,"camera",new $c(-1,1,1,-1,0,1));Z(this,"quad");Z(this,"material");Z(this,"materialUniforms");Z(this,"impulses",[]);Z(this,"readFrame",0);Z(this,"pendingSync",!1);Z(this,"conservedVolume",0);Z(this,"rainRate",0);this.renderer=t,this.data=e,this.params=i,this.materialUniforms=this.createStepUniforms(),this.material=new bn({depthWrite:!1,depthTest:!1,uniforms:this.materialUniforms,vertexShader:Hy,fragmentShader:ky}),this.quad=new Ze(new er(2,2),this.material),this.scene.add(this.quad),this.setSize(i.simNx,i.simNz)}get N(){return this.Nx}get cell(){return this.cellX}setSize(t,e){this.Nx=t,this.Nz=e,this.cellX=It.x/t,this.cellZ=It.z/e;const i=t*e;this.h=new Float32Array(i),this.u=new Float32Array(i),this.v=new Float32Array(i),this.bed=new Float32Array(i),this.wetTime=new Float32Array(i),this.readBuffer=new Float32Array(i*4),this.uploadBuffer=new Float32Array(i*4),this.bedBuffer=new Float32Array(i*4),this.soilBuffer=new Float32Array(i*4),this.buildBed(),this.buildSoil(),this.rebuildTargets(),this.reset()}reset(){this.h.fill(0),this.u.fill(0),this.v.fill(0),this.wetTime.fill(0),this.infiltratedVolume=0,this.simTime=0,this.volume=0,this.maxWater=0,this.conservedVolume=0,this.uploadState()}addWater(t,e,i,s,r){const o=Math.max(0,i*s),a=xc(this.Nx,this.Nz,this.cellX,this.cellZ,t,e,r);this.impulses.push({x:t,z:e,radius:r,water:o,volume:o*a,pushX:0,pushZ:0})}addVolume(t,e,i,s){if(i<=0)return;const r=this.computeBrushEffectiveArea(t,e,s);this.impulses.push({x:t,z:e,radius:s,water:i/r,volume:i,pushX:0,pushZ:0})}addPush(t,e,i,s,r,o){const a=Math.hypot(i,s);if(a<=1e-4)return;const l=Math.min(18,a*r*.7);this.impulses.push({x:t,z:e,radius:o,water:0,volume:0,pushX:i/a*l,pushZ:s/a*l})}fillToLevel(t){const{h:e,bed:i,u:s,v:r}=this;for(let o=0;o<e.length;o++)e[o]=Math.max(e[o],t-i[o],0),s[o]=0,r[o]=0;this.uploadState(),this.updateStatsFromArrays(),this.conservedVolume=this.volume}addRain(t){const e=this.params.rain;if(e<=0){this.rainRate=0;return}this.rainRate=e/1e3/3600}step(t){const e=Math.sqrt(Math.max(1,this.params.gravity*this.params.vertExag*Math.max(this.maxWater,1))),i=this.cell*.22/Math.max(1,this.params.maxSpeed,e),s=Math.min(Math.max(t*this.params.timeScale,0),i);if(s<=0||!this.current||!this.next||!this.bedTexture)return;this.simTime+=s,(this.params.tool!=="rain"||this.params.rain<=0)&&(this.rainRate=0);const r=this.consumeImpulse(),o=this.computeSourceVolume(r,s);if(this.conservedVolume+=o,this.params.infiltration){const d=this.estimateInfiltrationVolume(s);this.conservedVolume=Math.max(0,this.conservedVolume-d),this.infiltratedVolume+=d}this.volume=this.conservedVolume;const a=this.material,l=this.materialUniforms;a.uniforms.uState.value=this.current.texture,a.uniforms.uBed.value=this.bedTexture,l.uTexel.value.set(1/this.Nx,1/this.Nz),a.uniforms.uDt.value=s,a.uniforms.uCell.value.set(this.cellX,this.cellZ),a.uniforms.uWorldSize.value.set(It.x,It.z),a.uniforms.uGravity.value=this.params.gravity*this.params.vertExag,a.uniforms.uFriction.value=this.params.friction,a.uniforms.uMaxSpeed.value=this.params.maxSpeed,a.uniforms.uDrain.value=this.params.drainBoundary?1:0,a.uniforms.uRainRate.value=this.rainRate,a.uniforms.uInfilOn.value=this.params.infiltration?1:0,a.uniforms.uInfilF0.value=this.params.infilF0/1e3/3600,a.uniforms.uInfilFc.value=this.params.infilFc/1e3/3600,a.uniforms.uInfilK.value=this.params.infilK/3600,a.uniforms.uSoil.value=this.soilTexture,l.uBrushCenter.value.set(r?r.x:999999,r?r.z:999999),a.uniforms.uBrushRadius.value=r?r.radius:1,a.uniforms.uBrushWater.value=r?r.water:0,l.uBrushPush.value.set(r?r.pushX:0,r?r.pushZ:0);const c=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.next),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(c),this.swapTargets();const u=this.params.tool==="rain"&&this.params.rain>0;!!r&&this.readFrame%Gy!==0&&this.readFrame!==0?this.pendingSync=!0:(r||this.pendingSync||(u||this.maxWater>1e-4)&&this.readFrame===0)&&(this.readState(this.conservedVolume,!this.params.drainBoundary),this.pendingSync=!1),this.readFrame=(this.readFrame+1)%15}getVolume(){return this.volume}syncState(){this.readState(this.conservedVolume,!this.params.drainBoundary),this.readFrame=0}dispose(){var t,e,i,s,r;(t=this.rtA)==null||t.dispose(),(e=this.rtB)==null||e.dispose(),(i=this.stateTexture)==null||i.dispose(),(s=this.bedTexture)==null||s.dispose(),(r=this.soilTexture)==null||r.dispose(),this.quad.geometry.dispose(),this.material.dispose()}buildBed(){var u;const t=It.x/2,e=It.z/2,{Nx:i,Nz:s,cellX:r,cellZ:o,bed:a,bedBuffer:l,data:c}=this;for(let h=0;h<s;h++)for(let d=0;d<i;d++){const m=h*i+d,g=(d+.5)*r-t,_=(h+.5)*o-e;a[m]=c.sampleWorld(g,_)-c.minElev,l[m*4]=a[m],l[m*4+3]=1}(u=this.bedTexture)==null||u.dispose(),this.bedTexture=new Bo(l,i,s,Ke,on),this.bedTexture.magFilter=Ee,this.bedTexture.minFilter=Ee,this.bedTexture.needsUpdate=!0}buildSoil(){var s;const t=ap(this.bed,this.data.range);this.soilMul=t;const{h:e,soilBuffer:i}=this;for(let r=0;r<e.length;r++)i[r*4]=t.f0Mul[r],i[r*4+1]=t.fcMul[r],i[r*4+2]=t.kMul[r],i[r*4+3]=1;(s=this.soilTexture)==null||s.dispose(),this.soilTexture=new Bo(i,this.N,this.N,Ke,on),this.soilTexture.magFilter=Ee,this.soilTexture.minFilter=Ee,this.soilTexture.needsUpdate=!0}rebuildTargets(){var e,i;(e=this.rtA)==null||e.dispose(),(i=this.rtB)==null||i.dispose();const t={format:Ke,type:on,depthBuffer:!1,stencilBuffer:!1,minFilter:Sn,magFilter:Sn};this.rtA=new mi(this.N,this.N,t),this.rtB=new mi(this.N,this.N,t),this.current=this.rtA,this.next=this.rtB}uploadState(){var a;const{N:t,h:e,u:i,v:s,wetTime:r,uploadBuffer:o}=this;for(let l=0;l<e.length;l++)o[l*4]=e[l],o[l*4+1]=i[l],o[l*4+2]=s[l],o[l*4+3]=r[l];(a=this.stateTexture)==null||a.dispose(),this.stateTexture=new Bo(o,t,t,Ke,on),this.stateTexture.magFilter=Ee,this.stateTexture.minFilter=Ee,this.stateTexture.needsUpdate=!0,this.copyTextureToTargets(this.stateTexture),this.fieldVersion++}copyTextureToTargets(t){if(!this.rtA||!this.rtB)return;const e=this.materialUniforms.uState.value;this.material.uniforms.uState.value=t,this.material.uniforms.uDt.value=0;const i=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.rtA),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(i),this.material.uniforms.uState.value=e,this.current=this.rtA,this.next=this.rtB}readState(t,e=!1){if(!this.current)return;const{N:i,h:s,u:r,v:o,wetTime:a,readBuffer:l,cell:c}=this;this.renderer.readRenderTargetPixels(this.current,0,0,i,i,l);let u=0,h=0;for(let g=0;g<s.length;g++){const _=Math.max(0,l[g*4]);s[g]=_,r[g]=l[g*4+1],o[g]=l[g*4+2],a[g]=l[g*4+3],u+=_,_>h&&(h=_)}const d=u*c*c;if(t!==void 0&&d>0&&(e||d>t)){const g=t/d;h=0;for(let _=0;_<s.length;_++)s[_]*=g,s[_]>h&&(h=s[_]);this.volume=t,this.conservedVolume=t,this.uploadState()}else this.volume=d,this.conservedVolume=d;this.maxWater=h,this.fieldVersion++}updateStatsFromArrays(){let t=0,e=0;for(const i of this.h)t+=i,i>e&&(e=i);this.volume=t*this.cell*this.cell,this.maxWater=e}consumeImpulse(){if(this.impulses.length===0)return null;const t=this.impulses[this.impulses.length-1],e={x:t.x,z:t.z,radius:t.radius,water:0,volume:0,pushX:0,pushZ:0};for(const i of this.impulses)e.water+=i.water,e.volume+=i.volume,e.pushX+=i.pushX,e.pushZ+=i.pushZ;return this.impulses.length=0,e}computeSourceVolume(t,e){let i=(t==null?void 0:t.volume)??0;return this.rainRate>0&&(i+=this.rainRate*e*It.x*It.z),i}estimateInfiltrationVolume(t){if(t<=0||!this.soilMul)return 0;const{h:e,wetTime:i,soilMul:s}=this,r=this.params.infilF0/1e3/3600,o=this.params.infilFc/1e3/3600,a=this.params.infilK/3600;let l=0;for(let c=0;c<e.length;c++){if(e[c]<=ii)continue;const u=o*s.fcMul[c]+(r*s.f0Mul[c]-o*s.fcMul[c])*Math.exp(-a*s.kMul[c]*i[c]),h=Math.min(e[c],u*t);l+=h,e[c]-=h,e[c]>ii&&(i[c]+=t)}return l*this.cellX*this.cellZ}computeBrushEffectiveArea(t,e,i){return xc(this.Nx,this.Nz,this.cellX,this.cellZ,t,e,i)}swapTargets(){const t=this.current;this.current=this.next,this.next=t}createStepUniforms(){return{uState:{value:null},uBed:{value:null},uTexel:{value:new Ht(1/256,1/256)},uDt:{value:0},uCell:{value:new Ht(It.x/256,It.z/256)},uWorldSize:{value:new Ht(It.x,It.z)},uGravity:{value:9.8},uFriction:{value:.05},uMaxSpeed:{value:26},uRainRate:{value:0},uDrain:{value:0},uInfilOn:{value:0},uInfilF0:{value:0},uInfilFc:{value:0},uInfilK:{value:0},uSoil:{value:null},uBrushCenter:{value:new Ht(999999,999999)},uBrushRadius:{value:1},uBrushWater:{value:0},uBrushPush:{value:new Ht(0,0)}}}}const Xy=`#include <common>
attribute float aElev;
varying vec2 vUv;
varying float vElev;
varying vec3 vNormal;
#include <logdepthbuf_pars_vertex>
void main() {
  vUv = uv;
  vElev = aElev;
  vNormal = normalize(normalMatrix * normal);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  #include <logdepthbuf_vertex>
}
`,qy=`uniform sampler2D uMap;
uniform float uRampBlend;
uniform vec3 uSunDir;
uniform vec3 uSkyColor;
uniform vec3 uGroundColor;
uniform float uAmbient;
uniform float uSunIntensity;
varying vec2 vUv;
varying float vElev;
varying vec3 vNormal;
#include <logdepthbuf_pars_fragment>

vec3 ramp(float t) {
  vec3 c0 = vec3(0.13, 0.42, 0.63);
  vec3 c1 = vec3(0.30, 0.62, 0.42);
  vec3 c2 = vec3(0.75, 0.68, 0.42);
  vec3 c3 = vec3(0.93, 0.93, 0.92);
  vec3 c = mix(c0, c1, smoothstep(0.00, 0.30, t));
  c = mix(c, c2, smoothstep(0.30, 0.65, t));
  c = mix(c, c3, smoothstep(0.65, 1.00, t));
  return c;
}

void main() {
  vec3 texCol = texture2D(uMap, vUv).rgb;
  vec3 elevCol = ramp(vElev);
  vec3 base = mix(texCol, elevCol, uRampBlend);

  vec3 n = normalize(vNormal);
  float ndl = clamp(dot(n, uSunDir), 0.0, 1.0);
  vec3 hemi = mix(uGroundColor, uSkyColor, n.y * 0.5 + 0.5);
  vec3 col = base * (uAmbient * hemi + uSunIntensity * ndl);
  gl_FragColor = vec4(col, 1.0);
  #include <logdepthbuf_fragment>
}
`,gl=[137,80,78,71,13,10,26,10];async function Yy(n){const[t,e]=await Promise.all([$y(n),jy(n)]);return{image:t,metadata:e}}async function jy(n){const t=await fetch(n);if(!t.ok)throw new Error(`图片元数据请求失败: ${t.status}`);const e=await t.arrayBuffer();return Ky(e)}function $y(n){return new Promise((t,e)=>{const i=new Image;i.crossOrigin="anonymous",i.onload=()=>t(i),i.onerror=e,i.src=n})}function Ky(n){const t=new DataView(n);if(t.byteLength<gl.length||!Zy(t,0,gl))return null;const e=new TextDecoder,i={};let s=gl.length;for(;s+12<=t.byteLength;){const r=t.getUint32(s),o=s+4,a=s+8,l=a+r+4;if(l>t.byteLength)return null;if(Jy(t,o,4)==="iTXt"){const u=Qy(new Uint8Array(n,a,r),e);u&&(i[u.keyword]=u.value)}s=l}return Object.keys(i).length>0?i:null}function Zy(n,t,e){if(t+e.length>n.byteLength)return!1;for(let i=0;i<e.length;i++)if(n.getUint8(t+i)!==e[i])return!1;return!0}function Jy(n,t,e){if(t<0||t+e>n.byteLength)return"";let i="";for(let s=0;s<e;s++)i+=String.fromCharCode(n.getUint8(t+s));return i}function Qy(n,t){const e=n.indexOf(0);if(e<=0||e+5>n.length)return null;const i=n[e+1],s=n[e+2];if(i!==0||s!==0)return null;const r=n.indexOf(0,e+3);if(r<0)return null;const o=n.indexOf(0,r+1);return o<0?null:{keyword:t.decode(n.subarray(0,e)),value:t.decode(n.subarray(o+1))}}class iu extends Ze{constructor(e=1){super();Z(this,"terrainData");Z(this,"vertExag");this.terrainData=null,this.vertExag=e}async load(e){const{image:i,metadata:s}=await Yy(e),r=this.buildTerrainData(i,s),o=this.createTextureFromImage(i);this.terrainData=r;const a=e_(s);It.x=a.x,It.z=a.z,this.geometry=this.buildTerrainGeometry(r,this.vertExag),this.material=this.createTerrainMaterial(o)}update(e){this.material.uniforms.uRampBlend.value=e.rampBlend,this.material.wireframe=e.wireframe}static decodeTerrainRgb(e,i,s){return Zg+(e*65536+i*256+s)*Jg}static sampleElevation(e,i,s,r,o){const a=(r+It.x/2)/It.x*(i-1),l=(o+It.z/2)/It.z*(s-1),c=Math.min(Math.max(Math.floor(a),0),i-2),u=Math.min(Math.max(Math.floor(l),0),s-2),h=a-c,d=l-u,m=(M,L)=>L*i+M,g=e[m(c,u)],_=e[m(c+1,u)],p=e[m(c,u+1)],f=e[m(c+1,u+1)],y=g+(_-g)*h,b=p+(f-p)*h;return y+(b-y)*d}buildTerrainGeometry(e,i){const s=$u,r=$u,o=s+1,a=r+1,l=new Float32Array(o*a*3),c=new Float32Array(o*a*2),u=new Float32Array(o*a),h=It.x/s,d=It.z/r;for(let p=0;p<a;p++)for(let f=0;f<o;f++){const y=p*o+f,b=f*h-It.x/2,M=p*d-It.z/2,L=e.sampleWorld(b,M),R=(L-e.minElev)*i;l[y*3]=b,l[y*3+1]=R,l[y*3+2]=M,c[y*2]=f/s,c[y*2+1]=1-p/r,u[y]=e.range>0?(L-e.minElev)/e.range:0}const m=new Uint32Array(s*r*6);let g=0;for(let p=0;p<r;p++)for(let f=0;f<s;f++){const y=p*o+f,b=y+1,M=y+o,L=y+o+1;m[g++]=y,m[g++]=M,m[g++]=b,m[g++]=b,m[g++]=M,m[g++]=L}const _=new Ne;return _.setAttribute("position",new fe(l,3)),_.setAttribute("uv",new fe(c,2)),_.setAttribute("aElev",new fe(u,1)),_.setIndex(new fe(m,1)),_.computeVertexNormals(),_}createTerrainMaterial(e){return new bn({uniforms:{uMap:{value:e??new Ue},uRampBlend:{value:.5},uSunDir:{value:new G(.45,.85,.3).normalize()},uSkyColor:{value:new Dt("#cfe8ff")},uGroundColor:{value:new Dt("#3d5a3a")},uAmbient:{value:.35},uSunIntensity:{value:1}},vertexShader:Xy,fragmentShader:qy,side:Pn})}buildTerrainData(e,i){const s=document.createElement("canvas");s.width=e.width,s.height=e.height;const r=s.getContext("2d",{willReadFrequently:!0});r.drawImage(e,0,0);const{data:o}=r.getImageData(0,0,e.width,e.height),a=e.width,l=e.height,c=new Float32Array(a*l),u=i!=null&&i.MinElevation?parseFloat(i.MinElevation):0,h=i!=null&&i.MaxElevation?parseFloat(i.MaxElevation):0,d=u!==h;let m=1/0,g=-1/0;if(d){const p=h-u;for(let f=0;f<o.length;f+=4){const y=o[f+3],b=u+y/255*p;c[f/4]=b,b<m&&(m=b),b>g&&(g=b)}}else for(let p=0;p<o.length;p+=4){const f=o[p+3];c[p/4]=f,f<m&&(m=f),f>g&&(g=f)}for(let p=0;p<a;p++)c[p]=m,c[(l-1)*a+p]=m;for(let p=0;p<l;p++)c[p*a]=m,c[p*a+a-1]=m;const _=(p,f)=>iu.sampleElevation(c,a,l,p,f);return{imgW:a,imgH:l,elevations:c,minElev:m,maxElev:g,range:g-m,sampleWorld:_,metadata:i}}createTextureFromImage(e){const i=new Qc(e);return i.colorSpace=un,i.wrapS=i.wrapT=Jo,i.anisotropy=8,i}}const tE=`#include <common>
// 求解器水深场纹理(N×N, R32F, NEAREST)，由 WaterMesh 每帧上传 solver.h
uniform sampler2D uHeightTex;
// 网格边长 N(格点数)，用于 uv↔格点坐标换算
uniform float uGridN;
attribute float aSpeed;
varying vec2 vUv;
varying float vDepth;
varying float vEdgeDepth;
varying float vSpeed;
varying vec3 vNormal;
varying vec3 vWorldPosition;
// 对数深度缓冲支持(与片元着色器的同名 include 配对)
#include <logdepthbuf_pars_vertex>

// 一维二项式卷积权重 |d|∈{0,1,2} → {6,4,1}/16(GLSL ES 1.0 无数组构造器，用函数代替)
float binomW(int d) {
  int a = d < 0 ? -d : d;
  return a == 0 ? 0.375 : (a == 1 ? 0.25 : 0.0625);
}

void main() {
  vUv = uv;
  // 由 uv 反推整数格点；uv.y 相对网格行号 j 是翻转的(v=1-j/(N-1))，
  // 而 DataTexture(flipY=false) 的 t 轴直接对应数据行号，故 y 必须翻回
  vec2 g = floor(vec2(uv.x, 1.0 - uv.y) * (uGridN - 1.0) + 0.5);
  // 本格水深：精确采样 texel 中心
  vDepth = texture2D(uHeightTex, (g + 0.5) / uGridN).r;
  // 岸线专用水深：5×5 二项式核单 pass 卷积；越界 tap 跳过并按界内实际权重和归一，
  // 与原 CPU 两趟可分离卷积数值等价(行列独立 → 归一化分母恰为 Wx·Wy)
  float sum = 0.0;
  float wsum = 0.0;
  for (int dj = -2; dj <= 2; dj++) {
    for (int di = -2; di <= 2; di++) {
      vec2 c = g + vec2(float(di), float(dj));
      if (c.x < 0.0 || c.y < 0.0 || c.x >= uGridN || c.y >= uGridN) continue;
      float w = binomW(di) * binomW(dj);
      sum += texture2D(uHeightTex, (c + 0.5) / uGridN).r * w;
      wsum += w;
    }
  }
  // 中心 tap 必在界内，wsum > 0 恒成立
  vEdgeDepth = sum / wsum;
  vSpeed = aSpeed;
  vNormal = normalize(normalMatrix * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPosition = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
  #include <logdepthbuf_vertex>
}
`,eE=`/**
 * 水面片元着色器
 *
 * 渲染流程概览：
 *   1. 基础体色：按水深在浅水色/深水色之间插值；
 *   2. 不透明度：岸缘淡出 × 浅水减淡 × 全局系数；
 *   3. 波纹(可开关)：三层流动梯度噪声求梯度得微法线，并调制明暗斑驳；
 *   4. Schlick 菲涅尔按视角增益已存在水体的不透明度；
 *   5. 场景灯光(平行光+环境光+半球光)的漫反射 + Blinn-Phong 高光增强立体感。
 */

// ---- 可调 uniform(由 WaterMaterial 从全局 params 同步) ----
uniform vec3 uShallow;       // 浅水颜色
uniform vec3 uDeep;          // 深水颜色
uniform float uOpacity;      // 全局基础不透明度
uniform float uTime;         // 累计时间(秒)，驱动波场滚动
uniform float uShowWaves;    // 波纹开关(>0.5 启用)
uniform float uWaveScale;    // 波场空间频率缩放(越大波纹越密)

// ---- 灯光 uniform(由 Engine 每帧从场景灯光同步) ----
uniform vec3 uSunDir;        // 平行光方向(已归一化)
uniform vec3 uSunColor;      // 平行光颜色
uniform float uSunIntensity; // 平行光强度
uniform vec3 uAmbientColor;  // 环境光颜色
uniform float uAmbientIntensity; // 环境光强度
uniform vec3 uHemiSkyColor;  // 半球光天顶颜色
uniform vec3 uHemiGroundColor; // 半球光地面颜色
uniform float uHemiIntensity;  // 半球光强度

// ---- 顶点着色器插值输入 ----
varying vec2 vUv;
varying float vDepth;
varying float vEdgeDepth;
varying vec3 vNormal;
varying vec3 vWorldPosition;

// 对数深度缓冲支持
#include <logdepthbuf_pars_fragment>

// 梯度噪声
vec2 hash2(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float gnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = dot(hash2(i), f);
    float b = dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
    float c = dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
    float d = dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float waveField(vec2 p, float t) {
    return gnoise(p * 1.0 + vec2(t * 0.62, t * 0.36)) * 0.58
         + gnoise(p * 2.1 - vec2(t * 0.43, t * 0.57)) * 0.28
         + gnoise(p * 4.3 + vec2(t * 0.27, -t * 0.49)) * 0.14;
}

void main() {
    // 1) 基础体色
    vec3 col = mix(uShallow, uDeep, smoothstep(0.5, 6.0, vDepth));
    // 2) 不透明度
    float edgeAlpha = smoothstep(0.0, 0.16, vEdgeDepth);
    float depthAlpha = mix(0.6, 1.0, smoothstep(0.05, 3.0, vDepth));
    float alpha = uOpacity * edgeAlpha * depthAlpha;

    // 3) 波纹
    vec3 n = normalize(vNormal);
    if (uShowWaves > 0.5) {
        float t = uTime;
        vec2 p = vUv * vec2(uWaveScale, uWaveScale * (40.0 / 60.0)) * 0.25;
        float e = 0.12;
        float h0 = waveField(p, t);
        float dud = (waveField(p + vec2(e, 0.0), t) - h0) / e * 0.15;
        float dvd = (waveField(p + vec2(0.0, e), t) - h0) / e * 0.15;
        vec3 wn = normalize(vec3(-dud, 1.0, -dvd));
        n = normalize(mix(n, wn, 0.55));
        col += vec3(0.10, 0.13, 0.16) * h0 * 0.9;
    }

    // 4) Schlick 菲涅尔
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    float cosV = max(dot(n, viewDir), 0.0);
    float fres = 0.02 + 0.98 * pow(1.0 - cosV, 4.0);
    alpha = clamp(alpha * (1.0 + fres * 2.0), 0.0, 1.0);

    // 5) 光照：平行光漫反射 + Blinn-Phong 高光 + 环境光 + 半球光
    vec3 sunDir = normalize(uSunDir);
    float diffuse = max(dot(n, sunDir), 0.0);
    col += uSunColor * uSunIntensity * diffuse * 0.45;

    vec3 halfDir = normalize(sunDir + viewDir);
    float spec = pow(max(dot(n, halfDir), 0.0), 48.0);
    col += vec3(1.0) * spec * 0.2;

    col += uAmbientColor * uAmbientIntensity * 0.35;

    float hemiDot = dot(n, vec3(0.0, 1.0, 0.0)) * 0.5 + 0.5;
    col += mix(uHemiGroundColor, uHemiSkyColor, hemiDot) * uHemiIntensity * 0.1;

    gl_FragColor = vec4(col, alpha);
    #include <logdepthbuf_fragment>
}
`;class nE extends bn{constructor(){super({transparent:!0,depthWrite:!1,alphaToCoverage:z.alphaToCoverage,uniforms:{uShallow:{value:new Dt(z.waterShallowColor)},uDeep:{value:new Dt(z.waterDeepColor)},uOpacity:{value:z.waterOpacity},uTime:{value:0},uShowWaves:{value:z.showWaves?1:0},uWaveScale:{value:z.waveScale},uHeightTex:{value:null},uGridN:{value:0},uSunDir:{value:new G(.4,.85,.3).normalize()},uSunColor:{value:new Dt("#fff2dd")},uSunIntensity:{value:1.5},uAmbientColor:{value:new Dt("#ffffff")},uAmbientIntensity:{value:.3},uHemiSkyColor:{value:new Dt("#cfe8ff")},uHemiGroundColor:{value:new Dt("#3c4a38")},uHemiIntensity:{value:1}},vertexShader:tE,fragmentShader:eE,side:Pn})}update(t){this.uniforms.uTime.value+=t,this.uniforms.uShallow.value.set(z.waterShallowColor),this.uniforms.uDeep.value.set(z.waterDeepColor),this.uniforms.uOpacity.value=z.waterOpacity,this.uniforms.uShowWaves.value=z.showWaves?1:0,this.uniforms.uWaveScale.value=z.waveScale,this.alphaToCoverage=z.alphaToCoverage}}const iE=4;class sE extends Ze{constructor(e){const i=It.x/2,s=It.z/2,r=It.x/e,o=It.z/e,a=e*e,l=new Float32Array(a*3),c=new Float32Array(a),u=new Float32Array(a),h=new Float32Array(a);for(let y=0;y<e;y++)for(let b=0;b<e;b++){const M=y*e+b;l[M*3]=b*r-i,l[M*3+2]=y*o-s}const d=new Uint32Array((e-1)*(e-1)*6);let m=0;for(let y=0;y<e-1;y++)for(let b=0;b<e-1;b++){const M=y*e+b,L=M+1,R=M+e,P=M+e+1;d[m++]=M,d[m++]=R,d[m++]=L,d[m++]=L,d[m++]=R,d[m++]=P}const g=new Float32Array(a*2);for(let y=0;y<e;y++)for(let b=0;b<e;b++){const M=y*e+b;g[M*2]=b/(e-1),g[M*2+1]=1-y/(e-1)}const _=new Ne;_.setAttribute("position",new fe(l,3)),_.setAttribute("uv",new fe(g,2)),_.setAttribute("aSpeed",new fe(c,1)),_.setIndex(new fe(d,1)),_.computeVertexNormals();const p=new Bo(h,e,e,kc,on);p.magFilter=Ee,p.minFilter=Ee,p.needsUpdate=!0;const f=new nE;f.uniforms.uHeightTex.value=p,f.uniforms.uGridN.value=e;super(_,f);Z(this,"N");Z(this,"waterPos");Z(this,"waterSpeed");Z(this,"smoothBuf");Z(this,"heightTexture");Z(this,"zeroBuf");Z(this,"normalUpdateFrame",0);this.renderOrder=1,this.visible=!0,this.frustumCulled=!1,this.N=e,this.waterPos=l,this.waterSpeed=c,this.smoothBuf=u,this.heightTexture=p,this.zeroBuf=h}updateFromSolver(e,i){const s=this.N,r=e.h,o=e.bed;if(e.maxWater>5e-4){for(let a=0;a<s;a++)for(let l=0;l<s;l++){const c=a*s+l;this.smoothBuf[c]=(o[c]+r[c])*i}for(let a=0;a<s;a++)for(let l=0;l<s;l++){const c=l>0?l-1:l,u=l<s-1?l+1:l,h=a*s+l,d=a*s+c,m=a*s+u;this.waterPos[h*3+1]=(this.smoothBuf[d]+this.smoothBuf[h]+this.smoothBuf[m])/3}for(let a=0;a<s;a++)for(let l=0;l<s;l++){const c=a>0?a-1:a,u=a<s-1?a+1:a,h=a*s+l,d=c*s+l,m=u*s+l;this.waterPos[h*3+1]=(this.waterPos[d*3+1]+this.waterPos[h*3+1]+this.waterPos[m*3+1])/3}for(let a=0;a<s*s;a++)this.waterSpeed[a]=Math.hypot(e.u[a],e.v[a]);this.syncHeightSource(r),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.aSpeed.needsUpdate=!0,this.normalUpdateFrame===0&&this.geometry.computeVertexNormals(),this.normalUpdateFrame=(this.normalUpdateFrame+1)%iE}}syncHeightSource(e){const i=this.heightTexture.image;i.data!==e&&(i.data=e),this.heightTexture.needsUpdate=!0}clearWater(e,i){const s=this.N;for(let r=0;r<s*s;r++)this.waterPos[r*3+1]=e[r]*i,this.waterSpeed[r]=0;this.syncHeightSource(this.zeroBuf),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.aSpeed.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose(),this.heightTexture.dispose()}}const rE=22,pf=[new Dt("#0088ff"),new Dt("#00ccff"),new Dt("#1fff88"),new Dt("#ffe600"),new Dt("#ff3300")];class oE{constructor(t){Z(this,"group",new ns);Z(this,"solver");Z(this,"N",0);Z(this,"particles",null);Z(this,"particleMat",null);Z(this,"particleGeo",null);Z(this,"particlePos",new Float32Array(0));Z(this,"particleCol",new Float32Array(0));Z(this,"px",new Float32Array(0));Z(this,"pz",new Float32Array(0));Z(this,"pCool",new Float32Array(0));Z(this,"arrows",null);Z(this,"arrowGeo",null);Z(this,"arrowPos",new Float32Array(0));Z(this,"arrowCol",new Float32Array(0));Z(this,"tmpColor",new Dt);this.solver=t,this.rebuild()}rebuild(){this.N=this.solver.Nx,this.dispose(),this.buildParticles(),this.buildArrows()}clear(){for(let t=0;t<this.px.length;t++)this.particlePos[t*3+1]=-9999,this.pCool[t]=0;this.particleGeo&&(this.particleGeo.attributes.position.needsUpdate=!0)}update(t){this.solver.Nx!==this.N&&this.rebuild();const e=this.solver.Nx,i=this.solver.h,s=this.solver.u,r=this.solver.v,o=this.solver.bed,a=z.vertExag,l=It.x/2,c=It.z/2,u=It.x/e,h=It.z/e;this.particles&&(this.particles.visible=z.particles,this.particleMat&&(this.particleMat.size=z.particleSize),z.particles&&this.updateParticles(t,e,u,h,l,c,a,i,s,r,o)),this.arrows&&(this.arrows.visible=z.showArrows,z.showArrows&&this.updateArrows(e,u,h,l,c,a,i,s,r,o))}dispose(){var t,e,i,s,r;this.group.clear(),(t=this.particleGeo)==null||t.dispose(),(e=this.arrowGeo)==null||e.dispose(),(s=(i=this.particleMat)==null?void 0:i.map)==null||s.dispose(),(r=this.particleMat)==null||r.dispose(),this.particles=null,this.arrows=null,this.particleMat=null}buildParticles(){const t=Math.max(1,Math.floor(z.particleCount));this.particlePos=new Float32Array(t*3),this.particleCol=new Float32Array(t*3),this.px=new Float32Array(t),this.pz=new Float32Array(t),this.pCool=new Float32Array(t),this.particleGeo=new Ne,this.particleGeo.setAttribute("position",new fe(this.particlePos,3)),this.particleGeo.setAttribute("color",new fe(this.particleCol,3)),this.particleMat=new Jc({size:z.particleSize,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,depthTest:!1,blending:rs,sizeAttenuation:!1,map:aE(),alphaTest:.05}),this.particles=new rp(this.particleGeo,this.particleMat),this.particles.renderOrder=2,this.particles.frustumCulled=!1,this.particles.visible=z.particles,this.group.add(this.particles);for(let e=0;e<t;e++)this.px[e]=Math.random()*(this.N-1),this.pz[e]=Math.random()*(this.N-1)}updateParticles(t,e,i,s,r,o,a,l,c,u,h){const d=this.px.length,m=this.particlePos,g=this.particleCol,_=3;for(let p=0;p<d;p++){let f=this.px[p],y=this.pz[p];if(f<=0||f>=e-1||y<=0||y>=e-1){if(this.pCool[p]>0){m[p*3+1]=-9999,this.pCool[p]--;continue}if(!this.respawn(p,e,l)){m[p*3+1]=-9999,this.pCool[p]=90;continue}f=this.px[p],y=this.pz[p]}const b=Math.floor(f),M=Math.min(e-1,b+1),L=Math.floor(y),R=Math.min(e-1,L+1),P=f-b,N=y-L,T=_n(_n(c[L*e+b],c[L*e+M],P),_n(c[R*e+b],c[R*e+M],P),N),S=_n(_n(u[L*e+b],u[L*e+M],P),_n(u[R*e+b],u[R*e+M],P),N),D=_n(_n(l[L*e+b],l[L*e+M],P),_n(l[R*e+b],l[R*e+M],P),N),O=_n(_n(h[L*e+b],h[L*e+M],P),_n(h[R*e+b],h[R*e+M],P),N),H=Math.hypot(T,S);if(D<.02){m[p*3+1]=-9999,this.pCool[p]=30;continue}if(this.pCool[p]=0,this.px[p]+=T/i*_*t,this.pz[p]+=S/s*_*t,f=this.px[p],y=this.pz[p],f<=0||f>=e-1||y<=0||y>=e-1){m[p*3+1]=-9999,this.respawn(p,e,l);continue}m[p*3]=f*i-r,m[p*3+1]=O*a+.3,m[p*3+2]=y*s-o,this.speedColor(H,this.tmpColor);const Q=this.tmpColor;g[p*3]=Q.r,g[p*3+1]=Q.g,g[p*3+2]=Q.b}this.particleGeo.attributes.position.needsUpdate=!0,this.particleGeo.attributes.color.needsUpdate=!0}respawn(t,e,i){for(let s=0;s<40;s++){const r=1+Math.random()*(e-2),o=1+Math.random()*(e-2),a=Math.floor(o)*e+Math.floor(r);if(i[a]>.03)return this.px[t]=r,this.pz[t]=o,!0}return this.px[t]=0,this.pz[t]=0,!1}buildArrows(){this.arrowPos=new Float32Array(400*6),this.arrowCol=new Float32Array(400*6),this.arrowGeo=new Ne,this.arrowGeo.setAttribute("position",new fe(this.arrowPos,3)),this.arrowGeo.setAttribute("color",new fe(this.arrowCol,3));const i=new Zc({vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1,blending:Cl});this.arrows=new sp(this.arrowGeo,i),this.arrows.renderOrder=2,this.arrows.visible=z.showArrows,this.group.add(this.arrows)}updateArrows(t,e,i,s,r,o,a,l,c,u){const d=(t-1)/19,m=this.arrowPos,g=this.arrowCol,_=3.2;for(let p=0;p<20;p++)for(let f=0;f<20;f++){const y=f*d,b=p*d,M=Math.floor(y),R=Math.floor(b)*t+M,P=y*e-s,N=b*i-r,T=(u[R]+a[R])*o+.4,S=Math.hypot(l[R],c[R]),D=l[R]/(S+.01)*Math.min(S,10)*_,O=c[R]/(S+.01)*Math.min(S,10)*_,H=(p*20+f)*6;m[H]=P,m[H+1]=T,m[H+2]=N,m[H+3]=P+D,m[H+4]=T,m[H+5]=N+O,this.speedColor(S,this.tmpColor);const Q=this.tmpColor;g[H]=Q.r,g[H+1]=Q.g,g[H+2]=Q.b,g[H+3]=Q.r,g[H+4]=Q.g,g[H+5]=Q.b}this.arrowGeo.attributes.position.needsUpdate=!0,this.arrowGeo.attributes.color.needsUpdate=!0}speedColor(t,e){const i=Math.min(t/rE,1),s=Math.min(Math.floor(i*4),3),r=i*4-s;e.copy(pf[s]).lerp(pf[s+1],r)}}function _n(n,t,e){return n+(t-n)*e}function aE(){const n=document.createElement("canvas");n.width=n.height=32;const t=n.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,0.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),new Qc(n)}class lE{constructor(t){Z(this,"group",new ns);Z(this,"solver");Z(this,"N",0);Z(this,"waterMesh",null);Z(this,"waterSystem",null);Z(this,"lastFieldVersion",null);this.solver=t,this.rebuild()}setSolver(t){this.solver=t,this.rebuild()}rebuild(){this.N=this.solver.Nx,this.lastFieldVersion=null,this.disposeVisuals(),this.waterMesh=new sE(this.N),this.group.add(this.waterMesh),this.waterSystem=new oE(this.solver),this.group.add(this.waterSystem.group)}clear(){var t;this.lastFieldVersion=null,this.waterMesh&&(this.waterMesh.clearWater(this.solver.bed,z.vertExag),(t=this.waterSystem)==null||t.clear())}update(t){var r;this.solver.Nx!==this.N&&this.rebuild();const e=z.vertExag,i=this.solver.fieldVersion,s=i===void 0||i!==this.lastFieldVersion;this.solver.maxWater>5e-4&&s&&(this.waterMesh.updateFromSolver(this.solver,e),this.lastFieldVersion=i??null),this.waterMesh.material.update(t),(r=this.waterSystem)==null||r.update(t)}updateLights(t,e,i,s,r,o,a,l){var u;const c=(u=this.waterMesh)==null?void 0:u.material.uniforms;c&&(c.uSunDir.value.copy(t),c.uSunColor.value.copy(e),c.uSunIntensity.value=i,c.uAmbientColor.value.copy(s),c.uAmbientIntensity.value=r,c.uHemiSkyColor.value.copy(o),c.uHemiGroundColor.value.copy(a),c.uHemiIntensity.value=l)}disposeVisuals(){var t,e;this.group.clear(),(t=this.waterMesh)==null||t.dispose(),this.waterMesh=null,(e=this.waterSystem)==null||e.dispose(),this.waterSystem=null}}const cE=6;class uE{constructor(t){Z(this,"renderer");Z(this,"scene",new ip);Z(this,"camera");Z(this,"controls");Z(this,"clock",new hy);Z(this,"raf",0);Z(this,"container");Z(this,"resizeObs");Z(this,"terrain",null);Z(this,"terrainData",null);Z(this,"solver",null);Z(this,"water",null);Z(this,"rainSystem",null);Z(this,"boundsHelper",null);Z(this,"flatHelper",null);Z(this,"raycaster",new fy);Z(this,"lastSimNx",z.simNx);Z(this,"lastSimNz",z.simNz);Z(this,"lastMode",z.mode);Z(this,"lastTool",z.tool);Z(this,"lastParticleCount",z.particleCount);Z(this,"lastSkyMode",z.skyMode);Z(this,"lastNightBrightness",z.nightBrightness);Z(this,"skyMat",null);Z(this,"hemiLight",null);Z(this,"dirLight",null);Z(this,"ambientLight",null);Z(this,"teapotMesh",null);Z(this,"lastPointerWorld",null);Z(this,"lastBrushWorld",null);Z(this,"fillDownScreen",null);Z(this,"fpsAcc",0);Z(this,"fpsFrames",0);Z(this,"onPointerDown",t=>{z.tool==="orbit"||z.tool==="rain"||!this.solver||(this.lastPointerWorld=this.pickWorld(t),z.tool==="sprinkle"&&(this.lastBrushWorld=this.lastPointerWorld),z.tool==="fill"&&(this.fillDownScreen={x:t.clientX,y:t.clientY}))});Z(this,"onPointerMove",t=>{const e=this.pickWorld(t);if(e&&Zo.value&&this.terrainData){ai.lon=rn.west+(e.x+It.x/2)/It.x*(rn.east-rn.west),ai.lat=rn.south+(e.z+It.z/2)/It.z*(rn.north-rn.south),ai.elevation=this.terrainData.sampleWorld(e.x,e.z);const s=this.solver;if(s){const r=s.Nx,o=s.Nz,a=s.cellX,l=s.cellZ,c=Math.floor((e.x+It.x/2)/a),u=Math.floor((e.z+It.z/2)/l);if(c>=0&&c<r&&u>=0&&u<o){const h=u*r+c;ai.waterDepth=Math.max(0,s.h[h])}else ai.waterDepth=0}}const i=this.solver;if(i&&!(z.tool==="orbit"||z.tool==="rain")&&e){if(z.tool==="sprinkle")this.lastBrushWorld=e;else if(z.tool==="push"){if(this.lastPointerWorld){const s=e.x-this.lastPointerWorld.x,r=e.z-this.lastPointerWorld.z,o=Math.hypot(s,r);if(o>.5){const a=Math.min(o,12)*z.pushStrength*.003;i.addPush(e.x,e.z,s/o*a,r/o*a,1,z.pushRadius)}}this.lastBrushWorld=e}this.lastPointerWorld=e}});Z(this,"onPointerUp",t=>{if(z.tool==="fill"&&this.fillDownScreen&&Math.hypot(t.clientX-this.fillDownScreen.x,t.clientY-this.fillDownScreen.y)<=cE){const i=this.pickWorld(t);i&&this.addFillWater(i.x,i.z)}this.fillDownScreen=null,this.lastPointerWorld=null});Z(this,"animate",()=>{var e,i;this.raf=requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.05);if((z.skyMode!==this.lastSkyMode||z.nightBrightness!==this.lastNightBrightness)&&(this.lastSkyMode=z.skyMode,this.lastNightBrightness=z.nightBrightness,this.applySky()),this.solver&&this.water){if(z.tool!==this.lastTool&&(this.lastTool==="rain"&&z.tool!=="rain"&&((i=(e=this.solver).syncState)==null||i.call(e)),this.lastTool=z.tool,this.lastPointerWorld=null,this.lastBrushWorld=null),z.mode!==this.lastMode?(this.lastMode=z.mode,this.lastSimNx=z.simNx,this.lastSimNz=z.simNz,this.rebuildSolver()):(z.simNx!==this.lastSimNx||z.simNz!==this.lastSimNz)&&(this.lastSimNx=z.simNx,this.lastSimNz=z.simNz,this.solver.setSize(z.simNx,z.simNz),this.water.rebuild()),z.particleCount!==this.lastParticleCount&&(this.lastParticleCount=z.particleCount,this.water.rebuild()),this.terrain&&(this.terrain.scale.y=z.vertExag,this.boundsHelper&&this.terrain.geometry.boundingBox)){const s=this.terrain.geometry.boundingBox,r=this.boundsHelper.box;r.min.set(s.min.x,0,s.min.z),r.max.set(s.max.x,s.max.y*z.vertExag,s.max.z)}if(this.teapotMesh&&(z.tool==="sprinkle"&&this.lastBrushWorld?(this.teapotMesh.visible=!0,this.teapotMesh.position.x=this.lastBrushWorld.x-200,this.teapotMesh.position.y=this.lastBrushWorld.y+1800,this.teapotMesh.position.z=this.lastBrushWorld.z):this.teapotMesh.visible=!1),z.tool==="sprinkle"&&this.lastBrushWorld){const s=this.lastBrushWorld;this.solver.addWater(s.x,s.z,z.brushRainRate,t,z.waterRadius)}z.tool==="rain"&&z.rain>0&&this.solver.addRain(t),this.solver.step(t),this.water.update(t),ze.volume=this.solver.getVolume(),ze.infiltratedVolume=this.solver.infiltratedVolume??0,ze.maxWater=this.solver.maxWater,ze.simTime=this.solver.simTime}if(this.water&&this.dirLight&&this.ambientLight&&this.hemiLight&&this.water.updateLights(this.dirLight.position,this.dirLight.color,this.dirLight.intensity,this.ambientLight.color,this.ambientLight.intensity,this.hemiLight.color,this.hemiLight.groundColor,this.hemiLight.intensity),this.terrain&&this.terrain.update({rampBlend:z.rampBlend,wireframe:z.wireframe}),this.boundsHelper&&(this.boundsHelper.visible=z.showBounds),this.flatHelper&&(this.flatHelper.visible=z.showBounds),this.rainSystem){const s=z.tool==="rain"&&z.rain>0?"rain":z.tool==="sprinkle"?"brush":null;if(this.rainSystem.setMode(s),s){const r=this.lastBrushWorld,o=this.controls.target;this.rainSystem.update(t,s,s==="brush"?r?r.x:0:o.x,s==="brush"?r?r.z:0:o.z,s==="brush"?z.waterRadius:2200)}}this.fpsAcc+=t,this.fpsFrames++,this.fpsAcc>=.5&&(ze.fps=Math.round(this.fpsFrames/this.fpsAcc),this.fpsAcc=0,this.fpsFrames=0),this.controls.update(),this.renderer.render(this.scene,this.camera)});this.container=t,this.renderer=new iy({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0,logarithmicDepthBuffer:!0}),this.camera=new xn(50,t.clientWidth/t.clientHeight,1,3e4),this.resizeObs=new ResizeObserver(()=>this.onResize()),this.controls=new my(this.camera,this.renderer.domElement),this.controls.target.set(0,60,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=300,this.controls.maxDistance=16e3,this.controls.maxPolarAngle=Math.PI*.495,this.controls.update(),zs.current=this}async init(){this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.toneMapping=Rd,this.renderer.toneMappingExposure=1.05,this.renderer.domElement.style.touchAction="none",this.container.appendChild(this.renderer.domElement),this.scene.background=new Dt("#a9c6e8"),this.scene.fog=new ea("#a9c6e8",7e3,16e3),this.camera.position.set(500,3e3,4200),this.buildSky(),this.buildLights();const t="./";this.terrain=new iu(1),await this.terrain.load(t+"texture-terrain.png"),this.terrainData=this.terrain.terrainData,ze.terrainMin=this.terrainData.minElev,ze.terrainMax=this.terrainData.maxElev,ze.terrainRange=this.terrainData.range,n_(this.terrainData.metadata),this.rainSystem=new Ly(4e3,(o,a)=>{const l=this.terrainData;return l?(l.sampleWorld(o,a)-l.minElev)*z.vertExag:0},t+"rain.png"),this.scene.add(this.rainSystem.group),this.scene.add(this.terrain),this.terrain.scale.y=z.vertExag,this.terrain.geometry.computeBoundingBox();const e=this.terrain.geometry.boundingBox.clone();e.min.y=0,this.boundsHelper=new of(e,"#ffff44"),this.scene.add(this.boundsHelper);const i=new tr(new G(-It.x/2,-.1,-It.z/2),new G(It.x/2,.1,It.z/2));this.flatHelper=new of(i,"#00ff88"),this.scene.add(this.flatHelper),this.buildBasePlane(),this.solver=this.createSolver(),this.water=new lE(this.solver),this.scene.add(this.water.group);const s=new Cy(80),r=new ry({color:"#FFFFFF",emissive:"#FFFFFF",emissiveIntensity:.3});this.teapotMesh=new Ze(s,r),this.teapotMesh.visible=!1,this.teapotMesh.rotation.z=-Math.PI/3,this.scene.add(this.teapotMesh),this.bindEvents(),this.resizeObs.observe(this.container),this.applySky(),this.clock.start(),this.animate()}buildSky(){const t=new tu(14e3,32,16),e=new bn({side:Je,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new Dt("#7ec4ff")},uHorizon:{value:new Dt("#e8f2fb")}},vertexShader:Dy,fragmentShader:Py}),i=new Ze(t,e);i.renderOrder=-1,this.skyMat=e,this.scene.add(i)}buildLights(){const t=new oy("#cfe8ff","#3c4a38",1);this.scene.add(t),this.hemiLight=t;const e=new cy("#fff2dd",1.5);e.position.set(3500,2e3,-2500),this.scene.add(e),this.dirLight=e;const i=new uy("#ffffff",.5);this.scene.add(i),this.ambientLight=i}applySky(){var s;const t=z.skyMode==="night",e=z.nightBrightness;this.scene.background=new Dt(t?"#0b1020":"#a9c6e8"),this.scene.fog=new ea(t?"#0b1020":"#a9c6e8",t?4e3:7e3,t?13e3:16e3),this.skyMat&&(this.skyMat.uniforms.uTop.value=new Dt(t?"#050a18":"#7ec4ff"),this.skyMat.uniforms.uHorizon.value=new Dt(t?"#223057":"#e8f2fb")),this.hemiLight&&(this.hemiLight.intensity=t?.45*e:.9,this.hemiLight.color.set(t?"#243155":"#cfe8ff"),this.hemiLight.groundColor.set(t?"#0d1210":"#3c4a38")),this.dirLight&&(this.dirLight.intensity=t?.7*e:1.5,this.dirLight.color.set(t?"#8fa7e0":"#fff2dd")),this.ambientLight&&(this.ambientLight.intensity=t?.15*e:.3,this.ambientLight.color.set(t?"#2c3a66":"#ffffff"));const i=(s=this.terrain)==null?void 0:s.material;i&&(i.uniforms.uSkyColor.value=new Dt(t?"#16203a":"#cfe8ff"),i.uniforms.uGroundColor.value=new Dt(t?"#0a0f16":"#3d5a3a"),i.uniforms.uAmbient.value=t?.18*e:.35,i.uniforms.uSunIntensity.value=t?.55*e:1.1)}buildBasePlane(){const t=It.x*1.1,e=It.z*1.1,i=new er(t,e);i.rotateX(-Math.PI/2);const s=new Yc({color:"#888",transparent:!0,opacity:.6}),r=new Ze(i,s);this.scene.add(r)}createSolver(){if(!this.terrainData)throw new Error("terrainData 尚未初始化");return z.mode==="gpu"?new Wy(this.renderer,this.terrainData,z):new Vy(this.terrainData,z)}rebuildSolver(){var t,e,i;(e=(t=this.solver)==null?void 0:t.dispose)==null||e.call(t),this.solver=this.createSolver(),(i=this.water)==null||i.setSolver(this.solver),Is(`已切换至 ${z.mode==="gpu"?"GPU":"CPU"} 求解，水体已清空`)}bindEvents(){this.renderer.domElement.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp)}pickWorld(t){const e=this.renderer.domElement.getBoundingClientRect(),i=new Ht((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1);this.raycaster.setFromCamera(i,this.camera);const s=this.terrain;if(!s)return null;const r=this.raycaster.intersectObject(s,!1);if(r.length===0)return null;const o=r[0].point;return Math.abs(o.x)>It.x/2||Math.abs(o.z)>It.z/2?null:o}resetWater(){var t,e;(t=this.solver)==null||t.reset(),(e=this.water)==null||e.clear()}flood(){const t=this.solver;if(!t)return;const e=t.Nx*t.Nz,i=new Float64Array(e);for(let r=0;r<e;r++)i[r]=t.bed[r]+t.h[r];const s=Uy(i,t_,t.cellX*t.cellZ);t.fillToLevel(s)}async copySceneImage(){var t;if(this.renderer.render(this.scene,this.camera),!((t=navigator.clipboard)!=null&&t.write)||typeof ClipboardItem>"u"){window.alert("当前浏览器不支持复制图片到剪贴板");return}try{const e=await new Promise((i,s)=>{this.renderer.domElement.toBlob(r=>{r?i(r):s(new Error("场景图生成失败"))},"image/png")});await navigator.clipboard.write([new ClipboardItem({[e.type]:e})])}catch(e){console.error(e),window.alert("复制场景图失败，请检查浏览器剪贴板权限")}}dispose(){var t,e,i,s;cancelAnimationFrame(this.raf),(t=this.resizeObs)==null||t.disconnect(),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this.renderer&&(this.renderer.domElement.removeEventListener("pointerdown",this.onPointerDown),(e=this.rainSystem)==null||e.dispose(),(s=(i=this.solver)==null?void 0:i.dispose)==null||s.call(i),this.renderer.dispose(),this.renderer.domElement.parentElement===this.container&&this.container.removeChild(this.renderer.domElement),zs.current===this&&(zs.current=null))}onResize(){const t=this.container.clientWidth,e=this.container.clientHeight;t===0||e===0||(this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e))}addFillWater(t,e){const i=this.solver;i&&i.addVolume(t,e,z.fillVolume,z.fillRadius)}}const hE={class:"map-info-overlay"},fE={class:"info-row"},dE={class:"info-val"},pE={class:"info-row"},mE={class:"info-val"},gE={class:"info-row"},_E={class:"info-val"},vE={class:"info-row"},xE={class:"info-val"},ME={class:"info-row"},SE={class:"info-val"},yE={class:"info-row"},EE={class:"info-val"},bE={class:"info-row"},TE={class:"info-val"},wE=Oi({__name:"MapInfoOverlay",setup(n){const t=sn(()=>Zo?`${rn.west.toFixed(4)}° ~ ${rn.east.toFixed(4)}°`:"--"),e=sn(()=>Zo?`${rn.south.toFixed(4)}° ~ ${rn.north.toFixed(4)}°`:"--"),i=sn(()=>`${ze.terrainMin.toFixed(0)} ~ ${ze.terrainMax.toFixed(0)} m`),s=sn(()=>`${ze.terrainRange.toFixed(0)} m`),r=sn(()=>`${ze.maxWater.toFixed(2)} m`),o=sn(()=>`${(ze.volume/1e4).toFixed(2)} 万 m³`),a=sn(()=>`${(ze.infiltratedVolume/1e4).toFixed(2)} 万 m³`),l=sn(()=>{const c=ze.simTime;return c>=86400?`${(c/86400).toFixed(3)} 日`:c>=3600?`${(c/3600).toFixed(3)} 时`:c>=60?`${(c/60).toFixed(3)} 分`:`${c.toFixed(3)} 秒`});return(c,u)=>(Ie(),fn("div",hE,[U("div",fE,[u[0]||(u[0]=U("span",{class:"info-label"},"经度",-1)),U("span",dE,Zt(t.value),1)]),U("div",pE,[u[1]||(u[1]=U("span",{class:"info-label"},"纬度",-1)),U("span",mE,Zt(e.value),1)]),U("div",gE,[u[2]||(u[2]=U("span",{class:"info-label"},"高度",-1)),U("span",_E,Zt(i.value)+" △ "+Zt(s.value),1)]),u[7]||(u[7]=U("div",{class:"divider"},null,-1)),U("div",vE,[u[3]||(u[3]=U("span",{class:"info-label"},"推演时长",-1)),U("span",xE,Zt(l.value),1)]),U("div",ME,[u[4]||(u[4]=U("span",{class:"info-label"},"地面水量",-1)),U("span",SE,Zt(o.value),1)]),U("div",yE,[u[5]||(u[5]=U("span",{class:"info-label"},"下渗水量",-1)),U("span",EE,Zt(a.value),1)]),U("div",bE,[u[6]||(u[6]=U("span",{class:"info-label"},"最大水深",-1)),U("span",TE,Zt(r.value),1)])]))}}),AE=cs(wE,[["__scopeId","data-v-761edb13"]]),CE=Oi({__name:"SceneCanvas",setup(n){const t=Qs();let e=null;return pa(async()=>{e=new uE(t.value),await e.init()}),Ic(()=>{e==null||e.dispose(),e=null}),(i,s)=>(Ie(),fn("div",{ref_key:"container",ref:t,class:"scene-canvas"},null,512))}}),RE=cs(CE,[["__scopeId","data-v-008d1225"]]),PE={class:"section"},DE={class:"section-body"},Rs=Oi({__name:"Section",props:{title:{type:String,required:!0},defaultOpen:{type:Boolean,default:!0}},setup(n){const t=n,e=Qs(t.defaultOpen);return yr(()=>t.defaultOpen,i=>{e.value=i}),(i,s)=>(Ie(),fn("div",PE,[U("div",{class:"section-header",onClick:s[0]||(s[0]=r=>e.value=!e.value)},[U("span",{class:Mn(["arrow",{open:e.value}])},"▶",2),U("span",null,Zt(n.title),1)]),le(U("div",DE,[Sm(i.$slots,"default")],512),[[xg,e.value]])]))}}),LE={class:"side-panel"},IE={class:"panel-content"},UE={class:"row"},NE={class:"control"},FE={class:"vs-seg"},OE={class:"row"},BE={class:"val-mono"},zE={class:"control"},VE={class:"row"},HE={class:"val-mono"},kE={class:"control"},GE={class:"row"},WE={class:"control inline"},XE={class:"row"},qE={class:"control inline"},YE={class:"row"},jE={class:"control"},$E={class:"vs-seg"},KE=["onClick"],ZE={class:"row"},JE={class:"control"},QE=["value"],t1={class:"row"},e1={class:"val-mono"},n1={class:"control"},i1={class:"row"},s1={class:"val-mono"},r1={class:"control"},o1={class:"row"},a1={class:"val-mono"},l1={class:"control"},c1={class:"row"},u1={class:"val-mono"},h1={class:"control"},f1={class:"row"},d1={class:"val-mono"},p1={class:"control"},m1={class:"row"},g1={class:"val-mono"},_1={class:"control"},v1={class:"row"},x1={class:"val-mono"},M1={class:"control"},S1={class:"row"},y1={class:"val-mono"},E1={class:"control"},b1={class:"row"},T1={class:"control inline"},w1={class:"row"},A1={class:"control inline"},C1={class:"row"},R1={class:"val-mono"},P1={class:"control"},D1={class:"row"},L1={class:"val-mono"},I1={class:"control"},U1={class:"row"},N1={class:"val-mono"},F1={class:"control"},O1={class:"row"},B1={class:"val-mono"},z1={class:"control"},V1={class:"row"},H1={class:"control inline",style:{width:"52px"}},k1={class:"row"},G1={class:"control inline",style:{width:"52px"}},W1={class:"row"},X1={class:"control inline"},q1={class:"row"},Y1={class:"val-mono"},j1={class:"control"},$1={class:"row"},K1={class:"control inline"},Z1={class:"row"},J1={class:"control inline"},Q1={class:"row"},tb={class:"val-mono"},eb={class:"control"},nb={class:"row"},ib={class:"val-mono"},sb={class:"control"},rb={class:"row"},ob={class:"control inline"},ab=Oi({__name:"SidePanel",setup(n){const t=[{id:"gpu",label:"GPU"},{id:"cpu",label:"CPU"}],e=[128,192,256,384,512];return yr(()=>z.simNx,i=>{z.simNz=i}),(i,s)=>(Ie(),fn("aside",LE,[U("div",IE,[me(Rs,{title:"环境地形参数","default-open":""},{default:Ci(()=>[U("div",UE,[s[30]||(s[30]=U("span",{class:"label"},"天空模式",-1)),U("div",NE,[U("div",FE,[U("button",{class:Mn({active:ct(z).skyMode==="day"}),onClick:s[0]||(s[0]=r=>ct(z).skyMode="day")}," 白天 ",2),U("button",{class:Mn({active:ct(z).skyMode==="night"}),onClick:s[1]||(s[1]=r=>ct(z).skyMode="night")}," 夜晚 ",2)])])]),U("div",OE,[s[31]||(s[31]=U("span",{class:"label"},"垂直夸张",-1)),U("span",BE,Zt(ct(z).vertExag.toFixed(1))+"×",1),U("div",zE,[le(U("input",{"onUpdate:modelValue":s[2]||(s[2]=r=>ct(z).vertExag=r),type:"range",class:"vs-range",min:"1",max:"5",step:"0.1"},null,512),[[Te,ct(z).vertExag,void 0,{number:!0}]])])]),U("div",VE,[s[32]||(s[32]=U("span",{class:"label"},"高程混合",-1)),U("span",HE,Zt(Math.round(ct(z).rampBlend*100))+"%",1),U("div",kE,[le(U("input",{"onUpdate:modelValue":s[3]||(s[3]=r=>ct(z).rampBlend=r),type:"range",class:"vs-range",min:"0",max:"1",step:"0.01"},null,512),[[Te,ct(z).rampBlend,void 0,{number:!0}]])])]),U("div",GE,[s[33]||(s[33]=U("span",{class:"label"},"线框显示",-1)),U("div",WE,[le(U("input",{"onUpdate:modelValue":s[4]||(s[4]=r=>ct(z).wireframe=r),type:"checkbox",class:"vs-check"},null,512),[[Mi,ct(z).wireframe]])])]),U("div",XE,[s[34]||(s[34]=U("span",{class:"label"},"包围框",-1)),U("div",qE,[le(U("input",{"onUpdate:modelValue":s[5]||(s[5]=r=>ct(z).showBounds=r),type:"checkbox",class:"vs-check"},null,512),[[Mi,ct(z).showBounds]])])])]),_:1}),me(Rs,{title:"流体仿真参数","default-open":""},{default:Ci(()=>[U("div",YE,[s[35]||(s[35]=U("span",{class:"label"},"算法模式",-1)),U("div",jE,[U("div",$E,[(Ie(),fn(He,null,xu(t,r=>U("button",{key:r.id,class:Mn({active:ct(z).mode===r.id}),onClick:o=>ct(z).mode=r.id},Zt(r.label),11,KE)),64))])])]),U("div",ZE,[s[36]||(s[36]=U("span",{class:"label"},"网格分辨率",-1)),U("div",JE,[le(U("select",{"onUpdate:modelValue":s[6]||(s[6]=r=>ct(z).simNx=r),class:"vs-select"},[(Ie(),fn(He,null,xu(e,r=>U("option",{key:r,value:r},Zt(r)+" × "+Zt(r),9,QE)),64))],512),[[Og,ct(z).simNx,void 0,{number:!0}]])])]),U("div",t1,[s[37]||(s[37]=U("span",{class:"label"},"重力 g",-1)),U("span",e1,Zt(ct(z).gravity.toFixed(1)),1),U("div",n1,[le(U("input",{"onUpdate:modelValue":s[7]||(s[7]=r=>ct(z).gravity=r),type:"range",class:"vs-range",min:"0",max:"20",step:"0.1"},null,512),[[Te,ct(z).gravity,void 0,{number:!0}]])])]),U("div",i1,[s[38]||(s[38]=U("span",{class:"label"},"摩擦阻尼",-1)),U("span",s1,Zt(ct(z).friction.toFixed(2)),1),U("div",r1,[le(U("input",{"onUpdate:modelValue":s[8]||(s[8]=r=>ct(z).friction=r),type:"range",class:"vs-range",min:"0",max:"1",step:"0.01"},null,512),[[Te,ct(z).friction,void 0,{number:!0}]])])]),U("div",o1,[s[39]||(s[39]=U("span",{class:"label"},"最大流速",-1)),U("span",a1,Zt(ct(z).maxSpeed.toFixed(0))+" m/s",1),U("div",l1,[le(U("input",{"onUpdate:modelValue":s[9]||(s[9]=r=>ct(z).maxSpeed=r),type:"range",class:"vs-range",min:"2",max:"60",step:"1"},null,512),[[Te,ct(z).maxSpeed,void 0,{number:!0}]])])]),U("div",c1,[s[40]||(s[40]=U("span",{class:"label"},"时间倍率",-1)),U("span",u1,Zt(ct(z).timeScale)+"×",1),U("div",h1,[le(U("input",{"onUpdate:modelValue":s[10]||(s[10]=r=>ct(z).timeScale=r),type:"range",class:"vs-range",min:"1",max:"1440",step:"1"},null,512),[[Te,ct(z).timeScale,void 0,{number:!0}]])])])]),_:1}),me(Rs,{title:"降水模拟参数"},{default:Ci(()=>[U("div",f1,[s[41]||(s[41]=U("span",{class:"label"},"降雨强度",-1)),U("span",d1,Zt(ct(z).rain.toFixed(0))+" mm/h",1),U("div",p1,[le(U("input",{"onUpdate:modelValue":s[11]||(s[11]=r=>ct(z).rain=r),type:"range",class:"vs-range",min:"0",max:"5000",step:"10"},null,512),[[Te,ct(z).rain,void 0,{number:!0}]])])]),U("div",m1,[s[42]||(s[42]=U("span",{class:"label"},"浇水强度",-1)),U("span",g1,Zt(ct(z).brushRainRate.toFixed(1))+" m/s",1),U("div",_1,[le(U("input",{"onUpdate:modelValue":s[12]||(s[12]=r=>ct(z).brushRainRate=r),type:"range",class:"vs-range",min:"1",max:"20",step:"0.1"},null,512),[[Te,ct(z).brushRainRate,void 0,{number:!0}]])])]),U("div",v1,[s[43]||(s[43]=U("span",{class:"label"},"浇灌雨量",-1)),U("span",x1,Zt((ct(z).fillVolume/1e4).toFixed(0))+" 万 m³",1),U("div",M1,[le(U("input",{"onUpdate:modelValue":s[13]||(s[13]=r=>ct(z).fillVolume=r),type:"range",class:"vs-range",min:"100000",max:"10000000",step:"100000"},null,512),[[Te,ct(z).fillVolume,void 0,{number:!0}]])])]),U("div",S1,[s[44]||(s[44]=U("span",{class:"label"},"扰动强度",-1)),U("span",y1,Zt(ct(z).pushStrength.toFixed(0)),1),U("div",E1,[le(U("input",{"onUpdate:modelValue":s[14]||(s[14]=r=>ct(z).pushStrength=r),type:"range",class:"vs-range",min:"50",max:"3000",step:"10"},null,512),[[Te,ct(z).pushStrength,void 0,{number:!0}]])])])]),_:1}),me(Rs,{title:"排水模拟参数"},{default:Ci(()=>[U("div",b1,[s[45]||(s[45]=U("span",{class:"label"},"边界排水",-1)),U("div",T1,[le(U("input",{"onUpdate:modelValue":s[15]||(s[15]=r=>ct(z).drainBoundary=r),type:"checkbox",class:"vs-check"},null,512),[[Mi,ct(z).drainBoundary]])])]),U("div",w1,[s[46]||(s[46]=U("span",{class:"label"},"下渗",-1)),U("div",A1,[le(U("input",{"onUpdate:modelValue":s[16]||(s[16]=r=>ct(z).infiltration=r),type:"checkbox",class:"vs-check"},null,512),[[Mi,ct(z).infiltration]])])]),ct(z).infiltration?(Ie(),fn(He,{key:0},[U("div",C1,[s[47]||(s[47]=U("span",{class:"label"},"初始下渗率",-1)),U("span",R1,Zt(ct(z).infilF0.toFixed(0))+" mm/h",1),U("div",P1,[le(U("input",{"onUpdate:modelValue":s[17]||(s[17]=r=>ct(z).infilF0=r),type:"range",class:"vs-range",min:"10",max:"300",step:"5"},null,512),[[Te,ct(z).infilF0,void 0,{number:!0}]])])]),U("div",D1,[s[48]||(s[48]=U("span",{class:"label"},"稳定下渗率",-1)),U("span",L1,Zt(ct(z).infilFc.toFixed(0))+" mm/h",1),U("div",I1,[le(U("input",{"onUpdate:modelValue":s[18]||(s[18]=r=>ct(z).infilFc=r),type:"range",class:"vs-range",min:"1",max:"100",step:"1"},null,512),[[Te,ct(z).infilFc,void 0,{number:!0}]])])]),U("div",U1,[s[49]||(s[49]=U("span",{class:"label"},"衰减系数",-1)),U("span",N1,Zt(ct(z).infilK.toFixed(1))+" 1/h",1),U("div",F1,[le(U("input",{"onUpdate:modelValue":s[19]||(s[19]=r=>ct(z).infilK=r),type:"range",class:"vs-range",min:"0.5",max:"10",step:"0.1"},null,512),[[Te,ct(z).infilK,void 0,{number:!0}]])])])],64)):Lr("",!0)]),_:1}),me(Rs,{title:"水面渲染参数","default-open":""},{default:Ci(()=>[U("div",O1,[s[50]||(s[50]=U("span",{class:"label"},"透明度",-1)),U("span",B1,Zt(Math.round(ct(z).waterOpacity*100))+"%",1),U("div",z1,[le(U("input",{"onUpdate:modelValue":s[20]||(s[20]=r=>ct(z).waterOpacity=r),type:"range",class:"vs-range",min:"0.1",max:"1",step:"0.01"},null,512),[[Te,ct(z).waterOpacity,void 0,{number:!0}]])])]),U("div",V1,[s[51]||(s[51]=U("span",{class:"label"},"浅水色",-1)),U("div",H1,[le(U("input",{"onUpdate:modelValue":s[21]||(s[21]=r=>ct(z).waterShallowColor=r),type:"color",class:"vs-color"},null,512),[[Te,ct(z).waterShallowColor]])])]),U("div",k1,[s[52]||(s[52]=U("span",{class:"label"},"深水色",-1)),U("div",G1,[le(U("input",{"onUpdate:modelValue":s[22]||(s[22]=r=>ct(z).waterDeepColor=r),type:"color",class:"vs-color"},null,512),[[Te,ct(z).waterDeepColor]])])]),U("div",W1,[s[53]||(s[53]=U("span",{class:"label"},"波光扰动",-1)),U("div",X1,[le(U("input",{"onUpdate:modelValue":s[23]||(s[23]=r=>ct(z).showWaves=r),type:"checkbox",class:"vs-check"},null,512),[[Mi,ct(z).showWaves]])])]),U("div",q1,[s[54]||(s[54]=U("span",{class:"label"},"扰动尺度",-1)),U("span",Y1,Zt(ct(z).waveScale),1),U("div",j1,[le(U("input",{"onUpdate:modelValue":s[24]||(s[24]=r=>ct(z).waveScale=r),type:"range",class:"vs-range",min:"10",max:"500",step:"5"},null,512),[[Te,ct(z).waveScale,void 0,{number:!0}]])])]),U("div",$1,[s[55]||(s[55]=U("span",{class:"label"},"边缘抗锯齿",-1)),U("div",K1,[le(U("input",{"onUpdate:modelValue":s[25]||(s[25]=r=>ct(z).alphaToCoverage=r),type:"checkbox",class:"vs-check"},null,512),[[Mi,ct(z).alphaToCoverage]])])])]),_:1}),me(Rs,{title:"流场模拟参数"},{default:Ci(()=>[U("div",Z1,[s[56]||(s[56]=U("span",{class:"label"},"流动粒子",-1)),U("div",J1,[le(U("input",{"onUpdate:modelValue":s[26]||(s[26]=r=>ct(z).particles=r),type:"checkbox",class:"vs-check"},null,512),[[Mi,ct(z).particles]])])]),U("div",Q1,[s[57]||(s[57]=U("span",{class:"label"},"粒子数量",-1)),U("span",tb,Zt(ct(z).particleCount),1),U("div",eb,[le(U("input",{"onUpdate:modelValue":s[27]||(s[27]=r=>ct(z).particleCount=r),type:"range",class:"vs-range",min:"100",max:"2000",step:"100"},null,512),[[Te,ct(z).particleCount,void 0,{number:!0}]])])]),U("div",nb,[s[58]||(s[58]=U("span",{class:"label"},"粒子尺寸",-1)),U("span",ib,Zt(ct(z).particleSize.toFixed(0)),1),U("div",sb,[le(U("input",{"onUpdate:modelValue":s[28]||(s[28]=r=>ct(z).particleSize=r),type:"range",class:"vs-range",min:"4",max:"48",step:"2"},null,512),[[Te,ct(z).particleSize,void 0,{number:!0}]])])]),U("div",rb,[s[59]||(s[59]=U("span",{class:"label"},"速度场箭头",-1)),U("div",ob,[le(U("input",{"onUpdate:modelValue":s[29]||(s[29]=r=>ct(z).showArrows=r),type:"checkbox",class:"vs-check"},null,512),[[Mi,ct(z).showArrows]])])]),s[60]||(s[60]=U("p",{class:"hint-text"},[Tr(" 粒子与箭头颜色随流速变化："),U("span",{class:"speed-blue"},"蓝"),Tr("→"),U("span",{class:"speed-green"},"绿"),Tr("→"),U("span",{class:"speed-red"},"红")],-1))]),_:1})])]))}}),lb=cs(ab,[["__scopeId","data-v-9f9fa050"]]),cb={name:"GuoJiangFeng",email:"hz_gjf@163.com"},ub={author:cb},hb={class:"statusbar"},fb={class:"sb-group"},db={class:"sb-item"},pb={class:"sb-item"},mb={class:"sb-item"},gb={class:"sb-item"},_b={class:"sb-group"},vb={class:"sb-item"},xb={class:"sb-item"},Mb=Oi({__name:"StatusBar",setup(n){const t=ub.author,e=sn(()=>`${t.name} ©2026 <${t.email}>`),i=sn(()=>ai.lon.toFixed(6)),s=sn(()=>ai.lat.toFixed(6)),r=sn(()=>ai.elevation.toFixed(1)),o=sn(()=>ai.waterDepth.toFixed(2));return(a,l)=>(Ie(),fn("footer",hb,[U("div",fb,[l[0]||(l[0]=U("div",{class:"sb-item"},[U("i",{class:"dot"}),Tr("就绪")],-1)),U("div",db,"经度 "+Zt(i.value)+"°",1),U("div",pb,"纬度 "+Zt(s.value)+"°",1),U("div",mb,"高程 "+Zt(r.value)+" m",1),U("div",gb,"水深 "+Zt(o.value)+" m",1)]),U("div",_b,[U("div",vb,"FPS "+Zt(ct(ze).fps),1),U("div",xb,Zt(e.value),1)])]))}}),Sb=cs(Mb,[["__scopeId","data-v-759fe301"]]),yb={class:"map-toolbar"},Eb=Oi({__name:"Toolbar",setup(n){function t(e,i){const s=e==="rain"&&z.tool==="rain"?"orbit":e;z.tool=s,Is(i)}return(e,i)=>(Ie(),fn("div",yb,[U("button",{class:Mn(["tb-btn",{active:ct(z).tool==="orbit"}]),title:"浏览模式，旋转/缩放视角",onClick:i[0]||(i[0]=s=>t("orbit","浏览模式，旋转/缩放视角"))}," 浏览 ",2),U("button",{class:Mn(["tb-btn",{active:ct(z).tool==="rain"}]),title:"全域普降大雨，水体向低洼地区汇集",onClick:i[1]||(i[1]=s=>t("rain","全域普降大雨，水体向低洼地区汇集"))}," 降雨 ",2),U("button",{class:Mn(["tb-btn",{active:ct(z).tool==="sprinkle"}]),title:"局地强降雨，鼠标指哪下哪，局地内涝",onClick:i[2]||(i[2]=s=>t("sprinkle","局地强降雨，鼠标指哪下哪，局地内涝"))}," 浇水 ",2),U("button",{class:Mn(["tb-btn",{active:ct(z).tool==="fill"}]),title:"点击地图位置，按浇灌雨量倾倒水体",onClick:i[3]||(i[3]=s=>t("fill","点击地图位置，按浇灌雨量倾倒水体"))}," 浇灌 ",2),U("button",{class:Mn(["tb-btn",{active:ct(z).tool==="push"}]),title:"搅动水面，让水流动起来",onClick:i[4]||(i[4]=s=>t("push","搅动水面，让水流动起来"))}," 扰动 ",2),i[8]||(i[8]=U("div",{class:"tb-divider"},null,-1)),U("button",{class:"tb-btn",title:"直接注入3500万立方米水体，淹没低洼区域",onClick:i[5]||(i[5]=s=>{var r;(r=ct(zs).current)==null||r.flood(),ct(Is)("直接注入3500万立方米水体，淹没低洼区域")})}," 淹没 "),U("button",{class:"tb-btn",title:"清空当前水体",onClick:i[6]||(i[6]=s=>{var r;(r=ct(zs).current)==null||r.resetWater(),ct(Is)("清空当前水体")})}," 重置 "),U("button",{class:"tb-btn",title:"复制当前场景图",onClick:i[7]||(i[7]=s=>{var r;(r=ct(zs).current)==null||r.copySceneImage(),ct(Is)("复制当前场景图")})}," 复制 ")]))}}),bb=cs(Eb,[["__scopeId","data-v-43c57028"]]),Tb={class:"app"},wb={class:"app-body"},Ab={class:"canvas-area"},Cb={key:0,class:"canvas-toast"},Rb=Oi({__name:"App",setup(n){const t=Qs(!0),{message:e}=Ry();return(i,s)=>(Ie(),fn("div",Tb,[me(ct(Kg),{"sidebar-visible":t.value,onToggleSidebar:s[0]||(s[0]=r=>t.value=!t.value)},null,8,["sidebar-visible"]),U("div",wb,[t.value?(Ie(),qo(ct(lb),{key:0})):Lr("",!0),U("main",Ab,[me(ct(RE)),me(ct(bb)),me(ct(AE)),me(dg,{name:"toast"},{default:Ci(()=>[ct(e)?(Ie(),fn("div",Cb,Zt(ct(e)),1)):Lr("",!0)]),_:1})])]),me(ct(Sb))]))}}),Pb=cs(Rb,[["__scopeId","data-v-c90e36aa"]]);Vg(Pb).mount("#app");
