import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * BrProps are the props for the [`br`](https://developer.mozilla.org/docs/Web/HTML/Element/br) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/br>
 */
export interface BrProps extends GlobalAttributes {
  /** @deprecated */
  clear?: string | undefined;
}

/**
 * br renders the [`br`](https://developer.mozilla.org/docs/Web/HTML/Element/br) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/br>
 */
export function br(props?: BrProps & ChildrenProps): string {
  return renderElement("br", props, true);
}
