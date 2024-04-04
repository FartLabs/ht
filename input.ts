import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * InputProps are the props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/input
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
  type_button?: string | undefined;
  type_checkbox?: string | undefined;
  type_color?: string | undefined;
  type_date?: string | undefined;
  "type_datetime-local"?: string | undefined;
  type_email?: string | undefined;
  type_file?: string | undefined;
  type_hidden?: string | undefined;
  type_image?: string | undefined;
  type_month?: string | undefined;
  type_number?: string | undefined;
  type_password?: string | undefined;
  type_radio?: string | undefined;
  type_range?: string | undefined;
  type_reset?: string | undefined;
  type_search?: string | undefined;
  type_submit?: string | undefined;
  type_tel?: string | undefined;
  type_text?: string | undefined;
  type_time?: string | undefined;
  type_url?: string | undefined;
  type_week?: string | undefined;
  /** @deprecated */
  usemap?: string | undefined;
  /** @deprecated */
  "x-moz-errormessage"?: string | undefined;
}

/** input renders the [`input`](https://developer.mozilla.org/docs/Web/HTML/Element/input) element. */
export function input(props?: InputProps & ChildrenProps): string {
  return renderElement("input", props);
}
