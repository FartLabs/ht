import { renderElement } from "./shared/mod.ts";

/**
 * AsideProps are the props for the [`aside`](https://developer.mozilla.org/docs/Web/HTML/Element/aside) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/aside
 */
export interface AsideProps {
  children: unknown[] | undefined;
}

/** aside renders the [`aside`](https://developer.mozilla.org/docs/Web/HTML/Element/aside) element. */
export function aside(props: AsideProps): string {
  return renderElement("aside", props);
}
