import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * FontProps are the props for the [`font`](https://developer.mozilla.org/docs/Web/HTML/Element/font) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/font
 * @deprecated
 */
export interface FontProps extends GlobalAttributes {
  /** @deprecated */
  color?: string | undefined;
  /** @deprecated */
  face?: string | undefined;
  /** @deprecated */
  size?: string | undefined;
}

/**
 * font renders the [`font`](https://developer.mozilla.org/docs/Web/HTML/Element/font) element.
 * @deprecated
 */
export function font(props?: FontProps & ChildrenProps): string {
  return renderElement("font", props);
}
