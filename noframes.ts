import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * NoframesElementProps are the props for the [`noframes`](https://developer.mozilla.org/docs/Web/HTML/Element/noframes) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/noframes>
 * @deprecated
 */
export type NoframesElementProps = GlobalAttributes;

/**
 * noframes renders the [`noframes`](https://developer.mozilla.org/docs/Web/HTML/Element/noframes) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/noframes>
 * @deprecated
 */
export function noframes(
  props?: NoframesElementProps,
  ...children: string[]
): string {
  return renderElement("noframes", props as AnyProps, false, children);
}
