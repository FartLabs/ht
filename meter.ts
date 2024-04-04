import { renderElement } from "./shared/mod.ts";

/**
 * MeterProps are the props for the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Element/meter) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/meter
 */
export interface MeterProps {
  children: unknown[] | undefined;
  high: string | undefined;
  low: string | undefined;
  max: string | undefined;
  min: string | undefined;
  optimum: string | undefined;
  value: string | undefined;
}

/** meter renders the [`meter`](https://developer.mozilla.org/docs/Web/HTML/Element/meter) element. */
export function meter(props: MeterProps): string {
  return renderElement("meter", props);
}
