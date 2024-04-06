import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * SelectElementProps are the props for the [`select`](https://developer.mozilla.org/docs/Web/HTML/Element/select) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/select>
 */
export interface SelectElementProps extends GlobalAttributes {
  /** `disabled` is an attribute of the [`select`](https://developer.mozilla.org/docs/Web/HTML/Element/select) element. */
  disabled?: string | undefined;
  /** `form` is an attribute of the [`select`](https://developer.mozilla.org/docs/Web/HTML/Element/select) element. */
  form?: string | undefined;
  /** `multiple` is an attribute of the [`select`](https://developer.mozilla.org/docs/Web/HTML/Element/select) element. */
  multiple?: string | undefined;
  /** `name` is an attribute of the [`select`](https://developer.mozilla.org/docs/Web/HTML/Element/select) element. */
  name?: string | undefined;
  /** `required` is an attribute of the [`select`](https://developer.mozilla.org/docs/Web/HTML/Element/select) element. */
  required?: string | undefined;
  /** `size` is an attribute of the [`select`](https://developer.mozilla.org/docs/Web/HTML/Element/select) element. */
  size?: string | undefined;
}

/**
 * select renders the [`select`](https://developer.mozilla.org/docs/Web/HTML/Element/select) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/select>
 */
export function select(
  props?: SelectElementProps,
  ...children: string[]
): string {
  return renderElement("select", props as AnyProps, false, children);
}
