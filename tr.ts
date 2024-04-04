import { renderElement } from "./shared/mod.ts";

/**
 * TrProps are the props for the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Element/tr) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/tr
 */
export interface TrProps {
  children: unknown[] | undefined;
  /** @deprecated */
  align: string | undefined;
  /** @deprecated */
  bgcolor: string | undefined;
  /** @deprecated */
  char: string | undefined;
  /** @deprecated */
  charoff: string | undefined;
  /** @deprecated */
  valign: string | undefined;
}

/** tr renders the [`tr`](https://developer.mozilla.org/docs/Web/HTML/Element/tr) element. */
export function tr(props: TrProps): string {
  return renderElement("tr", props);
}
