import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * OptionProps are the props for the [`option`](https://developer.mozilla.org/docs/Web/HTML/Element/option) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/option
 */
export interface OptionProps extends GlobalAttributes {
  disabled?: string | undefined;
  label?: string | undefined;
  selected?: string | undefined;
  value?: string | undefined;
}

/** option renders the [`option`](https://developer.mozilla.org/docs/Web/HTML/Element/option) element. */
export function option(props?: OptionProps & ChildrenProps): string {
  return renderElement("option", props);
}
