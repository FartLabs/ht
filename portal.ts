import { renderElement } from "./shared/mod.ts";

/**
 * PortalProps are the props for the [`portal`](https://developer.mozilla.org/docs/Web/HTML/Element/portal) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/portal
 */
export interface PortalProps {
  children: unknown[] | undefined;
}

/** portal renders the [`portal`](https://developer.mozilla.org/docs/Web/HTML/Element/portal) element. */
export function portal(props: PortalProps): string {
  return renderElement("portal", props);
}
