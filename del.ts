import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * DelProps are the props for the [`del`](https://developer.mozilla.org/docs/Web/HTML/Element/del) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/del>
 */
export interface DelProps extends GlobalAttributes {
  cite?: string | undefined;
  datetime?: string | undefined;
}

/** del renders the [`del`](https://developer.mozilla.org/docs/Web/HTML/Element/del) element. */
export function del(props?: DelProps & ChildrenProps): string {
  return renderElement("del", props);
}
