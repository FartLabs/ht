import { renderElement } from "./shared/mod.ts";

/**
 * CaptionProps are the props for the [`caption`](https://developer.mozilla.org/docs/Web/HTML/Element/caption) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/caption
 */
export interface CaptionProps {
  children: unknown[] | undefined;
  /** @deprecated */
  align: string | undefined;
}

/** caption renders the [`caption`](https://developer.mozilla.org/docs/Web/HTML/Element/caption) element. */
export function caption(props: CaptionProps): string {
  return renderElement("caption", props);
}
