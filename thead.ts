import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TheadProps are the props for the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Element/thead) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/thead>
 */
export interface TheadProps extends GlobalAttributes {
  /** @deprecated */
  align?: string | undefined;
  /** @deprecated */
  bgcolor?: string | undefined;
  /** @deprecated */
  char?: string | undefined;
  /** @deprecated */
  charoff?: string | undefined;
  /** @deprecated */
  valign?: string | undefined;
}

/**
 * thead renders the [`thead`](https://developer.mozilla.org/docs/Web/HTML/Element/thead) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/thead>
 */
export function thead(props?: TheadProps & ChildrenProps): string {
  return renderElement("thead", props);
}
