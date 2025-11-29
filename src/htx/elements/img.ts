/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ImgElementProps } from "../../elements/img.ts";
import { img } from "../../elements/img.ts";

/**
 * IMGProps are the JSX props for the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img>
 */
export type IMGProps = ImgElementProps & { children?: string | string[] };

/**
 * IMG renders the [`img`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img>
 */
export function IMG(props?: IMGProps): string {
  const { children: _children, ...rest } = props ?? {};
  return img(rest);
}
