import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * OlProps are the props for the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Element/ol) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/ol>
 */
export interface OlProps extends GlobalAttributes {
  /** @deprecated */
  compact?: string | undefined;
  reversed?: string | undefined;
  start?: string | undefined;
  type?: string | undefined;
}

/**
 * ol renders the [`ol`](https://developer.mozilla.org/docs/Web/HTML/Element/ol) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/ol>
 */
export function ol(props?: OlProps & ChildrenProps): string {
  return renderElement("ol", props);
}
