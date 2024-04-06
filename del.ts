import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * DelElementProps are the props for the [`del`](https://developer.mozilla.org/docs/Web/HTML/Element/del) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/del>
 */
export interface DelElementProps extends GlobalAttributes {
  /** `cite` is an attribute of the [`del`](https://developer.mozilla.org/docs/Web/HTML/Element/del) element. */
  cite?: string | undefined;
  /** `datetime` is an attribute of the [`del`](https://developer.mozilla.org/docs/Web/HTML/Element/del) element. */
  datetime?: string | undefined;
}

/**
 * del renders the [`del`](https://developer.mozilla.org/docs/Web/HTML/Element/del) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/del>
 */
export function del(props?: DelElementProps, ...children: string[]): string {
  return renderElement("del", props as AnyProps, false, children);
}
