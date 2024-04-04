import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * HeadProps are the props for the [`head`](https://developer.mozilla.org/docs/Web/HTML/Element/head) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/head>
 */
export interface HeadProps extends GlobalAttributes {
  /** @deprecated */
  profile?: string | undefined;
}

/** head renders the [`head`](https://developer.mozilla.org/docs/Web/HTML/Element/head) element. */
export function head(props?: HeadProps & ChildrenProps): string {
  return renderElement("head", props);
}
