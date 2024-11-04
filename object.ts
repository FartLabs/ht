/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ObjectElementProps are the props for the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/object>
 */
export interface ObjectElementProps extends GlobalAttributes {
  /**
   * `archive` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/object#archive>
   * @deprecated
   */
  archive?: string | undefined;
  /**
   * `border` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/object#border>
   * @deprecated
   */
  border?: string | undefined;
  /**
   * `classid` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/object#classid>
   * @deprecated
   */
  classid?: string | undefined;
  /**
   * `codebase` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/object#codebase>
   * @deprecated
   */
  codebase?: string | undefined;
  /**
   * `codetype` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/object#codetype>
   * @deprecated
   */
  codetype?: string | undefined;
  /**
   * `data` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/object#data>
   */
  data?: string | undefined;
  /**
   * `declare` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/object#declare>
   * @deprecated
   */
  declare?: string | undefined;
  /**
   * `form` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/object#form>
   */
  form?: string | undefined;
  /**
   * `height` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/object#height>
   */
  height?: string | undefined;
  /**
   * `name` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/object#name>
   */
  name?: string | undefined;
  /**
   * `standby` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/object#standby>
   * @deprecated
   */
  standby?: string | undefined;
  /**
   * `tabindex` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/object#tabindex>
   * @deprecated
   */
  tabindex?: string | undefined;
  /**
   * `type` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/object#type>
   */
  type?: string | undefined;
  /**
   * `usemap` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/object#usemap>
   * @deprecated
   */
  usemap?: string | undefined;
  /**
   * `width` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Element/object#width>
   */
  width?: string | undefined;
}

/**
 * object renders the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/object>
 */
export function object(
  props?: ObjectElementProps,
  ...children: string[]
): string {
  return renderElement("object", props as AnyProps, false, children);
}
