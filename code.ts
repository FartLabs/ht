import { renderElement } from "./shared/mod.ts";

/**
 * code renders a code element.
 */
export function code(props: Record<PropertyKey, unknown>): string {
  return renderElement("code", props);
}
