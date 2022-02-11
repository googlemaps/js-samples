import { isResizeMessage } from "./shared";

window.addEventListener("message", (event) => {
  if (isResizeMessage(event)) {
    document.getElementById("iframe")!.style.height = `${
      event.data.rect.height + 10
    }px`;

    // @ts-ignore
    window.devsite.framebox.AutoSizeClient.updateSize();
  }
});
