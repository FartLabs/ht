import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * SummaryProps are the props for the [`summary`](https://developer.mozilla.org/docs/Web/HTML/Element/summary) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/summary
 */
export interface SummaryProps extends GlobalAttributes {
  display_list_item?: string | undefined;
}

/** summary renders the [`summary`](https://developer.mozilla.org/docs/Web/HTML/Element/summary) element. */
export function summary(props?: SummaryProps & ChildrenProps): string {
  return renderElement("summary", props);
}
