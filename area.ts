import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * AreaProps are the props for the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/area
 */
export interface AreaProps extends GlobalAttributes {
  alt?: string | undefined;
  coords?: string | undefined;
  download?: string | undefined;
  href?: string | undefined;
  implicit_noopener?: string | undefined;
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

/** area renders the [`area`](https://developer.mozilla.org/docs/Web/HTML/Element/area) element. */
export function area(props?: AreaProps & ChildrenProps): string {
  return renderElement("area", props);
}
