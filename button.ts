/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ButtonElementProps are the props for the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/button>
 */
export interface ButtonElementProps extends GlobalAttributes {
  /**
   * `disabled` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/button#disabled>
   */
  disabled?: string | undefined;
  /**
   * `form` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/button#form>
   */
  form?: string | undefined;
  /**
   * `formaction` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/button#formaction>
   */
  formaction?: string | undefined;
  /**
   * `formenctype` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/button#formenctype>
   */
  formenctype?: string | undefined;
  /**
   * `formmethod` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/button#formmethod>
   */
  formmethod?: string | undefined;
  /**
   * `formnovalidate` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/button#formnovalidate>
   */
  formnovalidate?: string | undefined;
  /**
   * `formtarget` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/button#formtarget>
   */
  formtarget?: string | undefined;
  /**
   * `name` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/button#name>
   */
  name?: string | undefined;
  /**
   * `popovertarget` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/button#popovertarget>
   */
  popovertarget?: string | undefined;
  /**
   * `popovertargetaction` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/button#popovertargetaction>
   */
  popovertargetaction?: string | undefined;
  /**
   * `type` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/button#type>
   */
  type?: string | undefined;
  /**
   * `value` is an attribute of the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/button#value>
   */
  value?: string | undefined;
}

/**
 * button renders the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/button>
 */
export function button(
  props?: ButtonElementProps,
  ...children: string[]
): string {
  return renderElement("button", props as AnyProps, false, children);
}
