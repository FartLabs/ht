import { renderElement } from "./shared/mod.ts";

/**
 * audio renders a audio element.
 */
export function audio(props: Record<PropertyKey, unknown>): string {
  return renderElement("audio", props);
}
