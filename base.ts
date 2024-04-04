import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * BaseProps are the props for the [`base`](https://developer.mozilla.org/docs/Web/HTML/Element/base) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/base
 */
export interface BaseProps extends GlobalAttributes {
  href?: string | undefined;
  target?: string | undefined;
}

/** base renders the [`base`](https://developer.mozilla.org/docs/Web/HTML/Element/base) element. */
export function base(props?: BaseProps & ChildrenProps): string {
  return renderElement("base", props);
}
