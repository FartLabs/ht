import { renderElement } from "./shared/mod.ts";

/**
 * StyleProps are the props for the [`style`](https://developer.mozilla.org/docs/Web/HTML/Element/style) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/style
 */
export interface StyleProps {
  children: unknown[] | undefined;
  blocking: string | undefined;
  media: string | undefined;
  /** @deprecated */
  type: string | undefined;
}

/** style renders the [`style`](https://developer.mozilla.org/docs/Web/HTML/Element/style) element. */
export function style(props: StyleProps): string {
  return renderElement("style", props);
}
