import { renderElement } from "./shared/mod.ts";

/**
 * MapProps are the props for the [`map`](https://developer.mozilla.org/docs/Web/HTML/Element/map) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/map
 */
export interface MapProps {
  children: unknown[] | undefined;
  name: string | undefined;
}

/** map renders the [`map`](https://developer.mozilla.org/docs/Web/HTML/Element/map) element. */
export function map(props: MapProps): string {
  return renderElement("map", props);
}
