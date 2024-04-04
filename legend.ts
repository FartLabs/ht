import { renderElement } from "./shared/mod.ts";

/**
 * LegendProps are the props for the [`legend`](https://developer.mozilla.org/docs/Web/HTML/Element/legend) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/legend
 */
export interface LegendProps {
  children: unknown[] | undefined;
  /** @deprecated */
  align: string | undefined;
}

/** legend renders the [`legend`](https://developer.mozilla.org/docs/Web/HTML/Element/legend) element. */
export function legend(props: LegendProps): string {
  return renderElement("legend", props);
}
