/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { ProgressElementProps } from "../../elements/progress.ts";
import { progress } from "../../elements/progress.ts";

/**
 * PROGRESSProps are the JSX props for the [`progress`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress) element in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress>
 */
export type PROGRESSProps = ProgressElementProps & {
  children?: string | string[];
};

/**
 * PROGRESS renders the [`progress`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress) element for use with JSX in HTX.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress>
 */
export function PROGRESS(props?: PROGRESSProps): string {
  const { children, ...rest } = props ?? {};
  const childArray = children === undefined || children === null
    ? []
    : Array.isArray(children)
    ? children
    : [children];
  return progress(rest, ...childArray);
}
