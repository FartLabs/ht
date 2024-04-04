import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * FormProps are the props for the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/form
 */
export interface FormProps extends GlobalAttributes {
  "accept-charset"?: string | undefined;
  action?: string | undefined;
  autocomplete?: string | undefined;
  enctype?: string | undefined;
  method?: string | undefined;
  name?: string | undefined;
  novalidate?: string | undefined;
  rel?: string | undefined;
  target?: string | undefined;
}

/** form renders the [`form`](https://developer.mozilla.org/docs/Web/HTML/Element/form) element. */
export function form(props?: FormProps & ChildrenProps): string {
  return renderElement("form", props);
}
