import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * DirProps are the props for the [`dir`](https://developer.mozilla.org/docs/Web/HTML/Element/dir) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/dir>
 * @deprecated
 */
export interface DirProps extends GlobalAttributes {
  /** @deprecated */
  compact?: string | undefined;
}

/**
 * dir renders the [`dir`](https://developer.mozilla.org/docs/Web/HTML/Element/dir) element.
 * @deprecated
 */
export function dir(props?: DirProps & ChildrenProps): string {
  return renderElement("dir", props);
}
