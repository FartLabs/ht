import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * ProgressProps are the props for the [`progress`](https://developer.mozilla.org/docs/Web/HTML/Element/progress) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/progress
 */
export interface ProgressProps extends GlobalAttributes {
  max?: string | undefined;
  value?: string | undefined;
}

/** progress renders the [`progress`](https://developer.mozilla.org/docs/Web/HTML/Element/progress) element. */
export function progress(props?: ProgressProps & ChildrenProps): string {
  return renderElement("progress", props);
}
