import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * DetailsProps are the props for the [`details`](https://developer.mozilla.org/docs/Web/HTML/Element/details) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/details>
 */
export interface DetailsProps extends GlobalAttributes {
  name?: string | undefined;
  open?: string | undefined;
}

/** details renders the [`details`](https://developer.mozilla.org/docs/Web/HTML/Element/details) element. */
export function details(props?: DetailsProps & ChildrenProps): string {
  return renderElement("details", props);
}
