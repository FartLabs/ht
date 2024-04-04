import { renderElement } from "./shared/mod.ts";

/**
 * SourceProps are the props for the [`source`](https://developer.mozilla.org/docs/Web/HTML/Element/source) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/source
 */
export interface SourceProps {
  children: unknown[] | undefined;
  height: string | undefined;
  media: string | undefined;
  sizes: string | undefined;
  src: string | undefined;
  srcset: string | undefined;
  type: string | undefined;
  width: string | undefined;
}

/** source renders the [`source`](https://developer.mozilla.org/docs/Web/HTML/Element/source) element. */
export function source(props: SourceProps): string {
  return renderElement("source", props);
}
