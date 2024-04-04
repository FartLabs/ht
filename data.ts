import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * DataProps are the props for the [`data`](https://developer.mozilla.org/docs/Web/HTML/Element/data) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/data>
 */
export interface DataProps extends GlobalAttributes {
  value?: string | undefined;
}

/** data renders the [`data`](https://developer.mozilla.org/docs/Web/HTML/Element/data) element. */
export function data(props?: DataProps & ChildrenProps): string {
  return renderElement("data", props);
}
