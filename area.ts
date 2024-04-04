import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * AreaProps are the props for the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/area>
 */
export interface AreaProps extends GlobalAttributes {
  alt?: string | undefined;
  coords?: string | undefined;
  download?: string | undefined;
  href?: string | undefined;
  /** @deprecated */
  nohref?: string | undefined;
  ping?: string | undefined;
  referrerpolicy?: string | undefined;
  rel?: string | undefined;
  shape?: string | undefined;
  /** @deprecated */
  tabindex?: string | undefined;
  target?: string | undefined;
}

/**
 * area renders the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/area>
 */
export function area(props?: AreaProps & ChildrenProps): string {
  return renderElement("area", props, true);
}
