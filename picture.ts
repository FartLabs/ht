import { renderElement } from "./shared/mod.ts";

/**
 * picture renders a picture element.
 */
export function picture(props: Record<PropertyKey, unknown>): string {
  return renderElement("picture", props);
}
