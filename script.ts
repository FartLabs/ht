import { renderElement } from "./shared/mod.ts";

/**
 * script renders a script element.
 */
export function script(props: Record<PropertyKey, unknown>): string {
  return renderElement("script", props);
}
