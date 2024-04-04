import { renderElement } from "./shared/mod.ts";

/**
 * DfnProps are the props for the [`dfn`](https://developer.mozilla.org/docs/Web/HTML/Element/dfn) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/dfn
 */
export interface DfnProps {
  children: unknown[] | undefined;
}

/** dfn renders the [`dfn`](https://developer.mozilla.org/docs/Web/HTML/Element/dfn) element. */
export function dfn(props: DfnProps): string {
  return renderElement("dfn", props);
}
