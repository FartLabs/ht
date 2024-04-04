import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ColgroupProps are the props for the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/colgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/colgroup>
 */
export interface ColgroupProps extends GlobalAttributes {
  /** @deprecated */
  align?: string | undefined;
  /** @deprecated */
  char?: string | undefined;
  /** @deprecated */
  charoff?: string | undefined;
  span?: string | undefined;
  /** @deprecated */
  valign?: string | undefined;
  /** @deprecated */
  width?: string | undefined;
}

/**
 * colgroup renders the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/colgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/colgroup>
 */
export function colgroup(props?: ColgroupProps & ChildrenProps): string {
  return renderElement("colgroup", props);
}
