import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * OutputProps are the props for the [`output`](https://developer.mozilla.org/docs/Web/HTML/Element/output) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/output
 */
export interface OutputProps extends GlobalAttributes {
  for?: string | undefined;
  form?: string | undefined;
  name?: string | undefined;
}

/** output renders the [`output`](https://developer.mozilla.org/docs/Web/HTML/Element/output) element. */
export function output(props?: OutputProps & ChildrenProps): string {
  return renderElement("output", props);
}
