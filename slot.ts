import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * SlotProps are the props for the [`slot`](https://developer.mozilla.org/docs/Web/HTML/Element/slot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/slot>
 */
export interface SlotProps extends GlobalAttributes {
  name?: string | undefined;
}

/**
 * slot renders the [`slot`](https://developer.mozilla.org/docs/Web/HTML/Element/slot) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/slot>
 */
export function slot(props?: SlotProps & ChildrenProps): string {
  return renderElement("slot", props);
}
