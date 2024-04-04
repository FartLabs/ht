import { renderElement } from "./shared/mod.ts";

/**
 * FooterProps are the props for the [`footer`](https://developer.mozilla.org/docs/Web/HTML/Element/footer) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/footer
 */
export interface FooterProps {
  children: unknown[] | undefined;
}

/** footer renders the [`footer`](https://developer.mozilla.org/docs/Web/HTML/Element/footer) element. */
export function footer(props: FooterProps): string {
  return renderElement("footer", props);
}
