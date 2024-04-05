import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * FormElementProps are the props for the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/form>
 */
export interface FormElementProps extends GlobalAttributes {
  /** `accept-charset` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element. */
  "accept-charset"?: string | undefined;
  /** `action` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element. */
  action?: string | undefined;
  /** `autocomplete` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element. */
  autocomplete?: string | undefined;
  /** `enctype` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element. */
  enctype?: string | undefined;
  /** `method` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element. */
  method?: string | undefined;
  /** `name` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element. */
  name?: string | undefined;
  /** `novalidate` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element. */
  novalidate?: string | undefined;
  /** `rel` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element. */
  rel?: string | undefined;
  /** `target` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element. */
  target?: string | undefined;
}

/**
 * form renders the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/form>
 */
export function form(props?: FormElementProps, ...children: string[]): string {
  return renderElement("form", props as AnyProps, false, children);
}
