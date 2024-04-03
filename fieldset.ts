import { renderElement } from "./shared/mod.ts";

/**
 * fieldset renders a fieldset element.
 */
export function fieldset(props: Record<PropertyKey, unknown>): string {
  return renderElement("fieldset", props);
}
