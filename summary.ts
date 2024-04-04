import { renderElement } from "./shared/mod.ts";

/**
 * SummaryProps are the props for the [`summary`](https://developer.mozilla.org/docs/Web/HTML/Element/summary) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/summary
 */
export interface SummaryProps {
  children: unknown[] | undefined;
  display_list_item: string | undefined;
}

/** summary renders the [`summary`](https://developer.mozilla.org/docs/Web/HTML/Element/summary) element. */
export function summary(props: SummaryProps): string {
  return renderElement("summary", props);
}
