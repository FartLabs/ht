import { renderElement } from "./shared/mod.ts";

/**
 * SectionProps are the props for the [`section`](https://developer.mozilla.org/docs/Web/HTML/Element/section) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/section
 */
export interface SectionProps {
  children: unknown[] | undefined;
}

/** section renders the [`section`](https://developer.mozilla.org/docs/Web/HTML/Element/section) element. */
export function section(props: SectionProps): string {
  return renderElement("section", props);
}
