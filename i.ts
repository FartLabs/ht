import { renderElement } from "./shared/mod.ts";

/**
 * IProps are the props for the [`i`](https://developer.mozilla.org/docs/Web/HTML/Element/i) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/i
 */
export interface IProps {
  children: unknown[] | undefined;
}

/** i renders the [`i`](https://developer.mozilla.org/docs/Web/HTML/Element/i) element. */
export function i(props: IProps): string {
  return renderElement("i", props);
}
