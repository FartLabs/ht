import type { ChildrenProps, GlobalAttributes } from "./shared/mod.ts";
import { renderElement } from "./shared/mod.ts";

/**
 * TrackProps are the props for the [`track`](https://developer.mozilla.org/docs/Web/HTML/Element/track) element.
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/track
 */
export interface TrackProps extends GlobalAttributes {
  default?: string | undefined;
  kind?: string | undefined;
  label?: string | undefined;
  src?: string | undefined;
  srclang?: string | undefined;
}

/** track renders the [`track`](https://developer.mozilla.org/docs/Web/HTML/Element/track) element. */
export function track(props?: TrackProps & ChildrenProps): string {
  return renderElement("track", props);
}
