import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * StyleProps are the props for the [`style`](https://developer.mozilla.org/docs/Web/HTML/Element/style) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/style>
 */
export interface StyleProps extends GlobalAttributes {
  /** @experimental */
  blocking?: string | undefined;
  media?: string | undefined;
  /** @deprecated */
  type?: string | undefined;
}

/**
 * style renders the [`style`](https://developer.mozilla.org/docs/Web/HTML/Element/style) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/style>
 */
export function style(props?: StyleProps, ...children: string[]): string {
  return renderElement("style", props as AnyProps, false, children);
}
