import { renderElement } from "./shared/mod.ts";

/**
 * FieldsetProps are the props for the [`fieldset`](https://developer.mozilla.org/docs/Web/HTML/Element/fieldset) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/fieldset
 */
export interface FieldsetProps {
  children: unknown[] | undefined;
  disabled: string | undefined;
  form: string | undefined;
  name: string | undefined;
}

/** fieldset renders the [`fieldset`](https://developer.mozilla.org/docs/Web/HTML/Element/fieldset) element. */
export function fieldset(props: FieldsetProps): string {
  return renderElement("fieldset", props);
}
