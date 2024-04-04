import type { ChildrenProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * ParamProps are the props for the [`param`](https://developer.mozilla.org/docs/Web/HTML/Element/param) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/param
 * @deprecated
 */
export interface ParamProps extends GlobalAttributes {
  /** @deprecated */
  name?: string | undefined;
  /** @deprecated */
  type?: string | undefined;
  /** @deprecated */
  value?: string | undefined;
  /** @deprecated */
  valuetype?: string | undefined;
}

/**
 * param renders the [`param`](https://developer.mozilla.org/docs/Web/HTML/Element/param) element.
 * @deprecated
 */
export function param(props?: ParamProps & ChildrenProps): string {
  return renderElement("param", props);
}
