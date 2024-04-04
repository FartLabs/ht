import { renderElement } from "./shared/mod.ts";

/**
 * DatalistProps are the props for the [`datalist`](https://developer.mozilla.org/docs/Web/HTML/Element/datalist) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/datalist
 */
export interface DatalistProps {
  children: unknown[] | undefined;
}

/** datalist renders the [`datalist`](https://developer.mozilla.org/docs/Web/HTML/Element/datalist) element. */
export function datalist(props: DatalistProps): string {
  return renderElement("datalist", props);
}
