var Md=Object.defineProperty;var Sd=(n,t,e)=>t in n?Md(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var nt=(n,t,e)=>Sd(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wl(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ce={},gs=[],Bn=()=>{},Rh=()=>!1,Oo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Bo=n=>n.startsWith("onUpdate:"),Le=Object.assign,Xl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},yd=Object.prototype.hasOwnProperty,ne=(n,t)=>yd.call(n,t),Bt=Array.isArray,vs=n=>vr(n)==="[object Map]",Is=n=>vr(n)==="[object Set]",Fc=n=>vr(n)==="[object Date]",Xt=n=>typeof n=="function",Se=n=>typeof n=="string",wn=n=>typeof n=="symbol",ae=n=>n!==null&&typeof n=="object",Ch=n=>(ae(n)||Xt(n))&&Xt(n.then)&&Xt(n.catch),Ph=Object.prototype.toString,vr=n=>Ph.call(n),Ed=n=>vr(n).slice(8,-1),Dh=n=>vr(n)==="[object Object]",ql=n=>Se(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ir=Wl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zo=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},bd=/-\w/g,Tn=zo(n=>n.replace(bd,t=>t.slice(1).toUpperCase())),Td=/\B([A-Z])/g,Xi=zo(n=>n.replace(Td,"-$1").toLowerCase()),Lh=zo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Qo=zo(n=>n?`on${Lh(n)}`:""),Fn=(n,t)=>!Object.is(n,t),co=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Uh=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Vo=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Oc;const Ho=()=>Oc||(Oc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yl(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Se(i)?Cd(i):Yl(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Se(n)||ae(n))return n}const Ad=/;(?![^(]*\))/g,wd=/:([^]+)/,Rd=/\/\*[^]*?\*\//g;function Cd(n){const t={};return n.replace(Rd,"").split(Ad).forEach(e=>{if(e){const i=e.split(wd);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function fn(n){let t="";if(Se(n))t=n;else if(Bt(n))for(let e=0;e<n.length;e++){const i=fn(n[e]);i&&(t+=i+" ")}else if(ae(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Pd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dd=Wl(Pd);function Ih(n){return!!n||n===""}function Ld(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Ns(n[i],t[i]);return e}function Ns(n,t){if(n===t)return!0;let e=Fc(n),i=Fc(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=wn(n),i=wn(t),e||i)return n===t;if(e=Bt(n),i=Bt(t),e||i)return e&&i?Ld(n,t):!1;if(e=ae(n),i=ae(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Ns(n[o],t[o]))return!1}}return String(n)===String(t)}function jl(n,t){return n.findIndex(e=>Ns(e,t))}const Nh=n=>!!(n&&n.__v_isRef===!0),le=n=>Se(n)?n:n==null?"":Bt(n)||ae(n)&&(n.toString===Ph||!Xt(n.toString))?Nh(n)?le(n.value):JSON.stringify(n,Fh,2):String(n),Fh=(n,t)=>Nh(t)?Fh(n,t.value):vs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[ta(i,r)+" =>"]=s,e),{})}:Is(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ta(e))}:wn(t)?ta(t):ae(t)&&!Bt(t)&&!Dh(t)?String(t):t,ta=(n,t="")=>{var e;return wn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ce;class Ud{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ce&&(Ce.active?(this.parent=Ce,this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Ce;try{return Ce=this,t()}finally{Ce=e}}}on(){++this._on===1&&(this.prevScope=Ce,Ce=this)}off(){if(this._on>0&&--this._on===0){if(Ce===this)Ce=this.prevScope;else{let t=Ce;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Id(){return Ce}let fe;const ea=new WeakSet;class Oh{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ce&&(Ce.active?Ce.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ea.has(this)&&(ea.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bc(this),Vh(this);const t=fe,e=An;fe=this,An=!0;try{return this.fn()}finally{Hh(this),fe=t,An=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Zl(t);this.deps=this.depsTail=void 0,Bc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ea.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ga(this)&&this.run()}get dirty(){return Ga(this)}}let Bh=0,sr,rr;function zh(n,t=!1){if(n.flags|=8,t){n.next=rr,rr=n;return}n.next=sr,sr=n}function $l(){Bh++}function Kl(){if(--Bh>0)return;if(rr){let t=rr;for(rr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;sr;){let t=sr;for(sr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Vh(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Hh(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Zl(i),Nd(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Ga(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Gh(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Gh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ur)||(n.globalVersion=ur,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ga(n))))return;n.flags|=2;const t=n.dep,e=fe,i=An;fe=n,An=!0;try{Vh(n);const s=n.fn(n._value);(t.version===0||Fn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{fe=e,An=i,Hh(n),n.flags&=-3}}function Zl(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Zl(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Nd(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let An=!0;const kh=[];function ii(){kh.push(An),An=!1}function si(){const n=kh.pop();An=n===void 0?!0:n}function Bc(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=fe;fe=void 0;try{t()}finally{fe=e}}}let ur=0;class Fd{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Jl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!fe||!An||fe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==fe)e=this.activeLink=new Fd(fe,this),fe.deps?(e.prevDep=fe.depsTail,fe.depsTail.nextDep=e,fe.depsTail=e):fe.deps=fe.depsTail=e,Wh(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=fe.depsTail,e.nextDep=void 0,fe.depsTail.nextDep=e,fe.depsTail=e,fe.deps===e&&(fe.deps=i)}return e}trigger(t){this.version++,ur++,this.notify(t)}notify(t){$l();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Kl()}}}function Wh(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Wh(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const ka=new WeakMap,Vi=Symbol(""),Wa=Symbol(""),hr=Symbol("");function Fe(n,t,e){if(An&&fe){let i=ka.get(n);i||ka.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Jl),s.map=i,s.key=e),s.track()}}function Zn(n,t,e,i,s,r){const o=ka.get(n);if(!o){ur++;return}const a=l=>{l&&l.trigger()};if($l(),t==="clear")o.forEach(a);else{const l=Bt(n),c=l&&ql(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,d)=>{(d==="length"||d===hr||!wn(d)&&d>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(hr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Vi)),vs(n)&&a(o.get(Wa)));break;case"delete":l||(a(o.get(Vi)),vs(n)&&a(o.get(Wa)));break;case"set":vs(n)&&a(o.get(Vi));break}}Kl()}function Ki(n){const t=ee(n);return t===n?t:(Fe(t,"iterate",hr),mn(n)?t:t.map(Rn))}function Go(n){return Fe(n=ee(n),"iterate",hr),n}function Un(n,t){return ri(n)?Ts(Hi(n)?Rn(t):t):Rn(t)}const Od={__proto__:null,[Symbol.iterator](){return na(this,Symbol.iterator,n=>Un(this,n))},concat(...n){return Ki(this).concat(...n.map(t=>Bt(t)?Ki(t):t))},entries(){return na(this,"entries",n=>(n[1]=Un(this,n[1]),n))},every(n,t){return Gn(this,"every",n,t,void 0,arguments)},filter(n,t){return Gn(this,"filter",n,t,e=>e.map(i=>Un(this,i)),arguments)},find(n,t){return Gn(this,"find",n,t,e=>Un(this,e),arguments)},findIndex(n,t){return Gn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Gn(this,"findLast",n,t,e=>Un(this,e),arguments)},findLastIndex(n,t){return Gn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Gn(this,"forEach",n,t,void 0,arguments)},includes(...n){return ia(this,"includes",n)},indexOf(...n){return ia(this,"indexOf",n)},join(n){return Ki(this).join(n)},lastIndexOf(...n){return ia(this,"lastIndexOf",n)},map(n,t){return Gn(this,"map",n,t,void 0,arguments)},pop(){return Gs(this,"pop")},push(...n){return Gs(this,"push",n)},reduce(n,...t){return zc(this,"reduce",n,t)},reduceRight(n,...t){return zc(this,"reduceRight",n,t)},shift(){return Gs(this,"shift")},some(n,t){return Gn(this,"some",n,t,void 0,arguments)},splice(...n){return Gs(this,"splice",n)},toReversed(){return Ki(this).toReversed()},toSorted(n){return Ki(this).toSorted(n)},toSpliced(...n){return Ki(this).toSpliced(...n)},unshift(...n){return Gs(this,"unshift",n)},values(){return na(this,"values",n=>Un(this,n))}};function na(n,t,e){const i=Go(n),s=i[t]();return i!==n&&!mn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Bd=Array.prototype;function Gn(n,t,e,i,s,r){const o=Go(n),a=o!==n&&!mn(n),l=o[t];if(l!==Bd[t]){const h=l.apply(n,r);return a?Rn(h):h}let c=e;o!==n&&(a?c=function(h,d){return e.call(this,Un(n,h),d,n)}:e.length>2&&(c=function(h,d){return e.call(this,h,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function zc(n,t,e,i){const s=Go(n),r=s!==n&&!mn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=Un(n,c)),e.call(this,c,Un(n,u),h,n)}):e.length>3&&(o=function(c,u,h){return e.call(this,c,u,h,n)}));const l=s[t](o,...i);return a?Un(n,l):l}function ia(n,t,e){const i=ee(n);Fe(i,"iterate",hr);const s=i[t](...e);return(s===-1||s===!1)&&ec(e[0])?(e[0]=ee(e[0]),i[t](...e)):s}function Gs(n,t,e=[]){ii(),$l();const i=ee(n)[t].apply(n,e);return Kl(),si(),i}const zd=Wl("__proto__,__v_isRef,__isVue"),Xh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(wn));function Vd(n){wn(n)||(n=String(n));const t=ee(this);return Fe(t,"has",n),t.hasOwnProperty(n)}class qh{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Kd:Kh:r?$h:jh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Bt(t);if(!s){let l;if(o&&(l=Od[e]))return l;if(e==="hasOwnProperty")return Vd}const a=Reflect.get(t,e,Be(t)?t:i);if((wn(e)?Xh.has(e):zd(e))||(s||Fe(t,"get",e),r))return a;if(Be(a)){const l=o&&ql(e)?a:a.value;return s&&ae(l)?qa(l):l}return ae(a)?s?qa(a):xr(a):a}}class Yh extends qh{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Bt(t)&&ql(e);if(!this._isShallow){const c=ri(r);if(!mn(i)&&!ri(i)&&(r=ee(r),i=ee(i)),!o&&Be(r)&&!Be(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:ne(t,e),l=Reflect.set(t,e,i,Be(t)?t:s);return t===ee(s)&&l&&(a?Fn(i,r)&&Zn(t,"set",e,i):Zn(t,"add",e,i)),l}deleteProperty(t,e){const i=ne(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Zn(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!wn(e)||!Xh.has(e))&&Fe(t,"has",e),i}ownKeys(t){return Fe(t,"iterate",Bt(t)?"length":Vi),Reflect.ownKeys(t)}}class Hd extends qh{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Gd=new Yh,kd=new Hd,Wd=new Yh(!0);const Xa=n=>n,Pr=n=>Reflect.getPrototypeOf(n);function Xd(n,t,e){return function(...i){const s=this.__v_raw,r=ee(s),o=vs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Xa:t?Ts:Rn;return!t&&Fe(r,"iterate",l?Wa:Vi),Le(Object.create(c),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}}})}}function Dr(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function qd(n,t){const e={get(s){const r=this.__v_raw,o=ee(r),a=ee(s);n||(Fn(s,a)&&Fe(o,"get",s),Fe(o,"get",a));const{has:l}=Pr(o),c=t?Xa:n?Ts:Rn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Fe(ee(s),"iterate",Vi),s.size},has(s){const r=this.__v_raw,o=ee(r),a=ee(s);return n||(Fn(s,a)&&Fe(o,"has",s),Fe(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ee(a),c=t?Xa:n?Ts:Rn;return!n&&Fe(l,"iterate",Vi),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Le(e,n?{add:Dr("add"),set:Dr("set"),delete:Dr("delete"),clear:Dr("clear")}:{add(s){const r=ee(this),o=Pr(r),a=ee(s),l=!t&&!mn(s)&&!ri(s)?a:s;return o.has.call(r,l)||Fn(s,l)&&o.has.call(r,s)||Fn(a,l)&&o.has.call(r,a)||(r.add(l),Zn(r,"add",l,l)),this},set(s,r){!t&&!mn(r)&&!ri(r)&&(r=ee(r));const o=ee(this),{has:a,get:l}=Pr(o);let c=a.call(o,s);c||(s=ee(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Fn(r,u)&&Zn(o,"set",s,r):Zn(o,"add",s,r),this},delete(s){const r=ee(this),{has:o,get:a}=Pr(r);let l=o.call(r,s);l||(s=ee(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Zn(r,"delete",s,void 0),c},clear(){const s=ee(this),r=s.size!==0,o=s.clear();return r&&Zn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Xd(s,n,t)}),e}function Ql(n,t){const e=qd(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ne(e,s)&&s in i?e:i,s,r)}const Yd={get:Ql(!1,!1)},jd={get:Ql(!1,!0)},$d={get:Ql(!0,!1)};const jh=new WeakMap,$h=new WeakMap,Kh=new WeakMap,Kd=new WeakMap;function Zd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xr(n){return ri(n)?n:tc(n,!1,Gd,Yd,jh)}function Jd(n){return tc(n,!1,Wd,jd,$h)}function qa(n){return tc(n,!0,kd,$d,Kh)}function tc(n,t,e,i,s){if(!ae(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Zd(Ed(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Hi(n){return ri(n)?Hi(n.__v_raw):!!(n&&n.__v_isReactive)}function ri(n){return!!(n&&n.__v_isReadonly)}function mn(n){return!!(n&&n.__v_isShallow)}function ec(n){return n?!!n.__v_raw:!1}function ee(n){const t=n&&n.__v_raw;return t?ee(t):n}function Qd(n){return!ne(n,"__v_skip")&&Object.isExtensible(n)&&Uh(n,"__v_skip",!0),n}const Rn=n=>ae(n)?xr(n):n,Ts=n=>ae(n)?qa(n):n;function Be(n){return n?n.__v_isRef===!0:!1}function nc(n){return tp(n,!1)}function tp(n,t){return Be(n)?n:new ep(n,t)}class ep{constructor(t,e){this.dep=new Jl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ee(t),this._value=e?t:Rn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||mn(t)||ri(t);t=i?t:ee(t),Fn(t,e)&&(this._rawValue=t,this._value=i?t:Rn(t),this.dep.trigger())}}function vt(n){return Be(n)?n.value:n}const np={get:(n,t,e)=>t==="__v_raw"?n:vt(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Be(s)&&!Be(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Zh(n){return Hi(n)?n:new Proxy(n,np)}class ip{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Jl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ur-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return zh(this,!0),!0}get value(){const t=this.dep.track();return Gh(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function sp(n,t,e=!1){let i,s;return Xt(n)?i=n:(i=n.get,s=n.set),new ip(i,s,e)}const Lr={},yo=new WeakMap;let Ii;function rp(n,t=!1,e=Ii){if(e){let i=yo.get(e);i||yo.set(e,i=[]),i.push(n)}}function op(n,t,e=ce){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=M=>s?M:mn(M)||s===!1||s===0?Jn(M,1):Jn(M);let u,h,d,p,_=!1,g=!1;if(Be(n)?(h=()=>n.value,_=mn(n)):Hi(n)?(h=()=>c(n),_=!0):Bt(n)?(g=!0,_=n.some(M=>Hi(M)||mn(M)),h=()=>n.map(M=>{if(Be(M))return M.value;if(Hi(M))return c(M);if(Xt(M))return l?l(M,2):M()})):Xt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(d){ii();try{d()}finally{si()}}const M=Ii;Ii=u;try{return l?l(n,3,[p]):n(p)}finally{Ii=M}}:h=Bn,t&&s){const M=h,I=s===!0?1/0:s;h=()=>Jn(M(),I)}const m=Id(),f=()=>{u.stop(),m&&m.active&&Xl(m.effects,u)};if(r&&t){const M=t;t=(...I)=>{const C=M(...I);return f(),C}}let b=g?new Array(n.length).fill(Lr):Lr;const T=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(t){const I=u.run();if(M||s||_||(g?I.some((C,P)=>Fn(C,b[P])):Fn(I,b))){d&&d();const C=Ii;Ii=u;try{const P=[I,b===Lr?void 0:g&&b[0]===Lr?[]:b,p];b=I,l?l(t,3,P):t(...P)}finally{Ii=C}}}else u.run()};return a&&a(T),u=new Oh(h),u.scheduler=o?()=>o(T,!1):T,p=M=>rp(M,!1,u),d=u.onStop=()=>{const M=yo.get(u);if(M){if(l)l(M,4);else for(const I of M)I();yo.delete(u)}},t?i?T(!0):b=u.run():o?o(T.bind(null,!0),!0):u.run(),f.pause=u.pause.bind(u),f.resume=u.resume.bind(u),f.stop=f,f}function Jn(n,t=1/0,e){if(t<=0||!ae(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Be(n))Jn(n.value,t,e);else if(Bt(n))for(let i=0;i<n.length;i++)Jn(n[i],t,e);else if(Is(n)||vs(n))n.forEach(i=>{Jn(i,t,e)});else if(Dh(n)){for(const i in n)Jn(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Jn(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mr(n,t,e,i){try{return i?n(...i):n()}catch(s){ko(s,t,e)}}function Cn(n,t,e,i){if(Xt(n)){const s=Mr(n,t,e,i);return s&&Ch(s)&&s.catch(r=>{ko(r,t,e)}),s}if(Bt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Cn(n[r],t,e,i));return s}}function ko(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ce;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){ii(),Mr(r,null,10,[n,l,c]),si();return}}ap(n,e,s,i,o)}function ap(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const ke=[];let Ln=-1;const xs=[];let vi=null,hs=0;const Jh=Promise.resolve();let Eo=null;function Qh(n){const t=Eo||Jh;return n?t.then(this?n.bind(this):n):t}function lp(n){let t=Ln+1,e=ke.length;for(;t<e;){const i=t+e>>>1,s=ke[i],r=fr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function ic(n){if(!(n.flags&1)){const t=fr(n),e=ke[ke.length-1];!e||!(n.flags&2)&&t>=fr(e)?ke.push(n):ke.splice(lp(t),0,n),n.flags|=1,tf()}}function tf(){Eo||(Eo=Jh.then(nf))}function cp(n){if(!Bt(n))vi&&n.id===-1?vi.splice(hs+1,0,n):n.flags&1||(xs.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)xs.push(n[t]);tf()}function Vc(n,t,e=Ln+1){for(;e<ke.length;e++){const i=ke[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;ke.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ef(n){if(xs.length){const t=[...new Set(xs)].sort((e,i)=>fr(e)-fr(i));if(xs.length=0,vi){for(let e=0;e<t.length;e++)vi.push(t[e]);return}for(vi=t,hs=0;hs<vi.length;hs++){const e=vi[hs];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}vi=null,hs=0}}const fr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function nf(n){try{for(Ln=0;Ln<ke.length;Ln++){const t=ke[Ln];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Mr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ln<ke.length;Ln++){const t=ke[Ln];t&&(t.flags&=-2)}Ln=-1,ke.length=0,ef(),Eo=null,(ke.length||xs.length)&&nf()}}let Oe=null,sf=null;function bo(n){const t=Oe;return Oe=n,sf=n&&n.type.__scopeId||null,t}function fs(n,t=Oe,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Jc(-1);const r=bo(t),o=ti.length;let a;try{a=n(...s)}finally{for(let l=ti.length;l>o;l--)cc();bo(r),i._d&&Jc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function xe(n,t){if(Oe===null)return n;const e=jo(Oe),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=ce]=t[s];r&&(Xt(r)&&(r={mounted:r,updated:r}),r.deep&&Jn(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ai(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ii(),Cn(l,e,8,[n.el,a,n,t]),si())}}function up(n,t){if(Xe){let e=Xe.provides;const i=Xe.parent&&Xe.parent.provides;i===e&&(e=Xe.provides=Object.create(i)),e[n]=t}}function uo(n,t,e=!1){const i=cm();if(i||Ss){let s=Ss?Ss._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Xt(t)?t.call(i&&i.proxy):t}}const hp=Symbol.for("v-scx"),fp=()=>uo(hp);function ho(n,t,e){return rf(n,t,e)}function rf(n,t,e=ce){const{immediate:i,deep:s,flush:r,once:o}=e,a=Le({},e),l=t&&i||!t&&r!=="post";let c;if(mr){if(r==="sync"){const p=fp();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Bn,p.resume=Bn,p.pause=Bn,p}}const u=Xe;a.call=(p,_,g)=>Cn(p,u,_,g);let h=!1;r==="post"?a.scheduler=p=>{Ke(p,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,_)=>{_?p():ic(p)}),a.augmentJob=p=>{t&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=op(n,t,a);return mr&&(c?c.push(d):l&&d()),d}function dp(n,t,e){const i=this.proxy,s=Se(n)?n.includes(".")?of(i,n):()=>i[n]:n.bind(i,i);let r;Xt(t)?r=t:(r=t.handler,e=t);const o=Sr(this),a=rf(s,r.bind(i),e);return o(),a}function of(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const pp=Symbol("_vte"),Wo=n=>n.__isTeleport,sa=Symbol("_leaveCb");function mp(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==zn){t=e;break}}return t}function af(n){if(!rc(n))return Wo(n.type)&&n.children?mp(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Xt(e.default))return e.default()}}function sc(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;sc(Wo(e.type)&&af(e)||e,t)}else n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function qi(n,t){return Xt(n)?Le({name:n.name},t,{setup:n}):n}function lf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Hc(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const To=new WeakMap;function or(n,t,e,i,s=!1){if(Bt(n)){n.forEach((g,m)=>or(g,t&&(Bt(t)?t[m]:t),e,i,s));return}if(Ms(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&or(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?jo(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===ce?a.refs={}:a.refs,h=a.setupState,d=ee(h),p=h===ce?Rh:g=>Hc(u,g)?!1:ne(d,g),_=(g,m)=>!(m&&Hc(u,m));if(c!=null&&c!==l){if(Gc(t),Se(c))u[c]=null,p(c)&&(h[c]=null);else if(Be(c)){const g=t;_(c,g.k)&&(c.value=null),g.k&&(u[g.k]=null)}}if(Xt(l))Mr(l,a,12,[o,u]);else{const g=Se(l),m=Be(l);if(g||m){const f=()=>{if(n.f){const b=g?p(l)?h[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)Bt(b)&&Xl(b,r);else if(Bt(b))b.includes(r)||b.push(r);else if(g)u[l]=[r],p(l)&&(h[l]=u[l]);else{const T=[r];_(l,n.k)&&(l.value=T),n.k&&(u[n.k]=T)}}else g?(u[l]=o,p(l)&&(h[l]=o)):m&&(_(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const b=()=>{f(),To.delete(n)};b.id=-1,To.set(n,b),Ke(b,e)}else Gc(n),f()}}}function Gc(n){const t=To.get(n);t&&(t.flags|=8,To.delete(n))}Ho().requestIdleCallback;Ho().cancelIdleCallback;const Ms=n=>!!n.type.__asyncLoader,rc=n=>n.type.__isKeepAlive;function _p(n,t){cf(n,"a",t)}function gp(n,t){cf(n,"da",t)}function cf(n,t,e=Xe){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Xo(t,i,e),e){let s=e.parent;for(;s&&s.parent;)rc(s.parent.vnode)&&vp(i,t,e,s),s=s.parent}}function vp(n,t,e,i){const s=Xo(t,n,i,!0);oc(()=>{Xl(i[t],s)},e)}function Xo(n,t,e=Xe,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{ii();const a=Sr(e),l=Cn(t,e,n,o);return a(),si(),l});return i?s.unshift(r):s.push(r),r}}const ci=n=>(t,e=Xe)=>{(!mr||n==="sp")&&Xo(n,(...i)=>t(...i),e)},xp=ci("bm"),uf=ci("m"),Mp=ci("bu"),Sp=ci("u"),yp=ci("bum"),oc=ci("um"),Ep=ci("sp"),bp=ci("rtg"),Tp=ci("rtc");function Ap(n,t=Xe){Xo("ec",n,t)}const wp=Symbol.for("v-ndc");function kc(n,t,e,i){let s;const r=e,o=Bt(n);if(o||Se(n)){const a=o&&Hi(n);let l=!1,c=!1;a&&(l=!mn(n),c=ri(n),n=Go(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=t(l?c?Ts(Rn(n[u])):Rn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(ae(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}function Rp(n,t,e,i,s,r){if(e==null&&(e={}),Oe.ce||Oe.parent&&Ms(Oe.parent)&&Oe.parent.ce){const c=e,u=Object.keys(c).length>0;return an(),wo(Je,null,[Ee("slot",c,i)],u?-2:64)}let o=n[t];o&&o._c&&(o._d=!1);const a=ti.length;an();let l;try{const c=o&&hf(o(e)),u=e.key||r||c&&c.key;l=wo(Je,{key:(u&&!wn(u)?u:`_${t}`)+(!c&&i?"_fb":"")},c||(i?i():[]),c&&n._===1?64:-2)}catch(c){for(let u=ti.length;u>a;u--)cc();throw c}finally{o&&o._c&&(o._d=!0)}return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function hf(n){return n.some(t=>uc(t)?!(t.type===zn||t.type===Je&&!hf(t.children)):!0)?n:null}const Ya=n=>n?Df(n)?jo(n):Ya(n.parent):null,ar=Le(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ya(n.parent),$root:n=>Ya(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>df(n),$forceUpdate:n=>n.f||(n.f=()=>{ic(n.update)}),$nextTick:n=>n.n||(n.n=Qh.bind(n.proxy)),$watch:n=>dp.bind(n)}),ra=(n,t)=>n!==ce&&!n.__isScriptSetup&&ne(n,t),Cp={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(ra(i,t))return o[t]=1,i[t];if(s!==ce&&ne(s,t))return o[t]=2,s[t];if(ne(r,t))return o[t]=3,r[t];if(e!==ce&&ne(e,t))return o[t]=4,e[t];ja&&(o[t]=0)}}const c=ar[t];let u,h;if(c)return t==="$attrs"&&Fe(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==ce&&ne(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,ne(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return ra(s,t)?(s[t]=e,!0):i!==ce&&ne(i,t)?(i[t]=e,!0):ne(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==ce&&a[0]!=="$"&&ne(n,a)||ra(t,a)||ne(r,a)||ne(i,a)||ne(ar,a)||ne(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ne(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Wc(n){return Bt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let ja=!0;function Pp(n){const t=df(n),e=n.proxy,i=n.ctx;ja=!1,t.beforeCreate&&Xc(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:_,activated:g,deactivated:m,beforeDestroy:f,beforeUnmount:b,destroyed:T,unmounted:M,render:I,renderTracked:C,renderTriggered:P,errorCaptured:O,serverPrefetch:A,expose:y,inheritAttrs:D,components:Z,directives:$,filters:ot}=t;if(c&&Dp(c,i,null),o)for(const et in o){const V=o[et];Xt(V)&&(i[et]=V.bind(e))}if(s){const et=s.call(e,e);ae(et)&&(n.data=xr(et))}if(ja=!0,r)for(const et in r){const V=r[et],mt=Xt(V)?V.bind(e,e):Xt(V.get)?V.get.bind(e,e):Bn,bt=!Xt(V)&&Xt(V.set)?V.set.bind(e):Bn,wt=Za({get:mt,set:bt});Object.defineProperty(i,et,{enumerable:!0,configurable:!0,get:()=>wt.value,set:Ft=>wt.value=Ft})}if(a)for(const et in a)ff(a[et],i,e,et);if(l){const et=Xt(l)?l.call(e):l;Reflect.ownKeys(et).forEach(V=>{up(V,et[V])})}u&&Xc(u,n,"c");function Q(et,V){Bt(V)?V.forEach(mt=>et(mt.bind(e))):V&&et(V.bind(e))}if(Q(xp,h),Q(uf,d),Q(Mp,p),Q(Sp,_),Q(_p,g),Q(gp,m),Q(Ap,O),Q(Tp,C),Q(bp,P),Q(yp,b),Q(oc,M),Q(Ep,A),Bt(y))if(y.length){const et=n.exposed||(n.exposed={});y.forEach(V=>{Object.defineProperty(et,V,{get:()=>e[V],set:mt=>e[V]=mt,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===Bn&&(n.render=I),D!=null&&(n.inheritAttrs=D),Z&&(n.components=Z),$&&(n.directives=$),A&&lf(n)}function Dp(n,t,e=Bn){Bt(n)&&(n=$a(n));for(const i in n){const s=n[i];let r;ae(s)?"default"in s?r=uo(s.from||i,s.default,!0):r=uo(s.from||i):r=uo(s),Be(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Xc(n,t,e){Cn(Bt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function ff(n,t,e,i){let s=i.includes(".")?of(e,i):()=>e[i];if(Se(n)){const r=t[n];Xt(r)&&ho(s,r)}else if(Xt(n))ho(s,n.bind(e));else if(ae(n))if(Bt(n))n.forEach(r=>ff(r,t,e,i));else{const r=Xt(n.handler)?n.handler.bind(e):t[n.handler];Xt(r)&&ho(s,r,n)}}function df(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Ao(l,c,o,!0)),Ao(l,t,o)),ae(t)&&r.set(t,l),l}function Ao(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Ao(n,r,e,!0),s&&s.forEach(o=>Ao(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Lp[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Lp={data:qc,props:Yc,emits:Yc,methods:Qs,computed:Qs,beforeCreate:He,created:He,beforeMount:He,mounted:He,beforeUpdate:He,updated:He,beforeDestroy:He,beforeUnmount:He,destroyed:He,unmounted:He,activated:He,deactivated:He,errorCaptured:He,serverPrefetch:He,components:Qs,directives:Qs,watch:Ip,provide:qc,inject:Up};function qc(n,t){return t?n?function(){return Le(Xt(n)?n.call(this,this):n,Xt(t)?t.call(this,this):t)}:t:n}function Up(n,t){return Qs($a(n),$a(t))}function $a(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function He(n,t){return n?[...new Set([].concat(n,t))]:t}function Qs(n,t){return n?Le(Object.create(null),n,t):t}function Yc(n,t){return n?Bt(n)&&Bt(t)?[...new Set([...n,...t])]:Le(Object.create(null),Wc(n),Wc(t??{})):t}function Ip(n,t){if(!n)return t;if(!t)return n;const e=Le(Object.create(null),n);for(const i in t)e[i]=He(n[i],t[i]);return e}function pf(){return{app:null,config:{isNativeTag:Rh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Np=0;function Fp(n,t){return function(i,s=null){Xt(i)||(i=Le({},i)),s!=null&&!ae(s)&&(s=null);const r=pf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Np++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:mm,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Xt(u.install)?(o.add(u),u.install(c,...h)):Xt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const p=c._ceVNode||Ee(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,jo(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Cn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Ss;Ss=c;try{return u()}finally{Ss=h}}};return c}}let Ss=null;const Op=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Tn(t)}Modifiers`]||n[`${Xi(t)}Modifiers`];function Bp(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ce;let s=e;const r=t.startsWith("update:"),o=r&&Op(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Se(u)?u.trim():u)),o.number&&(s=e.map(Vo)));let a,l=i[a=Qo(t)]||i[a=Qo(Tn(t))];!l&&r&&(l=i[a=Qo(Xi(t))]),l&&Cn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Cn(c,n,6,s)}}const zp=new WeakMap;function mf(n,t,e=!1){const i=e?zp:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Xt(n)){const l=c=>{const u=mf(c,t,!0);u&&(a=!0,Le(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ae(n)&&i.set(n,null),null):(Bt(r)?r.forEach(l=>o[l]=null):Le(o,r),ae(n)&&i.set(n,o),o)}function qo(n,t){return!n||!Oo(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ne(n,t[0].toLowerCase()+t.slice(1))||ne(n,Xi(t))||ne(n,t))}function jc(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:p,ctx:_,inheritAttrs:g}=n,m=bo(n);let f,b;try{if(e.shapeFlag&4){const M=s||i,I=M;f=In(c.call(I,M,u,h,p,d,_)),b=a}else{const M=t;f=In(M.length>1?M(h,{attrs:a,slots:o,emit:l}):M(h,null)),b=t.props?a:Vp(a)}}catch(M){ti.length=0,ko(M,n,1),f=Ee(zn)}let T=f;if(b&&g!==!1){const M=Object.keys(b),{shapeFlag:I}=T;M.length&&I&7&&(r&&M.some(Bo)&&(b=Hp(b,r)),T=As(T,b,!1,!0))}if(e.dirs&&(T=As(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(e.dirs):e.dirs),e.transition){const M=Wo(T.type)&&af(T)||T;sc(M,e.transition)}return f=T,bo(m),f}const Vp=n=>{let t;for(const e in n)(e==="class"||e==="style"||Oo(e))&&((t||(t={}))[e]=n[e]);return t},Hp=(n,t)=>{const e={};for(const i in n)(!Bo(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Gp(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?$c(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(_f(o,i,d)&&!qo(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?$c(i,o,c):!0:!!o;return!1}function $c(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(_f(t,n,r)&&!qo(e,r))return!0}return!1}function _f(n,t,e){const i=n[e],s=t[e];return e==="style"&&ae(i)&&ae(s)?!Ns(i,s):i!==s}function kp({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const gf={},vf=()=>Object.create(gf),xf=n=>Object.getPrototypeOf(n)===gf;function Wp(n,t,e,i=!1){const s={},r=vf();n.propsDefaults=Object.create(null),Mf(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:Jd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Xp(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ee(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(qo(n.emitsOptions,d))continue;const p=t[d];if(l)if(ne(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const _=Tn(d);s[_]=Ka(l,a,_,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Mf(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!ne(t,h)&&((u=Xi(h))===h||!ne(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=Ka(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!ne(t,h))&&(delete r[h],c=!0)}c&&Zn(n.attrs,"set","")}function Mf(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(ir(l))continue;const c=t[l];let u;s&&ne(s,u=Tn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:qo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ee(e),c=a||ce;for(let u=0;u<r.length;u++){const h=r[u];e[h]=Ka(s,l,h,c[h],n,!ne(c,h))}}return o}function Ka(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=ne(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Sr(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Xi(e))&&(i=!0))}return i}const qp=new WeakMap;function Sf(n,t,e=!1){const i=e?qp:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Xt(n)){const u=h=>{l=!0;const[d,p]=Sf(h,t,!0);Le(o,d),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ae(n)&&i.set(n,gs),gs;if(Bt(r))for(let u=0;u<r.length;u++){const h=Tn(r[u]);Kc(h)&&(o[h]=ce)}else if(r)for(const u in r){const h=Tn(u);if(Kc(h)){const d=r[u],p=o[h]=Bt(d)||Xt(d)?{type:d}:Le({},d),_=p.type;let g=!1,m=!0;if(Bt(_))for(let f=0;f<_.length;++f){const b=_[f],T=Xt(b)&&b.name;if(T==="Boolean"){g=!0;break}else T==="String"&&(m=!1)}else g=Xt(_)&&_.name==="Boolean";p[0]=g,p[1]=m,(g||ne(p,"default"))&&a.push(h)}}const c=[o,a];return ae(n)&&i.set(n,c),c}function Kc(n){return n[0]!=="$"&&!ir(n)}const ac=n=>n==="_"||n==="_ctx"||n==="$stable",lc=n=>Bt(n)?n.map(In):[In(n)],Yp=(n,t,e)=>{if(t._n)return t;const i=fs((...s)=>lc(t(...s)),e);return i._c=!1,i},yf=(n,t,e)=>{const i=n._ctx;for(const s in n){if(ac(s))continue;const r=n[s];if(Xt(r))t[s]=Yp(s,r,i);else if(r!=null){const o=lc(r);t[s]=()=>o}}},Ef=(n,t)=>{const e=lc(t);n.slots.default=()=>e},bf=(n,t,e)=>{for(const i in t)(e||!ac(i))&&(n[i]=t[i])},jp=(n,t,e)=>{const i=n.slots=vf();if(n.vnode.shapeFlag&32){const s=t._;s?(bf(i,t,e),e&&Uh(i,"_",s,!0)):yf(t,i)}else t&&Ef(n,t)},$p=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=ce;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:bf(s,t,e):(r=!t.$stable,yf(t,s)),o=t}else t&&(Ef(n,t),o={default:1});if(r)for(const a in s)!ac(a)&&o[a]==null&&delete s[a]},Ke=tm;function Kp(n){return Zp(n)}function Zp(n,t){const e=Ho();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Bn,insertStaticContent:_}=n,g=(w,L,E,st=null,j=null,Y=null,tt=void 0,at=null,K=!!L.dynamicChildren)=>{if(w===L)return;w&&!ks(w,L)&&(st=gt(w),Ft(w,j,Y,!0),w=null),L.patchFlag===-2&&(K=!1,L.dynamicChildren=null);const{type:x,ref:v,shapeFlag:R}=L;switch(x){case Yo:m(w,L,E,st);break;case zn:f(w,L,E,st);break;case fo:w==null&&b(L,E,st,tt);break;case Je:Z(w,L,E,st,j,Y,tt,at,K);break;default:R&1?I(w,L,E,st,j,Y,tt,at,K):R&6?$(w,L,E,st,j,Y,tt,at,K):(R&64||R&128)&&x.process(w,L,E,st,j,Y,tt,at,K,kt)}v!=null&&j?or(v,w&&w.ref,Y,L||w,!L):v==null&&w&&w.ref!=null&&or(w.ref,null,Y,w,!0)},m=(w,L,E,st)=>{if(w==null)i(L.el=a(L.children),E,st);else{const j=L.el=w.el;L.children!==w.children&&c(j,L.children)}},f=(w,L,E,st)=>{w==null?i(L.el=l(L.children||""),E,st):L.el=w.el},b=(w,L,E,st)=>{[w.el,w.anchor]=_(w.children,L,E,st,w.el,w.anchor)},T=({el:w,anchor:L},E,st)=>{let j;for(;w&&w!==L;)j=d(w),i(w,E,st),w=j;i(L,E,st)},M=({el:w,anchor:L})=>{let E;for(;w&&w!==L;)E=d(w),s(w),w=E;s(L)},I=(w,L,E,st,j,Y,tt,at,K)=>{if(L.type==="svg"?tt="svg":L.type==="math"&&(tt="mathml"),w==null)C(L,E,st,j,Y,tt,at,K);else{const x=w.el&&w.el._isVueCE?w.el:null;try{x&&x._beginPatch(),A(w,L,j,Y,tt,at,K)}finally{x&&x._endPatch()}}},C=(w,L,E,st,j,Y,tt,at)=>{let K,x;const{props:v,shapeFlag:R,transition:z,dirs:k}=w;if(K=w.el=o(w.type,Y,v&&v.is,v),R&8?u(K,w.children):R&16&&O(w.children,K,null,st,j,oa(w,Y),tt,at),k&&Ai(w,null,st,"created"),P(K,w,w.scopeId,tt,st),v){for(const pt in v)pt!=="value"&&!ir(pt)&&r(K,pt,null,v[pt],Y,st);"value"in v&&r(K,"value",null,v.value,Y),(x=v.onVnodeBeforeMount)&&Dn(x,st,w)}k&&Ai(w,null,st,"beforeMount");const G=Jp(j,z);G&&z.beforeEnter(K),i(K,L,E),((x=v&&v.onVnodeMounted)||G||k)&&Ke(()=>{try{x&&Dn(x,st,w),G&&z.enter(K),k&&Ai(w,null,st,"mounted")}finally{}},j)},P=(w,L,E,st,j)=>{if(E&&p(w,E),st)for(let Y=0;Y<st.length;Y++)p(w,st[Y]);if(j){let Y=j.subTree;if(L===Y||Rf(Y.type)&&(Y.ssContent===L||Y.ssFallback===L)){const tt=j.vnode;P(w,tt,tt.scopeId,tt.slotScopeIds,j.parent)}}},O=(w,L,E,st,j,Y,tt,at,K=0)=>{for(let x=K;x<w.length;x++){const v=w[x]=at?Kn(w[x]):In(w[x]);g(null,v,L,E,st,j,Y,tt,at)}},A=(w,L,E,st,j,Y,tt)=>{const at=L.el=w.el;let{patchFlag:K,dynamicChildren:x,dirs:v}=L;K|=w.patchFlag&16;const R=w.props||ce,z=L.props||ce;let k;if(E&&wi(E,!1),(k=z.onVnodeBeforeUpdate)&&Dn(k,E,L,w),v&&Ai(L,w,E,"beforeUpdate"),E&&wi(E,!0),x&&(!w.dynamicChildren||w.dynamicChildren.length!==x.length)&&(K=0,tt=!1,x=null),(R.innerHTML&&z.innerHTML==null||R.textContent&&z.textContent==null)&&u(at,""),x?y(w.dynamicChildren,x,at,E,st,oa(L,j),Y):tt||V(w,L,at,null,E,st,oa(L,j),Y,!1),K>0){if(K&16)D(at,R,z,E,j);else if(K&2&&R.class!==z.class&&r(at,"class",null,z.class,j),K&4&&r(at,"style",R.style,z.style,j),K&8){const G=L.dynamicProps;for(let pt=0;pt<G.length;pt++){const ct=G[pt],ft=R[ct],Nt=z[ct];(Nt!==ft||ct==="value")&&r(at,ct,ft,Nt,j,E)}}K&1&&w.children!==L.children&&u(at,L.children)}else!tt&&x==null&&D(at,R,z,E,j);((k=z.onVnodeUpdated)||v)&&Ke(()=>{k&&Dn(k,E,L,w),v&&Ai(L,w,E,"updated")},st)},y=(w,L,E,st,j,Y,tt)=>{for(let at=0;at<L.length;at++){const K=w[at],x=L[at],v=K.el&&(K.type===Je||!ks(K,x)||K.shapeFlag&198)?h(K.el):E;g(K,x,v,null,st,j,Y,tt,!0)}},D=(w,L,E,st,j)=>{if(L!==E){if(L!==ce)for(const Y in L)!ir(Y)&&!(Y in E)&&r(w,Y,L[Y],null,j,st);for(const Y in E){if(ir(Y))continue;const tt=E[Y],at=L[Y];tt!==at&&Y!=="value"&&r(w,Y,at,tt,j,st)}"value"in E&&r(w,"value",L.value,E.value,j)}},Z=(w,L,E,st,j,Y,tt,at,K)=>{const x=L.el=w?w.el:a(""),v=L.anchor=w?w.anchor:a("");let{patchFlag:R,dynamicChildren:z,slotScopeIds:k}=L;k&&(at=at?at.concat(k):k),w==null?(i(x,E,st),i(v,E,st),O(L.children||[],E,v,j,Y,tt,at,K)):R>0&&R&64&&z&&w.dynamicChildren&&w.dynamicChildren.length===z.length?(y(w.dynamicChildren,z,E,j,Y,tt,at),(L.key!=null||j&&L===j.subTree)&&Tf(w,L,!0)):V(w,L,E,v,j,Y,tt,at,K)},$=(w,L,E,st,j,Y,tt,at,K)=>{L.slotScopeIds=at,w==null?L.shapeFlag&512?j.ctx.activate(L,E,st,tt,K):ot(L,E,st,j,Y,tt,K):lt(w,L,K)},ot=(w,L,E,st,j,Y,tt)=>{const at=w.component=lm(w,st,j);if(rc(w)&&(at.ctx.renderer=kt),um(at,!1,tt),at.asyncDep){if(j&&j.registerDep(at,Q,tt),!w.el){const K=at.subTree=Ee(zn);f(null,K,L,E),w.placeholder=K.el}}else Q(at,w,L,E,j,Y,tt)},lt=(w,L,E)=>{const st=L.component=w.component;if(Gp(w,L,E))if(st.asyncDep&&!st.asyncResolved){et(st,L,E);return}else st.next=L,st.update();else L.el=w.el,st.vnode=L},Q=(w,L,E,st,j,Y,tt)=>{const at=()=>{if(w.isMounted){let{next:R,bu:z,u:k,parent:G,vnode:pt}=w;{const Mt=Af(w);if(Mt){R&&(R.el=pt.el,et(w,R,tt)),Mt.asyncDep.then(()=>{Ke(()=>{w.isUnmounted||x()},j)});return}}let ct=R,ft;wi(w,!1),R?(R.el=pt.el,et(w,R,tt)):R=pt,z&&co(z),(ft=R.props&&R.props.onVnodeBeforeUpdate)&&Dn(ft,G,R,pt),wi(w,!0);const Nt=jc(w),ut=w.subTree;w.subTree=Nt,g(ut,Nt,h(ut.el),gt(ut),w,j,Y),R.el=Nt.el,ct===null&&kp(w,Nt.el),k&&Ke(k,j),(ft=R.props&&R.props.onVnodeUpdated)&&Ke(()=>Dn(ft,G,R,pt),j)}else{let R;const{el:z,props:k}=L,{bm:G,m:pt,parent:ct,root:ft,type:Nt}=w,ut=Ms(L);wi(w,!1),G&&co(G),!ut&&(R=k&&k.onVnodeBeforeMount)&&Dn(R,ct,L),wi(w,!0);{ft.ce&&ft.ce._hasShadowRoot()&&ft.ce._injectChildStyle(Nt,w.parent?w.parent.type:void 0);const Mt=w.subTree=jc(w);g(null,Mt,E,st,w,j,Y),L.el=Mt.el}if(pt&&Ke(pt,j),!ut&&(R=k&&k.onVnodeMounted)){const Mt=L;Ke(()=>Dn(R,ct,Mt),j)}(L.shapeFlag&256||ct&&Ms(ct.vnode)&&ct.vnode.shapeFlag&256)&&w.a&&Ke(w.a,j),w.isMounted=!0,L=E=st=null}};w.scope.on();const K=w.effect=new Oh(at);w.scope.off();const x=w.update=K.run.bind(K),v=w.job=K.runIfDirty.bind(K);v.i=w,v.id=w.uid,K.scheduler=()=>ic(v),wi(w,!0),x()},et=(w,L,E)=>{L.component=w;const st=w.vnode.props;w.vnode=L,w.next=null,Xp(w,L.props,st,E),$p(w,L.children,E),ii(),Vc(w),si()},V=(w,L,E,st,j,Y,tt,at,K=!1)=>{const x=w&&w.children,v=w?w.shapeFlag:0,R=L.children,{patchFlag:z,shapeFlag:k}=L;if(z>0){if(z&128){bt(x,R,E,st,j,Y,tt,at,K);return}else if(z&256){mt(x,R,E,st,j,Y,tt,at,K);return}}k&8?(v&16&&At(x,j,Y),R!==x&&u(E,R)):v&16?k&16?bt(x,R,E,st,j,Y,tt,at,K):At(x,j,Y,!0):(v&8&&u(E,""),k&16&&O(R,E,st,j,Y,tt,at,K))},mt=(w,L,E,st,j,Y,tt,at,K)=>{w=w||gs,L=L||gs;const x=w.length,v=L.length,R=Math.min(x,v);let z;for(z=0;z<R;z++){const k=L[z]=K?Kn(L[z]):In(L[z]);g(w[z],k,E,null,j,Y,tt,at,K)}x>v?At(w,j,Y,!0,!1,R):O(L,E,st,j,Y,tt,at,K,R)},bt=(w,L,E,st,j,Y,tt,at,K)=>{let x=0;const v=L.length;let R=w.length-1,z=v-1;for(;x<=R&&x<=z;){const k=w[x],G=L[x]=K?Kn(L[x]):In(L[x]);if(ks(k,G))g(k,G,E,null,j,Y,tt,at,K);else break;x++}for(;x<=R&&x<=z;){const k=w[R],G=L[z]=K?Kn(L[z]):In(L[z]);if(ks(k,G))g(k,G,E,null,j,Y,tt,at,K);else break;R--,z--}if(x>R){if(x<=z){const k=z+1,G=k<v?L[k].el:st;for(;x<=z;)g(null,L[x]=K?Kn(L[x]):In(L[x]),E,G,j,Y,tt,at,K),x++}}else if(x>z)for(;x<=R;)Ft(w[x],j,Y,!0),x++;else{const k=x,G=x,pt=new Map;for(x=G;x<=z;x++){const _t=L[x]=K?Kn(L[x]):In(L[x]);_t.key!=null&&pt.set(_t.key,x)}let ct,ft=0;const Nt=z-G+1;let ut=!1,Mt=0;const Lt=new Array(Nt);for(x=0;x<Nt;x++)Lt[x]=0;for(x=k;x<=R;x++){const _t=w[x];if(ft>=Nt){Ft(_t,j,Y,!0);continue}let Vt;if(_t.key!=null)Vt=pt.get(_t.key);else for(ct=G;ct<=z;ct++)if(Lt[ct-G]===0&&ks(_t,L[ct])){Vt=ct;break}Vt===void 0?Ft(_t,j,Y,!0):(Lt[Vt-G]=x+1,Vt>=Mt?Mt=Vt:ut=!0,g(_t,L[Vt],E,null,j,Y,tt,at,K),ft++)}const Ot=ut?Qp(Lt):gs;for(ct=Ot.length-1,x=Nt-1;x>=0;x--){const _t=G+x,Vt=L[_t],Wt=L[_t+1],ie=_t+1<v?Wt.el||wf(Wt):st;Lt[x]===0?g(null,Vt,E,ie,j,Y,tt,at,K):ut&&(ct<0||x!==Ot[ct]?wt(Vt,E,ie,2):ct--)}}},wt=(w,L,E,st,j=null)=>{const{el:Y,type:tt,transition:at,children:K,shapeFlag:x}=w;if(x&6){wt(w.component.subTree,L,E,st);return}if(x&128){w.suspense.move(L,E,st);return}if(x&64){tt.move(w,L,E,kt);return}if(tt===Je){i(Y,L,E);for(let R=0;R<K.length;R++)wt(K[R],L,E,st);i(w.anchor,L,E);return}if(tt===fo){T(w,L,E);return}if(st!==2&&x&1&&at)if(st===0)at.persisted&&!Y[sa]?i(Y,L,E):(at.beforeEnter(Y),i(Y,L,E),Ke(()=>at.enter(Y),j));else{const{leave:R,delayLeave:z,afterLeave:k}=at,G=()=>{w.ctx.isUnmounted?s(Y):i(Y,L,E)},pt=()=>{const ct=Y._isLeaving||!!Y[sa];Y._isLeaving&&Y[sa](!0),at.persisted&&!ct?G():R(Y,()=>{G(),k&&k()})};z?z(Y,G,pt):pt()}else i(Y,L,E)},Ft=(w,L,E,st=!1,j=!1)=>{const{type:Y,props:tt,ref:at,children:K,dynamicChildren:x,shapeFlag:v,patchFlag:R,dirs:z,cacheIndex:k,memo:G}=w;if(R===-2&&(j=!1),at!=null&&(ii(),or(at,null,E,w,!0),si()),k!=null&&(L.renderCache[k]=void 0),v&256){L.ctx.deactivate(w);return}const pt=v&1&&z,ct=!Ms(w);let ft;if(ct&&(ft=tt&&tt.onVnodeBeforeUnmount)&&Dn(ft,L,w),v&6)ht(w.component,E,st);else{if(v&128){w.suspense.unmount(E,st);return}pt&&Ai(w,null,L,"beforeUnmount"),v&64?w.type.remove(w,L,E,kt,st):x&&!x.hasOnce&&(Y!==Je||R>0&&R&64)?At(x,L,E,!1,!0):(Y===Je&&R&384||!j&&v&16)&&At(K,L,E),st&&Jt(w)}const Nt=G!=null&&k==null;(ct&&(ft=tt&&tt.onVnodeUnmounted)||pt||Nt)&&Ke(()=>{ft&&Dn(ft,L,w),pt&&Ai(w,null,L,"unmounted"),Nt&&(w.el=null)},E)},Jt=w=>{const{type:L,el:E,anchor:st,transition:j}=w;if(L===Je){it(E,st);return}if(L===fo){M(w);return}const Y=()=>{s(E),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(w.shapeFlag&1&&j&&!j.persisted){const{leave:tt,delayLeave:at}=j,K=()=>tt(E,Y);at?at(w.el,Y,K):K()}else Y()},it=(w,L)=>{let E;for(;w!==L;)E=d(w),s(w),w=E;s(L)},ht=(w,L,E)=>{const{bum:st,scope:j,job:Y,subTree:tt,um:at,m:K,a:x}=w;Zc(K),Zc(x),st&&co(st),j.stop(),Y&&(Y.flags|=8,Ft(tt,w,L,E)),at&&Ke(at,L),Ke(()=>{w.isUnmounted=!0},L)},At=(w,L,E,st=!1,j=!1,Y=0)=>{for(let tt=Y;tt<w.length;tt++)Ft(w[tt],L,E,st,j)},gt=w=>{if(w.shapeFlag&6)return gt(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const L=d(w.anchor||w.el),E=L&&L[pp];return E?d(E):L};let It=!1;const zt=(w,L,E)=>{let st;w==null?L._vnode&&(Ft(L._vnode,null,null,!0),st=L._vnode.component):g(L._vnode||null,w,L,null,null,null,E),L._vnode=w,It||(It=!0,Vc(st),ef(),It=!1)},kt={p:g,um:Ft,m:wt,r:Jt,mt:ot,mc:O,pc:V,pbc:y,n:gt,o:n};return{render:zt,hydrate:void 0,createApp:Fp(zt)}}function oa({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function wi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Jp(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Tf(n,t,e=!1){const i=n.children,s=t.children;if(Bt(i)&&Bt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Kn(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Tf(o,a)),a.type===Yo&&(a.patchFlag===-1&&(a=s[r]=Kn(a)),a.el=o.el),a.type===zn&&!a.el&&(a.el=o.el)}}function Qp(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Af(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Af(t)}function Zc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function wf(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?wf(t.subTree):null}const Rf=n=>n.__isSuspense;function tm(n,t){t&&t.pendingBranch?Bt(n)?t.effects.push(...n):t.effects.push(n):cp(n)}const Je=Symbol.for("v-fgt"),Yo=Symbol.for("v-txt"),zn=Symbol.for("v-cmt"),fo=Symbol.for("v-stc"),ti=[];let on=null;function an(n=!1){ti.push(on=n?null:[])}function cc(){ti.pop(),on=ti[ti.length-1]||null}let dr=1;function Jc(n,t=!1){dr+=n,n<0&&on&&t&&(on.hasOnce=!0)}function Cf(n){return n.dynamicChildren=dr>0?on||gs:null,cc(),dr>0&&on&&on.push(n),n}function ei(n,t,e,i,s,r){return Cf(H(n,t,e,i,s,r,!0))}function wo(n,t,e,i,s){return Cf(Ee(n,t,e,i,s,!0))}function uc(n){return n?n.__v_isVNode===!0:!1}function ks(n,t){return n.type===t.type&&n.key===t.key}const Pf=({key:n})=>n??null,po=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Se(n)||Be(n)||Xt(n)?{i:Oe,r:n,k:t,f:!!e}:n:null);function H(n,t=null,e=null,i=0,s=null,r=n===Je?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Pf(t),ref:t&&po(t),scopeId:sf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Oe};return a?(Ro(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Se(e)?8:16),dr>0&&!o&&on&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&on.push(l),l}const Ee=em;function em(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===wp)&&(n=zn),uc(n)){const a=As(n,t,!0);return e&&Ro(a,e),dr>0&&!r&&on&&(a.shapeFlag&6?on[on.indexOf(n)]=a:on.push(a)),a.patchFlag=-2,a}if(pm(n)&&(n=n.__vccOpts),t){t=nm(t);let{class:a,style:l}=t;a&&!Se(a)&&(t.class=fn(a)),ae(l)&&(ec(l)&&!Bt(l)&&(l=Le({},l)),t.style=Yl(l))}const o=Se(n)?1:Rf(n)?128:Wo(n)?64:ae(n)?4:Xt(n)?2:0;return H(n,t,e,i,s,o,r,!0)}function nm(n){return n?ec(n)||xf(n)?Le({},n):n:null}function As(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?rm(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Pf(c),ref:t&&t.ref?e&&r?Bt(r)?r.concat(po(t)):[r,po(t)]:po(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Je?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&As(n.ssContent),ssFallback:n.ssFallback&&As(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&sc(u,l.clone(u)),u}function lr(n=" ",t=0){return Ee(Yo,null,n,t)}function im(n,t){const e=Ee(fo,null,n);return e.staticCount=t,e}function sm(n="",t=!1){return t?(an(),wo(zn,null,n)):Ee(zn,null,n)}function In(n){return n==null||typeof n=="boolean"?Ee(zn):Bt(n)?Ee(Je,null,n.slice()):uc(n)?Kn(n):Ee(Yo,null,String(n))}function Kn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:As(n)}function Ro(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Bt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Ro(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!xf(t)?t._ctx=Oe:s===3&&Oe&&(Oe.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Xt(t)){if(i&65){Ro(n,{default:t});return}t={default:t,_ctx:Oe},e=32}else t=String(t),i&64?(e=16,t=[lr(t)]):e=8;n.children=t,n.shapeFlag|=e}function rm(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=fn([t.class,i.class]));else if(s==="style")t.style=Yl([t.style,i.style]);else if(Oo(s)){const r=t[s],o=i[s];o&&r!==o&&!(Bt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!Bo(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Dn(n,t,e,i=null){Cn(n,t,7,[e,i])}const om=pf();let am=0;function lm(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||om,r={uid:am++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ud(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sf(i,s),emitsOptions:mf(i,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:i.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Bp.bind(null,r),n.ce&&n.ce(r),r}let Xe=null;const cm=()=>Xe||Oe;let Co,pr;{const n=Ho(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Co=t("__VUE_INSTANCE_SETTERS__",e=>Xe=e),pr=t("__VUE_SSR_SETTERS__",e=>mr=e)}const Sr=n=>{const t=Xe;return Co(n),n.scope.on(),()=>{n.scope.off(),Co(t)}},Qc=()=>{Xe&&Xe.scope.off(),Co(null)};function Df(n){return n.vnode.shapeFlag&4}let mr=!1;function um(n,t=!1,e=!1){t&&pr(t);const{props:i,children:s}=n.vnode,r=Df(n);Wp(n,i,r,t),jp(n,s,e||t);const o=r?hm(n,t):void 0;return t&&pr(!1),o}function hm(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Cp);const{setup:i}=e;if(i){ii();const s=n.setupContext=i.length>1?dm(n):null,r=Sr(n),o=Mr(i,n,0,[n.props,s]),a=Ch(o);if(si(),r(),(a||n.sp)&&!Ms(n)&&lf(n),a){if(o.then(Qc,Qc),t)return o.then(l=>{pr(!0);try{tu(n,l,t)}finally{pr(!1)}}).catch(l=>{ko(l,n,0)});n.asyncDep=o}else tu(n,o)}else Lf(n)}function tu(n,t,e){Xt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ae(t)&&(n.setupState=Zh(t)),Lf(n)}function Lf(n,t,e){const i=n.type;n.render||(n.render=i.render||Bn);{const s=Sr(n);ii();try{Pp(n)}finally{si(),s()}}}const fm={get(n,t){return Fe(n,"get",""),n[t]}};function dm(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,fm),slots:n.slots,emit:n.emit,expose:t}}function jo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Zh(Qd(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in ar)return ar[e](n)},has(t,e){return e in t||e in ar}})):n.proxy}function pm(n){return Xt(n)&&"__vccOpts"in n}const Za=(n,t)=>sp(n,t,mr),mm="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ja;const eu=typeof window<"u"&&window.trustedTypes;if(eu)try{Ja=eu.createPolicy("vue",{createHTML:n=>n})}catch{}const Uf=Ja?n=>Ja.createHTML(n):n=>n,_m="http://www.w3.org/2000/svg",gm="http://www.w3.org/1998/Math/MathML",$n=typeof document<"u"?document:null,nu=$n&&$n.createElement("template"),vm={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?$n.createElementNS(_m,n):t==="mathml"?$n.createElementNS(gm,n):e?$n.createElement(n,{is:e}):$n.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>$n.createTextNode(n),createComment:n=>$n.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>$n.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{nu.innerHTML=Uf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=nu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},xm=Symbol("_vtc");function Mm(n,t,e){const i=n[xm];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Po=Symbol("_vod"),If=Symbol("_vsh"),Sm={name:"show",beforeMount(n,{value:t},{transition:e}){n[Po]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Ws(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),Ws(n,!0),i.enter(n)):i.leave(n,()=>{Ws(n,!1)}):Ws(n,t))},beforeUnmount(n,{value:t}){Ws(n,t)}};function Ws(n,t){n.style.display=t?n[Po]:"none",n[If]=!t}const ym=Symbol(""),Em=/(?:^|;)\s*display\s*:/;function bm(n,t,e){const i=n.style,s=Se(e);let r=!1;if(e&&!s){if(t)if(Se(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&tr(i,a,"")}else for(const o in t)e[o]==null&&tr(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?Am(n,o,!Se(t)&&t?t[o]:void 0,a)||tr(i,o,a):tr(i,o,"")}}else if(s){if(t!==e){const o=i[ym];o&&(e+=";"+o),i.cssText=e,r=Em.test(e)}}else t&&n.removeAttribute("style");Po in n&&(n[Po]=r?i.display:"",n[If]&&(i.display="none"))}const iu=/\s*!important$/;function tr(n,t,e){if(Bt(e))e.forEach(i=>tr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Tm(n,t);iu.test(e)?n.setProperty(Xi(i),e.replace(iu,""),"important"):n[i]=e}}const su=["Webkit","Moz","ms"],aa={};function Tm(n,t){const e=aa[t];if(e)return e;let i=Tn(t);if(i!=="filter"&&i in n)return aa[t]=i;i=Lh(i);for(let s=0;s<su.length;s++){const r=su[s]+i;if(r in n)return aa[t]=r}return t}function Am(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Se(i)&&e===i}const ru="http://www.w3.org/1999/xlink";function ou(n,t,e,i,s,r=Dd(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(ru,t.slice(6,t.length)):n.setAttributeNS(ru,t,e):e==null||r&&!Ih(e)?n.removeAttribute(t):n.setAttribute(t,r?"":wn(e)?String(e):e)}function au(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Uf(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Ih(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function Mi(n,t,e,i){n.addEventListener(t,e,i)}function wm(n,t,e,i){n.removeEventListener(t,e,i)}const lu=Symbol("_vei");function Rm(n,t,e,i,s=null){const r=n[lu]||(n[lu]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=Dm(t);if(i){const c=r[t]=Im(i,s);Mi(n,a,c,l)}else o&&(wm(n,a,o,l),r[t]=void 0)}}const Cm=/(Once|Passive|Capture)$/,Pm=/^on:?(?:Once|Passive|Capture)$/;function Dm(n){let t,e;for(;(e=n.match(Cm))&&!Pm.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Xi(n.slice(2)),t]}let la=0;const Lm=Promise.resolve(),Um=()=>la||(Lm.then(()=>la=0),la=Date.now());function Im(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Bt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Cn(c,t,5,a)}}else Cn(s,t,5,[i])};return e.value=n,e.attached=Um(),e}const cu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Nm=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?Mm(n,i,o):t==="style"?bm(n,e,i):Oo(t)?Bo(t)||Rm(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Fm(n,t,i,o))?(au(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ou(n,t,i,o,r,t!=="value")):n._isVueCE&&(Om(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Se(i)))?au(n,Tn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),ou(n,t,i,o))};function Fm(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&cu(t)&&Xt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return cu(t)&&Se(e)?!1:t in n}function Om(n,t){const e=n._def.props;if(!e)return!1;const i=Tn(t);return Array.isArray(e)?e.some(s=>Tn(s)===i):Object.keys(e).some(s=>Tn(s)===i)}const ws=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Bt(t)?e=>co(t,e):t};function Bm(n){n.target.composing=!0}function uu(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const On=Symbol("_assign"),Ur=Symbol("_initialValue");function ca(n,t,e){return t&&(n=n.trim()),e&&(n=Vo(n)),n}const Ve={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[Ur]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Ur]=n.defaultValue.replace(/\r\n?/g,`
`))),n[On]=ws(s);const r=i||s.props&&s.props.type==="number";Mi(n,t?"change":"input",o=>{o.target.composing||n[On](ca(n.value,e,r))}),(e||r)&&Mi(n,"change",()=>{n.value=ca(n.value,e,r)}),t||(Mi(n,"compositionstart",Bm),Mi(n,"compositionend",uu),Mi(n,"change",uu))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[Ur];delete n[Ur],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[On](ca(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[On]=ws(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Vo(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},Xs={deep:!0,created(n,t,e){n[On]=ws(e),Mi(n,"change",()=>{const i=n._modelValue,s=_r(n),r=n.checked,o=n[On];if(Bt(i)){const a=jl(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Is(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Nf(n,r))})},mounted:hu,beforeUpdate(n,t,e){n[On]=ws(e),hu(n,t,e)}};function hu(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(Bt(t))s=jl(t,i.props.value)>-1;else if(Is(t))s=t.has(i.props.value);else{if(t===e)return;s=Ns(t,Nf(n,!0))}n.checked!==s&&(n.checked=s)}const zm={deep:!0,created(n,{value:t,modifiers:{number:e}},i){n._modelValue=t,Mi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,r=>r.selected).map(r=>e?Vo(_r(r)):_r(r));n[On](n.multiple?Is(n._modelValue)?new Set(s):s:s[0]),n._assigning=!0,Qh(()=>{n._assigning=!1})}),n[On]=ws(i)},mounted(n,{value:t}){fu(n,t)},beforeUpdate(n,{value:t},e){n._modelValue=t,n[On]=ws(e)},updated(n,{value:t}){n._assigning||fu(n,t)}};function fu(n,t){const e=n.multiple,i=Bt(t);if(!(e&&!i&&!Is(t))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=_r(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=jl(t,a)>-1}else o.selected=t.has(a);else if(Ns(_r(o),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function _r(n){return"_value"in n?n._value:n.value}function Nf(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const Vm=Le({patchProp:Nm},vm);let du;function Hm(){return du||(du=Kp(Vm))}const Gm=((...n)=>{const t=Hm().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Wm(i);if(!s)return;const r=t._component;!Xt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,km(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function km(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Wm(n){return Se(n)?document.querySelector(n):n}const Xm={class:"titlebar"},qm={class:"tb-left"},Ym=["title"],jm=qi({__name:"AppHeader",props:{sidebarVisible:{type:Boolean}},emits:["toggle-sidebar"],setup(n){return(t,e)=>(an(),ei("header",Xm,[H("div",qm,[H("button",{class:"tb-btn",title:n.sidebarVisible?"隐藏侧边栏":"显示侧边栏",onClick:e[0]||(e[0]=i=>t.$emit("toggle-sidebar"))},[...e[1]||(e[1]=[H("svg",{viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor"},[H("path",{d:"M1 2h14v12H1V2zm1 1v10h12V3H2zm3 1h1v8H5V4zm4 0h1v8H9V4z"})],-1)])],8,Ym),e[2]||(e[2]=im('<div class="tb-logo" data-v-051b42ed><svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-051b42ed><path d="M3 18L8 10L12 14L16 6L21 12" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" data-v-051b42ed></path><path d="M3 18C3 18 5.5 20.5 8 20.5C10.5 20.5 12 18 12 18C12 18 13.5 20.5 16 20.5C18.5 20.5 21 18 21 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.9" data-v-051b42ed></path></svg></div><div class="tb-title" data-v-051b42ed><span class="tb-app" data-v-051b42ed>三维地形流体仿真</span><span class="tb-sep" data-v-051b42ed>·</span><span class="tb-desc" data-v-051b42ed>TERRAIN FLUID SIMULATION</span></div>',2))]),e[3]||(e[3]=H("div",{class:"tb-right"},[H("a",{class:"tb-link",href:"https://sxguojf.github.io/demo/",target:"_blank",rel:"noopener"},"three-tile")],-1))]))}}),Fs=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},$m=Fs(jm,[["__scopeId","data-v-051b42ed"]]),ue=5e3,Km=-1e4,Zm=.1,Jm=256;function Qm(){return{vertExag:2,rampBlend:.35,wireframe:!1,mode:"gpu",simN:256,gravity:9.8,friction:.05,maxSpeed:26,timeScale:25,rain:3e3,drainBoundary:!1,tool:"orbit",waterRadius:20,fillRadius:20,pushRadius:20,brushRainRate:10,fillVolume:2e6,pushStrength:2e3,waterOpacity:.85,skyMode:"night",nightBrightness:2,waterShallowColor:"#6ea7be",waterDeepColor:"#084e8a",particles:!1,particleCount:600,particleSize:6,showArrows:!1,showWaves:!0}}const q=xr(Qm()),Ze=xr({fps:0,volume:0,maxWater:0,simTime:0,terrainMin:0,terrainMax:0,terrainRange:0}),cr={current:null};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hc="170",ys={ROTATE:0,DOLLY:1,PAN:2},ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},t_=0,pu=1,e_=2,Ff=1,n_=2,jn=3,bi=0,qe=1,En=2,yi=0,Gi=1,Qa=2,mu=3,_u=4,i_=5,Fi=100,s_=101,r_=102,o_=103,a_=104,l_=200,c_=201,u_=202,h_=203,tl=204,el=205,f_=206,d_=207,p_=208,m_=209,__=210,g_=211,v_=212,x_=213,M_=214,nl=0,il=1,sl=2,Rs=3,rl=4,ol=5,al=6,ll=7,Of=0,S_=1,y_=2,Ei=0,E_=1,b_=2,T_=3,Bf=4,A_=5,w_=6,R_=7,zf=300,Cs=301,Ps=302,cl=303,ul=304,$o=306,Do=1e3,Bi=1001,hl=1002,Pe=1003,C_=1004,Ir=1005,dn=1006,ua=1007,zi=1008,oi=1009,Vf=1010,Hf=1011,gr=1012,fc=1013,ki=1014,pn=1015,yr=1016,dc=1017,pc=1018,Ds=1020,Gf=35902,kf=1021,Wf=1022,Qe=1023,Xf=1024,qf=1025,Es=1026,Ls=1027,Yf=1028,mc=1029,jf=1030,_c=1031,gc=1033,mo=33776,_o=33777,go=33778,vo=33779,fl=35840,dl=35841,pl=35842,ml=35843,_l=36196,gl=37492,vl=37496,xl=37808,Ml=37809,Sl=37810,yl=37811,El=37812,bl=37813,Tl=37814,Al=37815,wl=37816,Rl=37817,Cl=37818,Pl=37819,Dl=37820,Ll=37821,xo=36492,Ul=36494,Il=36495,$f=36283,Nl=36284,Fl=36285,Ol=36286,P_=3200,D_=3201,L_=0,U_=1,Si="",rn="srgb",Yi="srgb-linear",Ko="linear",re="srgb",Zi=7680,gu=519,I_=512,N_=513,F_=514,Kf=515,O_=516,B_=517,z_=518,V_=519,vu=35044,xu="300 es",Qn=2e3,Lo=2001;class ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mo=Math.PI/180,Bl=180/Math.PI;function Er(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]).toLowerCase()}function We(n,t,e){return Math.max(t,Math.min(e,n))}function H_(n,t){return(n%t+t)%t}function ha(n,t,e){return(1-e)*n+e*t}function qs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function je(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const G_={DEG2RAD:Mo};class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,i,s,r,o,a,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],_=i[8],g=s[0],m=s[3],f=s[6],b=s[1],T=s[4],M=s[7],I=s[2],C=s[5],P=s[8];return r[0]=o*g+a*b+l*I,r[3]=o*m+a*T+l*C,r[6]=o*f+a*M+l*P,r[1]=c*g+u*b+h*I,r[4]=c*m+u*T+h*C,r[7]=c*f+u*M+h*P,r[2]=d*g+p*b+_*I,r[5]=d*m+p*T+_*C,r[8]=d*f+p*M+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,_=e*h+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(s*c-u*i)*g,t[2]=(a*i-s*o)*g,t[3]=d*g,t[4]=(u*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=p*g,t[7]=(i*l-c*e)*g,t[8]=(o*e-i*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fa.makeScale(t,e)),this}rotate(t){return this.premultiply(fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fa=new jt;function Zf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Uo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function k_(){const n=Uo("canvas");return n.style.display="block",n}const Mu={};function er(n){n in Mu||(Mu[n]=!0,console.warn(n))}function W_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function X_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function q_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Kt={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(n.r=ni(n.r),n.g=ni(n.g),n.b=ni(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(n.r=bs(n.r),n.g=bs(n.g),n.b=bs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Si?Ko:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Su=[.64,.33,.3,.6,.15,.06],yu=[.2126,.7152,.0722],Eu=[.3127,.329],bu=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tu=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[Yi]:{primaries:Su,whitePoint:Eu,transfer:Ko,toXYZ:bu,fromXYZ:Tu,luminanceCoefficients:yu,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:Su,whitePoint:Eu,transfer:re,toXYZ:bu,fromXYZ:Tu,luminanceCoefficients:yu,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}});let Ji;class Y_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=Uo("canvas")),Ji.width=t.width,Ji.height=t.height;const i=Ji.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Uo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ni(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ni(e[i]/255)*255):e[i]=ni(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let j_=0;class Jf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Er(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(da(s[o].image)):r.push(da(s[o]))}else r=da(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function da(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Y_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $_=0;class De extends ji{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,i=Bi,s=Bi,r=dn,o=zi,a=Qe,l=oi,c=De.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Er(),this.name="",this.source=new Jf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Do:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case hl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Do:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case hl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=zf;De.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,i=0,s=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,M=(p+1)/2,I=(f+1)/2,C=(u+d)/4,P=(h+g)/4,O=(_+m)/4;return T>M&&T>I?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=C/i,r=P/i):M>I?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=C/s,r=O/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=P/r,s=O/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(h-g)/b,this.z=(d-u)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class K_ extends ji{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new De(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends K_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Qf extends De{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Z_ extends De{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],p=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==d||c!==p||u!==_){let m=1-a;const f=l*d+c*p+u*_+h*g,b=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){const I=Math.sqrt(T),C=Math.atan2(I,f*b);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I}const M=a*b;if(l=l*m+d*M,c=c*m+p*M,u=u*m+_*M,h=h*m+g*M,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+u*h+l*p-c*d,t[e+1]=l*_+u*d+c*h-a*p,t[e+2]=c*_+u*p+a*d-l*h,t[e+3]=u*_-a*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"YZX":this._x=d*u*h+c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h-d*p*_;break;case"XZY":this._x=d*u*h-c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,i=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Au.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Au.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return pa.copy(this).projectOnVector(t),this.sub(pa)}reflect(t){return this.sub(pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(We(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pa=new B,Au=new Wi;class br{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nr.copy(i.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),Fr.subVectors(this.max,Ys),Qi.subVectors(t.a,Ys),ts.subVectors(t.b,Ys),es.subVectors(t.c,Ys),fi.subVectors(ts,Qi),di.subVectors(es,ts),Ri.subVectors(Qi,es);let e=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Ri.z,Ri.y,fi.z,0,-fi.x,di.z,0,-di.x,Ri.z,0,-Ri.x,-fi.y,fi.x,0,-di.y,di.x,0,-Ri.y,Ri.x,0];return!ma(e,Qi,ts,es,Fr)||(e=[1,0,0,0,1,0,0,0,1],!ma(e,Qi,ts,es,Fr))?!1:(Or.crossVectors(fi,di),e=[Or.x,Or.y,Or.z],ma(e,Qi,ts,es,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const kn=[new B,new B,new B,new B,new B,new B,new B,new B],Mn=new B,Nr=new br,Qi=new B,ts=new B,es=new B,fi=new B,di=new B,Ri=new B,Ys=new B,Fr=new B,Or=new B,Ci=new B;function ma(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ci.fromArray(n,r);const a=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),u=i.dot(Ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const J_=new br,js=new B,_a=new B;class Tr{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):J_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);const e=js.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(js,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(_a)),this.expandByPoint(js.copy(t.center).sub(_a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new B,ga=new B,Br=new B,pi=new B,va=new B,zr=new B,xa=new B;class Ar{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ga.copy(t).add(e).multiplyScalar(.5),Br.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(ga);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Br),a=pi.dot(this.direction),l=-pi.dot(Br),c=pi.lengthSq(),u=Math.abs(1-o*o);let h,d,p,_;if(u>0)if(h=o*l-a,d=o*a-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ga).addScaledVector(Br,d),p}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);const i=Wn.dot(this.direction),s=Wn.dot(Wn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,i,s,r){va.subVectors(e,t),zr.subVectors(i,t),xa.crossVectors(va,zr);let o=this.direction.dot(xa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,t);const l=a*this.direction.dot(zr.crossVectors(pi,zr));if(l<0)return null;const c=a*this.direction.dot(va.cross(pi));if(c<0||l+c>o)return null;const u=-a*pi.dot(xa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,i,s,r,o,a,l,c,u,h,d,p,_,g,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,d,p,_,g,m)}set(t,e,i,s,r,o,a,l,c,u,h,d,p,_,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),o=1/ns.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,p=o*h,_=a*u,g=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+_*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=_+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,p=l*h,_=c*u,g=c*h;e[0]=d+g*a,e[4]=_*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-_,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,p=l*h,_=c*u,g=c*h;e[0]=d-g*a,e[4]=-o*h,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*u,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,p=o*h,_=a*u,g=a*h;e[0]=l*u,e[4]=_*c-p,e[8]=d*c+g,e[1]=l*h,e[5]=g*c+d,e[9]=p*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=g-d*h,e[8]=_*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+_,e[10]=d-g*h}else if(t.order==="XZY"){const d=o*l,p=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+g,e[5]=o*u,e[9]=p*h-_,e[2]=_*h-p,e[6]=a*u,e[10]=g*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Q_,t,tg)}lookAt(t,e,i){const s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),mi.crossVectors(i,nn),mi.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),mi.crossVectors(i,nn)),mi.normalize(),Vr.crossVectors(nn,mi),s[0]=mi.x,s[4]=Vr.x,s[8]=nn.x,s[1]=mi.y,s[5]=Vr.y,s[9]=nn.y,s[2]=mi.z,s[6]=Vr.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],_=i[2],g=i[6],m=i[10],f=i[14],b=i[3],T=i[7],M=i[11],I=i[15],C=s[0],P=s[4],O=s[8],A=s[12],y=s[1],D=s[5],Z=s[9],$=s[13],ot=s[2],lt=s[6],Q=s[10],et=s[14],V=s[3],mt=s[7],bt=s[11],wt=s[15];return r[0]=o*C+a*y+l*ot+c*V,r[4]=o*P+a*D+l*lt+c*mt,r[8]=o*O+a*Z+l*Q+c*bt,r[12]=o*A+a*$+l*et+c*wt,r[1]=u*C+h*y+d*ot+p*V,r[5]=u*P+h*D+d*lt+p*mt,r[9]=u*O+h*Z+d*Q+p*bt,r[13]=u*A+h*$+d*et+p*wt,r[2]=_*C+g*y+m*ot+f*V,r[6]=_*P+g*D+m*lt+f*mt,r[10]=_*O+g*Z+m*Q+f*bt,r[14]=_*A+g*$+m*et+f*wt,r[3]=b*C+T*y+M*ot+I*V,r[7]=b*P+T*D+M*lt+I*mt,r[11]=b*O+T*Z+M*Q+I*bt,r[15]=b*A+T*$+M*et+I*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],_=t[3],g=t[7],m=t[11],f=t[15];return _*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*p-i*l*p)+g*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+e*c*h-e*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+f*(-s*a*u-e*l*h+e*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],_=t[12],g=t[13],m=t[14],f=t[15],b=h*m*c-g*d*c+g*l*p-a*m*p-h*l*f+a*d*f,T=_*d*c-u*m*c-_*l*p+o*m*p+u*l*f-o*d*f,M=u*g*c-_*h*c+_*a*p-o*g*p-u*a*f+o*h*f,I=_*h*l-u*g*l-_*a*d+o*g*d+u*a*m-o*h*m,C=e*b+i*T+s*M+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return t[0]=b*P,t[1]=(g*d*r-h*m*r-g*s*p+i*m*p+h*s*f-i*d*f)*P,t[2]=(a*m*r-g*l*r+g*s*c-i*m*c-a*s*f+i*l*f)*P,t[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*p-i*l*p)*P,t[4]=T*P,t[5]=(u*m*r-_*d*r+_*s*p-e*m*p-u*s*f+e*d*f)*P,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*f-e*l*f)*P,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*p+e*l*p)*P,t[8]=M*P,t[9]=(_*h*r-u*g*r-_*i*p+e*g*p+u*i*f-e*h*f)*P,t[10]=(o*g*r-_*a*r+_*i*c-e*g*c-o*i*f+e*a*f)*P,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*p-e*a*p)*P,t[12]=I*P,t[13]=(u*g*s-_*h*s+_*i*d-e*g*d-u*i*m+e*h*m)*P,t[14]=(_*a*s-o*g*s-_*i*l+e*g*l+o*i*m-e*a*m)*P,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*d+e*a*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,_=r*h,g=o*u,m=o*h,f=a*h,b=l*c,T=l*u,M=l*h,I=i.x,C=i.y,P=i.z;return s[0]=(1-(g+f))*I,s[1]=(p+M)*I,s[2]=(_-T)*I,s[3]=0,s[4]=(p-M)*C,s[5]=(1-(d+f))*C,s[6]=(m+b)*C,s[7]=0,s[8]=(_+T)*P,s[9]=(m-b)*P,s[10]=(1-(d+g))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ns.set(s[0],s[1],s[2]).length();const o=ns.set(s[4],s[5],s[6]).length(),a=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Sn.copy(this);const c=1/r,u=1/o,h=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,e.setFromRotationMatrix(Sn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Qn){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let p,_;if(a===Qn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Lo)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Qn){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),d=(e+t)*c,p=(i+s)*u;let _,g;if(a===Qn)_=(o+r)*h,g=-2*h;else if(a===Lo)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ns=new B,Sn=new _e,Q_=new B(0,0,0),tg=new B(1,1,1),mi=new B,Vr=new B,nn=new B,wu=new _e,Ru=new Wi;class li{constructor(t=0,e=0,i=0,s=li.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ru.setFromEuler(this),this.setFromQuaternion(Ru,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class vc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let eg=0;const Cu=new B,is=new Wi,Xn=new _e,Hr=new B,$s=new B,ng=new B,ig=new Wi,Pu=new B(1,0,0),Du=new B(0,1,0),Lu=new B(0,0,1),Uu={type:"added"},sg={type:"removed"},ss={type:"childadded",child:null},Ma={type:"childremoved",child:null};class Te extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new B,e=new li,i=new Wi,s=new B(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new jt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(Pu,t)}rotateY(t){return this.rotateOnAxis(Du,t)}rotateZ(t){return this.rotateOnAxis(Lu,t)}translateOnAxis(t,e){return Cu.copy(t).applyQuaternion(this.quaternion),this.position.add(Cu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pu,t)}translateY(t){return this.translateOnAxis(Du,t)}translateZ(t){return this.translateOnAxis(Lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Hr.copy(t):Hr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt($s,Hr,this.up):Xn.lookAt(Hr,$s,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Xn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uu),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sg),Ma.child=t,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uu),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,ng),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,ig,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Te.DEFAULT_UP=new B(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new B,qn=new B,Sa=new B,Yn=new B,rs=new B,os=new B,Iu=new B,ya=new B,Ea=new B,ba=new B,Ta=new Me,Aa=new Me,wa=new Me;class bn{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),yn.subVectors(t,e),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){yn.subVectors(s,e),qn.subVectors(i,e),Sa.subVectors(t,e);const o=yn.dot(yn),a=yn.dot(qn),l=yn.dot(Sa),c=qn.dot(qn),u=qn.dot(Sa),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-p-_,_,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Ta.setScalar(0),Aa.setScalar(0),wa.setScalar(0),Ta.fromBufferAttribute(t,e),Aa.fromBufferAttribute(t,i),wa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ta,r.x),o.addScaledVector(Aa,r.y),o.addScaledVector(wa,r.z),o}static isFrontFacing(t,e,i,s){return yn.subVectors(i,e),qn.subVectors(t,e),yn.cross(qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),yn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return bn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;rs.subVectors(s,i),os.subVectors(r,i),ya.subVectors(t,i);const l=rs.dot(ya),c=os.dot(ya);if(l<=0&&c<=0)return e.copy(i);Ea.subVectors(t,s);const u=rs.dot(Ea),h=os.dot(Ea);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(rs,o);ba.subVectors(t,r);const p=rs.dot(ba),_=os.dot(ba);if(_>=0&&p<=_)return e.copy(r);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(os,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Iu.subVectors(r,s),a=(h-u)/(h-u+(p-_)),e.copy(s).addScaledVector(Iu,a);const f=1/(m+g+d);return o=g*f,a=d*f,e.copy(i).addScaledVector(rs,o).addScaledVector(os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Ra(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ut{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Kt.workingColorSpace){if(t=H_(t,1),e=We(e,0,1),i=We(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ra(o,r,t+1/3),this.g=Ra(o,r,t),this.b=Ra(o,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=rn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const i=td[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return Kt.fromWorkingColorSpace(Ne.copy(this),t),Math.round(We(Ne.r*255,0,255))*65536+Math.round(We(Ne.g*255,0,255))*256+Math.round(We(Ne.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Ne.copy(this),e);const i=Ne.r,s=Ne.g,r=Ne.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=rn){Kt.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,i=Ne.g,s=Ne.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Gr);const i=ha(_i.h,Gr.h,e),s=ha(_i.s,Gr.s,e),r=ha(_i.l,Gr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Ut;Ut.NAMES=td;let rg=0;class Os extends ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=Er(),this.name="",this.blending=Gi,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=el,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tl&&(i.blendSrc=this.blendSrc),this.blendDst!==el&&(i.blendDst=this.blendDst),this.blendEquation!==Fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xc extends Os{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new B,kr=new Gt;class me{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=vu,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=qs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),s=je(s,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vu&&(t.usage=this.usage),t}}class ed extends me{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class nd extends me{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class _n extends me{constructor(t,e,i){super(new Float32Array(t),e,i)}}let og=0;const cn=new _e,Ca=new Te,as=new B,sn=new br,Ks=new br,Re=new B;class ze extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zf(t)?nd:ed)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,i){return cn.makeTranslation(t,e,i),this.applyMatrix4(cn),this}scale(t,e,i){return cn.makeScale(t,e,i),this.applyMatrix4(cn),this}lookAt(t){return Ca.lookAt(t),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _n(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(sn.min,Ks.min),sn.expandByPoint(Re),Re.addVectors(sn.max,Ks.max),sn.expandByPoint(Re)):(sn.expandByPoint(Ks.min),sn.expandByPoint(Ks.max))}sn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Re.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(t,c),Re.add(as)),s=Math.max(s,i.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new B,l[O]=new B;const c=new B,u=new B,h=new B,d=new Gt,p=new Gt,_=new Gt,g=new B,m=new B;function f(O,A,y){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),d.fromBufferAttribute(r,O),p.fromBufferAttribute(r,A),_.fromBufferAttribute(r,y),u.sub(c),h.sub(c),p.sub(d),_.sub(d);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(D),a[O].add(g),a[A].add(g),a[y].add(g),l[O].add(m),l[A].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let O=0,A=b.length;O<A;++O){const y=b[O],D=y.start,Z=y.count;for(let $=D,ot=D+Z;$<ot;$+=3)f(t.getX($+0),t.getX($+1),t.getX($+2))}const T=new B,M=new B,I=new B,C=new B;function P(O){I.fromBufferAttribute(s,O),C.copy(I);const A=a[O];T.copy(A),T.sub(I.multiplyScalar(I.dot(A))).normalize(),M.crossVectors(C,A);const D=M.dot(l[O])<0?-1:1;o.setXYZW(O,T.x,T.y,T.z,D)}for(let O=0,A=b.length;O<A;++O){const y=b[O],D=y.start,Z=y.count;for(let $=D,ot=D+Z;$<ot;$+=3)P(t.getX($+0)),P(t.getX($+1)),P(t.getX($+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let f=0;f<u;f++)d[_++]=c[p++]}return new me(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nu=new _e,Pi=new Ar,Wr=new Tr,Fu=new B,Xr=new B,qr=new B,Yr=new B,Pa=new B,jr=new B,Ou=new B,$r=new B;class tn extends Te{constructor(t=new ze,e=new xc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Pa.fromBufferAttribute(h,t),o?jr.addScaledVector(Pa,u):jr.addScaledVector(Pa.sub(e),u))}e.add(jr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere),Wr.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(Wr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Wr,Fu)===null||Pi.origin.distanceToSquared(Fu)>(t.far-t.near)**2))&&(Nu.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(Nu),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=o[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,I=T;M<I;M+=3){const C=a.getX(M),P=a.getX(M+1),O=a.getX(M+2);s=Kr(this,f,t,i,c,u,h,C,P,O),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const b=a.getX(m),T=a.getX(m+1),M=a.getX(m+2);s=Kr(this,o,t,i,c,u,h,b,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],f=o[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=b,I=T;M<I;M+=3){const C=M,P=M+1,O=M+2;s=Kr(this,f,t,i,c,u,h,C,P,O),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const b=m,T=m+1,M=m+2;s=Kr(this,o,t,i,c,u,h,b,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function ag(n,t,e,i,s,r,o,a){let l;if(t.side===qe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===bi,a),l===null)return null;$r.copy(a),$r.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo($r);return c<e.near||c>e.far?null:{distance:c,point:$r.clone(),object:n}}function Kr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Xr),n.getVertexPosition(l,qr),n.getVertexPosition(c,Yr);const u=ag(n,t,e,i,Xr,qr,Yr,Ou);if(u){const h=new B;bn.getBarycoord(Ou,Xr,qr,Yr,h),s&&(u.uv=bn.getInterpolatedAttribute(s,a,l,c,h,new Gt)),r&&(u.uv1=bn.getInterpolatedAttribute(r,a,l,c,h,new Gt)),o&&(u.normal=bn.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};bn.getNormal(Xr,qr,Yr,d.normal),u.face=d,u.barycoord=h}return u}class wr extends ze{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(h,2));function _(g,m,f,b,T,M,I,C,P,O,A){const y=M/P,D=I/O,Z=M/2,$=I/2,ot=C/2,lt=P+1,Q=O+1;let et=0,V=0;const mt=new B;for(let bt=0;bt<Q;bt++){const wt=bt*D-$;for(let Ft=0;Ft<lt;Ft++){const Jt=Ft*y-Z;mt[g]=Jt*b,mt[m]=wt*T,mt[f]=ot,c.push(mt.x,mt.y,mt.z),mt[g]=0,mt[m]=0,mt[f]=C>0?1:-1,u.push(mt.x,mt.y,mt.z),h.push(Ft/P),h.push(1-bt/O),et+=1}}for(let bt=0;bt<O;bt++)for(let wt=0;wt<P;wt++){const Ft=d+wt+lt*bt,Jt=d+wt+lt*(bt+1),it=d+(wt+1)+lt*(bt+1),ht=d+(wt+1)+lt*bt;l.push(Ft,Jt,ht),l.push(Jt,it,ht),V+=6}a.addGroup(p,V,A),p+=V,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Us(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ge(n){const t={};for(let e=0;e<n.length;e++){const i=Us(n[e]);for(const s in i)t[s]=i[s]}return t}function lg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function id(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const cg={clone:Us,merge:Ge};var ug=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Os{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ug,this.fragmentShader=hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=lg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class sd extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new B,Bu=new Gt,zu=new Gt;class hn extends sd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bl*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Bu,zu),e.subVectors(zu,Bu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Mo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ls=-90,cs=1;class fg extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(ls,cs,t,e);s.layers=this.layers,this.add(s);const r=new hn(ls,cs,t,e);r.layers=this.layers,this.add(r);const o=new hn(ls,cs,t,e);o.layers=this.layers,this.add(o);const a=new hn(ls,cs,t,e);a.layers=this.layers,this.add(a);const l=new hn(ls,cs,t,e);l.layers=this.layers,this.add(l);const c=new hn(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class rd extends De{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Cs,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dg extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new rd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wr(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qe,blending:yi});r.uniforms.tEquirect.value=e;const o=new tn(s,r),a=e.minFilter;return e.minFilter===zi&&(e.minFilter=dn),new fg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Da=new B,pg=new B,mg=new jt;class xi{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Da.subVectors(i,e).cross(pg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Da),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||mg.getNormalMatrix(t),s=this.coplanarPoint(Da).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Tr,Zr=new B;class Mc{constructor(t=new xi,e=new xi,i=new xi,s=new xi,r=new xi,o=new xi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Qn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],_=s[9],g=s[10],m=s[11],f=s[12],b=s[13],T=s[14],M=s[15];if(i[0].setComponents(l-r,d-c,m-p,M-f).normalize(),i[1].setComponents(l+r,d+c,m+p,M+f).normalize(),i[2].setComponents(l+o,d+u,m+_,M+b).normalize(),i[3].setComponents(l-o,d-u,m-_,M-b).normalize(),i[4].setComponents(l-a,d-h,m-g,M-T).normalize(),e===Qn)i[5].setComponents(l+a,d+h,m+g,M+T).normalize();else if(e===Lo)i[5].setComponents(a,h,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Zr.x=s.normal.x>0?t.max.x:t.min.x,Zr.y=s.normal.y>0?t.max.y:t.min.y,Zr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function od(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function _g(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],g=h[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const g=h[p];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Bs extends ze{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,p=[],_=[],g=[],m=[];for(let f=0;f<u;f++){const b=f*d-o;for(let T=0;T<c;T++){const M=T*h-r;_.push(M,-b,0),g.push(0,0,1),m.push(T/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){const T=b+c*f,M=b+c*(f+1),I=b+1+c*(f+1),C=b+1+c*f;p.push(T,M,C),p.push(M,I,C)}this.setIndex(p),this.setAttribute("position",new _n(_,3)),this.setAttribute("normal",new _n(g,3)),this.setAttribute("uv",new _n(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bs(t.width,t.height,t.widthSegments,t.heightSegments)}}var gg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vg=`#ifdef USE_ALPHAHASH
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
#endif`,xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eg=`#ifdef USE_AOMAP
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
#endif`,bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tg=`#ifdef USE_BATCHING
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
#endif`,Ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pg=`#ifdef USE_IRIDESCENCE
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
#endif`,Dg=`#ifdef USE_BUMPMAP
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
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vg=`#define PI 3.141592653589793
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
} // validated`,Hg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gg=`vec3 transformedNormal = objectNormal;
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
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$g=`#ifdef USE_ENVMAP
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
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,tv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ev=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sv=`#ifdef USE_GRADIENTMAP
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
}`,rv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ov=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lv=`uniform bool receiveShadow;
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
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,uv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pv=`PhysicalMaterial material;
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
#endif`,mv=`struct PhysicalMaterial {
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
}`,_v=`
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
#endif`,gv=`#if defined( RE_IndirectDiffuse )
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
#endif`,vv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ev=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Av=`#if defined( USE_POINTS_UV )
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
#endif`,wv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lv=`#ifdef USE_MORPHTARGETS
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
#endif`,Uv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zv=`#ifdef USE_NORMALMAP
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
#endif`,Vv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$v=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,e0=`float getShadowMask() {
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
}`,n0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i0=`#ifdef USE_SKINNING
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
#endif`,s0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,o0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,h0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g0=`uniform sampler2D t2D;
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
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`#include <common>
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
}`,E0=`#if DEPTH_PACKING == 3200
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
}`,b0=`#define DISTANCE
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
}`,T0=`#define DISTANCE
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`uniform float scale;
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
}`,C0=`uniform vec3 diffuse;
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
}`,P0=`#include <common>
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
}`,D0=`uniform vec3 diffuse;
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
}`,L0=`#define LAMBERT
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
}`,U0=`#define LAMBERT
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
}`,I0=`#define MATCAP
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
}`,N0=`#define MATCAP
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
}`,F0=`#define NORMAL
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
}`,O0=`#define NORMAL
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
}`,B0=`#define PHONG
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
}`,z0=`#define PHONG
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
}`,V0=`#define STANDARD
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
}`,H0=`#define STANDARD
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
}`,G0=`#define TOON
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
}`,k0=`#define TOON
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
}`,W0=`uniform float size;
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
}`,X0=`uniform vec3 diffuse;
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
}`,q0=`#include <common>
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
}`,Y0=`uniform vec3 color;
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
}`,j0=`uniform float rotation;
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
}`,$0=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:gg,alphahash_pars_fragment:vg,alphamap_fragment:xg,alphamap_pars_fragment:Mg,alphatest_fragment:Sg,alphatest_pars_fragment:yg,aomap_fragment:Eg,aomap_pars_fragment:bg,batching_pars_vertex:Tg,batching_vertex:Ag,begin_vertex:wg,beginnormal_vertex:Rg,bsdfs:Cg,iridescence_fragment:Pg,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Lg,clipping_planes_pars_fragment:Ug,clipping_planes_pars_vertex:Ig,clipping_planes_vertex:Ng,color_fragment:Fg,color_pars_fragment:Og,color_pars_vertex:Bg,color_vertex:zg,common:Vg,cube_uv_reflection_fragment:Hg,defaultnormal_vertex:Gg,displacementmap_pars_vertex:kg,displacementmap_vertex:Wg,emissivemap_fragment:Xg,emissivemap_pars_fragment:qg,colorspace_fragment:Yg,colorspace_pars_fragment:jg,envmap_fragment:$g,envmap_common_pars_fragment:Kg,envmap_pars_fragment:Zg,envmap_pars_vertex:Jg,envmap_physical_pars_fragment:cv,envmap_vertex:Qg,fog_vertex:tv,fog_pars_vertex:ev,fog_fragment:nv,fog_pars_fragment:iv,gradientmap_pars_fragment:sv,lightmap_pars_fragment:rv,lights_lambert_fragment:ov,lights_lambert_pars_fragment:av,lights_pars_begin:lv,lights_toon_fragment:uv,lights_toon_pars_fragment:hv,lights_phong_fragment:fv,lights_phong_pars_fragment:dv,lights_physical_fragment:pv,lights_physical_pars_fragment:mv,lights_fragment_begin:_v,lights_fragment_maps:gv,lights_fragment_end:vv,logdepthbuf_fragment:xv,logdepthbuf_pars_fragment:Mv,logdepthbuf_pars_vertex:Sv,logdepthbuf_vertex:yv,map_fragment:Ev,map_pars_fragment:bv,map_particle_fragment:Tv,map_particle_pars_fragment:Av,metalnessmap_fragment:wv,metalnessmap_pars_fragment:Rv,morphinstance_vertex:Cv,morphcolor_vertex:Pv,morphnormal_vertex:Dv,morphtarget_pars_vertex:Lv,morphtarget_vertex:Uv,normal_fragment_begin:Iv,normal_fragment_maps:Nv,normal_pars_fragment:Fv,normal_pars_vertex:Ov,normal_vertex:Bv,normalmap_pars_fragment:zv,clearcoat_normal_fragment_begin:Vv,clearcoat_normal_fragment_maps:Hv,clearcoat_pars_fragment:Gv,iridescence_pars_fragment:kv,opaque_fragment:Wv,packing:Xv,premultiplied_alpha_fragment:qv,project_vertex:Yv,dithering_fragment:jv,dithering_pars_fragment:$v,roughnessmap_fragment:Kv,roughnessmap_pars_fragment:Zv,shadowmap_pars_fragment:Jv,shadowmap_pars_vertex:Qv,shadowmap_vertex:t0,shadowmask_pars_fragment:e0,skinbase_vertex:n0,skinning_pars_vertex:i0,skinning_vertex:s0,skinnormal_vertex:r0,specularmap_fragment:o0,specularmap_pars_fragment:a0,tonemapping_fragment:l0,tonemapping_pars_fragment:c0,transmission_fragment:u0,transmission_pars_fragment:h0,uv_pars_fragment:f0,uv_pars_vertex:d0,uv_vertex:p0,worldpos_vertex:m0,background_vert:_0,background_frag:g0,backgroundCube_vert:v0,backgroundCube_frag:x0,cube_vert:M0,cube_frag:S0,depth_vert:y0,depth_frag:E0,distanceRGBA_vert:b0,distanceRGBA_frag:T0,equirect_vert:A0,equirect_frag:w0,linedashed_vert:R0,linedashed_frag:C0,meshbasic_vert:P0,meshbasic_frag:D0,meshlambert_vert:L0,meshlambert_frag:U0,meshmatcap_vert:I0,meshmatcap_frag:N0,meshnormal_vert:F0,meshnormal_frag:O0,meshphong_vert:B0,meshphong_frag:z0,meshphysical_vert:V0,meshphysical_frag:H0,meshtoon_vert:G0,meshtoon_frag:k0,points_vert:W0,points_frag:X0,shadow_vert:q0,shadow_frag:Y0,sprite_vert:j0,sprite_frag:$0},xt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Nn={basic:{uniforms:Ge([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ge([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ge([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ge([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ge([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ge([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ge([xt.points,xt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ge([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ge([xt.common,xt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ge([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ge([xt.sprite,xt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Ge([xt.common,xt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Ge([xt.lights,xt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Nn.physical={uniforms:Ge([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Jr={r:0,b:0,g:0},Li=new li,K0=new _e;function Z0(n,t,e,i,s,r,o){const a=new Ut(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function _(b){let T=b.isScene===!0?b.background:null;return T&&T.isTexture&&(T=(b.backgroundBlurriness>0?e:t).get(T)),T}function g(b){let T=!1;const M=_(b);M===null?f(a,l):M&&M.isColor&&(f(M,1),T=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,T){const M=_(T);M&&(M.isCubeTexture||M.mapping===$o)?(u===void 0&&(u=new tn(new wr(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Us(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Li.copy(T.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(K0.makeRotationFromEuler(Li)),u.material.toneMapped=Kt.getTransfer(M.colorSpace)!==re,(h!==M||d!==M.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new tn(new Bs(2,2),new gn({name:"BackgroundMaterial",uniforms:Us(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(M.colorSpace)!==re,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,T){b.getRGB(Jr,id(n)),i.buffers.color.setClear(Jr.r,Jr.g,Jr.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(b,T=1){a.set(b),l=T,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:g,addToRenderList:m}}function J0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(y,D,Z,$,ot){let lt=!1;const Q=h($,Z,D);r!==Q&&(r=Q,c(r.object)),lt=p(y,$,Z,ot),lt&&_(y,$,Z,ot),ot!==null&&t.update(ot,n.ELEMENT_ARRAY_BUFFER),(lt||o)&&(o=!1,M(y,D,Z,$),ot!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ot).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,D,Z){const $=Z.wireframe===!0;let ot=i[y.id];ot===void 0&&(ot={},i[y.id]=ot);let lt=ot[D.id];lt===void 0&&(lt={},ot[D.id]=lt);let Q=lt[$];return Q===void 0&&(Q=d(l()),lt[$]=Q),Q}function d(y){const D=[],Z=[],$=[];for(let ot=0;ot<e;ot++)D[ot]=0,Z[ot]=0,$[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Z,attributeDivisors:$,object:y,attributes:{},index:null}}function p(y,D,Z,$){const ot=r.attributes,lt=D.attributes;let Q=0;const et=Z.getAttributes();for(const V in et)if(et[V].location>=0){const bt=ot[V];let wt=lt[V];if(wt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(wt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(wt=y.instanceColor)),bt===void 0||bt.attribute!==wt||wt&&bt.data!==wt.data)return!0;Q++}return r.attributesNum!==Q||r.index!==$}function _(y,D,Z,$){const ot={},lt=D.attributes;let Q=0;const et=Z.getAttributes();for(const V in et)if(et[V].location>=0){let bt=lt[V];bt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(bt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(bt=y.instanceColor));const wt={};wt.attribute=bt,bt&&bt.data&&(wt.data=bt.data),ot[V]=wt,Q++}r.attributes=ot,r.attributesNum=Q,r.index=$}function g(){const y=r.newAttributes;for(let D=0,Z=y.length;D<Z;D++)y[D]=0}function m(y){f(y,0)}function f(y,D){const Z=r.newAttributes,$=r.enabledAttributes,ot=r.attributeDivisors;Z[y]=1,$[y]===0&&(n.enableVertexAttribArray(y),$[y]=1),ot[y]!==D&&(n.vertexAttribDivisor(y,D),ot[y]=D)}function b(){const y=r.newAttributes,D=r.enabledAttributes;for(let Z=0,$=D.length;Z<$;Z++)D[Z]!==y[Z]&&(n.disableVertexAttribArray(Z),D[Z]=0)}function T(y,D,Z,$,ot,lt,Q){Q===!0?n.vertexAttribIPointer(y,D,Z,ot,lt):n.vertexAttribPointer(y,D,Z,$,ot,lt)}function M(y,D,Z,$){g();const ot=$.attributes,lt=Z.getAttributes(),Q=D.defaultAttributeValues;for(const et in lt){const V=lt[et];if(V.location>=0){let mt=ot[et];if(mt===void 0&&(et==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),et==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),mt!==void 0){const bt=mt.normalized,wt=mt.itemSize,Ft=t.get(mt);if(Ft===void 0)continue;const Jt=Ft.buffer,it=Ft.type,ht=Ft.bytesPerElement,At=it===n.INT||it===n.UNSIGNED_INT||mt.gpuType===fc;if(mt.isInterleavedBufferAttribute){const gt=mt.data,It=gt.stride,zt=mt.offset;if(gt.isInstancedInterleavedBuffer){for(let kt=0;kt<V.locationSize;kt++)f(V.location+kt,gt.meshPerAttribute);y.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let kt=0;kt<V.locationSize;kt++)m(V.location+kt);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let kt=0;kt<V.locationSize;kt++)T(V.location+kt,wt/V.locationSize,it,bt,It*ht,(zt+wt/V.locationSize*kt)*ht,At)}else{if(mt.isInstancedBufferAttribute){for(let gt=0;gt<V.locationSize;gt++)f(V.location+gt,mt.meshPerAttribute);y.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let gt=0;gt<V.locationSize;gt++)m(V.location+gt);n.bindBuffer(n.ARRAY_BUFFER,Jt);for(let gt=0;gt<V.locationSize;gt++)T(V.location+gt,wt/V.locationSize,it,bt,wt*ht,wt/V.locationSize*gt*ht,At)}}else if(Q!==void 0){const bt=Q[et];if(bt!==void 0)switch(bt.length){case 2:n.vertexAttrib2fv(V.location,bt);break;case 3:n.vertexAttrib3fv(V.location,bt);break;case 4:n.vertexAttrib4fv(V.location,bt);break;default:n.vertexAttrib1fv(V.location,bt)}}}}b()}function I(){O();for(const y in i){const D=i[y];for(const Z in D){const $=D[Z];for(const ot in $)u($[ot].object),delete $[ot];delete D[Z]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const D=i[y.id];for(const Z in D){const $=D[Z];for(const ot in $)u($[ot].object),delete $[ot];delete D[Z]}delete i[y.id]}function P(y){for(const D in i){const Z=i[D];if(Z[y.id]===void 0)continue;const $=Z[y.id];for(const ot in $)u($[ot].object),delete $[ot];delete Z[y.id]}}function O(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:A,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function Q0(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];e.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Qe&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const O=P===yr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==oi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==pn&&!O)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:I,maxSamples:C}}function ex(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new xi,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const b=r?0:i,T=b*4;let M=f.clippingState||null;l.value=M,M=u(_,d,T,p);for(let I=0;I!==T;++I)M[I]=e[I];f.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,p,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,M=p;T!==g;++T,M+=4)o.copy(h[T]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function nx(n){let t=new WeakMap;function e(o,a){return a===cl?o.mapping=Cs:a===ul&&(o.mapping=Ps),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===cl||a===ul)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new dg(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Sc extends sd{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ps=4,Vu=[.125,.215,.35,.446,.526,.582],Oi=20,La=new Sc,Hu=new Ut;let Ua=null,Ia=0,Na=0,Fa=!1;const Ni=(1+Math.sqrt(5))/2,us=1/Ni,Gu=[new B(-Ni,us,0),new B(Ni,us,0),new B(-us,0,Ni),new B(us,0,Ni),new B(0,Ni,-us),new B(0,Ni,us),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class ku{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ua=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua,Ia,Na),this._renderer.xr.enabled=Fa,t.scissorTest=!1,Qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:yr,format:Qe,colorSpace:Yi,depthBuffer:!1},s=Wu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ix(r)),this._blurMaterial=sx(r,t,e)}return s}_compileMaterial(t){const e=new tn(this._lodPlanes[0],t);this._renderer.compile(e,La)}_sceneToCubeUV(t,e,i,s){const a=new hn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Hu),u.toneMapping=Ei,u.autoClear=!1;const p=new xc({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),_=new tn(new wr,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Hu),g=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):b===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const T=this._cubeSize;Qr(s,b*T,f>2?T:0,T,T),u.setRenderTarget(s),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Cs||t.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new tn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Qr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,La)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gu[(s-r-1)%Gu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new tn(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Oi-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):Oi;m>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const f=[];let b=0;for(let P=0;P<Oi;++P){const O=P/g,A=Math.exp(-O*O/2);f.push(A),P===0?b+=A:P<m&&(b+=2*A)}for(let P=0;P<f.length;P++)f[P]=f[P]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-i;const M=this._sizeLods[s],I=3*M*(s>T-ps?s-T+ps:0),C=4*(this._cubeSize-M);Qr(e,I,C,3*M,2*M),l.setRenderTarget(e),l.render(h,La)}}function ix(n){const t=[],e=[],i=[];let s=n;const r=n-ps+1+Vu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ps?l=Vu[o-n+ps-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,g=3,m=2,f=1,b=new Float32Array(g*_*p),T=new Float32Array(m*_*p),M=new Float32Array(f*_*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,O=C>2?0:-1,A=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];b.set(A,g*_*C),T.set(d,m*_*C);const y=[C,C,C,C,C,C];M.set(y,f*_*C)}const I=new ze;I.setAttribute("position",new me(b,g)),I.setAttribute("uv",new me(T,m)),I.setAttribute("faceIndex",new me(M,f)),t.push(I),s>ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Wu(n,t,e){const i=new ai(n,t,e);return i.texture.mapping=$o,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function sx(n,t,e){const i=new Float32Array(Oi),s=new B(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Xu(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function qu(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function yc(){return`

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
	`}function rx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===cl||l===ul,u=l===Cs||l===Ps;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ku(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new ku(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function ox(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&er("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ax(n,t,e,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)t.update(d[_],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)t.update(g[m],n.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const b=p.array;g=p.version;for(let T=0,M=b.length;T<M;T+=3){const I=b[T+0],C=b[T+1],P=b[T+2];d.push(I,C,C,P,P,I)}}else if(_!==void 0){const b=_.array;g=_.version;for(let T=0,M=b.length/3-1;T<M;T+=3){const I=T+0,C=T+1,P=T+2;d.push(I,C,C,P,P,I)}}else return;const m=new(Zf(d)?nd:ed)(d,1);m.version=g;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function lx(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function c(d,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,d*o,_),e.update(p,i,_))}function u(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];e.update(m,i,1)}function h(d,p,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,g,0,_);let f=0;for(let b=0;b<_;b++)f+=p[b]*g[b];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function ux(n,t,e){const i=new WeakMap,s=new Me;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let y=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let I=a.attributes.position.count*M,C=1;I>t.maxTextureSize&&(C=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const P=new Float32Array(I*C*4*h),O=new Qf(P,I,C,h);O.type=pn,O.needsUpdate=!0;const A=M*4;for(let D=0;D<h;D++){const Z=f[D],$=b[D],ot=T[D],lt=I*C*4*D;for(let Q=0;Q<Z.count;Q++){const et=Q*A;_===!0&&(s.fromBufferAttribute(Z,Q),P[lt+et+0]=s.x,P[lt+et+1]=s.y,P[lt+et+2]=s.z,P[lt+et+3]=0),g===!0&&(s.fromBufferAttribute($,Q),P[lt+et+4]=s.x,P[lt+et+5]=s.y,P[lt+et+6]=s.z,P[lt+et+7]=0),m===!0&&(s.fromBufferAttribute(ot,Q),P[lt+et+8]=s.x,P[lt+et+9]=s.y,P[lt+et+10]=s.z,P[lt+et+11]=ot.itemSize===4?s.w:1)}}d={count:h,texture:O,size:new Gt(I,C)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function hx(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class ad extends De{constructor(t,e,i,s,r,o,a,l,c,u=Es){if(u!==Es&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Es&&(i=ki),i===void 0&&u===Ls&&(i=Ds),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Pe,this.minFilter=l!==void 0?l:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ld=new De,Yu=new ad(1,1),cd=new Qf,ud=new Z_,hd=new rd,ju=[],$u=[],Ku=new Float32Array(16),Zu=new Float32Array(9),Ju=new Float32Array(4);function zs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=ju[s];if(r===void 0&&(r=new Float32Array(s),ju[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ae(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function we(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Zo(n,t){let e=$u[t];e===void 0&&(e=new Int32Array(t),$u[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function fx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function dx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2fv(this.addr,t),we(e,t)}}function px(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;n.uniform3fv(this.addr,t),we(e,t)}}function mx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4fv(this.addr,t),we(e,t)}}function _x(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,i))return;Ju.set(i),n.uniformMatrix2fv(this.addr,!1,Ju),we(e,i)}}function gx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,i))return;Zu.set(i),n.uniformMatrix3fv(this.addr,!1,Zu),we(e,i)}}function vx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,i))return;Ku.set(i),n.uniformMatrix4fv(this.addr,!1,Ku),we(e,i)}}function xx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Mx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2iv(this.addr,t),we(e,t)}}function Sx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3iv(this.addr,t),we(e,t)}}function yx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4iv(this.addr,t),we(e,t)}}function Ex(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function bx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2uiv(this.addr,t),we(e,t)}}function Tx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3uiv(this.addr,t),we(e,t)}}function Ax(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4uiv(this.addr,t),we(e,t)}}function wx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Yu.compareFunction=Kf,r=Yu):r=ld,e.setTexture2D(t||r,s)}function Rx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||ud,s)}function Cx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||hd,s)}function Px(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||cd,s)}function Dx(n){switch(n){case 5126:return fx;case 35664:return dx;case 35665:return px;case 35666:return mx;case 35674:return _x;case 35675:return gx;case 35676:return vx;case 5124:case 35670:return xx;case 35667:case 35671:return Mx;case 35668:case 35672:return Sx;case 35669:case 35673:return yx;case 5125:return Ex;case 36294:return bx;case 36295:return Tx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Px}}function Lx(n,t){n.uniform1fv(this.addr,t)}function Ux(n,t){const e=zs(t,this.size,2);n.uniform2fv(this.addr,e)}function Ix(n,t){const e=zs(t,this.size,3);n.uniform3fv(this.addr,e)}function Nx(n,t){const e=zs(t,this.size,4);n.uniform4fv(this.addr,e)}function Fx(n,t){const e=zs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Ox(n,t){const e=zs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Bx(n,t){const e=zs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function zx(n,t){n.uniform1iv(this.addr,t)}function Vx(n,t){n.uniform2iv(this.addr,t)}function Hx(n,t){n.uniform3iv(this.addr,t)}function Gx(n,t){n.uniform4iv(this.addr,t)}function kx(n,t){n.uniform1uiv(this.addr,t)}function Wx(n,t){n.uniform2uiv(this.addr,t)}function Xx(n,t){n.uniform3uiv(this.addr,t)}function qx(n,t){n.uniform4uiv(this.addr,t)}function Yx(n,t,e){const i=this.cache,s=t.length,r=Zo(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ld,r[o])}function jx(n,t,e){const i=this.cache,s=t.length,r=Zo(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ud,r[o])}function $x(n,t,e){const i=this.cache,s=t.length,r=Zo(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||hd,r[o])}function Kx(n,t,e){const i=this.cache,s=t.length,r=Zo(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||cd,r[o])}function Zx(n){switch(n){case 5126:return Lx;case 35664:return Ux;case 35665:return Ix;case 35666:return Nx;case 35674:return Fx;case 35675:return Ox;case 35676:return Bx;case 5124:case 35670:return zx;case 35667:case 35671:return Vx;case 35668:case 35672:return Hx;case 35669:case 35673:return Gx;case 5125:return kx;case 36294:return Wx;case 36295:return Xx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return Kx}}class Jx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Dx(e.type)}}class Qx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zx(e.type)}}class tM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function Qu(n,t){n.seq.push(t),n.map[t.id]=t}function eM(n,t,e){const i=n.name,s=i.length;for(Oa.lastIndex=0;;){const r=Oa.exec(i),o=Oa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Qu(e,c===void 0?new Jx(a,n,t):new Qx(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new tM(a),Qu(e,h)),e=h}}}class So{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);eM(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function th(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const nM=37297;let iM=0;function sM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const eh=new jt;function rM(n){Kt._getMatrix(eh,Kt.workingColorSpace,n);const t=`mat3( ${eh.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(n)){case Ko:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function nh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+sM(n.getShaderSource(t),o)}else return s}function oM(n,t){const e=rM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function aM(n,t){let e;switch(t){case E_:e="Linear";break;case b_:e="Reinhard";break;case T_:e="Cineon";break;case Bf:e="ACESFilmic";break;case w_:e="AgX";break;case R_:e="Neutral";break;case A_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const to=new B;function lM(){Kt.getLuminanceCoefficients(to);const n=to.x.toFixed(4),t=to.y.toFixed(4),e=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function uM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function hM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function nr(n){return n!==""}function ih(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fM=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(n){return n.replace(fM,pM)}const dM=new Map;function pM(n,t){let e=$t[t];if(e===void 0){const i=dM.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return zl(e)}const mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rh(n){return n.replace(mM,_M)}function _M(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function oh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function gM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ff?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===n_?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function vM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Cs:case Ps:t="ENVMAP_TYPE_CUBE";break;case $o:t="ENVMAP_TYPE_CUBE_UV";break}return t}function xM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ps:t="ENVMAP_MODE_REFRACTION";break}return t}function MM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Of:t="ENVMAP_BLENDING_MULTIPLY";break;case S_:t="ENVMAP_BLENDING_MIX";break;case y_:t="ENVMAP_BLENDING_ADD";break}return t}function SM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function yM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=gM(e),c=vM(e),u=xM(e),h=MM(e),d=SM(e),p=cM(e),_=uM(r),g=s.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(nr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(nr).join(`
`),f.length>0&&(f+=`
`)):(m=[oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),f=[oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?$t.tonemapping_pars_fragment:"",e.toneMapping!==Ei?aM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,oM("linearToOutputTexel",e.outputColorSpace),lM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(nr).join(`
`)),o=zl(o),o=ih(o,e),o=sh(o,e),a=zl(a),a=ih(a,e),a=sh(a,e),o=rh(o),a=rh(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=b+m+o,M=b+f+a,I=th(s,s.VERTEX_SHADER,T),C=th(s,s.FRAGMENT_SHADER,M);s.attachShader(g,I),s.attachShader(g,C),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function P(D){if(n.debug.checkShaderErrors){const Z=s.getProgramInfoLog(g).trim(),$=s.getShaderInfoLog(I).trim(),ot=s.getShaderInfoLog(C).trim();let lt=!0,Q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(lt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,I,C);else{const et=nh(s,I,"vertex"),V=nh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Z+`
`+et+`
`+V)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):($===""||ot==="")&&(Q=!1);Q&&(D.diagnostics={runnable:lt,programLog:Z,vertexShader:{log:$,prefix:m},fragmentShader:{log:ot,prefix:f}})}s.deleteShader(I),s.deleteShader(C),O=new So(s,g),A=hM(s,g)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,nM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iM++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=C,this}let EM=0;class bM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new TM(t),e.set(t,i)),i}}class TM{constructor(t){this.id=EM++,this.code=t,this.usedTimes=0}}function AM(n,t,e,i,s,r,o){const a=new vc,l=new bM,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,y,D,Z,$){const ot=Z.fog,lt=$.geometry,Q=A.isMeshStandardMaterial?Z.environment:null,et=(A.isMeshStandardMaterial?e:t).get(A.envMap||Q),V=et&&et.mapping===$o?et.image.height:null,mt=_[A.type];A.precision!==null&&(p=s.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const bt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,wt=bt!==void 0?bt.length:0;let Ft=0;lt.morphAttributes.position!==void 0&&(Ft=1),lt.morphAttributes.normal!==void 0&&(Ft=2),lt.morphAttributes.color!==void 0&&(Ft=3);let Jt,it,ht,At;if(mt){const se=Nn[mt];Jt=se.vertexShader,it=se.fragmentShader}else Jt=A.vertexShader,it=A.fragmentShader,l.update(A),ht=l.getVertexShaderID(A),At=l.getFragmentShaderID(A);const gt=n.getRenderTarget(),It=n.state.buffers.depth.getReversed(),zt=$.isInstancedMesh===!0,kt=$.isBatchedMesh===!0,ge=!!A.map,w=!!A.matcap,L=!!et,E=!!A.aoMap,st=!!A.lightMap,j=!!A.bumpMap,Y=!!A.normalMap,tt=!!A.displacementMap,at=!!A.emissiveMap,K=!!A.metalnessMap,x=!!A.roughnessMap,v=A.anisotropy>0,R=A.clearcoat>0,z=A.dispersion>0,k=A.iridescence>0,G=A.sheen>0,pt=A.transmission>0,ct=v&&!!A.anisotropyMap,ft=R&&!!A.clearcoatMap,Nt=R&&!!A.clearcoatNormalMap,ut=R&&!!A.clearcoatRoughnessMap,Mt=k&&!!A.iridescenceMap,Lt=k&&!!A.iridescenceThicknessMap,Ot=G&&!!A.sheenColorMap,_t=G&&!!A.sheenRoughnessMap,Vt=!!A.specularMap,Wt=!!A.specularColorMap,ie=!!A.specularIntensityMap,U=pt&&!!A.transmissionMap,St=pt&&!!A.thicknessMap,J=!!A.gradientMap,rt=!!A.alphaMap,Tt=A.alphaTest>0,yt=!!A.alphaHash,qt=!!A.extensions;let ve=Ei;A.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ve=n.toneMapping);const Ue={shaderID:mt,shaderType:A.type,shaderName:A.name,vertexShader:Jt,fragmentShader:it,defines:A.defines,customVertexShaderID:ht,customFragmentShaderID:At,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:kt,batchingColor:kt&&$._colorsTexture!==null,instancing:zt,instancingColor:zt&&$.instanceColor!==null,instancingMorph:zt&&$.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:gt===null?n.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Yi,alphaToCoverage:!!A.alphaToCoverage,map:ge,matcap:w,envMap:L,envMapMode:L&&et.mapping,envMapCubeUVHeight:V,aoMap:E,lightMap:st,bumpMap:j,normalMap:Y,displacementMap:d&&tt,emissiveMap:at,normalMapObjectSpace:Y&&A.normalMapType===U_,normalMapTangentSpace:Y&&A.normalMapType===L_,metalnessMap:K,roughnessMap:x,anisotropy:v,anisotropyMap:ct,clearcoat:R,clearcoatMap:ft,clearcoatNormalMap:Nt,clearcoatRoughnessMap:ut,dispersion:z,iridescence:k,iridescenceMap:Mt,iridescenceThicknessMap:Lt,sheen:G,sheenColorMap:Ot,sheenRoughnessMap:_t,specularMap:Vt,specularColorMap:Wt,specularIntensityMap:ie,transmission:pt,transmissionMap:U,thicknessMap:St,gradientMap:J,opaque:A.transparent===!1&&A.blending===Gi&&A.alphaToCoverage===!1,alphaMap:rt,alphaTest:Tt,alphaHash:yt,combine:A.combine,mapUv:ge&&g(A.map.channel),aoMapUv:E&&g(A.aoMap.channel),lightMapUv:st&&g(A.lightMap.channel),bumpMapUv:j&&g(A.bumpMap.channel),normalMapUv:Y&&g(A.normalMap.channel),displacementMapUv:tt&&g(A.displacementMap.channel),emissiveMapUv:at&&g(A.emissiveMap.channel),metalnessMapUv:K&&g(A.metalnessMap.channel),roughnessMapUv:x&&g(A.roughnessMap.channel),anisotropyMapUv:ct&&g(A.anisotropyMap.channel),clearcoatMapUv:ft&&g(A.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&g(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&g(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&g(A.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&g(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(A.sheenColorMap.channel),sheenRoughnessMapUv:_t&&g(A.sheenRoughnessMap.channel),specularMapUv:Vt&&g(A.specularMap.channel),specularColorMapUv:Wt&&g(A.specularColorMap.channel),specularIntensityMapUv:ie&&g(A.specularIntensityMap.channel),transmissionMapUv:U&&g(A.transmissionMap.channel),thicknessMapUv:St&&g(A.thicknessMap.channel),alphaMapUv:rt&&g(A.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Y||v),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!lt.attributes.uv&&(ge||rt),fog:!!ot,useFog:A.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:It,skinning:$.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Ft,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ve,decodeVideoTexture:ge&&A.map.isVideoTexture===!0&&Kt.getTransfer(A.map.colorSpace)===re,decodeVideoTextureEmissive:at&&A.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(A.emissiveMap.colorSpace)===re,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===En,flipSided:A.side===qe,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:qt&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&A.extensions.multiDraw===!0||kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function f(A){const y=[];if(A.shaderID?y.push(A.shaderID):(y.push(A.customVertexShaderID),y.push(A.customFragmentShaderID)),A.defines!==void 0)for(const D in A.defines)y.push(D),y.push(A.defines[D]);return A.isRawShaderMaterial===!1&&(b(y,A),T(y,A),y.push(n.outputColorSpace)),y.push(A.customProgramCacheKey),y.join()}function b(A,y){A.push(y.precision),A.push(y.outputColorSpace),A.push(y.envMapMode),A.push(y.envMapCubeUVHeight),A.push(y.mapUv),A.push(y.alphaMapUv),A.push(y.lightMapUv),A.push(y.aoMapUv),A.push(y.bumpMapUv),A.push(y.normalMapUv),A.push(y.displacementMapUv),A.push(y.emissiveMapUv),A.push(y.metalnessMapUv),A.push(y.roughnessMapUv),A.push(y.anisotropyMapUv),A.push(y.clearcoatMapUv),A.push(y.clearcoatNormalMapUv),A.push(y.clearcoatRoughnessMapUv),A.push(y.iridescenceMapUv),A.push(y.iridescenceThicknessMapUv),A.push(y.sheenColorMapUv),A.push(y.sheenRoughnessMapUv),A.push(y.specularMapUv),A.push(y.specularColorMapUv),A.push(y.specularIntensityMapUv),A.push(y.transmissionMapUv),A.push(y.thicknessMapUv),A.push(y.combine),A.push(y.fogExp2),A.push(y.sizeAttenuation),A.push(y.morphTargetsCount),A.push(y.morphAttributeCount),A.push(y.numDirLights),A.push(y.numPointLights),A.push(y.numSpotLights),A.push(y.numSpotLightMaps),A.push(y.numHemiLights),A.push(y.numRectAreaLights),A.push(y.numDirLightShadows),A.push(y.numPointLightShadows),A.push(y.numSpotLightShadows),A.push(y.numSpotLightShadowsWithMaps),A.push(y.numLightProbes),A.push(y.shadowMapType),A.push(y.toneMapping),A.push(y.numClippingPlanes),A.push(y.numClipIntersection),A.push(y.depthPacking)}function T(A,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),A.push(a.mask)}function M(A){const y=_[A.type];let D;if(y){const Z=Nn[y];D=cg.clone(Z.uniforms)}else D=A.uniforms;return D}function I(A,y){let D;for(let Z=0,$=u.length;Z<$;Z++){const ot=u[Z];if(ot.cacheKey===y){D=ot,++D.usedTimes;break}}return D===void 0&&(D=new yM(n,y,A,r),u.push(D)),D}function C(A){if(--A.usedTimes===0){const y=u.indexOf(A);u[y]=u[u.length-1],u.pop(),A.destroy()}}function P(A){l.remove(A)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:I,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:O}}function wM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function RM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ah(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function lh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,d,p,_,g,m){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=m),t++,f}function a(h,d,p,_,g,m){const f=o(h,d,p,_,g,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(h,d,p,_,g,m){const f=o(h,d,p,_,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||RM),i.length>1&&i.sort(d||ah),s.length>1&&s.sort(d||ah)}function u(){for(let h=t,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function CM(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new lh,n.set(i,[o])):s>=r.length?(o=new lh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function PM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Ut};break;case"SpotLight":e={position:new B,direction:new B,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new B,halfWidth:new B,halfHeight:new B};break}return n[t.id]=e,e}}}function DM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let LM=0;function UM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function IM(n){const t=new PM,e=DM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,r=new _e,o=new _e;function a(c){let u=0,h=0,d=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,_=0,g=0,m=0,f=0,b=0,T=0,M=0,I=0,C=0,P=0;c.sort(UM);for(let A=0,y=c.length;A<y;A++){const D=c[A],Z=D.color,$=D.intensity,ot=D.distance,lt=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=Z.r*$,h+=Z.g*$,d+=Z.b*$;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(D.sh.coefficients[Q],$);P++}else if(D.isDirectionalLight){const Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const et=D.shadow,V=e.get(D);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=lt,i.directionalShadowMatrix[p]=D.shadow.matrix,b++}i.directional[p]=Q,p++}else if(D.isSpotLight){const Q=t.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(Z).multiplyScalar($),Q.distance=ot,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,i.spot[g]=Q;const et=D.shadow;if(D.map&&(i.spotLightMap[I]=D.map,I++,et.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[g]=et.matrix,D.castShadow){const V=e.get(D);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,i.spotShadow[g]=V,i.spotShadowMap[g]=lt,M++}g++}else if(D.isRectAreaLight){const Q=t.get(D);Q.color.copy(Z).multiplyScalar($),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=Q,m++}else if(D.isPointLight){const Q=t.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){const et=D.shadow,V=e.get(D);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,V.shadowCameraNear=et.camera.near,V.shadowCameraFar=et.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=lt,i.pointShadowMatrix[_]=D.shadow.matrix,T++}i.point[_]=Q,_++}else if(D.isHemisphereLight){const Q=t.get(D);Q.skyColor.copy(D.color).multiplyScalar($),Q.groundColor.copy(D.groundColor).multiplyScalar($),i.hemi[f]=Q,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const O=i.hash;(O.directionalLength!==p||O.pointLength!==_||O.spotLength!==g||O.rectAreaLength!==m||O.hemiLength!==f||O.numDirectionalShadows!==b||O.numPointShadows!==T||O.numSpotShadows!==M||O.numSpotMaps!==I||O.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=M+I-C,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,O.directionalLength=p,O.pointLength=_,O.spotLength=g,O.rectAreaLength=m,O.hemiLength=f,O.numDirectionalShadows=b,O.numPointShadows=T,O.numSpotShadows=M,O.numSpotMaps=I,O.numLightProbes=P,i.version=LM++)}function l(c,u){let h=0,d=0,p=0,_=0,g=0;const m=u.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const T=c[f];if(T.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(T.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const M=i.hemi[g];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function ch(n){const t=new IM(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function NM(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ch(n),t.set(s,[a])):r>=o.length?(a=new ch(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class FM extends Os{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=P_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class OM extends Os{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const BM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zM=`uniform sampler2D shadow_pass;
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
}`;function VM(n,t,e){let i=new Mc;const s=new Gt,r=new Gt,o=new Me,a=new FM({depthPacking:D_}),l=new OM,c={},u=e.maxTextureSize,h={[bi]:qe,[qe]:bi,[En]:En},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:BM,fragmentShader:zM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new ze;_.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new tn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ff;let f=this.type;this.render=function(C,P,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const A=n.getRenderTarget(),y=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(yi),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const $=f!==jn&&this.type===jn,ot=f===jn&&this.type!==jn;for(let lt=0,Q=C.length;lt<Q;lt++){const et=C[lt],V=et.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const mt=V.getFrameExtents();if(s.multiply(mt),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/mt.x),s.x=r.x*mt.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/mt.y),s.y=r.y*mt.y,V.mapSize.y=r.y)),V.map===null||$===!0||ot===!0){const wt=this.type!==jn?{minFilter:Pe,magFilter:Pe}:{};V.map!==null&&V.map.dispose(),V.map=new ai(s.x,s.y,wt),V.map.texture.name=et.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const bt=V.getViewportCount();for(let wt=0;wt<bt;wt++){const Ft=V.getViewport(wt);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),Z.viewport(o),V.updateMatrices(et,wt),i=V.getFrustum(),M(P,O,V.camera,et,this.type)}V.isPointLightShadow!==!0&&this.type===jn&&b(V,O),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(A,y,D)};function b(C,P){const O=t.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ai(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,O,d,g,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,O,p,g,null)}function T(C,P,O,A){let y=null;const D=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)y=D;else if(y=O.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Z=y.uuid,$=P.uuid;let ot=c[Z];ot===void 0&&(ot={},c[Z]=ot);let lt=ot[$];lt===void 0&&(lt=y.clone(),ot[$]=lt,P.addEventListener("dispose",I)),y=lt}if(y.visible=P.visible,y.wireframe=P.wireframe,A===jn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:h[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const Z=n.properties.get(y);Z.light=O}return y}function M(C,P,O,A,y){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===jn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);const $=t.update(C),ot=C.material;if(Array.isArray(ot)){const lt=$.groups;for(let Q=0,et=lt.length;Q<et;Q++){const V=lt[Q],mt=ot[V.materialIndex];if(mt&&mt.visible){const bt=T(C,mt,A,y);C.onBeforeShadow(n,C,P,O,$,bt,V),n.renderBufferDirect(O,null,$,bt,C,V),C.onAfterShadow(n,C,P,O,$,bt,V)}}}else if(ot.visible){const lt=T(C,ot,A,y);C.onBeforeShadow(n,C,P,O,$,lt,null),n.renderBufferDirect(O,null,$,lt,C,null),C.onAfterShadow(n,C,P,O,$,lt,null)}}const Z=C.children;for(let $=0,ot=Z.length;$<ot;$++)M(Z[$],P,O,A,y)}function I(C){C.target.removeEventListener("dispose",I);for(const O in c){const A=c[O],y=C.target.uuid;y in A&&(A[y].dispose(),delete A[y])}}}const HM={[nl]:il,[sl]:al,[rl]:ll,[Rs]:ol,[il]:nl,[al]:sl,[ll]:rl,[ol]:Rs};function GM(n,t){function e(){let U=!1;const St=new Me;let J=null;const rt=new Me(0,0,0,0);return{setMask:function(Tt){J!==Tt&&!U&&(n.colorMask(Tt,Tt,Tt,Tt),J=Tt)},setLocked:function(Tt){U=Tt},setClear:function(Tt,yt,qt,ve,Ue){Ue===!0&&(Tt*=ve,yt*=ve,qt*=ve),St.set(Tt,yt,qt,ve),rt.equals(St)===!1&&(n.clearColor(Tt,yt,qt,ve),rt.copy(St))},reset:function(){U=!1,J=null,rt.set(-1,0,0,0)}}}function i(){let U=!1,St=!1,J=null,rt=null,Tt=null;return{setReversed:function(yt){if(St!==yt){const qt=t.get("EXT_clip_control");St?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);const ve=Tt;Tt=null,this.setClear(ve)}St=yt},getReversed:function(){return St},setTest:function(yt){yt?gt(n.DEPTH_TEST):It(n.DEPTH_TEST)},setMask:function(yt){J!==yt&&!U&&(n.depthMask(yt),J=yt)},setFunc:function(yt){if(St&&(yt=HM[yt]),rt!==yt){switch(yt){case nl:n.depthFunc(n.NEVER);break;case il:n.depthFunc(n.ALWAYS);break;case sl:n.depthFunc(n.LESS);break;case Rs:n.depthFunc(n.LEQUAL);break;case rl:n.depthFunc(n.EQUAL);break;case ol:n.depthFunc(n.GEQUAL);break;case al:n.depthFunc(n.GREATER);break;case ll:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}rt=yt}},setLocked:function(yt){U=yt},setClear:function(yt){Tt!==yt&&(St&&(yt=1-yt),n.clearDepth(yt),Tt=yt)},reset:function(){U=!1,J=null,rt=null,Tt=null,St=!1}}}function s(){let U=!1,St=null,J=null,rt=null,Tt=null,yt=null,qt=null,ve=null,Ue=null;return{setTest:function(se){U||(se?gt(n.STENCIL_TEST):It(n.STENCIL_TEST))},setMask:function(se){St!==se&&!U&&(n.stencilMask(se),St=se)},setFunc:function(se,vn,Vn){(J!==se||rt!==vn||Tt!==Vn)&&(n.stencilFunc(se,vn,Vn),J=se,rt=vn,Tt=Vn)},setOp:function(se,vn,Vn){(yt!==se||qt!==vn||ve!==Vn)&&(n.stencilOp(se,vn,Vn),yt=se,qt=vn,ve=Vn)},setLocked:function(se){U=se},setClear:function(se){Ue!==se&&(n.clearStencil(se),Ue=se)},reset:function(){U=!1,St=null,J=null,rt=null,Tt=null,yt=null,qt=null,ve=null,Ue=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,b=null,T=null,M=null,I=null,C=null,P=new Ut(0,0,0),O=0,A=!1,y=null,D=null,Z=null,$=null,ot=null;const lt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,et=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(V)[1]),Q=et>=1):V.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Q=et>=2);let mt=null,bt={};const wt=n.getParameter(n.SCISSOR_BOX),Ft=n.getParameter(n.VIEWPORT),Jt=new Me().fromArray(wt),it=new Me().fromArray(Ft);function ht(U,St,J,rt){const Tt=new Uint8Array(4),yt=n.createTexture();n.bindTexture(U,yt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qt=0;qt<J;qt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(St,0,n.RGBA,1,1,rt,0,n.RGBA,n.UNSIGNED_BYTE,Tt):n.texImage2D(St+qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Tt);return yt}const At={};At[n.TEXTURE_2D]=ht(n.TEXTURE_2D,n.TEXTURE_2D,1),At[n.TEXTURE_CUBE_MAP]=ht(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[n.TEXTURE_2D_ARRAY]=ht(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),At[n.TEXTURE_3D]=ht(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),gt(n.DEPTH_TEST),o.setFunc(Rs),j(!1),Y(pu),gt(n.CULL_FACE),E(yi);function gt(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function It(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function zt(U,St){return h[U]!==St?(n.bindFramebuffer(U,St),h[U]=St,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=St),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=St),!0):!1}function kt(U,St){let J=p,rt=!1;if(U){J=d.get(St),J===void 0&&(J=[],d.set(St,J));const Tt=U.textures;if(J.length!==Tt.length||J[0]!==n.COLOR_ATTACHMENT0){for(let yt=0,qt=Tt.length;yt<qt;yt++)J[yt]=n.COLOR_ATTACHMENT0+yt;J.length=Tt.length,rt=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,rt=!0);rt&&n.drawBuffers(J)}function ge(U){return _!==U?(n.useProgram(U),_=U,!0):!1}const w={[Fi]:n.FUNC_ADD,[s_]:n.FUNC_SUBTRACT,[r_]:n.FUNC_REVERSE_SUBTRACT};w[o_]=n.MIN,w[a_]=n.MAX;const L={[l_]:n.ZERO,[c_]:n.ONE,[u_]:n.SRC_COLOR,[tl]:n.SRC_ALPHA,[__]:n.SRC_ALPHA_SATURATE,[p_]:n.DST_COLOR,[f_]:n.DST_ALPHA,[h_]:n.ONE_MINUS_SRC_COLOR,[el]:n.ONE_MINUS_SRC_ALPHA,[m_]:n.ONE_MINUS_DST_COLOR,[d_]:n.ONE_MINUS_DST_ALPHA,[g_]:n.CONSTANT_COLOR,[v_]:n.ONE_MINUS_CONSTANT_COLOR,[x_]:n.CONSTANT_ALPHA,[M_]:n.ONE_MINUS_CONSTANT_ALPHA};function E(U,St,J,rt,Tt,yt,qt,ve,Ue,se){if(U===yi){g===!0&&(It(n.BLEND),g=!1);return}if(g===!1&&(gt(n.BLEND),g=!0),U!==i_){if(U!==m||se!==A){if((f!==Fi||M!==Fi)&&(n.blendEquation(n.FUNC_ADD),f=Fi,M=Fi),se)switch(U){case Gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qa:n.blendFunc(n.ONE,n.ONE);break;case mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _u:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _u:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,T=null,I=null,C=null,P.set(0,0,0),O=0,m=U,A=se}return}Tt=Tt||St,yt=yt||J,qt=qt||rt,(St!==f||Tt!==M)&&(n.blendEquationSeparate(w[St],w[Tt]),f=St,M=Tt),(J!==b||rt!==T||yt!==I||qt!==C)&&(n.blendFuncSeparate(L[J],L[rt],L[yt],L[qt]),b=J,T=rt,I=yt,C=qt),(ve.equals(P)===!1||Ue!==O)&&(n.blendColor(ve.r,ve.g,ve.b,Ue),P.copy(ve),O=Ue),m=U,A=!1}function st(U,St){U.side===En?It(n.CULL_FACE):gt(n.CULL_FACE);let J=U.side===qe;St&&(J=!J),j(J),U.blending===Gi&&U.transparent===!1?E(yi):E(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const rt=U.stencilWrite;a.setTest(rt),rt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),at(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):It(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(U){y!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),y=U)}function Y(U){U!==t_?(gt(n.CULL_FACE),U!==D&&(U===pu?n.cullFace(n.BACK):U===e_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):It(n.CULL_FACE),D=U}function tt(U){U!==Z&&(Q&&n.lineWidth(U),Z=U)}function at(U,St,J){U?(gt(n.POLYGON_OFFSET_FILL),($!==St||ot!==J)&&(n.polygonOffset(St,J),$=St,ot=J)):It(n.POLYGON_OFFSET_FILL)}function K(U){U?gt(n.SCISSOR_TEST):It(n.SCISSOR_TEST)}function x(U){U===void 0&&(U=n.TEXTURE0+lt-1),mt!==U&&(n.activeTexture(U),mt=U)}function v(U,St,J){J===void 0&&(mt===null?J=n.TEXTURE0+lt-1:J=mt);let rt=bt[J];rt===void 0&&(rt={type:void 0,texture:void 0},bt[J]=rt),(rt.type!==U||rt.texture!==St)&&(mt!==J&&(n.activeTexture(J),mt=J),n.bindTexture(U,St||At[U]),rt.type=U,rt.texture=St)}function R(){const U=bt[mt];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ot(U){Jt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Jt.copy(U))}function _t(U){it.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),it.copy(U))}function Vt(U,St){let J=c.get(St);J===void 0&&(J=new WeakMap,c.set(St,J));let rt=J.get(U);rt===void 0&&(rt=n.getUniformBlockIndex(St,U.name),J.set(U,rt))}function Wt(U,St){const rt=c.get(St).get(U);l.get(St)!==rt&&(n.uniformBlockBinding(St,rt,U.__bindingPointIndex),l.set(St,rt))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},mt=null,bt={},h={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,b=null,T=null,M=null,I=null,C=null,P=new Ut(0,0,0),O=0,A=!1,y=null,D=null,Z=null,$=null,ot=null,Jt.set(0,0,n.canvas.width,n.canvas.height),it.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:gt,disable:It,bindFramebuffer:zt,drawBuffers:kt,useProgram:ge,setBlending:E,setMaterial:st,setFlipSided:j,setCullFace:Y,setLineWidth:tt,setPolygonOffset:at,setScissorTest:K,activeTexture:x,bindTexture:v,unbindTexture:R,compressedTexImage2D:z,compressedTexImage3D:k,texImage2D:Mt,texImage3D:Lt,updateUBOMapping:Vt,uniformBlockBinding:Wt,texStorage2D:Nt,texStorage3D:ut,texSubImage2D:G,texSubImage3D:pt,compressedTexSubImage2D:ct,compressedTexSubImage3D:ft,scissor:Ot,viewport:_t,reset:ie}}function uh(n,t,e,i){const s=kM(i);switch(e){case kf:return n*t;case Xf:return n*t;case qf:return n*t*2;case Yf:return n*t/s.components*s.byteLength;case mc:return n*t/s.components*s.byteLength;case jf:return n*t*2/s.components*s.byteLength;case _c:return n*t*2/s.components*s.byteLength;case Wf:return n*t*3/s.components*s.byteLength;case Qe:return n*t*4/s.components*s.byteLength;case gc:return n*t*4/s.components*s.byteLength;case mo:case _o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case go:case vo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dl:case ml:return Math.max(n,16)*Math.max(t,8)/4;case fl:case pl:return Math.max(n,8)*Math.max(t,8)/2;case _l:case gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case yl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case bl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Al:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case wl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case xo:case Ul:case Il:return Math.ceil(n/4)*Math.ceil(t/4)*16;case $f:case Nl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Fl:case Ol:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kM(n){switch(n){case oi:case Vf:return{byteLength:1,components:1};case gr:case Hf:case yr:return{byteLength:2,components:1};case dc:case pc:return{byteLength:2,components:4};case ki:case fc:case pn:return{byteLength:4,components:1};case Gf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function WM(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(x,v){return p?new OffscreenCanvas(x,v):Uo("canvas")}function g(x,v,R){let z=1;const k=K(x);if((k.width>R||k.height>R)&&(z=R/Math.max(k.width,k.height)),z<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const G=Math.floor(z*k.width),pt=Math.floor(z*k.height);h===void 0&&(h=_(G,pt));const ct=v?_(G,pt):h;return ct.width=G,ct.height=pt,ct.getContext("2d").drawImage(x,0,0,G,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+G+"x"+pt+")."),ct}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),x;return x}function m(x){return x.generateMipmaps}function f(x){n.generateMipmap(x)}function b(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(x,v,R,z,k=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let G=v;if(v===n.RED&&(R===n.FLOAT&&(G=n.R32F),R===n.HALF_FLOAT&&(G=n.R16F),R===n.UNSIGNED_BYTE&&(G=n.R8)),v===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(G=n.R8UI),R===n.UNSIGNED_SHORT&&(G=n.R16UI),R===n.UNSIGNED_INT&&(G=n.R32UI),R===n.BYTE&&(G=n.R8I),R===n.SHORT&&(G=n.R16I),R===n.INT&&(G=n.R32I)),v===n.RG&&(R===n.FLOAT&&(G=n.RG32F),R===n.HALF_FLOAT&&(G=n.RG16F),R===n.UNSIGNED_BYTE&&(G=n.RG8)),v===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(G=n.RG8UI),R===n.UNSIGNED_SHORT&&(G=n.RG16UI),R===n.UNSIGNED_INT&&(G=n.RG32UI),R===n.BYTE&&(G=n.RG8I),R===n.SHORT&&(G=n.RG16I),R===n.INT&&(G=n.RG32I)),v===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(G=n.RGB8UI),R===n.UNSIGNED_SHORT&&(G=n.RGB16UI),R===n.UNSIGNED_INT&&(G=n.RGB32UI),R===n.BYTE&&(G=n.RGB8I),R===n.SHORT&&(G=n.RGB16I),R===n.INT&&(G=n.RGB32I)),v===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),R===n.UNSIGNED_INT&&(G=n.RGBA32UI),R===n.BYTE&&(G=n.RGBA8I),R===n.SHORT&&(G=n.RGBA16I),R===n.INT&&(G=n.RGBA32I)),v===n.RGB&&R===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),v===n.RGBA){const pt=k?Ko:Kt.getTransfer(z);R===n.FLOAT&&(G=n.RGBA32F),R===n.HALF_FLOAT&&(G=n.RGBA16F),R===n.UNSIGNED_BYTE&&(G=pt===re?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function M(x,v){let R;return x?v===null||v===ki||v===Ds?R=n.DEPTH24_STENCIL8:v===pn?R=n.DEPTH32F_STENCIL8:v===gr&&(R=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ki||v===Ds?R=n.DEPTH_COMPONENT24:v===pn?R=n.DEPTH_COMPONENT32F:v===gr&&(R=n.DEPTH_COMPONENT16),R}function I(x,v){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Pe&&x.minFilter!==dn?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function C(x){const v=x.target;v.removeEventListener("dispose",C),O(v),v.isVideoTexture&&u.delete(v)}function P(x){const v=x.target;v.removeEventListener("dispose",P),y(v)}function O(x){const v=i.get(x);if(v.__webglInit===void 0)return;const R=x.source,z=d.get(R);if(z){const k=z[v.__cacheKey];k.usedTimes--,k.usedTimes===0&&A(x),Object.keys(z).length===0&&d.delete(R)}i.remove(x)}function A(x){const v=i.get(x);n.deleteTexture(v.__webglTexture);const R=x.source,z=d.get(R);delete z[v.__cacheKey],o.memory.textures--}function y(x){const v=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(v.__webglFramebuffer[z]))for(let k=0;k<v.__webglFramebuffer[z].length;k++)n.deleteFramebuffer(v.__webglFramebuffer[z][k]);else n.deleteFramebuffer(v.__webglFramebuffer[z]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[z])}else{if(Array.isArray(v.__webglFramebuffer))for(let z=0;z<v.__webglFramebuffer.length;z++)n.deleteFramebuffer(v.__webglFramebuffer[z]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let z=0;z<v.__webglColorRenderbuffer.length;z++)v.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[z]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const R=x.textures;for(let z=0,k=R.length;z<k;z++){const G=i.get(R[z]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(R[z])}i.remove(x)}let D=0;function Z(){D=0}function $(){const x=D;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),D+=1,x}function ot(x){const v=[];return v.push(x.wrapS),v.push(x.wrapT),v.push(x.wrapR||0),v.push(x.magFilter),v.push(x.minFilter),v.push(x.anisotropy),v.push(x.internalFormat),v.push(x.format),v.push(x.type),v.push(x.generateMipmaps),v.push(x.premultiplyAlpha),v.push(x.flipY),v.push(x.unpackAlignment),v.push(x.colorSpace),v.join()}function lt(x,v){const R=i.get(x);if(x.isVideoTexture&&tt(x),x.isRenderTargetTexture===!1&&x.version>0&&R.__version!==x.version){const z=x.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(R,x,v);return}}e.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+v)}function Q(x,v){const R=i.get(x);if(x.version>0&&R.__version!==x.version){it(R,x,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+v)}function et(x,v){const R=i.get(x);if(x.version>0&&R.__version!==x.version){it(R,x,v);return}e.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+v)}function V(x,v){const R=i.get(x);if(x.version>0&&R.__version!==x.version){ht(R,x,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+v)}const mt={[Do]:n.REPEAT,[Bi]:n.CLAMP_TO_EDGE,[hl]:n.MIRRORED_REPEAT},bt={[Pe]:n.NEAREST,[C_]:n.NEAREST_MIPMAP_NEAREST,[Ir]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[ua]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},wt={[I_]:n.NEVER,[V_]:n.ALWAYS,[N_]:n.LESS,[Kf]:n.LEQUAL,[F_]:n.EQUAL,[z_]:n.GEQUAL,[O_]:n.GREATER,[B_]:n.NOTEQUAL};function Ft(x,v){if(v.type===pn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===dn||v.magFilter===ua||v.magFilter===Ir||v.magFilter===zi||v.minFilter===dn||v.minFilter===ua||v.minFilter===Ir||v.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,mt[v.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,mt[v.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,mt[v.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,bt[v.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,bt[v.minFilter]),v.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,wt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Pe||v.minFilter!==Ir&&v.minFilter!==zi||v.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const R=t.get("EXT_texture_filter_anisotropic");n.texParameterf(x,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Jt(x,v){let R=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",C));const z=v.source;let k=d.get(z);k===void 0&&(k={},d.set(z,k));const G=ot(v);if(G!==x.__cacheKey){k[G]===void 0&&(k[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,R=!0),k[G].usedTimes++;const pt=k[x.__cacheKey];pt!==void 0&&(k[x.__cacheKey].usedTimes--,pt.usedTimes===0&&A(v)),x.__cacheKey=G,x.__webglTexture=k[G].texture}return R}function it(x,v,R){let z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(z=n.TEXTURE_3D);const k=Jt(x,v),G=v.source;e.bindTexture(z,x.__webglTexture,n.TEXTURE0+R);const pt=i.get(G);if(G.version!==pt.__version||k===!0){e.activeTexture(n.TEXTURE0+R);const ct=Kt.getPrimaries(Kt.workingColorSpace),ft=v.colorSpace===Si?null:Kt.getPrimaries(v.colorSpace),Nt=v.colorSpace===Si||ct===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let ut=g(v.image,!1,s.maxTextureSize);ut=at(v,ut);const Mt=r.convert(v.format,v.colorSpace),Lt=r.convert(v.type);let Ot=T(v.internalFormat,Mt,Lt,v.colorSpace,v.isVideoTexture);Ft(z,v);let _t;const Vt=v.mipmaps,Wt=v.isVideoTexture!==!0,ie=pt.__version===void 0||k===!0,U=G.dataReady,St=I(v,ut);if(v.isDepthTexture)Ot=M(v.format===Ls,v.type),ie&&(Wt?e.texStorage2D(n.TEXTURE_2D,1,Ot,ut.width,ut.height):e.texImage2D(n.TEXTURE_2D,0,Ot,ut.width,ut.height,0,Mt,Lt,null));else if(v.isDataTexture)if(Vt.length>0){Wt&&ie&&e.texStorage2D(n.TEXTURE_2D,St,Ot,Vt[0].width,Vt[0].height);for(let J=0,rt=Vt.length;J<rt;J++)_t=Vt[J],Wt?U&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,_t.width,_t.height,Mt,Lt,_t.data):e.texImage2D(n.TEXTURE_2D,J,Ot,_t.width,_t.height,0,Mt,Lt,_t.data);v.generateMipmaps=!1}else Wt?(ie&&e.texStorage2D(n.TEXTURE_2D,St,Ot,ut.width,ut.height),U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut.width,ut.height,Mt,Lt,ut.data)):e.texImage2D(n.TEXTURE_2D,0,Ot,ut.width,ut.height,0,Mt,Lt,ut.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Wt&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,Ot,Vt[0].width,Vt[0].height,ut.depth);for(let J=0,rt=Vt.length;J<rt;J++)if(_t=Vt[J],v.format!==Qe)if(Mt!==null)if(Wt){if(U)if(v.layerUpdates.size>0){const Tt=uh(_t.width,_t.height,v.format,v.type);for(const yt of v.layerUpdates){const qt=_t.data.subarray(yt*Tt/_t.data.BYTES_PER_ELEMENT,(yt+1)*Tt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,yt,_t.width,_t.height,1,Mt,qt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,_t.width,_t.height,ut.depth,Mt,_t.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Ot,_t.width,_t.height,ut.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,_t.width,_t.height,ut.depth,Mt,Lt,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,Ot,_t.width,_t.height,ut.depth,0,Mt,Lt,_t.data)}else{Wt&&ie&&e.texStorage2D(n.TEXTURE_2D,St,Ot,Vt[0].width,Vt[0].height);for(let J=0,rt=Vt.length;J<rt;J++)_t=Vt[J],v.format!==Qe?Mt!==null?Wt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,_t.width,_t.height,Mt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,J,Ot,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?U&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,_t.width,_t.height,Mt,Lt,_t.data):e.texImage2D(n.TEXTURE_2D,J,Ot,_t.width,_t.height,0,Mt,Lt,_t.data)}else if(v.isDataArrayTexture)if(Wt){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,Ot,ut.width,ut.height,ut.depth),U)if(v.layerUpdates.size>0){const J=uh(ut.width,ut.height,v.format,v.type);for(const rt of v.layerUpdates){const Tt=ut.data.subarray(rt*J/ut.data.BYTES_PER_ELEMENT,(rt+1)*J/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,rt,ut.width,ut.height,1,Mt,Lt,Tt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Mt,Lt,ut.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,ut.width,ut.height,ut.depth,0,Mt,Lt,ut.data);else if(v.isData3DTexture)Wt?(ie&&e.texStorage3D(n.TEXTURE_3D,St,Ot,ut.width,ut.height,ut.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Mt,Lt,ut.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,ut.width,ut.height,ut.depth,0,Mt,Lt,ut.data);else if(v.isFramebufferTexture){if(ie)if(Wt)e.texStorage2D(n.TEXTURE_2D,St,Ot,ut.width,ut.height);else{let J=ut.width,rt=ut.height;for(let Tt=0;Tt<St;Tt++)e.texImage2D(n.TEXTURE_2D,Tt,Ot,J,rt,0,Mt,Lt,null),J>>=1,rt>>=1}}else if(Vt.length>0){if(Wt&&ie){const J=K(Vt[0]);e.texStorage2D(n.TEXTURE_2D,St,Ot,J.width,J.height)}for(let J=0,rt=Vt.length;J<rt;J++)_t=Vt[J],Wt?U&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,Mt,Lt,_t):e.texImage2D(n.TEXTURE_2D,J,Ot,Mt,Lt,_t);v.generateMipmaps=!1}else if(Wt){if(ie){const J=K(ut);e.texStorage2D(n.TEXTURE_2D,St,Ot,J.width,J.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,Lt,ut)}else e.texImage2D(n.TEXTURE_2D,0,Ot,Mt,Lt,ut);m(v)&&f(z),pt.__version=G.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function ht(x,v,R){if(v.image.length!==6)return;const z=Jt(x,v),k=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+R);const G=i.get(k);if(k.version!==G.__version||z===!0){e.activeTexture(n.TEXTURE0+R);const pt=Kt.getPrimaries(Kt.workingColorSpace),ct=v.colorSpace===Si?null:Kt.getPrimaries(v.colorSpace),ft=v.colorSpace===Si||pt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Nt=v.isCompressedTexture||v.image[0].isCompressedTexture,ut=v.image[0]&&v.image[0].isDataTexture,Mt=[];for(let rt=0;rt<6;rt++)!Nt&&!ut?Mt[rt]=g(v.image[rt],!0,s.maxCubemapSize):Mt[rt]=ut?v.image[rt].image:v.image[rt],Mt[rt]=at(v,Mt[rt]);const Lt=Mt[0],Ot=r.convert(v.format,v.colorSpace),_t=r.convert(v.type),Vt=T(v.internalFormat,Ot,_t,v.colorSpace),Wt=v.isVideoTexture!==!0,ie=G.__version===void 0||z===!0,U=k.dataReady;let St=I(v,Lt);Ft(n.TEXTURE_CUBE_MAP,v);let J;if(Nt){Wt&&ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,St,Vt,Lt.width,Lt.height);for(let rt=0;rt<6;rt++){J=Mt[rt].mipmaps;for(let Tt=0;Tt<J.length;Tt++){const yt=J[Tt];v.format!==Qe?Ot!==null?Wt?U&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Tt,0,0,yt.width,yt.height,Ot,yt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Tt,Vt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Tt,0,0,yt.width,yt.height,Ot,_t,yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Tt,Vt,yt.width,yt.height,0,Ot,_t,yt.data)}}}else{if(J=v.mipmaps,Wt&&ie){J.length>0&&St++;const rt=K(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,St,Vt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ut){Wt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Mt[rt].width,Mt[rt].height,Ot,_t,Mt[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Vt,Mt[rt].width,Mt[rt].height,0,Ot,_t,Mt[rt].data);for(let Tt=0;Tt<J.length;Tt++){const qt=J[Tt].image[rt].image;Wt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Tt+1,0,0,qt.width,qt.height,Ot,_t,qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Tt+1,Vt,qt.width,qt.height,0,Ot,_t,qt.data)}}else{Wt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ot,_t,Mt[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Vt,Ot,_t,Mt[rt]);for(let Tt=0;Tt<J.length;Tt++){const yt=J[Tt];Wt?U&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Tt+1,0,0,Ot,_t,yt.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Tt+1,Vt,Ot,_t,yt.image[rt])}}}m(v)&&f(n.TEXTURE_CUBE_MAP),G.__version=k.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function At(x,v,R,z,k,G){const pt=r.convert(R.format,R.colorSpace),ct=r.convert(R.type),ft=T(R.internalFormat,pt,ct,R.colorSpace),Nt=i.get(v),ut=i.get(R);if(ut.__renderTarget=v,!Nt.__hasExternalTextures){const Mt=Math.max(1,v.width>>G),Lt=Math.max(1,v.height>>G);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?e.texImage3D(k,G,ft,Mt,Lt,v.depth,0,pt,ct,null):e.texImage2D(k,G,ft,Mt,Lt,0,pt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,x),Y(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,k,ut.__webglTexture,0,j(v)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,k,ut.__webglTexture,G),e.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(x,v,R){if(n.bindRenderbuffer(n.RENDERBUFFER,x),v.depthBuffer){const z=v.depthTexture,k=z&&z.isDepthTexture?z.type:null,G=M(v.stencilBuffer,k),pt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=j(v);Y(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,G,v.width,v.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,G,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,G,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,x)}else{const z=v.textures;for(let k=0;k<z.length;k++){const G=z[k],pt=r.convert(G.format,G.colorSpace),ct=r.convert(G.type),ft=T(G.internalFormat,pt,ct,G.colorSpace),Nt=j(v);R&&Y(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,ft,v.width,v.height):Y(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt,ft,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ft,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function It(x,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,x),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(v.depthTexture);z.__renderTarget=v,(!z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),lt(v.depthTexture,0);const k=z.__webglTexture,G=j(v);if(v.depthTexture.format===Es)Y(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(v.depthTexture.format===Ls)Y(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function zt(x){const v=i.get(x),R=x.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==x.depthTexture){const z=x.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),z){const k=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,z.removeEventListener("dispose",k)};z.addEventListener("dispose",k),v.__depthDisposeCallback=k}v.__boundDepthTexture=z}if(x.depthTexture&&!v.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");It(v.__webglFramebuffer,x)}else if(R){v.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[z]),v.__webglDepthbuffer[z]===void 0)v.__webglDepthbuffer[z]=n.createRenderbuffer(),gt(v.__webglDepthbuffer[z],x,!1);else{const k=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,G)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),gt(v.__webglDepthbuffer,x,!1);else{const z=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,k)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(x,v,R){const z=i.get(x);v!==void 0&&At(z.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&zt(x)}function ge(x){const v=x.texture,R=i.get(x),z=i.get(v);x.addEventListener("dispose",P);const k=x.textures,G=x.isWebGLCubeRenderTarget===!0,pt=k.length>1;if(pt||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=v.version,o.memory.textures++),G){R.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){R.__webglFramebuffer[ct]=[];for(let ft=0;ft<v.mipmaps.length;ft++)R.__webglFramebuffer[ct][ft]=n.createFramebuffer()}else R.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){R.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)R.__webglFramebuffer[ct]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(pt)for(let ct=0,ft=k.length;ct<ft;ct++){const Nt=i.get(k[ct]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&Y(x)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let ct=0;ct<k.length;ct++){const ft=k[ct];R.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[ct]);const Nt=r.convert(ft.format,ft.colorSpace),ut=r.convert(ft.type),Mt=T(ft.internalFormat,Nt,ut,ft.colorSpace,x.isXRRenderTarget===!0),Lt=j(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,Mt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,R.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),gt(R.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Ft(n.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)At(R.__webglFramebuffer[ct][ft],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ft);else At(R.__webglFramebuffer[ct],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(v)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let ct=0,ft=k.length;ct<ft;ct++){const Nt=k[ct],ut=i.get(Nt);e.bindTexture(n.TEXTURE_2D,ut.__webglTexture),Ft(n.TEXTURE_2D,Nt),At(R.__webglFramebuffer,x,Nt,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(Nt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ct=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,z.__webglTexture),Ft(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)At(R.__webglFramebuffer[ft],x,v,n.COLOR_ATTACHMENT0,ct,ft);else At(R.__webglFramebuffer,x,v,n.COLOR_ATTACHMENT0,ct,0);m(v)&&f(ct),e.unbindTexture()}x.depthBuffer&&zt(x)}function w(x){const v=x.textures;for(let R=0,z=v.length;R<z;R++){const k=v[R];if(m(k)){const G=b(x),pt=i.get(k).__webglTexture;e.bindTexture(G,pt),f(G),e.unbindTexture()}}}const L=[],E=[];function st(x){if(x.samples>0){if(Y(x)===!1){const v=x.textures,R=x.width,z=x.height;let k=n.COLOR_BUFFER_BIT;const G=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=i.get(x),ct=v.length>1;if(ct)for(let ft=0;ft<v.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let ft=0;ft<v.length;ft++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pt.__webglColorRenderbuffer[ft]);const Nt=i.get(v[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Nt,0)}n.blitFramebuffer(0,0,R,z,0,0,R,z,k,n.NEAREST),l===!0&&(L.length=0,E.length=0,L.push(n.COLOR_ATTACHMENT0+ft),x.depthBuffer&&x.resolveDepthBuffer===!1&&(L.push(G),E.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,E)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let ft=0;ft<v.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,pt.__webglColorRenderbuffer[ft]);const Nt=i.get(v[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,Nt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const v=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function j(x){return Math.min(s.maxSamples,x.samples)}function Y(x){const v=i.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function tt(x){const v=o.render.frame;u.get(x)!==v&&(u.set(x,v),x.update())}function at(x,v){const R=x.colorSpace,z=x.format,k=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||R!==Yi&&R!==Si&&(Kt.getTransfer(R)===re?(z!==Qe||k!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),v}function K(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=Z,this.setTexture2D=lt,this.setTexture2DArray=Q,this.setTexture3D=et,this.setTextureCube=V,this.rebindTextures=kt,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Y}function XM(n,t){function e(i,s=Si){let r;const o=Kt.getTransfer(s);if(i===oi)return n.UNSIGNED_BYTE;if(i===dc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Vf)return n.BYTE;if(i===Hf)return n.SHORT;if(i===gr)return n.UNSIGNED_SHORT;if(i===fc)return n.INT;if(i===ki)return n.UNSIGNED_INT;if(i===pn)return n.FLOAT;if(i===yr)return n.HALF_FLOAT;if(i===kf)return n.ALPHA;if(i===Wf)return n.RGB;if(i===Qe)return n.RGBA;if(i===Xf)return n.LUMINANCE;if(i===qf)return n.LUMINANCE_ALPHA;if(i===Es)return n.DEPTH_COMPONENT;if(i===Ls)return n.DEPTH_STENCIL;if(i===Yf)return n.RED;if(i===mc)return n.RED_INTEGER;if(i===jf)return n.RG;if(i===_c)return n.RG_INTEGER;if(i===gc)return n.RGBA_INTEGER;if(i===mo||i===_o||i===go||i===vo)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fl||i===dl||i===pl||i===ml)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_l||i===gl||i===vl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===_l||i===gl)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xl||i===Ml||i===Sl||i===yl||i===El||i===bl||i===Tl||i===Al||i===wl||i===Rl||i===Cl||i===Pl||i===Dl||i===Ll)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ml)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===El)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Al)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ll)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xo||i===Ul||i===Il)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===xo)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$f||i===Nl||i===Fl||i===Ol)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===xo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ds?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class qM extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ms extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YM={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(YM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ms;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const jM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$M=`
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

}`;class KM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new De,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new gn({vertexShader:jM,fragmentShader:$M,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new tn(new Bs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZM extends ji{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,_=null;const g=new KM,m=e.getContextAttributes();let f=null,b=null;const T=[],M=[],I=new Gt;let C=null;const P=new hn;P.viewport=new Me;const O=new hn;O.viewport=new Me;const A=[P,O],y=new qM;let D=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ht=T[it];return ht===void 0&&(ht=new Ba,T[it]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(it){let ht=T[it];return ht===void 0&&(ht=new Ba,T[it]=ht),ht.getGripSpace()},this.getHand=function(it){let ht=T[it];return ht===void 0&&(ht=new Ba,T[it]=ht),ht.getHandSpace()};function $(it){const ht=M.indexOf(it.inputSource);if(ht===-1)return;const At=T[ht];At!==void 0&&(At.update(it.inputSource,it.frame,c||o),At.dispatchEvent({type:it.type,data:it.inputSource}))}function ot(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",ot),s.removeEventListener("inputsourceschange",lt);for(let it=0;it<T.length;it++){const ht=M[it];ht!==null&&(M[it]=null,T[it].disconnect(ht))}D=null,Z=null,g.reset(),t.setRenderTarget(f),p=null,d=null,h=null,s=null,b=null,Jt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",ot),s.addEventListener("inputsourceschange",lt),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const ht={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new ai(p.framebufferWidth,p.framebufferHeight,{format:Qe,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ht=null,At=null,gt=null;m.depth&&(gt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=m.stencil?Ls:Es,At=m.stencil?Ds:ki);const It={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(It),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new ai(d.textureWidth,d.textureHeight,{format:Qe,type:oi,depthTexture:new ad(d.textureWidth,d.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Jt.setContext(s),Jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function lt(it){for(let ht=0;ht<it.removed.length;ht++){const At=it.removed[ht],gt=M.indexOf(At);gt>=0&&(M[gt]=null,T[gt].disconnect(At))}for(let ht=0;ht<it.added.length;ht++){const At=it.added[ht];let gt=M.indexOf(At);if(gt===-1){for(let zt=0;zt<T.length;zt++)if(zt>=M.length){M.push(At),gt=zt;break}else if(M[zt]===null){M[zt]=At,gt=zt;break}if(gt===-1)break}const It=T[gt];It&&It.connect(At)}}const Q=new B,et=new B;function V(it,ht,At){Q.setFromMatrixPosition(ht.matrixWorld),et.setFromMatrixPosition(At.matrixWorld);const gt=Q.distanceTo(et),It=ht.projectionMatrix.elements,zt=At.projectionMatrix.elements,kt=It[14]/(It[10]-1),ge=It[14]/(It[10]+1),w=(It[9]+1)/It[5],L=(It[9]-1)/It[5],E=(It[8]-1)/It[0],st=(zt[8]+1)/zt[0],j=kt*E,Y=kt*st,tt=gt/(-E+st),at=tt*-E;if(ht.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(at),it.translateZ(tt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),It[10]===-1)it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const K=kt+tt,x=ge+tt,v=j-at,R=Y+(gt-at),z=w*ge/x*K,k=L*ge/x*K;it.projectionMatrix.makePerspective(v,R,z,k,K,x),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function mt(it,ht){ht===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ht.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let ht=it.near,At=it.far;g.texture!==null&&(g.depthNear>0&&(ht=g.depthNear),g.depthFar>0&&(At=g.depthFar)),y.near=O.near=P.near=ht,y.far=O.far=P.far=At,(D!==y.near||Z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,Z=y.far),P.layers.mask=it.layers.mask|2,O.layers.mask=it.layers.mask|4,y.layers.mask=P.layers.mask|O.layers.mask;const gt=it.parent,It=y.cameras;mt(y,gt);for(let zt=0;zt<It.length;zt++)mt(It[zt],gt);It.length===2?V(y,P,O):y.projectionMatrix.copy(P.projectionMatrix),bt(it,y,gt)};function bt(it,ht,At){At===null?it.matrix.copy(ht.matrixWorld):(it.matrix.copy(At.matrixWorld),it.matrix.invert(),it.matrix.multiply(ht.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Bl*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(it){l=it,d!==null&&(d.fixedFoveation=it),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=it)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let wt=null;function Ft(it,ht){if(u=ht.getViewerPose(c||o),_=ht,u!==null){const At=u.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let gt=!1;At.length!==y.cameras.length&&(y.cameras.length=0,gt=!0);for(let zt=0;zt<At.length;zt++){const kt=At[zt];let ge=null;if(p!==null)ge=p.getViewport(kt);else{const L=h.getViewSubImage(d,kt);ge=L.viewport,zt===0&&(t.setRenderTargetTextures(b,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(b))}let w=A[zt];w===void 0&&(w=new hn,w.layers.enable(zt),w.viewport=new Me,A[zt]=w),w.matrix.fromArray(kt.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(kt.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(ge.x,ge.y,ge.width,ge.height),zt===0&&(y.matrix.copy(w.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),gt===!0&&y.cameras.push(w)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){const zt=h.getDepthInformation(At[0]);zt&&zt.isValid&&zt.texture&&g.init(t,zt,s.renderState)}}for(let At=0;At<T.length;At++){const gt=M[At],It=T[At];gt!==null&&It!==void 0&&It.update(gt,ht,c||o)}wt&&wt(it,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),_=null}const Jt=new od;Jt.setAnimationLoop(Ft),this.setAnimationLoop=function(it){wt=it},this.dispose=function(){}}}const Ui=new li,JM=new _e;function QM(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,id(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,T,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,b,T):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===qe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===qe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),T=b.envMap,M=b.envMapRotation;T&&(m.envMap.value=T,Ui.copy(M),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(JM.makeRotationFromEuler(Ui)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=T*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function tS(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const M=T.program;i.uniformBlockBinding(b,M)}function c(b,T){let M=s[b.id];M===void 0&&(_(b),M=u(b),s[b.id]=M,b.addEventListener("dispose",m));const I=T.program;i.updateUBOMapping(b,I);const C=t.render.frame;r[b.id]!==C&&(d(b),r[b.id]=C)}function u(b){const T=h();b.__bindingPointIndex=T;const M=n.createBuffer(),I=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,M),M}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const T=s[b.id],M=b.uniforms,I=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let C=0,P=M.length;C<P;C++){const O=Array.isArray(M[C])?M[C]:[M[C]];for(let A=0,y=O.length;A<y;A++){const D=O[A];if(p(D,C,A,I)===!0){const Z=D.__offset,$=Array.isArray(D.value)?D.value:[D.value];let ot=0;for(let lt=0;lt<$.length;lt++){const Q=$[lt],et=g(Q);typeof Q=="number"||typeof Q=="boolean"?(D.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,Z+ot,D.__data)):Q.isMatrix3?(D.__data[0]=Q.elements[0],D.__data[1]=Q.elements[1],D.__data[2]=Q.elements[2],D.__data[3]=0,D.__data[4]=Q.elements[3],D.__data[5]=Q.elements[4],D.__data[6]=Q.elements[5],D.__data[7]=0,D.__data[8]=Q.elements[6],D.__data[9]=Q.elements[7],D.__data[10]=Q.elements[8],D.__data[11]=0):(Q.toArray(D.__data,ot),ot+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Z,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,T,M,I){const C=b.value,P=T+"_"+M;if(I[P]===void 0)return typeof C=="number"||typeof C=="boolean"?I[P]=C:I[P]=C.clone(),!0;{const O=I[P];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return I[P]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function _(b){const T=b.uniforms;let M=0;const I=16;for(let P=0,O=T.length;P<O;P++){const A=Array.isArray(T[P])?T[P]:[T[P]];for(let y=0,D=A.length;y<D;y++){const Z=A[y],$=Array.isArray(Z.value)?Z.value:[Z.value];for(let ot=0,lt=$.length;ot<lt;ot++){const Q=$[ot],et=g(Q),V=M%I,mt=V%et.boundary,bt=V+mt;M+=mt,bt!==0&&I-bt<et.storage&&(M+=I-bt),Z.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=M,M+=et.storage}}}const C=M%I;return C>0&&(M+=I-C),b.__size=M,b.__cache={},this}function g(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){const T=b.target;T.removeEventListener("dispose",m);const M=o.indexOf(T.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function f(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class eS{constructor(t={}){const{canvas:e=k_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const b=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=Ei,this.toneMappingExposure=1;const M=this;let I=!1,C=0,P=0,O=null,A=-1,y=null;const D=new Me,Z=new Me;let $=null;const ot=new Ut(0);let lt=0,Q=e.width,et=e.height,V=1,mt=null,bt=null;const wt=new Me(0,0,Q,et),Ft=new Me(0,0,Q,et);let Jt=!1;const it=new Mc;let ht=!1,At=!1;const gt=new _e,It=new _e,zt=new B,kt=new Me,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function L(){return O===null?V:1}let E=i;function st(S,N){return e.getContext(S,N)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hc}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),E===null){const N="webgl2";if(E=st(N,S),E===null)throw st(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let j,Y,tt,at,K,x,v,R,z,k,G,pt,ct,ft,Nt,ut,Mt,Lt,Ot,_t,Vt,Wt,ie,U;function St(){j=new ox(E),j.init(),Wt=new XM(E,j),Y=new tx(E,j,t,Wt),tt=new GM(E,j),Y.reverseDepthBuffer&&d&&tt.buffers.depth.setReversed(!0),at=new cx(E),K=new wM,x=new WM(E,j,tt,K,Y,Wt,at),v=new nx(M),R=new rx(M),z=new _g(E),ie=new J0(E,z),k=new ax(E,z,at,ie),G=new hx(E,k,z,at),Ot=new ux(E,Y,x),ut=new ex(K),pt=new AM(M,v,R,j,Y,ie,ut),ct=new QM(M,K),ft=new CM,Nt=new NM(j),Lt=new Z0(M,v,R,tt,G,p,l),Mt=new VM(M,G,Y),U=new tS(E,at,Y,tt),_t=new Q0(E,j,at),Vt=new lx(E,j,at),at.programs=pt.programs,M.capabilities=Y,M.extensions=j,M.properties=K,M.renderLists=ft,M.shadowMap=Mt,M.state=tt,M.info=at}St();const J=new ZM(M,E);this.xr=J,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const S=j.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=j.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(Q,et,!1))},this.getSize=function(S){return S.set(Q,et)},this.setSize=function(S,N,W=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=S,et=N,e.width=Math.floor(S*V),e.height=Math.floor(N*V),W===!0&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(Q*V,et*V).floor()},this.setDrawingBufferSize=function(S,N,W){Q=S,et=N,V=W,e.width=Math.floor(S*W),e.height=Math.floor(N*W),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(D)},this.getViewport=function(S){return S.copy(wt)},this.setViewport=function(S,N,W,X){S.isVector4?wt.set(S.x,S.y,S.z,S.w):wt.set(S,N,W,X),tt.viewport(D.copy(wt).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(Ft)},this.setScissor=function(S,N,W,X){S.isVector4?Ft.set(S.x,S.y,S.z,S.w):Ft.set(S,N,W,X),tt.scissor(Z.copy(Ft).multiplyScalar(V).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(S){tt.setScissorTest(Jt=S)},this.setOpaqueSort=function(S){mt=S},this.setTransparentSort=function(S){bt=S},this.getClearColor=function(S){return S.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(S=!0,N=!0,W=!0){let X=0;if(S){let F=!1;if(O!==null){const dt=O.texture.format;F=dt===gc||dt===_c||dt===mc}if(F){const dt=O.texture.type,Et=dt===oi||dt===ki||dt===gr||dt===Ds||dt===dc||dt===pc,Rt=Lt.getClearColor(),Ct=Lt.getClearAlpha(),Ht=Rt.r,Yt=Rt.g,Pt=Rt.b;Et?(_[0]=Ht,_[1]=Yt,_[2]=Pt,_[3]=Ct,E.clearBufferuiv(E.COLOR,0,_)):(g[0]=Ht,g[1]=Yt,g[2]=Pt,g[3]=Ct,E.clearBufferiv(E.COLOR,0,g))}else X|=E.COLOR_BUFFER_BIT}N&&(X|=E.DEPTH_BUFFER_BIT),W&&(X|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),ft.dispose(),Nt.dispose(),K.dispose(),v.dispose(),R.dispose(),G.dispose(),ie.dispose(),U.dispose(),pt.dispose(),J.dispose(),J.removeEventListener("sessionstart",Rc),J.removeEventListener("sessionend",Cc),Ti.stop()};function rt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const S=at.autoReset,N=Mt.enabled,W=Mt.autoUpdate,X=Mt.needsUpdate,F=Mt.type;St(),at.autoReset=S,Mt.enabled=N,Mt.autoUpdate=W,Mt.needsUpdate=X,Mt.type=F}function yt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function qt(S){const N=S.target;N.removeEventListener("dispose",qt),ve(N)}function ve(S){Ue(S),K.remove(S)}function Ue(S){const N=K.get(S).programs;N!==void 0&&(N.forEach(function(W){pt.releaseProgram(W)}),S.isShaderMaterial&&pt.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,W,X,F,dt){N===null&&(N=ge);const Et=F.isMesh&&F.matrixWorld.determinant()<0,Rt=gd(S,N,W,X,F);tt.setMaterial(X,Et);let Ct=W.index,Ht=1;if(X.wireframe===!0){if(Ct=k.getWireframeAttribute(W),Ct===void 0)return;Ht=2}const Yt=W.drawRange,Pt=W.attributes.position;let Zt=Yt.start*Ht,he=(Yt.start+Yt.count)*Ht;dt!==null&&(Zt=Math.max(Zt,dt.start*Ht),he=Math.min(he,(dt.start+dt.count)*Ht)),Ct!==null?(Zt=Math.max(Zt,0),he=Math.min(he,Ct.count)):Pt!=null&&(Zt=Math.max(Zt,0),he=Math.min(he,Pt.count));const de=he-Zt;if(de<0||de===1/0)return;ie.setup(F,X,Rt,W,Ct);let Ye,Qt=_t;if(Ct!==null&&(Ye=z.get(Ct),Qt=Vt,Qt.setIndex(Ye)),F.isMesh)X.wireframe===!0?(tt.setLineWidth(X.wireframeLinewidth*L()),Qt.setMode(E.LINES)):Qt.setMode(E.TRIANGLES);else if(F.isLine){let Dt=X.linewidth;Dt===void 0&&(Dt=1),tt.setLineWidth(Dt*L()),F.isLineSegments?Qt.setMode(E.LINES):F.isLineLoop?Qt.setMode(E.LINE_LOOP):Qt.setMode(E.LINE_STRIP)}else F.isPoints?Qt.setMode(E.POINTS):F.isSprite&&Qt.setMode(E.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Qt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))Qt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Dt=F._multiDrawStarts,Hn=F._multiDrawCounts,te=F._multiDrawCount,xn=Ct?z.get(Ct).bytesPerElement:1,$i=K.get(X).currentProgram.getUniforms();for(let en=0;en<te;en++)$i.setValue(E,"_gl_DrawID",en),Qt.render(Dt[en]/xn,Hn[en])}else if(F.isInstancedMesh)Qt.renderInstances(Zt,de,F.count);else if(W.isInstancedBufferGeometry){const Dt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Hn=Math.min(W.instanceCount,Dt);Qt.renderInstances(Zt,de,Hn)}else Qt.render(Zt,de)};function se(S,N,W){S.transparent===!0&&S.side===En&&S.forceSinglePass===!1?(S.side=qe,S.needsUpdate=!0,Cr(S,N,W),S.side=bi,S.needsUpdate=!0,Cr(S,N,W),S.side=En):Cr(S,N,W)}this.compile=function(S,N,W=null){W===null&&(W=S),f=Nt.get(W),f.init(N),T.push(f),W.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),S!==W&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const X=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const dt=F.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){const Rt=dt[Et];se(Rt,W,F),X.add(Rt)}else se(dt,W,F),X.add(dt)}),T.pop(),f=null,X},this.compileAsync=function(S,N,W=null){const X=this.compile(S,N,W);return new Promise(F=>{function dt(){if(X.forEach(function(Et){K.get(Et).currentProgram.isReady()&&X.delete(Et)}),X.size===0){F(S);return}setTimeout(dt,10)}j.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let vn=null;function Vn(S){vn&&vn(S)}function Rc(){Ti.stop()}function Cc(){Ti.start()}const Ti=new od;Ti.setAnimationLoop(Vn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(S){vn=S,J.setAnimationLoop(S),S===null?Ti.stop():Ti.start()},J.addEventListener("sessionstart",Rc),J.addEventListener("sessionend",Cc),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(N),N=J.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,N,O),f=Nt.get(S,T.length),f.init(N),T.push(f),It.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),it.setFromProjectionMatrix(It),At=this.localClippingEnabled,ht=ut.init(this.clippingPlanes,At),m=ft.get(S,b.length),m.init(),b.push(m),J.enabled===!0&&J.isPresenting===!0){const dt=M.xr.getDepthSensingMesh();dt!==null&&Jo(dt,N,-1/0,M.sortObjects)}Jo(S,N,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(mt,bt),w=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,w&&Lt.addToRenderList(m,S),this.info.render.frame++,ht===!0&&ut.beginShadows();const W=f.state.shadowsArray;Mt.render(W,S,N),ht===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,F=m.transmissive;if(f.setupLights(),N.isArrayCamera){const dt=N.cameras;if(F.length>0)for(let Et=0,Rt=dt.length;Et<Rt;Et++){const Ct=dt[Et];Dc(X,F,S,Ct)}w&&Lt.render(S);for(let Et=0,Rt=dt.length;Et<Rt;Et++){const Ct=dt[Et];Pc(m,S,Ct,Ct.viewport)}}else F.length>0&&Dc(X,F,S,N),w&&Lt.render(S),Pc(m,S,N);O!==null&&(x.updateMultisampleRenderTarget(O),x.updateRenderTargetMipmap(O)),S.isScene===!0&&S.onAfterRender(M,S,N),ie.resetDefaultState(),A=-1,y=null,T.pop(),T.length>0?(f=T[T.length-1],ht===!0&&ut.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Jo(S,N,W,X){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||it.intersectsSprite(S)){X&&kt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(It);const Et=G.update(S),Rt=S.material;Rt.visible&&m.push(S,Et,Rt,W,kt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||it.intersectsObject(S))){const Et=G.update(S),Rt=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),kt.copy(S.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),kt.copy(Et.boundingSphere.center)),kt.applyMatrix4(S.matrixWorld).applyMatrix4(It)),Array.isArray(Rt)){const Ct=Et.groups;for(let Ht=0,Yt=Ct.length;Ht<Yt;Ht++){const Pt=Ct[Ht],Zt=Rt[Pt.materialIndex];Zt&&Zt.visible&&m.push(S,Et,Zt,W,kt.z,Pt)}}else Rt.visible&&m.push(S,Et,Rt,W,kt.z,null)}}const dt=S.children;for(let Et=0,Rt=dt.length;Et<Rt;Et++)Jo(dt[Et],N,W,X)}function Pc(S,N,W,X){const F=S.opaque,dt=S.transmissive,Et=S.transparent;f.setupLightsView(W),ht===!0&&ut.setGlobalState(M.clippingPlanes,W),X&&tt.viewport(D.copy(X)),F.length>0&&Rr(F,N,W),dt.length>0&&Rr(dt,N,W),Et.length>0&&Rr(Et,N,W),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function Dc(S,N,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new ai(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?yr:oi,minFilter:zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const dt=f.state.transmissionRenderTarget[X.id],Et=X.viewport||D;dt.setSize(Et.z,Et.w);const Rt=M.getRenderTarget();M.setRenderTarget(dt),M.getClearColor(ot),lt=M.getClearAlpha(),lt<1&&M.setClearColor(16777215,.5),M.clear(),w&&Lt.render(W);const Ct=M.toneMapping;M.toneMapping=Ei;const Ht=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),ht===!0&&ut.setGlobalState(M.clippingPlanes,X),Rr(S,W,X),x.updateMultisampleRenderTarget(dt),x.updateRenderTargetMipmap(dt),j.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Pt=0,Zt=N.length;Pt<Zt;Pt++){const he=N[Pt],de=he.object,Ye=he.geometry,Qt=he.material,Dt=he.group;if(Qt.side===En&&de.layers.test(X.layers)){const Hn=Qt.side;Qt.side=qe,Qt.needsUpdate=!0,Lc(de,W,X,Ye,Qt,Dt),Qt.side=Hn,Qt.needsUpdate=!0,Yt=!0}}Yt===!0&&(x.updateMultisampleRenderTarget(dt),x.updateRenderTargetMipmap(dt))}M.setRenderTarget(Rt),M.setClearColor(ot,lt),Ht!==void 0&&(X.viewport=Ht),M.toneMapping=Ct}function Rr(S,N,W){const X=N.isScene===!0?N.overrideMaterial:null;for(let F=0,dt=S.length;F<dt;F++){const Et=S[F],Rt=Et.object,Ct=Et.geometry,Ht=X===null?Et.material:X,Yt=Et.group;Rt.layers.test(W.layers)&&Lc(Rt,N,W,Ct,Ht,Yt)}}function Lc(S,N,W,X,F,dt){S.onBeforeRender(M,N,W,X,F,dt),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(M,N,W,X,S,dt),F.transparent===!0&&F.side===En&&F.forceSinglePass===!1?(F.side=qe,F.needsUpdate=!0,M.renderBufferDirect(W,N,X,F,S,dt),F.side=bi,F.needsUpdate=!0,M.renderBufferDirect(W,N,X,F,S,dt),F.side=En):M.renderBufferDirect(W,N,X,F,S,dt),S.onAfterRender(M,N,W,X,F,dt)}function Cr(S,N,W){N.isScene!==!0&&(N=ge);const X=K.get(S),F=f.state.lights,dt=f.state.shadowsArray,Et=F.state.version,Rt=pt.getParameters(S,F.state,dt,N,W),Ct=pt.getProgramCacheKey(Rt);let Ht=X.programs;X.environment=S.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(S.isMeshStandardMaterial?R:v).get(S.envMap||X.environment),X.envMapRotation=X.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ht===void 0&&(S.addEventListener("dispose",qt),Ht=new Map,X.programs=Ht);let Yt=Ht.get(Ct);if(Yt!==void 0){if(X.currentProgram===Yt&&X.lightsStateVersion===Et)return Ic(S,Rt),Yt}else Rt.uniforms=pt.getUniforms(S),S.onBeforeCompile(Rt,M),Yt=pt.acquireProgram(Rt,Ct),Ht.set(Ct,Yt),X.uniforms=Rt.uniforms;const Pt=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pt.clippingPlanes=ut.uniform),Ic(S,Rt),X.needsLights=xd(S),X.lightsStateVersion=Et,X.needsLights&&(Pt.ambientLightColor.value=F.state.ambient,Pt.lightProbe.value=F.state.probe,Pt.directionalLights.value=F.state.directional,Pt.directionalLightShadows.value=F.state.directionalShadow,Pt.spotLights.value=F.state.spot,Pt.spotLightShadows.value=F.state.spotShadow,Pt.rectAreaLights.value=F.state.rectArea,Pt.ltc_1.value=F.state.rectAreaLTC1,Pt.ltc_2.value=F.state.rectAreaLTC2,Pt.pointLights.value=F.state.point,Pt.pointLightShadows.value=F.state.pointShadow,Pt.hemisphereLights.value=F.state.hemi,Pt.directionalShadowMap.value=F.state.directionalShadowMap,Pt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pt.spotShadowMap.value=F.state.spotShadowMap,Pt.spotLightMatrix.value=F.state.spotLightMatrix,Pt.spotLightMap.value=F.state.spotLightMap,Pt.pointShadowMap.value=F.state.pointShadowMap,Pt.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=Yt,X.uniformsList=null,Yt}function Uc(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=So.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Ic(S,N){const W=K.get(S);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function gd(S,N,W,X,F){N.isScene!==!0&&(N=ge),x.resetTextureUnits();const dt=N.fog,Et=X.isMeshStandardMaterial?N.environment:null,Rt=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Yi,Ct=(X.isMeshStandardMaterial?R:v).get(X.envMap||Et),Ht=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Yt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pt=!!W.morphAttributes.position,Zt=!!W.morphAttributes.normal,he=!!W.morphAttributes.color;let de=Ei;X.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(de=M.toneMapping);const Ye=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Qt=Ye!==void 0?Ye.length:0,Dt=K.get(X),Hn=f.state.lights;if(ht===!0&&(At===!0||S!==y)){const ln=S===y&&X.id===A;ut.setState(X,S,ln)}let te=!1;X.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Hn.state.version||Dt.outputColorSpace!==Rt||F.isBatchedMesh&&Dt.batching===!1||!F.isBatchedMesh&&Dt.batching===!0||F.isBatchedMesh&&Dt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Dt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Dt.instancing===!1||!F.isInstancedMesh&&Dt.instancing===!0||F.isSkinnedMesh&&Dt.skinning===!1||!F.isSkinnedMesh&&Dt.skinning===!0||F.isInstancedMesh&&Dt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Dt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Dt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Dt.instancingMorph===!1&&F.morphTexture!==null||Dt.envMap!==Ct||X.fog===!0&&Dt.fog!==dt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==ut.numPlanes||Dt.numIntersection!==ut.numIntersection)||Dt.vertexAlphas!==Ht||Dt.vertexTangents!==Yt||Dt.morphTargets!==Pt||Dt.morphNormals!==Zt||Dt.morphColors!==he||Dt.toneMapping!==de||Dt.morphTargetsCount!==Qt)&&(te=!0):(te=!0,Dt.__version=X.version);let xn=Dt.currentProgram;te===!0&&(xn=Cr(X,N,F));let $i=!1,en=!1,Vs=!1;const pe=xn.getUniforms(),Pn=Dt.uniforms;if(tt.useProgram(xn.program)&&($i=!0,en=!0,Vs=!0),X.id!==A&&(A=X.id,en=!0),$i||y!==S){tt.buffers.depth.getReversed()?(gt.copy(S.projectionMatrix),X_(gt),q_(gt),pe.setValue(E,"projectionMatrix",gt)):pe.setValue(E,"projectionMatrix",S.projectionMatrix),pe.setValue(E,"viewMatrix",S.matrixWorldInverse);const ui=pe.map.cameraPosition;ui!==void 0&&ui.setValue(E,zt.setFromMatrixPosition(S.matrixWorld)),Y.logarithmicDepthBuffer&&pe.setValue(E,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pe.setValue(E,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,en=!0,Vs=!0)}if(F.isSkinnedMesh){pe.setOptional(E,F,"bindMatrix"),pe.setOptional(E,F,"bindMatrixInverse");const ln=F.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),pe.setValue(E,"boneTexture",ln.boneTexture,x))}F.isBatchedMesh&&(pe.setOptional(E,F,"batchingTexture"),pe.setValue(E,"batchingTexture",F._matricesTexture,x),pe.setOptional(E,F,"batchingIdTexture"),pe.setValue(E,"batchingIdTexture",F._indirectTexture,x),pe.setOptional(E,F,"batchingColorTexture"),F._colorsTexture!==null&&pe.setValue(E,"batchingColorTexture",F._colorsTexture,x));const Hs=W.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0)&&Ot.update(F,W,xn),(en||Dt.receiveShadow!==F.receiveShadow)&&(Dt.receiveShadow=F.receiveShadow,pe.setValue(E,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Pn.envMap.value=Ct,Pn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(Pn.envMapIntensity.value=N.environmentIntensity),en&&(pe.setValue(E,"toneMappingExposure",M.toneMappingExposure),Dt.needsLights&&vd(Pn,Vs),dt&&X.fog===!0&&ct.refreshFogUniforms(Pn,dt),ct.refreshMaterialUniforms(Pn,X,V,et,f.state.transmissionRenderTarget[S.id]),So.upload(E,Uc(Dt),Pn,x)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(So.upload(E,Uc(Dt),Pn,x),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pe.setValue(E,"center",F.center),pe.setValue(E,"modelViewMatrix",F.modelViewMatrix),pe.setValue(E,"normalMatrix",F.normalMatrix),pe.setValue(E,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const ln=X.uniformsGroups;for(let ui=0,hi=ln.length;ui<hi;ui++){const Nc=ln[ui];U.update(Nc,xn),U.bind(Nc,xn)}}return xn}function vd(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function xd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(S,N,W){K.get(S.texture).__webglTexture=N,K.get(S.depthTexture).__webglTexture=W;const X=K.get(S);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){const W=K.get(S);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,W=0){O=S,C=N,P=W;let X=!0,F=null,dt=!1,Et=!1;if(S){const Ct=K.get(S);if(Ct.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(E.FRAMEBUFFER,null),X=!1;else if(Ct.__webglFramebuffer===void 0)x.setupRenderTarget(S);else if(Ct.__hasExternalTextures)x.rebindTextures(S,K.get(S.texture).__webglTexture,K.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Pt=S.depthTexture;if(Ct.__boundDepthTexture!==Pt){if(Pt!==null&&K.has(Pt)&&(S.width!==Pt.image.width||S.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(S)}}const Ht=S.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Et=!0);const Yt=K.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Yt[N])?F=Yt[N][W]:F=Yt[N],dt=!0):S.samples>0&&x.useMultisampledRTT(S)===!1?F=K.get(S).__webglMultisampledFramebuffer:Array.isArray(Yt)?F=Yt[W]:F=Yt,D.copy(S.viewport),Z.copy(S.scissor),$=S.scissorTest}else D.copy(wt).multiplyScalar(V).floor(),Z.copy(Ft).multiplyScalar(V).floor(),$=Jt;if(tt.bindFramebuffer(E.FRAMEBUFFER,F)&&X&&tt.drawBuffers(S,F),tt.viewport(D),tt.scissor(Z),tt.setScissorTest($),dt){const Ct=K.get(S.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct.__webglTexture,W)}else if(Et){const Ct=K.get(S.texture),Ht=N||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ct.__webglTexture,W||0,Ht)}A=-1},this.readRenderTargetPixels=function(S,N,W,X,F,dt,Et){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=K.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(Rt=Rt[Et]),Rt){tt.bindFramebuffer(E.FRAMEBUFFER,Rt);try{const Ct=S.texture,Ht=Ct.format,Yt=Ct.type;if(!Y.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-X&&W>=0&&W<=S.height-F&&E.readPixels(N,W,X,F,Wt.convert(Ht),Wt.convert(Yt),dt)}finally{const Ct=O!==null?K.get(O).__webglFramebuffer:null;tt.bindFramebuffer(E.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(S,N,W,X,F,dt,Et){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=K.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(Rt=Rt[Et]),Rt){const Ct=S.texture,Ht=Ct.format,Yt=Ct.type;if(!Y.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=S.width-X&&W>=0&&W<=S.height-F){tt.bindFramebuffer(E.FRAMEBUFFER,Rt);const Pt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Pt),E.bufferData(E.PIXEL_PACK_BUFFER,dt.byteLength,E.STREAM_READ),E.readPixels(N,W,X,F,Wt.convert(Ht),Wt.convert(Yt),0);const Zt=O!==null?K.get(O).__webglFramebuffer:null;tt.bindFramebuffer(E.FRAMEBUFFER,Zt);const he=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await W_(E,he,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Pt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,dt),E.deleteBuffer(Pt),E.deleteSync(he),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,N=null,W=0){S.isTexture!==!0&&(er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,S=arguments[1]);const X=Math.pow(2,-W),F=Math.floor(S.image.width*X),dt=Math.floor(S.image.height*X),Et=N!==null?N.x:0,Rt=N!==null?N.y:0;x.setTexture2D(S,0),E.copyTexSubImage2D(E.TEXTURE_2D,W,0,0,Et,Rt,F,dt),tt.unbindTexture()},this.copyTextureToTexture=function(S,N,W=null,X=null,F=0){S.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,S=arguments[1],N=arguments[2],F=arguments[3]||0,W=null);let dt,Et,Rt,Ct,Ht,Yt,Pt,Zt,he;const de=S.isCompressedTexture?S.mipmaps[F]:S.image;W!==null?(dt=W.max.x-W.min.x,Et=W.max.y-W.min.y,Rt=W.isBox3?W.max.z-W.min.z:1,Ct=W.min.x,Ht=W.min.y,Yt=W.isBox3?W.min.z:0):(dt=de.width,Et=de.height,Rt=de.depth||1,Ct=0,Ht=0,Yt=0),X!==null?(Pt=X.x,Zt=X.y,he=X.z):(Pt=0,Zt=0,he=0);const Ye=Wt.convert(N.format),Qt=Wt.convert(N.type);let Dt;N.isData3DTexture?(x.setTexture3D(N,0),Dt=E.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(x.setTexture2DArray(N,0),Dt=E.TEXTURE_2D_ARRAY):(x.setTexture2D(N,0),Dt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,N.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,N.unpackAlignment);const Hn=E.getParameter(E.UNPACK_ROW_LENGTH),te=E.getParameter(E.UNPACK_IMAGE_HEIGHT),xn=E.getParameter(E.UNPACK_SKIP_PIXELS),$i=E.getParameter(E.UNPACK_SKIP_ROWS),en=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,de.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,de.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ct),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ht),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Yt);const Vs=S.isDataArrayTexture||S.isData3DTexture,pe=N.isDataArrayTexture||N.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Pn=K.get(S),Hs=K.get(N),ln=K.get(Pn.__renderTarget),ui=K.get(Hs.__renderTarget);tt.bindFramebuffer(E.READ_FRAMEBUFFER,ln.__webglFramebuffer),tt.bindFramebuffer(E.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let hi=0;hi<Rt;hi++)Vs&&E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,K.get(S).__webglTexture,F,Yt+hi),S.isDepthTexture?(pe&&E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,K.get(N).__webglTexture,F,he+hi),E.blitFramebuffer(Ct,Ht,dt,Et,Pt,Zt,dt,Et,E.DEPTH_BUFFER_BIT,E.NEAREST)):pe?E.copyTexSubImage3D(Dt,F,Pt,Zt,he+hi,Ct,Ht,dt,Et):E.copyTexSubImage2D(Dt,F,Pt,Zt,he+hi,Ct,Ht,dt,Et);tt.bindFramebuffer(E.READ_FRAMEBUFFER,null),tt.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else pe?S.isDataTexture||S.isData3DTexture?E.texSubImage3D(Dt,F,Pt,Zt,he,dt,Et,Rt,Ye,Qt,de.data):N.isCompressedArrayTexture?E.compressedTexSubImage3D(Dt,F,Pt,Zt,he,dt,Et,Rt,Ye,de.data):E.texSubImage3D(Dt,F,Pt,Zt,he,dt,Et,Rt,Ye,Qt,de):S.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,F,Pt,Zt,dt,Et,Ye,Qt,de.data):S.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,F,Pt,Zt,de.width,de.height,Ye,de.data):E.texSubImage2D(E.TEXTURE_2D,F,Pt,Zt,dt,Et,Ye,Qt,de);E.pixelStorei(E.UNPACK_ROW_LENGTH,Hn),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,te),E.pixelStorei(E.UNPACK_SKIP_PIXELS,xn),E.pixelStorei(E.UNPACK_SKIP_ROWS,$i),E.pixelStorei(E.UNPACK_SKIP_IMAGES,en),F===0&&N.generateMipmaps&&E.generateMipmap(Dt),tt.unbindTexture()},this.copyTextureToTexture3D=function(S,N,W=null,X=null,F=0){return S.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,S=arguments[2],N=arguments[3],F=arguments[4]||0),er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,N,W,X,F)},this.initRenderTarget=function(S){K.get(S).__webglFramebuffer===void 0&&x.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?x.setTextureCube(S,0):S.isData3DTexture?x.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?x.setTexture2DArray(S,0):x.setTexture2D(S,0),tt.unbindTexture()},this.resetState=function(){C=0,P=0,O=null,tt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}class Io{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=i}clone(){return new Io(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fd extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class hh extends De{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Pe,u=Pe,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ec extends Os{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const No=new B,Fo=new B,fh=new _e,Zs=new Ar,eo=new Tr,za=new B,dh=new B;class dd extends Te{constructor(t=new ze,e=new Ec){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)No.fromBufferAttribute(e,s-1),Fo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=No.distanceTo(Fo);t.setAttribute("lineDistance",new _n(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(s),eo.radius+=r,t.ray.intersectsSphere(eo)===!1)return;fh.copy(s).invert(),Zs.copy(t.ray).applyMatrix4(fh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=c){const f=u.getX(g),b=u.getX(g+1),T=no(this,t,Zs,l,f,b);T&&e.push(T)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(p),f=no(this,t,Zs,l,g,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=c){const f=no(this,t,Zs,l,g,g+1);f&&e.push(f)}if(this.isLineLoop){const g=no(this,t,Zs,l,_-1,p);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function no(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(No.fromBufferAttribute(o,s),Fo.fromBufferAttribute(o,r),e.distanceSqToSegment(No,Fo,za,dh)>i)return;za.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(za);if(!(l<t.near||l>t.far))return{distance:l,point:dh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const ph=new B,mh=new B;class nS extends dd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)ph.fromBufferAttribute(e,s),mh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ph.distanceTo(mh);t.setAttribute("lineDistance",new _n(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bc extends Os{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _h=new _e,Vl=new Ar,io=new Tr,so=new B;class pd extends Te{constructor(t=new ze,e=new bc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(s),io.radius+=r,t.ray.intersectsSphere(io)===!1)return;_h.copy(s).invert(),Vl.copy(t.ray).applyMatrix4(_h);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=d,g=p;_<g;_++){const m=c.getX(_);so.fromBufferAttribute(h,m),gh(so,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,g=p;_<g;_++)so.fromBufferAttribute(h,_),gh(so,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function gh(n,t,e,i,s,r,o){const a=Vl.distanceSqToPoint(n);if(a<e){const l=new B;Vl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Tc extends De{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ac extends ze{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new B,d=new B,p=[],_=[],g=[],m=[];for(let f=0;f<=i;f++){const b=[],T=f/i;let M=0;f===0&&o===0?M=.5/e:f===i&&l===Math.PI&&(M=-.5/e);for(let I=0;I<=e;I++){const C=I/e;h.x=-t*Math.cos(s+C*r)*Math.sin(o+T*a),h.y=t*Math.cos(o+T*a),h.z=t*Math.sin(s+C*r)*Math.sin(o+T*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(C+M,1-T),b.push(c++)}u.push(b)}for(let f=0;f<i;f++)for(let b=0;b<e;b++){const T=u[f][b+1],M=u[f][b],I=u[f+1][b],C=u[f+1][b+1];(f!==0||o>0)&&p.push(T,M,C),(f!==i-1||l<Math.PI)&&p.push(M,I,C)}this.setIndex(p),this.setAttribute("position",new _n(_,3)),this.setAttribute("normal",new _n(g,3)),this.setAttribute("uv",new _n(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ac(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class md extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class iS extends md{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Va=new _e,vh=new B,xh=new B;class sS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mc,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;vh.setFromMatrixPosition(t.matrixWorld),e.position.copy(vh),xh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xh),e.updateMatrixWorld(),Va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Va),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Va)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class rS extends sS{constructor(){super(new Sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mh extends md{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new rS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class oS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Sh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Sh(){return performance.now()}const yh=new _e;class aS{constructor(t,e,i=0,s=1/0){this.ray=new Ar(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new vc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yh),this}intersectObject(t,e=!0,i=[]){return Hl(t,this,i,e),i.sort(Eh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Hl(t[s],this,i,e);return i.sort(Eh),i}}function Eh(n,t){return n.distance-t.distance}function Hl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Hl(r[o],t,e,!0)}}class bh{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(We(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lS extends ji{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hc);const Th={type:"change"},wc={type:"start"},_d={type:"end"},ro=new Ar,Ah=new xi,cS=Math.cos(70*G_.DEG2RAD),be=new B,$e=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ha=1e-6;class uS extends lS{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ys.ROTATE,MIDDLE:ys.DOLLY,RIGHT:ys.PAN},this.touches={ONE:ds.ROTATE,TWO:ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Wi,this._lastTargetPosition=new B,this._quat=new Wi().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bh,this._sphericalDelta=new bh,this._scale=1,this._panOffset=new B,this._rotateStart=new Gt,this._rotateEnd=new Gt,this._rotateDelta=new Gt,this._panStart=new Gt,this._panEnd=new Gt,this._panDelta=new Gt,this._dollyStart=new Gt,this._dollyEnd=new Gt,this._dollyDelta=new Gt,this._dollyDirection=new B,this._mouse=new Gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fS.bind(this),this._onPointerDown=hS.bind(this),this._onPointerUp=dS.bind(this),this._onContextMenu=MS.bind(this),this._onMouseWheel=_S.bind(this),this._onKeyDown=gS.bind(this),this._onTouchStart=vS.bind(this),this._onTouchMove=xS.bind(this),this._onMouseDown=pS.bind(this),this._onMouseMove=mS.bind(this),this._interceptControlDown=SS.bind(this),this._interceptControlUp=yS.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Th),this.update(),this.state=oe.NONE}update(t=null){const e=this.object.position;be.copy(e).sub(this.target),be.applyQuaternion(this._quat),this._spherical.setFromVector3(be),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=$e:i>Math.PI&&(i-=$e),s<-Math.PI?s+=$e:s>Math.PI&&(s-=$e),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(be.setFromSpherical(this._spherical),be.applyQuaternion(this._quatInverse),e.copy(this.target).add(be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=be.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ro.origin.copy(this.object.position),ro.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ro.direction))<cS?this.object.lookAt(this.target):(Ah.setFromNormalAndCoplanarPoint(this.object.up,this.target),ro.intersectPlane(Ah,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ha||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ha||this._lastTargetPosition.distanceToSquared(this.target)>Ha?(this.dispatchEvent(Th),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?$e/60*this.autoRotateSpeed*t:$e/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){be.setFromMatrixColumn(e,0),be.multiplyScalar(-t),this._panOffset.add(be)}_panUp(t,e){this.screenSpacePanning===!0?be.setFromMatrixColumn(e,1):(be.setFromMatrixColumn(e,0),be.crossVectors(this.object.up,be)),be.multiplyScalar(t),this._panOffset.add(be)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;be.copy(s).sub(this.target);let r=be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp($e*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-$e*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft($e*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-$e*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function hS(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function fS(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function dS(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_d),this.state=oe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function pS(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=oe.DOLLY;break;case ys.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}break;case ys.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(wc)}function mS(n){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function _S(n){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(n.preventDefault(),this.dispatchEvent(wc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(_d))}function gS(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function vS(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ds.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=oe.TOUCH_ROTATE;break;case ds.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case ds.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=oe.TOUCH_DOLLY_PAN;break;case ds.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(wc)}function xS(n){switch(this._trackPointer(n),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=oe.NONE}}function MS(n){this.enabled!==!1&&n.preventDefault()}function SS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yS(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const oo=800;class _s extends tn{constructor(e=1){super();nt(this,"terrainData");nt(this,"vertExag");this.terrainData=null,this.vertExag=e}async load(e,i){const[s,r]=await Promise.all([this.loadTerrain(e),this.loadTexture(i)]);this.terrainData=s,this.geometry=this.buildTerrainGeometry(s,this.vertExag),this.material=this.createTerrainMaterial(r)}update(e){this.material.uniforms.uRampBlend.value=e.rampBlend,this.material.wireframe=e.wireframe}updateSky(e,i){this.material.uniforms.uSkyColor.value=new Ut(e?"#16203a":"#cfe8ff"),this.material.uniforms.uGroundColor.value=new Ut(e?"#0a0f16":"#3d5a3a"),this.material.uniforms.uAmbient.value=e?.18*i:.35,this.material.uniforms.uSunIntensity.value=e?.55*i:1.1}static decodeTerrainRgb(e,i,s){return Km+(e*65536+i*256+s)*Zm}static sampleElevation(e,i,s,r,o){const a=(r+ue/2)/ue*(i-1),l=(o+ue/2)/ue*(s-1),c=Math.min(Math.max(Math.floor(a),0),i-2),u=Math.min(Math.max(Math.floor(l),0),s-2),h=a-c,d=l-u,p=(M,I)=>I*i+M,_=e[p(c,u)],g=e[p(c+1,u)],m=e[p(c,u+1)],f=e[p(c+1,u+1)],b=_+(g-_)*h,T=m+(f-m)*h;return b+(T-b)*d}buildTerrainGeometry(e,i){const s=Jm,r=s+1,o=new Float32Array(r*r*3),a=new Float32Array(r*r*2),l=new Float32Array(r*r),c=ue/s;for(let p=0;p<r;p++)for(let _=0;_<r;_++){const g=p*r+_,m=_*c-ue/2,f=p*c-ue/2,b=e.sampleWorld(m,f),T=(b-e.minElev)*i;o[g*3]=m,o[g*3+1]=T,o[g*3+2]=f,a[g*2]=_/s,a[g*2+1]=1-p/s,l[g]=e.range>0?(b-e.minElev)/e.range:0}const u=new Uint32Array(s*s*6);let h=0;for(let p=0;p<s;p++)for(let _=0;_<s;_++){const g=p*r+_,m=g+1,f=g+r,b=g+r+1;u[h++]=g,u[h++]=f,u[h++]=m,u[h++]=m,u[h++]=f,u[h++]=b}const d=new ze;return d.setAttribute("position",new me(o,3)),d.setAttribute("uv",new me(a,2)),d.setAttribute("aElev",new me(l,1)),d.setIndex(new me(u,1)),d.computeVertexNormals(),d}createTerrainMaterial(e){return new gn({uniforms:{uMap:{value:e??new De},uRampBlend:{value:.5},uSunDir:{value:new B(.45,.85,.3).normalize()},uSkyColor:{value:new Ut("#cfe8ff")},uGroundColor:{value:new Ut("#3d5a3a")},uAmbient:{value:.35},uSunIntensity:{value:1.1}},vertexShader:`
                    #include <common>
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
            `,fragmentShader:`
                uniform sampler2D uMap;
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
                    vec3         col = base * (uAmbient * hemi + uSunIntensity * ndl);
                    gl_FragColor = vec4(col, 1.0);
                    #include <logdepthbuf_fragment>
                }
            `,side:En})}async loadTerrain(e){const i=await _s.loadImage(e),s=document.createElement("canvas");s.width=i.width,s.height=i.height;const r=s.getContext("2d",{willReadFrequently:!0});r.drawImage(i,0,0);const{data:o}=r.getImageData(0,0,i.width,i.height),a=i.width,l=i.height,c=new Float32Array(a*l);let u=1/0,h=-1/0;for(let p=0;p<o.length;p+=4){const _=_s.decodeTerrainRgb(o[p],o[p+1],o[p+2]);c[p/4]=_,_<u&&(u=_),_>h&&(h=_)}for(let p=0;p<a;p++)c[p]=oo,c[(l-1)*a+p]=oo;for(let p=0;p<l;p++)c[p*a]=oo,c[p*a+a-1]=oo;const d=(p,_)=>_s.sampleElevation(c,a,l,p,_);return{imgW:a,imgH:l,elevations:c,minElev:u,maxElev:h,range:h-u,sampleWorld:d}}async loadTexture(e){const i=await _s.loadImage(e),s=new Tc(i);return s.colorSpace=rn,s.wrapS=s.wrapT=Do,s.anisotropy=8,s}static async loadImage(e){return new Promise((i,s)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>i(r),r.onerror=s,r.src=e})}}const ES=4;function bS(n,t,e,i,s){const r=n-e,o=t-i;return Math.exp(-(r*r+o*o)/Math.max(2*s*s,1))}function Gl(n,t,e,i,s,r){const o=ue/2,a=Math.max(t,s*ES),l=ao(Math.floor((e-a+o)/t),n),c=ao(Math.floor((e+a+o)/t),n),u=ao(Math.floor((i-a+o)/t),n),h=ao(Math.floor((i+a+o)/t),n);for(let d=u;d<=h;d++){const p=(d+.5)*t-o;for(let _=l;_<=c;_++){const g=(_+.5)*t-o;r(_,d,bS(g,p,e,i,s))}}}function kl(n,t,e,i,s){let r=0;return Gl(n,t,e,i,s,(o,a,l)=>{r+=l}),Math.max(1e-6,r*t*t)}function ao(n,t){return Math.min(Math.max(n,0),t-1)}const TS=.16;class AS{constructor(t,e){nt(this,"N",256);nt(this,"cell",ue/256);nt(this,"u",new Float32Array(0));nt(this,"v",new Float32Array(0));nt(this,"uPrev",new Float32Array(0));nt(this,"vPrev",new Float32Array(0));nt(this,"h",new Float32Array(0));nt(this,"bed",new Float32Array(0));nt(this,"fluxX",new Float32Array(0));nt(this,"fluxZ",new Float32Array(0));nt(this,"simTime",0);nt(this,"maxWater",0);nt(this,"fieldVersion",0);nt(this,"volume",0);this.data=t,this.params=e,this.setSize(e.simN)}setSize(t){this.N=t,this.cell=ue/t;const e=t*t;this.u=new Float32Array(e),this.v=new Float32Array(e),this.uPrev=new Float32Array(e),this.vPrev=new Float32Array(e),this.h=new Float32Array(e),this.fluxX=new Float32Array(e),this.fluxZ=new Float32Array(e),this.bed=new Float32Array(e);const i=ue/2;for(let s=0;s<t;s++)for(let r=0;r<t;r++){const o=(r+.5)*this.cell-i,a=(s+.5)*this.cell-i;this.bed[s*t+r]=this.data.sampleWorld(o,a)-this.data.minElev}this.reset()}reset(){this.u.fill(0),this.v.fill(0),this.h.fill(0),this.simTime=0,this.volume=0,this.maxWater=0,this.fieldVersion++}addWater(t,e,i,s,r){this.addWaterDepth(t,e,Math.max(0,i*s),r)}addWaterVolume(t,e,i,s){if(i<=0)return;const r=kl(this.N,this.cell,t,e,s);this.addWaterDepth(t,e,i/r,s)}addWaterDepth(t,e,i,s){if(i<=0)return;const r=this.N;Gl(r,this.cell,t,e,s,(o,a,l)=>{this.h[a*r+o]+=i*l}),this.updateStatsFromArrays(),this.fieldVersion++}addPush(t,e,i,s,r,o){const a=Math.hypot(i,s);if(a<=1e-4)return;const l=Math.min(18,a*r*.7),c=this.N;Gl(c,this.cell,t,e,o,(u,h,d)=>{const p=h*c+u;this.u[p]+=i/a*l*d,this.v[p]+=s/a*l*d}),this.updateStatsFromArrays(),this.fieldVersion++}addRain(t){if(this.params.tool!=="global")return;const e=this.params.rain;if(e<=0)return;const i=e/1e3/3600,s=this.h;for(let r=0;r<s.length;r++)s[r]+=i*t}fillToLevel(t){const e=this.bed,i=this.h;for(let s=0;s<i.length;s++){const r=t-e[s];r>i[s]&&(i[s]=r),this.u[s]=0,this.v[s]=0}this.updateStatsFromArrays(),this.fieldVersion++}step(t){const e=this.params,i=Math.sqrt(Math.max(1,e.gravity*e.vertExag*Math.max(this.maxWater,1))),s=this.cell*.22/Math.max(1,e.maxSpeed,i),r=Math.min(Math.max(t*e.timeScale,0),s);this.simTime+=r,this.applyGravity(r,e),this.advectVelocity(r),this.applyFriction(r,e),this.conservativeContinuity(r,e),this.addRain(r),this.applyBoundaryDrain(r),this.clampVelocity(),this.zeroBoundaryVelocity(),this.updateStatsFromArrays(),this.fieldVersion++}applyGravity(t,e){const i=this.N,s=this.cell,r=this.u,o=this.v,a=this.h,l=this.bed,c=e.gravity*e.vertExag;for(let u=0;u<i;u++)for(let h=0;h<i;h++){const d=u*i+h,p=Math.max(0,h-1),_=Math.min(i-1,h+1),g=Math.max(0,u-1),m=Math.min(i-1,u+1),f=l[u*i+p]+a[u*i+p],b=l[u*i+_]+a[u*i+_],T=l[g*i+h]+a[g*i+h],M=l[m*i+h]+a[m*i+h],I=(b-f)/(2*s),C=(M-T)/(2*s);r[d]-=t*c*I,o[d]-=t*c*C}}advectVelocity(t){const e=this.N,i=this.cell;for(let r=0;r<e;r++)for(let o=0;o<e;o++){const a=r*e+o,l=o-t*this.u[a]/i,c=r-t*this.v[a]/i;this.uPrev[a]=wh(this.u,l,c,e),this.vPrev[a]=wh(this.v,l,c,e)}let s=this.u;this.u=this.uPrev,this.uPrev=s,s=this.v,this.v=this.vPrev,this.vPrev=s}applyFriction(t,e){const i=1/(1+t*e.friction),s=this.u,r=this.v;for(let o=0;o<s.length;o++)s[o]*=i,r[o]*=i}conservativeContinuity(t,e){const i=this.N,s=this.cell,r=this.u,o=this.v,a=this.h,l=this.fluxX,c=this.fluxZ,u=e.drainBoundary,h=t/s;for(let d=0;d<i;d++)for(let p=0;p<i-1;p++){const _=d*i+p,g=.5*(r[_]+r[_+1]);l[_]=g*(g>0?a[_]:a[_+1])}for(let d=0;d<i-1;d++)for(let p=0;p<i;p++){const _=d*i+p,g=.5*(o[_]+o[_+i]);c[_]=g*(g>0?a[_]:a[_+i])}for(let d=0;d<i;d++)for(let p=0;p<i;p++){const _=d*i+p,g=p===0,m=p===i-1,f=d===0,b=d===i-1,T=g?0:l[_-1],M=f?0:c[_-i];let I,C;u?(I=m?Math.max(0,r[_]*a[_]):g?Math.max(0,-r[_]*a[_]):l[_],C=b?Math.max(0,o[_]*a[_]):f?Math.max(0,-o[_]*a[_]):c[_]):(I=m?0:l[_],C=b?0:c[_]),a[_]+=h*(T-I+M-C),a[_]<0&&(a[_]=0)}}clampVelocity(){const t=this.params.maxSpeed,e=t*t,i=this.u,s=this.v;for(let r=0;r<i.length;r++){const o=i[r]*i[r]+s[r]*s[r];if(o>e){const a=t/Math.sqrt(o);i[r]*=a,s[r]*=a}}}zeroBoundaryVelocity(){if(this.params.drainBoundary)return;const t=this.N,e=this.u,i=this.v;for(let s=0;s<t;s++)e[s*t]=0,e[s*t+t-1]=0;for(let s=0;s<t;s++)i[s]=0,i[(t-1)*t+s]=0}applyBoundaryDrain(t){if(!this.params.drainBoundary||t<=0)return;const e=this.N,i=this.h,s=Math.max(1,e*TS);for(let r=0;r<e;r++)for(let o=0;o<e;o++){const a=Math.min(o,r,e-1-o,e-1-r);if(a>=s)continue;const l=1-a/s;i[r*e+o]*=Math.exp(-.8*l*t)}}getVolume(){return this.volume}updateStatsFromArrays(){let t=0,e=0;const i=this.h;for(let s=0;s<i.length;s++)t+=i[s],i[s]>e&&(e=i[s]);this.volume=t*this.cell*this.cell,this.maxWater=e}}function wh(n,t,e,i){const s=lo(Math.floor(t),i),r=lo(Math.floor(t)+1,i),o=lo(Math.floor(e),i),a=lo(Math.floor(e)+1,i),l=t-Math.floor(t),c=e-Math.floor(e),u=n[o*i+s],h=n[o*i+r],d=n[a*i+s],p=n[a*i+r],_=u+(h-u)*l,g=d+(p-d)*l;return _+(g-_)*c}function lo(n,t){return Math.min(Math.max(n,0),t-1)}class wS{constructor(t,e,i){nt(this,"N",256);nt(this,"cell",ue/256);nt(this,"h",new Float32Array(0));nt(this,"u",new Float32Array(0));nt(this,"v",new Float32Array(0));nt(this,"bed",new Float32Array(0));nt(this,"simTime",0);nt(this,"maxWater",0);nt(this,"fieldVersion",0);nt(this,"volume",0);nt(this,"readBuffer",new Float32Array(0));nt(this,"uploadBuffer",new Float32Array(0));nt(this,"bedBuffer",new Float32Array(0));nt(this,"stateTexture",null);nt(this,"bedTexture",null);nt(this,"rtA",null);nt(this,"rtB",null);nt(this,"current",null);nt(this,"next",null);nt(this,"scene",new fd);nt(this,"camera",new Sc(-1,1,1,-1,0,1));nt(this,"quad");nt(this,"material");nt(this,"impulses",[]);nt(this,"readFrame",0);nt(this,"conservedVolume",0);this.renderer=t,this.data=e,this.params=i,this.material=this.createStepMaterial(),this.quad=new tn(new Bs(2,2),this.material),this.scene.add(this.quad),this.setSize(i.simN)}setSize(t){this.N=t,this.cell=ue/t;const e=t*t;this.h=new Float32Array(e),this.u=new Float32Array(e),this.v=new Float32Array(e),this.bed=new Float32Array(e),this.readBuffer=new Float32Array(e*4),this.uploadBuffer=new Float32Array(e*4),this.bedBuffer=new Float32Array(e*4),this.buildBed(),this.rebuildTargets(),this.reset()}reset(){this.h.fill(0),this.u.fill(0),this.v.fill(0),this.simTime=0,this.volume=0,this.maxWater=0,this.conservedVolume=0,this.uploadState()}addWater(t,e,i,s,r){const o=Math.max(0,i*s),a=kl(this.N,this.cell,t,e,r);this.impulses.push({x:t,z:e,radius:r,water:o,volume:o*a,pushX:0,pushZ:0})}addWaterVolume(t,e,i,s){if(i<=0)return;const r=this.computeBrushEffectiveArea(t,e,s);this.impulses.push({x:t,z:e,radius:s,water:i/r,volume:i,pushX:0,pushZ:0})}addPush(t,e,i,s,r,o){const a=Math.hypot(i,s);if(a<=1e-4)return;const l=Math.min(18,a*r*.7);this.impulses.push({x:t,z:e,radius:o,water:0,volume:0,pushX:i/a*l,pushZ:s/a*l})}fillToLevel(t){for(let e=0;e<this.h.length;e++)this.h[e]=Math.max(this.h[e],t-this.bed[e],0),this.u[e]=0,this.v[e]=0;this.uploadState(),this.updateStatsFromArrays(),this.conservedVolume=this.volume}step(t){const e=Math.sqrt(Math.max(1,this.params.gravity*this.params.vertExag*Math.max(this.maxWater,1))),i=this.cell*.22/Math.max(1,this.params.maxSpeed,e),s=Math.min(Math.max(t*this.params.timeScale,0),i);if(s<=0||!this.current||!this.next||!this.bedTexture)return;this.simTime+=s;const r=this.consumeImpulse(),o=this.computeSourceVolume(r,s),a=this.conservedVolume+o;this.conservedVolume=a,this.volume=a;const l=this.material;l.uniforms.uState.value=this.current.texture,l.uniforms.uBed.value=this.bedTexture,l.uniforms.uTexel.value.set(1/this.N,1/this.N),l.uniforms.uDt.value=s,l.uniforms.uCell.value=this.cell,l.uniforms.uGravity.value=this.params.gravity*this.params.vertExag,l.uniforms.uFriction.value=this.params.friction,l.uniforms.uMaxSpeed.value=this.params.maxSpeed,l.uniforms.uDrain.value=this.params.drainBoundary?1:0,l.uniforms.uRainRate.value=this.params.tool==="global"&&this.params.rain>0?this.params.rain/1e3/3600:0,l.uniforms.uBrushCenter.value.set(r?r.x:999999,r?r.z:999999),l.uniforms.uBrushRadius.value=r?r.radius:1,l.uniforms.uBrushWater.value=r?r.water:0,l.uniforms.uBrushPush.value.set(r?r.pushX:0,r?r.pushZ:0);const c=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.next),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(c),this.swapTargets(),this.readFrame=(this.readFrame+1)%15;const u=this.params.tool==="global"&&this.params.rain>0;(r||u||this.maxWater>1e-4)&&(r||this.readFrame===0)&&this.readState(this.conservedVolume,!this.params.drainBoundary)}getVolume(){return this.volume}syncState(){this.readState(this.conservedVolume,!this.params.drainBoundary),this.readFrame=0}dispose(){var t,e,i,s;(t=this.rtA)==null||t.dispose(),(e=this.rtB)==null||e.dispose(),(i=this.stateTexture)==null||i.dispose(),(s=this.bedTexture)==null||s.dispose(),this.quad.geometry.dispose(),this.material.dispose()}buildBed(){var e;const t=ue/2;for(let i=0;i<this.N;i++)for(let s=0;s<this.N;s++){const r=i*this.N+s,o=(s+.5)*this.cell-t,a=(i+.5)*this.cell-t;this.bed[r]=this.data.sampleWorld(o,a)-this.data.minElev,this.bedBuffer[r*4]=this.bed[r],this.bedBuffer[r*4+3]=1}(e=this.bedTexture)==null||e.dispose(),this.bedTexture=new hh(this.bedBuffer,this.N,this.N,Qe,pn),this.bedTexture.magFilter=Pe,this.bedTexture.minFilter=Pe,this.bedTexture.needsUpdate=!0}rebuildTargets(){var e,i;(e=this.rtA)==null||e.dispose(),(i=this.rtB)==null||i.dispose();const t={format:Qe,type:pn,depthBuffer:!1,stencilBuffer:!1,minFilter:dn,magFilter:dn};this.rtA=new ai(this.N,this.N,t),this.rtB=new ai(this.N,this.N,t),this.current=this.rtA,this.next=this.rtB}uploadState(){var t;for(let e=0;e<this.h.length;e++)this.uploadBuffer[e*4]=this.h[e],this.uploadBuffer[e*4+1]=this.u[e],this.uploadBuffer[e*4+2]=this.v[e],this.uploadBuffer[e*4+3]=1;(t=this.stateTexture)==null||t.dispose(),this.stateTexture=new hh(this.uploadBuffer,this.N,this.N,Qe,pn),this.stateTexture.magFilter=Pe,this.stateTexture.minFilter=Pe,this.stateTexture.needsUpdate=!0,this.copyTextureToTargets(this.stateTexture),this.fieldVersion++}copyTextureToTargets(t){if(!this.rtA||!this.rtB)return;const e=this.material.uniforms.uState.value;this.material.uniforms.uState.value=t,this.material.uniforms.uDt.value=0;const i=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.rtA),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(this.rtB),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(i),this.material.uniforms.uState.value=e,this.current=this.rtA,this.next=this.rtB}readState(t,e=!1){if(!this.current)return;this.renderer.readRenderTargetPixels(this.current,0,0,this.N,this.N,this.readBuffer);let i=0,s=0;for(let a=0;a<this.h.length;a++){const l=Math.max(0,this.readBuffer[a*4]);this.h[a]=l,this.u[a]=this.readBuffer[a*4+1],this.v[a]=this.readBuffer[a*4+2],i+=l,l>s&&(s=l)}const r=i*this.cell*this.cell;if(t!==void 0&&r>0&&(e||r>t)){const a=t/r;s=0;for(let l=0;l<this.h.length;l++)this.h[l]*=a,this.h[l]>s&&(s=this.h[l]);this.volume=t,this.conservedVolume=t,this.uploadState()}else this.volume=r,this.conservedVolume=r;this.maxWater=s,this.fieldVersion++}updateStatsFromArrays(){let t=0,e=0;for(let i=0;i<this.h.length;i++)t+=this.h[i],this.h[i]>e&&(e=this.h[i]);this.volume=t*this.cell*this.cell,this.maxWater=e}consumeImpulse(){if(this.impulses.length===0)return null;const t={x:this.impulses[this.impulses.length-1].x,z:this.impulses[this.impulses.length-1].z,radius:this.impulses[this.impulses.length-1].radius,water:0,volume:0,pushX:0,pushZ:0};for(const e of this.impulses)t.water+=e.water,t.volume+=e.volume,t.pushX+=e.pushX,t.pushZ+=e.pushZ;return this.impulses.length=0,t}computeSourceVolume(t,e){let i=0;return t&&(i+=t.volume),this.params.tool==="global"&&this.params.rain>0&&(i+=this.params.rain/1e3/3600*e*ue*ue),i}computeBrushEffectiveArea(t,e,i){return kl(this.N,this.cell,t,e,i)}swapTargets(){const t=this.current;this.current=this.next,this.next=t}createStepMaterial(){return new gn({depthWrite:!1,depthTest:!1,uniforms:{uState:{value:null},uBed:{value:null},uTexel:{value:new Gt(1/256,1/256)},uDt:{value:0},uCell:{value:ue/256},uGravity:{value:9.8},uFriction:{value:.05},uMaxSpeed:{value:26},uRainRate:{value:0},uDrain:{value:0},uBrushCenter:{value:new Gt(999999,999999)},uBrushRadius:{value:1},uBrushWater:{value:0},uBrushPush:{value:new Gt(0,0)}},vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4(position.xy, 0.0, 1.0);
                }
            `,fragmentShader:`
                precision highp float;
                uniform sampler2D uState;
                uniform sampler2D uBed;
                uniform vec2 uTexel;
                uniform float uDt;
                uniform float uCell;
                uniform float uGravity;
                uniform float uFriction;
                uniform float uMaxSpeed;
                uniform float uRainRate;
                uniform float uDrain;
                uniform vec2 uBrushCenter;
                uniform float uBrushRadius;
                uniform float uBrushWater;
                uniform vec2 uBrushPush;
                varying vec2 vUv;

                const float WORLD_SIZE_F = 5000.0;
                const float BOUNDARY_DRAIN_BAND_F = WORLD_SIZE_F * 0.16;
                const float BOUNDARY_DRAIN_RATE = 0.8;

                vec4 readState(vec2 uv) {
                    return texture2D(uState, clamp(uv, vec2(0.0), vec2(1.0)));
                }

                float readBed(vec2 uv) {
                    return texture2D(uBed, clamp(uv, vec2(0.0), vec2(1.0))).r;
                }

                void main() {
                    vec4 s = readState(vUv);
                    float h = max(s.r, 0.0);
                    vec2 vel = s.gb;
                    if (uDt <= 0.0) {
                        gl_FragColor = vec4(h, vel.x, vel.y, 1.0);
                        return;
                    }

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

                    float surfaceL = bL + max(sL.r, 0.0);
                    float surfaceR = bR + max(sR.r, 0.0);
                    float surfaceT = bT + max(sT.r, 0.0);
                    float surfaceB = bB + max(sB.r, 0.0);
                    vec2 slope = vec2(surfaceR - surfaceL, surfaceB - surfaceT) / (2.0 * uCell);
                    vel -= uGravity * slope * uDt;

                    vel *= 1.0 / (1.0 + uFriction * uDt);

                    vec2 world = vec2(vUv.x * WORLD_SIZE_F - WORLD_SIZE_F * 0.5,
                                      vUv.y * WORLD_SIZE_F - WORLD_SIZE_F * 0.5);
                    float brushDist = distance(world, uBrushCenter);
                    float brush = exp(-(brushDist * brushDist) / max(2.0 * uBrushRadius * uBrushRadius, 1.0));
                    h += uBrushWater * brush;
                    vel += uBrushPush * brush;
                    h += uRainRate * uDt;

                    float speedBeforeFlux = length(vel);
                    if (speedBeforeFlux > uMaxSpeed) {
                        vel *= uMaxSpeed / speedBeforeFlux;
                    }

                    float fL = 0.5 * (sL.g + vel.x) * (sL.g + vel.x > 0.0 ? max(sL.r, 0.0) : h);
                    float fR = 0.5 * (vel.x + sR.g) * (vel.x + sR.g > 0.0 ? h : max(sR.r, 0.0));
                    float fT = 0.5 * (sT.b + vel.y) * (sT.b + vel.y > 0.0 ? max(sT.r, 0.0) : h);
                    float fB = 0.5 * (vel.y + sB.b) * (vel.y + sB.b > 0.0 ? h : max(sB.r, 0.0));

                    float maxOut = h * uCell / max(uDt, 0.0001) * 0.25;
                    if (fR > 0.0) fR = min(fR, maxOut);
                    if (fL < 0.0) fL = max(fL, -maxOut);
                    if (fB > 0.0) fB = min(fB, maxOut);
                    if (fT < 0.0) fT = max(fT, -maxOut);

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

                    h -= (uDt / uCell) * (fR - fL + fB - fT);
                    h = max(h, 0.0);
                    if (uDrain > 0.5) {
                        float edgeDist = min(
                            min(world.x + WORLD_SIZE_F * 0.5, WORLD_SIZE_F * 0.5 - world.x),
                            min(world.y + WORLD_SIZE_F * 0.5, WORLD_SIZE_F * 0.5 - world.y)
                        );
                        float drainWeight = 1.0 - smoothstep(0.0, BOUNDARY_DRAIN_BAND_F, edgeDist);
                        h *= exp(-BOUNDARY_DRAIN_RATE * drainWeight * uDt);
                    }
                    if (h <= 0.0001) {
                        vel *= 0.35;
                    }
                    float speed = length(vel);
                    if (speed > uMaxSpeed) {
                        vel *= uMaxSpeed / speed;
                    }
                    gl_FragColor = vec4(h, vel.x, vel.y, 1.0);
                }
            `})}}const RS=22;class CS{constructor(t){nt(this,"group",new ms);nt(this,"solver");nt(this,"N",0);nt(this,"waterGeo",null);nt(this,"waterMesh",null);nt(this,"waterPos",new Float32Array(0));nt(this,"waterDepth",new Float32Array(0));nt(this,"waterEdgeDepth",new Float32Array(0));nt(this,"waterSpeed",new Float32Array(0));nt(this,"smoothBuf",new Float32Array(0));nt(this,"lastFieldVersion",null);nt(this,"particles",null);nt(this,"particleMat",null);nt(this,"particleGeo",null);nt(this,"particlePos",new Float32Array(0));nt(this,"particleCol",new Float32Array(0));nt(this,"px",new Float32Array(0));nt(this,"pz",new Float32Array(0));nt(this,"pCool",new Float32Array(0));nt(this,"arrows",null);nt(this,"arrowGeo",null);nt(this,"arrowPos",new Float32Array(0));nt(this,"arrowCol",new Float32Array(0));nt(this,"tmpColor",new Ut);this.solver=t,this.rebuild()}setSolver(t){this.solver=t,this.rebuild()}rebuild(){this.N=this.solver.N,this.lastFieldVersion=null,this.disposeVisuals();const t=ue/2,e=ue/this.N,i=this.N*this.N;this.waterPos=new Float32Array(i*3),this.waterDepth=new Float32Array(i),this.waterEdgeDepth=new Float32Array(i),this.waterSpeed=new Float32Array(i),this.smoothBuf=new Float32Array(i);for(let l=0;l<this.N;l++)for(let c=0;c<this.N;c++){const u=l*this.N+c;this.waterPos[u*3]=c*e-t,this.waterPos[u*3+2]=l*e-t}const s=new Uint32Array((this.N-1)*(this.N-1)*6);let r=0;for(let l=0;l<this.N-1;l++)for(let c=0;c<this.N-1;c++){const u=l*this.N+c,h=u+1,d=u+this.N,p=u+this.N+1;s[r++]=u,s[r++]=d,s[r++]=h,s[r++]=h,s[r++]=d,s[r++]=p}const o=new Float32Array(i*2);for(let l=0;l<this.N;l++)for(let c=0;c<this.N;c++){const u=l*this.N+c;o[u*2]=c/(this.N-1),o[u*2+1]=1-l/(this.N-1)}this.waterGeo=new ze,this.waterGeo.setAttribute("position",new me(this.waterPos,3)),this.waterGeo.setAttribute("uv",new me(o,2)),this.waterGeo.setAttribute("aDepth",new me(this.waterDepth,1)),this.waterGeo.setAttribute("aEdgeDepth",new me(this.waterEdgeDepth,1)),this.waterGeo.setAttribute("aSpeed",new me(this.waterSpeed,1)),this.waterGeo.setIndex(new me(s,1)),this.waterGeo.computeVertexNormals();const a=new gn({transparent:!0,depthWrite:!1,alphaToCoverage:!0,uniforms:{uShallow:{value:new Ut(q.waterShallowColor)},uDeep:{value:new Ut(q.waterDeepColor)},uOpacity:{value:q.waterOpacity},uTime:{value:0},uShowWaves:{value:q.showWaves?1:0},uSunDir:{value:new B(.45,.85,.3).normalize()}},vertexShader:`
                                #include <common>
                                attribute float aDepth;
                                attribute float aEdgeDepth;
                                attribute float aSpeed;
                                varying vec2 vUv;
                                varying float vDepth;
                                varying float vEdgeDepth;
                                varying float vSpeed;
                                varying vec3 vNormal;
                                varying vec3 vWorldPos;
                                #include <logdepthbuf_pars_vertex>
                                void main() {
                                        vUv = uv;
                                        vDepth = aDepth;
                                        vEdgeDepth = aEdgeDepth;
                                        vSpeed = aSpeed;
                                        vNormal = normalize(normalMatrix * normal);
                                        vec4 world = modelMatrix * vec4(position, 1.0);
                                        vWorldPos = world.xyz;
                                        gl_Position = projectionMatrix * viewMatrix * world;
                                        #include <logdepthbuf_vertex>
                                }
                        `,fragmentShader:`
                                uniform vec3 uShallow;
                                uniform vec3 uDeep;
                                uniform float uOpacity;
                                uniform float uTime;
                                uniform float uShowWaves;
                                uniform vec3 uSunDir;
                                varying vec2 vUv;
                                varying float vDepth;
                                varying float vEdgeDepth;
                                varying float vSpeed;
                                varying vec3 vNormal;
                                varying vec3 vWorldPos;
                                #include <logdepthbuf_pars_fragment>

                                void main() {
                                        vec3 col = mix(uShallow, uDeep, clamp(vDepth * 0.20, 0.0, 1.0));
                                        float edgeAlpha = smoothstep(0.0, 0.16, vEdgeDepth);
                                        float depthAlpha = mix(0.28, 1.0, smoothstep(0.05, 3.5, vDepth));
                                        float alpha = uOpacity * edgeAlpha * depthAlpha;

                                        // 基础法线(几何法线，基本朝上)
                                        vec3 n = normalize(vNormal);
                                        if (uShowWaves > 0.5) {
                                                // 多频正弦波叠加扰动法线(微法线)，产生自然波光
                                                float t = uTime;
                                                vec2 uv = vUv * vec2(90.0, 60.0);
                                                float w1 = sin(uv.x * 1.1 + t * 2.6) + sin(uv.y * 0.9 + t * 2.1) + sin((uv.x + uv.y) * 0.7 - t * 1.7);
                                                float w2 = sin(uv.x * 2.3 - t * 3.4) * cos(uv.y * 1.8 + t * 2.9);
                                                float dud = (cos(uv.x * 1.1 + t * 2.6) * 1.1 + cos((uv.x + uv.y) * 0.7 - t * 1.7) * 0.7 + w2 * 2.3) * 0.18;
                                                float dvd = (cos(uv.y * 0.9 + t * 2.1) * 0.9 + cos((uv.x + uv.y) * 0.7 - t * 1.7) * 0.7 - w2 * 1.8) * 0.18;
                                                vec3 wn = normalize(vec3(-dud, 1.0, -dvd));
                                                n = normalize(mix(n, wn, 0.55));
                                                // 波光明暗
                                                float shimmer = 0.5 + 0.5 * w1;
                                                col += vec3(0.10, 0.13, 0.16) * (shimmer - 0.5) * 1.6;
                                        }

                                        // 菲涅尔增强透明度(掠射角更不透，更像水体)
                                        vec3 viewDir = normalize(cameraPosition - vWorldPos);
                                        float fres = pow(1.0 - max(dot(n, viewDir), 0.0), 3.0);
                                        alpha = clamp(alpha + fres * 0.25, 0.0, 1.0);

                                        // 太阳镜面高光(随扰动法线闪烁)
                                        vec3 hvec = normalize(uSunDir + viewDir);
                                        float spec = pow(max(dot(n, hvec), 0.0), 60.0);
                                        col += vec3(1.0, 0.97, 0.88) * spec * 0.9;
                                        // 天光漫反光(各向)
                                        col += vec3(0.55, 0.62, 0.78) * pow(max(dot(n, viewDir), 0.0), 3.0) * 0.18;

                                        gl_FragColor = vec4(col, alpha);
                                        #include <logdepthbuf_fragment>
                                }
                        `,side:En});this.waterMesh=new tn(this.waterGeo,a),this.waterMesh.renderOrder=1,this.waterMesh.visible=!0,this.group.add(this.waterMesh),this.buildParticles(),this.buildArrows()}buildParticles(){const t=Math.max(1,Math.floor(q.particleCount));this.particlePos=new Float32Array(t*3),this.particleCol=new Float32Array(t*3),this.px=new Float32Array(t),this.pz=new Float32Array(t),this.pCool=new Float32Array(t),this.particleGeo=new ze,this.particleGeo.setAttribute("position",new me(this.particlePos,3)),this.particleGeo.setAttribute("color",new me(this.particleCol,3)),this.particleMat=new bc({size:q.particleSize,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,depthTest:!1,blending:Gi,sizeAttenuation:!1,map:DS(),alphaTest:.05}),this.particles=new pd(this.particleGeo,this.particleMat),this.particles.renderOrder=2,this.particles.frustumCulled=!1,this.particles.visible=q.particles,this.group.add(this.particles);for(let e=0;e<t;e++)this.px[e]=Math.random()*(this.N-1),this.pz[e]=Math.random()*(this.N-1)}buildArrows(){this.arrowPos=new Float32Array(400*6),this.arrowCol=new Float32Array(400*6),this.arrowGeo=new ze,this.arrowGeo.setAttribute("position",new me(this.arrowPos,3)),this.arrowGeo.setAttribute("color",new me(this.arrowCol,3));const i=new Ec({vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1,blending:Qa});this.arrows=new nS(this.arrowGeo,i),this.arrows.renderOrder=2,this.arrows.visible=q.showArrows,this.group.add(this.arrows)}clear(){if(this.lastFieldVersion=null,!this.waterGeo)return;const t=this.N,e=this.solver.bed,i=q.vertExag;for(let s=0;s<t*t;s++)this.waterPos[s*3+1]=e[s]*i,this.waterDepth[s]=0,this.waterEdgeDepth[s]=0,this.waterSpeed[s]=0;this.waterGeo.attributes.position.needsUpdate=!0,this.waterGeo.attributes.aDepth.needsUpdate=!0,this.waterGeo.attributes.aEdgeDepth.needsUpdate=!0,this.waterGeo.attributes.aSpeed.needsUpdate=!0;for(let s=0;s<this.px.length;s++)this.particlePos[s*3+1]=-9999,this.pCool[s]=0;this.particleGeo&&(this.particleGeo.attributes.position.needsUpdate=!0)}update(t){this.solver.N!==this.N&&this.rebuild();const e=this.solver.N,i=this.solver,s=i.h,r=i.u,o=i.v,a=i.bed,l=q.vertExag,c=ue/2,u=ue/e,h=this.solver.fieldVersion,d=h===void 0||h!==this.lastFieldVersion;if(this.solver.maxWater>5e-4&&d){const _=this.smoothBuf;for(let m=0;m<e;m++)for(let f=0;f<e;f++){const b=m*e+f;_[b]=(a[b]+s[b])*l}for(let m=0;m<e;m++)for(let f=0;f<e;f++){const b=f>0?f-1:f,T=f<e-1?f+1:f,M=m*e+f,I=m*e+b,C=m*e+T;this.waterPos[M*3+1]=(_[I]+_[M]+_[C])/3}for(let m=0;m<e;m++)for(let f=0;f<e;f++){const b=m>0?m-1:m,T=m<e-1?m+1:m,M=m*e+f,I=b*e+f,C=T*e+f;this.waterPos[M*3+1]=(this.waterPos[I*3+1]+this.waterPos[M*3+1]+this.waterPos[C*3+1])/3}for(let m=0;m<e*e;m++)this.waterDepth[m]=s[m],this.waterEdgeDepth[m]=PS(s,m,e),this.waterSpeed[m]=Math.hypot(r[m],o[m]);const g=this.waterGeo.attributes.position;g.needsUpdate=!0,this.waterGeo.attributes.aDepth.needsUpdate=!0,this.waterGeo.attributes.aEdgeDepth.needsUpdate=!0,this.waterGeo.attributes.aSpeed.needsUpdate=!0,this.waterGeo.computeVertexNormals(),this.lastFieldVersion=h??null}const p=this.waterMesh.material;p.uniforms.uTime.value+=t,p.uniforms.uShallow.value.set(q.waterShallowColor),p.uniforms.uDeep.value.set(q.waterDeepColor),p.uniforms.uOpacity.value=q.waterOpacity,p.uniforms.uShowWaves.value=q.showWaves?1:0,this.particles&&(this.particles.visible=q.particles,this.particleMat&&(this.particleMat.size=q.particleSize),q.particles&&this.updateParticles(t,e,u,c,l,s,r,o,a)),this.arrows&&(this.arrows.visible=q.showArrows,q.showArrows&&this.updateArrows(e,u,c,l,s,r,o,a))}updateParticles(t,e,i,s,r,o,a,l,c){const u=this.px.length,h=this.particlePos,d=this.particleCol,p=3;for(let _=0;_<u;_++){let g=this.px[_],m=this.pz[_];if(g<=0||g>=e-1||m<=0||m>=e-1){if(this.pCool[_]>0){h[_*3+1]=-9999,this.pCool[_]--;continue}if(!this.respawn(_,e,o)){h[_*3+1]=-9999,this.pCool[_]=90;continue}g=this.px[_],m=this.pz[_]}const f=Math.floor(g),b=Math.min(e-1,f+1),T=Math.floor(m),M=Math.min(e-1,T+1),I=g-f,C=m-T,P=un(un(a[T*e+f],a[T*e+b],I),un(a[M*e+f],a[M*e+b],I),C),O=un(un(l[T*e+f],l[T*e+b],I),un(l[M*e+f],l[M*e+b],I),C),A=un(un(o[T*e+f],o[T*e+b],I),un(o[M*e+f],o[M*e+b],I),C),y=un(un(c[T*e+f],c[T*e+b],I),un(c[M*e+f],c[M*e+b],I),C),D=Math.hypot(P,O);if(A<.02){h[_*3+1]=-9999,this.pCool[_]=30;continue}if(this.pCool[_]=0,this.px[_]+=P/i*p*t,this.pz[_]+=O/i*p*t,g=this.px[_],m=this.pz[_],g<=0||g>=e-1||m<=0||m>=e-1){h[_*3+1]=-9999,this.respawn(_,e,o);continue}h[_*3]=g*i-s,h[_*3+1]=y*r+.3,h[_*3+2]=m*i-s,this.speedColor(D,this.tmpColor);const Z=this.tmpColor;d[_*3]=Z.r,d[_*3+1]=Z.g,d[_*3+2]=Z.b}this.particleGeo.attributes.position.needsUpdate=!0,this.particleGeo.attributes.color.needsUpdate=!0}respawn(t,e,i){for(let s=0;s<40;s++){const r=1+Math.random()*(e-2),o=1+Math.random()*(e-2),a=Math.floor(o)*e+Math.floor(r);if(i[a]>.03)return this.px[t]=r,this.pz[t]=o,!0}return this.px[t]=0,this.pz[t]=0,!1}updateArrows(t,e,i,s,r,o,a,l){const u=(t-1)/19,h=this.arrowPos,d=this.arrowCol,p=3.2;for(let _=0;_<20;_++)for(let g=0;g<20;g++){const m=g*u,f=_*u,b=Math.floor(m),M=Math.floor(f)*t+b,I=m*e-i,C=f*e-i,P=(l[M]+r[M])*s+.4,O=Math.hypot(o[M],a[M]),A=o[M]/(O+.01)*Math.min(O,10)*p,y=a[M]/(O+.01)*Math.min(O,10)*p,D=(_*20+g)*6;h[D]=I,h[D+1]=P,h[D+2]=C,h[D+3]=I+A,h[D+4]=P,h[D+5]=C+y,this.speedColor(O,this.tmpColor);const Z=this.tmpColor;d[D]=Z.r,d[D+1]=Z.g,d[D+2]=Z.b,d[D+3]=Z.r,d[D+4]=Z.g,d[D+5]=Z.b}this.arrowGeo.attributes.position.needsUpdate=!0,this.arrowGeo.attributes.color.needsUpdate=!0}speedColor(t,e){const i=Math.min(t/RS,1),s=[new Ut("#0088ff"),new Ut("#00ccff"),new Ut("#1fff88"),new Ut("#ffe600"),new Ut("#ff3300")],r=Math.min(Math.floor(i*4),3),o=i*4-r;e.copy(s[r]).lerp(s[r+1],o)}disposeVisuals(){var t,e,i,s,r,o;this.group.clear(),(t=this.waterGeo)==null||t.dispose(),(e=this.particleGeo)==null||e.dispose(),(i=this.arrowGeo)==null||i.dispose(),(r=(s=this.particleMat)==null?void 0:s.map)==null||r.dispose(),(o=this.particleMat)==null||o.dispose(),this.waterMesh&&this.waterMesh.material.dispose(),this.waterMesh=null,this.particles=null,this.arrows=null,this.particleMat=null}}function un(n,t,e){return n+(t-n)*e}function PS(n,t,e){const i=t%e,s=Math.floor(t/e),r=[1,4,6,4,1];let o=0,a=0;for(let l=-2;l<=2;l++){const c=s+l;if(!(c<0||c>=e))for(let u=-2;u<=2;u++){const h=i+u;if(h<0||h>=e)continue;const d=r[u+2]*r[l+2];o+=n[c*e+h]*d,a+=d}}return a>0?o/a:0}function DS(){const n=document.createElement("canvas");n.width=n.height=32;const t=n.getContext("2d"),e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,0.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),new Tc(n)}class LS{constructor(t=4e3,e=()=>0,i){nt(this,"group",new ms);nt(this,"geo");nt(this,"mat");nt(this,"points");nt(this,"pos");nt(this,"centers");nt(this,"count");nt(this,"half");nt(this,"surface");nt(this,"speed",800);nt(this,"brushMinFallHeight",50);nt(this,"brushMaxFallHeight",1500);nt(this,"windDirX",.6);nt(this,"windDirZ",.4);nt(this,"windTilt",.4);this.count=t,this.half=ue/2,this.surface=e,this.pos=new Float32Array(t*3),this.centers=new Float32Array(t*5),this.geo=new ze,this.geo.setAttribute("position",new me(this.pos,3)),this.mat=new bc({color:"#cfe6ff",size:8,map:null,transparent:!0,opacity:.7,depthWrite:!1,sizeAttenuation:!1}),i&&US(i).then(s=>{this.mat.map=s,this.mat.needsUpdate=!0}),this.points=new pd(this.geo,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=3,this.points.visible=!1,this.group.add(this.points),this.hideAll()}hideAll(){this.centers.fill(-99999),this.pos.fill(-99999),this.markNeedsUpdate()}markNeedsUpdate(){this.geo.attributes.position.needsUpdate=!0}setMode(t){if(t===null){this.points.visible=!1;return}this.points.visible||(this.points.visible=!0,this.hideAll())}update(t,e,i,s,r){if(!this.points.visible)return;const o=this.speed*t;for(let a=0;a<this.count;a++){let l=this.centers[a*5],c=this.centers[a*5+1],u=this.centers[a*5+2],h=this.centers[a*5+3],d=this.centers[a*5+4],p=this.surface(l,u);if(c<p+1||l<-this.half||l>this.half||u<-this.half||u>this.half){let _;if(e==="global")l=(Math.random()*2-1)*this.half,u=(Math.random()*2-1)*this.half,_=300+Math.random()*500;else{const g=Math.random()*Math.PI*2,m=Math.sqrt(Math.random())*r;l=i+Math.cos(g)*m,u=s+Math.sin(g)*m,_=this.brushMinFallHeight+Math.random()*(this.brushMaxFallHeight-this.brushMinFallHeight)}if(e==="global"){const g=1/Math.hypot(this.windDirX,this.windDirZ);h=this.windDirX*g*this.windTilt,d=this.windDirZ*g*this.windTilt,l=Math.max(-this.half,Math.min(this.half,l-h*_)),u=Math.max(-this.half,Math.min(this.half,u-d*_))}else h=0,d=0;p=this.surface(l,u),c=p+_}else c-=o,l+=h*o,u+=d*o;this.centers[a*5]=l,this.centers[a*5+1]=c,this.centers[a*5+2]=u,this.centers[a*5+3]=h,this.centers[a*5+4]=d,this.pos[a*3]=l,this.pos[a*3+1]=c,this.pos[a*3+2]=u}this.markNeedsUpdate()}dispose(){this.group.clear(),this.geo.dispose(),this.mat.dispose()}}function US(n){return new Promise((t,e)=>{const i=new Image;i.crossOrigin="anonymous",i.onload=()=>{const s=new Tc(i);s.colorSpace=Yi,t(s)},i.onerror=e,i.src=n})}class IS{constructor(t){nt(this,"renderer");nt(this,"scene");nt(this,"camera");nt(this,"controls");nt(this,"clock",new oS);nt(this,"raf",0);nt(this,"container");nt(this,"resizeObs");nt(this,"terrain",null);nt(this,"terrainData",null);nt(this,"solver",null);nt(this,"water",null);nt(this,"rainSystem",null);nt(this,"raycaster",new aS);nt(this,"lastSimN",q.simN);nt(this,"lastMode",q.mode);nt(this,"lastTool",q.tool);nt(this,"lastParticleCount",q.particleCount);nt(this,"lastSkyMode",q.skyMode);nt(this,"lastNightBrightness",q.nightBrightness);nt(this,"skyMat",null);nt(this,"hemiLight",null);nt(this,"dirLight",null);nt(this,"fillLight",null);nt(this,"lastPointerWorld",null);nt(this,"lastBrushWorld",null);nt(this,"fpsAcc",0);nt(this,"fpsFrames",0);nt(this,"onPointerDown",t=>{q.tool==="orbit"||q.tool==="global"||!this.solver||(this.lastPointerWorld=this.pickWorld(t),q.tool==="rain"&&(this.lastBrushWorld=this.lastPointerWorld),q.tool==="fill"&&this.lastPointerWorld&&this.addFillWater(this.lastPointerWorld.x,this.lastPointerWorld.z))});nt(this,"onPointerMove",t=>{const e=this.solver;if(!e||q.tool==="orbit"||q.tool==="global")return;const i=this.pickWorld(t);if(i){if(q.tool==="rain")this.lastBrushWorld=i;else if(q.tool==="push"){if(this.lastPointerWorld){const s=i.x-this.lastPointerWorld.x,r=i.z-this.lastPointerWorld.z,o=Math.hypot(s,r);if(o>.5){const a=Math.min(o,12)*q.pushStrength*.003;e.addPush(i.x,i.z,s/o*a,r/o*a,1,q.pushRadius)}}this.lastBrushWorld=i}this.lastPointerWorld=i}});nt(this,"onPointerUp",()=>{this.lastPointerWorld=null});nt(this,"animate",()=>{var e,i;this.raf=requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.05);if((q.skyMode!==this.lastSkyMode||q.nightBrightness!==this.lastNightBrightness)&&(this.lastSkyMode=q.skyMode,this.lastNightBrightness=q.nightBrightness,this.applySky()),this.solver&&this.water){if(q.tool!==this.lastTool&&(this.lastTool==="global"&&q.tool!=="global"&&((i=(e=this.solver).syncState)==null||i.call(e)),this.lastTool=q.tool,this.lastPointerWorld=null,this.lastBrushWorld=null),q.mode!==this.lastMode?(this.lastMode=q.mode,this.lastSimN=q.simN,this.rebuildSolver()):q.simN!==this.lastSimN&&(this.lastSimN=q.simN,this.solver.setSize(q.simN),this.water.rebuild()),q.particleCount!==this.lastParticleCount&&(this.lastParticleCount=q.particleCount,this.water.rebuild()),this.terrain&&(this.terrain.scale.y=q.vertExag),q.tool==="rain"&&this.lastBrushWorld){const s=this.lastBrushWorld;this.solver.addWater(s.x,s.z,q.brushRainRate,t,q.waterRadius)}this.solver.step(t),this.water.update(t),Ze.volume=this.solver.getVolume(),Ze.maxWater=this.solver.maxWater,Ze.simTime=this.solver.simTime}if(this.terrain&&this.terrain.update({rampBlend:q.rampBlend,wireframe:q.wireframe}),this.rainSystem){const s=q.tool==="global"&&q.rain>0?"global":q.tool==="rain"?"brush":null;if(this.rainSystem.setMode(s),s){const r=this.lastBrushWorld,o=this.controls.target;this.rainSystem.update(t,s,s==="brush"?r?r.x:0:o.x,s==="brush"?r?r.z:0:o.z,s==="brush"?q.waterRadius:2200)}}this.fpsAcc+=t,this.fpsFrames++,this.fpsAcc>=.5&&(Ze.fps=Math.round(this.fpsFrames/this.fpsAcc),this.fpsAcc=0,this.fpsFrames=0),this.controls.update(),this.renderer.render(this.scene,this.camera)});this.container=t,cr.current=this}async init(){this.renderer=new eS({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0,logarithmicDepthBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.toneMapping=Bf,this.renderer.toneMappingExposure=1.05,this.renderer.domElement.style.touchAction="none",this.container.appendChild(this.renderer.domElement),this.scene=new fd,this.scene.background=new Ut("#a9c6e8"),this.scene.fog=new Io("#a9c6e8",7e3,16e3),this.camera=new hn(50,this.container.clientWidth/this.container.clientHeight,1,3e4),this.camera.position.set(4200,2600,4200),this.controls=new uS(this.camera,this.renderer.domElement),this.controls.target.set(0,60,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=300,this.controls.maxDistance=16e3,this.controls.maxPolarAngle=Math.PI*.495,this.controls.update(),this.buildSky(),this.buildLights();const t="./";this.terrain=new _s(1),await this.terrain.load(t+"terrain.png",t+"texture.png"),this.terrainData=this.terrain.terrainData,Ze.terrainMin=this.terrainData.minElev,Ze.terrainMax=this.terrainData.maxElev,Ze.terrainRange=this.terrainData.range,this.rainSystem=new LS(4e3,(e,i)=>{const s=this.terrainData;return s?(s.sampleWorld(e,i)-s.minElev)*q.vertExag:0},t+"rain.png"),this.scene.add(this.rainSystem.group),this.scene.add(this.terrain),this.terrain.scale.y=q.vertExag,this.buildBasePlane(),this.solver=this.createSolver(),this.water=new CS(this.solver),this.scene.add(this.water.group),this.bindEvents(),this.resizeObs=new ResizeObserver(()=>this.onResize()),this.resizeObs.observe(this.container),this.applySky(),this.clock.start(),this.animate()}buildSky(){const t=new Ac(14e3,32,16),e=new gn({side:qe,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new Ut("#7ec4ff")},uHorizon:{value:new Ut("#e8f2fb")}},vertexShader:`
                #include <common>
                varying vec3 vDir;
                #include <logdepthbuf_pars_vertex>
                void main() {
                    vDir = normalize(position);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    #include <logdepthbuf_vertex>
                }
            `,fragmentShader:`
                uniform vec3 uTop;
                uniform vec3 uHorizon;
                varying vec3 vDir;
                #include <logdepthbuf_pars_fragment>
                void main() {
                    float h = normalize(vDir).y;
                    vec3 col = mix(uHorizon, uTop, smoothstep(0.0, 0.7, h));
                    gl_FragColor = vec4(col, 1.0);
                    #include <logdepthbuf_fragment>
                }
            `}),i=new tn(t,e);i.renderOrder=-1,this.skyMat=e,this.scene.add(i)}buildLights(){const t=new iS("#cfe8ff","#3c4a38",.9);this.scene.add(t),this.hemiLight=t;const e=new Mh("#fff2dd",1.5);e.position.set(3500,5e3,2500),this.scene.add(e),this.dirLight=e;const i=new Mh("#9db8e0",.5);i.position.set(-3e3,2e3,-3e3),this.scene.add(i),this.fillLight=i}applySky(){var s;const t=q.skyMode==="night",e=q.nightBrightness;this.scene.background=new Ut(t?"#0b1020":"#a9c6e8"),this.scene.fog=new Io(t?"#0b1020":"#a9c6e8",t?4e3:7e3,t?13e3:16e3),this.skyMat&&(this.skyMat.uniforms.uTop.value=new Ut(t?"#050a18":"#7ec4ff"),this.skyMat.uniforms.uHorizon.value=new Ut(t?"#223057":"#e8f2fb")),this.hemiLight&&(this.hemiLight.intensity=t?.45*e:.9,this.hemiLight.color.set(t?"#243155":"#cfe8ff"),this.hemiLight.groundColor.set(t?"#0d1210":"#3c4a38")),this.dirLight&&(this.dirLight.intensity=t?.7*e:1.5,this.dirLight.color.set(t?"#8fa7e0":"#fff2dd")),this.fillLight&&(this.fillLight.intensity=t?.25*e:.5,this.fillLight.color.set(t?"#2c3a66":"#9db8e0"));const i=(s=this.terrain)==null?void 0:s.material;i&&(i.uniforms.uSkyColor.value=new Ut(t?"#16203a":"#cfe8ff"),i.uniforms.uGroundColor.value=new Ut(t?"#0a0f16":"#3d5a3a"),i.uniforms.uAmbient.value=t?.18*e:.35,i.uniforms.uSunIntensity.value=t?.55*e:1.1)}buildBasePlane(){const t=new Bs(ue,ue);t.rotateX(-Math.PI/2);const e=new xc({color:"#6b7a68",transparent:!0,opacity:.5}),i=new tn(t,e);i.position.y=-.5,this.scene.add(i);const s=ue/2,r=[new B(-s,0,-s),new B(s,0,-s),new B(s,0,s),new B(-s,0,s),new B(-s,0,-s)],o=new dd(new ze().setFromPoints(r),new Ec({color:"#9aa7b3",transparent:!0,opacity:.6}));this.scene.add(o)}createSolver(){if(!this.terrainData)throw new Error("terrainData 尚未初始化");return q.mode==="gpu"?new wS(this.renderer,this.terrainData,q):new AS(this.terrainData,q)}rebuildSolver(){var e,i;const t=this.solver;(e=t==null?void 0:t.dispose)==null||e.call(t),this.solver=this.createSolver(),(i=this.water)==null||i.setSolver(this.solver)}bindEvents(){this.renderer.domElement.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp)}pickWorld(t){const e=this.renderer.domElement.getBoundingClientRect(),i=new Gt((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1);this.raycaster.setFromCamera(i,this.camera);const s=this.terrain;if(!s)return null;const r=this.raycaster.intersectObject(s,!1);if(r.length===0)return null;const o=r[0].point;return Math.abs(o.x)>ue/2||Math.abs(o.z)>ue/2?null:o}resetWater(){var t,e;(t=this.solver)==null||t.reset(),(e=this.water)==null||e.clear()}async copySceneImage(){var t;if(this.renderer.render(this.scene,this.camera),!((t=navigator.clipboard)!=null&&t.write)||typeof ClipboardItem>"u"){window.alert("当前浏览器不支持复制图片到剪贴板");return}try{const e=await new Promise((i,s)=>{this.renderer.domElement.toBlob(r=>{r?i(r):s(new Error("场景图生成失败"))},"image/png")});await navigator.clipboard.write([new ClipboardItem({[e.type]:e})])}catch(e){console.error(e),window.alert("复制场景图失败，请检查浏览器剪贴板权限")}}dispose(){var t,e,i,s;cancelAnimationFrame(this.raf),(t=this.resizeObs)==null||t.disconnect(),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this.renderer.domElement.removeEventListener("pointerdown",this.onPointerDown),(e=this.rainSystem)==null||e.dispose(),(s=(i=this.solver)==null?void 0:i.dispose)==null||s.call(i),this.renderer.dispose(),this.renderer.domElement.parentElement===this.container&&this.container.removeChild(this.renderer.domElement),cr.current===this&&(cr.current=null)}onResize(){const t=this.container.clientWidth,e=this.container.clientHeight;t===0||e===0||(this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e))}addFillWater(t,e){const i=this.solver;i&&i.addWaterVolume(t,e,q.fillVolume,q.fillRadius)}}const NS={class:"section"},FS={class:"section-body"},Js=qi({__name:"Section",props:{title:{type:String,required:!0},defaultOpen:{type:Boolean,default:!0}},setup(n){const t=n,e=nc(t.defaultOpen);return ho(()=>t.defaultOpen,i=>{e.value=i}),(i,s)=>(an(),ei("div",NS,[H("div",{class:"section-header",onClick:s[0]||(s[0]=r=>e.value=!e.value)},[H("span",{class:fn(["arrow",{open:e.value}])},"▶",2),H("span",null,le(n.title),1)]),xe(H("div",FS,[Rp(i.$slots,"default")],512),[[Sm,e.value]])]))}}),OS={class:"side-panel"},BS={class:"panel-content"},zS={class:"row"},VS={class:"control"},HS={class:"vs-seg"},GS={class:"row"},kS={class:"val-mono"},WS={class:"control"},XS={class:"row"},qS={class:"val-mono"},YS={class:"control"},jS={class:"row"},$S={class:"control inline"},KS={class:"row"},ZS={class:"control"},JS={class:"vs-seg"},QS=["onClick"],ty={class:"row"},ey={class:"control"},ny=["value"],iy={class:"row"},sy={class:"val-mono"},ry={class:"control"},oy={class:"row"},ay={class:"val-mono"},ly={class:"control"},cy={class:"row"},uy={class:"val-mono"},hy={class:"control"},fy={class:"row"},dy={class:"val-mono"},py={class:"control"},my={class:"row"},_y={class:"val-mono"},gy={class:"control"},vy={class:"row"},xy={class:"val-mono"},My={class:"control"},Sy={class:"row"},yy={class:"val-mono"},Ey={class:"control"},by={class:"row"},Ty={class:"val-mono"},Ay={class:"control"},wy={class:"row"},Ry={class:"control inline"},Cy={class:"row"},Py={class:"val-mono"},Dy={class:"control"},Ly={class:"row"},Uy={class:"control inline",style:{width:"52px"}},Iy={class:"row"},Ny={class:"control inline",style:{width:"52px"}},Fy={class:"row"},Oy={class:"control inline"},By={class:"row"},zy={class:"control inline"},Vy={class:"row"},Hy={class:"val-mono"},Gy={class:"control"},ky={class:"row"},Wy={class:"val-mono"},Xy={class:"control"},qy={class:"row"},Yy={class:"control inline"},jy=qi({__name:"SidePanel",setup(n){const t=[{id:"gpu",label:"GPU"},{id:"cpu",label:"CPU"}],e=[128,192,256,384,512];return(i,s)=>(an(),ei("aside",OS,[H("div",BS,[Ee(Js,{title:"环境地形参数","default-open":""},{default:fs(()=>[H("div",zS,[s[23]||(s[23]=H("span",{class:"label"},"天空模式",-1)),H("div",VS,[H("div",HS,[H("button",{class:fn({active:vt(q).skyMode==="day"}),onClick:s[0]||(s[0]=r=>vt(q).skyMode="day")}," 白天 ",2),H("button",{class:fn({active:vt(q).skyMode==="night"}),onClick:s[1]||(s[1]=r=>vt(q).skyMode="night")}," 夜晚 ",2)])])]),H("div",GS,[s[24]||(s[24]=H("span",{class:"label"},"垂直夸张",-1)),H("span",kS,le(vt(q).vertExag.toFixed(1))+"×",1),H("div",WS,[xe(H("input",{"onUpdate:modelValue":s[2]||(s[2]=r=>vt(q).vertExag=r),type:"range",class:"vs-range",min:"1",max:"5",step:"0.1"},null,512),[[Ve,vt(q).vertExag,void 0,{number:!0}]])])]),H("div",XS,[s[25]||(s[25]=H("span",{class:"label"},"高程混合",-1)),H("span",qS,le(Math.round(vt(q).rampBlend*100))+"%",1),H("div",YS,[xe(H("input",{"onUpdate:modelValue":s[3]||(s[3]=r=>vt(q).rampBlend=r),type:"range",class:"vs-range",min:"0",max:"1",step:"0.01"},null,512),[[Ve,vt(q).rampBlend,void 0,{number:!0}]])])]),H("div",jS,[s[26]||(s[26]=H("span",{class:"label"},"线框显示",-1)),H("div",$S,[xe(H("input",{"onUpdate:modelValue":s[4]||(s[4]=r=>vt(q).wireframe=r),type:"checkbox",class:"vs-check"},null,512),[[Xs,vt(q).wireframe]])])])]),_:1}),Ee(Js,{title:"流体仿真参数","default-open":""},{default:fs(()=>[H("div",KS,[s[27]||(s[27]=H("span",{class:"label"},"算法模式",-1)),H("div",ZS,[H("div",JS,[(an(),ei(Je,null,kc(t,r=>H("button",{key:r.id,class:fn({active:vt(q).mode===r.id}),onClick:o=>vt(q).mode=r.id},le(r.label),11,QS)),64))])])]),H("div",ty,[s[28]||(s[28]=H("span",{class:"label"},"网格分辨率",-1)),H("div",ey,[xe(H("select",{"onUpdate:modelValue":s[5]||(s[5]=r=>vt(q).simN=r),class:"vs-select"},[(an(),ei(Je,null,kc(e,r=>H("option",{key:r,value:r},le(r)+" × "+le(r),9,ny)),64))],512),[[zm,vt(q).simN,void 0,{number:!0}]])])]),H("div",iy,[s[29]||(s[29]=H("span",{class:"label"},"重力 g",-1)),H("span",sy,le(vt(q).gravity.toFixed(1)),1),H("div",ry,[xe(H("input",{"onUpdate:modelValue":s[6]||(s[6]=r=>vt(q).gravity=r),type:"range",class:"vs-range",min:"0",max:"20",step:"0.1"},null,512),[[Ve,vt(q).gravity,void 0,{number:!0}]])])]),H("div",oy,[s[30]||(s[30]=H("span",{class:"label"},"摩擦阻尼",-1)),H("span",ay,le(vt(q).friction.toFixed(2)),1),H("div",ly,[xe(H("input",{"onUpdate:modelValue":s[7]||(s[7]=r=>vt(q).friction=r),type:"range",class:"vs-range",min:"0",max:"1",step:"0.01"},null,512),[[Ve,vt(q).friction,void 0,{number:!0}]])])]),H("div",cy,[s[31]||(s[31]=H("span",{class:"label"},"最大流速",-1)),H("span",uy,le(vt(q).maxSpeed.toFixed(0))+" m/s",1),H("div",hy,[xe(H("input",{"onUpdate:modelValue":s[8]||(s[8]=r=>vt(q).maxSpeed=r),type:"range",class:"vs-range",min:"2",max:"60",step:"1"},null,512),[[Ve,vt(q).maxSpeed,void 0,{number:!0}]])])]),H("div",fy,[s[32]||(s[32]=H("span",{class:"label"},"时间倍率",-1)),H("span",dy,le(vt(q).timeScale)+"×",1),H("div",py,[xe(H("input",{"onUpdate:modelValue":s[9]||(s[9]=r=>vt(q).timeScale=r),type:"range",class:"vs-range",min:"1",max:"100",step:"1"},null,512),[[Ve,vt(q).timeScale,void 0,{number:!0}]])])])]),_:1}),Ee(Js,{title:"降水模拟参数"},{default:fs(()=>[H("div",my,[s[33]||(s[33]=H("span",{class:"label"},"降雨强度",-1)),H("span",_y,le(vt(q).rain.toFixed(0))+" mm/h",1),H("div",gy,[xe(H("input",{"onUpdate:modelValue":s[10]||(s[10]=r=>vt(q).rain=r),type:"range",class:"vs-range",min:"0",max:"5000",step:"10"},null,512),[[Ve,vt(q).rain,void 0,{number:!0}]])])]),H("div",vy,[s[34]||(s[34]=H("span",{class:"label"},"浇水强度",-1)),H("span",xy,le(vt(q).brushRainRate.toFixed(1))+" m/s",1),H("div",My,[xe(H("input",{"onUpdate:modelValue":s[11]||(s[11]=r=>vt(q).brushRainRate=r),type:"range",class:"vs-range",min:"1",max:"20",step:"0.1"},null,512),[[Ve,vt(q).brushRainRate,void 0,{number:!0}]])])]),H("div",Sy,[s[35]||(s[35]=H("span",{class:"label"},"浇灌雨量",-1)),H("span",yy,le((vt(q).fillVolume/1e4).toFixed(0))+" 万 m³",1),H("div",Ey,[xe(H("input",{"onUpdate:modelValue":s[12]||(s[12]=r=>vt(q).fillVolume=r),type:"range",class:"vs-range",min:"100000",max:"10000000",step:"100000"},null,512),[[Ve,vt(q).fillVolume,void 0,{number:!0}]])])]),H("div",by,[s[36]||(s[36]=H("span",{class:"label"},"扰动强度",-1)),H("span",Ty,le(vt(q).pushStrength.toFixed(0)),1),H("div",Ay,[xe(H("input",{"onUpdate:modelValue":s[13]||(s[13]=r=>vt(q).pushStrength=r),type:"range",class:"vs-range",min:"50",max:"3000",step:"10"},null,512),[[Ve,vt(q).pushStrength,void 0,{number:!0}]])])]),H("div",wy,[s[37]||(s[37]=H("span",{class:"label"},"边界排水",-1)),H("div",Ry,[xe(H("input",{"onUpdate:modelValue":s[14]||(s[14]=r=>vt(q).drainBoundary=r),type:"checkbox",class:"vs-check"},null,512),[[Xs,vt(q).drainBoundary]])])])]),_:1}),Ee(Js,{title:"水面渲染参数","default-open":""},{default:fs(()=>[H("div",Cy,[s[38]||(s[38]=H("span",{class:"label"},"透明度",-1)),H("span",Py,le(Math.round(vt(q).waterOpacity*100))+"%",1),H("div",Dy,[xe(H("input",{"onUpdate:modelValue":s[15]||(s[15]=r=>vt(q).waterOpacity=r),type:"range",class:"vs-range",min:"0.1",max:"1",step:"0.01"},null,512),[[Ve,vt(q).waterOpacity,void 0,{number:!0}]])])]),H("div",Ly,[s[39]||(s[39]=H("span",{class:"label"},"浅水色",-1)),H("div",Uy,[xe(H("input",{"onUpdate:modelValue":s[16]||(s[16]=r=>vt(q).waterShallowColor=r),type:"color",class:"vs-color"},null,512),[[Ve,vt(q).waterShallowColor]])])]),H("div",Iy,[s[40]||(s[40]=H("span",{class:"label"},"深水色",-1)),H("div",Ny,[xe(H("input",{"onUpdate:modelValue":s[17]||(s[17]=r=>vt(q).waterDeepColor=r),type:"color",class:"vs-color"},null,512),[[Ve,vt(q).waterDeepColor]])])]),H("div",Fy,[s[41]||(s[41]=H("span",{class:"label"},"波光扰动",-1)),H("div",Oy,[xe(H("input",{"onUpdate:modelValue":s[18]||(s[18]=r=>vt(q).showWaves=r),type:"checkbox",class:"vs-check"},null,512),[[Xs,vt(q).showWaves]])])])]),_:1}),Ee(Js,{title:"流场模拟参数"},{default:fs(()=>[H("div",By,[s[42]||(s[42]=H("span",{class:"label"},"流动粒子",-1)),H("div",zy,[xe(H("input",{"onUpdate:modelValue":s[19]||(s[19]=r=>vt(q).particles=r),type:"checkbox",class:"vs-check"},null,512),[[Xs,vt(q).particles]])])]),H("div",Vy,[s[43]||(s[43]=H("span",{class:"label"},"粒子数量",-1)),H("span",Hy,le(vt(q).particleCount),1),H("div",Gy,[xe(H("input",{"onUpdate:modelValue":s[20]||(s[20]=r=>vt(q).particleCount=r),type:"range",class:"vs-range",min:"100",max:"2000",step:"100"},null,512),[[Ve,vt(q).particleCount,void 0,{number:!0}]])])]),H("div",ky,[s[44]||(s[44]=H("span",{class:"label"},"粒子尺寸",-1)),H("span",Wy,le(vt(q).particleSize.toFixed(0)),1),H("div",Xy,[xe(H("input",{"onUpdate:modelValue":s[21]||(s[21]=r=>vt(q).particleSize=r),type:"range",class:"vs-range",min:"4",max:"48",step:"2"},null,512),[[Ve,vt(q).particleSize,void 0,{number:!0}]])])]),H("div",qy,[s[45]||(s[45]=H("span",{class:"label"},"速度场箭头",-1)),H("div",Yy,[xe(H("input",{"onUpdate:modelValue":s[22]||(s[22]=r=>vt(q).showArrows=r),type:"checkbox",class:"vs-check"},null,512),[[Xs,vt(q).showArrows]])])]),s[46]||(s[46]=H("p",{class:"hint-text"},[lr(" 粒子与箭头颜色随流速变化："),H("span",{class:"speed-blue"},"蓝"),lr("→"),H("span",{class:"speed-green"},"绿"),lr("→"),H("span",{class:"speed-red"},"红")],-1))]),_:1})])]))}}),$y=Fs(jy,[["__scopeId","data-v-460d6e0b"]]),Ky={name:"GuoJiangFeng",email:"hz_gjf@163.com"},Zy={author:Ky},Jy={class:"statusbar"},Qy={class:"sb-group"},tE={class:"sb-item"},eE={class:"sb-item"},nE={class:"sb-item"},iE={class:"sb-group"},sE={class:"sb-item"},rE={class:"sb-item"},oE={class:"sb-item"},aE={class:"sb-item"},lE={class:"sb-item"},cE=qi({__name:"StatusBar",setup(n){const t=Za(()=>`${(Ze.volume/1e4).toFixed(2)} 万 m³`),e=Zy.author,i=Za(()=>`${e.name} ©2026 <${e.email}>`);return(s,r)=>(an(),ei("footer",Jy,[H("div",Qy,[r[0]||(r[0]=H("div",{class:"sb-item"},[H("i",{class:"dot"}),lr("就绪")],-1)),H("div",tE,"FPS "+le(vt(Ze).fps),1),H("div",eE,"网格 "+le(vt(q).simN)+"²",1),H("div",nE,"模拟 "+le(vt(Ze).simTime.toFixed(1))+"s",1)]),H("div",iE,[H("div",sE," 高程 "+le(vt(Ze).terrainMin.toFixed(0))+"–"+le(vt(Ze).terrainMax.toFixed(0))+" m ",1),H("div",rE,"高差 "+le(vt(Ze).terrainRange.toFixed(0))+" m",1),H("div",oE,"水量 "+le(t.value),1),H("div",aE,"最大水深 "+le(vt(Ze).maxWater.toFixed(2))+" m",1),H("div",lE,le(i.value),1)])]))}}),uE=Fs(cE,[["__scopeId","data-v-c258f0cb"]]),hE=qi({__name:"SceneCanvas",setup(n){const t=nc();let e=null;return uf(async()=>{e=new IS(t.value),await e.init()}),oc(()=>{e==null||e.dispose(),e=null}),(i,s)=>(an(),ei("div",{ref_key:"container",ref:t,class:"scene-canvas"},null,512))}}),fE=Fs(hE,[["__scopeId","data-v-008d1225"]]),dE={class:"map-toolbar"},pE=qi({__name:"Toolbar",setup(n){function t(e){q.tool=e==="global"&&q.tool==="global"?"orbit":e}return(e,i)=>(an(),ei("div",dE,[H("button",{class:fn(["tb-btn",{active:vt(q).tool==="orbit"}]),onClick:i[0]||(i[0]=s=>t("orbit"))}," 浏览 ",2),H("button",{class:fn(["tb-btn",{active:vt(q).tool==="global"}]),onClick:i[1]||(i[1]=s=>t("global")),title:"全域普降大雨，水体向低洼地区汇集"}," 降雨 ",2),H("button",{class:fn(["tb-btn",{active:vt(q).tool==="rain"}]),onClick:i[2]||(i[2]=s=>t("rain")),title:"局地强降雨，鼠标指哪下哪，局地内涝"}," 浇水 ",2),H("button",{class:fn(["tb-btn",{active:vt(q).tool==="fill"}]),onClick:i[3]||(i[3]=s=>t("fill")),title:"点击地图位置，按浇灌雨量倾倒水体"}," 浇灌 ",2),H("button",{class:fn(["tb-btn",{active:vt(q).tool==="push"}]),onClick:i[4]||(i[4]=s=>t("push")),title:"搅动水面，让水流动起来"}," 扰动 ",2),i[7]||(i[7]=H("div",{class:"tb-divider"},null,-1)),H("button",{class:"tb-btn",title:"清空当前水体",onClick:i[5]||(i[5]=s=>{var r;return(r=vt(cr).current)==null?void 0:r.resetWater()})}," 重置 "),H("button",{class:"tb-btn",title:"复制当前场景图",onClick:i[6]||(i[6]=s=>{var r;return(r=vt(cr).current)==null?void 0:r.copySceneImage()})}," 复制 ")]))}}),mE=Fs(pE,[["__scopeId","data-v-7570fda7"]]),_E={class:"app"},gE={class:"app-body"},vE={class:"canvas-area"},xE=qi({__name:"App",setup(n){const t=nc(!0);return(e,i)=>(an(),ei("div",_E,[Ee($m,{"sidebar-visible":t.value,onToggleSidebar:i[0]||(i[0]=s=>t.value=!t.value)},null,8,["sidebar-visible"]),H("div",gE,[t.value?(an(),wo($y,{key:0})):sm("",!0),H("main",vE,[Ee(fE),Ee(mE)])]),Ee(uE)]))}}),ME=Fs(xE,[["__scopeId","data-v-9ae60a40"]]);Gm(ME).mount("#app");
