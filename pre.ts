import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * PreProps are the props for the [`pre`](https://developer.mozilla.org/docs/Web/HTML/Element/pre) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/pre
 */
export interface PreProps extends GlobalAttributes {
  /** @deprecated */
  cols?: string | undefined;
  /** @deprecated */
  width?: string | undefined;
  /** @deprecated */
  wrap?: string | undefined;
}

/** pre renders the [`pre`](https://developer.mozilla.org/docs/Web/HTML/Element/pre) element. */
export function pre(props?: PreProps & ChildrenProps): string {
  return renderElement("pre", props);
}
