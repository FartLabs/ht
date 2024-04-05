import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ObjectElementProps are the props for the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/object>
 */
export interface ObjectElementProps extends GlobalAttributes {
  /**
   * `archive` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @deprecated
   */
  archive?: string | undefined;
  /**
   * `border` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @deprecated
   */
  border?: string | undefined;
  /**
   * `classid` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @deprecated
   */
  classid?: string | undefined;
  /**
   * `codebase` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @deprecated
   */
  codebase?: string | undefined;
  /**
   * `codetype` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @deprecated
   */
  codetype?: string | undefined;
  /** `data` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element. */
  data?: string | undefined;
  /**
   * `declare` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @deprecated
   */
  declare?: string | undefined;
  /** `form` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element. */
  form?: string | undefined;
  /** `height` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element. */
  height?: string | undefined;
  /** `name` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element. */
  name?: string | undefined;
  /**
   * `standby` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @deprecated
   */
  standby?: string | undefined;
  /**
   * `tabindex` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @deprecated
   */
  tabindex?: string | undefined;
  /** `type` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element. */
  type?: string | undefined;
  /**
   * `usemap` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
   * @deprecated
   */
  usemap?: string | undefined;
  /** `width` is an attribute of the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element. */
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
