import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ProgressProps are the props for the [`progress`](https://developer.mozilla.org/docs/Web/HTML/Element/progress) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/progress>
 */
export interface ProgressProps extends GlobalAttributes {
  max?: string | undefined;
  value?: string | undefined;
}

/**
 * progress renders the [`progress`](https://developer.mozilla.org/docs/Web/HTML/Element/progress) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/progress>
 */
export function progress(props?: ProgressProps, ...children: string[]): string {
  return renderElement("progress", props as AnyProps, false, children);
}
