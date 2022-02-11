export interface ResizeData {
  rect: DOMRectReadOnly;
  type: "resizeMessage";
}

export interface ResizeMessage extends MessageEvent {
  data: ResizeData;
}

export const isResizeMessage = (
  event: MessageEvent
): event is ResizeMessage => {
  return event.data && event.data.type === "resizeMessage";
};
