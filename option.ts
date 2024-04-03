import { renderElement } from "./shared/mod.ts";

/**
 * option renders a option element.
 */
export function option(props: Record<PropertyKey, unknown>): string {
  return renderElement("option", props);
}
