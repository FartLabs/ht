import { renderElement } from "./shared/mod.ts";

/**
 * SlotProps are the props for the [`slot`](https://developer.mozilla.org/docs/Web/HTML/Element/slot) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/slot
 */
export interface SlotProps {
  children: unknown[] | undefined;
  name: string | undefined;
}

/** slot renders the [`slot`](https://developer.mozilla.org/docs/Web/HTML/Element/slot) element. */
export function slot(props: SlotProps): string {
  return renderElement("slot", props);
}
