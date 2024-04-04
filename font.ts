import { renderElement } from "./shared/mod.ts";

/**
 * FontProps are the props for the [`font`](https://developer.mozilla.org/docs/Web/HTML/Element/font) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/font
 */
export interface FontProps {
  children: unknown[] | undefined;
  /** @deprecated */
  color: string | undefined;
  /** @deprecated */
  face: string | undefined;
  /** @deprecated */
  size: string | undefined;
}

/** font renders the [`font`](https://developer.mozilla.org/docs/Web/HTML/Element/font) element. */
export function font(props: FontProps): string {
  return renderElement("font", props);
}
