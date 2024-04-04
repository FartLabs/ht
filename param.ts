import { renderElement } from "./shared/mod.ts";

/**
 * ParamProps are the props for the [`param`](https://developer.mozilla.org/docs/Web/HTML/Element/param) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/param
 */
export interface ParamProps {
  children: unknown[] | undefined;
  /** @deprecated */
  name: string | undefined;
  /** @deprecated */
  type: string | undefined;
  /** @deprecated */
  value: string | undefined;
  /** @deprecated */
  valuetype: string | undefined;
}

/** param renders the [`param`](https://developer.mozilla.org/docs/Web/HTML/Element/param) element. */
export function param(props: ParamProps): string {
  return renderElement("param", props);
}
