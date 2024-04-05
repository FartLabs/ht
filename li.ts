import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * LiElementProps are the props for the [`li`](https://developer.mozilla.org/docs/Web/HTML/Element/li) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/li>
 */
export interface LiElementProps extends GlobalAttributes {
  /**
   * `type` is an attribute of the [`li`](https://developer.mozilla.org/docs/Web/HTML/Element/li) element.
   * @deprecated
   */
  type?: string | undefined;
  /** `value` is an attribute of the [`li`](https://developer.mozilla.org/docs/Web/HTML/Element/li) element. */
  value?: string | undefined;
}

/**
 * li renders the [`li`](https://developer.mozilla.org/docs/Web/HTML/Element/li) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/li>
 */
export function li(props?: LiElementProps, ...children: string[]): string {
  return renderElement("li", props as AnyProps, false, children);
}
