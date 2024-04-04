import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ImgProps are the props for the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/img
 */
export interface ImgProps extends GlobalAttributes {
  /** @deprecated */
  align?: string | undefined;
  alt?: string | undefined;
  aspect_ratio_computed_from_attributes?: string | undefined;
  attributionsrc?: string | undefined;
  /** @deprecated */
  border?: string | undefined;
  crossorigin?: string | undefined;
  decoding?: string | undefined;
  fetchpriority?: string | undefined;
  height?: string | undefined;
  /** @deprecated */
  hspace?: string | undefined;
  ismap?: string | undefined;
  loading?: string | undefined;
  /** @deprecated */
  longdesc?: string | undefined;
  /** @deprecated */
  name?: string | undefined;
  referrerpolicy?: string | undefined;
  sizes?: string | undefined;
  src?: string | undefined;
  srcset?: string | undefined;
  usemap?: string | undefined;
  /** @deprecated */
  vspace?: string | undefined;
  width?: string | undefined;
}

/** img renders the [`img`](https://developer.mozilla.org/docs/Web/HTML/Element/img) element. */
export function img(props?: ImgProps & ChildrenProps): string {
  return renderElement("img", props);
}
