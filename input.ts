import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * InputElementProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface InputElementProps extends GlobalAttributes {
  /** `accept` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  accept?: string | undefined;
  /**
   * `align` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @deprecated
   */
  align?: string | undefined;
  /** `alt` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  alt?: string | undefined;
  /** `capture` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  capture?: string | undefined;
  /** `checked` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  checked?: string | undefined;
  /** `dirname` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  dirname?: string | undefined;
  /** `disabled` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  disabled?: string | undefined;
  /** `form` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  form?: string | undefined;
  /** `formaction` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  formaction?: string | undefined;
  /** `formenctype` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  formenctype?: string | undefined;
  /** `formmethod` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  formmethod?: string | undefined;
  /** `formnovalidate` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  formnovalidate?: string | undefined;
  /** `formtarget` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  formtarget?: string | undefined;
  /** `list` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  list?: string | undefined;
  /** `max` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  max?: string | undefined;
  /** `maxlength` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  maxlength?: string | undefined;
  /** `min` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  min?: string | undefined;
  /** `minlength` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  minlength?: string | undefined;
  /**
   * `mozactionhint` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @deprecated
   */
  mozactionhint?: string | undefined;
  /** `multiple` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  multiple?: string | undefined;
  /** `name` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  name?: string | undefined;
  /** `pattern` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  pattern?: string | undefined;
  /** `placeholder` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  placeholder?: string | undefined;
  /** `popovertarget` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  popovertarget?: string | undefined;
  /** `popovertargetaction` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  popovertargetaction?: string | undefined;
  /** `readonly` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  readonly?: string | undefined;
  /** `src` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  src?: string | undefined;
  /** `step` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
  step?: string | undefined;
  /**
   * `usemap` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @deprecated
   */
  usemap?: string | undefined;
  /**
   * `x-moz-errormessage` is an attribute of the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
   * @deprecated
   */
  "x-moz-errormessage"?: string | undefined;
}

/**
 * input renders the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export function input(props?: InputElementProps): string {
  return renderElement("input", props as AnyProps, true);
}
