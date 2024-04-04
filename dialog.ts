import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * DialogProps are the props for the [`dialog`](https://developer.mozilla.org/docs/Web/HTML/Element/dialog) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/dialog
 */
export interface DialogProps extends GlobalAttributes {
  open?: string | undefined;
}

/** dialog renders the [`dialog`](https://developer.mozilla.org/docs/Web/HTML/Element/dialog) element. */
export function dialog(props?: DialogProps & ChildrenProps): string {
  return renderElement("dialog", props);
}
