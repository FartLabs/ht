import { renderElement } from "./shared/mod.ts";

/**
 * br renders a br element.
 */
export function br(props: Record<PropertyKey, unknown>): string {
  return renderElement("br", props);
}
