import { renderElement } from "./shared/mod.ts";

/**
 * XmpProps are the props for the [`xmp`](https://developer.mozilla.org/docs/Web/HTML/Element/xmp) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/xmp
 */
export interface XmpProps {
  children: unknown[] | undefined;
}

/** xmp renders the [`xmp`](https://developer.mozilla.org/docs/Web/HTML/Element/xmp) element. */
export function xmp(props: XmpProps): string {
  return renderElement("xmp", props);
}
