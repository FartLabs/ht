import { renderElement } from "./shared/mod.ts";

/**
 * noembed renders a noembed element.
 */
export function noembed(props: Record<PropertyKey, unknown>): string {
  return renderElement("noembed", props);
}
