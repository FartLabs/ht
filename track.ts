/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AnyProps, GlobalAttributes } from "./lib/mod.ts";
import { renderElement } from "./lib/mod.ts";

/**
 * TrackElementProps are the props for the [`track`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track>
 */
export interface TrackElementProps extends GlobalAttributes {
  /**
   * `default` is an attribute of the [`track`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track#default>
   */
  default?: string | undefined;
  /**
   * `kind` is an attribute of the [`track`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track#kind>
   */
  kind?: string | undefined;
  /**
   * `label` is an attribute of the [`track`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track#label>
   */
  label?: string | undefined;
  /**
   * `src` is an attribute of the [`track`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track#src>
   */
  src?: string | undefined;
  /**
   * `srclang` is an attribute of the [`track`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track#srclang>
   */
  srclang?: string | undefined;
}

/**
 * track renders the [`track`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track>
 */
export function track(props?: TrackElementProps): string {
  return renderElement("track", props as AnyProps, true);
}
