/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ScriptElementProps } from "@fartlabs/ht/html/script";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { ScriptElementProps };

/**
 * SCRIPT renders the [`script`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script>
 */
export function SCRIPT(
  props?: ScriptElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "script",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
