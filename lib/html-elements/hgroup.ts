/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "../mod.ts";
import { renderElement } from "../mod.ts";

/**
 * HgroupElementProps are the props for the [`hgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hgroup>
 */
export interface HgroupElementProps extends GlobalAttributes {
}

/**
 * hgroup renders the [`hgroup`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hgroup) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hgroup>
 */
export function hgroup(
  props?: HgroupElementProps,
  ...children: string[]
): string {
  return renderElement("hgroup", props as AnyProps, false, children);
}
