import { isResizeMessage } from "./shared";

const iframe = document.getElementById("iframe") as HTMLIFrameElement;

window.addEventListener("message", (event) => {
  if (isResizeMessage(event)) {
    iframe.style.height = `${event.data.rect.height + 30}px`;
  }
});

const resizeObserver = new ResizeObserver((entries) => {
  // @ts-ignore
  window.devsite.framebox.AutoSizeClient.updateSize();
});

resizeObserver.observe(iframe);
