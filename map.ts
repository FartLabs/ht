import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * MapProps are the props for the [`map`](https://developer.mozilla.org/docs/Web/HTML/Element/map) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/map
 */
export interface MapProps extends GlobalAttributes {
  name?: string | undefined;
}

/** map renders the [`map`](https://developer.mozilla.org/docs/Web/HTML/Element/map) element. */
export function map(props?: MapProps & ChildrenProps): string {
  return renderElement("map", props);
}
