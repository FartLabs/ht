import { renderElement } from "./shared/mod.ts";

/**
 * OptionProps are the props for the [`option`](https://developer.mozilla.org/docs/Web/HTML/Element/option) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/option
 */
export interface OptionProps {
  children: unknown[] | undefined;
  disabled: string | undefined;
  label: string | undefined;
  selected: string | undefined;
  value: string | undefined;
}

/** option renders the [`option`](https://developer.mozilla.org/docs/Web/HTML/Element/option) element. */
export function option(props: OptionProps): string {
  return renderElement("option", props);
}
