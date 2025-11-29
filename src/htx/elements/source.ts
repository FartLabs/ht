/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { SourceElementProps } from "../../elements/source.ts";
import { source } from "../../elements/source.ts";

/**
 * SOURCEProps are the JSX props for the [`source`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source>
 */
export type SOURCEProps = SourceElementProps & { children?: string | string[] };

/**
 * SOURCE renders the [`source`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source>
 */
export function SOURCE(props?: SOURCEProps): string {
  const { children: _children, ...rest } = props ?? {};
  return source(rest);
}
