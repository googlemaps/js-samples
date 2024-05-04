function Sh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function md(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yd={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Si=Symbol.for("react.element"),xh=Symbol.for("react.portal"),Ch=Symbol.for("react.fragment"),Lh=Symbol.for("react.strict_mode"),kh=Symbol.for("react.profiler"),Ph=Symbol.for("react.provider"),Ah=Symbol.for("react.context"),$h=Symbol.for("react.forward_ref"),Oh=Symbol.for("react.suspense"),Nh=Symbol.for("react.memo"),Ih=Symbol.for("react.lazy"),mu=Symbol.iterator;function Th(e){return e===null||typeof e!="object"?null:(e=mu&&e[mu]||e["@@iterator"],typeof e=="function"?e:null)}var vd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_d=Object.assign,wd={};function vr(e,t,n){this.props=e,this.context=t,this.refs=wd,this.updater=n||vd}vr.prototype.isReactComponent={};vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ed(){}Ed.prototype=vr.prototype;function aa(e,t,n){this.props=e,this.context=t,this.refs=wd,this.updater=n||vd}var ua=aa.prototype=new Ed;ua.constructor=aa;_d(ua,vr.prototype);ua.isPureReactComponent=!0;var yu=Array.isArray,Sd=Object.prototype.hasOwnProperty,ca={current:null},xd={key:!0,ref:!0,__self:!0,__source:!0};function Cd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Sd.call(t,r)&&!xd.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Si,type:e,key:o,ref:s,props:i,_owner:ca.current}}function Rh(e,t){return{$$typeof:Si,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function da(e){return typeof e=="object"&&e!==null&&e.$$typeof===Si}function Mh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vu=/\/+/g;function xs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Mh(""+e.key):t.toString(36)}function Ji(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Si:case xh:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+xs(s,0):r,yu(i)?(n="",e!=null&&(n=e.replace(vu,"$&/")+"/"),Ji(i,t,n,"",function(u){return u})):i!=null&&(da(i)&&(i=Rh(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(vu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",yu(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+xs(o,l);s+=Ji(o,t,n,a,i)}else if(a=Th(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+xs(o,l++),s+=Ji(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ri(e,t,n){if(e==null)return e;var r=[],i=0;return Ji(e,r,"","",function(o){return t.call(n,o,i++)}),r}function bh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ae={current:null},eo={transition:null},Dh={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:eo,ReactCurrentOwner:ca};D.Children={map:Ri,forEach:function(e,t,n){Ri(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ri(e,function(){t++}),t},toArray:function(e){return Ri(e,function(t){return t})||[]},only:function(e){if(!da(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=vr;D.Fragment=Ch;D.Profiler=kh;D.PureComponent=aa;D.StrictMode=Lh;D.Suspense=Oh;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dh;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_d({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=ca.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Sd.call(t,a)&&!xd.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Si,type:e.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:Ah,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ph,_context:e},e.Consumer=e};D.createElement=Cd;D.createFactory=function(e){var t=Cd.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:$h,render:e}};D.isValidElement=da;D.lazy=function(e){return{$$typeof:Ih,_payload:{_status:-1,_result:e},_init:bh}};D.memo=function(e,t){return{$$typeof:Nh,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=eo.transition;eo.transition={};try{e()}finally{eo.transition=t}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(e,t){return Ae.current.useCallback(e,t)};D.useContext=function(e){return Ae.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return Ae.current.useDeferredValue(e)};D.useEffect=function(e,t){return Ae.current.useEffect(e,t)};D.useId=function(){return Ae.current.useId()};D.useImperativeHandle=function(e,t,n){return Ae.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return Ae.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return Ae.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return Ae.current.useMemo(e,t)};D.useReducer=function(e,t,n){return Ae.current.useReducer(e,t,n)};D.useRef=function(e){return Ae.current.useRef(e)};D.useState=function(e){return Ae.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return Ae.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return Ae.current.useTransition()};D.version="18.2.0";yd.exports=D;var $=yd.exports;const b=md($),J=Sh({__proto__:null,default:b},[$]);var ol={},Ld={exports:{}},Be={},kd={exports:{}},Pd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,T){var M=P.length;P.push(T);e:for(;0<M;){var ne=M-1>>>1,ae=P[ne];if(0<i(ae,T))P[ne]=T,P[M]=ae,M=ne;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var T=P[0],M=P.pop();if(M!==T){P[0]=M;e:for(var ne=0,ae=P.length,Ii=ae>>>1;ne<Ii;){var cn=2*(ne+1)-1,Ss=P[cn],dn=cn+1,Ti=P[dn];if(0>i(Ss,M))dn<ae&&0>i(Ti,Ss)?(P[ne]=Ti,P[dn]=M,ne=dn):(P[ne]=Ss,P[cn]=M,ne=cn);else if(dn<ae&&0>i(Ti,M))P[ne]=Ti,P[dn]=M,ne=dn;else break e}}return T}function i(P,T){var M=P.sortIndex-T.sortIndex;return M!==0?M:P.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],d=1,p=null,f=3,m=!1,y=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var T=n(u);T!==null;){if(T.callback===null)r(u);else if(T.startTime<=P)r(u),T.sortIndex=T.expirationTime,t(a,T);else break;T=n(u)}}function E(P){if(w=!1,g(P),!y)if(n(a)!==null)y=!0,ws(L);else{var T=n(u);T!==null&&Es(E,T.startTime-P)}}function L(P,T){y=!1,w&&(w=!1,h(I),I=-1),m=!0;var M=f;try{for(g(T),p=n(a);p!==null&&(!(p.expirationTime>T)||P&&!Ze());){var ne=p.callback;if(typeof ne=="function"){p.callback=null,f=p.priorityLevel;var ae=ne(p.expirationTime<=T);T=e.unstable_now(),typeof ae=="function"?p.callback=ae:p===n(a)&&r(a),g(T)}else r(a);p=n(a)}if(p!==null)var Ii=!0;else{var cn=n(u);cn!==null&&Es(E,cn.startTime-T),Ii=!1}return Ii}finally{p=null,f=M,m=!1}}var A=!1,O=null,I=-1,te=5,z=-1;function Ze(){return!(e.unstable_now()-z<te)}function Sr(){if(O!==null){var P=e.unstable_now();z=P;var T=!0;try{T=O(!0,P)}finally{T?xr():(A=!1,O=null)}}else A=!1}var xr;if(typeof c=="function")xr=function(){c(Sr)};else if(typeof MessageChannel!="undefined"){var gu=new MessageChannel,Eh=gu.port2;gu.port1.onmessage=Sr,xr=function(){Eh.postMessage(null)}}else xr=function(){N(Sr,0)};function ws(P){O=P,A||(A=!0,xr())}function Es(P,T){I=N(function(){P(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,ws(L))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(P){switch(f){case 1:case 2:case 3:var T=3;break;default:T=f}var M=f;f=T;try{return P()}finally{f=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,T){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=f;f=P;try{return T()}finally{f=M}},e.unstable_scheduleCallback=function(P,T,M){var ne=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?ne+M:ne):M=ne,P){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=M+ae,P={id:d++,callback:T,priorityLevel:P,startTime:M,expirationTime:ae,sortIndex:-1},M>ne?(P.sortIndex=M,t(u,P),n(a)===null&&P===n(u)&&(w?(h(I),I=-1):w=!0,Es(E,M-ne))):(P.sortIndex=ae,t(a,P),y||m||(y=!0,ws(L))),P},e.unstable_shouldYield=Ze,e.unstable_wrapCallback=function(P){var T=f;return function(){var M=f;f=T;try{return P.apply(this,arguments)}finally{f=M}}}})(Pd);kd.exports=Pd;var zh=kd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad=$,Ue=zh;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $d=new Set,qr={};function Mn(e,t){sr(e,t),sr(e+"Capture",t)}function sr(e,t){for(qr[e]=t,e=0;e<t.length;e++)$d.add(t[e])}var Ot=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),sl=Object.prototype.hasOwnProperty,Uh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_u={},wu={};function Fh(e){return sl.call(wu,e)?!0:sl.call(_u,e)?!1:Uh.test(e)?wu[e]=!0:(_u[e]=!0,!1)}function jh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bh(e,t,n,r){if(t===null||typeof t=="undefined"||jh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var pa=/[\-:]([a-z])/g;function fa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pa,fa);ye[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pa,fa);ye[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pa,fa);ye[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function ha(e,t,n,r){var i=ye.hasOwnProperty(t)?ye[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bh(t,n,i,r)&&(n=null),r||i===null?Fh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zt=Ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mi=Symbol.for("react.element"),jn=Symbol.for("react.portal"),Bn=Symbol.for("react.fragment"),ga=Symbol.for("react.strict_mode"),ll=Symbol.for("react.profiler"),Od=Symbol.for("react.provider"),Nd=Symbol.for("react.context"),ma=Symbol.for("react.forward_ref"),al=Symbol.for("react.suspense"),ul=Symbol.for("react.suspense_list"),ya=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),Id=Symbol.for("react.offscreen"),Eu=Symbol.iterator;function Cr(e){return e===null||typeof e!="object"?null:(e=Eu&&e[Eu]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Cs;function Tr(e){if(Cs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Cs=t&&t[1]||""}return`
`+Cs+e}var Ls=!1;function ks(e,t){if(!e||Ls)return"";Ls=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Ls=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tr(e):""}function Hh(e){switch(e.tag){case 5:return Tr(e.type);case 16:return Tr("Lazy");case 13:return Tr("Suspense");case 19:return Tr("SuspenseList");case 0:case 2:case 15:return e=ks(e.type,!1),e;case 11:return e=ks(e.type.render,!1),e;case 1:return e=ks(e.type,!0),e;default:return""}}function cl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bn:return"Fragment";case jn:return"Portal";case ll:return"Profiler";case ga:return"StrictMode";case al:return"Suspense";case ul:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nd:return(e.displayName||"Context")+".Consumer";case Od:return(e._context.displayName||"Context")+".Provider";case ma:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ya:return t=e.displayName||null,t!==null?t:cl(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return cl(e(t))}catch{}}return null}function Vh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cl(t);case 8:return t===ga?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Td(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wh(e){var t=Td(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bi(e){e._valueTracker||(e._valueTracker=Wh(e))}function Rd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Td(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ho(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function dl(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Su(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Md(e,t){t=t.checked,t!=null&&ha(e,"checked",t,!1)}function pl(e,t){Md(e,t);var n=tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&fl(e,t.type,tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fl(e,t,n){(t!=="number"||ho(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rr=Array.isArray;function Jn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+tn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Rr(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:tn(n)}}function bd(e,t){var n=tn(t.value),r=tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Lu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Di,zd=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Di=Di||document.createElement("div"),Di.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Di.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gh=["Webkit","ms","Moz","O"];Object.keys(Dr).forEach(function(e){Gh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dr[t]=Dr[e]})});function Ud(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dr.hasOwnProperty(e)&&Dr[e]?(""+t).trim():t+"px"}function Fd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ud(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Yh=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(e,t){if(t){if(Yh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function yl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vl=null;function va(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _l=null,er=null,tr=null;function ku(e){if(e=Li(e)){if(typeof _l!="function")throw Error(x(280));var t=e.stateNode;t&&(t=ts(t),_l(e.stateNode,e.type,t))}}function jd(e){er?tr?tr.push(e):tr=[e]:er=e}function Bd(){if(er){var e=er,t=tr;if(tr=er=null,ku(e),t)for(e=0;e<t.length;e++)ku(t[e])}}function Hd(e,t){return e(t)}function Vd(){}var Ps=!1;function Wd(e,t,n){if(Ps)return e(t,n);Ps=!0;try{return Hd(e,t,n)}finally{Ps=!1,(er!==null||tr!==null)&&(Vd(),Bd())}}function Zr(e,t){var n=e.stateNode;if(n===null)return null;var r=ts(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var wl=!1;if(Ot)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){wl=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{wl=!1}function Kh(e,t,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var zr=!1,go=null,mo=!1,El=null,Qh={onError:function(e){zr=!0,go=e}};function qh(e,t,n,r,i,o,s,l,a){zr=!1,go=null,Kh.apply(Qh,arguments)}function Xh(e,t,n,r,i,o,s,l,a){if(qh.apply(this,arguments),zr){if(zr){var u=go;zr=!1,go=null}else throw Error(x(198));mo||(mo=!0,El=u)}}function bn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Gd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pu(e){if(bn(e)!==e)throw Error(x(188))}function Zh(e){var t=e.alternate;if(!t){if(t=bn(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Pu(i),e;if(o===r)return Pu(i),t;o=o.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function Yd(e){return e=Zh(e),e!==null?Kd(e):null}function Kd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Kd(e);if(t!==null)return t;e=e.sibling}return null}var Qd=Ue.unstable_scheduleCallback,Au=Ue.unstable_cancelCallback,Jh=Ue.unstable_shouldYield,eg=Ue.unstable_requestPaint,re=Ue.unstable_now,tg=Ue.unstable_getCurrentPriorityLevel,_a=Ue.unstable_ImmediatePriority,qd=Ue.unstable_UserBlockingPriority,yo=Ue.unstable_NormalPriority,ng=Ue.unstable_LowPriority,Xd=Ue.unstable_IdlePriority,Xo=null,mt=null;function rg(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Xo,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:sg,ig=Math.log,og=Math.LN2;function sg(e){return e>>>=0,e===0?32:31-(ig(e)/og|0)|0}var zi=64,Ui=4194304;function Mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Mr(l):(o&=s,o!==0&&(r=Mr(o)))}else s=n&~i,s!==0?r=Mr(s):o!==0&&(r=Mr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-st(t),i=1<<n,r|=e[n],t&=~i;return r}function lg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ag(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-st(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=lg(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function Sl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Zd(){var e=zi;return zi<<=1,!(zi&4194240)&&(zi=64),e}function As(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function ug(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-st(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function wa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function Jd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ep,Ea,tp,np,rp,xl=!1,Fi=[],Gt=null,Yt=null,Kt=null,Jr=new Map,ei=new Map,Bt=[],cg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $u(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Kt=null;break;case"pointerover":case"pointerout":Jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ei.delete(t.pointerId)}}function kr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Li(t),t!==null&&Ea(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function dg(e,t,n,r,i){switch(t){case"focusin":return Gt=kr(Gt,e,t,n,r,i),!0;case"dragenter":return Yt=kr(Yt,e,t,n,r,i),!0;case"mouseover":return Kt=kr(Kt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Jr.set(o,kr(Jr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ei.set(o,kr(ei.get(o)||null,e,t,n,r,i)),!0}return!1}function ip(e){var t=vn(e.target);if(t!==null){var n=bn(t);if(n!==null){if(t=n.tag,t===13){if(t=Gd(n),t!==null){e.blockedOn=t,rp(e.priority,function(){tp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function to(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vl=r,n.target.dispatchEvent(r),vl=null}else return t=Li(n),t!==null&&Ea(t),e.blockedOn=n,!1;t.shift()}return!0}function Ou(e,t,n){to(e)&&n.delete(t)}function pg(){xl=!1,Gt!==null&&to(Gt)&&(Gt=null),Yt!==null&&to(Yt)&&(Yt=null),Kt!==null&&to(Kt)&&(Kt=null),Jr.forEach(Ou),ei.forEach(Ou)}function Pr(e,t){e.blockedOn===t&&(e.blockedOn=null,xl||(xl=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,pg)))}function ti(e){function t(i){return Pr(i,e)}if(0<Fi.length){Pr(Fi[0],e);for(var n=1;n<Fi.length;n++){var r=Fi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&Pr(Gt,e),Yt!==null&&Pr(Yt,e),Kt!==null&&Pr(Kt,e),Jr.forEach(t),ei.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)ip(n),n.blockedOn===null&&Bt.shift()}var nr=zt.ReactCurrentBatchConfig,_o=!0;function fg(e,t,n,r){var i=B,o=nr.transition;nr.transition=null;try{B=1,Sa(e,t,n,r)}finally{B=i,nr.transition=o}}function hg(e,t,n,r){var i=B,o=nr.transition;nr.transition=null;try{B=4,Sa(e,t,n,r)}finally{B=i,nr.transition=o}}function Sa(e,t,n,r){if(_o){var i=Cl(e,t,n,r);if(i===null)zs(e,t,r,wo,n),$u(e,r);else if(dg(i,e,t,n,r))r.stopPropagation();else if($u(e,r),t&4&&-1<cg.indexOf(e)){for(;i!==null;){var o=Li(i);if(o!==null&&ep(o),o=Cl(e,t,n,r),o===null&&zs(e,t,r,wo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else zs(e,t,r,null,n)}}var wo=null;function Cl(e,t,n,r){if(wo=null,e=va(r),e=vn(e),e!==null)if(t=bn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Gd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wo=e,null}function op(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tg()){case _a:return 1;case qd:return 4;case yo:case ng:return 16;case Xd:return 536870912;default:return 16}default:return 16}}var Vt=null,xa=null,no=null;function sp(){if(no)return no;var e,t=xa,n=t.length,r,i="value"in Vt?Vt.value:Vt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return no=i.slice(e,1<r?1-r:void 0)}function ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ji(){return!0}function Nu(){return!1}function He(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ji:Nu,this.isPropagationStopped=Nu,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),t}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ca=He(_r),Ci=X({},_r,{view:0,detail:0}),gg=He(Ci),$s,Os,Ar,Zo=X({},Ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:La,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ar&&(Ar&&e.type==="mousemove"?($s=e.screenX-Ar.screenX,Os=e.screenY-Ar.screenY):Os=$s=0,Ar=e),$s)},movementY:function(e){return"movementY"in e?e.movementY:Os}}),Iu=He(Zo),mg=X({},Zo,{dataTransfer:0}),yg=He(mg),vg=X({},Ci,{relatedTarget:0}),Ns=He(vg),_g=X({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),wg=He(_g),Eg=X({},_r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sg=He(Eg),xg=X({},_r,{data:0}),Tu=He(xg),Cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kg[e])?!!t[e]:!1}function La(){return Pg}var Ag=X({},Ci,{key:function(e){if(e.key){var t=Cg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:La,charCode:function(e){return e.type==="keypress"?ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$g=He(Ag),Og=X({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ru=He(Og),Ng=X({},Ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:La}),Ig=He(Ng),Tg=X({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rg=He(Tg),Mg=X({},Zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bg=He(Mg),Dg=[9,13,27,32],ka=Ot&&"CompositionEvent"in window,Ur=null;Ot&&"documentMode"in document&&(Ur=document.documentMode);var zg=Ot&&"TextEvent"in window&&!Ur,lp=Ot&&(!ka||Ur&&8<Ur&&11>=Ur),Mu=" ",bu=!1;function ap(e,t){switch(e){case"keyup":return Dg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function Ug(e,t){switch(e){case"compositionend":return up(t);case"keypress":return t.which!==32?null:(bu=!0,Mu);case"textInput":return e=t.data,e===Mu&&bu?null:e;default:return null}}function Fg(e,t){if(Hn)return e==="compositionend"||!ka&&ap(e,t)?(e=sp(),no=xa=Vt=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lp&&t.locale!=="ko"?null:t.data;default:return null}}var jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jg[e.type]:t==="textarea"}function cp(e,t,n,r){jd(r),t=Eo(t,"onChange"),0<t.length&&(n=new Ca("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fr=null,ni=null;function Bg(e){Ep(e,0)}function Jo(e){var t=Gn(e);if(Rd(t))return e}function Hg(e,t){if(e==="change")return t}var dp=!1;if(Ot){var Is;if(Ot){var Ts="oninput"in document;if(!Ts){var zu=document.createElement("div");zu.setAttribute("oninput","return;"),Ts=typeof zu.oninput=="function"}Is=Ts}else Is=!1;dp=Is&&(!document.documentMode||9<document.documentMode)}function Uu(){Fr&&(Fr.detachEvent("onpropertychange",pp),ni=Fr=null)}function pp(e){if(e.propertyName==="value"&&Jo(ni)){var t=[];cp(t,ni,e,va(e)),Wd(Bg,t)}}function Vg(e,t,n){e==="focusin"?(Uu(),Fr=t,ni=n,Fr.attachEvent("onpropertychange",pp)):e==="focusout"&&Uu()}function Wg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jo(ni)}function Gg(e,t){if(e==="click")return Jo(t)}function Yg(e,t){if(e==="input"||e==="change")return Jo(t)}function Kg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:Kg;function ri(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sl.call(t,i)||!at(e[i],t[i]))return!1}return!0}function Fu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ju(e,t){var n=Fu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fu(n)}}function fp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hp(){for(var e=window,t=ho();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ho(e.document)}return t}function Pa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qg(e){var t=hp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fp(n.ownerDocument.documentElement,n)){if(r!==null&&Pa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ju(n,o);var s=ju(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qg=Ot&&"documentMode"in document&&11>=document.documentMode,Vn=null,Ll=null,jr=null,kl=!1;function Bu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kl||Vn==null||Vn!==ho(r)||(r=Vn,"selectionStart"in r&&Pa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&ri(jr,r)||(jr=r,r=Eo(Ll,"onSelect"),0<r.length&&(t=new Ca("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vn)))}function Bi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wn={animationend:Bi("Animation","AnimationEnd"),animationiteration:Bi("Animation","AnimationIteration"),animationstart:Bi("Animation","AnimationStart"),transitionend:Bi("Transition","TransitionEnd")},Rs={},gp={};Ot&&(gp=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function es(e){if(Rs[e])return Rs[e];if(!Wn[e])return e;var t=Wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gp)return Rs[e]=t[n];return e}var mp=es("animationend"),yp=es("animationiteration"),vp=es("animationstart"),_p=es("transitionend"),wp=new Map,Hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){wp.set(e,t),Mn(t,[e])}for(var Ms=0;Ms<Hu.length;Ms++){var bs=Hu[Ms],Xg=bs.toLowerCase(),Zg=bs[0].toUpperCase()+bs.slice(1);sn(Xg,"on"+Zg)}sn(mp,"onAnimationEnd");sn(yp,"onAnimationIteration");sn(vp,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(_p,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jg=new Set("cancel close invalid load scroll toggle".split(" ").concat(br));function Vu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xh(r,t,void 0,e),e.currentTarget=null}function Ep(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Vu(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Vu(i,l,u),o=a}}}if(mo)throw e=El,mo=!1,El=null,e}function V(e,t){var n=t[Nl];n===void 0&&(n=t[Nl]=new Set);var r=e+"__bubble";n.has(r)||(Sp(t,e,2,!1),n.add(r))}function Ds(e,t,n){var r=0;t&&(r|=4),Sp(n,e,r,t)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function ii(e){if(!e[Hi]){e[Hi]=!0,$d.forEach(function(n){n!=="selectionchange"&&(Jg.has(n)||Ds(n,!1,e),Ds(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hi]||(t[Hi]=!0,Ds("selectionchange",!1,t))}}function Sp(e,t,n,r){switch(op(t)){case 1:var i=fg;break;case 4:i=hg;break;default:i=Sa}n=i.bind(null,t,n,e),i=void 0,!wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function zs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=vn(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Wd(function(){var u=o,d=va(n),p=[];e:{var f=wp.get(e);if(f!==void 0){var m=Ca,y=e;switch(e){case"keypress":if(ro(n)===0)break e;case"keydown":case"keyup":m=$g;break;case"focusin":y="focus",m=Ns;break;case"focusout":y="blur",m=Ns;break;case"beforeblur":case"afterblur":m=Ns;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=yg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ig;break;case mp:case yp:case vp:m=wg;break;case _p:m=Rg;break;case"scroll":m=gg;break;case"wheel":m=bg;break;case"copy":case"cut":case"paste":m=Sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ru}var w=(t&4)!==0,N=!w&&e==="scroll",h=w?f!==null?f+"Capture":null:f;w=[];for(var c=u,g;c!==null;){g=c;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,h!==null&&(E=Zr(c,h),E!=null&&w.push(oi(c,E,g)))),N)break;c=c.return}0<w.length&&(f=new m(f,y,null,n,d),p.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==vl&&(y=n.relatedTarget||n.fromElement)&&(vn(y)||y[Nt]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?vn(y):null,y!==null&&(N=bn(y),y!==N||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(w=Iu,E="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ru,E="onPointerLeave",h="onPointerEnter",c="pointer"),N=m==null?f:Gn(m),g=y==null?f:Gn(y),f=new w(E,c+"leave",m,n,d),f.target=N,f.relatedTarget=g,E=null,vn(d)===u&&(w=new w(h,c+"enter",y,n,d),w.target=g,w.relatedTarget=N,E=w),N=E,m&&y)t:{for(w=m,h=y,c=0,g=w;g;g=Dn(g))c++;for(g=0,E=h;E;E=Dn(E))g++;for(;0<c-g;)w=Dn(w),c--;for(;0<g-c;)h=Dn(h),g--;for(;c--;){if(w===h||h!==null&&w===h.alternate)break t;w=Dn(w),h=Dn(h)}w=null}else w=null;m!==null&&Wu(p,f,m,w,!1),y!==null&&N!==null&&Wu(p,N,y,w,!0)}}e:{if(f=u?Gn(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var L=Hg;else if(Du(f))if(dp)L=Yg;else{L=Wg;var A=Vg}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(L=Gg);if(L&&(L=L(e,u))){cp(p,L,n,d);break e}A&&A(e,f,u),e==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&fl(f,"number",f.value)}switch(A=u?Gn(u):window,e){case"focusin":(Du(A)||A.contentEditable==="true")&&(Vn=A,Ll=u,jr=null);break;case"focusout":jr=Ll=Vn=null;break;case"mousedown":kl=!0;break;case"contextmenu":case"mouseup":case"dragend":kl=!1,Bu(p,n,d);break;case"selectionchange":if(qg)break;case"keydown":case"keyup":Bu(p,n,d)}var O;if(ka)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Hn?ap(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(lp&&n.locale!=="ko"&&(Hn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Hn&&(O=sp()):(Vt=d,xa="value"in Vt?Vt.value:Vt.textContent,Hn=!0)),A=Eo(u,I),0<A.length&&(I=new Tu(I,e,null,n,d),p.push({event:I,listeners:A}),O?I.data=O:(O=up(n),O!==null&&(I.data=O)))),(O=zg?Ug(e,n):Fg(e,n))&&(u=Eo(u,"onBeforeInput"),0<u.length&&(d=new Tu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=O))}Ep(p,t)})}function oi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Eo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Zr(e,n),o!=null&&r.unshift(oi(e,o,i)),o=Zr(e,t),o!=null&&r.push(oi(e,o,i))),e=e.return}return r}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Zr(n,o),a!=null&&s.unshift(oi(n,a,l))):i||(a=Zr(n,o),a!=null&&s.push(oi(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var em=/\r\n?/g,tm=/\u0000|\uFFFD/g;function Gu(e){return(typeof e=="string"?e:""+e).replace(em,`
`).replace(tm,"")}function Vi(e,t,n){if(t=Gu(t),Gu(e)!==t&&n)throw Error(x(425))}function So(){}var Pl=null,Al=null;function $l(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ol=typeof setTimeout=="function"?setTimeout:void 0,nm=typeof clearTimeout=="function"?clearTimeout:void 0,Yu=typeof Promise=="function"?Promise:void 0,rm=typeof queueMicrotask=="function"?queueMicrotask:typeof Yu!="undefined"?function(e){return Yu.resolve(null).then(e).catch(im)}:Ol;function im(e){setTimeout(function(){throw e})}function Us(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ti(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ti(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ku(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),ht="__reactFiber$"+wr,si="__reactProps$"+wr,Nt="__reactContainer$"+wr,Nl="__reactEvents$"+wr,om="__reactListeners$"+wr,sm="__reactHandles$"+wr;function vn(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Nt]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ku(e);e!==null;){if(n=e[ht])return n;e=Ku(e)}return t}e=n,n=e.parentNode}return null}function Li(e){return e=e[ht]||e[Nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function ts(e){return e[si]||null}var Il=[],Yn=-1;function ln(e){return{current:e}}function W(e){0>Yn||(e.current=Il[Yn],Il[Yn]=null,Yn--)}function H(e,t){Yn++,Il[Yn]=e.current,e.current=t}var nn={},Se=ln(nn),Te=ln(!1),Pn=nn;function lr(e,t){var n=e.type.contextTypes;if(!n)return nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Re(e){return e=e.childContextTypes,e!=null}function xo(){W(Te),W(Se)}function Qu(e,t,n){if(Se.current!==nn)throw Error(x(168));H(Se,t),H(Te,n)}function xp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(x(108,Vh(e)||"Unknown",i));return X({},n,r)}function Co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nn,Pn=Se.current,H(Se,e),H(Te,Te.current),!0}function qu(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=xp(e,t,Pn),r.__reactInternalMemoizedMergedChildContext=e,W(Te),W(Se),H(Se,e)):W(Te),H(Te,n)}var St=null,ns=!1,Fs=!1;function Cp(e){St===null?St=[e]:St.push(e)}function lm(e){ns=!0,Cp(e)}function an(){if(!Fs&&St!==null){Fs=!0;var e=0,t=B;try{var n=St;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,ns=!1}catch(i){throw St!==null&&(St=St.slice(e+1)),Qd(_a,an),i}finally{B=t,Fs=!1}}return null}var Kn=[],Qn=0,Lo=null,ko=0,Ve=[],We=0,An=null,Lt=1,kt="";function hn(e,t){Kn[Qn++]=ko,Kn[Qn++]=Lo,Lo=e,ko=t}function Lp(e,t,n){Ve[We++]=Lt,Ve[We++]=kt,Ve[We++]=An,An=e;var r=Lt;e=kt;var i=32-st(r)-1;r&=~(1<<i),n+=1;var o=32-st(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Lt=1<<32-st(t)+i|n<<i|r,kt=o+e}else Lt=1<<o|n<<i|r,kt=e}function Aa(e){e.return!==null&&(hn(e,1),Lp(e,1,0))}function $a(e){for(;e===Lo;)Lo=Kn[--Qn],Kn[Qn]=null,ko=Kn[--Qn],Kn[Qn]=null;for(;e===An;)An=Ve[--We],Ve[We]=null,kt=Ve[--We],Ve[We]=null,Lt=Ve[--We],Ve[We]=null}var ze=null,De=null,Y=!1,ot=null;function kp(e,t){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,De=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,De=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:Lt,overflow:kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,De=null,!0):!1;default:return!1}}function Tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rl(e){if(Y){var t=De;if(t){var n=t;if(!Xu(e,t)){if(Tl(e))throw Error(x(418));t=Qt(n.nextSibling);var r=ze;t&&Xu(e,t)?kp(r,n):(e.flags=e.flags&-4097|2,Y=!1,ze=e)}}else{if(Tl(e))throw Error(x(418));e.flags=e.flags&-4097|2,Y=!1,ze=e}}}function Zu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Wi(e){if(e!==ze)return!1;if(!Y)return Zu(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$l(e.type,e.memoizedProps)),t&&(t=De)){if(Tl(e))throw Pp(),Error(x(418));for(;t;)kp(e,t),t=Qt(t.nextSibling)}if(Zu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){De=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}De=null}}else De=ze?Qt(e.stateNode.nextSibling):null;return!0}function Pp(){for(var e=De;e;)e=Qt(e.nextSibling)}function ar(){De=ze=null,Y=!1}function Oa(e){ot===null?ot=[e]:ot.push(e)}var am=zt.ReactCurrentBatchConfig;function tt(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Po=ln(null),Ao=null,qn=null,Na=null;function Ia(){Na=qn=Ao=null}function Ta(e){var t=Po.current;W(Po),e._currentValue=t}function Ml(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rr(e,t){Ao=e,Na=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ie=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(Na!==e)if(e={context:e,memoizedValue:t,next:null},qn===null){if(Ao===null)throw Error(x(308));qn=e,Ao.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return t}var _n=null;function Ra(e){_n===null?_n=[e]:_n.push(e)}function Ap(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ra(t)):(n.next=i.next,i.next=n),t.interleaved=n,It(e,r)}function It(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jt=!1;function Ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $p(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,It(e,n)}return i=r.interleaved,i===null?(t.next=t,Ra(r)):(t.next=i.next,i.next=t),r.interleaved=t,It(e,n)}function io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wa(e,n)}}function Ju(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $o(e,t,n,r){var i=e.updateQueue;jt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(o!==null){var p=i.baseState;s=0,d=u=a=null,l=o;do{var f=l.lane,m=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(f=t,m=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(m,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,f=typeof y=="function"?y.call(m,p,f):y,f==null)break e;p=X({},p,f);break e;case 2:jt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,a=p):d=d.next=m,s|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(a=p),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);On|=s,e.lanes=s,e.memoizedState=p}}function ec(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var Op=new Ad.Component().refs;function bl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var rs={isMounted:function(e){return(e=e._reactInternals)?bn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Zt(e),o=At(r,i);o.payload=t,n!=null&&(o.callback=n),t=qt(e,o,i),t!==null&&(lt(t,e,i,r),io(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),i=Zt(e),o=At(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=qt(e,o,i),t!==null&&(lt(t,e,i,r),io(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Zt(e),i=At(n,r);i.tag=2,t!=null&&(i.callback=t),t=qt(e,i,r),t!==null&&(lt(t,e,r,n),io(t,e,r))}};function tc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ri(n,r)||!ri(i,o):!0}function Np(e,t,n){var r=!1,i=nn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ke(o):(i=Re(t)?Pn:Se.current,r=t.contextTypes,o=(r=r!=null)?lr(e,i):nn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=rs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function nc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&rs.enqueueReplaceState(t,t.state,null)}function Dl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Op,Ma(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ke(o):(o=Re(t)?Pn:Se.current,i.context=lr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(bl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&rs.enqueueReplaceState(i,i.state,null),$o(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;l===Op&&(l=i.refs={}),s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function Gi(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rc(e){var t=e._init;return t(e._payload)}function Ip(e){function t(h,c){if(e){var g=h.deletions;g===null?(h.deletions=[c],h.flags|=16):g.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=Jt(h,c),h.index=0,h.sibling=null,h}function o(h,c,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<c?(h.flags|=2,c):g):(h.flags|=2,c)):(h.flags|=1048576,c)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,c,g,E){return c===null||c.tag!==6?(c=Ys(g,h.mode,E),c.return=h,c):(c=i(c,g),c.return=h,c)}function a(h,c,g,E){var L=g.type;return L===Bn?d(h,c,g.props.children,E,g.key):c!==null&&(c.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ft&&rc(L)===c.type)?(E=i(c,g.props),E.ref=$r(h,c,g),E.return=h,E):(E=co(g.type,g.key,g.props,null,h.mode,E),E.ref=$r(h,c,g),E.return=h,E)}function u(h,c,g,E){return c===null||c.tag!==4||c.stateNode.containerInfo!==g.containerInfo||c.stateNode.implementation!==g.implementation?(c=Ks(g,h.mode,E),c.return=h,c):(c=i(c,g.children||[]),c.return=h,c)}function d(h,c,g,E,L){return c===null||c.tag!==7?(c=Cn(g,h.mode,E,L),c.return=h,c):(c=i(c,g),c.return=h,c)}function p(h,c,g){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ys(""+c,h.mode,g),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Mi:return g=co(c.type,c.key,c.props,null,h.mode,g),g.ref=$r(h,null,c),g.return=h,g;case jn:return c=Ks(c,h.mode,g),c.return=h,c;case Ft:var E=c._init;return p(h,E(c._payload),g)}if(Rr(c)||Cr(c))return c=Cn(c,h.mode,g,null),c.return=h,c;Gi(h,c)}return null}function f(h,c,g,E){var L=c!==null?c.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return L!==null?null:l(h,c,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Mi:return g.key===L?a(h,c,g,E):null;case jn:return g.key===L?u(h,c,g,E):null;case Ft:return L=g._init,f(h,c,L(g._payload),E)}if(Rr(g)||Cr(g))return L!==null?null:d(h,c,g,E,null);Gi(h,g)}return null}function m(h,c,g,E,L){if(typeof E=="string"&&E!==""||typeof E=="number")return h=h.get(g)||null,l(c,h,""+E,L);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Mi:return h=h.get(E.key===null?g:E.key)||null,a(c,h,E,L);case jn:return h=h.get(E.key===null?g:E.key)||null,u(c,h,E,L);case Ft:var A=E._init;return m(h,c,g,A(E._payload),L)}if(Rr(E)||Cr(E))return h=h.get(g)||null,d(c,h,E,L,null);Gi(c,E)}return null}function y(h,c,g,E){for(var L=null,A=null,O=c,I=c=0,te=null;O!==null&&I<g.length;I++){O.index>I?(te=O,O=null):te=O.sibling;var z=f(h,O,g[I],E);if(z===null){O===null&&(O=te);break}e&&O&&z.alternate===null&&t(h,O),c=o(z,c,I),A===null?L=z:A.sibling=z,A=z,O=te}if(I===g.length)return n(h,O),Y&&hn(h,I),L;if(O===null){for(;I<g.length;I++)O=p(h,g[I],E),O!==null&&(c=o(O,c,I),A===null?L=O:A.sibling=O,A=O);return Y&&hn(h,I),L}for(O=r(h,O);I<g.length;I++)te=m(O,h,I,g[I],E),te!==null&&(e&&te.alternate!==null&&O.delete(te.key===null?I:te.key),c=o(te,c,I),A===null?L=te:A.sibling=te,A=te);return e&&O.forEach(function(Ze){return t(h,Ze)}),Y&&hn(h,I),L}function w(h,c,g,E){var L=Cr(g);if(typeof L!="function")throw Error(x(150));if(g=L.call(g),g==null)throw Error(x(151));for(var A=L=null,O=c,I=c=0,te=null,z=g.next();O!==null&&!z.done;I++,z=g.next()){O.index>I?(te=O,O=null):te=O.sibling;var Ze=f(h,O,z.value,E);if(Ze===null){O===null&&(O=te);break}e&&O&&Ze.alternate===null&&t(h,O),c=o(Ze,c,I),A===null?L=Ze:A.sibling=Ze,A=Ze,O=te}if(z.done)return n(h,O),Y&&hn(h,I),L;if(O===null){for(;!z.done;I++,z=g.next())z=p(h,z.value,E),z!==null&&(c=o(z,c,I),A===null?L=z:A.sibling=z,A=z);return Y&&hn(h,I),L}for(O=r(h,O);!z.done;I++,z=g.next())z=m(O,h,I,z.value,E),z!==null&&(e&&z.alternate!==null&&O.delete(z.key===null?I:z.key),c=o(z,c,I),A===null?L=z:A.sibling=z,A=z);return e&&O.forEach(function(Sr){return t(h,Sr)}),Y&&hn(h,I),L}function N(h,c,g,E){if(typeof g=="object"&&g!==null&&g.type===Bn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Mi:e:{for(var L=g.key,A=c;A!==null;){if(A.key===L){if(L=g.type,L===Bn){if(A.tag===7){n(h,A.sibling),c=i(A,g.props.children),c.return=h,h=c;break e}}else if(A.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ft&&rc(L)===A.type){n(h,A.sibling),c=i(A,g.props),c.ref=$r(h,A,g),c.return=h,h=c;break e}n(h,A);break}else t(h,A);A=A.sibling}g.type===Bn?(c=Cn(g.props.children,h.mode,E,g.key),c.return=h,h=c):(E=co(g.type,g.key,g.props,null,h.mode,E),E.ref=$r(h,c,g),E.return=h,h=E)}return s(h);case jn:e:{for(A=g.key;c!==null;){if(c.key===A)if(c.tag===4&&c.stateNode.containerInfo===g.containerInfo&&c.stateNode.implementation===g.implementation){n(h,c.sibling),c=i(c,g.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=Ks(g,h.mode,E),c.return=h,h=c}return s(h);case Ft:return A=g._init,N(h,c,A(g._payload),E)}if(Rr(g))return y(h,c,g,E);if(Cr(g))return w(h,c,g,E);Gi(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,c!==null&&c.tag===6?(n(h,c.sibling),c=i(c,g),c.return=h,h=c):(n(h,c),c=Ys(g,h.mode,E),c.return=h,h=c),s(h)):n(h,c)}return N}var ur=Ip(!0),Tp=Ip(!1),ki={},yt=ln(ki),li=ln(ki),ai=ln(ki);function wn(e){if(e===ki)throw Error(x(174));return e}function ba(e,t){switch(H(ai,t),H(li,e),H(yt,ki),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gl(t,e)}W(yt),H(yt,t)}function cr(){W(yt),W(li),W(ai)}function Rp(e){wn(ai.current);var t=wn(yt.current),n=gl(t,e.type);t!==n&&(H(li,e),H(yt,n))}function Da(e){li.current===e&&(W(yt),W(li))}var Q=ln(0);function Oo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var js=[];function za(){for(var e=0;e<js.length;e++)js[e]._workInProgressVersionPrimary=null;js.length=0}var oo=zt.ReactCurrentDispatcher,Bs=zt.ReactCurrentBatchConfig,$n=0,q=null,oe=null,ce=null,No=!1,Br=!1,ui=0,um=0;function _e(){throw Error(x(321))}function Ua(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!at(e[n],t[n]))return!1;return!0}function Fa(e,t,n,r,i,o){if($n=o,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oo.current=e===null||e.memoizedState===null?fm:hm,e=n(r,i),Br){o=0;do{if(Br=!1,ui=0,25<=o)throw Error(x(301));o+=1,ce=oe=null,t.updateQueue=null,oo.current=gm,e=n(r,i)}while(Br)}if(oo.current=Io,t=oe!==null&&oe.next!==null,$n=0,ce=oe=q=null,No=!1,t)throw Error(x(300));return e}function ja(){var e=ui!==0;return ui=0,e}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?q.memoizedState=ce=e:ce=ce.next=e,ce}function Qe(){if(oe===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ce===null?q.memoizedState:ce.next;if(t!==null)ce=t,oe=e;else{if(e===null)throw Error(x(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ce===null?q.memoizedState=ce=e:ce=ce.next=e}return ce}function ci(e,t){return typeof t=="function"?t(e):t}function Hs(e){var t=Qe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var d=u.lane;if(($n&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=p,s=r):a=a.next=p,q.lanes|=d,On|=d}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,at(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,q.lanes|=o,On|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vs(e){var t=Qe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);at(o,t.memoizedState)||(Ie=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Mp(){}function bp(e,t){var n=q,r=Qe(),i=t(),o=!at(r.memoizedState,i);if(o&&(r.memoizedState=i,Ie=!0),r=r.queue,Ba(Up.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,di(9,zp.bind(null,n,r,i,t),void 0,null),de===null)throw Error(x(349));$n&30||Dp(n,t,i)}return i}function Dp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zp(e,t,n,r){t.value=n,t.getSnapshot=r,Fp(t)&&jp(e)}function Up(e,t,n){return n(function(){Fp(t)&&jp(e)})}function Fp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!at(e,n)}catch{return!0}}function jp(e){var t=It(e,1);t!==null&&lt(t,e,1,-1)}function ic(e){var t=dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ci,lastRenderedState:e},t.queue=e,e=e.dispatch=pm.bind(null,q,e),[t.memoizedState,e]}function di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Bp(){return Qe().memoizedState}function so(e,t,n,r){var i=dt();q.flags|=e,i.memoizedState=di(1|t,n,void 0,r===void 0?null:r)}function is(e,t,n,r){var i=Qe();r=r===void 0?null:r;var o=void 0;if(oe!==null){var s=oe.memoizedState;if(o=s.destroy,r!==null&&Ua(r,s.deps)){i.memoizedState=di(t,n,o,r);return}}q.flags|=e,i.memoizedState=di(1|t,n,o,r)}function oc(e,t){return so(8390656,8,e,t)}function Ba(e,t){return is(2048,8,e,t)}function Hp(e,t){return is(4,2,e,t)}function Vp(e,t){return is(4,4,e,t)}function Wp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gp(e,t,n){return n=n!=null?n.concat([e]):null,is(4,4,Wp.bind(null,t,e),n)}function Ha(){}function Yp(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ua(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kp(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ua(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qp(e,t,n){return $n&21?(at(n,t)||(n=Zd(),q.lanes|=n,On|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ie=!0),e.memoizedState=n)}function cm(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=Bs.transition;Bs.transition={};try{e(!1),t()}finally{B=n,Bs.transition=r}}function qp(){return Qe().memoizedState}function dm(e,t,n){var r=Zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xp(e))Zp(t,n);else if(n=Ap(e,t,n,r),n!==null){var i=ke();lt(n,e,r,i),Jp(n,t,r)}}function pm(e,t,n){var r=Zt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xp(e))Zp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,at(l,s)){var a=t.interleaved;a===null?(i.next=i,Ra(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Ap(e,t,i,r),n!==null&&(i=ke(),lt(n,e,r,i),Jp(n,t,r))}}function Xp(e){var t=e.alternate;return e===q||t!==null&&t===q}function Zp(e,t){Br=No=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wa(e,n)}}var Io={readContext:Ke,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},fm={readContext:Ke,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:oc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,so(4194308,4,Wp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return so(4194308,4,e,t)},useInsertionEffect:function(e,t){return so(4,2,e,t)},useMemo:function(e,t){var n=dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=dt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dm.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:ic,useDebugValue:Ha,useDeferredValue:function(e){return dt().memoizedState=e},useTransition:function(){var e=ic(!1),t=e[0];return e=cm.bind(null,e[1]),dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,i=dt();if(Y){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),de===null)throw Error(x(349));$n&30||Dp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,oc(Up.bind(null,r,o,e),[e]),r.flags|=2048,di(9,zp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=dt(),t=de.identifierPrefix;if(Y){var n=kt,r=Lt;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ui++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=um++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hm={readContext:Ke,useCallback:Yp,useContext:Ke,useEffect:Ba,useImperativeHandle:Gp,useInsertionEffect:Hp,useLayoutEffect:Vp,useMemo:Kp,useReducer:Hs,useRef:Bp,useState:function(){return Hs(ci)},useDebugValue:Ha,useDeferredValue:function(e){var t=Qe();return Qp(t,oe.memoizedState,e)},useTransition:function(){var e=Hs(ci)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Mp,useSyncExternalStore:bp,useId:qp,unstable_isNewReconciler:!1},gm={readContext:Ke,useCallback:Yp,useContext:Ke,useEffect:Ba,useImperativeHandle:Gp,useInsertionEffect:Hp,useLayoutEffect:Vp,useMemo:Kp,useReducer:Vs,useRef:Bp,useState:function(){return Vs(ci)},useDebugValue:Ha,useDeferredValue:function(e){var t=Qe();return oe===null?t.memoizedState=e:Qp(t,oe.memoizedState,e)},useTransition:function(){var e=Vs(ci)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Mp,useSyncExternalStore:bp,useId:qp,unstable_isNewReconciler:!1};function dr(e,t){try{var n="",r=t;do n+=Hh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ws(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function zl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mm=typeof WeakMap=="function"?WeakMap:Map;function ef(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ro||(Ro=!0,Kl=r),zl(e,t)},n}function tf(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){zl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){zl(e,t),typeof r!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function sc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Om.bind(null,e,t,n),t.then(e,e))}function lc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ac(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,qt(n,t,1))),n.lanes|=1),e)}var ym=zt.ReactCurrentOwner,Ie=!1;function Ce(e,t,n,r){t.child=e===null?Tp(t,null,n,r):ur(t,e.child,n,r)}function uc(e,t,n,r,i){n=n.render;var o=t.ref;return rr(t,i),r=Fa(e,t,n,r,o,i),n=ja(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Tt(e,t,i)):(Y&&n&&Aa(t),t.flags|=1,Ce(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Xa(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,nf(e,t,o,r,i)):(e=co(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ri,n(s,r)&&e.ref===t.ref)return Tt(e,t,i)}return t.flags|=1,e=Jt(o,r),e.ref=t.ref,e.return=t,t.child=e}function nf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ri(o,r)&&e.ref===t.ref)if(Ie=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ie=!0);else return t.lanes=e.lanes,Tt(e,t,i)}return Ul(e,t,n,r,i)}function rf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(Zn,be),be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(Zn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,H(Zn,be),be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,H(Zn,be),be|=r;return Ce(e,t,i,n),t.child}function of(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ul(e,t,n,r,i){var o=Re(n)?Pn:Se.current;return o=lr(t,o),rr(t,i),n=Fa(e,t,n,r,o,i),r=ja(),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Tt(e,t,i)):(Y&&r&&Aa(t),t.flags|=1,Ce(e,t,n,i),t.child)}function dc(e,t,n,r,i){if(Re(n)){var o=!0;Co(t)}else o=!1;if(rr(t,i),t.stateNode===null)lo(e,t),Np(t,n,r),Dl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ke(u):(u=Re(n)?Pn:Se.current,u=lr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&nc(t,s,r,u),jt=!1;var f=t.memoizedState;s.state=f,$o(t,r,s,i),a=t.memoizedState,l!==r||f!==a||Te.current||jt?(typeof d=="function"&&(bl(t,n,d,r),a=t.memoizedState),(l=jt||tc(t,n,l,r,f,a,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,$p(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:tt(t.type,l),s.props=u,p=t.pendingProps,f=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ke(a):(a=Re(n)?Pn:Se.current,a=lr(t,a));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||f!==a)&&nc(t,s,r,a),jt=!1,f=t.memoizedState,s.state=f,$o(t,r,s,i);var y=t.memoizedState;l!==p||f!==y||Te.current||jt?(typeof m=="function"&&(bl(t,n,m,r),y=t.memoizedState),(u=jt||tc(t,n,u,r,f,y,a)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Fl(e,t,n,r,o,i)}function Fl(e,t,n,r,i,o){of(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&qu(t,n,!1),Tt(e,t,o);r=t.stateNode,ym.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ur(t,e.child,null,o),t.child=ur(t,null,l,o)):Ce(e,t,l,o),t.memoizedState=r.state,i&&qu(t,n,!0),t.child}function sf(e){var t=e.stateNode;t.pendingContext?Qu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qu(e,t.context,!1),ba(e,t.containerInfo)}function pc(e,t,n,r,i){return ar(),Oa(i),t.flags|=256,Ce(e,t,n,r),t.child}var jl={dehydrated:null,treeContext:null,retryLane:0};function Bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function lf(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(Q,i&1),e===null)return Rl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ls(s,r,0,null),e=Cn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Bl(n),t.memoizedState=jl,e):Va(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return vm(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Jt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Jt(l,o):(o=Cn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Bl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=jl,r}return o=e.child,e=o.sibling,r=Jt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Va(e,t){return t=ls({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yi(e,t,n,r){return r!==null&&Oa(r),ur(t,e.child,null,n),e=Va(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vm(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ws(Error(x(422))),Yi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ls({mode:"visible",children:r.children},i,0,null),o=Cn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ur(t,e.child,null,s),t.child.memoizedState=Bl(s),t.memoizedState=jl,o);if(!(t.mode&1))return Yi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(x(419)),r=Ws(o,r,void 0),Yi(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ie||l){if(r=de,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,It(e,i),lt(r,e,i,-1))}return qa(),r=Ws(Error(x(421))),Yi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Nm.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,De=Qt(i.nextSibling),ze=t,Y=!0,ot=null,e!==null&&(Ve[We++]=Lt,Ve[We++]=kt,Ve[We++]=An,Lt=e.id,kt=e.overflow,An=t),t=Va(t,r.children),t.flags|=4096,t)}function fc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ml(e.return,t,n)}function Gs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function af(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ce(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fc(e,n,t);else if(e.tag===19)fc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Oo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Gs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Oo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Gs(t,!0,n,null,o);break;case"together":Gs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function lo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _m(e,t,n){switch(t.tag){case 3:sf(t),ar();break;case 5:Rp(t);break;case 1:Re(t.type)&&Co(t);break;case 4:ba(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(Po,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?lf(e,t,n):(H(Q,Q.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);H(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return af(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,rf(e,t,n)}return Tt(e,t,n)}var uf,Hl,cf,df;uf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hl=function(){};cf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,wn(yt.current);var o=null;switch(n){case"input":i=dl(e,i),r=dl(e,r),o=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":i=hl(e,i),r=hl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=So)}ml(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(qr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(qr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&V("scroll",e),o||l===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};df=function(e,t,n,r){n!==r&&(t.flags|=4)};function Or(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wm(e,t,n){var r=t.pendingProps;switch($a(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return Re(t.type)&&xo(),we(t),null;case 3:return r=t.stateNode,cr(),W(Te),W(Se),za(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ot!==null&&(Xl(ot),ot=null))),Hl(e,t),we(t),null;case 5:Da(t);var i=wn(ai.current);if(n=t.type,e!==null&&t.stateNode!=null)cf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return we(t),null}if(e=wn(yt.current),Wi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ht]=t,r[si]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<br.length;i++)V(br[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Su(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":Cu(r,o),V("invalid",r)}ml(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Vi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Vi(r.textContent,l,e),i=["children",""+l]):qr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":bi(r),xu(r,o,!0);break;case"textarea":bi(r),Lu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=So)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[ht]=t,e[si]=r,uf(e,t,!1,!1),t.stateNode=e;e:{switch(s=yl(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<br.length;i++)V(br[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":Su(e,r),i=dl(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),V("invalid",e);break;case"textarea":Cu(e,r),i=hl(e,r),V("invalid",e);break;default:i=r}ml(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?Fd(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&zd(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Xr(e,a):typeof a=="number"&&Xr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(qr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&V("scroll",e):a!=null&&ha(e,o,a,s))}switch(n){case"input":bi(e),xu(e,r,!1);break;case"textarea":bi(e),Lu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Jn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=So)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)df(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=wn(ai.current),wn(yt.current),Wi(t)){if(r=t.stateNode,n=t.memoizedProps,r[ht]=t,(o=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:Vi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=t,t.stateNode=r}return we(t),null;case 13:if(W(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&De!==null&&t.mode&1&&!(t.flags&128))Pp(),ar(),t.flags|=98560,o=!1;else if(o=Wi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(x(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(x(317));o[ht]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),o=!1}else ot!==null&&(Xl(ot),ot=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?le===0&&(le=3):qa())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return cr(),Hl(e,t),e===null&&ii(t.stateNode.containerInfo),we(t),null;case 10:return Ta(t.type._context),we(t),null;case 17:return Re(t.type)&&xo(),we(t),null;case 19:if(W(Q),o=t.memoizedState,o===null)return we(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Or(o,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Oo(e),s!==null){for(t.flags|=128,Or(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&re()>pr&&(t.flags|=128,r=!0,Or(o,!1),t.lanes=4194304)}else{if(!r)if(e=Oo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Or(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Y)return we(t),null}else 2*re()-o.renderingStartTime>pr&&n!==1073741824&&(t.flags|=128,r=!0,Or(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=re(),t.sibling=null,n=Q.current,H(Q,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return Qa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Em(e,t){switch($a(t),t.tag){case 1:return Re(t.type)&&xo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cr(),W(Te),W(Se),za(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Da(t),null;case 13:if(W(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Q),null;case 4:return cr(),null;case 10:return Ta(t.type._context),null;case 22:case 23:return Qa(),null;case 24:return null;default:return null}}var Ki=!1,Ee=!1,Sm=typeof WeakSet=="function"?WeakSet:Set,k=null;function Xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function Vl(e,t,n){try{n()}catch(r){Z(e,t,r)}}var hc=!1;function xm(e,t){if(Pl=_o,e=hp(),Pa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(l=s+i),p!==o||r!==0&&p.nodeType!==3||(a=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=s),f===o&&++d===r&&(a=s),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Al={focusedElem:e,selectionRange:n},_o=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,N=y.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:tt(t.type,w),N);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(E){Z(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return y=hc,hc=!1,y}function Hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Vl(t,n,o)}i=i.next}while(i!==r)}}function os(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function pf(e){var t=e.alternate;t!==null&&(e.alternate=null,pf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ht],delete t[si],delete t[Nl],delete t[om],delete t[sm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ff(e){return e.tag===5||e.tag===3||e.tag===4}function gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ff(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=So));else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}function Yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yl(e,t,n),e=e.sibling;e!==null;)Yl(e,t,n),e=e.sibling}var he=null,nt=!1;function Ut(e,t,n){for(n=n.child;n!==null;)hf(e,t,n),n=n.sibling}function hf(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Xo,n)}catch{}switch(n.tag){case 5:Ee||Xn(n,t);case 6:var r=he,i=nt;he=null,Ut(e,t,n),he=r,nt=i,he!==null&&(nt?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(nt?(e=he,n=n.stateNode,e.nodeType===8?Us(e.parentNode,n):e.nodeType===1&&Us(e,n),ti(e)):Us(he,n.stateNode));break;case 4:r=he,i=nt,he=n.stateNode.containerInfo,nt=!0,Ut(e,t,n),he=r,nt=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Vl(n,t,s),i=i.next}while(i!==r)}Ut(e,t,n);break;case 1:if(!Ee&&(Xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Z(n,t,l)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Ut(e,t,n),Ee=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function mc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sm),t.forEach(function(r){var i=Im.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:he=l.stateNode,nt=!1;break e;case 3:he=l.stateNode.containerInfo,nt=!0;break e;case 4:he=l.stateNode.containerInfo,nt=!0;break e}l=l.return}if(he===null)throw Error(x(160));hf(o,s,i),he=null,nt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){Z(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gf(t,e),t=t.sibling}function gf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Je(t,e),ct(e),r&4){try{Hr(3,e,e.return),os(3,e)}catch(w){Z(e,e.return,w)}try{Hr(5,e,e.return)}catch(w){Z(e,e.return,w)}}break;case 1:Je(t,e),ct(e),r&512&&n!==null&&Xn(n,n.return);break;case 5:if(Je(t,e),ct(e),r&512&&n!==null&&Xn(n,n.return),e.flags&32){var i=e.stateNode;try{Xr(i,"")}catch(w){Z(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Md(i,o),yl(l,s);var u=yl(l,o);for(s=0;s<a.length;s+=2){var d=a[s],p=a[s+1];d==="style"?Fd(i,p):d==="dangerouslySetInnerHTML"?zd(i,p):d==="children"?Xr(i,p):ha(i,d,p,u)}switch(l){case"input":pl(i,o);break;case"textarea":bd(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Jn(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?Jn(i,!!o.multiple,o.defaultValue,!0):Jn(i,!!o.multiple,o.multiple?[]:"",!1))}i[si]=o}catch(w){Z(e,e.return,w)}}break;case 6:if(Je(t,e),ct(e),r&4){if(e.stateNode===null)throw Error(x(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){Z(e,e.return,w)}}break;case 3:if(Je(t,e),ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ti(t.containerInfo)}catch(w){Z(e,e.return,w)}break;case 4:Je(t,e),ct(e);break;case 13:Je(t,e),ct(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ya=re())),r&4&&mc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(u=Ee)||d,Je(t,e),Ee=u):Je(t,e),ct(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(k=e,d=e.child;d!==null;){for(p=k=d;k!==null;){switch(f=k,m=f.child,f.tag){case 0:case 11:case 14:case 15:Hr(4,f,f.return);break;case 1:Xn(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){Z(r,n,w)}}break;case 5:Xn(f,f.return);break;case 22:if(f.memoizedState!==null){vc(p);continue}}m!==null?(m.return=f,k=m):vc(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,a=p.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Ud("display",s))}catch(w){Z(e,e.return,w)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){Z(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Je(t,e),ct(e),r&4&&mc(e);break;case 21:break;default:Je(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ff(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xr(i,""),r.flags&=-33);var o=gc(e);Yl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=gc(e);Gl(e,l,s);break;default:throw Error(x(161))}}catch(a){Z(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cm(e,t,n){k=e,mf(e)}function mf(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var i=k,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ki;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ee;l=Ki;var u=Ee;if(Ki=s,(Ee=a)&&!u)for(k=i;k!==null;)s=k,a=s.child,s.tag===22&&s.memoizedState!==null?_c(i):a!==null?(a.return=s,k=a):_c(i);for(;o!==null;)k=o,mf(o),o=o.sibling;k=i,Ki=l,Ee=u}yc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,k=o):yc(e)}}function yc(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||os(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:tt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ec(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ec(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ti(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Ee||t.flags&512&&Wl(t)}catch(f){Z(t,t.return,f)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function vc(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function _c(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{os(4,t)}catch(a){Z(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){Z(t,i,a)}}var o=t.return;try{Wl(t)}catch(a){Z(t,o,a)}break;case 5:var s=t.return;try{Wl(t)}catch(a){Z(t,s,a)}}}catch(a){Z(t,t.return,a)}if(t===e){k=null;break}var l=t.sibling;if(l!==null){l.return=t.return,k=l;break}k=t.return}}var Lm=Math.ceil,To=zt.ReactCurrentDispatcher,Wa=zt.ReactCurrentOwner,Ye=zt.ReactCurrentBatchConfig,F=0,de=null,ie=null,me=0,be=0,Zn=ln(0),le=0,pi=null,On=0,ss=0,Ga=0,Vr=null,Ne=null,Ya=0,pr=1/0,Et=null,Ro=!1,Kl=null,Xt=null,Qi=!1,Wt=null,Mo=0,Wr=0,Ql=null,ao=-1,uo=0;function ke(){return F&6?re():ao!==-1?ao:ao=re()}function Zt(e){return e.mode&1?F&2&&me!==0?me&-me:am.transition!==null?(uo===0&&(uo=Zd()),uo):(e=B,e!==0||(e=window.event,e=e===void 0?16:op(e.type)),e):1}function lt(e,t,n,r){if(50<Wr)throw Wr=0,Ql=null,Error(x(185));xi(e,n,r),(!(F&2)||e!==de)&&(e===de&&(!(F&2)&&(ss|=n),le===4&&Ht(e,me)),Me(e,r),n===1&&F===0&&!(t.mode&1)&&(pr=re()+500,ns&&an()))}function Me(e,t){var n=e.callbackNode;ag(e,t);var r=vo(e,e===de?me:0);if(r===0)n!==null&&Au(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Au(n),t===1)e.tag===0?lm(wc.bind(null,e)):Cp(wc.bind(null,e)),rm(function(){!(F&6)&&an()}),n=null;else{switch(Jd(r)){case 1:n=_a;break;case 4:n=qd;break;case 16:n=yo;break;case 536870912:n=Xd;break;default:n=yo}n=Cf(n,yf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yf(e,t){if(ao=-1,uo=0,F&6)throw Error(x(327));var n=e.callbackNode;if(ir()&&e.callbackNode!==n)return null;var r=vo(e,e===de?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=bo(e,r);else{t=r;var i=F;F|=2;var o=_f();(de!==e||me!==t)&&(Et=null,pr=re()+500,xn(e,t));do try{Am();break}catch(l){vf(e,l)}while(!0);Ia(),To.current=o,F=i,ie!==null?t=0:(de=null,me=0,t=le)}if(t!==0){if(t===2&&(i=Sl(e),i!==0&&(r=i,t=ql(e,i))),t===1)throw n=pi,xn(e,0),Ht(e,r),Me(e,re()),n;if(t===6)Ht(e,r);else{if(i=e.current.alternate,!(r&30)&&!km(i)&&(t=bo(e,r),t===2&&(o=Sl(e),o!==0&&(r=o,t=ql(e,o))),t===1))throw n=pi,xn(e,0),Ht(e,r),Me(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:gn(e,Ne,Et);break;case 3:if(Ht(e,r),(r&130023424)===r&&(t=Ya+500-re(),10<t)){if(vo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ol(gn.bind(null,e,Ne,Et),t);break}gn(e,Ne,Et);break;case 4:if(Ht(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-st(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lm(r/1960))-r,10<r){e.timeoutHandle=Ol(gn.bind(null,e,Ne,Et),r);break}gn(e,Ne,Et);break;case 5:gn(e,Ne,Et);break;default:throw Error(x(329))}}}return Me(e,re()),e.callbackNode===n?yf.bind(null,e):null}function ql(e,t){var n=Vr;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=bo(e,t),e!==2&&(t=Ne,Ne=n,t!==null&&Xl(t)),e}function Xl(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function km(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!at(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ht(e,t){for(t&=~Ga,t&=~ss,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function wc(e){if(F&6)throw Error(x(327));ir();var t=vo(e,0);if(!(t&1))return Me(e,re()),null;var n=bo(e,t);if(e.tag!==0&&n===2){var r=Sl(e);r!==0&&(t=r,n=ql(e,r))}if(n===1)throw n=pi,xn(e,0),Ht(e,t),Me(e,re()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gn(e,Ne,Et),Me(e,re()),null}function Ka(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(pr=re()+500,ns&&an())}}function Nn(e){Wt!==null&&Wt.tag===0&&!(F&6)&&ir();var t=F;F|=1;var n=Ye.transition,r=B;try{if(Ye.transition=null,B=1,e)return e()}finally{B=r,Ye.transition=n,F=t,!(F&6)&&an()}}function Qa(){be=Zn.current,W(Zn)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nm(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch($a(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xo();break;case 3:cr(),W(Te),W(Se),za();break;case 5:Da(r);break;case 4:cr();break;case 13:W(Q);break;case 19:W(Q);break;case 10:Ta(r.type._context);break;case 22:case 23:Qa()}n=n.return}if(de=e,ie=e=Jt(e.current,null),me=be=t,le=0,pi=null,Ga=ss=On=0,Ne=Vr=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}_n=null}return e}function vf(e,t){do{var n=ie;try{if(Ia(),oo.current=Io,No){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}No=!1}if($n=0,ce=oe=q=null,Br=!1,ui=0,Wa.current=null,n===null||n.return===null){le=1,pi=t,ie=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=me,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=lc(s);if(m!==null){m.flags&=-257,ac(m,s,l,o,t),m.mode&1&&sc(o,u,t),t=m,a=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(a),t.updateQueue=w}else y.add(a);break e}else{if(!(t&1)){sc(o,u,t),qa();break e}a=Error(x(426))}}else if(Y&&l.mode&1){var N=lc(s);if(N!==null){!(N.flags&65536)&&(N.flags|=256),ac(N,s,l,o,t),Oa(dr(a,l));break e}}o=a=dr(a,l),le!==4&&(le=2),Vr===null?Vr=[o]:Vr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=ef(o,a,t);Ju(o,h);break e;case 1:l=a;var c=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Xt===null||!Xt.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var E=tf(o,l,t);Ju(o,E);break e}}o=o.return}while(o!==null)}Ef(n)}catch(L){t=L,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function _f(){var e=To.current;return To.current=Io,e===null?Io:e}function qa(){(le===0||le===3||le===2)&&(le=4),de===null||!(On&268435455)&&!(ss&268435455)||Ht(de,me)}function bo(e,t){var n=F;F|=2;var r=_f();(de!==e||me!==t)&&(Et=null,xn(e,t));do try{Pm();break}catch(i){vf(e,i)}while(!0);if(Ia(),F=n,To.current=r,ie!==null)throw Error(x(261));return de=null,me=0,le}function Pm(){for(;ie!==null;)wf(ie)}function Am(){for(;ie!==null&&!Jh();)wf(ie)}function wf(e){var t=xf(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?Ef(e):ie=t,Wa.current=null}function Ef(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Em(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ie=null;return}}else if(n=wm(n,t,be),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);le===0&&(le=5)}function gn(e,t,n){var r=B,i=Ye.transition;try{Ye.transition=null,B=1,$m(e,t,n,r)}finally{Ye.transition=i,B=r}return null}function $m(e,t,n,r){do ir();while(Wt!==null);if(F&6)throw Error(x(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ug(e,o),e===de&&(ie=de=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qi||(Qi=!0,Cf(yo,function(){return ir(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ye.transition,Ye.transition=null;var s=B;B=1;var l=F;F|=4,Wa.current=null,xm(e,n),gf(n,e),Qg(Al),_o=!!Pl,Al=Pl=null,e.current=n,Cm(n),eg(),F=l,B=s,Ye.transition=o}else e.current=n;if(Qi&&(Qi=!1,Wt=e,Mo=i),o=e.pendingLanes,o===0&&(Xt=null),rg(n.stateNode),Me(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ro)throw Ro=!1,e=Kl,Kl=null,e;return Mo&1&&e.tag!==0&&ir(),o=e.pendingLanes,o&1?e===Ql?Wr++:(Wr=0,Ql=e):Wr=0,an(),null}function ir(){if(Wt!==null){var e=Jd(Mo),t=Ye.transition,n=B;try{if(Ye.transition=null,B=16>e?16:e,Wt===null)var r=!1;else{if(e=Wt,Wt=null,Mo=0,F&6)throw Error(x(331));var i=F;for(F|=4,k=e.current;k!==null;){var o=k,s=o.child;if(k.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(k=u;k!==null;){var d=k;switch(d.tag){case 0:case 11:case 15:Hr(8,d,o)}var p=d.child;if(p!==null)p.return=d,k=p;else for(;k!==null;){d=k;var f=d.sibling,m=d.return;if(pf(d),d===u){k=null;break}if(f!==null){f.return=m,k=f;break}k=m}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}k=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,k=s;else e:for(;k!==null;){if(o=k,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Hr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,k=h;break e}k=o.return}}var c=e.current;for(k=c;k!==null;){s=k;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,k=g;else e:for(s=c;k!==null;){if(l=k,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:os(9,l)}}catch(L){Z(l,l.return,L)}if(l===s){k=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,k=E;break e}k=l.return}}if(F=i,an(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Xo,e)}catch{}r=!0}return r}finally{B=n,Ye.transition=t}}return!1}function Ec(e,t,n){t=dr(n,t),t=ef(e,t,1),e=qt(e,t,1),t=ke(),e!==null&&(xi(e,1,t),Me(e,t))}function Z(e,t,n){if(e.tag===3)Ec(e,e,n);else for(;t!==null;){if(t.tag===3){Ec(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r))){e=dr(n,e),e=tf(t,e,1),t=qt(t,e,1),e=ke(),t!==null&&(xi(t,1,e),Me(t,e));break}}t=t.return}}function Om(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(me&n)===n&&(le===4||le===3&&(me&130023424)===me&&500>re()-Ya?xn(e,0):Ga|=n),Me(e,t)}function Sf(e,t){t===0&&(e.mode&1?(t=Ui,Ui<<=1,!(Ui&130023424)&&(Ui=4194304)):t=1);var n=ke();e=It(e,t),e!==null&&(xi(e,t,n),Me(e,n))}function Nm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sf(e,n)}function Im(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),Sf(e,n)}var xf;xf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Ie=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ie=!1,_m(e,t,n);Ie=!!(e.flags&131072)}else Ie=!1,Y&&t.flags&1048576&&Lp(t,ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;lo(e,t),e=t.pendingProps;var i=lr(t,Se.current);rr(t,n),i=Fa(null,t,r,e,i,n);var o=ja();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(o=!0,Co(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ma(t),i.updater=rs,t.stateNode=i,i._reactInternals=t,Dl(t,r,e,n),t=Fl(null,t,r,!0,o,n)):(t.tag=0,Y&&o&&Aa(t),Ce(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(lo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Rm(r),e=tt(r,e),i){case 0:t=Ul(null,t,r,e,n);break e;case 1:t=dc(null,t,r,e,n);break e;case 11:t=uc(null,t,r,e,n);break e;case 14:t=cc(null,t,r,tt(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),Ul(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),dc(e,t,r,i,n);case 3:e:{if(sf(t),e===null)throw Error(x(387));r=t.pendingProps,o=t.memoizedState,i=o.element,$p(e,t),$o(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=dr(Error(x(423)),t),t=pc(e,t,r,n,i);break e}else if(r!==i){i=dr(Error(x(424)),t),t=pc(e,t,r,n,i);break e}else for(De=Qt(t.stateNode.containerInfo.firstChild),ze=t,Y=!0,ot=null,n=Tp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===i){t=Tt(e,t,n);break e}Ce(e,t,r,n)}t=t.child}return t;case 5:return Rp(t),e===null&&Rl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,$l(r,i)?s=null:o!==null&&$l(r,o)&&(t.flags|=32),of(e,t),Ce(e,t,s,n),t.child;case 6:return e===null&&Rl(t),null;case 13:return lf(e,t,n);case 4:return ba(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ur(t,null,r,n):Ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),uc(e,t,r,i,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,H(Po,r._currentValue),r._currentValue=s,o!==null)if(at(o.value,s)){if(o.children===i.children&&!Te.current){t=Tt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=At(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ml(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(x(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ml(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,rr(t,n),i=Ke(i),r=r(i),t.flags|=1,Ce(e,t,r,n),t.child;case 14:return r=t.type,i=tt(r,t.pendingProps),i=tt(r.type,i),cc(e,t,r,i,n);case 15:return nf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),lo(e,t),t.tag=1,Re(r)?(e=!0,Co(t)):e=!1,rr(t,n),Np(t,r,i),Dl(t,r,i,n),Fl(null,t,r,!0,e,n);case 19:return af(e,t,n);case 22:return rf(e,t,n)}throw Error(x(156,t.tag))};function Cf(e,t){return Qd(e,t)}function Tm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,t,n,r){return new Tm(e,t,n,r)}function Xa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rm(e){if(typeof e=="function")return Xa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ma)return 11;if(e===ya)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=Ge(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function co(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Xa(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Bn:return Cn(n.children,i,o,t);case ga:s=8,i|=8;break;case ll:return e=Ge(12,n,t,i|2),e.elementType=ll,e.lanes=o,e;case al:return e=Ge(13,n,t,i),e.elementType=al,e.lanes=o,e;case ul:return e=Ge(19,n,t,i),e.elementType=ul,e.lanes=o,e;case Id:return ls(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Od:s=10;break e;case Nd:s=9;break e;case ma:s=11;break e;case ya:s=14;break e;case Ft:s=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Ge(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Cn(e,t,n,r){return e=Ge(7,e,r,t),e.lanes=n,e}function ls(e,t,n,r){return e=Ge(22,e,r,t),e.elementType=Id,e.lanes=n,e.stateNode={isHidden:!1},e}function Ys(e,t,n){return e=Ge(6,e,null,t),e.lanes=n,e}function Ks(e,t,n){return t=Ge(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=As(0),this.expirationTimes=As(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=As(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Za(e,t,n,r,i,o,s,l,a){return e=new Mm(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ge(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ma(o),e}function bm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Lf(e){if(!e)return nn;e=e._reactInternals;e:{if(bn(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(Re(n))return xp(e,n,t)}return t}function kf(e,t,n,r,i,o,s,l,a){return e=Za(n,r,!0,e,i,o,s,l,a),e.context=Lf(null),n=e.current,r=ke(),i=Zt(n),o=At(r,i),o.callback=t!=null?t:null,qt(n,o,i),e.current.lanes=i,xi(e,i,r),Me(e,r),e}function as(e,t,n,r){var i=t.current,o=ke(),s=Zt(i);return n=Lf(n),t.context===null?t.context=n:t.pendingContext=n,t=At(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=qt(i,t,s),e!==null&&(lt(e,i,s,o),io(e,i,s)),s}function Do(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ja(e,t){Sc(e,t),(e=e.alternate)&&Sc(e,t)}function Dm(){return null}var Pf=typeof reportError=="function"?reportError:function(e){console.error(e)};function eu(e){this._internalRoot=e}us.prototype.render=eu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));as(e,t,null,null)};us.prototype.unmount=eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nn(function(){as(null,e,null,null)}),t[Nt]=null}};function us(e){this._internalRoot=e}us.prototype.unstable_scheduleHydration=function(e){if(e){var t=np();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&ip(e)}};function tu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function cs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xc(){}function zm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Do(s);o.call(u)}}var s=kf(t,r,e,0,null,!1,!1,"",xc);return e._reactRootContainer=s,e[Nt]=s.current,ii(e.nodeType===8?e.parentNode:e),Nn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Do(a);l.call(u)}}var a=Za(e,0,!1,null,null,!1,!1,"",xc);return e._reactRootContainer=a,e[Nt]=a.current,ii(e.nodeType===8?e.parentNode:e),Nn(function(){as(t,a,n,r)}),a}function ds(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=Do(s);l.call(a)}}as(t,s,e,i)}else s=zm(n,t,e,i,r);return Do(s)}ep=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mr(t.pendingLanes);n!==0&&(wa(t,n|1),Me(t,re()),!(F&6)&&(pr=re()+500,an()))}break;case 13:Nn(function(){var r=It(e,1);if(r!==null){var i=ke();lt(r,e,1,i)}}),Ja(e,1)}};Ea=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var n=ke();lt(t,e,134217728,n)}Ja(e,134217728)}};tp=function(e){if(e.tag===13){var t=Zt(e),n=It(e,t);if(n!==null){var r=ke();lt(n,e,t,r)}Ja(e,t)}};np=function(){return B};rp=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};_l=function(e,t,n){switch(t){case"input":if(pl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ts(r);if(!i)throw Error(x(90));Rd(r),pl(r,i)}}}break;case"textarea":bd(e,n);break;case"select":t=n.value,t!=null&&Jn(e,!!n.multiple,t,!1)}};Hd=Ka;Vd=Nn;var Um={usingClientEntryPoint:!1,Events:[Li,Gn,ts,jd,Bd,Ka]},Nr={findFiberByHostInstance:vn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Fm={bundleType:Nr.bundleType,version:Nr.version,rendererPackageName:Nr.rendererPackageName,rendererConfig:Nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yd(e),e===null?null:e.stateNode},findFiberByHostInstance:Nr.findFiberByHostInstance||Dm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qi.isDisabled&&qi.supportsFiber)try{Xo=qi.inject(Fm),mt=qi}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Um;Be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tu(t))throw Error(x(200));return bm(e,t,null,n)};Be.createRoot=function(e,t){if(!tu(e))throw Error(x(299));var n=!1,r="",i=Pf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Za(e,1,!1,null,null,n,!1,r,i),e[Nt]=t.current,ii(e.nodeType===8?e.parentNode:e),new eu(t)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Yd(t),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return Nn(e)};Be.hydrate=function(e,t,n){if(!cs(t))throw Error(x(200));return ds(null,e,t,!0,n)};Be.hydrateRoot=function(e,t,n){if(!tu(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Pf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=kf(t,null,e,1,n!=null?n:null,i,!1,o,s),e[Nt]=t.current,ii(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new us(t)};Be.render=function(e,t,n){if(!cs(t))throw Error(x(200));return ds(null,e,t,!1,n)};Be.unmountComponentAtNode=function(e){if(!cs(e))throw Error(x(40));return e._reactRootContainer?(Nn(function(){ds(null,null,e,!1,function(){e._reactRootContainer=null,e[Nt]=null})}),!0):!1};Be.unstable_batchedUpdates=Ka;Be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!cs(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return ds(e,t,n,!1,r)};Be.version="18.2.0-next-9e3b772b8-20220608";function Af(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Af)}catch(e){console.error(e)}}Af(),Ld.exports=Be;var nu=Ld.exports,Cc=nu;ol.createRoot=Cc.createRoot,ol.hydrateRoot=Cc.hydrateRoot;var jm=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,i,o;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(i=r;i--!==0;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(o=Object.keys(t),r=o.length,r!==Object.keys(n).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1;for(i=r;i--!==0;){var s=o[i];if(!e(t[s],n[s]))return!1}return!0}return t!==t&&n!==n};const Bm=md(jm);function Hm(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Vm(e){var t=Hm(e,"string");return typeof t=="symbol"?t:String(t)}function vt(){return vt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vt.apply(this,arguments)}function Pi(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const xt={NOT_LOADED:"NOT_LOADED",LOADING:"LOADING",LOADED:"LOADED",FAILED:"FAILED",AUTH_FAILURE:"AUTH_FAILURE"},Wm="https://maps.googleapis.com/maps/api/js";class fi{static async load(t,n){var r;const i=t.libraries?t.libraries.split(","):[],o=this.serializeParams(t);this.listeners.push(n),(r=window.google)!=null&&(r=r.maps)!=null&&r.importLibrary?(this.serializedApiParams||(this.loadingStatus=xt.LOADED),this.notifyLoadingStatusListeners()):(this.serializedApiParams=o,this.initImportLibrary(t)),this.serializedApiParams&&this.serializedApiParams!==o&&console.warn("[google-maps-api-loader] The maps API has already been loaded with different parameters and will not be loaded again. Refresh the page for new values to have effect.");const s=["maps",...i];await Promise.all(s.map(l=>google.maps.importLibrary(l)))}static serializeParams(t){return[t.v,t.key,t.language,t.region,t.authReferrerPolicy,t.solutionChannel].join("/")}static initImportLibrary(t){if(window.google||(window.google={}),window.google.maps||(window.google.maps={}),window.google.maps.importLibrary){console.error("[google-maps-api-loader-internal]: initImportLibrary must only be called once");return}let n=null;const r=()=>n||(n=new Promise((i,o)=>{var s;const l=document.createElement("script"),a=new URLSearchParams;for(const[u,d]of Object.entries(t)){const p=u.replace(/[A-Z]/g,f=>"_"+f[0].toLowerCase());a.set(p,d)}a.set("loading","async"),a.set("callback","__googleMapsCallback__"),l.async=!0,l.src=Wm+"?"+a.toString(),l.nonce=((s=document.querySelector("script[nonce]"))==null?void 0:s.nonce)||"",l.onerror=()=>{this.loadingStatus=xt.FAILED,this.notifyLoadingStatusListeners(),o(new Error("The Google Maps JavaScript API could not load."))},window.__googleMapsCallback__=()=>{this.loadingStatus=xt.LOADED,this.notifyLoadingStatusListeners(),i()},window.gm_authFailure=()=>{this.loadingStatus=xt.AUTH_FAILURE,this.notifyLoadingStatusListeners()},this.loadingStatus=xt.LOADING,this.notifyLoadingStatusListeners(),document.head.append(l)}),n);google.maps.importLibrary=i=>r().then(()=>google.maps.importLibrary(i))}static notifyLoadingStatusListeners(){for(const t of this.listeners)t(this.loadingStatus)}}fi.loadingStatus=xt.NOT_LOADED;fi.serializedApiParams=void 0;fi.listeners=[];const Gm=["onLoad","apiKey","version","libraries"],Ym=["children"],ps=b.createContext(null);function Km(){const[e,t]=$.useState({});return{mapInstances:e,addMapInstance:(o,s="default")=>{t(l=>vt({},l,{[s]:o}))},removeMapInstance:(o="default")=>{t(s=>Pi(s,[o].map(Vm)))},clearMapInstances:()=>{t({})}}}function Qm(e){const{onLoad:t,apiKey:n,version:r,libraries:i=[]}=e,o=Pi(e,Gm),[s,l]=$.useState(fi.loadingStatus),[a,u]=$.useReducer((m,y)=>vt({},m,{[y.name]:y.value}),{}),d=$.useMemo(()=>i==null?void 0:i.join(","),[i]),p=$.useMemo(()=>JSON.stringify(vt({apiKey:n,version:r},o)),[n,r,o]),f=$.useCallback(async m=>{var y;if(a[m])return a[m];if(!((y=google)!=null&&(y=y.maps)!=null&&y.importLibrary))throw new Error("[api-provider-internal] importLibrary was called before google.maps.importLibrary was defined.");const w=await window.google.maps.importLibrary(m);return u({name:m,value:w}),w},[a]);return $.useEffect(()=>{(async()=>{try{const m=vt({key:n},o);r&&(m.v=r),(d==null?void 0:d.length)>0&&(m.libraries=d),await fi.load(m,y=>l(y));for(const y of["core","maps",...i])await f(y);t&&t()}catch(m){console.error("<ApiProvider> failed to load Google Maps API",m)}})()},[n,d,p]),{status:s,loadedLibraries:a,importLibrary:f}}const qm=e=>{const{children:t}=e,n=Pi(e,Ym),{mapInstances:r,addMapInstance:i,removeMapInstance:o,clearMapInstances:s}=Km(),{status:l,loadedLibraries:a,importLibrary:u}=Qm(n),d=$.useMemo(()=>({mapInstances:r,addMapInstance:i,removeMapInstance:o,clearMapInstances:s,status:l,loadedLibraries:a,importLibrary:u}),[r,i,o,s,l,a,u]);return b.createElement(ps.Provider,{value:d},t)};function Xm(e,t){for(const n of ty){const r=t[n],i=$f[n];$.useEffect(()=>{if(!e||!r)return;const o=google.maps.event.addListener(e,i,s=>{r(Zm(i,e,s))});return()=>o.remove()},[e,i,r])}}function Zm(e,t,n){const r={type:e,map:t,detail:{},stoppable:!1,stop:()=>{}};if(Jm.includes(e)){const o=r,s=t.getCenter(),l=t.getZoom(),a=t.getHeading()||0,u=t.getTilt()||0,d=t.getBounds();return(!s||!d||!Number.isFinite(l))&&console.warn("[createEvent] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),o.detail={center:(s==null?void 0:s.toJSON())||{lat:0,lng:0},zoom:l||0,heading:a,tilt:u,bounds:(d==null?void 0:d.toJSON())||{north:90,east:180,south:-90,west:-180}},o}else if(ey.includes(e)){var i;if(!n)throw new Error("[createEvent] mouse events must provide a srcEvent");const o=r;return o.domEvent=n.domEvent,o.stoppable=!0,o.stop=()=>n.stop(),o.detail={latLng:((i=n.latLng)==null?void 0:i.toJSON())||null,placeId:n.placeId},o}return r}const $f={onBoundsChanged:"bounds_changed",onCenterChanged:"center_changed",onClick:"click",onContextmenu:"contextmenu",onDblclick:"dblclick",onDrag:"drag",onDragend:"dragend",onDragstart:"dragstart",onHeadingChanged:"heading_changed",onIdle:"idle",onIsFractionalZoomEnabledChanged:"isfractionalzoomenabled_changed",onMapCapabilitiesChanged:"mapcapabilities_changed",onMapTypeIdChanged:"maptypeid_changed",onMousemove:"mousemove",onMouseout:"mouseout",onMouseover:"mouseover",onProjectionChanged:"projection_changed",onRenderingTypeChanged:"renderingtype_changed",onTilesLoaded:"tilesloaded",onTiltChanged:"tilt_changed",onZoomChanged:"zoom_changed",onCameraChanged:"bounds_changed"},Jm=["bounds_changed","center_changed","heading_changed","projection_changed","tilt_changed","zoom_changed"],ey=["click","contextmenu","dblclick","mousemove","mouseout","mouseover"],ty=Object.keys($f);function ny(e,t){const n=$.useRef(void 0);(!n.current||!Bm(t,n.current))&&(n.current=t),$.useEffect(e,n.current)}const ry=new Set(["backgroundColor","clickableIcons","controlSize","disableDefaultUI","disableDoubleClickZoom","draggable","draggableCursor","draggingCursor","fullscreenControl","fullscreenControlOptions","gestureHandling","isFractionalZoomEnabled","keyboardShortcuts","mapTypeControl","mapTypeControlOptions","mapTypeId","maxZoom","minZoom","noClear","panControl","panControlOptions","restriction","rotateControl","rotateControlOptions","scaleControl","scaleControlOptions","scrollwheel","streetView","streetViewControl","streetViewControlOptions","styles","zoomControl","zoomControlOptions"]);function iy(e,t){const n={},r=Object.keys(t);for(const i of r)ry.has(i)&&(n[i]=t[i]);ny(()=>{e&&e.setOptions(n)},[n])}function Of(){var e;return((e=$.useContext(ps))==null?void 0:e.status)||xt.NOT_LOADED}function oy(e,t){const{viewport:n,viewState:r}=t,i=!!n;return $.useLayoutEffect(()=>{if(!e||!r)return;const{latitude:o,longitude:s,bearing:l,pitch:a,zoom:u}=r;e.moveCamera({center:{lat:o,lng:s},heading:l,tilt:a,zoom:u+1})},[e,r]),i}function sy(e){return!e||typeof e!="object"||!("lat"in e&&"lng"in e)?!1:Number.isFinite(e.lat)&&Number.isFinite(e.lng)}function Nf(e){return sy(e)?e:e.toJSON()}function ly(e,t,n){const r=n.center?Nf(n.center):null;let i=null,o=null;r&&Number.isFinite(r.lat)&&Number.isFinite(r.lng)&&(i=r.lat,o=r.lng);const s=Number.isFinite(n.zoom)?n.zoom:null,l=Number.isFinite(n.heading)?n.heading:null,a=Number.isFinite(n.tilt)?n.tilt:null;$.useLayoutEffect(()=>{if(!e)return;const u={};let d=!1;i!==null&&o!==null&&(t.current.center.lat!==i||t.current.center.lng!==o)&&(u.center={lat:i,lng:o},d=!0),s!==null&&t.current.zoom!==s&&(u.zoom=s,d=!0),l!==null&&t.current.heading!==l&&(u.heading=l,d=!0),a!==null&&t.current.tilt!==a&&(u.tilt=a,d=!0),d&&e.moveCamera(u)})}const ay=()=>{const e={position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:999,display:"flex",flexFlow:"column nowrap",textAlign:"center",justifyContent:"center",fontSize:".8rem",color:"rgba(0,0,0,0.6)",background:"#dddddd",padding:"1rem 1.5rem"};return b.createElement("div",{style:e},b.createElement("h2",null,"Error: AuthFailure"),b.createElement("p",null,"A problem with your API key prevents the map from rendering correctly. Please make sure the value of the ",b.createElement("code",null,"APIProvider.apiKey")," prop is correct. Check the error-message in the console for further details."))};function uy(){const[e,t]=$.useState(null),n=$.useCallback(r=>t(r),[t]);return[e,n]}function If(){return Of()===xt.LOADED}function cy(){const[,e]=$.useReducer(t=>t+1,0);return e}function dy(e,t){const n=e.getCenter(),r=e.getZoom(),i=e.getHeading()||0,o=e.getTilt()||0,s=e.getBounds();(!n||!s||!Number.isFinite(r))&&console.warn("[useTrackedCameraState] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),Object.assign(t.current,{center:(n==null?void 0:n.toJSON())||{lat:0,lng:0},zoom:r||0,heading:i,tilt:o})}function py(e){const t=cy(),n=$.useRef({center:{lat:0,lng:0},heading:0,tilt:0,zoom:0});return $.useEffect(()=>{if(!e)return;const r=google.maps.event.addListener(e,"bounds_changed",()=>{dy(e,n),t()});return()=>r.remove()},[e,t]),n}const fy=["id","defaultBounds","defaultCenter","defaultZoom","defaultHeading","defaultTilt"];function hy(e,t){const n=If(),[r,i]=$.useState(null),[o,s]=uy(),l=py(r),{id:a,defaultBounds:u,defaultCenter:d,defaultZoom:p,defaultHeading:f,defaultTilt:m}=e,y=Pi(e,fy);!y.center&&d&&(y.center=d),!y.zoom&&Number.isFinite(p)&&(y.zoom=p),!y.heading&&Number.isFinite(f)&&(y.heading=f),!y.tilt&&Number.isFinite(m)&&(y.tilt=m);for(const N of Object.keys(y))y[N]===void 0&&delete y[N];const w=$.useRef();return $.useEffect(()=>{if(!o||!n)return;const{addMapInstance:N,removeMapInstance:h}=t,c=e.mapId,g=new google.maps.Map(o,y);if(i(g),N(g,a),u&&g.fitBounds(u),w.current){const{mapId:E,cameraState:L}=w.current;E!==c&&g.setOptions(L)}return()=>{w.current={mapId:c,cameraState:l.current},google.maps.event.clearInstanceListeners(g),i(null),h(a)}},[o,n,a,e.mapId]),[r,s,l]}const ru=b.createContext(null),Tf=e=>{const{children:t,id:n,className:r,style:i}=e,o=$.useContext(ps),s=Of();if(!o)throw new Error("<Map> can only be used inside an <ApiProvider> component.");const[l,a,u]=hy(e,o);ly(l,u,e),Xm(l,e),iy(l,e);const d=oy(l,e),p=!!e.controlled;$.useEffect(()=>{if(l)return d&&l.setOptions({disableDefaultUI:!0}),(d||p)&&l.setOptions({gestureHandling:"none",keyboardShortcuts:!1}),()=>{l.setOptions({gestureHandling:e.gestureHandling,keyboardShortcuts:e.keyboardShortcuts})}},[l,d,p,e.gestureHandling,e.keyboardShortcuts]);const f=e.center?Nf(e.center):null;let m=null,y=null;f&&Number.isFinite(f.lat)&&Number.isFinite(f.lng)&&(m=f.lat,y=f.lng);const w=$.useMemo(()=>{var c,g,E,L,A;return{center:{lat:(c=m)!=null?c:0,lng:(g=y)!=null?g:0},zoom:(E=e.zoom)!=null?E:0,heading:(L=e.heading)!=null?L:0,tilt:(A=e.tilt)!=null?A:0}},[m,y,e.zoom,e.heading,e.tilt]);$.useLayoutEffect(()=>{if(!l||!p)return;l.moveCamera(w);const c=l.addListener("bounds_changed",()=>{l.moveCamera(w)});return()=>c.remove()},[l,p,w]);const N=$.useMemo(()=>vt({width:"100%",height:"100%",zIndex:d?-1:0},i),[i,d]),h=$.useMemo(()=>({map:l}),[l]);return s===xt.AUTH_FAILURE?b.createElement("div",{style:vt({position:"relative"},r?{}:N),className:r},b.createElement(ay,null)):b.createElement("div",vt({ref:a,"data-testid":"map",style:r?void 0:N,className:r},n?{id:n}:{}),l?b.createElement(ru.Provider,{value:h},t):null)};Tf.deckGLViewProps=!0;function gy(e){const t=If(),n=$.useContext(ps);return $.useEffect(()=>{!t||!n||n.importLibrary(e)},[t,n,e]),(n==null?void 0:n.loadedLibraries[e])||null}const Rf=b.createContext(null);function my(e){var t;const[n,r]=$.useState(null),[i,o]=$.useState(null),s=(t=$.useContext(ru))==null?void 0:t.map,l=gy("marker"),{children:a,className:u,onClick:d,onDrag:p,onDragStart:f,onDragEnd:m,collisionBehavior:y,draggable:w,position:N,title:h,zIndex:c}=e,g=$.Children.count(a);return $.useEffect(()=>{if(!s||!l)return;const E=new l.AdvancedMarkerElement;if(E.map=s,r(E),g>0){const L=document.createElement("div");u&&(L.className=u),E.content=L,o(L)}return()=>{E.map=null,r(null),o(null)}},[s,l,g]),$.useEffect(()=>{i&&(i.className=u!=null?u:"")},[i,u]),$.useEffect(()=>{if(!n)return;const E=google.maps.event;d&&E.addListener(n,"click",d),p&&E.addListener(n,"drag",p),f&&E.addListener(n,"dragstart",f),m&&E.addListener(n,"dragend",m),(p||f||m)&&!w&&console.warn("You need to set the marker to draggable to listen to drag-events.");const L=n;return()=>{E.clearInstanceListeners(L)}},[n,w,d,f,p,m]),$.useEffect(()=>{n&&(N!==void 0&&(n.position=N),w!==void 0&&(n.gmpDraggable=w),y!==void 0&&(n.collisionBehavior=y),c!==void 0&&(n.zIndex=c),typeof h=="string"&&(n.title=h))},[n,N,w,y,c,h]),[n,i]}const yy=$.forwardRef((e,t)=>{const{children:n}=e,[r,i]=my(e),o=$.useMemo(()=>r?{marker:r}:null,[r]);return $.useImperativeHandle(t,()=>r,[r]),r?b.createElement(Rf.Provider,{value:o},i!==null&&nu.createPortal(n,i)):null}),Lc=new Set;function kc(...e){const t=JSON.stringify(e);Lc.has(t)||(Lc.add(t),console.error(...e))}const vy=["onClick","onDrag","onDragStart","onDragEnd","onMouseOver","onMouseOut"];function _y(e){var t;const[n,r]=$.useState(null),i=(t=$.useContext(ru))==null?void 0:t.map,{onClick:o,onDrag:s,onDragStart:l,onDragEnd:a,onMouseOver:u,onMouseOut:d}=e,p=Pi(e,vy),{position:f,draggable:m}=p;return $.useEffect(()=>{if(!i){i===void 0&&console.error("<Marker> has to be inside a Map component.");return}const y=new google.maps.Marker(p);return y.setMap(i),r(y),()=>{y.setMap(null),r(null)}},[i]),$.useEffect(()=>{if(!n)return;const y=n,w=google.maps.event;return o&&w.addListener(y,"click",o),s&&w.addListener(y,"drag",s),l&&w.addListener(y,"dragstart",l),a&&w.addListener(y,"dragend",a),u&&w.addListener(y,"mouseover",u),d&&w.addListener(y,"mouseout",d),n.setDraggable(!!m),()=>{w.clearInstanceListeners(y)}},[n,m,o,s,l,a,u,d]),$.useEffect(()=>{n&&p&&n.setOptions(p)},[n,p]),$.useEffect(()=>{m||!f||!n||n.setPosition(f)},[m,f,n]),n}$.forwardRef((e,t)=>{const n=_y(e);return $.useImperativeHandle(t,()=>n,[n]),b.createElement(b.Fragment,null)});const wy=e=>{var t;const n=(t=$.useContext(Rf))==null?void 0:t.marker,r=$.useMemo(()=>document.createElement("div"),[]);return $.useEffect(()=>{if(!n){n===void 0&&console.error("The <Pin> component can only be used inside <AdvancedMarker>.");return}e.glyph&&e.children&&kc("The <Pin> component only uses children to render the glyph if both the glyph property and children are present."),$.Children.count(e.children)>1&&kc("Passing multiple children to the <Pin> component might lead to unexpected results.");const i=vt({},e),o=new google.maps.marker.PinElement(i);e.children&&(o.glyph=r),n.content=o.element},[n,r,e]),nu.createPortal(e.children,r)};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ey=new Set(["children","localName","ref","style","className"]),Pc=new WeakMap,Ac=(e,t,n,r,i)=>{const o=i==null?void 0:i[t];o===void 0?(e[t]=n,n==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):n!==r&&((s,l,a)=>{let u=Pc.get(s);u===void 0&&Pc.set(s,u=new Map);let d=u.get(l);a!==void 0?d===void 0?(u.set(l,d={handleEvent:a}),s.addEventListener(l,d)):d.handleEvent=a:d!==void 0&&(u.delete(l),s.removeEventListener(l,d))})(e,o,n)},ee=({react:e,tagName:t,elementClass:n,events:r,displayName:i})=>{const o=new Set(Object.keys(r!=null?r:{})),s=e.forwardRef((l,a)=>{const u=e.useRef(new Map),d=e.useRef(null),p={},f={};for(const[m,y]of Object.entries(l))Ey.has(m)?p[m==="className"?"class":m]=y:o.has(m)||m in n.prototype?f[m]=y:p[m]=y;return e.useLayoutEffect(()=>{if(d.current===null)return;const m=new Map;for(const y in f)Ac(d.current,y,l[y],u.current.get(y),r),u.current.delete(y),m.set(y,l[y]);for(const[y,w]of u.current)Ac(d.current,y,void 0,w,r);u.current=m}),e.useLayoutEffect(()=>{var m;(m=d.current)==null||m.removeAttribute("defer-hydration")},[]),p.suppressHydrationWarning=!0,e.createElement(t,{...p,ref:e.useCallback(m=>{d.current=m,typeof a=="function"?a(m):a!==null&&(a.current=m)},[a])})});return s.displayName=i!=null?i:n.name,s};function v(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o}function _(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const po=globalThis,iu=po.ShadowRoot&&(po.ShadyCSS===void 0||po.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ou=Symbol(),$c=new WeakMap;let Mf=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==ou)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(iu&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=$c.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&$c.set(n,t))}return t}toString(){return this.cssText}};const Sy=e=>new Mf(typeof e=="string"?e:e+"",void 0,ou),j=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new Mf(n,e,ou)},xy=(e,t)=>{if(iu)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=po.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},Oc=iu?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Sy(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Cy,defineProperty:Ly,getOwnPropertyDescriptor:ky,getOwnPropertyNames:Py,getOwnPropertySymbols:Ay,getPrototypeOf:$y}=Object,en=globalThis,Nc=en.trustedTypes,Oy=Nc?Nc.emptyScript:"",Qs=en.reactiveElementPolyfillSupport,Gr=(e,t)=>e,zo={toAttribute(e,t){switch(t){case Boolean:e=e?Oy:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},su=(e,t)=>!Cy(e,t),Ic={attribute:!0,type:String,converter:zo,reflect:!1,hasChanged:su};var ud,cd;(ud=Symbol.metadata)!=null||(Symbol.metadata=Symbol("metadata")),(cd=en.litPropertyMetadata)!=null||(en.litPropertyMetadata=new WeakMap);class Un extends HTMLElement{static addInitializer(t){var n;this._$Ei(),((n=this.l)!=null?n:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Ic){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&Ly(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){var s;const{get:i,set:o}=(s=ky(this.prototype,t))!=null?s:{get(){return this[n]},set(l){this[n]=l}};return{get(){return i==null?void 0:i.call(this)},set(l){const a=i==null?void 0:i.call(this);o.call(this,l),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var n;return(n=this.elementProperties.get(t))!=null?n:Ic}static _$Ei(){if(this.hasOwnProperty(Gr("elementProperties")))return;const t=$y(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Gr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Gr("properties"))){const n=this.properties,r=[...Py(n),...Ay(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(Oc(i))}else t!==void 0&&n.push(Oc(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n,r;((n=this._$EO)!=null?n:this._$EO=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var n;const t=(n=this.shadowRoot)!=null?n:this.attachShadow(this.constructor.shadowRootOptions);return xy(t,this.constructor.elementStyles),t}connectedCallback(){var t,n;(t=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){var o;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:zo).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){var o;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:zo;this._$Em=i,this[i]=l.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,r){var i;if(t!==void 0){if(r!=null||(r=this.constructor.getPropertyOptions(t)),!((i=r.hasChanged)!=null?i:su)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){var i;this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&((i=this._$Ej)!=null?i:this._$Ej=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r,i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if((r=this.renderRoot)!=null||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,l]of this._$Ep)this[s]=l;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,l]of o)l.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],l)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(i=this._$EO)==null||i.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(n)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}}var dd;Un.elementStyles=[],Un.shadowRootOptions={mode:"open"},Un[Gr("elementProperties")]=new Map,Un[Gr("finalized")]=new Map,Qs==null||Qs({ReactiveElement:Un}),((dd=en.reactiveElementVersions)!=null?dd:en.reactiveElementVersions=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yr=globalThis,Uo=Yr.trustedTypes,Tc=Uo?Uo.createPolicy("lit-html",{createHTML:e=>e}):void 0,lu="$lit$",Ct=`lit$${Math.random().toFixed(9).slice(2)}$`,au="?"+Ct,Ny=`<${au}>`,In=document,hi=()=>In.createComment(""),gi=e=>e===null||typeof e!="object"&&typeof e!="function",bf=Array.isArray,Df=e=>bf(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",qs=`[ 	
\f\r]`,Ir=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rc=/-->/g,Mc=/>/g,pn=RegExp(`>|${qs}(?:([^\\s"'>=/]+)(${qs}*=${qs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bc=/'/g,Dc=/"/g,zf=/^(?:script|style|textarea|title)$/i,Iy=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),S=Iy(1),Rt=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),zc=new WeakMap,En=In.createTreeWalker(In,129);function Uf(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tc!==void 0?Tc.createHTML(t):t}const Ff=(e,t)=>{const n=e.length-1,r=[];let i,o=t===2?"<svg>":"",s=Ir;for(let l=0;l<n;l++){const a=e[l];let u,d,p=-1,f=0;for(;f<a.length&&(s.lastIndex=f,d=s.exec(a),d!==null);)f=s.lastIndex,s===Ir?d[1]==="!--"?s=Rc:d[1]!==void 0?s=Mc:d[2]!==void 0?(zf.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=pn):d[3]!==void 0&&(s=pn):s===pn?d[0]===">"?(s=i!=null?i:Ir,p=-1):d[1]===void 0?p=-2:(p=s.lastIndex-d[2].length,u=d[1],s=d[3]===void 0?pn:d[3]==='"'?Dc:bc):s===Dc||s===bc?s=pn:s===Rc||s===Mc?s=Ir:(s=pn,i=void 0);const m=s===pn&&e[l+1].startsWith("/>")?" ":"";o+=s===Ir?a+Ny:p>=0?(r.push(u),a.slice(0,p)+lu+a.slice(p)+Ct+m):a+Ct+(p===-2?l:m)}return[Uf(e,o+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class mi{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const l=t.length-1,a=this.parts,[u,d]=Ff(t,n);if(this.el=mi.createElement(u,r),En.currentNode=this.el.content,n===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=En.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(lu)){const f=d[s++],m=i.getAttribute(p).split(Ct),y=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:y[2],strings:m,ctor:y[1]==="."?Bf:y[1]==="?"?Hf:y[1]==="@"?Vf:Ai}),i.removeAttribute(p)}else p.startsWith(Ct)&&(a.push({type:6,index:o}),i.removeAttribute(p));if(zf.test(i.tagName)){const p=i.textContent.split(Ct),f=p.length-1;if(f>0){i.textContent=Uo?Uo.emptyScript:"";for(let m=0;m<f;m++)i.append(p[m],hi()),En.nextNode(),a.push({type:2,index:++o});i.append(p[f],hi())}}}else if(i.nodeType===8)if(i.data===au)a.push({type:2,index:o});else{let p=-1;for(;(p=i.data.indexOf(Ct,p+1))!==-1;)a.push({type:7,index:o}),p+=Ct.length-1}o++}}static createElement(t,n){const r=In.createElement("template");return r.innerHTML=t,r}}function Tn(e,t,n=e,r){var s,l,a;if(t===Rt)return t;let i=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const o=gi(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,r)),r!==void 0?((a=n._$Co)!=null?a:n._$Co=[])[r]=i:n._$Cl=i),i!==void 0&&(t=Tn(e,i._$AS(e,t.values),i,r)),t}class jf{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var u;const{el:{content:n},parts:r}=this._$AD,i=((u=t==null?void 0:t.creationScope)!=null?u:In).importNode(n,!0);En.currentNode=i;let o=En.nextNode(),s=0,l=0,a=r[0];for(;a!==void 0;){if(s===a.index){let d;a.type===2?d=new Er(o,o.nextSibling,this,t):a.type===1?d=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(d=new Wf(o,this,t)),this._$AV.push(d),a=r[++l]}s!==(a==null?void 0:a.index)&&(o=En.nextNode(),s++)}return En.currentNode=In,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Er{get _$AU(){var t,n;return(n=(t=this._$AM)==null?void 0:t._$AU)!=null?n:this._$Cv}constructor(t,n,r,i){var o;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(o=i==null?void 0:i.isConnected)!=null?o:!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Tn(this,t,n),gi(t)?t===U||t==null||t===""?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==Rt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Df(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==U&&gi(this._$AH)?this._$AA.nextSibling.data=t:this.T(In.createTextNode(t)),this._$AH=t}$(t){var o;const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=mi.createElement(Uf(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const s=new jf(i,this),l=s.u(this.options);s.p(n),this.T(l),this._$AH=s}}_$AC(t){let n=zc.get(t.strings);return n===void 0&&zc.set(t.strings,n=new mi(t)),n}k(t){bf(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of t)i===n.length?n.push(r=new Er(this.S(hi()),this.S(hi()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class Ai{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,o){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=U}_$AI(t,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)t=Tn(this,t,n,0),s=!gi(t)||t!==this._$AH&&t!==Rt,s&&(this._$AH=t);else{const l=t;let a,u;for(t=o[0],a=0;a<o.length-1;a++)u=Tn(this,l[r+a],n,a),u===Rt&&(u=this._$AH[a]),s||(s=!gi(u)||u!==this._$AH[a]),u===U?t=U:t!==U&&(t+=(u!=null?u:"")+o[a+1]),this._$AH[a]=u}s&&!i&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Bf extends Ai{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}class Hf extends Ai{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==U)}}class Vf extends Ai{constructor(t,n,r,i,o){super(t,n,r,i,o),this.type=5}_$AI(t,n=this){var s;if((t=(s=Tn(this,t,n,0))!=null?s:U)===Rt)return;const r=this._$AH,i=t===U&&r!==U||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==U&&(r===U||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)==null?void 0:n.host)!=null?r:this.element,t):this._$AH.handleEvent(t)}}class Wf{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Tn(this,t)}}const Ty={P:lu,A:Ct,C:au,M:1,L:Ff,R:jf,D:Df,V:Tn,I:Er,H:Ai,N:Hf,U:Vf,B:Bf,F:Wf},Xs=Yr.litHtmlPolyfillSupport;var pd;Xs==null||Xs(mi,Er),((pd=Yr.litHtmlVersions)!=null?pd:Yr.litHtmlVersions=[]).push("3.1.3");const Gf=(e,t,n)=>{var o,s;const r=(o=n==null?void 0:n.renderBefore)!=null?o:t;let i=r._$litPart$;if(i===void 0){const l=(s=n==null?void 0:n.renderBefore)!=null?s:null;r._$litPart$=i=new Er(t.insertBefore(hi(),l),l,void 0,n!=null?n:{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Kr=class extends Un{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n,r;const t=super.createRenderRoot();return(r=(n=this.renderOptions).renderBefore)!=null||(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Gf(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Rt}};var fd;Kr._$litElement$=!0,Kr.finalized=!0,(fd=globalThis.litElementHydrateSupport)==null||fd.call(globalThis,{LitElement:Kr});const Zs=globalThis.litElementPolyfillSupport;Zs==null||Zs({LitElement:Kr});var hd;((hd=globalThis.litElementVersions)!=null?hd:globalThis.litElementVersions=[]).push("4.0.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ry={attribute:!0,type:String,converter:zo,reflect:!1,hasChanged:su},My=(e=Ry,t,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,e)},init(l){return l!==void 0&&this.P(s,void 0,e),l}}}if(r==="setter"){const{name:s}=n;return function(l){const a=this[s];t.call(this,l),this.requestUpdate(s,a,e)}}throw Error("Unsupported decorator location: "+r)};function C(e){return(t,n)=>typeof n=="object"?My(e,t,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fe(e){return C({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fo=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(e,t){return(n,r,i)=>{const o=s=>{var l,a;return(a=(l=s.renderRoot)==null?void 0:l.querySelector(e))!=null?a:null};if(t){const{get:s,set:l}=typeof r=="object"?n:i!=null?i:(()=>{const a=Symbol();return{get(){return this[a]},set(u){this[a]=u}}})();return Fo(n,r,{get(){let a=s.call(this);return a===void 0&&(a=o(this),(a!==null||this.hasUpdated)&&l.call(this,a)),a}})}return Fo(n,r,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Yf(e){return(t,n)=>{const{slot:r,selector:i}=e!=null?e:{},o="slot"+(r?`[name=${r}]`:":not([name])");return Fo(t,n,{get(){var a,u;const s=(a=this.renderRoot)==null?void 0:a.querySelector(o),l=(u=s==null?void 0:s.assignedElements(e))!=null?u:[];return i===void 0?l:l.filter(d=>d.matches(i))}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function by(e){return(t,n)=>{const{slot:r}=e!=null?e:{},i="slot"+(r?`[name=${r}]`:":not([name])");return Fo(t,n,{get(){var s,l;const o=(s=this.renderRoot)==null?void 0:s.querySelector(i);return(l=o==null?void 0:o.assignedNodes(e))!=null?l:[]}})}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Kf{constructor(t){this.host=t,this.host.addController(this)}hostUpdate(){}info(t,...n){console.info(this.formatMessage(t),...n)}warn(t,...n){console.warn(this.formatMessage(t),...n)}error(t,...n){console.error(this.formatMessage(t),...n)}formatMessage(t){return this.prependTagName(t)}prependTagName(t){return`<${this.host.tagName.toLowerCase()}>: ${t}`}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Oe extends Kr{constructor(){super(...arguments),this.logger=new Kf(this)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Dy="0.6.10",zy="NPM";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class rn{constructor(){this.promise=new Promise((t,n)=>{this.resolveCallback=t,this.rejectCallback=n})}resolve(t){this.value=t,this.resolveCallback(t)}reject(t){this.rejectCallback(t)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Uy(e){return(t=>{var n,r,i,o="The Google Maps JavaScript API",s="google",l="importLibrary",a="__ib__",u=document,d=window;d=d[s]||(d[s]={});var p=d.maps||(d.maps={}),f=new Set,m=new URLSearchParams,y=()=>n||(n=new Promise(async(w,N)=>{var h;await(r=u.createElement("script")),m.set("libraries",[...f]+"");for(i in t)m.set(i.replace(/[A-Z]/g,c=>"_"+c[0].toLowerCase()),t[i]);m.set("callback",s+".maps."+a),r.src=`https://maps.${s}apis.com/maps/api/js?`+m,p[a]=w,r.onerror=()=>n=N(Error(o+" could not load.")),r.nonce=((h=u.querySelector("script[nonce]"))==null?void 0:h.nonce)||"",u.head.append(r)}));p[l]?console.warn(o+" only loads once. Ignoring:",t):p[l]=(w,...N)=>f.add(w)&&y().then(()=>p[l](w,...N))})(e),google.maps}const Fy={load:Uy};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var ue;function jy(){try{return google==null?void 0:google.maps}catch{return}}function Uc(e){e.importLibrary("maps"),e.importLibrary("marker")}function By(e){const t=e.logger;return t instanceof Kf?t:void 0}let G=ue=class extends Oe{constructor(){super(...arguments),this.version="beta"}set apiKey(t){this.key=t}get apiKey(){return this.key}async connectedCallback(){super.connectedCallback(),ue.instance?this.logger.warn("Found multiple instances of this element on the same page. The Google Maps JavaScript API can only be configured once; please ensure you only have a single instance.",this):ue.instance=this}willUpdate(t){ue.instance===this&&this.tryLoadGoogleMapsAPI(t)}render(){return S`<slot></slot>`}getSolutionChannel(){if(this.solutionChannel!=="")return this.solutionChannel?this.solutionChannel:`GMP_${zy}_extended_v${Dy}`}tryLoadGoogleMapsAPI(t){if(ue.googleMapsDeferred.value)if(ue.inlineScriptLoaded){const n=t.keys().next().value;this.logger.warn(`Property '${n}' cannot be updated once the Google Maps JavaScript API is already loaded.`)}else this.logger.warn("Please remove the <gmpx-api-loader> element if you are using the Google Maps JavaScript API inline bootstrap loader. Duplicate configuration may cause unexpected behavior.");else if(this.key!==void 0){const{key:n,version:r,language:i,region:o,authReferrerPolicy:s}=this,l=this.getSolutionChannel(),a=Fy.load({key:n,...r&&{v:r},...i&&{language:i},...o&&{region:o},...l&&{solutionChannel:l},...s&&{authReferrerPolicy:s}});ue.inlineScriptLoaded=!0,ue.googleMapsDeferred.resolve(a),Uc(a)}}static async importLibrary(t,n){let r=ue.googleMapsDeferred.value;return r||(ue.pollForGoogleMaps(5,1e3,n&&By(n)),r=await ue.googleMapsDeferred.promise),r.importLibrary(t)}static reset(){delete window.google,delete ue.instance,ue.inlineScriptLoaded=!1,ue.googleMapsDeferred=new rn}static pollForGoogleMaps(t,n,r,i=0){const o=jy();if(o)!ue.inlineScriptLoaded&&i>0&&(r!=null?r:console).warn("Using the legacy Google Maps JavaScript API script loader may result in suboptimal performance. For best results, please include a <gmpx-api-loader> (https://github.com/googlemaps/extended-component-library) or use the inline bootstrap loader (https://goo.gle/js-api-loading) instead."),ue.googleMapsDeferred.resolve(o),Uc(o);else if(t>0)window.setTimeout(()=>{ue.pollForGoogleMaps(t-1,n,r,i+1)},n);else{let s=r?r.formatMessage("The Google Maps JavaScript API is required for this element to function correctly. "):"APILoader.importLibrary(): Unable to initialize the Google Maps JavaScript API. ";throw s+="Please ensure you have a <gmpx-api-loader> on the page with a valid API key. https://github.com/googlemaps/extended-component-library",new Error(s)}}};G.googleMapsDeferred=new rn;G.inlineScriptLoaded=!1;v([C({attribute:"auth-referrer-policy",reflect:!0,type:String}),_("design:type",String)],G.prototype,"authReferrerPolicy",void 0);v([C({reflect:!0,type:String}),_("design:type",String)],G.prototype,"key",void 0);v([C({reflect:!0,type:String}),_("design:type",String)],G.prototype,"language",void 0);v([C({reflect:!0,type:String}),_("design:type",String)],G.prototype,"region",void 0);v([C({attribute:"solution-channel",reflect:!0,type:String}),_("design:type",String)],G.prototype,"solutionChannel",void 0);v([C({reflect:!0,type:String}),_("design:type",Object)],G.prototype,"version",void 0);G=ue=v([K("gmpx-api-loader")],G);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},$i=e=>(...t)=>({_$litDirective$:e,values:t});let Oi=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jo=$i(class extends Oi{constructor(e){var t;if(super(e),e.type!==fs.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((r=this.nt)!=null&&r.has(o))&&this.st.add(o);return this.render(t)}const n=e.element.classList;for(const o of this.st)o in t||(n.remove(o),this.st.delete(o));for(const o in t){const s=!!t[o];s===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(s?(n.add(o),this.st.add(o)):(n.remove(o),this.st.delete(o)))}return Rt}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ge(e,t,n){return e?t(e):n==null?void 0:n(e)}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $t=j`var(--gmpx-color-primary, #1976d2)`,mn=j`var(--gmpx-color-surface, #fff)`,Fc=j`var(--gmpx-color-on-primary, #fff)`,Pt=j`var(--gmpx-color-on-surface, #212121)`,Bo=j`var(--gmpx-color-on-surface-variant, #757575)`,Hy=j`var(--gmpx-color-outline, #e0e0e0)`,Zl=j`var(--gmpx-rating-color, #ffb300)`,Jl=j`var(--gmpx-rating-color-empty, #e0e0e0)`,uu=j`var(--gmpx-font-family-base, 'Google Sans Text', sans-serif)`,cu=j`var(--gmpx-font-family-headings, ${uu})`,Le=j`var(--gmpx-font-size-base, 0.875rem)`;function R(e){return j`calc(${Le} * (${e}/14))`}const Vy=j`400 ${R(18)}/${R(24)} ${cu}`,fo=j`500 ${R(16)}/${R(24)} ${cu}`,fr=j`500 ${R(14)}/${R(20)} ${cu}`,hs=j`400 ${R(14)}/${R(20)} ${uu}`,gs=j`400 ${R(12)}/${R(16)} ${uu}`,yi=j`1px solid ${Hy}`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Wy(e,t){const n=document.createElement("link");return n.rel="stylesheet",n.href=`https://fonts.googleapis.com/css2?family=${encodeURIComponent(e)}:wght@${encodeURIComponent(t.join(";"))}`,n}function jc(e){const t=document.createElement("div");t.innerHTML=e;const n=t.querySelector("a");return{text:t.textContent||void 0,url:n&&n.href||void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var ve;(function(e){e.GOOGLE_SANS_TEXT="Google Sans Text",e.MATERIAL_SYMBOLS_OUTLINED="Material Symbols Outlined"})(ve||(ve={}));const Js=Object.freeze({[ve.GOOGLE_SANS_TEXT]:{loadInDocumentHead:!0,loadInShadowRoot:!1,weights:[400,500]},[ve.MATERIAL_SYMBOLS_OUTLINED]:{loadInDocumentHead:!0,loadInShadowRoot:!0,weights:[400]}});class un{constructor(t,n){this.host=t,this.fonts=n,t.addController(this);for(const r of n)Js[r].loadInDocumentHead&&this.injectWebFontAsset(document.head,r)}hostConnected(){for(const t of this.fonts)Js[t].loadInShadowRoot&&this.injectWebFontAsset(this.host.renderRoot,t)}injectWebFontAsset(t,n){t.querySelector(`link[href*="${encodeURIComponent(n)}"]`)||t.appendChild(Wy(n,Js[n].weights))}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Gy="add",Bc=Object.freeze(["outlined","filled"]),zn=.5;let Fe=class extends Oe{constructor(){super(...arguments),this.ariaHasPopup="false",this.ariaLabel=null,this.condensed=!1,this.variant="outlined",this.hasLabel=!1,this.fontLoader=new un(this,[ve.GOOGLE_SANS_TEXT,ve.MATERIAL_SYMBOLS_OUTLINED])}willUpdate(t){t.has("variant")&&!Bc.includes(this.variant)&&(this.logger.error(`Value "${this.variant}" for attribute "variant" is invalid. Acceptable choices are ${Bc.map(n=>`"${n}"`).join(", ")}.`),this.variant="outlined")}render(){var t,n;return this.href?S`
        <a
          aria-label=${(t=this.ariaLabel)!=null?t:U}
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
    `}updated(){this.role=this.ariaLabel!=null?"none":null}renderContent(){const t=this.icon||(!this.hasLabel||this.condensed?Gy:void 0);return S`
      <div class="layout ${jo({condensed:this.condensed,"no-label":!this.hasLabel})}">
        <div class="pill ${jo({filled:this.variant==="filled",outlined:this.variant!=="filled"})}">
          <div class="overlay"></div>
          ${ge(t,()=>S`
            <span aria-hidden="true" class="icon material-symbols-outlined">
              ${t}
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
    `}handleSlotChange(){var t;this.hasLabel=!!((t=this.defaultSlotNodes)!=null&&t.map(n=>{var r;return(r=n.textContent)!=null?r:""}).join("").trim())}};Fe.styles=j`
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
      font: ${gs};
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
      color: ${Fc};
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
      background-color: ${Fc};
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
  `;Fe.shadowRootOptions={...Oe.shadowRootOptions,delegatesFocus:!0};v([C({attribute:"aria-haspopup",reflect:!0,type:String}),_("design:type",String)],Fe.prototype,"ariaHasPopup",void 0);v([C({attribute:"aria-label",reflect:!0,type:String}),_("design:type",Object)],Fe.prototype,"ariaLabel",void 0);v([C({reflect:!0,type:Boolean}),_("design:type",Object)],Fe.prototype,"condensed",void 0);v([C({reflect:!0,type:String}),_("design:type",String)],Fe.prototype,"href",void 0);v([C({reflect:!0,type:String}),_("design:type",String)],Fe.prototype,"icon",void 0);v([C({reflect:!0,type:String}),_("design:type",String)],Fe.prototype,"variant",void 0);v([fe(),_("design:type",Object)],Fe.prototype,"hasLabel",void 0);v([by({flatten:!0}),_("design:type",Array)],Fe.prototype,"defaultSlotNodes",void 0);Fe=v([K("gmpx-icon-button")],Fe);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qf="important",Yy=" !"+Qf,ea=$i(class extends Oi{constructor(e){var t;if(super(e),e.type!==fs.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return r==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){const{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?n.removeProperty(r):n[r]=null);for(const r in t){const i=t[r];if(i!=null){this.ft.add(r);const o=typeof i=="string"&&i.endsWith(Yy);r.includes("-")||o?n.setProperty(r,o?i.slice(0,-11):i,o?Qf:""):n[r]=i}}return Rt}});/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Hc(e){return e?`"${e}"`:"default"}class ms{constructor(t,n,r){this.host=t,this.logger=n,this.supportedSlotNames=r,t.addController(this)}hostConnected(){for(const t of this.host.children)this.checkChildSlotValidity(t)}checkChildSlotValidity(t){var r;const n=(r=t.getAttribute("slot"))!=null?r:"";this.supportedSlotNames.includes(n)||this.logger.warn(`Detected child element in unsupported ${Hc(n)} slot. This component supports the following slots: ${this.supportedSlotNames.map(Hc).join(", ")}.`,t)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ho(){var n;let e=document.activeElement;if(!e)return null;let t;for(;t=(n=e.shadowRoot)==null?void 0:n.activeElement;)e=t;return e}function*qf(e){for(;;)if(yield e,e.parentNode)e=e.parentNode;else if(e instanceof ShadowRoot)e=e.host;else return}function Ky(e,t){if(e.length===0||!t)return!1;const n=new Set(e);for(const r of qf(t))if(n.has(r))return!0;return!1}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Mt=class extends Oe{constructor(){super(...arguments),this.opened=!1,this.mainLastActiveEl=null,this.slotValidator=new ms(this,this.logger,["main","overlay"])}async showOverlay(){if(!this.opened&&(this.mainLastActiveEl=this.getMainActiveEl(),this.opened=!0,await this.updateComplete,this.overlayContainer.scroll(0,0),this.mainLastActiveEl)){const t=this.getOverlayAutofocusEl();t?t.focus():this.overlayContainer.focus()}}async hideOverlay(){if(!this.opened)return;const t=this.getOverlayActiveEl();this.opened=!1,(t||Ho()===this.overlayContainer)&&(await this.updateComplete,this.mainLastActiveEl?this.mainLastActiveEl.focus():this.mainContainer.focus()),this.mainLastActiveEl=null}render(){return S`
      <div class="outer-container">
        <div
          class="inner-container main-container"
          style=${ea({display:this.opened?"none":"block"})}
          tabindex="-1"
        >
          <slot name="main"></slot>
        </div>
        <div
          class="inner-container overlay-container"
          style=${ea({display:this.opened?"block":"none"})}
          tabindex="-1"
          @keydown=${this.handleOverlayKeydown}
        >
          <slot name="overlay"></slot>
        </div>
      </div>
    `}handleOverlayKeydown(t){t.key==="Escape"&&this.hideOverlay()}getContainedActiveEl(t){const n=Ho();return n instanceof HTMLElement&&Ky(t,n)?n:null}getMainActiveEl(){return this.getContainedActiveEl(this.mainAssignedEls)}getOverlayActiveEl(){return this.getContainedActiveEl(this.overlayAssignedEls)}getOverlayAutofocusEl(){for(const t of this.overlayAssignedEls){const n=t.querySelector("[autofocus]");if(n&&n instanceof HTMLElement)return n}return null}};Mt.styles=j`
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
  `;v([Yf({slot:"main"}),_("design:type",Array)],Mt.prototype,"mainAssignedEls",void 0);v([Yf({slot:"overlay"}),_("design:type",Array)],Mt.prototype,"overlayAssignedEls",void 0);v([ut(".main-container"),_("design:type",HTMLDivElement)],Mt.prototype,"mainContainer",void 0);v([ut(".overlay-container"),_("design:type",HTMLDivElement)],Mt.prototype,"overlayContainer",void 0);v([fe(),_("design:type",Object)],Mt.prototype,"opened",void 0);Mt=v([K("gmpx-overlay-layout")],Mt);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ta(e,t){const n=typeof t=="function";if(e!==void 0){let r=-1;for(const i of e)r>-1&&(yield n?t(r):t),r++,yield i}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Rn(e,t){if(e!==void 0){let n=0;for(const r of e)yield t(r,n++)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Xf=24*60*60*1e3,el=7*Xf;function Qy(e,t=!1){const n=new Date;return n.setDate(n.getDate()-n.getDay()+e.day),n.setHours(e.hour),n.setMinutes(e.minute),n.setSeconds(0),n.toLocaleString(void 0,{hour:"numeric",minute:"numeric",weekday:t?"short":void 0})}function Vc(e,t,n=new Date){return Qy(e,!Zf(t,n))}function Zf(e,t=new Date,n=Xf){return e>=t&&e.valueOf()-t.valueOf()<n}function du(e){var t;return((t=e.periods)==null?void 0:t.length)===1&&!e.periods[0].close&&e.periods[0].open.day===0&&e.periods[0].open.hour===0&&e.periods[0].open.minute===0}function qy(e){const t=new Date(e);return t.setUTCDate(t.getUTCDate()-t.getUTCDay()),{year:t.getUTCFullYear(),month:t.getUTCMonth(),day:t.getUTCDate()}}function Jf(e,t){const{year:n,month:r,day:i}=qy(e);let o=Date.UTC(n,r,i,0,-t);const s=e.valueOf()-o;return s<0?o-=el:s>=el&&(o+=el),new Date(o)}function Vo(e,t){const n=new Date(t);return n.setDate(n.getDate()+e.day),n.setHours(n.getHours()+e.hour),n.setMinutes(n.getMinutes()+e.minute),n}function eh(e,t,n=new Date){const r=Jf(n,t);for(const i of e.periods){const o={period:i,openDate:Vo(i.open,r),closeDate:i.close?Vo(i.close,r):void 0};if(!o.closeDate||(o.closeDate<o.openDate&&(o.openDate>n?o.openDate.setDate(o.openDate.getDate()-7):o.closeDate.setDate(o.closeDate.getDate()+7)),n>=o.openDate&&n<o.closeDate))return o}return{}}var gt;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.ALWAYS_OPEN=1]="ALWAYS_OPEN",e[e.NOT_OPEN_NOW=2]="NOT_OPEN_NOW",e[e.WILL_CLOSE=3]="WILL_CLOSE"})(gt||(gt={}));function Xy(e,t=new Date){if(!e.regularOpeningHours||e.utcOffsetMinutes==null)return{status:gt.UNKNOWN};if(du(e.regularOpeningHours))return{status:gt.ALWAYS_OPEN};const n=eh(e.regularOpeningHours,e.utcOffsetMinutes,t);if(n.period){if(!n.closeDate)return{status:gt.ALWAYS_OPEN}}else return{status:gt.NOT_OPEN_NOW};return{status:gt.WILL_CLOSE,closeDate:n.closeDate,closePoint:n.period.close}}var rt;(function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NEVER_OPEN=1]="NEVER_OPEN",e[e.ALREADY_OPEN=2]="ALREADY_OPEN",e[e.WILL_OPEN=3]="WILL_OPEN"})(rt||(rt={}));function Zy(e,t=new Date){if(!e.regularOpeningHours||e.utcOffsetMinutes==null)return{status:rt.UNKNOWN};if(du(e.regularOpeningHours))return{status:rt.ALREADY_OPEN};const n=Jf(t,e.utcOffsetMinutes),r={status:rt.NEVER_OPEN};let i=1/0;for(const o of e.regularOpeningHours.periods){const s=Vo(o.open,n);if(!o.close)return{status:rt.ALREADY_OPEN};const l=Vo(o.close,n);if(l>=s&&t>=s&&t<l)return{status:rt.ALREADY_OPEN};if(l<s&&!(t>=l&&t<s))return{status:rt.ALREADY_OPEN};s<t&&s.setDate(s.getDate()+7);const a=s.valueOf()-t.valueOf();a<i&&(i=a,r.status=rt.WILL_OPEN,r.openPoint=o.open,r.openDate=s)}return r}function Jy(e,t=new Date){if(!e.regularOpeningHours||e.utcOffsetMinutes==null)return;if(du(e.regularOpeningHours))return!0;const{period:n}=eh(e.regularOpeningHours,e.utcOffsetMinutes,t);return!!n}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function th(e){return!e.hasOwnProperty("id")}function na(e){var t,n,r,i;return ev(e)?{location:(n=(t=e.location)==null?void 0:t.toJSON())!=null?n:void 0,placeId:e.id,query:(i=(r=e.formattedAddress)!=null?r:e.displayName)!=null?i:void 0}:tv(e)?{location:e.toJSON()}:{location:e}}function ev(e){return e.hasOwnProperty("id")}function tv(e){return typeof e.lat=="function"}const nh=Object.freeze({FREE:0,INEXPENSIVE:1,MODERATE:2,EXPENSIVE:3,VERY_EXPENSIVE:4}),nv=Object.freeze(Object.fromEntries(Object.entries(nh).map(e=>e.reverse())));function rv(e){var t;return typeof e=="number"?e:(t=nh[e])!=null?t:null}function iv(e){var t;return typeof e!="number"?e:(t=nv[e])!=null?t:null}function rh(e,t){return t?S`<a href=${t} target="_blank">${e}</a>`:S`<span>${e}</span>`}async function vi(e,t){var o;const n=await G.importLibrary("places",t),r=new n.Place({id:(o=e.place_id)!=null?o:"PLACE_ID_MISSING"});let i=Wc(e);return new Proxy(r,{get(s,l,a){if(l==="fetchFields")return async d=>{const f=d.fields.filter(m=>i[m]===void 0);try{return await s.fetchFields({...d,fields:f})}catch(m){if(Wo(m,"fetchFields()")){const y=oh(f);if(!y.length)return{place:r};const w=await sv(n,r.id,y);return i={...Wc(w),...i},{place:r}}throw m}};if(l==="isOpen")return async d=>{try{return await Reflect.get(s,l,a).apply(a,[d])}catch(p){if(Wo(p,"isOpen()"))return Jy(a,d);throw p}};const u=i[l];return u===void 0?Reflect.get(s,l,a):u}})}function ih(e){return!!(e.businessStatus&&e.regularOpeningHours&&e.utcOffsetMinutes!=null)}function Wc(e){var n,r,i;const t={};if(e.address_components!==void 0&&(t.addressComponents=e.address_components.map(o=>({longText:o.long_name,shortText:o.short_name,types:o.types}))),e.adr_address!==void 0&&(t.adrFormatAddress=e.adr_address),e.business_status!==void 0&&(t.businessStatus=e.business_status),e.formatted_address!==void 0&&(t.formattedAddress=e.formatted_address),e.formatted_phone_number!==void 0&&(t.nationalPhoneNumber=e.formatted_phone_number),e.geometry!==void 0){const o=e.geometry;o.location&&(t.location=o.location),o.viewport&&(t.viewport=o.viewport)}if(e.html_attributions!==void 0&&(t.attributions=e.html_attributions.map(o=>{const{text:s,url:l}=jc(o);return{provider:s!=null?s:"",providerURI:l!=null?l:null}})),e.icon_background_color!==void 0&&(t.iconBackgroundColor=e.icon_background_color),e.icon_mask_base_uri!==void 0&&(t.svgIconMaskURI=e.icon_mask_base_uri),e.international_phone_number!==void 0&&(t.internationalPhoneNumber=e.international_phone_number),e.name!==void 0&&(t.displayName=e.name),e.opening_hours!==void 0){const o=(n=e.opening_hours.periods)==null?void 0:n.map(s=>({open:Gc(s.open),close:s.close?Gc(s.close):null}));t.regularOpeningHours={periods:o!=null?o:[],weekdayDescriptions:(r=e.opening_hours.weekday_text)!=null?r:[]}}return e.photos!==void 0&&(t.photos=e.photos.map(o=>({authorAttributions:o.html_attributions.map(l=>{const{text:a,url:u}=jc(l);return{displayName:a!=null?a:"",photoURI:"",uri:u||""}}),getURI:o.getUrl,heightPx:o.height,widthPx:o.width}))),e.place_id!==void 0&&(t.id=e.place_id),e.plus_code!==void 0&&(t.plusCode={compoundCode:(i=e.plus_code.compound_code)!=null?i:null,globalCode:e.plus_code.global_code}),e.price_level!==void 0&&(t.priceLevel=iv(e.price_level)),e.rating!==void 0&&(t.rating=e.rating),e.reviews!==void 0&&(t.reviews=e.reviews.map(o=>{var s;return{authorAttribution:{displayName:o.author_name,photoURI:o.profile_photo_url,uri:o.author_url||""},publishTime:new Date(o.time),rating:(s=o.rating)!=null?s:null,relativePublishTimeDescription:o.relative_time_description,text:o.text,textLanguageCode:o.language}})),e.types!==void 0&&(t.types=e.types),e.url!==void 0&&(t.googleMapsURI=e.url),e.user_ratings_total!==void 0&&(t.userRatingCount=e.user_ratings_total),e.utc_offset_minutes!==void 0&&(t.utcOffsetMinutes=e.utc_offset_minutes),e.website!==void 0&&(t.websiteURI=e.website),t}function Gc({day:e,hours:t,minutes:n}){return{day:e,hour:t,minute:n}}const ov={addressComponents:"address_components",adrFormatAddress:"adr_address",businessStatus:"business_status",formattedAddress:"formatted_address",nationalPhoneNumber:"formatted_phone_number",location:"geometry",viewport:"geometry",iconBackgroundColor:"icon_background_color",svgIconMaskURI:"icon_mask_base_uri",internationalPhoneNumber:"international_phone_number",displayName:"name",regularOpeningHours:"opening_hours",photos:"photos",plusCode:"plus_code",priceLevel:"price_level",rating:"rating",reviews:"reviews",types:"types",googleMapsURI:"url",userRatingCount:"user_ratings_total",utcOffsetMinutes:"utc_offset_minutes",websiteURI:"website",id:"place_id"};function oh(e){const t=[];for(const n of e){const r=ov[n];r&&t.push(r)}return t}function Wo(e,t){return e instanceof Error?e.message.startsWith(`Place.prototype.${t} is not available`)||e.message.startsWith(`google.maps.places.Place.${t} is not available`):!1}async function sv(e,t,n){const r=new e.PlacesService(document.createElement("div"));return new Promise((i,o)=>{r.getDetails({placeId:t,fields:n},(s,l)=>{s&&l==="OK"?i(s):o(l)})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pu=class extends Event{constructor(t,n,r){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=n,this.subscribe=r!=null?r:!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Yc=class{constructor(t,n,r,i){var o;if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,l)=>{this.unsubscribe&&(this.unsubscribe!==l&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,l)),this.unsubscribe=l},this.host=t,n.context!==void 0){const s=n;this.context=s.context,this.callback=s.callback,this.subscribe=(o=s.subscribe)!=null?o:!1}else this.context=n,this.callback=r,this.subscribe=i!=null?i:!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new pu(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let lv=class{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,n=!1){const r=n||!Object.is(t,this.o);this.o=t,r&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[n,{disposer:r}]of this.subscriptions)n(this.o,r)},t!==void 0&&(this.value=t)}addCallback(t,n,r){if(!r)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:n});const{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let av=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}};class ra extends lv{constructor(t,n,r){var i,o;super(n.context!==void 0?n.initialValue:r),this.onContextRequest=s=>{const l=s.composedPath()[0];s.context===this.context&&l!==this.host&&(s.stopPropagation(),this.addCallback(s.callback,l,s.subscribe))},this.onProviderRequest=s=>{const l=s.composedPath()[0];if(s.context!==this.context||l===this.host)return;const a=new Set;for(const[u,{consumerHost:d}]of this.subscriptions)a.has(u)||(a.add(u),d.dispatchEvent(new pu(this.context,u,!0)));s.stopPropagation()},this.host=t,n.context!==void 0?this.context=n.context:this.context=n,this.attachListeners(),(o=(i=this.host).addController)==null||o.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new av(this.context))}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let uv=class{constructor(){this.pendingContextRequests=new Map,this.onContextProvider=t=>{const n=this.pendingContextRequests.get(t.context);if(n===void 0)return;this.pendingContextRequests.delete(t.context);const{requests:r}=n;for(const{elementRef:i,callbackRef:o}of r){const s=i.deref(),l=o.deref();s===void 0||l===void 0||s.dispatchEvent(new pu(t.context,l,!0))}},this.onContextRequest=t=>{if(t.subscribe!==!0)return;const n=t.composedPath()[0],r=t.callback;let i=this.pendingContextRequests.get(t.context);i===void 0&&this.pendingContextRequests.set(t.context,i={callbacks:new WeakMap,requests:[]});let o=i.callbacks.get(n);o===void 0&&i.callbacks.set(n,o=new WeakSet),o.has(r)||(o.add(r),i.requests.push({elementRef:new WeakRef(n),callbackRef:new WeakRef(r)}))}}attach(t){t.addEventListener("context-request",this.onContextRequest),t.addEventListener("context-provider",this.onContextProvider)}detach(t){t.removeEventListener("context-request",this.onContextRequest),t.removeEventListener("context-provider",this.onContextProvider)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function sh({context:e}){return(t,n)=>{const r=new WeakMap;if(typeof n=="object")return n.addInitializer(function(){r.set(this,new ra(this,{context:e}))}),{get(){return t.get.call(this)},set(i){var o;return(o=r.get(this))==null||o.setValue(i),t.set.call(this,i)},init(i){var o;return(o=r.get(this))==null||o.setValue(i),i}};{t.constructor.addInitializer(s=>{r.set(s,new ra(s,{context:e}))});const i=Object.getOwnPropertyDescriptor(t,n);let o;if(i===void 0){const s=new WeakMap;o={get:function(){return s.get(this)},set:function(l){r.get(this).setValue(l),s.set(this,l)},configurable:!0,enumerable:!0}}else{const s=i.set;o={...i,set:function(l){r.get(this).setValue(l),s==null||s.call(this,l)}}}return void Object.defineProperty(t,n,o)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ys({context:e,subscribe:t}){return(n,r)=>{typeof r=="object"?r.addInitializer(function(){new Yc(this,{context:e,callback:i=>{this[r.name]=i},subscribe:t})}):n.constructor.addInitializer(i=>{new Yc(i,{context:e,callback:o=>{i[r]=o},subscribe:t})})}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Kc=!1;function cv(){if(Kc)return;new uv().attach(document.body),Kc=!0}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */cv();const fu=Symbol("place"),lh=Symbol("place-consumer-registration");class xe extends Oe{constructor(){super(...arguments),this.noData=!0}get place(){return this.placeInternal}set place(t){this.placeInternal=t,this.updatePlaceV2(t)}willUpdate(t){var r;t.has("contextPlace")&&!this.placeV2&&this.placeChangedCallback(this.contextPlace,t.get("contextPlace"));const n=this.getPlace();this.noData=!(n&&this.placeHasData(n)),t.has("contextRegistration")&&((r=this.contextRegistration)==null||r.registerPlaceConsumer(this))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.contextRegistration)==null||t.unregisterPlaceConsumer(this)}placeChangedCallback(t,n){}placeHasData(t){return!0}getPlace(){var t;return(t=this.placeV2)!=null?t:this.contextPlace}async updatePlaceV2(t){const n=this.getPlace();!t||!th(t)?this.placeV2=t:this.placeV2=await vi(t,this),this.placeChangedCallback(this.placeV2,n)}}v([ys({context:lh,subscribe:!0}),C({attribute:!1}),_("design:type",Object)],xe.prototype,"contextRegistration",void 0);v([ys({context:fu,subscribe:!0}),C({attribute:!1}),_("design:type",Object)],xe.prototype,"contextPlace",void 0);v([C({type:Boolean,attribute:"no-data",reflect:!0}),_("design:type",Object)],xe.prototype,"noData",void 0);v([fe(),_("design:type",Object)],xe.prototype,"placeV2",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Ln=class extends xe{render(){const t=this.getPlace();if(!(t&&this.placeHasData(t)))return S``;const n=t.attributions||[];return S`${ta(Rn(n,this.makeAttributionHTML),S`<span class="sep">, </span>`)}`}getRequiredFields(){return["attributions"]}placeHasData(t){return!!(t.attributions&&t.attributions.length>0)}makeAttributionHTML(t){return rh(t.provider,t.providerURI)}};Ln.styles=j`
    a {
      color: inherit;
      text-decoration: inherit;
    }

    a:hover {
      text-decoration: underline;
    }
  `;Ln=v([K("gmpx-place-attribution")],Ln);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hu=(e,t,n)=>{for(const r of t)if(r[0]===e)return(0,r[1])();return n==null?void 0:n()};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class vs extends Event{constructor(t){super("gmpx-requesterror",{bubbles:!1,composed:!1}),this.error=t}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ni={fromAttribute(e){if(e===null)return;const[t,n]=e.split(",").map(r=>Number(r.trim()));return{lat:t||0,lng:n||0}},toAttribute(e){return e?`${e.lat},${e.lng}`:null}},ah={fromAttribute(e){var t;return(t=e==null?void 0:e.split(/\s+/).filter(n=>n!==""))!=null?t:void 0},toAttribute(e){var t;return(t=e==null?void 0:e.join(" "))!=null?t:null}};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class uh{constructor(t){this.capacity=t,this.map=new Map}has(t){return this.reinsertIfPresent(t),this.map.has(t)}get(t){return this.reinsertIfPresent(t),this.map.get(t)}set(t,n){if(this.delete(t),this.map.set(t,n),this.map.size>this.capacity){const[r]=this.map.keys();this.map.delete(r)}}delete(t){this.map.has(t)&&this.map.delete(t)}reinsertIfPresent(t){if(this.map.has(t)){const n=this.map.get(t);this.map.delete(t),this.map.set(t,n)}}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function dv(e,t){const{Place:n}=await G.importLibrary("places",t);return new n({id:e})}class pv{constructor(t,n){this.consumer=n,this.cache=new uh(t)}getPlace(t){const n=this.cache.get(t);if(n)return n;const r=dv(t,this.consumer);return this.cache.set(t,r),r}updatePlace(t){this.cache.set(t.id,Promise.resolve(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Fn,et;(function(e){e.EMPTY="EMPTY",e.LOADING="LOADING",e.LOADED="LOADED",e.ERROR="ERROR"})(et||(et={}));const fv=100;let _t=Fn=class extends Oe{constructor(){super(...arguments),this.autoFetchDisabled=!1,this.contextRegistration={registerPlaceConsumer:t=>void this.registerPlaceConsumer(t),unregisterPlaceConsumer:t=>void this.unregisterPlaceConsumer(t)},this.loadingState=et.EMPTY,this.slotValidator=new ms(this,this.logger,["","initial-loading","error"]),this.placeConsumers=new Set,this.placeAttributions=new Set,this.placeContextProvider=new ra(this,{context:fu})}get contextPlace(){return this.placeContextProvider.value}set contextPlace(t){this.placeContextProvider.setValue(t,!0)}render(){return hu(this.loadingState,[[et.EMPTY,()=>S``],[et.LOADING,()=>S`<slot name="initial-loading"></slot>`],[et.LOADED,()=>S`<slot></slot>`],[et.ERROR,()=>S`<slot name="error"></slot>`]])}async updated(t){if(t.has("place"))try{await this.updatePlace()}catch(n){this.handleError(n)}}async updatePlace(){var t;if(this.loadingState=et.LOADING,this.place)typeof this.place=="string"?this.contextPlace=await Fn.placeLookup.getPlace(this.place):th(this.place)?(this.contextPlace=await vi(this.place,this),Fn.placeLookup.updatePlace(this.contextPlace)):(this.contextPlace=this.place,Fn.placeLookup.updatePlace(this.contextPlace));else{this.contextPlace=void 0,this.loadingState=et.EMPTY;return}if(typeof this.place=="string"||!this.autoFetchDisabled){let n;(t=this.fields)!=null&&t.length?n=this.fields:(await 0,n=this.getConsumerFields());try{await this.contextPlace.fetchFields({fields:n})}catch(r){if(Wo(r,"fetchFields()"))this.contextPlace=await vi({place_id:this.contextPlace.id}),Fn.placeLookup.updatePlace(this.contextPlace),await this.contextPlace.fetchFields({fields:n});else throw r}for(const r of this.placeConsumers)r.requestUpdate("contextPlace",r.contextPlace,{hasChanged:()=>!0})}this.appendAttributionIfAbsent(),this.loadingState=et.LOADED}registerPlaceConsumer(t){this.placeConsumers.add(t),t instanceof Ln&&this.placeAttributions.add(t)}unregisterPlaceConsumer(t){this.placeConsumers.delete(t),t instanceof Ln&&this.placeAttributions.delete(t)}getConsumerFields(){const t=new Set;for(const n of this.placeConsumers)for(const r of n.getRequiredFields())t.add(r);return Array.from(t.values())}appendAttributionIfAbsent(){this.placeAttributions.size===0&&this.appendChild(new Ln)}handleError(t){this.loadingState=et.ERROR;const n=new vs(t);this.dispatchEvent(n)}};_t.placeLookup=new pv(fv);v([C({type:Boolean,attribute:"auto-fetch-disabled",reflect:!0}),_("design:type",Object)],_t.prototype,"autoFetchDisabled",void 0);v([C({converter:ah,reflect:!0}),_("design:type",Array)],_t.prototype,"fields",void 0);v([C({type:String,hasChanged:()=>!0}),_("design:type",Object)],_t.prototype,"place",void 0);v([sh({context:lh}),C({attribute:!1}),_("design:type",Object)],_t.prototype,"contextRegistration",void 0);v([fe(),_("design:type",Object)],_t.prototype,"loadingState",void 0);_t=Fn=v([K("gmpx-place-data-provider")],_t);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function hv(e,t){let n="https://www.google.com/maps/dir/?api=1";return e&&(n=Qc(n,"origin",e)),t&&(n=Qc(n,"destination",t)),n}function Qc(e,t,n){return n.placeId&&(e+=`&${t}_place_id=${n.placeId}`),n.query?e+=`&${t}=${encodeURIComponent(n.query)}`:n.location?e+=`&${t}=${n.location.lat},${n.location.lng}`:n.placeId&&(e+=`&${t}=${encodeURIComponent("Selected Place")}`),e}let bt=class extends xe{constructor(){super(...arguments),this.ariaLabel=null,this.condensed=!1,this.reversed=!1,this.variant="outlined"}render(){return S`
      <gmpx-icon-button
        .ariaLabel=${this.ariaLabel}
        .condensed=${this.condensed}
        .href=${this.getHref()}
        icon="directions"
        .variant=${this.variant}
      >
        <slot></slot>
      </gmpx-icon-button>
    `}updated(){this.role=this.ariaLabel!=null?"none":null}getRequiredFields(){return["displayName","formattedAddress","location"]}placeHasData(t){return!0}getHref(){const t=this.getPlace(),n=this.reversed?t:this.origin,r=this.reversed?this.origin:t;return hv(n?na(n):void 0,r?na(r):void 0)}};bt.shadowRootOptions={...xe.shadowRootOptions,delegatesFocus:!0};v([C({attribute:"aria-label",reflect:!0,type:String}),_("design:type",Object)],bt.prototype,"ariaLabel",void 0);v([C({reflect:!0,type:Boolean}),_("design:type",Object)],bt.prototype,"condensed",void 0);v([C({attribute:!1}),_("design:type",Object)],bt.prototype,"origin",void 0);v([C({reflect:!0,type:Boolean}),_("design:type",Object)],bt.prototype,"reversed",void 0);v([C({reflect:!0,type:String}),_("design:type",String)],bt.prototype,"variant",void 0);bt=v([K("gmpx-place-directions-button")],bt);/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ch{start(t,n){this.stop(),this.updateTimeout(t,n)}stop(){this.timeoutId!=null&&(clearTimeout(this.timeoutId),this.timeoutId=void 0)}updateTimeout(t,n){this.timeoutId=setTimeout(()=>{t(),this.updateTimeout(t,n)},n)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const gv={"isOpen()":60*1e3};function Xi(e){return e==="opening_hours.isOpen()"?"isOpen()":e}async function mv(e){if(e&&ih(e))return await e.isOpen()}function dh(e,t){var n;switch(t){case"hasCurbsidePickup":return e.hasCurbsidePickup;case"hasDelivery":return e.hasDelivery;case"hasDineIn":return e.hasDineIn;case"hasTakeout":return e.hasTakeout;case"hasWheelchairAccessibleEntrance":return(n=e.accessibilityOptions)==null?void 0:n.hasWheelchairAccessibleEntrance;case"isReservable":return e.isReservable;case"servesBeer":return e.servesBeer;case"servesBreakfast":return e.servesBreakfast;case"servesBrunch":return e.servesBrunch;case"servesDinner":return e.servesDinner;case"servesLunch":return e.servesLunch;case"servesVegetarianFood":return e.servesVegetarianFood;case"servesWine":return e.servesWine;default:return}}function yv(e){return e==="isOpen()"}async function vv(e,t){return t==="isOpen()"?mv(e):null}function _v(e,t){var n;return(n=dh(e,t))!=null?n:null}let _i=class extends xe{constructor(){super(...arguments),this.poll=new ch}render(){return S`${hu(this.valueToRender,[[!0,()=>S`<slot name="true"></slot>`],[!1,()=>S`<slot name="false"></slot>`]],()=>S``)}`}getRequiredFields(){if(!this.field)return[];const t=Xi(this.field);switch(t){case"isOpen()":return["businessStatus","regularOpeningHours","utcOffsetMinutes"];case"hasWheelchairAccessibleEntrance":return["accessibilityOptions"];default:return[t]}}placeHasData(t){if(!this.field)return!1;const n=Xi(this.field);return n==="isOpen()"?ih(t):dh(t,n)!=null}async getUpdateComplete(){const t=await super.getUpdateComplete();return this.asyncRenderComplete&&await this.asyncRenderComplete.promise,t}willUpdate(t){if(super.willUpdate(t),this.updateValueToRender(),t.has("field")&&(this.poll.stop(),this.field)){const n=gv[Xi(this.field)];n&&this.poll.start(()=>void this.requestUpdate(),n)}}disconnectedCallback(){super.disconnectedCallback(),this.poll.stop(),this.resetAsyncRenderPromise()}updateValueToRender(){const t=this.getPlace();if(this.resetAsyncRenderPromise(),!t||!this.field){this.valueToRender=void 0;return}const n=Xi(this.field);yv(n)?(this.asyncRenderComplete=new rn,vv(t,n).then(r=>{var i;this.valueToRender=r,(i=this.asyncRenderComplete)==null||i.resolve()})):this.valueToRender=_v(t,n)}resetAsyncRenderPromise(){var t;(t=this.asyncRenderComplete)==null||t.resolve(),this.asyncRenderComplete=void 0}};v([C({type:String,reflect:!0}),_("design:type",String)],_i.prototype,"field",void 0);v([fe(),_("design:type",Object)],_i.prototype,"valueToRender",void 0);_i=v([K("gmpx-place-field-boolean")],_i);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ia(e){switch(e){case"url":return"googleMapsURI";case"website":return"websiteURI";default:return e}}function qc(e,t){switch(ia(t)){case"googleMapsURI":return e.googleMapsURI;case"websiteURI":return e.websiteURI;default:return}}function wv(e){const t=e.match(/^(https?:\/\/)?(www\.)?([^\/\?]+)/);return t&&t.length>3?t[3]:e}let hr=class extends xe{constructor(){super(...arguments),this.hrefField="websiteURI",this.ariaLabel=null}render(){const t=this.getHref();return S`${ge(t,()=>{var n;return S`
      <a target="_blank" rel="noopener noreferrer" href=${t}
          aria-label=${(n=this.ariaLabel)!=null?n:U}>
        ${ge(this.hasContentForSlot(),()=>S`<slot></slot>`,()=>S`${this.getDefaultLinkText(t)}`)}
      </a>
    `})}`}updated(){this.role=this.ariaLabel!=null?"none":null}getRequiredFields(){return[ia(this.hrefField)]}placeHasData(t){return qc(t,this.hrefField)!=null}getHref(){var n;const t=this.getPlace();return t&&(n=qc(t,this.hrefField))!=null?n:null}hasContentForSlot(){var t;return!!((t=this.textContent)!=null&&t.trim()||this.children.length>0)}getDefaultLinkText(t){switch(ia(this.hrefField)){case"googleMapsURI":return"View on Google Maps";case"websiteURI":default:return wv(t)}}};hr.styles=j`
    :host(:hover) {
      text-decoration: underline;
    }

    a {
      color: inherit;
      text-decoration: inherit;
    }
  `;v([C({type:String,reflect:!0,attribute:"href-field"}),_("design:type",String)],hr.prototype,"hrefField",void 0);v([C({attribute:"aria-label",reflect:!0,type:String}),_("design:type",Object)],hr.prototype,"ariaLabel",void 0);hr=v([K("gmpx-place-field-link")],hr);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ev=Object.freeze({LOCATOR_BACK_BUTTON_CTA:"Back",LOCATOR_LIST_HEADER:"Find a location near you",LOCATOR_LIST_SUBHEADING:"All locations",LOCATOR_LIST_SUBHEADING_WITH_SEARCH:"Nearest locations",LOCATOR_SEARCH_LOCATION_MARKER_TITLE:"My location",LOCATOR_SEARCH_PROMPT:"Enter your address or zip code",LOCATOR_VIEW_DETAILS_CTA:"View details",PLACE_CLEAR_ARIA_LABEL:"Clear",PLACE_CLOSED:"Closed",PLACE_CLOSED_PERMANENTLY:"Permanently closed",PLACE_CLOSED_TEMPORARILY:"Temporarily closed",PLACE_CLOSES:e=>`Closes ${e}`,PLACE_HAS_DELIVERY:"Delivery",PLACE_HAS_DINE_IN:"Dine-in",PLACE_HAS_TAKEOUT:"Takeout",PLACE_NO_DELIVERY:"No Delivery",PLACE_NO_DINE_IN:"No Dine-in",PLACE_NO_TAKEOUT:"No Takeout",PLACE_OPEN_ALWAYS:"Open 24 hours",PLACE_OPEN_NOW:"Open now",PLACE_OPENING_HOURS_DEFAULT_SUMMARY:"See opening hours",PLACE_OPENING_HOURS_ARIA_LABEL:"Weekly opening hours",PLACE_OPENS:e=>`Opens ${e}`,PLACE_OPERATIONAL:"Operational",PLACE_PHOTO_ALT:e=>`Photo of ${e||"place"}`,PLACE_PHOTO_ATTRIBUTION_PREFIX:"Photo by",PLACE_PHOTO_BACK_ARIA_LABEL:"Back",PLACE_PHOTO_NEXT_ARIA_LABEL:"Next",PLACE_PHOTO_PREV_ARIA_LABEL:"Previous",PLACE_PHOTO_TILE_ARIA_LABEL:e=>`Open photo ${e}`,PLACE_RATING_ARIA_LABEL:e=>e===1?"1 star":`${e} stars`,PLACE_REVIEWS_AUTHOR_PHOTO_ALT:e=>`Photo of ${e||"reviewer"}`,PLACE_REVIEWS_MORE:"More reviews",PLACE_REVIEWS_SECTION_CAPTION:"Most relevant",PLACE_REVIEWS_SECTION_HEADING:"Reviews by Google users",PLACE_SEARCH_ARIA_LABEL:"Search",PLACE_TYPE:e=>e===""?"":(e[0].toUpperCase()+e.slice(1)).replace(/_/g," ")});/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class se{constructor(t){this.host=t,t.addController(this)}hostConnected(){se.connectedComponents.add(this.host)}hostDisconnected(){se.connectedComponents.delete(this.host)}getStringLiteral(t,...n){var i;const r=(i=se.translatedStringLiterals[t])!=null?i:Ev[t];return typeof r=="string"?r:r(...n)}static setStringLiterals(t){for(const n of Object.keys(t))se.translatedStringLiterals[n]=t[n];for(const n of se.connectedComponents)n.requestUpdate()}static buildLocalizer(t){const n=new se(t);return n.getStringLiteral.bind(n)}static reset(){se.connectedComponents.clear(),se.translatedStringLiterals={}}}se.connectedComponents=new Set;se.translatedStringLiterals={};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Sv=new Set(["accounting","airport","amusement_park","aquarium","art_gallery","atm","bakery","bank","bar","beauty_salon","bicycle_store","book_store","bowling_alley","bus_station","cafe","campground","car_dealer","car_rental","car_repair","car_wash","casino","cemetery","church","city_hall","clothing_store","convenience_store","courthouse","dentist","department_store","doctor","drugstore","electrician","electronics_store","embassy","fire_station","florist","funeral_home","furniture_store","gas_station","gym","hair_care","hardware_store","hindu_temple","home_goods_store","hospital","insurance_agency","jewelry_store","laundry","lawyer","library","light_rail_station","liquor_store","local_government_office","locksmith","lodging","meal_delivery","meal_takeaway","mosque","movie_rental","movie_theater","moving_company","museum","night_club","painter","park","parking","pet_store","pharmacy","physiotherapist","plumber","police","post_office","primary_school","real_estate_agency","restaurant","roofing_contractor","rv_park","school","secondary_school","shoe_store","shopping_mall","spa","stadium","storage","store","subway_station","supermarket","synagogue","taxi_stand","tourist_attraction","train_station","transit_station","travel_agency","university","veterinary_care","zoo"]);function ph(e){switch(e){case"business_status":return"businessStatus";case"name":return"displayName";case"formatted_address":return"formattedAddress";case"place_id":return"id";case"international_phone_number":return"internationalPhoneNumber";case"geometry.location":return"location";case"geometry.location.lat":return"location.lat";case"geometry.location.lng":return"location.lng";case"formatted_phone_number":return"nationalPhoneNumber";case"plus_code.compound_code":return"plusCode.compoundCode";case"plus_code.global_code":return"plusCode.globalCode";case"rating":return"rating";case"user_ratings_total":return"userRatingCount";default:return e}}function xv(e){return ph(e).split(".")[0]}let Go=class extends xe{constructor(){super(...arguments),this.getMsg=se.buildLocalizer(this)}render(){return S`<span>${this.getDisplayText()}</span>`}getRequiredFields(){return this.field?[xv(this.field)]:[]}placeHasData(t){return!!(this.field&&this.getFieldValue(t,this.field)!=null)}getDisplayText(){var n;const t=this.getPlace();return!t||!this.field?"":(n=this.getFieldValue(t,this.field))!=null?n:""}getFieldValue(t,n){var r,i,o,s,l,a,u;switch(ph(n)){case"businessStatus":return this.renderBusinessStatus(t.businessStatus);case"displayName":return t.displayName;case"formattedAddress":return t.formattedAddress;case"id":return t.id;case"internationalPhoneNumber":return t.internationalPhoneNumber;case"location":return(r=t.location)==null?void 0:r.toString();case"location.lat":return(i=t.location)==null?void 0:i.lat().toString();case"location.lng":return(o=t.location)==null?void 0:o.lng().toString();case"nationalPhoneNumber":return t.nationalPhoneNumber;case"plusCode.compoundCode":return(s=t.plusCode)==null?void 0:s.compoundCode;case"plusCode.globalCode":return(l=t.plusCode)==null?void 0:l.globalCode;case"rating":return(a=t.rating)==null?void 0:a.toString();case"types":return t.types&&this.getDisplayType(t.types);case"userRatingCount":return(u=t.userRatingCount)==null?void 0:u.toString();default:return}}renderBusinessStatus(t){if(!t)return t;switch(t){case"CLOSED_PERMANENTLY":return this.getMsg("PLACE_CLOSED_PERMANENTLY");case"CLOSED_TEMPORARILY":return this.getMsg("PLACE_CLOSED_TEMPORARILY");case"OPERATIONAL":return this.getMsg("PLACE_OPERATIONAL");default:return}}getDisplayType(t){for(const n of t)if(Sv.has(n))return this.getMsg("PLACE_TYPE",n);return null}};v([C({type:String,reflect:!0}),_("design:type",String)],Go.prototype,"field",void 0);Go=v([K("gmpx-place-field-text")],Go);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Cv=60*1e3;let gr=class extends xe{constructor(){super(...arguments),this.summaryOnly=!1,this.expanded=!1,this.poll=new ch,this.fontLoader=new un(this,[ve.MATERIAL_SYMBOLS_OUTLINED]),this.getMsg=se.buildLocalizer(this)}disconnectedCallback(){super.disconnectedCallback(),this.poll.stop()}willUpdate(t){super.willUpdate(t),this.poll.stop(),this.getPlace()&&this.poll.start(()=>void this.requestUpdate(),Cv)}render(){const t=this.getPlace();if(!t)return U;if(!t.regularOpeningHours)return t.businessStatus==="OPERATIONAL"?U:S`
        <div class="closed">
          <gmpx-place-field-text field="businessStatus" .place=${t}>
          </gmpx-place-field-text>
        </div>
      `;const{weekdayDescriptions:n}=t.regularOpeningHours;let r;return t.utcOffsetMinutes==null?r=this.summaryOnly?S``:S`${this.getMsg("PLACE_OPENING_HOURS_DEFAULT_SUMMARY")}`:r=S`
        <gmpx-place-field-boolean field="isOpen()" .place=${t}>
          <div slot="true">${this.getOpenSummaryContent(t)}</div>
          <div slot="false">${this.getClosedSummaryContent(t)}</div>
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
    `}getRequiredFields(){return["businessStatus","regularOpeningHours","utcOffsetMinutes"]}placeHasData(t){return t.businessStatus==="OPERATIONAL"&&!t.regularOpeningHours?!1:!!(t.businessStatus||t.regularOpeningHours)}getOpenSummaryContent(t){const{status:n,closePoint:r,closeDate:i}=Xy(t),o=S`<span class="open">${this.getMsg("PLACE_OPEN_NOW")}</span>`;return n===gt.ALWAYS_OPEN?S`<span class="open">${this.getMsg("PLACE_OPEN_ALWAYS")}</span>`:n===gt.WILL_CLOSE&&Zf(i)?S`
        ${o}
        ·
        <span>${this.getMsg("PLACE_CLOSES",Vc(r,i))}</span>
      `:(gt.NOT_OPEN_NOW,o)}getClosedSummaryContent(t){const{status:n,openPoint:r,openDate:i}=Zy(t);let o=S``;return n===rt.WILL_OPEN?o=S` · <span>${this.getMsg("PLACE_OPENS",Vc(r,i))}</span>`:rt.ALREADY_OPEN,S`
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
  `;v([C({attribute:"summary-only",reflect:!0,type:Boolean}),_("design:type",Object)],gr.prototype,"summaryOnly",void 0);v([fe(),_("design:type",Object)],gr.prototype,"expanded",void 0);gr=v([K("gmpx-place-opening-hours")],gr);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Xc=class extends Oe{connectedCallback(){super.connectedCallback(),this.observer=new MutationObserver(()=>{this.hidden=!!this.querySelector("[no-data]")}),this.observer.observe(this,{subtree:!0,attributeFilter:["no-data"]})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.observer)==null||t.disconnect()}render(){return S`<slot></slot>`}};Xc=v([K("gmpx-optional-data-container-internal")],Xc);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class fh{constructor(t,n){this.shouldRetry=n,this.requestCacheMap=new uh(t)}get(t){var n;return(n=this.requestCacheMap.get(this.serialize(t)))!=null?n:null}set(t,n){const r=this.serialize(t);this.requestCacheMap.set(r,n),n.catch(i=>{this.shouldRetry(i)&&this.requestCacheMap.delete(r)})}serialize(t){return JSON.stringify(t,(r,i)=>{if(i instanceof Object&&!(i instanceof Array)){const o=i,s={};for(const l of Object.keys(o).sort())s[l]=o[l];return s}else return i})}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Lv=100;function hh(){return new fh(Lv,e=>e.code==="OVER_QUERY_LIMIT"||e.code==="UNKNOWN_ERROR")}class it{constructor(t){this.host=t,this.host.addController(this)}hostUpdate(){}async route(t){let n=it.cache.get(t);n===null&&(n=this.getService().then(r=>r.route(t)),it.cache.set(t,n));try{return await n}catch(r){const i=new vs(r);return this.host.dispatchEvent(i),null}}async getService(){if(!it.service){const{DirectionsService:t}=await G.importLibrary("routes",this.host);it.service=new t}return it.service}static reset(){it.cache=hh(),it.service=void 0}}it.cache=hh();/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function kv(e){switch(e){case"bicycling":return"directions_bike";case"transit":return"directions_subway";case"walking":return"directions_walk";default:return"directions_car"}}function Zc(e){if(!e)return null;const{placeId:t,location:n,query:r}=na(e);return t?{placeId:t}:n?{location:n}:r?{query:r}:null}let mr=class extends xe{constructor(){super(...arguments),this.fontLoader=new un(this,[ve.MATERIAL_SYMBOLS_OUTLINED]),this.directionsController=new it(this),this.isFetchingDirectionsData=!1}willUpdate(t){super.willUpdate(t),(t.has("origin")||t.has("travelMode"))&&this.updateDirectionsData()}placeChangedCallback(t,n){(t==null?void 0:t.id)!==(n==null?void 0:n.id)&&this.updateDirectionsData()}render(){var r;const{distance:t,duration:n}=(r=this.directionsData)!=null?r:{};return this.isFetchingDirectionsData||!t?S``:this.travelMode&&n?S`
      <span class="icon material-symbols-outlined">
        ${kv(this.travelMode)}
      </span>
      <span>${n.text}</span>
    `:S`<span>${t.text}</span>`}getRequiredFields(){return[]}placeHasData(){return this.directionsData!=null}async updateDirectionsData(){var i,o,s;if(this.isFetchingDirectionsData)return;const t=this.getPlace(),n=Zc(this.origin),r=Zc(t);if(n&&r){this.isFetchingDirectionsData=!0;const l=await this.directionsController.route({origin:n,destination:r,travelMode:(o=(i=this.travelMode)==null?void 0:i.toUpperCase())!=null?o:"DRIVING"});this.directionsData=(s=l==null?void 0:l.routes[0])==null?void 0:s.legs[0],this.requestUpdate()}else this.directionsData=void 0;this.isFetchingDirectionsData=!1}};mr.styles=j`
    .icon {
      font-size: inherit;
      line-height: inherit;
      vertical-align: bottom;
    }
  `;v([C({attribute:"travel-mode",reflect:!0,type:String}),_("design:type",String)],mr.prototype,"travelMode",void 0);v([C({attribute:!1}),_("design:type",Object)],mr.prototype,"origin",void 0);v([fe(),_("design:type",Object)],mr.prototype,"directionsData",void 0);mr=v([K("gmpx-place-distance-label-internal")],mr);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pv=e=>e!=null?e:U;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class gh{get isKeyboardNavigating(){var t;return(t=this.isKeyboardNavigatingInternal)!=null?t:!1}constructor(t,n){this.host=t,this.changeCallback=n,this.mousedownEventListener=()=>{this.isKeyboardNavigatingInternal!==!1&&(this.isKeyboardNavigatingInternal=!1,this.changeCallback&&this.changeCallback(!1))},this.keydownEventListener=({key:r})=>{r!=="Tab"&&r!=="Enter"||this.isKeyboardNavigatingInternal!==!0&&(this.isKeyboardNavigatingInternal=!0,this.changeCallback&&this.changeCallback(!0))},this.host.addController(this)}hostConnected(){document.addEventListener("keydown",this.keydownEventListener),document.addEventListener("mousedown",this.mousedownEventListener)}hostDisconnected(){document.removeEventListener("keydown",this.keydownEventListener),document.removeEventListener("mousedown",this.mousedownEventListener)}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Jc=4800,Yo=1200,tl=j`calc(${Le} * 0.5)`;function Zi(e,t){const n=Math.ceil(e*window.devicePixelRatio);return Math.min(n,t)}function Av(e,t){const n=e.widthPx/e.heightPx,r=window.innerWidth/window.innerHeight,i=t.widthPx/t.heightPx,o=n>r?{maxHeight:Zi(window.innerHeight,Jc)}:{maxWidth:Zi(window.innerWidth,Jc)},s=n>i?{maxHeight:Zi(t.heightPx,Yo)}:{maxWidth:Zi(t.widthPx,Yo)};return{uri:e.getURI(o),tileUri:e.getURI(s),attributions:e.authorAttributions}}function $v(e){e.key==="Escape"&&e.stopPropagation()}let wt=class extends xe{constructor(){super(...arguments),this.selectedIndex=0,this.focusController=new gh(this,t=>{var n,r;t?(n=this.containerElement)==null||n.classList.remove("hide-focus-ring"):(r=this.containerElement)==null||r.classList.add("hide-focus-ring")}),this.fontLoader=new un(this,[ve.GOOGLE_SANS_TEXT,ve.MATERIAL_SYMBOLS_OUTLINED]),this.keydownEventListener=({key:t})=>{var n;if((n=this.lightboxElement)!=null&&n.open)switch(t){case"ArrowLeft":this.isRTL()?this.navigateToNext():this.navigateToPrevious();break;case"ArrowRight":this.isRTL()?this.navigateToPrevious():this.navigateToNext();break}},this.getMsg=se.buildLocalizer(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.keydownEventListener)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.keydownEventListener)}render(){var l;const t=this.getFormattedPhotos(),n=t[this.selectedIndex],r=(l=this.getPlace())==null?void 0:l.displayName,i=S`
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
              ${Rn(n.attributions,({displayName:a,uri:u})=>S`${rh(a,u!=null?u:null)} `)}
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
          .disabled=${this.selectedIndex===t.length-1}
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
        style=${ea({"background-image":a&&`url(${a.tileUri})`})}
      ></button>
    `;return S`
      <div class="container">
        <div>${Rn(t.slice(0,this.maxTiles),s)}</div>
        <dialog class="lightbox" @keydown=${$v}>
          <div class="backdrop" @click=${this.closeLightbox}></div>
          <img
            alt=${this.getMsg("PLACE_PHOTO_ALT",r!=null?r:"")}
            class="photo"
            src=${Pv(n==null?void 0:n.uri)}
          />
          ${i}
          ${o}
        </dialog>
      </div>
    `}updated(){!this.tileSize&&this.firstTileElement&&(this.tileSize={widthPx:this.firstTileElement.clientWidth||Yo,heightPx:this.firstTileElement.clientHeight||Yo})}getRequiredFields(){return["displayName","photos"]}placeHasData(t){return!!(t.photos&&t.photos.length>0)}getFormattedPhotos(){const t=this.getPlace();return t===void 0||!this.tileSize?new Array(10).fill(null):t!=null&&t.photos?t.photos.map(n=>Av(n,this.tileSize)):[]}isRTL(){return getComputedStyle(this).direction.toLowerCase()==="rtl"}async openLightbox(t){var n;this.selectedIndex=t,await this.updateComplete,(n=this.lightboxElement)==null||n.showModal()}closeLightbox(){var t;(t=this.lightboxElement)==null||t.close()}navigateToPrevious(){this.selectedIndex>0&&this.selectedIndex--}navigateToNext(){var n,r;const t=(r=(n=this.getPlace())==null?void 0:n.photos)==null?void 0:r.length;t&&this.selectedIndex<t-1&&this.selectedIndex++}};wt.styles=j`
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
      padding: 0 ${tl};
    }

    .info-card .title {
      font: ${fr};
    }

    .info-card .caption {
      font : ${gs};
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
      padding: ${tl};
      margin: ${tl};
    }

    .nav-controls button[disabled] {
      opacity: 0.5;
    }
  `;v([C({attribute:"max-tiles",reflect:!0,type:Number}),_("design:type",Number)],wt.prototype,"maxTiles",void 0);v([fe(),_("design:type",Object)],wt.prototype,"selectedIndex",void 0);v([fe(),_("design:type",Object)],wt.prototype,"tileSize",void 0);v([ut(".container"),_("design:type",HTMLDivElement)],wt.prototype,"containerElement",void 0);v([ut(".lightbox"),_("design:type",HTMLDialogElement)],wt.prototype,"lightboxElement",void 0);v([ut('[part="tile"]'),_("design:type",HTMLButtonElement)],wt.prototype,"firstTileElement",void 0);wt=v([K("gmpx-place-photo-gallery")],wt);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ov(e,t){return e==null||e<0||t.length===0?"":Array.from(t)[0].repeat(e)}let Ko=class extends xe{constructor(){super(...arguments),this.symbol="$"}render(){return S`<span>${this.getDisplayPriceLevel()}</span>`}getRequiredFields(){return["priceLevel"]}placeHasData(t){return t.priceLevel!=null}getDisplayPriceLevel(){const t=this.getPlace();return(t==null?void 0:t.priceLevel)==null?"":Ov(rv(t.priceLevel),this.symbol)}};v([C({type:String,reflect:!0}),_("design:type",Object)],Ko.prototype,"symbol",void 0);Ko=v([K("gmpx-place-price-level")],Ko);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Nv=1,mh=5;var or;(function(e){e.FULL="full",e.HALF="half",e.EMPTY="empty"})(or||(or={}));function Iv(e){let t=Math.round(e*2);const n=[];for(;t>1;)n.push(or.FULL),t-=2;for(t>0&&n.push(or.HALF);n.length<mh;)n.push(or.EMPTY);return n}let wi=class extends xe{constructor(){super(...arguments),this.condensed=!1,this.getMsg=se.buildLocalizer(this)}render(){const t=this.getRating();return ge(t!==null,()=>{const n=this.condensed?[or.FULL]:Iv(t);return S`
        <span role="img" aria-label=${this.getMsg("PLACE_RATING_ARIA_LABEL",t.toFixed(1))}>
          <span aria-hidden="true">
            <span>${t.toFixed(1)}</span>
            ${Rn(n,r=>S`<span class="star-icon ${r}">&#x2605;</span>`)}
          </span>
        </span>
      `})}getRequiredFields(){return["rating"]}placeHasData(t){return t.rating!=null}getRating(){var n;const t=(n=this.getPlace())==null?void 0:n.rating;return!t||t<Nv||t>mh?null:t}};wi.styles=j`
    .star-icon.full {
      color: ${Zl};
    }
    .star-icon.empty {
      color: ${Jl};
    }
    .star-icon.half {
      color: ${Jl};
      position: relative;
    }
    .star-icon.half::before {
      color: ${Zl};
      content: '\\2605';
      overflow: hidden;
      position: absolute;
      width: 50%;
    }
  `;v([C({type:Boolean,reflect:!0}),_("design:type",Object)],wi.prototype,"condensed",void 0);wi=v([K("gmpx-place-rating")],wi);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Tv=5;var Qo;(function(e){e.FULL="full",e.EMPTY="empty"})(Qo||(Qo={}));function Rv(e){return Array.from({length:Tv}).fill(Qo.FULL,0,e).fill(Qo.EMPTY,e)}let Ei=class extends xe{constructor(){super(...arguments),this.fontLoader=new un(this,[ve.GOOGLE_SANS_TEXT]),this.getMsg=se.buildLocalizer(this)}render(){const t=this.getReviews();return ge(t&&t.length,()=>S`
      <div class="container">
        ${Rn(t,this.renderOneReview.bind(this))}
      </div>
    `)}getRequiredFields(){return["reviews"]}placeHasData(t){return!!(t.reviews&&t.reviews.length>0)}renderOneReview(t){var o,s,l;const n=t.authorAttribution,r=S`
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
        ${ge(t.rating,()=>S`
          <span role="img" aria-label=${this.getMsg("PLACE_RATING_ARIA_LABEL",t.rating)}>
            <span aria-hidden="true">
              ${Rn(Rv(t.rating),a=>S`<span class="star-icon ${a}">&#x2605;</span>`)}
            </span>
          </span>
        `)}
        <span class="relative-time">
          ${(l=t.relativePublishTimeDescription)!=null?l:""}
        </span>
      </div>
    `;return S`
      <div class="review">
        ${r}
        ${i}
        ${ge(t.text,()=>S`
          <div class="body">
            ${t.text}
          </div>
        `)}
      </div>
    `}getReviews(){var n;const t=(n=this.getPlace())==null?void 0:n.reviews;return t?this.maxReviews===void 0?t:this.maxReviews<1?null:t.slice(0,Math.floor(this.maxReviews)):null}};Ei.styles=j`
    .container {
      color: ${Pt};
      font: ${hs};
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
      color: ${Zl};
    }
    .star-icon.empty {
      color: ${Jl};
    }
    .relative-time {
      color: ${Bo};
      font: ${gs};
      margin-inline-start: ${R(12)};
    }
  `;v([C({type:Number,reflect:!0,attribute:"max-reviews"}),_("design:type",Number)],Ei.prototype,"maxReviews",void 0);Ei=v([K("gmpx-place-reviews")],Ei);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ed=Object.freeze(["x-small","small","medium","large","x-large"]),Mv=S`
  <svg width="56" height="20" fill="none" viewBox="0 0 56 20" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.76 14.26c-3.62 0-6.66-2.94-6.66-6.56 0-3.62 3.04-6.56 6.66-6.56 2 0 3.43 0.78 4.5 1.81l-1.27 1.25c-0.77-0.72-1.81-1.28-3.23-1.28-2.64 0-4.71 2.13-4.71 4.77 0 2.64 2.07 4.77 4.71 4.77 1.71 0 2.69-0.69 3.31-1.31 0.51-0.51 0.85-1.25 0.98-2.26h-4.05v-1.79h5.79c0.06 0.32 0.1 0.7 0.1 1.12 0 1.34-0.37 3.01-1.55 4.19-1.16 1.21-2.63 1.85-4.58 1.85z" fill="#4285F4"/>
    <path d="m22.24 10.03c0 2.43-1.91 4.23-4.24 4.23s-4.24-1.79-4.24-4.23c0-2.45 1.9-4.23 4.24-4.23s4.24 1.78 4.24 4.23zm-1.86 0c0-1.52-1.1-2.56-2.38-2.56s-2.38 1.04-2.38 2.56c0 1.5 1.1 2.56 2.38 2.56s2.38-1.05 2.38-2.56z" fill="#EA4335"/>
    <path d="m31.74 10.03c0 2.43-1.91 4.23-4.24 4.23s-4.24-1.79-4.24-4.23c0-2.45 1.9-4.23 4.24-4.23s4.24 1.78 4.24 4.23zm-1.86 0c0-1.52-1.1-2.56-2.38-2.56s-2.38 1.04-2.38 2.56c0 1.5 1.1 2.56 2.38 2.56s2.38-1.05 2.38-2.56z" fill="#FBBC05"/>
    <path d="m40.82 6.0601v7.59c0 3.12-1.84 4.4-4.02 4.4-2.05 0-3.28-1.38-3.75-2.5l1.62-0.67c0.29 0.69 0.99 1.5 2.13 1.5 1.39 0 2.26-0.86 2.26-2.48v-0.6h-0.06c-0.42 0.51-1.22 0.96-2.22 0.96-2.11 0-4.05-1.84-4.05-4.21 0-2.38 1.94-4.24 4.05-4.24 1.01 0 1.81 0.45 2.22 0.94h0.06v-0.69h1.76zm-1.63 3.99c0-1.49-0.99-2.58-2.26-2.58-1.28 0-2.35 1.09-2.35 2.58 0 1.47 1.07 2.54 2.35 2.54 1.27 0 2.26-1.07 2.26-2.54z" fill="#4285F4"/>
    <path d="M44.4 2V14H42.54V2H44.4Z" fill="#34A853"/>
    <path d="m52.1 11.42 1.44 0.96c-0.46 0.69-1.58 1.87-3.52 1.87-2.4 0-4.19-1.86-4.19-4.23 0-2.51 1.81-4.23 3.99-4.23 2.19 0 3.26 1.74 3.62 2.69l0.19 0.48-5.65 2.34c0.43 0.85 1.1 1.28 2.05 1.28s1.59-0.45 2.07-1.16zm-4.44-1.52 3.78-1.57c-0.21-0.53-0.83-0.9-1.57-0.9-0.94 0.01-2.25 0.84-2.21 2.47z" fill="#EA4335"/>
  </svg>
`;let qe=class extends Oe{constructor(){super(...arguments),this.autoFetchDisabled=!1,this.googleLogoAlreadyDisplayed=!1,this.size="x-large",this.travelMode="driving",this.fontLoader=new un(this,[ve.GOOGLE_SANS_TEXT,ve.MATERIAL_SYMBOLS_OUTLINED]),this.slotValidator=new ms(this,this.logger,["action"]),this.getMsg=se.buildLocalizer(this),this.renderHeaderSuffixContent=()=>hu(this.size,[["small",()=>S`<slot name="action"></slot>`],["medium",()=>S`
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
  `}willUpdate(t){t.has("size")&&!ed.includes(this.size)&&(this.logger.error(`Value "${this.size}" for attribute "size" is invalid. Acceptable choices are ${ed.map(n=>`"${n}"`).join(", ")}.`),this.size="x-large")}render(){var t;return S`
      <gmpx-place-data-provider
        .autoFetchDisabled=${this.autoFetchDisabled}
        .place=${(t=this.place)!=null?t:this.contextPlace}
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
              <div class="logo">${Mv}</div>
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
    `}getDisplayNameClass(){return this.size==="x-small"?"title-medium":this.size==="small"?"title-large":"headline"}forwardRequestError(t){t.target&&t.target===this.dataProviderElement&&console.error(t.error);const n=new vs(t.error);this.dispatchEvent(n)}};qe.styles=j`
    .headline {
      color: ${Pt};
      font: ${Vy};
    }

    .title-large {
      color: ${Pt};
      font: ${fo};
    }

    .title-medium {
      color: ${Pt};
      font: ${fr};
    }

    .body {
      color: ${Pt};
      font: ${hs};
    }

    .caption {
      color: ${Bo};
      font: ${gs};
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
      color: ${Bo};
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
  `;v([C({attribute:"auto-fetch-disabled",reflect:!0,type:Boolean}),_("design:type",Object)],qe.prototype,"autoFetchDisabled",void 0);v([ys({context:fu,subscribe:!0}),C({attribute:!1}),_("design:type",Object)],qe.prototype,"contextPlace",void 0);v([C({attribute:"google-logo-already-displayed",reflect:!0,type:Boolean}),_("design:type",Object)],qe.prototype,"googleLogoAlreadyDisplayed",void 0);v([C({type:String,hasChanged:()=>!0}),_("design:type",Object)],qe.prototype,"place",void 0);v([C({reflect:!0,type:String}),_("design:type",String)],qe.prototype,"size",void 0);v([C({attribute:"travel-mode",reflect:!0,type:String}),_("design:type",Object)],qe.prototype,"travelMode",void 0);v([C({attribute:!1}),_("design:type",Object)],qe.prototype,"travelOrigin",void 0);v([ut("gmpx-place-data-provider"),_("design:type",_t)],qe.prototype,"dataProviderElement",void 0);qe=v([K("gmpx-place-overview")],qe);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const bv=Object.freeze(["addressComponents","adrFormatAddress","businessStatus","displayName","formattedAddress","googleMapsURI","iconBackgroundColor","location","photos","id","plusCode","svgIconMaskURI","types","utcOffsetMinutes","viewport"]),Dv=Object.freeze(["address_component","adr_address","business_status","formatted_address","geometry","icon","icon_mask_base_uri","icon_background_color","name","photos","place_id","plus_code","type","url","utc_offset_minutes"]),nl=.75;let pe=class extends Oe{constructor(){super(...arguments),this.strictBounds=!1,this.disableSearch=!0,this.hideClearButton=!0,this.focusController=new gh(this),this.fontLoader=new un(this,[ve.GOOGLE_SANS_TEXT,ve.MATERIAL_SYMBOLS_OUTLINED]),this.autocomplete=new rn,this.getMsg=se.buildLocalizer(this)}get value(){return this.valueInternal}willUpdate(t){var n,r;t.has("disableSearch")&&this.disableSearch&&this.focusController.isKeyboardNavigating&&Ho()===this.searchButtonElement&&((n=this.clearButtonElement)==null||n.focus()),t.has("hideClearButton")&&this.hideClearButton&&this.focusController.isKeyboardNavigating&&Ho()===this.clearButtonElement&&((r=this.inputElement)==null||r.focus())}render(){var t;return S`
      <div class="container">
        <input
          @input=${this.handleInput}
          .placeholder=${(t=this.placeholder)!=null?t:""}
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
    `}firstUpdated(){this.initializeAutocomplete(this.inputElement)}async updated(t){if(this.autocomplete.value&&this.shouldUpdateAutocompleteOptions(t)){const n=await this.makeAutocompleteOptions();this.autocomplete.value.setOptions(n)}if(t.has("forMap")&&this.forMap){const n=await this.getMapById(this.forMap);n&&this.bindTo(n)}t.has("valueInternal")&&this.dispatchEvent(new Event("gmpx-placechange"))}async bindTo(t){(await this.autocomplete.promise).bindTo("bounds",t)}async getMapById(t){const r=this.getRootNode().getElementById(t);return(r==null?void 0:r.tagName)==="GMP-MAP"?(await customElements.whenDefined("gmp-map"),r.innerMap):null}shouldUpdateAutocompleteOptions(t){return t.has("country")||t.has("locationBias")||t.has("radius")||t.has("strictBounds")||t.has("type")}async makeAutocompleteOptions(){var s;const{country:t,locationBias:n,radius:r,strictBounds:i}=this;let o;if(n&&r){const{Circle:l}=await G.importLibrary("maps",this);o=(s=new l({center:n,radius:r}).getBounds())!=null?s:void 0}return{bounds:o,componentRestrictions:t?{country:t}:void 0,fields:[...Dv],strictBounds:i,types:this.type?[this.type]:[]}}async initializeAutocomplete(t){const{Autocomplete:n}=await G.importLibrary("places",this),r=new n(t,await this.makeAutocompleteOptions());r.addListener("place_changed",async()=>{const i=r.getPlace();i!=null&&i.place_id?(this.disableSearch=!0,this.valueInternal=await vi(i,this)):await this.handleSearch()}),this.autocomplete.resolve(r)}async search(t){var o,s;const{Place:n}=await G.importLibrary("places",this),r={textQuery:t,fields:["id"],locationBias:(o=this.autocomplete.value)==null?void 0:o.getBounds()};let i;try{({places:i}=await n.searchByText(r))}catch(l){if(Wo(l,"searchByText()")){const a={query:t,fields:["id"],locationBias:(s=this.autocomplete.value)==null?void 0:s.getBounds()},u=await this.searchWithFindPlaceFromQuery(a);i=[];for(const d of u){i.push(await vi(d,this));break}}else throw l}return i.length?(await i[0].fetchFields({fields:[...bv]}),i[0]):null}async searchWithFindPlaceFromQuery(t){const{PlacesService:n}=await G.importLibrary("places",this),r=new n(document.createElement("div"));return new Promise((i,o)=>{r.findPlaceFromQuery({...t,fields:oh(t.fields)},(s,l)=>{s&&l==="OK"?i(s):o(l)})})}handleClear(){this.inputElement.value="",this.valueInternal=void 0,this.disableSearch=!0,this.hideClearButton=!0}handleInput(t){t.target.value?(this.disableSearch=!1,this.hideClearButton=!1):this.handleClear()}async handleSearch(){var t;if(!(this.disableSearch||!((t=this.inputElement)!=null&&t.value))){this.disableSearch=!0;try{this.valueInternal=await this.search(this.inputElement.value),this.valueInternal&&this.updateInputTextFromPlace(this.valueInternal)}catch(n){const r=new vs(n);this.dispatchEvent(r)}}}updateInputTextFromPlace(t){var r,i;let n;t.formattedAddress&&t.displayName?t.formattedAddress.startsWith(t.displayName)?n=t.formattedAddress:n=`${t.displayName}, ${t.formattedAddress}`:n=(i=(r=t.displayName)!=null?r:t.formattedAddress)!=null?i:"",n&&(this.inputElement.value=n)}};pe.styles=j`
    :host(:not([hidden])) {
      /* Match the default display style of <input> element. */
      display: inline-block;
    }

    .container {
      color: ${Pt};
      font: ${hs};
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
      padding: calc(${Le} * ${nl})
               calc(${Le} * ${nl*2+1});
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
      padding: calc(${Le} * ${nl});
      pointer-events: auto;
    }

    button:enabled {
      cursor: pointer;
    }
  `;pe.shadowRootOptions={...Oe.shadowRootOptions,delegatesFocus:!0};v([C({converter:ah,reflect:!0}),_("design:type",Array)],pe.prototype,"country",void 0);v([C({attribute:"for-map",reflect:!0,type:String}),_("design:type",String)],pe.prototype,"forMap",void 0);v([C({attribute:"location-bias",converter:Ni,reflect:!0}),_("design:type",Object)],pe.prototype,"locationBias",void 0);v([C({reflect:!0,type:String}),_("design:type",String)],pe.prototype,"placeholder",void 0);v([C({reflect:!0,type:Number}),_("design:type",Number)],pe.prototype,"radius",void 0);v([C({attribute:"strict-bounds",reflect:!0,type:Boolean}),_("design:type",Object)],pe.prototype,"strictBounds",void 0);v([C({reflect:!0,type:String}),_("design:type",String)],pe.prototype,"type",void 0);v([fe(),_("design:type",Object)],pe.prototype,"valueInternal",void 0);v([fe(),_("design:type",Object)],pe.prototype,"disableSearch",void 0);v([fe(),_("design:type",Object)],pe.prototype,"hideClearButton",void 0);v([ut("input"),_("design:type",HTMLInputElement)],pe.prototype,"inputElement",void 0);v([ut(".clear-button"),_("design:type",HTMLButtonElement)],pe.prototype,"clearButtonElement",void 0);v([ut(".search-button"),_("design:type",HTMLButtonElement)],pe.prototype,"searchButtonElement",void 0);pe=v([K("gmpx-place-picker")],pe);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const yh=Symbol("route");class _s extends Oe{getRoute(){var t;return(t=this.route)!=null?t:this.contextRoute}}v([ys({context:yh,subscribe:!0}),C({attribute:!1}),_("design:type",Object)],_s.prototype,"contextRoute",void 0);v([C({attribute:!1}),_("design:type",Object)],_s.prototype,"route",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Xe=class extends Oe{constructor(){super(...arguments),this.travelMode="driving",this.directionsController=new it(this)}updated(){this.updateContextRoute()}async updateContextRoute(){if(this.route){this.contextRoute=this.route;return}const t=td(this.originAddress,this.originPlaceId,this.originLatLng),n=td(this.destinationAddress,this.destinationPlaceId,this.destinationLatLng);t===1&&n===1?this.contextRoute=await this.fetchRoute():(t>1&&n!==0&&this.logger.error("Too many origins. Only one of origin-lat-lng, origin-place-id, or origin-address may be specified."),n>1&&t!==0&&this.logger.error("Too many destinations. Only one of destination-lat-lng, destination-place-id, or destination-address may be specified."),this.contextRoute=void 0)}async fetchRoute(){var n;const t=await this.directionsController.route({origin:this.getOriginRequestObject(),destination:this.getDestinationRequestObject(),travelMode:(n=this.travelMode)==null?void 0:n.toUpperCase()});return t!=null&&t.routes?t.routes[0]:void 0}getOriginRequestObject(){return this.originLatLng?{location:this.originLatLng}:this.originPlaceId?{placeId:this.originPlaceId}:{query:this.originAddress}}getDestinationRequestObject(){return this.destinationLatLng?{location:this.destinationLatLng}:this.destinationPlaceId?{placeId:this.destinationPlaceId}:{query:this.destinationAddress}}};v([sh({context:yh}),C({attribute:!1,hasChanged:()=>!1}),_("design:type",Object)],Xe.prototype,"contextRoute",void 0);v([C({converter:Ni,attribute:"destination-lat-lng",reflect:!0}),_("design:type",Object)],Xe.prototype,"destinationLatLng",void 0);v([C({type:String,attribute:"destination-place-id",reflect:!0}),_("design:type",String)],Xe.prototype,"destinationPlaceId",void 0);v([C({type:String,attribute:"destination-address",reflect:!0}),_("design:type",String)],Xe.prototype,"destinationAddress",void 0);v([C({converter:Ni,attribute:"origin-lat-lng",reflect:!0}),_("design:type",Object)],Xe.prototype,"originLatLng",void 0);v([C({type:String,attribute:"origin-place-id",reflect:!0}),_("design:type",String)],Xe.prototype,"originPlaceId",void 0);v([C({type:String,attribute:"origin-address",reflect:!0}),_("design:type",String)],Xe.prototype,"originAddress",void 0);v([C({attribute:!1}),_("design:type",Object)],Xe.prototype,"route",void 0);v([C({type:String,attribute:"travel-mode",reflect:!0}),_("design:type",Object)],Xe.prototype,"travelMode",void 0);Xe=v([K("gmpx-route-data-provider")],Xe);function td(...e){return e.filter(t=>t).length}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Sn{constructor(t){this.map=t,this.managedComponents=new Set}static getInstanceForMap(t){return Sn.instances.has(t)||Sn.instances.set(t,new Sn(t)),Sn.instances.get(t)}async register(t){this.managedComponents.has(t)||(this.managedComponents.add(t),await this.updateViewport())}async unregister(t){this.managedComponents.has(t)&&(this.managedComponents.delete(t),await this.updateViewport())}async updateViewport(){const t=await this.getBoundsUnion();t&&this.map.innerMap.fitBounds(t)}async getBoundsUnion(){let t=null;for(const n of this.managedComponents){const r=n.getBounds();if(r){if(!t){const{LatLngBounds:i}=await G.importLibrary("core");t=new i}t.union(r)}}return t}}Sn.instances=new Map;/**
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
 */class vh{get map(){return this.deferredMap.value}get mapPromise(){return this.deferredMap.promise}constructor(t){this.host=t,this.deferredMap=new rn,t.addController(this)}async hostConnected(){const t=this.getContainingGmpMap();if(t){customElements.get("gmp-map")||await customElements.whenDefined("gmp-map");const n=t;this.host.isConnected&&(this.deferredMap.resolve(n.innerMap),this.viewportManager=Sn.getInstanceForMap(n))}}hostDisconnected(){this.deferredMap=new rn}getContainingGmpMap(){for(const t of qf(this.host))if(t instanceof Element&&t.localName==="gmp-map")return t;return null}}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let yr=class extends _s{get innerMarker(){return this.innerMarkerDeferred.value}get innerMarkerPromise(){return this.innerMarkerDeferred.promise}constructor(){super(),this.waypoint="origin",this.title="",this.innerMarkerDeferred=new rn,this.mapController=new vh(this),this.initMarker()}async initMarker(){const{AdvancedMarkerElement:t}=await G.importLibrary("marker",this),n=new t;this.innerMarkerDeferred.resolve(n)}async connectedCallback(){super.connectedCallback();const t=await this.mapController.mapPromise,n=await this.innerMarkerPromise;this.isConnected&&(n.map=t)}disconnectedCallback(){super.disconnectedCallback(),this.innerMarker&&(this.innerMarker.map=null)}render(){return S`<slot @slotchange=${this.onSlotChange}></slot>`}updated(t){(t.has("waypoint")||t.has("route")||t.has("contextRoute"))&&this.updatePosition(),t.has("title")&&this.updateTitle(),t.has("zIndex")&&this.updateZIndex()}async updatePosition(){var o;const t=await this.innerMarkerPromise,n=this.getRoute();if(!((o=n==null?void 0:n.legs)!=null&&o.length)){t.position=null;return}const r=n.legs[0],i=n.legs[n.legs.length-1];!this.waypoint||this.waypoint==="origin"?t.position=r.start_location:this.waypoint==="destination"?t.position=i.end_location:this.logger.error(`Unsupported waypoint "${this.waypoint}". Waypoint must be "origin" or "destination".`)}async updateTitle(){const t=await this.innerMarkerPromise;t.title=this.title}async updateZIndex(){const t=await this.innerMarkerPromise;t.zIndex=this.zIndex}async onSlotChange(t){const r=t.target.assignedElements()[0];if(r){const i=await this.innerMarkerPromise;i.content=r}}};v([C({type:String,reflect:!0}),_("design:type",String)],yr.prototype,"waypoint",void 0);v([C({type:String,reflect:!0}),_("design:type",Object)],yr.prototype,"title",void 0);v([C({type:Number,attribute:!1}),_("design:type",Number)],yr.prototype,"zIndex",void 0);yr=v([K("gmpx-route-marker"),_("design:paramtypes",[])],yr);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const zv=["strokeColor","strokeWeight","strokeOpacity","zIndex","invisible"];let Dt=class extends _s{get innerPolyline(){return this.innerPolylineDeferred.value}get innerPolylinePromise(){return this.innerPolylineDeferred.promise}constructor(){super(),this.fitInViewport=!1,this.invisible=!1,this.innerPolylineDeferred=new rn,this.mapController=new vh(this),this.initPolyline()}async initPolyline(){const{Polyline:t}=await G.importLibrary("maps",this),n=new t;this.innerPolylineDeferred.resolve(n)}async connectedCallback(){super.connectedCallback();const t=await this.innerPolylinePromise,n=await this.mapController.mapPromise;this.isConnected&&(t.setMap(n),await this.mapController.viewportManager.register(this))}disconnectedCallback(){var t,n;super.disconnectedCallback(),(t=this.mapController.viewportManager)==null||t.unregister(this),(n=this.innerPolyline)==null||n.setMap(null)}updated(t){var n;zv.some(r=>t.has(r))&&this.setInnerPolylineOptions(),(t.has("route")||t.has("contextRoute"))&&this.updatePath(),(t.has("fitInViewport")||this.fitInViewport&&(t.has("route")||t.has("contextRoute")))&&((n=this.mapController.viewportManager)==null||n.updateViewport())}getBounds(){var t,n;return this.fitInViewport&&(n=(t=this.getRoute())==null?void 0:t.bounds)!=null?n:null}async setInnerPolylineOptions(){const t={strokeColor:this.strokeColor,strokeWeight:this.strokeWeight,zIndex:this.zIndex,strokeOpacity:this.strokeOpacity,visible:!this.invisible};(await this.innerPolylinePromise).setOptions(t)}async updatePath(){let t=[];const n=this.getRoute();if(n)for(const i of n.legs)for(const o of i.steps)t=t.concat(o.path);(await this.innerPolylinePromise).setPath(t)}};v([C({attribute:"fit-in-viewport",type:Boolean,reflect:!0}),_("design:type",Object)],Dt.prototype,"fitInViewport",void 0);v([C({attribute:"invisible",type:Boolean,reflect:!0}),_("design:type",Object)],Dt.prototype,"invisible",void 0);v([C({attribute:"stroke-color",type:String,reflect:!0}),_("design:type",String)],Dt.prototype,"strokeColor",void 0);v([C({attribute:"stroke-opacity",type:Number,reflect:!0}),_("design:type",Number)],Dt.prototype,"strokeOpacity",void 0);v([C({attribute:"stroke-weight",type:Number,reflect:!0}),_("design:type",Number)],Dt.prototype,"strokeWeight",void 0);v([C({attribute:"z-index",type:Number,reflect:!0}),_("design:type",Number)],Dt.prototype,"zIndex",void 0);Dt=v([K("gmpx-route-polyline"),_("design:paramtypes",[])],Dt);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var oa;const Uv="#1faefb",Fv="#2565cd";let je=oa=class extends Oe{constructor(){super(),this.travelMode="driving",this.noPin=!1,this.zIndex=10*oa.numConstructed++}render(){var t,n;return S`
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
            stroke-color="${Fv}"
            stroke-weight="9"
            .zIndex=${this.zIndex}>
        </gmpx-route-polyline>
        <gmpx-route-polyline
            stroke-color="${Uv}"
            stroke-weight="5"
            .zIndex=${this.zIndex+1}>
        </gmpx-route-polyline>
        <gmpx-route-marker
            waypoint="origin"
            .title=${(t=this.originAddress)!=null?t:""}
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
    `}};je.numConstructed=0;v([C({converter:Ni,attribute:"destination-lat-lng",reflect:!0}),_("design:type",Object)],je.prototype,"destinationLatLng",void 0);v([C({type:String,attribute:"destination-place-id",reflect:!0}),_("design:type",String)],je.prototype,"destinationPlaceId",void 0);v([C({type:String,attribute:"destination-address",reflect:!0}),_("design:type",String)],je.prototype,"destinationAddress",void 0);v([C({converter:Ni,attribute:"origin-lat-lng",reflect:!0}),_("design:type",Object)],je.prototype,"originLatLng",void 0);v([C({type:String,attribute:"origin-place-id",reflect:!0}),_("design:type",String)],je.prototype,"originPlaceId",void 0);v([C({type:String,attribute:"origin-address",reflect:!0}),_("design:type",String)],je.prototype,"originAddress",void 0);v([C({attribute:!1}),_("design:type",Object)],je.prototype,"route",void 0);v([C({type:String,attribute:"travel-mode",reflect:!0}),_("design:type",Object)],je.prototype,"travelMode",void 0);v([C({type:Boolean,attribute:"no-pin",reflect:!0}),_("design:type",Object)],je.prototype,"noPin",void 0);je=oa=v([K("gmpx-route-overview"),_("design:paramtypes",[])],je);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:jv}=Ty,nd=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,Bv=e=>{var t;return((t=e==null?void 0:e._$litType$)==null?void 0:t.h)!=null},Hv=e=>e.strings===void 0,rd=()=>document.createComment(""),yn=(e,t,n)=>{var o;const r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const s=r.insertBefore(rd(),i),l=r.insertBefore(rd(),i);n=new jv(s,l,e,e.options)}else{const s=n._$AB.nextSibling,l=n._$AM,a=l!==e;if(a){let u;(o=n._$AQ)==null||o.call(n,e),n._$AM=e,n._$AP!==void 0&&(u=e._$AU)!==l._$AU&&n._$AP(u)}if(s!==i||a){let u=n._$AA;for(;u!==s;){const d=u.nextSibling;r.insertBefore(u,i),u=d}}}return n},fn=(e,t,n=e)=>(e._$AI(t,n),e),Vv={},sa=(e,t=Vv)=>e._$AH=t,la=e=>e._$AH,rl=e=>{var r;(r=e._$AP)==null||r.call(e,!1,!0);let t=e._$AA;const n=e._$AB.nextSibling;for(;t!==n;){const i=t.nextSibling;t.remove(),t=i}},Wv=e=>{e._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const id=e=>Bv(e)?e._$litType$.h:e.strings,Gv=$i(class extends Oi{constructor(e){super(e),this.et=new WeakMap}render(e){return[e]}update(e,[t]){const n=nd(this.it)?id(this.it):null,r=nd(t)?id(t):null;if(n!==null&&(r===null||n!==r)){const i=la(e).pop();let o=this.et.get(n);if(o===void 0){const s=document.createDocumentFragment();o=Gf(U,s),o.setConnected(!1),this.et.set(n,o)}sa(o,[i]),yn(o,void 0,i)}if(r!==null){if(n===null||n!==r){const i=this.et.get(r);if(i!==void 0){const o=la(i).pop();Wv(e),yn(e,void 0,o),sa(e,[o])}}this.it=t}else this.it=void 0;return this.render(t)}});/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let on=class extends Oe{constructor(){super(...arguments),this.columnReverse=!1,this.rowLayoutMinWidth=640,this.rowReverse=!1,this.hasRowLayout=!0,this.slotValidator=new ms(this,this.logger,["main","fixed"])}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>void this.updateLayout()),this.resizeObserver.observe(this)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.disconnect()}willUpdate(){this.updateLayout()}render(){const t=S`
      <div class="fixed-container">
        <slot name="fixed"></slot>
      </div>
    `,n=S`
      <div class="main-container">
        <slot name="main"></slot>
      </div>
    `;return S`
    <div class="layout ${jo({column:!this.hasRowLayout,row:this.hasRowLayout})}">
      ${Gv(this.hasRowLayout&&this.rowReverse||!this.hasRowLayout&&!this.columnReverse?S`${n}${t}`:S`${t}${n}`)}
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
  `;v([C({attribute:"column-reverse",reflect:!0,type:Boolean}),_("design:type",Object)],on.prototype,"columnReverse",void 0);v([C({attribute:"row-layout-min-width",reflect:!0,type:Number}),_("design:type",Object)],on.prototype,"rowLayoutMinWidth",void 0);v([C({attribute:"row-reverse",reflect:!0,type:Boolean}),_("design:type",Object)],on.prototype,"rowReverse",void 0);v([fe(),_("design:type",Object)],on.prototype,"hasRowLayout",void 0);on=v([K("gmpx-split-layout")],on);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qr=(e,t)=>{var r;const n=e._$AN;if(n===void 0)return!1;for(const i of n)(r=i._$AO)==null||r.call(i,t,!1),Qr(i,t);return!0},qo=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},_h=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Qv(t)}};function Yv(e){this._$AN!==void 0?(qo(this),this._$AM=e,_h(this)):this._$AM=e}function Kv(e,t=!1,n=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let o=n;o<r.length;o++)Qr(r[o],!1),qo(r[o]);else r!=null&&(Qr(r,!1),qo(r));else Qr(this,e)}const Qv=e=>{var t,n;e.type==fs.CHILD&&((t=e._$AP)!=null||(e._$AP=Kv),(n=e._$AQ)!=null||(e._$AQ=Yv))};class qv extends Oi{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,r){super._$AT(t,n,r),_h(this),this.isConnected=t._$AU}_$AO(t,n=!0){var r,i;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(i=this.disconnected)==null||i.call(this)),n&&(Qr(this,t),qo(this))}setValue(t){if(Hv(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const il=new WeakMap,Xv=$i(class extends qv{render(e){return U}update(e,[t]){var r;const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=(r=e.options)==null?void 0:r.host,this.rt(this.ct=e.element)),U}rt(e){var t;if(typeof this.Y=="function"){const n=(t=this.ht)!=null?t:globalThis;let r=il.get(n);r===void 0&&(r=new WeakMap,il.set(n,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t,n;return typeof this.Y=="function"?(t=il.get((e=this.ht)!=null?e:globalThis))==null?void 0:t.get(this.Y):(n=this.Y)==null?void 0:n.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const od=(e,t,n)=>{const r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},sd=$i(class extends Oi{constructor(e){if(super(e),e.type!==fs.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const i=[],o=[];let s=0;for(const l of e)i[s]=r?r(l,s):s,o[s]=n(l,s),s++;return{values:o,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){var w;const i=la(e),{values:o,keys:s}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=s,o;const l=(w=this.ut)!=null?w:this.ut=[],a=[];let u,d,p=0,f=i.length-1,m=0,y=o.length-1;for(;p<=f&&m<=y;)if(i[p]===null)p++;else if(i[f]===null)f--;else if(l[p]===s[m])a[m]=fn(i[p],o[m]),p++,m++;else if(l[f]===s[y])a[y]=fn(i[f],o[y]),f--,y--;else if(l[p]===s[y])a[y]=fn(i[p],o[y]),yn(e,a[y+1],i[p]),p++,y--;else if(l[f]===s[m])a[m]=fn(i[f],o[m]),yn(e,i[p],i[f]),f--,m++;else if(u===void 0&&(u=od(s,m,y),d=od(l,p,f)),u.has(l[p]))if(u.has(l[f])){const N=d.get(s[m]),h=N!==void 0?i[N]:null;if(h===null){const c=yn(e,i[p]);fn(c,o[m]),a[m]=c}else a[m]=fn(h,o[m]),yn(e,i[p],h),i[N]=null;m++}else rl(i[f]),f--;else rl(i[p]),p++;for(;m<=y;){const N=yn(e,a[y+1]);fn(N,o[m]),a[m++]=N}for(;p<=f;){const N=i[p++];N!==null&&rl(N)}return this.ut=s,sa(e,a),Rt}});/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Zv=10,ld=25;function wh(){return new fh(Zv,e=>e.code==="OVER_QUERY_LIMIT"||e.code==="UNKNOWN_ERROR")}var kn;(function(e){e[e.GEOMETRIC=0]="GEOMETRIC",e[e.DISTANCE_MATRIX=1]="DISTANCE_MATRIX"})(kn||(kn={}));class pt{constructor(t){this.elementForLogging=t}async computeDistances(t,n,r){const i=new Map;for(const u of n)i.set(u,{});let o=[...n];if(n.length>ld){const{spherical:u}=await G.importLibrary("geometry",this.elementForLogging);for(const[p,f]of i.entries())f.source=kn.GEOMETRIC,f.value=u.computeDistanceBetween(t,p);const d=p=>{var f,m;return(m=(f=i.get(p))==null?void 0:f.value)!=null?m:1/0};o.sort((p,f)=>d(p)-d(f)),o=o.slice(0,ld)}const s={origins:[t],destinations:o,travelMode:"DRIVING",unitSystem:r};let l=pt.cache.get(s);l==null&&(l=this.getService().then(u=>u.getDistanceMatrix(s)),pt.cache.set(s,l));const a=await l;for(let u=0;u<a.rows[0].elements.length;u++){const d=i.get(o[u]),p=a.rows[0].elements[u];p.status==="OK"&&(d.value=p.distance.value,d.text=p.distance.text,d.source=kn.DISTANCE_MATRIX)}return n.map(u=>i.get(u))}async getService(){if(!pt.service){const{DistanceMatrixService:t}=await G.importLibrary("routes",this.elementForLogging);pt.service=new t}return pt.service}static reset(){pt.cache=wh(),pt.service=void 0}}pt.cache=wh();/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ft={ADVANCED:"advanced",INTERMEDIATE:"intermediate",BASIC:"basic"};/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Jv(e){var r;function t(i){var o;return{label:(o=i.label)!=null?o:"",defaultUri:i.defaultUrl}}const n=i=>{var o,s,l,a,u;return{title:(o=i.title)!=null?o:"",addressLines:[(s=i.address1)!=null?s:"",(l=i.address2)!=null?l:""].filter(Boolean),position:(a=i.coords)!=null?a:{lat:0,lng:0},placeId:i.placeId,actions:((u=i.actions)!=null?u:[]).map(t)}};return((r=e.locations)!=null?r:[]).map(n)}function e0(e){var t,n;return(t=e.capabilities)!=null&&t.directions?ft.ADVANCED:(n=e.capabilities)!=null&&n.input?ft.INTERMEDIATE:ft.BASIC}function t0(e){var n;const t={...(n=e.mapOptions)!=null?n:{}};return t.mapId||delete t.mapId,t}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const n0=j`
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
    font: ${hs};
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
    font: ${fo};
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
    font: ${fo};
    margin: 0 0 0.6em 0;
  }

  #location-results-list .address {
    color: ${Bo};
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
    font: ${fo};
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
 */const r0={mapTypeControl:!1,maxZoom:17,streetViewControl:!1};let Pe=class extends Oe{constructor(){super(),this.featureSet=ft.ADVANCED,this.mapOptions=r0,this.internalListings=[],this.initialized=!1,this.getMsg=se.buildLocalizer(this),this.fontLoader=new un(this,[ve.GOOGLE_SANS_TEXT,ve.MATERIAL_SYMBOLS_OUTLINED]),this.distanceMeasurer=new pt(this),this.listingDistances=new Map,this.initialize()}shouldUpdate(t){return this.initialized}willUpdate(t){var n;(t.has("listings")||t.has("initialized"))&&(this.internalListings=((n=this.listings)!=null?n:[]).map(r=>this.createInternalListing(r)),this.listingDistances.clear())}updated(t){var n,r;(t.has("listings")||t.has("initialized"))&&this.updateBounds(),(t.has("mapOptions")||t.has("initialized"))&&this.mapOptions&&((r=(n=this.mapElement)==null?void 0:n.innerMap)==null||r.setOptions(this.mapOptions))}render(){return this.initialized?S`
      <gmpx-split-layout>
        <gmpx-overlay-layout slot="fixed">
          ${this.renderSidePanelMain()}
          ${this.renderSidePanelOverlay()}
        </gmpx-overlay-layout>
        ${this.renderMapPanel()}
      </gmpx-split-layout>
    `:U}configureFromQuickBuilder(t){this.listings=Jv(t),this.featureSet=e0(t),this.mapOptions=t0(t)}async initialize(){this.mapsCoreLibrary=await G.importLibrary("core",this),this.initialized=!0}createInternalListing(t){var r;const n={place_id:t.placeId,name:t.title,formatted_address:(r=t.addressLines)==null?void 0:r.join(" "),geometry:{location:new this.mapsCoreLibrary.LatLng(t.position)}};return{...t,placeResult:n,uniqueKey:`${t.placeId}:${t.title}`}}isIntermediateOrBetter(){return this.featureSet===ft.INTERMEDIATE||this.featureSet===ft.ADVANCED}async updateDistances(t){if(!this.isIntermediateOrBetter()||!t||!this.internalListings.length)this.listingDistances.clear();else{const n=this.userCountry==="US"?this.mapsCoreLibrary.UnitSystem.IMPERIAL:this.mapsCoreLibrary.UnitSystem.METRIC,r=await this.distanceMeasurer.computeDistances(t,this.internalListings.map(i=>i.position),n);for(let i=0;i<r.length;i++)this.listingDistances.set(this.internalListings[i],r[i])}this.requestUpdate()}updateSearchLocation(t){var r;const n=t.target.value;if(this.searchLocation=n!=null?n:void 0,n!=null&&n.addressComponents){for(const i of n.addressComponents)if(i.types.indexOf("country")>=0){this.userCountry=(r=i.shortText)!=null?r:void 0;break}}this.updateBounds(),this.updateDistances(n==null?void 0:n.location)}selectLocation(t){return this.selectedListing===t?!1:(this.selectedListing=t,!0)}async updateBounds(){var n,r,i;if(!this.internalListings.length)return;const t=new this.mapsCoreLibrary.LatLngBounds;(n=this.searchLocation)!=null&&n.location&&t.extend(this.searchLocation.location);for(const o of this.internalListings)t.extend(o.position);(i=(r=this.mapElement)==null?void 0:r.innerMap)==null||i.fitBounds(t)}renderSidePanelOverlay(){return this.featureSet===ft.ADVANCED?S`
          <div slot="overlay" id="details-panel">
            <button class="back-button"
                @click=${()=>{var t;return(t=this.overlayLayout)==null?void 0:t.hideOverlay()}}>
              <span class="icon material-symbols-outlined">arrow_back</span>
              ${this.getMsg("LOCATOR_BACK_BUTTON_CTA")}
            </button>
            <gmpx-place-overview .place=${this.detailsPlaceId} google-logo-already-displayed>
            </gmpx-place-overview>
          </div>`:U}renderListItem(t){var u,d,p,f,m;const n=this.listingDistances.get(t),i=(n==null?void 0:n.text)&&n.source===kn.DISTANCE_MATRIX?n.text:U,o=[];if(this.featureSet===ft.ADVANCED){const y=()=>{var w;t.placeId&&(this.detailsPlaceId=t.placeId,(w=this.overlayLayout)==null||w.showOverlay())};o.push(S`
          <gmpx-icon-button class="view-details" @click=${y}>
            ${this.getMsg("LOCATOR_VIEW_DETAILS_CTA")}
          </gmpx-icon-button>`)}for(const y of(u=t.actions)!=null?u:[])o.push(S`
          <gmpx-icon-button icon="open_in_new" .href=${(d=y.defaultUri)!=null?d:U}>
            ${y.label}
          </gmpx-icon-button>`);const s=()=>{var w,N;this.selectLocation(t)&&this.selectedListing&&!this.searchLocation&&((N=(w=this.mapElement)==null?void 0:w.innerMap)==null||N.panTo(this.selectedListing.position))},l=s,a=y=>{s(),y.stopPropagation()};return S`
      <li @click=${l}
          class=${jo({selected:t===this.selectedListing})}
          ${Xv(y=>{t.listingElement=y})}>
        <gmpx-place-data-provider auto-fetch-disabled
            .place=${t.placeResult}>
          <div class="result-item">
            <button class="select-location" @click=${a}>
              <h2 class="name">
                <gmpx-place-field-text field="displayName"></gmpx-place-field-text>
              </h2>
            </button>
            <div class="address">
              ${ta((p=t.addressLines)!=null?p:[],S`<br>`)}
            </div>
            <div class="actions">
              ${ta(o,S``)}
            </div>
            <div class="distance">${i}</div>
            <gmpx-place-directions-button condensed
                .origin=${(m=(f=this.searchLocation)==null?void 0:f.location)!=null?m:void 0}>
            </gmpx-place-directions-button>
          </div>
        </gmpx-place-data-provider>
      </li>`}renderSidePanelMain(){let t=this.internalListings,n=this.getMsg("LOCATOR_LIST_SUBHEADING");if(this.listingDistances.size>0){n=this.getMsg("LOCATOR_LIST_SUBHEADING_WITH_SEARCH");const i=this.internalListings.filter(a=>{var u;return((u=this.listingDistances.get(a))==null?void 0:u.source)===kn.DISTANCE_MATRIX}),o=this.internalListings.filter(a=>{var u;return((u=this.listingDistances.get(a))==null?void 0:u.source)!==kn.DISTANCE_MATRIX}),s=a=>{var u,d;return(d=(u=this.listingDistances.get(a))==null?void 0:u.value)!=null?d:1/0},l=(a,u)=>s(a)-s(u);t=[...i.sort(l),...o.sort(l)]}const r=this.featureSet===ft.BASIC?U:S`
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
              ${n} (${t.length})
            </div>
            <div class="results">
              <ul id="location-results-list">
                ${sd(t,i=>i.uniqueKey,i=>this.renderListItem(i))}
              </ul>
            </div>
          </div>
        </div>`}renderSearchMarker(){var t;return this.isIntermediateOrBetter()&&((t=this.searchLocation)!=null&&t.location)?S`
          <gmp-advanced-marker
              .position=${this.searchLocation.location}
              title="${this.getMsg("LOCATOR_SEARCH_LOCATION_MARKER_TITLE")}">
            <svg viewbox="0 0 100 100" class="search-pin">
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
          </gmp-advanced-marker>`:U}renderMapMarker(t){const r=()=>{this.selectLocation(t);const i=t.listingElement;i&&i.scrollIntoView({behavior:"smooth",block:"nearest"})};return S`
        <gmp-advanced-marker
            .position=${t.position}
            .title=${t.title}
            .zIndex=${100}
            gmp-clickable @gmp-click=${r}></gmp-advanced-marker>`}renderMapDirections(){var r,i;const t=(r=this.searchLocation)==null?void 0:r.location,n=(i=this.selectedListing)==null?void 0:i.position;return this.featureSet===ft.ADVANCED&&t&&n?S`
      <gmpx-route-overview no-pin
          .originLatLng=${t}
          .destinationLatLng=${n}>
      </gmpx-route-overview>`:U}renderMapPanel(){var t;return S`
        <gmp-map slot="main" id="main-map" .mapId=${(t=this.mapId)!=null?t:U}>
          ${this.renderMapDirections()}
          ${sd(this.internalListings,n=>n.uniqueKey,n=>this.renderMapMarker(n))}
          ${this.renderSearchMarker()}
        </gmp-map>`}};Pe.styles=n0;v([C({attribute:"feature-set",reflect:!0}),_("design:type",String)],Pe.prototype,"featureSet",void 0);v([C({attribute:"map-id",reflect:!0}),_("design:type",String)],Pe.prototype,"mapId",void 0);v([C({attribute:!1}),_("design:type",Array)],Pe.prototype,"listings",void 0);v([C({attribute:!1}),_("design:type",Object)],Pe.prototype,"mapOptions",void 0);v([fe(),_("design:type",Array)],Pe.prototype,"internalListings",void 0);v([fe(),_("design:type",Object)],Pe.prototype,"selectedListing",void 0);v([fe(),_("design:type",Object)],Pe.prototype,"searchLocation",void 0);v([fe(),_("design:type",String)],Pe.prototype,"detailsPlaceId",void 0);v([fe(),_("design:type",Object)],Pe.prototype,"initialized",void 0);v([ut("gmpx-overlay-layout"),_("design:type",Function)],Pe.prototype,"overlayLayout",void 0);v([ut("gmp-map"),_("design:type",Object)],Pe.prototype,"mapElement",void 0);Pe=v([K("gmpx-store-locator"),_("design:paramtypes",[])],Pe);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const i0=ee({tagName:"gmpx-api-loader",elementClass:G,react:J});i0.importLibrary=G.importLibrary;const ad=ee({tagName:"gmpx-icon-button",elementClass:Fe,react:J}),o0=ee({tagName:"gmpx-overlay-layout",elementClass:Mt,react:J});ee({tagName:"gmpx-place-attribution",elementClass:Ln,react:J});const s0=ee({tagName:"gmpx-place-data-provider",elementClass:_t,react:J,events:{onRequestError:"gmpx-requesterror"}}),l0=ee({tagName:"gmpx-place-directions-button",elementClass:bt,react:J});ee({tagName:"gmpx-place-field-boolean",elementClass:_i,react:J});ee({tagName:"gmpx-place-field-link",elementClass:hr,react:J});ee({tagName:"gmpx-place-field-text",elementClass:Go,react:J});ee({tagName:"gmpx-place-opening-hours",elementClass:gr,react:J});const a0=ee({tagName:"gmpx-place-overview",elementClass:qe,react:J,events:{onRequestError:"gmpx-requesterror"}});ee({tagName:"gmpx-place-photo-gallery",elementClass:wt,react:J});const u0=ee({tagName:"gmpx-place-picker",elementClass:pe,react:J,events:{onPlaceChange:"gmpx-placechange",onRequestError:"gmpx-requesterror"}});ee({tagName:"gmpx-place-price-level",elementClass:Ko,react:J});ee({tagName:"gmpx-place-rating",elementClass:wi,react:J});const c0=ee({tagName:"gmpx-place-reviews",elementClass:Ei,react:J});ee({tagName:"gmpx-route-data-provider",elementClass:Xe,react:J,events:{onRequestError:"gmpx-requesterror"}});ee({tagName:"gmpx-route-marker",elementClass:yr,react:J});ee({tagName:"gmpx-route-overview",elementClass:je,react:J,events:{onRequestError:"gmpx-requesterror"}});ee({tagName:"gmpx-route-polyline",elementClass:Dt,react:J});const d0=ee({tagName:"gmpx-split-layout",elementClass:on,react:J});ee({tagName:"gmpx-store-locator",elementClass:Pe,react:J});/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var gd;const p0=(gd=globalThis.GOOGLE_MAPS_API_KEY)!=null?gd:"AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",f0={lat:-34.397,lng:150.644},h0=4,g0=16,m0=()=>{var i;const e=$.useRef(null),t=$.useRef(null),[n,r]=$.useState(void 0);return b.createElement("div",{className:"App"},b.createElement(qm,{apiKey:p0,version:"beta"},b.createElement(d0,{rowReverse:!0,rowLayoutMinWidth:700},b.createElement("div",{className:"SplitLayoutContainer",slot:"fixed"},b.createElement(o0,{ref:e},b.createElement("div",{className:"MainContainer",slot:"main"},b.createElement(u0,{className:"CollegePicker",ref:t,forMap:"gmap",country:["us","ca"],type:"university",placeholder:"Enter a college in the US or Canada",onPlaceChange:()=>{var o,s;(o=t.current)!=null&&o.value?r((s=t.current)==null?void 0:s.value):r(void 0)}}),b.createElement(a0,{size:"large",place:n,googleLogoAlreadyDisplayed:!0},b.createElement(ad,{slot:"action",variant:"filled",onClick:()=>{var o;return(o=e.current)==null?void 0:o.showOverlay()}},"See Reviews"),b.createElement(l0,{slot:"action",variant:"filled"},"Directions"))),b.createElement("div",{slot:"overlay"},b.createElement(ad,{className:"CloseButton",onClick:()=>{var o;return(o=e.current)==null?void 0:o.hideOverlay()}},"Close"),b.createElement(s0,{place:n},b.createElement(c0,null))))),b.createElement("div",{className:"SplitLayoutContainer",slot:"main"},b.createElement(Tf,{id:"gmap",mapId:"8c732c82e4ec29d9",center:(i=n==null?void 0:n.location)!=null?i:f0,zoom:n!=null&&n.location?g0:h0},(n==null?void 0:n.location)&&b.createElement(yy,{position:n==null?void 0:n.location},b.createElement(wy,{background:"#FBBC04",glyphColor:"#000",borderColor:"#000"})))))))},y0=ol.createRoot(document.getElementById("root"));y0.render(b.createElement(b.StrictMode,null,b.createElement(m0,null)));
