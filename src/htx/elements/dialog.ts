/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { DialogElementProps } from "../../elements/dialog.ts";
import { dialog } from "../../elements/dialog.ts";

/**
 * DIALOGProps are the JSX props for the [`dialog`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog>
 */
export type DIALOGProps = DialogElementProps & { children?: string | string[] };

/**
 * DIALOG renders the [`dialog`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog>
 */
export function DIALOG(props?: DIALOGProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return dialog(rest, ...childArray);
}
