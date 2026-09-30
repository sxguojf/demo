/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $l(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ht={},_s=[],In=()=>{},Cf=()=>!1,Ca=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Pa=n=>n.startsWith("onUpdate:"),Mt=Object.assign,Zl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ud=Object.prototype.hasOwnProperty,it=(n,e)=>Ud.call(n,e),Fe=Array.isArray,gs=n=>mr(n)==="[object Map]",Ds=n=>mr(n)==="[object Set]",Bc=n=>mr(n)==="[object Date]",Ge=n=>typeof n=="function",_t=n=>typeof n=="string",vn=n=>typeof n=="symbol",st=n=>n!==null&&typeof n=="object",Pf=n=>(st(n)||Ge(n))&&Ge(n.then)&&Ge(n.catch),Df=Object.prototype.toString,mr=n=>Df.call(n),Nd=n=>mr(n).slice(8,-1),Lf=n=>mr(n)==="[object Object]",Jl=n=>_t(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$s=$l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Da=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Fd=/-\w/g,gn=Da(n=>n.replace(Fd,e=>e.slice(1).toUpperCase())),Od=/\B([A-Z])/g,ji=Da(n=>n.replace(Od,"-$1").toLowerCase()),If=Da(n=>n.charAt(0).toUpperCase()+n.slice(1)),ja=Da(n=>n?`on${If(n)}`:""),Cn=(n,e)=>!Object.is(n,e),ia=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Uf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},La=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Bd=n=>{const e=_t(n)?Number(n):NaN;return isNaN(e)?n:e};let Vc;const Ia=()=>Vc||(Vc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ql(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=_t(i)?Gd(i):Ql(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(_t(n)||st(n))return n}const Vd=/;(?![^(]*\))/g,zd=/:([^]+)/,Hd=/\/\*[^]*?\*\//g;function Gd(n){const e={};return n.replace(Hd,"").split(Vd).forEach(t=>{if(t){const i=t.split(zd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ec(n){let e="";if(_t(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=ec(n[t]);i&&(e+=i+" ")}else if(st(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const kd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wd=$l(kd);function Nf(n){return!!n||n===""}function Xd(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Ls(n[i],e[i]);return t}function Ls(n,e){if(n===e)return!0;let t=Bc(n),i=Bc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=vn(n),i=vn(e),t||i)return n===e;if(t=Fe(n),i=Fe(e),t||i)return t&&i?Xd(n,e):!1;if(t=st(n),i=st(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!Ls(n[a],e[a]))return!1}}return String(n)===String(e)}function tc(n,e){return n.findIndex(t=>Ls(t,e))}const Ff=n=>!!(n&&n.__v_isRef===!0),qd=n=>_t(n)?n:n==null?"":Fe(n)||st(n)&&(n.toString===Df||!Ge(n.toString))?Ff(n)?qd(n.value):JSON.stringify(n,Of,2):String(n),Of=(n,e)=>Ff(e)?Of(n,e.value):gs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Ka(i,r)+" =>"]=s,t),{})}:Ds(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ka(t))}:vn(e)?Ka(e):st(e)&&!Fe(e)&&!Lf(e)?String(e):e,Ka=(n,e="")=>{var t;return vn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rt;class Yd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Rt&&(Rt.active?(this.parent=Rt,this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Rt;try{return Rt=this,e()}finally{Rt=t}}}on(){++this._on===1&&(this.prevScope=Rt,Rt=this)}off(){if(this._on>0&&--this._on===0){if(Rt===this)Rt=this.prevScope;else{let e=Rt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function jd(){return Rt}let pt;const $a=new WeakSet;class Bf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Rt&&(Rt.active?Rt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$a.has(this)&&($a.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zc(this),Hf(this);const e=pt,t=xn;pt=this,xn=!0;try{return this.fn()}finally{Gf(this),pt=e,xn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)sc(e);this.deps=this.depsTail=void 0,zc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$a.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ko(this)&&this.run()}get dirty(){return ko(this)}}let Vf=0,Zs,Js;function zf(n,e=!1){if(n.flags|=8,e){n.next=Js,Js=n;return}n.next=Zs,Zs=n}function nc(){Vf++}function ic(){if(--Vf>0)return;if(Js){let e=Js;for(Js=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Zs;){let e=Zs;for(Zs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Hf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Gf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),sc(i),Kd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function ko(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function kf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===tr)||(n.globalVersion=tr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ko(n))))return;n.flags|=2;const e=n.dep,t=pt,i=xn;pt=n,xn=!0;try{Hf(n);const s=n.fn(n._value);(e.version===0||Cn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{pt=t,xn=i,Gf(n),n.flags&=-3}}function sc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)sc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Kd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let xn=!0;const Wf=[];function ii(){Wf.push(xn),xn=!1}function si(){const n=Wf.pop();xn=n===void 0?!0:n}function zc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=pt;pt=void 0;try{e()}finally{pt=t}}}let tr=0;class $d{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class rc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!pt||!xn||pt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==pt)t=this.activeLink=new $d(pt,this),pt.deps?(t.prevDep=pt.depsTail,pt.depsTail.nextDep=t,pt.depsTail=t):pt.deps=pt.depsTail=t,Xf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=pt.depsTail,t.nextDep=void 0,pt.depsTail.nextDep=t,pt.depsTail=t,pt.deps===t&&(pt.deps=i)}return t}trigger(e){this.version++,tr++,this.notify(e)}notify(e){nc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ic()}}}function Xf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Xf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Wo=new WeakMap,Xi=Symbol(""),Xo=Symbol(""),nr=Symbol("");function It(n,e,t){if(xn&&pt){let i=Wo.get(n);i||Wo.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new rc),s.map=i,s.key=t),s.track()}}function $n(n,e,t,i,s,r){const a=Wo.get(n);if(!a){tr++;return}const o=l=>{l&&l.trigger()};if(nc(),e==="clear")a.forEach(o);else{const l=Fe(n),c=l&&Jl(t);if(l&&t==="length"){const u=Number(i);a.forEach((h,f)=>{(f==="length"||f===nr||!vn(f)&&f>=u)&&o(h)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(nr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Xi)),gs(n)&&o(a.get(Xo)));break;case"delete":l||(o(a.get(Xi)),gs(n)&&o(a.get(Xo)));break;case"set":gs(n)&&o(a.get(Xi));break}}ic()}function Qi(n){const e=tt(n);return e===n?e:(It(e,"iterate",nr),on(n)?e:e.map(Sn))}function Ua(n){return It(n=tt(n),"iterate",nr),n}function An(n,e){return ri(n)?bs(qi(n)?Sn(e):e):Sn(e)}const Zd={__proto__:null,[Symbol.iterator](){return Za(this,Symbol.iterator,n=>An(this,n))},concat(...n){return Qi(this).concat(...n.map(e=>Fe(e)?Qi(e):e))},entries(){return Za(this,"entries",n=>(n[1]=An(this,n[1]),n))},every(n,e){return Hn(this,"every",n,e,void 0,arguments)},filter(n,e){return Hn(this,"filter",n,e,t=>t.map(i=>An(this,i)),arguments)},find(n,e){return Hn(this,"find",n,e,t=>An(this,t),arguments)},findIndex(n,e){return Hn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Hn(this,"findLast",n,e,t=>An(this,t),arguments)},findLastIndex(n,e){return Hn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Hn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ja(this,"includes",n)},indexOf(...n){return Ja(this,"indexOf",n)},join(n){return Qi(this).join(n)},lastIndexOf(...n){return Ja(this,"lastIndexOf",n)},map(n,e){return Hn(this,"map",n,e,void 0,arguments)},pop(){return Us(this,"pop")},push(...n){return Us(this,"push",n)},reduce(n,...e){return Hc(this,"reduce",n,e)},reduceRight(n,...e){return Hc(this,"reduceRight",n,e)},shift(){return Us(this,"shift")},some(n,e){return Hn(this,"some",n,e,void 0,arguments)},splice(...n){return Us(this,"splice",n)},toReversed(){return Qi(this).toReversed()},toSorted(n){return Qi(this).toSorted(n)},toSpliced(...n){return Qi(this).toSpliced(...n)},unshift(...n){return Us(this,"unshift",n)},values(){return Za(this,"values",n=>An(this,n))}};function Za(n,e,t){const i=Ua(n),s=i[e]();return i!==n&&!on(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Jd=Array.prototype;function Hn(n,e,t,i,s,r){const a=Ua(n),o=a!==n&&!on(n),l=a[e];if(l!==Jd[e]){const h=l.apply(n,r);return o?Sn(h):h}let c=t;a!==n&&(o?c=function(h,f){return t.call(this,An(n,h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function Hc(n,e,t,i){const s=Ua(n),r=s!==n&&!on(n);let a=t,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,u,h){return o&&(o=!1,c=An(n,c)),t.call(this,c,An(n,u),h,n)}):t.length>3&&(a=function(c,u,h){return t.call(this,c,u,h,n)}));const l=s[e](a,...i);return o?An(n,l):l}function Ja(n,e,t){const i=tt(n);It(i,"iterate",nr);const s=i[e](...t);return(s===-1||s===!1)&&cc(t[0])?(t[0]=tt(t[0]),i[e](...t)):s}function Us(n,e,t=[]){ii(),nc();const i=tt(n)[e].apply(n,t);return ic(),si(),i}const Qd=$l("__proto__,__v_isRef,__isVue"),qf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(vn));function ep(n){vn(n)||(n=String(n));const e=tt(this);return It(e,"has",n),e.hasOwnProperty(n)}class Yf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?up:Zf:r?$f:Kf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Fe(e);if(!s){let l;if(a&&(l=Zd[t]))return l;if(t==="hasOwnProperty")return ep}const o=Reflect.get(e,t,Ot(e)?e:i);if((vn(t)?qf.has(t):Qd(t))||(s||It(e,"get",t),r))return o;if(Ot(o)){const l=a&&Jl(t)?o:o.value;return s&&st(l)?Yo(l):l}return st(o)?s?Yo(o):oc(o):o}}class jf extends Yf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=Fe(e)&&Jl(t);if(!this._isShallow){const c=ri(r);if(!on(i)&&!ri(i)&&(r=tt(r),i=tt(i)),!a&&Ot(r)&&!Ot(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:it(e,t),l=Reflect.set(e,t,i,Ot(e)?e:s);return e===tt(s)&&l&&(o?Cn(i,r)&&$n(e,"set",t,i):$n(e,"add",t,i)),l}deleteProperty(e,t){const i=it(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&$n(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!vn(t)||!qf.has(t))&&It(e,"has",t),i}ownKeys(e){return It(e,"iterate",Fe(e)?"length":Xi),Reflect.ownKeys(e)}}class tp extends Yf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const np=new jf,ip=new tp,sp=new jf(!0);const qo=n=>n,Tr=n=>Reflect.getPrototypeOf(n);function rp(n,e,t){return function(...i){const s=this.__v_raw,r=tt(s),a=gs(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?qo:e?bs:Sn;return!e&&It(r,"iterate",l?Xo:Xi),Mt(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:o?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function Ar(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ap(n,e){const t={get(s){const r=this.__v_raw,a=tt(r),o=tt(s);n||(Cn(s,o)&&It(a,"get",s),It(a,"get",o));const{has:l}=Tr(a),c=e?qo:n?bs:Sn;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&It(tt(s),"iterate",Xi),s.size},has(s){const r=this.__v_raw,a=tt(r),o=tt(s);return n||(Cn(s,o)&&It(a,"has",s),It(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=tt(o),c=e?qo:n?bs:Sn;return!n&&It(l,"iterate",Xi),o.forEach((u,h)=>s.call(r,c(u),c(h),a))}};return Mt(t,n?{add:Ar("add"),set:Ar("set"),delete:Ar("delete"),clear:Ar("clear")}:{add(s){const r=tt(this),a=Tr(r),o=tt(s),l=!e&&!on(s)&&!ri(s)?o:s;return a.has.call(r,l)||Cn(s,l)&&a.has.call(r,s)||Cn(o,l)&&a.has.call(r,o)||(r.add(l),$n(r,"add",l,l)),this},set(s,r){!e&&!on(r)&&!ri(r)&&(r=tt(r));const a=tt(this),{has:o,get:l}=Tr(a);let c=o.call(a,s);c||(s=tt(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?Cn(r,u)&&$n(a,"set",s,r):$n(a,"add",s,r),this},delete(s){const r=tt(this),{has:a,get:o}=Tr(r);let l=a.call(r,s);l||(s=tt(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&$n(r,"delete",s,void 0),c},clear(){const s=tt(this),r=s.size!==0,a=s.clear();return r&&$n(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=rp(s,n,e)}),t}function ac(n,e){const t=ap(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(it(t,s)&&s in i?t:i,s,r)}const op={get:ac(!1,!1)},lp={get:ac(!1,!0)},cp={get:ac(!0,!1)};const Kf=new WeakMap,$f=new WeakMap,Zf=new WeakMap,up=new WeakMap;function fp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oc(n){return ri(n)?n:lc(n,!1,np,op,Kf)}function hp(n){return lc(n,!1,sp,lp,$f)}function Yo(n){return lc(n,!0,ip,cp,Zf)}function lc(n,e,t,i,s){if(!st(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=fp(Nd(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function qi(n){return ri(n)?qi(n.__v_raw):!!(n&&n.__v_isReactive)}function ri(n){return!!(n&&n.__v_isReadonly)}function on(n){return!!(n&&n.__v_isShallow)}function cc(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function dp(n){return!it(n,"__v_skip")&&Object.isExtensible(n)&&Uf(n,"__v_skip",!0),n}const Sn=n=>st(n)?oc(n):n,bs=n=>st(n)?Yo(n):n;function Ot(n){return n?n.__v_isRef===!0:!1}function VM(n){return pp(n,!1)}function pp(n,e){return Ot(n)?n:new mp(n,e)}class mp{constructor(e,t){this.dep=new rc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:Sn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||on(e)||ri(e);e=i?e:tt(e),Cn(e,t)&&(this._rawValue=e,this._value=i?e:Sn(e),this.dep.trigger())}}function _p(n){return Ot(n)?n.value:n}const gp={get:(n,e,t)=>e==="__v_raw"?n:_p(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Ot(s)&&!Ot(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Jf(n){return qi(n)?n:new Proxy(n,gp)}class xp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new rc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=tr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&pt!==this)return zf(this,!0),!0}get value(){const e=this.dep.track();return kf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function vp(n,e,t=!1){let i,s;return Ge(n)?i=n:(i=n.get,s=n.set),new xp(i,s,t)}const wr={},pa=new WeakMap;let Vi;function Sp(n,e=!1,t=Vi){if(t){let i=pa.get(t);i||pa.set(t,i=[]),i.push(n)}}function Mp(n,e,t=ht){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=y=>s?y:on(y)||s===!1||s===0?Zn(y,1):Zn(y);let u,h,f,p,g=!1,S=!1;if(Ot(n)?(h=()=>n.value,g=on(n)):qi(n)?(h=()=>c(n),g=!0):Fe(n)?(S=!0,g=n.some(y=>qi(y)||on(y)),h=()=>n.map(y=>{if(Ot(y))return y.value;if(qi(y))return c(y);if(Ge(y))return l?l(y,2):y()})):Ge(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){ii();try{f()}finally{si()}}const y=Vi;Vi=u;try{return l?l(n,3,[p]):n(p)}finally{Vi=y}}:h=In,e&&s){const y=h,C=s===!0?1/0:s;h=()=>Zn(y(),C)}const _=jd(),d=()=>{u.stop(),_&&_.active&&Zl(_.effects,u)};if(r&&e){const y=e;e=(...C)=>{const P=y(...C);return d(),P}}let E=S?new Array(n.length).fill(wr):wr;const A=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const C=u.run();if(y||s||g||(S?C.some((P,U)=>Cn(P,E[U])):Cn(C,E))){f&&f();const P=Vi;Vi=u;try{const U=[C,E===wr?void 0:S&&E[0]===wr?[]:E,p];E=C,l?l(e,3,U):e(...U)}finally{Vi=P}}}else u.run()};return o&&o(A),u=new Bf(h),u.scheduler=a?()=>a(A,!1):A,p=y=>Sp(y,!1,u),f=u.onStop=()=>{const y=pa.get(u);if(y){if(l)l(y,4);else for(const C of y)C();pa.delete(u)}},e?i?A(!0):E=u.run():a?a(A.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Zn(n,e=1/0,t){if(e<=0||!st(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ot(n))Zn(n.value,e,t);else if(Fe(n))for(let i=0;i<n.length;i++)Zn(n[i],e,t);else if(Ds(n)||gs(n))n.forEach(i=>{Zn(i,e,t)});else if(Lf(n)){for(const i in n)Zn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Zn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _r(n,e,t,i){try{return i?n(...i):n()}catch(s){Na(s,e,t)}}function cn(n,e,t,i){if(Ge(n)){const s=_r(n,e,t,i);return s&&Pf(s)&&s.catch(r=>{Na(r,e,t)}),s}if(Fe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(cn(n[r],e,t,i));return s}}function Na(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ht;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}o=o.parent}if(r){ii(),_r(r,null,10,[n,l,c]),si();return}}Ep(n,t,s,i,a)}function Ep(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Ht=[];let Tn=-1;const xs=[];let vi=null,ps=0;const Qf=Promise.resolve();let ma=null;function eh(n){const e=ma||Qf;return n?e.then(this?n.bind(this):n):e}function yp(n){let e=Tn+1,t=Ht.length;for(;e<t;){const i=e+t>>>1,s=Ht[i],r=ir(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function uc(n){if(!(n.flags&1)){const e=ir(n),t=Ht[Ht.length-1];!t||!(n.flags&2)&&e>=ir(t)?Ht.push(n):Ht.splice(yp(e),0,n),n.flags|=1,th()}}function th(){ma||(ma=Qf.then(ih))}function bp(n){if(!Fe(n))vi&&n.id===-1?vi.splice(ps+1,0,n):n.flags&1||(xs.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)xs.push(n[e]);th()}function Gc(n,e,t=Tn+1){for(;t<Ht.length;t++){const i=Ht[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ht.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function nh(n){if(xs.length){const e=[...new Set(xs)].sort((t,i)=>ir(t)-ir(i));if(xs.length=0,vi){for(let t=0;t<e.length;t++)vi.push(e[t]);return}for(vi=e,ps=0;ps<vi.length;ps++){const t=vi[ps];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}vi=null,ps=0}}const ir=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ih(n){try{for(Tn=0;Tn<Ht.length;Tn++){const e=Ht[Tn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_r(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Tn<Ht.length;Tn++){const e=Ht[Tn];e&&(e.flags&=-2)}Tn=-1,Ht.length=0,nh(),ma=null,(Ht.length||xs.length)&&ih()}}let Nt=null,sh=null;function _a(n){const e=Nt;return Nt=n,sh=n&&n.type.__scopeId||null,e}function Tp(n,e=Nt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Sa(-1);const r=_a(e),a=ei.length;let o;try{o=n(...s)}finally{for(let l=ei.length;l>a;l--)dc();_a(r),i._d&&Sa(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function zM(n,e){if(Nt===null)return n;const t=Ha(Nt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,a,o,l=ht]=e[s];r&&(Ge(r)&&(r={mounted:r,updated:r}),r.deep&&Zn(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Ci(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(ii(),cn(l,t,8,[n.el,o,n,e]),si())}}function Ap(n,e){if(Gt){let t=Gt.provides;const i=Gt.parent&&Gt.parent.provides;i===t&&(t=Gt.provides=Object.create(i)),t[n]=e}}function sa(n,e,t=!1){const i=Bh();if(i||Ss){let s=Ss?Ss._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ge(e)?e.call(i&&i.proxy):e}}const wp=Symbol.for("v-scx"),Rp=()=>sa(wp);function Qa(n,e,t){return rh(n,e,t)}function rh(n,e,t=ht){const{immediate:i,deep:s,flush:r,once:a}=t,o=Mt({},t),l=e&&i||!e&&r!=="post";let c;if(lr){if(r==="sync"){const p=Rp();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=In,p.resume=In,p.pause=In,p}}const u=Gt;o.call=(p,g,S)=>cn(p,u,g,S);let h=!1;r==="post"?o.scheduler=p=>{Yt(p,u&&u.suspense)}:r!=="sync"&&(h=!0,o.scheduler=(p,g)=>{g?p():uc(p)}),o.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Mp(n,e,o);return lr&&(c?c.push(f):l&&f()),f}function Cp(n,e,t){const i=this.proxy,s=_t(n)?n.includes(".")?ah(i,n):()=>i[n]:n.bind(i,i);let r;Ge(e)?r=e:(r=e.handler,t=e);const a=gr(this),o=rh(s,r.bind(i),t);return a(),o}function ah(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Pp=Symbol("_vte"),Fa=n=>n.__isTeleport,rn=Symbol("_leaveCb"),Ns=Symbol("_enterCb");function Dp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ph(()=>{n.isMounted=!0}),mh(()=>{n.isUnmounting=!0}),n}const nn=[Function,Array],oh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn},lh=n=>{const e=n.subTree;return e.component?lh(e.component):e},Lp={name:"BaseTransition",props:oh,setup(n,{slots:e}){const t=Bh(),i=Dp();return()=>{const s=e.default&&fh(e.default(),!0),r=s&&s.length?ch(s):t.subTree?Sm():void 0;if(!r)return;const a=tt(n),{mode:o}=a;if(i.isLeaving)return eo(r);const l=ga(r);if(!l)return eo(r);let c=jo(l,a,i,t,h=>c=h);l.type!==Ut&&sr(l,c);let u=t.subTree&&ga(t.subTree);if(u&&u.type!==Ut&&!zi(u,l)&&lh(t).type!==Ut){let h=jo(u,a,i,t);if(sr(u,h),o==="out-in"&&l.type!==Ut)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,u=void 0},eo(r);o==="in-out"&&l.type!==Ut?h.delayLeave=(f,p,g)=>{const S=uh(i,u);S[String(u.key)]=u,f[rn]=()=>{p(),f[rn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function ch(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Ut){e=t;break}}return e}const Ip=Lp;function uh(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function jo(n,e,t,i,s){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:S,onBeforeAppear:_,onAppear:d,onAfterAppear:E,onAppearCancelled:A}=e,y=String(n.key),C=uh(t,n),P=(b,Y)=>{b&&cn(b,i,9,Y)},U=(b,Y)=>{const D=Y[1];P(b,Y),Fe(b)?b.every(I=>I.length<=1)&&D():b.length<=1&&D()},v={mode:a,persisted:o,beforeEnter(b){let Y=l;if(!t.isMounted)if(r)Y=_||l;else return;b[rn]&&b[rn](!0);const D=C[y];D&&zi(n,D)&&D.el[rn]&&D.el[rn](),P(Y,[b])},enter(b){if(C[y]===n)return;let Y=c,D=u,I=h;if(!t.isMounted)if(r)Y=d||c,D=E||u,I=A||h;else return;let B=!1;b[Ns]=G=>{B||(B=!0,G?P(I,[b]):P(D,[b]),v.delayedLeave&&v.delayedLeave(),b[Ns]=void 0)};const W=b[Ns].bind(null,!1);Y?U(Y,[b,W]):W()},leave(b,Y){const D=String(n.key);if(b[Ns]&&b[Ns](!0),t.isUnmounting)return Y();P(f,[b]);let I=!1;b[rn]=W=>{I||(I=!0,Y(),W?P(S,[b]):P(g,[b]),b[rn]=void 0,C[D]===n&&delete C[D])};const B=b[rn].bind(null,!1);C[D]=n,p?U(p,[b,B]):B()},clone(b){const Y=jo(b,e,t,i,s);return s&&s(Y),Y}};return v}function eo(n){if(Oa(n))return n=bi(n),n.children=null,n}function ga(n){if(!Oa(n))return Fa(n.type)&&n.children?ch(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ge(t.default))return t.default()}}function sr(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;sr(Fa(t.type)&&ga(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function fh(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let a=n[r];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===Jt?(a.patchFlag&128&&s++,i=i.concat(fh(a.children,e,o))):(e||a.type!==Ut)&&i.push(o!=null?bi(a,{key:o}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function HM(n,e){return Ge(n)?Mt({name:n.name},e,{setup:n}):n}function hh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function kc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const xa=new WeakMap;function Qs(n,e,t,i,s=!1){if(Fe(n)){n.forEach((S,_)=>Qs(S,e&&(Fe(e)?e[_]:e),t,i,s));return}if(vs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Qs(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Ha(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===ht?o.refs={}:o.refs,h=o.setupState,f=tt(h),p=h===ht?Cf:S=>kc(u,S)?!1:it(f,S),g=(S,_)=>!(_&&kc(u,_));if(c!=null&&c!==l){if(Wc(e),_t(c))u[c]=null,p(c)&&(h[c]=null);else if(Ot(c)){const S=e;g(c,S.k)&&(c.value=null),S.k&&(u[S.k]=null)}}if(Ge(l))_r(l,o,12,[a,u]);else{const S=_t(l),_=Ot(l);if(S||_){const d=()=>{if(n.f){const E=S?p(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Fe(E)&&Zl(E,r);else if(Fe(E))E.includes(r)||E.push(r);else if(S)u[l]=[r],p(l)&&(h[l]=u[l]);else{const A=[r];g(l,n.k)&&(l.value=A),n.k&&(u[n.k]=A)}}else S?(u[l]=a,p(l)&&(h[l]=a)):_&&(g(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const E=()=>{d(),xa.delete(n)};E.id=-1,xa.set(n,E),Yt(E,t)}else Wc(n),d()}}}function Wc(n){const e=xa.get(n);e&&(e.flags|=8,xa.delete(n))}Ia().requestIdleCallback;Ia().cancelIdleCallback;const vs=n=>!!n.type.__asyncLoader,Oa=n=>n.type.__isKeepAlive;function Up(n,e){dh(n,"a",e)}function Np(n,e){dh(n,"da",e)}function dh(n,e,t=Gt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ba(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Oa(s.parent.vnode)&&Fp(i,e,t,s),s=s.parent}}function Fp(n,e,t,i){const s=Ba(e,n,i,!0);_h(()=>{Zl(i[e],s)},t)}function Ba(n,e,t=Gt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{ii();const o=gr(t),l=cn(e,t,n,a);return o(),si(),l});return i?s.unshift(r):s.push(r),r}}const ci=n=>(e,t=Gt)=>{(!lr||n==="sp")&&Ba(n,(...i)=>e(...i),t)},Op=ci("bm"),ph=ci("m"),Bp=ci("bu"),Vp=ci("u"),mh=ci("bum"),_h=ci("um"),zp=ci("sp"),Hp=ci("rtg"),Gp=ci("rtc");function kp(n,e=Gt){Ba("ec",n,e)}const Wp=Symbol.for("v-ndc");function GM(n,e,t,i){let s;const r=t,a=Fe(n);if(a||_t(n)){const o=a&&qi(n);let l=!1,c=!1;o&&(l=!on(n),c=ri(n),n=Ua(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?bs(Sn(n[u])):Sn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(st(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function kM(n,e,t,i,s,r){if(t==null&&(t={}),Nt.ce||Nt.parent&&vs(Nt.parent)&&Nt.parent.ce){const c=t,u=Object.keys(c).length>0;return Qo(),el(Jt,null,[kt("slot",c,i)],u?-2:64)}let a=n[e];a&&a._c&&(a._d=!1);const o=ei.length;Qo();let l;try{const c=a&&gh(a(t)),u=t.key||r||c&&c.key;l=el(Jt,{key:(u&&!vn(u)?u:`_${e}`)+(!c&&i?"_fb":"")},c||(i?i():[]),c&&n._===1?64:-2)}catch(c){for(let u=ei.length;u>o;u--)dc();throw c}finally{a&&a._c&&(a._d=!0)}return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function gh(n){return n.some(e=>ar(e)?!(e.type===Ut||e.type===Jt&&!gh(e.children)):!0)?n:null}const Ko=n=>n?Vh(n)?Ha(n):Ko(n.parent):null,er=Mt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ko(n.parent),$root:n=>Ko(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>vh(n),$forceUpdate:n=>n.f||(n.f=()=>{uc(n.update)}),$nextTick:n=>n.n||(n.n=eh.bind(n.proxy)),$watch:n=>Cp.bind(n)}),to=(n,e)=>n!==ht&&!n.__isScriptSetup&&it(n,e),Xp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const f=a[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(to(i,e))return a[e]=1,i[e];if(s!==ht&&it(s,e))return a[e]=2,s[e];if(it(r,e))return a[e]=3,r[e];if(t!==ht&&it(t,e))return a[e]=4,t[e];$o&&(a[e]=0)}}const c=er[e];let u,h;if(c)return e==="$attrs"&&It(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==ht&&it(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,it(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return to(s,e)?(s[e]=t,!0):i!==ht&&it(i,e)?(i[e]=t,!0):it(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==ht&&o[0]!=="$"&&it(n,o)||to(e,o)||it(r,o)||it(i,o)||it(er,o)||it(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:it(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Xc(n){return Fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let $o=!0;function qp(n){const e=vh(n),t=n.proxy,i=n.ctx;$o=!1,e.beforeCreate&&qc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:S,deactivated:_,beforeDestroy:d,beforeUnmount:E,destroyed:A,unmounted:y,render:C,renderTracked:P,renderTriggered:U,errorCaptured:v,serverPrefetch:b,expose:Y,inheritAttrs:D,components:I,directives:B,filters:W}=e;if(c&&Yp(c,i,null),a)for(const O in a){const ne=a[O];Ge(ne)&&(i[O]=ne.bind(t))}if(s){const O=s.call(t,t);st(O)&&(n.data=oc(O))}if($o=!0,r)for(const O in r){const ne=r[O],oe=Ge(ne)?ne.bind(t,t):Ge(ne.get)?ne.get.bind(t,t):In,xe=!Ge(ne)&&Ge(ne.set)?ne.set.bind(t):In,ve=Pm({get:oe,set:xe});Object.defineProperty(i,O,{enumerable:!0,configurable:!0,get:()=>ve.value,set:_e=>ve.value=_e})}if(o)for(const O in o)xh(o[O],i,t,O);if(l){const O=Ge(l)?l.call(t):l;Reflect.ownKeys(O).forEach(ne=>{Ap(ne,O[ne])})}u&&qc(u,n,"c");function z(O,ne){Fe(ne)?ne.forEach(oe=>O(oe.bind(t))):ne&&O(ne.bind(t))}if(z(Op,h),z(ph,f),z(Bp,p),z(Vp,g),z(Up,S),z(Np,_),z(kp,v),z(Gp,P),z(Hp,U),z(mh,E),z(_h,y),z(zp,b),Fe(Y))if(Y.length){const O=n.exposed||(n.exposed={});Y.forEach(ne=>{Object.defineProperty(O,ne,{get:()=>t[ne],set:oe=>t[ne]=oe,enumerable:!0})})}else n.exposed||(n.exposed={});C&&n.render===In&&(n.render=C),D!=null&&(n.inheritAttrs=D),I&&(n.components=I),B&&(n.directives=B),b&&hh(n)}function Yp(n,e,t=In){Fe(n)&&(n=Zo(n));for(const i in n){const s=n[i];let r;st(s)?"default"in s?r=sa(s.from||i,s.default,!0):r=sa(s.from||i):r=sa(s),Ot(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function qc(n,e,t){cn(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function xh(n,e,t,i){let s=i.includes(".")?ah(t,i):()=>t[i];if(_t(n)){const r=e[n];Ge(r)&&Qa(s,r)}else if(Ge(n))Qa(s,n.bind(t));else if(st(n))if(Fe(n))n.forEach(r=>xh(r,e,t,i));else{const r=Ge(n.handler)?n.handler.bind(t):e[n.handler];Ge(r)&&Qa(s,r,n)}}function vh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>va(l,c,a,!0)),va(l,e,a)),st(e)&&r.set(e,l),l}function va(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&va(n,r,t,!0),s&&s.forEach(a=>va(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=jp[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const jp={data:Yc,props:jc,emits:jc,methods:qs,computed:qs,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:qs,directives:qs,watch:$p,provide:Yc,inject:Kp};function Yc(n,e){return e?n?function(){return Mt(Ge(n)?n.call(this,this):n,Ge(e)?e.call(this,this):e)}:e:n}function Kp(n,e){return qs(Zo(n),Zo(e))}function Zo(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Vt(n,e){return n?[...new Set([].concat(n,e))]:e}function qs(n,e){return n?Mt(Object.create(null),n,e):e}function jc(n,e){return n?Fe(n)&&Fe(e)?[...new Set([...n,...e])]:Mt(Object.create(null),Xc(n),Xc(e??{})):e}function $p(n,e){if(!n)return e;if(!e)return n;const t=Mt(Object.create(null),n);for(const i in e)t[i]=Vt(n[i],e[i]);return t}function Sh(){return{app:null,config:{isNativeTag:Cf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zp=0;function Jp(n,e){return function(i,s=null){Ge(i)||(i=Mt({},i)),s!=null&&!st(s)&&(s=null);const r=Sh(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:Zp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Lm,get config(){return r.config},set config(u){},use(u,...h){return a.has(u)||(u&&Ge(u.install)?(a.add(u),u.install(c,...h)):Ge(u)&&(a.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const p=c._ceVNode||kt(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,Ha(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(cn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Ss;Ss=c;try{return u()}finally{Ss=h}}};return c}}let Ss=null;const Qp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${gn(e)}Modifiers`]||n[`${ji(e)}Modifiers`];function em(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ht;let s=t;const r=e.startsWith("update:"),a=r&&Qp(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>_t(u)?u.trim():u)),a.number&&(s=t.map(La)));let o,l=i[o=ja(e)]||i[o=ja(gn(e))];!l&&r&&(l=i[o=ja(ji(e))]),l&&cn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,cn(c,n,6,s)}}const tm=new WeakMap;function Mh(n,e,t=!1){const i=t?tm:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Ge(n)){const l=c=>{const u=Mh(c,e,!0);u&&(o=!0,Mt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(st(n)&&i.set(n,null),null):(Fe(r)?r.forEach(l=>a[l]=null):Mt(a,r),st(n)&&i.set(n,a),a)}function Va(n,e){return!n||!Ca(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),it(n,e[0].toLowerCase()+e.slice(1))||it(n,ji(e))||it(n,e))}function Kc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:h,data:f,setupState:p,ctx:g,inheritAttrs:S}=n,_=_a(n);let d,E;try{if(t.shapeFlag&4){const y=s||i,C=y;d=wn(c.call(C,y,u,h,p,f,g)),E=o}else{const y=e;d=wn(y.length>1?y(h,{attrs:o,slots:a,emit:l}):y(h,null)),E=e.props?o:nm(o)}}catch(y){ei.length=0,Na(y,n,1),d=kt(Ut)}let A=d;if(E&&S!==!1){const y=Object.keys(E),{shapeFlag:C}=A;y.length&&C&7&&(r&&y.some(Pa)&&(E=im(E,r)),A=bi(A,E,!1,!0))}if(t.dirs&&(A=bi(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition){const y=Fa(A.type)&&ga(A)||A;sr(y,t.transition)}return d=A,_a(_),d}const nm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ca(t))&&((e||(e={}))[t]=n[t]);return e},im=(n,e)=>{const t={};for(const i in n)(!Pa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function sm(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?$c(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(Eh(a,i,f)&&!Va(c,f))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?$c(i,a,c):!0:!!a;return!1}function $c(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Eh(e,n,r)&&!Va(t,r))return!0}return!1}function Eh(n,e,t){const i=n[t],s=e[t];return t==="style"&&st(i)&&st(s)?!Ls(i,s):i!==s}function rm({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const yh={},bh=()=>Object.create(yh),Th=n=>Object.getPrototypeOf(n)===yh;function am(n,e,t,i=!1){const s={},r=bh();n.propsDefaults=Object.create(null),Ah(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:hp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function om(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=tt(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Va(n.emitsOptions,f))continue;const p=e[f];if(l)if(it(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const g=gn(f);s[g]=Jo(l,o,g,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{Ah(n,e,s,r)&&(c=!0);let u;for(const h in o)(!e||!it(e,h)&&((u=ji(h))===h||!it(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Jo(l,o,h,void 0,n,!0)):delete s[h]);if(r!==o)for(const h in r)(!e||!it(e,h))&&(delete r[h],c=!0)}c&&$n(n.attrs,"set","")}function Ah(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if($s(l))continue;const c=e[l];let u;s&&it(s,u=gn(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Va(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=tt(t),c=o||ht;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Jo(s,l,h,c[h],n,!it(c,h))}}return a}function Jo(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=it(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ge(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=gr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===ji(t))&&(i=!0))}return i}const lm=new WeakMap;function wh(n,e,t=!1){const i=t?lm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Ge(n)){const u=h=>{l=!0;const[f,p]=wh(h,e,!0);Mt(a,f),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return st(n)&&i.set(n,_s),_s;if(Fe(r))for(let u=0;u<r.length;u++){const h=gn(r[u]);Zc(h)&&(a[h]=ht)}else if(r)for(const u in r){const h=gn(u);if(Zc(h)){const f=r[u],p=a[h]=Fe(f)||Ge(f)?{type:f}:Mt({},f),g=p.type;let S=!1,_=!0;if(Fe(g))for(let d=0;d<g.length;++d){const E=g[d],A=Ge(E)&&E.name;if(A==="Boolean"){S=!0;break}else A==="String"&&(_=!1)}else S=Ge(g)&&g.name==="Boolean";p[0]=S,p[1]=_,(S||it(p,"default"))&&o.push(h)}}const c=[a,o];return st(n)&&i.set(n,c),c}function Zc(n){return n[0]!=="$"&&!$s(n)}const fc=n=>n==="_"||n==="_ctx"||n==="$stable",hc=n=>Fe(n)?n.map(wn):[wn(n)],cm=(n,e,t)=>{if(e._n)return e;const i=Tp((...s)=>hc(e(...s)),t);return i._c=!1,i},Rh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(fc(s))continue;const r=n[s];if(Ge(r))e[s]=cm(s,r,i);else if(r!=null){const a=hc(r);e[s]=()=>a}}},Ch=(n,e)=>{const t=hc(e);n.slots.default=()=>t},Ph=(n,e,t)=>{for(const i in e)(t||!fc(i))&&(n[i]=e[i])},um=(n,e,t)=>{const i=n.slots=bh();if(n.vnode.shapeFlag&32){const s=e._;s?(Ph(i,e,t),t&&Uf(i,"_",s,!0)):Rh(e,i)}else e&&Ch(n,e)},fm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=ht;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:Ph(s,e,t):(r=!e.$stable,Rh(e,s)),a=e}else e&&(Ch(n,e),a={default:1});if(r)for(const o in s)!fc(o)&&a[o]==null&&delete s[o]},Yt=_m;function hm(n){return dm(n)}function dm(n,e){const t=Ia();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=In,insertStaticContent:g}=n,S=(w,L,H,ie=null,$=null,te=null,T=void 0,ae=null,Q=!!L.dynamicChildren)=>{if(w===L)return;w&&!zi(w,L)&&(ie=fe(w),_e(w,$,te,!0),w=null),L.patchFlag===-2&&(Q=!1,L.dynamicChildren=null);const{type:K,ref:ee,shapeFlag:x}=L;switch(K){case za:_(w,L,H,ie);break;case Ut:d(w,L,H,ie);break;case ra:w==null&&E(L,H,ie,T);break;case Jt:I(w,L,H,ie,$,te,T,ae,Q);break;default:x&1?C(w,L,H,ie,$,te,T,ae,Q):x&6?B(w,L,H,ie,$,te,T,ae,Q):(x&64||x&128)&&K.process(w,L,H,ie,$,te,T,ae,Q,Ie)}ee!=null&&$?Qs(ee,w&&w.ref,te,L||w,!L):ee==null&&w&&w.ref!=null&&Qs(w.ref,null,te,w,!0)},_=(w,L,H,ie)=>{if(w==null)i(L.el=o(L.children),H,ie);else{const $=L.el=w.el;L.children!==w.children&&c($,L.children)}},d=(w,L,H,ie)=>{w==null?i(L.el=l(L.children||""),H,ie):L.el=w.el},E=(w,L,H,ie)=>{[w.el,w.anchor]=g(w.children,L,H,ie,w.el,w.anchor)},A=({el:w,anchor:L},H,ie)=>{let $;for(;w&&w!==L;)$=f(w),i(w,H,ie),w=$;i(L,H,ie)},y=({el:w,anchor:L})=>{let H;for(;w&&w!==L;)H=f(w),s(w),w=H;s(L)},C=(w,L,H,ie,$,te,T,ae,Q)=>{if(L.type==="svg"?T="svg":L.type==="math"&&(T="mathml"),w==null)P(L,H,ie,$,te,T,ae,Q);else{const K=w.el&&w.el._isVueCE?w.el:null;try{K&&K._beginPatch(),b(w,L,$,te,T,ae,Q)}finally{K&&K._endPatch()}}},P=(w,L,H,ie,$,te,T,ae)=>{let Q,K;const{props:ee,shapeFlag:x,transition:m,dirs:R}=w;if(Q=w.el=a(w.type,te,ee&&ee.is,ee),x&8?u(Q,w.children):x&16&&v(w.children,Q,null,ie,$,no(w,te),T,ae),R&&Ci(w,null,ie,"created"),U(Q,w,w.scopeId,T,ie),ee){for(const J in ee)J!=="value"&&!$s(J)&&r(Q,J,null,ee[J],te,ie);"value"in ee&&r(Q,"value",null,ee.value,te),(K=ee.onVnodeBeforeMount)&&En(K,ie,w)}R&&Ci(w,null,ie,"beforeMount");const k=pm($,m);k&&m.beforeEnter(Q),i(Q,L,H),((K=ee&&ee.onVnodeMounted)||k||R)&&Yt(()=>{try{K&&En(K,ie,w),k&&m.enter(Q),R&&Ci(w,null,ie,"mounted")}finally{}},$)},U=(w,L,H,ie,$)=>{if(H&&p(w,H),ie)for(let te=0;te<ie.length;te++)p(w,ie[te]);if($){let te=$.subTree;if(L===te||Uh(te.type)&&(te.ssContent===L||te.ssFallback===L)){const T=$.vnode;U(w,T,T.scopeId,T.slotScopeIds,$.parent)}}},v=(w,L,H,ie,$,te,T,ae,Q=0)=>{for(let K=Q;K<w.length;K++){const ee=w[K]=ae?Kn(w[K]):wn(w[K]);S(null,ee,L,H,ie,$,te,T,ae)}},b=(w,L,H,ie,$,te,T)=>{const ae=L.el=w.el;let{patchFlag:Q,dynamicChildren:K,dirs:ee}=L;Q|=w.patchFlag&16;const x=w.props||ht,m=L.props||ht;let R;if(H&&Pi(H,!1),(R=m.onVnodeBeforeUpdate)&&En(R,H,L,w),ee&&Ci(L,w,H,"beforeUpdate"),H&&Pi(H,!0),K&&(!w.dynamicChildren||w.dynamicChildren.length!==K.length)&&(Q=0,T=!1,K=null),(x.innerHTML&&m.innerHTML==null||x.textContent&&m.textContent==null)&&u(ae,""),K?Y(w.dynamicChildren,K,ae,H,ie,no(L,$),te):T||ne(w,L,ae,null,H,ie,no(L,$),te,!1),Q>0){if(Q&16)D(ae,x,m,H,$);else if(Q&2&&x.class!==m.class&&r(ae,"class",null,m.class,$),Q&4&&r(ae,"style",x.style,m.style,$),Q&8){const k=L.dynamicProps;for(let J=0;J<k.length;J++){const q=k[J],me=x[q],le=m[q];(le!==me||q==="value")&&r(ae,q,me,le,$,H)}}Q&1&&w.children!==L.children&&u(ae,L.children)}else!T&&K==null&&D(ae,x,m,H,$);((R=m.onVnodeUpdated)||ee)&&Yt(()=>{R&&En(R,H,L,w),ee&&Ci(L,w,H,"updated")},ie)},Y=(w,L,H,ie,$,te,T)=>{for(let ae=0;ae<L.length;ae++){const Q=w[ae],K=L[ae],ee=Q.el&&(Q.type===Jt||!zi(Q,K)||Q.shapeFlag&198)?h(Q.el):H;S(Q,K,ee,null,ie,$,te,T,!0)}},D=(w,L,H,ie,$)=>{if(L!==H){if(L!==ht)for(const te in L)!$s(te)&&!(te in H)&&r(w,te,L[te],null,$,ie);for(const te in H){if($s(te))continue;const T=H[te],ae=L[te];T!==ae&&te!=="value"&&r(w,te,ae,T,$,ie)}"value"in H&&r(w,"value",L.value,H.value,$)}},I=(w,L,H,ie,$,te,T,ae,Q)=>{const K=L.el=w?w.el:o(""),ee=L.anchor=w?w.anchor:o("");let{patchFlag:x,dynamicChildren:m,slotScopeIds:R}=L;R&&(ae=ae?ae.concat(R):R),w==null?(i(K,H,ie),i(ee,H,ie),v(L.children||[],H,ee,$,te,T,ae,Q)):x>0&&x&64&&m&&w.dynamicChildren&&w.dynamicChildren.length===m.length?(Y(w.dynamicChildren,m,H,$,te,T,ae),(L.key!=null||$&&L===$.subTree)&&Dh(w,L,!0)):ne(w,L,H,ee,$,te,T,ae,Q)},B=(w,L,H,ie,$,te,T,ae,Q)=>{L.slotScopeIds=ae,w==null?L.shapeFlag&512?$.ctx.activate(L,H,ie,T,Q):W(L,H,ie,$,te,T,Q):G(w,L,Q)},W=(w,L,H,ie,$,te,T)=>{const ae=w.component=bm(w,ie,$);if(Oa(w)&&(ae.ctx.renderer=Ie),Tm(ae,!1,T),ae.asyncDep){if($&&$.registerDep(ae,z,T),!w.el){const Q=ae.subTree=kt(Ut);d(null,Q,L,H),w.placeholder=Q.el}}else z(ae,w,L,H,$,te,T)},G=(w,L,H)=>{const ie=L.component=w.component;if(sm(w,L,H))if(ie.asyncDep&&!ie.asyncResolved){O(ie,L,H);return}else ie.next=L,ie.update();else L.el=w.el,ie.vnode=L},z=(w,L,H,ie,$,te,T)=>{const ae=()=>{if(w.isMounted){let{next:x,bu:m,u:R,parent:k,vnode:J}=w;{const De=Lh(w);if(De){x&&(x.el=J.el,O(w,x,T)),De.asyncDep.then(()=>{Yt(()=>{w.isUnmounted||K()},$)});return}}let q=x,me;Pi(w,!1),x?(x.el=J.el,O(w,x,T)):x=J,m&&ia(m),(me=x.props&&x.props.onVnodeBeforeUpdate)&&En(me,k,x,J),Pi(w,!0);const le=Kc(w),we=w.subTree;w.subTree=le,S(we,le,h(we.el),fe(we),w,$,te),x.el=le.el,q===null&&rm(w,le.el),R&&Yt(R,$),(me=x.props&&x.props.onVnodeUpdated)&&Yt(()=>En(me,k,x,J),$)}else{let x;const{el:m,props:R}=L,{bm:k,m:J,parent:q,root:me,type:le}=w,we=vs(L);Pi(w,!1),k&&ia(k),!we&&(x=R&&R.onVnodeBeforeMount)&&En(x,q,L),Pi(w,!0);{me.ce&&me.ce._hasShadowRoot()&&me.ce._injectChildStyle(le,w.parent?w.parent.type:void 0);const De=w.subTree=Kc(w);S(null,De,H,ie,w,$,te),L.el=De.el}if(J&&Yt(J,$),!we&&(x=R&&R.onVnodeMounted)){const De=L;Yt(()=>En(x,q,De),$)}(L.shapeFlag&256||q&&vs(q.vnode)&&q.vnode.shapeFlag&256)&&w.a&&Yt(w.a,$),w.isMounted=!0,L=H=ie=null}};w.scope.on();const Q=w.effect=new Bf(ae);w.scope.off();const K=w.update=Q.run.bind(Q),ee=w.job=Q.runIfDirty.bind(Q);ee.i=w,ee.id=w.uid,Q.scheduler=()=>uc(ee),Pi(w,!0),K()},O=(w,L,H)=>{L.component=w;const ie=w.vnode.props;w.vnode=L,w.next=null,om(w,L.props,ie,H),fm(w,L.children,H),ii(),Gc(w),si()},ne=(w,L,H,ie,$,te,T,ae,Q=!1)=>{const K=w&&w.children,ee=w?w.shapeFlag:0,x=L.children,{patchFlag:m,shapeFlag:R}=L;if(m>0){if(m&128){xe(K,x,H,ie,$,te,T,ae,Q);return}else if(m&256){oe(K,x,H,ie,$,te,T,ae,Q);return}}R&8?(ee&16&&re(K,$,te),x!==K&&u(H,x)):ee&16?R&16?xe(K,x,H,ie,$,te,T,ae,Q):re(K,$,te,!0):(ee&8&&u(H,""),R&16&&v(x,H,ie,$,te,T,ae,Q))},oe=(w,L,H,ie,$,te,T,ae,Q)=>{w=w||_s,L=L||_s;const K=w.length,ee=L.length,x=Math.min(K,ee);let m;for(m=0;m<x;m++){const R=L[m]=Q?Kn(L[m]):wn(L[m]);S(w[m],R,H,null,$,te,T,ae,Q)}K>ee?re(w,$,te,!0,!1,x):v(L,H,ie,$,te,T,ae,Q,x)},xe=(w,L,H,ie,$,te,T,ae,Q)=>{let K=0;const ee=L.length;let x=w.length-1,m=ee-1;for(;K<=x&&K<=m;){const R=w[K],k=L[K]=Q?Kn(L[K]):wn(L[K]);if(zi(R,k))S(R,k,H,null,$,te,T,ae,Q);else break;K++}for(;K<=x&&K<=m;){const R=w[x],k=L[m]=Q?Kn(L[m]):wn(L[m]);if(zi(R,k))S(R,k,H,null,$,te,T,ae,Q);else break;x--,m--}if(K>x){if(K<=m){const R=m+1,k=R<ee?L[R].el:ie;for(;K<=m;)S(null,L[K]=Q?Kn(L[K]):wn(L[K]),H,k,$,te,T,ae,Q),K++}}else if(K>m)for(;K<=x;)_e(w[K],$,te,!0),K++;else{const R=K,k=K,J=new Map;for(K=k;K<=m;K++){const Se=L[K]=Q?Kn(L[K]):wn(L[K]);Se.key!=null&&J.set(Se.key,K)}let q,me=0;const le=m-k+1;let we=!1,De=0;const ce=new Array(le);for(K=0;K<le;K++)ce[K]=0;for(K=R;K<=x;K++){const Se=w[K];if(me>=le){_e(Se,$,te,!0);continue}let be;if(Se.key!=null)be=J.get(Se.key);else for(q=k;q<=m;q++)if(ce[q-k]===0&&zi(Se,L[q])){be=q;break}be===void 0?_e(Se,$,te,!0):(ce[be-k]=K+1,be>=De?De=be:we=!0,S(Se,L[be],H,null,$,te,T,ae,Q),me++)}const he=we?mm(ce):_s;for(q=he.length-1,K=le-1;K>=0;K--){const Se=k+K,be=L[Se],Te=L[Se+1],ke=Se+1<ee?Te.el||Ih(Te):ie;ce[K]===0?S(null,be,H,ke,$,te,T,ae,Q):we&&(q<0||K!==he[q]?ve(be,H,ke,2):q--)}}},ve=(w,L,H,ie,$=null)=>{const{el:te,type:T,transition:ae,children:Q,shapeFlag:K}=w;if(K&6){ve(w.component.subTree,L,H,ie);return}if(K&128){w.suspense.move(L,H,ie);return}if(K&64){T.move(w,L,H,Ie);return}if(T===Jt){i(te,L,H);for(let x=0;x<Q.length;x++)ve(Q[x],L,H,ie);i(w.anchor,L,H);return}if(T===ra){A(w,L,H);return}if(ie!==2&&K&1&&ae)if(ie===0)ae.persisted&&!te[rn]?i(te,L,H):(ae.beforeEnter(te),i(te,L,H),Yt(()=>ae.enter(te),$));else{const{leave:x,delayLeave:m,afterLeave:R}=ae,k=()=>{w.ctx.isUnmounted?s(te):i(te,L,H)},J=()=>{const q=te._isLeaving||!!te[rn];te._isLeaving&&te[rn](!0),ae.persisted&&!q?k():x(te,()=>{k(),R&&R()})};m?m(te,k,J):J()}else i(te,L,H)},_e=(w,L,H,ie=!1,$=!1)=>{const{type:te,props:T,ref:ae,children:Q,dynamicChildren:K,shapeFlag:ee,patchFlag:x,dirs:m,cacheIndex:R,memo:k}=w;if(x===-2&&($=!1),ae!=null&&(ii(),Qs(ae,null,H,w,!0),si()),R!=null&&(L.renderCache[R]=void 0),ee&256){L.ctx.deactivate(w);return}const J=ee&1&&m,q=!vs(w);let me;if(q&&(me=T&&T.onVnodeBeforeUnmount)&&En(me,L,w),ee&6)et(w.component,H,ie);else{if(ee&128){w.suspense.unmount(H,ie);return}J&&Ci(w,null,L,"beforeUnmount"),ee&64?w.type.remove(w,L,H,Ie,ie):K&&!K.hasOnce&&(te!==Jt||x>0&&x&64)?re(K,L,H,!1,!0):(te===Jt&&x&384||!$&&ee&16)&&re(Q,L,H),ie&&ze(w)}const le=k!=null&&R==null;(q&&(me=T&&T.onVnodeUnmounted)||J||le)&&Yt(()=>{me&&En(me,L,w),J&&Ci(w,null,L,"unmounted"),le&&(w.el=null)},H)},ze=w=>{const{type:L,el:H,anchor:ie,transition:$}=w;if(L===Jt){nt(H,ie);return}if(L===ra){y(w);return}const te=()=>{s(H),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:T,delayLeave:ae}=$,Q=()=>T(H,te);ae?ae(w.el,te,Q):Q()}else te()},nt=(w,L)=>{let H;for(;w!==L;)H=f(w),s(w),w=H;s(L)},et=(w,L,H)=>{const{bum:ie,scope:$,job:te,subTree:T,um:ae,m:Q,a:K}=w;Jc(Q),Jc(K),ie&&ia(ie),$.stop(),te&&(te.flags|=8,_e(T,w,L,H)),ae&&Yt(ae,L),Yt(()=>{w.isUnmounted=!0},L)},re=(w,L,H,ie=!1,$=!1,te=0)=>{for(let T=te;T<w.length;T++)_e(w[T],L,H,ie,$)},fe=w=>{if(w.shapeFlag&6)return fe(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const L=f(w.anchor||w.el),H=L&&L[Pp];return H?f(H):L};let de=!1;const Be=(w,L,H)=>{let ie;w==null?L._vnode&&(_e(L._vnode,null,null,!0),ie=L._vnode.component):S(L._vnode||null,w,L,null,null,null,H),L._vnode=w,de||(de=!0,Gc(ie),nh(),de=!1)},Ie={p:S,um:_e,m:ve,r:ze,mt:W,mc:v,pc:ne,pbc:Y,n:fe,o:n};return{render:Be,hydrate:void 0,createApp:Jp(Be)}}function no({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Pi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function pm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Dh(n,e,t=!1){const i=n.children,s=e.children;if(Fe(i)&&Fe(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Kn(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&Dh(a,o)),o.type===za&&(o.patchFlag===-1&&(o=s[r]=Kn(o)),o.el=a.el),o.type===Ut&&!o.el&&(o.el=a.el)}}function mm(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function Lh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Lh(e)}function Jc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Ih(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Ih(e.subTree):null}const Uh=n=>n.__isSuspense;function _m(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):bp(n)}const Jt=Symbol.for("v-fgt"),za=Symbol.for("v-txt"),Ut=Symbol.for("v-cmt"),ra=Symbol.for("v-stc"),ei=[];let en=null;function Qo(n=!1){ei.push(en=n?null:[])}function dc(){ei.pop(),en=ei[ei.length-1]||null}let rr=1;function Sa(n,e=!1){rr+=n,n<0&&en&&e&&(en.hasOnce=!0)}function Nh(n){return n.dynamicChildren=rr>0?en||_s:null,dc(),rr>0&&en&&en.push(n),n}function WM(n,e,t,i,s,r){return Nh(Oh(n,e,t,i,s,r,!0))}function el(n,e,t,i,s){return Nh(kt(n,e,t,i,s,!0))}function ar(n){return n?n.__v_isVNode===!0:!1}function zi(n,e){return n.type===e.type&&n.key===e.key}const Fh=({key:n})=>n??null,aa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?_t(n)||Ot(n)||Ge(n)?{i:Nt,r:n,k:e,f:!!t}:n:null);function Oh(n,e=null,t=null,i=0,s=null,r=n===Jt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Fh(e),ref:e&&aa(e),scopeId:sh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Nt};return o?(Ma(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=_t(t)?8:16),rr>0&&!a&&en&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&en.push(l),l}const kt=gm;function gm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Wp)&&(n=Ut),ar(n)){const o=bi(n,e,!0);return t&&Ma(o,t),rr>0&&!r&&en&&(o.shapeFlag&6?en[en.indexOf(n)]=o:en.push(o)),o.patchFlag=-2,o}if(Cm(n)&&(n=n.__vccOpts),e){e=xm(e);let{class:o,style:l}=e;o&&!_t(o)&&(e.class=ec(o)),st(l)&&(cc(l)&&!Fe(l)&&(l=Mt({},l)),e.style=Ql(l))}const a=_t(n)?1:Uh(n)?128:Fa(n)?64:st(n)?4:Ge(n)?2:0;return Oh(n,e,t,i,s,a,r,!0)}function xm(n){return n?cc(n)||Th(n)?Mt({},n):n:null}function bi(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?Mm(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Fh(c),ref:e&&e.ref?t&&r?Fe(r)?r.concat(aa(e)):[r,aa(e)]:aa(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Jt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&bi(n.ssContent),ssFallback:n.ssFallback&&bi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&sr(u,l.clone(u)),u}function vm(n=" ",e=0){return kt(za,null,n,e)}function XM(n,e){const t=kt(ra,null,n);return t.staticCount=e,t}function Sm(n="",e=!1){return e?(Qo(),el(Ut,null,n)):kt(Ut,null,n)}function wn(n){return n==null||typeof n=="boolean"?kt(Ut):Fe(n)?kt(Jt,null,n.slice()):ar(n)?Kn(n):kt(za,null,String(n))}function Kn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:bi(n)}function Ma(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Ma(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Th(e)?e._ctx=Nt:s===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Ge(e)){if(i&65){Ma(n,{default:e});return}e={default:e,_ctx:Nt},t=32}else e=String(e),i&64?(t=16,e=[vm(e)]):t=8;n.children=e,n.shapeFlag|=t}function Mm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ec([e.class,i.class]));else if(s==="style")e.style=Ql([e.style,i.style]);else if(Ca(s)){const r=e[s],a=i[s];a&&r!==a&&!(Fe(r)&&r.includes(a))?e[s]=r?[].concat(r,a):a:a==null&&r==null&&!Pa(s)&&(e[s]=a)}else s!==""&&(e[s]=i[s])}return e}function En(n,e,t,i=null){cn(n,e,7,[t,i])}const Em=Sh();let ym=0;function bm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Em,r={uid:ym++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wh(i,s),emitsOptions:Mh(i,s),emit:null,emitted:null,propsDefaults:ht,inheritAttrs:i.inheritAttrs,ctx:ht,data:ht,props:ht,attrs:ht,slots:ht,refs:ht,setupState:ht,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=em.bind(null,r),n.ce&&n.ce(r),r}let Gt=null;const Bh=()=>Gt||Nt;let Ea,or;{const n=Ia(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};Ea=e("__VUE_INSTANCE_SETTERS__",t=>Gt=t),or=e("__VUE_SSR_SETTERS__",t=>lr=t)}const gr=n=>{const e=Gt;return Ea(n),n.scope.on(),()=>{n.scope.off(),Ea(e)}},Qc=()=>{Gt&&Gt.scope.off(),Ea(null)};function Vh(n){return n.vnode.shapeFlag&4}let lr=!1;function Tm(n,e=!1,t=!1){e&&or(e);const{props:i,children:s}=n.vnode,r=Vh(n);am(n,i,r,e),um(n,s,t||e);const a=r?Am(n,e):void 0;return e&&or(!1),a}function Am(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Xp);const{setup:i}=t;if(i){ii();const s=n.setupContext=i.length>1?Rm(n):null,r=gr(n),a=_r(i,n,0,[n.props,s]),o=Pf(a);if(si(),r(),(o||n.sp)&&!vs(n)&&hh(n),o){if(a.then(Qc,Qc),e)return a.then(l=>{or(!0);try{eu(n,l,e)}finally{or(!1)}}).catch(l=>{Na(l,n,0)});n.asyncDep=a}else eu(n,a)}else zh(n)}function eu(n,e,t){Ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:st(e)&&(n.setupState=Jf(e)),zh(n)}function zh(n,e,t){const i=n.type;n.render||(n.render=i.render||In);{const s=gr(n);ii();try{qp(n)}finally{si(),s()}}}const wm={get(n,e){return It(n,"get",""),n[e]}};function Rm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,wm),slots:n.slots,emit:n.emit,expose:e}}function Ha(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Jf(dp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in er)return er[t](n)},has(e,t){return t in e||t in er}})):n.proxy}function Cm(n){return Ge(n)&&"__vccOpts"in n}const Pm=(n,e)=>vp(n,e,lr);function Dm(n,e,t){try{Sa(-1);const i=arguments.length;return i===2?st(e)&&!Fe(e)?ar(e)?kt(n,null,[e]):kt(n,e):kt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ar(t)&&(t=[t]),kt(n,e,t))}finally{Sa(1)}}const Lm="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tl;const tu=typeof window<"u"&&window.trustedTypes;if(tu)try{tl=tu.createPolicy("vue",{createHTML:n=>n})}catch{}const Hh=tl?n=>tl.createHTML(n):n=>n,Im="http://www.w3.org/2000/svg",Um="http://www.w3.org/1998/Math/MathML",jn=typeof document<"u"?document:null,nu=jn&&jn.createElement("template"),Nm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?jn.createElementNS(Im,n):e==="mathml"?jn.createElementNS(Um,n):t?jn.createElement(n,{is:t}):jn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>jn.createTextNode(n),createComment:n=>jn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>jn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{nu.innerHTML=Hh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=nu.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},hi="transition",Fs="animation",cr=Symbol("_vtc"),Gh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Fm=Mt({},oh,Gh),Om=n=>(n.displayName="Transition",n.props=Fm,n),qM=Om((n,{slots:e})=>Dm(Ip,Bm(n),e)),Di=(n,e=[])=>{Fe(n)?n.forEach(t=>t(...e)):n&&n(...e)},iu=n=>n?Fe(n)?n.some(e=>e.length>1):n.length>1:!1;function Bm(n){const e={};for(const I in n)I in Gh||(e[I]=n[I]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,g=Vm(s),S=g&&g[0],_=g&&g[1],{onBeforeEnter:d,onEnter:E,onEnterCancelled:A,onLeave:y,onLeaveCancelled:C,onBeforeAppear:P=d,onAppear:U=E,onAppearCancelled:v=A}=e,b=(I,B,W,G)=>{I._enterCancelled=G,Li(I,B?u:o),Li(I,B?c:a),W&&W()},Y=(I,B)=>{I._isLeaving=!1,Li(I,h),Li(I,p),Li(I,f),B&&B()},D=I=>(B,W)=>{const G=I?U:E,z=()=>b(B,I,W);Di(G,[B,z]),su(()=>{Li(B,I?l:r),Gn(B,I?u:o),iu(G)||ru(B,i,S,z)})};return Mt(e,{onBeforeEnter(I){Di(d,[I]),Gn(I,r),Gn(I,a)},onBeforeAppear(I){Di(P,[I]),Gn(I,l),Gn(I,c)},onEnter:D(!1),onAppear:D(!0),onLeave(I,B){I._isLeaving=!0;const W=()=>Y(I,B);Gn(I,h),I._enterCancelled?(Gn(I,f),lu(I)):(lu(I),Gn(I,f)),su(()=>{I._isLeaving&&(Li(I,h),Gn(I,p),iu(y)||ru(I,i,_,W))}),Di(y,[I,W])},onEnterCancelled(I){b(I,!1,void 0,!0),Di(A,[I])},onAppearCancelled(I){b(I,!0,void 0,!0),Di(v,[I])},onLeaveCancelled(I){Y(I),Di(C,[I])}})}function Vm(n){if(n==null)return null;if(st(n))return[io(n.enter),io(n.leave)];{const e=io(n);return[e,e]}}function io(n){return Bd(n)}function Gn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[cr]||(n[cr]=new Set)).add(e)}function Li(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[cr];t&&(t.delete(e),t.size||(n[cr]=void 0))}function su(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let zm=0;function ru(n,e,t,i){const s=n._endId=++zm,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:a,timeout:o,propCount:l}=Hm(n,e);if(!a)return i();const c=a+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=p=>{p.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},o+1),n.addEventListener(c,f)}function Hm(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${hi}Delay`),r=i(`${hi}Duration`),a=au(s,r),o=i(`${Fs}Delay`),l=i(`${Fs}Duration`),c=au(o,l);let u=null,h=0,f=0;e===hi?a>0&&(u=hi,h=a,f=r.length):e===Fs?c>0&&(u=Fs,h=c,f=l.length):(h=Math.max(a,c),u=h>0?a>c?hi:Fs:null,f=u?u===hi?r.length:l.length:0);const p=u===hi&&/\b(?:transform|all)(?:,|$)/.test(i(`${hi}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:p}}function au(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>ou(t)+ou(n[i])))}function ou(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function lu(n){return(n?n.ownerDocument:document).body.offsetHeight}function Gm(n,e,t){const i=n[cr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ya=Symbol("_vod"),kh=Symbol("_vsh"),YM={name:"show",beforeMount(n,{value:e},{transition:t}){n[ya]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Os(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Os(n,!0),i.enter(n)):i.leave(n,()=>{Os(n,!1)}):Os(n,e))},beforeUnmount(n,{value:e}){Os(n,e)}};function Os(n,e){n.style.display=e?n[ya]:"none",n[kh]=!e}const km=Symbol(""),Wm=/(?:^|;)\s*display\s*:/;function Xm(n,e,t){const i=n.style,s=_t(t);let r=!1;if(t&&!s){if(e)if(_t(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Ys(i,o,"")}else for(const a in e)t[a]==null&&Ys(i,a,"");for(const a in t){a==="display"&&(r=!0);const o=t[a];o!=null?Ym(n,a,!_t(e)&&e?e[a]:void 0,o)||Ys(i,a,o):Ys(i,a,"")}}else if(s){if(e!==t){const a=i[km];a&&(t+=";"+a),i.cssText=t,r=Wm.test(t)}}else e&&n.removeAttribute("style");ya in n&&(n[ya]=r?i.display:"",n[kh]&&(i.display="none"))}const cu=/\s*!important$/;function Ys(n,e,t){if(Fe(t))t.forEach(i=>Ys(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=qm(n,e);cu.test(t)?n.setProperty(ji(i),t.replace(cu,""),"important"):n[i]=t}}const uu=["Webkit","Moz","ms"],so={};function qm(n,e){const t=so[e];if(t)return t;let i=gn(e);if(i!=="filter"&&i in n)return so[e]=i;i=If(i);for(let s=0;s<uu.length;s++){const r=uu[s]+i;if(r in n)return so[e]=r}return e}function Ym(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&_t(i)&&t===i}const fu="http://www.w3.org/1999/xlink";function hu(n,e,t,i,s,r=Wd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(fu,e.slice(6,e.length)):n.setAttributeNS(fu,e,t):t==null||r&&!Nf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":vn(t)?String(t):t)}function du(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Hh(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Nf(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Mi(n,e,t,i){n.addEventListener(e,t,i)}function jm(n,e,t,i){n.removeEventListener(e,t,i)}const pu=Symbol("_vei");function Km(n,e,t,i,s=null){const r=n[pu]||(n[pu]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=Jm(e);if(i){const c=r[e]=t_(i,s);Mi(n,o,c,l)}else a&&(jm(n,o,a,l),r[e]=void 0)}}const $m=/(Once|Passive|Capture)$/,Zm=/^on:?(?:Once|Passive|Capture)$/;function Jm(n){let e,t;for(;(t=n.match($m))&&!Zm.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):ji(n.slice(2)),e]}let ro=0;const Qm=Promise.resolve(),e_=()=>ro||(Qm.then(()=>ro=0),ro=Date.now());function t_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(Fe(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&cn(c,e,5,o)}}else cn(s,e,5,[i])};return t.value=n,t.attached=e_(),t}const mu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,n_=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?Gm(n,i,a):e==="style"?Xm(n,t,i):Ca(e)?Pa(e)||Km(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):i_(n,e,i,a))?(du(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&hu(n,e,i,a,r,e!=="value")):n._isVueCE&&(s_(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!_t(i)))?du(n,gn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),hu(n,e,i,a))};function i_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&mu(e)&&Ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return mu(e)&&_t(t)?!1:e in n}function s_(n,e){const t=n._def.props;if(!t)return!1;const i=gn(e);return Array.isArray(t)?t.some(s=>gn(s)===i):Object.keys(t).some(s=>gn(s)===i)}const Ts=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Fe(e)?t=>ia(e,t):e};function r_(n){n.target.composing=!0}function _u(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Pn=Symbol("_assign"),Rr=Symbol("_initialValue");function ao(n,e,t){return e&&(n=n.trim()),t&&(n=La(n)),n}const jM={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n.parentNode&&(n.type==="text"?n[Rr]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Rr]=n.defaultValue.replace(/\r\n?/g,`
`))),n[Pn]=Ts(s);const r=i||s.props&&s.props.type==="number";Mi(n,e?"change":"input",a=>{a.target.composing||n[Pn](ao(n.value,t,r))}),(t||r)&&Mi(n,"change",()=>{n.value=ao(n.value,t,r)}),e||(Mi(n,"compositionstart",r_),Mi(n,"compositionend",_u),Mi(n,"change",_u))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const s=e??"",r=n[Rr];delete n[Rr],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[Pn](ao(n.value,t,i)):n.value=s},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},a){if(n[Pn]=Ts(a),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?La(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l)}},KM={deep:!0,created(n,e,t){n[Pn]=Ts(t),Mi(n,"change",()=>{const i=n._modelValue,s=ur(n),r=n.checked,a=n[Pn];if(Fe(i)){const o=tc(i,s),l=o!==-1;if(r&&!l)a(i.concat(s));else if(!r&&l){const c=[...i];c.splice(o,1),a(c)}}else if(Ds(i)){const o=new Set(i);r?o.add(s):o.delete(s),a(o)}else a(Wh(n,r))})},mounted:gu,beforeUpdate(n,e,t){n[Pn]=Ts(t),gu(n,e,t)}};function gu(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(Fe(e))s=tc(e,i.props.value)>-1;else if(Ds(e))s=e.has(i.props.value);else{if(e===t)return;s=Ls(e,Wh(n,!0))}n.checked!==s&&(n.checked=s)}const $M={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,Mi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,r=>r.selected).map(r=>t?La(ur(r)):ur(r));n[Pn](n.multiple?Ds(n._modelValue)?new Set(s):s:s[0]),n._assigning=!0,eh(()=>{n._assigning=!1})}),n[Pn]=Ts(i)},mounted(n,{value:e}){xu(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[Pn]=Ts(t)},updated(n,{value:e}){n._assigning||xu(n,e)}};function xu(n,e){const t=n.multiple,i=Fe(e);if(!(t&&!i&&!Ds(e))){for(let s=0,r=n.options.length;s<r;s++){const a=n.options[s],o=ur(a);if(t)if(i){const l=typeof o;l==="string"||l==="number"?a.selected=e.some(c=>String(c)===String(o)):a.selected=tc(e,o)>-1}else a.selected=e.has(o);else if(Ls(ur(a),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function ur(n){return"_value"in n?n._value:n.value}function Wh(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const a_=Mt({patchProp:n_},Nm);let vu;function o_(){return vu||(vu=hm(a_))}const ZM=((...n)=>{const e=o_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=c_(i);if(!s)return;const r=e._component;!Ge(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,l_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function l_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function c_(n){return _t(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pc="183",Ms={ROTATE:0,DOLLY:1,PAN:2},ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},u_=0,Su=1,f_=2,oa=1,h_=2,js=3,Ti=0,jt=1,Jn=2,ti=0,Es=1,Mu=2,Eu=3,yu=4,d_=5,Hi=100,p_=101,m_=102,__=103,g_=104,x_=200,v_=201,S_=202,M_=203,nl=204,il=205,E_=206,y_=207,b_=208,T_=209,A_=210,w_=211,R_=212,C_=213,P_=214,sl=0,rl=1,al=2,As=3,ol=4,ll=5,cl=6,ul=7,mc=0,D_=1,L_=2,Un=0,Xh=1,qh=2,Yh=3,jh=4,Kh=5,$h=6,Zh=7,Jh=300,Yi=301,ws=302,oo=303,lo=304,Ga=306,fl=1e3,Qn=1001,hl=1002,Ct=1003,I_=1004,Cr=1005,Ft=1006,co=1007,ki=1008,Qt=1009,Qh=1010,ed=1011,fr=1012,_c=1013,Fn=1014,Dn=1015,ai=1016,gc=1017,xc=1018,hr=1020,td=35902,nd=35899,id=1021,sd=1022,_n=1023,oi=1026,Wi=1027,rd=1028,vc=1029,Rs=1030,Sc=1031,Mc=1033,la=33776,ca=33777,ua=33778,fa=33779,dl=35840,pl=35841,ml=35842,_l=35843,gl=36196,xl=37492,vl=37496,Sl=37488,Ml=37489,El=37490,yl=37491,bl=37808,Tl=37809,Al=37810,wl=37811,Rl=37812,Cl=37813,Pl=37814,Dl=37815,Ll=37816,Il=37817,Ul=37818,Nl=37819,Fl=37820,Ol=37821,Bl=36492,Vl=36494,zl=36495,Hl=36283,Gl=36284,kl=36285,Wl=36286,U_=3200,ad=0,N_=1,Ei="",an="srgb",Cs="srgb-linear",ba="linear",at="srgb",es=7680,bu=519,F_=512,O_=513,B_=514,Ec=515,V_=516,z_=517,yc=518,H_=519,Tu=35044,Au="300 es",Ln=2e3,dr=2001;function G_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ta(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function k_(){const n=Ta("canvas");return n.style.display="block",n}const wu={};function Ru(...n){const e="THREE."+n.shift();console.log(e,...n)}function od(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ve(...n){n=od(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ze(...n){n=od(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Aa(...n){const e=n.join(" ");e in wu||(wu[e]=!0,Ve(...n))}function W_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const X_={[sl]:rl,[al]:cl,[ol]:ul,[As]:ll,[rl]:sl,[cl]:al,[ul]:ol,[ll]:As};class Ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ha=Math.PI/180,Xl=180/Math.PI;function xr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function q_(n,e){return(n%e+e)%e}function uo(n,e,t){return(1-t)*n+t*e}function Bs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Y_={DEG2RAD:ha};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ai{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[a+0],p=r[a+1],g=r[a+2],S=r[a+3];if(h!==S||l!==f||c!==p||u!==g){let _=l*f+c*p+u*g+h*S;_<0&&(f=-f,p=-p,g=-g,S=-S,_=-_);let d=1-o;if(_<.9995){const E=Math.acos(_),A=Math.sin(E);d=Math.sin(d*E)/A,o=Math.sin(o*E)/A,l=l*d+f*o,c=c*d+p*o,u=u*d+g*o,h=h*d+S*o}else{l=l*d+f*o,c=c*d+p*o,u=u*d+g*o,h=h*d+S*o;const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fo.copy(this).projectOnVector(e),this.sub(fo)}reflect(e){return this.sub(fo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fo=new V,Cu=new Ai;class qe{constructor(e,t,i,s,r,a,o,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],S=s[0],_=s[3],d=s[6],E=s[1],A=s[4],y=s[7],C=s[2],P=s[5],U=s[8];return r[0]=a*S+o*E+l*C,r[3]=a*_+o*A+l*P,r[6]=a*d+o*y+l*U,r[1]=c*S+u*E+h*C,r[4]=c*_+u*A+h*P,r[7]=c*d+u*y+h*U,r[2]=f*S+p*E+g*C,r[5]=f*_+p*A+g*P,r[8]=f*d+p*y+g*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,g=t*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=h*S,e[1]=(s*c-u*i)*S,e[2]=(o*i-s*a)*S,e[3]=f*S,e[4]=(u*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=p*S,e[7]=(i*l-c*t)*S,e[8]=(a*t-i*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ho.makeScale(e,t)),this}rotate(e){return this.premultiply(ho.makeRotation(-e)),this}translate(e,t){return this.premultiply(ho.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ho=new qe,Pu=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Du=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function j_(){const n={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ei?ba:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Aa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Aa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Cs]:{primaries:e,whitePoint:i,transfer:ba,toXYZ:Pu,fromXYZ:Du,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Pu,fromXYZ:Du,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),n}const Je=j_();function ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ts;class K_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ts===void 0&&(ts=Ta("canvas")),ts.width=e.width,ts.height=e.height;const s=ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ts}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ta("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ni(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ni(t[i]/255)*255):t[i]=ni(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $_=0;class bc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=xr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(po(s[a].image)):r.push(po(s[a]))}else r=po(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function po(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?K_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let Z_=0;const mo=new V;class Bt extends Ki{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=Qn,s=Qn,r=Ft,a=ki,o=_n,l=Qt,c=Bt.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=xr(),this.name="",this.source=new bc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mo).x}get height(){return this.source.getSize(mo).y}get depth(){return this.source.getSize(mo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fl:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fl:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Jh;Bt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],S=l[2],_=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-S)<.01&&Math.abs(g-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+S)<.1&&Math.abs(g+_)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,y=(p+1)/2,C=(d+1)/2,P=(u+f)/4,U=(h+S)/4,v=(g+_)/4;return A>y&&A>C?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=P/i,r=U/i):y>C?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=P/s,r=v/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=U/r,s=v/r),this.set(i,s,r,t),this}let E=Math.sqrt((_-g)*(_-g)+(h-S)*(h-S)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(_-g)/E,this.y=(h-S)/E,this.z=(f-u)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class J_ extends Ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Bt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new bc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends J_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ld extends Bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q_ extends Bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ot{constructor(e,t,i,s,r,a,o,l,c,u,h,f,p,g,S,_){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,f,p,g,S,_)}set(e,t,i,s,r,a,o,l,c,u,h,f,p,g,S,_){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=S,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),a=1/ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,p=a*h,g=o*u,S=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-S*c,t[9]=-o*l,t[2]=S-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,S=c*h;t[0]=f+S*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=S+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,S=c*h;t[0]=f-S*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=S-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=o*u,S=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+S,t[1]=l*h,t[5]=S*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,S=o*c;t[0]=l*u,t[4]=S-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-S*h}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,S=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+S,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=S*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eg,e,tg)}lookAt(e,t,i){const s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),di.crossVectors(i,$t),di.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),di.crossVectors(i,$t)),di.normalize(),Pr.crossVectors($t,di),s[0]=di.x,s[4]=Pr.x,s[8]=$t.x,s[1]=di.y,s[5]=Pr.y,s[9]=$t.y,s[2]=di.z,s[6]=Pr.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],S=i[6],_=i[10],d=i[14],E=i[3],A=i[7],y=i[11],C=i[15],P=s[0],U=s[4],v=s[8],b=s[12],Y=s[1],D=s[5],I=s[9],B=s[13],W=s[2],G=s[6],z=s[10],O=s[14],ne=s[3],oe=s[7],xe=s[11],ve=s[15];return r[0]=a*P+o*Y+l*W+c*ne,r[4]=a*U+o*D+l*G+c*oe,r[8]=a*v+o*I+l*z+c*xe,r[12]=a*b+o*B+l*O+c*ve,r[1]=u*P+h*Y+f*W+p*ne,r[5]=u*U+h*D+f*G+p*oe,r[9]=u*v+h*I+f*z+p*xe,r[13]=u*b+h*B+f*O+p*ve,r[2]=g*P+S*Y+_*W+d*ne,r[6]=g*U+S*D+_*G+d*oe,r[10]=g*v+S*I+_*z+d*xe,r[14]=g*b+S*B+_*O+d*ve,r[3]=E*P+A*Y+y*W+C*ne,r[7]=E*U+A*D+y*G+C*oe,r[11]=E*v+A*I+y*z+C*xe,r[15]=E*b+A*B+y*O+C*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],S=e[7],_=e[11],d=e[15],E=l*p-c*f,A=o*p-c*h,y=o*f-l*h,C=a*p-c*u,P=a*f-l*u,U=a*h-o*u;return t*(S*E-_*A+d*y)-i*(g*E-_*C+d*P)+s*(g*A-S*C+d*U)-r*(g*y-S*P+_*U)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],S=e[13],_=e[14],d=e[15],E=t*o-i*a,A=t*l-s*a,y=t*c-r*a,C=i*l-s*o,P=i*c-r*o,U=s*c-r*l,v=u*S-h*g,b=u*_-f*g,Y=u*d-p*g,D=h*_-f*S,I=h*d-p*S,B=f*d-p*_,W=E*B-A*I+y*D+C*Y-P*b+U*v;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/W;return e[0]=(o*B-l*I+c*D)*G,e[1]=(s*I-i*B-r*D)*G,e[2]=(S*U-_*P+d*C)*G,e[3]=(f*P-h*U-p*C)*G,e[4]=(l*Y-a*B-c*b)*G,e[5]=(t*B-s*Y+r*b)*G,e[6]=(_*y-g*U-d*A)*G,e[7]=(u*U-f*y+p*A)*G,e[8]=(a*I-o*Y+c*v)*G,e[9]=(i*Y-t*I-r*v)*G,e[10]=(g*P-S*y+d*E)*G,e[11]=(h*y-u*P-p*E)*G,e[12]=(o*b-a*D-l*v)*G,e[13]=(t*D-i*b+s*v)*G,e[14]=(S*A-g*C-_*E)*G,e[15]=(u*C-h*A+f*E)*G,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,g=r*h,S=a*u,_=a*h,d=o*h,E=l*c,A=l*u,y=l*h,C=i.x,P=i.y,U=i.z;return s[0]=(1-(S+d))*C,s[1]=(p+y)*C,s[2]=(g-A)*C,s[3]=0,s[4]=(p-y)*P,s[5]=(1-(f+d))*P,s[6]=(_+E)*P,s[7]=0,s[8]=(g+A)*U,s[9]=(_-E)*U,s[10]=(1-(f+S))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let a=ns.set(s[0],s[1],s[2]).length();const o=ns.set(s[4],s[5],s[6]).length(),l=ns.set(s[8],s[9],s[10]).length();r<0&&(a=-a),fn.copy(this);const c=1/a,u=1/o,h=1/l;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,t.setFromRotationMatrix(fn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Ln,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s);let g,S;if(l)g=r/(a-r),S=a*r/(a-r);else if(o===Ln)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===dr)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ln,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),p=-(i+s)/(i-s);let g,S;if(l)g=1/(a-r),S=a/(a-r);else if(o===Ln)g=-2/(a-r),S=-(a+r)/(a-r);else if(o===dr)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ns=new V,fn=new ot,eg=new V(0,0,0),tg=new V(1,1,1),di=new V,Pr=new V,$t=new V,Lu=new ot,Iu=new Ai;class On{constructor(e=0,t=0,i=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ng=0;const Uu=new V,is=new Ai,kn=new ot,Dr=new V,Vs=new V,ig=new V,sg=new Ai,Nu=new V(1,0,0),Fu=new V(0,1,0),Ou=new V(0,0,1),Bu={type:"added"},rg={type:"removed"},ss={type:"childadded",child:null},_o={type:"childremoved",child:null};class At extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new V,t=new On,i=new Ai,s=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new qe}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(Nu,e)}rotateY(e){return this.rotateOnAxis(Fu,e)}rotateZ(e){return this.rotateOnAxis(Ou,e)}translateOnAxis(e,t){return Uu.copy(e).applyQuaternion(this.quaternion),this.position.add(Uu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nu,e)}translateY(e){return this.translateOnAxis(Fu,e)}translateZ(e){return this.translateOnAxis(Ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Dr.copy(e):Dr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Vs,Dr,this.up):kn.lookAt(Dr,Vs,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(kn),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bu),ss.child=e,this.dispatchEvent(ss),ss.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rg),_o.child=e,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bu),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,ig),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,sg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}At.DEFAULT_UP=new V(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Lr extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ag={type:"move"};class go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const _=t.getJointPose(S,i),d=this._getHandJoint(c,S);_!==null&&(d.matrix.fromArray(_.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=_.radius),d.visible=_!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ag)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Lr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function xo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Je.workingColorSpace){if(e=q_(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=xo(a,r,e+1/3),this.g=xo(a,r,e),this.b=xo(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=an){function i(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const i=cd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return Je.workingToColorSpace(Lt.copy(this),e),Math.round(Ke(Lt.r*255,0,255))*65536+Math.round(Ke(Lt.g*255,0,255))*256+Math.round(Ke(Lt.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Lt.copy(this),t);const i=Lt.r,s=Lt.g,r=Lt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=an){Je.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,s=Lt.b;return e!==an?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Ir);const i=uo(pi.h,Ir.h,t),s=uo(pi.s,Ir.s,t),r=uo(pi.l,Ir.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new $e;$e.NAMES=cd;class ud{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=i}clone(){return new ud(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class JM extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hn=new V,Wn=new V,vo=new V,Xn=new V,rs=new V,as=new V,Vu=new V,So=new V,Mo=new V,Eo=new V,yo=new mt,bo=new mt,To=new mt;class mn{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),hn.subVectors(e,t),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){hn.subVectors(s,t),Wn.subVectors(i,t),vo.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(Wn),l=hn.dot(vo),c=Wn.dot(Wn),u=Wn.dot(vo),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return yo.setScalar(0),bo.setScalar(0),To.setScalar(0),yo.fromBufferAttribute(e,t),bo.fromBufferAttribute(e,i),To.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(yo,r.x),a.addScaledVector(bo,r.y),a.addScaledVector(To,r.z),a}static isFrontFacing(e,t,i,s){return hn.subVectors(i,t),Wn.subVectors(e,t),hn.cross(Wn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),hn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return mn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;rs.subVectors(s,i),as.subVectors(r,i),So.subVectors(e,i);const l=rs.dot(So),c=as.dot(So);if(l<=0&&c<=0)return t.copy(i);Mo.subVectors(e,s);const u=rs.dot(Mo),h=as.dot(Mo);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(rs,a);Eo.subVectors(e,r);const p=rs.dot(Eo),g=as.dot(Eo);if(g>=0&&p<=g)return t.copy(r);const S=p*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(as,o);const _=u*g-p*h;if(_<=0&&h-u>=0&&p-g>=0)return Vu.subVectors(r,s),o=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Vu,o);const d=1/(_+S+f);return a=S*d,o=f*d,t.copy(i).addScaledVector(rs,a).addScaledVector(as,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class vr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ur.copy(i.boundingBox)),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),Nr.subVectors(this.max,zs),os.subVectors(e.a,zs),ls.subVectors(e.b,zs),cs.subVectors(e.c,zs),mi.subVectors(ls,os),_i.subVectors(cs,ls),Ii.subVectors(os,cs);let t=[0,-mi.z,mi.y,0,-_i.z,_i.y,0,-Ii.z,Ii.y,mi.z,0,-mi.x,_i.z,0,-_i.x,Ii.z,0,-Ii.x,-mi.y,mi.x,0,-_i.y,_i.x,0,-Ii.y,Ii.x,0];return!Ao(t,os,ls,cs,Nr)||(t=[1,0,0,0,1,0,0,0,1],!Ao(t,os,ls,cs,Nr))?!1:(Fr.crossVectors(mi,_i),t=[Fr.x,Fr.y,Fr.z],Ao(t,os,ls,cs,Nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new V,new V,new V,new V,new V,new V,new V,new V],dn=new V,Ur=new vr,os=new V,ls=new V,cs=new V,mi=new V,_i=new V,Ii=new V,zs=new V,Nr=new V,Fr=new V,Ui=new V;function Ao(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ui.fromArray(n,r);const o=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),u=i.dot(Ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const vt=new V,Or=new Xe;let og=0;class Wt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:og++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tu,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tu&&(e.usage=this.usage),e}}class fd extends Wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hd extends Wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ln extends Wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const lg=new vr,Hs=new V,wo=new V;class Sr{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):lg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const t=Hs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Hs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(wo)),this.expandByPoint(Hs.copy(e.center).sub(wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let cg=0;const sn=new ot,Ro=new At,us=new V,Zt=new vr,Gs=new vr,Tt=new V;class tn extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G_(e)?hd:fd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return Ro.lookAt(e),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ln(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Zt.min,Gs.min),Zt.expandByPoint(Tt),Tt.addVectors(Zt.max,Gs.max),Zt.expandByPoint(Tt)):(Zt.expandByPoint(Gs.min),Zt.expandByPoint(Gs.max))}Zt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Tt.fromBufferAttribute(o,c),l&&(us.fromBufferAttribute(e,c),Tt.add(us)),s=Math.max(s,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new V,l[v]=new V;const c=new V,u=new V,h=new V,f=new Xe,p=new Xe,g=new Xe,S=new V,_=new V;function d(v,b,Y){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,Y),f.fromBufferAttribute(r,v),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,Y),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),_.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),o[v].add(S),o[b].add(S),o[Y].add(S),l[v].add(_),l[b].add(_),l[Y].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let v=0,b=E.length;v<b;++v){const Y=E[v],D=Y.start,I=Y.count;for(let B=D,W=D+I;B<W;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const A=new V,y=new V,C=new V,P=new V;function U(v){C.fromBufferAttribute(s,v),P.copy(C);const b=o[v];A.copy(b),A.sub(C.multiplyScalar(C.dot(b))).normalize(),y.crossVectors(P,b);const D=y.dot(l[v])<0?-1:1;a.setXYZW(v,A.x,A.y,A.z,D)}for(let v=0,b=E.length;v<b;++v){const Y=E[v],D=Y.start,I=Y.count;for(let B=D,W=D+I;B<W;B+=3)U(e.getX(B+0)),U(e.getX(B+1)),U(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,u=new V,h=new V;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),S=e.getX(f+1),_=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,_),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,_),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let S=0,_=l.length;S<_;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Wt(f,u,h)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ug=0;class $i extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=Es,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nl&&(i.blendSrc=this.blendSrc),this.blendDst!==il&&(i.blendDst=this.blendDst),this.blendEquation!==Hi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Yn=new V,Co=new V,Br=new V,gi=new V,Po=new V,Vr=new V,Do=new V;class Mr{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Co.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(Co);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Br),o=gi.dot(this.direction),l=-gi.dot(Br),c=gi.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const S=1/u;h*=S,f*=S,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Co).addScaledVector(Br,f),p}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),s=Yn.dot(Yn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,s,r){Po.subVectors(t,e),Vr.subVectors(i,e),Do.crossVectors(Po,Vr);let a=this.direction.dot(Do),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gi.subVectors(this.origin,e);const l=o*this.direction.dot(Vr.crossVectors(gi,Vr));if(l<0)return null;const c=o*this.direction.dot(Po.cross(gi));if(c<0||l+c>a)return null;const u=-o*gi.dot(Do);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dd extends $i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zu=new ot,Ni=new Mr,zr=new Sr,Hu=new V,Hr=new V,Gr=new V,kr=new V,Lo=new V,Wr=new V,Gu=new V,Xr=new V;class li extends At{constructor(e=new tn,t=new dd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Lo.fromBufferAttribute(h,e),a?Wr.addScaledVector(Lo,u):Wr.addScaledVector(Lo.sub(t),u))}t.add(Wr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(r),Ni.copy(e.ray).recast(e.near),!(zr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(zr,Hu)===null||Ni.origin.distanceToSquared(Hu)>(e.far-e.near)**2))&&(zu.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(zu),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=f.length;g<S;g++){const _=f[g],d=a[_.materialIndex],E=Math.max(_.start,p.start),A=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let y=E,C=A;y<C;y+=3){const P=o.getX(y),U=o.getX(y+1),v=o.getX(y+2);s=qr(this,d,e,i,c,u,h,P,U,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let _=g,d=S;_<d;_+=3){const E=o.getX(_),A=o.getX(_+1),y=o.getX(_+2);s=qr(this,a,e,i,c,u,h,E,A,y),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,S=f.length;g<S;g++){const _=f[g],d=a[_.materialIndex],E=Math.max(_.start,p.start),A=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let y=E,C=A;y<C;y+=3){const P=y,U=y+1,v=y+2;s=qr(this,d,e,i,c,u,h,P,U,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let _=g,d=S;_<d;_+=3){const E=_,A=_+1,y=_+2;s=qr(this,a,e,i,c,u,h,E,A,y),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function fg(n,e,t,i,s,r,a,o){let l;if(e.side===jt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ti,o),l===null)return null;Xr.copy(o),Xr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Xr);return c<t.near||c>t.far?null:{distance:c,point:Xr.clone(),object:n}}function qr(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Hr),n.getVertexPosition(l,Gr),n.getVertexPosition(c,kr);const u=fg(n,e,t,i,Hr,Gr,kr,Gu);if(u){const h=new V;mn.getBarycoord(Gu,Hr,Gr,kr,h),s&&(u.uv=mn.getInterpolatedAttribute(s,o,l,c,h,new Xe)),r&&(u.uv1=mn.getInterpolatedAttribute(r,o,l,c,h,new Xe)),a&&(u.normal=mn.getInterpolatedAttribute(a,o,l,c,h,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new V,materialIndex:0};mn.getNormal(Hr,Gr,kr,f.normal),u.face=f,u.barycoord=h}return u}class hg extends Bt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Ct,u=Ct,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Io=new V,dg=new V,pg=new qe;class Si{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Io.subVectors(i,t).cross(dg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Io),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pg.getNormalMatrix(e),s=this.coplanarPoint(Io).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new Sr,mg=new Xe(.5,.5),Yr=new V;class Ac{constructor(e=new Si,t=new Si,i=new Si,s=new Si,r=new Si,a=new Si){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ln,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],p=r[7],g=r[8],S=r[9],_=r[10],d=r[11],E=r[12],A=r[13],y=r[14],C=r[15];if(s[0].setComponents(c-a,p-u,d-g,C-E).normalize(),s[1].setComponents(c+a,p+u,d+g,C+E).normalize(),s[2].setComponents(c+o,p+h,d+S,C+A).normalize(),s[3].setComponents(c-o,p-h,d-S,C-A).normalize(),i)s[4].setComponents(l,f,_,y).normalize(),s[5].setComponents(c-l,p-f,d-_,C-y).normalize();else if(s[4].setComponents(c-l,p-f,d-_,C-y).normalize(),t===Ln)s[5].setComponents(c+l,p+f,d+_,C+y).normalize();else if(t===dr)s[5].setComponents(l,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){Fi.center.set(0,0,0);const t=mg.distanceTo(e.center);return Fi.radius=.7071067811865476+t,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Yr.x=s.normal.x>0?e.max.x:e.min.x,Yr.y=s.normal.y>0?e.max.y:e.min.y,Yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pd extends $i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wa=new V,Ra=new V,ku=new ot,ks=new Mr,jr=new Sr,Uo=new V,Wu=new V;class _g extends At{constructor(e=new tn,t=new pd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)wa.fromBufferAttribute(t,s-1),Ra.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=wa.distanceTo(Ra);e.setAttribute("lineDistance",new ln(i,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(s),jr.radius+=r,e.ray.intersectsSphere(jr)===!1)return;ku.copy(s).invert(),ks.copy(e.ray).applyMatrix4(ku);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let S=p,_=g-1;S<_;S+=c){const d=u.getX(S),E=u.getX(S+1),A=Kr(this,e,ks,l,d,E,S);A&&t.push(A)}if(this.isLineLoop){const S=u.getX(g-1),_=u.getX(p),d=Kr(this,e,ks,l,S,_,g-1);d&&t.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let S=p,_=g-1;S<_;S+=c){const d=Kr(this,e,ks,l,S,S+1,S);d&&t.push(d)}if(this.isLineLoop){const S=Kr(this,e,ks,l,g-1,p,g-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Kr(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(wa.fromBufferAttribute(o,s),Ra.fromBufferAttribute(o,r),t.distanceSqToSegment(wa,Ra,Uo,Wu)>i)return;Uo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Uo);if(!(c<e.near||c>e.far))return{distance:c,point:Wu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Xu=new V,qu=new V;class gg extends _g{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Xu.fromBufferAttribute(t,s),qu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Xu.distanceTo(qu);e.setAttribute("lineDistance",new ln(i,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xg extends $i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yu=new ot,ql=new Mr,$r=new Sr,Zr=new V;class QM extends At{constructor(e=new tn,t=new xg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,e.ray.intersectsSphere($r)===!1)return;Yu.copy(s).invert(),ql.copy(e.ray).applyMatrix4(Yu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,S=p;g<S;g++){const _=c.getX(g);Zr.fromBufferAttribute(h,_),ju(Zr,_,l,s,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,S=p;g<S;g++)Zr.fromBufferAttribute(h,g),ju(Zr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ju(n,e,t,i,s,r,a){const o=ql.distanceSqToPoint(n);if(o<t){const l=new V;ql.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class md extends Bt{constructor(e=[],t=Yi,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eE extends Bt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pr extends Bt{constructor(e,t,i=Fn,s,r,a,o=Ct,l=Ct,c,u=oi,h=1){if(u!==oi&&u!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class vg extends pr{constructor(e,t=Fn,i=Yi,s,r,a=Ct,o=Ct,l,c=oi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _d extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Er extends tn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(h,2));function g(S,_,d,E,A,y,C,P,U,v,b){const Y=y/U,D=C/v,I=y/2,B=C/2,W=P/2,G=U+1,z=v+1;let O=0,ne=0;const oe=new V;for(let xe=0;xe<z;xe++){const ve=xe*D-B;for(let _e=0;_e<G;_e++){const ze=_e*Y-I;oe[S]=ze*E,oe[_]=ve*A,oe[d]=W,c.push(oe.x,oe.y,oe.z),oe[S]=0,oe[_]=0,oe[d]=P>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(_e/U),h.push(1-xe/v),O+=1}}for(let xe=0;xe<v;xe++)for(let ve=0;ve<U;ve++){const _e=f+ve+G*xe,ze=f+ve+G*(xe+1),nt=f+(ve+1)+G*(xe+1),et=f+(ve+1)+G*xe;l.push(_e,ze,et),l.push(ze,nt,et),ne+=6}o.addGroup(p,ne,b),p+=ne,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ka extends tn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],S=[],_=[];for(let d=0;d<u;d++){const E=d*f-a;for(let A=0;A<c;A++){const y=A*h-r;g.push(y,-E,0),S.push(0,0,1),_.push(A/o),_.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){const A=E+c*d,y=E+c*(d+1),C=E+1+c*(d+1),P=E+1+c*d;p.push(A,y,P),p.push(y,C,P)}this.setIndex(p),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(S,3)),this.setAttribute("uv",new ln(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ps(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function zt(n){const e={};for(let t=0;t<n.length;t++){const i=Ps(n[t]);for(const s in i)e[s]=i[s]}return e}function Sg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Mg={clone:Ps,merge:zt};var Eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends $i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eg,this.fragmentShader=yg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=Sg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class bg extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tE extends $i{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new $e(16777215),this.specular=new $e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ad,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=mc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tg extends $i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ag extends $i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xd extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const No=new ot,Ku=new V,$u=new V;class wg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Qt,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ac,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ku),$u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($u),t.updateMatrixWorld(),No.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(No,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===dr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(No)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Jr=new V,Qr=new Ai,yn=new V;class vd extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jr,Qr,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jr,Qr,yn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Jr,Qr,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jr,Qr,yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xi=new V,Zu=new Xe,Ju=new Xe;class pn extends vd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xl*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Zu,Ju),t.subVectors(Ju,Zu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ha*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class wc extends vd{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Rg extends wg{constructor(){super(new wc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nE extends xd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Rg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class iE extends xd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const fs=-90,hs=1;class Cg extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(fs,hs,e,t);s.layers=this.layers,this.add(s);const r=new pn(fs,hs,e,t);r.layers=this.layers,this.add(r);const a=new pn(fs,hs,e,t);a.layers=this.layers,this.add(a);const o=new pn(fs,hs,e,t);o.layers=this.layers,this.add(o);const l=new pn(fs,hs,e,t);l.layers=this.layers,this.add(l);const c=new pn(fs,hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Pg extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class sE{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Dg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Dg(){this._document.hidden===!1&&this.reset()}const Qu=new ot;class rE{constructor(e,t,i=0,s=1/0){this.ray=new Mr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qu),this}intersectObject(e,t=!0,i=[]){return Yl(e,this,i,t),i.sort(ef),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Yl(e[s],this,i,t);return i.sort(ef),i}}function ef(n,e){return n.distance-e.distance}function Yl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Yl(r[a],e,t,!0)}}class tf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class aE extends gg{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new tn;r.setIndex(new Wt(i,1)),r.setAttribute("position",new ln(s,3)),super(r,new pd({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Lg extends Ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ve("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function nf(n,e,t,i){const s=Ig(i);switch(t){case id:return n*e;case rd:return n*e/s.components*s.byteLength;case vc:return n*e/s.components*s.byteLength;case Rs:return n*e*2/s.components*s.byteLength;case Sc:return n*e*2/s.components*s.byteLength;case sd:return n*e*3/s.components*s.byteLength;case _n:return n*e*4/s.components*s.byteLength;case Mc:return n*e*4/s.components*s.byteLength;case la:case ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ua:case fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pl:case _l:return Math.max(n,16)*Math.max(e,8)/4;case dl:case ml:return Math.max(n,8)*Math.max(e,8)/2;case gl:case xl:case Sl:case Ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vl:case El:case yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Al:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Il:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Bl:case Vl:case zl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Hl:case Gl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case kl:case Wl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ig(n){switch(n){case Qt:case Qh:return{byteLength:1,components:1};case fr:case ed:case ai:return{byteLength:2,components:1};case gc:case xc:return{byteLength:2,components:4};case Fn:case _c:case Dn:return{byteLength:4,components:1};case td:case nd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pc}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sd(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ug(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],S=h[p];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++f,h[f]=S)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const S=h[p];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ng=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fg=`#ifdef USE_ALPHAHASH
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
#endif`,Og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hg=`#ifdef USE_AOMAP
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
#endif`,Gg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kg=`#ifdef USE_BATCHING
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
#endif`,Wg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jg=`#ifdef USE_IRIDESCENCE
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
#endif`,Kg=`#ifdef USE_BUMPMAP
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
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,s0=`#define PI 3.141592653589793
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
} // validated`,r0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,a0=`vec3 transformedNormal = objectNormal;
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
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",h0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E0=`#ifdef USE_GRADIENTMAP
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
}`,y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A0=`uniform bool receiveShadow;
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
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,R0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L0=`PhysicalMaterial material;
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
#endif`,I0=`uniform sampler2D dfgLUT;
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
}`,U0=`
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
#endif`,N0=`#if defined( RE_IndirectDiffuse )
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
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W0=`#if defined( USE_POINTS_UV )
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
#endif`,X0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
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
#endif`,Z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ix=`#ifdef USE_NORMALMAP
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
#endif`,sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ux=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vx=`float getShadowMask() {
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
}`,Sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mx=`#ifdef USE_SKINNING
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
#endif`,Ex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yx=`#ifdef USE_SKINNING
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
#endif`,bx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rx=`#ifdef USE_TRANSMISSION
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
#endif`,Cx=`#ifdef USE_TRANSMISSION
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
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ux=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nx=`uniform sampler2D t2D;
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
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`#include <common>
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
}`,Hx=`#if DEPTH_PACKING == 3200
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
}`,Gx=`#define DISTANCE
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
}`,kx=`#define DISTANCE
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
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`uniform float scale;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,jx=`#include <common>
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
}`,Kx=`uniform vec3 diffuse;
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
}`,$x=`#define LAMBERT
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
}`,Zx=`#define LAMBERT
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
}`,Jx=`#define MATCAP
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
}`,Qx=`#define MATCAP
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
}`,ev=`#define NORMAL
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
}`,tv=`#define NORMAL
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
}`,nv=`#define PHONG
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
}`,iv=`#define PHONG
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
}`,sv=`#define STANDARD
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
}`,rv=`#define STANDARD
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
}`,av=`#define TOON
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
}`,ov=`#define TOON
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
}`,lv=`uniform float size;
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
}`,cv=`uniform vec3 diffuse;
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
}`,uv=`#include <common>
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
}`,fv=`uniform vec3 color;
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
}`,hv=`uniform float rotation;
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
}`,dv=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Ng,alphahash_pars_fragment:Fg,alphamap_fragment:Og,alphamap_pars_fragment:Bg,alphatest_fragment:Vg,alphatest_pars_fragment:zg,aomap_fragment:Hg,aomap_pars_fragment:Gg,batching_pars_vertex:kg,batching_vertex:Wg,begin_vertex:Xg,beginnormal_vertex:qg,bsdfs:Yg,iridescence_fragment:jg,bumpmap_pars_fragment:Kg,clipping_planes_fragment:$g,clipping_planes_pars_fragment:Zg,clipping_planes_pars_vertex:Jg,clipping_planes_vertex:Qg,color_fragment:e0,color_pars_fragment:t0,color_pars_vertex:n0,color_vertex:i0,common:s0,cube_uv_reflection_fragment:r0,defaultnormal_vertex:a0,displacementmap_pars_vertex:o0,displacementmap_vertex:l0,emissivemap_fragment:c0,emissivemap_pars_fragment:u0,colorspace_fragment:f0,colorspace_pars_fragment:h0,envmap_fragment:d0,envmap_common_pars_fragment:p0,envmap_pars_fragment:m0,envmap_pars_vertex:_0,envmap_physical_pars_fragment:w0,envmap_vertex:g0,fog_vertex:x0,fog_pars_vertex:v0,fog_fragment:S0,fog_pars_fragment:M0,gradientmap_pars_fragment:E0,lightmap_pars_fragment:y0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:T0,lights_pars_begin:A0,lights_toon_fragment:R0,lights_toon_pars_fragment:C0,lights_phong_fragment:P0,lights_phong_pars_fragment:D0,lights_physical_fragment:L0,lights_physical_pars_fragment:I0,lights_fragment_begin:U0,lights_fragment_maps:N0,lights_fragment_end:F0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:V0,logdepthbuf_vertex:z0,map_fragment:H0,map_pars_fragment:G0,map_particle_fragment:k0,map_particle_pars_fragment:W0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:q0,morphinstance_vertex:Y0,morphcolor_vertex:j0,morphnormal_vertex:K0,morphtarget_pars_vertex:$0,morphtarget_vertex:Z0,normal_fragment_begin:J0,normal_fragment_maps:Q0,normal_pars_fragment:ex,normal_pars_vertex:tx,normal_vertex:nx,normalmap_pars_fragment:ix,clearcoat_normal_fragment_begin:sx,clearcoat_normal_fragment_maps:rx,clearcoat_pars_fragment:ax,iridescence_pars_fragment:ox,opaque_fragment:lx,packing:cx,premultiplied_alpha_fragment:ux,project_vertex:fx,dithering_fragment:hx,dithering_pars_fragment:dx,roughnessmap_fragment:px,roughnessmap_pars_fragment:mx,shadowmap_pars_fragment:_x,shadowmap_pars_vertex:gx,shadowmap_vertex:xx,shadowmask_pars_fragment:vx,skinbase_vertex:Sx,skinning_pars_vertex:Mx,skinning_vertex:Ex,skinnormal_vertex:yx,specularmap_fragment:bx,specularmap_pars_fragment:Tx,tonemapping_fragment:Ax,tonemapping_pars_fragment:wx,transmission_fragment:Rx,transmission_pars_fragment:Cx,uv_pars_fragment:Px,uv_pars_vertex:Dx,uv_vertex:Lx,worldpos_vertex:Ix,background_vert:Ux,background_frag:Nx,backgroundCube_vert:Fx,backgroundCube_frag:Ox,cube_vert:Bx,cube_frag:Vx,depth_vert:zx,depth_frag:Hx,distance_vert:Gx,distance_frag:kx,equirect_vert:Wx,equirect_frag:Xx,linedashed_vert:qx,linedashed_frag:Yx,meshbasic_vert:jx,meshbasic_frag:Kx,meshlambert_vert:$x,meshlambert_frag:Zx,meshmatcap_vert:Jx,meshmatcap_frag:Qx,meshnormal_vert:ev,meshnormal_frag:tv,meshphong_vert:nv,meshphong_frag:iv,meshphysical_vert:sv,meshphysical_frag:rv,meshtoon_vert:av,meshtoon_frag:ov,points_vert:lv,points_frag:cv,shadow_vert:uv,shadow_frag:fv,sprite_vert:hv,sprite_frag:dv},Me={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Rn={basic:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:zt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:zt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:zt([Me.points,Me.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:zt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:zt([Me.common,Me.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:zt([Me.sprite,Me.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:zt([Me.common,Me.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:zt([Me.lights,Me.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Rn.physical={uniforms:zt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const ea={r:0,b:0,g:0},Oi=new On,pv=new ot;function mv(n,e,t,i,s,r){const a=new $e(0);let o=s===!0?0:1,l,c,u=null,h=0,f=null;function p(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){const y=E.backgroundBlurriness>0;A=e.get(A,y)}return A}function g(E){let A=!1;const y=p(E);y===null?_(a,o):y&&y.isColor&&(_(y,1),A=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(E,A){const y=p(A);y&&(y.isCubeTexture||y.mapping===Ga)?(c===void 0&&(c=new li(new Er(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Ps(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Oi.copy(A.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(pv.makeRotationFromEuler(Oi)),c.material.toneMapped=Je.getTransfer(y.colorSpace)!==at,(u!==y||h!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new li(new ka(2,2),new Bn({name:"BackgroundMaterial",uniforms:Ps(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Je.getTransfer(y.colorSpace)!==at,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function _(E,A){E.getRGB(ea,gd(n)),t.buffers.color.setClear(ea.r,ea.g,ea.b,A,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,A=1){a.set(E),o=A,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,_(a,o)},render:g,addToRenderList:S,dispose:d}}function _v(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(D,I,B,W,G){let z=!1;const O=h(D,W,B,I);r!==O&&(r=O,c(r.object)),z=p(D,W,B,G),z&&g(D,W,B,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,y(D,I,B,W),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function h(D,I,B,W){const G=W.wireframe===!0;let z=i[I.id];z===void 0&&(z={},i[I.id]=z);const O=D.isInstancedMesh===!0?D.id:0;let ne=z[O];ne===void 0&&(ne={},z[O]=ne);let oe=ne[B.id];oe===void 0&&(oe={},ne[B.id]=oe);let xe=oe[G];return xe===void 0&&(xe=f(l()),oe[G]=xe),xe}function f(D){const I=[],B=[],W=[];for(let G=0;G<t;G++)I[G]=0,B[G]=0,W[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:W,object:D,attributes:{},index:null}}function p(D,I,B,W){const G=r.attributes,z=I.attributes;let O=0;const ne=B.getAttributes();for(const oe in ne)if(ne[oe].location>=0){const ve=G[oe];let _e=z[oe];if(_e===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(_e=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(_e=D.instanceColor)),ve===void 0||ve.attribute!==_e||_e&&ve.data!==_e.data)return!0;O++}return r.attributesNum!==O||r.index!==W}function g(D,I,B,W){const G={},z=I.attributes;let O=0;const ne=B.getAttributes();for(const oe in ne)if(ne[oe].location>=0){let ve=z[oe];ve===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(ve=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(ve=D.instanceColor));const _e={};_e.attribute=ve,ve&&ve.data&&(_e.data=ve.data),G[oe]=_e,O++}r.attributes=G,r.attributesNum=O,r.index=W}function S(){const D=r.newAttributes;for(let I=0,B=D.length;I<B;I++)D[I]=0}function _(D){d(D,0)}function d(D,I){const B=r.newAttributes,W=r.enabledAttributes,G=r.attributeDivisors;B[D]=1,W[D]===0&&(n.enableVertexAttribArray(D),W[D]=1),G[D]!==I&&(n.vertexAttribDivisor(D,I),G[D]=I)}function E(){const D=r.newAttributes,I=r.enabledAttributes;for(let B=0,W=I.length;B<W;B++)I[B]!==D[B]&&(n.disableVertexAttribArray(B),I[B]=0)}function A(D,I,B,W,G,z,O){O===!0?n.vertexAttribIPointer(D,I,B,G,z):n.vertexAttribPointer(D,I,B,W,G,z)}function y(D,I,B,W){S();const G=W.attributes,z=B.getAttributes(),O=I.defaultAttributeValues;for(const ne in z){const oe=z[ne];if(oe.location>=0){let xe=G[ne];if(xe===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor)),xe!==void 0){const ve=xe.normalized,_e=xe.itemSize,ze=e.get(xe);if(ze===void 0)continue;const nt=ze.buffer,et=ze.type,re=ze.bytesPerElement,fe=et===n.INT||et===n.UNSIGNED_INT||xe.gpuType===_c;if(xe.isInterleavedBufferAttribute){const de=xe.data,Be=de.stride,Ie=xe.offset;if(de.isInstancedInterleavedBuffer){for(let Oe=0;Oe<oe.locationSize;Oe++)d(oe.location+Oe,de.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Oe=0;Oe<oe.locationSize;Oe++)_(oe.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Oe=0;Oe<oe.locationSize;Oe++)A(oe.location+Oe,_e/oe.locationSize,et,ve,Be*re,(Ie+_e/oe.locationSize*Oe)*re,fe)}else{if(xe.isInstancedBufferAttribute){for(let de=0;de<oe.locationSize;de++)d(oe.location+de,xe.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let de=0;de<oe.locationSize;de++)_(oe.location+de);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let de=0;de<oe.locationSize;de++)A(oe.location+de,_e/oe.locationSize,et,ve,_e*re,_e/oe.locationSize*de*re,fe)}}else if(O!==void 0){const ve=O[ne];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(oe.location,ve);break;case 3:n.vertexAttrib3fv(oe.location,ve);break;case 4:n.vertexAttrib4fv(oe.location,ve);break;default:n.vertexAttrib1fv(oe.location,ve)}}}}E()}function C(){b();for(const D in i){const I=i[D];for(const B in I){const W=I[B];for(const G in W){const z=W[G];for(const O in z)u(z[O].object),delete z[O];delete W[G]}}delete i[D]}}function P(D){if(i[D.id]===void 0)return;const I=i[D.id];for(const B in I){const W=I[B];for(const G in W){const z=W[G];for(const O in z)u(z[O].object),delete z[O];delete W[G]}}delete i[D.id]}function U(D){for(const I in i){const B=i[I];for(const W in B){const G=B[W];if(G[D.id]===void 0)continue;const z=G[D.id];for(const O in z)u(z[O].object),delete z[O];delete G[D.id]}}}function v(D){for(const I in i){const B=i[I],W=D.isInstancedMesh===!0?D.id:0,G=B[W];if(G!==void 0){for(const z in G){const O=G[z];for(const ne in O)u(O[ne].object),delete O[ne];delete G[z]}delete B[W],Object.keys(B).length===0&&delete i[I]}}}function b(){Y(),a=!0,r!==s&&(r=s,c(r.object))}function Y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:Y,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfObject:v,releaseStatesOfProgram:U,initAttributes:S,enableAttribute:_,disableUnusedAttributes:E}}function gv(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let S=0;S<h;S++)g+=u[S]*f[S];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function xv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(U){return!(U!==_n&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const v=U===ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Qt&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Dn&&!v)}function l(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),P=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:y,maxSamples:C,samples:P}}function vv(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Si,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,S=h.clipIntersection,_=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!_)r?u(null):c();else{const E=r?0:i,A=E*4;let y=d.clippingState||null;l.value=y,y=u(g,f,A,p);for(let C=0;C!==A;++C)y[C]=t[C];d.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){const S=h!==null?h.length:0;let _=null;if(S!==0){if(_=l.value,g!==!0||_===null){const d=p+S*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(_===null||_.length<d)&&(_=new Float32Array(d));for(let A=0,y=p;A!==S;++A,y+=4)a.copy(h[A]).applyMatrix4(E,o),a.normal.toArray(_,y),_[y+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,_}}const yi=4,sf=[.125,.215,.35,.446,.526,.582],Gi=20,Sv=256,Ws=new wc,rf=new $e;let Fo=null,Oo=0,Bo=0,Vo=!1;const Mv=new V;class af{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Mv}=r;Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo,Oo,Bo),this._renderer.xr.enabled=Vo,e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:ai,format:_n,colorSpace:Cs,depthBuffer:!1},s=of(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=of(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ev(r)),this._blurMaterial=bv(r,e,t),this._ggxMaterial=yv(r,e,t)}return s}_compileMaterial(e){const t=new li(new tn,e);this._renderer.compile(t,Ws)}_sceneToCubeUV(e,t,i,s,r){const l=new pn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(rf),h.toneMapping=Un,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new li(new Er,new dd({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,_=S.material;let d=!1;const E=e.background;E?E.isColor&&(_.color.copy(E),e.background=null,d=!0):(_.color.copy(rf),d=!0);for(let A=0;A<6;A++){const y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const C=this._cubeSize;ds(s,y*C,A>2?C:0,C,C),h.setRenderTarget(s),d&&h.render(S,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Yi||e.mapping===ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lf());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ds(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ws)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:g}=this,S=this._sizeLods[i],_=3*S*(i>g-yi?i-g+yi:0),d=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,ds(r,_,d,3*S,2*S),s.setRenderTarget(r),s.render(o,Ws),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ds(e,_,d,3*S,2*S),s.setRenderTarget(e),s.render(o,Ws)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Gi-1),S=r/g,_=isFinite(r)?1+Math.floor(u*S):Gi;_>Gi&&Ve(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Gi}`);const d=[];let E=0;for(let U=0;U<Gi;++U){const v=U/S,b=Math.exp(-v*v/2);d.push(b),U===0?E+=b:U<_&&(E+=2*b)}for(let U=0;U<d.length;U++)d[U]=d[U]/E;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:A}=this;f.dTheta.value=g,f.mipInt.value=A-i;const y=this._sizeLods[s],C=3*y*(s>A-yi?s-A+yi:0),P=4*(this._cubeSize-y);ds(t,C,P,3*y,2*y),l.setRenderTarget(t),l.render(h,Ws)}}function Ev(n){const e=[],t=[],i=[];let s=n;const r=n-yi+1+sf.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-yi?l=sf[a-n+yi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,S=3,_=2,d=1,E=new Float32Array(S*g*p),A=new Float32Array(_*g*p),y=new Float32Array(d*g*p);for(let P=0;P<p;P++){const U=P%3*2/3-1,v=P>2?0:-1,b=[U,v,0,U+2/3,v,0,U+2/3,v+1,0,U,v,0,U+2/3,v+1,0,U,v+1,0];E.set(b,S*g*P),A.set(f,_*g*P);const Y=[P,P,P,P,P,P];y.set(Y,d*g*P)}const C=new tn;C.setAttribute("position",new Wt(E,S)),C.setAttribute("uv",new Wt(A,_)),C.setAttribute("faceIndex",new Wt(y,d)),i.push(new li(C,null)),s>yi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function of(n,e,t){const i=new Nn(n,e,t);return i.texture.mapping=Ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ds(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function yv(n,e,t){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function bv(n,e,t){const i=new Float32Array(Gi),s=new V(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function lf(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wa(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function cf(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Wa(){return`

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
	`}class Md extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new md(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Er(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:ti});r.uniforms.tEquirect.value=t;const a=new li(s,r),o=t.minFilter;return t.minFilter===ki&&(t.minFilter=Ft),new Cg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function Tv(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){const p=f.mapping;if(p===oo||p===lo)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const S=new Md(g.height);return S.fromEquirectangularTexture(n,f),e.set(f,S),f.addEventListener("dispose",c),o(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,g=p===oo||p===lo,S=p===Yi||p===ws;if(g||S){let _=t.get(f);const d=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new af(n)),_=g?i.fromEquirectangular(f,_):i.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{const E=f.image;return g&&E&&E.height>0||S&&E&&l(E)?(i===null&&(i=new af(n)),_=g?i.fromEquirectangular(f):i.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",u),_.texture):null}}}return f}function o(f,p){return p===oo?f.mapping=Yi:p===lo&&(f.mapping=ws),f}function l(f){let p=0;const g=6;for(let S=0;S<g;S++)f[S]!==void 0&&p++;return p===g}function c(f){const p=f.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Av(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Aa("WebGLRenderer: "+i+" extension not supported."),s}}}function wv(n,e,t,i){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let S=0;if(g===void 0)return;if(p!==null){const E=p.array;S=p.version;for(let A=0,y=E.length;A<y;A+=3){const C=E[A+0],P=E[A+1],U=E[A+2];f.push(C,P,P,U,U,C)}}else{const E=g.array;S=g.version;for(let A=0,y=E.length/3-1;A<y;A+=3){const C=A+0,P=A+1,U=A+2;f.push(C,P,P,U,U,C)}}const _=new(g.count>=65535?hd:fd)(f,1);_.version=S;const d=r.get(h);d&&e.remove(d),r.set(h,_)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Rv(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*a),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*a,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let _=0;for(let d=0;d<g;d++)_+=p[d];t.update(_,i,1)}function h(f,p,g,S){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],S[d]);else{_.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,S,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*S[E];t.update(d,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Cv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Pv(n,e,t){const i=new WeakMap,s=new mt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let b=function(){U.dispose(),i.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let A=0;p===!0&&(A=1),g===!0&&(A=2),S===!0&&(A=3);let y=o.attributes.position.count*A,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const P=new Float32Array(y*C*4*h),U=new ld(P,y,C,h);U.type=Dn,U.needsUpdate=!0;const v=A*4;for(let Y=0;Y<h;Y++){const D=_[Y],I=d[Y],B=E[Y],W=y*C*4*Y;for(let G=0;G<D.count;G++){const z=G*v;p===!0&&(s.fromBufferAttribute(D,G),P[W+z+0]=s.x,P[W+z+1]=s.y,P[W+z+2]=s.z,P[W+z+3]=0),g===!0&&(s.fromBufferAttribute(I,G),P[W+z+4]=s.x,P[W+z+5]=s.y,P[W+z+6]=s.z,P[W+z+7]=0),S===!0&&(s.fromBufferAttribute(B,G),P[W+z+8]=s.x,P[W+z+9]=s.y,P[W+z+10]=s.z,P[W+z+11]=B.itemSize===4?s.w:1)}}f={count:h,texture:U,size:new Xe(y,C)},i.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Dv(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Lv={[Xh]:"LINEAR_TONE_MAPPING",[qh]:"REINHARD_TONE_MAPPING",[Yh]:"CINEON_TONE_MAPPING",[jh]:"ACES_FILMIC_TONE_MAPPING",[$h]:"AGX_TONE_MAPPING",[Zh]:"NEUTRAL_TONE_MAPPING",[Kh]:"CUSTOM_TONE_MAPPING"};function Iv(n,e,t,i,s){const r=new Nn(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),a=new Nn(e,t,{type:ai,depthBuffer:!1,stencilBuffer:!1}),o=new tn;o.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ln([0,2,0,0,2,0],2));const l=new bg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new li(o,l),u=new wc(-1,1,1,-1,0,1);let h=null,f=null,p=!1,g,S=null,_=[],d=!1;this.setSize=function(E,A){r.setSize(E,A),a.setSize(E,A);for(let y=0;y<_.length;y++){const C=_[y];C.setSize&&C.setSize(E,A)}},this.setEffects=function(E){_=E,d=_.length>0&&_[0].isRenderPass===!0;const A=r.width,y=r.height;for(let C=0;C<_.length;C++){const P=_[C];P.setSize&&P.setSize(A,y)}},this.begin=function(E,A){if(p||E.toneMapping===Un&&_.length===0)return!1;if(S=A,A!==null){const y=A.width,C=A.height;(r.width!==y||r.height!==C)&&this.setSize(y,C)}return d===!1&&E.setRenderTarget(r),g=E.toneMapping,E.toneMapping=Un,!0},this.hasRenderPass=function(){return d},this.end=function(E,A){E.toneMapping=g,p=!0;let y=r,C=a;for(let P=0;P<_.length;P++){const U=_[P];if(U.enabled!==!1&&(U.render(E,C,y,A),U.needsSwap!==!1)){const v=y;y=C,C=v}}if(h!==E.outputColorSpace||f!==E.toneMapping){h=E.outputColorSpace,f=E.toneMapping,l.defines={},Je.getTransfer(h)===at&&(l.defines.SRGB_TRANSFER="");const P=Lv[f];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,E.setRenderTarget(S),E.render(c,u),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Ed=new Bt,jl=new pr(1,1),yd=new ld,bd=new Q_,Td=new md,uf=[],ff=[],hf=new Float32Array(16),df=new Float32Array(9),pf=new Float32Array(4);function Is(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=uf[s];if(r===void 0&&(r=new Float32Array(s),uf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xa(n,e){let t=ff[e];t===void 0&&(t=new Int32Array(e),ff[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Uv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function Fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function Ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function Bv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;pf.set(i),n.uniformMatrix2fv(this.addr,!1,pf),yt(t,i)}}function Vv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;df.set(i),n.uniformMatrix3fv(this.addr,!1,df),yt(t,i)}}function zv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;hf.set(i),n.uniformMatrix4fv(this.addr,!1,hf),yt(t,i)}}function Hv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Gv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function Wv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function Xv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function Yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function Kv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(jl.compareFunction=t.isReversedDepthBuffer()?yc:Ec,r=jl):r=Ed,t.setTexture2D(e||r,s)}function $v(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||bd,s)}function Zv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Td,s)}function Jv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||yd,s)}function Qv(n){switch(n){case 5126:return Uv;case 35664:return Nv;case 35665:return Fv;case 35666:return Ov;case 35674:return Bv;case 35675:return Vv;case 35676:return zv;case 5124:case 35670:return Hv;case 35667:case 35671:return Gv;case 35668:case 35672:return kv;case 35669:case 35673:return Wv;case 5125:return Xv;case 36294:return qv;case 36295:return Yv;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return Zv;case 36289:case 36303:case 36311:case 36292:return Jv}}function eS(n,e){n.uniform1fv(this.addr,e)}function tS(n,e){const t=Is(e,this.size,2);n.uniform2fv(this.addr,t)}function nS(n,e){const t=Is(e,this.size,3);n.uniform3fv(this.addr,t)}function iS(n,e){const t=Is(e,this.size,4);n.uniform4fv(this.addr,t)}function sS(n,e){const t=Is(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function rS(n,e){const t=Is(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function aS(n,e){const t=Is(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function oS(n,e){n.uniform1iv(this.addr,e)}function lS(n,e){n.uniform2iv(this.addr,e)}function cS(n,e){n.uniform3iv(this.addr,e)}function uS(n,e){n.uniform4iv(this.addr,e)}function fS(n,e){n.uniform1uiv(this.addr,e)}function hS(n,e){n.uniform2uiv(this.addr,e)}function dS(n,e){n.uniform3uiv(this.addr,e)}function pS(n,e){n.uniform4uiv(this.addr,e)}function mS(n,e,t){const i=this.cache,s=e.length,r=Xa(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=jl:a=Ed;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function _S(n,e,t){const i=this.cache,s=e.length,r=Xa(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bd,r[a])}function gS(n,e,t){const i=this.cache,s=e.length,r=Xa(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Td,r[a])}function xS(n,e,t){const i=this.cache,s=e.length,r=Xa(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||yd,r[a])}function vS(n){switch(n){case 5126:return eS;case 35664:return tS;case 35665:return nS;case 35666:return iS;case 35674:return sS;case 35675:return rS;case 35676:return aS;case 5124:case 35670:return oS;case 35667:case 35671:return lS;case 35668:case 35672:return cS;case 35669:case 35673:return uS;case 5125:return fS;case 36294:return hS;case 36295:return dS;case 36296:return pS;case 35678:case 36198:case 36298:case 36306:case 35682:return mS;case 35679:case 36299:case 36307:return _S;case 35680:case 36300:case 36308:case 36293:return gS;case 36289:case 36303:case 36311:case 36292:return xS}}class SS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Qv(t.type)}}class MS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vS(t.type)}}class ES{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const zo=/(\w+)(\])?(\[|\.)?/g;function mf(n,e){n.seq.push(e),n.map[e.id]=e}function yS(n,e,t){const i=n.name,s=i.length;for(zo.lastIndex=0;;){const r=zo.exec(i),a=zo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){mf(t,c===void 0?new SS(o,n,e):new MS(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new ES(o),mf(t,h)),t=h}}}class da{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);yS(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function _f(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const bS=37297;let TS=0;function AS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const gf=new qe;function wS(n){Je._getMatrix(gf,Je.workingColorSpace,n);const e=`mat3( ${gf.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case ba:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function xf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+AS(n.getShaderSource(e),o)}else return r}function RS(n,e){const t=wS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const CS={[Xh]:"Linear",[qh]:"Reinhard",[Yh]:"Cineon",[jh]:"ACESFilmic",[$h]:"AgX",[Zh]:"Neutral",[Kh]:"Custom"};function PS(n,e){const t=CS[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ta=new V;function DS(){Je.getLuminanceCoefficients(ta);const n=ta.x.toFixed(4),e=ta.y.toFixed(4),t=ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function IS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function US(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ks(n){return n!==""}function vf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(n){return n.replace(NS,OS)}const FS=new Map;function OS(n,e){let t=Ye[e];if(t===void 0){const i=FS.get(e);if(i!==void 0)t=Ye[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kl(t)}const BS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mf(n){return n.replace(BS,VS)}function VS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ef(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const zS={[oa]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function HS(n){return zS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const GS={[Yi]:"ENVMAP_TYPE_CUBE",[ws]:"ENVMAP_TYPE_CUBE",[Ga]:"ENVMAP_TYPE_CUBE_UV"};function kS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":GS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const WS={[ws]:"ENVMAP_MODE_REFRACTION"};function XS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":WS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qS={[mc]:"ENVMAP_BLENDING_MULTIPLY",[D_]:"ENVMAP_BLENDING_MIX",[L_]:"ENVMAP_BLENDING_ADD"};function YS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":qS[n.combine]||"ENVMAP_BLENDING_NONE"}function jS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function KS(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=HS(t),c=kS(t),u=XS(t),h=YS(t),f=jS(t),p=LS(t),g=IS(r),S=s.createProgram();let _,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),_.length>0&&(_+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ks).join(`
`),d.length>0&&(d+=`
`)):(_=[Ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),d=[Ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Un?PS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,RS("linearToOutputTexel",t.outputColorSpace),DS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),a=Kl(a),a=vf(a,t),a=Sf(a,t),o=Kl(o),o=vf(o,t),o=Sf(o,t),a=Mf(a),o=Mf(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",t.glslVersion===Au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=E+_+a,y=E+d+o,C=_f(s,s.VERTEX_SHADER,A),P=_f(s,s.FRAGMENT_SHADER,y);s.attachShader(S,C),s.attachShader(S,P),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function U(D){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(S)||"",B=s.getShaderInfoLog(C)||"",W=s.getShaderInfoLog(P)||"",G=I.trim(),z=B.trim(),O=W.trim();let ne=!0,oe=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,C,P);else{const xe=xf(s,C,"vertex"),ve=xf(s,P,"fragment");Ze("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+xe+`
`+ve)}else G!==""?Ve("WebGLProgram: Program Info Log:",G):(z===""||O==="")&&(oe=!1);oe&&(D.diagnostics={runnable:ne,programLog:G,vertexShader:{log:z,prefix:_},fragmentShader:{log:O,prefix:d}})}s.deleteShader(C),s.deleteShader(P),v=new da(s,S),b=US(s,S)}let v;this.getUniforms=function(){return v===void 0&&U(this),v};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=s.getProgramParameter(S,bS)),Y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=TS++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=P,this}let $S=0;class ZS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new JS(e),t.set(e,i)),i}}class JS{constructor(e){this.id=$S++,this.code=e,this.usedTimes=0}}function QS(n,e,t,i,s,r){const a=new Tc,o=new ZS,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function S(v,b,Y,D,I){const B=D.fog,W=I.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=e.get(v.envMap||G,z),ne=O&&O.mapping===Ga?O.image.height:null,oe=p[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&Ve("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const xe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ve=xe!==void 0?xe.length:0;let _e=0;W.morphAttributes.position!==void 0&&(_e=1),W.morphAttributes.normal!==void 0&&(_e=2),W.morphAttributes.color!==void 0&&(_e=3);let ze,nt,et,re;if(oe){const rt=Rn[oe];ze=rt.vertexShader,nt=rt.fragmentShader}else ze=v.vertexShader,nt=v.fragmentShader,o.update(v),et=o.getVertexShaderID(v),re=o.getFragmentShaderID(v);const fe=n.getRenderTarget(),de=n.state.buffers.depth.getReversed(),Be=I.isInstancedMesh===!0,Ie=I.isBatchedMesh===!0,Oe=!!v.map,w=!!v.matcap,L=!!O,H=!!v.aoMap,ie=!!v.lightMap,$=!!v.bumpMap,te=!!v.normalMap,T=!!v.displacementMap,ae=!!v.emissiveMap,Q=!!v.metalnessMap,K=!!v.roughnessMap,ee=v.anisotropy>0,x=v.clearcoat>0,m=v.dispersion>0,R=v.iridescence>0,k=v.sheen>0,J=v.transmission>0,q=ee&&!!v.anisotropyMap,me=x&&!!v.clearcoatMap,le=x&&!!v.clearcoatNormalMap,we=x&&!!v.clearcoatRoughnessMap,De=R&&!!v.iridescenceMap,ce=R&&!!v.iridescenceThicknessMap,he=k&&!!v.sheenColorMap,Se=k&&!!v.sheenRoughnessMap,be=!!v.specularMap,Te=!!v.specularColorMap,ke=!!v.specularIntensityMap,N=J&&!!v.transmissionMap,ge=J&&!!v.thicknessMap,pe=!!v.gradientMap,Re=!!v.alphaMap,ue=v.alphaTest>0,se=!!v.alphaHash,Ce=!!v.extensions;let He=Un;v.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(He=n.toneMapping);const dt={shaderID:oe,shaderType:v.type,shaderName:v.name,vertexShader:ze,fragmentShader:nt,defines:v.defines,customVertexShaderID:et,customFragmentShaderID:re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ie,batchingColor:Ie&&I._colorsTexture!==null,instancing:Be,instancingColor:Be&&I.instanceColor!==null,instancingMorph:Be&&I.morphTexture!==null,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Cs,alphaToCoverage:!!v.alphaToCoverage,map:Oe,matcap:w,envMap:L,envMapMode:L&&O.mapping,envMapCubeUVHeight:ne,aoMap:H,lightMap:ie,bumpMap:$,normalMap:te,displacementMap:T,emissiveMap:ae,normalMapObjectSpace:te&&v.normalMapType===N_,normalMapTangentSpace:te&&v.normalMapType===ad,metalnessMap:Q,roughnessMap:K,anisotropy:ee,anisotropyMap:q,clearcoat:x,clearcoatMap:me,clearcoatNormalMap:le,clearcoatRoughnessMap:we,dispersion:m,iridescence:R,iridescenceMap:De,iridescenceThicknessMap:ce,sheen:k,sheenColorMap:he,sheenRoughnessMap:Se,specularMap:be,specularColorMap:Te,specularIntensityMap:ke,transmission:J,transmissionMap:N,thicknessMap:ge,gradientMap:pe,opaque:v.transparent===!1&&v.blending===Es&&v.alphaToCoverage===!1,alphaMap:Re,alphaTest:ue,alphaHash:se,combine:v.combine,mapUv:Oe&&g(v.map.channel),aoMapUv:H&&g(v.aoMap.channel),lightMapUv:ie&&g(v.lightMap.channel),bumpMapUv:$&&g(v.bumpMap.channel),normalMapUv:te&&g(v.normalMap.channel),displacementMapUv:T&&g(v.displacementMap.channel),emissiveMapUv:ae&&g(v.emissiveMap.channel),metalnessMapUv:Q&&g(v.metalnessMap.channel),roughnessMapUv:K&&g(v.roughnessMap.channel),anisotropyMapUv:q&&g(v.anisotropyMap.channel),clearcoatMapUv:me&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:he&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(v.sheenRoughnessMap.channel),specularMapUv:be&&g(v.specularMap.channel),specularColorMapUv:Te&&g(v.specularColorMap.channel),specularIntensityMapUv:ke&&g(v.specularIntensityMap.channel),transmissionMapUv:N&&g(v.transmissionMap.channel),thicknessMapUv:ge&&g(v.thicknessMap.channel),alphaMapUv:Re&&g(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(te||ee),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!W.attributes.uv&&(Oe||Re),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||W.attributes.normal===void 0&&te===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:de,skinning:I.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:_e,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:Oe&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===at,decodeVideoTextureEmissive:ae&&v.emissiveMap.isVideoTexture===!0&&Je.getTransfer(v.emissiveMap.colorSpace)===at,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Jn,flipSided:v.side===jt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ce&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&v.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function _(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const Y in v.defines)b.push(Y),b.push(v.defines[Y]);return v.isRawShaderMaterial===!1&&(d(b,v),E(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function d(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function E(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),v.push(a.mask)}function A(v){const b=p[v.type];let Y;if(b){const D=Rn[b];Y=Mg.clone(D.uniforms)}else Y=v.uniforms;return Y}function y(v,b){let Y=u.get(b);return Y!==void 0?++Y.usedTimes:(Y=new KS(n,b,v,s),c.push(Y),u.set(b,Y)),Y}function C(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function P(v){o.remove(v)}function U(){o.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:A,acquireProgram:y,releaseProgram:C,releaseShaderCache:P,programs:c,dispose:U}}function eM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function tM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function yf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,g,S,_,d){let E=n[e];return E===void 0?(E={id:f.id,object:f,geometry:p,material:g,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:_,group:d},n[e]=E):(E.id=f.id,E.object=f,E.geometry=p,E.material=g,E.materialVariant=a(f),E.groupOrder=S,E.renderOrder=f.renderOrder,E.z=_,E.group=d),e++,E}function l(f,p,g,S,_,d){const E=o(f,p,g,S,_,d);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):t.push(E)}function c(f,p,g,S,_,d){const E=o(f,p,g,S,_,d);g.transmission>0?i.unshift(E):g.transparent===!0?s.unshift(E):t.unshift(E)}function u(f,p){t.length>1&&t.sort(f||tM),i.length>1&&i.sort(p||yf),s.length>1&&s.sort(p||yf)}function h(){for(let f=e,p=n.length;f<p;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function nM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new bf,n.set(i,[a])):s>=r.length?(a=new bf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function iM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new $e};break;case"SpotLight":t={position:new V,direction:new V,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function sM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rM=0;function aM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function oM(n){const e=new iM,t=sM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const s=new V,r=new ot,a=new ot;function o(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,S=0,_=0,d=0,E=0,A=0,y=0,C=0,P=0,U=0;c.sort(aM);for(let b=0,Y=c.length;b<Y;b++){const D=c[b],I=D.color,B=D.intensity,W=D.distance;let G=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Rs?G=D.shadow.map.texture:G=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=I.r*B,h+=I.g*B,f+=I.b*B;else if(D.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(D.sh.coefficients[z],B);U++}else if(D.isDirectionalLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const O=D.shadow,ne=t.get(D);ne.shadowIntensity=O.intensity,ne.shadowBias=O.bias,ne.shadowNormalBias=O.normalBias,ne.shadowRadius=O.radius,ne.shadowMapSize=O.mapSize,i.directionalShadow[p]=ne,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=D.shadow.matrix,E++}i.directional[p]=z,p++}else if(D.isSpotLight){const z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(I).multiplyScalar(B),z.distance=W,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,i.spot[S]=z;const O=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,O.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[S]=O.matrix,D.castShadow){const ne=t.get(D);ne.shadowIntensity=O.intensity,ne.shadowBias=O.bias,ne.shadowNormalBias=O.normalBias,ne.shadowRadius=O.radius,ne.shadowMapSize=O.mapSize,i.spotShadow[S]=ne,i.spotShadowMap[S]=G,y++}S++}else if(D.isRectAreaLight){const z=e.get(D);z.color.copy(I).multiplyScalar(B),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),i.rectArea[_]=z,_++}else if(D.isPointLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){const O=D.shadow,ne=t.get(D);ne.shadowIntensity=O.intensity,ne.shadowBias=O.bias,ne.shadowNormalBias=O.normalBias,ne.shadowRadius=O.radius,ne.shadowMapSize=O.mapSize,ne.shadowCameraNear=O.camera.near,ne.shadowCameraFar=O.camera.far,i.pointShadow[g]=ne,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=D.shadow.matrix,A++}i.point[g]=z,g++}else if(D.isHemisphereLight){const z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(B),z.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[d]=z,d++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const v=i.hash;(v.directionalLength!==p||v.pointLength!==g||v.spotLength!==S||v.rectAreaLength!==_||v.hemiLength!==d||v.numDirectionalShadows!==E||v.numPointShadows!==A||v.numSpotShadows!==y||v.numSpotMaps!==C||v.numLightProbes!==U)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=_,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=y+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=U,v.directionalLength=p,v.pointLength=g,v.spotLength=S,v.rectAreaLength=_,v.hemiLength=d,v.numDirectionalShadows=E,v.numPointShadows=A,v.numSpotShadows=y,v.numSpotMaps=C,v.numLightProbes=U,i.version=rM++)}function l(c,u){let h=0,f=0,p=0,g=0,S=0;const _=u.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const A=c[d];if(A.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),h++}else if(A.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),p++}else if(A.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(_),a.identity(),r.copy(A.matrixWorld),r.premultiply(_),a.extractRotation(r),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(A.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(_),f++}else if(A.isHemisphereLight){const y=i.hemi[S];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(_),S++}}}return{setup:o,setupView:l,state:i}}function Tf(n){const e=new oM(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function lM(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Tf(n),e.set(s,[o])):r>=a.length?(o=new Tf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const cM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uM=`uniform sampler2D shadow_pass;
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
}`,fM=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],hM=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Af=new ot,Xs=new V,Ho=new V;function dM(n,e,t){let i=new Ac;const s=new Xe,r=new Xe,a=new mt,o=new Tg,l=new Ag,c={},u=t.maxTextureSize,h={[Ti]:jt,[jt]:Ti,[Jn]:Jn},f=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:cM,fragmentShader:uM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new tn;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new li(g,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let d=this.type;this.render=function(P,U,v){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;this.type===h_&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=oa);const b=n.getRenderTarget(),Y=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),I=n.state;I.setBlending(ti),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const B=d!==this.type;B&&U.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(G=>G.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,G=P.length;W<G;W++){const z=P[W],O=z.shadow;if(O===void 0){Ve("WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const ne=O.getFrameExtents();s.multiply(ne),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,O.mapSize.y=r.y));const oe=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=oe,O.map===null||B===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===js){if(z.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Nn(s.x,s.y,{format:Rs,type:ai,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),O.map.texture.name=z.name+".shadowMap",O.map.depthTexture=new pr(s.x,s.y,Dn),O.map.depthTexture.name=z.name+".shadowMapDepth",O.map.depthTexture.format=oi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ct,O.map.depthTexture.magFilter=Ct}else z.isPointLight?(O.map=new Md(s.x),O.map.depthTexture=new vg(s.x,Fn)):(O.map=new Nn(s.x,s.y),O.map.depthTexture=new pr(s.x,s.y,Fn)),O.map.depthTexture.name=z.name+".shadowMap",O.map.depthTexture.format=oi,this.type===oa?(O.map.depthTexture.compareFunction=oe?yc:Ec,O.map.depthTexture.minFilter=Ft,O.map.depthTexture.magFilter=Ft):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ct,O.map.depthTexture.magFilter=Ct);O.camera.updateProjectionMatrix()}const xe=O.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<xe;ve++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,ve),n.clear();else{ve===0&&(n.setRenderTarget(O.map),n.clear());const _e=O.getViewport(ve);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),I.viewport(a)}if(z.isPointLight){const _e=O.camera,ze=O.matrix,nt=z.distance||_e.far;nt!==_e.far&&(_e.far=nt,_e.updateProjectionMatrix()),Xs.setFromMatrixPosition(z.matrixWorld),_e.position.copy(Xs),Ho.copy(_e.position),Ho.add(fM[ve]),_e.up.copy(hM[ve]),_e.lookAt(Ho),_e.updateMatrixWorld(),ze.makeTranslation(-Xs.x,-Xs.y,-Xs.z),Af.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Af,_e.coordinateSystem,_e.reversedDepth)}else O.updateMatrices(z);i=O.getFrustum(),y(U,v,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===js&&E(O,v),O.needsUpdate=!1}d=this.type,_.needsUpdate=!1,n.setRenderTarget(b,Y,D)};function E(P,U){const v=e.update(S);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Nn(s.x,s.y,{format:Rs,type:ai})),f.uniforms.shadow_pass.value=P.map.depthTexture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(U,null,v,f,S,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(U,null,v,p,S,null)}function A(P,U,v,b){let Y=null;const D=v.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)Y=D;else if(Y=v.isPointLight===!0?l:o,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const I=Y.uuid,B=U.uuid;let W=c[I];W===void 0&&(W={},c[I]=W);let G=W[B];G===void 0&&(G=Y.clone(),W[B]=G,U.addEventListener("dispose",C)),Y=G}if(Y.visible=U.visible,Y.wireframe=U.wireframe,b===js?Y.side=U.shadowSide!==null?U.shadowSide:U.side:Y.side=U.shadowSide!==null?U.shadowSide:h[U.side],Y.alphaMap=U.alphaMap,Y.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,Y.map=U.map,Y.clipShadows=U.clipShadows,Y.clippingPlanes=U.clippingPlanes,Y.clipIntersection=U.clipIntersection,Y.displacementMap=U.displacementMap,Y.displacementScale=U.displacementScale,Y.displacementBias=U.displacementBias,Y.wireframeLinewidth=U.wireframeLinewidth,Y.linewidth=U.linewidth,v.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const I=n.properties.get(Y);I.light=v}return Y}function y(P,U,v,b,Y){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&Y===js)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,P.matrixWorld);const B=e.update(P),W=P.material;if(Array.isArray(W)){const G=B.groups;for(let z=0,O=G.length;z<O;z++){const ne=G[z],oe=W[ne.materialIndex];if(oe&&oe.visible){const xe=A(P,oe,b,Y);P.onBeforeShadow(n,P,U,v,B,xe,ne),n.renderBufferDirect(v,null,B,xe,P,ne),P.onAfterShadow(n,P,U,v,B,xe,ne)}}}else if(W.visible){const G=A(P,W,b,Y);P.onBeforeShadow(n,P,U,v,B,G,null),n.renderBufferDirect(v,null,B,G,P,null),P.onAfterShadow(n,P,U,v,B,G,null)}}const I=P.children;for(let B=0,W=I.length;B<W;B++)y(I[B],U,v,b,Y)}function C(P){P.target.removeEventListener("dispose",C);for(const v in c){const b=c[v],Y=P.target.uuid;Y in b&&(b[Y].dispose(),delete b[Y])}}}function pM(n,e){function t(){let N=!1;const ge=new mt;let pe=null;const Re=new mt(0,0,0,0);return{setMask:function(ue){pe!==ue&&!N&&(n.colorMask(ue,ue,ue,ue),pe=ue)},setLocked:function(ue){N=ue},setClear:function(ue,se,Ce,He,dt){dt===!0&&(ue*=He,se*=He,Ce*=He),ge.set(ue,se,Ce,He),Re.equals(ge)===!1&&(n.clearColor(ue,se,Ce,He),Re.copy(ge))},reset:function(){N=!1,pe=null,Re.set(-1,0,0,0)}}}function i(){let N=!1,ge=!1,pe=null,Re=null,ue=null;return{setReversed:function(se){if(ge!==se){const Ce=e.get("EXT_clip_control");se?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ge=se;const He=ue;ue=null,this.setClear(He)}},getReversed:function(){return ge},setTest:function(se){se?fe(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(se){pe!==se&&!N&&(n.depthMask(se),pe=se)},setFunc:function(se){if(ge&&(se=X_[se]),Re!==se){switch(se){case sl:n.depthFunc(n.NEVER);break;case rl:n.depthFunc(n.ALWAYS);break;case al:n.depthFunc(n.LESS);break;case As:n.depthFunc(n.LEQUAL);break;case ol:n.depthFunc(n.EQUAL);break;case ll:n.depthFunc(n.GEQUAL);break;case cl:n.depthFunc(n.GREATER);break;case ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=se}},setLocked:function(se){N=se},setClear:function(se){ue!==se&&(ue=se,ge&&(se=1-se),n.clearDepth(se))},reset:function(){N=!1,pe=null,Re=null,ue=null,ge=!1}}}function s(){let N=!1,ge=null,pe=null,Re=null,ue=null,se=null,Ce=null,He=null,dt=null;return{setTest:function(rt){N||(rt?fe(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(rt){ge!==rt&&!N&&(n.stencilMask(rt),ge=rt)},setFunc:function(rt,Vn,zn){(pe!==rt||Re!==Vn||ue!==zn)&&(n.stencilFunc(rt,Vn,zn),pe=rt,Re=Vn,ue=zn)},setOp:function(rt,Vn,zn){(se!==rt||Ce!==Vn||He!==zn)&&(n.stencilOp(rt,Vn,zn),se=rt,Ce=Vn,He=zn)},setLocked:function(rt){N=rt},setClear:function(rt){dt!==rt&&(n.clearStencil(rt),dt=rt)},reset:function(){N=!1,ge=null,pe=null,Re=null,ue=null,se=null,Ce=null,He=null,dt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,S=!1,_=null,d=null,E=null,A=null,y=null,C=null,P=null,U=new $e(0,0,0),v=0,b=!1,Y=null,D=null,I=null,B=null,W=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,O=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(ne)[1]),z=O>=1):ne.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),z=O>=2);let oe=null,xe={};const ve=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),ze=new mt().fromArray(ve),nt=new mt().fromArray(_e);function et(N,ge,pe,Re){const ue=new Uint8Array(4),se=n.createTexture();n.bindTexture(N,se),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<pe;Ce++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(ge+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return se}const re={};re[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(n.DEPTH_TEST),a.setFunc(As),$(!1),te(Su),fe(n.CULL_FACE),H(ti);function fe(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function de(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Be(N,ge){return h[N]!==ge?(n.bindFramebuffer(N,ge),h[N]=ge,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ge),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ie(N,ge){let pe=p,Re=!1;if(N){pe=f.get(ge),pe===void 0&&(pe=[],f.set(ge,pe));const ue=N.textures;if(pe.length!==ue.length||pe[0]!==n.COLOR_ATTACHMENT0){for(let se=0,Ce=ue.length;se<Ce;se++)pe[se]=n.COLOR_ATTACHMENT0+se;pe.length=ue.length,Re=!0}}else pe[0]!==n.BACK&&(pe[0]=n.BACK,Re=!0);Re&&n.drawBuffers(pe)}function Oe(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const w={[Hi]:n.FUNC_ADD,[p_]:n.FUNC_SUBTRACT,[m_]:n.FUNC_REVERSE_SUBTRACT};w[__]=n.MIN,w[g_]=n.MAX;const L={[x_]:n.ZERO,[v_]:n.ONE,[S_]:n.SRC_COLOR,[nl]:n.SRC_ALPHA,[A_]:n.SRC_ALPHA_SATURATE,[b_]:n.DST_COLOR,[E_]:n.DST_ALPHA,[M_]:n.ONE_MINUS_SRC_COLOR,[il]:n.ONE_MINUS_SRC_ALPHA,[T_]:n.ONE_MINUS_DST_COLOR,[y_]:n.ONE_MINUS_DST_ALPHA,[w_]:n.CONSTANT_COLOR,[R_]:n.ONE_MINUS_CONSTANT_COLOR,[C_]:n.CONSTANT_ALPHA,[P_]:n.ONE_MINUS_CONSTANT_ALPHA};function H(N,ge,pe,Re,ue,se,Ce,He,dt,rt){if(N===ti){S===!0&&(de(n.BLEND),S=!1);return}if(S===!1&&(fe(n.BLEND),S=!0),N!==d_){if(N!==_||rt!==b){if((d!==Hi||y!==Hi)&&(n.blendEquation(n.FUNC_ADD),d=Hi,y=Hi),rt)switch(N){case Es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mu:n.blendFunc(n.ONE,n.ONE);break;case Eu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ze("WebGLState: Invalid blending: ",N);break}else switch(N){case Es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Eu:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yu:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",N);break}E=null,A=null,C=null,P=null,U.set(0,0,0),v=0,_=N,b=rt}return}ue=ue||ge,se=se||pe,Ce=Ce||Re,(ge!==d||ue!==y)&&(n.blendEquationSeparate(w[ge],w[ue]),d=ge,y=ue),(pe!==E||Re!==A||se!==C||Ce!==P)&&(n.blendFuncSeparate(L[pe],L[Re],L[se],L[Ce]),E=pe,A=Re,C=se,P=Ce),(He.equals(U)===!1||dt!==v)&&(n.blendColor(He.r,He.g,He.b,dt),U.copy(He),v=dt),_=N,b=!1}function ie(N,ge){N.side===Jn?de(n.CULL_FACE):fe(n.CULL_FACE);let pe=N.side===jt;ge&&(pe=!pe),$(pe),N.blending===Es&&N.transparent===!1?H(ti):H(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const Re=N.stencilWrite;o.setTest(Re),Re&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ae(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(N){Y!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),Y=N)}function te(N){N!==u_?(fe(n.CULL_FACE),N!==D&&(N===Su?n.cullFace(n.BACK):N===f_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),D=N}function T(N){N!==I&&(z&&n.lineWidth(N),I=N)}function ae(N,ge,pe){N?(fe(n.POLYGON_OFFSET_FILL),(B!==ge||W!==pe)&&(B=ge,W=pe,a.getReversed()&&(ge=-ge),n.polygonOffset(ge,pe))):de(n.POLYGON_OFFSET_FILL)}function Q(N){N?fe(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function K(N){N===void 0&&(N=n.TEXTURE0+G-1),oe!==N&&(n.activeTexture(N),oe=N)}function ee(N,ge,pe){pe===void 0&&(oe===null?pe=n.TEXTURE0+G-1:pe=oe);let Re=xe[pe];Re===void 0&&(Re={type:void 0,texture:void 0},xe[pe]=Re),(Re.type!==N||Re.texture!==ge)&&(oe!==pe&&(n.activeTexture(pe),oe=pe),n.bindTexture(N,ge||re[N]),Re.type=N,Re.texture=ge)}function x(){const N=xe[oe];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function m(){try{n.compressedTexImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function k(){try{n.texSubImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function J(){try{n.texSubImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function me(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function le(){try{n.texStorage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function we(){try{n.texStorage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function De(){try{n.texImage2D(...arguments)}catch(N){Ze("WebGLState:",N)}}function ce(){try{n.texImage3D(...arguments)}catch(N){Ze("WebGLState:",N)}}function he(N){ze.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ze.copy(N))}function Se(N){nt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),nt.copy(N))}function be(N,ge){let pe=c.get(ge);pe===void 0&&(pe=new WeakMap,c.set(ge,pe));let Re=pe.get(N);Re===void 0&&(Re=n.getUniformBlockIndex(ge,N.name),pe.set(N,Re))}function Te(N,ge){const Re=c.get(ge).get(N);l.get(ge)!==Re&&(n.uniformBlockBinding(ge,Re,N.__bindingPointIndex),l.set(ge,Re))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},oe=null,xe={},h={},f=new WeakMap,p=[],g=null,S=!1,_=null,d=null,E=null,A=null,y=null,C=null,P=null,U=new $e(0,0,0),v=0,b=!1,Y=null,D=null,I=null,B=null,W=null,ze.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:fe,disable:de,bindFramebuffer:Be,drawBuffers:Ie,useProgram:Oe,setBlending:H,setMaterial:ie,setFlipSided:$,setCullFace:te,setLineWidth:T,setPolygonOffset:ae,setScissorTest:Q,activeTexture:K,bindTexture:ee,unbindTexture:x,compressedTexImage2D:m,compressedTexImage3D:R,texImage2D:De,texImage3D:ce,updateUBOMapping:be,uniformBlockBinding:Te,texStorage2D:le,texStorage3D:we,texSubImage2D:k,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:me,scissor:he,viewport:Se,reset:ke}}function mM(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,m){return p?new OffscreenCanvas(x,m):Ta("canvas")}function S(x,m,R){let k=1;const J=ee(x);if((J.width>R||J.height>R)&&(k=R/Math.max(J.width,J.height)),k<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const q=Math.floor(k*J.width),me=Math.floor(k*J.height);h===void 0&&(h=g(q,me));const le=m?g(q,me):h;return le.width=q,le.height=me,le.getContext("2d").drawImage(x,0,0,q,me),Ve("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+me+")."),le}else return"data"in x&&Ve("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),x;return x}function _(x){return x.generateMipmaps}function d(x){n.generateMipmap(x)}function E(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(x,m,R,k,J=!1){if(x!==null){if(n[x]!==void 0)return n[x];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let q=m;if(m===n.RED&&(R===n.FLOAT&&(q=n.R32F),R===n.HALF_FLOAT&&(q=n.R16F),R===n.UNSIGNED_BYTE&&(q=n.R8)),m===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(q=n.R8UI),R===n.UNSIGNED_SHORT&&(q=n.R16UI),R===n.UNSIGNED_INT&&(q=n.R32UI),R===n.BYTE&&(q=n.R8I),R===n.SHORT&&(q=n.R16I),R===n.INT&&(q=n.R32I)),m===n.RG&&(R===n.FLOAT&&(q=n.RG32F),R===n.HALF_FLOAT&&(q=n.RG16F),R===n.UNSIGNED_BYTE&&(q=n.RG8)),m===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(q=n.RG8UI),R===n.UNSIGNED_SHORT&&(q=n.RG16UI),R===n.UNSIGNED_INT&&(q=n.RG32UI),R===n.BYTE&&(q=n.RG8I),R===n.SHORT&&(q=n.RG16I),R===n.INT&&(q=n.RG32I)),m===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(q=n.RGB8UI),R===n.UNSIGNED_SHORT&&(q=n.RGB16UI),R===n.UNSIGNED_INT&&(q=n.RGB32UI),R===n.BYTE&&(q=n.RGB8I),R===n.SHORT&&(q=n.RGB16I),R===n.INT&&(q=n.RGB32I)),m===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),R===n.UNSIGNED_INT&&(q=n.RGBA32UI),R===n.BYTE&&(q=n.RGBA8I),R===n.SHORT&&(q=n.RGBA16I),R===n.INT&&(q=n.RGBA32I)),m===n.RGB&&(R===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),R===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),m===n.RGBA){const me=J?ba:Je.getTransfer(k);R===n.FLOAT&&(q=n.RGBA32F),R===n.HALF_FLOAT&&(q=n.RGBA16F),R===n.UNSIGNED_BYTE&&(q=me===at?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(x,m){let R;return x?m===null||m===Fn||m===hr?R=n.DEPTH24_STENCIL8:m===Dn?R=n.DEPTH32F_STENCIL8:m===fr&&(R=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Fn||m===hr?R=n.DEPTH_COMPONENT24:m===Dn?R=n.DEPTH_COMPONENT32F:m===fr&&(R=n.DEPTH_COMPONENT16),R}function C(x,m){return _(x)===!0||x.isFramebufferTexture&&x.minFilter!==Ct&&x.minFilter!==Ft?Math.log2(Math.max(m.width,m.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?m.mipmaps.length:1}function P(x){const m=x.target;m.removeEventListener("dispose",P),v(m),m.isVideoTexture&&u.delete(m)}function U(x){const m=x.target;m.removeEventListener("dispose",U),Y(m)}function v(x){const m=i.get(x);if(m.__webglInit===void 0)return;const R=x.source,k=f.get(R);if(k){const J=k[m.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(x),Object.keys(k).length===0&&f.delete(R)}i.remove(x)}function b(x){const m=i.get(x);n.deleteTexture(m.__webglTexture);const R=x.source,k=f.get(R);delete k[m.__cacheKey],a.memory.textures--}function Y(x){const m=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(m.__webglFramebuffer[k]))for(let J=0;J<m.__webglFramebuffer[k].length;J++)n.deleteFramebuffer(m.__webglFramebuffer[k][J]);else n.deleteFramebuffer(m.__webglFramebuffer[k]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[k])}else{if(Array.isArray(m.__webglFramebuffer))for(let k=0;k<m.__webglFramebuffer.length;k++)n.deleteFramebuffer(m.__webglFramebuffer[k]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let k=0;k<m.__webglColorRenderbuffer.length;k++)m.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[k]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const R=x.textures;for(let k=0,J=R.length;k<J;k++){const q=i.get(R[k]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(R[k])}i.remove(x)}let D=0;function I(){D=0}function B(){const x=D;return x>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),D+=1,x}function W(x){const m=[];return m.push(x.wrapS),m.push(x.wrapT),m.push(x.wrapR||0),m.push(x.magFilter),m.push(x.minFilter),m.push(x.anisotropy),m.push(x.internalFormat),m.push(x.format),m.push(x.type),m.push(x.generateMipmaps),m.push(x.premultiplyAlpha),m.push(x.flipY),m.push(x.unpackAlignment),m.push(x.colorSpace),m.join()}function G(x,m){const R=i.get(x);if(x.isVideoTexture&&Q(x),x.isRenderTargetTexture===!1&&x.isExternalTexture!==!0&&x.version>0&&R.__version!==x.version){const k=x.image;if(k===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{re(R,x,m);return}}else x.isExternalTexture&&(R.__webglTexture=x.sourceTexture?x.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+m)}function z(x,m){const R=i.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&R.__version!==x.version){re(R,x,m);return}else x.isExternalTexture&&(R.__webglTexture=x.sourceTexture?x.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+m)}function O(x,m){const R=i.get(x);if(x.isRenderTargetTexture===!1&&x.version>0&&R.__version!==x.version){re(R,x,m);return}t.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+m)}function ne(x,m){const R=i.get(x);if(x.isCubeDepthTexture!==!0&&x.version>0&&R.__version!==x.version){fe(R,x,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+m)}const oe={[fl]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[hl]:n.MIRRORED_REPEAT},xe={[Ct]:n.NEAREST,[I_]:n.NEAREST_MIPMAP_NEAREST,[Cr]:n.NEAREST_MIPMAP_LINEAR,[Ft]:n.LINEAR,[co]:n.LINEAR_MIPMAP_NEAREST,[ki]:n.LINEAR_MIPMAP_LINEAR},ve={[F_]:n.NEVER,[H_]:n.ALWAYS,[O_]:n.LESS,[Ec]:n.LEQUAL,[B_]:n.EQUAL,[yc]:n.GEQUAL,[V_]:n.GREATER,[z_]:n.NOTEQUAL};function _e(x,m){if(m.type===Dn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Ft||m.magFilter===co||m.magFilter===Cr||m.magFilter===ki||m.minFilter===Ft||m.minFilter===co||m.minFilter===Cr||m.minFilter===ki)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,oe[m.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,oe[m.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,oe[m.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,xe[m.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,xe[m.minFilter]),m.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,ve[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Ct||m.minFilter!==Cr&&m.minFilter!==ki||m.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function ze(x,m){let R=!1;x.__webglInit===void 0&&(x.__webglInit=!0,m.addEventListener("dispose",P));const k=m.source;let J=f.get(k);J===void 0&&(J={},f.set(k,J));const q=W(m);if(q!==x.__cacheKey){J[q]===void 0&&(J[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,R=!0),J[q].usedTimes++;const me=J[x.__cacheKey];me!==void 0&&(J[x.__cacheKey].usedTimes--,me.usedTimes===0&&b(m)),x.__cacheKey=q,x.__webglTexture=J[q].texture}return R}function nt(x,m,R){return Math.floor(Math.floor(x/R)/m)}function et(x,m,R,k){const q=x.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,m.width,m.height,R,k,m.data);else{q.sort((ce,he)=>ce.start-he.start);let me=0;for(let ce=1;ce<q.length;ce++){const he=q[me],Se=q[ce],be=he.start+he.count,Te=nt(Se.start,m.width,4),ke=nt(he.start,m.width,4);Se.start<=be+1&&Te===ke&&nt(Se.start+Se.count-1,m.width,4)===Te?he.count=Math.max(he.count,Se.start+Se.count-he.start):(++me,q[me]=Se)}q.length=me+1;const le=n.getParameter(n.UNPACK_ROW_LENGTH),we=n.getParameter(n.UNPACK_SKIP_PIXELS),De=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,m.width);for(let ce=0,he=q.length;ce<he;ce++){const Se=q[ce],be=Math.floor(Se.start/4),Te=Math.ceil(Se.count/4),ke=be%m.width,N=Math.floor(be/m.width),ge=Te,pe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,ke,N,ge,pe,R,k,m.data)}x.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,we),n.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function re(x,m,R){let k=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(k=n.TEXTURE_3D);const J=ze(x,m),q=m.source;t.bindTexture(k,x.__webglTexture,n.TEXTURE0+R);const me=i.get(q);if(q.version!==me.__version||J===!0){t.activeTexture(n.TEXTURE0+R);const le=Je.getPrimaries(Je.workingColorSpace),we=m.colorSpace===Ei?null:Je.getPrimaries(m.colorSpace),De=m.colorSpace===Ei||le===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ce=S(m.image,!1,s.maxTextureSize);ce=K(m,ce);const he=r.convert(m.format,m.colorSpace),Se=r.convert(m.type);let be=A(m.internalFormat,he,Se,m.colorSpace,m.isVideoTexture);_e(k,m);let Te;const ke=m.mipmaps,N=m.isVideoTexture!==!0,ge=me.__version===void 0||J===!0,pe=q.dataReady,Re=C(m,ce);if(m.isDepthTexture)be=y(m.format===Wi,m.type),ge&&(N?t.texStorage2D(n.TEXTURE_2D,1,be,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,be,ce.width,ce.height,0,he,Se,null));else if(m.isDataTexture)if(ke.length>0){N&&ge&&t.texStorage2D(n.TEXTURE_2D,Re,be,ke[0].width,ke[0].height);for(let ue=0,se=ke.length;ue<se;ue++)Te=ke[ue],N?pe&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Te.width,Te.height,he,Se,Te.data):t.texImage2D(n.TEXTURE_2D,ue,be,Te.width,Te.height,0,he,Se,Te.data);m.generateMipmaps=!1}else N?(ge&&t.texStorage2D(n.TEXTURE_2D,Re,be,ce.width,ce.height),pe&&et(m,ce,he,Se)):t.texImage2D(n.TEXTURE_2D,0,be,ce.width,ce.height,0,he,Se,ce.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){N&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,be,ke[0].width,ke[0].height,ce.depth);for(let ue=0,se=ke.length;ue<se;ue++)if(Te=ke[ue],m.format!==_n)if(he!==null)if(N){if(pe)if(m.layerUpdates.size>0){const Ce=nf(Te.width,Te.height,m.format,m.type);for(const He of m.layerUpdates){const dt=Te.data.subarray(He*Ce/Te.data.BYTES_PER_ELEMENT,(He+1)*Ce/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,He,Te.width,Te.height,1,he,dt)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,Te.width,Te.height,ce.depth,he,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,be,Te.width,Te.height,ce.depth,0,Te.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?pe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,Te.width,Te.height,ce.depth,he,Se,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,be,Te.width,Te.height,ce.depth,0,he,Se,Te.data)}else{N&&ge&&t.texStorage2D(n.TEXTURE_2D,Re,be,ke[0].width,ke[0].height);for(let ue=0,se=ke.length;ue<se;ue++)Te=ke[ue],m.format!==_n?he!==null?N?pe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,Te.width,Te.height,he,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,be,Te.width,Te.height,0,Te.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?pe&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Te.width,Te.height,he,Se,Te.data):t.texImage2D(n.TEXTURE_2D,ue,be,Te.width,Te.height,0,he,Se,Te.data)}else if(m.isDataArrayTexture)if(N){if(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,be,ce.width,ce.height,ce.depth),pe)if(m.layerUpdates.size>0){const ue=nf(ce.width,ce.height,m.format,m.type);for(const se of m.layerUpdates){const Ce=ce.data.subarray(se*ue/ce.data.BYTES_PER_ELEMENT,(se+1)*ue/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,ce.width,ce.height,1,he,Se,Ce)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,he,Se,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,ce.width,ce.height,ce.depth,0,he,Se,ce.data);else if(m.isData3DTexture)N?(ge&&t.texStorage3D(n.TEXTURE_3D,Re,be,ce.width,ce.height,ce.depth),pe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,he,Se,ce.data)):t.texImage3D(n.TEXTURE_3D,0,be,ce.width,ce.height,ce.depth,0,he,Se,ce.data);else if(m.isFramebufferTexture){if(ge)if(N)t.texStorage2D(n.TEXTURE_2D,Re,be,ce.width,ce.height);else{let ue=ce.width,se=ce.height;for(let Ce=0;Ce<Re;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,be,ue,se,0,he,Se,null),ue>>=1,se>>=1}}else if(ke.length>0){if(N&&ge){const ue=ee(ke[0]);t.texStorage2D(n.TEXTURE_2D,Re,be,ue.width,ue.height)}for(let ue=0,se=ke.length;ue<se;ue++)Te=ke[ue],N?pe&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,he,Se,Te):t.texImage2D(n.TEXTURE_2D,ue,be,he,Se,Te);m.generateMipmaps=!1}else if(N){if(ge){const ue=ee(ce);t.texStorage2D(n.TEXTURE_2D,Re,be,ue.width,ue.height)}pe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Se,ce)}else t.texImage2D(n.TEXTURE_2D,0,be,he,Se,ce);_(m)&&d(k),me.__version=q.version,m.onUpdate&&m.onUpdate(m)}x.__version=m.version}function fe(x,m,R){if(m.image.length!==6)return;const k=ze(x,m),J=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+R);const q=i.get(J);if(J.version!==q.__version||k===!0){t.activeTexture(n.TEXTURE0+R);const me=Je.getPrimaries(Je.workingColorSpace),le=m.colorSpace===Ei?null:Je.getPrimaries(m.colorSpace),we=m.colorSpace===Ei||me===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const De=m.isCompressedTexture||m.image[0].isCompressedTexture,ce=m.image[0]&&m.image[0].isDataTexture,he=[];for(let se=0;se<6;se++)!De&&!ce?he[se]=S(m.image[se],!0,s.maxCubemapSize):he[se]=ce?m.image[se].image:m.image[se],he[se]=K(m,he[se]);const Se=he[0],be=r.convert(m.format,m.colorSpace),Te=r.convert(m.type),ke=A(m.internalFormat,be,Te,m.colorSpace),N=m.isVideoTexture!==!0,ge=q.__version===void 0||k===!0,pe=J.dataReady;let Re=C(m,Se);_e(n.TEXTURE_CUBE_MAP,m);let ue;if(De){N&&ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,ke,Se.width,Se.height);for(let se=0;se<6;se++){ue=he[se].mipmaps;for(let Ce=0;Ce<ue.length;Ce++){const He=ue[Ce];m.format!==_n?be!==null?N?pe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce,0,0,He.width,He.height,be,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce,ke,He.width,He.height,0,He.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce,0,0,He.width,He.height,be,Te,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce,ke,He.width,He.height,0,be,Te,He.data)}}}else{if(ue=m.mipmaps,N&&ge){ue.length>0&&Re++;const se=ee(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,ke,se.width,se.height)}for(let se=0;se<6;se++)if(ce){N?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,he[se].width,he[se].height,be,Te,he[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ke,he[se].width,he[se].height,0,be,Te,he[se].data);for(let Ce=0;Ce<ue.length;Ce++){const dt=ue[Ce].image[se].image;N?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce+1,0,0,dt.width,dt.height,be,Te,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce+1,ke,dt.width,dt.height,0,be,Te,dt.data)}}else{N?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,be,Te,he[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ke,be,Te,he[se]);for(let Ce=0;Ce<ue.length;Ce++){const He=ue[Ce];N?pe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce+1,0,0,be,Te,He.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ce+1,ke,be,Te,He.image[se])}}}_(m)&&d(n.TEXTURE_CUBE_MAP),q.__version=J.version,m.onUpdate&&m.onUpdate(m)}x.__version=m.version}function de(x,m,R,k,J,q){const me=r.convert(R.format,R.colorSpace),le=r.convert(R.type),we=A(R.internalFormat,me,le,R.colorSpace),De=i.get(m),ce=i.get(R);if(ce.__renderTarget=m,!De.__hasExternalTextures){const he=Math.max(1,m.width>>q),Se=Math.max(1,m.height>>q);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,q,we,he,Se,m.depth,0,me,le,null):t.texImage2D(J,q,we,he,Se,0,me,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),ae(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,J,ce.__webglTexture,0,T(m)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,J,ce.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(x,m,R){if(n.bindRenderbuffer(n.RENDERBUFFER,x),m.depthBuffer){const k=m.depthTexture,J=k&&k.isDepthTexture?k.type:null,q=y(m.stencilBuffer,J),me=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ae(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,T(m),q,m.width,m.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,T(m),q,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,q,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,x)}else{const k=m.textures;for(let J=0;J<k.length;J++){const q=k[J],me=r.convert(q.format,q.colorSpace),le=r.convert(q.type),we=A(q.internalFormat,me,le,q.colorSpace);ae(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,T(m),we,m.width,m.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,T(m),we,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,we,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(x,m,R){const k=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(m.depthTexture);if(J.__renderTarget=m,(!J.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),k){if(J.__webglInit===void 0&&(J.__webglInit=!0,m.depthTexture.addEventListener("dispose",P)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),_e(n.TEXTURE_CUBE_MAP,m.depthTexture);const De=r.convert(m.depthTexture.format),ce=r.convert(m.depthTexture.type);let he;m.depthTexture.format===oi?he=n.DEPTH_COMPONENT24:m.depthTexture.format===Wi&&(he=n.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,he,m.width,m.height,0,De,ce,null)}}else G(m.depthTexture,0);const q=J.__webglTexture,me=T(m),le=k?n.TEXTURE_CUBE_MAP_POSITIVE_X+R:n.TEXTURE_2D,we=m.depthTexture.format===Wi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(m.depthTexture.format===oi)ae(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,le,q,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,we,le,q,0);else if(m.depthTexture.format===Wi)ae(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,le,q,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,we,le,q,0);else throw new Error("Unknown depthTexture format")}function Oe(x){const m=i.get(x),R=x.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==x.depthTexture){const k=x.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),k){const J=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,k.removeEventListener("dispose",J)};k.addEventListener("dispose",J),m.__depthDisposeCallback=J}m.__boundDepthTexture=k}if(x.depthTexture&&!m.__autoAllocateDepthBuffer)if(R)for(let k=0;k<6;k++)Ie(m.__webglFramebuffer[k],x,k);else{const k=x.texture.mipmaps;k&&k.length>0?Ie(m.__webglFramebuffer[0],x,0):Ie(m.__webglFramebuffer,x,0)}else if(R){m.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[k]),m.__webglDepthbuffer[k]===void 0)m.__webglDepthbuffer[k]=n.createRenderbuffer(),Be(m.__webglDepthbuffer[k],x,!1);else{const J=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=m.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,q)}}else{const k=x.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),Be(m.__webglDepthbuffer,x,!1);else{const J=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function w(x,m,R){const k=i.get(x);m!==void 0&&de(k.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&Oe(x)}function L(x){const m=x.texture,R=i.get(x),k=i.get(m);x.addEventListener("dispose",U);const J=x.textures,q=x.isWebGLCubeRenderTarget===!0,me=J.length>1;if(me||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=m.version,a.memory.textures++),q){R.__webglFramebuffer=[];for(let le=0;le<6;le++)if(m.mipmaps&&m.mipmaps.length>0){R.__webglFramebuffer[le]=[];for(let we=0;we<m.mipmaps.length;we++)R.__webglFramebuffer[le][we]=n.createFramebuffer()}else R.__webglFramebuffer[le]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){R.__webglFramebuffer=[];for(let le=0;le<m.mipmaps.length;le++)R.__webglFramebuffer[le]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(me)for(let le=0,we=J.length;le<we;le++){const De=i.get(J[le]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),a.memory.textures++)}if(x.samples>0&&ae(x)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const we=J[le];R.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[le]);const De=r.convert(we.format,we.colorSpace),ce=r.convert(we.type),he=A(we.internalFormat,De,ce,we.colorSpace,x.isXRRenderTarget===!0),Se=T(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,he,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,R.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(R.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),_e(n.TEXTURE_CUBE_MAP,m);for(let le=0;le<6;le++)if(m.mipmaps&&m.mipmaps.length>0)for(let we=0;we<m.mipmaps.length;we++)de(R.__webglFramebuffer[le][we],x,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,we);else de(R.__webglFramebuffer[le],x,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);_(m)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let le=0,we=J.length;le<we;le++){const De=J[le],ce=i.get(De);let he=n.TEXTURE_2D;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(he=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,ce.__webglTexture),_e(he,De),de(R.__webglFramebuffer,x,De,n.COLOR_ATTACHMENT0+le,he,0),_(De)&&d(he)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(le=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,k.__webglTexture),_e(le,m),m.mipmaps&&m.mipmaps.length>0)for(let we=0;we<m.mipmaps.length;we++)de(R.__webglFramebuffer[we],x,m,n.COLOR_ATTACHMENT0,le,we);else de(R.__webglFramebuffer,x,m,n.COLOR_ATTACHMENT0,le,0);_(m)&&d(le),t.unbindTexture()}x.depthBuffer&&Oe(x)}function H(x){const m=x.textures;for(let R=0,k=m.length;R<k;R++){const J=m[R];if(_(J)){const q=E(x),me=i.get(J).__webglTexture;t.bindTexture(q,me),d(q),t.unbindTexture()}}}const ie=[],$=[];function te(x){if(x.samples>0){if(ae(x)===!1){const m=x.textures,R=x.width,k=x.height;let J=n.COLOR_BUFFER_BIT;const q=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(x),le=m.length>1;if(le)for(let De=0;De<m.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const we=x.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let De=0;De<m.length;De++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[De]);const ce=i.get(m[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,R,k,0,0,R,k,J,n.NEAREST),l===!0&&(ie.length=0,$.length=0,ie.push(n.COLOR_ATTACHMENT0+De),x.depthBuffer&&x.resolveDepthBuffer===!1&&(ie.push(q),$.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let De=0;De<m.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,me.__webglColorRenderbuffer[De]);const ce=i.get(m[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const m=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function T(x){return Math.min(s.maxSamples,x.samples)}function ae(x){const m=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function Q(x){const m=a.render.frame;u.get(x)!==m&&(u.set(x,m),x.update())}function K(x,m){const R=x.colorSpace,k=x.format,J=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||R!==Cs&&R!==Ei&&(Je.getTransfer(R)===at?(k!==_n||J!==Qt)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",R)),m}function ee(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=I,this.setTexture2D=G,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=ne,this.rebindTextures=w,this.setupRenderTarget=L,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function _M(n,e){function t(i,s=Ei){let r;const a=Je.getTransfer(s);if(i===Qt)return n.UNSIGNED_BYTE;if(i===gc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===xc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===td)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qh)return n.BYTE;if(i===ed)return n.SHORT;if(i===fr)return n.UNSIGNED_SHORT;if(i===_c)return n.INT;if(i===Fn)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===ai)return n.HALF_FLOAT;if(i===id)return n.ALPHA;if(i===sd)return n.RGB;if(i===_n)return n.RGBA;if(i===oi)return n.DEPTH_COMPONENT;if(i===Wi)return n.DEPTH_STENCIL;if(i===rd)return n.RED;if(i===vc)return n.RED_INTEGER;if(i===Rs)return n.RG;if(i===Sc)return n.RG_INTEGER;if(i===Mc)return n.RGBA_INTEGER;if(i===la||i===ca||i===ua||i===fa)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dl||i===pl||i===ml||i===_l)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gl||i===xl||i===vl||i===Sl||i===Ml||i===El||i===yl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gl||i===xl)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sl)return r.COMPRESSED_R11_EAC;if(i===Ml)return r.COMPRESSED_SIGNED_R11_EAC;if(i===El)return r.COMPRESSED_RG11_EAC;if(i===yl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bl||i===Tl||i===Al||i===wl||i===Rl||i===Cl||i===Pl||i===Dl||i===Ll||i===Il||i===Ul||i===Nl||i===Fl||i===Ol)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===bl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Al)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ll)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Il)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ul)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ol)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bl||i===Vl||i===zl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Bl)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hl||i===Gl||i===kl||i===Wl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Hl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const gM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xM=`
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

}`;class vM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new _d(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Bn({vertexShader:gM,fragmentShader:xM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new li(new ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SM extends Ki{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const S=typeof XRWebGLBinding<"u",_=new vM,d={},E=t.getContextAttributes();let A=null,y=null;const C=[],P=[],U=new Xe;let v=null;const b=new pn;b.viewport=new mt;const Y=new pn;Y.viewport=new mt;const D=[b,Y],I=new Pg;let B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let fe=C[re];return fe===void 0&&(fe=new go,C[re]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(re){let fe=C[re];return fe===void 0&&(fe=new go,C[re]=fe),fe.getGripSpace()},this.getHand=function(re){let fe=C[re];return fe===void 0&&(fe=new go,C[re]=fe),fe.getHandSpace()};function G(re){const fe=P.indexOf(re.inputSource);if(fe===-1)return;const de=C[fe];de!==void 0&&(de.update(re.inputSource,re.frame,c||a),de.dispatchEvent({type:re.type,data:re.inputSource}))}function z(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",O);for(let re=0;re<C.length;re++){const fe=P[re];fe!==null&&(P[re]=null,C[re].disconnect(fe))}B=null,W=null,_.reset();for(const re in d)delete d[re];e.setRenderTarget(A),p=null,f=null,h=null,s=null,y=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",z),s.addEventListener("inputsourceschange",O),E.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(U),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Be=null,Ie=null;E.depth&&(Ie=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=E.stencil?Wi:oi,Be=E.stencil?hr:Fn);const Oe={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Oe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Nn(f.textureWidth,f.textureHeight,{format:_n,type:Qt,depthTexture:new pr(f.textureWidth,f.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Nn(p.framebufferWidth,p.framebufferHeight,{format:_n,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),et.setContext(s),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function O(re){for(let fe=0;fe<re.removed.length;fe++){const de=re.removed[fe],Be=P.indexOf(de);Be>=0&&(P[Be]=null,C[Be].disconnect(de))}for(let fe=0;fe<re.added.length;fe++){const de=re.added[fe];let Be=P.indexOf(de);if(Be===-1){for(let Oe=0;Oe<C.length;Oe++)if(Oe>=P.length){P.push(de),Be=Oe;break}else if(P[Oe]===null){P[Oe]=de,Be=Oe;break}if(Be===-1)break}const Ie=C[Be];Ie&&Ie.connect(de)}}const ne=new V,oe=new V;function xe(re,fe,de){ne.setFromMatrixPosition(fe.matrixWorld),oe.setFromMatrixPosition(de.matrixWorld);const Be=ne.distanceTo(oe),Ie=fe.projectionMatrix.elements,Oe=de.projectionMatrix.elements,w=Ie[14]/(Ie[10]-1),L=Ie[14]/(Ie[10]+1),H=(Ie[9]+1)/Ie[5],ie=(Ie[9]-1)/Ie[5],$=(Ie[8]-1)/Ie[0],te=(Oe[8]+1)/Oe[0],T=w*$,ae=w*te,Q=Be/(-$+te),K=Q*-$;if(fe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(K),re.translateZ(Q),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ie[10]===-1)re.projectionMatrix.copy(fe.projectionMatrix),re.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const ee=w+Q,x=L+Q,m=T-K,R=ae+(Be-K),k=H*L/x*ee,J=ie*L/x*ee;re.projectionMatrix.makePerspective(m,R,k,J,ee,x),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function ve(re,fe){fe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(fe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let fe=re.near,de=re.far;_.texture!==null&&(_.depthNear>0&&(fe=_.depthNear),_.depthFar>0&&(de=_.depthFar)),I.near=Y.near=b.near=fe,I.far=Y.far=b.far=de,(B!==I.near||W!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),B=I.near,W=I.far),I.layers.mask=re.layers.mask|6,b.layers.mask=I.layers.mask&-5,Y.layers.mask=I.layers.mask&-3;const Be=re.parent,Ie=I.cameras;ve(I,Be);for(let Oe=0;Oe<Ie.length;Oe++)ve(Ie[Oe],Be);Ie.length===2?xe(I,b,Y):I.projectionMatrix.copy(b.projectionMatrix),_e(re,I,Be)};function _e(re,fe,de){de===null?re.matrix.copy(fe.matrixWorld):(re.matrix.copy(de.matrixWorld),re.matrix.invert(),re.matrix.multiply(fe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(fe.projectionMatrix),re.projectionMatrixInverse.copy(fe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Xl*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(re){l=re,f!==null&&(f.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(I)},this.getCameraTexture=function(re){return d[re]};let ze=null;function nt(re,fe){if(u=fe.getViewerPose(c||a),g=fe,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Be=!1;de.length!==I.cameras.length&&(I.cameras.length=0,Be=!0);for(let L=0;L<de.length;L++){const H=de[L];let ie=null;if(p!==null)ie=p.getViewport(H);else{const te=h.getViewSubImage(f,H);ie=te.viewport,L===0&&(e.setRenderTargetTextures(y,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(y))}let $=D[L];$===void 0&&($=new pn,$.layers.enable(L),$.viewport=new mt,D[L]=$),$.matrix.fromArray(H.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(H.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(ie.x,ie.y,ie.width,ie.height),L===0&&(I.matrix.copy($.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Be===!0&&I.cameras.push($)}const Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){h=i.getBinding();const L=h.getDepthInformation(de[0]);L&&L.isValid&&L.texture&&_.init(L,s.renderState)}if(Ie&&Ie.includes("camera-access")&&S){e.state.unbindTexture(),h=i.getBinding();for(let L=0;L<de.length;L++){const H=de[L].camera;if(H){let ie=d[H];ie||(ie=new _d,d[H]=ie);const $=h.getCameraImage(H);ie.sourceTexture=$}}}}for(let de=0;de<C.length;de++){const Be=P[de],Ie=C[de];Be!==null&&Ie!==void 0&&Ie.update(Be,fe,c||a)}ze&&ze(re,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}const et=new Sd;et.setAnimationLoop(nt),this.setAnimationLoop=function(re){ze=re},this.dispose=function(){}}}const Bi=new On,MM=new ot;function EM(n,e){function t(_,d){_.matrixAutoUpdate===!0&&_.updateMatrix(),d.value.copy(_.matrix)}function i(_,d){d.color.getRGB(_.fogColor.value,gd(n)),d.isFog?(_.fogNear.value=d.near,_.fogFar.value=d.far):d.isFogExp2&&(_.fogDensity.value=d.density)}function s(_,d,E,A,y){d.isMeshBasicMaterial?r(_,d):d.isMeshLambertMaterial?(r(_,d),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(_,d),h(_,d)):d.isMeshPhongMaterial?(r(_,d),u(_,d),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(_,d),f(_,d),d.isMeshPhysicalMaterial&&p(_,d,y)):d.isMeshMatcapMaterial?(r(_,d),g(_,d)):d.isMeshDepthMaterial?r(_,d):d.isMeshDistanceMaterial?(r(_,d),S(_,d)):d.isMeshNormalMaterial?r(_,d):d.isLineBasicMaterial?(a(_,d),d.isLineDashedMaterial&&o(_,d)):d.isPointsMaterial?l(_,d,E,A):d.isSpriteMaterial?c(_,d):d.isShadowMaterial?(_.color.value.copy(d.color),_.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(_,d){_.opacity.value=d.opacity,d.color&&_.diffuse.value.copy(d.color),d.emissive&&_.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.bumpMap&&(_.bumpMap.value=d.bumpMap,t(d.bumpMap,_.bumpMapTransform),_.bumpScale.value=d.bumpScale,d.side===jt&&(_.bumpScale.value*=-1)),d.normalMap&&(_.normalMap.value=d.normalMap,t(d.normalMap,_.normalMapTransform),_.normalScale.value.copy(d.normalScale),d.side===jt&&_.normalScale.value.negate()),d.displacementMap&&(_.displacementMap.value=d.displacementMap,t(d.displacementMap,_.displacementMapTransform),_.displacementScale.value=d.displacementScale,_.displacementBias.value=d.displacementBias),d.emissiveMap&&(_.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,_.emissiveMapTransform)),d.specularMap&&(_.specularMap.value=d.specularMap,t(d.specularMap,_.specularMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest);const E=e.get(d),A=E.envMap,y=E.envMapRotation;A&&(_.envMap.value=A,Bi.copy(y),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),_.envMapRotation.value.setFromMatrix4(MM.makeRotationFromEuler(Bi)),_.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=d.reflectivity,_.ior.value=d.ior,_.refractionRatio.value=d.refractionRatio),d.lightMap&&(_.lightMap.value=d.lightMap,_.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,_.lightMapTransform)),d.aoMap&&(_.aoMap.value=d.aoMap,_.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,_.aoMapTransform))}function a(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform))}function o(_,d){_.dashSize.value=d.dashSize,_.totalSize.value=d.dashSize+d.gapSize,_.scale.value=d.scale}function l(_,d,E,A){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.size.value=d.size*E,_.scale.value=A*.5,d.map&&(_.map.value=d.map,t(d.map,_.uvTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function c(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.rotation.value=d.rotation,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function u(_,d){_.specular.value.copy(d.specular),_.shininess.value=Math.max(d.shininess,1e-4)}function h(_,d){d.gradientMap&&(_.gradientMap.value=d.gradientMap)}function f(_,d){_.metalness.value=d.metalness,d.metalnessMap&&(_.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,_.metalnessMapTransform)),_.roughness.value=d.roughness,d.roughnessMap&&(_.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,_.roughnessMapTransform)),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)}function p(_,d,E){_.ior.value=d.ior,d.sheen>0&&(_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),_.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(_.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,_.sheenColorMapTransform)),d.sheenRoughnessMap&&(_.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,_.sheenRoughnessMapTransform))),d.clearcoat>0&&(_.clearcoat.value=d.clearcoat,_.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(_.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,_.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(_.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===jt&&_.clearcoatNormalScale.value.negate())),d.dispersion>0&&(_.dispersion.value=d.dispersion),d.iridescence>0&&(_.iridescence.value=d.iridescence,_.iridescenceIOR.value=d.iridescenceIOR,_.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(_.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,_.iridescenceMapTransform)),d.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),d.transmission>0&&(_.transmission.value=d.transmission,_.transmissionSamplerMap.value=E.texture,_.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(_.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,_.transmissionMapTransform)),_.thickness.value=d.thickness,d.thicknessMap&&(_.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=d.attenuationDistance,_.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(_.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(_.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=d.specularIntensity,_.specularColor.value.copy(d.specularColor),d.specularColorMap&&(_.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,_.specularColorMapTransform)),d.specularIntensityMap&&(_.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,d){d.matcap&&(_.matcap.value=d.matcap)}function S(_,d){const E=e.get(d).light;_.referencePosition.value.setFromMatrixPosition(E.matrixWorld),_.nearDistance.value=E.shadow.camera.near,_.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yM(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,A){const y=A.program;i.uniformBlockBinding(E,y)}function c(E,A){let y=s[E.id];y===void 0&&(g(E),y=u(E),s[E.id]=y,E.addEventListener("dispose",_));const C=A.program;i.updateUBOMapping(E,C);const P=e.render.frame;r[E.id]!==P&&(f(E),r[E.id]=P)}function u(E){const A=h();E.__bindingPointIndex=A;const y=n.createBuffer(),C=E.__size,P=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,y),y}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const A=s[E.id],y=E.uniforms,C=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let P=0,U=y.length;P<U;P++){const v=Array.isArray(y[P])?y[P]:[y[P]];for(let b=0,Y=v.length;b<Y;b++){const D=v[b];if(p(D,P,b,C)===!0){const I=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let G=0;G<B.length;G++){const z=B[G],O=S(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,I+W,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,A,y,C){const P=E.value,U=A+"_"+y;if(C[U]===void 0)return typeof P=="number"||typeof P=="boolean"?C[U]=P:C[U]=P.clone(),!0;{const v=C[U];if(typeof P=="number"||typeof P=="boolean"){if(v!==P)return C[U]=P,!0}else if(v.equals(P)===!1)return v.copy(P),!0}return!1}function g(E){const A=E.uniforms;let y=0;const C=16;for(let U=0,v=A.length;U<v;U++){const b=Array.isArray(A[U])?A[U]:[A[U]];for(let Y=0,D=b.length;Y<D;Y++){const I=b[Y],B=Array.isArray(I.value)?I.value:[I.value];for(let W=0,G=B.length;W<G;W++){const z=B[W],O=S(z),ne=y%C,oe=ne%O.boundary,xe=ne+oe;y+=oe,xe!==0&&C-xe<O.storage&&(y+=C-xe),I.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=O.storage}}}const P=y%C;return P>0&&(y+=C-P),E.__size=y,E.__cache={},this}function S(E){const A={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(A.boundary=4,A.storage=4):E.isVector2?(A.boundary=8,A.storage=8):E.isVector3||E.isColor?(A.boundary=16,A.storage=12):E.isVector4?(A.boundary=16,A.storage=16):E.isMatrix3?(A.boundary=48,A.storage=48):E.isMatrix4?(A.boundary=64,A.storage=64):E.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",E),A}function _(E){const A=E.target;A.removeEventListener("dispose",_);const y=a.indexOf(A.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function d(){for(const E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}const bM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function TM(){return bn===null&&(bn=new hg(bM,16,16,Rs,ai),bn.name="DFG_LUT",bn.minFilter=Ft,bn.magFilter=Ft,bn.wrapS=Qn,bn.wrapT=Qn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class oE{constructor(e={}){const{canvas:t=k_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Qt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const S=p,_=new Set([Mc,Sc,vc]),d=new Set([Qt,Fn,fr,hr,gc,xc]),E=new Uint32Array(4),A=new Int32Array(4);let y=null,C=null;const P=[],U=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let Y=!1;this._outputColorSpace=an;let D=0,I=0,B=null,W=-1,G=null;const z=new mt,O=new mt;let ne=null;const oe=new $e(0);let xe=0,ve=t.width,_e=t.height,ze=1,nt=null,et=null;const re=new mt(0,0,ve,_e),fe=new mt(0,0,ve,_e);let de=!1;const Be=new Ac;let Ie=!1,Oe=!1;const w=new ot,L=new V,H=new mt,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function te(){return B===null?ze:1}let T=i;function ae(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pc}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",dt,!1),T===null){const F="webgl2";if(T=ae(F,M),T===null)throw ae(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Ze("WebGLRenderer: "+M.message),M}let Q,K,ee,x,m,R,k,J,q,me,le,we,De,ce,he,Se,be,Te,ke,N,ge,pe,Re;function ue(){Q=new Av(T),Q.init(),ge=new _M(T,Q),K=new xv(T,Q,e,ge),ee=new pM(T,Q),K.reversedDepthBuffer&&f&&ee.buffers.depth.setReversed(!0),x=new Cv(T),m=new eM,R=new mM(T,Q,ee,m,K,ge,x),k=new Tv(b),J=new Ug(T),pe=new _v(T,J),q=new wv(T,J,x,pe),me=new Dv(T,q,J,pe,x),Te=new Pv(T,K,R),he=new vv(m),le=new QS(b,k,Q,K,pe,he),we=new EM(b,m),De=new nM,ce=new lM(Q),be=new mv(b,k,ee,me,g,l),Se=new dM(b,me,K),Re=new yM(T,x,K,ee),ke=new gv(T,Q,x),N=new Rv(T,Q,x),x.programs=le.programs,b.capabilities=K,b.extensions=Q,b.properties=m,b.renderLists=De,b.shadowMap=Se,b.state=ee,b.info=x}ue(),S!==Qt&&(v=new Iv(S,t.width,t.height,s,r));const se=new SM(b,T);this.xr=se,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const M=Q.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Q.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ze},this.setPixelRatio=function(M){M!==void 0&&(ze=M,this.setSize(ve,_e,!1))},this.getSize=function(M){return M.set(ve,_e)},this.setSize=function(M,F,Z=!0){if(se.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=M,_e=F,t.width=Math.floor(M*ze),t.height=Math.floor(F*ze),Z===!0&&(t.style.width=M+"px",t.style.height=F+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(ve*ze,_e*ze).floor()},this.setDrawingBufferSize=function(M,F,Z){ve=M,_e=F,ze=Z,t.width=Math.floor(M*Z),t.height=Math.floor(F*Z),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(S===Qt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(z)},this.getViewport=function(M){return M.copy(re)},this.setViewport=function(M,F,Z,j){M.isVector4?re.set(M.x,M.y,M.z,M.w):re.set(M,F,Z,j),ee.viewport(z.copy(re).multiplyScalar(ze).round())},this.getScissor=function(M){return M.copy(fe)},this.setScissor=function(M,F,Z,j){M.isVector4?fe.set(M.x,M.y,M.z,M.w):fe.set(M,F,Z,j),ee.scissor(O.copy(fe).multiplyScalar(ze).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(M){ee.setScissorTest(de=M)},this.setOpaqueSort=function(M){nt=M},this.setTransparentSort=function(M){et=M},this.getClearColor=function(M){return M.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,Z=!0){let j=0;if(M){let X=!1;if(B!==null){const Ee=B.texture.format;X=_.has(Ee)}if(X){const Ee=B.texture.type,Ae=d.has(Ee),ye=be.getClearColor(),Pe=be.getClearAlpha(),Ue=ye.r,We=ye.g,je=ye.b;Ae?(E[0]=Ue,E[1]=We,E[2]=je,E[3]=Pe,T.clearBufferuiv(T.COLOR,0,E)):(A[0]=Ue,A[1]=We,A[2]=je,A[3]=Pe,T.clearBufferiv(T.COLOR,0,A))}else j|=T.COLOR_BUFFER_BIT}F&&(j|=T.DEPTH_BUFFER_BIT),Z&&(j|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&T.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),be.dispose(),De.dispose(),ce.dispose(),m.dispose(),k.dispose(),me.dispose(),pe.dispose(),Re.dispose(),le.dispose(),se.dispose(),se.removeEventListener("sessionstart",Pc),se.removeEventListener("sessionend",Dc),wi.stop()};function Ce(M){M.preventDefault(),Ru("WebGLRenderer: Context Lost."),Y=!0}function He(){Ru("WebGLRenderer: Context Restored."),Y=!1;const M=x.autoReset,F=Se.enabled,Z=Se.autoUpdate,j=Se.needsUpdate,X=Se.type;ue(),x.autoReset=M,Se.enabled=F,Se.autoUpdate=Z,Se.needsUpdate=j,Se.type=X}function dt(M){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function rt(M){const F=M.target;F.removeEventListener("dispose",rt),Vn(F)}function Vn(M){zn(M),m.remove(M)}function zn(M){const F=m.get(M).programs;F!==void 0&&(F.forEach(function(Z){le.releaseProgram(Z)}),M.isShaderMaterial&&le.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,Z,j,X,Ee){F===null&&(F=ie);const Ae=X.isMesh&&X.matrixWorld.determinant()<0,ye=Rd(M,F,Z,j,X);ee.setMaterial(j,Ae);let Pe=Z.index,Ue=1;if(j.wireframe===!0){if(Pe=q.getWireframeAttribute(Z),Pe===void 0)return;Ue=2}const We=Z.drawRange,je=Z.attributes.position;let Ne=We.start*Ue,lt=(We.start+We.count)*Ue;Ee!==null&&(Ne=Math.max(Ne,Ee.start*Ue),lt=Math.min(lt,(Ee.start+Ee.count)*Ue)),Pe!==null?(Ne=Math.max(Ne,0),lt=Math.min(lt,Pe.count)):je!=null&&(Ne=Math.max(Ne,0),lt=Math.min(lt,je.count));const xt=lt-Ne;if(xt<0||xt===1/0)return;pe.setup(X,j,ye,Z,Pe);let gt,ct=ke;if(Pe!==null&&(gt=J.get(Pe),ct=N,ct.setIndex(gt)),X.isMesh)j.wireframe===!0?(ee.setLineWidth(j.wireframeLinewidth*te()),ct.setMode(T.LINES)):ct.setMode(T.TRIANGLES);else if(X.isLine){let Pt=j.linewidth;Pt===void 0&&(Pt=1),ee.setLineWidth(Pt*te()),X.isLineSegments?ct.setMode(T.LINES):X.isLineLoop?ct.setMode(T.LINE_LOOP):ct.setMode(T.LINE_STRIP)}else X.isPoints?ct.setMode(T.POINTS):X.isSprite&&ct.setMode(T.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Aa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ct.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Pt=X._multiDrawStarts,Le=X._multiDrawCounts,Kt=X._multiDrawCount,Qe=Pe?J.get(Pe).bytesPerElement:1,un=m.get(j).currentProgram.getUniforms();for(let Mn=0;Mn<Kt;Mn++)un.setValue(T,"_gl_DrawID",Mn),ct.render(Pt[Mn]/Qe,Le[Mn])}else if(X.isInstancedMesh)ct.renderInstances(Ne,xt,X.count);else if(Z.isInstancedBufferGeometry){const Pt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Le=Math.min(Z.instanceCount,Pt);ct.renderInstances(Ne,xt,Le)}else ct.render(Ne,xt)};function Cc(M,F,Z){M.transparent===!0&&M.side===Jn&&M.forceSinglePass===!1?(M.side=jt,M.needsUpdate=!0,br(M,F,Z),M.side=Ti,M.needsUpdate=!0,br(M,F,Z),M.side=Jn):br(M,F,Z)}this.compile=function(M,F,Z=null){Z===null&&(Z=M),C=ce.get(Z),C.init(F),U.push(C),Z.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(C.pushLight(X),X.castShadow&&C.pushShadow(X))}),M!==Z&&M.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(C.pushLight(X),X.castShadow&&C.pushShadow(X))}),C.setupLights();const j=new Set;return M.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let Ae=0;Ae<Ee.length;Ae++){const ye=Ee[Ae];Cc(ye,Z,X),j.add(ye)}else Cc(Ee,Z,X),j.add(Ee)}),C=U.pop(),j},this.compileAsync=function(M,F,Z=null){const j=this.compile(M,F,Z);return new Promise(X=>{function Ee(){if(j.forEach(function(Ae){m.get(Ae).currentProgram.isReady()&&j.delete(Ae)}),j.size===0){X(M);return}setTimeout(Ee,10)}Q.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let qa=null;function wd(M){qa&&qa(M)}function Pc(){wi.stop()}function Dc(){wi.start()}const wi=new Sd;wi.setAnimationLoop(wd),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(M){qa=M,se.setAnimationLoop(M),M===null?wi.stop():wi.start()},se.addEventListener("sessionstart",Pc),se.addEventListener("sessionend",Dc),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;const Z=se.enabled===!0&&se.isPresenting===!0,j=v!==null&&(B===null||Z)&&v.begin(b,B);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(F),F=se.getCamera()),M.isScene===!0&&M.onBeforeRender(b,M,F,B),C=ce.get(M,U.length),C.init(F),U.push(C),w.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Be.setFromProjectionMatrix(w,Ln,F.reversedDepth),Oe=this.localClippingEnabled,Ie=he.init(this.clippingPlanes,Oe),y=De.get(M,P.length),y.init(),P.push(y),se.enabled===!0&&se.isPresenting===!0){const Ae=b.xr.getDepthSensingMesh();Ae!==null&&Ya(Ae,F,-1/0,b.sortObjects)}Ya(M,F,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(nt,et),$=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,$&&be.addToRenderList(y,M),this.info.render.frame++,Ie===!0&&he.beginShadows();const X=C.state.shadowsArray;if(Se.render(X,M,F),Ie===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&v.hasRenderPass())===!1){const Ae=y.opaque,ye=y.transmissive;if(C.setupLights(),F.isArrayCamera){const Pe=F.cameras;if(ye.length>0)for(let Ue=0,We=Pe.length;Ue<We;Ue++){const je=Pe[Ue];Ic(Ae,ye,M,je)}$&&be.render(M);for(let Ue=0,We=Pe.length;Ue<We;Ue++){const je=Pe[Ue];Lc(y,M,je,je.viewport)}}else ye.length>0&&Ic(Ae,ye,M,F),$&&be.render(M),Lc(y,M,F)}B!==null&&I===0&&(R.updateMultisampleRenderTarget(B),R.updateRenderTargetMipmap(B)),j&&v.end(b),M.isScene===!0&&M.onAfterRender(b,M,F),pe.resetDefaultState(),W=-1,G=null,U.pop(),U.length>0?(C=U[U.length-1],Ie===!0&&he.setGlobalState(b.clippingPlanes,C.state.camera)):C=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function Ya(M,F,Z,j){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)C.pushLight(M),M.castShadow&&C.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Be.intersectsSprite(M)){j&&H.setFromMatrixPosition(M.matrixWorld).applyMatrix4(w);const Ae=me.update(M),ye=M.material;ye.visible&&y.push(M,Ae,ye,Z,H.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Be.intersectsObject(M))){const Ae=me.update(M),ye=M.material;if(j&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),H.copy(M.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),H.copy(Ae.boundingSphere.center)),H.applyMatrix4(M.matrixWorld).applyMatrix4(w)),Array.isArray(ye)){const Pe=Ae.groups;for(let Ue=0,We=Pe.length;Ue<We;Ue++){const je=Pe[Ue],Ne=ye[je.materialIndex];Ne&&Ne.visible&&y.push(M,Ae,Ne,Z,H.z,je)}}else ye.visible&&y.push(M,Ae,ye,Z,H.z,null)}}const Ee=M.children;for(let Ae=0,ye=Ee.length;Ae<ye;Ae++)Ya(Ee[Ae],F,Z,j)}function Lc(M,F,Z,j){const{opaque:X,transmissive:Ee,transparent:Ae}=M;C.setupLightsView(Z),Ie===!0&&he.setGlobalState(b.clippingPlanes,Z),j&&ee.viewport(z.copy(j)),X.length>0&&yr(X,F,Z),Ee.length>0&&yr(Ee,F,Z),Ae.length>0&&yr(Ae,F,Z),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Ic(M,F,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[j.id]===void 0){const Ne=Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[j.id]=new Nn(1,1,{generateMipmaps:!0,type:Ne?ai:Qt,minFilter:ki,samples:Math.max(4,K.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const Ee=C.state.transmissionRenderTarget[j.id],Ae=j.viewport||z;Ee.setSize(Ae.z*b.transmissionResolutionScale,Ae.w*b.transmissionResolutionScale);const ye=b.getRenderTarget(),Pe=b.getActiveCubeFace(),Ue=b.getActiveMipmapLevel();b.setRenderTarget(Ee),b.getClearColor(oe),xe=b.getClearAlpha(),xe<1&&b.setClearColor(16777215,.5),b.clear(),$&&be.render(Z);const We=b.toneMapping;b.toneMapping=Un;const je=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),C.setupLightsView(j),Ie===!0&&he.setGlobalState(b.clippingPlanes,j),yr(M,Z,j),R.updateMultisampleRenderTarget(Ee),R.updateRenderTargetMipmap(Ee),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let lt=0,xt=F.length;lt<xt;lt++){const gt=F[lt],{object:ct,geometry:Pt,material:Le,group:Kt}=gt;if(Le.side===Jn&&ct.layers.test(j.layers)){const Qe=Le.side;Le.side=jt,Le.needsUpdate=!0,Uc(ct,Z,j,Pt,Le,Kt),Le.side=Qe,Le.needsUpdate=!0,Ne=!0}}Ne===!0&&(R.updateMultisampleRenderTarget(Ee),R.updateRenderTargetMipmap(Ee))}b.setRenderTarget(ye,Pe,Ue),b.setClearColor(oe,xe),je!==void 0&&(j.viewport=je),b.toneMapping=We}function yr(M,F,Z){const j=F.isScene===!0?F.overrideMaterial:null;for(let X=0,Ee=M.length;X<Ee;X++){const Ae=M[X],{object:ye,geometry:Pe,group:Ue}=Ae;let We=Ae.material;We.allowOverride===!0&&j!==null&&(We=j),ye.layers.test(Z.layers)&&Uc(ye,F,Z,Pe,We,Ue)}}function Uc(M,F,Z,j,X,Ee){M.onBeforeRender(b,F,Z,j,X,Ee),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(b,F,Z,j,M,Ee),X.transparent===!0&&X.side===Jn&&X.forceSinglePass===!1?(X.side=jt,X.needsUpdate=!0,b.renderBufferDirect(Z,F,j,X,M,Ee),X.side=Ti,X.needsUpdate=!0,b.renderBufferDirect(Z,F,j,X,M,Ee),X.side=Jn):b.renderBufferDirect(Z,F,j,X,M,Ee),M.onAfterRender(b,F,Z,j,X,Ee)}function br(M,F,Z){F.isScene!==!0&&(F=ie);const j=m.get(M),X=C.state.lights,Ee=C.state.shadowsArray,Ae=X.state.version,ye=le.getParameters(M,X.state,Ee,F,Z),Pe=le.getProgramCacheKey(ye);let Ue=j.programs;j.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,j.fog=F.fog;const We=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;j.envMap=k.get(M.envMap||j.environment,We),j.envMapRotation=j.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Ue===void 0&&(M.addEventListener("dispose",rt),Ue=new Map,j.programs=Ue);let je=Ue.get(Pe);if(je!==void 0){if(j.currentProgram===je&&j.lightsStateVersion===Ae)return Fc(M,ye),je}else ye.uniforms=le.getUniforms(M),M.onBeforeCompile(ye,b),je=le.acquireProgram(ye,Pe),Ue.set(Pe,je),j.uniforms=ye.uniforms;const Ne=j.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ne.clippingPlanes=he.uniform),Fc(M,ye),j.needsLights=Pd(M),j.lightsStateVersion=Ae,j.needsLights&&(Ne.ambientLightColor.value=X.state.ambient,Ne.lightProbe.value=X.state.probe,Ne.directionalLights.value=X.state.directional,Ne.directionalLightShadows.value=X.state.directionalShadow,Ne.spotLights.value=X.state.spot,Ne.spotLightShadows.value=X.state.spotShadow,Ne.rectAreaLights.value=X.state.rectArea,Ne.ltc_1.value=X.state.rectAreaLTC1,Ne.ltc_2.value=X.state.rectAreaLTC2,Ne.pointLights.value=X.state.point,Ne.pointLightShadows.value=X.state.pointShadow,Ne.hemisphereLights.value=X.state.hemi,Ne.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ne.spotLightMatrix.value=X.state.spotLightMatrix,Ne.spotLightMap.value=X.state.spotLightMap,Ne.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=je,j.uniformsList=null,je}function Nc(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=da.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Fc(M,F){const Z=m.get(M);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function Rd(M,F,Z,j,X){F.isScene!==!0&&(F=ie),R.resetTextureUnits();const Ee=F.fog,Ae=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?F.environment:null,ye=B===null?b.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Cs,Pe=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ue=k.get(j.envMap||Ae,Pe),We=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,je=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ne=!!Z.morphAttributes.position,lt=!!Z.morphAttributes.normal,xt=!!Z.morphAttributes.color;let gt=Un;j.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(gt=b.toneMapping);const ct=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Pt=ct!==void 0?ct.length:0,Le=m.get(j),Kt=C.state.lights;if(Ie===!0&&(Oe===!0||M!==G)){const bt=M===G&&j.id===W;he.setState(j,M,bt)}let Qe=!1;j.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Kt.state.version||Le.outputColorSpace!==ye||X.isBatchedMesh&&Le.batching===!1||!X.isBatchedMesh&&Le.batching===!0||X.isBatchedMesh&&Le.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Le.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Le.instancing===!1||!X.isInstancedMesh&&Le.instancing===!0||X.isSkinnedMesh&&Le.skinning===!1||!X.isSkinnedMesh&&Le.skinning===!0||X.isInstancedMesh&&Le.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Le.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Le.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Le.instancingMorph===!1&&X.morphTexture!==null||Le.envMap!==Ue||j.fog===!0&&Le.fog!==Ee||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==he.numPlanes||Le.numIntersection!==he.numIntersection)||Le.vertexAlphas!==We||Le.vertexTangents!==je||Le.morphTargets!==Ne||Le.morphNormals!==lt||Le.morphColors!==xt||Le.toneMapping!==gt||Le.morphTargetsCount!==Pt)&&(Qe=!0):(Qe=!0,Le.__version=j.version);let un=Le.currentProgram;Qe===!0&&(un=br(j,F,X));let Mn=!1,Ri=!1,Zi=!1;const ft=un.getUniforms(),wt=Le.uniforms;if(ee.useProgram(un.program)&&(Mn=!0,Ri=!0,Zi=!0),j.id!==W&&(W=j.id,Ri=!0),Mn||G!==M){ee.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ft.setValue(T,"projectionMatrix",M.projectionMatrix),ft.setValue(T,"viewMatrix",M.matrixWorldInverse);const fi=ft.map.cameraPosition;fi!==void 0&&fi.setValue(T,L.setFromMatrixPosition(M.matrixWorld)),K.logarithmicDepthBuffer&&ft.setValue(T,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ft.setValue(T,"isOrthographic",M.isOrthographicCamera===!0),G!==M&&(G=M,Ri=!0,Zi=!0)}if(Le.needsLights&&(Kt.state.directionalShadowMap.length>0&&ft.setValue(T,"directionalShadowMap",Kt.state.directionalShadowMap,R),Kt.state.spotShadowMap.length>0&&ft.setValue(T,"spotShadowMap",Kt.state.spotShadowMap,R),Kt.state.pointShadowMap.length>0&&ft.setValue(T,"pointShadowMap",Kt.state.pointShadowMap,R)),X.isSkinnedMesh){ft.setOptional(T,X,"bindMatrix"),ft.setOptional(T,X,"bindMatrixInverse");const bt=X.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),ft.setValue(T,"boneTexture",bt.boneTexture,R))}X.isBatchedMesh&&(ft.setOptional(T,X,"batchingTexture"),ft.setValue(T,"batchingTexture",X._matricesTexture,R),ft.setOptional(T,X,"batchingIdTexture"),ft.setValue(T,"batchingIdTexture",X._indirectTexture,R),ft.setOptional(T,X,"batchingColorTexture"),X._colorsTexture!==null&&ft.setValue(T,"batchingColorTexture",X._colorsTexture,R));const ui=Z.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&Te.update(X,Z,un),(Ri||Le.receiveShadow!==X.receiveShadow)&&(Le.receiveShadow=X.receiveShadow,ft.setValue(T,"receiveShadow",X.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&F.environment!==null&&(wt.envMapIntensity.value=F.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=TM()),Ri&&(ft.setValue(T,"toneMappingExposure",b.toneMappingExposure),Le.needsLights&&Cd(wt,Zi),Ee&&j.fog===!0&&we.refreshFogUniforms(wt,Ee),we.refreshMaterialUniforms(wt,j,ze,_e,C.state.transmissionRenderTarget[M.id]),da.upload(T,Nc(Le),wt,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(da.upload(T,Nc(Le),wt,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ft.setValue(T,"center",X.center),ft.setValue(T,"modelViewMatrix",X.modelViewMatrix),ft.setValue(T,"normalMatrix",X.normalMatrix),ft.setValue(T,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const bt=j.uniformsGroups;for(let fi=0,Ji=bt.length;fi<Ji;fi++){const Oc=bt[fi];Re.update(Oc,un),Re.bind(Oc,un)}}return un}function Cd(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Pd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(M,F,Z){const j=m.get(M);j.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),m.get(M.texture).__webglTexture=F,m.get(M.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Z,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const Z=m.get(M);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0};const Dd=T.createFramebuffer();this.setRenderTarget=function(M,F=0,Z=0){B=M,D=F,I=Z;let j=null,X=!1,Ee=!1;if(M){const ye=m.get(M);if(ye.__useDefaultFramebuffer!==void 0){ee.bindFramebuffer(T.FRAMEBUFFER,ye.__webglFramebuffer),z.copy(M.viewport),O.copy(M.scissor),ne=M.scissorTest,ee.viewport(z),ee.scissor(O),ee.setScissorTest(ne),W=-1;return}else if(ye.__webglFramebuffer===void 0)R.setupRenderTarget(M);else if(ye.__hasExternalTextures)R.rebindTextures(M,m.get(M.texture).__webglTexture,m.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const We=M.depthTexture;if(ye.__boundDepthTexture!==We){if(We!==null&&m.has(We)&&(M.width!==We.image.width||M.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(M)}}const Pe=M.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Ee=!0);const Ue=m.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?j=Ue[F][Z]:j=Ue[F],X=!0):M.samples>0&&R.useMultisampledRTT(M)===!1?j=m.get(M).__webglMultisampledFramebuffer:Array.isArray(Ue)?j=Ue[Z]:j=Ue,z.copy(M.viewport),O.copy(M.scissor),ne=M.scissorTest}else z.copy(re).multiplyScalar(ze).floor(),O.copy(fe).multiplyScalar(ze).floor(),ne=de;if(Z!==0&&(j=Dd),ee.bindFramebuffer(T.FRAMEBUFFER,j)&&ee.drawBuffers(M,j),ee.viewport(z),ee.scissor(O),ee.setScissorTest(ne),X){const ye=m.get(M.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+F,ye.__webglTexture,Z)}else if(Ee){const ye=F;for(let Pe=0;Pe<M.textures.length;Pe++){const Ue=m.get(M.textures[Pe]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Pe,Ue.__webglTexture,Z,ye)}}else if(M!==null&&Z!==0){const ye=m.get(M.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ye.__webglTexture,Z)}W=-1},this.readRenderTargetPixels=function(M,F,Z,j,X,Ee,Ae,ye=0){if(!(M&&M.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=m.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){ee.bindFramebuffer(T.FRAMEBUFFER,Pe);try{const Ue=M.textures[ye],We=Ue.format,je=Ue.type;if(M.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+ye),!K.textureFormatReadable(We)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(je)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-j&&Z>=0&&Z<=M.height-X&&T.readPixels(F,Z,j,X,ge.convert(We),ge.convert(je),Ee)}finally{const Ue=B!==null?m.get(B).__webglFramebuffer:null;ee.bindFramebuffer(T.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(M,F,Z,j,X,Ee,Ae,ye=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=m.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe)if(F>=0&&F<=M.width-j&&Z>=0&&Z<=M.height-X){ee.bindFramebuffer(T.FRAMEBUFFER,Pe);const Ue=M.textures[ye],We=Ue.format,je=Ue.type;if(M.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+ye),!K.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ne),T.bufferData(T.PIXEL_PACK_BUFFER,Ee.byteLength,T.STREAM_READ),T.readPixels(F,Z,j,X,ge.convert(We),ge.convert(je),0);const lt=B!==null?m.get(B).__webglFramebuffer:null;ee.bindFramebuffer(T.FRAMEBUFFER,lt);const xt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await W_(T,xt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ne),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Ee),T.deleteBuffer(Ne),T.deleteSync(xt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,Z=0){const j=Math.pow(2,-Z),X=Math.floor(M.image.width*j),Ee=Math.floor(M.image.height*j),Ae=F!==null?F.x:0,ye=F!==null?F.y:0;R.setTexture2D(M,0),T.copyTexSubImage2D(T.TEXTURE_2D,Z,0,0,Ae,ye,X,Ee),ee.unbindTexture()};const Ld=T.createFramebuffer(),Id=T.createFramebuffer();this.copyTextureToTexture=function(M,F,Z=null,j=null,X=0,Ee=0){let Ae,ye,Pe,Ue,We,je,Ne,lt,xt;const gt=M.isCompressedTexture?M.mipmaps[Ee]:M.image;if(Z!==null)Ae=Z.max.x-Z.min.x,ye=Z.max.y-Z.min.y,Pe=Z.isBox3?Z.max.z-Z.min.z:1,Ue=Z.min.x,We=Z.min.y,je=Z.isBox3?Z.min.z:0;else{const wt=Math.pow(2,-X);Ae=Math.floor(gt.width*wt),ye=Math.floor(gt.height*wt),M.isDataArrayTexture?Pe=gt.depth:M.isData3DTexture?Pe=Math.floor(gt.depth*wt):Pe=1,Ue=0,We=0,je=0}j!==null?(Ne=j.x,lt=j.y,xt=j.z):(Ne=0,lt=0,xt=0);const ct=ge.convert(F.format),Pt=ge.convert(F.type);let Le;F.isData3DTexture?(R.setTexture3D(F,0),Le=T.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),Le=T.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),Le=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,F.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,F.unpackAlignment);const Kt=T.getParameter(T.UNPACK_ROW_LENGTH),Qe=T.getParameter(T.UNPACK_IMAGE_HEIGHT),un=T.getParameter(T.UNPACK_SKIP_PIXELS),Mn=T.getParameter(T.UNPACK_SKIP_ROWS),Ri=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,gt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,gt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ue),T.pixelStorei(T.UNPACK_SKIP_ROWS,We),T.pixelStorei(T.UNPACK_SKIP_IMAGES,je);const Zi=M.isDataArrayTexture||M.isData3DTexture,ft=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const wt=m.get(M),ui=m.get(F),bt=m.get(wt.__renderTarget),fi=m.get(ui.__renderTarget);ee.bindFramebuffer(T.READ_FRAMEBUFFER,bt.__webglFramebuffer),ee.bindFramebuffer(T.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let Ji=0;Ji<Pe;Ji++)Zi&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,m.get(M).__webglTexture,X,je+Ji),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,m.get(F).__webglTexture,Ee,xt+Ji)),T.blitFramebuffer(Ue,We,Ae,ye,Ne,lt,Ae,ye,T.DEPTH_BUFFER_BIT,T.NEAREST);ee.bindFramebuffer(T.READ_FRAMEBUFFER,null),ee.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(X!==0||M.isRenderTargetTexture||m.has(M)){const wt=m.get(M),ui=m.get(F);ee.bindFramebuffer(T.READ_FRAMEBUFFER,Ld),ee.bindFramebuffer(T.DRAW_FRAMEBUFFER,Id);for(let bt=0;bt<Pe;bt++)Zi?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,wt.__webglTexture,X,je+bt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,wt.__webglTexture,X),ft?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ui.__webglTexture,Ee,xt+bt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ui.__webglTexture,Ee),X!==0?T.blitFramebuffer(Ue,We,Ae,ye,Ne,lt,Ae,ye,T.COLOR_BUFFER_BIT,T.NEAREST):ft?T.copyTexSubImage3D(Le,Ee,Ne,lt,xt+bt,Ue,We,Ae,ye):T.copyTexSubImage2D(Le,Ee,Ne,lt,Ue,We,Ae,ye);ee.bindFramebuffer(T.READ_FRAMEBUFFER,null),ee.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else ft?M.isDataTexture||M.isData3DTexture?T.texSubImage3D(Le,Ee,Ne,lt,xt,Ae,ye,Pe,ct,Pt,gt.data):F.isCompressedArrayTexture?T.compressedTexSubImage3D(Le,Ee,Ne,lt,xt,Ae,ye,Pe,ct,gt.data):T.texSubImage3D(Le,Ee,Ne,lt,xt,Ae,ye,Pe,ct,Pt,gt):M.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Ee,Ne,lt,Ae,ye,ct,Pt,gt.data):M.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Ee,Ne,lt,gt.width,gt.height,ct,gt.data):T.texSubImage2D(T.TEXTURE_2D,Ee,Ne,lt,Ae,ye,ct,Pt,gt);T.pixelStorei(T.UNPACK_ROW_LENGTH,Kt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Qe),T.pixelStorei(T.UNPACK_SKIP_PIXELS,un),T.pixelStorei(T.UNPACK_SKIP_ROWS,Mn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ri),Ee===0&&F.generateMipmaps&&T.generateMipmap(Le),ee.unbindTexture()},this.initRenderTarget=function(M){m.get(M).__webglFramebuffer===void 0&&R.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?R.setTextureCube(M,0):M.isData3DTexture?R.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?R.setTexture2DArray(M,0):R.setTexture2D(M,0),ee.unbindTexture()},this.resetState=function(){D=0,I=0,B=null,ee.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}class lE extends tn{constructor(e=50,t=10,i=!0,s=!0,r=!0,a=!0,o=!0){const l=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,3,16,17,18,7,19,20,21,11,22,23,24,15,25,26,27,18,28,29,30,21,31,32,33,24,34,35,36,27,37,38,39,30,40,41,0,33,42,43,4,36,44,45,8,39,46,47,12,12,13,14,15,48,49,50,51,52,53,54,55,56,57,58,59,15,25,26,27,51,60,61,62,55,63,64,65,59,66,67,68,27,37,38,39,62,69,70,71,65,72,73,74,68,75,76,77,39,46,47,12,71,78,79,48,74,80,81,52,77,82,83,56,56,57,58,59,84,85,86,87,88,89,90,91,92,93,94,95,59,66,67,68,87,96,97,98,91,99,100,101,95,102,103,104,68,75,76,77,98,105,106,107,101,108,109,110,104,111,112,113,77,82,83,56,107,114,115,84,110,116,117,88,113,118,119,92,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,123,136,137,120,127,138,139,124,131,140,141,128,135,142,143,132,132,133,134,135,144,145,146,147,148,149,150,151,68,152,153,154,135,142,143,132,147,155,156,144,151,157,158,148,154,159,160,68,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,164,177,178,161,168,179,180,165,172,181,182,169,176,183,184,173,173,174,175,176,185,186,187,188,189,190,191,192,193,194,195,196,176,183,184,173,188,197,198,185,192,199,200,189,196,201,202,193,203,203,203,203,204,205,206,207,208,208,208,208,209,210,211,212,203,203,203,203,207,213,214,215,208,208,208,208,212,216,217,218,203,203,203,203,215,219,220,221,208,208,208,208,218,222,223,224,203,203,203,203,221,225,226,204,208,208,208,208,224,227,228,209,209,210,211,212,229,230,231,232,233,234,235,236,237,238,239,240,212,216,217,218,232,241,242,243,236,244,245,246,240,247,248,249,218,222,223,224,243,250,251,252,246,253,254,255,249,256,257,258,224,227,228,209,252,259,260,229,255,261,262,233,258,263,264,237,265,265,265,265,266,267,268,269,270,271,272,273,92,119,118,113,265,265,265,265,269,274,275,276,273,277,278,279,113,112,111,104,265,265,265,265,276,280,281,282,279,283,284,285,104,103,102,95,265,265,265,265,282,286,287,266,285,288,289,270,95,94,93,92],c=[1.4,0,2.4,1.4,-.784,2.4,.784,-1.4,2.4,0,-1.4,2.4,1.3375,0,2.53125,1.3375,-.749,2.53125,.749,-1.3375,2.53125,0,-1.3375,2.53125,1.4375,0,2.53125,1.4375,-.805,2.53125,.805,-1.4375,2.53125,0,-1.4375,2.53125,1.5,0,2.4,1.5,-.84,2.4,.84,-1.5,2.4,0,-1.5,2.4,-.784,-1.4,2.4,-1.4,-.784,2.4,-1.4,0,2.4,-.749,-1.3375,2.53125,-1.3375,-.749,2.53125,-1.3375,0,2.53125,-.805,-1.4375,2.53125,-1.4375,-.805,2.53125,-1.4375,0,2.53125,-.84,-1.5,2.4,-1.5,-.84,2.4,-1.5,0,2.4,-1.4,.784,2.4,-.784,1.4,2.4,0,1.4,2.4,-1.3375,.749,2.53125,-.749,1.3375,2.53125,0,1.3375,2.53125,-1.4375,.805,2.53125,-.805,1.4375,2.53125,0,1.4375,2.53125,-1.5,.84,2.4,-.84,1.5,2.4,0,1.5,2.4,.784,1.4,2.4,1.4,.784,2.4,.749,1.3375,2.53125,1.3375,.749,2.53125,.805,1.4375,2.53125,1.4375,.805,2.53125,.84,1.5,2.4,1.5,.84,2.4,1.75,0,1.875,1.75,-.98,1.875,.98,-1.75,1.875,0,-1.75,1.875,2,0,1.35,2,-1.12,1.35,1.12,-2,1.35,0,-2,1.35,2,0,.9,2,-1.12,.9,1.12,-2,.9,0,-2,.9,-.98,-1.75,1.875,-1.75,-.98,1.875,-1.75,0,1.875,-1.12,-2,1.35,-2,-1.12,1.35,-2,0,1.35,-1.12,-2,.9,-2,-1.12,.9,-2,0,.9,-1.75,.98,1.875,-.98,1.75,1.875,0,1.75,1.875,-2,1.12,1.35,-1.12,2,1.35,0,2,1.35,-2,1.12,.9,-1.12,2,.9,0,2,.9,.98,1.75,1.875,1.75,.98,1.875,1.12,2,1.35,2,1.12,1.35,1.12,2,.9,2,1.12,.9,2,0,.45,2,-1.12,.45,1.12,-2,.45,0,-2,.45,1.5,0,.225,1.5,-.84,.225,.84,-1.5,.225,0,-1.5,.225,1.5,0,.15,1.5,-.84,.15,.84,-1.5,.15,0,-1.5,.15,-1.12,-2,.45,-2,-1.12,.45,-2,0,.45,-.84,-1.5,.225,-1.5,-.84,.225,-1.5,0,.225,-.84,-1.5,.15,-1.5,-.84,.15,-1.5,0,.15,-2,1.12,.45,-1.12,2,.45,0,2,.45,-1.5,.84,.225,-.84,1.5,.225,0,1.5,.225,-1.5,.84,.15,-.84,1.5,.15,0,1.5,.15,1.12,2,.45,2,1.12,.45,.84,1.5,.225,1.5,.84,.225,.84,1.5,.15,1.5,.84,.15,-1.6,0,2.025,-1.6,-.3,2.025,-1.5,-.3,2.25,-1.5,0,2.25,-2.3,0,2.025,-2.3,-.3,2.025,-2.5,-.3,2.25,-2.5,0,2.25,-2.7,0,2.025,-2.7,-.3,2.025,-3,-.3,2.25,-3,0,2.25,-2.7,0,1.8,-2.7,-.3,1.8,-3,-.3,1.8,-3,0,1.8,-1.5,.3,2.25,-1.6,.3,2.025,-2.5,.3,2.25,-2.3,.3,2.025,-3,.3,2.25,-2.7,.3,2.025,-3,.3,1.8,-2.7,.3,1.8,-2.7,0,1.575,-2.7,-.3,1.575,-3,-.3,1.35,-3,0,1.35,-2.5,0,1.125,-2.5,-.3,1.125,-2.65,-.3,.9375,-2.65,0,.9375,-2,-.3,.9,-1.9,-.3,.6,-1.9,0,.6,-3,.3,1.35,-2.7,.3,1.575,-2.65,.3,.9375,-2.5,.3,1.125,-1.9,.3,.6,-2,.3,.9,1.7,0,1.425,1.7,-.66,1.425,1.7,-.66,.6,1.7,0,.6,2.6,0,1.425,2.6,-.66,1.425,3.1,-.66,.825,3.1,0,.825,2.3,0,2.1,2.3,-.25,2.1,2.4,-.25,2.025,2.4,0,2.025,2.7,0,2.4,2.7,-.25,2.4,3.3,-.25,2.4,3.3,0,2.4,1.7,.66,.6,1.7,.66,1.425,3.1,.66,.825,2.6,.66,1.425,2.4,.25,2.025,2.3,.25,2.1,3.3,.25,2.4,2.7,.25,2.4,2.8,0,2.475,2.8,-.25,2.475,3.525,-.25,2.49375,3.525,0,2.49375,2.9,0,2.475,2.9,-.15,2.475,3.45,-.15,2.5125,3.45,0,2.5125,2.8,0,2.4,2.8,-.15,2.4,3.2,-.15,2.4,3.2,0,2.4,3.525,.25,2.49375,2.8,.25,2.475,3.45,.15,2.5125,2.9,.15,2.475,3.2,.15,2.4,2.8,.15,2.4,0,0,3.15,.8,0,3.15,.8,-.45,3.15,.45,-.8,3.15,0,-.8,3.15,0,0,2.85,.2,0,2.7,.2,-.112,2.7,.112,-.2,2.7,0,-.2,2.7,-.45,-.8,3.15,-.8,-.45,3.15,-.8,0,3.15,-.112,-.2,2.7,-.2,-.112,2.7,-.2,0,2.7,-.8,.45,3.15,-.45,.8,3.15,0,.8,3.15,-.2,.112,2.7,-.112,.2,2.7,0,.2,2.7,.45,.8,3.15,.8,.45,3.15,.112,.2,2.7,.2,.112,2.7,.4,0,2.55,.4,-.224,2.55,.224,-.4,2.55,0,-.4,2.55,1.3,0,2.55,1.3,-.728,2.55,.728,-1.3,2.55,0,-1.3,2.55,1.3,0,2.4,1.3,-.728,2.4,.728,-1.3,2.4,0,-1.3,2.4,-.224,-.4,2.55,-.4,-.224,2.55,-.4,0,2.55,-.728,-1.3,2.55,-1.3,-.728,2.55,-1.3,0,2.55,-.728,-1.3,2.4,-1.3,-.728,2.4,-1.3,0,2.4,-.4,.224,2.55,-.224,.4,2.55,0,.4,2.55,-1.3,.728,2.55,-.728,1.3,2.55,0,1.3,2.55,-1.3,.728,2.4,-.728,1.3,2.4,0,1.3,2.4,.224,.4,2.55,.4,.224,2.55,.728,1.3,2.55,1.3,.728,2.55,.728,1.3,2.4,1.3,.728,2.4,0,0,0,1.425,0,0,1.425,.798,0,.798,1.425,0,0,1.425,0,1.5,0,.075,1.5,.84,.075,.84,1.5,.075,0,1.5,.075,-.798,1.425,0,-1.425,.798,0,-1.425,0,0,-.84,1.5,.075,-1.5,.84,.075,-1.5,0,.075,-1.425,-.798,0,-.798,-1.425,0,0,-1.425,0,-1.5,-.84,.075,-.84,-1.5,.075,0,-1.5,.075,.798,-1.425,0,1.425,-.798,0,.84,-1.5,.075,1.5,-.84,.075];super(),t=Math.max(2,Math.floor(t));const u=1.3,f=3.15*(o?1:u)/2,p=e/f;let g=i?(8*t-4)*t:0;g+=s?(16*t-4)*t:0,g+=r?40*t*t:0;const S=new Uint32Array(g*3);let _=i?4:0;_+=s?8:0,_+=r?20:0,_*=(t+1)*(t+1);const d=new Float32Array(_*3),E=new Float32Array(_*3),A=new Float32Array(_*2),y=new ot;y.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0);const C=[],P=[],U=[],v=[],b=[],Y=[],D=[],I=[],B=[],W=new V;let G,z,O,ne,oe=0,xe=0;const ve=new V,_e=new ot,ze=new ot,nt=new mt,et=new mt,re=new mt,fe=new mt,de=new V,Be=new V,Ie=y.clone();Ie.transpose();const Oe=(Q,K,ee)=>!(d[Q*3]===d[K*3]&&d[Q*3+1]===d[K*3+1]&&d[Q*3+2]===d[K*3+2]||d[Q*3]===d[ee*3]&&d[Q*3+1]===d[ee*3+1]&&d[Q*3+2]===d[ee*3+2]||d[K*3]===d[ee*3]&&d[K*3+1]===d[ee*3+1]&&d[K*3+2]===d[ee*3+2]);for(let Q=0;Q<3;Q++)Y[Q]=new ot;const w=r?0:20,L=i?32:28,H=t+1;let ie=0,$=0,te=0,T=0,ae=0;for(let Q=w;Q<L;Q++)if(s||Q<20||Q>=28){for(let K=0;K<3;K++){for(let ee=0;ee<4;ee++)for(let x=0;x<4;x++)C[x*4+ee]=c[l[Q*16+ee*4+x]*3+K],a&&Q>=20&&Q<28&&K!==2&&(C[x*4+ee]*=1.077),!o&&K===2&&(C[x*4+ee]*=u);_e.set(C[0],C[1],C[2],C[3],C[4],C[5],C[6],C[7],C[8],C[9],C[10],C[11],C[12],C[13],C[14],C[15]),ze.multiplyMatrices(_e,y),Y[K].multiplyMatrices(Ie,ze)}for(let K=0;K<=t;K++){const ee=K/t;for(let x=0;x<=t;x++){const m=x/t;for(ne=4,z=O=1;ne--;)P[ne]=z,U[ne]=O,z*=ee,O*=m,ne===3?(v[ne]=b[ne]=0,oe=xe=1):(v[ne]=oe*(3-ne),b[ne]=xe*(3-ne),oe*=ee,xe*=m);nt.fromArray(P),et.fromArray(U),re.fromArray(v),fe.fromArray(b);for(let R=0;R<3;R++)G=nt.clone(),G.applyMatrix4(Y[R]),D[R]=G.dot(et),G=re.clone(),G.applyMatrix4(Y[R]),I[R]=G.dot(et),G=nt.clone(),G.applyMatrix4(Y[R]),B[R]=G.dot(fe);de.fromArray(I),Be.fromArray(B),W.crossVectors(Be,de),W.normalize(),D[0]===0&&D[1]===0?ve.set(0,D[2]>f?1:-1,0):ve.set(W.x,W.z,-W.y),d[$++]=p*D[0],d[$++]=p*(D[2]-f),d[$++]=-p*D[1],E[te++]=ve.x,E[te++]=ve.y,E[te++]=ve.z,A[T++]=1-m,A[T++]=1-ee}}for(let K=0;K<t;K++)for(let ee=0;ee<t;ee++){const x=ie*H*H+K*H+ee,m=x+1,R=m+H,k=x+H;Oe(x,m,R)&&(S[ae++]=x,S[ae++]=m,S[ae++]=R),Oe(x,R,k)&&(S[ae++]=x,S[ae++]=R,S[ae++]=k)}ie++}this.setIndex(new Wt(S,1)),this.setAttribute("position",new Wt(d,3)),this.setAttribute("normal",new Wt(E,3)),this.setAttribute("uv",new Wt(A,2)),this.computeBoundingSphere()}}const wf={type:"change"},Rc={type:"start"},Ad={type:"end"},na=new Mr,Rf=new Si,AM=Math.cos(70*Y_.DEG2RAD),St=new V,qt=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Go=1e-6;class cE extends Lg{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:ms.ROTATE,TWO:ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new Ai,this._lastTargetPosition=new V,this._quat=new Ai().setFromUnitVectors(e.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tf,this._sphericalDelta=new tf,this._scale=1,this._panOffset=new V,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new V,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=RM.bind(this),this._onPointerDown=wM.bind(this),this._onPointerUp=CM.bind(this),this._onContextMenu=FM.bind(this),this._onMouseWheel=LM.bind(this),this._onKeyDown=IM.bind(this),this._onTouchStart=UM.bind(this),this._onTouchMove=NM.bind(this),this._onMouseDown=PM.bind(this),this._onMouseMove=DM.bind(this),this._interceptControlDown=OM.bind(this),this._interceptControlUp=BM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wf),this.update(),this.state=ut.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;St.copy(t).sub(this.target),St.applyQuaternion(this._quat),this._spherical.setFromVector3(St),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=qt:i>Math.PI&&(i-=qt),s<-Math.PI?s+=qt:s>Math.PI&&(s-=qt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(St.setFromSpherical(this._spherical),St.applyQuaternion(this._quatInverse),t.copy(this.target).add(St),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=St.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new V(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new V(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=St.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(na.origin.copy(this.object.position),na.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(na.direction))<AM?this.object.lookAt(this.target):(Rf.setFromNormalAndCoplanarPoint(this.object.up,this.target),na.intersectPlane(Rf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Go||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Go||this._lastTargetPosition.distanceToSquared(this.target)>Go?(this.dispatchEvent(wf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qt/60*this.autoRotateSpeed*e:qt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){St.setFromMatrixColumn(t,0),St.multiplyScalar(-e),this._panOffset.add(St)}_panUp(e,t){this.screenSpacePanning===!0?St.setFromMatrixColumn(t,1):(St.setFromMatrixColumn(t,0),St.crossVectors(this.object.up,St)),St.multiplyScalar(e),this._panOffset.add(St)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;St.copy(s).sub(this.target);let r=St.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function wM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function RM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function CM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ad),this.state=ut.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function PM(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ut.DOLLY;break;case Ms.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ut.ROTATE}break;case Ms.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Rc)}function DM(n){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function LM(n){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(n.preventDefault(),this.dispatchEvent(Rc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Ad))}function IM(n){this.enabled!==!1&&this._handleKeyDown(n)}function UM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ms.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ut.TOUCH_ROTATE;break;case ms.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case ms.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ut.TOUCH_DOLLY_PAN;break;case ms.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Rc)}function NM(n){switch(this._trackPointer(n),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ut.NONE}}function FM(n){this.enabled!==!1&&n.preventDefault()}function OM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function BM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}export{lE as $,jh as A,tn as B,$e as C,nE as D,an as E,ud as F,Lr as G,fl as H,V as I,rd as J,Es as K,Cs as L,dd as M,Ct as N,cE as O,pn as P,pd as Q,_n as R,JM as S,sE as T,Mg as U,Xe as V,oE as W,Mu as X,gg as Y,rE as Z,aE as _,Qo as a,tE as a0,Pm as a1,_h as a2,Qa as a3,ec as a4,zM as a5,YM as a6,kM as a7,kt as a8,Tp as a9,_p as aa,jM as ab,KM as ac,Jt as ad,GM as ae,$M as af,vm as ag,el as ah,qM as ai,ZM as aj,Oh as b,WM as c,HM as d,XM as e,Sm as f,oc as g,ka as h,li as i,iE as j,Wt as k,xg as l,QM as m,eE as n,ph as o,Bn as p,wc as q,VM as r,hg as s,qd as t,Dn as u,Nn as v,Ft as w,Jn as x,Me as y,Bt as z};
