import { renderElement } from "./shared/mod.ts";

/**
 * rtc renders a rtc element.
 */
export function rtc(props: Record<PropertyKey, unknown>): string {
  return renderElement("rtc", props);
}
