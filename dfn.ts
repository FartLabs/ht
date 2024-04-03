import { renderElement } from "./shared/mod.ts";

/**
 * dfn renders a dfn element.
 */
export function dfn(props: Record<PropertyKey, unknown>): string {
  return renderElement("dfn", props);
}
