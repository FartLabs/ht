/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SourceElementProps } from "@fartlabs/ht/html/source";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { SourceElementProps };

/**
 * SOURCE renders the [`source`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source>
 */
export function SOURCE(
  props?: SourceElementProps & { children?: string | string[] | undefined },
): string {
  const { children: _propsChildren, ...rest } = props ?? {};
  return renderElement("source", rest as AnyProps, true);
}
