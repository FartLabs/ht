import { renderElement } from "./shared/mod.ts";

/**
 * LabelProps are the props for the [`label`](https://developer.mozilla.org/docs/Web/HTML/Element/label) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/label
 */
export interface LabelProps {
  children: unknown[] | undefined;
  for: string | undefined;
}

/** label renders the [`label`](https://developer.mozilla.org/docs/Web/HTML/Element/label) element. */
export function label(props: LabelProps): string {
  return renderElement("label", props);
}
