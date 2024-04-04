import { renderElement } from "./shared/mod.ts";

/**
 * RtProps are the props for the [`rt`](https://developer.mozilla.org/docs/Web/HTML/Element/rt) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/rt
 */
export interface RtProps {
  children: unknown[] | undefined;
}

/** rt renders the [`rt`](https://developer.mozilla.org/docs/Web/HTML/Element/rt) element. */
export function rt(props: RtProps): string {
  return renderElement("rt", props);
}
