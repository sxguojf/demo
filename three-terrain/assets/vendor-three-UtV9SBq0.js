/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sr="170",ii={ROTATE:0,DOLLY:1,PAN:2},ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xl=0,ga=1,Ml=2,No=1,El=2,tn=3,yn=0,bt=1,qt=2,En=0,ri=1,va=2,xa=3,Ma=4,Sl=5,In=100,yl=101,Tl=102,Al=103,bl=104,wl=200,Rl=201,Cl=202,Pl=203,cs=204,hs=205,Dl=206,Ll=207,Ul=208,Il=209,Nl=210,Fl=211,Ol=212,Bl=213,zl=214,us=0,fs=1,ds=2,oi=3,ps=4,ms=5,_s=6,gs=7,Fo=0,Hl=1,Gl=2,Sn=0,kl=1,Vl=2,Wl=3,Xl=4,ql=5,Yl=6,jl=7,Oo=300,li=301,ci=302,vs=303,xs=304,yr=306,mr=1e3,xn=1001,_r=1002,Ft=1003,Bo=1004,Ai=1005,Vt=1006,lr=1007,Mn=1008,ln=1009,zo=1010,Ho=1011,Di=1012,Ks=1013,Fn=1014,rn=1015,Ui=1016,$s=1017,Zs=1018,hi=1020,Go=35902,ko=1021,Vo=1022,Nt=1023,Wo=1024,Xo=1025,si=1026,ui=1027,qo=1028,Js=1029,Yo=1030,Qs=1031,ea=1033,cr=33776,hr=33777,ur=33778,fr=33779,Ms=35840,Es=35841,Ss=35842,ys=35843,Ts=36196,As=37492,bs=37496,ws=37808,Rs=37809,Cs=37810,Ps=37811,Ds=37812,Ls=37813,Us=37814,Is=37815,Ns=37816,Fs=37817,Os=37818,Bs=37819,zs=37820,Hs=37821,dr=36492,Gs=36494,ks=36495,jo=36283,Vs=36284,Ws=36285,Xs=36286,Kl=2300,$l=2301,Zl=3200,Jl=3201,Ko=0,Ql=1,nn="",Pt="srgb",di="srgb-linear",Tr="linear",tt="srgb",Hn=7680,Ea=519,ec=512,tc=513,nc=514,$o=515,ic=516,rc=517,sc=518,ac=519,Sa=35044,ya="300 es",sn=2e3,gr=2001;class Bn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ta=1234567;const Ci=Math.PI/180,Li=180/Math.PI;function pi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function xt(i,e,t){return Math.max(e,Math.min(t,i))}function ta(i,e){return(i%e+e)%e}function oc(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function lc(i,e,t){return i!==e?(t-i)/(e-i):0}function Pi(i,e,t){return(1-t)*i+t*e}function cc(i,e,t,n){return Pi(i,e,1-Math.exp(-t*n))}function hc(i,e=1){return e-Math.abs(ta(i,e*2)-e)}function uc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function fc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function dc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function pc(i,e){return i+Math.random()*(e-i)}function mc(i){return i*(.5-Math.random())}function _c(i){i!==void 0&&(Ta=i);let e=Ta+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gc(i){return i*Ci}function vc(i){return i*Li}function xc(i){return(i&i-1)===0&&i!==0}function Mc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ec(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sc(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),p=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),m=s((n-e)/2),M=a((n-e)/2);switch(r){case"XYX":i.set(o*p,l*f,l*d,o*c);break;case"YZY":i.set(l*d,o*p,l*f,o*c);break;case"ZXZ":i.set(l*f,l*d,o*p,o*c);break;case"XZX":i.set(o*p,l*M,l*m,o*c);break;case"YXY":i.set(l*m,o*p,l*M,o*c);break;case"ZYZ":i.set(l*M,l*m,o*p,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vr={DEG2RAD:Ci,RAD2DEG:Li,generateUUID:pi,clamp:xt,euclideanModulo:ta,mapLinear:oc,inverseLerp:lc,lerp:Pi,damp:cc,pingpong:hc,smoothstep:uc,smootherstep:fc,randInt:dc,randFloat:pc,randFloatSpread:mc,seededRandom:_c,degToRad:gc,radToDeg:vc,isPowerOfTwo:xc,ceilPowerOfTwo:Mc,floorPowerOfTwo:Ec,setQuaternionFromProperEuler:Sc,normalize:Et,denormalize:ei};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,n,r,s,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=t,p[4]=s,p[5]=l,p[6]=n,p[7]=a,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],p=n[4],f=n[7],d=n[2],m=n[5],M=n[8],_=r[0],u=r[3],h=r[6],S=r[1],A=r[4],g=r[7],T=r[2],E=r[5],y=r[8];return s[0]=a*_+o*S+l*T,s[3]=a*u+o*A+l*E,s[6]=a*h+o*g+l*y,s[1]=c*_+p*S+f*T,s[4]=c*u+p*A+f*E,s[7]=c*h+p*g+f*y,s[2]=d*_+m*S+M*T,s[5]=d*u+m*A+M*E,s[8]=d*h+m*g+M*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8];return t*a*p-t*o*c-n*s*p+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8],f=p*a-o*c,d=o*l-p*s,m=c*s-a*l,M=t*f+n*d+r*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/M;return e[0]=f*_,e[1]=(r*c-p*n)*_,e[2]=(o*n-r*a)*_,e[3]=d*_,e[4]=(p*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Pr.makeScale(e,t)),this}rotate(e){return this.premultiply(Pr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pr=new Ve;function Zo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yc(){const i=xr("canvas");return i.style.display="block",i}const Aa={};function bi(i){i in Aa||(Aa[i]=!0,console.warn(i))}function Tc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Ac(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function bc(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const je={enabled:!0,workingColorSpace:di,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===tt&&(i.r=on(i.r),i.g=on(i.g),i.b=on(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===tt&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===nn?Tr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function on(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ba=[.64,.33,.3,.6,.15,.06],wa=[.2126,.7152,.0722],Ra=[.3127,.329],Ca=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pa=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[di]:{primaries:ba,whitePoint:Ra,transfer:Tr,toXYZ:Ca,fromXYZ:Pa,luminanceCoefficients:wa,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:ba,whitePoint:Ra,transfer:tt,toXYZ:Ca,fromXYZ:Pa,luminanceCoefficients:wa,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}});let Gn;class wc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gn===void 0&&(Gn=xr("canvas")),Gn.width=e.width,Gn.height=e.height;const n=Gn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=on(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(on(t[n]/255)*255):t[n]=on(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rc=0;class na{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Dr(r[a].image)):s.push(Dr(r[a]))}else s=Dr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Dr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cc=0;class Mt extends Bn{constructor(e=Mt.DEFAULT_IMAGE,t=Mt.DEFAULT_MAPPING,n=xn,r=xn,s=Vt,a=Mn,o=Nt,l=ln,c=Mt.DEFAULT_ANISOTROPY,p=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=pi(),this.name="",this.source=new na(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mr:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case _r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mr:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case _r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=Oo;Mt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],p=l[4],f=l[8],d=l[1],m=l[5],M=l[9],_=l[2],u=l[6],h=l[10];if(Math.abs(p-d)<.01&&Math.abs(f-_)<.01&&Math.abs(M-u)<.01){if(Math.abs(p+d)<.1&&Math.abs(f+_)<.1&&Math.abs(M+u)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,g=(m+1)/2,T=(h+1)/2,E=(p+d)/4,y=(f+_)/4,w=(M+u)/4;return A>g&&A>T?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=E/n,s=y/n):g>T?g<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(g),n=E/r,s=w/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=y/s,r=w/s),this.set(n,r,s,t),this}let S=Math.sqrt((u-M)*(u-M)+(f-_)*(f-_)+(d-p)*(d-p));return Math.abs(S)<.001&&(S=1),this.x=(u-M)/S,this.y=(f-_)/S,this.z=(d-p)/S,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pc extends Bn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Mt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new na(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends Pc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jo extends Mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dc extends Mt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],p=n[r+2],f=n[r+3];const d=s[a+0],m=s[a+1],M=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=p,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=M,e[t+3]=_;return}if(f!==_||l!==d||c!==m||p!==M){let u=1-o;const h=l*d+c*m+p*M+f*_,S=h>=0?1:-1,A=1-h*h;if(A>Number.EPSILON){const T=Math.sqrt(A),E=Math.atan2(T,h*S);u=Math.sin(u*E)/T,o=Math.sin(o*E)/T}const g=o*S;if(l=l*u+d*g,c=c*u+m*g,p=p*u+M*g,f=f*u+_*g,u===1-o){const T=1/Math.sqrt(l*l+c*c+p*p+f*f);l*=T,c*=T,p*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=p,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],p=n[r+3],f=s[a],d=s[a+1],m=s[a+2],M=s[a+3];return e[t]=o*M+p*f+l*m-c*d,e[t+1]=l*M+p*d+c*f-o*m,e[t+2]=c*M+p*m+o*d-l*f,e[t+3]=p*M-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),p=o(r/2),f=o(s/2),d=l(n/2),m=l(r/2),M=l(s/2);switch(a){case"XYZ":this._x=d*p*f+c*m*M,this._y=c*m*f-d*p*M,this._z=c*p*M+d*m*f,this._w=c*p*f-d*m*M;break;case"YXZ":this._x=d*p*f+c*m*M,this._y=c*m*f-d*p*M,this._z=c*p*M-d*m*f,this._w=c*p*f+d*m*M;break;case"ZXY":this._x=d*p*f-c*m*M,this._y=c*m*f+d*p*M,this._z=c*p*M+d*m*f,this._w=c*p*f-d*m*M;break;case"ZYX":this._x=d*p*f-c*m*M,this._y=c*m*f+d*p*M,this._z=c*p*M-d*m*f,this._w=c*p*f+d*m*M;break;case"YZX":this._x=d*p*f+c*m*M,this._y=c*m*f+d*p*M,this._z=c*p*M-d*m*f,this._w=c*p*f-d*m*M;break;case"XZY":this._x=d*p*f-c*m*M,this._y=c*m*f-d*p*M,this._z=c*p*M+d*m*f,this._w=c*p*f+d*m*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],p=t[6],f=t[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(p-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(p-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+p)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+p)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,p=t._w;return this._x=n*p+a*o+r*c-s*l,this._y=r*p+a*l+s*o-n*c,this._z=s*p+a*c+n*l-r*o,this._w=a*p-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),p=Math.atan2(c,o),f=Math.sin((1-t)*p)/c,d=Math.sin(t*p)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,n=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Da.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Da.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),p=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*p,this.y=n+l*p+o*c-s*f,this.z=r+l*f+s*p-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lr.copy(this).projectOnVector(e),this.sub(Lr)}reflect(e){return this.sub(Lr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lr=new $,Da=new Tn;class Ii{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bt):Bt.fromBufferAttribute(s,a),Bt.applyMatrix4(e.matrixWorld),this.expandByPoint(Bt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bi.copy(n.boundingBox)),Bi.applyMatrix4(e.matrixWorld),this.union(Bi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bt),Bt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mi),zi.subVectors(this.max,Mi),kn.subVectors(e.a,Mi),Vn.subVectors(e.b,Mi),Wn.subVectors(e.c,Mi),fn.subVectors(Vn,kn),dn.subVectors(Wn,Vn),wn.subVectors(kn,Wn);let t=[0,-fn.z,fn.y,0,-dn.z,dn.y,0,-wn.z,wn.y,fn.z,0,-fn.x,dn.z,0,-dn.x,wn.z,0,-wn.x,-fn.y,fn.x,0,-dn.y,dn.x,0,-wn.y,wn.x,0];return!Ur(t,kn,Vn,Wn,zi)||(t=[1,0,0,0,1,0,0,0,1],!Ur(t,kn,Vn,Wn,zi))?!1:(Hi.crossVectors(fn,dn),t=[Hi.x,Hi.y,Hi.z],Ur(t,kn,Vn,Wn,zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($t[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$t[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$t[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$t[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$t[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$t[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$t[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$t[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($t),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $t=[new $,new $,new $,new $,new $,new $,new $,new $],Bt=new $,Bi=new Ii,kn=new $,Vn=new $,Wn=new $,fn=new $,dn=new $,wn=new $,Mi=new $,zi=new $,Hi=new $,Rn=new $;function Ur(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Rn.fromArray(i,s);const o=r.x*Math.abs(Rn.x)+r.y*Math.abs(Rn.y)+r.z*Math.abs(Rn.z),l=e.dot(Rn),c=t.dot(Rn),p=n.dot(Rn);if(Math.max(-Math.max(l,c,p),Math.min(l,c,p))>o)return!1}return!0}const Lc=new Ii,Ei=new $,Ir=new $;class Ar{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Lc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ei.subVectors(e,this.center);const t=Ei.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ei,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ir.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ei.copy(e.center).add(Ir)),this.expandByPoint(Ei.copy(e.center).sub(Ir))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zt=new $,Nr=new $,Gi=new $,pn=new $,Fr=new $,ki=new $,Or=new $;class br{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zt.copy(this.origin).addScaledVector(this.direction,t),Zt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Nr.copy(e).add(t).multiplyScalar(.5),Gi.copy(t).sub(e).normalize(),pn.copy(this.origin).sub(Nr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Gi),o=pn.dot(this.direction),l=-pn.dot(Gi),c=pn.lengthSq(),p=Math.abs(1-a*a);let f,d,m,M;if(p>0)if(f=a*l-o,d=a*o-l,M=s*p,f>=0)if(d>=-M)if(d<=M){const _=1/p;f*=_,d*=_,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-M?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=M?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Nr).addScaledVector(Gi,d),m}intersectSphere(e,t){Zt.subVectors(e.center,this.origin);const n=Zt.dot(this.direction),r=Zt.dot(Zt)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,p=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),p>=0?(s=(e.min.y-d.y)*p,a=(e.max.y-d.y)*p):(s=(e.max.y-d.y)*p,a=(e.min.y-d.y)*p),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Zt)!==null}intersectTriangle(e,t,n,r,s){Fr.subVectors(t,e),ki.subVectors(n,e),Or.crossVectors(Fr,ki);let a=this.direction.dot(Or),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pn.subVectors(this.origin,e);const l=o*this.direction.dot(ki.crossVectors(pn,ki));if(l<0)return null;const c=o*this.direction.dot(Fr.cross(pn));if(c<0||l+c>a)return null;const p=-o*pn.dot(Or);return p<0?null:this.at(p/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,r,s,a,o,l,c,p,f,d,m,M,_,u){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,p,f,d,m,M,_,u)}set(e,t,n,r,s,a,o,l,c,p,f,d,m,M,_,u){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=p,h[10]=f,h[14]=d,h[3]=m,h[7]=M,h[11]=_,h[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Xn.setFromMatrixColumn(e,0).length(),s=1/Xn.setFromMatrixColumn(e,1).length(),a=1/Xn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),p=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*p,m=a*f,M=o*p,_=o*f;t[0]=l*p,t[4]=-l*f,t[8]=c,t[1]=m+M*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=M+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*p,m=l*f,M=c*p,_=c*f;t[0]=d+_*o,t[4]=M*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*p,t[9]=-o,t[2]=m*o-M,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*p,m=l*f,M=c*p,_=c*f;t[0]=d-_*o,t[4]=-a*f,t[8]=M+m*o,t[1]=m+M*o,t[5]=a*p,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*p,m=a*f,M=o*p,_=o*f;t[0]=l*p,t[4]=M*c-m,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=m*c-M,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,M=o*l,_=o*c;t[0]=l*p,t[4]=_-d*f,t[8]=M*f+m,t[1]=f,t[5]=a*p,t[9]=-o*p,t[2]=-c*p,t[6]=m*f+M,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,m=a*c,M=o*l,_=o*c;t[0]=l*p,t[4]=-f,t[8]=c*p,t[1]=d*f+_,t[5]=a*p,t[9]=m*f-M,t[2]=M*f-m,t[6]=o*p,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uc,e,Ic)}lookAt(e,t,n){const r=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),mn.crossVectors(n,Rt),mn.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),mn.crossVectors(n,Rt)),mn.normalize(),Vi.crossVectors(Rt,mn),r[0]=mn.x,r[4]=Vi.x,r[8]=Rt.x,r[1]=mn.y,r[5]=Vi.y,r[9]=Rt.y,r[2]=mn.z,r[6]=Vi.z,r[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],p=n[1],f=n[5],d=n[9],m=n[13],M=n[2],_=n[6],u=n[10],h=n[14],S=n[3],A=n[7],g=n[11],T=n[15],E=r[0],y=r[4],w=r[8],x=r[12],v=r[1],C=r[5],L=r[9],D=r[13],I=r[2],z=r[6],B=r[10],q=r[14],P=r[3],F=r[7],N=r[11],H=r[15];return s[0]=a*E+o*v+l*I+c*P,s[4]=a*y+o*C+l*z+c*F,s[8]=a*w+o*L+l*B+c*N,s[12]=a*x+o*D+l*q+c*H,s[1]=p*E+f*v+d*I+m*P,s[5]=p*y+f*C+d*z+m*F,s[9]=p*w+f*L+d*B+m*N,s[13]=p*x+f*D+d*q+m*H,s[2]=M*E+_*v+u*I+h*P,s[6]=M*y+_*C+u*z+h*F,s[10]=M*w+_*L+u*B+h*N,s[14]=M*x+_*D+u*q+h*H,s[3]=S*E+A*v+g*I+T*P,s[7]=S*y+A*C+g*z+T*F,s[11]=S*w+A*L+g*B+T*N,s[15]=S*x+A*D+g*q+T*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],p=e[2],f=e[6],d=e[10],m=e[14],M=e[3],_=e[7],u=e[11],h=e[15];return M*(+s*l*f-r*c*f-s*o*d+n*c*d+r*o*m-n*l*m)+_*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*p-s*l*p)+u*(+t*c*f-t*o*m-s*a*f+n*a*m+s*o*p-n*c*p)+h*(-r*o*p-t*l*f+t*o*d+r*a*f-n*a*d+n*l*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8],f=e[9],d=e[10],m=e[11],M=e[12],_=e[13],u=e[14],h=e[15],S=f*u*c-_*d*c+_*l*m-o*u*m-f*l*h+o*d*h,A=M*d*c-p*u*c-M*l*m+a*u*m+p*l*h-a*d*h,g=p*_*c-M*f*c+M*o*m-a*_*m-p*o*h+a*f*h,T=M*f*l-p*_*l-M*o*d+a*_*d+p*o*u-a*f*u,E=t*S+n*A+r*g+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/E;return e[0]=S*y,e[1]=(_*d*s-f*u*s-_*r*m+n*u*m+f*r*h-n*d*h)*y,e[2]=(o*u*s-_*l*s+_*r*c-n*u*c-o*r*h+n*l*h)*y,e[3]=(f*l*s-o*d*s-f*r*c+n*d*c+o*r*m-n*l*m)*y,e[4]=A*y,e[5]=(p*u*s-M*d*s+M*r*m-t*u*m-p*r*h+t*d*h)*y,e[6]=(M*l*s-a*u*s-M*r*c+t*u*c+a*r*h-t*l*h)*y,e[7]=(a*d*s-p*l*s+p*r*c-t*d*c-a*r*m+t*l*m)*y,e[8]=g*y,e[9]=(M*f*s-p*_*s-M*n*m+t*_*m+p*n*h-t*f*h)*y,e[10]=(a*_*s-M*o*s+M*n*c-t*_*c-a*n*h+t*o*h)*y,e[11]=(p*o*s-a*f*s-p*n*c+t*f*c+a*n*m-t*o*m)*y,e[12]=T*y,e[13]=(p*_*r-M*f*r+M*n*d-t*_*d-p*n*u+t*f*u)*y,e[14]=(M*o*r-a*_*r-M*n*l+t*_*l+a*n*u-t*o*u)*y,e[15]=(a*f*r-p*o*r+p*n*l-t*f*l-a*n*d+t*o*d)*y,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,p=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,p*o+n,p*l-r*a,0,c*l-r*o,p*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,p=a+a,f=o+o,d=s*c,m=s*p,M=s*f,_=a*p,u=a*f,h=o*f,S=l*c,A=l*p,g=l*f,T=n.x,E=n.y,y=n.z;return r[0]=(1-(_+h))*T,r[1]=(m+g)*T,r[2]=(M-A)*T,r[3]=0,r[4]=(m-g)*E,r[5]=(1-(d+h))*E,r[6]=(u+S)*E,r[7]=0,r[8]=(M+A)*y,r[9]=(u-S)*y,r[10]=(1-(d+_))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Xn.set(r[0],r[1],r[2]).length();const a=Xn.set(r[4],r[5],r[6]).length(),o=Xn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zt.copy(this);const c=1/s,p=1/a,f=1/o;return zt.elements[0]*=c,zt.elements[1]*=c,zt.elements[2]*=c,zt.elements[4]*=p,zt.elements[5]*=p,zt.elements[6]*=p,zt.elements[8]*=f,zt.elements[9]*=f,zt.elements[10]*=f,t.setFromRotationMatrix(zt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=sn){const l=this.elements,c=2*s/(t-e),p=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r);let m,M;if(o===sn)m=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===gr)m=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=p,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=sn){const l=this.elements,c=1/(t-e),p=1/(n-r),f=1/(a-s),d=(t+e)*c,m=(n+r)*p;let M,_;if(o===sn)M=(a+s)*f,_=-2*f;else if(o===gr)M=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*p,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xn=new $,zt=new rt,Uc=new $(0,0,0),Ic=new $(1,1,1),mn=new $,Vi=new $,Rt=new $,La=new rt,Ua=new Tn;class jt{constructor(e=0,t=0,n=0,r=jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],p=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return La.makeRotationFromQuaternion(e),this.setFromRotationMatrix(La,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ua.setFromEuler(this),this.setFromQuaternion(Ua,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jt.DEFAULT_ORDER="XYZ";class ia{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nc=0;const Ia=new $,qn=new Tn,Jt=new rt,Wi=new $,Si=new $,Fc=new $,Oc=new Tn,Na=new $(1,0,0),Fa=new $(0,1,0),Oa=new $(0,0,1),Ba={type:"added"},Bc={type:"removed"},Yn={type:"childadded",child:null},Br={type:"childremoved",child:null};class _t extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new $,t=new jt,n=new Tn,r=new $(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ve}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.multiply(qn),this}rotateOnWorldAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.premultiply(qn),this}rotateX(e){return this.rotateOnAxis(Na,e)}rotateY(e){return this.rotateOnAxis(Fa,e)}rotateZ(e){return this.rotateOnAxis(Oa,e)}translateOnAxis(e,t){return Ia.copy(e).applyQuaternion(this.quaternion),this.position.add(Ia.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Na,e)}translateY(e){return this.translateOnAxis(Fa,e)}translateZ(e){return this.translateOnAxis(Oa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wi.copy(e):Wi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(Si,Wi,this.up):Jt.lookAt(Wi,Si,this.up),this.quaternion.setFromRotationMatrix(Jt),r&&(Jt.extractRotation(r.matrixWorld),qn.setFromRotationMatrix(Jt),this.quaternion.premultiply(qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ba),Yn.child=e,this.dispatchEvent(Yn),Yn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bc),Br.child=e,this.dispatchEvent(Br),Br.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ba),Yn.child=e,this.dispatchEvent(Yn),Yn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,e,Fc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,Oc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,p=l.length;c<p;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),p=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),M=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),p.length>0&&(n.images=p),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),M.length>0&&(n.nodes=M)}return n.object=r,n;function a(o){const l=[];for(const c in o){const p=o[c];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}_t.DEFAULT_UP=new $(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ht=new $,Qt=new $,zr=new $,en=new $,jn=new $,Kn=new $,za=new $,Hr=new $,Gr=new $,kr=new $,Vr=new lt,Wr=new lt,Xr=new lt;class kt{constructor(e=new $,t=new $,n=new $){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ht.subVectors(e,t),r.cross(Ht);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ht.subVectors(r,t),Qt.subVectors(n,t),zr.subVectors(e,t);const a=Ht.dot(Ht),o=Ht.dot(Qt),l=Ht.dot(zr),c=Qt.dot(Qt),p=Qt.dot(zr),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(c*l-o*p)*d,M=(a*p-o*l)*d;return s.set(1-m-M,M,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,en)===null?!1:en.x>=0&&en.y>=0&&en.x+en.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,en)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,en.x),l.addScaledVector(a,en.y),l.addScaledVector(o,en.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Vr.setScalar(0),Wr.setScalar(0),Xr.setScalar(0),Vr.fromBufferAttribute(e,t),Wr.fromBufferAttribute(e,n),Xr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Vr,s.x),a.addScaledVector(Wr,s.y),a.addScaledVector(Xr,s.z),a}static isFrontFacing(e,t,n,r){return Ht.subVectors(n,t),Qt.subVectors(e,t),Ht.cross(Qt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),Qt.subVectors(this.a,this.b),Ht.cross(Qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return kt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;jn.subVectors(r,n),Kn.subVectors(s,n),Hr.subVectors(e,n);const l=jn.dot(Hr),c=Kn.dot(Hr);if(l<=0&&c<=0)return t.copy(n);Gr.subVectors(e,r);const p=jn.dot(Gr),f=Kn.dot(Gr);if(p>=0&&f<=p)return t.copy(r);const d=l*f-p*c;if(d<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(jn,a);kr.subVectors(e,s);const m=jn.dot(kr),M=Kn.dot(kr);if(M>=0&&m<=M)return t.copy(s);const _=m*c-l*M;if(_<=0&&c>=0&&M<=0)return o=c/(c-M),t.copy(n).addScaledVector(Kn,o);const u=p*M-m*f;if(u<=0&&f-p>=0&&m-M>=0)return za.subVectors(s,r),o=(f-p)/(f-p+(m-M)),t.copy(r).addScaledVector(za,o);const h=1/(u+_+d);return a=_*h,o=d*h,t.copy(n).addScaledVector(jn,a).addScaledVector(Kn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},Xi={h:0,s:0,l:0};function qr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=je.workingColorSpace){if(e=ta(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=qr(a,s,e+1/3),this.g=qr(a,s,e),this.b=qr(a,s,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,t=Pt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=Qo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=on(e.r),this.g=on(e.g),this.b=on(e.b),this}copyLinearToSRGB(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return je.fromWorkingColorSpace(vt.copy(this),e),Math.round(xt(vt.r*255,0,255))*65536+Math.round(xt(vt.g*255,0,255))*256+Math.round(xt(vt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(vt.copy(this),t);const n=vt.r,r=vt.g,s=vt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const p=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=p<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=p,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=Pt){je.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,n=vt.g,r=vt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(_n),this.setHSL(_n.h+e,_n.s+t,_n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_n),e.getHSL(Xi);const n=Pi(_n.h,Xi.h,t),r=Pi(_n.s,Xi.s,t),s=Pi(_n.l,Xi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new Ye;Ye.NAMES=Qo;let zc=0;class mi extends Bn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=pi(),this.name="",this.blending=ri,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cs,this.blendDst=hs,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ea,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hn,this.stencilZFail=Hn,this.stencilZPass=Hn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cs&&(n.blendSrc=this.blendSrc),this.blendDst!==hs&&(n.blendDst=this.blendDst),this.blendEquation!==In&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ea&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class el extends mi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new $,qi=new We;class ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sa,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qi.fromBufferAttribute(this,t),qi.applyMatrix3(e),this.setXY(t,qi.x,qi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sa&&(e.usage=this.usage),e}}class tl extends ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nl extends ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yt extends ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hc=0;const It=new rt,Yr=new _t,$n=new $,Ct=new Ii,yi=new Ii,mt=new $;class cn extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zo(e)?nl:tl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return Yr.lookAt(e),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($n).negate(),this.translate($n.x,$n.y,$n.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ct.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const n=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];yi.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Ct.min,yi.min),Ct.expandByPoint(mt),mt.addVectors(Ct.max,yi.max),Ct.expandByPoint(mt)):(Ct.expandByPoint(yi.min),Ct.expandByPoint(yi.max))}Ct.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,p=o.count;c<p;c++)mt.fromBufferAttribute(o,c),l&&($n.fromBufferAttribute(e,c),mt.add($n)),r=Math.max(r,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ft(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<n.count;w++)o[w]=new $,l[w]=new $;const c=new $,p=new $,f=new $,d=new We,m=new We,M=new We,_=new $,u=new $;function h(w,x,v){c.fromBufferAttribute(n,w),p.fromBufferAttribute(n,x),f.fromBufferAttribute(n,v),d.fromBufferAttribute(s,w),m.fromBufferAttribute(s,x),M.fromBufferAttribute(s,v),p.sub(c),f.sub(c),m.sub(d),M.sub(d);const C=1/(m.x*M.y-M.x*m.y);isFinite(C)&&(_.copy(p).multiplyScalar(M.y).addScaledVector(f,-m.y).multiplyScalar(C),u.copy(f).multiplyScalar(m.x).addScaledVector(p,-M.x).multiplyScalar(C),o[w].add(_),o[x].add(_),o[v].add(_),l[w].add(u),l[x].add(u),l[v].add(u))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let w=0,x=S.length;w<x;++w){const v=S[w],C=v.start,L=v.count;for(let D=C,I=C+L;D<I;D+=3)h(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const A=new $,g=new $,T=new $,E=new $;function y(w){T.fromBufferAttribute(r,w),E.copy(T);const x=o[w];A.copy(x),A.sub(T.multiplyScalar(T.dot(x))).normalize(),g.crossVectors(E,x);const C=g.dot(l[w])<0?-1:1;a.setXYZW(w,A.x,A.y,A.z,C)}for(let w=0,x=S.length;w<x;++w){const v=S[w],C=v.start,L=v.count;for(let D=C,I=C+L;D<I;D+=3)y(e.getX(D+0)),y(e.getX(D+1)),y(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,c=new $,p=new $,f=new $;if(e)for(let d=0,m=e.count;d<m;d+=3){const M=e.getX(d+0),_=e.getX(d+1),u=e.getX(d+2);r.fromBufferAttribute(t,M),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,u),p.subVectors(a,s),f.subVectors(r,s),p.cross(f),o.fromBufferAttribute(n,M),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,u),o.add(p),l.add(p),c.add(p),n.setXYZ(M,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(u,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),p.subVectors(a,s),f.subVectors(r,s),p.cross(f),n.setXYZ(d+0,p.x,p.y,p.z),n.setXYZ(d+1,p.x,p.y,p.z),n.setXYZ(d+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,l){const c=o.array,p=o.itemSize,f=o.normalized,d=new c.constructor(l.length*p);let m=0,M=0;for(let _=0,u=l.length;_<u;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*p;for(let h=0;h<p;h++)d[M++]=c[m++]}return new ft(d,p,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let p=0,f=c.length;p<f;p++){const d=c[p],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],p=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];p.push(m.toJSON(e.data))}p.length>0&&(r[l]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const p=r[c];this.setAttribute(c,p.clone(t))}const s=e.morphAttributes;for(const c in s){const p=[],f=s[c];for(let d=0,m=f.length;d<m;d++)p.push(f[d].clone(t));this.morphAttributes[c]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,p=a.length;c<p;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ha=new rt,Cn=new br,Yi=new Ar,Ga=new $,ji=new $,Ki=new $,$i=new $,jr=new $,Zi=new $,ka=new $,Ji=new $;class an extends _t{constructor(e=new cn,t=new el){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Zi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const p=o[l],f=s[l];p!==0&&(jr.fromBufferAttribute(f,e),a?Zi.addScaledVector(jr,p):Zi.addScaledVector(jr.sub(t),p))}t.add(Zi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere),Yi.applyMatrix4(s),Cn.copy(e.ray).recast(e.near),!(Yi.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(Yi,Ga)===null||Cn.origin.distanceToSquared(Ga)>(e.far-e.near)**2))&&(Ha.copy(s).invert(),Cn.copy(e.ray).applyMatrix4(Ha),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,p=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let M=0,_=d.length;M<_;M++){const u=d[M],h=a[u.materialIndex],S=Math.max(u.start,m.start),A=Math.min(o.count,Math.min(u.start+u.count,m.start+m.count));for(let g=S,T=A;g<T;g+=3){const E=o.getX(g),y=o.getX(g+1),w=o.getX(g+2);r=Qi(this,h,e,n,c,p,f,E,y,w),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=u.materialIndex,t.push(r))}}else{const M=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let u=M,h=_;u<h;u+=3){const S=o.getX(u),A=o.getX(u+1),g=o.getX(u+2);r=Qi(this,a,e,n,c,p,f,S,A,g),r&&(r.faceIndex=Math.floor(u/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let M=0,_=d.length;M<_;M++){const u=d[M],h=a[u.materialIndex],S=Math.max(u.start,m.start),A=Math.min(l.count,Math.min(u.start+u.count,m.start+m.count));for(let g=S,T=A;g<T;g+=3){const E=g,y=g+1,w=g+2;r=Qi(this,h,e,n,c,p,f,E,y,w),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=u.materialIndex,t.push(r))}}else{const M=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let u=M,h=_;u<h;u+=3){const S=u,A=u+1,g=u+2;r=Qi(this,a,e,n,c,p,f,S,A,g),r&&(r.faceIndex=Math.floor(u/3),t.push(r))}}}}function Gc(i,e,t,n,r,s,a,o){let l;if(e.side===bt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===yn,o),l===null)return null;Ji.copy(o),Ji.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ji);return c<t.near||c>t.far?null:{distance:c,point:Ji.clone(),object:i}}function Qi(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,ji),i.getVertexPosition(l,Ki),i.getVertexPosition(c,$i);const p=Gc(i,e,t,n,ji,Ki,$i,ka);if(p){const f=new $;kt.getBarycoord(ka,ji,Ki,$i,f),r&&(p.uv=kt.getInterpolatedAttribute(r,o,l,c,f,new We)),s&&(p.uv1=kt.getInterpolatedAttribute(s,o,l,c,f,new We)),a&&(p.normal=kt.getInterpolatedAttribute(a,o,l,c,f,new $),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new $,materialIndex:0};kt.getNormal(ji,Ki,$i,d.normal),p.face=d,p.barycoord=f}return p}class Ni extends cn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],p=[],f=[];let d=0,m=0;M("z","y","x",-1,-1,n,t,e,a,s,0),M("z","y","x",1,-1,n,t,-e,a,s,1),M("x","z","y",1,1,e,n,t,r,a,2),M("x","z","y",1,-1,e,n,-t,r,a,3),M("x","y","z",1,-1,e,t,n,r,s,4),M("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(p,3)),this.setAttribute("uv",new Yt(f,2));function M(_,u,h,S,A,g,T,E,y,w,x){const v=g/y,C=T/w,L=g/2,D=T/2,I=E/2,z=y+1,B=w+1;let q=0,P=0;const F=new $;for(let N=0;N<B;N++){const H=N*C-D;for(let K=0;K<z;K++){const ce=K*v-L;F[_]=ce*S,F[u]=H*A,F[h]=I,c.push(F.x,F.y,F.z),F[_]=0,F[u]=0,F[h]=E>0?1:-1,p.push(F.x,F.y,F.z),f.push(K/y),f.push(1-N/w),q+=1}}for(let N=0;N<w;N++)for(let H=0;H<y;H++){const K=d+H+z*N,ce=d+H+z*(N+1),G=d+(H+1)+z*(N+1),j=d+(H+1)+z*N;l.push(K,ce,j),l.push(ce,G,j),P+=6}o.addGroup(m,P,x),m+=P,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function St(i){const e={};for(let t=0;t<i.length;t++){const n=fi(i[t]);for(const r in n)e[r]=n[r]}return e}function kc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function il(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Vc={clone:fi,merge:St};var Wc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends mi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wc,this.fragmentShader=Xc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fi(e.uniforms),this.uniformsGroups=kc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rl extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gn=new $,Va=new We,Wa=new We;class Gt extends rl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Li*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ci*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Li*2*Math.atan(Math.tan(Ci*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gn.x,gn.y).multiplyScalar(-e/gn.z),gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gn.x,gn.y).multiplyScalar(-e/gn.z)}getViewSize(e,t){return this.getViewBounds(e,Va,Wa),t.subVectors(Wa,Va)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ci*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zn=-90,Jn=1;class qc extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gt(Zn,Jn,e,t);r.layers=this.layers,this.add(r);const s=new Gt(Zn,Jn,e,t);s.layers=this.layers,this.add(s);const a=new Gt(Zn,Jn,e,t);a.layers=this.layers,this.add(a);const o=new Gt(Zn,Jn,e,t);o.layers=this.layers,this.add(o);const l=new Gt(Zn,Jn,e,t);l.layers=this.layers,this.add(l);const c=new Gt(Zn,Jn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,p]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(f,d,m),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class sl extends Mt{constructor(e,t,n,r,s,a,o,l,c,p){e=e!==void 0?e:[],t=t!==void 0?t:li,super(e,t,n,r,s,a,o,l,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yc extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new sl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ni(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bt,blending:En});s.uniforms.tEquirect.value=t;const a=new an(r,s),o=t.minFilter;return t.minFilter===Mn&&(t.minFilter=Vt),new qc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Kr=new $,jc=new $,Kc=new Ve;class vn{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Kr.subVectors(n,t).cross(jc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Kr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kc.getNormalMatrix(e),r=this.coplanarPoint(Kr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new Ar,er=new $;class ra{constructor(e=new vn,t=new vn,n=new vn,r=new vn,s=new vn,a=new vn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],p=r[5],f=r[6],d=r[7],m=r[8],M=r[9],_=r[10],u=r[11],h=r[12],S=r[13],A=r[14],g=r[15];if(n[0].setComponents(l-s,d-c,u-m,g-h).normalize(),n[1].setComponents(l+s,d+c,u+m,g+h).normalize(),n[2].setComponents(l+a,d+p,u+M,g+S).normalize(),n[3].setComponents(l-a,d-p,u-M,g-S).normalize(),n[4].setComponents(l-o,d-f,u-_,g-A).normalize(),t===sn)n[5].setComponents(l+o,d+f,u+_,g+A).normalize();else if(t===gr)n[5].setComponents(o,f,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(e){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(er.x=r.normal.x>0?e.max.x:e.min.x,er.y=r.normal.y>0?e.max.y:e.min.y,er.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function al(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function $c(i){const e=new WeakMap;function t(o,l){const c=o.array,p=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,p),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const p=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,p);else{f.sort((m,M)=>m.start-M.start);let d=0;for(let m=1;m<f.length;m++){const M=f[d],_=f[m];_.start<=M.start+M.count+1?M.count=Math.max(M.count,_.start+_.count-M.start):(++d,f[d]=_)}f.length=d+1;for(let m=0,M=f.length;m<M;m++){const _=f[m];i.bufferSubData(c,_.start*p.BYTES_PER_ELEMENT,p,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class wr extends cn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,p=l+1,f=e/o,d=t/l,m=[],M=[],_=[],u=[];for(let h=0;h<p;h++){const S=h*d-a;for(let A=0;A<c;A++){const g=A*f-s;M.push(g,-S,0),_.push(0,0,1),u.push(A/o),u.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<o;S++){const A=S+c*h,g=S+c*(h+1),T=S+1+c*(h+1),E=S+1+c*h;m.push(A,g,E),m.push(g,T,E)}this.setIndex(m),this.setAttribute("position",new Yt(M,3)),this.setAttribute("normal",new Yt(_,3)),this.setAttribute("uv",new Yt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jc=`#ifdef USE_ALPHAHASH
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
#endif`,Qc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,th=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ih=`#ifdef USE_AOMAP
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
#endif`,rh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sh=`#ifdef USE_BATCHING
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
#endif`,ah=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ch=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hh=`#ifdef USE_IRIDESCENCE
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
#endif`,uh=`#ifdef USE_BUMPMAP
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
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mh=`#define PI 3.141592653589793
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
} // validated`,Eh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sh=`vec3 transformedNormal = objectNormal;
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
#endif`,yh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Th=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ah=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ch=`#ifdef USE_ENVMAP
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
#endif`,Ph=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dh=`#ifdef USE_ENVMAP
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
#endif`,Lh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
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
#endif`,Ih=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Oh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bh=`#ifdef USE_GRADIENTMAP
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
}`,zh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kh=`uniform bool receiveShadow;
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
#endif`,Vh=`#ifdef USE_ENVMAP
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
#endif`,Wh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jh=`PhysicalMaterial material;
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
#endif`,Kh=`struct PhysicalMaterial {
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
}`,$h=`
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
#endif`,Zh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ru=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,su=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,au=`#if defined( USE_POINTS_UV )
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
#endif`,ou=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fu=`#ifdef USE_MORPHTARGETS
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
#endif`,du=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xu=`#ifdef USE_NORMALMAP
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
#endif`,Mu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Su=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Au=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ru=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Du=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nu=`float getShadowMask() {
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
}`,Fu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ou=`#ifdef USE_SKINNING
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
#endif`,Bu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zu=`#ifdef USE_SKINNING
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
#endif`,Hu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ku=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wu=`#ifdef USE_TRANSMISSION
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
#endif`,Xu=`#ifdef USE_TRANSMISSION
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
#endif`,qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ku=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $u=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zu=`uniform sampler2D t2D;
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
}`,Ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`#include <common>
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
}`,rf=`#if DEPTH_PACKING == 3200
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
}`,sf=`#define DISTANCE
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
}`,af=`#define DISTANCE
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
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cf=`uniform float scale;
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
}`,hf=`uniform vec3 diffuse;
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
}`,uf=`#include <common>
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
}`,ff=`uniform vec3 diffuse;
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
}`,df=`#define LAMBERT
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
}`,pf=`#define LAMBERT
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
}`,mf=`#define MATCAP
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
}`,_f=`#define MATCAP
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
}`,gf=`#define NORMAL
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
}`,vf=`#define NORMAL
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
}`,xf=`#define PHONG
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
}`,Mf=`#define PHONG
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
}`,Ef=`#define STANDARD
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
}`,Sf=`#define STANDARD
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
}`,yf=`#define TOON
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
}`,Tf=`#define TOON
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
}`,Af=`uniform float size;
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
}`,bf=`uniform vec3 diffuse;
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
}`,wf=`#include <common>
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
}`,Rf=`uniform vec3 color;
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
}`,Cf=`uniform float rotation;
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
}`,Pf=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Zc,alphahash_pars_fragment:Jc,alphamap_fragment:Qc,alphamap_pars_fragment:eh,alphatest_fragment:th,alphatest_pars_fragment:nh,aomap_fragment:ih,aomap_pars_fragment:rh,batching_pars_vertex:sh,batching_vertex:ah,begin_vertex:oh,beginnormal_vertex:lh,bsdfs:ch,iridescence_fragment:hh,bumpmap_pars_fragment:uh,clipping_planes_fragment:fh,clipping_planes_pars_fragment:dh,clipping_planes_pars_vertex:ph,clipping_planes_vertex:mh,color_fragment:_h,color_pars_fragment:gh,color_pars_vertex:vh,color_vertex:xh,common:Mh,cube_uv_reflection_fragment:Eh,defaultnormal_vertex:Sh,displacementmap_pars_vertex:yh,displacementmap_vertex:Th,emissivemap_fragment:Ah,emissivemap_pars_fragment:bh,colorspace_fragment:wh,colorspace_pars_fragment:Rh,envmap_fragment:Ch,envmap_common_pars_fragment:Ph,envmap_pars_fragment:Dh,envmap_pars_vertex:Lh,envmap_physical_pars_fragment:Vh,envmap_vertex:Uh,fog_vertex:Ih,fog_pars_vertex:Nh,fog_fragment:Fh,fog_pars_fragment:Oh,gradientmap_pars_fragment:Bh,lightmap_pars_fragment:zh,lights_lambert_fragment:Hh,lights_lambert_pars_fragment:Gh,lights_pars_begin:kh,lights_toon_fragment:Wh,lights_toon_pars_fragment:Xh,lights_phong_fragment:qh,lights_phong_pars_fragment:Yh,lights_physical_fragment:jh,lights_physical_pars_fragment:Kh,lights_fragment_begin:$h,lights_fragment_maps:Zh,lights_fragment_end:Jh,logdepthbuf_fragment:Qh,logdepthbuf_pars_fragment:eu,logdepthbuf_pars_vertex:tu,logdepthbuf_vertex:nu,map_fragment:iu,map_pars_fragment:ru,map_particle_fragment:su,map_particle_pars_fragment:au,metalnessmap_fragment:ou,metalnessmap_pars_fragment:lu,morphinstance_vertex:cu,morphcolor_vertex:hu,morphnormal_vertex:uu,morphtarget_pars_vertex:fu,morphtarget_vertex:du,normal_fragment_begin:pu,normal_fragment_maps:mu,normal_pars_fragment:_u,normal_pars_vertex:gu,normal_vertex:vu,normalmap_pars_fragment:xu,clearcoat_normal_fragment_begin:Mu,clearcoat_normal_fragment_maps:Eu,clearcoat_pars_fragment:Su,iridescence_pars_fragment:yu,opaque_fragment:Tu,packing:Au,premultiplied_alpha_fragment:bu,project_vertex:wu,dithering_fragment:Ru,dithering_pars_fragment:Cu,roughnessmap_fragment:Pu,roughnessmap_pars_fragment:Du,shadowmap_pars_fragment:Lu,shadowmap_pars_vertex:Uu,shadowmap_vertex:Iu,shadowmask_pars_fragment:Nu,skinbase_vertex:Fu,skinning_pars_vertex:Ou,skinning_vertex:Bu,skinnormal_vertex:zu,specularmap_fragment:Hu,specularmap_pars_fragment:Gu,tonemapping_fragment:ku,tonemapping_pars_fragment:Vu,transmission_fragment:Wu,transmission_pars_fragment:Xu,uv_pars_fragment:qu,uv_pars_vertex:Yu,uv_vertex:ju,worldpos_vertex:Ku,background_vert:$u,background_frag:Zu,backgroundCube_vert:Ju,backgroundCube_frag:Qu,cube_vert:ef,cube_frag:tf,depth_vert:nf,depth_frag:rf,distanceRGBA_vert:sf,distanceRGBA_frag:af,equirect_vert:of,equirect_frag:lf,linedashed_vert:cf,linedashed_frag:hf,meshbasic_vert:uf,meshbasic_frag:ff,meshlambert_vert:df,meshlambert_frag:pf,meshmatcap_vert:mf,meshmatcap_frag:_f,meshnormal_vert:gf,meshnormal_frag:vf,meshphong_vert:xf,meshphong_frag:Mf,meshphysical_vert:Ef,meshphysical_frag:Sf,meshtoon_vert:yf,meshtoon_frag:Tf,points_vert:Af,points_frag:bf,shadow_vert:wf,shadow_frag:Rf,sprite_vert:Cf,sprite_frag:Pf},Te={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Xt={basic:{uniforms:St([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:St([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:St([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:St([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:St([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:St([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:St([Te.points,Te.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:St([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:St([Te.common,Te.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:St([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:St([Te.sprite,Te.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:St([Te.common,Te.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:St([Te.lights,Te.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Xt.physical={uniforms:St([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const tr={r:0,b:0,g:0},Dn=new jt,Df=new rt;function Lf(i,e,t,n,r,s,a){const o=new Ye(0);let l=s===!0?0:1,c,p,f=null,d=0,m=null;function M(S){let A=S.isScene===!0?S.background:null;return A&&A.isTexture&&(A=(S.backgroundBlurriness>0?t:e).get(A)),A}function _(S){let A=!1;const g=M(S);g===null?h(o,l):g&&g.isColor&&(h(g,1),A=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function u(S,A){const g=M(A);g&&(g.isCubeTexture||g.mapping===yr)?(p===void 0&&(p=new an(new Ni(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:fi(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(T,E,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Dn.copy(A.backgroundRotation),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),p.material.uniforms.envMap.value=g,p.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Df.makeRotationFromEuler(Dn)),p.material.toneMapped=je.getTransfer(g.colorSpace)!==tt,(f!==g||d!==g.version||m!==i.toneMapping)&&(p.material.needsUpdate=!0,f=g,d=g.version,m=i.toneMapping),p.layers.enableAll(),S.unshift(p,p.geometry,p.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new an(new wr(2,2),new An({name:"BackgroundMaterial",uniforms:fi(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=je.getTransfer(g.colorSpace)!==tt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||d!==g.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=g,d=g.version,m=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function h(S,A){S.getRGB(tr,il(i)),n.buffers.color.setClear(tr.r,tr.g,tr.b,A,a)}return{getClearColor:function(){return o},setClearColor:function(S,A=1){o.set(S),l=A,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,h(o,l)},render:_,addToRenderList:u}}function Uf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(v,C,L,D,I){let z=!1;const B=f(D,L,C);s!==B&&(s=B,c(s.object)),z=m(v,D,L,I),z&&M(v,D,L,I),I!==null&&e.update(I,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,g(v,C,L,D),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function p(v){return i.deleteVertexArray(v)}function f(v,C,L){const D=L.wireframe===!0;let I=n[v.id];I===void 0&&(I={},n[v.id]=I);let z=I[C.id];z===void 0&&(z={},I[C.id]=z);let B=z[D];return B===void 0&&(B=d(l()),z[D]=B),B}function d(v){const C=[],L=[],D=[];for(let I=0;I<t;I++)C[I]=0,L[I]=0,D[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:D,object:v,attributes:{},index:null}}function m(v,C,L,D){const I=s.attributes,z=C.attributes;let B=0;const q=L.getAttributes();for(const P in q)if(q[P].location>=0){const N=I[P];let H=z[P];if(H===void 0&&(P==="instanceMatrix"&&v.instanceMatrix&&(H=v.instanceMatrix),P==="instanceColor"&&v.instanceColor&&(H=v.instanceColor)),N===void 0||N.attribute!==H||H&&N.data!==H.data)return!0;B++}return s.attributesNum!==B||s.index!==D}function M(v,C,L,D){const I={},z=C.attributes;let B=0;const q=L.getAttributes();for(const P in q)if(q[P].location>=0){let N=z[P];N===void 0&&(P==="instanceMatrix"&&v.instanceMatrix&&(N=v.instanceMatrix),P==="instanceColor"&&v.instanceColor&&(N=v.instanceColor));const H={};H.attribute=N,N&&N.data&&(H.data=N.data),I[P]=H,B++}s.attributes=I,s.attributesNum=B,s.index=D}function _(){const v=s.newAttributes;for(let C=0,L=v.length;C<L;C++)v[C]=0}function u(v){h(v,0)}function h(v,C){const L=s.newAttributes,D=s.enabledAttributes,I=s.attributeDivisors;L[v]=1,D[v]===0&&(i.enableVertexAttribArray(v),D[v]=1),I[v]!==C&&(i.vertexAttribDivisor(v,C),I[v]=C)}function S(){const v=s.newAttributes,C=s.enabledAttributes;for(let L=0,D=C.length;L<D;L++)C[L]!==v[L]&&(i.disableVertexAttribArray(L),C[L]=0)}function A(v,C,L,D,I,z,B){B===!0?i.vertexAttribIPointer(v,C,L,I,z):i.vertexAttribPointer(v,C,L,D,I,z)}function g(v,C,L,D){_();const I=D.attributes,z=L.getAttributes(),B=C.defaultAttributeValues;for(const q in z){const P=z[q];if(P.location>=0){let F=I[q];if(F===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(F=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(F=v.instanceColor)),F!==void 0){const N=F.normalized,H=F.itemSize,K=e.get(F);if(K===void 0)continue;const ce=K.buffer,G=K.type,j=K.bytesPerElement,Z=G===i.INT||G===i.UNSIGNED_INT||F.gpuType===Ks;if(F.isInterleavedBufferAttribute){const V=F.data,ae=V.stride,xe=F.offset;if(V.isInstancedInterleavedBuffer){for(let ue=0;ue<P.locationSize;ue++)h(P.location+ue,V.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ue=0;ue<P.locationSize;ue++)u(P.location+ue);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let ue=0;ue<P.locationSize;ue++)A(P.location+ue,H/P.locationSize,G,N,ae*j,(xe+H/P.locationSize*ue)*j,Z)}else{if(F.isInstancedBufferAttribute){for(let V=0;V<P.locationSize;V++)h(P.location+V,F.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let V=0;V<P.locationSize;V++)u(P.location+V);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let V=0;V<P.locationSize;V++)A(P.location+V,H/P.locationSize,G,N,H*j,H/P.locationSize*V*j,Z)}}else if(B!==void 0){const N=B[q];if(N!==void 0)switch(N.length){case 2:i.vertexAttrib2fv(P.location,N);break;case 3:i.vertexAttrib3fv(P.location,N);break;case 4:i.vertexAttrib4fv(P.location,N);break;default:i.vertexAttrib1fv(P.location,N)}}}}S()}function T(){w();for(const v in n){const C=n[v];for(const L in C){const D=C[L];for(const I in D)p(D[I].object),delete D[I];delete C[L]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const C=n[v.id];for(const L in C){const D=C[L];for(const I in D)p(D[I].object),delete D[I];delete C[L]}delete n[v.id]}function y(v){for(const C in n){const L=n[C];if(L[v.id]===void 0)continue;const D=L[v.id];for(const I in D)p(D[I].object),delete D[I];delete L[v.id]}}function w(){x(),a=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:x,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:u,disableUnusedAttributes:S}}function If(i,e,t){let n;function r(c){n=c}function s(c,p){i.drawArrays(n,c,p),t.update(p,n,1)}function a(c,p,f){f!==0&&(i.drawArraysInstanced(n,c,p,f),t.update(p,n,f))}function o(c,p,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,p,0,f);let m=0;for(let M=0;M<f;M++)m+=p[M];t.update(m,n,1)}function l(c,p,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let M=0;M<c.length;M++)a(c[M],p[M],d[M]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,p,0,d,0,f);let M=0;for(let _=0;_<f;_++)M+=p[_]*d[_];t.update(M,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Nf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(y){return!(y!==Nt&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){const w=y===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==ln&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==rn&&!w)}function l(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const p=l(c);p!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=M>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:M,maxTextureSize:_,maxCubemapSize:u,maxAttributes:h,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:g,vertexTextures:T,maxSamples:E}}function Ff(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new vn,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||r;return r=d,n=f.length,m},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=p(f,d,0)},this.setState=function(f,d,m){const M=f.clippingPlanes,_=f.clipIntersection,u=f.clipShadows,h=i.get(f);if(!r||M===null||M.length===0||s&&!u)s?p(null):c();else{const S=s?0:n,A=S*4;let g=h.clippingState||null;l.value=g,g=p(M,d,A,m);for(let T=0;T!==A;++T)g[T]=t[T];h.clippingState=g,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(f,d,m,M){const _=f!==null?f.length:0;let u=null;if(_!==0){if(u=l.value,M!==!0||u===null){const h=m+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(u===null||u.length<h)&&(u=new Float32Array(h));for(let A=0,g=m;A!==_;++A,g+=4)a.copy(f[A]).applyMatrix4(S,o),a.normal.toArray(u,g),u[g+3]=a.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,u}}function Of(i){let e=new WeakMap;function t(a,o){return o===vs?a.mapping=li:o===xs&&(a.mapping=ci),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===vs||o===xs)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Yc(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ol extends rl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=p*this.view.offsetY,l=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ni=4,Xa=[.125,.215,.35,.446,.526,.582],Nn=20,$r=new ol,qa=new Ye;let Zr=null,Jr=0,Qr=0,es=!1;const Un=(1+Math.sqrt(5))/2,Qn=1/Un,Ya=[new $(-Un,Qn,0),new $(Un,Qn,0),new $(-Qn,0,Un),new $(Qn,0,Un),new $(0,Un,-Qn),new $(0,Un,Qn),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class ja{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Zr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),es=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$a(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zr,Jr,Qr),this._renderer.xr.enabled=es,e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===li||e.mapping===ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),es=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Ui,format:Nt,colorSpace:di,depthBuffer:!1},r=Ka(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ka(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bf(s)),this._blurMaterial=zf(s,e,t)}return r}_compileMaterial(e){const t=new an(this._lodPlanes[0],e);this._renderer.compile(t,$r)}_sceneToCubeUV(e,t,n,r){const o=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,d=p.toneMapping;p.getClearColor(qa),p.toneMapping=Sn,p.autoClear=!1;const m=new el({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),M=new an(new Ni,m);let _=!1;const u=e.background;u?u.isColor&&(m.color.copy(u),e.background=null,_=!0):(m.color.copy(qa),_=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):S===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const A=this._cubeSize;nr(r,S*A,h>2?A:0,A,A),p.setRenderTarget(r),_&&p.render(M,o),p.render(e,o)}M.geometry.dispose(),M.material.dispose(),p.toneMapping=d,p.autoClear=f,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===li||e.mapping===ci;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Za()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$a());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new an(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;nr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,$r)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ya[(r-s-1)%Ya.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,f=new an(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,M=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Nn-1),_=s/M,u=isFinite(s)?1+Math.floor(p*_):Nn;u>Nn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Nn}`);const h=[];let S=0;for(let y=0;y<Nn;++y){const w=y/_,x=Math.exp(-w*w/2);h.push(x),y===0?S+=x:y<u&&(S+=2*x)}for(let y=0;y<h.length;y++)h[y]=h[y]/S;d.envMap.value=e.texture,d.samples.value=u,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=M,d.mipInt.value=A-n;const g=this._sizeLods[r],T=3*g*(r>A-ni?r-A+ni:0),E=4*(this._cubeSize-g);nr(t,T,E,3*g,2*g),l.setRenderTarget(t),l.render(f,$r)}}function Bf(i){const e=[],t=[],n=[];let r=i;const s=i-ni+1+Xa.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-ni?l=Xa[a-i+ni-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),p=-c,f=1+c,d=[p,p,f,p,f,f,p,p,f,f,p,f],m=6,M=6,_=3,u=2,h=1,S=new Float32Array(_*M*m),A=new Float32Array(u*M*m),g=new Float32Array(h*M*m);for(let E=0;E<m;E++){const y=E%3*2/3-1,w=E>2?0:-1,x=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];S.set(x,_*M*E),A.set(d,u*M*E);const v=[E,E,E,E,E,E];g.set(v,h*M*E)}const T=new cn;T.setAttribute("position",new ft(S,_)),T.setAttribute("uv",new ft(A,u)),T.setAttribute("faceIndex",new ft(g,h)),e.push(T),r>ni&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ka(i,e,t){const n=new On(i,e,t);return n.texture.mapping=yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function zf(i,e,t){const n=new Float32Array(Nn),r=new $(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sa(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function $a(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sa(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function Za(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function sa(){return`

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
	`}function Hf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===vs||l===xs,p=l===li||l===ci;if(c||p){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ja(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||p&&m&&r(m)?(t===null&&(t=new ja(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let p=0;p<c;p++)o[p]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Gf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&bi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function kf(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const M in d.attributes)e.remove(d.attributes[M]);for(const M in d.morphAttributes){const _=d.morphAttributes[M];for(let u=0,h=_.length;u<h;u++)e.remove(_[u])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const M in d)e.update(d[M],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const M in m){const _=m[M];for(let u=0,h=_.length;u<h;u++)e.update(_[u],i.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,M=f.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let A=0,g=S.length;A<g;A+=3){const T=S[A+0],E=S[A+1],y=S[A+2];d.push(T,E,E,y,y,T)}}else if(M!==void 0){const S=M.array;_=M.version;for(let A=0,g=S.length/3-1;A<g;A+=3){const T=A+0,E=A+1,y=A+2;d.push(T,E,E,y,y,T)}}else return;const u=new(Zo(d)?nl:tl)(d,1);u.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,u)}function p(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:p}}function Vf(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,s,d*a),t.update(m,n,1)}function c(d,m,M){M!==0&&(i.drawElementsInstanced(n,m,s,d*a,M),t.update(m,n,M))}function p(d,m,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,M);let u=0;for(let h=0;h<M;h++)u+=m[h];t.update(u,n,1)}function f(d,m,M,_){if(M===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let h=0;h<d.length;h++)c(d[h]/a,m[h],_[h]);else{u.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,_,0,M);let h=0;for(let S=0;S<M;S++)h+=m[S]*_[S];t.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=p,this.renderMultiDrawInstances=f}function Wf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Xf(i,e,t){const n=new WeakMap,r=new lt;function s(a,o,l){const c=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=p!==void 0?p.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let x=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",x)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let A=0;m===!0&&(A=1),M===!0&&(A=2),_===!0&&(A=3);let g=o.attributes.position.count*A,T=1;g>e.maxTextureSize&&(T=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);const E=new Float32Array(g*T*4*f),y=new Jo(E,g,T,f);y.type=rn,y.needsUpdate=!0;const w=A*4;for(let v=0;v<f;v++){const C=u[v],L=h[v],D=S[v],I=g*T*4*v;for(let z=0;z<C.count;z++){const B=z*w;m===!0&&(r.fromBufferAttribute(C,z),E[I+B+0]=r.x,E[I+B+1]=r.y,E[I+B+2]=r.z,E[I+B+3]=0),M===!0&&(r.fromBufferAttribute(L,z),E[I+B+4]=r.x,E[I+B+5]=r.y,E[I+B+6]=r.z,E[I+B+7]=0),_===!0&&(r.fromBufferAttribute(D,z),E[I+B+8]=r.x,E[I+B+9]=r.y,E[I+B+10]=r.z,E[I+B+11]=D.itemSize===4?r.w:1)}}d={count:f,texture:y,size:new We(g,T)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const M=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function qf(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,p=l.geometry,f=e.get(l,p);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class ll extends Mt{constructor(e,t,n,r,s,a,o,l,c,p=si){if(p!==si&&p!==ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===si&&(n=Fn),n===void 0&&p===ui&&(n=hi),super(null,r,s,a,o,l,p,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const cl=new Mt,Ja=new ll(1,1),hl=new Jo,ul=new Dc,fl=new sl,Qa=[],eo=[],to=new Float32Array(16),no=new Float32Array(9),io=new Float32Array(4);function _i(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Qa[r];if(s===void 0&&(s=new Float32Array(r),Qa[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rr(i,e){let t=eo[e];t===void 0&&(t=new Int32Array(e),eo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Yf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function Kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function $f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function Zf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;io.set(n),i.uniformMatrix2fv(this.addr,!1,io),pt(t,n)}}function Jf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;no.set(n),i.uniformMatrix3fv(this.addr,!1,no),pt(t,n)}}function Qf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;to.set(n),i.uniformMatrix4fv(this.addr,!1,to),pt(t,n)}}function ed(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function td(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function nd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function id(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function rd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function ad(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function od(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function ld(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ja.compareFunction=$o,s=Ja):s=cl,t.setTexture2D(e||s,r)}function cd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ul,r)}function hd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||fl,r)}function ud(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||hl,r)}function fd(i){switch(i){case 5126:return Yf;case 35664:return jf;case 35665:return Kf;case 35666:return $f;case 35674:return Zf;case 35675:return Jf;case 35676:return Qf;case 5124:case 35670:return ed;case 35667:case 35671:return td;case 35668:case 35672:return nd;case 35669:case 35673:return id;case 5125:return rd;case 36294:return sd;case 36295:return ad;case 36296:return od;case 35678:case 36198:case 36298:case 36306:case 35682:return ld;case 35679:case 36299:case 36307:return cd;case 35680:case 36300:case 36308:case 36293:return hd;case 36289:case 36303:case 36311:case 36292:return ud}}function dd(i,e){i.uniform1fv(this.addr,e)}function pd(i,e){const t=_i(e,this.size,2);i.uniform2fv(this.addr,t)}function md(i,e){const t=_i(e,this.size,3);i.uniform3fv(this.addr,t)}function _d(i,e){const t=_i(e,this.size,4);i.uniform4fv(this.addr,t)}function gd(i,e){const t=_i(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vd(i,e){const t=_i(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xd(i,e){const t=_i(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Md(i,e){i.uniform1iv(this.addr,e)}function Ed(i,e){i.uniform2iv(this.addr,e)}function Sd(i,e){i.uniform3iv(this.addr,e)}function yd(i,e){i.uniform4iv(this.addr,e)}function Td(i,e){i.uniform1uiv(this.addr,e)}function Ad(i,e){i.uniform2uiv(this.addr,e)}function bd(i,e){i.uniform3uiv(this.addr,e)}function wd(i,e){i.uniform4uiv(this.addr,e)}function Rd(i,e,t){const n=this.cache,r=e.length,s=Rr(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||cl,s[a])}function Cd(i,e,t){const n=this.cache,r=e.length,s=Rr(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ul,s[a])}function Pd(i,e,t){const n=this.cache,r=e.length,s=Rr(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||fl,s[a])}function Dd(i,e,t){const n=this.cache,r=e.length,s=Rr(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||hl,s[a])}function Ld(i){switch(i){case 5126:return dd;case 35664:return pd;case 35665:return md;case 35666:return _d;case 35674:return gd;case 35675:return vd;case 35676:return xd;case 5124:case 35670:return Md;case 35667:case 35671:return Ed;case 35668:case 35672:return Sd;case 35669:case 35673:return yd;case 5125:return Td;case 36294:return Ad;case 36295:return bd;case 36296:return wd;case 35678:case 36198:case 36298:case 36306:case 35682:return Rd;case 35679:case 36299:case 36307:return Cd;case 35680:case 36300:case 36308:case 36293:return Pd;case 36289:case 36303:case 36311:case 36292:return Dd}}class Ud{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fd(t.type)}}class Id{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ld(t.type)}}class Nd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ts=/(\w+)(\])?(\[|\.)?/g;function ro(i,e){i.seq.push(e),i.map[e.id]=e}function Fd(i,e,t){const n=i.name,r=n.length;for(ts.lastIndex=0;;){const s=ts.exec(n),a=ts.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ro(t,c===void 0?new Ud(o,i,e):new Id(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Nd(o),ro(t,f)),t=f}}}class pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Fd(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function so(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Od=37297;let Bd=0;function zd(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ao=new Ve;function Hd(i){je._getMatrix(ao,je.workingColorSpace,i);const e=`mat3( ${ao.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case Tr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function oo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+zd(i.getShaderSource(e),a)}else return r}function Gd(i,e){const t=Hd(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kd(i,e){let t;switch(e){case kl:t="Linear";break;case Vl:t="Reinhard";break;case Wl:t="Cineon";break;case Xl:t="ACESFilmic";break;case Yl:t="AgX";break;case jl:t="Neutral";break;case ql:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ir=new $;function Vd(){je.getLuminanceCoefficients(ir);const i=ir.x.toFixed(4),e=ir.y.toFixed(4),t=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wi).join(`
`)}function Xd(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qd(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function wi(i){return i!==""}function lo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function co(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yd=/^[ \t]*#include +<([\w\d./]+)>/gm;function qs(i){return i.replace(Yd,Kd)}const jd=new Map;function Kd(i,e){let t=Xe[e];if(t===void 0){const n=jd.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qs(t)}const $d=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ho(i){return i.replace($d,Zd)}function Zd(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function uo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jd(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===No?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===El?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===tn&&(e="SHADOWMAP_TYPE_VSM"),e}function Qd(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case li:case ci:e="ENVMAP_TYPE_CUBE";break;case yr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ep(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ci:e="ENVMAP_MODE_REFRACTION";break}return e}function tp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fo:e="ENVMAP_BLENDING_MULTIPLY";break;case Hl:e="ENVMAP_BLENDING_MIX";break;case Gl:e="ENVMAP_BLENDING_ADD";break}return e}function np(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ip(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Jd(t),c=Qd(t),p=ep(t),f=tp(t),d=np(t),m=Wd(t),M=Xd(s),_=r.createProgram();let u,h,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(wi).join(`
`),u.length>0&&(u+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(wi).join(`
`),h.length>0&&(h+=`
`)):(u=[uo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),h=[uo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+p:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Sn?kd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Gd("linearToOutputTexel",t.outputColorSpace),Vd(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),a=qs(a),a=lo(a,t),a=co(a,t),o=qs(o),o=lo(o,t),o=co(o,t),a=ho(a),o=ho(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,u=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,h=["#define varying in",t.glslVersion===ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const A=S+u+a,g=S+h+o,T=so(r,r.VERTEX_SHADER,A),E=so(r,r.FRAGMENT_SHADER,g);r.attachShader(_,T),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function y(C){if(i.debug.checkShaderErrors){const L=r.getProgramInfoLog(_).trim(),D=r.getShaderInfoLog(T).trim(),I=r.getShaderInfoLog(E).trim();let z=!0,B=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,T,E);else{const q=oo(r,T,"vertex"),P=oo(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+q+`
`+P)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||I==="")&&(B=!1);B&&(C.diagnostics={runnable:z,programLog:L,vertexShader:{log:D,prefix:u},fragmentShader:{log:I,prefix:h}})}r.deleteShader(T),r.deleteShader(E),w=new pr(r,_),x=qd(r,_)}let w;this.getUniforms=function(){return w===void 0&&y(this),w};let x;this.getAttributes=function(){return x===void 0&&y(this),x};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,Od)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bd++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}let rp=0;class sp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ap(e),t.set(e,n)),n}}class ap{constructor(e){this.id=rp++,this.code=e,this.usedTimes=0}}function op(i,e,t,n,r,s,a){const o=new ia,l=new sp,c=new Set,p=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function u(x,v,C,L,D){const I=L.fog,z=D.geometry,B=x.isMeshStandardMaterial?L.environment:null,q=(x.isMeshStandardMaterial?t:e).get(x.envMap||B),P=q&&q.mapping===yr?q.image.height:null,F=M[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const N=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,H=N!==void 0?N.length:0;let K=0;z.morphAttributes.position!==void 0&&(K=1),z.morphAttributes.normal!==void 0&&(K=2),z.morphAttributes.color!==void 0&&(K=3);let ce,G,j,Z;if(F){const Ke=Xt[F];ce=Ke.vertexShader,G=Ke.fragmentShader}else ce=x.vertexShader,G=x.fragmentShader,l.update(x),j=l.getVertexShaderID(x),Z=l.getFragmentShaderID(x);const V=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),xe=D.isInstancedMesh===!0,ue=D.isBatchedMesh===!0,Ce=!!x.map,be=!!x.matcap,Pe=!!q,O=!!x.aoMap,De=!!x.lightMap,de=!!x.bumpMap,pe=!!x.normalMap,Ee=!!x.displacementMap,Be=!!x.emissiveMap,we=!!x.metalnessMap,U=!!x.roughnessMap,b=x.anisotropy>0,Y=x.clearcoat>0,ie=x.dispersion>0,re=x.iridescence>0,ne=x.sheen>0,oe=x.transmission>0,he=b&&!!x.anisotropyMap,fe=Y&&!!x.clearcoatMap,Oe=Y&&!!x.clearcoatNormalMap,se=Y&&!!x.clearcoatRoughnessMap,me=re&&!!x.iridescenceMap,Ae=re&&!!x.iridescenceThicknessMap,_e=ne&&!!x.sheenColorMap,ve=ne&&!!x.sheenRoughnessMap,He=!!x.specularMap,Fe=!!x.specularColorMap,Je=!!x.specularIntensityMap,k=oe&&!!x.transmissionMap,Se=oe&&!!x.thicknessMap,te=!!x.gradientMap,le=!!x.alphaMap,Me=x.alphaTest>0,ye=!!x.alphaHash,Ge=!!x.extensions;let ot=Sn;x.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ot=i.toneMapping);const ht={shaderID:F,shaderType:x.type,shaderName:x.name,vertexShader:ce,fragmentShader:G,defines:x.defines,customVertexShaderID:j,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:ue,batchingColor:ue&&D._colorsTexture!==null,instancing:xe,instancingColor:xe&&D.instanceColor!==null,instancingMorph:xe&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:V===null?i.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:di,alphaToCoverage:!!x.alphaToCoverage,map:Ce,matcap:be,envMap:Pe,envMapMode:Pe&&q.mapping,envMapCubeUVHeight:P,aoMap:O,lightMap:De,bumpMap:de,normalMap:pe,displacementMap:d&&Ee,emissiveMap:Be,normalMapObjectSpace:pe&&x.normalMapType===Ql,normalMapTangentSpace:pe&&x.normalMapType===Ko,metalnessMap:we,roughnessMap:U,anisotropy:b,anisotropyMap:he,clearcoat:Y,clearcoatMap:fe,clearcoatNormalMap:Oe,clearcoatRoughnessMap:se,dispersion:ie,iridescence:re,iridescenceMap:me,iridescenceThicknessMap:Ae,sheen:ne,sheenColorMap:_e,sheenRoughnessMap:ve,specularMap:He,specularColorMap:Fe,specularIntensityMap:Je,transmission:oe,transmissionMap:k,thicknessMap:Se,gradientMap:te,opaque:x.transparent===!1&&x.blending===ri&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:Me,alphaHash:ye,combine:x.combine,mapUv:Ce&&_(x.map.channel),aoMapUv:O&&_(x.aoMap.channel),lightMapUv:De&&_(x.lightMap.channel),bumpMapUv:de&&_(x.bumpMap.channel),normalMapUv:pe&&_(x.normalMap.channel),displacementMapUv:Ee&&_(x.displacementMap.channel),emissiveMapUv:Be&&_(x.emissiveMap.channel),metalnessMapUv:we&&_(x.metalnessMap.channel),roughnessMapUv:U&&_(x.roughnessMap.channel),anisotropyMapUv:he&&_(x.anisotropyMap.channel),clearcoatMapUv:fe&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(x.sheenRoughnessMap.channel),specularMapUv:He&&_(x.specularMap.channel),specularColorMapUv:Fe&&_(x.specularColorMap.channel),specularIntensityMapUv:Je&&_(x.specularIntensityMap.channel),transmissionMapUv:k&&_(x.transmissionMap.channel),thicknessMapUv:Se&&_(x.thicknessMap.channel),alphaMapUv:le&&_(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(pe||b),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(Ce||le),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ae,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:K,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ot,decodeVideoTexture:Ce&&x.map.isVideoTexture===!0&&je.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:Be&&x.emissiveMap.isVideoTexture===!0&&je.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===qt,flipSided:x.side===bt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ge&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&x.extensions.multiDraw===!0||ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function h(x){const v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)v.push(C),v.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(S(v,x),A(v,x),v.push(i.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function S(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function A(x,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),x.push(o.mask)}function g(x){const v=M[x.type];let C;if(v){const L=Xt[v];C=Vc.clone(L.uniforms)}else C=x.uniforms;return C}function T(x,v){let C;for(let L=0,D=p.length;L<D;L++){const I=p[L];if(I.cacheKey===v){C=I,++C.usedTimes;break}}return C===void 0&&(C=new ip(i,v,x,s),p.push(C)),C}function E(x){if(--x.usedTimes===0){const v=p.indexOf(x);p[v]=p[p.length-1],p.pop(),x.destroy()}}function y(x){l.remove(x)}function w(){l.dispose()}return{getParameters:u,getProgramCacheKey:h,getUniforms:g,acquireProgram:T,releaseProgram:E,releaseShaderCache:y,programs:p,dispose:w}}function lp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function cp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function fo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function po(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,m,M,_,u){let h=i[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:M,renderOrder:f.renderOrder,z:_,group:u},i[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=M,h.renderOrder=f.renderOrder,h.z=_,h.group=u),e++,h}function o(f,d,m,M,_,u){const h=a(f,d,m,M,_,u);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(f,d,m,M,_,u){const h=a(f,d,m,M,_,u);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||cp),n.length>1&&n.sort(d||fo),r.length>1&&r.sort(d||fo)}function p(){for(let f=e,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:p,sort:c}}function hp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new po,i.set(n,[a])):r>=s.length?(a=new po,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function up(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new Ye};break;case"SpotLight":t={position:new $,direction:new $,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new $,halfWidth:new $,halfHeight:new $};break}return i[e.id]=t,t}}}function fp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let dp=0;function pp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function mp(i){const e=new up,t=fp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new $);const r=new $,s=new rt,a=new rt;function o(c){let p=0,f=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let m=0,M=0,_=0,u=0,h=0,S=0,A=0,g=0,T=0,E=0,y=0;c.sort(pp);for(let x=0,v=c.length;x<v;x++){const C=c[x],L=C.color,D=C.intensity,I=C.distance,z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)p+=L.r*D,f+=L.g*D,d+=L.b*D;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],D);y++}else if(C.isDirectionalLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const q=C.shadow,P=t.get(C);P.shadowIntensity=q.intensity,P.shadowBias=q.bias,P.shadowNormalBias=q.normalBias,P.shadowRadius=q.radius,P.shadowMapSize=q.mapSize,n.directionalShadow[m]=P,n.directionalShadowMap[m]=z,n.directionalShadowMatrix[m]=C.shadow.matrix,S++}n.directional[m]=B,m++}else if(C.isSpotLight){const B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(L).multiplyScalar(D),B.distance=I,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[_]=B;const q=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,q.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[_]=q.matrix,C.castShadow){const P=t.get(C);P.shadowIntensity=q.intensity,P.shadowBias=q.bias,P.shadowNormalBias=q.normalBias,P.shadowRadius=q.radius,P.shadowMapSize=q.mapSize,n.spotShadow[_]=P,n.spotShadowMap[_]=z,g++}_++}else if(C.isRectAreaLight){const B=e.get(C);B.color.copy(L).multiplyScalar(D),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[u]=B,u++}else if(C.isPointLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const q=C.shadow,P=t.get(C);P.shadowIntensity=q.intensity,P.shadowBias=q.bias,P.shadowNormalBias=q.normalBias,P.shadowRadius=q.radius,P.shadowMapSize=q.mapSize,P.shadowCameraNear=q.camera.near,P.shadowCameraFar=q.camera.far,n.pointShadow[M]=P,n.pointShadowMap[M]=z,n.pointShadowMatrix[M]=C.shadow.matrix,A++}n.point[M]=B,M++}else if(C.isHemisphereLight){const B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(D),B.groundColor.copy(C.groundColor).multiplyScalar(D),n.hemi[h]=B,h++}}u>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=f,n.ambient[2]=d;const w=n.hash;(w.directionalLength!==m||w.pointLength!==M||w.spotLength!==_||w.rectAreaLength!==u||w.hemiLength!==h||w.numDirectionalShadows!==S||w.numPointShadows!==A||w.numSpotShadows!==g||w.numSpotMaps!==T||w.numLightProbes!==y)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=u,n.point.length=M,n.hemi.length=h,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=g+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=y,w.directionalLength=m,w.pointLength=M,w.spotLength=_,w.rectAreaLength=u,w.hemiLength=h,w.numDirectionalShadows=S,w.numPointShadows=A,w.numSpotShadows=g,w.numSpotMaps=T,w.numLightProbes=y,n.version=dp++)}function l(c,p){let f=0,d=0,m=0,M=0,_=0;const u=p.matrixWorldInverse;for(let h=0,S=c.length;h<S;h++){const A=c[h];if(A.isDirectionalLight){const g=n.directional[f];g.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(u),f++}else if(A.isSpotLight){const g=n.spot[m];g.position.setFromMatrixPosition(A.matrixWorld),g.position.applyMatrix4(u),g.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(u),m++}else if(A.isRectAreaLight){const g=n.rectArea[M];g.position.setFromMatrixPosition(A.matrixWorld),g.position.applyMatrix4(u),a.identity(),s.copy(A.matrixWorld),s.premultiply(u),a.extractRotation(s),g.halfWidth.set(A.width*.5,0,0),g.halfHeight.set(0,A.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),M++}else if(A.isPointLight){const g=n.point[d];g.position.setFromMatrixPosition(A.matrixWorld),g.position.applyMatrix4(u),d++}else if(A.isHemisphereLight){const g=n.hemi[_];g.direction.setFromMatrixPosition(A.matrixWorld),g.direction.transformDirection(u),_++}}}return{setup:o,setupView:l,state:n}}function mo(i){const e=new mp(i),t=[],n=[];function r(p){c.camera=p,t.length=0,n.length=0}function s(p){t.push(p)}function a(p){n.push(p)}function o(){e.setup(t)}function l(p){e.setupView(t,p)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function _p(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new mo(i),e.set(r,[o])):s>=a.length?(o=new mo(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class gp extends mi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Zl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vp extends mi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mp=`uniform sampler2D shadow_pass;
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
}`;function Ep(i,e,t){let n=new ra;const r=new We,s=new We,a=new lt,o=new gp({depthPacking:Jl}),l=new vp,c={},p=t.maxTextureSize,f={[yn]:bt,[bt]:yn,[qt]:qt},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:xp,fragmentShader:Mp}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const M=new cn;M.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new an(M,d),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=No;let h=this.type;this.render=function(E,y,w){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||E.length===0)return;const x=i.getRenderTarget(),v=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),L=i.state;L.setBlending(En),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=h!==tn&&this.type===tn,I=h===tn&&this.type!==tn;for(let z=0,B=E.length;z<B;z++){const q=E[z],P=q.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const F=P.getFrameExtents();if(r.multiply(F),s.copy(P.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/F.x),r.x=s.x*F.x,P.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/F.y),r.y=s.y*F.y,P.mapSize.y=s.y)),P.map===null||D===!0||I===!0){const H=this.type!==tn?{minFilter:Ft,magFilter:Ft}:{};P.map!==null&&P.map.dispose(),P.map=new On(r.x,r.y,H),P.map.texture.name=q.name+".shadowMap",P.camera.updateProjectionMatrix()}i.setRenderTarget(P.map),i.clear();const N=P.getViewportCount();for(let H=0;H<N;H++){const K=P.getViewport(H);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),L.viewport(a),P.updateMatrices(q,H),n=P.getFrustum(),g(y,w,P.camera,q,this.type)}P.isPointLightShadow!==!0&&this.type===tn&&S(P,w),P.needsUpdate=!1}h=this.type,u.needsUpdate=!1,i.setRenderTarget(x,v,C)};function S(E,y){const w=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new On(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(y,null,w,d,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(y,null,w,m,_,null)}function A(E,y,w,x){let v=null;const C=w.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)v=C;else if(v=w.isPointLight===!0?l:o,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const L=v.uuid,D=y.uuid;let I=c[L];I===void 0&&(I={},c[L]=I);let z=I[D];z===void 0&&(z=v.clone(),I[D]=z,y.addEventListener("dispose",T)),v=z}if(v.visible=y.visible,v.wireframe=y.wireframe,x===tn?v.side=y.shadowSide!==null?y.shadowSide:y.side:v.side=y.shadowSide!==null?y.shadowSide:f[y.side],v.alphaMap=y.alphaMap,v.alphaTest=y.alphaTest,v.map=y.map,v.clipShadows=y.clipShadows,v.clippingPlanes=y.clippingPlanes,v.clipIntersection=y.clipIntersection,v.displacementMap=y.displacementMap,v.displacementScale=y.displacementScale,v.displacementBias=y.displacementBias,v.wireframeLinewidth=y.wireframeLinewidth,v.linewidth=y.linewidth,w.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const L=i.properties.get(v);L.light=w}return v}function g(E,y,w,x,v){if(E.visible===!1)return;if(E.layers.test(y.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===tn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,E.matrixWorld);const D=e.update(E),I=E.material;if(Array.isArray(I)){const z=D.groups;for(let B=0,q=z.length;B<q;B++){const P=z[B],F=I[P.materialIndex];if(F&&F.visible){const N=A(E,F,x,v);E.onBeforeShadow(i,E,y,w,D,N,P),i.renderBufferDirect(w,null,D,N,E,P),E.onAfterShadow(i,E,y,w,D,N,P)}}}else if(I.visible){const z=A(E,I,x,v);E.onBeforeShadow(i,E,y,w,D,z,null),i.renderBufferDirect(w,null,D,z,E,null),E.onAfterShadow(i,E,y,w,D,z,null)}}const L=E.children;for(let D=0,I=L.length;D<I;D++)g(L[D],y,w,x,v)}function T(E){E.target.removeEventListener("dispose",T);for(const w in c){const x=c[w],v=E.target.uuid;v in x&&(x[v].dispose(),delete x[v])}}}const Sp={[us]:fs,[ds]:_s,[ps]:gs,[oi]:ms,[fs]:us,[_s]:ds,[gs]:ps,[ms]:oi};function yp(i,e){function t(){let k=!1;const Se=new lt;let te=null;const le=new lt(0,0,0,0);return{setMask:function(Me){te!==Me&&!k&&(i.colorMask(Me,Me,Me,Me),te=Me)},setLocked:function(Me){k=Me},setClear:function(Me,ye,Ge,ot,ht){ht===!0&&(Me*=ot,ye*=ot,Ge*=ot),Se.set(Me,ye,Ge,ot),le.equals(Se)===!1&&(i.clearColor(Me,ye,Ge,ot),le.copy(Se))},reset:function(){k=!1,te=null,le.set(-1,0,0,0)}}}function n(){let k=!1,Se=!1,te=null,le=null,Me=null;return{setReversed:function(ye){if(Se!==ye){const Ge=e.get("EXT_clip_control");Se?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const ot=Me;Me=null,this.setClear(ot)}Se=ye},getReversed:function(){return Se},setTest:function(ye){ye?V(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(ye){te!==ye&&!k&&(i.depthMask(ye),te=ye)},setFunc:function(ye){if(Se&&(ye=Sp[ye]),le!==ye){switch(ye){case us:i.depthFunc(i.NEVER);break;case fs:i.depthFunc(i.ALWAYS);break;case ds:i.depthFunc(i.LESS);break;case oi:i.depthFunc(i.LEQUAL);break;case ps:i.depthFunc(i.EQUAL);break;case ms:i.depthFunc(i.GEQUAL);break;case _s:i.depthFunc(i.GREATER);break;case gs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ye}},setLocked:function(ye){k=ye},setClear:function(ye){Me!==ye&&(Se&&(ye=1-ye),i.clearDepth(ye),Me=ye)},reset:function(){k=!1,te=null,le=null,Me=null,Se=!1}}}function r(){let k=!1,Se=null,te=null,le=null,Me=null,ye=null,Ge=null,ot=null,ht=null;return{setTest:function(Ke){k||(Ke?V(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(Ke){Se!==Ke&&!k&&(i.stencilMask(Ke),Se=Ke)},setFunc:function(Ke,yt,Lt){(te!==Ke||le!==yt||Me!==Lt)&&(i.stencilFunc(Ke,yt,Lt),te=Ke,le=yt,Me=Lt)},setOp:function(Ke,yt,Lt){(ye!==Ke||Ge!==yt||ot!==Lt)&&(i.stencilOp(Ke,yt,Lt),ye=Ke,Ge=yt,ot=Lt)},setLocked:function(Ke){k=Ke},setClear:function(Ke){ht!==Ke&&(i.clearStencil(Ke),ht=Ke)},reset:function(){k=!1,Se=null,te=null,le=null,Me=null,ye=null,Ge=null,ot=null,ht=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let p={},f={},d=new WeakMap,m=[],M=null,_=!1,u=null,h=null,S=null,A=null,g=null,T=null,E=null,y=new Ye(0,0,0),w=0,x=!1,v=null,C=null,L=null,D=null,I=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,q=0;const P=i.getParameter(i.VERSION);P.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(P)[1]),B=q>=1):P.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),B=q>=2);let F=null,N={};const H=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),ce=new lt().fromArray(H),G=new lt().fromArray(K);function j(k,Se,te,le){const Me=new Uint8Array(4),ye=i.createTexture();i.bindTexture(k,ye),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<te;Ge++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(Se+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return ye}const Z={};Z[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),V(i.DEPTH_TEST),a.setFunc(oi),de(!1),pe(ga),V(i.CULL_FACE),O(En);function V(k){p[k]!==!0&&(i.enable(k),p[k]=!0)}function ae(k){p[k]!==!1&&(i.disable(k),p[k]=!1)}function xe(k,Se){return f[k]!==Se?(i.bindFramebuffer(k,Se),f[k]=Se,k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Se),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function ue(k,Se){let te=m,le=!1;if(k){te=d.get(Se),te===void 0&&(te=[],d.set(Se,te));const Me=k.textures;if(te.length!==Me.length||te[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,Ge=Me.length;ye<Ge;ye++)te[ye]=i.COLOR_ATTACHMENT0+ye;te.length=Me.length,le=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,le=!0);le&&i.drawBuffers(te)}function Ce(k){return M!==k?(i.useProgram(k),M=k,!0):!1}const be={[In]:i.FUNC_ADD,[yl]:i.FUNC_SUBTRACT,[Tl]:i.FUNC_REVERSE_SUBTRACT};be[Al]=i.MIN,be[bl]=i.MAX;const Pe={[wl]:i.ZERO,[Rl]:i.ONE,[Cl]:i.SRC_COLOR,[cs]:i.SRC_ALPHA,[Nl]:i.SRC_ALPHA_SATURATE,[Ul]:i.DST_COLOR,[Dl]:i.DST_ALPHA,[Pl]:i.ONE_MINUS_SRC_COLOR,[hs]:i.ONE_MINUS_SRC_ALPHA,[Il]:i.ONE_MINUS_DST_COLOR,[Ll]:i.ONE_MINUS_DST_ALPHA,[Fl]:i.CONSTANT_COLOR,[Ol]:i.ONE_MINUS_CONSTANT_COLOR,[Bl]:i.CONSTANT_ALPHA,[zl]:i.ONE_MINUS_CONSTANT_ALPHA};function O(k,Se,te,le,Me,ye,Ge,ot,ht,Ke){if(k===En){_===!0&&(ae(i.BLEND),_=!1);return}if(_===!1&&(V(i.BLEND),_=!0),k!==Sl){if(k!==u||Ke!==x){if((h!==In||g!==In)&&(i.blendEquation(i.FUNC_ADD),h=In,g=In),Ke)switch(k){case ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case va:i.blendFunc(i.ONE,i.ONE);break;case xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ma:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case va:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ma:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}S=null,A=null,T=null,E=null,y.set(0,0,0),w=0,u=k,x=Ke}return}Me=Me||Se,ye=ye||te,Ge=Ge||le,(Se!==h||Me!==g)&&(i.blendEquationSeparate(be[Se],be[Me]),h=Se,g=Me),(te!==S||le!==A||ye!==T||Ge!==E)&&(i.blendFuncSeparate(Pe[te],Pe[le],Pe[ye],Pe[Ge]),S=te,A=le,T=ye,E=Ge),(ot.equals(y)===!1||ht!==w)&&(i.blendColor(ot.r,ot.g,ot.b,ht),y.copy(ot),w=ht),u=k,x=!1}function De(k,Se){k.side===qt?ae(i.CULL_FACE):V(i.CULL_FACE);let te=k.side===bt;Se&&(te=!te),de(te),k.blending===ri&&k.transparent===!1?O(En):O(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const le=k.stencilWrite;o.setTest(le),le&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Be(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?V(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function de(k){v!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),v=k)}function pe(k){k!==xl?(V(i.CULL_FACE),k!==C&&(k===ga?i.cullFace(i.BACK):k===Ml?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),C=k}function Ee(k){k!==L&&(B&&i.lineWidth(k),L=k)}function Be(k,Se,te){k?(V(i.POLYGON_OFFSET_FILL),(D!==Se||I!==te)&&(i.polygonOffset(Se,te),D=Se,I=te)):ae(i.POLYGON_OFFSET_FILL)}function we(k){k?V(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function U(k){k===void 0&&(k=i.TEXTURE0+z-1),F!==k&&(i.activeTexture(k),F=k)}function b(k,Se,te){te===void 0&&(F===null?te=i.TEXTURE0+z-1:te=F);let le=N[te];le===void 0&&(le={type:void 0,texture:void 0},N[te]=le),(le.type!==k||le.texture!==Se)&&(F!==te&&(i.activeTexture(te),F=te),i.bindTexture(k,Se||Z[k]),le.type=k,le.texture=Se)}function Y(){const k=N[F];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Oe(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(k){ce.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),ce.copy(k))}function ve(k){G.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),G.copy(k))}function He(k,Se){let te=c.get(Se);te===void 0&&(te=new WeakMap,c.set(Se,te));let le=te.get(k);le===void 0&&(le=i.getUniformBlockIndex(Se,k.name),te.set(k,le))}function Fe(k,Se){const le=c.get(Se).get(k);l.get(Se)!==le&&(i.uniformBlockBinding(Se,le,k.__bindingPointIndex),l.set(Se,le))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},F=null,N={},f={},d=new WeakMap,m=[],M=null,_=!1,u=null,h=null,S=null,A=null,g=null,T=null,E=null,y=new Ye(0,0,0),w=0,x=!1,v=null,C=null,L=null,D=null,I=null,ce.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:V,disable:ae,bindFramebuffer:xe,drawBuffers:ue,useProgram:Ce,setBlending:O,setMaterial:De,setFlipSided:de,setCullFace:pe,setLineWidth:Ee,setPolygonOffset:Be,setScissorTest:we,activeTexture:U,bindTexture:b,unbindTexture:Y,compressedTexImage2D:ie,compressedTexImage3D:re,texImage2D:me,texImage3D:Ae,updateUBOMapping:He,uniformBlockBinding:Fe,texStorage2D:Oe,texStorage3D:se,texSubImage2D:ne,texSubImage3D:oe,compressedTexSubImage2D:he,compressedTexSubImage3D:fe,scissor:_e,viewport:ve,reset:Je}}function _o(i,e,t,n){const r=Tp(n);switch(t){case ko:return i*e;case Wo:return i*e;case Xo:return i*e*2;case qo:return i*e/r.components*r.byteLength;case Js:return i*e/r.components*r.byteLength;case Yo:return i*e*2/r.components*r.byteLength;case Qs:return i*e*2/r.components*r.byteLength;case Vo:return i*e*3/r.components*r.byteLength;case Nt:return i*e*4/r.components*r.byteLength;case ea:return i*e*4/r.components*r.byteLength;case cr:case hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ur:case fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Es:case ys:return Math.max(i,16)*Math.max(e,8)/4;case Ms:case Ss:return Math.max(i,8)*Math.max(e,8)/2;case Ts:case As:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Cs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ps:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ds:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ls:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Us:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Is:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ns:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fs:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Os:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Bs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zs:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Hs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case dr:case Gs:case ks:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jo:case Vs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ws:case Xs:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tp(i){switch(i){case ln:case zo:return{byteLength:1,components:1};case Di:case Ho:case Ui:return{byteLength:2,components:1};case $s:case Zs:return{byteLength:2,components:4};case Fn:case Ks:case rn:return{byteLength:4,components:1};case Go:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ap(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,p=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,b){return m?new OffscreenCanvas(U,b):xr("canvas")}function _(U,b,Y){let ie=1;const re=we(U);if((re.width>Y||re.height>Y)&&(ie=Y/Math.max(re.width,re.height)),ie<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ne=Math.floor(ie*re.width),oe=Math.floor(ie*re.height);f===void 0&&(f=M(ne,oe));const he=b?M(ne,oe):f;return he.width=ne,he.height=oe,he.getContext("2d").drawImage(U,0,0,ne,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ne+"x"+oe+")."),he}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),U;return U}function u(U){return U.generateMipmaps}function h(U){i.generateMipmap(U)}function S(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(U,b,Y,ie,re=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ne=b;if(b===i.RED&&(Y===i.FLOAT&&(ne=i.R32F),Y===i.HALF_FLOAT&&(ne=i.R16F),Y===i.UNSIGNED_BYTE&&(ne=i.R8)),b===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ne=i.R8UI),Y===i.UNSIGNED_SHORT&&(ne=i.R16UI),Y===i.UNSIGNED_INT&&(ne=i.R32UI),Y===i.BYTE&&(ne=i.R8I),Y===i.SHORT&&(ne=i.R16I),Y===i.INT&&(ne=i.R32I)),b===i.RG&&(Y===i.FLOAT&&(ne=i.RG32F),Y===i.HALF_FLOAT&&(ne=i.RG16F),Y===i.UNSIGNED_BYTE&&(ne=i.RG8)),b===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ne=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ne=i.RG16UI),Y===i.UNSIGNED_INT&&(ne=i.RG32UI),Y===i.BYTE&&(ne=i.RG8I),Y===i.SHORT&&(ne=i.RG16I),Y===i.INT&&(ne=i.RG32I)),b===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),Y===i.UNSIGNED_INT&&(ne=i.RGB32UI),Y===i.BYTE&&(ne=i.RGB8I),Y===i.SHORT&&(ne=i.RGB16I),Y===i.INT&&(ne=i.RGB32I)),b===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ne=i.RGBA32UI),Y===i.BYTE&&(ne=i.RGBA8I),Y===i.SHORT&&(ne=i.RGBA16I),Y===i.INT&&(ne=i.RGBA32I)),b===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),b===i.RGBA){const oe=re?Tr:je.getTransfer(ie);Y===i.FLOAT&&(ne=i.RGBA32F),Y===i.HALF_FLOAT&&(ne=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ne=oe===tt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function g(U,b){let Y;return U?b===null||b===Fn||b===hi?Y=i.DEPTH24_STENCIL8:b===rn?Y=i.DEPTH32F_STENCIL8:b===Di&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Fn||b===hi?Y=i.DEPTH_COMPONENT24:b===rn?Y=i.DEPTH_COMPONENT32F:b===Di&&(Y=i.DEPTH_COMPONENT16),Y}function T(U,b){return u(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ft&&U.minFilter!==Vt?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function E(U){const b=U.target;b.removeEventListener("dispose",E),w(b),b.isVideoTexture&&p.delete(b)}function y(U){const b=U.target;b.removeEventListener("dispose",y),v(b)}function w(U){const b=n.get(U);if(b.__webglInit===void 0)return;const Y=U.source,ie=d.get(Y);if(ie){const re=ie[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&x(U),Object.keys(ie).length===0&&d.delete(Y)}n.remove(U)}function x(U){const b=n.get(U);i.deleteTexture(b.__webglTexture);const Y=U.source,ie=d.get(Y);delete ie[b.__cacheKey],a.memory.textures--}function v(U){const b=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(b.__webglFramebuffer[ie]))for(let re=0;re<b.__webglFramebuffer[ie].length;re++)i.deleteFramebuffer(b.__webglFramebuffer[ie][re]);else i.deleteFramebuffer(b.__webglFramebuffer[ie]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ie])}else{if(Array.isArray(b.__webglFramebuffer))for(let ie=0;ie<b.__webglFramebuffer.length;ie++)i.deleteFramebuffer(b.__webglFramebuffer[ie]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ie=0;ie<b.__webglColorRenderbuffer.length;ie++)b.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ie]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Y=U.textures;for(let ie=0,re=Y.length;ie<re;ie++){const ne=n.get(Y[ie]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(Y[ie])}n.remove(U)}let C=0;function L(){C=0}function D(){const U=C;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),C+=1,U}function I(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function z(U,b){const Y=n.get(U);if(U.isVideoTexture&&Ee(U),U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){const ie=U.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(Y,U,b);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+b)}function B(U,b){const Y=n.get(U);if(U.version>0&&Y.__version!==U.version){G(Y,U,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+b)}function q(U,b){const Y=n.get(U);if(U.version>0&&Y.__version!==U.version){G(Y,U,b);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+b)}function P(U,b){const Y=n.get(U);if(U.version>0&&Y.__version!==U.version){j(Y,U,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+b)}const F={[mr]:i.REPEAT,[xn]:i.CLAMP_TO_EDGE,[_r]:i.MIRRORED_REPEAT},N={[Ft]:i.NEAREST,[Bo]:i.NEAREST_MIPMAP_NEAREST,[Ai]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[lr]:i.LINEAR_MIPMAP_NEAREST,[Mn]:i.LINEAR_MIPMAP_LINEAR},H={[ec]:i.NEVER,[ac]:i.ALWAYS,[tc]:i.LESS,[$o]:i.LEQUAL,[nc]:i.EQUAL,[sc]:i.GEQUAL,[ic]:i.GREATER,[rc]:i.NOTEQUAL};function K(U,b){if(b.type===rn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Vt||b.magFilter===lr||b.magFilter===Ai||b.magFilter===Mn||b.minFilter===Vt||b.minFilter===lr||b.minFilter===Ai||b.minFilter===Mn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,F[b.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,F[b.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,F[b.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,N[b.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,H[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ft||b.minFilter!==Ai&&b.minFilter!==Mn||b.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ce(U,b){let Y=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",E));const ie=b.source;let re=d.get(ie);re===void 0&&(re={},d.set(ie,re));const ne=I(b);if(ne!==U.__cacheKey){re[ne]===void 0&&(re[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),re[ne].usedTimes++;const oe=re[U.__cacheKey];oe!==void 0&&(re[U.__cacheKey].usedTimes--,oe.usedTimes===0&&x(b)),U.__cacheKey=ne,U.__webglTexture=re[ne].texture}return Y}function G(U,b,Y){let ie=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ie=i.TEXTURE_3D);const re=ce(U,b),ne=b.source;t.bindTexture(ie,U.__webglTexture,i.TEXTURE0+Y);const oe=n.get(ne);if(ne.version!==oe.__version||re===!0){t.activeTexture(i.TEXTURE0+Y);const he=je.getPrimaries(je.workingColorSpace),fe=b.colorSpace===nn?null:je.getPrimaries(b.colorSpace),Oe=b.colorSpace===nn||he===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let se=_(b.image,!1,r.maxTextureSize);se=Be(b,se);const me=s.convert(b.format,b.colorSpace),Ae=s.convert(b.type);let _e=A(b.internalFormat,me,Ae,b.colorSpace,b.isVideoTexture);K(ie,b);let ve;const He=b.mipmaps,Fe=b.isVideoTexture!==!0,Je=oe.__version===void 0||re===!0,k=ne.dataReady,Se=T(b,se);if(b.isDepthTexture)_e=g(b.format===ui,b.type),Je&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,_e,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,_e,se.width,se.height,0,me,Ae,null));else if(b.isDataTexture)if(He.length>0){Fe&&Je&&t.texStorage2D(i.TEXTURE_2D,Se,_e,He[0].width,He[0].height);for(let te=0,le=He.length;te<le;te++)ve=He[te],Fe?k&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ve.width,ve.height,me,Ae,ve.data):t.texImage2D(i.TEXTURE_2D,te,_e,ve.width,ve.height,0,me,Ae,ve.data);b.generateMipmaps=!1}else Fe?(Je&&t.texStorage2D(i.TEXTURE_2D,Se,_e,se.width,se.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se.width,se.height,me,Ae,se.data)):t.texImage2D(i.TEXTURE_2D,0,_e,se.width,se.height,0,me,Ae,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Fe&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,_e,He[0].width,He[0].height,se.depth);for(let te=0,le=He.length;te<le;te++)if(ve=He[te],b.format!==Nt)if(me!==null)if(Fe){if(k)if(b.layerUpdates.size>0){const Me=_o(ve.width,ve.height,b.format,b.type);for(const ye of b.layerUpdates){const Ge=ve.data.subarray(ye*Me/ve.data.BYTES_PER_ELEMENT,(ye+1)*Me/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,ye,ve.width,ve.height,1,me,Ge)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ve.width,ve.height,se.depth,me,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,_e,ve.width,ve.height,se.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ve.width,ve.height,se.depth,me,Ae,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,_e,ve.width,ve.height,se.depth,0,me,Ae,ve.data)}else{Fe&&Je&&t.texStorage2D(i.TEXTURE_2D,Se,_e,He[0].width,He[0].height);for(let te=0,le=He.length;te<le;te++)ve=He[te],b.format!==Nt?me!==null?Fe?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ve.width,ve.height,me,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,te,_e,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?k&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ve.width,ve.height,me,Ae,ve.data):t.texImage2D(i.TEXTURE_2D,te,_e,ve.width,ve.height,0,me,Ae,ve.data)}else if(b.isDataArrayTexture)if(Fe){if(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,_e,se.width,se.height,se.depth),k)if(b.layerUpdates.size>0){const te=_o(se.width,se.height,b.format,b.type);for(const le of b.layerUpdates){const Me=se.data.subarray(le*te/se.data.BYTES_PER_ELEMENT,(le+1)*te/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,se.width,se.height,1,me,Ae,Me)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,me,Ae,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,se.width,se.height,se.depth,0,me,Ae,se.data);else if(b.isData3DTexture)Fe?(Je&&t.texStorage3D(i.TEXTURE_3D,Se,_e,se.width,se.height,se.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,me,Ae,se.data)):t.texImage3D(i.TEXTURE_3D,0,_e,se.width,se.height,se.depth,0,me,Ae,se.data);else if(b.isFramebufferTexture){if(Je)if(Fe)t.texStorage2D(i.TEXTURE_2D,Se,_e,se.width,se.height);else{let te=se.width,le=se.height;for(let Me=0;Me<Se;Me++)t.texImage2D(i.TEXTURE_2D,Me,_e,te,le,0,me,Ae,null),te>>=1,le>>=1}}else if(He.length>0){if(Fe&&Je){const te=we(He[0]);t.texStorage2D(i.TEXTURE_2D,Se,_e,te.width,te.height)}for(let te=0,le=He.length;te<le;te++)ve=He[te],Fe?k&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,me,Ae,ve):t.texImage2D(i.TEXTURE_2D,te,_e,me,Ae,ve);b.generateMipmaps=!1}else if(Fe){if(Je){const te=we(se);t.texStorage2D(i.TEXTURE_2D,Se,_e,te.width,te.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Ae,se)}else t.texImage2D(i.TEXTURE_2D,0,_e,me,Ae,se);u(b)&&h(ie),oe.__version=ne.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function j(U,b,Y){if(b.image.length!==6)return;const ie=ce(U,b),re=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+Y);const ne=n.get(re);if(re.version!==ne.__version||ie===!0){t.activeTexture(i.TEXTURE0+Y);const oe=je.getPrimaries(je.workingColorSpace),he=b.colorSpace===nn?null:je.getPrimaries(b.colorSpace),fe=b.colorSpace===nn||oe===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Oe=b.isCompressedTexture||b.image[0].isCompressedTexture,se=b.image[0]&&b.image[0].isDataTexture,me=[];for(let le=0;le<6;le++)!Oe&&!se?me[le]=_(b.image[le],!0,r.maxCubemapSize):me[le]=se?b.image[le].image:b.image[le],me[le]=Be(b,me[le]);const Ae=me[0],_e=s.convert(b.format,b.colorSpace),ve=s.convert(b.type),He=A(b.internalFormat,_e,ve,b.colorSpace),Fe=b.isVideoTexture!==!0,Je=ne.__version===void 0||ie===!0,k=re.dataReady;let Se=T(b,Ae);K(i.TEXTURE_CUBE_MAP,b);let te;if(Oe){Fe&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,He,Ae.width,Ae.height);for(let le=0;le<6;le++){te=me[le].mipmaps;for(let Me=0;Me<te.length;Me++){const ye=te[Me];b.format!==Nt?_e!==null?Fe?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,0,0,ye.width,ye.height,_e,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,He,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,0,0,ye.width,ye.height,_e,ve,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,He,ye.width,ye.height,0,_e,ve,ye.data)}}}else{if(te=b.mipmaps,Fe&&Je){te.length>0&&Se++;const le=we(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,He,le.width,le.height)}for(let le=0;le<6;le++)if(se){Fe?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,me[le].width,me[le].height,_e,ve,me[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,He,me[le].width,me[le].height,0,_e,ve,me[le].data);for(let Me=0;Me<te.length;Me++){const Ge=te[Me].image[le].image;Fe?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,0,0,Ge.width,Ge.height,_e,ve,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,He,Ge.width,Ge.height,0,_e,ve,Ge.data)}}else{Fe?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,_e,ve,me[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,He,_e,ve,me[le]);for(let Me=0;Me<te.length;Me++){const ye=te[Me];Fe?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,0,0,_e,ve,ye.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,He,_e,ve,ye.image[le])}}}u(b)&&h(i.TEXTURE_CUBE_MAP),ne.__version=re.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Z(U,b,Y,ie,re,ne){const oe=s.convert(Y.format,Y.colorSpace),he=s.convert(Y.type),fe=A(Y.internalFormat,oe,he,Y.colorSpace),Oe=n.get(b),se=n.get(Y);if(se.__renderTarget=b,!Oe.__hasExternalTextures){const me=Math.max(1,b.width>>ne),Ae=Math.max(1,b.height>>ne);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,ne,fe,me,Ae,b.depth,0,oe,he,null):t.texImage2D(re,ne,fe,me,Ae,0,oe,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),pe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,re,se.__webglTexture,0,de(b)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,re,se.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function V(U,b,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,U),b.depthBuffer){const ie=b.depthTexture,re=ie&&ie.isDepthTexture?ie.type:null,ne=g(b.stencilBuffer,re),oe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=de(b);pe(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,ne,b.width,b.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,ne,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ne,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,U)}else{const ie=b.textures;for(let re=0;re<ie.length;re++){const ne=ie[re],oe=s.convert(ne.format,ne.colorSpace),he=s.convert(ne.type),fe=A(ne.internalFormat,oe,he,ne.colorSpace),Oe=de(b);Y&&pe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,fe,b.width,b.height):pe(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe,fe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,fe,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=n.get(b.depthTexture);ie.__renderTarget=b,(!ie.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z(b.depthTexture,0);const re=ie.__webglTexture,ne=de(b);if(b.depthTexture.format===si)pe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(b.depthTexture.format===ui)pe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function xe(U){const b=n.get(U),Y=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const ie=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ie){const re=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ie.removeEventListener("dispose",re)};ie.addEventListener("dispose",re),b.__depthDisposeCallback=re}b.__boundDepthTexture=ie}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ae(b.__webglFramebuffer,U)}else if(Y){b.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ie]),b.__webglDepthbuffer[ie]===void 0)b.__webglDepthbuffer[ie]=i.createRenderbuffer(),V(b.__webglDepthbuffer[ie],U,!1);else{const re=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=b.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),V(b.__webglDepthbuffer,U,!1);else{const ie=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(U,b,Y){const ie=n.get(U);b!==void 0&&Z(ie.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&xe(U)}function Ce(U){const b=U.texture,Y=n.get(U),ie=n.get(b);U.addEventListener("dispose",y);const re=U.textures,ne=U.isWebGLCubeRenderTarget===!0,oe=re.length>1;if(oe||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=b.version,a.memory.textures++),ne){Y.__webglFramebuffer=[];for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[he]=[];for(let fe=0;fe<b.mipmaps.length;fe++)Y.__webglFramebuffer[he][fe]=i.createFramebuffer()}else Y.__webglFramebuffer[he]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)Y.__webglFramebuffer[he]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(oe)for(let he=0,fe=re.length;he<fe;he++){const Oe=n.get(re[he]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&pe(U)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let he=0;he<re.length;he++){const fe=re[he];Y.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[he]);const Oe=s.convert(fe.format,fe.colorSpace),se=s.convert(fe.type),me=A(fe.internalFormat,Oe,se,fe.colorSpace,U.isXRRenderTarget===!0),Ae=de(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,me,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,Y.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),V(Y.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),K(i.TEXTURE_CUBE_MAP,b);for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)Z(Y.__webglFramebuffer[he][fe],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,fe);else Z(Y.__webglFramebuffer[he],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);u(b)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let he=0,fe=re.length;he<fe;he++){const Oe=re[he],se=n.get(Oe);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),K(i.TEXTURE_2D,Oe),Z(Y.__webglFramebuffer,U,Oe,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),u(Oe)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(he=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,ie.__webglTexture),K(he,b),b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)Z(Y.__webglFramebuffer[fe],U,b,i.COLOR_ATTACHMENT0,he,fe);else Z(Y.__webglFramebuffer,U,b,i.COLOR_ATTACHMENT0,he,0);u(b)&&h(he),t.unbindTexture()}U.depthBuffer&&xe(U)}function be(U){const b=U.textures;for(let Y=0,ie=b.length;Y<ie;Y++){const re=b[Y];if(u(re)){const ne=S(U),oe=n.get(re).__webglTexture;t.bindTexture(ne,oe),h(ne),t.unbindTexture()}}}const Pe=[],O=[];function De(U){if(U.samples>0){if(pe(U)===!1){const b=U.textures,Y=U.width,ie=U.height;let re=i.COLOR_BUFFER_BIT;const ne=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(U),he=b.length>1;if(he)for(let fe=0;fe<b.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let fe=0;fe<b.length;fe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[fe]);const Oe=n.get(b[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Oe,0)}i.blitFramebuffer(0,0,Y,ie,0,0,Y,ie,re,i.NEAREST),l===!0&&(Pe.length=0,O.length=0,Pe.push(i.COLOR_ATTACHMENT0+fe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Pe.push(ne),O.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let fe=0;fe<b.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,oe.__webglColorRenderbuffer[fe]);const Oe=n.get(b[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const b=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function de(U){return Math.min(r.maxSamples,U.samples)}function pe(U){const b=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ee(U){const b=a.render.frame;p.get(U)!==b&&(p.set(U,b),U.update())}function Be(U,b){const Y=U.colorSpace,ie=U.format,re=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Y!==di&&Y!==nn&&(je.getTransfer(Y)===tt?(ie!==Nt||re!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),b}function we(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=q,this.setTextureCube=P,this.rebindTextures=ue,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=pe}function bp(i,e){function t(n,r=nn){let s;const a=je.getTransfer(r);if(n===ln)return i.UNSIGNED_BYTE;if(n===$s)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Go)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zo)return i.BYTE;if(n===Ho)return i.SHORT;if(n===Di)return i.UNSIGNED_SHORT;if(n===Ks)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===Ui)return i.HALF_FLOAT;if(n===ko)return i.ALPHA;if(n===Vo)return i.RGB;if(n===Nt)return i.RGBA;if(n===Wo)return i.LUMINANCE;if(n===Xo)return i.LUMINANCE_ALPHA;if(n===si)return i.DEPTH_COMPONENT;if(n===ui)return i.DEPTH_STENCIL;if(n===qo)return i.RED;if(n===Js)return i.RED_INTEGER;if(n===Yo)return i.RG;if(n===Qs)return i.RG_INTEGER;if(n===ea)return i.RGBA_INTEGER;if(n===cr||n===hr||n===ur||n===fr)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===cr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===cr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ur)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ms||n===Es||n===Ss||n===ys)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ms)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Es)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ss)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ys)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ts||n===As||n===bs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ts||n===As)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===bs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ws||n===Rs||n===Cs||n===Ps||n===Ds||n===Ls||n===Us||n===Is||n===Ns||n===Fs||n===Os||n===Bs||n===zs||n===Hs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ws)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ps)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ds)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ls)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Us)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Is)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ns)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Os)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hs)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dr||n===Gs||n===ks)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===dr)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ks)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jo||n===Vs||n===Ws||n===Xs)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===dr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Vs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ws)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class wp extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rr extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rp={type:"move"};class ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const u=t.getJointPose(_,n),h=this._getHandJoint(c,_);u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=u.radius),h.visible=u!==null}const p=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=p.position.distanceTo(f.position),m=.02,M=.005;c.inputState.pinching&&d>m+M?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-M&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Cp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pp=`
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

}`;class Dp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Mt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new An({vertexShader:Cp,fragmentShader:Pp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new an(new wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lp extends Bn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,p=null,f=null,d=null,m=null,M=null;const _=new Dp,u=t.getContextAttributes();let h=null,S=null;const A=[],g=[],T=new We;let E=null;const y=new Gt;y.viewport=new lt;const w=new Gt;w.viewport=new lt;const x=[y,w],v=new wp;let C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=A[G];return j===void 0&&(j=new ns,A[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=A[G];return j===void 0&&(j=new ns,A[G]=j),j.getGripSpace()},this.getHand=function(G){let j=A[G];return j===void 0&&(j=new ns,A[G]=j),j.getHandSpace()};function D(G){const j=g.indexOf(G.inputSource);if(j===-1)return;const Z=A[j];Z!==void 0&&(Z.update(G.inputSource,G.frame,c||a),Z.dispatchEvent({type:G.type,data:G.inputSource}))}function I(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",z);for(let G=0;G<A.length;G++){const j=g[G];j!==null&&(g[G]=null,A[G].disconnect(j))}C=null,L=null,_.reset(),e.setRenderTarget(h),m=null,d=null,f=null,r=null,S=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",I),r.addEventListener("inputsourceschange",z),u.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){const j={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new On(m.framebufferWidth,m.framebufferHeight,{format:Nt,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil})}else{let j=null,Z=null,V=null;u.depth&&(V=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=u.stencil?ui:si,Z=u.stencil?hi:Fn);const ae={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new On(d.textureWidth,d.textureHeight,{format:Nt,type:ln,depthTexture:new ll(d.textureWidth,d.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(G){for(let j=0;j<G.removed.length;j++){const Z=G.removed[j],V=g.indexOf(Z);V>=0&&(g[V]=null,A[V].disconnect(Z))}for(let j=0;j<G.added.length;j++){const Z=G.added[j];let V=g.indexOf(Z);if(V===-1){for(let xe=0;xe<A.length;xe++)if(xe>=g.length){g.push(Z),V=xe;break}else if(g[xe]===null){g[xe]=Z,V=xe;break}if(V===-1)break}const ae=A[V];ae&&ae.connect(Z)}}const B=new $,q=new $;function P(G,j,Z){B.setFromMatrixPosition(j.matrixWorld),q.setFromMatrixPosition(Z.matrixWorld);const V=B.distanceTo(q),ae=j.projectionMatrix.elements,xe=Z.projectionMatrix.elements,ue=ae[14]/(ae[10]-1),Ce=ae[14]/(ae[10]+1),be=(ae[9]+1)/ae[5],Pe=(ae[9]-1)/ae[5],O=(ae[8]-1)/ae[0],De=(xe[8]+1)/xe[0],de=ue*O,pe=ue*De,Ee=V/(-O+De),Be=Ee*-O;if(j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Be),G.translateZ(Ee),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ae[10]===-1)G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const we=ue+Ee,U=Ce+Ee,b=de-Be,Y=pe+(V-Be),ie=be*Ce/U*we,re=Pe*Ce/U*we;G.projectionMatrix.makePerspective(b,Y,ie,re,we,U),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function F(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let j=G.near,Z=G.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(Z=_.depthFar)),v.near=w.near=y.near=j,v.far=w.far=y.far=Z,(C!==v.near||L!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,L=v.far),y.layers.mask=G.layers.mask|2,w.layers.mask=G.layers.mask|4,v.layers.mask=y.layers.mask|w.layers.mask;const V=G.parent,ae=v.cameras;F(v,V);for(let xe=0;xe<ae.length;xe++)F(ae[xe],V);ae.length===2?P(v,y,w):v.projectionMatrix.copy(y.projectionMatrix),N(G,v,V)};function N(G,j,Z){Z===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(Z.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Li*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let H=null;function K(G,j){if(p=j.getViewerPose(c||a),M=j,p!==null){const Z=p.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let V=!1;Z.length!==v.cameras.length&&(v.cameras.length=0,V=!0);for(let xe=0;xe<Z.length;xe++){const ue=Z[xe];let Ce=null;if(m!==null)Ce=m.getViewport(ue);else{const Pe=f.getViewSubImage(d,ue);Ce=Pe.viewport,xe===0&&(e.setRenderTargetTextures(S,Pe.colorTexture,d.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(S))}let be=x[xe];be===void 0&&(be=new Gt,be.layers.enable(xe),be.viewport=new lt,x[xe]=be),be.matrix.fromArray(ue.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(ue.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),xe===0&&(v.matrix.copy(be.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),V===!0&&v.cameras.push(be)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const xe=f.getDepthInformation(Z[0]);xe&&xe.isValid&&xe.texture&&_.init(e,xe,r.renderState)}}for(let Z=0;Z<A.length;Z++){const V=g[Z],ae=A[Z];V!==null&&ae!==void 0&&ae.update(V,j,c||a)}H&&H(G,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),M=null}const ce=new al;ce.setAnimationLoop(K),this.setAnimationLoop=function(G){H=G},this.dispose=function(){}}}const Ln=new jt,Up=new rt;function Ip(i,e){function t(u,h){u.matrixAutoUpdate===!0&&u.updateMatrix(),h.value.copy(u.matrix)}function n(u,h){h.color.getRGB(u.fogColor.value,il(i)),h.isFog?(u.fogNear.value=h.near,u.fogFar.value=h.far):h.isFogExp2&&(u.fogDensity.value=h.density)}function r(u,h,S,A,g){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(u,h):h.isMeshToonMaterial?(s(u,h),f(u,h)):h.isMeshPhongMaterial?(s(u,h),p(u,h)):h.isMeshStandardMaterial?(s(u,h),d(u,h),h.isMeshPhysicalMaterial&&m(u,h,g)):h.isMeshMatcapMaterial?(s(u,h),M(u,h)):h.isMeshDepthMaterial?s(u,h):h.isMeshDistanceMaterial?(s(u,h),_(u,h)):h.isMeshNormalMaterial?s(u,h):h.isLineBasicMaterial?(a(u,h),h.isLineDashedMaterial&&o(u,h)):h.isPointsMaterial?l(u,h,S,A):h.isSpriteMaterial?c(u,h):h.isShadowMaterial?(u.color.value.copy(h.color),u.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(u,h){u.opacity.value=h.opacity,h.color&&u.diffuse.value.copy(h.color),h.emissive&&u.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(u.map.value=h.map,t(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.bumpMap&&(u.bumpMap.value=h.bumpMap,t(h.bumpMap,u.bumpMapTransform),u.bumpScale.value=h.bumpScale,h.side===bt&&(u.bumpScale.value*=-1)),h.normalMap&&(u.normalMap.value=h.normalMap,t(h.normalMap,u.normalMapTransform),u.normalScale.value.copy(h.normalScale),h.side===bt&&u.normalScale.value.negate()),h.displacementMap&&(u.displacementMap.value=h.displacementMap,t(h.displacementMap,u.displacementMapTransform),u.displacementScale.value=h.displacementScale,u.displacementBias.value=h.displacementBias),h.emissiveMap&&(u.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,u.emissiveMapTransform)),h.specularMap&&(u.specularMap.value=h.specularMap,t(h.specularMap,u.specularMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest);const S=e.get(h),A=S.envMap,g=S.envMapRotation;A&&(u.envMap.value=A,Ln.copy(g),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),u.envMapRotation.value.setFromMatrix4(Up.makeRotationFromEuler(Ln)),u.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=h.reflectivity,u.ior.value=h.ior,u.refractionRatio.value=h.refractionRatio),h.lightMap&&(u.lightMap.value=h.lightMap,u.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,u.lightMapTransform)),h.aoMap&&(u.aoMap.value=h.aoMap,u.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,u.aoMapTransform))}function a(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,h.map&&(u.map.value=h.map,t(h.map,u.mapTransform))}function o(u,h){u.dashSize.value=h.dashSize,u.totalSize.value=h.dashSize+h.gapSize,u.scale.value=h.scale}function l(u,h,S,A){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.size.value=h.size*S,u.scale.value=A*.5,h.map&&(u.map.value=h.map,t(h.map,u.uvTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function c(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.rotation.value=h.rotation,h.map&&(u.map.value=h.map,t(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function p(u,h){u.specular.value.copy(h.specular),u.shininess.value=Math.max(h.shininess,1e-4)}function f(u,h){h.gradientMap&&(u.gradientMap.value=h.gradientMap)}function d(u,h){u.metalness.value=h.metalness,h.metalnessMap&&(u.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,u.metalnessMapTransform)),u.roughness.value=h.roughness,h.roughnessMap&&(u.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,u.roughnessMapTransform)),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)}function m(u,h,S){u.ior.value=h.ior,h.sheen>0&&(u.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),u.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(u.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,u.sheenColorMapTransform)),h.sheenRoughnessMap&&(u.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,u.sheenRoughnessMapTransform))),h.clearcoat>0&&(u.clearcoat.value=h.clearcoat,u.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(u.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,u.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(u.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===bt&&u.clearcoatNormalScale.value.negate())),h.dispersion>0&&(u.dispersion.value=h.dispersion),h.iridescence>0&&(u.iridescence.value=h.iridescence,u.iridescenceIOR.value=h.iridescenceIOR,u.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(u.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,u.iridescenceMapTransform)),h.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),h.transmission>0&&(u.transmission.value=h.transmission,u.transmissionSamplerMap.value=S.texture,u.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(u.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,u.transmissionMapTransform)),u.thickness.value=h.thickness,h.thicknessMap&&(u.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=h.attenuationDistance,u.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(u.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(u.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=h.specularIntensity,u.specularColor.value.copy(h.specularColor),h.specularColorMap&&(u.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,u.specularColorMapTransform)),h.specularIntensityMap&&(u.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,u.specularIntensityMapTransform))}function M(u,h){h.matcap&&(u.matcap.value=h.matcap)}function _(u,h){const S=e.get(h).light;u.referencePosition.value.setFromMatrixPosition(S.matrixWorld),u.nearDistance.value=S.shadow.camera.near,u.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Np(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,A){const g=A.program;n.uniformBlockBinding(S,g)}function c(S,A){let g=r[S.id];g===void 0&&(M(S),g=p(S),r[S.id]=g,S.addEventListener("dispose",u));const T=A.program;n.updateUBOMapping(S,T);const E=e.render.frame;s[S.id]!==E&&(d(S),s[S.id]=E)}function p(S){const A=f();S.__bindingPointIndex=A;const g=i.createBuffer(),T=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,g),g}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const A=r[S.id],g=S.uniforms,T=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let E=0,y=g.length;E<y;E++){const w=Array.isArray(g[E])?g[E]:[g[E]];for(let x=0,v=w.length;x<v;x++){const C=w[x];if(m(C,E,x,T)===!0){const L=C.__offset,D=Array.isArray(C.value)?C.value:[C.value];let I=0;for(let z=0;z<D.length;z++){const B=D[z],q=_(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,L+I,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,I),I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,A,g,T){const E=S.value,y=A+"_"+g;if(T[y]===void 0)return typeof E=="number"||typeof E=="boolean"?T[y]=E:T[y]=E.clone(),!0;{const w=T[y];if(typeof E=="number"||typeof E=="boolean"){if(w!==E)return T[y]=E,!0}else if(w.equals(E)===!1)return w.copy(E),!0}return!1}function M(S){const A=S.uniforms;let g=0;const T=16;for(let y=0,w=A.length;y<w;y++){const x=Array.isArray(A[y])?A[y]:[A[y]];for(let v=0,C=x.length;v<C;v++){const L=x[v],D=Array.isArray(L.value)?L.value:[L.value];for(let I=0,z=D.length;I<z;I++){const B=D[I],q=_(B),P=g%T,F=P%q.boundary,N=P+F;g+=F,N!==0&&T-N<q.storage&&(g+=T-N),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=g,g+=q.storage}}}const E=g%T;return E>0&&(g+=T-E),S.__size=g,S.__cache={},this}function _(S){const A={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(A.boundary=4,A.storage=4):S.isVector2?(A.boundary=8,A.storage=8):S.isVector3||S.isColor?(A.boundary=16,A.storage=12):S.isVector4?(A.boundary=16,A.storage=16):S.isMatrix3?(A.boundary=48,A.storage=48):S.isMatrix4?(A.boundary=64,A.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),A}function u(S){const A=S.target;A.removeEventListener("dispose",u);const g=a.indexOf(A.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function h(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class L0{constructor(e={}){const{canvas:t=yc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const M=new Uint32Array(4),_=new Int32Array(4);let u=null,h=null;const S=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this.toneMapping=Sn,this.toneMappingExposure=1;const g=this;let T=!1,E=0,y=0,w=null,x=-1,v=null;const C=new lt,L=new lt;let D=null;const I=new Ye(0);let z=0,B=t.width,q=t.height,P=1,F=null,N=null;const H=new lt(0,0,B,q),K=new lt(0,0,B,q);let ce=!1;const G=new ra;let j=!1,Z=!1;const V=new rt,ae=new rt,xe=new $,ue=new lt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function Pe(){return w===null?P:1}let O=n;function De(R,W){return t.getContext(R,W)}try{const R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sr}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ye,!1),O===null){const W="webgl2";if(O=De(W,R),O===null)throw De(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let de,pe,Ee,Be,we,U,b,Y,ie,re,ne,oe,he,fe,Oe,se,me,Ae,_e,ve,He,Fe,Je,k;function Se(){de=new Gf(O),de.init(),Fe=new bp(O,de),pe=new Nf(O,de,e,Fe),Ee=new yp(O,de),pe.reverseDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),Be=new Wf(O),we=new lp,U=new Ap(O,de,Ee,we,pe,Fe,Be),b=new Of(g),Y=new Hf(g),ie=new $c(O),Je=new Uf(O,ie),re=new kf(O,ie,Be,Je),ne=new qf(O,re,ie,Be),_e=new Xf(O,pe,U),se=new Ff(we),oe=new op(g,b,Y,de,pe,Je,se),he=new Ip(g,we),fe=new hp,Oe=new _p(de),Ae=new Lf(g,b,Y,Ee,ne,m,l),me=new Ep(g,ne,pe),k=new Np(O,Be,pe,Ee),ve=new If(O,de,Be),He=new Vf(O,de,Be),Be.programs=oe.programs,g.capabilities=pe,g.extensions=de,g.properties=we,g.renderLists=fe,g.shadowMap=me,g.state=Ee,g.info=Be}Se();const te=new Lp(g,O);this.xr=te,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=de.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=de.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(R){R!==void 0&&(P=R,this.setSize(B,q,!1))},this.getSize=function(R){return R.set(B,q)},this.setSize=function(R,W,Q=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,q=W,t.width=Math.floor(R*P),t.height=Math.floor(W*P),Q===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(B*P,q*P).floor()},this.setDrawingBufferSize=function(R,W,Q){B=R,q=W,P=Q,t.width=Math.floor(R*Q),t.height=Math.floor(W*Q),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(H)},this.setViewport=function(R,W,Q,ee){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,W,Q,ee),Ee.viewport(C.copy(H).multiplyScalar(P).round())},this.getScissor=function(R){return R.copy(K)},this.setScissor=function(R,W,Q,ee){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,W,Q,ee),Ee.scissor(L.copy(K).multiplyScalar(P).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(R){Ee.setScissorTest(ce=R)},this.setOpaqueSort=function(R){F=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(R=!0,W=!0,Q=!0){let ee=0;if(R){let X=!1;if(w!==null){const ge=w.texture.format;X=ge===ea||ge===Qs||ge===Js}if(X){const ge=w.texture.type,Re=ge===ln||ge===Fn||ge===Di||ge===hi||ge===$s||ge===Zs,Le=Ae.getClearColor(),Ue=Ae.getClearAlpha(),ze=Le.r,ke=Le.g,Ie=Le.b;Re?(M[0]=ze,M[1]=ke,M[2]=Ie,M[3]=Ue,O.clearBufferuiv(O.COLOR,0,M)):(_[0]=ze,_[1]=ke,_[2]=Ie,_[3]=Ue,O.clearBufferiv(O.COLOR,0,_))}else ee|=O.COLOR_BUFFER_BIT}W&&(ee|=O.DEPTH_BUFFER_BIT),Q&&(ee|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),fe.dispose(),Oe.dispose(),we.dispose(),b.dispose(),Y.dispose(),ne.dispose(),Je.dispose(),k.dispose(),oe.dispose(),te.dispose(),te.removeEventListener("sessionstart",gi),te.removeEventListener("sessionend",ha),bn.stop()};function le(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const R=Be.autoReset,W=me.enabled,Q=me.autoUpdate,ee=me.needsUpdate,X=me.type;Se(),Be.autoReset=R,me.enabled=W,me.autoUpdate=Q,me.needsUpdate=ee,me.type=X}function ye(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ge(R){const W=R.target;W.removeEventListener("dispose",Ge),ot(W)}function ot(R){ht(R),we.remove(R)}function ht(R){const W=we.get(R).programs;W!==void 0&&(W.forEach(function(Q){oe.releaseProgram(Q)}),R.isShaderMaterial&&oe.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,Q,ee,X,ge){W===null&&(W=Ce);const Re=X.isMesh&&X.matrixWorld.determinant()<0,Le=_l(R,W,Q,ee,X);Ee.setMaterial(ee,Re);let Ue=Q.index,ze=1;if(ee.wireframe===!0){if(Ue=re.getWireframeAttribute(Q),Ue===void 0)return;ze=2}const ke=Q.drawRange,Ie=Q.attributes.position;let $e=ke.start*ze,it=(ke.start+ke.count)*ze;ge!==null&&($e=Math.max($e,ge.start*ze),it=Math.min(it,(ge.start+ge.count)*ze)),Ue!==null?($e=Math.max($e,0),it=Math.min(it,Ue.count)):Ie!=null&&($e=Math.max($e,0),it=Math.min(it,Ie.count));const st=it-$e;if(st<0||st===1/0)return;Je.setup(X,ee,Le,Q,Ue);let Tt,Qe=ve;if(Ue!==null&&(Tt=ie.get(Ue),Qe=He,Qe.setIndex(Tt)),X.isMesh)ee.wireframe===!0?(Ee.setLineWidth(ee.wireframeLinewidth*Pe()),Qe.setMode(O.LINES)):Qe.setMode(O.TRIANGLES);else if(X.isLine){let Ne=ee.linewidth;Ne===void 0&&(Ne=1),Ee.setLineWidth(Ne*Pe()),X.isLineSegments?Qe.setMode(O.LINES):X.isLineLoop?Qe.setMode(O.LINE_LOOP):Qe.setMode(O.LINE_STRIP)}else X.isPoints?Qe.setMode(O.POINTS):X.isSprite&&Qe.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Qe.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))Qe.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ne=X._multiDrawStarts,Kt=X._multiDrawCounts,et=X._multiDrawCount,Ot=Ue?ie.get(Ue).bytesPerElement:1,zn=we.get(ee).currentProgram.getUniforms();for(let wt=0;wt<et;wt++)zn.setValue(O,"_gl_DrawID",wt),Qe.render(Ne[wt]/Ot,Kt[wt])}else if(X.isInstancedMesh)Qe.renderInstances($e,st,X.count);else if(Q.isInstancedBufferGeometry){const Ne=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Kt=Math.min(Q.instanceCount,Ne);Qe.renderInstances($e,st,Kt)}else Qe.render($e,st)};function Ke(R,W,Q){R.transparent===!0&&R.side===qt&&R.forceSinglePass===!1?(R.side=bt,R.needsUpdate=!0,Oi(R,W,Q),R.side=yn,R.needsUpdate=!0,Oi(R,W,Q),R.side=qt):Oi(R,W,Q)}this.compile=function(R,W,Q=null){Q===null&&(Q=R),h=Oe.get(Q),h.init(W),A.push(h),Q.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(h.pushLight(X),X.castShadow&&h.pushShadow(X))}),R!==Q&&R.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(h.pushLight(X),X.castShadow&&h.pushShadow(X))}),h.setupLights();const ee=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ge=X.material;if(ge)if(Array.isArray(ge))for(let Re=0;Re<ge.length;Re++){const Le=ge[Re];Ke(Le,Q,X),ee.add(Le)}else Ke(ge,Q,X),ee.add(ge)}),A.pop(),h=null,ee},this.compileAsync=function(R,W,Q=null){const ee=this.compile(R,W,Q);return new Promise(X=>{function ge(){if(ee.forEach(function(Re){we.get(Re).currentProgram.isReady()&&ee.delete(Re)}),ee.size===0){X(R);return}setTimeout(ge,10)}de.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let yt=null;function Lt(R){yt&&yt(R)}function gi(){bn.stop()}function ha(){bn.start()}const bn=new al;bn.setAnimationLoop(Lt),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(R){yt=R,te.setAnimationLoop(R),R===null?bn.stop():bn.start()},te.addEventListener("sessionstart",gi),te.addEventListener("sessionend",ha),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(W),W=te.getCamera()),R.isScene===!0&&R.onBeforeRender(g,R,W,w),h=Oe.get(R,A.length),h.init(W),A.push(h),ae.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),G.setFromProjectionMatrix(ae),Z=this.localClippingEnabled,j=se.init(this.clippingPlanes,Z),u=fe.get(R,S.length),u.init(),S.push(u),te.enabled===!0&&te.isPresenting===!0){const ge=g.xr.getDepthSensingMesh();ge!==null&&Cr(ge,W,-1/0,g.sortObjects)}Cr(R,W,0,g.sortObjects),u.finish(),g.sortObjects===!0&&u.sort(F,N),be=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,be&&Ae.addToRenderList(u,R),this.info.render.frame++,j===!0&&se.beginShadows();const Q=h.state.shadowsArray;me.render(Q,R,W),j===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=u.opaque,X=u.transmissive;if(h.setupLights(),W.isArrayCamera){const ge=W.cameras;if(X.length>0)for(let Re=0,Le=ge.length;Re<Le;Re++){const Ue=ge[Re];fa(ee,X,R,Ue)}be&&Ae.render(R);for(let Re=0,Le=ge.length;Re<Le;Re++){const Ue=ge[Re];ua(u,R,Ue,Ue.viewport)}}else X.length>0&&fa(ee,X,R,W),be&&Ae.render(R),ua(u,R,W);w!==null&&(U.updateMultisampleRenderTarget(w),U.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(g,R,W),Je.resetDefaultState(),x=-1,v=null,A.pop(),A.length>0?(h=A[A.length-1],j===!0&&se.setGlobalState(g.clippingPlanes,h.state.camera)):h=null,S.pop(),S.length>0?u=S[S.length-1]:u=null};function Cr(R,W,Q,ee){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||G.intersectsSprite(R)){ee&&ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ae);const Re=ne.update(R),Le=R.material;Le.visible&&u.push(R,Re,Le,Q,ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||G.intersectsObject(R))){const Re=ne.update(R),Le=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ue.copy(R.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ue.copy(Re.boundingSphere.center)),ue.applyMatrix4(R.matrixWorld).applyMatrix4(ae)),Array.isArray(Le)){const Ue=Re.groups;for(let ze=0,ke=Ue.length;ze<ke;ze++){const Ie=Ue[ze],$e=Le[Ie.materialIndex];$e&&$e.visible&&u.push(R,Re,$e,Q,ue.z,Ie)}}else Le.visible&&u.push(R,Re,Le,Q,ue.z,null)}}const ge=R.children;for(let Re=0,Le=ge.length;Re<Le;Re++)Cr(ge[Re],W,Q,ee)}function ua(R,W,Q,ee){const X=R.opaque,ge=R.transmissive,Re=R.transparent;h.setupLightsView(Q),j===!0&&se.setGlobalState(g.clippingPlanes,Q),ee&&Ee.viewport(C.copy(ee)),X.length>0&&Fi(X,W,Q),ge.length>0&&Fi(ge,W,Q),Re.length>0&&Fi(Re,W,Q),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function fa(R,W,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[ee.id]===void 0&&(h.state.transmissionRenderTarget[ee.id]=new On(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float")?Ui:ln,minFilter:Mn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const ge=h.state.transmissionRenderTarget[ee.id],Re=ee.viewport||C;ge.setSize(Re.z,Re.w);const Le=g.getRenderTarget();g.setRenderTarget(ge),g.getClearColor(I),z=g.getClearAlpha(),z<1&&g.setClearColor(16777215,.5),g.clear(),be&&Ae.render(Q);const Ue=g.toneMapping;g.toneMapping=Sn;const ze=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),h.setupLightsView(ee),j===!0&&se.setGlobalState(g.clippingPlanes,ee),Fi(R,Q,ee),U.updateMultisampleRenderTarget(ge),U.updateRenderTargetMipmap(ge),de.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ie=0,$e=W.length;Ie<$e;Ie++){const it=W[Ie],st=it.object,Tt=it.geometry,Qe=it.material,Ne=it.group;if(Qe.side===qt&&st.layers.test(ee.layers)){const Kt=Qe.side;Qe.side=bt,Qe.needsUpdate=!0,da(st,Q,ee,Tt,Qe,Ne),Qe.side=Kt,Qe.needsUpdate=!0,ke=!0}}ke===!0&&(U.updateMultisampleRenderTarget(ge),U.updateRenderTargetMipmap(ge))}g.setRenderTarget(Le),g.setClearColor(I,z),ze!==void 0&&(ee.viewport=ze),g.toneMapping=Ue}function Fi(R,W,Q){const ee=W.isScene===!0?W.overrideMaterial:null;for(let X=0,ge=R.length;X<ge;X++){const Re=R[X],Le=Re.object,Ue=Re.geometry,ze=ee===null?Re.material:ee,ke=Re.group;Le.layers.test(Q.layers)&&da(Le,W,Q,Ue,ze,ke)}}function da(R,W,Q,ee,X,ge){R.onBeforeRender(g,W,Q,ee,X,ge),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(g,W,Q,ee,R,ge),X.transparent===!0&&X.side===qt&&X.forceSinglePass===!1?(X.side=bt,X.needsUpdate=!0,g.renderBufferDirect(Q,W,ee,X,R,ge),X.side=yn,X.needsUpdate=!0,g.renderBufferDirect(Q,W,ee,X,R,ge),X.side=qt):g.renderBufferDirect(Q,W,ee,X,R,ge),R.onAfterRender(g,W,Q,ee,X,ge)}function Oi(R,W,Q){W.isScene!==!0&&(W=Ce);const ee=we.get(R),X=h.state.lights,ge=h.state.shadowsArray,Re=X.state.version,Le=oe.getParameters(R,X.state,ge,W,Q),Ue=oe.getProgramCacheKey(Le);let ze=ee.programs;ee.environment=R.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(R.isMeshStandardMaterial?Y:b).get(R.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,ze===void 0&&(R.addEventListener("dispose",Ge),ze=new Map,ee.programs=ze);let ke=ze.get(Ue);if(ke!==void 0){if(ee.currentProgram===ke&&ee.lightsStateVersion===Re)return ma(R,Le),ke}else Le.uniforms=oe.getUniforms(R),R.onBeforeCompile(Le,g),ke=oe.acquireProgram(Le,Ue),ze.set(Ue,ke),ee.uniforms=Le.uniforms;const Ie=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ie.clippingPlanes=se.uniform),ma(R,Le),ee.needsLights=vl(R),ee.lightsStateVersion=Re,ee.needsLights&&(Ie.ambientLightColor.value=X.state.ambient,Ie.lightProbe.value=X.state.probe,Ie.directionalLights.value=X.state.directional,Ie.directionalLightShadows.value=X.state.directionalShadow,Ie.spotLights.value=X.state.spot,Ie.spotLightShadows.value=X.state.spotShadow,Ie.rectAreaLights.value=X.state.rectArea,Ie.ltc_1.value=X.state.rectAreaLTC1,Ie.ltc_2.value=X.state.rectAreaLTC2,Ie.pointLights.value=X.state.point,Ie.pointLightShadows.value=X.state.pointShadow,Ie.hemisphereLights.value=X.state.hemi,Ie.directionalShadowMap.value=X.state.directionalShadowMap,Ie.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ie.spotShadowMap.value=X.state.spotShadowMap,Ie.spotLightMatrix.value=X.state.spotLightMatrix,Ie.spotLightMap.value=X.state.spotLightMap,Ie.pointShadowMap.value=X.state.pointShadowMap,Ie.pointShadowMatrix.value=X.state.pointShadowMatrix),ee.currentProgram=ke,ee.uniformsList=null,ke}function pa(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=pr.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function ma(R,W){const Q=we.get(R);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function _l(R,W,Q,ee,X){W.isScene!==!0&&(W=Ce),U.resetTextureUnits();const ge=W.fog,Re=ee.isMeshStandardMaterial?W.environment:null,Le=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:di,Ue=(ee.isMeshStandardMaterial?Y:b).get(ee.envMap||Re),ze=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ke=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ie=!!Q.morphAttributes.position,$e=!!Q.morphAttributes.normal,it=!!Q.morphAttributes.color;let st=Sn;ee.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(st=g.toneMapping);const Tt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Qe=Tt!==void 0?Tt.length:0,Ne=we.get(ee),Kt=h.state.lights;if(j===!0&&(Z===!0||R!==v)){const Ut=R===v&&ee.id===x;se.setState(ee,R,Ut)}let et=!1;ee.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Kt.state.version||Ne.outputColorSpace!==Le||X.isBatchedMesh&&Ne.batching===!1||!X.isBatchedMesh&&Ne.batching===!0||X.isBatchedMesh&&Ne.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ne.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ne.instancing===!1||!X.isInstancedMesh&&Ne.instancing===!0||X.isSkinnedMesh&&Ne.skinning===!1||!X.isSkinnedMesh&&Ne.skinning===!0||X.isInstancedMesh&&Ne.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ne.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ne.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ne.instancingMorph===!1&&X.morphTexture!==null||Ne.envMap!==Ue||ee.fog===!0&&Ne.fog!==ge||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==se.numPlanes||Ne.numIntersection!==se.numIntersection)||Ne.vertexAlphas!==ze||Ne.vertexTangents!==ke||Ne.morphTargets!==Ie||Ne.morphNormals!==$e||Ne.morphColors!==it||Ne.toneMapping!==st||Ne.morphTargetsCount!==Qe)&&(et=!0):(et=!0,Ne.__version=ee.version);let Ot=Ne.currentProgram;et===!0&&(Ot=Oi(ee,W,X));let zn=!1,wt=!1,vi=!1;const at=Ot.getUniforms(),Wt=Ne.uniforms;if(Ee.useProgram(Ot.program)&&(zn=!0,wt=!0,vi=!0),ee.id!==x&&(x=ee.id,wt=!0),zn||v!==R){Ee.buffers.depth.getReversed()?(V.copy(R.projectionMatrix),Ac(V),bc(V),at.setValue(O,"projectionMatrix",V)):at.setValue(O,"projectionMatrix",R.projectionMatrix),at.setValue(O,"viewMatrix",R.matrixWorldInverse);const hn=at.map.cameraPosition;hn!==void 0&&hn.setValue(O,xe.setFromMatrixPosition(R.matrixWorld)),pe.logarithmicDepthBuffer&&at.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&at.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),v!==R&&(v=R,wt=!0,vi=!0)}if(X.isSkinnedMesh){at.setOptional(O,X,"bindMatrix"),at.setOptional(O,X,"bindMatrixInverse");const Ut=X.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),at.setValue(O,"boneTexture",Ut.boneTexture,U))}X.isBatchedMesh&&(at.setOptional(O,X,"batchingTexture"),at.setValue(O,"batchingTexture",X._matricesTexture,U),at.setOptional(O,X,"batchingIdTexture"),at.setValue(O,"batchingIdTexture",X._indirectTexture,U),at.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&at.setValue(O,"batchingColorTexture",X._colorsTexture,U));const xi=Q.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&_e.update(X,Q,Ot),(wt||Ne.receiveShadow!==X.receiveShadow)&&(Ne.receiveShadow=X.receiveShadow,at.setValue(O,"receiveShadow",X.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Wt.envMap.value=Ue,Wt.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&W.environment!==null&&(Wt.envMapIntensity.value=W.environmentIntensity),wt&&(at.setValue(O,"toneMappingExposure",g.toneMappingExposure),Ne.needsLights&&gl(Wt,vi),ge&&ee.fog===!0&&he.refreshFogUniforms(Wt,ge),he.refreshMaterialUniforms(Wt,ee,P,q,h.state.transmissionRenderTarget[R.id]),pr.upload(O,pa(Ne),Wt,U)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(pr.upload(O,pa(Ne),Wt,U),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&at.setValue(O,"center",X.center),at.setValue(O,"modelViewMatrix",X.modelViewMatrix),at.setValue(O,"normalMatrix",X.normalMatrix),at.setValue(O,"modelMatrix",X.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Ut=ee.uniformsGroups;for(let hn=0,un=Ut.length;hn<un;hn++){const _a=Ut[hn];k.update(_a,Ot),k.bind(_a,Ot)}}return Ot}function gl(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function vl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,W,Q){we.get(R.texture).__webglTexture=W,we.get(R.depthTexture).__webglTexture=Q;const ee=we.get(R);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=Q===void 0,ee.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const Q=we.get(R);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,Q=0){w=R,E=W,y=Q;let ee=!0,X=null,ge=!1,Re=!1;if(R){const Ue=we.get(R);if(Ue.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(O.FRAMEBUFFER,null),ee=!1;else if(Ue.__webglFramebuffer===void 0)U.setupRenderTarget(R);else if(Ue.__hasExternalTextures)U.rebindTextures(R,we.get(R.texture).__webglTexture,we.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ie=R.depthTexture;if(Ue.__boundDepthTexture!==Ie){if(Ie!==null&&we.has(Ie)&&(R.width!==Ie.image.width||R.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(R)}}const ze=R.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Re=!0);const ke=we.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[W])?X=ke[W][Q]:X=ke[W],ge=!0):R.samples>0&&U.useMultisampledRTT(R)===!1?X=we.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?X=ke[Q]:X=ke,C.copy(R.viewport),L.copy(R.scissor),D=R.scissorTest}else C.copy(H).multiplyScalar(P).floor(),L.copy(K).multiplyScalar(P).floor(),D=ce;if(Ee.bindFramebuffer(O.FRAMEBUFFER,X)&&ee&&Ee.drawBuffers(R,X),Ee.viewport(C),Ee.scissor(L),Ee.setScissorTest(D),ge){const Ue=we.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ue.__webglTexture,Q)}else if(Re){const Ue=we.get(R.texture),ze=W||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ue.__webglTexture,Q||0,ze)}x=-1},this.readRenderTargetPixels=function(R,W,Q,ee,X,ge,Re){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=we.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){Ee.bindFramebuffer(O.FRAMEBUFFER,Le);try{const Ue=R.texture,ze=Ue.format,ke=Ue.type;if(!pe.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-ee&&Q>=0&&Q<=R.height-X&&O.readPixels(W,Q,ee,X,Fe.convert(ze),Fe.convert(ke),ge)}finally{const Ue=w!==null?we.get(w).__webglFramebuffer:null;Ee.bindFramebuffer(O.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(R,W,Q,ee,X,ge,Re){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=we.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){const Ue=R.texture,ze=Ue.format,ke=Ue.type;if(!pe.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-ee&&Q>=0&&Q<=R.height-X){Ee.bindFramebuffer(O.FRAMEBUFFER,Le);const Ie=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ie),O.bufferData(O.PIXEL_PACK_BUFFER,ge.byteLength,O.STREAM_READ),O.readPixels(W,Q,ee,X,Fe.convert(ze),Fe.convert(ke),0);const $e=w!==null?we.get(w).__webglFramebuffer:null;Ee.bindFramebuffer(O.FRAMEBUFFER,$e);const it=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Tc(O,it,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ie),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ge),O.deleteBuffer(Ie),O.deleteSync(it),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,Q=0){R.isTexture!==!0&&(bi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const ee=Math.pow(2,-Q),X=Math.floor(R.image.width*ee),ge=Math.floor(R.image.height*ee),Re=W!==null?W.x:0,Le=W!==null?W.y:0;U.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,Re,Le,X,ge),Ee.unbindTexture()},this.copyTextureToTexture=function(R,W,Q=null,ee=null,X=0){R.isTexture!==!0&&(bi("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,R=arguments[1],W=arguments[2],X=arguments[3]||0,Q=null);let ge,Re,Le,Ue,ze,ke,Ie,$e,it;const st=R.isCompressedTexture?R.mipmaps[X]:R.image;Q!==null?(ge=Q.max.x-Q.min.x,Re=Q.max.y-Q.min.y,Le=Q.isBox3?Q.max.z-Q.min.z:1,Ue=Q.min.x,ze=Q.min.y,ke=Q.isBox3?Q.min.z:0):(ge=st.width,Re=st.height,Le=st.depth||1,Ue=0,ze=0,ke=0),ee!==null?(Ie=ee.x,$e=ee.y,it=ee.z):(Ie=0,$e=0,it=0);const Tt=Fe.convert(W.format),Qe=Fe.convert(W.type);let Ne;W.isData3DTexture?(U.setTexture3D(W,0),Ne=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(U.setTexture2DArray(W,0),Ne=O.TEXTURE_2D_ARRAY):(U.setTexture2D(W,0),Ne=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const Kt=O.getParameter(O.UNPACK_ROW_LENGTH),et=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ot=O.getParameter(O.UNPACK_SKIP_PIXELS),zn=O.getParameter(O.UNPACK_SKIP_ROWS),wt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,st.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,st.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ue),O.pixelStorei(O.UNPACK_SKIP_ROWS,ze),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ke);const vi=R.isDataArrayTexture||R.isData3DTexture,at=W.isDataArrayTexture||W.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Wt=we.get(R),xi=we.get(W),Ut=we.get(Wt.__renderTarget),hn=we.get(xi.__renderTarget);Ee.bindFramebuffer(O.READ_FRAMEBUFFER,Ut.__webglFramebuffer),Ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,hn.__webglFramebuffer);for(let un=0;un<Le;un++)vi&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,we.get(R).__webglTexture,X,ke+un),R.isDepthTexture?(at&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,we.get(W).__webglTexture,X,it+un),O.blitFramebuffer(Ue,ze,ge,Re,Ie,$e,ge,Re,O.DEPTH_BUFFER_BIT,O.NEAREST)):at?O.copyTexSubImage3D(Ne,X,Ie,$e,it+un,Ue,ze,ge,Re):O.copyTexSubImage2D(Ne,X,Ie,$e,it+un,Ue,ze,ge,Re);Ee.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else at?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(Ne,X,Ie,$e,it,ge,Re,Le,Tt,Qe,st.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Ne,X,Ie,$e,it,ge,Re,Le,Tt,st.data):O.texSubImage3D(Ne,X,Ie,$e,it,ge,Re,Le,Tt,Qe,st):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,X,Ie,$e,ge,Re,Tt,Qe,st.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,X,Ie,$e,st.width,st.height,Tt,st.data):O.texSubImage2D(O.TEXTURE_2D,X,Ie,$e,ge,Re,Tt,Qe,st);O.pixelStorei(O.UNPACK_ROW_LENGTH,Kt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,et),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ot),O.pixelStorei(O.UNPACK_SKIP_ROWS,zn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,wt),X===0&&W.generateMipmaps&&O.generateMipmap(Ne),Ee.unbindTexture()},this.copyTextureToTexture3D=function(R,W,Q=null,ee=null,X=0){return R.isTexture!==!0&&(bi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,ee=arguments[1]||null,R=arguments[2],W=arguments[3],X=arguments[4]||0),bi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,Q,ee,X)},this.initRenderTarget=function(R){we.get(R).__webglFramebuffer===void 0&&U.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?U.setTextureCube(R,0):R.isData3DTexture?U.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?U.setTexture2DArray(R,0):U.setTexture2D(R,0),Ee.unbindTexture()},this.resetState=function(){E=0,y=0,w=null,Ee.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}class go extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jt,this.environmentIntensity=1,this.environmentRotation=new jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dl extends mi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mr=new $,Er=new $,vo=new rt,Ti=new br,sr=new Ar,is=new $,xo=new $;class Fp extends _t{constructor(e=new cn,t=new dl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Mr.fromBufferAttribute(t,r-1),Er.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Mr.distanceTo(Er);e.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(r),sr.radius+=s,e.ray.intersectsSphere(sr)===!1)return;vo.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(vo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,p=n.index,d=n.attributes.position;if(p!==null){const m=Math.max(0,a.start),M=Math.min(p.count,a.start+a.count);for(let _=m,u=M-1;_<u;_+=c){const h=p.getX(_),S=p.getX(_+1),A=ar(this,e,Ti,l,h,S);A&&t.push(A)}if(this.isLineLoop){const _=p.getX(M-1),u=p.getX(m),h=ar(this,e,Ti,l,_,u);h&&t.push(h)}}else{const m=Math.max(0,a.start),M=Math.min(d.count,a.start+a.count);for(let _=m,u=M-1;_<u;_+=c){const h=ar(this,e,Ti,l,_,_+1);h&&t.push(h)}if(this.isLineLoop){const _=ar(this,e,Ti,l,M-1,m);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ar(i,e,t,n,r,s){const a=i.geometry.attributes.position;if(Mr.fromBufferAttribute(a,r),Er.fromBufferAttribute(a,s),t.distanceSqToSegment(Mr,Er,is,xo)>n)return;is.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(is);if(!(l<e.near||l>e.far))return{distance:l,point:xo.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Mo=new $,Eo=new $;class Op extends Fp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Mo.fromBufferAttribute(t,r),Eo.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Mo.distanceTo(Eo);e.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rs extends Mt{constructor(e,t,n,r,s,a,o,l,c,p,f,d){super(null,a,o,l,c,p,r,s,f,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class U0 extends Mt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class I0 extends mi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ko,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class aa extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class N0 extends aa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ss=new rt,So=new $,yo=new $;class Bp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ra,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;So.setFromMatrixPosition(e.matrixWorld),t.position.copy(So),yo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yo),t.updateMatrixWorld(),ss.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ss),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ss)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zp extends Bp{constructor(){super(new ol(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class F0 extends aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new zp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class O0 extends aa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const oa="\\[\\]\\.:\\/",Hp=new RegExp("["+oa+"]","g"),la="[^"+oa+"]",Gp="[^"+oa.replace("\\.","")+"]",kp=/((?:WC+[\/:])*)/.source.replace("WC",la),Vp=/(WCOD+)?/.source.replace("WCOD",Gp),Wp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",la),Xp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",la),qp=new RegExp("^"+kp+Vp+Wp+Xp+"$"),Yp=["material","materials","bones","map"];class jp{constructor(e,t,n){const r=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hp,"")}static parseTrackName(e){const t=qp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);Yp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===c){c=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=jp;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const To=new rt;class B0{constructor(e,t,n=0,r=1/0){this.ray=new br(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ia,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return To.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(To),this}intersectObject(e,t=!0,n=[]){return Ys(e,this,n,t),n.sort(Ao),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ys(e[r],this,n,t);return n.sort(Ao),n}}function Ao(i,e){return i.distance-e.distance}function Ys(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Ys(s[a],e,t,!0)}}class bo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class z0 extends Op{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new cn;s.setIndex(new ft(n,1)),s.setAttribute("position",new Yt(r,3)),super(s,new dl({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Kp extends Bn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sr);const wo={type:"change"},ca={type:"start"},pl={type:"end"},or=new br,Ro=new vn,$p=Math.cos(70*vr.DEG2RAD),ut=new $,At=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},as=1e-6;class H0 extends Kp{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.enabled=!0,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ii.ROTATE,MIDDLE:ii.DOLLY,RIGHT:ii.PAN},this.touches={ONE:ti.ROTATE,TWO:ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Tn,this._lastTargetPosition=new $,this._quat=new Tn().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bo,this._sphericalDelta=new bo,this._scale=1,this._panOffset=new $,this._rotateStart=new We,this._rotateEnd=new We,this._rotateDelta=new We,this._panStart=new We,this._panEnd=new We,this._panDelta=new We,this._dollyStart=new We,this._dollyEnd=new We,this._dollyDelta=new We,this._dollyDirection=new $,this._mouse=new We,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Jp.bind(this),this._onPointerDown=Zp.bind(this),this._onPointerUp=Qp.bind(this),this._onContextMenu=a0.bind(this),this._onMouseWheel=n0.bind(this),this._onKeyDown=i0.bind(this),this._onTouchStart=r0.bind(this),this._onTouchMove=s0.bind(this),this._onMouseDown=e0.bind(this),this._onMouseMove=t0.bind(this),this._interceptControlDown=o0.bind(this),this._interceptControlUp=l0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wo),this.update(),this.state=nt.NONE}update(e=null){const t=this.object.position;ut.copy(t).sub(this.target),ut.applyQuaternion(this._quat),this._spherical.setFromVector3(ut),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=At:n>Math.PI&&(n-=At),r<-Math.PI?r+=At:r>Math.PI&&(r-=At),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(ut.setFromSpherical(this._spherical),ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ut.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new $(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new $(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(or.origin.copy(this.object.position),or.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(or.direction))<$p?this.object.lookAt(this.target):(Ro.setFromNormalAndCoplanarPoint(this.object.up,this.target),or.intersectPlane(Ro,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>as||8*(1-this._lastQuaternion.dot(this.object.quaternion))>as||this._lastTargetPosition.distanceToSquared(this.target)>as?(this.dispatchEvent(wo),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?At/60*this.autoRotateSpeed*e:At/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ut.setFromMatrixColumn(t,0),ut.multiplyScalar(-e),this._panOffset.add(ut)}_panUp(e,t){this.screenSpacePanning===!0?ut.setFromMatrixColumn(t,1):(ut.setFromMatrixColumn(t,0),ut.crossVectors(this.object.up,ut)),ut.multiplyScalar(e),this._panOffset.add(ut)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ut.copy(r).sub(this.target);let s=ut.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(At*this._rotateDelta.x/t.clientHeight),this._rotateUp(At*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(At*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-At*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(At*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-At*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(At*this._rotateDelta.x/t.clientHeight),this._rotateUp(At*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new We,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Zp(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Jp(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Qp(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pl),this.state=nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function e0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ii.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=nt.DOLLY;break;case ii.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}break;case ii.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(ca)}function t0(i){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function n0(i){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(i.preventDefault(),this.dispatchEvent(ca),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(pl))}function i0(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function r0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ti.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=nt.TOUCH_ROTATE;break;case ti.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case ti.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=nt.TOUCH_DOLLY_PAN;break;case ti.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(ca)}function s0(i){switch(this._trackPointer(i),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=nt.NONE}}function a0(i){this.enabled!==!1&&i.preventDefault()}function o0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function l0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Co={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class js{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new v0(e)}),this.register(function(e){return new x0(e)}),this.register(function(e){return new y0(e)}),this.register(function(e){return new T0(e)}),this.register(function(e){return new A0(e)}),this.register(function(e){return new b0(e)}),this.register(function(e){return new M0(e)}),this.register(function(e){return new E0(e)}),this.register(function(e){return new S0(e)}),this.register(function(e){return new w0(e)}),this.register(function(e){return new R0(e)}),this.register(function(e){return new C0(e)}),this.register(function(e){return new P0(e)}),this.register(function(e){return new D0(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,r){const s=new g0,a=[];for(let o=0,l=this.pluginCallbacks.length;o<l;o++)a.push(this.pluginCallbacks[o](s));s.setPlugins(a),s.setTextureUtils(this.textureUtils),s.writeAsync(e,t,r).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,r,s,t)})}}const qe={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},os="KHR_mesh_quantization",Dt={};Dt[Ft]=qe.NEAREST;Dt[Bo]=qe.NEAREST_MIPMAP_NEAREST;Dt[Ai]=qe.NEAREST_MIPMAP_LINEAR;Dt[Vt]=qe.LINEAR;Dt[lr]=qe.LINEAR_MIPMAP_NEAREST;Dt[Mn]=qe.LINEAR_MIPMAP_LINEAR;Dt[xn]=qe.CLAMP_TO_EDGE;Dt[mr]=qe.REPEAT;Dt[_r]=qe.MIRRORED_REPEAT;const Po={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},c0=new Ye,Do=12,h0=1179937895,u0=2,Lo=8,f0=1313821514,d0=5130562;function Ri(i,e){return i.length===e.length&&i.every(function(t,n){return t===e[n]})}function p0(i){return new TextEncoder().encode(i).buffer}function m0(i){return Ri(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function _0(i,e,t){const n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let r=e;r<e+t;r++)for(let s=0;s<i.itemSize;s++){let a;i.itemSize>4?a=i.array[r*i.itemSize+s]:(s===0?a=i.getX(r):s===1?a=i.getY(r):s===2?a=i.getZ(r):s===3&&(a=i.getW(r)),i.normalized===!0&&(a=vr.normalize(a,i.array))),n.min[s]=Math.min(n.min[s],a),n.max[s]=Math.max(n.max[s],a)}return n}function ml(i){return Math.ceil(i/4)*4}function ls(i,e=0){const t=ml(i.byteLength);if(t!==i.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(i)),e!==0)for(let r=i.byteLength;r<t;r++)n[r]=e;return n.buffer}return i}function Uo(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function Io(i,e){if(i.toBlob!==void 0)return new Promise(n=>i.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),i.convertToBlob({type:e,quality:t})}class g0{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+Sr}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);const r=this,s=r.buffers,a=r.json;n=r.options;const o=r.extensionsUsed,l=r.extensionsRequired,c=new Blob(s,{type:"application/octet-stream"}),p=Object.keys(o),f=Object.keys(l);if(p.length>0&&(a.extensionsUsed=p),f.length>0&&(a.extensionsRequired=f),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),n.binary===!0){const d=new FileReader;d.readAsArrayBuffer(c),d.onloadend=function(){const m=ls(d.result),M=new DataView(new ArrayBuffer(Lo));M.setUint32(0,m.byteLength,!0),M.setUint32(4,d0,!0);const _=ls(p0(JSON.stringify(a)),32),u=new DataView(new ArrayBuffer(Lo));u.setUint32(0,_.byteLength,!0),u.setUint32(4,f0,!0);const h=new ArrayBuffer(Do),S=new DataView(h);S.setUint32(0,h0,!0),S.setUint32(4,u0,!0);const A=Do+u.byteLength+_.byteLength+M.byteLength+m.byteLength;S.setUint32(8,A,!0);const g=new Blob([h,u,_,M,m],{type:"application/octet-stream"}),T=new FileReader;T.readAsArrayBuffer(g),T.onloadend=function(){t(T.result)}}}else if(a.buffers&&a.buffers.length>0){const d=new FileReader;d.readAsDataURL(c),d.onloadend=function(){const m=d.result;a.buffers[0].uri=m,t(a)}}else t(a)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,r=this.extensionsUsed;try{const s=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&s.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const a in s.gltfExtensions)t.extensions[a]=s.gltfExtensions[a],r[a]=!0;delete s.gltfExtensions}Object.keys(s).length>0&&(t.extras=s)}catch(s){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+s.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const r=new Map;r.set(!0,this.uid++),r.set(!1,this.uid++),this.uids.set(e,r)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new $;for(let r=0,s=e.count;r<s;r++)if(Math.abs(n.fromBufferAttribute(e,r).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),r=new $;for(let s=0,a=n.count;s<a;s++)r.fromBufferAttribute(n,s),r.x===0&&r.y===0&&r.z===0?r.setX(1):r.normalize(),n.setXYZ(s,r.x,r.y,r.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const r={};(t.offset.x!==0||t.offset.y!==0)&&(r.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(r.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(r.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=r,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(m){return m.colorSpace===Pt?function(_){return _<.04045?_*.0773993808:Math.pow(_*.9478672986+.0521327014,2.4)}:function(_){return _}}e instanceof rs&&(e=await this.decompressTextureAsync(e)),t instanceof rs&&(t=await this.decompressTextureAsync(t));const r=e?e.image:null,s=t?t.image:null,a=Math.max(r?r.width:0,s?s.width:0),o=Math.max(r?r.height:0,s?s.height:0),l=Uo();l.width=a,l.height=o;const c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,a,o);const p=c.getImageData(0,0,a,o);if(r){c.drawImage(r,0,0,a,o);const m=n(e),M=c.getImageData(0,0,a,o).data;for(let _=2;_<M.length;_+=4)p.data[_]=m(M[_]/256)*256}if(s){c.drawImage(s,0,0,a,o);const m=n(t),M=c.getImageData(0,0,a,o).data;for(let _=1;_<M.length;_+=4)p.data[_]=m(M[_]/256)*256}c.putImageData(p,0,0);const d=(e||t).clone();return d.source=new na(l),d.colorSpace=nn,d.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),d}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,r,s){const a=this.json;a.bufferViews||(a.bufferViews=[]);let o;switch(t){case qe.BYTE:case qe.UNSIGNED_BYTE:o=1;break;case qe.SHORT:case qe.UNSIGNED_SHORT:o=2;break;default:o=4}let l=e.itemSize*o;s===qe.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=ml(r*l),p=new DataView(new ArrayBuffer(c));let f=0;for(let M=n;M<n+r;M++){for(let _=0;_<e.itemSize;_++){let u;e.itemSize>4?u=e.array[M*e.itemSize+_]:(_===0?u=e.getX(M):_===1?u=e.getY(M):_===2?u=e.getZ(M):_===3&&(u=e.getW(M)),e.normalized===!0&&(u=vr.normalize(u,e.array))),t===qe.FLOAT?p.setFloat32(f,u,!0):t===qe.INT?p.setInt32(f,u,!0):t===qe.UNSIGNED_INT?p.setUint32(f,u,!0):t===qe.SHORT?p.setInt16(f,u,!0):t===qe.UNSIGNED_SHORT?p.setUint16(f,u,!0):t===qe.BYTE?p.setInt8(f,u):t===qe.UNSIGNED_BYTE&&p.setUint8(f,u),f+=o}f%l!==0&&(f+=l-f%l)}const d={buffer:this.processBuffer(p.buffer),byteOffset:this.byteOffset,byteLength:c};return s!==void 0&&(d.target=s),s===qe.ARRAY_BUFFER&&(d.byteStride=l),this.byteOffset+=c,a.bufferViews.push(d),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(r){const s=new FileReader;s.readAsArrayBuffer(e),s.onloadend=function(){const a=ls(s.result),o={buffer:t.processBuffer(a),byteOffset:t.byteOffset,byteLength:a.byteLength};t.byteOffset+=a.byteLength,r(n.bufferViews.push(o)-1)}})}processAccessor(e,t,n,r){const s=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let o;if(e.array.constructor===Float32Array)o=qe.FLOAT;else if(e.array.constructor===Int32Array)o=qe.INT;else if(e.array.constructor===Uint32Array)o=qe.UNSIGNED_INT;else if(e.array.constructor===Int16Array)o=qe.SHORT;else if(e.array.constructor===Uint16Array)o=qe.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)o=qe.BYTE;else if(e.array.constructor===Uint8Array)o=qe.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(r===void 0||r===1/0)&&(r=e.count),r===0)return null;const l=_0(e,n,r);let c;t!==void 0&&(c=e===t.index?qe.ELEMENT_ARRAY_BUFFER:qe.ARRAY_BUFFER);const p=this.processBufferView(e,o,n,r,c),f={bufferView:p.id,byteOffset:p.byteOffset,componentType:o,count:r,max:l.max,min:l.min,type:a[e.itemSize]};return e.normalized===!0&&(f.normalized=!0),s.accessors||(s.accessors=[]),s.accessors.push(f)-1}processImage(e,t,n,r="image/png"){if(e!==null){const s=this,a=s.cache,o=s.json,l=s.options,c=s.pending;a.images.has(e)||a.images.set(e,{});const p=a.images.get(e),f=r+":flipY/"+n.toString();if(p[f]!==void 0)return p[f];o.images||(o.images=[]);const d={mimeType:r},m=Uo();m.width=Math.min(e.width,l.maxTextureSize),m.height=Math.min(e.height,l.maxTextureSize);const M=m.getContext("2d",{willReadFrequently:!0});if(n===!0&&(M.translate(0,m.height),M.scale(1,-1)),e.data!==void 0){t!==Nt&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const u=new Uint8ClampedArray(e.height*e.width*4);for(let h=0;h<u.length;h+=4)u[h+0]=e.data[h+0],u[h+1]=e.data[h+1],u[h+2]=e.data[h+2],u[h+3]=e.data[h+3];M.putImageData(new ImageData(u,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)M.drawImage(e,0,0,m.width,m.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(Io(m,r).then(u=>s.processBufferViewImage(u)).then(u=>{d.bufferView=u})):m.toDataURL!==void 0?d.uri=m.toDataURL(r):c.push(Io(m,r).then(u=>new FileReader().readAsDataURL(u)).then(u=>{d.uri=u}));const _=o.images.push(d)-1;return p[f]=_,_}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:Dt[e.magFilter],minFilter:Dt[e.minFilter],wrapS:Dt[e.wrapS],wrapT:Dt[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){const n=this.options,r=this.cache,s=this.json;if(r.textures.has(e))return r.textures.get(e);s.textures||(s.textures=[]),e instanceof rs&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let a=e.userData.mimeType;a==="image/webp"&&(a="image/png");const o={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,a)};e.name&&(o.name=e.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(e,o)});const l=s.textures.push(o)-1;return r.textures.set(e,l),l}async processMaterialAsync(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const r={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const s=e.color.toArray().concat([e.opacity]);if(Ri(s,[1,1,1,1])||(r.pbrMetallicRoughness.baseColorFactor=s),e.isMeshStandardMaterial?(r.pbrMetallicRoughness.metallicFactor=e.metalness,r.pbrMetallicRoughness.roughnessFactor=e.roughness):(r.pbrMetallicRoughness.metallicFactor=0,r.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){const o=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),l={index:await this.processTextureAsync(o),texCoord:o.channel};this.applyTextureTransform(l,o),r.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){const o={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(o,e.map),r.pbrMetallicRoughness.baseColorTexture=o}if(e.emissive){const o=e.emissive;if(Math.max(o.r,o.g,o.b)>0&&(r.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const c={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(c,e.emissiveMap),r.emissiveTexture=c}}if(e.normalMap){const o={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(o.scale=e.normalScale.x),this.applyTextureTransform(o,e.normalMap),r.normalTexture=o}if(e.aoMap){const o={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(o.strength=e.aoMapIntensity),this.applyTextureTransform(o,e.aoMap),r.occlusionTexture=o}e.transparent?r.alphaMode="BLEND":e.alphaTest>0&&(r.alphaMode="MASK",r.alphaCutoff=e.alphaTest),e.side===qt&&(r.doubleSided=!0),e.name!==""&&(r.name=e.name),this.serializeUserData(e,r),await this._invokeAllAsync(async function(o){o.writeMaterialAsync&&await o.writeMaterialAsync(e,r)});const a=n.materials.push(r)-1;return t.materials.set(e,a),a}async processMeshAsync(e){const t=this.cache,n=this.json,r=[e.geometry.uuid];if(Array.isArray(e.material))for(let g=0,T=e.material.length;g<T;g++)r.push(e.material[g].uuid);else r.push(e.material.uuid);const s=r.join(":");if(t.meshes.has(s))return t.meshes.get(s);const a=e.geometry;let o;e.isLineSegments?o=qe.LINES:e.isLineLoop?o=qe.LINE_LOOP:e.isLine?o=qe.LINE_STRIP:e.isPoints?o=qe.POINTS:o=e.material.wireframe?qe.LINES:qe.TRIANGLES;const l={},c={},p=[],f=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},m=a.getAttribute("normal");m!==void 0&&!this.isNormalizedNormalAttribute(m)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(m)));let M=null;for(let g in a.attributes){if(g.slice(0,5)==="morph")continue;const T=a.attributes[g];if(g=d[g]||g.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(g)||(g="_"+g),t.attributes.has(this.getUID(T))){c[g]=t.attributes.get(this.getUID(T));continue}M=null;const y=T.array;g==="JOINTS_0"&&!(y instanceof Uint16Array)&&!(y instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),M=new ft(new Uint16Array(y),T.itemSize,T.normalized)):(y instanceof Uint32Array||y instanceof Int32Array)&&!g.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${g}" converted to type FLOAT.`),M=js.Utils.toFloat32BufferAttribute(T));const w=this.processAccessor(M||T,a);w!==null&&(g.startsWith("_")||this.detectMeshQuantization(g,T),c[g]=w,t.attributes.set(this.getUID(T),w))}if(m!==void 0&&a.setAttribute("normal",m),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const g=[],T=[],E={};if(e.morphTargetDictionary!==void 0)for(const y in e.morphTargetDictionary)E[e.morphTargetDictionary[y]]=y;for(let y=0;y<e.morphTargetInfluences.length;++y){const w={};let x=!1;for(const v in a.morphAttributes){if(v!=="position"&&v!=="normal"){x||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),x=!0);continue}const C=a.morphAttributes[v][y],L=v.toUpperCase(),D=a.attributes[v];if(t.attributes.has(this.getUID(C,!0))){w[L]=t.attributes.get(this.getUID(C,!0));continue}const I=C.clone();if(!a.morphTargetsRelative)for(let z=0,B=C.count;z<B;z++)for(let q=0;q<C.itemSize;q++)q===0&&I.setX(z,C.getX(z)-D.getX(z)),q===1&&I.setY(z,C.getY(z)-D.getY(z)),q===2&&I.setZ(z,C.getZ(z)-D.getZ(z)),q===3&&I.setW(z,C.getW(z)-D.getW(z));w[L]=this.processAccessor(I,a),t.attributes.set(this.getUID(D,!0),w[L])}f.push(w),g.push(e.morphTargetInfluences[y]),e.morphTargetDictionary!==void 0&&T.push(E[y])}l.weights=g,T.length>0&&(l.extras={},l.extras.targetNames=T)}const _=Array.isArray(e.material);if(_&&a.groups.length===0)return null;let u=!1;if(_&&a.index===null){const g=[];for(let T=0,E=a.attributes.position.count;T<E;T++)g[T]=T;a.setIndex(g),u=!0}const h=_?e.material:[e.material],S=_?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let g=0,T=S.length;g<T;g++){const E={mode:o,attributes:c};if(this.serializeUserData(a,E),f.length>0&&(E.targets=f),a.index!==null){let w=this.getUID(a.index);(S[g].start!==void 0||S[g].count!==void 0)&&(w+=":"+S[g].start+":"+S[g].count),t.attributes.has(w)?E.indices=t.attributes.get(w):(E.indices=this.processAccessor(a.index,a,S[g].start,S[g].count),t.attributes.set(w,E.indices)),E.indices===null&&delete E.indices}const y=await this.processMaterialAsync(h[S[g].materialIndex]);y!==null&&(E.material=y),p.push(E)}u===!0&&a.setIndex(null),l.primitives=p,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(g){g.writeMesh&&g.writeMesh(e,l)});const A=n.meshes.push(l)-1;return t.meshes.set(s,A),A}detectMeshQuantization(e,t){if(this.extensionsUsed[os])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const r=e.split("_",1)[0];Co[r]&&Co[r].includes(n)&&(this.extensionsUsed[os]=!0,this.extensionsRequired[os]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,r={type:n?"orthographic":"perspective"};return n?r.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:r.perspective={aspectRatio:e.aspect,yfov:vr.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(r.name=e.type),t.cameras.push(r)-1}processAnimation(e,t){const n=this.json,r=this.nodeMap;n.animations||(n.animations=[]),e=js.Utils.mergeMorphTargetTracks(e.clone(),t);const s=e.tracks,a=[],o=[];for(let l=0;l<s.length;++l){const c=s[l],p=Ze.parseTrackName(c.name);let f=Ze.findNode(t,p.nodeName);const d=Po[p.propertyName];if(p.objectName==="bones"&&(f.isSkinnedMesh===!0?f=f.skeleton.getBoneByName(p.objectIndex):f=void 0),!f||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name);continue}const m=1;let M=c.values.length/c.times.length;d===Po.morphTargetInfluences&&(M/=f.morphTargetInfluences.length);let _;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(_="CUBICSPLINE",M/=3):c.getInterpolation()===Kl?_="STEP":_="LINEAR",o.push({input:this.processAccessor(new ft(c.times,m)),output:this.processAccessor(new ft(c.values,M)),interpolation:_}),a.push({sampler:o.length-1,target:{node:r.get(f),path:d}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:o,channels:a}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,r=t.nodes[n.get(e)],s=e.skeleton;if(s===void 0)return null;const a=e.skeleton.bones[0];if(a===void 0)return null;const o=[],l=new Float32Array(s.bones.length*16),c=new rt;for(let f=0;f<s.bones.length;++f)o.push(n.get(s.bones[f])),c.copy(s.boneInverses[f]),c.multiply(e.bindMatrix).toArray(l,f*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new ft(l,16)),joints:o,skeleton:n.get(a)}),r.skin=t.skins.length-1}async processNodeAsync(e){const t=this.json,n=this.options,r=this.nodeMap;t.nodes||(t.nodes=[]);const s={};if(n.trs){const o=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();Ri(o,[0,0,0,1])||(s.rotation=o),Ri(l,[0,0,0])||(s.translation=l),Ri(c,[1,1,1])||(s.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),m0(e.matrix)===!1&&(s.matrix=e.matrix.elements);if(e.name!==""&&(s.name=String(e.name)),this.serializeUserData(e,s),e.isMesh||e.isLine||e.isPoints){const o=await this.processMeshAsync(e);o!==null&&(s.mesh=o)}else e.isCamera&&(s.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const o=[];for(let l=0,c=e.children.length;l<c;l++){const p=e.children[l];if(p.visible||n.onlyVisible===!1){const f=await this.processNodeAsync(p);f!==null&&o.push(f)}}o.length>0&&(s.children=o)}await this._invokeAllAsync(function(o){o.writeNode&&o.writeNode(e,s)});const a=t.nodes.push(s)-1;return r.set(e,a),a}async processSceneAsync(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const r={};e.name!==""&&(r.name=e.name),t.scenes.push(r);const s=[];for(let a=0,o=e.children.length;a<o;a++){const l=e.children[a];if(l.visible||n.onlyVisible===!1){const c=await this.processNodeAsync(l);c!==null&&s.push(c)}}s.length>0&&(r.nodes=s),this.serializeUserData(e,r)}async processObjectsAsync(e){const t=new go;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){const t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(r){r.beforeParse&&r.beforeParse(e)});const n=[];for(let r=0;r<e.length;r++)e[r]instanceof go?await this.processSceneAsync(e[r]):n.push(e[r]);n.length>0&&await this.processObjectsAsync(n);for(let r=0;r<this.skins.length;++r)this.processSkin(this.skins[r]);for(let r=0;r<t.animations.length;++r)this.processAnimation(t.animations[r],e[0]);await this._invokeAllAsync(function(r){r.afterParse&&r.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}}class v0{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,r=n.json,s=n.extensionsUsed,a={};e.name&&(a.name=e.name),a.color=e.color.toArray(),a.intensity=e.intensity,e.isDirectionalLight?a.type="directional":e.isPointLight?(a.type="point",e.distance>0&&(a.range=e.distance)):e.isSpotLight&&(a.type="spot",e.distance>0&&(a.range=e.distance),a.spot={},a.spot.innerConeAngle=(1-e.penumbra)*e.angle,a.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),s[this.name]||(r.extensions=r.extensions||{},r.extensions[this.name]={lights:[]},s[this.name]=!0);const o=r.extensions[this.name].lights;o.push(a),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}}class x0{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;const r=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},r[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class M0{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,r=n.extensionsUsed,s={};if(s.clearcoatFactor=e.clearcoat,e.clearcoatMap){const a={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(a,e.clearcoatMap),s.clearcoatTexture=a}if(s.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const a={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,e.clearcoatRoughnessMap),s.clearcoatRoughnessTexture=a}if(e.clearcoatNormalMap){const a={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(a.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(a,e.clearcoatNormalMap),s.clearcoatNormalTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class E0{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const r=this.writer.extensionsUsed,s={};s.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class S0{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,r=n.extensionsUsed,s={};if(s.iridescenceFactor=e.iridescence,e.iridescenceMap){const a={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(a,e.iridescenceMap),s.iridescenceTexture=a}if(s.iridescenceIor=e.iridescenceIOR,s.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],s.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const a={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(a,e.iridescenceThicknessMap),s.iridescenceThicknessTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class y0{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,r=n.extensionsUsed,s={};if(s.transmissionFactor=e.transmission,e.transmissionMap){const a={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(a,e.transmissionMap),s.transmissionTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class T0{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,r=n.extensionsUsed,s={};if(s.thicknessFactor=e.thickness,e.thicknessMap){const a={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(a,e.thicknessMap),s.thicknessTexture=a}e.attenuationDistance!==1/0&&(s.attenuationDistance=e.attenuationDistance),s.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class A0{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const r=this.writer.extensionsUsed,s={};s.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class b0{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(c0)&&!e.specularIntensityMap&&!e.specularColorMap)return;const n=this.writer,r=n.extensionsUsed,s={};if(e.specularIntensityMap){const a={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(a,e.specularIntensityMap),s.specularTexture=a}if(e.specularColorMap){const a={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(a,e.specularColorMap),s.specularColorTexture=a}s.specularFactor=e.specularIntensity,s.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class w0{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,r=n.extensionsUsed,s={};if(e.sheenRoughnessMap){const a={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(a,e.sheenRoughnessMap),s.sheenRoughnessTexture=a}if(e.sheenColorMap){const a={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(a,e.sheenColorMap),s.sheenColorTexture=a}s.sheenRoughnessFactor=e.sheenRoughness,s.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class R0{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,r=n.extensionsUsed,s={};if(e.anisotropyMap){const a={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(a,e.anisotropyMap),s.anisotropyTexture=a}s.anisotropyStrength=e.anisotropy,s.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class C0{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const r=this.writer.extensionsUsed,s={};s.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class P0{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const n=this.writer,r=n.extensionsUsed,s={};if(e.bumpMap){const a={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(a,e.bumpMap),s.bumpTexture=a}s.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=s,r[this.name]=!0}}class D0{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const n=this.writer,r=e,s=new Float32Array(r.count*3),a=new Float32Array(r.count*4),o=new Float32Array(r.count*3),l=new rt,c=new $,p=new Tn,f=new $;for(let m=0;m<r.count;m++)r.getMatrixAt(m,l),l.decompose(c,p,f),c.toArray(s,m*3),p.toArray(a,m*4),f.toArray(o,m*3);const d={TRANSLATION:n.processAccessor(new ft(s,3)),ROTATION:n.processAccessor(new ft(a,4)),SCALE:n.processAccessor(new ft(o,3))};r.instanceColor&&(d._COLOR_0=n.processAccessor(r.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}js.Utils={insertKeyframe:function(i,e){const n=i.getValueSize(),r=new i.TimeBufferType(i.times.length+1),s=new i.ValueBufferType(i.values.length+n),a=i.createInterpolant(new i.ValueBufferType(n));let o;if(i.times.length===0){r[0]=e;for(let l=0;l<n;l++)s[l]=0;o=0}else if(e<i.times[0]){if(Math.abs(i.times[0]-e)<.001)return 0;r[0]=e,r.set(i.times,1),s.set(a.evaluate(e),0),s.set(i.values,n),o=0}else if(e>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-e)<.001)return i.times.length-1;r[r.length-1]=e,r.set(i.times,0),s.set(i.values,0),s.set(a.evaluate(e),i.values.length),o=r.length-1}else for(let l=0;l<i.times.length;l++){if(Math.abs(i.times[l]-e)<.001)return l;if(i.times[l]<e&&i.times[l+1]>e){r.set(i.times.slice(0,l+1),0),r[l+1]=e,r.set(i.times.slice(l+1),l+2),s.set(i.values.slice(0,(l+1)*n),0),s.set(a.evaluate(e),(l+1)*n),s.set(i.values.slice((l+1)*n),(l+2)*n),o=l+1;break}}return i.times=r,i.values=s,o},mergeMorphTargetTracks:function(i,e){const t=[],n={},r=i.tracks;for(let s=0;s<r.length;++s){let a=r[s];const o=Ze.parseTrackName(a.name),l=Ze.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){t.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation($l)}const c=l.morphTargetInfluences.length,p=l.morphTargetDictionary[o.propertyIndex];if(p===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let f;if(n[l.uuid]===void 0){f=a.clone();const m=new f.ValueBufferType(c*f.times.length);for(let M=0;M<f.times.length;M++)m[M*c+p]=f.values[M];f.name=(o.nodeName||"")+".morphTargetInfluences",f.values=m,n[l.uuid]=f,t.push(f);continue}const d=a.createInterpolant(new a.ValueBufferType(1));f=n[l.uuid];for(let m=0;m<f.times.length;m++)f.values[m*c+p]=d.evaluate(f.times[m]);for(let m=0;m<a.times.length;m++){const M=this.insertKeyframe(f,a.times[m]);f.values[M*c+p]=a.values[m]}}return i.tracks=t,i},toFloat32BufferAttribute:function(i){const e=new ft(new Float32Array(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return e.array.set(i.array),e;for(let t=0,n=i.count;t<n;t++)for(let r=0;r<i.itemSize;r++)e.setComponent(t,r,i.getComponent(t,r));return e}};var J={};(function(){var i=function(){function r(s){this.message="JPEG error: "+s}return r.prototype=new Error,r.prototype.name="JpegError",r.constructor=r,r}(),e=function(){var r=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),s=4017,a=799,o=3406,l=2276,c=1567,p=3784,f=5793,d=2896;function m(g){g==null&&(g={}),g.w==null&&(g.w=-1),this.V=g.n,this.N=g.w}function M(g,T){for(var E=0,y=[],w,x,v=16,C;v>0&&!g[v-1];)v--;y.push({children:[],index:0});var L=y[0];for(w=0;w<v;w++){for(x=0;x<g[w];x++){for(L=y.pop(),L.children[L.index]=T[E];L.index>0;)L=y.pop();for(L.index++,y.push(L);y.length<=w;)y.push(C={children:[],index:0}),L.children[L.index]=C.children,L=C;E++}w+1<v&&(y.push(C={children:[],index:0}),L.children[L.index]=C.children,L=C)}return y[0].children}function _(g,T,E){return 64*((g.P+1)*T+E)}function u(g,T,E,y,w,x,v,C,L,D){D==null&&(D=!1);var I=E.m,z=E.Z,B=T,q=0,P=0,F=0,N=0,H,K=0,ce,G,j,Z,V,ae,xe=0,ue,Ce,be,Pe;function O(){if(P>0)return P--,q>>P&1;if(q=g[T++],q===255){var oe=g[T++];if(oe){if(oe===220&&D){T+=2;var he=t(g,T);if(T+=2,he>0&&he!==E.s)throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data",he)}else if(oe===217){if(D){var fe=K*8;if(fe>0&&fe<E.s/10)throw new DNLMarkerError("Found EOI marker (0xFFD9) while parsing scan data, possibly caused by incorrect `scanLines` parameter",fe)}throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data")}throw new i("unexpected marker")}}return P=7,q>>>7}function De(oe){for(var he=oe;;){switch(he=he[O()],typeof he){case"number":return he;case"object":continue}throw new i("invalid huffman sequence")}}function de(oe){for(var he=0;oe>0;)he=he<<1|O(),oe--;return he}function pe(oe){if(oe===1)return O()===1?1:-1;var he=de(oe);return he>=1<<oe-1?he:he+(-1<<oe)+1}function Ee(oe,he){var fe=De(oe.J),Oe=fe===0?0:pe(fe),se=1;for(oe.D[he]=oe.Q+=Oe;se<64;){var me=De(oe.i),Ae=me&15,_e=me>>4;if(Ae===0){if(_e<15)break;se+=16;continue}se+=_e;var ve=r[se];oe.D[he+ve]=pe(Ae),se++}}function Be(oe,he){var fe=De(oe.J),Oe=fe===0?0:pe(fe)<<L;oe.D[he]=oe.Q+=Oe}function we(oe,he){oe.D[he]|=O()<<L}function U(oe,he){if(F>0){F--;return}for(var fe=x,Oe=v;fe<=Oe;){var se=De(oe.i),me=se&15,Ae=se>>4;if(me===0){if(Ae<15){F=de(Ae)+(1<<Ae)-1;break}fe+=16;continue}fe+=Ae;var _e=r[fe];oe.D[he+_e]=pe(me)*(1<<L),fe++}}function b(oe,he){for(var fe=x,Oe=v,se=0,me,Ae;fe<=Oe;){var _e=he+r[fe],ve=oe.D[_e]<0?-1:1;switch(N){case 0:if(Ae=De(oe.i),me=Ae&15,se=Ae>>4,me===0)se<15?(F=de(se)+(1<<se),N=4):(se=16,N=1);else{if(me!==1)throw new i("invalid ACn encoding");H=pe(me),N=se?2:3}continue;case 1:case 2:oe.D[_e]?oe.D[_e]+=ve*(O()<<L):(se--,se===0&&(N=N===2?3:0));break;case 3:oe.D[_e]?oe.D[_e]+=ve*(O()<<L):(oe.D[_e]=H<<L,N=0);break;case 4:oe.D[_e]&&(oe.D[_e]+=ve*(O()<<L));break}fe++}N===4&&(F--,F===0&&(N=0))}function Y(oe,he,fe,Oe,se){var me=fe/I|0,Ae=fe%I;K=me*oe.A+Oe;var _e=Ae*oe.h+se,ve=_(oe,K,_e);he(oe,ve)}function ie(oe,he,fe){K=fe/oe.P|0;var Oe=fe%oe.P,se=_(oe,K,Oe);he(oe,se)}var re=y.length;for(z?x===0?ae=C===0?Be:we:ae=C===0?U:b:ae=Ee,re===1?Ce=y[0].P*y[0].c:Ce=I*E.R;xe<=Ce;){var ne=w?Math.min(Ce-xe,w):Ce;if(ne>0){for(G=0;G<re;G++)y[G].Q=0;if(F=0,re===1)for(ce=y[0],V=0;V<ne;V++)ie(ce,ae,xe),xe++;else for(V=0;V<ne;V++){for(G=0;G<re;G++)for(ce=y[G],be=ce.h,Pe=ce.A,j=0;j<Pe;j++)for(Z=0;Z<be;Z++)Y(ce,ae,xe,j,Z);xe++}}if(P=0,ue=A(g,T),!ue)break;if(ue.u&&(T=ue.offset),ue.M>=65488&&ue.M<=65495)T+=2;else break}return T-B}function h(g,T,E){var y=g.$,w=g.D,x,v,C,L,D,I,z,B,q,P,F,N,H,K,ce,G,j;if(!y)throw new i("missing required Quantization Table.");for(var Z=0;Z<64;Z+=8){if(q=w[T+Z],P=w[T+Z+1],F=w[T+Z+2],N=w[T+Z+3],H=w[T+Z+4],K=w[T+Z+5],ce=w[T+Z+6],G=w[T+Z+7],q*=y[Z],!(P|F|N|H|K|ce|G)){j=f*q+512>>10,E[Z]=j,E[Z+1]=j,E[Z+2]=j,E[Z+3]=j,E[Z+4]=j,E[Z+5]=j,E[Z+6]=j,E[Z+7]=j;continue}P*=y[Z+1],F*=y[Z+2],N*=y[Z+3],H*=y[Z+4],K*=y[Z+5],ce*=y[Z+6],G*=y[Z+7],x=f*q+128>>8,v=f*H+128>>8,C=F,L=ce,D=d*(P-G)+128>>8,B=d*(P+G)+128>>8,I=N<<4,z=K<<4,x=x+v+1>>1,v=x-v,j=C*p+L*c+128>>8,C=C*c-L*p+128>>8,L=j,D=D+z+1>>1,z=D-z,B=B+I+1>>1,I=B-I,x=x+L+1>>1,L=x-L,v=v+C+1>>1,C=v-C,j=D*l+B*o+2048>>12,D=D*o-B*l+2048>>12,B=j,j=I*a+z*s+2048>>12,I=I*s-z*a+2048>>12,z=j,E[Z]=x+B,E[Z+7]=x-B,E[Z+1]=v+z,E[Z+6]=v-z,E[Z+2]=C+I,E[Z+5]=C-I,E[Z+3]=L+D,E[Z+4]=L-D}for(var V=0;V<8;++V){if(q=E[V],P=E[V+8],F=E[V+16],N=E[V+24],H=E[V+32],K=E[V+40],ce=E[V+48],G=E[V+56],!(P|F|N|H|K|ce|G)){j=f*q+8192>>14,j<-2040?j=0:j>=2024?j=255:j=j+2056>>4,w[T+V]=j,w[T+V+8]=j,w[T+V+16]=j,w[T+V+24]=j,w[T+V+32]=j,w[T+V+40]=j,w[T+V+48]=j,w[T+V+56]=j;continue}x=f*q+2048>>12,v=f*H+2048>>12,C=F,L=ce,D=d*(P-G)+2048>>12,B=d*(P+G)+2048>>12,I=N,z=K,x=(x+v+1>>1)+4112,v=x-v,j=C*p+L*c+2048>>12,C=C*c-L*p+2048>>12,L=j,D=D+z+1>>1,z=D-z,B=B+I+1>>1,I=B-I,x=x+L+1>>1,L=x-L,v=v+C+1>>1,C=v-C,j=D*l+B*o+2048>>12,D=D*o-B*l+2048>>12,B=j,j=I*a+z*s+2048>>12,I=I*s-z*a+2048>>12,z=j,q=x+B,G=x-B,P=v+z,ce=v-z,F=C+I,K=C-I,N=L+D,H=L-D,q<16?q=0:q>=4080?q=255:q>>=4,P<16?P=0:P>=4080?P=255:P>>=4,F<16?F=0:F>=4080?F=255:F>>=4,N<16?N=0:N>=4080?N=255:N>>=4,H<16?H=0:H>=4080?H=255:H>>=4,K<16?K=0:K>=4080?K=255:K>>=4,ce<16?ce=0:ce>=4080?ce=255:ce>>=4,G<16?G=0:G>=4080?G=255:G>>=4,w[T+V]=q,w[T+V+8]=P,w[T+V+16]=F,w[T+V+24]=N,w[T+V+32]=H,w[T+V+40]=K,w[T+V+48]=ce,w[T+V+56]=G}}function S(g,T){for(var E=T.P,y=T.c,w=new Int16Array(64),x=0;x<y;x++)for(var v=0;v<E;v++){var C=_(T,x,v);h(T,C,w)}return T.D}function A(g,T,E){E==null&&(E=T);var y=g.length-1,w=E<T?E:T;if(T>=y)return null;var x=t(g,T);if(x>=65472&&x<=65534)return{u:null,M:x,offset:T};for(var v=t(g,w);!(v>=65472&&v<=65534);){if(++w>=y)return null;v=t(g,w)}return{u:x.toString(16),M:v,offset:w}}return m.prototype={parse(g,T){T==null&&(T={});var E=T.F,y=0,w=null,x=null,v,C,L=0;function D(){var _e=t(g,y);y+=2;var ve=y+_e-2,He=A(g,ve,y);He&&He.u&&(ve=He.offset);var Fe=g.subarray(y,ve);return y+=Fe.length,Fe}function I(_e){for(var ve=Math.ceil(_e.o/8/_e.X),He=Math.ceil(_e.s/8/_e.B),Fe=0;Fe<_e.W.length;Fe++){b=_e.W[Fe];var Je=Math.ceil(Math.ceil(_e.o/8)*b.h/_e.X),k=Math.ceil(Math.ceil(_e.s/8)*b.A/_e.B),Se=ve*b.h,te=He*b.A,le=64*te*(Se+1);b.D=new Int16Array(le),b.P=Je,b.c=k}_e.m=ve,_e.R=He}var z=[],B=[],q=[],P=t(g,y);if(y+=2,P!==65496)throw new i("SOI not found");P=t(g,y),y+=2;e:for(;P!==65497;){var F,N,H;switch(P){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var K=D();P===65504&&K[0]===74&&K[1]===70&&K[2]===73&&K[3]===70&&K[4]===0&&(w={version:{d:K[5],T:K[6]},K:K[7],j:K[8]<<8|K[9],H:K[10]<<8|K[11],S:K[12],I:K[13],C:K.subarray(14,14+3*K[12]*K[13])}),P===65518&&K[0]===65&&K[1]===100&&K[2]===111&&K[3]===98&&K[4]===101&&(x={version:K[5]<<8|K[6],k:K[7]<<8|K[8],q:K[9]<<8|K[10],a:K[11]});break;case 65499:var ce=t(g,y),G;y+=2;for(var j=ce+y-2;y<j;){var Z=g[y++],V=new Uint16Array(64);if(Z>>4)if(Z>>4===1)for(N=0;N<64;N++)G=r[N],V[G]=t(g,y),y+=2;else throw new i("DQT - invalid table spec");else for(N=0;N<64;N++)G=r[N],V[G]=g[y++];z[Z&15]=V}break;case 65472:case 65473:case 65474:if(v)throw new i("Only single frame JPEGs supported");y+=2,v={},v.G=P===65473,v.Z=P===65474,v.precision=g[y++];var ae=t(g,y),xe,ue=0,Ce=0;y+=2,v.s=E||ae,v.o=t(g,y),y+=2,v.W=[],v._={};var be=g[y++];for(F=0;F<be;F++){xe=g[y];var Pe=g[y+1]>>4,O=g[y+1]&15;ue<Pe&&(ue=Pe),Ce<O&&(Ce=O);var De=g[y+2];H=v.W.push({h:Pe,A:O,L:De,$:null}),v._[xe]=H-1,y+=3}v.X=ue,v.B=Ce,I(v);break;case 65476:var de=t(g,y);for(y+=2,F=2;F<de;){var pe=g[y++],Ee=new Uint8Array(16),Be=0;for(N=0;N<16;N++,y++)Be+=Ee[N]=g[y];var we=new Uint8Array(Be);for(N=0;N<Be;N++,y++)we[N]=g[y];F+=17+Be,(pe>>4?B:q)[pe&15]=M(Ee,we)}break;case 65501:y+=2,C=t(g,y),y+=2;break;case 65498:var U=++L===1&&!E,b;y+=2;var Y=g[y++],ie=[];for(F=0;F<Y;F++){var re=g[y++],ne=v._[re];b=v.W[ne],b.index=re;var oe=g[y++];b.J=q[oe>>4],b.i=B[oe&15],ie.push(b)}var he=g[y++],fe=g[y++],Oe=g[y++];try{var se=u(g,y,v,ie,C,he,fe,Oe>>4,Oe&15,U);y+=se}catch(_e){if(_e instanceof DNLMarkerError)return this.parse(g,{F:_e.s});if(_e instanceof EOIMarkerError)break e;throw _e}break;case 65500:y+=4;break;case 65535:g[y]!==255&&y--;break;default:var me=A(g,y-2,y-3);if(me&&me.u){y=me.offset;break}if(y>=g.length-1)break e;throw new i("JpegImage.parse - unknown marker: "+P.toString(16))}P=t(g,y),y+=2}for(this.width=v.o,this.height=v.s,this.g=w,this.b=x,this.W=[],F=0;F<v.W.length;F++){b=v.W[F];var Ae=z[b.L];Ae&&(b.$=Ae),this.W.push({index:b.index,e:S(v,b),l:b.h/v.X,t:b.A/v.B,P:b.P,c:b.c})}this.p=this.W.length},Y(g,T,E){E==null&&(E=!1);var y=this.width/g,w=this.height/T,x,v,C,L,D,I,z,B,q,P,F=0,N,H=this.W.length,K=g*T*H,ce=new Uint8ClampedArray(K),G=new Uint32Array(g),j=4294967288,Z;for(z=0;z<H;z++){if(x=this.W[z],v=x.l*y,C=x.t*w,F=z,N=x.e,L=x.P+1<<3,v!==Z){for(D=0;D<g;D++)B=0|D*v,G[D]=(B&j)<<3|B&7;Z=v}for(I=0;I<T;I++)for(B=0|I*C,P=L*(B&j)|(B&7)<<3,D=0;D<g;D++)ce[F]=N[P+G[D]],F+=H}var V=this.V;if(!E&&H===4&&!V&&(V=new Int32Array([-256,255,-256,255,-256,255,-256,255])),V)for(z=0;z<K;)for(B=0,q=0;B<H;B++,z++,q+=2)ce[z]=(ce[z]*V[q]>>8)+V[q+1];return ce},get f(){return this.b?!!this.b.a:this.p===3?this.N===0?!1:!(this.W[0].index===82&&this.W[1].index===71&&this.W[2].index===66):this.N===1},z:function(T){for(var E,y,w,x=0,v=T.length;x<v;x+=3)E=T[x],y=T[x+1],w=T[x+2],T[x]=E-179.456+1.402*w,T[x+1]=E+135.459-.344*y-.714*w,T[x+2]=E-226.816+1.772*y;return T},O:function(T){for(var E,y,w,x,v=0,C=0,L=T.length;C<L;C+=4)E=T[C],y=T[C+1],w=T[C+2],x=T[C+3],T[v++]=-122.67195406894+y*(-660635669420364e-19*y+.000437130475926232*w-54080610064599e-18*E+.00048449797120281*x-.154362151871126)+w*(-.000957964378445773*w+.000817076911346625*E-.00477271405408747*x+1.53380253221734)+E*(.000961250184130688*E-.00266257332283933*x+.48357088451265)+x*(-.000336197177618394*x+.484791561490776),T[v++]=107.268039397724+y*(219927104525741e-19*y-.000640992018297945*w+.000659397001245577*E+.000426105652938837*x-.176491792462875)+w*(-.000778269941513683*w+.00130872261408275*E+.000770482631801132*x-.151051492775562)+E*(.00126935368114843*E-.00265090189010898*x+.25802910206845)+x*(-.000318913117588328*x-.213742400323665),T[v++]=-20.810012546947+y*(-.000570115196973677*y-263409051004589e-19*w+.0020741088115012*E-.00288260236853442*x+.814272968359295)+w*(-153496057440975e-19*w-.000132689043961446*E+.000560833691242812*x-.195152027534049)+E*(.00174418132927582*E-.00255243321439347*x+.116935020465145)+x*(-.000343531996510555*x+.24165260232407);return T.subarray(0,v)},r:function(T){for(var E,y,w,x=0,v=T.length;x<v;x+=4)E=T[x],y=T[x+1],w=T[x+2],T[x]=434.456-E-1.402*w,T[x+1]=119.541-E+.344*y+.714*w,T[x+2]=481.816-E-1.772*y;return T},U:function(T){for(var E,y,w,x,v=0,C=0,L=T.length;C<L;C+=4)E=T[C],y=T[C+1],w=T[C+2],x=T[C+3],T[v++]=255+E*(-6747147073602441e-20*E+.0008379262121013727*y+.0002894718188643294*w+.003264231057537806*x-1.1185611867203937)+y*(26374107616089405e-21*y-8626949158638572e-20*w-.0002748769067499491*x-.02155688794978967)+w*(-3878099212869363e-20*w-.0003267808279485286*x+.0686742238595345)-x*(.0003361971776183937*x+.7430659151342254),T[v++]=255+E*(.00013596372813588848*E+.000924537132573585*y+.00010567359618683593*w+.0004791864687436512*x-.3109689587515875)+y*(-.00023545346108370344*y+.0002702845253534714*w+.0020200308977307156*x-.7488052167015494)+w*(6834815998235662e-20*w+.00015168452363460973*x-.09751927774728933)-x*(.0003189131175883281*x+.7364883807733168),T[v++]=255+E*(13598650411385307e-21*E+.00012423956175490851*y+.0004751985097583589*w-36729317476630422e-22*x-.05562186980264034)+y*(.00016141380598724676*y+.0009692239130725186*w+.0007782692450036253*x-.44015232367526463)+w*(5068882914068769e-22*w+.0017778369011375071*x-.7591454649749609)-x*(.0003435319965105553*x+.7063770186160144);return T.subarray(0,v)},getData:function(g){var T=g.width,E=g.height,y=g.forceRGB,w=g.isSourcePDF;if(this.p>4)throw new i("Unsupported color mode");var x=this.Y(T,E,w);if(this.p===1&&y){for(var v=x.length,C=new Uint8ClampedArray(v*3),L=0,D=0;D<v;D++){var I=x[D];C[L++]=I,C[L++]=I,C[L++]=I}return C}else{if(this.p===3&&this.f)return this.z(x);if(this.p===4){if(this.f)return y?this.O(x):this.r(x);if(y)return this.U(x)}}return x}},m}();function t(n,r){return n[r]<<8|n[r+1]}J.JpegDecoder=e})();J.encodeImage=function(i,e,t,n){var r={t256:[e],t257:[t],t258:[8,8,8,8],t259:[1],t262:[2],t273:[1e3],t277:[4],t278:[t],t279:[e*t*4],t282:[[72,1]],t283:[[72,1]],t284:[1],t286:[[0,1]],t287:[[0,1]],t296:[1],t305:["Photopea (UTIF.js)"],t338:[1]};if(n)for(var s in n)r[s]=n[s];for(var a=new Uint8Array(J.encode([r])),o=new Uint8Array(i),l=new Uint8Array(1e3+e*t*4),s=0;s<a.length;s++)l[s]=a[s];for(var s=0;s<o.length;s++)l[1e3+s]=o[s];return l.buffer};J.encode=function(i){var e=new Uint8Array(2e4),t=4,n=J._binBE;e[0]=e[1]=77,n.writeUshort(e,2,42);var r=8;n.writeUint(e,t,r),t+=4;for(var s=0;s<i.length;s++){var a=J._writeIFD(n,J._types.basic,e,r,i[s]);r=a[1],s<i.length-1&&(r&3&&(r+=4-(r&3)),n.writeUint(e,a[0],r))}return e.slice(0,r).buffer};J.decode=function(i,e){e==null&&(e={parseMN:!0,debug:!1});var t=new Uint8Array(i),n=0,r=J._binBE.readASCII(t,n,2);n+=2;var s=r=="II"?J._binLE:J._binBE;s.readUshort(t,n),n+=2;var a=s.readUint(t,n);n+=4;for(var o=[];;){var l=s.readUshort(t,a),c=s.readUshort(t,a+4);if(l!=0&&(c<1||13<c)){log("error in TIFF");break}if(J._readIFD(s,t,a,o,0,e),a=s.readUint(t,a+2+l*12),a==0)break}return o};J.decodeImage=function(i,e,t){if(!e.data){var n=new Uint8Array(i),r=J._binBE.readASCII(n,0,2);if(e.t256!=null){e.isLE=r=="II",e.width=e.t256[0],e.height=e.t257[0];var s=e.t259?e.t259[0]:1,a=e.t266?e.t266[0]:1;e.t284&&e.t284[0]==2&&log("PlanarConfiguration 2 should not be used!"),s==7&&e.t258&&e.t258.length>3&&(e.t258=e.t258.slice(0,3));var o=e.t277?e.t277[0]:1,l=e.t258?e.t258[0]:1,c=l*o;s==1&&e.t279!=null&&e.t278&&e.t262[0]==32803&&(c=Math.round(e.t279[0]*8/(e.width*e.t278[0]))),e.t50885&&e.t50885[0]==4&&(c=e.t258[0]*3);var p=Math.ceil(e.width*c/8)*8,f=e.t273;(f==null||e.t322)&&(f=e.t324);var d=e.t279;s==1&&f.length==1&&(d=[e.height*(p>>>3)]),(d==null||e.t322)&&(d=e.t325);var m=new Uint8Array(e.height*(p>>>3)),M=0;if(e.t322!=null){var _=e.t322[0],u=e.t323[0],h=Math.floor((e.width+_-1)/_),S=Math.floor((e.height+u-1)/u),A=new Uint8Array(Math.ceil(_*u*c/8)|0);console.log("====",h,S);for(var g=0;g<S;g++)for(var T=0;T<h;T++){var E=g*h+T;A.fill(0),J.decode._decompress(e,t,n,f[E],d[E],s,A,0,a,_,u),s==6?m=A:J._copyTile(A,Math.ceil(_*c/8)|0,u,m,Math.ceil(e.width*c/8)|0,e.height,Math.ceil(T*_*c/8)|0,g*u)}M=m.length*8}else{if(f==null)return;var y=e.t278?e.t278[0]:e.height;y=Math.min(y,e.height);for(var E=0;E<f.length;E++)J.decode._decompress(e,t,n,f[E],d[E],s,m,Math.ceil(M/8)|0,a,e.width,y),M+=p*y;M=Math.min(M,m.length*8)}e.data=new Uint8Array(m.buffer,0,Math.ceil(M/8)|0)}}};J.decode._decompress=function(i,e,t,n,r,s,a,o,l,c,p){if(i.t271&&i.t271[0]=="Panasonic"&&i.t45&&i.t45[0]==6&&(s=34316),s==1)for(var f=0;f<r;f++)a[o+f]=t[n+f];else if(s==2)J.decode._decodeG2(t,n,r,a,o,c,l);else if(s==3)J.decode._decodeG3(t,n,r,a,o,c,l,i.t292?(i.t292[0]&1)==1:!1);else if(s==4)J.decode._decodeG4(t,n,r,a,o,c,l);else if(s==5)J.decode._decodeLZW(t,n,r,a,o,8);else if(s==6)J.decode._decodeOldJPEG(i,t,n,r,a,o);else if(s==7||s==34892)J.decode._decodeNewJPEG(i,t,n,r,a,o);else if(s==8||s==32946){var d=new Uint8Array(t.buffer,n+2,r-6),m=J._inflateRaw(d);o+m.length<=a.length&&a.set(m,o)}else s==9?J.decode._decodeVC5(t,n,r,a,o,i.t33422):s==32767?J.decode._decodeARW(i,t,n,r,a,o):s==32773?J.decode._decodePackBits(t,n,r,a,o):s==32809?J.decode._decodeThunder(t,n,r,a,o):s==34316?J.decode._decodePanasonic(i,t,n,r,a,o):s==34713?J.decode._decodeNikon(i,e,t,n,r,a,o):s==34676?J.decode._decodeLogLuv32(i,t,n,r,a,o):log("Unknown compression",s);var M=i.t258?Math.min(32,i.t258[0]):1,_=i.t277?i.t277[0]:1,u=M*_>>>3,h=Math.ceil(M*_*c/8);if(M==16&&!i.isLE&&i.t33422==null)for(var S=0;S<p;S++)for(var A=o+S*h,g=1;g<h;g+=2){var T=a[A+g];a[A+g]=a[A+g-1],a[A+g-1]=T}if(i.t317&&i.t317[0]==2)for(var S=0;S<p;S++){var E=o+S*h;if(M==16)for(var f=u;f<h;f+=2){var y=(a[E+f+1]<<8|a[E+f])+(a[E+f-u+1]<<8|a[E+f-u]);a[E+f]=y&255,a[E+f+1]=y>>>8&255}else if(_==3)for(var f=3;f<h;f+=3)a[E+f]=a[E+f]+a[E+f-3]&255,a[E+f+1]=a[E+f+1]+a[E+f-2]&255,a[E+f+2]=a[E+f+2]+a[E+f-1]&255;else for(var f=u;f<h;f++)a[E+f]=a[E+f]+a[E+f-u]&255}};J.decode._decodePanasonic=function(i,e,t,n,r,s){var a=e.buffer,o=i.t2[0],l=i.t3[0],c=i.t10[0],p=i.t45[0],f=0,d=0,m=0,M=0,_=p==6?new Uint32Array(18):new Uint8Array(16),u,h,S,A=[0,0],g=[0,0],T,E=0,y,w,x,v,C=new Uint8Array(16384),L=new Uint16Array(r.buffer);function D(O){if(m==0){var De=new Uint8Array(a,t+d+8184,8200),de=new Uint8Array(a,t+d,8184);C.set(De),C.set(de,De.length),d+=16384}if(p==5)for(u=0;u<16;u++)_[u]=C[m++],m&=16383;else return m=m-O&131071,M=m>>3^16368,(C[M]|C[M+1]<<8)>>(m&7)&~(-1<<O)}function I(O){return C[m+15-O]}function z(){_[0]=I(0)<<6|I(1)>>2,_[1]=((I(1)&3)<<12|I(2)<<4|I(3)>>4)&16383,_[2]=I(3)>>2&3,_[3]=(I(3)&3)<<8|I(4),_[4]=I(5)<<2|I(6)>>6,_[5]=(I(6)&63)<<4|I(7)>>4,_[6]=I(7)>>2&3,_[7]=(I(7)&3)<<8|I(8),_[8]=I(9)<<2&1020|I(10)>>6,_[9]=(I(10)<<4|I(11)>>4)&1023,_[10]=I(11)>>2&3,_[11]=(I(11)&3)<<8|I(12),_[12]=(I(13)<<2&1020|I(14)>>6)&1023,_[13]=(I(14)<<4|I(15)>>4)&1023,m+=16,M=0}function B(){_[0]=I(0)<<4|I(1)>>4,_[1]=((I(1)&15)<<8|I(2))&4095,_[2]=I(3)>>6&3,_[3]=(I(3)&63)<<2|I(4)>>6,_[4]=(I(4)&63)<<2|I(5)>>6,_[5]=(I(5)&63)<<2|I(6)>>6,_[6]=I(6)>>4&3,_[7]=(I(6)&15)<<4|I(7)>>4,_[8]=(I(7)&15)<<4|I(8)>>4,_[9]=(I(8)&15)<<4|I(9)>>4,_[10]=I(9)>>2&3,_[11]=(I(9)&3)<<6|I(10)>>2,_[12]=(I(10)&3)<<6|I(11)>>2,_[13]=(I(11)&3)<<6|I(12)>>2,_[14]=I(12)&3,_[15]=I(13),_[16]=I(14),_[17]=I(15),m+=16,M=0}function q(){A[0]=0,A[1]=0,g[0]=0,g[1]=0}if(p==7)throw p;if(p==6){var P=c==12,F=P?B:z,N=P?14:11,H=P?128:512,K=P?2048:8192,ce=P?16383:65535,G=P?4095:16383,j=o/N,Z=j*16,V=P?18:14;for(w=0;w<l-15;w+=16){var ae=Math.min(16,l-w),xe=Z*ae;for(C=new Uint8Array(a,t+f,xe),m=0,f+=xe,v=0,x=0;v<ae;v++,x=0){E=(w+v)*o;for(var ue=0;ue<j;ue++)for(F(),q(),S=0,y=0,u=0;u<N;u++){if(T=u&1,u%3==2){var Ce=M<V?_[M++]:0;Ce==3&&(Ce=4),y=H<<Ce,S=1<<Ce}var be=M<V?_[M++]:0;A[T]?(be*=S,y<K&&g[T]>y&&(be+=g[T]-y),g[T]=be):(A[T]=be,be?g[T]=be:be=g[T]),L[E+x++]=be-15<=ce?be-15&ce:be+2147483633>>31&G}}}}else if(p==5){var Pe=c==12?10:9;for(w=0;w<l;w++)for(x=0;x<o;x+=Pe)D(0),c==12?(L[E++]=((_[1]&15)<<8)+_[0],L[E++]=16*_[2]+(_[1]>>4),L[E++]=((_[4]&15)<<8)+_[3],L[E++]=16*_[5]+(_[4]>>4),L[E++]=((_[7]&15)<<8)+_[6],L[E++]=16*_[8]+(_[7]>>4),L[E++]=((_[10]&15)<<8)+_[9],L[E++]=16*_[11]+(_[10]>>4),L[E++]=((_[13]&15)<<8)+_[12],L[E++]=16*_[14]+(_[13]>>4)):c==14&&(L[E++]=_[0]+((_[1]&63)<<8),L[E++]=(_[1]>>6)+4*_[2]+((_[3]&15)<<10),L[E++]=(_[3]>>4)+16*_[4]+((_[5]&3)<<12),L[E++]=((_[5]&252)>>2)+(_[6]<<6),L[E++]=_[7]+((_[8]&63)<<8),L[E++]=(_[8]>>6)+4*_[9]+((_[10]&15)<<10),L[E++]=(_[10]>>4)+16*_[11]+((_[12]&3)<<12),L[E++]=((_[12]&252)>>2)+(_[13]<<6),L[E++]=_[14]+((_[15]&63)<<8))}else if(p==4)for(w=0;w<l;w++)for(x=0;x<o;x++)u=x%14,T=u&1,u==0&&q(),u%3==2&&(S=4>>3-D(2)),g[T]?(h=D(8),h!=0&&(A[T]-=128<<S,(A[T]<0||S==4)&&(A[T]&=~(-1<<S)),A[T]+=h<<S)):(g[T]=D(8),(g[T]||u>11)&&(A[T]=g[T]<<4|D(4))),L[E++]=A[x&1];else throw p};J.decode._decodeVC5=function(){var i=[1,0,1,0,2,2,1,1,3,7,1,2,5,25,1,3,6,48,1,4,6,54,1,5,7,111,1,8,7,99,1,6,7,105,12,0,7,107,1,7,8,209,20,0,8,212,1,9,8,220,1,10,9,393,1,11,9,394,32,0,9,416,1,12,9,427,1,13,10,887,1,18,10,784,1,14,10,790,1,15,10,835,60,0,10,852,1,16,10,885,1,17,11,1571,1,19,11,1668,1,20,11,1669,100,0,11,1707,1,21,11,1772,1,22,12,3547,1,29,12,3164,1,24,12,3166,1,25,12,3140,1,23,12,3413,1,26,12,3537,1,27,12,3539,1,28,13,7093,1,35,13,6283,1,30,13,6331,1,31,13,6335,180,0,13,6824,1,32,13,7072,1,33,13,7077,320,0,13,7076,1,34,14,12565,1,36,14,12661,1,37,14,12669,1,38,14,13651,1,39,14,14184,1,40,15,28295,1,46,15,28371,1,47,15,25320,1,42,15,25336,1,43,15,25128,1,41,15,27300,1,44,15,28293,1,45,16,50259,1,48,16,50643,1,49,16,50675,1,50,16,56740,1,53,16,56584,1,51,16,56588,1,52,17,113483,1,61,17,113482,1,60,17,101285,1,55,17,101349,1,56,17,109205,1,57,17,109207,1,58,17,100516,1,54,17,113171,1,59,18,202568,1,62,18,202696,1,63,18,218408,1,64,18,218412,1,65,18,226340,1,66,18,226356,1,67,18,226358,1,68,19,402068,1,69,19,405138,1,70,19,405394,1,71,19,436818,1,72,19,436826,1,73,19,452714,1,75,19,452718,1,76,19,452682,1,74,20,804138,1,77,20,810279,1,78,20,810790,1,79,20,873638,1,80,20,873654,1,81,20,905366,1,82,20,905430,1,83,20,905438,1,84,21,1608278,1,85,21,1620557,1,86,21,1621582,1,87,21,1621583,1,88,21,1747310,1,89,21,1810734,1,90,21,1810735,1,91,21,1810863,1,92,21,1810879,1,93,22,3621725,1,99,22,3621757,1,100,22,3241112,1,94,22,3494556,1,95,22,3494557,1,96,22,3494622,1,97,22,3494623,1,98,23,6482227,1,102,23,6433117,1,101,23,6989117,1,103,23,6989119,1,105,23,6989118,1,104,23,7243449,1,106,23,7243512,1,107,24,13978233,1,111,24,12964453,1,109,24,12866232,1,108,24,14486897,1,113,24,13978232,1,110,24,14486896,1,112,24,14487026,1,114,24,14487027,1,115,25,25732598,1,225,25,25732597,1,189,25,25732596,1,188,25,25732595,1,203,25,25732594,1,202,25,25732593,1,197,25,25732592,1,207,25,25732591,1,169,25,25732590,1,223,25,25732589,1,159,25,25732522,1,235,25,25732579,1,152,25,25732575,1,192,25,25732489,1,179,25,25732573,1,201,25,25732472,1,172,25,25732576,1,149,25,25732488,1,178,25,25732566,1,120,25,25732571,1,219,25,25732577,1,150,25,25732487,1,127,25,25732506,1,211,25,25732548,1,125,25,25732588,1,158,25,25732486,1,247,25,25732467,1,238,25,25732508,1,163,25,25732552,1,228,25,25732603,1,183,25,25732513,1,217,25,25732587,1,168,25,25732520,1,122,25,25732484,1,128,25,25732562,1,249,25,25732505,1,187,25,25732504,1,186,25,25732483,1,136,25,25928905,1,181,25,25732560,1,255,25,25732500,1,230,25,25732482,1,135,25,25732555,1,233,25,25732568,1,222,25,25732583,1,145,25,25732481,1,134,25,25732586,1,167,25,25732521,1,248,25,25732518,1,209,25,25732480,1,243,25,25732512,1,216,25,25732509,1,164,25,25732547,1,140,25,25732479,1,157,25,25732544,1,239,25,25732574,1,191,25,25732564,1,251,25,25732478,1,156,25,25732546,1,139,25,25732498,1,242,25,25732557,1,133,25,25732477,1,162,25,25732515,1,213,25,25732584,1,165,25,25732514,1,212,25,25732476,1,227,25,25732494,1,198,25,25732531,1,236,25,25732530,1,234,25,25732529,1,117,25,25732528,1,215,25,25732527,1,124,25,25732526,1,123,25,25732525,1,254,25,25732524,1,253,25,25732523,1,148,25,25732570,1,218,25,25732580,1,146,25,25732581,1,147,25,25732569,1,224,25,25732533,1,143,25,25732540,1,184,25,25732541,1,185,25,25732585,1,166,25,25732556,1,132,25,25732485,1,129,25,25732563,1,250,25,25732578,1,151,25,25732501,1,119,25,25732502,1,193,25,25732536,1,176,25,25732496,1,245,25,25732553,1,229,25,25732516,1,206,25,25732582,1,144,25,25732517,1,208,25,25732558,1,137,25,25732543,1,241,25,25732466,1,237,25,25732507,1,190,25,25732542,1,240,25,25732551,1,131,25,25732554,1,232,25,25732565,1,252,25,25732475,1,171,25,25732493,1,205,25,25732492,1,204,25,25732491,1,118,25,25732490,1,214,25,25928904,1,180,25,25732549,1,126,25,25732602,1,182,25,25732539,1,175,25,25732545,1,141,25,25732559,1,138,25,25732537,1,177,25,25732534,1,153,25,25732503,1,194,25,25732606,1,160,25,25732567,1,121,25,25732538,1,174,25,25732497,1,246,25,25732550,1,130,25,25732572,1,200,25,25732474,1,170,25,25732511,1,221,25,25732601,1,196,25,25732532,1,142,25,25732519,1,210,25,25732495,1,199,25,25732605,1,155,25,25732535,1,154,25,25732499,1,244,25,25732510,1,220,25,25732600,1,195,25,25732607,1,161,25,25732604,1,231,25,25732473,1,173,25,25732599,1,226,26,51465122,1,116,26,51465123,0,1],e,t,n,r=[3,3,3,3,2,2,2,1,1,1],s=24576,a=16384,o=8192,l=a|o;function c(S){var A=S[1],g=S[0][A>>>3]>>>7-(A&7)&1;return S[1]++,g}function p(S,A){if(e==null){e={};for(var g=0;g<i.length;g+=4)e[i[g+1]]=i.slice(g,g+4)}for(var T=c(S),E=e[T];E==null;)T=T<<1|c(S),E=e[T];var y=E[3];y!=0&&(y=c(S)==0?y:-y),A[0]=E[2],A[1]=y}function f(S,A){for(var g=0;g<A;g++)(S&1)==1&&S++,S=S>>>1;return S}function d(S,A){return S>>A}function m(S,A,g,T,E,y){A[g]=d(d(11*S[E]-4*S[E+y]+S[E+y+y]+4,3)+S[T],1),A[g+y]=d(d(5*S[E]+4*S[E+y]-S[E+y+y]+4,3)-S[T],1)}function M(S,A,g,T,E,y){var w=S[E-y]-S[E+y],x=S[E],v=S[T];A[g]=d(d(w+4,3)+x+v,1),A[g+y]=d(d(-w+4,3)+x-v,1)}function _(S,A,g,T,E,y){A[g]=d(d(5*S[E]+4*S[E-y]-S[E-y-y]+4,3)+S[T],1),A[g+y]=d(d(11*S[E]-4*S[E-y]+S[E-y-y]+4,3)-S[T],1)}function u(S){return S=S<0?0:S>4095?4095:S,S=n[S]>>>2,S}function h(S,A,g,T,E,y){T=new Uint16Array(T.buffer);var w=Date.now(),x=J._binBE,v=A+g,C,L,D,I,z,B,q,P,F,N;A+=4;for(var H=y[0]==1;A<v;){var K=x.readShort(S,A),ce=x.readUshort(S,A+2);if(A+=4,K==12)C=ce;else if(K==20)L=ce;else if(K==21)D=ce;else if(K==48)I=ce;else if(K==53)z=ce;else if(K!=35){if(K==62)B=ce;else if(K!=101){if(K==109)q=ce;else if(K!=84){if(K!=106){if(K!=107){if(K!=108){if(K!=102){if(K==104)P=ce;else if(K!=105){var G=K<0?-K:K,j=G&65280,Z=0;if(G&l&&(G&o?(Z=ce&65535,Z+=(G&255)<<16):Z=ce&65535),(G&s)==s){if(F==null){F=[];for(var V=0;V<4;V++)F[V]=new Int16Array((L>>>1)*(D>>>1));N=new Int16Array((L>>>1)*(D>>>1)),t=new Int16Array(1024);for(var V=0;V<1024;V++){var ae=V-512,xe=Math.abs(ae),C=Math.floor(768*xe*xe*xe/(255*255*255))+xe;t[V]=Math.sign(ae)*C}n=new Uint16Array(4096);for(var ue=65535,V=0;V<4096;V++){var Ce=V,be=ue*(Math.pow(113,Ce/4095)-1)/112;n[V]=Math.min(be,ue)}}var Pe=F[B],O=f(L,1+r[I]),De=f(D,1+r[I]);if(I==0)for(var de=0;de<De;de++)for(var pe=0;pe<O;pe++){var Ee=A+(de*O+pe)*2;Pe[de*(L>>>1)+pe]=S[Ee]<<8|S[Ee+1]}else{for(var Be=[S,A*8],we=[],U=0,b=O*De,Y=[0,0],ie=0,ce=0;U<b;)for(p(Be,Y),ie=Y[0],ce=Y[1];ie>0;)we[U++]=ce,ie--;for(var re=(I-1)%3,ne=re!=1?O:0,oe=re!=0?De:0,de=0;de<De;de++)for(var he=(de+oe)*(L>>>1)+ne,fe=de*O,pe=0;pe<O;pe++)Pe[he+pe]=t[we[fe+pe]+512]*z;if(re==2){for(var P=L>>>1,Oe=O*2,se=De*2,de=0;de<De;de++)for(var pe=0;pe<Oe;pe++){var V=de*2*P+pe,me=de*P+pe,Ae=De*P+me;de==0?m(Pe,N,V,Ae,me,P):de==De-1?_(Pe,N,V,Ae,me,P):M(Pe,N,V,Ae,me,P)}var _e=Pe;Pe=N,N=_e;for(var de=0;de<se;de++)for(var pe=0;pe<O;pe++){var V=de*P+2*pe,me=de*P+pe,Ae=O+me;pe==0?m(Pe,N,V,Ae,me,1):pe==O-1?_(Pe,N,V,Ae,me,1):M(Pe,N,V,Ae,me,1)}var _e=Pe;Pe=N,N=_e;for(var ve=[],He=2-~~((I-1)/3),Fe=0;Fe<3;Fe++)ve[Fe]=q>>14-Fe*2&3;var Je=ve[He];if(Je!=0)for(var de=0;de<se;de++)for(var pe=0;pe<Oe;pe++){var V=de*P+pe;Pe[V]=Pe[V]<<Je}}}if(I==9&&B==3)for(var k=F[0],Se=F[1],te=F[2],le=F[3],de=0;de<D;de+=2)for(var pe=0;pe<L;pe+=2){var Me=de*L+pe,Ee=(de>>>1)*(L>>>1)+(pe>>>1),ye=k[Ee],Ge=Se[Ee]-2048,ot=te[Ee]-2048,ht=le[Ee]-2048,Ke=(Ge<<1)+ye,yt=(ot<<1)+ye,Lt=ye+ht,gi=ye-ht;H?(T[Me]=u(Lt),T[Me+1]=u(yt),T[Me+L]=u(Ke),T[Me+L+1]=u(gi)):(T[Me]=u(Ke),T[Me+1]=u(Lt),T[Me+L]=u(gi),T[Me+L+1]=u(yt))}A+=Z*4}else if(G==16388)A+=Z*4;else if(!(j==8192||j==8448||j==9216))throw G.toString(16)}}}}}}}}}console.log(Date.now()-w)}return h}();J.decode._decodeLogLuv32=function(i,e,t,n,r,s){for(var a=i.width,o=a*4,l=0,c=new Uint8Array(o);l<n;){for(var p=0;p<o;){var f=e[t+l];if(l++,f<128){for(var d=0;d<f;d++)c[p+d]=e[t+l+d];p+=f,l+=f}else{f=f-126;for(var d=0;d<f;d++)c[p+d]=e[t+l];p+=f,l++}}for(var m=0;m<a;m++)r[s+0]=c[m],r[s+1]=c[m+a],r[s+2]=c[m+a*2],r[s+4]=c[m+a*3],s+=6}};J.decode._ljpeg_diff=function(i,e,t){var n=J.decode._getbithuff,r,s;return r=n(i,e,t[0],t),s=n(i,e,r,0),s&1<<r-1||(s-=(1<<r)-1),s};J.decode._decodeARW=function(i,e,t,n,r,s){var a=i.t256[0],o=i.t257[0],l=i.t258[0],c=i.isLE?J._binLE:J._binBE,p=a*o==n||a*o*1.5==n;if(!p){o+=8;var f=[t,0,0,0],d=new Uint16Array(32770),m=[3857,3856,3599,3342,3085,2828,2571,2314,2057,1800,1543,1286,1029,772,771,768,514,513],q,M,_,x,w,u=0,h=J.decode._ljpeg_diff;for(d[0]=15,_=q=0;q<18;q++)for(var S=32768>>>(m[q]>>>8),M=0;M<S;M++)d[++_]=m[q];for(x=a;x--;)for(w=0;w<o+1;w+=2)if(w==o&&(w=1),u+=h(e,f,d),w<o){var A=u&4095;J.decode._putsF(r,(w*a+x)*l,A<<16-l)}return}if(a*o*1.5==n){for(var q=0;q<n;q+=3){var g=e[t+q+0],T=e[t+q+1],E=e[t+q+2];r[s+q]=T<<4|g>>>4,r[s+q+1]=g<<4|E>>>4,r[s+q+2]=E<<4|T>>>4}return}var y=new Uint16Array(16),w,x,v,C,L,D,I,z,B,q,P,F=new Uint8Array(a+1);for(w=0;w<o;w++){for(var N=0;N<a;N++)F[N]=e[t++];for(P=0,x=0;x<a-30;P+=16){for(C=2047&(v=c.readUint(F,P)),L=2047&v>>>11,D=15&v>>>22,I=15&v>>>26,z=0;z<4&&128<<z<=C-L;z++);for(B=30,q=0;q<16;q++)q==D?y[q]=C:q==I?y[q]=L:(y[q]=((c.readUshort(F,P+(B>>3))>>>(B&7)&127)<<z)+L,y[q]>2047&&(y[q]=2047),B+=7);for(q=0;q<16;q++,x+=2){var A=y[q]<<1;J.decode._putsF(r,(w*a+x)*l,A<<16-l)}x-=x&1?1:31}}};J.decode._decodeNikon=function(i,e,t,n,r,s,a){var o=[[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,5,4,3,6,2,7,1,0,8,9,11,10,12],[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,57,90,56,39,22,5,4,3,2,1,0,11,12,12],[0,0,1,4,2,3,1,2,0,0,0,0,0,0,0,0,0,5,4,6,3,7,2,8,1,9,0,10,11,12],[0,0,1,4,3,1,1,1,1,1,2,0,0,0,0,0,0,5,6,4,7,8,3,9,2,1,0,10,11,12,13,14],[0,0,1,5,1,1,1,1,1,1,1,2,0,0,0,0,0,8,92,75,58,41,7,6,5,4,3,2,1,0,13,14],[0,0,1,4,2,2,3,1,2,0,0,0,0,0,0,0,0,7,6,8,5,9,4,10,3,11,12,2,0,1,13,14]],l=i.t256[0],c=i.t257[0],p=i.t258[0],f=0,d=0,m=J.decode._make_decoder,M=J.decode._getbithuff,_=e[0].exifIFD.makerNote,u=_.t150?_.t150:_.t140,h=0,S=u[h++],A=u[h++];(S==73||A==88)&&(h+=2110),S==70&&(f=2),p==14&&(f+=3);for(var g=[[0,0],[0,0]],T=i.isLE?J._binLE:J._binBE,v=0;v<2;v++)for(var E=0;E<2;E++)g[v][E]=T.readShort(u,h),h+=2;var y=1<<p&32767,w=0,x=T.readShort(u,h);h+=2,x>1&&(w=Math.floor(y/(x-1))),S==68&&A==32&&w>0&&(d=T.readShort(u,562));var v,C,L,D,I,z,B=[0,0],q=m(o[f]),P=[n,0,0,0];for(C=0;C<c;C++)for(d&&C==d&&(q=m(o[f+1])),L=0;L<l;L++){v=M(t,P,q[0],q),D=v&15,I=v>>>4,z=(M(t,P,D-I,0)<<1)+1<<I>>>1,z&1<<D-1||(z-=(1<<D)-(I==0?1:0)),L<2?B[L]=g[C&1][L]+=z:B[L&1]+=z;var F=Math.min(Math.max(B[L&1],0),(1<<p)-1),N=(C*l+L)*p;J.decode._putsF(s,N,F<<16-p)}};J.decode._putsF=function(i,e,t){t=t<<8-(e&7);var n=e>>>3;i[n]|=t>>>16,i[n+1]|=t>>>8,i[n+2]|=t};J.decode._getbithuff=function(i,e,t,n){var r=0;J.decode._get_byte;var s,a=e[0],o=e[1],l=e[2],c=e[3];if(t==0||l<0)return 0;for(;!c&&l<t&&(s=i[a++])!=-1&&!(c=r);)o=(o<<8)+s,l+=8;if(s=o<<32-l>>>32-t,n?(l-=n[s+1]>>>8,s=n[s+1]&255):l-=t,l<0)throw"e";return e[0]=a,e[1]=o,e[2]=l,e[3]=c,s};J.decode._make_decoder=function(i){var e,t,n,r,s,a=[];for(e=16;e!=0&&!i[e];e--);var o=17;for(a[0]=e,n=t=1;t<=e;t++)for(r=0;r<i[t];r++,++o)for(s=0;s<1<<e-t;s++)n<=1<<e&&(a[n++]=t<<8|i[o]);return a};J.decode._decodeNewJPEG=function(i,e,t,n,r,s){n=Math.min(n,e.length-t);var a=i.t347,o=a?a.length:0,l=new Uint8Array(o+n);if(a){for(var c=216,p=217,f=0,d=0;d<o-1&&!(a[d]==255&&a[d+1]==p);d++)l[f++]=a[d];var m=e[t],M=e[t+1];(m!=255||M!=c)&&(l[f++]=m,l[f++]=M);for(var d=2;d<n;d++)l[f++]=e[t+d]}else for(var d=0;d<n;d++)l[d]=e[t+d];if(i.t262[0]==32803||i.t259[0]==7&&i.t262[0]==34892){var _=i.t258[0],u=J.LosslessJpegDecode(l),h=u.length;if(_==16)if(i.isLE)for(var d=0;d<h;d++)r[s+(d<<1)]=u[d]&255,r[s+(d<<1)+1]=u[d]>>>8;else for(var d=0;d<h;d++)r[s+(d<<1)]=u[d]>>>8,r[s+(d<<1)+1]=u[d]&255;else if(_==14||_==12||_==10)for(var S=16-_,d=0;d<h;d++)J.decode._putsF(r,d*_,u[d]<<S);else if(_==8)for(var d=0;d<h;d++)r[s+d]=u[d];else throw new Error("unsupported bit depth "+_)}else{var A=new J.JpegDecoder;A.parse(l);for(var g=A.getData({width:A.width,height:A.height,forceRGB:!0,isSourcePDF:!1}),d=0;d<g.length;d++)r[s+d]=g[d]}i.t262[0]==6&&(i.t262[0]=2)};J.decode._decodeOldJPEGInit=function(i,e,t,n){var r=216,s=219,a=196,o=221,l=192,c=218,p=0,f=0,d,m,M=!1,_,u,h,S=i.t513,A=S?S[0]:0,g=i.t514,T=g?g[0]:0,E=i.t324||i.t273||S,y=i.t530,w=0,x=0,v=i.t277?i.t277[0]:1,C=i.t515;if(E&&(f=E[0],M=E.length>1),!M){if(e[t]==255&&e[t+1]==r)return{jpegOffset:t};if(S!=null&&(e[t+A]==255&&e[t+A+1]==r?p=t+A:log("JPEGInterchangeFormat does not point to SOI"),g==null?log("JPEGInterchangeFormatLength field is missing"):(A>=f||A+T<=f)&&log("JPEGInterchangeFormatLength field value is invalid"),p!=null))return{jpegOffset:p}}if(y!=null&&(w=y[0],x=y[1]),S!=null&&g!=null)if(T>=2&&A+T<=f){for(e[t+A+T-2]==255&&e[t+A+T-1]==r?d=new Uint8Array(T-2):d=new Uint8Array(T),_=0;_<d.length;_++)d[_]=e[t+A+_];log("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables")}else log("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile");if(d==null){var L=0,D=[];D[L++]=255,D[L++]=r;var I=i.t519;if(I==null)throw new Error("JPEGQTables tag is missing");for(_=0;_<I.length;_++)for(D[L++]=255,D[L++]=s,D[L++]=0,D[L++]=67,D[L++]=_,u=0;u<64;u++)D[L++]=e[t+I[_]+u];for(h=0;h<2;h++){var z=i[h==0?"t520":"t521"];if(z==null)throw new Error((h==0?"JPEGDCTables":"JPEGACTables")+" tag is missing");for(_=0;_<z.length;_++){D[L++]=255,D[L++]=a;var B=19;for(u=0;u<16;u++)B+=e[t+z[_]+u];for(D[L++]=B>>>8,D[L++]=B&255,D[L++]=_|h<<4,u=0;u<16;u++)D[L++]=e[t+z[_]+u];for(u=0;u<B;u++)D[L++]=e[t+z[_]+16+u]}}if(D[L++]=255,D[L++]=l,D[L++]=0,D[L++]=8+3*v,D[L++]=8,D[L++]=i.height>>>8&255,D[L++]=i.height&255,D[L++]=i.width>>>8&255,D[L++]=i.width&255,D[L++]=v,v==1)D[L++]=1,D[L++]=17,D[L++]=0;else for(_=0;_<3;_++)D[L++]=_+1,D[L++]=_!=0?17:(w&15)<<4|x&15,D[L++]=_;C!=null&&C[0]!=0&&(D[L++]=255,D[L++]=o,D[L++]=0,D[L++]=4,D[L++]=C[0]>>>8&255,D[L++]=C[0]&255),d=new Uint8Array(D)}var q=-1;for(_=0;_<d.length-1;){if(d[_]==255&&d[_+1]==l){q=_;break}_++}if(q==-1){var P=new Uint8Array(d.length+10+3*v);P.set(d);var F=d.length;if(q=d.length,d=P,d[F++]=255,d[F++]=l,d[F++]=0,d[F++]=8+3*v,d[F++]=8,d[F++]=i.height>>>8&255,d[F++]=i.height&255,d[F++]=i.width>>>8&255,d[F++]=i.width&255,d[F++]=v,v==1)d[F++]=1,d[F++]=17,d[F++]=0;else for(_=0;_<3;_++)d[F++]=_+1,d[F++]=_!=0?17:(w&15)<<4|x&15,d[F++]=_}if(e[f]==255&&e[f+1]==c){var N=e[f+2]<<8|e[f+3];for(m=new Uint8Array(N+2),m[0]=e[f],m[1]=e[f+1],m[2]=e[f+2],m[3]=e[f+3],_=0;_<N-2;_++)m[_+4]=e[f+_+4]}else{m=new Uint8Array(8+2*v);var H=0;if(m[H++]=255,m[H++]=c,m[H++]=0,m[H++]=6+2*v,m[H++]=v,v==1)m[H++]=1,m[H++]=0;else for(_=0;_<3;_++)m[H++]=_+1,m[H++]=_<<4|_;m[H++]=0,m[H++]=63,m[H++]=0}return{jpegOffset:t,tables:d,sosMarker:m,sofPosition:q}};J.decode._decodeOldJPEG=function(i,e,t,n,r,s){var a,o,l,c,p,f=J.decode._decodeOldJPEGInit(i,e,t,n);if(f.jpegOffset!=null)for(o=t+n-f.jpegOffset,c=new Uint8Array(o),a=0;a<o;a++)c[a]=e[f.jpegOffset+a];else{for(l=f.tables.length,c=new Uint8Array(l+f.sosMarker.length+n+2),c.set(f.tables),p=l,c[f.sofPosition+5]=i.height>>>8&255,c[f.sofPosition+6]=i.height&255,c[f.sofPosition+7]=i.width>>>8&255,c[f.sofPosition+8]=i.width&255,(e[t]!=255||e[t+1]!=SOS)&&(c.set(f.sosMarker,p),p+=sosMarker.length),a=0;a<n;a++)c[p++]=e[t+a];c[p++]=255,c[p++]=EOI}var d=new J.JpegDecoder;d.parse(c);for(var m=d.getData({width:d.width,height:d.height,forceRGB:!0,isSourcePDF:!1}),a=0;a<m.length;a++)r[s+a]=m[a];i.t262&&i.t262[0]==6&&(i.t262[0]=2)};J.decode._decodePackBits=function(i,e,t,n,r){for(var s=new Int8Array(i.buffer),a=new Int8Array(n.buffer),o=e+t;e<o;){var l=s[e];if(e++,l>=0&&l<128)for(var c=0;c<l+1;c++)a[r]=s[e],r++,e++;if(l>=-127&&l<0){for(var c=0;c<-l+1;c++)a[r]=s[e],r++;e++}}return r};J.decode._decodeThunder=function(i,e,t,n,r){for(var s=[0,1,0,-1],a=[0,1,2,3,0,-3,-2,-1],o=e+t,l=r*2,c=0;e<o;){var p=i[e],f=p>>>6,d=p&63;if(e++,f==3&&(c=d&15,n[l>>>1]|=c<<4*(1-l&1),l++),f==0)for(var m=0;m<d;m++)n[l>>>1]|=c<<4*(1-l&1),l++;if(f==2)for(var m=0;m<2;m++){var M=d>>>3*(1-m)&7;M!=4&&(c+=a[M],n[l>>>1]|=c<<4*(1-l&1),l++)}if(f==1)for(var m=0;m<3;m++){var M=d>>>2*(2-m)&3;M!=2&&(c+=s[M],n[l>>>1]|=c<<4*(1-l&1),l++)}}};J.decode._dmap={1:0,"011":1,"000011":2,"0000011":3,"010":-1,"000010":-2,"0000010":-3};J.decode._lens=function(){var i=function(l,c,p,f){for(var d=0;d<c.length;d++)l[c[d]]=p+d*f},e="00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100",t="0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111",n="11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011",r="0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101",s="00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";e=e.split(","),t=t.split(","),n=n.split(","),r=r.split(","),s=s.split(",");var a={},o={};return i(a,e,0,1),i(a,n,64,64),i(a,s,1792,64),i(o,t,0,1),i(o,r,64,64),i(o,s,1792,64),[a,o]}();J.decode._decodeG4=function(i,e,t,n,r,s,a){for(var o=J.decode,l=e<<3,c=0,p="",f=[],d=[],m=0;m<s;m++)d.push(0);d=o._makeDiff(d);for(var M=0,_=0,u=0,h=0,S=0,A=0,g="",T=0,E=Math.ceil(s/8)*8;l>>>3<e+t;){u=o._findDiff(d,M+(M==0?0:1),1-S),h=o._findDiff(d,u,S);var y=0;if(a==1&&(y=i[l>>>3]>>>7-(l&7)&1),a==2&&(y=i[l>>>3]>>>(l&7)&1),l++,p+=y,g=="H"){if(o._lens[S][p]!=null){var w=o._lens[S][p];p="",c+=w,w<64&&(o._addNtimes(f,c,S),M+=c,S=1-S,c=0,T--,T==0&&(g=""))}}else p=="0001"&&(p="",o._addNtimes(f,h-M,S),M=h),p=="001"&&(p="",g="H",T=2),o._dmap[p]!=null&&(_=u+o._dmap[p],o._addNtimes(f,_-M,S),M=_,p="",S=1-S);f.length==s&&g==""&&(o._writeBits(f,n,r*8+A*E),S=0,A++,M=0,d=o._makeDiff(f),f=[])}};J.decode._findDiff=function(i,e,t){for(var n=0;n<i.length;n+=2)if(i[n]>=e&&i[n+1]==t)return i[n]};J.decode._makeDiff=function(i){var e=[];i[0]==1&&e.push(0,1);for(var t=1;t<i.length;t++)i[t-1]!=i[t]&&e.push(t,i[t]);return e.push(i.length,0,i.length,1),e};J.decode._decodeG2=function(i,e,t,n,r,s,a){for(var o=J.decode,l=e<<3,c=0,p="",f=[],d=0,m=0,M=Math.ceil(s/8)*8;l>>>3<e+t;){var _=0;a==1&&(_=i[l>>>3]>>>7-(l&7)&1),a==2&&(_=i[l>>>3]>>>(l&7)&1),l++,p+=_,c=o._lens[d][p],c!=null&&(o._addNtimes(f,c,d),p="",c<64&&(d=1-d),f.length==s&&(o._writeBits(f,n,r*8+m*M),f=[],m++,d=0,l&7&&(l+=8-(l&7)),c>=64&&(l+=8)))}};J.decode._decodeG3=function(i,e,t,n,r,s,a,o){for(var l=J.decode,c=e<<3,p=0,f="",d=[],m=[],M=0;M<s;M++)d.push(0);for(var _=0,u=0,h=0,S=0,A=0,g=-1,T="",E=0,y=!0,w=Math.ceil(s/8)*8;c>>>3<e+t;){h=l._findDiff(m,_+(_==0?0:1),1-A),S=l._findDiff(m,h,A);var x=0;if(a==1&&(x=i[c>>>3]>>>7-(c&7)&1),a==2&&(x=i[c>>>3]>>>(c&7)&1),c++,f+=x,y){if(l._lens[A][f]!=null){var v=l._lens[A][f];f="",p+=v,v<64&&(l._addNtimes(d,p,A),A=1-A,p=0)}}else if(T=="H"){if(l._lens[A][f]!=null){var v=l._lens[A][f];f="",p+=v,v<64&&(l._addNtimes(d,p,A),_+=p,A=1-A,p=0,E--,E==0&&(T=""))}}else f=="0001"&&(f="",l._addNtimes(d,S-_,A),_=S),f=="001"&&(f="",T="H",E=2),l._dmap[f]!=null&&(u=h+l._dmap[f],l._addNtimes(d,u-_,A),_=u,f="",A=1-A);f.endsWith("000000000001")&&(g>=0&&l._writeBits(d,n,r*8+g*w),o&&(a==1&&(y=(i[c>>>3]>>>7-(c&7)&1)==1),a==2&&(y=(i[c>>>3]>>>(c&7)&1)==1),c++),f="",A=0,g++,_=0,m=l._makeDiff(d),d=[])}d.length==s&&l._writeBits(d,n,r*8+g*w)};J.decode._addNtimes=function(i,e,t){for(var n=0;n<e;n++)i.push(t)};J.decode._writeBits=function(i,e,t){for(var n=0;n<i.length;n++)e[t+n>>>3]|=i[n]<<7-(t+n&7)};J.decode._decodeLZW=J.decode._decodeLZW=function(){var i,e,t,n,r=0,s=0,a=0,o=0,l=function(){var u=i>>>3,h=e[u]<<16|e[u+1]<<8|e[u+2],S=h>>>24-(i&7)-s&(1<<s)-1;return i+=s,S},c=new Uint32Array(4096*4),p=0,f=function(u){if(u!=p){p=u,a=1<<u,o=a+1;for(var h=0;h<o+1;h++)c[4*h]=c[4*h+3]=h,c[4*h+1]=65535,c[4*h+2]=1}},d=function(u){s=u+1,r=o+1},m=function(u){for(var h=u<<2,S=c[h+2],A=n+S-1;h!=65535;)t[A--]=c[h],h=c[h+1];n+=S},M=function(u,h){var S=r<<2,A=u<<2;c[S]=c[(h<<2)+3],c[S+1]=A,c[S+2]=c[A+2]+1,c[S+3]=c[A+3],r++,r+1==1<<s&&s!=12&&s++},_=function(u,h,S,A,g,T){i=h<<3,e=u,t=A,n=g;var E=h+S<<3,y=0,w=0;for(f(T),d(T);i<E&&(y=l())!=o;){if(y==a){if(d(T),y=l(),y==o)break;m(y)}else y<r?(m(y),M(w,y)):(M(w,w),m(r-1));w=y}return n};return _}();J.tags={};J._types=function(){var i=new Array(250);i.fill(0),i=i.concat([0,0,0,0,4,3,3,3,3,3,0,0,3,0,0,0,3,0,0,2,2,2,2,4,3,0,0,3,4,4,3,3,5,5,3,2,5,5,0,0,0,0,4,4,0,0,3,3,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,2,2,3,5,5,3,0,3,3,4,4,4,3,4,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);var e={33432:2,33434:5,33437:5,34665:4,34850:3,34853:4,34855:3,34864:3,34866:4,36864:7,36867:2,36868:2,37121:7,37377:10,37378:5,37380:10,37381:5,37383:3,37384:3,37385:3,37386:5,37510:7,37520:2,37521:2,37522:2,40960:7,40961:3,40962:4,40963:4,40965:4,41486:5,41487:5,41488:3,41985:3,41986:3,41987:3,41988:5,41989:3,41990:3,41993:3,41994:3,41995:7,41996:3,42032:2,42033:2,42034:5,42036:2,42037:2,59932:7};return{basic:{main:i,rest:e},gps:{main:[1,2,5,2,5,1,5,5,0,9],rest:{18:2,29:2}}}}();J._readIFD=function(i,e,t,n,r,s){var a=i.readUshort(e,t);t+=2;var o={};s.debug&&log("   ".repeat(r),n.length-1,">>>----------------");for(var l=0;l<a;l++){var c=i.readUshort(e,t);t+=2;var p=i.readUshort(e,t);t+=2;var f=i.readUint(e,t);t+=4;var d=i.readUint(e,t);t+=4;var m=[];if(p==1||p==7){var M=f<5?t-4:d;M+f>e.buffer.byteLength&&(f=e.buffer.byteLength-M),m=new Uint8Array(e.buffer,M,f)}if(p==2){var _=f<5?t-4:d,u=e[_],h=Math.max(0,Math.min(f-1,e.length-_));u<128||h==0?m.push(i.readASCII(e,_,h)):m=new Uint8Array(e.buffer,_,h)}if(p==3)for(var S=0;S<f;S++)m.push(i.readUshort(e,(f<3?t-4:d)+2*S));if(p==4||p==13)for(var S=0;S<f;S++)m.push(i.readUint(e,(f<2?t-4:d)+4*S));if(p==5||p==10)for(var A=p==5?i.readUint:i.readInt,S=0;S<f;S++)m.push([A(e,d+S*8),A(e,d+S*8+4)]);if(p==8)for(var S=0;S<f;S++)m.push(i.readShort(e,(f<3?t-4:d)+2*S));if(p==9)for(var S=0;S<f;S++)m.push(i.readInt(e,(f<2?t-4:d)+4*S));if(p==11)for(var S=0;S<f;S++)m.push(i.readFloat(e,d+S*4));if(p==12)for(var S=0;S<f;S++)m.push(i.readDouble(e,d+S*8));if(f!=0&&m.length==0){if(log(c,"unknown TIFF tag type: ",p,"num:",f),l==0)return;continue}if(s.debug&&log("   ".repeat(r),c,p,J.tags[c],m),o["t"+c]=m,!(c==330&&o.t272&&o.t272[0]=="DSLR-A100")){if(c==330||c==34665||c==34853||c==50740&&i.readUshort(e,i.readUint(m,0))<300||c==61440){for(var g=c==50740?[i.readUint(m,0)]:m,T=[],S=0;S<g.length;S++)J._readIFD(i,e,g[S],T,r+1,s);c==330&&(o.subIFD=T),c==34665&&(o.exifIFD=T[0]),c==34853&&(o.gpsiIFD=T[0]),c==50740&&(o.dngPrvt=T[0]),c==61440&&(o.fujiIFD=T[0])}}if(c==37500&&s.parseMN){var E=m;if(i.readASCII(E,0,5)=="Nikon")o.makerNote=J.decode(E.slice(10).buffer)[0];else if(i.readASCII(E,0,5)=="OLYMP"||i.readASCII(E,0,9)=="OM SYSTEM"){var y=[8208,8224,8240,8256,8272],w=[];J._readIFD(i,E,E[1]==77?16:E[5]==85?12:8,w,r+1,s);for(var x=o.makerNote=w.pop(),S=0;S<y.length;S++){var v="t"+y[S];x[v]!=null&&(J._readIFD(i,E,x[v][0],w,r+1,s),x[v]=w.pop())}x.t12288&&(J._readIFD(i,x.t12288,0,w,r+1,s),x.t12288=w.pop())}else if(i.readUshort(e,d)<300&&i.readUshort(e,d+4)<=12){var w=[];J._readIFD(i,e,d,w,r+1,s),o.makerNote=w[0]}}}return n.push(o),s.debug&&log("   ".repeat(r),"<<<---------------"),t};J._writeIFD=function(i,e,t,n,r){var s=Object.keys(r),a=s.length;r.exifIFD&&a--,r.gpsiIFD&&a--,i.writeUshort(t,n,a),n+=2;for(var o=n+a*12+4,l=0;l<s.length;l++){var c=s[l];if(!(c=="t34665"||c=="t34853")){c=="exifIFD"&&(c="t34665"),c=="gpsiIFD"&&(c="t34853");var p=parseInt(c.slice(1)),f=e.main[p];if(f==null&&(f=e.rest[p]),f==null||f==0)throw new Error("unknown type of tag: "+p);var d=r[c];if(p==34665){var m=J._writeIFD(i,e,t,o,r.exifIFD);d=[o],o=m[1]}if(p==34853){var m=J._writeIFD(i,J._types.gps,t,o,r.gpsiIFD);d=[o],o=m[1]}f==2&&(d=d[0]+"\0");var M=d.length;i.writeUshort(t,n,p),n+=2,i.writeUshort(t,n,f),n+=2,i.writeUint(t,n,M),n+=4;var _=[-1,1,1,2,4,8,0,1,0,4,8,0,8][f]*M,u=n;if(_>4&&(i.writeUint(t,n,o),u=o),f==1||f==7)for(var h=0;h<M;h++)t[u+h]=d[h];else if(f==2)i.writeASCII(t,u,d);else if(f==3)for(var h=0;h<M;h++)i.writeUshort(t,u+2*h,d[h]);else if(f==4)for(var h=0;h<M;h++)i.writeUint(t,u+4*h,d[h]);else if(f==5||f==10)for(var S=f==5?i.writeUint:i.writeInt,h=0;h<M;h++){var A=d[h],g=A[0],T=A[1];if(g==null)throw"e";S(t,u+8*h,g),S(t,u+8*h+4,T)}else if(f==9)for(var h=0;h<M;h++)i.writeInt(t,u+4*h,d[h]);else if(f==12)for(var h=0;h<M;h++)i.writeDouble(t,u+8*h,d[h]);else throw f;_>4&&(_+=_&1,o+=_),n+=4}}return[n,o]};J.toRGBA8=function(i,e){function t(we){return we<.0031308?12.92*we:1.055*Math.pow(we,1/2.4)-.055}var n=i.width,r=i.height,s=n*r,a=i.data,o=new Uint8Array(s*4),l=i.t262?i.t262[0]:2,c=i.t258?Math.min(32,i.t258[0]):1;i.t262==null&&c==1&&(l=0);var p=i.t277?i.t277[0]:i.t258?i.t258.length:[1,1,3,1,1,4,3][l],f=i.t339?i.t339[0]:null;if(l==1&&c==32&&f!=3)throw"e";var d=Math.ceil(p*c*n/8);if(l==0){e=1/256;for(var m=0;m<r;m++){var M=m*d,_=m*n;if(c==1)for(var u=0;u<n;u++){var h=_+u<<2,S=a[M+(u>>3)]>>7-(u&7)&1;o[h]=o[h+1]=o[h+2]=(1-S)*255,o[h+3]=255}if(c==4)for(var u=0;u<n;u++){var h=_+u<<2,S=a[M+(u>>1)]>>4-4*(u&1)&15;o[h]=o[h+1]=o[h+2]=(15-S)*17,o[h+3]=255}if(c==8)for(var u=0;u<n;u++){var h=_+u<<2,S=a[M+u];o[h]=o[h+1]=o[h+2]=255-S,o[h+3]=255}if(c==16)for(var u=0;u<n;u++){var h=_+u<<2,A=M+2*u,S=a[A+1]<<8|a[A];o[h]=o[h+1]=o[h+2]=Math.min(255,255-~~(S*e)),o[h+3]=255}}}else if(l==1){e==null&&(e=1/256);for(var g=a.length&3?null:new Float32Array(a.buffer),m=0;m<r;m++){var M=m*d,_=m*n;if(c==1)for(var u=0;u<n;u++){var h=_+u<<2,S=a[M+(u>>3)]>>7-(u&7)&1;o[h]=o[h+1]=o[h+2]=S*255,o[h+3]=255}if(c==2)for(var u=0;u<n;u++){var h=_+u<<2,S=a[M+(u>>2)]>>6-2*(u&3)&3;o[h]=o[h+1]=o[h+2]=S*85,o[h+3]=255}if(c==8)for(var u=0;u<n;u++){var h=_+u<<2,S=a[M+u*p];o[h]=o[h+1]=o[h+2]=S,o[h+3]=255}if(c==16)for(var u=0;u<n;u++){var h=_+u<<2,A=M+2*u,S=a[A+1]<<8|a[A];o[h]=o[h+1]=o[h+2]=Math.min(255,~~(S*e)),o[h+3]=255}if(c==32)for(var u=0;u<n;u++){var h=_+u<<2,A=(M>>>2)+u,S=g[A];o[h]=o[h+1]=o[h+2]=~~(.5+255*S),o[h+3]=255}}}else if(l==2)if(c==8){if(p==1)for(var u=0;u<s;u++)o[4*u]=o[4*u+1]=o[4*u+2]=a[u],o[4*u+3]=255;if(p==3)for(var u=0;u<s;u++){var h=u<<2,T=u*3;o[h]=a[T],o[h+1]=a[T+1],o[h+2]=a[T+2],o[h+3]=255}if(p>=4)for(var u=0;u<s;u++){var h=u<<2,T=u*p;o[h]=a[T],o[h+1]=a[T+1],o[h+2]=a[T+2],o[h+3]=a[T+3]}}else if(c==16){if(p==4)for(var u=0;u<s;u++){var h=u<<2,T=u*8+1;o[h]=a[T],o[h+1]=a[T+2],o[h+2]=a[T+4],o[h+3]=a[T+6]}if(p==3)for(var u=0;u<s;u++){var h=u<<2,T=u*6+1;o[h]=a[T],o[h+1]=a[T+2],o[h+2]=a[T+4],o[h+3]=255}}else if(c==32){for(var E=new Float32Array(a.buffer),y=0,u=0;u<E.length;u++)y=Math.min(y,E[u]);if(y<0)for(var u=0;u<a.length;u+=4){var w=a[u];a[u]=a[u+3],a[u+3]=w,w=a[u+1],a[u+1]=a[u+2],a[u+2]=w}for(var x=[],u=0;u<65536;u++)x.push(t(u/65535));for(var u=0;u<E.length;u++){var v=Math.max(0,Math.min(1,E[u]));E[u]=x[~~(.5+v*65535)]}if(p==3)for(var u=0;u<s;u++){var h=u<<2,T=u*3;o[h]=~~(.5+E[T]*255),o[h+1]=~~(.5+E[T+1]*255),o[h+2]=~~(.5+E[T+2]*255),o[h+3]=255}else if(p==4)for(var u=0;u<s;u++){var h=u<<2,T=u*4;o[h]=~~(.5+E[T]*255),o[h+1]=~~(.5+E[T+1]*255),o[h+2]=~~(.5+E[T+2]*255),o[h+3]=~~(.5+E[T+3]*255)}else throw p}else throw c;else if(l==3)for(var C=i.t320,L=1<<c,D=c==8&&p>1&&i.t338&&i.t338[0]!=0,m=0;m<r;m++)for(var I=0;I<n;I++){var u=m*n+I,h=u<<2,z=0,B=m*d;if(c==1)z=a[B+(I>>>3)]>>>7-(I&7)&1;else if(c==2)z=a[B+(I>>>2)]>>>6-2*(I&3)&3;else if(c==4)z=a[B+(I>>>1)]>>>4-4*(I&1)&15;else if(c==8)z=a[B+I*p];else throw c;o[h]=C[z]>>8,o[h+1]=C[L+z]>>8,o[h+2]=C[L+L+z]>>8,o[h+3]=D?a[B+I*p+1]:255}else if(l==5)for(var q=p>4?1:0,u=0;u<s;u++){var h=u<<2,P=u*p;if(window.UDOC){var F=a[P],N=a[P+1],H=a[P+2],K=a[P+3],ce=UDOC.C.cmykToRgb([F*(1/255),N*(1/255),H*(1/255),K*(1/255)]);o[h]=~~(.5+255*ce[0]),o[h+1]=~~(.5+255*ce[1]),o[h+2]=~~(.5+255*ce[2])}else{var F=255-a[P],N=255-a[P+1],H=255-a[P+2],K=(255-a[P+3])*(1/255);o[h]=~~(F*K+.5),o[h+1]=~~(N*K+.5),o[h+2]=~~(H*K+.5)}o[h+3]=255*(1-q)+a[P+4]*q}else if(l==6&&i.t278)for(var G=i.t278[0],m=0;m<r;m+=G)for(var u=m*n,j=G*n,Z=0;Z<j;Z++){var h=4*(u+Z),P=3*u+4*(Z>>>1),H=a[P+(Z&1)],V=a[P+2]-128,ae=a[P+3]-128,xe=H+((ae>>2)+(ae>>3)+(ae>>5)),ue=H-((V>>2)+(V>>4)+(V>>5))-((ae>>1)+(ae>>3)+(ae>>4)+(ae>>5)),Ce=H+(V+(V>>1)+(V>>2)+(V>>6));o[h]=Math.max(0,Math.min(255,xe)),o[h+1]=Math.max(0,Math.min(255,ue)),o[h+2]=Math.max(0,Math.min(255,Ce)),o[h+3]=255}else if(l==32845)for(var m=0;m<r;m++)for(var I=0;I<n;I++){var P=(m*n+I)*6,h=(m*n+I)*4,be=a[P+1]<<8|a[P],be=Math.pow(2,(be+.5)/256-64),Pe=(a[P+3]+.5)/410,O=(a[P+5]+.5)/410,De=9*Pe/(6*Pe-16*O+12),de=4*O/(6*Pe-16*O+12),pe=be,Ee=De*pe/de,H=pe,Be=(1-De-de)*pe/de,xe=2.69*Ee-1.276*H-.414*Be,ue=-1.022*Ee+1.978*H+.044*Be,Ce=.061*Ee-.224*H+1.163*Be;o[h]=t(Math.min(xe,1))*255,o[h+1]=t(Math.min(ue,1))*255,o[h+2]=t(Math.min(Ce,1))*255,o[h+3]=255}else log("Unknown Photometric interpretation: "+l);return o};J.replaceIMG=function(i){i==null&&(i=document.getElementsByTagName("img"));for(var e=["tif","tiff","dng","cr2","nef"],t=0;t<i.length;t++){var n=i[t],r=n.getAttribute("src");if(r!=null){var s=r.split(".").pop().toLowerCase();if(e.indexOf(s)!=-1){var a=new XMLHttpRequest;J._xhrs.push(a),J._imgs.push(n),a.open("GET",r),a.responseType="arraybuffer",a.onload=J._imgLoaded,a.send()}}}};J._xhrs=[];J._imgs=[];J._imgLoaded=function(i){var e=J._xhrs.indexOf(i.target),t=J._imgs[e];J._xhrs.splice(e,1),J._imgs.splice(e,1),t.setAttribute("src",J.bufferToURI(i.target.response))};J.bufferToURI=function(i){var e=J.decode(i),t=e,n=0,r=t[0];e[0].subIFD&&(t=t.concat(e[0].subIFD));for(var s=0;s<t.length;s++){var a=t[s];if(!(a.t258==null||a.t258.length<3)){var o=a.t256*a.t257;o>n&&(n=o,r=a)}}J.decodeImage(i,r,e);var l=J.toRGBA8(r),c=r.width,p=r.height,f=document.createElement("canvas");f.width=c,f.height=p;var d=f.getContext("2d"),m=new ImageData(new Uint8ClampedArray(l.buffer),c,p);return d.putImageData(m,0,0),f.toDataURL()};J._binBE={nextZero:function(i,e){for(;i[e]!=0;)e++;return e},readUshort:function(i,e){return i[e]<<8|i[e+1]},readShort:function(i,e){var t=J._binBE.ui8;return t[0]=i[e+1],t[1]=i[e+0],J._binBE.i16[0]},readInt:function(i,e){var t=J._binBE.ui8;return t[0]=i[e+3],t[1]=i[e+2],t[2]=i[e+1],t[3]=i[e+0],J._binBE.i32[0]},readUint:function(i,e){var t=J._binBE.ui8;return t[0]=i[e+3],t[1]=i[e+2],t[2]=i[e+1],t[3]=i[e+0],J._binBE.ui32[0]},readASCII:function(i,e,t){for(var n="",r=0;r<t;r++)n+=String.fromCharCode(i[e+r]);return n},readFloat:function(i,e){for(var t=J._binBE.ui8,n=0;n<4;n++)t[n]=i[e+3-n];return J._binBE.fl32[0]},readDouble:function(i,e){for(var t=J._binBE.ui8,n=0;n<8;n++)t[n]=i[e+7-n];return J._binBE.fl64[0]},writeUshort:function(i,e,t){i[e]=t>>8&255,i[e+1]=t&255},writeInt:function(i,e,t){var n=J._binBE.ui8;J._binBE.i32[0]=t,i[e+3]=n[0],i[e+2]=n[1],i[e+1]=n[2],i[e+0]=n[3]},writeUint:function(i,e,t){i[e]=t>>24&255,i[e+1]=t>>16&255,i[e+2]=t>>8&255,i[e+3]=t>>0&255},writeASCII:function(i,e,t){for(var n=0;n<t.length;n++)i[e+n]=t.charCodeAt(n)},writeDouble:function(i,e,t){J._binBE.fl64[0]=t;for(var n=0;n<8;n++)i[e+n]=J._binBE.ui8[7-n]}};J._binBE.ui8=new Uint8Array(8);J._binBE.i16=new Int16Array(J._binBE.ui8.buffer);J._binBE.i32=new Int32Array(J._binBE.ui8.buffer);J._binBE.ui32=new Uint32Array(J._binBE.ui8.buffer);J._binBE.fl32=new Float32Array(J._binBE.ui8.buffer);J._binBE.fl64=new Float64Array(J._binBE.ui8.buffer);J._binLE={nextZero:J._binBE.nextZero,readUshort:function(i,e){return i[e+1]<<8|i[e]},readShort:function(i,e){var t=J._binBE.ui8;return t[0]=i[e+0],t[1]=i[e+1],J._binBE.i16[0]},readInt:function(i,e){var t=J._binBE.ui8;return t[0]=i[e+0],t[1]=i[e+1],t[2]=i[e+2],t[3]=i[e+3],J._binBE.i32[0]},readUint:function(i,e){var t=J._binBE.ui8;return t[0]=i[e+0],t[1]=i[e+1],t[2]=i[e+2],t[3]=i[e+3],J._binBE.ui32[0]},readASCII:J._binBE.readASCII,readFloat:function(i,e){for(var t=J._binBE.ui8,n=0;n<4;n++)t[n]=i[e+n];return J._binBE.fl32[0]},readDouble:function(i,e){for(var t=J._binBE.ui8,n=0;n<8;n++)t[n]=i[e+n];return J._binBE.fl64[0]},writeUshort:function(i,e,t){i[e]=t&255,i[e+1]=t>>8&255},writeInt:function(i,e,t){var n=J._binBE.ui8;J._binBE.i32[0]=t,i[e+0]=n[0],i[e+1]=n[1],i[e+2]=n[2],i[e+3]=n[3]},writeUint:function(i,e,t){i[e]=t>>>0&255,i[e+1]=t>>>8&255,i[e+2]=t>>>16&255,i[e+3]=t>>>24&255},writeASCII:J._binBE.writeASCII};J._copyTile=function(i,e,t,n,r,s,a,o){for(var l=Math.min(e,r-a),c=Math.min(t,s-o),p=0;p<c;p++)for(var f=(o+p)*r+a,d=p*e,m=0;m<l;m++)n[f+m]=i[d+m]};J._inflateRaw=function(){var i={};return i.H={},i.H.N=function(e,t){var n=Uint8Array,r=0,s=0,a=0,o=0,l=0,c=0,p=0,f=0,d=0,m,M;if(e[0]==3&&e[1]==0)return t||new n(0);var _=i.H,u=_.b,h=_.e,S=_.R,A=_.n,g=_.A,T=_.Z,E=_.m,y=t==null;for(y&&(t=new n(e.length>>>2<<5));r==0;){if(r=u(e,d,1),s=u(e,d+1,2),d+=3,s==0){d&7&&(d+=8-(d&7));var w=(d>>>3)+4,x=e[w-4]|e[w-3]<<8;y&&(t=i.H.W(t,f+x)),t.set(new n(e.buffer,e.byteOffset+w,x),f),d=w+x<<3,f+=x;continue}if(y&&(t=i.H.W(t,f+(1<<17))),s==1&&(m=E.J,M=E.h,c=511,p=31),s==2){a=h(e,d,5)+257,o=h(e,d+5,5)+1,l=h(e,d+10,4)+4,d+=14;for(var v=1,C=0;C<38;C+=2)E.Q[C]=0,E.Q[C+1]=0;for(var C=0;C<l;C++){var L=h(e,d+C*3,3);E.Q[(E.X[C]<<1)+1]=L,L>v&&(v=L)}d+=3*l,A(E.Q,v),g(E.Q,v,E.u),m=E.w,M=E.d,d=S(E.u,(1<<v)-1,a+o,e,d,E.v);var D=_.V(E.v,0,a,E.C);c=(1<<D)-1;var I=_.V(E.v,a,o,E.D);p=(1<<I)-1,A(E.C,D),g(E.C,D,m),A(E.D,I),g(E.D,I,M)}for(;;){var z=m[T(e,d)&c];d+=z&15;var B=z>>>4;if(!(B>>>8))t[f++]=B;else{if(B==256)break;var q=f+B-254;if(B>264){var P=E.q[B-257];q=f+(P>>>3)+h(e,d,P&7),d+=P&7}var F=M[T(e,d)&p];d+=F&15;var N=F>>>4,H=E.c[N],K=(H>>>4)+u(e,d,H&15);for(d+=H&15;f<q;)t[f]=t[f++-K],t[f]=t[f++-K],t[f]=t[f++-K],t[f]=t[f++-K];f=q}}}return t.length==f?t:t.slice(0,f)},i.H.W=function(e,t){var n=e.length;if(t<=n)return e;var r=new Uint8Array(n<<1);return r.set(e,0),r},i.H.R=function(e,t,n,r,s,a){for(var o=i.H.e,l=i.H.Z,c=0;c<n;){var p=e[l(r,s)&t];s+=p&15;var f=p>>>4;if(f<=15)a[c]=f,c++;else{var d=0,m=0;f==16?(m=3+o(r,s,2),s+=2,d=a[c-1]):f==17?(m=3+o(r,s,3),s+=3):f==18&&(m=11+o(r,s,7),s+=7);for(var M=c+m;c<M;)a[c]=d,c++}}return s},i.H.V=function(e,t,n,r){for(var s=0,a=0,o=r.length>>>1;a<n;){var l=e[a+t];r[a<<1]=0,r[(a<<1)+1]=l,l>s&&(s=l),a++}for(;a<o;)r[a<<1]=0,r[(a<<1)+1]=0,a++;return s},i.H.n=function(e,t){for(var n=i.H.m,r=e.length,s,a,o,l,c,p=n.j,l=0;l<=t;l++)p[l]=0;for(l=1;l<r;l+=2)p[e[l]]++;var f=n.K;for(s=0,p[0]=0,a=1;a<=t;a++)s=s+p[a-1]<<1,f[a]=s;for(o=0;o<r;o+=2)c=e[o+1],c!=0&&(e[o]=f[c],f[c]++)},i.H.A=function(e,t,n){for(var r=e.length,s=i.H.m,a=s.r,o=0;o<r;o+=2)if(e[o+1]!=0)for(var l=o>>1,c=e[o+1],p=l<<4|c,f=t-c,d=e[o]<<f,m=d+(1<<f);d!=m;){var M=a[d]>>>15-t;n[M]=p,d++}},i.H.l=function(e,t){for(var n=i.H.m.r,r=15-t,s=0;s<e.length;s+=2){var a=e[s]<<t-e[s+1];e[s]=n[a]>>>r}},i.H.M=function(e,t,n){n=n<<(t&7);var r=t>>>3;e[r]|=n,e[r+1]|=n>>>8},i.H.I=function(e,t,n){n=n<<(t&7);var r=t>>>3;e[r]|=n,e[r+1]|=n>>>8,e[r+2]|=n>>>16},i.H.e=function(e,t,n){return(e[t>>>3]|e[(t>>>3)+1]<<8)>>>(t&7)&(1<<n)-1},i.H.b=function(e,t,n){return(e[t>>>3]|e[(t>>>3)+1]<<8|e[(t>>>3)+2]<<16)>>>(t&7)&(1<<n)-1},i.H.Z=function(e,t){return(e[t>>>3]|e[(t>>>3)+1]<<8|e[(t>>>3)+2]<<16)>>>(t&7)},i.H.i=function(e,t){return(e[t>>>3]|e[(t>>>3)+1]<<8|e[(t>>>3)+2]<<16|e[(t>>>3)+3]<<24)>>>(t&7)},i.H.m=function(){var e=Uint16Array,t=Uint32Array;return{K:new e(16),j:new e(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new e(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new t(32),J:new e(512),_:[],h:new e(32),$:[],w:new e(32768),C:[],v:[],d:new e(32768),D:[],u:new e(512),Q:[],r:new e(32768),s:new t(286),Y:new t(30),a:new t(19),t:new t(15e3),k:new e(65536),g:new e(32768)}}(),function(){for(var e=i.H.m,t=32768,n=0;n<t;n++){var r=n;r=(r&2863311530)>>>1|(r&1431655765)<<1,r=(r&3435973836)>>>2|(r&858993459)<<2,r=(r&4042322160)>>>4|(r&252645135)<<4,r=(r&4278255360)>>>8|(r&16711935)<<8,e.r[n]=(r>>>16|r<<16)>>>17}function s(a,o,l){for(;o--!=0;)a.push(0,l)}for(var n=0;n<32;n++)e.q[n]=e.S[n]<<3|e.T[n],e.c[n]=e.p[n]<<4|e.z[n];s(e._,144,8),s(e._,112,9),s(e._,24,7),s(e._,8,8),i.H.n(e._,9),i.H.A(e._,9,e.J),i.H.l(e._,9),s(e.$,32,5),i.H.n(e.$,5),i.H.A(e.$,5,e.h),i.H.l(e.$,5),s(e.Q,19,0),s(e.C,286,0),s(e.D,30,0),s(e.v,320,0)}(),i.H.N}();J.LosslessJpegDecode=function(){var i,e;function t(){return i[e++]}function n(){return i[e++]<<8|i[e++]}function r(u){for(var h=t(),S=[0,0,0,255],A=[],g=8,T=0;T<16;T++)A[T]=t();for(var T=0;T<16;T++)for(var E=0;E<A[T];E++){var y=s(S,0,T+1,1);S[y+3]=t()}var w=new Uint8Array(1<<g);u[h]=[new Uint8Array(S),w];for(var T=0;T<1<<g;T++){for(var x=g,v=T,C=0,L=0;S[C+3]==255&&x!=0;)L=v>>--x&1,C=S[C+L];w[T]=C}}function s(u,h,S,A){if(u[h+3]!=255)return 0;if(S==0)return h;for(var g=0;g<2;g++){u[h+g]==0&&(u[h+g]=u.length,u.push(0,0,A,255));var T=s(u,u[h+g],S-1,A+1);if(T!=0)return T}return 0}function a(u){for(var h=u.b,S=u.f;h<25&&u.a<u.d;){var A=u.data[u.a++];A==255&&!u.c&&u.a++,S=S<<8|A,h+=8}if(h<0)throw"e";u.b=h,u.f=S}function o(u,h){return h.b<u&&a(h),h.f>>(h.b-=u)&65535>>16-u}function l(u,h){var S=u[0],A=0,g=255,T=0;h.b<16&&a(h);var E=h.f>>h.b-8&255;for(A=u[1][E],g=S[A+3],h.b-=S[A+2];g==255;)T=h.f>>--h.b&1,A=S[A+T],g=S[A+3];return g}function c(u,h){return u<32768>>16-h&&(u+=-(1<<h)+1),u}function p(u,h){var S=l(u,h);if(S==0)return 0;if(S==16)return-32768;var A=o(S,h);return c(A,S)}function f(u,h,S,A,g,T){for(var E=0,y=0;y<T;y++){for(var w=y*h,x=0;x<h;x+=g){E++;for(var v=0;v<g;v++)u[w+x+v]=p(A[v],S)}if(S.e!=0&&E%S.e==0&&y!=0){for(var C=S.a,L=S.data;L[C]!=255||!(208<=L[C+1]&&L[C+1]<=215);)C--;S.a=C+2,S.f=0,S.b=0}}}function d(u,h){return c(o(u,h),u)}function m(u,h,S,A,g){for(var T=i.length-e,E=0;E<T;E+=4){var y=i[e+E];i[e+E]=i[e+E+3],i[e+E+3]=y;var y=i[e+E+1];i[e+E+1]=i[e+E+2],i[e+E+2]=y}for(var w=0;w<g;w++)for(var x=32768,v=32768,C=0;C<h;C+=2){var L=l(A,S),D=l(A,S);L!=0&&(x+=d(L,S)),D!=0&&(v+=d(D,S)),u[w*h+C]=x&65535,u[w*h+C+1]=v&65535}}function M(u){if(i=u,e=0,n()!=65496)throw"e";for(var h=[],S=0,A=0,g=0,T=[],E=[],y=[],w=0,x=0,v=0;;){var C=n();if(C==65535){e--;continue}var L=n();if(C==65475){A=t(),x=n(),v=n(),w=t();for(var D=0;D<w;D++){var I=t(),z=t(),B=t();if(B!=0)throw"e";h[I]=[D,z>>4,z&15]}}else if(C==65476)for(var q=e+L-2;e<q;)r(E);else if(C==65498){e++;for(var D=0;D<w;D++){var P=t(),F=h[P];y[F[0]]=E[t()>>>4],T[F[0]]=F.slice(1)}S=t(),e+=2;break}else C==65501?g=n():e+=L-2}var N=A>8?Uint16Array:Uint8Array,H=new N(x*v*w),K={b:0,f:0,c:S==8,a:e,data:i,d:i.length,e:g};if(K.c)m(H,v*w,K,y[0],x);else{for(var ce=[],G=0,j=0,D=0;D<w;D++){var Z=T[D],V=Z[0],ae=Z[1];V>G&&(G=V),ae>j&&(j=ae),ce.push(V*ae)}if(G!=1||j!=1){if(w!=3||ce[1]!=1||ce[2]!=1||G!=2||j!=1&&j!=2)throw"e";for(var xe=[],ue=0,D=0;D<w;D++){for(var Ce=0;Ce<ce[D];Ce++)xe.push(y[D]);ue+=ce[D]}var be=v/G,Pe=x/j,O=be*Pe;f(H,be*ue,K,xe,ue,Pe),_(H,S,be,Pe,ue-2,ue,ue,A);var De=new Uint16Array(O*ce[0]);if(G==2&&j==2){for(var D=0;D<O;D++)De[4*D]=H[6*D],De[4*D+1]=H[6*D+1],De[4*D+2]=H[6*D+2],De[4*D+3]=H[6*D+3];_(De,S,be*4,Pe,0,1,1,A);for(var D=0;D<O;D++)H[6*D]=De[4*D],H[6*D+1]=De[4*D+1],H[6*D+2]=De[4*D+2],H[6*D+3]=De[4*D+3]}if(G==2&&j==1){for(var D=0;D<O;D++)De[2*D]=H[4*D],De[2*D+1]=H[4*D+1];_(De,S,be*2,Pe,0,1,1,A);for(var D=0;D<O;D++)H[4*D]=De[2*D],H[4*D+1]=De[2*D+1]}for(var de=H.slice(0),ae=0;ae<x;ae++)if(j==2)for(var V=0;V<v;V++){var pe=(ae*v+V)*w,Ee=((ae>>>1)*be+(V>>>1))*ue,Be=(ae&1)*2+(V&1);H[pe]=de[Ee+Be],H[pe+1]=de[Ee+4],H[pe+2]=de[Ee+5]}else for(var V=0;V<v;V++){var pe=(ae*v+V)*w,Ee=(ae*be+(V>>>1))*ue,Be=V&1;H[pe]=de[Ee+Be],H[pe+1]=de[Ee+2],H[pe+2]=de[Ee+3]}}else if(f(H,v*w,K,y,w,x),g==0)_(H,S,v,x,0,w,w,A);else for(var we=Math.floor(g/v),ae=0;ae<x;ae+=we){var U=H.slice(ae*v*w,(ae+we)*v*w);_(U,S,v,we,0,w,w,A),H.set(U,ae*v*w)}}return H}function _(u,h,S,A,g,T,E,y){for(var w=S*E,x=g;x<T;x++)u[x]+=1<<y-1;for(var v=E;v<w;v+=E)for(var x=g;x<T;x++)u[v+x]+=u[v+x-E];for(var C=1;C<A;C++){for(var L=C*w,x=g;x<T;x++)u[L+x]+=u[L+x-w];for(var v=E;v<w;v+=E)for(var x=g;x<T;x++){var D=L+v+x,I=D-w,z=u[D-E],B=0;if(h==0)B=0;else if(h==1)B=z;else if(h==2)B=u[I];else if(h==3)B=u[I-E];else if(h==4)B=z+(u[I]-u[I-E]);else if(h==5)B=z+(u[I]-u[I-E]>>>1);else if(h==6)B=u[I]+(z-u[I-E]>>>1);else if(h==7)B=z+u[I]>>>1;else throw h;u[D]+=B}}}return M}();(function(){var i=0,e=1,t=2,n=3,r=4,s=5,a=6,o=7,l=8,c=9,p=10,f=11,d=12,m=13,M=14,_=15,u=16,h=17,S=18;function A(P){var F=J._binBE.readUshort,N={b:F(P,0),i:P[2],C:P[3],u:P[4],q:F(P,5),k:F(P,7),e:F(P,9),l:F(P,11),s:P[13],d:F(P,14)};if(N.b!=18771||N.i>1||N.q<6||N.q%6||N.e<768||N.e%24||N.l!=768||N.k<N.l||N.k%N.l||N.k-N.e>=N.l||N.s>16||N.s!=N.k/N.l||N.s!=Math.ceil(N.e/N.l)||N.d!=N.q/6||N.u!=12&&N.u!=14&&N.u!=16||N.C!=16&&N.C!=0)throw"Invalid data";if(N.i==0)throw"Not implemented. We need this file!";return N.h=N.C==16,N.m=(N.h?N.l*2/3:N.l>>>1)|0,N.A=N.m+2,N.f=64,N.g=(1<<N.u)-1,N.n=4*N.u,N}function g(P,F){var N=new Array(F.s),H=4*F.s,K=16+H;H&12&&(K+=16-(H&12));for(var ce=0,G=16;ce<F.s;G+=4){var j=J._binBE.readUint(P,G);N[ce]=P.slice(K,K+j),N[ce].j=0,N[ce].a=0,K+=j,ce++}if(K!=P.length)throw"Invalid data";return N}function T(P,F){for(var N=-F[4],H=0;N<=F[4];H++,N++)P[H]=N<=-276?-4:N<=-67?-3:N<=-18?-2:N<-0?-1:N<=F[0]?0:N<F[1]?1:N<F[2]?2:N<F[3]?3:4}function E(P,F,N){var H=[F,3*F+18,5*F+67,7*F+276,N];P.o=F,P.w=(H[4]+2*F)/(2*F+1)+1|0,P.v=Math.ceil(Math.log2(P.w)),P.t=9,T(P.c,H)}function y(P){var F={c:new Int8Array(2<<P.u)};return E(F,0,P.g),F}function w(P){for(var F=[[],[],[]],N=Math.max(2,P.w+32>>>6),H=0;H<3;H++)for(var K=0;K<41;K++)F[H][K]=[N,1];return F}function x(P){for(var F=-1,N=0;!N;F++)N=P[P.j]>>>7-P.a&1,P.a++,P.a&=7,P.a||P.j++;return F}function v(P,F){var N=0,H=8-P.a;if(P.j,P.a,F){if(F>=H)do N<<=H,F-=H,N|=P[P.j]&(1<<H)-1,P.j++,H=8;while(F>=8);F&&(N<<=F,H-=F,N|=P[P.j]>>>H&(1<<F)-1),P.a=8-H}return N}function C(P,F){var N=0;if(F<P)for(;N<=14&&F<<++N<P;);return N}function L(P,F,N,H,K,ce,G,j){j==null&&(j=0);var Z=ce+1,V=Z%2,ae=0,xe,ue,Ce=H[K],be=H[K-1],Pe=H[K-2][Z],O=be[Z-1],De=be[Z],de=be[Z+1],pe=Ce[Z-1],Ee=Ce[Z+1],Be=Math.abs,we,U,b,Y;if(V&&(we=Be(de-De),U=Be(Pe-De),b=Be(O-De)),V){if(Y=we>b&&U<we?Pe+O:we<b&&U<b?Pe+de:de+O,Y=Y+2*De>>>2,j){Ce[Z]=Y;return}xe=F.t*F.c[P.g+De-Pe]+F.c[P.g+O-De]}else Y=De>O&&De>de||De<O&&De<de?Ee+pe+2*De>>>2:pe+Ee>>>1,xe=F.t*F.c[P.g+De-O]+F.c[P.g+O-pe];ue=Be(xe);var ie=x(N);if(ie<P.n-F.v-1){var re=C(G[ue][0],G[ue][1]);ae=v(N,re)+(ie<<re)}else ae=v(N,F.v)+1;ae=ae&1?-1-(ae>>>1):ae>>>1,G[ue][0]+=Be(ae),G[ue][1]==P.f&&(G[ue][0]>>>=1,G[ue][1]>>>=1),G[ue][1]++,Y=xe<0?Y-ae:Y+ae,P.i&&(Y<0?Y+=F.w:Y>P.g&&(Y-=F.w)),Ce[Z]=Y>=0?Math.min(Y,P.g):0}function D(P,F,N){for(var H=P[0].length,K=F;K<=N;K++)P[K][0]=P[K-1][1],P[K][H-1]=P[K-1][H-2]}function I(P){D(P,o,d),D(P,t,r),D(P,_,h)}function z(P,F,N,H,K,ce,G,j,Z,V,ae,xe,ue){for(var Ce=0,be=1,Pe=K<m&&K>r;be<P.m;)Ce<P.m&&(L(P,F,N,H,K,Ce,G[Z],P.h&&(Pe&&V||!Pe&&(ae||(Ce&xe)==ue))),L(P,F,N,H,ce,Ce,G[Z],P.h&&(!Pe&&V||Pe&&(ae||(Ce&xe)==ue))),Ce+=2),Ce>8&&(L(P,F,N,H,K,be,j[Z]),L(P,F,N,H,ce,be,j[Z]),be+=2);I(H)}function B(P,F,N,H,K,ce){z(P,F,N,H,t,o,K,ce,0,0,1,0,8),z(P,F,N,H,l,_,K,ce,1,0,1,0,8),z(P,F,N,H,n,c,K,ce,2,1,0,3,0),z(P,F,N,H,p,u,K,ce,0,0,0,3,2),z(P,F,N,H,r,f,K,ce,1,0,0,3,2),z(P,F,N,H,d,h,K,ce,2,1,0,3,0)}function q(P,F,N,H,K,ce){var G=ce.length,j=P.l;K+1==P.s&&(j=P.e-K*P.l);for(var Z=6*P.e*H+K*P.l,V=0;V<6;V++){for(var ae=0;ae<j;ae++){var xe=ce[V%G][ae%G],ue;xe==0?ue=t+(V>>>1):xe==2?ue=_+(V>>>1):ue=o+V;var Ce=P.h?(ae*2/3&2147483646|ae%3&1)+(ae%3>>>1):ae>>>1;F[Z+ae]=N[ue][Ce+1]}Z+=P.e}}J._decompressRAF=function(P,F){var N=A(P),H=g(P,N),K=y(N),ce=new Int16Array(N.e*N.q);F==null&&(F=N.h?[[1,1,0,1,1,2],[1,1,2,1,1,0],[2,0,1,0,2,1],[1,1,2,1,1,0],[1,1,0,1,1,2],[0,2,1,2,0,1]]:[[0,1],[3,2]]);for(var G=[[i,n],[e,r],[s,f],[a,d],[m,u],[M,h]],j=[],Z=0;Z<S;Z++)j[Z]=new Uint16Array(N.A);for(var V=0;V<N.s;V++){for(var ae=w(K),xe=w(K),Z=0;Z<S;Z++)for(var ue=0;ue<N.A;ue++)j[Z][ue]=0;for(var Ce=0;Ce<N.d;Ce++){B(N,K,H[V],j,ae,xe);for(var Z=0;Z<6;Z++)for(var ue=0;ue<N.A;ue++)j[G[Z][0]][ue]=j[G[Z][1]][ue];q(N,ce,j,Ce,V,F);for(var Z=t;Z<S;Z++)if([s,a,m,M].indexOf(Z)==-1)for(var ue=0;ue<N.A;ue++)j[Z][ue]=0;I(j)}}return ce}})();export{Xl as A,cn as B,U0 as C,qt as D,rr as G,N0 as H,I0 as M,H0 as O,Gt as P,B0 as R,Pt as S,J as U,$ as V,L0 as W,ft as a,xn as b,an as c,Ii as d,z0 as e,js as f,We as g,go as h,Ye as i,F0 as j,O0 as k};
