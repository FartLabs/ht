import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * BlockquoteProps are the props for the [`blockquote`](https://developer.mozilla.org/docs/Web/HTML/Element/blockquote) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/blockquote>
 */
export interface BlockquoteProps extends GlobalAttributes {
  cite?: string | undefined;
}

/**
 * blockquote renders the [`blockquote`](https://developer.mozilla.org/docs/Web/HTML/Element/blockquote) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/blockquote>
 */
export function blockquote(props?: BlockquoteProps & ChildrenProps): string {
  return renderElement("blockquote", props);
}
