/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { InputElementProps } from "../../elements/input.ts";
import { input } from "../../elements/input.ts";

/**
 * INPUTProps are the JSX props for the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input>
 */
export type INPUTProps = InputElementProps & { children?: string | string[] };

/**
 * INPUT renders the [`input`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input>
 */
export function INPUT(props?: INPUTProps): string {
  const { children: _children, ...rest } = props ?? {};
  return input(rest);
}
