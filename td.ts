import { renderElement } from "./shared/mod.ts";

/**
 * TdProps are the props for the [`td`](https://developer.mozilla.org/docs/Web/HTML/Element/td) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/td
 */
export interface TdProps {
  children: unknown[] | undefined;
  /** @deprecated */
  abbr: string | undefined;
  /** @deprecated */
  align: string | undefined;
  /** @deprecated */
  axis: string | undefined;
  /** @deprecated */
  bgcolor: string | undefined;
  /** @deprecated */
  char: string | undefined;
  /** @deprecated */
  charoff: string | undefined;
  colspan: string | undefined;
  headers: string | undefined;
  rowspan: string | undefined;
  /** @deprecated */
  scope: string | undefined;
  /** @deprecated */
  valign: string | undefined;
  /** @deprecated */
  width: string | undefined;
}

/** td renders the [`td`](https://developer.mozilla.org/docs/Web/HTML/Element/td) element. */
export function td(props: TdProps): string {
  return renderElement("td", props);
}
