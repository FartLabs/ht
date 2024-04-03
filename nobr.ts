import { renderElement } from "./shared/mod.ts";

/**
 * nobr renders a nobr element.
 */
export function nobr(props: Record<PropertyKey, unknown>): string {
  return renderElement("nobr", props);
}
