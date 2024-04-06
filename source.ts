import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * SourceElementProps are the props for the [`source`](https://developer.mozilla.org/docs/Web/HTML/Element/source) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/source>
 */
export interface SourceElementProps extends GlobalAttributes {
  /** `height` is an attribute of the [`source`](https://developer.mozilla.org/docs/Web/HTML/Element/source) element. */
  height?: string | undefined;
  /** `media` is an attribute of the [`source`](https://developer.mozilla.org/docs/Web/HTML/Element/source) element. */
  media?: string | undefined;
  /** `sizes` is an attribute of the [`source`](https://developer.mozilla.org/docs/Web/HTML/Element/source) element. */
  sizes?: string | undefined;
  /** `src` is an attribute of the [`source`](https://developer.mozilla.org/docs/Web/HTML/Element/source) element. */
  src?: string | undefined;
  /** `srcset` is an attribute of the [`source`](https://developer.mozilla.org/docs/Web/HTML/Element/source) element. */
  srcset?: string | undefined;
  /** `type` is an attribute of the [`source`](https://developer.mozilla.org/docs/Web/HTML/Element/source) element. */
  type?: string | undefined;
  /** `width` is an attribute of the [`source`](https://developer.mozilla.org/docs/Web/HTML/Element/source) element. */
  width?: string | undefined;
}

/**
 * source renders the [`source`](https://developer.mozilla.org/docs/Web/HTML/Element/source) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/source>
 */
export function source(props?: SourceElementProps): string {
  return renderElement("source", props as AnyProps, true);
}
