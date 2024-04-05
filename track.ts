import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TrackElementProps are the props for the [`track`](https://developer.mozilla.org/docs/Web/HTML/Element/track) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/track>
 */
export interface TrackElementProps extends GlobalAttributes {
  /** `default` is an attribute of the [`track`](https://developer.mozilla.org/docs/Web/HTML/Element/track) element. */
  default?: string | undefined;
  /** `kind` is an attribute of the [`track`](https://developer.mozilla.org/docs/Web/HTML/Element/track) element. */
  kind?: string | undefined;
  /** `label` is an attribute of the [`track`](https://developer.mozilla.org/docs/Web/HTML/Element/track) element. */
  label?: string | undefined;
  /** `src` is an attribute of the [`track`](https://developer.mozilla.org/docs/Web/HTML/Element/track) element. */
  src?: string | undefined;
  /** `srclang` is an attribute of the [`track`](https://developer.mozilla.org/docs/Web/HTML/Element/track) element. */
  srclang?: string | undefined;
}

/**
 * track renders the [`track`](https://developer.mozilla.org/docs/Web/HTML/Element/track) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Element/track>
 */
export function track(props?: TrackElementProps): string {
  return renderElement("track", props as AnyProps, true);
}
