import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * SelectProps are the props for the [`select`](https://developer.mozilla.org/docs/Web/HTML/Element/select) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/select
 */
export interface SelectProps extends GlobalAttributes {
  disabled?: string | undefined;
  form?: string | undefined;
  hr_in_select?: string | undefined;
  multiple?: string | undefined;
  name?: string | undefined;
  required?: string | undefined;
  size?: string | undefined;
}

/** select renders the [`select`](https://developer.mozilla.org/docs/Web/HTML/Element/select) element. */
export function select(props?: SelectProps & ChildrenProps): string {
  return renderElement("select", props);
}
