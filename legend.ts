import { renderElement } from "./shared/mod.ts";

/**
 * legend renders a legend element.
 */
export function legend(props: Record<PropertyKey, unknown>): string {
  return renderElement("legend", props);
}
