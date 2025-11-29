/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ScriptElementProps } from "../../elements/script.ts";
import { script } from "../../elements/script.ts";

/**
 * SCRIPTProps are the JSX props for the [`script`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script>
 */
export type SCRIPTProps = ScriptElementProps & { children?: string | string[] };

/**
 * SCRIPT renders the [`script`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script>
 */
export function SCRIPT(props?: SCRIPTProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return script(rest, ...childArray);
}
