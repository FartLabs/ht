import { renderElement } from "./shared/mod.ts";

/**
 * KbdProps are the props for the [`kbd`](https://developer.mozilla.org/docs/Web/HTML/Element/kbd) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/kbd
 */
export interface KbdProps {
  children: unknown[] | undefined;
}

/** kbd renders the [`kbd`](https://developer.mozilla.org/docs/Web/HTML/Element/kbd) element. */
export function kbd(props: KbdProps): string {
  return renderElement("kbd", props);
}
