import { renderElement } from "./shared/mod.ts";

/**
 * TimeProps are the props for the [`time`](https://developer.mozilla.org/docs/Web/HTML/Element/time) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/time
 */
export interface TimeProps {
  children: unknown[] | undefined;
  datetime: string | undefined;
}

/** time renders the [`time`](https://developer.mozilla.org/docs/Web/HTML/Element/time) element. */
export function time(props: TimeProps): string {
  return renderElement("time", props);
}
