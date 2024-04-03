import { renderElement } from "./shared/mod.ts";

/**
 * var renders a var element.
 */
export function var(props: Record<PropertyKey, unknown>): string {
  return renderElement("var", props);
}
