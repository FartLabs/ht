import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * MetaProps are the props for the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Element/meta) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/meta>
 */
export interface MetaProps extends GlobalAttributes {
  charset?: string | undefined;
  content?: string | undefined;
  "http-equiv"?: string | undefined;
  name?: string | undefined;
  /** @deprecated */
  scheme?: string | undefined;
}

/**
 * meta renders the [`meta`](https://developer.mozilla.org/docs/Web/HTML/Element/meta) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/meta>
 */
export function meta(props?: MetaProps): string {
  return renderElement("meta", props as AnyProps, true);
}
