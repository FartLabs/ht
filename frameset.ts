import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * FramesetElementProps are the props for the [`frameset`](https://developer.mozilla.org/docs/Web/HTML/Element/frameset) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/frameset>
 * @deprecated
 */
export interface FramesetElementProps extends GlobalAttributes {
  /**
   * `cols` is an attribute of the [`frameset`](https://developer.mozilla.org/docs/Web/HTML/Element/frameset) element.
   * @deprecated
   */
  cols?: string | undefined;
  /**
   * `rows` is an attribute of the [`frameset`](https://developer.mozilla.org/docs/Web/HTML/Element/frameset) element.
   * @deprecated
   */
  rows?: string | undefined;
}

/**
 * frameset renders the [`frameset`](https://developer.mozilla.org/docs/Web/HTML/Element/frameset) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/frameset>
 * @deprecated
 */
export function frameset(
  props?: FramesetElementProps,
  ...children: string[]
): string {
  return renderElement("frameset", props as AnyProps, false, children);
}
