import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TableProps are the props for the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/table>
 */
export interface TableProps extends GlobalAttributes {
  /** @deprecated */
  align?: string | undefined;
  /** @deprecated */
  bgcolor?: string | undefined;
  /** @deprecated */
  border?: string | undefined;
  /** @deprecated */
  cellpadding?: string | undefined;
  /** @deprecated */
  cellspacing?: string | undefined;
  /** @deprecated */
  frame?: string | undefined;
  /** @deprecated */
  rules?: string | undefined;
  /** @deprecated */
  summary?: string | undefined;
  /** @deprecated */
  width?: string | undefined;
}

/** table renders the [`table`](https://developer.mozilla.org/docs/Web/HTML/Element/table) element. */
export function table(props?: TableProps & ChildrenProps): string {
  return renderElement("table", props);
}
