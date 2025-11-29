/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TrackElementProps } from "../../elements/track.ts";
import { track } from "../../elements/track.ts";

/**
 * TRACKProps are the JSX props for the [`track`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track>
 */
export type TRACKProps = TrackElementProps & { children?: string | string[] };

/**
 * TRACK renders the [`track`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track>
 */
export function TRACK(props?: TRACKProps): string {
  const { children: _children, ...rest } = props ?? {};
  return track(rest);
}
