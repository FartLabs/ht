import { renderElement } from "./shared/mod.ts";

/**
 * WbrProps are the props for the [`wbr`](https://developer.mozilla.org/docs/Web/HTML/Element/wbr) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/wbr
 */
export interface WbrProps {
  children: unknown[] | undefined;
}

/** wbr renders the [`wbr`](https://developer.mozilla.org/docs/Web/HTML/Element/wbr) element. */
export function wbr(props: WbrProps): string {
  return renderElement("wbr", props);
}
