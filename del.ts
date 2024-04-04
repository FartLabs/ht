import { renderElement } from "./shared/mod.ts";

/**
 * DelProps are the props for the [`del`](https://developer.mozilla.org/docs/Web/HTML/Element/del) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/del
 */
export interface DelProps {
  children: unknown[] | undefined;
  cite: string | undefined;
  datetime: string | undefined;
}

/** del renders the [`del`](https://developer.mozilla.org/docs/Web/HTML/Element/del) element. */
export function del(props: DelProps): string {
  return renderElement("del", props);
}
