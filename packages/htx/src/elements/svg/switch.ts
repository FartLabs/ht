/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SwitchElementProps } from "@fartlabs/ht/svg/switch";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { SwitchElementProps };

/**
 * SWITCH renders the [`switch`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/switch) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/switch>
 */
export function SWITCH(
  props?: SwitchElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "switch",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
