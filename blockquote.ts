import { renderElement } from "./shared/mod.ts";

/**
 * BlockquoteProps are the props for the [`blockquote`](https://developer.mozilla.org/docs/Web/HTML/Element/blockquote) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/blockquote
 */
export interface BlockquoteProps {
  children: unknown[] | undefined;
  cite: string | undefined;
}

/** blockquote renders the [`blockquote`](https://developer.mozilla.org/docs/Web/HTML/Element/blockquote) element. */
export function blockquote(props: BlockquoteProps): string {
  return renderElement("blockquote", props);
}
