import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TfootProps are the props for the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Element/tfoot) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/tfoot
 */
export interface TfootProps extends GlobalAttributes {
  /** @deprecated */
  align?: string | undefined;
  /** @deprecated */
  bgcolor?: string | undefined;
  /** @deprecated */
  char?: string | undefined;
  /** @deprecated */
  charoff?: string | undefined;
  /** @deprecated */
  valign?: string | undefined;
}

/** tfoot renders the [`tfoot`](https://developer.mozilla.org/docs/Web/HTML/Element/tfoot) element. */
export function tfoot(props?: TfootProps & ChildrenProps): string {
  return renderElement("tfoot", props);
}
