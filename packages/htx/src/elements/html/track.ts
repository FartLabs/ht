/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { TrackElementProps } from "@fartlabs/ht/html/track";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";
export type { TrackElementProps };

/**
 * TRACK renders the [`track`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track>
 */
export function TRACK(
  props?: TrackElementProps & { children?: string | string[] | undefined },
): string {
  const { children: _propsChildren, ...rest } = props ?? {};
  return renderElement("track", rest as AnyProps, true);
}
