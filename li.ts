import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * LiProps are the props for the [`li`](https://developer.mozilla.org/docs/Web/HTML/Element/li) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/li>
 */
export interface LiProps extends GlobalAttributes {
  /** @deprecated */
  type?: string | undefined;
  value?: string | undefined;
}

/** li renders the [`li`](https://developer.mozilla.org/docs/Web/HTML/Element/li) element. */
export function li(props?: LiProps & ChildrenProps): string {
  return renderElement("li", props);
}
