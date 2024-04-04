import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * LegendProps are the props for the [`legend`](https://developer.mozilla.org/docs/Web/HTML/Element/legend) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/legend
 */
export interface LegendProps extends GlobalAttributes {
  /** @deprecated */
  align?: string | undefined;
}

/** legend renders the [`legend`](https://developer.mozilla.org/docs/Web/HTML/Element/legend) element. */
export function legend(props?: LegendProps & ChildrenProps): string {
  return renderElement("legend", props);
}
