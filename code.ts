import { renderElement } from "./shared/mod.ts";

/**
 * CodeProps are the props for the [`code`](https://developer.mozilla.org/docs/Web/HTML/Element/code) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/code
 */
export interface CodeProps {
  children: unknown[] | undefined;
}

/** code renders the [`code`](https://developer.mozilla.org/docs/Web/HTML/Element/code) element. */
export function code(props: CodeProps): string {
  return renderElement("code", props);
}
