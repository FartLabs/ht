import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * OptgroupProps are the props for the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/optgroup) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/optgroup
 */
export interface OptgroupProps extends GlobalAttributes {
  disabled?: string | undefined;
  label?: string | undefined;
}

/** optgroup renders the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/optgroup) element. */
export function optgroup(props?: OptgroupProps & ChildrenProps): string {
  return renderElement("optgroup", props);
}
