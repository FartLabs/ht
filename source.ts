import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * SourceProps are the props for the [`source`](https://developer.mozilla.org/docs/Web/HTML/Element/source) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/source>
 */
export interface SourceProps extends GlobalAttributes {
  height?: string | undefined;
  media?: string | undefined;
  sizes?: string | undefined;
  src?: string | undefined;
  srcset?: string | undefined;
  type?: string | undefined;
  width?: string | undefined;
}

/**
 * source renders the [`source`](https://developer.mozilla.org/docs/Web/HTML/Element/source) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/source>
 */
export function source(props?: SourceProps): string {
  return renderElement("source", props as AnyProps, true);
}
