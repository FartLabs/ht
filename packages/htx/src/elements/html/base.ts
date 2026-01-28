/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { BaseElementProps } from "@fartlabs/ht/html/base";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { BaseElementProps };

/**
 * BASE renders the [`base`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/base) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/base>
 */
export function BASE(
  props?: BaseElementProps & { children?: string | string[] | undefined },
): string {
  const { children: _propsChildren, ...rest } = props ?? {};
  return renderElement("base", rest as AnyProps, true);
}
