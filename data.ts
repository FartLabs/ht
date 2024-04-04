import { renderElement } from "./shared/mod.ts";

/**
 * DataProps are the props for the [`data`](https://developer.mozilla.org/docs/Web/HTML/Element/data) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/data
 */
export interface DataProps {
  children: unknown[] | undefined;
  value: string | undefined;
}

/** data renders the [`data`](https://developer.mozilla.org/docs/Web/HTML/Element/data) element. */
export function data(props: DataProps): string {
  return renderElement("data", props);
}
