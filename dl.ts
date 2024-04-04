import { renderElement } from "./shared/mod.ts";

/**
 * DlProps are the props for the [`dl`](https://developer.mozilla.org/docs/Web/HTML/Element/dl) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/dl
 */
export interface DlProps {
  children: unknown[] | undefined;
}

/** dl renders the [`dl`](https://developer.mozilla.org/docs/Web/HTML/Element/dl) element. */
export function dl(props: DlProps): string {
  return renderElement("dl", props);
}
