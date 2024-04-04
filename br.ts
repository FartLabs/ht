import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * BrProps are the props for the [`br`](https://developer.mozilla.org/docs/Web/HTML/Element/br) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/br
 */
export interface BrProps extends GlobalAttributes {
  /** @deprecated */
  clear?: string | undefined;
}

/** br renders the [`br`](https://developer.mozilla.org/docs/Web/HTML/Element/br) element. */
export function br(props?: BrProps & ChildrenProps): string {
  return renderElement("br", props);
}
