import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * HgroupElementProps are the props for the [`hgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/hgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/hgroup>
 */
export interface HgroupElementProps extends GlobalAttributes {
}

/**
 * hgroup renders the [`hgroup`](https://developer.mozilla.org/docs/Web/HTML/Element/hgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/hgroup>
 */
export function hgroup(
  props?: HgroupElementProps,
  ...children: string[]
): string {
  return renderElement("hgroup", props as AnyProps, false, children);
}
