import { renderElement } from "./shared/mod.ts";

/**
 * InsProps are the props for the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Element/ins) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/ins
 */
export interface InsProps {
  children: unknown[] | undefined;
  cite: string | undefined;
  datetime: string | undefined;
}

/** ins renders the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Element/ins) element. */
export function ins(props: InsProps): string {
  return renderElement("ins", props);
}
