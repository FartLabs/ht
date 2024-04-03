import { renderElement } from "./shared/mod.ts";

/**
 * img renders a img element.
 */
export function img(props: Record<PropertyKey, unknown>): string {
  return renderElement("img", props);
}
