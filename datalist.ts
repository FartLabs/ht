import { renderElement } from "./shared/mod.ts";

/**
 * datalist renders a datalist element.
 */
export function datalist(props: Record<PropertyKey, unknown>): string {
  return renderElement("datalist", props);
}
