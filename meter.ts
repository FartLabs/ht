import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * MeterProps are the props for the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Element/meter) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/meter>
 */
export interface MeterProps extends GlobalAttributes {
  high?: string | undefined;
  low?: string | undefined;
  max?: string | undefined;
  min?: string | undefined;
  optimum?: string | undefined;
  value?: string | undefined;
}

/**
 * meter renders the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Element/meter) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/meter>
 */
export function meter(props?: MeterProps, ...children: string[]): string {
  return renderElement("meter", props as AnyProps, false, children);
}
