import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * CanvasProps are the props for the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Element/canvas) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/canvas>
 */
export interface CanvasProps extends GlobalAttributes {
  height?: string | undefined;
  /** @deprecated */
  "moz-opaque"?: string | undefined;
  width?: string | undefined;
}

/**
 * canvas renders the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Element/canvas) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/canvas>
 */
export function canvas(props?: CanvasProps, ...children: string[]): string {
  return renderElement("canvas", props as AnyProps, false, children);
}
