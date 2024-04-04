import { renderElement } from "./shared/mod.ts";

/**
 * OptgroupProps are the props for the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/optgroup) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/optgroup
 */
export interface OptgroupProps {
  children: unknown[] | undefined;
  disabled: string | undefined;
  label: string | undefined;
}

/** optgroup renders the [`optgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/optgroup) element. */
export function optgroup(props: OptgroupProps): string {
  return renderElement("optgroup", props);
}
