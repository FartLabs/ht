import { renderElement } from "./shared/mod.ts";

/**
 * dir renders a dir element.
 */
export function dir(props: Record<PropertyKey, unknown>): string {
  return renderElement("dir", props);
}
