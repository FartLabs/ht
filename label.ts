import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * LabelProps are the props for the [`label`](https://developer.mozilla.org/docs/Web/HTML/Element/label) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/label
 */
export interface LabelProps extends GlobalAttributes {
  for?: string | undefined;
}

/** label renders the [`label`](https://developer.mozilla.org/docs/Web/HTML/Element/label) element. */
export function label(props?: LabelProps & ChildrenProps): string {
  return renderElement("label", props);
}
