import { renderElement } from "./shared/mod.ts";

/**
 * ColgroupProps are the props for the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/colgroup) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/colgroup
 */
export interface ColgroupProps {
  children: unknown[] | undefined;
  /** @deprecated */
  align: string | undefined;
  /** @deprecated */
  char: string | undefined;
  /** @deprecated */
  charoff: string | undefined;
  span: string | undefined;
  /** @deprecated */
  valign: string | undefined;
  /** @deprecated */
  width: string | undefined;
}

/** colgroup renders the [`colgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/colgroup) element. */
export function colgroup(props: ColgroupProps): string {
  return renderElement("colgroup", props);
}
