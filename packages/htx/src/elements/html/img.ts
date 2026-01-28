/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ImgElementProps } from "@fartlabs/ht/html/img";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { ImgElementProps };

/**
 * IMG renders the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img>
 */
export function IMG(
  props?: ImgElementProps & { children?: string | string[] | undefined },
): string {
  const { children: _propsChildren, ...rest } = props ?? {};
  return renderElement("img", rest as AnyProps, true);
}
