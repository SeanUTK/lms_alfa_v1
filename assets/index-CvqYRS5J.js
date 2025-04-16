function h$(e,t){for(var r=0;r<t.length;r++){const o=t[r];if(typeof o!="string"&&!Array.isArray(o)){for(const i in o)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(o,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>o[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function m$(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xy={exports:{}},Kl={},yy={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ss=Symbol.for("react.element"),p$=Symbol.for("react.portal"),f$=Symbol.for("react.fragment"),g$=Symbol.for("react.strict_mode"),x$=Symbol.for("react.profiler"),y$=Symbol.for("react.provider"),v$=Symbol.for("react.context"),b$=Symbol.for("react.forward_ref"),w$=Symbol.for("react.suspense"),$$=Symbol.for("react.memo"),j$=Symbol.for("react.lazy"),$p=Symbol.iterator;function k$(e){return e===null||typeof e!="object"?null:(e=$p&&e[$p]||e["@@iterator"],typeof e=="function"?e:null)}var vy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},by=Object.assign,wy={};function ri(e,t,r){this.props=e,this.context=t,this.refs=wy,this.updater=r||vy}ri.prototype.isReactComponent={};ri.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ri.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $y(){}$y.prototype=ri.prototype;function Bh(e,t,r){this.props=e,this.context=t,this.refs=wy,this.updater=r||vy}var Nh=Bh.prototype=new $y;Nh.constructor=Bh;by(Nh,ri.prototype);Nh.isPureReactComponent=!0;var jp=Array.isArray,jy=Object.prototype.hasOwnProperty,Oh={current:null},ky={key:!0,ref:!0,__self:!0,__source:!0};function Cy(e,t,r){var o,i={},s=null,l=null;if(t!=null)for(o in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)jy.call(t,o)&&!ky.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(c===1)i.children=r;else if(1<c){for(var d=Array(c),u=0;u<c;u++)d[u]=arguments[u+2];i.children=d}if(e&&e.defaultProps)for(o in c=e.defaultProps,c)i[o]===void 0&&(i[o]=c[o]);return{$$typeof:Ss,type:e,key:s,ref:l,props:i,_owner:Oh.current}}function C$(e,t){return{$$typeof:Ss,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ss}function S$(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var kp=/\/+/g;function Rc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?S$(""+e.key):t.toString(36)}function Ba(e,t,r,o,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ss:case p$:l=!0}}if(l)return l=e,i=i(l),e=o===""?"."+Rc(l,0):o,jp(i)?(r="",e!=null&&(r=e.replace(kp,"$&/")+"/"),Ba(i,t,r,"",function(u){return u})):i!=null&&(Vh(i)&&(i=C$(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(kp,"$&/")+"/")+e)),t.push(i)),1;if(l=0,o=o===""?".":o+":",jp(e))for(var c=0;c<e.length;c++){s=e[c];var d=o+Rc(s,c);l+=Ba(s,t,r,d,i)}else if(d=k$(e),typeof d=="function")for(e=d.call(e),c=0;!(s=e.next()).done;)s=s.value,d=o+Rc(s,c++),l+=Ba(s,t,r,d,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Bs(e,t,r){if(e==null)return e;var o=[],i=0;return Ba(e,o,"","",function(s){return t.call(r,s,i++)}),o}function P$(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ke={current:null},Na={transition:null},T$={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:Na,ReactCurrentOwner:Oh};function Sy(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:Bs,forEach:function(e,t,r){Bs(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Bs(e,function(){t++}),t},toArray:function(e){return Bs(e,function(t){return t})||[]},only:function(e){if(!Vh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=ri;q.Fragment=f$;q.Profiler=x$;q.PureComponent=Bh;q.StrictMode=g$;q.Suspense=w$;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T$;q.act=Sy;q.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=by({},e.props),i=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=Oh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)jy.call(t,d)&&!ky.hasOwnProperty(d)&&(o[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)o.children=r;else if(1<d){c=Array(d);for(var u=0;u<d;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:Ss,type:e.type,key:i,ref:s,props:o,_owner:l}};q.createContext=function(e){return e={$$typeof:v$,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:y$,_context:e},e.Consumer=e};q.createElement=Cy;q.createFactory=function(e){var t=Cy.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:b$,render:e}};q.isValidElement=Vh;q.lazy=function(e){return{$$typeof:j$,_payload:{_status:-1,_result:e},_init:P$}};q.memo=function(e,t){return{$$typeof:$$,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=Na.transition;Na.transition={};try{e()}finally{Na.transition=t}};q.unstable_act=Sy;q.useCallback=function(e,t){return Ke.current.useCallback(e,t)};q.useContext=function(e){return Ke.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return Ke.current.useDeferredValue(e)};q.useEffect=function(e,t){return Ke.current.useEffect(e,t)};q.useId=function(){return Ke.current.useId()};q.useImperativeHandle=function(e,t,r){return Ke.current.useImperativeHandle(e,t,r)};q.useInsertionEffect=function(e,t){return Ke.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return Ke.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return Ke.current.useMemo(e,t)};q.useReducer=function(e,t,r){return Ke.current.useReducer(e,t,r)};q.useRef=function(e){return Ke.current.useRef(e)};q.useState=function(e){return Ke.current.useState(e)};q.useSyncExternalStore=function(e,t,r){return Ke.current.useSyncExternalStore(e,t,r)};q.useTransition=function(){return Ke.current.useTransition()};q.version="18.3.1";yy.exports=q;var j=yy.exports;const ce=m$(j),A$=h$({__proto__:null,default:ce},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z$=j,M$=Symbol.for("react.element"),D$=Symbol.for("react.fragment"),E$=Object.prototype.hasOwnProperty,L$=z$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R$={key:!0,ref:!0,__self:!0,__source:!0};function Py(e,t,r){var o,i={},s=null,l=null;r!==void 0&&(s=""+r),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(o in t)E$.call(t,o)&&!R$.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)i[o]===void 0&&(i[o]=t[o]);return{$$typeof:M$,type:e,key:s,ref:l,props:i,_owner:L$.current}}Kl.Fragment=D$;Kl.jsx=Py;Kl.jsxs=Py;xy.exports=Kl;var n=xy.exports,Ty={exports:{}},mt={},Ay={exports:{}},zy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,z){var N=I.length;I.push(z);e:for(;0<N;){var F=N-1>>>1,V=I[F];if(0<i(V,z))I[F]=z,I[N]=V,N=F;else break e}}function r(I){return I.length===0?null:I[0]}function o(I){if(I.length===0)return null;var z=I[0],N=I.pop();if(N!==z){I[0]=N;e:for(var F=0,V=I.length,ft=V>>>1;F<ft;){var Ne=2*(F+1)-1,it=I[Ne],ge=Ne+1,He=I[ge];if(0>i(it,N))ge<V&&0>i(He,it)?(I[F]=He,I[ge]=N,F=ge):(I[F]=it,I[Ne]=N,F=Ne);else if(ge<V&&0>i(He,N))I[F]=He,I[ge]=N,F=ge;else break e}}return z}function i(I,z){var N=I.sortIndex-z.sortIndex;return N!==0?N:I.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var d=[],u=[],h=1,m=null,p=3,b=!1,v=!1,$=!1,k=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var z=r(u);z!==null;){if(z.callback===null)o(u);else if(z.startTime<=I)o(u),z.sortIndex=z.expirationTime,t(d,z);else break;z=r(u)}}function f(I){if($=!1,g(I),!v)if(r(d)!==null)v=!0,_(S);else{var z=r(u);z!==null&&ve(f,z.startTime-I)}}function S(I,z){v=!1,$&&($=!1,y(w),w=-1),b=!0;var N=p;try{for(g(z),m=r(d);m!==null&&(!(m.expirationTime>z)||I&&!H());){var F=m.callback;if(typeof F=="function"){m.callback=null,p=m.priorityLevel;var V=F(m.expirationTime<=z);z=e.unstable_now(),typeof V=="function"?m.callback=V:m===r(d)&&o(d),g(z)}else o(d);m=r(d)}if(m!==null)var ft=!0;else{var Ne=r(u);Ne!==null&&ve(f,Ne.startTime-z),ft=!1}return ft}finally{m=null,p=N,b=!1}}var C=!1,P=null,w=-1,A=5,T=-1;function H(){return!(e.unstable_now()-T<A)}function G(){if(P!==null){var I=e.unstable_now();T=I;var z=!0;try{z=P(!0,I)}finally{z?R():(C=!1,P=null)}}else C=!1}var R;if(typeof x=="function")R=function(){x(G)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,W=D.port2;D.port1.onmessage=G,R=function(){W.postMessage(null)}}else R=function(){k(G,0)};function _(I){P=I,C||(C=!0,R())}function ve(I,z){w=k(function(){I(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){v||b||(v=!0,_(S))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(d)},e.unstable_next=function(I){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var N=p;p=z;try{return I()}finally{p=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var N=p;p=I;try{return z()}finally{p=N}},e.unstable_scheduleCallback=function(I,z,N){var F=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?F+N:F):N=F,I){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=N+V,I={id:h++,callback:z,priorityLevel:I,startTime:N,expirationTime:V,sortIndex:-1},N>F?(I.sortIndex=N,t(u,I),r(d)===null&&I===r(u)&&($?(y(w),w=-1):$=!0,ve(f,N-F))):(I.sortIndex=V,t(d,I),v||b||(v=!0,_(S))),I},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(I){var z=p;return function(){var N=p;p=z;try{return I.apply(this,arguments)}finally{p=N}}}})(zy);Ay.exports=zy;var I$=Ay.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F$=j,dt=I$;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var My=new Set,Xi={};function Wn(e,t){No(e,t),No(e+"Capture",t)}function No(e,t){for(Xi[e]=t,e=0;e<t.length;e++)My.add(t[e])}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fu=Object.prototype.hasOwnProperty,B$=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cp={},Sp={};function N$(e){return fu.call(Sp,e)?!0:fu.call(Cp,e)?!1:B$.test(e)?Sp[e]=!0:(Cp[e]=!0,!1)}function O$(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function V$(e,t,r,o){if(t===null||typeof t>"u"||O$(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,r,o,i,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var _h=/[\-:]([a-z])/g;function Wh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_h,Wh);Be[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_h,Wh);Be[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_h,Wh);Be[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Uh(e,t,r,o){var i=Be.hasOwnProperty(t)?Be[t]:null;(i!==null?i.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(V$(t,r,i,o)&&(r=null),o||i===null?N$(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,o=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var yr=F$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ns=Symbol.for("react.element"),go=Symbol.for("react.portal"),xo=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),gu=Symbol.for("react.profiler"),Dy=Symbol.for("react.provider"),Ey=Symbol.for("react.context"),Gh=Symbol.for("react.forward_ref"),xu=Symbol.for("react.suspense"),yu=Symbol.for("react.suspense_list"),Yh=Symbol.for("react.memo"),zr=Symbol.for("react.lazy"),Ly=Symbol.for("react.offscreen"),Pp=Symbol.iterator;function li(e){return e===null||typeof e!="object"?null:(e=Pp&&e[Pp]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,Ic;function zi(e){if(Ic===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ic=t&&t[1]||""}return`
`+Ic+e}var Fc=!1;function Bc(e,t){if(!e||Fc)return"";Fc=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var o=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){o=u}e.call(t.prototype)}else{try{throw Error()}catch(u){o=u}e()}}catch(u){if(u&&o&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=o.stack.split(`
`),l=i.length-1,c=s.length-1;1<=l&&0<=c&&i[l]!==s[c];)c--;for(;1<=l&&0<=c;l--,c--)if(i[l]!==s[c]){if(l!==1||c!==1)do if(l--,c--,0>c||i[l]!==s[c]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=c);break}}}finally{Fc=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?zi(e):""}function _$(e){switch(e.tag){case 5:return zi(e.type);case 16:return zi("Lazy");case 13:return zi("Suspense");case 19:return zi("SuspenseList");case 0:case 2:case 15:return e=Bc(e.type,!1),e;case 11:return e=Bc(e.type.render,!1),e;case 1:return e=Bc(e.type,!0),e;default:return""}}function vu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xo:return"Fragment";case go:return"Portal";case gu:return"Profiler";case Hh:return"StrictMode";case xu:return"Suspense";case yu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ey:return(e.displayName||"Context")+".Consumer";case Dy:return(e._context.displayName||"Context")+".Provider";case Gh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yh:return t=e.displayName||null,t!==null?t:vu(e.type)||"Memo";case zr:t=e._payload,e=e._init;try{return vu(e(t))}catch{}}return null}function W$(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vu(t);case 8:return t===Hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ry(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function U$(e){var t=Ry(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){o=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(l){o=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Os(e){e._valueTracker||(e._valueTracker=U$(e))}function Iy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=Ry(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function ol(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bu(e,t){var r=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Tp(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=Kr(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fy(e,t){t=t.checked,t!=null&&Uh(e,"checked",t,!1)}function wu(e,t){Fy(e,t);var r=Kr(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$u(e,t.type,r):t.hasOwnProperty("defaultValue")&&$u(e,t.type,Kr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ap(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function $u(e,t,r){(t!=="number"||ol(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Mi=Array.isArray;function Eo(e,t,r,o){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&o&&(e[r].defaultSelected=!0)}else{for(r=""+Kr(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ju(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zp(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(L(92));if(Mi(r)){if(1<r.length)throw Error(L(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Kr(r)}}function By(e,t){var r=Kr(t.value),o=Kr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function Mp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ny(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ku(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ny(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vs,Oy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Vs=Vs||document.createElement("div"),Vs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Vs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ji(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H$=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(e){H$.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ii[t]=Ii[e]})});function Vy(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ii.hasOwnProperty(e)&&Ii[e]?(""+t).trim():t+"px"}function _y(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,i=Vy(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,i):e[r]=i}}var G$=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cu(e,t){if(t){if(G$[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function Su(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pu=null;function qh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tu=null,Lo=null,Ro=null;function Dp(e){if(e=As(e)){if(typeof Tu!="function")throw Error(L(280));var t=e.stateNode;t&&(t=tc(t),Tu(e.stateNode,e.type,t))}}function Wy(e){Lo?Ro?Ro.push(e):Ro=[e]:Lo=e}function Uy(){if(Lo){var e=Lo,t=Ro;if(Ro=Lo=null,Dp(e),t)for(e=0;e<t.length;e++)Dp(t[e])}}function Hy(e,t){return e(t)}function Gy(){}var Nc=!1;function Yy(e,t,r){if(Nc)return e(t,r);Nc=!0;try{return Hy(e,t,r)}finally{Nc=!1,(Lo!==null||Ro!==null)&&(Gy(),Uy())}}function Zi(e,t){var r=e.stateNode;if(r===null)return null;var o=tc(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(L(231,t,typeof r));return r}var Au=!1;if(cr)try{var ci={};Object.defineProperty(ci,"passive",{get:function(){Au=!0}}),window.addEventListener("test",ci,ci),window.removeEventListener("test",ci,ci)}catch{Au=!1}function Y$(e,t,r,o,i,s,l,c,d){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(h){this.onError(h)}}var Fi=!1,il=null,sl=!1,zu=null,q$={onError:function(e){Fi=!0,il=e}};function Q$(e,t,r,o,i,s,l,c,d){Fi=!1,il=null,Y$.apply(q$,arguments)}function K$(e,t,r,o,i,s,l,c,d){if(Q$.apply(this,arguments),Fi){if(Fi){var u=il;Fi=!1,il=null}else throw Error(L(198));sl||(sl=!0,zu=u)}}function Un(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function qy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ep(e){if(Un(e)!==e)throw Error(L(188))}function X$(e){var t=e.alternate;if(!t){if(t=Un(e),t===null)throw Error(L(188));return t!==e?null:e}for(var r=e,o=t;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(o=i.return,o!==null){r=o;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return Ep(i),e;if(s===o)return Ep(i),t;s=s.sibling}throw Error(L(188))}if(r.return!==o.return)r=i,o=s;else{for(var l=!1,c=i.child;c;){if(c===r){l=!0,r=i,o=s;break}if(c===o){l=!0,o=i,r=s;break}c=c.sibling}if(!l){for(c=s.child;c;){if(c===r){l=!0,r=s,o=i;break}if(c===o){l=!0,o=s,r=i;break}c=c.sibling}if(!l)throw Error(L(189))}}if(r.alternate!==o)throw Error(L(190))}if(r.tag!==3)throw Error(L(188));return r.stateNode.current===r?e:t}function Qy(e){return e=X$(e),e!==null?Ky(e):null}function Ky(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ky(e);if(t!==null)return t;e=e.sibling}return null}var Xy=dt.unstable_scheduleCallback,Lp=dt.unstable_cancelCallback,J$=dt.unstable_shouldYield,Z$=dt.unstable_requestPaint,be=dt.unstable_now,e2=dt.unstable_getCurrentPriorityLevel,Qh=dt.unstable_ImmediatePriority,Jy=dt.unstable_UserBlockingPriority,al=dt.unstable_NormalPriority,t2=dt.unstable_LowPriority,Zy=dt.unstable_IdlePriority,Xl=null,Gt=null;function r2(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Xl,e,void 0,(e.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:i2,n2=Math.log,o2=Math.LN2;function i2(e){return e>>>=0,e===0?32:31-(n2(e)/o2|0)|0}var _s=64,Ws=4194304;function Di(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ll(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,i=e.suspendedLanes,s=e.pingedLanes,l=r&268435455;if(l!==0){var c=l&~i;c!==0?o=Di(c):(s&=l,s!==0&&(o=Di(s)))}else l=r&~i,l!==0?o=Di(l):s!==0&&(o=Di(s));if(o===0)return 0;if(t!==0&&t!==o&&!(t&i)&&(i=o&-o,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(o&4&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-Dt(t),i=1<<r,o|=e[r],t&=~i;return o}function s2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function a2(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-Dt(s),c=1<<l,d=i[l];d===-1?(!(c&r)||c&o)&&(i[l]=s2(c,t)):d<=t&&(e.expiredLanes|=c),s&=~c}}function Mu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function e1(){var e=_s;return _s<<=1,!(_s&4194240)&&(_s=64),e}function Oc(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ps(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Dt(t),e[t]=r}function l2(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Dt(r),s=1<<i;t[i]=0,o[i]=-1,e[i]=-1,r&=~s}}function Kh(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-Dt(r),i=1<<o;i&t|e[o]&t&&(e[o]|=t),r&=~i}}var Z=0;function t1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var r1,Xh,n1,o1,i1,Du=!1,Us=[],Br=null,Nr=null,Or=null,es=new Map,ts=new Map,Er=[],c2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rp(e,t){switch(e){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":es.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ts.delete(t.pointerId)}}function di(e,t,r,o,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:s,targetContainers:[i]},t!==null&&(t=As(t),t!==null&&Xh(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function d2(e,t,r,o,i){switch(t){case"focusin":return Br=di(Br,e,t,r,o,i),!0;case"dragenter":return Nr=di(Nr,e,t,r,o,i),!0;case"mouseover":return Or=di(Or,e,t,r,o,i),!0;case"pointerover":var s=i.pointerId;return es.set(s,di(es.get(s)||null,e,t,r,o,i)),!0;case"gotpointercapture":return s=i.pointerId,ts.set(s,di(ts.get(s)||null,e,t,r,o,i)),!0}return!1}function s1(e){var t=kn(e.target);if(t!==null){var r=Un(t);if(r!==null){if(t=r.tag,t===13){if(t=qy(r),t!==null){e.blockedOn=t,i1(e.priority,function(){n1(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Eu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Pu=o,r.target.dispatchEvent(o),Pu=null}else return t=As(r),t!==null&&Xh(t),e.blockedOn=r,!1;t.shift()}return!0}function Ip(e,t,r){Oa(e)&&r.delete(t)}function u2(){Du=!1,Br!==null&&Oa(Br)&&(Br=null),Nr!==null&&Oa(Nr)&&(Nr=null),Or!==null&&Oa(Or)&&(Or=null),es.forEach(Ip),ts.forEach(Ip)}function ui(e,t){e.blockedOn===t&&(e.blockedOn=null,Du||(Du=!0,dt.unstable_scheduleCallback(dt.unstable_NormalPriority,u2)))}function rs(e){function t(i){return ui(i,e)}if(0<Us.length){ui(Us[0],e);for(var r=1;r<Us.length;r++){var o=Us[r];o.blockedOn===e&&(o.blockedOn=null)}}for(Br!==null&&ui(Br,e),Nr!==null&&ui(Nr,e),Or!==null&&ui(Or,e),es.forEach(t),ts.forEach(t),r=0;r<Er.length;r++)o=Er[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<Er.length&&(r=Er[0],r.blockedOn===null);)s1(r),r.blockedOn===null&&Er.shift()}var Io=yr.ReactCurrentBatchConfig,cl=!0;function h2(e,t,r,o){var i=Z,s=Io.transition;Io.transition=null;try{Z=1,Jh(e,t,r,o)}finally{Z=i,Io.transition=s}}function m2(e,t,r,o){var i=Z,s=Io.transition;Io.transition=null;try{Z=4,Jh(e,t,r,o)}finally{Z=i,Io.transition=s}}function Jh(e,t,r,o){if(cl){var i=Eu(e,t,r,o);if(i===null)Kc(e,t,o,dl,r),Rp(e,o);else if(d2(i,e,t,r,o))o.stopPropagation();else if(Rp(e,o),t&4&&-1<c2.indexOf(e)){for(;i!==null;){var s=As(i);if(s!==null&&r1(s),s=Eu(e,t,r,o),s===null&&Kc(e,t,o,dl,r),s===i)break;i=s}i!==null&&o.stopPropagation()}else Kc(e,t,o,null,r)}}var dl=null;function Eu(e,t,r,o){if(dl=null,e=qh(o),e=kn(e),e!==null)if(t=Un(e),t===null)e=null;else if(r=t.tag,r===13){if(e=qy(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return dl=e,null}function a1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(e2()){case Qh:return 1;case Jy:return 4;case al:case t2:return 16;case Zy:return 536870912;default:return 16}default:return 16}}var Rr=null,Zh=null,Va=null;function l1(){if(Va)return Va;var e,t=Zh,r=t.length,o,i="value"in Rr?Rr.value:Rr.textContent,s=i.length;for(e=0;e<r&&t[e]===i[e];e++);var l=r-e;for(o=1;o<=l&&t[r-o]===i[s-o];o++);return Va=i.slice(e,1<o?1-o:void 0)}function _a(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hs(){return!0}function Fp(){return!1}function pt(e){function t(r,o,i,s,l){this._reactName=r,this._targetInst=i,this.type=o,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(r=e[c],this[c]=r?r(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hs:Fp,this.isPropagationStopped=Fp,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Hs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Hs)},persist:function(){},isPersistent:Hs}),t}var ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},em=pt(ni),Ts=fe({},ni,{view:0,detail:0}),p2=pt(Ts),Vc,_c,hi,Jl=fe({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hi&&(hi&&e.type==="mousemove"?(Vc=e.screenX-hi.screenX,_c=e.screenY-hi.screenY):_c=Vc=0,hi=e),Vc)},movementY:function(e){return"movementY"in e?e.movementY:_c}}),Bp=pt(Jl),f2=fe({},Jl,{dataTransfer:0}),g2=pt(f2),x2=fe({},Ts,{relatedTarget:0}),Wc=pt(x2),y2=fe({},ni,{animationName:0,elapsedTime:0,pseudoElement:0}),v2=pt(y2),b2=fe({},ni,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),w2=pt(b2),$2=fe({},ni,{data:0}),Np=pt($2),j2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=C2[e])?!!t[e]:!1}function tm(){return S2}var P2=fe({},Ts,{key:function(e){if(e.key){var t=j2[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_a(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?k2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tm,charCode:function(e){return e.type==="keypress"?_a(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_a(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),T2=pt(P2),A2=fe({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=pt(A2),z2=fe({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tm}),M2=pt(z2),D2=fe({},ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),E2=pt(D2),L2=fe({},Jl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),R2=pt(L2),I2=[9,13,27,32],rm=cr&&"CompositionEvent"in window,Bi=null;cr&&"documentMode"in document&&(Bi=document.documentMode);var F2=cr&&"TextEvent"in window&&!Bi,c1=cr&&(!rm||Bi&&8<Bi&&11>=Bi),Vp=" ",_p=!1;function d1(e,t){switch(e){case"keyup":return I2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function u1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yo=!1;function B2(e,t){switch(e){case"compositionend":return u1(t);case"keypress":return t.which!==32?null:(_p=!0,Vp);case"textInput":return e=t.data,e===Vp&&_p?null:e;default:return null}}function N2(e,t){if(yo)return e==="compositionend"||!rm&&d1(e,t)?(e=l1(),Va=Zh=Rr=null,yo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return c1&&t.locale!=="ko"?null:t.data;default:return null}}var O2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!O2[e.type]:t==="textarea"}function h1(e,t,r,o){Wy(o),t=ul(t,"onChange"),0<t.length&&(r=new em("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var Ni=null,ns=null;function V2(e){j1(e,0)}function Zl(e){var t=wo(e);if(Iy(t))return e}function _2(e,t){if(e==="change")return t}var m1=!1;if(cr){var Uc;if(cr){var Hc="oninput"in document;if(!Hc){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),Hc=typeof Up.oninput=="function"}Uc=Hc}else Uc=!1;m1=Uc&&(!document.documentMode||9<document.documentMode)}function Hp(){Ni&&(Ni.detachEvent("onpropertychange",p1),ns=Ni=null)}function p1(e){if(e.propertyName==="value"&&Zl(ns)){var t=[];h1(t,ns,e,qh(e)),Yy(V2,t)}}function W2(e,t,r){e==="focusin"?(Hp(),Ni=t,ns=r,Ni.attachEvent("onpropertychange",p1)):e==="focusout"&&Hp()}function U2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zl(ns)}function H2(e,t){if(e==="click")return Zl(t)}function G2(e,t){if(e==="input"||e==="change")return Zl(t)}function Y2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:Y2;function os(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var i=r[o];if(!fu.call(t,i)||!It(e[i],t[i]))return!1}return!0}function Gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yp(e,t){var r=Gp(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Gp(r)}}function f1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?f1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function g1(){for(var e=window,t=ol();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ol(e.document)}return t}function nm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function q2(e){var t=g1(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&f1(r.ownerDocument.documentElement,r)){if(o!==null&&nm(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,s=Math.min(o.start,i);o=o.end===void 0?s:Math.min(o.end,i),!e.extend&&s>o&&(i=o,o=s,s=i),i=Yp(r,s);var l=Yp(r,o);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>o?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Q2=cr&&"documentMode"in document&&11>=document.documentMode,vo=null,Lu=null,Oi=null,Ru=!1;function qp(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ru||vo==null||vo!==ol(o)||(o=vo,"selectionStart"in o&&nm(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Oi&&os(Oi,o)||(Oi=o,o=ul(Lu,"onSelect"),0<o.length&&(t=new em("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=vo)))}function Gs(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var bo={animationend:Gs("Animation","AnimationEnd"),animationiteration:Gs("Animation","AnimationIteration"),animationstart:Gs("Animation","AnimationStart"),transitionend:Gs("Transition","TransitionEnd")},Gc={},x1={};cr&&(x1=document.createElement("div").style,"AnimationEvent"in window||(delete bo.animationend.animation,delete bo.animationiteration.animation,delete bo.animationstart.animation),"TransitionEvent"in window||delete bo.transitionend.transition);function ec(e){if(Gc[e])return Gc[e];if(!bo[e])return e;var t=bo[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in x1)return Gc[e]=t[r];return e}var y1=ec("animationend"),v1=ec("animationiteration"),b1=ec("animationstart"),w1=ec("transitionend"),$1=new Map,Qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){$1.set(e,t),Wn(t,[e])}for(var Yc=0;Yc<Qp.length;Yc++){var qc=Qp[Yc],K2=qc.toLowerCase(),X2=qc[0].toUpperCase()+qc.slice(1);tn(K2,"on"+X2)}tn(y1,"onAnimationEnd");tn(v1,"onAnimationIteration");tn(b1,"onAnimationStart");tn("dblclick","onDoubleClick");tn("focusin","onFocus");tn("focusout","onBlur");tn(w1,"onTransitionEnd");No("onMouseEnter",["mouseout","mouseover"]);No("onMouseLeave",["mouseout","mouseover"]);No("onPointerEnter",["pointerout","pointerover"]);No("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ei));function Kp(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,K$(o,t,void 0,e),e.currentTarget=null}function j1(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],i=o.event;o=o.listeners;e:{var s=void 0;if(t)for(var l=o.length-1;0<=l;l--){var c=o[l],d=c.instance,u=c.currentTarget;if(c=c.listener,d!==s&&i.isPropagationStopped())break e;Kp(i,c,u),s=d}else for(l=0;l<o.length;l++){if(c=o[l],d=c.instance,u=c.currentTarget,c=c.listener,d!==s&&i.isPropagationStopped())break e;Kp(i,c,u),s=d}}}if(sl)throw e=zu,sl=!1,zu=null,e}function ie(e,t){var r=t[Ou];r===void 0&&(r=t[Ou]=new Set);var o=e+"__bubble";r.has(o)||(k1(t,e,2,!1),r.add(o))}function Qc(e,t,r){var o=0;t&&(o|=4),k1(r,e,o,t)}var Ys="_reactListening"+Math.random().toString(36).slice(2);function is(e){if(!e[Ys]){e[Ys]=!0,My.forEach(function(r){r!=="selectionchange"&&(J2.has(r)||Qc(r,!1,e),Qc(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ys]||(t[Ys]=!0,Qc("selectionchange",!1,t))}}function k1(e,t,r,o){switch(a1(t)){case 1:var i=h2;break;case 4:i=m2;break;default:i=Jh}r=i.bind(null,t,r,e),i=void 0,!Au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Kc(e,t,r,o,i){var s=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var l=o.tag;if(l===3||l===4){var c=o.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(l===4)for(l=o.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;c!==null;){if(l=kn(c),l===null)return;if(d=l.tag,d===5||d===6){o=s=l;continue e}c=c.parentNode}}o=o.return}Yy(function(){var u=s,h=qh(r),m=[];e:{var p=$1.get(e);if(p!==void 0){var b=em,v=e;switch(e){case"keypress":if(_a(r)===0)break e;case"keydown":case"keyup":b=T2;break;case"focusin":v="focus",b=Wc;break;case"focusout":v="blur",b=Wc;break;case"beforeblur":case"afterblur":b=Wc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=g2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=M2;break;case y1:case v1:case b1:b=v2;break;case w1:b=E2;break;case"scroll":b=p2;break;case"wheel":b=R2;break;case"copy":case"cut":case"paste":b=w2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Op}var $=(t&4)!==0,k=!$&&e==="scroll",y=$?p!==null?p+"Capture":null:p;$=[];for(var x=u,g;x!==null;){g=x;var f=g.stateNode;if(g.tag===5&&f!==null&&(g=f,y!==null&&(f=Zi(x,y),f!=null&&$.push(ss(x,f,g)))),k)break;x=x.return}0<$.length&&(p=new b(p,v,null,r,h),m.push({event:p,listeners:$}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",p&&r!==Pu&&(v=r.relatedTarget||r.fromElement)&&(kn(v)||v[dr]))break e;if((b||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,b?(v=r.relatedTarget||r.toElement,b=u,v=v?kn(v):null,v!==null&&(k=Un(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(b=null,v=u),b!==v)){if($=Bp,f="onMouseLeave",y="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&($=Op,f="onPointerLeave",y="onPointerEnter",x="pointer"),k=b==null?p:wo(b),g=v==null?p:wo(v),p=new $(f,x+"leave",b,r,h),p.target=k,p.relatedTarget=g,f=null,kn(h)===u&&($=new $(y,x+"enter",v,r,h),$.target=g,$.relatedTarget=k,f=$),k=f,b&&v)t:{for($=b,y=v,x=0,g=$;g;g=Qn(g))x++;for(g=0,f=y;f;f=Qn(f))g++;for(;0<x-g;)$=Qn($),x--;for(;0<g-x;)y=Qn(y),g--;for(;x--;){if($===y||y!==null&&$===y.alternate)break t;$=Qn($),y=Qn(y)}$=null}else $=null;b!==null&&Xp(m,p,b,$,!1),v!==null&&k!==null&&Xp(m,k,v,$,!0)}}e:{if(p=u?wo(u):window,b=p.nodeName&&p.nodeName.toLowerCase(),b==="select"||b==="input"&&p.type==="file")var S=_2;else if(Wp(p))if(m1)S=G2;else{S=U2;var C=W2}else(b=p.nodeName)&&b.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=H2);if(S&&(S=S(e,u))){h1(m,S,r,h);break e}C&&C(e,p,u),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&$u(p,"number",p.value)}switch(C=u?wo(u):window,e){case"focusin":(Wp(C)||C.contentEditable==="true")&&(vo=C,Lu=u,Oi=null);break;case"focusout":Oi=Lu=vo=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,qp(m,r,h);break;case"selectionchange":if(Q2)break;case"keydown":case"keyup":qp(m,r,h)}var P;if(rm)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else yo?d1(e,r)&&(w="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(w="onCompositionStart");w&&(c1&&r.locale!=="ko"&&(yo||w!=="onCompositionStart"?w==="onCompositionEnd"&&yo&&(P=l1()):(Rr=h,Zh="value"in Rr?Rr.value:Rr.textContent,yo=!0)),C=ul(u,w),0<C.length&&(w=new Np(w,e,null,r,h),m.push({event:w,listeners:C}),P?w.data=P:(P=u1(r),P!==null&&(w.data=P)))),(P=F2?B2(e,r):N2(e,r))&&(u=ul(u,"onBeforeInput"),0<u.length&&(h=new Np("onBeforeInput","beforeinput",null,r,h),m.push({event:h,listeners:u}),h.data=P))}j1(m,t)})}function ss(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ul(e,t){for(var r=t+"Capture",o=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zi(e,r),s!=null&&o.unshift(ss(e,s,i)),s=Zi(e,t),s!=null&&o.push(ss(e,s,i))),e=e.return}return o}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xp(e,t,r,o,i){for(var s=t._reactName,l=[];r!==null&&r!==o;){var c=r,d=c.alternate,u=c.stateNode;if(d!==null&&d===o)break;c.tag===5&&u!==null&&(c=u,i?(d=Zi(r,s),d!=null&&l.unshift(ss(r,d,c))):i||(d=Zi(r,s),d!=null&&l.push(ss(r,d,c)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var Z2=/\r\n?/g,ej=/\u0000|\uFFFD/g;function Jp(e){return(typeof e=="string"?e:""+e).replace(Z2,`
`).replace(ej,"")}function qs(e,t,r){if(t=Jp(t),Jp(e)!==t&&r)throw Error(L(425))}function hl(){}var Iu=null,Fu=null;function Bu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nu=typeof setTimeout=="function"?setTimeout:void 0,tj=typeof clearTimeout=="function"?clearTimeout:void 0,Zp=typeof Promise=="function"?Promise:void 0,rj=typeof queueMicrotask=="function"?queueMicrotask:typeof Zp<"u"?function(e){return Zp.resolve(null).then(e).catch(nj)}:Nu;function nj(e){setTimeout(function(){throw e})}function Xc(e,t){var r=t,o=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(o===0){e.removeChild(i),rs(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=i}while(r);rs(t)}function Vr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ef(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var oi=Math.random().toString(36).slice(2),Ht="__reactFiber$"+oi,as="__reactProps$"+oi,dr="__reactContainer$"+oi,Ou="__reactEvents$"+oi,oj="__reactListeners$"+oi,ij="__reactHandles$"+oi;function kn(e){var t=e[Ht];if(t)return t;for(var r=e.parentNode;r;){if(t=r[dr]||r[Ht]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ef(e);e!==null;){if(r=e[Ht])return r;e=ef(e)}return t}e=r,r=e.parentNode}return null}function As(e){return e=e[Ht]||e[dr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function tc(e){return e[as]||null}var Vu=[],$o=-1;function rn(e){return{current:e}}function ae(e){0>$o||(e.current=Vu[$o],Vu[$o]=null,$o--)}function te(e,t){$o++,Vu[$o]=e.current,e.current=t}var Xr={},Ue=rn(Xr),tt=rn(!1),Ln=Xr;function Oo(e,t){var r=e.type.contextTypes;if(!r)return Xr;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=t[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function rt(e){return e=e.childContextTypes,e!=null}function ml(){ae(tt),ae(Ue)}function tf(e,t,r){if(Ue.current!==Xr)throw Error(L(168));te(Ue,t),te(tt,r)}function C1(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var i in o)if(!(i in t))throw Error(L(108,W$(e)||"Unknown",i));return fe({},r,o)}function pl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xr,Ln=Ue.current,te(Ue,e),te(tt,tt.current),!0}function rf(e,t,r){var o=e.stateNode;if(!o)throw Error(L(169));r?(e=C1(e,t,Ln),o.__reactInternalMemoizedMergedChildContext=e,ae(tt),ae(Ue),te(Ue,e)):ae(tt),te(tt,r)}var rr=null,rc=!1,Jc=!1;function S1(e){rr===null?rr=[e]:rr.push(e)}function sj(e){rc=!0,S1(e)}function nn(){if(!Jc&&rr!==null){Jc=!0;var e=0,t=Z;try{var r=rr;for(Z=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}rr=null,rc=!1}catch(i){throw rr!==null&&(rr=rr.slice(e+1)),Xy(Qh,nn),i}finally{Z=t,Jc=!1}}return null}var jo=[],ko=0,fl=null,gl=0,yt=[],vt=0,Rn=null,nr=1,or="";function yn(e,t){jo[ko++]=gl,jo[ko++]=fl,fl=e,gl=t}function P1(e,t,r){yt[vt++]=nr,yt[vt++]=or,yt[vt++]=Rn,Rn=e;var o=nr;e=or;var i=32-Dt(o)-1;o&=~(1<<i),r+=1;var s=32-Dt(t)+i;if(30<s){var l=i-i%5;s=(o&(1<<l)-1).toString(32),o>>=l,i-=l,nr=1<<32-Dt(t)+i|r<<i|o,or=s+e}else nr=1<<s|r<<i|o,or=e}function om(e){e.return!==null&&(yn(e,1),P1(e,1,0))}function im(e){for(;e===fl;)fl=jo[--ko],jo[ko]=null,gl=jo[--ko],jo[ko]=null;for(;e===Rn;)Rn=yt[--vt],yt[vt]=null,or=yt[--vt],yt[vt]=null,nr=yt[--vt],yt[vt]=null}var ct=null,lt=null,le=!1,Mt=null;function T1(e,t){var r=bt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function nf(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,lt=Vr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Rn!==null?{id:nr,overflow:or}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=bt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ct=e,lt=null,!0):!1;default:return!1}}function _u(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wu(e){if(le){var t=lt;if(t){var r=t;if(!nf(e,t)){if(_u(e))throw Error(L(418));t=Vr(r.nextSibling);var o=ct;t&&nf(e,t)?T1(o,r):(e.flags=e.flags&-4097|2,le=!1,ct=e)}}else{if(_u(e))throw Error(L(418));e.flags=e.flags&-4097|2,le=!1,ct=e}}}function of(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function Qs(e){if(e!==ct)return!1;if(!le)return of(e),le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bu(e.type,e.memoizedProps)),t&&(t=lt)){if(_u(e))throw A1(),Error(L(418));for(;t;)T1(e,t),t=Vr(t.nextSibling)}if(of(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){lt=Vr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=ct?Vr(e.stateNode.nextSibling):null;return!0}function A1(){for(var e=lt;e;)e=Vr(e.nextSibling)}function Vo(){lt=ct=null,le=!1}function sm(e){Mt===null?Mt=[e]:Mt.push(e)}var aj=yr.ReactCurrentBatchConfig;function mi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(L(309));var o=r.stateNode}if(!o)throw Error(L(147,e));var i=o,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var c=i.refs;l===null?delete c[s]:c[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(L(284));if(!r._owner)throw Error(L(290,e))}return e}function Ks(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sf(e){var t=e._init;return t(e._payload)}function z1(e){function t(y,x){if(e){var g=y.deletions;g===null?(y.deletions=[x],y.flags|=16):g.push(x)}}function r(y,x){if(!e)return null;for(;x!==null;)t(y,x),x=x.sibling;return null}function o(y,x){for(y=new Map;x!==null;)x.key!==null?y.set(x.key,x):y.set(x.index,x),x=x.sibling;return y}function i(y,x){return y=Hr(y,x),y.index=0,y.sibling=null,y}function s(y,x,g){return y.index=g,e?(g=y.alternate,g!==null?(g=g.index,g<x?(y.flags|=2,x):g):(y.flags|=2,x)):(y.flags|=1048576,x)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function c(y,x,g,f){return x===null||x.tag!==6?(x=id(g,y.mode,f),x.return=y,x):(x=i(x,g),x.return=y,x)}function d(y,x,g,f){var S=g.type;return S===xo?h(y,x,g.props.children,f,g.key):x!==null&&(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===zr&&sf(S)===x.type)?(f=i(x,g.props),f.ref=mi(y,x,g),f.return=y,f):(f=Qa(g.type,g.key,g.props,null,y.mode,f),f.ref=mi(y,x,g),f.return=y,f)}function u(y,x,g,f){return x===null||x.tag!==4||x.stateNode.containerInfo!==g.containerInfo||x.stateNode.implementation!==g.implementation?(x=sd(g,y.mode,f),x.return=y,x):(x=i(x,g.children||[]),x.return=y,x)}function h(y,x,g,f,S){return x===null||x.tag!==7?(x=zn(g,y.mode,f,S),x.return=y,x):(x=i(x,g),x.return=y,x)}function m(y,x,g){if(typeof x=="string"&&x!==""||typeof x=="number")return x=id(""+x,y.mode,g),x.return=y,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ns:return g=Qa(x.type,x.key,x.props,null,y.mode,g),g.ref=mi(y,null,x),g.return=y,g;case go:return x=sd(x,y.mode,g),x.return=y,x;case zr:var f=x._init;return m(y,f(x._payload),g)}if(Mi(x)||li(x))return x=zn(x,y.mode,g,null),x.return=y,x;Ks(y,x)}return null}function p(y,x,g,f){var S=x!==null?x.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:c(y,x,""+g,f);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ns:return g.key===S?d(y,x,g,f):null;case go:return g.key===S?u(y,x,g,f):null;case zr:return S=g._init,p(y,x,S(g._payload),f)}if(Mi(g)||li(g))return S!==null?null:h(y,x,g,f,null);Ks(y,g)}return null}function b(y,x,g,f,S){if(typeof f=="string"&&f!==""||typeof f=="number")return y=y.get(g)||null,c(x,y,""+f,S);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ns:return y=y.get(f.key===null?g:f.key)||null,d(x,y,f,S);case go:return y=y.get(f.key===null?g:f.key)||null,u(x,y,f,S);case zr:var C=f._init;return b(y,x,g,C(f._payload),S)}if(Mi(f)||li(f))return y=y.get(g)||null,h(x,y,f,S,null);Ks(x,f)}return null}function v(y,x,g,f){for(var S=null,C=null,P=x,w=x=0,A=null;P!==null&&w<g.length;w++){P.index>w?(A=P,P=null):A=P.sibling;var T=p(y,P,g[w],f);if(T===null){P===null&&(P=A);break}e&&P&&T.alternate===null&&t(y,P),x=s(T,x,w),C===null?S=T:C.sibling=T,C=T,P=A}if(w===g.length)return r(y,P),le&&yn(y,w),S;if(P===null){for(;w<g.length;w++)P=m(y,g[w],f),P!==null&&(x=s(P,x,w),C===null?S=P:C.sibling=P,C=P);return le&&yn(y,w),S}for(P=o(y,P);w<g.length;w++)A=b(P,y,w,g[w],f),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?w:A.key),x=s(A,x,w),C===null?S=A:C.sibling=A,C=A);return e&&P.forEach(function(H){return t(y,H)}),le&&yn(y,w),S}function $(y,x,g,f){var S=li(g);if(typeof S!="function")throw Error(L(150));if(g=S.call(g),g==null)throw Error(L(151));for(var C=S=null,P=x,w=x=0,A=null,T=g.next();P!==null&&!T.done;w++,T=g.next()){P.index>w?(A=P,P=null):A=P.sibling;var H=p(y,P,T.value,f);if(H===null){P===null&&(P=A);break}e&&P&&H.alternate===null&&t(y,P),x=s(H,x,w),C===null?S=H:C.sibling=H,C=H,P=A}if(T.done)return r(y,P),le&&yn(y,w),S;if(P===null){for(;!T.done;w++,T=g.next())T=m(y,T.value,f),T!==null&&(x=s(T,x,w),C===null?S=T:C.sibling=T,C=T);return le&&yn(y,w),S}for(P=o(y,P);!T.done;w++,T=g.next())T=b(P,y,w,T.value,f),T!==null&&(e&&T.alternate!==null&&P.delete(T.key===null?w:T.key),x=s(T,x,w),C===null?S=T:C.sibling=T,C=T);return e&&P.forEach(function(G){return t(y,G)}),le&&yn(y,w),S}function k(y,x,g,f){if(typeof g=="object"&&g!==null&&g.type===xo&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ns:e:{for(var S=g.key,C=x;C!==null;){if(C.key===S){if(S=g.type,S===xo){if(C.tag===7){r(y,C.sibling),x=i(C,g.props.children),x.return=y,y=x;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===zr&&sf(S)===C.type){r(y,C.sibling),x=i(C,g.props),x.ref=mi(y,C,g),x.return=y,y=x;break e}r(y,C);break}else t(y,C);C=C.sibling}g.type===xo?(x=zn(g.props.children,y.mode,f,g.key),x.return=y,y=x):(f=Qa(g.type,g.key,g.props,null,y.mode,f),f.ref=mi(y,x,g),f.return=y,y=f)}return l(y);case go:e:{for(C=g.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===g.containerInfo&&x.stateNode.implementation===g.implementation){r(y,x.sibling),x=i(x,g.children||[]),x.return=y,y=x;break e}else{r(y,x);break}else t(y,x);x=x.sibling}x=sd(g,y.mode,f),x.return=y,y=x}return l(y);case zr:return C=g._init,k(y,x,C(g._payload),f)}if(Mi(g))return v(y,x,g,f);if(li(g))return $(y,x,g,f);Ks(y,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,x!==null&&x.tag===6?(r(y,x.sibling),x=i(x,g),x.return=y,y=x):(r(y,x),x=id(g,y.mode,f),x.return=y,y=x),l(y)):r(y,x)}return k}var _o=z1(!0),M1=z1(!1),xl=rn(null),yl=null,Co=null,am=null;function lm(){am=Co=yl=null}function cm(e){var t=xl.current;ae(xl),e._currentValue=t}function Uu(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function Fo(e,t){yl=e,am=Co=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(et=!0),e.firstContext=null)}function jt(e){var t=e._currentValue;if(am!==e)if(e={context:e,memoizedValue:t,next:null},Co===null){if(yl===null)throw Error(L(308));Co=e,yl.dependencies={lanes:0,firstContext:e}}else Co=Co.next=e;return t}var Cn=null;function dm(e){Cn===null?Cn=[e]:Cn.push(e)}function D1(e,t,r,o){var i=t.interleaved;return i===null?(r.next=r,dm(t)):(r.next=i.next,i.next=r),t.interleaved=r,ur(e,o)}function ur(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Mr=!1;function um(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function E1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _r(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,K&2){var i=o.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),o.pending=t,ur(e,r)}return i=o.interleaved,i===null?(t.next=t,dm(o)):(t.next=i.next,i.next=t),o.interleaved=t,ur(e,r)}function Wa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Kh(e,r)}}function af(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=l:s=s.next=l,r=r.next}while(r!==null);s===null?i=s=t:s=s.next=t}else i=s=t;r={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function vl(e,t,r,o){var i=e.updateQueue;Mr=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var d=c,u=d.next;d.next=null,l===null?s=u:l.next=u,l=d;var h=e.alternate;h!==null&&(h=h.updateQueue,c=h.lastBaseUpdate,c!==l&&(c===null?h.firstBaseUpdate=u:c.next=u,h.lastBaseUpdate=d))}if(s!==null){var m=i.baseState;l=0,h=u=d=null,c=s;do{var p=c.lane,b=c.eventTime;if((o&p)===p){h!==null&&(h=h.next={eventTime:b,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var v=e,$=c;switch(p=t,b=r,$.tag){case 1:if(v=$.payload,typeof v=="function"){m=v.call(b,m,p);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=$.payload,p=typeof v=="function"?v.call(b,m,p):v,p==null)break e;m=fe({},m,p);break e;case 2:Mr=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[c]:p.push(c))}else b={eventTime:b,lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},h===null?(u=h=b,d=m):h=h.next=b,l|=p;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;p=c,c=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(d=m),i.baseState=d,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Fn|=l,e.lanes=l,e.memoizedState=m}}function lf(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],i=o.callback;if(i!==null){if(o.callback=null,o=r,typeof i!="function")throw Error(L(191,i));i.call(o)}}}var zs={},Yt=rn(zs),ls=rn(zs),cs=rn(zs);function Sn(e){if(e===zs)throw Error(L(174));return e}function hm(e,t){switch(te(cs,t),te(ls,e),te(Yt,zs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ku(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ku(t,e)}ae(Yt),te(Yt,t)}function Wo(){ae(Yt),ae(ls),ae(cs)}function L1(e){Sn(cs.current);var t=Sn(Yt.current),r=ku(t,e.type);t!==r&&(te(ls,e),te(Yt,r))}function mm(e){ls.current===e&&(ae(Yt),ae(ls))}var de=rn(0);function bl(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zc=[];function pm(){for(var e=0;e<Zc.length;e++)Zc[e]._workInProgressVersionPrimary=null;Zc.length=0}var Ua=yr.ReactCurrentDispatcher,ed=yr.ReactCurrentBatchConfig,In=0,me=null,Pe=null,Me=null,wl=!1,Vi=!1,ds=0,lj=0;function Oe(){throw Error(L(321))}function fm(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!It(e[r],t[r]))return!1;return!0}function gm(e,t,r,o,i,s){if(In=s,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ua.current=e===null||e.memoizedState===null?hj:mj,e=r(o,i),Vi){s=0;do{if(Vi=!1,ds=0,25<=s)throw Error(L(301));s+=1,Me=Pe=null,t.updateQueue=null,Ua.current=pj,e=r(o,i)}while(Vi)}if(Ua.current=$l,t=Pe!==null&&Pe.next!==null,In=0,Me=Pe=me=null,wl=!1,t)throw Error(L(300));return e}function xm(){var e=ds!==0;return ds=0,e}function Wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?me.memoizedState=Me=e:Me=Me.next=e,Me}function kt(){if(Pe===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Me===null?me.memoizedState:Me.next;if(t!==null)Me=t,Pe=e;else{if(e===null)throw Error(L(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Me===null?me.memoizedState=Me=e:Me=Me.next=e}return Me}function us(e,t){return typeof t=="function"?t(e):t}function td(e){var t=kt(),r=t.queue;if(r===null)throw Error(L(311));r.lastRenderedReducer=e;var o=Pe,i=o.baseQueue,s=r.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}o.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,o=o.baseState;var c=l=null,d=null,u=s;do{var h=u.lane;if((In&h)===h)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),o=u.hasEagerState?u.eagerState:e(o,u.action);else{var m={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(c=d=m,l=o):d=d.next=m,me.lanes|=h,Fn|=h}u=u.next}while(u!==null&&u!==s);d===null?l=o:d.next=c,It(o,t.memoizedState)||(et=!0),t.memoizedState=o,t.baseState=l,t.baseQueue=d,r.lastRenderedState=o}if(e=r.interleaved,e!==null){i=e;do s=i.lane,me.lanes|=s,Fn|=s,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function rd(e){var t=kt(),r=t.queue;if(r===null)throw Error(L(311));r.lastRenderedReducer=e;var o=r.dispatch,i=r.pending,s=t.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);It(s,t.memoizedState)||(et=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,o]}function R1(){}function I1(e,t){var r=me,o=kt(),i=t(),s=!It(o.memoizedState,i);if(s&&(o.memoizedState=i,et=!0),o=o.queue,ym(N1.bind(null,r,o,e),[e]),o.getSnapshot!==t||s||Me!==null&&Me.memoizedState.tag&1){if(r.flags|=2048,hs(9,B1.bind(null,r,o,i,t),void 0,null),Le===null)throw Error(L(349));In&30||F1(r,t,i)}return i}function F1(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function B1(e,t,r,o){t.value=r,t.getSnapshot=o,O1(t)&&V1(e)}function N1(e,t,r){return r(function(){O1(t)&&V1(e)})}function O1(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!It(e,r)}catch{return!0}}function V1(e){var t=ur(e,1);t!==null&&Et(t,e,1,-1)}function cf(e){var t=Wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:e},t.queue=e,e=e.dispatch=uj.bind(null,me,e),[t.memoizedState,e]}function hs(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function _1(){return kt().memoizedState}function Ha(e,t,r,o){var i=Wt();me.flags|=e,i.memoizedState=hs(1|t,r,void 0,o===void 0?null:o)}function nc(e,t,r,o){var i=kt();o=o===void 0?null:o;var s=void 0;if(Pe!==null){var l=Pe.memoizedState;if(s=l.destroy,o!==null&&fm(o,l.deps)){i.memoizedState=hs(t,r,s,o);return}}me.flags|=e,i.memoizedState=hs(1|t,r,s,o)}function df(e,t){return Ha(8390656,8,e,t)}function ym(e,t){return nc(2048,8,e,t)}function W1(e,t){return nc(4,2,e,t)}function U1(e,t){return nc(4,4,e,t)}function H1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function G1(e,t,r){return r=r!=null?r.concat([e]):null,nc(4,4,H1.bind(null,t,e),r)}function vm(){}function Y1(e,t){var r=kt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&fm(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function q1(e,t){var r=kt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&fm(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function Q1(e,t,r){return In&21?(It(r,t)||(r=e1(),me.lanes|=r,Fn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=r)}function cj(e,t){var r=Z;Z=r!==0&&4>r?r:4,e(!0);var o=ed.transition;ed.transition={};try{e(!1),t()}finally{Z=r,ed.transition=o}}function K1(){return kt().memoizedState}function dj(e,t,r){var o=Ur(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},X1(e))J1(t,r);else if(r=D1(e,t,r,o),r!==null){var i=Qe();Et(r,e,o,i),Z1(r,t,o)}}function uj(e,t,r){var o=Ur(e),i={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(X1(e))J1(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,c=s(l,r);if(i.hasEagerState=!0,i.eagerState=c,It(c,l)){var d=t.interleaved;d===null?(i.next=i,dm(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}r=D1(e,t,i,o),r!==null&&(i=Qe(),Et(r,e,o,i),Z1(r,t,o))}}function X1(e){var t=e.alternate;return e===me||t!==null&&t===me}function J1(e,t){Vi=wl=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Z1(e,t,r){if(r&4194240){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Kh(e,r)}}var $l={readContext:jt,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},hj={readContext:jt,useCallback:function(e,t){return Wt().memoizedState=[e,t===void 0?null:t],e},useContext:jt,useEffect:df,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Ha(4194308,4,H1.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Ha(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ha(4,2,e,t)},useMemo:function(e,t){var r=Wt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=Wt();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=dj.bind(null,me,e),[o.memoizedState,e]},useRef:function(e){var t=Wt();return e={current:e},t.memoizedState=e},useState:cf,useDebugValue:vm,useDeferredValue:function(e){return Wt().memoizedState=e},useTransition:function(){var e=cf(!1),t=e[0];return e=cj.bind(null,e[1]),Wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=me,i=Wt();if(le){if(r===void 0)throw Error(L(407));r=r()}else{if(r=t(),Le===null)throw Error(L(349));In&30||F1(o,t,r)}i.memoizedState=r;var s={value:r,getSnapshot:t};return i.queue=s,df(N1.bind(null,o,s,e),[e]),o.flags|=2048,hs(9,B1.bind(null,o,s,r,t),void 0,null),r},useId:function(){var e=Wt(),t=Le.identifierPrefix;if(le){var r=or,o=nr;r=(o&~(1<<32-Dt(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=ds++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=lj++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},mj={readContext:jt,useCallback:Y1,useContext:jt,useEffect:ym,useImperativeHandle:G1,useInsertionEffect:W1,useLayoutEffect:U1,useMemo:q1,useReducer:td,useRef:_1,useState:function(){return td(us)},useDebugValue:vm,useDeferredValue:function(e){var t=kt();return Q1(t,Pe.memoizedState,e)},useTransition:function(){var e=td(us)[0],t=kt().memoizedState;return[e,t]},useMutableSource:R1,useSyncExternalStore:I1,useId:K1,unstable_isNewReconciler:!1},pj={readContext:jt,useCallback:Y1,useContext:jt,useEffect:ym,useImperativeHandle:G1,useInsertionEffect:W1,useLayoutEffect:U1,useMemo:q1,useReducer:rd,useRef:_1,useState:function(){return rd(us)},useDebugValue:vm,useDeferredValue:function(e){var t=kt();return Pe===null?t.memoizedState=e:Q1(t,Pe.memoizedState,e)},useTransition:function(){var e=rd(us)[0],t=kt().memoizedState;return[e,t]},useMutableSource:R1,useSyncExternalStore:I1,useId:K1,unstable_isNewReconciler:!1};function At(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Hu(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:fe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var oc={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=Qe(),i=Ur(e),s=sr(o,i);s.payload=t,r!=null&&(s.callback=r),t=_r(e,s,i),t!==null&&(Et(t,e,i,o),Wa(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=Qe(),i=Ur(e),s=sr(o,i);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=_r(e,s,i),t!==null&&(Et(t,e,i,o),Wa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Qe(),o=Ur(e),i=sr(r,o);i.tag=2,t!=null&&(i.callback=t),t=_r(e,i,o),t!==null&&(Et(t,e,o,r),Wa(t,e,o))}};function uf(e,t,r,o,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,l):t.prototype&&t.prototype.isPureReactComponent?!os(r,o)||!os(i,s):!0}function ev(e,t,r){var o=!1,i=Xr,s=t.contextType;return typeof s=="object"&&s!==null?s=jt(s):(i=rt(t)?Ln:Ue.current,o=t.contextTypes,s=(o=o!=null)?Oo(e,i):Xr),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=oc,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function hf(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&oc.enqueueReplaceState(t,t.state,null)}function Gu(e,t,r,o){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},um(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=jt(s):(s=rt(t)?Ln:Ue.current,i.context=Oo(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Hu(e,t,s,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&oc.enqueueReplaceState(i,i.state,null),vl(e,r,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Uo(e,t){try{var r="",o=t;do r+=_$(o),o=o.return;while(o);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function nd(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Yu(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var fj=typeof WeakMap=="function"?WeakMap:Map;function tv(e,t,r){r=sr(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){kl||(kl=!0,nh=o),Yu(e,t)},r}function rv(e,t,r){r=sr(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=t.value;r.payload=function(){return o(i)},r.callback=function(){Yu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){Yu(e,t),typeof o!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function mf(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new fj;var i=new Set;o.set(t,i)}else i=o.get(t),i===void 0&&(i=new Set,o.set(t,i));i.has(r)||(i.add(r),e=Aj.bind(null,e,t,r),t.then(e,e))}function pf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ff(e,t,r,o,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=sr(-1,1),t.tag=2,_r(r,t,1))),r.lanes|=1),e)}var gj=yr.ReactCurrentOwner,et=!1;function qe(e,t,r,o){t.child=e===null?M1(t,null,r,o):_o(t,e.child,r,o)}function gf(e,t,r,o,i){r=r.render;var s=t.ref;return Fo(t,i),o=gm(e,t,r,o,s,i),r=xm(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,hr(e,t,i)):(le&&r&&om(t),t.flags|=1,qe(e,t,o,i),t.child)}function xf(e,t,r,o,i){if(e===null){var s=r.type;return typeof s=="function"&&!Pm(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,nv(e,t,s,o,i)):(e=Qa(r.type,null,o,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(r=r.compare,r=r!==null?r:os,r(l,o)&&e.ref===t.ref)return hr(e,t,i)}return t.flags|=1,e=Hr(s,o),e.ref=t.ref,e.return=t,t.child=e}function nv(e,t,r,o,i){if(e!==null){var s=e.memoizedProps;if(os(s,o)&&e.ref===t.ref)if(et=!1,t.pendingProps=o=s,(e.lanes&i)!==0)e.flags&131072&&(et=!0);else return t.lanes=e.lanes,hr(e,t,i)}return qu(e,t,r,o,i)}function ov(e,t,r){var o=t.pendingProps,i=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Po,at),at|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Po,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:r,te(Po,at),at|=o}else s!==null?(o=s.baseLanes|r,t.memoizedState=null):o=r,te(Po,at),at|=o;return qe(e,t,i,r),t.child}function iv(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function qu(e,t,r,o,i){var s=rt(r)?Ln:Ue.current;return s=Oo(t,s),Fo(t,i),r=gm(e,t,r,o,s,i),o=xm(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,hr(e,t,i)):(le&&o&&om(t),t.flags|=1,qe(e,t,r,i),t.child)}function yf(e,t,r,o,i){if(rt(r)){var s=!0;pl(t)}else s=!1;if(Fo(t,i),t.stateNode===null)Ga(e,t),ev(t,r,o),Gu(t,r,o,i),o=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var d=l.context,u=r.contextType;typeof u=="object"&&u!==null?u=jt(u):(u=rt(r)?Ln:Ue.current,u=Oo(t,u));var h=r.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==o||d!==u)&&hf(t,l,o,u),Mr=!1;var p=t.memoizedState;l.state=p,vl(t,o,l,i),d=t.memoizedState,c!==o||p!==d||tt.current||Mr?(typeof h=="function"&&(Hu(t,r,h,o),d=t.memoizedState),(c=Mr||uf(t,r,c,o,p,d,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=d),l.props=o,l.state=d,l.context=u,o=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{l=t.stateNode,E1(e,t),c=t.memoizedProps,u=t.type===t.elementType?c:At(t.type,c),l.props=u,m=t.pendingProps,p=l.context,d=r.contextType,typeof d=="object"&&d!==null?d=jt(d):(d=rt(r)?Ln:Ue.current,d=Oo(t,d));var b=r.getDerivedStateFromProps;(h=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==m||p!==d)&&hf(t,l,o,d),Mr=!1,p=t.memoizedState,l.state=p,vl(t,o,l,i);var v=t.memoizedState;c!==m||p!==v||tt.current||Mr?(typeof b=="function"&&(Hu(t,r,b,o),v=t.memoizedState),(u=Mr||uf(t,r,u,o,p,v,d)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,v,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,v,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=v),l.props=o,l.state=v,l.context=d,o=u):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),o=!1)}return Qu(e,t,r,o,s,i)}function Qu(e,t,r,o,i,s){iv(e,t);var l=(t.flags&128)!==0;if(!o&&!l)return i&&rf(t,r,!1),hr(e,t,s);o=t.stateNode,gj.current=t;var c=l&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&l?(t.child=_o(t,e.child,null,s),t.child=_o(t,null,c,s)):qe(e,t,c,s),t.memoizedState=o.state,i&&rf(t,r,!0),t.child}function sv(e){var t=e.stateNode;t.pendingContext?tf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tf(e,t.context,!1),hm(e,t.containerInfo)}function vf(e,t,r,o,i){return Vo(),sm(i),t.flags|=256,qe(e,t,r,o),t.child}var Ku={dehydrated:null,treeContext:null,retryLane:0};function Xu(e){return{baseLanes:e,cachePool:null,transitions:null}}function av(e,t,r){var o=t.pendingProps,i=de.current,s=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),te(de,i&1),e===null)return Wu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=o.children,e=o.fallback,s?(o=t.mode,s=t.child,l={mode:"hidden",children:l},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=ac(l,o,0,null),e=zn(e,o,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Xu(r),t.memoizedState=Ku,e):bm(t,l));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return xj(e,t,l,o,c,i,r);if(s){s=o.fallback,l=t.mode,i=e.child,c=i.sibling;var d={mode:"hidden",children:o.children};return!(l&1)&&t.child!==i?(o=t.child,o.childLanes=0,o.pendingProps=d,t.deletions=null):(o=Hr(i,d),o.subtreeFlags=i.subtreeFlags&14680064),c!==null?s=Hr(c,s):(s=zn(s,l,r,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,l=e.child.memoizedState,l=l===null?Xu(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~r,t.memoizedState=Ku,o}return s=e.child,e=s.sibling,o=Hr(s,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function bm(e,t){return t=ac({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Xs(e,t,r,o){return o!==null&&sm(o),_o(t,e.child,null,r),e=bm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xj(e,t,r,o,i,s,l){if(r)return t.flags&256?(t.flags&=-257,o=nd(Error(L(422))),Xs(e,t,l,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=o.fallback,i=t.mode,o=ac({mode:"visible",children:o.children},i,0,null),s=zn(s,i,l,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,t.mode&1&&_o(t,e.child,null,l),t.child.memoizedState=Xu(l),t.memoizedState=Ku,s);if(!(t.mode&1))return Xs(e,t,l,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var c=o.dgst;return o=c,s=Error(L(419)),o=nd(s,o,void 0),Xs(e,t,l,o)}if(c=(l&e.childLanes)!==0,et||c){if(o=Le,o!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ur(e,i),Et(o,e,i,-1))}return Sm(),o=nd(Error(L(421))),Xs(e,t,l,o)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=zj.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,lt=Vr(i.nextSibling),ct=t,le=!0,Mt=null,e!==null&&(yt[vt++]=nr,yt[vt++]=or,yt[vt++]=Rn,nr=e.id,or=e.overflow,Rn=t),t=bm(t,o.children),t.flags|=4096,t)}function bf(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Uu(e.return,t,r)}function od(e,t,r,o,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=r,s.tailMode=i)}function lv(e,t,r){var o=t.pendingProps,i=o.revealOrder,s=o.tail;if(qe(e,t,o.children,r),o=de.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bf(e,r,t);else if(e.tag===19)bf(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(te(de,o),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&bl(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),od(t,!1,i,r,s);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bl(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}od(t,!0,r,null,s);break;case"together":od(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ga(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function hr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,r=Hr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Hr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function yj(e,t,r){switch(t.tag){case 3:sv(t),Vo();break;case 5:L1(t);break;case 1:rt(t.type)&&pl(t);break;case 4:hm(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,i=t.memoizedProps.value;te(xl,o._currentValue),o._currentValue=i;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(te(de,de.current&1),t.flags|=128,null):r&t.child.childLanes?av(e,t,r):(te(de,de.current&1),e=hr(e,t,r),e!==null?e.sibling:null);te(de,de.current&1);break;case 19:if(o=(r&t.childLanes)!==0,e.flags&128){if(o)return lv(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(de,de.current),o)break;return null;case 22:case 23:return t.lanes=0,ov(e,t,r)}return hr(e,t,r)}var cv,Ju,dv,uv;cv=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ju=function(){};dv=function(e,t,r,o){var i=e.memoizedProps;if(i!==o){e=t.stateNode,Sn(Yt.current);var s=null;switch(r){case"input":i=bu(e,i),o=bu(e,o),s=[];break;case"select":i=fe({},i,{value:void 0}),o=fe({},o,{value:void 0}),s=[];break;case"textarea":i=ju(e,i),o=ju(e,o),s=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=hl)}Cu(r,o);var l;r=null;for(u in i)if(!o.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var c=i[u];for(l in c)c.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in o){var d=o[u];if(c=i!=null?i[u]:void 0,o.hasOwnProperty(u)&&d!==c&&(d!=null||c!=null))if(u==="style")if(c){for(l in c)!c.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in d)d.hasOwnProperty(l)&&c[l]!==d[l]&&(r||(r={}),r[l]=d[l])}else r||(s||(s=[]),s.push(u,r)),r=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(s=s||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xi.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&ie("scroll",e),s||c===d||(s=[])):(s=s||[]).push(u,d))}r&&(s=s||[]).push("style",r);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};uv=function(e,t,r,o){r!==o&&(t.flags|=4)};function pi(e,t){if(!le)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function vj(e,t,r){var o=t.pendingProps;switch(im(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return rt(t.type)&&ml(),Ve(t),null;case 3:return o=t.stateNode,Wo(),ae(tt),ae(Ue),pm(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Qs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Mt!==null&&(sh(Mt),Mt=null))),Ju(e,t),Ve(t),null;case 5:mm(t);var i=Sn(cs.current);if(r=t.type,e!==null&&t.stateNode!=null)dv(e,t,r,o,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(L(166));return Ve(t),null}if(e=Sn(Yt.current),Qs(t)){o=t.stateNode,r=t.type;var s=t.memoizedProps;switch(o[Ht]=t,o[as]=s,e=(t.mode&1)!==0,r){case"dialog":ie("cancel",o),ie("close",o);break;case"iframe":case"object":case"embed":ie("load",o);break;case"video":case"audio":for(i=0;i<Ei.length;i++)ie(Ei[i],o);break;case"source":ie("error",o);break;case"img":case"image":case"link":ie("error",o),ie("load",o);break;case"details":ie("toggle",o);break;case"input":Tp(o,s),ie("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},ie("invalid",o);break;case"textarea":zp(o,s),ie("invalid",o)}Cu(r,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var c=s[l];l==="children"?typeof c=="string"?o.textContent!==c&&(s.suppressHydrationWarning!==!0&&qs(o.textContent,c,e),i=["children",c]):typeof c=="number"&&o.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&qs(o.textContent,c,e),i=["children",""+c]):Xi.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&ie("scroll",o)}switch(r){case"input":Os(o),Ap(o,s,!0);break;case"textarea":Os(o),Mp(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=hl)}o=i,t.updateQueue=o,o!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ny(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=l.createElement(r,{is:o.is}):(e=l.createElement(r),r==="select"&&(l=e,o.multiple?l.multiple=!0:o.size&&(l.size=o.size))):e=l.createElementNS(e,r),e[Ht]=t,e[as]=o,cv(e,t,!1,!1),t.stateNode=e;e:{switch(l=Su(r,o),r){case"dialog":ie("cancel",e),ie("close",e),i=o;break;case"iframe":case"object":case"embed":ie("load",e),i=o;break;case"video":case"audio":for(i=0;i<Ei.length;i++)ie(Ei[i],e);i=o;break;case"source":ie("error",e),i=o;break;case"img":case"image":case"link":ie("error",e),ie("load",e),i=o;break;case"details":ie("toggle",e),i=o;break;case"input":Tp(e,o),i=bu(e,o),ie("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=fe({},o,{value:void 0}),ie("invalid",e);break;case"textarea":zp(e,o),i=ju(e,o),ie("invalid",e);break;default:i=o}Cu(r,i),c=i;for(s in c)if(c.hasOwnProperty(s)){var d=c[s];s==="style"?_y(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Oy(e,d)):s==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&Ji(e,d):typeof d=="number"&&Ji(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xi.hasOwnProperty(s)?d!=null&&s==="onScroll"&&ie("scroll",e):d!=null&&Uh(e,s,d,l))}switch(r){case"input":Os(e),Ap(e,o,!1);break;case"textarea":Os(e),Mp(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Kr(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?Eo(e,!!o.multiple,s,!1):o.defaultValue!=null&&Eo(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=hl)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ve(t),null;case 6:if(e&&t.stateNode!=null)uv(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(L(166));if(r=Sn(cs.current),Sn(Yt.current),Qs(t)){if(o=t.stateNode,r=t.memoizedProps,o[Ht]=t,(s=o.nodeValue!==r)&&(e=ct,e!==null))switch(e.tag){case 3:qs(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qs(o.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[Ht]=t,t.stateNode=o}return Ve(t),null;case 13:if(ae(de),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(le&&lt!==null&&t.mode&1&&!(t.flags&128))A1(),Vo(),t.flags|=98560,s=!1;else if(s=Qs(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(L(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[Ht]=t}else Vo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ve(t),s=!1}else Mt!==null&&(sh(Mt),Mt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||de.current&1?Te===0&&(Te=3):Sm())),t.updateQueue!==null&&(t.flags|=4),Ve(t),null);case 4:return Wo(),Ju(e,t),e===null&&is(t.stateNode.containerInfo),Ve(t),null;case 10:return cm(t.type._context),Ve(t),null;case 17:return rt(t.type)&&ml(),Ve(t),null;case 19:if(ae(de),s=t.memoizedState,s===null)return Ve(t),null;if(o=(t.flags&128)!==0,l=s.rendering,l===null)if(o)pi(s,!1);else{if(Te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=bl(e),l!==null){for(t.flags|=128,pi(s,!1),o=l.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)s=r,e=o,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return te(de,de.current&1|2),t.child}e=e.sibling}s.tail!==null&&be()>Ho&&(t.flags|=128,o=!0,pi(s,!1),t.lanes=4194304)}else{if(!o)if(e=bl(l),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),pi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!le)return Ve(t),null}else 2*be()-s.renderingStartTime>Ho&&r!==1073741824&&(t.flags|=128,o=!0,pi(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(r=s.last,r!==null?r.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=be(),t.sibling=null,r=de.current,te(de,o?r&1|2:r&1),t):(Ve(t),null);case 22:case 23:return Cm(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?at&1073741824&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function bj(e,t){switch(im(t),t.tag){case 1:return rt(t.type)&&ml(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wo(),ae(tt),ae(Ue),pm(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mm(t),null;case 13:if(ae(de),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Vo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(de),null;case 4:return Wo(),null;case 10:return cm(t.type._context),null;case 22:case 23:return Cm(),null;case 24:return null;default:return null}}var Js=!1,We=!1,wj=typeof WeakSet=="function"?WeakSet:Set,O=null;function So(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){ye(e,t,o)}else r.current=null}function Zu(e,t,r){try{r()}catch(o){ye(e,t,o)}}var wf=!1;function $j(e,t){if(Iu=cl,e=g1(),nm(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var i=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var l=0,c=-1,d=-1,u=0,h=0,m=e,p=null;t:for(;;){for(var b;m!==r||i!==0&&m.nodeType!==3||(c=l+i),m!==s||o!==0&&m.nodeType!==3||(d=l+o),m.nodeType===3&&(l+=m.nodeValue.length),(b=m.firstChild)!==null;)p=m,m=b;for(;;){if(m===e)break t;if(p===r&&++u===i&&(c=l),p===s&&++h===o&&(d=l),(b=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=b}r=c===-1||d===-1?null:{start:c,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(Fu={focusedElem:e,selectionRange:r},cl=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var $=v.memoizedProps,k=v.memoizedState,y=t.stateNode,x=y.getSnapshotBeforeUpdate(t.elementType===t.type?$:At(t.type,$),k);y.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(f){ye(t,t.return,f)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return v=wf,wf=!1,v}function _i(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zu(t,r,s)}i=i.next}while(i!==o)}}function ic(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function eh(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function hv(e){var t=e.alternate;t!==null&&(e.alternate=null,hv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ht],delete t[as],delete t[Ou],delete t[oj],delete t[ij])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mv(e){return e.tag===5||e.tag===3||e.tag===4}function $f(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function th(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=hl));else if(o!==4&&(e=e.child,e!==null))for(th(e,t,r),e=e.sibling;e!==null;)th(e,t,r),e=e.sibling}function rh(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(rh(e,t,r),e=e.sibling;e!==null;)rh(e,t,r),e=e.sibling}var Re=null,zt=!1;function wr(e,t,r){for(r=r.child;r!==null;)pv(e,t,r),r=r.sibling}function pv(e,t,r){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Xl,r)}catch{}switch(r.tag){case 5:We||So(r,t);case 6:var o=Re,i=zt;Re=null,wr(e,t,r),Re=o,zt=i,Re!==null&&(zt?(e=Re,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Re.removeChild(r.stateNode));break;case 18:Re!==null&&(zt?(e=Re,r=r.stateNode,e.nodeType===8?Xc(e.parentNode,r):e.nodeType===1&&Xc(e,r),rs(e)):Xc(Re,r.stateNode));break;case 4:o=Re,i=zt,Re=r.stateNode.containerInfo,zt=!0,wr(e,t,r),Re=o,zt=i;break;case 0:case 11:case 14:case 15:if(!We&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&Zu(r,t,l),i=i.next}while(i!==o)}wr(e,t,r);break;case 1:if(!We&&(So(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(c){ye(r,t,c)}wr(e,t,r);break;case 21:wr(e,t,r);break;case 22:r.mode&1?(We=(o=We)||r.memoizedState!==null,wr(e,t,r),We=o):wr(e,t,r);break;default:wr(e,t,r)}}function jf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new wj),t.forEach(function(o){var i=Mj.bind(null,e,o);r.has(o)||(r.add(o),o.then(i,i))})}}function Tt(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var i=r[o];try{var s=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:Re=c.stateNode,zt=!1;break e;case 3:Re=c.stateNode.containerInfo,zt=!0;break e;case 4:Re=c.stateNode.containerInfo,zt=!0;break e}c=c.return}if(Re===null)throw Error(L(160));pv(s,l,i),Re=null,zt=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(u){ye(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fv(t,e),t=t.sibling}function fv(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),_t(e),o&4){try{_i(3,e,e.return),ic(3,e)}catch($){ye(e,e.return,$)}try{_i(5,e,e.return)}catch($){ye(e,e.return,$)}}break;case 1:Tt(t,e),_t(e),o&512&&r!==null&&So(r,r.return);break;case 5:if(Tt(t,e),_t(e),o&512&&r!==null&&So(r,r.return),e.flags&32){var i=e.stateNode;try{Ji(i,"")}catch($){ye(e,e.return,$)}}if(o&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=r!==null?r.memoizedProps:s,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&Fy(i,s),Su(c,l);var u=Su(c,s);for(l=0;l<d.length;l+=2){var h=d[l],m=d[l+1];h==="style"?_y(i,m):h==="dangerouslySetInnerHTML"?Oy(i,m):h==="children"?Ji(i,m):Uh(i,h,m,u)}switch(c){case"input":wu(i,s);break;case"textarea":By(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var b=s.value;b!=null?Eo(i,!!s.multiple,b,!1):p!==!!s.multiple&&(s.defaultValue!=null?Eo(i,!!s.multiple,s.defaultValue,!0):Eo(i,!!s.multiple,s.multiple?[]:"",!1))}i[as]=s}catch($){ye(e,e.return,$)}}break;case 6:if(Tt(t,e),_t(e),o&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch($){ye(e,e.return,$)}}break;case 3:if(Tt(t,e),_t(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{rs(t.containerInfo)}catch($){ye(e,e.return,$)}break;case 4:Tt(t,e),_t(e);break;case 13:Tt(t,e),_t(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(jm=be())),o&4&&jf(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(We=(u=We)||h,Tt(t,e),We=u):Tt(t,e),_t(e),o&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(O=e,h=e.child;h!==null;){for(m=O=h;O!==null;){switch(p=O,b=p.child,p.tag){case 0:case 11:case 14:case 15:_i(4,p,p.return);break;case 1:So(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){o=p,r=p.return;try{t=o,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch($){ye(o,r,$)}}break;case 5:So(p,p.return);break;case 22:if(p.memoizedState!==null){Cf(m);continue}}b!==null?(b.return=p,O=b):Cf(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=m.stateNode,d=m.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=Vy("display",l))}catch($){ye(e,e.return,$)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch($){ye(e,e.return,$)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Tt(t,e),_t(e),o&4&&jf(e);break;case 21:break;default:Tt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(mv(r)){var o=r;break e}r=r.return}throw Error(L(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(Ji(i,""),o.flags&=-33);var s=$f(e);rh(e,s,i);break;case 3:case 4:var l=o.stateNode.containerInfo,c=$f(e);th(e,c,l);break;default:throw Error(L(161))}}catch(d){ye(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jj(e,t,r){O=e,gv(e)}function gv(e,t,r){for(var o=(e.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&o){var l=i.memoizedState!==null||Js;if(!l){var c=i.alternate,d=c!==null&&c.memoizedState!==null||We;c=Js;var u=We;if(Js=l,(We=d)&&!u)for(O=i;O!==null;)l=O,d=l.child,l.tag===22&&l.memoizedState!==null?Sf(i):d!==null?(d.return=l,O=d):Sf(i);for(;s!==null;)O=s,gv(s),s=s.sibling;O=i,Js=c,We=u}kf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):kf(e)}}function kf(e){for(;O!==null;){var t=O;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:We||ic(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!We)if(r===null)o.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:At(t.type,r.memoizedProps);o.componentDidUpdate(i,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&lf(t,s,o);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}lf(t,l,r)}break;case 5:var c=t.stateNode;if(r===null&&t.flags&4){r=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&rs(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}We||t.flags&512&&eh(t)}catch(p){ye(t,t.return,p)}}if(t===e){O=null;break}if(r=t.sibling,r!==null){r.return=t.return,O=r;break}O=t.return}}function Cf(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var r=t.sibling;if(r!==null){r.return=t.return,O=r;break}O=t.return}}function Sf(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ic(4,t)}catch(d){ye(t,r,d)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var i=t.return;try{o.componentDidMount()}catch(d){ye(t,i,d)}}var s=t.return;try{eh(t)}catch(d){ye(t,s,d)}break;case 5:var l=t.return;try{eh(t)}catch(d){ye(t,l,d)}}}catch(d){ye(t,t.return,d)}if(t===e){O=null;break}var c=t.sibling;if(c!==null){c.return=t.return,O=c;break}O=t.return}}var kj=Math.ceil,jl=yr.ReactCurrentDispatcher,wm=yr.ReactCurrentOwner,wt=yr.ReactCurrentBatchConfig,K=0,Le=null,ke=null,Ie=0,at=0,Po=rn(0),Te=0,ms=null,Fn=0,sc=0,$m=0,Wi=null,Ze=null,jm=0,Ho=1/0,er=null,kl=!1,nh=null,Wr=null,Zs=!1,Ir=null,Cl=0,Ui=0,oh=null,Ya=-1,qa=0;function Qe(){return K&6?be():Ya!==-1?Ya:Ya=be()}function Ur(e){return e.mode&1?K&2&&Ie!==0?Ie&-Ie:aj.transition!==null?(qa===0&&(qa=e1()),qa):(e=Z,e!==0||(e=window.event,e=e===void 0?16:a1(e.type)),e):1}function Et(e,t,r,o){if(50<Ui)throw Ui=0,oh=null,Error(L(185));Ps(e,r,o),(!(K&2)||e!==Le)&&(e===Le&&(!(K&2)&&(sc|=r),Te===4&&Lr(e,Ie)),nt(e,o),r===1&&K===0&&!(t.mode&1)&&(Ho=be()+500,rc&&nn()))}function nt(e,t){var r=e.callbackNode;a2(e,t);var o=ll(e,e===Le?Ie:0);if(o===0)r!==null&&Lp(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&Lp(r),t===1)e.tag===0?sj(Pf.bind(null,e)):S1(Pf.bind(null,e)),rj(function(){!(K&6)&&nn()}),r=null;else{switch(t1(o)){case 1:r=Qh;break;case 4:r=Jy;break;case 16:r=al;break;case 536870912:r=Zy;break;default:r=al}r=kv(r,xv.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function xv(e,t){if(Ya=-1,qa=0,K&6)throw Error(L(327));var r=e.callbackNode;if(Bo()&&e.callbackNode!==r)return null;var o=ll(e,e===Le?Ie:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Sl(e,o);else{t=o;var i=K;K|=2;var s=vv();(Le!==e||Ie!==t)&&(er=null,Ho=be()+500,An(e,t));do try{Pj();break}catch(c){yv(e,c)}while(!0);lm(),jl.current=s,K=i,ke!==null?t=0:(Le=null,Ie=0,t=Te)}if(t!==0){if(t===2&&(i=Mu(e),i!==0&&(o=i,t=ih(e,i))),t===1)throw r=ms,An(e,0),Lr(e,o),nt(e,be()),r;if(t===6)Lr(e,o);else{if(i=e.current.alternate,!(o&30)&&!Cj(i)&&(t=Sl(e,o),t===2&&(s=Mu(e),s!==0&&(o=s,t=ih(e,s))),t===1))throw r=ms,An(e,0),Lr(e,o),nt(e,be()),r;switch(e.finishedWork=i,e.finishedLanes=o,t){case 0:case 1:throw Error(L(345));case 2:vn(e,Ze,er);break;case 3:if(Lr(e,o),(o&130023424)===o&&(t=jm+500-be(),10<t)){if(ll(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){Qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Nu(vn.bind(null,e,Ze,er),t);break}vn(e,Ze,er);break;case 4:if(Lr(e,o),(o&4194240)===o)break;for(t=e.eventTimes,i=-1;0<o;){var l=31-Dt(o);s=1<<l,l=t[l],l>i&&(i=l),o&=~s}if(o=i,o=be()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*kj(o/1960))-o,10<o){e.timeoutHandle=Nu(vn.bind(null,e,Ze,er),o);break}vn(e,Ze,er);break;case 5:vn(e,Ze,er);break;default:throw Error(L(329))}}}return nt(e,be()),e.callbackNode===r?xv.bind(null,e):null}function ih(e,t){var r=Wi;return e.current.memoizedState.isDehydrated&&(An(e,t).flags|=256),e=Sl(e,t),e!==2&&(t=Ze,Ze=r,t!==null&&sh(t)),e}function sh(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function Cj(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var i=r[o],s=i.getSnapshot;i=i.value;try{if(!It(s(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lr(e,t){for(t&=~$m,t&=~sc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Dt(t),o=1<<r;e[r]=-1,t&=~o}}function Pf(e){if(K&6)throw Error(L(327));Bo();var t=ll(e,0);if(!(t&1))return nt(e,be()),null;var r=Sl(e,t);if(e.tag!==0&&r===2){var o=Mu(e);o!==0&&(t=o,r=ih(e,o))}if(r===1)throw r=ms,An(e,0),Lr(e,t),nt(e,be()),r;if(r===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vn(e,Ze,er),nt(e,be()),null}function km(e,t){var r=K;K|=1;try{return e(t)}finally{K=r,K===0&&(Ho=be()+500,rc&&nn())}}function Bn(e){Ir!==null&&Ir.tag===0&&!(K&6)&&Bo();var t=K;K|=1;var r=wt.transition,o=Z;try{if(wt.transition=null,Z=1,e)return e()}finally{Z=o,wt.transition=r,K=t,!(K&6)&&nn()}}function Cm(){at=Po.current,ae(Po)}function An(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,tj(r)),ke!==null)for(r=ke.return;r!==null;){var o=r;switch(im(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&ml();break;case 3:Wo(),ae(tt),ae(Ue),pm();break;case 5:mm(o);break;case 4:Wo();break;case 13:ae(de);break;case 19:ae(de);break;case 10:cm(o.type._context);break;case 22:case 23:Cm()}r=r.return}if(Le=e,ke=e=Hr(e.current,null),Ie=at=t,Te=0,ms=null,$m=sc=Fn=0,Ze=Wi=null,Cn!==null){for(t=0;t<Cn.length;t++)if(r=Cn[t],o=r.interleaved,o!==null){r.interleaved=null;var i=o.next,s=r.pending;if(s!==null){var l=s.next;s.next=i,o.next=l}r.pending=o}Cn=null}return e}function yv(e,t){do{var r=ke;try{if(lm(),Ua.current=$l,wl){for(var o=me.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}wl=!1}if(In=0,Me=Pe=me=null,Vi=!1,ds=0,wm.current=null,r===null||r.return===null){Te=1,ms=t,ke=null;break}e:{var s=e,l=r.return,c=r,d=t;if(t=Ie,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,h=c,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var b=pf(l);if(b!==null){b.flags&=-257,ff(b,l,c,s,t),b.mode&1&&mf(s,u,t),t=b,d=u;var v=t.updateQueue;if(v===null){var $=new Set;$.add(d),t.updateQueue=$}else v.add(d);break e}else{if(!(t&1)){mf(s,u,t),Sm();break e}d=Error(L(426))}}else if(le&&c.mode&1){var k=pf(l);if(k!==null){!(k.flags&65536)&&(k.flags|=256),ff(k,l,c,s,t),sm(Uo(d,c));break e}}s=d=Uo(d,c),Te!==4&&(Te=2),Wi===null?Wi=[s]:Wi.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var y=tv(s,d,t);af(s,y);break e;case 1:c=d;var x=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Wr===null||!Wr.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var f=rv(s,c,t);af(s,f);break e}}s=s.return}while(s!==null)}wv(r)}catch(S){t=S,ke===r&&r!==null&&(ke=r=r.return);continue}break}while(!0)}function vv(){var e=jl.current;return jl.current=$l,e===null?$l:e}function Sm(){(Te===0||Te===3||Te===2)&&(Te=4),Le===null||!(Fn&268435455)&&!(sc&268435455)||Lr(Le,Ie)}function Sl(e,t){var r=K;K|=2;var o=vv();(Le!==e||Ie!==t)&&(er=null,An(e,t));do try{Sj();break}catch(i){yv(e,i)}while(!0);if(lm(),K=r,jl.current=o,ke!==null)throw Error(L(261));return Le=null,Ie=0,Te}function Sj(){for(;ke!==null;)bv(ke)}function Pj(){for(;ke!==null&&!J$();)bv(ke)}function bv(e){var t=jv(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?wv(e):ke=t,wm.current=null}function wv(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=bj(r,t),r!==null){r.flags&=32767,ke=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,ke=null;return}}else if(r=vj(r,t,at),r!==null){ke=r;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Te===0&&(Te=5)}function vn(e,t,r){var o=Z,i=wt.transition;try{wt.transition=null,Z=1,Tj(e,t,r,o)}finally{wt.transition=i,Z=o}return null}function Tj(e,t,r,o){do Bo();while(Ir!==null);if(K&6)throw Error(L(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(l2(e,s),e===Le&&(ke=Le=null,Ie=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Zs||(Zs=!0,kv(al,function(){return Bo(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=wt.transition,wt.transition=null;var l=Z;Z=1;var c=K;K|=4,wm.current=null,$j(e,r),fv(r,e),q2(Fu),cl=!!Iu,Fu=Iu=null,e.current=r,jj(r),Z$(),K=c,Z=l,wt.transition=s}else e.current=r;if(Zs&&(Zs=!1,Ir=e,Cl=i),s=e.pendingLanes,s===0&&(Wr=null),r2(r.stateNode),nt(e,be()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],o(i.value,{componentStack:i.stack,digest:i.digest});if(kl)throw kl=!1,e=nh,nh=null,e;return Cl&1&&e.tag!==0&&Bo(),s=e.pendingLanes,s&1?e===oh?Ui++:(Ui=0,oh=e):Ui=0,nn(),null}function Bo(){if(Ir!==null){var e=t1(Cl),t=wt.transition,r=Z;try{if(wt.transition=null,Z=16>e?16:e,Ir===null)var o=!1;else{if(e=Ir,Ir=null,Cl=0,K&6)throw Error(L(331));var i=K;for(K|=4,O=e.current;O!==null;){var s=O,l=s.child;if(O.flags&16){var c=s.deletions;if(c!==null){for(var d=0;d<c.length;d++){var u=c[d];for(O=u;O!==null;){var h=O;switch(h.tag){case 0:case 11:case 15:_i(8,h,s)}var m=h.child;if(m!==null)m.return=h,O=m;else for(;O!==null;){h=O;var p=h.sibling,b=h.return;if(hv(h),h===u){O=null;break}if(p!==null){p.return=b,O=p;break}O=b}}}var v=s.alternate;if(v!==null){var $=v.child;if($!==null){v.child=null;do{var k=$.sibling;$.sibling=null,$=k}while($!==null)}}O=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,O=l;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_i(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,O=y;break e}O=s.return}}var x=e.current;for(O=x;O!==null;){l=O;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,O=g;else e:for(l=x;O!==null;){if(c=O,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:ic(9,c)}}catch(S){ye(c,c.return,S)}if(c===l){O=null;break e}var f=c.sibling;if(f!==null){f.return=c.return,O=f;break e}O=c.return}}if(K=i,nn(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Xl,e)}catch{}o=!0}return o}finally{Z=r,wt.transition=t}}return!1}function Tf(e,t,r){t=Uo(r,t),t=tv(e,t,1),e=_r(e,t,1),t=Qe(),e!==null&&(Ps(e,1,t),nt(e,t))}function ye(e,t,r){if(e.tag===3)Tf(e,e,r);else for(;t!==null;){if(t.tag===3){Tf(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Wr===null||!Wr.has(o))){e=Uo(r,e),e=rv(t,e,1),t=_r(t,e,1),e=Qe(),t!==null&&(Ps(t,1,e),nt(t,e));break}}t=t.return}}function Aj(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&r,Le===e&&(Ie&r)===r&&(Te===4||Te===3&&(Ie&130023424)===Ie&&500>be()-jm?An(e,0):$m|=r),nt(e,t)}function $v(e,t){t===0&&(e.mode&1?(t=Ws,Ws<<=1,!(Ws&130023424)&&(Ws=4194304)):t=1);var r=Qe();e=ur(e,t),e!==null&&(Ps(e,t,r),nt(e,r))}function zj(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),$v(e,r)}function Mj(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(L(314))}o!==null&&o.delete(t),$v(e,r)}var jv;jv=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)et=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return et=!1,yj(e,t,r);et=!!(e.flags&131072)}else et=!1,le&&t.flags&1048576&&P1(t,gl,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Ga(e,t),e=t.pendingProps;var i=Oo(t,Ue.current);Fo(t,r),i=gm(null,t,o,e,i,r);var s=xm();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(o)?(s=!0,pl(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,um(t),i.updater=oc,t.stateNode=i,i._reactInternals=t,Gu(t,o,e,r),t=Qu(null,t,o,!0,s,r)):(t.tag=0,le&&s&&om(t),qe(null,t,i,r),t=t.child),t;case 16:o=t.elementType;e:{switch(Ga(e,t),e=t.pendingProps,i=o._init,o=i(o._payload),t.type=o,i=t.tag=Ej(o),e=At(o,e),i){case 0:t=qu(null,t,o,e,r);break e;case 1:t=yf(null,t,o,e,r);break e;case 11:t=gf(null,t,o,e,r);break e;case 14:t=xf(null,t,o,At(o.type,e),r);break e}throw Error(L(306,o,""))}return t;case 0:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:At(o,i),qu(e,t,o,i,r);case 1:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:At(o,i),yf(e,t,o,i,r);case 3:e:{if(sv(t),e===null)throw Error(L(387));o=t.pendingProps,s=t.memoizedState,i=s.element,E1(e,t),vl(t,o,null,r);var l=t.memoizedState;if(o=l.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Uo(Error(L(423)),t),t=vf(e,t,o,r,i);break e}else if(o!==i){i=Uo(Error(L(424)),t),t=vf(e,t,o,r,i);break e}else for(lt=Vr(t.stateNode.containerInfo.firstChild),ct=t,le=!0,Mt=null,r=M1(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Vo(),o===i){t=hr(e,t,r);break e}qe(e,t,o,r)}t=t.child}return t;case 5:return L1(t),e===null&&Wu(t),o=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,Bu(o,i)?l=null:s!==null&&Bu(o,s)&&(t.flags|=32),iv(e,t),qe(e,t,l,r),t.child;case 6:return e===null&&Wu(t),null;case 13:return av(e,t,r);case 4:return hm(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=_o(t,null,o,r):qe(e,t,o,r),t.child;case 11:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:At(o,i),gf(e,t,o,i,r);case 7:return qe(e,t,t.pendingProps,r),t.child;case 8:return qe(e,t,t.pendingProps.children,r),t.child;case 12:return qe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,i=t.pendingProps,s=t.memoizedProps,l=i.value,te(xl,o._currentValue),o._currentValue=l,s!==null)if(It(s.value,l)){if(s.children===i.children&&!tt.current){t=hr(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){l=s.child;for(var d=c.firstContext;d!==null;){if(d.context===o){if(s.tag===1){d=sr(-1,r&-r),d.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?d.next=d:(d.next=h.next,h.next=d),u.pending=d}}s.lanes|=r,d=s.alternate,d!==null&&(d.lanes|=r),Uu(s.return,r,t),c.lanes|=r;break}d=d.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(L(341));l.lanes|=r,c=l.alternate,c!==null&&(c.lanes|=r),Uu(l,r,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}qe(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps.children,Fo(t,r),i=jt(i),o=o(i),t.flags|=1,qe(e,t,o,r),t.child;case 14:return o=t.type,i=At(o,t.pendingProps),i=At(o.type,i),xf(e,t,o,i,r);case 15:return nv(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:At(o,i),Ga(e,t),t.tag=1,rt(o)?(e=!0,pl(t)):e=!1,Fo(t,r),ev(t,o,i),Gu(t,o,i,r),Qu(null,t,o,!0,e,r);case 19:return lv(e,t,r);case 22:return ov(e,t,r)}throw Error(L(156,t.tag))};function kv(e,t){return Xy(e,t)}function Dj(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(e,t,r,o){return new Dj(e,t,r,o)}function Pm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ej(e){if(typeof e=="function")return Pm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gh)return 11;if(e===Yh)return 14}return 2}function Hr(e,t){var r=e.alternate;return r===null?(r=bt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Qa(e,t,r,o,i,s){var l=2;if(o=e,typeof e=="function")Pm(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case xo:return zn(r.children,i,s,t);case Hh:l=8,i|=8;break;case gu:return e=bt(12,r,t,i|2),e.elementType=gu,e.lanes=s,e;case xu:return e=bt(13,r,t,i),e.elementType=xu,e.lanes=s,e;case yu:return e=bt(19,r,t,i),e.elementType=yu,e.lanes=s,e;case Ly:return ac(r,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dy:l=10;break e;case Ey:l=9;break e;case Gh:l=11;break e;case Yh:l=14;break e;case zr:l=16,o=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=bt(l,r,t,i),t.elementType=e,t.type=o,t.lanes=s,t}function zn(e,t,r,o){return e=bt(7,e,o,t),e.lanes=r,e}function ac(e,t,r,o){return e=bt(22,e,o,t),e.elementType=Ly,e.lanes=r,e.stateNode={isHidden:!1},e}function id(e,t,r){return e=bt(6,e,null,t),e.lanes=r,e}function sd(e,t,r){return t=bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lj(e,t,r,o,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oc(0),this.expirationTimes=Oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tm(e,t,r,o,i,s,l,c,d){return e=new Lj(e,t,r,c,d),t===1?(t=1,s===!0&&(t|=8)):t=0,s=bt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},um(s),e}function Rj(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:go,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function Cv(e){if(!e)return Xr;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var r=e.type;if(rt(r))return C1(e,r,t)}return t}function Sv(e,t,r,o,i,s,l,c,d){return e=Tm(r,o,!0,e,i,s,l,c,d),e.context=Cv(null),r=e.current,o=Qe(),i=Ur(r),s=sr(o,i),s.callback=t??null,_r(r,s,i),e.current.lanes=i,Ps(e,i,o),nt(e,o),e}function lc(e,t,r,o){var i=t.current,s=Qe(),l=Ur(i);return r=Cv(r),t.context===null?t.context=r:t.pendingContext=r,t=sr(s,l),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=_r(i,t,l),e!==null&&(Et(e,i,l,s),Wa(e,i,l)),l}function Pl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Af(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Am(e,t){Af(e,t),(e=e.alternate)&&Af(e,t)}function Ij(){return null}var Pv=typeof reportError=="function"?reportError:function(e){console.error(e)};function zm(e){this._internalRoot=e}cc.prototype.render=zm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));lc(e,t,null,null)};cc.prototype.unmount=zm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bn(function(){lc(null,e,null,null)}),t[dr]=null}};function cc(e){this._internalRoot=e}cc.prototype.unstable_scheduleHydration=function(e){if(e){var t=o1();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Er.length&&t!==0&&t<Er[r].priority;r++);Er.splice(r,0,e),r===0&&s1(e)}};function Mm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function dc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zf(){}function Fj(e,t,r,o,i){if(i){if(typeof o=="function"){var s=o;o=function(){var u=Pl(l);s.call(u)}}var l=Sv(t,o,e,0,null,!1,!1,"",zf);return e._reactRootContainer=l,e[dr]=l.current,is(e.nodeType===8?e.parentNode:e),Bn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var c=o;o=function(){var u=Pl(d);c.call(u)}}var d=Tm(e,0,!1,null,null,!1,!1,"",zf);return e._reactRootContainer=d,e[dr]=d.current,is(e.nodeType===8?e.parentNode:e),Bn(function(){lc(t,d,r,o)}),d}function uc(e,t,r,o,i){var s=r._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var c=i;i=function(){var d=Pl(l);c.call(d)}}lc(t,l,e,i)}else l=Fj(r,t,e,i,o);return Pl(l)}r1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Di(t.pendingLanes);r!==0&&(Kh(t,r|1),nt(t,be()),!(K&6)&&(Ho=be()+500,nn()))}break;case 13:Bn(function(){var o=ur(e,1);if(o!==null){var i=Qe();Et(o,e,1,i)}}),Am(e,1)}};Xh=function(e){if(e.tag===13){var t=ur(e,134217728);if(t!==null){var r=Qe();Et(t,e,134217728,r)}Am(e,134217728)}};n1=function(e){if(e.tag===13){var t=Ur(e),r=ur(e,t);if(r!==null){var o=Qe();Et(r,e,t,o)}Am(e,t)}};o1=function(){return Z};i1=function(e,t){var r=Z;try{return Z=e,t()}finally{Z=r}};Tu=function(e,t,r){switch(t){case"input":if(wu(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var i=tc(o);if(!i)throw Error(L(90));Iy(o),wu(o,i)}}}break;case"textarea":By(e,r);break;case"select":t=r.value,t!=null&&Eo(e,!!r.multiple,t,!1)}};Hy=km;Gy=Bn;var Bj={usingClientEntryPoint:!1,Events:[As,wo,tc,Wy,Uy,km]},fi={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nj={bundleType:fi.bundleType,version:fi.version,rendererPackageName:fi.rendererPackageName,rendererConfig:fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qy(e),e===null?null:e.stateNode},findFiberByHostInstance:fi.findFiberByHostInstance||Ij,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ea.isDisabled&&ea.supportsFiber)try{Xl=ea.inject(Nj),Gt=ea}catch{}}mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bj;mt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mm(t))throw Error(L(200));return Rj(e,t,null,r)};mt.createRoot=function(e,t){if(!Mm(e))throw Error(L(299));var r=!1,o="",i=Pv;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Tm(e,1,!1,null,null,r,!1,o,i),e[dr]=t.current,is(e.nodeType===8?e.parentNode:e),new zm(t)};mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Qy(t),e=e===null?null:e.stateNode,e};mt.flushSync=function(e){return Bn(e)};mt.hydrate=function(e,t,r){if(!dc(t))throw Error(L(200));return uc(null,e,t,!0,r)};mt.hydrateRoot=function(e,t,r){if(!Mm(e))throw Error(L(405));var o=r!=null&&r.hydratedSources||null,i=!1,s="",l=Pv;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=Sv(t,null,e,1,r??null,i,!1,s,l),e[dr]=t.current,is(e),o)for(e=0;e<o.length;e++)r=o[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new cc(t)};mt.render=function(e,t,r){if(!dc(t))throw Error(L(200));return uc(null,e,t,!1,r)};mt.unmountComponentAtNode=function(e){if(!dc(e))throw Error(L(40));return e._reactRootContainer?(Bn(function(){uc(null,null,e,!1,function(){e._reactRootContainer=null,e[dr]=null})}),!0):!1};mt.unstable_batchedUpdates=km;mt.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!dc(r))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return uc(e,t,r,!1,o)};mt.version="18.3.1-next-f1338f8080-20240426";function Tv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tv)}catch(e){console.error(e)}}Tv(),Ty.exports=mt;var Oj=Ty.exports,Av,Mf=Oj;Av=Mf.createRoot,Mf.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ps(){return ps=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},ps.apply(this,arguments)}var Fr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Fr||(Fr={}));const Df="popstate";function Vj(e){e===void 0&&(e={});function t(i,s){let{pathname:l="/",search:c="",hash:d=""}=Hn(i.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),ah("",{pathname:l,search:c,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(i,s){let l=i.document.querySelector("base"),c="";if(l&&l.getAttribute("href")){let d=i.location.href,u=d.indexOf("#");c=u===-1?d:d.slice(0,u)}return c+"#"+(typeof s=="string"?s:Tl(s))}function o(i,s){Dm(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Wj(t,r,o,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Dm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _j(){return Math.random().toString(36).substr(2,8)}function Ef(e,t){return{usr:e.state,key:e.key,idx:t}}function ah(e,t,r,o){return r===void 0&&(r=null),ps({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Hn(t):t,{state:r,key:t&&t.key||o||_j()})}function Tl(e){let{pathname:t="/",search:r="",hash:o=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function Hn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function Wj(e,t,r,o){o===void 0&&(o={});let{window:i=document.defaultView,v5Compat:s=!1}=o,l=i.history,c=Fr.Pop,d=null,u=h();u==null&&(u=0,l.replaceState(ps({},l.state,{idx:u}),""));function h(){return(l.state||{idx:null}).idx}function m(){c=Fr.Pop;let k=h(),y=k==null?null:k-u;u=k,d&&d({action:c,location:$.location,delta:y})}function p(k,y){c=Fr.Push;let x=ah($.location,k,y);r&&r(x,k),u=h()+1;let g=Ef(x,u),f=$.createHref(x);try{l.pushState(g,"",f)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(f)}s&&d&&d({action:c,location:$.location,delta:1})}function b(k,y){c=Fr.Replace;let x=ah($.location,k,y);r&&r(x,k),u=h();let g=Ef(x,u),f=$.createHref(x);l.replaceState(g,"",f),s&&d&&d({action:c,location:$.location,delta:0})}function v(k){let y=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof k=="string"?k:Tl(k);return x=x.replace(/ $/,"%20"),pe(y,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,y)}let $={get action(){return c},get location(){return e(i,l)},listen(k){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(Df,m),d=k,()=>{i.removeEventListener(Df,m),d=null}},createHref(k){return t(i,k)},createURL:v,encodeLocation(k){let y=v(k);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:p,replace:b,go(k){return l.go(k)}};return $}var Lf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Lf||(Lf={}));function Uj(e,t,r){return r===void 0&&(r="/"),Hj(e,t,r)}function Hj(e,t,r,o){let i=typeof t=="string"?Hn(t):t,s=Go(i.pathname||"/",r);if(s==null)return null;let l=zv(e);Gj(l);let c=null;for(let d=0;c==null&&d<l.length;++d){let u=nk(s);c=tk(l[d],u)}return c}function zv(e,t,r,o){t===void 0&&(t=[]),r===void 0&&(r=[]),o===void 0&&(o="");let i=(s,l,c)=>{let d={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};d.relativePath.startsWith("/")&&(pe(d.relativePath.startsWith(o),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(o.length));let u=Gr([o,d.relativePath]),h=r.concat(d);s.children&&s.children.length>0&&(pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),zv(s.children,t,h,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Zj(u,s.index),routesMeta:h})};return e.forEach((s,l)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))i(s,l);else for(let d of Mv(s.path))i(s,l,d)}),t}function Mv(e){let t=e.split("/");if(t.length===0)return[];let[r,...o]=t,i=r.endsWith("?"),s=r.replace(/\?$/,"");if(o.length===0)return i?[s,""]:[s];let l=Mv(o.join("/")),c=[];return c.push(...l.map(d=>d===""?s:[s,d].join("/"))),i&&c.push(...l),c.map(d=>e.startsWith("/")&&d===""?"/":d)}function Gj(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:ek(t.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}const Yj=/^:[\w-]+$/,qj=3,Qj=2,Kj=1,Xj=10,Jj=-2,Rf=e=>e==="*";function Zj(e,t){let r=e.split("/"),o=r.length;return r.some(Rf)&&(o+=Jj),t&&(o+=Qj),r.filter(i=>!Rf(i)).reduce((i,s)=>i+(Yj.test(s)?qj:s===""?Kj:Xj),o)}function ek(e,t){return e.length===t.length&&e.slice(0,-1).every((o,i)=>o===t[i])?e[e.length-1]-t[t.length-1]:0}function tk(e,t,r){let{routesMeta:o}=e,i={},s="/",l=[];for(let c=0;c<o.length;++c){let d=o[c],u=c===o.length-1,h=s==="/"?t:t.slice(s.length)||"/",m=lh({path:d.relativePath,caseSensitive:d.caseSensitive,end:u},h),p=d.route;if(!m)return null;Object.assign(i,m.params),l.push({params:i,pathname:Gr([s,m.pathname]),pathnameBase:ak(Gr([s,m.pathnameBase])),route:p}),m.pathnameBase!=="/"&&(s=Gr([s,m.pathnameBase]))}return l}function lh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,o]=rk(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let s=i[0],l=s.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:o.reduce((u,h,m)=>{let{paramName:p,isOptional:b}=h;if(p==="*"){let $=c[m]||"";l=s.slice(0,s.length-$.length).replace(/(.)\/+$/,"$1")}const v=c[m];return b&&!v?u[p]=void 0:u[p]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:l,pattern:e}}function rk(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Dm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,d)=>(o.push({paramName:c,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),o]}function nk(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Dm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Go(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,o=e.charAt(r);return o&&o!=="/"?null:e.slice(r)||"/"}function ok(e,t){t===void 0&&(t="/");let{pathname:r,search:o="",hash:i=""}=typeof e=="string"?Hn(e):e;return{pathname:r?r.startsWith("/")?r:ik(r,t):t,search:lk(o),hash:ck(i)}}function ik(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function ad(e,t,r,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sk(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Em(e,t){let r=sk(e);return t?r.map((o,i)=>i===r.length-1?o.pathname:o.pathnameBase):r.map(o=>o.pathnameBase)}function Lm(e,t,r,o){o===void 0&&(o=!1);let i;typeof e=="string"?i=Hn(e):(i=ps({},e),pe(!i.pathname||!i.pathname.includes("?"),ad("?","pathname","search",i)),pe(!i.pathname||!i.pathname.includes("#"),ad("#","pathname","hash",i)),pe(!i.search||!i.search.includes("#"),ad("#","search","hash",i)));let s=e===""||i.pathname==="",l=s?"/":i.pathname,c;if(l==null)c=r;else{let m=t.length-1;if(!o&&l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),m-=1;i.pathname=p.join("/")}c=m>=0?t[m]:"/"}let d=ok(i,c),u=l&&l!=="/"&&l.endsWith("/"),h=(s||l===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(u||h)&&(d.pathname+="/"),d}const Gr=e=>e.join("/").replace(/\/\/+/g,"/"),ak=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),lk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ck=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function dk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Dv=["post","put","patch","delete"];new Set(Dv);const uk=["get",...Dv];new Set(uk);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fs(){return fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},fs.apply(this,arguments)}const hc=j.createContext(null),Ev=j.createContext(null),vr=j.createContext(null),mc=j.createContext(null),br=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Lv=j.createContext(null);function hk(e,t){let{relative:r}=t===void 0?{}:t;ii()||pe(!1);let{basename:o,navigator:i}=j.useContext(vr),{hash:s,pathname:l,search:c}=pc(e,{relative:r}),d=l;return o!=="/"&&(d=l==="/"?o:Gr([o,l])),i.createHref({pathname:d,search:c,hash:s})}function ii(){return j.useContext(mc)!=null}function Xt(){return ii()||pe(!1),j.useContext(mc).location}function Rv(e){j.useContext(vr).static||j.useLayoutEffect(e)}function Ms(){let{isDataRoute:e}=j.useContext(br);return e?Pk():mk()}function mk(){ii()||pe(!1);let e=j.useContext(hc),{basename:t,future:r,navigator:o}=j.useContext(vr),{matches:i}=j.useContext(br),{pathname:s}=Xt(),l=JSON.stringify(Em(i,r.v7_relativeSplatPath)),c=j.useRef(!1);return Rv(()=>{c.current=!0}),j.useCallback(function(u,h){if(h===void 0&&(h={}),!c.current)return;if(typeof u=="number"){o.go(u);return}let m=Lm(u,JSON.parse(l),s,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Gr([t,m.pathname])),(h.replace?o.replace:o.push)(m,h.state,h)},[t,o,l,s,e])}const pk=j.createContext(null);function fk(e){let t=j.useContext(br).outlet;return t&&j.createElement(pk.Provider,{value:e},t)}function pc(e,t){let{relative:r}=t===void 0?{}:t,{future:o}=j.useContext(vr),{matches:i}=j.useContext(br),{pathname:s}=Xt(),l=JSON.stringify(Em(i,o.v7_relativeSplatPath));return j.useMemo(()=>Lm(e,JSON.parse(l),s,r==="path"),[e,l,s,r])}function gk(e,t){return xk(e,t)}function xk(e,t,r,o){ii()||pe(!1);let{navigator:i,static:s}=j.useContext(vr),{matches:l}=j.useContext(br),c=l[l.length-1],d=c?c.params:{};c&&c.pathname;let u=c?c.pathnameBase:"/";c&&c.route;let h=Xt(),m;if(t){var p;let y=typeof t=="string"?Hn(t):t;u==="/"||(p=y.pathname)!=null&&p.startsWith(u)||pe(!1),m=y}else m=h;let b=m.pathname||"/",v=b;if(u!=="/"){let y=u.replace(/^\//,"").split("/");v="/"+b.replace(/^\//,"").split("/").slice(y.length).join("/")}let $=Uj(e,{pathname:v}),k=$k($&&$.map(y=>Object.assign({},y,{params:Object.assign({},d,y.params),pathname:Gr([u,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?u:Gr([u,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),l,r,o);return t&&k?j.createElement(mc.Provider,{value:{location:fs({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Fr.Pop}},k):k}function yk(){let e=Sk(),t=dk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),r?j.createElement("pre",{style:i},r):null,null)}const vk=j.createElement(yk,null);class bk extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?j.createElement(br.Provider,{value:this.props.routeContext},j.createElement(Lv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wk(e){let{routeContext:t,match:r,children:o}=e,i=j.useContext(hc);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),j.createElement(br.Provider,{value:t},o)}function $k(e,t,r,o){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),o===void 0&&(o=null),e==null){var s;if(!r)return null;if(r.errors)e=r.matches;else if((s=o)!=null&&s.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,c=(i=r)==null?void 0:i.errors;if(c!=null){let h=l.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);h>=0||pe(!1),l=l.slice(0,Math.min(l.length,h+1))}let d=!1,u=-1;if(r&&o&&o.v7_partialHydration)for(let h=0;h<l.length;h++){let m=l[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=h),m.route.id){let{loaderData:p,errors:b}=r,v=m.route.loader&&p[m.route.id]===void 0&&(!b||b[m.route.id]===void 0);if(m.route.lazy||v){d=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((h,m,p)=>{let b,v=!1,$=null,k=null;r&&(b=c&&m.route.id?c[m.route.id]:void 0,$=m.route.errorElement||vk,d&&(u<0&&p===0?(Tk("route-fallback"),v=!0,k=null):u===p&&(v=!0,k=m.route.hydrateFallbackElement||null)));let y=t.concat(l.slice(0,p+1)),x=()=>{let g;return b?g=$:v?g=k:m.route.Component?g=j.createElement(m.route.Component,null):m.route.element?g=m.route.element:g=h,j.createElement(wk,{match:m,routeContext:{outlet:h,matches:y,isDataRoute:r!=null},children:g})};return r&&(m.route.ErrorBoundary||m.route.errorElement||p===0)?j.createElement(bk,{location:r.location,revalidation:r.revalidation,component:$,error:b,children:x(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):x()},null)}var Iv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Iv||{}),Fv=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Fv||{});function jk(e){let t=j.useContext(hc);return t||pe(!1),t}function kk(e){let t=j.useContext(Ev);return t||pe(!1),t}function Ck(e){let t=j.useContext(br);return t||pe(!1),t}function Bv(e){let t=Ck(),r=t.matches[t.matches.length-1];return r.route.id||pe(!1),r.route.id}function Sk(){var e;let t=j.useContext(Lv),r=kk(),o=Bv();return t!==void 0?t:(e=r.errors)==null?void 0:e[o]}function Pk(){let{router:e}=jk(Iv.UseNavigateStable),t=Bv(Fv.UseNavigateStable),r=j.useRef(!1);return Rv(()=>{r.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,fs({fromRouteId:t},s)))},[e,t])}const If={};function Tk(e,t,r){If[e]||(If[e]=!0)}function Ak(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Al(e){let{to:t,replace:r,state:o,relative:i}=e;ii()||pe(!1);let{future:s,static:l}=j.useContext(vr),{matches:c}=j.useContext(br),{pathname:d}=Xt(),u=Ms(),h=Lm(t,Em(c,s.v7_relativeSplatPath),d,i==="path"),m=JSON.stringify(h);return j.useEffect(()=>u(JSON.parse(m),{replace:r,state:o,relative:i}),[u,m,i,r,o]),null}function Rm(e){return fk(e.context)}function Q(e){pe(!1)}function zk(e){let{basename:t="/",children:r=null,location:o,navigationType:i=Fr.Pop,navigator:s,static:l=!1,future:c}=e;ii()&&pe(!1);let d=t.replace(/^\/*/,"/"),u=j.useMemo(()=>({basename:d,navigator:s,static:l,future:fs({v7_relativeSplatPath:!1},c)}),[d,c,s,l]);typeof o=="string"&&(o=Hn(o));let{pathname:h="/",search:m="",hash:p="",state:b=null,key:v="default"}=o,$=j.useMemo(()=>{let k=Go(h,d);return k==null?null:{location:{pathname:k,search:m,hash:p,state:b,key:v},navigationType:i}},[d,h,m,p,b,v,i]);return $==null?null:j.createElement(vr.Provider,{value:u},j.createElement(mc.Provider,{children:r,value:$}))}function Mk(e){let{children:t,location:r}=e;return gk(ch(t),r)}new Promise(()=>{});function ch(e,t){t===void 0&&(t=[]);let r=[];return j.Children.forEach(e,(o,i)=>{if(!j.isValidElement(o))return;let s=[...t,i];if(o.type===j.Fragment){r.push.apply(r,ch(o.props.children,s));return}o.type!==Q&&pe(!1),!o.props.index||!o.props.children||pe(!1);let l={id:o.props.id||s.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(l.children=ch(o.props.children,s)),r.push(l)}),r}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zl(){return zl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},zl.apply(this,arguments)}function Nv(e,t){if(e==null)return{};var r={},o=Object.keys(e),i,s;for(s=0;s<o.length;s++)i=o[s],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Dk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ek(e,t){return e.button===0&&(!t||t==="_self")&&!Dk(e)}const Lk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Rk=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Ik="6";try{window.__reactRouterVersion=Ik}catch{}const Fk=j.createContext({isTransitioning:!1}),Bk="startTransition",Ff=A$[Bk];function Nk(e){let{basename:t,children:r,future:o,window:i}=e,s=j.useRef();s.current==null&&(s.current=Vj({window:i,v5Compat:!0}));let l=s.current,[c,d]=j.useState({action:l.action,location:l.location}),{v7_startTransition:u}=o||{},h=j.useCallback(m=>{u&&Ff?Ff(()=>d(m)):d(m)},[d,u]);return j.useLayoutEffect(()=>l.listen(h),[l,h]),j.useEffect(()=>Ak(o),[o]),j.createElement(zk,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:l,future:o})}const Ok=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Vk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gs=j.forwardRef(function(t,r){let{onClick:o,relative:i,reloadDocument:s,replace:l,state:c,target:d,to:u,preventScrollReset:h,viewTransition:m}=t,p=Nv(t,Lk),{basename:b}=j.useContext(vr),v,$=!1;if(typeof u=="string"&&Vk.test(u)&&(v=u,Ok))try{let g=new URL(window.location.href),f=u.startsWith("//")?new URL(g.protocol+u):new URL(u),S=Go(f.pathname,b);f.origin===g.origin&&S!=null?u=S+f.search+f.hash:$=!0}catch{}let k=hk(u,{relative:i}),y=Wk(u,{replace:l,state:c,target:d,preventScrollReset:h,relative:i,viewTransition:m});function x(g){o&&o(g),g.defaultPrevented||y(g)}return j.createElement("a",zl({},p,{href:v||k,onClick:$||s?o:x,ref:r,target:d}))}),Im=j.forwardRef(function(t,r){let{"aria-current":o="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:d,viewTransition:u,children:h}=t,m=Nv(t,Rk),p=pc(d,{relative:m.relative}),b=Xt(),v=j.useContext(Ev),{navigator:$,basename:k}=j.useContext(vr),y=v!=null&&Uk(p)&&u===!0,x=$.encodeLocation?$.encodeLocation(p).pathname:p.pathname,g=b.pathname,f=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(g=g.toLowerCase(),f=f?f.toLowerCase():null,x=x.toLowerCase()),f&&k&&(f=Go(f,k)||f);const S=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let C=g===x||!l&&g.startsWith(x)&&g.charAt(S)==="/",P=f!=null&&(f===x||!l&&f.startsWith(x)&&f.charAt(x.length)==="/"),w={isActive:C,isPending:P,isTransitioning:y},A=C?o:void 0,T;typeof s=="function"?T=s(w):T=[s,C?"active":null,P?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let H=typeof c=="function"?c(w):c;return j.createElement(gs,zl({},m,{"aria-current":A,className:T,ref:r,style:H,to:d,viewTransition:u}),typeof h=="function"?h(w):h)});var dh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(dh||(dh={}));var Bf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Bf||(Bf={}));function _k(e){let t=j.useContext(hc);return t||pe(!1),t}function Wk(e,t){let{target:r,replace:o,state:i,preventScrollReset:s,relative:l,viewTransition:c}=t===void 0?{}:t,d=Ms(),u=Xt(),h=pc(e,{relative:l});return j.useCallback(m=>{if(Ek(m,r)){m.preventDefault();let p=o!==void 0?o:Tl(u)===Tl(h);d(e,{replace:p,state:i,preventScrollReset:s,relative:l,viewTransition:c})}},[u,d,h,o,i,r,e,s,l,c])}function Uk(e,t){t===void 0&&(t={});let r=j.useContext(Fk);r==null&&pe(!1);let{basename:o}=_k(dh.useViewTransitionState),i=pc(e,{relative:t.relative});if(!r.isTransitioning)return!1;let s=Go(r.currentLocation.pathname,o)||r.currentLocation.pathname,l=Go(r.nextLocation.pathname,o)||r.nextLocation.pathname;return lh(i.pathname,l)!=null||lh(i.pathname,s)!=null}var Ee=function(){return Ee=Object.assign||function(t){for(var r,o=1,i=arguments.length;o<i;o++){r=arguments[o];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},Ee.apply(this,arguments)};function xs(e,t,r){if(r||arguments.length===2)for(var o=0,i=t.length,s;o<i;o++)(s||!(o in t))&&(s||(s=Array.prototype.slice.call(t,0,o)),s[o]=t[o]);return e.concat(s||Array.prototype.slice.call(t))}var se="-ms-",Hi="-moz-",X="-webkit-",Ov="comm",fc="rule",Fm="decl",Hk="@import",Vv="@keyframes",Gk="@layer",_v=Math.abs,Bm=String.fromCharCode,uh=Object.assign;function Yk(e,t){return De(e,0)^45?(((t<<2^De(e,0))<<2^De(e,1))<<2^De(e,2))<<2^De(e,3):0}function Wv(e){return e.trim()}function tr(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,r){return e.replace(t,r)}function Ka(e,t,r){return e.indexOf(t,r)}function De(e,t){return e.charCodeAt(t)|0}function Yo(e,t,r){return e.slice(t,r)}function Ut(e){return e.length}function Uv(e){return e.length}function Li(e,t){return t.push(e),e}function qk(e,t){return e.map(t).join("")}function Nf(e,t){return e.filter(function(r){return!tr(r,t)})}var gc=1,qo=1,Hv=0,Ct=0,je=0,si="";function xc(e,t,r,o,i,s,l,c){return{value:e,root:t,parent:r,type:o,props:i,children:s,line:gc,column:qo,length:l,return:"",siblings:c}}function Tr(e,t){return uh(xc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Kn(e){for(;e.root;)e=Tr(e.root,{children:[e]});Li(e,e.siblings)}function Qk(){return je}function Kk(){return je=Ct>0?De(si,--Ct):0,qo--,je===10&&(qo=1,gc--),je}function Lt(){return je=Ct<Hv?De(si,Ct++):0,qo++,je===10&&(qo=1,gc++),je}function Mn(){return De(si,Ct)}function Xa(){return Ct}function yc(e,t){return Yo(si,e,t)}function hh(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Xk(e){return gc=qo=1,Hv=Ut(si=e),Ct=0,[]}function Jk(e){return si="",e}function ld(e){return Wv(yc(Ct-1,mh(e===91?e+2:e===40?e+1:e)))}function Zk(e){for(;(je=Mn())&&je<33;)Lt();return hh(e)>2||hh(je)>3?"":" "}function eC(e,t){for(;--t&&Lt()&&!(je<48||je>102||je>57&&je<65||je>70&&je<97););return yc(e,Xa()+(t<6&&Mn()==32&&Lt()==32))}function mh(e){for(;Lt();)switch(je){case e:return Ct;case 34:case 39:e!==34&&e!==39&&mh(je);break;case 40:e===41&&mh(e);break;case 92:Lt();break}return Ct}function tC(e,t){for(;Lt()&&e+je!==57;)if(e+je===84&&Mn()===47)break;return"/*"+yc(t,Ct-1)+"*"+Bm(e===47?e:Lt())}function rC(e){for(;!hh(Mn());)Lt();return yc(e,Ct)}function nC(e){return Jk(Ja("",null,null,null,[""],e=Xk(e),0,[0],e))}function Ja(e,t,r,o,i,s,l,c,d){for(var u=0,h=0,m=l,p=0,b=0,v=0,$=1,k=1,y=1,x=0,g="",f=i,S=s,C=o,P=g;k;)switch(v=x,x=Lt()){case 40:if(v!=108&&De(P,m-1)==58){Ka(P+=Y(ld(x),"&","&\f"),"&\f",_v(u?c[u-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:P+=ld(x);break;case 9:case 10:case 13:case 32:P+=Zk(v);break;case 92:P+=eC(Xa()-1,7);continue;case 47:switch(Mn()){case 42:case 47:Li(oC(tC(Lt(),Xa()),t,r,d),d);break;default:P+="/"}break;case 123*$:c[u++]=Ut(P)*y;case 125*$:case 59:case 0:switch(x){case 0:case 125:k=0;case 59+h:y==-1&&(P=Y(P,/\f/g,"")),b>0&&Ut(P)-m&&Li(b>32?Vf(P+";",o,r,m-1,d):Vf(Y(P," ","")+";",o,r,m-2,d),d);break;case 59:P+=";";default:if(Li(C=Of(P,t,r,u,h,i,c,g,f=[],S=[],m,s),s),x===123)if(h===0)Ja(P,t,C,C,f,s,m,c,S);else switch(p===99&&De(P,3)===110?100:p){case 100:case 108:case 109:case 115:Ja(e,C,C,o&&Li(Of(e,C,C,0,0,i,c,g,i,f=[],m,S),S),i,S,m,c,o?f:S);break;default:Ja(P,C,C,C,[""],S,0,c,S)}}u=h=b=0,$=y=1,g=P="",m=l;break;case 58:m=1+Ut(P),b=v;default:if($<1){if(x==123)--$;else if(x==125&&$++==0&&Kk()==125)continue}switch(P+=Bm(x),x*$){case 38:y=h>0?1:(P+="\f",-1);break;case 44:c[u++]=(Ut(P)-1)*y,y=1;break;case 64:Mn()===45&&(P+=ld(Lt())),p=Mn(),h=m=Ut(g=P+=rC(Xa())),x++;break;case 45:v===45&&Ut(P)==2&&($=0)}}return s}function Of(e,t,r,o,i,s,l,c,d,u,h,m){for(var p=i-1,b=i===0?s:[""],v=Uv(b),$=0,k=0,y=0;$<o;++$)for(var x=0,g=Yo(e,p+1,p=_v(k=l[$])),f=e;x<v;++x)(f=Wv(k>0?b[x]+" "+g:Y(g,/&\f/g,b[x])))&&(d[y++]=f);return xc(e,t,r,i===0?fc:c,d,u,h,m)}function oC(e,t,r,o){return xc(e,t,r,Ov,Bm(Qk()),Yo(e,2,-2),0,o)}function Vf(e,t,r,o,i){return xc(e,t,r,Fm,Yo(e,0,o),Yo(e,o+1,-1),o,i)}function Gv(e,t,r){switch(Yk(e,t)){case 5103:return X+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return X+e+e;case 4789:return Hi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return X+e+Hi+e+se+e+e;case 5936:switch(De(e,t+11)){case 114:return X+e+se+Y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return X+e+se+Y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return X+e+se+Y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return X+e+se+e+e;case 6165:return X+e+se+"flex-"+e+e;case 5187:return X+e+Y(e,/(\w+).+(:[^]+)/,X+"box-$1$2"+se+"flex-$1$2")+e;case 5443:return X+e+se+"flex-item-"+Y(e,/flex-|-self/g,"")+(tr(e,/flex-|baseline/)?"":se+"grid-row-"+Y(e,/flex-|-self/g,""))+e;case 4675:return X+e+se+"flex-line-pack"+Y(e,/align-content|flex-|-self/g,"")+e;case 5548:return X+e+se+Y(e,"shrink","negative")+e;case 5292:return X+e+se+Y(e,"basis","preferred-size")+e;case 6060:return X+"box-"+Y(e,"-grow","")+X+e+se+Y(e,"grow","positive")+e;case 4554:return X+Y(e,/([^-])(transform)/g,"$1"+X+"$2")+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,X+"$1"),/(image-set)/,X+"$1"),e,"")+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,X+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,X+"box-pack:$3"+se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+X+e+e;case 4200:if(!tr(e,/flex-|baseline/))return se+"grid-column-align"+Yo(e,t)+e;break;case 2592:case 3360:return se+Y(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(o,i){return t=i,tr(o.props,/grid-\w+-end/)})?~Ka(e+(r=r[t].value),"span",0)?e:se+Y(e,"-start","")+e+se+"grid-row-span:"+(~Ka(r,"span",0)?tr(r,/\d+/):+tr(r,/\d+/)-+tr(e,/\d+/))+";":se+Y(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(o){return tr(o.props,/grid-\w+-start/)})?e:se+Y(Y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,X+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ut(e)-1-t>6)switch(De(e,t+1)){case 109:if(De(e,t+4)!==45)break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,"$1"+X+"$2-$3$1"+Hi+(De(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ka(e,"stretch",0)?Gv(Y(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return Y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,i,s,l,c,d,u){return se+i+":"+s+u+(l?se+i+"-span:"+(c?d:+d-+s)+u:"")+e});case 4949:if(De(e,t+6)===121)return Y(e,":",":"+X)+e;break;case 6444:switch(De(e,De(e,14)===45?18:11)){case 120:return Y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+X+(De(e,14)===45?"inline-":"")+"box$3$1"+X+"$2$3$1"+se+"$2box$3")+e;case 100:return Y(e,":",":"+se)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(e,"scroll-","scroll-snap-")+e}return e}function Ml(e,t){for(var r="",o=0;o<e.length;o++)r+=t(e[o],o,e,t)||"";return r}function iC(e,t,r,o){switch(e.type){case Gk:if(e.children.length)break;case Hk:case Fm:return e.return=e.return||e.value;case Ov:return"";case Vv:return e.return=e.value+"{"+Ml(e.children,o)+"}";case fc:if(!Ut(e.value=e.props.join(",")))return""}return Ut(r=Ml(e.children,o))?e.return=e.value+"{"+r+"}":""}function sC(e){var t=Uv(e);return function(r,o,i,s){for(var l="",c=0;c<t;c++)l+=e[c](r,o,i,s)||"";return l}}function aC(e){return function(t){t.root||(t=t.return)&&e(t)}}function lC(e,t,r,o){if(e.length>-1&&!e.return)switch(e.type){case Fm:e.return=Gv(e.value,e.length,r);return;case Vv:return Ml([Tr(e,{value:Y(e.value,"@","@"+X)})],o);case fc:if(e.length)return qk(r=e.props,function(i){switch(tr(i,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Kn(Tr(e,{props:[Y(i,/:(read-\w+)/,":"+Hi+"$1")]})),Kn(Tr(e,{props:[i]})),uh(e,{props:Nf(r,o)});break;case"::placeholder":Kn(Tr(e,{props:[Y(i,/:(plac\w+)/,":"+X+"input-$1")]})),Kn(Tr(e,{props:[Y(i,/:(plac\w+)/,":"+Hi+"$1")]})),Kn(Tr(e,{props:[Y(i,/:(plac\w+)/,se+"input-$1")]})),Kn(Tr(e,{props:[i]})),uh(e,{props:Nf(r,o)});break}return""})}}var cC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},st={},Qo=typeof process<"u"&&st!==void 0&&(st.REACT_APP_SC_ATTR||st.SC_ATTR)||"data-styled",Yv="active",qv="data-styled-version",vc="6.1.17",Nm=`/*!sc*/
`,Dl=typeof window<"u"&&"HTMLElement"in window,dC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&st!==void 0&&st.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&st.REACT_APP_SC_DISABLE_SPEEDY!==""?st.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&st.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&st!==void 0&&st.SC_DISABLE_SPEEDY!==void 0&&st.SC_DISABLE_SPEEDY!==""&&st.SC_DISABLE_SPEEDY!=="false"&&st.SC_DISABLE_SPEEDY),uC={},bc=Object.freeze([]),Ko=Object.freeze({});function Qv(e,t,r){return r===void 0&&(r=Ko),e.theme!==r.theme&&e.theme||t||r.theme}var Kv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),hC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mC=/(^-|-$)/g;function _f(e){return e.replace(hC,"-").replace(mC,"")}var pC=/(a)(d)/gi,ta=52,Wf=function(e){return String.fromCharCode(e+(e>25?39:97))};function ph(e){var t,r="";for(t=Math.abs(e);t>ta;t=t/ta|0)r=Wf(t%ta)+r;return(Wf(t%ta)+r).replace(pC,"$1-$2")}var cd,Xv=5381,To=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Jv=function(e){return To(Xv,e)};function Zv(e){return ph(Jv(e)>>>0)}function fC(e){return e.displayName||e.name||"Component"}function dd(e){return typeof e=="string"&&!0}var eb=typeof Symbol=="function"&&Symbol.for,tb=eb?Symbol.for("react.memo"):60115,gC=eb?Symbol.for("react.forward_ref"):60112,xC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vC=((cd={})[gC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cd[tb]=rb,cd);function Uf(e){return("type"in(t=e)&&t.type.$$typeof)===tb?rb:"$$typeof"in e?vC[e.$$typeof]:xC;var t}var bC=Object.defineProperty,wC=Object.getOwnPropertyNames,Hf=Object.getOwnPropertySymbols,$C=Object.getOwnPropertyDescriptor,jC=Object.getPrototypeOf,Gf=Object.prototype;function nb(e,t,r){if(typeof t!="string"){if(Gf){var o=jC(t);o&&o!==Gf&&nb(e,o,r)}var i=wC(t);Hf&&(i=i.concat(Hf(t)));for(var s=Uf(e),l=Uf(t),c=0;c<i.length;++c){var d=i[c];if(!(d in yC||r&&r[d]||l&&d in l||s&&d in s)){var u=$C(t,d);try{bC(e,d,u)}catch{}}}}return e}function Nn(e){return typeof e=="function"}function Om(e){return typeof e=="object"&&"styledComponentId"in e}function Pn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function fh(e,t){if(e.length===0)return"";for(var r=e[0],o=1;o<e.length;o++)r+=e[o];return r}function ys(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function gh(e,t,r){if(r===void 0&&(r=!1),!r&&!ys(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=gh(e[o],t[o]);else if(ys(t))for(var o in t)e[o]=gh(e[o],t[o]);return e}function Vm(e,t){Object.defineProperty(e,"toString",{value:t})}function On(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var kC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,o=0;o<t;o++)r+=this.groupSizes[o];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,s=i;t>=s;)if((s<<=1)<0)throw On(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(o),this.length=s;for(var l=i;l<s;l++)this.groupSizes[l]=0}for(var c=this.indexOfGroup(t+1),d=(l=0,r.length);l<d;l++)this.tag.insertRule(c,r[l])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r;this.groupSizes[t]=0;for(var s=o;s<i;s++)this.tag.deleteRule(o)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var o=this.groupSizes[t],i=this.indexOfGroup(t),s=i+o,l=i;l<s;l++)r+="".concat(this.tag.getRule(l)).concat(Nm);return r},e}(),Za=new Map,El=new Map,el=1,ra=function(e){if(Za.has(e))return Za.get(e);for(;El.has(el);)el++;var t=el++;return Za.set(e,t),El.set(t,e),t},CC=function(e,t){el=t+1,Za.set(e,t),El.set(t,e)},SC="style[".concat(Qo,"][").concat(qv,'="').concat(vc,'"]'),PC=new RegExp("^".concat(Qo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),TC=function(e,t,r){for(var o,i=r.split(","),s=0,l=i.length;s<l;s++)(o=i[s])&&e.registerName(t,o)},AC=function(e,t){for(var r,o=((r=t.textContent)!==null&&r!==void 0?r:"").split(Nm),i=[],s=0,l=o.length;s<l;s++){var c=o[s].trim();if(c){var d=c.match(PC);if(d){var u=0|parseInt(d[1],10),h=d[2];u!==0&&(CC(h,u),TC(e,h,d[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(c)}}},Yf=function(e){for(var t=document.querySelectorAll(SC),r=0,o=t.length;r<o;r++){var i=t[r];i&&i.getAttribute(Qo)!==Yv&&(AC(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function zC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ob=function(e){var t=document.head,r=e||t,o=document.createElement("style"),i=function(c){var d=Array.from(c.querySelectorAll("style[".concat(Qo,"]")));return d[d.length-1]}(r),s=i!==void 0?i.nextSibling:null;o.setAttribute(Qo,Yv),o.setAttribute(qv,vc);var l=zC();return l&&o.setAttribute("nonce",l),r.insertBefore(o,s),o},MC=function(){function e(t){this.element=ob(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var o=document.styleSheets,i=0,s=o.length;i<s;i++){var l=o[i];if(l.ownerNode===r)return l}throw On(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),DC=function(){function e(t){this.element=ob(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var o=document.createTextNode(r);return this.element.insertBefore(o,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),EC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),qf=Dl,LC={isServer:!Dl,useCSSOMInjection:!dC},Ll=function(){function e(t,r,o){t===void 0&&(t=Ko),r===void 0&&(r={});var i=this;this.options=Ee(Ee({},LC),t),this.gs=r,this.names=new Map(o),this.server=!!t.isServer,!this.server&&Dl&&qf&&(qf=!1,Yf(this)),Vm(this,function(){return function(s){for(var l=s.getTag(),c=l.length,d="",u=function(m){var p=function(y){return El.get(y)}(m);if(p===void 0)return"continue";var b=s.names.get(p),v=l.getGroup(m);if(b===void 0||!b.size||v.length===0)return"continue";var $="".concat(Qo,".g").concat(m,'[id="').concat(p,'"]'),k="";b!==void 0&&b.forEach(function(y){y.length>0&&(k+="".concat(y,","))}),d+="".concat(v).concat($,'{content:"').concat(k,'"}').concat(Nm)},h=0;h<c;h++)u(h);return d}(i)})}return e.registerId=function(t){return ra(t)},e.prototype.rehydrate=function(){!this.server&&Dl&&Yf(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Ee(Ee({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var o=r.useCSSOMInjection,i=r.target;return r.isServer?new EC(i):o?new MC(i):new DC(i)}(this.options),new kC(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ra(t),this.names.has(t))this.names.get(t).add(r);else{var o=new Set;o.add(r),this.names.set(t,o)}},e.prototype.insertRules=function(t,r,o){this.registerName(t,r),this.getTag().insertRules(ra(t),o)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ra(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),RC=/&/g,IC=/^\s*\/\/.*$/gm;function ib(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(o){return"".concat(t," ").concat(o)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=ib(r.children,t)),r})}function FC(e){var t,r,o,i=Ko,s=i.options,l=s===void 0?Ko:s,c=i.plugins,d=c===void 0?bc:c,u=function(p,b,v){return v.startsWith(r)&&v.endsWith(r)&&v.replaceAll(r,"").length>0?".".concat(t):p},h=d.slice();h.push(function(p){p.type===fc&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(RC,r).replace(o,u))}),l.prefix&&h.push(lC),h.push(iC);var m=function(p,b,v,$){b===void 0&&(b=""),v===void 0&&(v=""),$===void 0&&($="&"),t=$,r=b,o=new RegExp("\\".concat(r,"\\b"),"g");var k=p.replace(IC,""),y=nC(v||b?"".concat(v," ").concat(b," { ").concat(k," }"):k);l.namespace&&(y=ib(y,l.namespace));var x=[];return Ml(y,sC(h.concat(aC(function(g){return x.push(g)})))),x};return m.hash=d.length?d.reduce(function(p,b){return b.name||On(15),To(p,b.name)},Xv).toString():"",m}var BC=new Ll,xh=FC(),sb=ce.createContext({shouldForwardProp:void 0,styleSheet:BC,stylis:xh});sb.Consumer;ce.createContext(void 0);function yh(){return j.useContext(sb)}var NC=function(){function e(t,r){var o=this;this.inject=function(i,s){s===void 0&&(s=xh);var l=o.name+s.hash;i.hasNameForId(o.id,l)||i.insertRules(o.id,l,s(o.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Vm(this,function(){throw On(12,String(o.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=xh),this.name+t.hash},e}(),OC=function(e){return e>="A"&&e<="Z"};function Qf(e){for(var t="",r=0;r<e.length;r++){var o=e[r];if(r===1&&o==="-"&&e[0]==="-")return e;OC(o)?t+="-"+o.toLowerCase():t+=o}return t.startsWith("ms-")?"-"+t:t}var ab=function(e){return e==null||e===!1||e===""},lb=function(e){var t,r,o=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!ab(s)&&(Array.isArray(s)&&s.isCss||Nn(s)?o.push("".concat(Qf(i),":"),s,";"):ys(s)?o.push.apply(o,xs(xs(["".concat(i," {")],lb(s),!1),["}"],!1)):o.push("".concat(Qf(i),": ").concat((t=i,(r=s)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in cC||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function Yr(e,t,r,o){if(ab(e))return[];if(Om(e))return[".".concat(e.styledComponentId)];if(Nn(e)){if(!Nn(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Yr(i,t,r,o)}var s;return e instanceof NC?r?(e.inject(r,o),[e.getName(o)]):[e]:ys(e)?lb(e):Array.isArray(e)?Array.prototype.concat.apply(bc,e.map(function(l){return Yr(l,t,r,o)})):[e.toString()]}function cb(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Nn(r)&&!Om(r))return!1}return!0}var VC=Jv(vc),_C=function(){function e(t,r,o){this.rules=t,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&cb(t),this.componentId=r,this.baseHash=To(VC,r),this.baseStyle=o,Ll.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,o){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))i=Pn(i,this.staticRulesId);else{var s=fh(Yr(this.rules,t,r,o)),l=ph(To(this.baseHash,s)>>>0);if(!r.hasNameForId(this.componentId,l)){var c=o(s,".".concat(l),void 0,this.componentId);r.insertRules(this.componentId,l,c)}i=Pn(i,l),this.staticRulesId=l}else{for(var d=To(this.baseHash,o.hash),u="",h=0;h<this.rules.length;h++){var m=this.rules[h];if(typeof m=="string")u+=m;else if(m){var p=fh(Yr(m,t,r,o));d=To(d,p+h),u+=p}}if(u){var b=ph(d>>>0);r.hasNameForId(this.componentId,b)||r.insertRules(this.componentId,b,o(u,".".concat(b),void 0,this.componentId)),i=Pn(i,b)}}return i},e}(),vs=ce.createContext(void 0);vs.Consumer;function WC(e){var t=ce.useContext(vs),r=j.useMemo(function(){return function(o,i){if(!o)throw On(14);if(Nn(o)){var s=o(i);return s}if(Array.isArray(o)||typeof o!="object")throw On(8);return i?Ee(Ee({},i),o):o}(e.theme,t)},[e.theme,t]);return e.children?ce.createElement(vs.Provider,{value:r},e.children):null}var ud={};function UC(e,t,r){var o=Om(e),i=e,s=!dd(e),l=t.attrs,c=l===void 0?bc:l,d=t.componentId,u=d===void 0?function(f,S){var C=typeof f!="string"?"sc":_f(f);ud[C]=(ud[C]||0)+1;var P="".concat(C,"-").concat(Zv(vc+C+ud[C]));return S?"".concat(S,"-").concat(P):P}(t.displayName,t.parentComponentId):d,h=t.displayName,m=h===void 0?function(f){return dd(f)?"styled.".concat(f):"Styled(".concat(fC(f),")")}(e):h,p=t.displayName&&t.componentId?"".concat(_f(t.displayName),"-").concat(t.componentId):t.componentId||u,b=o&&i.attrs?i.attrs.concat(c).filter(Boolean):c,v=t.shouldForwardProp;if(o&&i.shouldForwardProp){var $=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;v=function(f,S){return $(f,S)&&k(f,S)}}else v=$}var y=new _C(r,p,o?i.componentStyle:void 0);function x(f,S){return function(C,P,w){var A=C.attrs,T=C.componentStyle,H=C.defaultProps,G=C.foldedComponentIds,R=C.styledComponentId,D=C.target,W=ce.useContext(vs),_=yh(),ve=C.shouldForwardProp||_.shouldForwardProp,I=Qv(P,W,H)||Ko,z=function(it,ge,He){for(var Vt,Je=Ee(Ee({},ge),{className:void 0,theme:He}),St=0;St<it.length;St+=1){var Ge=Nn(Vt=it[St])?Vt(Je):Vt;for(var M in Ge)Je[M]=M==="className"?Pn(Je[M],Ge[M]):M==="style"?Ee(Ee({},Je[M]),Ge[M]):Ge[M]}return ge.className&&(Je.className=Pn(Je.className,ge.className)),Je}(A,P,I),N=z.as||D,F={};for(var V in z)z[V]===void 0||V[0]==="$"||V==="as"||V==="theme"&&z.theme===I||(V==="forwardedAs"?F.as=z.forwardedAs:ve&&!ve(V,N)||(F[V]=z[V]));var ft=function(it,ge){var He=yh(),Vt=it.generateAndInjectStyles(ge,He.styleSheet,He.stylis);return Vt}(T,z),Ne=Pn(G,R);return ft&&(Ne+=" "+ft),z.className&&(Ne+=" "+z.className),F[dd(N)&&!Kv.has(N)?"class":"className"]=Ne,w&&(F.ref=w),j.createElement(N,F)}(g,f,S)}x.displayName=m;var g=ce.forwardRef(x);return g.attrs=b,g.componentStyle=y,g.displayName=m,g.shouldForwardProp=v,g.foldedComponentIds=o?Pn(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=p,g.target=o?i.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=o?function(S){for(var C=[],P=1;P<arguments.length;P++)C[P-1]=arguments[P];for(var w=0,A=C;w<A.length;w++)gh(S,A[w],!0);return S}({},i.defaultProps,f):f}}),Vm(g,function(){return".".concat(g.styledComponentId)}),s&&nb(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function Kf(e,t){for(var r=[e[0]],o=0,i=t.length;o<i;o+=1)r.push(t[o],e[o+1]);return r}var Xf=function(e){return Object.assign(e,{isCss:!0})};function mr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Nn(e)||ys(e))return Xf(Yr(Kf(bc,xs([e],t,!0))));var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?Yr(o):Xf(Yr(Kf(o,t)))}function vh(e,t,r){if(r===void 0&&(r=Ko),!t)throw On(1,t);var o=function(i){for(var s=[],l=1;l<arguments.length;l++)s[l-1]=arguments[l];return e(t,r,mr.apply(void 0,xs([i],s,!1)))};return o.attrs=function(i){return vh(e,t,Ee(Ee({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},o.withConfig=function(i){return vh(e,t,Ee(Ee({},r),i))},o}var db=function(e){return vh(UC,e)},a=db;Kv.forEach(function(e){a[e]=db(e)});var HC=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=cb(t),Ll.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,o,i){var s=i(fh(Yr(this.rules,r,o,i)),""),l=this.componentId+t;o.insertRules(l,l,s)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,o,i){t>2&&Ll.registerId(this.componentId+t),this.removeStyles(t,o),this.createStyles(t,r,o,i)},e}();function GC(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var o=mr.apply(void 0,xs([e],t,!1)),i="sc-global-".concat(Zv(JSON.stringify(o))),s=new HC(o,i),l=function(d){var u=yh(),h=ce.useContext(vs),m=ce.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&c(m,d,u.styleSheet,h,u.stylis),ce.useLayoutEffect(function(){if(!u.styleSheet.server)return c(m,d,u.styleSheet,h,u.stylis),function(){return s.removeStyles(m,u.styleSheet)}},[m,d,u.styleSheet,h,u.stylis]),null};function c(d,u,h,m,p){if(s.isStatic)s.renderStyles(d,uC,h,p);else{var b=Ee(Ee({},u),{theme:Qv(u,m,l.defaultProps)});s.renderStyles(d,b,h,p)}}return ce.memo(l)}const YC=(e="#0ea5e9")=>{const t=s=>{const l=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(s);return l?[parseInt(l[1],16),parseInt(l[2],16),parseInt(l[3],16)]:[0,0,0]},r=(s,l,c)=>"#"+[s,l,c].map(d=>{const u=Math.round(Math.max(0,Math.min(255,d))).toString(16);return u.length===1?"0"+u:u}).join(""),o=(s,l)=>{const c=t(s);return r(c[0]+(255-c[0])*l,c[1]+(255-c[1])*l,c[2]+(255-c[2])*l)},i=(s,l)=>{const c=t(s);return r(c[0]*(1-l),c[1]*(1-l),c[2]*(1-l))};return{50:o(e,.85),100:o(e,.75),200:o(e,.65),300:o(e,.5),400:o(e,.25),500:e,600:i(e,.1),700:i(e,.2),800:i(e,.3),900:i(e,.4)}},Jf={shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},borderRadius:{sm:"0.125rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem",full:"9999px"},transition:{fast:"150ms",normal:"250ms",slow:"350ms"},breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},spacing:{px:"1px",0:"0",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},qC={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},_m=(e,t)=>{const r=t?YC(t):qC,o={primary:r,neutral:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},success:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},warning:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},danger:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},purple:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},accent:{green:"#10b981",red:"#ef4444",yellow:"#f59e0b",purple:"#8b5cf6"},background:{primary:"#f1f5f9",secondary:"#ffffff",tertiary:"#e2e8f0",lighter:"#f8fafc",light:"#f5f5f5",hover:"#f1f5f9"},text:{primary:"#0f172a",secondary:"#475569",tertiary:"#64748b",inverse:"#ffffff"},border:{light:"#e2e8f0",lighter:"#f1f5f9",dark:"#cbd5e1"},shadow:e==="light"?{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",DEFAULT:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",none:"none"}:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.4)",DEFAULT:"0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.4)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)",none:"none"},sidebar:{background:e==="light"?"#ffffff":"#1e293b",text:e==="light"?"#334155":"#e2e8f0",border:e==="light"?"#e2e8f0":"#334155",logoText:e==="light"?r[600]:r[400],sectionLabel:e==="light"?"#94a3b8":"#64748b",menuItem:e==="light"?"#475569":"#cbd5e1",activeMenuItem:e==="light"?r[600]:r[400],activeMenuItemBg:e==="light"?"#f1f5f9":"#334155",menuItemHover:e==="light"?"#f8fafc":"#334155",toggleButton:e==="light"?"#64748b":"#94a3b8",toggleButtonHover:e==="light"?"#e2e8f0":"#475569",subtleText:e==="light"?"#64748b":"#94a3b8"}},i={sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",small:"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",medium:"0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)"},s={hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800,sidebar:1e3,navButton:1100};return e==="dark"?{...Jf,colors:{...o,background:{primary:"#0f172a",secondary:"#1e293b",tertiary:"#334155",lighter:"#1e293b",light:"#334155",hover:"#475569"},text:{primary:"#f8fafc",secondary:"#e2e8f0",tertiary:"#94a3b8",inverse:"#0f172a"},border:{light:"#334155",lighter:"#475569",dark:"#1e293b"},shadow:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.07)",DEFAULT:"0 1px 3px 0 rgba(0, 0, 0, 0.7), 0 1px 2px 0 rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.07)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.7), 0 2px 4px -1px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.07)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.7), 0 4px 6px -2px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.07)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.7), 0 10px 10px -5px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.07)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.07)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.7)",none:"none"}},shadows:i,zIndices:s}:{...Jf,colors:o,shadows:i,zIndices:s}};_m("light");_m("dark");const QC=GC`
  :root {
    /* Primary Colors */
    --primary-50: #f0f9ff;
    --primary-100: #e0f2fe;
    --primary-200: #bae6fd;
    --primary-300: #7dd3fc;
    --primary-400: #38bdf8;
    --primary-500: #0ea5e9;
    --primary-600: #0284c7;
    --primary-700: #0369a1;
    --primary-800: #075985;
    --primary-900: #0c4a6e;

    /* Neutral Colors */
    --neutral-50: #f8fafc;
    --neutral-100: #f1f5f9;
    --neutral-200: #e2e8f0;
    --neutral-300: #cbd5e1;
    --neutral-400: #94a3b8;
    --neutral-500: #64748b;
    --neutral-600: #475569;
    --neutral-700: #334155;
    --neutral-800: #1e293b;
    --neutral-900: #0f172a;

    /* Accent Colors */
    --accent-green: #10b981;
    --accent-red: #ef4444;
    --accent-yellow: #f59e0b;
    --accent-purple: #8b5cf6;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    
    /* Border Radius */
    --border-radius-sm: 0.125rem;
    --border-radius-md: 0.375rem;
    --border-radius-lg: 0.5rem;
    --border-radius-xl: 0.75rem;
    --border-radius-2xl: 1rem;
    --border-radius-full: 9999px;
    
    /* Animation Speed */
    --transition-fast: 150ms;
    --transition-normal: 250ms;
    --transition-slow: 350ms;
    
    /* Font Sizes */
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    
    /* Font Weights */
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${e=>e.theme.colors.background.primary};
    color: ${e=>e.theme.colors.text.primary};
    height: 100%;
    width: 100%;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  #root {
    height: 100%;
  }

  /* Ensure text selection is visible with proper contrast in all contexts */
  ::selection {
    background-color: ${e=>e.theme.colors.primary[600]};
    color: white;
  }

  ::-moz-selection {
    background-color: ${e=>e.theme.colors.primary[600]};
    color: white;
  }

  /* Ensure text selection within inputs and contentEditable elements works in dark mode */
  input::selection, 
  textarea::selection, 
  [contenteditable]::selection,
  select::selection,
  option::selection,
  td::selection,
  th::selection,
  div::selection,
  p::selection,
  span::selection,
  li::selection,
  a::selection,
  h1::selection, h2::selection, h3::selection, h4::selection, h5::selection, h6::selection {
    background-color: ${e=>e.theme.colors.primary[600]};
    color: white;
  }

  /* Fix for Firefox */
  input::-moz-selection, 
  textarea::-moz-selection, 
  [contenteditable]::-moz-selection,
  select::-moz-selection,
  option::-moz-selection,
  td::-moz-selection,
  th::-moz-selection,
  div::-moz-selection,
  p::-moz-selection,
  span::-moz-selection,
  li::-moz-selection,
  a::-moz-selection,
  h1::-moz-selection, h2::-moz-selection, h3::-moz-selection, h4::-moz-selection, h5::-moz-selection, h6::-moz-selection {
    background-color: ${e=>e.theme.colors.primary[600]};
    color: white;
  }

  /* Fix for table row selection */
  tr.selected, tr:focus-within {
    background-color: ${e=>e.theme.colors.background.primary==="#0f172a"?e.theme.colors.primary[900]+"80":e.theme.colors.primary[50]} !important;
    outline: 1px solid ${e=>e.theme.colors.primary[500]};
  }

  tr td.selected, tr td:focus-within {
    background-color: ${e=>e.theme.colors.background.primary==="#0f172a"?e.theme.colors.primary[700]+"50":e.theme.colors.primary[100]} !important;
  }

  /* Make checkboxes more visible in dark mode */
  input[type="checkbox"] {
    accent-color: ${e=>e.theme.colors.primary[600]};
    width: 16px;
    height: 16px;
    
    &:checked {
      background-color: ${e=>e.theme.colors.primary[600]};
      border-color: ${e=>e.theme.colors.primary[600]};
    }
  }

  a {
    text-decoration: none;
    color: var(--primary-600);
    transition: color var(--transition-fast) ease-in-out;
    
    &:hover {
      color: var(--primary-700);
    }
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
  }

  /* Fix for selection in inputs */
  input::selection, textarea::selection {
    background-color: ${e=>e.theme.colors.primary[400]};
    color: ${e=>e.theme.colors.text.inverse};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: var(--font-weight-semibold);
    line-height: 1.2;
    margin-bottom: 0.5em;
  }

  h1 {
    font-size: var(--font-size-4xl);
  }

  h2 {
    font-size: var(--font-size-3xl);
  }

  h3 {
    font-size: var(--font-size-2xl);
  }

  h4 {
    font-size: var(--font-size-xl);
  }

  p {
    margin-bottom: 1rem;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${e=>e.theme.colors.background.lighter};
  }

  ::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.colors.text.tertiary};
    border-radius: var(--border-radius-full);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${e=>e.theme.colors.text.secondary};
  }
`,ub=j.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),wc=j.createContext({}),$c=j.createContext(null),jc=typeof document<"u",Wm=jc?j.useLayoutEffect:j.useEffect,hb=j.createContext({strict:!1}),Um=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),KC="framerAppearId",mb="data-"+Um(KC);function XC(e,t,r,o){const{visualElement:i}=j.useContext(wc),s=j.useContext(hb),l=j.useContext($c),c=j.useContext(ub).reducedMotion,d=j.useRef();o=o||s.renderer,!d.current&&o&&(d.current=o(e,{visualState:t,parent:i,props:r,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:c}));const u=d.current;j.useInsertionEffect(()=>{u&&u.update(r,l)});const h=j.useRef(!!(r[mb]&&!window.HandoffComplete));return Wm(()=>{u&&(u.render(),h.current&&u.animationState&&u.animationState.animateChanges())}),j.useEffect(()=>{u&&(u.updateFeatures(),!h.current&&u.animationState&&u.animationState.animateChanges(),h.current&&(h.current=!1,window.HandoffComplete=!0))}),u}function Ao(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function JC(e,t,r){return j.useCallback(o=>{o&&e.mount&&e.mount(o),t&&(o?t.mount(o):t.unmount()),r&&(typeof r=="function"?r(o):Ao(r)&&(r.current=o))},[t])}function bs(e){return typeof e=="string"||Array.isArray(e)}function kc(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Hm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Gm=["initial",...Hm];function Cc(e){return kc(e.animate)||Gm.some(t=>bs(e[t]))}function pb(e){return!!(Cc(e)||e.variants)}function ZC(e,t){if(Cc(e)){const{initial:r,animate:o}=e;return{initial:r===!1||bs(r)?r:void 0,animate:bs(o)?o:void 0}}return e.inherit!==!1?t:{}}function e5(e){const{initial:t,animate:r}=ZC(e,j.useContext(wc));return j.useMemo(()=>({initial:t,animate:r}),[Zf(t),Zf(r)])}function Zf(e){return Array.isArray(e)?e.join(" "):e}const e0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ws={};for(const e in e0)ws[e]={isEnabled:t=>e0[e].some(r=>!!t[r])};function t5(e){for(const t in e)ws[t]={...ws[t],...e[t]}}const Ym=j.createContext({}),fb=j.createContext({}),r5=Symbol.for("motionComponentSymbol");function n5({preloadedFeatures:e,createVisualElement:t,useRender:r,useVisualState:o,Component:i}){e&&t5(e);function s(c,d){let u;const h={...j.useContext(ub),...c,layoutId:o5(c)},{isStatic:m}=h,p=e5(c),b=o(c,m);if(!m&&jc){p.visualElement=XC(i,b,h,t);const v=j.useContext(fb),$=j.useContext(hb).strict;p.visualElement&&(u=p.visualElement.loadFeatures(h,$,e,v))}return j.createElement(wc.Provider,{value:p},u&&p.visualElement?j.createElement(u,{visualElement:p.visualElement,...h}):null,r(i,c,JC(b,p.visualElement,d),b,m,p.visualElement))}const l=j.forwardRef(s);return l[r5]=i,l}function o5({layoutId:e}){const t=j.useContext(Ym).id;return t&&e!==void 0?t+"-"+e:e}function i5(e){function t(o,i={}){return n5(e(o,i))}if(typeof Proxy>"u")return t;const r=new Map;return new Proxy(t,{get:(o,i)=>(r.has(i)||r.set(i,t(i)),r.get(i))})}const s5=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function qm(e){return typeof e!="string"||e.includes("-")?!1:!!(s5.indexOf(e)>-1||/[A-Z]/.test(e))}const Rl={};function a5(e){Object.assign(Rl,e)}const Ds=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Gn=new Set(Ds);function gb(e,{layout:t,layoutId:r}){return Gn.has(e)||e.startsWith("origin")||(t||r!==void 0)&&(!!Rl[e]||e==="opacity")}const ot=e=>!!(e&&e.getVelocity),l5={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},c5=Ds.length;function d5(e,{enableHardwareAcceleration:t=!0,allowTransformNone:r=!0},o,i){let s="";for(let l=0;l<c5;l++){const c=Ds[l];if(e[c]!==void 0){const d=l5[c]||c;s+=`${d}(${e[c]}) `}}return t&&!e.z&&(s+="translateZ(0)"),s=s.trim(),i?s=i(e,o?"":s):r&&o&&(s="none"),s}const xb=e=>t=>typeof t=="string"&&t.startsWith(e),yb=xb("--"),bh=xb("var(--"),u5=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,h5=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Jr=(e,t,r)=>Math.min(Math.max(r,e),t),Yn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Gi={...Yn,transform:e=>Jr(0,1,e)},na={...Yn,default:1},Yi=e=>Math.round(e*1e5)/1e5,Sc=/(-)?([\d]*\.?[\d])+/g,vb=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,m5=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Es(e){return typeof e=="string"}const Ls=e=>({test:t=>Es(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Ar=Ls("deg"),qt=Ls("%"),U=Ls("px"),p5=Ls("vh"),f5=Ls("vw"),t0={...qt,parse:e=>qt.parse(e)/100,transform:e=>qt.transform(e*100)},r0={...Yn,transform:Math.round},bb={borderWidth:U,borderTopWidth:U,borderRightWidth:U,borderBottomWidth:U,borderLeftWidth:U,borderRadius:U,radius:U,borderTopLeftRadius:U,borderTopRightRadius:U,borderBottomRightRadius:U,borderBottomLeftRadius:U,width:U,maxWidth:U,height:U,maxHeight:U,size:U,top:U,right:U,bottom:U,left:U,padding:U,paddingTop:U,paddingRight:U,paddingBottom:U,paddingLeft:U,margin:U,marginTop:U,marginRight:U,marginBottom:U,marginLeft:U,rotate:Ar,rotateX:Ar,rotateY:Ar,rotateZ:Ar,scale:na,scaleX:na,scaleY:na,scaleZ:na,skew:Ar,skewX:Ar,skewY:Ar,distance:U,translateX:U,translateY:U,translateZ:U,x:U,y:U,z:U,perspective:U,transformPerspective:U,opacity:Gi,originX:t0,originY:t0,originZ:U,zIndex:r0,fillOpacity:Gi,strokeOpacity:Gi,numOctaves:r0};function Qm(e,t,r,o){const{style:i,vars:s,transform:l,transformOrigin:c}=e;let d=!1,u=!1,h=!0;for(const m in t){const p=t[m];if(yb(m)){s[m]=p;continue}const b=bb[m],v=h5(p,b);if(Gn.has(m)){if(d=!0,l[m]=v,!h)continue;p!==(b.default||0)&&(h=!1)}else m.startsWith("origin")?(u=!0,c[m]=v):i[m]=v}if(t.transform||(d||o?i.transform=d5(e.transform,r,h,o):i.transform&&(i.transform="none")),u){const{originX:m="50%",originY:p="50%",originZ:b=0}=c;i.transformOrigin=`${m} ${p} ${b}`}}const Km=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function wb(e,t,r){for(const o in t)!ot(t[o])&&!gb(o,r)&&(e[o]=t[o])}function g5({transformTemplate:e},t,r){return j.useMemo(()=>{const o=Km();return Qm(o,t,{enableHardwareAcceleration:!r},e),Object.assign({},o.vars,o.style)},[t])}function x5(e,t,r){const o=e.style||{},i={};return wb(i,o,e),Object.assign(i,g5(e,t,r)),e.transformValues?e.transformValues(i):i}function y5(e,t,r){const o={},i=x5(e,t,r);return e.drag&&e.dragListener!==!1&&(o.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(o.tabIndex=0),o.style=i,o}const v5=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Il(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||v5.has(e)}let $b=e=>!Il(e);function b5(e){e&&($b=t=>t.startsWith("on")?!Il(t):e(t))}try{b5(require("@emotion/is-prop-valid").default)}catch{}function w5(e,t,r){const o={};for(const i in e)i==="values"&&typeof e.values=="object"||($b(i)||r===!0&&Il(i)||!t&&!Il(i)||e.draggable&&i.startsWith("onDrag"))&&(o[i]=e[i]);return o}function n0(e,t,r){return typeof e=="string"?e:U.transform(t+r*e)}function $5(e,t,r){const o=n0(t,e.x,e.width),i=n0(r,e.y,e.height);return`${o} ${i}`}const j5={offset:"stroke-dashoffset",array:"stroke-dasharray"},k5={offset:"strokeDashoffset",array:"strokeDasharray"};function C5(e,t,r=1,o=0,i=!0){e.pathLength=1;const s=i?j5:k5;e[s.offset]=U.transform(-o);const l=U.transform(t),c=U.transform(r);e[s.array]=`${l} ${c}`}function Xm(e,{attrX:t,attrY:r,attrScale:o,originX:i,originY:s,pathLength:l,pathSpacing:c=1,pathOffset:d=0,...u},h,m,p){if(Qm(e,u,h,p),m){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:b,style:v,dimensions:$}=e;b.transform&&($&&(v.transform=b.transform),delete b.transform),$&&(i!==void 0||s!==void 0||v.transform)&&(v.transformOrigin=$5($,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(b.x=t),r!==void 0&&(b.y=r),o!==void 0&&(b.scale=o),l!==void 0&&C5(b,l,c,d,!1)}const jb=()=>({...Km(),attrs:{}}),Jm=e=>typeof e=="string"&&e.toLowerCase()==="svg";function S5(e,t,r,o){const i=j.useMemo(()=>{const s=jb();return Xm(s,t,{enableHardwareAcceleration:!1},Jm(o),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};wb(s,e.style,e),i.style={...s,...i.style}}return i}function P5(e=!1){return(r,o,i,{latestValues:s},l)=>{const d=(qm(r)?S5:y5)(o,s,l,r),h={...w5(o,typeof r=="string",e),...d,ref:i},{children:m}=o,p=j.useMemo(()=>ot(m)?m.get():m,[m]);return j.createElement(r,{...h,children:p})}}function kb(e,{style:t,vars:r},o,i){Object.assign(e.style,t,i&&i.getProjectionStyles(o));for(const s in r)e.style.setProperty(s,r[s])}const Cb=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Sb(e,t,r,o){kb(e,t,void 0,o);for(const i in t.attrs)e.setAttribute(Cb.has(i)?i:Um(i),t.attrs[i])}function Zm(e,t){const{style:r}=e,o={};for(const i in r)(ot(r[i])||t.style&&ot(t.style[i])||gb(i,e))&&(o[i]=r[i]);return o}function Pb(e,t){const r=Zm(e,t);for(const o in e)if(ot(e[o])||ot(t[o])){const i=Ds.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[i]=e[o]}return r}function ep(e,t,r,o={},i={}){return typeof t=="function"&&(t=t(r!==void 0?r:e.custom,o,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(r!==void 0?r:e.custom,o,i)),t}function Tb(e){const t=j.useRef(null);return t.current===null&&(t.current=e()),t.current}const Fl=e=>Array.isArray(e),T5=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),A5=e=>Fl(e)?e[e.length-1]||0:e;function tl(e){const t=ot(e)?e.get():e;return T5(t)?t.toValue():t}function z5({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:r},o,i,s){const l={latestValues:M5(o,i,s,e),renderState:t()};return r&&(l.mount=c=>r(o,c,l)),l}const Ab=e=>(t,r)=>{const o=j.useContext(wc),i=j.useContext($c),s=()=>z5(e,t,o,i);return r?s():Tb(s)};function M5(e,t,r,o){const i={},s=o(e,{});for(const p in s)i[p]=tl(s[p]);let{initial:l,animate:c}=e;const d=Cc(e),u=pb(e);t&&u&&!d&&e.inherit!==!1&&(l===void 0&&(l=t.initial),c===void 0&&(c=t.animate));let h=r?r.initial===!1:!1;h=h||l===!1;const m=h?c:l;return m&&typeof m!="boolean"&&!kc(m)&&(Array.isArray(m)?m:[m]).forEach(b=>{const v=ep(e,b);if(!v)return;const{transitionEnd:$,transition:k,...y}=v;for(const x in y){let g=y[x];if(Array.isArray(g)){const f=h?g.length-1:0;g=g[f]}g!==null&&(i[x]=g)}for(const x in $)i[x]=$[x]}),i}const we=e=>e;class o0{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const r=this.order.indexOf(t);r!==-1&&(this.order.splice(r,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function D5(e){let t=new o0,r=new o0,o=0,i=!1,s=!1;const l=new WeakSet,c={schedule:(d,u=!1,h=!1)=>{const m=h&&i,p=m?t:r;return u&&l.add(d),p.add(d)&&m&&i&&(o=t.order.length),d},cancel:d=>{r.remove(d),l.delete(d)},process:d=>{if(i){s=!0;return}if(i=!0,[t,r]=[r,t],r.clear(),o=t.order.length,o)for(let u=0;u<o;u++){const h=t.order[u];h(d),l.has(h)&&(c.schedule(h),e())}i=!1,s&&(s=!1,c.process(d))}};return c}const oa=["prepare","read","update","preRender","render","postRender"],E5=40;function L5(e,t){let r=!1,o=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=oa.reduce((m,p)=>(m[p]=D5(()=>r=!0),m),{}),l=m=>s[m].process(i),c=()=>{const m=performance.now();r=!1,i.delta=o?1e3/60:Math.max(Math.min(m-i.timestamp,E5),1),i.timestamp=m,i.isProcessing=!0,oa.forEach(l),i.isProcessing=!1,r&&t&&(o=!1,e(c))},d=()=>{r=!0,o=!0,i.isProcessing||e(c)};return{schedule:oa.reduce((m,p)=>{const b=s[p];return m[p]=(v,$=!1,k=!1)=>(r||d(),b.schedule(v,$,k)),m},{}),cancel:m=>oa.forEach(p=>s[p].cancel(m)),state:i,steps:s}}const{schedule:re,cancel:pr,state:_e,steps:hd}=L5(typeof requestAnimationFrame<"u"?requestAnimationFrame:we,!0),R5={useVisualState:Ab({scrapeMotionValuesFromProps:Pb,createRenderState:jb,onMount:(e,t,{renderState:r,latestValues:o})=>{re.read(()=>{try{r.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}}),re.render(()=>{Xm(r,o,{enableHardwareAcceleration:!1},Jm(t.tagName),e.transformTemplate),Sb(t,r)})}})},I5={useVisualState:Ab({scrapeMotionValuesFromProps:Zm,createRenderState:Km})};function F5(e,{forwardMotionProps:t=!1},r,o){return{...qm(e)?R5:I5,preloadedFeatures:r,useRender:P5(t),createVisualElement:o,Component:e}}function ir(e,t,r,o={passive:!0}){return e.addEventListener(t,r,o),()=>e.removeEventListener(t,r)}const zb=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Pc(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const B5=e=>t=>zb(t)&&e(t,Pc(t));function ar(e,t,r,o){return ir(e,t,B5(r),o)}const N5=(e,t)=>r=>t(e(r)),qr=(...e)=>e.reduce(N5);function Mb(e){let t=null;return()=>{const r=()=>{t=null};return t===null?(t=e,r):!1}}const i0=Mb("dragHorizontal"),s0=Mb("dragVertical");function Db(e){let t=!1;if(e==="y")t=s0();else if(e==="x")t=i0();else{const r=i0(),o=s0();r&&o?t=()=>{r(),o()}:(r&&r(),o&&o())}return t}function Eb(){const e=Db(!0);return e?(e(),!1):!0}class on{constructor(t){this.isMounted=!1,this.node=t}update(){}}function a0(e,t){const r="pointer"+(t?"enter":"leave"),o="onHover"+(t?"Start":"End"),i=(s,l)=>{if(s.pointerType==="touch"||Eb())return;const c=e.getProps();e.animationState&&c.whileHover&&e.animationState.setActive("whileHover",t),c[o]&&re.update(()=>c[o](s,l))};return ar(e.current,r,i,{passive:!e.getProps()[o]})}class O5 extends on{mount(){this.unmount=qr(a0(this.node,!0),a0(this.node,!1))}unmount(){}}class V5 extends on{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=qr(ir(this.node.current,"focus",()=>this.onFocus()),ir(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Lb=(e,t)=>t?e===t?!0:Lb(e,t.parentElement):!1;function md(e,t){if(!t)return;const r=new PointerEvent("pointer"+e);t(r,Pc(r))}class _5 extends on{constructor(){super(...arguments),this.removeStartListeners=we,this.removeEndListeners=we,this.removeAccessibleListeners=we,this.startPointerPress=(t,r)=>{if(this.isPressing)return;this.removeEndListeners();const o=this.node.getProps(),s=ar(window,"pointerup",(c,d)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:h,globalTapTarget:m}=this.node.getProps();re.update(()=>{!m&&!Lb(this.node.current,c.target)?h&&h(c,d):u&&u(c,d)})},{passive:!(o.onTap||o.onPointerUp)}),l=ar(window,"pointercancel",(c,d)=>this.cancelPress(c,d),{passive:!(o.onTapCancel||o.onPointerCancel)});this.removeEndListeners=qr(s,l),this.startPress(t,r)},this.startAccessiblePress=()=>{const t=s=>{if(s.key!=="Enter"||this.isPressing)return;const l=c=>{c.key!=="Enter"||!this.checkPressEnd()||md("up",(d,u)=>{const{onTap:h}=this.node.getProps();h&&re.update(()=>h(d,u))})};this.removeEndListeners(),this.removeEndListeners=ir(this.node.current,"keyup",l),md("down",(c,d)=>{this.startPress(c,d)})},r=ir(this.node.current,"keydown",t),o=()=>{this.isPressing&&md("cancel",(s,l)=>this.cancelPress(s,l))},i=ir(this.node.current,"blur",o);this.removeAccessibleListeners=qr(r,i)}}startPress(t,r){this.isPressing=!0;const{onTapStart:o,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),o&&re.update(()=>o(t,r))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Eb()}cancelPress(t,r){if(!this.checkPressEnd())return;const{onTapCancel:o}=this.node.getProps();o&&re.update(()=>o(t,r))}mount(){const t=this.node.getProps(),r=ar(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),o=ir(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=qr(r,o)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const wh=new WeakMap,pd=new WeakMap,W5=e=>{const t=wh.get(e.target);t&&t(e)},U5=e=>{e.forEach(W5)};function H5({root:e,...t}){const r=e||document;pd.has(r)||pd.set(r,{});const o=pd.get(r),i=JSON.stringify(t);return o[i]||(o[i]=new IntersectionObserver(U5,{root:e,...t})),o[i]}function G5(e,t,r){const o=H5(t);return wh.set(e,r),o.observe(e),()=>{wh.delete(e),o.unobserve(e)}}const Y5={some:0,all:1};class q5 extends on{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:r,margin:o,amount:i="some",once:s}=t,l={root:r?r.current:void 0,rootMargin:o,threshold:typeof i=="number"?i:Y5[i]},c=d=>{const{isIntersecting:u}=d;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:h,onViewportLeave:m}=this.node.getProps(),p=u?h:m;p&&p(d)};return G5(this.node.current,l,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:r}=this.node;["amount","margin","root"].some(Q5(t,r))&&this.startObserver()}unmount(){}}function Q5({viewport:e={}},{viewport:t={}}={}){return r=>e[r]!==t[r]}const K5={inView:{Feature:q5},tap:{Feature:_5},focus:{Feature:V5},hover:{Feature:O5}};function Rb(e,t){if(!Array.isArray(t))return!1;const r=t.length;if(r!==e.length)return!1;for(let o=0;o<r;o++)if(t[o]!==e[o])return!1;return!0}function X5(e){const t={};return e.values.forEach((r,o)=>t[o]=r.get()),t}function J5(e){const t={};return e.values.forEach((r,o)=>t[o]=r.getVelocity()),t}function Tc(e,t,r){const o=e.getProps();return ep(o,t,r!==void 0?r:o.custom,X5(e),J5(e))}let tp=we;const Dn=e=>e*1e3,lr=e=>e/1e3,Z5={current:!1},Ib=e=>Array.isArray(e)&&typeof e[0]=="number";function Fb(e){return!!(!e||typeof e=="string"&&Bb[e]||Ib(e)||Array.isArray(e)&&e.every(Fb))}const Ri=([e,t,r,o])=>`cubic-bezier(${e}, ${t}, ${r}, ${o})`,Bb={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ri([0,.65,.55,1]),circOut:Ri([.55,0,1,.45]),backIn:Ri([.31,.01,.66,-.59]),backOut:Ri([.33,1.53,.69,.99])};function Nb(e){if(e)return Ib(e)?Ri(e):Array.isArray(e)?e.map(Nb):Bb[e]}function eS(e,t,r,{delay:o=0,duration:i,repeat:s=0,repeatType:l="loop",ease:c,times:d}={}){const u={[t]:r};d&&(u.offset=d);const h=Nb(c);return Array.isArray(h)&&(u.easing=h),e.animate(u,{delay:o,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:s+1,direction:l==="reverse"?"alternate":"normal"})}function tS(e,{repeat:t,repeatType:r="loop"}){const o=t&&r!=="loop"&&t%2===1?0:e.length-1;return e[o]}const Ob=(e,t,r)=>(((1-3*r+3*t)*e+(3*r-6*t))*e+3*t)*e,rS=1e-7,nS=12;function oS(e,t,r,o,i){let s,l,c=0;do l=t+(r-t)/2,s=Ob(l,o,i)-e,s>0?r=l:t=l;while(Math.abs(s)>rS&&++c<nS);return l}function Rs(e,t,r,o){if(e===t&&r===o)return we;const i=s=>oS(s,0,1,e,r);return s=>s===0||s===1?s:Ob(i(s),t,o)}const iS=Rs(.42,0,1,1),sS=Rs(0,0,.58,1),Vb=Rs(.42,0,.58,1),aS=e=>Array.isArray(e)&&typeof e[0]!="number",_b=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Wb=e=>t=>1-e(1-t),rp=e=>1-Math.sin(Math.acos(e)),Ub=Wb(rp),lS=_b(rp),Hb=Rs(.33,1.53,.69,.99),np=Wb(Hb),cS=_b(np),dS=e=>(e*=2)<1?.5*np(e):.5*(2-Math.pow(2,-10*(e-1))),uS={linear:we,easeIn:iS,easeInOut:Vb,easeOut:sS,circIn:rp,circInOut:lS,circOut:Ub,backIn:np,backInOut:cS,backOut:Hb,anticipate:dS},l0=e=>{if(Array.isArray(e)){tp(e.length===4);const[t,r,o,i]=e;return Rs(t,r,o,i)}else if(typeof e=="string")return uS[e];return e},op=(e,t)=>r=>!!(Es(r)&&m5.test(r)&&r.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(r,t)),Gb=(e,t,r)=>o=>{if(!Es(o))return o;const[i,s,l,c]=o.match(Sc);return{[e]:parseFloat(i),[t]:parseFloat(s),[r]:parseFloat(l),alpha:c!==void 0?parseFloat(c):1}},hS=e=>Jr(0,255,e),fd={...Yn,transform:e=>Math.round(hS(e))},Tn={test:op("rgb","red"),parse:Gb("red","green","blue"),transform:({red:e,green:t,blue:r,alpha:o=1})=>"rgba("+fd.transform(e)+", "+fd.transform(t)+", "+fd.transform(r)+", "+Yi(Gi.transform(o))+")"};function mS(e){let t="",r="",o="",i="";return e.length>5?(t=e.substring(1,3),r=e.substring(3,5),o=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),r=e.substring(2,3),o=e.substring(3,4),i=e.substring(4,5),t+=t,r+=r,o+=o,i+=i),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(o,16),alpha:i?parseInt(i,16)/255:1}}const $h={test:op("#"),parse:mS,transform:Tn.transform},zo={test:op("hsl","hue"),parse:Gb("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:r,alpha:o=1})=>"hsla("+Math.round(e)+", "+qt.transform(Yi(t))+", "+qt.transform(Yi(r))+", "+Yi(Gi.transform(o))+")"},Ye={test:e=>Tn.test(e)||$h.test(e)||zo.test(e),parse:e=>Tn.test(e)?Tn.parse(e):zo.test(e)?zo.parse(e):$h.parse(e),transform:e=>Es(e)?e:e.hasOwnProperty("red")?Tn.transform(e):zo.transform(e)},he=(e,t,r)=>-r*e+r*t+e;function gd(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function pS({hue:e,saturation:t,lightness:r,alpha:o}){e/=360,t/=100,r/=100;let i=0,s=0,l=0;if(!t)i=s=l=r;else{const c=r<.5?r*(1+t):r+t-r*t,d=2*r-c;i=gd(d,c,e+1/3),s=gd(d,c,e),l=gd(d,c,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(l*255),alpha:o}}const xd=(e,t,r)=>{const o=e*e;return Math.sqrt(Math.max(0,r*(t*t-o)+o))},fS=[$h,Tn,zo],gS=e=>fS.find(t=>t.test(e));function c0(e){const t=gS(e);let r=t.parse(e);return t===zo&&(r=pS(r)),r}const Yb=(e,t)=>{const r=c0(e),o=c0(t),i={...r};return s=>(i.red=xd(r.red,o.red,s),i.green=xd(r.green,o.green,s),i.blue=xd(r.blue,o.blue,s),i.alpha=he(r.alpha,o.alpha,s),Tn.transform(i))};function xS(e){var t,r;return isNaN(e)&&Es(e)&&(((t=e.match(Sc))===null||t===void 0?void 0:t.length)||0)+(((r=e.match(vb))===null||r===void 0?void 0:r.length)||0)>0}const qb={regex:u5,countKey:"Vars",token:"${v}",parse:we},Qb={regex:vb,countKey:"Colors",token:"${c}",parse:Ye.parse},Kb={regex:Sc,countKey:"Numbers",token:"${n}",parse:Yn.parse};function yd(e,{regex:t,countKey:r,token:o,parse:i}){const s=e.tokenised.match(t);s&&(e["num"+r]=s.length,e.tokenised=e.tokenised.replace(t,o),e.values.push(...s.map(i)))}function Bl(e){const t=e.toString(),r={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return r.value.includes("var(--")&&yd(r,qb),yd(r,Qb),yd(r,Kb),r}function Xb(e){return Bl(e).values}function Jb(e){const{values:t,numColors:r,numVars:o,tokenised:i}=Bl(e),s=t.length;return l=>{let c=i;for(let d=0;d<s;d++)d<o?c=c.replace(qb.token,l[d]):d<o+r?c=c.replace(Qb.token,Ye.transform(l[d])):c=c.replace(Kb.token,Yi(l[d]));return c}}const yS=e=>typeof e=="number"?0:e;function vS(e){const t=Xb(e);return Jb(e)(t.map(yS))}const Zr={test:xS,parse:Xb,createTransformer:Jb,getAnimatableNone:vS},Zb=(e,t)=>r=>`${r>0?t:e}`;function ew(e,t){return typeof e=="number"?r=>he(e,t,r):Ye.test(e)?Yb(e,t):e.startsWith("var(")?Zb(e,t):rw(e,t)}const tw=(e,t)=>{const r=[...e],o=r.length,i=e.map((s,l)=>ew(s,t[l]));return s=>{for(let l=0;l<o;l++)r[l]=i[l](s);return r}},bS=(e,t)=>{const r={...e,...t},o={};for(const i in r)e[i]!==void 0&&t[i]!==void 0&&(o[i]=ew(e[i],t[i]));return i=>{for(const s in o)r[s]=o[s](i);return r}},rw=(e,t)=>{const r=Zr.createTransformer(t),o=Bl(e),i=Bl(t);return o.numVars===i.numVars&&o.numColors===i.numColors&&o.numNumbers>=i.numNumbers?qr(tw(o.values,i.values),r):Zb(e,t)},$s=(e,t,r)=>{const o=t-e;return o===0?1:(r-e)/o},d0=(e,t)=>r=>he(e,t,r);function wS(e){return typeof e=="number"?d0:typeof e=="string"?Ye.test(e)?Yb:rw:Array.isArray(e)?tw:typeof e=="object"?bS:d0}function $S(e,t,r){const o=[],i=r||wS(e[0]),s=e.length-1;for(let l=0;l<s;l++){let c=i(e[l],e[l+1]);if(t){const d=Array.isArray(t)?t[l]||we:t;c=qr(d,c)}o.push(c)}return o}function nw(e,t,{clamp:r=!0,ease:o,mixer:i}={}){const s=e.length;if(tp(s===t.length),s===1)return()=>t[0];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=$S(t,o,i),c=l.length,d=u=>{let h=0;if(c>1)for(;h<e.length-2&&!(u<e[h+1]);h++);const m=$s(e[h],e[h+1],u);return l[h](m)};return r?u=>d(Jr(e[0],e[s-1],u)):d}function jS(e,t){const r=e[e.length-1];for(let o=1;o<=t;o++){const i=$s(0,t,o);e.push(he(r,1,i))}}function kS(e){const t=[0];return jS(t,e.length-1),t}function CS(e,t){return e.map(r=>r*t)}function SS(e,t){return e.map(()=>t||Vb).splice(0,e.length-1)}function Nl({duration:e=300,keyframes:t,times:r,ease:o="easeInOut"}){const i=aS(o)?o.map(l0):l0(o),s={done:!1,value:t[0]},l=CS(r&&r.length===t.length?r:kS(t),e),c=nw(l,t,{ease:Array.isArray(i)?i:SS(t,i)});return{calculatedDuration:e,next:d=>(s.value=c(d),s.done=d>=e,s)}}function ow(e,t){return t?e*(1e3/t):0}const PS=5;function iw(e,t,r){const o=Math.max(t-PS,0);return ow(r-e(o),t-o)}const u0=.001,TS=.01,AS=10,zS=.05,MS=1;function DS({duration:e=800,bounce:t=.25,velocity:r=0,mass:o=1}){let i,s,l=1-t;l=Jr(zS,MS,l),e=Jr(TS,AS,lr(e)),l<1?(i=u=>{const h=u*l,m=h*e,p=h-r,b=jh(u,l),v=Math.exp(-m);return u0-p/b*v},s=u=>{const m=u*l*e,p=m*r+r,b=Math.pow(l,2)*Math.pow(u,2)*e,v=Math.exp(-m),$=jh(Math.pow(u,2),l);return(-i(u)+u0>0?-1:1)*((p-b)*v)/$}):(i=u=>{const h=Math.exp(-u*e),m=(u-r)*e+1;return-.001+h*m},s=u=>{const h=Math.exp(-u*e),m=(r-u)*(e*e);return h*m});const c=5/e,d=LS(i,s,c);if(e=Dn(e),isNaN(d))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(d,2)*o;return{stiffness:u,damping:l*2*Math.sqrt(o*u),duration:e}}}const ES=12;function LS(e,t,r){let o=r;for(let i=1;i<ES;i++)o=o-e(o)/t(o);return o}function jh(e,t){return e*Math.sqrt(1-t*t)}const RS=["duration","bounce"],IS=["stiffness","damping","mass"];function h0(e,t){return t.some(r=>e[r]!==void 0)}function FS(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!h0(e,IS)&&h0(e,RS)){const r=DS(e);t={...t,...r,mass:1},t.isResolvedFromDuration=!0}return t}function sw({keyframes:e,restDelta:t,restSpeed:r,...o}){const i=e[0],s=e[e.length-1],l={done:!1,value:i},{stiffness:c,damping:d,mass:u,duration:h,velocity:m,isResolvedFromDuration:p}=FS({...o,velocity:-lr(o.velocity||0)}),b=m||0,v=d/(2*Math.sqrt(c*u)),$=s-i,k=lr(Math.sqrt(c/u)),y=Math.abs($)<5;r||(r=y?.01:2),t||(t=y?.005:.5);let x;if(v<1){const g=jh(k,v);x=f=>{const S=Math.exp(-v*k*f);return s-S*((b+v*k*$)/g*Math.sin(g*f)+$*Math.cos(g*f))}}else if(v===1)x=g=>s-Math.exp(-k*g)*($+(b+k*$)*g);else{const g=k*Math.sqrt(v*v-1);x=f=>{const S=Math.exp(-v*k*f),C=Math.min(g*f,300);return s-S*((b+v*k*$)*Math.sinh(C)+g*$*Math.cosh(C))/g}}return{calculatedDuration:p&&h||null,next:g=>{const f=x(g);if(p)l.done=g>=h;else{let S=b;g!==0&&(v<1?S=iw(x,g,f):S=0);const C=Math.abs(S)<=r,P=Math.abs(s-f)<=t;l.done=C&&P}return l.value=l.done?s:f,l}}}function m0({keyframes:e,velocity:t=0,power:r=.8,timeConstant:o=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:l,min:c,max:d,restDelta:u=.5,restSpeed:h}){const m=e[0],p={done:!1,value:m},b=w=>c!==void 0&&w<c||d!==void 0&&w>d,v=w=>c===void 0?d:d===void 0||Math.abs(c-w)<Math.abs(d-w)?c:d;let $=r*t;const k=m+$,y=l===void 0?k:l(k);y!==k&&($=y-m);const x=w=>-$*Math.exp(-w/o),g=w=>y+x(w),f=w=>{const A=x(w),T=g(w);p.done=Math.abs(A)<=u,p.value=p.done?y:T};let S,C;const P=w=>{b(p.value)&&(S=w,C=sw({keyframes:[p.value,v(p.value)],velocity:iw(g,w,p.value),damping:i,stiffness:s,restDelta:u,restSpeed:h}))};return P(0),{calculatedDuration:null,next:w=>{let A=!1;return!C&&S===void 0&&(A=!0,f(w),P(w)),S!==void 0&&w>S?C.next(w-S):(!A&&f(w),p)}}}const BS=e=>{const t=({timestamp:r})=>e(r);return{start:()=>re.update(t,!0),stop:()=>pr(t),now:()=>_e.isProcessing?_e.timestamp:performance.now()}},p0=2e4;function f0(e){let t=0;const r=50;let o=e.next(t);for(;!o.done&&t<p0;)t+=r,o=e.next(t);return t>=p0?1/0:t}const NS={decay:m0,inertia:m0,tween:Nl,keyframes:Nl,spring:sw};function Ol({autoplay:e=!0,delay:t=0,driver:r=BS,keyframes:o,type:i="keyframes",repeat:s=0,repeatDelay:l=0,repeatType:c="loop",onPlay:d,onStop:u,onComplete:h,onUpdate:m,...p}){let b=1,v=!1,$,k;const y=()=>{k=new Promise(F=>{$=F})};y();let x;const g=NS[i]||Nl;let f;g!==Nl&&typeof o[0]!="number"&&(f=nw([0,100],o,{clamp:!1}),o=[0,100]);const S=g({...p,keyframes:o});let C;c==="mirror"&&(C=g({...p,keyframes:[...o].reverse(),velocity:-(p.velocity||0)}));let P="idle",w=null,A=null,T=null;S.calculatedDuration===null&&s&&(S.calculatedDuration=f0(S));const{calculatedDuration:H}=S;let G=1/0,R=1/0;H!==null&&(G=H+l,R=G*(s+1)-l);let D=0;const W=F=>{if(A===null)return;b>0&&(A=Math.min(A,F)),b<0&&(A=Math.min(F-R/b,A)),w!==null?D=w:D=Math.round(F-A)*b;const V=D-t*(b>=0?1:-1),ft=b>=0?V<0:V>R;D=Math.max(V,0),P==="finished"&&w===null&&(D=R);let Ne=D,it=S;if(s){const Je=Math.min(D,R)/G;let St=Math.floor(Je),Ge=Je%1;!Ge&&Je>=1&&(Ge=1),Ge===1&&St--,St=Math.min(St,s+1),!!(St%2)&&(c==="reverse"?(Ge=1-Ge,l&&(Ge-=l/G)):c==="mirror"&&(it=C)),Ne=Jr(0,1,Ge)*G}const ge=ft?{done:!1,value:o[0]}:it.next(Ne);f&&(ge.value=f(ge.value));let{done:He}=ge;!ft&&H!==null&&(He=b>=0?D>=R:D<=0);const Vt=w===null&&(P==="finished"||P==="running"&&He);return m&&m(ge.value),Vt&&I(),ge},_=()=>{x&&x.stop(),x=void 0},ve=()=>{P="idle",_(),$(),y(),A=T=null},I=()=>{P="finished",h&&h(),_(),$()},z=()=>{if(v)return;x||(x=r(W));const F=x.now();d&&d(),w!==null?A=F-w:(!A||P==="finished")&&(A=F),P==="finished"&&y(),T=A,w=null,P="running",x.start()};e&&z();const N={then(F,V){return k.then(F,V)},get time(){return lr(D)},set time(F){F=Dn(F),D=F,w!==null||!x||b===0?w=F:A=x.now()-F/b},get duration(){const F=S.calculatedDuration===null?f0(S):S.calculatedDuration;return lr(F)},get speed(){return b},set speed(F){F===b||!x||(b=F,N.time=lr(D))},get state(){return P},play:z,pause:()=>{P="paused",w=D},stop:()=>{v=!0,P!=="idle"&&(P="idle",u&&u(),ve())},cancel:()=>{T!==null&&W(T),ve()},complete:()=>{P="finished"},sample:F=>(A=0,W(F))};return N}function OS(e){let t;return()=>(t===void 0&&(t=e()),t)}const VS=OS(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),_S=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),ia=10,WS=2e4,US=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Fb(t.ease);function HS(e,t,{onUpdate:r,onComplete:o,...i}){if(!(VS()&&_S.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let l=!1,c,d,u=!1;const h=()=>{d=new Promise(g=>{c=g})};h();let{keyframes:m,duration:p=300,ease:b,times:v}=i;if(US(t,i)){const g=Ol({...i,repeat:0,delay:0});let f={done:!1,value:m[0]};const S=[];let C=0;for(;!f.done&&C<WS;)f=g.sample(C),S.push(f.value),C+=ia;v=void 0,m=S,p=C-ia,b="linear"}const $=eS(e.owner.current,t,m,{...i,duration:p,ease:b,times:v}),k=()=>{u=!1,$.cancel()},y=()=>{u=!0,re.update(k),c(),h()};return $.onfinish=()=>{u||(e.set(tS(m,i)),o&&o(),y())},{then(g,f){return d.then(g,f)},attachTimeline(g){return $.timeline=g,$.onfinish=null,we},get time(){return lr($.currentTime||0)},set time(g){$.currentTime=Dn(g)},get speed(){return $.playbackRate},set speed(g){$.playbackRate=g},get duration(){return lr(p)},play:()=>{l||($.play(),pr(k))},pause:()=>$.pause(),stop:()=>{if(l=!0,$.playState==="idle")return;const{currentTime:g}=$;if(g){const f=Ol({...i,autoplay:!1});e.setWithVelocity(f.sample(g-ia).value,f.sample(g).value,ia)}y()},complete:()=>{u||$.finish()},cancel:y}}function GS({keyframes:e,delay:t,onUpdate:r,onComplete:o}){const i=()=>(r&&r(e[e.length-1]),o&&o(),{time:0,speed:1,duration:0,play:we,pause:we,stop:we,then:s=>(s(),Promise.resolve()),cancel:we,complete:we});return t?Ol({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const YS={type:"spring",stiffness:500,damping:25,restSpeed:10},qS=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),QS={type:"keyframes",duration:.8},KS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},XS=(e,{keyframes:t})=>t.length>2?QS:Gn.has(e)?e.startsWith("scale")?qS(t[1]):YS:KS,kh=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Zr.test(t)||t==="0")&&!t.startsWith("url(")),JS=new Set(["brightness","contrast","saturate","opacity"]);function ZS(e){const[t,r]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=r.match(Sc)||[];if(!o)return e;const i=r.replace(o,"");let s=JS.has(t)?1:0;return o!==r&&(s*=100),t+"("+s+i+")"}const e4=/([a-z-]*)\(.*?\)/g,Ch={...Zr,getAnimatableNone:e=>{const t=e.match(e4);return t?t.map(ZS).join(" "):e}},t4={...bb,color:Ye,backgroundColor:Ye,outlineColor:Ye,fill:Ye,stroke:Ye,borderColor:Ye,borderTopColor:Ye,borderRightColor:Ye,borderBottomColor:Ye,borderLeftColor:Ye,filter:Ch,WebkitFilter:Ch},ip=e=>t4[e];function aw(e,t){let r=ip(e);return r!==Ch&&(r=Zr),r.getAnimatableNone?r.getAnimatableNone(t):void 0}const lw=e=>/^0[^.\s]+$/.test(e);function r4(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||lw(e)}function n4(e,t,r,o){const i=kh(t,r);let s;Array.isArray(r)?s=[...r]:s=[null,r];const l=o.from!==void 0?o.from:e.get();let c;const d=[];for(let u=0;u<s.length;u++)s[u]===null&&(s[u]=u===0?l:s[u-1]),r4(s[u])&&d.push(u),typeof s[u]=="string"&&s[u]!=="none"&&s[u]!=="0"&&(c=s[u]);if(i&&d.length&&c)for(let u=0;u<d.length;u++){const h=d[u];s[h]=aw(t,c)}return s}function o4({when:e,delay:t,delayChildren:r,staggerChildren:o,staggerDirection:i,repeat:s,repeatType:l,repeatDelay:c,from:d,elapsed:u,...h}){return!!Object.keys(h).length}function sp(e,t){return e[t]||e.default||e}const i4={skipAnimations:!1},ap=(e,t,r,o={})=>i=>{const s=sp(o,e)||{},l=s.delay||o.delay||0;let{elapsed:c=0}=o;c=c-Dn(l);const d=n4(t,e,r,s),u=d[0],h=d[d.length-1],m=kh(e,u),p=kh(e,h);let b={keyframes:d,velocity:t.getVelocity(),ease:"easeOut",...s,delay:-c,onUpdate:v=>{t.set(v),s.onUpdate&&s.onUpdate(v)},onComplete:()=>{i(),s.onComplete&&s.onComplete()}};if(o4(s)||(b={...b,...XS(e,b)}),b.duration&&(b.duration=Dn(b.duration)),b.repeatDelay&&(b.repeatDelay=Dn(b.repeatDelay)),!m||!p||Z5.current||s.type===!1||i4.skipAnimations)return GS(b);if(!o.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const v=HS(t,e,b);if(v)return v}return Ol(b)};function Vl(e){return!!(ot(e)&&e.add)}const cw=e=>/^\-?\d*\.?\d+$/.test(e);function lp(e,t){e.indexOf(t)===-1&&e.push(t)}function cp(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}class dp{constructor(){this.subscriptions=[]}add(t){return lp(this.subscriptions,t),()=>cp(this.subscriptions,t)}notify(t,r,o){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,r,o);else for(let s=0;s<i;s++){const l=this.subscriptions[s];l&&l(t,r,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const s4=e=>!isNaN(parseFloat(e));class a4{constructor(t,r={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(o,i=!0)=>{this.prev=this.current,this.current=o;const{delta:s,timestamp:l}=_e;this.lastUpdated!==l&&(this.timeDelta=s,this.lastUpdated=l,re.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>re.postRender(this.velocityCheck),this.velocityCheck=({timestamp:o})=>{o!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=s4(this.current),this.owner=r.owner}onChange(t){return this.on("change",t)}on(t,r){this.events[t]||(this.events[t]=new dp);const o=this.events[t].add(r);return t==="change"?()=>{o(),re.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,r){this.passiveEffect=t,this.stopPassiveEffect=r}set(t,r=!0){!r||!this.passiveEffect?this.updateAndNotify(t,r):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,r,o){this.set(r),this.prev=t,this.timeDelta=o}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?ow(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=t(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Xo(e,t){return new a4(e,t)}const dw=e=>t=>t.test(e),l4={test:e=>e==="auto",parse:e=>e},uw=[Yn,U,qt,Ar,f5,p5,l4],gi=e=>uw.find(dw(e)),c4=[...uw,Ye,Zr],d4=e=>c4.find(dw(e));function u4(e,t,r){e.hasValue(t)?e.getValue(t).set(r):e.addValue(t,Xo(r))}function h4(e,t){const r=Tc(e,t);let{transitionEnd:o={},transition:i={},...s}=r?e.makeTargetAnimatable(r,!1):{};s={...s,...o};for(const l in s){const c=A5(s[l]);u4(e,l,c)}}function m4(e,t,r){var o,i;const s=Object.keys(t).filter(c=>!e.hasValue(c)),l=s.length;if(l)for(let c=0;c<l;c++){const d=s[c],u=t[d];let h=null;Array.isArray(u)&&(h=u[0]),h===null&&(h=(i=(o=r[d])!==null&&o!==void 0?o:e.readValue(d))!==null&&i!==void 0?i:t[d]),h!=null&&(typeof h=="string"&&(cw(h)||lw(h))?h=parseFloat(h):!d4(h)&&Zr.test(u)&&(h=aw(d,u)),e.addValue(d,Xo(h,{owner:e})),r[d]===void 0&&(r[d]=h),h!==null&&e.setBaseTarget(d,h))}}function p4(e,t){return t?(t[e]||t.default||t).from:void 0}function f4(e,t,r){const o={};for(const i in e){const s=p4(i,t);if(s!==void 0)o[i]=s;else{const l=r.getValue(i);l&&(o[i]=l.get())}}return o}function g4({protectedKeys:e,needsAnimating:t},r){const o=e.hasOwnProperty(r)&&t[r]!==!0;return t[r]=!1,o}function x4(e,t){const r=e.get();if(Array.isArray(t)){for(let o=0;o<t.length;o++)if(t[o]!==r)return!0}else return r!==t}function hw(e,t,{delay:r=0,transitionOverride:o,type:i}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:l,...c}=e.makeTargetAnimatable(t);const d=e.getValue("willChange");o&&(s=o);const u=[],h=i&&e.animationState&&e.animationState.getState()[i];for(const m in c){const p=e.getValue(m),b=c[m];if(!p||b===void 0||h&&g4(h,m))continue;const v={delay:r,elapsed:0,...sp(s||{},m)};if(window.HandoffAppearAnimations){const y=e.getProps()[mb];if(y){const x=window.HandoffAppearAnimations(y,m,p,re);x!==null&&(v.elapsed=x,v.isHandoff=!0)}}let $=!v.isHandoff&&!x4(p,b);if(v.type==="spring"&&(p.getVelocity()||v.velocity)&&($=!1),p.animation&&($=!1),$)continue;p.start(ap(m,p,b,e.shouldReduceMotion&&Gn.has(m)?{type:!1}:v));const k=p.animation;Vl(d)&&(d.add(m),k.then(()=>d.remove(m))),u.push(k)}return l&&Promise.all(u).then(()=>{l&&h4(e,l)}),u}function Sh(e,t,r={}){const o=Tc(e,t,r.custom);let{transition:i=e.getDefaultTransition()||{}}=o||{};r.transitionOverride&&(i=r.transitionOverride);const s=o?()=>Promise.all(hw(e,o,r)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:u=0,staggerChildren:h,staggerDirection:m}=i;return y4(e,t,u+d,h,m,r)}:()=>Promise.resolve(),{when:c}=i;if(c){const[d,u]=c==="beforeChildren"?[s,l]:[l,s];return d().then(()=>u())}else return Promise.all([s(),l(r.delay)])}function y4(e,t,r=0,o=0,i=1,s){const l=[],c=(e.variantChildren.size-1)*o,d=i===1?(u=0)=>u*o:(u=0)=>c-u*o;return Array.from(e.variantChildren).sort(v4).forEach((u,h)=>{u.notify("AnimationStart",t),l.push(Sh(u,t,{...s,delay:r+d(h)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(l)}function v4(e,t){return e.sortNodePosition(t)}function b4(e,t,r={}){e.notify("AnimationStart",t);let o;if(Array.isArray(t)){const i=t.map(s=>Sh(e,s,r));o=Promise.all(i)}else if(typeof t=="string")o=Sh(e,t,r);else{const i=typeof t=="function"?Tc(e,t,r.custom):t;o=Promise.all(hw(e,i,r))}return o.then(()=>e.notify("AnimationComplete",t))}const w4=[...Hm].reverse(),$4=Hm.length;function j4(e){return t=>Promise.all(t.map(({animation:r,options:o})=>b4(e,r,o)))}function k4(e){let t=j4(e);const r=S4();let o=!0;const i=(d,u)=>{const h=Tc(e,u);if(h){const{transition:m,transitionEnd:p,...b}=h;d={...d,...b,...p}}return d};function s(d){t=d(e)}function l(d,u){const h=e.getProps(),m=e.getVariantContext(!0)||{},p=[],b=new Set;let v={},$=1/0;for(let y=0;y<$4;y++){const x=w4[y],g=r[x],f=h[x]!==void 0?h[x]:m[x],S=bs(f),C=x===u?g.isActive:null;C===!1&&($=y);let P=f===m[x]&&f!==h[x]&&S;if(P&&o&&e.manuallyAnimateOnMount&&(P=!1),g.protectedKeys={...v},!g.isActive&&C===null||!f&&!g.prevProp||kc(f)||typeof f=="boolean")continue;let A=C4(g.prevProp,f)||x===u&&g.isActive&&!P&&S||y>$&&S,T=!1;const H=Array.isArray(f)?f:[f];let G=H.reduce(i,{});C===!1&&(G={});const{prevResolvedValues:R={}}=g,D={...R,...G},W=_=>{A=!0,b.has(_)&&(T=!0,b.delete(_)),g.needsAnimating[_]=!0};for(const _ in D){const ve=G[_],I=R[_];if(v.hasOwnProperty(_))continue;let z=!1;Fl(ve)&&Fl(I)?z=!Rb(ve,I):z=ve!==I,z?ve!==void 0?W(_):b.add(_):ve!==void 0&&b.has(_)?W(_):g.protectedKeys[_]=!0}g.prevProp=f,g.prevResolvedValues=G,g.isActive&&(v={...v,...G}),o&&e.blockInitialAnimation&&(A=!1),A&&(!P||T)&&p.push(...H.map(_=>({animation:_,options:{type:x,...d}})))}if(b.size){const y={};b.forEach(x=>{const g=e.getBaseTarget(x);g!==void 0&&(y[x]=g)}),p.push({animation:y})}let k=!!p.length;return o&&(h.initial===!1||h.initial===h.animate)&&!e.manuallyAnimateOnMount&&(k=!1),o=!1,k?t(p):Promise.resolve()}function c(d,u,h){var m;if(r[d].isActive===u)return Promise.resolve();(m=e.variantChildren)===null||m===void 0||m.forEach(b=>{var v;return(v=b.animationState)===null||v===void 0?void 0:v.setActive(d,u)}),r[d].isActive=u;const p=l(h,d);for(const b in r)r[b].protectedKeys={};return p}return{animateChanges:l,setActive:c,setAnimateFunction:s,getState:()=>r}}function C4(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Rb(t,e):!1}function sn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function S4(){return{animate:sn(!0),whileInView:sn(),whileHover:sn(),whileTap:sn(),whileDrag:sn(),whileFocus:sn(),exit:sn()}}class P4 extends on{constructor(t){super(t),t.animationState||(t.animationState=k4(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),kc(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:r}=this.node.prevProps||{};t!==r&&this.updateAnimationControlsSubscription()}unmount(){}}let T4=0;class A4 extends on{constructor(){super(...arguments),this.id=T4++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:r,custom:o}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const s=this.node.animationState.setActive("exit",!t,{custom:o??this.node.getProps().custom});r&&!t&&s.then(()=>r(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const z4={animation:{Feature:P4},exit:{Feature:A4}},g0=(e,t)=>Math.abs(e-t);function M4(e,t){const r=g0(e.x,t.x),o=g0(e.y,t.y);return Math.sqrt(r**2+o**2)}class mw{constructor(t,r,{transformPagePoint:o,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=bd(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,b=M4(m.offset,{x:0,y:0})>=3;if(!p&&!b)return;const{point:v}=m,{timestamp:$}=_e;this.history.push({...v,timestamp:$});const{onStart:k,onMove:y}=this.handlers;p||(k&&k(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,m)},this.handlePointerMove=(m,p)=>{this.lastMoveEvent=m,this.lastMoveEventInfo=vd(p,this.transformPagePoint),re.update(this.updatePoint,!0)},this.handlePointerUp=(m,p)=>{this.end();const{onEnd:b,onSessionEnd:v,resumeAnimation:$}=this.handlers;if(this.dragSnapToOrigin&&$&&$(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=bd(m.type==="pointercancel"?this.lastMoveEventInfo:vd(p,this.transformPagePoint),this.history);this.startEvent&&b&&b(m,k),v&&v(m,k)},!zb(t))return;this.dragSnapToOrigin=s,this.handlers=r,this.transformPagePoint=o,this.contextWindow=i||window;const l=Pc(t),c=vd(l,this.transformPagePoint),{point:d}=c,{timestamp:u}=_e;this.history=[{...d,timestamp:u}];const{onSessionStart:h}=r;h&&h(t,bd(c,this.history)),this.removeListeners=qr(ar(this.contextWindow,"pointermove",this.handlePointerMove),ar(this.contextWindow,"pointerup",this.handlePointerUp),ar(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),pr(this.updatePoint)}}function vd(e,t){return t?{point:t(e.point)}:e}function x0(e,t){return{x:e.x-t.x,y:e.y-t.y}}function bd({point:e},t){return{point:e,delta:x0(e,pw(t)),offset:x0(e,D4(t)),velocity:E4(t,.1)}}function D4(e){return e[0]}function pw(e){return e[e.length-1]}function E4(e,t){if(e.length<2)return{x:0,y:0};let r=e.length-1,o=null;const i=pw(e);for(;r>=0&&(o=e[r],!(i.timestamp-o.timestamp>Dn(t)));)r--;if(!o)return{x:0,y:0};const s=lr(i.timestamp-o.timestamp);if(s===0)return{x:0,y:0};const l={x:(i.x-o.x)/s,y:(i.y-o.y)/s};return l.x===1/0&&(l.x=0),l.y===1/0&&(l.y=0),l}function ut(e){return e.max-e.min}function Ph(e,t=0,r=.01){return Math.abs(e-t)<=r}function y0(e,t,r,o=.5){e.origin=o,e.originPoint=he(t.min,t.max,e.origin),e.scale=ut(r)/ut(t),(Ph(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=he(r.min,r.max,e.origin)-e.originPoint,(Ph(e.translate)||isNaN(e.translate))&&(e.translate=0)}function qi(e,t,r,o){y0(e.x,t.x,r.x,o?o.originX:void 0),y0(e.y,t.y,r.y,o?o.originY:void 0)}function v0(e,t,r){e.min=r.min+t.min,e.max=e.min+ut(t)}function L4(e,t,r){v0(e.x,t.x,r.x),v0(e.y,t.y,r.y)}function b0(e,t,r){e.min=t.min-r.min,e.max=e.min+ut(t)}function Qi(e,t,r){b0(e.x,t.x,r.x),b0(e.y,t.y,r.y)}function R4(e,{min:t,max:r},o){return t!==void 0&&e<t?e=o?he(t,e,o.min):Math.max(e,t):r!==void 0&&e>r&&(e=o?he(r,e,o.max):Math.min(e,r)),e}function w0(e,t,r){return{min:t!==void 0?e.min+t:void 0,max:r!==void 0?e.max+r-(e.max-e.min):void 0}}function I4(e,{top:t,left:r,bottom:o,right:i}){return{x:w0(e.x,r,i),y:w0(e.y,t,o)}}function $0(e,t){let r=t.min-e.min,o=t.max-e.max;return t.max-t.min<e.max-e.min&&([r,o]=[o,r]),{min:r,max:o}}function F4(e,t){return{x:$0(e.x,t.x),y:$0(e.y,t.y)}}function B4(e,t){let r=.5;const o=ut(e),i=ut(t);return i>o?r=$s(t.min,t.max-o,e.min):o>i&&(r=$s(e.min,e.max-i,t.min)),Jr(0,1,r)}function N4(e,t){const r={};return t.min!==void 0&&(r.min=t.min-e.min),t.max!==void 0&&(r.max=t.max-e.min),r}const Th=.35;function O4(e=Th){return e===!1?e=0:e===!0&&(e=Th),{x:j0(e,"left","right"),y:j0(e,"top","bottom")}}function j0(e,t,r){return{min:k0(e,t),max:k0(e,r)}}function k0(e,t){return typeof e=="number"?e:e[t]||0}const C0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Mo=()=>({x:C0(),y:C0()}),S0=()=>({min:0,max:0}),$e=()=>({x:S0(),y:S0()});function xt(e){return[e("x"),e("y")]}function fw({top:e,left:t,right:r,bottom:o}){return{x:{min:t,max:r},y:{min:e,max:o}}}function V4({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function _4(e,t){if(!t)return e;const r=t({x:e.left,y:e.top}),o=t({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:o.y,right:o.x}}function wd(e){return e===void 0||e===1}function Ah({scale:e,scaleX:t,scaleY:r}){return!wd(e)||!wd(t)||!wd(r)}function bn(e){return Ah(e)||gw(e)||e.z||e.rotate||e.rotateX||e.rotateY}function gw(e){return P0(e.x)||P0(e.y)}function P0(e){return e&&e!=="0%"}function _l(e,t,r){const o=e-r,i=t*o;return r+i}function T0(e,t,r,o,i){return i!==void 0&&(e=_l(e,i,o)),_l(e,r,o)+t}function zh(e,t=0,r=1,o,i){e.min=T0(e.min,t,r,o,i),e.max=T0(e.max,t,r,o,i)}function xw(e,{x:t,y:r}){zh(e.x,t.translate,t.scale,t.originPoint),zh(e.y,r.translate,r.scale,r.originPoint)}function W4(e,t,r,o=!1){const i=r.length;if(!i)return;t.x=t.y=1;let s,l;for(let c=0;c<i;c++){s=r[c],l=s.projectionDelta;const d=s.instance;d&&d.style&&d.style.display==="contents"||(o&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Do(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),l&&(t.x*=l.x.scale,t.y*=l.y.scale,xw(e,l)),o&&bn(s.latestValues)&&Do(e,s.latestValues))}t.x=A0(t.x),t.y=A0(t.y)}function A0(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Dr(e,t){e.min=e.min+t,e.max=e.max+t}function z0(e,t,[r,o,i]){const s=t[i]!==void 0?t[i]:.5,l=he(e.min,e.max,s);zh(e,t[r],t[o],l,t.scale)}const U4=["x","scaleX","originX"],H4=["y","scaleY","originY"];function Do(e,t){z0(e.x,t,U4),z0(e.y,t,H4)}function yw(e,t){return fw(_4(e.getBoundingClientRect(),t))}function G4(e,t,r){const o=yw(e,r),{scroll:i}=t;return i&&(Dr(o.x,i.offset.x),Dr(o.y,i.offset.y)),o}const vw=({current:e})=>e?e.ownerDocument.defaultView:null,Y4=new WeakMap;class q4{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=$e(),this.visualElement=t}start(t,{snapToCursor:r=!1}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const i=h=>{const{dragSnapToOrigin:m}=this.getProps();m?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(Pc(h,"page").point)},s=(h,m)=>{const{drag:p,dragPropagation:b,onDragStart:v}=this.getProps();if(p&&!b&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Db(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),xt(k=>{let y=this.getAxisMotionValue(k).get()||0;if(qt.test(y)){const{projection:x}=this.visualElement;if(x&&x.layout){const g=x.layout.layoutBox[k];g&&(y=ut(g)*(parseFloat(y)/100))}}this.originPoint[k]=y}),v&&re.update(()=>v(h,m),!1,!0);const{animationState:$}=this.visualElement;$&&$.setActive("whileDrag",!0)},l=(h,m)=>{const{dragPropagation:p,dragDirectionLock:b,onDirectionLock:v,onDrag:$}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:k}=m;if(b&&this.currentDirection===null){this.currentDirection=Q4(k),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",m.point,k),this.updateAxis("y",m.point,k),this.visualElement.render(),$&&$(h,m)},c=(h,m)=>this.stop(h,m),d=()=>xt(h=>{var m;return this.getAnimationState(h)==="paused"&&((m=this.getAxisMotionValue(h).animation)===null||m===void 0?void 0:m.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new mw(t,{onSessionStart:i,onStart:s,onMove:l,onSessionEnd:c,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:vw(this.visualElement)})}stop(t,r){const o=this.isDragging;if(this.cancel(),!o)return;const{velocity:i}=r;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&re.update(()=>s(t,r))}cancel(){this.isDragging=!1;const{projection:t,animationState:r}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(t,r,o){const{drag:i}=this.getProps();if(!o||!sa(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let l=this.originPoint[t]+o[t];this.constraints&&this.constraints[t]&&(l=R4(l,this.constraints[t],this.elastic[t])),s.set(l)}resolveConstraints(){var t;const{dragConstraints:r,dragElastic:o}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;r&&Ao(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&i?this.constraints=I4(i.layoutBox,r):this.constraints=!1,this.elastic=O4(o),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&xt(l=>{this.getAxisMotionValue(l)&&(this.constraints[l]=N4(i.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!Ao(t))return!1;const o=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=G4(o,i.root,this.visualElement.getTransformPagePoint());let l=F4(i.layout.layoutBox,s);if(r){const c=r(V4(l));this.hasMutatedConstraints=!!c,c&&(l=fw(c))}return l}startAnimation(t){const{drag:r,dragMomentum:o,dragElastic:i,dragTransition:s,dragSnapToOrigin:l,onDragTransitionEnd:c}=this.getProps(),d=this.constraints||{},u=xt(h=>{if(!sa(h,r,this.currentDirection))return;let m=d&&d[h]||{};l&&(m={min:0,max:0});const p=i?200:1e6,b=i?40:1e7,v={type:"inertia",velocity:o?t[h]:0,bounceStiffness:p,bounceDamping:b,timeConstant:750,restDelta:1,restSpeed:10,...s,...m};return this.startAxisValueAnimation(h,v)});return Promise.all(u).then(c)}startAxisValueAnimation(t,r){const o=this.getAxisMotionValue(t);return o.start(ap(t,o,0,r))}stopAnimation(){xt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){xt(t=>{var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(t){var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(t){const r="_drag"+t.toUpperCase(),o=this.visualElement.getProps(),i=o[r];return i||this.visualElement.getValue(t,(o.initial?o.initial[t]:void 0)||0)}snapToCursor(t){xt(r=>{const{drag:o}=this.getProps();if(!sa(r,o,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(r);if(i&&i.layout){const{min:l,max:c}=i.layout.layoutBox[r];s.set(t[r]-he(l,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:r}=this.getProps(),{projection:o}=this.visualElement;if(!Ao(r)||!o||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};xt(l=>{const c=this.getAxisMotionValue(l);if(c){const d=c.get();i[l]=B4({min:d,max:d},this.constraints[l])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),xt(l=>{if(!sa(l,t,null))return;const c=this.getAxisMotionValue(l),{min:d,max:u}=this.constraints[l];c.set(he(d,u,i[l]))})}addListeners(){if(!this.visualElement.current)return;Y4.set(this.visualElement,this);const t=this.visualElement.current,r=ar(t,"pointerdown",d=>{const{drag:u,dragListener:h=!0}=this.getProps();u&&h&&this.start(d)}),o=()=>{const{dragConstraints:d}=this.getProps();Ao(d)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",o);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),o();const l=ir(window,"resize",()=>this.scalePositionWithinConstraints()),c=i.addEventListener("didUpdate",({delta:d,hasLayoutChanged:u})=>{this.isDragging&&u&&(xt(h=>{const m=this.getAxisMotionValue(h);m&&(this.originPoint[h]+=d[h].translate,m.set(m.get()+d[h].translate))}),this.visualElement.render())});return()=>{l(),r(),s(),c&&c()}}getProps(){const t=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:o=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:l=Th,dragMomentum:c=!0}=t;return{...t,drag:r,dragDirectionLock:o,dragPropagation:i,dragConstraints:s,dragElastic:l,dragMomentum:c}}}function sa(e,t,r){return(t===!0||t===e)&&(r===null||r===e)}function Q4(e,t=10){let r=null;return Math.abs(e.y)>t?r="y":Math.abs(e.x)>t&&(r="x"),r}class K4 extends on{constructor(t){super(t),this.removeGroupControls=we,this.removeListeners=we,this.controls=new q4(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||we}unmount(){this.removeGroupControls(),this.removeListeners()}}const M0=e=>(t,r)=>{e&&re.update(()=>e(t,r))};class X4 extends on{constructor(){super(...arguments),this.removePointerDownListener=we}onPointerDown(t){this.session=new mw(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:vw(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:r,onPan:o,onPanEnd:i}=this.node.getProps();return{onSessionStart:M0(t),onStart:M0(r),onMove:o,onEnd:(s,l)=>{delete this.session,i&&re.update(()=>i(s,l))}}}mount(){this.removePointerDownListener=ar(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function J4(){const e=j.useContext($c);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,i=j.useId();return j.useEffect(()=>o(i),[]),!t&&r?[!1,()=>r&&r(i)]:[!0]}const rl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function D0(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const xi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(U.test(e))e=parseFloat(e);else return e;const r=D0(e,t.target.x),o=D0(e,t.target.y);return`${r}% ${o}%`}},Z4={correct:(e,{treeScale:t,projectionDelta:r})=>{const o=e,i=Zr.parse(e);if(i.length>5)return o;const s=Zr.createTransformer(e),l=typeof i[0]!="number"?1:0,c=r.x.scale*t.x,d=r.y.scale*t.y;i[0+l]/=c,i[1+l]/=d;const u=he(c,d,.5);return typeof i[2+l]=="number"&&(i[2+l]/=u),typeof i[3+l]=="number"&&(i[3+l]/=u),s(i)}};class e3 extends ce.Component{componentDidMount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:o,layoutId:i}=this.props,{projection:s}=t;a5(t3),s&&(r.group&&r.group.add(s),o&&o.register&&i&&o.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),rl.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:r,visualElement:o,drag:i,isPresent:s}=this.props,l=o.projection;return l&&(l.isPresent=s,i||t.layoutDependency!==r||r===void 0?l.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?l.promote():l.relegate()||re.postRender(()=>{const c=l.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:o}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(i),o&&o.deregister&&o.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function bw(e){const[t,r]=J4(),o=j.useContext(Ym);return ce.createElement(e3,{...e,layoutGroup:o,switchLayoutGroup:j.useContext(fb),isPresent:t,safeToRemove:r})}const t3={borderRadius:{...xi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:xi,borderTopRightRadius:xi,borderBottomLeftRadius:xi,borderBottomRightRadius:xi,boxShadow:Z4},ww=["TopLeft","TopRight","BottomLeft","BottomRight"],r3=ww.length,E0=e=>typeof e=="string"?parseFloat(e):e,L0=e=>typeof e=="number"||U.test(e);function n3(e,t,r,o,i,s){i?(e.opacity=he(0,r.opacity!==void 0?r.opacity:1,o3(o)),e.opacityExit=he(t.opacity!==void 0?t.opacity:1,0,i3(o))):s&&(e.opacity=he(t.opacity!==void 0?t.opacity:1,r.opacity!==void 0?r.opacity:1,o));for(let l=0;l<r3;l++){const c=`border${ww[l]}Radius`;let d=R0(t,c),u=R0(r,c);if(d===void 0&&u===void 0)continue;d||(d=0),u||(u=0),d===0||u===0||L0(d)===L0(u)?(e[c]=Math.max(he(E0(d),E0(u),o),0),(qt.test(u)||qt.test(d))&&(e[c]+="%")):e[c]=u}(t.rotate||r.rotate)&&(e.rotate=he(t.rotate||0,r.rotate||0,o))}function R0(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const o3=$w(0,.5,Ub),i3=$w(.5,.95,we);function $w(e,t,r){return o=>o<e?0:o>t?1:r($s(e,t,o))}function I0(e,t){e.min=t.min,e.max=t.max}function gt(e,t){I0(e.x,t.x),I0(e.y,t.y)}function F0(e,t,r,o,i){return e-=t,e=_l(e,1/r,o),i!==void 0&&(e=_l(e,1/i,o)),e}function s3(e,t=0,r=1,o=.5,i,s=e,l=e){if(qt.test(t)&&(t=parseFloat(t),t=he(l.min,l.max,t/100)-l.min),typeof t!="number")return;let c=he(s.min,s.max,o);e===s&&(c-=t),e.min=F0(e.min,t,r,c,i),e.max=F0(e.max,t,r,c,i)}function B0(e,t,[r,o,i],s,l){s3(e,t[r],t[o],t[i],t.scale,s,l)}const a3=["x","scaleX","originX"],l3=["y","scaleY","originY"];function N0(e,t,r,o){B0(e.x,t,a3,r?r.x:void 0,o?o.x:void 0),B0(e.y,t,l3,r?r.y:void 0,o?o.y:void 0)}function O0(e){return e.translate===0&&e.scale===1}function jw(e){return O0(e.x)&&O0(e.y)}function c3(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function kw(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function V0(e){return ut(e.x)/ut(e.y)}class d3{constructor(){this.members=[]}add(t){lp(this.members,t),t.scheduleRender()}remove(t){if(cp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(t){const r=this.members.findIndex(i=>t===i);if(r===0)return!1;let o;for(let i=r;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){o=s;break}}return o?(this.promote(o),!0):!1}promote(t,r){const o=this.lead;if(t!==o&&(this.prevLead=o,this.lead=t,t.show(),o)){o.instance&&o.scheduleRender(),t.scheduleRender(),t.resumeFrom=o,r&&(t.resumeFrom.preserveOpacity=!0),o.snapshot&&(t.snapshot=o.snapshot,t.snapshot.latestValues=o.animationValues||o.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:r,resumingFrom:o}=t;r.onExitComplete&&r.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function _0(e,t,r){let o="";const i=e.x.translate/t.x,s=e.y.translate/t.y;if((i||s)&&(o=`translate3d(${i}px, ${s}px, 0) `),(t.x!==1||t.y!==1)&&(o+=`scale(${1/t.x}, ${1/t.y}) `),r){const{rotate:d,rotateX:u,rotateY:h}=r;d&&(o+=`rotate(${d}deg) `),u&&(o+=`rotateX(${u}deg) `),h&&(o+=`rotateY(${h}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(o+=`scale(${l}, ${c})`),o||"none"}const u3=(e,t)=>e.depth-t.depth;class h3{constructor(){this.children=[],this.isDirty=!1}add(t){lp(this.children,t),this.isDirty=!0}remove(t){cp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(u3),this.isDirty=!1,this.children.forEach(t)}}function m3(e,t){const r=performance.now(),o=({timestamp:i})=>{const s=i-r;s>=t&&(pr(o),e(s-t))};return re.read(o,!0),()=>pr(o)}function p3(e){window.MotionDebug&&window.MotionDebug.record(e)}function f3(e){return e instanceof SVGElement&&e.tagName!=="svg"}function g3(e,t,r){const o=ot(e)?e:Xo(e);return o.start(ap("",o,t,r)),o.animation}const W0=["","X","Y","Z"],x3={visibility:"hidden"},U0=1e3;let y3=0;const wn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Cw({attachResizeListener:e,defaultParent:t,measureScroll:r,checkIsScrollRoot:o,resetTransform:i}){return class{constructor(l={},c=t==null?void 0:t()){this.id=y3++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,wn.totalNodes=wn.resolvedTargetDeltas=wn.recalculatedProjection=0,this.nodes.forEach(w3),this.nodes.forEach(S3),this.nodes.forEach(P3),this.nodes.forEach($3),p3(wn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=l,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new h3)}addEventListener(l,c){return this.eventHandlers.has(l)||this.eventHandlers.set(l,new dp),this.eventHandlers.get(l).add(c)}notifyListeners(l,...c){const d=this.eventHandlers.get(l);d&&d.notify(...c)}hasListeners(l){return this.eventHandlers.has(l)}mount(l,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=f3(l),this.instance=l;const{layoutId:d,layout:u,visualElement:h}=this.options;if(h&&!h.current&&h.mount(l),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(u||d)&&(this.isLayoutDirty=!0),e){let m;const p=()=>this.root.updateBlockedByResize=!1;e(l,()=>{this.root.updateBlockedByResize=!0,m&&m(),m=m3(p,250),rl.hasAnimatedSinceResize&&(rl.hasAnimatedSinceResize=!1,this.nodes.forEach(G0))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&h&&(d||u)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:p,hasRelativeTargetChanged:b,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const $=this.options.transition||h.getDefaultTransition()||D3,{onLayoutAnimationStart:k,onLayoutAnimationComplete:y}=h.getProps(),x=!this.targetLayout||!kw(this.targetLayout,v)||b,g=!p&&b;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||p&&(x||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(m,g);const f={...sp($,"layout"),onPlay:k,onComplete:y};(h.shouldReduceMotion||this.options.layoutRoot)&&(f.delay=0,f.type=!1),this.startAnimation(f)}else p||G0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const l=this.getStack();l&&l.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,pr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(T3),this.animationId++)}getTransformTemplate(){const{visualElement:l}=this.options;return l&&l.getProps().transformTemplate}willUpdate(l=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const m=this.path[h];m.shouldResetTransform=!0,m.updateScroll("snapshot"),m.options.layoutRoot&&m.willUpdate(!1)}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),l&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(H0);return}this.isUpdating||this.nodes.forEach(k3),this.isUpdating=!1,this.nodes.forEach(C3),this.nodes.forEach(v3),this.nodes.forEach(b3),this.clearAllSnapshots();const c=performance.now();_e.delta=Jr(0,1e3/60,c-_e.timestamp),_e.timestamp=c,_e.isProcessing=!0,hd.update.process(_e),hd.preRender.process(_e),hd.render.process(_e),_e.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(j3),this.sharedNodes.forEach(A3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,re.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){re.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const l=this.layout;this.layout=this.measure(!1),this.layoutCorrected=$e(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,l?l.layoutBox:void 0)}updateScroll(l="measure"){let c=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===l&&(c=!1),c&&(this.scroll={animationId:this.root.animationId,phase:l,isRoot:o(this.instance),offset:r(this.instance)})}resetTransform(){if(!i)return;const l=this.isLayoutDirty||this.shouldResetTransform,c=this.projectionDelta&&!jw(this.projectionDelta),d=this.getTransformTemplate(),u=d?d(this.latestValues,""):void 0,h=u!==this.prevTransformTemplateValue;l&&(c||bn(this.latestValues)||h)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(l=!0){const c=this.measurePageBox();let d=this.removeElementScroll(c);return l&&(d=this.removeTransform(d)),E3(d),{animationId:this.root.animationId,measuredBox:c,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:l}=this.options;if(!l)return $e();const c=l.measureViewportBox(),{scroll:d}=this.root;return d&&(Dr(c.x,d.offset.x),Dr(c.y,d.offset.y)),c}removeElementScroll(l){const c=$e();gt(c,l);for(let d=0;d<this.path.length;d++){const u=this.path[d],{scroll:h,options:m}=u;if(u!==this.root&&h&&m.layoutScroll){if(h.isRoot){gt(c,l);const{scroll:p}=this.root;p&&(Dr(c.x,-p.offset.x),Dr(c.y,-p.offset.y))}Dr(c.x,h.offset.x),Dr(c.y,h.offset.y)}}return c}applyTransform(l,c=!1){const d=$e();gt(d,l);for(let u=0;u<this.path.length;u++){const h=this.path[u];!c&&h.options.layoutScroll&&h.scroll&&h!==h.root&&Do(d,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),bn(h.latestValues)&&Do(d,h.latestValues)}return bn(this.latestValues)&&Do(d,this.latestValues),d}removeTransform(l){const c=$e();gt(c,l);for(let d=0;d<this.path.length;d++){const u=this.path[d];if(!u.instance||!bn(u.latestValues))continue;Ah(u.latestValues)&&u.updateSnapshot();const h=$e(),m=u.measurePageBox();gt(h,m),N0(c,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,h)}return bn(this.latestValues)&&N0(c,this.latestValues),c}setTargetDelta(l){this.targetDelta=l,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(l){this.options={...this.options,...l,crossfade:l.crossfade!==void 0?l.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==_e.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(l=!1){var c;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==d;if(!(l||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:m,layoutId:p}=this.options;if(!(!this.layout||!(m||p))){if(this.resolvedRelativeTargetAt=_e.timestamp,!this.targetDelta&&!this.relativeTarget){const b=this.getClosestProjectingParent();b&&b.layout&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$e(),this.relativeTargetOrigin=$e(),Qi(this.relativeTargetOrigin,this.layout.layoutBox,b.layout.layoutBox),gt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=$e(),this.targetWithTransforms=$e()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),L4(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):gt(this.target,this.layout.layoutBox),xw(this.target,this.targetDelta)):gt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const b=this.getClosestProjectingParent();b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$e(),this.relativeTargetOrigin=$e(),Qi(this.relativeTargetOrigin,this.target,b.target),gt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}wn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ah(this.parent.latestValues)||gw(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var l;const c=this.getLead(),d=!!this.resumingFrom||this!==c;let u=!0;if((this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty)&&(u=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===_e.timestamp&&(u=!1),u)return;const{layout:h,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||m))return;gt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,b=this.treeScale.y;W4(this.layoutCorrected,this.treeScale,this.path,d),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox);const{target:v}=c;if(!v){this.projectionTransform&&(this.projectionDelta=Mo(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Mo(),this.projectionDeltaWithTransform=Mo());const $=this.projectionTransform;qi(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=_0(this.projectionDelta,this.treeScale),(this.projectionTransform!==$||this.treeScale.x!==p||this.treeScale.y!==b)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),wn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(l=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),l){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(l,c=!1){const d=this.snapshot,u=d?d.latestValues:{},h={...this.latestValues},m=Mo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const p=$e(),b=d?d.source:void 0,v=this.layout?this.layout.source:void 0,$=b!==v,k=this.getStack(),y=!k||k.members.length<=1,x=!!($&&!y&&this.options.crossfade===!0&&!this.path.some(M3));this.animationProgress=0;let g;this.mixTargetDelta=f=>{const S=f/1e3;Y0(m.x,l.x,S),Y0(m.y,l.y,S),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Qi(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),z3(this.relativeTarget,this.relativeTargetOrigin,p,S),g&&c3(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=$e()),gt(g,this.relativeTarget)),$&&(this.animationValues=h,n3(h,u,this.latestValues,S,x,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(l){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(pr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=re.update(()=>{rl.hasAnimatedSinceResize=!0,this.currentAnimation=g3(0,U0,{...l,onUpdate:c=>{this.mixTargetDelta(c),l.onUpdate&&l.onUpdate(c)},onComplete:()=>{l.onComplete&&l.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const l=this.getStack();l&&l.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(U0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const l=this.getLead();let{targetWithTransforms:c,target:d,layout:u,latestValues:h}=l;if(!(!c||!d||!u)){if(this!==l&&this.layout&&u&&Sw(this.options.animationType,this.layout.layoutBox,u.layoutBox)){d=this.target||$e();const m=ut(this.layout.layoutBox.x);d.x.min=l.target.x.min,d.x.max=d.x.min+m;const p=ut(this.layout.layoutBox.y);d.y.min=l.target.y.min,d.y.max=d.y.min+p}gt(c,d),Do(c,h),qi(this.projectionDeltaWithTransform,this.layoutCorrected,c,h)}}registerSharedNode(l,c){this.sharedNodes.has(l)||this.sharedNodes.set(l,new d3),this.sharedNodes.get(l).add(c);const u=c.options.initialPromotionConfig;c.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(c):void 0})}isLead(){const l=this.getStack();return l?l.lead===this:!0}getLead(){var l;const{layoutId:c}=this.options;return c?((l=this.getStack())===null||l===void 0?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:c}=this.options;return c?(l=this.getStack())===null||l===void 0?void 0:l.prevLead:void 0}getStack(){const{layoutId:l}=this.options;if(l)return this.root.sharedNodes.get(l)}promote({needsReset:l,transition:c,preserveFollowOpacity:d}={}){const u=this.getStack();u&&u.promote(this,d),l&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const l=this.getStack();return l?l.relegate(this):!1}resetRotation(){const{visualElement:l}=this.options;if(!l)return;let c=!1;const{latestValues:d}=l;if((d.rotate||d.rotateX||d.rotateY||d.rotateZ)&&(c=!0),!c)return;const u={};for(let h=0;h<W0.length;h++){const m="rotate"+W0[h];d[m]&&(u[m]=d[m],l.setStaticValue(m,0))}l.render();for(const h in u)l.setStaticValue(h,u[h]);l.scheduleRender()}getProjectionStyles(l){var c,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return x3;const u={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=tl(l==null?void 0:l.pointerEvents)||"",u.transform=h?h(this.latestValues,""):"none",u;const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){const $={};return this.options.layoutId&&($.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,$.pointerEvents=tl(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!bn(this.latestValues)&&($.transform=h?h({},""):"none",this.hasProjected=!1),$}const p=m.animationValues||m.latestValues;this.applyTransformsToTarget(),u.transform=_0(this.projectionDeltaWithTransform,this.treeScale,p),h&&(u.transform=h(p,u.transform));const{x:b,y:v}=this.projectionDelta;u.transformOrigin=`${b.origin*100}% ${v.origin*100}% 0`,m.animationValues?u.opacity=m===this?(d=(c=p.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=m===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const $ in Rl){if(p[$]===void 0)continue;const{correct:k,applyTo:y}=Rl[$],x=u.transform==="none"?p[$]:k(p[$],m);if(y){const g=y.length;for(let f=0;f<g;f++)u[y[f]]=x}else u[$]=x}return this.options.layoutId&&(u.pointerEvents=m===this?tl(l==null?void 0:l.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(l=>{var c;return(c=l.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(H0),this.root.sharedNodes.clear()}}}function v3(e){e.updateLayout()}function b3(e){var t;const r=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&r&&e.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:i}=e.layout,{animationType:s}=e.options,l=r.source!==e.layout.source;s==="size"?xt(m=>{const p=l?r.measuredBox[m]:r.layoutBox[m],b=ut(p);p.min=o[m].min,p.max=p.min+b}):Sw(s,r.layoutBox,o)&&xt(m=>{const p=l?r.measuredBox[m]:r.layoutBox[m],b=ut(o[m]);p.max=p.min+b,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[m].max=e.relativeTarget[m].min+b)});const c=Mo();qi(c,o,r.layoutBox);const d=Mo();l?qi(d,e.applyTransform(i,!0),r.measuredBox):qi(d,o,r.layoutBox);const u=!jw(c);let h=!1;if(!e.resumeFrom){const m=e.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:p,layout:b}=m;if(p&&b){const v=$e();Qi(v,r.layoutBox,p.layoutBox);const $=$e();Qi($,o,b.layoutBox),kw(v,$)||(h=!0),m.options.layoutRoot&&(e.relativeTarget=$,e.relativeTargetOrigin=v,e.relativeParent=m)}}}e.notifyListeners("didUpdate",{layout:o,snapshot:r,delta:d,layoutDelta:c,hasLayoutChanged:u,hasRelativeTargetChanged:h})}else if(e.isLead()){const{onExitComplete:o}=e.options;o&&o()}e.options.transition=void 0}function w3(e){wn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function $3(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function j3(e){e.clearSnapshot()}function H0(e){e.clearMeasurements()}function k3(e){e.isLayoutDirty=!1}function C3(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function G0(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function S3(e){e.resolveTargetDelta()}function P3(e){e.calcProjection()}function T3(e){e.resetRotation()}function A3(e){e.removeLeadSnapshot()}function Y0(e,t,r){e.translate=he(t.translate,0,r),e.scale=he(t.scale,1,r),e.origin=t.origin,e.originPoint=t.originPoint}function q0(e,t,r,o){e.min=he(t.min,r.min,o),e.max=he(t.max,r.max,o)}function z3(e,t,r,o){q0(e.x,t.x,r.x,o),q0(e.y,t.y,r.y,o)}function M3(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const D3={duration:.45,ease:[.4,0,.1,1]},Q0=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),K0=Q0("applewebkit/")&&!Q0("chrome/")?Math.round:we;function X0(e){e.min=K0(e.min),e.max=K0(e.max)}function E3(e){X0(e.x),X0(e.y)}function Sw(e,t,r){return e==="position"||e==="preserve-aspect"&&!Ph(V0(t),V0(r),.2)}const L3=Cw({attachResizeListener:(e,t)=>ir(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),$d={current:void 0},Pw=Cw({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!$d.current){const e=new L3({});e.mount(window),e.setOptions({layoutScroll:!0}),$d.current=e}return $d.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),R3={pan:{Feature:X4},drag:{Feature:K4,ProjectionNode:Pw,MeasureLayout:bw}},I3=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function F3(e){const t=I3.exec(e);if(!t)return[,];const[,r,o]=t;return[r,o]}function Mh(e,t,r=1){const[o,i]=F3(e);if(!o)return;const s=window.getComputedStyle(t).getPropertyValue(o);if(s){const l=s.trim();return cw(l)?parseFloat(l):l}else return bh(i)?Mh(i,t,r+1):i}function B3(e,{...t},r){const o=e.current;if(!(o instanceof Element))return{target:t,transitionEnd:r};r&&(r={...r}),e.values.forEach(i=>{const s=i.get();if(!bh(s))return;const l=Mh(s,o);l&&i.set(l)});for(const i in t){const s=t[i];if(!bh(s))continue;const l=Mh(s,o);l&&(t[i]=l,r||(r={}),r[i]===void 0&&(r[i]=s))}return{target:t,transitionEnd:r}}const N3=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Tw=e=>N3.has(e),O3=e=>Object.keys(e).some(Tw),J0=e=>e===Yn||e===U,Z0=(e,t)=>parseFloat(e.split(", ")[t]),eg=(e,t)=>(r,{transform:o})=>{if(o==="none"||!o)return 0;const i=o.match(/^matrix3d\((.+)\)$/);if(i)return Z0(i[1],t);{const s=o.match(/^matrix\((.+)\)$/);return s?Z0(s[1],e):0}},V3=new Set(["x","y","z"]),_3=Ds.filter(e=>!V3.has(e));function W3(e){const t=[];return _3.forEach(r=>{const o=e.getValue(r);o!==void 0&&(t.push([r,o.get()]),o.set(r.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Jo={width:({x:e},{paddingLeft:t="0",paddingRight:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),height:({y:e},{paddingTop:t="0",paddingBottom:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:eg(4,13),y:eg(5,14)};Jo.translateX=Jo.x;Jo.translateY=Jo.y;const U3=(e,t,r)=>{const o=t.measureViewportBox(),i=t.current,s=getComputedStyle(i),{display:l}=s,c={};l==="none"&&t.setStaticValue("display",e.display||"block"),r.forEach(u=>{c[u]=Jo[u](o,s)}),t.render();const d=t.measureViewportBox();return r.forEach(u=>{const h=t.getValue(u);h&&h.jump(c[u]),e[u]=Jo[u](d,s)}),e},H3=(e,t,r={},o={})=>{t={...t},o={...o};const i=Object.keys(t).filter(Tw);let s=[],l=!1;const c=[];if(i.forEach(d=>{const u=e.getValue(d);if(!e.hasValue(d))return;let h=r[d],m=gi(h);const p=t[d];let b;if(Fl(p)){const v=p.length,$=p[0]===null?1:0;h=p[$],m=gi(h);for(let k=$;k<v&&p[k]!==null;k++)b?tp(gi(p[k])===b):b=gi(p[k])}else b=gi(p);if(m!==b)if(J0(m)&&J0(b)){const v=u.get();typeof v=="string"&&u.set(parseFloat(v)),typeof p=="string"?t[d]=parseFloat(p):Array.isArray(p)&&b===U&&(t[d]=p.map(parseFloat))}else m!=null&&m.transform&&(b!=null&&b.transform)&&(h===0||p===0)?h===0?u.set(b.transform(h)):t[d]=m.transform(p):(l||(s=W3(e),l=!0),c.push(d),o[d]=o[d]!==void 0?o[d]:t[d],u.jump(p))}),c.length){const d=c.indexOf("height")>=0?window.pageYOffset:null,u=U3(t,e,c);return s.length&&s.forEach(([h,m])=>{e.getValue(h).set(m)}),e.render(),jc&&d!==null&&window.scrollTo({top:d}),{target:u,transitionEnd:o}}else return{target:t,transitionEnd:o}};function G3(e,t,r,o){return O3(t)?H3(e,t,r,o):{target:t,transitionEnd:o}}const Y3=(e,t,r,o)=>{const i=B3(e,t,o);return t=i.target,o=i.transitionEnd,G3(e,t,r,o)},Dh={current:null},Aw={current:!1};function q3(){if(Aw.current=!0,!!jc)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Dh.current=e.matches;e.addListener(t),t()}else Dh.current=!1}function Q3(e,t,r){const{willChange:o}=t;for(const i in t){const s=t[i],l=r[i];if(ot(s))e.addValue(i,s),Vl(o)&&o.add(i);else if(ot(l))e.addValue(i,Xo(s,{owner:e})),Vl(o)&&o.remove(i);else if(l!==s)if(e.hasValue(i)){const c=e.getValue(i);!c.hasAnimated&&c.set(s)}else{const c=e.getStaticValue(i);e.addValue(i,Xo(c!==void 0?c:s,{owner:e}))}}for(const i in r)t[i]===void 0&&e.removeValue(i);return t}const tg=new WeakMap,zw=Object.keys(ws),K3=zw.length,rg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],X3=Gm.length;class J3{constructor({parent:t,props:r,presenceContext:o,reducedMotionConfig:i,visualState:s},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>re.render(this.render,!1,!0);const{latestValues:c,renderState:d}=s;this.latestValues=c,this.baseTarget={...c},this.initialValues=r.initial?{...c}:{},this.renderState=d,this.parent=t,this.props=r,this.presenceContext=o,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.isControllingVariants=Cc(r),this.isVariantNode=pb(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...h}=this.scrapeMotionValuesFromProps(r,{});for(const m in h){const p=h[m];c[m]!==void 0&&ot(p)&&(p.set(c[m],!1),Vl(u)&&u.add(m))}}scrapeMotionValuesFromProps(t,r){return{}}mount(t){this.current=t,tg.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),Aw.current||q3(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Dh.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){tg.delete(this.current),this.projection&&this.projection.unmount(),pr(this.notifyUpdate),pr(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,r){const o=Gn.has(t),i=r.on("change",l=>{this.latestValues[t]=l,this.props.onUpdate&&re.update(this.notifyUpdate,!1,!0),o&&this.projection&&(this.projection.isTransformDirty=!0)}),s=r.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),s()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...r},o,i,s){let l,c;for(let d=0;d<K3;d++){const u=zw[d],{isEnabled:h,Feature:m,ProjectionNode:p,MeasureLayout:b}=ws[u];p&&(l=p),h(r)&&(!this.features[u]&&m&&(this.features[u]=new m(this)),b&&(c=b))}if((this.type==="html"||this.type==="svg")&&!this.projection&&l){this.projection=new l(this.latestValues,this.parent&&this.parent.projection);const{layoutId:d,layout:u,drag:h,dragConstraints:m,layoutScroll:p,layoutRoot:b}=r;this.projection.setOptions({layoutId:d,layout:u,alwaysMeasureLayout:!!h||m&&Ao(m),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,layoutScroll:p,layoutRoot:b})}return c}updateFeatures(){for(const t in this.features){const r=this.features[t];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):$e()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,r){this.latestValues[t]=r}makeTargetAnimatable(t,r=!0){return this.makeTargetAnimatableFromInstance(t,this.props,r)}update(t,r){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let o=0;o<rg.length;o++){const i=rg[o];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s=t["on"+i];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=Q3(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const o=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(o.initial=this.props.initial),o}const r={};for(let o=0;o<X3;o++){const i=Gm[o],s=this.props[i];(bs(s)||s===!1)&&(r[i]=s)}return r}addVariantChild(t){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(t),()=>r.variantChildren.delete(t)}addValue(t,r){r!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,r)),this.values.set(t,r),this.latestValues[t]=r.get()}removeValue(t){this.values.delete(t);const r=this.valueSubscriptions.get(t);r&&(r(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,r){if(this.props.values&&this.props.values[t])return this.props.values[t];let o=this.values.get(t);return o===void 0&&r!==void 0&&(o=Xo(r,{owner:this}),this.addValue(t,o)),o}readValue(t){var r;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,r){this.baseTarget[t]=r}getBaseTarget(t){var r;const{initial:o}=this.props,i=typeof o=="string"||typeof o=="object"?(r=ep(this.props,o))===null||r===void 0?void 0:r[t]:void 0;if(o&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!ot(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,r){return this.events[t]||(this.events[t]=new dp),this.events[t].add(r)}notify(t,...r){this.events[t]&&this.events[t].notify(...r)}}class Mw extends J3{sortInstanceNodePosition(t,r){return t.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(t,r){return t.style?t.style[r]:void 0}removeValueFromRenderState(t,{vars:r,style:o}){delete r[t],delete o[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:r,...o},{transformValues:i},s){let l=f4(o,t||{},this);if(i&&(r&&(r=i(r)),o&&(o=i(o)),l&&(l=i(l))),s){m4(this,o,l);const c=Y3(this,o,l,r);r=c.transitionEnd,o=c.target}return{transition:t,transitionEnd:r,...o}}}function Z3(e){return window.getComputedStyle(e)}class e6 extends Mw{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,r){if(Gn.has(r)){const o=ip(r);return o&&o.default||0}else{const o=Z3(t),i=(yb(r)?o.getPropertyValue(r):o[r])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:r}){return yw(t,r)}build(t,r,o,i){Qm(t,r,o,i.transformTemplate)}scrapeMotionValuesFromProps(t,r){return Zm(t,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;ot(t)&&(this.childSubscription=t.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}renderInstance(t,r,o,i){kb(t,r,o,i)}}class t6 extends Mw{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,r){return t[r]}readValueFromInstance(t,r){if(Gn.has(r)){const o=ip(r);return o&&o.default||0}return r=Cb.has(r)?r:Um(r),t.getAttribute(r)}measureInstanceViewportBox(){return $e()}scrapeMotionValuesFromProps(t,r){return Pb(t,r)}build(t,r,o,i){Xm(t,r,o,this.isSVGTag,i.transformTemplate)}renderInstance(t,r,o,i){Sb(t,r,o,i)}mount(t){this.isSVGTag=Jm(t.tagName),super.mount(t)}}const r6=(e,t)=>qm(e)?new t6(t,{enableHardwareAcceleration:!1}):new e6(t,{enableHardwareAcceleration:!0}),n6={layout:{ProjectionNode:Pw,MeasureLayout:bw}},o6={...z4,...K5,...R3,...n6},E=i5((e,t)=>F5(e,t,o6,r6));function Dw(){const e=j.useRef(!1);return Wm(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function i6(){const e=Dw(),[t,r]=j.useState(0),o=j.useCallback(()=>{e.current&&r(t+1)},[t]);return[j.useCallback(()=>re.postRender(o),[o]),t]}class s6 extends j.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=r.offsetHeight||0,o.width=r.offsetWidth||0,o.top=r.offsetTop,o.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function a6({children:e,isPresent:t}){const r=j.useId(),o=j.useRef(null),i=j.useRef({width:0,height:0,top:0,left:0});return j.useInsertionEffect(()=>{const{width:s,height:l,top:c,left:d}=i.current;if(t||!o.current||!s||!l)return;o.current.dataset.motionPopId=r;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${l}px !important;
            top: ${c}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),j.createElement(s6,{isPresent:t,childRef:o,sizeRef:i},j.cloneElement(e,{ref:o}))}const jd=({children:e,initial:t,isPresent:r,onExitComplete:o,custom:i,presenceAffectsLayout:s,mode:l})=>{const c=Tb(l6),d=j.useId(),u=j.useMemo(()=>({id:d,initial:t,isPresent:r,custom:i,onExitComplete:h=>{c.set(h,!0);for(const m of c.values())if(!m)return;o&&o()},register:h=>(c.set(h,!1),()=>c.delete(h))}),s?void 0:[r]);return j.useMemo(()=>{c.forEach((h,m)=>c.set(m,!1))},[r]),j.useEffect(()=>{!r&&!c.size&&o&&o()},[r]),l==="popLayout"&&(e=j.createElement(a6,{isPresent:r},e)),j.createElement($c.Provider,{value:u},e)};function l6(){return new Map}function c6(e){return j.useEffect(()=>()=>e(),[])}const $n=e=>e.key||"";function d6(e,t){e.forEach(r=>{const o=$n(r);t.set(o,r)})}function u6(e){const t=[];return j.Children.forEach(e,r=>{j.isValidElement(r)&&t.push(r)}),t}const ne=({children:e,custom:t,initial:r=!0,onExitComplete:o,exitBeforeEnter:i,presenceAffectsLayout:s=!0,mode:l="sync"})=>{const c=j.useContext(Ym).forceRender||i6()[0],d=Dw(),u=u6(e);let h=u;const m=j.useRef(new Map).current,p=j.useRef(h),b=j.useRef(new Map).current,v=j.useRef(!0);if(Wm(()=>{v.current=!1,d6(u,b),p.current=h}),c6(()=>{v.current=!0,b.clear(),m.clear()}),v.current)return j.createElement(j.Fragment,null,h.map(x=>j.createElement(jd,{key:$n(x),isPresent:!0,initial:r?void 0:!1,presenceAffectsLayout:s,mode:l},x)));h=[...h];const $=p.current.map($n),k=u.map($n),y=$.length;for(let x=0;x<y;x++){const g=$[x];k.indexOf(g)===-1&&!m.has(g)&&m.set(g,void 0)}return l==="wait"&&m.size&&(h=[]),m.forEach((x,g)=>{if(k.indexOf(g)!==-1)return;const f=b.get(g);if(!f)return;const S=$.indexOf(g);let C=x;if(!C){const P=()=>{m.delete(g);const w=Array.from(b.keys()).filter(A=>!k.includes(A));if(w.forEach(A=>b.delete(A)),p.current=u.filter(A=>{const T=$n(A);return T===g||w.includes(T)}),!m.size){if(d.current===!1)return;c(),o&&o()}};C=j.createElement(jd,{key:$n(f),isPresent:!1,onExitComplete:P,custom:t,presenceAffectsLayout:s,mode:l},f),m.set(g,C)}h.splice(S,0,C)}),h=h.map(x=>{const g=x.key;return m.has(g)?x:j.createElement(jd,{key:$n(x),isPresent:!0,presenceAffectsLayout:s,mode:l},x)}),j.createElement(j.Fragment,null,m.size?h:h.map(x=>j.cloneElement(x)))};var Ew={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ng=ce.createContext&&ce.createContext(Ew),Qr=function(){return Qr=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Qr.apply(this,arguments)},h6=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(r[o[i]]=e[o[i]]);return r};function Lw(e){return e&&e.map(function(t,r){return ce.createElement(t.tag,Qr({key:r},t.attr),Lw(t.child))})}function B(e){return function(t){return ce.createElement(m6,Qr({attr:Qr({},e.attr)},t),Lw(e.child))}}function m6(e){var t=function(r){var o=e.attr,i=e.size,s=e.title,l=h6(e,["attr","size","title"]),c=i||r.size||"1em",d;return r.className&&(d=r.className),e.className&&(d=(d?d+" ":"")+e.className),ce.createElement("svg",Qr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,l,{className:d,style:Qr(Qr({color:e.color||r.color},r.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&ce.createElement("title",null,s),e.children)};return ng!==void 0?ce.createElement(ng.Consumer,null,function(r){return t(r)}):t(Ew)}function Vn(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"}}]})(e)}function p6(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"}},{tag:"polyline",attr:{points:"12 19 5 12 12 5"}}]})(e)}function Rw(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"}},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"}}]})(e)}function up(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"10"}},{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"4"}},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"14"}}]})(e)}function js(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}},{tag:"path",attr:{d:"M13.73 21a2 2 0 0 1-3.46 0"}}]})(e)}function Ce(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}},{tag:"path",attr:{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}}]})(e)}function Iw(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}}]})(e)}function ze(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(e)}function fr(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"}}]})(e)}function hp(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 11 12 14 22 4"}},{tag:"path",attr:{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"}}]})(e)}function Wl(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"}}]})(e)}function ue(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(e)}function Kt(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 18 9 12 15 6"}}]})(e)}function Rt(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(e)}function f6(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"}}]})(e)}function Zo(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}},{tag:"rect",attr:{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"}}]})(e)}function Fe(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 6 12 12 16 14"}}]})(e)}function g6(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"}},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"}},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"}},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"}},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"}},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"}},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"}},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"}},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"}},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"}}]})(e)}function Eh(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"}},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}}]})(e)}function qn(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{points:"7 10 12 15 17 10"}},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"}}]})(e)}function ks(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}}]})(e)}function gr(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}},{tag:"path",attr:{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}}]})(e)}function mp(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}}]})(e)}function Ft(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}},{tag:"polyline",attr:{points:"14 2 14 8 20 8"}},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"}},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"}},{tag:"polyline",attr:{points:"10 9 9 9 8 9"}}]})(e)}function Lh(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}},{tag:"polyline",attr:{points:"13 2 13 9 20 9"}}]})(e)}function Jt(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}}]})(e)}function x6(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"}},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"}}]})(e)}function y6(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"}},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"}},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"}},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"}}]})(e)}function v6(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"}}]})(e)}function Ul(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"}}]})(e)}function b6(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"circle",attr:{cx:"8.5",cy:"8.5",r:"1.5"}},{tag:"polyline",attr:{points:"21 15 16 10 5 21"}}]})(e)}function _n(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"}}]})(e)}function Fw(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"}},{tag:"polyline",attr:{points:"2 17 12 22 22 17"}},{tag:"polyline",attr:{points:"2 12 12 17 22 12"}}]})(e)}function w6(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"}}]})(e)}function ei(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"}}]})(e)}function $6(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}},{tag:"polyline",attr:{points:"16 17 21 12 16 7"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"}}]})(e)}function Hl(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(e)}function En(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"}}]})(e)}function pp(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}function Ac(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}}]})(e)}function og(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"8",y1:"21",x2:"16",y2:"21"}},{tag:"line",attr:{x1:"12",y1:"17",x2:"12",y2:"21"}}]})(e)}function j6(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"}},{tag:"circle",attr:{cx:"19",cy:"12",r:"1"}},{tag:"circle",attr:{cx:"5",cy:"12",r:"1"}}]})(e)}function Is(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"}},{tag:"circle",attr:{cx:"12",cy:"5",r:"1"}},{tag:"circle",attr:{cx:"12",cy:"19",r:"1"}}]})(e)}function fp(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"}}]})(e)}function k6(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(e)}function C6(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}},{tag:"path",attr:{d:"M22 12A10 10 0 0 0 12 2v10z"}}]})(e)}function ig(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"}}]})(e)}function Qt(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"}},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}}]})(e)}function Ki(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"}},{tag:"polyline",attr:{points:"1 20 1 14 7 14"}},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"}}]})(e)}function Rh(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}},{tag:"polyline",attr:{points:"17 21 17 13 7 13 7 21"}},{tag:"polyline",attr:{points:"7 3 7 8 15 8"}}]})(e)}function Se(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(e)}function Bw(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"}},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"}}]})(e)}function Fs(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}}]})(e)}function Nw(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"}},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"}},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"}},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"}}]})(e)}function ti(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}}]})(e)}function sg(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"}},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"}},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"}},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"}},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"}},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"}},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"}},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"}}]})(e)}function Ow(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"path",attr:{d:"M8 14s1.5 2 4 2 4-2 4-2"}},{tag:"line",attr:{x1:"9",y1:"9",x2:"9.01",y2:"9"}},{tag:"line",attr:{x1:"15",y1:"9",x2:"15.01",y2:"9"}}]})(e)}function ag(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}}]})(e)}function S6(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"}}]})(e)}function P6(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"5",width:"22",height:"14",rx:"7",ry:"7"}},{tag:"circle",attr:{cx:"8",cy:"12",r:"3"}}]})(e)}function Bt(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"}},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"}},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"}}]})(e)}function T6(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}},{tag:"polyline",attr:{points:"17 8 12 3 7 8"}},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"}}]})(e)}function A6(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"}},{tag:"polyline",attr:{points:"17 11 19 13 23 9"}}]})(e)}function z6(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"}},{tag:"line",attr:{x1:"20",y1:"8",x2:"20",y2:"14"}},{tag:"line",attr:{x1:"23",y1:"11",x2:"17",y2:"11"}}]})(e)}function M6(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"}},{tag:"line",attr:{x1:"18",y1:"8",x2:"23",y2:"13"}},{tag:"line",attr:{x1:"23",y1:"8",x2:"18",y2:"13"}}]})(e)}function $t(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"}}]})(e)}function Ae(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"}}]})(e)}function gp(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"23 7 16 12 23 17 23 7"}},{tag:"rect",attr:{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"}}]})(e)}function zc(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"}},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"}}]})(e)}function Nt(e){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}const Vw=j.createContext(null),Ot=()=>{const e=j.useContext(Vw);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},D6=({children:e})=>{const[t,r]=j.useState(null),o=Ms();j.useEffect(()=>{const u=localStorage.getItem("lms_user");if(u)try{const h=JSON.parse(u);console.log("Loaded user from localStorage:",h),r(h)}catch(h){console.error("Failed to parse saved user",h),localStorage.removeItem("lms_user")}},[]);const i=(u,h,m)=>u===m&&h==="123456",s=(u,h,m)=>{if(console.log("Attempting login:",{username:u,role:m}),i(u,h,m)){const p=m==="admin"?"Admin User":m==="teacher"?"Teacher User":"Student User",b=`${m}@example.com`,v={username:u,role:m,fullName:p,email:b};return r(v),localStorage.setItem("lms_user",JSON.stringify(v)),console.log("Login successful, user set:",v),!0}return console.log("Login failed: Invalid credentials"),!1},l=()=>{console.log("Logout function called in AuthContext");try{r(null),console.log("User state cleared"),localStorage.removeItem("lms_user"),console.log("User removed from localStorage"),console.log("Navigating to login page"),o("/login"),console.log("Navigation completed")}catch(u){console.error("Error during logout process:",u)}},c=u=>{if(!t)return;const h={...t,...u};return h.role=t.role,r(h),localStorage.setItem("lms_user",JSON.stringify(h)),console.log("Profile updated:",h),!0},d=(u,h)=>u==="123456"?(console.log("Password updated successfully"),!0):(console.log("Password update failed: incorrect current password"),!1);return n.jsx(Vw.Provider,{value:{user:t,isAuthenticated:!!t,login:s,logout:l,updateProfile:c,updatePassword:d},children:e})},Mc=({variant:e="primary",size:t="medium",showIcon:r=!0,showText:o=!0,text:i="Logout",className:s})=>{const{logout:l}=Ot(),c=d=>{d.preventDefault(),d.stopPropagation(),console.log("LogoutButton: Logout triggered"),l()};return n.jsxs(E6,{$variant:e,$size:t,onClick:c,className:s,"data-testid":"logout-button",children:[r&&n.jsx($6,{}),o&&n.jsx("span",{children:i})]})},E6=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  
  /* Size variations */
  padding: ${e=>{switch(e.$size){case"small":return"6px 12px";case"large":return"12px 24px";default:return"8px 16px"}}};
  
  font-size: ${e=>{switch(e.$size){case"small":return"0.75rem";case"large":return"1rem";default:return"0.875rem"}}};
  
  /* Variant styling */
  background-color: ${e=>{switch(e.$variant){case"primary":return e.theme.colors.primary[500];case"secondary":return"transparent";case"danger":return e.theme.colors.danger[500];default:return e.theme.colors.primary[500]}}};
  
  color: ${e=>{switch(e.$variant){case"primary":return"white";case"secondary":return e.theme.colors.text.primary;case"danger":return"white";default:return"white"}}};
  
  border: ${e=>e.$variant==="secondary"?`1px solid ${e.theme.colors.border.light}`:"none"};
  
  &:hover {
    background-color: ${e=>{switch(e.$variant){case"primary":return e.theme.colors.primary[600];case"secondary":return e.theme.colors.background.hover;case"danger":return e.theme.colors.danger[600];default:return e.theme.colors.primary[600]}}};
    
    border-color: ${e=>e.$variant==="secondary"?e.theme.colors.border.dark:"none"};
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  svg {
    width: ${e=>e.$size==="small"?"14px":e.$size==="large"?"20px":"16px"};
    height: ${e=>e.$size==="small"?"14px":e.$size==="large"?"20px":"16px"};
  }
`,aa=({icon:e,label:t,to:r,isCollapsed:o})=>{const i=Xt(),s=i.pathname===r||i.pathname.startsWith(`${r}/`);return n.jsxs(H6,{to:r,$isActive:s,$isCollapsed:o,children:[n.jsx(G6,{children:e}),n.jsx(ne,{children:!o&&n.jsx(Y6,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},transition:{duration:.2},children:t})}),s&&n.jsx(q6,{layoutId:"activeIndicator",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}})]})},L6=({isCollapsed:e,toggleSidebar:t,onMobileToggle:r})=>{const[o,i]=j.useState(!1),[s,l]=j.useState(!1),{user:c}=Ot();j.useEffect(()=>{const $=()=>{i(window.innerWidth<1024)};return $(),window.addEventListener("resize",$),()=>window.removeEventListener("resize",$)},[]);const d=()=>{const $=!s;l($),r&&r($)},u=()=>{if(!c||!c.username)return"U";if(c.fullName){const $=c.fullName.split(" ");return $.length===1?$[0].charAt(0).toUpperCase():($[0].charAt(0)+$[$.length-1].charAt(0)).toUpperCase()}return c.username.charAt(0).toUpperCase()},h=()=>(c==null?void 0:c.fullName)||(c==null?void 0:c.username)||"User",p=(()=>{const $=localStorage.getItem("lms_user");if($)try{return JSON.parse($).role||"student"}catch(k){return console.error("Error parsing user info:",k),"student"}return(c==null?void 0:c.role)||"student"})();console.log("Detected user role:",p);const b=[{path:"/admin/dashboard",icon:n.jsx(Ul,{}),label:"Dashboard"},{path:"/admin/users",icon:n.jsx(Ae,{}),label:"User Management"},{path:"/admin/roles",icon:n.jsx(ti,{}),label:"Role Management"},{path:"/admin/subjects",icon:n.jsx(Ce,{}),label:"Subjects"},{path:"/admin/classes",icon:n.jsx(Fw,{}),label:"Classes"},{path:"/admin/timetables",icon:n.jsx(ze,{}),label:"Timetables"}],v=[{path:"/teacher/dashboard",icon:n.jsx(Ul,{}),label:"Dashboard"},{path:"/teacher/students",icon:n.jsx(Ae,{}),label:"Students"},{path:"/teacher/schedule",icon:n.jsx(ze,{}),label:"Schedule"}];return n.jsxs(n.Fragment,{children:[o&&n.jsx(B6,{onClick:d,children:s?n.jsx(Nt,{}):n.jsx(pp,{})}),n.jsx(ne,{children:(o?s:!0)&&n.jsxs(R6,{$isCollapsed:o?!1:e,$isMobile:o,as:E.aside,initial:{x:o?-300:0},animate:{x:0},exit:{x:o?-300:0},transition:{duration:.3,ease:"easeInOut"},children:[n.jsxs(N6,{$isCollapsed:o?!1:e,children:[e&&!o?n.jsx(V6,{children:"LMS"}):n.jsx(O6,{children:n.jsx(E.span,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},children:"Learning Management System"})}),o?n.jsx(_6,{onClick:d,children:n.jsx(Nt,{})}):n.jsx(_w,{onClick:t,children:e?n.jsx(Rt,{}):n.jsx(Kt,{})})]}),n.jsxs(W6,{children:[n.jsxs(lg,{children:[p==="admin"&&n.jsx(n.Fragment,{children:b.map($=>n.jsx(aa,{icon:$.icon,label:$.label,to:$.path,isCollapsed:o?!1:e},$.path))}),p==="teacher"&&n.jsx(n.Fragment,{children:v.map($=>n.jsx(aa,{icon:$.icon,label:$.label,to:$.path,isCollapsed:o?!1:e},$.path))})]}),n.jsxs(lg,{children:[n.jsx(ne,{children:(!e||o)&&n.jsx(U6,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2},children:"System"})}),n.jsx(aa,{icon:n.jsx($t,{}),label:"Profile",to:`/${p}/profile`,isCollapsed:o?!1:e}),n.jsx(aa,{icon:n.jsx(Fs,{}),label:"Settings",to:`/${p}/settings`,isCollapsed:o?!1:e})]})]}),n.jsxs(Q6,{$isCollapsed:o?!1:e,children:[n.jsx(K6,{children:u()}),n.jsx(ne,{children:(!e||o)&&n.jsxs(X6,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[n.jsx(J6,{children:h()}),n.jsx(Z6,{children:p==="admin"?"Admin":p==="teacher"?"Teacher":"Student"})]})}),n.jsx(eP,{variant:"secondary",size:"small",showText:!1})]}),o&&n.jsx(I6,{onClick:d})]})}),n.jsx(ne,{children:o&&s&&n.jsx(F6,{as:E.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:d})})]})},R6=a(E.aside)`
  height: 100%;
  background: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.primary};
  box-shadow: ${e=>e.theme.shadows.lg};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${e=>e.theme.zIndices.modal};
  
  width: ${({$isCollapsed:e,$isMobile:t})=>t?"300px":e?"80px":"280px"};
  transition: width ${e=>e.theme.transition.normal} ease;
`,I6=a.div`
  display: none;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`,F6=a(E.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${e=>e.theme.zIndices.overlay};
`,B6=a.button`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  border-radius: ${e=>e.theme.borderRadius.full};
  background: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: ${e=>e.theme.spacing[5]};
  z-index: ${e=>e.theme.zIndices.sticky};
  box-shadow: ${e=>e.theme.shadows.md};
  
  &:hover {
    background: ${e=>e.theme.colors.background.tertiary};
  }
  
  @media (min-width: ${e=>e.theme.breakpoints.lg}) {
    display: none;
  }
`,N6=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>e.$isCollapsed?"0 0.5rem":"0 1rem"};
  height: 60px;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    padding: 0 1rem;
  }
`,O6=a.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.primary[600]};
  white-space: nowrap;
`,V6=a.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${e=>e.theme.colors.primary[600]};
`,_w=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background-color: ${e=>e.theme.colors.background.tertiary};
  color: ${e=>e.theme.colors.primary[600]};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  margin-left: 0.5rem;
  position: absolute;
  right: 10px;
  z-index: 10;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[100]};
    color: ${e=>e.theme.colors.primary[700]};
  }
`,_6=a(_w)`
  color: ${e=>e.theme.colors.text.secondary};
  
  &:hover {
    color: ${e=>e.theme.colors.accent.red};
  }
`,W6=a.div`
  flex: 1;
  overflow-y: auto;
  padding: ${e=>e.theme.spacing[4]} 0;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[4]};
`,lg=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[1]};
`,U6=a(E.div)`
  font-size: ${e=>e.theme.spacing[3]};
  font-weight: 600;
  color: ${e=>e.theme.colors.text.tertiary};
  padding: 0 ${e=>e.theme.spacing[4]};
  margin-top: ${e=>e.theme.spacing[4]};
  margin-bottom: ${e=>e.theme.spacing[2]};
`,H6=a(Im)`
  display: flex;
  align-items: center;
  padding: ${e=>e.theme.spacing[3]} ${e=>e.theme.spacing[4]};
  position: relative;
  text-decoration: none;
  color: ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.text.secondary};
  font-weight: ${e=>e.$isActive?"600":"400"};
  font-size: 1rem;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
    color: ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.text.primary};
  }
  
  ${({$isCollapsed:e})=>e&&mr`
    justify-content: center;
    padding: ${t=>t.theme.spacing[3]} 0;
  `}
`,G6=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  min-width: 24px;
`,Y6=a(E.span)`
  margin-left: ${e=>e.theme.spacing[3]};
  white-space: nowrap;
  font-size: 1rem;
`,q6=a(E.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: ${e=>e.theme.colors.primary[600]};
  border-radius: 0 ${e=>e.theme.borderRadius.sm} ${e=>e.theme.borderRadius.sm} 0;
`,Q6=a.div`
  display: flex;
  align-items: center;
  padding: ${e=>e.theme.spacing[4]};
  border-top: 1px solid ${e=>e.theme.colors.border};
  gap: ${e=>e.theme.spacing[3]};
  
  ${({$isCollapsed:e})=>e&&mr`
    justify-content: center;
    padding: ${t=>t.theme.spacing[3]} 0;
  `}
`,K6=a.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.primary[500]};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
`,X6=a(E.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`,J6=a.div`
  font-weight: 600;
  font-size: ${e=>e.theme.spacing[3.5]};
  color: ${e=>e.theme.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Z6=a.div`
  font-size: ${e=>e.theme.spacing[3]};
  color: ${e=>e.theme.colors.text.tertiary};
`,eP=a(Mc)`
  padding: 0.5rem;
  background: transparent;
  
  svg {
    color: ${e=>e.theme.colors.text.secondary};
  }
  
  &:hover {
    svg {
      color: ${e=>e.theme.colors.danger[500]};
    }
  }
`,xp=()=>{const{user:e}=Ot(),[t,r]=j.useState(!1),o=j.useRef(null);j.useEffect(()=>{const d=u=>{o.current&&!o.current.contains(u.target)&&r(!1)};return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[]);const i=()=>{r(!t)},s=()=>{r(!1)},l=()=>{if(!e)return"?";if(e.fullName){const d=e.fullName.split(" ");return d.length===1?d[0].charAt(0).toUpperCase():(d[0].charAt(0)+d[d.length-1].charAt(0)).toUpperCase()}return e.username.charAt(0).toUpperCase()},c=()=>e?`/${e.role}/profile`:"/login";return n.jsxs(tP,{children:[n.jsxs(rP,{children:[n.jsx(nP,{placeholder:"Search..."}),n.jsx(oP,{children:n.jsx(Se,{})})]}),n.jsxs(iP,{children:[n.jsxs(sP,{children:[n.jsx(js,{}),n.jsx(aP,{children:"3"})]}),n.jsxs(lP,{ref:o,children:[n.jsx(dP,{onClick:i,children:n.jsx(uP,{children:l()})}),n.jsxs(cP,{onClick:i,children:[(e==null?void 0:e.fullName)||(e==null?void 0:e.username)||"User",n.jsx(ue,{style:{transform:t?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s ease"}})]}),t&&n.jsxs(hP,{children:[n.jsxs(mP,{children:[n.jsx(pP,{children:n.jsx(fP,{children:l()})}),n.jsxs(gP,{children:[n.jsx(xP,{children:(e==null?void 0:e.fullName)||(e==null?void 0:e.username)||"User"}),n.jsx(yP,{children:(e==null?void 0:e.role)||"No role"})]})]}),n.jsx(cg,{}),n.jsxs(dg,{as:gs,to:c(),onClick:s,children:[n.jsx(ug,{children:n.jsx($t,{})}),n.jsx("span",{children:"My Profile"})]}),n.jsxs(dg,{as:gs,to:`/${e==null?void 0:e.role}/settings`,children:[n.jsx(ug,{children:n.jsx(Fs,{})}),n.jsx("span",{children:"Settings"})]}),n.jsx(cg,{}),n.jsx(vP,{variant:"secondary",size:"medium",text:"Log out"})]})]})]})]})},tP=a.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  height: 60px;
  width: 100%;
  transition: background-color 0.2s ease, border-color 0.2s ease;
`,rP=a.div`
  position: relative;
  max-width: 400px;
  width: 100%;
`,nP=a.input`
  width: 100%;
  padding: 0.5rem 2.5rem 0.5rem 0.75rem;
  border-radius: 4px;
  border: 1px solid ${e=>e.theme.colors.border.light};
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  transition: all 0.2s ease;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[500]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }
`,oP=a.div`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>e.theme.colors.text.tertiary};
`,iP=a.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,sP=a.button`
  position: relative;
  background: transparent;
  border: none;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 1.25rem;
  padding: 0.25rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
  &:hover {
    background: ${e=>e.theme.colors.background.hover};
    color: ${e=>e.theme.colors.text.primary};
  }
`,aP=a.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: ${e=>e.theme.colors.danger[500]};
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,lP=a.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,cP=a.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.25rem;
  
  &:hover {
    color: ${e=>e.theme.colors.primary[600]};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    display: none;
  }
`,dP=a.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.primary[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,uP=a.span`
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
`,hP=a.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 240px;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.border.light};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: ${e=>e.theme.zIndices.dropdown};
  overflow: hidden;
`,mP=a.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`,pP=a.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.primary[500]};
  display: flex;
  align-items: center;
  justify-content: center;
`,fP=a.span`
  color: white;
  font-weight: 600;
  font-size: 1rem;
`,gP=a.div`
  display: flex;
  flex-direction: column;
`,xP=a.span`
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,yP=a.span`
  font-size: 0.75rem;
  color: ${e=>e.theme.colors.text.secondary};
  text-transform: capitalize;
`,cg=a.div`
  height: 1px;
  background-color: ${e=>e.theme.colors.border.light};
  margin: 0.25rem 0;
`,dg=a.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: none;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.875rem;
  text-align: left;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
`,ug=a.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: ${e=>e.theme.colors.text.secondary};
`,vP=a(Mc)`
  width: 100%;
  justify-content: flex-start;
  padding: 0.75rem 1rem;
  border-radius: 0;
  
  span {
    margin-left: 0.5rem;
  }
`,yp=()=>{const e=new Date().getFullYear();return n.jsx(bP,{children:n.jsxs(wP,{children:[n.jsxs($P,{children:["© ",e," Learning Management System. All rights reserved."]}),n.jsxs(jP,{children:[n.jsx(kd,{href:"#",children:"Privacy Policy"}),n.jsx(kd,{href:"#",children:"Terms of Service"}),n.jsx(kd,{href:"#",children:"Help Center"})]})]})})},bP=a.footer`
  background-color: ${e=>e.theme.colors.background.primary};
  border-top: 1px solid ${e=>e.theme.colors.border};
  padding: ${e=>e.theme.spacing.md};
`,wP=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${e=>e.theme.spacing.sm};
  }
`,$P=a.p`
  color: ${e=>e.theme.colors.text.tertiary};
  font-size: 0.875rem;
  margin: 0;
`,jP=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${e=>e.theme.spacing.xs};
    align-items: center;
  }
`,kd=a.a`
  color: ${e=>e.theme.colors.text.tertiary};
  text-decoration: none;
  font-size: 0.875rem;
  transition: color ${e=>e.theme.transition.fast};
  
  &:hover {
    color: ${e=>e.theme.colors.primary[600]};
    text-decoration: underline;
  }
`,kP=()=>{const[e,t]=j.useState(!1),[r,o]=j.useState(!1);j.useEffect(()=>{const l=()=>{window.innerWidth<1024&&t(!0)};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]);const i=()=>{t(!e)},s=l=>{o(l)};return n.jsxs(CP,{children:[n.jsx(L6,{isCollapsed:e,toggleSidebar:i,onMobileToggle:s}),n.jsxs(SP,{$isCollapsed:e,$isMobileOpen:r,children:[n.jsx(xp,{}),n.jsx(PP,{children:n.jsx(Rm,{})}),n.jsx(yp,{})]})]})},CP=a.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: ${e=>e.theme.colors.background.primary};
`,SP=a.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  transition: margin-left ${e=>e.theme.transition.normal} ease, 
              filter ${e=>e.theme.transition.normal},
              opacity ${e=>e.theme.transition.normal};
  z-index: ${e=>e.theme.zIndices.base};
  position: relative;
  margin-left: ${({$isCollapsed:e})=>e?"80px":"280px"};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    margin-left: 0;
    filter: ${({$isMobileOpen:e})=>e?"blur(4px)":"none"};
    opacity: ${({$isMobileOpen:e})=>e?.7:1};
    pointer-events: ${({$isMobileOpen:e})=>e?"none":"auto"};
  }
`,PP=a.main`
  flex: 1;
  padding: 24px 32px;
  overflow-y: auto;
  background-color: ${e=>e.theme.colors.background.secondary};
`,Zt=({icon:e,label:t,to:r,isCollapsed:o})=>{const i=Xt(),s=i.pathname===r||i.pathname.startsWith(`${r}/`);return n.jsxs(NP,{to:r,$isActive:s,$isCollapsed:o,children:[n.jsx(OP,{children:e}),n.jsx(ne,{children:!o&&n.jsx(VP,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},transition:{duration:.2},children:t})}),s&&n.jsx(_P,{layoutId:"activeIndicator",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}})]})},TP=({isCollapsed:e,toggleSidebar:t,onMobileToggle:r})=>{const[o,i]=j.useState(!1),[s,l]=j.useState(!1),{user:c}=Ot();j.useEffect(()=>{const p=()=>{i(window.innerWidth<1024)};return p(),window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]);const d=()=>{const p=!s;l(p),r&&r(p)},u=()=>{if(!c||!c.username)return"U";if(c.fullName){const p=c.fullName.split(" ");return p.length===1?p[0].charAt(0).toUpperCase():(p[0].charAt(0)+p[p.length-1].charAt(0)).toUpperCase()}return c.username.charAt(0).toUpperCase()},h=()=>(c==null?void 0:c.fullName)||(c==null?void 0:c.username)||"User",m=()=>(c==null?void 0:c.role)||"User";return n.jsxs(n.Fragment,{children:[o&&n.jsx(DP,{onClick:d,children:s?n.jsx(Nt,{}):n.jsx(pp,{})}),n.jsx(ne,{children:(o?s:!0)&&n.jsxs(AP,{$isCollapsed:o?!1:e,$isMobile:o,as:E.aside,initial:{x:o?-300:0},animate:{x:0},exit:{x:o?-300:0},transition:{duration:.3,ease:"easeInOut"},children:[n.jsxs(EP,{$isCollapsed:o?!1:e,children:[e&&!o?n.jsx(RP,{children:"LMS"}):n.jsx(LP,{children:n.jsx(E.span,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},children:"Learning Management System"})}),o?n.jsx(IP,{onClick:d,children:n.jsx(Nt,{})}):n.jsx(Ww,{onClick:t,children:e?n.jsx(Rt,{}):n.jsx(Kt,{})})]}),n.jsxs(FP,{children:[n.jsxs(hg,{children:[n.jsx(Zt,{icon:n.jsx(Ul,{}),label:"Dashboard",to:"/teacher/dashboard",isCollapsed:o?!1:e}),n.jsx(Zt,{icon:n.jsx(Ce,{}),label:"My Courses",to:"/teacher/courses",isCollapsed:o?!1:e}),n.jsx(Zt,{icon:n.jsx(Ae,{}),label:"Students",to:"/teacher/students",isCollapsed:o?!1:e}),n.jsx(Zt,{icon:n.jsx(Zo,{}),label:"Assignments",to:"/teacher/assignments",isCollapsed:o?!1:e}),n.jsx(Zt,{icon:n.jsx(hp,{}),label:"Grades",to:"/teacher/grades",isCollapsed:o?!1:e}),n.jsx(Zt,{icon:n.jsx(ze,{}),label:"Schedule",to:"/teacher/schedule",isCollapsed:o?!1:e}),n.jsx(Zt,{icon:n.jsx(Ac,{}),label:"Messages",to:"/teacher/messages",isCollapsed:o?!1:e})]}),n.jsx(ne,{children:(!e||o)&&n.jsx(BP,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2},children:"System"})}),n.jsxs(hg,{children:[n.jsx(Zt,{icon:n.jsx(Ae,{}),label:"Profile",to:"/teacher/profile",isCollapsed:o?!1:e}),n.jsx(Zt,{icon:n.jsx(Fs,{}),label:"Settings",to:"/teacher/settings",isCollapsed:o?!1:e})]})]}),n.jsxs(WP,{$isCollapsed:o?!1:e,children:[n.jsx(UP,{children:u()}),n.jsx(ne,{children:(!e||o)&&n.jsxs(HP,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[n.jsx(GP,{children:h()}),n.jsx(YP,{children:m()})]})}),n.jsx(qP,{variant:"secondary",size:"small",showText:!1})]}),o&&n.jsx(zP,{onClick:d})]})}),n.jsx(ne,{children:o&&s&&n.jsx(MP,{as:E.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:d})})]})},AP=a(E.aside)`
  height: 100%;
  background: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.primary};
  box-shadow: ${e=>e.theme.shadows.lg};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${e=>e.theme.zIndices.modal};
  
  width: ${({$isCollapsed:e,$isMobile:t})=>t?"300px":e?"80px":"280px"};
  transition: width ${e=>e.theme.transition.normal} ease;
`,zP=a.div`
  display: none;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`,MP=a(E.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${e=>e.theme.zIndices.overlay};
`,DP=a.button`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  border-radius: ${e=>e.theme.borderRadius.full};
  background: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: ${e=>e.theme.spacing[5]};
  z-index: ${e=>e.theme.zIndices.sticky};
  box-shadow: ${e=>e.theme.shadows.md};
  
  &:hover {
    background: ${e=>e.theme.colors.background.tertiary};
  }
  
  @media (min-width: ${e=>e.theme.breakpoints.lg}) {
    display: none;
  }
`,EP=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>e.$isCollapsed?"0 0.5rem":"0 1rem"};
  height: 60px;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    padding: 0 1rem;
  }
`,LP=a.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.primary[600]};
  white-space: nowrap;
`,RP=a.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${e=>e.theme.colors.primary[600]};
`,Ww=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background-color: ${e=>e.theme.colors.background.tertiary};
  color: ${e=>e.theme.colors.primary[600]};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  margin-left: 0.5rem;
  position: absolute;
  right: 10px;
  z-index: 10;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[100]};
    color: ${e=>e.theme.colors.primary[700]};
  }
`,IP=a(Ww)`
  color: ${e=>e.theme.colors.text.secondary};
  
  &:hover {
    color: ${e=>e.theme.colors.accent.red};
  }
`,FP=a.div`
  flex: 1;
  overflow-y: auto;
  padding: ${e=>e.theme.spacing[4]} 0;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[4]};
`,hg=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[1]};
`,BP=a(E.div)`
  font-size: ${e=>e.theme.spacing[3]};
  font-weight: 600;
  color: ${e=>e.theme.colors.text.tertiary};
  padding: 0 ${e=>e.theme.spacing[4]};
  margin-top: ${e=>e.theme.spacing[4]};
  margin-bottom: ${e=>e.theme.spacing[2]};
`,NP=a(Im)`
  display: flex;
  align-items: center;
  padding: ${e=>e.theme.spacing[3]} ${e=>e.theme.spacing[4]};
  position: relative;
  text-decoration: none;
  color: ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.text.secondary};
  font-weight: ${e=>e.$isActive?"600":"400"};
  font-size: 1rem;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
    color: ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.text.primary};
  }
  
  ${({$isCollapsed:e})=>e&&mr`
    justify-content: center;
    padding: ${t=>t.theme.spacing[3]} 0;
  `}
`,OP=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  min-width: 24px;
`,VP=a(E.span)`
  margin-left: ${e=>e.theme.spacing[3]};
  white-space: nowrap;
  font-size: 1rem;
`,_P=a(E.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: ${e=>e.theme.colors.primary[600]};
  border-radius: 0 ${e=>e.theme.borderRadius.sm} ${e=>e.theme.borderRadius.sm} 0;
`,WP=a.div`
  display: flex;
  align-items: center;
  padding: ${e=>e.theme.spacing[4]};
  border-top: 1px solid ${e=>e.theme.colors.border};
  gap: ${e=>e.theme.spacing[3]};
  
  ${({$isCollapsed:e})=>e&&mr`
    justify-content: center;
    padding: ${t=>t.theme.spacing[3]} 0;
  `}
`,UP=a.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.primary[500]};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
`,HP=a(E.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`,GP=a.div`
  font-weight: 600;
  font-size: ${e=>e.theme.spacing[3.5]};
  color: ${e=>e.theme.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,YP=a.div`
  font-size: ${e=>e.theme.spacing[3]};
  color: ${e=>e.theme.colors.text.tertiary};
`,qP=a(Mc)`
  padding: 0.5rem;
  background: transparent;
  
  svg {
    color: ${e=>e.theme.colors.text.secondary};
  }
  
  &:hover {
    svg {
      color: ${e=>e.theme.colors.danger[500]};
    }
  }
`,QP=()=>{const[e,t]=j.useState(!1),[r,o]=j.useState(!1);j.useEffect(()=>{const l=()=>{window.innerWidth<1024&&t(!0)};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]);const i=()=>{t(!e)},s=l=>{o(l)};return n.jsxs(KP,{children:[n.jsx(TP,{isCollapsed:e,toggleSidebar:i,onMobileToggle:s}),n.jsxs(XP,{$isCollapsed:e,$isMobileOpen:r,children:[n.jsx(xp,{}),n.jsx(JP,{children:n.jsx(Rm,{})}),n.jsx(yp,{})]})]})},KP=a.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: ${e=>e.theme.colors.background.primary};
`,XP=a.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  transition: margin-left ${e=>e.theme.transition.normal} ease, 
              filter ${e=>e.theme.transition.normal},
              opacity ${e=>e.theme.transition.normal};
  z-index: ${e=>e.theme.zIndices.base};
  position: relative;
  margin-left: ${({$isCollapsed:e})=>e?"80px":"280px"};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    margin-left: 0;
    filter: ${({$isMobileOpen:e})=>e?"blur(4px)":"none"};
    opacity: ${({$isMobileOpen:e})=>e?.7:1};
    pointer-events: ${({$isMobileOpen:e})=>e?"none":"auto"};
  }
`,JP=a.main`
  flex: 1;
  padding: 24px 32px;
  overflow-y: auto;
  background-color: ${e=>e.theme.colors.background.secondary};
`,Cd=({icon:e,label:t,to:r,isCollapsed:o})=>{const i=Xt(),s=i.pathname===r||i.pathname.startsWith(`${r}/`);return n.jsxs(cT,{to:r,$isActive:s,$isCollapsed:o,children:[n.jsx(dT,{children:e}),n.jsx(ne,{children:!o&&n.jsx(uT,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},transition:{duration:.2},children:t})}),s&&n.jsx(hT,{layoutId:"activeIndicator",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}})]})},ZP=({isCollapsed:e,toggleSidebar:t,onMobileToggle:r})=>{const[o,i]=j.useState(!1),[s,l]=j.useState(!1),{user:c}=Ot();j.useEffect(()=>{const p=()=>{i(window.innerWidth<1024)};return p(),window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]);const d=()=>{const p=!s;l(p),r&&r(p)},u=()=>{if(!c||!c.username)return"U";if(c.fullName){const p=c.fullName.split(" ");return p.length===1?p[0].charAt(0).toUpperCase():(p[0].charAt(0)+p[p.length-1].charAt(0)).toUpperCase()}return c.username.charAt(0).toUpperCase()},h=()=>(c==null?void 0:c.fullName)||(c==null?void 0:c.username)||"User",m=[{path:"/student/dashboard",icon:n.jsx(Ul,{}),label:"Dashboard"},{path:"/student/courses",icon:n.jsx(Ce,{}),label:"My Courses"},{path:"/student/lessons",icon:n.jsx(gp,{}),label:"Lessons"},{path:"/student/assignments",icon:n.jsx(Ft,{}),label:"Assignments"},{path:"/student/schedule",icon:n.jsx(ze,{}),label:"Schedule"},{path:"/student/messages",icon:n.jsx(Ac,{}),label:"Messages"},{path:"/student/tests",icon:n.jsx(Zo,{}),label:"Tests"},{path:"/student/flashcards",icon:n.jsx(Fw,{}),label:"Flashcards"}];return n.jsxs(n.Fragment,{children:[o&&n.jsx(nT,{onClick:d,children:s?n.jsx(Nt,{}):n.jsx(pp,{})}),n.jsx(ne,{children:(o?s:!0)&&n.jsxs(eT,{$isCollapsed:o?!1:e,$isMobile:o,as:E.aside,initial:{x:o?-300:0},animate:{x:0},exit:{x:o?-300:0},transition:{duration:.3,ease:"easeInOut"},children:[n.jsxs(oT,{$isCollapsed:o?!1:e,children:[e&&!o?n.jsx(sT,{children:"LMS"}):n.jsx(iT,{children:n.jsx(E.span,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},children:"Learning Management System"})}),o?n.jsx(aT,{onClick:d,children:n.jsx(Nt,{})}):n.jsx(Uw,{onClick:t,children:e?n.jsx(Rt,{}):n.jsx(Kt,{})})]}),n.jsxs(lT,{children:[n.jsx(mg,{children:m.map(p=>n.jsx(Cd,{icon:p.icon,label:p.label,to:p.path,isCollapsed:o?!1:e},p.path))}),n.jsxs(mg,{children:[n.jsx(ne,{children:(!e||o)&&n.jsx(vT,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2},children:"System"})}),n.jsx(Cd,{icon:n.jsx($t,{}),label:"Profile",to:"/student/profile",isCollapsed:o?!1:e}),n.jsx(Cd,{icon:n.jsx(Fs,{}),label:"Settings",to:"/student/settings",isCollapsed:o?!1:e})]})]}),n.jsxs(mT,{$isCollapsed:o?!1:e,children:[n.jsx(pT,{children:u()}),n.jsx(ne,{children:(!e||o)&&n.jsxs(fT,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[n.jsx(gT,{children:h()}),n.jsx(xT,{children:"Student"})]})}),n.jsx(yT,{variant:"secondary",size:"small",showText:!1})]}),o&&n.jsx(tT,{onClick:d})]})}),n.jsx(ne,{children:o&&s&&n.jsx(rT,{as:E.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:d})})]})},eT=a(E.aside)`
  height: 100%;
  background: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.primary};
  box-shadow: ${e=>e.theme.shadows.lg};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${e=>e.theme.zIndices.modal};
  
  width: ${({$isCollapsed:e,$isMobile:t})=>t?"300px":e?"80px":"280px"};
  transition: width ${e=>e.theme.transition.normal} ease;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    position: fixed;
  }
`,tT=a.div`
  display: none;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`,rT=a(E.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${e=>e.theme.zIndices.overlay};
`,nT=a.button`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  border-radius: ${e=>e.theme.borderRadius.full};
  background: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: ${e=>e.theme.spacing[5]};
  z-index: ${e=>e.theme.zIndices.sticky};
  box-shadow: ${e=>e.theme.shadows.md};
  
  &:hover {
    background: ${e=>e.theme.colors.background.tertiary};
  }
  
  @media (min-width: ${e=>e.theme.breakpoints.lg}) {
    display: none;
  }
`,oT=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>e.$isCollapsed?"0 0.5rem":"0 1rem"};
  height: 60px;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    padding: 0 1rem;
  }
`,iT=a.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.primary[600]};
  white-space: nowrap;
`,sT=a.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${e=>e.theme.colors.primary[600]};
`,Uw=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background-color: ${e=>e.theme.colors.background.tertiary};
  color: ${e=>e.theme.colors.primary};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  margin-left: 0.5rem;
  position: absolute;
  right: 10px;
  z-index: 10;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
`,aT=a(Uw)`
  color: ${e=>e.theme.colors.text.secondary};
  
  &:hover {
    color: ${e=>e.theme.colors.text.primary};
  }
`,lT=a.div`
  flex: 1;
  overflow-y: auto;
  padding: ${e=>e.theme.spacing[4]} 0;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[4]};
`,mg=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[1]};
`,cT=a(Im)`
  display: flex;
  align-items: center;
  padding: ${e=>e.theme.spacing[3]} ${e=>e.theme.spacing[4]};
  position: relative;
  text-decoration: none;
  color: ${e=>e.$isActive?e.theme.colors.primary:e.theme.colors.text.secondary};
  font-weight: ${e=>e.$isActive?"600":"400"};
  font-size: 1rem;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
    color: ${e=>e.$isActive?e.theme.colors.primary:e.theme.colors.text.primary};
  }
  
  ${({$isActive:e,theme:t})=>e&&mr`
    background-color: ${t.colors.background.hover};
  `}
  
  ${({$isCollapsed:e})=>e&&mr`
    justify-content: center;
    padding: ${t=>t.theme.spacing[3]} 0;
  `}
`,dT=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  min-width: 24px;
`,uT=a(E.span)`
  margin-left: ${e=>e.theme.spacing[3]};
  white-space: nowrap;
  font-size: 1rem;
`,hT=a(E.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: ${e=>e.theme.colors.primary};
  border-radius: 0 ${e=>e.theme.borderRadius.sm} ${e=>e.theme.borderRadius.sm} 0;
  box-shadow: 0 0 4px ${e=>e.theme.colors.primary}80;
`,mT=a.div`
  display: flex;
  align-items: center;
  padding: ${e=>e.theme.spacing[4]};
  border-top: 1px solid ${e=>e.theme.colors.border};
  gap: ${e=>e.theme.spacing[3]};
  
  ${({$isCollapsed:e})=>e&&mr`
    justify-content: center;
    padding: ${t=>t.theme.spacing[3]} 0;
  `}
`,pT=a.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.primary[600]};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
`,fT=a(E.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`,gT=a.div`
  font-weight: 600;
  font-size: ${e=>e.theme.spacing[3.5]};
  color: ${e=>e.theme.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,xT=a.div`
  font-size: ${e=>e.theme.spacing[3]};
  color: ${e=>e.theme.colors.text.tertiary};
`,yT=a(Mc)`
  padding: 0.5rem;
  background: transparent;
  
  svg {
    color: ${e=>e.theme.colors.text.secondary};
  }
  
  &:hover {
    svg {
      color: ${e=>e.theme.colors.danger};
    }
  }
`,vT=a(E.div)`
  font-size: ${e=>e.theme.spacing[3]};
  font-weight: 600;
  color: ${e=>e.theme.colors.text.tertiary};
  padding: 0 ${e=>e.theme.spacing[4]};
  margin-top: ${e=>e.theme.spacing[4]};
  margin-bottom: ${e=>e.theme.spacing[2]};
`,bT=()=>{const[e,t]=j.useState(!1),[r,o]=j.useState(!1);j.useEffect(()=>{const l=()=>{window.innerWidth<1024&&t(!0)};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]);const i=()=>{t(!e)},s=l=>{o(l)};return n.jsxs(wT,{children:[n.jsx(ZP,{isCollapsed:e,toggleSidebar:i,onMobileToggle:s}),n.jsxs($T,{$isCollapsed:e,$isMobileOpen:r,children:[n.jsx(xp,{}),n.jsx(jT,{children:n.jsx(Rm,{})}),n.jsx(yp,{})]})]})},wT=a.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: ${e=>e.theme.colors.background.primary};
`,$T=a.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  transition: margin-left ${e=>e.theme.transition.normal} ease, 
              filter ${e=>e.theme.transition.normal},
              opacity ${e=>e.theme.transition.normal};
  z-index: ${e=>e.theme.zIndices.base};
  position: relative;
  margin-left: ${({$isCollapsed:e})=>e?"80px":"280px"};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    margin-left: 0;
    filter: ${({$isMobileOpen:e})=>e?"blur(4px)":"none"};
    opacity: ${({$isMobileOpen:e})=>e?.7:1};
    pointer-events: ${({$isMobileOpen:e})=>e?"none":"auto"};
  }
`,jT=a.main`
  flex: 1;
  padding: 24px 32px;
  overflow-y: auto;
  background-color: ${e=>e.theme.colors.background.secondary};
`,Gl=(e,t)=>{switch(e){case"primary":return t.colors.primary[600];case"green":return t.colors.success[500];case"yellow":return t.colors.warning[500];case"purple":return t.colors.purple[500];case"red":return t.colors.danger[500];default:return t.colors.primary[600]}},kT=(e,t)=>{switch(e){case"primary":return t.colors.primary[50];case"green":return t.colors.success[50];case"yellow":return t.colors.warning[50];case"purple":return t.colors.purple[50];case"red":return t.colors.danger[50];default:return t.colors.primary[50]}},CT=a.div`
  display: flex;
  align-items: center;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  padding: ${e=>e.theme.spacing[5]};
  box-shadow: ${e=>e.theme.shadows.sm};
  border-left: 4px solid ${e=>Gl(e.$color,e.theme)};
  border-top: 1px solid ${e=>e.theme.colors.border.light};
  border-right: 1px solid ${e=>e.theme.colors.border.light};
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.md};
    border-color: ${e=>Gl(e.$color,e.theme)};
  }
`,ST=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${e=>e.theme.borderRadius.lg};
  background-color: ${e=>e.theme.colors.background.primary==="#0f172a"?Gl(e.$color,e.theme)+"22":kT(e.$color,e.theme)};
  color: ${e=>Gl(e.$color,e.theme)};
  font-size: 1.5rem;
  margin-right: ${e=>e.theme.spacing[4]};
`,PT=a.div`
  flex: 1;
`,TT=a.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: ${e=>e.theme.spacing[1]};
`,AT=a.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: ${e=>e.theme.spacing[2]};
`,zT=a.div`
  display: inline-flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
  font-size: 0.8rem;
  font-weight: 500;
  color: ${e=>e.$isPositive?e.theme.colors.success[500]:e.theme.colors.danger[500]};
  
  svg {
    font-size: 1rem;
  }
`,Hw=({icon:e,title:t,value:r,change:o,color:i})=>{const s=o.startsWith("+");return n.jsxs(CT,{$color:i,children:[n.jsx(ST,{$color:i,children:e}),n.jsxs(PT,{children:[n.jsx(TT,{children:r}),n.jsx(AT,{children:t}),n.jsx(zT,{$isPositive:s,children:o})]})]})},MT=()=>{const[e,t]=j.useState("week"),[r,o]=j.useState(!1),[i,s]=j.useState("overview"),l=[{id:1,title:"Total Users",value:356,change:"+12%",icon:n.jsx(Ae,{}),color:"primary"},{id:2,title:"Active Classes",value:24,change:"+5%",icon:n.jsx(Iw,{}),color:"green"},{id:3,title:"Subjects",value:48,change:"+3%",icon:n.jsx(Ce,{}),color:"yellow"},{id:4,title:"Upcoming Events",value:12,change:"+7%",icon:n.jsx(ze,{}),color:"purple"}],c=[{id:5,title:"Active Students",value:256,change:"+8%",icon:n.jsx(A6,{}),color:"primary"},{id:6,title:"Inactive Students",value:32,change:"-5%",icon:n.jsx(M6,{}),color:"red"},{id:7,title:"Avg. Attendance",value:"87%",change:"+2%",icon:n.jsx(fr,{}),color:"green"},{id:8,title:"Top Performers",value:42,change:"+15%",icon:n.jsx(ag,{}),color:"yellow"}],d=[{id:9,title:"Course Completion",value:"76%",change:"+4%",icon:n.jsx(up,{}),color:"primary"},{id:10,title:"Assignments",value:128,change:"+12%",icon:n.jsx(Zo,{}),color:"yellow"},{id:11,title:"Avg. Score",value:"82%",change:"+3%",icon:n.jsx(Rw,{}),color:"green"},{id:12,title:"Learning Hours",value:"1,240",change:"+18%",icon:n.jsx(Fe,{}),color:"purple"}],u=[{id:13,title:"System Health",value:"98%",change:"+1%",icon:n.jsx(g6,{}),color:"green"},{id:14,title:"Storage Used",value:"68%",change:"+7%",icon:n.jsx(Eh,{}),color:"yellow"},{id:15,title:"Notifications",value:18,change:"+5%",icon:n.jsx(js,{}),color:"primary"},{id:16,title:"Support Tickets",value:7,change:"-2%",icon:n.jsx(v6,{}),color:"purple"}],h=()=>{switch(i){case"students":return c;case"courses":return d;case"system":return u;default:return l}},m=[{id:1,user:"John Doe",action:"created a new class",time:"2 hours ago"},{id:2,user:"Jane Smith",action:"added 5 new students",time:"3 hours ago"},{id:3,user:"Robert Johnson",action:"updated Biology curriculum",time:"5 hours ago"},{id:4,user:"Emily Davis",action:"scheduled a new event",time:"1 day ago"},{id:5,user:"Michael Wilson",action:"created a new assessment",time:"1 day ago"}],p=[{subject:"Mathematics",completion:78},{subject:"Science",completion:92},{subject:"Language",completion:64},{subject:"History",completion:85}],b=[{id:1,name:"Emma Johnson",grade:"A+",performance:98,subject:"Mathematics"},{id:2,name:"Noah Williams",grade:"A",performance:95,subject:"Science"},{id:3,name:"Olivia Brown",grade:"A",performance:93,subject:"Literature"},{id:4,name:"Liam Davis",grade:"A-",performance:91,subject:"History"}],v=[{id:1,title:"Mid-term Examination",date:"2023-06-15",participation:"95%",avgScore:"76%"},{id:2,title:"Biology Quiz",date:"2023-06-10",participation:"98%",avgScore:"82%"},{id:3,title:"Mathematics Test",date:"2023-06-08",participation:"92%",avgScore:"74%"},{id:4,title:"Literature Essay",date:"2023-06-05",participation:"88%",avgScore:"81%"}],$=[{day:"Monday",attendance:94},{day:"Tuesday",attendance:92},{day:"Wednesday",attendance:88},{day:"Thursday",attendance:91},{day:"Friday",attendance:85}],k=()=>{o(!0),setTimeout(()=>{o(!1)},1e3)};return n.jsxs(DT,{children:[n.jsxs(ET,{children:[n.jsxs("div",{children:[n.jsx(LT,{children:"Dashboard"}),n.jsx(RT,{children:"Welcome back, Admin User!"})]}),n.jsxs(IT,{children:[n.jsxs(FT,{children:[n.jsx(Sd,{$isActive:e==="today",onClick:()=>t("today"),children:"Today"}),n.jsx(Sd,{$isActive:e==="week",onClick:()=>t("week"),children:"This Week"}),n.jsx(Sd,{$isActive:e==="month",onClick:()=>t("month"),children:"This Month"})]}),n.jsxs(NT,{onClick:k,disabled:r,children:[n.jsx(ne,{mode:"wait",children:r?n.jsx(E.div,{initial:{rotate:0},animate:{rotate:360},exit:{rotate:0},transition:{repeat:1/0,duration:1,ease:"linear"},children:n.jsx(Ki,{})},"refreshing"):n.jsx(E.div,{children:n.jsx(Ki,{})},"refresh")}),n.jsx("span",{children:"Refresh"})]})]})]}),n.jsxs(BT,{children:[n.jsx(la,{$isActive:i==="overview",onClick:()=>s("overview"),children:"Overview"}),n.jsx(la,{$isActive:i==="students",onClick:()=>s("students"),children:"Students"}),n.jsx(la,{$isActive:i==="courses",onClick:()=>s("courses"),children:"Courses"}),n.jsx(la,{$isActive:i==="system",onClick:()=>s("system"),children:"System"})]}),n.jsx(OT,{children:h().map((y,x)=>n.jsx(E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:x*.1},children:n.jsx(Hw,{icon:y.icon,title:y.title,value:y.value,change:y.change,color:y.color})},y.id))}),n.jsxs(ca,{children:[n.jsxs($r,{as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.4},children:[n.jsxs(jr,{children:[n.jsx(kr,{children:"Recent Activities"}),n.jsxs(yi,{children:["View All ",n.jsx(Fe,{})]})]}),n.jsx(_T,{children:m.map((y,x)=>n.jsxs(WT,{as:E.div,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:.5+x*.1},children:[n.jsx(UT,{}),n.jsxs(HT,{children:[n.jsx("strong",{children:y.user})," ",y.action,n.jsx(GT,{children:y.time})]})]},y.id))})]}),n.jsxs($r,{as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.5},children:[n.jsxs(jr,{children:[n.jsx(kr,{children:"Course Performance"}),n.jsxs(yi,{children:["Details ",n.jsx(C6,{})]})]}),n.jsx(YT,{children:p.map((y,x)=>n.jsxs(qT,{children:[n.jsx(QT,{children:y.subject}),n.jsx(pg,{children:n.jsx(fg,{$percentage:y.completion})}),n.jsxs(KT,{children:[y.completion,"%"]})]},x))})]})]}),n.jsxs(ca,{children:[n.jsxs($r,{as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.6},children:[n.jsxs(jr,{children:[n.jsx(kr,{children:"Top Performing Students"}),n.jsxs(yi,{children:["View All ",n.jsx(ag,{})]})]}),n.jsx(JT,{children:n.jsxs(ZT,{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx(da,{children:"Student"}),n.jsx(da,{children:"Subject"}),n.jsx(da,{children:"Grade"}),n.jsx(da,{children:"Performance"})]})}),n.jsx("tbody",{children:b.map(y=>n.jsxs("tr",{children:[n.jsx(ua,{children:y.name}),n.jsx(ua,{children:y.subject}),n.jsx(ua,{children:n.jsx(eA,{$grade:y.grade,children:y.grade})}),n.jsxs(ua,{children:[n.jsx(pg,{small:!0,children:n.jsx(fg,{$percentage:y.performance})}),n.jsxs(XT,{children:[y.performance,"%"]})]})]},y.id))})]})})]}),n.jsxs($r,{as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.7},children:[n.jsxs(jr,{children:[n.jsx(kr,{children:"Recent Assessments"}),n.jsxs(yi,{children:["View All ",n.jsx(Zo,{})]})]}),n.jsx(tA,{children:v.map(y=>n.jsxs(rA,{children:[n.jsxs(nA,{children:[n.jsx(oA,{children:y.title}),n.jsx(iA,{children:y.date})]}),n.jsxs(sA,{children:[n.jsxs(gg,{children:[n.jsx(xg,{children:"Participation"}),n.jsx(yg,{children:y.participation})]}),n.jsxs(gg,{children:[n.jsx(xg,{children:"Average Score"}),n.jsx(yg,{children:y.avgScore})]})]})]},y.id))})]})]}),n.jsxs(ca,{children:[n.jsxs($r,{as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.6},children:[n.jsx(jr,{children:n.jsx(kr,{children:"Weekly Attendance"})}),n.jsxs(aA,{children:[n.jsx(lA,{children:$.map(y=>n.jsxs(cA,{children:[n.jsx(dA,{$percentage:y.attendance}),n.jsxs(uA,{children:[y.attendance,"%"]}),n.jsx(hA,{children:y.day})]},y.day))}),n.jsx(mA,{children:"Weekly Average: 90%"})]})]}),n.jsxs($r,{as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.6},children:[n.jsx(jr,{children:n.jsx(kr,{children:"Quick Actions"})}),n.jsxs(pA,{children:[n.jsxs(ha,{$color:"primary",children:[n.jsx(ma,{$color:"primary",children:n.jsx(vA,{})}),n.jsx("span",{children:"Add New User"})]}),n.jsxs(ha,{$color:"green",children:[n.jsx(ma,{$color:"green",children:n.jsx(bA,{})}),n.jsx("span",{children:"Create Class"})]}),n.jsxs(ha,{$color:"yellow",children:[n.jsx(ma,{$color:"yellow",children:n.jsx(wA,{})}),n.jsx("span",{children:"Add Subject"})]}),n.jsxs(ha,{$color:"purple",children:[n.jsx(ma,{$color:"purple",children:n.jsx($A,{})}),n.jsx("span",{children:"Schedule Event"})]})]})]})]}),n.jsxs(ca,{children:[n.jsxs($r,{as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.7},children:[n.jsxs(jr,{children:[n.jsx(kr,{children:"System Status"}),n.jsx(VT,{children:"Last updated: 5 min ago"})]}),n.jsxs(fA,{children:[n.jsxs(Xn,{children:[n.jsx(Jn,{children:"System Version"}),n.jsx(pa,{children:"v1.0.0"})]}),n.jsxs(Xn,{children:[n.jsx(Jn,{children:"Last Backup"}),n.jsx(pa,{children:"Today at 03:00 AM"})]}),n.jsxs(Xn,{children:[n.jsx(Jn,{children:"Storage Used"}),n.jsx(gA,{children:n.jsx(xA,{$percentage:65})}),n.jsx(pa,{children:"65% of 10GB"})]}),n.jsxs(Xn,{children:[n.jsx(Jn,{children:"Server Status"}),n.jsxs(vg,{children:[n.jsx(bg,{$active:!0}),n.jsx("span",{children:"Operational"})]})]}),n.jsxs(Xn,{children:[n.jsx(Jn,{children:"Database Status"}),n.jsxs(vg,{children:[n.jsx(bg,{$active:!0}),n.jsx("span",{children:"Connected"})]})]}),n.jsxs(Xn,{children:[n.jsx(Jn,{children:"API Response Time"}),n.jsx(pa,{children:"124ms"})]})]})]}),n.jsxs($r,{as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.8},children:[n.jsxs(jr,{children:[n.jsx(kr,{children:"Notifications"}),n.jsxs(yi,{children:["View All ",n.jsx(js,{})]})]}),n.jsxs(yA,{children:[n.jsxs(fa,{$type:"info",children:[n.jsx(ga,{$type:"info",children:n.jsx(_n,{})}),n.jsxs(xa,{children:[n.jsx(ya,{children:"System maintenance scheduled for Sunday, 2:00 AM"}),n.jsx(va,{children:"2 hours ago"})]})]}),n.jsxs(fa,{$type:"success",children:[n.jsx(ga,{$type:"success",children:n.jsx(fr,{})}),n.jsxs(xa,{children:[n.jsx(ya,{children:"Database backup completed successfully"}),n.jsx(va,{children:"6 hours ago"})]})]}),n.jsxs(fa,{$type:"warning",children:[n.jsx(ga,{$type:"warning",children:n.jsx(Vn,{})}),n.jsxs(xa,{children:[n.jsx(ya,{children:"Storage space running low (25% remaining)"}),n.jsx(va,{children:"1 day ago"})]})]}),n.jsxs(fa,{$type:"info",children:[n.jsx(ga,{$type:"info",children:n.jsx(_n,{})}),n.jsxs(xa,{children:[n.jsx(ya,{children:"5 new users registered this week"}),n.jsx(va,{children:"2 days ago"})]})]})]})]})]})]})},Gw=(e,t)=>{switch(e){case"primary":return t.colors.primary[600];case"green":return t.colors.success[500];case"yellow":return t.colors.warning[500];case"purple":return t.colors.purple[500];case"red":return t.colors.danger[500];default:return t.colors.primary[600]}},Yw=(e,t)=>{switch(e){case"primary":return t.colors.primary[50];case"green":return t.colors.success[50];case"yellow":return t.colors.warning[50];case"purple":return t.colors.purple[50];case"red":return t.colors.danger[50];default:return t.colors.primary[50]}},DT=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[6]};
  padding: ${e=>e.theme.spacing[6]};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    padding: ${e=>e.theme.spacing[4]};
  }
`,ET=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${e=>e.theme.spacing[4]};
  }
`,LT=a.h1`
  margin: 0;
  margin-bottom: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1.8rem;
`,RT=a.p`
  margin: 0;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 1rem;
`,IT=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    justify-content: space-between;
  }
`,FT=a.div`
  display: flex;
  align-items: center;
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.lg};
  overflow: hidden;
`,Sd=a.button`
  background-color: ${e=>e.$isActive?e.theme.colors.primary[600]:"transparent"};
  color: ${e=>e.$isActive?"white":e.theme.colors.text.secondary};
  border: none;
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.$isActive?e.theme.colors.primary[700]:e.theme.colors.background.lighter};
    color: ${e=>e.$isActive?"white":e.theme.colors.text.primary};
  }
`,BT=a.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${e=>e.theme.spacing[4]};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.lg};
  background-color: ${e=>e.theme.colors.background.lighter};
  overflow: hidden;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    flex-wrap: wrap;
  }
`,la=a.button`
  flex: 1;
  background-color: ${e=>e.$isActive?e.theme.colors.primary[600]:"transparent"};
  color: ${e=>e.$isActive?"white":e.theme.colors.text.secondary};
  border: none;
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.$isActive?e.theme.colors.primary[700]:e.theme.colors.background.light};
    color: ${e=>e.$isActive?"white":e.theme.colors.text.primary};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    flex-basis: 50%;
  }
`,NT=a.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  background-color: ${e=>e.theme.colors.background.light};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.lg};
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.lighter};
    color: ${e=>e.theme.colors.text.primary};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,OT=a.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${e=>e.theme.spacing[6]};
  
  @media (max-width: ${e=>e.theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,ca=a.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${e=>e.theme.spacing[6]};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,$r=a.div`
  display: flex;
  flex-direction: column;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  box-shadow: ${e=>e.theme.shadows.sm};
  border: 1px solid ${e=>e.theme.colors.border.light};
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    box-shadow: ${e=>e.theme.shadows.md};
    transform: translateY(-2px);
  }
`,jr=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>`${e.theme.spacing[4]} ${e.theme.spacing[5]}`};
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,kr=a.h2`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,yi=a.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
  background: none;
  border: none;
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.primary[600]};
  cursor: pointer;
  transition: color ${e=>e.theme.transition.fast};
  
  &:hover {
    color: ${e=>e.theme.colors.primary[800]};
  }
`,VT=a.span`
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.text.secondary};
`,_T=a.div`
  padding: ${e=>e.theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[4]};
  background-color: ${e=>e.theme.colors.background.secondary};
  height: 100%;
`,WT=a.div`
  display: flex;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing[3]};
`,UT=a.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.primary[500]};
  margin-top: 6px;
`,HT=a.div`
  flex: 1;
  font-size: 0.95rem;
  color: ${e=>e.theme.colors.text.primary};
`,GT=a.div`
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-top: ${e=>e.theme.spacing[1]};
`,YT=a.div`
  padding: ${e=>e.theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[4]};
  background-color: ${e=>e.theme.colors.background.secondary};
  height: 100%;
`,qT=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[4]};
`,QT=a.div`
  width: 100px;
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.primary};
`,pg=a.div`
  flex: 1;
  height: ${e=>e.small?"8px":"12px"};
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: ${e=>e.theme.borderRadius.full};
  overflow: hidden;
`,fg=a.div`
  height: 100%;
  width: ${e=>`${e.$percentage}%`};
  background-color: ${e=>e.$percentage>80?e.theme.colors.success[500]:e.$percentage>50?e.theme.colors.warning[500]:e.theme.colors.danger[500]};
  border-radius: ${e=>e.theme.borderRadius.full};
`,KT=a.div`
  width: 50px;
  text-align: right;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,XT=a.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
  margin-left: ${e=>e.theme.spacing[2]};
`,JT=a.div`
  padding: ${e=>e.theme.spacing[4]};
  background-color: ${e=>e.theme.colors.background.secondary};
  height: 100%;
`,ZT=a.table`
  width: 100%;
  border-collapse: collapse;
`,da=a.th`
  text-align: left;
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
  font-size: 0.85rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.secondary};
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,ua=a.td`
  padding: ${e=>`${e.theme.spacing[3]} ${e.theme.spacing[3]}`};
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.primary};
  border-bottom: 1px solid ${e=>e.theme.colors.border.lighter};
`,eA=a.span`
  display: inline-block;
  padding: ${e=>`${e.theme.spacing[1]} ${e.theme.spacing[2]}`};
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.$grade.startsWith("A")?e.theme.colors.success[50]:e.$grade.startsWith("B")?e.theme.colors.primary[50]:e.$grade.startsWith("C")?e.theme.colors.warning[50]:e.theme.colors.danger[50]};
  color: ${e=>e.$grade.startsWith("A")?e.theme.colors.success[700]:e.$grade.startsWith("B")?e.theme.colors.primary[700]:e.$grade.startsWith("C")?e.theme.colors.warning[700]:e.theme.colors.danger[700]};
`,tA=a.div`
  padding: ${e=>e.theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[3]};
  background-color: ${e=>e.theme.colors.background.secondary};
  height: 100%;
`,rA=a.div`
  padding: ${e=>e.theme.spacing[3]};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.theme.colors.background.primary};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.sm};
  }
`,nA=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing[2]};
`,oA=a.div`
  font-weight: 600;
  font-size: 0.95rem;
  color: ${e=>e.theme.colors.text.primary};
`,iA=a.div`
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.text.secondary};
`,sA=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing[4]};
`,gg=a.div`
  flex: 1;
`,xg=a.div`
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: ${e=>e.theme.spacing[1]};
`,yg=a.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,aA=a.div`
  padding: ${e=>e.theme.spacing[4]};
  background-color: ${e=>e.theme.colors.background.secondary};
  height: 100%;
`,lA=a.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 200px;
  margin-bottom: ${e=>e.theme.spacing[4]};
`,cA=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
`,dA=a.div`
  width: 40px;
  height: ${e=>`${e.$percentage*1.5}px`};
  background-color: ${e=>e.theme.colors.primary[500]};
  border-radius: ${e=>e.theme.borderRadius.md} ${e=>e.theme.borderRadius.md} 0 0;
  margin-bottom: ${e=>e.theme.spacing[2]};
`,uA=a.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: ${e=>e.theme.spacing[1]};
`,hA=a.div`
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.text.secondary};
`,mA=a.div`
  text-align: center;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  padding-top: ${e=>e.theme.spacing[2]};
  border-top: 1px solid ${e=>e.theme.colors.border.light};
`,pA=a.div`
  padding: ${e=>e.theme.spacing[4]};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${e=>e.theme.spacing[3]};
  background-color: ${e=>e.theme.colors.background.secondary};
  height: 100%;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,ha=a.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing[3]};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>Yw(e.$color,e.theme)};
    border-color: ${e=>Gw(e.$color,e.theme)};
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.sm};
  }
`,ma=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>Yw(e.$color,e.theme)};
  color: ${e=>Gw(e.$color,e.theme)};
  font-size: 1.2rem;
`,fA=a.div`
  padding: ${e=>e.theme.spacing[4]};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${e=>e.theme.spacing[4]};
  background-color: ${e=>e.theme.colors.background.secondary};
  height: 100%;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,Xn=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[2]};
`,Jn=a.div`
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.text.secondary};
`,pa=a.div`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,gA=a.div`
  height: 6px;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: ${e=>e.theme.borderRadius.full};
  overflow: hidden;
  margin: ${e=>e.theme.spacing[1]} 0;
`,xA=a.div`
  height: 100%;
  width: ${e=>`${e.$percentage}%`};
  background-color: ${e=>e.$percentage>80?e.theme.colors.danger[500]:e.$percentage>60?e.theme.colors.warning[500]:e.theme.colors.success[500]};
`,vg=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  font-size: 0.9rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.success[700]};
`,bg=a.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${e=>e.$active?e.theme.colors.success[500]:e.theme.colors.danger[500]};
`,yA=a.div`
  padding: ${e=>e.theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[3]};
  background-color: ${e=>e.theme.colors.background.secondary};
  height: 100%;
`,fa=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing[3]};
  padding: ${e=>e.theme.spacing[3]};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.$type==="success"?e.theme.colors.success[400]:e.$type==="warning"?e.theme.colors.warning[400]:e.$type==="error"?e.theme.colors.danger[400]:e.theme.colors.primary[400]};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.sm};
  }
`,ga=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${e=>e.$type==="success"?e.theme.colors.success[500]:e.$type==="warning"?e.theme.colors.warning[500]:e.$type==="error"?e.theme.colors.danger[500]:e.theme.colors.primary[500]};
  color: white;
  font-size: 1rem;
  flex-shrink: 0;
`,xa=a.div`
  flex: 1;
`,ya=a.div`
  font-size: 0.95rem;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: ${e=>e.theme.spacing[1]};
`,va=a.div`
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.text.secondary};
`,vA=()=>n.jsx(Ae,{}),bA=()=>n.jsx(Iw,{}),wA=()=>n.jsx(Ce,{}),$A=()=>n.jsx(ze,{}),jA=()=>{const[e,t]=j.useState("week"),{user:r}=Ot(),o=[{id:1,title:"My Courses",value:5,change:"+1",icon:n.jsx(Ce,{}),color:"primary"},{id:2,title:"Students",value:87,change:"+3",icon:n.jsx(Ae,{}),color:"green"},{id:3,title:"Assignments",value:12,change:"+2",icon:n.jsx(Zo,{}),color:"yellow"},{id:4,title:"Messages",value:8,change:"+5",icon:n.jsx(Ac,{}),color:"purple"}],i=[{id:1,subject:"Mathematics",class:"10-A",time:"09:00 AM",duration:"1 hour",room:"Room 101"},{id:2,subject:"Physics",class:"11-B",time:"11:30 AM",duration:"1 hour",room:"Lab 3"},{id:3,subject:"Chemistry",class:"12-C",time:"02:15 PM",duration:"1 hour",room:"Lab 2"}],s=[{id:1,title:"Algebra Quiz",class:"10-A",dueDate:"Tomorrow",submissions:"15/24"},{id:2,title:"Physics Lab Report",class:"11-B",dueDate:"In 2 days",submissions:"8/20"},{id:3,title:"Chemistry Homework",class:"12-C",dueDate:"In 3 days",submissions:"12/22"}],l=[{id:1,title:"Mathematics Mid-term",class:"10-A",avgScore:"78%",completed:"24/24"},{id:2,title:"Physics Quiz",class:"11-B",avgScore:"82%",completed:"18/20"}];return n.jsxs(kA,{as:E.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[n.jsxs(CA,{children:[n.jsxs(SA,{children:[n.jsxs("h1",{children:["Welcome back, ",(r==null?void 0:r.fullName)||"Teacher"]}),n.jsx("p",{children:"Here's what's happening with your classes today"})]}),n.jsxs(PA,{children:[n.jsx(Pd,{$isActive:e==="today",onClick:()=>t("today"),children:"Today"}),n.jsx(Pd,{$isActive:e==="week",onClick:()=>t("week"),children:"This Week"}),n.jsx(Pd,{$isActive:e==="month",onClick:()=>t("month"),children:"This Month"})]})]}),n.jsx(TA,{children:o.map((c,d)=>n.jsx(E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:d*.1},children:n.jsx(Hw,{title:c.title,value:c.value,change:c.change,icon:c.icon,color:c.color})},c.id))}),n.jsxs(AA,{children:[n.jsxs(ba,{as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.3},children:[n.jsxs(wa,{children:[n.jsx($a,{children:"Today's Schedule"}),n.jsxs(ja,{as:gs,to:"/teacher/schedule",children:["View All ",n.jsx(ze,{})]})]}),n.jsx(zA,{children:i.map(c=>n.jsxs(MA,{children:[n.jsxs(DA,{children:[n.jsx(EA,{children:n.jsx(Fe,{})}),n.jsx(LA,{children:c.time}),n.jsx(RA,{children:c.duration})]}),n.jsxs(IA,{children:[n.jsx(FA,{children:c.subject}),n.jsxs(BA,{children:["Class ",c.class," • ",c.room]})]})]},c.id))})]}),n.jsxs(ba,{as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.4},children:[n.jsxs(wa,{children:[n.jsx($a,{children:"Pending Assignments"}),n.jsxs(ja,{children:["View All ",n.jsx(Zo,{})]})]}),n.jsx(NA,{children:s.map(c=>n.jsxs(OA,{children:[n.jsxs("div",{children:[n.jsx(VA,{children:c.title}),n.jsxs(_A,{children:["Class ",c.class]})]}),n.jsxs(WA,{children:[n.jsxs(UA,{children:["Due: ",c.dueDate]}),n.jsxs(HA,{children:["Submissions: ",c.submissions]})]})]},c.id))})]}),n.jsxs(ba,{as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.5},children:[n.jsxs(wa,{children:[n.jsx($a,{children:"Recent Grades"}),n.jsxs(ja,{children:["View All ",n.jsx(hp,{})]})]}),n.jsx(GA,{children:l.map(c=>n.jsxs(YA,{children:[n.jsxs("div",{children:[n.jsx(qA,{children:c.title}),n.jsxs(QA,{children:["Class ",c.class]})]}),n.jsxs(KA,{children:[n.jsxs(XA,{children:["Avg. Score: ",c.avgScore]}),n.jsxs(JA,{children:["Completed: ",c.completed]})]})]},c.id))})]}),n.jsxs(ba,{as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.6},children:[n.jsxs(wa,{children:[n.jsx($a,{children:"Class Performance"}),n.jsxs(ja,{children:["Details ",n.jsx(up,{})]})]}),n.jsxs(ZA,{children:[n.jsxs(Td,{children:[n.jsx(Ad,{children:"Class 10-A"}),n.jsx(zd,{children:n.jsx(Md,{$percentage:78})}),n.jsx(Dd,{children:"78%"})]}),n.jsxs(Td,{children:[n.jsx(Ad,{children:"Class 11-B"}),n.jsx(zd,{children:n.jsx(Md,{$percentage:82})}),n.jsx(Dd,{children:"82%"})]}),n.jsxs(Td,{children:[n.jsx(Ad,{children:"Class 12-C"}),n.jsx(zd,{children:n.jsx(Md,{$percentage:75})}),n.jsx(Dd,{children:"75%"})]})]})]})]})]})},kA=a.div`
  padding: 1rem 0;
`,CA=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`,SA=a.div`
  h1 {
    font-size: 1.75rem;
    font-weight: 600;
    margin: 0;
    color: ${e=>e.theme.colors.text.primary};
  }
  
  p {
    margin: 0.5rem 0 0;
    color: ${e=>e.theme.colors.text.secondary};
  }
`,PA=a.div`
  display: flex;
  background: ${e=>e.theme.colors.background.tertiary};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: 0.25rem;
`,Pd=a.button`
  padding: 0.5rem 1rem;
  border: none;
  background: ${e=>e.$isActive?e.theme.colors.background.primary:"transparent"};
  border-radius: ${e=>e.theme.borderRadius.sm};
  color: ${e=>e.$isActive?e.theme.colors.text.primary:e.theme.colors.text.secondary};
  font-weight: ${e=>e.$isActive?"500":"400"};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${e=>e.$isActive?e.theme.shadows.sm:"none"};
  
  &:hover {
    color: ${e=>e.theme.colors.text.primary};
  }
`,TA=a.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,AA=a.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,ba=a.div`
  background: ${e=>e.theme.colors.background.primary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  box-shadow: ${e=>e.theme.shadows.sm};
  overflow: hidden;
`,wa=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,$a=a.h2`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: ${e=>e.theme.colors.text.primary};
`,ja=a.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  color: ${e=>e.theme.colors.primary[500]};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  
  svg {
    font-size: 1rem;
  }
  
  &:hover {
    color: ${e=>e.theme.colors.primary[600]};
  }
`,zA=a.div`
  padding: 1rem 1.5rem;
`,MA=a.div`
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
  }
`,DA=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
  margin-right: 1rem;
`,EA=a.div`
  color: ${e=>e.theme.colors.primary[500]};
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`,LA=a.div`
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,RA=a.div`
  font-size: 0.75rem;
  color: ${e=>e.theme.colors.text.tertiary};
`,IA=a.div`
  flex: 1;
`,FA=a.div`
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: 0.25rem;
`,BA=a.div`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
`,NA=a.div`
  padding: 1rem 1.5rem;
`,OA=a.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
  }
`,VA=a.div`
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: 0.25rem;
`,_A=a.div`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
`,WA=a.div`
  text-align: right;
`,UA=a.div`
  color: ${e=>e.theme.colors.warning[500]};
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`,HA=a.div`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
`,GA=a.div`
  padding: 1rem 1.5rem;
`,YA=a.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
  }
`,qA=a.div`
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: 0.25rem;
`,QA=a.div`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
`,KA=a.div`
  text-align: right;
`,XA=a.div`
  color: ${e=>e.theme.colors.success[500]};
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`,JA=a.div`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
`,ZA=a.div`
  padding: 1.5rem;
`,Td=a.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Ad=a.div`
  min-width: 80px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,zd=a.div`
  flex: 1;
  height: 8px;
  background-color: ${e=>e.theme.colors.background.tertiary};
  border-radius: ${e=>e.theme.borderRadius.full};
  margin: 0 1rem;
  overflow: hidden;
`,Md=a.div`
  height: 100%;
  width: ${e=>e.$percentage}%;
  background-color: ${e=>e.$percentage>=80?e.theme.colors.success[500]:e.$percentage>=70?e.theme.colors.warning[500]:e.theme.colors.danger[500]};
  border-radius: ${e=>e.theme.borderRadius.full};
`,Dd=a.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  min-width: 40px;
  text-align: right;
`,e8=a.div`
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  box-shadow: ${e=>e.theme.shadows.sm};
  border: 1px solid ${e=>e.theme.colors.border.light};
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  
  &:hover {
    box-shadow: ${e=>e.theme.shadows.md};
    transform: translateY(-2px);
    border-color: ${e=>e.theme.colors.primary[500]};
  }
`,t8=a.div`
  padding: ${e=>e.theme.spacing[4]};
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,r8=a.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,n8=a.div`
  padding: ${e=>e.theme.spacing[4]};
`,en=({children:e,title:t,className:r,onClick:o})=>n.jsxs(e8,{className:r,onClick:o,children:[t&&n.jsx(t8,{children:n.jsx(r8,{children:t})}),n.jsx(n8,{children:e})]}),o8=()=>{const e=[{id:1,title:"Math Quiz: Algebra Basics",dueDate:"2023-04-20",subject:"Mathematics",status:"pending"},{id:2,title:"Physics Lab Report",dueDate:"2023-04-22",subject:"Physics",status:"pending"},{id:3,title:"Literature Essay",dueDate:"2023-04-25",subject:"English",status:"in-progress"}],t=[{id:1,title:"Chemistry Test",grade:92,subject:"Chemistry",date:"2023-04-10"},{id:2,title:"History Essay",grade:88,subject:"History",date:"2023-04-05"},{id:3,title:"Biology Quiz",grade:95,subject:"Biology",date:"2023-04-02"}],r=[{id:1,name:"Mathematics",progress:75,teacher:"Dr. Smith",nextClass:"Tomorrow, 9:00 AM"},{id:2,name:"Physics",progress:60,teacher:"Prof. Johnson",nextClass:"Thursday, 11:30 AM"},{id:3,name:"English Literature",progress:85,teacher:"Mrs. Davis",nextClass:"Wednesday, 1:00 PM"}];return n.jsxs(i8,{children:[n.jsxs(s8,{children:[n.jsxs(a8,{children:[n.jsx(c8,{children:"Student Dashboard"}),n.jsx(d8,{children:"Welcome to your learning dashboard"})]}),n.jsxs(l8,{children:[n.jsx(ze,{size:16}),n.jsx("span",{children:new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]})]}),n.jsx(u8,{children:n.jsx(h8,{children:n.jsxs(m8,{children:[n.jsx(p8,{children:"Welcome back, Student!"}),n.jsx(f8,{children:"You have 3 upcoming assignments and 4 active courses. Your overall progress is doing great - keep it up!"}),n.jsxs(g8,{children:[n.jsxs(Ed,{children:[n.jsx(Ld,{children:"Overall Grade"}),n.jsx(Rd,{children:"91%"}),n.jsx(Id,{$progress:91})]}),n.jsxs(Ed,{children:[n.jsx(Ld,{children:"Attendance"}),n.jsx(Rd,{children:"95%"}),n.jsx(Id,{$progress:95})]}),n.jsxs(Ed,{children:[n.jsx(Ld,{children:"Course Completion"}),n.jsx(Rd,{children:"68%"}),n.jsx(Id,{$progress:68})]})]})]})})}),n.jsx(Fd,{children:"Upcoming Assignments"}),n.jsx(x8,{children:e.map(o=>n.jsxs(y8,{children:[n.jsxs(v8,{children:[n.jsx(b8,{children:o.subject}),n.jsx(w8,{$status:o.status,children:o.status==="pending"?"Pending":"In Progress"})]}),n.jsx($8,{children:o.title}),n.jsxs(j8,{children:[n.jsx(Fe,{size:14}),n.jsxs("span",{children:["Due: ",new Date(o.dueDate).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]})]})]},o.id))}),n.jsxs(k8,{children:[n.jsxs(wg,{children:[n.jsx(Fd,{children:"Recent Grades"}),n.jsxs(en,{children:[n.jsx(C8,{children:t.map(o=>n.jsxs(S8,{children:[n.jsxs(P8,{children:[n.jsx(T8,{children:o.title}),n.jsxs(A8,{children:[o.subject," • ",new Date(o.date).toLocaleDateString("en-US",{month:"short",day:"numeric"})]})]}),n.jsxs(z8,{$grade:o.grade,children:[o.grade,"%"]})]},o.id))}),n.jsx($g,{children:"View all grades"})]})]}),n.jsxs(wg,{children:[n.jsx(Fd,{children:"My Courses"}),n.jsxs(en,{children:[n.jsx(M8,{children:r.map(o=>n.jsxs(D8,{children:[n.jsx(E8,{children:n.jsx(Ce,{size:18})}),n.jsxs(L8,{children:[n.jsxs(R8,{children:[n.jsx(I8,{children:o.name}),n.jsxs(F8,{children:[o.progress,"%"]})]}),n.jsx(B8,{children:o.teacher}),n.jsx(N8,{$progress:o.progress}),n.jsxs(O8,{children:[n.jsx(ze,{size:12}),n.jsx("span",{children:o.nextClass})]})]})]},o.id))}),n.jsx($g,{children:"View all courses"})]})]})]})]})},i8=a.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,s8=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,a8=a.div`
  display: flex;
  flex-direction: column;
`,l8=a.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  background: ${e=>e.theme.colors.background.primary};
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.border.light};
`,c8=a.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0;
`,d8=a.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 4px 0 0 0;
`,u8=a.div`
  margin-bottom: 12px;
`,h8=a.div`
  background: linear-gradient(135deg, ${e=>e.theme.colors.primary}20, ${e=>e.theme.colors.primary}10);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid ${e=>e.theme.colors.border.light};
`,m8=a.div`
  max-width: 900px;
`,p8=a.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: ${e=>e.theme.colors.text.primary};
`,f8=a.p`
  font-size: 15px;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 0 0 20px 0;
  line-height: 1.5;
`,g8=a.div`
  display: flex;
  gap: 24px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    gap: 16px;
  }
`,Ed=a.div`
  flex: 1;
`,Ld=a.div`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 4px;
`,Rd=a.div`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: 8px;
`,Id=a.div`
  height: 6px;
  width: 100%;
  background-color: ${e=>e.theme.colors.background.hover};
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${e=>e.$progress}%;
    background-color: ${e=>e.theme.colors.primary};
    border-radius: 3px;
  }
`,Fd=a.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0 0 16px 0;
`,x8=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
`,y8=a.div`
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: 12px;
  padding: 16px;
  border: 1px solid ${e=>e.theme.colors.border.light};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.md};
  }
`,v8=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`,b8=a.div`
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${e=>e.theme.colors.background.hover};
  color: ${e=>e.theme.colors.text.secondary};
`,w8=a.div`
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: ${e=>e.$status==="in-progress"?"#fff8e1":"#e3f2fd"};
  color: ${e=>e.$status==="in-progress"?"#f57c00":"#1e88e5"};
`,$8=a.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${e=>e.theme.colors.text.primary};
`,j8=a.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
`,k8=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 16px;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,wg=a.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,C8=a.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,S8=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`,P8=a.div`
  display: flex;
  flex-direction: column;
`,T8=a.div`
  font-size: 15px;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: 4px;
`,A8=a.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
`,z8=a.div`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.$grade>=90?"#2e7d32":e.$grade>=80?"#388e3c":e.$grade>=70?"#f57c00":"#d32f2f"};
`,$g=a.a`
  display: block;
  text-align: center;
  font-size: 14px;
  color: ${e=>e.theme.colors.primary};
  text-decoration: none;
  padding: 12px 0 0;
  margin-top: 12px;
  border-top: 1px solid ${e=>e.theme.colors.border.light};
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`,M8=a.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,D8=a.div`
  display: flex;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`,E8=a.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${e=>`${e.theme.colors.primary}15`};
  color: ${e=>e.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,L8=a.div`
  flex: 1;
`,R8=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`,I8=a.div`
  font-size: 15px;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,F8=a.div`
  font-size: 14px;
  font-weight: 500;
  color: ${e=>e.theme.colors.primary};
`,B8=a.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 8px;
`,N8=a.div`
  height: 4px;
  width: 100%;
  background-color: ${e=>e.theme.colors.background.hover};
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  margin-bottom: 8px;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${e=>e.$progress}%;
    background-color: ${e=>e.theme.colors.primary};
    border-radius: 2px;
  }
`,O8=a.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
`,V8=()=>{const e=Ms(),[t,r]=j.useState(""),[o,i]=j.useState("all"),[s,l]=j.useState(!1),[c,d]=j.useState(null),u=[{id:1,name:"Algebra Fundamentals",subject:"Mathematics",grade:"10-A",students:24,room:"Room 101",schedule:"Mon, Wed, Fri - 9:00 AM",progress:65,coverImage:"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80"},{id:2,name:"Physics Principles",subject:"Physics",grade:"11-B",students:20,room:"Lab 3",schedule:"Tue, Thu - 11:30 AM",progress:48,coverImage:"https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80"},{id:3,name:"Chemistry Fundamentals",subject:"Chemistry",grade:"12-C",students:22,room:"Lab 2",schedule:"Mon, Wed - 2:15 PM",progress:72,coverImage:"https://images.unsplash.com/photo-1616198814651-e71f960c3180?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80"},{id:4,name:"Geometry",subject:"Mathematics",grade:"10-B",students:25,room:"Room 102",schedule:"Tue, Thu - 9:00 AM",progress:58,coverImage:"https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80"},{id:5,name:"Biology 101",subject:"Biology",grade:"11-A",students:23,room:"Lab 1",schedule:"Mon, Wed, Fri - 11:00 AM",progress:82,coverImage:"https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=200&q=80"}],h=x=>{r(x.target.value)},m=x=>{i(x),l(!1)},p=u.filter(x=>{const g=x.name.toLowerCase().includes(t.toLowerCase())||x.subject.toLowerCase().includes(t.toLowerCase())||x.grade.toLowerCase().includes(t.toLowerCase());return o==="all"?g:o==="inProgress"?g&&x.progress<100&&x.progress>0:o==="notStarted"?g&&x.progress===0:o==="completed"?g&&x.progress===100:g}),b=()=>{const x=window.innerWidth;return x>=1600?4:x>=1280?3:x>=768?2:1},[v,$]=j.useState(b());ce.useEffect(()=>{const x=()=>{$(b())};return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]);const k=x=>{e(`/teacher/courses/${x}`)},y=(x,g)=>{g.stopPropagation(),d(c===x?null:x)};return n.jsxs(_8,{as:E.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[n.jsxs(W8,{children:[n.jsxs("div",{children:[n.jsx(U8,{children:"My Courses"}),n.jsx(H8,{children:"Manage your teaching subjects and classes"})]}),n.jsx(G8,{children:n.jsxs(Bd,{children:[n.jsx(Qt,{}),n.jsx("span",{children:"Add Course"})]})})]}),n.jsxs(Y8,{children:[n.jsxs(q8,{children:[n.jsx(Q8,{children:n.jsx(Se,{})}),n.jsx(K8,{type:"text",placeholder:"Search courses...",value:t,onChange:h})]}),n.jsxs(X8,{children:[n.jsxs(J8,{onClick:()=>l(!s),children:[n.jsx(Jt,{}),n.jsx("span",{children:"Filter"})]}),s&&n.jsxs(Z8,{children:[n.jsx(ka,{onClick:()=>m("all"),$isActive:o==="all",children:"All Courses"}),n.jsx(ka,{onClick:()=>m("inProgress"),$isActive:o==="inProgress",children:"In Progress"}),n.jsx(ka,{onClick:()=>m("notStarted"),$isActive:o==="notStarted",children:"Not Started"}),n.jsx(ka,{onClick:()=>m("completed"),$isActive:o==="completed",children:"Completed"})]})]})]}),p.length===0?n.jsxs(xz,{children:[n.jsx(yz,{children:n.jsx(Ce,{size:48})}),n.jsx(vz,{children:"No courses found"}),n.jsx(bz,{children:t?`No results matching "${t}". Try a different search term.`:"You haven't been assigned any courses yet."})]}):n.jsx(ez,{$columns:v,children:p.map(x=>n.jsxs(tz,{onClick:()=>k(x.id),as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[n.jsxs(rz,{children:[n.jsx(nz,{$imageUrl:x.coverImage}),n.jsx(oz,{children:x.subject}),n.jsxs(iz,{onClick:g=>y(x.id,g),children:[n.jsx(Is,{}),c===x.id&&n.jsxs(sz,{as:E.div,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.2},children:[n.jsxs(Nd,{onClick:g=>{g.stopPropagation(),e(`/teacher/courses/${x.id}`)},children:[n.jsx(mp,{}),n.jsx("span",{children:"View Details"})]}),n.jsxs(Nd,{children:[n.jsx(gr,{}),n.jsx("span",{children:"Edit Course"})]}),n.jsxs(Nd,{children:[n.jsx(Bt,{}),n.jsx("span",{children:"Delete Course"})]})]})]})]}),n.jsxs(az,{children:[n.jsx(lz,{children:x.name}),n.jsxs(cz,{children:["Class ",x.grade]}),n.jsxs(dz,{children:[n.jsxs(jg,{children:[n.jsx(kg,{$type:"students",children:n.jsx(Ae,{})}),n.jsxs(Cg,{children:[x.students," Students"]})]}),n.jsxs(jg,{children:[n.jsx(kg,{$type:"schedule",children:n.jsx(ze,{})}),n.jsx(Cg,{children:x.schedule.split(" - ")[0]})]})]}),n.jsxs(uz,{children:[n.jsx(hz,{children:"Course Progress"}),n.jsx(mz,{children:n.jsx(pz,{$percentage:x.progress})}),n.jsxs(fz,{children:[x.progress,"%"]})]}),n.jsxs(gz,{children:[n.jsxs(Bd,{$small:!0,children:[n.jsx(Ae,{}),n.jsx("span",{children:"Students"})]}),n.jsxs(Bd,{$small:!0,children:[n.jsx(up,{}),n.jsx("span",{children:"Progress"})]})]})]})]},x.id))})]})},_8=a.div`
  padding: 1rem 0;
`,W8=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`,U8=a.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
  color: ${e=>e.theme.colors.text.primary};
`,H8=a.p`
  margin: 0.5rem 0 0;
  color: ${e=>e.theme.colors.text.secondary};
`,G8=a.div`
  display: flex;
  gap: 1rem;
`,Bd=a.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: ${e=>e.$small?"0.5rem 0.75rem":"0.75rem 1rem"};
  background-color: ${e=>e.theme.colors.primary[500]};
  color: white;
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: ${e=>e.$small?"0.75rem":"0.875rem"};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${e=>e.theme.shadows.sm};
  
  svg {
    font-size: ${e=>e.$small?"0.875rem":"1rem"};
  }
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[600]};
  }
`,Y8=a.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`,q8=a.div`
  position: relative;
  flex: 1;
  min-width: 200px;
`,Q8=a.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>e.theme.colors.text.tertiary};
`,K8=a.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: ${e=>e.theme.borderRadius.md};
  border: 1px solid ${e=>e.theme.colors.border.light};
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.875rem;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[300]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }
`,X8=a.div`
  position: relative;
`,J8=a.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
  }
`,Z8=a.div`
  position: absolute;
  right: 0;
  top: calc(100% + 0.5rem);
  width: 200px;
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  box-shadow: ${e=>e.theme.shadows.md};
  z-index: 10;
  overflow: hidden;
`,ka=a.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: ${e=>e.$isActive?e.theme.colors.background.tertiary:"transparent"};
  color: ${e=>e.$isActive?e.theme.colors.primary[500]:e.theme.colors.text.primary};
  font-weight: ${e=>e.$isActive?"500":"normal"};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
  }
`,ez=a.div`
  display: grid;
  grid-template-columns: repeat(${e=>e.$columns}, 1fr);
  gap: 2rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.xl}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,tz=a.div`
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${e=>e.theme.shadows.sm};
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    box-shadow: ${e=>e.theme.shadows.md};
    transform: translateY(-4px);
  }
`,rz=a.div`
  position: relative;
  height: 140px;
`,nz=a.div`
  width: 100%;
  height: 100%;
  background-image: url(${e=>e.$imageUrl});
  background-size: cover;
  background-position: center;
`,oz=a.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.4rem 0.75rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: ${e=>e.theme.borderRadius.md};
`,iz=a.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`,sz=a.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 160px;
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  box-shadow: ${e=>e.theme.shadows.md};
  z-index: 20;
  overflow: hidden;
  margin-top: 0.5rem;
`,Nd=a.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.primary};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
  }
  
  svg {
    color: ${e=>e.theme.colors.text.secondary};
  }
`,az=a.div`
  padding: 1.5rem;
`,lz=a.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.25rem;
  color: ${e=>e.theme.colors.text.primary};
`,cz=a.div`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 1rem;
`,dz=a.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,jg=a.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,kg=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${e=>e.$type==="students"?e.theme.colors.primary[100]:e.theme.colors.success[100]};
  color: ${e=>e.$type==="students"?e.theme.colors.primary[500]:e.theme.colors.success[500]};
`,Cg=a.div`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
`,uz=a.div`
  margin-bottom: 1.5rem;
`,hz=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${e=>e.theme.colors.text.primary};
`,mz=a.div`
  height: 6px;
  width: 100%;
  background-color: ${e=>e.theme.colors.background.tertiary};
  border-radius: ${e=>e.theme.borderRadius.full};
  overflow: hidden;
  margin-bottom: 0.5rem;
`,pz=a.div`
  height: 100%;
  width: ${e=>e.$percentage}%;
  background-color: ${e=>e.$percentage>=80?e.theme.colors.success[500]:e.$percentage>=40?e.theme.colors.warning[500]:e.theme.colors.danger[500]};
  border-radius: ${e=>e.theme.borderRadius.full};
  transition: width 0.3s ease;
`,fz=a.div`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
  text-align: right;
`,gz=a.div`
  display: flex;
  gap: 0.75rem;
`,xz=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  text-align: center;
`,yz=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.background.tertiary};
  color: ${e=>e.theme.colors.primary[500]};
  margin-bottom: 1.5rem;
`,vz=a.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: ${e=>e.theme.colors.text.primary};
`,bz=a.p`
  font-size: 1rem;
  color: ${e=>e.theme.colors.text.secondary};
  max-width: 400px;
  margin: 0;
`,wz=()=>{const[e,t]=j.useState(""),[r,o]=j.useState("all"),[i,s]=j.useState(!1),[l,c]=j.useState(null),[d,u]=j.useState(!1),[h,m]=j.useState("name"),[p,b]=j.useState("asc"),v=[{id:1,name:"John Doe",email:"john.doe@school.edu",grade:"10-A",courses:["Algebra Fundamentals","Geometry"],attendance:92,performance:85,status:"active",avatar:"https://randomuser.me/api/portraits/men/32.jpg"},{id:2,name:"Jane Smith",email:"jane.smith@school.edu",grade:"10-A",courses:["Algebra Fundamentals"],attendance:98,performance:92,status:"active",avatar:"https://randomuser.me/api/portraits/women/44.jpg"},{id:3,name:"Michael Johnson",email:"michael.j@school.edu",grade:"11-B",courses:["Physics Principles"],attendance:78,performance:65,status:"active",avatar:"https://randomuser.me/api/portraits/men/52.jpg"},{id:4,name:"Emily Davis",email:"emily.d@school.edu",grade:"10-B",courses:["Geometry"],attendance:88,performance:78,status:"active",avatar:"https://randomuser.me/api/portraits/women/67.jpg"},{id:5,name:"Robert Wilson",email:"robert.w@school.edu",grade:"12-C",courses:["Chemistry Fundamentals"],attendance:65,performance:70,status:"inactive",avatar:"https://randomuser.me/api/portraits/men/22.jpg"},{id:6,name:"Sarah Brown",email:"sarah.b@school.edu",grade:"11-A",courses:["Biology 101"],attendance:95,performance:88,status:"active",avatar:"https://randomuser.me/api/portraits/women/33.jpg"},{id:7,name:"James Miller",email:"james.m@school.edu",grade:"10-A",courses:["Algebra Fundamentals","Geometry"],attendance:89,performance:76,status:"active",avatar:"https://randomuser.me/api/portraits/men/42.jpg"},{id:8,name:"Olivia Martinez",email:"olivia.m@school.edu",grade:"12-C",courses:["Chemistry Fundamentals"],attendance:82,performance:94,status:"active",avatar:"https://randomuser.me/api/portraits/women/24.jpg"}],$=[...new Set(v.flatMap(C=>C.courses))],k=C=>{t(C.target.value)},y=C=>{o(C),s(!1)},x=C=>{c(C),u(!1)},g=C=>{h===C?b(p==="asc"?"desc":"asc"):(m(C),b("asc"))},S=[...v.filter(C=>{const P=C.name.toLowerCase().includes(e.toLowerCase())||C.email.toLowerCase().includes(e.toLowerCase())||C.grade.toLowerCase().includes(e.toLowerCase()),w=r==="all"||r==="active"&&C.status==="active"||r==="inactive"&&C.status==="inactive"||r==="highPerformers"&&C.performance>=85||r==="needsHelp"&&C.performance<70,A=!l||C.courses.includes(l);return P&&w&&A})].sort((C,P)=>{let w="",A="";switch(h){case"name":w=C.name,A=P.name;break;case"grade":w=C.grade,A=P.grade;break;case"attendance":w=C.attendance,A=P.attendance;break;case"performance":w=C.performance,A=P.performance;break;default:w=C.name,A=P.name}return typeof w=="string"&&typeof A=="string"?p==="asc"?w.localeCompare(A):A.localeCompare(w):p==="asc"?w-A:A-w});return n.jsxs($z,{as:E.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[n.jsxs(jz,{children:[n.jsxs("div",{children:[n.jsx(kz,{children:"Students"}),n.jsx(Cz,{children:"Manage and monitor student progress across your courses"})]}),n.jsx(Sz,{children:n.jsxs(Pz,{children:[n.jsx(qn,{}),n.jsx("span",{children:"Export Data"})]})})]}),n.jsxs(Tz,{children:[n.jsxs(Az,{children:[n.jsx(zz,{children:n.jsx(Se,{})}),n.jsx(Mz,{type:"text",placeholder:"Search students...",value:e,onChange:k})]}),n.jsxs(Dz,{children:[n.jsxs(Ez,{onClick:()=>s(!i),children:[n.jsx(Jt,{}),n.jsx("span",{children:"Filter"})]}),i&&n.jsxs(Lz,{children:[n.jsx(vi,{onClick:()=>y("all"),$isActive:r==="all",children:"All Students"}),n.jsx(vi,{onClick:()=>y("active"),$isActive:r==="active",children:"Active Students"}),n.jsx(vi,{onClick:()=>y("inactive"),$isActive:r==="inactive",children:"Inactive Students"}),n.jsxs(vi,{onClick:()=>y("highPerformers"),$isActive:r==="highPerformers",children:["High Performers (",">","85%)"]}),n.jsxs(vi,{onClick:()=>y("needsHelp"),$isActive:r==="needsHelp",children:["Needs Help (","<","70%)"]})]})]}),n.jsxs(Rz,{children:[n.jsxs(Iz,{onClick:()=>u(!d),children:[n.jsx(Ce,{}),n.jsx("span",{children:l||"All Courses"}),n.jsx(ue,{style:{transform:d?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s ease"}})]}),d&&n.jsxs(Fz,{children:[n.jsx(Sg,{onClick:()=>x(null),$isActive:l===null,children:"All Courses"}),$.map((C,P)=>n.jsx(Sg,{onClick:()=>x(C),$isActive:l===C,children:C},P))]})]})]}),n.jsxs(Bz,{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsxs(an,{onClick:()=>g("name"),children:[n.jsx("span",{children:"Student Name"}),h==="name"&&n.jsx(Ca,{$direction:p,children:n.jsx(ue,{})})]}),n.jsxs(an,{onClick:()=>g("grade"),children:[n.jsx("span",{children:"Class"}),h==="grade"&&n.jsx(Ca,{$direction:p,children:n.jsx(ue,{})})]}),n.jsx(an,{children:n.jsx("span",{children:"Courses"})}),n.jsxs(an,{onClick:()=>g("attendance"),children:[n.jsx("span",{children:"Attendance"}),h==="attendance"&&n.jsx(Ca,{$direction:p,children:n.jsx(ue,{})})]}),n.jsxs(an,{onClick:()=>g("performance"),children:[n.jsx("span",{children:"Performance"}),h==="performance"&&n.jsx(Ca,{$direction:p,children:n.jsx(ue,{})})]}),n.jsx(an,{children:n.jsx("span",{children:"Status"})}),n.jsx(an,{children:n.jsx("span",{children:"Actions"})})]})}),n.jsx("tbody",{children:S.length===0?n.jsx("tr",{children:n.jsx(Oz,{colSpan:7,children:n.jsxs(Vz,{children:[n.jsx(Ae,{size:24}),n.jsx("p",{children:"No students found matching your filters"})]})})}):S.map(C=>n.jsxs(Nz,{children:[n.jsx(ln,{children:n.jsxs(_z,{children:[n.jsx(Wz,{src:C.avatar||"https://via.placeholder.com/40",alt:C.name}),n.jsxs(Uz,{children:[n.jsx(Hz,{children:C.name}),n.jsx(Gz,{children:C.email})]})]})}),n.jsx(ln,{children:C.grade}),n.jsx(ln,{children:n.jsx(Yz,{children:C.courses.map((P,w)=>n.jsx(qz,{children:P},w))})}),n.jsx(ln,{children:n.jsxs(Qz,{$value:C.attendance,children:[C.attendance,"%"]})}),n.jsx(ln,{children:n.jsxs(Kz,{children:[n.jsx(Xz,{$value:C.performance}),n.jsxs(Jz,{children:[C.performance,"%"]})]})}),n.jsx(ln,{children:n.jsx(Zz,{$status:C.status,children:C.status==="active"?n.jsxs(n.Fragment,{children:[n.jsx(fr,{}),n.jsx("span",{children:"Active"})]}):n.jsxs(n.Fragment,{children:[n.jsx(zc,{}),n.jsx("span",{children:"Inactive"})]})})}),n.jsx(ln,{children:n.jsxs(eM,{children:[n.jsx(Od,{title:"View Profile",children:n.jsx(mp,{})}),n.jsx(Od,{title:"Email Student",children:n.jsx(Hl,{})}),n.jsx(Od,{title:"Edit",children:n.jsx(gr,{})})]})})]},C.id))})]})]})},$z=a.div`
  padding: 1rem 0;
`,jz=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`,kz=a.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
`,Cz=a.p`
  margin: 0.5rem 0 0;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.secondary)||"#666"}};
`,Sz=a.div`
  display: flex;
  gap: 1rem;
`,Pz=a.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f5f5f5"}};
  }
`,Tz=a.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`,Az=a.div`
  position: relative;
  flex: 1;
  min-width: 200px;
`,zz=a.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#888"}};
`,Mz=a.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  font-size: 0.875rem;
  
  &::placeholder {
    color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#888"}};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[300])||"#007BFF"}};
    box-shadow: 0 0 0 2px ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[100])||"#e6f7ff"}};
  }
`,Dz=a.div`
  position: relative;
`,Ez=a.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f5f5f5"}};
  }
`,Lz=a.div`
  position: absolute;
  right: 0;
  top: calc(100% + 0.5rem);
  width: 220px;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.md)||"0 4px 6px rgba(0, 0, 0, 0.1)"}};
  z-index: 10;
  overflow: hidden;
`,vi=a.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: ${e=>{var t,r;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0":"transparent"}};
  color: ${e=>{var t,r,o,i;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#007bff":((i=(o=e.theme.colors)==null?void 0:o.text)==null?void 0:i.primary)||"#666"}};
  font-weight: ${e=>e.$isActive?"500":"normal"};
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  }
`,Rz=a.div`
  position: relative;
`,Iz=a.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 180px;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  }
  
  span {
    flex: 1;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Fz=a.div`
  position: absolute;
  right: 0;
  top: calc(100% + 0.5rem);
  width: 220px;
  max-height: 300px;
  overflow-y: auto;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.md)||"0 4px 6px rgba(0, 0, 0, 0.1)"}};
  z-index: 10;
`,Sg=a.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: ${e=>{var t,r;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0":"transparent"}};
  color: ${e=>{var t,r,o,i;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#007bff":((i=(o=e.theme.colors)==null?void 0:o.text)==null?void 0:i.primary)||"#666"}};
  font-weight: ${e=>e.$isActive?"500":"normal"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  }
`,Bz=a.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.lg)||"8px"}};
  overflow: hidden;
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.sm)||"0 0 10px rgba(0, 0, 0, 0.1)"}};
`,an=a.th`
  padding: 1rem;
  text-align: left;
  font-weight: 500;
  font-size: 0.875rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.secondary)||"#666"}};
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  border-bottom: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  position: relative;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  
  &:hover {
    color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  }
  
  span {
    display: inline-flex;
    align-items: center;
  }
`,Ca=a.span`
  margin-left: 0.25rem;
  display: inline-flex;
  transform: ${e=>e.$direction==="desc"?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;
`,Nz=a.tr`
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.hover)||"#f0f0f0"}};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  }
`,ln=a.td`
  padding: 1rem;
  font-size: 0.875rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  vertical-align: middle;
`,Oz=a.td`
  padding: 3rem 1rem;
  text-align: center;
`,Vz=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#666"}};
  
  p {
    margin: 0;
  }
`,_z=a.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Wz=a.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`,Uz=a.div`
  display: flex;
  flex-direction: column;
`,Hz=a.div`
  font-weight: 500;
  margin-bottom: 0.25rem;
`,Gz=a.div`
  font-size: 0.75rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#666"}};
`,Yz=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,qz=a.div`
  padding: 0.25rem 0.5rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[50])||"#e0f0ff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[700])||"#007bff"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  font-size: 0.75rem;
  white-space: nowrap;
`,Qz=a.div`
  font-weight: 500;
  color: ${e=>{var t,r,o,i,s,l;return e.$value>=90?((r=(t=e.theme.colors)==null?void 0:t.success)==null?void 0:r[500])||"#4caf50":e.$value>=75?((i=(o=e.theme.colors)==null?void 0:o.warning)==null?void 0:i[500])||"#ff9800":((l=(s=e.theme.colors)==null?void 0:s.danger)==null?void 0:l[500])||"#f44336"}};
`,Kz=a.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Xz=a.div`
  width: 80px;
  height: 6px;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.full)||"50%"}};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${e=>e.$value}%;
    background-color: ${e=>{var t,r,o,i,s,l;return e.$value>=85?((r=(t=e.theme.colors)==null?void 0:t.success)==null?void 0:r[500])||"#4caf50":e.$value>=70?((i=(o=e.theme.colors)==null?void 0:o.warning)==null?void 0:i[500])||"#ff9800":((l=(s=e.theme.colors)==null?void 0:s.danger)==null?void 0:l[500])||"#f44336"}};
    border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.full)||"50%"}};
  }
`,Jz=a.div`
  font-size: 0.75rem;
  font-weight: 500;
`,Zz=a.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${e=>{var t,r,o,i;return e.$status==="active"?((r=(t=e.theme.colors)==null?void 0:t.success)==null?void 0:r[50])||"#e8f5e9":((i=(o=e.theme.colors)==null?void 0:o.danger)==null?void 0:i[50])||"#ffebee"}};
  color: ${e=>{var t,r,o,i;return e.$status==="active"?((r=(t=e.theme.colors)==null?void 0:t.success)==null?void 0:r[600])||"#43a047":((i=(o=e.theme.colors)==null?void 0:o.danger)==null?void 0:i[600])||"#c62828"}};
  
  svg {
    font-size: 0.875rem;
  }
`,eM=a.div`
  display: flex;
  gap: 0.5rem;
`,Od=a.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  background-color: transparent;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.secondary)||"#666"}};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
    color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#007bff"}};
  }
`,tM=()=>{var I;const[e,t]=j.useState(""),[r,o]=j.useState("all"),[i,s]=j.useState(!1),[l,c]=j.useState(null),[d,u]=j.useState(!1),[h,m]=j.useState("dueDate"),[p,b]=j.useState("asc"),[v,$]=j.useState(!1),[k,y]=j.useState([{id:1,title:"Algebraic Equations Quiz",description:"Complete the quiz on solving basic algebraic equations.",courseId:1,courseName:"Algebra Fundamentals",dueDate:"2023-12-15T23:59:59",totalPoints:50,status:"completed",submissionsCount:28,gradedCount:28,averageScore:42,createdAt:"2023-11-30T10:00:00"},{id:2,title:"Geometry Shapes Project",description:"Create a presentation identifying shapes in the real world.",courseId:2,courseName:"Geometry",dueDate:"2023-12-20T23:59:59",totalPoints:100,status:"published",submissionsCount:15,gradedCount:0,createdAt:"2023-12-01T14:30:00"},{id:3,title:"Midterm Exam Preparation",description:"Practice questions covering all topics from the first semester.",courseId:1,courseName:"Algebra Fundamentals",dueDate:"2023-12-18T23:59:59",totalPoints:25,status:"published",submissionsCount:10,gradedCount:0,createdAt:"2023-12-05T09:15:00"},{id:4,title:"Physics Lab Report",description:"Write a lab report on the pendulum experiment.",courseId:3,courseName:"Physics Principles",dueDate:"2023-12-12T23:59:59",totalPoints:80,status:"grading",submissionsCount:25,gradedCount:18,averageScore:70,createdAt:"2023-11-28T11:20:00"},{id:5,title:"Chemical Reactions Worksheet",description:"Complete the chemical equations and identify reaction types.",courseId:4,courseName:"Chemistry Fundamentals",dueDate:"2023-12-30T23:59:59",totalPoints:40,status:"draft",submissionsCount:0,gradedCount:0,createdAt:"2023-12-07T16:45:00"}]),[x,g]=j.useState({title:"",description:"",courseId:0,dueDate:"",totalPoints:100,status:"draft"}),[f,S]=j.useState({}),C=[...new Map(k.map(z=>[z.courseId,{id:z.courseId,name:z.courseName}])).values()],P=z=>{t(z.target.value)},w=z=>{o(z),s(!1)},A=z=>{c(z),u(!1)},T=z=>{h===z?b(p==="asc"?"desc":"asc"):(m(z),b("asc"))},H=z=>{const N={year:"numeric",month:"short",day:"numeric"};return new Date(z).toLocaleDateString(void 0,N)},G=z=>{switch(z){case"draft":return"Draft";case"published":return"Published";case"grading":return"Grading";case"completed":return"Completed";default:return"Unknown"}},D=[...k.filter(z=>{const N=z.title.toLowerCase().includes(e.toLowerCase())||z.description.toLowerCase().includes(e.toLowerCase())||z.courseName.toLowerCase().includes(e.toLowerCase()),F=r==="all"||r==="published"&&z.status==="published"||r==="draft"&&z.status==="draft"||r==="grading"&&z.status==="grading"||r==="completed"&&z.status==="completed"||r==="upcoming"&&new Date(z.dueDate)>new Date&&z.status!=="completed",V=!l||z.courseId===l;return N&&F&&V})].sort((z,N)=>{let F="",V="";switch(h){case"title":F=z.title,V=N.title;break;case"dueDate":F=new Date(z.dueDate),V=new Date(N.dueDate);break;case"course":F=z.courseName,V=N.courseName;break;case"status":F=z.status,V=N.status;break;case"submissions":F=z.submissionsCount,V=N.submissionsCount;break;default:F=new Date(z.dueDate),V=new Date(N.dueDate)}return typeof F=="string"&&typeof V=="string"?p==="asc"?F.localeCompare(V):V.localeCompare(F):F instanceof Date&&V instanceof Date?p==="asc"?F.getTime()-V.getTime():V.getTime()-F.getTime():p==="asc"?F-V:V-F}),W=z=>{const{name:N,value:F}=z.target;g(V=>({...V,[N]:N==="totalPoints"?parseInt(F)||0:F})),f[N]&&S(V=>({...V,[N]:void 0}))},_=()=>{const z={};return x.title.trim()||(z.title="Title is required"),x.description.trim()||(z.description="Description is required"),x.courseId||(z.courseId="Please select a course"),x.dueDate?new Date(x.dueDate)<new Date&&(z.dueDate="Due date cannot be in the past"):z.dueDate="Due date is required",x.totalPoints<=0&&(z.totalPoints="Points must be greater than 0"),S(z),Object.keys(z).length===0},ve=z=>{var F;if(z.preventDefault(),!_())return;const N={id:Math.floor(Math.random()*1e4),title:x.title,description:x.description,courseId:x.courseId,courseName:((F=C.find(V=>V.id===x.courseId))==null?void 0:F.name)||"",dueDate:x.dueDate,totalPoints:x.totalPoints,status:x.status,submissionsCount:0,gradedCount:0,createdAt:new Date().toISOString()};y(V=>[N,...V]),g({title:"",description:"",courseId:0,dueDate:"",totalPoints:100,status:"draft"}),$(!1)};return n.jsxs(nM,{as:E.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[n.jsxs(oM,{children:[n.jsxs("div",{children:[n.jsx(iM,{children:"Assignments"}),n.jsx(sM,{children:"Create and manage assignments for your courses"})]}),n.jsxs(aM,{children:[n.jsxs(lM,{children:[n.jsx(qn,{}),n.jsx("span",{children:"Export"})]}),n.jsxs(cM,{onClick:()=>$(!0),children:[n.jsx(Qt,{}),n.jsx("span",{children:"New Assignment"})]})]})]}),n.jsxs(dM,{children:[n.jsxs(uM,{children:[n.jsx(hM,{children:n.jsx(Se,{})}),n.jsx(mM,{type:"text",placeholder:"Search assignments...",value:e,onChange:P})]}),n.jsxs(pM,{children:[n.jsxs(fM,{onClick:()=>s(!i),children:[n.jsx(Jt,{}),n.jsx("span",{children:"Filter"})]}),i&&n.jsxs(gM,{children:[n.jsx(Zn,{onClick:()=>w("all"),$isActive:r==="all",children:"All Assignments"}),n.jsx(Zn,{onClick:()=>w("upcoming"),$isActive:r==="upcoming",children:"Upcoming"}),n.jsx(Zn,{onClick:()=>w("published"),$isActive:r==="published",children:"Published"}),n.jsx(Zn,{onClick:()=>w("grading"),$isActive:r==="grading",children:"Needs Grading"}),n.jsx(Zn,{onClick:()=>w("completed"),$isActive:r==="completed",children:"Completed"}),n.jsx(Zn,{onClick:()=>w("draft"),$isActive:r==="draft",children:"Drafts"})]})]}),n.jsxs(xM,{children:[n.jsxs(yM,{onClick:()=>u(!d),children:[n.jsx(Ce,{}),n.jsx("span",{children:l?(I=C.find(z=>z.id===l))==null?void 0:I.name:"All Courses"}),n.jsx(ue,{style:{transform:d?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s ease"}})]}),d&&n.jsxs(vM,{children:[n.jsx(Pg,{onClick:()=>A(null),$isActive:l===null,children:"All Courses"}),C.map(z=>n.jsx(Pg,{onClick:()=>A(z.id),$isActive:l===z.id,children:z.name},z.id))]})]})]}),n.jsxs(bM,{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsxs(eo,{onClick:()=>T("title"),children:[n.jsx("span",{children:"Assignment"}),h==="title"&&n.jsx(bi,{$direction:p,children:n.jsx(ue,{})})]}),n.jsxs(eo,{onClick:()=>T("course"),children:[n.jsx("span",{children:"Course"}),h==="course"&&n.jsx(bi,{$direction:p,children:n.jsx(ue,{})})]}),n.jsxs(eo,{onClick:()=>T("dueDate"),children:[n.jsx("span",{children:"Due Date"}),h==="dueDate"&&n.jsx(bi,{$direction:p,children:n.jsx(ue,{})})]}),n.jsxs(eo,{onClick:()=>T("submissions"),children:[n.jsx("span",{children:"Submissions"}),h==="submissions"&&n.jsx(bi,{$direction:p,children:n.jsx(ue,{})})]}),n.jsxs(eo,{onClick:()=>T("status"),children:[n.jsx("span",{children:"Status"}),h==="status"&&n.jsx(bi,{$direction:p,children:n.jsx(ue,{})})]}),n.jsx(eo,{children:n.jsx("span",{children:"Actions"})})]})}),n.jsx("tbody",{children:D.length===0?n.jsx("tr",{children:n.jsx($M,{colSpan:6,children:n.jsxs(jM,{children:[n.jsx(Ft,{size:24}),n.jsx("p",{children:"No assignments found matching your filters"})]})})}):D.map(z=>n.jsxs(wM,{children:[n.jsx(to,{children:n.jsxs(kM,{children:[n.jsx(CM,{children:n.jsx(Ft,{})}),n.jsxs(SM,{children:[n.jsx(PM,{children:z.title}),n.jsx(TM,{children:z.description})]})]})}),n.jsx(to,{children:n.jsx(AM,{children:z.courseName})}),n.jsx(to,{children:n.jsxs(zM,{children:[n.jsx(MM,{children:n.jsx(ze,{})}),n.jsx("span",{children:H(z.dueDate)})]})}),n.jsx(to,{children:n.jsxs(DM,{children:[n.jsxs(EM,{children:[n.jsx(Ae,{size:14}),n.jsxs("span",{children:[z.submissionsCount," / ",z.gradedCount]})]}),z.averageScore!==void 0&&n.jsx(LM,{children:n.jsxs("span",{children:["Avg: ",z.averageScore,"/",z.totalPoints]})})]})}),n.jsx(to,{children:n.jsxs(RM,{$status:z.status,children:[rM(z.status),n.jsx("span",{children:G(z.status)})]})}),n.jsx(to,{children:n.jsxs(IM,{children:[n.jsx(Sa,{title:"View Details",children:n.jsx(mp,{})}),n.jsx(Sa,{title:"Edit Assignment",children:n.jsx(gr,{})}),z.status!=="published"&&z.status!=="grading"&&n.jsx(Sa,{title:"Delete Assignment",children:n.jsx(Bt,{})}),z.status==="draft"&&n.jsx(Sa,{title:"Publish Assignment",children:n.jsx(Nw,{})})]})})]},z.id))})]}),v&&n.jsxs(FM,{children:[n.jsxs(NM,{as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[n.jsxs(OM,{children:[n.jsx(VM,{children:"Create New Assignment"}),n.jsx(_M,{onClick:()=>$(!1),children:"×"})]}),n.jsx(WM,{children:n.jsxs("form",{onSubmit:ve,children:[n.jsxs(ro,{children:[n.jsx(no,{htmlFor:"title",children:"Assignment Title"}),n.jsx(Vd,{id:"title",name:"title",type:"text",placeholder:"Enter assignment title",value:x.title,onChange:W,$hasError:!!f.title}),f.title&&n.jsx(wi,{children:f.title})]}),n.jsxs(ro,{children:[n.jsx(no,{htmlFor:"description",children:"Description"}),n.jsx(HM,{id:"description",name:"description",placeholder:"Enter assignment instructions",value:x.description,onChange:W,$hasError:!!f.description,rows:4}),f.description&&n.jsx(wi,{children:f.description})]}),n.jsxs(Tg,{children:[n.jsxs(ro,{children:[n.jsx(no,{htmlFor:"courseId",children:"Course"}),n.jsxs(Ag,{id:"courseId",name:"courseId",value:x.courseId,onChange:W,$hasError:!!f.courseId,children:[n.jsx("option",{value:"",children:"Select a course"}),C.map(z=>n.jsx("option",{value:z.id,children:z.name},z.id))]}),f.courseId&&n.jsx(wi,{children:f.courseId})]}),n.jsxs(ro,{children:[n.jsx(no,{htmlFor:"dueDate",children:"Due Date"}),n.jsx(Vd,{id:"dueDate",name:"dueDate",type:"datetime-local",value:x.dueDate,onChange:W,$hasError:!!f.dueDate}),f.dueDate&&n.jsx(wi,{children:f.dueDate})]})]}),n.jsxs(Tg,{children:[n.jsxs(ro,{children:[n.jsx(no,{htmlFor:"totalPoints",children:"Total Points"}),n.jsx(Vd,{id:"totalPoints",name:"totalPoints",type:"number",min:"0",value:x.totalPoints,onChange:W,$hasError:!!f.totalPoints}),f.totalPoints&&n.jsx(wi,{children:f.totalPoints})]}),n.jsxs(ro,{children:[n.jsx(no,{htmlFor:"status",children:"Status"}),n.jsxs(Ag,{id:"status",name:"status",value:x.status,onChange:W,children:[n.jsx("option",{value:"draft",children:"Save as Draft"}),n.jsx("option",{value:"published",children:"Publish Immediately"})]})]})]}),n.jsxs(UM,{children:[n.jsx(YM,{type:"button",onClick:()=>$(!1),children:"Cancel"}),n.jsx(GM,{type:"submit",children:"Create Assignment"})]})]})})]}),n.jsx(BM,{onClick:()=>$(!1)})]})]})},rM=e=>{switch(e){case"draft":return n.jsx(Ft,{});case"published":return n.jsx(Vn,{});case"grading":return n.jsx(Fe,{});case"completed":return n.jsx(hp,{});default:return n.jsx(Ft,{})}},nM=a.div`
  padding: 1rem 0;
`,oM=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`,iM=a.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
`,sM=a.p`
  margin: 0.5rem 0 0;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.secondary)||"#666"}};
`,aM=a.div`
  display: flex;
  gap: 1rem;
`,lM=a.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f5f5f5"}};
  }
`,cM=a.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#0ea5e9"}};
  color: #fff;
  border: none;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[600])||"#0284c7"}};
  }
`,dM=a.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`,uM=a.div`
  position: relative;
  flex: 1;
  min-width: 200px;
`,hM=a.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#888"}};
`,mM=a.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  font-size: 0.875rem;
  
  &::placeholder {
    color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#888"}};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[300])||"#7dd3fc"}};
    box-shadow: 0 0 0 2px ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[100])||"#e0f2fe"}};
  }
`,pM=a.div`
  position: relative;
`,fM=a.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f5f5f5"}};
  }
`,gM=a.div`
  position: absolute;
  right: 0;
  top: calc(100% + 0.5rem);
  width: 220px;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.md)||"0 4px 6px rgba(0, 0, 0, 0.1)"}};
  z-index: 10;
  overflow: hidden;
`,Zn=a.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: ${e=>{var t,r;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0":"transparent"}};
  color: ${e=>{var t,r,o,i;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#0ea5e9":((i=(o=e.theme.colors)==null?void 0:o.text)==null?void 0:i.primary)||"#000"}};
  font-weight: ${e=>e.$isActive?"500":"normal"};
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  }
`,xM=a.div`
  position: relative;
`,yM=a.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 180px;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f5f5f5"}};
  }
  
  span {
    flex: 1;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,vM=a.div`
  position: absolute;
  right: 0;
  top: calc(100% + 0.5rem);
  width: 220px;
  max-height: 300px;
  overflow-y: auto;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.md)||"0 4px 6px rgba(0, 0, 0, 0.1)"}};
  z-index: 10;
`,Pg=a.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: ${e=>{var t,r;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0":"transparent"}};
  color: ${e=>{var t,r,o,i;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#0ea5e9":((i=(o=e.theme.colors)==null?void 0:o.text)==null?void 0:i.primary)||"#000"}};
  font-weight: ${e=>e.$isActive?"500":"normal"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  }
`,bM=a.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.lg)||"8px"}};
  overflow: hidden;
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.sm)||"0 1px 3px rgba(0, 0, 0, 0.1)"}};
`,eo=a.th`
  padding: 1rem;
  text-align: left;
  font-weight: 500;
  font-size: 0.875rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.secondary)||"#666"}};
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  border-bottom: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  position: relative;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  
  &:hover {
    color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  }
  
  span {
    display: inline-flex;
    align-items: center;
  }
`,bi=a.span`
  margin-left: 0.25rem;
  display: inline-flex;
  transform: ${e=>e.$direction==="desc"?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;
`,wM=a.tr`
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.hover)||"#f0f0f0"}};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  }
`,to=a.td`
  padding: 1rem;
  font-size: 0.875rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  vertical-align: middle;
`,$M=a.td`
  padding: 3rem 1rem;
  text-align: center;
`,jM=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#666"}};
  
  p {
    margin: 0;
  }
`,kM=a.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`,CM=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[50])||"#e0f2fe"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#0ea5e9"}};
  flex-shrink: 0;
  font-size: 1rem;
`,SM=a.div`
  display: flex;
  flex-direction: column;
`,PM=a.div`
  font-weight: 500;
  margin-bottom: 0.25rem;
`,TM=a.div`
  font-size: 0.75rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#666"}};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,AM=a.div`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[50])||"#e0f2fe"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[700])||"#0369a1"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
`,zM=a.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
`,MM=a.span`
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#666"}};
  font-size: 0.875rem;
  display: flex;
  align-items: center;
`,DM=a.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,EM=a.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  font-size: 0.875rem;
`,LM=a.div`
  font-size: 0.75rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#666"}};
`,RM=a.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${e=>{var t,r,o,i,s,l,c,d,u,h;switch(e.$status){case"draft":return((r=(t=e.theme.colors)==null?void 0:t.neutral)==null?void 0:r[100])||"#f1f5f9";case"published":return((i=(o=e.theme.colors)==null?void 0:o.primary)==null?void 0:i[50])||"#e0f2fe";case"grading":return((l=(s=e.theme.colors)==null?void 0:s.warning)==null?void 0:l[50])||"#fffbeb";case"completed":return((d=(c=e.theme.colors)==null?void 0:c.success)==null?void 0:d[50])||"#f0fdf4";default:return((h=(u=e.theme.colors)==null?void 0:u.neutral)==null?void 0:h[100])||"#f1f5f9"}}};
  color: ${e=>{var t,r,o,i,s,l,c,d,u,h;switch(e.$status){case"draft":return((r=(t=e.theme.colors)==null?void 0:t.neutral)==null?void 0:r[700])||"#334155";case"published":return((i=(o=e.theme.colors)==null?void 0:o.primary)==null?void 0:i[700])||"#0369a1";case"grading":return((l=(s=e.theme.colors)==null?void 0:s.warning)==null?void 0:l[700])||"#b45309";case"completed":return((d=(c=e.theme.colors)==null?void 0:c.success)==null?void 0:d[700])||"#15803d";default:return((h=(u=e.theme.colors)==null?void 0:u.neutral)==null?void 0:h[700])||"#334155"}}};
  
  svg {
    font-size: 0.875rem;
  }
`,IM=a.div`
  display: flex;
  gap: 0.5rem;
`,Sa=a.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  background-color: transparent;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.secondary)||"#666"}};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
    color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#0ea5e9"}};
  }
`,FM=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${e=>{var t;return((t=e.theme.zIndices)==null?void 0:t.modal)||1e3}};
`,BM=a.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`,NM=a.div`
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.lg)||"8px"}};
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.xl)||"0 10px 25px rgba(0, 0, 0, 0.1)"}};
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  z-index: 1;
  position: relative;
`,OM=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#eee"}};
`,VM=a.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
`,_M=a.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#888"}};
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  }
`,WM=a.div`
  padding: 1.5rem;
`,UM=a.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
`,ro=a.div`
  margin-bottom: 1.25rem;
  width: 100%;
`,Tg=a.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0;
  
  @media (max-width: ${e=>{var t;return((t=e.theme.breakpoints)==null?void 0:t.md)||"768px"}}) {
    flex-direction: column;
  }
`,no=a.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
`,Vd=a.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  border: 1px solid ${e=>{var t,r,o,i;return e.$hasError?((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[500])||"#ef4444":((i=(o=e.theme.colors)==null?void 0:o.border)==null?void 0:i.light)||"#ddd"}};
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: ${e=>{var t,r,o,i;return e.$hasError?((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[500])||"#ef4444":((i=(o=e.theme.colors)==null?void 0:o.primary)==null?void 0:i[300])||"#7dd3fc"}};
    box-shadow: 0 0 0 2px ${e=>{var t,r,o,i;return e.$hasError?((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[100])||"#fee2e2":((i=(o=e.theme.colors)==null?void 0:o.primary)==null?void 0:i[100])||"#e0f2fe"}};
  }
`,HM=a.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  border: 1px solid ${e=>{var t,r,o,i;return e.$hasError?((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[500])||"#ef4444":((i=(o=e.theme.colors)==null?void 0:o.border)==null?void 0:i.light)||"#ddd"}};
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  font-size: 0.875rem;
  resize: vertical;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: ${e=>{var t,r,o,i;return e.$hasError?((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[500])||"#ef4444":((i=(o=e.theme.colors)==null?void 0:o.primary)==null?void 0:i[300])||"#7dd3fc"}};
    box-shadow: 0 0 0 2px ${e=>{var t,r,o,i;return e.$hasError?((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[100])||"#fee2e2":((i=(o=e.theme.colors)==null?void 0:o.primary)==null?void 0:i[100])||"#e0f2fe"}};
  }
`,Ag=a.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  border: 1px solid ${e=>{var t,r,o,i;return e.$hasError?((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[500])||"#ef4444":((i=(o=e.theme.colors)==null?void 0:o.border)==null?void 0:i.light)||"#ddd"}};
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  font-size: 0.875rem;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
  
  &:focus {
    outline: none;
    border-color: ${e=>{var t,r,o,i;return e.$hasError?((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[500])||"#ef4444":((i=(o=e.theme.colors)==null?void 0:o.primary)==null?void 0:i[300])||"#7dd3fc"}};
    box-shadow: 0 0 0 2px ${e=>{var t,r,o,i;return e.$hasError?((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[100])||"#fee2e2":((i=(o=e.theme.colors)==null?void 0:o.primary)==null?void 0:i[100])||"#e0f2fe"}};
  }
`,wi=a.div`
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[500])||"#ef4444"}};
  font-size: 0.75rem;
  margin-top: 0.25rem;
`,GM=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#0ea5e9"}};
  color: #fff;
  border: none;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[600])||"#0284c7"}};
  }
`,YM=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  }
`,qM=()=>{var ge,He,Vt,Je,St,Ge;const[e,t]=j.useState(""),[r,o]=j.useState(null),[i,s]=j.useState(null),[l,c]=j.useState(!1),[d,u]=j.useState(!1),[h,m]=j.useState("all"),[p,b]=j.useState(!1),[v,$]=j.useState("name"),[k,y]=j.useState("asc"),[x,g]=j.useState(null),[f,S]=j.useState(""),C=[{id:1,name:"John Doe",email:"john.doe@school.edu",avatar:"https://randomuser.me/api/portraits/men/32.jpg"},{id:2,name:"Jane Smith",email:"jane.smith@school.edu",avatar:"https://randomuser.me/api/portraits/women/44.jpg"},{id:3,name:"Michael Johnson",email:"michael.j@school.edu",avatar:"https://randomuser.me/api/portraits/men/52.jpg"},{id:4,name:"Emily Davis",email:"emily.d@school.edu",avatar:"https://randomuser.me/api/portraits/women/67.jpg"},{id:5,name:"Robert Wilson",email:"robert.w@school.edu",avatar:"https://randomuser.me/api/portraits/men/22.jpg"},{id:6,name:"Sarah Brown",email:"sarah.b@school.edu",avatar:"https://randomuser.me/api/portraits/women/33.jpg"},{id:7,name:"James Miller",email:"james.m@school.edu",avatar:"https://randomuser.me/api/portraits/men/42.jpg"},{id:8,name:"Olivia Martinez",email:"olivia.m@school.edu",avatar:"https://randomuser.me/api/portraits/women/24.jpg"}],P=[{id:1,name:"Algebra Fundamentals",code:"MATH101",students:30},{id:2,name:"Geometry",code:"MATH102",students:25},{id:3,name:"Physics Principles",code:"PHYS101",students:28},{id:4,name:"Chemistry Fundamentals",code:"CHEM101",students:22}],w=[{id:1,title:"Algebraic Equations Quiz",dueDate:"2023-12-15",totalPoints:50,weight:10},{id:2,title:"Geometry Shapes Project",dueDate:"2023-12-20",totalPoints:100,weight:20},{id:3,title:"Midterm Exam Preparation",dueDate:"2023-12-18",totalPoints:25,weight:5},{id:4,title:"Physics Lab Report",dueDate:"2023-12-12",totalPoints:80,weight:15},{id:5,title:"Chemical Reactions Worksheet",dueDate:"2023-12-30",totalPoints:40,weight:8}],T=(()=>{const M=[];let xe=1;return P.forEach(oe=>{w.filter(ee=>oe.id===1&&[1,3].includes(ee.id)||oe.id===2&&[2].includes(ee.id)||oe.id===3&&[4].includes(ee.id)||oe.id===4&&[5].includes(ee.id)).forEach(ee=>{C.forEach(Pt=>{const ai=(()=>{const Lc=Math.random();return Lc<.6?"graded":Lc<.8?"pending":Lc<.95?"missing":"excused"})(),wp=ai==="graded"||ai==="pending",u$=ai==="graded"?Math.floor(Math.random()*(ee.totalPoints+1)):null;M.push({id:xe++,studentId:Pt.id,student:Pt,courseId:oe.id,course:oe,assignmentId:ee.id,assignment:ee,score:u$,submitted:wp,submittedAt:wp?"2023-12-10T15:30:00":void 0,feedback:ai==="graded"?"Good work overall. Pay attention to problem 3.":void 0,status:ai})})})}),M})(),G=[...T.filter(M=>{const xe=M.student.name.toLowerCase().includes(e.toLowerCase())||M.student.email.toLowerCase().includes(e.toLowerCase())||M.course.name.toLowerCase().includes(e.toLowerCase())||M.assignment.title.toLowerCase().includes(e.toLowerCase()),oe=!r||M.courseId===r,ee=!i||M.assignmentId===i,Pt=h==="all"||h==="graded"&&M.status==="graded"||h==="pending"&&M.status==="pending"||h==="missing"&&M.status==="missing"||h==="excused"&&M.status==="excused";return xe&&oe&&ee&&Pt})].sort((M,xe)=>{let oe="",ee="";switch(v){case"name":oe=M.student.name,ee=xe.student.name;break;case"course":oe=M.course.name,ee=xe.course.name;break;case"assignment":oe=M.assignment.title,ee=xe.assignment.title;break;case"score":oe=M.score,ee=xe.score;break;case"status":oe=M.status,ee=xe.status;break;default:oe=M.student.name,ee=xe.student.name}return typeof oe=="string"&&typeof ee=="string"?k==="asc"?oe.localeCompare(ee):ee.localeCompare(oe):oe===null&&ee===null?0:oe===null?k==="asc"?1:-1:ee===null?k==="asc"?-1:1:k==="asc"?oe-ee:ee-oe}),R=[...new Set(T.map(M=>M.courseId))].map(M=>P.find(xe=>xe.id===M)).filter(Boolean),D=[...new Set(T.filter(M=>!r||M.courseId===r).map(M=>M.assignmentId))].map(M=>w.find(xe=>xe.id===M)).filter(Boolean),W=M=>{t(M.target.value)},_=M=>{o(M),c(!1),s(null)},ve=M=>{s(M),u(!1)},I=M=>{m(M),b(!1)},z=M=>{v===M?y(k==="asc"?"desc":"asc"):($(M),y("asc"))},N=(M,xe)=>{g(M),S(xe===null?"":xe.toString())},F=M=>{g(null),S("")},V=()=>{g(null),S("")},ft=(M,xe)=>M===null?"N/A":`${Math.round(M/xe*100)}%`,Ne=M=>{switch(M){case"graded":return"Graded";case"pending":return"Pending";case"missing":return"Missing";case"excused":return"Excused";default:return"Unknown"}},it=()=>{if(!i)return"N/A";const M=T.filter(Pt=>Pt.assignmentId===i&&Pt.status==="graded");if(M.length===0)return"N/A";const oe=M.reduce((Pt,bp)=>Pt+(bp.score||0),0)/M.length,ee=w.find(Pt=>Pt.id===i);return ee?`${oe.toFixed(1)} / ${ee.totalPoints} (${Math.round(oe/ee.totalPoints*100)}%)`:"N/A"};return n.jsxs(KM,{as:E.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[n.jsxs(XM,{children:[n.jsxs("div",{children:[n.jsx(JM,{children:"Grades"}),n.jsx(ZM,{children:"Manage and review student grades for your courses"})]}),n.jsx(eD,{children:n.jsxs(tD,{children:[n.jsx(qn,{}),n.jsx("span",{children:"Export Grades"})]})})]}),n.jsxs(rD,{children:[n.jsxs(nD,{children:[n.jsxs(iD,{children:[n.jsx(sD,{children:n.jsx(Se,{})}),n.jsx(aD,{type:"text",placeholder:"Search students or assignments...",value:e,onChange:W})]}),n.jsxs(lD,{children:[n.jsxs(cD,{onClick:()=>b(!p),children:[n.jsx(Jt,{}),n.jsx("span",{children:"Filter"})]}),p&&n.jsxs(dD,{children:[n.jsx($i,{onClick:()=>I("all"),$isActive:h==="all",children:"All Grades"}),n.jsx($i,{onClick:()=>I("graded"),$isActive:h==="graded",children:"Graded"}),n.jsx($i,{onClick:()=>I("pending"),$isActive:h==="pending",children:"Pending"}),n.jsx($i,{onClick:()=>I("missing"),$isActive:h==="missing",children:"Missing"}),n.jsx($i,{onClick:()=>I("excused"),$isActive:h==="excused",children:"Excused"})]})]})]}),n.jsxs(oD,{children:[n.jsxs(uD,{children:[n.jsxs(qw,{onClick:()=>c(!l),children:[n.jsx(Ce,{}),n.jsx("span",{children:r?(ge=R.find(M=>M.id===r))==null?void 0:ge.name:"All Courses"}),n.jsx(ue,{style:{transform:l?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s ease"}})]}),l&&n.jsxs(Qw,{children:[n.jsx(Ih,{onClick:()=>_(null),$isActive:r===null,children:"All Courses"}),R.map(M=>n.jsxs(Ih,{onClick:()=>_(M.id),$isActive:r===M.id,children:[M.name," (",M.code,")"]},M.id))]})]}),n.jsxs(hD,{children:[n.jsxs(mD,{onClick:()=>u(!d),children:[n.jsx(Ft,{}),n.jsx("span",{children:i?(He=D.find(M=>M.id===i))==null?void 0:He.title:"All Assignments"}),n.jsx(ue,{style:{transform:d?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s ease"}})]}),d&&n.jsxs(pD,{children:[n.jsx(zg,{onClick:()=>ve(null),$isActive:i===null,children:"All Assignments"}),D.map(M=>n.jsxs(zg,{onClick:()=>ve(M.id),$isActive:i===M.id,children:[M.title," (",M.totalPoints," pts)"]},M.id))]})]})]})]}),i&&n.jsxs(fD,{children:[n.jsx(gD,{children:(Vt=D.find(M=>M.id===i))==null?void 0:Vt.title}),n.jsxs(xD,{children:[n.jsxs(Pa,{children:[n.jsx(Ta,{children:"Due Date:"}),n.jsx(Aa,{children:new Date(((Je=D.find(M=>M.id===i))==null?void 0:Je.dueDate)||"").toLocaleDateString()})]}),n.jsxs(Pa,{children:[n.jsx(Ta,{children:"Total Points:"}),n.jsx(Aa,{children:(St=D.find(M=>M.id===i))==null?void 0:St.totalPoints})]}),n.jsxs(Pa,{children:[n.jsx(Ta,{children:"Weight:"}),n.jsxs(Aa,{children:[(Ge=D.find(M=>M.id===i))==null?void 0:Ge.weight,"%"]})]}),n.jsxs(Pa,{children:[n.jsx(Ta,{children:"Class Average:"}),n.jsx(Aa,{children:it()})]})]})]}),n.jsxs(yD,{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsxs(cn,{onClick:()=>z("name"),children:[n.jsx("span",{children:"Student"}),v==="name"&&n.jsx(ji,{$direction:k,children:n.jsx(ue,{})})]}),n.jsxs(cn,{onClick:()=>z("course"),children:[n.jsx("span",{children:"Course"}),v==="course"&&n.jsx(ji,{$direction:k,children:n.jsx(ue,{})})]}),n.jsxs(cn,{onClick:()=>z("assignment"),children:[n.jsx("span",{children:"Assignment"}),v==="assignment"&&n.jsx(ji,{$direction:k,children:n.jsx(ue,{})})]}),n.jsxs(cn,{onClick:()=>z("score"),children:[n.jsx("span",{children:"Score"}),v==="score"&&n.jsx(ji,{$direction:k,children:n.jsx(ue,{})})]}),n.jsx(cn,{children:n.jsx("span",{children:"Percentage"})}),n.jsxs(cn,{onClick:()=>z("status"),children:[n.jsx("span",{children:"Status"}),v==="status"&&n.jsx(ji,{$direction:k,children:n.jsx(ue,{})})]}),n.jsx(cn,{children:n.jsx("span",{children:"Actions"})})]})}),n.jsx("tbody",{children:G.length===0?n.jsx("tr",{children:n.jsx(bD,{colSpan:7,children:n.jsxs(wD,{children:[n.jsx(Ae,{size:24}),n.jsx("p",{children:"No grades found matching your filters"})]})})}):G.map(M=>n.jsxs(vD,{children:[n.jsx(dn,{children:n.jsxs($D,{children:[n.jsx(jD,{src:M.student.avatar||"https://via.placeholder.com/40",alt:M.student.name}),n.jsxs(kD,{children:[n.jsx(CD,{children:M.student.name}),n.jsx(SD,{children:M.student.email})]})]})}),n.jsx(dn,{children:n.jsxs(PD,{children:[M.course.name,n.jsx(TD,{children:M.course.code})]})}),n.jsx(dn,{children:n.jsx(AD,{children:M.assignment.title})}),n.jsx(dn,{children:x===M.id?n.jsxs(RD,{children:[n.jsx(ID,{type:"number",value:f,onChange:xe=>S(xe.target.value),min:"0",max:M.assignment.totalPoints}),n.jsxs("span",{children:["/ ",M.assignment.totalPoints]}),n.jsxs(FD,{children:[n.jsx(Mg,{onClick:()=>F(M.id),children:n.jsx(fr,{})}),n.jsx(Mg,{onClick:V,children:n.jsx(zc,{})})]})]}):n.jsx(zD,{children:M.score!==null?`${M.score} / ${M.assignment.totalPoints}`:"Not graded"})}),n.jsx(dn,{children:n.jsx(MD,{$value:M.score,$total:M.assignment.totalPoints,children:ft(M.score,M.assignment.totalPoints)})}),n.jsx(dn,{children:n.jsxs(DD,{$status:M.status,children:[QM(M.status),n.jsx("span",{children:Ne(M.status)})]})}),n.jsx(dn,{children:n.jsx(ED,{children:M.status!=="excused"&&n.jsx(LD,{title:"Edit Grade",onClick:()=>N(M.id,M.score),disabled:x!==null&&x!==M.id,children:n.jsx(gr,{})})})})]},M.id))})]})]})},QM=e=>{switch(e){case"graded":return n.jsx(fr,{});case"pending":return n.jsx(Vn,{});case"missing":return n.jsx(zc,{});case"excused":return n.jsx($t,{});default:return n.jsx(Vn,{})}},KM=a.div`
  padding: 1rem 0;
`,XM=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`,JM=a.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
`,ZM=a.p`
  margin: 0.5rem 0 0;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.secondary)||"#666"}};
`,eD=a.div`
  display: flex;
  gap: 1rem;
`,tD=a.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f5f5f5"}};
  }
`,rD=a.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`,nD=a.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,oD=a.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,iD=a.div`
  position: relative;
  flex: 1;
  min-width: 200px;
`,sD=a.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#888"}};
`,aD=a.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  font-size: 0.875rem;
  
  &::placeholder {
    color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#888"}};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[300])||"#7dd3fc"}};
    box-shadow: 0 0 0 2px ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[100])||"#e0f2fe"}};
  }
`,lD=a.div`
  position: relative;
`,cD=a.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f5f5f5"}};
  }
`,dD=a.div`
  position: absolute;
  right: 0;
  top: calc(100% + 0.5rem);
  width: 220px;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.md)||"0 4px 6px rgba(0, 0, 0, 0.1)"}};
  z-index: 10;
  overflow: hidden;
`,$i=a.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: ${e=>{var t,r;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0":"transparent"}};
  color: ${e=>{var t,r,o,i;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#0ea5e9":((i=(o=e.theme.colors)==null?void 0:o.text)==null?void 0:i.primary)||"#000"}};
  font-weight: ${e=>e.$isActive?"500":"normal"};
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  }
`,uD=a.div`
  position: relative;
  flex: 1;
  min-width: 200px;
`,qw=a.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f5f5f5"}};
  }
  
  span {
    flex: 1;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Qw=a.div`
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 0.5rem);
  max-height: 300px;
  overflow-y: auto;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.md)||"4px"}};
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.md)||"0 4px 6px rgba(0, 0, 0, 0.1)"}};
  z-index: 10;
`,Ih=a.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: ${e=>{var t,r;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0":"transparent"}};
  color: ${e=>{var t,r,o,i;return e.$isActive?((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#0ea5e9":((i=(o=e.theme.colors)==null?void 0:o.text)==null?void 0:i.primary)||"#000"}};
  font-weight: ${e=>e.$isActive?"500":"normal"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  }
`,hD=a.div`
  position: relative;
  flex: 1;
  min-width: 200px;
`,mD=a(qw)``,pD=a(Qw)``,zg=a(Ih)``,fD=a.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.lg)||"8px"}};
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.sm)||"0 1px 3px rgba(0, 0, 0, 0.1)"}};
`,gD=a.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
`,xD=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`,Pa=a.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Ta=a.span`
  font-size: 0.75rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#666"}};
`,Aa=a.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
`,yD=a.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.primary)||"#fff"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.lg)||"8px"}};
  overflow: hidden;
  box-shadow: ${e=>{var t;return((t=e.theme.shadows)==null?void 0:t.sm)||"0 1px 3px rgba(0, 0, 0, 0.1)"}};
`,cn=a.th`
  padding: 1rem;
  text-align: left;
  font-weight: 500;
  font-size: 0.875rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.secondary)||"#666"}};
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
  border-bottom: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  position: relative;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  
  &:hover {
    color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  }
  
  span {
    display: inline-flex;
    align-items: center;
  }
`,ji=a.span`
  margin-left: 0.25rem;
  display: inline-flex;
  transform: ${e=>e.$direction==="desc"?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;
`,vD=a.tr`
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.hover)||"#f0f0f0"}};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.border)==null?void 0:r.light)||"#ddd"}};
  }
`,dn=a.td`
  padding: 1rem;
  font-size: 0.875rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.primary)||"#000"}};
  vertical-align: middle;
`,bD=a.td`
  padding: 3rem 1rem;
  text-align: center;
`,wD=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#666"}};
  
  p {
    margin: 0;
  }
`,$D=a.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,jD=a.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`,kD=a.div`
  display: flex;
  flex-direction: column;
`,CD=a.div`
  font-weight: 500;
`,SD=a.div`
  font-size: 0.75rem;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.tertiary)||"#666"}};
`,PD=a.div`
  display: inline-flex;
  flex-direction: column;
  padding: 0.25rem 0.5rem;
  background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[50])||"#e0f2fe"}};
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[700])||"#0369a1"}};
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  font-size: 0.75rem;
  font-weight: 500;
  max-width: 150px;
`,TD=a.span`
  font-size: 0.7rem;
  opacity: 0.8;
  margin-top: 0.1rem;
`,AD=a.div`
  font-size: 0.875rem;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,zD=a.div`
  font-weight: 500;
`,MD=a.div`
  font-weight: 500;
  color: ${e=>{var r,o,i,s,l,c,d,u;if(e.$value===null)return((o=(r=e.theme.colors)==null?void 0:r.text)==null?void 0:o.tertiary)||"#666";const t=e.$value/e.$total*100;return t>=90?((s=(i=e.theme.colors)==null?void 0:i.success)==null?void 0:s[600])||"#16a34a":t>=70?((c=(l=e.theme.colors)==null?void 0:l.warning)==null?void 0:c[500])||"#f59e0b":((u=(d=e.theme.colors)==null?void 0:d.danger)==null?void 0:u[500])||"#ef4444"}};
`,DD=a.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${e=>{var t,r,o,i,s,l,c,d,u,h;switch(e.$status){case"graded":return((r=(t=e.theme.colors)==null?void 0:t.success)==null?void 0:r[50])||"#f0fdf4";case"pending":return((i=(o=e.theme.colors)==null?void 0:o.warning)==null?void 0:i[50])||"#fffbeb";case"missing":return((l=(s=e.theme.colors)==null?void 0:s.danger)==null?void 0:l[50])||"#fef2f2";case"excused":return((d=(c=e.theme.colors)==null?void 0:c.neutral)==null?void 0:d[100])||"#f1f5f9";default:return((h=(u=e.theme.colors)==null?void 0:u.neutral)==null?void 0:h[100])||"#f1f5f9"}}};
  color: ${e=>{var t,r,o,i,s,l,c,d,u,h;switch(e.$status){case"graded":return((r=(t=e.theme.colors)==null?void 0:t.success)==null?void 0:r[700])||"#15803d";case"pending":return((i=(o=e.theme.colors)==null?void 0:o.warning)==null?void 0:i[700])||"#b45309";case"missing":return((l=(s=e.theme.colors)==null?void 0:s.danger)==null?void 0:l[700])||"#b91c1c";case"excused":return((d=(c=e.theme.colors)==null?void 0:c.neutral)==null?void 0:d[700])||"#334155";default:return((h=(u=e.theme.colors)==null?void 0:u.neutral)==null?void 0:h[700])||"#334155"}}};
  
  svg {
    font-size: 0.875rem;
  }
`,ED=a.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`,LD=a.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  background-color: transparent;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.secondary)||"#666"}};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
    color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[500])||"#0ea5e9"}};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,RD=a.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
`,ID=a.input`
  width: 50px;
  padding: 0.25rem 0.5rem;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  border: 1px solid ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[300])||"#7dd3fc"}};
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.primary)==null?void 0:r[100])||"#e0f2fe"}};
  }
`,FD=a.div`
  display: flex;
  gap: 0.25rem;
  margin-left: 0.5rem;
`,Mg=a.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${e=>{var t;return((t=e.theme.borderRadius)==null?void 0:t.sm)||"4px"}};
  background-color: transparent;
  color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.text)==null?void 0:r.secondary)||"#666"}};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  
  &:hover {
    background-color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.background)==null?void 0:r.tertiary)||"#f0f0f0"}};
    
    &:first-child {
      color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.success)==null?void 0:r[500])||"#22c55e"}};
    }
    
    &:last-child {
      color: ${e=>{var t,r;return((r=(t=e.theme.colors)==null?void 0:t.danger)==null?void 0:r[500])||"#ef4444"}};
    }
  }
`,BD=({isOpen:e,onClose:t,onSubmit:r,initialData:o,formTitle:i})=>{const[s,l]=j.useState({name:"",email:"",role:"Student",status:"active"}),[c,d]=j.useState(""),[u,h]=j.useState(""),[m,p]=j.useState({}),[b,v]=j.useState(!1);j.useEffect(()=>{o&&l({...o})},[o]);const $=f=>{const{name:S,value:C}=f.target;l(P=>({...P,[S]:C})),m[S]&&p(P=>{const w={...P};return delete w[S],w})},k=f=>{d(f.target.value),m.password&&p(S=>{const C={...S};return delete C.password,C})},y=f=>{h(f.target.value),m.confirmPassword&&p(S=>{const C={...S};return delete C.confirmPassword,C})},x=()=>{var S,C;const f={};return(S=s.name)!=null&&S.trim()||(f.name="Name is required"),(C=s.email)!=null&&C.trim()?/\S+@\S+\.\S+/.test(s.email)||(f.email="Email is invalid"):f.email="Email is required",s.role||(f.role="Role is required"),s.status||(f.status="Status is required"),o!=null&&o.id||(c?c.length<8&&(f.password="Password must be at least 8 characters"):f.password="Password is required",c!==u&&(f.confirmPassword="Passwords do not match")),p(f),Object.keys(f).length===0},g=f=>{if(f.preventDefault(),x()){v(!0);const S=o!=null&&o.id?s:{...s,password:c};r(S),o!=null&&o.id||(l({name:"",email:"",role:"Student",status:"active"}),d(""),h("")),v(!1)}};return e?n.jsx(ND,{as:E.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:n.jsxs(OD,{as:E.div,initial:{scale:.9,y:50,opacity:0},animate:{scale:1,y:0,opacity:1},exit:{scale:.9,y:50,opacity:0},transition:{type:"spring",damping:25},children:[n.jsxs(VD,{children:[n.jsx(_D,{children:i}),n.jsx(WD,{onClick:t,children:n.jsx(Nt,{})})]}),n.jsxs("form",{onSubmit:g,children:[n.jsxs(UD,{children:[n.jsxs(oo,{children:[n.jsxs(io,{htmlFor:"name",children:[n.jsx($t,{}),n.jsx("span",{children:"Full Name"})]}),n.jsx(za,{id:"name",name:"name",value:s.name||"",onChange:$,placeholder:"Enter full name",$hasError:!!m.name}),m.name&&n.jsx(so,{children:m.name})]}),n.jsxs(oo,{children:[n.jsxs(io,{htmlFor:"email",children:[n.jsx(Hl,{}),n.jsx("span",{children:"Email Address"})]}),n.jsx(za,{id:"email",name:"email",type:"email",value:s.email||"",onChange:$,placeholder:"Enter email address",$hasError:!!m.email}),m.email&&n.jsx(so,{children:m.email})]}),!(o!=null&&o.id)&&n.jsxs(n.Fragment,{children:[n.jsxs(oo,{children:[n.jsxs(io,{htmlFor:"password",children:[n.jsx(ei,{}),n.jsx("span",{children:"Password"})]}),n.jsx(za,{id:"password",name:"password",type:"password",value:c,onChange:k,placeholder:"Enter password",$hasError:!!m.password}),m.password&&n.jsx(so,{children:m.password})]}),n.jsxs(oo,{children:[n.jsxs(io,{htmlFor:"confirmPassword",children:[n.jsx(ei,{}),n.jsx("span",{children:"Confirm Password"})]}),n.jsx(za,{id:"confirmPassword",name:"confirmPassword",type:"password",value:u,onChange:y,placeholder:"Confirm password",$hasError:!!m.confirmPassword}),m.confirmPassword&&n.jsx(so,{children:m.confirmPassword})]})]}),n.jsxs(oo,{children:[n.jsxs(io,{htmlFor:"role",children:[n.jsx(ti,{}),n.jsx("span",{children:"Role"})]}),n.jsxs(Dg,{id:"role",name:"role",value:s.role||"",onChange:$,$hasError:!!m.role,children:[n.jsx("option",{value:"",children:"Select a role"}),n.jsx("option",{value:"Admin",children:"Admin"}),n.jsx("option",{value:"Teacher",children:"Teacher"}),n.jsx("option",{value:"Student",children:"Student"}),n.jsx("option",{value:"Parent",children:"Parent"})]}),m.role&&n.jsx(so,{children:m.role})]}),n.jsxs(oo,{children:[n.jsxs(io,{htmlFor:"status",children:[n.jsx(ze,{}),n.jsx("span",{children:"Status"})]}),n.jsxs(Dg,{id:"status",name:"status",value:s.status||"",onChange:$,$hasError:!!m.status,children:[n.jsx("option",{value:"active",children:"Active"}),n.jsx("option",{value:"inactive",children:"Inactive"})]}),m.status&&n.jsx(so,{children:m.status})]})]}),n.jsxs(HD,{children:[n.jsx(GD,{type:"button",onClick:t,children:"Cancel"}),n.jsx(YD,{type:"submit",disabled:b,children:b?"Saving...":o!=null&&o.id?"Update User":"Create User"})]})]})]})}):null},ND=a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: ${e=>e.theme.spacing[4]};
`,OD=a.div`
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  box-shadow: ${e=>e.theme.shadows.lg};
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  padding: ${e=>e.theme.spacing[6]};
`,VD=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${e=>e.theme.spacing[6]};
`,_D=a.h2`
  margin: 0;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1.5rem;
  font-weight: 600;
`,WD=a.button`
  background: none;
  border: none;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${e=>e.theme.borderRadius.full};
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
    color: ${e=>e.theme.colors.text.primary};
  }
`,UD=a.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${e=>e.theme.spacing[5]};
  margin-bottom: ${e=>e.theme.spacing[6]};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,oo=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[2]};
`,io=a.label`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
  font-weight: 500;
`,za=a.input`
  padding: ${e=>e.theme.spacing[3]};
  border: 1px solid ${e=>e.$hasError?e.theme.colors.accent.red:e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.95rem;
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  transition: all ${e=>e.theme.transition.fast};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.$hasError?e.theme.colors.accent.red:e.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${e=>e.$hasError?"rgba(220, 38, 38, 0.1)":e.theme.colors.primary[100]};
  }
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
`,Dg=a.select`
  padding: ${e=>e.theme.spacing[3]};
  border: 1px solid ${e=>e.$hasError?e.theme.colors.accent.red:e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.95rem;
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  transition: all ${e=>e.theme.transition.fast};
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
  padding-right: 40px;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.$hasError?e.theme.colors.accent.red:e.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${e=>e.$hasError?"rgba(220, 38, 38, 0.1)":e.theme.colors.primary[100]};
  }
`,so=a.div`
  color: ${e=>e.theme.colors.accent.red};
  font-size: 0.8rem;
  margin-top: ${e=>e.theme.spacing[1]};
`,HD=a.div`
  display: flex;
  justify-content: flex-end;
  gap: ${e=>e.theme.spacing[3]};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
  }
`,GD=a.button`
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[4]}`};
  background-color: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.primary};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    order: 2;
  }
`,YD=a.button`
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[4]}`};
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  border: 1px solid ${e=>e.theme.colors.primary[600]};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  min-width: 120px;
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[700]};
    border-color: ${e=>e.theme.colors.primary[700]};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    order: 1;
    margin-bottom: ${e=>e.theme.spacing[2]};
  }
`,qD=[{id:"1",name:"John Doe",email:"john.doe@example.com",role:"Admin",status:"active",lastLogin:"2023-06-12 09:30 AM",createdAt:"2023-01-15"},{id:"2",name:"Jane Smith",email:"jane.smith@example.com",role:"Teacher",status:"active",lastLogin:"2023-06-10 02:45 PM",createdAt:"2023-02-20"},{id:"3",name:"Robert Johnson",email:"robert.johnson@example.com",role:"Teacher",status:"inactive",lastLogin:"2023-05-28 11:20 AM",createdAt:"2023-03-05"},{id:"4",name:"Emily Davis",email:"emily.davis@example.com",role:"Student",status:"active",lastLogin:"2023-06-11 10:15 AM",createdAt:"2023-01-30"},{id:"5",name:"Michael Wilson",email:"michael.wilson@example.com",role:"Student",status:"inactive",lastLogin:"2023-06-01 04:10 PM",createdAt:"2023-02-10"},{id:"6",name:"Sarah Brown",email:"sarah.brown@example.com",role:"Parent",status:"active",lastLogin:"2023-06-09 12:30 PM",createdAt:"2023-04-15"},{id:"7",name:"David Miller",email:"david.miller@example.com",role:"Admin",status:"active",lastLogin:"2023-06-12 08:45 AM",createdAt:"2023-01-05"}],QD=()=>{const[e,t]=j.useState([]),[r,o]=j.useState(!1),[i,s]=j.useState(null),[l,c]=j.useState(""),[d,u]=j.useState(""),[h,m]=j.useState(""),[p,b]=j.useState(!1),v=qD.filter(T=>{const H=T.name.toLowerCase().includes(l.toLowerCase())||T.email.toLowerCase().includes(l.toLowerCase()),G=d?T.role===d:!0,R=h?T.status===h:!0;return H&&G&&R}),$=T=>{c(T.target.value)},k=T=>{u(T.target.value)},y=T=>{m(T.target.value)},x=T=>{e.includes(T)?t(e.filter(H=>H!==T)):t([...e,T])},g=()=>{e.length===v.length?t([]):t(v.map(T=>T.id))},f=()=>{b(!p)},S=()=>{s(null),o(!0)},C=T=>{s(T),o(!0)},P=T=>{console.log(`Delete user with ID: ${T}`)},w=T=>{console.log(i?"Updating user:":"Creating new user:",T),o(!1)},A=()=>{o(!1),s(null)};return n.jsxs(KD,{as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[n.jsxs(XD,{children:[n.jsxs("div",{children:[n.jsx(JD,{children:"User Management"}),n.jsx(ZD,{children:"Manage system users, roles and permissions"})]}),n.jsxs(eE,{onClick:S,children:[n.jsx(z6,{}),n.jsx("span",{children:"Add New User"})]})]}),n.jsxs(tE,{children:[n.jsxs(rE,{children:[n.jsxs(nE,{children:[n.jsx(oE,{children:n.jsx(Se,{})}),n.jsx(iE,{placeholder:"Search users...",value:l,onChange:$})]}),n.jsxs(sE,{children:[n.jsxs(aE,{children:[n.jsx(Jt,{}),n.jsx("span",{children:"Filters:"})]}),n.jsxs(Eg,{value:d,onChange:k,children:[n.jsx("option",{value:"",children:"All Roles"}),n.jsx("option",{value:"Admin",children:"Admin"}),n.jsx("option",{value:"Teacher",children:"Teacher"}),n.jsx("option",{value:"Student",children:"Student"}),n.jsx("option",{value:"Parent",children:"Parent"})]}),n.jsxs(Eg,{value:h,onChange:y,children:[n.jsx("option",{value:"",children:"All Status"}),n.jsx("option",{value:"active",children:"Active"}),n.jsx("option",{value:"inactive",children:"Inactive"})]})]})]}),n.jsxs(Lg,{children:[e.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs(lE,{children:[e.length," selected"]}),n.jsx(Rg,{onClick:f,children:n.jsx(Is,{})}),p&&n.jsxs(cE,{children:[n.jsxs(Ig,{children:[n.jsx(ks,{}),n.jsx("span",{children:"Edit Selected"})]}),n.jsxs(Ig,{children:[n.jsx(Bt,{}),n.jsx("span",{children:"Delete Selected"})]})]})]}),n.jsx(Rg,{title:"Export to CSV",children:n.jsx(qn,{})})]})]}),n.jsxs(dE,{children:[n.jsx(uE,{children:n.jsxs(hE,{children:[n.jsx(un,{width:"50px",children:n.jsx(Fg,{children:n.jsx(Bg,{type:"checkbox",checked:e.length===v.length&&v.length>0,onChange:g})})}),n.jsx(un,{width:"25%",children:"Name"}),n.jsx(un,{width:"25%",children:"Email"}),n.jsx(un,{width:"15%",children:"Role"}),n.jsx(un,{width:"15%",children:"Status"}),n.jsx(un,{width:"20%",children:"Last Login"}),n.jsx(un,{width:"100px",children:"Actions"})]})}),n.jsx(mE,{children:v.length>0?v.map(T=>n.jsxs(pE,{children:[n.jsx(hn,{children:n.jsx(Fg,{children:n.jsx(Bg,{type:"checkbox",checked:e.includes(T.id),onChange:()=>x(T.id)})})}),n.jsx(hn,{children:n.jsx(fE,{children:T.name})}),n.jsx(hn,{children:T.email}),n.jsx(hn,{children:n.jsx(gE,{$role:T.role.toLowerCase(),children:T.role})}),n.jsx(hn,{children:n.jsx(xE,{$status:T.status,children:T.status==="active"?"Active":"Inactive"})}),n.jsx(hn,{children:T.lastLogin}),n.jsx(hn,{children:n.jsxs(Lg,{children:[n.jsx(Ng,{onClick:()=>C(T),title:"Edit user",children:n.jsx(ks,{})}),n.jsx(Ng,{onClick:()=>P(T.id),title:"Delete user",children:n.jsx(Bt,{})})]})})]},T.id)):n.jsx(yE,{children:n.jsx(vE,{colSpan:7,children:n.jsx(bE,{children:"No users found matching your search criteria."})})})})]}),n.jsxs(wE,{children:[n.jsxs($E,{children:["Showing 1 to ",v.length," of ",v.length," entries"]}),n.jsxs(jE,{children:[n.jsx(Ma,{$isActive:!0,children:"1"}),n.jsx(Ma,{$isActive:!1,children:"2"}),n.jsx(Ma,{$isActive:!1,children:"3"}),n.jsx(kE,{children:"..."}),n.jsx(Ma,{$isActive:!1,children:"10"})]})]}),n.jsx(BD,{isOpen:r,onClose:A,onSubmit:w,initialData:i||void 0,formTitle:i?"Edit User":"Add New User"})]})},KD=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[6]};
`,XD=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${e=>e.theme.spacing[4]};
  }
`,JD=a.h1`
  margin: 0;
  margin-bottom: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1.8rem;
`,ZD=a.p`
  margin: 0;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 1rem;
`,eE=a.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[4]}`};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[700]};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`,tE=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${e=>e.theme.spacing[4]};
  }
`,rE=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[4]};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${e=>e.theme.spacing[3]};
    width: 100%;
  }
`,nE=a.div`
  position: relative;
  width: 300px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
  }
`,oE=a.div`
  position: absolute;
  left: ${e=>e.theme.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>e.theme.colors.text.tertiary};
`,iE=a.input`
  width: 100%;
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[2]} ${e.theme.spacing[2]} ${e.theme.spacing[8]}`};
  border: 1px solid ${e=>e.theme.colors.neutral[300]};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.9rem;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }
`,sE=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    flex-wrap: wrap;
  }
`,aE=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
`,Eg=a.select`
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
  border: 1px solid ${e=>e.theme.colors.neutral[300]};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.primary};
  background-color: ${e=>e.theme.colors.background.primary};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    width: 100%;
  }
`,Lg=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  position: relative;
`,lE=a.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
`,Rg=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.secondary};
  border: 1px solid ${e=>e.theme.colors.neutral[300]};
  border-radius: ${e=>e.theme.borderRadius.md};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
    color: ${e=>e.theme.colors.primary[600]};
  }
`,cE=a.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: ${e=>e.theme.spacing[1]};
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.neutral[300]};
  border-radius: ${e=>e.theme.borderRadius.md};
  box-shadow: ${e=>e.theme.shadows.md};
  z-index: 10;
  min-width: 200px;
`,Ig=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  padding: ${e=>e.theme.spacing[3]};
  color: ${e=>e.theme.colors.text.primary};
  cursor: pointer;
  transition: background-color ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>e.theme.colors.border};
  }
`,dE=a.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${e=>e.theme.shadows.sm};
`,uE=a.thead`
  background-color: ${e=>e.theme.colors.background.tertiary};
`,hE=a.tr``,un=a.th`
  padding: ${e=>e.theme.spacing[4]};
  font-size: 0.9rem;
  font-weight: 600;
  text-align: left;
  color: ${e=>e.theme.colors.text.secondary};
  white-space: nowrap;
  width: ${e=>e.width||"auto"};
`,mE=a.tbody``,pE=a.tr`
  transition: background-color ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>e.theme.colors.border};
  }
`,hn=a.td`
  padding: ${e=>e.theme.spacing[4]};
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.primary};
`,fE=a.div`
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,gE=a.div`
  display: inline-block;
  padding: ${e=>`${e.theme.spacing[1]} ${e.theme.spacing[2]}`};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.8rem;
  font-weight: 500;
  background-color: ${e=>{switch(e.$role){case"admin":return"rgba(79, 70, 229, 0.1)";case"teacher":return"rgba(16, 185, 129, 0.1)";case"student":return"rgba(245, 158, 11, 0.1)";case"parent":return"rgba(139, 92, 246, 0.1)";default:return"rgba(79, 70, 229, 0.1)"}}};
  color: ${e=>{switch(e.$role){case"admin":return"rgb(79, 70, 229)";case"teacher":return"rgb(16, 185, 129)";case"student":return"rgb(245, 158, 11)";case"parent":return"rgb(139, 92, 246)";default:return"rgb(79, 70, 229)"}}};
`,xE=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
  font-size: 0.9rem;
  color: ${e=>e.$status==="active"?e.theme.colors.accent.green:e.theme.colors.text.tertiary};
`,Fg=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Bg=a.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`,Ng=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: transparent;
  color: ${e=>e.theme.colors.text.secondary};
  border: none;
  border-radius: ${e=>e.theme.borderRadius.sm};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
    color: ${e=>e.theme.colors.primary[600]};
  }
`,yE=a.tr``,vE=a.td`
  padding: ${e=>e.theme.spacing[6]};
  text-align: center;
  color: ${e=>e.theme.colors.text.tertiary};
  font-style: italic;
`,bE=a.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.tertiary};
`,wE=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>e.theme.spacing[4]} 0;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${e=>e.theme.spacing[3]};
  }
`,$E=a.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
`,jE=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
`,Ma=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 ${e=>e.theme.spacing[2]};
  background-color: ${e=>e.$isActive?e.theme.colors.primary[500]:"transparent"};
  color: ${e=>e.$isActive?"white":e.theme.colors.text.primary};
  border: 1px solid ${e=>e.$isActive?"transparent":e.theme.colors.neutral[300]};
  border-radius: 4px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.background.hover};
    border-color: ${e=>e.$isActive?"transparent":e.theme.colors.neutral[300]};
  }

  &:focus {
    outline: none;
  }
`,kE=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
`,CE=[{id:"1",name:"Mathematics",code:"MATH101",department:"Science",credits:4,description:"Introduction to calculus and algebra",status:"active",createdAt:"2023-01-15"},{id:"2",name:"Physics",code:"PHYS101",department:"Science",credits:4,description:"Basic principles of physics",status:"active",createdAt:"2023-01-20"},{id:"3",name:"English Literature",code:"ENG201",department:"Humanities",credits:3,description:"Study of classic literature and composition",status:"active",createdAt:"2023-02-05"},{id:"4",name:"World History",code:"HIST101",department:"Humanities",credits:3,description:"Survey of major historical events",status:"active",createdAt:"2023-01-30"},{id:"5",name:"Computer Science",code:"CS101",department:"Technology",credits:4,description:"Introduction to programming and algorithms",status:"active",createdAt:"2023-02-10"},{id:"6",name:"Biology",code:"BIO101",department:"Science",credits:4,description:"Study of living organisms",status:"active",createdAt:"2023-02-15"},{id:"7",name:"Chemistry",code:"CHEM101",department:"Science",credits:4,description:"Fundamentals of chemical principles",status:"inactive",createdAt:"2023-01-05"}],SE=()=>{const[e,t]=j.useState(""),[r,o]=j.useState(""),[i,s]=j.useState(""),[l,c]=j.useState([]),[d,u]=j.useState(!1),[h,m]=j.useState(!1),[p,b]=j.useState(null),v=CE.filter(w=>{const A=w.name.toLowerCase().includes(e.toLowerCase())||w.code.toLowerCase().includes(e.toLowerCase())||w.description.toLowerCase().includes(e.toLowerCase()),T=r?w.department===r:!0,H=i?w.status===i:!0;return A&&T&&H}),$=w=>{t(w.target.value)},k=w=>{o(w.target.value)},y=w=>{s(w.target.value)},x=w=>{l.includes(w)?c(l.filter(A=>A!==w)):c([...l,w])},g=()=>{l.length===v.length?c([]):c(v.map(w=>w.id))},f=()=>{u(!d)},S=()=>{b(null),m(!0)},C=w=>{b(w),m(!0)},P=w=>{console.log(`Delete subject with ID: ${w}`)};return n.jsxs(PE,{as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[n.jsxs(TE,{children:[n.jsxs("div",{children:[n.jsx(AE,{children:"Subject Management"}),n.jsx(zE,{children:"Manage courses, subjects and academic content"})]}),n.jsxs(ME,{onClick:S,children:[n.jsx(Ce,{}),n.jsx("span",{children:"Add New Subject"})]})]}),n.jsxs(DE,{children:[n.jsxs(EE,{children:[n.jsxs(LE,{children:[n.jsx(RE,{children:n.jsx(Se,{})}),n.jsx(IE,{placeholder:"Search subjects...",value:e,onChange:$})]}),n.jsxs(FE,{children:[n.jsxs(BE,{children:[n.jsx(Jt,{}),n.jsx("span",{children:"Filters:"})]}),n.jsxs(Og,{value:r,onChange:k,children:[n.jsx("option",{value:"",children:"All Departments"}),n.jsx("option",{value:"Science",children:"Science"}),n.jsx("option",{value:"Humanities",children:"Humanities"}),n.jsx("option",{value:"Technology",children:"Technology"}),n.jsx("option",{value:"Arts",children:"Arts"}),n.jsx("option",{value:"Business",children:"Business"})]}),n.jsxs(Og,{value:i,onChange:y,children:[n.jsx("option",{value:"",children:"All Status"}),n.jsx("option",{value:"active",children:"Active"}),n.jsx("option",{value:"inactive",children:"Inactive"})]})]})]}),n.jsxs(Vg,{children:[l.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs(NE,{children:[l.length," selected"]}),n.jsx(_g,{onClick:f,children:n.jsx(Is,{})}),d&&n.jsxs(OE,{children:[n.jsxs(Wg,{children:[n.jsx(ks,{}),n.jsx("span",{children:"Edit Selected"})]}),n.jsxs(Wg,{children:[n.jsx(Bt,{}),n.jsx("span",{children:"Delete Selected"})]})]})]}),n.jsx(_g,{title:"Export to CSV",children:n.jsx(qn,{})})]})]}),n.jsxs(VE,{children:[n.jsx(_E,{children:n.jsxs(WE,{children:[n.jsx(Cr,{width:"50px",children:n.jsx(Ug,{children:n.jsx(Hg,{type:"checkbox",checked:l.length===v.length&&v.length>0,onChange:g})})}),n.jsx(Cr,{width:"20%",children:"Subject Name"}),n.jsx(Cr,{width:"10%",children:"Code"}),n.jsx(Cr,{width:"15%",children:"Department"}),n.jsx(Cr,{width:"10%",children:"Credits"}),n.jsx(Cr,{width:"25%",children:"Description"}),n.jsx(Cr,{width:"10%",children:"Status"}),n.jsx(Cr,{width:"100px",children:"Actions"})]})}),n.jsx(UE,{children:v.length>0?v.map(w=>n.jsxs(HE,{children:[n.jsx(Sr,{children:n.jsx(Ug,{children:n.jsx(Hg,{type:"checkbox",checked:l.includes(w.id),onChange:()=>x(w.id)})})}),n.jsx(Sr,{children:n.jsx(GE,{children:w.name})}),n.jsx(Sr,{children:w.code}),n.jsx(Sr,{children:n.jsx(YE,{$department:w.department.toLowerCase(),children:w.department})}),n.jsx(Sr,{children:w.credits}),n.jsx(Sr,{children:n.jsx(qE,{children:w.description})}),n.jsx(Sr,{children:n.jsx(QE,{$status:w.status,children:w.status==="active"?"Active":"Inactive"})}),n.jsx(Sr,{children:n.jsxs(Vg,{children:[n.jsx(Gg,{onClick:()=>C(w),title:"Edit subject",children:n.jsx(ks,{})}),n.jsx(Gg,{onClick:()=>P(w.id),title:"Delete subject",children:n.jsx(Bt,{})})]})})]},w.id)):n.jsx(KE,{children:n.jsx(XE,{colSpan:8,children:n.jsx(JE,{children:"No subjects found matching your search criteria."})})})})]}),n.jsxs(ZE,{children:[n.jsxs(eL,{children:["Showing 1 to ",v.length," of ",v.length," entries"]}),n.jsxs(tL,{children:[n.jsx(Da,{$isActive:!0,children:"1"}),n.jsx(Da,{$isActive:!1,children:"2"}),n.jsx(Da,{$isActive:!1,children:"3"}),n.jsx(rL,{children:"..."}),n.jsx(Da,{$isActive:!1,children:"10"})]})]})]})},PE=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[6]};
`,TE=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${e=>e.theme.spacing[4]};
  }
`,AE=a.h1`
  margin: 0;
  margin-bottom: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1.8rem;
`,zE=a.p`
  margin: 0;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 1rem;
`,ME=a.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[4]}`};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[700]};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`,DE=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${e=>e.theme.spacing[4]};
  }
`,EE=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[4]};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${e=>e.theme.spacing[3]};
    width: 100%;
  }
`,LE=a.div`
  position: relative;
  width: 300px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
  }
`,RE=a.div`
  position: absolute;
  left: ${e=>e.theme.spacing[3]};
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>e.theme.colors.text.tertiary};
`,IE=a.input`
  width: 100%;
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[2]} ${e.theme.spacing[2]} ${e.theme.spacing[8]}`};
  border: 1px solid ${e=>e.theme.colors.neutral[300]};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.9rem;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }
`,FE=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    flex-wrap: wrap;
  }
`,BE=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
`,Og=a.select`
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
  border: 1px solid ${e=>e.theme.colors.neutral[300]};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.9rem;
  min-width: 150px;
  appearance: auto;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-grow: 1;
  }
`,Vg=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  position: relative;
`,NE=a.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
`,_g=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.secondary};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
    color: ${e=>e.theme.colors.primary[600]};
  }
`,OE=a.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: ${e=>e.theme.spacing[1]};
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.md};
  box-shadow: ${e=>e.theme.shadows.md};
  z-index: 10;
  min-width: 200px;
`,Wg=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  padding: ${e=>e.theme.spacing[3]};
  color: ${e=>e.theme.colors.text.primary};
  cursor: pointer;
  transition: background-color ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>e.theme.colors.border};
  }
`,VE=a.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${e=>e.theme.shadows.sm};
`,_E=a.thead`
  background-color: ${e=>e.theme.colors.background.tertiary};
`,WE=a.tr``,Cr=a.th`
  padding: ${e=>e.theme.spacing[4]};
  font-size: 0.9rem;
  font-weight: 600;
  text-align: left;
  color: ${e=>e.theme.colors.text.secondary};
  white-space: nowrap;
  width: ${e=>e.width||"auto"};
`,UE=a.tbody``,HE=a.tr`
  transition: background-color ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
  }
  
  &:not(:last-child) {
    border-bottom: 1px solid ${e=>e.theme.colors.border};
  }
`,Sr=a.td`
  padding: ${e=>e.theme.spacing[4]};
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.primary};
`,GE=a.div`
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,YE=a.div`
  display: inline-block;
  padding: ${e=>`${e.theme.spacing[1]} ${e.theme.spacing[2]}`};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.8rem;
  font-weight: 500;
  background-color: ${e=>{switch(e.$department){case"science":return"rgba(16, 185, 129, 0.1)";case"humanities":return"rgba(79, 70, 229, 0.1)";case"technology":return"rgba(245, 158, 11, 0.1)";case"arts":return"rgba(236, 72, 153, 0.1)";case"business":return"rgba(59, 130, 246, 0.1)";default:return"rgba(107, 114, 128, 0.1)"}}};
  color: ${e=>{switch(e.$department){case"science":return"rgb(16, 185, 129)";case"humanities":return"rgb(79, 70, 229)";case"technology":return"rgb(245, 158, 11)";case"arts":return"rgb(236, 72, 153)";case"business":return"rgb(59, 130, 246)";default:return"rgb(107, 114, 128)"}}};
`,qE=a.div`
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,QE=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
  font-size: 0.9rem;
  color: ${e=>e.$status==="active"?e.theme.colors.accent.green:e.theme.colors.text.tertiary};
`,Ug=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Hg=a.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`,Gg=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: transparent;
  color: ${e=>e.theme.colors.text.secondary};
  border: none;
  border-radius: ${e=>e.theme.borderRadius.sm};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.tertiary};
    color: ${e=>e.theme.colors.primary[600]};
  }
`,KE=a.tr``,XE=a.td`
  padding: ${e=>e.theme.spacing[6]};
  text-align: center;
  color: ${e=>e.theme.colors.text.tertiary};
  font-style: italic;
`,JE=a.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.tertiary};
`,ZE=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>e.theme.spacing[4]} 0;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${e=>e.theme.spacing[3]};
  }
`,eL=a.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
`,tL=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
`,Da=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 ${e=>e.theme.spacing[2]};
  background-color: ${e=>e.$isActive?e.theme.colors.primary[500]:"transparent"};
  color: ${e=>e.$isActive?"white":e.theme.colors.text.primary};
  border: 1px solid ${e=>e.$isActive?"transparent":e.theme.colors.neutral[300]};
  border-radius: 4px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.background.hover};
    border-color: ${e=>e.$isActive?"transparent":e.theme.colors.neutral[400]};
  }

  &:focus {
    outline: none;
  }
`,rL=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
`,Yg=[{id:"1",name:"Advanced Mathematics",subject:"Mathematics",teacher:"John Smith",schedule:"Mon, Wed, Fri",time:"09:00 - 10:30",room:"A101",students:28,status:"active",color:"#4F46E5"},{id:"2",name:"Physics Fundamentals",subject:"Physics",teacher:"Emily Davis",schedule:"Tue, Thu",time:"11:00 - 12:30",room:"B202",students:24,status:"active",color:"#10B981"},{id:"3",name:"World Literature",subject:"English",teacher:"Sarah Wilson",schedule:"Mon, Wed",time:"13:00 - 14:30",room:"C303",students:22,status:"active",color:"#F59E0B"},{id:"4",name:"Ancient History",subject:"History",teacher:"Michael Brown",schedule:"Tue, Thu",time:"09:00 - 10:30",room:"D404",students:26,status:"active",color:"#EC4899"},{id:"5",name:"Programming 101",subject:"Computer Science",teacher:"Robert Johnson",schedule:"Wed, Fri",time:"15:00 - 16:30",room:"Lab 101",students:20,status:"active",color:"#8B5CF6"},{id:"6",name:"Biology Lab",subject:"Biology",teacher:"Jennifer Lee",schedule:"Mon, Thu",time:"14:00 - 15:30",room:"Lab 202",students:18,status:"inactive",color:"#06B6D4"},{id:"7",name:"Chemistry 101",subject:"Chemistry",teacher:"David Miller",schedule:"Tue, Fri",time:"10:00 - 11:30",room:"Lab 303",students:22,status:"active",color:"#F97316"},{id:"8",name:"Economics Basics",subject:"Economics",teacher:"Sophia Chen",schedule:"Mon, Wed",time:"11:00 - 12:30",room:"E505",students:30,status:"active",color:"#0EA5E9"}],nL=()=>{const[e,t]=j.useState(""),[r,o]=j.useState(""),[i,s]=j.useState(""),[l,c]=j.useState("grid"),[d,u]=j.useState(null),[h,m]=j.useState(null),p=Yg.filter(f=>{const S=f.name.toLowerCase().includes(e.toLowerCase())||f.teacher.toLowerCase().includes(e.toLowerCase())||f.subject.toLowerCase().includes(e.toLowerCase()),C=r?f.subject===r:!0,P=i?f.status===i:!0;return S&&C&&P}),b=Array.from(new Set(Yg.map(f=>f.subject))),v=f=>{t(f.target.value)},$=f=>{o(f.target.value)},k=f=>{s(f.target.value)},y=f=>{m(h===f?null:f)},x=f=>{u(f),console.log("Edit class:",f)},g=f=>{console.log(`Delete class with ID: ${f}`)};return ce.useEffect(()=>{const f=()=>{m(null)};return document.addEventListener("click",f),()=>{document.removeEventListener("click",f)}},[]),n.jsxs(oL,{as:E.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.4},children:[n.jsxs(iL,{children:[n.jsxs("div",{children:[n.jsx(sL,{children:"Class Management"}),n.jsx(aL,{children:"Organize and manage your academic classes"})]}),n.jsxs(lL,{as:E.button,whileHover:{scale:1.03},whileTap:{scale:.97},children:[n.jsx(Qt,{}),n.jsx("span",{children:"Create New Class"})]})]}),n.jsxs(cL,{children:[n.jsxs(dL,{children:[n.jsxs(uL,{children:[n.jsx(hL,{children:n.jsx(Se,{})}),n.jsx(mL,{placeholder:"Search for classes...",value:e,onChange:v})]}),n.jsxs(pL,{children:[n.jsxs(qg,{value:r,onChange:$,children:[n.jsx("option",{value:"",children:"All Subjects"}),b.map(f=>n.jsx("option",{value:f,children:f},f))]}),n.jsxs(qg,{value:i,onChange:k,children:[n.jsx("option",{value:"",children:"All Status"}),n.jsx("option",{value:"active",children:"Active"}),n.jsx("option",{value:"inactive",children:"Inactive"})]})]})]}),n.jsxs(fL,{children:[n.jsx(Qg,{$isActive:l==="grid",onClick:()=>c("grid"),"aria-label":"Grid view",children:n.jsx(y6,{})}),n.jsx(Qg,{$isActive:l==="list",onClick:()=>c("list"),"aria-label":"List view",children:n.jsx(w6,{})})]})]}),l==="grid"?n.jsx(gL,{children:n.jsx(ne,{children:p.map(f=>n.jsxs(xL,{as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,scale:.95},whileHover:{y:-5,boxShadow:"0 10px 20px rgba(0,0,0,0.1)"},transition:{duration:.2},$color:f.color,children:[n.jsxs(yL,{$color:f.color,children:[n.jsx(vL,{children:f.name}),n.jsxs(bL,{onClick:S=>{S.stopPropagation(),y(f.id)},children:[n.jsx(j6,{}),h===f.id&&n.jsxs(wL,{as:E.div,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},onClick:S=>S.stopPropagation(),children:[n.jsxs(Kg,{onClick:()=>x(f),children:[n.jsx(gr,{}),n.jsx("span",{children:"Edit"})]}),n.jsxs(Kg,{onClick:()=>g(f.id),children:[n.jsx(Bt,{}),n.jsx("span",{children:"Delete"})]})]})]})]}),n.jsxs($L,{children:[n.jsxs(Ea,{children:[n.jsx(Ce,{}),n.jsx("span",{children:f.subject})]}),n.jsxs(Ea,{children:[n.jsx(Ae,{}),n.jsx("span",{children:f.teacher})]}),n.jsxs(Ea,{children:[n.jsx(ze,{}),n.jsx("span",{children:f.schedule})]}),n.jsxs(Ea,{children:[n.jsx(Fe,{}),n.jsx("span",{children:f.time})]})]}),n.jsxs(jL,{children:[n.jsx(Xg,{$status:f.status,children:f.status==="active"?"Active":"Inactive"}),n.jsxs(Jg,{children:[n.jsx(Ae,{}),n.jsxs("span",{children:[f.students," students"]})]})]})]},f.id))})}):n.jsxs(kL,{children:[n.jsxs(CL,{children:[n.jsx(mn,{width:"25%",children:"Class Name"}),n.jsx(mn,{width:"15%",children:"Subject"}),n.jsx(mn,{width:"20%",children:"Teacher"}),n.jsx(mn,{width:"15%",children:"Schedule"}),n.jsx(mn,{width:"10%",children:"Students"}),n.jsx(mn,{width:"10%",children:"Status"}),n.jsx(mn,{width:"5%",children:"Actions"})]}),n.jsx(SL,{children:n.jsx(ne,{children:p.map(f=>n.jsxs(PL,{as:E.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},whileHover:{backgroundColor:"rgba(0,0,0,0.02)"},children:[n.jsx(pn,{children:n.jsxs(TL,{$color:f.color,children:[n.jsx("div",{className:"color-indicator"}),n.jsx("span",{children:f.name})]})}),n.jsx(pn,{children:f.subject}),n.jsx(pn,{children:f.teacher}),n.jsx(pn,{children:n.jsxs(AL,{children:[n.jsx("div",{children:f.schedule}),n.jsx("div",{className:"time",children:f.time})]})}),n.jsx(pn,{children:n.jsxs(Jg,{children:[n.jsx(Ae,{}),n.jsx("span",{children:f.students})]})}),n.jsx(pn,{children:n.jsx(Xg,{$status:f.status,children:f.status==="active"?"Active":"Inactive"})}),n.jsx(pn,{children:n.jsxs(zL,{children:[n.jsx(Zg,{onClick:()=>x(f),children:n.jsx(gr,{})}),n.jsx(Zg,{onClick:()=>g(f.id),children:n.jsx(Bt,{})})]})})]},f.id))})})]}),p.length===0&&n.jsx(ML,{as:E.div,initial:{opacity:0},animate:{opacity:1},children:n.jsx(DL,{children:"No classes found matching your search criteria."})})]})},oL=a.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,iL=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`,sL=a.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0;
`,aL=a.p`
  font-size: 16px;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 4px 0 0 0;
`,lL=a.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, ${e=>e.theme.colors.primary[600]}, ${e=>e.theme.colors.primary[700]});
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  svg {
    font-size: 18px;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`,cL=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
`,dL=a.div`
  display: flex;
  gap: 16px;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
`,uL=a.div`
  position: relative;
  min-width: 300px;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    min-width: unset;
    width: 100%;
  }
`,hL=a.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>e.theme.colors.text.tertiary};
  font-size: 18px;
`,mL=a.input`
  width: 100%;
  padding: 12px 16px 12px 44px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.neutral[300]};
  background-color: ${e=>e.theme.colors.background.primary};
  font-size: 15px;
  color: ${e=>e.theme.colors.text.primary};
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${e=>e.theme.colors.primary[100]};
  }
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
`,pL=a.div`
  display: flex;
  gap: 12px;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`,qg=a.select`
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.neutral[300]};
  background-color: ${e=>e.theme.colors.background.primary};
  font-size: 15px;
  color: ${e=>e.theme.colors.text.primary};
  min-width: 150px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  appearance: auto;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${e=>e.theme.colors.primary[100]};
  }
`,fL=a.div`
  display: flex;
  gap: 8px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    align-self: flex-end;
  }
`,Qg=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${e=>e.$isActive?e.theme.colors.primary[500]:e.theme.colors.neutral[300]};
  background-color: ${e=>e.$isActive?e.theme.colors.primary[50]:e.theme.colors.background.primary};
  color: ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.text.secondary};
  cursor: pointer;
  
  &:hover {
    background-color: ${e=>e.$isActive?e.theme.colors.primary[100]:e.theme.colors.background.secondary};
  }
  
  svg {
    font-size: 20px;
  }
`,gL=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,xL=a.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${e=>e.theme.colors.background.primary};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  border: 1px solid ${e=>e.theme.colors.border};
  cursor: pointer;
`,yL=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: ${e=>e.$color||e.theme.colors.primary[600]};
  color: white;
  position: relative;
`,vL=a.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,bL=a.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  svg {
    font-size: 20px;
  }
`,wL=a.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
  width: 150px;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  margin-top: 8px;
`,Kg=a.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 14px;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.secondary};
  }
  
  svg {
    font-size: 16px;
    color: ${e=>e.theme.colors.text.secondary};
  }
`,$L=a.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 20px;
  flex-grow: 1;
`,Ea=a.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 14px;
  
  svg {
    color: ${e=>e.theme.colors.text.secondary};
    font-size: 16px;
  }
`,jL=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-top: 1px solid ${e=>e.theme.colors.border};
`,Xg=a.div`
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${e=>e.$status==="active"?"rgba(16, 185, 129, 0.1)":"rgba(107, 114, 128, 0.1)"};
  color: ${e=>e.$status==="active"?"rgb(16, 185, 129)":"rgb(107, 114, 128)"};
`,Jg=a.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  
  svg {
    font-size: 16px;
  }
`,kL=a.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
`,CL=a.div`
  display: flex;
  padding: 16px 20px;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    display: none;
  }
`,mn=a.div`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.secondary};
  width: ${e=>e.width||"auto"};
`,SL=a.div`
  display: flex;
  flex-direction: column;
`,PL=a.div`
  display: flex;
  padding: 16px 20px;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-wrap: wrap;
    gap: 12px;
  }
`,pn=a.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: ${e=>e.theme.colors.text.primary};
  
  &:nth-child(1) { width: 25%; }
  &:nth-child(2) { width: 15%; }
  &:nth-child(3) { width: 20%; }
  &:nth-child(4) { width: 15%; }
  &:nth-child(5) { width: 10%; }
  &:nth-child(6) { width: 10%; }
  &:nth-child(7) { width: 5%; }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    &:nth-child(1) { width: 100%; }
    &:nth-child(2) { width: 50%; }
    &:nth-child(3) { width: 50%; }
    &:nth-child(4) { width: 50%; }
    &:nth-child(5) { width: 50%; }
    &:nth-child(6) { width: 50%; }
    &:nth-child(7) { width: 50%; justify-content: flex-end; }
  }
`,TL=a.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  
  .color-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${e=>e.$color};
  }
`,AL=a.div`
  display: flex;
  flex-direction: column;
  
  .time {
    font-size: 13px;
    color: ${e=>e.theme.colors.text.tertiary};
    margin-top: 2px;
  }
`,zL=a.div`
  display: flex;
  gap: 8px;
`,Zg=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  border: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.secondary};
    color: ${e=>e.theme.colors.primary[600]};
  }
`,ML=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 24px;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 12px;
  border: 1px dashed ${e=>e.theme.colors.border};
`,DL=a.p`
  font-size: 16px;
  color: ${e=>e.theme.colors.text.tertiary};
`,ex=["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"],EL=["Monday","Tuesday","Wednesday","Thursday","Friday"],tx=[{id:"1",day:"Monday",startTime:"09:00",endTime:"10:30",classId:"101",className:"Mathematics",teacher:"John Smith",room:"A101",color:"#4F46E5"},{id:"2",day:"Monday",startTime:"11:00",endTime:"12:30",classId:"102",className:"Physics",teacher:"Emily Davis",room:"B202",color:"#10B981"},{id:"3",day:"Tuesday",startTime:"09:00",endTime:"10:30",classId:"103",className:"English",teacher:"Sarah Wilson",room:"C303",color:"#F59E0B"},{id:"4",day:"Tuesday",startTime:"13:00",endTime:"14:30",classId:"104",className:"History",teacher:"Michael Brown",room:"D404",color:"#EC4899"},{id:"5",day:"Wednesday",startTime:"10:00",endTime:"11:30",classId:"105",className:"Computer Science",teacher:"Robert Johnson",room:"Lab 1",color:"#8B5CF6"},{id:"6",day:"Wednesday",startTime:"14:00",endTime:"15:30",classId:"106",className:"Biology",teacher:"Jennifer Lee",room:"Lab 2",color:"#06B6D4"},{id:"7",day:"Thursday",startTime:"11:00",endTime:"12:30",classId:"107",className:"Chemistry",teacher:"David Miller",room:"Lab 3",color:"#F97316"},{id:"8",day:"Friday",startTime:"09:00",endTime:"10:30",classId:"108",className:"Art",teacher:"Sophia Chen",room:"Art Studio",color:"#0EA5E9"},{id:"9",day:"Friday",startTime:"13:00",endTime:"16:00",classId:"109",className:"Physical Education",teacher:"James Wilson",room:"Gym",color:"#14B8A6"}],LL=e=>e.reduce((t,r)=>{const o=r.day;return t[o]||(t[o]=[]),t[o].push(r),t},{}),RL=()=>{const[e,t]=j.useState("May 20 - May 24, 2023"),[r,o]=j.useState(null),[i,s]=j.useState(""),[l,c]=j.useState(""),[d,u]=j.useState(!1),h=tx.filter(f=>{const S=f.className.toLowerCase().includes(i.toLowerCase())||f.teacher.toLowerCase().includes(i.toLowerCase())||f.room.toLowerCase().includes(i.toLowerCase()),C=l?f.teacher===l:!0;return S&&C}),m=LL(h),p=()=>{t("May 13 - May 17, 2023")},b=()=>{t("May 27 - May 31, 2023")},v=f=>{s(f.target.value)},$=f=>{c(f.target.value)},k=Array.from(new Set(tx.map(f=>f.teacher))),y=f=>{o(f)},x=(f,S)=>{const C=parseInt(f.split(":")[0]),P=parseInt(f.split(":")[1]),w=parseInt(S.split(":")[0]),A=parseInt(S.split(":")[1]),T=60,H=(C-8)*T+P/60*T,R=(w-C+(A-P)/60)*T;return{top:H,height:R}},g=()=>{u(!0)};return n.jsxs(IL,{as:E.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[n.jsxs(FL,{children:[n.jsxs("div",{children:[n.jsx(BL,{children:"Timetable Management"}),n.jsx(NL,{children:"Organize and schedule classes across the week"})]}),n.jsxs(OL,{onClick:g,children:[n.jsx(Qt,{}),n.jsx("span",{children:"Add Class"})]})]}),n.jsxs(VL,{children:[n.jsxs(_L,{children:[n.jsx(rx,{onClick:p,children:n.jsx(Kt,{})}),n.jsx(WL,{children:e}),n.jsx(rx,{onClick:b,children:n.jsx(Rt,{})})]}),n.jsxs(UL,{children:[n.jsxs(HL,{children:[n.jsx(GL,{children:n.jsx(Se,{})}),n.jsx(YL,{placeholder:"Search classes...",value:i,onChange:v})]}),n.jsxs(qL,{value:l,onChange:$,children:[n.jsx("option",{value:"",children:"All Teachers"}),k.map(f=>n.jsx("option",{value:f,children:f},f))]})]})]}),n.jsxs(QL,{children:[n.jsxs(KL,{children:[n.jsx(nx,{children:"Time"}),ex.map((f,S)=>n.jsx(JL,{children:f},f))]}),EL.map(f=>{var S;return n.jsxs(XL,{children:[n.jsx(nx,{children:f}),n.jsxs(ZL,{children:[ex.map((C,P)=>n.jsx(e7,{},C)),(S=m[f])==null?void 0:S.map(C=>{const{top:P,height:w}=x(C.startTime,C.endTime);return n.jsxs(Kw,{$top:P,$height:w,$color:C.color,onClick:()=>y(C),as:E.div,whileHover:{scale:1.02},whileTap:{scale:.98},children:[n.jsx(t7,{children:C.className}),n.jsxs(_d,{children:[n.jsx($t,{}),n.jsx("span",{children:C.teacher})]}),n.jsxs(_d,{children:[n.jsx(En,{}),n.jsx("span",{children:C.room})]}),n.jsxs(_d,{children:[n.jsx(Fe,{}),n.jsxs("span",{children:[C.startTime," - ",C.endTime]})]}),n.jsxs(r7,{children:[n.jsx(ox,{children:n.jsx(gr,{})}),n.jsx(ox,{children:n.jsx(Bt,{})})]})]},C.id)})]})]},f)})]}),Object.keys(m).length===0&&n.jsxs(n7,{children:[n.jsx(o7,{children:n.jsx(ze,{})}),n.jsx(i7,{children:"No classes scheduled for this week."}),n.jsxs(s7,{onClick:g,children:[n.jsx(Qt,{}),n.jsx("span",{children:"Add Class"})]})]})]})},IL=a.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,FL=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`,BL=a.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0;
`,NL=a.p`
  font-size: 16px;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 4px 0 0 0;
`,OL=a.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[700]};
    transform: translateY(-2px);
  }
  
  svg {
    font-size: 18px;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`,VL=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    flex-direction: column;
    gap: 16px;
  }
`,_L=a.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,rx=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid ${e=>e.theme.colors.neutral[300]};
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.secondary};
    color: ${e=>e.theme.colors.primary[600]};
  }
  
  svg {
    font-size: 20px;
  }
`,WL=a.div`
  font-size: 18px;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,UL=a.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    flex-direction: column;
  }
`,HL=a.div`
  position: relative;
  width: 250px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
  }
`,GL=a.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>e.theme.colors.text.tertiary};
`,YL=a.input`
  width: 100%;
  padding: 10px 10px 10px 36px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.neutral[300]};
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }
`,qL=a.select`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.neutral[300]};
  font-size: 14px;
  min-width: 150px;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
  }
`,QL=a.div`
  display: grid;
  grid-template-columns: 80px repeat(5, 1fr);
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    overflow-x: auto;
    min-width: 100%;
  }
`,KL=a.div`
  background-color: ${e=>e.theme.colors.background.tertiary};
`,XL=a.div`
  border-left: 1px solid ${e=>e.theme.colors.border};
  min-width: 180px;
`,nx=a.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.colors.background.tertiary};
  color: ${e=>e.theme.colors.text.primary};
  font-weight: 600;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,JL=a.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,ZL=a.div`
  position: relative;
  min-height: 660px; /* 11 time slots * 60px */
`,e7=a.div`
  position: relative;
  height: 60px;
  border-bottom: 1px dashed ${e=>e.theme.colors.border};
`,Kw=a.div`
  position: absolute;
  top: ${e=>e.$top}px;
  left: 4px;
  right: 4px;
  height: ${e=>e.$height}px;
  background-color: ${e=>`${e.$color}20`}; /* 20% opacity */
  border-left: 4px solid ${e=>e.$color};
  border-radius: 6px;
  padding: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 4px;
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`,t7=a.div`
  font-weight: 600;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,_d=a.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  svg {
    flex-shrink: 0;
    font-size: 12px;
  }
`,r7=a.div`
  position: absolute;
  top: 6px;
  right: 6px;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.2s ease;
  
  ${Kw}:hover & {
    opacity: 1;
  }
`,ox=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: white;
  border: none;
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  
  &:hover {
    color: ${e=>e.theme.colors.primary[600]};
    background-color: ${e=>e.theme.colors.background.tertiary};
  }
`,n7=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  text-align: center;
`,o7=a.div`
  font-size: 48px;
  color: ${e=>e.theme.colors.text.tertiary};
  margin-bottom: 16px;
`,i7=a.p`
  font-size: 16px;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 24px;
`,s7=a.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[700]};
  }
  
  svg {
    font-size: 18px;
  }
`,a7=({isOpen:e,onClose:t,onSubmit:r,initialData:o,formTitle:i})=>{const[s,l]=j.useState({name:"",description:""}),[c,d]=j.useState({name:"",description:""});j.useEffect(()=>{l(o?{name:o.name,description:o.description}:{name:"",description:""}),d({name:"",description:""})},[o,e]);const u=p=>{const{name:b,value:v}=p.target;l($=>({...$,[b]:v})),c[b]&&d($=>({...$,[b]:""}))},h=()=>{let p=!0;const b={...c};return s.name.trim()||(b.name="Role name is required",p=!1),s.description.trim()||(b.description="Description is required",p=!1),d(b),p},m=p=>{p.preventDefault(),h()&&(r({name:s.name,description:s.description}),l({name:"",description:""}))};return e?n.jsx(l7,{as:E.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:n.jsxs(c7,{as:E.div,initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},children:[n.jsxs(d7,{children:[n.jsx(u7,{children:i}),n.jsx(h7,{onClick:t,children:n.jsx(Nt,{})})]}),n.jsxs("form",{onSubmit:m,children:[n.jsxs(m7,{children:[n.jsxs(ix,{children:[n.jsx(sx,{htmlFor:"name",children:"Role Name"}),n.jsx(p7,{type:"text",id:"name",name:"name",value:s.name,onChange:u,$hasError:!!c.name,placeholder:"e.g., Teacher Admin, Content Manager"}),c.name&&n.jsx(ax,{children:c.name})]}),n.jsxs(ix,{children:[n.jsx(sx,{htmlFor:"description",children:"Description"}),n.jsx(f7,{id:"description",name:"description",value:s.description,onChange:u,$hasError:!!c.description,placeholder:"Briefly describe what this role can do",rows:4}),c.description&&n.jsx(ax,{children:c.description})]}),n.jsxs(g7,{children:[n.jsx(_n,{}),n.jsx(x7,{children:"After creating the role, you can assign specific permissions."})]})]}),n.jsxs(y7,{children:[n.jsx(v7,{type:"button",onClick:t,children:"Cancel"}),n.jsx(b7,{type:"submit",children:o?"Update Role":"Create Role"})]})]})]})}):null},l7=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,c7=a.div`
  background-color: white;
  border-radius: ${e=>e.theme.borderRadius.lg};
  width: 90%;
  max-width: 500px;
  overflow: hidden;
  box-shadow: ${e=>e.theme.shadows.xl};
`,d7=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>e.theme.spacing[4]};
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,u7=a.h2`
  margin: 0;
  font-size: 1.5rem;
  color: ${e=>e.theme.colors.text.primary};
`,h7=a.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${e=>e.theme.colors.text.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.theme.spacing[1]};
  border-radius: ${e=>e.theme.borderRadius.full};
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.lighter};
    color: ${e=>e.theme.colors.text.primary};
  }
`,m7=a.div`
  padding: ${e=>e.theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[4]};
`,ix=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[1]};
`,sx=a.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,p7=a.input`
  padding: ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[3]};
  border: 1px solid ${e=>e.$hasError?e.theme.colors.danger[500]:e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.9rem;
  background-color: ${e=>e.$hasError?e.theme.colors.danger[50]:"white"};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.$hasError?e.theme.colors.danger[500]:e.theme.colors.primary[400]};
    box-shadow: 0 0 0 3px ${e=>e.$hasError?"rgba(244, 63, 94, 0.1)":"rgba(59, 130, 246, 0.1)"};
  }
`,f7=a.textarea`
  padding: ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[3]};
  border: 1px solid ${e=>e.$hasError?e.theme.colors.danger[500]:e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.9rem;
  resize: vertical;
  font-family: inherit;
  background-color: ${e=>e.$hasError?e.theme.colors.danger[50]:"white"};
  
  &:focus {
    outline: none;
    border-color: ${e=>e.$hasError?e.theme.colors.danger[500]:e.theme.colors.primary[400]};
    box-shadow: 0 0 0 3px ${e=>e.$hasError?"rgba(244, 63, 94, 0.1)":"rgba(59, 130, 246, 0.1)"};
  }
`,ax=a.div`
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.danger[500]};
  margin-top: ${e=>e.theme.spacing[1]};
`,g7=a.div`
  display: flex;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing[2]};
  padding: ${e=>e.theme.spacing[3]};
  background-color: ${e=>e.theme.colors.primary[50]};
  border-radius: ${e=>e.theme.borderRadius.md};
  border-left: 4px solid ${e=>e.theme.colors.primary[500]};
  
  svg {
    color: ${e=>e.theme.colors.primary[500]};
    margin-top: 2px;
  }
`,x7=a.p`
  margin: 0;
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.primary[700]};
`,y7=a.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  padding: ${e=>e.theme.spacing[4]};
  border-top: 1px solid ${e=>e.theme.colors.border.light};
`,v7=a.button`
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[4]}`};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: white;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.lighter};
    color: ${e=>e.theme.colors.text.primary};
  }
`,b7=a.button`
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[4]}`};
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[700]};
  }
`,w7=({isOpen:e,onClose:t,role:r,allPermissions:o,onSave:i})=>{const[s,l]=j.useState([]),[c,d]=j.useState(""),[u,h]=j.useState(""),m=Array.from(new Set(o.map(g=>g.name.split(":")[0])));j.useEffect(()=>{r&&r.permissions&&l(r.permissions.map(g=>g.id))},[r]);const b=o.filter(g=>{const f=g.name.toLowerCase().includes(c.toLowerCase())||g.description.toLowerCase().includes(c.toLowerCase()),S=u?g.name.startsWith(u+":"):!0;return f&&S}).reduce((g,f)=>{const S=f.name.split(":")[0];return g[S]||(g[S]=[]),g[S].push(f),g},{}),v=g=>{d(g.target.value)},$=g=>{h(g.target.value)},k=g=>{s.includes(g)?l(s.filter(f=>f!==g)):l([...s,g])},y=g=>{const f=o.filter(C=>C.name.startsWith(g+":")).map(C=>C.id);if(f.every(C=>s.includes(C)))l(s.filter(C=>!f.includes(C)));else{const C=[...s];f.forEach(P=>{C.includes(P)||C.push(P)}),l(C)}},x=()=>{i(r.id,s),t()};return e?n.jsx($7,{as:E.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:n.jsxs(j7,{as:E.div,initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},children:[n.jsxs(k7,{children:[n.jsxs("div",{children:[n.jsx(C7,{children:"Manage Permissions"}),n.jsxs(S7,{children:["Role: ",r.name]})]}),n.jsx(P7,{onClick:t,children:n.jsx(Nt,{})})]}),n.jsxs(T7,{children:[n.jsxs(A7,{children:[n.jsx(z7,{children:n.jsx(Se,{})}),n.jsx(M7,{placeholder:"Search permissions...",value:c,onChange:v})]}),n.jsxs(D7,{children:[n.jsxs(E7,{children:[n.jsx(Jt,{}),n.jsx("span",{children:"Category:"})]}),n.jsxs(L7,{value:u,onChange:$,children:[n.jsx("option",{value:"",children:"All Categories"}),m.map(g=>n.jsx("option",{value:g,children:g},g))]})]})]}),n.jsxs(R7,{children:[n.jsx(I7,{children:n.jsxs(F7,{children:[s.length," of ",o.length," permissions selected"]})}),Object.entries(b).length>0?Object.entries(b).map(([g,f])=>n.jsxs(B7,{children:[n.jsxs(N7,{children:[n.jsxs(O7,{children:[n.jsx(ti,{})," ",g]}),n.jsx(V7,{onClick:()=>y(g),children:f.every(S=>s.includes(S.id))?"Deselect All":"Select All"})]}),n.jsx(_7,{children:f.map(S=>n.jsxs(W7,{children:[n.jsx(U7,{children:n.jsx(H7,{type:"checkbox",checked:s.includes(S.id),onChange:()=>k(S.id)})}),n.jsxs(G7,{children:[n.jsx(Y7,{children:S.name}),n.jsx(q7,{children:S.description})]})]},S.id))})]},g)):n.jsxs(Q7,{children:[n.jsx(Vn,{}),n.jsx(K7,{children:"No permissions found matching your search criteria."})]})]}),n.jsxs(X7,{children:[n.jsx(J7,{onClick:t,children:"Cancel"}),n.jsxs(Z7,{onClick:x,children:[n.jsx(Wl,{}),n.jsx("span",{children:"Save Permissions"})]})]})]})}):null},$7=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,j7=a.div`
  background-color: white;
  border-radius: ${e=>e.theme.borderRadius.lg};
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: ${e=>e.theme.shadows.xl};
`,k7=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${e=>e.theme.spacing[4]};
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,C7=a.h2`
  margin: 0;
  font-size: 1.5rem;
  color: ${e=>e.theme.colors.text.primary};
`,S7=a.p`
  margin: ${e=>e.theme.spacing[1]} 0 0 0;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
`,P7=a.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${e=>e.theme.colors.text.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.theme.spacing[1]};
  border-radius: ${e=>e.theme.borderRadius.full};
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.lighter};
    color: ${e=>e.theme.colors.text.primary};
  }
`,T7=a.div`
  padding: ${e=>e.theme.spacing[4]};
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  display: flex;
  gap: ${e=>e.theme.spacing[4]};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${e=>e.theme.spacing[3]};
  }
`,A7=a.div`
  position: relative;
  width: 300px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
  }
`,z7=a.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>e.theme.colors.text.secondary};
`,M7=a.input`
  width: 100%;
  padding: ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[8]};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[400]};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`,D7=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
`,E7=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
`,L7=a.select`
  padding: ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[3]};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: white;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[400]};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`,R7=a.div`
  flex: 1;
  overflow-y: auto;
  padding: ${e=>e.theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[4]};
`,I7=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${e=>e.theme.spacing[2]};
  border-bottom: 1px solid ${e=>e.theme.colors.border.lighter};
`,F7=a.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
`,B7=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[3]};
`,N7=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,O7=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1rem;
  
  svg {
    color: ${e=>e.theme.colors.primary[500]};
  }
`,V7=a.button`
  background: none;
  border: none;
  font-size: 0.8rem;
  color: ${e=>e.theme.colors.primary[600]};
  cursor: pointer;
  padding: ${e=>e.theme.spacing[1]} ${e=>e.theme.spacing[2]};
  border-radius: ${e=>e.theme.borderRadius.sm};
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[50]};
  }
`,_7=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[2]};
  padding-left: ${e=>e.theme.spacing[1]};
`,W7=a.div`
  display: flex;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing[3]};
  padding: ${e=>e.theme.spacing[2]};
  border-radius: ${e=>e.theme.borderRadius.md};
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.lighter};
  }
`,U7=a.div`
  padding-top: 2px;
`,H7=a.input`
  cursor: pointer;
`,G7=a.div`
  flex: 1;
`,Y7=a.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: ${e=>e.theme.spacing[1]};
`,q7=a.div`
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.text.secondary};
`,Q7=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.theme.spacing[3]};
  padding: ${e=>e.theme.spacing[8]} 0;
  color: ${e=>e.theme.colors.text.secondary};
  
  svg {
    font-size: 2rem;
  }
`,K7=a.div`
  font-size: 0.9rem;
`,X7=a.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  padding: ${e=>e.theme.spacing[4]};
  border-top: 1px solid ${e=>e.theme.colors.border.light};
`,J7=a.button`
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[4]}`};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: white;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.lighter};
    color: ${e=>e.theme.colors.text.primary};
  }
`,Z7=a.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[4]}`};
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[700]};
  }
`,fo=[{id:"1",name:"users:read",description:"View users"},{id:"2",name:"users:write",description:"Create and edit users"},{id:"3",name:"users:delete",description:"Delete users"},{id:"4",name:"roles:read",description:"View roles"},{id:"5",name:"roles:write",description:"Create and edit roles"},{id:"6",name:"roles:delete",description:"Delete roles"},{id:"7",name:"subjects:read",description:"View subjects"},{id:"8",name:"subjects:write",description:"Create and edit subjects"},{id:"9",name:"subjects:delete",description:"Delete subjects"},{id:"10",name:"classes:read",description:"View classes"},{id:"11",name:"classes:write",description:"Create and edit classes"},{id:"12",name:"classes:delete",description:"Delete classes"},{id:"13",name:"timetables:read",description:"View timetables"},{id:"14",name:"timetables:write",description:"Create and edit timetables"},{id:"15",name:"timetables:delete",description:"Delete timetables"}],eR=[{id:"1",name:"Super Admin",description:"Full system access",permissions:fo,usersCount:2,createdAt:"2023-01-15"},{id:"2",name:"School Admin",description:"School-specific administration",permissions:fo.filter(e=>!e.name.includes("delete")&&!e.name.includes("roles")),usersCount:5,createdAt:"2023-02-10"},{id:"3",name:"Teacher",description:"Teaching and content management",permissions:fo.filter(e=>e.name.includes("subjects:read")||e.name.includes("classes:read")||e.name.includes("timetables:read")),usersCount:25,createdAt:"2023-01-20"},{id:"4",name:"Student",description:"Learning and content consumption",permissions:fo.filter(e=>e.name.includes(":read")&&!e.name.includes("users:read")&&!e.name.includes("roles:read")),usersCount:150,createdAt:"2023-01-25"},{id:"5",name:"Parent",description:"Student monitoring and communication",permissions:fo.filter(e=>e.name.includes(":read")&&!e.name.includes("users:read")&&!e.name.includes("roles:read")),usersCount:120,createdAt:"2023-02-15"}],tR=()=>{const[e,t]=j.useState(""),[r,o]=j.useState([]),[i,s]=j.useState(!1),[l,c]=j.useState(null),[d,u]=j.useState(!1),[h,m]=j.useState(!1),[p,b]=j.useState(eR),[v]=j.useState(fo),$=p.filter(R=>R.name.toLowerCase().includes(e.toLowerCase())||R.description.toLowerCase().includes(e.toLowerCase())),k=R=>{t(R.target.value)},y=R=>{r.includes(R)?o(r.filter(D=>D!==R)):o([...r,R])},x=()=>{r.length===$.length?o([]):o($.map(R=>R.id))},g=()=>{m(!h)},f=()=>{c(null),s(!0)},S=R=>{c(R),s(!0)},C=R=>{b(p.filter(D=>D.id!==R)),o(r.filter(D=>D!==R)),console.log(`Delete role with ID: ${R}`)},P=R=>{c(R),u(!0)},w=R=>{if(l)b(p.map(D=>D.id===l.id?{...D,name:R.name,description:R.description}:D)),console.log("Updating role:",{id:l.id,...R});else{const D={id:Date.now().toString(),name:R.name,description:R.description,permissions:[],usersCount:0,createdAt:new Date().toISOString().split("T")[0]};b([...p,D]),console.log("Creating new role:",D)}s(!1)},A=(R,D)=>{b(p.map(W=>W.id===R?{...W,permissions:v.filter(_=>D.includes(_.id))}:W)),console.log(`Updated permissions for role ${R}:`,D)},T=()=>{s(!1),c(null)},H=()=>{u(!1),c(null)},G=()=>{b(p.filter(R=>!r.includes(R.id))),o([]),m(!1),console.log("Bulk deleting roles:",r)};return n.jsxs(rR,{as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[n.jsxs(nR,{children:[n.jsxs("div",{children:[n.jsx(oR,{children:"Role Management"}),n.jsx(iR,{children:"Manage roles and their associated permissions"})]}),n.jsxs(sR,{onClick:f,children:[n.jsx(ti,{}),n.jsx("span",{children:"Add New Role"})]})]}),n.jsxs(aR,{children:[n.jsx(lR,{children:n.jsxs(cR,{children:[n.jsx(dR,{children:n.jsx(Se,{})}),n.jsx(uR,{placeholder:"Search roles...",value:e,onChange:k})]})}),n.jsxs(lx,{children:[r.length>0&&n.jsxs(n.Fragment,{children:[n.jsxs(hR,{children:[r.length," selected"]}),n.jsx(cx,{onClick:g,children:n.jsx(Is,{})}),h&&n.jsx(mR,{children:n.jsxs(pR,{onClick:G,children:[n.jsx(Bt,{}),n.jsx("span",{children:"Delete Selected"})]})})]}),n.jsx(cx,{title:"Export to CSV",children:n.jsx(qn,{})})]})]}),n.jsxs(fR,{children:[n.jsx(gR,{children:n.jsxs(xR,{children:[n.jsx(ao,{width:"50px",children:n.jsx(dx,{children:n.jsx(ux,{type:"checkbox",checked:r.length===$.length&&$.length>0,onChange:x})})}),n.jsx(ao,{width:"20%",children:"Role Name"}),n.jsx(ao,{width:"30%",children:"Description"}),n.jsx(ao,{width:"20%",children:"Permissions"}),n.jsx(ao,{width:"10%",children:"Users"}),n.jsx(ao,{width:"150px",children:"Actions"})]})}),n.jsx(yR,{children:$.length>0?$.map(R=>n.jsxs(vR,{children:[n.jsx(lo,{children:n.jsx(dx,{children:n.jsx(ux,{type:"checkbox",checked:r.includes(R.id),onChange:()=>y(R.id)})})}),n.jsx(lo,{children:n.jsx(jR,{children:R.name})}),n.jsx(lo,{children:R.description}),n.jsx(lo,{children:n.jsxs(kR,{children:[n.jsxs(CR,{children:[R.permissions.length," permissions"]}),n.jsx(SR,{onClick:()=>P(R),children:"View/Edit"})]})}),n.jsx(lo,{children:n.jsxs(PR,{children:[R.usersCount," users"]})}),n.jsx(lo,{children:n.jsxs(lx,{children:[n.jsx(Wd,{onClick:()=>S(R),title:"Edit role",children:n.jsx(ks,{})}),n.jsx(Wd,{onClick:()=>C(R.id),title:"Delete role",children:n.jsx(Bt,{})}),n.jsx(Wd,{onClick:()=>P(R),title:"Manage permissions",children:n.jsx(ei,{})})]})})]},R.id)):n.jsx(bR,{children:n.jsx(wR,{colSpan:6,children:n.jsx($R,{children:"No roles found matching your search criteria."})})})})]}),n.jsxs(TR,{children:[n.jsxs(AR,{children:["Showing 1 to ",$.length," of ",$.length," entries"]}),n.jsx(zR,{children:n.jsx(MR,{$isActive:!0,children:"1"})})]}),n.jsx(a7,{isOpen:i,onClose:T,onSubmit:w,initialData:l||void 0,formTitle:l?"Edit Role":"Add New Role"}),l&&n.jsx(w7,{isOpen:d,onClose:H,role:l,allPermissions:v,onSave:A})]})},rR=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[6]};
`,nR=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${e=>e.theme.spacing[4]};
  }
`,oR=a.h1`
  margin: 0;
  margin-bottom: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1.8rem;
`,iR=a.p`
  margin: 0;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 1rem;
`,sR=a.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[4]}`};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[700]};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`,aR=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${e=>e.theme.spacing[4]};
  }
`,lR=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[4]};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${e=>e.theme.spacing[3]};
    width: 100%;
  }
`,cR=a.div`
  position: relative;
  width: 300px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
  }
`,dR=a.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>e.theme.colors.text.secondary};
`,uR=a.input`
  width: 100%;
  padding: ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[8]};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[400]};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`,lx=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  position: relative;
`,hR=a.div`
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-right: ${e=>e.theme.spacing[2]};
`,cx=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.colors.background.light};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing[2]};
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.lighter};
    color: ${e=>e.theme.colors.text.primary};
  }
`,mR=a.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: ${e=>e.theme.spacing[1]};
  background-color: white;
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  box-shadow: ${e=>e.theme.shadows.md};
  z-index: 10;
  min-width: 160px;
`,pR=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.lighter};
    color: ${e=>e.theme.colors.text.primary};
  }
`,fR=a.div`
  width: 100%;
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  overflow: hidden;
`,gR=a.div`
  background-color: ${e=>e.theme.colors.background.lighter};
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,xR=a.div`
  display: flex;
  align-items: center;
  padding: ${e=>`${e.theme.spacing[3]} ${e.theme.spacing[4]}`};
`,ao=a.div`
  flex: ${e=>e.width?"none":"1"};
  width: ${e=>e.width||"auto"};
  font-weight: 600;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
`,yR=a.div``,vR=a.div`
  display: flex;
  align-items: center;
  padding: ${e=>`${e.theme.spacing[3]} ${e.theme.spacing[4]}`};
  border-bottom: 1px solid ${e=>e.theme.colors.border.lighter};
  transition: all ${e=>e.theme.transition.fast};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
`,lo=a.div`
  flex: ${e=>e.width?"none":"1"};
  width: ${e=>e.width||"auto"};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.9rem;
`,bR=a.div`
  padding: ${e=>`${e.theme.spacing[6]} ${e.theme.spacing[4]}`};
`,wR=a.div`
  text-align: center;
`,$R=a.div`
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.9rem;
`,dx=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,ux=a.input`
  cursor: pointer;
`,jR=a.div`
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,kR=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
`,CR=a.div`
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.text.secondary};
`,SR=a.button`
  font-size: 0.8rem;
  padding: ${e=>`${e.theme.spacing[1]} ${e.theme.spacing[2]}`};
  background-color: ${e=>e.theme.colors.primary[50]};
  color: ${e=>e.theme.colors.primary[600]};
  border: none;
  border-radius: ${e=>e.theme.borderRadius.sm};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[100]};
  }
`,PR=a.div`
  font-size: 0.85rem;
`,Wd=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: ${e=>e.theme.borderRadius.full};
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.lighter};
    color: ${e=>e.theme.colors.primary[600]};
  }
`,TR=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${e=>e.theme.spacing[3]};
  }
`,AR=a.div`
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.text.secondary};
`,zR=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[1]};
`,MR=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 ${e=>e.theme.spacing[2]};
  background-color: ${e=>e.$isActive?e.theme.colors.primary[500]:"transparent"};
  color: ${e=>e.$isActive?"white":e.theme.colors.text.primary};
  border: 1px solid ${e=>e.$isActive?"transparent":e.theme.colors.neutral[300]};
  border-radius: 4px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.background.hover};
    border-color: ${e=>e.$isActive?"transparent":e.theme.colors.neutral[400]};
  }

  &:focus {
    outline: none;
  }
`,Ud=()=>{var g;const{isDarkMode:e,toggleTheme:t,primaryColor:r,setPrimaryColor:o}=xU(),{user:i}=Ot(),[s,l]=j.useState("general"),[c,d]=j.useState([{id:"siteName",label:"Site Name",description:"The name of your learning management system",type:"input",value:"My Learning Management System",category:"general",icon:n.jsx(x6,{})},{id:"adminEmail",label:"Admin Email",description:"Email used for system notifications",type:"input",value:"admin@example.com",category:"general",icon:n.jsx(Hl,{})},{id:"theme",label:"Color Theme",description:"Choose between light and dark mode",type:"select",value:e?"dark":"light",options:[{value:"light",label:"Light Mode"},{value:"dark",label:"Dark Mode"},{value:"system",label:"System Default"}],category:"appearance",icon:n.jsx(og,{})},{id:"primaryColor",label:"Primary Color",description:"Main color used throughout the application",type:"color",value:r,category:"appearance",icon:n.jsx(sg,{})},{id:"compactMode",label:"Compact Mode",description:"Use reduced spacing in the interface",type:"toggle",value:!1,category:"appearance",icon:n.jsx(P6,{})},{id:"emailNotifications",label:"Email Notifications",description:"Send system notifications via email",type:"toggle",value:!0,category:"notifications",icon:n.jsx(Hl,{})},{id:"newUserAlert",label:"New User Alerts",description:"Get notified when new users register",type:"toggle",value:!0,category:"notifications",icon:n.jsx(Ae,{})},{id:"loginAlerts",label:"Login Alerts",description:"Get notified of suspicious login attempts",type:"toggle",value:!0,category:"notifications",icon:n.jsx(js,{})},{id:"twoFactorAuth",label:"Two-Factor Authentication",description:"Require 2FA for admin accounts",type:"toggle",value:!1,category:"security",icon:n.jsx(ti,{})},{id:"passwordPolicy",label:"Password Policy",description:"Set minimum requirements for passwords",type:"select",value:"strong",options:[{value:"basic",label:"Basic (6+ characters)"},{value:"medium",label:"Medium (8+ chars, mixed case)"},{value:"strong",label:"Strong (8+ chars, mixed case, numbers, symbols)"}],category:"security",icon:n.jsx(ei,{})},{id:"sessionTimeout",label:"Session Timeout",description:"Automatically log out inactive users",type:"select",value:"30",options:[{value:"15",label:"15 minutes"},{value:"30",label:"30 minutes"},{value:"60",label:"1 hour"},{value:"120",label:"2 hours"},{value:"never",label:"Never"}],category:"security",icon:n.jsx(Ki,{})},{id:"backupFrequency",label:"Backup Frequency",description:"How often the system data is backed up",type:"select",value:"daily",options:[{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"},{value:"monthly",label:"Monthly"},{value:"manual",label:"Manual Only"}],category:"system",icon:n.jsx(Eh,{})},{id:"maintenanceMode",label:"Maintenance Mode",description:"Put the system in maintenance mode",type:"toggle",value:!1,category:"system",icon:n.jsx(sg,{})},{id:"cacheClearing",label:"Clear System Cache",description:"Clear cached data to free up system resources",type:"button",value:"Clear Cache",category:"system",icon:n.jsx(Ki,{})}]);j.useEffect(()=>{d(f=>f.map(S=>S.id==="theme"?{...S,value:e?"dark":"light"}:S.id==="primaryColor"?{...S,value:r}:S))},[e,r]);const[u,h]=j.useState(!1),[m,p]=j.useState("idle"),b=[{id:"general",label:"General",icon:n.jsx(Fs,{})},{id:"appearance",label:"Appearance",icon:n.jsx(og,{})},{id:"notifications",label:"Notifications",icon:n.jsx(js,{})},{id:"security",label:"Security",icon:n.jsx(ti,{})},{id:"system",label:"System",icon:n.jsx(Eh,{})}],v=f=>{const S=c.find(C=>C.id===f);if(S){const C=!S.value;f==="theme"&&S.value==="dark"&&t(),d(c.map(P=>P.id===f?{...P,value:C}:P))}},$=(f,S)=>{f==="theme"&&(S==="dark"&&!e||S==="light"&&e)&&t(),f==="primaryColor"&&o(S),d(c.map(C=>C.id===f?{...C,value:S}:C))},k=()=>{h(!0),p("idle"),setTimeout(()=>{h(!1),p("success"),setTimeout(()=>{p("idle")},3e3)},1500)},y=c.filter(f=>(f.category==="security"||f.category==="system")&&(i==null?void 0:i.role)!=="admin"?!1:f.category===s),x=b.filter(f=>!((f.id==="security"||f.id==="system")&&(i==null?void 0:i.role)!=="admin"));return n.jsxs(DR,{children:[n.jsxs(ER,{children:[n.jsxs("div",{children:[n.jsx(LR,{children:"Settings"}),n.jsx(RR,{children:"Configure system settings and preferences"})]}),n.jsx(IR,{onClick:k,disabled:u,children:n.jsx(ne,{mode:"wait",children:u?n.jsxs(E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[n.jsx(Ki,{className:"spin"}),n.jsx("span",{children:"Saving..."})]},"saving"):m==="success"?n.jsxs(E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[n.jsx(fr,{}),n.jsx("span",{children:"Saved!"})]},"success"):m==="error"?n.jsxs(E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[n.jsx(zc,{}),n.jsx("span",{children:"Error!"})]},"error"):n.jsxs(E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[n.jsx(Rh,{}),n.jsx("span",{children:"Save Changes"})]},"save")})})]}),n.jsxs(FR,{children:[n.jsx(BR,{children:x.map(f=>n.jsxs(NR,{$isActive:s===f.id,onClick:()=>l(f.id),children:[n.jsx(OR,{children:f.icon}),n.jsx(VR,{children:f.label}),s===f.id&&n.jsx(_R,{layoutId:"activeCategoryIndicator",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}})]},f.id))}),n.jsxs(WR,{children:[n.jsxs(UR,{children:[(g=b.find(f=>f.id===s))==null?void 0:g.label," Settings"]}),n.jsx(HR,{children:n.jsx(ne,{mode:"wait",children:n.jsx(E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:y.map(f=>{var S;return n.jsxs(GR,{children:[n.jsx(YR,{children:f.icon}),n.jsxs(qR,{children:[n.jsx(QR,{children:f.label}),n.jsx(KR,{children:f.description})]}),n.jsxs(XR,{children:[f.type==="toggle"&&n.jsx(JR,{$isActive:f.value,onClick:()=>v(f.id),children:n.jsx(ZR,{$isActive:f.value})}),f.type==="input"&&n.jsxs("div",{style:{width:"100%"},children:[n.jsx(eI,{type:"text",value:f.value,onChange:C=>$(f.id,C.target.value),readOnly:f.id==="siteName"&&(i==null?void 0:i.role)!=="admin"}),f.id==="siteName"&&(i==null?void 0:i.role)!=="admin"&&n.jsxs(sI,{children:[n.jsx(ei,{size:12}),"This setting can only be changed by administrators"]})]}),f.type==="select"&&n.jsx(tI,{value:f.value,onChange:C=>$(f.id,C.target.value),children:(S=f.options)==null?void 0:S.map(C=>n.jsx("option",{value:C.value,children:C.label},C.value))}),f.type==="color"&&n.jsxs(rI,{children:[n.jsx(nI,{$color:f.value}),n.jsx(oI,{type:"color",value:f.value,onChange:C=>$(f.id,C.target.value)})]}),f.type==="button"&&n.jsx(iI,{onClick:()=>alert(`Action: ${f.value}`),children:f.value})]})]},f.id)})},s)})})]})]})]})},DR=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[6]};
`,ER=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${e=>e.theme.spacing[4]};
  }
`,LR=a.h1`
  margin: 0;
  margin-bottom: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1.8rem;
`,RR=a.p`
  margin: 0;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 1rem;
`,IR=a.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[4]}`};
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  
  &:hover:not(:disabled) {
    background-color: ${e=>e.theme.colors.primary[700]};
  }
  
  &:disabled {
    background-color: ${e=>e.theme.colors.neutral[400]};
    cursor: not-allowed;
  }
  
  .spin {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  div {
    display: flex;
    align-items: center;
    gap: ${e=>e.theme.spacing[2]};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`,FR=a.div`
  display: flex;
  gap: ${e=>e.theme.spacing[6]};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    flex-direction: column;
  }
`,BR=a.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  box-shadow: ${e=>e.theme.shadows.sm};
  overflow: hidden;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    width: 100%;
    flex-direction: row;
    overflow-x: auto;
    padding: ${e=>e.theme.spacing[2]};
  }
`,NR=a.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[3]};
  background-color: ${e=>e.$isActive?e.theme.colors.background.lighter:"transparent"};
  color: ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.text.secondary};
  border: none;
  padding: ${e=>`${e.theme.spacing[3]} ${e.theme.spacing[4]}`};
  font-size: 0.95rem;
  font-weight: ${e=>e.$isActive?600:400};
  text-align: left;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  position: relative;
  
  &:hover {
    background-color: ${e=>e.$isActive?e.theme.colors.background.lighter:e.theme.colors.background.hover};
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
    flex-shrink: 0;
    border-radius: ${e=>e.theme.borderRadius.md};
  }
`,OR=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
`,VR=a.div`
  flex: 1;
`,_R=a(E.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 4px;
  background-color: ${e=>e.theme.colors.primary[600]};
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    width: 100%;
    height: 4px;
    top: auto;
    bottom: -${e=>e.theme.spacing[1]};
  }
`,WR=a.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  box-shadow: ${e=>e.theme.shadows.sm};
  padding: ${e=>e.theme.spacing[6]};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    padding: ${e=>e.theme.spacing[4]};
  }
`,UR=a.h2`
  margin: 0;
  margin-bottom: ${e=>e.theme.spacing[4]};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1.3rem;
  font-weight: 600;
`,HR=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[4]};
`,GR=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[4]};
  background-color: ${e=>e.theme.colors.background.lighter};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing[4]};
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,YR=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${e=>e.theme.borderRadius.full};
  background-color: ${e=>e.theme.colors.primary[50]};
  color: ${e=>e.theme.colors.primary[600]};
  font-size: 1.2rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    margin-bottom: ${e=>e.theme.spacing[2]};
  }
`,qR=a.div`
  flex: 1;
`,QR=a.div`
  font-weight: 500;
  margin-bottom: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.primary};
`,KR=a.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text.secondary};
`,XR=a.div`
  min-width: 120px;
  display: flex;
  justify-content: flex-end;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    width: 100%;
    justify-content: flex-start;
    margin-top: ${e=>e.theme.spacing[3]};
  }
`,JR=a.div`
  position: relative;
  width: 48px;
  height: 24px;
  background-color: ${e=>e.$isActive?e.theme.colors.primary[500]:e.theme.colors.neutral[300]};
  border-radius: 24px;
  cursor: pointer;
  transition: background-color ${e=>e.theme.transition.fast};
`,ZR=a.div`
  position: absolute;
  top: 2px;
  left: ${e=>e.$isActive?"26px":"2px"};
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  box-shadow: ${e=>e.theme.shadows.sm};
  transition: left ${e=>e.theme.transition.fast};
`,eI=a.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid ${e=>e.theme.colors.neutral[300]};
  font-size: 14px;
  color: ${e=>e.theme.colors.text.primary};
  background-color: ${e=>e.theme.colors.background.primary};
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[600]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }
  
  &:read-only {
    background-color: ${e=>e.theme.colors.background.tertiary};
    cursor: not-allowed;
    opacity: 0.8;
  }
`,tI=a.select`
  min-width: 150px;
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
  font-size: 0.95rem;
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  color: ${e=>e.theme.colors.text.primary};
  background-color: ${e=>e.theme.colors.background.secondary};
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary[400]};
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }
`,rI=a.div`
  display: flex;
  align-items: center;
  position: relative;
`,nI=a.div`
  width: 30px;
  height: 30px;
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.$color};
  border: 1px solid ${e=>e.theme.colors.border.light};
`,oI=a.input`
  position: absolute;
  opacity: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
`,iI=a.button`
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>`${e.theme.spacing[2]} ${e.theme.spacing[3]}`};
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color ${e=>e.theme.transition.fast};
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[700]};
  }
`,sI=a.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.tertiary};
  margin-top: 4px;
  font-style: italic;
  display: flex;
  align-items: center;
  gap: 4px;
  
  svg {
    font-size: 14px;
  }
`,Hd=()=>{const{user:e,updateProfile:t,updatePassword:r}=Ot(),[o,i]=j.useState({username:"",email:"",fullName:"",role:"",currentPassword:"",newPassword:"",confirmPassword:""}),[s,l]=j.useState({}),[c,d]=j.useState("general"),[u,h]=j.useState(!1),[m,p]=j.useState(""),[b,v]=j.useState("");j.useEffect(()=>{e&&i({...o,username:e.username||"",email:e.email||"",fullName:e.fullName||"",role:e.role||""})},[e]);const $=P=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(P),k=()=>{const P={};let w=!0;return o.username.trim()?o.username.length<3&&(P.username="Username must be at least 3 characters",w=!1):(P.username="Username is required",w=!1),o.email.trim()?$(o.email)||(P.email="Please enter a valid email address",w=!1):(P.email="Email is required",w=!1),o.fullName&&o.fullName.length<2&&(P.fullName="Full name must be at least 2 characters",w=!1),l(P),w},y=()=>{const P={};let w=!0;return o.currentPassword||(P.currentPassword="Current password is required",w=!1),o.newPassword?o.newPassword.length<6?(P.newPassword="Password must be at least 6 characters",w=!1):/\d/.test(o.newPassword)?/[a-zA-Z]/.test(o.newPassword)||(P.newPassword="Password must contain at least one letter",w=!1):(P.newPassword="Password must contain at least one number",w=!1):(P.newPassword="New password is required",w=!1),o.confirmPassword?o.newPassword!==o.confirmPassword&&(P.confirmPassword="Passwords do not match",w=!1):(P.confirmPassword="Please confirm your password",w=!1),l(P),w},x=P=>{const{name:w,value:A}=P.target;i({...o,[w]:A}),s[w]&&l({...s,[w]:void 0})},g=P=>{d(P),v(""),p("")},f=()=>{h(!u),u&&(e&&i({...o,username:e.username||"",email:e.email||"",fullName:e.fullName||"",role:e.role||""}),l({}))},S=P=>{if(P.preventDefault(),p(""),v(""),!k()){v("Please correct the errors in the form");return}try{t({username:o.username,email:o.email,fullName:o.fullName}),p("Profile updated successfully!"),v(""),h(!1),setTimeout(()=>{p("")},3e3)}catch{v("Failed to update profile. Please try again."),p("")}},C=P=>{if(P.preventDefault(),p(""),v(""),!y()){v("Please correct the errors in the form");return}try{if(!r(o.currentPassword,o.newPassword)){v("Current password is incorrect"),l({...s,currentPassword:"Current password is incorrect"});return}i({...o,currentPassword:"",newPassword:"",confirmPassword:""}),p("Password changed successfully!"),v(""),setTimeout(()=>{p("")},3e3)}catch{v("Failed to change password. Please try again."),p("")}};return n.jsxs(aI,{children:[n.jsx(lI,{children:n.jsx(cI,{children:"My Profile"})}),m&&n.jsx($I,{children:m}),b&&n.jsx(jI,{children:b}),n.jsxs(dI,{children:[n.jsxs(uI,{children:[n.jsx(hI,{children:e!=null&&e.username?e.username.charAt(0).toUpperCase():"U"}),n.jsx(mI,{children:e==null?void 0:e.role}),n.jsxs(pI,{children:[n.jsxs(hx,{$isActive:c==="general",onClick:()=>g("general"),children:[n.jsx($t,{}),n.jsx("span",{children:"General Information"})]}),n.jsxs(hx,{$isActive:c==="security",onClick:()=>g("security"),children:[n.jsx(ei,{}),n.jsx("span",{children:"Password & Security"})]})]})]}),n.jsxs(fI,{children:[c==="general"&&n.jsxs("form",{onSubmit:S,children:[n.jsxs(mx,{children:[n.jsx(px,{children:"General Information"}),n.jsx(gI,{children:u?n.jsxs(n.Fragment,{children:[n.jsxs(fx,{type:"submit",children:[n.jsx(Rh,{}),"Save Changes"]}),n.jsxs(wI,{type:"button",onClick:f,children:[n.jsx(Nt,{}),"Cancel"]})]}):n.jsx(bI,{type:"button",onClick:f,children:"Edit Profile"})})]}),n.jsxs(fn,{children:[n.jsx(gn,{htmlFor:"username",children:"Username"}),n.jsx(xn,{type:"text",id:"username",name:"username",value:o.username,onChange:x,disabled:!u,$hasError:!!s.username}),s.username&&n.jsx(co,{children:s.username})]}),n.jsxs(fn,{children:[n.jsx(gn,{htmlFor:"fullName",children:"Full Name"}),n.jsx(xn,{type:"text",id:"fullName",name:"fullName",value:o.fullName,onChange:x,disabled:!u,$hasError:!!s.fullName}),s.fullName&&n.jsx(co,{children:s.fullName})]}),n.jsxs(fn,{children:[n.jsx(gn,{htmlFor:"email",children:"Email Address"}),n.jsx(xn,{type:"email",id:"email",name:"email",value:o.email,onChange:x,disabled:!u,$hasError:!!s.email}),s.email&&n.jsx(co,{children:s.email})]}),n.jsxs(fn,{children:[n.jsx(gn,{htmlFor:"role",children:"Role"}),n.jsx(xn,{type:"text",id:"role",name:"role",value:o.role,disabled:!0}),n.jsx(xI,{children:"Role cannot be changed"})]})]}),c==="security"&&n.jsxs("form",{onSubmit:C,children:[n.jsx(mx,{children:n.jsx(px,{children:"Password & Security"})}),n.jsxs(yI,{children:[n.jsx(_n,{}),n.jsxs("div",{children:[n.jsx("p",{children:"Password must:"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Be at least 6 characters long"}),n.jsx("li",{children:"Include at least one number"}),n.jsx("li",{children:"Include at least one letter"})]})]})]}),n.jsxs(fn,{children:[n.jsx(gn,{htmlFor:"currentPassword",children:"Current Password"}),n.jsx(xn,{type:"password",id:"currentPassword",name:"currentPassword",value:o.currentPassword,onChange:x,placeholder:"Enter your current password",$hasError:!!s.currentPassword}),s.currentPassword&&n.jsx(co,{children:s.currentPassword})]}),n.jsxs(fn,{children:[n.jsx(gn,{htmlFor:"newPassword",children:"New Password"}),n.jsx(vI,{children:n.jsx(xn,{type:"password",id:"newPassword",name:"newPassword",value:o.newPassword,onChange:x,placeholder:"Enter new password",$hasError:!!s.newPassword})}),s.newPassword&&n.jsx(co,{children:s.newPassword})]}),n.jsxs(fn,{children:[n.jsx(gn,{htmlFor:"confirmPassword",children:"Confirm New Password"}),n.jsx(xn,{type:"password",id:"confirmPassword",name:"confirmPassword",value:o.confirmPassword,onChange:x,placeholder:"Confirm new password",$hasError:!!s.confirmPassword}),s.confirmPassword&&n.jsx(co,{children:s.confirmPassword})]}),n.jsxs(fx,{type:"submit",children:[n.jsx(Rh,{}),"Change Password"]})]})]})]})]})},aI=a.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,lI=a.div`
  margin-bottom: 2rem;
`,cI=a.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,dI=a.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
  }
`,uI=a.div`
  width: 280px;
  flex-shrink: 0;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
  }
`,hI=a.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.primary[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: 600;
  margin: 0 auto 1rem;
`,mI=a.div`
  background-color: ${e=>e.theme.colors.primary[100]};
  color: ${e=>e.theme.colors.primary[700]};
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
  margin: 0 auto;
  text-transform: capitalize;
  text-align: center;
  width: fit-content;
  display: block;
  margin-bottom: 2rem;
`,pI=a.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,hx=a.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: ${e=>e.$isActive?e.theme.colors.primary[50]:"transparent"};
  color: ${e=>e.$isActive?e.theme.colors.primary[700]:e.theme.colors.text.secondary};
  font-weight: ${e=>e.$isActive?"600":"400"};
  border: none;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.$isActive?e.theme.colors.primary[50]:e.theme.colors.background.hover};
    color: ${e=>e.$isActive?e.theme.colors.primary[700]:e.theme.colors.text.primary};
  }
  
  svg {
    font-size: 1.25rem;
  }
`,fI=a.div`
  flex: 1;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: 0.75rem;
  border: 1px solid ${e=>e.theme.colors.border.light};
  padding: 2rem;
`,mx=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`,px=a.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,gI=a.div`
  display: flex;
  gap: 0.75rem;
`,fn=a.div`
  margin-bottom: 1.5rem;
`,gn=a.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.875rem;
`,xn=a.input`
  width: 100%;
  padding: 0.625rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid ${e=>e.$hasError?e.theme.colors.danger[500]:e.theme.colors.border.light};
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.875rem;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.$hasError?e.theme.colors.danger[500]:e.theme.colors.primary[500]};
    box-shadow: 0 0 0 2px ${e=>e.$hasError?e.theme.colors.danger[100]:e.theme.colors.primary[100]};
  }
  
  &:disabled {
    background-color: ${e=>e.theme.colors.background.tertiary};
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
`,co=a.div`
  color: ${e=>e.theme.colors.danger[500]};
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &::before {
    content: "⚠";
  }
`,xI=a.p`
  margin-top: 0.5rem;
  color: ${e=>e.theme.colors.text.tertiary};
  font-size: 0.75rem;
`,yI=a.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${e=>e.theme.colors.primary[50]};
  margin-bottom: 1.5rem;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  
  svg {
    color: ${e=>e.theme.colors.primary[500]};
    font-size: 1.25rem;
    flex-shrink: 0;
    margin-top: 0.25rem;
  }
  
  p {
    font-weight: 500;
    margin-bottom: 0.25rem;
  }
  
  ul {
    margin: 0;
    padding-left: 1.25rem;
    font-size: 0.875rem;
    
    li {
      margin-bottom: 0.25rem;
    }
  }
`,vI=a.div`
  position: relative;
  width: 100%;
`,vp=a.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    font-size: 1rem;
  }
`,bI=a(vp)`
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
    border-color: ${e=>e.theme.colors.border.dark};
  }
`,fx=a(vp)`
  background-color: ${e=>e.theme.colors.primary[500]};
  color: white;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[600]};
  }
`,wI=a(vp)`
  background-color: transparent;
  color: ${e=>e.theme.colors.text.secondary};
  border: none;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
    color: ${e=>e.theme.colors.text.primary};
  }
`,Xw=a.div`
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
`,$I=a(Xw)`
  background-color: ${e=>e.theme.colors.success[50]};
  color: ${e=>e.theme.colors.success[700]};
  border: 1px solid ${e=>e.theme.colors.success[200]};
`,jI=a(Xw)`
  background-color: ${e=>e.theme.colors.danger[50]};
  color: ${e=>e.theme.colors.danger[700]};
  border: 1px solid ${e=>e.theme.colors.danger[200]};
`,Gd={admin:{username:"admin",password:"123456"},teacher:{username:"teacher",password:"123456"},student:{username:"student",password:"123456"}},kI=()=>{const e=Ms(),{login:t}=Ot(),[r,o]=j.useState(null),[i,s]=j.useState(""),[l,c]=j.useState(""),[d,u]=j.useState(!1),[h,m]=j.useState(""),p=$=>{o($),m("")},b=$=>{if($.preventDefault(),!r)return;t(i,l,r)?e(`/${r}/dashboard`):m("Invalid username or password")},v=()=>{if(!r)return;const $=Gd[r];s($.username),c($.password)};return r?n.jsxs(gx,{children:[n.jsxs(xx,{children:[n.jsxs(yx,{children:[n.jsx("h1",{children:"Learning Management System"}),n.jsxs("p",{children:["Sign in as ",r.charAt(0).toUpperCase()+r.slice(1)]})]}),n.jsxs(SI,{onSubmit:b,children:[n.jsxs(PI,{onClick:()=>o(null),children:[n.jsx(p6,{})," Back to Role Selection"]}),h&&n.jsx(EI,{children:h}),n.jsxs($x,{children:[n.jsx(jx,{htmlFor:"username",children:"Username"}),n.jsx(kx,{children:n.jsx(Cx,{id:"username",type:"text",placeholder:"Enter your username",value:i,onChange:$=>s($.target.value),required:!0})})]}),n.jsxs($x,{children:[n.jsx(jx,{htmlFor:"password",children:"Password"}),n.jsx(kx,{children:n.jsx(Cx,{id:"password",type:"password",placeholder:"Enter your password",value:l,onChange:$=>c($.target.value),required:!0})})]}),n.jsxs(TI,{children:[n.jsxs(AI,{children:[n.jsx(zI,{type:"checkbox",id:"rememberMe",checked:d,onChange:()=>u(!d)}),n.jsx("label",{htmlFor:"rememberMe",children:"Remember me"})]}),n.jsx(MI,{to:"/forgot-password",children:"Forgot password?"})]}),n.jsx(DI,{type:"submit",children:"Sign in"})]}),n.jsxs(LI,{children:[n.jsx(RI,{children:"Note: All user accounts are created by administrators"}),n.jsxs(II,{children:[n.jsx("p",{children:"Demo credentials:"}),n.jsxs(Sx,{children:[n.jsx("strong",{children:"Username:"})," ",Gd[r].username]}),n.jsxs(Sx,{children:[n.jsx("strong",{children:"Password:"})," ",Gd[r].password]}),n.jsx(FI,{onClick:v,children:"Use demo account"})]})]})]}),n.jsx(vx,{children:n.jsxs(bx,{children:[n.jsx("h2",{children:"Welcome to the Learning Management System"}),n.jsx("p",{children:"A comprehensive platform for educational institutions to manage learning processes and content."}),n.jsxs(wx,{children:[n.jsxs(uo,{children:[n.jsx(ho,{className:"admin",children:n.jsx($t,{})}),n.jsxs(mo,{children:[n.jsx("h3",{children:"Admin Panel"}),n.jsx("p",{children:"Manage users, roles, and system settings"})]})]}),n.jsxs(uo,{children:[n.jsx(ho,{className:"teacher",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M12 14l9-5-9-5-9 5 9 5z"}),n.jsx("path",{d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z"}),n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"})]})}),n.jsxs(mo,{children:[n.jsx("h3",{children:"Teacher Panel"}),n.jsx("p",{children:"Create curriculum, upload materials, and grade students"})]})]}),n.jsxs(uo,{children:[n.jsx(ho,{className:"student",children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),n.jsxs(mo,{children:[n.jsx("h3",{children:"Student Panel"}),n.jsx("p",{children:"Access learning materials, assignments, and track progress"})]})]})]})]})})]}):n.jsxs(gx,{children:[n.jsxs(xx,{children:[n.jsxs(yx,{children:[n.jsx("h1",{children:"Learning Management System"}),n.jsx("p",{children:"Select your role to continue"})]}),n.jsxs(CI,{children:[n.jsxs(nl,{onClick:()=>p("admin"),children:[n.jsx(Yd,{className:"admin",children:n.jsx($t,{})}),n.jsxs(qd,{children:[n.jsx(Qd,{children:"Administrator"}),n.jsx(Kd,{children:"Manage user accounts, classes, and system settings"})]}),n.jsx(Xd,{children:n.jsx(Rt,{})})]}),n.jsxs(nl,{onClick:()=>p("teacher"),children:[n.jsx(Yd,{className:"teacher",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M12 14l9-5-9-5-9 5 9 5z"}),n.jsx("path",{d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"}),n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"})]})}),n.jsxs(qd,{children:[n.jsx(Qd,{children:"Teacher"}),n.jsx(Kd,{children:"Create and manage curriculum, materials, and assessments"})]}),n.jsx(Xd,{children:n.jsx(Rt,{})})]}),n.jsxs(nl,{onClick:()=>p("student"),children:[n.jsx(Yd,{className:"student",children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),n.jsxs(qd,{children:[n.jsx(Qd,{children:"Student"}),n.jsx(Kd,{children:"Access classes, learning materials, and track progress"})]}),n.jsx(Xd,{children:n.jsx(Rt,{})})]})]})]}),n.jsx(vx,{children:n.jsxs(bx,{children:[n.jsx("h2",{children:"Welcome to the Learning Management System"}),n.jsx("p",{children:"A comprehensive platform for educational institutions to manage learning processes and content."}),n.jsxs(wx,{children:[n.jsxs(uo,{children:[n.jsx(ho,{className:"admin",children:n.jsx($t,{})}),n.jsxs(mo,{children:[n.jsx("h3",{children:"Admin Panel"}),n.jsx("p",{children:"Manage users, roles, and system settings"})]})]}),n.jsxs(uo,{children:[n.jsx(ho,{className:"teacher",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M12 14l9-5-9-5-9 5 9 5z"}),n.jsx("path",{d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z"}),n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"})]})}),n.jsxs(mo,{children:[n.jsx("h3",{children:"Teacher Panel"}),n.jsx("p",{children:"Create curriculum, upload materials, and grade students"})]})]}),n.jsxs(uo,{children:[n.jsx(ho,{className:"student",children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),n.jsxs(mo,{children:[n.jsx("h3",{children:"Student Panel"}),n.jsx("p",{children:"Access learning materials, assignments, and track progress"})]})]})]})]})})]})},gx=a.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: ${e=>e.theme.colors.background.lighter};

  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    flex-direction: column-reverse;
    height: auto;
    min-height: 100vh;
  }
`,xx=a.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${e=>e.theme.spacing[8]};
  background-color: ${e=>e.theme.colors.background.secondary};
  box-shadow: ${e=>e.theme.shadows.md};
  max-width: 600px;
  overflow-y: auto;

  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    max-width: 100%;
    padding: ${e=>e.theme.spacing[6]};
  }

  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    padding: ${e=>e.theme.spacing[4]};
  }
`,yx=a.div`
  margin-bottom: ${e=>e.theme.spacing[8]};

  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${e=>e.theme.colors.text.primary};
    margin-bottom: ${e=>e.theme.spacing[2]};
  }

  p {
    color: ${e=>e.theme.colors.text.secondary};
    font-size: 1rem;
  }

  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    margin-bottom: ${e=>e.theme.spacing[6]};

    h1 {
      font-size: 1.5rem;
    }
  }
`,CI=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[4]};
`,nl=a.div`
  display: flex;
  align-items: center;
  padding: ${e=>e.theme.spacing[5]};
  background-color: ${e=>e.theme.colors.background.secondary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.lg};
  cursor: pointer;
  transition: all ${e=>e.theme.transition.normal};
  box-shadow: ${e=>e.theme.shadows.sm};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.md};
    border-color: ${e=>e.theme.colors.primary[400]};
  }
`,Yd=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${e=>e.theme.borderRadius.full};
  margin-right: ${e=>e.theme.spacing[4]};
  
  &.admin {
    background-color: ${e=>e.theme.colors.purple[100]};
    color: ${e=>e.theme.colors.purple[600]};
  }
  
  &.teacher {
    background-color: ${e=>e.theme.colors.primary[100]};
    color: ${e=>e.theme.colors.primary[600]};
  }
  
  &.student {
    background-color: ${e=>e.theme.colors.success[100]};
    color: ${e=>e.theme.colors.success[600]};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`,qd=a.div`
  flex: 1;
`,Qd=a.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.primary};
`,Kd=a.p`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
`,Xd=a.div`
  color: ${e=>e.theme.colors.text.tertiary};
  transition: transform ${e=>e.theme.transition.normal};
  
  ${nl}:hover & {
    transform: translateX(4px);
    color: ${e=>e.theme.colors.primary[500]};
  }
`,vx=a.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.colors.primary[600]};
  color: white;
  padding: ${e=>e.theme.spacing[8]};

  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    padding: ${e=>e.theme.spacing[6]};
  }

  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    padding: ${e=>e.theme.spacing[4]};
  }
`,bx=a.div`
  max-width: 600px;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: ${e=>e.theme.spacing[4]};
  }

  > p {
    font-size: 1.125rem;
    margin-bottom: ${e=>e.theme.spacing[8]};
    opacity: 0.9;
  }

  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    h2 {
      font-size: 1.5rem;
    }

    > p {
      font-size: 1rem;
      margin-bottom: ${e=>e.theme.spacing[6]};
    }
  }
`,wx=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[6]};
`,uo=a.div`
  display: flex;
  align-items: center;
`,ho=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${e=>e.theme.borderRadius.full};
  margin-right: ${e=>e.theme.spacing[4]};
  background-color: rgba(255, 255, 255, 0.2);
  
  svg {
    width: 20px;
    height: 20px;
    color: white;
  }
`,mo=a.div`
  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: ${e=>e.theme.spacing[1]};
  }

  p {
    font-size: 0.875rem;
    opacity: 0.8;
  }
`,SI=a.form`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[5]};
`,PI=a.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  background: none;
  border: none;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 0.875rem;
  padding: ${e=>e.theme.spacing[2]} 0;
  cursor: pointer;
  transition: color ${e=>e.theme.transition.fast};
  width: fit-content;
  margin-bottom: ${e=>e.theme.spacing[2]};

  &:hover {
    color: ${e=>e.theme.colors.primary[600]};
  }
`,$x=a.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing[2]};
`,jx=a.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,kx=a.div`
  position: relative;
`,Cx=a.input`
  width: 100%;
  padding: ${e=>e.theme.spacing[3]};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: ${e=>e.theme.borderRadius.md};
  background-color: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.primary};
  font-size: 1rem;
  transition: border-color ${e=>e.theme.transition.fast};

  &:focus {
    border-color: ${e=>e.theme.colors.primary[400]};
    outline: none;
    box-shadow: 0 0 0 2px ${e=>e.theme.colors.primary[100]};
  }

  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
`,TI=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,AI=a.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing[2]};
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
`,zI=a.input`
  accent-color: ${e=>e.theme.colors.primary[500]};
  cursor: pointer;
`,MI=a(gs)`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.primary[600]};
  text-decoration: none;
  transition: color ${e=>e.theme.transition.fast};

  &:hover {
    color: ${e=>e.theme.colors.primary[700]};
    text-decoration: underline;
  }
`,DI=a.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${e=>e.theme.spacing[3]};
  background-color: ${e=>e.theme.colors.primary[500]};
  color: white;
  border: none;
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color ${e=>e.theme.transition.fast};

  &:hover {
    background-color: ${e=>e.theme.colors.primary[600]};
  }

  &:active {
    background-color: ${e=>e.theme.colors.primary[700]};
  }
`,EI=a.div`
  padding: ${e=>e.theme.spacing[3]};
  background-color: ${e=>e.theme.colors.danger[50]};
  color: ${e=>e.theme.colors.danger[700]};
  border: 1px solid ${e=>e.theme.colors.danger[100]};
  border-radius: ${e=>e.theme.borderRadius.md};
  font-size: 0.875rem;
`,LI=a.div`
  margin-top: ${e=>e.theme.spacing[6]};
  border-top: 1px solid ${e=>e.theme.colors.border.light};
  padding-top: ${e=>e.theme.spacing[6]};
`,RI=a.p`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: ${e=>e.theme.spacing[3]};
`,II=a.div`
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing[4]};
  font-size: 0.875rem;

  > p {
    margin-bottom: ${e=>e.theme.spacing[2]};
    color: ${e=>e.theme.colors.text.secondary};
  }
`,Sx=a.div`
  margin-bottom: ${e=>e.theme.spacing[1]};
  color: ${e=>e.theme.colors.text.primary};

  strong {
    font-weight: 500;
    margin-right: ${e=>e.theme.spacing[2]};
  }
`,FI=a.button`
  display: inline-flex;
  align-items: center;
  background-color: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.primary[600]};
  border: 1px solid ${e=>e.theme.colors.primary[200]};
  border-radius: ${e=>e.theme.borderRadius.md};
  padding: ${e=>e.theme.spacing[2]} ${e=>e.theme.spacing[3]};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all ${e=>e.theme.transition.fast};
  margin-top: ${e=>e.theme.spacing[2]};

  &:hover {
    background-color: ${e=>e.theme.colors.primary[50]};
    border-color: ${e=>e.theme.colors.primary[300]};
  }
`,BI=e=>{const t=e.getDay(),r=e.getDate()-t+(t===0?-6:1),o=new Date(e.setDate(r)),i=[new Date(o)];for(let s=1;s<7;s++){const l=new Date(o);l.setDate(o.getDate()+s),i.push(l)}return i},Jd=e=>e.toLocaleDateString("en-US",{month:"short",day:"numeric"}),Px=e=>e.toLocaleDateString("en-US",{weekday:"short"}),ki=e=>{const t=e>=12?"PM":"AM";return`${e%12||12}:00 ${t}`},NI=()=>{const[e,t]=j.useState(new Date),[r,o]=j.useState("week"),[i,s]=j.useState(!1),[l,c]=j.useState(null),[d,u]=j.useState(null),h=BI(new Date(e)),m=Array.from({length:10},(f,S)=>S+8),p=[{id:1,title:"Algebra Fundamentals",course:"Algebra",startTime:9,endTime:11,day:0,studentCount:28,location:"Room 101",color:"#4F46E5"},{id:2,title:"Geometry Basics",course:"Geometry",startTime:12,endTime:13,day:0,studentCount:24,location:"Room 102",color:"#7C3AED"},{id:3,title:"Physics Principles",course:"Physics",startTime:9,endTime:10,day:1,studentCount:20,location:"Lab 201",color:"#06B6D4"},{id:4,title:"Chemistry Lab",course:"Chemistry",startTime:11,endTime:13,day:1,studentCount:18,location:"Lab 202",color:"#10B981"},{id:5,title:"Biology 101",course:"Biology",startTime:14,endTime:16,day:2,studentCount:26,location:"Lab 203",color:"#F59E0B"},{id:6,title:"Algebra Advanced",course:"Algebra",startTime:10,endTime:12,day:3,studentCount:22,location:"Room 103",color:"#4F46E5"},{id:7,title:"Geometry Advanced",course:"Geometry",startTime:14,endTime:16,day:4,studentCount:20,location:"Room 102",color:"#7C3AED"}],b=[...new Set(p.map(f=>f.course))],v=l?p.filter(f=>f.course===l):p,$=()=>{const f=new Date(e);r==="week"?f.setDate(f.getDate()-7):f.setMonth(f.getMonth()-1),t(f)},k=()=>{const f=new Date(e);r==="week"?f.setDate(f.getDate()+7):f.setMonth(f.getMonth()+1),t(f)},y=f=>{u(f)},x=f=>{c(f),s(!1)},g=()=>m.map(f=>n.jsxs(o9,{children:[n.jsx(i9,{children:ki(f)}),h.map((S,C)=>{const P=v.filter(w=>w.day===C&&w.startTime<=f&&w.endTime>f);return n.jsx(s9,{children:P.map(w=>{const A=w.startTime===f,T=w.endTime-w.startTime;return A?n.jsxs(a9,{$color:w.color,$duration:T,as:E.div,whileHover:{y:-2,boxShadow:"0 4px 12px rgba(0,0,0,0.1)"},onClick:()=>y(w),children:[n.jsx(l9,{children:w.title}),n.jsxs(c9,{children:[n.jsx(Fe,{size:12}),n.jsxs("span",{children:[ki(w.startTime)," - ",ki(w.endTime)]})]}),n.jsxs(d9,{children:[n.jsx(En,{size:12}),n.jsx("span",{children:w.location})]})]},w.id):null})},`${f}-${C}`)})]},f));return n.jsxs(OI,{as:E.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[n.jsxs(VI,{children:[n.jsxs("div",{children:[n.jsx(_I,{children:"Schedule"}),n.jsx(WI,{children:"Manage your teaching schedule and classes"})]}),n.jsx(UI,{children:n.jsxs(HI,{children:[n.jsx(Tx,{$isActive:r==="week",onClick:()=>o("week"),children:"Week"}),n.jsx(Tx,{$isActive:r==="month",onClick:()=>o("month"),children:"Month"})]})})]}),n.jsxs(GI,{children:[n.jsxs(YI,{children:[n.jsx(Ax,{onClick:$,children:n.jsx(Kt,{})}),n.jsxs(qI,{children:[n.jsx(ze,{}),n.jsx("span",{children:r==="week"?`${Jd(h[0])} - ${Jd(h[6])}`:e.toLocaleDateString("en-US",{month:"long",year:"numeric"})})]}),n.jsx(Ax,{onClick:k,children:n.jsx(Rt,{})})]}),n.jsxs(QI,{children:[n.jsxs(KI,{onClick:()=>s(!i),children:[n.jsx(Jt,{}),n.jsx("span",{children:l||"All Courses"}),n.jsx(ue,{style:{transform:i?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s ease"}})]}),i&&n.jsxs(XI,{children:[n.jsx(zx,{onClick:()=>x(null),$isActive:l===null,children:"All Courses"}),b.map((f,S)=>n.jsx(zx,{onClick:()=>x(f),$isActive:l===f,children:f},S))]})]})]}),r==="week"&&n.jsxs(JI,{children:[n.jsxs(ZI,{children:[n.jsx(e9,{}),h.map((f,S)=>n.jsxs(t9,{children:[n.jsx(r9,{children:Px(f)}),n.jsx(n9,{children:Jd(f)})]},S))]}),g()]}),r==="month"&&n.jsxs(u9,{children:[n.jsx(_n,{size:24}),n.jsx("p",{children:"Month view is currently under development. Please use the Week view for scheduling."})]}),d&&n.jsxs(h9,{children:[n.jsxs(p9,{children:[n.jsxs(f9,{$color:d.color,children:[n.jsx("h3",{children:d.title}),n.jsx(g9,{onClick:()=>u(null),children:"×"})]}),n.jsxs(x9,{children:[n.jsxs(Ci,{children:[n.jsx(Ce,{size:16}),n.jsxs("span",{children:["Course: ",d.course]})]}),n.jsxs(Ci,{children:[n.jsx(Fe,{size:16}),n.jsxs("span",{children:["Time: ",ki(d.startTime)," - ",ki(d.endTime)]})]}),n.jsxs(Ci,{children:[n.jsx(ze,{size:16}),n.jsxs("span",{children:["Day: ",Px(h[d.day])]})]}),n.jsxs(Ci,{children:[n.jsx(Ae,{size:16}),n.jsxs("span",{children:["Students: ",d.studentCount]})]}),n.jsxs(Ci,{children:[n.jsx(En,{size:16}),n.jsxs("span",{children:["Location: ",d.location]})]})]}),n.jsx(y9,{children:n.jsx(v9,{children:"View Class Details"})})]}),n.jsx(m9,{onClick:()=>u(null)})]})]})},OI=a.div`
  padding: 1rem 0;
`,VI=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`,_I=a.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
  color: ${e=>e.theme.colors.text.primary};
`,WI=a.p`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 0.25rem 0 0;
`,UI=a.div`
  display: flex;
  gap: 1rem;
`,HI=a.div`
  display: flex;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: 0.5rem;
  overflow: hidden;
`,Tx=a.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${e=>e.$isActive?e.theme.colors.primary[500]:"transparent"};
  color: ${e=>e.$isActive?"white":e.theme.colors.text.primary};
  font-weight: ${e=>e.$isActive?600:400};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.$isActive?e.theme.colors.primary[600]:e.theme.colors.background.hover};
  }
`,GI=a.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`,YI=a.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Ax=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  border: none;
  background-color: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.primary};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
`,qI=a.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
  
  svg {
    color: ${e=>e.theme.colors.text.secondary};
  }
`,QI=a.div`
  position: relative;
`,KI=a.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${e=>e.theme.colors.background.secondary};
  border: none;
  border-radius: 0.375rem;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
  
  svg {
    color: ${e=>e.theme.colors.text.secondary};
  }
`,XI=a.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 0.375rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  min-width: 12rem;
  overflow: hidden;
`,zx=a.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${e=>e.$isActive?e.theme.colors.background.hover:"transparent"};
  color: ${e=>e.$isActive?e.theme.colors.primary[500]:e.theme.colors.text.primary};
  font-weight: ${e=>e.$isActive?500:400};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
`,JI=a.div`
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,ZI=a.div`
  display: grid;
  grid-template-columns: 80px repeat(7, 1fr);
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,e9=a.div`
  padding: 0.75rem;
  border-right: 1px solid ${e=>e.theme.colors.border.light};
  text-align: center;
`,t9=a.div`
  padding: 0.75rem;
  text-align: center;
  border-right: 1px solid ${e=>e.theme.colors.border.light};
  
  &:last-child {
    border-right: none;
  }
`,r9=a.div`
  font-weight: 500;
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.primary};
`,n9=a.div`
  font-size: 0.75rem;
  color: ${e=>e.theme.colors.text.secondary};
`,o9=a.div`
  display: grid;
  grid-template-columns: 80px repeat(7, 1fr);
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  min-height: 5rem;
  
  &:last-child {
    border-bottom: none;
  }
`,i9=a.div`
  padding: 0.75rem;
  font-size: 0.75rem;
  color: ${e=>e.theme.colors.text.secondary};
  border-right: 1px solid ${e=>e.theme.colors.border.light};
  display: flex;
  align-items: flex-start;
  justify-content: center;
`,s9=a.div`
  padding: 0.25rem;
  border-right: 1px solid ${e=>e.theme.colors.border.light};
  position: relative;
  
  &:last-child {
    border-right: none;
  }
`,a9=a.div`
  background-color: ${e=>`${e.$color}15`}; /* 15% opacity */
  border-left: 3px solid ${e=>e.$color};
  border-radius: 0.25rem;
  padding: 0.5rem;
  height: ${e=>`calc(${e.$duration*5}rem - 0.75rem)`};
  cursor: pointer;
  transition: all 0.2s ease;
  overflow: hidden;
  
  &:hover {
    background-color: ${e=>`${e.$color}25`}; /* 25% opacity */
  }
`,l9=a.div`
  font-weight: 500;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${e=>e.theme.colors.text.primary};
`,c9=a.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 0.25rem;
`,d9=a.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: ${e=>e.theme.colors.text.secondary};
`,u9=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 0.5rem;
  padding: 3rem;
  text-align: center;
  color: ${e=>e.theme.colors.text.secondary};
  gap: 1rem;
  
  svg {
    color: ${e=>e.theme.colors.primary[400]};
  }
  
  p {
    margin: 0;
    max-width: 30rem;
  }
`,h9=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,m9=a.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`,p9=a.div`
  width: 100%;
  max-width: 30rem;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 0.5rem;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`,f9=a.div`
  background-color: ${e=>e.$color};
  color: white;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }
`,g9=a.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border-radius: 9999px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`,x9=a.div`
  padding: 1.5rem;
`,Ci=a.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: ${e=>e.theme.colors.text.primary};
  
  svg {
    color: ${e=>e.theme.colors.text.secondary};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`,y9=a.div`
  padding: 1rem 1.5rem;
  background-color: ${e=>e.theme.colors.background.secondary};
  display: flex;
  justify-content: flex-end;
`,v9=a.button`
  background-color: ${e=>e.theme.colors.primary[500]};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[600]};
  }
`,b9=()=>{var P;const[e,t]=j.useState(null),[r,o]=j.useState(""),[i,s]=j.useState(""),[l,c]=j.useState(!1),[d,u]=j.useState(!1),[h,m]=j.useState(!1),p=j.useRef(null),b=1,v=[{id:"1",participants:[{id:1,name:"You (Teacher)",avatar:"https://randomuser.me/api/portraits/men/32.jpg",role:"teacher",status:"online"},{id:2,name:"John Smith",avatar:"https://randomuser.me/api/portraits/men/42.jpg",role:"student",status:"online"}],lastMessage:{id:"m1",content:"I have a question about the homework assignment",timestamp:new Date(Date.now()-1e3*60*5),sender:"John Smith",senderId:2,isRead:!1},unreadCount:1},{id:"2",participants:[{id:1,name:"You (Teacher)",avatar:"https://randomuser.me/api/portraits/men/32.jpg",role:"teacher",status:"online"},{id:3,name:"Emily Johnson",avatar:"https://randomuser.me/api/portraits/women/26.jpg",role:"student",status:"offline",lastActive:new Date(Date.now()-1e3*60*30)}],lastMessage:{id:"m2",content:"Thank you for the feedback on my project!",timestamp:new Date(Date.now()-1e3*60*60*2),sender:"You (Teacher)",senderId:1,isRead:!0},unreadCount:0},{id:"3",isGroup:!0,name:"Math Class Group",participants:[{id:1,name:"You (Teacher)",avatar:"https://randomuser.me/api/portraits/men/32.jpg",role:"teacher",status:"online"},{id:2,name:"John Smith",avatar:"https://randomuser.me/api/portraits/men/42.jpg",role:"student",status:"online"},{id:3,name:"Emily Johnson",avatar:"https://randomuser.me/api/portraits/women/26.jpg",role:"student",status:"offline"},{id:4,name:"Michael Brown",avatar:"https://randomuser.me/api/portraits/men/55.jpg",role:"student",status:"away"}],lastMessage:{id:"m3",content:"Don't forget about the quiz tomorrow!",timestamp:new Date(Date.now()-1e3*60*60*24),sender:"You (Teacher)",senderId:1,isRead:!0},unreadCount:0},{id:"4",participants:[{id:1,name:"You (Teacher)",avatar:"https://randomuser.me/api/portraits/men/32.jpg",role:"teacher",status:"online"},{id:5,name:"Sarah Wilson",avatar:"https://randomuser.me/api/portraits/women/33.jpg",role:"student",status:"online"}],lastMessage:{id:"m4",content:"I'll be absent tomorrow due to a doctor's appointment",timestamp:new Date(Date.now()-1e3*60*60*4),sender:"Sarah Wilson",senderId:5,isRead:!0},unreadCount:0}],$={1:[{id:"m1-1",content:"Hello, how can I help you today?",timestamp:new Date(Date.now()-1e3*60*15),sender:"You (Teacher)",senderId:1,isRead:!0},{id:"m1-2",content:"I have a question about the homework assignment",timestamp:new Date(Date.now()-1e3*60*5),sender:"John Smith",senderId:2,isRead:!1}],2:[{id:"m2-1",content:"Hi Emily, I've reviewed your project",timestamp:new Date(Date.now()-1e3*60*60*3),sender:"You (Teacher)",senderId:1,isRead:!0},{id:"m2-2",content:"Great work on the analysis section!",timestamp:new Date(Date.now()-1e3*60*60*3+1e3*30),sender:"You (Teacher)",senderId:1,isRead:!0},{id:"m2-3",content:"Thank you for the feedback on my project!",timestamp:new Date(Date.now()-1e3*60*60*2),sender:"Emily Johnson",senderId:3,isRead:!0}],3:[{id:"m3-1",content:"Hello everyone, welcome to the Math Class Group!",timestamp:new Date(Date.now()-1e3*60*60*24*2),sender:"You (Teacher)",senderId:1,isRead:!0},{id:"m3-2",content:"We'll use this group for class announcements",timestamp:new Date(Date.now()-1e3*60*60*24*2+1e3*60),sender:"You (Teacher)",senderId:1,isRead:!0},{id:"m3-3",content:"Thanks for creating this group!",timestamp:new Date(Date.now()-1e3*60*60*24*2+1e3*60*5),sender:"John Smith",senderId:2,isRead:!0},{id:"m3-4",content:"Don't forget about the quiz tomorrow!",timestamp:new Date(Date.now()-1e3*60*60*24),sender:"You (Teacher)",senderId:1,isRead:!0}],4:[{id:"m4-1",content:"Hi Sarah, how are you doing with the assignment?",timestamp:new Date(Date.now()-1e3*60*60*5),sender:"You (Teacher)",senderId:1,isRead:!0},{id:"m4-2",content:"I'm working on it, but I have a doctor's appointment tomorrow",timestamp:new Date(Date.now()-1e3*60*60*4-1e3*60),sender:"Sarah Wilson",senderId:5,isRead:!0},{id:"m4-3",content:"I'll be absent tomorrow due to a doctor's appointment",timestamp:new Date(Date.now()-1e3*60*60*4),sender:"Sarah Wilson",senderId:5,isRead:!0}]},[k,y]=j.useState(v),[x,g]=j.useState($);j.useEffect(()=>{k.length>0&&!e&&t(k[0].id)},[k,e]),j.useEffect(()=>{var w;(w=p.current)==null||w.scrollIntoView({behavior:"smooth"})},[e,x]);const f=k.filter(w=>{if(w.isGroup&&w.name)return w.name.toLowerCase().includes(r.toLowerCase());const A=w.participants.find(T=>T.id!==b);return A?A.name.toLowerCase().includes(r.toLowerCase()):!1}),S=()=>{if(!i.trim()||!e)return;const w={id:`m-${Date.now()}`,content:i,timestamp:new Date,sender:"You (Teacher)",senderId:b,isRead:!1};g(A=>({...A,[e]:[...A[e]||[],w]})),y(A=>A.map(T=>T.id===e?{...T,lastMessage:w,unreadCount:0}:T)),s(""),c(!1),u(!1)},C=w=>{const T=(new Date().getTime()-w.getTime())/(1e3*60*60);return T<24?w.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):T<48?"Yesterday":w.toLocaleDateString([],{month:"short",day:"numeric"})};return n.jsxs(w9,{as:E.div,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[n.jsxs($9,{children:[n.jsxs("div",{children:[n.jsx(j9,{children:"Messages"}),n.jsx(k9,{children:"Chat with students and groups"})]}),n.jsx(C9,{children:n.jsxs(S9,{onClick:()=>console.log("New message"),children:[n.jsx(Qt,{size:16}),n.jsx("span",{children:"New Message"})]})})]}),n.jsxs(P9,{children:[n.jsxs(T9,{className:h?"hidden":"",as:E.div,initial:{x:-20,opacity:0},animate:{x:0,opacity:1},transition:{duration:.3},children:[n.jsxs(A9,{children:[n.jsx(z9,{children:n.jsx(Se,{})}),n.jsx(M9,{type:"text",placeholder:"Search messages...",value:r,onChange:w=>o(w.target.value)})]}),n.jsx(D9,{children:n.jsx(ne,{children:f.map(w=>{const A=w.isGroup?null:w.participants.find(T=>T.id!==b);return n.jsxs(E9,{$isActive:e===w.id,$hasUnread:w.unreadCount>0,onClick:()=>{t(w.id),m(!0)},as:E.div,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.2},whileHover:{x:3},children:[n.jsxs(Jw,{children:[w.isGroup?n.jsx(Dx,{children:n.jsx(Ae,{size:22})}):n.jsx(Mx,{src:(A==null?void 0:A.avatar)||"",alt:(A==null?void 0:A.name)||""}),(A==null?void 0:A.status)==="online"&&n.jsx(Ex,{$status:"online"})]}),n.jsxs(L9,{children:[n.jsx(R9,{children:w.isGroup?w.name:A==null?void 0:A.name}),n.jsx(I9,{children:w.lastMessage.content.length>35?`${w.lastMessage.content.substring(0,35)}...`:w.lastMessage.content})]}),n.jsxs(F9,{children:[n.jsx(Lx,{$isCurrentUser:!1,children:C(w.lastMessage.timestamp)}),w.unreadCount>0&&n.jsx(B9,{children:w.unreadCount})]})]},w.id)})})})]}),n.jsx(N9,{className:h?"":"hidden",children:e?n.jsxs(n.Fragment,{children:[n.jsxs(O9,{children:[h&&n.jsx(V9,{onClick:()=>m(!1),children:n.jsx(Kt,{})}),(()=>{const w=k.find(T=>T.id===e);if(!w)return null;const A=w.isGroup?null:w.participants.find(T=>T.id!==b);return n.jsxs(_9,{children:[n.jsxs(W9,{children:[w.isGroup?n.jsx(Dx,{children:n.jsx(Ae,{size:22})}):n.jsx(Mx,{src:(A==null?void 0:A.avatar)||"",alt:(A==null?void 0:A.name)||""}),(A==null?void 0:A.status)==="online"&&n.jsx(Ex,{$status:"online"})]}),n.jsxs(U9,{children:[n.jsx(H9,{children:w.isGroup?w.name:A==null?void 0:A.name}),n.jsx(G9,{children:w.isGroup?`${w.participants.length} participants`:(A==null?void 0:A.status)==="online"?"Online":(A==null?void 0:A.status)==="away"?"Away":"Offline"})]})]})})(),n.jsxs(Y9,{children:[n.jsx(Zd,{title:"Audio Call",children:n.jsx(k6,{})}),n.jsx(Zd,{title:"Video Call",children:n.jsx(gp,{})}),n.jsx(Zd,{title:"Info",children:n.jsx(_n,{})})]})]}),n.jsxs(q9,{children:[n.jsx(ne,{children:e&&((P=x[e])==null?void 0:P.map((w,A)=>n.jsx(Q9,{$isCurrentUser:w.senderId===b,as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:A*.05},children:n.jsxs(K9,{$isCurrentUser:w.senderId===b,children:[n.jsx(X9,{children:w.content}),n.jsxs(Lx,{$isCurrentUser:w.senderId===b,children:[C(w.timestamp),w.senderId===b&&n.jsx(J9,{children:w.isRead?n.jsx(Wl,{style:{color:"#4CAF50"}}):n.jsx(Wl,{})})]})]})},w.id)))}),n.jsx("div",{ref:p})]}),n.jsxs(Z9,{children:[n.jsx(Yl,{onClick:()=>u(!d),children:n.jsx(fp,{})}),d&&n.jsxs(eF,{children:[n.jsx(Rx,{title:"Send Image",children:n.jsx(b6,{})}),n.jsx(Rx,{title:"Send File",children:n.jsx(Lh,{})})]}),n.jsx(tF,{placeholder:"Type a message...",value:i,onChange:w=>s(w.target.value),onKeyPress:w=>w.key==="Enter"&&S()}),n.jsx(Yl,{onClick:()=>c(!l),children:n.jsx(Ow,{})}),n.jsx(rF,{disabled:!i.trim(),onClick:S,children:n.jsx(Bw,{})})]})]}):n.jsxs(nF,{children:[n.jsx(Ac,{size:48}),n.jsx(oF,{children:"No Conversation Selected"}),n.jsx(iF,{children:"Choose a conversation from the list to start messaging"})]})})]})]})},w9=a.div`
  padding: 1rem 0;
`,$9=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`,j9=a.h1`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0;
  color: ${e=>e.theme.colors.text.primary};
`,k9=a.p`
  font-size: 0.875rem;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 0.25rem 0 0;
`,C9=a.div`
  display: flex;
  gap: 1rem;
`,S9=a.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${e=>e.theme.colors.primary[500]};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary[600]};
  }
`,P9=a.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 1rem;
  height: calc(100vh - 180px);
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    
    .hidden {
      display: none;
    }
  }
`,T9=a.div`
  background-color: ${e=>e.theme.colors.background.secondary};
  border-right: 1px solid ${e=>e.theme.colors.border.light};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,A9=a.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,z9=a.div`
  color: ${e=>e.theme.colors.text.secondary};
  margin-right: 0.5rem;
`,M9=a.input`
  flex: 1;
  border: none;
  background: transparent;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.875rem;
  outline: none;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
`,D9=a.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem 0;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${e=>e.theme.colors.border.light};
    border-radius: 3px;
  }
`,E9=a.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${e=>e.$isActive?`${e.theme.colors.primary[500]}15`:"transparent"};
  border-left: 3px solid ${e=>e.$isActive?e.theme.colors.primary[500]:"transparent"};
  
  &:hover {
    background-color: ${e=>e.$isActive?`${e.theme.colors.primary[500]}15`:e.theme.colors.background.hover};
  }
`,Jw=a.div`
  position: relative;
  margin-right: 0.75rem;
  flex-shrink: 0;
`,Mx=a.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${e=>e.theme.colors.background.primary};
`,Dx=a.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.primary[100]};
  color: ${e=>e.theme.colors.primary[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${e=>e.theme.colors.background.primary};
`,Ex=a.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${e=>e.$status==="online"?"#4CAF50":e.$status==="away"?"#FFC107":"#9E9E9E"};
  border: 2px solid ${e=>e.theme.colors.background.primary};
`,L9=a.div`
  flex: 1;
  min-width: 0;
`,R9=a.div`
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,I9=a.div`
  font-size: 0.75rem;
  color: ${e=>e.theme.colors.text.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,F9=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 0.5rem;
`,Lx=a.div`
  font-size: 0.7rem;
  color: ${e=>e.theme.colors.text.tertiary};
  margin-bottom: 0.25rem;
`,B9=a.div`
  background-color: ${e=>e.theme.colors.primary[500]};
  color: white;
  font-size: 0.7rem;
  font-weight: 500;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,N9=a.div`
  display: flex;
  flex-direction: column;
  background-color: ${e=>e.theme.colors.background.primary};
  overflow: hidden;
`,O9=a.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  background-color: ${e=>e.theme.colors.background.secondary};
`,V9=a.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.text.primary};
  cursor: pointer;
  padding: 0.375rem;
  margin-right: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`,_9=a.div`
  display: flex;
  align-items: center;
  flex: 1;
`,W9=a(Jw)`
  margin-right: 0.75rem;
`,U9=a.div`
  flex: 1;
`,H9=a.div`
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,G9=a.div`
  font-size: 0.75rem;
  color: ${e=>e.theme.colors.text.secondary};
`,Y9=a.div`
  display: flex;
  gap: 0.5rem;
`,Zd=a.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  padding: 0.375rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
    color: ${e=>e.theme.colors.primary[500]};
  }
`,q9=a.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${e=>e.theme.colors.border.light};
    border-radius: 3px;
  }
`,Q9=a.div`
  display: flex;
  justify-content: ${e=>e.$isCurrentUser?"flex-end":"flex-start"};
  margin-bottom: 1rem;
`,K9=a.div`
  max-width: 70%;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  border-bottom-right-radius: ${e=>e.$isCurrentUser?"0.25rem":"1rem"};
  border-bottom-left-radius: ${e=>e.$isCurrentUser?"1rem":"0.25rem"};
  background-color: ${e=>e.$isCurrentUser?e.theme.colors.primary[500]:e.theme.colors.background.secondary};
  color: ${e=>e.$isCurrentUser?"white":e.theme.colors.text.primary};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`,X9=a.div`
  font-size: 0.875rem;
  line-height: 1.5;
  word-break: break-word;
`,J9=a.div`
  display: flex;
`,Z9=a.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-top: 1px solid ${e=>e.theme.colors.border.light};
  background-color: ${e=>e.theme.colors.background.secondary};
  position: relative;
`,Yl=a.button`
  border: none;
  background: none;
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${e=>e.theme.colors.primary[500]};
  }
`,eF=a.div`
  position: absolute;
  bottom: 100%;
  left: 1rem;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  z-index: 10;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 15px;
    width: 10px;
    height: 10px;
    background-color: ${e=>e.theme.colors.background.primary};
    transform: rotate(45deg);
  }
`,Rx=a(Yl)`
  background-color: ${e=>e.theme.colors.background.secondary};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
`,tF=a.input`
  flex: 1;
  border: none;
  background-color: transparent;
  padding: 0.5rem 0.75rem;
  border-radius: 1.5rem;
  outline: none;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 0.875rem;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
`,rF=a(Yl)`
  color: ${e=>e.disabled?e.theme.colors.text.tertiary:e.theme.colors.primary[500]};
  pointer-events: ${e=>e.disabled?"none":"auto"};
`,nF=a.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: ${e=>e.theme.colors.text.tertiary};
`,oF=a.h2`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 1rem 0 0.5rem;
  color: ${e=>e.theme.colors.text.primary};
`,iF=a.p`
  font-size: 0.875rem;
  text-align: center;
  max-width: 20rem;
  margin: 0;
`,sF=()=>{const[e,t]=j.useState(""),[r,o]=j.useState("all"),s=[{id:1,name:"Mathematics",teacher:"Dr. Smith",progress:75,nextClass:"Tomorrow, 9:00 AM",description:"Advanced algebra and calculus concepts for college preparation.",startDate:"2023-01-15",endDate:"2023-06-30",creditHours:4,materials:12,assignments:8,status:"active"},{id:2,name:"Physics",teacher:"Prof. Johnson",progress:60,nextClass:"Thursday, 11:30 AM",description:"Mechanics, thermodynamics, and introduction to electromagnetism.",startDate:"2023-01-15",endDate:"2023-06-30",creditHours:4,materials:15,assignments:10,status:"active"},{id:3,name:"English Literature",teacher:"Mrs. Davis",progress:100,nextClass:"Completed",description:"Analysis of classic and contemporary literary works with focus on critical thinking.",startDate:"2022-09-01",endDate:"2022-12-15",creditHours:3,materials:20,assignments:6,status:"completed"},{id:4,name:"Chemistry",teacher:"Dr. Wilson",progress:50,nextClass:"Friday, 10:15 AM",description:"Fundamental principles of chemistry including atomic structure and chemical bonding.",startDate:"2023-01-15",endDate:"2023-06-30",creditHours:4,materials:18,assignments:9,status:"active"},{id:5,name:"World History",teacher:"Prof. Anderson",progress:100,nextClass:"Completed",description:"Survey of major historical events and civilizations from ancient times to present day.",startDate:"2022-09-01",endDate:"2022-12-15",creditHours:3,materials:22,assignments:7,status:"completed"},{id:6,name:"Computer Science",teacher:"Dr. Roberts",progress:0,nextClass:"Starts July 15",description:"Introduction to programming concepts, algorithms, and data structures.",startDate:"2023-07-15",endDate:"2023-12-20",creditHours:4,materials:16,assignments:12,status:"upcoming"},{id:7,name:"Introduction to Psychology",teacher:"Dr. Martinez",progress:0,nextClass:"Starts July 10",description:"Exploration of human behavior, cognitive processes, and psychological theories.",startDate:"2023-07-10",endDate:"2023-12-18",creditHours:3,materials:14,assignments:8,status:"upcoming"}].filter(l=>{const c=l.name.toLowerCase().includes(e.toLowerCase())||l.teacher.toLowerCase().includes(e.toLowerCase());return r==="all"?c:c&&l.status===r});return n.jsxs(aF,{children:[n.jsx(lF,{children:n.jsxs(cF,{children:[n.jsx(dF,{children:"My Courses"}),n.jsx(uF,{children:"View and manage your enrolled courses"})]})}),n.jsxs(hF,{children:[n.jsxs(mF,{children:[n.jsx(pF,{children:n.jsx(Se,{size:18})}),n.jsx(fF,{type:"text",placeholder:"Search courses...",value:e,onChange:l=>t(l.target.value)})]}),n.jsxs(gF,{children:[n.jsx(La,{$isActive:r==="all",onClick:()=>o("all"),children:"All Courses"}),n.jsx(La,{$isActive:r==="active",onClick:()=>o("active"),children:"Active"}),n.jsx(La,{$isActive:r==="completed",onClick:()=>o("completed"),children:"Completed"}),n.jsx(La,{$isActive:r==="upcoming",onClick:()=>o("upcoming"),children:"Upcoming"})]})]}),n.jsx(xF,{children:s.map(l=>n.jsxs(yF,{as:E.div,whileHover:{y:-5},children:[n.jsx(vF,{$progress:l.progress,children:n.jsxs(bF,{children:[n.jsxs(wF,{children:[l.progress,"% Complete"]}),n.jsx($F,{children:n.jsx(jF,{$progress:l.progress})})]})}),n.jsxs(kF,{children:[n.jsx(CF,{children:n.jsx(Ce,{size:24})}),n.jsxs(SF,{children:[n.jsx(PF,{children:l.name}),n.jsxs(TF,{children:[n.jsx($t,{size:14}),n.jsx("span",{children:l.teacher})]}),n.jsx(AF,{children:l.description}),n.jsxs(zF,{children:[n.jsxs(eu,{children:[n.jsx(tu,{children:"Start Date"}),n.jsx(ru,{children:new Date(l.startDate).toLocaleDateString()})]}),n.jsxs(eu,{children:[n.jsx(tu,{children:"End Date"}),n.jsx(ru,{children:new Date(l.endDate).toLocaleDateString()})]}),n.jsxs(eu,{children:[n.jsx(tu,{children:"Credit Hours"}),n.jsx(ru,{children:l.creditHours})]})]}),n.jsxs(MF,{children:[n.jsxs(Ix,{children:[n.jsx(Fx,{children:l.materials}),n.jsx(Bx,{children:"Materials"})]}),n.jsxs(Ix,{children:[n.jsx(Fx,{children:l.assignments}),n.jsx(Bx,{children:"Assignments"})]})]})]})]}),n.jsxs(DF,{children:[n.jsxs(EF,{children:[n.jsx(ze,{size:14}),n.jsxs("span",{children:["Next Class: ",l.nextClass]})]}),n.jsxs(LF,{children:["View Course",n.jsx(Ce,{size:14})]})]})]},l.id))})]})},aF=a.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,lF=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,cF=a.div`
  display: flex;
  flex-direction: column;
`,dF=a.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0;
`,uF=a.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 4px 0 0 0;
`,hF=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: ${e=>e.theme.shadows.sm};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,mF=a.div`
  display: flex;
  align-items: center;
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: 8px;
  padding: 0 12px;
  width: 100%;
  max-width: 320px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    max-width: 100%;
  }
`,pF=a.div`
  color: ${e=>e.theme.colors.text.secondary};
  margin-right: 8px;
`,fF=a.input`
  border: none;
  background: transparent;
  height: 40px;
  width: 100%;
  color: ${e=>e.theme.colors.text.primary};
  outline: none;
  font-size: 14px;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.secondary};
  }
`,gF=a.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,La=a.button`
  background-color: ${e=>e.$isActive?e.children==="All Courses"?"#4F46E5":e.theme.colors.primary:"transparent"};
  color: ${e=>e.$isActive?"white":e.theme.colors.text.secondary};
  border: 1px solid ${e=>e.$isActive?e.children==="All Courses"?"#4F46E5":e.theme.colors.primary:e.theme.colors.border.light};
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.$isActive?e.children==="All Courses"?"#4338CA":e.theme.colors.primary:e.theme.colors.background.hover};
  }
`,xF=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 20px;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,yF=a(en)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 12px;
  border: 1px solid ${e=>e.theme.colors.border.light};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${e=>e.theme.shadows.md};
  }
`,vF=a.div`
  background: linear-gradient(135deg, 
    ${e=>{const t=e.theme.colors.primary;return`${t}30, ${t}10`}}
  );
  padding: 16px;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,bF=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,wF=a.div`
  color: ${e=>e.theme.colors.text.primary};
  font-size: 14px;
  font-weight: 500;
`,$F=a.div`
  height: 6px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  overflow: hidden;
`,jF=a.div`
  height: 100%;
  width: ${e=>e.$progress}%;
  background-color: ${e=>e.theme.colors.primary};
  border-radius: 3px;
`,kF=a.div`
  padding: 20px;
  display: flex;
  gap: 16px;
  flex: 1;
  background-color: ${e=>e.theme.colors.background.secondary};
`,CF=a.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: ${e=>`${e.theme.colors.primary}20`};
  color: ${e=>e.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,SF=a.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,PF=a.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,TF=a.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  margin-top: -8px;
`,AF=a.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  line-height: 1.5;
  margin-bottom: 8px;
  max-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,zF=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 12px;
  background-color: ${e=>e.theme.colors.background.hover};
  border-radius: 8px;
  padding: 12px;
`,eu=a.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,tu=a.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
`,ru=a.div`
  font-size: 14px;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,MF=a.div`
  display: flex;
  gap: 24px;
  margin-top: 8px;
`,Ix=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,Fx=a.div`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.colors.primary};
`,Bx=a.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
`,DF=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-top: 1px solid ${e=>e.theme.colors.border.light};
  background-color: ${e=>e.theme.colors.background.primary};
`,EF=a.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${e=>e.theme.colors.text.secondary};
  font-size: 14px;
`,LF=a.button`
  background-color: #4F46E5;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    background-color: #4338CA;
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.sm};
  }
  
  &:active {
    transform: translateY(0);
  }
`,RF=()=>{const[e,t]=j.useState(""),[r,o]=j.useState(null),[i,s]=j.useState(!1),[l,c]=j.useState("all"),d=[{id:1,name:"Mathematics",teacher:"Dr. Smith"},{id:2,name:"Physics",teacher:"Prof. Johnson"},{id:3,name:"English Literature",teacher:"Mrs. Davis"},{id:4,name:"Chemistry",teacher:"Dr. Wilson"},{id:5,name:"World History",teacher:"Prof. Anderson"},{id:6,name:"Computer Science",teacher:"Dr. Roberts"}],h=[{id:1,title:"Introduction to Algebra",courseId:1,courseName:"Mathematics",type:"video",duration:"45 min",thumbnail:"https://img.youtube.com/vi/NybHckSEQBI/hqdefault.jpg",description:"Learn the fundamentals of algebraic expressions and equations.",dateAdded:"2023-04-05",completed:!0,materials:[{id:1,name:"Algebra Cheat Sheet",type:"pdf",size:"2.3 MB"},{id:2,name:"Practice Problems",type:"doc",size:"1.5 MB"}]},{id:2,title:"Quadratic Functions",courseId:1,courseName:"Mathematics",type:"video",duration:"52 min",thumbnail:"https://img.youtube.com/vi/2ZzuZvz33X0/hqdefault.jpg",description:"Understanding quadratic functions and their graphs.",dateAdded:"2023-04-10",completed:!0,materials:[{id:3,name:"Quadratic Functions Slides",type:"ppt",size:"3.1 MB"},{id:4,name:"Example Problems",type:"pdf",size:"1.8 MB"}]},{id:3,title:"Newton's Laws of Motion",courseId:2,courseName:"Physics",type:"video",duration:"63 min",thumbnail:"https://img.youtube.com/vi/kKKM8Y-u7ds/hqdefault.jpg",description:"Comprehensive explanation of Newton's three laws of motion.",dateAdded:"2023-04-12",completed:!1,materials:[{id:5,name:"Newton's Laws Summary",type:"pdf",size:"1.2 MB"},{id:6,name:"Physics Lab Instructions",type:"docx",size:"1.7 MB"}]},{id:4,title:"Shakespeare's Macbeth: Analysis",courseId:3,courseName:"English Literature",type:"reading",duration:"30 min",thumbnail:"https://www.folger.edu/sites/default/files/styles/hero_tablet_modern_1x/public/2022-12/Macbeth-FC-header.jpg",description:"Critical analysis of themes and motifs in Macbeth.",dateAdded:"2023-04-15",completed:!1,materials:[{id:7,name:"Macbeth Full Text",type:"pdf",size:"4.5 MB"},{id:8,name:"Character Analysis Guide",type:"pdf",size:"2.2 MB"}]},{id:5,title:"Periodic Table Overview",courseId:4,courseName:"Chemistry",type:"interactive",duration:"40 min",thumbnail:"https://sciencenotes.org/wp-content/uploads/2023/01/Colorful-Periodic-Table-Trends.png",description:"Interactive exploration of the periodic table elements.",dateAdded:"2023-04-18",completed:!1,materials:[{id:9,name:"Periodic Table Guide",type:"pdf",size:"3.5 MB"},{id:10,name:"Element Properties Worksheet",type:"docx",size:"1.3 MB"}]},{id:6,title:"World War II: Causes and Effects",courseId:5,courseName:"World History",type:"video",duration:"55 min",thumbnail:"https://www.nationalww2museum.org/sites/default/files/styles/wide_medium/public/2017-07/battle%20of%20midway.jpg",description:"Detailed analysis of the causes and global impact of World War II.",dateAdded:"2023-04-20",completed:!1,materials:[{id:11,name:"WWII Timeline",type:"pdf",size:"2.8 MB"},{id:12,name:"Historical Documents",type:"zip",size:"5.2 MB"}]},{id:7,title:"Introduction to Python Programming",courseId:6,courseName:"Computer Science",type:"interactive",duration:"50 min",thumbnail:"https://www.python.org/static/community_logos/python-logo.png",description:"Learn the basics of Python programming with interactive exercises.",dateAdded:"2023-04-22",completed:!1,materials:[{id:13,name:"Python Basics Handbook",type:"pdf",size:"4.1 MB"},{id:14,name:"Sample Code Files",type:"zip",size:"3.7 MB"}]}].filter(v=>{const $=v.title.toLowerCase().includes(e.toLowerCase())||v.description.toLowerCase().includes(e.toLowerCase()),k=r?v.courseId===parseInt(r):!0,y=l==="all"?!0:l==="completed"?v.completed:!v.completed;return $&&k&&y}),m=v=>{o(v),s(!1)},p=v=>{switch(v){case"video":return n.jsx(ig,{size:16});case"reading":return n.jsx(Ft,{size:16});case"interactive":return n.jsx(Ce,{size:16});default:return n.jsx(Lh,{size:16})}},b=v=>{if(!v)return"All Courses";const $=d.find(k=>k.id===parseInt(v));return $?$.name:"All Courses"};return n.jsxs(IF,{children:[n.jsx(FF,{children:n.jsxs(BF,{children:[n.jsx(NF,{children:"Lessons"}),n.jsx(OF,{children:"Access your course lessons and materials"})]})}),n.jsxs(VF,{children:[n.jsxs(_F,{children:[n.jsx(WF,{children:n.jsx(Se,{size:18})}),n.jsx(UF,{type:"text",placeholder:"Search lessons...",value:e,onChange:v=>t(v.target.value)})]}),n.jsxs(HF,{children:[n.jsxs(GF,{children:[n.jsxs(YF,{onClick:()=>s(!i),children:[n.jsx("span",{children:b(r)}),n.jsx(ue,{size:16})]}),i&&n.jsxs(qF,{children:[n.jsx(Nx,{onClick:()=>m(null),$isSelected:r===null,children:"All Courses"}),d.map(v=>n.jsx(Nx,{onClick:()=>m(v.id.toString()),$isSelected:r===v.id.toString(),children:v.name},v.id))]})]}),n.jsxs(QF,{children:[n.jsx(nu,{$isActive:l==="all",onClick:()=>c("all"),children:"All"}),n.jsx(nu,{$isActive:l==="in-progress",onClick:()=>c("in-progress"),children:"In Progress"}),n.jsx(nu,{$isActive:l==="completed",onClick:()=>c("completed"),children:"Completed"})]})]})]}),n.jsx(KF,{children:h.map(v=>n.jsxs(XF,{as:E.div,whileHover:{y:-5},children:[n.jsxs(JF,{$completed:v.completed,children:[n.jsxs(eB,{children:[p(v.type),n.jsx("span",{children:v.type.charAt(0).toUpperCase()+v.type.slice(1)})]}),n.jsx(ZF,{src:v.thumbnail,alt:v.title}),n.jsxs(tB,{children:[n.jsx(Fe,{size:14}),n.jsx("span",{children:v.duration})]}),v.completed&&n.jsxs(rB,{children:[n.jsx(fr,{size:16}),n.jsx("span",{children:"Completed"})]}),n.jsx(nB,{className:"play-overlay",children:n.jsx(oB,{children:n.jsx(ig,{size:24})})})]}),n.jsxs(iB,{children:[n.jsxs(sB,{children:[n.jsx(aB,{children:v.courseName}),n.jsx(lB,{children:v.title}),n.jsx(cB,{children:v.description})]}),n.jsxs(dB,{children:[n.jsx(uB,{children:"Materials"}),n.jsx(hB,{children:v.materials.map($=>n.jsxs(mB,{children:[n.jsxs(pB,{children:[n.jsx(fB,{children:n.jsx(Lh,{size:14})}),n.jsx(gB,{children:$.name})]}),n.jsxs(xB,{children:[n.jsx(yB,{children:$.size}),n.jsx(vB,{children:n.jsx(qn,{size:14})})]})]},$.id))})]})]}),n.jsxs(bB,{children:[n.jsxs(wB,{children:["Added ",new Date(v.dateAdded).toLocaleDateString()]}),n.jsx($B,{children:v.completed?"Review Again":"Start Lesson"})]})]},v.id))}),h.length===0&&n.jsxs(jB,{children:[n.jsx(gp,{size:40}),n.jsx("h3",{children:"No lessons found"}),n.jsx("p",{children:"Try adjusting your search or filters to find lessons"})]})]})},IF=a.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,FF=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,BF=a.div`
  display: flex;
  flex-direction: column;
`,NF=a.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0;
`,OF=a.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 4px 0 0 0;
`,VF=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: ${e=>e.theme.shadows.sm};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,_F=a.div`
  display: flex;
  align-items: center;
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: 8px;
  padding: 0 12px;
  width: 100%;
  max-width: 320px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    max-width: 100%;
  }
`,WF=a.div`
  color: ${e=>e.theme.colors.text.secondary};
  margin-right: 8px;
`,UF=a.input`
  border: none;
  background: transparent;
  height: 40px;
  width: 100%;
  color: ${e=>e.theme.colors.text.primary};
  outline: none;
  font-size: 14px;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.secondary};
  }
`,HF=a.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    justify-content: space-between;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,GF=a.div`
  position: relative;
`,YF=a.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.primary};
  background-color: ${e=>e.theme.colors.background.secondary};
  min-width: 180px;
  justify-content: space-between;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
`,qF=a.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: 8px;
  box-shadow: ${e=>e.theme.shadows.md};
  z-index: 10;
  max-height: 300px;
  overflow-y: auto;
`,Nx=a.div`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  color: ${e=>e.$isSelected?e.theme.colors.primary:e.theme.colors.text.primary};
  background-color: ${e=>e.$isSelected?`${e.theme.colors.primary}10`:"transparent"};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
  
  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`,QF=a.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,nu=a.button`
  background-color: ${e=>e.$isActive?e.children==="All"?"#4F46E5":e.theme.colors.primary:"transparent"};
  color: ${e=>e.$isActive?"white":e.theme.colors.text.secondary};
  border: 1px solid ${e=>e.$isActive?e.children==="All"?"#4F46E5":e.theme.colors.primary:e.theme.colors.border.light};
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.$isActive?e.children==="All"?"#4338CA":e.theme.colors.primary:e.theme.colors.background.hover};
  }
`,KF=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,XF=a(en)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-radius: 12px;
  border: 1px solid ${e=>e.theme.colors.border.light};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${e=>e.theme.shadows.md};
    
    .play-overlay {
      opacity: 1;
    }
  }
`,JF=a.div`
  position: relative;
  height: 180px;
  overflow: hidden;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6));
    pointer-events: none;
  }
  
  ${e=>e.$completed&&`
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 1;
    }
  `}
`,ZF=a.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,eB=a.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 6px 8px;
  color: white;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
`,tB=a.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 6px 8px;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
`,rB=a.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: rgba(46, 125, 50, 0.9);
  border-radius: 4px;
  padding: 6px 8px;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
`,nB=a.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.2s ease;
  z-index: 3;
`,oB=a.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  color: #4F46E5;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`,iB=a.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  flex: 1;
  background-color: ${e=>e.theme.colors.background.secondary};
`,sB=a.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,aB=a.div`
  font-size: 12px;
  font-weight: 500;
  color: ${e=>e.theme.colors.primary};
  text-transform: uppercase;
`,lB=a.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,cB=a.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  line-height: 1.5;
`,dB=a.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
  padding-top: 16px;
  border-top: 1px solid ${e=>e.theme.colors.border.light};
`,uB=a.h4`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,hB=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,mB=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  background-color: ${e=>e.theme.colors.background.hover};
  
  &:hover {
    background-color: ${e=>`${e.theme.colors.primary}10`};
  }
`,pB=a.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,fB=a.div`
  color: ${e=>e.theme.colors.text.secondary};
`,gB=a.div`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,xB=a.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,yB=a.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
`,vB=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  border: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.text.secondary};
  cursor: pointer;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.primary};
    color: ${e=>e.theme.colors.primary};
  }
`,bB=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-top: 1px solid ${e=>e.theme.colors.border.light};
  background-color: ${e=>e.theme.colors.background.primary};
`,wB=a.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
`,$B=a.button`
  background-color: #4F46E5;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #4338CA;
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.sm};
  }
  
  &:active {
    transform: translateY(0);
  }
`,jB=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  color: ${e=>e.theme.colors.text.secondary};
  text-align: center;
  
  h3 {
    margin: 16px 0 8px 0;
    font-size: 18px;
    font-weight: 600;
    color: ${e=>e.theme.colors.text.primary};
  }
  
  p {
    margin: 0;
    font-size: 14px;
  }
`,Fh=e=>{switch(e){case"completed":return"#4caf50";case"in-progress":return"#2196f3";case"overdue":return"#f44336";case"upcoming":return"#ff9800";default:return"#9e9e9e"}},kB=()=>{const[e,t]=j.useState(""),[r,o]=j.useState(null),[i,s]=j.useState(!1),[l,c]=j.useState("all"),d=[{id:1,name:"Mathematics",teacher:"Dr. Smith"},{id:2,name:"Physics",teacher:"Prof. Johnson"},{id:3,name:"English Literature",teacher:"Mrs. Davis"},{id:4,name:"Chemistry",teacher:"Dr. Wilson"},{id:5,name:"World History",teacher:"Prof. Anderson"},{id:6,name:"Computer Science",teacher:"Dr. Roberts"}],u=[{id:1,title:"Quadratic Equations Problem Set",courseId:1,courseName:"Mathematics",dueDate:"2023-05-15T23:59:59",assignedDate:"2023-04-28",description:"Complete the problem set on quadratic equations including word problems and applications.",status:"completed",grade:92,submissionDate:"2023-05-14T14:25:00",attachments:[{id:1,name:"Problem_Set.pdf",size:"1.2 MB"}],feedbackProvided:!0},{id:2,title:"Physics Lab Report: Forces and Motion",courseId:2,courseName:"Physics",dueDate:"2023-05-22T23:59:59",assignedDate:"2023-05-01",description:"Write a lab report based on the experiments conducted on forces and motion. Include all data tables and analysis.",status:"in-progress",grade:null,submissionDate:null,attachments:[{id:2,name:"Lab_Instructions.pdf",size:"2.4 MB"},{id:3,name:"Data_Collection_Template.xlsx",size:"0.8 MB"}],feedbackProvided:!1},{id:3,title:"Macbeth Character Analysis Essay",courseId:3,courseName:"English Literature",dueDate:"2023-05-10T23:59:59",assignedDate:"2023-04-25",description:"Write a 1500-word essay analyzing the character development of Macbeth throughout the play.",status:"overdue",grade:null,submissionDate:null,attachments:[{id:4,name:"Essay_Guidelines.pdf",size:"1.1 MB"}],feedbackProvided:!1},{id:4,title:"Chemical Reactions Worksheet",courseId:4,courseName:"Chemistry",dueDate:"2023-05-18T23:59:59",assignedDate:"2023-05-04",description:"Complete the worksheet on balancing chemical equations and identifying reaction types.",status:"in-progress",grade:null,submissionDate:null,attachments:[{id:5,name:"Chemical_Reactions_Worksheet.pdf",size:"1.5 MB"}],feedbackProvided:!1},{id:5,title:"World War II Research Project",courseId:5,courseName:"World History",dueDate:"2023-06-05T23:59:59",assignedDate:"2023-05-02",description:"Research and create a presentation on a specific aspect of World War II. Topics must be approved by the teacher.",status:"upcoming",grade:null,submissionDate:null,attachments:[{id:6,name:"Research_Project_Guidelines.pdf",size:"1.7 MB"}],feedbackProvided:!1},{id:6,title:"Python Programming Assignment",courseId:6,courseName:"Computer Science",dueDate:"2023-05-20T23:59:59",assignedDate:"2023-05-06",description:"Create a Python program that implements the specified algorithms and data structures.",status:"in-progress",grade:null,submissionDate:null,attachments:[{id:7,name:"Programming_Assignment_Details.pdf",size:"1.3 MB"},{id:8,name:"Starter_Code.zip",size:"0.5 MB"}],feedbackProvided:!1},{id:7,title:"Linear Algebra Quiz",courseId:1,courseName:"Mathematics",dueDate:"2023-05-08T23:59:59",assignedDate:"2023-05-01",description:"Complete the online quiz on linear algebra concepts including matrices and determinants.",status:"completed",grade:88,submissionDate:"2023-05-07T15:30:00",attachments:[{id:9,name:"Study_Guide.pdf",size:"1.0 MB"}],feedbackProvided:!0},{id:8,title:"Energy Conservation Analysis",courseId:2,courseName:"Physics",dueDate:"2023-05-30T23:59:59",assignedDate:"2023-05-10",description:"Analyze the given scenarios and apply energy conservation principles to solve the problems.",status:"upcoming",grade:null,submissionDate:null,attachments:[{id:10,name:"Energy_Problems.pdf",size:"1.8 MB"}],feedbackProvided:!1}],h=y=>new Date(y).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),m=y=>new Date(y).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}),p=y=>{const x=new Date(y),g=new Date;g.setHours(0,0,0,0),x.setHours(0,0,0,0);const f=x.getTime()-g.getTime();return Math.ceil(f/(1e3*3600*24))},b=u.filter(y=>{const x=y.title.toLowerCase().includes(e.toLowerCase())||y.description.toLowerCase().includes(e.toLowerCase()),g=r?y.courseId===parseInt(r):!0,f=l==="all"?!0:l===y.status;return x&&g&&f}),v=y=>{o(y),s(!1)},$=(y,x)=>{switch(y){case"completed":return"Completed";case"in-progress":{const g=p(x);return g<=0?"Due Today":g===1?"Due Tomorrow":`Due in ${g} days`}case"overdue":return"Overdue";case"upcoming":return"Upcoming";default:return y}},k=y=>{if(!y)return"All Courses";const x=d.find(g=>g.id===parseInt(y));return x?x.name:"All Courses"};return n.jsxs(CB,{children:[n.jsx(SB,{children:n.jsxs(PB,{children:[n.jsx(TB,{children:"Assignments"}),n.jsx(AB,{children:"View and manage your course assignments"})]})}),n.jsxs(zB,{children:[n.jsxs(MB,{children:[n.jsx(DB,{children:n.jsx(Se,{size:18})}),n.jsx(EB,{type:"text",placeholder:"Search assignments...",value:e,onChange:y=>t(y.target.value)})]}),n.jsxs(LB,{children:[n.jsxs(RB,{children:[n.jsxs(IB,{onClick:()=>s(!i),children:[n.jsx("span",{children:k(r)}),n.jsx(ue,{size:16})]}),i&&n.jsxs(FB,{children:[n.jsx(Ox,{onClick:()=>v(null),$isSelected:r===null,children:"All Courses"}),d.map(y=>n.jsx(Ox,{onClick:()=>v(y.id.toString()),$isSelected:r===y.id.toString(),children:y.name},y.id))]})]}),n.jsxs(BB,{children:[n.jsx(Si,{$isActive:l==="all",onClick:()=>c("all"),children:"All"}),n.jsx(Si,{$isActive:l==="in-progress",onClick:()=>c("in-progress"),children:"In Progress"}),n.jsx(Si,{$isActive:l==="upcoming",onClick:()=>c("upcoming"),children:"Upcoming"}),n.jsx(Si,{$isActive:l==="completed",onClick:()=>c("completed"),children:"Completed"}),n.jsx(Si,{$isActive:l==="overdue",onClick:()=>c("overdue"),children:"Overdue"})]})]})]}),n.jsx(NB,{children:b.map(y=>n.jsxs(OB,{as:E.div,whileHover:{y:-4},children:[n.jsxs(VB,{children:[n.jsx(_B,{children:y.courseName}),n.jsxs(WB,{$status:y.status,children:[n.jsx(UB,{$status:y.status}),n.jsx("span",{children:$(y.status,y.dueDate)})]})]}),n.jsx(HB,{children:y.title}),n.jsx(GB,{children:y.description}),n.jsxs(YB,{children:[n.jsxs(Vx,{children:[n.jsx(ze,{size:14}),n.jsxs("span",{children:["Assigned: ",h(y.assignedDate)]})]}),n.jsxs(Vx,{children:[n.jsx(Fe,{size:14}),n.jsxs("span",{children:["Due: ",h(y.dueDate)," at ",m(y.dueDate)]})]})]}),y.attachments.length>0&&n.jsxs(qB,{children:[n.jsxs(QB,{children:[n.jsx(fp,{size:14}),n.jsx("span",{children:"Attachments"})]}),n.jsx(KB,{children:y.attachments.map(x=>n.jsxs(XB,{children:[n.jsxs(JB,{children:[n.jsx(Ft,{size:14}),n.jsx("span",{children:x.name})]}),n.jsx(ZB,{children:x.size})]},x.id))})]}),y.status==="completed"&&n.jsxs(eN,{children:[n.jsxs(tN,{children:[n.jsx(fr,{size:14,color:"#4caf50"}),n.jsxs("span",{children:["Completed on ",h(y.submissionDate)]})]}),y.grade!==null&&n.jsxs(rN,{$grade:y.grade,children:[n.jsx(nN,{children:"Grade:"}),n.jsxs(oN,{$grade:y.grade,children:[y.grade,"%"]})]})]}),n.jsxs(iN,{children:[y.status==="completed"?n.jsx(aN,{children:"View Feedback"}):n.jsxs(lN,{$status:y.status,children:[n.jsx(T6,{size:16}),n.jsx("span",{children:y.status==="overdue"?"Submit Late":"Submit Assignment"})]}),n.jsx(sN,{children:"View Details"})]})]},y.id))}),b.length===0&&n.jsxs(cN,{children:[n.jsx(Ft,{size:40}),n.jsx("h3",{children:"No assignments found"}),n.jsx("p",{children:"Try adjusting your search or filters to find assignments"})]})]})},CB=a.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,SB=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,PB=a.div`
  display: flex;
  flex-direction: column;
`,TB=a.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0;
`,AB=a.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 4px 0 0 0;
`,zB=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: ${e=>e.theme.shadows.sm};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,MB=a.div`
  display: flex;
  align-items: center;
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: 8px;
  padding: 0 12px;
  width: 100%;
  max-width: 320px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    max-width: 100%;
  }
`,DB=a.div`
  color: ${e=>e.theme.colors.text.secondary};
  margin-right: 8px;
`,EB=a.input`
  border: none;
  background: transparent;
  height: 40px;
  width: 100%;
  color: ${e=>e.theme.colors.text.primary};
  outline: none;
  font-size: 14px;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.secondary};
  }
`,LB=a.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    width: 100%;
    justify-content: space-between;
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,RB=a.div`
  position: relative;
`,IB=a.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.primary};
  background-color: ${e=>e.theme.colors.background.secondary};
  min-width: 180px;
  justify-content: space-between;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
`,FB=a.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: 8px;
  box-shadow: ${e=>e.theme.shadows.md};
  z-index: 10;
  max-height: 300px;
  overflow-y: auto;
`,Ox=a.div`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  color: ${e=>e.$isSelected?e.theme.colors.primary:e.theme.colors.text.primary};
  background-color: ${e=>e.$isSelected?`${e.theme.colors.primary}10`:"transparent"};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
  
  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`,BB=a.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    width: 100%;
  }
`,Si=a.button`
  background-color: ${e=>e.$isActive?e.children==="All"?"#4F46E5":e.theme.colors.primary:"transparent"};
  color: ${e=>e.$isActive?"white":e.theme.colors.text.secondary};
  border: 1px solid ${e=>e.$isActive?e.children==="All"?"#4F46E5":e.theme.colors.primary:e.theme.colors.border.light};
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${e=>e.$isActive?e.children==="All"?"#4338CA":e.theme.colors.primary:e.theme.colors.background.hover};
  }
`,NB=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,OB=a(en)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 16px;
  border-radius: 12px;
  border: 1px solid ${e=>e.theme.colors.border.light};
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  
  &:hover {
    box-shadow: ${e=>e.theme.shadows.md};
  }
`,VB=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,_B=a.div`
  font-size: 13px;
  font-weight: 600;
  color: ${e=>e.theme.colors.primary};
  text-transform: uppercase;
`,WB=a.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  color: ${e=>Fh(e.$status)};
  background-color: ${e=>`${Fh(e.$status)}15`};
`,UB=a.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${e=>Fh(e.$status)};
`,HB=a.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,GB=a.p`
  margin: 0;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  line-height: 1.5;
`,YB=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`,Vx=a.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${e=>e.theme.colors.text.secondary};
`,qB=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
  border-top: 1px solid ${e=>e.theme.colors.border.light};
`,QB=a.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,KB=a.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,XB=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px;
  background-color: ${e=>e.theme.colors.background.hover};
  border-radius: 6px;
  font-size: 13px;
  
  &:hover {
    background-color: ${e=>`${e.theme.colors.primary}10`};
  }
`,JB=a.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${e=>e.theme.colors.text.primary};
`,ZB=a.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
`,eN=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
  border-top: 1px solid ${e=>e.theme.colors.border.light};
`,tN=a.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${e=>e.theme.colors.text.secondary};
`,rN=a.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,nN=a.div`
  font-size: 13px;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
`,oN=a.div`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.$grade>=90?"#4caf50":e.$grade>=80?"#8bc34a":e.$grade>=70?"#ff9800":"#f44336"};
`,iN=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 16px;
`,sN=a.button`
  background-color: transparent;
  color: ${e=>e.theme.colors.primary};
  border: 1px solid ${e=>e.theme.colors.primary};
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${e=>`${e.theme.colors.primary}10`};
  }
`,aN=a.button`
  background-color: #4F46E5;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #4338CA;
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.sm};
  }
  
  &:active {
    transform: translateY(0);
  }
`,lN=a.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: ${e=>e.$status==="overdue"?"#f44336":"#4F46E5"};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${e=>e.$status==="overdue"?"#d32f2f":"#4338CA"};
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.sm};
  }
  
  &:active {
    transform: translateY(0);
  }
`,cN=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  color: ${e=>e.theme.colors.text.secondary};
  text-align: center;
  
  h3 {
    margin: 16px 0 8px 0;
    font-size: 18px;
    font-weight: 600;
    color: ${e=>e.theme.colors.text.primary};
  }
  
  p {
    margin: 0;
    font-size: 14px;
  }
`,dN=()=>{const[e,t]=j.useState(new Date),[r,o]=j.useState("week"),[i,s]=j.useState(""),c=(()=>{const w=[],A=new Date(e),T=new Date(A),H=A.getDay();T.setDate(A.getDate()-H);for(let G=0;G<7;G++){const R=new Date(T);R.setDate(T.getDate()+G),w.push(R)}return w})(),d=w=>w.toLocaleDateString("en-US",{weekday:"short"}),u=w=>w.toLocaleDateString("en-US",{month:"short",day:"numeric"}),h=w=>{const[A,T]=w.split(":"),H=parseInt(A),G=H>=12?"PM":"AM";return`${H>12?H-12:H===0?12:H}:${T} ${G}`},m=()=>{const w=new Date(e);w.setDate(e.getDate()-7),t(w)},p=()=>{const w=new Date(e);w.setDate(e.getDate()+7),t(w)},b=w=>{t(w),o("day")},v=new Date,$=w=>w.toDateString()===v.toDateString(),k=w=>w.toDateString()===e.toDateString(),y=()=>{const w=c[0].toLocaleDateString("en-US",{month:"long"}),A=c[6].toLocaleDateString("en-US",{month:"long"}),T=c[0].getFullYear();return w===A?`${w} ${T}`:`${w} - ${A} ${T}`},x=[{id:1,courseId:1,courseName:"Mathematics",teacher:"Dr. Smith",day:"Monday",startTime:"09:00",endTime:"10:30",location:"Room 101",color:"#4F46E5"},{id:2,courseId:2,courseName:"Physics",teacher:"Prof. Johnson",day:"Monday",startTime:"11:00",endTime:"12:30",location:"Lab 3",color:"#2563EB"},{id:3,courseId:3,courseName:"English Literature",teacher:"Mrs. Davis",day:"Tuesday",startTime:"13:00",endTime:"14:30",location:"Room 205",color:"#9333EA"},{id:4,courseId:4,courseName:"Chemistry",teacher:"Dr. Wilson",day:"Wednesday",startTime:"10:15",endTime:"11:45",location:"Lab 2",color:"#16A34A"},{id:5,courseId:5,courseName:"World History",teacher:"Prof. Anderson",day:"Thursday",startTime:"14:00",endTime:"15:30",location:"Room 304",color:"#EA580C"},{id:6,courseId:6,courseName:"Computer Science",teacher:"Dr. Roberts",day:"Friday",startTime:"15:30",endTime:"17:00",location:"Computer Lab",color:"#DC2626"},{id:7,courseId:1,courseName:"Mathematics",teacher:"Dr. Smith",day:"Wednesday",startTime:"09:00",endTime:"10:30",location:"Room 101",color:"#4F46E5"},{id:8,courseId:3,courseName:"English Literature",teacher:"Mrs. Davis",day:"Friday",startTime:"09:00",endTime:"10:30",location:"Room 205",color:"#9333EA"}],g={Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6},f=w=>{const A=w.toLocaleDateString("en-US",{weekday:"long"});return x.filter(T=>T.day===A&&(i===""||T.courseName.toLowerCase().includes(i.toLowerCase())||T.teacher.toLowerCase().includes(i.toLowerCase())||T.location.toLowerCase().includes(i.toLowerCase())))},S=f(v),C=x.filter(w=>{const A=g[w.day],T=v.getDay();return A>=T}).sort((w,A)=>{const T=g[w.day]-g[A.day];return T!==0?T:w.startTime.localeCompare(A.startTime)}).slice(0,3),P=f(e);return n.jsxs(uN,{children:[n.jsx(hN,{children:n.jsxs(mN,{children:[n.jsx(pN,{children:"Class Schedule"}),n.jsx(fN,{children:"View and manage your weekly class timetable"})]})}),n.jsxs(gN,{children:[n.jsxs(xN,{children:[n.jsx(Se,{size:18}),n.jsx(yN,{type:"text",placeholder:"Search classes...",value:i,onChange:w=>s(w.target.value)})]}),n.jsxs(vN,{children:[n.jsx(_x,{$isActive:r==="day",onClick:()=>o("day"),children:"Day"}),n.jsx(_x,{$isActive:r==="week",onClick:()=>o("week"),children:"Week"})]})]}),n.jsxs(bN,{children:[n.jsx(Wx,{onClick:m,children:n.jsx(Kt,{size:20})}),n.jsxs(wN,{children:[n.jsx($N,{children:y()}),r==="day"&&n.jsx(jN,{children:e.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})})]}),n.jsx(Wx,{onClick:p,children:n.jsx(Rt,{size:20})})]}),n.jsx(kN,{children:c.map(w=>n.jsxs(ql,{onClick:()=>b(w),$isToday:$(w),$isSelected:k(w),children:[n.jsx(CN,{children:d(w)}),n.jsx(SN,{children:w.getDate()}),n.jsx(PN,{children:f(w).slice(0,3).map((A,T)=>n.jsx(TN,{},T))})]},w.toISOString()))}),n.jsxs(AN,{children:[n.jsx(zN,{children:r==="day"?n.jsxs(n.Fragment,{children:[n.jsxs(ou,{children:[n.jsxs(Ra,{children:[e.toLocaleDateString("en-US",{weekday:"long"})," Classes"]}),P.length===0&&n.jsx(Gx,{children:"No classes scheduled"})]}),n.jsx(EN,{children:P.map(w=>n.jsxs(LN,{as:E.div,whileHover:{y:-4},children:[n.jsx(RN,{$color:w.color}),n.jsxs(IN,{children:[n.jsxs(FN,{children:[n.jsx(Fe,{size:14}),n.jsxs("span",{children:[h(w.startTime)," - ",h(w.endTime)]})]}),n.jsx(BN,{children:w.courseName}),n.jsxs(NN,{children:[n.jsxs(Ux,{children:[n.jsx($t,{size:14}),n.jsx("span",{children:w.teacher})]}),n.jsxs(Ux,{children:[n.jsx(En,{size:14}),n.jsx("span",{children:w.location})]})]}),n.jsxs(ON,{children:[n.jsx(Hx,{children:"Course Materials"}),n.jsx(Hx,{children:"Assignments"})]})]})]},w.id))})]}):n.jsxs(n.Fragment,{children:[n.jsx(ou,{children:n.jsx(Ra,{children:"Weekly Schedule"})}),n.jsxs(VN,{children:[n.jsx(_N,{children:Array.from({length:12}).map((w,A)=>{const T=A+8;return n.jsxs(WN,{children:[T>12?T-12:T," ",T>=12?"PM":"AM"]},T)})}),n.jsx(UN,{children:c.map(w=>{const A=f(w);return n.jsxs(HN,{$isToday:$(w),children:[n.jsxs(GN,{children:[d(w),", ",u(w)]}),n.jsx(YN,{children:A.map(T=>{const H=parseInt(T.startTime.split(":")[0]),G=parseInt(T.startTime.split(":")[1]),R=parseInt(T.endTime.split(":")[0]),D=parseInt(T.endTime.split(":")[1]),W=(H-8)*60+G,_=(R-H)*60+(D-G);return n.jsx(qN,{$top:W,$height:_,$color:T.color,onClick:()=>b(w),children:n.jsxs(QN,{children:[n.jsx(KN,{children:T.courseName}),n.jsxs(XN,{children:[h(T.startTime)," - ",h(T.endTime)]}),n.jsx(JN,{children:T.location})]})},T.id)})})]},w.toISOString())})})]})]})}),n.jsxs(MN,{children:[n.jsx(en,{children:n.jsxs(ZN,{children:[n.jsxs(ou,{children:[n.jsx(Ra,{children:"Today's Classes"}),n.jsx(DN,{children:v.toLocaleDateString("en-US",{weekday:"long",month:"short",day:"numeric"})})]}),S.length===0?n.jsx(Gx,{children:"No classes scheduled for today"}):n.jsx(eO,{children:S.map(w=>n.jsxs(tO,{children:[n.jsx(rO,{$color:w.color}),n.jsxs(nO,{children:[n.jsx(oO,{children:w.courseName}),n.jsxs(iO,{children:[n.jsx(Fe,{size:12}),n.jsxs("span",{children:[h(w.startTime)," - ",h(w.endTime)]})]}),n.jsxs(sO,{children:[n.jsx(En,{size:12}),n.jsx("span",{children:w.location})]})]})]},w.id))})]})}),n.jsx(en,{children:n.jsxs(aO,{children:[n.jsx(Ra,{children:"Upcoming Classes"}),n.jsx(lO,{children:C.map(w=>n.jsxs(cO,{children:[n.jsx(dO,{children:w.day}),n.jsxs(uO,{children:[n.jsxs(hO,{children:[n.jsx(Ce,{size:14}),n.jsx("span",{children:w.courseName})]}),n.jsxs(mO,{children:[n.jsx(Fe,{size:12}),n.jsxs("span",{children:[h(w.startTime)," - ",h(w.endTime)]})]}),n.jsxs(pO,{children:[n.jsx(En,{size:12}),n.jsx("span",{children:w.location})]})]}),n.jsx(fO,{children:n.jsx(Rt,{size:18})})]},w.id))}),n.jsx(gO,{children:"View All Classes"})]})})]})]})]})},uN=a.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,hN=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,mN=a.div`
  display: flex;
  flex-direction: column;
`,pN=a.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0;
`,fN=a.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 4px 0 0 0;
`,gN=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`,xN=a.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${e=>e.theme.colors.background.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: 8px;
  padding: 0 12px;
  width: 100%;
  max-width: 320px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    max-width: 100%;
  }
`,yN=a.input`
  flex: 1;
  height: 36px;
  border: none;
  background: transparent;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.primary};
  outline: none;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.secondary};
  }
`,vN=a.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,_x=a.button`
  background-color: ${e=>e.$isActive?"#4F46E5":"transparent"};
  color: ${e=>e.$isActive?"white":e.theme.colors.text.secondary};
  border: 1px solid ${e=>e.$isActive?"#4F46E5":e.theme.colors.border.light};
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${e=>e.$isActive?"#4338CA":e.theme.colors.background.hover};
  }
`,bN=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 0;
`,Wx=a.button`
  background-color: ${e=>e.theme.colors.background.primary};
  color: ${e=>e.theme.colors.text.primary};
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
    transform: translateY(-2px);
  }
`,wN=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`,$N=a.div`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,jN=a.div`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
`,kN=a.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }
`,ql=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${e=>e.$isSelected?"#4F46E5":e.$isToday?`${e.theme.colors.primary}15`:e.theme.colors.background.primary};
  border: 1px solid ${e=>e.$isSelected?"#4F46E5":e.$isToday?e.theme.colors.primary:e.theme.colors.border.light};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.sm};
  }
`,CN=a.div`
  font-size: 12px;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.secondary};
`,SN=a.div`
  font-size: 18px;
  font-weight: 600;
  margin: 4px 0;
  color: ${e=>e.theme.colors.text.primary};
  
  ${ql}:hover & {
    color: #4F46E5;
  }
  
  ${ql}[data-is-selected="true"] & {
    color: white;
  }
`,PN=a.div`
  display: flex;
  gap: 4px;
  margin-top: 4px;
`,TN=a.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.primary};
  
  ${ql}[data-is-selected="true"] & {
    background-color: white;
  }
`,AN=a.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  
  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`,zN=a.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,MN=a.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,ou=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,Ra=a.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0 0 12px 0;
  padding: 0 20px;
`,DN=a.div`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
`,EN=a.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,LN=a(en)`
  display: flex;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: ${e=>e.theme.shadows.sm};
  border: 1px solid ${e=>e.theme.colors.border.light};
  
  &:hover {
    box-shadow: ${e=>e.theme.shadows.md};
  }
`,RN=a.div`
  width: 6px;
  background-color: ${e=>e.$color};
`,IN=a.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,FN=a.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
`,BN=a.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
`,NN=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,Ux=a.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
`,ON=a.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`,Hx=a.button`
  background-color: transparent;
  color: #4F46E5;
  border: none;
  font-size: 14px;
  padding: 4px 0;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`,VN=a.div`
  display: flex;
  overflow-x: auto;
  background-color: ${e=>e.theme.colors.background.primary};
  border-radius: 10px;
  border: 1px solid ${e=>e.theme.colors.border.light};
`,_N=a.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  min-width: 60px;
  border-right: 1px solid ${e=>e.theme.colors.border.light};
`,WN=a.div`
  height: 60px;
  padding: 4px 8px;
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,UN=a.div`
  display: flex;
  flex: 1;
  min-width: 500px;
`,HN=a.div`
  flex: 1;
  min-width: 120px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${e=>e.theme.colors.border.light};
  background-color: ${e=>e.$isToday?`${e.theme.colors.primary}05`:"transparent"};
  
  &:last-child {
    border-right: none;
  }
`,GN=a.div`
  padding: 8px;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  color: ${e=>e.theme.colors.text.primary};
`,YN=a.div`
  flex: 1;
  position: relative;
  height: 720px; // 12 hours * 60px
`,qN=a.div`
  position: absolute;
  top: ${e=>e.$top}px;
  left: 4px;
  right: 4px;
  height: ${e=>e.$height}px;
  background-color: ${e=>`${e.$color}15`};
  border-left: 3px solid ${e=>e.$color};
  border-radius: 6px;
  padding: 6px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateX(2px);
    box-shadow: ${e=>e.theme.shadows.sm};
    z-index: 10;
  }
`,QN=a.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,KN=a.div`
  font-size: 12px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,XN=a.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.text.secondary};
  margin-top: 2px;
`,JN=a.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.text.secondary};
  margin-top: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ZN=a.div`
  padding: 16px;
`,eO=a.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,tO=a.div`
  display: flex;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: 8px;
  overflow: hidden;
`,rO=a.div`
  width: 6px;
  background-color: ${e=>e.$color};
`,nO=a.div`
  padding: 12px;
  flex: 1;
`,oO=a.div`
  font-size: 14px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  margin-bottom: 6px;
`,iO=a.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
  margin-bottom: 4px;
`,sO=a.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${e=>e.theme.colors.text.secondary};
`,aO=a.div`
  padding: 0;
`,lO=a.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
`,cO=a.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  background-color: white;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
`,dO=a.div`
  width: 80px;
  font-size: 14px;
  font-weight: 500;
  color: ${e=>e.theme.colors.primary[600]};
`,uO=a.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,hO=a.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
  color: ${e=>e.theme.colors.text.primary};
  
  svg {
    color: ${e=>e.theme.colors.text.secondary};
  }
`,mO=a.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${e=>e.theme.colors.text.secondary};
`,pO=a.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${e=>e.theme.colors.text.secondary};
`,fO=a.div`
  color: ${e=>e.theme.colors.primary[500]};
`,gO=a.a`
  display: block;
  text-align: center;
  font-size: 14px;
  color: ${e=>e.theme.colors.primary[600]};
  text-decoration: none;
  padding: 16px;
  border-top: 1px solid ${e=>e.theme.colors.border.light};
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`,Gx=a.div`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  text-align: center;
  padding: 24px 0;
`,xO=()=>{const[e,t]=j.useState(null),[r,o]=j.useState(""),[i,s]=j.useState(""),[l,c]=j.useState(!1),d=j.useRef(null),u=j.useRef(null),{user:h}=Ot(),m=[{id:"1",recipient:{id:"teacher1",name:"Dr. Smith",role:"Math Teacher",status:"online"},lastMessage:{content:"Don't forget about the quiz tomorrow!",timestamp:new Date(Date.now()-15*60*1e3),read:!1},unreadCount:1},{id:"2",recipient:{id:"teacher2",name:"Mrs. Johnson",role:"English Professor",status:"away",lastSeen:new Date(Date.now()-45*60*1e3)},lastMessage:{content:"The essay deadline has been extended by three days.",timestamp:new Date(Date.now()-3*60*60*1e3),read:!0},unreadCount:0},{id:"3",recipient:{id:"admin1",name:"Admin Office",role:"Administrative Staff",status:"online"},lastMessage:{content:"Your student ID card is ready for pickup.",timestamp:new Date(Date.now()-6*60*60*1e3),read:!1},unreadCount:1},{id:"4",recipient:{id:"student1",name:"Alex Barnes",role:"Classmate",status:"offline",lastSeen:new Date(Date.now()-12*60*60*1e3)},lastMessage:{content:"Did you understand the homework for today?",timestamp:new Date(Date.now()-1*24*60*60*1e3),read:!0},unreadCount:0},{id:"5",recipient:{id:"teacher3",name:"Prof. Wilson",role:"Chemistry Department",status:"offline",lastSeen:new Date(Date.now()-2*24*60*60*1e3)},lastMessage:{content:"Please bring your lab coat for tomorrow's experiment.",timestamp:new Date(Date.now()-3*24*60*60*1e3),read:!0},unreadCount:0}],p=g=>{var C,P,w;const f=m.find(A=>A.id===g);if(!f)return[];const S=f.recipient;return[{id:`${g}-1`,content:"Hello! How can I help you with your studies?",sender:{id:S.id,name:S.name},timestamp:new Date(Date.now()-3*60*60*1e3),read:!0,isIncoming:!0},{id:`${g}-2`,content:`Hi ${S.name}, I have a question about the recent assignment.`,sender:{id:(h==null?void 0:h.username)||"current-user",name:(h==null?void 0:h.fullName)||"You"},timestamp:new Date(Date.now()-2.9*60*60*1e3),read:!0,isIncoming:!1},{id:`${g}-3`,content:"Sure, what do you need help with?",sender:{id:S.id,name:S.name},timestamp:new Date(Date.now()-2.8*60*60*1e3),read:!0,isIncoming:!0},{id:`${g}-4`,content:"I'm not sure how to approach problem number 5.",sender:{id:(h==null?void 0:h.username)||"current-user",name:(h==null?void 0:h.fullName)||"You"},timestamp:new Date(Date.now()-2.7*60*60*1e3),read:!0,isIncoming:!1},{id:`${g}-5`,content:((C=f.lastMessage)==null?void 0:C.content)||"Let me know if you need any other assistance.",sender:{id:S.id,name:S.name},timestamp:((P=f.lastMessage)==null?void 0:P.timestamp)||new Date,read:((w=f.lastMessage)==null?void 0:w.read)||!1,isIncoming:!0}]};j.useEffect(()=>{const g=()=>{c(window.innerWidth<768)};return g(),window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)}},[]),j.useEffect(()=>{d.current&&d.current.scrollIntoView({behavior:"smooth"})},[e]);const b=m.filter(g=>{var f;return g.recipient.name.toLowerCase().includes(r.toLowerCase())||((f=g.lastMessage)==null?void 0:f.content.toLowerCase().includes(r.toLowerCase()))}),v=()=>{i.trim()!==""&&(console.log("Sending message:",i),s(""),u.current&&u.current.focus())},$=g=>g.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),k=g=>{if(!g)return"Unknown";const S=new Date().getTime()-g.getTime(),C=Math.floor(S/6e4),P=Math.floor(C/60),w=Math.floor(P/24);return C<1?"Just now":C<60?`${C} min ago`:P<24?`${P} hr ago`:`${w} day${w>1?"s":""} ago`},y=m.find(g=>g.id===e),x=e?p(e):[];return n.jsxs(yO,{children:[n.jsx(vO,{children:n.jsxs(bO,{children:[n.jsx(wO,{children:"Messages"}),n.jsx($O,{children:"Chat with teachers, classmates, and staff"})]})}),n.jsx(jO,{children:n.jsxs(ne,{mode:"wait",children:[l&&e?null:n.jsxs(kO,{as:E.div,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.2},children:[n.jsxs(CO,{children:[n.jsxs(SO,{children:[n.jsx(PO,{children:n.jsx(Se,{})}),n.jsx(TO,{type:"text",placeholder:"Search messages...",value:r,onChange:g=>o(g.target.value)})]}),n.jsx(Dc,{"aria-label":"Filter messages",children:n.jsx(Jt,{})}),n.jsx(AO,{"aria-label":"New message",children:n.jsx(Qt,{})})]}),n.jsx(zO,{children:b.map(g=>n.jsxs(MO,{$hasUnread:g.unreadCount>0,$isActive:e===g.id,onClick:()=>t(g.id),as:E.div,whileHover:{x:2},whileTap:{scale:.98},children:[n.jsxs(Yx,{children:[g.recipient.avatar?n.jsx(qx,{src:g.recipient.avatar,alt:g.recipient.name}):n.jsx(Qx,{children:g.recipient.name.charAt(0)}),n.jsx(Kx,{$status:g.recipient.status||"offline"})]}),n.jsxs(DO,{children:[n.jsxs(EO,{children:[n.jsx(Xx,{children:g.recipient.name}),g.lastMessage&&n.jsx(LO,{children:k(g.lastMessage.timestamp)})]}),n.jsx(RO,{children:g.recipient.role}),g.lastMessage&&n.jsx(IO,{$read:g.lastMessage.read,children:g.lastMessage.content})]}),g.unreadCount>0&&n.jsx(FO,{children:g.unreadCount})]},g.id))})]},"conversations"),e?n.jsx(BO,{as:E.div,initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.2},children:y&&n.jsxs(n.Fragment,{children:[n.jsxs(NO,{children:[l&&n.jsx(OO,{onClick:()=>t(null),children:n.jsx(Kt,{})}),n.jsxs(Yx,{children:[y.recipient.avatar?n.jsx(qx,{src:y.recipient.avatar,alt:y.recipient.name}):n.jsx(Qx,{children:y.recipient.name.charAt(0)}),n.jsx(Kx,{$status:y.recipient.status||"offline"})]}),n.jsxs(VO,{children:[n.jsx(Xx,{children:y.recipient.name}),n.jsx(_O,{children:y.recipient.status==="online"?"Online":`Last seen ${k(y.recipient.lastSeen)}`})]}),n.jsxs(WO,{children:[n.jsx(UO,{children:n.jsx(_n,{})}),n.jsx(HO,{children:n.jsx(Is,{})})]})]}),n.jsxs(GO,{children:[x.map((g,f)=>n.jsxs(YO,{$isMine:!g.isIncoming,as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.2,delay:f*.05},children:[n.jsx(qO,{$isMine:!g.isIncoming,children:g.content}),n.jsxs(QO,{children:[$(g.timestamp),!g.isIncoming&&n.jsx(KO,{children:g.read?"Read":"Sent"})]})]},g.id)),n.jsx("div",{ref:d})]}),n.jsxs(XO,{children:[n.jsx(Zw,{children:n.jsx(fp,{})}),n.jsx(JO,{ref:u,type:"text",placeholder:"Type a message...",value:i,onChange:g=>s(g.target.value),onKeyPress:g=>g.key==="Enter"&&v()}),n.jsx(ZO,{children:n.jsx(Ow,{})}),n.jsx(eV,{onClick:v,disabled:i.trim()==="",$hasContent:i.trim()!=="",as:E.button,whileHover:{scale:1.05},whileTap:{scale:.95},children:n.jsx(Bw,{})})]})]})},"chat"):!l&&n.jsxs(tV,{as:E.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[n.jsx(rV,{children:n.jsx(iV,{size:60})}),n.jsx(nV,{children:"No Conversation Selected"}),n.jsx(oV,{children:"Select a conversation from the list to start chatting"})]},"empty-state")]})})]})},yO=a.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 100%;
`,vO=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`,bO=a.div`
  display: flex;
  flex-direction: column;
`,wO=a.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0;
`,$O=a.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  margin: 4px 0 0 0;
`,jO=a.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 24px;
  height: calc(100vh - 180px);
  min-height: 500px;
  background: ${e=>e.theme.colors.background.primary};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${e=>e.theme.shadows.sm};
  border: 1px solid ${e=>e.theme.colors.border.light};
  
  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,kO=a(E.div)`
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${e=>e.theme.colors.border.light};
  height: 100%;
`,CO=a.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,SO=a.div`
  display: flex;
  align-items: center;
  background-color: ${e=>e.theme.colors.background.secondary};
  border-radius: 8px;
  padding: 0 12px;
  flex: 1;
`,PO=a.div`
  color: ${e=>e.theme.colors.text.secondary};
  margin-right: 8px;
`,TO=a.input`
  flex: 1;
  height: 36px;
  border: none;
  background: transparent;
  font-size: 14px;
  color: ${e=>e.theme.colors.text.primary};
  outline: none;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
`,Dc=a.button`
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${e=>e.theme.colors.background.secondary};
  color: ${e=>e.theme.colors.text.secondary};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
    color: ${e=>e.theme.colors.text.primary};
  }
`,AO=a(Dc)`
  background-color: ${e=>e.theme.colors.primary};
  color: white;
  
  &:hover {
    background-color: ${e=>e.theme.colors.primary}e0;
    color: white;
  }
`,zO=a.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px;
`,MO=a(E.div)`
  display: flex;
  padding: 12px;
  margin-bottom: 4px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  
  background-color: ${e=>e.$isActive?e.theme.colors.background.hover:"transparent"};
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
  }
`,Yx=a.div`
  position: relative;
  margin-right: 12px;
`,qx=a.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`,Qx=a.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${e=>e.theme.colors.primary[100]};
  color: ${e=>e.theme.colors.primary[600]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
`,Kx=a.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid ${e=>e.theme.colors.background.primary};
  
  background-color: ${e=>{switch(e.$status){case"online":return e.theme.colors.success;case"away":return e.theme.colors.warning;default:return e.theme.colors.text.tertiary}}};
`,DO=a.div`
  flex: 1;
  min-width: 0;
`,EO=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
`,Xx=a.div`
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,LO=a.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.tertiary};
  white-space: nowrap;
`,RO=a.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.tertiary};
  margin-bottom: 4px;
`,IO=a.div`
  font-size: 13px;
  color: ${e=>e.$read?e.theme.colors.text.secondary:e.theme.colors.text.primary};
  font-weight: ${e=>e.$read?"400":"500"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 220px;
`,FO=a.div`
  min-width: 18px;
  height: 18px;
  padding: 0 6px;
  border-radius: 9px;
  background-color: ${e=>e.theme.colors.primary};
  color: white;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin-top: 4px;
`,BO=a(E.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
`,NO=a.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${e=>e.theme.colors.border.light};
`,OO=a.button`
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.text.secondary};
  border-radius: 8px;
  cursor: pointer;
  margin-right: 8px;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
    color: ${e=>e.theme.colors.text.primary};
  }
`,VO=a.div`
  flex: 1;
  min-width: 0;
`,_O=a.div`
  font-size: 12px;
  color: ${e=>e.theme.colors.text.tertiary};
`,WO=a.div`
  display: flex;
  gap: 8px;
`,UO=a(Dc)``,HO=a(Dc)``,GO=a.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,YO=a(E.div)`
  display: flex;
  flex-direction: column;
  align-self: ${e=>e.$isMine?"flex-end":"flex-start"};
  max-width: 70%;
  
  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    max-width: 85%;
  }
`,qO=a.div`
  padding: 12px 16px;
  border-radius: 16px;
  border-bottom-right-radius: ${e=>e.$isMine?"4px":"16px"};
  border-bottom-left-radius: ${e=>e.$isMine?"16px":"4px"};
  color: ${e=>e.$isMine?"#000":e.theme.colors.text.primary};
  font-weight: ${e=>e.$isMine?"500":"400"};
  background-color: ${e=>e.$isMine?e.theme.colors.primary:e.theme.colors.background.secondary};
  font-size: 14px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`,QO=a.div`
  font-size: 11px;
  color: ${e=>e.theme.colors.text.tertiary};
  margin-top: 4px;
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 4px;
`,KO=a.span`
  font-size: 11px;
  color: ${e=>e.theme.colors.text.tertiary};
`,XO=a.div`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 12px;
  border-top: 1px solid ${e=>e.theme.colors.border.light};
`,Zw=a.button`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.text.secondary};
  border-radius: 50%;
  cursor: pointer;
  
  &:hover {
    background-color: ${e=>e.theme.colors.background.hover};
    color: ${e=>e.theme.colors.text.primary};
  }
`,JO=a.input`
  flex: 1;
  height: 40px;
  border: 1px solid ${e=>e.theme.colors.border.light};
  border-radius: 20px;
  padding: 0 16px;
  background-color: ${e=>e.theme.colors.background.secondary};
  font-size: 14px;
  color: #000000;
  outline: none;
  
  &::placeholder {
    color: ${e=>e.theme.colors.text.tertiary};
  }
  
  &:focus {
    border-color: ${e=>e.theme.colors.primary};
  }
`,ZO=a(Zw)``,eV=a.button`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${e=>e.$hasContent?e.theme.colors.primary:e.theme.colors.background.secondary};
  color: ${e=>e.$hasContent?"white":e.theme.colors.text.secondary};
  border-radius: 50%;
  cursor: ${e=>e.$hasContent?"pointer":"default"};
  transition: all 0.2s;
  
  &:hover {
    background-color: ${e=>e.$hasContent?`${e.theme.colors.primary}e0`:e.theme.colors.background.secondary};
  }
`,tV=a(E.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 24px;
  text-align: center;
`,rV=a.div`
  color: ${e=>e.theme.colors.text.tertiary};
  margin-bottom: 16px;
`,nV=a.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.colors.text.primary};
  margin: 0 0 8px 0;
`,oV=a.p`
  font-size: 14px;
  color: ${e=>e.theme.colors.text.secondary};
  max-width: 300px;
  margin: 0;
`,iV=a(Se)`
  /* This is just to use the correct import */
`,e$=6048e5,sV=864e5,t$=6e4,r$=36e5,Jx=Symbol.for("constructDateFrom");function xr(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&Jx in e?e[Jx](t):e instanceof Date?new e.constructor(t):new Date(t)}function ht(e,t){return xr(t||e,e)}let aV={};function Ec(){return aV}function Cs(e,t){var c,d,u,h;const r=Ec(),o=(t==null?void 0:t.weekStartsOn)??((d=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:d.weekStartsOn)??r.weekStartsOn??((h=(u=r.locale)==null?void 0:u.options)==null?void 0:h.weekStartsOn)??0,i=ht(e,t==null?void 0:t.in),s=i.getDay(),l=(s<o?7:0)+s-o;return i.setDate(i.getDate()-l),i.setHours(0,0,0,0),i}function Ql(e,t){return Cs(e,{...t,weekStartsOn:1})}function n$(e,t){const r=ht(e,t==null?void 0:t.in),o=r.getFullYear(),i=xr(r,0);i.setFullYear(o+1,0,4),i.setHours(0,0,0,0);const s=Ql(i),l=xr(r,0);l.setFullYear(o,0,4),l.setHours(0,0,0,0);const c=Ql(l);return r.getTime()>=s.getTime()?o+1:r.getTime()>=c.getTime()?o:o-1}function Zx(e){const t=ht(e),r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return r.setUTCFullYear(t.getFullYear()),+e-+r}function lV(e,...t){const r=xr.bind(null,t.find(o=>typeof o=="object"));return t.map(r)}function ey(e,t){const r=ht(e,t==null?void 0:t.in);return r.setHours(0,0,0,0),r}function cV(e,t,r){const[o,i]=lV(r==null?void 0:r.in,e,t),s=ey(o),l=ey(i),c=+s-Zx(s),d=+l-Zx(l);return Math.round((c-d)/sV)}function dV(e,t){const r=n$(e,t),o=xr(e,0);return o.setFullYear(r,0,4),o.setHours(0,0,0,0),Ql(o)}function uV(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function hV(e){return!(!uV(e)&&typeof e!="number"||isNaN(+ht(e)))}function mV(e,t){const r=ht(e,t==null?void 0:t.in);return r.setFullYear(r.getFullYear(),0,1),r.setHours(0,0,0,0),r}const pV={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},fV=(e,t,r)=>{let o;const i=pV[e];return typeof i=="string"?o=i:t===1?o=i.one:o=i.other.replace("{{count}}",t.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+o:o+" ago":o};function iu(e){return(t={})=>{const r=t.width?String(t.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}const gV={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},xV={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},yV={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},vV={date:iu({formats:gV,defaultWidth:"full"}),time:iu({formats:xV,defaultWidth:"full"}),dateTime:iu({formats:yV,defaultWidth:"full"})},bV={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},wV=(e,t,r,o)=>bV[e];function Pi(e){return(t,r)=>{const o=r!=null&&r.context?String(r.context):"standalone";let i;if(o==="formatting"&&e.formattingValues){const l=e.defaultFormattingWidth||e.defaultWidth,c=r!=null&&r.width?String(r.width):l;i=e.formattingValues[c]||e.formattingValues[l]}else{const l=e.defaultWidth,c=r!=null&&r.width?String(r.width):e.defaultWidth;i=e.values[c]||e.values[l]}const s=e.argumentCallback?e.argumentCallback(t):t;return i[s]}}const $V={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},jV={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},kV={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},CV={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},SV={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},PV={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},TV=(e,t)=>{const r=Number(e),o=r%100;if(o>20||o<10)switch(o%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},AV={ordinalNumber:TV,era:Pi({values:$V,defaultWidth:"wide"}),quarter:Pi({values:jV,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Pi({values:kV,defaultWidth:"wide"}),day:Pi({values:CV,defaultWidth:"wide"}),dayPeriod:Pi({values:SV,defaultWidth:"wide",formattingValues:PV,defaultFormattingWidth:"wide"})};function Ti(e){return(t,r={})=>{const o=r.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],s=t.match(i);if(!s)return null;const l=s[0],c=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(c)?MV(c,m=>m.test(l)):zV(c,m=>m.test(l));let u;u=e.valueCallback?e.valueCallback(d):d,u=r.valueCallback?r.valueCallback(u):u;const h=t.slice(l.length);return{value:u,rest:h}}}function zV(e,t){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t(e[r]))return r}function MV(e,t){for(let r=0;r<e.length;r++)if(t(e[r]))return r}function DV(e){return(t,r={})=>{const o=t.match(e.matchPattern);if(!o)return null;const i=o[0],s=t.match(e.parsePattern);if(!s)return null;let l=e.valueCallback?e.valueCallback(s[0]):s[0];l=r.valueCallback?r.valueCallback(l):l;const c=t.slice(i.length);return{value:l,rest:c}}}const EV=/^(\d+)(th|st|nd|rd)?/i,LV=/\d+/i,RV={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},IV={any:[/^b/i,/^(a|c)/i]},FV={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},BV={any:[/1/i,/2/i,/3/i,/4/i]},NV={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},OV={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},VV={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},_V={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},WV={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},UV={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},HV={ordinalNumber:DV({matchPattern:EV,parsePattern:LV,valueCallback:e=>parseInt(e,10)}),era:Ti({matchPatterns:RV,defaultMatchWidth:"wide",parsePatterns:IV,defaultParseWidth:"any"}),quarter:Ti({matchPatterns:FV,defaultMatchWidth:"wide",parsePatterns:BV,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ti({matchPatterns:NV,defaultMatchWidth:"wide",parsePatterns:OV,defaultParseWidth:"any"}),day:Ti({matchPatterns:VV,defaultMatchWidth:"wide",parsePatterns:_V,defaultParseWidth:"any"}),dayPeriod:Ti({matchPatterns:WV,defaultMatchWidth:"any",parsePatterns:UV,defaultParseWidth:"any"})},GV={code:"en-US",formatDistance:fV,formatLong:vV,formatRelative:wV,localize:AV,match:HV,options:{weekStartsOn:0,firstWeekContainsDate:1}};function YV(e,t){const r=ht(e,t==null?void 0:t.in);return cV(r,mV(r))+1}function qV(e,t){const r=ht(e,t==null?void 0:t.in),o=+Ql(r)-+dV(r);return Math.round(o/e$)+1}function o$(e,t){var h,m,p,b;const r=ht(e,t==null?void 0:t.in),o=r.getFullYear(),i=Ec(),s=(t==null?void 0:t.firstWeekContainsDate)??((m=(h=t==null?void 0:t.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??i.firstWeekContainsDate??((b=(p=i.locale)==null?void 0:p.options)==null?void 0:b.firstWeekContainsDate)??1,l=xr((t==null?void 0:t.in)||e,0);l.setFullYear(o+1,0,s),l.setHours(0,0,0,0);const c=Cs(l,t),d=xr((t==null?void 0:t.in)||e,0);d.setFullYear(o,0,s),d.setHours(0,0,0,0);const u=Cs(d,t);return+r>=+c?o+1:+r>=+u?o:o-1}function QV(e,t){var c,d,u,h;const r=Ec(),o=(t==null?void 0:t.firstWeekContainsDate)??((d=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:d.firstWeekContainsDate)??r.firstWeekContainsDate??((h=(u=r.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??1,i=o$(e,t),s=xr((t==null?void 0:t.in)||e,0);return s.setFullYear(i,0,o),s.setHours(0,0,0,0),Cs(s,t)}function KV(e,t){const r=ht(e,t==null?void 0:t.in),o=+Cs(r,t)-+QV(r,t);return Math.round(o/e$)+1}function J(e,t){const r=e<0?"-":"",o=Math.abs(e).toString().padStart(t,"0");return r+o}const Pr={y(e,t){const r=e.getFullYear(),o=r>0?r:1-r;return J(t==="yy"?o%100:o,t.length)},M(e,t){const r=e.getMonth();return t==="M"?String(r+1):J(r+1,2)},d(e,t){return J(e.getDate(),t.length)},a(e,t){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(e,t){return J(e.getHours()%12||12,t.length)},H(e,t){return J(e.getHours(),t.length)},m(e,t){return J(e.getMinutes(),t.length)},s(e,t){return J(e.getSeconds(),t.length)},S(e,t){const r=t.length,o=e.getMilliseconds(),i=Math.trunc(o*Math.pow(10,r-3));return J(i,t.length)}},po={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ty={G:function(e,t,r){const o=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(o,{width:"abbreviated"});case"GGGGG":return r.era(o,{width:"narrow"});case"GGGG":default:return r.era(o,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){const o=e.getFullYear(),i=o>0?o:1-o;return r.ordinalNumber(i,{unit:"year"})}return Pr.y(e,t)},Y:function(e,t,r,o){const i=o$(e,o),s=i>0?i:1-i;if(t==="YY"){const l=s%100;return J(l,2)}return t==="Yo"?r.ordinalNumber(s,{unit:"year"}):J(s,t.length)},R:function(e,t){const r=n$(e);return J(r,t.length)},u:function(e,t){const r=e.getFullYear();return J(r,t.length)},Q:function(e,t,r){const o=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(o);case"QQ":return J(o,2);case"Qo":return r.ordinalNumber(o,{unit:"quarter"});case"QQQ":return r.quarter(o,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(o,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(o,{width:"wide",context:"formatting"})}},q:function(e,t,r){const o=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(o);case"qq":return J(o,2);case"qo":return r.ordinalNumber(o,{unit:"quarter"});case"qqq":return r.quarter(o,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(o,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(o,{width:"wide",context:"standalone"})}},M:function(e,t,r){const o=e.getMonth();switch(t){case"M":case"MM":return Pr.M(e,t);case"Mo":return r.ordinalNumber(o+1,{unit:"month"});case"MMM":return r.month(o,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(o,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(o,{width:"wide",context:"formatting"})}},L:function(e,t,r){const o=e.getMonth();switch(t){case"L":return String(o+1);case"LL":return J(o+1,2);case"Lo":return r.ordinalNumber(o+1,{unit:"month"});case"LLL":return r.month(o,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(o,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(o,{width:"wide",context:"standalone"})}},w:function(e,t,r,o){const i=KV(e,o);return t==="wo"?r.ordinalNumber(i,{unit:"week"}):J(i,t.length)},I:function(e,t,r){const o=qV(e);return t==="Io"?r.ordinalNumber(o,{unit:"week"}):J(o,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getDate(),{unit:"date"}):Pr.d(e,t)},D:function(e,t,r){const o=YV(e);return t==="Do"?r.ordinalNumber(o,{unit:"dayOfYear"}):J(o,t.length)},E:function(e,t,r){const o=e.getDay();switch(t){case"E":case"EE":case"EEE":return r.day(o,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(o,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(o,{width:"short",context:"formatting"});case"EEEE":default:return r.day(o,{width:"wide",context:"formatting"})}},e:function(e,t,r,o){const i=e.getDay(),s=(i-o.weekStartsOn+8)%7||7;switch(t){case"e":return String(s);case"ee":return J(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});case"eeee":default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,r,o){const i=e.getDay(),s=(i-o.weekStartsOn+8)%7||7;switch(t){case"c":return String(s);case"cc":return J(s,t.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});case"cccc":default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,r){const o=e.getDay(),i=o===0?7:o;switch(t){case"i":return String(i);case"ii":return J(i,t.length);case"io":return r.ordinalNumber(i,{unit:"day"});case"iii":return r.day(o,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(o,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(o,{width:"short",context:"formatting"});case"iiii":default:return r.day(o,{width:"wide",context:"formatting"})}},a:function(e,t,r){const i=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,t,r){const o=e.getHours();let i;switch(o===12?i=po.noon:o===0?i=po.midnight:i=o/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,r){const o=e.getHours();let i;switch(o>=17?i=po.evening:o>=12?i=po.afternoon:o>=4?i=po.morning:i=po.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){let o=e.getHours()%12;return o===0&&(o=12),r.ordinalNumber(o,{unit:"hour"})}return Pr.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getHours(),{unit:"hour"}):Pr.H(e,t)},K:function(e,t,r){const o=e.getHours()%12;return t==="Ko"?r.ordinalNumber(o,{unit:"hour"}):J(o,t.length)},k:function(e,t,r){let o=e.getHours();return o===0&&(o=24),t==="ko"?r.ordinalNumber(o,{unit:"hour"}):J(o,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getMinutes(),{unit:"minute"}):Pr.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getSeconds(),{unit:"second"}):Pr.s(e,t)},S:function(e,t){return Pr.S(e,t)},X:function(e,t,r){const o=e.getTimezoneOffset();if(o===0)return"Z";switch(t){case"X":return ny(o);case"XXXX":case"XX":return jn(o);case"XXXXX":case"XXX":default:return jn(o,":")}},x:function(e,t,r){const o=e.getTimezoneOffset();switch(t){case"x":return ny(o);case"xxxx":case"xx":return jn(o);case"xxxxx":case"xxx":default:return jn(o,":")}},O:function(e,t,r){const o=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ry(o,":");case"OOOO":default:return"GMT"+jn(o,":")}},z:function(e,t,r){const o=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ry(o,":");case"zzzz":default:return"GMT"+jn(o,":")}},t:function(e,t,r){const o=Math.trunc(+e/1e3);return J(o,t.length)},T:function(e,t,r){return J(+e,t.length)}};function ry(e,t=""){const r=e>0?"-":"+",o=Math.abs(e),i=Math.trunc(o/60),s=o%60;return s===0?r+String(i):r+String(i)+t+J(s,2)}function ny(e,t){return e%60===0?(e>0?"-":"+")+J(Math.abs(e)/60,2):jn(e,t)}function jn(e,t=""){const r=e>0?"-":"+",o=Math.abs(e),i=J(Math.trunc(o/60),2),s=J(o%60,2);return r+i+t+s}const oy=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},i$=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},XV=(e,t)=>{const r=e.match(/(P+)(p+)?/)||[],o=r[1],i=r[2];if(!i)return oy(e,t);let s;switch(o){case"P":s=t.dateTime({width:"short"});break;case"PP":s=t.dateTime({width:"medium"});break;case"PPP":s=t.dateTime({width:"long"});break;case"PPPP":default:s=t.dateTime({width:"full"});break}return s.replace("{{date}}",oy(o,t)).replace("{{time}}",i$(i,t))},JV={p:i$,P:XV},ZV=/^D+$/,e_=/^Y+$/,t_=["D","DD","YY","YYYY"];function r_(e){return ZV.test(e)}function n_(e){return e_.test(e)}function o_(e,t,r){const o=i_(e,t,r);if(console.warn(o),t_.includes(e))throw new RangeError(o)}function i_(e,t,r){const o=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${o} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const s_=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,a_=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,l_=/^'([^]*?)'?$/,c_=/''/g,d_=/[a-zA-Z]/;function u_(e,t,r){var h,m,p,b;const o=Ec(),i=o.locale??GV,s=o.firstWeekContainsDate??((m=(h=o.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??1,l=o.weekStartsOn??((b=(p=o.locale)==null?void 0:p.options)==null?void 0:b.weekStartsOn)??0,c=ht(e,r==null?void 0:r.in);if(!hV(c))throw new RangeError("Invalid time value");let d=t.match(a_).map(v=>{const $=v[0];if($==="p"||$==="P"){const k=JV[$];return k(v,i.formatLong)}return v}).join("").match(s_).map(v=>{if(v==="''")return{isToken:!1,value:"'"};const $=v[0];if($==="'")return{isToken:!1,value:h_(v)};if(ty[$])return{isToken:!0,value:v};if($.match(d_))throw new RangeError("Format string contains an unescaped latin alphabet character `"+$+"`");return{isToken:!1,value:v}});i.localize.preprocessor&&(d=i.localize.preprocessor(c,d));const u={firstWeekContainsDate:s,weekStartsOn:l,locale:i};return d.map(v=>{if(!v.isToken)return v.value;const $=v.value;(n_($)||r_($))&&o_($,t,String(e));const k=ty[$[0]];return k(c,$,i.localize,u)}).join("")}function h_(e){const t=e.match(l_);return t?t[1].replace(c_,"'"):e}function m_(e,t){const r=()=>xr(t==null?void 0:t.in,NaN),i=x_(e);let s;if(i.date){const u=y_(i.date,2);s=v_(u.restDateString,u.year)}if(!s||isNaN(+s))return r();const l=+s;let c=0,d;if(i.time&&(c=b_(i.time),isNaN(c)))return r();if(i.timezone){if(d=w_(i.timezone),isNaN(d))return r()}else{const u=new Date(l+c),h=ht(0,t==null?void 0:t.in);return h.setFullYear(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()),h.setHours(u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds()),h}return ht(l+c+d,t==null?void 0:t.in)}const Ia={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},p_=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,f_=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,g_=/^([+-])(\d{2})(?::?(\d{2}))?$/;function x_(e){const t={},r=e.split(Ia.dateTimeDelimiter);let o;if(r.length>2)return t;if(/:/.test(r[0])?o=r[0]:(t.date=r[0],o=r[1],Ia.timeZoneDelimiter.test(t.date)&&(t.date=e.split(Ia.timeZoneDelimiter)[0],o=e.substr(t.date.length,e.length))),o){const i=Ia.timezone.exec(o);i?(t.time=o.replace(i[1],""),t.timezone=i[1]):t.time=o}return t}function y_(e,t){const r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),o=e.match(r);if(!o)return{year:NaN,restDateString:""};const i=o[1]?parseInt(o[1]):null,s=o[2]?parseInt(o[2]):null;return{year:s===null?i:s*100,restDateString:e.slice((o[1]||o[2]).length)}}function v_(e,t){if(t===null)return new Date(NaN);const r=e.match(p_);if(!r)return new Date(NaN);const o=!!r[4],i=Ai(r[1]),s=Ai(r[2])-1,l=Ai(r[3]),c=Ai(r[4]),d=Ai(r[5])-1;if(o)return S_(t,c,d)?$_(t,c,d):new Date(NaN);{const u=new Date(0);return!k_(t,s,l)||!C_(t,i)?new Date(NaN):(u.setUTCFullYear(t,s,Math.max(i,l)),u)}}function Ai(e){return e?parseInt(e):1}function b_(e){const t=e.match(f_);if(!t)return NaN;const r=su(t[1]),o=su(t[2]),i=su(t[3]);return P_(r,o,i)?r*r$+o*t$+i*1e3:NaN}function su(e){return e&&parseFloat(e.replace(",","."))||0}function w_(e){if(e==="Z")return 0;const t=e.match(g_);if(!t)return 0;const r=t[1]==="+"?-1:1,o=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;return T_(o,i)?r*(o*r$+i*t$):NaN}function $_(e,t,r){const o=new Date(0);o.setUTCFullYear(e,0,4);const i=o.getUTCDay()||7,s=(t-1)*7+r+1-i;return o.setUTCDate(o.getUTCDate()+s),o}const j_=[31,null,31,30,31,30,31,31,30,31,30,31];function s$(e){return e%400===0||e%4===0&&e%100!==0}function k_(e,t,r){return t>=0&&t<=11&&r>=1&&r<=(j_[t]||(s$(e)?29:28))}function C_(e,t){return t>=1&&t<=(s$(e)?366:365)}function S_(e,t,r){return t>=1&&t<=53&&r>=0&&r<=6}function P_(e,t,r){return e===24?t===0&&r===0:r>=0&&r<60&&t>=0&&t<60&&e>=0&&e<25}function T_(e,t){return t>=0&&t<=59}const A_=()=>{const[e,t]=j.useState("all"),[r,o]=j.useState(""),[i,s]=j.useState([]),[l,c]=j.useState("all"),d=[{id:"1",title:"Midterm Examination",subject:"Mathematics",date:"2023-11-15T09:00:00",duration:120,status:"upcoming",type:"exam",description:"This exam covers chapters 1-5 from the textbook. Focus on calculus and linear algebra concepts.",maxScore:100,location:"Room 301",instructions:"No calculators allowed. Bring two #2 pencils and an eraser."},{id:"2",title:"Weekly Quiz",subject:"Physics",date:"2023-11-10T14:30:00",duration:30,status:"upcoming",type:"quiz",description:"Quiz on mechanics and thermodynamics concepts covered in the last two weeks.",maxScore:20,location:"Online",instructions:"Open book quiz. You can use your notes and textbook."},{id:"3",title:"Final Project Submission",subject:"Computer Science",date:"2023-12-05T23:59:00",duration:0,status:"upcoming",type:"assignment",description:"Submit your final project including source code and documentation.",maxScore:50,instructions:"Submit through the online portal as a single ZIP file. Include a README file."},{id:"4",title:"Literature Review",subject:"English",date:"2023-10-25T10:00:00",duration:90,status:"completed",type:"exam",description:"Essay-based examination on 19th century American literature.",score:88,maxScore:100,location:"Room 205"},{id:"5",title:"Pop Quiz",subject:"Chemistry",date:"2023-10-20T13:15:00",duration:15,status:"completed",type:"quiz",description:"Surprise quiz on chemical reactions and formulas.",score:18,maxScore:20,location:"Lab 3"},{id:"6",title:"Research Paper",subject:"History",date:"2023-10-15T23:59:00",duration:0,status:"missed",type:"assignment",description:"Research paper on a historical event of your choice from the 20th century.",maxScore:40,instructions:"APA format, 8-10 pages double-spaced, minimum 5 academic sources."}],u=j.useMemo(()=>["all",...[...new Set(d.map(y=>y.subject))]],[d]),h=k=>{s(y=>y.includes(k)?y.filter(x=>x!==k):[...y,k])},m=j.useMemo(()=>d.filter(k=>!(e!=="all"&&k.status!==e||r&&!k.title.toLowerCase().includes(r.toLowerCase())&&!k.subject.toLowerCase().includes(r.toLowerCase())||l!=="all"&&k.subject!==l)).sort((k,y)=>new Date(k.date).getTime()-new Date(y.date).getTime()),[d,e,r,l]),p=d.filter(k=>k.status==="upcoming").length,b=d.filter(k=>k.status==="completed").length,v=d.filter(k=>k.status==="missed").length,$=k=>{switch(k){case"upcoming":return n.jsx(Fe,{});case"completed":return n.jsx(fr,{});case"missed":return n.jsx(Vn,{});default:return null}};return n.jsxs(z_,{children:[n.jsx(M_,{children:n.jsxs(D_,{children:[n.jsx(E_,{children:"Tests & Assessments"}),n.jsx(L_,{children:"View and prepare for your upcoming tests and assessments"})]})}),n.jsxs(R_,{children:[n.jsxs(I_,{children:[n.jsxs(F_,{children:[n.jsx(Se,{}),n.jsx(B_,{type:"text",placeholder:"Search tests by title or subject...",value:r,onChange:k=>o(k.target.value)})]}),n.jsxs(N_,{children:[n.jsx(Jt,{}),n.jsx(O_,{value:l,onChange:k=>c(k.target.value),children:u.map(k=>n.jsx("option",{value:k,children:k==="all"?"All Subjects":k},k))})]})]}),n.jsxs(V_,{children:[n.jsx(Fa,{$isActive:e==="all",onClick:()=>t("all"),children:"All Tests"}),n.jsxs(Fa,{$isActive:e==="upcoming",onClick:()=>t("upcoming"),children:["Upcoming ",n.jsx(au,{children:p})]}),n.jsxs(Fa,{$isActive:e==="completed",onClick:()=>t("completed"),children:["Completed ",n.jsx(au,{children:b})]}),n.jsxs(Fa,{$isActive:e==="missed",onClick:()=>t("missed"),children:["Missed ",n.jsx(au,{children:v})]})]}),n.jsx(__,{children:n.jsx(ne,{children:m.length===0?n.jsxs(lW,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[n.jsx(cW,{children:n.jsx(Ft,{size:48})}),n.jsx(dW,{children:"No tests found"}),n.jsx(uW,{children:"No tests matching your criteria were found. Try adjusting your filters."})]}):m.map((k,y)=>n.jsxs(W_,{status:k.status,as:E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:y*.05},exit:{opacity:0,y:-20},whileHover:{y:-4},children:[n.jsxs(U_,{onClick:()=>h(k.id),children:[n.jsxs(H_,{children:[n.jsxs(G_,{children:[n.jsx(q_,{type:k.type,children:k.type.charAt(0).toUpperCase()+k.type.slice(1)}),n.jsxs(Y_,{status:k.status,children:[$(k.status),n.jsx("span",{children:k.status.charAt(0).toUpperCase()+k.status.slice(1)})]})]}),n.jsx(Q_,{children:k.title}),n.jsx(K_,{children:k.subject})]}),n.jsxs(X_,{children:[n.jsxs(J_,{children:[n.jsx(ze,{}),n.jsx("span",{children:u_(m_(k.date),"MMM d, yyyy • h:mm a")})]}),k.duration>0&&n.jsxs(Z_,{children:[n.jsx(Fe,{}),n.jsxs("span",{children:[k.duration," minutes"]})]}),k.status==="completed"&&k.score!==void 0&&n.jsxs(eW,{children:[n.jsx(tW,{children:"Score:"}),n.jsxs(rW,{score:k.score/k.maxScore*100,children:[k.score," / ",k.maxScore]})]})]}),n.jsx(nW,{children:n.jsx(oW,{children:i.includes(k.id)?n.jsx(f6,{}):n.jsx(ue,{})})})]}),n.jsx(ne,{children:i.includes(k.id)&&n.jsxs(iW,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},children:[n.jsxs(sW,{children:[k.description&&n.jsxs(lu,{children:[n.jsxs(cu,{children:[n.jsx(Ft,{})," Description"]}),n.jsx(du,{children:k.description})]}),k.location&&n.jsxs(lu,{children:[n.jsxs(cu,{children:[n.jsx(En,{})," Location"]}),n.jsx(du,{children:k.location})]}),k.instructions&&n.jsxs(lu,{children:[n.jsxs(cu,{children:[n.jsx(Vn,{})," Instructions"]}),n.jsx(du,{children:k.instructions})]})]}),n.jsxs(aW,{children:[k.status==="upcoming"&&n.jsx(iy,{as:E.button,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Prepare for Test"}),k.status==="completed"&&n.jsx(iy,{as:E.button,whileHover:{scale:1.05},whileTap:{scale:.95},children:"View Detailed Results"})]})]})})]},k.id))})})]})]})},z_=a.div`
  max-width: 1200px;
  margin: 0 auto;
`,M_=a.div`
  margin-bottom: 24px;
`,D_=a.div`
  padding: 16px 0;
`,E_=a.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: ${({theme:e})=>e.colors.text.primary};
`,L_=a.p`
  font-size: 16px;
  color: ${({theme:e})=>e.colors.text.secondary};
  margin: 0;
`,R_=a.div`
  background: ${({theme:e})=>e.colors.background.primary};
  border-radius: 12px;
  box-shadow: ${({theme:e})=>e.shadows.sm};
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.border.light};
`,I_=a.div`
  display: flex;
  gap: 16px;
  padding: 20px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.light};
  background-color: ${({theme:e})=>e.colors.background.secondary};
  flex-wrap: wrap;
`,F_=a.div`
  position: relative;
  flex-grow: 1;
  min-width: 250px;
  
  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({theme:e})=>e.colors.text.secondary};
    font-size: 18px;
  }
`,B_=a.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.border.light};
  font-size: 14px;
  background: ${({theme:e})=>e.colors.background.primary};
  color: ${({theme:e})=>e.colors.text.primary};
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>`${e.colors.primary}30`};
  }
`,N_=a.div`
  position: relative;
  
  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({theme:e})=>e.colors.text.secondary};
    font-size: 18px;
  }
`,O_=a.select`
  padding: 12px 12px 12px 40px;
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.border.light};
  font-size: 14px;
  background: ${({theme:e})=>e.colors.background.primary};
  color: ${({theme:e})=>e.colors.text.primary};
  min-width: 200px;
  appearance: none;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>`${e.colors.primary}30`};
  }
`,V_=a.div`
  display: flex;
  padding: 0 20px;
  margin-top: 12px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.light};
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    height: 0;
    width: 0;
  }
`,Fa=a.button`
  padding: 16px 20px;
  background: none;
  border: none;
  font-size: 15px;
  font-weight: ${({$isActive:e})=>e?"600":"500"};
  color: ${({$isActive:e,theme:t})=>e?t.colors.primary:t.colors.text.secondary};
  cursor: pointer;
  border-bottom: 3px solid ${({$isActive:e,theme:t})=>e?t.colors.primary:"transparent"};
  transition: all 0.2s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
    background-color: ${({theme:e})=>`${e.colors.primary}10`};
  }
  
  &:focus {
    outline: none;
  }
`,au=a.span`
  background-color: ${({theme:e})=>`${e.colors.primary}20`};
  color: ${({theme:e})=>e.colors.primary};
  border-radius: 20px;
  padding: 2px 8px;
  font-size: 12px;
  font-weight: 500;
`,__=a.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`,W_=a(E.div)`
  margin-bottom: 16px;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({theme:e})=>e.colors.border.light};
  border-left: 5px solid ${({status:e,theme:t})=>{switch(e){case"upcoming":return t.colors.primary;case"completed":return t.colors.success;case"missed":return t.colors.danger[500];default:return t.colors.border.light}}};
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  }
`,U_=a.div`
  padding: 20px;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-start;
  position: relative;
`,H_=a.div`
  flex: 2;
  min-width: 250px;
`,G_=a.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`,Y_=a.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  background: ${({status:e,theme:t})=>{switch(e){case"upcoming":return`${t.colors.primary}20`;case"completed":return`${t.colors.success}20`;case"missed":return`${t.colors.danger[500]}20`;default:return t.colors.border.light}}};
  color: ${({status:e,theme:t})=>{switch(e){case"upcoming":return t.colors.primary;case"completed":return t.colors.success;case"missed":return t.colors.danger[500];default:return t.colors.text.primary}}};
  
  svg {
    font-size: 14px;
  }
`,q_=a.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  background: ${({type:e,theme:t})=>{switch(e){case"quiz":return`${t.colors.warning}20`;case"exam":return`${t.colors.primary}20`;case"assignment":return`${t.colors.primary}10`;default:return t.colors.border.light}}};
  color: ${({type:e,theme:t})=>{switch(e){case"quiz":return t.colors.warning;case"exam":return t.colors.primary;case"assignment":return t.colors.primary;default:return t.colors.text.primary}}};
`,Q_=a.h3`
  margin: 0 0 4px 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
`,K_=a.p`
  margin: 0;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.secondary};
`,X_=a.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,J_=a.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.secondary};
  
  svg {
    color: ${({theme:e})=>e.colors.text.tertiary};
  }
`,Z_=a.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.secondary};
  
  svg {
    color: ${({theme:e})=>e.colors.text.tertiary};
  }
`,eW=a.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,tW=a.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text.secondary};
`,rW=a.div`
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  background: ${({score:e,theme:t})=>e>=80?`${t.colors.success}20`:e>=60?`${t.colors.warning}20`:`${t.colors.danger[500]}20`};
  color: ${({score:e,theme:t})=>e>=80?t.colors.success:e>=60?t.colors.warning:t.colors.danger[500]};
`,nW=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,oW=a.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 20px;
  padding: 4px;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${({theme:e})=>e.colors.primary};
    background-color: ${({theme:e})=>`${e.colors.primary}10`};
  }
`,iW=a(E.div)`
  padding: 0 20px 20px;
  border-top: 1px solid ${({theme:e})=>e.colors.border.light};
`,sW=a.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`,lu=a.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,cu=a.div`
  font-weight: 600;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.primary};
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: ${({theme:e})=>e.colors.text.tertiary};
    font-size: 16px;
  }
`,du=a.div`
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.secondary};
  line-height: 1.6;
  padding-left: 24px;
`,aW=a.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`,iy=a.button`
  background: ${({theme:e})=>e.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({theme:e})=>e.colors.primary}e0;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${({theme:e})=>`${e.colors.primary}40`};
  }
  
  &:focus {
    outline: none;
  }
`,lW=a(E.div)`
  text-align: center;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`,cW=a.div`
  color: ${({theme:e})=>e.colors.text.tertiary};
  margin-bottom: 8px;
`,dW=a.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0;
`,uW=a.p`
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.secondary};
  margin: 0;
  max-width: 400px;
`,hW=()=>{const[e,t]=j.useState("sets"),[r,o]=j.useState(null),[i,s]=j.useState(""),[l,c]=j.useState(0),[d,u]=j.useState(new Set),[h,m]=j.useState(new Set),[p,b]=j.useState(null),v=j.useRef(null),$=[{id:"set1",title:"Biology - Cell Structure",subject:"Biology",totalCards:15,masteredCards:8,lastStudied:new Date(Date.now()-2*24*60*60*1e3),tags:["science","biology","cells"]},{id:"set2",title:"Math - Calculus Fundamentals",subject:"Mathematics",totalCards:24,masteredCards:12,lastStudied:new Date(Date.now()-5*24*60*60*1e3),tags:["math","calculus"]},{id:"set3",title:"History - World War II",subject:"History",totalCards:20,masteredCards:15,lastStudied:new Date(Date.now()-1*24*60*60*1e3),tags:["history","world wars"]},{id:"set4",title:"Programming - JavaScript Basics",subject:"Computer Science",totalCards:30,masteredCards:20,lastStudied:new Date(Date.now()-3*24*60*60*1e3),tags:["programming","javascript","web development"]},{id:"set5",title:"Chemistry - Periodic Table",subject:"Chemistry",totalCards:18,masteredCards:5,tags:["science","chemistry","elements"]}],k={set1:[{id:"card1_1",question:"What is a cell?",answer:"The basic structural and functional unit of all living organisms.",mastered:!0},{id:"card1_2",question:"What is the function of mitochondria?",answer:"Powerhouse of the cell, responsible for cellular respiration and producing energy in the form of ATP.",mastered:!0},{id:"card1_3",question:"What is the function of the nucleus?",answer:"Control center of the cell, contains genetic material (DNA) and directs cell activities.",mastered:!1},{id:"card1_4",question:"What is the endoplasmic reticulum?",answer:"A network of membranous tubules within the cytoplasm involved in protein and lipid synthesis.",mastered:!1},{id:"card1_5",question:"What are lysosomes?",answer:"Membrane-bound vesicles containing digestive enzymes that break down waste materials and cellular debris.",mastered:!0}],set2:[{id:"card2_1",question:"What is a derivative?",answer:"A rate of change of a function with respect to a variable.",mastered:!0},{id:"card2_2",question:"What is an integral?",answer:"The area under a curve, representing the accumulation of quantities.",mastered:!1},{id:"card2_3",question:"What is the chain rule?",answer:"A formula for computing the derivative of a composite function.",mastered:!0}],set3:[{id:"card3_1",question:"When did World War II begin?",answer:"September 1, 1939, with Germany's invasion of Poland.",mastered:!0},{id:"card3_2",question:"When did World War II end?",answer:"September 2, 1945, with Japan's formal surrender.",mastered:!0},{id:"card3_3",question:"Who were the Allied Powers?",answer:"Primarily the United States, Great Britain, France, and the Soviet Union.",mastered:!1}],set4:[{id:"card4_1",question:"What is a variable in JavaScript?",answer:"A named storage for data that can be modified during program execution.",mastered:!0},{id:"card4_2",question:"What is the difference between let and const?",answer:"let declares a block-scoped variable that can be reassigned, while const declares a block-scoped variable that cannot be reassigned.",mastered:!1},{id:"card4_3",question:"What is a function in JavaScript?",answer:"A reusable block of code designed to perform a particular task.",mastered:!0},{id:"card4_4",question:"What are JavaScript promises?",answer:"Objects representing the eventual completion or failure of an asynchronous operation.",mastered:!1}],set5:[{id:"card5_1",question:"What is the atomic number?",answer:"The number of protons in an atom's nucleus, which determines the chemical element.",mastered:!0},{id:"card5_2",question:"What are isotopes?",answer:"Variants of a particular chemical element that have the same number of protons but different numbers of neutrons.",mastered:!1},{id:"card5_3",question:"What is a noble gas?",answer:"Elements in group 18 of the periodic table that are colorless, odorless, and generally non-reactive.",mastered:!1}]};j.useEffect(()=>{if(r&&k[r]){const D=new Set;k[r].forEach(W=>{W.mastered&&D.add(W.id)}),m(D)}},[r]);const y=Array.from(new Set($.flatMap(D=>D.tags))),x=$.filter(D=>{const W=i===""||D.title.toLowerCase().includes(i.toLowerCase())||D.subject.toLowerCase().includes(i.toLowerCase()),_=p===null||D.tags.includes(p);return W&&_}),g=r?$.find(D=>D.id===r):null,f=r?k[r]||[]:[],S=D=>{u(W=>{const _=new Set(W);return _.has(D)?_.delete(D):_.add(D),_})},C=D=>{m(W=>{const _=new Set(W);return _.has(D)?_.delete(D):_.add(D),_})},P=D=>{o(D),c(0),u(new Set),t("study")},w=()=>{l>0&&(c(D=>D-1),u(new Set))},A=()=>{l<f.length-1&&(c(D=>D+1),u(new Set))},T=()=>{t("sets"),o(null)},H=D=>{if(!D)return"Never";const _=Math.floor((new Date().getTime()-D.getTime())/(1e3*60*60*24));return _===0?"Today":_===1?"Yesterday":_<7?`${_} days ago`:D.toLocaleDateString()},G=(D,W)=>Math.round(W/D*100),R=D=>({Mathematics:"#4338CA",Biology:"#059669",Chemistry:"#D97706",Physics:"#2563EB",History:"#DC2626","Computer Science":"#7C3AED",English:"#0891B2"})[D]||"#6B7280";return n.jsx(mW,{children:n.jsx(ne,{mode:"wait",children:e==="sets"?n.jsxs(E.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3},children:[n.jsxs(pW,{children:[n.jsxs(fW,{children:[n.jsx(gW,{children:"Flashcards"}),n.jsx(xW,{children:"Create, study, and master your coursework with flashcards"})]}),n.jsxs(yW,{children:[n.jsxs(uu,{children:[n.jsx(hu,{children:$.length}),n.jsx(mu,{children:"Sets"})]}),n.jsx(sy,{}),n.jsxs(uu,{children:[n.jsx(hu,{children:Object.values(k).reduce((D,W)=>D+W.length,0)}),n.jsx(mu,{children:"Cards"})]}),n.jsx(sy,{}),n.jsxs(uu,{children:[n.jsx(hu,{children:Object.values(k).reduce((D,W)=>D+W.filter(_=>_.mastered).length,0)}),n.jsx(mu,{children:"Mastered"})]})]})]}),n.jsxs(vW,{children:[n.jsxs(bW,{children:[n.jsxs(wW,{children:[n.jsxs($W,{children:[n.jsx(Se,{}),n.jsx(jW,{type:"text",placeholder:"Search flashcard sets...",value:i,onChange:D=>s(D.target.value)})]}),n.jsxs(kW,{children:[n.jsx(S6,{}),n.jsxs(CW,{value:p||"",onChange:D=>b(D.target.value||null),children:[n.jsx("option",{value:"",children:"All Tags"}),y.map(D=>n.jsx("option",{value:D,children:D},D))]})]})]}),n.jsxs(a$,{children:[n.jsx(Qt,{}),n.jsx("span",{children:"Create New Set"})]})]}),x.length===0?n.jsxs(WW,{children:[n.jsx(UW,{children:n.jsx(Ce,{size:48})}),n.jsx(HW,{children:"No flashcard sets found"}),n.jsx(GW,{children:"No sets matching your criteria were found."}),n.jsxs(YW,{children:[n.jsx(Qt,{}),n.jsx("span",{children:"Create your first set"})]})]}):n.jsx(SW,{children:x.map(D=>n.jsxs(PW,{as:E.div,whileHover:{y:-8},$accentColor:R(D.subject),children:[n.jsxs(TW,{children:[n.jsxs(AW,{children:[n.jsx(zW,{$bgColor:R(D.subject),children:D.subject}),n.jsxs(MW,{children:[n.jsx(Ce,{}),n.jsxs("span",{children:[D.totalCards," Cards"]})]})]}),n.jsx(DW,{children:D.title}),n.jsxs(EW,{children:[n.jsxs(LW,{children:[n.jsxs(RW,{children:[n.jsx("span",{children:"Mastery Progress"}),n.jsxs("span",{children:[D.masteredCards,"/",D.totalCards]})]}),n.jsx(ay,{children:n.jsx(ly,{width:G(D.totalCards,D.masteredCards),$accentColor:R(D.subject)})})]}),n.jsxs(IW,{children:[n.jsx(Fe,{}),n.jsx(FW,{children:H(D.lastStudied)})]})]}),n.jsx(BW,{children:D.tags.map(W=>n.jsxs(NW,{onClick:()=>b(W),children:["#",W]},W))})]}),n.jsxs(OW,{children:[n.jsx(VW,{onClick:()=>P(D.id),$accentColor:R(D.subject),children:"Study Now"}),n.jsxs(_W,{children:[n.jsx(cy,{"aria-label":"Edit flashcard set",children:n.jsx(gr,{})}),n.jsx(cy,{"aria-label":"Share flashcard set",children:n.jsx(Nw,{})})]})]})]},D.id))})]})]},"sets-view"):n.jsxs(E.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.3},children:[n.jsxs(qW,{children:[n.jsx(QW,{children:n.jsxs(KW,{onClick:T,children:[n.jsx(Kt,{}),n.jsx("span",{children:"Back to Sets"})]})}),n.jsxs(XW,{children:[n.jsx(JW,{$color:g?R(g.subject):"#6B7280",children:g==null?void 0:g.subject}),n.jsx(ZW,{children:g==null?void 0:g.title})]}),n.jsxs(eU,{children:[n.jsxs(tU,{children:[n.jsxs(rU,{children:[n.jsx("span",{children:"Card"}),n.jsxs(nU,{children:[n.jsx(oU,{children:l+1}),n.jsx("span",{children:"/"}),n.jsx(iU,{children:f.length})]})]}),n.jsx(ay,{children:n.jsx(ly,{width:f.length?(l+1)/f.length*100:0,$accentColor:g?R(g.subject):"#6B7280"})})]}),n.jsxs(sU,{children:[n.jsx(Rw,{}),n.jsxs("span",{children:[h.size," of ",f.length," mastered"]})]})]})]}),n.jsx(aU,{children:f.length>0&&n.jsxs(lU,{children:[n.jsxs(cU,{children:[n.jsxs(dU,{ref:v,onClick:()=>S(f[l].id),$color:g?R(g.subject):"#6B7280",children:[n.jsxs(dy,{initial:!1,animate:{rotateY:d.has(f[l].id)?180:0,boxShadow:d.has(f[l].id)?"0 15px 25px rgba(0, 0, 0, 0.05)":"0 10px 30px rgba(0, 0, 0, 0.1)"},transition:{duration:.6,ease:[.16,1,.3,1]},$side:"front",$color:g?R(g.subject):"#6B7280",children:[n.jsx(uy,{children:"Question"}),n.jsx(hy,{children:n.jsx(my,{children:f[l].question})}),n.jsxs(py,{children:[n.jsx(fy,{children:"↻"}),n.jsx("span",{children:"Click to flip"})]})]}),n.jsxs(dy,{initial:!1,animate:{rotateY:d.has(f[l].id)?0:-180,boxShadow:d.has(f[l].id)?"0 10px 30px rgba(0, 0, 0, 0.1)":"0 15px 25px rgba(0, 0, 0, 0.05)"},transition:{duration:.6,ease:[.16,1,.3,1]},$side:"back",$color:g?R(g.subject):"#6B7280",children:[n.jsx(uy,{children:"Answer"}),n.jsx(hy,{children:n.jsx(my,{children:f[l].answer})}),n.jsxs(py,{children:[n.jsx(fy,{children:"↻"}),n.jsx("span",{children:"Click to flip"})]})]})]}),n.jsx(uU,{children:Array.from({length:f.length}).map((D,W)=>n.jsx(hU,{$isActive:W===l,$isMastered:h.has(f[W].id),$color:g?R(g.subject):"#6B7280"},W))})]}),n.jsxs(mU,{children:[n.jsxs(gy,{onClick:w,disabled:l===0,children:[n.jsx(Kt,{}),n.jsx("span",{children:"Previous"})]}),n.jsx(pU,{onClick:()=>C(f[l].id),$isMastered:h.has(f[l].id),$color:g?R(g.subject):"#6B7280",as:E.button,whileHover:{scale:1.05},whileTap:{scale:.95},children:h.has(f[l].id)?n.jsxs(n.Fragment,{children:[n.jsx(Nt,{}),n.jsx("span",{children:"Remove Mastered"})]}):n.jsxs(n.Fragment,{children:[n.jsx(Wl,{}),n.jsx("span",{children:"Mark as Mastered"})]})}),n.jsxs(gy,{onClick:A,disabled:l===f.length-1,children:[n.jsx("span",{children:"Next"}),n.jsx(Rt,{})]})]})]})}),n.jsxs(fU,{children:[n.jsxs(l$,{children:[n.jsx(gr,{}),n.jsx("span",{children:"Edit Current Card"})]}),n.jsxs(gU,{children:[n.jsx(Qt,{}),n.jsx("span",{children:"Add New Card"})]})]})]},"study-view")})})},mW=a.div`
  max-width: 1200px;
  margin: 0 auto;
`,pW=a.div`
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,fW=a.div`
  flex: 1;
`,gW=a.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: ${({theme:e})=>e.colors.text.primary};
  background: linear-gradient(90deg, ${({theme:e})=>e.colors.primary}, #764BA2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,xW=a.p`
  font-size: 16px;
  color: ${({theme:e})=>e.colors.text.secondary};
  margin: 0;
`,yW=a.div`
  display: flex;
  align-items: center;
  gap: 24px;
  background-color: ${({theme:e})=>e.colors.background.secondary};
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: ${({theme:e})=>e.shadows.sm};
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
  }
`,uu=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,hu=a.div`
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.primary};
`,mu=a.div`
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.secondary};
`,sy=a.div`
  width: 1px;
  height: 40px;
  background-color: ${({theme:e})=>e.colors.border.light};
`,vW=a.div`
  background-color: ${({theme:e})=>e.colors.background.primary};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.colors.border.light};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadows.sm};
`,bW=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${({theme:e})=>e.colors.background.secondary};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.light};
  gap: 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,wW=a.div`
  display: flex;
  flex: 1;
  gap: 16px;
  
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`,$W=a.div`
  position: relative;
  flex: 1;
  min-width: 250px;
  
  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({theme:e})=>e.colors.text.secondary};
    font-size: 18px;
  }
`,jW=a.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.border.light};
  font-size: 14px;
  background: ${({theme:e})=>e.colors.background.primary};
  color: ${({theme:e})=>e.colors.text.primary};
  outline: none;
  transition: all 0.2s ease;
  
  &:focus {
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>`${e.colors.primary}30`};
  }
`,kW=a.div`
  position: relative;
  min-width: 180px;
  
  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({theme:e})=>e.colors.text.secondary};
    font-size: 18px;
  }
`,CW=a.select`
  width: 100%;
  padding: 12px 12px 12px 40px;
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.colors.border.light};
  background: ${({theme:e})=>e.colors.background.primary};
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.primary};
  appearance: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:focus {
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>`${e.colors.primary}30`};
  }
`,a$=a.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 20px;
  height: 40px;
  background: ${({theme:e})=>e.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    background: ${({theme:e})=>e.colors.primary}e0;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${({theme:e})=>`${e.colors.primary}40`};
  }
  
  svg {
    font-size: 18px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`,SW=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  padding: 24px;
`,PW=a(E.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  border: 1px solid ${({theme:e})=>e.colors.border.light};
  border-top: 5px solid ${e=>e.$accentColor};
  display: flex;
  flex-direction: column;
  
  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`,TW=a.div`
  padding: 20px;
  flex: 1;
`,AW=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`,zW=a.div`
  background-color: ${e=>`${e.$bgColor}15`};
  color: ${e=>e.$bgColor};
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
`,MW=a.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.text.secondary};
  
  svg {
    font-size: 14px;
  }
`,DW=a.h3`
  margin: 0 0 16px 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
  line-height: 1.4;
`,EW=a.div`
  margin-bottom: 16px;
`,LW=a.div`
  margin-bottom: 10px;
`,RW=a.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.text.secondary};
`,ay=a.div`
  height: 8px;
  width: 100%;
  background: ${({theme:e})=>e.colors.background.hover};
  border-radius: 4px;
  overflow: hidden;
`,ly=a.div`
  height: 100%;
  width: ${e=>e.width}%;
  background: ${e=>e.$accentColor};
  border-radius: 4px;
  transition: width 0.3s ease;
`,IW=a.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.text.secondary};
  
  svg {
    font-size: 14px;
  }
`,FW=a.span``,BW=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
  min-height: 28px;
`,NW=a.span`
  padding: 4px 8px;
  background: ${({theme:e})=>e.colors.background.secondary};
  color: ${({theme:e})=>e.colors.text.secondary};
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,OW=a.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  border-top: 1px solid ${({theme:e})=>e.colors.border.light};
  background-color: ${({theme:e})=>e.colors.background.secondary};
`,VW=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background: ${e=>e.$accentColor};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;
  max-width: 150px;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${e=>`${e.$accentColor}40`};
  }
`,_W=a.div`
  display: flex;
  gap: 8px;
`,cy=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: transparent;
  color: ${({theme:e})=>e.colors.text.secondary};
  border: 1px solid ${({theme:e})=>e.colors.border.light};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,WW=a.div`
  text-align: center;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,UW=a.div`
  color: ${({theme:e})=>e.colors.text.tertiary};
  margin-bottom: 16px;
`,HW=a.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0 0 8px 0;
`,GW=a.p`
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.secondary};
  margin: 0 0 24px 0;
  max-width: 400px;
`,YW=a(a$)`
  margin: 0 auto;
`,qW=a.div`
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,QW=a.div`
  justify-self: start;
`,KW=a.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 8px 12px;
  border-radius: 8px;
  
  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
    color: ${({theme:e})=>e.colors.primary};
  }
  
  svg {
    font-size: 18px;
  }
`,XW=a.div`
  text-align: center;
  justify-self: center;
`,JW=a.div`
  color: ${e=>e.$color};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
`,ZW=a.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text.primary};
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`,eU=a.div`
  justify-self: end;
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,tU=a.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,rU=a.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({theme:e})=>e.colors.text.secondary};
`,nU=a.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,oU=a.span`
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: 15px;
`,iU=a.span`
  color: ${({theme:e})=>e.colors.text.secondary};
`,sU=a.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: ${({theme:e})=>e.colors.text.secondary};
  
  svg {
    color: ${({theme:e})=>e.colors.warning};
  }
`,aU=a.div`
  margin-bottom: 32px;
`,lU=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`,cU=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
`,dU=a.div`
  position: relative;
  width: 100%;
  height: 400px;
  perspective: 2000px;
  cursor: pointer;
  transform-style: preserve-3d;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`,dy=a(E.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 16px;
  padding: 24px;
  border-top: 5px solid ${e=>e.$color};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  will-change: transform;
  transform: ${e=>e.$side==="back"?"rotateY(180deg)":"rotateY(0)"};
`,uy=a.div`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text.tertiary};
  background: ${({theme:e})=>e.colors.background.secondary};
  padding: 4px 8px;
  border-radius: 12px;
`,hy=a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;
  width: 100%;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.background.secondary};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.border.light};
    border-radius: 3px;
  }
`,my=a.div`
  font-size: 22px;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.text.primary};
  padding: 16px;
  width: 100%;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`,py=a.div`
  font-size: 13px;
  color: ${({theme:e})=>e.colors.text.tertiary};
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: center;
  margin-top: 16px;
`,fy=a.span`
  display: inline-block;
  transform: rotate(30deg);
  font-size: 16px;
`,uU=a.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
  max-width: 100%;
  padding: 0 16px;
`,hU=a.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${e=>e.$isActive?e.$color:e.$isMastered?"#10B981":e.theme.colors.background.hover};
  border: 1px solid ${e=>e.$isActive?e.$color:e.$isMastered?"#10B981":e.theme.colors.border.light};
  transition: all 0.2s ease;
`,mU=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 640px;
  gap: 16px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`,gy=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  background: ${({theme:e})=>e.colors.background.secondary};
  color: ${({theme:e})=>e.colors.text.primary};
  border: 1px solid ${({theme:e})=>e.colors.border.light};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 120px;
  
  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.background.hover};
    border-color: ${({theme:e})=>e.colors.border};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (max-width: 576px) {
    width: 100%;
  }
`,pU=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  background: ${e=>e.$isMastered?"#10B981":e.$color};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;
  max-width: 300px;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${e=>e.$isMastered?"rgba(16, 185, 129, 0.4)":`${e.$color}40`};
  }
  
  @media (max-width: 576px) {
    width: 100%;
    max-width: none;
  }
`,fU=a.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`,l$=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  background: transparent;
  color: ${({theme:e})=>e.colors.text.primary};
  border: 1px solid ${({theme:e})=>e.colors.border.light};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({theme:e})=>e.colors.background.hover};
    border-color: ${({theme:e})=>e.colors.border};
  }
  
  @media (max-width: 576px) {
    width: 100%;
  }
`,gU=a(l$)``,c$=j.createContext(null),xU=()=>{const e=j.useContext(c$);if(!e)throw new Error("useThemeContext must be used within a ThemeProvider");return e},pu=({children:e,requiredRole:t})=>{const{isAuthenticated:r,user:o}=Ot(),i=Xt();return r?t&&(o==null?void 0:o.role)!==t?n.jsx(Al,{to:`/${o==null?void 0:o.role}/dashboard`,replace:!0}):e:n.jsx(Al,{to:"/login",state:{from:i},replace:!0})};function yU(){const[e,t]=j.useState(!1),[r,o]=j.useState("#0ea5e9"),i=()=>{t(!e)},s=_m(e?"dark":"light",r),l={isDarkMode:e,toggleTheme:i,primaryColor:r,setPrimaryColor:o};return n.jsx(c$.Provider,{value:l,children:n.jsxs(WC,{theme:s,children:[n.jsx(QC,{}),n.jsxs(Mk,{children:[n.jsx(Q,{path:"/",element:n.jsx(Al,{to:"/login",replace:!0})}),n.jsx(Q,{path:"/login",element:n.jsx(kI,{})}),n.jsxs(Q,{path:"/admin",element:n.jsx(pu,{requiredRole:"admin",children:n.jsx(kP,{})}),children:[n.jsx(Q,{path:"dashboard",element:n.jsx(MT,{})}),n.jsx(Q,{path:"users",element:n.jsx(QD,{})}),n.jsx(Q,{path:"roles",element:n.jsx(tR,{})}),n.jsx(Q,{path:"subjects",element:n.jsx(SE,{})}),n.jsx(Q,{path:"classes",element:n.jsx(nL,{})}),n.jsx(Q,{path:"timetables",element:n.jsx(RL,{})}),n.jsx(Q,{path:"settings",element:n.jsx(Ud,{})}),n.jsx(Q,{path:"profile",element:n.jsx(Hd,{})})]}),n.jsxs(Q,{path:"/teacher",element:n.jsx(pu,{requiredRole:"teacher",children:n.jsx(QP,{})}),children:[n.jsx(Q,{path:"dashboard",element:n.jsx(jA,{})}),n.jsx(Q,{path:"profile",element:n.jsx(Hd,{})}),n.jsx(Q,{path:"courses",element:n.jsx(V8,{})}),n.jsx(Q,{path:"courses/:courseId",element:n.jsx("div",{children:"Course Details (Coming Soon)"})}),n.jsx(Q,{path:"students",element:n.jsx(wz,{})}),n.jsx(Q,{path:"assignments",element:n.jsx(tM,{})}),n.jsx(Q,{path:"grades",element:n.jsx(qM,{})}),n.jsx(Q,{path:"schedule",element:n.jsx(NI,{})}),n.jsx(Q,{path:"messages",element:n.jsx(b9,{})}),n.jsx(Q,{path:"settings",element:n.jsx(Ud,{})})]}),n.jsxs(Q,{path:"/student",element:n.jsx(pu,{requiredRole:"student",children:n.jsx(bT,{})}),children:[n.jsx(Q,{index:!0,element:n.jsx(Al,{to:"/student/dashboard",replace:!0})}),n.jsx(Q,{path:"dashboard",element:n.jsx(o8,{})}),n.jsx(Q,{path:"courses",element:n.jsx(sF,{})}),n.jsx(Q,{path:"lessons",element:n.jsx(RF,{})}),n.jsx(Q,{path:"assignments",element:n.jsx(kB,{})}),n.jsx(Q,{path:"schedule",element:n.jsx(dN,{})}),n.jsx(Q,{path:"messages",element:n.jsx(xO,{})}),n.jsx(Q,{path:"tests",element:n.jsx(A_,{})}),n.jsx(Q,{path:"flashcards",element:n.jsx(hW,{})}),n.jsx(Q,{path:"profile",element:n.jsx(Hd,{})}),n.jsx(Q,{path:"settings",element:n.jsx(Ud,{})})]})]})]})})}function vU(){return n.jsx(Nk,{children:n.jsx(D6,{children:n.jsx(yU,{})})})}const d$=document.getElementById("root");if(!d$)throw new Error("Failed to find the root element");const bU=Av(d$);bU.render(n.jsx(ce.StrictMode,{children:n.jsx(vU,{})}));
