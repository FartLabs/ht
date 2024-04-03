import { renderElement } from "./shared/mod.ts";

/**
 * caption renders a caption element.
 */
export function caption(props: Record<PropertyKey, unknown>): string {
  return renderElement("caption", props);
}
