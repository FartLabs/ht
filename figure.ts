import { renderElement } from "./shared/mod.ts";

/**
 * FigureProps are the props for the [`figure`](https://developer.mozilla.org/docs/Web/HTML/Element/figure) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/figure
 */
export interface FigureProps {
  children: unknown[] | undefined;
}

/** figure renders the [`figure`](https://developer.mozilla.org/docs/Web/HTML/Element/figure) element. */
export function figure(props: FigureProps): string {
  return renderElement("figure", props);
}
