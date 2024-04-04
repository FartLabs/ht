import { renderElement } from "./shared/mod.ts";

/**
 * BaseProps are the props for the [`base`](https://developer.mozilla.org/docs/Web/HTML/Element/base) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/base
 */
export interface BaseProps {
  children: unknown[] | undefined;
  href: string | undefined;
  target: string | undefined;
}

/** base renders the [`base`](https://developer.mozilla.org/docs/Web/HTML/Element/base) element. */
export function base(props: BaseProps): string {
  return renderElement("base", props);
}
