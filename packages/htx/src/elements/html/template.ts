/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TemplateElementProps } from "@fartlabs/ht/html/template";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { TemplateElementProps };

/**
 * TEMPLATE renders the [`template`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template>
 */
export function TEMPLATE(
  props?: TemplateElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "template",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
