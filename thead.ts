import { renderElement } from "./shared/mod.ts";

/**
 * thead renders a thead element.
 */
export function thead(props: Record<PropertyKey, unknown>): string {
  return renderElement("thead", props);
}
