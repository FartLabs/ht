import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * noembed renders the [`noembed`](https://developer.mozilla.org/docs/Web/HTML/Element/noembed) element.
 * @deprecated
 */
export function noembed(props?: GlobalAttributes & ChildrenProps): string {
  return renderElement("noembed", props);
}
