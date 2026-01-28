/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ParamElementProps } from "@fartlabs/ht/html/param";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { ParamElementProps };

/**
 * PARAM renders the [`param`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param>
 * @deprecated
 */
export function PARAM(
  props?: ParamElementProps & { children?: string | string[] | undefined },
): string {
  const { children: _propsChildren, ...rest } = props ?? {};
  return renderElement("param", rest as AnyProps, true);
}
