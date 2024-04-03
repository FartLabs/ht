import { renderElement } from "./shared/mod.ts";

/**
 * summary renders a summary element.
 */
export function summary(props: Record<PropertyKey, unknown>): string {
  return renderElement("summary", props);
}
