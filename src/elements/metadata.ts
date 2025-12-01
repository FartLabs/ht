/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../global_attributes.ts";
import type { AnyProps } from "../render.ts";
import { renderElement } from "../render.ts";

/**
 * MetadataElementProps are the props for the [`metadata`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/metadata) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/metadata>
 */
export interface MetadataElementProps extends GlobalAttributes {
}

/**
 * metadata renders the [`metadata`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/metadata) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/metadata>
 */
export function metadata(
  props?: MetadataElementProps,
  ...children: string[]
): string {
  return renderElement("metadata", props as AnyProps, false, children);
}
