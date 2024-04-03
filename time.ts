import { renderElement } from "./shared/mod.ts";

/**
 * time renders a time element.
 */
export function time(props: Record<PropertyKey, unknown>): string {
  return renderElement("time", props);
}
