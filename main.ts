import { renderElement } from "./shared/mod.ts";

/**
 * main renders a main element.
 */
export function main(props: Record<PropertyKey, unknown>): string {
  return renderElement("main", props);
}
