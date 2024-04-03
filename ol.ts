import { renderElement } from "./shared/mod.ts";

/**
 * ol renders a ol element.
 */
export function ol(props: Record<PropertyKey, unknown>): string {
  return renderElement("ol", props);
}
