/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { AudioElementProps } from "../../elements/audio.ts";
import { audio } from "../../elements/audio.ts";

/**
 * AUDIOProps are the JSX props for the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio>
 */
export type AUDIOProps = AudioElementProps & { children?: string | string[] };

/**
 * AUDIO renders the [`audio`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio>
 */
export function AUDIO(props?: AUDIOProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return audio(rest, ...childArray);
}
