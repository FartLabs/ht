import { renderElement } from "./shared/mod.ts";

/**
 * head renders a head element.
 */
export function head(props: Record<PropertyKey, unknown>): string {
  return renderElement("head", props);
}
