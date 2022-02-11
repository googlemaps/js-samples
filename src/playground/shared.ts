export interface ResizeMessage extends MessageEvent {
  data: {
    rect: DOMRectReadOnly;
    type: "resizeMessage";
  };
}

export const isResizeMessage = (
  event: MessageEvent
): event is ResizeMessage => {
  return event.data && event.data.type === "resizeMessage";
};
