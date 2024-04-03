import { renderElement } from "./shared/mod.ts";

/**
 * article renders a article element.
 */
export function article(props: Record<PropertyKey, unknown>): string {
  return renderElement("article", props);
}
