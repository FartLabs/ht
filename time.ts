import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TimeProps are the props for the [`time`](https://developer.mozilla.org/docs/Web/HTML/Element/time) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/time>
 */
export interface TimeProps extends GlobalAttributes {
  datetime?: string | undefined;
}

/** time renders the [`time`](https://developer.mozilla.org/docs/Web/HTML/Element/time) element. */
export function time(props?: TimeProps & ChildrenProps): string {
  return renderElement("time", props);
}
