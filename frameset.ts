import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * FramesetProps are the props for the [`frameset`](https://developer.mozilla.org/docs/Web/HTML/Element/frameset) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/frameset>
 * @deprecated
 */
export interface FramesetProps extends GlobalAttributes {
  /** @deprecated */
  cols?: string | undefined;
  /** @deprecated */
  rows?: string | undefined;
}

/**
 * frameset renders the [`frameset`](https://developer.mozilla.org/docs/Web/HTML/Element/frameset) element.
 * @deprecated
 */
export function frameset(props?: FramesetProps & ChildrenProps): string {
  return renderElement("frameset", props);
}
