import { renderElement } from "./shared/mod.ts";

/**
 * plaintext renders a plaintext element.
 */
export function plaintext(props: Record<PropertyKey, unknown>): string {
  return renderElement("plaintext", props);
}
