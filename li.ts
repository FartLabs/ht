import { renderElement } from "./shared/mod.ts";

/**
 * LiProps are the props for the [`li`](https://developer.mozilla.org/docs/Web/HTML/Element/li) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/li
 */
export interface LiProps {
  children: unknown[] | undefined;
  /** @deprecated */
  type: string | undefined;
  value: string | undefined;
}

/** li renders the [`li`](https://developer.mozilla.org/docs/Web/HTML/Element/li) element. */
export function li(props: LiProps): string {
  return renderElement("li", props);
}
