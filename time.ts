import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TimeElementProps are the props for the [`time`](https://developer.mozilla.org/docs/Web/HTML/Element/time) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/time>
 */
export interface TimeElementProps extends GlobalAttributes {
  /** `datetime` is an attribute of the [`time`](https://developer.mozilla.org/docs/Web/HTML/Element/time) element. */
  datetime?: string | undefined;
}

/**
 * time renders the [`time`](https://developer.mozilla.org/docs/Web/HTML/Element/time) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/time>
 */
export function time(props?: TimeElementProps, ...children: string[]): string {
  return renderElement("time", props as AnyProps, false, children);
}
