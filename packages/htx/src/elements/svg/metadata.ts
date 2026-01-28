/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { MetadataElementProps } from "@fartlabs/ht/svg/metadata";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { MetadataElementProps };

/**
 * METADATA renders the [`metadata`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/metadata) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/metadata>
 */
export function METADATA(
  props?: MetadataElementProps & { children?: string | string[] | undefined },
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "metadata",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
