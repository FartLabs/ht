import { renderElement } from "./shared/mod.ts";

/**
 * OutputProps are the props for the [`output`](https://developer.mozilla.org/docs/Web/HTML/Element/output) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/output
 */
export interface OutputProps {
  children: unknown[] | undefined;
  for: string | undefined;
  form: string | undefined;
  name: string | undefined;
}

/** output renders the [`output`](https://developer.mozilla.org/docs/Web/HTML/Element/output) element. */
export function output(props: OutputProps): string {
  return renderElement("output", props);
}
