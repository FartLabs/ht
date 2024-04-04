import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * ObjectProps are the props for the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/object
 */
export interface ObjectProps extends GlobalAttributes {
  /** @deprecated */
  archive?: string | undefined;
  /** @deprecated */
  border?: string | undefined;
  /** @deprecated */
  classid?: string | undefined;
  /** @deprecated */
  codebase?: string | undefined;
  /** @deprecated */
  codetype?: string | undefined;
  data?: string | undefined;
  /** @deprecated */
  declare?: string | undefined;
  form?: string | undefined;
  height?: string | undefined;
  name?: string | undefined;
  /** @deprecated */
  standby?: string | undefined;
  /** @deprecated */
  tabindex?: string | undefined;
  type?: string | undefined;
  /** @deprecated */
  usemap?: string | undefined;
  width?: string | undefined;
}

/** object renders the [`object`](https://developer.mozilla.org/docs/Web/HTML/Element/object) element. */
export function object(props?: ObjectProps & ChildrenProps): string {
  return renderElement("object", props);
}
