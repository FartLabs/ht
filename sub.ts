import { renderElement } from "./shared/mod.ts";

/**
 * sub renders a sub element.
 */
export function sub(props: Record<PropertyKey, unknown>): string {
  return renderElement("sub", props);
}
