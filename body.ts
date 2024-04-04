import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * BodyProps are the props for the [`body`](https://developer.mozilla.org/docs/Web/HTML/Element/body) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/body>
 */
export interface BodyProps extends GlobalAttributes {
  /** @deprecated */
  alink?: string | undefined;
  /** @deprecated */
  background?: string | undefined;
  /** @deprecated */
  bgcolor?: string | undefined;
  /** @deprecated */
  bottommargin?: string | undefined;
  /** @deprecated */
  leftmargin?: string | undefined;
  /** @deprecated */
  link?: string | undefined;
  /** @deprecated */
  rightmargin?: string | undefined;
  /** @deprecated */
  text?: string | undefined;
  /** @deprecated */
  topmargin?: string | undefined;
  /** @deprecated */
  vlink?: string | undefined;
}

/**
 * body renders the [`body`](https://developer.mozilla.org/docs/Web/HTML/Element/body) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/body>
 */
export function body(props?: BodyProps & ChildrenProps): string {
  return renderElement("body", props);
}
