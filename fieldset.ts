import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * FieldsetProps are the props for the [`fieldset`](https://developer.mozilla.org/docs/Web/HTML/Element/fieldset) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/fieldset
 */
export interface FieldsetProps extends GlobalAttributes {
  disabled?: string | undefined;
  form?: string | undefined;
  name?: string | undefined;
}

/** fieldset renders the [`fieldset`](https://developer.mozilla.org/docs/Web/HTML/Element/fieldset) element. */
export function fieldset(props?: FieldsetProps & ChildrenProps): string {
  return renderElement("fieldset", props);
}
