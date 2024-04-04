import { renderElement } from "./shared/mod.ts";

/**
 * DialogProps are the props for the [`dialog`](https://developer.mozilla.org/docs/Web/HTML/Element/dialog) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/dialog
 */
export interface DialogProps {
  children: unknown[] | undefined;
  open: string | undefined;
}

/** dialog renders the [`dialog`](https://developer.mozilla.org/docs/Web/HTML/Element/dialog) element. */
export function dialog(props: DialogProps): string {
  return renderElement("dialog", props);
}
