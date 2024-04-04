import { renderElement } from "./shared/mod.ts";

/**
 * ButtonProps are the props for the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/button
 */
export interface ButtonProps {
  children: unknown[] | undefined;
  disabled: string | undefined;
  form: string | undefined;
  formaction: string | undefined;
  formenctype: string | undefined;
  formmethod: string | undefined;
  formnovalidate: string | undefined;
  formtarget: string | undefined;
  name: string | undefined;
  popovertarget: string | undefined;
  popovertargetaction: string | undefined;
  type: string | undefined;
  value: string | undefined;
}

/** button renders the [`button`](https://developer.mozilla.org/docs/Web/HTML/Element/button) element. */
export function button(props: ButtonProps): string {
  return renderElement("button", props);
}
