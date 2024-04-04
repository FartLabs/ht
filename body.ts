import { renderElement } from "./shared/mod.ts";

/**
 * BodyProps are the props for the [`body`](https://developer.mozilla.org/docs/Web/HTML/Element/body) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/body
 */
export interface BodyProps {
  children: unknown[] | undefined;
  /** @deprecated */
  alink: string | undefined;
  /** @deprecated */
  background: string | undefined;
  /** @deprecated */
  bgcolor: string | undefined;
  /** @deprecated */
  bottommargin: string | undefined;
  /** @deprecated */
  leftmargin: string | undefined;
  /** @deprecated */
  link: string | undefined;
  /** @deprecated */
  rightmargin: string | undefined;
  /** @deprecated */
  text: string | undefined;
  /** @deprecated */
  topmargin: string | undefined;
  /** @deprecated */
  vlink: string | undefined;
}

/** body renders the [`body`](https://developer.mozilla.org/docs/Web/HTML/Element/body) element. */
export function body(props: BodyProps): string {
  return renderElement("body", props);
}
