import { renderElement } from "./shared/mod.ts";

/**
 * VarProps are the props for the [`var`](https://developer.mozilla.org/docs/Web/HTML/Element/var) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/var
 */
export interface VarProps {
  children: unknown[] | undefined;
}

/** var_ renders the [`var`](https://developer.mozilla.org/docs/Web/HTML/Element/var) element. */
export function var_(props: VarProps): string {
  return renderElement("var", props);
}
