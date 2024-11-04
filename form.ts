/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * FormElementProps are the props for the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/form>
 */
export interface FormElementProps extends GlobalAttributes {
  /**
   * `accept-charset` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/form#accept-charset>
   */
  "accept-charset"?: string | undefined;
  /**
   * `action` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/form#action>
   */
  action?: string | undefined;
  /**
   * `autocomplete` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/form#autocomplete>
   */
  autocomplete?: string | undefined;
  /**
   * `enctype` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/form#enctype>
   */
  enctype?: string | undefined;
  /**
   * `method` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/form#method>
   */
  method?: string | undefined;
  /**
   * `name` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/form#name>
   */
  name?: string | undefined;
  /**
   * `novalidate` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/form#novalidate>
   */
  novalidate?: string | undefined;
  /**
   * `rel` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/form#rel>
   */
  rel?: string | undefined;
  /**
   * `target` is an attribute of the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/form#target>
   */
  target?: string | undefined;
}

/**
 * form renders the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/form>
 */
export function form(props?: FormElementProps, ...children: string[]): string {
  return renderElement("form", props as AnyProps, false, children);
}
