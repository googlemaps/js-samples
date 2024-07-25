var c=Object.defineProperty;var d=(r,t,n)=>t in r?c(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n;var i=(r,t,n)=>d(r,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */class a{constructor(t){i(this,"tileSize");i(this,"alt",null);i(this,"maxZoom",17);i(this,"minZoom",0);i(this,"name",null);i(this,"projection",null);i(this,"radius",6378137);this.tileSize=t}getTile(t,n,s){const e=s.createElement("div");return e.innerHTML=String(t),e.style.width=this.tileSize.width+"px",e.style.height=this.tileSize.height+"px",e.style.fontSize="10",e.style.borderStyle="solid",e.style.borderWidth="1px",e.style.borderColor="#AAAAAA",e}releaseTile(t){}}function u(){const r=new google.maps.Map(document.getElementById("map"),{zoom:10,center:{lat:41.85,lng:-87.65}}),t=new a(new google.maps.Size(256,256));r.overlayMapTypes.insertAt(0,t)}window.initMap=u;