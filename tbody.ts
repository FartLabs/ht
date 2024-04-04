import { renderElement } from "./shared/mod.ts";

/**
 * TbodyProps are the props for the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Element/tbody) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/tbody
 */
export interface TbodyProps {
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

/** tbody renders the [`tbody`](https://developer.mozilla.org/docs/Web/HTML/Element/tbody) element. */
export function tbody(props: TbodyProps): string {
  return renderElement("tbody", props);
}
