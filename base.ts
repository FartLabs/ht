/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * BaseElementProps are the props for the [`base`](https://developer.mozilla.org/docs/Web/HTML/Element/base) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/base>
 */
export interface BaseElementProps extends GlobalAttributes {
  /** `href` is an attribute of the [`base`](https://developer.mozilla.org/docs/Web/HTML/Element/base) element. */
  href?: string | undefined;
  /** `target` is an attribute of the [`base`](https://developer.mozilla.org/docs/Web/HTML/Element/base) element. */
  target?: string | undefined;
}

/**
 * base renders the [`base`](https://developer.mozilla.org/docs/Web/HTML/Element/base) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/base>
 */
export function base(props?: BaseElementProps): string {
  return renderElement("base", props as AnyProps, true);
}
