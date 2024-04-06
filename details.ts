import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * DetailsElementProps are the props for the [`details`](https://developer.mozilla.org/docs/Web/HTML/Element/details) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/details>
 */
export interface DetailsElementProps extends GlobalAttributes {
  /** `name` is an attribute of the [`details`](https://developer.mozilla.org/docs/Web/HTML/Element/details) element. */
  name?: string | undefined;
  /** `open` is an attribute of the [`details`](https://developer.mozilla.org/docs/Web/HTML/Element/details) element. */
  open?: string | undefined;
}

/**
 * details renders the [`details`](https://developer.mozilla.org/docs/Web/HTML/Element/details) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/details>
 */
export function details(
  props?: DetailsElementProps,
  ...children: string[]
): string {
  return renderElement("details", props as AnyProps, false, children);
}
