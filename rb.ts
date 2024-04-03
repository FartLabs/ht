import { renderElement } from "./shared/mod.ts";

/**
 * rb renders a rb element.
 */
export function rb(props: Record<PropertyKey, unknown>): string {
  return renderElement("rb", props);
}
