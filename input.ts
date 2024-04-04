import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * InputProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export interface InputProps extends GlobalAttributes {
  accept?: string | undefined;
  /** @deprecated */
  align?: string | undefined;
  alt?: string | undefined;
  capture?: string | undefined;
  checked?: string | undefined;
  dirname?: string | undefined;
  disabled?: string | undefined;
  form?: string | undefined;
  formaction?: string | undefined;
  formenctype?: string | undefined;
  formmethod?: string | undefined;
  formnovalidate?: string | undefined;
  formtarget?: string | undefined;
  list?: string | undefined;
  max?: string | undefined;
  maxlength?: string | undefined;
  min?: string | undefined;
  minlength?: string | undefined;
  /** @deprecated */
  mozactionhint?: string | undefined;
  multiple?: string | undefined;
  name?: string | undefined;
  pattern?: string | undefined;
  placeholder?: string | undefined;
  popovertarget?: string | undefined;
  popovertargetaction?: string | undefined;
  readonly?: string | undefined;
  src?: string | undefined;
  step?: string | undefined;
  /** @deprecated */
  usemap?: string | undefined;
  /** @deprecated */
  "x-moz-errormessage"?: string | undefined;
}

/**
 * input renders the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/input>
 */
export function input(props?: InputProps): string {
  return renderElement("input", props as AnyProps, true);
}
