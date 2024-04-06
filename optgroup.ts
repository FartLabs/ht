import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * OptgroupElementProps are the props for the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/optgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/optgroup>
 */
export interface OptgroupElementProps extends GlobalAttributes {
  /** `disabled` is an attribute of the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/optgroup) element. */
  disabled?: string | undefined;
  /** `label` is an attribute of the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/optgroup) element. */
  label?: string | undefined;
}

/**
 * optgroup renders the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/optgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/optgroup>
 */
export function optgroup(
  props?: OptgroupElementProps,
  ...children: string[]
): string {
  return renderElement("optgroup", props as AnyProps, false, children);
}
