import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * BrElementProps are the props for the [`br`](https://developer.mozilla.org/docs/Web/HTML/Element/br) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/br>
 */
export interface BrElementProps extends GlobalAttributes {
  /**
   * `clear` is an attribute of the [`br`](https://developer.mozilla.org/docs/Web/HTML/Element/br) element.
   * @deprecated
   */
  clear?: string | undefined;
}

/**
 * br renders the [`br`](https://developer.mozilla.org/docs/Web/HTML/Element/br) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/br>
 */
export function br(props?: BrElementProps): string {
  return renderElement("br", props as AnyProps, true);
}
