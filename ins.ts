import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * InsProps are the props for the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Element/ins) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/ins
 */
export interface InsProps extends GlobalAttributes {
  cite?: string | undefined;
  datetime?: string | undefined;
}

/** ins renders the [`ins`](https://developer.mozilla.org/docs/Web/HTML/Element/ins) element. */
export function ins(props?: InsProps & ChildrenProps): string {
  return renderElement("ins", props);
}
