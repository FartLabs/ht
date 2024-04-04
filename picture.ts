import { renderElement } from "./shared/mod.ts";

/**
 * PictureProps are the props for the [`picture`](https://developer.mozilla.org/docs/Web/HTML/Element/picture) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/picture
 */
export interface PictureProps {
  children: unknown[] | undefined;
}

/** picture renders the [`picture`](https://developer.mozilla.org/docs/Web/HTML/Element/picture) element. */
export function picture(props: PictureProps): string {
  return renderElement("picture", props);
}
