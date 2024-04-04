import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * UlProps are the props for the [`ul`](https://developer.mozilla.org/docs/Web/HTML/Element/ul) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/ul
 */
export interface UlProps extends GlobalAttributes {
  /** @deprecated */
  compact?: string | undefined;
  /** @deprecated */
  type?: string | undefined;
}

/** ul renders the [`ul`](https://developer.mozilla.org/docs/Web/HTML/Element/ul) element. */
export function ul(props?: UlProps & ChildrenProps): string {
  return renderElement("ul", props);
}
