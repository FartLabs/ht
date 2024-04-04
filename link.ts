import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * LinkProps are the props for the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/link
 */
export interface LinkProps extends GlobalAttributes {
  as?: string | undefined;
  blocking?: string | undefined;
  /** @deprecated */
  charset?: string | undefined;
  crossorigin?: string | undefined;
  disabled?: string | undefined;
  fetchpriority?: string | undefined;
  href?: string | undefined;
  hreflang?: string | undefined;
  imagesizes?: string | undefined;
  imagesrcset?: string | undefined;
  integrity?: string | undefined;
  media?: string | undefined;
  /** @deprecated */
  methods?: string | undefined;
  referrerpolicy?: string | undefined;
  rel?: string | undefined;
  /** @deprecated */
  rev?: string | undefined;
  sizes?: string | undefined;
  /** @deprecated */
  target?: string | undefined;
  type?: string | undefined;
}

/** link renders the [`link`](https://developer.mozilla.org/docs/Web/HTML/Element/link) element. */
export function link(props?: LinkProps & ChildrenProps): string {
  return renderElement("link", props);
}
