import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * CaptionProps are the props for the [`caption`](https://developer.mozilla.org/docs/Web/HTML/Element/caption) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/caption
 */
export interface CaptionProps extends GlobalAttributes {
  /** @deprecated */
  align?: string | undefined;
}

/** caption renders the [`caption`](https://developer.mozilla.org/docs/Web/HTML/Element/caption) element. */
export function caption(props?: CaptionProps & ChildrenProps): string {
  return renderElement("caption", props);
}
