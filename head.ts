import { renderElement } from "./shared/mod.ts";

/**
 * HeadProps are the props for the [`head`](https://developer.mozilla.org/docs/Web/HTML/Element/head) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/head
 */
export interface HeadProps {
  children: unknown[] | undefined;
  /** @deprecated */
  profile: string | undefined;
}

/** head renders the [`head`](https://developer.mozilla.org/docs/Web/HTML/Element/head) element. */
export function head(props: HeadProps): string {
  return renderElement("head", props);
}
