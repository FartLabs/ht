import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

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
