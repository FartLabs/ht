import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * OptionElementProps are the props for the [`option`](https://developer.mozilla.org/docs/Web/HTML/Element/option) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/option>
 */
export interface OptionElementProps extends GlobalAttributes {
  /** `disabled` is an attribute of the [`option`](https://developer.mozilla.org/docs/Web/HTML/Element/option) element. */
  disabled?: string | undefined;
  /** `label` is an attribute of the [`option`](https://developer.mozilla.org/docs/Web/HTML/Element/option) element. */
  label?: string | undefined;
  /** `selected` is an attribute of the [`option`](https://developer.mozilla.org/docs/Web/HTML/Element/option) element. */
  selected?: string | undefined;
  /** `value` is an attribute of the [`option`](https://developer.mozilla.org/docs/Web/HTML/Element/option) element. */
  value?: string | undefined;
}

/**
 * option renders the [`option`](https://developer.mozilla.org/docs/Web/HTML/Element/option) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/option>
 */
export function option(
  props?: OptionElementProps,
  ...children: string[]
): string {
  return renderElement("option", props as AnyProps, false, children);
}
