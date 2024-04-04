import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * ThProps are the props for the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/th
 */
export interface ThProps extends GlobalAttributes {
  abbr?: string | undefined;
  /** @deprecated */
  align?: string | undefined;
  /** @deprecated */
  axis?: string | undefined;
  /** @deprecated */
  bgcolor?: string | undefined;
  /** @deprecated */
  char?: string | undefined;
  /** @deprecated */
  charoff?: string | undefined;
  colspan?: string | undefined;
  headers?: string | undefined;
  rowspan?: string | undefined;
  scope?: string | undefined;
  /** @deprecated */
  valign?: string | undefined;
  /** @deprecated */
  width?: string | undefined;
}

/** th renders the [`th`](https://developer.mozilla.org/docs/Web/HTML/Element/th) element. */
export function th(props?: ThProps & ChildrenProps): string {
  return renderElement("th", props);
}
