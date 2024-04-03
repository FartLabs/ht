import { renderElement } from "./shared/mod.ts";

/**
 * dl renders a dl element.
 */
export function dl(props: Record<PropertyKey, unknown>): string {
  return renderElement("dl", props);
}
