import { renderElement } from "./shared/mod.ts";

/**
 * CanvasProps are the props for the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Element/canvas) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/canvas
 */
export interface CanvasProps {
  children: unknown[] | undefined;
  height: string | undefined;
  /** @deprecated */
  "moz-opaque": string | undefined;
  width: string | undefined;
}

/** canvas renders the [`canvas`](https://developer.mozilla.org/docs/Web/HTML/Element/canvas) element. */
export function canvas(props: CanvasProps): string {
  return renderElement("canvas", props);
}
