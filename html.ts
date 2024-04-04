import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * HtmlProps are the props for the [`html`](https://developer.mozilla.org/docs/Web/HTML/Element/html) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/html>
 */
export interface HtmlProps extends GlobalAttributes {
  /** @deprecated */
  manifest?: string | undefined;
  /** @deprecated */
  version?: string | undefined;
  xmlns?: string | undefined;
}

/** html renders the [`html`](https://developer.mozilla.org/docs/Web/HTML/Element/html) element. */
export function html(props?: HtmlProps & ChildrenProps): string {
  return renderElement("html", props);
}
