import { renderElement } from "./shared/mod.ts";

/**
 * sup renders a sup element.
 */
export function sup(props: Record<PropertyKey, unknown>): string {
  return renderElement("sup", props);
}
