window.addEventListener("message",(e=>{(e=>e.data&&"resizeMessage"===e.data.type)(e)&&(document.getElementById("iframe").style.height=e.data.rect.height+10+"px",window.devsite.framebox.AutoSizeClient.updateSize())}));
//# sourceMappingURL=resizer.js.map
