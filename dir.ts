import { renderElement } from "./shared/mod.ts";

/**
 * DirProps are the props for the [`dir`](https://developer.mozilla.org/docs/Web/HTML/Element/dir) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/dir
 */
export interface DirProps {
  children: unknown[] | undefined;
  /** @deprecated */
  compact: string | undefined;
}

/** dir renders the [`dir`](https://developer.mozilla.org/docs/Web/HTML/Element/dir) element. */
export function dir(props: DirProps): string {
  return renderElement("dir", props);
}
