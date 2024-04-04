import { renderElement } from "./shared/mod.ts";

/**
 * HrProps are the props for the [`hr`](https://developer.mozilla.org/docs/Web/HTML/Element/hr) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/hr
 */
export interface HrProps {
  children: unknown[] | undefined;
  /** @deprecated */
  align: string | undefined;
  /** @deprecated */
  color: string | undefined;
  hr_in_select: string | undefined;
  /** @deprecated */
  noshade: string | undefined;
  /** @deprecated */
  size: string | undefined;
  /** @deprecated */
  width: string | undefined;
}

/** hr renders the [`hr`](https://developer.mozilla.org/docs/Web/HTML/Element/hr) element. */
export function hr(props: HrProps): string {
  return renderElement("hr", props);
}
