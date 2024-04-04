import { renderElement } from "./shared/mod.ts";

/**
 * SelectProps are the props for the [`select`](https://developer.mozilla.org/docs/Web/HTML/Element/select) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/select
 */
export interface SelectProps {
  children: unknown[] | undefined;
  disabled: string | undefined;
  form: string | undefined;
  hr_in_select: string | undefined;
  multiple: string | undefined;
  name: string | undefined;
  required: string | undefined;
  size: string | undefined;
}

/** select renders the [`select`](https://developer.mozilla.org/docs/Web/HTML/Element/select) element. */
export function select(props: SelectProps): string {
  return renderElement("select", props);
}
