/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * InputElementType is the type of the input element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#type>
 */
export type InputElementType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

/**
 * InputElementProps are the base props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface InputElementProps extends GlobalAttributes {
  /**
   * `accept` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#accept>
   */
  accept?: string | undefined;
  /**
   * `align` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `alt` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#alt>
   */
  alt?: string | undefined;
  /**
   * `capture` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#capture>
   */
  capture?: string | undefined;
  /**
   * `checked` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#checked>
   */
  checked?: string | undefined;
  /**
   * `dirname` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#dirname>
   */
  dirname?: string | undefined;
  /**
   * `disabled` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#disabled>
   */
  disabled?: string | undefined;
  /**
   * `form` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#form>
   */
  form?: string | undefined;
  /**
   * `formaction` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#formaction>
   */
  formaction?: string | undefined;
  /**
   * `formenctype` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#formenctype>
   */
  formenctype?: string | undefined;
  /**
   * `formmethod` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#formmethod>
   */
  formmethod?: string | undefined;
  /**
   * `formnovalidate` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#formnovalidate>
   */
  formnovalidate?: string | undefined;
  /**
   * `formtarget` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#formtarget>
   */
  formtarget?: string | undefined;
  /**
   * `list` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#list>
   */
  list?: string | undefined;
  /**
   * `max` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#max>
   */
  max?: string | undefined;
  /**
   * `maxlength` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#maxlength>
   */
  maxlength?: string | undefined;
  /**
   * `min` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#min>
   */
  min?: string | undefined;
  /**
   * `minlength` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#minlength>
   */
  minlength?: string | undefined;
  /**
   * `mozactionhint` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#mozactionhint>
   * @deprecated
   */
  mozactionhint?: string | undefined;
  /**
   * `multiple` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#multiple>
   */
  multiple?: string | undefined;
  /**
   * `name` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#name>
   */
  name?: string | undefined;
  /**
   * `pattern` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#pattern>
   */
  pattern?: string | undefined;
  /**
   * `placeholder` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#placeholder>
   */
  placeholder?: string | undefined;
  /**
   * `popovertarget` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#popovertarget>
   */
  popovertarget?: string | undefined;
  /**
   * `popovertargetaction` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#popovertargetaction>
   */
  popovertargetaction?: string | undefined;
  /**
   * `readonly` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#readonly>
   */
  readonly?: string | undefined;
  /**
   * `src` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#src>
   */
  src?: string | undefined;
  /**
   * `step` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#step>
   */
  step?: string | undefined;
  /**
   * `usemap` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#usemap>
   * @deprecated
   */
  usemap?: string | undefined;
  /**
   * `x-moz-errormessage` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#x-moz-errormessage>
   * @deprecated
   */
  "x-moz-errormessage"?: string | undefined;
  /**
   * `type` is the type of the input element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#type>
   */
  type?: InputElementType | undefined;
  /**
   * `value` is the value of the input element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input#value>
   */
  value?: string | undefined;
}

/**
 * input renders the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export function input(props?: InputElementProps): string {
  return renderElement("input", props as unknown as AnyProps, true);
}
