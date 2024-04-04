import { renderElement } from "./shared/mod.ts";

/**
 * HgroupProps are the props for the [`hgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/hgroup) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/hgroup
 */
export interface HgroupProps {
  children: unknown[] | undefined;
}

/** hgroup renders the [`hgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/hgroup) element. */
export function hgroup(props: HgroupProps): string {
  return renderElement("hgroup", props);
}
