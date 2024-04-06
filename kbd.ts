import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * KbdElementProps are the props for the [`kbd`](https://developer.mozilla.org/docs/Web/HTML/Element/kbd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/kbd>
 */
export interface KbdElementProps extends GlobalAttributes {
}

/**
 * kbd renders the [`kbd`](https://developer.mozilla.org/docs/Web/HTML/Element/kbd) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/kbd>
 */
export function kbd(props?: KbdElementProps, ...children: string[]): string {
  return renderElement("kbd", props as AnyProps, false, children);
}
