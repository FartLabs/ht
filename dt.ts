import { renderElement } from "./shared/mod.ts";

/**
 * DtProps are the props for the [`dt`](https://developer.mozilla.org/docs/Web/HTML/Element/dt) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/dt
 */
export interface DtProps {
  children: unknown[] | undefined;
}

/** dt renders the [`dt`](https://developer.mozilla.org/docs/Web/HTML/Element/dt) element. */
export function dt(props: DtProps): string {
  return renderElement("dt", props);
}
