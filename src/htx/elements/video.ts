/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { VideoElementProps } from "../../elements/video.ts";
import { video } from "../../elements/video.ts";

/**
 * VIDEOProps are the JSX props for the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video>
 */
export type VIDEOProps = VideoElementProps & { children?: string | string[] };

/**
 * VIDEO renders the [`video`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video>
 */
export function VIDEO(props?: VIDEOProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return video(rest, ...childArray);
}
