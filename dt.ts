import { renderElement } from "./shared/mod.ts";

/**
 * dt renders a dt element.
 */
export function dt(props: Record<PropertyKey, unknown>): string {
  return renderElement("dt", props);
}
