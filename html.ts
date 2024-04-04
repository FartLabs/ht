import { renderElement } from "./shared/mod.ts";

/**
 * HtmlProps are the props for the [`html`](https://developer.mozilla.org/docs/Web/HTML/Element/html) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/html
 */
export interface HtmlProps {
  children: unknown[] | undefined;
  /** @deprecated */
  manifest: string | undefined;
  /** @deprecated */
  version: string | undefined;
  xmlns: string | undefined;
}

/** html renders the [`html`](https://developer.mozilla.org/docs/Web/HTML/Element/html) element. */
export function html(props: HtmlProps): string {
  return renderElement("html", props);
}
