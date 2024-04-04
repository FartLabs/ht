import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * CanvasProps are the props for the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Element/canvas) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/canvas
 */
export interface CanvasProps extends GlobalAttributes {
  height?: string | undefined;
  /** @deprecated */
  "moz-opaque"?: string | undefined;
  width?: string | undefined;
}

/** canvas renders the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Element/canvas) element. */
export function canvas(props?: CanvasProps & ChildrenProps): string {
  return renderElement("canvas", props);
}
