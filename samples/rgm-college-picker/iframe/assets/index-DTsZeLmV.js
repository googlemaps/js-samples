function kh(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function wd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _d={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ci=Symbol.for("react.element"),Ph=Symbol.for("react.portal"),Ah=Symbol.for("react.fragment"),$h=Symbol.for("react.strict_mode"),Oh=Symbol.for("react.profiler"),Ih=Symbol.for("react.provider"),Nh=Symbol.for("react.context"),Th=Symbol.for("react.forward_ref"),Rh=Symbol.for("react.suspense"),Mh=Symbol.for("react.memo"),bh=Symbol.for("react.lazy"),wu=Symbol.iterator;function Dh(t){return t===null||typeof t!="object"?null:(t=wu&&t[wu]||t["@@iterator"],typeof t=="function"?t:null)}var Ed={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sd=Object.assign,Cd={};function yr(t,e,n){this.props=t,this.context=e,this.refs=Cd,this.updater=n||Ed}yr.prototype.isReactComponent={};yr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xd(){}xd.prototype=yr.prototype;function da(t,e,n){this.props=t,this.context=e,this.refs=Cd,this.updater=n||Ed}var pa=da.prototype=new xd;pa.constructor=da;Sd(pa,yr.prototype);pa.isPureReactComponent=!0;var _u=Array.isArray,Ld=Object.prototype.hasOwnProperty,fa={current:null},kd={key:!0,ref:!0,__self:!0,__source:!0};function Pd(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Ld.call(e,r)&&!kd.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ci,type:t,key:o,ref:s,props:i,_owner:fa.current}}function zh(t,e){return{$$typeof:Ci,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ha(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ci}function Uh(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Eu=/\/+/g;function Ls(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Uh(""+t.key):e.toString(36)}function no(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ci:case Ph:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Ls(s,0):r,_u(i)?(n="",t!=null&&(n=t.replace(Eu,"$&/")+"/"),no(i,e,n,"",function(u){return u})):i!=null&&(ha(i)&&(i=zh(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Eu,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",_u(t))for(var l=0;l<t.length;l++){o=t[l];var a=r+Ls(o,l);s+=no(o,e,n,a,i)}else if(a=Dh(t),typeof a=="function")for(t=a.call(t),l=0;!(o=t.next()).done;)o=o.value,a=r+Ls(o,l++),s+=no(o,e,n,a,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function bi(t,e,n){if(t==null)return t;var r=[],i=0;return no(t,r,"","",function(o){return e.call(n,o,i++)}),r}function Fh(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ae={current:null},ro={transition:null},jh={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:ro,ReactCurrentOwner:fa};function Ad(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:bi,forEach:function(t,e,n){bi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return bi(t,function(){e++}),e},toArray:function(t){return bi(t,function(e){return e})||[]},only:function(t){if(!ha(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=yr;z.Fragment=Ah;z.Profiler=Oh;z.PureComponent=da;z.StrictMode=$h;z.Suspense=Rh;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jh;z.act=Ad;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Sd({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=fa.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Ld.call(e,a)&&!kd.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ci,type:t.type,key:i,ref:o,props:r,_owner:s}};z.createContext=function(t){return t={$$typeof:Nh,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ih,_context:t},t.Consumer=t};z.createElement=Pd;z.createFactory=function(t){var e=Pd.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:Th,render:t}};z.isValidElement=ha;z.lazy=function(t){return{$$typeof:bh,_payload:{_status:-1,_result:t},_init:Fh}};z.memo=function(t,e){return{$$typeof:Mh,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=ro.transition;ro.transition={};try{t()}finally{ro.transition=e}};z.unstable_act=Ad;z.useCallback=function(t,e){return Ae.current.useCallback(t,e)};z.useContext=function(t){return Ae.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return Ae.current.useDeferredValue(t)};z.useEffect=function(t,e){return Ae.current.useEffect(t,e)};z.useId=function(){return Ae.current.useId()};z.useImperativeHandle=function(t,e,n){return Ae.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return Ae.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return Ae.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return Ae.current.useMemo(t,e)};z.useReducer=function(t,e,n){return Ae.current.useReducer(t,e,n)};z.useRef=function(t){return Ae.current.useRef(t)};z.useState=function(t){return Ae.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return Ae.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return Ae.current.useTransition()};z.version="18.3.1";_d.exports=z;var I=_d.exports;const M=wd(I),ee=kh({__proto__:null,default:M},[I]);var ll={},$d={exports:{}},Be={},Od={exports:{}},Id={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,T){var b=O.length;O.push(T);e:for(;0<b;){var ne=b-1>>>1,ae=O[ne];if(0<i(ae,T))O[ne]=T,O[b]=ae,b=ne;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var T=O[0],b=O.pop();if(b!==T){O[0]=b;e:for(var ne=0,ae=O.length,Ri=ae>>>1;ne<Ri;){var cn=2*(ne+1)-1,xs=O[cn],dn=cn+1,Mi=O[dn];if(0>i(xs,b))dn<ae&&0>i(Mi,xs)?(O[ne]=Mi,O[dn]=b,ne=dn):(O[ne]=xs,O[cn]=b,ne=cn);else if(dn<ae&&0>i(Mi,b))O[ne]=Mi,O[dn]=b,ne=dn;else break e}}return T}function i(O,T){var b=O.sortIndex-T.sortIndex;return b!==0?b:O.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var a=[],u=[],c=1,p=null,f=3,g=!1,v=!1,_=!1,N=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(O){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=O)r(u),T.sortIndex=T.expirationTime,e(a,T);else break;T=n(u)}}function E(O){if(_=!1,m(O),!v)if(n(a)!==null)v=!0,Ss(L);else{var T=n(u);T!==null&&Cs(E,T.startTime-O)}}function L(O,T){v=!1,_&&(_=!1,h(P),P=-1),g=!0;var b=f;try{for(m(T),p=n(a);p!==null&&(!(p.expirationTime>T)||O&&!Ze());){var ne=p.callback;if(typeof ne=="function"){p.callback=null,f=p.priorityLevel;var ae=ne(p.expirationTime<=T);T=t.unstable_now(),typeof ae=="function"?p.callback=ae:p===n(a)&&r(a),m(T)}else r(a);p=n(a)}if(p!==null)var Ri=!0;else{var cn=n(u);cn!==null&&Cs(E,cn.startTime-T),Ri=!1}return Ri}finally{p=null,f=b,g=!1}}var A=!1,k=null,P=-1,q=5,D=-1;function Ze(){return!(t.unstable_now()-D<q)}function Sr(){if(k!==null){var O=t.unstable_now();D=O;var T=!0;try{T=k(!0,O)}finally{T?Cr():(A=!1,k=null)}}else A=!1}var Cr;if(typeof d=="function")Cr=function(){d(Sr)};else if(typeof MessageChannel!="undefined"){var yu=new MessageChannel,Lh=yu.port2;yu.port1.onmessage=Sr,Cr=function(){Lh.postMessage(null)}}else Cr=function(){N(Sr,0)};function Ss(O){k=O,A||(A=!0,Cr())}function Cs(O,T){P=N(function(){O(t.unstable_now())},T)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,Ss(L))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var T=3;break;default:T=f}var b=f;f=T;try{return O()}finally{f=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,T){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var b=f;f=O;try{return T()}finally{f=b}},t.unstable_scheduleCallback=function(O,T,b){var ne=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?ne+b:ne):b=ne,O){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=b+ae,O={id:c++,callback:T,priorityLevel:O,startTime:b,expirationTime:ae,sortIndex:-1},b>ne?(O.sortIndex=b,e(u,O),n(a)===null&&O===n(u)&&(_?(h(P),P=-1):_=!0,Cs(E,b-ne))):(O.sortIndex=ae,e(a,O),v||g||(v=!0,Ss(L))),O},t.unstable_shouldYield=Ze,t.unstable_wrapCallback=function(O){var T=f;return function(){var b=f;f=T;try{return O.apply(this,arguments)}finally{f=b}}}})(Id);Od.exports=Id;var Bh=Od.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hh=I,Ue=Bh;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nd=new Set,Xr={};function Mn(t,e){sr(t,e),sr(t+"Capture",e)}function sr(t,e){for(Xr[t]=e,t=0;t<e.length;t++)Nd.add(e[t])}var Ot=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),al=Object.prototype.hasOwnProperty,Vh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Su={},Cu={};function Wh(t){return al.call(Cu,t)?!0:al.call(Su,t)?!1:Vh.test(t)?Cu[t]=!0:(Su[t]=!0,!1)}function Gh(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Yh(t,e,n,r){if(e===null||typeof e=="undefined"||Gh(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $e(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ve[t]=new $e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ve[e]=new $e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ve[t]=new $e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ve[t]=new $e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ve[t]=new $e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ve[t]=new $e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ve[t]=new $e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ve[t]=new $e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ve[t]=new $e(t,5,!1,t.toLowerCase(),null,!1,!1)});var ga=/[\-:]([a-z])/g;function ma(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ga,ma);ve[e]=new $e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ga,ma);ve[e]=new $e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ga,ma);ve[e]=new $e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ve[t]=new $e(t,1,!1,t.toLowerCase(),null,!1,!1)});ve.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ve[t]=new $e(t,1,!1,t.toLowerCase(),null,!0,!0)});function va(t,e,n,r){var i=ve.hasOwnProperty(e)?ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Yh(e,n,i,r)&&(n=null),r||i===null?Wh(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zt=Hh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Di=Symbol.for("react.element"),jn=Symbol.for("react.portal"),Bn=Symbol.for("react.fragment"),ya=Symbol.for("react.strict_mode"),ul=Symbol.for("react.profiler"),Td=Symbol.for("react.provider"),Rd=Symbol.for("react.context"),wa=Symbol.for("react.forward_ref"),cl=Symbol.for("react.suspense"),dl=Symbol.for("react.suspense_list"),_a=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),Md=Symbol.for("react.offscreen"),xu=Symbol.iterator;function xr(t){return t===null||typeof t!="object"?null:(t=xu&&t[xu]||t["@@iterator"],typeof t=="function"?t:null)}var Z=Object.assign,ks;function Rr(t){if(ks===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ks=e&&e[1]||""}return`
`+ks+t}var Ps=!1;function As(t,e){if(!t||Ps)return"";Ps=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=s&&0<=l);break}}}finally{Ps=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Rr(t):""}function Kh(t){switch(t.tag){case 5:return Rr(t.type);case 16:return Rr("Lazy");case 13:return Rr("Suspense");case 19:return Rr("SuspenseList");case 0:case 2:case 15:return t=As(t.type,!1),t;case 11:return t=As(t.type.render,!1),t;case 1:return t=As(t.type,!0),t;default:return""}}function pl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bn:return"Fragment";case jn:return"Portal";case ul:return"Profiler";case ya:return"StrictMode";case cl:return"Suspense";case dl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Rd:return(t.displayName||"Context")+".Consumer";case Td:return(t._context.displayName||"Context")+".Provider";case wa:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _a:return e=t.displayName||null,e!==null?e:pl(t.type)||"Memo";case Ft:e=t._payload,t=t._init;try{return pl(t(e))}catch{}}return null}function qh(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pl(e);case 8:return e===ya?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qh(t){var e=bd(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zi(t){t._valueTracker||(t._valueTracker=Qh(t))}function Dd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=bd(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yo(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function fl(t,e){var n=e.checked;return Z({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Lu(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=tn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zd(t,e){e=e.checked,e!=null&&va(t,"checked",e,!1)}function hl(t,e){zd(t,e);var n=tn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gl(t,e.type,n):e.hasOwnProperty("defaultValue")&&gl(t,e.type,tn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ku(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gl(t,e,n){(e!=="number"||yo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Mr=Array.isArray;function Jn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+tn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ml(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return Z({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Pu(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Mr(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tn(n)}}function Ud(t,e){var n=tn(e.value),r=tn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Au(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Fd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Fd(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ui,jd=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ui=Ui||document.createElement("div"),Ui.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ui.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xh=["Webkit","ms","Moz","O"];Object.keys(zr).forEach(function(t){Xh.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zr[e]=zr[t]})});function Bd(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zr.hasOwnProperty(t)&&zr[t]?(""+e).trim():e+"px"}function Hd(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Bd(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Zh=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yl(t,e){if(e){if(Zh[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function wl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _l=null;function Ea(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var El=null,er=null,tr=null;function $u(t){if(t=ki(t)){if(typeof El!="function")throw Error(C(280));var e=t.stateNode;e&&(e=is(e),El(t.stateNode,t.type,e))}}function Vd(t){er?tr?tr.push(t):tr=[t]:er=t}function Wd(){if(er){var t=er,e=tr;if(tr=er=null,$u(t),e)for(t=0;t<e.length;t++)$u(e[t])}}function Gd(t,e){return t(e)}function Yd(){}var $s=!1;function Kd(t,e,n){if($s)return t(e,n);$s=!0;try{return Gd(t,e,n)}finally{$s=!1,(er!==null||tr!==null)&&(Yd(),Wd())}}function Jr(t,e){var n=t.stateNode;if(n===null)return null;var r=is(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Sl=!1;if(Ot)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){Sl=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{Sl=!1}function Jh(t,e,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ur=!1,wo=null,_o=!1,Cl=null,eg={onError:function(t){Ur=!0,wo=t}};function tg(t,e,n,r,i,o,s,l,a){Ur=!1,wo=null,Jh.apply(eg,arguments)}function ng(t,e,n,r,i,o,s,l,a){if(tg.apply(this,arguments),Ur){if(Ur){var u=wo;Ur=!1,wo=null}else throw Error(C(198));_o||(_o=!0,Cl=u)}}function bn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function qd(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ou(t){if(bn(t)!==t)throw Error(C(188))}function rg(t){var e=t.alternate;if(!e){if(e=bn(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ou(i),t;if(o===r)return Ou(i),e;o=o.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function Qd(t){return t=rg(t),t!==null?Xd(t):null}function Xd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xd(t);if(e!==null)return e;t=t.sibling}return null}var Zd=Ue.unstable_scheduleCallback,Iu=Ue.unstable_cancelCallback,ig=Ue.unstable_shouldYield,og=Ue.unstable_requestPaint,re=Ue.unstable_now,sg=Ue.unstable_getCurrentPriorityLevel,Sa=Ue.unstable_ImmediatePriority,Jd=Ue.unstable_UserBlockingPriority,Eo=Ue.unstable_NormalPriority,lg=Ue.unstable_LowPriority,ep=Ue.unstable_IdlePriority,es=null,mt=null;function ag(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(es,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:dg,ug=Math.log,cg=Math.LN2;function dg(t){return t>>>=0,t===0?32:31-(ug(t)/cg|0)|0}var Fi=64,ji=4194304;function br(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function So(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=br(l):(o&=s,o!==0&&(r=br(o)))}else s=n&~i,s!==0?r=br(s):o!==0&&(r=br(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-st(e),i=1<<n,r|=t[n],e&=~i;return r}function pg(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fg(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-st(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=pg(l,e)):a<=e&&(t.expiredLanes|=l),o&=~l}}function xl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tp(){var t=Fi;return Fi<<=1,!(Fi&4194240)&&(Fi=64),t}function Os(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-st(e),t[e]=n}function hg(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-st(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Ca(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-st(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var B=0;function np(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var rp,xa,ip,op,sp,Ll=!1,Bi=[],Gt=null,Yt=null,Kt=null,ei=new Map,ti=new Map,Bt=[],gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nu(t,e){switch(t){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Kt=null;break;case"pointerover":case"pointerout":ei.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ti.delete(e.pointerId)}}function kr(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=ki(e),e!==null&&xa(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mg(t,e,n,r,i){switch(e){case"focusin":return Gt=kr(Gt,t,e,n,r,i),!0;case"dragenter":return Yt=kr(Yt,t,e,n,r,i),!0;case"mouseover":return Kt=kr(Kt,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return ei.set(o,kr(ei.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ti.set(o,kr(ti.get(o)||null,t,e,n,r,i)),!0}return!1}function lp(t){var e=yn(t.target);if(e!==null){var n=bn(e);if(n!==null){if(e=n.tag,e===13){if(e=qd(n),e!==null){t.blockedOn=e,sp(t.priority,function(){ip(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function io(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=kl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);_l=r,n.target.dispatchEvent(r),_l=null}else return e=ki(n),e!==null&&xa(e),t.blockedOn=n,!1;e.shift()}return!0}function Tu(t,e,n){io(t)&&n.delete(e)}function vg(){Ll=!1,Gt!==null&&io(Gt)&&(Gt=null),Yt!==null&&io(Yt)&&(Yt=null),Kt!==null&&io(Kt)&&(Kt=null),ei.forEach(Tu),ti.forEach(Tu)}function Pr(t,e){t.blockedOn===e&&(t.blockedOn=null,Ll||(Ll=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,vg)))}function ni(t){function e(i){return Pr(i,t)}if(0<Bi.length){Pr(Bi[0],t);for(var n=1;n<Bi.length;n++){var r=Bi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Gt!==null&&Pr(Gt,t),Yt!==null&&Pr(Yt,t),Kt!==null&&Pr(Kt,t),ei.forEach(e),ti.forEach(e),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)lp(n),n.blockedOn===null&&Bt.shift()}var nr=zt.ReactCurrentBatchConfig,Co=!0;function yg(t,e,n,r){var i=B,o=nr.transition;nr.transition=null;try{B=1,La(t,e,n,r)}finally{B=i,nr.transition=o}}function wg(t,e,n,r){var i=B,o=nr.transition;nr.transition=null;try{B=4,La(t,e,n,r)}finally{B=i,nr.transition=o}}function La(t,e,n,r){if(Co){var i=kl(t,e,n,r);if(i===null)Fs(t,e,r,xo,n),Nu(t,r);else if(mg(i,t,e,n,r))r.stopPropagation();else if(Nu(t,r),e&4&&-1<gg.indexOf(t)){for(;i!==null;){var o=ki(i);if(o!==null&&rp(o),o=kl(t,e,n,r),o===null&&Fs(t,e,r,xo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Fs(t,e,r,null,n)}}var xo=null;function kl(t,e,n,r){if(xo=null,t=Ea(r),t=yn(t),t!==null)if(e=bn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=qd(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xo=t,null}function ap(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sg()){case Sa:return 1;case Jd:return 4;case Eo:case lg:return 16;case ep:return 536870912;default:return 16}default:return 16}}var Vt=null,ka=null,oo=null;function up(){if(oo)return oo;var t,e=ka,n=e.length,r,i="value"in Vt?Vt.value:Vt.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return oo=i.slice(t,1<r?1-r:void 0)}function so(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Hi(){return!0}function Ru(){return!1}function He(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Hi:Ru,this.isPropagationStopped=Ru,this}return Z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hi)},persist:function(){},isPersistent:Hi}),e}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pa=He(wr),Li=Z({},wr,{view:0,detail:0}),_g=He(Li),Is,Ns,Ar,ts=Z({},Li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Aa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ar&&(Ar&&t.type==="mousemove"?(Is=t.screenX-Ar.screenX,Ns=t.screenY-Ar.screenY):Ns=Is=0,Ar=t),Is)},movementY:function(t){return"movementY"in t?t.movementY:Ns}}),Mu=He(ts),Eg=Z({},ts,{dataTransfer:0}),Sg=He(Eg),Cg=Z({},Li,{relatedTarget:0}),Ts=He(Cg),xg=Z({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Lg=He(xg),kg=Z({},wr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pg=He(kg),Ag=Z({},wr,{data:0}),bu=He(Ag),$g={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ig={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ng(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ig[t])?!!e[t]:!1}function Aa(){return Ng}var Tg=Z({},Li,{key:function(t){if(t.key){var e=$g[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=so(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Og[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Aa,charCode:function(t){return t.type==="keypress"?so(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?so(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Rg=He(Tg),Mg=Z({},ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Du=He(Mg),bg=Z({},Li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Aa}),Dg=He(bg),zg=Z({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ug=He(zg),Fg=Z({},ts,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jg=He(Fg),Bg=[9,13,27,32],$a=Ot&&"CompositionEvent"in window,Fr=null;Ot&&"documentMode"in document&&(Fr=document.documentMode);var Hg=Ot&&"TextEvent"in window&&!Fr,cp=Ot&&(!$a||Fr&&8<Fr&&11>=Fr),zu=" ",Uu=!1;function dp(t,e){switch(t){case"keyup":return Bg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hn=!1;function Vg(t,e){switch(t){case"compositionend":return pp(e);case"keypress":return e.which!==32?null:(Uu=!0,zu);case"textInput":return t=e.data,t===zu&&Uu?null:t;default:return null}}function Wg(t,e){if(Hn)return t==="compositionend"||!$a&&dp(t,e)?(t=up(),oo=ka=Vt=null,Hn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cp&&e.locale!=="ko"?null:e.data;default:return null}}var Gg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Gg[t.type]:e==="textarea"}function fp(t,e,n,r){Vd(r),e=Lo(e,"onChange"),0<e.length&&(n=new Pa("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var jr=null,ri=null;function Yg(t){xp(t,0)}function ns(t){var e=Gn(t);if(Dd(e))return t}function Kg(t,e){if(t==="change")return e}var hp=!1;if(Ot){var Rs;if(Ot){var Ms="oninput"in document;if(!Ms){var ju=document.createElement("div");ju.setAttribute("oninput","return;"),Ms=typeof ju.oninput=="function"}Rs=Ms}else Rs=!1;hp=Rs&&(!document.documentMode||9<document.documentMode)}function Bu(){jr&&(jr.detachEvent("onpropertychange",gp),ri=jr=null)}function gp(t){if(t.propertyName==="value"&&ns(ri)){var e=[];fp(e,ri,t,Ea(t)),Kd(Yg,e)}}function qg(t,e,n){t==="focusin"?(Bu(),jr=e,ri=n,jr.attachEvent("onpropertychange",gp)):t==="focusout"&&Bu()}function Qg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ns(ri)}function Xg(t,e){if(t==="click")return ns(e)}function Zg(t,e){if(t==="input"||t==="change")return ns(e)}function Jg(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var at=typeof Object.is=="function"?Object.is:Jg;function ii(t,e){if(at(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!al.call(e,i)||!at(t[i],e[i]))return!1}return!0}function Hu(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vu(t,e){var n=Hu(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hu(n)}}function mp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?mp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vp(){for(var t=window,e=yo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yo(t.document)}return e}function Oa(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function em(t){var e=vp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&mp(n.ownerDocument.documentElement,n)){if(r!==null&&Oa(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Vu(n,o);var s=Vu(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var tm=Ot&&"documentMode"in document&&11>=document.documentMode,Vn=null,Pl=null,Br=null,Al=!1;function Wu(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Al||Vn==null||Vn!==yo(r)||(r=Vn,"selectionStart"in r&&Oa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&ii(Br,r)||(Br=r,r=Lo(Pl,"onSelect"),0<r.length&&(e=new Pa("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vn)))}function Vi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wn={animationend:Vi("Animation","AnimationEnd"),animationiteration:Vi("Animation","AnimationIteration"),animationstart:Vi("Animation","AnimationStart"),transitionend:Vi("Transition","TransitionEnd")},bs={},yp={};Ot&&(yp=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function rs(t){if(bs[t])return bs[t];if(!Wn[t])return t;var e=Wn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yp)return bs[t]=e[n];return t}var wp=rs("animationend"),_p=rs("animationiteration"),Ep=rs("animationstart"),Sp=rs("transitionend"),Cp=new Map,Gu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(t,e){Cp.set(t,e),Mn(e,[t])}for(var Ds=0;Ds<Gu.length;Ds++){var zs=Gu[Ds],nm=zs.toLowerCase(),rm=zs[0].toUpperCase()+zs.slice(1);sn(nm,"on"+rm)}sn(wp,"onAnimationEnd");sn(_p,"onAnimationIteration");sn(Ep,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(Sp,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),im=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function Yu(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ng(r,e,void 0,t),t.currentTarget=null}function xp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Yu(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Yu(i,l,u),o=a}}}if(_o)throw t=Cl,_o=!1,Cl=null,t}function V(t,e){var n=e[Tl];n===void 0&&(n=e[Tl]=new Set);var r=t+"__bubble";n.has(r)||(Lp(e,t,2,!1),n.add(r))}function Us(t,e,n){var r=0;e&&(r|=4),Lp(n,t,r,e)}var Wi="_reactListening"+Math.random().toString(36).slice(2);function oi(t){if(!t[Wi]){t[Wi]=!0,Nd.forEach(function(n){n!=="selectionchange"&&(im.has(n)||Us(n,!1,t),Us(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wi]||(e[Wi]=!0,Us("selectionchange",!1,e))}}function Lp(t,e,n,r){switch(ap(e)){case 1:var i=yg;break;case 4:i=wg;break;default:i=La}n=i.bind(null,e,n,t),i=void 0,!Sl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Fs(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=yn(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Kd(function(){var u=o,c=Ea(n),p=[];e:{var f=Cp.get(t);if(f!==void 0){var g=Pa,v=t;switch(t){case"keypress":if(so(n)===0)break e;case"keydown":case"keyup":g=Rg;break;case"focusin":v="focus",g=Ts;break;case"focusout":v="blur",g=Ts;break;case"beforeblur":case"afterblur":g=Ts;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Sg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Dg;break;case wp:case _p:case Ep:g=Lg;break;case Sp:g=Ug;break;case"scroll":g=_g;break;case"wheel":g=jg;break;case"copy":case"cut":case"paste":g=Pg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Du}var _=(e&4)!==0,N=!_&&t==="scroll",h=_?f!==null?f+"Capture":null:f;_=[];for(var d=u,m;d!==null;){m=d;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,h!==null&&(E=Jr(d,h),E!=null&&_.push(si(d,E,m)))),N)break;d=d.return}0<_.length&&(f=new g(f,v,null,n,c),p.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==_l&&(v=n.relatedTarget||n.fromElement)&&(yn(v)||v[It]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?yn(v):null,v!==null&&(N=bn(v),v!==N||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(_=Mu,E="onMouseLeave",h="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(_=Du,E="onPointerLeave",h="onPointerEnter",d="pointer"),N=g==null?f:Gn(g),m=v==null?f:Gn(v),f=new _(E,d+"leave",g,n,c),f.target=N,f.relatedTarget=m,E=null,yn(c)===u&&(_=new _(h,d+"enter",v,n,c),_.target=m,_.relatedTarget=N,E=_),N=E,g&&v)t:{for(_=g,h=v,d=0,m=_;m;m=Dn(m))d++;for(m=0,E=h;E;E=Dn(E))m++;for(;0<d-m;)_=Dn(_),d--;for(;0<m-d;)h=Dn(h),m--;for(;d--;){if(_===h||h!==null&&_===h.alternate)break t;_=Dn(_),h=Dn(h)}_=null}else _=null;g!==null&&Ku(p,f,g,_,!1),v!==null&&N!==null&&Ku(p,N,v,_,!0)}}e:{if(f=u?Gn(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var L=Kg;else if(Fu(f))if(hp)L=Zg;else{L=Qg;var A=qg}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(L=Xg);if(L&&(L=L(t,u))){fp(p,L,n,c);break e}A&&A(t,f,u),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&gl(f,"number",f.value)}switch(A=u?Gn(u):window,t){case"focusin":(Fu(A)||A.contentEditable==="true")&&(Vn=A,Pl=u,Br=null);break;case"focusout":Br=Pl=Vn=null;break;case"mousedown":Al=!0;break;case"contextmenu":case"mouseup":case"dragend":Al=!1,Wu(p,n,c);break;case"selectionchange":if(tm)break;case"keydown":case"keyup":Wu(p,n,c)}var k;if($a)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Hn?dp(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(cp&&n.locale!=="ko"&&(Hn||P!=="onCompositionStart"?P==="onCompositionEnd"&&Hn&&(k=up()):(Vt=c,ka="value"in Vt?Vt.value:Vt.textContent,Hn=!0)),A=Lo(u,P),0<A.length&&(P=new bu(P,t,null,n,c),p.push({event:P,listeners:A}),k?P.data=k:(k=pp(n),k!==null&&(P.data=k)))),(k=Hg?Vg(t,n):Wg(t,n))&&(u=Lo(u,"onBeforeInput"),0<u.length&&(c=new bu("onBeforeInput","beforeinput",null,n,c),p.push({event:c,listeners:u}),c.data=k))}xp(p,e)})}function si(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Lo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Jr(t,n),o!=null&&r.unshift(si(t,o,i)),o=Jr(t,e),o!=null&&r.push(si(t,o,i))),t=t.return}return r}function Dn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ku(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Jr(n,o),a!=null&&s.unshift(si(n,a,l))):i||(a=Jr(n,o),a!=null&&s.push(si(n,a,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var om=/\r\n?/g,sm=/\u0000|\uFFFD/g;function qu(t){return(typeof t=="string"?t:""+t).replace(om,`
`).replace(sm,"")}function Gi(t,e,n){if(e=qu(e),qu(t)!==e&&n)throw Error(C(425))}function ko(){}var $l=null,Ol=null;function Il(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,lm=typeof clearTimeout=="function"?clearTimeout:void 0,Qu=typeof Promise=="function"?Promise:void 0,am=typeof queueMicrotask=="function"?queueMicrotask:typeof Qu!="undefined"?function(t){return Qu.resolve(null).then(t).catch(um)}:Nl;function um(t){setTimeout(function(){throw t})}function js(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ni(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ni(e)}function qt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xu(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _r=Math.random().toString(36).slice(2),ht="__reactFiber$"+_r,li="__reactProps$"+_r,It="__reactContainer$"+_r,Tl="__reactEvents$"+_r,cm="__reactListeners$"+_r,dm="__reactHandles$"+_r;function yn(t){var e=t[ht];if(e)return e;for(var n=t.parentNode;n;){if(e=n[It]||n[ht]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xu(t);t!==null;){if(n=t[ht])return n;t=Xu(t)}return e}t=n,n=t.parentNode}return null}function ki(t){return t=t[ht]||t[It],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function is(t){return t[li]||null}var Rl=[],Yn=-1;function ln(t){return{current:t}}function W(t){0>Yn||(t.current=Rl[Yn],Rl[Yn]=null,Yn--)}function H(t,e){Yn++,Rl[Yn]=t.current,t.current=e}var nn={},Se=ln(nn),Te=ln(!1),Pn=nn;function lr(t,e){var n=t.type.contextTypes;if(!n)return nn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Re(t){return t=t.childContextTypes,t!=null}function Po(){W(Te),W(Se)}function Zu(t,e,n){if(Se.current!==nn)throw Error(C(168));H(Se,e),H(Te,n)}function kp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,qh(t)||"Unknown",i));return Z({},n,r)}function Ao(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nn,Pn=Se.current,H(Se,t),H(Te,Te.current),!0}function Ju(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=kp(t,e,Pn),r.__reactInternalMemoizedMergedChildContext=t,W(Te),W(Se),H(Se,t)):W(Te),H(Te,n)}var St=null,os=!1,Bs=!1;function Pp(t){St===null?St=[t]:St.push(t)}function pm(t){os=!0,Pp(t)}function an(){if(!Bs&&St!==null){Bs=!0;var t=0,e=B;try{var n=St;for(B=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}St=null,os=!1}catch(i){throw St!==null&&(St=St.slice(t+1)),Zd(Sa,an),i}finally{B=e,Bs=!1}}return null}var Kn=[],qn=0,$o=null,Oo=0,Ve=[],We=0,An=null,Lt=1,kt="";function hn(t,e){Kn[qn++]=Oo,Kn[qn++]=$o,$o=t,Oo=e}function Ap(t,e,n){Ve[We++]=Lt,Ve[We++]=kt,Ve[We++]=An,An=t;var r=Lt;t=kt;var i=32-st(r)-1;r&=~(1<<i),n+=1;var o=32-st(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Lt=1<<32-st(e)+i|n<<i|r,kt=o+t}else Lt=1<<o|n<<i|r,kt=t}function Ia(t){t.return!==null&&(hn(t,1),Ap(t,1,0))}function Na(t){for(;t===$o;)$o=Kn[--qn],Kn[qn]=null,Oo=Kn[--qn],Kn[qn]=null;for(;t===An;)An=Ve[--We],Ve[We]=null,kt=Ve[--We],Ve[We]=null,Lt=Ve[--We],Ve[We]=null}var ze=null,De=null,Y=!1,ot=null;function $p(t,e){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ec(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ze=t,De=qt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ze=t,De=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=An!==null?{id:Lt,overflow:kt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ze=t,De=null,!0):!1;default:return!1}}function Ml(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bl(t){if(Y){var e=De;if(e){var n=e;if(!ec(t,e)){if(Ml(t))throw Error(C(418));e=qt(n.nextSibling);var r=ze;e&&ec(t,e)?$p(r,n):(t.flags=t.flags&-4097|2,Y=!1,ze=t)}}else{if(Ml(t))throw Error(C(418));t.flags=t.flags&-4097|2,Y=!1,ze=t}}}function tc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ze=t}function Yi(t){if(t!==ze)return!1;if(!Y)return tc(t),Y=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Il(t.type,t.memoizedProps)),e&&(e=De)){if(Ml(t))throw Op(),Error(C(418));for(;e;)$p(t,e),e=qt(e.nextSibling)}if(tc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){De=qt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}De=null}}else De=ze?qt(t.stateNode.nextSibling):null;return!0}function Op(){for(var t=De;t;)t=qt(t.nextSibling)}function ar(){De=ze=null,Y=!1}function Ta(t){ot===null?ot=[t]:ot.push(t)}var fm=zt.ReactCurrentBatchConfig;function $r(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Ki(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function nc(t){var e=t._init;return e(t._payload)}function Ip(t){function e(h,d){if(t){var m=h.deletions;m===null?(h.deletions=[d],h.flags|=16):m.push(d)}}function n(h,d){if(!t)return null;for(;d!==null;)e(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function i(h,d){return h=Jt(h,d),h.index=0,h.sibling=null,h}function o(h,d,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<d?(h.flags|=2,d):m):(h.flags|=2,d)):(h.flags|=1048576,d)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function l(h,d,m,E){return d===null||d.tag!==6?(d=qs(m,h.mode,E),d.return=h,d):(d=i(d,m),d.return=h,d)}function a(h,d,m,E){var L=m.type;return L===Bn?c(h,d,m.props.children,E,m.key):d!==null&&(d.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ft&&nc(L)===d.type)?(E=i(d,m.props),E.ref=$r(h,d,m),E.return=h,E):(E=ho(m.type,m.key,m.props,null,h.mode,E),E.ref=$r(h,d,m),E.return=h,E)}function u(h,d,m,E){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Qs(m,h.mode,E),d.return=h,d):(d=i(d,m.children||[]),d.return=h,d)}function c(h,d,m,E,L){return d===null||d.tag!==7?(d=xn(m,h.mode,E,L),d.return=h,d):(d=i(d,m),d.return=h,d)}function p(h,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=qs(""+d,h.mode,m),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Di:return m=ho(d.type,d.key,d.props,null,h.mode,m),m.ref=$r(h,null,d),m.return=h,m;case jn:return d=Qs(d,h.mode,m),d.return=h,d;case Ft:var E=d._init;return p(h,E(d._payload),m)}if(Mr(d)||xr(d))return d=xn(d,h.mode,m,null),d.return=h,d;Ki(h,d)}return null}function f(h,d,m,E){var L=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return L!==null?null:l(h,d,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Di:return m.key===L?a(h,d,m,E):null;case jn:return m.key===L?u(h,d,m,E):null;case Ft:return L=m._init,f(h,d,L(m._payload),E)}if(Mr(m)||xr(m))return L!==null?null:c(h,d,m,E,null);Ki(h,m)}return null}function g(h,d,m,E,L){if(typeof E=="string"&&E!==""||typeof E=="number")return h=h.get(m)||null,l(d,h,""+E,L);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Di:return h=h.get(E.key===null?m:E.key)||null,a(d,h,E,L);case jn:return h=h.get(E.key===null?m:E.key)||null,u(d,h,E,L);case Ft:var A=E._init;return g(h,d,m,A(E._payload),L)}if(Mr(E)||xr(E))return h=h.get(m)||null,c(d,h,E,L,null);Ki(d,E)}return null}function v(h,d,m,E){for(var L=null,A=null,k=d,P=d=0,q=null;k!==null&&P<m.length;P++){k.index>P?(q=k,k=null):q=k.sibling;var D=f(h,k,m[P],E);if(D===null){k===null&&(k=q);break}t&&k&&D.alternate===null&&e(h,k),d=o(D,d,P),A===null?L=D:A.sibling=D,A=D,k=q}if(P===m.length)return n(h,k),Y&&hn(h,P),L;if(k===null){for(;P<m.length;P++)k=p(h,m[P],E),k!==null&&(d=o(k,d,P),A===null?L=k:A.sibling=k,A=k);return Y&&hn(h,P),L}for(k=r(h,k);P<m.length;P++)q=g(k,h,P,m[P],E),q!==null&&(t&&q.alternate!==null&&k.delete(q.key===null?P:q.key),d=o(q,d,P),A===null?L=q:A.sibling=q,A=q);return t&&k.forEach(function(Ze){return e(h,Ze)}),Y&&hn(h,P),L}function _(h,d,m,E){var L=xr(m);if(typeof L!="function")throw Error(C(150));if(m=L.call(m),m==null)throw Error(C(151));for(var A=L=null,k=d,P=d=0,q=null,D=m.next();k!==null&&!D.done;P++,D=m.next()){k.index>P?(q=k,k=null):q=k.sibling;var Ze=f(h,k,D.value,E);if(Ze===null){k===null&&(k=q);break}t&&k&&Ze.alternate===null&&e(h,k),d=o(Ze,d,P),A===null?L=Ze:A.sibling=Ze,A=Ze,k=q}if(D.done)return n(h,k),Y&&hn(h,P),L;if(k===null){for(;!D.done;P++,D=m.next())D=p(h,D.value,E),D!==null&&(d=o(D,d,P),A===null?L=D:A.sibling=D,A=D);return Y&&hn(h,P),L}for(k=r(h,k);!D.done;P++,D=m.next())D=g(k,h,P,D.value,E),D!==null&&(t&&D.alternate!==null&&k.delete(D.key===null?P:D.key),d=o(D,d,P),A===null?L=D:A.sibling=D,A=D);return t&&k.forEach(function(Sr){return e(h,Sr)}),Y&&hn(h,P),L}function N(h,d,m,E){if(typeof m=="object"&&m!==null&&m.type===Bn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Di:e:{for(var L=m.key,A=d;A!==null;){if(A.key===L){if(L=m.type,L===Bn){if(A.tag===7){n(h,A.sibling),d=i(A,m.props.children),d.return=h,h=d;break e}}else if(A.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ft&&nc(L)===A.type){n(h,A.sibling),d=i(A,m.props),d.ref=$r(h,A,m),d.return=h,h=d;break e}n(h,A);break}else e(h,A);A=A.sibling}m.type===Bn?(d=xn(m.props.children,h.mode,E,m.key),d.return=h,h=d):(E=ho(m.type,m.key,m.props,null,h.mode,E),E.ref=$r(h,d,m),E.return=h,h=E)}return s(h);case jn:e:{for(A=m.key;d!==null;){if(d.key===A)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(h,d.sibling),d=i(d,m.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else e(h,d);d=d.sibling}d=Qs(m,h.mode,E),d.return=h,h=d}return s(h);case Ft:return A=m._init,N(h,d,A(m._payload),E)}if(Mr(m))return v(h,d,m,E);if(xr(m))return _(h,d,m,E);Ki(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(h,d.sibling),d=i(d,m),d.return=h,h=d):(n(h,d),d=qs(m,h.mode,E),d.return=h,h=d),s(h)):n(h,d)}return N}var ur=Ip(!0),Np=Ip(!1),Io=ln(null),No=null,Qn=null,Ra=null;function Ma(){Ra=Qn=No=null}function ba(t){var e=Io.current;W(Io),t._currentValue=e}function Dl(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function rr(t,e){No=t,Ra=Qn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ne=!0),t.firstContext=null)}function Ke(t){var e=t._currentValue;if(Ra!==t)if(t={context:t,memoizedValue:e,next:null},Qn===null){if(No===null)throw Error(C(308));Qn=t,No.dependencies={lanes:0,firstContext:t}}else Qn=Qn.next=t;return e}var wn=null;function Da(t){wn===null?wn=[t]:wn.push(t)}function Tp(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Da(e)):(n.next=i.next,i.next=n),e.interleaved=n,Nt(t,r)}function Nt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jt=!1;function za(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function At(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Nt(t,n)}return i=r.interleaved,i===null?(e.next=e,Da(r)):(e.next=i.next,i.next=e),r.interleaved=e,Nt(t,n)}function lo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ca(t,n)}}function rc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function To(t,e,n,r){var i=t.updateQueue;jt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==s&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(o!==null){var p=i.baseState;s=0,c=u=a=null,l=o;do{var f=l.lane,g=l.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,_=l;switch(f=e,g=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){p=v.call(g,p,f);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(g,p,f):v,f==null)break e;p=Z({},p,f);break e;case 2:jt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=g,a=p):c=c.next=g,s|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(a=p),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);On|=s,t.lanes=s,t.memoizedState=p}}function ic(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Pi={},vt=ln(Pi),ai=ln(Pi),ui=ln(Pi);function _n(t){if(t===Pi)throw Error(C(174));return t}function Ua(t,e){switch(H(ui,e),H(ai,t),H(vt,Pi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vl(e,t)}W(vt),H(vt,e)}function cr(){W(vt),W(ai),W(ui)}function Mp(t){_n(ui.current);var e=_n(vt.current),n=vl(e,t.type);e!==n&&(H(ai,t),H(vt,n))}function Fa(t){ai.current===t&&(W(vt),W(ai))}var Q=ln(0);function Ro(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Hs=[];function ja(){for(var t=0;t<Hs.length;t++)Hs[t]._workInProgressVersionPrimary=null;Hs.length=0}var ao=zt.ReactCurrentDispatcher,Vs=zt.ReactCurrentBatchConfig,$n=0,X=null,oe=null,ce=null,Mo=!1,Hr=!1,ci=0,hm=0;function we(){throw Error(C(321))}function Ba(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!at(t[n],e[n]))return!1;return!0}function Ha(t,e,n,r,i,o){if($n=o,X=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ao.current=t===null||t.memoizedState===null?ym:wm,t=n(r,i),Hr){o=0;do{if(Hr=!1,ci=0,25<=o)throw Error(C(301));o+=1,ce=oe=null,e.updateQueue=null,ao.current=_m,t=n(r,i)}while(Hr)}if(ao.current=bo,e=oe!==null&&oe.next!==null,$n=0,ce=oe=X=null,Mo=!1,e)throw Error(C(300));return t}function Va(){var t=ci!==0;return ci=0,t}function dt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?X.memoizedState=ce=t:ce=ce.next=t,ce}function qe(){if(oe===null){var t=X.alternate;t=t!==null?t.memoizedState:null}else t=oe.next;var e=ce===null?X.memoizedState:ce.next;if(e!==null)ce=e,oe=t;else{if(t===null)throw Error(C(310));oe=t,t={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ce===null?X.memoizedState=ce=t:ce=ce.next=t}return ce}function di(t,e){return typeof e=="function"?e(t):e}function Ws(t){var e=qe(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var c=u.lane;if(($n&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var p={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=p,s=r):a=a.next=p,X.lanes|=c,On|=c}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,at(r,e.memoizedState)||(Ne=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,X.lanes|=o,On|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gs(t){var e=qe(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);at(o,e.memoizedState)||(Ne=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function bp(){}function Dp(t,e){var n=X,r=qe(),i=e(),o=!at(r.memoizedState,i);if(o&&(r.memoizedState=i,Ne=!0),r=r.queue,Wa(Fp.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,pi(9,Up.bind(null,n,r,i,e),void 0,null),de===null)throw Error(C(349));$n&30||zp(n,e,i)}return i}function zp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=X.updateQueue,e===null?(e={lastEffect:null,stores:null},X.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Up(t,e,n,r){e.value=n,e.getSnapshot=r,jp(e)&&Bp(t)}function Fp(t,e,n){return n(function(){jp(e)&&Bp(t)})}function jp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!at(t,n)}catch{return!0}}function Bp(t){var e=Nt(t,1);e!==null&&lt(e,t,1,-1)}function oc(t){var e=dt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:di,lastRenderedState:t},e.queue=t,t=t.dispatch=vm.bind(null,X,t),[e.memoizedState,t]}function pi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=X.updateQueue,e===null?(e={lastEffect:null,stores:null},X.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Hp(){return qe().memoizedState}function uo(t,e,n,r){var i=dt();X.flags|=t,i.memoizedState=pi(1|e,n,void 0,r===void 0?null:r)}function ss(t,e,n,r){var i=qe();r=r===void 0?null:r;var o=void 0;if(oe!==null){var s=oe.memoizedState;if(o=s.destroy,r!==null&&Ba(r,s.deps)){i.memoizedState=pi(e,n,o,r);return}}X.flags|=t,i.memoizedState=pi(1|e,n,o,r)}function sc(t,e){return uo(8390656,8,t,e)}function Wa(t,e){return ss(2048,8,t,e)}function Vp(t,e){return ss(4,2,t,e)}function Wp(t,e){return ss(4,4,t,e)}function Gp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yp(t,e,n){return n=n!=null?n.concat([t]):null,ss(4,4,Gp.bind(null,e,t),n)}function Ga(){}function Kp(t,e){var n=qe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ba(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function qp(t,e){var n=qe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ba(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Qp(t,e,n){return $n&21?(at(n,e)||(n=tp(),X.lanes|=n,On|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ne=!0),t.memoizedState=n)}function gm(t,e){var n=B;B=n!==0&&4>n?n:4,t(!0);var r=Vs.transition;Vs.transition={};try{t(!1),e()}finally{B=n,Vs.transition=r}}function Xp(){return qe().memoizedState}function mm(t,e,n){var r=Zt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zp(t))Jp(e,n);else if(n=Tp(t,e,n,r),n!==null){var i=ke();lt(n,t,r,i),ef(n,e,r)}}function vm(t,e,n){var r=Zt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zp(t))Jp(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,at(l,s)){var a=e.interleaved;a===null?(i.next=i,Da(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Tp(t,e,i,r),n!==null&&(i=ke(),lt(n,t,r,i),ef(n,e,r))}}function Zp(t){var e=t.alternate;return t===X||e!==null&&e===X}function Jp(t,e){Hr=Mo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ef(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ca(t,n)}}var bo={readContext:Ke,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},ym={readContext:Ke,useCallback:function(t,e){return dt().memoizedState=[t,e===void 0?null:e],t},useContext:Ke,useEffect:sc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,uo(4194308,4,Gp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return uo(4194308,4,t,e)},useInsertionEffect:function(t,e){return uo(4,2,t,e)},useMemo:function(t,e){var n=dt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mm.bind(null,X,t),[r.memoizedState,t]},useRef:function(t){var e=dt();return t={current:t},e.memoizedState=t},useState:oc,useDebugValue:Ga,useDeferredValue:function(t){return dt().memoizedState=t},useTransition:function(){var t=oc(!1),e=t[0];return t=gm.bind(null,t[1]),dt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=X,i=dt();if(Y){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),de===null)throw Error(C(349));$n&30||zp(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,sc(Fp.bind(null,r,o,t),[t]),r.flags|=2048,pi(9,Up.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=dt(),e=de.identifierPrefix;if(Y){var n=kt,r=Lt;n=(r&~(1<<32-st(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ci++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hm++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wm={readContext:Ke,useCallback:Kp,useContext:Ke,useEffect:Wa,useImperativeHandle:Yp,useInsertionEffect:Vp,useLayoutEffect:Wp,useMemo:qp,useReducer:Ws,useRef:Hp,useState:function(){return Ws(di)},useDebugValue:Ga,useDeferredValue:function(t){var e=qe();return Qp(e,oe.memoizedState,t)},useTransition:function(){var t=Ws(di)[0],e=qe().memoizedState;return[t,e]},useMutableSource:bp,useSyncExternalStore:Dp,useId:Xp,unstable_isNewReconciler:!1},_m={readContext:Ke,useCallback:Kp,useContext:Ke,useEffect:Wa,useImperativeHandle:Yp,useInsertionEffect:Vp,useLayoutEffect:Wp,useMemo:qp,useReducer:Gs,useRef:Hp,useState:function(){return Gs(di)},useDebugValue:Ga,useDeferredValue:function(t){var e=qe();return oe===null?e.memoizedState=t:Qp(e,oe.memoizedState,t)},useTransition:function(){var t=Gs(di)[0],e=qe().memoizedState;return[t,e]},useMutableSource:bp,useSyncExternalStore:Dp,useId:Xp,unstable_isNewReconciler:!1};function tt(t,e){if(t&&t.defaultProps){e=Z({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zl(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Z({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ls={isMounted:function(t){return(t=t._reactInternals)?bn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ke(),i=Zt(t),o=At(r,i);o.payload=e,n!=null&&(o.callback=n),e=Qt(t,o,i),e!==null&&(lt(e,t,i,r),lo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ke(),i=Zt(t),o=At(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Qt(t,o,i),e!==null&&(lt(e,t,i,r),lo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ke(),r=Zt(t),i=At(n,r);i.tag=2,e!=null&&(i.callback=e),e=Qt(t,i,r),e!==null&&(lt(e,t,r,n),lo(e,t,r))}};function lc(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!ii(n,r)||!ii(i,o):!0}function tf(t,e,n){var r=!1,i=nn,o=e.contextType;return typeof o=="object"&&o!==null?o=Ke(o):(i=Re(e)?Pn:Se.current,r=e.contextTypes,o=(r=r!=null)?lr(t,i):nn),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ls,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function ac(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ls.enqueueReplaceState(e,e.state,null)}function Ul(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},za(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Ke(o):(o=Re(e)?Pn:Se.current,i.context=lr(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(zl(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ls.enqueueReplaceState(i,i.state,null),To(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function dr(t,e){try{var n="",r=e;do n+=Kh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Ys(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Fl(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Em=typeof WeakMap=="function"?WeakMap:Map;function nf(t,e,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){zo||(zo=!0,Ql=r),Fl(t,e)},n}function rf(t,e,n){n=At(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Fl(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Fl(t,e),typeof r!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function uc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Em;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Mm.bind(null,t,e,n),e.then(t,t))}function cc(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dc(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=At(-1,1),e.tag=2,Qt(n,e,1))),n.lanes|=1),t)}var Sm=zt.ReactCurrentOwner,Ne=!1;function xe(t,e,n,r){e.child=t===null?Np(e,null,n,r):ur(e,t.child,n,r)}function pc(t,e,n,r,i){n=n.render;var o=e.ref;return rr(e,i),r=Ha(t,e,n,r,o,i),n=Va(),t!==null&&!Ne?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tt(t,e,i)):(Y&&n&&Ia(e),e.flags|=1,xe(t,e,r,i),e.child)}function fc(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!eu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,of(t,e,o,r,i)):(t=ho(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ii,n(s,r)&&t.ref===e.ref)return Tt(t,e,i)}return e.flags|=1,t=Jt(o,r),t.ref=e.ref,t.return=e,e.child=t}function of(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(ii(o,r)&&t.ref===e.ref)if(Ne=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Ne=!0);else return e.lanes=t.lanes,Tt(t,e,i)}return jl(t,e,n,r,i)}function sf(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(Zn,be),be|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,H(Zn,be),be|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,H(Zn,be),be|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,H(Zn,be),be|=r;return xe(t,e,i,n),e.child}function lf(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jl(t,e,n,r,i){var o=Re(n)?Pn:Se.current;return o=lr(e,o),rr(e,i),n=Ha(t,e,n,r,o,i),r=Va(),t!==null&&!Ne?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tt(t,e,i)):(Y&&r&&Ia(e),e.flags|=1,xe(t,e,n,i),e.child)}function hc(t,e,n,r,i){if(Re(n)){var o=!0;Ao(e)}else o=!1;if(rr(e,i),e.stateNode===null)co(t,e),tf(e,n,r),Ul(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ke(u):(u=Re(n)?Pn:Se.current,u=lr(e,u));var c=n.getDerivedStateFromProps,p=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&ac(e,s,r,u),jt=!1;var f=e.memoizedState;s.state=f,To(e,r,s,i),a=e.memoizedState,l!==r||f!==a||Te.current||jt?(typeof c=="function"&&(zl(e,n,c,r),a=e.memoizedState),(l=jt||lc(e,n,l,r,f,a,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Rp(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:tt(e.type,l),s.props=u,p=e.pendingProps,f=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ke(a):(a=Re(n)?Pn:Se.current,a=lr(e,a));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||f!==a)&&ac(e,s,r,a),jt=!1,f=e.memoizedState,s.state=f,To(e,r,s,i);var v=e.memoizedState;l!==p||f!==v||Te.current||jt?(typeof g=="function"&&(zl(e,n,g,r),v=e.memoizedState),(u=jt||lc(e,n,u,r,f,v,a)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,a)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),s.props=r,s.state=v,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Bl(t,e,n,r,o,i)}function Bl(t,e,n,r,i,o){lf(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Ju(e,n,!1),Tt(t,e,o);r=e.stateNode,Sm.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=ur(e,t.child,null,o),e.child=ur(e,null,l,o)):xe(t,e,l,o),e.memoizedState=r.state,i&&Ju(e,n,!0),e.child}function af(t){var e=t.stateNode;e.pendingContext?Zu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zu(t,e.context,!1),Ua(t,e.containerInfo)}function gc(t,e,n,r,i){return ar(),Ta(i),e.flags|=256,xe(t,e,n,r),e.child}var Hl={dehydrated:null,treeContext:null,retryLane:0};function Vl(t){return{baseLanes:t,cachePool:null,transitions:null}}function uf(t,e,n){var r=e.pendingProps,i=Q.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),H(Q,i&1),t===null)return bl(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=cs(s,r,0,null),t=xn(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Vl(n),e.memoizedState=Hl,t):Ya(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Cm(t,e,s,r,l,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Jt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Jt(l,o):(o=xn(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Vl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Hl,r}return o=t.child,t=o.sibling,r=Jt(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ya(t,e){return e=cs({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qi(t,e,n,r){return r!==null&&Ta(r),ur(e,t.child,null,n),t=Ya(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Cm(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Ys(Error(C(422))),qi(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=cs({mode:"visible",children:r.children},i,0,null),o=xn(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&ur(e,t.child,null,s),e.child.memoizedState=Vl(s),e.memoizedState=Hl,o);if(!(e.mode&1))return qi(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(C(419)),r=Ys(o,r,void 0),qi(t,e,s,r)}if(l=(s&t.childLanes)!==0,Ne||l){if(r=de,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Nt(t,i),lt(r,t,i,-1))}return Ja(),r=Ys(Error(C(421))),qi(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=bm.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,De=qt(i.nextSibling),ze=e,Y=!0,ot=null,t!==null&&(Ve[We++]=Lt,Ve[We++]=kt,Ve[We++]=An,Lt=t.id,kt=t.overflow,An=e),e=Ya(e,r.children),e.flags|=4096,e)}function mc(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Dl(t.return,e,n)}function Ks(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function cf(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(xe(t,e,r.children,n),r=Q.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mc(t,n,e);else if(t.tag===19)mc(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(H(Q,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ro(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ks(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ro(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ks(e,!0,n,null,o);break;case"together":Ks(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function co(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),On|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=Jt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Jt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xm(t,e,n){switch(e.tag){case 3:af(e),ar();break;case 5:Mp(e);break;case 1:Re(e.type)&&Ao(e);break;case 4:Ua(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;H(Io,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(H(Q,Q.current&1),e.flags|=128,null):n&e.child.childLanes?uf(t,e,n):(H(Q,Q.current&1),t=Tt(t,e,n),t!==null?t.sibling:null);H(Q,Q.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return cf(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(Q,Q.current),r)break;return null;case 22:case 23:return e.lanes=0,sf(t,e,n)}return Tt(t,e,n)}var df,Wl,pf,ff;df=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wl=function(){};pf=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,_n(vt.current);var o=null;switch(n){case"input":i=fl(t,i),r=fl(t,r),o=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),o=[];break;case"textarea":i=ml(t,i),r=ml(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ko)}yl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&V("scroll",t),o||l===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};ff=function(t,e,n,r){n!==r&&(e.flags|=4)};function Or(t,e){if(!Y)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Lm(t,e,n){var r=e.pendingProps;switch(Na(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(e),null;case 1:return Re(e.type)&&Po(),_e(e),null;case 3:return r=e.stateNode,cr(),W(Te),W(Se),ja(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Yi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ot!==null&&(Jl(ot),ot=null))),Wl(t,e),_e(e),null;case 5:Fa(e);var i=_n(ui.current);if(n=e.type,t!==null&&e.stateNode!=null)pf(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return _e(e),null}if(t=_n(vt.current),Yi(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[ht]=e,r[li]=o,t=(e.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Dr.length;i++)V(Dr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Lu(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":Pu(r,o),V("invalid",r)}yl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Gi(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Gi(r.textContent,l,t),i=["children",""+l]):Xr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":zi(r),ku(r,o,!0);break;case"textarea":zi(r),Au(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ko)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fd(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[ht]=e,t[li]=r,df(t,e,!1,!1),e.stateNode=t;e:{switch(s=wl(n,r),n){case"dialog":V("cancel",t),V("close",t),i=r;break;case"iframe":case"object":case"embed":V("load",t),i=r;break;case"video":case"audio":for(i=0;i<Dr.length;i++)V(Dr[i],t);i=r;break;case"source":V("error",t),i=r;break;case"img":case"image":case"link":V("error",t),V("load",t),i=r;break;case"details":V("toggle",t),i=r;break;case"input":Lu(t,r),i=fl(t,r),V("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),V("invalid",t);break;case"textarea":Pu(t,r),i=ml(t,r),V("invalid",t);break;default:i=r}yl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?Hd(t,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&jd(t,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Zr(t,a):typeof a=="number"&&Zr(t,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&V("scroll",t):a!=null&&va(t,o,a,s))}switch(n){case"input":zi(t),ku(t,r,!1);break;case"textarea":zi(t),Au(t);break;case"option":r.value!=null&&t.setAttribute("value",""+tn(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Jn(t,!!r.multiple,o,!1):r.defaultValue!=null&&Jn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ko)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _e(e),null;case 6:if(t&&e.stateNode!=null)ff(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=_n(ui.current),_n(vt.current),Yi(e)){if(r=e.stateNode,n=e.memoizedProps,r[ht]=e,(o=r.nodeValue!==n)&&(t=ze,t!==null))switch(t.tag){case 3:Gi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Gi(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=e,e.stateNode=r}return _e(e),null;case 13:if(W(Q),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Y&&De!==null&&e.mode&1&&!(e.flags&128))Op(),ar(),e.flags|=98560,o=!1;else if(o=Yi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(C(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[ht]=e}else ar(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_e(e),o=!1}else ot!==null&&(Jl(ot),ot=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Q.current&1?le===0&&(le=3):Ja())),e.updateQueue!==null&&(e.flags|=4),_e(e),null);case 4:return cr(),Wl(t,e),t===null&&oi(e.stateNode.containerInfo),_e(e),null;case 10:return ba(e.type._context),_e(e),null;case 17:return Re(e.type)&&Po(),_e(e),null;case 19:if(W(Q),o=e.memoizedState,o===null)return _e(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Or(o,!1);else{if(le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Ro(t),s!==null){for(e.flags|=128,Or(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return H(Q,Q.current&1|2),e.child}t=t.sibling}o.tail!==null&&re()>pr&&(e.flags|=128,r=!0,Or(o,!1),e.lanes=4194304)}else{if(!r)if(t=Ro(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Or(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Y)return _e(e),null}else 2*re()-o.renderingStartTime>pr&&n!==1073741824&&(e.flags|=128,r=!0,Or(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=re(),e.sibling=null,n=Q.current,H(Q,r?n&1|2:n&1),e):(_e(e),null);case 22:case 23:return Za(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?be&1073741824&&(_e(e),e.subtreeFlags&6&&(e.flags|=8192)):_e(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function km(t,e){switch(Na(e),e.tag){case 1:return Re(e.type)&&Po(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return cr(),W(Te),W(Se),ja(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Fa(e),null;case 13:if(W(Q),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));ar()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return W(Q),null;case 4:return cr(),null;case 10:return ba(e.type._context),null;case 22:case 23:return Za(),null;case 24:return null;default:return null}}var Qi=!1,Ee=!1,Pm=typeof WeakSet=="function"?WeakSet:Set,$=null;function Xn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(t,e,r)}else n.current=null}function Gl(t,e,n){try{n()}catch(r){J(t,e,r)}}var vc=!1;function Am(t,e){if($l=Co,t=vp(),Oa(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,c=0,p=t,f=null;t:for(;;){for(var g;p!==n||i!==0&&p.nodeType!==3||(l=s+i),p!==o||r!==0&&p.nodeType!==3||(a=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)f=p,p=g;for(;;){if(p===t)break t;if(f===n&&++u===i&&(l=s),f===o&&++c===r&&(a=s),(g=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ol={focusedElem:t,selectionRange:n},Co=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,N=v.memoizedState,h=e.stateNode,d=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:tt(e.type,_),N);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(E){J(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return v=vc,vc=!1,v}function Vr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Gl(e,n,o)}i=i.next}while(i!==r)}}function as(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Yl(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function hf(t){var e=t.alternate;e!==null&&(t.alternate=null,hf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ht],delete e[li],delete e[Tl],delete e[cm],delete e[dm])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gf(t){return t.tag===5||t.tag===3||t.tag===4}function yc(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ko));else if(r!==4&&(t=t.child,t!==null))for(Kl(t,e,n),t=t.sibling;t!==null;)Kl(t,e,n),t=t.sibling}function ql(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ql(t,e,n),t=t.sibling;t!==null;)ql(t,e,n),t=t.sibling}var he=null,nt=!1;function Ut(t,e,n){for(n=n.child;n!==null;)mf(t,e,n),n=n.sibling}function mf(t,e,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(es,n)}catch{}switch(n.tag){case 5:Ee||Xn(n,e);case 6:var r=he,i=nt;he=null,Ut(t,e,n),he=r,nt=i,he!==null&&(nt?(t=he,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(nt?(t=he,n=n.stateNode,t.nodeType===8?js(t.parentNode,n):t.nodeType===1&&js(t,n),ni(t)):js(he,n.stateNode));break;case 4:r=he,i=nt,he=n.stateNode.containerInfo,nt=!0,Ut(t,e,n),he=r,nt=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Gl(n,e,s),i=i.next}while(i!==r)}Ut(t,e,n);break;case 1:if(!Ee&&(Xn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){J(n,e,l)}Ut(t,e,n);break;case 21:Ut(t,e,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Ut(t,e,n),Ee=r):Ut(t,e,n);break;default:Ut(t,e,n)}}function wc(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Pm),e.forEach(function(r){var i=Dm.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Je(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:he=l.stateNode,nt=!1;break e;case 3:he=l.stateNode.containerInfo,nt=!0;break e;case 4:he=l.stateNode.containerInfo,nt=!0;break e}l=l.return}if(he===null)throw Error(C(160));mf(o,s,i),he=null,nt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){J(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vf(e,t),e=e.sibling}function vf(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Je(e,t),ct(t),r&4){try{Vr(3,t,t.return),as(3,t)}catch(_){J(t,t.return,_)}try{Vr(5,t,t.return)}catch(_){J(t,t.return,_)}}break;case 1:Je(e,t),ct(t),r&512&&n!==null&&Xn(n,n.return);break;case 5:if(Je(e,t),ct(t),r&512&&n!==null&&Xn(n,n.return),t.flags&32){var i=t.stateNode;try{Zr(i,"")}catch(_){J(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&zd(i,o),wl(l,s);var u=wl(l,o);for(s=0;s<a.length;s+=2){var c=a[s],p=a[s+1];c==="style"?Hd(i,p):c==="dangerouslySetInnerHTML"?jd(i,p):c==="children"?Zr(i,p):va(i,c,p,u)}switch(l){case"input":hl(i,o);break;case"textarea":Ud(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Jn(i,!!o.multiple,g,!1):f!==!!o.multiple&&(o.defaultValue!=null?Jn(i,!!o.multiple,o.defaultValue,!0):Jn(i,!!o.multiple,o.multiple?[]:"",!1))}i[li]=o}catch(_){J(t,t.return,_)}}break;case 6:if(Je(e,t),ct(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(_){J(t,t.return,_)}}break;case 3:if(Je(e,t),ct(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ni(e.containerInfo)}catch(_){J(t,t.return,_)}break;case 4:Je(e,t),ct(t);break;case 13:Je(e,t),ct(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Qa=re())),r&4&&wc(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ee=(u=Ee)||c,Je(e,t),Ee=u):Je(e,t),ct(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for($=t,c=t.child;c!==null;){for(p=$=c;$!==null;){switch(f=$,g=f.child,f.tag){case 0:case 11:case 14:case 15:Vr(4,f,f.return);break;case 1:Xn(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){J(r,n,_)}}break;case 5:Xn(f,f.return);break;case 22:if(f.memoizedState!==null){Ec(p);continue}}g!==null?(g.return=f,$=g):Ec(p)}c=c.sibling}e:for(c=null,p=t;;){if(p.tag===5){if(c===null){c=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,a=p.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Bd("display",s))}catch(_){J(t,t.return,_)}}}else if(p.tag===6){if(c===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(_){J(t,t.return,_)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Je(e,t),ct(t),r&4&&wc(t);break;case 21:break;default:Je(e,t),ct(t)}}function ct(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gf(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zr(i,""),r.flags&=-33);var o=yc(t);ql(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=yc(t);Kl(t,l,s);break;default:throw Error(C(161))}}catch(a){J(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $m(t,e,n){$=t,yf(t)}function yf(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Qi;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ee;l=Qi;var u=Ee;if(Qi=s,(Ee=a)&&!u)for($=i;$!==null;)s=$,a=s.child,s.tag===22&&s.memoizedState!==null?Sc(i):a!==null?(a.return=s,$=a):Sc(i);for(;o!==null;)$=o,yf(o),o=o.sibling;$=i,Qi=l,Ee=u}_c(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,$=o):_c(t)}}function _c(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ee||as(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&ic(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ic(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var p=c.dehydrated;p!==null&&ni(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ee||e.flags&512&&Yl(e)}catch(f){J(e,e.return,f)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Ec(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Sc(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{as(4,e)}catch(a){J(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){J(e,i,a)}}var o=e.return;try{Yl(e)}catch(a){J(e,o,a)}break;case 5:var s=e.return;try{Yl(e)}catch(a){J(e,s,a)}}}catch(a){J(e,e.return,a)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var Om=Math.ceil,Do=zt.ReactCurrentDispatcher,Ka=zt.ReactCurrentOwner,Ye=zt.ReactCurrentBatchConfig,F=0,de=null,ie=null,me=0,be=0,Zn=ln(0),le=0,fi=null,On=0,us=0,qa=0,Wr=null,Ie=null,Qa=0,pr=1/0,Et=null,zo=!1,Ql=null,Xt=null,Xi=!1,Wt=null,Uo=0,Gr=0,Xl=null,po=-1,fo=0;function ke(){return F&6?re():po!==-1?po:po=re()}function Zt(t){return t.mode&1?F&2&&me!==0?me&-me:fm.transition!==null?(fo===0&&(fo=tp()),fo):(t=B,t!==0||(t=window.event,t=t===void 0?16:ap(t.type)),t):1}function lt(t,e,n,r){if(50<Gr)throw Gr=0,Xl=null,Error(C(185));xi(t,n,r),(!(F&2)||t!==de)&&(t===de&&(!(F&2)&&(us|=n),le===4&&Ht(t,me)),Me(t,r),n===1&&F===0&&!(e.mode&1)&&(pr=re()+500,os&&an()))}function Me(t,e){var n=t.callbackNode;fg(t,e);var r=So(t,t===de?me:0);if(r===0)n!==null&&Iu(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Iu(n),e===1)t.tag===0?pm(Cc.bind(null,t)):Pp(Cc.bind(null,t)),am(function(){!(F&6)&&an()}),n=null;else{switch(np(r)){case 1:n=Sa;break;case 4:n=Jd;break;case 16:n=Eo;break;case 536870912:n=ep;break;default:n=Eo}n=kf(n,wf.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wf(t,e){if(po=-1,fo=0,F&6)throw Error(C(327));var n=t.callbackNode;if(ir()&&t.callbackNode!==n)return null;var r=So(t,t===de?me:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fo(t,r);else{e=r;var i=F;F|=2;var o=Ef();(de!==t||me!==e)&&(Et=null,pr=re()+500,Cn(t,e));do try{Tm();break}catch(l){_f(t,l)}while(!0);Ma(),Do.current=o,F=i,ie!==null?e=0:(de=null,me=0,e=le)}if(e!==0){if(e===2&&(i=xl(t),i!==0&&(r=i,e=Zl(t,i))),e===1)throw n=fi,Cn(t,0),Ht(t,r),Me(t,re()),n;if(e===6)Ht(t,r);else{if(i=t.current.alternate,!(r&30)&&!Im(i)&&(e=Fo(t,r),e===2&&(o=xl(t),o!==0&&(r=o,e=Zl(t,o))),e===1))throw n=fi,Cn(t,0),Ht(t,r),Me(t,re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:gn(t,Ie,Et);break;case 3:if(Ht(t,r),(r&130023424)===r&&(e=Qa+500-re(),10<e)){if(So(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ke(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Nl(gn.bind(null,t,Ie,Et),e);break}gn(t,Ie,Et);break;case 4:if(Ht(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-st(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Om(r/1960))-r,10<r){t.timeoutHandle=Nl(gn.bind(null,t,Ie,Et),r);break}gn(t,Ie,Et);break;case 5:gn(t,Ie,Et);break;default:throw Error(C(329))}}}return Me(t,re()),t.callbackNode===n?wf.bind(null,t):null}function Zl(t,e){var n=Wr;return t.current.memoizedState.isDehydrated&&(Cn(t,e).flags|=256),t=Fo(t,e),t!==2&&(e=Ie,Ie=n,e!==null&&Jl(e)),t}function Jl(t){Ie===null?Ie=t:Ie.push.apply(Ie,t)}function Im(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!at(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ht(t,e){for(e&=~qa,e&=~us,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-st(e),r=1<<n;t[n]=-1,e&=~r}}function Cc(t){if(F&6)throw Error(C(327));ir();var e=So(t,0);if(!(e&1))return Me(t,re()),null;var n=Fo(t,e);if(t.tag!==0&&n===2){var r=xl(t);r!==0&&(e=r,n=Zl(t,r))}if(n===1)throw n=fi,Cn(t,0),Ht(t,e),Me(t,re()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gn(t,Ie,Et),Me(t,re()),null}function Xa(t,e){var n=F;F|=1;try{return t(e)}finally{F=n,F===0&&(pr=re()+500,os&&an())}}function In(t){Wt!==null&&Wt.tag===0&&!(F&6)&&ir();var e=F;F|=1;var n=Ye.transition,r=B;try{if(Ye.transition=null,B=1,t)return t()}finally{B=r,Ye.transition=n,F=e,!(F&6)&&an()}}function Za(){be=Zn.current,W(Zn)}function Cn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lm(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Na(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Po();break;case 3:cr(),W(Te),W(Se),ja();break;case 5:Fa(r);break;case 4:cr();break;case 13:W(Q);break;case 19:W(Q);break;case 10:ba(r.type._context);break;case 22:case 23:Za()}n=n.return}if(de=t,ie=t=Jt(t.current,null),me=be=e,le=0,fi=null,qa=us=On=0,Ie=Wr=null,wn!==null){for(e=0;e<wn.length;e++)if(n=wn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}wn=null}return t}function _f(t,e){do{var n=ie;try{if(Ma(),ao.current=bo,Mo){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Mo=!1}if($n=0,ce=oe=X=null,Hr=!1,ci=0,Ka.current=null,n===null||n.return===null){le=1,fi=e,ie=null;break}e:{var o=t,s=n.return,l=n,a=e;if(e=me,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,p=c.tag;if(!(c.mode&1)&&(p===0||p===11||p===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=cc(s);if(g!==null){g.flags&=-257,dc(g,s,l,o,e),g.mode&1&&uc(o,u,e),e=g,a=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(a),e.updateQueue=_}else v.add(a);break e}else{if(!(e&1)){uc(o,u,e),Ja();break e}a=Error(C(426))}}else if(Y&&l.mode&1){var N=cc(s);if(N!==null){!(N.flags&65536)&&(N.flags|=256),dc(N,s,l,o,e),Ta(dr(a,l));break e}}o=a=dr(a,l),le!==4&&(le=2),Wr===null?Wr=[o]:Wr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=nf(o,a,e);rc(o,h);break e;case 1:l=a;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Xt===null||!Xt.has(m)))){o.flags|=65536,e&=-e,o.lanes|=e;var E=rf(o,l,e);rc(o,E);break e}}o=o.return}while(o!==null)}Cf(n)}catch(L){e=L,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function Ef(){var t=Do.current;return Do.current=bo,t===null?bo:t}function Ja(){(le===0||le===3||le===2)&&(le=4),de===null||!(On&268435455)&&!(us&268435455)||Ht(de,me)}function Fo(t,e){var n=F;F|=2;var r=Ef();(de!==t||me!==e)&&(Et=null,Cn(t,e));do try{Nm();break}catch(i){_f(t,i)}while(!0);if(Ma(),F=n,Do.current=r,ie!==null)throw Error(C(261));return de=null,me=0,le}function Nm(){for(;ie!==null;)Sf(ie)}function Tm(){for(;ie!==null&&!ig();)Sf(ie)}function Sf(t){var e=Lf(t.alternate,t,be);t.memoizedProps=t.pendingProps,e===null?Cf(t):ie=e,Ka.current=null}function Cf(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=km(n,e),n!==null){n.flags&=32767,ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{le=6,ie=null;return}}else if(n=Lm(n,e,be),n!==null){ie=n;return}if(e=e.sibling,e!==null){ie=e;return}ie=e=t}while(e!==null);le===0&&(le=5)}function gn(t,e,n){var r=B,i=Ye.transition;try{Ye.transition=null,B=1,Rm(t,e,n,r)}finally{Ye.transition=i,B=r}return null}function Rm(t,e,n,r){do ir();while(Wt!==null);if(F&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(hg(t,o),t===de&&(ie=de=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xi||(Xi=!0,kf(Eo,function(){return ir(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ye.transition,Ye.transition=null;var s=B;B=1;var l=F;F|=4,Ka.current=null,Am(t,n),vf(n,t),em(Ol),Co=!!$l,Ol=$l=null,t.current=n,$m(n),og(),F=l,B=s,Ye.transition=o}else t.current=n;if(Xi&&(Xi=!1,Wt=t,Uo=i),o=t.pendingLanes,o===0&&(Xt=null),ag(n.stateNode),Me(t,re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zo)throw zo=!1,t=Ql,Ql=null,t;return Uo&1&&t.tag!==0&&ir(),o=t.pendingLanes,o&1?t===Xl?Gr++:(Gr=0,Xl=t):Gr=0,an(),null}function ir(){if(Wt!==null){var t=np(Uo),e=Ye.transition,n=B;try{if(Ye.transition=null,B=16>t?16:t,Wt===null)var r=!1;else{if(t=Wt,Wt=null,Uo=0,F&6)throw Error(C(331));var i=F;for(F|=4,$=t.current;$!==null;){var o=$,s=o.child;if($.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:Vr(8,c,o)}var p=c.child;if(p!==null)p.return=c,$=p;else for(;$!==null;){c=$;var f=c.sibling,g=c.return;if(hf(c),c===u){$=null;break}if(f!==null){f.return=g,$=f;break}$=g}}}var v=o.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var N=_.sibling;_.sibling=null,_=N}while(_!==null)}}$=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,$=s;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,$=h;break e}$=o.return}}var d=t.current;for($=d;$!==null;){s=$;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,$=m;else e:for(s=d;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:as(9,l)}}catch(L){J(l,l.return,L)}if(l===s){$=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,$=E;break e}$=l.return}}if(F=i,an(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(es,t)}catch{}r=!0}return r}finally{B=n,Ye.transition=e}}return!1}function xc(t,e,n){e=dr(n,e),e=nf(t,e,1),t=Qt(t,e,1),e=ke(),t!==null&&(xi(t,1,e),Me(t,e))}function J(t,e,n){if(t.tag===3)xc(t,t,n);else for(;e!==null;){if(e.tag===3){xc(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r))){t=dr(n,t),t=rf(e,t,1),e=Qt(e,t,1),t=ke(),e!==null&&(xi(e,1,t),Me(e,t));break}}e=e.return}}function Mm(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ke(),t.pingedLanes|=t.suspendedLanes&n,de===t&&(me&n)===n&&(le===4||le===3&&(me&130023424)===me&&500>re()-Qa?Cn(t,0):qa|=n),Me(t,e)}function xf(t,e){e===0&&(t.mode&1?(e=ji,ji<<=1,!(ji&130023424)&&(ji=4194304)):e=1);var n=ke();t=Nt(t,e),t!==null&&(xi(t,e,n),Me(t,n))}function bm(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xf(t,n)}function Dm(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),xf(t,n)}var Lf;Lf=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Te.current)Ne=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ne=!1,xm(t,e,n);Ne=!!(t.flags&131072)}else Ne=!1,Y&&e.flags&1048576&&Ap(e,Oo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;co(t,e),t=e.pendingProps;var i=lr(e,Se.current);rr(e,n),i=Ha(null,e,r,t,i,n);var o=Va();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Re(r)?(o=!0,Ao(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,za(e),i.updater=ls,e.stateNode=i,i._reactInternals=e,Ul(e,r,t,n),e=Bl(null,e,r,!0,o,n)):(e.tag=0,Y&&o&&Ia(e),xe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(co(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Um(r),t=tt(r,t),i){case 0:e=jl(null,e,r,t,n);break e;case 1:e=hc(null,e,r,t,n);break e;case 11:e=pc(null,e,r,t,n);break e;case 14:e=fc(null,e,r,tt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),jl(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),hc(t,e,r,i,n);case 3:e:{if(af(e),t===null)throw Error(C(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Rp(t,e),To(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=dr(Error(C(423)),e),e=gc(t,e,r,n,i);break e}else if(r!==i){i=dr(Error(C(424)),e),e=gc(t,e,r,n,i);break e}else for(De=qt(e.stateNode.containerInfo.firstChild),ze=e,Y=!0,ot=null,n=Np(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===i){e=Tt(t,e,n);break e}xe(t,e,r,n)}e=e.child}return e;case 5:return Mp(e),t===null&&bl(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Il(r,i)?s=null:o!==null&&Il(r,o)&&(e.flags|=32),lf(t,e),xe(t,e,s,n),e.child;case 6:return t===null&&bl(e),null;case 13:return uf(t,e,n);case 4:return Ua(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ur(e,null,r,n):xe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),pc(t,e,r,i,n);case 7:return xe(t,e,e.pendingProps,n),e.child;case 8:return xe(t,e,e.pendingProps.children,n),e.child;case 12:return xe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,H(Io,r._currentValue),r._currentValue=s,o!==null)if(at(o.value,s)){if(o.children===i.children&&!Te.current){e=Tt(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=At(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Dl(o.return,n,e),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(C(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Dl(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}xe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,rr(e,n),i=Ke(i),r=r(i),e.flags|=1,xe(t,e,r,n),e.child;case 14:return r=e.type,i=tt(r,e.pendingProps),i=tt(r.type,i),fc(t,e,r,i,n);case 15:return of(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),co(t,e),e.tag=1,Re(r)?(t=!0,Ao(e)):t=!1,rr(e,n),tf(e,r,i),Ul(e,r,i,n),Bl(null,e,r,!0,t,n);case 19:return cf(t,e,n);case 22:return sf(t,e,n)}throw Error(C(156,e.tag))};function kf(t,e){return Zd(t,e)}function zm(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(t,e,n,r){return new zm(t,e,n,r)}function eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Um(t){if(typeof t=="function")return eu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wa)return 11;if(t===_a)return 14}return 2}function Jt(t,e){var n=t.alternate;return n===null?(n=Ge(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ho(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")eu(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Bn:return xn(n.children,i,o,e);case ya:s=8,i|=8;break;case ul:return t=Ge(12,n,e,i|2),t.elementType=ul,t.lanes=o,t;case cl:return t=Ge(13,n,e,i),t.elementType=cl,t.lanes=o,t;case dl:return t=Ge(19,n,e,i),t.elementType=dl,t.lanes=o,t;case Md:return cs(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Td:s=10;break e;case Rd:s=9;break e;case wa:s=11;break e;case _a:s=14;break e;case Ft:s=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=Ge(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function xn(t,e,n,r){return t=Ge(7,t,r,e),t.lanes=n,t}function cs(t,e,n,r){return t=Ge(22,t,r,e),t.elementType=Md,t.lanes=n,t.stateNode={isHidden:!1},t}function qs(t,e,n){return t=Ge(6,t,null,e),t.lanes=n,t}function Qs(t,e,n){return e=Ge(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Fm(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Os(0),this.expirationTimes=Os(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Os(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tu(t,e,n,r,i,o,s,l,a){return t=new Fm(t,e,n,l,a),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ge(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},za(o),t}function jm(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Pf(t){if(!t)return nn;t=t._reactInternals;e:{if(bn(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Re(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(Re(n))return kp(t,n,e)}return e}function Af(t,e,n,r,i,o,s,l,a){return t=tu(n,r,!0,t,i,o,s,l,a),t.context=Pf(null),n=t.current,r=ke(),i=Zt(n),o=At(r,i),o.callback=e!=null?e:null,Qt(n,o,i),t.current.lanes=i,xi(t,i,r),Me(t,r),t}function ds(t,e,n,r){var i=e.current,o=ke(),s=Zt(i);return n=Pf(n),e.context===null?e.context=n:e.pendingContext=n,e=At(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Qt(i,e,s),t!==null&&(lt(t,i,s,o),lo(t,i,s)),s}function jo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nu(t,e){Lc(t,e),(t=t.alternate)&&Lc(t,e)}function Bm(){return null}var $f=typeof reportError=="function"?reportError:function(t){console.error(t)};function ru(t){this._internalRoot=t}ps.prototype.render=ru.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));ds(t,e,null,null)};ps.prototype.unmount=ru.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;In(function(){ds(null,t,null,null)}),e[It]=null}};function ps(t){this._internalRoot=t}ps.prototype.unstable_scheduleHydration=function(t){if(t){var e=op();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bt.length&&e!==0&&e<Bt[n].priority;n++);Bt.splice(n,0,t),n===0&&lp(t)}};function iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kc(){}function Hm(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=jo(s);o.call(u)}}var s=Af(e,r,t,0,null,!1,!1,"",kc);return t._reactRootContainer=s,t[It]=s.current,oi(t.nodeType===8?t.parentNode:t),In(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=jo(a);l.call(u)}}var a=tu(t,0,!1,null,null,!1,!1,"",kc);return t._reactRootContainer=a,t[It]=a.current,oi(t.nodeType===8?t.parentNode:t),In(function(){ds(e,a,n,r)}),a}function hs(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=jo(s);l.call(a)}}ds(e,s,t,i)}else s=Hm(n,e,t,i,r);return jo(s)}rp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=br(e.pendingLanes);n!==0&&(Ca(e,n|1),Me(e,re()),!(F&6)&&(pr=re()+500,an()))}break;case 13:In(function(){var r=Nt(t,1);if(r!==null){var i=ke();lt(r,t,1,i)}}),nu(t,1)}};xa=function(t){if(t.tag===13){var e=Nt(t,134217728);if(e!==null){var n=ke();lt(e,t,134217728,n)}nu(t,134217728)}};ip=function(t){if(t.tag===13){var e=Zt(t),n=Nt(t,e);if(n!==null){var r=ke();lt(n,t,e,r)}nu(t,e)}};op=function(){return B};sp=function(t,e){var n=B;try{return B=t,e()}finally{B=n}};El=function(t,e,n){switch(e){case"input":if(hl(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=is(r);if(!i)throw Error(C(90));Dd(r),hl(r,i)}}}break;case"textarea":Ud(t,n);break;case"select":e=n.value,e!=null&&Jn(t,!!n.multiple,e,!1)}};Gd=Xa;Yd=In;var Vm={usingClientEntryPoint:!1,Events:[ki,Gn,is,Vd,Wd,Xa]},Ir={findFiberByHostInstance:yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wm={bundleType:Ir.bundleType,version:Ir.version,rendererPackageName:Ir.rendererPackageName,rendererConfig:Ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qd(t),t===null?null:t.stateNode},findFiberByHostInstance:Ir.findFiberByHostInstance||Bm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Zi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zi.isDisabled&&Zi.supportsFiber)try{es=Zi.inject(Wm),mt=Zi}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vm;Be.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!iu(e))throw Error(C(200));return jm(t,e,null,n)};Be.createRoot=function(t,e){if(!iu(t))throw Error(C(299));var n=!1,r="",i=$f;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=tu(t,1,!1,null,null,n,!1,r,i),t[It]=e.current,oi(t.nodeType===8?t.parentNode:t),new ru(e)};Be.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=Qd(e),t=t===null?null:t.stateNode,t};Be.flushSync=function(t){return In(t)};Be.hydrate=function(t,e,n){if(!fs(e))throw Error(C(200));return hs(null,t,e,!0,n)};Be.hydrateRoot=function(t,e,n){if(!iu(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=$f;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Af(e,null,t,1,n!=null?n:null,i,!1,o,s),t[It]=e.current,oi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ps(e)};Be.render=function(t,e,n){if(!fs(e))throw Error(C(200));return hs(null,t,e,!1,n)};Be.unmountComponentAtNode=function(t){if(!fs(t))throw Error(C(40));return t._reactRootContainer?(In(function(){hs(null,null,t,!1,function(){t._reactRootContainer=null,t[It]=null})}),!0):!1};Be.unstable_batchedUpdates=Xa;Be.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!fs(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return hs(t,e,n,!1,r)};Be.version="18.3.1-next-f1338f8080-20240426";function Of(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Of)}catch(t){console.error(t)}}Of(),$d.exports=Be;var ou=$d.exports,Pc=ou;ll.createRoot=Pc.createRoot,ll.hydrateRoot=Pc.hydrateRoot;var Gm=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var r,i,o;if(Array.isArray(e)){if(r=e.length,r!=n.length)return!1;for(i=r;i--!==0;)if(!t(e[i],n[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(o=Object.keys(e),r=o.length,r!==Object.keys(n).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1;for(i=r;i--!==0;){var s=o[i];if(!t(e[s],n[s]))return!1}return!0}return e!==e&&n!==n};const Ym=wd(Gm);function Km(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function qm(t){var e=Km(t,"string");return typeof e=="symbol"?e:String(e)}function yt(){return yt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yt.apply(this,arguments)}function Ai(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const Ct={NOT_LOADED:"NOT_LOADED",LOADING:"LOADING",LOADED:"LOADED",FAILED:"FAILED",AUTH_FAILURE:"AUTH_FAILURE"},Qm="https://maps.googleapis.com/maps/api/js";class hi{static async load(e,n){var r;const i=e.libraries?e.libraries.split(","):[],o=this.serializeParams(e);this.listeners.push(n),(r=window.google)!=null&&(r=r.maps)!=null&&r.importLibrary?(this.serializedApiParams||(this.loadingStatus=Ct.LOADED),this.notifyLoadingStatusListeners()):(this.serializedApiParams=o,this.initImportLibrary(e)),this.serializedApiParams&&this.serializedApiParams!==o&&console.warn("[google-maps-api-loader] The maps API has already been loaded with different parameters and will not be loaded again. Refresh the page for new values to have effect.");const s=["maps",...i];await Promise.all(s.map(l=>google.maps.importLibrary(l)))}static serializeParams(e){return[e.v,e.key,e.language,e.region,e.authReferrerPolicy,e.solutionChannel].join("/")}static initImportLibrary(e){if(window.google||(window.google={}),window.google.maps||(window.google.maps={}),window.google.maps.importLibrary){console.error("[google-maps-api-loader-internal]: initImportLibrary must only be called once");return}let n=null;const r=()=>n||(n=new Promise((i,o)=>{var s;const l=document.createElement("script"),a=new URLSearchParams;for(const[u,c]of Object.entries(e)){const p=u.replace(/[A-Z]/g,f=>"_"+f[0].toLowerCase());a.set(p,c)}a.set("loading","async"),a.set("callback","__googleMapsCallback__"),l.async=!0,l.src=Qm+"?"+a.toString(),l.nonce=((s=document.querySelector("script[nonce]"))==null?void 0:s.nonce)||"",l.onerror=()=>{this.loadingStatus=Ct.FAILED,this.notifyLoadingStatusListeners(),o(new Error("The Google Maps JavaScript API could not load."))},window.__googleMapsCallback__=()=>{this.loadingStatus=Ct.LOADED,this.notifyLoadingStatusListeners(),i()},window.gm_authFailure=()=>{this.loadingStatus=Ct.AUTH_FAILURE,this.notifyLoadingStatusListeners()},this.loadingStatus=Ct.LOADING,this.notifyLoadingStatusListeners(),document.head.append(l)}),n);google.maps.importLibrary=i=>r().then(()=>google.maps.importLibrary(i))}static notifyLoadingStatusListeners(){for(const e of this.listeners)e(this.loadingStatus)}}hi.loadingStatus=Ct.NOT_LOADED;hi.serializedApiParams=void 0;hi.listeners=[];const Xm=["onLoad","apiKey","version","libraries"],Zm=["children"],Jm="GMP_VISGL_react",$i=M.createContext(null);function ev(){const[t,e]=I.useState({});return{mapInstances:t,addMapInstance:(o,s="default")=>{e(l=>yt({},l,{[s]:o}))},removeMapInstance:(o="default")=>{e(s=>Ai(s,[o].map(qm)))},clearMapInstances:()=>{e({})}}}function tv(t){const{onLoad:e,apiKey:n,version:r,libraries:i=[]}=t,o=Ai(t,Xm),[s,l]=I.useState(hi.loadingStatus),[a,u]=I.useReducer((g,v)=>yt({},g,{[v.name]:v.value}),{}),c=I.useMemo(()=>i==null?void 0:i.join(","),[i]),p=I.useMemo(()=>JSON.stringify(yt({apiKey:n,version:r},o)),[n,r,o]),f=I.useCallback(async g=>{var v;if(a[g])return a[g];if(!((v=google)!=null&&(v=v.maps)!=null&&v.importLibrary))throw new Error("[api-provider-internal] importLibrary was called before google.maps.importLibrary was defined.");const _=await window.google.maps.importLibrary(g);return u({name:g,value:_}),_},[a]);return I.useEffect(()=>{(async()=>{try{const g=yt({key:n},o);r&&(g.v=r),(c==null?void 0:c.length)>0&&(g.libraries=c),g.solutionChannel===void 0?g.solutionChannel=Jm:g.solutionChannel===""&&delete g.solutionChannel,await hi.load(g,v=>l(v));for(const v of["core","maps",...i])await f(v);e&&e()}catch(g){console.error("<ApiProvider> failed to load the Google Maps JavaScript API",g)}})()},[n,c,p]),{status:s,loadedLibraries:a,importLibrary:f}}const nv=t=>{const{children:e}=t,n=Ai(t,Zm),{mapInstances:r,addMapInstance:i,removeMapInstance:o,clearMapInstances:s}=ev(),{status:l,loadedLibraries:a,importLibrary:u}=tv(n),c=I.useMemo(()=>({mapInstances:r,addMapInstance:i,removeMapInstance:o,clearMapInstances:s,status:l,loadedLibraries:a,importLibrary:u}),[r,i,o,s,l,a,u]);return M.createElement($i.Provider,{value:c},e)};function rv(t,e){for(const n of lv){const r=e[n],i=If[n];I.useEffect(()=>{if(!t||!r)return;const o=google.maps.event.addListener(t,i,s=>{r(iv(i,t,s))});return()=>o.remove()},[t,i,r])}}function iv(t,e,n){const r={type:t,map:e,detail:{},stoppable:!1,stop:()=>{}};if(ov.includes(t)){const o=r,s=e.getCenter(),l=e.getZoom(),a=e.getHeading()||0,u=e.getTilt()||0,c=e.getBounds();return(!s||!c||!Number.isFinite(l))&&console.warn("[createEvent] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),o.detail={center:(s==null?void 0:s.toJSON())||{lat:0,lng:0},zoom:l||0,heading:a,tilt:u,bounds:(c==null?void 0:c.toJSON())||{north:90,east:180,south:-90,west:-180}},o}else if(sv.includes(t)){var i;if(!n)throw new Error("[createEvent] mouse events must provide a srcEvent");const o=r;return o.domEvent=n.domEvent,o.stoppable=!0,o.stop=()=>n.stop(),o.detail={latLng:((i=n.latLng)==null?void 0:i.toJSON())||null,placeId:n.placeId},o}return r}const If={onBoundsChanged:"bounds_changed",onCenterChanged:"center_changed",onClick:"click",onContextmenu:"contextmenu",onDblclick:"dblclick",onDrag:"drag",onDragend:"dragend",onDragstart:"dragstart",onHeadingChanged:"heading_changed",onIdle:"idle",onIsFractionalZoomEnabledChanged:"isfractionalzoomenabled_changed",onMapCapabilitiesChanged:"mapcapabilities_changed",onMapTypeIdChanged:"maptypeid_changed",onMousemove:"mousemove",onMouseout:"mouseout",onMouseover:"mouseover",onProjectionChanged:"projection_changed",onRenderingTypeChanged:"renderingtype_changed",onTilesLoaded:"tilesloaded",onTiltChanged:"tilt_changed",onZoomChanged:"zoom_changed",onCameraChanged:"bounds_changed"},ov=["bounds_changed","center_changed","heading_changed","tilt_changed","zoom_changed"],sv=["click","contextmenu","dblclick","mousemove","mouseout","mouseover"],lv=Object.keys(If);function av(t,e){const n=I.useRef(void 0);(!n.current||!Ym(e,n.current))&&(n.current=e),I.useEffect(t,n.current)}const uv=new Set(["backgroundColor","clickableIcons","controlSize","disableDefaultUI","disableDoubleClickZoom","draggable","draggableCursor","draggingCursor","fullscreenControl","fullscreenControlOptions","gestureHandling","isFractionalZoomEnabled","keyboardShortcuts","mapTypeControl","mapTypeControlOptions","mapTypeId","maxZoom","minZoom","noClear","panControl","panControlOptions","restriction","rotateControl","rotateControlOptions","scaleControl","scaleControlOptions","scrollwheel","streetView","streetViewControl","streetViewControlOptions","styles","zoomControl","zoomControlOptions"]);function cv(t,e){const n={},r=Object.keys(e);for(const i of r)uv.has(i)&&(n[i]=e[i]);av(()=>{t&&t.setOptions(n)},[n])}function Nf(){var t;return((t=I.useContext($i))==null?void 0:t.status)||Ct.NOT_LOADED}function dv(t,e){const{viewport:n,viewState:r}=e,i=!!n;return I.useLayoutEffect(()=>{if(!t||!r)return;const{latitude:o,longitude:s,bearing:l,pitch:a,zoom:u}=r;t.moveCamera({center:{lat:o,lng:s},heading:l,tilt:a,zoom:u+1})},[t,r]),i}function pv(t){return!t||typeof t!="object"||!("lat"in t&&"lng"in t)?!1:Number.isFinite(t.lat)&&Number.isFinite(t.lng)}function Tf(t){return pv(t)?t:t.toJSON()}function fv(t,e,n){const r=n.center?Tf(n.center):null;let i=null,o=null;r&&Number.isFinite(r.lat)&&Number.isFinite(r.lng)&&(i=r.lat,o=r.lng);const s=Number.isFinite(n.zoom)?n.zoom:null,l=Number.isFinite(n.heading)?n.heading:null,a=Number.isFinite(n.tilt)?n.tilt:null;I.useLayoutEffect(()=>{if(!t)return;const u={};let c=!1;i!==null&&o!==null&&(e.current.center.lat!==i||e.current.center.lng!==o)&&(u.center={lat:i,lng:o},c=!0),s!==null&&e.current.zoom!==s&&(u.zoom=s,c=!0),l!==null&&e.current.heading!==l&&(u.heading=l,c=!0),a!==null&&e.current.tilt!==a&&(u.tilt=a,c=!0),c&&t.moveCamera(u)})}const hv=()=>{const t={position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:999,display:"flex",flexFlow:"column nowrap",textAlign:"center",justifyContent:"center",fontSize:".8rem",color:"rgba(0,0,0,0.6)",background:"#dddddd",padding:"1rem 1.5rem"};return M.createElement("div",{style:t},M.createElement("h2",null,"Error: AuthFailure"),M.createElement("p",null,"A problem with your API key prevents the map from rendering correctly. Please make sure the value of the ",M.createElement("code",null,"APIProvider.apiKey")," prop is correct. Check the error-message in the console for further details."))};function gv(){const[t,e]=I.useState(null),n=I.useCallback(r=>e(r),[e]);return[t,n]}function Rf(){return Nf()===Ct.LOADED}function mv(){const[,t]=I.useReducer(e=>e+1,0);return t}function vv(t,e){const n=t.getCenter(),r=t.getZoom(),i=t.getHeading()||0,o=t.getTilt()||0,s=t.getBounds();(!n||!s||!Number.isFinite(r))&&console.warn("[useTrackedCameraState] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),Object.assign(e.current,{center:(n==null?void 0:n.toJSON())||{lat:0,lng:0},zoom:r||0,heading:i,tilt:o})}function yv(t){const e=mv(),n=I.useRef({center:{lat:0,lng:0},heading:0,tilt:0,zoom:0});return I.useEffect(()=>{if(!t)return;const r=google.maps.event.addListener(t,"bounds_changed",()=>{vv(t,n),e()});return()=>r.remove()},[t,e]),n}const wv=["id","defaultBounds","defaultCenter","defaultZoom","defaultHeading","defaultTilt","reuseMaps"];class go{static has(e){return this.entries[e]&&this.entries[e].length>0}static pop(e){return this.entries[e]&&this.entries[e].pop()||null}static push(e,n){this.entries[e]||(this.entries[e]=[]),this.entries[e].push(n)}}go.entries={};function _v(t,e){const n=Rf(),[r,i]=I.useState(null),[o,s]=gv(),l=yv(r),{id:a,defaultBounds:u,defaultCenter:c,defaultZoom:p,defaultHeading:f,defaultTilt:g,reuseMaps:v}=t,_=Ai(t,wv),N=t.zoom!==void 0||t.defaultZoom!==void 0,h=t.center!==void 0||t.defaultCenter!==void 0;!u&&(!N||!h)&&console.warn("<Map> component is missing configuration. You have to provide zoom and center (via the `zoom`/`defaultZoom` and `center`/`defaultCenter` props) or specify the region to show using `defaultBounds`. See https://visgl.github.io/react-google-maps/docs/api-reference/components/map#required"),!_.center&&c&&(_.center=c),!_.zoom&&Number.isFinite(p)&&(_.zoom=p),!_.heading&&Number.isFinite(f)&&(_.heading=f),!_.tilt&&Number.isFinite(g)&&(_.tilt=g);for(const m of Object.keys(_))_[m]===void 0&&delete _[m];const d=I.useRef();return I.useEffect(()=>{if(!o||!n)return;const{addMapInstance:m,removeMapInstance:E}=e,L=t.mapId,A=L||"default";let k,P;if(v&&go.has(A)?(P=go.pop(A),k=P.getDiv(),o.appendChild(k),P.setOptions(_),setTimeout(()=>P.setCenter(P.getCenter()),0)):(k=document.createElement("div"),k.style.height="100%",o.appendChild(k),P=new google.maps.Map(k,_)),i(P),m(P,a),u?P.fitBounds(u):(!N||!h)&&P.fitBounds({east:180,west:-180,south:-90,north:90}),d.current){const{mapId:q,cameraState:D}=d.current;q!==L&&P.setOptions(D)}return()=>{d.current={mapId:L,cameraState:l.current},k.remove(),v?go.push(A,P):google.maps.event.clearInstanceListeners(P),i(null),E(a)}},[o,n,a,t.mapId]),[r,s,l]}const Mf=M.createContext(null),bf=t=>{const{children:e,id:n,className:r,style:i}=t,o=I.useContext($i),s=Nf();if(!o)throw new Error("<Map> can only be used inside an <ApiProvider> component.");const[l,a,u]=_v(t,o);fv(l,u,t),rv(l,t),cv(l,t);const c=dv(l,t),p=!!t.controlled;I.useEffect(()=>{if(l)return c&&l.setOptions({disableDefaultUI:!0}),(c||p)&&l.setOptions({gestureHandling:"none",keyboardShortcuts:!1}),()=>{l.setOptions({gestureHandling:t.gestureHandling,keyboardShortcuts:t.keyboardShortcuts})}},[l,c,p,t.gestureHandling,t.keyboardShortcuts]);const f=t.center?Tf(t.center):null;let g=null,v=null;f&&Number.isFinite(f.lat)&&Number.isFinite(f.lng)&&(g=f.lat,v=f.lng);const _=I.useMemo(()=>{var d,m,E,L,A;return{center:{lat:(d=g)!=null?d:0,lng:(m=v)!=null?m:0},zoom:(E=t.zoom)!=null?E:0,heading:(L=t.heading)!=null?L:0,tilt:(A=t.tilt)!=null?A:0}},[g,v,t.zoom,t.heading,t.tilt]);I.useLayoutEffect(()=>{if(!l||!p)return;l.moveCamera(_);const d=l.addListener("bounds_changed",()=>{l.moveCamera(_)});return()=>d.remove()},[l,p,_]);const N=I.useMemo(()=>yt({width:"100%",height:"100%",position:"relative",zIndex:c?-1:0},i),[i,c]),h=I.useMemo(()=>({map:l}),[l]);return s===Ct.AUTH_FAILURE?M.createElement("div",{style:yt({position:"relative"},r?{}:N),className:r},M.createElement(hv,null)):M.createElement("div",yt({ref:a,"data-testid":"map",style:r?void 0:N,className:r},n?{id:n}:{}),l?M.createElement(Mf.Provider,{value:h},e):null)};bf.deckGLViewProps=!0;const Ac=new Set;function ea(...t){const e=JSON.stringify(t);Ac.has(e)||(Ac.add(e),console.error(...t))}const Df=(t=null)=>{const e=I.useContext($i),{map:n}=I.useContext(Mf)||{};if(e===null)return ea("useMap(): failed to retrieve APIProviderContext. Make sure that the <APIProvider> component exists and that the component you are calling `useMap()` from is a sibling of the <APIProvider>."),null;const{mapInstances:r}=e;return t!==null?r[t]||null:n||r.default||null};function Ev(t){const e=Rf(),n=I.useContext($i);return I.useEffect(()=>{!e||!n||n.importLibrary(t)},[e,n,t]),(n==null?void 0:n.loadedLibraries[t])||null}function Sv(t,e,n){if(e!=null&&typeof e!="object")throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");const r=t.style;if(n==null){if(e==null)return;for(const i in e)e.hasOwnProperty(i)&&$c(r,i,e[i]);return}for(const i in n)n.hasOwnProperty(i)&&(e==null||!e.hasOwnProperty(i))&&(i.indexOf("--")===0?r.setProperty(i,""):i==="float"?r.cssFloat="":r[i]="");if(e!=null)for(const i in e){const o=e[i];e.hasOwnProperty(i)&&n[i]!==o&&$c(r,i,o)}}function $c(t,e,n){const r=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,n):typeof n=="number"&&n!==0&&!xv(e)?t[e]=n+"px":e==="float"?t.cssFloat=n:t[e]=(""+n).trim()}const Cv=new Set(["animationIterationCount","aspectRatio","borderImageOutset","borderImageSlice","borderImageWidth","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","columns","flex","flexGrow","flexPositive","flexShrink","flexNegative","flexOrder","gridArea","gridRow","gridRowEnd","gridRowSpan","gridRowStart","gridColumn","gridColumnEnd","gridColumnSpan","gridColumnStart","fontWeight","lineClamp","lineHeight","opacity","order","orphans","scale","tabSize","widows","zIndex","zoom","fillOpacity","floodOpacity","stopOpacity","strokeDasharray","strokeDashoffset","strokeMiterlimit","strokeOpacity","strokeWidth"]);function xv(t){return Cv.has(t)}function Ji(t,e,n){I.useEffect(()=>{if(!t||!e||!n)return;const r=google.maps.event.addListener(t,e,n);return()=>r==null?void 0:r.remove()},[t,e,n])}function Nr(t,e,n){I.useEffect(()=>{t&&(t[e]=n)},[t,e,n])}const zf=M.createContext(null);function Lv(t){const[e,n]=I.useState(null),[r,i]=I.useState(null),o=I.useRef(null),s=Df(),l=Ev("marker"),{children:a,className:u,style:c,onClick:p,onDrag:f,onDragStart:g,onDragEnd:v,collisionBehavior:_,clickable:N,draggable:h,position:d,title:m,zIndex:E}=t,L=I.Children.count(a);return I.useEffect(()=>{if(!s||!l)return;const A=new l.AdvancedMarkerElement;A.map=s,n(A);let k=null;return L>0&&(k=document.createElement("div"),A.content=k,i(k)),()=>{var P;A.map=null,(P=k)==null||P.remove(),n(null),i(null)}},[s,l,L]),Nr(r,"className",u!=null?u:""),I.useEffect(()=>{r&&(Sv(r,c||null,o.current),o.current=c||null)},[r,u,c]),Nr(e,"position",d),Nr(e,"title",m!=null?m:""),Nr(e,"zIndex",E),Nr(e,"collisionBehavior",_),I.useEffect(()=>{e&&(h!==void 0?e.gmpDraggable=h:f||g||v?e.gmpDraggable=!0:e.gmpDraggable=!1)},[e,h,f,v,g]),I.useEffect(()=>{e&&(N!==void 0?e.gmpClickable=N:p?e.gmpClickable=!0:e.gmpClickable=!1)},[e,N,p]),Ji(e,"click",p),Ji(e,"drag",f),Ji(e,"dragstart",g),Ji(e,"dragend",v),[e,r]}const kv=I.forwardRef((t,e)=>{const{children:n}=t,[r,i]=Lv(t),o=I.useMemo(()=>r?{marker:r}:null,[r]);return I.useImperativeHandle(e,()=>r,[r]),i?M.createElement(zf.Provider,{value:o},ou.createPortal(n,i)):null}),Pv=["onClick","onDrag","onDragStart","onDragEnd","onMouseOver","onMouseOut"];function Av(t){const[e,n]=I.useState(null),r=Df(),{onClick:i,onDrag:o,onDragStart:s,onDragEnd:l,onMouseOver:a,onMouseOut:u}=t,c=Ai(t,Pv),{position:p,draggable:f}=c;return I.useEffect(()=>{if(!r){r===void 0&&console.error("<Marker> has to be inside a Map component.");return}const g=new google.maps.Marker(c);return g.setMap(r),n(g),()=>{g.setMap(null),n(null)}},[r]),I.useEffect(()=>{if(!e)return;const g=e,v=google.maps.event;return i&&v.addListener(g,"click",i),o&&v.addListener(g,"drag",o),s&&v.addListener(g,"dragstart",s),l&&v.addListener(g,"dragend",l),a&&v.addListener(g,"mouseover",a),u&&v.addListener(g,"mouseout",u),e.setDraggable(!!f),()=>{v.clearInstanceListeners(g)}},[e,f,i,o,s,l,a,u]),I.useEffect(()=>{e&&c&&e.setOptions(c)},[e,c]),I.useEffect(()=>{f||!p||!e||e.setPosition(p)},[f,p,e]),e}I.forwardRef((t,e)=>{const n=Av(t);return I.useImperativeHandle(e,()=>n,[n]),M.createElement(M.Fragment,null)});const $v=t=>{var e;const n=(e=I.useContext(zf))==null?void 0:e.marker,r=I.useMemo(()=>document.createElement("div"),[]);return I.useEffect(()=>{if(!n){n===void 0&&console.error("The <Pin> component can only be used inside <AdvancedMarker>.");return}t.glyph&&t.children&&ea("The <Pin> component only uses children to render the glyph if both the glyph property and children are present."),I.Children.count(t.children)>1&&ea("Passing multiple children to the <Pin> component might lead to unexpected results.");const i=yt({},t),o=new google.maps.marker.PinElement(i);t.children&&(o.glyph=r),n.content=o.element},[n,r,t]),ou.createPortal(t.children,r)};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ov=new Set(["children","localName","ref","style","className"]),Oc=new WeakMap,Ic=(t,e,n,r,i)=>{const o=i==null?void 0:i[e];o===void 0?(t[e]=n,n==null&&e in HTMLElement.prototype&&t.removeAttribute(e)):n!==r&&((s,l,a)=>{let u=Oc.get(s);u===void 0&&Oc.set(s,u=new Map);let c=u.get(l);a!==void 0?c===void 0?(u.set(l,c={handleEvent:a}),s.addEventListener(l,c)):c.handleEvent=a:c!==void 0&&(u.delete(l),s.removeEventListener(l,c))})(t,o,n)},te=({react:t,tagName:e,elementClass:n,events:r,displayName:i})=>{const o=new Set(Object.keys(r!=null?r:{})),s=t.forwardRef((l,a)=>{const u=t.useRef(new Map),c=t.useRef(null),p={},f={};for(const[g,v]of Object.entries(l))Ov.has(g)?p[g==="className"?"class":g]=v:o.has(g)||g in n.prototype?f[g]=v:p[g]=v;return t.useLayoutEffect(()=>{if(c.current===null)return;const g=new Map;for(const v in f)Ic(c.current,v,l[v],u.current.get(v),r),u.current.delete(v),g.set(v,l[v]);for(const[v,_]of u.current)Ic(c.current,v,void 0,_,r);u.current=g}),t.useLayoutEffect(()=>{var g;(g=c.current)==null||g.removeAttribute("defer-hydration")},[]),p.suppressHydrationWarning=!0,t.createElement(e,{...p,ref:t.useCallback(g=>{c.current=g,typeof a=="function"?a(g):a!==null&&(a.current=g)},[a])})});return s.displayName=i!=null?i:n.name,s};function y(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(o=(i<3?s(o):i>3?s(e,n,o):s(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o}function w(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mo=globalThis,su=mo.ShadowRoot&&(mo.ShadyCSS===void 0||mo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lu=Symbol(),Nc=new WeakMap;let Uf=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==lu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(su&&e===void 0){const r=n!==void 0&&n.length===1;r&&(e=Nc.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Nc.set(n,e))}return e}toString(){return this.cssText}};const Iv=t=>new Uf(typeof t=="string"?t:t+"",void 0,lu),j=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new Uf(n,t,lu)},Nv=(t,e)=>{if(su)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const r=document.createElement("style"),i=mo.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)}},Tc=su?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const r of e.cssRules)n+=r.cssText;return Iv(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Tv,defineProperty:Rv,getOwnPropertyDescriptor:Mv,getOwnPropertyNames:bv,getOwnPropertySymbols:Dv,getPrototypeOf:zv}=Object,en=globalThis,Rc=en.trustedTypes,Uv=Rc?Rc.emptyScript:"",Xs=en.reactiveElementPolyfillSupport,Yr=(t,e)=>t,Bo={toAttribute(t,e){switch(e){case Boolean:t=t?Uv:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},au=(t,e)=>!Tv(t,e),Mc={attribute:!0,type:String,converter:Bo,reflect:!1,hasChanged:au};var pd,fd;(pd=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(fd=en.litPropertyMetadata)!=null||(en.litPropertyMetadata=new WeakMap);class Un extends HTMLElement{static addInitializer(e){var n;this._$Ei(),((n=this.l)!=null?n:this.l=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Mc){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Rv(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){var s;const{get:i,set:o}=(s=Mv(this.prototype,e))!=null?s:{get(){return this[n]},set(l){this[n]=l}};return{get(){return i==null?void 0:i.call(this)},set(l){const a=i==null?void 0:i.call(this);o.call(this,l),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var n;return(n=this.elementProperties.get(e))!=null?n:Mc}static _$Ei(){if(this.hasOwnProperty(Yr("elementProperties")))return;const e=zv(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Yr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Yr("properties"))){const n=this.properties,r=[...bv(n),...Dv(n)];for(const i of r)this.createProperty(i,n[i])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)n.unshift(Tc(i))}else e!==void 0&&n.push(Tc(e));return n}static _$Eu(e,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n,r;((n=this._$EO)!=null?n:this._$EO=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){var n;const e=(n=this.shadowRoot)!=null?n:this.attachShadow(this.constructor.shadowRootOptions);return Nv(e,this.constructor.elementStyles),e}connectedCallback(){var e,n;(e=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$EC(e,n){var o;const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:Bo).toAttribute(n,r.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,n){var o;const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:Bo;this._$Em=i,this[i]=l.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(e,n,r){var i;if(e!==void 0){if(r!=null||(r=this.constructor.getPropertyOptions(e)),!((i=r.hasChanged)!=null?i:au)(this[e],n))return;this.P(e,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,n,r){var i;this._$AL.has(e)||this._$AL.set(e,n),r.reflect===!0&&this._$Em!==e&&((i=this._$Ej)!=null?i:this._$Ej=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r,i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((r=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,l]of this._$Ep)this[s]=l;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,l]of o)l.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],l)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(i=this._$EO)==null||i.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(n)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(e){}firstUpdated(e){}}var hd;Un.elementStyles=[],Un.shadowRootOptions={mode:"open"},Un[Yr("elementProperties")]=new Map,Un[Yr("finalized")]=new Map,Xs==null||Xs({ReactiveElement:Un}),((hd=en.reactiveElementVersions)!=null?hd:en.reactiveElementVersions=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kr=globalThis,Ho=Kr.trustedTypes,bc=Ho?Ho.createPolicy("lit-html",{createHTML:t=>t}):void 0,uu="$lit$",xt=`lit$${Math.random().toFixed(9).slice(2)}$`,cu="?"+xt,Fv=`<${cu}>`,Nn=document,gi=()=>Nn.createComment(""),mi=t=>t===null||typeof t!="object"&&typeof t!="function",Ff=Array.isArray,jf=t=>Ff(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Zs=`[ 	
\f\r]`,Tr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dc=/-->/g,zc=/>/g,pn=RegExp(`>|${Zs}(?:([^\\s"'>=/]+)(${Zs}*=${Zs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Uc=/'/g,Fc=/"/g,Bf=/^(?:script|style|textarea|title)$/i,jv=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),S=jv(1),Rt=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),jc=new WeakMap,En=Nn.createTreeWalker(Nn,129);function Hf(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return bc!==void 0?bc.createHTML(e):e}const Vf=(t,e)=>{const n=t.length-1,r=[];let i,o=e===2?"<svg>":"",s=Tr;for(let l=0;l<n;l++){const a=t[l];let u,c,p=-1,f=0;for(;f<a.length&&(s.lastIndex=f,c=s.exec(a),c!==null);)f=s.lastIndex,s===Tr?c[1]==="!--"?s=Dc:c[1]!==void 0?s=zc:c[2]!==void 0?(Bf.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=pn):c[3]!==void 0&&(s=pn):s===pn?c[0]===">"?(s=i!=null?i:Tr,p=-1):c[1]===void 0?p=-2:(p=s.lastIndex-c[2].length,u=c[1],s=c[3]===void 0?pn:c[3]==='"'?Fc:Uc):s===Fc||s===Uc?s=pn:s===Dc||s===zc?s=Tr:(s=pn,i=void 0);const g=s===pn&&t[l+1].startsWith("/>")?" ":"";o+=s===Tr?a+Fv:p>=0?(r.push(u),a.slice(0,p)+uu+a.slice(p)+xt+g):a+xt+(p===-2?l:g)}return[Hf(t,o+(t[n]||"<?>")+(e===2?"</svg>":"")),r]};class vi{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const l=e.length-1,a=this.parts,[u,c]=Vf(e,n);if(this.el=vi.createElement(u,r),En.currentNode=this.el.content,n===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=En.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(uu)){const f=c[s++],g=i.getAttribute(p).split(xt),v=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:v[2],strings:g,ctor:v[1]==="."?Gf:v[1]==="?"?Yf:v[1]==="@"?Kf:Oi}),i.removeAttribute(p)}else p.startsWith(xt)&&(a.push({type:6,index:o}),i.removeAttribute(p));if(Bf.test(i.tagName)){const p=i.textContent.split(xt),f=p.length-1;if(f>0){i.textContent=Ho?Ho.emptyScript:"";for(let g=0;g<f;g++)i.append(p[g],gi()),En.nextNode(),a.push({type:2,index:++o});i.append(p[f],gi())}}}else if(i.nodeType===8)if(i.data===cu)a.push({type:2,index:o});else{let p=-1;for(;(p=i.data.indexOf(xt,p+1))!==-1;)a.push({type:7,index:o}),p+=xt.length-1}o++}}static createElement(e,n){const r=Nn.createElement("template");return r.innerHTML=e,r}}function Tn(t,e,n=t,r){var s,l,a;if(e===Rt)return e;let i=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const o=mi(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,n,r)),r!==void 0?((a=n._$Co)!=null?a:n._$Co=[])[r]=i:n._$Cl=i),i!==void 0&&(e=Tn(t,i._$AS(t,e.values),i,r)),e}class Wf{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var u;const{el:{content:n},parts:r}=this._$AD,i=((u=e==null?void 0:e.creationScope)!=null?u:Nn).importNode(n,!0);En.currentNode=i;let o=En.nextNode(),s=0,l=0,a=r[0];for(;a!==void 0;){if(s===a.index){let c;a.type===2?c=new Er(o,o.nextSibling,this,e):a.type===1?c=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(c=new qf(o,this,e)),this._$AV.push(c),a=r[++l]}s!==(a==null?void 0:a.index)&&(o=En.nextNode(),s++)}return En.currentNode=Nn,i}p(e){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}}class Er{get _$AU(){var e,n;return(n=(e=this._$AM)==null?void 0:e._$AU)!=null?n:this._$Cv}constructor(e,n,r,i){var o;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(o=i==null?void 0:i.isConnected)!=null?o:!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Tn(this,e,n),mi(e)?e===U||e==null||e===""?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==Rt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):jf(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==U&&mi(this._$AH)?this._$AA.nextSibling.data=e:this.T(Nn.createTextNode(e)),this._$AH=e}$(e){var o;const{values:n,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=vi.createElement(Hf(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const s=new Wf(i,this),l=s.u(this.options);s.p(n),this.T(l),this._$AH=s}}_$AC(e){let n=jc.get(e.strings);return n===void 0&&jc.set(e.strings,n=new vi(e)),n}k(e){Ff(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of e)i===n.length?n.push(r=new Er(this.S(gi()),this.S(gi()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}}class Oi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,i,o){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=U}_$AI(e,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)e=Tn(this,e,n,0),s=!mi(e)||e!==this._$AH&&e!==Rt,s&&(this._$AH=e);else{const l=e;let a,u;for(e=o[0],a=0;a<o.length-1;a++)u=Tn(this,l[r+a],n,a),u===Rt&&(u=this._$AH[a]),s||(s=!mi(u)||u!==this._$AH[a]),u===U?e=U:e!==U&&(e+=(u!=null?u:"")+o[a+1]),this._$AH[a]=u}s&&!i&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Gf extends Oi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}}class Yf extends Oi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==U)}}class Kf extends Oi{constructor(e,n,r,i,o){super(e,n,r,i,o),this.type=5}_$AI(e,n=this){var s;if((e=(s=Tn(this,e,n,0))!=null?s:U)===Rt)return;const r=this._$AH,i=e===U&&r!==U||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==U&&(r===U||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)==null?void 0:n.host)!=null?r:this.element,e):this._$AH.handleEvent(e)}}class qf{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Tn(this,e)}}const Bv={P:uu,A:xt,C:cu,M:1,L:Vf,R:Wf,D:jf,V:Tn,I:Er,H:Oi,N:Yf,U:Kf,B:Gf,F:qf},Js=Kr.litHtmlPolyfillSupport;var gd;Js==null||Js(vi,Er),((gd=Kr.litHtmlVersions)!=null?gd:Kr.litHtmlVersions=[]).push("3.1.3");const Qf=(t,e,n)=>{var o,s;const r=(o=n==null?void 0:n.renderBefore)!=null?o:e;let i=r._$litPart$;if(i===void 0){const l=(s=n==null?void 0:n.renderBefore)!=null?s:null;r._$litPart$=i=new Er(e.insertBefore(gi(),l),l,void 0,n!=null?n:{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let qr=class extends Un{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n,r;const e=super.createRenderRoot();return(r=(n=this.renderOptions).renderBefore)!=null||(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qf(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Rt}};var md;qr._$litElement$=!0,qr.finalized=!0,(md=globalThis.litElementHydrateSupport)==null||md.call(globalThis,{LitElement:qr});const el=globalThis.litElementPolyfillSupport;el==null||el({LitElement:qr});var vd;((vd=globalThis.litElementVersions)!=null?vd:globalThis.litElementVersions=[]).push("4.0.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=t=>(e,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hv={attribute:!0,type:String,converter:Bo,reflect:!1,hasChanged:au},Vv=(t=Hv,e,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,t),r==="accessor"){const{name:s}=n;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,a,t)},init(l){return l!==void 0&&this.P(s,void 0,t),l}}}if(r==="setter"){const{name:s}=n;return function(l){const a=this[s];e.call(this,l),this.requestUpdate(s,a,t)}}throw Error("Unsupported decorator location: "+r)};function x(t){return(e,n)=>typeof n=="object"?Vv(t,e,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fe(t){return x({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const du=(t,e,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t,e){return(n,r,i)=>{const o=s=>{var l,a;return(a=(l=s.renderRoot)==null?void 0:l.querySelector(t))!=null?a:null};return du(n,r,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Xf(t){return(e,n)=>{const{slot:r,selector:i}=t!=null?t:{},o="slot"+(r?`[name=${r}]`:":not([name])");return du(e,n,{get(){var a,u;const s=(a=this.renderRoot)==null?void 0:a.querySelector(o),l=(u=s==null?void 0:s.assignedElements(t))!=null?u:[];return i===void 0?l:l.filter(c=>c.matches(i))}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wv(t){return(e,n)=>{const{slot:r}=t!=null?t:{},i="slot"+(r?`[name=${r}]`:":not([name])");return du(e,n,{get(){var s,l;const o=(s=this.renderRoot)==null?void 0:s.querySelector(i);return(l=o==null?void 0:o.assignedNodes(t))!=null?l:[]}})}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Zf{constructor(e){this.host=e,this.host.addController(this)}hostUpdate(){}info(e,...n){console.info(this.formatMessage(e),...n)}warn(e,...n){console.warn(this.formatMessage(e),...n)}error(e,...n){console.error(this.formatMessage(e),...n)}formatMessage(e){return this.prependTagName(e)}prependTagName(e){return`<${this.host.tagName.toLowerCase()}>: ${e}`}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Oe extends qr{constructor(){super(...arguments),this.logger=new Zf(this)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Gv="0.6.11",Yv="NPM";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class rn{constructor(){this.promise=new Promise((e,n)=>{this.resolveCallback=e,this.rejectCallback=n})}resolve(e){this.value=e,this.resolveCallback(e)}reject(e){this.rejectCallback(e)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Kv(t){return(e=>{var n,r,i,o="The Google Maps JavaScript API",s="google",l="importLibrary",a="__ib__",u=document,c=window;c=c[s]||(c[s]={});var p=c.maps||(c.maps={}),f=new Set,g=new URLSearchParams,v=()=>n||(n=new Promise(async(_,N)=>{var h;await(r=u.createElement("script")),g.set("libraries",[...f]+"");for(i in e)g.set(i.replace(/[A-Z]/g,d=>"_"+d[0].toLowerCase()),e[i]);g.set("callback",s+".maps."+a),r.src=`https://maps.${s}apis.com/maps/api/js?`+g,p[a]=_,r.onerror=()=>n=N(Error(o+" could not load.")),r.nonce=((h=u.querySelector("script[nonce]"))==null?void 0:h.nonce)||"",u.head.append(r)}));p[l]?console.warn(o+" only loads once. Ignoring:",e):p[l]=(_,...N)=>f.add(_)&&v().then(()=>p[l](_,...N))})(t),google.maps}const qv={load:Kv};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var ue;function Qv(){try{return google==null?void 0:google.maps}catch{return}}function Bc(t){t.importLibrary("maps"),t.importLibrary("marker")}function Xv(t){const e=t.logger;return e instanceof Zf?e:void 0}let G=ue=class extends Oe{constructor(){super(...arguments),this.version="beta"}set apiKey(e){this.key=e}get apiKey(){return this.key}async connectedCallback(){super.connectedCallback(),ue.instance?this.logger.warn("Found multiple instances of this element on the same page. The Google Maps JavaScript API can only be configured once; please ensure you only have a single instance.",this):ue.instance=this}willUpdate(e){ue.instance===this&&this.tryLoadGoogleMapsAPI(e)}render(){return S`<slot></slot>`}getSolutionChannel(){if(this.solutionChannel!=="")return this.solutionChannel?this.solutionChannel:`GMP_${Yv}_extended_v${Gv}`}tryLoadGoogleMapsAPI(e){if(ue.googleMapsDeferred.value)if(ue.inlineScriptLoaded){const n=e.keys().next().value;this.logger.warn(`Property '${n}' cannot be updated once the Google Maps JavaScript API is already loaded.`)}else this.logger.warn("Please remove the <gmpx-api-loader> element if you are using the Google Maps JavaScript API inline bootstrap loader. Duplicate configuration may cause unexpected behavior.");else if(this.key!==void 0){const{key:n,version:r,language:i,region:o,authReferrerPolicy:s}=this,l=this.getSolutionChannel(),a=qv.load({key:n,...r&&{v:r},...i&&{language:i},...o&&{region:o},...l&&{solutionChannel:l},...s&&{authReferrerPolicy:s}});ue.inlineScriptLoaded=!0,ue.googleMapsDeferred.resolve(a),Bc(a)}}static async importLibrary(e,n){let r=ue.googleMapsDeferred.value;return r||(ue.pollForGoogleMaps(5,1e3,n&&Xv(n)),r=await ue.googleMapsDeferred.promise),r.importLibrary(e)}static reset(){delete window.google,delete ue.instance,ue.inlineScriptLoaded=!1,ue.googleMapsDeferred=new rn}static pollForGoogleMaps(e,n,r,i=0){const o=Qv();if(o)!ue.inlineScriptLoaded&&i>0&&(r!=null?r:console).warn("Using the legacy Google Maps JavaScript API script loader may result in suboptimal performance. For best results, please include a <gmpx-api-loader> (https://github.com/googlemaps/extended-component-library) or use the inline bootstrap loader (https://goo.gle/js-api-loading) instead."),ue.googleMapsDeferred.resolve(o),Bc(o);else if(e>0)window.setTimeout(()=>{ue.pollForGoogleMaps(e-1,n,r,i+1)},n);else{let s=r?r.formatMessage("The Google Maps JavaScript API is required for this element to function correctly. "):"APILoader.importLibrary(): Unable to initialize the Google Maps JavaScript API. ";throw s+="Please ensure you have a <gmpx-api-loader> on the page with a valid API key. https://github.com/googlemaps/extended-component-library",new Error(s)}}};G.googleMapsDeferred=new rn;G.inlineScriptLoaded=!1;y([x({attribute:"auth-referrer-policy",reflect:!0,type:String}),w("design:type",String)],G.prototype,"authReferrerPolicy",void 0);y([x({reflect:!0,type:String}),w("design:type",String)],G.prototype,"key",void 0);y([x({reflect:!0,type:String}),w("design:type",String)],G.prototype,"language",void 0);y([x({reflect:!0,type:String}),w("design:type",String)],G.prototype,"region",void 0);y([x({attribute:"solution-channel",reflect:!0,type:String}),w("design:type",String)],G.prototype,"solutionChannel",void 0);y([x({reflect:!0,type:String}),w("design:type",Object)],G.prototype,"version",void 0);G=ue=y([K("gmpx-api-loader")],G);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ii=t=>(...e)=>({_$litDirective$:t,values:e});let Ni=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vo=Ii(class extends Ni{constructor(t){var e;if(super(t),t.type!==gs.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!((r=this.nt)!=null&&r.has(o))&&this.st.add(o);return this.render(e)}const n=t.element.classList;for(const o of this.st)o in e||(n.remove(o),this.st.delete(o));for(const o in e){const s=!!e[o];s===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(s?(n.add(o),this.st.add(o)):(n.remove(o),this.st.delete(o)))}return Rt}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ge(t,e,n){return t?e(t):n==null?void 0:n(t)}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $t=j`var(--gmpx-color-primary, #1976d2)`,mn=j`var(--gmpx-color-surface, #fff)`,Hc=j`var(--gmpx-color-on-primary, #fff)`,Pt=j`var(--gmpx-color-on-surface, #212121)`,Wo=j`var(--gmpx-color-on-surface-variant, #757575)`,Zv=j`var(--gmpx-color-outline, #e0e0e0)`,ta=j`var(--gmpx-rating-color, #ffb300)`,na=j`var(--gmpx-rating-color-empty, #e0e0e0)`,pu=j`var(--gmpx-font-family-base, 'Google Sans Text', sans-serif)`,fu=j`var(--gmpx-font-family-headings, ${pu})`,Le=j`var(--gmpx-font-size-base, 0.875rem)`;function R(t){return j`calc(${Le} * (${t}/14))`}const Jv=j`400 ${R(18)}/${R(24)} ${fu}`,vo=j`500 ${R(16)}/${R(24)} ${fu}`,fr=j`500 ${R(14)}/${R(20)} ${fu}`,ms=j`400 ${R(14)}/${R(20)} ${pu}`,vs=j`400 ${R(12)}/${R(16)} ${pu}`,yi=j`1px solid ${Zv}`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ey(t,e){const n=document.createElement("link");return n.rel="stylesheet",n.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(t)}:wght@${encodeURIComponent(e.join(";"))}`,n}function Vc(t){const e=document.createElement("div");e.innerHTML=t;const n=e.querySelector("a");return{text:e.textContent||void 0,url:n&&n.href||void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var ye;(function(t){t.GOOGLE_SANS_TEXT="Google Sans Text",t.MATERIAL_SYMBOLS_OUTLINED="Material Symbols Outlined"})(ye||(ye={}));const tl=Object.freeze({[ye.GOOGLE_SANS_TEXT]:{loadInDocumentHead:!0,loadInShadowRoot:!1,weights:[400,500]},[ye.MATERIAL_SYMBOLS_OUTLINED]:{loadInDocumentHead:!0,loadInShadowRoot:!0,weights:[400]}});class un{constructor(e,n){this.host=e,this.fonts=n,e.addController(this);for(const r of n)tl[r].loadInDocumentHead&&this.injectWebFontAsset(document.head,r)}hostConnected(){for(const e of this.fonts)tl[e].loadInShadowRoot&&this.injectWebFontAsset(this.host.renderRoot,e)}injectWebFontAsset(e,n){e.querySelector(`link[href*="${encodeURIComponent(n)}"]`)||e.appendChild(ey(n,tl[n].weights))}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ty="add",Wc=Object.freeze(["outlined","filled"]),zn=.5;let Fe=class extends Oe{constructor(){super(...arguments),this.ariaHasPopup="false",this.ariaLabel=null,this.condensed=!1,this.variant="outlined",this.hasLabel=!1,this.fontLoader=new un(this,[ye.GOOGLE_SANS_TEXT,ye.MATERIAL_SYMBOLS_OUTLINED])}willUpdate(e){e.has("variant")&&!Wc.includes(this.variant)&&(this.logger.error(`Value "${this.variant}" for attribute "variant" is invalid. Acceptable choices are ${Wc.map(n=>`"${n}"`).join(", ")}.`),this.variant="outlined")}render(){var e,n;return this.href?S`
        <a
          aria-label=${(e=this.ariaLabel)!=null?e:U}
          class="container"
          href=${this.href}
          target="_blank"
        >${this.renderContent()}</a>
      `:S`
      <button
        aria-haspopup=${this.ariaHasPopup}
        aria-label=${(n=this.ariaLabel)!=null?n:U}
        class="container"
      >${this.renderContent()}</button>
    `}updated(){this.role=this.ariaLabel!=null?"none":null}renderContent(){const e=this.icon||(!this.hasLabel||this.condensed?ty:void 0);return S`
      <div class="layout ${Vo({condensed:this.condensed,"no-label":!this.hasLabel})}">
        <div class="pill ${Vo({filled:this.variant==="filled",outlined:this.variant!=="filled"})}">
          <div class="overlay"></div>
          ${ge(e,()=>S`
            <span aria-hidden="true" class="icon material-symbols-outlined">
              ${e}
            </span>
          `)}
          ${ge(!this.condensed,()=>this.renderLabel())}
        </div>
        ${ge(this.condensed,()=>this.renderLabel())}
      </div>
    `}renderLabel(){return S`
      <div class="label-container">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}handleSlotChange(){var e;this.hasLabel=!!((e=this.defaultSlotNodes)!=null&&e.map(n=>{var r;return(r=n.textContent)!=null?r:""}).join("").trim())}};Fe.styles=j`
    .container {
      all: unset;
      color: ${$t};
      cursor: pointer;
      text-align: center;
    }

    .icon {
      font-size: ${R(18)};
    }

    .layout.condensed {
      display: flex;
      flex-direction: column;
    }

    .layout.condensed .pill {
      align-self: center;
    }

    .layout.condensed .label-container {
      font: ${vs};
      margin-top: calc(${Le} * ${zn});
    }

    .layout.no-label .label-container {
      margin: 0;
    }

    .layout:not(.condensed):not(.no-label) .pill {
      padding-left: calc(${Le} * ${zn});
      padding-right: calc(${Le} * ${zn});
    }

    .pill {
      align-items: center;
      border-radius: calc(${Le} * (1 + ${zn}));
      display: flex;
      font: ${fr};
      justify-content: center;
      overflow: hidden;
      padding: calc(${Le} * ${zn} / 2);
      position: relative;
    }

    .pill > * {
      margin: calc(${Le} * ${zn} / 2);
    }

    .pill.filled {
      background-color: ${$t};
      color: ${Hc};
    }

    .pill.outlined {
      border: ${yi};
    }

    .pill .overlay {
      inset: 0;
      margin: 0;
      opacity: 0;
      position: absolute;
    }

    .pill.outlined .overlay {
      background-color: ${$t};
    }

    .pill.filled .overlay {
      background-color: ${Hc};
    }

    .container:hover .overlay {
      opacity: 0.08;
    }

    .container:focus .overlay {
      opacity: 0.24;
    }

    .container:active .overlay {
      opacity: 0.32;
    }
  `;Fe.shadowRootOptions={...Oe.shadowRootOptions,delegatesFocus:!0};y([x({attribute:"aria-haspopup",reflect:!0,type:String}),w("design:type",String)],Fe.prototype,"ariaHasPopup",void 0);y([x({attribute:"aria-label",reflect:!0,type:String}),w("design:type",Object)],Fe.prototype,"ariaLabel",void 0);y([x({reflect:!0,type:Boolean}),w("design:type",Object)],Fe.prototype,"condensed",void 0);y([x({reflect:!0,type:String}),w("design:type",String)],Fe.prototype,"href",void 0);y([x({reflect:!0,type:String}),w("design:type",String)],Fe.prototype,"icon",void 0);y([x({reflect:!0,type:String}),w("design:type",String)],Fe.prototype,"variant",void 0);y([fe(),w("design:type",Object)],Fe.prototype,"hasLabel",void 0);y([Wv({flatten:!0}),w("design:type",Array)],Fe.prototype,"defaultSlotNodes",void 0);Fe=y([K("gmpx-icon-button")],Fe);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jf="important",ny=" !"+Jf,ra=Ii(class extends Ni{constructor(t){var e;if(super(t),t.type!==gs.ATTRIBUTE||t.name!=="style"||((e=t.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return r==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){const{style:n}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?n.removeProperty(r):n[r]=null);for(const r in e){const i=e[r];if(i!=null){this.ft.add(r);const o=typeof i=="string"&&i.endsWith(ny);r.includes("-")||o?n.setProperty(r,o?i.slice(0,-11):i,o?Jf:""):n[r]=i}}return Rt}});/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Gc(t){return t?`"${t}"`:"default"}class ys{constructor(e,n,r){this.host=e,this.logger=n,this.supportedSlotNames=r,e.addController(this)}hostConnected(){for(const e of this.host.children)this.checkChildSlotValidity(e)}checkChildSlotValidity(e){var r;const n=(r=e.getAttribute("slot"))!=null?r:"";this.supportedSlotNames.includes(n)||this.logger.warn(`Detected child element in unsupported ${Gc(n)} slot. This component supports the following slots: ${this.supportedSlotNames.map(Gc).join(", ")}.`,e)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Go(){var n;let t=document.activeElement;if(!t)return null;let e;for(;e=(n=t.shadowRoot)==null?void 0:n.activeElement;)t=e;return t}function*eh(t){for(;;)if(yield t,t.parentNode)t=t.parentNode;else if(t instanceof ShadowRoot)t=t.host;else return}function ry(t,e){if(t.length===0||!e)return!1;const n=new Set(t);for(const r of eh(e))if(n.has(r))return!0;return!1}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Mt=class extends Oe{constructor(){super(...arguments),this.opened=!1,this.mainLastActiveEl=null,this.slotValidator=new ys(this,this.logger,["main","overlay"])}async showOverlay(){if(!this.opened&&(this.mainLastActiveEl=this.getMainActiveEl(),this.opened=!0,await this.updateComplete,this.overlayContainer.scroll(0,0),this.mainLastActiveEl)){const e=this.getOverlayAutofocusEl();e?e.focus():this.overlayContainer.focus()}}async hideOverlay(){if(!this.opened)return;const e=this.getOverlayActiveEl();this.opened=!1,(e||Go()===this.overlayContainer)&&(await this.updateComplete,this.mainLastActiveEl?this.mainLastActiveEl.focus():this.mainContainer.focus()),this.mainLastActiveEl=null}render(){return S`
      <div class="outer-container">
        <div
          class="inner-container main-container"
          style=${ra({display:this.opened?"none":"block"})}
          tabindex="-1"
        >
          <slot name="main"></slot>
        </div>
        <div
          class="inner-container overlay-container"
          style=${ra({display:this.opened?"block":"none"})}
          tabindex="-1"
          @keydown=${this.handleOverlayKeydown}
        >
          <slot name="overlay"></slot>
        </div>
      </div>
    `}handleOverlayKeydown(e){e.key==="Escape"&&this.hideOverlay()}getContainedActiveEl(e){const n=Go();return n instanceof HTMLElement&&ry(e,n)?n:null}getMainActiveEl(){return this.getContainedActiveEl(this.mainAssignedEls)}getOverlayActiveEl(){return this.getContainedActiveEl(this.overlayAssignedEls)}getOverlayAutofocusEl(){for(const e of this.overlayAssignedEls){const n=e.querySelector("[autofocus]");if(n&&n instanceof HTMLElement)return n}return null}};Mt.styles=j`
    :host(:not([hidden])) {
      display: block;
      height: 100%;
    }
    .outer-container {
      display: block;
      height: 100%;
      position: relative;
    }
    .inner-container {
      inset: 0;
      overflow: auto;
      position: absolute;
    }
    .inner-container:focus-visible {
      outline: none;
    }
  `;y([Xf({slot:"main"}),w("design:type",Array)],Mt.prototype,"mainAssignedEls",void 0);y([Xf({slot:"overlay"}),w("design:type",Array)],Mt.prototype,"overlayAssignedEls",void 0);y([ut(".main-container"),w("design:type",HTMLDivElement)],Mt.prototype,"mainContainer",void 0);y([ut(".overlay-container"),w("design:type",HTMLDivElement)],Mt.prototype,"overlayContainer",void 0);y([fe(),w("design:type",Object)],Mt.prototype,"opened",void 0);Mt=y([K("gmpx-overlay-layout")],Mt);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ia(t,e){const n=typeof e=="function";if(t!==void 0){let r=-1;for(const i of t)r>-1&&(yield n?e(r):e),r++,yield i}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Rn(t,e){if(t!==void 0){let n=0;for(const r of t)yield e(r,n++)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const th=24*60*60*1e3,nl=7*th;function iy(t,e=!1){const n=new Date;return n.setDate(n.getDate()-n.getDay()+t.day),n.setHours(t.hour),n.setMinutes(t.minute),n.setSeconds(0),n.toLocaleString(void 0,{hour:"numeric",minute:"numeric",weekday:e?"short":void 0})}function Yc(t,e,n=new Date){return iy(t,!nh(e,n))}function nh(t,e=new Date,n=th){return t>=e&&t.valueOf()-e.valueOf()<n}function hu(t){var e;return((e=t.periods)==null?void 0:e.length)===1&&!t.periods[0].close&&t.periods[0].open.day===0&&t.periods[0].open.hour===0&&t.periods[0].open.minute===0}function oy(t){const e=new Date(t);return e.setUTCDate(e.getUTCDate()-e.getUTCDay()),{year:e.getUTCFullYear(),month:e.getUTCMonth(),day:e.getUTCDate()}}function rh(t,e){const{year:n,month:r,day:i}=oy(t);let o=Date.UTC(n,r,i,0,-e);const s=t.valueOf()-o;return s<0?o-=nl:s>=nl&&(o+=nl),new Date(o)}function Yo(t,e){const n=new Date(e);return n.setDate(n.getDate()+t.day),n.setHours(n.getHours()+t.hour),n.setMinutes(n.getMinutes()+t.minute),n}function ih(t,e,n=new Date){const r=rh(n,e);for(const i of t.periods){const o={period:i,openDate:Yo(i.open,r),closeDate:i.close?Yo(i.close,r):void 0};if(!o.closeDate||(o.closeDate<o.openDate&&(o.openDate>n?o.openDate.setDate(o.openDate.getDate()-7):o.closeDate.setDate(o.closeDate.getDate()+7)),n>=o.openDate&&n<o.closeDate))return o}return{}}var gt;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.ALWAYS_OPEN=1]="ALWAYS_OPEN",t[t.NOT_OPEN_NOW=2]="NOT_OPEN_NOW",t[t.WILL_CLOSE=3]="WILL_CLOSE"})(gt||(gt={}));function sy(t,e=new Date){if(!t.regularOpeningHours||t.utcOffsetMinutes==null)return{status:gt.UNKNOWN};if(hu(t.regularOpeningHours))return{status:gt.ALWAYS_OPEN};const n=ih(t.regularOpeningHours,t.utcOffsetMinutes,e);if(n.period){if(!n.closeDate)return{status:gt.ALWAYS_OPEN}}else return{status:gt.NOT_OPEN_NOW};return{status:gt.WILL_CLOSE,closeDate:n.closeDate,closePoint:n.period.close}}var rt;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.NEVER_OPEN=1]="NEVER_OPEN",t[t.ALREADY_OPEN=2]="ALREADY_OPEN",t[t.WILL_OPEN=3]="WILL_OPEN"})(rt||(rt={}));function ly(t,e=new Date){if(!t.regularOpeningHours||t.utcOffsetMinutes==null)return{status:rt.UNKNOWN};if(hu(t.regularOpeningHours))return{status:rt.ALREADY_OPEN};const n=rh(e,t.utcOffsetMinutes),r={status:rt.NEVER_OPEN};let i=1/0;for(const o of t.regularOpeningHours.periods){const s=Yo(o.open,n);if(!o.close)return{status:rt.ALREADY_OPEN};const l=Yo(o.close,n);if(l>=s&&e>=s&&e<l)return{status:rt.ALREADY_OPEN};if(l<s&&!(e>=l&&e<s))return{status:rt.ALREADY_OPEN};s<e&&s.setDate(s.getDate()+7);const a=s.valueOf()-e.valueOf();a<i&&(i=a,r.status=rt.WILL_OPEN,r.openPoint=o.open,r.openDate=s)}return r}function ay(t,e=new Date){if(!t.regularOpeningHours||t.utcOffsetMinutes==null)return;if(hu(t.regularOpeningHours))return!0;const{period:n}=ih(t.regularOpeningHours,t.utcOffsetMinutes,e);return!!n}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function oh(t){return!t.hasOwnProperty("id")}function oa(t){var e,n,r,i;return uy(t)?{location:(n=(e=t.location)==null?void 0:e.toJSON())!=null?n:void 0,placeId:t.id,query:(i=(r=t.formattedAddress)!=null?r:t.displayName)!=null?i:void 0}:cy(t)?{location:t.toJSON()}:{location:t}}function uy(t){return t.hasOwnProperty("id")}function cy(t){return typeof t.lat=="function"}const sh=Object.freeze({FREE:0,INEXPENSIVE:1,MODERATE:2,EXPENSIVE:3,VERY_EXPENSIVE:4}),dy=Object.freeze(Object.fromEntries(Object.entries(sh).map(t=>t.reverse())));function py(t){var e;return typeof t=="number"?t:(e=sh[t])!=null?e:null}function fy(t){var e;return typeof t!="number"?t:(e=dy[t])!=null?e:null}function lh(t,e){return e?S`<a href=${e} target="_blank">${t}</a>`:S`<span>${t}</span>`}async function wi(t,e){var o;const n=await G.importLibrary("places",e),r=new n.Place({id:(o=t.place_id)!=null?o:"PLACE_ID_MISSING"});let i=Kc(t);return new Proxy(r,{get(s,l,a){if(l==="fetchFields")return async c=>{const f=c.fields.filter(g=>i[g]===void 0);try{return await s.fetchFields({...c,fields:f})}catch(g){if(Ko(g,"fetchFields()")){const v=uh(f);if(!v.length)return{place:r};const _=await gy(n,r.id,v);return i={...Kc(_),...i},{place:r}}throw g}};if(l==="isOpen")return async c=>{try{return await Reflect.get(s,l,a).apply(a,[c])}catch(p){if(Ko(p,"isOpen()"))return ay(a,c);throw p}};const u=i[l];return u===void 0?Reflect.get(s,l,a):u}})}function ah(t){return!!(t.businessStatus&&t.regularOpeningHours&&t.utcOffsetMinutes!=null)}function Kc(t){var n,r,i;const e={};if(t.address_components!==void 0&&(e.addressComponents=t.address_components.map(o=>({longText:o.long_name,shortText:o.short_name,types:o.types}))),t.adr_address!==void 0&&(e.adrFormatAddress=t.adr_address),t.business_status!==void 0&&(e.businessStatus=t.business_status),t.formatted_address!==void 0&&(e.formattedAddress=t.formatted_address),t.formatted_phone_number!==void 0&&(e.nationalPhoneNumber=t.formatted_phone_number),t.geometry!==void 0){const o=t.geometry;o.location&&(e.location=o.location),o.viewport&&(e.viewport=o.viewport)}if(t.html_attributions!==void 0&&(e.attributions=t.html_attributions.map(o=>{const{text:s,url:l}=Vc(o);return{provider:s!=null?s:"",providerURI:l!=null?l:null}})),t.icon_background_color!==void 0&&(e.iconBackgroundColor=t.icon_background_color),t.icon_mask_base_uri!==void 0&&(e.svgIconMaskURI=t.icon_mask_base_uri),t.international_phone_number!==void 0&&(e.internationalPhoneNumber=t.international_phone_number),t.name!==void 0&&(e.displayName=t.name),t.opening_hours!==void 0){const o=(n=t.opening_hours.periods)==null?void 0:n.map(s=>({open:qc(s.open),close:s.close?qc(s.close):null}));e.regularOpeningHours={periods:o!=null?o:[],weekdayDescriptions:(r=t.opening_hours.weekday_text)!=null?r:[]}}return t.photos!==void 0&&(e.photos=t.photos.map(o=>({authorAttributions:o.html_attributions.map(l=>{const{text:a,url:u}=Vc(l);return{displayName:a!=null?a:"",photoURI:"",uri:u||""}}),getURI:o.getUrl,heightPx:o.height,widthPx:o.width}))),t.place_id!==void 0&&(e.id=t.place_id),t.plus_code!==void 0&&(e.plusCode={compoundCode:(i=t.plus_code.compound_code)!=null?i:null,globalCode:t.plus_code.global_code}),t.price_level!==void 0&&(e.priceLevel=fy(t.price_level)),t.rating!==void 0&&(e.rating=t.rating),t.reviews!==void 0&&(e.reviews=t.reviews.map(o=>{var s;return{authorAttribution:{displayName:o.author_name,photoURI:o.profile_photo_url,uri:o.author_url||""},publishTime:new Date(o.time),rating:(s=o.rating)!=null?s:null,relativePublishTimeDescription:o.relative_time_description,text:o.text,textLanguageCode:o.language}})),t.types!==void 0&&(e.types=t.types),t.url!==void 0&&(e.googleMapsURI=t.url),t.user_ratings_total!==void 0&&(e.userRatingCount=t.user_ratings_total),t.utc_offset_minutes!==void 0&&(e.utcOffsetMinutes=t.utc_offset_minutes),t.website!==void 0&&(e.websiteURI=t.website),e}function qc({day:t,hours:e,minutes:n}){return{day:t,hour:e,minute:n}}const hy={addressComponents:"address_components",adrFormatAddress:"adr_address",businessStatus:"business_status",formattedAddress:"formatted_address",nationalPhoneNumber:"formatted_phone_number",location:"geometry",viewport:"geometry",iconBackgroundColor:"icon_background_color",svgIconMaskURI:"icon_mask_base_uri",internationalPhoneNumber:"international_phone_number",displayName:"name",regularOpeningHours:"opening_hours",photos:"photos",plusCode:"plus_code",priceLevel:"price_level",rating:"rating",reviews:"reviews",types:"types",googleMapsURI:"url",userRatingCount:"user_ratings_total",utcOffsetMinutes:"utc_offset_minutes",websiteURI:"website",id:"place_id"};function uh(t){const e=[];for(const n of t){const r=hy[n];r&&e.push(r)}return e}function Ko(t,e){return t instanceof Error?t.message.startsWith(`Place.prototype.${e} is not available`)||t.message.startsWith(`google.maps.places.Place.${e} is not available`):!1}async function gy(t,e,n){const r=new t.PlacesService(document.createElement("div"));return new Promise((i,o)=>{r.getDetails({placeId:e,fields:n},(s,l)=>{s&&l==="OK"?i(s):o(l)})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let gu=class extends Event{constructor(e,n,r){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=n,this.subscribe=r!=null?r:!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Qc=class{constructor(e,n,r,i){var o;if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,l)=>{this.unsubscribe&&(this.unsubscribe!==l&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,l)),this.unsubscribe=l},this.host=e,n.context!==void 0){const s=n;this.context=s.context,this.callback=s.callback,this.subscribe=(o=s.subscribe)!=null?o:!1}else this.context=n,this.callback=r,this.subscribe=i!=null?i:!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new gu(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let my=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,n=!1){const r=n||!Object.is(e,this.o);this.o=e,r&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[n,{disposer:r}]of this.subscriptions)n(this.o,r)},e!==void 0&&(this.value=e)}addCallback(e,n,r){if(!r)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:n});const{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vy=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class sa extends my{constructor(e,n,r){var i,o;super(n.context!==void 0?n.initialValue:r),this.onContextRequest=s=>{const l=s.composedPath()[0];s.context===this.context&&l!==this.host&&(s.stopPropagation(),this.addCallback(s.callback,l,s.subscribe))},this.onProviderRequest=s=>{const l=s.composedPath()[0];if(s.context!==this.context||l===this.host)return;const a=new Set;for(const[u,{consumerHost:c}]of this.subscriptions)a.has(u)||(a.add(u),c.dispatchEvent(new gu(this.context,u,!0)));s.stopPropagation()},this.host=e,n.context!==void 0?this.context=n.context:this.context=n,this.attachListeners(),(o=(i=this.host).addController)==null||o.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new vy(this.context))}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let yy=class{constructor(){this.pendingContextRequests=new Map,this.onContextProvider=e=>{const n=this.pendingContextRequests.get(e.context);if(n===void 0)return;this.pendingContextRequests.delete(e.context);const{requests:r}=n;for(const{elementRef:i,callbackRef:o}of r){const s=i.deref(),l=o.deref();s===void 0||l===void 0||s.dispatchEvent(new gu(e.context,l,!0))}},this.onContextRequest=e=>{if(e.subscribe!==!0)return;const n=e.composedPath()[0],r=e.callback;let i=this.pendingContextRequests.get(e.context);i===void 0&&this.pendingContextRequests.set(e.context,i={callbacks:new WeakMap,requests:[]});let o=i.callbacks.get(n);o===void 0&&i.callbacks.set(n,o=new WeakSet),o.has(r)||(o.add(r),i.requests.push({elementRef:new WeakRef(n),callbackRef:new WeakRef(r)}))}}attach(e){e.addEventListener("context-request",this.onContextRequest),e.addEventListener("context-provider",this.onContextProvider)}detach(e){e.removeEventListener("context-request",this.onContextRequest),e.removeEventListener("context-provider",this.onContextProvider)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ch({context:t}){return(e,n)=>{const r=new WeakMap;if(typeof n=="object")return n.addInitializer(function(){r.set(this,new sa(this,{context:t}))}),{get(){return e.get.call(this)},set(i){var o;return(o=r.get(this))==null||o.setValue(i),e.set.call(this,i)},init(i){var o;return(o=r.get(this))==null||o.setValue(i),i}};{e.constructor.addInitializer(s=>{r.set(s,new sa(s,{context:t}))});const i=Object.getOwnPropertyDescriptor(e,n);let o;if(i===void 0){const s=new WeakMap;o={get:function(){return s.get(this)},set:function(l){r.get(this).setValue(l),s.set(this,l)},configurable:!0,enumerable:!0}}else{const s=i.set;o={...i,set:function(l){r.get(this).setValue(l),s==null||s.call(this,l)}}}return void Object.defineProperty(e,n,o)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ws({context:t,subscribe:e}){return(n,r)=>{typeof r=="object"?r.addInitializer(function(){new Qc(this,{context:t,callback:i=>{this[r.name]=i},subscribe:e})}):n.constructor.addInitializer(i=>{new Qc(i,{context:t,callback:o=>{i[r]=o},subscribe:e})})}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Xc=!1;function wy(){if(Xc)return;new yy().attach(document.body),Xc=!0}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */wy();const mu=Symbol("place"),dh=Symbol("place-consumer-registration");class Ce extends Oe{constructor(){super(...arguments),this.noData=!0}get place(){return this.placeInternal}set place(e){this.placeInternal=e,this.updatePlaceV2(e)}willUpdate(e){var r;e.has("contextPlace")&&!this.placeV2&&this.placeChangedCallback(this.contextPlace,e.get("contextPlace"));const n=this.getPlace();this.noData=!(n&&this.placeHasData(n)),e.has("contextRegistration")&&((r=this.contextRegistration)==null||r.registerPlaceConsumer(this))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.contextRegistration)==null||e.unregisterPlaceConsumer(this)}placeChangedCallback(e,n){}placeHasData(e){return!0}getPlace(){var e;return(e=this.placeV2)!=null?e:this.contextPlace}async updatePlaceV2(e){const n=this.getPlace();!e||!oh(e)?this.placeV2=e:this.placeV2=await wi(e,this),this.placeChangedCallback(this.placeV2,n)}}y([ws({context:dh,subscribe:!0}),x({attribute:!1}),w("design:type",Object)],Ce.prototype,"contextRegistration",void 0);y([ws({context:mu,subscribe:!0}),x({attribute:!1}),w("design:type",Object)],Ce.prototype,"contextPlace",void 0);y([x({type:Boolean,attribute:"no-data",reflect:!0}),w("design:type",Object)],Ce.prototype,"noData",void 0);y([fe(),w("design:type",Object)],Ce.prototype,"placeV2",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ln=class extends Ce{render(){const e=this.getPlace();if(!(e&&this.placeHasData(e)))return S``;const n=e.attributions||[];return S`${ia(Rn(n,this.makeAttributionHTML),S`<span class="sep">, </span>`)}`}getRequiredFields(){return["attributions"]}placeHasData(e){return!!(e.attributions&&e.attributions.length>0)}makeAttributionHTML(e){return lh(e.provider,e.providerURI)}};Ln.styles=j`
    a {
      color: inherit;
      text-decoration: inherit;
    }

    a:hover {
      text-decoration: underline;
    }
  `;Ln=y([K("gmpx-place-attribution")],Ln);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vu=(t,e,n)=>{for(const r of e)if(r[0]===t)return(0,r[1])();return n==null?void 0:n()};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class _s extends Event{constructor(e){super("gmpx-requesterror",{bubbles:!1,composed:!1}),this.error=e}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ti={fromAttribute(t){if(t===null)return;const[e,n]=t.split(",").map(r=>Number(r.trim()));return{lat:e||0,lng:n||0}},toAttribute(t){return t?`${t.lat},${t.lng}`:null}},ph={fromAttribute(t){var e;return(e=t==null?void 0:t.split(/\s+/).filter(n=>n!==""))!=null?e:void 0},toAttribute(t){var e;return(e=t==null?void 0:t.join(" "))!=null?e:null}};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class fh{constructor(e){this.capacity=e,this.map=new Map}has(e){return this.reinsertIfPresent(e),this.map.has(e)}get(e){return this.reinsertIfPresent(e),this.map.get(e)}set(e,n){if(this.delete(e),this.map.set(e,n),this.map.size>this.capacity){const[r]=this.map.keys();this.map.delete(r)}}delete(e){this.map.has(e)&&this.map.delete(e)}reinsertIfPresent(e){if(this.map.has(e)){const n=this.map.get(e);this.map.delete(e),this.map.set(e,n)}}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function _y(t,e){const{Place:n}=await G.importLibrary("places",e);return new n({id:t})}class Ey{constructor(e,n){this.consumer=n,this.cache=new fh(e)}getPlace(e){const n=this.cache.get(e);if(n)return n;const r=_y(e,this.consumer);return this.cache.set(e,r),r}updatePlace(e){this.cache.set(e.id,Promise.resolve(e))}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Fn,et;(function(t){t.EMPTY="EMPTY",t.LOADING="LOADING",t.LOADED="LOADED",t.ERROR="ERROR"})(et||(et={}));const Sy=100;let wt=Fn=class extends Oe{constructor(){super(...arguments),this.autoFetchDisabled=!1,this.contextRegistration={registerPlaceConsumer:e=>void this.registerPlaceConsumer(e),unregisterPlaceConsumer:e=>void this.unregisterPlaceConsumer(e)},this.loadingState=et.EMPTY,this.slotValidator=new ys(this,this.logger,["","initial-loading","error"]),this.placeConsumers=new Set,this.placeAttributions=new Set,this.placeContextProvider=new sa(this,{context:mu})}get contextPlace(){return this.placeContextProvider.value}set contextPlace(e){this.placeContextProvider.setValue(e,!0)}render(){return vu(this.loadingState,[[et.EMPTY,()=>S``],[et.LOADING,()=>S`<slot name="initial-loading"></slot>`],[et.LOADED,()=>S`<slot></slot>`],[et.ERROR,()=>S`<slot name="error"></slot>`]])}async updated(e){if(e.has("place"))try{await this.updatePlace()}catch(n){this.handleError(n)}}async updatePlace(){var e;if(this.loadingState=et.LOADING,this.place)typeof this.place=="string"?this.contextPlace=await Fn.placeLookup.getPlace(this.place):oh(this.place)?(this.contextPlace=await wi(this.place,this),Fn.placeLookup.updatePlace(this.contextPlace)):(this.contextPlace=this.place,Fn.placeLookup.updatePlace(this.contextPlace));else{this.contextPlace=void 0,this.loadingState=et.EMPTY;return}if(typeof this.place=="string"||!this.autoFetchDisabled){let n;(e=this.fields)!=null&&e.length?n=this.fields:(await 0,n=this.getConsumerFields());try{await this.contextPlace.fetchFields({fields:n})}catch(r){if(Ko(r,"fetchFields()"))this.contextPlace=await wi({place_id:this.contextPlace.id}),Fn.placeLookup.updatePlace(this.contextPlace),await this.contextPlace.fetchFields({fields:n});else throw r}for(const r of this.placeConsumers)r.requestUpdate("contextPlace",r.contextPlace,{hasChanged:()=>!0})}this.appendAttributionIfAbsent(),this.loadingState=et.LOADED}registerPlaceConsumer(e){this.placeConsumers.add(e),e instanceof Ln&&this.placeAttributions.add(e)}unregisterPlaceConsumer(e){this.placeConsumers.delete(e),e instanceof Ln&&this.placeAttributions.delete(e)}getConsumerFields(){const e=new Set;for(const n of this.placeConsumers)for(const r of n.getRequiredFields())e.add(r);return Array.from(e.values())}appendAttributionIfAbsent(){this.placeAttributions.size===0&&this.appendChild(new Ln)}handleError(e){this.loadingState=et.ERROR;const n=new _s(e);this.dispatchEvent(n)}};wt.placeLookup=new Ey(Sy);y([x({type:Boolean,attribute:"auto-fetch-disabled",reflect:!0}),w("design:type",Object)],wt.prototype,"autoFetchDisabled",void 0);y([x({converter:ph,reflect:!0}),w("design:type",Array)],wt.prototype,"fields",void 0);y([x({type:String,hasChanged:()=>!0}),w("design:type",Object)],wt.prototype,"place",void 0);y([ch({context:dh}),x({attribute:!1}),w("design:type",Object)],wt.prototype,"contextRegistration",void 0);y([fe(),w("design:type",Object)],wt.prototype,"loadingState",void 0);wt=Fn=y([K("gmpx-place-data-provider")],wt);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Cy(t,e){let n="https://www.google.com/maps/dir/?api=1";return t&&(n=Zc(n,"origin",t)),e&&(n=Zc(n,"destination",e)),n}function Zc(t,e,n){return n.placeId&&(t+=`&${e}_place_id=${n.placeId}`),n.query?t+=`&${e}=${encodeURIComponent(n.query)}`:n.location?t+=`&${e}=${n.location.lat},${n.location.lng}`:n.placeId&&(t+=`&${e}=${encodeURIComponent("Selected Place")}`),t}let bt=class extends Ce{constructor(){super(...arguments),this.ariaLabel=null,this.condensed=!1,this.reversed=!1,this.variant="outlined"}render(){return S`
      <gmpx-icon-button
        .ariaLabel=${this.ariaLabel}
        .condensed=${this.condensed}
        .href=${this.getHref()}
        icon="directions"
        .variant=${this.variant}
      >
        <slot></slot>
      </gmpx-icon-button>
    `}updated(){this.role=this.ariaLabel!=null?"none":null}getRequiredFields(){return["displayName","formattedAddress","location"]}placeHasData(e){return!0}getHref(){const e=this.getPlace(),n=this.reversed?e:this.origin,r=this.reversed?this.origin:e;return Cy(n?oa(n):void 0,r?oa(r):void 0)}};bt.shadowRootOptions={...Ce.shadowRootOptions,delegatesFocus:!0};y([x({attribute:"aria-label",reflect:!0,type:String}),w("design:type",Object)],bt.prototype,"ariaLabel",void 0);y([x({reflect:!0,type:Boolean}),w("design:type",Object)],bt.prototype,"condensed",void 0);y([x({attribute:!1}),w("design:type",Object)],bt.prototype,"origin",void 0);y([x({reflect:!0,type:Boolean}),w("design:type",Object)],bt.prototype,"reversed",void 0);y([x({reflect:!0,type:String}),w("design:type",String)],bt.prototype,"variant",void 0);bt=y([K("gmpx-place-directions-button")],bt);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class hh{start(e,n){this.stop(),this.updateTimeout(e,n)}stop(){this.timeoutId!=null&&(clearTimeout(this.timeoutId),this.timeoutId=void 0)}updateTimeout(e,n){this.timeoutId=setTimeout(()=>{e(),this.updateTimeout(e,n)},n)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const xy={"isOpen()":60*1e3};function eo(t){return t==="opening_hours.isOpen()"?"isOpen()":t}async function Ly(t){if(t&&ah(t))return await t.isOpen()}function gh(t,e){var n;switch(e){case"hasCurbsidePickup":return t.hasCurbsidePickup;case"hasDelivery":return t.hasDelivery;case"hasDineIn":return t.hasDineIn;case"hasTakeout":return t.hasTakeout;case"hasWheelchairAccessibleEntrance":return(n=t.accessibilityOptions)==null?void 0:n.hasWheelchairAccessibleEntrance;case"isReservable":return t.isReservable;case"servesBeer":return t.servesBeer;case"servesBreakfast":return t.servesBreakfast;case"servesBrunch":return t.servesBrunch;case"servesDinner":return t.servesDinner;case"servesLunch":return t.servesLunch;case"servesVegetarianFood":return t.servesVegetarianFood;case"servesWine":return t.servesWine;default:return}}function ky(t){return t==="isOpen()"}async function Py(t,e){return e==="isOpen()"?Ly(t):null}function Ay(t,e){var n;return(n=gh(t,e))!=null?n:null}let _i=class extends Ce{constructor(){super(...arguments),this.poll=new hh}render(){return S`${vu(this.valueToRender,[[!0,()=>S`<slot name="true"></slot>`],[!1,()=>S`<slot name="false"></slot>`]],()=>S``)}`}getRequiredFields(){if(!this.field)return[];const e=eo(this.field);switch(e){case"isOpen()":return["businessStatus","regularOpeningHours","utcOffsetMinutes"];case"hasWheelchairAccessibleEntrance":return["accessibilityOptions"];default:return[e]}}placeHasData(e){if(!this.field)return!1;const n=eo(this.field);return n==="isOpen()"?ah(e):gh(e,n)!=null}async getUpdateComplete(){const e=await super.getUpdateComplete();return this.asyncRenderComplete&&await this.asyncRenderComplete.promise,e}willUpdate(e){if(super.willUpdate(e),this.updateValueToRender(),e.has("field")&&(this.poll.stop(),this.field)){const n=xy[eo(this.field)];n&&this.poll.start(()=>void this.requestUpdate(),n)}}disconnectedCallback(){super.disconnectedCallback(),this.poll.stop(),this.resetAsyncRenderPromise()}updateValueToRender(){const e=this.getPlace();if(this.resetAsyncRenderPromise(),!e||!this.field){this.valueToRender=void 0;return}const n=eo(this.field);ky(n)?(this.asyncRenderComplete=new rn,Py(e,n).then(r=>{var i;this.valueToRender=r,(i=this.asyncRenderComplete)==null||i.resolve()})):this.valueToRender=Ay(e,n)}resetAsyncRenderPromise(){var e;(e=this.asyncRenderComplete)==null||e.resolve(),this.asyncRenderComplete=void 0}};y([x({type:String,reflect:!0}),w("design:type",String)],_i.prototype,"field",void 0);y([fe(),w("design:type",Object)],_i.prototype,"valueToRender",void 0);_i=y([K("gmpx-place-field-boolean")],_i);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function la(t){switch(t){case"url":return"googleMapsURI";case"website":return"websiteURI";default:return t}}function Jc(t,e){switch(la(e)){case"googleMapsURI":return t.googleMapsURI;case"websiteURI":return t.websiteURI;default:return}}function $y(t){const e=t.match(/^(https?:\/\/)?(www\.)?([^\/\?]+)/);return e&&e.length>3?e[3]:t}let hr=class extends Ce{constructor(){super(...arguments),this.hrefField="websiteURI",this.ariaLabel=null}render(){const e=this.getHref();return S`${ge(e,()=>{var n;return S`
      <a target="_blank" rel="noopener noreferrer" href=${e}
          aria-label=${(n=this.ariaLabel)!=null?n:U}>
        ${ge(this.hasContentForSlot(),()=>S`<slot></slot>`,()=>S`${this.getDefaultLinkText(e)}`)}
      </a>
    `})}`}updated(){this.role=this.ariaLabel!=null?"none":null}getRequiredFields(){return[la(this.hrefField)]}placeHasData(e){return Jc(e,this.hrefField)!=null}getHref(){var n;const e=this.getPlace();return e&&(n=Jc(e,this.hrefField))!=null?n:null}hasContentForSlot(){var e;return!!((e=this.textContent)!=null&&e.trim()||this.children.length>0)}getDefaultLinkText(e){switch(la(this.hrefField)){case"googleMapsURI":return"View on Google Maps";case"websiteURI":default:return $y(e)}}};hr.styles=j`
    :host(:hover) {
      text-decoration: underline;
    }

    a {
      color: inherit;
      text-decoration: inherit;
    }
  `;y([x({type:String,reflect:!0,attribute:"href-field"}),w("design:type",String)],hr.prototype,"hrefField",void 0);y([x({attribute:"aria-label",reflect:!0,type:String}),w("design:type",Object)],hr.prototype,"ariaLabel",void 0);hr=y([K("gmpx-place-field-link")],hr);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Oy=Object.freeze({LOCATOR_BACK_BUTTON_CTA:"Back",LOCATOR_LIST_HEADER:"Find a location near you",LOCATOR_LIST_SUBHEADING:"All locations",LOCATOR_LIST_SUBHEADING_WITH_SEARCH:"Nearest locations",LOCATOR_SEARCH_LOCATION_MARKER_TITLE:"My location",LOCATOR_SEARCH_PROMPT:"Enter your address or zip code",LOCATOR_VIEW_DETAILS_CTA:"View details",PLACE_CLEAR_ARIA_LABEL:"Clear",PLACE_CLOSED:"Closed",PLACE_CLOSED_PERMANENTLY:"Permanently closed",PLACE_CLOSED_TEMPORARILY:"Temporarily closed",PLACE_CLOSES:t=>`Closes ${t}`,PLACE_HAS_DELIVERY:"Delivery",PLACE_HAS_DINE_IN:"Dine-in",PLACE_HAS_TAKEOUT:"Takeout",PLACE_NO_DELIVERY:"No Delivery",PLACE_NO_DINE_IN:"No Dine-in",PLACE_NO_TAKEOUT:"No Takeout",PLACE_OPEN_ALWAYS:"Open 24 hours",PLACE_OPEN_NOW:"Open now",PLACE_OPENING_HOURS_DEFAULT_SUMMARY:"See opening hours",PLACE_OPENING_HOURS_ARIA_LABEL:"Weekly opening hours",PLACE_OPENS:t=>`Opens ${t}`,PLACE_OPERATIONAL:"Operational",PLACE_PHOTO_ALT:t=>`Photo of ${t||"place"}`,PLACE_PHOTO_ATTRIBUTION_PREFIX:"Photo by",PLACE_PHOTO_BACK_ARIA_LABEL:"Back",PLACE_PHOTO_NEXT_ARIA_LABEL:"Next",PLACE_PHOTO_PREV_ARIA_LABEL:"Previous",PLACE_PHOTO_TILE_ARIA_LABEL:t=>`Open photo ${t}`,PLACE_RATING_ARIA_LABEL:t=>t===1?"1 star":`${t} stars`,PLACE_REVIEWS_AUTHOR_PHOTO_ALT:t=>`Photo of ${t||"reviewer"}`,PLACE_REVIEWS_MORE:"More reviews",PLACE_REVIEWS_SECTION_CAPTION:"Most relevant",PLACE_REVIEWS_SECTION_HEADING:"Reviews by Google users",PLACE_SEARCH_ARIA_LABEL:"Search",PLACE_TYPE:t=>t===""?"":(t[0].toUpperCase()+t.slice(1)).replace(/_/g," ")});/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class se{constructor(e){this.host=e,e.addController(this)}hostConnected(){se.connectedComponents.add(this.host)}hostDisconnected(){se.connectedComponents.delete(this.host)}getStringLiteral(e,...n){var i;const r=(i=se.translatedStringLiterals[e])!=null?i:Oy[e];return typeof r=="string"?r:r(...n)}static setStringLiterals(e){for(const n of Object.keys(e))se.translatedStringLiterals[n]=e[n];for(const n of se.connectedComponents)n.requestUpdate()}static buildLocalizer(e){const n=new se(e);return n.getStringLiteral.bind(n)}static reset(){se.connectedComponents.clear(),se.translatedStringLiterals={}}}se.connectedComponents=new Set;se.translatedStringLiterals={};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Iy=new Set(["accounting","airport","amusement_park","aquarium","art_gallery","atm","bakery","bank","bar","beauty_salon","bicycle_store","book_store","bowling_alley","bus_station","cafe","campground","car_dealer","car_rental","car_repair","car_wash","casino","cemetery","church","city_hall","clothing_store","convenience_store","courthouse","dentist","department_store","doctor","drugstore","electrician","electronics_store","embassy","fire_station","florist","funeral_home","furniture_store","gas_station","gym","hair_care","hardware_store","hindu_temple","home_goods_store","hospital","insurance_agency","jewelry_store","laundry","lawyer","library","light_rail_station","liquor_store","local_government_office","locksmith","lodging","meal_delivery","meal_takeaway","mosque","movie_rental","movie_theater","moving_company","museum","night_club","painter","park","parking","pet_store","pharmacy","physiotherapist","plumber","police","post_office","primary_school","real_estate_agency","restaurant","roofing_contractor","rv_park","school","secondary_school","shoe_store","shopping_mall","spa","stadium","storage","store","subway_station","supermarket","synagogue","taxi_stand","tourist_attraction","train_station","transit_station","travel_agency","university","veterinary_care","zoo"]);function mh(t){switch(t){case"business_status":return"businessStatus";case"name":return"displayName";case"formatted_address":return"formattedAddress";case"place_id":return"id";case"international_phone_number":return"internationalPhoneNumber";case"geometry.location":return"location";case"geometry.location.lat":return"location.lat";case"geometry.location.lng":return"location.lng";case"formatted_phone_number":return"nationalPhoneNumber";case"plus_code.compound_code":return"plusCode.compoundCode";case"plus_code.global_code":return"plusCode.globalCode";case"rating":return"rating";case"user_ratings_total":return"userRatingCount";default:return t}}function Ny(t){return mh(t).split(".")[0]}let qo=class extends Ce{constructor(){super(...arguments),this.getMsg=se.buildLocalizer(this)}render(){return S`<span>${this.getDisplayText()}</span>`}getRequiredFields(){return this.field?[Ny(this.field)]:[]}placeHasData(e){return!!(this.field&&this.getFieldValue(e,this.field)!=null)}getDisplayText(){var n;const e=this.getPlace();return!e||!this.field?"":(n=this.getFieldValue(e,this.field))!=null?n:""}getFieldValue(e,n){var r,i,o,s,l,a,u;switch(mh(n)){case"businessStatus":return this.renderBusinessStatus(e.businessStatus);case"displayName":return e.displayName;case"formattedAddress":return e.formattedAddress;case"id":return e.id;case"internationalPhoneNumber":return e.internationalPhoneNumber;case"location":return(r=e.location)==null?void 0:r.toString();case"location.lat":return(i=e.location)==null?void 0:i.lat().toString();case"location.lng":return(o=e.location)==null?void 0:o.lng().toString();case"nationalPhoneNumber":return e.nationalPhoneNumber;case"plusCode.compoundCode":return(s=e.plusCode)==null?void 0:s.compoundCode;case"plusCode.globalCode":return(l=e.plusCode)==null?void 0:l.globalCode;case"rating":return(a=e.rating)==null?void 0:a.toString();case"types":return e.types&&this.getDisplayType(e.types);case"userRatingCount":return(u=e.userRatingCount)==null?void 0:u.toString();default:return}}renderBusinessStatus(e){if(!e)return e;switch(e){case"CLOSED_PERMANENTLY":return this.getMsg("PLACE_CLOSED_PERMANENTLY");case"CLOSED_TEMPORARILY":return this.getMsg("PLACE_CLOSED_TEMPORARILY");case"OPERATIONAL":return this.getMsg("PLACE_OPERATIONAL");default:return}}getDisplayType(e){for(const n of e)if(Iy.has(n))return this.getMsg("PLACE_TYPE",n);return null}};y([x({type:String,reflect:!0}),w("design:type",String)],qo.prototype,"field",void 0);qo=y([K("gmpx-place-field-text")],qo);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ty=60*1e3;let gr=class extends Ce{constructor(){super(...arguments),this.summaryOnly=!1,this.expanded=!1,this.poll=new hh,this.fontLoader=new un(this,[ye.MATERIAL_SYMBOLS_OUTLINED]),this.getMsg=se.buildLocalizer(this)}disconnectedCallback(){super.disconnectedCallback(),this.poll.stop()}willUpdate(e){super.willUpdate(e),this.poll.stop(),this.getPlace()&&this.poll.start(()=>void this.requestUpdate(),Ty)}render(){const e=this.getPlace();if(!e)return U;if(!e.regularOpeningHours)return e.businessStatus==="OPERATIONAL"?U:S`
        <div class="closed">
          <gmpx-place-field-text field="businessStatus" .place=${e}>
          </gmpx-place-field-text>
        </div>
      `;const{weekdayDescriptions:n}=e.regularOpeningHours;let r;return e.utcOffsetMinutes==null?r=this.summaryOnly?S``:S`${this.getMsg("PLACE_OPENING_HOURS_DEFAULT_SUMMARY")}`:r=S`
        <gmpx-place-field-boolean field="isOpen()" .place=${e}>
          <div slot="true">${this.getOpenSummaryContent(e)}</div>
          <div slot="false">${this.getClosedSummaryContent(e)}</div>
        </gmpx-place-field-boolean>
      `,this.summaryOnly?r:S`
      <button
        aria-controls="details"
        aria-expanded=${this.expanded}
        @click=${()=>this.expanded=!this.expanded}
        type="button"
      >
        ${r}
        <span aria-hidden="true" class="icon material-symbols-outlined">
          ${this.expanded?"expand_less":"expand_more"}
        </span>
      </button>
      <div
        aria-label=${this.getMsg("PLACE_OPENING_HOURS_ARIA_LABEL")}
        .hidden=${!this.expanded}
        id="details"
        role="region"
      >
        <ul>
          ${Rn(n,i=>S`
            <li>${i}</li>
          `)}
        </ul>
      </div>
    `}getRequiredFields(){return["businessStatus","regularOpeningHours","utcOffsetMinutes"]}placeHasData(e){return e.businessStatus==="OPERATIONAL"&&!e.regularOpeningHours?!1:!!(e.businessStatus||e.regularOpeningHours)}getOpenSummaryContent(e){const{status:n,closePoint:r,closeDate:i}=sy(e),o=S`<span class="open">${this.getMsg("PLACE_OPEN_NOW")}</span>`;return n===gt.ALWAYS_OPEN?S`<span class="open">${this.getMsg("PLACE_OPEN_ALWAYS")}</span>`:n===gt.WILL_CLOSE&&nh(i)?S`
        ${o}
        ·
        <span>${this.getMsg("PLACE_CLOSES",Yc(r,i))}</span>
      `:(gt.NOT_OPEN_NOW,o)}getClosedSummaryContent(e){const{status:n,openPoint:r,openDate:i}=ly(e);let o=S``;return n===rt.WILL_OPEN?o=S` · <span>${this.getMsg("PLACE_OPENS",Yc(r,i))}</span>`:rt.ALREADY_OPEN,S`
      <span class="closed">${this.getMsg("PLACE_CLOSED")}</span>
      ${o}
    `}};gr.styles=j`
    button {
      align-items: center;
      background: none;
      border: none;
      color: inherit;
      cursor: pointer;
      display: flex;
      font: inherit;
      padding: 0;
    }

    span {
      display: inline-block;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    .closed {
      color: var(--gmpx-hours-color-closed, #d50000);
    }

    .open {
      color: var(--gmpx-hours-color-open, #188038);
    }

    .icon {
      direction: inherit;
      font-size: inherit;
      margin-inline-start: 1rem;
    }
  `;y([x({attribute:"summary-only",reflect:!0,type:Boolean}),w("design:type",Object)],gr.prototype,"summaryOnly",void 0);y([fe(),w("design:type",Object)],gr.prototype,"expanded",void 0);gr=y([K("gmpx-place-opening-hours")],gr);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let ed=class extends Oe{connectedCallback(){super.connectedCallback(),this.observer=new MutationObserver(()=>{this.hidden=!!this.querySelector("[no-data]")}),this.observer.observe(this,{subtree:!0,attributeFilter:["no-data"]})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.observer)==null||e.disconnect()}render(){return S`<slot></slot>`}};ed=y([K("gmpx-optional-data-container-internal")],ed);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class vh{constructor(e,n){this.shouldRetry=n,this.requestCacheMap=new fh(e)}get(e){var n;return(n=this.requestCacheMap.get(this.serialize(e)))!=null?n:null}set(e,n){const r=this.serialize(e);this.requestCacheMap.set(r,n),n.catch(i=>{this.shouldRetry(i)&&this.requestCacheMap.delete(r)})}serialize(e){return JSON.stringify(e,(r,i)=>{if(i instanceof Object&&!(i instanceof Array)){const o=i,s={};for(const l of Object.keys(o).sort())s[l]=o[l];return s}else return i})}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ry=100;function yh(){return new vh(Ry,t=>t.code==="OVER_QUERY_LIMIT"||t.code==="UNKNOWN_ERROR")}class it{constructor(e){this.host=e,this.host.addController(this)}hostUpdate(){}async route(e){let n=it.cache.get(e);n===null&&(n=this.getService().then(r=>r.route(e)),it.cache.set(e,n));try{return await n}catch(r){const i=new _s(r);return this.host.dispatchEvent(i),null}}async getService(){if(!it.service){const{DirectionsService:e}=await G.importLibrary("routes",this.host);it.service=new e}return it.service}static reset(){it.cache=yh(),it.service=void 0}}it.cache=yh();/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function My(t){switch(t){case"bicycling":return"directions_bike";case"transit":return"directions_subway";case"walking":return"directions_walk";default:return"directions_car"}}function td(t){if(!t)return null;const{placeId:e,location:n,query:r}=oa(t);return e?{placeId:e}:n?{location:n}:r?{query:r}:null}let mr=class extends Ce{constructor(){super(...arguments),this.fontLoader=new un(this,[ye.MATERIAL_SYMBOLS_OUTLINED]),this.directionsController=new it(this),this.isFetchingDirectionsData=!1}willUpdate(e){super.willUpdate(e),(e.has("origin")||e.has("travelMode"))&&this.updateDirectionsData()}placeChangedCallback(e,n){(e==null?void 0:e.id)!==(n==null?void 0:n.id)&&this.updateDirectionsData()}render(){var r;const{distance:e,duration:n}=(r=this.directionsData)!=null?r:{};return this.isFetchingDirectionsData||!e?S``:this.travelMode&&n?S`
      <span class="icon material-symbols-outlined">
        ${My(this.travelMode)}
      </span>
      <span>${n.text}</span>
    `:S`<span>${e.text}</span>`}getRequiredFields(){return[]}placeHasData(){return this.directionsData!=null}async updateDirectionsData(){var i,o,s;if(this.isFetchingDirectionsData)return;const e=this.getPlace(),n=td(this.origin),r=td(e);if(n&&r){this.isFetchingDirectionsData=!0;const l=await this.directionsController.route({origin:n,destination:r,travelMode:(o=(i=this.travelMode)==null?void 0:i.toUpperCase())!=null?o:"DRIVING"});this.directionsData=(s=l==null?void 0:l.routes[0])==null?void 0:s.legs[0],this.requestUpdate()}else this.directionsData=void 0;this.isFetchingDirectionsData=!1}};mr.styles=j`
    .icon {
      font-size: inherit;
      line-height: inherit;
      vertical-align: bottom;
    }
  `;y([x({attribute:"travel-mode",reflect:!0,type:String}),w("design:type",String)],mr.prototype,"travelMode",void 0);y([x({attribute:!1}),w("design:type",Object)],mr.prototype,"origin",void 0);y([fe(),w("design:type",Object)],mr.prototype,"directionsData",void 0);mr=y([K("gmpx-place-distance-label-internal")],mr);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const by=t=>t!=null?t:U;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class wh{get isKeyboardNavigating(){var e;return(e=this.isKeyboardNavigatingInternal)!=null?e:!1}constructor(e,n){this.host=e,this.changeCallback=n,this.mousedownEventListener=()=>{this.isKeyboardNavigatingInternal!==!1&&(this.isKeyboardNavigatingInternal=!1,this.changeCallback&&this.changeCallback(!1))},this.keydownEventListener=({key:r})=>{r!=="Tab"&&r!=="Enter"||this.isKeyboardNavigatingInternal!==!0&&(this.isKeyboardNavigatingInternal=!0,this.changeCallback&&this.changeCallback(!0))},this.host.addController(this)}hostConnected(){document.addEventListener("keydown",this.keydownEventListener),document.addEventListener("mousedown",this.mousedownEventListener)}hostDisconnected(){document.removeEventListener("keydown",this.keydownEventListener),document.removeEventListener("mousedown",this.mousedownEventListener)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const nd=4800,Qo=1200,rl=j`calc(${Le} * 0.5)`;function to(t,e){const n=Math.ceil(t*window.devicePixelRatio);return Math.min(n,e)}function Dy(t,e){const n=t.widthPx/t.heightPx,r=window.innerWidth/window.innerHeight,i=e.widthPx/e.heightPx,o=n>r?{maxHeight:to(window.innerHeight,nd)}:{maxWidth:to(window.innerWidth,nd)},s=n>i?{maxHeight:to(e.heightPx,Qo)}:{maxWidth:to(e.widthPx,Qo)};return{uri:t.getURI(o),tileUri:t.getURI(s),attributions:t.authorAttributions}}function zy(t){t.key==="Escape"&&t.stopPropagation()}let _t=class extends Ce{constructor(){super(...arguments),this.selectedIndex=0,this.focusController=new wh(this,e=>{var n,r;e?(n=this.containerElement)==null||n.classList.remove("hide-focus-ring"):(r=this.containerElement)==null||r.classList.add("hide-focus-ring")}),this.fontLoader=new un(this,[ye.GOOGLE_SANS_TEXT,ye.MATERIAL_SYMBOLS_OUTLINED]),this.keydownEventListener=({key:e})=>{var n;if((n=this.lightboxElement)!=null&&n.open)switch(e){case"ArrowLeft":this.isRTL()?this.navigateToNext():this.navigateToPrevious();break;case"ArrowRight":this.isRTL()?this.navigateToPrevious():this.navigateToNext();break}},this.getMsg=se.buildLocalizer(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.keydownEventListener)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.keydownEventListener)}render(){var l;const e=this.getFormattedPhotos(),n=e[this.selectedIndex],r=(l=this.getPlace())==null?void 0:l.displayName,i=S`
      <div class="info-card">
        <button
          aria-label=${this.getMsg("PLACE_PHOTO_BACK_ARIA_LABEL")}
          autofocus
          @click=${this.closeLightbox}
        >
          <span aria-hidden="true" class="icon material-symbols-outlined">
            ${this.isRTL()?"arrow_forward":"arrow_back"}
          </span>
        </button>
        <div class="text-container">
          ${ge(r,()=>S`<div class="title">${r}</div>`)}
          ${ge(n==null?void 0:n.attributions.length,()=>S`
            <div class="caption">
              <span>${this.getMsg("PLACE_PHOTO_ATTRIBUTION_PREFIX")}</span>
              ${Rn(n.attributions,({displayName:a,uri:u})=>S`${lh(a,u!=null?u:null)} `)}
            </div>
          `)}
        </div>
      </div>
    `,o=S`
      <div class="nav-controls">
        <button
          aria-label=${this.getMsg("PLACE_PHOTO_PREV_ARIA_LABEL")}
          @click=${this.navigateToPrevious}
          .disabled=${this.selectedIndex===0}
        >
          <span aria-hidden="true" class="icon material-symbols-outlined">
            ${this.isRTL()?"chevron_right":"chevron_left"}
          </span>
        </button>
        <button
          aria-label=${this.getMsg("PLACE_PHOTO_NEXT_ARIA_LABEL")}
          @click=${this.navigateToNext}
          .disabled=${this.selectedIndex===e.length-1}
        >
          <span aria-hidden="true" class="icon material-symbols-outlined">
            ${this.isRTL()?"chevron_left":"chevron_right"}
          </span>
        </button>
      </div>
    `,s=(a,u)=>S`
      <button
        aria-label=${this.getMsg("PLACE_PHOTO_TILE_ARIA_LABEL",u+1)}
        @click=${()=>void this.openLightbox(u)}
        .disabled=${!a}
        part="tile"
        style=${ra({"background-image":a&&`url(${a.tileUri})`})}
      ></button>
    `;return S`
      <div class="container">
        <div>${Rn(e.slice(0,this.maxTiles),s)}</div>
        <dialog class="lightbox" @keydown=${zy}>
          <div class="backdrop" @click=${this.closeLightbox}></div>
          <img
            alt=${this.getMsg("PLACE_PHOTO_ALT",r!=null?r:"")}
            class="photo"
            src=${by(n==null?void 0:n.uri)}
          />
          ${i}
          ${o}
        </dialog>
      </div>
    `}updated(){!this.tileSize&&this.firstTileElement&&(this.tileSize={widthPx:this.firstTileElement.clientWidth||Qo,heightPx:this.firstTileElement.clientHeight||Qo})}getRequiredFields(){return["displayName","photos"]}placeHasData(e){return!!(e.photos&&e.photos.length>0)}getFormattedPhotos(){const e=this.getPlace();return e===void 0||!this.tileSize?new Array(10).fill(null):e!=null&&e.photos?e.photos.map(n=>Dy(n,this.tileSize)):[]}isRTL(){return getComputedStyle(this).direction.toLowerCase()==="rtl"}async openLightbox(e){var n;this.selectedIndex=e,await this.updateComplete,(n=this.lightboxElement)==null||n.showModal()}closeLightbox(){var e;(e=this.lightboxElement)==null||e.close()}navigateToPrevious(){this.selectedIndex>0&&this.selectedIndex--}navigateToNext(){var n,r;const e=(r=(n=this.getPlace())==null?void 0:n.photos)==null?void 0:r.length;e&&this.selectedIndex<e-1&&this.selectedIndex++}};_t.styles=j`
    :host(:not([hidden])) {
      display: block;
    }

    .container.hide-focus-ring button:focus {
      outline: none;
    }

    a {
      color: inherit;
    }

    button {
      background: none;
      border: none;
      color: inherit;
      cursor: pointer;
      padding: 0;
    }

    button[disabled] {
      cursor: default;
    }

    [part="tile"] {
      background-color: #f5f5f5;
      background-position: center;
      background-size: cover;
      border-radius: 8px;
      display: inline-block;
      height: 134px;
      width: 142px;
    }

    /* The dialog element has a default border-width: initial (3px),
       padding: 1em, and max-height/width: calc((100% - 6px) - 2em). We remove
       the border and take the corresponding 6px out of the height/width
       calculation so it still fills the screen. */
    .lightbox {
      border-width: 0;
      color: white;
      height: 100%;
      max-height: calc(100% - 2em);
      max-width: calc(100% - 2em);
      width: 100%;
    }

    .backdrop {
      background: black;
      inset: 0;
      position: absolute;
    }

    .photo {
      inset: 0;
      margin: auto;
      max-height: 100%;
      max-width: 100%;
      position: absolute;
    }

    .icon {
      font-size: calc(${Le} * 2);
      vertical-align: middle;
    }

    .info-card {
      background: rgba(32, 33, 36, 0.7);
      border-radius: 8px;
      display: flex;
      padding: ${Le};
      position: absolute;
    }

    .info-card .text-container {
      flex-direction: column;
      padding: 0 ${rl};
    }

    .info-card .title {
      font: ${fr};
    }

    .info-card .caption {
      font : ${vs};
    }

    .nav-controls {
      bottom: ${Le};
      left: 0;
      margin: 0 auto;
      position: absolute;
      right: 0;
      width: fit-content;
    }

    .nav-controls button {
      background-color: rgba(32, 33, 36, 0.7);
      border-radius: calc(${Le} * 2);
      padding: ${rl};
      margin: ${rl};
    }

    .nav-controls button[disabled] {
      opacity: 0.5;
    }
  `;y([x({attribute:"max-tiles",reflect:!0,type:Number}),w("design:type",Number)],_t.prototype,"maxTiles",void 0);y([fe(),w("design:type",Object)],_t.prototype,"selectedIndex",void 0);y([fe(),w("design:type",Object)],_t.prototype,"tileSize",void 0);y([ut(".container"),w("design:type",HTMLDivElement)],_t.prototype,"containerElement",void 0);y([ut(".lightbox"),w("design:type",HTMLDialogElement)],_t.prototype,"lightboxElement",void 0);y([ut('[part="tile"]'),w("design:type",HTMLButtonElement)],_t.prototype,"firstTileElement",void 0);_t=y([K("gmpx-place-photo-gallery")],_t);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Uy(t,e){return t==null||t<0||e.length===0?"":Array.from(e)[0].repeat(t)}let Xo=class extends Ce{constructor(){super(...arguments),this.symbol="$"}render(){return S`<span>${this.getDisplayPriceLevel()}</span>`}getRequiredFields(){return["priceLevel"]}placeHasData(e){return e.priceLevel!=null}getDisplayPriceLevel(){const e=this.getPlace();return(e==null?void 0:e.priceLevel)==null?"":Uy(py(e.priceLevel),this.symbol)}};y([x({type:String,reflect:!0}),w("design:type",Object)],Xo.prototype,"symbol",void 0);Xo=y([K("gmpx-place-price-level")],Xo);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Fy=1,_h=5;var or;(function(t){t.FULL="full",t.HALF="half",t.EMPTY="empty"})(or||(or={}));function jy(t){let e=Math.round(t*2);const n=[];for(;e>1;)n.push(or.FULL),e-=2;for(e>0&&n.push(or.HALF);n.length<_h;)n.push(or.EMPTY);return n}let Ei=class extends Ce{constructor(){super(...arguments),this.condensed=!1,this.getMsg=se.buildLocalizer(this)}render(){const e=this.getRating();return ge(e!==null,()=>{const n=this.condensed?[or.FULL]:jy(e);return S`
        <span role="img" aria-label=${this.getMsg("PLACE_RATING_ARIA_LABEL",e.toFixed(1))}>
          <span aria-hidden="true">
            <span>${e.toFixed(1)}</span>
            ${Rn(n,r=>S`<span class="star-icon ${r}">&#x2605;</span>`)}
          </span>
        </span>
      `})}getRequiredFields(){return["rating"]}placeHasData(e){return e.rating!=null}getRating(){var n;const e=(n=this.getPlace())==null?void 0:n.rating;return!e||e<Fy||e>_h?null:e}};Ei.styles=j`
    .star-icon.full {
      color: ${ta};
    }
    .star-icon.empty {
      color: ${na};
    }
    .star-icon.half {
      color: ${na};
      position: relative;
    }
    .star-icon.half::before {
      color: ${ta};
      content: '\\2605';
      overflow: hidden;
      position: absolute;
      width: 50%;
    }
  `;y([x({type:Boolean,reflect:!0}),w("design:type",Object)],Ei.prototype,"condensed",void 0);Ei=y([K("gmpx-place-rating")],Ei);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const By=5;var Zo;(function(t){t.FULL="full",t.EMPTY="empty"})(Zo||(Zo={}));function Hy(t){return Array.from({length:By}).fill(Zo.FULL,0,t).fill(Zo.EMPTY,t)}let Si=class extends Ce{constructor(){super(...arguments),this.fontLoader=new un(this,[ye.GOOGLE_SANS_TEXT]),this.getMsg=se.buildLocalizer(this)}render(){const e=this.getReviews();return ge(e&&e.length,()=>S`
      <div class="container">
        ${Rn(e,this.renderOneReview.bind(this))}
      </div>
    `)}getRequiredFields(){return["reviews"]}placeHasData(e){return!!(e.reviews&&e.reviews.length>0)}renderOneReview(e){var o,s,l;const n=e.authorAttribution,r=S`
      <div class="header">
        ${ge(n==null?void 0:n.photoURI,()=>{var a,u;return S`
          <a target="_blank" href="${(a=n==null?void 0:n.uri)!=null?a:""}">
            <img class="author-photo"
                alt=${this.getMsg("PLACE_REVIEWS_AUTHOR_PHOTO_ALT",(u=n==null?void 0:n.displayName)!=null?u:"")}
                src=${n.photoURI}>
          </a>
        `})}
        <a class="author-name"
          target="_blank"
          href="${(o=n==null?void 0:n.uri)!=null?o:""}">
          ${(s=n==null?void 0:n.displayName)!=null?s:""}
        </a>
      </div>
    `,i=S`
      <div class="subheader">
        ${ge(e.rating,()=>S`
          <span role="img" aria-label=${this.getMsg("PLACE_RATING_ARIA_LABEL",e.rating)}>
            <span aria-hidden="true">
              ${Rn(Hy(e.rating),a=>S`<span class="star-icon ${a}">&#x2605;</span>`)}
            </span>
          </span>
        `)}
        <span class="relative-time">
          ${(l=e.relativePublishTimeDescription)!=null?l:""}
        </span>
      </div>
    `;return S`
      <div class="review">
        ${r}
        ${i}
        ${ge(e.text,()=>S`
          <div class="body">
            ${e.text}
          </div>
        `)}
      </div>
    `}getReviews(){var n;const e=(n=this.getPlace())==null?void 0:n.reviews;return e?this.maxReviews===void 0?e:this.maxReviews<1?null:e.slice(0,Math.floor(this.maxReviews)):null}};Si.styles=j`
    .container {
      color: ${Pt};
      font: ${ms};
    }
    .review {
      padding: ${R(20)};
      padding-bottom: ${R(16)};
    }
    .review:not(:last-child) {
      border-bottom: ${yi};
    }
    .header, .subheader {
      align-items: center;
      display: flex;
    }
    .subheader {
      margin-top: ${R(16)};
    }
    .body {
      margin-top: ${R(8)};
    }
    .author-photo {
      display: block;
      height: ${R(32)};
    }
    .author-name {
      color: inherit;
      font: ${fr};
      margin-inline-start: ${R(8)};
      text-decoration: none;
    }
    .author-name:hover {
      text-decoration: underline;
    }
    .star-icon.full {
      color: ${ta};
    }
    .star-icon.empty {
      color: ${na};
    }
    .relative-time {
      color: ${Wo};
      font: ${vs};
      margin-inline-start: ${R(12)};
    }
  `;y([x({type:Number,reflect:!0,attribute:"max-reviews"}),w("design:type",Number)],Si.prototype,"maxReviews",void 0);Si=y([K("gmpx-place-reviews")],Si);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const rd=Object.freeze(["x-small","small","medium","large","x-large"]),Vy=S`
  <svg width="56" height="20" fill="none" viewBox="0 0 56 20" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.76 14.26c-3.62 0-6.66-2.94-6.66-6.56 0-3.62 3.04-6.56 6.66-6.56 2 0 3.43 0.78 4.5 1.81l-1.27 1.25c-0.77-0.72-1.81-1.28-3.23-1.28-2.64 0-4.71 2.13-4.71 4.77 0 2.64 2.07 4.77 4.71 4.77 1.71 0 2.69-0.69 3.31-1.31 0.51-0.51 0.85-1.25 0.98-2.26h-4.05v-1.79h5.79c0.06 0.32 0.1 0.7 0.1 1.12 0 1.34-0.37 3.01-1.55 4.19-1.16 1.21-2.63 1.85-4.58 1.85z" fill="#4285F4"/>
    <path d="m22.24 10.03c0 2.43-1.91 4.23-4.24 4.23s-4.24-1.79-4.24-4.23c0-2.45 1.9-4.23 4.24-4.23s4.24 1.78 4.24 4.23zm-1.86 0c0-1.52-1.1-2.56-2.38-2.56s-2.38 1.04-2.38 2.56c0 1.5 1.1 2.56 2.38 2.56s2.38-1.05 2.38-2.56z" fill="#EA4335"/>
    <path d="m31.74 10.03c0 2.43-1.91 4.23-4.24 4.23s-4.24-1.79-4.24-4.23c0-2.45 1.9-4.23 4.24-4.23s4.24 1.78 4.24 4.23zm-1.86 0c0-1.52-1.1-2.56-2.38-2.56s-2.38 1.04-2.38 2.56c0 1.5 1.1 2.56 2.38 2.56s2.38-1.05 2.38-2.56z" fill="#FBBC05"/>
    <path d="m40.82 6.0601v7.59c0 3.12-1.84 4.4-4.02 4.4-2.05 0-3.28-1.38-3.75-2.5l1.62-0.67c0.29 0.69 0.99 1.5 2.13 1.5 1.39 0 2.26-0.86 2.26-2.48v-0.6h-0.06c-0.42 0.51-1.22 0.96-2.22 0.96-2.11 0-4.05-1.84-4.05-4.21 0-2.38 1.94-4.24 4.05-4.24 1.01 0 1.81 0.45 2.22 0.94h0.06v-0.69h1.76zm-1.63 3.99c0-1.49-0.99-2.58-2.26-2.58-1.28 0-2.35 1.09-2.35 2.58 0 1.47 1.07 2.54 2.35 2.54 1.27 0 2.26-1.07 2.26-2.54z" fill="#4285F4"/>
    <path d="M44.4 2V14H42.54V2H44.4Z" fill="#34A853"/>
    <path d="m52.1 11.42 1.44 0.96c-0.46 0.69-1.58 1.87-3.52 1.87-2.4 0-4.19-1.86-4.19-4.23 0-2.51 1.81-4.23 3.99-4.23 2.19 0 3.26 1.74 3.62 2.69l0.19 0.48-5.65 2.34c0.43 0.85 1.1 1.28 2.05 1.28s1.59-0.45 2.07-1.16zm-4.44-1.52 3.78-1.57c-0.21-0.53-0.83-0.9-1.57-0.9-0.94 0.01-2.25 0.84-2.21 2.47z" fill="#EA4335"/>
  </svg>
`;let Qe=class extends Oe{constructor(){super(...arguments),this.autoFetchDisabled=!1,this.googleLogoAlreadyDisplayed=!1,this.size="x-large",this.travelMode="driving",this.fontLoader=new un(this,[ye.GOOGLE_SANS_TEXT,ye.MATERIAL_SYMBOLS_OUTLINED]),this.slotValidator=new ys(this,this.logger,["action"]),this.getMsg=se.buildLocalizer(this),this.renderHeaderSuffixContent=()=>vu(this.size,[["small",()=>S`<slot name="action"></slot>`],["medium",()=>S`
      <gmpx-place-photo-gallery class="gallery" max-tiles="1">
      </gmpx-place-photo-gallery>
    `]]),this.renderCondensedSummary=()=>S`
    <div class="summary body">
      <div class="line">
        <gmpx-place-rating condensed></gmpx-place-rating>
        <gmpx-optional-data-container-internal>
          <span class="delimiter">·</span>
          <gmpx-place-field-text field="types"></gmpx-place-field-text>
        </gmpx-optional-data-container-internal>
        <gmpx-optional-data-container-internal>
          <span class="delimiter">·</span>
          <gmpx-place-distance-label-internal
            .origin=${this.travelOrigin}
            @gmpx-requesterror=${this.forwardRequestError}
          ></gmpx-place-distance-label-internal>
        </gmpx-optional-data-container-internal>
      </div>
    </div>
  `,this.renderSummary=()=>S`
    <div class="summary body">
      <div class="line">
        <gmpx-place-rating></gmpx-place-rating>
        <gmpx-optional-data-container-internal>
          (<gmpx-place-field-text field="userRatingCount">
          </gmpx-place-field-text>)
        </gmpx-optional-data-container-internal>
      </div>
      <div class="line">
        <gmpx-place-field-text field="types"></gmpx-place-field-text>
        <gmpx-optional-data-container-internal>
          <span class="delimiter">·</span>
          <gmpx-place-price-level></gmpx-place-price-level>
        </gmpx-optional-data-container-internal>
        <gmpx-optional-data-container-internal>
          <span class="delimiter">·</span>
          <gmpx-place-distance-label-internal
            .origin=${this.travelOrigin}
            .travelMode=${this.travelMode}
            @gmpx-requesterror=${this.forwardRequestError}
          ></gmpx-place-distance-label-internal>
        </gmpx-optional-data-container-internal>
      </div>
      <div class="line">
        <gmpx-place-opening-hours summary-only></gmpx-place-opening-hours>
      </div>
      <div class="line">
        <gmpx-optional-data-container-internal>
          <gmpx-place-field-boolean field="hasDineIn">
            <span slot="true">${this.getMsg("PLACE_HAS_DINE_IN")}</span>
            <span slot="false">${this.getMsg("PLACE_NO_DINE_IN")}</span>
          </gmpx-place-field-boolean>
        </gmpx-optional-data-container-internal>
        <gmpx-optional-data-container-internal>
          <span class="delimiter">·</span>
          <gmpx-place-field-boolean field="hasTakeout">
            <span slot="true">${this.getMsg("PLACE_HAS_TAKEOUT")}</span>
            <span slot="false">${this.getMsg("PLACE_NO_TAKEOUT")}</span>
          </gmpx-place-field-boolean>
        </gmpx-optional-data-container-internal>
        <gmpx-optional-data-container-internal>
          <span class="delimiter">·</span>
          <gmpx-place-field-boolean field="hasDelivery">
            <span slot="true">${this.getMsg("PLACE_HAS_DELIVERY")}</span>
            <span slot="false">${this.getMsg("PLACE_NO_DELIVERY")}</span>
          </gmpx-place-field-boolean>
        </gmpx-optional-data-container-internal>
      </div>
    </div>
  `,this.renderContacts=()=>S`
    <div class="section body">
      <gmpx-optional-data-container-internal>
        <div class="block row">
          <span aria-hidden="true" class="icon material-symbols-outlined">
            location_on
          </span>
          <gmpx-place-field-text field="formattedAddress">
          </gmpx-place-field-text>
        </div>
      </gmpx-optional-data-container-internal>
      <gmpx-optional-data-container-internal>
        <div class="block row">
          <span aria-hidden="true" class="icon material-symbols-outlined">
            public
          </span>
          <gmpx-place-field-link href-field="websiteURI">
          </gmpx-place-field-link>
        </div>
      </gmpx-optional-data-container-internal>
      <gmpx-optional-data-container-internal>
        <div class="block row">
          <span aria-hidden="true" class="icon material-symbols-outlined">
            call
          </span>
          <gmpx-place-field-text field="nationalPhoneNumber">
          </gmpx-place-field-text>
        </div>
      </gmpx-optional-data-container-internal>
      <gmpx-optional-data-container-internal>
        <div class="block row">
          <span aria-hidden="true" class="icon material-symbols-outlined">
            schedule
          </span>
          <gmpx-place-opening-hours></gmpx-place-opening-hours>
        </div>
      </gmpx-optional-data-container-internal>
    </div>
  `,this.renderReviews=()=>S`
    <gmpx-optional-data-container-internal>
      <div class="section">
        <div class="block">
          <span class="title-large">
            ${this.getMsg("PLACE_REVIEWS_SECTION_HEADING")}
          </span><br>
          <span class="caption">
            ${this.getMsg("PLACE_REVIEWS_SECTION_CAPTION")}
          </span><br>
        </div>
        <gmpx-place-reviews></gmpx-place-reviews>
        <gmpx-place-field-link class="button" href-field="googleMapsURI">
          <div class="label">
            <span>${this.getMsg("PLACE_REVIEWS_MORE")}</span>
            <span aria-hidden="true" class="icon material-symbols-outlined">
              open_in_new
            </span>
          </div>
        </gmpx-place-field-link>
      </div>
    </gmpx-optional-data-container-internal>
  `}willUpdate(e){e.has("size")&&!rd.includes(this.size)&&(this.logger.error(`Value "${this.size}" for attribute "size" is invalid. Acceptable choices are ${rd.map(n=>`"${n}"`).join(", ")}.`),this.size="x-large")}render(){var e;return S`
      <gmpx-place-data-provider
        .autoFetchDisabled=${this.autoFetchDisabled}
        .place=${(e=this.place)!=null?e:this.contextPlace}
        @gmpx-requesterror=${this.forwardRequestError}
      >
        <div class="container">
          <div class="section block first">
            <div class="header">
              <div>
                <div class=${this.getDisplayNameClass()}>
                  <gmpx-place-field-text field="displayName">
                  </gmpx-place-field-text>
                </div>
                ${this.size==="x-small"?this.renderCondensedSummary():this.renderSummary()}
              </div>
              <div>${this.renderHeaderSuffixContent()}</div>
            </div>

            ${ge(this.size!=="small"&&this.size!=="x-small",()=>S`
              <div><slot name="action"></slot></div>
            `)}

            ${ge(this.size==="large"||this.size==="x-large",()=>S`
              <gmpx-place-photo-gallery class="carousel gallery">
              </gmpx-place-photo-gallery>
            `)}
          </div>

          ${ge(this.size==="x-large",()=>S`
            ${this.renderContacts()}
            ${this.renderReviews()}
          `)}

          <gmpx-place-attribution class="section caption attribution">
          </gmpx-place-attribution>

          ${ge(!this.googleLogoAlreadyDisplayed,()=>S`
            <div class=${this.size==="x-large"?"section":""}>
              <div class="logo">${Vy}</div>
            </div>
          `)}
        </div>
        <div slot="error">
          <div class="title-large">Oops! Something went wrong.</div>
          <div class="caption">
            Failed to load data about the specified Place.
            See the JavaScript console for technical details.
          </div>
        </div>
      </gmpx-place-data-provider>
    `}getDisplayNameClass(){return this.size==="x-small"?"title-medium":this.size==="small"?"title-large":"headline"}forwardRequestError(e){e.target&&e.target===this.dataProviderElement&&console.error(e.error);const n=new _s(e.error);this.dispatchEvent(n)}};Qe.styles=j`
    .headline {
      color: ${Pt};
      font: ${Jv};
    }

    .title-large {
      color: ${Pt};
      font: ${vo};
    }

    .title-medium {
      color: ${Pt};
      font: ${fr};
    }

    .body {
      color: ${Pt};
      font: ${ms};
    }

    .caption {
      color: ${Wo};
      font: ${vs};
    }

    [no-data] {
      display: none;
    }

    .container {
      background-color: ${mn};
      overflow: auto;
    }

    .section:not(.first) {
      border-top: ${yi};
    }

    .section.first > * {
      margin-bottom: ${R(12)};
    }

    .block {
      margin: ${R(18)} ${R(20)};
    }

    .header {
      display: flex;
    }

    .header > :first-child {
      flex-grow: 1;
      margin-inline-end: ${R(20)};
    }

    .header .gallery::part(tile) {
      height: ${R(80)};
      width: ${R(80)};
    }

    .summary {
      color: ${Wo};
      display: flex;
      flex-direction: column;
      margin-top: ${R(4)};
    }

    .delimiter {
      display: none;
    }

    .line > * > :not(.delimiter),
    .line > :not([hidden]):not([no-data]) ~ * > .delimiter {
      display: inline-block;
    }

    slot[name="action"] {
      display: flex;
      flex-wrap: wrap;
      gap: ${R(8)};
    }

    .carousel {
      display: flex;
      line-height: normal;
      margin-inline: ${R(-20)};
      overflow-x: auto;
      padding-inline: ${R(20)};
      white-space: nowrap;
    }

    .carousel[no-data] {
      margin-bottom: ${R(-12)};
    }

    .carousel::-webkit-scrollbar {
      background-color: ${mn};
      width: 16px;
    }
    .carousel::-webkit-scrollbar-corner {
      background-color: ${mn};
    }
    .carousel::-webkit-scrollbar-track {
      background-color: ${mn};
    }
    .carousel::-webkit-scrollbar-thumb {
      background-color: #c1c1c1;
      border-radius: 16px;
      border: 4px solid ${mn};
    }
    .carousel::-webkit-scrollbar-button {
      display: none;
    }
    .carousel::-webkit-scrollbar-thumb:hover {
      background-color: #7d7d7d;
    }

    .carousel.gallery::part(tile) {
      height: ${R(134)};
      width: ${R(142)};
    }

    .row {
      display: flex;
    }

    .row > .icon {
      color: ${$t};
      direction: inherit;
      font-size: ${R(20)};
      margin-inline-end: ${R(20)};
    }

    .button {
      display: flex;
      justify-content: center;
      text-decoration: none;
    }

    .label {
      align-items: center;
      color: ${$t};
      display: flex;
      font: ${fr};
      margin: ${R(14)} 0;
    }

    .label > .icon {
      direction: inherit;
      font-size: ${R(20)};
      margin-inline-start: ${R(4)};
    }

    .attribution:not([no-data]) {
      display: block;
      padding: ${R(12)} ${R(20)};
    }

    .logo {
      margin: 15px ${R(20)} 10px;
    }

    [slot="error"] {
      text-align: center;
      width: 100%;
    }
  `;y([x({attribute:"auto-fetch-disabled",reflect:!0,type:Boolean}),w("design:type",Object)],Qe.prototype,"autoFetchDisabled",void 0);y([ws({context:mu,subscribe:!0}),x({attribute:!1}),w("design:type",Object)],Qe.prototype,"contextPlace",void 0);y([x({attribute:"google-logo-already-displayed",reflect:!0,type:Boolean}),w("design:type",Object)],Qe.prototype,"googleLogoAlreadyDisplayed",void 0);y([x({type:String,hasChanged:()=>!0}),w("design:type",Object)],Qe.prototype,"place",void 0);y([x({reflect:!0,type:String}),w("design:type",String)],Qe.prototype,"size",void 0);y([x({attribute:"travel-mode",reflect:!0,type:String}),w("design:type",Object)],Qe.prototype,"travelMode",void 0);y([x({attribute:!1}),w("design:type",Object)],Qe.prototype,"travelOrigin",void 0);y([ut("gmpx-place-data-provider"),w("design:type",wt)],Qe.prototype,"dataProviderElement",void 0);Qe=y([K("gmpx-place-overview")],Qe);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Wy=Object.freeze(["addressComponents","adrFormatAddress","businessStatus","displayName","formattedAddress","googleMapsURI","iconBackgroundColor","location","photos","id","plusCode","svgIconMaskURI","types","utcOffsetMinutes","viewport"]),Gy=Object.freeze(["address_component","adr_address","business_status","formatted_address","geometry","icon","icon_mask_base_uri","icon_background_color","name","photos","place_id","plus_code","type","url","utc_offset_minutes"]),il=.75;let pe=class extends Oe{constructor(){super(...arguments),this.strictBounds=!1,this.disableSearch=!0,this.hideClearButton=!0,this.focusController=new wh(this),this.fontLoader=new un(this,[ye.GOOGLE_SANS_TEXT,ye.MATERIAL_SYMBOLS_OUTLINED]),this.autocomplete=new rn,this.getMsg=se.buildLocalizer(this)}get value(){return this.valueInternal}willUpdate(e){var n,r;e.has("disableSearch")&&this.disableSearch&&this.focusController.isKeyboardNavigating&&Go()===this.searchButtonElement&&((n=this.clearButtonElement)==null||n.focus()),e.has("hideClearButton")&&this.hideClearButton&&this.focusController.isKeyboardNavigating&&Go()===this.clearButtonElement&&((r=this.inputElement)==null||r.focus())}render(){var e;return S`
      <div class="container">
        <input
          @input=${this.handleInput}
          .placeholder=${(e=this.placeholder)!=null?e:""}
        />
        <div class="overlay">
          <button
            aria-label=${this.getMsg("PLACE_SEARCH_ARIA_LABEL")}
            class="search-button"
            @click=${this.handleSearch}
            .disabled=${this.disableSearch}
            type="button"
          >
            <span aria-hidden="true" class="icon material-symbols-outlined">
              search
            </span>
          </button>
          <button
            aria-label=${this.getMsg("PLACE_CLEAR_ARIA_LABEL")}
            class="clear-button"
            @click=${this.handleClear}
            .hidden=${this.hideClearButton}
            type="button"
          >
            <span aria-hidden="true" class="icon material-symbols-outlined">
              cancel
            </span>
          </button>
        </div>
      </div>
    `}firstUpdated(){this.initializeAutocomplete(this.inputElement)}async updated(e){if(this.autocomplete.value&&this.shouldUpdateAutocompleteOptions(e)){const n=await this.makeAutocompleteOptions();this.autocomplete.value.setOptions(n)}if(e.has("forMap")&&this.forMap){const n=await this.getMapById(this.forMap);n&&this.bindTo(n)}e.has("valueInternal")&&this.dispatchEvent(new Event("gmpx-placechange"))}async bindTo(e){(await this.autocomplete.promise).bindTo("bounds",e)}async getMapById(e){const r=this.getRootNode().getElementById(e);return(r==null?void 0:r.tagName)==="GMP-MAP"?(await customElements.whenDefined("gmp-map"),r.innerMap):null}shouldUpdateAutocompleteOptions(e){return e.has("country")||e.has("locationBias")||e.has("radius")||e.has("strictBounds")||e.has("type")}async makeAutocompleteOptions(){var s;const{country:e,locationBias:n,radius:r,strictBounds:i}=this;let o;if(n&&r){const{Circle:l}=await G.importLibrary("maps",this);o=(s=new l({center:n,radius:r}).getBounds())!=null?s:void 0}return{bounds:o,componentRestrictions:e?{country:e}:void 0,fields:[...Gy],strictBounds:i,types:this.type?[this.type]:[]}}async initializeAutocomplete(e){const{Autocomplete:n}=await G.importLibrary("places",this),r=new n(e,await this.makeAutocompleteOptions());r.addListener("place_changed",async()=>{const i=r.getPlace();i!=null&&i.place_id?(this.disableSearch=!0,this.valueInternal=await wi(i,this)):await this.handleSearch()}),this.autocomplete.resolve(r)}async search(e){var o,s;const{Place:n}=await G.importLibrary("places",this),r={textQuery:e,fields:["id"],locationBias:(o=this.autocomplete.value)==null?void 0:o.getBounds()};let i;try{({places:i}=await n.searchByText(r))}catch(l){if(Ko(l,"searchByText()")){const a={query:e,fields:["id"],locationBias:(s=this.autocomplete.value)==null?void 0:s.getBounds()},u=await this.searchWithFindPlaceFromQuery(a);i=[];for(const c of u){i.push(await wi(c,this));break}}else throw l}return i.length?(await i[0].fetchFields({fields:[...Wy]}),i[0]):null}async searchWithFindPlaceFromQuery(e){const{PlacesService:n}=await G.importLibrary("places",this),r=new n(document.createElement("div"));return new Promise((i,o)=>{r.findPlaceFromQuery({...e,fields:uh(e.fields)},(s,l)=>{s&&l==="OK"?i(s):o(l)})})}handleClear(){this.inputElement.value="",this.valueInternal=void 0,this.disableSearch=!0,this.hideClearButton=!0}handleInput(e){e.target.value?(this.disableSearch=!1,this.hideClearButton=!1):this.handleClear()}async handleSearch(){var e;if(!(this.disableSearch||!((e=this.inputElement)!=null&&e.value))){this.disableSearch=!0;try{this.valueInternal=await this.search(this.inputElement.value),this.valueInternal&&this.updateInputTextFromPlace(this.valueInternal)}catch(n){const r=new _s(n);this.dispatchEvent(r)}}}updateInputTextFromPlace(e){var r,i;let n;e.formattedAddress&&e.displayName?e.formattedAddress.startsWith(e.displayName)?n=e.formattedAddress:n=`${e.displayName}, ${e.formattedAddress}`:n=(i=(r=e.displayName)!=null?r:e.formattedAddress)!=null?i:"",n&&(this.inputElement.value=n)}};pe.styles=j`
    :host(:not([hidden])) {
      /* Match the default display style of <input> element. */
      display: inline-block;
    }

    .container {
      color: ${Pt};
      font: ${ms};
      position: relative;
    }

    .overlay {
      display: flex;
      inset: 0;
      justify-content: space-between;
      pointer-events: none;
      position: absolute;
    }

    .icon {
      font-size: inherit;
    }

    input {
      background-color: ${mn};
      border: 1px solid #80868b;
      border-radius: 4px;
      color: ${Pt};
      box-sizing: border-box;
      font-family: inherit;
      font-size: inherit;
      padding: calc(${Le} * ${il})
               calc(${Le} * ${il*2+1});
      width: 100%;
    }

    input:focus {
      outline: 2px solid ${$t};
    }

    input::placeholder {
      color: ${Pt};
      opacity: 0.5;
    }

    button:not([hidden]) {
      align-items: center;
      background: none;
      border: none;
      color: inherit;
      display: flex;
      font: inherit;
      padding: calc(${Le} * ${il});
      pointer-events: auto;
    }

    button:enabled {
      cursor: pointer;
    }
  `;pe.shadowRootOptions={...Oe.shadowRootOptions,delegatesFocus:!0};y([x({converter:ph,reflect:!0}),w("design:type",Array)],pe.prototype,"country",void 0);y([x({attribute:"for-map",reflect:!0,type:String}),w("design:type",String)],pe.prototype,"forMap",void 0);y([x({attribute:"location-bias",converter:Ti,reflect:!0}),w("design:type",Object)],pe.prototype,"locationBias",void 0);y([x({reflect:!0,type:String}),w("design:type",String)],pe.prototype,"placeholder",void 0);y([x({reflect:!0,type:Number}),w("design:type",Number)],pe.prototype,"radius",void 0);y([x({attribute:"strict-bounds",reflect:!0,type:Boolean}),w("design:type",Object)],pe.prototype,"strictBounds",void 0);y([x({reflect:!0,type:String}),w("design:type",String)],pe.prototype,"type",void 0);y([fe(),w("design:type",Object)],pe.prototype,"valueInternal",void 0);y([fe(),w("design:type",Object)],pe.prototype,"disableSearch",void 0);y([fe(),w("design:type",Object)],pe.prototype,"hideClearButton",void 0);y([ut("input"),w("design:type",HTMLInputElement)],pe.prototype,"inputElement",void 0);y([ut(".clear-button"),w("design:type",HTMLButtonElement)],pe.prototype,"clearButtonElement",void 0);y([ut(".search-button"),w("design:type",HTMLButtonElement)],pe.prototype,"searchButtonElement",void 0);pe=y([K("gmpx-place-picker")],pe);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Eh=Symbol("route");class Es extends Oe{getRoute(){var e;return(e=this.route)!=null?e:this.contextRoute}}y([ws({context:Eh,subscribe:!0}),x({attribute:!1}),w("design:type",Object)],Es.prototype,"contextRoute",void 0);y([x({attribute:!1}),w("design:type",Object)],Es.prototype,"route",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Xe=class extends Oe{constructor(){super(...arguments),this.travelMode="driving",this.directionsController=new it(this)}updated(){this.updateContextRoute()}async updateContextRoute(){if(this.route){this.contextRoute=this.route;return}const e=id(this.originAddress,this.originPlaceId,this.originLatLng),n=id(this.destinationAddress,this.destinationPlaceId,this.destinationLatLng);e===1&&n===1?this.contextRoute=await this.fetchRoute():(e>1&&n!==0&&this.logger.error("Too many origins. Only one of origin-lat-lng, origin-place-id, or origin-address may be specified."),n>1&&e!==0&&this.logger.error("Too many destinations. Only one of destination-lat-lng, destination-place-id, or destination-address may be specified."),this.contextRoute=void 0)}async fetchRoute(){var n;const e=await this.directionsController.route({origin:this.getOriginRequestObject(),destination:this.getDestinationRequestObject(),travelMode:(n=this.travelMode)==null?void 0:n.toUpperCase()});return e!=null&&e.routes?e.routes[0]:void 0}getOriginRequestObject(){return this.originLatLng?{location:this.originLatLng}:this.originPlaceId?{placeId:this.originPlaceId}:{query:this.originAddress}}getDestinationRequestObject(){return this.destinationLatLng?{location:this.destinationLatLng}:this.destinationPlaceId?{placeId:this.destinationPlaceId}:{query:this.destinationAddress}}};y([ch({context:Eh}),x({attribute:!1,hasChanged:()=>!1}),w("design:type",Object)],Xe.prototype,"contextRoute",void 0);y([x({converter:Ti,attribute:"destination-lat-lng",reflect:!0}),w("design:type",Object)],Xe.prototype,"destinationLatLng",void 0);y([x({type:String,attribute:"destination-place-id",reflect:!0}),w("design:type",String)],Xe.prototype,"destinationPlaceId",void 0);y([x({type:String,attribute:"destination-address",reflect:!0}),w("design:type",String)],Xe.prototype,"destinationAddress",void 0);y([x({converter:Ti,attribute:"origin-lat-lng",reflect:!0}),w("design:type",Object)],Xe.prototype,"originLatLng",void 0);y([x({type:String,attribute:"origin-place-id",reflect:!0}),w("design:type",String)],Xe.prototype,"originPlaceId",void 0);y([x({type:String,attribute:"origin-address",reflect:!0}),w("design:type",String)],Xe.prototype,"originAddress",void 0);y([x({attribute:!1}),w("design:type",Object)],Xe.prototype,"route",void 0);y([x({type:String,attribute:"travel-mode",reflect:!0}),w("design:type",Object)],Xe.prototype,"travelMode",void 0);Xe=y([K("gmpx-route-data-provider")],Xe);function id(...t){return t.filter(e=>e).length}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Sn{constructor(e){this.map=e,this.managedComponents=new Set}static getInstanceForMap(e){return Sn.instances.has(e)||Sn.instances.set(e,new Sn(e)),Sn.instances.get(e)}async register(e){this.managedComponents.has(e)||(this.managedComponents.add(e),await this.updateViewport())}async unregister(e){this.managedComponents.has(e)&&(this.managedComponents.delete(e),await this.updateViewport())}async updateViewport(){const e=await this.getBoundsUnion();e&&this.map.innerMap.fitBounds(e)}async getBoundsUnion(){let e=null;for(const n of this.managedComponents){const r=n.getBounds();if(r){if(!e){const{LatLngBounds:i}=await G.importLibrary("core");e=new i}e.union(r)}}return e}}Sn.instances=new Map;/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Sh{get map(){return this.deferredMap.value}get mapPromise(){return this.deferredMap.promise}constructor(e){this.host=e,this.deferredMap=new rn,e.addController(this)}async hostConnected(){const e=this.getContainingGmpMap();if(e){customElements.get("gmp-map")||await customElements.whenDefined("gmp-map");const n=e;this.host.isConnected&&(this.deferredMap.resolve(n.innerMap),this.viewportManager=Sn.getInstanceForMap(n))}}hostDisconnected(){this.deferredMap=new rn}getContainingGmpMap(){for(const e of eh(this.host))if(e instanceof Element&&e.localName==="gmp-map")return e;return null}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let vr=class extends Es{get innerMarker(){return this.innerMarkerDeferred.value}get innerMarkerPromise(){return this.innerMarkerDeferred.promise}constructor(){super(),this.waypoint="origin",this.title="",this.innerMarkerDeferred=new rn,this.mapController=new Sh(this),this.initMarker()}async initMarker(){const{AdvancedMarkerElement:e}=await G.importLibrary("marker",this),n=new e;this.innerMarkerDeferred.resolve(n)}async connectedCallback(){super.connectedCallback();const e=await this.mapController.mapPromise,n=await this.innerMarkerPromise;this.isConnected&&(n.map=e)}disconnectedCallback(){super.disconnectedCallback(),this.innerMarker&&(this.innerMarker.map=null)}render(){return S`<slot @slotchange=${this.onSlotChange}></slot>`}updated(e){(e.has("waypoint")||e.has("route")||e.has("contextRoute"))&&this.updatePosition(),e.has("title")&&this.updateTitle(),e.has("zIndex")&&this.updateZIndex()}async updatePosition(){var o;const e=await this.innerMarkerPromise,n=this.getRoute();if(!((o=n==null?void 0:n.legs)!=null&&o.length)){e.position=null;return}const r=n.legs[0],i=n.legs[n.legs.length-1];!this.waypoint||this.waypoint==="origin"?e.position=r.start_location:this.waypoint==="destination"?e.position=i.end_location:this.logger.error(`Unsupported waypoint "${this.waypoint}". Waypoint must be "origin" or "destination".`)}async updateTitle(){const e=await this.innerMarkerPromise;e.title=this.title}async updateZIndex(){const e=await this.innerMarkerPromise;e.zIndex=this.zIndex}async onSlotChange(e){const r=e.target.assignedElements()[0];if(r){const i=await this.innerMarkerPromise;i.content=r}}};y([x({type:String,reflect:!0}),w("design:type",String)],vr.prototype,"waypoint",void 0);y([x({type:String,reflect:!0}),w("design:type",Object)],vr.prototype,"title",void 0);y([x({type:Number,attribute:!1}),w("design:type",Number)],vr.prototype,"zIndex",void 0);vr=y([K("gmpx-route-marker"),w("design:paramtypes",[])],vr);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Yy=["strokeColor","strokeWeight","strokeOpacity","zIndex","invisible"];let Dt=class extends Es{get innerPolyline(){return this.innerPolylineDeferred.value}get innerPolylinePromise(){return this.innerPolylineDeferred.promise}constructor(){super(),this.fitInViewport=!1,this.invisible=!1,this.innerPolylineDeferred=new rn,this.mapController=new Sh(this),this.initPolyline()}async initPolyline(){const{Polyline:e}=await G.importLibrary("maps",this),n=new e;this.innerPolylineDeferred.resolve(n)}async connectedCallback(){super.connectedCallback();const e=await this.innerPolylinePromise,n=await this.mapController.mapPromise;this.isConnected&&(e.setMap(n),await this.mapController.viewportManager.register(this))}disconnectedCallback(){var e,n;super.disconnectedCallback(),(e=this.mapController.viewportManager)==null||e.unregister(this),(n=this.innerPolyline)==null||n.setMap(null)}updated(e){var n;Yy.some(r=>e.has(r))&&this.setInnerPolylineOptions(),(e.has("route")||e.has("contextRoute"))&&this.updatePath(),(e.has("fitInViewport")||this.fitInViewport&&(e.has("route")||e.has("contextRoute")))&&((n=this.mapController.viewportManager)==null||n.updateViewport())}getBounds(){var e,n;return this.fitInViewport&&(n=(e=this.getRoute())==null?void 0:e.bounds)!=null?n:null}async setInnerPolylineOptions(){const e={strokeColor:this.strokeColor,strokeWeight:this.strokeWeight,zIndex:this.zIndex,strokeOpacity:this.strokeOpacity,visible:!this.invisible};(await this.innerPolylinePromise).setOptions(e)}async updatePath(){let e=[];const n=this.getRoute();if(n)for(const i of n.legs)for(const o of i.steps)e=e.concat(o.path);(await this.innerPolylinePromise).setPath(e)}};y([x({attribute:"fit-in-viewport",type:Boolean,reflect:!0}),w("design:type",Object)],Dt.prototype,"fitInViewport",void 0);y([x({attribute:"invisible",type:Boolean,reflect:!0}),w("design:type",Object)],Dt.prototype,"invisible",void 0);y([x({attribute:"stroke-color",type:String,reflect:!0}),w("design:type",String)],Dt.prototype,"strokeColor",void 0);y([x({attribute:"stroke-opacity",type:Number,reflect:!0}),w("design:type",Number)],Dt.prototype,"strokeOpacity",void 0);y([x({attribute:"stroke-weight",type:Number,reflect:!0}),w("design:type",Number)],Dt.prototype,"strokeWeight",void 0);y([x({attribute:"z-index",type:Number,reflect:!0}),w("design:type",Number)],Dt.prototype,"zIndex",void 0);Dt=y([K("gmpx-route-polyline"),w("design:paramtypes",[])],Dt);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var aa;const Ky="#1faefb",qy="#2565cd";let je=aa=class extends Oe{constructor(){super(),this.travelMode="driving",this.noPin=!1,this.zIndex=10*aa.numConstructed++}render(){var e,n;return S`
      <gmpx-route-data-provider
          .destinationLatLng=${this.destinationLatLng}
          .destinationPlaceId=${this.destinationPlaceId}
          .destinationAddress=${this.destinationAddress}
          .originLatLng=${this.originLatLng}
          .originPlaceId=${this.originPlaceId}
          .originAddress=${this.originAddress}
          .route=${this.route}
          .travelMode=${this.travelMode}>
        <gmpx-route-polyline
            fit-in-viewport
            stroke-color="${qy}"
            stroke-weight="9"
            .zIndex=${this.zIndex}>
        </gmpx-route-polyline>
        <gmpx-route-polyline
            stroke-color="${Ky}"
            stroke-weight="5"
            .zIndex=${this.zIndex+1}>
        </gmpx-route-polyline>
        <gmpx-route-marker
            waypoint="origin"
            .title=${(e=this.originAddress)!=null?e:""}
            .zIndex=${this.zIndex}>
          <svg width="20" height="20" style="position: relative; top: 13px;">
            <circle cx="10" cy="10" r="6" stroke="black" stroke-width="3" 
                fill="white"/>
          </svg>
        </gmpx-route-marker>
        <gmpx-route-marker
            waypoint="destination"
            .title=${(n=this.destinationAddress)!=null?n:""}
            .zIndex=${this.zIndex+1}>
          <svg width="20" height="20" style="position: relative; top: 13px;">
            <circle cx="10" cy="10" r="7" stroke="black" stroke-width="3" 
                fill="white"/>
            <circle cx="10" cy="10" r="1.8" stroke="black" stroke-width="3" 
                fill="black"/>
          </svg>
        </gmpx-route-marker>
        ${ge(!this.noPin,()=>{var r;return S`
          <gmpx-route-marker
              waypoint="destination"
              .title=${(r=this.destinationAddress)!=null?r:""}
              .zIndex=${this.zIndex+2}>
          </gmpx-route-marker>`})}
      </gmpx-route-data-provider>
    `}};je.numConstructed=0;y([x({converter:Ti,attribute:"destination-lat-lng",reflect:!0}),w("design:type",Object)],je.prototype,"destinationLatLng",void 0);y([x({type:String,attribute:"destination-place-id",reflect:!0}),w("design:type",String)],je.prototype,"destinationPlaceId",void 0);y([x({type:String,attribute:"destination-address",reflect:!0}),w("design:type",String)],je.prototype,"destinationAddress",void 0);y([x({converter:Ti,attribute:"origin-lat-lng",reflect:!0}),w("design:type",Object)],je.prototype,"originLatLng",void 0);y([x({type:String,attribute:"origin-place-id",reflect:!0}),w("design:type",String)],je.prototype,"originPlaceId",void 0);y([x({type:String,attribute:"origin-address",reflect:!0}),w("design:type",String)],je.prototype,"originAddress",void 0);y([x({attribute:!1}),w("design:type",Object)],je.prototype,"route",void 0);y([x({type:String,attribute:"travel-mode",reflect:!0}),w("design:type",Object)],je.prototype,"travelMode",void 0);y([x({type:Boolean,attribute:"no-pin",reflect:!0}),w("design:type",Object)],je.prototype,"noPin",void 0);je=aa=y([K("gmpx-route-overview"),w("design:paramtypes",[])],je);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Qy}=Bv,od=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,Xy=t=>{var e;return((e=t==null?void 0:t._$litType$)==null?void 0:e.h)!=null},Zy=t=>t.strings===void 0,sd=()=>document.createComment(""),vn=(t,e,n)=>{var o;const r=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(n===void 0){const s=r.insertBefore(sd(),i),l=r.insertBefore(sd(),i);n=new Qy(s,l,t,t.options)}else{const s=n._$AB.nextSibling,l=n._$AM,a=l!==t;if(a){let u;(o=n._$AQ)==null||o.call(n,t),n._$AM=t,n._$AP!==void 0&&(u=t._$AU)!==l._$AU&&n._$AP(u)}if(s!==i||a){let u=n._$AA;for(;u!==s;){const c=u.nextSibling;r.insertBefore(u,i),u=c}}}return n},fn=(t,e,n=t)=>(t._$AI(e,n),t),Jy={},ua=(t,e=Jy)=>t._$AH=e,ca=t=>t._$AH,ol=t=>{var r;(r=t._$AP)==null||r.call(t,!1,!0);let e=t._$AA;const n=t._$AB.nextSibling;for(;e!==n;){const i=e.nextSibling;e.remove(),e=i}},e0=t=>{t._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ld=t=>Xy(t)?t._$litType$.h:t.strings,t0=Ii(class extends Ni{constructor(t){super(t),this.et=new WeakMap}render(t){return[t]}update(t,[e]){const n=od(this.it)?ld(this.it):null,r=od(e)?ld(e):null;if(n!==null&&(r===null||n!==r)){const i=ca(t).pop();let o=this.et.get(n);if(o===void 0){const s=document.createDocumentFragment();o=Qf(U,s),o.setConnected(!1),this.et.set(n,o)}ua(o,[i]),vn(o,void 0,i)}if(r!==null){if(n===null||n!==r){const i=this.et.get(r);if(i!==void 0){const o=ca(i).pop();e0(t),vn(t,void 0,o),ua(t,[o])}}this.it=e}else this.it=void 0;return this.render(e)}});/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let on=class extends Oe{constructor(){super(...arguments),this.columnReverse=!1,this.rowLayoutMinWidth=640,this.rowReverse=!1,this.hasRowLayout=!0,this.slotValidator=new ys(this,this.logger,["main","fixed"])}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>void this.updateLayout()),this.resizeObserver.observe(this)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.disconnect()}willUpdate(){this.updateLayout()}render(){const e=S`
      <div class="fixed-container">
        <slot name="fixed"></slot>
      </div>
    `,n=S`
      <div class="main-container">
        <slot name="main"></slot>
      </div>
    `;return S`
    <div class="layout ${Vo({column:!this.hasRowLayout,row:this.hasRowLayout})}">
      ${t0(this.hasRowLayout&&this.rowReverse||!this.hasRowLayout&&!this.columnReverse?S`${n}${e}`:S`${e}${n}`)}
    </div>
    `}updateLayout(){this.hasRowLayout=this.clientWidth>=this.rowLayoutMinWidth}};on.styles=j`
    :host(:not([hidden])) {
      display: block;
      height: 100%;
    }

    .layout {
      display: flex;
      height: 100%;
      width: 100%;
    }

    .layout.column {
      flex-direction: column;
    }

    .layout.column .fixed-container {
      height: var(--gmpx-fixed-panel-height-column-layout, 50%);
    }

    .layout.row {
      flex-direction: row;
    }

    .layout.row .fixed-container {
      width: var(--gmpx-fixed-panel-width-row-layout, 320px);
    }

    .fixed-container {
      overflow: auto;
      z-index: 1;
    }

    .main-container {
      flex: 1;
      overflow: auto;
    }
  `;y([x({attribute:"column-reverse",reflect:!0,type:Boolean}),w("design:type",Object)],on.prototype,"columnReverse",void 0);y([x({attribute:"row-layout-min-width",reflect:!0,type:Number}),w("design:type",Object)],on.prototype,"rowLayoutMinWidth",void 0);y([x({attribute:"row-reverse",reflect:!0,type:Boolean}),w("design:type",Object)],on.prototype,"rowReverse",void 0);y([fe(),w("design:type",Object)],on.prototype,"hasRowLayout",void 0);on=y([K("gmpx-split-layout")],on);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qr=(t,e)=>{var r;const n=t._$AN;if(n===void 0)return!1;for(const i of n)(r=i._$AO)==null||r.call(i,e,!1),Qr(i,e);return!0},Jo=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while((n==null?void 0:n.size)===0)},Ch=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),i0(e)}};function n0(t){this._$AN!==void 0?(Jo(this),this._$AM=t,Ch(this)):this._$AM=t}function r0(t,e=!1,n=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(r))for(let o=n;o<r.length;o++)Qr(r[o],!1),Jo(r[o]);else r!=null&&(Qr(r,!1),Jo(r));else Qr(this,t)}const i0=t=>{var e,n;t.type==gs.CHILD&&((e=t._$AP)!=null||(t._$AP=r0),(n=t._$AQ)!=null||(t._$AQ=n0))};class o0 extends Ni{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,r){super._$AT(e,n,r),Ch(this),this.isConnected=e._$AU}_$AO(e,n=!0){var r,i;e!==this.isConnected&&(this.isConnected=e,e?(r=this.reconnected)==null||r.call(this):(i=this.disconnected)==null||i.call(this)),n&&(Qr(this,e),Jo(this))}setValue(e){if(Zy(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const sl=new WeakMap,s0=Ii(class extends o0{render(t){return U}update(t,[e]){var r;const n=e!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=e,this.ht=(r=t.options)==null?void 0:r.host,this.rt(this.ct=t.element)),U}rt(t){var e;if(typeof this.Y=="function"){const n=(e=this.ht)!=null?e:globalThis;let r=sl.get(n);r===void 0&&(r=new WeakMap,sl.set(n,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e,n;return typeof this.Y=="function"?(e=sl.get((t=this.ht)!=null?t:globalThis))==null?void 0:e.get(this.Y):(n=this.Y)==null?void 0:n.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ad=(t,e,n)=>{const r=new Map;for(let i=e;i<=n;i++)r.set(t[i],i);return r},ud=Ii(class extends Ni{constructor(t){if(super(t),t.type!==gs.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let r;n===void 0?n=e:e!==void 0&&(r=e);const i=[],o=[];let s=0;for(const l of t)i[s]=r?r(l,s):s,o[s]=n(l,s),s++;return{values:o,keys:i}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,r]){var _;const i=ca(t),{values:o,keys:s}=this.dt(e,n,r);if(!Array.isArray(i))return this.ut=s,o;const l=(_=this.ut)!=null?_:this.ut=[],a=[];let u,c,p=0,f=i.length-1,g=0,v=o.length-1;for(;p<=f&&g<=v;)if(i[p]===null)p++;else if(i[f]===null)f--;else if(l[p]===s[g])a[g]=fn(i[p],o[g]),p++,g++;else if(l[f]===s[v])a[v]=fn(i[f],o[v]),f--,v--;else if(l[p]===s[v])a[v]=fn(i[p],o[v]),vn(t,a[v+1],i[p]),p++,v--;else if(l[f]===s[g])a[g]=fn(i[f],o[g]),vn(t,i[p],i[f]),f--,g++;else if(u===void 0&&(u=ad(s,g,v),c=ad(l,p,f)),u.has(l[p]))if(u.has(l[f])){const N=c.get(s[g]),h=N!==void 0?i[N]:null;if(h===null){const d=vn(t,i[p]);fn(d,o[g]),a[g]=d}else a[g]=fn(h,o[g]),vn(t,i[p],h),i[N]=null;g++}else ol(i[f]),f--;else ol(i[p]),p++;for(;g<=v;){const N=vn(t,a[v+1]);fn(N,o[g]),a[g++]=N}for(;p<=f;){const N=i[p++];N!==null&&ol(N)}return this.ut=s,ua(t,a),Rt}});/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const l0=10,cd=25;function xh(){return new vh(l0,t=>t.code==="OVER_QUERY_LIMIT"||t.code==="UNKNOWN_ERROR")}var kn;(function(t){t[t.GEOMETRIC=0]="GEOMETRIC",t[t.DISTANCE_MATRIX=1]="DISTANCE_MATRIX"})(kn||(kn={}));class pt{constructor(e){this.elementForLogging=e}async computeDistances(e,n,r){const i=new Map;for(const u of n)i.set(u,{});let o=[...n];if(n.length>cd){const{spherical:u}=await G.importLibrary("geometry",this.elementForLogging);for(const[p,f]of i.entries())f.source=kn.GEOMETRIC,f.value=u.computeDistanceBetween(e,p);const c=p=>{var f,g;return(g=(f=i.get(p))==null?void 0:f.value)!=null?g:1/0};o.sort((p,f)=>c(p)-c(f)),o=o.slice(0,cd)}const s={origins:[e],destinations:o,travelMode:"DRIVING",unitSystem:r};let l=pt.cache.get(s);l==null&&(l=this.getService().then(u=>u.getDistanceMatrix(s)),pt.cache.set(s,l));const a=await l;for(let u=0;u<a.rows[0].elements.length;u++){const c=i.get(o[u]),p=a.rows[0].elements[u];p.status==="OK"&&(c.value=p.distance.value,c.text=p.distance.text,c.source=kn.DISTANCE_MATRIX)}return n.map(u=>i.get(u))}async getService(){if(!pt.service){const{DistanceMatrixService:e}=await G.importLibrary("routes",this.elementForLogging);pt.service=new e}return pt.service}static reset(){pt.cache=xh(),pt.service=void 0}}pt.cache=xh();/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ft={ADVANCED:"advanced",INTERMEDIATE:"intermediate",BASIC:"basic"};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function a0(t){var r;function e(i){var o;return{label:(o=i.label)!=null?o:"",defaultUri:i.defaultUrl}}const n=i=>{var o,s,l,a,u;return{title:(o=i.title)!=null?o:"",addressLines:[(s=i.address1)!=null?s:"",(l=i.address2)!=null?l:""].filter(Boolean),position:(a=i.coords)!=null?a:{lat:0,lng:0},placeId:i.placeId,actions:((u=i.actions)!=null?u:[]).map(e)}};return((r=t.locations)!=null?r:[]).map(n)}function u0(t){var e,n;return(e=t.capabilities)!=null&&e.directions?ft.ADVANCED:(n=t.capabilities)!=null&&n.input?ft.INTERMEDIATE:ft.BASIC}function c0(t){var n;const e={...(n=t.mapOptions)!=null?n:{}};return e.mapId||delete e.mapId,e}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const d0=j`
  :not(:defined) {
    visibility: hidden;
  }

  :host {
    /* Override the default split layout sizes */
    --_gmpx-fixed-panel-width-row-layout: var(--gmpx-fixed-panel-width-row-layout, 28.5em);
    --_gmpx-fixed-panel-height-column-layout: var(--gmpx-fixed-panel-height-column-layout, 65%);
  }

  :host(:not([hidden])) {
    display: block;
    height: 100%;
  }

  gmpx-split-layout {
    --gmpx-fixed-panel-width-row-layout: var(--_gmpx-fixed-panel-width-row-layout);
    --gmpx-fixed-panel-height-column-layout: var(--_gmpx-fixed-panel-height-column-layout);
    background: ${mn};
    color: ${Pt};
    font: ${ms};
  }

  a {
    color: ${$t};
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font: inherit;
    font-size: inherit;
    padding: 0;
  }

  #locations-panel {
    box-sizing: border-box;
    overflow-y: auto;
    padding: 0.5em;
  }

  #locations-panel-list > header {
    padding: 1.4em 1.4em 0 1.4em;
  }

  #locations-panel-list h1.search-title {
    align-items: center;
    display: flex;
    font: ${vo};
    margin: 0;
  }

  #locations-panel-list h1.search-title .icon {
    font-size: 150%;
    margin-right: 0.2em;
  }

  #locations-panel-list gmpx-place-picker {
    margin-top: 0.8em;
    position: relative;
    width: 100%;
  }

  #locations-panel-list .section-name {
    font: ${fr};
    margin: 1.8em 0 1em 1.5em;
  }

  #location-results-list .result-item {
    border-bottom: ${yi};
    cursor: pointer;
    padding: 0.8em 3.5em 0.8em 1.4em;
    position: relative;
  }

  #location-results-list .result-item:first-of-type {
    border-top: ${yi};
  }

  #location-results-list .result-item:last-of-type {
    border-bottom: none;
  }

  #location-results-list .selected .result-item {
    outline: 2px solid ${$t};
    outline-offset: -2px;
  }

  #location-results-list h2 {
    font: ${vo};
    margin: 0 0 0.6em 0;
  }

  #location-results-list .address {
    color: ${Wo};
    margin-bottom: 0.5em;
  }

  #location-results-list gmpx-place-directions-button {
    position: absolute;
    right: 1.2em;
    top: 2.6em;
  }

  #location-results-list .distance {
    position: absolute;
    right: 0;
    text-align: center;
    top: 0.9em;
    width: 5em;
  }

  #location-results-list .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3em;
    padding-top: 0.3em;
  }

  #location-results-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  #details-panel .back-button {
    align-items: center;
    color: ${$t};
    display: flex;
    font: ${vo};
    margin: 1em 0 0 1em;
  }

  #details-panel .back-button .icon {
    font-size: 140%;
    margin-right: 0.2em;
  }

  .search-pin {
    width: 25px;
    height: 25px;
    position: relative;
    top: 15px;
  }

  .search-pin > circle {
    fill: #3367D6;
    fill-opacity: 50%;
  }
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const p0={mapTypeControl:!1,maxZoom:17,streetViewControl:!1};let Pe=class extends Oe{constructor(){super(),this.featureSet=ft.ADVANCED,this.mapOptions=p0,this.internalListings=[],this.initialized=!1,this.getMsg=se.buildLocalizer(this),this.fontLoader=new un(this,[ye.GOOGLE_SANS_TEXT,ye.MATERIAL_SYMBOLS_OUTLINED]),this.distanceMeasurer=new pt(this),this.listingDistances=new Map,this.initialize()}shouldUpdate(e){return this.initialized}willUpdate(e){var n;(e.has("listings")||e.has("initialized"))&&(this.internalListings=((n=this.listings)!=null?n:[]).map(r=>this.createInternalListing(r)),this.listingDistances.clear())}updated(e){var n,r;(e.has("listings")||e.has("initialized"))&&this.updateBounds(),(e.has("mapOptions")||e.has("initialized"))&&this.mapOptions&&((r=(n=this.mapElement)==null?void 0:n.innerMap)==null||r.setOptions(this.mapOptions))}render(){return this.initialized?S`
      <gmpx-split-layout>
        <gmpx-overlay-layout slot="fixed">
          ${this.renderSidePanelMain()}
          ${this.renderSidePanelOverlay()}
        </gmpx-overlay-layout>
        ${this.renderMapPanel()}
      </gmpx-split-layout>
    `:U}configureFromQuickBuilder(e){this.listings=a0(e),this.featureSet=u0(e),this.mapOptions=c0(e)}async initialize(){this.mapsCoreLibrary=await G.importLibrary("core",this),this.initialized=!0}createInternalListing(e){var r;const n={place_id:e.placeId,name:e.title,formatted_address:(r=e.addressLines)==null?void 0:r.join(" "),geometry:{location:new this.mapsCoreLibrary.LatLng(e.position)}};return{...e,placeResult:n,uniqueKey:`${e.placeId}:${e.title}`}}isIntermediateOrBetter(){return this.featureSet===ft.INTERMEDIATE||this.featureSet===ft.ADVANCED}async updateDistances(e){if(!this.isIntermediateOrBetter()||!e||!this.internalListings.length)this.listingDistances.clear();else{const n=this.userCountry==="US"?this.mapsCoreLibrary.UnitSystem.IMPERIAL:this.mapsCoreLibrary.UnitSystem.METRIC,r=await this.distanceMeasurer.computeDistances(e,this.internalListings.map(i=>i.position),n);for(let i=0;i<r.length;i++)this.listingDistances.set(this.internalListings[i],r[i])}this.requestUpdate()}updateSearchLocation(e){var r;const n=e.target.value;if(this.searchLocation=n!=null?n:void 0,n!=null&&n.addressComponents){for(const i of n.addressComponents)if(i.types.indexOf("country")>=0){this.userCountry=(r=i.shortText)!=null?r:void 0;break}}this.updateBounds(),this.updateDistances(n==null?void 0:n.location)}selectLocation(e){return this.selectedListing===e?!1:(this.selectedListing=e,!0)}async updateBounds(){var n,r,i;if(!this.internalListings.length)return;const e=new this.mapsCoreLibrary.LatLngBounds;(n=this.searchLocation)!=null&&n.location&&e.extend(this.searchLocation.location);for(const o of this.internalListings)e.extend(o.position);(i=(r=this.mapElement)==null?void 0:r.innerMap)==null||i.fitBounds(e)}renderSidePanelOverlay(){return this.featureSet===ft.ADVANCED?S`
          <div slot="overlay" id="details-panel">
            <button class="back-button"
                @click=${()=>{var e;return(e=this.overlayLayout)==null?void 0:e.hideOverlay()}}>
              <span class="icon material-symbols-outlined">arrow_back</span>
              ${this.getMsg("LOCATOR_BACK_BUTTON_CTA")}
            </button>
            <gmpx-place-overview .place=${this.detailsPlaceId} google-logo-already-displayed>
            </gmpx-place-overview>
          </div>`:U}renderListItem(e){var u,c,p,f,g;const n=this.listingDistances.get(e),i=(n==null?void 0:n.text)&&n.source===kn.DISTANCE_MATRIX?n.text:U,o=[];if(this.featureSet===ft.ADVANCED){const v=()=>{var _;e.placeId&&(this.detailsPlaceId=e.placeId,(_=this.overlayLayout)==null||_.showOverlay())};o.push(S`
          <gmpx-icon-button class="view-details" @click=${v}>
            ${this.getMsg("LOCATOR_VIEW_DETAILS_CTA")}
          </gmpx-icon-button>`)}for(const v of(u=e.actions)!=null?u:[])o.push(S`
          <gmpx-icon-button icon="open_in_new" .href=${(c=v.defaultUri)!=null?c:U}>
            ${v.label}
          </gmpx-icon-button>`);const s=()=>{var _,N;this.selectLocation(e)&&this.selectedListing&&!this.searchLocation&&((N=(_=this.mapElement)==null?void 0:_.innerMap)==null||N.panTo(this.selectedListing.position))},l=s,a=v=>{s(),v.stopPropagation()};return S`
      <li @click=${l}
          class=${Vo({selected:e===this.selectedListing})}
          ${s0(v=>{e.listingElement=v})}>
        <gmpx-place-data-provider auto-fetch-disabled
            .place=${e.placeResult}>
          <div class="result-item">
            <button class="select-location" @click=${a}>
              <h2 class="name">
                <gmpx-place-field-text field="displayName"></gmpx-place-field-text>
              </h2>
            </button>
            <div class="address">
              ${ia((p=e.addressLines)!=null?p:[],S`<br>`)}
            </div>
            <div class="actions">
              ${ia(o,S``)}
            </div>
            <div class="distance">${i}</div>
            <gmpx-place-directions-button condensed
                .origin=${(g=(f=this.searchLocation)==null?void 0:f.location)!=null?g:void 0}>
            </gmpx-place-directions-button>
          </div>
        </gmpx-place-data-provider>
      </li>`}renderSidePanelMain(){let e=this.internalListings,n=this.getMsg("LOCATOR_LIST_SUBHEADING");if(this.listingDistances.size>0){n=this.getMsg("LOCATOR_LIST_SUBHEADING_WITH_SEARCH");const i=this.internalListings.filter(a=>{var u;return((u=this.listingDistances.get(a))==null?void 0:u.source)===kn.DISTANCE_MATRIX}),o=this.internalListings.filter(a=>{var u;return((u=this.listingDistances.get(a))==null?void 0:u.source)!==kn.DISTANCE_MATRIX}),s=a=>{var u,c;return(c=(u=this.listingDistances.get(a))==null?void 0:u.value)!=null?c:1/0},l=(a,u)=>s(a)-s(u);e=[...i.sort(l),...o.sort(l)]}const r=this.featureSet===ft.BASIC?U:S`
        <header>
          <h1 class="search-title">
            <span class="icon material-symbols-outlined">distance</span>
            ${this.getMsg("LOCATOR_LIST_HEADER")}
          </h1>
          <gmpx-place-picker for-map="main-map" type="geocode"
              .placeholder=${this.getMsg("LOCATOR_SEARCH_PROMPT")}
              @gmpx-placechange=${this.updateSearchLocation}>
          </gmpx-place-picker>
        </header>
    `;return S`
        <div slot="main" id="locations-panel">
          <div id="locations-panel-list">
            ${r}
            <div class="section-name">
              ${n} (${e.length})
            </div>
            <div class="results">
              <ul id="location-results-list">
                ${ud(e,i=>i.uniqueKey,i=>this.renderListItem(i))}
              </ul>
            </div>
          </div>
        </div>`}renderSearchMarker(){var e;return this.isIntermediateOrBetter()&&((e=this.searchLocation)!=null&&e.location)?S`
          <gmp-advanced-marker
              .position=${this.searchLocation.location}
              title="${this.getMsg("LOCATOR_SEARCH_LOCATION_MARKER_TITLE")}">
            <svg viewbox="0 0 100 100" class="search-pin">
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
          </gmp-advanced-marker>`:U}renderMapMarker(e){const r=()=>{this.selectLocation(e);const i=e.listingElement;i&&i.scrollIntoView({behavior:"smooth",block:"nearest"})};return S`
        <gmp-advanced-marker
            .position=${e.position}
            .title=${e.title}
            .zIndex=${100}
            gmp-clickable @gmp-click=${r}></gmp-advanced-marker>`}renderMapDirections(){var r,i;const e=(r=this.searchLocation)==null?void 0:r.location,n=(i=this.selectedListing)==null?void 0:i.position;return this.featureSet===ft.ADVANCED&&e&&n?S`
      <gmpx-route-overview no-pin
          .originLatLng=${e}
          .destinationLatLng=${n}>
      </gmpx-route-overview>`:U}renderMapPanel(){var e;return S`
        <gmp-map slot="main" id="main-map" .mapId=${(e=this.mapId)!=null?e:U}>
          ${this.renderMapDirections()}
          ${ud(this.internalListings,n=>n.uniqueKey,n=>this.renderMapMarker(n))}
          ${this.renderSearchMarker()}
        </gmp-map>`}};Pe.styles=d0;y([x({attribute:"feature-set",reflect:!0}),w("design:type",String)],Pe.prototype,"featureSet",void 0);y([x({attribute:"map-id",reflect:!0}),w("design:type",String)],Pe.prototype,"mapId",void 0);y([x({attribute:!1}),w("design:type",Array)],Pe.prototype,"listings",void 0);y([x({attribute:!1}),w("design:type",Object)],Pe.prototype,"mapOptions",void 0);y([fe(),w("design:type",Array)],Pe.prototype,"internalListings",void 0);y([fe(),w("design:type",Object)],Pe.prototype,"selectedListing",void 0);y([fe(),w("design:type",Object)],Pe.prototype,"searchLocation",void 0);y([fe(),w("design:type",String)],Pe.prototype,"detailsPlaceId",void 0);y([fe(),w("design:type",Object)],Pe.prototype,"initialized",void 0);y([ut("gmpx-overlay-layout"),w("design:type",Function)],Pe.prototype,"overlayLayout",void 0);y([ut("gmp-map"),w("design:type",Object)],Pe.prototype,"mapElement",void 0);Pe=y([K("gmpx-store-locator"),w("design:paramtypes",[])],Pe);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const f0=te({tagName:"gmpx-api-loader",elementClass:G,react:ee});f0.importLibrary=G.importLibrary;const dd=te({tagName:"gmpx-icon-button",elementClass:Fe,react:ee}),h0=te({tagName:"gmpx-overlay-layout",elementClass:Mt,react:ee});te({tagName:"gmpx-place-attribution",elementClass:Ln,react:ee});const g0=te({tagName:"gmpx-place-data-provider",elementClass:wt,react:ee,events:{onRequestError:"gmpx-requesterror"}}),m0=te({tagName:"gmpx-place-directions-button",elementClass:bt,react:ee});te({tagName:"gmpx-place-field-boolean",elementClass:_i,react:ee});te({tagName:"gmpx-place-field-link",elementClass:hr,react:ee});te({tagName:"gmpx-place-field-text",elementClass:qo,react:ee});te({tagName:"gmpx-place-opening-hours",elementClass:gr,react:ee});const v0=te({tagName:"gmpx-place-overview",elementClass:Qe,react:ee,events:{onRequestError:"gmpx-requesterror"}});te({tagName:"gmpx-place-photo-gallery",elementClass:_t,react:ee});const y0=te({tagName:"gmpx-place-picker",elementClass:pe,react:ee,events:{onPlaceChange:"gmpx-placechange",onRequestError:"gmpx-requesterror"}});te({tagName:"gmpx-place-price-level",elementClass:Xo,react:ee});te({tagName:"gmpx-place-rating",elementClass:Ei,react:ee});const w0=te({tagName:"gmpx-place-reviews",elementClass:Si,react:ee});te({tagName:"gmpx-route-data-provider",elementClass:Xe,react:ee,events:{onRequestError:"gmpx-requesterror"}});te({tagName:"gmpx-route-marker",elementClass:vr,react:ee});te({tagName:"gmpx-route-overview",elementClass:je,react:ee,events:{onRequestError:"gmpx-requesterror"}});te({tagName:"gmpx-route-polyline",elementClass:Dt,react:ee});const _0=te({tagName:"gmpx-split-layout",elementClass:on,react:ee});te({tagName:"gmpx-store-locator",elementClass:Pe,react:ee});/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var yd;const E0=(yd=globalThis.GOOGLE_MAPS_API_KEY)!=null?yd:"AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",S0={lat:38,lng:-98},C0=4,x0=16,L0=()=>{var i;const t=I.useRef(null),e=I.useRef(null),[n,r]=I.useState(void 0);return M.createElement("div",{className:"App"},M.createElement(nv,{solutionChannel:"GMP_devsite_samples_v3_rgmcollegepicker",apiKey:E0,version:"beta"},M.createElement(_0,{rowReverse:!0,rowLayoutMinWidth:700},M.createElement("div",{className:"SlotDiv",slot:"fixed"},M.createElement(h0,{ref:t},M.createElement("div",{className:"SlotDiv",slot:"main"},M.createElement(y0,{className:"CollegePicker",ref:e,forMap:"gmap",country:["us","ca"],type:"university",placeholder:"Enter a college in the US or Canada",onPlaceChange:()=>{var o,s;(o=e.current)!=null&&o.value?r((s=e.current)==null?void 0:s.value):r(void 0)}}),M.createElement(v0,{size:"large",place:n,googleLogoAlreadyDisplayed:!0},M.createElement("div",{slot:"action",className:"SlotDiv"},M.createElement(dd,{slot:"action",variant:"filled",onClick:()=>{var o;return(o=t.current)==null?void 0:o.showOverlay()}},"See Reviews")),M.createElement("div",{slot:"action",className:"SlotDiv"},M.createElement(m0,{slot:"action",variant:"filled"},"Directions")))),M.createElement("div",{slot:"overlay",className:"SlotDiv"},M.createElement(dd,{className:"CloseButton",onClick:()=>{var o;return(o=t.current)==null?void 0:o.hideOverlay()}},"Close"),M.createElement(g0,{place:n},M.createElement(w0,null))))),M.createElement("div",{className:"SplitLayoutContainer",slot:"main"},M.createElement(bf,{id:"gmap",mapId:"8c732c82e4ec29d9",center:(i=n==null?void 0:n.location)!=null?i:S0,zoom:n!=null&&n.location?x0:C0,gestureHandling:"none",fullscreenControl:!1,zoomControl:!1},(n==null?void 0:n.location)&&M.createElement(kv,{position:n==null?void 0:n.location},M.createElement($v,{background:"#FBBC04",glyphColor:"#000",borderColor:"#000"})))))))},k0=ll.createRoot(document.getElementById("root"));k0.render(M.createElement(M.StrictMode,null,M.createElement(L0,null)));
