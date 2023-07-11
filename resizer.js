import"./chunk-32HEDUCQ.js";var s=e=>e.data&&e.data.type==="resizeMessage";var t=document.getElementById("iframe");window.addEventListener("message",e=>{s(e)&&(t.style.height=`${e.data.rect.height+30}px`)});var a=new ResizeObserver(e=>{window.devsite.framebox.AutoSizeClient.updateSize()});a.observe(t);
/*! For license information please see resizer.js.LEGAL.txt */
